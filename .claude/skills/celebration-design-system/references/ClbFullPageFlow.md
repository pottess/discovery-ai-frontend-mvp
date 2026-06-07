# ClbFullPageFlow

A full-screen modal for complex multi-step flows (wizards, long forms, terms acceptance). Renders via React portal.

## Import

```ts
import { ClbFullPageFlow } from '@celebration/react'
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | - | Controls visibility |
| onClose | () => void | - | Called on close |
| title | string | - | Title shown in header |
| children | ReactNode | - | Main content (scrollable) |
| footerButtons | FooterButtons | - | Up to 3 footer buttons |
| progressBar | ClbProgressBarProps | - | Optional progress bar config |
| closeButtonAriaLabel | string | `'close'` | Close button aria-label |
| active | boolean | true | Whether focus trap is active |

```ts
// Footer buttons by styleType:
// - 'primary': right side (required)
// - 'secondary': right side, before primary
// - 'tertiary': left side (auto-gets back arrow icon)
type FooterButtons = [ButtonProps, ButtonProps?, ButtonProps?]
```

## Example

```jsx
const [step, setStep] = useState(1)
const total = 3

<ClbFullPageFlow
  isOpen={isOpen}
  onClose={handleClose}
  title={`Step ${step}: ${titles[step]}`}
  progressBar={{ value: (step / total) * 100, description: `Step ${step} of ${total}` }}
  footerButtons={[
    { label: step === total ? 'Finish' : 'Next', styleType: 'primary', onClick: handleNext },
    { label: 'Cancel', styleType: 'secondary', onClick: handleClose },
    ...(step > 1 ? [{ label: 'Back', styleType: 'tertiary', onClick: handleBack }] : []),
  ]}
>
  {renderStepContent(step)}
</ClbFullPageFlow>
```

## Notes

- Content area scrolls vertically when it exceeds the viewport
- A shadow on the footer indicates there is content below when content overflows
- `role="dialog"` and `aria-modal="true"` are applied automatically
- Includes `ClbFocusTrap` internally — no need to wrap separately
- `tertiary` button gets an auto-applied left arrow icon (suitable for "Back")
