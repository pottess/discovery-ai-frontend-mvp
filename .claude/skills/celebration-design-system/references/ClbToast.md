# ClbToast

Temporary notification messages displayed in the top-right corner. Use the `useToast` hook to trigger toasts programmatically.

## Import

```ts
import { useToast, ToastProvider } from '@celebration/react'
```

## Setup

`ToastProvider` must wrap the app root (already done via `ThemeProvider` in this project):

```jsx
import { ThemeProvider, ToastProvider } from '@celebration/react'

<ThemeProvider theme="bees">
  <ToastProvider>
    <App />
  </ToastProvider>
</ThemeProvider>
```

## useToast Hook

| Method | Description |
|--------|-------------|
| `openToast(props)` | Creates and displays a toast |
| `close(id: string)` | Closes a specific toast |
| `$toasts` | Array of currently displayed toasts |

## Toast Props (passed to openToast)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Required. Toast heading |
| type | `'positive' \| 'negative' \| 'warning'` | - | Required. Visual style and icon |
| description | string | - | Additional detail text |
| autoClose | boolean | true | Whether toast closes automatically |
| timeToClose | number | `20000` | Milliseconds until auto-close |
| link | `{ label, href?, route?, target?, onClick? }` | - | Optional action link |

## Examples

```jsx
const { openToast } = useToast()

// Success
openToast({ title: 'Saved successfully', type: 'positive' })

// Error with description
openToast({
  title: 'Save failed',
  description: 'Check your connection and try again',
  type: 'negative',
})

// Warning that stays until dismissed
openToast({
  title: 'Session expiring',
  description: 'Your session will expire in 5 minutes',
  type: 'warning',
  autoClose: false,
})

// With action link
openToast({
  title: 'Export complete',
  type: 'positive',
  link: {
    label: 'Download',
    href: '/exports/latest',
  },
})

// Short display time
openToast({
  title: 'Copied to clipboard',
  type: 'positive',
  timeToClose: 3000,
})

// Close programmatically
const { openToast, close, $toasts } = useToast()
const toast = openToast({ title: 'Processing...', type: 'positive', autoClose: false })
// later:
close(toast.id)
```

## Notes

- Toasts stack vertically in the top-right corner
- Fade-out animation plays before removal from DOM
- `type` determines both color and icon automatically
- Avoid showing many toasts simultaneously — keep feedback focused
