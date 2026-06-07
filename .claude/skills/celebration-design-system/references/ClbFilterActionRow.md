# ClbFilterActionRow

A complete filter toolbar row with selects, multi-selects, search input, active filter tags, and header action buttons.

## Import

```ts
import { ClbFilterActionRow } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Section title |
| description | string | - | Section description |
| activeFilters | `{ [key: string]: string[] }` | `{}` | Current active filters |
| columnsTitles | `{ [key: string]: string }` | `{}` | Maps filter keys to display names for tags |
| selectRowProps | SelectRowProps[] | `[]` | Select (dropdown) filter configurations |
| multiSelectRowProps | MultiSelectRowProps[] | - | Multi-select filter configurations |
| inputSearchProps | InputSearchRowProps | - | Search input configuration |
| advancedFilterButton | ButtonProps | - | "Advanced filters" button (opens modal/drawer) |
| headerButtonsProps | ButtonProps[] | - | Header action buttons (e.g., Export) |
| hideFilterTags | boolean | false | Hide active filter tags |
| filterBy | `'label' \| 'key'` | `'label'` | How multiSelect filters are applied |
| maxWidthTag | number | - | Max width in px for filter tags |
| locale | ClbFiltersActionRowLocale | PT-BR | Text customizations |
| onChange | (newFilters) => void | - | Called when filters change |
| onRemoveFilterTag | (key, newFilters) => void | - | Called when a specific filter tag is removed |
| onRemoveAllFilters | () => void | - | Called when "Clear all" is clicked |

## Example

```jsx
const [activeFilters, setActiveFilters] = useState({})

<ClbFilterActionRow
  title="Products"
  activeFilters={activeFilters}
  columnsTitles={{ status: 'Status', category: 'Category' }}
  selectRowProps={[
    { label: 'Status', name: 'status', options: ['Active', 'Inactive'] },
  ]}
  multiSelectRowProps={[
    {
      label: 'Category',
      name: 'category',
      options: [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Clothing', value: 'clothing' },
      ],
    },
  ]}
  inputSearchProps={{ label: 'Search', name: 'search', placeholder: 'Type to search...' }}
  advancedFilterButton={{
    label: 'More Filters',
    styleType: 'primary',
    icon: 'filter',
    onClick: () => setDrawerOpen(true),
  }}
  headerButtonsProps={[
    { label: 'Export', styleType: 'secondary', icon: 'download', onClick: handleExport },
  ]}
  onChange={setActiveFilters}
  onRemoveFilterTag={(key, newFilters) => setActiveFilters(newFilters)}
  onRemoveAllFilters={() => setActiveFilters({})}
/>
```

## Notes

- Active filter tags are shown below the filter row with individual remove buttons
- "Clear all" button is disabled when no filters are active
- Filter values are stored as `{ [field]: string[] }` (arrays even for single selects)
- Uses `ClbContainerTags` internally to handle tag overflow with a "+N" counter
