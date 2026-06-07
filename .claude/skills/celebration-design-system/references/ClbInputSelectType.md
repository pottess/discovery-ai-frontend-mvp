# ClbInputSelectType

A text input combined with a type selector dropdown. Used for currency amounts, percentages, or any value where both a number and a type unit are needed.

## Import

```ts
import { ClbInputSelectType } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required |
| label | string | - | Field label |
| selectOptions | InputSelectTypeOptions[] | - | Options for the type selector |
| optionDefaultId | string | - | Default selected option ID |
| value | string | - | Controlled input value |
| onChange | ChangeEventHandler | - | Input change handler |
| onChangeSelect | (option: InputSelectTypeOptions) => void | - | Select change handler |
| error | boolean | false | Error state |
| showHelperText | boolean | false | Show helper text |
| helperText | string | - | Helper/error text |
| disabled | boolean | false | Disabled state |

```ts
interface InputSelectTypeOptions {
  id: string
  label: string
  value: string
}
```

## Examples

```jsx
// Currency/percentage input
const typeOptions = [
  { id: 'brl', label: 'R$', value: 'BRL' },
  { id: 'pct', label: '%', value: 'PCT' },
]
const [amount, setAmount] = useState('')
const [selectedType, setSelectedType] = useState(typeOptions[0])

<ClbInputSelectType
  id="amount"
  label="Discount"
  selectOptions={typeOptions}
  optionDefaultId="brl"
  value={amount}
  onChange={e => setAmount(e.target.value)}
  onChangeSelect={opt => setSelectedType(opt)}
/>

// With error
<ClbInputSelectType
  id="price"
  label="Price"
  selectOptions={typeOptions}
  value={price}
  onChange={e => setPrice(e.target.value)}
  error={true}
  helperText="Price cannot be negative"
  showHelperText={true}
/>
```

## Notes

- Renders an input field with a select dropdown attached to the left side
- `onChangeSelect` receives the full option object, not just the value
- Use when the user needs to specify both a numeric value and its unit/type
