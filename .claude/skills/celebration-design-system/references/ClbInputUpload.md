# ClbInputUpload

A file upload input with MIME type validation, loading state, drag-and-drop, and i18n support.

## Import

```ts
import { ClbInputUpload } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Required |
| label | string | - | Field label |
| acceptedFileTypes | string[] | - | Accepted MIME types (e.g., `['image/png', 'application/pdf']`) |
| onChangeFile | (file: File | null) => void | - | Called when a file is selected or cleared |
| isLoading | boolean | false | Shows loading state |
| error | boolean | false | Error state |
| helperText | string | - | Helper/error text |
| showHelperText | boolean | false | Show helper text |
| disabled | boolean | false | Disabled state |
| i18n | I18nInputUpload | PT-BR | Localization texts |

## Examples

```jsx
// Basic PDF upload
<ClbInputUpload
  id="contract"
  label="Contract (PDF)"
  acceptedFileTypes={['application/pdf']}
  onChangeFile={file => setContractFile(file)}
/>

// Image upload with loading state
<ClbInputUpload
  id="avatar"
  label="Profile Photo"
  acceptedFileTypes={['image/png', 'image/jpeg']}
  onChangeFile={async file => {
    if (!file) { setFile(null); return }
    setLoading(true)
    await uploadImage(file)
    setLoading(false)
  }}
  isLoading={loading}
/>

// With error
<ClbInputUpload
  id="doc"
  label="Document"
  acceptedFileTypes={['application/pdf']}
  onChangeFile={setFile}
  error={!!uploadError}
  helperText={uploadError || ''}
  showHelperText={!!uploadError}
/>
```

## Notes

- `onChangeFile` receives `File` on file selection and `null` when the file is removed
- MIME type validation: rejected files trigger an error state automatically
- `isLoading={true}` shows a spinner and disables interaction during upload
- Supports drag-and-drop as well as click-to-browse
