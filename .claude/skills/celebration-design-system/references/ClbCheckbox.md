# ClbCheckbox

A checkbox for single or multiple selections. Use `ClbRadioButton`/`ClbRadioGroup` for exclusive selection.

## Import

```ts
import { ClbCheckbox } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Checked state |
| onChange | ChangeEventHandler | - | Change handler |
| children | ReactNode | - | Label content (shown next to checkbox) |
| disabled | boolean | false | Disabled state |
| indeterminate | boolean | false | Indeterminate visual state (for "select all" patterns) |
| spanAriaLabel | string | `''` | ARIA label for the span element |
| onEnter | (e: KeyboardEvent) => void | - | Enter key handler |
| ...props | HTMLInputElement | - | All native input props (name, value, etc.) |

## Examples

```jsx
// Basic
<ClbCheckbox checked={checked} onChange={e => setChecked(e.target.checked)}>
  Accept terms and conditions
</ClbCheckbox>

// Controlled group
const [selections, setSelections] = useState({ opt1: false, opt2: false })
<ClbCheckbox checked={selections.opt1} onChange={e => setSelections(s => ({ ...s, opt1: e.target.checked }))}>
  Option 1
</ClbCheckbox>
<ClbCheckbox checked={selections.opt2} onChange={e => setSelections(s => ({ ...s, opt2: e.target.checked }))}>
  Option 2
</ClbCheckbox>

// Indeterminate (select-all pattern)
const allChecked = items.every(i => i.checked)
const someChecked = items.some(i => i.checked)
<ClbCheckbox
  checked={allChecked}
  indeterminate={someChecked && !allChecked}
  onChange={handleSelectAll}
>
  Select All
</ClbCheckbox>

// Disabled
<ClbCheckbox disabled={true} checked={true}>Read-only option</ClbCheckbox>
```

## Notes

- The label is passed as `children`, not as a prop
- `indeterminate` is purely visual and does not affect the checked/unchecked value
- Supports keyboard navigation: Tab to focus, Space/Enter to toggle
- Long text labels are automatically truncated with a tooltip
