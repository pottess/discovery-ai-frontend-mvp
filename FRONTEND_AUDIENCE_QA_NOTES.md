# Frontend Audience QA Notes

## What Was Fixed

- Centered the product audience preview modal and enabled modal-level vertical scrolling so "Visualizar" on the Product page behaves like the other modals.
- Preserved snapshot-only personas and stakeholders as a display fallback for older localStorage discoveries that do not yet have `personaIds` or `stakeholderIds`.
- Updated the Product discovery cards audience count to use resolved snapshots when IDs are absent.
- Hardened Product and Discovery detail rendering against incomplete older data:
  - missing product `about`, `metrics`, `squad`, `participants`, dates;
  - missing discovery `objective`, `tags`, or `evidence`.
- Re-ran `npm run check`; JavaScript syntax validation passed.

## Remaining Known Limitations

- This is still a static frontend prototype using localStorage; there is no backend persistence for product personas, stakeholders, or discovery audience selections yet.
- Hard delete keeps old discoveries stable only when snapshots exist. If an old discovery references a deleted item by ID and has no snapshot, the item is omitted safely.
- Product and Discovery audience modals are compact previews. Full details remain in the dedicated product audience pages.
- Export/copy actions in Recommendation and Handoff remain UI placeholders until backend export exists.
- Automated visual screenshot QA could not be run in this environment because browser automation/Playwright is not available here.

## Manual Test Steps

1. Open product page:
   - Route: `http://127.0.0.1:4173/index.html?apiMode=local_mock#product/cora-precos`
   - Confirm the header is compact, KPI cards are balanced, and discoveries are easy to scan.
   - Click `Visualizar` in `Pessoas do produto`; confirm the modal opens centered.
   - Click `Gerenciar`; confirm it opens `#product/cora-precos/audience`.

2. Test persona CRUD:
   - Route: `#product/cora-precos/personas/new`
   - Create a persona and confirm it opens the persona detail page.
   - Click `Editar`, change fields, save, and confirm values persist.
   - Click `Arquivar/Excluir`, choose `Arquivar`, and confirm it is hidden unless `Mostrar arquivados` is enabled.
   - Repeat delete confirmation with `Excluir mesmo assim` for a disposable item.

3. Test stakeholder CRUD:
   - Route: `#product/cora-precos/stakeholders/new`
   - Create, edit, archive, and delete a stakeholder using the same pattern.
   - Confirm archived stakeholders do not appear in new discovery selection by default.

4. Test new discovery audience selection:
   - Route: `#product/cora-precos`
   - Click `Novo discovery`.
   - Fill required setup fields and continue to the people section.
   - Select multiple personas and stakeholders.
   - Finish creation and open the discovery detail page.
   - Reload the page and confirm selected `personaIds` and `stakeholderIds` are still represented.

5. Test discovery detail people summary:
   - Route: `#discovery/discovery-2/cora-precos`
   - Confirm `Pessoas relacionadas` is compact and not a long detail section.
   - Click `Visualizar`; confirm preview modal shows only selected personas/stakeholders.
   - Click `Ver detalhes` and `Editar`; confirm navigation to product audience detail/edit pages.
   - Return to the discovery route and click `Editar selecao`; update selections and save.

6. Test layout and navigation:
   - Product route: `#product/cora-precos`
   - Audience route: `#product/cora-precos/audience`
   - Persona not found: `#product/cora-precos/personas/does-not-exist`
   - Stakeholder not found: `#product/cora-precos/stakeholders/does-not-exist`
   - Discovery route: `#discovery/discovery-2/cora-precos`
   - Use browser back/forward across these routes and confirm pages render without errors.

7. Test responsive behavior:
   - At desktop width, confirm Product page uses main/support columns and Discovery page keeps Methodology in the right rail.
   - Under tablet/mobile width, confirm both pages collapse to one column with no horizontal scroll.

8. Final command:
   - Run `npm run check`.
   - Expected result: `node --check app.js && node --check server.js` completes without errors.
