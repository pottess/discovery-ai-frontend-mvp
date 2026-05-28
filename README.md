# Discovery AI Frontend Prototype

Static frontend prototype for a Discovery repository and workflow experience. The app is built with vanilla HTML, CSS and JavaScript, and includes a small native Node.js server that serves static files and proxies backend calls so secrets are never exposed in the browser.

## Overview

Main files:

- `index.html`: app shell, pages, modals and static markup.
- `styles.css`: visual system, responsive layout and modal styles.
- `app.js`: hash routing, mock data, local state, workflow UI, polling and API client logic.
- `server.js`: static file server plus local proxy endpoints.
- `assets/brand/logo_circ.png`: product logo used in the global header.

The prototype supports local mock/demo mode, MVP backend mode and legacy CrewAI proxy mode. Most product and discovery data is still mock/local state.

## MVP Architecture Correction

Agents are in MVP. CrewAI processing and discovery intelligence are core to Discovery AI, and the frontend remains the workflow interaction layer. The research conversational assistant is future, but the agent workflow, agent processing states, output contracts, structured outputs and human approval gates are part of the MVP.

The MVP validates the agent-driven discovery workflow without depending on enterprise integrations.

External integrations such as Teams, Outlook, Tech Metrics, DataDog, product databases, analytics platforms, research repositories, Jira/Linear, Slack/Teams notifications, SSO/permissions and automated external data retrieval are future. In MVP, they may be simulated through manual input, file upload, mock data, fixture outputs, local storage and mock backend responses.

## Documentation

- `docs/MVP_SCOPE_AND_ROADMAP.md`: corrected MVP scope, architecture and future roadmap.
- `docs/FRONTEND_MVP_STATUS.md`: current frontend implementation status and known gaps.
- `docs/frontend-mvp-contract.md`: target MVP workflow, agent states, human gates and backend contract.
- `docs/DEPLOYMENT_GUIDE.md`: deployment and hosting guidance.

## Install

Use Node.js 20 or newer.

```bash
npm install
```

There are currently no runtime dependencies, but running `npm install` is safe if a lockfile is added later.

## Run Locally

```bash
npm start
```

or:

```bash
npm run dev
```

By default, the server starts at:

```text
http://127.0.0.1:4173/index.html
```

If port `4173` is busy and `PORT` is not set, `server.js` tries the next port.

## Mock/Demo Mode

For the safest local demo, open the app with mock mode enabled:

```text
http://127.0.0.1:4173/index.html?apiMode=mock
```

`apiMode=mock` uses local mock run data and does not require live CrewAI credentials or an MVP backend. It is useful for simulating the MVP agent workflow without enterprise integrations.

Older links using `local_mock` still work as a compatibility alias:

```text
http://127.0.0.1:4173/index.html?apiMode=local_mock
```

In Node server mode, `/api/config` exposes explicit MVP feature flags: `agentWorkflowEnabled: true`, `conversationalAssistantEnabled: false`, `externalIntegrationsEnabled: false`, and `agentMode` as either `mock` or `crewai`. The `/api/discovery/*` endpoints use mock agent outputs when no real backend is configured.

## Environment Variables

Copy `.env.example` to `.env` for local server configuration:

```bash
cp .env.example .env
```

Safe example values:

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

Notes:

- Do not commit `.env`.
- `CREWAI_API_KEY` is read only by `server.js` and forwarded as a bearer token to CrewAI.
- `CREWAI_API_BASE_URL` points to the deployed CrewAI API when using legacy CrewAI mode.
- `DISCOVERY_AI_API_BASE_URL` points to the MVP backend when using MVP backend mode.
- `BASIC_AUTH_ENABLED=true` enables basic auth with `BASIC_AUTH_USER` and `BASIC_AUTH_PASSWORD`.
- Legacy names `CREWAI_BEARER_TOKEN`, `DISCOVERY_ACCESS_USER` and `DISCOVERY_ACCESS_PASSWORD` are still supported for compatibility.

## Routes And Views

The app uses hash routing. Current route shapes include:

- `#home`: repository home with user products and recent discoveries.
- `#products`: product catalog.
- `#product/:productId`: product detail page.
- `#product/:productId/audience`: product audience management.
- `#product/:productId/personas/:personaId`: persona detail.
- `#product/:productId/personas/:personaId/edit`: persona edit.
- `#product/:productId/stakeholders/:stakeholderId`: stakeholder detail.
- `#product/:productId/stakeholders/:stakeholderId/edit`: stakeholder edit.
- `#discovery/:discoveryId/:productId`: discovery detail and workflow cockpit.
- `#synthesis/:discoveryId/:productId`: synthesis page.
- `#interview/:methodId/:discoveryId/:productId`: interview planning.
- `#interview-session/:participantId/:methodId/:discoveryId/:productId`: interview session detail.

The global header, sidebar and new discovery flow are shared across routes.

## Publish

Static demo mode:

1. Publish `index.html`, `styles.css`, `app.js`, `config.vercel.js` and `assets/` to a static host.
2. Use relative asset paths so GitHub Pages subpaths work.
3. Open normally for a credentials-free demo; `config.vercel.js` sets mock mode for static deploys.
4. API proxy routes such as `/api/crewai/*` are not available in pure static hosting.

To prepare a static publish folder:

```bash
npm run build:static
```

This creates `dist/` with the static demo files, including `config.vercel.js`, which defaults static deploys to mock mode.

For Vercel static deployment, see `docs/VERCEL_DEPLOYMENT.md`.

Node server mode:

1. Deploy the full project to a Node.js 20+ environment.
2. Set environment variables in the hosting platform, never in committed files.
3. Run `npm start`.
4. Configure the platform health check to `/health`.

See `docs/DEPLOYMENT_GUIDE.md` for more detail.

## Checks

```bash
npm run check
```

This validates JavaScript syntax for `app.js` and `server.js`.

## Continuous Integration

GitHub Actions runs `.github/workflows/ci.yml` on every push and pull request. The workflow uses Node.js LTS, installs dependencies with `npm ci` when a lockfile exists or `npm install` otherwise, then runs:

```bash
npm run check
```

If a `test` script is added to `package.json` later, CI will also run `npm test`. To reproduce the current CI check locally, run:

```bash
npm install
npm run check
```

## Known Limitations

- Most product, discovery, workflow and interview data is mock/local state.
- Created discoveries and workflow progress are not durable backend records yet.
- File attachments are represented locally and are not uploaded to external storage.
- CrewAI output is normalized best-effort because the final response schema is not yet contract-stable.
- Enterprise integrations are not part of MVP and are simulated when needed.
- Static hosting cannot use the Node proxy endpoints.
- The app has no automated browser regression suite yet.

## Security

Never commit secrets, bearer tokens, API keys, local `.env` files, private exports or local databases. Keep credentials in environment variables managed by the deployment platform.
