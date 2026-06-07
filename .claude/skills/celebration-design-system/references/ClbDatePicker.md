# ClbDatePicker

A date input field with an inline calendar picker. Supports typed input and calendar selection. Date format: `DD/MM/YYYY`.

## Import

```ts
import { ClbDatePicker } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required. Associates label |
| label | string | - | Field label |
| value | string | - | Selected date in `DD/MM/YYYY` |
| onChange | (value, isValid, nativeEvent) => void | - | Called on date change |
| error | boolean | false | Error state |
| helperText | string | - | Helper text |
| showHelperText | boolean | false | Show helper text |
| message | string | - | Side label message |
| showMessage | boolean | false | Show side message |
| size | `'sm' \| 'lg'` | `'sm'` | Field size |
| disabled | boolean | false | Disabled |
| readOnly | boolean | false | Read-only mode |
| defaultMonth | number | Current | Initial calendar month (1-12) |
| defaultYear | number | Current | Initial calendar year |
| tooltip | `{ title?, description, colorMode }` | - | Info icon tooltip |
| i18n | I18nDatePicker | PT-BR | Localization texts |

## Examples

```jsx
// Basic
<ClbDatePicker id="birth-date" label="Birth Date" onChange={(value, isValid) => console.log(value, isValid)} />

// With helper text
<ClbDatePicker
  id="start-date"
  label="Start Date"
  helperText="DD/MM/YYYY"
  showHelperText={true}
  onChange={(value) => console.log(value)}
/>

// Controlled with validation
const [date, setDate] = useState('')
const [valid, setValid] = useState(true)
<ClbDatePicker
  id="contract-date"
  label="Contract Date"
  value={date}
  error={!valid}
  helperText={!valid ? 'Invalid date' : ''}
  showHelperText={!valid}
  onChange={(value, isValid) => { setDate(value || ''); setValid(isValid) }}
/>
```

## Notes

- `onChange(value, isValid, nativeEvent)`: `isValid` is always `true` when selecting from calendar, may be false for typed input
- `nativeEvent` is `null` when change originates from the calendar
- The calendar renders via portal to avoid z-index issues
- The clear button appears only when there is a value and the field is not disabled/readonly
