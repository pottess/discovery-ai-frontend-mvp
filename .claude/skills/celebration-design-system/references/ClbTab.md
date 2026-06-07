# ClbTab

An individual tab button. Always used as a child of `ClbTabGroup`.

## Import

```ts
import { ClbTab } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Required. Tab label text (also used as identifier) |
| active | boolean | - | Required. Whether this tab is currently selected |
| onActive | `(title: string) => void` | - | Required. Called when tab is clicked |
| error | boolean | false | Shows an error indicator icon |
| disabled | boolean | false | Prevents activation |
| variation | `'shape' \| 'ghost'` | `'shape'` | Visual style |

Also accepts standard `HTMLButtonElement` props.

## Example

```jsx
<ClbTab
  title="Details"
  active={activeTab === 'Details'}
  onActive={setActiveTab}
/>

// With error state
<ClbTab
  title="Payment"
  active={activeTab === 'Payment'}
  onActive={setActiveTab}
  error={hasPaymentError}
/>

// Disabled
<ClbTab
  title="Summary"
  active={activeTab === 'Summary'}
  onActive={setActiveTab}
  disabled={!isFormValid}
/>
```

## Notes

- `title` is the identifier — `onActive` receives it as argument
- Renders as `<button role="tab">`
- Should always be wrapped in `ClbTabGroup` which handles overflow/responsive behavior
- For complex multi-tab layouts, see `ClbTabGroup`
