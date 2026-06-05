# Story 3.4: Submeter, processar e abrir o Cockpit

Status: ready-for-dev

## Story

Como usuário,
Quero criar o discovery e acompanhar o processamento,
Para que eu chegue ao Cockpit ao concluir.

## Acceptance Criteria

1. **Dado** o formulário válido na última etapa,
   **Quando** clico em "Criar Discovery",
   **Então** o kickoff é disparado (`POST /api/discovery/kickoff`) e recebo o `run_id`.

2. **Dado** o kickoff bem-sucedido,
   **Quando** o polling (`GET /api/discovery/status/:runId`) retorna primeiro gate humano
   (`RESEARCH_APPROVAL_PENDING`),
   **Então** o Cockpit abre na rota `/discovery/:runId`.

3. **Dado** o novo Discovery criado,
   **Então** aparece na listagem em `/api/local/created-discoveries` (mock persistiu).

4. **Dado** o polling exceder o timeout configurado em `/api/config` (`polling_timeout`),
   **Então** exibe estado de erro com opção de retry — sem loading eterno.

5. **Dado** o polling retornar formato inesperado ou status HTTP de erro,
   **Então** exibe mensagem de erro acionável — sem travar a UI.

6. **Dado** o botão "Criar Discovery",
   **Quando** clicado,
   **Então** fica desabilitado/loading durante o processamento (duplo submit prevenido).

## Tasks / Subtasks

- [ ] **Task 1 — Submit e kickoff (AC: 1, 3, 6)**
  - [ ] `onSubmit` no `DiscoveryFlowPage`: POST kickoff com payload das 4 etapas.
  - [ ] Botão com estado `loading` durante submit/polling.
  - [ ] Criar o Discovery no mock de `created-discoveries` após kickoff.

- [ ] **Task 2 — Polling com timeout (AC: 2, 4, 5)**
  - [ ] Hook `usePolling(runId, config)`:
    - Interval: `config.polling_interval` ms.
    - Timeout: `config.polling_timeout` ms → erro.
    - Para quando estado atingir gate humano ou `COMPLETED`.
    - Cleanup: cancelar polling ao desmontar.

- [ ] **Task 3 — Navegação para o Cockpit (AC: 2)**
  - [ ] Quando estado é gate humano ou avançado: `navigate('/discovery/' + runId)`.
  - [ ] Full-page fecha antes de navegar.

- [ ] **Task 4 — Testes (DoD)**
  - [ ] Teste: submit → polling → navigate.
  - [ ] Teste: timeout → erro exibido.
  - [ ] Teste: botão desabilitado durante processamento.

## Dev Notes

### Polling pattern

```ts
const usePolling = (runId: string, config: ConfigResponse) => {
  const [state, setState] = useState<AgentState | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    const timer = setInterval(async () => {
      if (Date.now() - startTime > config.polling_timeout) {
        clearInterval(timer)
        setError('timeout')
        return
      }
      try {
        const res = await getDiscoveryStatus(runId)
        setState(res.state)
        if (isTerminalOrGateState(res.state)) clearInterval(timer)
      } catch {
        clearInterval(timer)
        setError('network')
      }
    }, config.polling_interval)

    return () => clearInterval(timer)
  }, [runId, config])

  return { state, error }
}
```

### Estados que param o polling

Gate humanos: `RESEARCH_APPROVAL_PENDING`, `EVIDENCE_UPLOAD_PENDING`, etc.
Terminal: `COMPLETED`.

### References

- [Source: epics.md Epic 3 — Story 3.4]
- [Source: prd.md §4.1 FR-12]
- [Source: docs/api-contracts-frontend.md — kickoff, status, config]

## Dev Agent Record

### Completion Notes List

- Polling implementado com timeout: (sim/não)
- Navigate para Cockpit: (sim/não)
- Double submit prevenido: (sim/não)

### File List

- `src/features/discovery/DiscoveryFlowPage.tsx` (update)
- `src/features/discovery/hooks/usePolling.ts`
- `src/features/discovery/DiscoveryFlowPage.test.tsx` (update)
