# ClbRadioGroup

A layout wrapper for grouping `ClbRadioButton` elements. Provides semantic `role="radiogroup"` and controls orientation.

## Import

```ts
import { ClbRadioGroup, ClbRadioButton } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `'list' \| 'line'` | - | Required. `'list'` = vertical, `'line'` = horizontal |
| children | `ReactElement<ClbRadioButton>[]` | - | ClbRadioButton elements |

Also accepts `React.HTMLProps<HTMLDivElement>` for custom styles.

## Examples

```jsx
// Vertical (list)
const [selected, setSelected] = useState('a')

<ClbRadioGroup orientation="list">
  <ClbRadioButton
    id="opt-a"
    name="myGroup"
    value="a"
    label="Option A"
    checked={selected === 'a'}
    onChange={e => setSelected(e.target.value)}
  />
  <ClbRadioButton
    id="opt-b"
    name="myGroup"
    value="b"
    label="Option B"
    checked={selected === 'b'}
    onChange={e => setSelected(e.target.value)}
  />
</ClbRadioGroup>

// Horizontal (line)
<ClbRadioGroup orientation="line">
  <ClbRadioButton id="sm" name="size" value="sm" label="Small" />
  <ClbRadioButton id="md" name="size" value="md" label="Medium" />
  <ClbRadioButton id="lg" name="size" value="lg" label="Large" />
</ClbRadioGroup>
```

## Notes

- `ClbRadioGroup` does **not** manage selection state — handle `checked` and `onChange` in the parent
- All children `ClbRadioButton` must share the same `name` prop
- `orientation="line"` is best for few options with short labels
- `orientation="list"` is best for many options or long labels
- For accessibility, wrap with a heading or add `aria-labelledby` referencing a label element
