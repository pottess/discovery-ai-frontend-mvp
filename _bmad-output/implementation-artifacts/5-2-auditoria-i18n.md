# Story 5.2: Auditoria de cobertura de i18n

Status: ready-for-dev

## Story

Como time,
Quero garantir que não há strings hardcoded,
Para que os 3 idiomas fiquem completos.

## Acceptance Criteria

1. **Dado** todas as features implementadas,
   **Quando** faço varredura de strings visíveis na UI,
   **Então** toda string tem chave nos catálogos pt/es/en — nenhuma hardcoded.

2. **Dado** os catálogos es/en com placeholders PT (Open Q6),
   **Quando** o dono de conteúdo tiver definido traduções,
   **Então** as chaves são atualizadas — esta story documenta o gap e configura detecção futura.

3. **Dado** a configuração de lint/CI,
   **Então** chaves faltantes são detectáveis: ou via regra de lint (ex.: eslint-plugin-i18next)
   ou via fallback visível configurado em `i18next` (`missingKeyHandler` logando no dev).

## Tasks / Subtasks

- [ ] **Task 1 — Varredura de strings hardcoded (AC: 1)**
  - [ ] Rodar grep por strings em PT nas features:
    ```
    grep -r '"[A-Z][a-záêãç]' src/features --include="*.tsx"
    grep -r "'[A-Z][a-záêãç]' src/features --include="*.tsx"
    ```
  - [ ] Para cada string encontrada: mover para catálogo ou confirmar que é dado dinâmico.

- [ ] **Task 2 — Verificar completude dos catálogos (AC: 2)**
  - [ ] Comparar chaves entre `pt/`, `es/`, `en/` — detectar chaves faltantes.
  - [ ] Ferramenta: `i18next-scanner` ou script simples de diff de chaves JSON.
  - [ ] Documentar chaves es/en que ainda são placeholder PT (candidatos para Open Q6).

- [ ] **Task 3 — Configurar detecção futura (AC: 3)**
  - [ ] Ativar `missingKeyHandler` no i18next para logar no dev:
    ```ts
    missingKeyHandler: (lngs, ns, key) => {
      if (import.meta.env.DEV) console.warn(`i18n missing: [${ns}] ${key}`)
    }
    ```
  - [ ] Opcional: `eslint-plugin-i18next` para detectar strings não traduzidas em lint.

## Dev Notes

### Open Q6 — dono de conteúdo es/en

Enquanto não definido, es/en ficam com valor PT. O `missingKeyHandler` e a comparação de catálogos
tornam o gap visível sem bloquear a release.

### Ferramentas úteis

- `i18next-scanner`: varre código e gera lista de chaves usadas vs presentes.
- `i18next-parser`: alternativa que gera catálogos automaticamente.

### References

- [Source: epics.md Epic 5 — Story 5.2]
- [Source: prd.md §4.1 FR-5; NFR-3]
- [Source: epics.md Open Q6]

## Dev Agent Record

### Completion Notes List

- Strings hardcoded encontradas e corrigidas: (N encontradas, N corrigidas)
- Chaves faltantes es/en documentadas: (sim/não)
- missingKeyHandler ativo: (sim/não)

### File List

- `src/i18n/index.ts` (update — missingKeyHandler)
- `src/i18n/locales/**/*.json` (updates)
