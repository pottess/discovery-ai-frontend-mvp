# ClbRadioButton

A single radio button input. Use multiple buttons with the same `name` to form a mutually exclusive group.

## Import

```ts
import { ClbRadioButton } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required. Unique identifier |
| label | string | - | Descriptive text beside the radio |
| name | string | `''` | Group name — all radios in the same group share this value |
| checked | boolean | false | Whether this radio is selected |
| disabled | boolean | false | Disables the radio |
| required | boolean | false | Marks the field as required |

Also accepts all native `React.HTMLProps<HTMLInputElement>` (onChange, value, onFocus, etc.).

## Examples

```jsx
// Controlled group
const [selected, setSelected] = useState('option1')

const handleChange = (e) => setSelected(e.target.value)

<ClbRadioButton
  id="option1"
  name="myGroup"
  value="option1"
  label="Option 1"
  checked={selected === 'option1'}
  onChange={handleChange}
/>
<ClbRadioButton
  id="option2"
  name="myGroup"
  value="option2"
  label="Option 2"
  checked={selected === 'option2'}
  onChange={handleChange}
/>

// Disabled
<ClbRadioButton id="disabled" name="myGroup" label="Unavailable" disabled />
```

## Notes

- All `ClbRadioButton` elements in the same group **must share the same `name`** value
- Each button must have a unique `id`
- Arrow keys navigate between radio buttons in the same group
- For grouped layout (vertical/horizontal), wrap in `ClbRadioGroup`
