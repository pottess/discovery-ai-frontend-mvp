---
name: create-pr
description: Creates Pull Requests in the prices-ambev Azure DevOps repository following project conventions — title in English, description in PT-BR, work item linking, and correct branch naming. Use when the user asks to create a PR, open a pull request, or finalize and publish the work from a branch.
---

# Create Pull Request — Cora Prices

## Before creating the PR

Check the current state:

```bash
git status
git log --oneline main..HEAD
```

Confirm:

- You are on a feature branch (not `main`/`master`/`develop`)
- Build and tests are passing
- Commits have descriptive messages

## Branch naming conventions

- **Product Backlog items** (Feature, Technical Feature, Incident): `feature/base/<parent-wit>`
- **Squad Backlog items** (User Story, Technical Story, Bug): `feature/<parent-wit>/<child-id>`

## Fetch work item details

If the user mentions a work item ID, fetch the details:

```
mcp__azure-devops__wit_get_work_item
  project: "AMBEVTECH-SALES"
  id: {workitem-id}
```

## Get the repository ID

```
mcp__azure-devops__repo_get_repo_by_name_or_id
  project: "AMBEV-VENDAS-REVENUE-CORA-PRECOS"
  repositoryNameOrId: "prices-simulator-frt"
```

## Create the PR

```
mcp__azure-devops__repo_create_pull_request
  repositoryId: <prices-ambev repo ID>
  sourceRefName: refs/heads/<current-branch>
  targetRefName: refs/heads/main
  title: <descriptive title in English>
  description: <description in PT-BR>
  workItems: <workitem-id>
```

## PR title (English)

Be descriptive and concise:

- ✅ `feat: add CSV upload flow to UpdateCustomerStatusModal`
- ✅ `fix: null-safe cast in tipoColeta mapper`
- ❌ `fix bug` (too vague)
- ❌ `implementação da story 12345` (wrong language and no context)

## Description template (PT-BR)

```markdown
## O que foi implementado

[Summary of what was done]

## Como testar

[Steps to verify the behavior]

## Checklist

- [ ] Build passando
- [ ] Testes passando
- [ ] Sem `any` no TypeScript
- [ ] Tokens do design system usados (sem valores CSS hardcoded)
- [ ] Imports de `@celebration/react` via `~components/external`
```
