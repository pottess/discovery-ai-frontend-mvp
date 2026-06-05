# Story 4.5: Chat do Discovery e Modal de entrada de método

Status: ready-for-dev

## Story

Como usuário,
Quero anotar/conversar e adicionar conteúdo a um método,
Para que eu registre contexto no Discovery.

> **Paridade** — estas features são baseadas em UX do protótipo. Sem backend real de chat;
> entradas são mantidas localmente (estado React + mock).

## Acceptance Criteria

1. **Dado** o Cockpit aberto,
   **Quando** uso o Chat do Discovery,
   **Então** posso enviar mensagens e visualizar o histórico em paridade com o protótipo
   (entradas mantidas em estado local/mock, sem backend de IA real).

2. **Dado** o Modal de entrada de método,
   **Quando** abro via botão no Cockpit,
   **Então** posso inserir texto e/ou arquivos e confirmar.

3. **Dado** confirmação no Modal de método,
   **Quando** salvo,
   **Então** a entrada é registrada localmente e visível no Cockpit.

4. **Dado** o Modal de método fechado via ESC ou botão de cancelar,
   **Então** retorna ao Cockpit sem salvar.

5. **Dado** DoD recorrente,
   **Então** i18n, DS, testes, a11y (Modal com focus trap).

## Tasks / Subtasks

- [ ] **Task 1 — Chat do Discovery (AC: 1)**
  - [ ] `DiscoveryChatSection.tsx`: histórico de mensagens + campo de input.
  - [ ] Estado local (array de mensagens) — sem chamada a backend de IA.
  - [ ] Mensagens renderizadas com scroll para a mais recente.
  - [ ] Paridade com inventário (`docs/component-inventory-frontend.md` — Cockpit chat section).

- [ ] **Task 2 — Modal de entrada de método (AC: 2, 3, 4)**
  - [ ] `MethodInputModal.tsx` usando `ClbModal` via barrel.
  - [ ] Campos: texto (`ClbTextarea`) + upload de arquivo (`ClbInputUpload`).
  - [ ] Confirmar: salva em estado local, fecha modal.
  - [ ] Cancelar: fecha sem salvar.
  - [ ] Focus trap no Modal (Celebration já gerencia via `ClbModal`).

- [ ] **Task 3 — Testes (DoD)**
  - [ ] Teste: chat — enviar mensagem, historico atualiza.
  - [ ] Teste: modal — abrir, confirmar, cancelar.
  - [ ] A11y: modal fecha com ESC.

## Dev Notes

### `ClbModal`

Celebration já gerencia focus trap e ESC. Verificar props no Storybook:
`https://celebration.ambevdevs.com.br/storybook-react`

### Estado local de chat

Chat sem backend real. Usar `useState<Message[]>`. Persist opcional via `localStorage` se
quiser sobreviver a reload (não obrigatório no MVP).

### Paridade

Consultar `docs/component-inventory-frontend.md` — Cockpit view para campos e comportamentos
exatos do chat e modal de método.

### References

- [Source: epics.md Epic 4 — Story 4.5]
- [Source: prd.md §4.1 FR-14]
- [Source: docs/component-inventory-frontend.md — Cockpit modals]

## Dev Agent Record

### Completion Notes List

- Chat local funcionando: (sim/não)
- Modal com focus trap: (sim/não)
- ESC fecha modal: (sim/não)

### File List

- `src/features/cockpit/components/DiscoveryChatSection.tsx`
- `src/features/cockpit/components/MethodInputModal.tsx`
- `src/components/external/index.tsx` (update — ClbModal)
- `src/features/cockpit/components/*.test.tsx`
