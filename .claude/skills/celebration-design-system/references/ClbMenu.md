# ClbMenu

A responsive horizontal navigation menu bar. Collapses to a hamburger menu on small screens.

## Import

```ts
import { ClbMenu } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | MenuItem[] | - | Menu items (required) |
| Link | React.ComponentType | - | React Router `Link` component for SPA navigation |
| onViewChange | (label: string) => void | - | Called when active menu item changes |
| menuSlotForCheckWidth | string | - | CSS selector used to determine menu container width |

```ts
interface MenuItem {
  label: string
  url?: string
  isActive?: boolean
  children?: MenuItem[]  // submenu
  onClick?: () => void
}
```

## Example

```jsx
import { Link } from 'react-router-dom'

const menuItems = [
  { label: 'Dashboard', url: '/dashboard', isActive: true },
  { label: 'Products', url: '/products' },
  {
    label: 'Reports',
    children: [
      { label: 'Sales', url: '/reports/sales' },
      { label: 'Inventory', url: '/reports/inventory' },
    ],
  },
]

<ClbMenu
  items={menuItems}
  Link={Link}
  onViewChange={(label) => console.log(`Active: ${label}`)}
/>
```

## Notes

- Requires `Link` from `react-router-dom` for SPA navigation without full page reload
- Items with `children` render as dropdown submenus
- Automatically switches to hamburger menu on narrow screens
- Set `isActive: true` on the current menu item to highlight it
