# ClbSelect

A dropdown select field with label, helper text, error state, and native `<option>` children.

## Import

```ts
import { ClbSelect } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required. Associates label |
| label | string | - | Field label |
| name | string | - | Form field name |
| value | string | - | Controlled value |
| defaultValue | string | - | Uncontrolled default |
| onChange | ChangeEventHandler | - | Change handler |
| placeholder | string | `'Selecione uma opção'` | Empty option text |
| error | boolean | false | Error state |
| helperText | string | - | Helper/error message |
| showHelperText | boolean | false | Show helper text |
| message | string | - | Side label message |
| showMessage | boolean | false | Show side message |
| size | `'sm' \| 'lg'` | `'sm'` | Field size |
| disabled | boolean | false | Disabled state |
| children | ReactNode | - | `<option>` elements |

## Examples

```jsx
// Basic
<ClbSelect id="state" label="State" placeholder="Select a state">
  <option value="SP">São Paulo</option>
  <option value="RJ">Rio de Janeiro</option>
</ClbSelect>

// Controlled
const [value, setValue] = useState('')
<ClbSelect
  id="department"
  label="Department"
  value={value}
  onChange={e => setValue(e.target.value)}
>
  <option value="ti">IT</option>
  <option value="rh">HR</option>
</ClbSelect>

// Error state
<ClbSelect
  id="payment"
  label="Payment Method"
  error={true}
  helperText="This field is required"
  showHelperText={true}
>
  <option value="credit">Credit Card</option>
  <option value="pix">Pix</option>
</ClbSelect>

// Dependent selects (state -> city)
<ClbSelect id="state" label="State" value={state} onChange={e => { setState(e.target.value); setCity('') }}>
  {states.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
</ClbSelect>
<ClbSelect id="city" label="City" value={city} onChange={e => setCity(e.target.value)} disabled={!state}>
  {cities.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
</ClbSelect>
```

## Notes

- An empty placeholder option is always added automatically as the first option
- For controlled usage: use `value` + `onChange`; for uncontrolled: use `defaultValue`
- Uses `forwardRef` for direct DOM access
- The chevron arrow icon has `aria-hidden="true"` (decorative)
