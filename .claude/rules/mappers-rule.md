---
paths:
  - "src/features/**/mappers/**"
  - "src/features/shared/mappers/**"
  - "src/utils/mappers/**"
description: Usar ao criar ou editar mappers (funções de transformação de dados). Define localização, pureza, testes e quando promover.
---

# Mappers — Regras de Localização e Pureza

## O que é um mapper

Função pura que transforma um shape de dados em outro: API response → domain type, domain type → DTO, API response → view model. Sem side effects, sem I/O.

---

## Onde fica cada mapper

| Situação | Localização |
|----------|-------------|
| Usado por **uma** feature | `features/<n>/mappers/` (ou inline em `api.ts` se trivial) |
| Usado por **2+ features** com sabor de domínio | `features/shared/mappers/` |
| Genérico, sem domínio (estrutural) | `utils/mappers/` |

### Critério "2+ features": a regra anti-antecipação

Não mova para `shared/` ou `utils/` antes de existir o segundo consumidor **no mesmo PR**. Mover antes = speculative abstraction.

### Critério "sem domínio"

`utils/mappers/` só recebe mappers que passam no "domain stripped" test: você consegue usar o mapper em qualquer outro projeto sem carregar conceitos de negócio deste app. Ex.: `toCamelCaseKeys`, `flattenTree`, `groupById`. Se o mapper menciona `Product`, `Discovery`, `User` deste app — não é `utils/`.

---

## Estrutura interna

```
features/authentication/
└── mappers/
    ├── __tests__/
    │   └── auth-response-mapper.test.ts
    ├── auth-response-mapper.ts
    └── index.ts                 # re-exporta só o que a feature usa internamente
```

Para features simples, mapper inline em `api.ts` é preferível a criar `mappers/` prematuramente:

```ts
// features/authentication/api.ts
const mapAuthResponse = (raw: AuthApiResponse): AuthUser => ({
  id: raw.user_id,
  name: raw.display_name,
  email: raw.email_address,
});

export const authApi = {
  login: async (creds: LoginDTO) => {
    const raw = await http.post("auth/login", { json: creds }).json<AuthApiResponse>();
    return mapAuthResponse(raw);
  },
};
```

Promova para `mappers/` quando: o mapper é reutilizado dentro da feature por 2+ arquivos, ou é complexo o suficiente para precisar de testes dedicados.

---

## Regras de pureza

- ✅ Input → output determinístico, sem estado externo
- ✅ Sem chamadas de API, sem `localStorage`, sem `console.log`
- ✅ Sem imports de `services/`, `hooks/`, `components/`
- ✅ Testável com `expect(mapper(input)).toEqual(output)` — sem mocks

---

## Testes

Todo mapper que saiu do inline (= tem seu próprio arquivo) tem teste dedicado. Testes são co-localizados em `__tests__/` dentro da pasta do mapper.

```ts
// features/authentication/mappers/__tests__/auth-response-mapper.test.ts
import { mapAuthResponse } from "../auth-response-mapper";

it("maps snake_case API response to camelCase domain type", () => {
  expect(mapAuthResponse({ user_id: "1", display_name: "Ana", email_address: "ana@a.com" })).toEqual({
    id: "1",
    name: "Ana",
    email: "ana@a.com",
  });
});
```

---

## Onde NÃO transformar dados

- ❌ Dentro de hooks (`useQuery`, `useMutation`, `useEffect`)
- ❌ Dentro de componentes (render functions, JSX)
- ✅ Em `api.ts` (inline ou via mapper importado) — logo após o parse da response

A única exceção: `select` do TanStack Query para derivações baratas (pick de campo, formatação de label). Deve ser puro e simples.

---

## Checklist

- [ ] Mapper é função pura — sem I/O, sem estado externo
- [ ] Mapper de uma feature → `features/<n>/mappers/` (ou inline em `api.ts`)
- [ ] Mapper promovido para `shared/` ou `utils/` só após segundo consumidor existir no mesmo PR
- [ ] `utils/mappers/` só para mappers sem conceito de negócio deste app
- [ ] Todo mapper em arquivo próprio tem teste dedicado em `__tests__/`
- [ ] Sem transformação de dados em hooks ou componentes
