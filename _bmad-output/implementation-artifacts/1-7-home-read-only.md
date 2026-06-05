# Story 1.7: Home read-only a partir do mock

Status: ready-for-dev

## Story

Como usuário,
Quero abrir a Home e ver dados reais do mock,
Para que o app demonstre valor end-to-end desde o início.

> Esta story entrega o **walking skeleton** do produto: o app está rodando, conectado ao mock, exibindo
> dados reais. Scope intencionalmenete reduzido — Home read-only (sem favoritar nesta story, que vem no
> Epic 2). O objetivo é validar a cadeia completa: mock → services/http → componente React.

## Acceptance Criteria

1. **Dado** o mock servindo discoveries recentes (seeds mínimas),
   **Quando** abro a rota `/`,
   **Então** vejo cards de Discoveries renderizados a partir do mock — com título, status e data visíveis.

2. **Dado** o Celebration sendo usado,
   **Quando** inspeciono o markup da Home,
   **Então** os cards usam componentes `Clb*` via barrel `~/components/external` — sem HTML cru desnecessário.

3. **Dado** o idioma ativo,
   **Quando** mudo o idioma via seletor,
   **Então** as labels estáticas da Home (títulos de seção, mensagens empty state) atualizam — sem reload.

4. **Dado** o mock não retornar discoveries (lista vazia),
   **Quando** abro a Home,
   **Então** vejo um **empty state** com mensagem descritiva (não tela branca ou erro).

5. **Dado** o mock retornar erro ou timeout de rede,
   **Quando** carrego a Home,
   **Então** vejo mensagem de erro acionável (não loading eterno nem crash).

6. **Dado** o inventário de paridade (`docs/component-inventory-frontend.md` — view Home),
   **Então** os elementos listados para a Home estão presentes (painel assistente + seção discoveries recentes).

## Tasks / Subtasks

- [ ] **Task 1 — Seeds de discoveries para a Home (AC: 1)**
  - [ ] Adicionar ao `src/mocks/seeds.ts` pelo menos 3 discoveries com:
    - `id`, `title`, `status`, `createdAt`, `product` (referência).
  - [ ] Rota mock `GET /api/local/discoveries` retornando os seeds.
  - [ ] Shapes espelham `docs/data-models-frontend.md` (Discovery entity).

- [ ] **Task 2 — Service de discoveries (AC: 1)**
  - [ ] Criar `src/services/http/discoveries.ts`:
    ```ts
    export const getDiscoveries = () => http.get<Discovery[]>('/local/discoveries')
    ```
  - [ ] Tipo `Discovery` provisório (será formalizado na Story 1.9).

- [ ] **Task 3 — Componente `HomePage` (AC: 1, 2, 3, 4, 5, 6)**
  - [ ] Criar `src/pages/HomePage.tsx`.
  - [ ] Usar `useEffect` + state (ou React Query, se decidido) para carregar discoveries.
  - [ ] Renderizar: painel assistente (texto/CTA) + seção "Discoveries recentes" com cards `ClbCard` (ou equivalente).
  - [ ] Empty state: `ClbText` com mensagem via i18n.
  - [ ] Error state: `ClbAlert` (ou `useToast`) com mensagem e botão de retry.
  - [ ] Loading state: skeleton ou spinner `ClbLoading`.

- [ ] **Task 4 — Strings da Home nos catálogos (AC: 3)**
  - [ ] Adicionar namespace `home` aos catálogos pt/es/en:
    - `home.title`, `home.recentDiscoveries`, `home.emptyState`, `home.errorState`.
  - [ ] es/en: placeholder PT até tradução.

- [ ] **Task 5 — Verificar paridade com inventário (AC: 6)**
  - [ ] Consultar `docs/component-inventory-frontend.md` — seção Home.
  - [ ] Confirmar que todos os elementos do inventário para a Home estão presentes.

## Dev Notes

### Escopo intencional

Esta Home é **read-only** — sem favoritar, sem filtros avançados. Esses chegam na Story 2.2.
O objetivo é a cadeia completa funcionando: mock → HTTP → React → UI.

### Inventário da Home (de `docs/component-inventory-frontend.md`)

Consultar o arquivo para a lista exata. Elementos esperados:
- Painel de boas-vindas / assistente
- Lista/grid de discoveries recentes
- Link para novo discovery
- (Favoritos: Story 2.2)

### Tratamento de estados

Todo componente que faz IO deve tratar 3 estados: loading, error, success (+ empty como sub-estado do success).
Padrão a manter em todas as features subsequentes.

### React Query (opcional)

Se a equipe decidir usar `@tanstack/react-query`, esta é a story ideal para introduzir. Documenta
a decisão no `.decision-log.md`. Se não, usar `useEffect` + state padrão.

### References

- [Source: epics.md Epic 1 — Story 1.7]
- [Source: prd.md §4.1 FR-10 (parcial, read-only)]
- [Source: docs/component-inventory-frontend.md — view Home]
- [Source: docs/data-models-frontend.md — Discovery entity]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- Mock servindo discoveries: (sim/não)
- Empty state implementado: (sim/não)
- Error state implementado: (sim/não)
- Paridade com inventário: (sim/não)

### File List

- `src/pages/HomePage.tsx`
- `src/services/http/discoveries.ts`
- `src/mocks/seeds.ts` (update)
- `src/mocks/server.ts` (update — rota /local/discoveries)
- `src/i18n/locales/*/home.json` (novo namespace)
