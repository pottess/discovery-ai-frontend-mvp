# Arquitetura — Backend (CrewAI Discovery Crew)

> Parte `backend`. Tipo: backend (Python). Scan deep, 2026-06-05.
> Pasta: [`backend/`](../backend/). Fonte: `src/discovery_ai/`.

## Sumário Executivo

Crew CrewAI que executa o workflow de discovery-até-entrega: 20 agentes especialistas
coordenados por 1 agente manager em `Process.hierarchical`. **Não expõe servidor HTTP próprio** —
a API `/kickoff` + `/status/{id}` consumida pelo frontend vem de um deploy CrewAI/AMP. O
`server.js` do frontend só faz proxy.

## Stack

| Categoria | Tecnologia | Versão | Notas |
|-----------|-----------|--------|-------|
| Linguagem | Python | ≥3.10,<3.14 | |
| Framework | CrewAI | `crewai[file-processing,litellm,tools]==1.14.4` | |
| LLM gateway | LiteLLM | `<=1.82.6` (override uv) | |
| Modelos | OpenAI | `gpt-4o` (manager), `gpt-5.5` (especialistas ⚠️ inexistente — R3) | |
| Schema | `jambo` `SchemaConverter` | — | JSON Schema → Pydantic p/ `output_json` |
| Gerência de pacote | uv | — | `uv.lock`, `crewai install`/`crewai run` |
| Env esperado | `OPENAI_API_KEY`, `SERPER_API_KEY` | — | Serper só p/ desk research |

## Padrão Arquitetural

- **Orquestração hierárquica.** `manager_agent` (`role="Orcherstrator"` [sic], `gpt-4o`,
  `allow_delegation=True`) roteia para especialistas, impõe governança e gates humanos.
- **Especialistas** (`allow_delegation=False`, `max_iter=25`, `reasoning=False`,
  `inject_date=True`).
- **Tasks encadeadas por `context`** em `tasks.yaml`: o output de uma vira contexto da próxima.

## Agentes (20 + manager)

`d_o_r_builder`, `discovery_readiness_specialist`, `research_planning_strategist`,
`discovery_methodology_strategist`, `discovery_scope_prioritization_specialist`,
`participant_strategy_specialist`, `research_operations_strategist`,
`research_protocol_design_specialist`, `desk_research_intelligence_specialist`,
`discovery_intelligence_synthesis_specialist`, `insight_quality_assurance_specialist`,
`solution_hypothesis_strategist`, `prototype_definition_strategist`,
`prototype_build_translator`, `validation_strategy_specialist`,
`experiment_design_specialist`, `strategic_recommendation_specialist`,
`discovery_handoff_delivery_strategist`, `primary_research_evidence_processor`,
`estrategista_de_oportunidades`.

**Tools:** `FileReadTool` (maioria); `ScrapeWebsiteTool` + `SerperDevTool` só no
`desk_research_intelligence_specialist`. `custom_tool.py` é template não conectado.

## Sequência de Tasks (20)

`build_d_o_r_framework` → `validate_discovery_readiness` → `define_discovery_methodology` →
`prioritize_discovery_scope` → `create_research_execution_plan` → `define_participant_strategy` →
`define_research_operational_structure` → `create_research_execution_protocols` →
`execute_desk_research_evidence_collection` → `primary_research_execution` → `synthesize` →
`insight_qa` → `map_strategic_opportunities` → `generate_solution_hypotheses` →
`define_prototype_requirements` → `prototype_definition` → `define_validation_strategy` →
`design_validation_experiment` → `generate_strategic_recommendation` →
`generate_delivery_handoff_package`.

Gates humanos conceituais (refletidos no mock adapter do frontend): aprovação de pesquisa,
upload de evidência, review de insight, review de oportunidade.

## Contrato de Output

`tasks.yaml` descreve `expected_output` como objetos JSON estruturados (DOR, readiness,
methodology, scope, plan, participants, ops, protocols, desk/primary research, synthesis,
insight QA, opportunities, hypotheses, prototype, validation, experiment, recommendation,
handoff). **Mas só `build_d_o_r_framework` impõe schema** (`output_json` via `jambo` a partir de
`config/build_d_o_r_framework.json`). As demais tasks retornam texto — forma final depende do
comportamento do CrewAI/AMP. ⇒ Contrato instável (R9): definir schemas + camada de normalização.

## Inputs do Kickoff

`discovery_id`, `title`, `objective`, `problem`, `owners`, `users`, `stakeholders`,
`certainties`, `assumptions`, `open_questions`, `file`, `link`, `patterns`, `contradictions`
(ver `main.py`). Interpolados nos prompts via `tasks.yaml`.

## Lacunas / Dívidas (entrada p/ ADR)

- **R3:** `gpt-5.5` não existe → kickoff real falha. Definir modelos válidos.
- **`run_with_trigger`**: declarado em `pyproject.toml [project.scripts]` mas **não implementado**
  em `main.py`. Corrigir antes de depender do entrypoint.
- **Sem persistência de estado / pausa-resume reais**: apesar dos gates humanos descritos, a
  crew hierárquica não implementa máquina de estados persistente, eventos de aprovação ou
  retomada. Produto real de human-in-the-loop exige isso no backend.
- **Azure**: prompts mencionam Azure Blob Storage, mas não há SDK/integração — simular no MVP.
- **Sem HTTP server**: depende de deploy CrewAI/AMP para expor `/kickoff` + `/status`.

## Integração

Ver [Arquitetura de Integração](./integration-architecture.md) — browser → `server.js` (proxy
Bearer) → CrewAI/AMP.
