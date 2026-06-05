# Análise da Árvore de Código

> Scan deep, 2026-06-05. Anotações por diretório/arquivo crítico.

```
discovery-ai-frontend-mvp/
├── index.html                 # [frontend] Shell do app: todas as views [data-view], modais, markup estático (1.2k linhas)
├── styles.css                 # [frontend] Sistema visual completo, layout responsivo, modais (12.5k linhas)
├── app.js                     # [frontend] ★ Monolito do cliente (15.5k linhas, 663 funções)
│                              #            hash routing, dados mock, render, estado global, cliente API, polling
├── server.js                  # [frontend] ★ Servidor Node nativo: estático + proxy + DB JSON + mock agent adapter + basic auth (1.5k linhas)
├── config.vercel.js           # [frontend] Força modo mock em deploy estático (Vercel)
├── demo-config.js             # [frontend] Default mock quando nenhum apiMode explícito
├── package.json               # [frontend] Scripts (start/dev/check/build:static). Sem deps de runtime
├── vercel.json                # [frontend] Rewrites para deploy estático Vercel
├── Dockerfile                 # [frontend] node:20-alpine, copia estáticos + server.js, expõe 4173
├── .env.example               # [frontend] Template de env (PORT, BASIC_AUTH_*, CREWAI_*, DISCOVERY_AI_*)
├── .github/workflows/ci.yml   # CI: npm ci/install -> npm run check -> npm test (se existir)
│
├── assets/
│   └── brand/logo_circ.png    # Logo do header global
│
├── backend/                   # [backend] ★ Crew CrewAI (Python) — entrega a inteligência de discovery
│   ├── pyproject.toml         #            crewai[file-processing,litellm,tools]==1.14.4 + jambo. Scripts uv.
│   ├── uv.lock                #            lockfile (754 KB)
│   ├── README.md              #            template CrewAI padrão
│   ├── knowledge/
│   │   └── user_preference.txt
│   ├── data/                  #            ★ Persistência JSON local (gitignored exceto .gitkeep)
│   │   └── *.json             #            products, discoveries, created-discoveries, favorites, audience, runs...
│   └── src/discovery_ai/
│       ├── crew.py            #            ★ 20 agentes @agent + 20 tasks @task + manager. Process.hierarchical
│       ├── main.py            #            Entrypoint local (run/train/replay/test). ⚠️ falta run_with_trigger
│       ├── config/
│       │   ├── agents.yaml    #            Papel/objetivo/backstory de cada agente
│       │   ├── tasks.yaml     #            ★ Descrição + expected_output (JSON) + context de 20 tasks
│       │   └── build_d_o_r_framework.json   # JSON Schema do único output validado (via jambo)
│       └── tools/
│           ├── custom_tool.py #            Template não conectado à crew (exemplo)
│           └── __init__.py
│
├── docs/                      # ★ Conhecimento do projeto (project_knowledge) — esta doc + existentes
│   ├── index.md               #            ★ Índice mestre (ponto de entrada para IA/PRD)
│   ├── project-overview.md    #            (gerado)
│   ├── architecture-*.md      #            (gerado)
│   ├── MVP_SCOPE_AND_ROADMAP.md, frontend-mvp-contract.md, DEPLOYMENT_GUIDE.md ...   # existentes
│   └── project-scan-report.json            # estado do workflow document-project
│
├── CLAUDE.md                  # ★ Contexto canônico para Claude Code / planejamento (PT)
├── AGENTS.md                  # ⚠️ Guia legado — divergiu do backend atual (ver CLAUDE.md §13)
├── FRONTEND_CURRENT_AUDIT.md  # Auto-auditoria do frontend (válida)
├── README.md                  # Setup e operação
└── _bmad/, _bmad-output/      # BMad Method: skills/config e artefatos de saída
```

## Diretórios Críticos

| Caminho | Papel | Entrada principal |
|---------|-------|-------------------|
| `/` (raiz) | App frontend + servidor | `server.js` (boot), `index.html` (UI) |
| `app.js` | Toda a lógica do cliente | `init()` / listeners de `hashchange` |
| `server.js` | Trust boundary; proxy + DB | `startServer()` (final do arquivo) |
| `backend/src/discovery_ai/` | Crew de agentes | `crew.py` `DiscoveryAiCrew().crew()` |
| `backend/data/` | Persistência runtime | escrito por `saveLocalJson()` no server |
| `docs/` | Conhecimento p/ IA e PRD | `index.md` |

## Pontos de Entrada

- **Frontend (browser):** `index.html` → carrega `demo-config.js` / `config.vercel.js` → `app.js`.
- **Servidor:** `node server.js` → `loadEnvFile` → `hydrateMockAgentRunsFromFile` →
  `seedProductsAndDiscoveriesIfEmpty` → `startServer(PORT||4173)`.
- **Backend crew (local):** `python -m discovery_ai.main run` ou `crewai run` →
  `DiscoveryAiCrew().crew().kickoff(inputs=...)`.

★ = arquivo/diretório de alto impacto para entender ou alterar o sistema.
