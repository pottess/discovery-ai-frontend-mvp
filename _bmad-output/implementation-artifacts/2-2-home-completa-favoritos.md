# Story 2.2: Home completa e favoritar Discoveries

Status: ready-for-dev

## Story

Como usuário,
Quero a Home com painel assistente e discoveries recentes, e favoritar discoveries,
Para que eu retome meu trabalho rapidamente.

> Expande a Home read-only da Story 1.7 adicionando favoritar, painel assistente completo e paridade
> total com o inventário.

## Acceptance Criteria

1. **Dado** a Home carregada do mock,
   **Quando** clico em "Favoritar" num Discovery,
   **Então** o favorito persiste na coleção `favorite-discovery-ids` (mock) e o ícone/estado reflete ao recarregar a página.

2. **Dado** um Discovery já favoritado,
   **Quando** clico para desfavoritar,
   **Então** é removido de `favorite-discovery-ids` e a UI atualiza imediatamente (sem reload).

3. **Dado** o inventário da Home (`docs/component-inventory-frontend.md`),
   **Então** todos os elementos listados estão presentes: painel assistente, discoveries recentes com ações,
   link para novo discovery, indicação de estado de cada discovery.

4. **Dado** a lista vazia de discoveries,
   **Então** empty state com CTA para criar o primeiro discovery.

5. **Dado** erro de rede ao carregar/favoritar,
   **Então** mensagem de erro acionável via `ClbToast` ou `ClbAlert` — sem crash.

6. **Dado** i18n ativo,
   **Então** todas as strings da Home estão nos catálogos pt/es/en; muda ao trocar idioma.

7. **Dado** a11y,
   **Então** botões de favoritar têm label acessível (`aria-label`); navegação por teclado funciona.

## Tasks / Subtasks

- [ ] **Task 1 — Favoritar/desfavoritar (AC: 1, 2)**
  - [ ] Hook `useFavoriteDiscoveries()` em `src/features/home/hooks/`:
    - Carrega `favorite-discovery-ids` do mock.
    - `toggleFavorite(id)` → PUT atualizado.
    - Otimistic update + rollback em erro.
  - [ ] Botão de favoritar no card de discovery usando `ClbIconButton` ou equivalente.

- [ ] **Task 2 — Painel assistente completo (AC: 3)**
  - [ ] Consultar inventário para elementos do painel.
  - [ ] Implementar com componentes Celebration via barrel.

- [ ] **Task 3 — Empty state e error state (AC: 4, 5)**
  - [ ] Empty state com CTA (botão → `/discovery`).
  - [ ] Error state com retry.

- [ ] **Task 4 — i18n completo (AC: 6)**
  - [ ] Todas as strings da Home nos catálogos.
  - [ ] Nenhuma string hardcoded.

- [ ] **Task 5 — A11y e testes (AC: 7 + DoD)**
  - [ ] `aria-label` nos botões de ação.
  - [ ] Testes: render com mock, toggle favorito, empty state.

## Dev Notes

### DoD recorrente aplicado

- Paridade: todos os elementos do inventário presentes.
- i18n: strings nos 3 catálogos.
- DS: componentes Clb* via barrel, tokens CSS.
- Testes: cobertura da feature.
- A11y: não regredir.
- Robustez: empty state, 404 (discovery id inexistente), timeout.

### Otimistic update

Atualizar estado local imediatamente e confirmar/reverter após resposta do mock. Evita latência percebida.

### References

- [Source: epics.md Epic 2 — Story 2.2]
- [Source: prd.md §4.1 FR-10]
- [Source: docs/component-inventory-frontend.md — Home view]

## Dev Agent Record

### Completion Notes List

- Favoritar persistindo no mock: (sim/não)
- Paridade com inventário verificada: (sim/não)

### File List

- `src/features/home/HomePage.tsx` (update)
- `src/features/home/hooks/useFavoriteDiscoveries.ts`
- `src/i18n/locales/*/home.json` (update)
- `src/features/home/HomePage.test.tsx` (update)
