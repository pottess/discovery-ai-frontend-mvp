# Story 3.5: Tratamento de erro com preservação e retry

Status: ready-for-dev

## Story

Como usuário,
Quero não perder meu preenchimento em caso de falha,
Para que eu consiga tentar de novo.

## Acceptance Criteria

1. **Dado** uma falha no kickoff (mock simulando erro HTTP 500),
   **Quando** o erro ocorre,
   **Então** o formulário exibe a mensagem de erro (via `ClbToast` negative) e **preserva todos
   os dados preenchidos** nas 4 etapas.

2. **Dado** uma falha durante o polling (timeout ou erro de rede),
   **Quando** ocorre,
   **Então** a UI mostra estado de erro com botão "Tentar novamente" — sem loading eterno, sem
   perda dos dados do formulário.

3. **Dado** o botão "Tentar novamente",
   **Quando** clicado,
   **Então** reabre o formulário com os dados preservados na etapa de submissão (não volta para o início).

4. **Dado** erro de validação de resposta (payload inesperado do mock),
   **Então** mensagem de erro genérica — sem throw não tratado que quebre a UI.

5. **Dado** DoD: testes,
   **Então** testes com Mirage simulando erro 500 e timeout.

## Tasks / Subtasks

- [ ] **Task 1 — Simular erros no Mirage (AC: 1, 2)**
  - [ ] Adicionar rota mock de kickoff que retorna 500 condicionalmente
        (ex.: flag `VITE_MOCK_KICKOFF_ERROR=true` ou via query param).
  - [ ] Configurar delay excessivo para simular timeout.

- [ ] **Task 2 — Preservar estado do formulário em erro (AC: 1, 2, 3)**
  - [ ] Estado do formulário não é limpo em caso de erro de kickoff/polling.
  - [ ] Botão "Tentar novamente" re-dispara submit sem re-renderizar o formulário do zero.

- [ ] **Task 3 — Feedback de erro (AC: 1, 4)**
  - [ ] `ClbToast` (negative) para erro de kickoff.
  - [ ] `ClbAlert` inline para erro de polling (persiste na tela até ação do usuário).

- [ ] **Task 4 — Testes (AC: 5)**
  - [ ] Teste: kickoff 500 → toast erro + dados preservados.
  - [ ] Teste: polling timeout → alert + retry funcional.

## Dev Notes

### Simulando erros no Mirage

```ts
// Em makeServer, adicionar flag:
this.post('/discovery/kickoff', (schema, request) => {
  if (request.requestHeaders['x-mock-error'] === '500') {
    return new Response(500, {}, { error: 'Internal Server Error' })
  }
  // ...normal
})
```

Ou usar Mirage `passthrough` scenarios.

### Preservar estado react-hook-form

`useForm` não limpa dados ao re-render. Garantir que o componente não seja desmontado em erro
(usar state machine ou flag `hasError` em vez de conditional render que desmonta o form).

### References

- [Source: epics.md Epic 3 — Story 3.5]
- [Source: prd.md §4.1 FR-12; epics.md DoD — robustez]

## Dev Agent Record

### Completion Notes List

- Dados preservados após erro: (sim/não)
- Retry funcional: (sim/não)
- Testes com erro simulado: (sim/não)

### File List

- `src/features/discovery/DiscoveryFlowPage.tsx` (update)
- `src/mocks/server.ts` (update — rota de erro)
- `src/features/discovery/DiscoveryFlowPage.test.tsx` (update)
