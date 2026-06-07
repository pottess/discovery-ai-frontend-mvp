---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
lastStep: 8
status: 'complete'
completedAt: '2026-06-07'
inputDocuments:
  - _bmad-output/planning-artifacts/prds/prd-discovery-ai-react-migration-2026-06-05/prd.md
  - _bmad-output/planning-artifacts/epics.md
  - docs/architecture-frontend.md
  - docs/api-contracts-frontend.md
  - docs/data-models-frontend.md
  - docs/component-inventory-frontend.md
  - docs/index.md
  - CLAUDE.md
workflowType: 'architecture'
project_name: 'Discovery AI Frontend (React Migration)'
user_name: 'luis.machado'
date: '2026-06-07'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**

16 FRs mapeados em 5 épicos, 26 stories. Agrupamento arquitetural:

| Grupo | FRs | Componentes arquiteturais |
|-------|-----|--------------------------|
| Fundação | FR-1–3 | React 19 + Vite scaffold, component barrel, react-router |
| I18n | FR-4–5 | i18next runtime switching, catalog structure |
| Design System | FR-6–7 | Celebration providers, CSS tokens, `components/external/` barrel |
| Mock Layer | FR-8–9 | MirageJS dev-only, `services/http` desacoplado |
| Repositório & Produtos | FR-10–11 | Home, catalog, favoritos, product detail, audience |
| Criação de Discovery | FR-12–13 | Full-page flow, validação multi-etapa, kickoff, polling |
| Workflow de Agentes | FR-14–15 | Cockpit, human gates, evidence upload, synthesis, interviews |
| Qualidade | FR-16 | Vitest + RTL baseline ≥ 60% statements |

**Non-Functional Requirements:**

| NFR | Implicação arquitetural |
|-----|------------------------|
| Acessibilidade | Heredar de Celebration; nenhum componente custom deve regredir a11y |
| Performance | Bundle splitting por rota (lazy), Lighthouse observacional ≤ prototype |
| I18n | Todos os textos via `t()` — sem strings hardcoded em nenhum componente |
| Manutenibilidade | TypeScript strict, sem globals mutáveis, feature isolation |
| Segurança | React escaping padrão; dados do usuário nunca via `dangerouslySetInnerHTML` |

**Scale & Complexity:**

- Domínio primário: Frontend SPA (web)
- Complexidade: Medium-High
- Componentes arquiteturais estimados: ~26 unidades de feature + shared + infra

### Technical Constraints & Dependencies

- `@celebration/react@2.8.1` — versão exata, registry VS autenticado (Story 1.0 como pré-requisito)
- React 19.2.3 — exact pin; compatibilidade com Celebration validada por spike (Story 1.1 gate go/no-go)
- Node.js proxy (`server.js`) — contrato de API atual é fonte de verdade para shapes de mock
- Mirage nunca em produção — guarda obrigatória `import.meta.env.DEV`
- Sem toque no backend para o MVP — toda integração real é future work

### Cross-Cutting Concerns Identified

1. **I18n** — `t()` obrigatório em 100% dos textos; runtime switching; 3 catálogos completos
2. **Error handling pattern** — timeout/network error + retry em todas as features (DoD de Epic 2–4)
3. **Loading/skeleton states** — `AppShellSkeleton` via Suspense; feature skeletons por zona
4. **Parity com inventário** — SM-1 dirige todo Epic 2–4; inventário em `docs/component-inventory-frontend.md`
5. **Agent polling pattern** — `refetchInterval` como função; para em gate/terminal states; timeout via `meta`
6. **Human-gate pattern** — estados que param polling + POST `/api/discovery/resume`; reutilizado em 4 gates
7. **Form validation pattern** — react-hook-form + zod por etapa; preservar dados em erro de rede

## Starter Template Evaluation

### Primary Technology Domain

Frontend SPA (web) — rewrite brownfield de protótipo vanilla para React 19.

### Starter Selected: Vite + react-ts template

**Rationale:** Stack já validada pelo spike (Story 1.1). Todas as decisões estão fixadas em `docs/project-context.md` e `.claude/rules/`.

**Initialization Command:**

```bash
npm create vite@latest . -- --template react-ts
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
TypeScript strict (`"strict": true`). Path alias `~/` → `src/` configurado via `tsconfig.json` + `vite.config.ts`.

**Build Tooling:**
Vite — HMR em dev, bundle otimizado em prod com code splitting por rota (lazy).

**Code Organization:**
Feature-oriented. Ver `.claude/rules/react-feature-architecture.md` e `docs/project-context.md`.

**Packages adicionados ao scaffold base:**

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| @celebration/react | 2.8.1 (exact) | Design system Ambev |
| react-router-dom | ^7 | Roteamento SPA |
| @tanstack/react-query | ^5 | Server state + polling |
| ky | ^1 | HTTP client |
| styled-components | ^6 | Estilização |
| react-error-boundary | ^5 | Error boundaries |
| react-hook-form | ^7 | Formulários |
| zod | ^3 | Schema validation |
| @hookform/resolvers | ^3 | Bridge form↔zod |
| react-i18next + i18next | latest | I18n runtime |
| miragejs | ^0.1 (dev) | API mocking |

**Provider hierarchy (ordem obrigatória):**
`ThemeProvider > ToastProvider > QueryClientProvider > RouterProvider`

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Stack React 19.2.3 + Vite + TypeScript strict ✅ decidido
- @celebration/react@2.8.1 exact pin ✅ decidido
- HTTP client: ky@^1 via services/http/ ✅ decidido
- Polling: refetchInterval como função ✅ decidido
- Provider order fixado ✅ decidido

**Deferred Decisions (Post-MVP):**
- Auth real (SSO / identidade real) — sem ETA
- Integrações externas (Teams, Jira, etc.) — fora do MVP
- E2E tests — fora do MVP

**Open Questions (resolver antes das stories afetadas):**
- Q4: hash redirect strategy → antes de Story 1.4
- Q6: i18n content ownership (es/en) → antes de Story 1.5

### Data Architecture

Sem banco de dados no frontend. Dados via REST (`/api/*`). Cache gerido por TanStack Query.
Persistência local: `localStorage` somente para favoritos e idioma.
Validação: zod (forms) + TypeScript strict (contratos de API em `src/types/`).

### Authentication & Security

Sem auth real no MVP. Perfil hardcoded `{ id: "perfil-ambev-demo" }`.
React escaping padrão — proibido `dangerouslySetInnerHTML` com dados externos.
Browser chama apenas `/api/*`; segredos vivem só no `server.js`.

### API & Communication Patterns

REST via Node.js proxy. HTTP client: ky@^1 instanciado em `services/http/` — features nunca importam ky diretamente.
Error normalization centralizada em `services/http/interceptors`.
MirageJS espelha contrato completo do servidor para dev offline; nunca incluído no bundle de produção.

### Frontend Architecture

Feature-oriented. Import hierarchy definida em `.claude/rules/react-feature-architecture.md`.
State: TanStack Query (server state) + Context+useReducer (feature UI state, scoped).
Routing: react-router-dom@^7, clean URLs. Cada rota: `React.lazy` + `Suspense` + `ErrorBoundary`.
I18n: react-i18next, runtime switching, 3 catálogos (pt/es/en), zero strings hardcoded.
Polling: `refetchInterval` como função — para em gate/terminal states.

### Infrastructure & Deployment

CI: Vitest + RTL (coverage gate ≥ 60% ativado em Epic 5) + `tsc --noEmit`.
Hosting: Vercel static (config existente).
Environments: `VITE_API_URL` via `.env.example`. Mirage ativo apenas quando `import.meta.env.DEV`.

## Implementation Patterns & Consistency Rules

### Naming Patterns

**Arquivos e pastas — kebab-case sem exceção:**

```
features/product-catalog/
  product-catalog-feature.tsx    ✅
  ProductCatalog.tsx             ❌
  productCatalog.tsx             ❌
```

**Componentes React — PascalCase no export, kebab-case no arquivo:**

```ts
// arquivo: product-card.tsx
export const ProductCard = () => ...   ✅
export const productCard = () => ...   ❌
```

**Hooks — prefixo `use`, camelCase:**

```ts
export const useProductSearch = () => ...   ✅
export const ProductSearch = () => ...      ❌
```

**Constantes — SCREAMING_SNAKE_CASE:**

```ts
export const MAX_POLL_RETRIES = 10   ✅
export const maxPollRetries = 10     ❌
```

**Arquivos de estilo e tipos — sempre `styles.ts` / `types.ts` (sem prefixo):**

```
button/styles.ts         ✅
button/button.styles.ts  ❌
```

### Structure Patterns

**Testes — dentro de `__tests__/` na mesma pasta do arquivo testado:**

```
button/
  __tests__/
    button.test.tsx    ✅
  button.tsx
button.test.tsx        ❌ (fora da pasta)
```

**Feature entry point — `<nome>-feature.tsx`, exposto via `index.ts`:**

```ts
// features/product-catalog/index.ts
export { ProductCatalogFeature } from "./product-catalog-feature";
export type { ProductFilters } from "./types";
// NÃO exportar hooks internos, api.ts, subcomponentes
```

**API calls — exclusivamente em `api.ts` da feature:**

```ts
// features/product-catalog/api.ts
export const productCatalogApi = {
  list: (filters: ProductFilters) => http.get('/api/local/products', ...),
  getById: (id: string) => http.get(`/api/local/products/${id}`),
}
```

### Format Patterns

**API response — shape espelha `server.js` (REST direto, sem wrapper):**

```ts
// GET /api/local/products → ProductDto[]  (array direto)
// GET /api/discovery/status/:id → { state: AgentState, ... }
// Não inventar envelope { data: ..., error: ... }
```

**Datas — ISO 8601 strings em trânsito:**

```ts
updatedAt: "2026-06-07T14:30:00Z"   ✅
updatedAt: 1749304200000             ❌
```

**Chaves JSON — camelCase no frontend; snake_case apenas no payload kickoff → backend CrewAI:**

```ts
{ discoveryId: "abc" }   ✅ (frontend state)
{ discovery_id: "abc" }  ✅ (inputs para kickoff)
```

### Communication Patterns

**Polling — `refetchInterval` como função, NUNCA `setInterval`:**

```ts
refetchInterval: (query) => {
  const state = query.state.data?.state;
  if (!state || TERMINAL_STATES.includes(state) || GATE_STATES.includes(state)) return false;
  return config.polling_interval;
}
```

**Estado de agente — constantes tipadas, nunca strings literais inline:**

```ts
const TERMINAL_STATES: AgentState[] = ["COMPLETED", "FAILED", "CANCELLED"];
const GATE_STATES: AgentState[] = [
  "RESEARCH_APPROVAL_PENDING", "EVIDENCE_UPLOAD_PENDING",
  "INSIGHT_REVIEW_PENDING", "OPPORTUNITY_REVIEW_PENDING",
];
```

**I18n — `t()` em todo texto visível ao usuário, sem exceção:**

```tsx
<h1>{t('product.title')}</h1>   ✅
<h1>Produtos</h1>               ❌
```

### Process Patterns

**Error handling — normalizado em `services/http/`, não nas features:**

```ts
// services/http/interceptors.ts — único lugar que transforma HTTPError → AppError
// features apenas consomem: const { error } = useQuery(...)
// Nunca try/catch em api.ts das features para erros HTTP
```

**Loading states — Suspense para lazy routes + skeleton por feature zone:**

```tsx
// Router: ErrorBoundary > Suspense > LazyPage
// Feature zones com dados: skeleton próprio via isLoading do useQuery
// Nunca spinner global que bloqueia toda a UI
```

**Formulários multi-etapa — estado preservado em erro de rede:**

```ts
// onSubmit: nunca resetar form em HTTPError
// Só resetar em sucesso (navigate para próxima tela)
// Exibir erro inline + manter valores preenchidos
```

### Enforcement Guidelines

**Todo agente AI DEVE:**

- Seguir `.claude/rules/react-feature-architecture.md` para toda decisão de localização de código
- Usar `services/http/` como único ponto de instância ky
- Nomear tudo kebab-case (arquivos/pastas) — PascalCase só no export de componente
- Colocar testes em `__tests__/` dentro da pasta do arquivo testado
- Usar `t()` para todo texto visível
- Nunca importar diretamente de `@celebration/react` — somente via `components/external/`
- Nunca usar `setInterval` para polling
- Expor apenas entry points em `index.ts` da feature

**Referência canônica:** `.claude/rules/` + `docs/project-context.md`

## Project Structure & Boundaries

### Complete Project Directory Structure

```
src/
├── main.tsx
├── App.tsx
│
├── config/
│   ├── router.tsx              ← react-router, lazy routes + ErrorBoundary/Suspense por rota
│   └── env.ts                  ← validação de VITE_API_URL
│
├── pages/                      ← shells finos, sem lógica de negócio
│   ├── home-page/
│   ├── product-detail-page/
│   ├── product-audience-page/
│   ├── discovery-page/         ← cockpit
│   ├── synthesis-page/
│   ├── interview-page/
│   └── interview-session-page/
│
├── features/
│   │
│   ├── repository/             ← Epic 2: home + lista de discoveries + favoritos
│   │   ├── repository-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── types.ts
│   │   ├── hooks/
│   │   │   ├── use-favorites.ts
│   │   │   └── use-discoveries.ts
│   │   ├── components/
│   │   │   ├── discovery-card/
│   │   │   └── favorites-list/
│   │   └── index.ts
│   │
│   ├── product-catalog/        ← Epic 2: busca, filtros, stats, favoritos de produto
│   │   ├── product-catalog-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── types.ts
│   │   ├── hooks/
│   │   │   ├── use-product-search.ts
│   │   │   └── use-product-favorites.ts
│   │   ├── components/
│   │   │   ├── product-card/
│   │   │   ├── product-filters/
│   │   │   └── product-stats/
│   │   └── index.ts
│   │
│   ├── product-detail/         ← Epic 2: detalhe do produto
│   │   ├── product-detail-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── components/
│   │   │   ├── product-info/
│   │   │   ├── product-team/
│   │   │   └── product-metrics/
│   │   └── index.ts
│   │
│   ├── product-audience/       ← Epic 2: personas + stakeholders CRUD
│   │   ├── product-audience-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── types.ts
│   │   ├── hooks/
│   │   │   ├── use-persona-form.ts
│   │   │   └── use-stakeholder-form.ts
│   │   ├── components/
│   │   │   ├── persona-card/
│   │   │   ├── persona-form/
│   │   │   ├── stakeholder-card/
│   │   │   └── stakeholder-form/
│   │   └── index.ts
│   │
│   ├── discovery-workflow/     ← Epic 3: fluxo full-page de criação (4 etapas + kickoff)
│   │   ├── discovery-workflow-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── types.ts
│   │   ├── hooks/
│   │   │   ├── use-discovery-form.ts
│   │   │   └── use-poll-run-status.ts
│   │   ├── components/
│   │   │   ├── setup-step/
│   │   │   ├── participants-step/
│   │   │   ├── csd-step/
│   │   │   ├── methodology-step/
│   │   │   └── step-navigation/
│   │   ├── store/              ← Context+useReducer: estado multi-etapa (nunca re-exportado)
│   │   │   ├── discovery-flow-context.tsx
│   │   │   └── discovery-flow-reducer.ts
│   │   └── index.ts
│   │
│   ├── discovery-cockpit/      ← Epic 4: cockpit + human gates + evidence upload
│   │   ├── discovery-cockpit-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── types.ts
│   │   ├── hooks/
│   │   │   ├── use-cockpit-status.ts
│   │   │   ├── use-human-gate.ts
│   │   │   └── use-evidence-upload.ts
│   │   ├── components/
│   │   │   ├── workflow-status/
│   │   │   ├── gate-approval/
│   │   │   ├── evidence-uploader/
│   │   │   ├── chat-modal/
│   │   │   └── method-entry-modal/
│   │   └── index.ts
│   │
│   ├── discovery-synthesis/    ← Epic 4: synthesis view
│   │   ├── discovery-synthesis-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── components/
│   │   │   ├── synthesis-section/
│   │   │   └── output-panel/
│   │   └── index.ts
│   │
│   ├── discovery-interviews/   ← Epic 4: interviews (planning + session simulada)
│   │   ├── discovery-interviews-feature.tsx
│   │   ├── api.ts
│   │   ├── keys.ts
│   │   ├── components/
│   │   │   ├── interview-card/
│   │   │   └── session-recorder/
│   │   └── index.ts
│   │
│   └── shared/                 ← compartilhado por 2+ features
│       ├── components/
│       │   ├── agent-state-badge/
│       │   ├── discovery-status-chip/
│       │   ├── product-avatar/
│       │   ├── empty-state/
│       │   └── confirmation-modal/
│       ├── hooks/
│       │   ├── use-config.ts           ← /api/config (polling global)
│       │   └── use-local-collection.ts ← CRUD genérico /api/local
│       ├── mappers/
│       │   ├── discovery-mapper.ts
│       │   └── product-mapper.ts
│       └── types.ts
│
├── components/
│   ├── core/
│   │   ├── error-boundary/
│   │   │   ├── error-boundary.tsx
│   │   │   ├── page-error-fallback.tsx
│   │   │   ├── section-error-fallback.tsx
│   │   │   └── index.ts
│   │   ├── app-shell/
│   │   │   ├── app-shell.tsx
│   │   │   ├── app-shell-skeleton.tsx  ← fallback do Suspense
│   │   │   └── index.ts
│   │   └── language-selector/
│   │       ├── language-selector.tsx
│   │       └── index.ts
│   └── external/
│       └── index.ts                    ← barrel: todos os Clb* de @celebration/react
│
├── services/
│   ├── http/
│   │   ├── client.ts                   ← instância ky + config base
│   │   ├── interceptors.ts             ← normalização de erro HTTPError → AppError
│   │   └── index.ts
│   └── storage/
│       ├── local-storage.ts            ← wrapper localStorage
│       └── index.ts
│
├── libs/
│   └── date/
│       ├── format-date.ts
│       └── index.ts
│
├── hooks/
│   └── use-app-config.ts               ← /api/config (transversal, sem domínio)
│
├── utils/
│   ├── format-currency.ts
│   ├── truncate-text.ts
│   └── mappers/                        ← mappers sem domínio algum
│
├── metadata/
│   ├── agent-state.ts                  ← AgentState enum + TERMINAL/GATE_STATES
│   └── discovery-status.ts
│
├── constants/
│   ├── api-paths.ts
│   └── polling.ts
│
├── mocks/
│   ├── server.ts                       ← MirageJS server (dev-only)
│   ├── seeds.ts
│   └── scenarios/
│       ├── default.ts
│       ├── discovery-in-progress.ts
│       └── gate-pending.ts
│
├── i18n/
│   ├── config.ts
│   └── locales/
│       ├── pt-BR/
│       │   ├── common.json
│       │   ├── repository.json
│       │   ├── products.json
│       │   ├── discovery.json
│       │   └── cockpit.json
│       ├── es/
│       └── en/
│
├── types/                              ← Story 1.9: contratos de API compartilhados
│   ├── api.ts
│   ├── product.ts
│   ├── discovery.ts
│   └── agent.ts
│
└── styles/
    └── global.css
```

### Architectural Boundaries

**API Boundaries:**

```
Browser → services/http/ (ky) → Node.js proxy (/api/*) → backend CrewAI / JSON local
                ↑
         Mirage intercepts em dev (import.meta.env.DEV)
```

- Browser nunca chama backend CrewAI diretamente
- `services/http/` é o único ponto de instância ky — features nunca importam ky
- Mirage espelha rotas reais; dev e prod usam o mesmo `services/http/`

**Component Boundaries:**

- `features/*` → nunca importam de outros `features/*` (só de `features/shared/`)
- `@celebration/react` → apenas via `components/external/index.ts`
- `store/` dentro de feature → scoped, nunca re-exportado em `index.ts`

**Data Boundaries:**

- Server state: TanStack Query por `queryKey` (nenhum estado global compartilhado)
- UI state de feature: Context+useReducer local (scoped em `store/`)
- `localStorage`: apenas via `services/storage/local-storage.ts`

### Requirements to Structure Mapping

| Epic / Story | Localização |
|---|---|
| 1.2 Scaffold + providers | `src/main.tsx`, `src/config/`, `package.json` |
| 1.3 Barrel + lint | `src/components/external/index.ts` |
| 1.4 React Router | `src/config/router.tsx`, `src/pages/` |
| 1.5 I18n | `src/i18n/` |
| 1.6 Mirage | `src/mocks/`, `src/services/http/` |
| 1.7 Home read-only | `src/features/repository/` |
| 1.9 Tipos compartilhados | `src/types/` |
| 2.x Produtos & Público | `features/product-catalog/`, `features/product-detail/`, `features/product-audience/` |
| 3.x Criação Discovery | `features/discovery-workflow/` |
| 4.1–4.2 Mock routes cockpit | `src/mocks/scenarios/` |
| 4.3–4.7 Cockpit + gates | `features/discovery-cockpit/`, `features/discovery-synthesis/`, `features/discovery-interviews/` |
| 5.x Qualidade | `vitest.config.ts`, cobertura inline em `__tests__/` |

### Cross-Cutting Concerns Locations

| Concern | Localização |
|---|---|
| I18n (`t()`) | `src/i18n/` + todo componente usa `useTranslation()` |
| Error handling | `services/http/interceptors.ts` + `components/core/error-boundary/` |
| Agent state constants | `metadata/agent-state.ts` |
| Config polling | `features/shared/hooks/use-config.ts` |
| Loading skeletons | `components/core/app-shell/app-shell-skeleton.tsx` + skeleton por feature |

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:** Todas as escolhas de tecnologia são compatíveis. Pares validados: React 19 + @celebration/react@2.8.1 (spike Story 1.1), ky + MirageJS (Mirage intercepta fetch), react-hook-form + zod + @hookform/resolvers (bridge padrão), react-error-boundary + React 19 (API de hooks padrão).

**Pattern Consistency:** Padrões de naming (kebab-case), estrutura (__tests__/), polling (refetchInterval), e importação (barrel) são consistentes entre si e com o tech stack escolhido.

**Structure Alignment:** Estrutura feature-oriented suporta isolamento requerido pelos patterns. Boundaries API/Component/Data claramente separados.

### Requirements Coverage Validation ✅

**Epic/Feature Coverage:** 5 épicos, 26 stories — todos com localização explícita no mapa de estrutura. Nenhum épico sem suporte arquitetural.

**Functional Requirements Coverage:** 16/16 FRs cobertos. Mapeamento completo em "Requirements to Structure Mapping".

**Non-Functional Requirements Coverage:**
- Performance: lazy routes + Vite code splitting por rota ✅
- Acessibilidade: Celebration DS defaults + ErrorBoundary com actionable fallback ✅
- I18n: padrão `t()` enforced, 3 catálogos em `src/i18n/locales/` ✅
- Manutenibilidade: TypeScript strict + feature isolation + import hierarchy ✅
- Segurança: React escaping padrão, sem dangerouslySetInnerHTML com dados externos ✅

### Implementation Readiness Validation ✅

**Decision Completeness:** Todas as decisões críticas documentadas com versões. Stack fixada. Provider order fixada. Padrões de polling, error handling, e forms especificados.

**Structure Completeness:** Árvore completa com todos os arquivos-chave e diretórios. Integration points e boundaries definidos. Epic-to-directory mapping explícito.

**Pattern Completeness:** 8 categorias de conflito de agentes endereçadas com exemplos concretos de ✅ e ❌.

### Gap Analysis Results

**Importante (resolver antes das stories afetadas):**
- Q4: Estratégia para redirect de legacy hash URLs (`#home` → `/home`) — deve ser decidida antes de Story 1.4
- Q6: Proprietário do conteúdo i18n em es/en — deve ser decidida antes de Story 1.5

**Menor (não bloqueia implementação):**
- `research-activity-users` scope não mapeado a feature — resolver no refinamento do Epic 2
- `discovery-interviews` é candidato a scope cut (nota no epics: "low-value/high-effort") — confirmar antes de Story 4.6

### Architecture Completeness Checklist

**Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key Strengths:**
- Stack completamente fixada antes de qualquer implementação — zero ambiguidade para agentes AI
- Feature isolation rigorosa previne regressões entre épicos paralelos
- Polling pattern explícito (refetchInterval como função) elimina antipatterns comuns
- Mirage desacoplado de services/http permite troca dev→prod sem alterar features

**Areas for Future Enhancement:**
- Auth real (SSO) — post-MVP
- E2E tests (Playwright) — post-MVP
- Integrações externas (Teams, Jira) — post-MVP
- Separar `features/shared` se crescer além de 15 componentes

### Implementation Handoff

**AI Agent Guidelines:**
- Seguir `.claude/rules/` + `docs/project-context.md` para toda decisão de localização
- Usar este documento como fonte de verdade arquitetural
- Resolver Q4 (hash redirect) e Q6 (i18n owner) antes das stories 1.4 e 1.5
- Confirmar scope de `discovery-interviews` antes de iniciar Story 4.6

**First Implementation Priority:**

```bash
npm create vite@latest . -- --template react-ts
```

Seguido pelas stories em ordem de épico: 1.0 → 1.1 (gate go/no-go) → 1.2–1.9 → 2.x → 3.x → 4.x → 5.x
