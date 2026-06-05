# Story 4.6: Página de Síntese

Status: ready-for-dev

## Story

Como usuário,
Quero ver a Síntese do Discovery,
Para que eu consolide insights e padrões.

## Acceptance Criteria

1. **Dado** a rota `/discovery/:runId/synthesis`,
   **Quando** abro a Síntese,
   **Então** insights e padrões renderizam a partir do payload de outputs do mock (conforme inventário).

2. **Dado** o `runId` com outputs disponíveis,
   **Então** as seções de síntese mapeiam os campos do inventário de paridade.

3. **Dado** `runId` inexistente,
   **Então** estado 404 — sem crash.

4. **Dado** outputs ainda não disponíveis (run em andamento),
   **Então** estado informativo (não tela branca).

5. **Dado** DoD recorrente,
   **Então** i18n, DS, testes, a11y.

## Tasks / Subtasks

- [ ] **Task 1 — Página de Síntese (AC: 1, 2, 3, 4)**
  - [ ] `src/features/synthesis/SynthesisPage.tsx`.
  - [ ] Carregar `getDiscoveryOutputs(runId)`.
  - [ ] Seções conforme inventário (`docs/component-inventory-frontend.md` — Synthesis view).
  - [ ] 404 e "outputs pendentes" tratados.

- [ ] **Task 2 — DoD**
  - [ ] i18n namespace `synthesis`.
  - [ ] Testes: render com outputs, sem outputs, 404.

## Dev Notes

### Seções da Síntese

Consultar `docs/component-inventory-frontend.md` — Synthesis view para seções exatas.
Os outputs vêm de `GET /api/discovery/outputs?run_id=X` (7 outputs estruturados).

### References

- [Source: epics.md Epic 4 — Story 4.6]
- [Source: prd.md §4.1 FR-15]
- [Source: docs/component-inventory-frontend.md — Synthesis view]

## Dev Agent Record

### Completion Notes List

- Síntese renderizando com outputs: (sim/não)
- 404 tratado: (sim/não)

### File List

- `src/features/synthesis/SynthesisPage.tsx`
- `src/i18n/locales/*/synthesis.json`
- `src/features/synthesis/SynthesisPage.test.tsx`
