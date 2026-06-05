# Story 4.1: Rotas de mock do workflow e máquina de estados completa

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero as rotas de status/resume/outputs/evidence/runs/artifacts,
Para que o Cockpit reflita o workflow de agentes.

## Acceptance Criteria

1. **Dado** a máquina de estados completa no Mirage,
   **Quando** chamo `resume` em qualquer gate humano,
   **Então** a transição segue: `RESEARCH_APPROVAL_PENDING → EVIDENCE_UPLOAD_PENDING → INSIGHT_REVIEW_PENDING
   → OPPORTUNITY_REVIEW_PENDING → COMPLETED`.

2. **Dado** `POST /api/discovery/:runId/evidence`,
   **Quando** chamado com arquivo em estado `EVIDENCE_UPLOAD_PENDING`,
   **Então** o estado transiciona para `INSIGHT_REVIEW_PENDING`.

3. **Dado** `GET /api/discovery/runs/:runId/artifacts`,
   **Quando** chamado,
   **Então** retorna lista de artefatos gerados (mock) para o run.

4. **Dado** `GET /api/discovery/outputs`,
   **Quando** chamado com `run_id`,
   **Então** retorna os 7 outputs estruturados (conforme `docs/api-contracts-frontend.md`).

5. **Dado** `run_id` inexistente em qualquer endpoint,
   **Então** retorna 404.

6. **Dado** `resume` em estado terminal (`COMPLETED`),
   **Então** retorna erro claro (ex.: 400 `{ error: 'run already completed' }`) — não silencia.

## Tasks / Subtasks

- [ ] **Task 1 — Completar máquina de estados (AC: 1, 6)**
  - [ ] Expandir `MockAgentRun` model para cobrir todos os 5 gates + COMPLETED.
  - [ ] `POST /api/discovery/resume` com tabela de transições completa.
  - [ ] Rejeitar resume em COMPLETED com 400.

- [ ] **Task 2 — Rota de evidence (AC: 2)**
  - [ ] `POST /api/discovery/:runId/evidence` (multipart ou JSON):
    - Valida estado = `EVIDENCE_UPLOAD_PENDING`.
    - Transiciona para `INSIGHT_REVIEW_PENDING`.
    - Persiste referência do arquivo no mock.

- [ ] **Task 3 — Rotas de artifacts e outputs (AC: 3, 4)**
  - [ ] `GET /api/discovery/runs/:runId/artifacts` → array de `ArtifactObject`.
  - [ ] `GET /api/discovery/outputs?run_id=X` → 7 outputs estruturados.
  - [ ] Seeds com dados realistas para os 7 outputs.

- [ ] **Task 4 — 404 e testes (AC: 5 + DoD infra)**
  - [ ] 404 em `run_id` inexistente em todos os endpoints.
  - [ ] Testes: transições de estado, evidence, 404, resume em COMPLETED.

## Dev Notes

### 7 outputs estruturados (de `docs/api-contracts-frontend.md`)

Consultar o documento para shapes exatos. Esperados:
- Análise DOR
- Pesquisa de mercado
- Evidências consolidadas
- Insights sintetizados
- Oportunidades mapeadas
- Relatório final
- Recomendações

### Transições completas

```
RESEARCH_APPROVAL_PENDING --resume--> EVIDENCE_UPLOAD_PENDING
EVIDENCE_UPLOAD_PENDING --evidence--> INSIGHT_REVIEW_PENDING
INSIGHT_REVIEW_PENDING --resume--> OPPORTUNITY_REVIEW_PENDING
OPPORTUNITY_REVIEW_PENDING --resume--> COMPLETED
COMPLETED --resume--> 400 (rejeitado)
```

### References

- [Source: epics.md Epic 4 — Story 4.1]
- [Source: docs/api-contracts-frontend.md — outputs, evidence, runs/artifacts]
- [Source: docs/data-models-frontend.md — MockAgentRun, AgentState]
- [Source: .claude/rules/mirage-rule.md]

## Dev Agent Record

### Completion Notes List

- Máquina de estados completa: (sim/não)
- Evidence transicionando estado: (sim/não)
- Resume em COMPLETED retorna 400: (sim/não)

### File List

- `src/mocks/server.ts` (update — rotas evidence/artifacts/outputs)
- `src/mocks/factories/agentRunFactory.ts` (update)
- `src/services/http/discovery.ts` (update)
- `src/mocks/routes.test.ts` (update)
