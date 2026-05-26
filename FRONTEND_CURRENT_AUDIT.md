# Frontend Current Audit

## 1. Current Architecture Summary

This prototype is a static frontend served by a small native Node.js server.

- `index.html` contains all application markup, views, modal shells, and static template sections.
- `styles.css` contains the full visual system, layout, responsive behavior, cards, route-specific views, full-page new discovery flow, and modal styles.
- `app.js` is the main client application. It owns hash routing, mock data, rendering, local UI state, new discovery orchestration, CrewAI calls, polling, and small interaction simulations.
- `server.js` serves static files and acts as a local proxy for CrewAI so the browser never receives `CREWAI_API_KEY`.
- `package.json` defines only native Node scripts. There are no frontend build tools, no bundler, and no runtime dependencies.

The application is currently a single-page static app using `location.hash` routing. Most state lives in module-level variables in `app.js`, with limited persistence through `localStorage` for product favorites by user profile.

## 2. Existing Views/Routes

The app uses `[data-view]` containers in `index.html` and route parsing in `app.js`.

Current views:

- `home`: repository landing/home view with assistant panel and recent discovery cards.
- `products`: product list view with search, product stats, grouped products by Torre/Tribo, selection summary, and favorites.
- `product`: product detail page with product context, metrics, squad/users/stakeholders, artifacts, and product discovery cards.
- `discovery`: discovery detail page with readiness/status, problem/objective, insights, methodology list, evidence, artifacts, and chat.
- `synthesis`: synthesis page rendered dynamically from static or CrewAI-normalized payloads.
- `interview`: recruitment/interview planning page with participant selection and simulated recruiting.
- `interview-session`: participant interview session detail page with insights, transcript, and recording modal.

Current hash route shapes:

- `#home`
- `#products`
- `#product/:productId`
- `#discovery/:discoveryId/:productId`
- `#synthesis/:discoveryId/:productId`
- `#interview/:methodId/:discoveryId/:productId`
- `#interview-session/:participantId/:methodId/:discoveryId/:productId`

Non-route UI:

- Full-page `Novo discovery` modal.
- Method entry modal for adding text/files to a methodology item.
- Recording modal for mock interview playback.

## 3. Current New Discovery Flow

The new discovery flow starts from the product page button `Novo Discovery`.

Steps currently implemented:

1. Setup:
   - Required title.
   - Required problem.
   - Required objective.

2. Participants:
   - Simulated dropdowns for responsible people, users/personas, and stakeholders.
   - Optional deadline.
   - Optional file picker.
   - Link field intended to be optional.

3. CSD:
   - Certezas.
   - Suposições.
   - Dúvidas.
   - Add/remove rows are supported.

4. Methodology:
   - `Discovery Otimizado`.
   - `Discovery Completo`.
   - Displays method packages, durations, descriptions, and samples.
   - Final `Criar discovery` button starts CrewAI integration.

The final submit:

- Builds a generated `draftId`.
- Collects participants and CSD.
- Loads `/api/config` with a 2-second client timeout.
- Calls `/api/crewai/kickoff`.
- Requires a `kickoff_id`.
- Polls `/api/crewai/status/:kickoffId`.
- Creates and opens the discovery page only after final success status.

Current behavior:

- The support link field is optional in both the static HTML and the reset-rendered dynamic rows.

## 4. Current CrewAI Integration

Frontend endpoints called:

- `GET /api/config`
- `POST /api/crewai/kickoff`
- `GET /api/crewai/status/:kickoffId`

Proxy behavior in `server.js`:

- Loads `.env` manually.
- Reads `CREWAI_API_KEY`, with `CREWAI_BEARER_TOKEN` still supported as a legacy alias.
- Uses `CREWAI_API_BASE_URL` or a default CrewAI URL.
- Forwards `POST /api/crewai/kickoff` to remote `/kickoff`.
- Forwards `GET /api/crewai/status/:kickoffId` to remote `/status/{kickoff_id}`.
- Returns structured local errors when the token is missing or upstream fails.
- Exposes `/api/config` with polling interval and timeout.
- Supports optional basic auth via `BASIC_AUTH_*`, with `DISCOVERY_ACCESS_*` still supported as legacy aliases.

Current frontend payload shape:

- The active `buildCrewAiDiscoveryInput()` sends a flattened `inputs` object with:
  - `discovery_id`
  - `title`
  - `objective`
  - `problem`
  - stringified arrays for `owners`, `users`, `stakeholders`
  - stringified arrays for `certainties`, `assumptions`, `open_questions`
  - first link as `link`
  - compatibility placeholder keys for expected Crew task outputs

The current code still has a helper for methodology payload shape, but the active kickoff function currently sends the flattened input shape, not the earlier `Methodology_Appoved` object.

Polling status handling:

- Success statuses: `completed`, `complete`, `success`, `succeeded`.
- Error statuses: `failed`, `failure`, `error`, `cancelled`, `canceled`.
- Status can be read from `state`, `result.state`, `data.state`, `status`, `result.status`, or `data.status`.
- CrewAI result extraction attempts nested `result`, `data.result`, `output`, `response`, and recursively parsed JSON-like fields.

## 5. Current Local State and Persistence Behavior

In-memory state:

- Selected route/product/discovery/method/participant.
- Mock products, discoveries, product discovery templates, methodology packages, participants, interview details, and synthesis output.
- `draftDiscovery` and `createdDiscoveries` are held only in memory.
- New discovery form drafts are held in module-level variables.
- Uploaded files are only local `File` objects or normalized metadata, not uploaded or persisted.
- Recruitment/interview participant state is simulated in memory.
- Discovery chat attachments are local-only.

Persistent state:

- Product favorites are persisted in `localStorage` under `discoveryIa.productFavoritesByUser`.
- Current profile is hardcoded as:
  - `id: "perfil-ambev-demo"`
  - `name: "Perfil Ambev"`
- Favorites are stored as a user-profile keyed table:
  - `{ [profileId]: [productId, ...] }`

Not currently persisted:

- Created discoveries.
- New discovery drafts.
- Product edits.
- Method entries.
- CSD entries.
- CrewAI raw responses beyond the current in-memory discovery object.
- Interview recruitment state.
- User identity beyond the hardcoded local profile.

## 6. What Already Supports the MVP

The current frontend already supports several MVP-facing behaviors:

- Product repository with search and product stats.
- Product taxonomy by Torre and Tribo.
- Product detail pages.
- Profile-specific product favorites in local storage and sidebar.
- Full-page new discovery creation flow.
- Basic CSD capture.
- Methodology package selection.
- CrewAI kickoff/polling through a local secure proxy.
- Progress/status panel during CrewAI execution.
- Discovery detail page created after successful CrewAI processing.
- Basic rendering of normalized CrewAI insights/reasoning when available.
- Mock discovery methodology workflow.
- Method entry modal for local evidence/text/files.
- Interview recruitment simulation.
- Participant interview detail and mock transcript/recording.
- Static deployment path with no dependency install requirement.

## 7. What Is Missing for the MVP Workflow

Key missing pieces for an end-to-end MVP:

- Durable backend persistence for products, discoveries, favorites, drafts, method entries, and CrewAI outputs.
- Real user identity/profile integration instead of a hardcoded profile id.
- Contract-finalized CrewAI response schema.
- Reliable rendering of CrewAI output as the primary discovery source of truth.
- File upload/reference contract for evidence attachments.
- Draft save/resume before CrewAI succeeds.
- Fallback behavior when CrewAI is unavailable or token is missing.
- Validation and normalization for all form fields.
- Clear distinction between mock discovery cards and real created discoveries.
- Methodology payload helper is not aligned with the active flattened kickoff payload.
- No real approval/human-in-the-loop workflow despite discovery workflow concepts.
- No automated tests for route behavior, form flow, CrewAI polling, or local persistence.
- No accessibility pass for all custom controls, simulated selects, modals, and keyboard flows.

## 8. Implementation Risks

- Global mutable state in `app.js` makes regressions likely as workflows grow.
- Created discoveries disappear on refresh, which can be confused with failed creation.
- CrewAI schema is not stable enough for dependable UI rendering.
- Long polling blocks discovery creation until final success and has no local draft fallback.
- Error paths are user-visible but do not preserve the user's completed form data as a saved draft.
- The local favorites table can diverge from product data if product ids change.
- Reset logic can drift from static HTML if dynamic form rows are not kept aligned with the initial markup.
- The app contains many repeated selectors and direct DOM mutations, increasing coupling between HTML and JS.
- Mock data and real integration data are mixed in the same rendering paths.
- The server proxy forwards arbitrary request JSON to CrewAI without schema validation.
- File inputs are represented locally but have no backend lifecycle.
- There is no concurrency control for repeated clicks, route changes during processing, or duplicate discovery creation beyond limited button disabling.

## 9. Recommended Implementation Sequence

1. Stabilize the current static prototype:
   - Align helper names and active CrewAI payload shape.

2. Define MVP contracts:
   - Discovery entity schema.
   - Product schema.
   - Favorite schema.
   - CrewAI kickoff input schema.
   - CrewAI final output schema.
   - Attachment/reference schema.

3. Add a local persistence layer without new dependencies:
   - Start with `localStorage` or JSON-backed server endpoints only if acceptable for demo.
   - Persist created discoveries and CrewAI payloads.
   - Persist method entries and draft state.

4. Harden new discovery creation:
   - Save local draft before kickoff.
   - Allow retry after CrewAI failure.
   - Preserve form data on errors.
   - Render a useful pending/error state.

5. Normalize CrewAI consumption:
   - Create a single normalization function for final discovery UI data.
   - Render CrewAI output as first-class discovery content.
   - Keep raw payload available for debugging.

6. Implement MVP discovery workflow states:
   - Draft.
   - Processing.
   - Ready for review.
   - In execution.
   - Complete.
   - Failed/retry needed.

7. Improve product and favorite behavior:
   - Replace hardcoded profile with a real or configurable profile source.
   - Keep favorites as a user-profile table.
   - Add empty, loading, and error states.

8. Add focused verification:
   - `node --check app.js`
   - `node --check server.js`
   - Browser smoke tests for core routes.
   - Browser smoke test for new discovery flow with and without CrewAI.
   - Browser smoke test for favorites persistence.

9. Only after MVP behavior stabilizes, consider structural refactors:
   - Split `app.js` into smaller native modules if the static architecture remains.
   - Do not migrate to React/Next.js unless explicitly chosen as a separate product decision.
