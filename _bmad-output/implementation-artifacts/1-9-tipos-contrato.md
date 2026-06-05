# Story 1.9: Tipos de contrato compartilhados (TypeScript)

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero tipos TypeScript do contrato de dados como fonte única,
Para que `services/http` e o mock Mirage não divirjam.

## Acceptance Criteria

1. **Dado** os tipos em `src/types/contract/`,
   **Quando** `services/http` e as factories/serializers do Mirage são escritos,
   **Então** ambos importam dos mesmos tipos — zero duplicação de shape.

2. **Dado** uma mudança de shape (ex.: campo renomeado em `Discovery`),
   **Quando** atualizo o tipo em `src/types/contract/`,
   **Então** `npx tsc --noEmit` falha nos lados que não foram atualizados (detecção de drift em compile-time).

3. **Dado** o campo polimórfico `artifacts` (pode ser `string[]` OU objeto `{id, productId, title, date, type}`),
   **Então** o tipo modela esse union corretamente: `Artifact = string | ArtifactObject`.

4. **Dado** o campo `status` (estado da tela) vs `current_state` (estado do backend),
   **Então** o tipo distingue os dois (não um único campo ambíguo).

5. **Dado** todos os shapes de `docs/data-models-frontend.md` (8 coleções JSON),
   **Então** existem tipos para: `Product`, `Discovery`, `Run`, `RunStatus`, `AgentOutput`,
   `PersonaOrStakeholder`, `ProductAudienceCollection` e os shapes de resposta de API
   (`ConfigResponse`, `KickoffResponse`, `StatusResponse`, etc.).

## Tasks / Subtasks

- [ ] **Task 1 — Criar módulo de tipos (AC: 1, 2, 3, 4, 5)**
  - [ ] Estrutura:
    ```
    src/types/
      contract/
        product.ts
        discovery.ts
        run.ts
        audience.ts
        api.ts        ← shapes de request/response de API
        index.ts      ← re-exports
    ```
  - [ ] Ler `docs/data-models-frontend.md` e `docs/api-contracts-frontend.md` para extrair todos os shapes.

- [ ] **Task 2 — Tipos polimórficos (AC: 3, 4)**
  - [ ] `artifacts`:
    ```ts
    export interface ArtifactObject {
      id: string; productId: string; title: string; date: string; type: string
    }
    export type Artifact = string | ArtifactObject
    ```
  - [ ] `RunStatus` deve ter `status` (display) separado de `current_state` (backend state machine):
    ```ts
    export type AgentState =
      | 'DOR_ANALYZING' | 'RESEARCH_APPROVAL_PENDING' | 'EVIDENCE_UPLOAD_PENDING'
      | 'INSIGHT_REVIEW_PENDING' | 'OPPORTUNITY_REVIEW_PENDING' | 'COMPLETED'
    ```

- [ ] **Task 3 — Atualizar `services/http` com tipos (AC: 1)**
  - [ ] Tipar todas as funções em `src/services/http/`:
    ```ts
    import { Discovery } from '~/types/contract'
    export const getDiscoveries = () => http.get<Discovery[]>('/local/discoveries')
    ```

- [ ] **Task 4 — Atualizar Mirage com tipos (AC: 1)**
  - [ ] `src/mocks/server.ts`: factories e serializers usam tipos de `~/types/contract`.
  - [ ] Seeds em `src/mocks/seeds.ts`: objetos conformes ao tipo (sem shape ad-hoc).

- [ ] **Task 5 — Validar compile-time drift (AC: 2)**
  - [ ] Rodar `npx tsc --noEmit` — zero erros.
  - [ ] Testar drift: renomear um campo num tipo e verificar que o tsc falha nos consumidores.

## Dev Notes

### Fonte de verdade: `docs/data-models-frontend.md`

Contém os 8 shapes JSON. Os tipos TS devem espelhar exatamente. Mapeamento chave:

| Coleção JSON | Tipo TS |
|---|---|
| `products` | `Product` |
| `discoveries` / `created-discoveries` | `Discovery` |
| `discovery-runs` | `Run` |
| `product-audience-by-product` | `ProductAudience` |
| `product-favorites-by-user` | `ProductFavorites` |
| `favorite-discovery-ids` | `FavoriteDiscoveryIds` |
| `research-activity-users` | `ResearchActivityUser` |
| `mock-agent-runs` | `MockAgentRun` |

### Polimorfismo de `artifacts`

O protótipo usa `string[]` em alguns produtos e objetos em outros. O tipo deve ser union:
```ts
type Artifact = string | { id: string; productId: string; title: string; date: string; type: string }
```

### API shapes de `docs/api-contracts-frontend.md`

14 endpoints. Tipos de resposta para cada um. Os mais críticos:
- `ConfigResponse` — intervalos de polling
- `KickoffResponse` — `{ run_id: string }`
- `StatusResponse` — `{ state: AgentState; run_id: string; ... }`
- `ResumeResponse` — `{ state: AgentState }`

### References

- [Source: epics.md Epic 1 — Story 1.9]
- [Source: docs/data-models-frontend.md — shapes completos]
- [Source: docs/api-contracts-frontend.md — contratos de API]
- [Source: prd.md NFR-4]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- Todos os shapes de data-models documentados como tipos: (sim/não)
- `npx tsc --noEmit` limpo: (sim/não)
- `Artifact` union implementado: (sim/não)

### File List

- `src/types/contract/product.ts`
- `src/types/contract/discovery.ts`
- `src/types/contract/run.ts`
- `src/types/contract/audience.ts`
- `src/types/contract/api.ts`
- `src/types/contract/index.ts`
- `src/services/http/*.ts` (update — tipar)
- `src/mocks/server.ts` (update — usar tipos)
- `src/mocks/seeds.ts` (update — conformar tipos)
