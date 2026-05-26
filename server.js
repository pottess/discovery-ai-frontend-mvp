const http = require("node:http");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const ROOT_DIR = __dirname;
const DEFAULT_CREWAI_POLL_INTERVAL_MS = 15000;
const DEFAULT_CREWAI_POLL_TIMEOUT_MS = 600000;
const DEFAULT_DISCOVERY_AI_POLL_INTERVAL_MS = 5000;
const PUBLIC_FILE_PATHS = new Set(["/index.html", "/styles.css", "/app.js", "/demo-config.js"]);
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

function getClientConfig() {
  return {
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

async function handleApiRequest(request, response, url) {
  if ((request.method === "GET" || request.method === "HEAD") && (url.pathname === "/health" || url.pathname === "/healthz")) {
    sendJson(response, 200, {
      status: "ok",
      mode: getFrontendApiMode(),
      timestamp: new Date().toISOString(),
    });
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

  if (request.method === "POST" && url.pathname === "/api/discovery/kickoff") {
    try {
      const body = await readJsonBody(request);
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

    await forwardDiscoveryAiRequest(response, `/status/${encodeURIComponent(runId)}`, {
      method: "GET",
    });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/discovery/resume") {
    try {
      const body = await readJsonBody(request);
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

    await forwardDiscoveryAiRequest(response, `/runs/${encodeURIComponent(runId)}`, {
      method: "GET",
    });
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
startServer(Number(process.env.PORT || 4173));
