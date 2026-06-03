const http = require("node:http");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const ROOT_DIR = __dirname;
const DEFAULT_CREWAI_POLL_INTERVAL_MS = 15000;
const DEFAULT_CREWAI_POLL_TIMEOUT_MS = 600000;
const DEFAULT_DISCOVERY_AI_POLL_INTERVAL_MS = 5000;
const SUPPORTED_INPUT_MODES = ["manual_intake", "manual_upload", "mock_data"];
const FUTURE_INTEGRATIONS = [
  "microsoft_teams",
  "outlook",
  "datadog",
  "tech_metrics",
  "product_databases",
  "analytics_tools",
  "research_repositories",
  "jira_linear",
  "slack",
  "figma",
  "document_storage",
];
const MOCK_AGENT_STATES = {
  DISCOVERY_CREATED: "DISCOVERY_CREATED",
  DOR_ANALYZING: "DOR_ANALYZING",
  RESEARCH_APPROVAL_PENDING: "RESEARCH_APPROVAL_PENDING",
  EVIDENCE_UPLOAD_PENDING: "EVIDENCE_UPLOAD_PENDING",
  PRIMARY_RESEARCH_PROCESSING: "PRIMARY_RESEARCH_PROCESSING",
  INSIGHT_REVIEW_PENDING: "INSIGHT_REVIEW_PENDING",
  OPPORTUNITY_REVIEW_PENDING: "OPPORTUNITY_REVIEW_PENDING",
  RECOMMENDATION_RUNNING: "RECOMMENDATION_RUNNING",
  HANDOFF_RUNNING: "HANDOFF_RUNNING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
};
const MOCK_AGENT_STATUSES = {
  RUNNING: "running",
  WAITING_FOR_HUMAN: "waiting_for_human",
  COMPLETED: "completed",
  FAILED: "failed",
};
const PUBLIC_FILE_PATHS = new Set(["/index.html", "/styles.css", "/app.js", "/config.vercel.js", "/demo-config.js"]);
const PUBLIC_ASSET_DIRS = ["/assets/"];
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};
const mockAgentRuns = new Map();

const LOCAL_DATA_DIR = path.join(ROOT_DIR, "backend", "data");
const LOCAL_COLLECTIONS = {
  "products": { file: "products.json", defaultValue: [] },
  "discoveries": { file: "discoveries.json", defaultValue: [] },
  "created-discoveries": { file: "created-discoveries.json", defaultValue: [] },
  "product-favorites-by-user": { file: "product-favorites-by-user.json", defaultValue: {} },
  "favorite-discovery-ids": { file: "favorite-discovery-ids.json", defaultValue: [] },
  "product-audience-by-product": { file: "product-audience-by-product.json", defaultValue: {} },
  "research-activity-users": { file: "research-activity-users.json", defaultValue: {} },
  "local-mock-runs": { file: "local-mock-runs.json", defaultValue: {} },
};

function loadEnvFile(filePath = path.join(ROOT_DIR, ".env")) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(payload));
}

function sendText(response, statusCode, message, headers = {}) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    ...headers,
  });
  response.end(message);
}

function getAccessCredentials() {
  const basicAuthEnabled = process.env.BASIC_AUTH_ENABLED === "true";
  if (basicAuthEnabled) {
    return {
      enabled: true,
      username: process.env.BASIC_AUTH_USER || "",
      password: process.env.BASIC_AUTH_PASSWORD || "",
    };
  }

  const username = process.env.DISCOVERY_ACCESS_USER || "";
  const password = process.env.DISCOVERY_ACCESS_PASSWORD || "";
  return {
    enabled: Boolean(username || password),
    username,
    password,
  };
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function handleAccessControl(request, response, url) {
  if (url.pathname === "/health" || url.pathname === "/healthz") {
    return false;
  }

  const { enabled, username, password } = getAccessCredentials();
  if (!enabled) {
    return false;
  }

  if (!username || !password) {
    sendJson(response, 500, {
      error: "Controle de acesso incompleto.",
      message: "Configure BASIC_AUTH_USER e BASIC_AUTH_PASSWORD, ou DISCOVERY_ACCESS_USER e DISCOVERY_ACCESS_PASSWORD, juntos.",
    });
    return true;
  }

  const authorization = request.headers.authorization || "";
  const [scheme, encodedCredentials] = authorization.split(" ");

  if (scheme !== "Basic" || !encodedCredentials) {
    sendText(response, 401, "Autenticação necessária.", {
      "WWW-Authenticate": 'Basic realm="Discovery V0", charset="UTF-8"',
    });
    return true;
  }

  let providedUsername = "";
  let providedPassword = "";
  try {
    const decoded = Buffer.from(encodedCredentials, "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    providedUsername = separatorIndex >= 0 ? decoded.slice(0, separatorIndex) : decoded;
    providedPassword = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : "";
  } catch {
    sendText(response, 401, "Autenticação inválida.", {
      "WWW-Authenticate": 'Basic realm="Discovery V0", charset="UTF-8"',
    });
    return true;
  }

  if (!safeEqual(providedUsername, username) || !safeEqual(providedPassword, password)) {
    sendText(response, 401, "Autenticação inválida.", {
      "WWW-Authenticate": 'Basic realm="Discovery V0", charset="UTF-8"',
    });
    return true;
  }

  return false;
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("Payload muito grande."));
        request.destroy();
      }
    });
    request.on("end", () => {
      if (!body.trim()) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("JSON inválido."));
      }
    });
    request.on("error", reject);
  });
}

function ensureDataDir() {
  if (!fs.existsSync(LOCAL_DATA_DIR)) {
    fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
  }
}

function readLocalJson(collection) {
  const info = LOCAL_COLLECTIONS[collection];
  const defaultValue = JSON.parse(JSON.stringify(info.defaultValue));
  const filePath = path.join(LOCAL_DATA_DIR, info.file);
  try {
    if (!fs.existsSync(filePath)) return defaultValue;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return defaultValue;
  }
}

function saveLocalJson(collection, data) {
  ensureDataDir();
  const info = LOCAL_COLLECTIONS[collection];
  const filePath = path.join(LOCAL_DATA_DIR, info.file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

function resolveCollection(response, name) {
  if (Object.prototype.hasOwnProperty.call(LOCAL_COLLECTIONS, name)) {
    return LOCAL_COLLECTIONS[name];
  }
  sendJson(response, 404, {
    error: "Coleção não encontrada.",
    collection: name,
    allowedCollections: Object.keys(LOCAL_COLLECTIONS),
  });
  return null;
}

function getCrewAiConfig() {
  return {
    token: process.env.CREWAI_API_KEY || process.env.CREWAI_BEARER_TOKEN,
    baseUrl: (process.env.CREWAI_API_BASE_URL || "").replace(/\/+$/, ""),
  };
}

function getDiscoveryAiConfig() {
  return {
    baseUrl: (process.env.DISCOVERY_AI_API_BASE_URL || "").replace(/\/+$/, ""),
  };
}

function getPositiveIntegerEnv(name, fallback) {
  const value = Number.parseInt(process.env[name] || "", 10);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function normalizeFrontendApiMode(mode = "") {
  const normalizedMode = String(mode || "").trim().toLowerCase();
  if (normalizedMode === "mock" || normalizedMode === "demo" || normalizedMode === "local_mock") {
    return "mock";
  }
  if (normalizedMode === "mvp_backend" || normalizedMode === "legacy_crewai") {
    return normalizedMode;
  }
  return "";
}

function getFrontendApiMode() {
  const configuredMode = normalizeFrontendApiMode(process.env.DISCOVERY_FRONTEND_API_MODE);
  if (configuredMode) {
    return configuredMode;
  }

  if (process.env.DISCOVERY_AI_API_BASE_URL) {
    return "mvp_backend";
  }

  if (process.env.CREWAI_API_KEY || process.env.CREWAI_BEARER_TOKEN) {
    return "legacy_crewai";
  }

  return "mock";
}

function getAgentMode() {
  const frontendApiMode = getFrontendApiMode();
  const hasDiscoveryBackend = Boolean(getDiscoveryAiConfig().baseUrl);
  const hasCrewAiBackend = Boolean(getCrewAiConfig().baseUrl && getCrewAiConfig().token);

  return frontendApiMode !== "mock" && (hasDiscoveryBackend || hasCrewAiBackend) ? "crewai" : "mock";
}

function getClientConfig() {
  return {
    mvpMode: true,
    agentWorkflowEnabled: true,
    conversationalAssistantEnabled: false,
    externalIntegrationsEnabled: false,
    agentMode: getAgentMode(),
    supportedInputModes: SUPPORTED_INPUT_MODES,
    futureIntegrations: FUTURE_INTEGRATIONS,
    featureFlags: {
      researchAssistant: false,
      conversationalAssistant: false,
      agentWorkflow: true,
      externalIntegrations: false,
    },
    frontendApiMode: getFrontendApiMode(),
    crewAiPollIntervalMs: getPositiveIntegerEnv("CREWAI_POLL_INTERVAL_MS", DEFAULT_CREWAI_POLL_INTERVAL_MS),
    crewAiPollTimeoutMs: getPositiveIntegerEnv("CREWAI_POLL_TIMEOUT_MS", DEFAULT_CREWAI_POLL_TIMEOUT_MS),
    discoveryAiPollIntervalMs: getPositiveIntegerEnv("DISCOVERY_AI_POLL_INTERVAL_MS", DEFAULT_DISCOVERY_AI_POLL_INTERVAL_MS),
  };
}

function configureTlsForLocalDevelopment() {
  if (process.env.CREWAI_ALLOW_SELF_SIGNED === "true") {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }
}

function validateStartupConfig() {
  if (process.env.BASIC_AUTH_ENABLED === "true" && (!process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_PASSWORD)) {
    console.warn("BASIC_AUTH_ENABLED=true, mas BASIC_AUTH_USER e/ou BASIC_AUTH_PASSWORD não foram configurados. Requisições protegidas retornarão erro 500 até corrigir a configuração.");
  }
}

async function forwardCrewAiRequest(response, endpoint, options = {}) {
  const { token, baseUrl } = getCrewAiConfig();
  if (!baseUrl) {
    sendJson(response, 501, {
      error: "CREWAI_API_BASE_URL não configurado.",
      message: "Configure CREWAI_API_BASE_URL e CREWAI_API_KEY antes de chamar endpoints /api/crewai/*.",
      upstream: {
        endpoint,
      },
    });
    return;
  }

  if (!token) {
    sendJson(response, 500, {
      error: "CREWAI_API_KEY não configurado.",
      message: "Configure CREWAI_API_KEY antes de chamar endpoints /api/crewai/*.",
    });
    return;
  }

  try {
    const upstreamResponse = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.body ? { "Content-Type": "application/json" } : {}),
      },
    });
    const text = await upstreamResponse.text();
    let payload;

    try {
      payload = text ? JSON.parse(text) : {};
    } catch {
      payload = { raw: text };
    }

    if (!upstreamResponse.ok) {
      sendJson(response, upstreamResponse.status, {
        error: payload.error || "Erro retornado pela CrewAI.",
        message: payload.message || payload.detail || payload.raw || `CrewAI respondeu com HTTP ${upstreamResponse.status}.`,
        upstream: {
          status: upstreamResponse.status,
          endpoint,
          baseUrl,
        },
        crewAi: payload,
      });
      return;
    }

    sendJson(response, upstreamResponse.status, payload);
  } catch (error) {
    sendJson(response, 502, {
      error: "Falha ao conectar com a CrewAI.",
      message: error.cause?.message || error.message,
    });
  }
}

async function forwardDiscoveryAiRequest(response, endpoint, options = {}) {
  const { baseUrl } = getDiscoveryAiConfig();
  if (!baseUrl) {
    sendJson(response, 500, {
      error: "DISCOVERY_AI_API_BASE_URL não configurado.",
      message: "Configure DISCOVERY_AI_API_BASE_URL no .env antes de chamar endpoints /api/discovery/*.",
      upstream: {
        endpoint,
      },
    });
    return;
  }

  try {
    const upstreamResponse = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.body ? { "Content-Type": "application/json" } : {}),
      },
    });
    const text = await upstreamResponse.text();
    let payload;

    try {
      payload = text ? JSON.parse(text) : {};
    } catch {
      payload = { raw: text };
    }

    if (!upstreamResponse.ok) {
      sendJson(response, upstreamResponse.status, {
        error: payload.error || "Erro retornado pelo Discovery AI backend.",
        message: payload.message || payload.detail || payload.raw || `Discovery AI backend respondeu com HTTP ${upstreamResponse.status}.`,
        upstream: {
          status: upstreamResponse.status,
          endpoint,
          baseUrl,
        },
        discoveryAi: payload,
      });
      return;
    }

    sendJson(response, upstreamResponse.status, payload);
  } catch (error) {
    sendJson(response, 502, {
      error: "Falha ao conectar com o Discovery AI backend.",
      message: error.cause?.message || error.message,
      upstream: {
        endpoint,
        baseUrl,
      },
    });
  }
}

function getRequiredPathId(response, pathname, prefix, fieldName) {
  const value = decodeURIComponent(pathname.replace(prefix, "")).trim();
  if (!value) {
    sendJson(response, 400, { error: `${fieldName} ausente.` });
    return "";
  }

  return value;
}

function shouldUseMockAgentAdapter() {
  return getFrontendApiMode() === "mock" || !getDiscoveryAiConfig().baseUrl;
}

function getDiscoveryInputs(body = {}) {
  return body && typeof body === "object" && body.inputs && typeof body.inputs === "object" ? body.inputs : body || {};
}

function createMockAgentRun(body = {}) {
  const inputs = getDiscoveryInputs(body);
  const now = new Date().toISOString();
  const discoveryId = String(inputs.discovery_id || `mock-discovery-${Date.now()}`);
  const runId = `mock-agent-run-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
  const run = {
    run_id: runId,
    discovery_id: discoveryId,
    current_state: MOCK_AGENT_STATES.DISCOVERY_CREATED,
    status: MOCK_AGENT_STATUSES.RUNNING,
    adapter: "mock_agent",
    mock_agent_outputs: true,
    inputs,
    evidence: [],
    events: [],
    created_at: now,
    updated_at: now,
  };

  mockAgentRuns.set(runId, run);
  persistMockAgentRuns();
  return run;
}

function getMockAgentRun(runId = "") {
  return mockAgentRuns.get(String(runId || "").trim()) || null;
}

function setMockAgentRun(run = {}) {
  const updatedRun = {
    ...run,
    updated_at: new Date().toISOString(),
  };
  mockAgentRuns.set(updatedRun.run_id, updatedRun);
  persistMockAgentRuns();
  return updatedRun;
}

function serializeMockAgentRuns() {
  const obj = {};
  for (const [runId, run] of mockAgentRuns) {
    obj[runId] = run;
  }
  return obj;
}

function persistMockAgentRuns() {
  try {
    saveLocalJson("local-mock-runs", serializeMockAgentRuns());
  } catch {
    // Persistence is best-effort.
  }
}

function hydrateMockAgentRunsFromFile() {
  const stored = readLocalJson("local-mock-runs");
  if (!stored || typeof stored !== "object" || Array.isArray(stored)) {
    return;
  }
  for (const [runId, run] of Object.entries(stored)) {
    if (run && typeof run === "object" && run.run_id && run.current_state) {
      mockAgentRuns.set(String(runId), run);
    }
  }
}

function getSeedProducts() {
  return [
    {
      id: "cora-promocoes",
      name: "Cora Promoções",
      tower: "Comercial",
      tribe: "Revenue",
      category: "Revenue",
      description: "Produto para planejar, acompanhar e otimizar mecânicas promocionais no comercial.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 1,
      progressCount: 0,
      favorite: false,
      about: "Teste A/B de elementos de gamificação para aumentar engajamento com promoções.",
      metrics: ["Adesão promocional", "Recorrência", "ROI da promoção"],
      squad: "Revenue Squad",
      participants: "Bruno Lima, Camila Rocha",
      productTeam: { designer: "Marina Costa", pm: "Bruno Lima", architect: "Diego Santos", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "25/04/2026",
      end: "20/05/2026",
      artifacts: ["Análise", "CSD", "Plano de validação"],
      personas: [
        {
          id: "persona-promo-manager",
          name: "Gestor de Promoções",
          type: "Usuário interno",
          description: "Responsável por planejar, configurar e acompanhar campanhas promocionais.",
          goals: ["Criar promoções com rapidez", "Entender impacto esperado", "Reduzir retrabalho"],
          pains: ["Baixa visibilidade", "Dependência de planilhas", "Aprovações fora do fluxo"],
        },
        {
          id: "persona-growth-crm-analyst",
          name: "Analista de Growth/CRM",
          type: "Usuário interno",
          description: "Analisa segmentos, ativa comunicações e acompanha conversão das campanhas.",
          goals: ["Segmentar públicos com precisão", "Aumentar adesão", "Mensurar conversão"],
          pains: ["Dados dispersos", "Janela curta para ajustes", "Dificuldade para comparar campanhas"],
        },
        {
          id: "persona-promo-eligible-user",
          name: "Usuário final elegível à promoção",
          type: "Usuário impactado",
          description: "Cliente ou usuário que precisa entender regras, benefícios e próximos passos da promoção.",
          goals: ["Encontrar promoções relevantes", "Entender regras rapidamente", "Receber benefício sem fricção"],
          pains: ["Regras pouco claras", "Comunicação tardia", "Dúvidas sobre elegibilidade"],
        },
        {
          id: "persona-support-promo-rules",
          name: "Atendimento/Suporte consultando regras de promoção",
          type: "Usuário interno",
          description: "Time que responde dúvidas operacionais e precisa consultar regras válidas com segurança.",
          goals: ["Resolver dúvidas com agilidade", "Evitar respostas divergentes", "Escalar exceções corretamente"],
          pains: ["Histórico incompleto", "Regras em múltiplas fontes", "Alto volume de perguntas repetidas"],
        },
      ],
      stakeholders: [
        { id: "stakeholder-head-product", name: "Head de Produto", area: "Produto", role: "Decision maker", description: "Aprova prioridades e acompanha impacto estratégico.", interest: "Clareza de impacto, risco e priorização" },
        { id: "stakeholder-marketing-growth", name: "Marketing/Growth", area: "Growth", role: "Influenciador", description: "Define estratégia de comunicação e metas de aquisição ou engajamento.", interest: "Aumento de adesão, recorrência e eficiência das campanhas" },
        { id: "stakeholder-commercial-revenue", name: "Comercial/Revenue", area: "Revenue", role: "Sponsor de negócio", description: "Acompanha performance comercial, margem e coerência das mecânicas promocionais.", interest: "ROI da promoção, governança comercial e velocidade de execução" },
        { id: "stakeholder-finance", name: "Financeiro", area: "Financeiro", role: "Aprovador", description: "Avalia impacto financeiro, orçamento e contabilização dos incentivos.", interest: "Controle de custo, previsibilidade e conciliação" },
        { id: "stakeholder-data-bi", name: "Data/BI", area: "Dados", role: "Parceiro técnico", description: "Garante métricas, segmentações e leitura confiável dos resultados.", interest: "Disponibilidade, qualidade e rastreabilidade dos dados" },
        { id: "stakeholder-engineering", name: "Engenharia", area: "Tecnologia", role: "Delivery", description: "Avalia esforço técnico, dependências e riscos de implementação.", interest: "Escopo claro, critérios de aceite e integrações estáveis" },
        { id: "stakeholder-compliance-legal", name: "Compliance/Legal", area: "Governança", role: "Guardião de risco", description: "Valida regras, elegibilidade, comunicação e obrigações regulatórias.", interest: "Redução de risco legal, transparência e aderência às políticas" },
      ],
    },
    {
      id: "cora-precos",
      name: "Cora Preços",
      tower: "Comercial",
      tribe: "Revenue",
      category: "Revenue",
      description: "Produto usado para acompanhar variações de preço, margem e volume em dashboards operacionais.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 0,
      progressCount: 1,
      favorite: true,
      about: "Dashboard operacional para acompanhar desvios e investigar anomalias.",
      metrics: ["Preço médio", "Variação de margem", "Volume monitorado"],
      squad: "Pricing Squad",
      participants: "Bruno Lima, Camila Rocha",
      productTeam: { designer: "Camila Rocha", pm: "Bruno Lima", architect: "Gustavo Oliveira", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "25/04/2026",
      end: "20/05/2026",
      artifacts: ["Análise", "Protótipo", "Critérios de sucesso"],
      personas: [
        {
          id: "persona-pricing-analyst",
          name: "Analista de Pricing",
          type: "Usuário interno",
          description: "Monitora variações de preço, margem e volume para detectar desvios operacionais.",
          goals: ["Identificar anomalias rapidamente", "Explicar variações de margem", "Priorizar investigações"],
          pains: ["Cruzamento manual de dados", "Baixa rastreabilidade", "Alertas sem contexto"],
        },
        {
          id: "persona-revenue-manager",
          name: "Gerente de Revenue",
          type: "Usuário interno",
          description: "Acompanha resultados comerciais e toma decisões sobre preço, desconto e margem.",
          goals: ["Proteger margem", "Comparar cenários", "Atuar antes do impacto escalar"],
          pains: ["Indicadores dispersos", "Demora para consolidar causas", "Baixa previsibilidade"],
        },
        {
          id: "persona-sales-coordinator",
          name: "Coordenador Comercial",
          type: "Usuário impactado",
          description: "Consulta preços e justificativas para orientar negociações e execução em campo.",
          goals: ["Entender preço vigente", "Reduzir retrabalho", "Responder dúvidas do time comercial"],
          pains: ["Divergência de informação", "Regras pouco visíveis", "Dependência de outras áreas"],
        },
        {
          id: "persona-data-analyst",
          name: "Analista de Dados/BI",
          type: "Parceiro interno",
          description: "Mantém datasets e análises que sustentam as decisões de pricing.",
          goals: ["Garantir qualidade dos dados", "Automatizar análises", "Reduzir consultas ad hoc"],
          pains: ["Fontes inconsistentes", "Definições de métrica variáveis", "Pedidos urgentes recorrentes"],
        },
      ],
      stakeholders: [
        { id: "stakeholder-head-product", name: "Head de Produto", area: "Produto", role: "Decision maker", description: "Aprova prioridades e acompanha impacto estratégico.", interest: "Clareza de impacto, risco e priorização" },
        { id: "stakeholder-commercial-revenue", name: "Comercial/Revenue", area: "Revenue", role: "Sponsor de negócio", description: "Acompanha performance comercial, margem e oportunidades de receita.", interest: "Proteção de margem, velocidade de reação e consistência comercial" },
        { id: "stakeholder-finance", name: "Financeiro", area: "Financeiro", role: "Aprovador", description: "Avalia impactos financeiros de variações e políticas de preço.", interest: "Margem, previsibilidade e governança financeira" },
        { id: "stakeholder-data-bi", name: "Data/BI", area: "Dados", role: "Parceiro técnico", description: "Garante métricas confiáveis, segmentações e leitura de performance.", interest: "Qualidade, disponibilidade e rastreabilidade dos dados" },
        { id: "stakeholder-engineering", name: "Engenharia", area: "Tecnologia", role: "Delivery", description: "Avalia esforço técnico, integrações e estabilidade do dashboard.", interest: "Escopo claro, dependências mapeadas e critérios de aceite" },
      ],
    },
    {
      id: "cora-agreements",
      name: "Cora Agreements",
      tower: "Comercial",
      tribe: "Revenue",
      category: "Revenue",
      description: "O Cora Acordos centraliza, organiza e automatiza a gestão dos acordos comerciais da Ambev, reunindo tudo em um único lugar.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 0,
      progressCount: 1,
      favorite: true,
      about: "Gestão de acordos comerciais, regras de negócio e evidências para aprovação.",
      metrics: ["Acordos ativos", "Tempo de aprovação", "Pendências"],
      squad: "Revenue Squad",
      participants: "Ana Souza, Rafael Nunes",
      productTeam: { designer: "Ana Souza", pm: "Rafael Nunes", architect: "Renato Lima", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "02/05/2026",
      end: "28/05/2026",
      artifacts: ["Mapa de jornada", "Requisitos", "Protótipo"],
    },
    {
      id: "cora-assortment",
      name: "Cora Assortment",
      tower: "Comercial",
      tribe: "Revenue",
      category: "Revenue",
      description: "Produto para apoiar decisões de sortimento, cobertura e mix ideal por contexto comercial.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 1,
      progressCount: 1,
      favorite: false,
      about: "Priorização de sortimento para melhorar cobertura e reduzir rupturas comerciais.",
      metrics: ["Cobertura do mix", "Ruptura", "Aderência por canal"],
      squad: "Revenue Squad",
      participants: "Marina Costa, João Vidal",
      productTeam: { designer: "Marina Costa", pm: "João Vidal", architect: "Gustavo Oliveira", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "18/04/2026",
      end: "22/05/2026",
      artifacts: ["Análise", "Matriz de oportunidade", "Roteiro"],
    },
    {
      id: "cora-coolers",
      name: "Cora Coolers",
      tower: "Comercial",
      tribe: "Service Level",
      category: "Service Level",
      description: "Produto para monitorar disponibilidade, instalação, manutenção e performance de coolers.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 0,
      progressCount: 0,
      favorite: false,
      about: "Acompanhamento de coolers para melhorar nível de serviço e visibilidade operacional.",
      metrics: ["Coolers ativos", "SLA de manutenção", "Instalações pendentes"],
      squad: "Service Level Squad",
      participants: "Lia Martins, Pedro Campos",
      productTeam: { designer: "Lia Martins", pm: "Pedro Campos", architect: "Diego Santos", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "08/04/2026",
      end: "30/04/2026",
      artifacts: ["Entrevistas", "Análise", "Plano operacional"],
    },
    {
      id: "cora-credito",
      name: "Cora Crédito",
      tower: "Comercial",
      tribe: "Finance",
      category: "Finance",
      description: "Produto para apoiar análise, concessão e acompanhamento de crédito comercial.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 0,
      progressCount: 0,
      favorite: false,
      about: "Entendimento de critérios, riscos e fricções na jornada de crédito comercial.",
      metrics: ["Limite utilizado", "Risco de crédito", "Tempo de aprovação"],
      squad: "Finance Squad",
      participants: "Carla Dias, Hugo Alves",
      productTeam: { designer: "Carla Dias", pm: "Hugo Alves", architect: "Renato Lima", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "12/04/2026",
      end: "04/05/2026",
      artifacts: ["Análise", "Critérios", "Síntese"],
    },
    {
      id: "cora-payments",
      name: "Cora Payments",
      tower: "Comercial",
      tribe: "Finance",
      category: "Finance",
      description: "Produto para acompanhamento de pagamentos, liquidações e conciliações financeiras.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 1,
      progressCount: 0,
      favorite: false,
      about: "Pesquisa sobre divergências no fechamento e trilhas de auditoria.",
      metrics: ["Pagamentos processados", "Divergências abertas", "Tempo de fechamento"],
      squad: "Finance Squad",
      participants: "Carla Dias, Hugo Alves",
      productTeam: { designer: "Carla Dias", pm: "Hugo Alves", architect: "Renato Lima", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "12/04/2026",
      end: "04/05/2026",
      artifacts: ["Análise", "Requisitos", "Síntese"],
    },
    {
      id: "cora-settlement",
      name: "Cora Settlement",
      tower: "Comercial",
      tribe: "Finance",
      category: "Finance",
      description: "Produto para dar visibilidade ao settlement e reduzir retrabalho no fechamento financeiro.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 0,
      progressCount: 1,
      favorite: false,
      about: "Mapeamento de conciliação, liquidação e pontos de retrabalho no settlement.",
      metrics: ["Tempo de liquidação", "Itens pendentes", "Retrabalho"],
      squad: "Finance Squad",
      participants: "Carla Dias, Hugo Alves",
      productTeam: { designer: "Carla Dias", pm: "Hugo Alves", architect: "Renato Lima", arquiteto: "", gpm: "Patrícia Gomes" },
      start: "12/04/2026",
      end: "04/05/2026",
      artifacts: ["Análise", "Mapa de processo", "Plano de validação"],
    },
    {
      id: "cora-transportes",
      name: "Cora Transportes",
      tower: "Comercial",
      tribe: "Last Mile",
      category: "Last Mile",
      area: "Supply Chain",
      description: "Sistema de gestão logística end-to-end para distribuição de bebidas. Inclui rastreamento GPS, otimização de rotas, gestão de motoristas e previsibilidade de entregas.",
      lastActivity: "20/11/2025",
      discoveryCount: 1,
      doneCount: 1,
      progressCount: 0,
      favorite: true,
      about: "Sistema de gestão logística end-to-end para distribuição de bebidas. Inclui rastreamento GPS, otimização de rotas, gestão de motoristas e previsibilidade de entregas.",
      metrics: ["SLA por rota", "Atrasos críticos", "Tempo de resposta"],
      squad: "Last Mile Squad",
      participants: "Bruno Lima, Camila Rocha",
      productTeam: { designer: "Camila Rocha", pm: "Carlos Mendes", architect: "Ana Ferreira", arquiteto: "", gpm: "Lucas Martins" },
      start: "25/04/2026",
      end: "20/05/2026",
      artifacts: [
        { id: "analise-mercado-q1-2026", productId: "cora-transportes", title: "Análise de Mercado Q1 2026", date: "10/05/2026", type: "document" },
        { id: "roadmap-produto", productId: "cora-transportes", title: "Roadmap do Produto", date: "08/05/2026", type: "roadmap" },
        { id: "pesquisa-satisfacao", productId: "cora-transportes", title: "Pesquisa de Satisfação", date: "05/05/2026", type: "document" },
      ],
    },
  ];
}

function getSeedDiscoveries() {
  return [
    {
      id: "dashboard-operacional",
      productId: "cora-precos",
      product: "Cora Preços",
      title: "Dashboard operacional",
      description: "Métricas em tempo real para acompanhar desvios de preço e demanda.",
      status: "1/3 concluídos",
      insight: "Usuários precisam comparar variação de preço, margem e volume na mesma leitura.",
      next: "Validar a visualização de anomalias com operações e produto.",
      updatedAt: "2026-05-20T12:00:00.000Z",
    },
    {
      id: "cora-transportes",
      productId: "cora-transportes",
      product: "Logística",
      title: "Cora Transportes",
      description: "Mapeamento de gargalos em rotas, SLA e comunicação operacional.",
      status: "2/3 concluídos",
      insight: "Atrasos ganham contexto quando o time cruza rota, janela de entrega e comunicação.",
      next: "Consolidar critérios de SLA e criar mapa de exceções.",
      updatedAt: "2026-05-18T12:00:00.000Z",
    },
    {
      id: "conciliacao-de-pagamentos",
      productId: "cora-payments",
      product: "Pagamentos",
      title: "Conciliação de pagamentos",
      description: "Validação de hipóteses para reduzir retrabalho no fechamento.",
      status: "3/3 concluídos",
      insight: "A principal dor é explicar divergências sem depender de planilhas paralelas.",
      next: "Transformar achados em requisitos para trilha de auditoria.",
      updatedAt: "2026-05-16T12:00:00.000Z",
    },
    {
      id: "alertas-inteligentes",
      productId: "cora-settlement",
      product: "Operações",
      title: "Alertas inteligentes",
      description: "Priorização de alertas para analistas com base em impacto e urgência.",
      status: "1/3 concluídos",
      insight: "O time quer priorização por impacto, não apenas uma fila cronológica.",
      next: "Testar critério de severidade com três cenários reais.",
      updatedAt: "2026-05-14T12:00:00.000Z",
    },
    {
      id: "onboarding-de-produto",
      productId: "cora-promocoes",
      product: "Growth",
      title: "Onboarding de produto",
      description: "Clareza da primeira ação útil para novos usuários.",
      status: "0/3 concluídos",
      insight: "A primeira ação útil ainda não está clara para novos usuários.",
      next: "Entrevistar clientes que ativaram em menos de sete dias.",
      updatedAt: "2026-05-12T12:00:00.000Z",
    },
    {
      id: "relatorio-de-repasses",
      productId: "cora-payments",
      product: "Financeiro",
      title: "Relatório de repasses",
      description: "Pesquisa sobre origem de divergências e histórico de ajustes.",
      status: "3/3 concluídos",
      insight: "O fechamento precisa mostrar origem da divergência antes da correção.",
      next: "Priorizar exportação e histórico de ajustes.",
      updatedAt: "2026-05-10T12:00:00.000Z",
    },
  ];
}

function seedLocalCollectionIfEmpty(collection, seedData) {
  try {
    const current = readLocalJson(collection);
    if (Array.isArray(current) && current.length === 0) {
      saveLocalJson(collection, seedData);
    }
  } catch {
    // Seed is best-effort.
  }
}

function seedProductsAndDiscoveriesIfEmpty() {
  seedLocalCollectionIfEmpty("products", getSeedProducts());
  seedLocalCollectionIfEmpty("discoveries", getSeedDiscoveries());
}

function sendMockRunNotFound(response, runId = "") {
  sendJson(response, 404, {
    error: "Run de agente mock não encontrada.",
    run_id: runId,
    adapter: "mock_agent",
  });
}

function createMockAgentOutputs(run = {}) {
  const inputs = run.inputs || {};
  const evidence = Array.isArray(run.evidence) ? run.evidence : [];
  const title = inputs.title || "Discovery MVP";
  const objective = inputs.objective || "Validar o workflow de discovery dirigido por agentes.";
  const problem = inputs.problem || "Problema informado manualmente ou por fixture mock.";
  const methodology = inputs.methodology || "optimized";

  return {
    discovery_charter: {
      dor_status: "approved",
      completeness_score: 87,
      problem_statement: problem,
      objective,
      certainties: [
        "O time de produto precisa de um workflow estruturado para conduzir discoveries.",
        "Aprovações humanas são necessárias em etapas críticas do fluxo.",
      ],
      assumptions: [
        "O processo atual de discovery é manual e dependente de planilhas.",
        "O tempo médio de um discovery sem apoio de agentes é superior a 4 semanas.",
      ],
      doubts: [
        "Qual nível de automação os usuários aceitam sem perder controle?",
        "Como integrar evidências externas de forma confiável?",
      ],
      recommendation: "Prosseguir com planejamento de pesquisa. DOR aprovado com score 87/100.",
      output_source: "mock_agent",
    },
    readiness: {
      readiness_status: "ready",
      readiness_score: 87,
      uncertainty_profile: {
        high: ["Critérios de sucesso ainda em alinhamento", "Stakeholders secundários não confirmados"],
        medium: ["Metodologia selecionada pendente de validação com o time"],
        low: [],
      },
      blockers: [],
      next_actions: ["Iniciar planejamento de pesquisa", "Confirmar disponibilidade de participantes"],
      output_source: "mock_agent",
    },
    research_plan_package: {
      summary: `Plano de pesquisa para "${title}" com foco em validar hipóteses sobre o problema declarado.`,
      recommended_methodology: methodology === "optimized" ? "Pesquisa Otimizada" : "Exploratória",
      method_rationale: "Combinação de entrevistas semi-estruturadas e análise de dados para triangulação.",
      recommended_methods: ["Entrevistas em profundidade", "CSD Matrix", "Síntese de evidências", "Teste de usabilidade moderado"],
      learning_goals: [
        "Compreender o fluxo atual do usuário e os principais pontos de dor.",
        "Identificar oportunidades de melhoria com maior impacto percebido.",
        "Validar hipóteses sobre causas-raiz do problema.",
      ],
      research_questions: [
        "Como o usuário realiza essa tarefa hoje?",
        "Quais são as maiores frustrações no processo atual?",
        "O que o usuário tentou fazer para resolver o problema?",
      ],
      participant_strategy: "5–8 participantes, selecionados entre usuários ativos com pelo menos 3 meses de uso.",
      protocol_summary: "Roteiro semi-estruturado com 45–60 min por entrevista, seguido de síntese colaborativa.",
      execution_plan: {
        weeks: [
          { week: 1, activities: ["Recrutar participantes", "Preparar roteiro", "Revisar protocolo"] },
          { week: 2, activities: ["Realizar entrevistas (sessões 1–4)", "Transcrição e anotações"] },
          { week: 3, activities: ["Realizar entrevistas (sessões 5–8)", "Síntese e clustering"] },
          { week: 4, activities: ["Priorização de oportunidades", "Revisão com time", "Entrega"] },
        ],
      },
      timeline: "4 semanas",
      participant_profiles: [
        { type: "Usuário ativo", criteria: ["Usa o produto há > 3 meses", "Realiza a tarefa alvo ao menos semanalmente"], count: 5 },
        { type: "Usuário novo", criteria: ["Primeiros 30 dias de uso", "Onboarding completo"], count: 2 },
        { type: "Usuário churned", criteria: ["Cancelamento nos últimos 90 dias", "Motivo: fricção no fluxo"], count: 1 },
      ],
      recruitment_criteria: "Recrutamento via CRM: filtro por engajamento + seleção por perfil de uso.",
      operational_requirements: ["Ferramenta de videochamada com gravação", "Repositório de notas de pesquisa", "Template de síntese"],
      output_source: "mock_agent",
    },
    research_protocols: {
      discussion_guides: [
        {
          title: "Roteiro de entrevista — Exploratório",
          sections: [
            { section: "Contexto e rotina", questions: ["Me conte como é o seu dia a dia com essa tarefa.", "Com que frequência você precisa fazer isso?"] },
            { section: "Processo atual", questions: ["Como você faz isso hoje, passo a passo?", "Quais ferramentas você usa?"] },
            { section: "Dores e fricções", questions: ["Qual parte desse processo é mais frustrante?", "O que você gostaria que fosse diferente?"] },
            { section: "Soluções tentadas", questions: ["O que você já tentou para resolver esse problema?", "O que funcionou?"] },
          ],
        },
      ],
      usability_script: {
        title: "Roteiro de teste de usabilidade",
        tasks: [
          { id: 1, title: "Tarefa de fluxo principal", instruction: "Imagine que você precisa realizar a tarefa alvo. Mostre como você faria isso.", success_criteria: "Completa sem ajuda em menos de 3 minutos" },
          { id: 2, title: "Tarefa secundária", instruction: "Tente realizar a tarefa de apoio. Verbalize o que está pensando.", success_criteria: "Identifica o caminho correto sem erros críticos" },
        ],
      },
      interview_script: "Roteiro gerado por agente mock para simular protocolo estruturado de entrevista.",
      execution_instructions: ["Gravar sessão com consentimento do participante", "Anotar citações diretas no template", "Não sugerir respostas durante a sessão"],
      output_source: "mock_agent",
    },
    evidence_inventory: {
      uploaded_evidence: evidence.map((item, index) => ({
        id: `evidence-${index + 1}`,
        source: (item && item.source) || "manual",
        title: (item && (item.title || item.name)) || `Evidência ${index + 1}`,
        type: (item && item.type) || "document",
        status: "processed",
        uploaded_at: (item && item.uploaded_at) || new Date().toISOString(),
      })),
      desk_research_evidence: [
        { id: "desk-1", source: "desk_research", title: "Benchmarking de mercado — soluções similares", type: "analysis", status: "processed" },
        { id: "desk-2", source: "desk_research", title: "Dados de suporte e tickets relacionados ao problema", type: "data", status: "processed" },
      ],
      evidence_count: evidence.length + 2,
      input_modes: SUPPORTED_INPUT_MODES,
      output_source: "mock_agent",
    },
    insights_package: {
      summary: `Síntese de ${evidence.length + 2} evidências analisadas para o discovery "${title}".`,
      patterns: [
        { id: "pattern-1", title: "Fricção no passo inicial", description: "Usuários perdem tempo no início do fluxo por falta de contexto suficiente.", frequency: "alta", confidence: "high" },
        { id: "pattern-2", title: "Dependência de processos manuais", description: "Etapas críticas dependem de planilhas externas sem integração.", frequency: "alta", confidence: "high" },
        { id: "pattern-3", title: "Falta de visibilidade do progresso", description: "Usuários não sabem em que ponto do fluxo estão.", frequency: "média", confidence: "medium" },
      ],
      tensions_and_contradictions: [
        "Usuários querem mais automação, mas temem perder controle sobre decisões importantes.",
        "Time quer menos reuniões, mas precisa de mais pontos de aprovação.",
      ],
      generated_insights: [
        { id: "insight-1", title: "Contexto é pré-condição para ação", description: "O usuário não age sem entender o porquê. Fornecer contexto antes da tarefa reduz abandono.", evidence_refs: ["evidence-1", "desk-1"], confidence: "high", status: "approved" },
        { id: "insight-2", title: "Automação reduz fricção, não elimina decisão humana", description: "Usuários aceitam automação em etapas operacionais, mas exigem controle em decisões estratégicas.", evidence_refs: ["evidence-1", "desk-2"], confidence: "high", status: "approved" },
        { id: "insight-3", title: "Visibilidade aumenta confiança no fluxo", description: "Usuários que veem o progresso do processo tendem a completar com mais frequência.", evidence_refs: ["desk-1"], confidence: "medium", status: "approved" },
      ],
      traceability_map: {
        "insight-1": ["evidence-1", "desk-1"],
        "insight-2": ["evidence-1", "desk-2"],
        "insight-3": ["desk-1"],
      },
      output_source: "mock_agent",
    },
    insight_quality: {
      review_status: "approved",
      approved_insights: ["insight-1", "insight-2", "insight-3"],
      rejected_insights: [],
      quality_findings: ["Todos os insights têm evidência de suporte", "Nível de confiança médio-alto para todos os aprovados"],
      output_source: "mock_agent",
    },
    opportunity_package: {
      opportunity_areas: [
        { id: "opp-1", title: "Contextualização proativa", description: "Fornecer contexto automático antes de cada etapa do fluxo para reduzir abandono.", impact: "alto", effort: "médio", priority: 1, linked_insights: ["insight-1"] },
        { id: "opp-2", title: "Automação com checkpoints humanos", description: "Automatizar etapas operacionais mantendo gates de aprovação em decisões estratégicas.", impact: "alto", effort: "alto", priority: 2, linked_insights: ["insight-2"] },
        { id: "opp-3", title: "Painel de progresso em tempo real", description: "Exibir progresso do fluxo para o usuário em cada etapa.", impact: "médio", effort: "baixo", priority: 3, linked_insights: ["insight-3"] },
      ],
      opportunity_tree: {
        root: `Melhorar a experiência de ${title} para o usuário`,
        branches: [
          { id: "opp-1", children: ["Contextualização no início da tarefa", "Resumo automático de contexto"] },
          { id: "opp-2", children: ["Gates configuráveis por etapa"] },
          { id: "opp-3", children: [] },
        ],
      },
      output_source: "mock_agent",
    },
    solution_hypotheses: {
      hypotheses: [
        { id: "hyp-1", title: "Resumo automático de contexto antes da tarefa", opportunity_id: "opp-1", type: "feature", confidence_score: 78, assumptions_to_validate: ["Usuário lê o resumo antes de agir", "Resumo reduz dúvidas iniciais em 30%+"] },
        { id: "hyp-2", title: "Workflow com etapas automatizadas e gates configuráveis", opportunity_id: "opp-2", type: "process", confidence_score: 72, assumptions_to_validate: ["Time aceita delegar etapas operacionais ao sistema", "Gates configuráveis reduzem tempo de aprovação"] },
        { id: "hyp-3", title: "Barra de progresso persistente no fluxo", opportunity_id: "opp-3", type: "ui", confidence_score: 85, assumptions_to_validate: ["Visibilidade do progresso aumenta taxa de conclusão"] },
      ],
      assumptions_to_validate: [
        "Usuário lê o resumo antes de agir",
        "Gates configuráveis reduzem tempo de aprovação",
        "Visibilidade do progresso aumenta taxa de conclusão",
      ],
      confidence_score: 78,
      output_source: "mock_agent",
    },
    prototype: {
      prototype_scope: "MVP funcional cobrindo fluxo principal com 3 telas-chave",
      user_journeys: [
        { id: "journey-1", title: "Fluxo completo de discovery", steps: ["Criar discovery", "Aguardar análise", "Aprovar plano", "Enviar evidências", "Revisar insights", "Aprovar oportunidades", "Ver recomendação"] },
      ],
      scenarios: [
        { id: "scenario-1", title: "Usuário aprova fluxo completo sem desvios", type: "happy_path" },
        { id: "scenario-2", title: "Usuário solicita ajuste no plano de pesquisa", type: "alternative" },
      ],
      final_figma_make_prompt: `Create a modern product discovery workflow UI for "${title}". Show a multi-step workflow with states: DOR analysis, research plan approval, evidence upload, insights review, opportunities review, and recommendation. Use a progress stepper at the top, a content card area in the center showing the current state content (research plan, insights, opportunities as structured lists), and action buttons at the bottom for human gates (Approve / Request Changes). The design should be clean and professional, using a sidebar for navigation between discoveries and a main content area. Color scheme: neutral whites and grays with a blue accent for active states and CTAs.`,
      ds_component_checklist: ["Stepper", "Card", "Button (primary/secondary)", "Badge", "List", "Modal (confirmation)"],
      prototype_acceptance_criteria: ["Fluxo principal navegável sem erros", "Gates de aprovação funcionais", "Estados do workflow visíveis em cada etapa"],
      output_source: "mock_agent",
    },
    validation: {
      recommended_validation_strategy: "Teste de usabilidade moderado com 5 participantes do perfil primário",
      experiment_required: true,
      experiment_structure: {
        type: "A/B",
        hypothesis: "A contextualização proativa antes da tarefa reduz o tempo de conclusão em 20%+",
        control: "Fluxo atual sem contexto automático",
        variant: "Novo fluxo com resumo automático de contexto",
        success_metrics: ["Tempo de conclusão", "Taxa de abandono", "Satisfação (CSAT)"],
        sample_size: "n=200 por grupo, 2 semanas de exposição",
      },
      success_metrics: ["Redução de 20% no tempo de conclusão", "Aumento de 15% na taxa de conclusão", "CSAT > 4/5"],
      output_source: "mock_agent",
    },
    recommendation: {
      recommendation_type: "proceed_with_validation",
      executive_summary: `O discovery "${title}" completou todas as etapas de análise e revisão. Os insights gerados apontam para 3 oportunidades prioritárias com alta coerência e rastreabilidade de evidências. Recomenda-se prosseguir com prototipagem e validação.`,
      confidence_level: "high",
      next_steps: [
        "Priorizar oportunidade 'Contextualização proativa' para primeira sprint de prototipagem",
        "Configurar experimento A/B para validar hipótese principal",
        "Agendar revisão do protótipo com stakeholders",
        "Preparar handoff para o time de design",
      ],
      output_source: "mock_agent",
    },
    handoff: {
      delivery_package: title,
      included_artifacts: [
        "Discovery Charter (aprovado)",
        "Plano de Pesquisa",
        "Inventário de Evidências",
        "Insights Aprovados (3)",
        "Árvore de Oportunidades",
        "Hipóteses de Solução",
        "Prompt Figma Make",
        "Plano de Validação",
        "Recomendação Final",
      ],
      owner_notes: `Discovery conduzido via MockAgentAdapter para validar fluxo E2E. ${evidence.length} evidência(s) manual(is) incluída(s). Pronto para prototipagem.`,
      final_summary: `Discovery "${title}" concluído com sucesso. 3 oportunidades identificadas, 1 experimento recomendado, prompt Figma Make gerado.`,
      status: "ready_for_review",
      output_source: "mock_agent",
    },
  };
}

function getMockStateForResumeEvent(run = {}, eventType = "") {
  const state = run.current_state;
  const event = String(eventType || "").trim().toUpperCase();

  // Explicit event + from-state → to-state transitions
  const transitions = [
    { event: "APPROVE_RESEARCH",           from: MOCK_AGENT_STATES.RESEARCH_APPROVAL_PENDING,  to: MOCK_AGENT_STATES.EVIDENCE_UPLOAD_PENDING,     status: MOCK_AGENT_STATUSES.WAITING_FOR_HUMAN },
    { event: "REQUEST_RESEARCH_CHANGES",   from: MOCK_AGENT_STATES.RESEARCH_APPROVAL_PENDING,  to: MOCK_AGENT_STATES.DOR_ANALYZING,                status: MOCK_AGENT_STATUSES.RUNNING },
    { event: "APPROVE_INSIGHTS",           from: MOCK_AGENT_STATES.INSIGHT_REVIEW_PENDING,      to: MOCK_AGENT_STATES.OPPORTUNITY_REVIEW_PENDING,   status: MOCK_AGENT_STATUSES.WAITING_FOR_HUMAN },
    { event: "REQUEST_INSIGHT_CHANGES",    from: MOCK_AGENT_STATES.INSIGHT_REVIEW_PENDING,      to: MOCK_AGENT_STATES.PRIMARY_RESEARCH_PROCESSING,  status: MOCK_AGENT_STATUSES.RUNNING },
    { event: "REQUEST_SYNTHESIS_REVIEW",   from: MOCK_AGENT_STATES.INSIGHT_REVIEW_PENDING,      to: MOCK_AGENT_STATES.PRIMARY_RESEARCH_PROCESSING,  status: MOCK_AGENT_STATUSES.RUNNING },
    { event: "APPROVE_OPPORTUNITIES",      from: MOCK_AGENT_STATES.OPPORTUNITY_REVIEW_PENDING,  to: MOCK_AGENT_STATES.RECOMMENDATION_RUNNING,       status: MOCK_AGENT_STATUSES.RUNNING },
    { event: "REQUEST_OPPORTUNITY_CHANGES",from: MOCK_AGENT_STATES.OPPORTUNITY_REVIEW_PENDING,  to: MOCK_AGENT_STATES.INSIGHT_REVIEW_PENDING,       status: MOCK_AGENT_STATUSES.WAITING_FOR_HUMAN },
    { event: "REQUEST_OPPORTUNITY_REVIEW", from: MOCK_AGENT_STATES.OPPORTUNITY_REVIEW_PENDING,  to: MOCK_AGENT_STATES.INSIGHT_REVIEW_PENDING,       status: MOCK_AGENT_STATUSES.WAITING_FOR_HUMAN },
    { event: "RETRY_RUN",                  from: MOCK_AGENT_STATES.FAILED,                      to: MOCK_AGENT_STATES.DOR_ANALYZING,                status: MOCK_AGENT_STATUSES.RUNNING },
  ];

  const match = transitions.find((t) => t.event === event && t.from === state);
  if (match) {
    return { state: match.to, status: match.status };
  }

  // No valid transition — return current state unchanged
  return { state, status: run.status };
}

async function handleApiRequest(request, response, url) {
  if ((request.method === "GET" || request.method === "HEAD") && (url.pathname === "/health" || url.pathname === "/healthz")) {
    sendJson(response, 200, {
      status: "ok",
      mode: getFrontendApiMode(),
      timestamp: new Date().toISOString(),
    });
    return true;
  }

  // Serve config.vercel.js dynamically so the frontend receives the correct API mode
  // from .env instead of the hardcoded "mock" in the static file.
  if (request.method === "GET" && url.pathname === "/config.vercel.js") {
    const mode = getFrontendApiMode();
    const config = {
      apiMode: mode,
      agentMode: getAgentMode(),
      mvpMode: true,
      agentWorkflowEnabled: true,
      conversationalAssistantEnabled: false,
      externalIntegrationsEnabled: false,
      deploymentTarget: "local-node",
    };
    response.writeHead(200, {
      "Content-Type": "text/javascript; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(`window.DISCOVERY_FRONTEND_CONFIG = ${JSON.stringify(config, null, 2)};\n`);
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/config") {
    sendJson(response, 200, getClientConfig());
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/crewai/kickoff") {
    try {
      const body = await readJsonBody(request);
      await forwardCrewAiRequest(response, "/kickoff", {
        method: "POST",
        body: JSON.stringify(body),
      });
    } catch (error) {
      sendJson(response, 400, { error: error.message });
    }
    return true;
  }

  if (request.method === "GET" && url.pathname.startsWith("/api/crewai/status/")) {
    const kickoffId = decodeURIComponent(url.pathname.replace("/api/crewai/status/", "")).trim();
    if (!kickoffId) {
      sendJson(response, 400, { error: "kickoff_id ausente." });
      return true;
    }

    await forwardCrewAiRequest(response, `/status/${encodeURIComponent(kickoffId)}`, {
      method: "GET",
    });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/discovery/upload-files") {
    try {
      const body = await readJsonBody(request);
      const rawDiscoveryId = String(body.discovery_id || "").trim();
      const discoveryId = rawDiscoveryId.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 64) || "unknown";
      const incomingFiles = Array.isArray(body.files) ? body.files.slice(0, 10) : [];

      const ALLOWED_EXTS = new Set([".txt", ".csv", ".json", ".md", ".xlsx", ".xls", ".pdf", ".docx"]);
      const MAX_FILE_BYTES = 512 * 1024;
      const uploadDir = path.join(LOCAL_DATA_DIR, "uploads", discoveryId);
      fs.mkdirSync(uploadDir, { recursive: true });

      const savedFiles = [];
      for (const file of incomingFiles) {
        const rawName = String(file.name || "arquivo").trim();
        const safeName = path.basename(rawName).replace(/[^a-zA-Z0-9._-]/g, "_") || "arquivo.txt";
        const ext = path.extname(safeName).toLowerCase();
        if (!ALLOWED_EXTS.has(ext)) continue;

        const content = Buffer.from(String(file.content_base64 || ""), "base64");
        if (!content.length || content.length > MAX_FILE_BYTES) continue;

        const destPath = path.join(uploadDir, safeName);
        // Ensure resolved path stays inside uploadDir (prevent traversal)
        if (!path.resolve(destPath).startsWith(path.resolve(uploadDir))) continue;

        fs.writeFileSync(destPath, content);
        const uploadedAt = new Date().toISOString();
        savedFiles.push({
          name: safeName,
          path: destPath,
          type: String(file.type || ""),
          size: content.length,
          uploadedAt,
          uploaded_at: uploadedAt,
        });
      }

      sendJson(response, 200, { files: savedFiles, discovery_id: discoveryId });
    } catch (error) {
      sendJson(response, 400, { error: error.message });
    }
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/discovery/kickoff") {
    try {
      const body = await readJsonBody(request);
      if (shouldUseMockAgentAdapter()) {
        const run = createMockAgentRun(body);
        sendJson(response, 202, {
          run_id: run.run_id,
          discovery_id: run.discovery_id,
          current_state: run.current_state,
          state: run.current_state,
          status: run.status,
          adapter: run.adapter,
          mock_agent_outputs: true,
          agent_workflow_enabled: true,
          external_integrations_enabled: false,
          message: "MockAgentAdapter iniciou o workflow de agentes sem conectores externos.",
          created_at: run.created_at,
        });
        return true;
      }

      await forwardDiscoveryAiRequest(response, "/kickoff", {
        method: "POST",
        body: JSON.stringify(body),
      });
    } catch (error) {
      sendJson(response, 400, { error: error.message });
    }
    return true;
  }

  if (request.method === "GET" && url.pathname.startsWith("/api/discovery/status/")) {
    const runId = getRequiredPathId(response, url.pathname, "/api/discovery/status/", "run_id");
    if (!runId) {
      return true;
    }

    if (shouldUseMockAgentAdapter()) {
      const run = getMockAgentRun(runId);
      if (!run) {
        sendMockRunNotFound(response, runId);
        return true;
      }

      // Auto-advance processing states on each poll; human gates stop here until /resume
      const MOCK_POLL_ADVANCES = {
        [MOCK_AGENT_STATES.DISCOVERY_CREATED]:          { next: MOCK_AGENT_STATES.DOR_ANALYZING,               status: MOCK_AGENT_STATUSES.RUNNING },
        [MOCK_AGENT_STATES.DOR_ANALYZING]:              { next: MOCK_AGENT_STATES.RESEARCH_APPROVAL_PENDING,   status: MOCK_AGENT_STATUSES.WAITING_FOR_HUMAN },
        [MOCK_AGENT_STATES.PRIMARY_RESEARCH_PROCESSING]:{ next: MOCK_AGENT_STATES.INSIGHT_REVIEW_PENDING,      status: MOCK_AGENT_STATUSES.WAITING_FOR_HUMAN },
        [MOCK_AGENT_STATES.RECOMMENDATION_RUNNING]:     { next: MOCK_AGENT_STATES.HANDOFF_RUNNING,             status: MOCK_AGENT_STATUSES.RUNNING },
        [MOCK_AGENT_STATES.HANDOFF_RUNNING]:            { next: MOCK_AGENT_STATES.COMPLETED,                   status: MOCK_AGENT_STATUSES.COMPLETED },
      };
      const advance = MOCK_POLL_ADVANCES[run.current_state];
      const updatedRun = advance
        ? setMockAgentRun({ ...run, current_state: advance.next, status: advance.status })
        : run;
      sendJson(response, 200, {
        run_id: updatedRun.run_id,
        discovery_id: updatedRun.discovery_id,
        current_state: updatedRun.current_state,
        state: updatedRun.current_state,
        status: updatedRun.status,
        adapter: updatedRun.adapter,
        mock_agent_outputs: true,
        agent_workflow_enabled: true,
        external_integrations_enabled: false,
        updated_at: updatedRun.updated_at,
      });
      return true;
    }

    await forwardDiscoveryAiRequest(response, `/status/${encodeURIComponent(runId)}`, {
      method: "GET",
    });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/discovery/resume") {
    try {
      const body = await readJsonBody(request);
      if (shouldUseMockAgentAdapter()) {
        const runId = String(body.run_id || body.runId || "").trim();
        const run = getMockAgentRun(runId);
        if (!run) {
          sendMockRunNotFound(response, runId);
          return true;
        }

        const { state: nextState, status: nextStatus } = getMockStateForResumeEvent(run, body.event_type || body.eventType || body.decision);
        const updatedRun = setMockAgentRun({
          ...run,
          current_state: nextState,
          status: nextStatus,
          events: [
            ...(Array.isArray(run.events) ? run.events : []),
            {
              type: body.event_type || body.eventType || body.decision || "human_gate_resumed",
              payload: body,
              created_at: new Date().toISOString(),
            },
          ],
        });

        sendJson(response, 200, {
          run_id: updatedRun.run_id,
          discovery_id: updatedRun.discovery_id,
          current_state: updatedRun.current_state,
          state: updatedRun.current_state,
          status: updatedRun.status,
          adapter: updatedRun.adapter,
          mock_agent_outputs: true,
          agent_workflow_enabled: true,
          external_integrations_enabled: false,
          updated_at: updatedRun.updated_at,
        });
        return true;
      }

      await forwardDiscoveryAiRequest(response, "/resume", {
        method: "POST",
        body: JSON.stringify(body),
      });
    } catch (error) {
      sendJson(response, 400, { error: error.message });
    }
    return true;
  }

  if (request.method === "GET" && url.pathname.startsWith("/api/discovery/outputs/")) {
    const runId = getRequiredPathId(response, url.pathname, "/api/discovery/outputs/", "run_id");
    if (!runId) {
      return true;
    }

    if (shouldUseMockAgentAdapter()) {
      const run = getMockAgentRun(runId);
      if (!run) {
        sendMockRunNotFound(response, runId);
        return true;
      }

      sendJson(response, 200, {
        run_id: run.run_id,
        discovery_id: run.discovery_id,
        adapter: run.adapter,
        mock_agent_outputs: true,
        outputs: createMockAgentOutputs(run),
        updated_at: run.updated_at,
      });
      return true;
    }

    await forwardDiscoveryAiRequest(response, `/outputs/${encodeURIComponent(runId)}`, {
      method: "GET",
    });
    return true;
  }

  const artifactsMatch = url.pathname.match(/^\/api\/discovery\/runs\/([^/]+)\/artifacts$/);
  if (request.method === "GET" && artifactsMatch) {
    const runId = decodeURIComponent(artifactsMatch[1]).trim();
    if (!runId) {
      sendJson(response, 400, { error: "run_id ausente." });
      return true;
    }

    if (shouldUseMockAgentAdapter()) {
      const run = getMockAgentRun(runId);
      if (!run) {
        sendMockRunNotFound(response, runId);
        return true;
      }

      sendJson(response, 200, {
        run_id: run.run_id,
        discovery_id: run.discovery_id,
        adapter: run.adapter,
        mock_agent_outputs: true,
        artifacts: createMockAgentOutputs(run),
        updated_at: run.updated_at,
      });
      return true;
    }

    await forwardDiscoveryAiRequest(response, `/runs/${encodeURIComponent(runId)}/artifacts`, {
      method: "GET",
    });
    return true;
  }

  const evidenceMatch = url.pathname.match(/^\/api\/discovery\/runs\/([^/]+)\/evidence$/);
  if (request.method === "POST" && evidenceMatch) {
    const runId = decodeURIComponent(evidenceMatch[1]).trim();
    if (!runId) {
      sendJson(response, 400, { error: "run_id ausente." });
      return true;
    }

    try {
      const body = await readJsonBody(request);
      if (shouldUseMockAgentAdapter()) {
        const run = getMockAgentRun(runId);
        if (!run) {
          sendMockRunNotFound(response, runId);
          return true;
        }

        const evidence = Array.isArray(body.evidence) ? body.evidence : [body.evidence || body].filter(Boolean);
        const updatedRun = setMockAgentRun({
          ...run,
          evidence: [
            ...(Array.isArray(run.evidence) ? run.evidence : []),
            ...evidence,
          ],
          current_state: MOCK_AGENT_STATES.PRIMARY_RESEARCH_PROCESSING,
          status: MOCK_AGENT_STATUSES.RUNNING,
        });

        sendJson(response, 200, {
          run_id: updatedRun.run_id,
          discovery_id: updatedRun.discovery_id,
          current_state: updatedRun.current_state,
          state: updatedRun.current_state,
          status: updatedRun.status,
          adapter: updatedRun.adapter,
          mock_agent_outputs: true,
          evidence_count: updatedRun.evidence.length,
          evidence_ids: evidence.map((_, index) => `mock-evidence-${updatedRun.evidence.length - evidence.length + index + 1}`),
          updated_at: updatedRun.updated_at,
        });
        return true;
      }

      await forwardDiscoveryAiRequest(response, `/runs/${encodeURIComponent(runId)}/evidence`, {
        method: "POST",
        body: JSON.stringify(body),
      });
    } catch (error) {
      sendJson(response, 400, { error: error.message });
    }
    return true;
  }

  const runMatch = url.pathname.match(/^\/api\/discovery\/runs\/([^/]+)$/);
  if (request.method === "GET" && runMatch) {
    const runId = decodeURIComponent(runMatch[1]).trim();
    if (!runId) {
      sendJson(response, 400, { error: "run_id ausente." });
      return true;
    }

    if (shouldUseMockAgentAdapter()) {
      const run = getMockAgentRun(runId);
      if (!run) {
        sendMockRunNotFound(response, runId);
        return true;
      }

      sendJson(response, 200, {
        ...run,
        outputs: createMockAgentOutputs(run),
        agent_workflow_enabled: true,
        external_integrations_enabled: false,
      });
      return true;
    }

    await forwardDiscoveryAiRequest(response, `/runs/${encodeURIComponent(runId)}`, {
      method: "GET",
    });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/local/health") {
    sendJson(response, 200, {
      status: "ok",
      storage: "json",
      dataDir: "backend/data",
      collections: Object.keys(LOCAL_COLLECTIONS),
    });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/local") {
    sendJson(response, 200, {
      collections: Object.entries(LOCAL_COLLECTIONS).map(([name, info]) => ({
        name,
        file: info.file,
        defaultType: Array.isArray(info.defaultValue) ? "array" : "object",
      })),
    });
    return true;
  }

  if (url.pathname.startsWith("/api/local/")) {
    const collection = url.pathname.slice("/api/local/".length);

    if (request.method === "GET") {
      if (!resolveCollection(response, collection)) return true;
      try {
        const data = readLocalJson(collection);
        sendJson(response, 200, { collection, data });
      } catch {
        sendJson(response, 500, { error: "Erro ao ler dados." });
      }
      return true;
    }

    if (request.method === "PUT") {
      try {
        const body = await readJsonBody(request);
        if (!resolveCollection(response, collection)) return true;
        const data =
          body !== null && typeof body === "object" && !Array.isArray(body) && "data" in body
            ? body.data
            : body;
        saveLocalJson(collection, data);
        sendJson(response, 200, { collection, data });
      } catch (error) {
        sendJson(response, error.message === "JSON inválido." ? 400 : 500, { error: error.message === "JSON inválido." ? error.message : "Erro ao salvar dados." });
      }
      return true;
    }

    if (request.method === "POST") {
      try {
        const body = await readJsonBody(request);
        if (!resolveCollection(response, collection)) return true;
        const info = LOCAL_COLLECTIONS[collection];
        const existing = readLocalJson(collection);
        let updated;
        if (Array.isArray(info.defaultValue)) {
          let items;
          if (Array.isArray(body)) {
            items = body;
          } else if (body.items !== undefined) {
            items = Array.isArray(body.items) ? body.items : [body.items];
          } else if (body.data !== undefined) {
            items = Array.isArray(body.data) ? body.data : [body.data];
          } else if (body.item !== undefined) {
            items = [body.item];
          } else {
            items = [body];
          }
          updated = [...existing, ...items];
        } else {
          let incoming;
          if (body.data !== undefined && typeof body.data === "object" && !Array.isArray(body.data)) {
            incoming = body.data;
          } else if (typeof body === "object" && !Array.isArray(body)) {
            incoming = body;
          } else {
            incoming = {};
          }
          updated = { ...existing, ...incoming };
        }
        saveLocalJson(collection, updated);
        sendJson(response, 200, { collection, data: updated });
      } catch (error) {
        sendJson(response, error.message === "JSON inválido." ? 400 : 500, { error: error.message === "JSON inválido." ? error.message : "Erro ao salvar dados." });
      }
      return true;
    }

    if (request.method === "DELETE") {
      if (!resolveCollection(response, collection)) return true;
      try {
        const info = LOCAL_COLLECTIONS[collection];
        const defaultValue = JSON.parse(JSON.stringify(info.defaultValue));
        saveLocalJson(collection, defaultValue);
        sendJson(response, 200, { collection, data: defaultValue });
      } catch {
        sendJson(response, 500, { error: "Erro ao resetar coleção." });
      }
      return true;
    }

    sendJson(response, 404, { error: "Endpoint local não encontrado." });
    return true;
  }

  if (url.pathname.startsWith("/api/")) {
    sendJson(response, 404, { error: "Endpoint local não encontrado." });
    return true;
  }

  return false;
}

function isPublicStaticPath(requestedPath) {
  if (PUBLIC_FILE_PATHS.has(requestedPath)) {
    return true;
  }

  if (!PUBLIC_ASSET_DIRS.some((assetDir) => requestedPath.startsWith(assetDir))) {
    return false;
  }

  return Boolean(MIME_TYPES[path.extname(requestedPath).toLowerCase()]);
}

function serveStaticFile(request, response, url) {
  let rawPath;
  try {
    rawPath = decodeURIComponent(url.pathname);
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Caminho inválido.");
    return;
  }

  const requestedPath = rawPath === "/" ? "/index.html" : rawPath;

  if (!isPublicStaticPath(requestedPath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Arquivo não encontrado.");
    return;
  }

  const filePath = path.normalize(path.join(ROOT_DIR, requestedPath));
  const relativePath = path.relative(ROOT_DIR, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Arquivo não encontrado.");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    fs.createReadStream(filePath).pipe(response);
  });
}

function createServer() {
  return http.createServer(async (request, response) => {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

    if (handleAccessControl(request, response, url)) {
      return;
    }

    if (await handleApiRequest(request, response, url)) {
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Método não permitido.");
      return;
    }

    serveStaticFile(request, response, url);
  });
}

function startServer(port) {
  const server = createServer();
  const host = process.env.HOST || (process.env.PORT ? "0.0.0.0" : "127.0.0.1");
  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && !process.env.PORT) {
      startServer(port + 1);
      return;
    }

    console.error(error);
    process.exit(1);
  });
  server.listen(port, host, () => {
    const displayHost = host === "0.0.0.0" ? "localhost" : host;
    console.log(`Discovery IA rodando em http://${displayHost}:${port}/index.html`);
  });
}

loadEnvFile();
validateStartupConfig();
configureTlsForLocalDevelopment();
hydrateMockAgentRunsFromFile();
seedProductsAndDiscoveriesIfEmpty();
startServer(Number(process.env.PORT || 4173));
