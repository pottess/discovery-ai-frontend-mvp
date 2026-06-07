---
paths:
  - "src/constants/api/**"
description: Usar quando criar ou editar constantes de endpoints de API.
---

# Constantes de endpoints

## Estrutura obrigatória

```
src/constants/
  api/
    [feature-ou-servico].ts
```

Um arquivo por feature ou serviço. O nome do arquivo deve refletir
o domínio dos endpoints — não o método HTTP nem a entidade isolada.

NUNCA escreva strings de endpoint diretamente no `api.ts` das features.
NUNCA centralize todos os endpoints em um único arquivo.
NUNCA inclua o `prefixUrl` ou base path — ele vem da config da aplicação.
NUNCA use barra `/` no início das rotas — o `ky` com `prefixUrl` ignora o prefixo quando há leading slash.

---

## Padrão do arquivo

```ts
// src/constants/api/products.ts
export const PRODUCTS_ENDPOINTS = {
  getAll: "products",
  getById: (id: string) => `products/${id}`,
  create: "products",
  update: (id: string) => `products/${id}`,
  delete: (id: string) => `products/${id}`,
} as const;
```

Regras:

- Nome do objeto em `SCREAMING_SNAKE_CASE` com sufixo `_ENDPOINTS`
- Rotas estáticas como `string`
- Rotas dinâmicas como funções que recebem os parâmetros e retornam `string`
- Sempre usar `as const` para garantir inferência de tipo literal

---

## Uso no api.ts da feature

```ts
import { PRODUCTS_ENDPOINTS } from '~constants/api/products'

export const productApi = {
  getAll: (filters: ProductFilters) =>
    http.get(PRODUCTS_ENDPOINTS.getAll, { searchParams: { ...filters } }).json<...>(),

  getById: (id: string) =>
    http.get(PRODUCTS_ENDPOINTS.getById(id)).json<Product>(),

  create: (data: CreateProductDTO) =>
    http.post(PRODUCTS_ENDPOINTS.create, { json: data }).json<Product>(),

  update: (id: string, data: UpdateProductDTO) =>
    http.patch(PRODUCTS_ENDPOINTS.update(id), { json: data }).json<Product>(),

  delete: (id: string) =>
    http.delete(PRODUCTS_ENDPOINTS.delete(id)).json<void>(),
}
```

---

## Uso nos mocks

Os mocks importam as mesmas constantes — garantindo que mock e chamada real
nunca desincronizam.

```ts
// src/mocks/routes/products.ts
import type { Server } from "miragejs";
import { PRODUCTS_ENDPOINTS } from "~constants/api/products";

export function registerProductRoutes(server: Server) {
  server.get(PRODUCTS_ENDPOINTS.getAll, (schema) => {
    return schema.all("product").models;
  });

  server.get(PRODUCTS_ENDPOINTS.getById(":id"), (schema, request) => {
    return schema.find("product", request.params.id);
  });
}
```
