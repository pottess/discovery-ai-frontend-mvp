# ClbDrawer

A slide-in side panel (right side) for forms, filters, and secondary content. Similar to `ClbModal` but lateral.

## Import

```ts
import { ClbDrawer } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Required. Drawer title |
| open | boolean | false | Controls visibility |
| onClose | () => void | - | Called on close button click |
| description | string | - | Body description text |
| buttonsFooter | FooterDrawerType | `[]` | Up to 2 footer buttons |
| size | `'sm' \| 'md' \| 'lg'` | `'lg'` | sm=304px, md=408px, lg=608px |
| customBody | () => ReactNode | - | Custom body renderer |
| customFooter | () => ReactNode | - | Custom footer renderer |
| overlay | boolean | true | Background overlay |
| idUsedToOpenDrawer | string | `''` | ID of the trigger element (for aria-labelledby) |
| ariaLabelIconClose | string | `'Sair'` | Close button aria-label |
| children | ReactNode | - | Body content |

```ts
type FooterDrawerType = [ButtonPropsDrawer, ButtonPropsDrawer?]
```

## Examples

```jsx
// Basic
const [open, setOpen] = useState(false)
<>
  <ClbButton id="open-drawer" label="Open Drawer" onClick={() => setOpen(true)} />
  <ClbDrawer
    title="Details"
    open={open}
    onClose={() => setOpen(false)}
    idUsedToOpenDrawer="open-drawer"
  >
    <p>Drawer content here</p>
  </ClbDrawer>
</>

// With footer buttons (common for filter drawers)
const buttons: FooterDrawerType = [
  { key: 'cancel', label: 'Cancel', type: 'button', styleType: 'secondary', size: 'md', onClick: closeDrawer },
  { key: 'save', label: 'Save', type: 'button', styleType: 'primary', size: 'md', onClick: handleSave },
]
<ClbDrawer
  title="Add Record"
  buttonsFooter={buttons}
  open={open}
  onClose={closeDrawer}
  size="md"
>
  <ClbInputText id="name" label="Name" value={name} onChange={e => setName(e.target.value)} />
</ClbDrawer>
```

## Notes

- For SM drawers, use short CTA labels (1-2 words): "Save", "Cancel", "Filter"
- Vertical scroll appears in body when content exceeds available height
- Use `idUsedToOpenDrawer` to link the drawer to its trigger for accessibility (`aria-labelledby`)
- Uses `<aside>` HTML element with `aria-expanded`
