# ClbOverlay

A loading/blocking overlay wrapper. Dims content and shows a centered element when active.

## Import

```ts
import { ClbOverlay } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | false | Activates the overlay |
| children | ReactNode | - | Content to overlay (required) |
| activeInfo | ReactNode | - | Element shown centered on the overlay |

## Examples

```jsx
// Loading overlay on a section
<ClbOverlay active={loading} activeInfo={<ClbLoading size="lg" aria-label="Loading..." />}>
  <div style={{ padding: '20px' }}>
    <h3>Data Table</h3>
    <ClbTable columns={columns} data={data} />
  </div>
</ClbOverlay>

// Custom message overlay
<ClbOverlay active={showWarning} activeInfo={
  <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
    <h4>Processing...</h4>
    <ClbButton label="Cancel" onClick={handleCancel} />
  </div>
}>
  <form>...</form>
</ClbOverlay>

// During form submission
<ClbOverlay active={submitting} activeInfo={
  <div style={{ textAlign: 'center', color: 'white' }}>
    <ClbLoading />
    <p>Submitting...</p>
  </div>
}>
  <form onSubmit={handleSubmit}>...</form>
</ClbOverlay>
```

## Notes

- When `active={true}`: content is dimmed (opacity reduced), `activeInfo` appears centered, `aria-busy="true"` is applied
- The overlay is positioned relative to the parent container — ensure the parent has `position: relative` for scoped overlays
- For operations under ~400ms, consider not showing the overlay to avoid UI flicker
- `ClbTable` already has a built-in `loading` prop that uses this internally
