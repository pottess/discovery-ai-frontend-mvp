# ClbInputCounter

A numeric input with increment/decrement buttons. Ideal for quantity selectors.

## Import

```ts
import { ClbInputCounter } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required |
| label | string | - | Field label |
| value | number | `0` | Current value |
| onChange | ChangeEventHandler | - | Change handler (use `Number(e.target.value)`) |
| minValue | number | - | Minimum allowed value |
| maxValue | number | - | Maximum allowed value |
| stepValue | number | `1` | Increment/decrement step |
| showMaxValue | boolean | false | Show value/max display |
| error | boolean | false | Error state |
| helperText | string | - | Helper/error text |
| showHelperText | boolean | false | Show helper text |
| disabled | boolean | false | Disabled state |
| size | `'sm' \| 'md' \| 'lg'` | `'lg'` | Size |

## Examples

```jsx
// Basic
const [qty, setQty] = useState(1)
<ClbInputCounter
  id="quantity"
  label="Quantity"
  value={qty}
  onChange={e => setQty(Number(e.target.value))}
  minValue={1}
  maxValue={10}
/>

// With max value display and step
<ClbInputCounter
  id="points"
  label="Points"
  value={points}
  onChange={e => setPoints(Number(e.target.value))}
  minValue={0}
  maxValue={100}
  stepValue={5}
  showMaxValue={true}
/>
```

## Notes

- `+` button disables when value reaches `maxValue`; `-` button disables when it reaches `minValue`
- Value is always converted to number in `onChange` — use `Number(e.target.value)`
- `showMaxValue={true}` displays the counter as "value/maxValue" (e.g., "3/10")
