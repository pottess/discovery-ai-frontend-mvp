# Inventário de Componentes — UI (Frontend)

> Scan deep, 2026-06-05. Não há biblioteca de componentes formal: a UI é markup em
> `index.html` com containers `[data-view]` e render imperativo em `app.js`. Estilo em
> `styles.css`. Este inventário cataloga views, modais e rotas.

## Views (containers `[data-view]`)

| View | Rota (hash) | Descrição |
|------|-------------|-----------|
| `home` | `#home` | Landing do repositório, painel assistente, cards de discoveries recentes |
| `products` | `#products` | Catálogo: busca, stats, agrupamento por Torre/Tribo, favoritos |
| `product` | `#product/:productId` | Detalhe do produto: contexto, métricas, squad, stakeholders, artefatos, discoveries |
| `audience` | `#product/:productId/audience` | Gestão de público (personas + stakeholders) |
| `persona` | `#product/:productId/personas/:personaId[/edit]` | Detalhe / edição de persona |
| `stakeholder` | `#product/:productId/stakeholders/:stakeholderId[/edit]` | Detalhe / edição de stakeholder |
| `discovery` | `#discovery/:discoveryId/:productId` | Cockpit do workflow: readiness, problema/objetivo, insights, metodologias, evidências, chat |
| `synthesis` | `#synthesis/:discoveryId/:productId` | Página de síntese (estática ou normalizada da CrewAI) |
| `interview` | `#interview/:methodId/:discoveryId/:productId` | Planejamento/recrutamento de entrevista |
| `interview-session` | `#interview-session/:participantId/:methodId/:discoveryId/:productId` | Sessão de entrevista: insights, transcrição, gravação |

## Modais / Fluxos Não-Rota

| Componente | Descrição |
|------------|-----------|
| Novo Discovery (full-page) | Fluxo de criação: Setup → Participantes → CSD → Metodologia → Criar |
| Modal de entrada de método | Adiciona texto/arquivos a um item de metodologia |
| Modal de gravação | Playback mock de entrevista |

## Estruturas Compartilhadas

- Header global (logo `assets/brand/logo_circ.png`), sidebar (rail + painel), fluxo de novo
  discovery — compartilhados entre rotas.
- Render por `innerHTML` + `escapeHTML()`; `insertAdjacentHTML` em ~9 pontos.

## Padrões de UI Observados

- **Cards** (produtos, discoveries, insights), **details/summary** (insight-card),
  **selects simulados** (dropdowns custom no fluxo de novo discovery), **stats/summary**,
  **filtros e busca** no catálogo.
- Sistema visual e responsividade inteiramente em `styles.css` (12.5k linhas).

## Lacunas

- Sem design system/componentização real → markup repetido, acoplamento HTML↔JS (R6).
- Sem passagem de acessibilidade para selects custom, modais e navegação por teclado.
- Mock e dados reais misturados nos mesmos caminhos de render.
