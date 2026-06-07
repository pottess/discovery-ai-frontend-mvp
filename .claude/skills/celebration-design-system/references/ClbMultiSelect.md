# ClbMultiSelect

A multi-select dropdown with search, hierarchical options, and active filter tags.

## Import

```ts
import { ClbMultiSelect } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | `string[] \| FilterOptions[]` | - | Available options (required) |
| activeFilters | string[] | `[]` | Currently selected values |
| onChange | (selected: string[]) => void | - | Called on each selection change |
| onApply | (selected: string[]) => void | - | Called when user clicks "Apply" |
| label | string | - | Trigger button label |
| placeholder | string | - | Search input placeholder |
| dropdownPosition | `'top' \| 'bottom'` | `'bottom'` | Dropdown position |
| i18n | I18nMultiSelect | PT-BR | Localization texts |

```ts
interface FilterOptions {
  label: string
  value: string
  children?: FilterOptions[]  // hierarchical options
}
```

## Examples

```jsx
// Simple string options
const [selected, setSelected] = useState([])
<ClbMultiSelect
  label="Categories"
  options={['Electronics', 'Clothing', 'Books']}
  activeFilters={selected}
  onChange={setSelected}
  onApply={setSelected}
/>

// Structured options with values
<ClbMultiSelect
  label="Departments"
  options={[
    { label: 'IT', value: 'it' },
    { label: 'HR', value: 'hr' },
    { label: 'Sales', value: 'sales' },
  ]}
  activeFilters={selectedDepts}
  onChange={setSelectedDepts}
  onApply={val => { setSelectedDepts(val); fetchData(val) }}
/>

// Hierarchical options
<ClbMultiSelect
  label="Region"
  options={[
    {
      label: 'Americas',
      value: 'americas',
      children: [
        { label: 'Brazil', value: 'br' },
        { label: 'USA', value: 'us' },
      ],
    },
  ]}
  activeFilters={regions}
  onChange={setRegions}
  onApply={setRegions}
/>
```

## Notes

- Selected items are shown as removable tags below the dropdown
- Use `onApply` for server-side filtering (fires on explicit Apply button click)
- Use `onChange` for real-time/client-side filtering (fires on each change)
- Includes built-in search filtering within the dropdown
