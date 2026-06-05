# Story 3.2: Shell do fluxo full-page com rolagem interna

Status: ready-for-dev

## Story

Como usuário,
Quero o fluxo de novo discovery em full-page,
Para que eu crie um discovery sem sair do contexto.

## Acceptance Criteria

1. **Dado** a rota `/discovery` (novo discovery),
   **Quando** abro via botão no detalhe do produto ou na Home,
   **Então** `ClbFullPageFlow` abre sem a sidebar/header principal (layout full-page).

2. **Dado** o `ClbFullPageFlow` aberto,
   **Quando** rolo o conteúdo,
   **Então** o conteúdo interno rola e a página de fundo permanece fixa (sem double-scroll).

3. **Dado** as 4 etapas do fluxo (Setup, Participantes, CSD, Metodologia),
   **Então** estão visíveis como steps no stepper do `ClbFullPageFlow` e são navegáveis
   (próximo/anterior).

4. **Dado** o botão de fechar/cancelar do full-page,
   **Quando** clicado,
   **Então** retorna para a tela anterior sem perder o histórico do router.

5. **Dado** i18n + a11y,
   **Então** labels das etapas nos catálogos; navegação por teclado funciona no full-page.

## Tasks / Subtasks

- [ ] **Task 1 — Layout full-page sem sidebar (AC: 1)**
  - [ ] Criar `DiscoveryFlowLayout.tsx` sem `AppLayout` (sem header/sidebar).
  - [ ] Configurar no router: `/discovery` usa `DiscoveryFlowLayout` via rotas aninhadas ou layout override.

- [ ] **Task 2 — `ClbFullPageFlow` com stepper (AC: 2, 3)**
  - [ ] Importar `ClbFullPageFlow` via barrel `~/components/external`.
  - [ ] Consultar Storybook `https://celebration.ambevdevs.com.br/storybook-react` para API exata.
  - [ ] Renderizar 4 steps: Setup, Participantes, CSD, Metodologia (conteúdo placeholder — Story 3.3).
  - [ ] Scroll interno: confirmar via `overflow-y: auto` dentro do full-page, `overflow: hidden` no body.

- [ ] **Task 3 — Fechar / cancelar (AC: 4)**
  - [ ] Botão de close do `ClbFullPageFlow` dispara `navigate(-1)` ou rota explícita.

- [ ] **Task 4 — i18n + testes (AC: 5 + DoD)**
  - [ ] Namespace `discovery.flow`.
  - [ ] Teste: shell monta, 4 steps visíveis, navegação entre steps.

## Dev Notes

### `ClbFullPageFlow`

Componente do Celebration para fluxos multi-step. Verificar API no Storybook:
`https://celebration.ambevdevs.com.br/storybook-react`

Props esperadas (verificar no Storybook):
- `steps` — array de step config
- `currentStep` — step ativo
- `onClose` — callback de fechar
- `onNext`/`onPrev` — navegação

### Double-scroll prevention

```css
/* body quando full-page ativo */
body { overflow: hidden; }
/* container interno */
.full-page-content { overflow-y: auto; height: 100vh; }
```

### References

- [Source: epics.md Epic 3 — Story 3.2]
- [Source: prd.md §4.1 FR-12, FR-13]
- [Source: .claude/skills/celebration-design-system/SKILL.md — ClbFullPageFlow]

## Dev Agent Record

### Completion Notes List

- `ClbFullPageFlow` renderizando: (sim/não)
- Scroll interno confirmado: (sim/não)
- 4 etapas navegáveis: (sim/não)

### File List

- `src/layouts/DiscoveryFlowLayout.tsx`
- `src/features/discovery/DiscoveryFlowPage.tsx`
- `src/App.tsx` (update — rota /discovery com layout override)
- `src/components/external/index.tsx` (update — ClbFullPageFlow)
- `src/i18n/locales/*/discovery.json`
