# Story 1.0: Setup de registry privado e autenticação

Status: ready-for-dev

## Story

Como desenvolvedor,
Quero o registry privado configurado e autenticado,
Para que eu consiga instalar `@celebration/react` e iniciar o projeto.

> **Por que esta story existe:** é o pré-requisito absoluto de tudo. Sem registry autenticado, nenhuma outra
> story pode instalar as dependências da stack-alvo. Deve ser concluída antes da Story 1.1.

## Acceptance Criteria

1. **Dado** o `.npmrc` na raiz com scopes `@cora` e `@celebration`,
   **Quando** verifico o `.gitignore`,
   **Então** `.npmrc` está listado (token nunca commitado).

2. **Dado** o `.npmrc` configurado,
   **Quando** rodo `npm run refreshVSToken` (Windows, requer `vsts-npm-auth` instalado globalmente),
   **Então** o token é injetado no `.npmrc` e o comando sai sem erro.

3. **Dado** o token injetado,
   **Quando** rodo `npm view @celebration/react@2.8.1 version`,
   **Então** o output mostra `2.8.1` (resolvido via feed privado `AMBEV-SA/_packaging/design-system`).

4. **Dado** o ambiente CI,
   **Então** existe documentação curta (comentário em `package.json` ou em `CLAUDE.md`) de como autenticar
   via PAT (variável de ambiente, sem `vsts-npm-auth` interativo).

5. **Dado** o script `refreshVSToken`,
   **Quando** rodo `npm run refreshVSToken`,
   **Então** o comando executa `vsts-npm-auth -config "./.npmrc"` conforme `package.json`.

## Tasks / Subtasks

- [ ] **Task 1 — Validar `.npmrc` e `.gitignore` (AC: 1)**
  - [ ] Confirmar que `.npmrc` existe na raiz com os dois scopes (já criado na sessão anterior).
  - [ ] Confirmar que `.npmrc` está no `.gitignore` (já adicionado).
  - [ ] Confirmar que `refreshVSToken` existe em `package.json` scripts.

- [ ] **Task 2 — Instalar pré-requisito do vsts-npm-auth (AC: 2)**
  - [ ] Verificar se `vsts-npm-auth` está instalado: `npm list -g vsts-npm-auth`.
  - [ ] Se ausente: `npm i -g vsts-npm-auth`.

- [ ] **Task 3 — Autenticar e validar resolução (AC: 2, 3)**
  - [ ] Rodar `npm run refreshVSToken`.
  - [ ] Rodar `npm view @celebration/react@2.8.1 version` — confirmar saída `2.8.1`.
  - [ ] Rodar `npm view @celebration/react@2.8.1 peerDependencies` — confirmar `react: ^19.2.3`.

- [ ] **Task 4 — Documentar autenticação CI (AC: 4)**
  - [ ] Registrar em `CLAUDE.md` (seção registry) a instrução para CI:
    usar PAT da service connection Azure DevOps via `npm config set //pkgs.dev.azure.com/.../:_authToken $PAT`.
  - [ ] Nota: PAT nunca commitado, deve ser injetado via variável de ambiente no pipeline.

## Dev Notes

### Arquivos já criados (verificar integridade)

- `.npmrc` (raiz, gitignored):
  ```ini
  registry=https://registry.npmjs.org/
  @cora:registry=https://pkgs.dev.azure.com/AMBEV-SA/AMBEVTECH-VENDAS-CORA-FUNDACAO/_packaging/cora-frontend/npm/registry/
  //pkgs.dev.azure.com/AMBEV-SA/AMBEVTECH-VENDAS-CORA-FUNDACAO/_packaging/cora-frontend/npm/registry/:always-auth=true
  @celebration:registry=https://pkgs.dev.azure.com/AMBEV-SA/_packaging/design-system/npm/registry/
  //pkgs.dev.azure.com/AMBEV-SA/_packaging/design-system/npm/registry/:always-auth=true
  ```

- `package.json` scripts já inclui:
  ```json
  "refreshVSToken": "vsts-npm-auth -config \"./.npmrc\""
  ```

### Versão exata a fixar

- `@celebration/react@2.8.1` — NÃO `latest` (tag `latest` do feed aponta para alpha `2.8.0-alpha.*`).
- Peers de 2.8.1: `react ^19.2.3`, `react-dom ^19.2.3`, `react-router >=6.0.0`.

### Segurança

- Token injeta apenas localmente. Nunca em git. Nunca em logs de CI.
- Em CI: usar service connection Azure DevOps ou secret variable com escopo de read para o feed.

### References

- [Source: CLAUDE.md §Registry e Segurança]
- [Source: .claude/skills/celebration-design-system/references/installation.md]
- [Source: epics.md Additional Requirements — registry]

## Dev Agent Record

### Agent Model Used

(a preencher pelo dev agent)

### Debug Log References

### Completion Notes List

- Token injetado via `refreshVSToken`: (sim/não)
- `npm view @celebration/react@2.8.1 version` saída: (a preencher)
- CI auth documentado em: (a preencher)

### File List

- `.npmrc` (verificado, não modificado)
- `package.json` (verificado, não modificado)
- `CLAUDE.md` (possível update — seção CI auth)
