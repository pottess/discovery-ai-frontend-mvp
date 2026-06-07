# ClbInputNumber

A text input with built-in masks for formatted numeric data: CPF, CNPJ, CEP, date, and phone number.

## Import

```ts
import { ClbInputNumber } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required |
| label | string | - | Field label |
| name | string | - | Form field name |
| value | string \| number | `''` | Controlled value |
| onChange | ChangeEventHandler | - | Change handler |
| inputMask | `'NONE' \| 'CPF' \| 'CNPJ' \| 'CEP' \| 'DATE' \| 'CELULAR'` | - | Mask to apply |
| formatOnChageValue | boolean | true | Return formatted value in onChange |
| error | boolean | false | Error state |
| helperText | string | - | Helper/error text |
| showHelperText | boolean | false | Show helper text |
| disabled | boolean | false | Disabled state |
| ...props | HTMLInputElement | - | All native input props |

## Mask Formats

| Mask | Format |
|------|--------|
| `CPF` | `000.000.000-00` |
| `CNPJ` | `00.000.000/0000-00` |
| `CEP` | `00000-000` |
| `DATE` | `DD/MM/AAAA` |
| `CELULAR` | `(00) 00000-0000` |

## Examples

```jsx
// CPF
<ClbInputNumber id="cpf" label="CPF" inputMask="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />

// CEP with API call
<ClbInputNumber
  id="cep"
  label="CEP"
  inputMask="CEP"
  value={cep}
  onChange={e => {
    setCep(e.target.value)
    if (e.target.value.replace(/\D/g, '').length === 8) fetchAddress(e.target.value)
  }}
/>

// With validation error
<ClbInputNumber
  id="cpf"
  label="CPF"
  inputMask="CPF"
  value={cpf}
  onChange={e => { setCpf(e.target.value); validateCpf(e.target.value) }}
  error={hasError}
  helperText={hasError ? 'Invalid CPF' : ''}
  showHelperText={hasError}
/>
```

## Notes

- To get raw digits (no formatting): `value.replace(/\D/g, '')`
- When `formatOnChageValue=true` (default), `e.target.value` returns the formatted string
- The `DATE` mask is for display only — use `ClbDatePicker` for a full date picker experience
