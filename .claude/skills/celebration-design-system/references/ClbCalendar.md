# ClbCalendar

An inline calendar for date selection. Date format is `DD/MM/YYYY`.

## Import

```ts
import { ClbCalendar } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Selected date in `DD/MM/YYYY` format |
| onChange | (date, day, month, year) => void | - | Called on day selection |
| defaultMonth | number | Current month | Initial month (1-12) |
| defaultYear | number | Current year | Initial year |
| i18n | I18nCalendar | PT-BR defaults | Localization texts |

## Examples

```jsx
// Basic
<ClbCalendar onChange={(date) => console.log(date)} />

// Controlled
const [date, setDate] = useState('15/06/2025')
<ClbCalendar value={date} onChange={(d) => setDate(d)} />

// With full change event details
<ClbCalendar
  onChange={(date, day, month, year) => {
    // date = '15/06/2025', day = 15, month = { number: 6, name: 'Jun' }, year = 2025
  }}
/>
```

## Notes

- `onChange` fires on day click only — not on month/year navigation
- Default i18n is PT-BR (months in Portuguese); override via `i18n` prop for other locales
- Has a "Today" button to jump back to the current month
