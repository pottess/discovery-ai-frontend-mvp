# ClbAccordionGroup

Groups multiple `ClbAccordion` components and manages their open/close state automatically.

## Import

```ts
import { ClbAccordionGroup, ClbAccordion } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| multiSelect | boolean | false | Allow multiple accordions open simultaneously |
| children | ReactNode | - | `ClbAccordion` components |

## Examples

```jsx
// Single open (default) — opening one closes others
<ClbAccordionGroup>
  <ClbAccordion label="Item 1">
    <p>Content 1</p>
  </ClbAccordion>
  <ClbAccordion label="Item 2">
    <p>Content 2</p>
  </ClbAccordion>
  <ClbAccordion label="Item 3">
    <p>Content 3</p>
  </ClbAccordion>
</ClbAccordionGroup>

// Multiple open allowed
<ClbAccordionGroup multiSelect={true}>
  <ClbAccordion label="FAQ 1"><p>Answer 1</p></ClbAccordion>
  <ClbAccordion label="FAQ 2"><p>Answer 2</p></ClbAccordion>
</ClbAccordionGroup>
```

## Notes

- The group controls the `isOpen` state of each child — do not pass `isOpen` to children manually
- Only `ClbAccordion` components should be direct children
