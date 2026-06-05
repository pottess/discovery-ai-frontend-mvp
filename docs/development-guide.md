# Guia de Desenvolvimento

> Scan deep, 2026-06-05. Cobre frontend (Node) e backend (Python CrewAI).

## Pré-requisitos

- **Frontend/servidor:** Node.js ≥ 20. Sem dependências de runtime.
- **Backend:** Python ≥3.10,<3.14 + [uv](https://docs.astral.sh/uv/). Chaves `OPENAI_API_KEY`
  (e `SERPER_API_KEY` se usar desk research).

## Frontend — Setup & Execução

```bash
npm install                 # opcional (sem deps), seguro
npm start                   # node server.js → http://127.0.0.1:4173/index.html
npm run dev                 # idem
# Demo mock sem credenciais:
#   http://127.0.0.1:4173/index.html?apiMode=mock
```

Porta: `PORT` (default 4173). Sem `PORT`, tenta a próxima porta se ocupada e faz bind em
`127.0.0.1`. Com `PORT`, faz bind em `0.0.0.0` (atenção R2).

### Variáveis de Ambiente (`.env`, baseado em `.env.example`)

```env
PORT=4173
BASIC_AUTH_ENABLED=false
BASIC_AUTH_USER=
BASIC_AUTH_PASSWORD=
CREWAI_API_BASE_URL=
CREWAI_API_KEY=
DISCOVERY_AI_API_BASE_URL=
DISCOVERY_FRONTEND_API_MODE=mock
# opcionais: CREWAI_POLL_INTERVAL_MS, CREWAI_POLL_TIMEOUT_MS, DISCOVERY_AI_POLL_INTERVAL_MS,
#            CREWAI_ALLOW_SELF_SIGNED (só dev — R5), HOST
```
- Nunca commitar `.env` (já gitignored). `CREWAI_API_KEY` só no servidor.
- Aliases legados aceitos: `CREWAI_BEARER_TOKEN`, `DISCOVERY_ACCESS_USER/PASSWORD`.

### Build estático

```bash
npm run build:static        # roda check, gera dist/ com estáticos + config.vercel.js (mock)
```

## Backend (CrewAI) — Setup & Execução

```bash
cd backend
pip install uv
crewai install              # ou: uv sync
# .env com OPENAI_API_KEY (e SERPER_API_KEY se necessário)
crewai run                  # ou: python -m discovery_ai.main run
```
Entrypoints (`pyproject.toml [project.scripts]`): `run_crew`, `train`, `replay`, `test`.
⚠️ `run_with_trigger` é declarado mas **não existe** em `main.py` — não usar até implementar.

## Comandos de Verificação

```bash
npm run check                                    # node --check app.js && node --check server.js
curl -i http://localhost:4173/api/config         # valida proxy sem expor token
curl -i -X POST http://localhost:4173/api/crewai/kickoff \
  -H 'Content-Type: application/json' \
  --data '{"inputs":{"discovery_id":"draft-teste"}}'
```

**Não há suíte de testes** (R8). CI roda só `npm run check` (e `npm test` se existir).

## Tarefas Comuns de Desenvolvimento

- **Nova view:** adicionar container `[data-view]` em `index.html`, handler de rota e render em
  `app.js`, estilos em `styles.css`. Preservar formas de rota por hash.
- **Novo campo no kickoff:** expandir `inputs{}` no cliente (snake_case) **e** ajustar
  `main.py`/`tasks.yaml` no backend. Proxy normalmente não muda.
- **Render com dados dinâmicos:** sempre `escapeHTML()` (XSS).
- **Nova coleção persistida:** registrar em `LOCAL_COLLECTIONS` no `server.js`.

## Convenções

- Sem novas deps npm / sem build no frontend sem decisão (ADR).
- Full-page flows rolam internamente, não a página de fundo.
- Polling em milissegundos; defaults seguros no cliente se `/api/config` falhar.
- Strings/UI em pt-BR.

## CI

`.github/workflows/ci.yml`: Node LTS → `npm ci`/`npm install` → `npm run check` →
`npm test` (se script existir). Roda em todo push e PR.
