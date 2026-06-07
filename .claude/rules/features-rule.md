---
paths:
  - "src/features/**"
description: Usar ao criar ou editar qualquer arquivo dentro de uma feature — estrutura interna, state management, api.ts, keys.ts, hooks. Para o panorama geral da arquitetura, ver `react-feature-architecture.md`. Para `features/shared/`, ver `features-shared-rule.md`.
---

# Feature Rules

> Esta regra detalha a estrutura interna e as convenções de cada feature em `src/features/`. Para o mapa completo de pastas e a hierarquia de imports, consulte `react-feature-architecture.md`.

---

## 📄 `pages/` — Thin Routing Layer

Pages must be **as thin as possible**. They only compose features.

```
pages/
├── home-page/
│   ├── home-page.tsx
│   └── index.ts
├── dashboard-page/
│   ├── dashboard-page.tsx
│   └── index.ts
└── index.ts
```

**Rule**: a page MUST NOT contain business logic. It only:

- Defines the route layout
- Orchestrates features (`<UserProfileFeature />`, `<OrdersListFeature />`)
- Handles URL params and forwards them to features

---

## 🧩 Feature Internal Structure

Each feature is **self-contained** and follows a consistent internal structure:

```
features/
├── authentication/
│   ├── components/           # Components EXCLUSIVE to this feature
│   │   ├── login-form/
│   │   │   ├── __tests__/
│   │   │   │   └── login-form.test.tsx
│   │   │   ├── login-form.tsx
│   │   │   ├── styles.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   └── password-input/
│   ├── hooks/                # Hooks exclusive to this feature (one per file)
│   │   ├── __tests__/
│   │   │   └── use-login.test.ts
│   │   └── use-login.ts
│   ├── api.ts                # API calls for this feature (single file)
│   ├── keys.ts               # React Query keys for this feature
│   ├── types.ts              # Feature-specific types and enums
│   ├── constants/            # Feature-specific constants
│   ├── authentication-feature.tsx   # Public entry component
│   └── index.ts              # Barrel export (ONLY what is public)
│
├── user-profile/
├── orders/
└── shared/                   # Special cross-feature shared feature (see features-shared-rule.md)
```

> **Note**: `metadata/` is **global only**. Inside a feature, types and enums live in a single `types.ts` file at the feature root. If `types.ts` grows too large, it can be promoted to a `types/` folder with a barrel `index.ts` — but `metadata/` remains reserved for the global layer.

---

## 📐 Feature Rules

1. ❌ **A feature NEVER imports from another feature directly** — the only exception is `features/shared`, which every feature may consume
2. ✅ If two features need to share something → it goes to `features/shared/`, `components/core/`, `libs/`, `utils/` or `metadata/`, depending on the kind of code and how generic it is
3. ✅ The `index.ts` is the public contract: exports only the entry component + required types
4. ✅ Features MAY import from `components/external` (e.g. `useToast`, `useMediaQuery`)
5. ❌ Features DO NOT have a `store/` folder — **except** under the Feature-Scoped UI Store exception below
6. ✅ All feature API calls live in `api.ts` (or the `api/` folder after it grows)
7. ❌ Features DO NOT use reserved folder names (`core`, `external` — see below)

### 🚫 Reserved Folder Names

The names **`core`** and **`external`** are **reserved exclusively** for `components/core` and `components/external` at the global level.

❌ Forbidden anywhere else in the codebase:

```
features/authentication/components/core/        ❌ FORBIDDEN
features/authentication/components/external/    ❌ FORBIDDEN
features/orders/core/                           ❌ FORBIDDEN
libs/core/                                      ❌ FORBIDDEN
```

✅ These names may ONLY appear here:

```
components/core/        ✅ the one and only
components/external/    ✅ the one and only
```

> **Note**: `shared` is NOT reserved at the global level — there is one canonical `features/shared/` (the cross-feature shared unit), and individual features may also have their own internal `shared/` subfolders for pieces shared between sibling components within the same feature.

---

## 🗂️ State Management in Features

State is handled in this order of preference:

1. **Local component state** (`useState`, `useReducer`) — always try this first
2. **Custom hook** (inside `features/<n>/hooks/`) — encapsulate complex local state
3. **Server state library** (React Query, SWR) — for anything that comes from the API, treat the server as the source of truth
4. **Global providers** (`src/providers/`) — only when state is truly app-wide (auth user, theme, feature flags)

If you feel the need for a feature-local store, reconsider: the data is likely either server state (use React Query) or genuinely global (put the provider in `src/providers/`).

### Exception: Feature-Scoped UI Stores

For genuinely complex UI state (multi-step wizards, editors with undo/redo, drag-and-drop builders, complex state machines), it is allowed to create a local store **inside** the feature, as long as **all** criteria below are satisfied:

- The state is purely UI state of the feature — NEVER read by another feature or global layer
- It is instantiated and destroyed together with the feature (no global singleton)
- It does NOT replace server state (server state stays in React Query)
- The store is NOT re-exported in the feature's public `index.ts`

Use **Context API + useReducer** or **Jotai atoms scoped to a local `Provider`**. Do NOT use a global Zustand store here — Zustand's module-level store breaks feature isolation.

Allowed structure:

```
features/checkout-wizard/
├── store/
│   ├── checkout-context.tsx         # Context + useReducer
│   ├── checkout-reducer.ts
│   ├── checkout-types.ts
│   └── index.ts                     # exports ONLY inside the feature
```

Example with Context + useReducer:

```tsx
// features/checkout-wizard/store/checkout-context.tsx
import { createContext, useContext, useReducer, ReactNode } from "react";
import { checkoutReducer, initialState } from "./checkout-reducer";
import type { CheckoutState, CheckoutAction } from "./checkout-types";

type CheckoutContextValue = {
  state: CheckoutState;
  dispatch: React.Dispatch<CheckoutAction>;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutStore = () => {
  const ctx = useContext(CheckoutContext);
  if (!ctx)
    throw new Error("useCheckoutStore must be used inside CheckoutProvider");
  return ctx;
};
```

Example with Jotai (a local `Provider` guarantees atoms are isolated per feature instance):

```ts
// features/mesh-editor/store/atoms.ts
import { atom } from "jotai";
import type { MeshNode } from "../types";

export const nodesAtom = atom<MeshNode[]>([]);
export const selectedNodeIdAtom = atom<string | null>(null);
export const isDirtyAtom = atom<boolean>(false);
```

```tsx
// features/mesh-editor/mesh-editor-feature.tsx
import { Provider } from "jotai";
import { MeshCanvas } from "./components/mesh-canvas";

export const MeshEditorFeature = () => (
  <Provider>
    {" "}
    {/* isolated scope — atoms never leak globally */}
    <MeshCanvas />
  </Provider>
);
```

When in doubt, start WITHOUT a store. Promote to one only when `useReducer` inside a custom hook can no longer handle the complexity.

---

## 🌐 API Layer (`types.ts`, `keys.ts`, `api.ts`)

### `types.ts`

Feature-specific types and enums live in a single `types.ts` at the feature root.

```ts
export type Entity = {
  id: string;
  // fields...
};

export type CreateEntityDTO = Omit<Entity, "id">;
export type UpdateEntityDTO = Partial<CreateEntityDTO>;

export type EntityFilters = {
  // feature-specific filters...
};
```

> If `types.ts` grows too large, promote to a `types/` folder with a barrel `index.ts`. The global `metadata/` folder remains reserved for types/enums shared across features.

### `keys.ts`

All React Query keys live here. Never define keys inline inside hooks.

```ts
export const entityKeys = {
  all: ["entity"] as const,

  lists: () => [...entityKeys.all, "list"] as const,
  list: (filters: unknown) => [...entityKeys.lists(), filters] as const,

  details: () => [...entityKeys.all, "detail"] as const,
  detail: (id: string) => [...entityKeys.details(), id] as const,
};
```

### `api.ts`

The HTTP client is imported from `~services/http`. Choose the response method based on the expected `Content-Type`: `.json<T>()` for JSON, `.text()` for text/CSV, `.blob()` for binary. `ky` serializes `searchParams` natively — pass filters directly as an object.

```ts
import { createHttpClient } from '~services/http'
import type {
  Entity,
  CreateEntityDTO,
  UpdateEntityDTO,
  EntityFilters,
} from './types'
import type { PaginatedResponse } from '~metadata/types'

const http = createHttpClient(import.meta.env.VITE_[FEATURE]_API_URL)

export const entityApi = {
  getAll: (filters: EntityFilters = {}) =>
    http.get('[route]', { searchParams: { ...filters } }).json<PaginatedResponse<Entity>>(),

  getById: (id: string) =>
    http.get(`[route]/${id}`).json<Entity>(),

  create: (data: CreateEntityDTO) =>
    http.post('[route]', { json: data }).json<Entity>(),

  update: (id: string, data: UpdateEntityDTO) =>
    http.patch(`[route]/${id}`, { json: data }).json<Entity>(),

  delete: (id: string) =>
    http.delete(`[route]/${id}`).json<void>(),
}
```

### When to promote `api.ts` → `api/`

1. ✅ Start as a **single file**: `api.ts`
2. ✅ Promote to `api/` folder when: file exceeds ~150–200 lines, multiple distinct resource groups exist, or repeated logic deserves its own helper
3. ❌ Do NOT split prematurely

Example after promotion:

```
features/authentication/
├── api/
│   ├── login.ts
│   ├── session.ts
│   ├── password.ts
│   └── index.ts          # Barrel re-exports everything
```

### Data transformation rules

- ❌ NEVER transform API data inside hooks
- ❌ NEVER transform API data inside components
- ✅ Transformations belong in `api.ts` (right after the response is parsed) or in dedicated mapper functions co-located with the feature
- ✅ For lightweight derivations (e.g. picking a field, formatting a label), `select` from TanStack Query is acceptable — keep it pure and cheap

### Shared imports reference

| Import                                       | Location                                  |
| -------------------------------------------- | ----------------------------------------- |
| `createHttpClient`                           | `~services/http` (configured HTTP client) |
| `PaginatedResponse` and other shared types   | `~metadata/types`                         |
| `getHttpErrorMessage` and other pure helpers | `~utils/http`                             |

---

## 🪝 `hooks/` — One File Per Hook

All hooks consume only the `api.ts` from the same feature. Filenames are kebab-case. Tests live inside `__tests__/`.

- ❌ NEVER group multiple hooks in a single file — one hook per file
- ❌ NEVER define query keys inline — always import from `keys.ts`
- ✅ All hooks consume ONLY the `api.ts` from their own feature

### Error handling convention

- **Query errors** → handled as screen state via `isError`
- **Mutation errors** → handled as events via `onError` **only when feature-specific behavior is needed** (navigation, optimistic rollback, custom message, etc.)

The global error interceptor in `~services/http` already shows a toast. **`onError` is optional by default** — don't add it just to show a toast.

### `use-get-entities.ts`

```ts
import { useQuery } from "@tanstack/react-query";
import { entityApi } from "../api";
import { entityKeys } from "../keys";
import type { EntityFilters } from "../types";

export function useGetEntities(filters: EntityFilters) {
  return useQuery({
    queryKey: entityKeys.list(filters),
    queryFn: () => entityApi.getAll(filters),
    // Use `placeholderData: (prev) => prev` only when it improves UX
    // (e.g. paginated lists, filter changes). Avoid it by default.
    placeholderData: (prev) => prev,
  });
}
```

### `use-get-entity-by-id.ts`

```ts
import { useQuery } from "@tanstack/react-query";
import { entityApi } from "../api";
import { entityKeys } from "../keys";

export function useGetEntityById(id: string) {
  return useQuery({
    queryKey: entityKeys.detail(id),
    queryFn: () => entityApi.getById(id),
    enabled: !!id,
  });
}
```

### `use-create-entity.ts`

```ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { entityApi } from "../api";
import { entityKeys } from "../keys";

export function useCreateEntity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: entityApi.create,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: entityKeys.all }),
    // `onError` is omitted on purpose: the global interceptor in `~services/http`
    // already shows the toast. Add `onError` only for feature-specific behavior.
  });
}
```

The same rule applies to `use-update-entity` and `use-delete-entity`.

---

## 🔄 Polling com React Query

Use `refetchInterval` para polling de estado assíncrono (ex.: workflow de agentes). Regras:

- ✅ `refetchInterval` como **função** — para parar quando atingir estado terminal
- ✅ `refetchOnWindowFocus: false` — polling tem cadência própria, re-focus causaria double-fetch
- ✅ `enabled` controla se o polling está ativo (ex.: desativar antes do kickoff)
- ❌ NUNCA usar `setInterval` / `setTimeout` manualmente para polling — React Query já gerencia o ciclo

```ts
// features/discovery-workflow/hooks/use-poll-run-status.ts
import { useQuery } from "@tanstack/react-query";
import { discoveryApi } from "../api";
import { discoveryKeys } from "../keys";
import type { AgentState } from "../types";

const TERMINAL_STATES: AgentState[] = ["COMPLETED", "FAILED", "CANCELLED"];
const GATE_STATES: AgentState[] = [
  "RESEARCH_APPROVAL_PENDING",
  "EVIDENCE_UPLOAD_PENDING",
  "INSIGHT_REVIEW_PENDING",
  "OPPORTUNITY_REVIEW_PENDING",
];

export function usePollRunStatus(runId: string | null) {
  return useQuery({
    queryKey: discoveryKeys.status(runId!),
    queryFn: () => discoveryApi.getStatus(runId!),
    enabled: !!runId,
    refetchOnWindowFocus: false,
    refetchInterval: (query) => {
      const state = query.state.data?.state;
      // Para quando terminal ou aguardando ação humana (gate)
      if (!state || TERMINAL_STATES.includes(state) || GATE_STATES.includes(state)) {
        return false;
      }
      return 3_000; // 3s entre polls enquanto processando
    },
  });
}
```

### Retomar polling após gate humano

Após o usuário agir em um gate (ex.: aprovar pesquisa), invalidar a query para forçar re-fetch imediato — o `refetchInterval` assume o controle novamente a partir daí:

```ts
// dentro do hook de mutation de aprovação
onSuccess: () => queryClient.invalidateQueries({ queryKey: discoveryKeys.status(runId) }),
```

---

## ✅ Feature Checklist

- [ ] `types.ts` at the feature root (not inside `metadata/`)
- [ ] `api.ts` at the feature root (not inside `services/`)
- [ ] `keys.ts` at the feature root
- [ ] Every hook in its own file under `hooks/`
- [ ] All filenames in `kebab-case` (e.g. `use-get-entities.ts`)
- [ ] Tests in `hooks/__tests__/` mirroring the hook filename
- [ ] HTTP client imported from `~services/http`
- [ ] Shared types imported from `~metadata/types`
- [ ] No direct import of `ky`, `fetch`, or any HTTP lib
- [ ] Hooks consume only the `api.ts` of their own feature
- [ ] All query keys come from `keys.ts` — no inline keys in hooks
- [ ] `invalidateQueries` always uses keys from `keys.ts`
- [ ] No data transformation inside hooks or components — only in `api.ts` or mappers
- [ ] `placeholderData` used intentionally (paginated/filtered lists), not by default
- [ ] Polling usa `refetchInterval` como função (para em estado terminal/gate), nunca `setInterval` manual
- [ ] Hooks de polling têm `refetchOnWindowFocus: false`
- [ ] No feature imports from another feature (only `features/shared` is allowed)
- [ ] `index.ts` exposes only the entry component and deliberately public types
- [ ] No `store/` folder unless under the Feature-Scoped UI Store exception
- [ ] No folder named `core/` or `external/` inside the feature
- [ ] Pages contain no business logic
