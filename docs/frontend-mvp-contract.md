# Discovery AI Frontend MVP Contract

## Scope

This contract describes the target MVP workflow expected by the Discovery AI frontend. It does not change current app behavior. The existing local CrewAI proxy remains in place and can be adapted later to forward to these backend endpoints.

## MVP Architecture Correction

Agents are in MVP. CrewAI processing and discovery intelligence are the intelligence layer of Discovery AI, and the frontend is the workflow interaction layer. The research conversational assistant is future, but the agent workflow, output contracts, agent processing states, structured outputs and human approval gates remain part of MVP.

The MVP validates the agent-driven discovery workflow without depending on enterprise integrations.

External integrations may be simulated in MVP using manual input, file upload, mock data, fixture outputs, local storage and mock backend responses.

Target MVP workflow:

```text
Create Discovery
-> Discovery Charter Review
-> Research Plan Approval
-> Evidence Upload
-> Insights Review
-> Opportunity Review
-> Recommendation & Handoff
-> Completed
```

## 1. Workflow States

| State | Purpose | Frontend expectation | Next transition |
| --- | --- | --- | --- |
| `CREATE_DISCOVERY` | User provides initial discovery title, problem, objective, participants, CSD, links, files, and selected methodology. | Show the full-page new discovery flow and submit kickoff input. | `DISCOVERY_CHARTER_REVIEW` after backend run produces a charter artifact. |
| `DISCOVERY_CHARTER_REVIEW` | Human reviews the discovery charter before research planning continues. | Render charter summary, scope, objective, assumptions, readiness, and approval controls. | `RESEARCH_PLAN_APPROVAL` after human approval via resume. |
| `RESEARCH_PLAN_APPROVAL` | Human reviews the research plan and methodology sequence. | Render plan, methods, sample, timeline, participant strategy, risks, and approval controls. | `EVIDENCE_UPLOAD` after human approval via resume. |
| `EVIDENCE_UPLOAD` | User uploads or links evidence used by the discovery run. | Render upload/list UI for files and links, then allow continue/resume. | `INSIGHTS_REVIEW` after evidence submission and backend processing. |
| `INSIGHTS_REVIEW` | Human reviews synthesized insights from evidence. | Render insights, confidence, source references, and accept/request-change controls. | `OPPORTUNITY_REVIEW` after approval via resume. |
| `OPPORTUNITY_REVIEW` | Human reviews mapped opportunities and hypotheses. | Render opportunities, hypotheses, prioritization, risks, and approval controls. | `RECOMMENDATION_HANDOFF` after approval via resume. |
| `RECOMMENDATION_HANDOFF` | Human reviews final recommendation and handoff package. | Render recommendation, next steps, artifacts, decision rationale, and handoff controls. | `COMPLETED` after final acceptance via resume. |
| `COMPLETED` | Discovery is finalized. | Render read-only discovery, final outputs, artifact groups, and handoff package. | Terminal state. |
| `FAILED` | Backend run failed. | Render error state, logs/status, and retry/resume options where possible. | Retry kickoff or resume depending on backend support. |
| `CANCELLED` | Backend run was cancelled. | Render cancelled state and preserve available outputs. | Terminal unless backend supports reopen. |

## 1.1 MVP Agent Scope

The MVP includes:

- core discovery agents;
- research intelligence agents;
- strategy/opportunity/recommendation agents;
- output contracts;
- agent processing states;
- human approval gates;
- manual evidence upload;
- structured outputs.

Out of MVP are external integrations and automation connectors, including Teams, Outlook, Tech Metrics, DataDog, product databases, analytics platforms, research repositories, Jira/Linear, Slack/Teams notifications, SSO/permissions, advanced dashboards, conversational assistant and automated external data retrieval.

## 2. Frontend Events

| Event | Trigger | Payload expectation | Target endpoint |
| --- | --- | --- | --- |
| `discovery:create_submitted` | User clicks `Criar discovery`. | Initial discovery inputs, selected product, CSD, participants, methodology, files/links metadata. | `POST /kickoff` |
| `run:status_requested` | Polling timer or manual refresh. | `run_id`. | `GET /status/{run_id}` |
| `run:details_requested` | Opening or refreshing an existing run. | `run_id`. | `GET /runs/{run_id}` |
| `run:outputs_requested` | Rendering a review/completed step. | `run_id`. | `GET /outputs/{run_id}` |
| `run:artifacts_requested` | Rendering artifact panels. | `run_id`. | `GET /runs/{run_id}/artifacts` |
| `human_gate:approved` | User approves current human gate. | `run_id`, current state, decision, optional comment. | `POST /resume` |
| `human_gate:changes_requested` | User requests changes at a gate. | `run_id`, current state, requested changes, optional artifact references. | `POST /resume` |
| `evidence:uploaded` | User uploads evidence files or links. | `run_id`, files or link references, evidence metadata. | `POST /runs/{run_id}/evidence` |
| `evidence:submitted` | User finishes evidence step. | `run_id`, submitted evidence ids, optional notes. | `POST /resume` |
| `handoff:accepted` | User accepts final recommendation/handoff. | `run_id`, current state, decision. | `POST /resume` |

## 3. Human Gates

The frontend should treat the following states as blocking human gates. The backend run should pause or wait for a resume decision before progressing.

| Gate | Blocking state | Required user action | Resume decision examples |
| --- | --- | --- | --- |
| Discovery Charter Review | `DISCOVERY_CHARTER_REVIEW` | Approve charter or request changes. | `approve_charter`, `request_charter_changes` |
| Research Plan Approval | `RESEARCH_PLAN_APPROVAL` | Approve plan or request changes. | `approve_research_plan`, `request_plan_changes` |
| Evidence Upload | `EVIDENCE_UPLOAD` | Submit evidence and continue. | `submit_evidence`, `skip_evidence_with_reason` |
| Insights Review | `INSIGHTS_REVIEW` | Approve insights or request changes. | `approve_insights`, `request_insight_changes` |
| Opportunity Review | `OPPORTUNITY_REVIEW` | Approve opportunities or request changes. | `approve_opportunities`, `request_opportunity_changes` |
| Recommendation & Handoff | `RECOMMENDATION_HANDOFF` | Accept handoff or request changes. | `accept_handoff`, `request_handoff_changes` |

Minimum resume payload expected by the frontend:

```json
{
  "run_id": "run_123",
  "state": "DISCOVERY_CHARTER_REVIEW",
  "decision": "approve_charter",
  "comment": "Approved for research planning.",
  "metadata": {
    "user_id": "perfil-ambev-demo",
    "timestamp": "2026-05-25T00:00:00.000Z"
  }
}
```

## 4. Backend Endpoints Expected By The Frontend

The target backend contract uses these endpoints:

### `POST /kickoff`

Starts a discovery workflow run.

Expected request:

```json
{
  "inputs": {
    "discovery_id": "draft-id",
    "product_id": "cora-precos",
    "title": "Discovery title",
    "problem": "Problem statement",
    "objective": "Objective statement",
    "owners": ["Bruno Lima"],
    "users": ["Analista de Topline"],
    "stakeholders": ["Pricing Squad"],
    "certainties": ["Known facts"],
    "assumptions": ["Assumptions"],
    "open_questions": ["Open questions"],
    "methodology_id": "optimized",
    "links": ["https://example.com"],
    "deadline": "2026-06-01"
  }
}
```

Expected response:

```json
{
  "run_id": "run_123",
  "discovery_id": "draft-id",
  "state": "CREATE_DISCOVERY",
  "status": "running"
}
```

Compatibility note: the current prototype expects `kickoff_id`. The MVP frontend should normalize `run_id` and `kickoff_id` during migration.

### `GET /status/{run_id}`

Returns lightweight run status for polling.

Expected response:

```json
{
  "run_id": "run_123",
  "discovery_id": "draft-id",
  "state": "DISCOVERY_CHARTER_REVIEW",
  "status": "waiting_for_human",
  "updated_at": "2026-05-25T00:00:00.000Z",
  "current_gate": "discovery_charter_review"
}
```

### `POST /resume`

Resumes a paused run after a human gate decision.

Expected request:

```json
{
  "run_id": "run_123",
  "state": "RESEARCH_PLAN_APPROVAL",
  "decision": "approve_research_plan",
  "comment": "",
  "metadata": {
    "user_id": "perfil-ambev-demo"
  }
}
```

Expected response:

```json
{
  "run_id": "run_123",
  "state": "EVIDENCE_UPLOAD",
  "status": "waiting_for_human"
}
```

### `GET /outputs/{run_id}`

Returns normalized workflow outputs for the current or completed run.

Expected response:

```json
{
  "run_id": "run_123",
  "state": "INSIGHTS_REVIEW",
  "outputs": {
    "charter": {},
    "research_plan": {},
    "insights": [],
    "opportunities": [],
    "recommendation": {},
    "handoff": {}
  }
}
```

### `GET /runs/{run_id}`

Returns detailed run metadata.

Expected response:

```json
{
  "run_id": "run_123",
  "discovery_id": "draft-id",
  "product_id": "cora-precos",
  "state": "INSIGHTS_REVIEW",
  "status": "waiting_for_human",
  "created_at": "2026-05-25T00:00:00.000Z",
  "updated_at": "2026-05-25T00:15:00.000Z",
  "created_by": "perfil-ambev-demo"
}
```

### `GET /runs/{run_id}/artifacts`

Returns artifact metadata grouped for frontend rendering.

Expected response:

```json
{
  "run_id": "run_123",
  "artifact_groups": [
    {
      "id": "charter",
      "title": "Discovery Charter",
      "artifacts": []
    }
  ]
}
```

### `POST /runs/{run_id}/evidence`

Uploads or registers evidence.

Expected request:

```json
{
  "evidence": [
    {
      "type": "link",
      "url": "https://example.com",
      "title": "Source title"
    }
  ],
  "notes": "Evidence submitted by PM."
}
```

Expected response:

```json
{
  "run_id": "run_123",
  "evidence_ids": ["evidence_1"],
  "status": "received"
}
```

## 5. Artifact Groups Rendered By The Frontend

The frontend should render artifacts in stable groups, regardless of how many backend tasks generated them.

| Group id | Group title | Example artifacts |
| --- | --- | --- |
| `charter` | Discovery Charter | DOR, problem framing, objective, assumptions, readiness review. |
| `research_plan` | Research Plan | Methodology, method sequence, sample, recruitment strategy, timeline. |
| `evidence` | Evidence | Uploaded files, links, transcripts, desk research sources, notes. |
| `insights` | Insights | Synthesized insights, confidence, evidence references, quality review. |
| `opportunities` | Opportunities | Opportunity map, hypotheses, prioritization, risk matrix. |
| `validation` | Validation | Prototype requirements, experiment design, validation strategy. |
| `recommendation` | Recommendation | Strategic recommendation, decision rationale, next steps. |
| `handoff` | Handoff Package | Final package, acceptance checklist, artifacts for product/engineering. |
| `raw_outputs` | Raw Outputs | Backend raw payloads for debugging and traceability. |

## 6. Current Prototype Routes Hosting Each MVP Step

| MVP step | Current route host | Notes |
| --- | --- | --- |
| Create Discovery | `#product/:productId` plus full-page modal | Current entry point is product detail `Novo Discovery`. |
| Discovery Charter Review | `#discovery/:discoveryId/:productId` | Can host charter/readiness section in the discovery page. |
| Research Plan Approval | `#discovery/:discoveryId/:productId` | Existing methodology panel can evolve into approval UI. |
| Evidence Upload | `#discovery/:discoveryId/:productId` | Existing artifacts/evidence/chat areas can host upload and evidence list. |
| Insights Review | `#discovery/:discoveryId/:productId` and `#synthesis/:discoveryId/:productId` | Discovery page already renders insights; synthesis page can host deeper review. |
| Opportunity Review | `#synthesis/:discoveryId/:productId` | Current synthesis page has opportunity/hypothesis-style sections. |
| Recommendation & Handoff | `#synthesis/:discoveryId/:productId` | Current synthesis page is the best fit for final recommendation/handoff. |
| Completed | `#synthesis/:discoveryId/:productId` or read-only `#discovery/:discoveryId/:productId` | Final state can route to synthesis by default and link back to discovery detail. |

## 7. What Remains Mock-Only

The following behaviors remain mock-only in the current prototype:

- Products and product metadata are static arrays in `app.js`.
- Most discoveries and product discovery cards are static/mock data.
- Created discoveries are in-memory only and disappear on refresh.
- Product favorites are local-only via `localStorage`, not backend-backed.
- Current profile is hardcoded as `perfil-ambev-demo`.
- Interview participant list and recruitment status simulation are local mock behavior.
- Participant transcript, recording modal, and playback are mock behavior.
- Method entry files are local metadata only, not uploaded.
- New discovery support files are not sent to the backend.
- Evidence upload is represented through manual input and endpoint contracts; external evidence repositories are future.
- Human gates are represented in the frontend and can be simulated by the mock agent adapter; durable server-side pause/resume depends on the real backend.
- `POST /api/discovery/resume`, `GET /api/discovery/outputs/{run_id}`, `GET /api/discovery/runs/{run_id}`, `GET /api/discovery/runs/{run_id}/artifacts`, and `POST /api/discovery/runs/{run_id}/evidence` are exposed by the local proxy and use mock agent outputs when no real backend is configured.
- CrewAI output rendering is best-effort normalization, not a stable typed schema.
- Approval decisions, comments, and reviewer identity are not persisted.
- External integrations are not required for MVP validation and may be simulated through manual input, file upload, mock data, fixture outputs, local storage and mock backend responses.
