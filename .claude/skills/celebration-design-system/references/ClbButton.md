# ClbButton

A flexible button component supporting multiple style variants, sizes, icons, and states.

## Import

```ts
import { ClbButton } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Button text |
| styleType | `'primary' \| 'secondary' \| 'tertiary' \| 'danger' \| 'icon'` | `'primary'` | Visual style |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Size (prefer `'md'`) |
| type | `'button' \| 'reset' \| 'submit'` | `'button'` | HTML button type |
| icon | Icons | - | Icon name |
| iconPosition | `'none' \| 'left' \| 'right'` | `'left'` | Icon position |
| disabled | boolean | false | Disabled state |
| loading | boolean | false | Shows spinner |
| blockedWidth | boolean | false | Full width |
| aria-label | string | - | Accessibility label |

## Examples

```jsx
// Primary
<ClbButton label="Save" type="submit" styleType="primary" size="md" />

// With icon
<ClbButton label="Add" icon="add" iconPosition="left" styleType="secondary" />

// Icon only (requires aria-label)
<ClbButton icon="add" styleType="icon" aria-label="Add new item" />

// Loading state
<ClbButton label="Processing" loading={true} styleType="primary" />

// Danger
<ClbButton label="Delete" styleType="danger" icon="delete" />

// Full width
<ClbButton label="Submit Form" blockedWidth={true} styleType="primary" />

// With click handler
<ClbButton label="Click me" onClick={handleClick} styleType="primary" />
```

## Notes

- Prefer size `md` for most contexts; use `sm` for compact layouts
- For `styleType="icon"`: do not pass a `label`, only pass `icon` and `aria-label`
- For `styleType="danger"`: automatically uses `Cancel` icon if no icon is provided
- Recommended danger icons: `Blocked`, `Cancel`, `Delete`, `Logout`, `Spam`, `Subtract`, `Warning`
- `loading={true}` replaces label text with a spinner; the spinner color adapts to `styleType`
- Use `aria-label` when `disabled={true}` to describe the disabled reason
