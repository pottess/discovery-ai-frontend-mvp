# ClbInputSearch

A search input field with a magnifying glass icon and clear (X) button.

## Import

```ts
import { ClbInputSearch } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required |
| name | string | - | Form field name |
| value | string | - | Required. Controlled value |
| onChange | ChangeEventHandler | - | Change handler |
| onEnter | KeyboardEventHandler | - | Called when Enter is pressed |
| placeholder | string | - | Placeholder text |
| disabled | boolean | false | Disabled state |
| autoFocus | boolean | false | Auto-focus on mount |
| locale | `{ ariaLabelCleanSearch: string }` | PT-BR | Accessibility text |

## Examples

```jsx
// Basic search
const [search, setSearch] = useState('')
<ClbInputSearch
  id="search"
  name="search"
  placeholder="Search..."
  value={search}
  onChange={e => setSearch(e.target.value)}
/>

// With Enter action
<ClbInputSearch
  id="search"
  name="search"
  value={search}
  onChange={e => setSearch(e.target.value)}
  onEnter={() => fetchResults(search)}
  placeholder="Search and press Enter"
/>

// Live search (debounced)
useEffect(() => {
  const timer = setTimeout(() => { if (search.length > 2) fetchResults(search) }, 300)
  return () => clearTimeout(timer)
}, [search])
<ClbInputSearch id="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
```

## Notes

- The clear (X) button appears only when there is a value — clicking it fires `onChange` with empty value
- Requires controlled usage: always provide `value` + `onChange`
- Uses `forwardRef` — you can attach a ref to the underlying input DOM element
