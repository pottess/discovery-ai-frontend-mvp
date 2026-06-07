# ClbAlert

An inline alert banner for positive, negative, or warning messages.

## Import

```ts
import { ClbAlert } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'positive' \| 'negative' \| 'warning'` | - | Required. Sets color and icon |
| title | string | - | Alert title |
| description | ReactNode | - | Alert body (text or JSX) |
| allowClose | boolean | true | Show close button |
| isShow | boolean | - | External visibility control |
| onClose | () => void | - | Called on close |
| i18n | I18nAlert | - | Accessibility text overrides |

## Examples

```jsx
// Success
<ClbAlert type="positive" title="Saved successfully" description="Your changes have been saved." />

// Error
<ClbAlert type="negative" title="Error" description="Could not save. Please try again." />

// Warning without close button
<ClbAlert type="warning" title="Warning" description="This action cannot be undone." allowClose={false} />

// Controlled visibility
const [show, setShow] = useState(true)
<ClbAlert
  type="negative"
  title="Connection failed"
  description="Check your internet connection."
  isShow={show}
  onClose={() => setShow(false)}
/>

// Custom JSX description
<ClbAlert
  type="positive"
  title="Download complete"
  description={<div><p>File ready.</p><a href="/downloads">View downloads</a></div>}
/>
```

## Notes

- Icons are auto-assigned: `positive` → check, `negative` → spam, `warning` → warning
- Has `role="alert"` for screen reader announcements
- When `isShow` is not provided, the component manages its own close state
