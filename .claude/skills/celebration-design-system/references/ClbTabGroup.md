# ClbTabGroup

A responsive container for `ClbTab` elements. Automatically moves overflow tabs into a dropdown when space is limited.

## Import

```ts
import { ClbTabGroup, ClbTab } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactElement<ClbTab>[]` | - | Required. ClbTab elements |
| variation | `'shape' \| 'ghost'` | `'ghost'` | Visual style for the tab group |

## Examples

```jsx
// Basic tabs with content
const [activeTab, setActiveTab] = useState('Info')

<ClbTabGroup>
  <ClbTab title="Info" active={activeTab === 'Info'} onActive={setActiveTab} />
  <ClbTab title="Details" active={activeTab === 'Details'} onActive={setActiveTab} />
  <ClbTab title="History" active={activeTab === 'History'} onActive={setActiveTab} />
</ClbTabGroup>

<div>
  {activeTab === 'Info' && <InfoPanel />}
  {activeTab === 'Details' && <DetailsPanel />}
  {activeTab === 'History' && <HistoryPanel />}
</div>

// Shape variation
<ClbTabGroup variation="shape">
  <ClbTab title="Personal" active={activeTab === 'Personal'} onActive={setActiveTab} />
  <ClbTab title="Address" active={activeTab === 'Address'} onActive={setActiveTab} />
</ClbTabGroup>

// Error and disabled states
<ClbTabGroup>
  <ClbTab title="Form" active={activeTab === 'Form'} onActive={setActiveTab} />
  <ClbTab title="Review" active={activeTab === 'Review'} onActive={setActiveTab} error={hasErrors} />
  <ClbTab title="Done" active={activeTab === 'Done'} onActive={setActiveTab} disabled={hasErrors} />
</ClbTabGroup>
```

## Notes

- Manages state **externally** — track `activeTab` in parent, pass `active` and `onActive` to each `ClbTab`
- Uses `ResizeObserver` to detect available width; overflow tabs go into a `...` dropdown
- The active tab is always kept visible even if it would otherwise overflow
- `role="tablist"` is applied on the container; each `ClbTab` has `role="tab"`
- Tab group does **not** render associated tab panel content — that is the developer's responsibility
