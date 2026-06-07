# ClbDropdown

A dropdown menu composed of trigger, items, and optional footer. Opens on trigger click, closes on outside click.

## Import

```ts
import { ClbDropdown, ClbDropdownTrigger, ClbDropdownItems, ClbDropdownFooter } from '@celebration/react'
```

## Key Props

### ClbDropdown
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| dropdownPosition | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Position relative to trigger |
| children | ReactNode | - | Must be: Trigger, Items, [Footer] in order |

### ClbDropdownTrigger
Wraps a single trigger element (ClbButton, ClbLink, `<a>`, `<button>`).

### ClbDropdownItems
Wraps items: `<a>`, `<button>`, `ClbCheckbox`, or other ReactNode.

### ClbDropdownFooter
Wraps action buttons. Use when items contain checkboxes.

## Examples

```jsx
// Simple links dropdown
<ClbDropdown dropdownPosition="bottom">
  <ClbDropdownTrigger>
    <ClbButton type="button" styleType="primary" size="sm" label="Actions" />
  </ClbDropdownTrigger>
  <ClbDropdownItems>
    <a href="/edit">Edit</a>
    <button onClick={handleDelete}>Delete</button>
  </ClbDropdownItems>
</ClbDropdown>

// With checkboxes and footer (filter pattern)
<ClbDropdown>
  <ClbDropdownTrigger>
    <ClbButton type="button" styleType="secondary" size="sm" label="Filter" />
  </ClbDropdownTrigger>
  <ClbDropdownItems>
    <ClbCheckbox checked={opt1} onChange={e => setOpt1(e.target.checked)}>Option 1</ClbCheckbox>
    <ClbCheckbox checked={opt2} onChange={e => setOpt2(e.target.checked)}>Option 2</ClbCheckbox>
  </ClbDropdownItems>
  <ClbDropdownFooter>
    <ClbButton type="button" styleType="secondary" size="sm" label="Cancel" />
    <ClbButton type="button" styleType="primary" size="sm" label="Apply" onClick={handleApply} />
  </ClbDropdownFooter>
</ClbDropdown>
```

## Notes

- Children order must be: `ClbDropdownTrigger` → `ClbDropdownItems` → `ClbDropdownFooter` (optional)
- Dropdown stays open when clicking checkboxes or footer container (but not footer buttons)
- Use `ClbDropdownFooter` when items include checkboxes — provides Apply/Cancel pattern
