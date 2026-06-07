# Story 3.4: Submeter, processar e abrir o Cockpit

Status: ready-for-dev

## Story

Como usuário,
Quero criar o discovery e acompanhar o processamento,
Para que eu chegue ao Cockpit ao concluir.

## Acceptance Criteria

1. **Dado** o formulário válido na última etapa,
   **Quando** clico em "Criar Discovery",
   **Então** o kickoff é disparado (`POST /api/discovery/kickoff`) e recebo o `run_id`.

2. **Dado** o kickoff bem-sucedido,
   **Quando** o polling (`GET /api/discovery/status/:runId`) retorna primeiro gate humano
   (`RESEARCH_APPROVAL_PENDING`),
   **Então** o Cockpit abre na rota `/discovery/:runId`.

3. **Dado** o novo Discovery criado,
   **Então** aparece na listagem em `/api/local/created-discoveries` (mock persistiu).

4. **Dado** o polling exceder o timeout configurado em `/api/config` (`polling_timeout`),
   **Então** exibe estado de erro com opção de retry — sem loading eterno.

5. **Dado** o polling retornar formato inesperado ou status HTTP de erro,
   **Então** exibe mensagem de erro acionável — sem travar a UI.

6. **Dado** o botão "Criar Discovery",
   **Quando** clicado,
   **Então** fica desabilitado/loading durante o processamento (duplo submit prevenido).

## Tasks / Subtasks

- [ ] **Task 1 — Submit e kickoff (AC: 1, 3, 6)**
  - [ ] `onSubmit` no `DiscoveryFlowPage`: POST kickoff com payload das 4 etapas.
  - [ ] Botão com estado `loading` durante submit/polling.
  - [ ] Criar o Discovery no mock de `created-discoveries` após kickoff.

- [ ] **Task 2 — Polling com timeout (AC: 2, 4, 5)**
  - [ ] Hook `usePollRunStatus(runId, config)` usando **`useQuery` + `refetchInterval` como função** (nunca `setInterval`):
    - Interval: `config.polling_interval` ms enquanto processando.
    - Timeout: `config.polling_timeout` ms → erro de timeout via `meta` da query.
    - Para em estado terminal ou gate humano (retorna `false` no `refetchInterval`).
    - Cleanup: React Query gerencia — não usar `clearInterval` manual.

- [ ] **Task 3 — Navegação para o Cockpit (AC: 2)**
  - [ ] Quando estado é gate humano ou avançado: `navigate('/discovery/' + runId)`.
  - [ ] Full-page fecha antes de navegar.

- [ ] **Task 4 — Testes (DoD)**
  - [ ] Teste: submit → polling → navigate.
  - [ ] Teste: timeout → erro exibido.
  - [ ] Teste: botão desabilitado durante processamento.

## Dev Notes

### Polling pattern

Usar `refetchInterval` como **função** — nunca `setInterval` manual. Ver `.claude/rules/features-rule.md` seção "Polling com React Query".

```ts
// src/features/discovery-workflow/hooks/use-poll-run-status.ts
import { useQuery } from "@tanstack/react-query";
import { discoveryApi } from "../api";
import { discoveryKeys } from "../keys";
import type { AgentState, ConfigResponse } from "../types";

const TERMINAL_STATES: AgentState[] = ["COMPLETED", "FAILED", "CANCELLED"];
const GATE_STATES: AgentState[] = [
  "RESEARCH_APPROVAL_PENDING",
  "EVIDENCE_UPLOAD_PENDING",
  "INSIGHT_REVIEW_PENDING",
  "OPPORTUNITY_REVIEW_PENDING",
];

export function usePollRunStatus(runId: string | null, config: ConfigResponse) {
  return useQuery({
    queryKey: discoveryKeys.status(runId!),
    queryFn: () => discoveryApi.getStatus(runId!),
    enabled: !!runId,
    refetchOnWindowFocus: false,
    refetchInterval: (query) => {
      const state = query.state.data?.state;
      if (!state || TERMINAL_STATES.includes(state) || GATE_STATES.includes(state)) {
        return false; // para o polling
      }
      return config.polling_interval;
    },
    // Timeout: se a query levar mais que polling_timeout, rejeitar
    staleTime: 0,
    gcTime: 0,
  });
}
```

Timeout por `polling_timeout`: usar `retry: false` + `retryDelay` ou controlar via `meta` + `onError` no `QueryClient`. Alternativa simples: comparar `Date.now() - query.state.dataUpdatedAt` no `refetchInterval` e retornar `false` se excedido.

### Estados que param o polling

Gate humanos: `RESEARCH_APPROVAL_PENDING`, `EVIDENCE_UPLOAD_PENDING`, `INSIGHT_REVIEW_PENDING`, `OPPORTUNITY_REVIEW_PENDING`.
Terminal: `COMPLETED`, `FAILED`, `CANCELLED`.

### References

- [Source: epics.md Epic 3 — Story 3.4]
- [Source: prd.md §4.1 FR-12]
- [Source: docs/api-contracts-frontend.md — kickoff, status, config]

## Dev Agent Record

### Completion Notes List

- Polling implementado com timeout: (sim/não)
- Navigate para Cockpit: (sim/não)
- Double submit prevenido: (sim/não)

### File List

- `src/features/discovery/DiscoveryFlowPage.tsx` (update)
- `src/features/discovery/hooks/usePolling.ts`
- `src/features/discovery/DiscoveryFlowPage.test.tsx` (update)
