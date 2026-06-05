---
stepsCompleted: [1, 2, 3, 4, 5, 6]
sourceWorkItem: 2492886
assessmentDate: 2026-06-03
---

# Implementation Readiness Assessment Report

**Date:** 2026-06-03
**Project:** prices-simulator
**Work Item:** [#2492886 — Reforma Tributária - Solicitação de Parâmetro de alíquotas para o Abax que não esteja na base consolidadora](https://dev.azure.com/AMBEV-SA/AMBEVTECH-SALES/_workitems/edit/2492886)
**Type:** Feature
**Status:** Waiting Technical Analysis
**DoR Score Atual:** 58/100 — Reprovado

---

## PRD Analysis

> Fonte: campos da Feature #2492886 (sem PRD local encontrado)

### Functional Requirements Extracted

**FR1:** Sistema deve detectar automaticamente quando uma combinação de parâmetros fiscais (origem, destino, tipo de cliente, produto) não está disponível na base consolidada.

**FR2:** Sistema deve acionar o Abax para buscar alíquotas, pautas e situações fiscais quando combinação não encontrada na base consolidada.

**FR3:** Sistema deve selecionar um cliente representativo via clusterização (combinações: origem/UF destino/tipo doc CPF-CNPJ/perfil fiscal Contribuinte-Não Contribuinte CBS/IBS) para representar demais clientes com mesmos parâmetros.

**FR4:** Contrato de solicitação ao Abax deve incluir:
- Origem: código EG (CDD/Fábrica) com 3 posições; código Puxada (Revenda) com 7 posições
- Destino: tipo CPF/CNPJ + perfil fiscal Contribuinte/Não Contribuinte CBS/IBS
- Produto: código EG sem dígito (SKU) como string
- Segmento: CDD → ontrade/offtrade; Revenda → revenda (extraído da divisão no Edge)
- Unidade: **INDEFINIDA** ← placeholder não resolvido

**FR5:** Após retorno do Abax, base consolidada deve ser atualizada automaticamente para evitar novas solicitações à mesma combinação.

**FR6:** Carga inicial para preenchimento da base consolidada deve ser executada.

**FR7:** Atualizações contínuas da base a cada nova combinação identificada durante o repasse.

**Total FRs:** 7 (sendo 1 parcialmente indefinida — FR4/Unidade)

### Non-Functional Requirements Extracted

**NFR1 — Transparência:** Processo deve ocorrer de forma transparente para o Especialista de Preços durante o fluxo de cálculo/consulta. Sem latência perceptível documentada.

**NFR2 — Resiliência:** ❌ NÃO DEFINIDO — comportamento do sistema em caso de falha do Abax (timeout, erro HTTP, indisponibilidade) não especificado.

**NFR3 — Compliance:** Conformidade com Reforma Tributária (CBS/IBS).

**NFR4 — Idempotência:** ❌ IMPLÍCITO MAS NÃO DEFINIDO — base consolidada deve evitar chamadas duplicadas, mas mecanismo de deduplicação não especificado.

**Total NFRs documentados:** 2 de 4 (2 críticos ausentes)

### Restrições e Premissas

- Feature depende de WI 2260831 (projeto diferente — não verificável)
- Feature sucedida por WI 2505528 (projeto diferente — não verificável)
- Dado de segmento extraído da "divisão" que o Edge já possui — premissa não validada
- Arquivo PDF "Abax x Cora preços - Final.pdf" anexado — conteúdo não incorporado nos CAs

---

## Epic Coverage Validation

> Sem epics ou stories filhas linkadas à Feature #2492886.

### Coverage Matrix

| FR | Requisito | Cobertura em Stories | Status |
|----|-----------|---------------------|--------|
| FR1 | Detecção de combinação ausente na base | **Nenhuma story** | ❌ AUSENTE |
| FR2 | Acionamento do Abax | **Nenhuma story** | ❌ AUSENTE |
| FR3 | Clusterização/cliente representativo | **Nenhuma story** | ❌ AUSENTE |
| FR4 | Contrato de solicitação ao Abax | **Nenhuma story** | ❌ AUSENTE |
| FR5 | Atualização automática da base | **Nenhuma story** | ❌ AUSENTE |
| FR6 | Carga inicial | **Nenhuma story** | ❌ AUSENTE |
| FR7 | Atualizações contínuas (repasse) | **Nenhuma story** | ❌ AUSENTE |

**Cobertura:** 0/7 FRs cobertos por stories (0%)

### Missing Requirements

Todos os FRs estão sem cobertura. Nenhuma task técnica ou story foi criada ou estimada.

---

## UX Alignment Assessment

### UX Document Status

Não encontrado (e não aplicável).

### Assessment

Feature é exclusivamente backend/integração. Nenhuma interface de usuário nova é implicada — processo ocorre de forma transparente para o Especialista de Preços. Sem necessidade de documentação UX.

### Warnings

⚠️ O fluxo de fallback/erro pode impactar UX indiretamente (bloqueio de cálculo de preços se Abax indisponível). Comportamento não definido.

---

## Epic Quality Review

> Análise aplicada sobre a Feature como unidade de planejamento, dado ausência de epics/stories.

### 🔴 Violações Críticas

**C1 — Critérios de Aceite são Placeholders**
Dois CAs literalmente incompletos:
- `"escrever regra da população do campo unidade"`
- `"escrever a regra do segmento"`
Nenhum desenvolvimento pode começar sem estes definidos. Bloqueador absoluto.

**C2 — CAs Não Cobrem Fluxo Principal**
Os CAs existentes (CA2, CA3) cobrem apenas formatação de campos.
Fluxos ausentes nos CAs:
- Detecção de combinação ausente na base consolidada
- Chamada ao Abax com parâmetros corretos
- Atualização automática da base após retorno
- Comportamento em caso de falha do Abax

**C3 — Comportamento em Falha Não Definido**
Nenhuma especificação para: timeout, erro HTTP, Abax indisponível.
Perguntas sem resposta: retry com backoff? fila assíncrona? fallback com valor padrão? bloqueio do fluxo de repasse?

**C4 — Sem Stories/Tasks Filhas**
Nenhuma decomposição em stories ou tasks técnicas. Feature não está pronta para refinamento técnico ou desenvolvimento.

### 🟠 Issues Maiores

**M1 — CA1 Ambíguo**
"Carga inicial para população da base no dia 01" — "dia 01" de quê? Mês de implantação? Primeiro sprint? Sem data ou trigger definido.

**M2 — Definition of Done Incorreto**
DoD atual: *"Realizar uma solicitação de alíquota, pauta e situações para o Abax caso não tenhamos a combinação na nossa base"*
Isso descreve **comportamento funcional**, não critério de conclusão. DoD deve incluir: testes automatizados (unitários + integração), code review aprovado, observabilidade (logs, métricas, alertas), documentação atualizada.

**M3 — Regra de Clusterização Vaga**
Descrição diz "seleciona cliente representativo", mas algoritmo/critério de seleção não definido. Qual cliente é "representativo"? Maior volume? Mais recente? Qualquer um do cluster?

**M4 — Dependências Externas Não Verificáveis**
WI 2260831 e WI 2505528 estão em projetos diferentes. Não há como validar status, completude ou bloqueios sem acesso a esses projetos.

### 🟡 Concerns Menores

**m1 — Campo "Unidade" no Contrato**
Mencionado implicitamente como placeholder nos CAs. Não está claro se é um campo obrigatório no contrato do Abax ou opcional.

**m2 — Conceito de "Repasse" Não Explicado**
Feature menciona "dentro do repasse" como contexto de atualização contínua. Não definido para novo leitor.

**m3 — Segmento Depende de Dado Externo**
Regra afirma: *"buscar da divisão que o Edge já possui"*. Isso é uma integração/dependência técnica não documentada como dependência formal.

---

## Summary and Recommendations

### Overall Readiness Status

## ❌ NOT READY

Feature **não está pronta** para análise técnica ou desenvolvimento.

### Critical Issues Requiring Immediate Action

| # | Issue | Impacto |
|---|-------|---------|
| C1 | CAs placeholders sem conteúdo | Bloqueador absoluto |
| C2 | CAs não cobrem fluxo principal | Dev não sabe o que implementar |
| C3 | Comportamento em falha não definido | Risco de produção |
| C4 | Sem stories/tasks filhas | Sem estimativa possível |

### Recommended Next Steps

1. **Resolver C1 (urgente):** Substituir os dois CAs placeholder por regras concretas de campo "unidade" e "segmento"
2. **Resolver C2:** Adicionar CAs funcionais cobrindo: detecção de ausência → chamada ao Abax → processamento retorno → atualização base
3. **Resolver C3:** Definir estratégia de falha: timeout máximo, política de retry, comportamento de fallback, fila assíncrona vs. síncrono
4. **Resolver M1:** Esclarecer "dia 01" com data absoluta ou trigger específico
5. **Reescrever DoD:** Incluir testes, code review, observabilidade, documentação
6. **Incorporar PDF:** Revisar "Abax x Cora preços - Final.pdf" e extrair especificações técnicas para os CAs
7. **Criar stories filhas:** Decompor os 7 FRs em stories técnicas com estimativas
8. **Declarar Out of Scope:** Explicitar o que NÃO está coberto nesta feature

### Final Note

Assessment identificou **4 violações críticas** e **4 issues maiores** em 7 categorias.
Nenhum dos 7 FRs possui cobertura em stories. DoR score de 58/100 é consistente com os gaps encontrados.
Feature precisa de sessão de refinamento com PO + equipe técnica antes de prosseguir.

---

*Avaliado por: bmad-check-implementation-readiness | 2026-06-03 | Fonte: Azure DevOps WI #2492886*
