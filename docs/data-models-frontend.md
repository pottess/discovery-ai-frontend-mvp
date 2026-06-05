# Modelo de Dados — Persistência local

> Scan deep, 2026-06-05. Sem banco de dados. Persistência via arquivos JSON no servidor
> (`backend/data/`, gitignored) + `localStorage` no browser. Schema é **de facto** (definido
> pelos seeds e pelos shapes gravados), não há schema formal validado.

## Coleções JSON do Servidor

Definidas em `server.js` `LOCAL_COLLECTIONS`. Arquivos em `backend/data/`.

| Coleção | Arquivo | Default | Conteúdo |
|---------|---------|---------|----------|
| `products` | `products.json` | `[]` | Catálogo de produtos (seed se vazio) |
| `discoveries` | `discoveries.json` | `[]` | Discoveries de exemplo (seed se vazio) |
| `created-discoveries` | `created-discoveries.json` | `[]` | Discoveries criados pelo usuário |
| `product-favorites-by-user` | `product-favorites-by-user.json` | `{}` | `{ [profileId]: [productId] }` |
| `favorite-discovery-ids` | `favorite-discovery-ids.json` | `[]` | IDs de discoveries favoritados |
| `product-audience-by-product` | `product-audience-by-product.json` | `{}` | Personas + stakeholders por produto |
| `research-activity-users` | `research-activity-users.json` | `{}` | Usuários de atividade de pesquisa |
| `local-mock-runs` | `local-mock-runs.json` | `{}` | Estado das runs mock (hidratado no boot) |

Seed automático: `seedProductsAndDiscoveriesIfEmpty()` popula `products` e `discoveries` na
primeira execução se vazias.

## Entidade: Product (seed `getSeedProducts`)

```jsonc
{
  "id": "cora-promocoes",
  "name": "Cora Promoções",
  "tower": "Comercial", "tribe": "Revenue", "category": "Revenue",
  "description": "...", "about": "...",
  "lastActivity": "20/11/2025",
  "discoveryCount": 1, "doneCount": 1, "progressCount": 0,
  "favorite": false,
  "metrics": ["Adesão promocional", "..."],
  "squad": "Revenue Squad",
  "participants": "Bruno Lima, Camila Rocha",
  "productTeam": { "designer": "", "pm": "", "architect": "", "arquiteto": "", "gpm": "" },
  "start": "25/04/2026", "end": "20/05/2026",
  "artifacts": ["Análise", "CSD", "..."],          // string[] OU objeto {id,productId,title,date,type}
  "personas": [ { "id": "", "name": "", "type": "", "description": "", "goals": [], "pains": [] } ],
  "stakeholders": [ { "id": "", "name": "", "area": "", "role": "", "description": "", "interest": "" } ]
}
```
Produtos seed: `cora-promocoes`, `cora-precos`, `cora-agreements`, `cora-assortment`,
`cora-coolers`, `cora-credito`, `cora-payments`, `cora-settlement`, `cora-transportes`.

## Entidade: Discovery (seed `getSeedDiscoveries`)

```jsonc
{
  "id": "dashboard-operacional",
  "productId": "cora-precos",
  "product": "Cora Preços",
  "title": "Dashboard operacional",
  "description": "...",
  "status": "1/3 concluídos",
  "insight": "...",
  "next": "...",
  "updatedAt": "2026-05-20T12:00:00.000Z"
}
```

## Entidade: Mock Agent Run (`local-mock-runs`)

```jsonc
{
  "run_id": "mock-agent-run-...",
  "discovery_id": "...",
  "current_state": "DOR_ANALYZING | RESEARCH_APPROVAL_PENDING | ... | COMPLETED",
  "status": "running | waiting_for_human | completed",
  "adapter": "mock_agent",
  "inputs": { },
  "evidence": [ ],
  "events": [ { "type": "", "payload": {}, "created_at": "" } ],
  "created_at": "", "updated_at": ""
}
```
Outputs estruturados são derivados on-the-fly por `createMockAgentOutputs()` (discovery_charter,
research_plan, evidence_inventory, synthesis, opportunities, recommendation, handoff).

## Estado no Browser

- `localStorage["discoveryIa.productFavoritesByUser"]` → `{ [profileId]: [productId] }`.
- `localStorage["discoveryIa.frontendApiMode"]` → override de modo (opcional).
- Perfil hardcoded: `{ id: "perfil-ambev-demo", name: "Perfil Ambev" }`.
- Demais estados (draft de discovery, arquivos, recrutamento) são **só em memória**.

## Riscos / Lacunas

- **R7:** `saveLocalJson` usa `writeFileSync` sem lock → corrupção em writes concorrentes.
- **R1:** coleções graváveis via `/api/local/*` sem auth/validação.
- Sem schema formal/migração: shape evolui implicitamente pelos seeds e gravações.
- Identidade real ausente (perfil hardcoded) → favoritos não são por usuário real.
- Arquivos anexados não têm ciclo de vida de storage (só metadata local).
