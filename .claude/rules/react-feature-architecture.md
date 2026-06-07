---
paths:
  - "src/**"
description: Visão geral da arquitetura feature-oriented — princípios, mapa de pastas, hierarquia de imports, árvore de decisão, naming conventions, barrel exports e checklist pré-commit. Para regras detalhadas de cada camada, ver o índice no final deste arquivo.
---

# React Feature-Oriented Architecture — Visão Geral

## 🎯 Core Principles

1. **Feature-First**: Code is organized by business functionality, not by technical type
2. **Isolation**: Features never depend on each other directly
3. **Centralized External Imports**: Third-party UI libraries are imported from a single location so swapping them is a one-place change
4. **Explicit Sharing**: Shared code has a defined location and clear promotion rules

---

## 📁 Folder Structure

```
src/
├── pages/                    # Application pages/routes (thin layer)
├── features/                 # Isolated business features (includes the special `shared/` feature)
├── components/               # Global component library
│   ├── core/                 # Design system / app base components
│   └── external/             # External UI library re-exports (MUI, etc)
├── hooks/                    # Global/app-level hooks
├── libs/                     # Non-UI library wrappers (date-fns, lodash, etc)
├── utils/                    # Global reusable utility functions
├── metadata/                 # Global types and enums
├── mocks/                    # MirageJS mocks (see mirage-rule.md)
├── services/                 # HTTP clients, analytics, external integrations
├── constants/                # Global application constants
├── config/                   # Configuration (env, routes, theme)
├── providers/                # Global context providers
└── App.tsx
```

---

## 🧱 Import Hierarchy (CRITICAL)

Golden rule — **only import from layers below**:

```
pages              ──► features, features/shared, components/core, components/external, hooks, utils, metadata
features           ──► features/shared, components/core, components/external, libs, utils, metadata, services, hooks, constants
features/shared    ──► components/core, components/external, libs, utils, metadata, services, hooks, constants
components/core    ──► components/external, libs, utils, metadata, hooks
components/external──► (external UI libs from npm ONLY)
libs               ──► (external npm libs ONLY)
utils              ──► libs, metadata, other utils
metadata           ──► (no internal code)
hooks              ──► libs, utils, metadata, services, components/external
services           ──► libs, utils, metadata, config
```

❌ Forbidden:

- `features/auth` importing from `features/orders` (only `features/shared` is allowed as a feature-to-feature import target)
- Any file importing directly from `@celebration/react` (must go through `components/external`)
- Any file outside `libs/` importing directly from wrapped non-UI libraries
- `components/core` importing from `features/*` (including `features/shared`)
- `features/shared` importing from any other `features/*` or from `pages/*`
- `utils/*` or `metadata/*` importing from `features/*`, `pages/*`, or `components/*`
- `services/*` importing from `features/*` or `pages/*`
- Any feature having a `store/` folder, **except** under the Feature-Scoped UI Store exception (Context+useReducer or scoped Jotai `Provider`, never re-exported in `index.ts`)
- Any folder named `core/` or `external/` outside `components/` (reserved names)

---

## 🚦 Decision Tree — Where Does It Go?

```
Is it specific to ONE feature?                          → features/<n>/
Is it a generic UI primitive (button, modal)?           → components/core/
Is it a re-export of an external UI lib?                → components/external/
Is it a domain-flavored UI used by 2+ features?         → features/shared/components/
Is it a mapper used by ONE feature?                     → features/<n>/mappers/ (or inline in api.ts if trivial)
Is it a mapper (domain) used by 2+ features?            → features/shared/mappers/
Is it a generic, domain-agnostic mapper used app-wide?  → utils/mappers/
Is it a wrapper for a non-UI external lib WITHOUT I/O?  → libs/
Is it a wrapper for an external resource WITH I/O?      → services/  (network, browser storage, SDKs that fire requests)
Is it a reusable pure function (domain-agnostic)?       → utils/
Is it a global type or enum?                            → metadata/
Is it an API mock?                                      → mocks/
Is it an API call specific to a feature?                → features/<n>/api.ts
Is it a generic UI/infra hook (no domain)?              → hooks/
Is it transversal app infrastructure (auth, theme)?     → hooks/  (even if it touches domain types)
Is it a domain-flavored hook used by 2+ features?       → features/shared/hooks/  (see "domain stripped" test)
Is it a global constant (strings, keys)?                → constants/
Is it genuinely app-wide state?                         → providers/
Is it complex feature-only UI state?                    → features/<n>/store/ (Context+useReducer or scoped Jotai Provider)
```

---

## 🏷️ Naming Conventions

**Everything is `kebab-case`** — folders AND files. No exceptions for component files.

### Files and Folders

- **Folders**: `user-profile/`, `login-form/`
- **Component files**: `button.tsx`, `login-form.tsx`
- **Hook files**: `use-login.ts`, `use-auth-user.ts`
- **Style files**: `styles.ts` (always this name, no prefix)
- **Type files**: `types.ts` (always this name, no prefix)
- **Test files**: `button.test.tsx`, `use-login.test.ts` (mirrors the file being tested)
- **Feature entry file**: `<feature-name>-feature.tsx` (e.g. `authentication-feature.tsx`)
- **Page files**: `<page-name>-page.tsx` (e.g. `home-page.tsx`)
- **Utility files**: `format-currency.ts`, `is-email.ts`
- **Enum files**: `user-role.ts`, `order-status.ts`

### Code Identifiers

- **React components**: `PascalCase` → `export const Button = () => ...`
- **Hooks**: `camelCase` with `use` prefix → `export const useLogin = () => ...`
- **Functions**: `camelCase` → `export const formatCurrency = () => ...`
- **Constants**: `SCREAMING_SNAKE_CASE` → `export const MAX_RETRIES = 3`
- **Enums**: `PascalCase` for the enum, `SCREAMING_SNAKE_CASE` for values
- **Types/Interfaces**: `PascalCase` → `export type User = { ... }`
- **Features folder names**: always a noun (`authentication`, not `authenticate`)

### Standard Component/Module Structure

```
button/
├── __tests__/
│   └── button.test.tsx
├── button.tsx           # The component itself (kebab name, PascalCase export)
├── styles.ts            # Styled components / CSS-in-JS (only if needed)
├── types.ts             # Local types/interfaces (only if needed)
└── index.ts             # Barrel export
```

- `styles.ts` and `types.ts` are **optional** — only create them when there's content
- `__tests__/` lives **inside** the folder being tested
- Never use prefixed names like `button.styles.ts` — the folder already provides the namespace

---

## 📦 Barrel Exports (`index.ts`)

Every folder that is a "unit" **must** expose an `index.ts` — that file is the unit's public API.

```ts
// features/authentication/index.ts
export { AuthenticationFeature } from "./authentication-feature";
export type { AuthUser } from "./types";
// DO NOT export internal hooks/components/api
```

**Barrels are for external consumers, not internal convenience.** If you're inside the module, import the file directly:

```ts
// ❌ Avoid — internal import going through barrel
import { useLogin } from "../hooks";

// ✅ Prefer — direct file import inside the same module
import { useLogin } from "../hooks/use-login";
```

**Exception**: pure type imports (`import type`) inside the same module may go through the barrel — they generate no runtime code.

### Barrel Exception — Simple Components

Do NOT create an `index.ts` if ALL conditions are true:

- The folder contains only ONE component file (e.g. `button.tsx`)
- There are NO additional files (`hooks/`, `mappers/`, multiple components, etc.)
- The component is NOT imported outside its parent feature/module

In this case, import the component directly:

```ts
import { Button } from "./button";
---

## ✅ Quick Checklist Before Committing

- [ ] No feature imports from another feature — except `features/shared`, which any feature may consume
- [ ] No direct import from `@celebration/react` or any external UI lib — everything goes through `components/external`
- [ ] No direct import from non-UI npm libs that have a wrapper in `libs/`
- [ ] Every feature exposes only its entry component (and any deliberately public types) via `index.ts`
- [ ] Feature API calls are in `api.ts` (or `api/` folder if promoted)
- [ ] Mappers are pure, tested, and live close to where they're consumed
- [ ] No `store/` folder inside any feature, **unless** under the Feature-Scoped UI Store exception (Context+useReducer or scoped Jotai `Provider`, never re-exported in `index.ts`)
- [ ] No folder named `core/` or `external/` outside `components/` (these names are reserved)
- [ ] All folders and files are in `kebab-case` (no `PascalCase` filenames)
- [ ] Style/type files are named `styles.ts` / `types.ts` (no `button.styles.ts`)
- [ ] Tests live inside `__tests__/` folder next to the file being tested
- [ ] Domain-flavored UI shared by 2+ features was moved to `features/shared/components/` only after the second consumer appeared **in the same PR** (anti-anticipation rule)
- [ ] Shared utils/types/hooks were promoted to `utils/` / `metadata/` / `hooks/` only after losing all domain flavor; otherwise they live in `features/shared/`
- [ ] Hook placement passes the "domain stripped" test: domain-dependent → `features/shared/hooks/`; generic or transversal infra (auth, theme, flags) → `hooks/`
- [ ] Side-effect classification respected: pure in-memory wrappers in `libs/`; wrappers that touch network/storage/SDKs in `services/`
- [ ] Internal imports inside the same feature/module use direct file paths, not the barrel (`../hooks/use-login`, NOT `../hooks`)
- [ ] `features/shared` health check: no folder over the numeric triggers (>15 components, stale > 3 months, sub-domain clusters, > 5 different `libs/` deps)
- [ ] Pages contain no business logic
- [ ] Utility functions are pure (no side effects)
- [ ] Global types/enums live in `metadata/`; feature-specific ones live in `features/<n>/types.ts`
- [ ] Every route uses `React.lazy` + `Suspense` (no eager page imports in the router)
- [ ] Error boundaries wrap every lazy route and each major feature zone

---

## ⚡ Lazy Loading (Code Splitting)

Each route is a code-split boundary. Never import page components eagerly in the router.

```tsx
// src/config/router.tsx
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage          = lazy(() => import("~/pages/home-page"));
const ProductDetailPage = lazy(() => import("~/pages/product-detail-page"));
const DiscoveryPage     = lazy(() => import("~/pages/discovery-page"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<AppShellSkeleton />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <Suspense fallback={<AppShellSkeleton />}>
        <ProductDetailPage />
      </Suspense>
    ),
  },
]);
```

Rules:
- ✅ `React.lazy` for every page/route component
- ✅ `Suspense` wraps each lazy route — `fallback` is a skeleton, never `null`
- ✅ `AppShellSkeleton` lives in `components/core/`
- ❌ Never eager-import page components in the router
- ❌ Never `lazy()` for components inside a feature — route boundary only

---

## 🛡️ Error Boundaries

Place at two levels:

### 1. Route-level (catch lazy load failures + runtime errors per page)

```tsx
// src/config/router.tsx
import { ErrorBoundary } from "~/components/core/error-boundary";

{
  path: "/products/:productId",
  element: (
    <ErrorBoundary fallback={<PageErrorFallback />}>
      <Suspense fallback={<AppShellSkeleton />}>
        <ProductDetailPage />
      </Suspense>
    </ErrorBoundary>
  ),
}
```

### 2. Feature-zone level (isolate errors within a page)

```tsx
// src/pages/discovery-page/discovery-page.tsx
<ErrorBoundary fallback={<SectionErrorFallback section="workflow" />}>
  <DiscoveryWorkflowFeature discoveryId={discoveryId} />
</ErrorBoundary>
```

### Implementation

Use `react-error-boundary`:

```tsx
// src/components/core/error-boundary/error-boundary.tsx
export { ErrorBoundary } from "react-error-boundary";

// src/components/core/error-boundary/page-error-fallback.tsx
import { ClbButton } from "~/components/external";

export function PageErrorFallback() {
  return (
    <div role="alert">
      <p>Algo deu errado.</p>
      <ClbButton onClick={() => window.location.reload()}>Tentar novamente</ClbButton>
    </div>
  );
}
```

Rules:
- ✅ `<ErrorBoundary>` outside `<Suspense>` for every lazy route
- ✅ Major independent zones get their own boundary
- ✅ `fallback` shows actionable UI (retry button), never blank/null
- ❌ Don't place boundaries inside individual feature components — too granular

---

## 📚 Regras específicas por camada

| Camada | Arquivo de regra |
| ------ | ---------------- |
| `features/` — estrutura interna, state, api layer, hooks | `features-rule.md` |
| `features/shared/` — shared units, anti-anticipation, promoção | `features-shared-rule.md` |
| `components/core` e `components/external` | `components-rule.md` |
| `libs/` e `services/` (side-effect rule) | `libs-services-rule.md` |
| `hooks/` e `features/**/hooks/` (decisão global vs shared vs feature) | `hooks-rule.md` |
| Mappers (`features/**/mappers/`, `utils/mappers/`) | `mappers-rule.md` |
| `utils/` e `metadata/` | `utils-metadata-rule.md` |
| HTTP client, interceptors, `getHttpErrorMessage` | `http-client.md` |
| MirageJS mocks | `mirage-rule.md` |
```
