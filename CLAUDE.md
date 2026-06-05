# CLAUDE.md

Contexto do projeto para o Claude Code e para a fase de planejamento do BMad Method. Este
arquivo é a **fonte única de verdade** sobre o código como ele existe hoje (brownfield), e a
base para futuros PRDs, ADRs, features e user stories.

> Mantido pela Analista (Mary). Quando o código e este arquivo divergirem, **o código vence** —
> atualize este arquivo. O `AGENTS.md` é mais antigo e já divergiu do backend atual (ver
> [Divergência de Documentação](#13-divergência-de-documentação)).

---

## 1. O Que É Isto

**Discovery AI** — plataforma de discovery de produto dirigida por agentes de IA. O usuário
(hoje: designer de produto / PM) abre um produto, inicia um "Discovery", preenche
problema/objetivo/CSD e metodologia, e uma crew de agentes de IA roda um workflow longo de
discovery-até-entrega com gates de aprovação humana. O frontend é a camada de interação do
workflow; o backend CrewAI é a inteligência de discovery.

**Feito por designers.** O frontend foi construído pelo time de design como um protótipo de
alta fidelidade, escrito à mão — não por um time de engenharia frontend. Isso explica o
monolito em arquivo único (`app.js`), o markup inline pesado e a ausência de build. Trate o
código atual como **artefato de design validado e especificação de comportamento**, não como
arquitetura de produção.

**Fronteira do MVP (importante):**
- **No MVP:** workflow de agentes, estados de processamento, contratos de output estruturado,
  gates de aprovação humana, UI do repositório de discoveries.
- **Futuro:** assistente conversacional de pesquisa e todas as integrações externas (Teams,
  Outlook, DataDog, Jira/Linear, Slack, bases de produto, analytics, repositórios de pesquisa, SSO).
- **No MVP, integrações externas são simuladas** via input manual, upload de arquivo, dados
  mockados, fixtures, `localStorage` e respostas mockadas do backend.

---

## 2. Arquitetura

Três camadas. O servidor Node é a fronteira de confiança — segredos vivem só nele.

```
┌────────────────────┐   /api/* (local)   ┌──────────────────┐  Bearer token   ┌──────────────────┐
│  Browser (app.js)  │ ─────────────────► │   server.js      │ ──────────────► │  Backend CrewAI  │
│  HTML/JS vanilla   │ ◄───────────────── │  estático+proxy  │ ◄────────────── │  (Python, opc.)  │
└────────────────────┘   JSON             │  + JSON DB local │                 └──────────────────┘
                                          └──────────────────┘
                                                  │ lê/grava
                                                  ▼
                                          backend/data/*.json
```

**Três modos de API em runtime** (resolvidos no `server.js`, expostos via `/api/config`):
| Modo | Gatilho | Comportamento |
|------|---------|---------------|
| `mock` (default) | nenhum env de backend | `MockAgentAdapter` simula todo o workflow, persistido em JSON |
| `mvp_backend` | `DISCOVERY_AI_API_BASE_URL` setado | faz proxy de `/api/discovery/*` para o backend MVP |
| `legacy_crewai` | `CREWAI_API_KEY` setado | faz proxy de `/api/crewai/*` para uma API CrewAI/AMP |

---

## 3. Stack & Restrições Rígidas

- **Frontend:** HTML + CSS + JS vanilla. **Sem framework, sem bundler, sem deps de runtime.**
- **Servidor:** Node.js ≥ 20, só módulos nativos (`http`, `fs`, `crypto`, `path`). Sem deps.
- **Backend (separado):** Python + CrewAI, modelos OpenAI via LiteLLM.
- **Persistência:** arquivos JSON em `backend/data/` (servidor) + `localStorage` (browser).

**Não** adicione dependências npm, etapa de build, nem migre para React/Next sem uma decisão
de produto explícita (digna de ADR). O modelo estático zero-dependência é intencional.

---

## 4. Mapa de Arquivos

| Caminho | Tamanho | Papel |
|---------|---------|-------|
| `index.html` | 1.2k linhas | Todas as views (`[data-view]`), modais, markup estático |
| `styles.css` | 12.5k linhas | Sistema visual completo, layout responsivo, modais |
| `app.js` | **15.5k linhas** | Roteamento por hash, dados mock, render, estado, cliente API, polling — **monolito, 663 funções** |
| `server.js` | 1.5k linhas | Servidor estático, proxy de API, DB JSON local, mock agent adapter, basic auth |
| `config.vercel.js` | — | Força modo `mock` em deploys estáticos |
| `demo-config.js` | — | Config de demo |
| `backend/src/discovery_ai/` | — | Crew CrewAI (`crew.py`, `main.py`, `config/*.yaml`, `tools/`) |
| `backend/data/*.json` | — | Persistência local (dados gitignored) |
| `docs/` | — | Escopo MVP, status do frontend, contratos, deploy, auditorias de UI |
| `AGENTS.md` | 13k | Guia de agentes legado — **parcialmente desatualizado**, ver §13 |
| `FRONTEND_CURRENT_AUDIT.md` | — | Auto-auditoria anterior do frontend (ainda válida) |

---

## 5. Rodar & Verificar

```bash
npm start                 # node server.js → http://127.0.0.1:4173/index.html
# demo mock (sem creds):  http://127.0.0.1:4173/index.html?apiMode=mock
npm run check             # node --check app.js && node --check server.js  (só sintaxe — o único "teste")
npm run build:static      # gera dist/ para hospedagem estática
```

O CI (`.github/workflows/ci.yml`) roda `npm run check` em push/PR. **Não há suíte de testes.**

---

## 6. Modelo de Roteamento

Roteamento por hash (`location.hash`). Preserve estas formas:

- `#home`, `#products`, `#product/:productId`
- `#product/:productId/audience`
- `#product/:productId/personas/:personaId[/edit]`
- `#product/:productId/stakeholders/:stakeholderId[/edit]`
- `#discovery/:discoveryId/:productId` — cockpit do workflow
- `#synthesis/:discoveryId/:productId`
- `#interview/:methodId/:discoveryId/:productId`
- `#interview-session/:participantId/:methodId/:discoveryId/:productId`

---

## 7. Modelo de Dados & Persistência

**Coleções JSON do servidor** (`server.js` `LOCAL_COLLECTIONS`, arquivos em `backend/data/`):

| Coleção | Default | Notas |
|---------|---------|-------|
| `products` | `[]` | semeada de `getSeedProducts()` (produtos Cora *) se vazia |
| `discoveries` | `[]` | semeada de `getSeedDiscoveries()` se vazia |
| `created-discoveries` | `[]` | discoveries criados pelo usuário |
| `product-favorites-by-user` | `{}` | `{ [profileId]: [productId] }` |
| `favorite-discovery-ids` | `[]` | |
| `product-audience-by-product` | `{}` | personas + stakeholders por produto |
| `research-activity-users` | `{}` | |
| `local-mock-runs` | `{}` | estado das runs mock (hidratado no boot) |

**Formato das entidades** vive nas funções de seed ([server.js:548](server.js#L548)) — `product`
tem personas[], stakeholders[], productTeam, metrics, artifacts; `discovery` tem
status/insight/next/updatedAt. **Esses seeds são o schema de facto** até um contrato real ser definido.

**Estado do browser:** a maior parte do estado de UI são globais mutáveis em nível de módulo no
`app.js`. Persistido em `localStorage`: favoritos de produto (`discoveryIa.productFavoritesByUser`).
Perfil hardcoded: `{ id: "perfil-ambev-demo", name: "Perfil Ambev" }` — **sem identidade real ainda**.

---

## 8. Superfície de API (server.js)

| Método | Caminho | Propósito |
|--------|---------|-----------|
| GET | `/health`, `/healthz` | health (ignora auth) |
| GET | `/api/config` | feature flags, modo do agente, intervalos de polling |
| POST | `/api/crewai/kickoff` | proxy → CrewAI `/kickoff` |
| GET | `/api/crewai/status/:id` | proxy → CrewAI `/status/{id}` |
| POST | `/api/discovery/kickoff` | mock adapter OU proxy → backend MVP |
| GET | `/api/discovery/status/:runId` | máquina de estados mock OU proxy |
| POST | `/api/discovery/resume` | avança gate humano (mock) OU proxy |
| GET | `/api/discovery/outputs/:runId` | outputs estruturados (mock ou proxy) |
| GET | `/api/discovery/runs/:runId[/artifacts]` | detalhe da run / artefatos |
| POST | `/api/discovery/runs/:runId/evidence` | anexa evidência |
| GET/PUT/POST/DELETE | `/api/local/:collection` | **CRUD JSON genérico** ⚠️ ver §12 |

**Máquina de estados do mock agent:** `DOR_ANALYZING → RESEARCH_APPROVAL_PENDING →
EVIDENCE_UPLOAD_PENDING → INSIGHT_REVIEW_PENDING → OPPORTUNITY_REVIEW_PENDING → COMPLETED`.
Este é o workflow canônico com gates humanos que o backend real deve espelhar.

---

## 9. Backend CrewAI (estado real atual)

`backend/src/discovery_ai/crew.py` — **20 agentes especialistas + 1 manager**, `Process.hierarchical`:
- Manager: `role="Orcherstrator"` (sic), `openai/gpt-4o`, `allow_delegation=True`.
- Especialistas: todos `openai/gpt-5.5` ⚠️ (**modelo inexistente — o kickoff real vai falhar**),
  `max_iter=25`, `reasoning=False`, `allow_delegation=False`.
- Tools: `FileReadTool` (maioria), `ScrapeWebsiteTool` + `SerperDevTool` (só desk research).
- Só `build_d_o_r_framework` tem schema de output validado (`output_json` via `jambo`
  `SchemaConverter` de `config/build_d_o_r_framework.json`). As outras tasks retornam texto livre.
- Env esperado: `OPENAI_API_KEY`, `SERPER_API_KEY`.
- **Não há servidor HTTP nesta pasta** — a API `/kickoff` + `/status` vem de um deploy
  CrewAI/AMP. O `server.js` apenas faz proxy.

**O contrato frontend↔backend não é estável.** O status é lido de qualquer um de `state`,
`result.state`, `data.state`, `status`, `result.status`, `data.status`. Sucesso:
`completed|complete|success|succeeded`. Erro: `failed|failure|error|cancelled|canceled`.
Resultado extraído best-effort de `result|data.result|output|response`.

---

## 10. Convenções

- **XSS:** todo valor dinâmico/de usuário em `innerHTML` passa por `escapeHTML()`
  ([app.js:3704](app.js#L3704), usado ~370×). **Mantenha isso** em todo novo caminho de render.
- **Inputs do backend:** snake_case dentro de um objeto `inputs`. `discovery_id` é a chave
  comum entre frontend / kickoff / prompts — nunca renomeie.
- **Segredos:** `CREWAI_API_KEY` só no `server.js`. O browser chama só `/api/*`. Nunca commite `.env`.
- **Roteamento:** nunca quebre as formas de rota por hash da §6.
- **Full-page flows** rolam internamente, não a página de fundo.
- **Português** é a língua do produto/UI; strings de usuário e dados de seed são pt-BR.

---

## 11. Estado Atual vs Gaps do MVP

**Funciona hoje:** repositório de produtos + busca + favoritos, detalhe de produto, fluxo
full-page de novo discovery, captura de CSD, seleção de metodologia, workflow mock de agentes
com gates humanos, persistência JSON de produtos/discoveries/runs, cockpit de discovery,
render de síntese, simulação de entrevista.

**Faltando para o MVP ponta-a-ponta** (de `FRONTEND_CURRENT_AUDIT.md` §7, confirmado):
- Contrato estável de output da CrewAI + renderizar o output como fonte de verdade do discovery.
- Identidade real de usuário (substituir o perfil hardcoded).
- Contrato de upload/referência de arquivo para evidências (hoje arquivos são só locais).
- Save/resume de rascunho antes do kickoff; preservar form em erro; retry em falha.
- Validação/normalização de campos no fluxo de novo discovery.
- Separação clara entre dados mock e reais nos caminhos de render.
- Testes automatizados (rotas, fluxo de form, polling, persistência) e passagem de acessibilidade.

---

## 12. Riscos & Problemas Conhecidos (input de planejamento)

Ranqueados. São os candidatos primários a ADRs e stories de hardening.

| # | Severidade | Problema | Local |
|---|------------|----------|-------|
| R1 | 🔴 | `/api/local/*` é um **CRUD sem auth e sem validação** — qualquer um faz PUT/DELETE de coleções inteiras. Basic auth é opt-in (off por default). | [server.js:1324](server.js#L1324) |
| R2 | 🔴 | O servidor faz bind em `0.0.0.0` sempre que `PORT` está setado (Vercel/Heroku/Docker) — bind público. Combinado com R1 = dados graváveis expostos. | [server.js:1505](server.js#L1505) |
| R3 | 🔴 | Agentes do backend usam `openai/gpt-5.5` — modelo não existe; kickoff real falha. | [crew.py:41](backend/src/discovery_ai/crew.py#L41) |
| R4 | 🟠 | O proxy encaminha JSON arbitrário do cliente para CrewAI / backend MVP sem validação de schema. | [server.js:1011](server.js#L1011) |
| R5 | 🟠 | `CREWAI_ALLOW_SELF_SIGNED=true` seta `NODE_TLS_REJECT_UNAUTHORIZED=0` **no processo inteiro** (risco de MITM). | [server.js:333](server.js#L333) |
| R6 | 🟠 | `app.js` monolito de 15.5k linhas, estado global mutável — alto risco de regressão conforme o workflow cresce. | `app.js` |
| R7 | 🟠 | Persistência JSON usa `writeFileSync` sem lock — writes concorrentes corrompem / last-write-wins. | [server.js:242](server.js#L242) |
| R8 | 🟡 | Sem suíte de testes além de `node --check`. | — |
| R9 | 🟡 | Contrato de output instável; a UI faz normalização best-effort. | §9 |

---

## 13. Divergência de Documentação

O `AGENTS.md` é anterior ao backend atual. Onde divergir, **confie neste arquivo + no código**:
- AGENTS.md diz `Process.sequential`, gpt-4.1 / gpt-4.1-mini, outra lista de tasks e um path
  `azure_document_processing_automation`. **Código atual:** `Process.hierarchical` com manager,
  especialistas `gpt-5.5` + manager `gpt-4o`, pacote `discovery_ai`.
- AGENTS.md documenta um payload de kickoff `Methodology_Appoved`; o frontend ativo envia um
  shape `inputs` achatado (conforme `FRONTEND_CURRENT_AUDIT.md` §4). Reconcilie antes de depender de um deles.

---

## 14. Base de Planejamento (BMad)

Este arquivo alimenta a fase de planejamento do BMad Method. Locais de artefato (de
`_bmad/bmm/config.yaml`):

- **Artefatos de planejamento** → `_bmad-output/planning-artifacts/`
- **Artefatos de implementação** → `_bmad-output/implementation-artifacts/`
- **Conhecimento do projeto** → `docs/`
- Idiomas: comunicar em **Português**; documentos configurados como **English** no config —
  este arquivo foi mantido em Português a pedido.

**Épicos candidatos** (brutos, a refinar em PRDs/stories — ainda não priorizados):
1. **Contrato estável de output dos agentes** — definir schemas dos 20 outputs de task; criar
   camada de normalização (backend ou `server.js`); renderizar output da CrewAI como verdade do discovery. (R3, R4, R9)
2. **Persistência & identidade** — store durável para discoveries/rascunhos/favoritos; perfil
   real de usuário; save/resume de rascunho; writes seguros para concorrência. (R6→parcial, R7)
3. **Hardening de segurança** — auth + validação em `/api/local/*`; política de bind/host; TLS
   com escopo; validação de payload no proxy. (R1, R2, R4, R5)
4. **Robustez do fluxo de novo discovery** — validação de campos, preservação em erro, retry,
   estados de pending/erro, contrato de upload/referência de arquivo.
5. **Workflow human-in-the-loop** — tornar real a máquina de estados mock (§8): estado
   persistente, eventos de aprovação, pause/resume no backend.
6. **Baseline de qualidade** — testes de rota/fluxo/polling/persistência; passagem de
   acessibilidade; modularização do `app.js` (só depois de o comportamento do MVP estabilizar).

**Próximos passos BMad sugeridos:** `bmad-document-project` (DP) para docs brownfield completos →
`bmad-prd` por épico → `bmad-create-architecture` / ADRs para R1–R5 e o contrato →
`bmad-create-epics-and-stories`.
</content>
