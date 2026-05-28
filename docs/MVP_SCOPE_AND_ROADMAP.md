# Discovery AI MVP Scope And Roadmap

## MVP Contract Correction

Discovery AI MVP must include agents. CrewAI agent workflow, agent processing states, structured outputs and agent-generated discovery intelligence are part of the MVP.

External integrations are future.

Agent-driven processing remains in MVP. External integrations are future.

Agents are not integrations. Agents are the intelligence layer of Discovery AI. Integrations are external data/action connectors that can be added later.

The frontend remains the workflow interaction layer. CrewAI and agents remain the intelligence layer.

## 1. MVP Objective

The MVP validates an agent-driven discovery workflow for product teams without depending on enterprise integrations. It should let teams create discoveries, provide evidence manually, follow progress, review agent outputs, approve human gates and use structured discovery artifacts inside the frontend.

## 2. MVP Includes

- Product repository;
- Home product bar for products the logged-in user works on;
- Product pages;
- Recent discoveries on Home;
- Discovery creation;
- Discovery progress;
- Methodology rail;
- CSD matrix;
- Related people;
- Insights;
- Artifacts;
- Human gates;
- CrewAI agent workflow;
- Agent processing states;
- Structured outputs;
- Manual evidence upload;
- Agent-generated outputs rendered in the frontend;
- Mock adapter and/or CrewAI adapter, depending on environment.

## 3. MVP Does Not Include

- Teams integration;
- Outlook integration;
- Tech Metrics integration;
- DataDog integration;
- Product database integration;
- Analytics platform integration;
- Research repository integration;
- Automated external data ingestion;
- Notifications;
- SSO;
- Enterprise permissions;
- Conversational research assistant;
- Executive dashboards;
- Advanced search.

These exclusions are integration and product-expansion boundaries. They do not move agents, CrewAI processing or discovery intelligence out of MVP.

The Research Assistant is future as a conversational frontend feature. The Home page should focus on the user's products and recent discoveries, while agent workflow processing remains MVP.

## 4. MVP Input Modes

The MVP can receive discovery context through:

- manual discovery intake;
- manual evidence upload;
- pasted transcripts/notes;
- uploaded files if already supported;
- mock data for demo;
- no automated external connectors.

External data sources can be represented by user-provided content, fixture outputs, mock backend responses or local demo data. The MVP should not depend on automated retrieval from enterprise systems.

## 5. MVP Processing

Agents process:

- intake;
- research planning;
- evidence;
- synthesis;
- opportunities;
- recommendation;
- handoff.

Human approvals remain in the flow. The frontend should present review surfaces, gates, progress states and structured outputs produced by the agent workflow.

## 6. Adapter Boundary

The MVP may run through:

- a mock adapter for local/demo workflows;
- a CrewAI adapter for real agent execution when credentials and backend endpoints are available.

Both adapters should preserve the same product experience: discovery creation, progress visibility, human review gates, structured outputs, insights, artifacts and handoff content.

## 7. Future Integrations

Future integrations may include:

- Microsoft Teams;
- Outlook;
- DataDog;
- Tech Metrics;
- product databases;
- analytics tools;
- research repositories;
- Jira/Linear;
- Slack;
- Figma;
- document storage.

These integrations may later provide automated input, evidence retrieval, notifications, artifact storage or downstream delivery actions. They are not required for validating the MVP agent workflow.

## 8. MVP Information Architecture

```text
Home
-> Product Repository
-> Product Page
-> Product People Management
-> Discovery Creation
-> Discovery Detail
-> CSD Matrix
-> Methodology Rail
-> Agent Processing States
-> Human Gates
-> Insights / Artifacts
-> Recommendation / Handoff
```

## 9. Implementation Guardrail

Do not move agents to future. Do not remove CrewAI from MVP. Do not remove existing agent or workflow code when applying this scope.

This document is a contract for scope and roadmap alignment. It does not require UI redesign or new dependencies.
