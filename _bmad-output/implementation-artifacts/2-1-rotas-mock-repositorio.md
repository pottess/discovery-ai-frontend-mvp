# Story 2.1: Rotas de mock para produtos, discoveries e público

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero as rotas de mock dos recursos do repositório,
Para que as telas do Epic 2 consumam dados realistas.

> **Definition of Done (recorrente):** paridade/i18n/DS/testes/a11y aplicam-se a cada story de feature.
> Esta story é infraestrutura de mock — sem UI nova. DoD reduzido: testes de rotas mock + types atualizados.

## Acceptance Criteria

1. **Dado** factories/fixtures Mirage para `products`, `discoveries`, `created-discoveries`, `product-audience-by-product`, `product-favorites-by-user`, `favorite-discovery-ids`,
   **Quando** as features chamam os endpoints `/api/local/*`,
   **Então** os shapes espelham exatamente os seeds de `server.js` e `docs/data-models-frontend.md`.

2. **Dado** o campo polimórfico `artifacts` em `Product`,
   **Então** seeds incluem produtos com `artifacts` como `string[]` E como `ArtifactObject[]` — ambos
   tratados corretamente pelos consumers.

3. **Dado** os endpoints de `product-audience-by-product`,
   **Quando** chamados com um `productId`,
   **Então** GET/POST/PUT/DELETE funcionam — personas e stakeholders persistem no mock.

4. **Dado** `product-favorites-by-user` e `favorite-discovery-ids`,
   **Quando** PUT com novo estado de favorito,
   **Então** o mock persiste e retorna a coleção atualizada.

5. **Dado** seeds de produtos e discoveries,
   **Então** há pelo menos 5 produtos e 5 discoveries com dados variados (diferentes torres, tribos, status).

## Tasks / Subtasks

- [ ] **Task 1 — Models e factories Mirage (AC: 1, 2, 5)**
  - [ ] Adicionar models em `src/mocks/models/index.ts`: `product`, `discovery`, `run`, `persona`, `stakeholder`.
  - [ ] Criar factories em `src/mocks/factories/` — arquivos em kebab-case:
    - `product.ts` — gera Product com faker, incluindo variante `artifacts` string[] e objeto.
    - `discovery.ts` — gera Discovery com diferentes status.
    - `audience.ts` — gera Persona e Stakeholder.
  - [ ] Atualizar `src/mocks/factories/index.ts` re-exportando todos os factories.
  - [ ] Seeds em `src/mocks/seeds.ts`: 5+ produtos, 5+ discoveries, 2+ personas, 2+ stakeholders por produto.

- [ ] **Task 2 — Rotas CRUD em arquivos por recurso (AC: 1, 3, 4)**
  - [ ] Criar `src/mocks/routes/products.ts` com `registerProductRoutes(server)`:
    - `GET /api/local/products` → lista paginável
    - `GET /api/local/products/:id` → detalhe (404 se não existir)
  - [ ] Criar `src/mocks/routes/discoveries.ts` com `registerDiscoveryListRoutes(server)`:
    - `GET /api/local/discoveries` → lista
    - `GET /api/local/created-discoveries` → lista dos criados
  - [ ] Criar `src/mocks/routes/audience.ts` com `registerAudienceRoutes(server)`:
    - `GET /api/local/product-audience-by-product/:productId` → { personas, stakeholders }
    - `POST /api/local/product-audience-by-product/:productId/persona`
    - `PUT /api/local/product-audience-by-product/:productId/persona/:id`
    - `DELETE /api/local/product-audience-by-product/:productId/persona/:id`
    - Mesmos verbos para stakeholder
  - [ ] Criar `src/mocks/routes/favorites.ts` com `registerFavoritesRoutes(server)`:
    - `GET/PUT /api/local/product-favorites-by-user/:profileId`
    - `GET/PUT /api/local/favorite-discovery-ids`
    - `GET /api/local/research-activity-users`
  - [ ] Registrar todos em `src/mocks/routes/index.ts` via `registerRoutes(server)`.

- [ ] **Task 3 — Services HTTP correspondentes (AC: 1)**
  - [ ] Criar/atualizar `src/services/http/products.ts`, `discoveries.ts`, `audience.ts`, `favorites.ts`.
  - [ ] Todos tipados com `~/types/contract`.

- [ ] **Task 4 — Testes das rotas mock (DoD)**
  - [ ] Testes unitários com Mirage em `environment: 'test'` confirmando cada rota retorna shape correto.

## Dev Notes

### Collections de `server.js` (8 total)

Ver `docs/data-models-frontend.md` para shapes exatos. Principais para este Epic:
- `products` — Product com `artifacts` polimórfico
- `discoveries` — Discovery com `status`/`current_state` separados
- `created-discoveries` — subset criados pelo usuário
- `product-audience-by-product` — keyed por productId
- `product-favorites-by-user` — keyed por profileId
- `favorite-discovery-ids` — array de ids

### Polimorfismo de `artifacts`

```ts
// seed mínimo com ambas as variantes:
{ id: '1', artifacts: ['url1', 'url2'] }
{ id: '2', artifacts: [{ id: 'a1', productId: '2', title: 'Doc', date: '2026-01-01', type: 'pdf' }] }
```

### Consistência com server.js

O Mirage deve espelhar o comportamento do `server.js` atual. Usar `docs/api-contracts-frontend.md` como
referência primária para shapes e status codes.

### References

- [Source: epics.md Epic 2 — Story 2.1]
- [Source: docs/api-contracts-frontend.md]
- [Source: docs/data-models-frontend.md]
- [Source: .claude/rules/mirage-rule.md]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- Rotas CRUD implementadas: (listar endpoints)
- Seeds com ambas variantes de `artifacts`: (sim/não)
- Testes de rotas passando: (sim/não)

### File List

- `src/mocks/models/index.ts` (update — product, discovery, run, persona, stakeholder)
- `src/mocks/factories/product.ts`
- `src/mocks/factories/discovery.ts`
- `src/mocks/factories/audience.ts`
- `src/mocks/factories/index.ts` (update)
- `src/mocks/seeds.ts` (update — 5+ produtos e discoveries)
- `src/mocks/routes/products.ts`
- `src/mocks/routes/discoveries.ts`
- `src/mocks/routes/audience.ts`
- `src/mocks/routes/favorites.ts`
- `src/mocks/routes/index.ts` (update)
- `src/services/http/products.ts`
- `src/services/http/audience.ts`
- `src/services/http/favorites.ts`
- `src/mocks/routes.test.ts`
