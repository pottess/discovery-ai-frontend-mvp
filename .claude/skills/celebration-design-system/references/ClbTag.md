# ClbTag

A small label component for displaying status, categories, or removable filter chips.

## Import

```ts
import { ClbTag } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'neutral' \| 'negative' \| 'warning' \| 'positive' \| 'filter'` | - | Required. Visual style and semantic meaning |
| children | ReactNode | - | Required. Tag content/label |
| id | string | `''` | Tag identifier (required when using `onClickRemove`) |
| onClickRemove | `(event: TagRemoveEvent) => void` | - | Called when the close icon is clicked (`filter` type only) |
| ariaLabelIconFilter | string | `''` | Accessible label for the remove icon |
| filterIcon | boolean | true | Show/hide the remove icon on `filter` type |
| disabled | boolean | false | Disabled state |

```ts
interface TagRemoveEvent {
  originalEvent: Event
  id: string  // ID of the tag that was removed
}
```

## Examples

```jsx
// Status tags
<div style={{ display: 'flex', gap: '8px' }}>
  <ClbTag type="neutral">Draft</ClbTag>
  <ClbTag type="positive">Active</ClbTag>
  <ClbTag type="warning">Pending</ClbTag>
  <ClbTag type="negative">Error</ClbTag>
</div>

// Removable filter chips
const [filters, setFilters] = useState([
  { id: '1', label: 'Category: Beer' },
  { id: '2', label: 'Region: SP' },
])

const handleRemove = ({ id }) => setFilters(f => f.filter(t => t.id !== id))

{filters.map(filter => (
  <ClbTag
    key={filter.id}
    id={filter.id}
    type="filter"
    onClickRemove={handleRemove}
    ariaLabelIconFilter={`Remove filter ${filter.label}`}
  >
    {filter.label}
  </ClbTag>
))}

// With icon
<ClbTag type="positive">
  <ClbIcon icon="user" /> Active User
</ClbTag>
```

## Notes

- `positive` auto-shows a check icon, `negative` shows a spam icon, `warning` shows a warning icon
- `filter` is the only type that shows a close/remove icon
- Always provide `ariaLabelIconFilter` for `type="filter"` tags for accessibility
- `onClickRemove` is NOT called when tag is `disabled`
- Tags are `div` elements — they do not navigate or submit by default
