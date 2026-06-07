# ClbAvatar

A user avatar component displaying an image or initials, with optional dropdown menu.

## Import

```ts
import { ClbAvatar } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Alt text or displayed initial when no image |
| url | string | - | Image URL (supports data blob URLs) |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | sm=32px, md=48px, lg=64px |
| showFullLabel | boolean | false | Show full name next to avatar |
| links | Links[] | - | Dropdown menu items |
| dropdownPosition | `'left' \| 'right'` | `'right'` | Dropdown position |

```ts
type Links = {
  label: string
  route?: string
  onClick?: () => void
}
```

## Examples

```jsx
// Initials (no image)
<ClbAvatar label="Maria Silva" size="md" />

// With image
<ClbAvatar label="Maria Silva" url="https://example.com/photo.jpg" size="lg" />

// With full name displayed
<ClbAvatar label="Maria Silva" showFullLabel={true} size="md" />

// With dropdown menu (e.g., in header)
<ClbAvatar
  label="Maria Silva"
  links={[
    { label: 'View Profile', route: '/profile' },
    { label: 'Settings', route: '/settings' },
    { label: 'Logout', onClick: handleLogout },
  ]}
  dropdownPosition="left"
/>
```

## Notes

- If `url` is not provided, shows the first letter of `label` in uppercase
- `label` is used as image `alt` text when `url` is provided — always set a meaningful value
- If `links` is provided, clicking the avatar opens a dropdown
