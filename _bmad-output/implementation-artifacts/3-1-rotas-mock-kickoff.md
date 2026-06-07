# Story 3.1: Rotas de mock para kickoff e status

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero as rotas de kickoff/status no mock,
Para que o fluxo de criação funcione sem backend.

## Acceptance Criteria

1. **Dado** `POST /api/discovery/kickoff` com payload válido,
   **Quando** chamado,
   **Então** retorna `{ run_id: string }` e cria um `MockAgentRun` em estado inicial `DOR_ANALYZING`.

2. **Dado** `GET /api/discovery/status/:runId`,
   **Quando** chamado,
   **Então** retorna `{ state: AgentState, run_id: string, ... }` conforme máquina de estados.

3. **Dado** `run_id` inexistente,
   **Quando** chamado `status/:runId`,
   **Então** retorna 404.

4. **Dado** a máquina de estados simulada,
   **Então** após N chamadas a `status/:runId`, o estado avança automaticamente (simulação de progresso)
   até `RESEARCH_APPROVAL_PENDING` (primeiro gate humano).

5. **Dado** `GET /api/discovery/resume` (ou POST),
   **Quando** chamado em estado de gate humano,
   **Então** avança para próximo estado conforme máquina.

## Tasks / Subtasks

- [ ] **Task 1 — Model e factory para MockAgentRun (AC: 1)**
  - [ ] Adicionar model `mock-agent-run` em `src/mocks/models/index.ts`.
  - [ ] Criar `src/mocks/factories/agent-run.ts` com `agentRunFactory` (faker para run_id/product_id/timestamps).
  - [ ] Atualizar `src/mocks/factories/index.ts`.

- [ ] **Task 2 — Criar `src/mocks/routes/discovery.ts` com rotas kickoff/status/resume (AC: 1, 2, 3, 4, 5)**
  - [ ] Exportar `registerDiscoveryRoutes(server)` contendo:
    - `POST /api/discovery/kickoff` → cria `MockAgentRun` com `run_id` (uuid), estado `DOR_ANALYZING`.
    - `GET /api/discovery/status/:runId` → lookup por `run_id`, retorna estado atual; 404 se não encontrado.
    - Simulação: a cada chamada ao status, avançar estado automaticamente.
      Sequência: `DOR_ANALYZING → RESEARCH_APPROVAL_PENDING`.
    - `POST /api/discovery/resume` com `{ run_id, action }` → avança estado.
      Transições: `RESEARCH_APPROVAL_PENDING → EVIDENCE_UPLOAD_PENDING → INSIGHT_REVIEW_PENDING
      → OPPORTUNITY_REVIEW_PENDING → COMPLETED`.
  - [ ] Registrar `registerDiscoveryRoutes` em `src/mocks/routes/index.ts`.

- [ ] **Task 4 — Testes das rotas (DoD infra)**
  - [ ] Testes com Mirage `environment: 'test'`: kickoff, status, resume, 404.

## Dev Notes

### Máquina de estados completa (de `docs/data-models-frontend.md`)

```
DOR_ANALYZING
  → RESEARCH_APPROVAL_PENDING (gate humano)
  → EVIDENCE_UPLOAD_PENDING (gate humano)
  → INSIGHT_REVIEW_PENDING (gate humano)
  → OPPORTUNITY_REVIEW_PENDING (gate humano)
  → COMPLETED
```

Gates humanos requerem ação explícita via `resume`. Estados intermediários avançam automaticamente
após N polling calls (simular processamento assíncrono de agentes).

### Shapes de `docs/api-contracts-frontend.md`

- Kickoff request: `{ product_id, title, problem, objective, methodology, participants, csd }`
- Kickoff response: `{ run_id: string }`
- Status response: `{ run_id, state, current_state, readiness, ... }`

### References

- [Source: epics.md Epic 3 — Story 3.1]
- [Source: docs/api-contracts-frontend.md — kickoff, status, resume]
- [Source: docs/data-models-frontend.md — MockAgentRun, AgentState]
- [Source: .claude/rules/mirage-rule.md]

## Dev Agent Record

### Completion Notes List

- Kickoff criando MockAgentRun: (sim/não)
- Máquina de estados avançando: (sim/não)
- 404 em run_id inválido: (sim/não)

### File List

- `src/mocks/models/index.ts` (update — mock-agent-run)
- `src/mocks/factories/agent-run.ts`
- `src/mocks/factories/index.ts` (update)
- `src/mocks/routes/discovery.ts` (novo — kickoff/status/resume)
- `src/mocks/routes/index.ts` (update)
- `src/services/http/discovery.ts` (update)
- `src/types/contract/run.ts` (update — AgentState enum)
- `src/mocks/routes.test.ts` (update)
