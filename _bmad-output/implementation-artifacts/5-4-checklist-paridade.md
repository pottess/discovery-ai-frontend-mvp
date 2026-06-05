# Story 5.4: Checklist de paridade por tela

Status: ready-for-dev

## Story

Como time,
Quero verificar paridade contra o inventário,
Para que confirmemos 100% das telas reconstruídas (SM-1).

## Acceptance Criteria

1. **Dado** o inventário `docs/component-inventory-frontend.md` (10 views + 3 modals),
   **Quando** percorro cada tela/modal/rota,
   **Então** cada item passa o critério SM-1:
   - Rota resolve (sem 404/crash).
   - Elementos principais presentes no DOM.
   - Interações principais funcionando contra o mock.

2. **Dado** divergências encontradas,
   **Então** viram itens de ajuste com prioridade — corrigidos antes do fechamento do Epic 5.

3. **Dado** o checklist concluído,
   **Então** existe um documento de resultado em `_bmad-output/implementation-artifacts/5-4-paridade-result.md`
   com o status de cada tela (pass/fail + observações).

## Tasks / Subtasks

- [ ] **Task 1 — Criar checklist (AC: 1, 3)**
  - [ ] Criar `_bmad-output/implementation-artifacts/5-4-paridade-result.md`.
  - [ ] Para cada item do inventário, criar linha:
    ```
    | Tela | Rota | Rota OK | Elementos OK | Interações OK | Observações |
    ```

- [ ] **Task 2 — Percorrer todas as telas (AC: 1)**
  - [ ] Abrir cada rota no browser com o mock ativo.
  - [ ] Para cada tela, verificar os elementos listados no inventário.
  - [ ] Registrar resultado no checklist.

- [ ] **Task 3 — Corrigir divergências (AC: 2)**
  - [ ] Para cada `fail`: criar PR de correção ou item de backlog com prioridade.
  - [ ] Não fechar a story até críticos resolvidos.

## Dev Notes

### Critério SM-1 (de epics.md)

- Rota resolve: navegar para a rota no browser não resulta em 404 ou crash.
- Elementos presentes: os elementos listados no `docs/component-inventory-frontend.md` para
  aquela tela estão no DOM e visíveis.
- Interações funcionam: ações principais (clicar, filtrar, submeter) funcionam contra o mock.

### Inventário de telas (10 views + 3 modals)

Consultar `docs/component-inventory-frontend.md` para lista completa.

Esperados:
1. Home `/`
2. Produtos `/products`
3. Detalhe do Produto `/products/:id`
4. Público `/audience/:productId`
5. Persona View
6. Persona Edit
7. Stakeholder View
8. Stakeholder Edit
9. Cockpit `/discovery/:runId`
10. Síntese `/discovery/:runId/synthesis`
11. Entrevistas `/discovery/:runId/interview`
12. Sessão de Entrevista
13. Fluxo de Novo Discovery `/discovery`
14. Modal Método (Cockpit)
15. Modal Gravação (Interview Session)

### References

- [Source: epics.md Epic 5 — Story 5.4]
- [Source: prd.md SM-1]
- [Source: docs/component-inventory-frontend.md]

## Dev Agent Record

### Completion Notes List

- Telas verificadas: (N/total)
- Divergências encontradas: (N)
- Divergências críticas corrigidas: (sim/não)
- Checklist resultado criado: (sim/não)

### File List

- `_bmad-output/implementation-artifacts/5-4-paridade-result.md` (novo)
