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

- [ ] **Task 2 — Criar `src/mocks/server.ts` (AC: 1, 4)**
  - [ ] Criar `makeServer({ environment })`:
    ```ts
    import { createServer, Model } from 'miragejs'

    export function makeServer({ environment = 'development' } = {}) {
      return createServer({
        environment,
        models: { /* a popular nas stories seguintes */ },
        routes() {
          this.urlPrefix = import.meta.env.VITE_API_URL
          this.namespace = '/api'
          this.get('/config', () => ({ polling_interval: 3000, ... }))
          // demais rotas nas stories de domínio
        }
      })
    }
    ```
  - [ ] Seguir regras de `.claude/rules/mirage-rule.md` (estrutura flat, sem subpastas extras).

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
  - [ ] Criar `src/services/http/index.ts`:
    - Configurar axios (ou fetch nativo) com `baseURL: import.meta.env.VITE_API_URL`.
    - Exportar helpers: `get<T>`, `post<T>`, `put<T>`, `delete`.
    - **Zero import de miragejs aqui.**
  - [ ] Tipos de retorno de `services/http` virão dos tipos de contrato (Story 1.9).

- [ ] **Task 5 — Seeds básicas (AC: 4)**
  - [ ] Criar `src/mocks/seeds.ts` com dados mínimos de config (os seeds de domínio vêm por epic).
  - [ ] Chamar seeds em `makeServer({ environment })`.

## Dev Notes

### Regras do Mirage (`.claude/rules/mirage-rule.md`)

- Estrutura flat: `src/mocks/server.ts`, `src/mocks/seeds.ts`, sem subpastas complexas.
- `urlPrefix = VITE_API_URL` — a camada HTTP não sabe que existe mock.
- Import dinâmico em `main.tsx` = tree-shaking garantido.
- Rotas Mirage espelham o contrato de `server.js` (14 endpoints, ver `docs/api-contracts-frontend.md`).

### Separação de responsabilidades

```
main.tsx          → inicializa Mirage (dev-only, dinâmico)
src/mocks/        → server.ts, seeds.ts, factories/ (dev-only)
src/services/http → cliente HTTP puro (sem conhecer mock)
features/         → chamam services/http (sem conhecer mock)
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
- `src/services/http/index.ts`
- `src/main.tsx` (update — import dinâmico Mirage)
- `package.json` (devDependencies: miragejs, @faker-js/faker)
