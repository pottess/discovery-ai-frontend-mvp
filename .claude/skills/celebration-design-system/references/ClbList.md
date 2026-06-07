# ClbList

A card-based list with selection support (checkbox/radio), tags, and configurable action buttons or dropdown menus per item.

## Import

```ts
import { ClbList } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | ListItem[] | - | List items (required) |
| enableSelection | `'checkbox' \| 'radio' \| false` | false | Row selection mode |
| typeAction | `'button' \| 'dropdown'` | - | Action type per row |
| toggleSelect | (id: string, selected: boolean) => void | - | Called on row selection |
| icon | string | - | Icon name for items |
| i18n | I18nList | PT-BR | Localization texts |

## Example

```jsx
const data = [
  {
    id: '1',
    title: 'Item One',
    description: 'Details about item one',
    tags: [{ label: 'Active', type: 'positive' }],
    actions: [
      { label: 'Edit', onClick: () => handleEdit('1') },
      { label: 'Delete', onClick: () => handleDelete('1') },
    ],
  },
]

// Simple list
<ClbList data={data} />

// With checkbox selection
<ClbList
  data={data}
  enableSelection="checkbox"
  toggleSelect={(id, selected) => updateSelection(id, selected)}
/>

// With action dropdown per row
<ClbList data={data} typeAction="dropdown" />
```

## Notes

- `data` items support: `id`, `title`, `description`, `tags`, `actions`, `isSelected`
- Action buttons appear per row; use `typeAction="dropdown"` to collapse multiple actions into a dropdown
- Use `enableSelection="checkbox"` for multi-select; `"radio"` for single-select
