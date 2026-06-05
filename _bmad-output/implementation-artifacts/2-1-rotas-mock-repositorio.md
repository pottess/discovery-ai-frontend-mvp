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
  - [ ] Declarar models em `makeServer`: `product`, `discovery`, `run`, `persona`, `stakeholder`.
  - [ ] Criar `src/mocks/factories/`:
    - `productFactory.ts` — gera Product com faker, incluindo variante `artifacts` string[] e objeto.
    - `discoveryFactory.ts` — gera Discovery com diferentes status.
    - `audienceFactory.ts` — gera Persona e Stakeholder.
  - [ ] Seeds: 5+ produtos, 5+ discoveries, 2+ personas, 2+ stakeholders por produto de exemplo.

- [ ] **Task 2 — Rotas CRUD para collections (AC: 1, 3, 4)**
  - [ ] Implementar em `makeServer().routes()`:
    - `GET /api/local/products` → lista paginável
    - `GET /api/local/products/:id` → detalhe (404 se não existir)
    - `GET /api/local/discoveries` → lista
    - `GET /api/local/created-discoveries` → lista dos criados
    - `GET /api/local/product-audience-by-product/:productId` → { personas, stakeholders }
    - `POST /api/local/product-audience-by-product/:productId/persona` → cria persona
    - `PUT /api/local/product-audience-by-product/:productId/persona/:id` → atualiza
    - `DELETE /api/local/product-audience-by-product/:productId/persona/:id`
    - Mesmos verbos para stakeholder
    - `GET/PUT /api/local/product-favorites-by-user/:profileId`
    - `GET/PUT /api/local/favorite-discovery-ids`
    - `GET /api/local/research-activity-users`

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

- `src/mocks/server.ts` (update)
- `src/mocks/seeds.ts` (update)
- `src/mocks/factories/productFactory.ts`
- `src/mocks/factories/discoveryFactory.ts`
- `src/mocks/factories/audienceFactory.ts`
- `src/services/http/products.ts`
- `src/services/http/audience.ts`
- `src/services/http/favorites.ts`
- `src/mocks/routes.test.ts`
