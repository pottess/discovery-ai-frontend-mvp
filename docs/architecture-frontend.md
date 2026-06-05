# Arquitetura — Frontend (web + servidor Node)

> Parte `frontend`. Tipo: web. Scan deep, 2026-06-05.

## Sumário Executivo

SPA estático em JS vanilla servido por um servidor Node nativo que também atua como proxy
seguro e camada de persistência JSON. Sem framework, sem bundler, sem dependências de runtime.
O navegador nunca vê segredos: só conversa com `/api/*` local.

## Stack

| Categoria | Tecnologia | Versão | Justificativa |
|-----------|-----------|--------|---------------|
| Linguagem | JavaScript (ES moderno) | — | Protótipo de design |
| UI | HTML + CSS puro | — | `index.html` + `styles.css` |
| Servidor | Node `http`, `fs`, `crypto`, `path` | ≥ 20 | Nativo, zero deps |
| Roteamento | `location.hash` (client-side) | — | Sem dependência de roteador |
| Estado | Globais de módulo em `app.js` + `localStorage` | — | Sem store/framework |
| Persistência | Arquivos JSON em `backend/data/` (via server) | — | Demo durável sem DB |

## Padrão Arquitetural

- **Cliente:** SPA por hash routing. Render imperativo direto no DOM (`innerHTML` + `escapeHTML`).
  Estado mutável global. Cada view tem um container `[data-view]` em `index.html`.
- **Servidor:** roteador HTTP procedural (`createServer` → `handleAccessControl` →
  `handleApiRequest` → `serveStaticFile`). Sem framework web.
- **Trust boundary:** o `server.js` é a fronteira. Segredos (`CREWAI_API_KEY`) só nele.

## Camadas (server.js)

```
createServer()
 ├─ handleAccessControl()   # basic auth opcional (timing-safe), bypass em /health
 ├─ handleApiRequest()      # roteia /api/*: config, crewai/*, discovery/*, local/*
 │   ├─ proxy CrewAI         (forwardCrewAiRequest, Bearer token)
 │   ├─ proxy Discovery AI   (forwardDiscoveryAiRequest)
 │   ├─ MockAgentAdapter     (máquina de estados em memória + JSON)
 │   └─ DB JSON local        (readLocalJson / saveLocalJson, 8 coleções)
 └─ serveStaticFile()       # allowlist de arquivos públicos + proteção path traversal
```

## Modos de API em Runtime

Resolvidos por env e expostos em `GET /api/config` (`getFrontendApiMode` / `getAgentMode`):

| Modo | Gatilho | Comportamento |
|------|---------|---------------|
| `mock` (default) | nenhum backend setado | `MockAgentAdapter` simula o workflow inteiro |
| `mvp_backend` | `DISCOVERY_AI_API_BASE_URL` | proxy de `/api/discovery/*` |
| `legacy_crewai` | `CREWAI_API_KEY` | proxy de `/api/crewai/*` |

No browser, `demo-config.js` força `mock` se nenhum `apiMode`/config explícito; `config.vercel.js`
fixa mock para deploy estático.

## Arquitetura de Dados

Ver [Modelo de Dados](./data-models-frontend.md). Resumo: 8 coleções JSON no servidor + favoritos
em `localStorage`. Seeds de produtos/discoveries embutidos no `server.js`.

## Design de API

Ver [Contratos de API](./api-contracts-frontend.md). 14 endpoints sob `/api/*` + `/health`.

## Fluxo Principal — Novo Discovery

1. Form full-page coleta título, problema, objetivo, participantes, CSD, metodologia.
2. Cliente lê `/api/config` (timeout curto), chama kickoff (`/api/crewai/kickoff` ou
   `/api/discovery/kickoff`).
3. Polling de status até estado final de sucesso/erro (intervalos vindos de `/api/config`).
4. Discovery Page criada/aberta no sucesso. Resultado bruto guardado no objeto local.

## Convenções

- `escapeHTML()` ([app.js:3704](../app.js#L3704)) em todo valor dinâmico em `innerHTML` (~370×).
- Inputs do backend em `inputs{}` snake_case; `discovery_id` é a chave comum — nunca renomear.
- Preservar formas de rota por hash (ver [Inventário de Componentes](./component-inventory-frontend.md)).
- Não adicionar deps npm nem build sem decisão de produto (ADR).

## Workflow de Desenvolvimento

Ver [Guia de Desenvolvimento](./development-guide.md).

## Estratégia de Testes

**Inexistente** além de `npm run check` (`node --check` em app.js/server.js). Sem testes de
rota, fluxo, polling ou persistência. Gap prioritário (R8).

## Arquitetura de Deploy

Estático (Vercel, mock) **ou** Node server (proxy completo + persistência). Ver
[Guia de Deploy](./DEPLOYMENT_GUIDE.md) e [Vercel](./VERCEL_DEPLOYMENT.md).

## Riscos Arquiteturais

R1 (`/api/local/*` sem auth), R2 (bind público com `PORT`), R4 (proxy sem validação),
R5 (TLS bypass global), R6 (monolito), R7 (writes JSON sem lock). Detalhe em [`/CLAUDE.md` §12](../CLAUDE.md).
