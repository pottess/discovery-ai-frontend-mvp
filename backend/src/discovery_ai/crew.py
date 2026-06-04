import os
import json
from crewai import LLM
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import (
	FileReadTool,
	ScrapeWebsiteTool,
	SerperDevTool
)


from pydantic import BaseModel, Field
from typing import List
from jambo import SchemaConverter


class _MethodItem(BaseModel):
    method_id: str = ""
    method_name: str = ""
    why_recommended: str = ""
    when_to_use: str = ""
    expected_evidence: str = ""
    estimated_effort: str = "medium"
    sequence_order: int = 1


class _NotRecommendedMethod(BaseModel):
    method_id: str = ""
    reason: str = ""


class MethodologyOutput(BaseModel):
    """Structured output for define_discovery_methodology task.

    Using output_pydantic forces CrewAI to validate and retry until
    the LLM produces JSON that matches this schema — preventing the
    agent from returning free-text narrative instead of structured data.
    """
    discovery_id: str = ""
    recommended_methodology: str = ""
    methodology_label: str = ""
    methodology_rationale: str = ""
    confidence_score: float = 0.0
    recommended_methods: List[_MethodItem] = Field(default_factory=list)
    not_recommended_methods: List[_NotRecommendedMethod] = Field(default_factory=list)
    priority_questions: List[str] = Field(default_factory=list)
    scope_statement: str = ""
    out_of_scope: List[str] = Field(default_factory=list)
    workflow_recommendation: str = "RESEARCH_APPROVAL_PENDING"


DEFAULT_TEXT_LLM_MODEL = "openai/gpt-4o"
BLOCKED_TEXT_LLM_MODEL_TERMS = ("gpt-image", "dall-e", "image")


def validate_text_llm_model(model: str | None) -> str:
    candidate = (model or DEFAULT_TEXT_LLM_MODEL).strip() or DEFAULT_TEXT_LLM_MODEL
    normalized = candidate.lower()

    if any(term in normalized for term in BLOCKED_TEXT_LLM_MODEL_TERMS):
        blocked_terms = ", ".join(BLOCKED_TEXT_LLM_MODEL_TERMS)
        raise ValueError(
            f"Invalid text LLM model '{candidate}'. Image models are not allowed "
            f"for CrewAI text execution. Blocked terms: {blocked_terms}."
        )

    return candidate


def get_text_llm_model() -> str:
    return validate_text_llm_model(os.getenv("DISCOVERY_AI_LLM_MODEL"))


@CrewBase
class DiscoveryAiCrew:
    """DiscoveryAi crew"""

    
    @agent
    def discovery_framework_agent(self) -> Agent:


        return Agent(
            config=self.agents_config["discovery_framework_agent"],


            tools=[FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,


            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),


            ),

        )


    @agent
    def d_o_r_builder(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["d_o_r_builder"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def discovery_readiness_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["discovery_readiness_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def research_planning_strategist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["research_planning_strategist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def discovery_methodology_strategist(self) -> Agent:


        return Agent(
            config=self.agents_config["discovery_methodology_strategist"],


            tools=[FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def discovery_scope_prioritization_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["discovery_scope_prioritization_specialist"],
            
            
            tools=[],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def participant_strategy_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["participant_strategy_specialist"],
            
            
            tools=[],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def research_operations_strategist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["research_operations_strategist"],
            
            
            tools=[],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def research_protocol_design_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["research_protocol_design_specialist"],
            
            
            tools=[],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def desk_research_intelligence_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["desk_research_intelligence_specialist"],
            
            
            tools=[				ScrapeWebsiteTool(),
				SerperDevTool(),
				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def discovery_intelligence_synthesis_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["discovery_intelligence_synthesis_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def insight_quality_assurance_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["insight_quality_assurance_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def solution_hypothesis_strategist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["solution_hypothesis_strategist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def prototype_definition_strategist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["prototype_definition_strategist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def prototype_build_translator(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["prototype_build_translator"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def validation_strategy_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["validation_strategy_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def experiment_design_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["experiment_design_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def strategic_recommendation_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["strategic_recommendation_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def discovery_handoff_delivery_strategist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["discovery_handoff_delivery_strategist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def primary_research_evidence_processor(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["primary_research_evidence_processor"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    
    @agent
    def estrategista_de_oportunidades(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["estrategista_de_oportunidades"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model=get_text_llm_model(),
                
                
            ),
            
        )
        
    

    
    @task
    def build_d_o_r_framework(self) -> Task:
        return Task(
            config=self.tasks_config["build_d_o_r_framework"],
            markdown=False,
            output_json=self._load_response_format("build_d_o_r_framework"),
            
        )
    
    @task
    def validate_discovery_readiness(self) -> Task:
        return Task(
            config=self.tasks_config["validate_discovery_readiness"],
            markdown=False,
            
            
        )
    
    @task
    def define_discovery_methodology(self) -> Task:
        return Task(
            config=self.tasks_config["define_discovery_methodology"],
            markdown=False,
            output_pydantic=MethodologyOutput,
        )
    
    @task
    def prioritize_discovery_scope(self) -> Task:
        return Task(
            config=self.tasks_config["prioritize_discovery_scope"],
            markdown=False,
            
            
        )
    
    @task
    def create_research_execution_plan(self) -> Task:
        return Task(
            config=self.tasks_config["create_research_execution_plan"],
            markdown=False,
            
            
        )
    
    @task
    def define_participant_strategy(self) -> Task:
        return Task(
            config=self.tasks_config["define_participant_strategy"],
            markdown=False,
            
            
        )
    
    @task
    def define_research_operational_structure(self) -> Task:
        return Task(
            config=self.tasks_config["define_research_operational_structure"],
            markdown=False,
            
            
        )
    
    @task
    def create_research_execution_protocols(self) -> Task:
        return Task(
            config=self.tasks_config["create_research_execution_protocols"],
            markdown=False,
            
            
        )
    
    @task
    def execute_desk_research_evidence_collection(self) -> Task:
        return Task(
            config=self.tasks_config["execute_desk_research_evidence_collection"],
            markdown=False,
            
            
        )
    
    @task
    def primary_research_execution(self) -> Task:
        return Task(
            config=self.tasks_config["primary_research_execution"],
            markdown=False,
            
            
        )
    
    @task
    def synthesize(self) -> Task:
        return Task(
            config=self.tasks_config["synthesize"],
            markdown=False,
            
            
        )
    
    @task
    def insight_qa(self) -> Task:
        return Task(
            config=self.tasks_config["insight_qa"],
            markdown=False,
            
            
        )
    
    @task
    def map_strategic_opportunities(self) -> Task:
        return Task(
            config=self.tasks_config["map_strategic_opportunities"],
            markdown=False,
            
            
        )
    
    @task
    def generate_solution_hypotheses(self) -> Task:
        return Task(
            config=self.tasks_config["generate_solution_hypotheses"],
            markdown=False,
            
            
        )
    
    @task
    def define_prototype_requirements(self) -> Task:
        return Task(
            config=self.tasks_config["define_prototype_requirements"],
            markdown=False,
            
            
        )
    
    @task
    def prototype_definition(self) -> Task:
        return Task(
            config=self.tasks_config["prototype_definition"],
            markdown=False,
            
            
        )
    
    @task
    def define_validation_strategy(self) -> Task:
        return Task(
            config=self.tasks_config["define_validation_strategy"],
            markdown=False,
            
            
        )
    
    @task
    def design_validation_experiment(self) -> Task:
        return Task(
            config=self.tasks_config["design_validation_experiment"],
            markdown=False,
            
            
        )
    
    @task
    def generate_strategic_recommendation(self) -> Task:
        return Task(
            config=self.tasks_config["generate_strategic_recommendation"],
            markdown=False,
            
            
        )
    
    @task
    def generate_delivery_handoff_package(self) -> Task:
        return Task(
            config=self.tasks_config["generate_delivery_handoff_package"],
            markdown=False,
            
            
        )
    

    def _create_manager_agent(self) -> Agent:
        """Creates the conceptual Discovery Lead orchestrator for governed workflows."""

        return Agent(
            role="Senior Discovery Lead & Design Thinking Orchestrator",
            goal=(
                "Govern the complete Product Discovery workflow for {discovery_id}. "
                "Decide which specialist agents and methodological frameworks should run, "
                "what inputs they need, what outputs they must deliver, and when the workflow "
                "must stop for human approval or user-provided evidence. Always respect human "
                "gates, avoid premature downstream execution, and return workflow_recommendation "
                "with allowed_agents, blocked_agents, and required_user_action."
            ),
            backstory=(
                "\nYou are a Senior Product Discovery Lead and Design Thinking practitioner.\n\n"
                "You deeply understand discovery framing, D.O.R., CSD, research methodology, "
                "qualitative and quantitative research, desk research, usability testing, "
                "evidence analysis, synthesis, insight quality, opportunity mapping, ideation, "
                "solution hypotheses, prototyping, validation strategy, experimentation, "
                "recommendation, and handoff.\n\n"
                "Your responsibility is workflow governance, not specialist execution. You "
                "coordinate the specialist ecosystem and decide:\n\n"
                "- which agent enters the workflow\n"
                "- when that agent enters\n"
                "- which input the agent must receive\n"
                "- which output the agent must deliver\n"
                "- which methods or frameworks are relevant to the approved methodology\n"
                "- which agents must stay blocked because they do not fit the current discovery\n"
                "- when the workflow must stop for human approval\n"
                "- when the workflow must wait for uploaded evidence, links, notes, transcripts, "
                "test results, or another user-provided input\n\n"
                "Hard governance rules:\n\n"
                "- never execute downstream agents before the correct human gate\n"
                "- never process evidence before the user provides evidence\n"
                "- never synthesize without sufficient structured evidence\n"
                "- never generate opportunities before human approval of insights\n"
                "- never generate solution hypotheses, prototypes, validation, recommendations, "
                "or handoff before human approval of opportunities\n"
                "- never activate a method-specific agent unless the approved methodology "
                "recommends that method and required inputs are available\n"
                "- always return workflow_recommendation, allowed_agents, blocked_agents, "
                "required_user_action, current_state, next_allowed_state, and decision_rationale\n\n"
                "You behave like an expert Discovery Lead: methodologically rigorous, practical, "
                "evidence-aware, and strict about governance checkpoints.\n"
            ),
            llm=LLM(model=get_text_llm_model()),
            allow_delegation=True,
        )

    def create_initial_planning_crew(self) -> Crew:
        """FASE 1 — Discovery Framework.

        Runs DOR + readiness + methodology + scope and stops at
        RESEARCH_APPROVAL_PENDING. Planning, participants, ops, and
        protocols belong to FASE 2 and must NOT be included here.
        """

        return Crew(
            agents=[
                self.discovery_framework_agent(),
            ],
            tasks=[
                self.build_d_o_r_framework(),
                self.validate_discovery_readiness(),
                self.define_discovery_methodology(),
                self.prioritize_discovery_scope(),
            ],
            process=Process.sequential,
            verbose=True,
        )

    @crew
    def crew(self) -> Crew:
        """Creates the complete DiscoveryAi crew"""

        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
        )


    def _load_response_format(self, name):
        with open(os.path.join(self.base_directory, "config", f"{name}.json")) as f:
            json_schema = json.loads(f.read())

        return SchemaConverter.build(json_schema)
