# ClbLoading

A spinner/loading indicator component. Renders as a `<span>` with `role="progressbar"`.

## Import

```ts
import { ClbLoading } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'default' \| 'brand' \| 'danger'` | `'default'` | Color variant |
| size | `'sm' \| 'lg'` | - | Spinner size |
| aria-label | string | - | Screen reader label |

## Examples

```jsx
// Basic
<ClbLoading />

// Brand color, large
<ClbLoading type="brand" size="lg" aria-label="Loading data..." />

// Inline in a card
<div style={{ textAlign: 'center', padding: '40px' }}>
  <ClbLoading size="lg" aria-label="Loading table..." />
</div>

// Inside a button substitute during loading state
{loading ? <ClbLoading size="sm" /> : <ClbButton label="Submit" onClick={handleSubmit} />}

// With ClbOverlay for page-level loading
<ClbOverlay active={loading} activeInfo={<ClbLoading size="lg" aria-label="Processing..." />}>
  <div>Content here</div>
</ClbOverlay>
```

## Notes

- Always provide `aria-label` for standalone loading indicators for accessibility
- `type="brand"` uses the brand color (black in Bees theme); `type="danger"` uses red
- Commonly used inside `ClbOverlay` for content area loading states
