# ClbBreadcrumb

Navigation breadcrumb component. Requires `react-router-dom`.

## Import

```ts
import { ClbBreadcrumb } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | BreadcrumbItem[] | - | Breadcrumb items (required) |

```ts
interface BreadcrumbItem {
  label: string
  url: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
```

## Examples

```jsx
const items = [
  { url: '/home', label: 'Home' },
  { url: '/products', label: 'Products' },
  { url: '/products/electronics', label: 'Electronics' },
]

<ClbBreadcrumb items={items} />
```

## Notes

- The last item is the current page — it is highlighted and not clickable
- Items are separated by a chevron icon automatically
- When more than 5 items, intermediate items collapse into a dropdown (first + last 4 always visible)
- Items without a label are filtered out automatically
- Best practice: always include a Home item as the first entry
