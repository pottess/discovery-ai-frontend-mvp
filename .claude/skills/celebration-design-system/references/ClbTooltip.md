# ClbTooltip

A contextual tooltip that appears on hover or focus. Wraps the trigger element as its child.

## Import

```ts
import { ClbTooltip } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | string | - | Required. Main tooltip content |
| position | TooltipPosition | - | Required. Tooltip placement |
| children | ReactNode | - | Required. The trigger element |
| title | string | - | Optional heading inside tooltip |
| showArrow | boolean | true | Show/hide the directional arrow |
| colorMode | `'light' \| 'dark'` | `'light'` | Light or dark theme |
| detectOverflowRef | `RefObject<HTMLElement \| null>` | - | Only show tooltip when referenced element is overflowed/truncated |
| width | string | - | Custom width for the wrapper element |

**Positions:** `'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom'`

## Examples

```jsx
// Basic
<ClbTooltip description="Click to save changes" position="top">
  <ClbButton label="Save" />
</ClbTooltip>

// With title
<ClbTooltip
  title="Required field"
  description="This field must be filled in before submitting"
  position="right"
>
  <ClbIcon icon="help" />
</ClbTooltip>

// Dark mode
<ClbTooltip description="Opens in new tab" position="bottom" colorMode="dark">
  <ClbLink href="/docs" target="_blank">Documentation</ClbLink>
</ClbTooltip>

// Only show when text is truncated
const containerRef = useRef(null)

<div ref={containerRef} style={{ width: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
  <ClbTooltip
    description="Full content of this truncated text"
    position="top"
    detectOverflowRef={containerRef}
  >
    <span>This is a very long text that gets cut off</span>
  </ClbTooltip>
</div>
```

## Notes

- Rendered via `ReactDOM.createPortal` into `document.body` — avoids z-index and overflow clipping issues
- Shown on hover and keyboard focus — accessible by default
- Has `role="tooltip"` for assistive technologies
- Auto-adjusts position if tooltip would be clipped by the viewport
- `detectOverflowRef`: tooltip only appears when the referenced element's content is overflowed — useful for truncated text cells in tables
- For interactive content or confirmations, use `ClbPopover` instead
