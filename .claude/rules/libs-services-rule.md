---
paths:
  - "src/libs/**"
  - "src/services/**"
description: Usar ao criar ou editar qualquer wrapper em `libs/` ou `services/`. Define a regra de classificação: libs para wrappers sem I/O, services para wrappers com I/O (rede, storage, SDKs externos).
---

# `libs/` vs `services/` — Side-Effect Rule

## A regra central

| Camada | O que vai aqui | I/O? |
|--------|----------------|------|
| `libs/` | Wrappers de libs npm sem efeito externo (date-fns, lodash, zod, etc.) | ❌ Nunca |
| `services/` | Wrappers que tocam rede, storage do browser, SDKs que disparam requests | ✅ Sempre |

Regra de classificação: **"essa função pode rodar em um worker offline, sem rede, sem browser APIs?"**
- Sim → `libs/`
- Não → `services/`

---

## `libs/` — Wrappers de libs puras

```
src/libs/
├── date/
│   ├── index.ts          # re-exporta helpers sobre date-fns
│   └── format-date.ts
├── validation/
│   └── index.ts          # re-exporta schemas/helpers zod
└── i18n/
    └── index.ts          # re-exporta t(), useTranslation
```

Características:
- Sem `fetch`, sem `localStorage`, sem `sessionStorage`, sem `navigator`, sem `window`
- Funções puras: dado o mesmo input, mesmo output, sem side effects
- Testáveis sem jsdom

```ts
// src/libs/date/format-date.ts
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: Date | string, pattern = "dd/MM/yyyy") =>
  format(new Date(date), pattern, { locale: ptBR });
```

Rules:
- ✅ Só wrappers de npm libs — nunca lógica de negócio
- ✅ Sem I/O de qualquer tipo
- ❌ Não importar de `features/*`, `services/*`, `components/*`

---

## `services/` — Wrappers com I/O

```
src/services/
├── http/
│   ├── http.ts           # baseHttp + createHttpClient
│   ├── interceptors.ts   # beforeRequest / beforeError hooks
│   └── index.ts
├── storage/
│   ├── local-storage.ts  # wrapper tipado sobre localStorage
│   └── index.ts
└── analytics/
    └── index.ts          # wrapper sobre SDK de analytics
```

Características:
- Toda chamada de rede vive aqui (o cliente HTTP `ky` é instanciado aqui)
- Wrappers de browser APIs com side effects: `localStorage`, `sessionStorage`, `IndexedDB`
- SDKs de terceiros que disparam requests (analytics, feature flags, monitoring)
- Retornam `Promise` ou objetos reativos

```ts
// src/services/storage/local-storage.ts
export const localStorageService = {
  get: <T>(key: string): T | null => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },
  set: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};
```

Rules:
- ✅ Toda I/O passa por `services/` — nunca diretamente nos features
- ✅ Features importam de `~services/http`, `~services/storage`, etc.
- ❌ Não importar de `features/*` ou `pages/*`
- ❌ Não colocar lógica de negócio aqui — só wrappers de infraestrutura

---

## Hierarquia de imports

```
services/ → libs/, utils/, metadata/, config/
libs/     → (npm libs ONLY)
```

- `services/` pode usar `libs/`
- `libs/` nunca importa de `services/`
- Nenhuma importa de `features/`, `components/`, ou `pages/`

---

## Checklist

- [ ] Wrapper sem I/O → `libs/`; wrapper com I/O → `services/`
- [ ] Nenhuma lógica de negócio em `libs/` ou `services/` — só infraestrutura
- [ ] Features importam por alias (`~services/http`), nunca path relativo que sai da feature
- [ ] `libs/` não usa `fetch`, `localStorage`, `window` ou qualquer browser API
- [ ] `services/http` é a única origem do cliente HTTP — features não instanciam `ky` diretamente
