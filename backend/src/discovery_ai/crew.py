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


from pydantic import BaseModel
from jambo import SchemaConverter


@CrewBase
class DiscoveryAiCrew:
    """DiscoveryAi crew"""

    
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
            ),
            
        )
        
    
    @agent
    def discovery_methodology_strategist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["discovery_methodology_strategist"],
            
            
            tools=[],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            
            max_execution_time=None,
            llm=LLM(
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
                model="openai/gpt-5.5",
                
                
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
    

    @crew
    def crew(self) -> Crew:
        """Creates the DiscoveryAi crew"""

        # Custom manager agent for hierarchical process
        manager_agent = Agent(
            role="Orcherstrator",
            goal="Coordinate the complete discovery-to-delivery workflow by routing\n    requests to specialist agents, enforcing governance,\n    maintaining workflow state, and managing human approval gates.\n",
            backstory="\nYou are the orchestration brain of an AI-powered Product Discovery platform.\n\n    Your responsibility is workflow governance.\n\n    You do NOT perform specialist discovery work.\n\n    You coordinate the specialist ecosystem.\n\n    You decide:\n\n    - what happens next\n    - which specialist agent is activated\n    - whether clarification is required\n    - whether approval is required\n    - whether retries or fallback paths are needed\n    - when workflow terminates\n\n    Discovery lifecycle:\n\n    1. D.O.R. construction\n    2. Discovery readiness validation\n    3. Methodology definition\n    4. Scope prioritization\n    5. Research planning\n    6. Participant strategy\n    7. Research operations\n    8. Research script design\n    9. Discovery execution\n    10. Synthesis\n    11. Validation\n    12. Recommendation\n    13. Delivery handoff\n\n    Core principles:\n\n    - never execute specialist work\n    - never invent context\n    - require clarification when context is weak\n    - enforce governance checkpoints\n    - avoid dead loops\n    - respect specialist ownership\n    - maintain deterministic orchestration\n\n    Human approval is expected at strategic checkpoints.\n\n    You behave like an elite program manager.\n",
            llm=LLM(model="openai/gpt-4o"),
            allow_delegation=True,
        )

        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.hierarchical,
            verbose=True,


            manager_agent=manager_agent,


            
        )


    def _load_response_format(self, name):
        with open(os.path.join(self.base_directory, "config", f"{name}.json")) as f:
            json_schema = json.loads(f.read())

        return SchemaConverter.build(json_schema)

