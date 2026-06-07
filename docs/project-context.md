# Project Context — Discovery AI Frontend (React Migration)

> Auto-loaded by bmad skills as persistent facts. Keep concise — detail lives in `.claude/rules/`.
> Source of truth: `CLAUDE.md` + `.claude/rules/`. Update this file when decisions change.

---

## What Is This

Rewrite of a vanilla JS prototype → React 19 SPA. Feature-oriented architecture. Target users: designers/PMs doing product discovery. Backend: Node.js proxy + Python CrewAI crew.

**Stack is fixed — no debate per task:**

| Package | Version | Note |
|---------|---------|------|
| react / react-dom | `19.2.3` | exact, no `^` |
| @celebration/react | `2.8.1` | exact, no `^` |
| react-router-dom | `^7` | clean URLs, no hash routing |
| @tanstack/react-query | `^5` | server state + polling |
| ky | `^1` | HTTP client (NOT axios, NOT native fetch) |
| styled-components | `^6` | all styles (NO inline style) |
| react-error-boundary | `^5` | route + feature-zone level |
| react-hook-form | `^7` | all forms |
| zod | `^3` | schema validation |
| @hookform/resolvers | `^3` | bridge form↔zod |
| miragejs | dev only | API mocks (NOT msw) |

---

## Architecture Shape

```
src/
  pages/            # thin route shells — NO business logic
  features/         # isolated by domain
    shared/         # shared across 2+ features only
  components/
    core/           # app primitives (ErrorBoundary, Skeleton, etc.)
    external/       # barrel re-exports of @celebration/react ONLY
  hooks/            # generic / transversal hooks (no domain)
  libs/             # pure wrappers — no I/O (e.g. date-fns)
  services/         # I/O wrappers (network, localStorage, SDKs)
    http/           # ky instance — only origin of HTTP in app
  utils/            # pure domain-agnostic functions
  metadata/         # global types and enums
  mocks/            # MirageJS server (dev only)
  i18n/             # i18next catalogs + config
  config/           # router.tsx, env, theme
  providers/        # global context providers
  types/            # shared contract types
```

---

## Closed Decisions (do not reopen)

1. **HTTP client = ky** — features never instantiate ky directly; only `services/http/`
2. **Polling = `refetchInterval` as function** — never `setInterval` or manual `useEffect` timers
3. **Celebration = single package** — `@celebration/react@2.8.1` (not v1/v2 split; not direct imports)
4. **All external UI imports go through `components/external/`** — no direct `@celebration/react` imports elsewhere
5. **Styles = styled-components in `styles.ts`** — no inline `style={{ }}`, no `*.styles.ts` naming
6. **Every route = `React.lazy` + `Suspense` + `ErrorBoundary`** — no eager page imports in router
7. **Mirage for mocks** — `import.meta.env.DEV` guard; seeds in `mocks/seeds.ts`; never in production bundle
8. **Provider order fixed:** `ThemeProvider > ToastProvider > QueryClientProvider > RouterProvider`
9. **No hash routing** — React Router v7 with clean URLs replaces vanilla `location.hash`
10. **TypeScript strict mode** — `strict: true`; path alias `~/` → `src/`
11. **libs = pure (no I/O), services = I/O** — test: can it run offline without browser APIs? yes→libs, no→services
12. **Mappers are pure functions** — no I/O, no hooks, no component imports; co-located tests mandatory

---

## Import Hierarchy (golden rule)

Only import from layers **below**:

```
pages → features, features/shared, components/core, components/external, hooks, utils, metadata
features → features/shared, components/*, libs, utils, metadata, services, hooks, constants
components/core → components/external, libs, utils, metadata, hooks
components/external → npm only
services → libs, utils, metadata, config
libs → npm only
```

**Forbidden cross-imports:**
- feature → another feature (only `features/shared` allowed)
- `components/core` → `features/*`
- `services/*` → `features/*` or `pages/*`

---

## Agent Workflow States

```
DOR_ANALYZING
  → RESEARCH_APPROVAL_PENDING  (gate)
  → EVIDENCE_UPLOAD_PENDING    (gate)
  → INSIGHT_REVIEW_PENDING     (gate)
  → OPPORTUNITY_REVIEW_PENDING (gate)
  → COMPLETED
```

Terminal states: `COMPLETED`, `FAILED`, `CANCELLED`  
Gate states stop polling (`refetchInterval` returns `false`).

---

## Anti-patterns (hard no)

- `setInterval` / `clearInterval` for polling → use `refetchInterval` as function
- `axios` anywhere → use `ky` via `services/http/`
- Direct `import from '@celebration/react'` in features/pages → through `components/external/`
- `style={{ }}` inline → styled-component in `styles.ts`
- Eager page imports in router → `React.lazy`
- `lazy()` inside features (non-route) → route boundary only
- `store/` folder in feature unless Context+useReducer / scoped Jotai Provider (never re-exported)
- Folder named `core/` or `external/` outside `components/`
- Test mocks that mock the HTTP layer instead of Mirage (breaks integration fidelity)

---

## Detailed Rules Index

| Topic | File |
|-------|------|
| Feature structure, state, API layer, hooks | `.claude/rules/features-rule.md` |
| features/shared — sharing, anti-anticipation | `.claude/rules/features-shared-rule.md` |
| components/core + components/external | `.claude/rules/components-rule.md` |
| libs vs services (side-effect rule) | `.claude/rules/libs-services-rule.md` |
| Hooks — global vs shared vs feature | `.claude/rules/hooks-rule.md` |
| Mappers — location, purity, tests | `.claude/rules/mappers-rule.md` |
| utils/ + metadata/ | `.claude/rules/utils-metadata-rule.md` |
| HTTP client, interceptors, error handling | `.claude/rules/http-client.md` |
| MirageJS mocks | `.claude/rules/mirage-rule.md` |
| styled-components, tokens | `.claude/rules/styling-rule.md` |
| Architecture overview + lazy loading + error boundaries | `.claude/rules/react-feature-architecture.md` |

---

## Key Files

- `CLAUDE.md` — brownfield context, risks, API surface, data model
- `_bmad-output/planning-artifacts/prd.md` — product requirements
- `_bmad-output/planning-artifacts/epics.md` — epics + stories list
- `_bmad-output/planning-artifacts/architecture.md` — architecture decisions (in progress)
- `_bmad-output/implementation-artifacts/` — ready-for-dev stories
- `docs/` — API contracts, data models, component inventory
