# ClbTable

A full-featured data table with sorting, filtering, row selection, bulk actions, pagination, and loading states.

## Import

```ts
import { ClbTable } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | Column[] | - | Column definitions (required) |
| data | DataType[] | - | Data array (required) |
| config | TableConfig | `{}` | Advanced configuration |
| loading | boolean | false | Shows loading overlay |

## Column Definition

```ts
// Basic column
{
  title: string          // Header text
  dataIndex: keyof Data  // Field to display
  cellAlign?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'  // Sticky column
  columnStyleClasses?: string  // CSS class e.g. 'width-80'
  showColumnOrderIcon?: boolean  // Enable sort
  filterOptions?: string[]  // Filter dropdown options
  cellRender?: (record: Data, dataIndex: string) => ReactNode  // Custom cell renderer
}

// Group column (nested headers)
{
  title: string
  children: Column[]
}
```

## TableConfig

```ts
{
  enableSelection?: boolean | 'radio' | 'checkbox'
  selectionKeyField?: keyof Data     // default: 'key'
  onSelectRow?: (ids: string[]) => void
  bulkActionsButtons?: Array<{ label, styleType, actionFunction, descriptionTooltip }>
  showBulkActions?: boolean
  onFilterChange?: (filters: Record<string, string[]>) => void
  onColumnOrder?: (order: Record<string, 'asc' | 'desc'>) => void
  showFilterTags?: boolean
  pagination?: { current, pageSize, total, onChange }
  tableEmpty?: { icon, title, description, buttonLabel, buttonOnClick }
  activeRows?: string[] | number[]   // pre-selected rows
  headerType?: 'fixed' | 'loose'
  footerType?: 'fixed' | 'loose'
}
```

## Examples

```jsx
// Basic table
const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Age', dataIndex: 'age', cellAlign: 'right' },
]
<ClbTable columns={columns} data={data} />

// With sort + filter
const columns = [
  { title: 'Name', dataIndex: 'name', showColumnOrderIcon: true },
  { title: 'Dept', dataIndex: 'department', showColumnOrderIcon: true, filterOptions: ['IT', 'HR', 'Marketing'] },
]
<ClbTable
  columns={columns}
  data={data}
  config={{
    onFilterChange: (filters) => fetchData(filters),
    onColumnOrder: (order) => fetchData({}, order),
  }}
/>

// With row selection and bulk actions
<ClbTable
  columns={columns}
  data={data}
  config={{
    enableSelection: 'checkbox',
    selectionKeyField: 'id',
    onSelectRow: (ids) => setSelected(ids),
    bulkActionsButtons: [
      { label: 'Delete', styleType: 'primary', actionFunction: handleDelete },
    ],
  }}
/>

// Custom cell renderer
{
  title: 'Status',
  dataIndex: 'status',
  cellRender: (record) => <ClbTag type={record.status === 'active' ? 'positive' : 'negative'}>{record.status}</ClbTag>
}

// Action column
{
  title: 'Actions',
  fixed: 'right',
  columnStyleClasses: 'width-200',
  cellRender: (record) => (
    <ClbButton size="sm" styleType="secondary" label="Edit" onClick={() => handleEdit(record)} />
  ),
}

// With pagination
<ClbTable
  columns={columns}
  data={data}
  loading={loading}
  config={{
    pagination: {
      current: page,
      pageSize: 10,
      total: totalItems,
      onChange: (page, size) => fetchData(page, size),
    },
    tableEmpty: {
      title: 'No results found',
      description: 'Try adjusting your filters.',
      buttonLabel: 'Clear filters',
      buttonOnClick: clearFilters,
    },
  }}
/>
```

## Notes

- Use `fixed: 'left'` or `fixed: 'right'` for sticky columns during horizontal scroll
- `loading={true}` shows an overlay with a spinner — use during async data fetches
- `cellRender` receives the full row record — use for custom rendering (tags, badges, action buttons)
- Server-side filtering/sorting/pagination: use `onFilterChange`, `onColumnOrder`, and `pagination.onChange` callbacks to trigger API calls
