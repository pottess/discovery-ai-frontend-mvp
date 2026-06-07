# ClbPopover

A floating contextual panel anchored to a trigger element. Used for confirmations, quick forms, and contextual info.

## Import

```ts
import { ClbPopover } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Required. Popover title |
| open | boolean | false | Controls visibility |
| onClose | () => void | - | Called on close |
| description | string | - | Body text |
| itemsFooter | ItemsFooterType | - | Required. Footer buttons/links (1-3 items) |
| position | PopoverPosition | - | Required. Position relative to child |
| children | ReactNode | - | The anchor trigger element |
| customBody | () => ReactNode | - | Custom body renderer |
| customFooter | () => ReactNode | - | Custom footer renderer |
| ariaLabelIconClose | string | `'sair'` | Close button aria-label |
| ariaLabelFloating | string | - | Panel aria-label |
| maxSizes | `{ maxWidth, maxHeigth }` | - | Max dimensions |

**Positions:** `'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom'`

## Example

```jsx
const [isOpen, setIsOpen] = useState(false)

const footer = [
  { label: 'Confirm', styleType: 'primary', onClick: () => setIsOpen(false), role: 'button' },
  { label: 'Cancel', styleType: 'outline', onClick: () => setIsOpen(false), role: 'button' },
]

<ClbPopover
  title="Confirm Action"
  description="Are you sure you want to proceed?"
  itemsFooter={footer}
  position="bottom"
  open={isOpen}
  onClose={() => setIsOpen(false)}
>
  <ClbButton label="Open popover" onClick={() => setIsOpen(!isOpen)} />
</ClbPopover>
```

## Notes

- `itemsFooter`: max 3 items; first must be a button; third can be a link `{ role: 'link', href, target, children }`
- Footer items render in reverse order (last item appears left, first item appears right)
- Auto-focuses inside when open; `role="alertdialog"` and `aria-modal="true"` are applied
- For complex content, prefer `customBody` over combining `description` + children
