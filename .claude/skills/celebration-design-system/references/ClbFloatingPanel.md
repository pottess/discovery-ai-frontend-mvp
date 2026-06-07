# ClbFloatingPanel

A draggable floating container positioned relative to a parent element. Used internally by `ClbPopover` and `ClbTooltip`. Use those higher-level components when possible.

## Import

```ts
import { ClbFloatingPanel } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Panel content (required) |
| parentRef | RefObject<HTMLDivElement> | - | Ref to the anchor element |
| customStyles | CSSProperties | - | Custom positioning styles |
| ariaLabel | string | `'floating panel'` | ARIA label for the panel |

## Example

```jsx
const parentRef = useRef(null)

<div ref={parentRef} style={{ position: 'relative' }}>
  <p>Anchor element</p>
</div>

<ClbFloatingPanel parentRef={parentRef} ariaLabel="Info panel">
  <div style={{ background: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
    <p>Panel content here. Can be dragged by the user.</p>
  </div>
</ClbFloatingPanel>
```

## Notes

- The panel is draggable by default — the cursor changes to "grabbing" during drag
- Stays within viewport bounds during drag
- Initial visibility is `hidden` until position is calculated (prevents flash)
- Prefer `ClbPopover` for context menus or `ClbTooltip` for hover hints instead of using this directly
