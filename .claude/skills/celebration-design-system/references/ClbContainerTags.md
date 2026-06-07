# ClbContainerTags

A utility container that detects overflow of child tags and reports hidden tag IDs via a callback. Does not hide tags visually on its own — you apply CSS to hide elements with `data-overflowed` attribute.

## Import

```ts
import { ClbContainerTags } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required. Unique container ID |
| children | ReactNode | - | Tag elements (each needs an `id`) |
| onTagsHidden | (hiddenIds: string[]) => void | - | Called with IDs of overflowed tags |
| refresh | boolean | false | Force recalculation (pass changing value to trigger) |

## Example

```jsx
const [hiddenTags, setHiddenTags] = useState<string[]>([])

<div style={{ width: '300px' }}>
  <ClbContainerTags id="my-tags" onTagsHidden={setHiddenTags}>
    <ClbTag id="tag1" label="React" />
    <ClbTag id="tag2" label="TypeScript" />
    <ClbTag id="tag3" label="Node.js" />
    <ClbTag id="tag4" label="GraphQL" />
  </ClbContainerTags>

  {hiddenTags.length > 0 && (
    <span>+{hiddenTags.length} more</span>
  )}
</div>
```

## Notes

- Each child tag must have a unique `id` — this is how hidden tags are identified
- The component adds `data-overflowed` to overflowed children; add `[data-overflowed] { display: none }` to hide them
- `refresh` prop: pass a changing value (like a timestamp or counter) to force recalculation after layout changes
- Typically used with `ClbTag` components inside table cells or filter bars
