---
paths:
  - "src/utils/**"
  - "src/metadata/**"
description: Usar ao criar utilitários puros globais (`utils/`) ou tipos e enums globais (`metadata/`). Para o panorama geral, ver `react-feature-architecture.md`.
---

# `utils/` e `metadata/` — Utilitários e Tipos Globais

> Esta regra detalha `src/utils/` e `src/metadata/`. Para o panorama geral e hierarquia de imports, consulte `react-feature-architecture.md`.

---

## 🛠️ `utils/` — Global Reusable Utilities

Pure utility functions reusable across the entire application. **Global only** — utilities exclusive to a feature stay inline in that feature.

```
utils/
├── formatters/
│   ├── __tests__/
│   │   ├── format-currency.test.ts
│   │   └── format-date.test.ts
│   ├── format-currency.ts
│   ├── format-date.ts
│   └── index.ts
├── validators/
│   ├── __tests__/
│   │   ├── is-email.test.ts
│   │   └── is-cpf.test.ts
│   ├── is-email.ts
│   ├── is-cpf.ts
│   └── index.ts
├── parsers/
│   └── parse-query-string.ts
└── index.ts
```

### Utils Rules

1. ✅ Every function is **pure** — no side effects, same input = same output
2. ✅ Each utility lives in its **own file** and is exported via `index.ts` barrel
3. ❌ Utils NEVER import from `features/`, `pages/`, or `components/`
4. ✅ May import from `libs/`, `metadata/`, and other `utils/`
5. ✅ If a util is used only inside one feature → keep it inside the feature, don't promote prematurely

---

## 🧾 `metadata/` — Global Types and Enums

Centralizes **types and enums** used across the entire application.

```
metadata/
├── types/
│   ├── user.ts
│   ├── api.ts
│   └── index.ts
├── enums/
│   ├── user-role.ts
│   ├── order-status.ts
│   └── index.ts
└── index.ts
```

### Metadata Rules

1. ✅ **Global only**. Inside features, use `types.ts` at the feature root instead
2. ✅ Only types/enums used by **2+ features** or by global layers (services, hooks) go here
3. ❌ Metadata NEVER imports from `features/`, `pages/`, or `components/`
4. ✅ Prefer `enum` for finite known sets of values; prefer `type`/`interface` for data shapes

Example:

```ts
// metadata/enums/user-role.ts
export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  CUSTOMER = "customer",
}

// metadata/types/user.ts
import { UserRole } from "~metadata/enums";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
```
