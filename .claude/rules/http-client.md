---
paths:
  - "src/services/http/**"
  - "src/utils/http/**"
description: Usar quando criar ou editar a instância HTTP, interceptors ou o utilitário de mensagens de erro.
---

# Infra HTTP

A infraestrutura de HTTP é dividida em duas camadas:

- **`services/http/`** — instância `ky` configurada com token, retry e interceptors. É **infraestrutura**, pertence a `services/`.
- **`utils/http/`** — função pura que traduz status HTTP em par `{ title, description }` (toast). É **utilitário**, pertence a `utils/`.

## Estrutura

```
src/
├── services/
│   └── http/
│       ├── http.ts              # baseHttp + createHttpClient
│       ├── interceptors.ts      # setErrorInterceptor + getErrorInterceptor
│       └── index.ts             # barrel
├── utils/
│   └── http/
│       ├── __tests__/
│       │   └── get-http-error-toast.test.ts
│       ├── get-http-error-toast.ts
│       └── index.ts             # barrel
```

---

## Instância — `src/services/http/http.ts`

A aplicação pode se comunicar com diferentes API paths. O `baseHttp` centraliza retry e interceptors uma única vez. O `createHttpClient` cria instâncias derivadas via `ky.extend` para cada path.

- ❌ NUNCA instancie `ky` diretamente nas features
- ❌ NUNCA use `ky.create` fora deste arquivo
- ❌ NUNCA coloque lógica HTTP configurada em `libs/` (lá é só re-export neutro)

Notas sobre o `fetch` customizado:
- `addApimSubscriptionKey` faz patch do `globalThis.fetch` e só copia headers de `init.headers`, ignorando `Request.headers`. Copiamos explicitamente para garantir que o patch preserve todos os headers.

Notas sobre o `beforeError`:
- Na v2 do `ky`, `beforeError` recebe um state object `{ request, options, error, retryCount }`
- `error.data` já vem pré-populado com o body parsed — não chamar `response.clone().json()`
- `isHTTPError()` filtra erros de rede (NetworkError, TimeoutError) que não têm response
- Suporte a opção `context.suppressGlobalError = true` para pular o toast global em chamadas específicas

```ts
import ky, { isHTTPError } from 'ky';

import { getHttpErrorToast } from '~/utils/http';

import { getErrorInterceptor } from './interceptors';

export const baseHttp = ky.create({
  timeout: 20_000,
  retry: 0,

  fetch: (input, init) => {
    if (input instanceof Request) {
      const headers = new Headers(input.headers);
      return globalThis.fetch(input, { ...init, headers });
    }
    return globalThis.fetch(input, init);
  },

  hooks: {
    beforeError: [
      ({ error, options }) => {
        if (isHTTPError(error)) {
          const data = error.data as { message?: string } | undefined;
          error.message =
            data?.message ??
            (options.context.errorMessage as string | undefined) ??
            getHttpErrorToast(error.response.status).description;
          if (!options.context.suppressGlobalError) {
            getErrorInterceptor()?.(error);
          }
        }
        return error;
      },
    ],
  },
});

export function createHttpClient(baseUrl: string) {
  const url = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return baseHttp.extend({ baseUrl: url });
}
```

---

## Interceptor — `src/services/http/interceptors.ts`

Armazena o callback global de erro. Setado uma vez pelo `AppContent` (ver abaixo); lido pelo `beforeError` do `baseHttp`.

```ts
import { HTTPError } from 'ky';

let onError: ((error: HTTPError) => void) | null = null;

export function setErrorInterceptor(fn: (error: HTTPError) => void) {
  onError = fn;
}

export function getErrorInterceptor() {
  return onError;
}
```

---

## Registro do interceptor — `src/app.tsx`

Registrado uma única vez dentro do `AppContent`, componente interno ao `ToastContextProvider`. Responsável pelo toast global de erros (401, 403, 500, etc.). Todas as instâncias criadas via `createHttpClient` herdam esse interceptor.

`AppContent` existe para permitir o uso do hook `useToast` dentro do contexto do provider.

```tsx
import { useEffect } from 'react';
import { HTTPError } from 'ky';

import { ToastContextProvider, useToast } from '~/components/external';
import { setErrorInterceptor } from '~/services/http';
import { getHttpErrorToast } from '~/utils/http';

const AppContent = () => {
  const { openToast } = useToast();

  useEffect(() => {
    setErrorInterceptor((error: HTTPError) => {
      const isGetRequest = error.request.method === 'GET';
      const isLoadError =
        error.response.status === 400 || error.response.status === 404;

      const toast =
        isGetRequest && isLoadError
          ? {
              title: 'Algo deu errado ao carregar as informações',
              description:
                'Estamos trabalhando nisso. Tente novamente em instantes.',
            }
          : {
              title: getHttpErrorToast(error.response.status).title,
              description: error.message,
            };

      openToast({ ...toast, type: 'negative' });
    });
  }, [openToast]);

  return <AppRouter />;
};

const App = () => (
  <ToastContextProvider>
    <AppContent />
  </ToastContextProvider>
);
```

Mutations que precisam de tratamento específico usam `onError` normalmente — o interceptor global não interfere. Para pular o toast global numa chamada específica, passe `context: { suppressGlobalError: true }` nas opções do `ky`.

---

## `getHttpErrorToast` — `src/utils/http/get-http-error-toast.ts`

Função pura que traduz status HTTP em par `{ title, description }` amigável (formato esperado pelo toast). Pertence a `utils/` porque é reutilizável e sem efeitos colaterais.

Usado pelo `beforeError` do `ky` (extrai `description`) e diretamente pelo `AppContent` (extrai `title`). Mutations podem chamar diretamente quando precisarem de mensagem customizada.

```ts
export type HttpErrorToast = {
  title: string;
  description: string;
};

export function getHttpErrorToast(
  status: number,
  fallback?: string,
): HttpErrorToast {
  const toasts: Record<number, HttpErrorToast> = {
    400: {
      title: 'Requisição inválida',
      description: fallback ?? 'Verifique os dados e tente novamente.',
    },
    401: {
      title: 'Sua sessão expirou',
      description: 'Faça login novamente para continuar.',
    },
    403: {
      title: 'Ação não permitida',
      description: 'Seu usuário não tem permissão para continuar.',
    },
    404: {
      title: 'Recurso não encontrado',
      description: fallback ?? 'O item solicitado não foi encontrado.',
    },
    408: {
      title: 'A solicitação demorou mais que o esperado',
      description: 'Tente novamente em instantes.',
    },
    422: {
      title: 'Não foi possível concluir sua solicitação',
      description:
        fallback ??
        'Alguns dados enviados são inválidos. Revise e tente novamente.',
    },
    429: {
      title: 'Muitas requisições realizadas',
      description: 'Aguarde alguns instantes antes de tentar novamente.',
    },
    500: {
      title: 'Erro inesperado',
      description: 'Tivemos um problema ao processar sua solicitação.',
    },
    502: {
      title: 'Serviço indisponível no momento',
      description: 'Estamos com instabilidade. Tente novamente mais tarde.',
    },
    503: {
      title: 'Serviço indisponível no momento',
      description: 'Tente novamente mais tarde.',
    },
  };

  return (
    toasts[status] ?? {
      title: 'Erro desconhecido',
      description: fallback ?? 'Ocorreu um erro inesperado.',
    }
  );
}
```

---

## Checklist

- [ ] HTTP client configurado está em `services/http/`, NÃO em `libs/`
- [ ] `getHttpErrorToast` está em `utils/http/` como função pura
- [ ] Nenhuma feature instancia `ky` diretamente
- [ ] Features importam via `createHttpClient` de `~/services/http`
- [ ] Interceptor global registrado via `setErrorInterceptor` dentro do `AppContent` (filho do `ToastContextProvider`)
- [ ] Imports usam alias `~/` (sub-paths do alias `~/*`), ex: `~/services/http`, `~/utils/http`
- [ ] Arquivos em kebab-case (`get-http-error-toast.ts`)
- [ ] Testes em `__tests__/` ao lado dos arquivos
- [ ] Chamadas que não devem disparar toast global usam `context: { suppressGlobalError: true }`
