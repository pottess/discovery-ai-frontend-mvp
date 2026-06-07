# ClbCard

A content card container with optional click behavior.

## Import

```ts
import { ClbCard } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| clickable | boolean | false | Enables hover/click styles; sets tabIndex=0 |
| children | ReactNode | - | Card content |
| ...props | HTMLDivElement | - | All native div props (onClick, className, style, etc.) |

## Examples

```jsx
// Static card
<ClbCard>
  <h3>Title</h3>
  <p>Card body content.</p>
  <ClbButton label="Action" />
</ClbCard>

// Clickable card
<ClbCard clickable={true} onClick={handleCardClick}>
  <h3>Click me</h3>
  <p>This entire card is clickable.</p>
</ClbCard>

// Card grid
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
  <ClbCard><h3>Card 1</h3></ClbCard>
  <ClbCard><h3>Card 2</h3></ClbCard>
  <ClbCard><h3>Card 3</h3></ClbCard>
</div>
```

## Notes

- When `clickable={true}`: do NOT place clickable elements inside the card
- When `clickable={false}` (default): you can nest buttons, links, etc. freely
- Minimum height: 80px, minimum width: 196px; grows with content
- Width is determined by the parent grid/layout container
