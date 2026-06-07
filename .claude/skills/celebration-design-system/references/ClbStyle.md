# ClbStyle

A display utility for showing CSS code snippets with a copy-to-clipboard button. Intended for design system documentation and style guides.

## Import

```ts
import { ClbStyle } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| classCode | string | - | The CSS code snippet to display and copy |

## Examples

```jsx
// Single rule
<ClbStyle classCode=".button--primary { background-color: var(--color-brand-300); color: white; }" />

// Multi-line block
<ClbStyle classCode={`
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-size-4);
}
`} />
```

## Notes

- Renders a code block with a copy icon — clicking copies `classCode` to the clipboard using the Clipboard API
- Designed for documentation pages, style guides, and developer reference UIs
- Not meant for production UI components; use actual CSS/styled-components instead
- Clipboard API may require browser permissions in some environments
