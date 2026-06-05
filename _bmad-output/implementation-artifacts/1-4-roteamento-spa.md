# Story 1.4: Roteamento SPA e rotas do protótipo

Status: ready-for-dev

## Story

Como usuário,
Quero navegar entre as telas via rotas,
Para que eu acesse cada área do app.

## Acceptance Criteria

1. **Dado** `react-router-dom` (>=6) configurado no `App.tsx`,
   **Quando** acesso cada rota listada abaixo,
   **Então** a rota resolve para a tela correspondente (placeholder `<PageName />` onde a feature ainda não existe):
   - `/` → Home
   - `/products` → Catálogo de Produtos
   - `/products/:id` → Detalhe do Produto
   - `/audience/:productId` → Público
   - `/audience/:productId/persona/:personaId` → Visualização de Persona
   - `/audience/:productId/persona/:personaId/edit` → Edição de Persona
   - `/audience/:productId/stakeholder/:stakeholderId` → Visualização de Stakeholder
   - `/audience/:productId/stakeholder/:stakeholderId/edit` → Edição de Stakeholder
   - `/discovery` → Novo Discovery (full-page)
   - `/discovery/:runId` → Cockpit do Discovery
   - `/discovery/:runId/synthesis` → Síntese
   - `/discovery/:runId/interview` → Entrevistas
   - `/discovery/:runId/interview/:sessionId` → Sessão de Entrevista

2. **Dado** o app shell (header + sidebar + `<Outlet />`),
   **Quando** navego entre rotas,
   **Então** o header e a sidebar permanecem renderizados (layout persistente) e apenas o conteúdo central muda.

3. **Dado** o protótipo usa hash routing (`/#/home`, `/#/products`),
   **Quando** alguém acessa uma URL hash legada,
   **Então** a decisão (redirect `/` ou 404) é implementada e documentada no `.decision-log.md` do PRD.

4. **Dado** uma rota inválida (não mapeada),
   **Quando** o usuário navega para ela,
   **Então** a rota exibe um componente `NotFound` (404 page) — sem crash.

5. **Dado** o layout shell,
   **Então** o shell usa componentes Celebration (`ClbHeader`, sidebar via menu ou equivalente) e respeita o idioma ativo (i18n preparado para as labels).

## Tasks / Subtasks

- [ ] **Task 1 — Configurar react-router no `App.tsx` (AC: 1, 2)**
  - [ ] Instalar `react-router-dom@^6` (se não instalado na Story 1.2).
  - [ ] Criar `src/App.tsx` com `<BrowserRouter>` + `<Routes>`.
  - [ ] Criar layout `src/layouts/AppLayout.tsx` com `ClbHeader` + sidebar + `<Outlet />`.
  - [ ] Mapear todas as rotas acima para pages placeholder em `src/pages/`.

- [ ] **Task 2 — Pages placeholder (AC: 1)**
  - [ ] Criar um componente placeholder genérico `src/pages/PlaceholderPage.tsx`
        que aceita o nome da rota e exibe-a (para desenvolvimento rápido).
  - [ ] Ou criar um arquivo por page — decidir e manter consistente.

- [ ] **Task 3 — Decisão e implementação das URLs hash legadas (AC: 3)**
  - [ ] Analisar as rotas hash do protótipo (`app.js`, `routes/`).
  - [ ] Decidir: redirect para `/` ou renderizar 404.
  - [ ] Implementar (ex.: `useEffect` no root lendo `window.location.hash` e redirecionando via `navigate()`).
  - [ ] Registrar a decisão no `.decision-log.md` do PRD (referenciando Open Q4).

- [ ] **Task 4 — Rota 404 (AC: 4)**
  - [ ] Criar `src/pages/NotFoundPage.tsx`.
  - [ ] Adicionar rota `path="*"` no router.

- [ ] **Task 5 — Shell com Celebration + i18n preparado (AC: 5)**
  - [ ] Importar `ClbHeader` via barrel `~/components/external`.
  - [ ] Incluir placeholder para o seletor de idioma no header (será ativado na Story 1.5).
  - [ ] Labels do shell via i18n key (ex.: `t('nav.home')`) com fallback PT-BR.

## Dev Notes

### Rotas do protótipo (hash) vs. novas rotas (history API)

O protótipo usa `window.location.hash` e `hashchange` events (`app.js:initRouter`).
O novo app usa `BrowserRouter` (HTML5 history API). URLs limpas, sem `#`.

Hash legadas a mapear (extraídas de `app.js`):
- `#/home` → `/`
- `#/products` → `/products`
- `#/product/:id` → `/products/:id`
- `#/discovery` → `/discovery`
- etc.

### Layout persistente

```
AppLayout
├── ClbHeader (logo, nav links, seletor de idioma)
├── Sidebar / ClbSideMenu (links de navegação principais)
└── <Outlet /> (conteúdo da rota atual)
```

Full-page flow (Story 3.2 — `ClbFullPageFlow`) usa layout diferente (sem sidebar). Preparar lazy
layout switch no router para `path="/discovery"` sem sidebar.

### react-router v6 vs v7

Verificar versão instalada. API de v7 é similar a v6 mas com algumas mudanças em loaders. Usar a API
compatível com a versão instalada. Preferir `createBrowserRouter` + `RouterProvider` (v6.4+) que permite
data loaders futuros.

### References

- [Source: epics.md Epic 1 — Story 1.4]
- [Source: prd.md §4.1 FR-3]
- [Source: docs/component-inventory-frontend.md — inventário de rotas]
- [Source: epics.md Open Q4 — redirect hash]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- Decisão hash URLs: (redirect / 404 / descontinuar)
- Decisão registrada em `.decision-log.md`: (sim/não)
- Todas as rotas navegáveis: (sim/não)

### File List

- `src/App.tsx`
- `src/layouts/AppLayout.tsx`
- `src/pages/*.tsx` (placeholders)
- `src/pages/NotFoundPage.tsx`
