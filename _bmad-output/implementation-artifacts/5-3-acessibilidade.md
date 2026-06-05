# Story 5.3: Passagem de acessibilidade

Status: ready-for-dev

## Story

Como time,
Quero validar a acessibilidade,
Para que não regridamos a a11y do Celebration.

## Acceptance Criteria

1. **Dado** as telas principais (Home, Produtos, Cockpit, Formulário de Discovery),
   **Quando** navego com teclado (Tab, Enter, Esc, Arrow keys),
   **Então** todos os elementos interativos são alcançáveis e ativáveis por teclado.

2. **Dado** as telas principais,
   **Quando** inspeciono com leitor de tela (NVDA/VoiceOver) ou `axe-core`,
   **Então** não há violações de ARIA ou roles ausentes.

3. **Dado** os componentes Celebration (`Clb*`),
   **Então** não introduzimos regressão frente ao comportamento nativo de a11y do DS.

4. **Dado** problemas encontrados,
   **Então** viram itens de correção com prioridade (crítico/alto/médio).

## Tasks / Subtasks

- [ ] **Task 1 — Testes de a11y automatizados (AC: 2)**
  - [ ] Instalar `@axe-core/react` ou `jest-axe` (via Vitest).
  - [ ] Adicionar teste de a11y para cada página principal:
    ```ts
    import { axe } from 'jest-axe'
    it('has no a11y violations', async () => {
      const { container } = render(<HomePage />)
      expect(await axe(container)).toHaveNoViolations()
    })
    ```

- [ ] **Task 2 — Verificação manual de teclado (AC: 1)**
  - [ ] Percorrer Home, Produtos, Cockpit, Fluxo de Discovery com Tab/Enter/Esc.
  - [ ] Modais: confirmar focus trap e retorno de foco ao fechar.
  - [ ] Documentar gaps encontrados.

- [ ] **Task 3 — Corrigir violações críticas/altas (AC: 4)**
  - [ ] Para cada violação encontrada, avaliar: crítico (bloqueia) / alto (corrigir antes de release)
        / médio (backlog).
  - [ ] Corrigir críticos e altos.
  - [ ] Criar itens de backlog para médios.

## Dev Notes

### Celebration já implementa a11y

Componentes `Clb*` têm ARIA nativo. Regressões geralmente vêm de:
- Wrappers que bloqueiam eventos de teclado.
- `aria-label` ausente em botões de ícone.
- `alt` ausente em imagens.
- Focus não retornando após fechar modal.

### Ferramentas

- `jest-axe`: testes automatizados no Vitest.
- `@axe-core/react`: plugin dev que loga violations no console.
- NVDA (Windows) / VoiceOver (macOS) para verificação manual.

### References

- [Source: epics.md Epic 5 — Story 5.3]
- [Source: prd.md NFR-1]
- [Source: epics.md DoD recorrente — a11y]

## Dev Agent Record

### Completion Notes List

- Violações axe encontradas: (N)
- Violações críticas/altas corrigidas: (sim/não)
- Verificação manual de teclado: (sim/não)

### File List

- `src/**/*.test.tsx` (update — axe assertions)
- Correções em componentes com violations
