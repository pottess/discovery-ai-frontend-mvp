---
paths:
  - "src/features/shared/**"
description: Usar ao criar, editar ou mover qualquer arquivo em `features/shared/` — componentes domain-flavored compartilhados, hooks de domínio, mappers e tipos usados por 2+ features. Para o panorama geral, ver `react-feature-architecture.md`. Para a estrutura interna de features regulares, ver `features-rule.md`.
---

# `features/shared/` — Cross-Feature Shared Units

> Esta regra detalha o funcionamento de `src/features/shared/`. Para a arquitetura geral e hierarquia de imports, consulte `react-feature-architecture.md`.

`shared` is a **special feature** that holds anything (components, hooks, mappers, utilities) reused by 2+ business features but **not generic enough** to be promoted to a global layer (`components/core`, `hooks/`, `utils/`, etc.).

It is the **only feature** that other features are allowed to import from.

---

## 📁 Structure

```
features/shared/
├── components/                  # Domain-flavored UI used by 2+ features
│   ├── order-status-badge/
│   │   ├── __tests__/
│   │   │   └── order-status-badge.test.tsx
│   │   ├── order-status-badge.tsx
│   │   ├── styles.ts
│   │   ├── types.ts
│   │   └── index.ts
│   ├── user-avatar/
│   ├── empty-state/
│   └── index.ts
├── hooks/                       # Hooks shared by 2+ features (still domain-flavored)
│   ├── __tests__/
│   ├── use-order-permissions.ts
│   └── index.ts
├── mappers/                     # Mappers shared by 2+ features
│   ├── __tests__/
│   ├── user-to-display-name.ts
│   └── index.ts
├── types.ts                     # Types shared by 2+ features (still domain, not global)
└── index.ts                     # Public barrel
```

### Examples of what belongs here

- `<OrderStatusBadge />` — used by `features/orders` and `features/dashboard`
- `<UserAvatar />` — used by `features/user-profile`, `features/comments`, `features/messages`
- `<EmptyState />` — domain-aware empty state used by multiple features
- `useOrderPermissions()` — domain hook reused by `orders` and `checkout`
- `userToDisplayName()` — mapper that turns a `User` DTO into a UI label, used by 2+ features

---

## 📐 `features/shared` Rules

1. ✅ Other features MAY import from `features/shared` (this is the **only** allowed feature-to-feature import)
2. ✅ `features/shared` **consumes** `components/core`, `components/external`, `libs/`, `utils/`, `metadata/`, `services/`, `hooks/` — same surface as a regular feature
3. ❌ `features/shared` NEVER imports from any other feature (no upward imports)
4. ✅ Something moves here **only after** being used by 2+ features — never upfront
5. ❌ If only one feature uses it → keep it inside that feature
6. ✅ Promote out of `features/shared` into a global layer (`components/core`, `hooks/`, `utils/`) once the piece becomes generic enough to lose all domain flavor
7. ✅ The `index.ts` barrel exposes only what is meant to be consumed externally

---

## 🛑 Preventing `features/shared` from becoming a monolith

`features/shared` is the most likely folder to rot into a "leftovers bin". The rules below exist to keep it healthy.

### Anti-anticipation rule (hard rule)

Nothing enters `features/shared` **without a second consumer actually writing the import in the same PR**. Creating something in `shared` because "it will probably be reused" is forbidden. The threshold is not "might be shared" — it is "is being shared right now, in this diff".

### Numeric triggers (operational)

These are not hard limits but **signals that a review is due**. When any of them fire, open a cleanup/refactor PR:

| Trigger                                                                                             | What it likely means                                        | Action                                                                       |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `features/shared/components/` has **> 15 components**                                               | It's becoming a second design system                        | Promote generic ones to `components/core` (domain-stripped test)             |
| A piece in `shared` has **not been imported by any feature for 3+ months**                          | The use case that justified it is gone                      | Demote back to a single feature or delete                                    |
| Clear **sub-domain clusters** appear (e.g., 5 billing-ish, 4 user-ish items)                        | A real feature is hiding inside `shared`                    | Extract into a new feature (`features/billing/`) and let it own those pieces |
| `features/shared` imports from **> 5 different `libs/`**                                            | It's behaving like a real feature with its own dependencies | Fragment it; some content probably deserves its own feature                  |
| Multiple PRs in a row adding to `features/shared/components/` without a second consumer in the diff | Anti-anticipation rule is being bypassed                    | Code review must block — require the second consumer                         |

### When to split

Split `features/shared` (into a new dedicated feature, or by promoting to a global layer) when:

- Size starts to impact navigation (the tree is too deep to scan)
- Distinct sub-domains are clearly mixed together
- Multiple unrelated changes frequently touch the same `shared` barrel

### When to promote to a global layer

Promote to `components/core`, `hooks/`, or `utils/` when the piece:

- Has lost all domain flavor (passes the "domain stripped" test)
- Is stable (API hasn't changed in several iterations)
- Would plausibly work in a different product

**Practical rule:** if `features/shared` is growing fast, the problem is almost never "we share too much" — it's that **real features are being born there instead of as their own folder**. Promote them out.

---

## ⚖️ Shared (feature) vs Core — How to Decide

| Question                                                               | Answer → Goes to                                              |
| ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| Is it a generic UI primitive (button, input, modal, table)?            | `components/core`                                             |
| Does it carry business/domain meaning (order status, user role badge)? | `features/shared/components`                                  |
| Is it a visual wrapper around MUI with no domain logic?                | `components/core`                                             |
| Is it used across 2+ features?                                         | If generic → `components/core`, if domain → `features/shared` |
| Is it used in only one feature?                                        | Stays inside that feature                                     |

### Tie-breaker rule (the "domain stripped" test)

When `core` vs `features/shared` feels like a coin flip, run this mental test:

> **If you remove every piece of business/domain knowledge** (status names, business rules, domain enums, copy that mentions a specific entity) — does the component still make sense as a standalone UI piece?
>
> - **Yes** → `components/core` (it's a primitive)
> - **No** → `features/shared/components` (it's domain-flavored)

When still in doubt, **start in `features/shared`** and promote to `components/core` later. Demoting from `core` is harder than promoting to it.
