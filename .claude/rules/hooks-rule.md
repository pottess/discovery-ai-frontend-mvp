---
paths:
  - "src/hooks/**"
  - "src/features/**/hooks/**"
description: Usar ao criar ou mover hooks — decidir entre `hooks/` (globais, infra, genéricos) e `features/shared/hooks/` (domain-flavored, 2+ features) ou `features/<n>/hooks/` (exclusivo de uma feature). Para o panorama geral, ver `react-feature-architecture.md`.
---

# Hooks — Onde Cada Hook Mora

> Esta regra detalha `src/hooks/` e `src/features/**/hooks/`. Para o panorama geral e hierarquia de imports, consulte `react-feature-architecture.md`. Para hooks específicos de uma feature (api, keys, mutations), ver `features-rule.md`.

---

## 📁 `hooks/` — Global / App-Level Hooks

**Global** hooks used across the app. This is the single home for reusable hooks that are either generic UI/infra utilities OR transversal app-level infrastructure (auth, theme, feature flags).

```
hooks/
├── __tests__/
│   ├── use-debounce.test.ts
│   └── use-auth-user.test.ts
├── use-debounce.ts
├── use-click-outside.ts
├── use-media-query.ts
├── use-auth-user.ts
├── use-feature-flag.ts
└── index.ts
```

---

## ⚖️ Decision: `hooks/` vs `features/shared/hooks/`

Use the **"domain stripped" test** (same logic as components):

**Goes to `features/shared/hooks/`** when the hook:

- Depends on domain types (`User`, `Order`, `Invoice`, etc.)
- Encapsulates business rules
- Only makes sense within the product context
- Is consumed by 2+ features (still — never upfront)

**Goes to `hooks/`** when the hook:

- Is generic (UI primitive or infrastructure)
- Has no domain knowledge
- Could plausibly be extracted to a standalone npm package

**Practical rule:** if removing the domain breaks the hook's meaning → `features/shared/hooks/`. Otherwise → `hooks/`.

| Example               | Goes to                  | Why                                            |
| --------------------- | ------------------------ | ---------------------------------------------- |
| `useDebounce`         | `hooks/`                 | Pure UI primitive, zero domain                 |
| `useClickOutside`     | `hooks/`                 | Pure UI primitive                              |
| `useMediaQuery`       | `hooks/`                 | Browser API wrapper                            |
| `useFeatureFlag`      | `hooks/`                 | App infrastructure, transversal                |
| `useOrderPermissions` | `features/shared/hooks/` | Encapsulates Order business rules              |
| `useCurrentTenant`    | `features/shared/hooks/` | Domain concept (Tenant) reused across features |
| `useCheckoutStep`     | `features/shared/hooks/` | Checkout-specific logic shared by 2+ features  |

---

## 🚨 Exception: Transversal App Infrastructure

Hooks that **touch a domain type but serve the entire app as infrastructure** (auth, theme, i18n, feature flags) live in `hooks/`, NOT in `features/shared/hooks/`. They are app-wide plumbing, not feature-shared business logic.

Examples that stay in `hooks/` even though they touch domain types:

- `useAuthUser` (returns the current `User`, but auth is transversal — every layer consumes it)
- `useTheme`
- `useTranslation` / `useI18n`

**The test:** if it's needed to **bootstrap the app itself** (auth gate, theme provider, language switcher), it's transversal infrastructure → `hooks/`. If it's needed only to **execute domain workflows** (place an order, edit a profile), it's domain-shared → `features/shared/hooks/`.

---

## 📐 Rules

- Feature-specific hooks stay inside `features/<n>/hooks/`
- Global hooks can be consumed by **any** layer (features, `features/shared`, `components/core`, pages)
- Global hooks do NOT import from `features/*`, `pages/*`, or `components/*`
- Hooks reused by 2+ features but still domain-flavored live in `features/shared/hooks/`, not here — except for transversal infrastructure (see above)
- One hook per file — never group multiple hooks in a single file
