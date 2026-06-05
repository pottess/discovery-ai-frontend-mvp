# Story 4.4: Upload de evidência

Status: ready-for-dev

## Story

Como usuário,
Quero anexar evidência quando solicitado,
Para que o workflow continue.

## Acceptance Criteria

1. **Dado** o estado `EVIDENCE_UPLOAD_PENDING`,
   **Quando** o Cockpit detecta esse estado via polling,
   **Então** exibe o componente `ClbInputUpload` para anexar arquivo.

2. **Dado** um arquivo válido (tipo em `supported_file_types` de `/api/config`, tamanho ≤ `upload_max_size_mb`),
   **Quando** faço upload e confirmo,
   **Então** `POST /api/discovery/:runId/evidence` é chamado e o estado transiciona para `INSIGHT_REVIEW_PENDING`.

3. **Dado** arquivo de tipo inválido (ex.: `.exe`),
   **Quando** tento fazer upload,
   **Então** exibe erro de validação antes do submit — sem chamada à API.

4. **Dado** arquivo acima do tamanho máximo,
   **Então** exibe erro de tamanho — sem chamada à API.

5. **Dado** falha no upload (erro de rede),
   **Então** exibe `ClbToast` (negative) — estado não transiciona (sem transição parcial).

6. **Dado** DoD recorrente,
   **Então** i18n, DS, testes.

## Tasks / Subtasks

- [ ] **Task 1 — Componente de upload (AC: 1, 3, 4)**
  - [ ] `EvidenceUploadSection.tsx` exibida quando `state === 'EVIDENCE_UPLOAD_PENDING'`.
  - [ ] Usar `ClbInputUpload` via barrel.
  - [ ] Validar tipo e tamanho client-side antes de chamar API.
    - Tipos: comparar `file.type` com `config.supported_file_types`.
    - Tamanho: `file.size ≤ config.upload_max_size_mb * 1024 * 1024`.

- [ ] **Task 2 — Submit e transição (AC: 2, 5)**
  - [ ] `uploadEvidence(runId, file)` em `services/http/discovery.ts`.
  - [ ] Em sucesso: atualizar estado para `INSIGHT_REVIEW_PENDING` localmente.
  - [ ] Em erro: `ClbToast` (negative), estado não muda.

- [ ] **Task 3 — Config de `/api/config` (AC: 3, 4)**
  - [ ] Garantir que `config.supported_file_types` e `config.upload_max_size_mb` estão disponíveis
        (carregados na Story 1.6 via `/api/config`).

- [ ] **Task 4 — Testes (DoD)**
  - [ ] Upload válido → transição estado.
  - [ ] Tipo inválido → erro client-side sem API call.
  - [ ] Erro de rede → toast, sem transição.

## Dev Notes

### `ClbInputUpload`

Verificar API no Storybook `https://celebration.ambevdevs.com.br/storybook-react`.
Props esperadas: `accept`, `maxSize`, `onChange`, `error`, etc.

### Validação client-side

Fazer antes de qualquer chamada à API. Usar dados de `/api/config`:
- `supported_file_types: ["pdf","docx","xlsx","png","jpg"]`
- `upload_max_size_mb: 10`

### References

- [Source: epics.md Epic 4 — Story 4.4]
- [Source: prd.md §4.1 FR-14]
- [Source: docs/api-contracts-frontend.md — evidence endpoint]

## Dev Agent Record

### Completion Notes List

- Upload transitioning estado: (sim/não)
- Validação client-side: (sim/não)
- Erro de rede sem transição: (sim/não)

### File List

- `src/features/cockpit/components/EvidenceUploadSection.tsx`
- `src/services/http/discovery.ts` (update)
- `src/components/external/index.tsx` (update — ClbInputUpload)
- `src/features/cockpit/components/EvidenceUploadSection.test.tsx`
