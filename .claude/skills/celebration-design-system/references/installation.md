# Celebration Design System — Installation & Setup

## Install

```bash
npm install @celebration/react
```

## CSS Import

Import the CSS **once** at the app entry point (e.g., `main.tsx` or `App.tsx`):

```ts
import '@celebration/assets/src/main.css'
```

> The styles are bundled in `@celebration/assets`. Without this import, components will render unstyled.

## Required Providers

Wrap your app with the required providers at the root level:

```tsx
import { ThemeProvider, ToastProvider } from '@celebration/react'

function Root() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
  )
}
```

- `ThemeProvider` — applies the design token theme to all Celebration components
- `ToastProvider` — enables the `useToast` hook to work from anywhere in the app

## Importing Components

All components are named exports from `@celebration/react`:

```ts
import { ClbButton, ClbInputText, ClbModal } from '@celebration/react'
```

## Peer Dependencies

> Verified against `@celebration/react@2.8.1` (newest **stable**) on 2026-06-05 via the private
> Azure Artifacts feed. NOTE: the feed's `latest` dist-tag currently points to an **alpha**
> (`2.8.0-alpha.*`) — pin an exact stable version (e.g. `2.8.1`), do not install `latest`.

- `react` ^19.2.3
- `react-dom` ^19.2.3
- `react-router` >=6.0.0 (required for `ClbBreadcrumb`, `ClbMenu`, `ClbSideMenu` navigation features;
  installing `react-router-dom` 6/7 brings it)

### Private registry (Azure Artifacts)

`@celebration/*` is published to a private Ambev feed. The project `.npmrc` scopes it:
```
@celebration:registry=https://pkgs.dev.azure.com/AMBEV-SA/_packaging/design-system/npm/registry/
```
Authenticate with `npm run refreshVSToken` (`vsts-npm-auth -config "./.npmrc"`). Never commit the
token — `.npmrc` is gitignored.

## Key Notes

- Components use CSS custom properties (design tokens) — see `references/tokens.md`
- Font used is `IBM Plex Sans` (loaded via theme)
- Many components accept an `i18n` prop for text customization (useful for PT-BR)
- Navigation components (`ClbMenu`, `ClbSideMenu`, `ClbBreadcrumb`) accept a `Link` prop from `react-router-dom` for SPA routing
- All components are accessible by default: ARIA attributes, keyboard navigation, and screen reader support are built in
