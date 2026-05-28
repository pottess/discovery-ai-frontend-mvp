# Frontend MVP Status

## MVP Architecture Correction

Agents are in MVP. CrewAI processing and discovery intelligence are core to Discovery AI, while the frontend remains the workflow interaction layer. The research conversational assistant is future, but the agent workflow, agent processing states, structured outputs and human approval gates are part of the MVP.

The MVP validates the agent-driven discovery workflow without depending on enterprise integrations.

## What Is Implemented

- Static single-page frontend with hash routing.
- Global app shell with fixed header, sidebar navigation and product/discovery shortcuts.
- Product catalog with search, grouping, favorites and product detail pages.
- Product audience management for personas and stakeholders, including local create/edit/archive/delete flows.
- Full-page new discovery flow with setup, participants, CSD and methodology steps.
- Local mock workflow mode for demo and QA without external credentials.
- MVP backend client mode with kickoff/status/resume/output/evidence/artifact calls through local proxy endpoints.
- Legacy CrewAI client mode with kickoff and status polling through local proxy endpoints.
- Discovery detail page with workflow cockpit, gates, methodology rail, people summary, CSD, evidence, insight, opportunity, recommendation and handoff panels.
- Synthesis, interview planning and interview session views.
- Product and discovery favorites persisted in `localStorage`.
- Product audience and created discoveries persisted in `localStorage`.
- Basic server-side protection option through basic auth.

## Pages Available

- Home repository view.
- Product catalog.
- Product detail.
- Product audience list.
- Persona detail and edit views.
- Stakeholder detail and edit views.
- Discovery detail.
- Synthesis.
- Interview planning.
- Interview session detail.
- Full-page new discovery modal.
- Method entry and evidence-related modals.

## MVP Workflow

The discovery workflow is represented in the frontend as a state machine with these conceptual stages:

- Discovery created.
- DOR analyzing.
- Research approval pending.
- Evidence upload pending.
- Primary research processing.
- Insight review pending.
- Opportunity review pending.
- Recommendation running.
- Handoff running.
- Completed.
- Failed.

In mock/demo mode, transitions and artifacts are simulated locally. In backend modes, the frontend expects remote kickoff/status/output responses and renders normalized artifacts when available.

## In MVP

- Core discovery agents.
- Research intelligence agents.
- Strategy, opportunity and recommendation agents.
- Output contracts for agent-generated artifacts.
- Agent processing states.
- Human approval gates.
- Manual evidence upload.
- Structured outputs.
- Frontend workflow screens for reviewing agent outputs.

## Out Of MVP / Future

- Teams integration.
- Outlook integration.
- Tech Metrics integration.
- DataDog integration.
- Product database integration.
- Analytics platform integration.
- Research repository integration.
- Jira/Linear integration.
- Slack/Teams notifications.
- SSO and permissions.
- Advanced dashboards.
- Conversational assistant.
- Automated external data retrieval.

External integrations may be simulated in MVP using manual input, file upload, mock data, fixture outputs, local storage and mock backend responses.

## Known Gaps

- No durable production backend persistence for all frontend state.
- No real authentication or user identity model in the frontend.
- `localStorage` is still the main persistence layer for demo state.
- File upload and external storage are not implemented as a stable contract.
- CrewAI and MVP backend outputs are normalized best-effort, not enforced by a frontend schema.
- Human approval gates are represented in the UI, but true server-side pause/resume semantics depend on backend implementation.
- Static hosting supports demo mode only and cannot provide proxy endpoints.
- No automated browser regression test suite yet.
- Accessibility coverage for all custom controls and modals still needs a dedicated pass.

## Next Steps For Backend And CrewAI Integration

- Finalize a stable discovery entity schema shared by frontend and backend.
- Finalize kickoff input fields for title, problem, objective, owners, personas, stakeholders, CSD, links and attachments.
- Define a versioned artifact/output schema for CrewAI and MVP backend responses.
- Add durable persistence for discoveries, product audience, favorites, workflow runs and artifacts.
- Add an upload/reference contract for evidence files.
- Implement real user identity and permissions after MVP validation.
- Replace local mock transitions with backend-driven workflow states when the backend is ready.
- Add focused smoke tests for routes, new discovery creation, polling, favorites and workflow gates.
