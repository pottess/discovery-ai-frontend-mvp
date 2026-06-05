# Visão Geral do Projeto — Discovery AI

> Documentação brownfield gerada pelo workflow BMad `document-project` (scan deep, 2026-06-05).
> Idioma: Português (a pedido). Fonte de verdade complementar: [`/CLAUDE.md`](../CLAUDE.md).

## Propósito

**Discovery AI** é uma plataforma de discovery de produto dirigida por agentes de IA. O
usuário (hoje designer / PM) abre um produto no repositório, inicia um "Discovery", informa
problema / objetivo / CSD e metodologia, e uma crew de agentes CrewAI executa um workflow
longo de discovery-até-entrega com gates de aprovação humana. O frontend é a camada de
interação; o backend CrewAI é a inteligência de discovery.

**Origem:** protótipo de alta fidelidade construído pelo **time de design** (não engenharia
frontend). Por isso o monolito em arquivo único e a ausência de build. Trate o código como
**spec de comportamento validada**, não arquitetura de produção.

## Resumo Executivo

| Aspecto | Estado |
|---------|--------|
| Tipo de repositório | Multi-part (frontend web + backend Python) |
| Maturidade | Protótipo / MVP em construção |
| Deploy | Estático (Vercel, modo mock) ou Node server (proxy + persistência JSON) |
| Persistência | Arquivos JSON locais (`backend/data/`) + `localStorage` |
| Backend de agentes | CrewAI, opcional; sem ele roda em modo `mock` |
| Testes | Nenhum além de `node --check` (sintaxe) |
| Identidade de usuário | Perfil hardcoded (`perfil-ambev-demo`) |

## Stack (resumo)

| Camada | Tecnologia | Versão | Justificativa |
|--------|-----------|--------|---------------|
| Frontend | HTML + CSS + JS vanilla | — | Protótipo de design; zero build, zero deps |
| Servidor | Node.js `http`/`fs`/`crypto`/`path` nativos | ≥ 20 | Proxy seguro + servidor estático + DB JSON, sem deps |
| Backend IA | CrewAI + LiteLLM | `crewai==1.14.4` | Orquestração multi-agente de discovery |
| LLM | OpenAI (via LiteLLM) | `gpt-4o` (manager), `gpt-5.5` (especialistas ⚠️) | ver risco R3 no CLAUDE.md |
| Schema | `jambo` (`SchemaConverter`) | — | Converte JSON Schema → Pydantic para `output_json` |

## Estrutura de Repositório

Multi-part, dois componentes num único repo:

1. **frontend** (raiz) — `index.html`, `styles.css`, `app.js` (cliente) + `server.js`
   (servidor Node: estático + proxy + DB JSON + mock adapter). Tipo: `web`.
2. **backend** (`backend/`) — crew CrewAI em Python (`src/discovery_ai/`). Tipo: `backend`.
   **Não expõe HTTP próprio** — a API `/kickoff` + `/status` vem de um deploy CrewAI/AMP; o
   `server.js` apenas faz proxy.

## Links para Documentação Detalhada

- [Análise da Árvore de Código](./source-tree-analysis.md)
- [Arquitetura — Frontend](./architecture-frontend.md)
- [Arquitetura — Backend (CrewAI)](./architecture-backend.md)
- [Contratos de API](./api-contracts-frontend.md)
- [Modelo de Dados](./data-models-frontend.md)
- [Inventário de Componentes (UI)](./component-inventory-frontend.md)
- [Guia de Desenvolvimento](./development-guide.md)
- [Arquitetura de Integração](./integration-architecture.md)
- Existentes: [Escopo MVP](./MVP_SCOPE_AND_ROADMAP.md) · [Status Frontend](./FRONTEND_MVP_STATUS.md) ·
  [Contrato MVP](./frontend-mvp-contract.md) · [Guia de Deploy](./DEPLOYMENT_GUIDE.md) ·
  [Auditoria Frontend](../FRONTEND_CURRENT_AUDIT.md)

## Riscos-Chave (entrada para PRD/ADR)

Detalhe completo em [`/CLAUDE.md` §12](../CLAUDE.md). Resumo: `/api/local/*` CRUD sem auth
(R1), bind `0.0.0.0` com `PORT` (R2), modelo `gpt-5.5` inexistente no backend (R3), proxy sem
validação (R4), TLS bypass global (R5), monolito `app.js` (R6), writes JSON sem lock (R7),
ausência de testes (R8), contrato de output instável (R9).
