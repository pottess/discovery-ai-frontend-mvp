# Story 1.8: Infraestrutura de testes (Vitest + RTL) no CI

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero a suíte de testes rodando no CI,
Para que regressões sejam bloqueadas desde o início.

## Acceptance Criteria

1. **Dado** Vitest + React Testing Library configurados,
   **Quando** rodo `npm test` localmente,
   **Então** a suíte executa e exibe resultados (pass/fail) sem erros de configuração.

2. **Dado** um teste falhando,
   **Quando** o CI roda (GitHub Actions ou Azure Pipelines) em push/PR,
   **Então** o pipeline falha e bloqueia merge.

3. **Dado** o componente `HomePage`,
   **Então** existe ao menos um teste de render verificando que o shell/Home monta sem crash.

4. **Dado** o Mirage disponível em testes,
   **Quando** escrevo testes de integração de componentes,
   **Então** posso reusar `makeServer({ environment: 'test' })` para isolar HTTP sem mocks manuais.

5. **Dado** a configuração de cobertura,
   **Quando** rodo `npm run test:coverage`,
   **Então** o relatório é gerado em `coverage/` — em modo **report** (sem gate de threshold), que será
   ativado na Story 5.1 após meta confirmada.

6. **Dado** o CI pipeline,
   **Então** o job de testes usa cache de `node_modules` para performance.

## Tasks / Subtasks

- [ ] **Task 1 — Instalar Vitest + RTL (AC: 1)**
  - [ ] Instalar devDependencies:
    ```
    vitest @vitest/coverage-v8 jsdom
    @testing-library/react @testing-library/user-event @testing-library/jest-dom
    ```
  - [ ] Criar `vitest.config.ts` (ou adicionar ao `vite.config.ts`):
    ```ts
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      coverage: { provider: 'v8', reporter: ['text', 'lcov'] }
    }
    ```
  - [ ] Criar `src/test/setup.ts`:
    ```ts
    import '@testing-library/jest-dom'
    ```

- [ ] **Task 2 — Scripts em `package.json` (AC: 1, 5)**
  - [ ] Adicionar:
    ```json
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
    ```

- [ ] **Task 3 — Teste de render da Home (AC: 3, 4)**
  - [ ] Criar `src/pages/HomePage.test.tsx`:
    ```tsx
    import { render, screen } from '@testing-library/react'
    import { makeServer } from '../mocks/server'
    import HomePage from './HomePage'

    describe('HomePage', () => {
      let server: ReturnType<typeof makeServer>
      beforeEach(() => { server = makeServer({ environment: 'test' }) })
      afterEach(() => { server.shutdown() })

      it('renders without crash', async () => {
        render(<HomePage />) // com providers wrapper
        expect(screen.getByRole('main')).toBeInTheDocument()
      })
    })
    ```
  - [ ] Criar helper `src/test/render.tsx` com providers (ThemeProvider, ToastProvider, Router,
        i18next) para usar em todos os testes.

- [ ] **Task 4 — CI pipeline (AC: 2, 6)**
  - [ ] Criar/atualizar `.github/workflows/ci.yml` (ou equivalente Azure Pipelines):
    ```yaml
    - name: Install
      run: npm ci
    - name: Test
      run: npm test
    ```
  - [ ] Adicionar cache de `node_modules` (actions/cache ou equivalente).
  - [ ] Confirmar que `npm test` falha o job com exit code ≠ 0 em caso de falha.
  - [ ] **Atenção:** CI precisa de autenticação para `@celebration/react` via PAT (não `vsts-npm-auth`).
        Documentar a variável de ambiente necessária.

- [ ] **Task 5 — Cobertura em report (AC: 5)**
  - [ ] Confirmar que `npm run test:coverage` gera `coverage/` sem threshold (report only).
  - [ ] Adicionar `coverage/` ao `.gitignore`.

## Dev Notes

### Wrapper de providers para testes

Criar um helper reutilizável para não repetir providers em cada teste:

```tsx
// src/test/render.tsx
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider, ToastProvider } from '~/components/external'
import '../i18n' // inicializa i18next

const AllProviders = ({ children }) => (
  <ThemeProvider theme="bees">
    <ToastProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </ToastProvider>
  </ThemeProvider>
)

const customRender = (ui, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
```

### Mirage em testes

`makeServer({ environment: 'test' })` desativa logging e usa shorthands. Criar/derrubar em
`beforeEach`/`afterEach`. Permite testes de integração de componentes sem mocks manuais de fetch.

### CI auth para @celebration

O CI não pode usar `vsts-npm-auth` interativo. Usar:
```yaml
- name: Auth private registry
  run: |
    npm config set //pkgs.dev.azure.com/AMBEV-SA/_packaging/design-system/npm/registry/:_authToken ${{ secrets.AZURE_ARTIFACTS_PAT }}
```

### References

- [Source: epics.md Epic 1 — Story 1.8]
- [Source: prd.md §4.8 FR-16]
- [Source: .claude/rules/mirage-rule.md — reuso em testes]

## Dev Agent Record

### Agent Model Used

(a preencher)

### Completion Notes List

- `npm test` passando localmente: (sim/não)
- CI pipeline configurado: (sim/não)
- Auth CI documentada: (sim/não)

### File List

- `vitest.config.ts`
- `src/test/setup.ts`
- `src/test/render.tsx`
- `src/pages/HomePage.test.tsx`
- `package.json` (update scripts)
- `.github/workflows/ci.yml` (ou azure-pipelines.yml)
- `.gitignore` (coverage/)
