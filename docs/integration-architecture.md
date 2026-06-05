# Arquitetura de Integração

> Scan deep, 2026-06-05. Como as partes (frontend, servidor, backend CrewAI) se comunicam.

## Diagrama de Fluxo

```
┌──────────────┐  hash routing, fetch /api/*   ┌──────────────────────┐  Bearer token   ┌──────────────────┐
│   Browser    │ ────────────────────────────► │   server.js (Node)   │ ──────────────► │  CrewAI / AMP    │
│   app.js     │ ◄──────────────────────────── │  proxy + DB + mock   │ ◄────────────── │  /kickoff /status│
└──────────────┘   JSON                         └──────────┬───────────┘   JSON          └──────────────────┘
                                                           │ fs read/write             (OU backend MVP via
                                                           ▼                            DISCOVERY_AI_API_BASE_URL)
                                                   backend/data/*.json
```

## Pontos de Integração

| De | Para | Tipo | Detalhes |
|----|------|------|----------|
| Browser | server.js | HTTP/JSON | Só `/api/*` + estáticos. Nunca chama backend externo direto |
| server.js | CrewAI/AMP | HTTP/JSON | `forwardCrewAiRequest`, `Authorization: Bearer <CREWAI_API_KEY>` |
| server.js | Backend MVP | HTTP/JSON | `forwardDiscoveryAiRequest`, sem Bearer (auth a definir) |
| server.js | Filesystem | fs JSON | `backend/data/*.json` (8 coleções) |
| server.js | MockAgentAdapter | in-process | Quando sem backend: simula workflow + persiste em `local-mock-runs` |

## Fronteira de Confiança

`server.js` é a **única** fronteira de segredo. `CREWAI_API_KEY` nunca chega ao browser. O
cliente só conhece endpoints `/api/*` locais. Basic auth opcional protege tudo exceto `/health`
(**off por default** — R1/R2).

## Contrato de Dados na Integração

- **Kickoff:** cliente envia `{ inputs: { discovery_id, title, objective, problem, owners,
  users, stakeholders, certainties, assumptions, open_questions, file, link, ... } }` (snake_case).
- **`discovery_id`** é a chave comum entre frontend, kickoff e prompts da crew. Nunca renomear.
- **Status:** leitura flexível (`state`/`result.state`/`status`/...); sucesso/erro por listas de
  valores conhecidos (ver [api-contracts](./api-contracts-frontend.md)).
- **Output:** instável (R9). Só `build_d_o_r_framework` tem schema validado no backend.

## Seleção de Modo

`getFrontendApiMode()` + `getAgentMode()` no `server.js`:
- Sem backend → `mock` (MockAgentAdapter responde tudo).
- `DISCOVERY_AI_API_BASE_URL` setado → `mvp_backend` (proxy `/api/discovery/*`).
- `CREWAI_API_KEY` setado → `legacy_crewai` (proxy `/api/crewai/*`).

## Lacunas de Integração (entrada p/ ADR)

- Proxy repassa JSON arbitrário sem validação de schema (R4).
- Sem contrato de upload/referência de arquivo (evidências são locais).
- Human-in-the-loop real exige estado persistente + eventos de aprovação no backend (hoje só no mock).
- Backend não expõe HTTP próprio — depende de deploy CrewAI/AMP.
