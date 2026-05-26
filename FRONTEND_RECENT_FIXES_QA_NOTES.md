# Frontend Recent Fixes QA Notes

## What Was Checked

- Product detail page actions: header CTAs, quick actions and product audience entry points.
- Product audience management routes: list, persona detail, persona edit, stakeholder detail and stakeholder edit.
- Discovery detail page layout: methodology rail, workflow placement, compact people card, artifacts, timeline and team cards.
- Methodology rail behavior: no internal scrolling, method list visible, page scroll handling overflow.
- New Discovery wizard support links: add rows, remove rows and preservation of remaining link values.
- New Discovery wizard dropdowns: persona/stakeholder menus render as overlays with max-height and close on outside click.
- Edit people modal: active personas/stakeholders render, selected counts are shown, quick-add controls are present.
- Discovery favorites: cards, detail page star, sidebar Discovery list, sidebar navigation and separation from assistant prompts.
- Product favorites: product favorite menu remains separate from discovery favorites.
- Hash navigation: product, discovery, product audience, persona/stakeholder detail and edit routes.
- Console: no app-level uncaught errors found during browser checks.
- Visual layout: no persistent horizontal scroll found after route stabilization; no major blank-space regression observed.

## What Was Fixed

- No additional source-code fixes were required during this regression pass.
- The only new artifact from this pass is this QA notes file.

## Remaining Known Limitations

- Automated QA did not persistently create quick-add persona/stakeholder records in the edit people modal to avoid leaving test data in localStorage. The controls and rendering were verified, and manual steps below cover the full save path.
- Browser automation reported an external Statsig/network message from the test harness once; app console logs remained clean.
- Mobile behavior was checked against the responsive CSS rules and existing layout constraints, but not with a separate physical mobile viewport in this pass.

## Manual Test Steps

1. Open `http://127.0.0.1:4173/index.html?v=recent-regression-qa&apiMode=local_mock#product/cora-precos`.
2. Confirm the product header buttons align: `Novo discovery` and `Gerenciar pessoas do produto`.
3. Open `#product/cora-precos/audience`; confirm `Voltar ao produto`, `Criar persona` and `Criar stakeholder` align and do not clip text.
4. Open `#discovery/discovery-2/cora-precos`; confirm methodology is in the right rail on desktop and all methods are visible without internal scroll.
5. Open `Novo discovery`, advance to the participants step, click `Adicionar mais links` twice, remove the middle row and confirm the other link values remain.
6. In the same wizard step, open persona and stakeholder dropdowns; confirm they overlay the card, show internal scroll if needed, update selected counts and close on outside click.
7. On the discovery detail page, click `Editar seleção` in `Pessoas relacionadas`; confirm active personas/stakeholders appear with selected chips and counts.
8. In that modal, quick-add one persona and one stakeholder, save, reload the discovery page and confirm the compact summary preserves the selection.
9. Favorite and unfavorite a discovery card from the home page; confirm the sidebar Discovery list updates immediately.
10. Favorite and unfavorite from the discovery detail header star; confirm the sidebar updates and the state persists after reload.
11. Click a favorited discovery in the sidebar; confirm it opens the discovery detail page and does not add a prompt/message to the assistant chat.
12. Favorite/unfavorite a product from the products page; confirm product favorites remain separate from discovery favorites.
13. Use browser back/forward after navigating between home, product, audience and discovery routes; confirm the visible page follows the hash.
14. Open DevTools console or use the browser console logs; confirm there are no app-level uncaught errors.
