# ClbHeader

The application top header bar with logo, product name, and slot for additional content.

## Import

```ts
import { ClbHeader } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| logo | string | - | Logo image URL |
| productName | string | - | Application/product name |
| rootUrl | string | `'/'` | URL for logo click navigation |
| children | ReactNode | - | Additional header content (right side) |
| onClickImage | () => void | - | Custom logo click handler (overrides rootUrl) |
| customHeaderImage | () => ReactNode | - | Custom image renderer |

## Examples

```jsx
// Basic
<ClbHeader logo="/assets/logo.png" productName="My Application" />

// With user info and logout (common pattern)
<ClbHeader logo="/assets/logo.png" productName="Cora Prices">
  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
    <ClbAvatar label="John Doe" links={[{ label: 'Logout', onClick: handleLogout }]} />
  </div>
</ClbHeader>

// With React Router navigation
<ClbHeader logo="/assets/logo.png" productName="My App" onClickImage={() => navigate('/')} />
```

## Notes

- Auto-renders as `<header>` at the top level, or `<div>` when nested inside another `<header>`
- Logo image includes alt text and aria-label automatically
- Use `children` to add navigation menus, user avatar, notification badges, etc.
