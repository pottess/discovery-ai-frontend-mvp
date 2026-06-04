from __future__ import annotations

import json
import os
import pathlib
import re
import unicodedata
import uuid
from datetime import datetime, timezone
from typing import Any

# Matches ```json ... ``` or ``` ... ``` code fences that LLMs often wrap JSON in
_CODE_FENCE_RE = re.compile(r"^```[a-z]*\s*\n?([\s\S]*?)\n?```\s*$", re.DOTALL)

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field


app = FastAPI(title="Discovery AI Local API", version="0.1.0")

# backend/data/ lives two levels above the discovery_ai package directory
_DATA_DIR = pathlib.Path(__file__).parent.parent.parent / "data"
_REAL_RUNS_FILE = _DATA_DIR / "real-runs.json"
_UPLOAD_BASE_DIR = _DATA_DIR / "uploads"

# Safe file intake constraints
ALLOWED_FILE_EXTENSIONS: frozenset[str] = frozenset({".txt", ".csv", ".json", ".md", ".xlsx", ".xls", ".pdf", ".docx"})
MAX_FILE_SIZE_BYTES: int = 512 * 1024  # 512 KB per file
MAX_FILES_PER_RUN: int = 10


def _load_runs() -> dict[str, dict[str, Any]]:
    """Load persisted runs from disk. Returns {} on any error or missing file."""
    try:
        if _REAL_RUNS_FILE.exists():
            raw = json.loads(_REAL_RUNS_FILE.read_text(encoding="utf-8"))
            if isinstance(raw, dict):
                return raw
    except Exception:
        pass
    return {}


def _save_runs(runs: dict[str, dict[str, Any]]) -> None:
    """Persist runs to disk. Silently ignores write errors."""
    try:
        _DATA_DIR.mkdir(parents=True, exist_ok=True)
        _REAL_RUNS_FILE.write_text(
            json.dumps(runs, indent=2, ensure_ascii=False, default=str),
            encoding="utf-8",
        )
    except Exception:
        pass


RUNS: dict[str, dict[str, Any]] = _load_runs()

TASK_ORDER = [
    "build_d_o_r_framework",
    "validate_discovery_readiness",
    "define_discovery_methodology",
    "prioritize_discovery_scope",
    "create_research_execution_plan",
    "define_participant_strategy",
    "define_research_operational_structure",
    "create_research_execution_protocols",
    "execute_desk_research_evidence_collection",
    "primary_research_execution",
    "synthesize",
    "insight_qa",
    "map_strategic_opportunities",
    "generate_solution_hypotheses",
    "define_prototype_requirements",
    "prototype_definition",
    "define_validation_strategy",
    "design_validation_experiment",
    "generate_strategic_recommendation",
    "generate_delivery_handoff_package",
]

TASK_ARTIFACT_MAP = {
    "build_d_o_r_framework": "discovery_charter",
    "validate_discovery_readiness": "readiness",
    "define_discovery_methodology": "research_plan_package",
    "prioritize_discovery_scope": "research_plan_package",
    "create_research_execution_plan": "research_plan_package",
    "define_participant_strategy": "research_plan_package",
    "define_research_operational_structure": "research_plan_package",
    "create_research_execution_protocols": "research_protocols",
    "execute_desk_research_evidence_collection": "evidence_inventory",
    "primary_research_execution": "evidence_inventory",
    "synthesize": "insights_package",
    "insight_qa": "insight_quality",
    "map_strategic_opportunities": "opportunity_package",
    "generate_solution_hypotheses": "solution_hypotheses",
    "define_prototype_requirements": "prototype",
    "prototype_definition": "prototype",
    "define_validation_strategy": "validation",
    "design_validation_experiment": "validation",
    "generate_strategic_recommendation": "recommendation",
    "generate_delivery_handoff_package": "handoff",
}


class UploadedFileRef(BaseModel):
    """Reference to a user-provided file attached at intake."""

    name: str = Field(default="")
    path: str = Field(default="")
    type: str = Field(default="")
    size: int = Field(default=0)
    uploaded_at: str = Field(default="")
    uploadedAt: str = Field(default="")


def validate_intake_file(file_ref: dict[str, Any]) -> str | None:
    """Return a resolved, safe absolute path or None if the file fails any security check.

    Checks (in order):
    - path must be non-empty
    - resolved path must be inside _UPLOAD_BASE_DIR (no path traversal)
    - extension must be in ALLOWED_FILE_EXTENSIONS
    - file must exist and be a regular file (not a directory or special file)
    - file size must not exceed MAX_FILE_SIZE_BYTES
    """
    raw_path = str(file_ref.get("path", "") or "").strip()
    if not raw_path:
        return None

    resolved = pathlib.Path(raw_path).resolve()

    try:
        resolved.relative_to(_UPLOAD_BASE_DIR.resolve())
    except ValueError:
        return None

    if resolved.suffix.lower() not in ALLOWED_FILE_EXTENSIONS:
        return None

    if not resolved.is_file():
        return None

    try:
        if resolved.stat().st_size > MAX_FILE_SIZE_BYTES:
            return None
    except OSError:
        return None

    return str(resolved)


def normalize_uploaded_file_ref(file_ref: Any) -> dict[str, Any]:
    if isinstance(file_ref, str):
        path_value = file_ref.strip()
        return {
            "name": pathlib.Path(path_value).name,
            "path": path_value,
            "type": "",
            "size": 0,
            "uploaded_at": "",
        }

    if not isinstance(file_ref, dict):
        return {}

    uploaded_at = str(file_ref.get("uploaded_at") or file_ref.get("uploadedAt") or "")
    return {
        "name": str(file_ref.get("name") or pathlib.Path(str(file_ref.get("path", ""))).name or ""),
        "path": str(file_ref.get("path") or ""),
        "type": str(file_ref.get("type") or ""),
        "size": int(file_ref.get("size") or 0),
        "uploaded_at": uploaded_at,
    }


def collect_kickoff_file_refs(request: "KickoffRequest", inputs: dict[str, Any]) -> list[dict[str, Any]]:
    candidates: list[Any] = [f.model_dump() for f in request.files[:MAX_FILES_PER_RUN]]

    for key in ("files", "file"):
        value = inputs.get(key)
        if isinstance(value, list):
            candidates.extend(value)
        elif value:
            candidates.append(value)

    file_refs: list[dict[str, Any]] = []
    seen_paths: set[str] = set()
    for candidate in candidates:
        file_ref = normalize_uploaded_file_ref(candidate)
        path_value = file_ref.get("path")
        name_value = file_ref.get("name")
        dedupe_key = path_value or f"name:{name_value}"
        if not dedupe_key or dedupe_key in seen_paths:
            continue
        if not path_value and not name_value:
            continue
        seen_paths.add(dedupe_key)
        file_refs.append(file_ref)

    return file_refs[:MAX_FILES_PER_RUN]


def validate_kickoff_file_refs(file_refs: list[dict[str, Any]]) -> tuple[list[dict[str, Any]], list[str], list[str]]:
    valid_refs: list[dict[str, Any]] = []
    valid_paths: list[str] = []
    warnings: list[str] = []

    for file_ref in file_refs:
        validated_path = validate_intake_file(file_ref)
        if not validated_path:
            display_name = file_ref.get("name") or file_ref.get("path") or "arquivo sem nome"
            warnings.append(f"Arquivo não pôde ser lido: {display_name}")
            continue

        resolved_ref = {
            **file_ref,
            "path": validated_path,
            "name": file_ref.get("name") or pathlib.Path(validated_path).name,
        }
        valid_refs.append(resolved_ref)
        valid_paths.append(validated_path)

    return valid_refs, valid_paths, warnings


def as_list(value: Any) -> list[Any]:
    if value is None:
        return []
    if isinstance(value, list):
        return value
    if isinstance(value, (tuple, set)):
        return list(value)
    if isinstance(value, str):
        return [value] if value.strip() else []
    return [value]


def normalize_search_text(value: Any) -> str:
    text = str(value or "").lower()
    normalized = unicodedata.normalize("NFKD", text)
    return "".join(char for char in normalized if not unicodedata.combining(char))


def contains_any(text: str, keywords: list[str]) -> bool:
    return any(normalize_search_text(keyword) in text for keyword in keywords)


def collect_intake_text(inputs: dict[str, Any]) -> str:
    chunks = [
        inputs.get("title"),
        inputs.get("objective"),
        inputs.get("problem"),
        inputs.get("description"),
        inputs.get("deadline"),
        " ".join(str(item) for item in as_list(inputs.get("certainties"))),
        " ".join(str(item) for item in as_list(inputs.get("assumptions"))),
        " ".join(str(item) for item in as_list(inputs.get("open_questions"))),
    ]
    return normalize_search_text(" ".join(str(chunk) for chunk in chunks if chunk))


def parse_timebox_days(deadline: Any) -> tuple[int | None, str]:
    text = str(deadline or "").strip()
    normalized = normalize_search_text(text)
    if not normalized:
        return None, "Prazo não informado"

    relative_patterns = [
        (r"(\d+)\s*(dia|dias|day|days)", 1),
        (r"(\d+)\s*(semana|semanas|week|weeks)", 7),
        (r"(\d+)\s*(mes|meses|month|months)", 30),
    ]
    for pattern, multiplier in relative_patterns:
        match = re.search(pattern, normalized)
        if match:
            days = max(1, int(match.group(1)) * multiplier)
            if contains_any(normalized, ["mais de", "acima de", "maior que"]):
                days += 1
            return days, text

    for date_format in ("%d/%m/%Y", "%d-%m-%Y", "%Y-%m-%d", "%d/%m/%y"):
        try:
            deadline_date = datetime.strptime(text[:10], date_format)
            today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
            days = max(1, (deadline_date - today).days)
            return days, text
        except ValueError:
            continue

    return None, text


def classify_timebox(deadline: Any) -> dict[str, Any]:
    days, available_time = parse_timebox_days(deadline)
    if days is None:
        return {
            "classification": "short_discovery",
            "available_time": available_time,
            "implications": [
                "Sem prazo estruturado, assumir discovery curto como envelope conservador para MVP.",
                "Limitar quantidade de métodos e evitar estudos longos até o usuário informar uma janela real.",
            ],
        }

    if days <= 5:
        return {
            "classification": "sprint_discovery",
            "available_time": available_time,
            "implications": [
                "Priorizar métodos leves, rápidos e focados no risco crítico.",
                "Não recomendar estudos longitudinais, recrutamento complexo ou jornadas profundas.",
            ],
        }

    if days <= 14:
        return {
            "classification": "short_discovery",
            "available_time": available_time,
            "implications": [
                "Recomendar no máximo dois ou três métodos.",
                "Combinar exploração leve com validação rápida quando houver incertezas sobrepostas.",
            ],
        }

    if days <= 42:
        return {
            "classification": "medium_discovery",
            "available_time": available_time,
            "implications": [
                "Permite pesquisa mais estruturada e ciclos iterativos quando fizer sentido.",
                "Ainda exige foco por risco dominante para evitar escopo amplo demais.",
            ],
        }

    return {
        "classification": "expanded_discovery",
        "available_time": available_time,
        "implications": [
            "Permite estudos longitudinais, multi-stakeholder ou jornadas completas se o problema justificar.",
            "Manter proporcionalidade entre profundidade, risco e conhecimento disponível.",
        ],
    }


def count_people(inputs: dict[str, Any], keys: list[str]) -> int:
    count = 0
    for key in keys:
        value = inputs.get(key)
        if isinstance(value, dict):
            count += sum(len(as_list(item)) for item in value.values())
        else:
            count += len(as_list(value))
    return count


def build_methodology_decision_matrix(inputs: dict[str, Any]) -> dict[str, Any]:
    text = collect_intake_text(inputs)
    certainty_count = len(as_list(inputs.get("certainties")))
    assumption_count = len(as_list(inputs.get("assumptions")))
    doubt_count = len(as_list(inputs.get("open_questions")))
    file_count = len(as_list(inputs.get("files") or inputs.get("file")))
    link_count = len(as_list(inputs.get("links") or inputs.get("link")))
    evidence_count = file_count + link_count
    user_count = count_people(inputs, ["users", "personas"])
    stakeholder_count = count_people(inputs, ["stakeholders", "owners", "participants"])

    timebox = classify_timebox(inputs.get("deadline"))
    has_interface_signal = contains_any(text, ["tela", "fluxo", "interface", "usabilidade", "ux", "jornada de uso", "feature", "prototipo", "protótipo"])
    has_validation_intent = contains_any(text, ["validar", "confirmar", "hipotese", "hipótese", "conceito", "proposta", "teste de conceito"])
    has_solution_signal = contains_any(text, ["solucao", "solução", "mvp", "prototipo", "protótipo"]) or has_validation_intent
    has_exploratory_signal = contains_any(text, ["descobrir", "entender", "explorar", "mapear", "diagnosticar", "necessidade", "motivacao", "motivação"])
    has_process_signal = contains_any(text, ["processo", "operacao", "operação", "backoffice", "rotina", "procedimento"])
    has_service_signal = contains_any(text, ["servico", "serviço", "cross-channel", "omnichannel", "atendimento"])
    has_business_signal = contains_any(text, ["roi", "receita", "margem", "orcamento", "orçamento", "budget", "negocio", "negócio", "adesao", "adesão"])
    has_feasibility_signal = contains_any(text, ["engenharia", "tecnico", "técnico", "integracao", "integração", "dados", "api", "dependencia", "dependência"])
    has_compliance_signal = contains_any(text, ["compliance", "juridico", "jurídico", "regulatorio", "regulatório", "lgpd"])
    has_benchmark_signal = contains_any(text, ["benchmark", "mercado", "concorrente", "documentacao", "documentação", "regulacao", "regulação"])

    if has_interface_signal and not has_validation_intent:
        problem_type = "interface_evaluation"
    elif has_solution_signal:
        problem_type = "solution_validation"
    elif has_process_signal:
        problem_type = "operational_flow"
    elif has_business_signal:
        problem_type = "product_strategy"
    else:
        problem_type = "problem_discovery" if has_exploratory_signal or doubt_count > certainty_count + 1 else "product_strategy"

    dominant_uncertainty: list[str] = []
    if has_interface_signal:
        dominant_uncertainty.append("usability")
    if has_solution_signal or contains_any(text, ["valor", "aderencia", "aderência", "demanda"]):
        dominant_uncertainty.extend(["value", "desirability"])
    if has_feasibility_signal:
        dominant_uncertainty.append("feasibility")
    if has_business_signal:
        dominant_uncertainty.append("business_viability")
    if has_process_signal:
        dominant_uncertainty.append("operational_viability")
    if not dominant_uncertainty:
        dominant_uncertainty = ["desirability", "value"]
    dominant_uncertainty = list(dict.fromkeys(dominant_uncertainty))

    if evidence_count >= 2 or (certainty_count >= 3 and doubt_count <= max(1, assumption_count)):
        knowledge_maturity = "high"
    elif evidence_count >= 1 or certainty_count + assumption_count + doubt_count >= 3:
        knowledge_maturity = "medium"
    else:
        knowledge_maturity = "low"

    if user_count >= 2:
        user_access = "high"
    elif user_count == 1:
        user_access = "medium"
    elif stakeholder_count:
        user_access = "low"
    else:
        user_access = "none"

    if has_interface_signal:
        ecosystem_nature = "interface"
    elif has_service_signal:
        ecosystem_nature = "service"
    elif has_process_signal:
        ecosystem_nature = "operation"
    else:
        ecosystem_nature = "product"

    constraints = []
    if timebox["classification"] == "sprint_discovery":
        constraints.append("Prazo de 1 a 5 dias limita profundidade e quantidade de métodos.")
    if user_access in {"none", "low"}:
        constraints.append("Acesso baixo ou inexistente a usuários exige métodos leves, proxies ou validação assíncrona.")
    if has_compliance_signal:
        constraints.append("Há possível restrição de compliance/jurídico/regulação.")
    if has_feasibility_signal:
        constraints.append("Há possível dependência técnica, de dados ou engenharia.")
    if inputs.get("file_read_warnings"):
        constraints.append("Alguns arquivos anexados não puderam ser lidos e não devem bloquear o briefing.")

    if problem_type in {"interface_evaluation", "solution_validation"}:
        dominant_frame = "test"
    elif problem_type == "problem_discovery":
        dominant_frame = "empathize"
    elif problem_type == "operational_flow":
        dominant_frame = "define"
    else:
        dominant_frame = "define"

    return {
        "timebox": timebox,
        "problem_type": problem_type,
        "dominant_uncertainty": dominant_uncertainty,
        "knowledge_maturity": knowledge_maturity,
        "user_access": user_access,
        "ecosystem_nature": ecosystem_nature,
        "constraints": constraints,
        "dominant_design_thinking_frame": dominant_frame,
        "decision_rationale": [
            "A decisão começou pelo envelope possível de prazo, acesso e evidência disponível.",
            f"Tipo de problema classificado como {problem_type} a partir dos sinais do briefing.",
            f"Maturidade do conhecimento classificada como {knowledge_maturity} com base em CSD, arquivos e links.",
            f"Acesso a usuários classificado como {user_access}.",
            "Métodos longos ou sem aderência ao risco dominante foram descartados.",
        ],
        "_signals": {
            "certainty_count": certainty_count,
            "assumption_count": assumption_count,
            "doubt_count": doubt_count,
            "evidence_count": evidence_count,
            "has_benchmark_signal": has_benchmark_signal,
            "has_interface_signal": has_interface_signal,
            "has_validation_intent": has_validation_intent,
            "has_solution_signal": has_solution_signal,
            "has_exploratory_signal": has_exploratory_signal,
        },
    }


METHOD_CATALOG: dict[str, dict[str, Any]] = {
    "heuristic_analysis": {
        "method_name": "Análise heurística",
        "expected_evidence": "Relatório de avaliação especialista com problemas, severidade e recomendações.",
        "estimated_effort": "low",
    },
    "prototype": {
        "method_name": "Prototipação",
        "expected_evidence": "Protótipo navegável, fluxo ou artefato testável da proposta.",
        "estimated_effort": "medium",
    },
    "usability_test": {
        "method_name": "Teste de usabilidade",
        "expected_evidence": "Notas, gravações ou transcrições de sessões com tarefas, fricções e taxa de sucesso.",
        "estimated_effort": "medium",
    },
    "concept_test": {
        "method_name": "Teste de conceito",
        "expected_evidence": "Feedback estruturado sobre clareza, valor percebido, aderência e dúvidas do conceito.",
        "estimated_effort": "low",
    },
    "interview": {
        "method_name": "Entrevista em profundidade",
        "expected_evidence": "Transcrições ou notas de entrevistas sobre contexto, comportamento, motivação e necessidades.",
        "estimated_effort": "high",
    },
    "survey": {
        "method_name": "Survey rápido",
        "expected_evidence": "Planilha CSV/XLSX com respostas, distribuição de percepções e segmentos.",
        "estimated_effort": "medium",
    },
    "desk_research": {
        "method_name": "Pesquisa documental",
        "expected_evidence": "Notas, links, benchmarks, documentação, materiais prévios ou análise regulatória.",
        "estimated_effort": "low",
    },
    "workshop": {
        "method_name": "Workshop de definição",
        "expected_evidence": "Notas de alinhamento, mapa de decisões, riscos, hipóteses e prioridades.",
        "estimated_effort": "medium",
    },
    "analytics_review": {
        "method_name": "Análise de analytics",
        "expected_evidence": "Métricas de funil, uso, conversão, erro, abandono ou comportamento agregado.",
        "estimated_effort": "low",
    },
    "stakeholder_interview": {
        "method_name": "Entrevista com stakeholders",
        "expected_evidence": "Notas sobre objetivos, restrições, critérios de sucesso e riscos organizacionais.",
        "estimated_effort": "low",
    },
}


def build_method(method_id: str, why: str, when: str, risks: list[str], sequence_order: int) -> dict[str, Any]:
    method = METHOD_CATALOG[method_id]
    return {
        "method_id": method_id,
        "method_name": method["method_name"],
        "why_recommended": why,
        "when_to_use": when,
        "expected_evidence": method["expected_evidence"],
        "estimated_effort": method["estimated_effort"],
        "sequence_order": sequence_order,
        "fits_timebox": True,
        "risk_addressed": risks,
    }


def cap_methods_for_timebox(method_ids: list[str], timebox_classification: str) -> list[str]:
    if timebox_classification == "sprint_discovery":
        return method_ids[:2]
    if timebox_classification == "short_discovery":
        return method_ids[:3]
    return method_ids[:5]


def build_methodology_decision(inputs: dict[str, Any], decision_matrix: dict[str, Any]) -> dict[str, Any]:
    problem_type = decision_matrix["problem_type"]
    timebox_classification = decision_matrix["timebox"]["classification"]
    maturity = decision_matrix["knowledge_maturity"]
    user_access = decision_matrix["user_access"]
    signals = decision_matrix.get("_signals", {})
    uncertainties = decision_matrix["dominant_uncertainty"]

    if problem_type == "interface_evaluation":
        methodology = "evaluative"
        label = "Discovery Avaliativa"
        method_ids = ["heuristic_analysis", "prototype", "usability_test", "concept_test"]
    elif problem_type == "solution_validation":
        methodology = "validation"
        label = "Discovery de Validação"
        method_ids = ["concept_test", "prototype", "usability_test", "survey"]
    elif problem_type == "problem_discovery" and maturity == "low":
        methodology = "exploratory"
        label = "Discovery Exploratória"
        method_ids = ["interview", "stakeholder_interview", "desk_research"]
    elif problem_type == "operational_flow":
        methodology = "mixed"
        label = "Discovery Mista de Processo"
        method_ids = ["stakeholder_interview", "workshop", "heuristic_analysis"]
    else:
        methodology = "mixed"
        label = "Discovery Mista"
        method_ids = ["desk_research", "concept_test", "usability_test"]

    if maturity == "high" and methodology == "exploratory":
        methodology = "mixed"
        label = "Discovery Mista com Validação Rápida"
        method_ids = ["desk_research", "concept_test", "usability_test"]

    if not signals.get("has_benchmark_signal") and not signals.get("evidence_count") and "desk_research" in method_ids:
        method_ids = [method_id for method_id in method_ids if method_id != "desk_research"]

    if user_access == "none":
        method_ids = [method_id for method_id in method_ids if method_id not in {"interview", "usability_test", "survey"}]
        method_ids.extend(["stakeholder_interview", "heuristic_analysis"])

    method_ids = list(dict.fromkeys(cap_methods_for_timebox(method_ids, timebox_classification)))
    if len(method_ids) < 2:
        for fallback_id in ("heuristic_analysis", "concept_test", "stakeholder_interview"):
            if fallback_id not in method_ids:
                method_ids.append(fallback_id)
            if len(method_ids) >= 2:
                break

    why_by_method = {
        "heuristic_analysis": "Há sinais de tela, fluxo, interface ou melhoria incremental; a avaliação especialista reduz risco de usabilidade com baixo esforço.",
        "prototype": "A discovery precisa materializar a proposta ou alteração antes de validar entendimento e interação.",
        "usability_test": "O risco dominante inclui usabilidade e exige observar interação real com fluxo, tela ou protótipo.",
        "concept_test": "Existe hipótese, conceito ou direção de solução que precisa ser validada antes de avançar.",
        "interview": "O problema ou público ainda é ambíguo e requer contexto qualitativo sobre comportamento, motivação e necessidade.",
        "survey": "Há necessidade de medir escala, distribuição de percepções ou priorização com mais respondentes.",
        "desk_research": "Há material, link, benchmark, documentação ou contexto externo útil para consolidar conhecimento existente.",
        "workshop": "Há necessidade de alinhar stakeholders e transformar conhecimento disperso em decisões priorizadas.",
        "analytics_review": "Há sinal de métricas ou comportamento agregado que pode reduzir risco rapidamente.",
        "stakeholder_interview": "Acesso a usuários é limitado ou há dependências organizacionais que precisam ser explicitadas.",
    }
    when_by_method = {
        "heuristic_analysis": "Use no início para levantar fricções e hipóteses de melhoria antes de envolver usuários.",
        "prototype": "Use antes de testes quando ainda não houver artefato testável.",
        "usability_test": "Use quando houver produto, fluxo ou protótipo navegável para observar tarefas reais.",
        "concept_test": "Use quando a solução ainda for conceitual e precisar validar clareza e valor percebido.",
        "interview": "Use quando a pergunta principal ainda for sobre comportamento, motivação, necessidade ou contexto.",
        "survey": "Use depois de hipóteses claras para validar escala, preferência ou segmentação.",
        "desk_research": "Use quando existirem materiais, dados, benchmarks, links ou regulação relevantes.",
        "workshop": "Use quando decisões e restrições internas precisarem ser alinhadas com rapidez.",
        "analytics_review": "Use quando dados de uso, funil, abandono ou erro estiverem disponíveis.",
        "stakeholder_interview": "Use quando for necessário entender restrições, metas, dependências e critérios de sucesso.",
    }

    recommended_methods = [
        build_method(method_id, why_by_method[method_id], when_by_method[method_id], uncertainties, index + 1)
        for index, method_id in enumerate(method_ids)
    ]

    not_recommended_methods = []
    for method_id, method in METHOD_CATALOG.items():
        if method_id in method_ids:
            continue
        if method_id == "interview" and problem_type in {"interface_evaluation", "solution_validation"}:
            reason = "Não é método primário quando o problema é claro e o risco dominante está em usabilidade, conceito ou solução."
        elif method_id == "desk_research" and not signals.get("has_benchmark_signal") and not signals.get("evidence_count"):
            reason = "Não há sinal de benchmark, documentação, regulação, arquivo ou link relevante para justificar pesquisa documental agora."
        elif timebox_classification == "sprint_discovery" and method["estimated_effort"] == "high":
            reason = "O prazo de sprint discovery não comporta método de alto esforço."
        else:
            reason = "Menor aderência ao risco dominante e ao envelope atual de prazo, acesso e maturidade."
        not_recommended_methods.append({"method_id": method_id, "reason": reason})

    confidence_base = {"low": 62, "medium": 74, "high": 84}[maturity]
    confidence_delta = 0
    if user_access in {"medium", "high"}:
        confidence_delta += 4
    if signals.get("evidence_count"):
        confidence_delta += min(6, int(signals["evidence_count"]) * 2)
    if timebox_classification == "sprint_discovery":
        confidence_delta -= 5
    confidence_score = max(45, min(92, confidence_base + confidence_delta))

    priority_questions = {
        "interface_evaluation": [
            "Quais fricções impedem compreensão, conclusão ou confiança no fluxo atual?",
            "Qual solução ou protótipo reduz melhor o risco de usabilidade?",
            "Quais evidências mínimas são necessárias antes de avançar para implementação?",
        ],
        "solution_validation": [
            "O conceito resolve uma dor real e percebida pelo público-alvo?",
            "A proposta é clara, desejável e suficientemente confiável para avançar?",
            "Quais hipóteses precisam ser rejeitadas antes do investimento em entrega?",
        ],
        "problem_discovery": [
            "Qual comportamento, motivação ou necessidade ainda não está compreendido?",
            "Quais suposições são mais arriscadas para a decisão de produto?",
            "Que evidência mínima tornaria o problema suficientemente definido?",
        ],
        "operational_flow": [
            "Quais etapas, dependências e decisões geram maior fricção operacional?",
            "Quais stakeholders controlam ou sofrem o impacto do processo?",
            "Qual mudança reduziria risco operacional com menor esforço?",
        ],
    }.get(problem_type, [
        "Qual risco crítico precisa ser reduzido primeiro?",
        "Que evidência mínima sustenta a próxima decisão?",
        "O que deve ficar fora do escopo para manter foco?",
    ])

    scope_statement = (
        "Discovery proporcional ao envelope atual: focar no risco dominante, executar apenas métodos compatíveis "
        "com prazo, acesso e maturidade do conhecimento, e parar em RESEARCH_APPROVAL_PENDING para aprovação humana."
    )

    return {
        "decision_matrix": {key: value for key, value in decision_matrix.items() if key != "_signals"},
        "recommended_methodology": methodology,
        "methodology_label": label,
        "methodology_rationale": (
            "A metodologia foi definida por matriz determinística: risco crítico x prazo x acesso x maturidade. "
            f"O envelope é {timebox_classification}, o problema é {problem_type}, a maturidade é {maturity} "
            f"e o acesso a usuários é {user_access}."
        ),
        "confidence_score": confidence_score,
        "recommended_methods": recommended_methods,
        "not_recommended_methods": not_recommended_methods[:6],
        "priority_questions": priority_questions,
        "scope_statement": scope_statement,
        "out_of_scope": [
            "Discovery completo e genérico.",
            "Métodos longos incompatíveis com o prazo informado.",
            "Processamento de evidências antes de upload ou input do usuário.",
        ],
        "workflow_recommendation": "RESEARCH_APPROVAL_PENDING",
    }


def lock_methodology_decision(seed: dict[str, Any], generated: dict[str, Any]) -> dict[str, Any]:
    if not seed:
        return generated
    if not generated:
        return seed

    locked_keys = {
        "decision_matrix",
        "recommended_methodology",
        "methodology_label",
        "confidence_score",
        "recommended_methods",
        "not_recommended_methods",
        "workflow_recommendation",
    }
    merged = {**seed, **generated}
    for key in locked_keys:
        if key in seed:
            merged[key] = seed[key]
    return merged


class KickoffRequest(BaseModel):
    inputs: dict[str, Any] = Field(default_factory=dict)
    files: list[UploadedFileRef] = Field(default_factory=list)


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def normalize_inputs(inputs: dict[str, Any]) -> dict[str, Any]:
    normalized = dict(inputs or {})
    normalized.setdefault("discovery_id", f"discovery-{uuid.uuid4().hex[:10]}")
    normalized.setdefault("title", "")
    normalized.setdefault("objective", "")
    normalized.setdefault("problem", "")
    normalized.setdefault("deadline", "")
    normalized.setdefault("owners", "")
    normalized.setdefault("users", normalized.get("participants", []))
    normalized.setdefault("stakeholders", normalized.get("participants", []))
    normalized.setdefault("certainties", normalized.get("certezas", []))
    normalized.setdefault("assumptions", normalized.get("suposicoes", []))
    normalized.setdefault("open_questions", normalized.get("doubts", normalized.get("duvidas", [])))
    normalized.setdefault("file", normalized.get("files", []))
    normalized.setdefault("link", normalized.get("links", []))
    normalized.setdefault("file_read_warnings", [])
    normalized.setdefault("patterns", [])
    normalized.setdefault("contradictions", [])
    normalized.setdefault("evidence inventory", [])
    normalized.setdefault("hypothesis states", [])
    normalized.setdefault("synthesis output", "")
    normalized.setdefault("synthesis\n output", "")
    normalized.setdefault("confidence levels", [])
    normalized.setdefault("confidence\n levels", [])
    return normalized


def try_parse_json(value: Any) -> Any:
    if not isinstance(value, str):
        return value

    text = value.strip()
    if not text:
        return value

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    # LLMs often wrap JSON in ```json ... ``` fences — strip and retry
    fence_match = _CODE_FENCE_RE.match(text)
    if fence_match:
        inner = fence_match.group(1).strip()
        try:
            return json.loads(inner)
        except json.JSONDecodeError:
            pass

    return value


def serialize_for_json(value: Any, depth: int = 0) -> Any:
    if depth > 8:
        return str(value)

    if value is None or isinstance(value, (str, int, float, bool)):
        return try_parse_json(value)

    if isinstance(value, dict):
        return {str(key): serialize_for_json(item, depth + 1) for key, item in value.items()}

    if isinstance(value, (list, tuple, set)):
        return [serialize_for_json(item, depth + 1) for item in value]

    if hasattr(value, "model_dump"):
        return serialize_for_json(value.model_dump(), depth + 1)

    if hasattr(value, "dict"):
        try:
            return serialize_for_json(value.dict(), depth + 1)
        except TypeError:
            pass

    crew_fields = {}
    for field in ("raw", "json_dict", "pydantic", "tasks_output", "token_usage"):
        if hasattr(value, field):
            field_value = getattr(value, field)
            if field_value is not None:
                crew_fields[field] = serialize_for_json(field_value, depth + 1)

    if crew_fields:
        return crew_fields

    return str(value)


def task_name_from_output(task_output: Any, index: int) -> str:
    if isinstance(task_output, dict):
        for key in ("name", "task_name", "task", "id"):
            candidate = task_output.get(key)
            if candidate:
                return str(candidate)

        description = str(task_output.get("description", "")).lower()
        for task_name in TASK_ORDER:
            if task_name.replace("_", " ") in description or task_name in description:
                return task_name

    if index < len(TASK_ORDER):
        return TASK_ORDER[index]

    return f"task_{index + 1}"


def task_payload(task_output: Any) -> Any:
    if not isinstance(task_output, dict):
        return task_output

    for key in ("json_dict", "pydantic", "output", "result", "raw"):
        value = task_output.get(key)
        if value:
            return try_parse_json(value)

    return task_output


def extract_task_outputs(serialized_result: Any) -> list[Any]:
    if isinstance(serialized_result, dict):
        for key in ("tasks_output", "task_outputs", "tasks"):
            value = serialized_result.get(key)
            if isinstance(value, list):
                return value
    return []


def add_artifact_value(artifacts: dict[str, Any], artifact_key: str, task_name: str, value: Any) -> None:
    if artifact_key not in artifacts:
        artifacts[artifact_key] = value
        return

    existing = artifacts[artifact_key]
    if isinstance(existing, dict):
        if task_name not in existing:
            artifacts[artifact_key] = {task_name: value, **existing} if artifact_key == task_name else {**existing, task_name: value}
        else:
            existing[task_name] = value
        return

    artifacts[artifact_key] = {
        "primary": existing,
        task_name: value,
    }


def build_artifacts(inputs: dict[str, Any], serialized_result: Any) -> dict[str, Any]:
    artifacts: dict[str, Any] = {
        "discovery_charter": {
            "discovery_id": inputs.get("discovery_id"),
            "title": inputs.get("title"),
            "objective": inputs.get("objective"),
            "problem": inputs.get("problem"),
            "certainties": inputs.get("certainties", []),
            "assumptions": inputs.get("assumptions", []),
            "doubts": inputs.get("open_questions", []),
            "participants": inputs.get("participants") or inputs.get("users") or [],
            "links": inputs.get("links") or inputs.get("link") or [],
            "files": inputs.get("files") or inputs.get("file") or [],
            "file_read_warnings": inputs.get("file_read_warnings", []),
            "decision_matrix": inputs.get("decision_matrix", {}),
        }
    }

    for index, output in enumerate(extract_task_outputs(serialized_result)):
        task_name = task_name_from_output(output, index)
        artifact_key = TASK_ARTIFACT_MAP.get(task_name)
        if not artifact_key:
            continue
        add_artifact_value(artifacts, artifact_key, task_name, task_payload(output))

    if isinstance(serialized_result, dict):
        final_payload = serialized_result.get("json_dict") or try_parse_json(serialized_result.get("raw"))
        if isinstance(final_payload, dict):
            artifacts.setdefault("handoff", final_payload)

    # Promote define_discovery_methodology output to dedicated, stable artifact keys.
    # This is a belt-and-suspenders guard: if the task's raw output was a markdown-fenced
    # JSON string, try_parse_json already handled it above. If research_plan_package ended
    # up as a string (parse totally failed) or lacks recommended_methodology, repair it here.
    methodology_seed = inputs.get("methodology_decision", {})
    methodology = lock_methodology_decision(methodology_seed, build_methodology_output(serialized_result))
    if methodology:
        artifacts.setdefault("methodology_recommendation", methodology)
        # Also expose at artifacts.methodology for frontend lookups
        artifacts.setdefault("methodology", methodology)
        rpp = artifacts.get("research_plan_package")
        # Merge: methodology fields stay locked by the deterministic matrix, while
        # scope fields or nested task outputs from the Crew remain available.
        artifacts["research_plan_package"] = lock_methodology_decision(
            methodology,
            rpp if isinstance(rpp, dict) else {},
        )

    return artifacts


def collect_values_by_key(value: Any, target_key: str, depth: int = 0) -> list[Any]:
    if depth > 8:
        return []

    values: list[Any] = []

    if isinstance(value, dict):
        for key, item in value.items():
            if key == target_key and item:
                values.append(item)
            values.extend(collect_values_by_key(item, target_key, depth + 1))
        return values

    if isinstance(value, list):
        for item in value:
            values.extend(collect_values_by_key(item, target_key, depth + 1))

    return values


def first_collected_value(value: Any, target_key: str) -> Any:
    values = collect_values_by_key(value, target_key)
    return values[0] if values else []


def build_methodology_output(serialized_result: Any) -> dict[str, Any]:
    """Explicitly extract define_discovery_methodology task output.

    This is the belt-and-suspenders fallback for when first_collected_value
    cannot locate recommended_methods via recursive key search (e.g., the task
    output was stored in an unexpected nesting level).
    """
    for index, output in enumerate(extract_task_outputs(serialized_result)):
        task_name = task_name_from_output(output, index)
        if task_name == "define_discovery_methodology":
            payload = task_payload(output)
            if isinstance(payload, dict) and (
                payload.get("recommended_methods") or payload.get("recommended_methodology")
            ):
                return payload
    return {}


def build_required_user_inputs(serialized_result: Any) -> dict[str, Any]:
    required_user_inputs = {
        "clarification_questions": collect_values_by_key(serialized_result, "clarification_questions"),
        "missing_required_fields": collect_values_by_key(serialized_result, "missing_required_fields"),
        "required_user_action": collect_values_by_key(serialized_result, "required_user_action"),
    }
    return {key: value for key, value in required_user_inputs.items() if value}


def run_initial_planning_crew(inputs: dict[str, Any]) -> Any:
    from discovery_ai.crew import DiscoveryAiCrew

    return DiscoveryAiCrew().create_initial_planning_crew().kickoff(inputs=inputs)


def get_run_or_404(run_id: str) -> dict[str, Any]:
    run = RUNS.get(run_id)
    if not run:
        raise HTTPException(status_code=404, detail={"error": "run_id não encontrado.", "run_id": run_id})
    return run


@app.get("/health")
def health() -> dict[str, Any]:
    return {"status": "ok", "service": "discovery-ai-local-api", "timestamp": now_iso()}


@app.post("/kickoff")
def kickoff(request: KickoffRequest) -> dict[str, Any]:
    run_id = f"local-crew-run-{uuid.uuid4().hex}"
    inputs = normalize_inputs(request.inputs)
    created_at = now_iso()

    # Validate and resolve intake file references from both /kickoff.files and inputs.files.
    raw_files = collect_kickoff_file_refs(request, inputs)
    validated_file_refs, validated_file_paths, file_read_warnings = validate_kickoff_file_refs(raw_files)
    inputs["file"] = validated_file_paths
    inputs["files"] = validated_file_refs
    inputs["file_read_warnings"] = file_read_warnings
    decision_matrix = build_methodology_decision_matrix(inputs)
    methodology_decision = build_methodology_decision(inputs, decision_matrix)
    inputs["decision_matrix"] = methodology_decision["decision_matrix"]
    inputs["methodology_decision"] = methodology_decision

    RUNS[run_id] = {
        "run_id": run_id,
        "discovery_id": inputs["discovery_id"],
        "status": "running",
        "current_state": "INITIAL_PLANNING_RUNNING",
        "inputs": inputs,
        "intake_files": raw_files,
        "validated_file_paths": validated_file_paths,
        "file_read_warnings": file_read_warnings,
        "decision_matrix": methodology_decision["decision_matrix"],
        "methodology_decision": methodology_decision,
        "outputs": {},
        "artifacts": {},
        "recommended_methods": methodology_decision["recommended_methods"],
        "required_user_inputs": {},
        "created_at": created_at,
        "updated_at": created_at,
    }
    _save_runs(RUNS)

    try:
        crew_result = run_initial_planning_crew(inputs)
        outputs = serialize_for_json(crew_result)
        artifacts = build_artifacts(inputs, outputs)
        m = artifacts.get("methodology_recommendation") or artifacts.get("methodology") or {}
        recommended_methods = m.get("recommended_methods") if isinstance(m, dict) else []
        if not recommended_methods:
            recommended_methods = first_collected_value(outputs, "recommended_methods")
        required_user_inputs = build_required_user_inputs(outputs)
        updated_at = now_iso()

        RUNS[run_id].update(
            {
                "status": "waiting_human",
                "current_state": "RESEARCH_APPROVAL_PENDING",
                "outputs": outputs,
                "artifacts": artifacts,
                "recommended_methods": recommended_methods,
                "decision_matrix": methodology_decision["decision_matrix"],
                "methodology_decision": methodology_decision,
                "required_user_inputs": required_user_inputs,
                "updated_at": updated_at,
            }
        )
        _save_runs(RUNS)
    except Exception as error:
        updated_at = now_iso()
        RUNS[run_id].update(
            {
                "status": "failed",
                "current_state": "FAILED",
                "error": str(error),
                "updated_at": updated_at,
            }
        )
        _save_runs(RUNS)
        raise HTTPException(status_code=500, detail=RUNS[run_id]) from error

    return {
        "run_id": run_id,
        "discovery_id": RUNS[run_id]["discovery_id"],
        "status": RUNS[run_id]["status"],
        "current_state": RUNS[run_id]["current_state"],
        "state": RUNS[run_id]["current_state"],
        "outputs": RUNS[run_id]["outputs"],
        "artifacts": RUNS[run_id]["artifacts"],
        "recommended_methods": RUNS[run_id]["recommended_methods"],
        "decision_matrix": RUNS[run_id].get("decision_matrix", {}),
        "methodology_decision": RUNS[run_id].get("methodology_decision", {}),
        "required_user_inputs": RUNS[run_id]["required_user_inputs"],
        "intake_files": RUNS[run_id].get("intake_files", []),
        "validated_file_paths": RUNS[run_id].get("validated_file_paths", []),
        "file_read_warnings": RUNS[run_id].get("file_read_warnings", []),
        "created_at": RUNS[run_id]["created_at"],
        "updated_at": RUNS[run_id]["updated_at"],
    }


@app.get("/status/{run_id}")
def status(run_id: str) -> dict[str, Any]:
    run = get_run_or_404(run_id)
    return {
        "run_id": run["run_id"],
        "discovery_id": run["discovery_id"],
        "status": run["status"],
        "current_state": run["current_state"],
        "state": run["current_state"],
        "error": run.get("error"),
        "file_read_warnings": run.get("file_read_warnings", []),
        "created_at": run["created_at"],
        "updated_at": run["updated_at"],
    }


@app.get("/outputs/{run_id}")
def outputs(run_id: str) -> dict[str, Any]:
    run = get_run_or_404(run_id)
    return {
        "run_id": run["run_id"],
        "discovery_id": run["discovery_id"],
        "status": run["status"],
        "current_state": run["current_state"],
        "outputs": run.get("outputs", {}),
        "updated_at": run["updated_at"],
    }


@app.get("/runs/{run_id}/artifacts")
def artifacts(run_id: str) -> dict[str, Any]:
    run = get_run_or_404(run_id)
    return {
        "run_id": run["run_id"],
        "discovery_id": run["discovery_id"],
        "status": run["status"],
        "current_state": run["current_state"],
        "artifacts": run.get("artifacts", {}),
        "updated_at": run["updated_at"],
    }


def serve_api() -> None:
    import uvicorn

    host = os.getenv("DISCOVERY_AI_API_HOST", "127.0.0.1")
    port = int(os.getenv("DISCOVERY_AI_API_PORT", "8000"))
    reload = os.getenv("DISCOVERY_AI_API_RELOAD", "false").lower() == "true"
    uvicorn.run("discovery_ai.api:app", host=host, port=port, reload=reload)
