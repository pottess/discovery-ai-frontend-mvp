# Vercel Static Deployment

Discovery AI can be deployed to Vercel as a static frontend MVP for demos.

This deployment runs in mock mode. It does not require `server.js`, CrewAI credentials, backend URLs, database access or enterprise connectors for the app to load.

## What Runs On Vercel

- `index.html`
- `styles.css`
- `app.js`
- `config.vercel.js`
- `assets/`

`config.vercel.js` sets:

- `apiMode: "mock"`
- `agentMode: "mock"`
- `mvpMode: true`
- `agentWorkflowEnabled: true`
- `conversationalAssistantEnabled: false`
- `externalIntegrationsEnabled: false`
- `deploymentTarget: "vercel-static"`

The MVP still shows the agent-driven discovery workflow, processing states, human gates and mock agent outputs. External integrations are simulated with local mock data and `localStorage`.

## What Does Not Run On Vercel

- `server.js` as a persistent Node server
- `/api/crewai/*`
- `/api/discovery/*`
- real CrewAI calls
- real API keys or bearer tokens
- Teams, Outlook, DataDog, analytics, research repository or ticketing integrations

For this deployment, `server.js` remains useful only for local development with `npm start`.

## Deploy Through Vercel UI

1. Import the repository in Vercel.
2. Keep the project as a static site. Do not configure a Node server output.
3. Build command can be left empty, or use:

```bash
npm run vercel:check
```

4. Output directory can be left as the project root when deploying the vanilla static files.
5. Do not add real CrewAI, OpenAI, bearer token or password environment variables for the static demo.
6. Deploy and open `/index.html#home` or `/`.

## Deploy Through Vercel CLI

```bash
npm run vercel:check
vercel
```

For a production deployment:

```bash
npm run vercel:check
vercel --prod
```

Environment variables are optional in mock mode. If you add variables later for a private backend deployment, keep secrets only in Vercel's environment settings and never commit `.env` or `.env.local`.

## Local Static Check

You can test the same static behavior locally by opening `index.html` directly or by running:

```bash
npm start
```

The app should load in mock mode, keep `localStorage` persistence and avoid calls to missing `/api/config` routes in static mode.

## QA Checklist

- Home opens without a backend.
- Product page opens.
- Discovery page opens.
- Discovery progress still represents the agent workflow.
- CSD matrix opens and persists edits locally.
- CSV user import works in research activities.
- Backend-only actions show: `Modo demo: esta ação será simulada localmente.`
- Browser console has no errors caused by missing `/api/config`.

## Secrets

Do not commit:

- `.env`
- `.env.local`
- API keys
- bearer tokens
- passwords
- real internal URLs

Use `.env.example` placeholders only for local or private backend deployments.
