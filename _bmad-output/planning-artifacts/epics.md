---
stepsCompleted: [step-01, step-02, step-03, step-04]
inputDocuments:
  - _bmad-output/planning-artifacts/prds/prd-discovery-ai-react-migration-2026-06-05/prd.md
  - docs/component-inventory-frontend.md
  - docs/api-contracts-frontend.md
  - docs/data-models-frontend.md
---

# Discovery AI Frontend (Migração React) - Epic Breakdown

## Overview

Decomposição de épicos e stories para a migração do frontend do Discovery AI (vanilla → React 19 +
Vite + TypeScript, i18n es/pt/en, design system `@celebration/react`, backend mockado com Mirage.js),
a partir do PRD `prd-discovery-ai-react-migration-2026-06-05` e dos docs brownfield de apoio
(inventário de componentes, contratos de API, modelo de dados). Sem documento de Arquitetura/UX
formal — a arquitetura-alvo está embutida no PRD.

## Requirements Inventory

### Functional Requirements

FR-1: Desenvolvedor pode rodar a aplicação React (React 19) em dev (HMR) e gerar build de produção
tipado via Vite; providers Celebration (`ThemeProvider theme="bees"`, `ToastProvider`) e CSS de assets
no entrypoint; Mirage não entra no bundle de produção.
FR-2: Código de feature consome componentes do Celebration via barrel `~/components/external` (nunca
`@celebration/react` direto); componente ausente é adicionado ao barrel antes do uso.
FR-3: Navegação entre telas via `react-router` (>=6), preservando as rotas funcionais do protótipo
(home, products, product/:id, audience, persona view/edit, stakeholder view/edit, discovery, synthesis,
interview, interview-session).
FR-4: Usuário alterna idioma (es/pt/en) em runtime via seletor no header, sem reload; escolha persiste
em localStorage.
FR-5: Todas as strings de UI externalizadas (sem hardcode em feature); cada chave presente nos 3
catálogos; datas/números formatados conforme idioma ativo.
FR-6: UI construída com componentes `Clb*` onde há equivalente (sem HTML cru); forms seguem o padrão
de erro do DS (`error`/`helperText`/`showHelperText`).
FR-7: Estilos usam tokens CSS (`var(--...)`), sem valores hardcoded (auditável por `celebration-css-var-audit`).
FR-8: Servidor mock Mirage roda só em dev (`import.meta.env.DEV` + import dinâmico), interceptando HTTP
transparentemente; `urlPrefix` = `VITE_API_URL`; ausente no build de produção.
FR-9: Mock cobre todo o contrato consumido: `/api/config`, `/api/discovery/kickoff|status|resume|outputs`,
`/api/discovery/runs/:runId[/artifacts][/evidence]`, coleções `/api/local/*` (8); 7 outputs estruturados;
máquina de estados do Workflow de Agentes; seeds equivalentes; shapes espelhados (incl. polimórficos).
FR-10: Usuário acessa a Home (painel assistente + discoveries recentes) e navega/busca/filtra Produtos e
Discoveries; favorita Produtos (`product-favorites-by-user`) e Discoveries (`favorite-discovery-ids`),
persistentes; stats de produto exibidos.
FR-11: Usuário vê o detalhe do Produto e gerencia o Público (criar/editar/visualizar Personas e
Stakeholders), com persistência no mock.
FR-12: Usuário preenche o Fluxo de Novo Discovery (Setup → Participantes → CSD → Metodologia) e cria um
Discovery; campos obrigatórios validados; submit dispara kickoff (mock), faz polling e abre o Cockpit no
sucesso; em erro, preserva dados e oferece retry.
FR-13: O fluxo full-page rola internamente, sem rolar a página de fundo.
FR-14: Usuário acompanha o Estado do Workflow (polling) e atua nos Gates Humanos (resume avança estado;
upload de evidência → `INSIGHT_REVIEW_PENDING`); Cockpit inclui Chat do Discovery e Modal de entrada de método.
FR-15: Usuário acessa a Síntese e as telas de entrevista (interview = recrutamento/planejamento;
interview-session = insights/transcrição + Modal de gravação), simuladas em paridade com o protótipo.
FR-16: Suíte de testes (unit + component) roda local e no CI, bloqueando merge em falha; componentes-chave
e fluxos críticos cobertos; meta de cobertura configurada (report até confirmar meta).

### NonFunctional Requirements

NFR-1 (Acessibilidade): herdar a11y nativa do Celebration (ARIA, teclado, leitor de tela); não regredir.
NFR-2 (Performance): carregamento inicial ≤ protótipo (observacional, não-bloqueante); code-splitting por
rota; Mirage tree-shaken em produção.
NFR-3 (i18n): 3 idiomas obrigatórios; zero strings hardcoded; formatação local de data/número.
NFR-4 (Manutenibilidade): TypeScript estrito; componentização por feature; sem estado global mutável estilo `app.js`.
NFR-5 (Segurança): React escapa conteúdo por padrão (mantém postura anti-XSS do protótipo).
NFR-6 (Privacidade/Guardrail): Mirage nunca em produção (evita vazar dados falsos).
NFR-7 (Dependências): fixar `@celebration/react@2.8.1` exato (tag `latest` aponta para alpha); peers
React 19.2.3+, react-dom 19.2.3+, react-router >=6.

### Additional Requirements

- Registry privado Azure Artifacts: `.npmrc` (scopes `@cora`, `@celebration`), gitignored; script
  `refreshVSToken` (`vsts-npm-auth`). Em CI, autenticar via PAT (env/service connection), não o interativo.
- `react-router` (>=6, via `react-router-dom`) substitui o hash routing legado; decidir redirect de URLs hash.
- Forms com `react-hook-form` + `zod` (padrão do DS).
- Portar/escrever `.claude/rules/components-rule.md` neste repo (não existe — veio do Cora Prices).
- Camada `services/http` desacoplada do Mirage (features não conhecem o mock); contrato espelha `server.js`.
- Stack de testes: Vitest + React Testing Library (Mirage reaproveitado em testes de fluxo).

### UX Design Requirements

Sem documento de UX formal. Preocupações de UX estão embutidas nos FRs/NFRs: design system (FR-6/FR-7),
i18n (FR-4/FR-5/NFR-3), acessibilidade (NFR-1), e no mapeamento protótipo→Celebration do PRD §4.3.
Inventário de paridade visual/comportamental = `docs/component-inventory-frontend.md`.

### FR Coverage Map

- FR-1: Epic 1 — Bootstrap React/Vite, providers, build.
- FR-2: Epic 1 — Barrel `~/components/external` + regra de import.
- FR-3: Epic 1 — Roteamento react-router e rotas do protótipo.
- FR-4: Epic 1 — Troca de idioma em runtime (seletor + persistência).
- FR-5: Epic 1 (base) / Epic 5 (verificação) — Externalização de strings nos 3 idiomas.
- FR-6: Epic 1 (base, aplicado em todos) — UI com componentes Celebration.
- FR-7: Epic 1 (base, aplicado em todos) — Tokens de design.
- FR-8: Epic 1 — Servidor mock Mirage dev-only (infra base).
- FR-9: Epic 1 (base/config) + Epic 2 (rotas produtos/discoveries/audience/local) + Epic 3 (kickoff)
  + Epic 4 (status/resume/outputs/evidence/runs/artifacts) — cobertura do contrato distribuída por domínio.
- FR-10: Epic 2 — Home + repositório + favoritos.
- FR-11: Epic 2 — Detalhe de produto + Público (personas/stakeholders).
- FR-12: Epic 3 — Criação de Discovery (fluxo full-page + kickoff/polling).
- FR-13: Epic 3 — Rolagem interna do full-page.
- FR-14: Epic 4 — Cockpit + Workflow + Gates Humanos + Chat + evidência.
- FR-15: Epic 4 — Síntese + entrevistas (simuladas).
- FR-16: Epic 1 (infra Vitest/RTL/CI + testes por feature) + Epic 5 (gate de cobertura).

## Epic List

### Epic 1: Fundação & App Shell Navegável
Entrega uma aplicação React 19 + Vite + TS que **roda e é demonstrável**: layout Celebration
(header/sidebar) temado, seletor de idioma (es/pt/en) funcionando, roteamento entre as telas do
protótipo, base do mock Mirage (dev-only), uma tela real fina (Home read-only do mock) e
infraestrutura de testes (Vitest/RTL no CI). Estabelece as convenções (barrel `~/components/external`,
tokens, forms) que todos os épicos seguem. Ao final, é possível abrir o app, ver o shell temado com
dados reais do mock, trocar idioma e navegar — um "walking skeleton".

**Ordem obrigatória das primeiras stories (de-risking):**
- **Story 1.0 — Setup de registry & auth:** `.npmrc` (scopes `@cora`/`@celebration`, gitignored),
  script `refreshVSToken`, `npm install` resolve `@celebration/react@2.8.1`. Pré-requisito de tudo.
- **Story 1.1 — Spike celebration + React 19 (gate go/no-go):** validar em **runtime** (não só peer)
  que o DS renderiza/funciona em React 19.2.3. Saída: go (segue) ou no-go (fallback React 18 + revisar PRD).
- Demais stories do Epic 1 só após 1.1 passar.

**FRs covered:** FR-1, FR-2, FR-3, FR-4, FR-5, FR-6, FR-7, FR-8, FR-9 (base/config), FR-16 (infra).

### Epic 2: Repositório, Produtos & Público
Usuário navega a Home (painel + discoveries recentes), busca/filtra/favorita Produtos e Discoveries,
abre o detalhe de um Produto e gerencia o Público (criar/editar/visualizar Personas e Stakeholders),
tudo persistido no mock.
**FRs covered:** FR-10, FR-11, FR-9 (rotas produtos/discoveries/audience/local).

### Epic 3: Criação de Discovery
Usuário cria um Discovery pelo Fluxo de Novo Discovery (Setup → Participantes → CSD → Metodologia) com
validação, rolagem interna do full-page, kickoff (mock) + polling, preservação de dados e retry em erro;
o Discovery passa a aparecer no Repositório.
**FRs covered:** FR-12, FR-13, FR-9 (kickoff).

### Epic 4: Cockpit, Workflow de Agentes & Entrevistas
Usuário acompanha o Estado do Workflow (polling), atua nos Gates Humanos (resume/aprovar, anexar
evidência), usa o Chat do Discovery e o Modal de entrada de método, e acessa a Síntese e as telas de
entrevista (recrutamento, sessão/transcrição, Modal de gravação) simuladas em paridade.
**FRs covered:** FR-14, FR-15, FR-9 (status/resume/outputs/evidence/runs/artifacts).

### Epic 5: Fechamento de Qualidade & Paridade
Fecha o que é inerentemente transversal e final (a11y, i18n-coverage e a maioria dos testes são
**Definition of Done recorrente por épico**, ver abaixo — não acumulados aqui): ativar o **gate de
cobertura** no CI (após meta confirmada), rodar o **checklist de paridade por tela** (critério da SM-1)
contra `docs/component-inventory-frontend.md`, e a checagem observacional de performance (SM-5, não-bloqueante).
**FRs covered:** FR-16 (gate de cobertura final); SM-1 (paridade); NFR-2 (perf observacional). A11y (NFR-1)
e i18n-coverage (FR-5/NFR-3) verificados continuamente via DoD, com auditoria final aqui.

---

### Definition of Done (recorrente — todo épico de feature)
Aplicada a cada story de tela/feature dos Epics 2–4 (evita acumular dívida no fim):
- **Paridade:** AC explícito listando os elementos/seções do inventário daquela tela que devem existir
  (`docs/component-inventory-frontend.md`).
- **i18n:** strings da tela nos 3 catálogos (es/pt/en); zero hardcode. `[ASSUMPTION]` es/en pode entrar
  como placeholder até dono de conteúdo definido (Open Q6).
- **Design System:** componentes `Clb*` via barrel; tokens, sem hardcode.
- **Testes:** testes unit/component da feature (a suíte verde já bloqueia merge desde o Epic 1).
- **A11y:** não regredir a acessibilidade nativa do Celebration (teclado/ARIA).
- **Robustez:** toda tela trata **empty state**, **404/not-found** (deep-link com id inexistente → estado de
  erro, não crash) e, onde há polling/IO, **timeout/erro de rede** — sem deixar a UI quebrada.

### Itens em aberto a resolver durante a execução
- **Open Q6:** nomear dono do conteúdo de tradução es/en (senão es/en ficam placeholder no MVP).
- **`research-activity-users`:** definir escopo de uso na UI (hoje vago) — refinar ao detalhar Epic 2.
- **Open Q4:** redirect de URLs hash legadas — decidir no Epic 1 (roteamento).
- **Open Q8:** confirmar pin `@celebration/react@2.8.1` (não `latest`) — fechado na Story 1.0.

---

## Epic 1: Fundação & App Shell Navegável

Aplicação React 19 + Vite + TS rodando e demonstrável, com convenções estabelecidas. Stories 1.0 e 1.1 são gates de de-risking e devem vir primeiro.

### Story 1.0: Setup de registry privado e autenticação

Como desenvolvedor,
Quero o registry privado configurado e autenticado,
Para que eu consiga instalar `@celebration/react` e iniciar o projeto.

**Critérios de Aceite:**

**Dado** o `.npmrc` com scopes `@cora` e `@celebration` na raiz (gitignored)
**Quando** rodo `npm run refreshVSToken` e depois `npm install`
**Então** `@celebration/react@2.8.1` (versão stable exata, não `latest`) é resolvido e instalado
**E** o token nunca é commitado (`.npmrc` no `.gitignore`)
**E** documentação curta de como autenticar em CI via PAT é registrada.

### Story 1.1: Spike celebration + React 19 (gate go/no-go)

Como time,
Quero validar em runtime que o design system funciona em React 19.2.3,
Para que confirmemos a stack antes de construir em cima.

**Critérios de Aceite:**

**Dado** um app mínimo React 19.2.3 + Vite com `ThemeProvider theme="bees"` e `ToastProvider`
**Quando** renderizo componentes `Clb*` (Button, Modal, Table, Input) e disparo `useToast`
**Então** todos renderizam e funcionam sem erros/warnings de incompatibilidade
**E** o spike é timeboxed (máx. 1 dia); **critério de no-go objetivo:** qualquer componente `Clb*` que
não renderize/funcione, ou erro de peer/runtime irreparável em React 19.2.3
**E** a decisão é registrada: **go** (segue React 19) ou **no-go** (fallback React 18 + revisar PRD)
**E** nenhuma outra story do Epic 1 começa antes deste gate passar.

### Story 1.2: Scaffold Vite + React 19 + TS com providers e tokens

Como desenvolvedor,
Quero a base do projeto criada com providers e tokens do Celebration,
Para que toda feature parta de uma fundação consistente.

**Critérios de Aceite:**

**Dado** o spike aprovado (1.1 = go)
**Quando** rodo `npm run dev`
**Então** a SPA sobe em React 19 com HMR, `@celebration/assets/src/main.css` importado uma vez, providers no root
**E** `npm run build` gera bundle de produção tipado (TS estrito) sem erros
**E** valores de estilo usam tokens CSS (`var(--...)`), sem hardcode.

### Story 1.3: Barrel de componentes e regra de import

Como desenvolvedor,
Quero consumir o Celebration via barrel `~/components/external`,
Para que o acoplamento ao pacote fique isolado e padronizado.

**Critérios de Aceite:**

**Dado** o barrel `src/components/external/index.tsx`
**Quando** uma feature importa um componente `Clb*`
**Então** o import é via `~/components/external`, nunca de `@celebration/react` direto
**E** uma regra de lint falha o build em import direto de `@celebration/react` em código de feature
**E** `.claude/rules/components-rule.md` é portado/escrito neste repo.

### Story 1.4: Roteamento SPA e rotas do protótipo

Como usuário,
Quero navegar entre as telas via rotas,
Para que eu acesse cada área do app.

**Critérios de Aceite:**

**Dado** `react-router` (>=6) configurado
**Quando** acesso cada rota (home, products, product/:id, audience, persona view/edit, stakeholder view/edit, discovery, synthesis, interview, interview-session)
**Então** a rota resolve para a tela correspondente (placeholder onde a feature ainda não existe)
**E** a decisão sobre URLs hash legadas (redirect ou descontinuar — Open Q4) é registrada e implementada.

### Story 1.5: Internacionalização (es/pt/en) com seletor

Como usuário,
Quero trocar o idioma da interface,
Para que eu use o app no meu idioma.

**Critérios de Aceite:**

**Dado** react-i18next + i18next com catálogos es/pt/en e seletor no header
**Quando** seleciono outro idioma
**Então** a UI re-renderiza imediatamente (sem reload) e a escolha persiste em localStorage
**E** a detecção inicial segue localStorage → navegador → default pt-BR
**E** datas/números formatam conforme o idioma ativo
**E** chave de tradução ausente exibe fallback legível (não a chave crua nem tela quebrada); suporte a
pseudo-localização para testar layout sem conteúdo final.

### Story 1.6: Base do mock Mirage e camada services/http

Como desenvolvedor,
Quero o Mirage interceptando HTTP só em dev,
Para que a app rode sem backend real e sem vazar mock em produção.

**Critérios de Aceite:**

**Dado** `makeServer()` inicializado em `main.tsx` atrás de `if (import.meta.env.DEV)` com import dinâmico
**Quando** rodo o build de produção
**Então** nenhum código do Mirage/faker entra no bundle
**E** `services/http` chama `VITE_API_URL` (= `urlPrefix` do Mirage) sem conhecer o mock
**E** a rota `/api/config` do mock retorna flags/intervalos compatíveis com o `server.js` atual.

### Story 1.7: Home read-only a partir do mock

Como usuário,
Quero abrir a Home e ver dados reais do mock,
Para que o app demonstre valor end-to-end desde o início.

**Critérios de Aceite:**

**Dado** o mock servindo produtos/discoveries de seed
**Quando** abro a Home
**Então** vejo cards de Discoveries recentes renderizados a partir do mock (read-only)
**E** o layout usa componentes Celebration e respeita o idioma ativo.

### Story 1.8: Infraestrutura de testes (Vitest + RTL) no CI

Como desenvolvedor,
Quero a suíte de testes rodando no CI,
Para que regressões sejam bloqueadas desde o início.

**Critérios de Aceite:**

**Dado** Vitest + React Testing Library configurados
**Quando** rodo `npm test` local ou o CI roda em push/PR
**Então** a suíte executa e uma falha bloqueia o merge
**E** existe ao menos um teste de render para o shell/Home
**E** a cobertura roda em modo report (gate de cobertura ativado depois — Epic 5).

### Story 1.9: Tipos de contrato compartilhados (TS)

Como desenvolvedor,
Quero tipos TypeScript do contrato de dados como fonte única,
Para que `services/http` e o mock Mirage não divirjam.

**Critérios de Aceite:**

**Dado** os tipos de contrato (Product, Discovery, Run/estado, outputs, coleções) num módulo compartilhado
**Quando** `services/http` e as factories/serializers do Mirage são escritos
**Então** ambos consomem os mesmos tipos (fonte única), sem duplicação de shape
**E** mudança de contrato quebra o type-check em ambos os lados (detecção de drift em compile-time).

## Epic 2: Repositório, Produtos & Público

Navegação do repositório e gestão de Público, persistidos no mock. A Definition of Done recorrente (paridade/i18n/DS/testes/a11y) aplica-se a cada story.

### Story 2.1: Rotas de mock para produtos, discoveries e público

Como desenvolvedor,
Quero as rotas de mock dos recursos do repositório,
Para que as telas do Epic 2 consumam dados realistas.

**Critérios de Aceite:**

**Dado** factories/fixtures Mirage para products, discoveries, created-discoveries, favorites e product-audience
**Quando** as features chamam `/api/local/*` (GET/PUT/POST/DELETE)
**Então** os shapes espelham os seeds atuais do `server.js`, incluindo casos polimórficos (`artifacts` string|obj, `status`≠`current_state`)
**E** seeds populam produtos e discoveries equivalentes ao protótipo.

### Story 2.2: Home completa e favoritar Discoveries

Como usuário,
Quero a Home com painel assistente e discoveries recentes, e favoritar discoveries,
Para que eu retome meu trabalho rapidamente.

**Critérios de Aceite:**

**Dado** a Home carregada do mock
**Quando** favorito um Discovery
**Então** o favorito persiste (coleção `favorite-discovery-ids`) e reflete ao recarregar
**E** os elementos do inventário da Home (painel + cards recentes) estão presentes (paridade).

### Story 2.3: Catálogo de produtos com busca, filtro e favoritos

Como usuário,
Quero buscar, agrupar e favoritar produtos,
Para que eu encontre produtos relevantes.

**Critérios de Aceite:**

**Dado** a lista de produtos do mock
**Quando** busco por texto e agrupo por Torre/Tribo
**Então** a lista filtra/agrupa corretamente e exibe stats (discoveryCount/doneCount/progressCount)
**E** favoritar produto persiste em `product-favorites-by-user` por `profileId`.

### Story 2.4: Detalhe do produto

Como usuário,
Quero ver o detalhe completo de um produto,
Para que eu entenda seu contexto e discoveries.

**Critérios de Aceite:**

**Dado** um produto selecionado
**Quando** abro seu detalhe
**Então** vejo contexto, métricas, equipe, artefatos e discoveries do produto (paridade com inventário)
**E** `artifacts` renderiza tanto no formato string quanto objeto.

### Story 2.5: Visualização do Público (personas e stakeholders)

Como usuário,
Quero listar e visualizar personas e stakeholders de um produto,
Para que eu conheça o Público.

**Critérios de Aceite:**

**Dado** um produto com Público no mock
**Quando** abro Público e seleciono uma persona ou stakeholder
**Então** vejo a listagem e o detalhe (view) com os campos do inventário.

### Story 2.6: Criar e editar persona/stakeholder

Como usuário,
Quero criar e editar personas e stakeholders,
Para que eu mantenha o Público atualizado.

**Critérios de Aceite:**

**Dado** o formulário (react-hook-form + zod, componentes Celebration)
**Quando** crio ou edito e salvo
**Então** a validação bloqueia submit inválido e, válido, persiste no mock (`product-audience-by-product`)
**E** a mudança aparece na listagem do Público ao voltar.

## Epic 3: Criação de Discovery

Fluxo full-page de criação com kickoff/polling no mock.

### Story 3.1: Rotas de mock para kickoff e status

Como desenvolvedor,
Quero as rotas de kickoff/status no mock,
Para que o fluxo de criação funcione sem backend.

**Critérios de Aceite:**

**Dado** o Mirage com `/api/discovery/kickoff` e `/api/discovery/status/:runId`
**Quando** o cliente dispara o kickoff
**Então** recebe `run_id` e estado inicial; o status evolui conforme a máquina de estados
**E** os shapes espelham o contrato atual.

### Story 3.2: Shell do fluxo full-page com rolagem interna

Como usuário,
Quero o fluxo de novo discovery em full-page,
Para que eu crie um discovery sem sair do contexto.

**Critérios de Aceite:**

**Dado** `ClbFullPageFlow` aberto a partir do detalhe do produto
**Quando** rolo o conteúdo do fluxo
**Então** o conteúdo rola internamente e a página de fundo permanece fixa
**E** as 4 etapas (Setup, Participantes, CSD, Metodologia) são navegáveis.

### Story 3.3: Etapas e validação do formulário

Como usuário,
Quero preencher as etapas com validação,
Para que eu crie um discovery bem formado.

**Critérios de Aceite:**

**Dado** os campos das 4 etapas (validação zod)
**Quando** tento avançar sem título/problema/objetivo
**Então** a validação bloqueia e mostra erro no padrão do DS
**E** o CSD permite adicionar/remover linhas e a Metodologia é selecionável.

### Story 3.4: Submeter, processar e abrir o Cockpit

Como usuário,
Quero criar o discovery e acompanhar o processamento,
Para que eu chegue ao Cockpit ao concluir.

**Critérios de Aceite:**

**Dado** o formulário válido
**Quando** clico em "Criar discovery"
**Então** o kickoff é disparado, o polling acompanha o status e o Cockpit abre no estado final de sucesso
**E** o novo Discovery aparece no Repositório
**E** se o polling exceder o timeout (de `/api/config`) ou retornar formato inesperado, a UI mostra estado
de erro acionável (sem travar em loading infinito).

### Story 3.5: Tratamento de erro com preservação e retry

Como usuário,
Quero não perder meu preenchimento em caso de falha,
Para que eu consiga tentar de novo.

**Critérios de Aceite:**

**Dado** uma falha no kickoff/polling (mock simulando erro)
**Quando** o erro ocorre
**Então** o formulário preserva todos os dados preenchidos e oferece retry
**E** uma mensagem de erro clara é exibida (ClbToast/ClbAlert).

## Epic 4: Cockpit, Workflow de Agentes & Entrevistas

Acompanhamento do workflow com gates humanos, mais síntese e entrevistas simuladas.

### Story 4.1: Rotas de mock do workflow e máquina de estados

Como desenvolvedor,
Quero as rotas de status/resume/outputs/evidence/runs/artifacts,
Para que o Cockpit reflita o workflow de agentes.

**Critérios de Aceite:**

**Dado** o Mirage implementando a máquina de estados (DOR_ANALYZING → ... → COMPLETED)
**Quando** chamo status/resume/evidence
**Então** as transições seguem o protótipo (resume avança; evidence → INSIGHT_REVIEW_PENDING)
**E** `/runs/:runId/artifacts` e os 7 outputs estruturados são retornados
**E** `runId` inexistente retorna 404 e resume em estado terminal (COMPLETED) é rejeitado (no-op/erro claro).

### Story 4.2: Cockpit do Discovery (visão geral)

Como usuário,
Quero acompanhar o Discovery no Cockpit,
Para que eu entenda seu estado e conteúdo.

**Critérios de Aceite:**

**Dado** um Discovery em andamento
**Quando** abro o Cockpit
**Então** vejo readiness/status, problema/objetivo, insights, metodologias e evidências (paridade com inventário)
**E** insights renderizam com conteúdo escapado (sem XSS).

### Story 4.3: Acompanhamento de estado e gates humanos

Como usuário,
Quero ver o estado do workflow e atuar nos gates,
Para que eu avance o Discovery.

**Critérios de Aceite:**

**Dado** o Cockpit com polling do estado (intervalo de `/api/config`)
**Quando** executo a ação de resume/aprovar em um Gate Humano
**Então** o estado avança conforme a máquina de estados e a UI reflete a transição
**E** `runId` 404 ou resume em estado terminal exibe erro acionável (sem crash).

### Story 4.4: Upload de evidência

Como usuário,
Quero anexar evidência quando solicitado,
Para que o workflow continue.

**Critérios de Aceite:**

**Dado** o estado EVIDENCE_UPLOAD_PENDING
**Quando** anexo evidência (ClbInputUpload)
**Então** a evidência é registrada no mock e o estado transiciona para INSIGHT_REVIEW_PENDING
**E** arquivo de tipo inválido ou falha no upload mostra erro e não corrompe o estado (sem transição parcial).

### Story 4.5: Chat do Discovery e Modal de entrada de método

Como usuário,
Quero anotar/conversar e adicionar conteúdo a um método,
Para que eu registre contexto no Discovery.

**Critérios de Aceite:**

**Dado** o Cockpit aberto
**Quando** uso o Chat do Discovery e o Modal de entrada de método (texto/arquivos)
**Então** as entradas são mantidas localmente em paridade com o protótipo (sem backend real).

### Story 4.6: Página de Síntese

Como usuário,
Quero ver a Síntese do Discovery,
Para que eu consolide insights e padrões.

**Critérios de Aceite:**

**Dado** o payload de síntese (mock)
**Quando** abro a Síntese
**Então** insights/padrões renderizam a partir do payload (paridade com inventário).

### Story 4.7: Entrevistas (planejamento e sessão)

> `[NOTE FOR PM]` **Paridade mínima** — entrevistas são simulação de baixo valor/alto esforço no MVP
> (matriz 53). Candidata a corte ou redução de escopo se o prazo apertar.

Como usuário,
Quero planejar e revisar entrevistas,
Para que eu conduza a pesquisa (simulada).

**Critérios de Aceite:**

**Dado** as telas interview e interview-session
**Quando** acesso recrutamento/planejamento e depois a sessão
**Então** vejo seleção de participantes (interview) e insights/transcrição + Modal de gravação (interview-session)
**E** o conteúdo e as interações são simulados em paridade com o protótipo.

## Epic 5: Fechamento de Qualidade & Paridade

Auditoria e gates finais. (a11y/i18n/testes já são DoD por épico.)

### Story 5.1: Ativar gate de cobertura no CI

Como time,
Quero o gate de cobertura ativo no CI,
Para que a qualidade de testes seja mantida.

**Critérios de Aceite:**

**Dado** a meta de cobertura confirmada
**Quando** o CI roda
**Então** o build falha se a cobertura ficar abaixo da meta
**E** a meta acordada está documentada.

### Story 5.2: Auditoria de cobertura de i18n

Como time,
Quero garantir que não há strings hardcoded,
Para que os 3 idiomas fiquem completos.

**Critérios de Aceite:**

**Dado** a varredura de strings de UI
**Quando** audito as features
**Então** toda string visível tem chave nos 3 catálogos (es/pt/en) e nenhuma é hardcoded
**E** chaves faltantes são detectáveis (lint/CI ou fallback visível).

### Story 5.3: Passagem de acessibilidade

Como time,
Quero validar a acessibilidade,
Para que não regridamos a a11y do Celebration.

**Critérios de Aceite:**

**Dado** as telas principais
**Quando** rodo verificação de a11y (teclado, ARIA, leitor de tela)
**Então** não há regressão frente ao comportamento nativo do Celebration
**E** problemas encontrados viram itens de correção.

### Story 5.4: Checklist de paridade por tela

Como time,
Quero verificar paridade contra o inventário,
Para que confirmemos 100% das telas reconstruídas (SM-1).

**Critérios de Aceite:**

**Dado** o inventário `docs/component-inventory-frontend.md`
**Quando** percorro cada tela/modal/rota
**Então** cada item tem: rota resolve + elementos presentes + interações principais funcionando contra o mock
**E** divergências viram itens de ajuste antes do fechamento.

### Story 5.5: Checagem observacional de performance

Como time,
Quero medir o carregamento inicial,
Para que não regridamos frente ao protótipo (não-bloqueante).

**Critérios de Aceite:**

**Dado** o build de produção
**Quando** rodo Lighthouse na Home
**Então** o tempo de carregamento inicial é registrado e comparado ao protótipo
**E** o resultado é observacional (não bloqueia release).
