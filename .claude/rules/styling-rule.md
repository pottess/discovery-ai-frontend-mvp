---
paths:
  - "src/**/*.tsx"
  - "src/**/*.ts"
  - "src/**/styles.ts"
description: Usar quando criar ou editar componentes, features ou qualquer código com estilização. Proíbe inline styles e impõe uso de styled-components com tokens CSS do @celebration/design-tokens.
---

# Styling — styled-components

Todo estilo **deve** viver em `styles.ts` usando `styled-components`. Estilos inline no JSX são proibidos.

Para a lista completa de tokens disponíveis, consulte `.claude/skills/celebration-css-var-audit/celebration-vars.md`.

---

## Regras obrigatórias

### ❌ Proibido — inline styles

```tsx
// ❌ NUNCA faça isso
<section style={{ padding: '0px 32px 32px 32px' }}>...</section>
<div style={{ color: 'red', marginTop: 8 }}>...</div>
<span style={{ fontWeight: 'bold' }}>...</span>
```

### ✅ Obrigatório — styled-components em `styles.ts`

```tsx
// styles.ts
import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 var(--spacing-size-xs) var(--spacing-size-xs) var(--spacing-size-xs);
`;

// component.tsx
import * as S from './styles';

const MyComponent = () => (
  <S.Section>...</S.Section>
);
```

---

## Estrutura do arquivo `styles.ts`

- Nome sempre `styles.ts` — sem prefixo (`button.styles.ts` é proibido)
- Fica na mesma pasta do componente
- Importado como `import * as S from './styles'` no componente

```
login-form/
├── login-form.tsx
├── styles.ts      ✅ correto
└── index.ts

login-form/
├── login-form.tsx
├── login-form.styles.ts   ❌ proibido
└── index.ts
```

---

## CSS Variables do design system

Use **sempre** as CSS variables de `@celebration/design-tokens`. Valores hardcoded são permitidos apenas quando não há token equivalente.

```ts
// ✅ Com token CSS variable
export const Card = styled.div`
  background: var(--color-neutral-100);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-inset-size-sm);
`;

// ✅ Padding com token — 32px = --spacing-size-xs
export const Section = styled.section`
  padding: 0 var(--spacing-size-xs) var(--spacing-size-xs) var(--spacing-size-xs);
`;

// ⚠️ Aceitável apenas se não existe token equivalente
export const CustomElement = styled.div`
  height: 37px; /* sem token para esse valor específico */
`;
```

### Conversão rápida (px → token)

| px   | Token CSS variable              |
|------|---------------------------------|
| 4px  | `var(--spacing-size-5xs)`       |
| 8px  | `var(--spacing-size-4xs)`       |
| 16px | `var(--spacing-size-3xs)`       |
| 24px | `var(--spacing-size-2xs)`       |
| 32px | `var(--spacing-size-xs)`        |
| 40px | `var(--spacing-size-sm)`        |
| 48px | `var(--spacing-size-md)`        |

### Padding inset (quando é padding simétrico)

| px   | Token CSS variable              |
|------|---------------------------------|
| 4px  | `var(--spacing-inset-size-2xs)` |
| 8px  | `var(--spacing-inset-size-xs)`  |
| 16px | `var(--spacing-inset-size-sm)`  |
| 24px | `var(--spacing-inset-size-lg)`  |
| 32px | `var(--spacing-inset-size-xl)`  |
| 40px | `var(--spacing-inset-size-2xl)` |

### Cores frequentes

| Valor        | Token CSS variable                        |
|--------------|-------------------------------------------|
| `#ffffff`    | `var(--color-neutral-100)`                |
| `#f2f2f2`    | `var(--color-neutral-background)`         |
| `#d9d9d9`    | `var(--color-neutral-200)`                |
| `#666666`    | `var(--color-neutral-400)`                |
| `#0e0e0e`    | `var(--color-neutral-600)`                |
| `#ffc629`    | `var(--color-brand-300)`                  |
| `#c92323`    | `var(--color-feedback-danger-300)`        |
| `#00b261`    | `var(--color-feedback-positive-300)`      |
| `#ff9040`    | `var(--color-feedback-warning-300)`       |

---

## Estilização condicional

Use props tipadas no styled-component — nunca ternário inline no JSX.

```tsx
// ❌ Proibido — ternário inline
<div style={{ color: isActive ? '#ffc629' : '#666666' }}>...</div>

// ✅ Correto — prop tipada no styled-component
// styles.ts
export const Label = styled.span<{ $active: boolean }>`
  color: ${({ $active }) => $active
    ? 'var(--color-brand-300)'
    : 'var(--color-neutral-400)'};
`;

// component.tsx
<S.Label $active={isActive}>...</S.Label>
```

> Use o prefixo `$` em props de styled-components para evitar que sejam passadas para o DOM (convenção do styled-components v5+).

---

## `className` vs styled-components

`className` é permitido **apenas** para integrar componentes externos que exigem essa prop (ex: `@celebration/react`, `@cora/components`). Nunca use `className` para aplicar estilos próprios — crie um styled-component.

```tsx
// ✅ Aceitável — className exigido por componente externo
<ClbTable columns={cols} columnStyleClasses="action-column" />

// ❌ Proibido — className para estilo próprio
<div className="my-section">...</div>
```

---

## Checklist

- [ ] Nenhum `style={{ ... }}` no JSX
- [ ] Todo estilo em `styles.ts` usando `styled-components`
- [ ] Arquivo de estilos nomeado `styles.ts` (nunca `*.styles.ts`)
- [ ] Importado como `import * as S from './styles'`
- [ ] CSS variables de `@celebration/design-tokens` usadas onde existem equivalentes
- [ ] Valores hardcoded justificados (sem token equivalente)
- [ ] Props condicionais com prefixo `$` (ex: `$active`, `$variant`)
- [ ] `className` apenas para integração com componentes externos
