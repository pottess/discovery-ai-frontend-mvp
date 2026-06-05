---
title: Reconciliação PRD ↔ Fontes (Brownfield) — Discovery AI React Migration
status: draft
created: 2026-06-05
---

# Reconciliação do PRD contra as Fontes (Paridade Brownfield)

Objetivo: garantir que o PRD da migração React alcance **paridade comportamental** com o protótipo
vanilla atual. Abaixo estão GAPS — conteúdo presente nas fontes que o PRD perdeu ou subespecificou —
e CONTRADIÇÕES — afirmações do PRD que conflitam com as fontes.

Fontes reconciliadas:
- `CLAUDE.md`
- `docs/source-tree-analysis.md`
- `docs/api-contracts-frontend.md`
- `docs/data-models-frontend.md`
- `docs/component-inventory-frontend.md`

Legenda de severidade: 🔴 quebra paridade / 🟠 lacuna comportamental / 🟡 detalhe a confirmar.

---

## GAPS DE TELA / VIEW

### G1 🟠 — Home: painel assistente + recentes não está coberto por nenhum FR
**Fonte:** `component-inventory-frontend.md` (view `home`: "Landing do repositório, **painel
assistente**, cards de discoveries **recentes**"); `data-models` (coleção `favorite-discovery-ids`).
**No PRD:** O Glossário define "Repositório" como "home + lista" e o FR-10 fala de catálogo de
produtos/discoveries, mas **nenhum FR descreve a tela home em si**: nem o "painel assistente"
(provavelmente o placeholder do assistente conversacional — não-goal, mas a UI/placeholder existe
no protótipo e precisa de paridade visual), nem os "cards de discoveries recentes". A UJ-1 cita
`#products` como entry, mas o `#home` é a landing real.
**Ação sugerida:** Adicionar FR explícito de Home (recentes + placeholder do painel assistente,
declarando que o painel é apenas visual/desabilitado conforme §5 não-goals).

### G2 🟠 — Cockpit do Discovery: componente "chat" omitido
**Fonte:** `component-inventory-frontend.md` (view `discovery`: "readiness, problema/objetivo,
insights, metodologias, evidências, **chat**").
**No PRD:** FR-14/Glossário (Cockpit) listam readiness, insights, metodologias, evidências e estado
do workflow — mas **não mencionam o `chat`** presente no cockpit. Gap de paridade de tela.
**Ação sugerida:** Decidir se o chat do cockpit é mantido como placeholder/mock (e declará-lo no FR-14)
ou explicitamente fora de escopo (e listar em §5).

### G3 🟠 — Telas de entrevista subespecificadas (conteúdo e modais)
**Fonte:** `component-inventory-frontend.md`:
- `interview` = "Planejamento/**recrutamento** de entrevista".
- `interview-session` = "Sessão de entrevista: **insights, transcrição, gravação**".
- Modais não-rota: **"Modal de entrada de método"** (adiciona texto/arquivos a item de metodologia)
  e **"Modal de gravação"** (playback mock de entrevista).
**No PRD:** FR-15 trata interview/interview-session genericamente ("paridade de conteúdo... simulação"),
mas **não nomeia** recrutamento, transcrição, gravação, nem os dois modais. O "Modal de entrada de
método" em particular é um fluxo funcional do cockpit/metodologia que nenhum FR descreve.
**Ação sugerida:** Detalhar FR-15 (sub-telas e os 2 modais) ou criar FR para o "modal de entrada de método".

---

## GAPS DE API / CONTRATO

### G4 🟠 — Endpoint `/api/discovery/runs/:runId/artifacts` ausente do contrato do mock
**Fonte:** `api-contracts-frontend.md` e `CLAUDE.md §8` listam
`GET /api/discovery/runs/:runId` **e** `GET /api/discovery/runs/:runId/artifacts` (artefatos da run).
**No PRD:** FR-9 enumera `runs` mas **não cita `/artifacts`**. Se a UI consome artefatos da run,
o mock precisa servi-los.
**Ação sugerida:** Incluir `runs/:runId/artifacts` na lista de cobertura do FR-9.

### G5 🟡 — Três modos de API e endpoints `/api/crewai/*` não endereçados
**Fonte:** `CLAUDE.md §2/§8` e `api-contracts-frontend.md`: o `server.js` expõe 3 modos
(`mock` / `mvp_backend` / `legacy_crewai`) e os endpoints de proxy `/api/crewai/kickoff` e
`/api/crewai/status/:id`. O `/api/config` retorna `frontendApiMode` e `agentMode` que a UI **lê**.
**No PRD:** O mock (Mirage) espelha só o caminho `mock`. Razoável para o MVP — **mas o PRD não declara
explicitamente** que `mvp_backend`/`legacy_crewai` e `/api/crewai/*` ficam fora de escopo, nem o que o
mock retorna em `frontendApiMode`/`agentMode` (que a UI pode ramificar). Risco de a UI esperar campos do
config que o mock não fornece.
**Ação sugerida:** No FR-8/FR-9, fixar o payload de `/api/config` do mock (incluindo flags) e declarar
em §5 que os modos de proxy real estão fora de escopo.

### G6 🟡 — Override de modo via `localStorage`/query param e `apiMode=mock`
**Fonte:** `data-models-frontend.md` (`localStorage["discoveryIa.frontendApiMode"]` → override de modo);
`CLAUDE.md §5` (`?apiMode=mock`).
**No PRD:** Não mencionado. Pode ser descartável no React (Mirage sempre em dev), mas é um
comportamento existente — confirmar descontinuação explícita.

---

## GAPS DE DADOS / SHAPES

### G7 🟠 — Coleções `favorite-discovery-ids` e `research-activity-users` não cobertas
**Fonte:** `CLAUDE.md §7` e `data-models-frontend.md` listam 8 coleções, incluindo
**`favorite-discovery-ids`** (favoritar **discoveries**, não só produtos) e
**`research-activity-users`**.
**No PRD:** FR-10 fala apenas em "favorita **produtos** (persistente)". **Favoritar discoveries** e a
coleção `research-activity-users` ficam sem FR. O FR-9 diz "coleções `/api/local/*` (products,
discoveries, etc.)" mas o "etc." apaga essas duas coleções específicas.
**Ação sugerida:** Estender FR-10 para favoritos de discovery; enumerar as 8 coleções no FR-9.

### G8 🟠 — Shape polimórfico de `artifacts` e campos de Product/Discovery perdidos
**Fonte:** `data-models-frontend.md`:
- Product: `tower`, `tribe`, `category`, `metrics[]`, `squad`, `participants`,
  `productTeam {designer, pm, architect, arquiteto, gpm}`, `start`/`end`, `personas[]`,
  `stakeholders[]`, e **`artifacts` que é `string[]` OU objeto `{id,productId,title,date,type}`**
  (polimórfico — a UI precisa lidar com ambos).
- Discovery: `status` é **string livre tipo `"1/3 concluídos"`** (não o estado do workflow de agentes),
  além de `insight`, `next`, `updatedAt`.
**No PRD:** FR-10/FR-11 descrevem em alto nível ("contexto, métricas, equipe, artefatos, stakeholders"),
mas **não capturam o polimorfismo de `artifacts`** nem o detalhe de `productTeam` (note `architect` e
`arquiteto` duplicados — pt/en) nem que `Discovery.status` é texto de progresso, distinto de
`current_state` do workflow. Risco de a tipagem TS/zod e os seeds do Mirage divergirem do shape real.
**Ação sugerida:** FR-9/FR-11 devem referenciar os shapes de `data-models-frontend.md` como contrato do
mock, incluindo o `artifacts` polimórfico e a distinção `Discovery.status` (progresso) vs `current_state`.

### G9 🟡 — Outputs estruturados do mock não enumerados
**Fonte:** `data-models-frontend.md`: `createMockAgentOutputs()` deriva
**discovery_charter, research_plan, evidence_inventory, synthesis, opportunities, recommendation,
handoff**. Mock Run tem `inputs`, `evidence[]`, `events[]`.
**No PRD:** FR-9/FR-14/FR-15 falam de "outputs estruturados" e "síntese" genericamente, sem listar os
7 tipos. A tela de Síntese (FR-15) e o Cockpit consomem partes desses outputs.
**Ação sugerida:** Enumerar os 7 outputs no FR-9 como parte do contrato do mock.

---

## CONTRADIÇÕES / CLAIMS A VERIFICAR

### C1 🟡 — Perfil hardcoded e favoritos "por usuário"
**Fonte:** `data-models` / `CLAUDE.md §7`: perfil **hardcoded** `{id:"perfil-ambev-demo"}`;
`product-favorites-by-user` é `{ [profileId]: [productId] }` (estrutura por usuário, mas com 1 só
perfil fixo). Identidade real é não-goal.
**No PRD:** §5 diz "perfil segue mockado" (consistente), mas FR-10 diz "favoritos persistem
(mock/localStorage)" sem mencionar o `profileId`. Não é contradição forte, mas o seed/serializer do
Mirage precisa respeitar a chave por `profileId` para paridade. Confirmar.

### C2 🟡 — `discoveryAiPollIntervalMs` (5000) vs `crewAiPollIntervalMs` (15000)
**Fonte:** `api-contracts-frontend.md` `/api/config`: existem **dois** intervalos de polling distintos
(`discoveryAiPollIntervalMs: 5000`, `crewAiPollIntervalMs: 15000`, `crewAiPollTimeoutMs: 600000`).
**No PRD:** FR-14 diz "intervalo vindo de `/api/config` mock" no singular. O mock deve expor os campos
corretos (o caminho mock usa `discoveryAiPollIntervalMs`). Garantir que o mock do `/api/config` retorne
esses três campos para a UI ramificar corretamente.

### C3 🟡 — Compatibilidade de URLs hash legadas permanece em aberto (já sinalizado no PRD)
**Fonte:** `CLAUDE.md §6/§10` ("nunca quebre as formas de rota por hash") lista 8 formas de hash exatas.
**No PRD:** FR-3 + Open Q4 já marcam isso como `[ASSUMPTION]`/aberto — **sem contradição**, apenas
reforço: a decisão de redirect deve cobrir as 8 formas exatas do §6 (inclusive
`#interview-session/:participantId/:methodId/:discoveryId/:productId`, a mais complexa).

---

## ITENS QUE O PRD COBRE BEM (sem gap)

- Máquina de estados do workflow (6 estados) — paridade exata com `CLAUDE.md §8` / `api-contracts`.
- Transição de `evidence` → `INSIGHT_REVIEW_PENDING` — paridade correta (FR-14).
- Postura anti-XSS (`escapeHTML` ~370× → React escapa por padrão) — coberto (NFR §A, FR-14).
- Full-page flow rola internamente (`CLAUDE.md §10`) — coberto por FR-13.
- Default pt-BR / produto em português (`CLAUDE.md §10`) — coberto por FR-4/§9.
- Mirage dev-only / não vaza para prod — coberto por FR-1/FR-8.

---

## Resumo priorizado

| ID | Sev | Gap | Fonte principal |
|----|-----|-----|-----------------|
| G1 | 🟠 | Home (painel assistente + recentes) sem FR | component-inventory |
| G2 | 🟠 | "chat" do cockpit omitido | component-inventory |
| G3 | 🟠 | Entrevistas: recrutamento/transcrição/gravação + 2 modais subespecificados | component-inventory |
| G4 | 🟠 | `runs/:runId/artifacts` fora do contrato do mock | api-contracts / CLAUDE §8 |
| G7 | 🟠 | `favorite-discovery-ids` e `research-activity-users` sem FR | data-models / CLAUDE §7 |
| G8 | 🟠 | `artifacts` polimórfico + `Discovery.status` (texto) vs `current_state` | data-models |
| G9 | 🟡 | 7 outputs estruturados do mock não enumerados | data-models |
| G5/G6 | 🟡 | Modos de API / `apiMode` / config flags não declarados | api-contracts / CLAUDE |
