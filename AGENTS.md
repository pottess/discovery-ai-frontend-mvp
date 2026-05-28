# AGENTS.md

## Visão Geral

Este projeto é um protótipo estático de frontend para um repositório de discoveries, com um pequeno proxy Node local para integrar com a CrewAI sem expor o bearer token no navegador.

## Correção de Arquitetura do MVP

Agentes estão no MVP. O processamento CrewAI e a inteligência de discovery são parte central do Discovery AI, enquanto o frontend permanece como camada de interação do workflow.

O assistente conversacional de pesquisa é futuro. Integrações externas e conectores de automação são futuro. O workflow de agentes, os estados de processamento, os contratos de output, os outputs estruturados e as aprovações humanas continuam no MVP.

The MVP validates the agent-driven discovery workflow without depending on enterprise integrations.

Integrações externas podem ser simuladas no MVP usando:

- input manual;
- upload de arquivos;
- dados mockados;
- fixture outputs;
- `localStorage`;
- respostas mockadas do backend.

Ficam fora do MVP: Teams, Outlook, Tech Metrics, DataDog, bases de produto, plataformas de analytics, repositórios de pesquisa, Jira/Linear, notificações Slack/Teams, SSO/permissões, dashboards avançados, assistente conversacional e recuperação automatizada de dados externos.

Arquivos principais:

- `index.html`: estrutura das telas e modais.
- `styles.css`: estilos do app, incluindo o Full Page Flow de novo discovery.
- `app.js`: navegação por hash, estados mockados, fluxo de novo discovery e polling da CrewAI.
- `server.js`: servidor estático e proxy para `/kickoff` e `/status/{kickoff_id}`.

## Como Rodar

Use Node.js sem dependências externas:

```bash
node server.js
```

ou:

```bash
npm start
```

Por padrão o servidor tenta abrir em `http://localhost:4173/index.html`. Se a porta estiver ocupada, ele tenta a próxima porta automaticamente, exceto quando `PORT` estiver definido.

## Variáveis de Ambiente

Crie um `.env` local baseado em `.env.example`.

Obrigatórias para integração CrewAI:

```env
CREWAI_API_KEY=
CREWAI_API_BASE_URL=
```

Polling configurável:

```env
CREWAI_POLL_INTERVAL_MS=15000
CREWAI_POLL_TIMEOUT_MS=600000
```

Use apenas em desenvolvimento local se a rede inserir certificado self-signed:

```env
CREWAI_ALLOW_SELF_SIGNED=true
```

Nunca exponha `CREWAI_API_KEY` no frontend. O token deve ficar somente no `.env` lido pelo `server.js`.

## Integração CrewAI

O frontend chama apenas endpoints locais:

- `POST /api/crewai/kickoff`
- `GET /api/crewai/status/:kickoffId`
- `GET /api/config`

O `server.js` encaminha para a CrewAI com `Authorization: Bearer <token>`.

Payload enviado no kickoff:

```json
{
  "inputs": {
    "discovery_id": "draft-id-gerado",
    "Methodology_Appoved": {
      "id": "optimized",
      "name": "Discovery Otimizado",
      "duration": "3-4 semanas",
      "description": "Abordagem ágil focada em validações essenciais",
      "csd": {
        "certezas": ["Promocoes atuais tem baixa adesao"],
        "suposicoes": ["Ranking pode aumentar recorrencia"],
        "duvidas": ["Quais incentivos geram maior valor"]
      },
      "items": [
        {
          "name": "Pesquisa em Profundidade",
          "duration": "1-2 semanas",
          "description": "Entrevistas qualitativas com usuários-chave para entender contexto, dores e necessidades",
          "sample": "8-12 participantes"
        }
      ]
    }
  }
}
```

O botão final **Criar discovery**:

1. Gera o `draftId`.
2. Chama `/api/crewai/kickoff`.
3. Recebe `kickoff_id`.
4. Faz polling do status usando intervalo/timeout vindos de `/api/config`.
5. Só cria e abre a Discovery Page quando a CrewAI retorna status final de sucesso.

## Backend CrewAI Mapeado

O código-fonte da Crew que atende essa integração está em:

```text
azure_document_processing_automation_v2_crewai-project/
```

Arquivos principais da Crew:

- `src/azure_document_processing_automation/crew.py`: instancia agentes, tarefas, modelos, ferramentas e define o processo da Crew.
- `src/azure_document_processing_automation/main.py`: ponto de entrada local; chama `AzureDocumentProcessingAutomationCrew().crew().kickoff(inputs=inputs)`.
- `src/azure_document_processing_automation/config/agents.yaml`: papel, objetivo e contexto de cada agente.
- `src/azure_document_processing_automation/config/tasks.yaml`: descrição, output esperado, agente responsável e dependências entre tarefas.
- `pyproject.toml`: projeto CrewAI com `crewai[file-processing,litellm,tools]==1.14.4`.

A pasta da Crew não implementa um servidor HTTP próprio. Em produção/desenvolvimento integrado, a API HTTP vem do deploy da CrewAI/AMP, que expõe:

- `POST /kickoff`
- `GET /status/{kickoff_id}`

O `server.js` deste frontend é apenas um proxy local para esses endpoints remotos.

### Contrato Atual Frontend -> Backend

Payload enviado pelo frontend no kickoff:

```json
{
  "inputs": {
    "discovery_id": "draft-id-gerado",
    "Methodology_Appoved": {
      "id": "optimized",
      "name": "Discovery Otimizado",
      "duration": "3-4 semanas",
      "description": "Abordagem ágil focada em validações essenciais",
      "csd": {
        "certezas": ["Promocoes atuais tem baixa adesao"],
        "suposicoes": ["Ranking pode aumentar recorrencia"],
        "duvidas": ["Quais incentivos geram maior valor"]
      },
      "items": [
        {
          "name": "Pesquisa em Profundidade",
          "duration": "1-2 semanas",
          "description": "Entrevistas qualitativas com usuários-chave para entender contexto, dores e necessidades",
          "sample": "8-12 participantes"
        }
      ]
    }
  }
}
```

Hoje o frontend envia `discovery_id` e `Methodology_Appoved`. O campo `Methodology_Appoved` carrega a metodologia selecionada e o CSD preenchido pelo usuário: `certezas`, `suposicoes` e `duvidas`. Os demais campos coletados no Full Page Flow do frontend, como título, problema, objetivo, dores, participantes, prazo, arquivos e links, ficam no estado mockado/local do frontend e não são enviados para a CrewAI.

Se a evolução do produto exigir que a Crew use esses dados, altere os dois lados juntos:

- No frontend: expandir `kickoffCrewAiDiscovery` para enviar mais campos em `inputs`.
- Na Crew: atualizar `main.py` para refletir inputs de teste locais e ajustar `agents.yaml`/`tasks.yaml` para interpolar os novos campos.
- No proxy: normalmente nada muda, pois `server.js` repassa o JSON recebido para `/kickoff`.

### Contrato Atual Backend -> Frontend

O frontend espera que `POST /kickoff` retorne:

```json
{
  "kickoff_id": "id-da-execucao"
}
```

Durante o polling, o frontend consulta `GET /status/{kickoff_id}` e tenta encontrar o status em uma destas chaves:

- `state`
- `result.state`
- `data.state`
- `status`
- `result.status`
- `data.status`

Status tratados como sucesso:

- `completed`
- `complete`
- `success`
- `succeeded`

Status tratados como erro:

- `failed`
- `failure`
- `error`
- `cancelled`
- `canceled`

Quando chega em sucesso, o frontend guarda o resultado bruto em `crewAiStatusPayload` e tenta extrair conteúdo de:

- `result`
- `data.result`
- `output`
- `response`

Esse resultado ainda não é renderizado como fonte principal da Discovery Page; a página criada usa majoritariamente os dados do próprio formulário e mantém o retorno da Crew salvo no objeto local do discovery.

### Como a Crew Funciona

A Crew é sequencial (`Process.sequential`) e executa uma cadeia longa de tarefas de Discovery. O `crew.py` registra todos os agentes com `@agent`, todas as tarefas com `@task` e monta a Crew com:

- `process=Process.sequential`
- `verbose=True`
- `chat_llm=LLM(model="openai/gpt-4.1-mini")`

Quase todos os agentes usam `LLM(model="openai/gpt-4.1")`. O agente `primary_research_evidence_processor` usa `openai/gpt-4.1-mini`. Todos estão com:

- `reasoning=False`
- `inject_date=True`
- `allow_delegation=False`
- `max_iter=25`

Ferramentas configuradas:

- `FileReadTool` em agentes que precisam ler arquivos/contexto.
- `ScrapeWebsiteTool` e `SerperDevTool` no agente de desk research.
- `custom_tool.py` existe apenas como exemplo/template e não está conectado à Crew.

Variáveis esperadas pela Crew:

- `OPENAI_API_KEY`, porque os modelos são OpenAI via CrewAI/LiteLLM.
- `SERPER_API_KEY`, se o `SerperDevTool` for usado em execução real.

Apesar do nome do projeto mencionar Azure e o prompt do agente de pesquisa primária falar em Azure Blob Storage, não há SDK, ferramenta ou integração Azure implementada no código atual. Hoje isso é apenas uma expectativa descrita no prompt/output da tarefa.

Essa ausência de integração Azure não remove a CrewAI do MVP. Ela significa apenas que armazenamento externo e conectores corporativos devem ser simulados ou tratados manualmente durante o MVP.

### Sequência de Tarefas

A ordem implementada em `crew.py` segue a ordem dos métodos `@task`:

1. `control_discovery_workflow_state_machine`
2. `build_d_o_r_framework`
3. `validate_discovery_readiness`
4. `define_discovery_methodology`
5. `prioritize_discovery_scope`
6. `create_research_execution_plan`
7. `define_participant_strategy`
8. `define_research_operational_structure`
9. `create_research_execution_protocols`
10. `execute_desk_research_evidence_collection`
11. `process_primary_research_evidence`
12. `synthesize_discovery_evidence`
13. `review_insight_quality`
14. `map_discovery_opportunities`
15. `generate_solution_hypotheses`
16. `define_prototype_requirements`
17. `generate_prototype_execution_artifacts`
18. `define_validation_strategy`
19. `design_validation_experiment`
20. `generate_strategic_recommendation`
21. `prepare_discovery_handoff_package`

Os `context` em `tasks.yaml` encadeiam outputs anteriores como contexto para as próximas tarefas. Embora a primeira tarefa descreva uma máquina de estados com aprovações humanas, a implementação atual é uma Crew sequencial simples: não há Flow CrewAI, router, persistência de estado, endpoint de aprovação, pausa/resume real ou branching programático no código local.

### Outputs Esperados pela Crew

`tasks.yaml` descreve outputs estruturados por texto, mas o código não define modelos Pydantic, `output_pydantic`, `output_json` ou guardrails. Na prática, a forma final do retorno depende do comportamento do CrewAI/AMP e dos textos gerados pelos agentes.

Os principais tipos conceituais descritos nos prompts são:

- `WorkflowStateOutput`
- `DiscoveryReadinessOutput`
- `MethodologyOutput`
- `ScopePrioritizationOutput`
- `ResearchPlannerOutput`
- `ParticipantStrategyOutput`
- `ResearchOpsOutput`
- `ResearchScriptOutput`
- `DeskResearchOutput`
- `PrimaryResearchExecutionOutput`
- `SynthesisOutput`
- `InsightQualityReviewOutput`
- `OpportunityMappingOutput`
- `SolutionHypothesisOutput`
- `PrototypeDefinitionOutput`
- `PrototypeGenerationOutput`
- `ValidationStrategyOutput`
- `ExperimentDesignOutput`
- `RecommendationOutput`
- `HandoffDeliveryOutput`

Para o frontend consumir dados de forma confiável, uma evolução importante é transformar esses outputs em contrato real, com schema validado no backend ou uma camada normalizadora no `server.js`.

### Cuidados ao Evoluir Front e Back

- Não coloque `CREWAI_API_KEY` no frontend. O navegador deve continuar chamando apenas `/api/crewai/*`.
- Se novos campos forem necessários no backend, mande-os dentro de `inputs` e mantenha nomes estáveis em snake_case.
- Preserve `discovery_id`; ele é o identificador comum entre frontend, kickoff e prompts da Crew.
- Não assuma que o status remoto virá sempre no mesmo campo; o frontend hoje aceita múltiplos formatos por segurança.
- Se o backend passar a retornar um JSON estruturado confiável, ajuste `getCrewAiResult` e a criação da Discovery Page para renderizar esse payload em vez de apenas armazená-lo.
- Se arquivos anexados precisarem entrar no backend, será necessário criar contrato específico de upload/referência. Hoje o kickoff só envia JSON e não há integração real com Blob Storage no código local.
- Se aprovações humanas virarem produto real, a Crew sequencial atual não basta sozinha; será preciso implementar estado persistente, eventos de aprovação e retomada do workflow no backend.
- O `pyproject.toml` declara o script `run_with_trigger`, mas `main.py` não implementa essa função. Corrija antes de depender desse entrypoint.

## Checagens Recomendadas

Antes de finalizar mudanças em JavaScript:

```bash
node --check app.js
node --check server.js
```

Para validar o proxy sem expor o token:

```bash
curl -i http://localhost:4173/api/config
```

Com o servidor rodando e `.env` configurado, testar kickoff:

```bash
curl -i -X POST http://localhost:4173/api/crewai/kickoff \
  -H 'Content-Type: application/json' \
  --data '{"inputs":{"discovery_id":"draft-teste"}}'
```

## Cuidados de Implementação

- O app usa roteamento por `location.hash`; preserve URLs como `#products`, `#product/:id` e `#discovery/:id/:productId`.
- O Full Page Flow deve rolar internamente, sem rolar a página de fundo.
- Não adicione dependências sem necessidade; o proxy foi feito apenas com módulos nativos do Node.
- Não commite `.env`; ele já está no `.gitignore`.
- Ao mexer no polling, mantenha valores em milissegundos e defaults seguros no frontend caso `/api/config` falhe.
