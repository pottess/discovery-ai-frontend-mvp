# ClbText

A styled text component following the Celebration design system typography tokens.

## Import

```ts
import { ClbText } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Text size |
| color | `'success' \| 'warning' \| 'danger' \| 'neutral'` | `'neutral'` | Semantic color |
| tone | `'100' \| '200' \| '300' \| '400' \| '500' \| '600'` | `'300'` | Color shade (lower = lighter, higher = darker) |
| disabled | boolean | false | Renders in disabled/muted style |

## Examples

```jsx
// Basic
<ClbText>Default paragraph text</ClbText>

// Sizes
<ClbText size="sm">Small text</ClbText>
<ClbText size="md">Medium text</ClbText>
<ClbText size="lg">Large text</ClbText>

// Semantic colors
<ClbText color="neutral" tone="600">Main body text</ClbText>
<ClbText color="success" tone="500">Operation completed successfully</ClbText>
<ClbText color="warning" tone="400">Please review before continuing</ClbText>
<ClbText color="danger" tone="600">Validation error occurred</ClbText>

// In a card
<ClbCard>
  <ClbText size="lg" color="neutral" tone="600">Card Title</ClbText>
  <ClbText size="md" color="neutral" tone="400">Descriptive body text</ClbText>
  <ClbText size="sm" color="warning" tone="500">Note: Feature in beta</ClbText>
</ClbCard>

// Disabled
<ClbText disabled>This field is not available</ClbText>
```

## Notes

- Renders as `<p>` element — correct semantic HTML for body text
- `tone` controls shade intensity: 100-300 = lighter, 400-600 = darker/more intense
- Do not use color alone to convey critical information — pair with icons or labels
- For very small text (`size="sm"`), ensure sufficient contrast for accessibility
