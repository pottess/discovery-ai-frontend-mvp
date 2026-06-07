# ClbInputPassword

A password input with show/hide toggle button (eye icon).

## Import

```ts
import { ClbInputPassword } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required |
| label | string | - | Field label |
| name | string | - | Form field name |
| value | string | - | Controlled value |
| onChange | ChangeEventHandler | - | Change handler |
| error | boolean | false | Error state |
| helperText | string | - | Helper/error text |
| showHelperText | boolean | false | Show helper text |
| message | string | - | Side label message |
| showMessage | boolean | false | Show side message |
| disabled | boolean | false | Disabled state |
| ...props | HTMLInputElement | - | All native input props |

## Examples

```jsx
// Basic
<ClbInputPassword id="password" label="Password" name="password" />

// Controlled with validation
const [password, setPassword] = useState('')
const [error, setError] = useState(false)

<ClbInputPassword
  id="password"
  label="Password"
  value={password}
  onChange={e => {
    setPassword(e.target.value)
    setError(e.target.value.length < 8)
  }}
  error={error}
  helperText={error ? 'Password must be at least 8 characters' : ''}
  showHelperText={true}
/>

// In login form
<ClbInputText id="email" label="Email" type="email" ... />
<ClbInputPassword id="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} />
```

## Notes

- The show/hide eye icon toggles the input between `type="password"` and `type="text"`
- Same API as `ClbInputText` — same error/helper/message pattern
