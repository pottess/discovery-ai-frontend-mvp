# ClbProgressBar

A horizontal progress bar with label, value display, animation, and customizable color.

## Import

```ts
import { ClbProgressBar } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | `0` | Current progress value (required) |
| label | string | - | Progress label text |
| description | string | - | Additional description |
| minValue | number | `0` | Minimum value |
| maxValue | number | `100` | Maximum value |
| customTag | string | `'%'` | Suffix appended to displayed value |
| showValue | boolean | true | Show numeric value |
| color | string | `'var(--color-brand-300)'` | Bar fill color |
| size | `'sm' \| 'md'` | `'md'` | Bar thickness |
| initiallyAnimated | boolean | true | Animate from 0 to value on mount |

## Examples

```jsx
// Basic
<ClbProgressBar value={75} />

// With label and description
<ClbProgressBar value={50} label="Upload" description="In progress..." />

// Custom range (e.g., 0-5 rating)
<ClbProgressBar value={3.5} minValue={0} maxValue={5} customTag="/5" />

// Color and no animation
<ClbProgressBar value={60} color="var(--color-feedback-positive-300)" initiallyAnimated={false} />

// Multiple bars (multi-step progress)
<ClbProgressBar value={100} label="Step 1: Planning" description="Completed" />
<ClbProgressBar value={75} label="Step 2: Development" description="In progress" />
<ClbProgressBar value={0} label="Step 3: Testing" showValue={false} />
```

## Notes

- Values outside `[minValue, maxValue]` are automatically clamped
- `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` are set automatically
- Has `tabIndex={0}` for keyboard accessibility
- `initiallyAnimated={false}` renders the bar immediately at its final width (useful for pre-filled values)
