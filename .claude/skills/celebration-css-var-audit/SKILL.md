---
name: celebration-css-var-audit
description: Audit styled-components for hardcoded CSS values that should use @celebration/design-tokens. Use when refactoring styles or checking design system compliance.
allowed-tools: Glob, Read, Edit, TodoWrite
---

# Celebration CSS Variable Audit

Identify hardcoded CSS values in styled-components that should use design tokens from `@celebration/design-tokens`.

## Audit Checklist

1. Invalid CSS syntax (e.g., `border: 30px;`)
2. Non-existent CSS variables
3. Hardcoded spacing values
4. Hardcoded colors (hex/rgba)
5. Hardcoded font properties
6. Hardcoded animation durations

## Priority Levels

**CRITICAL** - Invalid CSS, non-existent variables
**HIGH** - Exact token matches (16px → --spacing-size-3xs)
**MEDIUM** - Approximate matches (18px → closest token)
**LOW** - One-off values to convert to rem

## Exclusions (Do Not Report)

- Zero values (0, 0px, 0rem)
- Layout percentages (width: 100%)
- Transform values (translateX, rotate)
- Flex/grid values (flex: 1)
- z-index values

## Instructions

1. Use Glob to find all `styles.ts` files in frontend/src
2. Read each file using Read tool
3. Identify hardcoded values matching patterns below
4. Match values to design token reference
5. Categorize by priority level
6. Generate report with file:line references
7. If user requests fixes, use Edit tool starting with critical issues

## Detection Patterns

**Spacing:** `(margin|padding|gap|width|height):\s*(\d+(?:\.\d+)?)(px|rem)`
**Font size:** `font-size:\s*(\d+(?:\.\d+)?)(px|rem)`
**Font weight:** `font-weight:\s*(\d{3})`
**Colors:** `(color|background):\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\))`
**Border radius:** `border-radius:\s*(\d+(?:\.\d+)?)(px|rem)`
**Transitions:** `transition:\s*[^;]*\s+(\d+(?:\.\d+)?s)`

## Report Format

```
# CSS Variable Audit Report

## Summary
Files scanned: X | Issues: Y | Critical: Z | High: A | Medium: B | Low: C

## CRITICAL (Fix Immediately)
File: path/to/styles.ts:42
Current:  border: 30px;
Suggested: Remove (invalid CSS)
Reason: Border requires style and color

## HIGH PRIORITY (Exact Matches)
File: path/to/styles.ts:15
Current:  padding: 16px;
Suggested: padding: var(--spacing-size-3xs);
Reason: Exact token match

## Files With No Issues
- Clean files list
```

## Design Token Reference

For complete list of all available CSS variables, see [celebration-vars.md](celebration-vars.md).

**Quick reference - most common tokens:**
- Spacing: 4px=`--spacing-size-5xs`, 8px=`--spacing-size-4xs`, 16px=`--spacing-size-3xs`, 24px=`--spacing-size-2xs`, 32px=`--spacing-size-xs`
- Fonts: 12px=`--font-size-xs`, 14px=`--font-size-sm`, 16px=`--font-size-default`, 20px=`--font-size-lg`
- Weights: 400=`--font-weight-regular`, 500=`--font-weight-medium`, 600=`--font-weight-semibold`
- Colors: #ffc629=`--color-brand-300`, #ffffff=`--color-neutral-100`, #0e0e0e=`--color-neutral-600`
