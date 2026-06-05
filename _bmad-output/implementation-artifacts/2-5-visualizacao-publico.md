# Story 2.5: Visualização do Público (personas e stakeholders)

Status: ready-for-dev

## Story

Como usuário,
Quero listar e visualizar personas e stakeholders de um produto,
Para que eu conheça o Público.

## Acceptance Criteria

1. **Dado** a rota `/audience/:productId`,
   **Quando** abro o Público de um produto,
   **Então** vejo a listagem de personas e stakeholders do mock.

2. **Dado** uma persona selecionada (`/audience/:productId/persona/:personaId`),
   **Então** exibo os campos do inventário no modo view (somente leitura).

3. **Dado** um stakeholder selecionado,
   **Então** exibo os campos do inventário no modo view.

4. **Dado** produto sem público cadastrado,
   **Então** empty state com CTA para adicionar.

5. **Dado** `personaId`/`stakeholderId` inexistente,
   **Então** estado de 404 — sem crash.

6. **Dado** DoD recorrente,
   **Então** i18n, DS, testes, a11y.

## Tasks / Subtasks

- [ ] **Task 1 — Listagem do Público (AC: 1, 4)**
  - [ ] `src/features/audience/AudiencePage.tsx`.
  - [ ] Seções: Personas + Stakeholders; botão "Adicionar" (→ Story 2.6).
  - [ ] Empty state por seção.

- [ ] **Task 2 — View de Persona e Stakeholder (AC: 2, 3, 5)**
  - [ ] `PersonaViewPage.tsx` e `StakeholderViewPage.tsx`.
  - [ ] Campos conforme inventário (consultar `docs/component-inventory-frontend.md`).
  - [ ] 404 tratado.

- [ ] **Task 3 — DoD**
  - [ ] i18n namespace `audience`.
  - [ ] Testes: render listagem, render view, 404.

## Dev Notes

Consultar `docs/component-inventory-frontend.md` para campos exatos de Persona e Stakeholder view.

### References

- [Source: epics.md Epic 2 — Story 2.5]
- [Source: prd.md §4.1 FR-11]
- [Source: docs/component-inventory-frontend.md — Audience, Persona, Stakeholder views]

## Dev Agent Record

### Completion Notes List

- Listagem com personas e stakeholders: (sim/não)
- 404 tratado em view: (sim/não)

### File List

- `src/features/audience/AudiencePage.tsx`
- `src/features/audience/PersonaViewPage.tsx`
- `src/features/audience/StakeholderViewPage.tsx`
- `src/i18n/locales/*/audience.json`
- `src/features/audience/*.test.tsx`
