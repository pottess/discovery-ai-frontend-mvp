# Story 2.3: Catálogo de produtos com busca, filtro e favoritos

Status: ready-for-dev

## Story

Como usuário,
Quero buscar, agrupar e favoritar produtos,
Para que eu encontre produtos relevantes.

## Acceptance Criteria

1. **Dado** a listagem de produtos do mock em `/products`,
   **Quando** digito no campo de busca,
   **Então** a lista filtra por texto (nome/descrição) sem reload.

2. **Dado** a lista de produtos,
   **Quando** agrupo por Torre ou Tribo,
   **Então** os produtos são organizados por grupo com contagem visível.

3. **Dado** um produto,
   **Quando** clico em favoritar,
   **Então** persiste em `product-favorites-by-user` (por `profileId`) e reflete ao recarregar.

4. **Dado** cada produto na lista,
   **Então** exibe stats: `discoveryCount`, `doneCount`, `progressCount`.

5. **Dado** a lista vazia (sem produtos ou filtro sem resultado),
   **Então** empty state descritivo.

6. **Dado** i18n + a11y + DS (DoD recorrente),
   **Então** strings externalizadas, componentes Clb*, navegação por teclado.

## Tasks / Subtasks

- [ ] **Task 1 — Página de catálogo (AC: 1, 2, 4)**
  - [ ] Criar `src/features/products/ProductsPage.tsx`.
  - [ ] Hook `useProducts()` — carrega, filtra, agrupa.
  - [ ] `ClbInputSearch` ou `ClbInputText` para busca (debounce ~300ms).
  - [ ] Agrupamento por Torre/Tribo via `ClbSelect` ou tabs.
  - [ ] Cards de produto com stats.

- [ ] **Task 2 — Favoritar produto (AC: 3)**
  - [ ] Hook `useFavoriteProducts(profileId)` — carrega/atualiza `product-favorites-by-user`.
  - [ ] Botão de favoritar em cada card.

- [ ] **Task 3 — Empty state (AC: 5)**
  - [ ] Sem produtos: "Nenhum produto encontrado."
  - [ ] Sem resultados de busca: "Nenhum produto corresponde à busca."

- [ ] **Task 4 — DoD: i18n + a11y + testes**
  - [ ] Namespace `products` nos catálogos.
  - [ ] Testes: render, busca, favoritar.

## Dev Notes

### Paridade com inventário

Consultar `docs/component-inventory-frontend.md` — view Products para lista exata de elementos.

### profileId

Identificador do usuário para favoritos. No mock, usar valor fixo (ex.: `'user-1'`) até auth existir.

### References

- [Source: epics.md Epic 2 — Story 2.3]
- [Source: prd.md §4.1 FR-10]
- [Source: docs/component-inventory-frontend.md — Products view]

## Dev Agent Record

### Completion Notes List

- Busca/filtro funcionando: (sim/não)
- Favoritar persistindo: (sim/não)

### File List

- `src/features/products/ProductsPage.tsx`
- `src/features/products/hooks/useProducts.ts`
- `src/features/products/hooks/useFavoriteProducts.ts`
- `src/i18n/locales/*/products.json`
- `src/features/products/ProductsPage.test.tsx`
