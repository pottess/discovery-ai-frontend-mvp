---
title: Migração Frontend Discovery AI → React + Vite + Celebration
status: final
created: 2026-06-05
updated: 2026-06-05
---

# PRD: Migração do Frontend Discovery AI para React

*Working title — confirmar.*

## 0. Propósito do Documento

PRD para **PM, time de frontend e workflows downstream** (UX, arquitetura, épicos/stories) do BMad.
Descreve a **re-plataforma do frontend** do Discovery AI: do protótipo vanilla (HTML/CSS/`app.js`
de 15.5k linhas) para uma aplicação **React 19 + Vite + TypeScript**, com **internacionalização
(es/pt/en)**, usando o **design system `@celebration/react`** e um **backend mockado com mirage.js**.

Escopo é **somente frontend**. Backend (contrato de output dos agentes), segurança e persistência
durável ficam em PRDs separados (ver riscos R1–R9 em [`/CLAUDE.md` §12](../../../../CLAUDE.md) e a
doc brownfield em [`docs/index.md`](../../../../docs/index.md)). Este PRD **constrói sobre** essa
documentação; não a duplica. O protótipo vanilla atual é tratado como **spec visual e comportamental**
(paridade de telas e fluxos), não como código a preservar (estratégia big-bang). Vocabulário ancorado
no Glossário (§3); features agrupadas com FRs aninhados e numerados globalmente; suposições marcadas
inline com `[ASSUMPTION]` e indexadas em §9.

## 1. Visão

O Discovery AI é uma plataforma de discovery de produto dirigida por agentes de IA, hoje validada
como protótipo de alta fidelidade feito pelo time de design. O protótipo provou o fluxo, mas o
`app.js` monolítico (estado global mutável, markup inline, zero testes) não sustenta a evolução do
MVP. Esta migração converte o protótipo em uma base de frontend **componentizada, tipada e
internacionalizada**, alinhada ao design system corporativo da Ambev (Celebration) e ao padrão
arquitetural do projeto Cora Prices.

O resultado é uma SPA React que entrega **paridade funcional** com o protótipo atual (repositório de
produtos, detalhe de produto, gestão de público, cockpit de discovery, fluxo de novo discovery,
síntese e entrevistas), agora com **seleção de idioma (espanhol, português, inglês)**, componentes
acessíveis do Celebration e uma **camada de dados mockada (mirage.js)** que torna o frontend
desenvolvível e demonstrável sem depender do backend real.

Por que importa: destrava a evolução do MVP com uma base manutenível, prepara o produto para
audiências multilíngues (LATAM + global), e padroniza a UI no design system corporativo — reduzindo
divergência visual e custo de manutenção. A migração também isola o frontend do backend instável via
contrato mockado, permitindo trabalho paralelo dos times.

## 2. Usuário-Alvo

### 2.1 Jobs To Be Done

**Usuário final do produto (designer / PM de produto):**
- Navegar o repositório de produtos e discoveries e retomar trabalho rapidamente.
- Iniciar e acompanhar um discovery dirigido por agentes, aprovando gates humanos.
- Operar a interface no seu idioma (es/pt/en).

**Consumidores deste PRD (time de engenharia / downstream BMad):**
- Reconstruir cada tela do protótipo em React com paridade comportamental.
- Ter um contrato de dados estável (mock) para desenvolver sem o backend real.
- Herdar uma base padronizada (design system, i18n, estrutura) para features futuras.

### 2.2 Não-Usuários (v1)

- Usuários externos/clientes finais (o MVP é interno).
- Consumidores do assistente conversacional de pesquisa (futuro, fora do MVP).
- Integrações externas (Teams, Jira, etc.) — simuladas, não atendidas nesta migração.

### 2.3 Jornadas-Chave do Usuário

Ferramenta interna com papel de operador único (designer/PM). UJs em escopo reduzido — narram a
operação real, sem persona section separada.

- **UJ-1. Mariana inicia um discovery no idioma dela.**
  - **Persona + contexto:** Mariana, designer de produto na torre Comercial, navega em espanhol.
  - **Entry state:** app aberto, idioma trocado para Espanhol no header (persistido).
  - **Path:** abre `#products` → seleciona um produto → "Novo Discovery" → preenche Setup
    (título, problema, objetivo), Participantes, CSD, Metodologia → "Criar discovery".
  - **Climax:** o fluxo full-page mostra estado de processamento dos agentes; ao concluir, abre o
    cockpit do discovery com os outputs estruturados.
  - **Resolution:** discovery criado e visível no repositório; Mariana acompanha os gates humanos.
  - **Edge case:** se o backend (mock) falhar, o formulário preserva os dados e oferece retry.

- **UJ-2. Bruno revisa um gate humano do workflow de agentes.**
  - **Persona + contexto:** Bruno, PM, acompanha um discovery em andamento.
  - **Entry state:** cockpit do discovery aberto, estado `RESEARCH_APPROVAL_PENDING`.
  - **Path:** lê o output do agente → aprova/continua o gate → o estado avança.
  - **Climax:** o painel reflete a transição de estado (ex.: para `EVIDENCE_UPLOAD_PENDING`).
  - **Resolution:** workflow segue; Bruno anexa evidência quando solicitado.

- **UJ-3. Carla gerencia o Público de um produto.**
  - **Persona + contexto:** Carla, PM, precisa manter personas e stakeholders atualizados.
  - **Entry state:** detalhe do Produto aberto.
  - **Path:** abre "Público" → cria ou edita uma Persona/Stakeholder no formulário → salva.
  - **Climax:** a mudança aparece no Público do Produto (persistida no mock).
  - **Resolution:** Público atualizado; volta ao detalhe do Produto.

## 3. Glossário

Termos usados **verbatim** em FRs, UJs e SMs. Sem sinônimos no PRD.

- **Discovery** — Investigação de produto dirigida por agentes, vinculada a um Produto. Possui
  **Estado do Workflow** (ver Workflow de Agentes), **Status de Progresso** (texto, ex.: "1/3
  concluídos" — distinto do Estado do Workflow), outputs estruturados e gates humanos.
- **Produto** — Item do repositório (ex.: Cora Preços) com metadados, métricas, equipe, artefatos,
  personas e stakeholders.
- **Repositório** — Catálogo navegável de Produtos e Discoveries (Home + lista).
- **Home** — Landing do Repositório: painel assistente e cards de Discoveries recentes.
- **Cockpit do Discovery** — Tela de acompanhamento de um Discovery (readiness, insights,
  metodologias, evidências, Estado do Workflow, Chat do Discovery).
- **Chat do Discovery** — Painel de conversa/anotações dentro do Cockpit (local, sem backend real no MVP).
- **Workflow de Agentes** — Sequência de estados do processamento de discovery com gates humanos:
  `DOR_ANALYZING → RESEARCH_APPROVAL_PENDING → EVIDENCE_UPLOAD_PENDING → INSIGHT_REVIEW_PENDING →
  OPPORTUNITY_REVIEW_PENDING → COMPLETED`.
- **Gate Humano** — Ponto de aprovação humana entre estados do Workflow de Agentes.
- **CSD** — Certezas, Suposições e Dúvidas capturadas no fluxo de novo discovery.
- **Metodologia** — Pacote de discovery selecionável (ex.: Discovery Otimizado, Discovery Completo).
- **Público** — Conjunto de Personas e Stakeholders de um Produto.
- **Fluxo de Novo Discovery** — Fluxo full-page de criação: Setup → Participantes → CSD → Metodologia.
- **Síntese** — Tela de consolidação de insights/padrões do Discovery.
- **Design System (Celebration)** — `@celebration/react`, biblioteca de componentes `Clb*` da Ambev.
- **Camada de Mock (Mirage)** — Backend simulado com mirage.js, ativo só em desenvolvimento.
- **Idioma** — Língua da interface: Espanhol, Português ou Inglês.

## 4. Features

### 4.1 Fundação Técnica (Scaffold React + Vite + TypeScript)

**Description:** Nova base de aplicação criada com Vite (última versão) + React 19 + TypeScript,
substituindo `index.html`/`app.js`/`styles.css`. Inclui providers do Celebration (`ThemeProvider
theme="bees"`, `ToastProvider`), import dos assets/tokens, estrutura de pastas por feature, barrel
`~/components/external` para reexport de componentes `Clb*`, roteamento com `react-router-dom`, e
camada `services/http` para chamadas (interceptada transparentemente pelo Mirage em dev). Realiza a
base de todas as UJs. `[ASSUMPTION: Vite 7.x; estrutura e aliases seguem o padrão Cora Prices
(~/, src/features, src/components/external).]`

**Functional Requirements:**

#### FR-1: Bootstrap da aplicação React
Desenvolvedor pode rodar a aplicação React em dev e build de produção via Vite.

**Consequences (testable):**
- `npm run dev` sobe a SPA em React 19 com HMR.
- `npm run build` gera bundle de produção tipado (TS) sem erros.
- `ThemeProvider theme="bees"` e `ToastProvider` envolvem a árvore; `@celebration/assets/src/main.css`
  importado uma vez no entrypoint.
- Mirage **não** entra no bundle de produção (guard `import.meta.env.DEV` + import dinâmico).

#### FR-2: Estrutura, aliases e barrel de componentes
Desenvolvedor consome componentes do Celebration via barrel `~/components/external`, nunca importando
`@celebration/react` direto em código de feature.

**Consequences (testable):**
- Imports de feature usam `~/components/external`; lint/regra impede import direto de `@celebration/react`.
- Componente `Clb*` ausente no barrel é adicionado em `src/components/external/index.tsx` antes do uso.
- `[NOTE FOR PM]` Portar/escrever `.claude/rules/components-rule.md` neste repo (não existe — veio do Cora Prices).

#### FR-3: Roteamento SPA
Usuário navega entre telas via `react-router-dom` preservando as rotas funcionais do protótipo.

**Consequences (testable):**
- Rotas existem para: home, products, product/:id, audience, persona (view/edit), stakeholder
  (view/edit), discovery, synthesis, interview, interview-session.
- `[ASSUMPTION: URLs hash legadas (#product/:id) redirecionam para as novas rotas para não quebrar
  links salvos — a confirmar.]`

**Notes:** `[NOTE FOR PM]` Confirmar se mantemos compatibilidade de URLs hash legadas.

### 4.2 Internacionalização (es / pt / en)

**Description:** Toda string visível ao usuário é externalizada e traduzida para Espanhol, Português
e Inglês. Seletor de idioma no header; escolha persistida; idioma default pt-BR. Componentes do
Celebration que aceitam prop `i18n` recebem os textos traduzidos. Realiza UJ-1.
**Stack confirmada:** `react-i18next` + `i18next`. Detecção inicial: localStorage → navegador → default pt-BR.

**Functional Requirements:**

#### FR-4: Troca de idioma em runtime
Usuário pode alternar entre Espanhol, Português e Inglês e a UI atualiza sem reload.

**Consequences (testable):**
- Seletor de idioma no header com as 3 opções.
- Trocar idioma re-renderiza textos imediatamente (sem reload).
- Escolha persiste entre sessões (localStorage).

#### FR-5: Cobertura de tradução
Nenhuma string hardcoded em código de feature; todas via chaves de tradução nos 3 idiomas.

**Consequences (testable):**
- Cada chave existe nos 3 catálogos (es/pt/en); chave faltante é detectável (lint/CI ou fallback visível).
- Datas/números formatados conforme o idioma ativo. `[ASSUMPTION: usar Intl/i18next-icu p/ plurais e datas.]`

**Out of Scope:**
- Tradução de conteúdo gerado pelos agentes (outputs vêm do backend; não traduzidos no MVP).

### 4.3 Adoção do Design System Celebration

**Description:** Toda a UI usa componentes `Clb*` no lugar de HTML cru quando há equivalente, e tokens
CSS (`@celebration/assets`) em vez de valores hardcoded. Mapeamento direto dos padrões do protótipo
para o DS (ver tabela). Em caso de dúvida/erro de componente, consultar o Storybook oficial
(https://celebration.ambevdevs.com.br/storybook-react). Realiza todas as UJs.

**Mapeamento protótipo → Celebration (referência):**

| Padrão atual | Componente Celebration |
|--------------|------------------------|
| Header global + sidebar | `ClbLayout`, `ClbHeader`, `ClbSideMenu` |
| Cards (produto/discovery/insight) | `ClbCard`, `ClbAccordion`/`ClbAccordionGroup` |
| Listas/catálogo | `ClbList`, `ClbTable`, `ClbPagination`, `ClbInputSearch`, `ClbFilterActionRow` |
| Selects custom do fluxo | `ClbSelect`, `ClbMultiSelect`, `ClbInputSelectType` |
| Inputs do formulário | `ClbInputText`, `ClbTextarea`, `ClbInputUpload`, `ClbDatePicker` |
| Modais / fluxo full-page | `ClbModal`, `ClbDrawer`, `ClbFullPageFlow` |
| Status / tags | `ClbTag`, `ClbProgressBar`, `ClbAlert` |
| Feedback | `ClbToast` (`useToast`), `ClbLoading`, `ClbOverlay` |
| Abas (cockpit) | `ClbTabGroup`, `ClbTab` |

**Functional Requirements:**

#### FR-6: UI construída com componentes Celebration
Onde existe equivalente `Clb*`, a UI o utiliza no lugar de HTML cru.

**Consequences (testable):**
- Sem `<button>`/`<input>`/`<select>` cru quando há `Clb*` equivalente (verificável por lint/review).
- Forms seguem o padrão de erro: `error` + `helperText` + `showHelperText`.

#### FR-7: Tokens de design (sem hardcode)
Estilos em styled-components usam tokens CSS, não valores fixos.

**Consequences (testable):**
- Cores/spacing/tipografia via `var(--...)`; auditável pela skill `celebration-css-var-audit`.

### 4.4 Camada de Dados Mockada (Mirage.js)

**Description:** Backend simulado com mirage.js, ativo apenas em dev (`import.meta.env.DEV`,
import dinâmico), interceptando todas as chamadas HTTP de forma transparente. Estrutura flat
(`models/`, `factories/`, `fixtures/`, `serializers/`, `routes/`, `scenarios/`) conforme
`.claude/rules/mirage-rule.md`. As rotas espelham o contrato atual do `server.js` (config,
discovery kickoff/status/resume/outputs/runs/evidence, coleções local) e a máquina de estados do
mock agent. Realiza UJ-1 e UJ-2.

**Functional Requirements:**

#### FR-8: Servidor mock dev-only
Aplicação roda com dados mockados em dev sem backend real, e o mock não vaza para produção.

**Consequences (testable):**
- `makeServer()` inicializado em `main.tsx` atrás de `if (import.meta.env.DEV)` com `await import()`.
- Build de produção não contém código do Mirage/faker.
- `urlPrefix` do Mirage = `VITE_API_URL` usada pelas features.

#### FR-9: Cobertura de contrato do mock
O mock responde a todos os endpoints que as features consomem, com shapes compatíveis.

**Consequences (testable):**
- Rotas mock cobrem: `/api/config`, `/api/discovery/kickoff|status|resume|outputs`,
  `/api/discovery/runs/:runId`, `/api/discovery/runs/:runId/artifacts`,
  `/api/discovery/runs/:runId/evidence`, coleções `/api/local/*` (products, discoveries,
  created-discoveries, product-favorites-by-user, favorite-discovery-ids,
  product-audience-by-product, research-activity-users, local-mock-runs).
- Outputs estruturados do mock enumerados: `discovery_charter`, `research_plan`,
  `evidence_inventory`, `synthesis`, `opportunities`, `recommendation`, `handoff`.
- Máquina de estados do Workflow de Agentes reproduzida (transições por status/resume/evidence).
- Seeds populam produtos e discoveries equivalentes aos seeds atuais do `server.js`.
- Shapes espelham os tipos atuais, incluindo casos polimórficos: `Product.artifacts` é `string[]`
  **ou** objeto `{id,productId,title,date,type}`; `Discovery.status` é texto de progresso (≠
  `current_state`); `productTeam` contém `architect` e `arquiteto` (duplicação legada a normalizar).
  `[NOTE FOR PM]` Decidir se normalizamos `architect/arquiteto` no novo modelo TS.

### 4.5 Paridade de Telas do Repositório

**Description:** Reconstrução em React, com paridade comportamental, das telas de navegação:
home (repositório + recentes), products (busca, stats, agrupamento Torre/Tribo, favoritos),
product (contexto, métricas, equipe, stakeholders, artefatos, discoveries), audience, persona
(view/edit), stakeholder (view/edit). Realiza UJ-3.

**Functional Requirements:**

#### FR-10: Home e repositório de produtos/discoveries
Usuário acessa a Home (landing) e navega/busca/filtra Produtos e Discoveries; favorita Produtos
**e** Discoveries (persistente).

**Consequences (testable):**
- Home renderiza painel assistente e cards de Discoveries recentes; navega para produto/discovery.
- Busca e agrupamento por Torre/Tribo funcionam; favoritos de Produto persistem (coleção
  `product-favorites-by-user`, chave por `profileId`).
- Favoritar Discovery persiste (coleção `favorite-discovery-ids`).
- Stats de produto exibidos (discoveryCount/doneCount/progressCount).
- `[ASSUMPTION] research-activity-users` reproduzida no mock; uso na UI conforme protótipo (a confirmar escopo).

#### FR-11: Detalhe de produto e público
Usuário vê o detalhe do Produto e gerencia o Público (Personas e Stakeholders).

**Consequences (testable):**
- Detalhe mostra contexto, métricas, equipe, artefatos e discoveries do produto.
- Criar/editar/visualizar persona e stakeholder com formulários Celebration; mudanças persistidas no mock.

### 4.6 Fluxo de Novo Discovery

**Description:** Fluxo full-page (Setup → Participantes → CSD → Metodologia → Criar) reconstruído com
`ClbFullPageFlow`/`ClbModal`, validação com react-hook-form + zod, preservação de dados em erro e
retry. Dispara o kickoff e acompanha o processamento. Realiza UJ-1.

**Functional Requirements:**

#### FR-12: Criação de discovery
Usuário preenche o fluxo e cria um Discovery, que aparece no Repositório.

**Consequences (testable):**
- Campos obrigatórios (título, problema, objetivo) validados antes de avançar.
- CSD com adicionar/remover linhas; metodologia selecionável.
- Submit chama kickoff (mock), faz polling de status e abre o Cockpit no sucesso.
- Em erro, o formulário preserva os dados e oferece retry (sem perder o preenchimento).

#### FR-13: Rolagem interna do fluxo full-page
O fluxo rola internamente, sem rolar a página de fundo.

**Consequences (testable):**
- Scroll do conteúdo do fluxo é interno ao container; fundo permanece fixo.

### 4.7 Cockpit do Discovery e Workflow de Agentes

**Description:** Tela de acompanhamento do Discovery: readiness/status, problema/objetivo, insights,
metodologias, evidências e o estado do Workflow de Agentes com Gates Humanos. Inclui polling de
status e ações de aprovação/continuação e upload de evidência. Realiza UJ-2.

**Functional Requirements:**

#### FR-14: Acompanhamento do workflow e gates humanos
Usuário visualiza o estado do Workflow e atua nos Gates Humanos (aprovar/continuar, anexar evidência).

**Consequences (testable):**
- Estado atual exibido e atualizado via polling (intervalo vindo de `/api/config` mock).
- Ação de resume avança o estado conforme a máquina de estados.
- Upload de evidência transiciona para `INSIGHT_REVIEW_PENDING` (paridade com mock atual).
- Insights renderizados com escape de conteúdo dinâmico (XSS) — React escapa por padrão.
- Chat do Discovery presente no Cockpit (anotações/anexos locais, paridade com protótipo).
- **Modal de entrada de método** disponível (adiciona texto/arquivos a um item de Metodologia).

#### FR-15: Síntese e entrevistas
Usuário acessa a Síntese do Discovery e as telas de entrevista (planejamento e sessão simulada).

**Consequences (testable):**
- Tela de síntese renderiza insights/padrões a partir do payload (mock).
- Tela `interview` cobre recrutamento/planejamento (seleção de participantes, simulação de recrutamento).
- Tela `interview-session` cobre insights, transcrição e o **Modal de gravação** (playback mock).
- Conteúdo e interações simuladas em paridade com o protótipo (sem backend real).

**Notes:** `[NOTE FOR PM]` Entrevistas e gravação são simulação no protótipo; manter como mock no MVP.

### 4.8 Baseline de Testes

**Description:** Baseline de testes automatizados **dentro do MVP** (decisão do usuário): testes
unitários e de componente cobrindo lógica crítica e fluxos principais, rodando no CI. `[ASSUMPTION:
Vitest + React Testing Library; MirageJS reaproveitado nos testes de fluxo; cobertura mínima
acordada — sugestão 60% em statements como meta inicial, a confirmar.]` Sustenta a manutenibilidade
e protege a paridade (SM-1) contra regressões. Sem E2E amplo no MVP (fora de escopo).

**Functional Requirements:**

#### FR-16: Suíte de testes no CI
Desenvolvedor roda testes unit/component localmente e no CI, bloqueando merge em falha.

**Consequences (testable):**
- `npm test` executa a suíte (Vitest); CI roda os testes em todo push/PR e falha o build se algum quebrar.
- Componentes-chave têm testes de render/interação (RTL); fluxos críticos (novo discovery, gates) cobertos.
- Meta de cobertura mínima configurada e verificada no CI. `[ASSUMPTION: 60% statements inicial.]`
  Enquanto a meta não for confirmada, cobertura roda em modo **report** (não bloqueia); o gate
  bloqueante de cobertura é ativado após a confirmação. A suíte verde (falha = bloqueia) vale desde já.

**Out of Scope:**
- Testes E2E de browser amplos (Playwright/Cypress) — pós-MVP.

## 5. Não-Goals (Explícito)

- Não reescrever nem alterar o backend CrewAI (Python) nem o `server.js` atual.
- Não implementar o assistente conversacional de pesquisa.
- Não implementar integrações externas reais (Teams, Jira, Slack, DataDog, etc.).
- Não resolver os riscos de backend/segurança/persistência (R1–R9) — PRDs separados.
- Não introduzir identidade/SSO real (perfil segue mockado no MVP).
- Não traduzir conteúdo gerado pelos agentes.

## 6. Escopo do MVP

### 6.1 Em Escopo
- Scaffold React 19 + Vite + TS, providers Celebration, roteamento, estrutura/barrel.
- i18n es/pt/en (react-i18next) com seletor e persistência.
- UI em componentes Celebration + tokens.
- Mock mirage.js cobrindo o contrato atual + máquina de estados de agentes.
- Paridade comportamental de todas as telas e fluxos do protótipo.
- **Baseline de testes unit + component (Vitest + RTL) no CI.**

### 6.2 Fora de Escopo (MVP)
- Backend real, contrato de output estável, persistência durável — *PRDs separados (R1–R9)*.
- Testes E2E de browser amplos (Playwright/Cypress) — *pós-MVP; baseline unit/component está dentro (§4.8)*.
- Acessibilidade além do que o Celebration já entrega por padrão — *pass dedicado em v2*.
- PWA/offline, telemetria/analytics.

## 7. Métricas de Sucesso

**Primárias**
- **SM-1**: Paridade funcional — 100% dos itens do **inventário de paridade** reconstruídos em React.
  *Critério operacional:* o inventário é a lista de views, modais e rotas em
  [docs/component-inventory-frontend.md](../../../../docs/component-inventory-frontend.md) (10 views +
  3 modais + rotas da §6 daquele doc). Uma tela "tem paridade" quando: (a) a rota resolve, (b) todos
  os elementos/seções listados no inventário estão presentes, (c) as interações principais funcionam
  contra o mock. Verificado por checklist por tela no PR. Valida FR-3, FR-10..FR-15.
- **SM-2**: Cobertura de i18n — 100% das strings de UI externalizadas e presentes nos 3 idiomas;
  0 strings hardcoded em código de feature. Valida FR-4, FR-5.
- **SM-3**: Conformidade com o Design System — 0 elementos HTML crus com equivalente `Clb*`; 0 valores
  de estilo hardcoded (auditoria `celebration-css-var-audit`). Valida FR-6, FR-7.

**Secundárias**
- **SM-4**: Build de produção sem Mirage e sem erros de tipo. Valida FR-1, FR-8.
- **SM-5** *(não-bloqueante)*: Tempo de carregamento inicial ≤ protótipo atual. Observacional, não
  gate de release. `[ASSUMPTION] medir via Lighthouse.`
- **SM-6**: Baseline de testes — suíte verde no CI e cobertura ≥ meta acordada. Valida FR-16.
  `[ASSUMPTION: 60% statements inicial.]`

**Counter-métricas (não otimizar)**
- **SM-C1**: Não inflar a contagem de componentes "wrapper" só para satisfazer o barrel —
  contrabalança SM-3 (conformidade não deve gerar indireção inútil).
- **SM-C2**: Não sacrificar paridade comportamental por pureza de DS — contrabalança SM-1/SM-3
  (se um padrão do protótipo não tem `Clb*`, documentar exceção em vez de degradar a UX).

## 8. Open Questions

1. ~~React 19 vs peer `^18.2.0`~~ **RESOLVIDO (2026-06-05):** `@celebration/react@2.8.1` (stable)
   exige `react ^19.2.3`, `react-dom ^19.2.3`, `react-router >=6.0.0`. A doc antiga (^18.2.0) estava
   obsoleta. React 19 é o correto. ⚠️ A tag `latest` do feed aponta para uma alpha — fixar versão
   stable exata (2.8.1).
2. ~~Registry `@celebration/*` disponível?~~ **RESOLVIDO:** feed privado Azure Artifacts
   (`AMBEV-SA/_packaging/design-system`) acessível via `.npmrc` + `npm run refreshVSToken`.
3. ~~Adotar barrel `~/components/external`?~~ **RESOLVIDO (2026-06-05): SIM.** Nota: `.claude/rules/components-rule.md`
   **não existe** neste repo (veio do Cora Prices via skill) — precisa ser portado/escrito (ação no scaffold).
4. Manter compatibilidade de URLs hash legadas (redirect) ou descontinuar? **(aberta)**
5. ~~Lib de i18n?~~ **RESOLVIDO: react-i18next + i18next.** Estratégia de plural/datas (ICU) a detalhar.
6. Onde hospedar os catálogos de tradução e quem é dono do conteúdo es/en? **(aberta)**
7. ~~Baseline de testes no MVP?~~ **RESOLVIDO: SIM, dentro do MVP** (unit + component). Ver §4.8/§6.1.
8. Política de versão do `@celebration/react`: fixar 2.8.1 e atualizar manualmente (já que `latest`
   aponta para alpha)? Confirmar. **(aberta)**

## 9. Índice de Suposições

- §0/§4.1 — Vite 7.x (última versão) como bundler.
- §2.3/§4.2 — react-i18next + i18next (confirmado); default pt-BR; detecção localStorage → navegador → default. ICU p/ plural/datas a detalhar.
- §4.8/§7 — Testes com Vitest + React Testing Library; meta de cobertura inicial 60% statements (a confirmar).
- §4.1 — Estrutura/aliases seguem padrão Cora Prices (`~/`, `src/features`, `src/components/external`).
- §4.1/§4.3 — Barrel `~/components/external` e regra de import (sem `@celebration/react` direto em feature).
- §4.3 — `react-router` >=6 (via `react-router-dom`) substitui hash routing (exigido pela navegação do Celebration).
- §4.1 — URLs hash legadas redirecionadas (a confirmar — Open Q4).
- §4.6 — Forms com react-hook-form + zod (padrão do DS).
- §7 — SM-5 medido via Lighthouse.

**Fatos verificados (2026-06-05, feed privado):** React **19.2.3+**, react-dom 19.2.3+,
react-router >=6.0.0, `@celebration/react@2.8.1` (stable). Não são suposições.

---

## A. NFRs Transversais

- **Acessibilidade:** herdar a11y nativa do Celebration (ARIA, teclado, leitor de tela); não regredir.
- **Performance:** carregamento inicial ≤ protótipo; code-splitting por rota; Mirage tree-shaken em prod.
- **i18n:** 3 idiomas obrigatórios; sem strings hardcoded; formatação local de data/número.
- **Manutenibilidade:** TypeScript estrito; componentização por feature; sem estado global mutável
  estilo `app.js` (usar estado React/contexto/store conforme necessidade).
- **Segurança (herdada):** React escapa conteúdo por padrão (mantém a postura anti-XSS do protótipo).

## B. Constraints & Guardrails

- **Custo/escopo:** big-bang, mas só frontend — não tocar backend/server.js.
- **Dependências:** versões mais novas de todas as libs (decisão do usuário), com a ressalva do
  peer dep do Celebration (Risco R-A).
- **Privacidade:** Mirage nunca em produção (risco de vazar dados falsos).

## C. Integração & Dependências

- **`@celebration/react` + `@celebration/assets`** — design system (registry privado Ambev).
  Storybook de referência: https://celebration.ambevdevs.com.br/storybook-react.
- **`react-router-dom`** — roteamento e navegação do DS.
- **mirage.js + @faker-js/faker** — camada de mock dev-only.
- **Contrato atual** do `server.js` ([docs/api-contracts-frontend.md](../../../../docs/api-contracts-frontend.md))
  como espelho do mock; quando o backend real estabilizar, trocar Mirage por `services/http` apontando
  ao backend (transparente para as features).

## D. Riscos & Mitigações

| ID | Risco | Mitigação |
|----|-------|-----------|
| ~~R-A~~ | ~~React 19 fora do peer do Celebration~~ **ELIMINADO** | Verificado: celebration 2.8.1 exige `react ^19.2.3`. React 19 é o correto |
| R-B | Token VS expira / `vsts-npm-auth` interativo em CI | `npm run refreshVSToken` local; em CI usar PAT via env/service connection. `.npmrc` gitignored |
| R-B2 | Tag `latest` do feed aponta para alpha instável | Fixar versão stable exata (`@celebration/react@2.8.1`); não usar `latest`/`^`; atualizar manualmente |
| R-C | Divergência mock ↔ contrato real do backend | Espelhar shapes do `server.js`; centralizar contrato; revisar quando backend estabilizar |
| R-D | Perda de paridade comportamental no big-bang | Inventário de paridade = `docs/component-inventory-frontend.md`; checklist por tela no PR (critério em SM-1) |
| R-E | Padrões sem equivalente `Clb*` | Documentar exceção (SM-C2) em vez de degradar UX |
