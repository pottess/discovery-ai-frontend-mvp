# Story 1.4: Roteamento SPA e rotas do protótipo

Status: ready-for-dev

## Story

Como usuário,
Quero navegar entre as telas via rotas,
Para que eu acesse cada área do app.

## Acceptance Criteria

1. **Dado** `react-router-dom` (v7) configurado no `App.tsx`,
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

- [ ] **Task 1 — Configurar react-router-dom@^7 no `App.tsx` (AC: 1, 2)**
  - [ ] Confirmar `react-router-dom@^7` instalado (Story 1.2).
  - [ ] Criar `src/router.tsx` com `createBrowserRouter` + layout aninhado:
    ```tsx
    import { createBrowserRouter } from 'react-router-dom'
    import { AppLayout } from './layouts/AppLayout'

    export const router = createBrowserRouter([
      {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'products', element: <ProductsPage /> },
          { path: 'products/:id', element: <ProductDetailPage /> },
          // ... demais rotas
          { path: '*', element: <NotFoundPage /> },
        ],
      },
      {
        // full-page sem sidebar (Epic 3)
        path: '/discovery',
        element: <DiscoveryLayout />,
        children: [/* rotas do fluxo */],
      },
    ])
    ```
  - [ ] Em `src/main.tsx`: `<RouterProvider router={router} />` (sem `<BrowserRouter>` wrapper).
  - [ ] Criar layout `src/layouts/AppLayout.tsx` com `ClbHeader` + sidebar + `<Outlet />`.
  - [ ] Mapear todas as rotas acima para pages placeholder em `src/pages/`.

- [ ] **Task 2 — Pages placeholder (AC: 1)**
  - [ ] Criar um componente placeholder genérico `src/pages/PlaceholderPage.tsx`
        que aceita o nome da rota e exibe-a (para desenvolvimento rápido).
  - [ ] Ou criar um arquivo por page — decidir e manter consistente.

- [ ] **Task 3 — URLs hash legadas: 404 via catch-all (AC: 3)**
  - [ ] Confirmar que rota `path="*"` no router renderiza `NotFoundPage` (já cobre URLs com `#`).
  - [ ] Criar `_bmad-output/planning-artifacts/.decision-log.md` (se não existir) e registrar:
        `Q4 — hash redirect: 404 via catch-all. Usuários internos, sem bookmarks públicos a preservar.`

- [ ] **Task 4 — Rota 404 (AC: 4)**
  - [ ] Criar `src/pages/NotFoundPage.tsx`.
  - [ ] Adicionar rota `path="*"` no router.

- [ ] **Task 5 — Shell com Celebration + i18n preparado (AC: 5)**
  - [ ] Importar `ClbHeader` via barrel `~/components/external`.
  - [ ] Incluir placeholder para o seletor de idioma no header (será ativado na Story 1.5).
  - [ ] Labels do shell via i18n key (ex.: `t('nav.home')`) com fallback PT-BR.

## Dev Notes

### Decisão: URLs hash legadas (Q4 — fechada)

Decisão: **404 via catch-all** (`path="*"` já existente no router).  
Motivo: usuários do protótipo são internos (designers/PMs), sem bookmarks públicos a preservar.  
Implementação: nenhum código adicional. `path="*"` cobre qualquer URL não mapeada, incluindo `/#home`.  
Documentar em `_bmad-output/planning-artifacts/.decision-log.md`.

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

### react-router-dom v7

Projeto fixado em `react-router-dom@^7`. API obrigatória: `createBrowserRouter` + `RouterProvider`.

- ❌ Não usar `<BrowserRouter>` + `<Routes>` — API de componentes legada, deprecated em v7.
- ✅ `createBrowserRouter([...])` em `src/router.tsx` + `<RouterProvider router={router} />` em `main.tsx`.
- ✅ Full-page layout (sem sidebar) via rota raiz separada no array do router.
- ✅ `useNavigate`, `useParams`, `Link` permanecem iguais — sem mudanças de uso nas features.

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

- `src/router.tsx`
- `src/main.tsx` (update — `<RouterProvider router={router} />`)
- `src/layouts/AppLayout.tsx`
- `src/pages/*.tsx` (placeholders)
- `src/pages/NotFoundPage.tsx`
