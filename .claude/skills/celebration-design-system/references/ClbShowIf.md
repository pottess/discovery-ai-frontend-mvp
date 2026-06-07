# ClbShowIf

A conditional rendering utility. Renders `children` when `condition` is true, otherwise renders `fallback` (or nothing).

## Import

```ts
import { ClbShowIf } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| condition | boolean | - | Required. When true, renders children |
| children | ReactNode | - | Content rendered when condition is true |
| fallback | ReactNode | `null` | Content rendered when condition is false |

## Examples

```jsx
// Basic toggle
<ClbShowIf condition={isVisible}>
  <div>Content shown when visible</div>
</ClbShowIf>

// With fallback
<ClbShowIf
  condition={isLoggedIn}
  fallback={<ClbAlert type="warning" title="Access Restricted" description="Please log in." />}
>
  <ProtectedContent />
</ClbShowIf>

// Conditional form field
<ClbShowIf condition={showAdditionalFields}>
  <ClbInputText id="phone" label="Phone" value={phone} onChange={handleChange} />
</ClbShowIf>

// Multi-step flow
<ClbShowIf condition={step === 1}><Step1 /></ClbShowIf>
<ClbShowIf condition={step === 2}><Step2 /></ClbShowIf>
<ClbShowIf condition={step === 3}><Step3 /></ClbShowIf>
```

## Notes

- Does **not** add extra DOM elements — purely a render control utility
- Unlike `display: none`, when `condition` is false the content is **not rendered** (removed from DOM)
- For simple inline conditionals, plain `&&` or ternary is fine; use `ClbShowIf` for larger blocks where readability matters
- Has no state or side effects — purely functional
