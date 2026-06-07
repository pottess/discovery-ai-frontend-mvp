# Celebration Design System — CSS Design Tokens

All tokens are CSS custom properties defined in `:root`. They come from two files:
- `globals.css` — spacing, typography, border-radius, shadows, animation
- `bees/light.css` — colors, font family, font weights

## Colors — Brand

```css
--color-brand-100: #6c6c6c
--color-brand-200: #464646
--color-brand-300: #000000   /* default brand color used in components */
--color-brand-400: #6c6c6c
--color-brand-500: #000000
--color-brand-600: #000000
--color-brand-gradient: linear-gradient(90deg, #000000 0%, #6c6c6c 100%)
--color-contrast-brand: #ffffff
```

## Colors — Neutral

```css
--color-neutral-100: #ffffff
--color-neutral-200: #d9d9d9
--color-neutral-300: #bfbfbf
--color-neutral-400: #666666
--color-neutral-500: #292929
--color-neutral-600: #0e0e0e
--color-neutral-background: #efecfb
```

## Colors — Feedback

```css
/* Danger */
--color-feedback-danger-100: #ffeaea
--color-feedback-danger-200: #f3c0be
--color-feedback-danger-300: #c92323
--color-feedback-danger-400: #ae1e1e
--color-feedback-danger-500: #8e1818
--color-feedback-danger-600: #7a130a

/* Positive (Success) */
--color-feedback-positive-100: #e1fce9
--color-feedback-positive-200: #d0efbd
--color-feedback-positive-300: #00b261
--color-feedback-positive-400: #08663b
--color-feedback-positive-500: #053821
--color-feedback-positive-600: #273f32

/* Warning */
--color-feedback-warning-100: #fff0de
--color-feedback-warning-200: #ffd0ad
--color-feedback-warning-300: #ff9040
--color-feedback-warning-400: #db5c00
--color-feedback-warning-500: #943e00
--color-feedback-warning-600: #853e00
```

## Colors — Action & Contrast

```css
--color-action-default: #000000
--color-action-hover: #6c6c6c
--color-contrast-white: #ffffff
--color-contrast-black: #0e0e0e
--color-contrast-focused: #490c97   /* focus ring color */
--color-accent-100: #fffd54
```

## Colors — Opacity

```css
--color-opacity-default: rgba(255,255,255, 0.32)
--color-opacity-hover: rgba(108,108,108, 0.32)
--color-opacity-disabled: rgba(191,191,191, 0.32)
--color-opacity-error: rgba(255,234,234, 0.32)
```

## Typography — Font Family

```css
--font-family-base: 'IBM Plex Sans', sans-serif
```

## Typography — Font Size

```css
--font-size-xs: 0.75rem      /* 12px */
--font-size-sm: 0.875rem     /* 14px */
--font-size-default: 1rem    /* 16px */
--font-size-lg: 1.25rem      /* 20px */
--font-size-xl: 1.5rem       /* 24px */
--font-size-2xl: 2rem        /* 32px */
--font-size-3xl: 2.5rem      /* 40px */
--font-size-4xl: 3rem        /* 48px */
--font-size-5xl: 4rem        /* 64px */
--font-size-6xl: 5rem        /* 80px */
--font-size-7xl: 6rem        /* 96px */
```

## Typography — Font Weight

```css
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
```

## Typography — Line Height

```css
--line-height-default: 100%
--line-height-xs: 120%
--line-height-sm: 144%
--line-height-md: 152%
--line-height-lg: 184%
--line-height-xl: 200%
```

## Border Radius

```css
--border-radius-none: 0rem
--border-radius-sm: 0.125rem    /* 2px */
--border-radius-default: 0.25rem /* 4px */
--border-radius-md: 0.5rem      /* 8px */
--border-radius-lg: 1rem        /* 16px */
--border-radius-pill: 31.25rem  /* fully rounded */
--border-radius-circular: 50%   /* circle */
```

## Border Width

```css
--border-width-none: 0rem
--border-width-xs: 0.063rem
--border-width-default: 0.1rem
--border-width-sm: 0.125rem
--border-width-lg: 0.25rem
--border-width-xl: 0.5rem
```

## Spacing — Inset (padding)

```css
--spacing-inset-size-2xs: 0.25rem   /* 4px */
--spacing-inset-size-xs: 0.5rem    /* 8px */
--spacing-inset-size-sm: 1rem      /* 16px */
--spacing-inset-size-lg: 1.5rem    /* 24px */
--spacing-inset-size-xl: 2rem      /* 32px */
--spacing-inset-size-2xl: 2.5rem   /* 40px */
```

## Spacing — Stack/Inline (margins/gaps)

```css
--spacing-size-5xs: 0.25rem    /* 4px */
--spacing-size-4xs: 0.5rem     /* 8px */
--spacing-size-3xs: 1rem       /* 16px */
--spacing-size-2xs: 1.5rem     /* 24px */
--spacing-size-xs: 2rem        /* 32px */
--spacing-size-sm: 2.5rem      /* 40px */
--spacing-size-md: 3rem        /* 48px */
--spacing-size-lg: 3.5rem      /* 56px */
--spacing-size-xl: 4rem        /* 64px */
--spacing-size-2xl: 5rem       /* 80px */
--spacing-size-3xl: 7.5rem     /* 120px */
--spacing-size-4xl: 10rem      /* 160px */
--spacing-size-5xl: 12.5rem    /* 200px */
```

## Shadows

```css
--shadow-level-1: 0rem 0.25rem 0.5rem    /* subtle */
--shadow-level-2: 0rem 0.5rem 1.5rem     /* cards */
--shadow-level-3: 0rem 1rem 2rem         /* modals/drawers */
--shadow-level-4: 0rem 1rem 3rem         /* high elevation */
```

## Opacity

```css
--opacity-level-1: 0.72
--opacity-level-2: 0.64
--opacity-level-3: 0.32
--opacity-level-4: 0.16
--opacity-level-5: 0.08
```

## Animation — Velocity (duration)

```css
--velocity-slow: 0.275s
--velocity-medium: 0.225s
--velocity-fast: 0.150s
```

## Animation — Easing (vibe)

```css
--vibe-soft: Cubic-bezier(0.48, 0, 0.48, 1)
--vibe-energetic: Cubic-bezier(0.64, 0, 0.92, 1)
--vibe-calm: Cubic-bezier(0.08, 0, 0.35, 1)
```

## Usage in styled-components

```ts
import styled from 'styled-components'

const MyComponent = styled.div`
  background-color: var(--color-feedback-positive-100);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-inset-size-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  box-shadow: var(--shadow-level-1) var(--color-neutral-300);
`
```
