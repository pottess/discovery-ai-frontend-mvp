from __future__ import annotations

import json
import os
import pathlib
import uuid
from datetime import datetime, timezone
from typing import Any

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field


app = FastAPI(title="Discovery AI Local API", version="0.1.0")

# backend/data/ lives two levels above the discovery_ai package directory
_DATA_DIR = pathlib.Path(__file__).parent.parent.parent / "data"
_REAL_RUNS_FILE = _DATA_DIR / "real-runs.json"


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


class KickoffRequest(BaseModel):
    inputs: dict[str, Any] = Field(default_factory=dict)


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

    RUNS[run_id] = {
        "run_id": run_id,
        "discovery_id": inputs["discovery_id"],
        "status": "running",
        "current_state": "INITIAL_PLANNING_RUNNING",
        "inputs": inputs,
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
