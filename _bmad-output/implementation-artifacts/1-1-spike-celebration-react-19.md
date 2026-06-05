# Story 1.1: Spike celebration + React 19 (gate go/no-go)

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a time de frontend,
I want validar em runtime que o design system `@celebration/react@2.8.1` renderiza e funciona em React 19.2.3,
so that confirmamos a stack-alvo (go) ou acionamos o fallback React 18 (no-go) **antes** de construir a fundação e as features em cima dela.

> **Por que esta story existe primeiro:** é um *gate de de-risking*. A doc antiga do Celebration declarava peer
> `react ^18.2.0`; a verificação no feed privado (2026-06-05) mostrou que a versão **stable 2.8.1** declara
> `react ^19.2.3` — logo React 19 é o caminho correto. Mas o peer range não garante ausência de bugs de runtime.
> Este spike é descartável (throwaway): seu produto é uma **decisão go/no-go documentada**, não código de produção.

## Acceptance Criteria

1. **Dado** um app mínimo React 19.2.3 + Vite com `ThemeProvider theme="bees"` e `ToastProvider`, **quando** renderizo um conjunto de componentes `Clb*` (no mínimo `ClbButton`, `ClbModal`, `ClbTable`, `ClbInputText`) e disparo `useToast`, **então** todos renderizam e funcionam sem erros de runtime nem warnings de incompatibilidade no console.
2. **Dado** o tempo de execução, **então** o spike é *timeboxed em no máximo 1 dia*.
3. **Dado** o resultado, **então** existe um **critério de no-go objetivo**: qualquer componente `Clb*` testado que não renderize/funcione, OU erro de peer/runtime irreparável em React 19.2.3.
4. **Dado** o término, **então** a decisão é registrada por escrito (go/no-go) com evidência (screenshot/console limpo ou o erro exato): **go** = segue React 19; **no-go** = fallback React 18 + revisar PRD/épicos.
5. **Dado** o gate, **então** nenhuma outra story do Epic 1 começa antes deste passar.

## Tasks / Subtasks

- [ ] **Task 1 — Pré-requisito: registry autenticado (AC: 1)**
  - [ ] Confirmar `.npmrc` na raiz com scopes `@cora`/`@celebration` (já criado) e `.npmrc` no `.gitignore` (já feito).
  - [ ] Rodar `npm run refreshVSToken` (script já existe no `package.json`). Em Windows: `npm i -g vsts-npm-auth` se necessário.
  - [ ] Validar `npm view @celebration/react@2.8.1 version` resolve via feed privado.
- [ ] **Task 2 — App mínimo Vite + React 19 + TS (AC: 1, 2)**
  - [ ] Criar app spike isolado (ex.: pasta temporária `spike/` ou branch descartável) com Vite (última versão) + template `react-ts`.
  - [ ] Fixar versões exatas: `react@19.2.3`, `react-dom@19.2.3`, `@celebration/react@2.8.1` (NÃO `latest` — a tag latest aponta para alpha), `react-router@^6` (ou `react-router-dom@^6`).
  - [ ] Importar `@celebration/assets/src/main.css` uma vez no entrypoint.
  - [ ] Envolver a árvore com `<ThemeProvider theme="bees"><ToastProvider>…</ToastProvider></ThemeProvider>`.
- [ ] **Task 3 — Renderizar e exercitar componentes `Clb*` (AC: 1, 3)**
  - [ ] Renderizar `ClbButton` (primary/outline/loading), `ClbModal` (abrir/fechar + `itemsFooter`), `ClbTable` (colunas + dados + paginação), `ClbInputText` (controlado, estado de erro).
  - [ ] Disparar `useToast().openToast({...})` (positive/negative/warning) e confirmar render do toast.
  - [ ] Abrir o console do navegador e verificar ausência de erros/warnings de incompatibilidade React 19.
- [ ] **Task 4 — Decisão go/no-go documentada (AC: 3, 4, 5)**
  - [ ] Registrar resultado em `_bmad-output/implementation-artifacts/1-1-spike-result.md` (ou na seção Completion Notes desta story): veredito, evidência (console limpo/screenshot OU erro exato), e ação.
  - [ ] Se **no-go**: abrir item para fallback React 18 e revisar PRD §Riscos (R-A reabre) + épicos (peers).
  - [ ] Comunicar o gate ao time antes de iniciar a Story 1.2.

## Dev Notes

### Fatos verificados (2026-06-05, feed privado Azure Artifacts)
- `@celebration/react` stable mais novo = **2.8.1**. A tag `latest` do feed aponta para uma **alpha** (`2.8.0-alpha.*`) — **fixar 2.8.1 exato**, nunca `latest`/`^`.
- Peer deps de 2.8.1: `react: ^19.2.3`, `react-dom: ^19.2.3`, `react-router: >=6.0.0`. [Source: verificação `npm view @celebration/react@2.8.1 peerDependencies`]
- Providers obrigatórios: `ThemeProvider` (tema `bees`) + `ToastProvider`. CSS: `@celebration/assets/src/main.css` (uma vez). [Source: .claude/skills/celebration-design-system/references/installation.md]
- Componentes importados de `@celebration/react`. **No spike** pode importar direto; em código de feature (Story 1.3+) será via barrel `~/components/external`. [Source: .claude/skills/celebration-design-system/SKILL.md]
- Dúvida/erro de componente → Storybook oficial: https://celebration.ambevdevs.com.br/storybook-react

### Registry privado (pré-requisito desta story — Story 1.0)
- `.npmrc` (raiz, gitignored) já contém:
  - `@cora:registry=…/cora-frontend/npm/registry/`
  - `@celebration:registry=https://pkgs.dev.azure.com/AMBEV-SA/_packaging/design-system/npm/registry/`
- Auth: `npm run refreshVSToken` → `vsts-npm-auth -config "./.npmrc"`. Em CI, usar PAT via env/service connection (não o interativo). [Source: epics.md Additional Requirements; package.json]

### Escopo e natureza
- **Spike descartável.** Não é a fundação real (essa é a Story 1.2). Não criar barrel, i18n, mock, roteamento completo aqui — só o suficiente para exercitar o DS em React 19.
- Manter isolado para não poluir o repo; pode viver em branch/pasta temporária e ser removido após a decisão.

### Critério de no-go (objetivo)
- Qualquer um dos componentes testados não renderiza ou lança erro de runtime; OU erro de peer/instalação irreparável; OU warnings de incompatibilidade React 19 que indiquem quebra (ex.: APIs removidas no React 19 usadas pelo DS).

### Project Structure Notes
- Alvo final do projeto (Story 1.2+): `~/`, `src/features`, `src/components/external`, `services/http`, `src/mocks` (mirage). [Source: prd.md §4.1; .claude/rules/mirage-rule.md]
- Este spike **não** precisa seguir essa estrutura — é validação de viabilidade.

### Testing standards
- O spike valida runtime manualmente (render + console). A infra de testes (Vitest + RTL) é a Story 1.8 — não bloqueia este gate. [Source: epics.md Epic 1]

### References
- [Source: _bmad-output/planning-artifacts/epics.md#Epic-1 — Story 1.1]
- [Source: _bmad-output/planning-artifacts/prds/prd-discovery-ai-react-migration-2026-06-05/prd.md#8-Open-Questions (Q1 resolvida) e #D-Riscos (R-A)]
- [Source: .claude/skills/celebration-design-system/references/installation.md — peers, providers, registry]
- [Source: .claude/skills/celebration-design-system/SKILL.md — componentes, padrões, Storybook]
- [Source: CLAUDE.md — contexto do projeto]

## Dev Agent Record

### Agent Model Used

(a preencher pelo dev agent)

### Debug Log References

### Completion Notes List

- Veredito go/no-go: (a preencher)
- Evidência: (console limpo / screenshot / erro exato)
- Versões efetivas instaladas: react@?, react-dom@?, @celebration/react@?, vite@?

### File List
