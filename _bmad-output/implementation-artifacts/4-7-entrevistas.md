# Story 4.7: Entrevistas (planejamento e sessão)

Status: ready-for-dev

> `[NOTE FOR PM]` **Paridade mínima** — entrevistas são simulação de baixo valor/alto esforço no MVP.
> Candidata a corte ou redução de escopo se o prazo apertar.

## Story

Como usuário,
Quero planejar e revisar entrevistas,
Para que eu conduza a pesquisa (simulada).

## Acceptance Criteria

1. **Dado** a rota `/discovery/:runId/interview`,
   **Quando** abro Entrevistas,
   **Então** vejo seleção/listagem de participantes e planejamento em paridade com o protótipo.

2. **Dado** a rota `/discovery/:runId/interview/:sessionId`,
   **Quando** abro uma sessão,
   **Então** vejo insights, transcrição e Modal de gravação (simulado) em paridade.

3. **Dado** Modal de gravação,
   **Quando** abro/fecho,
   **Então** comportamento conforme protótipo — sem integração real de áudio.

4. **Dado** DoD recorrente,
   **Então** i18n, DS, testes mínimos, a11y.

## Tasks / Subtasks

- [ ] **Task 1 — Página de Entrevistas (AC: 1)**
  - [ ] `src/features/interviews/InterviewsPage.tsx`.
  - [ ] Listagem de participantes do mock + planejamento.
  - [ ] Consultar `docs/component-inventory-frontend.md` — Interview view.
  - [ ] Consultar `docs/RESEARCH_ACTIVITY_UI_AUDIT.md` — elementos específicos da tabela e ações.
  - [ ] Seed `research-activity-users` no Mirage:
        `GET /api/local/research-activity-users` → `{ "perfil-ambev-demo": [...] }`
        Ver schema em `docs/data-models-frontend.md`.

- [ ] **Task 2 — Sessão de Entrevista (AC: 2, 3)**
  - [ ] `src/features/interviews/InterviewSessionPage.tsx`.
  - [ ] Insights + transcrição simulados.
  - [ ] `RecordingModal.tsx` — abre/fecha via `ClbModal`, sem áudio real.

- [ ] **Task 3 — DoD mínimo**
  - [ ] i18n namespace `interviews`.
  - [ ] Testes: render das páginas, modal abre/fecha.

## Dev Notes

### Escopo deliberadamente mínimo

Esta story é a última do Epic 4 e de menor prioridade. Implementar em paridade visual com o
protótipo, mas sem funcionalidade real (entrevistas são simulação). Se o prazo apertar, escopo
pode ser reduzido a placeholders com navegação funcional.

### Consultar inventário e audit

`docs/component-inventory-frontend.md` — Interview view e Interview Session view para campos exatos.

`docs/RESEARCH_ACTIVITY_UI_AUDIT.md` — audit específico da research activity UI. Elementos obrigatórios:
- **Tabela de participantes:** colunas nome, tipo, status de recrutamento
- **Botões de ação:** recrutar, remover participante
- **Script/roteiro:** exibição da metodologia/roteiro de pesquisa
- **Área de síntese/transcrição:** simulada, sem backend real
- **Video preview:** modal simulado, sem áudio

### References

- [Source: epics.md Epic 4 — Story 4.7]
- [Source: prd.md §4.1 FR-15]
- [Source: docs/component-inventory-frontend.md — Interview, Interview Session views]
- [Source: docs/RESEARCH_ACTIVITY_UI_AUDIT.md — tabela de participantes, roteiro, síntese, video preview]

## Dev Agent Record

### Completion Notes List

- Entrevistas renderizando: (sim/não)
- Modal de gravação: (sim/não)

### File List

- `src/features/interviews/InterviewsPage.tsx`
- `src/features/interviews/InterviewSessionPage.tsx`
- `src/features/interviews/RecordingModal.tsx`
- `src/i18n/locales/*/interviews.json`
- `src/features/interviews/*.test.tsx`
