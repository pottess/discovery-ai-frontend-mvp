# ClbFocusTrap

An accessibility utility that traps keyboard focus within a container. Commonly used inside modals, drawers, and popovers. `ClbModal`, `ClbDrawer`, and `ClbFullPageFlow` include this automatically.

## Import

```ts
import { ClbFocusTrap } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Content to trap focus within |
| active | boolean | false | Whether the trap is active |

## Example

```jsx
const [isOpen, setIsOpen] = useState(false)

<ClbFocusTrap active={isOpen}>
  <div role="dialog" aria-modal="true">
    <h2>Dialog Title</h2>
    <ClbInputText id="name" label="Name" />
    <ClbButton label="Close" onClick={() => setIsOpen(false)} />
  </div>
</ClbFocusTrap>
```

## Notes

- Focuses the first focusable element on activation
- Tab/Shift+Tab cycle through elements within the container only
- When `active={false}`, normal focus behavior is restored
- Focusable elements detected: inputs, selects, textareas, links with href, buttons, elements with tabIndex, contenteditable, audio/video controls
- For accessibility: also implement Escape key to close and return focus to the trigger element after closing
- Use this only for custom components — `ClbModal`, `ClbDrawer`, `ClbFullPageFlow` already include it
