# Deployment Guide

This project can be deployed as a static demo or as a Node.js app with local proxy endpoints.

## Option 1: Static Demo Mode

Use this option for GitHub Pages or any static host when you only need a safe product demo.

### Files To Publish

- `index.html`
- `styles.css`
- `app.js`
- `demo-config.js`
- `assets/`

You can prepare a static publish folder with:

```bash
npm run build:static
```

This validates JavaScript and copies the static files to `dist/`.

### Run Mode

Open the deployed URL with:

```text
?apiMode=mock
```

Example:

```text
https://username.github.io/repository-name/index.html?apiMode=mock#home
```

`demo-config.js` also sets `window.DISCOVERY_FRONTEND_API_MODE = "mock"` when no explicit mode is provided, so direct static opens default to demo mode.

### GitHub Pages

1. Run `npm run build:static`.
2. Publish the generated `dist/` folder with GitHub Pages, or copy the same files to the branch/folder configured for Pages.
3. Confirm the Pages URL uses the repository subpath, for example:

```text
https://pottess.github.io/discoveryai/index.html?apiMode=mock#home
```

4. Keep `?apiMode=mock` in shared demo links for clarity, even though `demo-config.js` provides a safe default.

### Notes

- Static mode does not run `server.js`.
- GitHub Pages does not run `server.js`, `npm start`, Node APIs or proxy routes.
- Static mode cannot call `/api/crewai/*` or `/api/discovery/*` proxy endpoints.
- Use only mock/demo flows in static mode.
- Keep asset paths relative, such as `./assets/brand/logo_circ.png`, so the app works under a GitHub Pages repository subpath.
- Do not place `.env` files, credentials or generated local data in the published static folder.

## Option 2: Node Server Mode

Use this option when you need local proxy endpoints, CrewAI integration or an MVP backend integration.

### Requirements

- Node.js 20 or newer.
- A generic Node hosting environment that runs `npm start`.
- Environment variables configured in the hosting platform, not committed to the repository.

### Local Run

```bash
npm install
npm start
```

Without `PORT`, local development starts at `127.0.0.1:4173`. If that port is busy, `server.js` tries the next port.

### Production Run

```bash
npm start
```

`package.json` defines:

```json
"start": "node server.js"
```

The server reads `PORT` from the hosting platform. When `PORT` is set, it listens on `0.0.0.0`; otherwise it falls back to local `127.0.0.1:4173`.

### Environment Variables

Use `.env.example` as the safe template:

```env
PORT=4173
BASIC_AUTH_ENABLED=false
BASIC_AUTH_USER=
BASIC_AUTH_PASSWORD=
CREWAI_API_BASE_URL=
CREWAI_API_KEY=
DISCOVERY_AI_API_BASE_URL=
DISCOVERY_FRONTEND_API_MODE=mock
```

Required for Node server startup:

- None. The app can run in mock mode with no backend credentials.

Required for CrewAI proxy routes:

- `CREWAI_API_BASE_URL`
- `CREWAI_API_KEY`

Required for MVP backend proxy routes:

- `DISCOVERY_AI_API_BASE_URL`

Optional:

- `PORT`: hosting port. Defaults to `4173` locally.
- `DISCOVERY_FRONTEND_API_MODE`: `mock`, `mvp_backend` or `legacy_crewai`.
- `BASIC_AUTH_ENABLED`: set to `true` to enable Basic Auth.
- `BASIC_AUTH_USER`: Basic Auth username.
- `BASIC_AUTH_PASSWORD`: Basic Auth password.
- `CREWAI_POLL_INTERVAL_MS`, `CREWAI_POLL_TIMEOUT_MS`, `DISCOVERY_AI_POLL_INTERVAL_MS`: polling tuning.
- `CREWAI_ALLOW_SELF_SIGNED=true`: local development only, for networks with self-signed TLS interception.

For production, set secrets in the hosting provider UI or secret manager. Do not commit `.env`.

### Basic Auth

To protect a public Node deployment:

```env
BASIC_AUTH_ENABLED=true
BASIC_AUTH_USER=your-user
BASIC_AUTH_PASSWORD=your-password
```

If `BASIC_AUTH_ENABLED=true` and either credential is missing, the server logs a startup warning and protected requests return a clear `500` JSON error until the configuration is fixed. `/health` and `/healthz` remain public for platform health checks.

### Optional Proxy Routes

The frontend still works in mock mode without any proxy configuration.

- `/api/crewai/*` returns a clear `501` JSON response when `CREWAI_API_BASE_URL` is missing, and a clear `500` when `CREWAI_API_KEY` is missing.
- `/api/discovery/*` returns a clear `500` JSON response when `DISCOVERY_AI_API_BASE_URL` is missing.
- Real backend paths are unchanged for later integration.

### Health Check

Use:

```text
/health
```

It returns:

```json
{
  "status": "ok",
  "mode": "mock",
  "timestamp": "2026-05-26T00:00:00.000Z"
}
```

`/healthz` is also supported for older deployment configs.

### Public Files

The Node server intentionally serves only:

- `/index.html`
- `/styles.css`
- `/app.js`
- `/demo-config.js`
- files under `/assets/`

Internal files such as `.env`, `server.js`, `package.json`, docs and backend source folders are not exposed as static assets.

## Pre-Deployment Checklist

- Run `npm run check`.
- Confirm `.env` is ignored by Git.
- Confirm no real API keys, bearer tokens, passwords or local databases are committed.
- Confirm static deployments use `?apiMode=mock`.
- Confirm Node deployments have the required environment variables.
- Confirm the app can load `./assets/brand/logo_circ.png` from the deployed path.
