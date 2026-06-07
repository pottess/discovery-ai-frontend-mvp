# ClbAccordion

A collapsible content section. Use standalone or inside `ClbAccordionGroup` for managed open/close state.

## Import

```ts
import { ClbAccordion } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Header text |
| isOpen | boolean | false | Open state (controlled by group or parent) |
| isDisabled | boolean | false | Disabled state |
| onClick | () => void | - | Click handler |
| size | `'sm' \| 'lg'` | `'sm'` | Size |
| styleType | `'shape' \| 'ghost'` | `'shape'` | Visual style |
| description | string | `''` | Shown below label when size is `'lg'` |
| callToAction | string | `''` | CTA text in header |
| closedActionLabel | string | - | Alternative CTA text when open |
| iconLeft | boolean | false | Position icon on left |
| children | ReactNode | - | Collapsed content |

## Examples

```jsx
// Basic
<ClbAccordion label="FAQ Item" onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
  <p>Answer content here.</p>
</ClbAccordion>

// Large with description
<ClbAccordion label="Section Title" size="lg" description="Additional context">
  <p>Detailed content.</p>
</ClbAccordion>

// Ghost style
<ClbAccordion label="Minimal" styleType="ghost">
  <p>Content.</p>
</ClbAccordion>

// With call-to-action
<ClbAccordion label="See details" callToAction="Expand" closedActionLabel="Collapse">
  <p>Details here.</p>
</ClbAccordion>
```

## Notes

- Keyboard accessible: Enter/Space to toggle
- When used inside `ClbAccordionGroup`, the group controls `isOpen` — do not set it manually
