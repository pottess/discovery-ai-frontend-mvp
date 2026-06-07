# ClbIcon

Renders a single icon from the Celebration icon library.

## Import

```ts
import { ClbIcon } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | Icons | - | Icon name (required) |
| size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xlg' \| 'xxlg'` | `'md'` | sm=16px, md=24px, lg=32px |
| className | string | - | Additional CSS classes |
| aria-label | string | - | For standalone meaningful icons |
| aria-hidden | boolean | - | For decorative icons |

## Common Icon Names

`add`, `arrow-left`, `arrow-right`, `calendar`, `check`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `close`, `delete`, `download`, `edit`, `exit`, `filter`, `home`, `info`, `search`, `settings`, `user`, `warning`, `blocked`, `cancel`, `logout`, `spam`, `subtract`, `share`, `star`, `upload`

## Examples

```jsx
// Basic
<ClbIcon icon="home" />

// Specific size
<ClbIcon icon="search" size="lg" />

// Decorative (alongside text)
<button>
  <ClbIcon icon="download" aria-hidden="true" />
  Download file
</button>

// Meaningful standalone icon
<ClbIcon icon="delete" aria-label="Delete item" />
```

## Notes

- Icons are rendered using a custom font (CSS-based, depends on `@celebration/assets`)
- Sizes: xs < sm (16px) < md (24px) < lg (32px) < xlg < xxlg
- For interactive icons, wrap in a `<button>` element — `ClbIcon` itself has no interactive styles
- Use `aria-hidden="true"` for decorative icons already described by adjacent text
