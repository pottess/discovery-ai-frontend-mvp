# ClbModal

A dialog component for confirmations, forms, and important actions. Renders via React portal into `<body>`.

## Import

```ts
import { ClbModal } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Modal title (required) |
| open | boolean | false | Controls visibility |
| onClose | () => void | - | Called when close icon is clicked |
| description | string | - | Body description text |
| itemsFooter | ItemsFooterType | - | Footer buttons/links (1-3 items) |
| size | `'sm' \| 'lg'` | `'lg'` | sm: 304px, lg: 680px width |
| customBody | () => ReactNode | - | Custom body renderer |
| customFooter | () => ReactNode | - | Custom footer renderer |
| overlay | boolean | true | Show background overlay |
| ariaLabelIconClose | string | `'sair'` | Accessibility label for close button |

## Footer Item Types

```ts
type ItemsFooterType = [
  ButtonPropsModal,           // required: primary action
  ButtonPropsModal?,          // optional: secondary action
  (ButtonPropsModal | LinkPropsModal)?  // optional: tertiary/link
]

// Each button must have role: 'button' | 'link'
// Links use: { role: 'link', href, target, children }
```

## Examples

```jsx
// Basic confirmation modal
const [isOpen, setIsOpen] = useState(false)

const footer = [
  { key: 'confirm', type: 'button', styleType: 'primary', size: 'sm', label: 'Confirm', role: 'button', onClick: () => setIsOpen(false) },
  { key: 'cancel', type: 'button', styleType: 'secondary', size: 'sm', label: 'Cancel', role: 'button', onClick: () => setIsOpen(false) },
]

<ClbModal
  title="Confirm Action"
  description="Are you sure you want to proceed?"
  itemsFooter={footer}
  open={isOpen}
  onClose={() => setIsOpen(false)}
/>

// Modal with form content (children)
<ClbModal
  title="Edit User"
  itemsFooter={footer}
  open={isOpen}
  onClose={() => setIsOpen(false)}
  size="lg"
>
  <ClbInputText id="name" label="Name" value={name} onChange={e => setName(e.target.value)} />
</ClbModal>

// Modal with footer link (3 items: link goes left, buttons go right)
const footerWithLink = [
  { key: 'ok', type: 'button', styleType: 'primary', size: 'sm', label: 'OK', role: 'button', onClick: closeModal },
  { key: 'cancel', type: 'button', styleType: 'secondary', size: 'sm', label: 'Cancel', role: 'button', onClick: closeModal },
  { key: 'link', href: 'https://example.com', target: '_blank', children: 'Learn more', role: 'link' },
]
```

## Notes

- Footer: with 2 buttons they align right; with 3 items, the 3rd (link) aligns left
- Scroll appears inside body when content exceeds max-height (648px for sm, 752px for lg)
- Auto-focuses on open for keyboard/screen reader users
- `role="alertdialog"` and `aria-modal="true"` are set automatically
