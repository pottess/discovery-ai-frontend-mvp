# Contratos de API — Servidor (server.js)

> Scan deep, 2026-06-05. Todos os endpoints são locais (`server.js`). O browser nunca chama
> backends externos diretamente. Respostas JSON com `X-Content-Type-Options: nosniff` e
> `Cache-Control: no-store`.

## Tabela de Endpoints

| Método | Caminho | Auth | Propósito |
|--------|---------|------|-----------|
| GET/HEAD | `/health`, `/healthz` | bypass | Health check (modo + timestamp) |
| GET | `/api/config` | sim* | Feature flags, `agentMode`, intervalos de polling |
| POST | `/api/crewai/kickoff` | sim* | Proxy → CrewAI `/kickoff` (Bearer) |
| GET | `/api/crewai/status/:kickoffId` | sim* | Proxy → CrewAI `/status/{id}` |
| POST | `/api/discovery/kickoff` | sim* | Mock adapter OU proxy → backend MVP |
| GET | `/api/discovery/status/:runId` | sim* | Máquina de estados mock OU proxy |
| POST | `/api/discovery/resume` | sim* | Avança gate humano (mock) OU proxy |
| GET | `/api/discovery/outputs/:runId` | sim* | Outputs estruturados (mock/proxy) |
| GET | `/api/discovery/runs/:runId` | sim* | Detalhe da run (+ outputs no mock) |
| GET | `/api/discovery/runs/:runId/artifacts` | sim* | Artefatos da run |
| POST | `/api/discovery/runs/:runId/evidence` | sim* | Anexa evidência (avança estado no mock) |
| GET | `/api/local/health` | sim* | Status do storage JSON |
| GET | `/api/local` | sim* | Lista coleções |
| GET/PUT/POST/DELETE | `/api/local/:collection` | sim* | **CRUD JSON genérico** ⚠️ R1 |

\* "Auth" = basic auth **opcional**, só ativa se `BASIC_AUTH_ENABLED=true` (ou
`DISCOVERY_ACCESS_*`). **Off por default** → na prática endpoints abertos. `/health` sempre bypassa.

## Detalhes Selecionados

### `GET /api/config`
```json
{
  "mvpMode": true,
  "agentWorkflowEnabled": true,
  "conversationalAssistantEnabled": false,
  "externalIntegrationsEnabled": false,
  "agentMode": "mock | crewai",
  "supportedInputModes": ["manual_intake", "manual_upload", "mock_data"],
  "futureIntegrations": ["microsoft_teams", "outlook", "datadog", "..."],
  "featureFlags": { "researchAssistant": false, "agentWorkflow": true, "...": false },
  "frontendApiMode": "mock | mvp_backend | legacy_crewai",
  "crewAiPollIntervalMs": 15000,
  "crewAiPollTimeoutMs": 600000,
  "discoveryAiPollIntervalMs": 5000
}
```

### `POST /api/discovery/kickoff` (modo mock → 202)
Request: `{ "inputs": { "discovery_id": "...", "title": "...", ... } }`
Response:
```json
{
  "run_id": "mock-agent-run-...",
  "discovery_id": "...",
  "current_state": "DOR_ANALYZING",
  "status": "running",
  "adapter": "mock_agent",
  "mock_agent_outputs": true,
  "agent_workflow_enabled": true,
  "external_integrations_enabled": false
}
```

### Máquina de Estados (mock adapter)
`DOR_ANALYZING → RESEARCH_APPROVAL_PENDING → EVIDENCE_UPLOAD_PENDING → INSIGHT_REVIEW_PENDING
→ OPPORTUNITY_REVIEW_PENDING → COMPLETED`. Status: `running | waiting_for_human | completed`.
Transições: `status` avança em `DOR_ANALYZING`; `resume` usa `getNextMockStateForResume`;
`evidence` POST salta para `INSIGHT_REVIEW_PENDING`.

### Proxy CrewAI / Discovery AI
`server.js` adiciona `Authorization: Bearer <CREWAI_API_KEY>` (só CrewAI). Erros upstream
normalizados (501 sem baseUrl, 500 sem token, 502 falha de conexão, status original se !ok).

### Contrato de status (consumo flexível pelo cliente)
Status lido de: `state | result.state | data.state | status | result.status | data.status`.
Sucesso: `completed|complete|success|succeeded`. Erro: `failed|failure|error|cancelled|canceled`.
Resultado extraído de: `result | data.result | output | response`.

### `/api/local/:collection`
- `GET` → `{ collection, data }`
- `PUT` → substitui coleção inteira (`body.data` ou `body`)
- `POST` → append (array) ou merge (objeto)
- `DELETE` → reseta ao default
- Coleção desconhecida → 404 com `allowedCollections`. **Sem auth/validação de schema (R1, R4).**

## Limites

- Body JSON: cap de 1 MB (`readJsonBody`).
- Métodos não-GET/HEAD fora de `/api` → 405.
- Static: allowlist (`PUBLIC_FILE_PATHS` + `/assets/`), proteção path traversal.
