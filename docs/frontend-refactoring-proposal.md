# Discovery AI Frontend Refactoring Proposal

## Context

The current Discovery AI frontend is a static vanilla JavaScript prototype served by `server.js`, with the main application logic concentrated in `app.js`, markup in `index.html`, and styling in `styles.css`.

Recent MVP additions expanded the frontend into a workflow cockpit with:

- Discovery run lifecycle support.
- Local mock mode.
- MVP backend proxy client calls.
- Human approval gates.
- Artifact rendering.
- Local persistence.

This makes the prototype demoable, but also increases the pressure on maintainability. The main refactoring decision is whether to stabilize the current static architecture or migrate to a component framework.

## Path A - Keep Vanilla JS And Modularize

### Summary

Keep the current static hosting model, but split the monolithic frontend into focused JavaScript modules and CSS files by domain.

Target shape:

- `app.js` becomes a thin bootstrap/orchestration file.
- Domain modules handle products, routing, discovery workflow, API clients, mock data, artifacts, gates, persistence, and UI rendering.
- `styles.css` is split by page/domain while preserving the same visual system.
- `server.js` continues to serve static files and proxy backend calls.

### Pros

- Lowest migration risk for the MVP.
- Preserves the current working prototype and local mock demo.
- No build step required.
- No new dependencies.
- Keeps deployment simple: static files plus local Node proxy.
- Easier to review incrementally because behavior can remain unchanged while files are moved.
- Compatible with the current hash-based routing and in-app browser review flow.
- Faster path to reduce `app.js` size and improve ownership boundaries.

### Cons

- No native component model.
- No type safety unless JSDoc or TypeScript is added later.
- UI state will remain manually coordinated across DOM selectors and local state.
- Testability improves only moderately unless a test harness is added.
- Large interactive flows can still become difficult to reason about if modules are not disciplined.
- Reusable UI patterns remain convention-based instead of framework-enforced.

### Estimated Effort

Moderate.

Suggested estimate:

- 2-4 days for safe modularization of JavaScript without behavior changes.
- 1-2 days for CSS splitting and cleanup.
- 1-2 days for regression QA across MVP workflow states.

Total: approximately 4-8 working days, depending on how much QA evidence is required.

### Risk Level

Low to medium.

Primary risk is accidental behavior drift while moving code. This can be controlled by moving one domain at a time and keeping the public functions/events stable.

### Files Affected

Likely changed:

- `app.js`
- `styles.css`
- `index.html` only if script/style includes need to be updated.
- `server.js` only if static file serving needs module MIME handling or cache headers.

Likely added:

- `js/bootstrap.js`
- `js/router.js`
- `js/api/discovery-api.js`
- `js/api/crewai-api.js`
- `js/state/discoveries-store.js`
- `js/state/favorites-store.js`
- `js/workflow/state-machine.js`
- `js/workflow/polling.js`
- `js/workflow/local-mock.js`
- `js/discovery/render-discovery-page.js`
- `js/discovery/artifacts.js`
- `js/discovery/gates.js`
- `js/products/products.js`
- `css/base.css`
- `css/layout.css`
- `css/products.css`
- `css/discovery.css`
- `css/workflow.css`
- `css/artifacts.css`
- `css/forms.css`

### Migration Sequence

1. Create a module boundary map.
   Identify pure helpers, API clients, state stores, renderers, and event handlers inside `app.js`.

2. Extract constants and pure helpers first.
   Move workflow constants, run statuses, event types, labels, formatters, and artifact helpers without changing behavior.

3. Extract API clients.
   Move CrewAI and Discovery AI API calls into dedicated modules while keeping function names stable.

4. Extract persistence.
   Move localStorage keys and functions for created discoveries, favorites, and local mock runs.

5. Extract workflow runtime.
   Move polling, lifecycle normalization, local mock transitions, and gate event handling.

6. Extract renderers by page/domain.
   Move product rendering, discovery page rendering, artifact rendering, and gate panels into separate modules.

7. Convert `app.js` into bootstrap.
   Keep app initialization, global event wiring, route dispatching, and startup calls in one clear place.

8. Split CSS after JavaScript stabilizes.
   Split by domain while preserving selector names to avoid visual regressions.

9. Run full manual QA.
   Test local mock workflow, MVP backend error states, legacy CrewAI mode, favorites, product taxonomy, and responsive layout.

### Recommended Use

Best fit for MVP stabilization.

This path gives the team maintainability improvements without taking on framework migration risk before stakeholder review and early backend integration stabilize.

## Path B - Migrate To Next.js/React

### Summary

Rebuild the frontend as a typed React application using Next.js App Router, componentized UI, typed data contracts, and API client hooks.

Target shape:

- Pages become App Router routes.
- Discovery workflow becomes typed state and component hierarchy.
- API calls move into typed clients and hooks.
- Artifacts and gates become reusable components.
- Server proxy behavior can move into Next.js route handlers or remain in a separate backend proxy during transition.

### Pros

- Stronger long-term maintainability.
- Clear component boundaries for cockpit, timeline, gates, artifact cards, products, and modals.
- Easier to introduce TypeScript contracts for backend responses.
- Better fit for complex workflow UI as MVP grows into V1.
- Hooks can isolate polling, local mock mode, persistence, and backend mutations.
- Easier future testing with component tests and route-level integration tests.
- More scalable for role-based views, permissions, artifact detail pages, and collaboration features.

### Cons

- Highest migration risk.
- Adds build tooling and dependencies.
- Requires routing redesign from hash routes to App Router routes.
- Requires deployment model changes.
- Local static serving would no longer be the whole app story.
- Existing DOM-driven behavior must be rewritten, not simply moved.
- The current prototype has many coupled selectors and implicit state assumptions that need careful translation.
- Risk of slowing stakeholder review if attempted before the MVP workflow is stable.

### Estimated Effort

High.

Suggested estimate:

- 2-3 days for project scaffolding, routing model, styling strategy, and environment setup.
- 4-7 days to rebuild core product and discovery pages.
- 4-7 days to rebuild the new discovery flow, workflow cockpit, gates, artifacts, polling, local mock mode, and persistence.
- 2-4 days for proxy/API route strategy and backend integration alignment.
- 3-5 days for regression QA, accessibility, responsive checks, and bug fixing.

Total: approximately 3-5 working weeks for a careful migration.

### Risk Level

Medium to high.

The largest risks are route mismatch, feature parity gaps, styling regressions, and accidental changes to the MVP workflow while backend contracts are still evolving.

### Files Affected

Likely replaced or heavily changed:

- `index.html`
- `app.js`
- `styles.css`
- `server.js`
- `package.json`

Likely added:

- `next.config.js`
- `tsconfig.json`
- `app/layout.tsx`
- `app/page.tsx`
- `app/products/page.tsx`
- `app/products/[productId]/page.tsx`
- `app/discovery/[discoveryId]/[productId]/page.tsx`
- `app/api/discovery/*`
- `app/api/crewai/*`
- `components/discovery/WorkflowCockpit.tsx`
- `components/discovery/WorkflowTimeline.tsx`
- `components/discovery/ArtifactGroup.tsx`
- `components/discovery/ResearchApprovalGate.tsx`
- `components/discovery/EvidenceUploadGate.tsx`
- `components/discovery/InsightsReviewGate.tsx`
- `components/discovery/OpportunityReviewGate.tsx`
- `components/discovery/RecommendationHandoff.tsx`
- `components/products/ProductTable.tsx`
- `components/products/FavoriteButton.tsx`
- `lib/api/discovery-client.ts`
- `lib/api/crewai-client.ts`
- `lib/workflow/state-machine.ts`
- `lib/workflow/local-mock.ts`
- `lib/storage/discoveries-store.ts`
- `lib/storage/favorites-store.ts`
- `hooks/useDiscoveryRun.ts`
- `hooks/useDiscoveryArtifacts.ts`
- `hooks/useLocalStorage.ts`

### Migration Sequence

1. Freeze the current MVP behavior.
   Document routes, states, mock flow, gates, artifact groups, and manual QA expected results.

2. Create a Next.js branch.
   Keep the static frontend untouched until the React app reaches parity.

3. Define typed contracts.
   Convert workflow states, run statuses, event types, artifacts, discovery runs, evidence items, and products into TypeScript types.

4. Build shell and routing.
   Recreate layout, navigation, products route, product detail route, and discovery route.

5. Port API clients.
   Add typed Discovery AI and CrewAI clients. Decide whether proxy endpoints live in Next route handlers or the existing `server.js` during migration.

6. Port state and persistence.
   Recreate favorites, created discoveries, local mock runs, and API mode behavior.

7. Port MVP workflow components.
   Rebuild cockpit, timeline, artifact cards, approval gates, evidence upload, recommendation and handoff.

8. Port new discovery flow.
   Rebuild the modal/full-page flow and ensure it creates local drafts immediately in MVP backend and local mock modes.

9. Validate feature parity.
   Compare static app and React app route by route, including local mock end-to-end workflow.

10. Switch deployment.
   Update scripts, environment variables, hosting instructions, and developer docs.

### Recommended Use

Best fit for V1 after MVP validation.

This path is the stronger long-term application architecture, but it should follow product and backend contract stabilization. Starting it too early risks spending migration effort on flows that may still change.

## Recommendation

### MVP Recommendation

Choose Path A: keep vanilla JS and modularize.

Reasoning:

- The MVP is already working as a static prototype.
- Stakeholder review depends more on workflow clarity and reliability than framework choice.
- The backend contract is still evolving.
- Modularization reduces immediate maintenance pain with limited delivery risk.
- The current deployment and local mock mode remain intact.

Recommended MVP target:

- Keep `server.js`, static hosting, hash routing, and vanilla JS.
- Split `app.js` by domain.
- Split `styles.css` by domain.
- Add lightweight documentation for module ownership.
- Avoid introducing React/Next.js before MVP review.

### V1 Recommendation

Plan Path B for V1 if Discovery AI becomes a maintained product rather than a prototype.

Trigger conditions for Next.js/React:

- Multiple roles or permissioned views.
- More artifact detail pages.
- Collaborative review flows.
- Complex backend polling/subscriptions.
- Typed contracts required across frontend and backend.
- Need for automated component and route testing.
- Long-term ownership by multiple engineers.

Recommended V1 target:

- Migrate to Next.js/React with TypeScript.
- Use typed API clients and workflow hooks.
- Convert workflow gates and artifacts into reusable components.
- Move from hash routes to product/discovery routes.
- Keep local mock mode as a first-class demo and QA mode.

## Final Position

Short term: Path A is the right engineering move.

Long term: Path B is the right product-platform move once the MVP workflow and backend contract are validated.

