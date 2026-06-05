# Story 4.3: Acompanhamento de estado e gates humanos

Status: ready-for-dev

## Story

Como usuário,
Quero ver o estado do workflow e atuar nos gates,
Para que eu avance o Discovery.

## Acceptance Criteria

1. **Dado** o Cockpit em estado de gate humano (ex.: `RESEARCH_APPROVAL_PENDING`),
   **Quando** o polling retorna esse estado,
   **Então** a UI exibe o gate com ação disponível (botão "Aprovar" / "Continuar").

2. **Dado** o botão de ação no gate,
   **Quando** clico em "Aprovar/Continuar",
   **Então** `POST /api/discovery/resume` é chamado com o `run_id` e o estado avança.

3. **Dado** a transição de estado,
   **Quando** o `resume` retorna novo estado,
   **Então** a UI reflete imediatamente (sem aguardar próximo tick de polling).

4. **Dado** `runId` 404 ou `resume` em estado terminal (`COMPLETED`),
   **Quando** a ação é executada,
   **Então** exibe erro acionável — sem crash, sem transição parcial.

5. **Dado** o estado `COMPLETED`,
   **Quando** o Cockpit detecta via polling,
   **Então** o polling para e a UI exibe indicador de conclusão.

6. **Dado** DoD recorrente,
   **Então** i18n, DS, testes (gate + resume + erro).

## Tasks / Subtasks

- [ ] **Task 1 — UI de gate humano (AC: 1)**
  - [ ] Mapeamento `AgentState → GateConfig`:
    ```ts
    const GATE_CONFIG: Partial<Record<AgentState, { label: string; description: string }>> = {
      RESEARCH_APPROVAL_PENDING: { label: 'Aprovar Pesquisa', description: '...' },
      // ...
    }
    ```
  - [ ] `GateActionCard` component: exibe descrição do gate + botão de ação.

- [ ] **Task 2 — Ação de resume (AC: 2, 3, 4)**
  - [ ] Botão chama `resumeDiscovery(runId)`.
  - [ ] Em sucesso: atualiza estado local imediatamente (antes do próximo polling).
  - [ ] Em erro 400/404: `ClbToast` (negative).

- [ ] **Task 3 — Estado COMPLETED (AC: 5)**
  - [ ] Quando polling retorna `COMPLETED`: parar polling, exibir badge/seção de conclusão.

- [ ] **Task 4 — Testes (DoD)**
  - [ ] Teste: gate visível em `RESEARCH_APPROVAL_PENDING`, resume avança.
  - [ ] Teste: resume em COMPLETED → erro exibido.

## Dev Notes

### Gates humanos (4 total)

1. `RESEARCH_APPROVAL_PENDING` — aprovar pesquisa de mercado
2. `EVIDENCE_UPLOAD_PENDING` — aguardando upload (Story 4.4)
3. `INSIGHT_REVIEW_PENDING` — revisar insights
4. `OPPORTUNITY_REVIEW_PENDING` — validar oportunidades

### Update otimístico de estado

Após `resume` bem-sucedido, atualizar o estado local antes do próximo polling para UX responsiva.

### References

- [Source: epics.md Epic 4 — Story 4.3]
- [Source: prd.md §4.1 FR-14]
- [Source: docs/api-contracts-frontend.md — resume endpoint]

## Dev Agent Record

### Completion Notes List

- Gates exibindo ação correta por estado: (sim/não)
- Resume avançando estado: (sim/não)
- COMPLETED parando polling: (sim/não)

### File List

- `src/features/cockpit/CockpitPage.tsx` (update)
- `src/features/cockpit/components/GateActionCard.tsx`
- `src/features/cockpit/CockpitPage.test.tsx` (update)
