# Story 1.3: Barrel de componentes e regra de import

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero consumir o Celebration via barrel `~/components/external`,
Para que o acoplamento ao pacote fique isolado e padronizado.

## Acceptance Criteria

1. **Dado** o arquivo `src/components/external/index.tsx`,
   **Quando** uma feature importa um componente `Clb*`,
   **Então** o import é sempre `import { ClbButton } from '~/components/external'` — nunca
   `from '@celebration/react'` diretamente em código de feature.

2. **Dado** uma regra de lint configurada (ESLint `no-restricted-imports`),
   **Quando** alguém adiciona `import ... from '@celebration/react'` fora de `~/components/external/`,
   **Então** o lint falha com mensagem descritiva.

3. **Dado** o barrel existente,
   **Quando** um componente `Clb*` necessário não estiver no barrel,
   **Então** o desenvolvedor adiciona ao barrel antes de usar (sem importar direto).

4. **Dado** o arquivo `.claude/rules/components-rule.md`,
   **Então** ele existe neste repo documentando a regra de barrel (portado ou escrito do zero).

5. **Dado** o barrel inicial,
   **Então** inclui ao menos os componentes necessários para o walking skeleton:
   `ClbButton`, `ClbHeader`, `ClbSideMenu` (ou equivalente de navegação), `ClbText`, `ClbIcon`,
   `ThemeProvider`, `ToastProvider`, `useToast`.

## Tasks / Subtasks

- [ ] **Task 1 — Criar barrel `~/components/external/index.tsx` (AC: 1, 5)**
  - [ ] Criar `src/components/external/index.tsx`.
  - [ ] Re-exportar os componentes iniciais mínimos necessários para o shell:
    ```tsx
    export {
      ThemeProvider,
      ToastProvider,
      useToast,
      ClbButton,
      ClbHeader,
      ClbText,
      ClbIcon,
      // adicionar conforme features precisarem
    } from '@celebration/react'
    ```
  - [ ] Confirmar que o import do CSS (`@celebration/assets/src/main.css`) continua apenas em `main.tsx`.

- [ ] **Task 2 — Regra de lint (AC: 2)**
  - [ ] Instalar/configurar ESLint se não estiver (Vite cria com `eslint`).
  - [ ] Adicionar ao `eslint.config.*` a regra `no-restricted-imports`:
    ```js
    {
      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['@celebration/react'],
          importNames: ['*'],
          message: 'Importe do barrel ~/components/external, não de @celebration/react diretamente.'
        }]
      }]
    }
    ```
  - [ ] Aplicar exceção para o próprio barrel (`src/components/external/index.tsx`).
  - [ ] Rodar `npm run lint` — lint passa no código existente.

- [ ] **Task 3 — Escrever `components-rule.md` (AC: 4)**
  - [ ] Criar `.claude/rules/components-rule.md` documentando:
    - Regra: toda importação de `@celebration/react` via barrel.
    - Como adicionar novo componente ao barrel.
    - Por que: isolamento de dependência, rename centralizado.
    - Exceção: `src/components/external/index.tsx` pode importar direto.

- [ ] **Task 4 — Atualizar `main.tsx` (AC: 1)**
  - [ ] Ajustar `main.tsx` para importar `ThemeProvider` e `ToastProvider` via barrel
        (ou manter exceção explícita no eslint já que `main.tsx` não é código de feature — decidir e documentar).

## Dev Notes

### Padrão do barrel

O barrel é o único lugar que importa de `@celebration/react`. Todo código de feature (feature components,
pages, hooks) importa via `~/components/external`. Isso permite:
- Renomear componentes sem alterar features.
- Substituir o DS sem tocar em código de feature.
- Centralizar mock de componentes nos testes.

### Componentes a adicionar conforme epics avançam

Não pré-exportar tudo. Adicionar ao barrel ao escrever cada feature. Exemplos por epic:
- Epic 2: `ClbTable`, `ClbInputText`, `ClbInputSearch`, `ClbModal`
- Epic 3: `ClbFullPageFlow`, `ClbStepper`, `ClbTextarea`
- Epic 4: `ClbInputUpload`, `ClbAlert`, `ClbBadge`

### ESLint versão flat config vs .eslintrc

Vite 5+ gera flat config (`eslint.config.js`). Usar sintaxe da versão instalada.

### References

- [Source: epics.md Epic 1 — Story 1.3]
- [Source: prd.md §4.1 FR-2]
- [Source: .claude/skills/celebration-design-system/SKILL.md — barrel pattern]
- [Source: epics.md Additional Requirements — barrel]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- Componentes no barrel inicial: (listar)
- Lint rule funcionando: (sim/não)
- `components-rule.md` criado: (sim/não)

### File List

- `src/components/external/index.tsx`
- `.claude/rules/components-rule.md`
- `eslint.config.*` (ou `.eslintrc.*`)
- `src/main.tsx` (possível update)
