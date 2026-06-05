# Story 3.3: Etapas e validação do formulário

Status: ready-for-dev

## Story

Como usuário,
Quero preencher as etapas com validação,
Para que eu crie um discovery bem formado.

## Acceptance Criteria

1. **Dado** a etapa **Setup** (nome do discovery, problema, objetivo),
   **Quando** tento avançar sem título, problema ou objetivo preenchidos,
   **Então** a validação bloqueia e exibe erros nos campos (padrão DS: `error`/`helperText`/`showHelperText`).

2. **Dado** a etapa **Participantes**,
   **Quando** seleciono participantes do mock (`research-activity-users`),
   **Então** a seleção persiste ao navegar entre etapas.

3. **Dado** a etapa **CSD** (Certezas/Suposições/Dúvidas),
   **Quando** adiciono e removo linhas em cada categoria,
   **Então** as linhas são gerenciadas corretamente (sem perda de dados ao navegar entre etapas).

4. **Dado** a etapa **Metodologia**,
   **Quando** seleciono uma metodologia,
   **Então** a seleção persiste e é visível no stepper.

5. **Dado** formulário multi-step,
   **Então** dados de todas as etapas são preservados ao navegar para etapa anterior e retornar.

6. **Dado** DoD recorrente,
   **Então** i18n, DS, testes (validação bloqueando, navegação multi-step), a11y.

## Tasks / Subtasks

- [ ] **Task 1 — Formulário multi-step com react-hook-form (AC: 1, 5)**
  - [ ] Usar `useForm` com schema zod por etapa ou schema unificado.
  - [ ] Preservar estado entre etapas via `reset` parcial ou contexto de formulário.
  - [ ] Validação ao tentar avançar etapa (triggering por campo/grupo).

- [ ] **Task 2 — Etapa Setup (AC: 1)**
  - [ ] `SetupStep.tsx`: `ClbInputText` (título), `ClbTextarea` (problema, objetivo).
  - [ ] Zod: min 3 chars para título, obrigatório para problema/objetivo.

- [ ] **Task 3 — Etapa Participantes (AC: 2)**
  - [ ] Carregar `research-activity-users` do mock.
  - [ ] Componente de seleção múltipla (ex.: `ClbCheckbox` ou `ClbMultiSelect`).

- [ ] **Task 4 — Etapa CSD (AC: 3)**
  - [ ] Lista dinâmica por categoria (`useFieldArray` do react-hook-form).
  - [ ] Botão "Adicionar linha" / remover linha.

- [ ] **Task 5 — Etapa Metodologia (AC: 4)**
  - [ ] Opções de metodologia via `ClbRadio` ou `ClbSelect`.
  - [ ] Dados das metodologias: lista hardcoded ou do mock.

- [ ] **Task 6 — Testes (DoD)**
  - [ ] Validação bloqueando avanço; dados preservados; CSD dinâmico.

## Dev Notes

### Estado multi-step

Opções:
1. `useForm` único com validation por campo ativado em `trigger(['step1fields'])` antes de avançar.
2. Estado de formulário em contexto React (`DiscoveryFlowContext`).

Preferir opção 1 (react-hook-form nativo) para evitar estado manual.

### Shapes de kickoff

O payload final do submit (Story 3.4) precisa:
- `title`, `problem`, `objective` (Setup)
- `participants: string[]` (Participantes)
- `csd: { certezas: string[], suposicoes: string[], duvidas: string[] }` (CSD)
- `methodology: string` (Metodologia)

### References

- [Source: epics.md Epic 3 — Story 3.3]
- [Source: prd.md §4.1 FR-12]
- [Source: .claude/skills/celebration-design-system/SKILL.md — forms pattern]

## Dev Agent Record

### Completion Notes List

- Validação bloqueando avançar: (sim/não)
- Dados preservados entre etapas: (sim/não)
- CSD dinâmico: (sim/não)

### File List

- `src/features/discovery/steps/SetupStep.tsx`
- `src/features/discovery/steps/ParticipantsStep.tsx`
- `src/features/discovery/steps/CSDStep.tsx`
- `src/features/discovery/steps/MethodologyStep.tsx`
- `src/features/discovery/DiscoveryFlowPage.tsx` (update)
- `src/features/discovery/DiscoveryFlowPage.test.tsx`
