Substitua o conteúdo de AGENTS.md pelo conteúdo abaixo.

Não altere outros arquivos.
Não rode Crew.
Não execute /kickoff.
Não faça commit.

---

# AGENTS.md

## Visão Geral

Discovery AI é um produto MVP para conduzir workflows de Product Discovery com apoio de agentes CrewAI.

O projeto não deve mais ser tratado como apenas um frontend estático. A arquitetura atual possui:

- Frontend em HTML/CSS/JS puro;
- Servidor Node local (`server.js`) para servir o app, expor APIs locais e fazer proxy;
- Backend Python/FastAPI com CrewAI em `backend/src/discovery_ai/api.py`;
- Agentes e tasks em `backend/src/discovery_ai/config/agents.yaml` e `tasks.yaml`;
- Persistência local temporária em JSON;
- Próxima evolução planejada: Postgres/Supabase para uso multiusuário dentro da empresa.

O objetivo do MVP é validar o workflow agent-driven de discovery, com gates humanos, uploads de evidência, metodologia recomendada, roadmap e síntese incremental.

---

## Arquitetura Atual

```text
Frontend
  ↓
server.js
  ↓
FastAPI CrewAI local
  ↓
CrewAI agents/tasks
  ↓
OpenAI
```

Principais arquivos:

- `index.html`: estrutura visual principal.
- `styles.css`: estilos do app.
- `app.js`: navegação, estado de UI, full page flow de nova discovery, edição/exclusão e renderização.
- `server.js`: servidor local, proxy, API local JSON e upload inicial de arquivos.
- `backend/src/discovery_ai/api.py`: API FastAPI local da CrewAI.
- `backend/src/discovery_ai/crew.py`: definição das crews, agentes e LLMs.
- `backend/src/discovery_ai/config/agents.yaml`: regras e papéis dos agentes.
- `backend/src/discovery_ai/config/tasks.yaml`: tarefas, outputs esperados e contratos de cada fase.
- `backend/data/`: persistência local temporária.
- `backend/data/uploads/`: uploads locais para testes com FileReadTool.

---

## Como Rodar Localmente

Terminal 1 — Front/Node:

```bash
npm run dev
```

ou:

```bash
node server.js
```

Terminal 2 — Backend Python/CrewAI:

```bash
cd backend
uv run serve_api
```

URLs principais:

```text
Frontend:
http://127.0.0.1:4173/index.html

FastAPI:
http://127.0.0.1:8000

Swagger:
http://127.0.0.1:8000/docs

Health:
http://127.0.0.1:8000/health
```

---

## Variáveis de Ambiente

Arquivo local:

```text
.env
```

Base:

```env
DISCOVERY_FRONTEND_API_MODE=mvp_backend
DISCOVERY_AI_API_BASE_URL=http://127.0.0.1:8000

OPENAI_API_KEY=
DISCOVERY_AI_LLM_MODEL=openai/gpt-4o

SERPER_API_KEY=
```

Observações:

- `OPENAI_API_KEY` é obrigatória para rodar agentes reais.
- `SERPER_API_KEY` é opcional por enquanto; será necessária para desk research com busca externa.
- `DISCOVERY_AI_LLM_MODEL` deve ser um modelo textual válido.
- Modelos de imagem não devem ser usados em chamadas textuais da Crew.

Modelos bloqueados no backend:

```text
gpt-image
dall-e
image
```

---

## Modos de Operação

### Mock

Usado para testar o front sem chamar agentes reais.

```env
DISCOVERY_FRONTEND_API_MODE=mock
```

### MVP Backend

Usado para chamar a API FastAPI local e executar a CrewAI real.

```env
DISCOVERY_FRONTEND_API_MODE=mvp_backend
DISCOVERY_AI_API_BASE_URL=http://127.0.0.1:8000
```

O arquivo `config.vercel.js` pode forçar modo mock em deploy estático. Em ambiente Node local, `server.js` deve servir esse arquivo dinamicamente com base no `.env`.

---

## Regras de Arquitetura

Sempre separar regras em três camadas:

### Product Rules

Vivem no produto/código de workflow.

Exemplos:

- O kickoff inicial não executa a discovery inteira.
- A discovery é incremental.
- O gate real de execução é o upload de evidência.
- Cada upload gera uma análise isolada.
- Cada análise isolada alimenta a síntese geral.
- Usuário pode editar ou excluir discoveries criadas.
- Dados locais não devem ser perdidos entre reloads.

### Orchestrator Rules

Vivem na API e na máquina de estados.

Exemplos:

- Qual fase pode rodar.
- Qual endpoint avança o workflow.
- Qual crew sequencial é executada em cada fase.
- Quais agentes estão permitidos ou bloqueados.
- Quando aguardar ação humana.
- Quando reprocessar síntese.

No MVP, o orquestrador principal é a API + máquina de estados, não um manager agent livre.

### Agent Rules

Vivem em `agents.yaml` e `tasks.yaml`.

Exemplos:

- Como o agente de metodologia decide métodos.
- Como o agente de entrevista interpreta transcrições.
- Como o agente de survey interpreta CSV/Excel.
- Como o agente de síntese consolida evidências.
- Como o agente de QA avalia qualidade de insights.

Não colocar regras especializadas de análise no front.

---

## Workflow Real do MVP

### Fase 1 — Discovery Framework

Executada no `/kickoff`.

Objetivo:

- entender problema;
- avaliar D.O.R.;
- avaliar readiness;
- recomendar metodologia;
- recomendar frameworks;
- priorizar escopo;
- parar.

Tasks:

- `build_d_o_r_framework`
- `validate_discovery_readiness`
- `define_discovery_methodology`
- `prioritize_discovery_scope`

Estado esperado após o kickoff:

```text
RESEARCH_APPROVAL_PENDING
```

Não executar nessa fase:

- planejamento detalhado;
- participantes;
- operação;
- roteiro;
- desk research;
- processamento de evidências;
- síntese;
- oportunidades;
- solução;
- protótipo;
- validação;
- handoff.

---

### Fase 2 — Planejamento

Ainda em evolução.

Objetivo:

- transformar metodologia em plano acionável;
- gerar roadmap;
- ordenar frameworks;
- estimar tempo/esforço;
- gerar roteiros/protocolos quando necessário.

Tasks previstas:

- `create_research_execution_plan`
- `create_research_execution_protocols`

Fora do MVP inicial:

- `participant_strategy_specialist`
- `research_operations_strategist`

Motivo:

O MVP não possui base de usuários nem integrações de recrutamento. Participantes serão inseridos manualmente.

---

### Fase 3 — Execução pelo Usuário

O usuário executa os métodos fora da ferramenta.

Exemplos:

- entrevistas;
- teste de usabilidade;
- survey;
- desk research;
- teste de conceito;
- workshop;
- análise heurística.

O sistema não executa automaticamente esses métodos.

---

### Fase 4 — Upload e Processamento Incremental

O gate real é o upload de evidência.

Cada upload deve conter:

- `frameworkId`;
- tipo de evidência;
- arquivo ou texto;
- metadados.

Fluxo desejado:

```text
upload de evidência
  ↓
router identifica framework/tipo
  ↓
processor especializado analisa
  ↓
resultado isolado do framework
  ↓
síntese geral é atualizada
  ↓
insights são revisados
```

Arquitetura futura:

- `evidence_router_agent`
- `interview_evidence_processor`
- `usability_test_evidence_processor`
- `survey_results_processor`
- `desk_research_evidence_processor`
- `workshop_synthesis_processor`
- `concept_test_processor`
- `heuristic_analysis_processor`

Hoje o processamento ainda usa estrutura provisória.

---

## Metodologia e Frameworks

O agente `discovery_methodology_strategist` deve retornar sempre métodos estruturados.

Contrato esperado:

```json
{
  "recommended_methodology": "exploratory | evaluative | validation | mixed",
  "methodology_label": "string",
  "methodology_rationale": "string",
  "confidence_score": 0,
  "recommended_methods": [
    {
      "method_id": "heuristic_analysis | prototype | usability_test | concept_test | interview | survey | desk_research | workshop",
      "method_name": "string",
      "why_recommended": "string",
      "when_to_use": "string",
      "expected_evidence": "string",
      "estimated_effort": "low | medium | high",
      "sequence_order": 1
    }
  ],
  "not_recommended_methods": [
    {
      "method_id": "string",
      "reason": "string"
    }
  ],
  "priority_questions": [],
  "scope_statement": "string",
  "out_of_scope": [],
  "workflow_recommendation": "RESEARCH_APPROVAL_PENDING"
}
```

Regras importantes:

- Problema de tela, fluxo ou interface com clareza razoável deve priorizar:
  - análise heurística;
  - prototipação;
  - teste de usabilidade;
  - teste de conceito.
- Entrevista em profundidade só deve ser recomendada quando houver incerteza real sobre público, motivação ou necessidade.
- Desk research não é fallback genérico; deve ser usada quando houver benchmark, contexto externo, mercado, regulação, links ou materiais relevantes.

---

## Arquivos e FileReadTool

A D.O.R. deve considerar:

- objetivo;
- problema;
- CSD;
- conhecimento prévio;
- arquivos enviados pelo usuário.

Arquivos são complementares, não obrigatórios.

Fluxo atual:

```text
front
  ↓
/api/discovery/upload-files
  ↓
backend/data/uploads/<discoveryId>/
  ↓
/api/discovery/kickoff com files[]
  ↓
api.py valida paths
  ↓
inputs["file"] e inputs["files"]
  ↓
FileReadTool
```

Formatos aceitos inicialmente:

- `.txt`
- `.csv`
- `.json`
- `.md`

PDF e DOCX ainda não são suportados diretamente. Devem ser convertidos para texto em etapa futura.

---

## Persistência Atual

Persistência local temporária:

```text
backend/data/*.json
```

Principais coleções:

- `created-discoveries.json`
- `product-audience-by-product.json`
- `product-favorites-by-user.json`
- `favorite-discovery-ids.json`
- `research-activity-users.json`
- `local-mock-runs.json`
- `products.json`
- `discoveries.json`
- `real-runs.json`

Uploads locais:

```text
backend/data/uploads/
```

A persistência local é suficiente para desenvolvimento, mas não é adequada para uso corporativo multiusuário.

---

## Próxima Evolução: Postgres/Supabase

Para publicar para pessoas da empresa testarem, migrar dados principais para Postgres.

Prioridade de migração:

1. `products`
2. `product_team`
3. `personas`
4. `stakeholders`
5. `discoveries`
6. `discovery_runs`
7. `evidence_uploads`
8. `framework_results`
9. `synthesis`
10. `insights`

JSON local deve virar fallback/dev mode, não fonte de verdade em produção.

Variáveis futuras:

```env
DATABASE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

Não publicar MVP corporativo dependendo apenas de `backend/data/*.json`.

---

## Edição e Exclusão

Discoveries criadas pelo usuário podem ser:

- editadas;
- excluídas.

Editar significa:

```text
reabrir intake
preservar dados preenchidos
preservar arquivos e links
resetar D.O.R./metodologia/run
executar novo kickoff
atualizar a mesma discovery
```

Excluir significa:

```text
remover da UI
remover da persistência
remover runs associadas quando possível
```

Discoveries seed não devem ser editadas/excluídas.

---

## Cuidados de Implementação

- Não rodar Crew real sem necessidade; custa tokens e tempo.
- Não executar `/kickoff` em auditorias.
- Não fazer commit sem revisar `git status`.
- Não commitar `.env`.
- Não commitar dados locais sensíveis ou uploads.
- Não commitar arquivos grandes em `backend/data/uploads`.
- Não transformar regras de produto em prompt de agente.
- Não colocar regras específicas de análise no front.
- Não reintroduzir frontend em modo demo quando `.env` estiver em `mvp_backend`.

Antes de mudar JavaScript:

```bash
npm run check
```

Antes de mudar Python:

```bash
python3 -m py_compile backend/src/discovery_ai/api.py backend/src/discovery_ai/crew.py
```

Antes de testar backend:

```bash
curl http://127.0.0.1:8000/health
```

---

## Estado Atual do Produto

O MVP já valida:

- criação de discovery;
- edição/exclusão;
- kickoff real com CrewAI;
- D.O.R.;
- readiness;
- metodologia;
- escopo;
- roadmap;
- upload inicial de arquivos;
- renderização de metodologia e frameworks;
- persistência local temporária.

Ainda em evolução:

- Postgres/Supabase;
- upload robusto com PDF/DOCX;
- processadores especializados por framework;
- síntese incremental por upload;
- Fase 2 real de planejamento;
- endpoints de transição de workflow;
- autenticação corporativa;
- publicação para usuários da empresa.