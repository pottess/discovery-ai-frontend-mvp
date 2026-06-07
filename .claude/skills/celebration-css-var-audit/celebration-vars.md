# Celebration Design Tokens Reference

Complete reference of all CSS variables from `@celebration/design-tokens`.

## Spacing Variables

### Spacing (margin, padding, gap)
```css
--spacing-size-5xs: 0.25rem;    /* 4px */
--spacing-size-4xs: 0.5rem;     /* 8px */
--spacing-size-3xs: 1rem;       /* 16px */
--spacing-size-2xs: 1.5rem;     /* 24px */
--spacing-size-xs: 2rem;        /* 32px */
--spacing-size-sm: 2.5rem;      /* 40px */
--spacing-size-md: 3rem;        /* 48px */
--spacing-size-lg: 3.5rem;      /* 56px */
--spacing-size-xl: 4rem;        /* 64px */
--spacing-size-2xl: 5rem;       /* 80px */
--spacing-size-3xl: 7.5rem;     /* 120px */
--spacing-size-4xl: 10rem;      /* 160px */
--spacing-size-5xl: 12.5rem;    /* 200px */
```

### Spacing Inset (padding)
```css
--spacing-inset-size-2xs: 0.25rem;  /* 4px */
--spacing-inset-size-xs: 0.5rem;    /* 8px */
--spacing-inset-size-sm: 1rem;      /* 16px */
--spacing-inset-size-lg: 1.5rem;    /* 24px */
--spacing-inset-size-xl: 2rem;      /* 32px */
--spacing-inset-size-2xl: 2.5rem;   /* 40px */
```

## Typography Variables

### Font Size
```css
--font-size-xs: 0.75rem;     /* 12px */
--font-size-sm: 0.875rem;    /* 14px */
--font-size-default: 1rem;   /* 16px */
--font-size-lg: 1.25rem;     /* 20px */
--font-size-xl: 1.5rem;      /* 24px */
--font-size-2xl: 2rem;       /* 32px */
--font-size-3xl: 2.5rem;     /* 40px */
--font-size-4xl: 3rem;       /* 48px */
--font-size-5xl: 4rem;       /* 64px */
--font-size-6xl: 5rem;       /* 80px */
--font-size-7xl: 6rem;       /* 96px */
```

### Font Weight
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
```

### Font Family
```css
--font-family-base: 'IBM Plex Sans', sans-serif;
```

### Line Height
```css
--line-height-default: 100%;
--line-height-xs: 120%;
--line-height-sm: 144%;
--line-height-md: 152%;
--line-height-lg: 184%;
--line-height-xl: 200%;
```

## Color Variables

### Brand Colors
```css
--color-brand-100: #fcecc5;  /* Lightest */
--color-brand-200: #f9dc94;
--color-brand-300: #ffc629;  /* Primary brand color */
--color-brand-400: #ebb01b;
--color-brand-500: #bc850d;
--color-brand-600: #87630c;  /* Darkest */
--color-brand-gradient: linear-gradient(135deg, #ffc629 0%, #ebb01b 100%);
```

### Neutral Colors
```css
--color-neutral-100: #ffffff;  /* White */
--color-neutral-200: #d9d9d9;
--color-neutral-300: #bfbfbf;
--color-neutral-400: #666666;
--color-neutral-500: #292929;
--color-neutral-600: #0e0e0e;  /* Black */
--color-neutral-background: #f2f2f2;
```

### Feedback Colors - Danger (Red)
```css
--color-feedback-danger-100: #ffeaea;
--color-feedback-danger-200: #f3c0be;
--color-feedback-danger-300: #c92323;
--color-feedback-danger-400: #ae1e1e;
--color-feedback-danger-500: #8e1818;
--color-feedback-danger-600: #7a130a;
```

### Feedback Colors - Positive (Green)
```css
--color-feedback-positive-100: #e1fce9;
--color-feedback-positive-200: #d0efbd;
--color-feedback-positive-300: #00b261;
--color-feedback-positive-400: #08663b;
--color-feedback-positive-500: #053821;
--color-feedback-positive-600: #273f32;
```

### Feedback Colors - Warning (Orange)
```css
--color-feedback-warning-100: #fff0de;
--color-feedback-warning-200: #ffd0ad;
--color-feedback-warning-300: #ff9040;
--color-feedback-warning-400: #db5c00;
--color-feedback-warning-500: #943e00;
--color-feedback-warning-600: #853e00;
```

### Action Colors
```css
--color-action-default: #ffc629;
--color-action-hover: #fcecc5;
```

### Contrast Colors
```css
--color-contrast-brand: #0e0e0e;
--color-contrast-white: #ffffff;
--color-contrast-black: #0e0e0e;
--color-contrast-focused: #490c97;
```

### Opacity Colors
```css
--color-opacity-default: rgba(255,255,255, 0.32);
--color-opacity-hover: rgba(252,236,197, 0.32);
--color-opacity-disabled: rgba(191,191,191, 0.32);
--color-opacity-error: rgba(255,234,234, 0.32);
```

## Border Variables

### Border Radius
```css
--border-radius-none: 0rem;
--border-radius-sm: 0.125rem;      /* 2px */
--border-radius-default: 0.25rem;  /* 4px */
--border-radius-md: 0.5rem;        /* 8px */
--border-radius-lg: 1rem;          /* 16px */
--border-radius-pill: 31.25rem;    /* 500px */
--border-radius-circular: 50%;
```

### Border Width
```css
--border-width-none: 0rem;
--border-width-xs: 0.063rem;      /* 1px */
--border-width-default: 0.1rem;   /* 1.6px */
--border-width-sm: 0.125rem;      /* 2px */
--border-width-lg: 0.25rem;       /* 4px */
--border-width-xl: 0.5rem;        /* 8px */
```

## Shadow Variables

### Box Shadow
```css
--shadow-level-1: 0rem 0.25rem 0.5rem;
--shadow-level-2: 0rem 0.5rem 1.5rem;
--shadow-level-3: 0rem 1rem 2rem;
--shadow-level-4: 0rem 1rem 3rem;
```

### Opacity Levels
```css
--opacity-level-1: 0.72;
--opacity-level-2: 0.64;
--opacity-level-3: 0.32;
--opacity-level-4: 0.16;
--opacity-level-5: 0.08;
```

## Animation Variables

### Velocity (Duration)
```css
--velocity-slow: 0.275s;
--velocity-medium: 0.225s;
--velocity-fast: 0.150s;
```

### Vibe (Timing Functions)
```css
--vibe-soft: cubic-bezier(0.48, 0, 0.48, 1);
--vibe-energetic: cubic-bezier(0.64, 0, 0.92, 1);
--vibe-calm: cubic-bezier(0.08, 0, 0.35, 1);
```

## Quick Reference Tables

### Spacing Conversion (px → rem → token)
| px    | rem      | Token                  |
|-------|----------|------------------------|
| 4px   | 0.25rem  | --spacing-size-5xs     |
| 8px   | 0.5rem   | --spacing-size-4xs     |
| 16px  | 1rem     | --spacing-size-3xs     |
| 24px  | 1.5rem   | --spacing-size-2xs     |
| 32px  | 2rem     | --spacing-size-xs      |
| 40px  | 2.5rem   | --spacing-size-sm      |
| 48px  | 3rem     | --spacing-size-md      |
| 56px  | 3.5rem   | --spacing-size-lg      |
| 64px  | 4rem     | --spacing-size-xl      |
| 80px  | 5rem     | --spacing-size-2xl     |
| 120px | 7.5rem   | --spacing-size-3xl     |
| 160px | 10rem    | --spacing-size-4xl     |
| 200px | 12.5rem  | --spacing-size-5xl     |

### Font Size Conversion
| px   | rem      | Token                  |
|------|----------|------------------------|
| 12px | 0.75rem  | --font-size-xs         |
| 14px | 0.875rem | --font-size-sm         |
| 16px | 1rem     | --font-size-default    |
| 20px | 1.25rem  | --font-size-lg         |
| 24px | 1.5rem   | --font-size-xl         |
| 32px | 2rem     | --font-size-2xl        |
| 40px | 2.5rem   | --font-size-3xl        |
| 48px | 3rem     | --font-size-4xl        |
| 64px | 4rem     | --font-size-5xl        |
| 80px | 5rem     | --font-size-6xl        |
| 96px | 6rem     | --font-size-7xl        |

### Common Color Mappings
| Hex Code | Description        | Token                           |
|----------|--------------------|---------------------------------|
| #ffc629  | Primary brand      | --color-brand-300               |
| #ffffff  | White              | --color-neutral-100             |
| #0e0e0e  | Black              | --color-neutral-600             |
| #f2f2f2  | Background         | --color-neutral-background      |
| #d9d9d9  | Light gray         | --color-neutral-200             |
| #666666  | Medium gray        | --color-neutral-400             |
| #c92323  | Danger/Error       | --color-feedback-danger-300     |
| #00b261  | Success            | --color-feedback-positive-300   |
| #ff9040  | Warning            | --color-feedback-warning-300    |

---

**Source Files:**
- `frontend/node_modules/@celebration/design-tokens/dist/scss/globals.scss`
- `frontend/node_modules/@celebration/design-tokens/dist/scss/at/light.scss`

**Last Updated:** Based on design tokens generated Mon, 12 Sep 2022
