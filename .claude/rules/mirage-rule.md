---
paths:
  - "src/mocks/**"
description: Usar quando criar ou editar mocks de API (models, factories, fixtures, serializers, routes) com MirageJS.
---

# MirageJS Mocks

Camada de mock de API local. Ativa **apenas em desenvolvimento** e intercepta **todas** as chamadas HTTP da aplicação — features não precisam saber que estão falando com um mock.

## Princípios

- ✅ Mirage roda **sempre em dev**, **nunca em prod** (controle via `import.meta.env.DEV`)
- ✅ **Todas** as rotas passam pelo Mirage — não há passthrough seletivo
- ✅ Features e `services/http` não conhecem o Mirage — a interceptação é transparente
- ✅ Organização **flat por tipo** (factories, routes, fixtures) — não por feature
- ❌ NUNCA importe nada de `mocks/` em código de feature
- ❌ NUNCA faça o Mirage rodar em produção (risco de vazar dados falsos)

---

## Estrutura

```
src/mocks/
├── server.ts              # Entry point — makeServer()
├── models/
│   ├── user.ts
│   ├── order.ts
│   └── index.ts
├── factories/
│   ├── user.ts
│   ├── order.ts
│   └── index.ts
├── fixtures/
│   ├── users.ts           # Dados estáticos (quando não há factory)
│   ├── order-statuses.ts
│   └── index.ts
├── serializers/
│   ├── application.ts     # Base serializer
│   └── index.ts
├── routes/
│   ├── users.ts
│   ├── orders.ts
│   ├── auth.ts
│   └── index.ts
├── scenarios/
│   ├── default.ts         # Seed padrão ao iniciar
│   └── index.ts
└── index.ts               # Re-export de makeServer
```

### Responsabilidades

| Pasta          | O que mora aqui                                             |
| -------------- | ----------------------------------------------------------- |
| `models/`      | Definições Mirage de entidades (relations, default attrs)   |
| `factories/`   | Geradores de dados dinâmicos (com faker) para seed e testes |
| `fixtures/`    | Dados estáticos/determinísticos (enums, listas fixas)       |
| `serializers/` | Formatação de resposta (paginação, envelope, casing)        |
| `routes/`      | Handlers HTTP agrupados por recurso                         |
| `scenarios/`   | Funções que populam o servidor com dados iniciais           |

---

## `server.ts` — Entry Point

```ts
import { createServer } from "miragejs";
import { models } from "./models";
import { factories } from "./factories";
import { serializers } from "./serializers";
import { registerRoutes } from "./routes";
import { defaultScenario } from "./scenarios";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    models,
    factories,
    serializers,

    seeds(server) {
      defaultScenario(server);
    },

    routes() {
      this.urlPrefix = import.meta.env.VITE_API_URL ?? "";
      this.namespace = "";
      this.timing = 400;

      registerRoutes(this);

      // Mirage intercepta TUDO. Qualquer request não-mapeada cai aqui.
      this.passthrough((request) => {
        // Apenas assets do Vite / HMR são liberados
        return (
          request.url.includes("/@vite") ||
          request.url.includes("/node_modules")
        );
      });
    },
  });
}
```

---

## Ativação — `src/main.tsx`

Mirage é iniciado **antes** do `ReactDOM.render`, e **somente em dev**.

```ts
import ReactDOM from "react-dom/client";
import { App } from "./app";

async function bootstrap() {
  if (import.meta.env.DEV) {
    const { makeServer } = await import("~mocks/miragejs");
    makeServer();
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
}

bootstrap();
```

### Por que `await import()` dinâmico?

- Garante que o código do Mirage + faker **não entra no bundle de produção**
- Vite faz tree-shake de tudo que está atrás do `if (import.meta.env.DEV)`

---

## Models — `src/mocks/models/`

Definem entidades e relações. Um arquivo por modelo.

```ts
// src/mocks/models/user.ts
import { Model } from "miragejs";

export const user = Model.extend({});
```

```ts
// src/mocks/models/order.ts
import { Model, belongsTo } from "miragejs";

export const order = Model.extend({
  user: belongsTo("user"),
});
```

```ts
// src/mocks/models/index.ts
import { user } from "./user";
import { order } from "./order";

export const models = { user, order };
```

---

## Factories — `src/mocks/factories/`

Geradores de dados dinâmicos. Usam `faker` para variedade.

```ts
// src/mocks/factories/user.ts
import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export const userFactory = Factory.extend({
  name() {
    return faker.person.fullName();
  },
  email() {
    return faker.internet.email();
  },
  role() {
    return faker.helpers.arrayElement(["admin", "manager", "customer"]);
  },
});
```

```ts
// src/mocks/factories/index.ts
import { userFactory } from "./user";
import { orderFactory } from "./order";

export const factories = {
  user: userFactory,
  order: orderFactory,
};
```

---

## Fixtures — `src/mocks/fixtures/`

Dados estáticos e determinísticos — ideal para enums, listas fixas ou cenários de teste que precisam ser previsíveis.

```ts
// src/mocks/fixtures/order-statuses.ts
export const orderStatuses = [
  { id: "1", code: "PENDING", label: "Pendente" },
  { id: "2", code: "PAID", label: "Pago" },
  { id: "3", code: "SHIPPED", label: "Enviado" },
  { id: "4", code: "DELIVERED", label: "Entregue" },
];
```

---

## Serializers — `src/mocks/serializers/`

Formatam a resposta para bater com o contrato esperado pelas features.

```ts
// src/mocks/serializers/application.ts
import { RestSerializer } from "miragejs";

export const ApplicationSerializer = RestSerializer.extend({
  // Remove o envelope do Mirage (ex: { users: [...] } -> [...])
  root: false,
  embed: true,
});
```

```ts
// src/mocks/serializers/index.ts
import { ApplicationSerializer } from "./application";

export const serializers = {
  application: ApplicationSerializer,
};
```

---

## Routes — `src/mocks/routes/`

Handlers HTTP agrupados por recurso. Cada arquivo exporta uma função que recebe o servidor Mirage.

```ts
// src/mocks/routes/users.ts
import type { Server } from "miragejs";

export function registerUserRoutes(server: Server) {
  server.get("/users", (schema, request) => {
    const { page = "1", pageSize = "10" } = request.queryParams;
    const all = schema.all("user").models;

    const start = (Number(page) - 1) * Number(pageSize);
    const end = start + Number(pageSize);

    return {
      data: all.slice(start, end),
      total: all.length,
      page: Number(page),
      pageSize: Number(pageSize),
    };
  });

  server.get("/users/:id", (schema, request) => {
    return schema.find("user", request.params.id);
  });

  server.post("/users", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    return schema.create("user", attrs);
  });

  server.patch("/users/:id", (schema, request) => {
    const user = schema.find("user", request.params.id);
    const attrs = JSON.parse(request.requestBody);
    return user?.update(attrs);
  });

  server.delete("/users/:id", (schema, request) => {
    schema.find("user", request.params.id)?.destroy();
    return new Response(null, { status: 204 });
  });
}
```

```ts
// src/mocks/routes/index.ts
import type { Server } from "miragejs";
import { registerUserRoutes } from "./users";
import { registerOrderRoutes } from "./orders";
import { registerAuthRoutes } from "./auth";

export function registerRoutes(server: Server) {
  registerUserRoutes(server);
  registerOrderRoutes(server);
  registerAuthRoutes(server);
}
```

---

## Scenarios — `src/mocks/scenarios/`

Funções que populam o Mirage com dados iniciais. Separar cenários permite trocar o estado inicial sem tocar em factories.

```ts
// src/mocks/scenarios/default.ts
import type { Server } from "miragejs";

export function defaultScenario(server: Server) {
  server.createList("user", 25);
  server.createList("order", 60);
}
```

```ts
// src/mocks/scenarios/index.ts
export { defaultScenario } from "./default";
```

---

## Integração com a arquitetura

- ✅ Features **não sabem** que o Mirage existe — seguem chamando `createHttpClient(baseUrl)` normalmente
- ✅ A URL de `baseUrl` precisa **bater** com `urlPrefix` do Mirage (configurar `VITE_API_URL` no `.env.development`)
- ✅ Contratos de response (paginação, shape) definidos no Mirage devem espelhar o backend real

---

## Exceção do projeto: `seeds.ts` em vez de `scenarios/`

Este projeto usa **`src/mocks/seeds.ts`** como arquivo único de seed em vez da pasta `scenarios/` descrita
acima. Razão: volume de dados reduzido e ausência de múltiplos cenários de teste que justifiquem a subdivisão.

- ✅ `src/mocks/seeds.ts` exporta uma função `seedDatabase(server)` chamada em `makeServer()`
- ❌ Não criar `scenarios/` — não há múltiplos cenários distintos no MVP
- Se o projeto crescer e precisar de cenários separados (e.g., erro, vazio, paginação), migrar para `scenarios/`

---

## Checklist

- [ ] Estrutura: `models/`, `factories/`, `fixtures/`, `serializers/`, `routes/`, `seeds.ts` (exceção — ver acima)
- [ ] `makeServer()` inicializado em `main.tsx` com `await import()` dinâmico
- [ ] Guard `if (import.meta.env.DEV)` garantindo que Mirage NÃO entra em prod
- [ ] Arquivos em kebab-case (`order-statuses.ts`, `users.ts`, `agent-run.ts`)
- [ ] Handlers agrupados por recurso (um arquivo por recurso em `routes/`)
- [ ] Shape das respostas bate com o contrato esperado pelas features
- [ ] Nenhum import de `~mocks/*` em código de feature
- [ ] `urlPrefix` do Mirage = `VITE_API_URL` usada pelas features
