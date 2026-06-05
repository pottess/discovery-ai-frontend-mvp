# Story 2.4: Detalhe do produto

Status: ready-for-dev

## Story

Como usuário,
Quero ver o detalhe completo de um produto,
Para que eu entenda seu contexto e discoveries.

## Acceptance Criteria

1. **Dado** a rota `/products/:id`,
   **Quando** o produto existe no mock,
   **Então** exibo contexto, métricas, equipe, artefatos e discoveries do produto conforme inventário.

2. **Dado** `artifacts` no formato `string[]`,
   **Então** renderiza como links de download ou texto.

3. **Dado** `artifacts` no formato `ArtifactObject[]`,
   **Então** renderiza com título, data e tipo.

4. **Dado** `id` inexistente (deep-link inválido),
   **Então** exibe estado de erro/404 — sem crash.

5. **Dado** DoD recorrente,
   **Então** i18n, DS, testes, a11y e robustez aplicados.

## Tasks / Subtasks

- [ ] **Task 1 — Página de detalhe (AC: 1, 2, 3)**
  - [ ] `src/features/products/ProductDetailPage.tsx`.
  - [ ] Consultar inventário para seções: contexto, métricas, equipe, artefatos, discoveries.
  - [ ] Renderizar `artifacts` com type guard: `if (typeof artifact === 'string') ... else ...`.

- [ ] **Task 2 — Tratamento de 404 (AC: 4)**
  - [ ] Se `getProductById(id)` retornar 404 → exibir `<NotFoundSection>` com link de volta.

- [ ] **Task 3 — DoD**
  - [ ] i18n namespace `products.detail`.
  - [ ] Testes: render com produto, render 404, ambas variantes de `artifacts`.

## Dev Notes

### Polimorfismo de artifacts

```ts
// type guard
const isArtifactObject = (a: Artifact): a is ArtifactObject =>
  typeof a === 'object' && a !== null && 'id' in a
```

### Deep-link

URL com id inválido chega por navegação direta ou bookmark. Não crashar.

### References

- [Source: epics.md Epic 2 — Story 2.4]
- [Source: prd.md §4.1 FR-11]
- [Source: docs/component-inventory-frontend.md — Product Detail view]
- [Source: docs/data-models-frontend.md — Product, Artifact]

## Dev Agent Record

### Completion Notes List

- Ambas variantes de artifacts renderizando: (sim/não)
- 404 tratado: (sim/não)

### File List

- `src/features/products/ProductDetailPage.tsx`
- `src/features/products/ProductDetailPage.test.tsx`
- `src/i18n/locales/*/products.json` (update)
