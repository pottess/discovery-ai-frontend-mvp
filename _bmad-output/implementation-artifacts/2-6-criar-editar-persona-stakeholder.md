# Story 2.6: Criar e editar persona/stakeholder

Status: ready-for-dev

## Story

Como usuário,
Quero criar e editar personas e stakeholders,
Para que eu mantenha o Público atualizado.

## Acceptance Criteria

1. **Dado** o formulário de criação/edição (react-hook-form + zod),
   **Quando** submeto com campos inválidos (obrigatórios ausentes),
   **Então** a validação bloqueia o submit e exibe erros nos campos com o padrão do DS
   (`error={true}`, `helperText="..."`, `showHelperText={true}` nos componentes `ClbInput*`).

2. **Dado** formulário válido,
   **Quando** salvo,
   **Então** persiste no mock (`POST` para criar, `PUT` para editar em `product-audience-by-product`)
   e redireciona para o view da persona/stakeholder criada/atualizada.

3. **Dado** a mudança,
   **Quando** volto para a listagem do Público,
   **Então** a nova entrada ou atualização aparece na lista.

4. **Dado** erro de rede ao salvar,
   **Então** mensagem de erro via `ClbToast` — sem perda do preenchimento.

5. **Dado** DoD recorrente,
   **Então** i18n, DS (campos via `ClbInputText`/`ClbTextarea`), testes, a11y (labels acessíveis).

## Tasks / Subtasks

- [ ] **Task 1 — Formulário com react-hook-form + zod (AC: 1, 2)**
  - [ ] `PersonaFormPage.tsx` e `StakeholderFormPage.tsx` (ou componente compartilhado).
  - [ ] Schema zod: validar campos obrigatórios conforme inventário.
  - [ ] `useForm` com `zodResolver`.
  - [ ] Campos: `ClbInputText`, `ClbTextarea` via barrel; `error`/`helperText`/`showHelperText` bindados a `fieldState.error`.

- [ ] **Task 2 — Submit e persistência (AC: 2, 3, 4)**
  - [ ] `onSubmit`: POST (criar) ou PUT (editar) via `services/http/audience`.
  - [ ] Sucesso: navigate para view.
  - [ ] Erro: `openToast({ type: 'negative', ... })` via `useToast`.

- [ ] **Task 3 — DoD**
  - [ ] i18n namespace `audience.form`.
  - [ ] Testes: validação (campos inválidos), submit válido, erro de rede.

## Dev Notes

### Padrão de erro do Celebration DS

```tsx
<ClbInputText
  error={!!fieldState.error}
  helperText={fieldState.error?.message}
  showHelperText={!!fieldState.error}
  {...field}
/>
```

### Campos de persona/stakeholder

Consultar `docs/component-inventory-frontend.md` e `docs/data-models-frontend.md` para campos completos.

### References

- [Source: epics.md Epic 2 — Story 2.6]
- [Source: prd.md §4.1 FR-11]
- [Source: .claude/skills/celebration-design-system/SKILL.md — padrão de forms]

## Dev Agent Record

### Completion Notes List

- Validação zod funcionando: (sim/não)
- Persistência no mock: (sim/não)

### File List

- `src/features/audience/PersonaFormPage.tsx`
- `src/features/audience/StakeholderFormPage.tsx`
- `src/i18n/locales/*/audience.json` (update)
- `src/features/audience/PersonaFormPage.test.tsx`
- `src/features/audience/StakeholderFormPage.test.tsx`
