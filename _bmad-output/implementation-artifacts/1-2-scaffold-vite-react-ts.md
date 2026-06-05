# Story 1.2: Scaffold Vite + React 19 + TS com providers e tokens

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero a base do projeto criada com providers e tokens do Celebration,
Para que toda feature parta de uma fundação consistente.

> **Pré-requisito:** Story 1.1 deve ter resultado em **go**. Esta story cria a base real de produção
> (não o spike). O spike (pasta `spike/`) deve ser removido ou ignorado após esta story.

## Acceptance Criteria

1. **Dado** o spike aprovado (1.1 = go),
   **Quando** rodo `npm run dev`,
   **Então** a SPA sobe em React 19 com HMR, sem erros no console, com `@celebration/assets/src/main.css`
   importado uma vez no `main.tsx`.

2. **Dado** o projeto scaffoldado,
   **Quando** `main.tsx` monta a árvore,
   **Então** `<ThemeProvider theme="bees">` e `<ToastProvider>` envolvem toda a aplicação.

3. **Dado** o projeto scaffoldado,
   **Quando** rodo `npm run build`,
   **Então** o build de produção conclui sem erros TypeScript (modo strict) e gera bundle válido.

4. **Dado** qualquer componente ou arquivo de estilo,
   **Quando** inspeciono valores CSS,
   **Então** cores, espaçamentos e tipografia usam tokens CSS do Celebration (`var(--clb-...)`) — sem valores
   hexadecimais ou numéricos hardcoded para propriedades que o DS já define.

5. **Dado** a configuração TypeScript,
   **Então** `tsconfig.json` tem `strict: true` e path alias `~/` mapeado para `src/`.

6. **Dado** o arquivo `.env.example` (não o `.env` real),
   **Então** documenta `VITE_API_URL` com valor padrão (ex.: `http://localhost:3001`) sem expor segredos.

## Tasks / Subtasks

- [ ] **Task 1 — Scaffold base Vite + React 19 + TS (AC: 1, 3)**
  - [ ] Criar app com `npm create vite@latest . -- --template react-ts` na raiz do projeto
        (ou ajustar o projeto existente para usar Vite, preservando `server.js` e `docs/`).
  - [ ] Fixar versões no `package.json`:
    - `react@19.2.3`, `react-dom@19.2.3` (exatos)
    - `@celebration/react@2.8.1` (exato, NÃO `^` nem `latest`)
    - `react-router-dom@^6` ou `^7`
    - `vite` (latest stable)
  - [ ] Rodar `npm install` (com `.npmrc` autenticado).

- [ ] **Task 2 — Providers e CSS do DS no entrypoint (AC: 1, 2)**
  - [ ] `src/main.tsx`: importar `@celebration/assets/src/main.css` (uma vez, antes de qualquer outro CSS).
  - [ ] Envolver `<App />` com `<ThemeProvider theme="bees"><ToastProvider>...</ToastProvider></ThemeProvider>`.
  - [ ] Confirmar no browser que nenhum warning de provider aparece no console.

- [ ] **Task 3 — TypeScript strict + path alias (AC: 3, 5)**
  - [ ] `tsconfig.json`: `"strict": true`, `"paths": { "~/*": ["./src/*"] }`.
  - [ ] `vite.config.ts`: resolver o alias `~/`.
  - [ ] Rodar `npx tsc --noEmit` — zero erros.

- [ ] **Task 4 — Tokens CSS e variáveis de ambiente (AC: 4, 6)**
  - [ ] Criar `src/styles/global.css` (ou equivalente) usando tokens `var(--clb-...)` para sobrescritas globais.
  - [ ] Criar `.env.example` com `VITE_API_URL=http://localhost:3001`.
  - [ ] Confirmar que `.env` está no `.gitignore`.

- [ ] **Task 5 — Remover spike (limpeza)**
  - [ ] Se pasta `spike/` existir, remover ou mover para fora do repo.
  - [ ] Confirmar que nenhum import do spike ficou no código de produção.

## Dev Notes

### Estrutura de pastas alvo (definida no PRD)

```
src/
  components/
    external/          ← barrel @celebration (Story 1.3)
  features/            ← código de feature por domínio
  services/
    http/              ← camada HTTP desacoplada do Mirage (Story 1.6)
  mocks/               ← Mirage server (Story 1.6)
  i18n/                ← catálogos + config i18next (Story 1.5)
  types/               ← tipos de contrato compartilhados (Story 1.9)
  styles/
  main.tsx
  App.tsx
```

### Versões a fixar (verificadas 2026-06-05)

| Pacote | Versão |
|--------|--------|
| react | 19.2.3 |
| react-dom | 19.2.3 |
| @celebration/react | 2.8.1 (exato) |
| react-router-dom | ^6 ou ^7 |
| vite | latest stable |
| typescript | ^5 |

### CSS do Celebration

- `@celebration/assets/src/main.css` deve ser importado **uma vez** no entrypoint.
- NÃO importar em múltiplos componentes.
- Tokens prefixo `--clb-*`.

### Vite config mínima

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '~': path.resolve(__dirname, './src') }
  }
})
```

### Mirage não entra aqui

Mirage é configurado na Story 1.6. Nesta story, `VITE_API_URL` aponta para um backend inexistente — as
features usarão placeholders até o Mirage estar ativo.

### References

- [Source: epics.md Epic 1 — Story 1.2]
- [Source: prd.md §4.1 FR-1, FR-7]
- [Source: .claude/skills/celebration-design-system/SKILL.md — providers, CSS]
- [Source: .claude/skills/celebration-design-system/references/installation.md]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- Versões efetivas instaladas: react@?, vite@?, @celebration/react@?
- `npx tsc --noEmit` saída: (zero erros / erros encontrados)
- Build de produção: (sucesso / falha)

### File List

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/main.tsx`
- `src/App.tsx`
- `.env.example`
- `src/styles/global.css` (se criado)
