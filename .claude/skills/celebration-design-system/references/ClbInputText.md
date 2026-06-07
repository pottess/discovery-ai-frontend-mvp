# ClbInputText

A text input field with label, helper text, error state, and optional message display.

## Import

```ts
import { ClbInputText } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required. Associates label with input |
| label | string | - | Field label |
| name | string | - | Form field name |
| value | string | - | Controlled value |
| onChange | ChangeEventHandler | - | Change handler |
| error | boolean | false | Red border error state |
| helperText | string | - | Helper/error message text |
| showHelperText | boolean | false | Show helper text |
| message | string | - | Side label message (e.g., "Optional") |
| showMessage | boolean | false | Show side message |
| size | `'sm' \| 'lg'` | - | Field size |
| disabled | boolean | false | Disabled state |
| ...props | HTMLInputElement | - | All native input props |

## Examples

```jsx
// Basic
<ClbInputText id="name" label="Full Name" placeholder="Enter your name" />

// Controlled
<ClbInputText
  id="email"
  label="Email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  helperText="Format: example@email.com"
  showHelperText={true}
/>

// Error state
<ClbInputText
  id="cpf"
  label="CPF"
  error={true}
  helperText="Invalid CPF"
  showHelperText={true}
/>

// Optional field
<ClbInputText
  id="phone"
  label="Phone"
  message="Optional"
  showMessage={true}
  placeholder="(00) 00000-0000"
/>

// Disabled
<ClbInputText id="code" label="Code" value="ABC123" disabled={true} />

// In a form
<form onSubmit={handleSubmit}>
  <ClbInputText id="name" name="name" label="Name" value={name} onChange={e => setName(e.target.value)} required />
  <ClbButton type="submit" label="Submit" styleType="primary" />
</form>
```

## Notes

- Always provide a unique `id` — it links the label for accessibility
- Use `error={true}` + `showHelperText={true}` + `helperText="message"` for validation feedback
- Supports all native HTML input attributes via spread: `maxLength`, `pattern`, `required`, `onBlur`, etc.
- Uses `forwardRef` — you can attach a ref to access the DOM element directly
