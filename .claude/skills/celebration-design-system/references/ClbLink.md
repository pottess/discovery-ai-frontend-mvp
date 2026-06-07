# ClbLink

An anchor element with design-system styling and disabled state support.

## Import

```ts
import { ClbLink } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| href | string | - | Link URL |
| target | string | - | `_blank`, `_self`, etc. |
| rel | string | - | Link rel attribute |
| disabled | boolean | false | Disabled state (removes href, adds aria-disabled) |
| children | ReactNode | - | Link text/content |
| ...props | HTMLAnchorElement | - | All native anchor props |

## Examples

```jsx
// Basic
<ClbLink href="/dashboard">Go to Dashboard</ClbLink>

// External link
<ClbLink href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</ClbLink>

// Disabled
<ClbLink href="/settings" disabled={true}>Settings (unavailable)</ClbLink>

// Inline in text
<p>See the <ClbLink href="/docs">documentation</ClbLink> for details.</p>
```

## Notes

- When `disabled={true}`: removes href, adds `aria-disabled="true"`, applies disabled styling
- Prefer `ClbLink` over plain `<a>` for inline links within text content
- For navigation buttons, use `ClbButton` instead
