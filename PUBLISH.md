# Publicacao do Discovery AI

## Requisitos

- Node.js 20 ou superior para o modo com servidor.
- Variaveis de ambiente configuradas na plataforma, nunca em arquivos commitados.
- `CREWAI_API_KEY` e `CREWAI_API_BASE_URL` apenas quando a integracao CrewAI for usada.
- `DISCOVERY_AI_API_BASE_URL` apenas quando o backend MVP for usado.
- Recomendado em URL publica: `BASIC_AUTH_ENABLED=true` com `BASIC_AUTH_USER` e `BASIC_AUTH_PASSWORD`.

## Rodar em uma plataforma Node

Use:

```bash
npm start
```

A plataforma deve definir `PORT`. Quando `PORT` existe, o servidor escuta em `0.0.0.0` automaticamente.

Variaveis de exemplo:

```env
PORT=4173
BASIC_AUTH_ENABLED=true
BASIC_AUTH_USER=
BASIC_AUTH_PASSWORD=
CREWAI_API_BASE_URL=
CREWAI_API_KEY=
DISCOVERY_AI_API_BASE_URL=
DISCOVERY_FRONTEND_API_MODE=mock
```

## Rodar por Docker

```bash
docker build -t discovery-ai .
docker run --rm -p 4173:4173 \
  -e PORT=4173 \
  -e BASIC_AUTH_ENABLED=false \
  discovery-ai
```

Defina segredos via `-e` ou secret manager apenas em ambientes privados.

## Health check

Configure o health check para:

```text
/healthz
```

## Arquivos expostos publicamente

O servidor publica apenas:

- `/index.html`
- `/styles.css`
- `/app.js`
- arquivos dentro de `/assets/`

Arquivos internos como `.env`, `server.js`, `package.json`, docs e a pasta da Crew nao sao servidos para o navegador.
