# ClbTextarea

A multi-line text input field with label, helper text, character counter, and error state.

## Import

```ts
import { ClbTextarea } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required. Associates label with textarea |
| label | string | - | Label text above the field |
| name | string | - | Form field name |
| value | string | - | Controlled value |
| onChange | `React.ChangeEventHandler<HTMLTextAreaElement>` | - | Change handler |
| error | boolean | false | Marks field in error state (red border) |
| helperText | string | - | Help text below field |
| showHelperText | boolean | false | Show/hide helper text |
| message | string | - | Short annotation beside the label (e.g. "Optional") |
| showMessage | boolean | false | Show/hide the message |
| size | `'sm' \| 'lg'` | - | Field height size |
| disabled | boolean | false | Disables the textarea |
| counter | boolean | false | Shows character count |
| maxLength | number | `100` | Max characters allowed |

Also accepts all `React.HTMLProps<HTMLTextAreaElement>` props.

## Examples

```jsx
// Basic
<ClbTextarea id="notes" label="Notes" placeholder="Enter notes..." />

// With counter and validation
<ClbTextarea
  id="description"
  label="Description"
  value={description}
  onChange={e => setDescription(e.target.value)}
  counter
  maxLength={300}
  helperText="Describe the issue in detail"
  showHelperText
/>

// Error state
<ClbTextarea
  id="reason"
  label="Reason"
  error={!!errors.reason}
  helperText={errors.reason?.message}
  showHelperText={!!errors.reason}
  {...register('reason')}
/>

// Optional field
<ClbTextarea
  id="comments"
  label="Comments"
  message="Optional"
  showMessage
/>
```

## Notes

- Uses `forwardRef` — ref is forwarded to the underlying `<textarea>` DOM element
- `helperText` includes an info icon when visible
- Counter updates live as user types
- For single-line inputs, use `ClbInputText` instead
