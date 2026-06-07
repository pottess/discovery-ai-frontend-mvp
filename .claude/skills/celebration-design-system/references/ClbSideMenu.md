# ClbSideMenu

A vertical sidebar navigation menu with expandable submenus and React Router integration.

## Import

```ts
import { ClbSideMenu } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | `MenuItem[]` | - | Required. Navigation items |
| Link | `ForwardRefExoticComponent<LinkProps>` | - | React Router `Link` component for SPA navigation |
| locale | `{ subMenuToggleButtonAriaLabel?, subMenuToggleButtonTitle? }` | PT-BR defaults | Accessibility text overrides |

### MenuItem

| Field | Type | Description |
|-------|------|-------------|
| label | string | Required. Menu item text |
| icon | Icons | Required. Icon name |
| to | string | Route path (used with `Link` prop) |
| href | string | URL for anchor navigation |
| onClick | `() => void` | Click handler |
| subMenuItems | `SubMenuItem[]` | Nested sub-items |
| disabled | boolean | Disables the item |
| activeWhen | `string[]` | Routes that trigger active state |

### SubMenuItem

| Field | Type | Description |
|-------|------|-------------|
| label | string | Required. Sub-item text |
| to | string | Route path |
| href | string | URL |
| type | `'folder' \| 'link'` | Folder groups links under a label |
| links | `SubMenuItem[]` | Children when type is `'folder'` |
| selectionLabel | string | Group label for folder type |
| onClick | `() => void` | Click handler |
| disabled | boolean | Disables sub-item |

## Examples

```jsx
// With React Router
import { Link } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
  {
    label: 'Management',
    icon: 'management',
    subMenuItems: [
      { label: 'Users', to: '/management/users' },
      { label: 'Roles', to: '/management/roles' },
    ],
  },
  { label: 'Settings', icon: 'settings', to: '/settings' },
]

<ClbSideMenu items={menuItems} Link={Link} />

// With folder-type submenus
const items = [
  {
    label: 'Reports',
    icon: 'document',
    subMenuItems: [
      {
        label: 'Sales',
        type: 'folder',
        selectionLabel: 'Sales Reports',
        links: [
          { label: 'Monthly', to: '/reports/sales/monthly' },
          { label: 'Annual', to: '/reports/sales/annual' },
        ],
      },
    ],
  },
]
```

## Notes

- Uses `<nav>` semantically for screen readers
- Submenu toggle responds to `Enter`, `Space`, and `Escape`
- Uses a `<dialog>` element internally for the submenu — provides correct modal behavior
- When `Link` prop is provided, use `to` on items; without it, use `href`
- `activeWhen` lets you declare additional routes that should mark an item as active (useful for nested routes)
