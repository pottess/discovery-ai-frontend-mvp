# Story 5.1: Ativar gate de cobertura no CI

Status: ready-for-dev

## Story

Como time,
Quero o gate de cobertura ativo no CI,
Para que a qualidade de testes seja mantida.

> Esta story ativa o threshold que estava em modo report desde a Story 1.8. Só executar após
> meta de cobertura acordada com o time.

## Acceptance Criteria

1. **Dado** a meta de cobertura acordada (ex.: 60% statements),
   **Quando** o CI roda em push/PR,
   **Então** o build falha se a cobertura ficar abaixo da meta.

2. **Dado** o threshold configurado em `vitest.config.ts`,
   **Então** o valor está documentado no `README.md` ou `CLAUDE.md` com a justificativa.

3. **Dado** a cobertura atual antes da ativação,
   **Então** todos os testes existentes passam no threshold (ou são corrigidos antes de ativar).

## Tasks / Subtasks

- [ ] **Task 1 — Medir cobertura atual (AC: 3)**
  - [ ] Rodar `npm run test:coverage` e verificar percentuais por arquivo.
  - [ ] Identificar arquivos abaixo da meta.

- [ ] **Task 2 — Cobrir gaps (AC: 3)**
  - [ ] Adicionar testes para arquivos abaixo do threshold até atingir a meta.
  - [ ] Focar em: services/http, features críticas, hooks.

- [ ] **Task 3 — Ativar threshold (AC: 1, 2)**
  - [ ] Atualizar `vitest.config.ts`:
    ```ts
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      thresholds: {
        statements: 60,  // confirmar meta
        branches: 60,
        functions: 60,
        lines: 60
      }
    }
    ```
  - [ ] Documentar meta em `CLAUDE.md`.
  - [ ] Confirmar que CI falha com cobertura abaixo.

## Dev Notes

### Meta padrão assumida

60% statements (Open Q — a confirmar com o time conforme PRD §8 Open Questions).
Ajustar o valor real antes de ativar.

### Não bloquear antes de confirmar

O gate **não** deve ser ativado antes da meta ser acordada. Se não houver consenso, manter em
report mode e criar item de backlog para revisitar.

### References

- [Source: epics.md Epic 5 — Story 5.1]
- [Source: prd.md §4.8 FR-16]
- [Source: _bmad-output/implementation-artifacts/1-8-infra-testes.md]

## Dev Agent Record

### Completion Notes List

- Meta acordada: (valor em %)
- Threshold ativo no CI: (sim/não)
- Meta documentada em CLAUDE.md: (sim/não)

### File List

- `vitest.config.ts` (update — threshold)
- `CLAUDE.md` (update — meta de cobertura)
