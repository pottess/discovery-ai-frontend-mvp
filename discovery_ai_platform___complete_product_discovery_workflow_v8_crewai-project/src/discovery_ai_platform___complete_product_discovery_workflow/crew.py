import os
import json
from crewai import LLM
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import (
	FirecrawlScrapeWebsiteTool,
	FirecrawlCrawlWebsiteTool,
	FirecrawlSearchTool
)


from pydantic import BaseModel
from jambo import SchemaConverter


@CrewBase
class DiscoveryAiPlatformCompleteProductDiscoveryWorkflowCrew:
    """DiscoveryAiPlatformCompleteProductDiscoveryWorkflow crew"""

    
    @agent
    def d_o_r_builder(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["d_o_r_builder"],
            
            
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
    def discovery_readiness_specialist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["discovery_readiness_specialist"],
            
            
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
    def research_planning_strategist(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["research_planning_strategist"],
            
            
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
    def insights_agent(self) -> Agent:
        
        
        return Agent(
            config=self.agents_config["insights_agent"],
            
            
            tools=[				FirecrawlScrapeWebsiteTool(),
				FirecrawlCrawlWebsiteTool(),
				FirecrawlSearchTool()],
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
    def get_insights_from_file(self) -> Task:
        return Task(
            config=self.tasks_config["get_insights_from_file"],
            markdown=False,
            
            
        )
    
    @task
    def create_research_execution_plan(self) -> Task:
        return Task(
            config=self.tasks_config["create_research_execution_plan"],
            markdown=False,
            
            
        )
    

    @crew
    def crew(self) -> Crew:
        """Creates the DiscoveryAiPlatformCompleteProductDiscoveryWorkflow crew"""

        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,

            chat_llm=LLM(model="openai/gpt-4.1-mini"),
        )


    def _load_response_format(self, name):
        with open(os.path.join(self.base_directory, "config", f"{name}.json")) as f:
            json_schema = json.loads(f.read())

        return SchemaConverter.build(json_schema)

