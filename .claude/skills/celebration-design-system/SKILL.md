# Celebration Design System

**IMPORTANT: Use this skill whenever you work with `@celebration/react` components (any `Clb`-prefixed component), build UI, create forms, tables, modals, drawers, or any layout in the Cora Prices Frontend. This skill is your authoritative reference — always read it before generating component code.**

> **Project import rule:** the examples below show the raw `@celebration/react` API for reference. In **feature code**, NEVER import directly from `@celebration/react`. Always import via the project barrel `~/components/external` (see `.claude/rules/components-rule.md`). If a `Clb*` component is not yet re-exported, add it to `src/components/external/index.tsx` first, then consume via `~/components/external`.

## Overview

`@celebration/react` is Ambev's design system. All UI must use `Clb*` components instead of raw HTML or custom alternatives when a matching component exists. CSS tokens from `@celebration/assets` must be used for spacing, colors, typography, and effects in styled-components.

> **Live reference / troubleshooting:** for any doubt about a `Clb*` component, its props, or an error, consult the official Storybook:
> **https://celebration.ambevdevs.com.br/storybook-react** — interactive docs, prop tables, and live examples for every component.

## Setup & Installation

See: `@.claude/skills/celebration-design-system/references/installation.md`

**Quick summary:**
```ts
// 1. CSS (main.tsx or index.tsx)
import '@celebration/assets/src/main.css'

// 2. Providers (App root)
import { ThemeProvider, ToastProvider } from '@celebration/react'
<ThemeProvider theme="bees">
  <ToastProvider>
    <App />
  </ToastProvider>
</ThemeProvider>

// 3. Component imports
import { ClbButton, ClbModal } from '@celebration/react'
```

## CSS Design Tokens

See: `@.claude/skills/celebration-design-system/references/tokens.md`

Use CSS custom properties (not hardcoded values) in styled-components:

```ts
// Colors
var(--color-brand-300)           // primary brand
var(--color-neutral-100/600)     // neutrals
var(--color-feedback-positive-300/negative-300/warning-300)

// Spacing
var(--spacing-size-1)  // 4px
var(--spacing-size-2)  // 8px
var(--spacing-size-4)  // 16px
var(--spacing-size-8)  // 32px

// Typography
var(--font-size-xs/sm/md/lg/xl)

// Border radius
var(--border-radius-sm/md/lg/pill)

// Shadows
var(--shadow-level-1/2/3/4)
```

---

## Component Reference Index

### Actions & Inputs
| Component | Reference | Use for |
|-----------|-----------|---------|
| ClbButton | `references/ClbButton.md` | All buttons (primary, outline, ghost, loading) |
| ClbLink | `references/ClbLink.md` | Anchor/navigation links |
| ClbCheckbox | `references/ClbCheckbox.md` | Boolean toggle fields |
| ClbRadioButton | `references/ClbRadioButton.md` | Single option in a radio group |
| ClbRadioGroup | `references/ClbRadioGroup.md` | Layout wrapper for radio buttons |

### Form Inputs
| Component | Reference | Use for |
|-----------|-----------|---------|
| ClbInputText | `references/ClbInputText.md` | Text fields |
| ClbInputPassword | `references/ClbInputPassword.md` | Password fields with show/hide |
| ClbInputNumber | `references/ClbInputNumber.md` | Numeric + masked inputs (CPF, CNPJ, etc.) |
| ClbInputCounter | `references/ClbInputCounter.md` | Integer increment/decrement |
| ClbInputSearch | `references/ClbInputSearch.md` | Search fields with enter handler |
| ClbInputSelectType | `references/ClbInputSelectType.md` | Input + dropdown type selector |
| ClbInputUpload | `references/ClbInputUpload.md` | File upload |
| ClbTextarea | `references/ClbTextarea.md` | Multi-line text |
| ClbSelect | `references/ClbSelect.md` | Native select dropdown |
| ClbMultiSelect | `references/ClbMultiSelect.md` | Multi-select with search and tags |
| ClbDatePicker | `references/ClbDatePicker.md` | Date picker with validation |
| ClbCalendar | `references/ClbCalendar.md` | Standalone calendar |

### Data Display
| Component | Reference | Use for |
|-----------|-----------|---------|
| ClbTable | `references/ClbTable.md` | Data tables with pagination, sorting, filtering, selection |
| ClbList | `references/ClbList.md` | Simple selectable lists |
| ClbTag | `references/ClbTag.md` | Status labels and removable filter chips |
| ClbContainerTags | `references/ClbContainerTags.md` | Overflow-aware tag containers |
| ClbProgressBar | `references/ClbProgressBar.md` | Progress indicators |
| ClbText | `references/ClbText.md` | Styled paragraph text |
| ClbAvatar | `references/ClbAvatar.md` | User avatars with dropdown |

### Feedback & Overlays
| Component | Reference | Use for |
|-----------|-----------|---------|
| ClbAlert | `references/ClbAlert.md` | Inline status banners |
| ClbToast | `references/ClbToast.md` | Temporary notification toasts |
| ClbTooltip | `references/ClbTooltip.md` | Hover/focus contextual hints |
| ClbModal | `references/ClbModal.md` | Dialog modals |
| ClbDrawer | `references/ClbDrawer.md` | Side panel drawers |
| ClbPopover | `references/ClbPopover.md` | Anchored confirmation/info panels |
| ClbLoading | `references/ClbLoading.md` | Loading spinners |
| ClbOverlay | `references/ClbOverlay.md` | Full-section loading dimmer |

### Navigation & Layout
| Component | Reference | Use for |
|-----------|-----------|---------|
| ClbHeader | `references/ClbHeader.md` | App top bar |
| ClbMenu | `references/ClbMenu.md` | Top/horizontal navigation menu |
| ClbSideMenu | `references/ClbSideMenu.md` | Vertical sidebar navigation |
| ClbBreadcrumb | `references/ClbBreadcrumb.md` | Page location breadcrumbs |
| ClbLayout | `references/ClbLayout.md` | App shell with header/sider/content |
| ClbTabGroup | `references/ClbTabGroup.md` | Tab navigation container |
| ClbTab | `references/ClbTab.md` | Individual tab |
| ClbPagination | `references/ClbPagination.md` | Page navigation control |

### Containers & Structure
| Component | Reference | Use for |
|-----------|-----------|---------|
| ClbCard | `references/ClbCard.md` | Content card container |
| ClbAccordion | `references/ClbAccordion.md` | Collapsible section |
| ClbAccordionGroup | `references/ClbAccordionGroup.md` | Accordion container |
| ClbDropdown | `references/ClbDropdown.md` | Custom dropdown panel |
| ClbFloatingPanel | `references/ClbFloatingPanel.md` | Draggable floating panel |
| ClbFullPageFlow | `references/ClbFullPageFlow.md` | Full-screen multi-step modal |

### Utilities
| Component | Reference | Use for |
|-----------|-----------|---------|
| ClbIcon | `references/ClbIcon.md` | Icon rendering |
| ClbShowIf | `references/ClbShowIf.md` | Conditional rendering |
| ClbFocusTrap | `references/ClbFocusTrap.md` | Keyboard focus containment |
| ClbFilterActionRow | `references/ClbFilterActionRow.md` | Filter bar with action buttons |
| ClbStyle | `references/ClbStyle.md` | CSS snippet display (docs only) |

---

## Key Patterns

### Forms (react-hook-form + zod)
```tsx
import { ClbInputText, ClbButton } from '@celebration/react'

<ClbInputText
  id="name"
  label="Name"
  error={!!errors.name}
  helperText={errors.name?.message}
  showHelperText={!!errors.name}
  {...register('name')}
/>
<ClbButton label="Submit" type="submit" styleType="primary" loading={isSubmitting} />
```

### Tables (server-side)
```tsx
import { ClbTable } from '@celebration/react'
// See references/ClbTable.md for full Column and TableConfig types

const columns = [
  { field: 'name', name: 'Name', sortable: true },
  { field: 'status', name: 'Status', cellRender: row => <ClbTag type="positive">{row.status}</ClbTag> },
]
const config = {
  pagination: { totalItems, page, pageSize, onChangePage, onChangePageSize },
  onFilterChange: handleFilter,
}

<ClbTable columns={columns} data={data} config={config} loading={isLoading} />
```

### Modals
```tsx
import { ClbModal } from '@celebration/react'
// itemsFooter renders in reverse order (last = leftmost)

<ClbModal
  title="Confirm Action"
  open={isOpen}
  onClose={() => setIsOpen(false)}
  itemsFooter={[
    { label: 'Confirm', type: 'primary', onClick: handleConfirm },
    { label: 'Cancel', type: 'outline', onClick: () => setIsOpen(false) },
  ]}
  description="Are you sure you want to proceed?"
/>
```

### Toast Notifications
```tsx
import { useToast } from '@celebration/react'

const { openToast } = useToast()

openToast({ title: 'Saved successfully', type: 'positive' })
openToast({ title: 'Save failed', description: 'Check connection', type: 'negative' })
openToast({ title: 'Session expiring', type: 'warning', autoClose: false })
```

### Tabs
```tsx
const [activeTab, setActiveTab] = useState('Overview')

<ClbTabGroup>
  <ClbTab title="Overview" active={activeTab === 'Overview'} onActive={setActiveTab} />
  <ClbTab title="Details" active={activeTab === 'Details'} onActive={setActiveTab} />
</ClbTabGroup>
{activeTab === 'Overview' && <OverviewContent />}
{activeTab === 'Details' && <DetailsContent />}
```

---

## Rules

1. **Always use Celebration components** — never raw `<button>`, `<input>`, `<select>` when a `Clb*` equivalent exists
2. **Always use CSS tokens** — never hardcode colors, spacing, or font sizes in styled-components
3. **Controlled components** — always pass `value` + `onChange` (or `checked` + `onChange`) for form inputs
4. **Error state pattern** — use `error={!!errors.field}` + `helperText={errors.field?.message}` + `showHelperText={!!errors.field}`
5. **ToastProvider required** — `useToast` only works inside `ToastProvider` (already configured at root)
6. **Modal footer order** — `itemsFooter` renders in reverse order (last item appears on the left)
7. **Table pagination reset** — always reset to page 1 when page size or filters change
