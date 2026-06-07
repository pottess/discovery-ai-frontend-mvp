# ClbLayout

An application shell layout with header, sidebar, main content, and footer areas.

## Import

```ts
import { ClbLayout, ClbLayoutHeader, ClbLayoutSider, ClbLayoutContent, ClbLayoutFooter } from '@celebration/react'
```

## Sub-components

| Component | Role | Key Props |
|-----------|------|-----------|
| `ClbLayout` | Root wrapper | `children` |
| `ClbLayoutHeader` | Top bar | `children` |
| `ClbLayoutSider` | Left sidebar | `children`, `collapsible?`, `collapsed?`, `onCollapse?` |
| `ClbLayoutContent` | Main area | `children` |
| `ClbLayoutFooter` | Bottom bar | `children` |

## Example

```jsx
function App() {
  return (
    <ClbLayout>
      <ClbLayoutHeader>
        <ClbHeader logo="/logo.png" productName="My App" />
      </ClbLayoutHeader>

      <ClbLayout>
        <ClbLayoutSider>
          <ClbSideMenu items={menuItems} />
        </ClbLayoutSider>

        <ClbLayoutContent>
          <main>
            <Outlet />
          </main>
        </ClbLayoutContent>
      </ClbLayout>

      <ClbLayoutFooter>
        <span>Footer content</span>
      </ClbLayoutFooter>
    </ClbLayout>
  )
}
```

## Notes

- `ClbLayout` adds the `clb-layout-active` CSS class to `<body>` when mounted — this adjusts global styles
- Nest `ClbLayout` to combine sider + content (inner layout) with header/footer (outer layout)
- Use `ClbLayoutSider` with `ClbSideMenu` for the standard navigation sidebar pattern
