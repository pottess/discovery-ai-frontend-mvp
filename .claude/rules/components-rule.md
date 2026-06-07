---
paths:
  - "src/components/**"
description: Use when creating or editing global components in `components/core/` (own design system) or re-exports in `components/external/` (abstractions of external libs like Celebration and Cora). For the overall picture, see `react-feature-architecture.md`.
---

# `components/` — Global Component Library

The `components/` folder holds the global UI building blocks of the application. It is split into two sub-layers:

- **`core/`** — app-specific design system, used by the entire app
- **`external/`** — re-exports from external UI libs (the only layer allowed to import from them)

> **Note**: Domain-flavored components reused across 2+ features do NOT live under `components/`. They live in `features/shared/components/`.

---

## `components/core/` — Own Design System

Base components, opinionated by the product. This is what features **must** use.

```
components/core/
├── button/
│   ├── __tests__/
│   │   └── button.test.tsx
│   ├── button.tsx
│   └── styles.ts
├── input/
├── modal/
├── table/
└── (...)
```

**Characteristics**:

- May use `~components/external` internally (e.g. a Button wrapping a Celebration component)
- Expose a proprietary API, decoupled from the underlying UI library
- If Celebration is ever replaced, only `core/` and `external/` change
- Never imports from `features/*` (including `features/shared`)

**Consumption**:

```ts
import ActionButton from "~components/core/action-button";
```

---

## `components/external/` — External UI Library Barrel

`components/external/index.tsx` is the **only file** in the app authorized to import directly from `@celebration/react`. Every other file imports from `~components/external`.

## Structure

```
src/components/external/
└── index.tsx    # single barrel — all external UI lib re-exports
```

---

## Celebration — `@celebration/react@2.8.1`

Importar do barrel do pacote. Exportar com os nomes originais sem aliasing.

```ts
export {
  ClbButton,
  ClbCard,
  ClbCheckbox,
  ClbDrawer,
  ClbModal,
  ClbTable,
  ClbTag,
  ClbTooltip,
  ThemeProvider,
  ToastProvider,
  useToast,
  // ... adicionar conforme o app usar
} from "@celebration/react";
```

Para tipos, re-exportar aqui se consumidos fora de `external/`:

```ts
export type { ClbButtonProps } from "@celebration/react";
```

Dúvida sobre props/comportamento de um componente → [Storybook oficial](https://celebration.ambevdevs.com.br/storybook-react).

---

## Consumption

Qualquer camada (features, components, pages, App.tsx) importa de `~components/external`:

```ts
import { ClbButton, ThemeProvider, useToast } from "~components/external";
```

---

## Rules

1. Only `external/index.tsx` may import directly from `@celebration/react`
2. Export original names — no aliasing, no suffix
3. Add only what the app actually uses — keep the surface controlled
4. Types must also be re-exported here if consumed outside `external/`

---

## Checklist

- [ ] No file outside `external/index.tsx` imports directly from `@celebration/react`
- [ ] Consumer imports use `~components/external` alias
- [ ] No aliasing or suffix on exported names
- [ ] Types re-exported if used outside `external/`
