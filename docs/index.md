# Índice da Documentação do Projeto — Discovery AI

> Ponto de entrada primário para desenvolvimento assistido por IA e planejamento BMad.
> Gerado pelo workflow `document-project` (scan **deep**, 2026-06-05). Idioma: Português.

## Visão Geral do Projeto

- **Tipo:** multi-part (2 partes) — frontend web + backend Python
- **Linguagem primária:** JavaScript (frontend) + Python (backend)
- **Arquitetura:** SPA estático (hash routing) + servidor Node proxy/persistência + crew CrewAI

## Referência Rápida por Parte

### frontend — Frontend + Node proxy (`/`)
- **Tipo:** web · **Stack:** HTML/CSS/JS vanilla + Node 20 nativo (zero deps)
- **Entrada:** `server.js` (boot), `index.html` (UI), `app.js` (15.5k linhas)

### backend — CrewAI Discovery Crew (`/backend`)
- **Tipo:** backend · **Stack:** CrewAI 1.14.4, OpenAI/LiteLLM, jambo
- **Entrada:** `src/discovery_ai/crew.py`, `src/discovery_ai/main.py`
- **Nota:** não expõe HTTP próprio; API vem de deploy CrewAI/AMP

## Documentação Gerada

- [Visão Geral do Projeto](./project-overview.md)
- [Análise da Árvore de Código](./source-tree-analysis.md)
- [Arquitetura — Frontend](./architecture-frontend.md)
- [Arquitetura — Backend (CrewAI)](./architecture-backend.md)
- [Contratos de API](./api-contracts-frontend.md)
- [Modelo de Dados](./data-models-frontend.md)
- [Inventário de Componentes (UI)](./component-inventory-frontend.md)
- [Guia de Desenvolvimento](./development-guide.md)
- [Arquitetura de Integração](./integration-architecture.md)
- [Metadados das Partes](./project-parts.json)

## Documentação Existente (pré-scan)

- [Escopo e Roadmap do MVP](./MVP_SCOPE_AND_ROADMAP.md)
- [Status do Frontend MVP](./FRONTEND_MVP_STATUS.md)
- [Contrato do Frontend MVP](./frontend-mvp-contract.md)
- [Escopo de Agentes MVP (QA notes)](./MVP_AGENT_SCOPE_QA_NOTES.md)
- [Integrações e Roadmap Futuro](./MVP_INTEGRATIONS_AND_FUTURE_ROADMAP.md)
- [Auditoria de UI — Research Activity](./RESEARCH_ACTIVITY_UI_AUDIT.md)
- [Proposta de Refatoração do Frontend](./frontend-refactoring-proposal.md)
- [Guia de Deploy](./DEPLOYMENT_GUIDE.md) · [Deploy Vercel](./VERCEL_DEPLOYMENT.md)
- Raiz: [CLAUDE.md](../CLAUDE.md) · [AGENTS.md (legado ⚠️)](../AGENTS.md) ·
  [Auditoria Frontend](../FRONTEND_CURRENT_AUDIT.md) · [README](../README.md)

## Getting Started

```bash
npm start                                  # http://127.0.0.1:4173/index.html
# demo mock: http://127.0.0.1:4173/index.html?apiMode=mock
npm run check                              # validação de sintaxe
```
Backend: `cd backend && crewai install && crewai run` (requer `OPENAI_API_KEY`). Ver
[Guia de Desenvolvimento](./development-guide.md).

## Riscos Conhecidos (entrada p/ PRD/ADR)

Detalhe e localização em [`/CLAUDE.md` §12](../CLAUDE.md). Críticos: R1 (`/api/local/*` sem
auth), R2 (bind público com `PORT`), R3 (`gpt-5.5` inexistente no backend). Médios: R4 (proxy
sem validação), R5 (TLS bypass global), R6 (monolito), R7 (writes JSON sem lock). Menores: R8
(sem testes), R9 (contrato instável).

## Próximos Passos no BMad

1. **PRD por épico** (`bmad-prd`) — épicos candidatos em [`/CLAUDE.md` §14](../CLAUDE.md):
   contrato de output, persistência & identidade, hardening de segurança, robustez do fluxo de
   discovery, human-in-the-loop, baseline de qualidade.
2. **Arquitetura / ADRs** (`bmad-create-architecture`) — priorizar R1–R5 + contrato de output.
3. **Épicos e Stories** (`bmad-create-epics-and-stories`).

Ao criar um **PRD brownfield**, aponte o workflow para este `index.md`.

## Recap de Verificação

- **Executado:** scan deep (leitura de server.js, crew.py, tasks.yaml, configs, CI, auditorias).
  Nenhum teste automatizado rodado (projeto não tem suíte).
- **Riscos em aberto:** R1–R9 acima (não corrigidos — só documentados).
- **Próxima checagem antes de PR:** definir prioridade dos épicos com PM/PO; validar modelos do
  backend (R3) antes de qualquer kickoff real.
