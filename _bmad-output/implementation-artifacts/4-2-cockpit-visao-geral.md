# Story 4.2: Cockpit do Discovery (visão geral)

Status: ready-for-dev

## Story

Como usuário,
Quero acompanhar o Discovery no Cockpit,
Para que eu entenda seu estado e conteúdo.

## Acceptance Criteria

1. **Dado** a rota `/discovery/:runId`,
   **Quando** abro o Cockpit,
   **Então** vejo: readiness/status do agente, problema/objetivo, insights disponíveis, metodologias
   ativas e evidências — conforme inventário de paridade (`docs/component-inventory-frontend.md`).

2. **Dado** insights renderizados no Cockpit,
   **Então** o conteúdo é escapado pelo React (sem XSS — sem `dangerouslySetInnerHTML` sem sanitização).

3. **Dado** `runId` inexistente (deep-link inválido),
   **Quando** abro o Cockpit,
   **Então** estado de erro/404 com link de volta — sem crash.

4. **Dado** o polling do estado (`GET /api/discovery/status/:runId`),
   **Quando** o estado muda,
   **Então** a UI reflete a transição em tempo real (intervalo de `/api/config`).

5. **Dado** i18n + DS + a11y + testes (DoD recorrente),
   **Então** strings externalizadas, componentes Clb*, testes de render e estado.

## Tasks / Subtasks

- [ ] **Task 1 — Página Cockpit (AC: 1, 3)**
  - [ ] `src/features/cockpit/CockpitPage.tsx`.
  - [ ] Carregar: `getDiscoveryStatus(runId)` + `getDiscoveryOutputs(runId)`.
  - [ ] Seções conforme inventário: status, problema/objetivo, insights, metodologias, evidências.
  - [ ] 404: if status = 404 → `<CockpitNotFound />`.

- [ ] **Task 2 — Polling de estado (AC: 4)**
  - [ ] Reusar hook `usePolling` da Story 3.4.
  - [ ] Atualizar seção de status ao mudar estado.
  - [ ] Parar polling em estado terminal (`COMPLETED`).

- [ ] **Task 3 — Segurança XSS (AC: 2)**
  - [ ] Nenhum `dangerouslySetInnerHTML` sem sanitização.
  - [ ] Insights renderizados como texto (`{insight.content}`) — React escapa automaticamente.
  - [ ] Se Markdown for necessário, usar biblioteca sanitizadora (ex.: DOMPurify + react-markdown).

- [ ] **Task 4 — DoD**
  - [ ] Testes: render Cockpit, 404, polling atualiza estado.
  - [ ] i18n namespace `cockpit`.

## Dev Notes

### Inventário do Cockpit

Consultar `docs/component-inventory-frontend.md` — Cockpit view para lista completa de elementos.

### Polling no Cockpit

Diferente do polling de criação (Story 3.4): aqui o polling continua enquanto o Cockpit estiver
aberto, parando apenas em `COMPLETED` ou ao desmontar o componente.

### XSS

React escapa strings por padrão. Não usar `dangerouslySetInnerHTML` a menos que absolutamente
necessário (e nesse caso, sanitizar com DOMPurify antes).

### References

- [Source: epics.md Epic 4 — Story 4.2]
- [Source: prd.md §4.1 FR-14; NFR-5]
- [Source: docs/component-inventory-frontend.md — Cockpit view]

## Dev Agent Record

### Completion Notes List

- Cockpit renderizando com dados do mock: (sim/não)
- 404 tratado: (sim/não)
- XSS: nenhum dangerouslySetInnerHTML sem sanitização: (sim/não)

### File List

- `src/features/cockpit/CockpitPage.tsx`
- `src/i18n/locales/*/cockpit.json`
- `src/features/cockpit/CockpitPage.test.tsx`
