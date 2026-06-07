# Story 1.6: Base do mock Mirage e camada services/http

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero o Mirage interceptando HTTP só em dev,
Para que a app rode sem backend real e sem vazar mock em produção.

## Acceptance Criteria

1. **Dado** `makeServer()` em `src/mocks/server.ts`,
   **Quando** `import.meta.env.DEV` é `true` (dev),
   **Então** o Mirage é inicializado com `environment: 'development'` e intercepta chamadas a `VITE_API_URL`.

2. **Dado** o build de produção (`npm run build`),
   **Então** nenhum código do Mirage, faker ou seeds entra no bundle (tree-shaking via import dinâmico).

3. **Dado** `services/http/index.ts` (cliente HTTP),
   **Quando** faz uma chamada,
   **Então** usa `VITE_API_URL` como baseURL e **não importa nada do Mirage** — camada HTTP desacoplada.

4. **Dado** a rota mock `/api/config`,
   **Quando** requisitada,
   **Então** retorna estrutura compatível com o `server.js` atual:
   ```json
   {
     "polling_interval": 3000,
     "polling_timeout": 120000,
     "upload_max_size_mb": 10,
     "supported_file_types": ["pdf","docx","xlsx","png","jpg"]
   }
   ```

5. **Dado** `main.tsx`,
   **Quando** DEV,
   **Então** o Mirage é inicializado antes do primeiro render (import dinâmico aguardado via `await`).

## Tasks / Subtasks

- [ ] **Task 1 — Instalar Mirage.js (AC: 1)**
  - [ ] Instalar: `npm install --save-dev miragejs`.
  - [ ] Opcional: `@faker-js/faker` para geração de dados (dev-only).
  - [ ] Confirmar que ambos ficam em `devDependencies`.

- [ ] **Task 2 — Criar estrutura `src/mocks/` e `server.ts` (AC: 1, 4)**
  - [ ] Criar pastas: `src/mocks/models/`, `src/mocks/factories/`, `src/mocks/routes/`, `src/mocks/serializers/`.
  - [ ] Criar `src/mocks/serializers/application.ts` com `RestSerializer` (root: false, embed: true).
  - [ ] Criar `src/mocks/routes/config.ts` com handler `GET /api/config`:
    ```ts
    import type { Server } from 'miragejs'

    export function registerConfigRoutes(server: Server) {
      server.get('/api/config', () => ({
        polling_interval: 3000,
        polling_timeout: 120000,
        upload_max_size_mb: 10,
        supported_file_types: ['pdf', 'docx', 'xlsx', 'png', 'jpg'],
      }))
    }
    ```
  - [ ] Criar `src/mocks/routes/index.ts` re-exportando `registerRoutes(server)` que chama todos os handlers.
  - [ ] Criar `server.ts` com `makeServer({ environment })`:
    ```ts
    import { createServer } from 'miragejs'
    import { models } from './models'
    import { serializers } from './serializers'
    import { registerRoutes } from './routes'
    import { seedDatabase } from './seeds'

    export function makeServer({ environment = 'development' } = {}) {
      return createServer({
        environment,
        models,
        serializers,
        seeds(server) { seedDatabase(server) },
        routes() {
          this.urlPrefix = import.meta.env.VITE_API_URL ?? ''
          this.namespace = ''
          this.timing = 400
          registerRoutes(this)
          this.passthrough((req) =>
            req.url.includes('/@vite') || req.url.includes('/node_modules')
          )
        },
      })
    }
    ```
  - [ ] Seguir `.claude/rules/mirage-rule.md`: handlers em `routes/` por recurso, kebab-case nos arquivos.

- [ ] **Task 3 — Init condicional em `main.tsx` (AC: 2, 5)**
  - [ ] Substituir import estático por import dinâmico:
    ```ts
    if (import.meta.env.DEV) {
      const { makeServer } = await import('./mocks/server')
      makeServer()
    }
    ```
  - [ ] Confirmar com `npm run build` + `grep -r 'miragejs' dist/` → nenhum hit.

- [ ] **Task 4 — Camada `services/http` (AC: 3)**
  - [ ] Instalar: `npm install ky`.
  - [ ] Implementar `src/services/http/` seguindo **`.claude/rules/http-client.md`** exatamente:
    - `http.ts` — `baseHttp` (ky.create com timeout, retry, beforeError hook) + `createHttpClient(baseUrl)` via `ky.extend`.
    - `interceptors.ts` — `setErrorInterceptor` / `getErrorInterceptor`.
    - `index.ts` — barrel exportando `createHttpClient` e `setErrorInterceptor`.
  - [ ] O `beforeError` hook usa `getHttpErrorToast` de `~/utils/http` para mensagem de erro.
  - [ ] **Zero import de miragejs aqui.** Mirage intercepta no nível do fetch — transparente para o cliente ky.
  - [ ] Tipos de retorno de `services/http` virão dos tipos de contrato (Story 1.9).

  ```ts
  // src/services/http/http.ts (referência — seguir http-client.md para o código completo)
  import ky, { isHTTPError } from 'ky'
  import { getHttpErrorToast } from '~/utils/http'
  import { getErrorInterceptor } from './interceptors'

  export const baseHttp = ky.create({
    timeout: 20_000,
    retry: 0,
    hooks: {
      beforeError: [
        ({ error, options }) => {
          if (isHTTPError(error)) {
            const data = error.data as { message?: string } | undefined
            error.message =
              data?.message ??
              (options.context.errorMessage as string | undefined) ??
              getHttpErrorToast(error.response.status).description
            if (!options.context.suppressGlobalError) {
              getErrorInterceptor()?.(error)
            }
          }
          return error
        },
      ],
    },
  })

  export function createHttpClient(baseUrl: string) {
    const url = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
    return baseHttp.extend({ prefixUrl: url })
  }
  ```

- [ ] **Task 5 — Seeds básicas (AC: 4)**
  - [ ] Criar `src/mocks/seeds.ts` com função `seedDatabase(server)` — dados mínimos de config.
  - [ ] Nota: este projeto usa `seeds.ts` em vez de `scenarios/` (ver `.claude/rules/mirage-rule.md#exceção`).
  - [ ] Seeds de domínio (produtos, discoveries) são adicionados nas stories 2.1+.

## Dev Notes

### Regras do Mirage (`.claude/rules/mirage-rule.md`)

Estrutura obrigatória:
```
src/mocks/
├── server.ts              ← makeServer() — entry point
├── seeds.ts               ← seedDatabase(server) — convenção do projeto (não scenarios/)
├── models/                ← definições de entidade Mirage
│   └── index.ts
├── factories/             ← geradores com faker — kebab-case (product.ts, agent-run.ts)
│   └── index.ts
├── serializers/           ← ApplicationSerializer (root: false, embed: true)
│   └── application.ts
└── routes/                ← handlers por recurso — um arquivo por domínio
    ├── config.ts          ← GET /api/config
    ├── index.ts           ← registerRoutes() agrega todos
    └── (domínio.ts adicionados pelas stories seguintes)
```

- `urlPrefix = VITE_API_URL` — camada HTTP não sabe que existe mock.
- Import dinâmico em `main.tsx` = tree-shaking garantido.
- Rotas espelham contrato de `server.js` (ver `docs/api-contracts-frontend.md`).

### Cliente HTTP — ky (não axios, não fetch nativo)

`ky` é fetch-based → Mirage intercepta automaticamente no nível do fetch, sem config extra.
Não usar axios (XHR-based, comportamento divergente com Mirage) nem fetch nativo (sem interceptors, 4xx não lançam erro).

Regra completa de implementação: `.claude/rules/http-client.md`.

### Separação de responsabilidades

```
main.tsx              → inicializa Mirage (dev-only, dinâmico)
src/mocks/server.ts   → makeServer() + wire de models/routes/serializers/seeds
src/mocks/routes/     → handlers HTTP por recurso (config, products, discovery…)
src/mocks/seeds.ts    → seedDatabase(server) — dados iniciais
src/services/http/    → ky configurado (baseHttp + createHttpClient) — sem conhecer mock
features/             → chamam createHttpClient de ~/services/http — sem conhecer mock
```

### Contrato `/api/config` (de `server.js`)

```json
{
  "polling_interval": 3000,
  "polling_timeout": 120000,
  "upload_max_size_mb": 10,
  "supported_file_types": ["pdf", "docx", "xlsx", "png", "jpg"]
}
```

### Rotas a adicionar por epic (não aqui)

As 13 rotas de domínio restantes são adicionadas nas stories de mock específicas (2.1, 3.1, 4.1).
Esta story só adiciona `/api/config`.

### References

- [Source: .claude/rules/mirage-rule.md]
- [Source: epics.md Epic 1 — Story 1.6]
- [Source: prd.md §4.1 FR-8, FR-9; NFR-6]
- [Source: docs/api-contracts-frontend.md — contrato completo]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- Mirage ausente no bundle de produção confirmado: (sim/não)
- `services/http` sem import de miragejs: (sim/não)
- `/api/config` retornando corretamente: (sim/não)

### File List

- `src/mocks/server.ts`
- `src/mocks/seeds.ts`
- `src/mocks/models/index.ts`
- `src/mocks/serializers/application.ts`
- `src/mocks/routes/config.ts`
- `src/mocks/routes/index.ts`
- `src/services/http/http.ts`
- `src/services/http/interceptors.ts`
- `src/services/http/index.ts`
- `src/utils/http/get-http-error-toast.ts`
- `src/utils/http/index.ts`
- `src/main.tsx` (update — import dinâmico Mirage)
- `package.json` (devDependencies: miragejs, @faker-js/faker)
