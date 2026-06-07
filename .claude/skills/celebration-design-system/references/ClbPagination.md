# ClbPagination

A pagination control with page navigation, page size selector, and results summary.

## Import

```ts
import { ClbPagination } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| totalItems | number | `0` | Total number of items |
| page | number | `1` | Current page number |
| pageSize | number | `10` | Items per page |
| customItemsPerPage | number[] | `[10, 30, 50, 100]` | Available page size options |
| dropdownPosition | `'top' \| 'bottom'` | `'bottom'` | Position of overflow dropdown |
| onChangePage | (page: number) => void | - | Called on page change |
| onChangePageSize | (size: number) => void | - | Called on page size change |
| i18n | I18nPagination | PT-BR | Text customizations |

## Examples

```jsx
// Basic
<ClbPagination
  totalItems={100}
  page={currentPage}
  onChangePage={setCurrentPage}
/>

// Controlled with page size
const [page, setPage] = useState(1)
const [pageSize, setPageSize] = useState(10)

<ClbPagination
  totalItems={totalItems}
  page={page}
  pageSize={pageSize}
  customItemsPerPage={[10, 25, 50]}
  onChangePage={p => { setPage(p); fetchData(p, pageSize) }}
  onChangePageSize={size => { setPageSize(size); setPage(1); fetchData(1, size) }}
/>

// Server-side pagination (common pattern with React Query)
const { data } = useQuery(['items', page, pageSize], () => fetchItems(page, pageSize))

<ClbPagination
  totalItems={data?.total ?? 0}
  page={page}
  pageSize={pageSize}
  onChangePage={setPage}
  onChangePageSize={size => { setPageSize(size); setPage(1) }}
/>
```

## Notes

- Results summary is shown automatically: "1-10 of 100 results"
- Use `ClbTable` `config.pagination` prop when paginating a table — it uses `ClbPagination` internally
- Always reset to page 1 when page size changes
- Customize `i18n.totals` for different result label format (uses three `{?}` placeholders)
