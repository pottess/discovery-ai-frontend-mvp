# Story 5.5: Checagem observacional de performance

Status: ready-for-dev

## Story

Como time,
Quero verificar performance básica,
Para que identifiquemos regressões óbvias antes do release.

> Esta story é **não-bloqueante**: checagem observacional, não gate automatizado.
> Se Lighthouse score < meta inesperado, cria item de backlog para investigar — não bloqueia release.

## Acceptance Criteria

1. **Dado** o app rodando com build de produção (`npm run build && npm run preview`),
   **Quando** rodo Lighthouse nas telas principais (Home, Produtos, Cockpit),
   **Então** os scores estão documentados em `_bmad-output/implementation-artifacts/5-5-performance-result.md`.

2. **Dado** os scores medidos,
   **Quando** há regressão óbvia (score < 70 em Performance ou < 80 em Accessibility),
   **Então** vira item de backlog com prioridade — não bloqueia release automaticamente.

3. **Dado** o build de produção,
   **Quando** analiso o bundle via `vite-bundle-visualizer` ou similar,
   **Então** não há dependência inesperadamente grande (> 500 KB não justificado no bundle).

## Tasks / Subtasks

- [ ] **Task 1 — Medir Lighthouse (AC: 1, 2)**
  - [ ] Rodar `npm run build && npm run preview`.
  - [ ] Abrir Chrome DevTools → Lighthouse → mode Navigation, device Desktop.
  - [ ] Medir: Home `/`, Produtos `/products`, Cockpit `/discovery/:runId`.
  - [ ] Registrar scores (Performance, Accessibility, Best Practices, SEO) no result doc.

- [ ] **Task 2 — Analisar bundle (AC: 3)**
  - [ ] Rodar `npx vite-bundle-visualizer` ou `npx rollup-plugin-visualizer` no build.
  - [ ] Identificar dependências > 500 KB gzipped.
  - [ ] Registrar no result doc.
  - [ ] Para cada item suspeito: confirmar se esperado (ex.: `@celebration/assets`) ou candidato a otimização.

- [ ] **Task 3 — Documentar e criar itens de backlog (AC: 2)**
  - [ ] Criar `_bmad-output/implementation-artifacts/5-5-performance-result.md`.
  - [ ] Para cada score < meta: criar item de backlog com observação.
  - [ ] Confirmar que nenhum item bloqueia o release MVP.

## Dev Notes

### Build de produção

```bash
npm run build
npm run preview
```

Medir Lighthouse em preview (build real), não em dev server (Vite HMR distorce métricas).

### Metas de referência (observacionais)

| Score | Meta desejada | Bloqueante? |
|-------|--------------|-------------|
| Performance | >= 70 | Não — cria item de backlog |
| Accessibility | >= 80 | Não — cria item de backlog |
| Best Practices | >= 80 | Não |
| SEO | >= 70 | Não |

### Bundle — tamanhos esperados

- `@celebration/react@2.8.1` + assets: ~400-600 KB gzipped (aceito).
- React 19 + router: ~50-100 KB gzipped (aceito).
- Qualquer chunk inesperado > 500 KB: investigar.

### Lazy loading de rotas (se bundle grande)

Se necessário, adicionar lazy loading nas rotas pesadas:
```ts
const DiscoveryPage = lazy(() => import('./features/discovery/DiscoveryFlowPage'))
```

### Mirage.js não entra no build de produção

Verificar que o build não incluiu `miragejs` — o import condicional em main.tsx com
`import.meta.env.DEV` garante tree-shaking. Se aparecer no bundle visualizer: bug.

### References

- [Source: epics.md Epic 5 — Story 5.5]
- [Source: prd.md §4.9 NFR]
- [Source: _bmad-output/implementation-artifacts/1-6-mock-mirage-base.md — import condicional]

## Dev Agent Record

### Completion Notes List

- Scores Lighthouse medidos: (sim/não)
- Bundle analisado: (sim/não)
- Mirage.js ausente do bundle de produção: (sim/não)
- Itens de backlog criados: (N itens)

### File List

- `_bmad-output/implementation-artifacts/5-5-performance-result.md` (novo)
