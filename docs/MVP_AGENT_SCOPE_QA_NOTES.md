# MVP Agent Scope QA Notes

## What Was Checked

- Documentation scope:
  - `docs/MVP_SCOPE_AND_ROADMAP.md` keeps agents, CrewAI workflow, structured outputs and human gates in MVP.
  - `docs/MVP_INTEGRATIONS_AND_FUTURE_ROADMAP.md` keeps agents in MVP and moves external connectors to future.
  - Conversational assistant is documented as future.
  - External integrations are documented as future.
- Home:
  - Conversational assistant UI is not visible.
  - Product bar is visible for the logged-in user's products.
  - Recent discoveries are visible.
  - Home copy does not imply that AI agents are future.
- Product page:
  - Simplified product layout remains in place.
  - Product indicators remain visible.
  - Product discoveries remain visible.
  - Product people management remains available through the page CTA.
  - Duplicate product people card and generic learnings section are not visible.
- Discovery page:
  - `Progresso do discovery` is visible.
  - The old large `Workflow MVP` card is not visible.
  - Progress still represents methodology/agent processing.
  - Methodology rail, related people, insights, artifacts and CSD remain visible.
  - Header contains squad, participants, period and methodology metadata.
- API/config:
  - `agentWorkflowEnabled` is `true`.
  - `conversationalAssistantEnabled` is `false`.
  - `externalIntegrationsEnabled` is `false`.
  - `agentMode` returns `mock` or `crewai` depending on local configuration.
  - Future integrations are exposed as future configuration, not MVP blockers.
- Favorites/menu:
  - Left rail contains only `Início`, `Produtos`, `Recentes` and `Favoritos`.
  - Favorite discoveries appear grouped by product in the favorites panel.
  - Favorite discovery rows navigate to `#discovery/...`.
  - Favorite discovery navigation does not open assistant/chat.

## What Was Corrected

- Fixed the README route description for `#home`; it now describes the MVP home as user products and recent discoveries instead of an assistant panel.
- Confirmed the roadmap documents do not classify CrewAI agents as future.
- Confirmed external integrations remain future and may be simulated through manual input, mock data, fixture outputs, local storage or mock backend responses.

## Remaining Limitations

- Agent outputs are still normalized best-effort in the frontend; a stable versioned backend schema is still needed.
- The local mock adapter can simulate agent outputs and gates, but it is not equivalent to durable production orchestration.
- Human gates are represented in the UI, but durable pause/resume semantics depend on the real backend/CrewAI adapter.
- External evidence ingestion, enterprise permissions, notifications and analytics integrations remain outside MVP.
- Some demo discoveries use shared local template data, so not every mock discovery has unique generated content yet.

## Next Steps For CrewAI Adapter

- Define a versioned structured output schema for each agent artifact.
- Map CrewAI run states to the frontend states: `not_started`, `processing`, `waiting_for_human`, `completed` and `failed`.
- Normalize CrewAI outputs for insights, artifacts, CSD updates, opportunities, recommendation and handoff.
- Add durable backend support for human gate resume events.
- Add run tracing and retry/failure monitoring before production rollout.
- Keep external integrations behind adapter boundaries so the MVP can continue to run with manual input and mock/fixture data.

## QA Result

Final QA passed for scope classification and core MVP UI behavior. Agents remain MVP. External integrations and the conversational assistant remain future.
