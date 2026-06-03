from __future__ import annotations

import json
import os
import pathlib
import re
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
    methodology = build_methodology_output(serialized_result)
    if methodology:
        artifacts.setdefault("methodology_recommendation", methodology)
        # Also expose at artifacts.methodology for frontend lookups
        artifacts.setdefault("methodology", methodology)
        rpp = artifacts.get("research_plan_package")
        if not isinstance(rpp, dict) or not rpp.get("recommended_methodology"):
            # Merge: methodology fields at top level, scope fields nested if already present
            artifacts["research_plan_package"] = {**methodology, **(rpp if isinstance(rpp, dict) else {})}

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

    RUNS[run_id] = {
        "run_id": run_id,
        "discovery_id": inputs["discovery_id"],
        "status": "running",
        "current_state": "INITIAL_PLANNING_RUNNING",
        "inputs": inputs,
        "intake_files": raw_files,
        "validated_file_paths": validated_file_paths,
        "file_read_warnings": file_read_warnings,
        "outputs": {},
        "artifacts": {},
        "recommended_methods": [],
        "required_user_inputs": {},
        "created_at": created_at,
        "updated_at": created_at,
    }
    _save_runs(RUNS)

    try:
        crew_result = run_initial_planning_crew(inputs)
        outputs = serialize_for_json(crew_result)
        artifacts = build_artifacts(inputs, outputs)
        recommended_methods = first_collected_value(outputs, "recommended_methods")
        # Fallback: build_artifacts already extracted methodology; reuse it so we never
        # return an empty list when the Crew produced valid method recommendations.
        if not recommended_methods:
            m = artifacts.get("methodology_recommendation") or artifacts.get("methodology") or {}
            if isinstance(m, dict):
                recommended_methods = m.get("recommended_methods") or []
        required_user_inputs = build_required_user_inputs(outputs)
        updated_at = now_iso()

        RUNS[run_id].update(
            {
                "status": "waiting_human",
                "current_state": "RESEARCH_APPROVAL_PENDING",
                "outputs": outputs,
                "artifacts": artifacts,
                "recommended_methods": recommended_methods,
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
