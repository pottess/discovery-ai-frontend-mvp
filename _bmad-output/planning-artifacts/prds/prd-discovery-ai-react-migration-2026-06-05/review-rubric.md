# PRD Quality Review — Migração Frontend Discovery AI → React + Vite + Celebration

## Overall verdict

PRD forte e raro para o tipo "capability spec / re-plataforma": a tese é honesta (o `app.js` de 15.5k linhas não sustenta o MVP), o escopo é cirurgicamente delimitado a frontend, e quase todo FR carrega ao menos uma consequência testável concreta — exatamente o que story creation precisa. O que está em risco é (a) a definição operacional de "paridade comportamental", que é a métrica primária (SM-1) mas não tem critério de aceite verificável sem o checklist por tela que o próprio PRD promete e não anexa, e (b) um punhado de FRs cujo "done" depende de assumptions ainda abertas (cobertura de testes, URLs hash legadas). Nenhum bloqueia green-light, mas SM-1 e a lacuna do checklist de paridade merecem fechamento antes de fatiar épicos.

## Decision-readiness — strong

O documento decide de fato e mostra o que foi abdicado. A estratégia big-bang é nomeada explicitamente (§0, §B) com o trade-off real exposto no risco R-D ("Perda de paridade comportamental no big-bang"), não dissolvida em neutralidade. As Open Questions (§8) são genuínas: distingue resolvidas (com `~~strikethrough~~` + data + justificativa, ex. Q1 React 19) das abertas reais (Q4 URLs hash, Q6 dono do conteúdo es/en, Q8 política de versão). Q1 é um exemplo modelar de decision-readiness: não só resolve, mas registra a armadilha residual ("a tag `latest` aponta para alpha — fixar 2.8.1 exata").

Os `[NOTE FOR PM]` caem em tensões reais (FR-2: regra `components-rule.md` não existe no repo; FR-3/Notes: compatibilidade de URLs hash), não em checkpoints seguros. As counter-métricas SM-C1/SM-C2 são a marca de um autor que antecipou o gaming da métrica ("não inflar wrappers só para satisfazer o barrel"; "não sacrificar paridade por pureza de DS").

### Findings
- **low** Q6 (dono do conteúdo de tradução) fica aberta sem owner nem prazo (§8.6) — Aceitável para chain-top, mas é a única open question que pode travar SM-2 (cobertura i18n nos 3 idiomas) na execução. *Fix:* marcar `[NOTE FOR PM]` indicando que es/en podem entrar como placeholder traduzível sem bloquear FR-5, com tradução real como item de backlog separado.

## Substance over theater — strong

Pouca mobília. Não há persona theater: o §2.3 declara explicitamente que é "ferramenta interna com papel de operador único" e mantém apenas 3 UJs enxutas, justificando a ausência de seção de persona separada — decisão correta de shape (ver dimensão 7). Não há innovation/differentiation theater (apropriado: é re-plataforma interna, não produto competitivo). Os NFRs (§A) escapam do boilerplate porque ancoram em fatos do projeto: performance "≤ protótipo atual" (baseline concreto, não "rápido"), segurança "React escapa por padrão (mantém a postura anti-XSS do protótipo)" — threshold herdado e verificável, não adjetivo.

A Vision (§1) não é intercambiável: cita o `app.js` monolítico nomeado, o design system Celebration, o alinhamento ao padrão Cora Prices e a audiência LATAM+global. Não daria pra colar em outro PRD.

### Findings
*(nenhuma — dimensão limpa.)*

## Strategic coherence — strong

Há tese e os features servem a um arco unificado. A tese: "converter o protótipo validado numa base componentizada/tipada/i18n para destravar a evolução do MVP" (§1). Os 8 grupos de features seguem a tese em ordem de dependência lógica — Fundação Técnica (4.1) → i18n (4.2) → Design System (4.3) → Mock (4.4) → as três fatias de paridade de tela (4.5–4.7) → Baseline de Testes (4.8). Não é backlog com headings: é a cadeia natural de uma re-plataforma (scaffold antes de telas, mock antes de fluxos que o consomem).

Os Success Metrics validam a tese e não medem só atividade: SM-1 (paridade), SM-2 (i18n), SM-3 (conformidade DS) mapeiam 1:1 aos três pilares da migração. Counter-métricas presentes (§7). O kind de MVP é coerente — "platform/foundation" (base padronizada para features futuras, §2.1) com lógica de escopo que casa (paridade, não novas capacidades).

### Findings
- **low** SM-5 (tempo de carregamento ≤ protótipo) é a única SM secundária frouxamente ligada à tese e ainda `[ASSUMPTION]` (§7) — Performance não é pilar declarado da migração; o risco é virar gate arbitrário. *Fix:* rebaixar para NFR observável (já está em §A) ou fixar tolerância explícita (ex. "dentro de 110% do protótipo") para não bloquear merge por ruído de medição.

## Done-ness clarity — adequate

Esta é a dimensão de maior peso para story creation e o PRD acerta na maioria dos FRs, mas tem duas lacunas que precisam de fechamento. **O que funciona:** quase todo FR tem bloco **Consequences (testable)** com condições verificáveis e concretas — FR-1 ("`npm run build` gera bundle tipado sem erros"; "Mirage não entra no bundle de produção via guard `import.meta.env.DEV`"), FR-8 ("`makeServer()` atrás de `if (import.meta.env.DEV)` com `await import()`"), FR-9 (lista nominal de rotas `/api/discovery/kickoff|status|resume|...`), FR-14 ("Upload de evidência transiciona para `INSIGHT_REVIEW_PENDING`"). Isso é exemplar — um engenheiro sabe o que construir e como testar.

**O que falha:** o conceito de "**paridade comportamental**" carrega o peso de SM-1 (métrica primária, 100% das telas) e dos FR-10..FR-15, mas nunca é definido operacionalmente. R-D mitiga com "checklist de paridade por tela (SM-1)" e §1/§0 dizem que o protótipo é a "spec visual e comportamental" — mas o checklist não existe no PRD nem é referenciado por path. Sem ele, "paridade" não é testável: dois engenheiros divergirão sobre o que conta como reconstruído. FR-15 agrava ("telas interview com **paridade de conteúdo do protótipo**" — conteúdo? comportamento? layout?). Para um PRD chain-top que alimenta stories, este é o gap mais consequente.

Além disso, três FRs têm "done" preso a assumption aberta: FR-16 e SM-6 dependem de "meta de cobertura acordada" que segue `[ASSUMPTION: 60%]` não confirmada — o gate de CI ("falha o build") não pode ser implementado sem o número fechado.

### Findings
- **high** "Paridade comportamental" sem definição operacional nem checklist anexado (§7 SM-1, §4.5–4.7 FR-10..FR-15, R-D) — É a métrica primária e o critério de aceite de 6 FRs, mas não há critério verificável de quando uma tela "tem paridade". *Fix:* anexar (ou referenciar por path) o checklist de paridade por tela que R-D promete, com 3–5 itens objetivos por tela (rotas presentes, ações disparam mesmos endpoints, estados visíveis equivalentes). Sem isso, cada story herda a ambiguidade.
- **medium** FR-16 / SM-6: gate de CI depende de meta de cobertura ainda aberta (§4.8, §7 SM-6, §8.7) — "bloqueia merge em falha" e "cobertura ≥ meta acordada" não são implementáveis enquanto o número for `[ASSUMPTION: 60%]`. *Fix:* fechar a meta (ou declarar "sem gate de cobertura no MVP, apenas suíte verde") para que a story de CI tenha critério de aceite determinístico.
- **medium** FR-15 "paridade de conteúdo" é mais frouxo que os demais FRs (§4.7) — "paridade de conteúdo do protótipo (simulação)" não diz se comportamento/navegação interna da sessão de entrevista está em escopo. *Fix:* especificar se interview-session é tela estática de paridade visual ou tem interação simulada, e listar as consequências testáveis correspondentes.
- **low** FR-13 (rolagem interna) é o FR mais granular do conjunto e parece nota de implementação, não requisito de produto (§4.6) — Não invalida, mas destoa do nível de abstração dos vizinhos. *Fix:* aceitável manter; opcionalmente rebaixar a detalhe de FR-12 (UX do fluxo full-page).

## Scope honesty — strong

Omissões explícitas e bem sinalizadas. §5 (Não-Goals) faz trabalho real e não-óbvio: "não introduzir SSO real (perfil segue mockado)", "não traduzir conteúdo gerado pelos agentes" — coisas que poderiam ser silenciosamente assumidas como dentro. §6.2 separa "fora de escopo MVP" com ponteiros (E2E → pós-MVP; a11y além do Celebration → v2; R1–R9 → PRDs separados). O de-scoping é proposto, não feito em silêncio.

Os `[ASSUMPTION]` estão tagueados inline e indexados em §9 (roundtrip — ver mechanical notes), e a §9 ainda separa explicitamente "Fatos verificados (não são suposições)" de assumptions reais — disciplina acima da média. Densidade de itens abertos: ~9 assumptions + 4 open questions abertas + ~4 `[NOTE FOR PM]`, contra um PRD que se declara `status: draft` e chain-top, não green-light-to-build. Densidade apropriada ao estágio; nenhuma é bloqueante de arquitetura.

### Findings
- **low** Q4/FR-3 (URLs hash legadas) aparece como assumption ("redirecionam — a confirmar"), open question (§8.4) e note for PM simultaneamente — Tripla sinalização do mesmo item aberto; correto, mas pode ler como indecisão. *Fix:* manter uma fonte canônica (Open Q4) e os outros dois apenas referenciarem-na.

## Downstream usability — strong

Excelente para um PRD que alimenta UX/arquitetura/stories. **Glossário (§3) presente e disciplinado** — declara "termos usados verbatim em FRs, UJs e SMs, sem sinônimos" e cumpre: Discovery, Produto, Repositório, Cockpit, Workflow de Agentes, Gate Humano, CSD, Metodologia, Público, Síntese aparecem com a mesma grafia ao longo do doc. A máquina de estados (`DOR_ANALYZING → ... → COMPLETED`) é definida uma vez no glossário e referenciada por nome em FR-9, FR-14, UJ-2 — fonte única, sem drift.

**IDs contíguos e únicos:** FR-1..FR-16 sem gaps; SM-1..SM-6 + SM-C1/C2; UJ-1..UJ-3; riscos R-A..R-E. Cross-references resolvem (SM-1 "Valida FR-3, FR-10..FR-15"; FR-9 referencia o Workflow do glossário). Cada feature mapeia às UJs que realiza ("Realiza UJ-1", "Realiza todas as UJs"), o que dá rastreabilidade reversa para story creation. As seções são pulláveis isoladamente — cross-refs via termos do glossário, não "ver acima".

### Findings
- **low** UJ-3 está em prosa de uma linha enquanto UJ-1/UJ-2 têm estrutura completa (Persona/Entry/Path/Climax/Resolution) (§2.3) — Assimetria; UJ-3 perde os estados nomeados que tornam UJ-1/2 extraíveis para stories. *Fix:* expandir UJ-3 ao mesmo template (entry state, path, resolution) já que FR-11 depende dela para aceite de gestão de Público.

## Shape fit — strong

A forma casa com o produto. O autor reconheceu corretamente que é **ferramenta interna de operador único** e **brownfield/re-plataforma chain-top**, e calibrou: UJs reduzidas e justificadas (§2.3 explicita por que não há persona section), peso jogado em capability spec (Features com FRs aninhados, Glossário, contrato de mock) em vez de jornada emocional. Não está nem over-formalizado (não inflou 6 personas para uma tool single-operator) nem under-formalizado (manteve 3 UJs porque há de fato fluxo multi-tela com gates humanos que stories precisam).

O tratamento brownfield é exemplar: o protótipo vanilla é explicitamente declarado "spec visual e comportamental, não código a preservar" (§0), referências a código existente são precisas e linkadas (`server.js`, `docs/api-contracts-frontend.md`, CLAUDE.md §12 R1–R9), e o que é novo (React/Celebration/Mirage) é distinguido do que é herdado (contrato de API, máquina de estados). As assumptions importadas do Cora Prices são marcadas como tal (FR-2: `components-rule.md` "veio do Cora Prices, precisa ser portado").

### Findings
*(nenhuma — o shape está corretamente calibrado para internal tool / brownfield / chain-top.)*

## Mechanical notes

- **Glossary drift:** nenhum significativo. Grafias consistentes (Discovery, Cockpit do Discovery, Workflow de Agentes, Gate Humano). Pequena variação estilística "Camada de Mock (Mirage)" no glossário vs "Mock mirage.js" / "Camada de Dados Mockada" nos títulos de feature — não chega a ambiguidade. *(low)*
- **ID continuity:** FR-1..16 contíguos e únicos; SM-1..6 + C1/C2 ok; UJ-1..3 ok; R-A..R-E ok (R-A riscado mas preservado como histórico, correto). Nenhum gap ou duplicata.
- **Cross-refs:** resolvem. SM↔FR ("Valida FR-x"), Feature↔UJ ("Realiza UJ-x"), Open Questions↔seções. Links relativos para CLAUDE.md, docs/index.md, api-contracts-frontend.md — não verifiquei a existência física dos arquivos linkados, mas os paths são plausíveis e consistentes com o repo.
- **Assumptions Index roundtrip:** §9 bem mantido. Assumptions inline (Vite 7.x, react-i18next, Vitest/RTL 60%, estrutura Cora Prices, barrel, react-router>=6, URLs hash, rhf+zod, SM-5 Lighthouse) todas aparecem no índice. Bônus: §9 separa "Fatos verificados ≠ suposições" — disciplina acima do exigido. Não encontrei assumption órfã (indexada sem inline) nem inline sem índice.
- **UJ protagonist naming:** UJ-1 (Mariana) e UJ-2 (Bruno) têm protagonista nomeado com contexto inline; UJ-3 usa "Equipe de produto / Designer/PM" genérico — único caso sem nome próprio (ver finding em Downstream usability).
- **Required sections:** todas presentes para o stake (Vision, Usuário-Alvo, Glossário, Features/FRs, Não-Goals, Escopo MVP, SMs, Open Questions, Assumptions Index, NFRs, Constraints, Integração, Riscos). Nada faltando para chain-top internal tool.
