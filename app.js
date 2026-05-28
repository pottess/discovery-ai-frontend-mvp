const chatLog = document.querySelector("[data-chat-log]");
const chatForm = document.querySelector("[data-chat-form]");
const chatInput = document.querySelector("[data-chat-input]");
const quickPromptButtons = document.querySelectorAll(".quick-prompts [data-prompt], .nav-link[data-prompt]");
const filterButtons = document.querySelectorAll("[data-filter]");
const discoveryGrid = document.querySelector("[data-discovery-grid]");
const homeProductBar = document.querySelector("[data-home-product-bar]");
const sidebar = document.querySelector("[data-sidebar]");
const sidebarRail = document.querySelector("[data-sidebar-rail]");
const sidebarPanel = document.querySelector("[data-sidebar-panel]");
const sidebarToggle = document.querySelector("[data-action='toggle-sidebar']");
const sidebarToggleIcon = document.querySelector("[data-sidebar-toggle-icon]");
const appShell = document.querySelector(".app-shell");
const brandName = document.querySelector(".brand-name");
const apiModeBadge = document.querySelector("[data-api-mode-badge]");
const productBack = document.querySelector("[data-product-back]");
const views = document.querySelectorAll("[data-view]");
const routeLinks = document.querySelectorAll("[data-route-link]");
const favoriteProductsMenu = document.querySelector("[data-favorite-products-menu]");
const favoriteDiscoveriesMenu = document.querySelector("[data-favorite-discoveries-menu]");
const productSearch = document.querySelector("[data-product-search]");
const productList = document.querySelector("[data-product-list]");
const productEmpty = document.querySelector("[data-product-empty]");
const productDetail = document.querySelector("[data-product-detail]");
const productDetailTitle = document.querySelector("[data-product-detail-title]");
const productDetailCopy = document.querySelector("[data-product-detail-copy]");
const productDetailOpen = document.querySelector("[data-product-detail-open]");
const productDetailChat = document.querySelector("[data-product-detail-chat]");
const productDetailClear = document.querySelector("[data-product-detail-clear]");
const statTotal = document.querySelector("[data-stat-total]");
const statDone = document.querySelector("[data-stat-done]");
const statProgress = document.querySelector("[data-stat-progress]");
const currentProductName = document.querySelector("[data-current-product-name]");
const productPageTitle = document.querySelector("[data-product-page-title]");
const productPageCategory = document.querySelector("[data-product-page-category]");
const productPageAbout = document.querySelector("[data-product-page-about]");
const productPageStatus = document.querySelector("[data-product-page-status]");
const productMetrics = document.querySelector("[data-product-metrics]");
const productSquad = document.querySelector("[data-product-squad]");
const productParticipants = document.querySelector("[data-product-participants]");
const productStart = document.querySelector("[data-product-start]");
const productEnd = document.querySelector("[data-product-end]");
const productArtifacts = document.querySelector("[data-product-artifacts]");
const productKpiGrid = document.querySelector("[data-product-kpi-grid]");
const productLearningSummary = document.querySelector("[data-product-learning-summary]");
const productAudienceSummary = document.querySelector("[data-product-audience-summary]");
const productAudiencePage = document.querySelector("[data-product-audience-page]");
const productDiscoverySearch = document.querySelector("[data-product-discovery-search]");
const productDiscoveryGrid = document.querySelector("[data-product-discovery-grid]");
const productDiscoveryEmpty = document.querySelector("[data-product-discovery-empty]");
const productNewDiscoveryButton = document.querySelector("[data-product-new-discovery]");
const teamButton = document.querySelector("[data-team-button]");
const discoveryPage = document.querySelector("[data-discovery-page]");
const synthesisPage = document.querySelector("[data-synthesis-page]");
const discoveryProductLink = document.querySelector("[data-discovery-product-link]");
const discoveryPageName = document.querySelector("[data-discovery-page-name]");
const discoveryPageTitle = document.querySelector("[data-discovery-page-title]");
const discoveryProductName = document.querySelector("[data-discovery-product-name]");
const discoveryIdLabel = document.querySelector("[data-discovery-header-id]");
const discoveryDetailFavorite = document.querySelector("[data-discovery-detail-favorite]");
const discoveryReadinessStatus = document.querySelector("[data-discovery-readiness-status]");
const discoveryProblem = document.querySelector("[data-discovery-problem]");
const discoveryObjective = document.querySelector("[data-discovery-objective]");
const discoveryCrewSummary = document.querySelector("[data-discovery-crew-summary]");
const discoveryCrewReasoning = document.querySelector("[data-discovery-reasoning]");
const discoveryInsights = document.querySelector("[data-discovery-insights]");
const discoveryInsightsTitle = document.querySelector("[data-discovery-insights-title]");
const discoverySquad = document.querySelector("[data-discovery-squad]");
const discoveryParticipants = document.querySelector("[data-discovery-participants]");
const discoveryStart = document.querySelector("[data-discovery-start]");
const discoveryEnd = document.querySelector("[data-discovery-end]");
const discoveryTimelineTitle = document.querySelector("[data-discovery-timeline-title]");
const discoveryMethodologyName = document.querySelector("[data-discovery-methodology-name]");
const discoveryTags = document.querySelector("[data-discovery-tags]");
const discoveryArtifacts = document.querySelector("[data-discovery-artifacts]");
const methodologyPanel = document.querySelector("[data-methodology-panel]");
const methodologyList = document.querySelector("[data-methodology-list]");
const evidenceList = document.querySelector("[data-evidence-list]");
const interviewBackLink = document.querySelector("[data-interview-back]");
const interviewTitle = document.querySelector("[data-interview-title]");
const interviewObjective = document.querySelector("[data-interview-objective]");
const interviewDiscoveryName = document.querySelector("[data-interview-discovery-name]");
const interviewPersonas = document.querySelector("[data-interview-personas]");
const interviewConfirmed = document.querySelector("[data-interview-confirmed]");
const interviewTarget = document.querySelector("[data-interview-target]");
const interviewRecruitmentBar = document.querySelector("[data-interview-recruitment-bar]");
const interviewRecruitmentSummary = document.querySelector("[data-interview-recruitment-summary]");
const interviewUsersImport = document.querySelector("[data-interview-users-import]");
const interviewUsersFile = document.querySelector("[data-interview-users-file]");
const interviewParticipantsBody = document.querySelector("[data-interview-participants-body]");
const interviewFeedback = document.querySelector("[data-interview-feedback]");
const interviewSkeleton = document.querySelector("[data-interview-skeleton]");
const interviewContent = document.querySelector("[data-interview-content]");
const interviewRouteBlocks = document.querySelector("[data-interview-route-blocks]");
const interviewGuideTitle = document.querySelector("[data-interview-guide-title]");
const interviewGuideDescription = document.querySelector("[data-interview-guide-description]");
const participantInterviewBack = document.querySelector("[data-participant-interview-back]");
const participantInterviewBreadcrumb = document.querySelector("[data-participant-interview-breadcrumb]");
const participantAvatar = document.querySelector("[data-participant-avatar]");
const participantInterviewName = document.querySelector("[data-participant-interview-name]");
const participantInterviewRole = document.querySelector("[data-participant-interview-role]");
const participantInterviewCompany = document.querySelector("[data-participant-interview-company]");
const participantInterviewDate = document.querySelector("[data-participant-interview-date]");
const participantInterviewDuration = document.querySelector("[data-participant-interview-duration]");
const participantInsights = document.querySelector("[data-participant-insights]");
const transcriptToggle = document.querySelector("[data-transcript-toggle]");
const transcriptContent = document.querySelector("[data-transcript-content]");
const recordingSummary = document.querySelector("[data-recording-summary]");
const watchRecordingButton = document.querySelector("[data-watch-recording]");
const recordingModal = document.querySelector("[data-recording-modal]");
const recordingClose = document.querySelector("[data-recording-close]");
const recordingModalTitle = document.querySelector("[data-recording-modal-title]");
const recordingModalDuration = document.querySelector("[data-recording-modal-duration]");
const audienceConfirmModal = document.querySelector("[data-audience-confirm-modal]");
const audienceConfirmTitle = document.querySelector("[data-audience-confirm-title]");
const audienceConfirmMessage = document.querySelector("[data-audience-confirm-message]");
const audienceConfirmCancel = document.querySelector("[data-audience-confirm-cancel]");
const audienceConfirmActions = document.querySelectorAll("[data-audience-confirm-action]");
const productAudiencePreviewModal = document.querySelector("[data-product-audience-preview-modal]");
const productAudiencePreviewBody = document.querySelector("[data-product-audience-preview-body]");
const productAudiencePreviewClose = document.querySelector("[data-product-audience-preview-close]");
const discoveryPeoplePreviewModal = document.querySelector("[data-discovery-people-preview-modal]");
const discoveryPeoplePreviewBody = document.querySelector("[data-discovery-people-preview-body]");
const discoveryPeoplePreviewClose = document.querySelector("[data-discovery-people-preview-close]");
const discoveryPeopleEditModal = document.querySelector("[data-discovery-people-edit-modal]");
const discoveryPeopleEditBody = document.querySelector("[data-discovery-people-edit-body]");
const discoveryPeopleEditClose = document.querySelector("[data-discovery-people-edit-close]");
const discoveryPeopleEditCancel = document.querySelector("[data-discovery-people-edit-cancel]");
const discoveryPeopleEditSave = document.querySelector("[data-discovery-people-edit-save]");
const csdModal = document.querySelector("[data-csd-modal]");
const csdModalBody = document.querySelector("[data-csd-modal-body]");
const csdModalClose = document.querySelector("[data-csd-modal-close]");
const csdModalValidationBadge = document.querySelector("[data-csd-validation-badge]");
const csdModalLastUpdated = document.querySelector("[data-csd-last-updated]");
const csdModalCancel = document.querySelector("[data-csd-cancel]");
const csdModalSave = document.querySelector("[data-csd-save]");
const videoPlayButton = document.querySelector("[data-video-play]");
const videoState = document.querySelector("[data-video-state]");
const videoProgress = document.querySelector("[data-video-progress]");
const videoDuration = document.querySelector("[data-video-duration]");
const discoveryChatLog = document.querySelector("[data-discovery-chat-log]");
const discoveryChatForm = document.querySelector("[data-discovery-chat-form]");
const discoveryChatInput = document.querySelector("[data-discovery-chat-input]");
const discoveryAttachmentInput = document.querySelector("[data-discovery-attachment-input]");
const discoveryAttachButton = document.querySelector("[data-discovery-attach-button]");
const discoveryAttachmentList = document.querySelector("[data-discovery-attachment-list]");
const methodEntryModal = document.querySelector("[data-method-entry-modal]");
const methodEntryTitle = document.querySelector("[data-method-entry-title]");
const methodEntryText = document.querySelector("[data-method-entry-text]");
const methodEntryFile = document.querySelector("[data-method-entry-file]");
const methodEntryFileButton = document.querySelector("[data-method-entry-file-button]");
const methodEntryFileLabel = document.querySelector("[data-method-entry-file-label]");
const methodEntryFileList = document.querySelector("[data-method-entry-file-list]");
const methodEntryClose = document.querySelector("[data-method-entry-close]");
const methodEntryCancel = document.querySelector("[data-method-entry-cancel]");
const methodEntryForm = document.querySelector("[data-method-entry-form]");
const newDiscoveryModal = document.querySelector("[data-new-discovery-modal]");
const newDiscoverySetupForm = document.querySelector("[data-new-discovery-setup-form]");
const newDiscoverySetupTitle = document.querySelector("[data-new-discovery-setup-title]");
const newDiscoverySetupProblem = document.querySelector("[data-new-discovery-setup-problem]");
const newDiscoverySetupObjective = document.querySelector("[data-new-discovery-setup-objective]");
const newDiscoveryParticipantsForm = document.querySelector("[data-new-discovery-participants-form]");
const newDiscoveryProductPeople = document.querySelector("[data-new-discovery-product-people]");
const flowSelectButtons = document.querySelectorAll("[data-flow-select]");
const newDiscoveryDeadline = document.querySelector("[data-new-discovery-deadline]");
const newDiscoverySupportFile = document.querySelector("[data-new-discovery-support-file]");
const newDiscoverySupportFileButton = document.querySelector("[data-new-discovery-support-file-button]");
const newDiscoverySupportFileLabel = document.querySelector("[data-new-discovery-support-file-label]");
const newDiscoverySupportLinks = document.querySelector("[data-new-discovery-support-links]");
const addSupportLinkButton = document.querySelector("[data-add-support-link]");
const newDiscoveryParticipantsBack = document.querySelector("[data-new-discovery-participants-back]");
const newDiscoveryCsdForm = document.querySelector("[data-new-discovery-csd-form]");
const newDiscoveryCsdBack = document.querySelector("[data-new-discovery-csd-back]");
const newDiscoveryMethodologyForm = document.querySelector("[data-new-discovery-methodology-form]");
const newDiscoveryMethodologyBack = document.querySelector("[data-new-discovery-methodology-back]");
const methodologyOptionButtons = document.querySelectorAll("[data-methodology-option]");
const newDiscoveryProgress = document.querySelector("[data-new-discovery-progress]");
const newDiscoveryProgressLabel = document.querySelector("[data-new-discovery-progress-label]");
const closeNewDiscoveryButton = document.querySelector("[data-close-new-discovery]");
const cancelNewDiscoveryButtons = document.querySelectorAll("[data-cancel-new-discovery]");
const newDiscoveryCreateButton = document.querySelector("[data-new-discovery-create]");
const newDiscoveryStatus = document.querySelector("[data-new-discovery-status]");
const crewKickoffPanel = document.querySelector("[data-crew-kickoff-panel]");
const crewKickoffSummary = document.querySelector("[data-crew-kickoff-summary]");
const crewKickoffPhase = document.querySelector("[data-crew-kickoff-phase]");
const crewKickoffId = document.querySelector("[data-crew-kickoff-id]");
const crewKickoffElapsed = document.querySelector("[data-crew-kickoff-elapsed]");
const crewKickoffLog = document.querySelector("[data-crew-kickoff-log]");

let selectedProductId = null;
let selectedDiscoveryId = "discovery-name-1";
let selectedInterviewMethodId = "entrevista-em-profundidade";
let selectedSidebarContext = { type: "home" };
let isSidebarPinned = false;
let draftDiscovery = null;
let activeAudienceTab = "personas";
let audienceShowArchived = false;
let pendingAudienceDelete = null;
let editingDiscoveryPeopleSelection = null;
let editingCsdMatrixState = null;
let discoveryAttachments = [];
let activeMethodEntryIndex = null;
let methodEntryFiles = [];
let interviewParticipants = [];
let currentResearchActivityScope = null;
let activeInterviewStatusMenuParticipantId = null;
let selectedInterviewParticipantId = "ana-martins";
let activeRecordingParticipant = null;
let isMockVideoPlaying = false;
let newDiscoveryProblemDraft = "";
let newDiscoveryObjectiveDraft = "";
let newDiscoveryTitleDraft = "";
let newDiscoveryParticipantsDraft = {};
let newDiscoverySelectedPersonaIdsDraft = [];
let newDiscoverySelectedStakeholderIdsDraft = [];
let newDiscoveryDeadlineDraft = "";
let newDiscoverySupportFiles = [];
let newDiscoverySupportLinksDraft = [""];
let newDiscoveryCsdDraft = {};
let selectedMethodologyId = "optimized";
let isCreatingNewDiscovery = false;
let crewKickoffStartedAt = 0;
let crewKickoffElapsedTimer = null;
let activeDiscoveryRunPoll = {
  runId: "",
  discoveryId: "",
  timerId: null,
  inFlight: false,
  starting: false,
  lastState: "",
  lastStatus: "",
  intervalMs: 0,
};
let activeArtifactsRequestId = 0;
let localMockRunsMemory = {};

const DEFAULT_CREWAI_POLL_INTERVAL_MS = 15000;
const DEFAULT_CREWAI_POLL_TIMEOUT_MS = 600000;
const DEFAULT_DISCOVERY_POLL_INTERVAL_MS = 5000;
const API_BASE_PATH = "./api";
const CREWAI_SUCCESS_STATUSES = new Set(["completed", "complete", "success", "succeeded"]);
const CREWAI_ERROR_STATUSES = new Set(["failed", "failure", "error", "cancelled", "canceled"]);
const DISCOVERY_FRONTEND_API_MODES = Object.freeze({
  MVP_BACKEND: "mvp_backend",
  LOCAL_MOCK: "mock",
  LEGACY_CREWAI: "legacy_crewai",
});
const LEGACY_LOCAL_MOCK_API_MODE = "local_mock";
const DEMO_MODE_MESSAGE = "Modo demo: esta ação será simulada localmente.";
const SAFE_DISCOVERY_FRONTEND_CONFIG = Object.freeze({
  apiMode: DISCOVERY_FRONTEND_API_MODES.LOCAL_MOCK,
  agentMode: "mock",
  mvpMode: true,
  agentWorkflowEnabled: true,
  conversationalAssistantEnabled: false,
  externalIntegrationsEnabled: false,
  deploymentTarget: "static-demo",
});
const STATIC_DISCOVERY_FRONTEND_CONFIG = (
  window.DISCOVERY_FRONTEND_CONFIG
  && typeof window.DISCOVERY_FRONTEND_CONFIG === "object"
)
  ? window.DISCOVERY_FRONTEND_CONFIG
  : {};
const HAS_STATIC_DISCOVERY_FRONTEND_CONFIG = Object.keys(STATIC_DISCOVERY_FRONTEND_CONFIG).length > 0;
const DISCOVERY_FRONTEND_CONFIG = Object.freeze({
  ...SAFE_DISCOVERY_FRONTEND_CONFIG,
  ...STATIC_DISCOVERY_FRONTEND_CONFIG,
});
window.DISCOVERY_FRONTEND_CONFIG = DISCOVERY_FRONTEND_CONFIG;

function getStoredFrontendApiMode() {
  try {
    return window.localStorage?.getItem("discoveryIa.frontendApiMode") || "";
  } catch {
    return "";
  }
}

function normalizeDiscoveryFrontendApiMode(mode = "") {
  const normalizedMode = String(mode || "").trim().toLowerCase();
  if (normalizedMode === "mock" || normalizedMode === "demo" || normalizedMode === LEGACY_LOCAL_MOCK_API_MODE) {
    return DISCOVERY_FRONTEND_API_MODES.LOCAL_MOCK;
  }

  return Object.values(DISCOVERY_FRONTEND_API_MODES).includes(normalizedMode) ? normalizedMode : "";
}

function getRequestedDiscoveryFrontendApiMode() {
  const params = new URLSearchParams(window.location.search);
  return normalizeDiscoveryFrontendApiMode(
    STATIC_DISCOVERY_FRONTEND_CONFIG.apiMode
    || STATIC_DISCOVERY_FRONTEND_CONFIG.frontendApiMode
    || STATIC_DISCOVERY_FRONTEND_CONFIG.discoveryFrontendApiMode
    || window.DISCOVERY_FRONTEND_API_MODE
    || params.get("apiMode")
    || params.get("discoveryApiMode")
    || getStoredFrontendApiMode(),
  );
}

function resolveDiscoveryFrontendApiMode() {
  return getRequestedDiscoveryFrontendApiMode() || DISCOVERY_FRONTEND_API_MODES.LOCAL_MOCK;
}

function setDiscoveryFrontendApiMode(mode = "", { persist = false } = {}) {
  const normalizedMode = normalizeDiscoveryFrontendApiMode(mode);
  if (!normalizedMode || normalizedMode === DISCOVERY_FRONTEND_API_MODE) {
    return false;
  }

  DISCOVERY_FRONTEND_API_MODE = normalizedMode;
  window.DISCOVERY_FRONTEND_API_MODE = DISCOVERY_FRONTEND_API_MODE;
  if (persist) {
    try {
      window.localStorage?.setItem("discoveryIa.frontendApiMode", DISCOVERY_FRONTEND_API_MODE);
    } catch {
      // Persisting demo preferences is best-effort only.
    }
  }
  renderApiModeBadge();
  return true;
}

let DISCOVERY_FRONTEND_API_MODE = resolveDiscoveryFrontendApiMode();
window.DISCOVERY_FRONTEND_API_MODE = DISCOVERY_FRONTEND_API_MODE;

const WORKFLOW_STATES = Object.freeze({
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
});

const RUN_STATUSES = Object.freeze({
  IDLE: "IDLE",
  RUNNING: "RUNNING",
  WAITING_FOR_HUMAN: "WAITING_FOR_HUMAN",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  CANCELLED: "CANCELLED",
});

const AGENT_PROCESSING_STATUSES = Object.freeze({
  NOT_STARTED: "not_started",
  PROCESSING: "processing",
  WAITING_FOR_HUMAN: "waiting_for_human",
  COMPLETED: "completed",
  FAILED: "failed",
});

const AGENT_OUTPUT_EMPTY_MESSAGE = "Agentes ainda não processaram esta etapa.";
const AGENT_WAITING_MESSAGE = "Aguardando evidências/aprovação para continuar.";

const EVENT_TYPES = Object.freeze({
  START_DISCOVERY: "START_DISCOVERY",
  APPROVE_RESEARCH: "APPROVE_RESEARCH",
  REQUEST_RESEARCH_CHANGES: "REQUEST_RESEARCH_CHANGES",
  APPROVE_RESEARCH_PLAN: "APPROVE_RESEARCH_PLAN",
  REQUEST_RESEARCH_PLAN_CHANGES: "REQUEST_RESEARCH_PLAN_CHANGES",
  SUBMIT_EVIDENCE: "SUBMIT_EVIDENCE",
  APPROVE_INSIGHTS: "APPROVE_INSIGHTS",
  REQUEST_SYNTHESIS_REVIEW: "REQUEST_SYNTHESIS_REVIEW",
  REQUEST_INSIGHT_CHANGES: "REQUEST_INSIGHT_CHANGES",
  APPROVE_OPPORTUNITIES: "APPROVE_OPPORTUNITIES",
  REQUEST_OPPORTUNITY_REVIEW: "REQUEST_OPPORTUNITY_REVIEW",
  REQUEST_OPPORTUNITY_CHANGES: "REQUEST_OPPORTUNITY_CHANGES",
  ACCEPT_HANDOFF: "ACCEPT_HANDOFF",
  REQUEST_HANDOFF_CHANGES: "REQUEST_HANDOFF_CHANGES",
  RETRY_RUN: "RETRY_RUN",
});

const HUMAN_GATES = Object.freeze({
  [WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING]: {
    label: "Aprovação do plano de pesquisa",
    primaryAction: "Aprovar plano de pesquisa",
    secondaryAction: "Solicitar ajustes no plano",
    approveEvent: EVENT_TYPES.APPROVE_RESEARCH,
    changeEvent: EVENT_TYPES.REQUEST_RESEARCH_CHANGES,
  },
  [WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING]: {
    label: "Envio de evidências",
    primaryAction: "Enviar evidências",
    secondaryAction: "",
    approveEvent: EVENT_TYPES.SUBMIT_EVIDENCE,
    changeEvent: "",
  },
  [WORKFLOW_STATES.INSIGHT_REVIEW_PENDING]: {
    label: "Revisão de insights",
    primaryAction: "Aprovar insights",
    secondaryAction: "Solicitar ajustes nos insights",
    approveEvent: EVENT_TYPES.APPROVE_INSIGHTS,
    changeEvent: EVENT_TYPES.REQUEST_SYNTHESIS_REVIEW,
  },
  [WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING]: {
    label: "Revisão de oportunidades",
    primaryAction: "Aprovar oportunidades",
    secondaryAction: "Solicitar ajustes nas oportunidades",
    approveEvent: EVENT_TYPES.APPROVE_OPPORTUNITIES,
    changeEvent: EVENT_TYPES.REQUEST_OPPORTUNITY_REVIEW,
  },
});

const MVP_WORKFLOW_STEPS = Object.freeze([
  {
    state: WORKFLOW_STATES.DISCOVERY_CREATED,
    label: "Estruturação do discovery",
    nextAction: "Aguardar análise do DOR",
  },
  {
    state: WORKFLOW_STATES.DOR_ANALYZING,
    label: "Estruturação do discovery",
    nextAction: "Aguardar plano de pesquisa",
  },
  {
    state: WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING,
    label: "Planejamento de pesquisa",
    nextAction: HUMAN_GATES[WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING].primaryAction,
  },
  {
    state: WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING,
    label: "Processamento de evidências",
    nextAction: HUMAN_GATES[WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING].primaryAction,
  },
  {
    state: WORKFLOW_STATES.PRIMARY_RESEARCH_PROCESSING,
    label: "Processamento de evidências",
    nextAction: "Aguardar revisão de insights",
  },
  {
    state: WORKFLOW_STATES.INSIGHT_REVIEW_PENDING,
    label: "Síntese de insights",
    nextAction: HUMAN_GATES[WORKFLOW_STATES.INSIGHT_REVIEW_PENDING].primaryAction,
  },
  {
    state: WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING,
    label: "Mapeamento de oportunidades",
    nextAction: HUMAN_GATES[WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING].primaryAction,
  },
  {
    state: WORKFLOW_STATES.RECOMMENDATION_RUNNING,
    label: "Recomendação estratégica",
    nextAction: "Aguardar handoff",
  },
  {
    state: WORKFLOW_STATES.HANDOFF_RUNNING,
    label: "Handoff",
    nextAction: "Aguardar conclusão",
  },
  {
    state: WORKFLOW_STATES.COMPLETED,
    label: "Handoff",
    nextAction: "Ver handoff final",
  },
]);

const MVP_TIMELINE_STEPS = Object.freeze([
  {
    label: "Estruturação do discovery",
    states: [WORKFLOW_STATES.DISCOVERY_CREATED, WORKFLOW_STATES.DOR_ANALYZING],
  },
  {
    label: "Planejamento de pesquisa",
    states: [WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING],
  },
  {
    label: "Processamento de evidências",
    states: [WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING, WORKFLOW_STATES.PRIMARY_RESEARCH_PROCESSING],
  },
  {
    label: "Síntese de insights",
    states: [WORKFLOW_STATES.INSIGHT_REVIEW_PENDING],
  },
  {
    label: "Mapeamento de oportunidades",
    states: [WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING],
  },
  {
    label: "Recomendação estratégica",
    states: [WORKFLOW_STATES.RECOMMENDATION_RUNNING],
  },
  {
    label: "Handoff",
    states: [WORKFLOW_STATES.HANDOFF_RUNNING, WORKFLOW_STATES.COMPLETED],
  },
]);

function normalizeWorkflowValue(value = "") {
  return String(value || "").trim().toUpperCase();
}

function isWaitingForHuman(state, status) {
  const normalizedState = normalizeWorkflowValue(state);
  const normalizedStatus = normalizeWorkflowValue(status);
  return normalizedStatus === RUN_STATUSES.WAITING_FOR_HUMAN || Boolean(HUMAN_GATES[normalizedState]);
}

function isTerminalState(state, status) {
  const normalizedState = normalizeWorkflowValue(state);
  const normalizedStatus = normalizeWorkflowValue(status);
  return normalizedState === WORKFLOW_STATES.COMPLETED
    || normalizedState === WORKFLOW_STATES.FAILED
    || normalizedStatus === RUN_STATUSES.COMPLETED
    || normalizedStatus === RUN_STATUSES.FAILED
    || normalizedStatus === RUN_STATUSES.CANCELLED;
}

function getAllowedFrontendActions(state, status) {
  const normalizedState = normalizeWorkflowValue(state);
  const normalizedStatus = normalizeWorkflowValue(status);

  if (isTerminalState(normalizedState, normalizedStatus)) {
    return normalizedState === WORKFLOW_STATES.FAILED || normalizedStatus === RUN_STATUSES.FAILED
      ? [EVENT_TYPES.RETRY_RUN]
      : [];
  }

  const gate = HUMAN_GATES[normalizedState];
  if (isWaitingForHuman(normalizedState, normalizedStatus) && gate) {
    return [gate.approveEvent, gate.changeEvent].filter(Boolean);
  }

  if (normalizedState === WORKFLOW_STATES.DISCOVERY_CREATED && [RUN_STATUSES.IDLE, ""].includes(normalizedStatus)) {
    return [EVENT_TYPES.START_DISCOVERY];
  }

  return [];
}

function getWorkflowStepIndex(state) {
  const normalizedState = normalizeWorkflowValue(state);
  const index = MVP_WORKFLOW_STEPS.findIndex((step) => step.state === normalizedState);
  if (index >= 0) {
    return index;
  }

  if (normalizedState === WORKFLOW_STATES.FAILED) {
    return MVP_WORKFLOW_STEPS.length - 1;
  }

  return 0;
}

function getWorkflowProgressPercentage(state) {
  const stepCount = MVP_WORKFLOW_STEPS.length;
  if (stepCount <= 1) {
    return 0;
  }

  const normalizedState = normalizeWorkflowValue(state);
  if (normalizedState === WORKFLOW_STATES.FAILED) {
    return 100;
  }

  const index = getWorkflowStepIndex(normalizedState);
  return Math.round((index / (stepCount - 1)) * 100);
}

function getHumanGateLabel(state) {
  const normalizedState = normalizeWorkflowValue(state);
  return HUMAN_GATES[normalizedState]?.label || "";
}

function getNextActionLabel(state) {
  const normalizedState = normalizeWorkflowValue(state);
  const gate = HUMAN_GATES[normalizedState];
  if (gate?.primaryAction) {
    return gate.primaryAction;
  }

  const step = MVP_WORKFLOW_STEPS.find((item) => item.state === normalizedState);
  if (step?.nextAction) {
    return step.nextAction;
  }

  if (normalizedState === WORKFLOW_STATES.FAILED) {
    return "Tentar novamente";
  }

  return "Acompanhar workflow";
}

function getWorkflowStepLabel(state) {
  const normalizedState = normalizeWorkflowValue(state);
  if (normalizedState === WORKFLOW_STATES.FAILED) {
    return "Falha";
  }

  return MVP_WORKFLOW_STEPS.find((step) => step.state === normalizedState)?.label || "Workflow iniciado";
}

function getRunStatusLabel(status = "") {
  const normalizedStatus = normalizeWorkflowValue(status);
  const labels = {
    [RUN_STATUSES.IDLE]: "Aguardando início",
    [RUN_STATUSES.RUNNING]: "Em processamento",
    [RUN_STATUSES.WAITING_FOR_HUMAN]: "Aguardando ação humana",
    [RUN_STATUSES.COMPLETED]: "Concluído",
    [RUN_STATUSES.FAILED]: "Falhou",
    [RUN_STATUSES.CANCELLED]: "Cancelado",
  };

  return labels[normalizedStatus] || "Status não informado";
}

function getAgentProcessingStatus(state, status) {
  const normalizedState = normalizeWorkflowValue(state);
  const normalizedStatus = normalizeWorkflowValue(status);

  if (normalizedState === WORKFLOW_STATES.FAILED || normalizedStatus === RUN_STATUSES.FAILED) {
    return AGENT_PROCESSING_STATUSES.FAILED;
  }

  if (normalizedState === WORKFLOW_STATES.COMPLETED || normalizedStatus === RUN_STATUSES.COMPLETED) {
    return AGENT_PROCESSING_STATUSES.COMPLETED;
  }

  if (isWaitingForHuman(normalizedState, normalizedStatus)) {
    return AGENT_PROCESSING_STATUSES.WAITING_FOR_HUMAN;
  }

  if (normalizedStatus === RUN_STATUSES.IDLE) {
    return AGENT_PROCESSING_STATUSES.NOT_STARTED;
  }

  return AGENT_PROCESSING_STATUSES.PROCESSING;
}

function getAgentProcessingStatusLabel(status = "") {
  const labels = {
    [AGENT_PROCESSING_STATUSES.NOT_STARTED]: "not_started",
    [AGENT_PROCESSING_STATUSES.PROCESSING]: "processing",
    [AGENT_PROCESSING_STATUSES.WAITING_FOR_HUMAN]: "waiting_for_human",
    [AGENT_PROCESSING_STATUSES.COMPLETED]: "completed",
    [AGENT_PROCESSING_STATUSES.FAILED]: "failed",
  };

  return labels[status] || AGENT_PROCESSING_STATUSES.PROCESSING;
}

function getMvpTimelineStepIndex(state) {
  const normalizedState = normalizeWorkflowValue(state);
  const index = MVP_TIMELINE_STEPS.findIndex((step) => step.states.includes(normalizedState));
  return index >= 0 ? index : 0;
}

let crewAiPollIntervalMs = DEFAULT_CREWAI_POLL_INTERVAL_MS;
let crewAiPollTimeoutMs = DEFAULT_CREWAI_POLL_TIMEOUT_MS;
let crewAiClientConfigLoaded = false;
let discoveryRunPollIntervalMs = DEFAULT_DISCOVERY_POLL_INTERVAL_MS;
let discoveryRunPollingConfigLoaded = false;

const CURRENT_USER_PROFILE = {
  id: "perfil-ambev-demo",
  name: "Perfil Ambev",
  productIds: ["cora-precos", "cora-promocoes", "cora-transportes", "cora-agreements"],
};
const MVP_MODE_ENABLED = DISCOVERY_FRONTEND_CONFIG.mvpMode !== false;
const CONVERSATIONAL_ASSISTANT_ENABLED = DISCOVERY_FRONTEND_CONFIG.conversationalAssistantEnabled === true;
const AGENT_WORKFLOW_ENABLED = DISCOVERY_FRONTEND_CONFIG.agentWorkflowEnabled !== false;
const EXTERNAL_INTEGRATIONS_ENABLED = DISCOVERY_FRONTEND_CONFIG.externalIntegrationsEnabled === true;
const CREATED_DISCOVERIES_STORAGE_KEY = "discoveryIa.createdDiscoveries";
const PRODUCT_FAVORITES_STORAGE_KEY = "discoveryIa.productFavoritesByUser";
const FAVORITE_DISCOVERIES_STORAGE_KEY = "discoveryIa.favoriteDiscoveryIds";
const SIDEBAR_PINNED_STORAGE_KEY = "discoveryIa.sidebarPinned";
const SIDEBAR_SELECTED_SECTION_STORAGE_KEY = "discoveryIa.sidebarSelectedSection";
const PRODUCT_AUDIENCE_STORAGE_KEY = "discoveryIa.productAudienceByProduct";
const RESEARCH_ACTIVITY_USERS_STORAGE_KEY = "discoveryIa.researchActivityUsers";
const LOCAL_MOCK_RUNS_STORAGE_KEY = "discoveryIa.localMockRuns";
const DEFAULT_AUDIENCE_TIMESTAMP = "2026-05-25T12:00:00.000Z";

const PERSONA_TYPES = Object.freeze({
  PRIMARY_USER: "PRIMARY_USER",
  SECONDARY_USER: "SECONDARY_USER",
  INTERNAL_USER: "INTERNAL_USER",
  OPERATOR: "OPERATOR",
  BUYER: "BUYER",
  INFLUENCER: "INFLUENCER",
});
const AUDIENCE_STATUSES = Object.freeze({
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
});
const INFLUENCE_LEVELS = Object.freeze({
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
});

const PERSONA_TYPE_LABELS = {
  [PERSONA_TYPES.PRIMARY_USER]: "Usuário primário",
  [PERSONA_TYPES.SECONDARY_USER]: "Usuário secundário",
  [PERSONA_TYPES.INTERNAL_USER]: "Usuário interno",
  [PERSONA_TYPES.OPERATOR]: "Operador",
  [PERSONA_TYPES.BUYER]: "Comprador",
  [PERSONA_TYPES.INFLUENCER]: "Influenciador",
};

const AUDIENCE_STATUS_LABELS = {
  [AUDIENCE_STATUSES.ACTIVE]: "Ativo",
  [AUDIENCE_STATUSES.ARCHIVED]: "Arquivado",
};

const INFLUENCE_LEVEL_LABELS = {
  [INFLUENCE_LEVELS.LOW]: "Baixa",
  [INFLUENCE_LEVELS.MEDIUM]: "Média",
  [INFLUENCE_LEVELS.HIGH]: "Alta",
};

function getFrontendApiModeLabel() {
  const labels = {
    [DISCOVERY_FRONTEND_API_MODES.MVP_BACKEND]: "MVP backend",
    [DISCOVERY_FRONTEND_API_MODES.LOCAL_MOCK]: "Modo demo",
    [DISCOVERY_FRONTEND_API_MODES.LEGACY_CREWAI]: "CrewAI legado",
  };

  return labels[DISCOVERY_FRONTEND_API_MODE] || DISCOVERY_FRONTEND_API_MODE;
}

function renderApiModeBadge() {
  if (!apiModeBadge) {
    return;
  }

  apiModeBadge.textContent = getFrontendApiModeLabel();
  apiModeBadge.title = `Modo da API frontend: ${DISCOVERY_FRONTEND_API_MODE}`;
  apiModeBadge.dataset.mode = DISCOVERY_FRONTEND_API_MODE;
}

function isDemoApiMode() {
  return DISCOVERY_FRONTEND_API_MODE === DISCOVERY_FRONTEND_API_MODES.LOCAL_MOCK;
}

function showDemoModeMessage() {
  showAppToast(DEMO_MODE_MESSAGE, "success");
}

function loadCreatedDiscoveries() {
  try {
    const storedDiscoveries = window.localStorage.getItem(CREATED_DISCOVERIES_STORAGE_KEY);
    if (!storedDiscoveries) {
      return [];
    }

    const parsedDiscoveries = JSON.parse(storedDiscoveries);
    if (!Array.isArray(parsedDiscoveries)) {
      return [];
    }

    return parsedDiscoveries.filter((discovery) => discovery && typeof discovery === "object" && typeof discovery.id === "string" && discovery.id.trim());
  } catch (error) {
    return [];
  }
}

function saveCreatedDiscoveries() {
  try {
    window.localStorage.setItem(CREATED_DISCOVERIES_STORAGE_KEY, JSON.stringify(createdDiscoveries));
  } catch (error) {
    // Local persistence is best-effort in the static prototype.
  }
}

function normalizeDiscoveryLifecycleFields(discovery = {}) {
  const updatedAt = discovery.updatedAt
    || discovery.updated_at
    || discovery.lastUpdated
    || discovery.last_activity
    || discovery.createdAt
    || discovery.created_at
    || new Date().toISOString();
  const currentState = discovery.currentState
    || discovery.current_state
    || discovery.workflow_state
    || discovery.state
    || WORKFLOW_STATES.DISCOVERY_CREATED;
  const runStatus = normalizeRunStatusForWorkflow(discovery.run_status || discovery.runStatus || discovery.status, currentState);
  const agentProcessingStatus = discovery.agentProcessingStatus
    || discovery.agent_processing_status
    || getAgentProcessingStatus(currentState, runStatus);
  const legacyCsd = discovery.csd || {
    certezas: [],
    suposicoes: [],
    duvidas: [],
  };

  return {
    ...discovery,
    workflow: discovery.workflow || discovery.workflow_state || currentState,
    currentState,
    current_state: discovery.current_state || currentState,
    run_status: discovery.run_status || runStatus,
    agentProcessingStatus,
    agent_processing_status: agentProcessingStatus,
    updatedAt,
    updated_at: discovery.updated_at || updatedAt,
    csdMatrix: discovery.csdMatrix || discovery.csd_matrix || createCsdMatrixFromLegacyCsd(legacyCsd, { updatedAt }),
  };
}

function upsertCreatedDiscovery(discovery) {
  if (!discovery || typeof discovery !== "object" || !String(discovery.id || "").trim()) {
    return null;
  }

  const normalizedDiscovery = enrichDiscoveryWithFavorite(normalizeDiscoveryAudience(enrichDiscoveryMethodology(normalizeDiscoveryLifecycleFields(discovery))));
  createdDiscoveries = [
    normalizedDiscovery,
    ...createdDiscoveries.filter((item) => item.id !== normalizedDiscovery.id),
  ];
  saveCreatedDiscoveries();
  return normalizedDiscovery;
}

function updateCreatedDiscoveryRun(runId, patch) {
  const normalizedRunId = String(runId || "").trim();
  if (!normalizedRunId || !patch || typeof patch !== "object") {
    return null;
  }

  let updatedDiscovery = null;
  createdDiscoveries = createdDiscoveries.map((discovery) => {
    const discoveryRunIds = [
      discovery.runId,
      discovery.run_id,
      discovery.kickoff_id,
      discovery.crewAi?.runId,
      discovery.crewAi?.run_id,
      discovery.crewAi?.kickoffId,
    ].filter(Boolean).map((item) => String(item));

    if (!discoveryRunIds.includes(normalizedRunId)) {
      return discovery;
    }

    updatedDiscovery = {
      ...discovery,
      ...patch,
    };
    updatedDiscovery = enrichDiscoveryWithFavorite(normalizeDiscoveryAudience(enrichDiscoveryMethodology(normalizeDiscoveryLifecycleFields(updatedDiscovery))));
    return updatedDiscovery;
  });

  if (updatedDiscovery) {
    if (draftDiscovery?.id === updatedDiscovery.id) {
      draftDiscovery = updatedDiscovery;
    }
    saveCreatedDiscoveries();
  }

  return updatedDiscovery;
}

function createDefaultFavoriteProductsTable() {
  return {
    [CURRENT_USER_PROFILE.id]: [],
  };
}

function loadFavoriteProductsTable() {
  try {
    const storedTable = window.localStorage.getItem(PRODUCT_FAVORITES_STORAGE_KEY);
    if (!storedTable) {
      return createDefaultFavoriteProductsTable();
    }

    const parsedTable = JSON.parse(storedTable);
    if (!parsedTable || typeof parsedTable !== "object" || Array.isArray(parsedTable)) {
      return createDefaultFavoriteProductsTable();
    }

    return {
      ...createDefaultFavoriteProductsTable(),
      ...parsedTable,
    };
  } catch (error) {
    return createDefaultFavoriteProductsTable();
  }
}

function saveFavoriteProductsTable() {
  window.localStorage.setItem(PRODUCT_FAVORITES_STORAGE_KEY, JSON.stringify(favoriteProductsByUser));
}

function getCurrentUserFavoriteProductIds() {
  return favoriteProductsByUser[CURRENT_USER_PROFILE.id] || [];
}

function setCurrentUserFavoriteProductIds(productIds) {
  favoriteProductsByUser = {
    ...favoriteProductsByUser,
    [CURRENT_USER_PROFILE.id]: [...new Set(productIds)],
  };
  saveFavoriteProductsTable();
}

function isProductFavorited(productId) {
  return getCurrentUserFavoriteProductIds().includes(productId);
}

function toggleProductFavorite(productId) {
  const favoriteIds = getCurrentUserFavoriteProductIds();
  const nextFavoriteIds = favoriteIds.includes(productId)
    ? favoriteIds.filter((id) => id !== productId)
    : [...favoriteIds, productId];

  setCurrentUserFavoriteProductIds(nextFavoriteIds);
}

function getDiscoveryIdFromCard(card = null) {
  if (!card) {
    return "";
  }

  return String(
    card.dataset.discoveryId
      || card.dataset.productDiscoveryId
      || slugify(card.dataset.title || card.querySelector("h3")?.textContent || "")
  ).trim();
}

function getDefaultFavoriteDiscoveryIdsFromDom() {
  if (!discoveryGrid) {
    return [];
  }

  return [...discoveryGrid.querySelectorAll(".discovery-card")]
    .filter((card) => card.querySelector(".star-button.active"))
    .map((card) => getDiscoveryIdFromCard(card))
    .filter(Boolean);
}

function normalizeFavoriteDiscoveryIds(ids = []) {
  return [...new Set((Array.isArray(ids) ? ids : [])
    .map((id) => String(id || "").trim())
    .filter(Boolean))];
}

function loadFavoriteDiscoveryIds() {
  try {
    const storedIds = window.localStorage.getItem(FAVORITE_DISCOVERIES_STORAGE_KEY);
    if (!storedIds) {
      return getDefaultFavoriteDiscoveryIdsFromDom();
    }

    const parsedIds = JSON.parse(storedIds);
    if (Array.isArray(parsedIds)) {
      return normalizeFavoriteDiscoveryIds(parsedIds);
    }

    if (parsedIds && typeof parsedIds === "object") {
      return normalizeFavoriteDiscoveryIds(Object.values(parsedIds).flat());
    }

    return [];
  } catch (error) {
    return getDefaultFavoriteDiscoveryIdsFromDom();
  }
}

function getFavoriteDiscoveryIds() {
  return normalizeFavoriteDiscoveryIds(favoriteDiscoveryIds);
}

function saveFavoriteDiscoveryIds(ids = getFavoriteDiscoveryIds()) {
  favoriteDiscoveryIds = normalizeFavoriteDiscoveryIds(ids);
  try {
    window.localStorage.setItem(FAVORITE_DISCOVERIES_STORAGE_KEY, JSON.stringify(favoriteDiscoveryIds));
  } catch (error) {
    // Local persistence is best-effort in the static prototype.
  }
  return favoriteDiscoveryIds;
}

function isDiscoveryFavorite(discoveryId = "") {
  const normalizedDiscoveryId = String(discoveryId || "").trim();
  return Boolean(normalizedDiscoveryId && getFavoriteDiscoveryIds().includes(normalizedDiscoveryId));
}

function enrichDiscoveryWithFavorite(discovery = {}) {
  if (!discovery || typeof discovery !== "object") {
    return discovery;
  }

  return {
    ...discovery,
    isFavorite: isDiscoveryFavorite(discovery.id),
  };
}

function getProductForDiscoverySummary(discovery = {}) {
  const productLabel = discovery.productId || discovery.product_id || discovery.product || "";
  return getProductById(productLabel)
    || products.find((product) => normalizeText(product.name) === normalizeText(productLabel))
    || products.find((product) => normalizeText(product.category) === normalizeText(productLabel))
    || products.find((product) => normalizeText(product.name) === normalizeText(discovery.title || discovery.name || ""))
    || products[0];
}

function resolveFavoriteDiscovery(discoveryId = "") {
  const normalizedDiscoveryId = String(discoveryId || "").trim();
  if (!normalizedDiscoveryId) {
    return null;
  }

  const createdDiscovery = findCreatedDiscovery(normalizedDiscoveryId)
    || (draftDiscovery?.id === normalizedDiscoveryId ? draftDiscovery : null);
  if (createdDiscovery) {
    const product = getDiscoveryProduct(createdDiscovery);
    return {
      ...enrichDiscoveryWithFavorite(createdDiscovery),
      id: createdDiscovery.id,
      title: createdDiscovery.name || createdDiscovery.title || "Discovery",
      productId: product.id,
      productName: product.name,
      route: "discovery",
      missing: false,
    };
  }

  const recentDiscovery = discoveries.find((discovery) => String(discovery.id || slugify(discovery.title || "")).trim() === normalizedDiscoveryId);
  if (recentDiscovery) {
    const product = getProductForDiscoverySummary(recentDiscovery);
    return {
      ...recentDiscovery,
      id: normalizedDiscoveryId,
      title: recentDiscovery.title || "Discovery",
      productId: product.id,
      productName: product.name,
      route: "discovery",
      isFavorite: true,
      missing: false,
    };
  }

  const preferredProducts = [
    getProductById(selectedProductId),
    ...products,
  ].filter(Boolean);
  const uniquePreferredProducts = [...new Map(preferredProducts.map((product) => [product.id, product])).values()];
  for (const product of uniquePreferredProducts) {
    const productDiscovery = getProductDiscoveries(product).find((discovery) => discovery.id === normalizedDiscoveryId);
    if (productDiscovery) {
      return {
        ...productDiscovery,
        id: productDiscovery.id,
        title: productDiscovery.title || productDiscovery.name || "Discovery",
        productId: product.id,
        productName: product.name,
        route: "discovery",
        isFavorite: true,
        missing: false,
      };
    }
  }

  return {
    id: normalizedDiscoveryId,
    title: "Discovery favoritado não encontrado.",
    productId: selectedProductId || products[0].id,
    route: "discovery",
    isFavorite: true,
    missing: true,
  };
}

function getFavoriteDiscoveries() {
  return getFavoriteDiscoveryIds()
    .map((discoveryId) => resolveFavoriteDiscovery(discoveryId))
    .filter(Boolean);
}

function migrateFavoriteDiscoveryIds(ids = getFavoriteDiscoveryIds()) {
  const migratedIds = [
    ...normalizeFavoriteDiscoveryIds(ids),
    ...createdDiscoveries
      .filter((discovery) => discovery?.isFavorite === true || discovery?.favorite === true)
      .map((discovery) => discovery.id),
  ];
  return saveFavoriteDiscoveryIds(migratedIds);
}

function refreshDiscoveryFavoriteControls(scope = document) {
  scope.querySelectorAll(".discovery-card").forEach((card) => {
    const discoveryId = getDiscoveryIdFromCard(card);
    if (discoveryId && !card.dataset.discoveryId && !card.dataset.productDiscoveryId) {
      card.dataset.discoveryId = discoveryId;
    }

    const favoriteButton = card.querySelector(".star-button");
    if (!favoriteButton || !discoveryId) {
      return;
    }

    const isFavorite = isDiscoveryFavorite(discoveryId);
    favoriteButton.classList.toggle("active", isFavorite);
    favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    favoriteButton.setAttribute("aria-label", isFavorite ? "Remover dos favoritos" : "Favoritar discovery");
  });

  scope.querySelectorAll("[data-discovery-favorite]").forEach((favoriteButton) => {
    const discoveryId = String(favoriteButton.dataset.discoveryFavorite || "").trim();
    if (!discoveryId) {
      return;
    }

    const isFavorite = isDiscoveryFavorite(discoveryId);
    favoriteButton.classList.toggle("active", isFavorite);
    favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    favoriteButton.setAttribute("aria-label", isFavorite ? "Remover dos favoritos" : "Favoritar discovery");
  });
}

function syncDiscoveryDetailFavoriteButton(discoveryId = selectedDiscoveryId) {
  if (!discoveryDetailFavorite) {
    return;
  }

  const normalizedDiscoveryId = String(discoveryId || "").trim();
  const isFavorite = isDiscoveryFavorite(normalizedDiscoveryId);
  discoveryDetailFavorite.hidden = !normalizedDiscoveryId;
  discoveryDetailFavorite.dataset.discoveryFavorite = normalizedDiscoveryId;
  discoveryDetailFavorite.classList.toggle("active", isFavorite);
  discoveryDetailFavorite.setAttribute("aria-pressed", String(isFavorite));
  discoveryDetailFavorite.setAttribute("aria-label", isFavorite ? "Remover dos favoritos" : "Favoritar discovery");
}

function renderFavoriteDiscoveriesMenu(activeDiscoveryId = selectedDiscoveryId) {
  if (!favoriteDiscoveriesMenu) {
    return;
  }

  const favoriteDiscoveries = getFavoriteDiscoveries();
  favoriteDiscoveriesMenu.innerHTML = favoriteDiscoveries.length
    ? favoriteDiscoveries.map((discovery) => {
      if (discovery.missing) {
        return `
          <button class="nav-link nav-link-favorite nav-link-stale" type="button" data-remove-favorite-discovery="${escapeHTML(discovery.id)}">
            <span>Discovery favoritado não encontrado.</span>
            <small>Remover</small>
          </button>
        `;
      }

      const activeClass = discovery.id === activeDiscoveryId ? " active" : "";
      return `
        <a href="#discovery/${escapeHTML(discovery.id)}/${escapeHTML(discovery.productId)}" class="nav-link nav-link-favorite${activeClass}" data-favorite-discovery-shortcut="${escapeHTML(discovery.id)}">
          <span>${escapeHTML(discovery.title || discovery.name || "Discovery")}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2"></polygon>
          </svg>
        </a>
      `;
    }).join("")
    : '<span class="favorite-discoveries-empty">Sem favoritos</span>';
}

function getSidebarProductsWithFavorites() {
  const productMap = new Map();
  const addProduct = (product) => {
    if (product?.id && !productMap.has(product.id)) {
      productMap.set(product.id, product);
    }
  };

  getUserProducts().forEach(addProduct);
  getFavoriteProductsForCurrentUser().forEach(addProduct);
  getFavoriteDiscoveries()
    .filter((discovery) => discovery && !discovery.missing)
    .forEach((discovery) => addProduct(getProductById(discovery.productId) || getProductForDiscoverySummary(discovery)));

  return Array.from(productMap.values());
}

function getFavoriteDiscoveriesForProduct(productId = "") {
  return getFavoriteDiscoveries()
    .filter((discovery) => discovery && !discovery.missing && discovery.productId === productId);
}

function getDiscoveryShortLabel(discovery = {}) {
  const title = String(discovery.title || discovery.name || "D").trim();
  return title.split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toUpperCase() || "D";
}

function toggleDiscoveryFavorite(discoveryId = "") {
  const normalizedDiscoveryId = String(discoveryId || "").trim();
  if (!normalizedDiscoveryId) {
    return false;
  }

  const currentFavoriteIds = getFavoriteDiscoveryIds();
  const nextIsFavorite = !currentFavoriteIds.includes(normalizedDiscoveryId);
  const nextFavoriteIds = nextIsFavorite
    ? [...currentFavoriteIds, normalizedDiscoveryId]
    : currentFavoriteIds.filter((id) => id !== normalizedDiscoveryId);

  saveFavoriteDiscoveryIds(nextFavoriteIds);
  let shouldSaveCreatedDiscoveries = false;
  createdDiscoveries = createdDiscoveries.map((discovery) => {
    if (discovery.id !== normalizedDiscoveryId) {
      return discovery;
    }

    shouldSaveCreatedDiscoveries = true;
    return {
      ...discovery,
      isFavorite: nextIsFavorite,
    };
  });
  if (shouldSaveCreatedDiscoveries) {
    saveCreatedDiscoveries();
  }

  renderFavoriteDiscoveriesMenu(selectedDiscoveryId);
  renderFavoriteProductsMenu(selectedProductId, getCurrentRoute());
  refreshDiscoveryFavoriteControls();
  syncDiscoveryDetailFavoriteButton(selectedDiscoveryId);
  return nextIsFavorite;
}

function removeFavoriteDiscovery(discoveryId = "") {
  const normalizedDiscoveryId = String(discoveryId || "").trim();
  if (!normalizedDiscoveryId) {
    return;
  }

  saveFavoriteDiscoveryIds(getFavoriteDiscoveryIds().filter((id) => id !== normalizedDiscoveryId));
  createdDiscoveries = createdDiscoveries.map((discovery) => discovery.id === normalizedDiscoveryId
    ? { ...discovery, isFavorite: false }
    : discovery);
  saveCreatedDiscoveries();
  renderFavoriteDiscoveriesMenu(selectedDiscoveryId);
  renderFavoriteProductsMenu(selectedProductId, getCurrentRoute());
  refreshDiscoveryFavoriteControls();
  syncDiscoveryDetailFavoriteButton(selectedDiscoveryId);
}

function navigateToDiscovery(discoveryId = "") {
  const favoriteDiscovery = resolveFavoriteDiscovery(discoveryId);
  if (!favoriteDiscovery || favoriteDiscovery.missing) {
    showAppToast("Discovery favoritado não encontrado.", "error");
    renderFavoriteDiscoveriesMenu(selectedDiscoveryId);
    return false;
  }

  setRoute("discovery", favoriteDiscovery.productId, favoriteDiscovery.id);
  return true;
}

let createdDiscoveries = [];
let favoriteProductsByUser = loadFavoriteProductsTable();
let favoriteDiscoveryIds = loadFavoriteDiscoveryIds();
let productAudienceByProduct = {};

const flowSelectOptions = {
  responsaveis: ["Bruno Lima", "Camila Rocha", "Ana Martins", "Diego Santos", "Fernanda Souza"],
  personas: ["Analista de Topline", "Especialista Trade Price", "Analista de vendas", "Coordenador de Topline", "Especialista de Vendas"],
  stakeholders: ["Patrícia Gomes", "Gustavo Oliveira", "Renato Lima", "Beatriz Nascimento", "Thiago Moreira"],
};

const defaultFlowSelectValues = {
  responsaveis: ["Bruno Lima"],
  personas: ["Analista de Topline"],
  stakeholders: [],
};

let flowSelectValues = {
  responsaveis: [...defaultFlowSelectValues.responsaveis],
  personas: [...defaultFlowSelectValues.personas],
  stakeholders: [...defaultFlowSelectValues.stakeholders],
};

const methodologyPackages = {
  optimized: {
    id: "optimized",
    name: "Discovery Otimizado",
    duration: "3-4 semanas",
    description: "Abordagem ágil focada em validações essenciais",
    methods: [
      {
        name: "Pesquisa em Profundidade",
        duration: "1-2 semanas",
        description: "Entrevistas qualitativas com usuários-chave para entender contexto, dores e necessidades",
        sample: "8-12 participantes",
      },
      {
        name: "Survey",
        duration: "1 semana",
        description: "Questionário online para validação quantitativa de hipóteses e priorização",
        sample: "50-100+ respostas",
      },
      {
        name: "Teste de Usabilidade",
        duration: "1 semana",
        description: "Validação de protótipos com usuários reais para identificar problemas de interação",
        sample: "5-8 participantes",
      },
    ],
  },
  complete: {
    id: "complete",
    name: "Discovery Completo",
    duration: "6-8 semanas",
    description: "Processo aprofundado com múltiplas camadas de validação",
    methods: [
      {
        name: "Pesquisa em Profundidade",
        duration: "2-3 semanas",
        description: "Entrevistas qualitativas detalhadas com diferentes perfis de usuários e stakeholders",
        sample: "15-20 participantes",
      },
      {
        name: "Desk Research",
        duration: "1 semana",
        description: "Análise de mercado, concorrência, tendências e dados secundários disponíveis",
        sample: "N/A - Análise documental",
      },
      {
        name: "Survey",
        duration: "1-2 semanas",
        description: "Pesquisa quantitativa ampla para validação estatística e segmentação de público",
        sample: "200+ respostas",
      },
      {
        name: "Shadowing",
        duration: "1 semana",
        description: "Observação contextual de usuários em seu ambiente natural de uso",
        sample: "5-8 sessões",
      },
      {
        name: "Card Sorting",
        duration: "1 semana",
        description: "Organização colaborativa de informações para definir arquitetura de informação",
        sample: "15-20 participantes",
      },
      {
        name: "Teste de Usabilidade",
        duration: "1-2 semanas",
        description: "Testes iterativos de protótipos com diferentes níveis de fidelidade",
        sample: "8-12 participantes",
      },
    ],
  },
};

const interviewParticipantSeed = [
  { id: "ana-martins", name: "Ana Martins", email: "ana.martins@ambev.com.br", role: "Analista de Topline", company: "Ambev", status: "Confirmado" },
  { id: "bruno-lima", name: "Bruno Lima", email: "bruno.lima@ambev.com.br", role: "Coordenador de Topline", company: "Ambev", status: "Confirmado" },
  { id: "camila-rocha", name: "Camila Rocha", email: "camila.rocha@ambev.com.br", role: "Especialista Trade Price", company: "Ambev", status: "Confirmado" },
  { id: "diego-santos", name: "Diego Santos", email: "diego.santos@parceiro.com", role: "Analista de vendas", company: "Distribuidor SP", status: "Enviado" },
  { id: "fernanda-souza", name: "Fernanda Souza", email: "fernanda.souza@ambev.com.br", role: "Especialista de Vendas", company: "Ambev", status: "Pendente" },
  { id: "rafael-nunes", name: "Rafael Nunes", email: "rafael.nunes@ambev.com.br", role: "Gerente de loja", company: "Parceiro Premium", status: "Pendente" },
  { id: "patricia-gomes", name: "Patrícia Gomes", email: "patricia.gomes@ambev.com.br", role: "Stakeholder comercial", company: "Ambev", status: "Enviado" },
  { id: "gustavo-oliveira", name: "Gustavo Oliveira", email: "gustavo.oliveira@ambev.com.br", role: "Analista de pricing", company: "Ambev", status: "Pendente" },
  { id: "beatriz-nascimento", name: "Beatriz Nascimento", email: "beatriz.nascimento@varejo.com", role: "Supervisora regional", company: "Rede Varejo", status: "Pendente" },
  { id: "renato-lima", name: "Renato Lima", email: "renato.lima@ambev.com.br", role: "Coordenador de vendas", company: "Ambev", status: "Recusado" },
  { id: "marina-costa", name: "Marina Costa", email: "marina.costa@ambev.com.br", role: "Especialista CX", company: "Ambev", status: "Pendente" },
  { id: "joao-vidal", name: "João Vidal", email: "joao.vidal@parceiro.com", role: "Promotor de loja", company: "Operação Sul", status: "Pendente" },
  { id: "lia-martins", name: "Lia Martins", email: "lia.martins@ambev.com.br", role: "Analista de dados", company: "Ambev", status: "Enviado" },
  { id: "pedro-campos", name: "Pedro Campos", email: "pedro.campos@parceiro.com", role: "Gerente de contas", company: "Distribuidor RJ", status: "Pendente" },
  { id: "carla-dias", name: "Carla Dias", email: "carla.dias@ambev.com.br", role: "Product Ops", company: "Ambev", status: "Pendente" },
];

const interviewGuideQuestions = [
  "Posso gravar esta conversa apenas para fins de análise interna e usar os aprendizados de forma agregada?",
  "Conte um pouco sobre sua rotina e quais decisões você precisa tomar relacionadas ao checkout ou fechamento de pedidos.",
  "Quais ferramentas ou fontes de informação você usa hoje para acompanhar preço, promoção e condição comercial?",
  "Me mostre o caminho que você costuma seguir quando precisa entender se uma promoção está correta.",
  "Em quais momentos você sente que precisa sair do fluxo principal para buscar contexto?",
  "Que tipo de confirmação você procura antes de confiar na informação apresentada?",
  "Qual parte do processo mais atrasa ou gera retrabalho hoje?",
  "Quando há divergência de preço, margem ou condição, como você descobre a causa?",
  "Se a experiência ideal existisse, o que ela mostraria primeiro para você?",
  "Existe algo importante sobre esse processo que não perguntamos e que deveríamos considerar?",
];

const usabilityGuideQuestions = [
  "Posso gravar esta sessão apenas para análise interna e uso agregado dos aprendizados?",
  "Qual é seu contexto com este fluxo, produto ou tarefa antes de começarmos?",
  "Observe a tela inicial e conte o que você entende que pode fazer aqui.",
  "Execute a tarefa principal em voz alta, explicando o que espera que aconteça a cada passo.",
  "Em qual ponto você ficou em dúvida, hesitou ou precisou procurar ajuda?",
  "O que pareceu fácil, difícil ou desnecessário durante a tarefa?",
  "Que informação, sinal ou ação faltou para você seguir com confiança?",
  "Se algo deu errado, como você tentou se recuperar?",
  "De 1 a 5, quão confiante você estaria para usar este fluxo sem ajuda?",
  "O que você mudaria primeiro para tornar a experiência mais clara?",
];

const RESEARCH_USER_STATUSES = Object.freeze({
  PENDENTE: {
    value: "PENDENTE",
    label: "Pendente",
    className: "pending",
  },
  ENVIADO: {
    value: "ENVIADO",
    label: "Enviado",
    className: "sent",
  },
  CONFIRMADO: {
    value: "CONFIRMADO",
    label: "Confirmado",
    className: "confirmed",
  },
  RECUSADO: {
    value: "RECUSADO",
    label: "Recusado",
    className: "declined",
  },
});

const RESEARCH_USER_STATUS_OPTIONS = [
  RESEARCH_USER_STATUSES.ENVIADO,
  RESEARCH_USER_STATUSES.CONFIRMADO,
  RESEARCH_USER_STATUSES.RECUSADO,
];

const participantInterviewDetails = {
  "ana-martins": {
    date: "14/05/2026",
    duration: "52 min",
    insights: {
      pains: "Perde tempo cruzando preço, condição comercial e histórico em três fontes diferentes antes de confiar no checkout.",
      behaviors: "Antes de aprovar uma promoção, abre planilhas antigas e consulta colegas para confirmar se o desvio é esperado.",
      expectations: "Espera ver alertas contextualizados, com motivo do desvio e impacto estimado antes da tomada de decisão.",
      opportunities: "Criar uma trilha de evidências no checkout com preço, margem, justificativa e recomendação em uma única leitura.",
    },
  },
  "bruno-lima": {
    date: "15/05/2026",
    duration: "48 min",
    insights: {
      pains: "Tem dificuldade para identificar quando uma condição promocional foi aplicada parcialmente no fluxo.",
      behaviors: "Usa conversas no Teams como memória operacional para recuperar decisões passadas.",
      expectations: "Quer um resumo confiável por pedido, com responsáveis e última alteração visíveis.",
      opportunities: "Expor histórico de mudanças e responsáveis diretamente na análise do checkout.",
    },
  },
  "camila-rocha": {
    date: "16/05/2026",
    duration: "55 min",
    insights: {
      pains: "A falta de padronização nos sinais faz com que cada analista interprete risco de um jeito diferente.",
      behaviors: "Prioriza casos com maior impacto financeiro, mesmo quando a fila exibe apenas ordem cronológica.",
      expectations: "Precisa de severidade, valor impactado e recomendação clara para decidir rápido.",
      opportunities: "Criar score de severidade combinado com impacto financeiro e confiança da evidência.",
    },
  },
};

const discoveries = [
  {
    title: "Dashboard operacional",
    product: "Cora Preços",
    status: "1/3 concluídos",
    insight: "Usuários precisam comparar variação de preço, margem e volume na mesma leitura.",
    next: "Validar a visualização de anomalias com operações e produto.",
  },
  {
    title: "Cora Transportes",
    product: "Logística",
    status: "2/3 concluídos",
    insight: "Atrasos ganham contexto quando o time cruza rota, janela de entrega e comunicação.",
    next: "Consolidar critérios de SLA e criar mapa de exceções.",
  },
  {
    title: "Conciliação de pagamentos",
    product: "Pagamentos",
    status: "3/3 concluídos",
    insight: "A principal dor é explicar divergências sem depender de planilhas paralelas.",
    next: "Transformar achados em requisitos para trilha de auditoria.",
  },
  {
    title: "Alertas inteligentes",
    product: "Operações",
    status: "1/3 concluídos",
    insight: "O time quer priorização por impacto, não apenas uma fila cronológica.",
    next: "Testar critério de severidade com três cenários reais.",
  },
  {
    title: "Onboarding de produto",
    product: "Growth",
    status: "0/3 concluídos",
    insight: "A primeira ação útil ainda não está clara para novos usuários.",
    next: "Entrevistar clientes que ativaram em menos de sete dias.",
  },
  {
    title: "Relatório de repasses",
    product: "Financeiro",
    status: "3/3 concluídos",
    insight: "O fechamento precisa mostrar origem da divergência antes da correção.",
    next: "Priorizar exportação e histórico de ajustes.",
  },
];

const products = [
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
      {
        id: "stakeholder-head-product",
        name: "Head de Produto",
        area: "Produto",
        role: "Decision maker",
        description: "Aprova prioridades e acompanha impacto estratégico.",
        interest: "Clareza de impacto, risco e priorização",
      },
      {
        id: "stakeholder-marketing-growth",
        name: "Marketing/Growth",
        area: "Growth",
        role: "Influenciador",
        description: "Define estratégia de comunicação e metas de aquisição ou engajamento.",
        interest: "Aumento de adesão, recorrência e eficiência das campanhas",
      },
      {
        id: "stakeholder-commercial-revenue",
        name: "Comercial/Revenue",
        area: "Revenue",
        role: "Sponsor de negócio",
        description: "Acompanha performance comercial, margem e coerência das mecânicas promocionais.",
        interest: "ROI da promoção, governança comercial e velocidade de execução",
      },
      {
        id: "stakeholder-finance",
        name: "Financeiro",
        area: "Financeiro",
        role: "Aprovador",
        description: "Avalia impacto financeiro, orçamento e contabilização dos incentivos.",
        interest: "Controle de custo, previsibilidade e conciliação",
      },
      {
        id: "stakeholder-data-bi",
        name: "Data/BI",
        area: "Dados",
        role: "Parceiro técnico",
        description: "Garante métricas, segmentações e leitura confiável dos resultados.",
        interest: "Disponibilidade, qualidade e rastreabilidade dos dados",
      },
      {
        id: "stakeholder-engineering",
        name: "Engenharia",
        area: "Tecnologia",
        role: "Delivery",
        description: "Avalia esforço técnico, dependências e riscos de implementação.",
        interest: "Escopo claro, critérios de aceite e integrações estáveis",
      },
      {
        id: "stakeholder-compliance-legal",
        name: "Compliance/Legal",
        area: "Governança",
        role: "Guardião de risco",
        description: "Valida regras, elegibilidade, comunicação e obrigações regulatórias.",
        interest: "Redução de risco legal, transparência e aderência às políticas",
      },
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
      {
        id: "stakeholder-head-product",
        name: "Head de Produto",
        area: "Produto",
        role: "Decision maker",
        description: "Aprova prioridades e acompanha impacto estratégico.",
        interest: "Clareza de impacto, risco e priorização",
      },
      {
        id: "stakeholder-commercial-revenue",
        name: "Comercial/Revenue",
        area: "Revenue",
        role: "Sponsor de negócio",
        description: "Acompanha performance comercial, margem e oportunidades de receita.",
        interest: "Proteção de margem, velocidade de reação e consistência comercial",
      },
      {
        id: "stakeholder-finance",
        name: "Financeiro",
        area: "Financeiro",
        role: "Aprovador",
        description: "Avalia impactos financeiros de variações e políticas de preço.",
        interest: "Margem, previsibilidade e governança financeira",
      },
      {
        id: "stakeholder-data-bi",
        name: "Data/BI",
        area: "Dados",
        role: "Parceiro técnico",
        description: "Garante métricas confiáveis, segmentações e leitura de performance.",
        interest: "Qualidade, disponibilidade e rastreabilidade dos dados",
      },
      {
        id: "stakeholder-engineering",
        name: "Engenharia",
        area: "Tecnologia",
        role: "Delivery",
        description: "Avalia esforço técnico, integrações e estabilidade do dashboard.",
        interest: "Escopo claro, dependências mapeadas e critérios de aceite",
      },
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
    description: "Produto voltado para rastrear rotas, SLA, gargalos logísticos e comunicação operacional.",
    lastActivity: "20/11/2025",
    discoveryCount: 1,
    doneCount: 1,
    progressCount: 0,
    favorite: true,
    about: "Mapeamento de gargalos em rotas, SLA e comunicação operacional.",
    metrics: ["SLA por rota", "Atrasos críticos", "Tempo de resposta"],
    squad: "Last Mile Squad",
    participants: "Bruno Lima, Camila Rocha",
    start: "25/04/2026",
    end: "20/05/2026",
    artifacts: ["Análise", "Mapa de exceções", "Plano de validação"],
  },
];

function getUserProducts() {
  const userProductIds = Array.isArray(CURRENT_USER_PROFILE.productIds) ? CURRENT_USER_PROFILE.productIds : [];
  if (!userProductIds.length) {
    return products.slice(0, 4);
  }

  const productsById = new Map(products.map((product) => [product.id, product]));
  return userProductIds.map((productId) => productsById.get(productId)).filter(Boolean);
}

function getProductAreaLabel(product = {}) {
  return product.area || product.tribe || product.category || product.tower || "Produto";
}

function getProductIconLabel(product = {}) {
  const explicitIcon = String(product.icon || "").trim();
  if (explicitIcon) {
    return explicitIcon;
  }

  const name = String(product.name || "P").trim();
  return name.split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toUpperCase() || "P";
}

function renderHomeProductBar() {
  if (!homeProductBar) {
    return;
  }

  const userProducts = getUserProducts();
  homeProductBar.innerHTML = userProducts.length
    ? userProducts.map((product) => `
      <button class="home-product-item" type="button" data-home-product-id="${escapeHTML(product.id)}" aria-label="Abrir produto ${escapeHTML(product.name)}">
        <span class="home-product-icon" aria-hidden="true">${escapeHTML(getProductIconLabel(product))}</span>
        <span class="home-product-copy">
          <strong>${escapeHTML(product.name)}</strong>
          <small>${escapeHTML(getProductAreaLabel(product))}</small>
        </span>
      </button>
    `).join("")
    : `<p class="home-products-empty">Nenhum produto vinculado ao usuário.</p>`;
}

const productAudienceMocks = {
  "cora-promocoes": {
    personas: [
      {
        id: "persona-pricing-analyst",
        name: "Analista de Pricing",
        type: PERSONA_TYPES.INTERNAL_USER,
        shortDescription: "Monitora impacto de preço, desconto e margem nas campanhas.",
        description: "Analista que precisa comparar cenários promocionais, entender desvios de margem e orientar ajustes comerciais com rapidez.",
        goals: ["Identificar desvios de margem", "Comparar mecânicas promocionais", "Priorizar campanhas com melhor retorno"],
        painPoints: ["Cruzamento manual de dados", "Baixa rastreabilidade de regras", "Dificuldade para explicar variações"],
        context: "Atua antes e durante campanhas promocionais, conectando preço, volume, desconto e margem.",
        segment: "Revenue",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-revenue-manager",
        name: "Gerente de Revenue",
        type: PERSONA_TYPES.INFLUENCER,
        shortDescription: "Acompanha performance e define prioridades comerciais.",
        description: "Liderança que precisa de leitura executiva sobre impacto, risco e trade-offs entre crescimento, margem e recorrência.",
        goals: ["Proteger margem", "Aumentar recorrência", "Decidir prioridades com evidência"],
        painPoints: ["Sinais tardios", "Baixa previsibilidade", "Muitas aprovações fora do fluxo"],
        context: "Usa a solução para acompanhar resultados e direcionar decisões sobre campanhas e incentivos.",
        segment: "Revenue",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-sales-coordinator",
        name: "Coordenador Comercial",
        type: PERSONA_TYPES.SECONDARY_USER,
        shortDescription: "Consulta regras e comunica oportunidades para o time comercial.",
        description: "Perfil comercial que precisa entender regras promocionais, elegibilidade e impactos esperados para orientar a execução em campo.",
        goals: ["Entender regras vigentes", "Reduzir retrabalho", "Responder dúvidas do time comercial"],
        painPoints: ["Regras dispersas", "Divergência de informação", "Dependência de outras áreas"],
        context: "Usa dados e regras da promoção para apoiar execução regional e alinhamento comercial.",
        segment: "Comercial",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-growth-crm-analyst",
        name: "Analista de Growth/CRM",
        type: PERSONA_TYPES.OPERATOR,
        shortDescription: "Segmenta públicos e acompanha conversão das campanhas.",
        description: "Analista que ativa comunicações, acompanha adesão e precisa ajustar segmentações com base em sinais de performance.",
        goals: ["Segmentar públicos com precisão", "Aumentar adesão", "Mensurar conversão"],
        painPoints: ["Dados dispersos", "Janela curta para ajustes", "Dificuldade para comparar campanhas"],
        context: "Trabalha no planejamento e na otimização das comunicações de promoção.",
        segment: "Growth",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-support-promo-rules",
        name: "Atendimento/Suporte",
        type: PERSONA_TYPES.INTERNAL_USER,
        shortDescription: "Consulta regras para responder dúvidas sobre promoções.",
        description: "Time que precisa consultar regras válidas, exceções e histórico para resolver dúvidas sem respostas divergentes.",
        goals: ["Resolver dúvidas com agilidade", "Evitar respostas divergentes", "Escalar exceções corretamente"],
        painPoints: ["Histórico incompleto", "Regras em múltiplas fontes", "Alto volume de perguntas repetidas"],
        context: "Atua quando clientes ou times internos têm dúvidas sobre elegibilidade, benefício e regras.",
        segment: "Customer Support",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-promo-eligible-user",
        name: "Cliente final impactado por promoções",
        type: PERSONA_TYPES.PRIMARY_USER,
        shortDescription: "Precisa entender benefícios, regras e elegibilidade da promoção.",
        description: "Cliente ou usuário final que recebe uma oferta e precisa confiar que entende a regra, o prazo e o benefício esperado.",
        goals: ["Encontrar promoções relevantes", "Entender regras rapidamente", "Receber benefício sem fricção"],
        painPoints: ["Regras pouco claras", "Comunicação tardia", "Dúvidas sobre elegibilidade"],
        context: "Interage com a promoção como beneficiário final, principalmente em momentos de decisão e resgate.",
        segment: "Cliente final",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
    ],
    stakeholders: [
      {
        id: "stakeholder-head-product",
        name: "Head de Produto",
        role: "Decision maker",
        area: "Produto",
        influence: INFLUENCE_LEVELS.HIGH,
        decisionPower: INFLUENCE_LEVELS.HIGH,
        expectations: ["Clareza de impacto", "Priorização baseada em evidência", "Riscos bem explicitados"],
        concerns: ["Escopo amplo demais", "Baixa rastreabilidade da decisão"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "stakeholder-commercial-revenue",
        name: "Comercial/Revenue",
        role: "Sponsor de negócio",
        area: "Revenue",
        influence: INFLUENCE_LEVELS.HIGH,
        decisionPower: INFLUENCE_LEVELS.HIGH,
        expectations: ["ROI da promoção", "Governança comercial", "Velocidade de execução"],
        concerns: ["Perda de margem", "Conflito entre canais", "Baixa adesão"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "stakeholder-data-bi",
        name: "Data/BI",
        role: "Parceiro técnico",
        area: "Dados",
        influence: INFLUENCE_LEVELS.MEDIUM,
        decisionPower: INFLUENCE_LEVELS.MEDIUM,
        expectations: ["Métricas confiáveis", "Segmentações claras", "Rastreabilidade dos dados"],
        concerns: ["Definições inconsistentes", "Dados incompletos"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "stakeholder-engineering",
        name: "Engenharia",
        role: "Delivery",
        area: "Tecnologia",
        influence: INFLUENCE_LEVELS.MEDIUM,
        decisionPower: INFLUENCE_LEVELS.MEDIUM,
        expectations: ["Escopo claro", "Critérios de aceite", "Dependências mapeadas"],
        concerns: ["Complexidade operacional", "Integrações instáveis"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "stakeholder-finance",
        name: "Financeiro",
        role: "Aprovador",
        area: "Financeiro",
        influence: INFLUENCE_LEVELS.HIGH,
        decisionPower: INFLUENCE_LEVELS.HIGH,
        expectations: ["Controle de custo", "Previsibilidade", "Conciliação correta"],
        concerns: ["Orçamento estourado", "Baixa transparência de incentivo"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "stakeholder-compliance-legal",
        name: "Legal/Compliance",
        role: "Guardião de risco",
        area: "Governança",
        influence: INFLUENCE_LEVELS.HIGH,
        decisionPower: INFLUENCE_LEVELS.MEDIUM,
        expectations: ["Comunicação clara", "Regras auditáveis", "Elegibilidade sem ambiguidade"],
        concerns: ["Risco regulatório", "Regras promocionais pouco transparentes"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "stakeholder-marketing-growth",
        name: "Marketing/Growth",
        role: "Influenciador",
        area: "Growth",
        influence: INFLUENCE_LEVELS.MEDIUM,
        decisionPower: INFLUENCE_LEVELS.MEDIUM,
        expectations: ["Aumento de adesão", "Mensuração de conversão", "Comunicação segmentada"],
        concerns: ["Baixa relevância da oferta", "Medição insuficiente"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "stakeholder-customer-support",
        name: "Customer Support",
        role: "Operação impactada",
        area: "Atendimento",
        influence: INFLUENCE_LEVELS.MEDIUM,
        decisionPower: INFLUENCE_LEVELS.LOW,
        expectations: ["Regras fáceis de consultar", "Menos dúvidas repetidas", "Escalação clara"],
        concerns: ["Aumento de chamados", "Respostas divergentes"],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
    ],
  },
  "cora-precos": {
    personas: [
      {
        id: "persona-pricing-analyst",
        name: "Analista de Pricing",
        type: PERSONA_TYPES.PRIMARY_USER,
        shortDescription: "Investiga desvios de preço, margem e volume.",
        description: "Usuário principal do produto, responsável por monitorar variações, explicar anomalias e priorizar investigações de preço.",
        goals: ["Identificar anomalias rapidamente", "Explicar variações de margem", "Priorizar investigações"],
        painPoints: ["Cruzamento manual de dados", "Baixa rastreabilidade", "Alertas sem contexto"],
        context: "Usa dashboards e sinais operacionais diariamente para orientar decisões de pricing.",
        segment: "Pricing",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-revenue-manager",
        name: "Gerente de Revenue",
        type: PERSONA_TYPES.INFLUENCER,
        shortDescription: "Decide prioridades comerciais com base em margem e crescimento.",
        description: "Liderança que acompanha resultados comerciais e toma decisões sobre preço, desconto e margem.",
        goals: ["Proteger margem", "Comparar cenários", "Atuar antes do impacto escalar"],
        painPoints: ["Indicadores dispersos", "Demora para consolidar causas", "Baixa previsibilidade"],
        context: "Consulta o produto para entender impacto e direcionar ação comercial.",
        segment: "Revenue",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-sales-coordinator",
        name: "Coordenador Comercial",
        type: PERSONA_TYPES.SECONDARY_USER,
        shortDescription: "Consulta preços e justificativas para apoiar execução comercial.",
        description: "Perfil comercial que precisa entender preço vigente, variações e justificativas para orientar negociações e execução em campo.",
        goals: ["Entender preço vigente", "Reduzir retrabalho", "Responder dúvidas do time comercial"],
        painPoints: ["Divergência de informação", "Regras pouco visíveis", "Dependência de outras áreas"],
        context: "Usa dados de preço para apoiar decisões regionais e comunicação com o time comercial.",
        segment: "Comercial",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-growth-crm-analyst",
        name: "Analista de Growth/CRM",
        type: PERSONA_TYPES.OPERATOR,
        shortDescription: "Avalia impacto de preço e promoção em campanhas.",
        description: "Analista que cruza sinais de preço, promoção e comunicação para entender conversão e recorrência.",
        goals: ["Comparar resposta por segmento", "Aumentar conversão", "Medir impacto de campanhas"],
        painPoints: ["Dados dispersos", "Métricas com atraso", "Dificuldade para isolar efeito de preço"],
        context: "Atua em campanhas que dependem de preço, incentivo ou comunicação segmentada.",
        segment: "Growth",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-support-promo-rules",
        name: "Atendimento/Suporte",
        type: PERSONA_TYPES.INTERNAL_USER,
        shortDescription: "Consulta regras e histórico para responder dúvidas operacionais.",
        description: "Time que recebe dúvidas sobre preço, regra comercial ou promoção e precisa responder com base em informação confiável.",
        goals: ["Resolver dúvidas com agilidade", "Evitar respostas divergentes", "Escalar exceções corretamente"],
        painPoints: ["Histórico incompleto", "Regras em múltiplas fontes", "Alto volume de perguntas repetidas"],
        context: "Atua quando clientes ou times internos questionam preço, elegibilidade ou regra comercial.",
        segment: "Customer Support",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
      {
        id: "persona-promo-eligible-user",
        name: "Cliente final impactado por promoções",
        type: PERSONA_TYPES.BUYER,
        shortDescription: "Percebe preço e promoção como parte da decisão de compra.",
        description: "Cliente final afetado por preço, desconto ou incentivo, mesmo sem operar diretamente o produto interno.",
        goals: ["Entender benefício recebido", "Confiar no preço apresentado", "Evitar fricção no resgate"],
        painPoints: ["Comunicação pouco clara", "Diferença entre preço esperado e aplicado", "Dúvidas sobre elegibilidade"],
        context: "Impactado indiretamente por decisões de preço e promoção que chegam na experiência final.",
        segment: "Cliente final",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: DEFAULT_AUDIENCE_TIMESTAMP,
        updatedAt: DEFAULT_AUDIENCE_TIMESTAMP,
      },
    ],
    stakeholders: [],
  },
};

productAudienceMocks["cora-precos"].stakeholders = productAudienceMocks["cora-promocoes"].stakeholders.map((stakeholder) => ({ ...stakeholder }));

function loadProductAudienceTable() {
  try {
    const storedAudience = window.localStorage.getItem(PRODUCT_AUDIENCE_STORAGE_KEY);
    if (!storedAudience) {
      return {};
    }

    const parsedAudience = JSON.parse(storedAudience);
    return parsedAudience && typeof parsedAudience === "object" && !Array.isArray(parsedAudience)
      ? parsedAudience
      : {};
  } catch (error) {
    return {};
  }
}

function saveProductAudienceTable() {
  try {
    window.localStorage.setItem(PRODUCT_AUDIENCE_STORAGE_KEY, JSON.stringify(productAudienceByProduct));
  } catch (error) {
    // Product audience persistence is best-effort in the static prototype.
  }
}

function normalizeAudienceComparableValue(value = "") {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function normalizeStringList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item || "").trim()).filter(Boolean);
  }

  const normalizedValue = String(value || "").trim();
  return normalizedValue ? [normalizedValue] : [];
}

function normalizePersonaType(value = "") {
  const directValue = String(value || "").trim();
  if (Object.values(PERSONA_TYPES).includes(directValue)) {
    return directValue;
  }

  const mappedValue = {
    USUARIO_PRIMARIO: PERSONA_TYPES.PRIMARY_USER,
    PRIMARY_USER: PERSONA_TYPES.PRIMARY_USER,
    USUARIO_SECUNDARIO: PERSONA_TYPES.SECONDARY_USER,
    USUARIO_IMPACTADO: PERSONA_TYPES.SECONDARY_USER,
    SECONDARY_USER: PERSONA_TYPES.SECONDARY_USER,
    USUARIO_INTERNO: PERSONA_TYPES.INTERNAL_USER,
    INTERNAL_USER: PERSONA_TYPES.INTERNAL_USER,
    OPERADOR: PERSONA_TYPES.OPERATOR,
    OPERATOR: PERSONA_TYPES.OPERATOR,
    COMPRADOR: PERSONA_TYPES.BUYER,
    CLIENTE_FINAL: PERSONA_TYPES.BUYER,
    BUYER: PERSONA_TYPES.BUYER,
    INFLUENCIADOR: PERSONA_TYPES.INFLUENCER,
    GESTOR_INTERNO: PERSONA_TYPES.INFLUENCER,
    PARCEIRO_INTERNO: PERSONA_TYPES.INFLUENCER,
    INFLUENCER: PERSONA_TYPES.INFLUENCER,
  }[normalizeAudienceComparableValue(value)];

  return mappedValue || PERSONA_TYPES.INTERNAL_USER;
}

function normalizeAudienceStatus(value = "") {
  const directValue = String(value || "").trim();
  if (Object.values(AUDIENCE_STATUSES).includes(directValue)) {
    return directValue;
  }

  const mappedValue = {
    ACTIVE: AUDIENCE_STATUSES.ACTIVE,
    ATIVO: AUDIENCE_STATUSES.ACTIVE,
    ARCHIVED: AUDIENCE_STATUSES.ARCHIVED,
    ARQUIVADO: AUDIENCE_STATUSES.ARCHIVED,
    INATIVO: AUDIENCE_STATUSES.ARCHIVED,
  }[normalizeAudienceComparableValue(value)];

  return mappedValue || AUDIENCE_STATUSES.ACTIVE;
}

function normalizeInfluenceLevel(value = "", fallback = INFLUENCE_LEVELS.MEDIUM) {
  const directValue = String(value || "").trim();
  if (Object.values(INFLUENCE_LEVELS).includes(directValue)) {
    return directValue;
  }

  const mappedValue = {
    LOW: INFLUENCE_LEVELS.LOW,
    BAIXO: INFLUENCE_LEVELS.LOW,
    BAIXA: INFLUENCE_LEVELS.LOW,
    MEDIUM: INFLUENCE_LEVELS.MEDIUM,
    MEDIO: INFLUENCE_LEVELS.MEDIUM,
    MEDIA: INFLUENCE_LEVELS.MEDIUM,
    HIGH: INFLUENCE_LEVELS.HIGH,
    ALTO: INFLUENCE_LEVELS.HIGH,
    ALTA: INFLUENCE_LEVELS.HIGH,
  }[normalizeAudienceComparableValue(value)];

  return mappedValue || fallback;
}

function getFallbackDecisionPower(stakeholder = {}) {
  const roleValue = normalizeAudienceComparableValue(stakeholder.role || stakeholder.type || stakeholder.name);
  if (roleValue.includes("DECISION") || roleValue.includes("HEAD") || roleValue.includes("APROVADOR") || roleValue.includes("SPONSOR")) {
    return INFLUENCE_LEVELS.HIGH;
  }

  if (roleValue.includes("SUPPORT") || roleValue.includes("ATENDIMENTO")) {
    return INFLUENCE_LEVELS.LOW;
  }

  return INFLUENCE_LEVELS.MEDIUM;
}

function normalizeProductPersona(persona = {}, product = {}, index = 0) {
  if (!persona || typeof persona !== "object") {
    return null;
  }

  const name = String(persona.name || persona.title || "").trim();
  if (!name) {
    return null;
  }

  const productSlug = product.id || slugify(product.name || "produto");
  const shortDescription = String(persona.shortDescription || persona.short_description || persona.summary || persona.description || "").trim();
  const description = String(persona.description || shortDescription || "").trim();

  return {
    id: String(persona.id || `persona-${productSlug}-${slugify(name) || index + 1}`).trim(),
    name,
    type: normalizePersonaType(persona.type || persona.role),
    shortDescription,
    description,
    goals: normalizeStringList(persona.goals || persona.objectives),
    painPoints: normalizeStringList(persona.painPoints || persona.pain_points || persona.pains),
    context: String(persona.context || persona.usageContext || "").trim(),
    segment: String(persona.segment || persona.area || product.tribe || product.category || "").trim(),
    status: normalizeAudienceStatus(persona.status),
    createdAt: String(persona.createdAt || persona.created_at || DEFAULT_AUDIENCE_TIMESTAMP).trim(),
    updatedAt: String(persona.updatedAt || persona.updated_at || DEFAULT_AUDIENCE_TIMESTAMP).trim(),
  };
}

function normalizeProductStakeholder(stakeholder = {}, product = {}, index = 0) {
  if (!stakeholder || typeof stakeholder !== "object") {
    return null;
  }

  const name = String(stakeholder.name || stakeholder.title || "").trim();
  if (!name) {
    return null;
  }

  const productSlug = product.id || slugify(product.name || "produto");
  const expectations = normalizeStringList(stakeholder.expectations || stakeholder.interest || stakeholder.expected_value);
  const concerns = normalizeStringList(stakeholder.concerns || stakeholder.risks);
  const fallbackDecisionPower = getFallbackDecisionPower(stakeholder);

  return {
    id: String(stakeholder.id || `stakeholder-${productSlug}-${slugify(name) || index + 1}`).trim(),
    name,
    role: String(stakeholder.role || stakeholder.type || "Stakeholder").trim(),
    area: String(stakeholder.area || stakeholder.department || product.tribe || product.category || "").trim(),
    influence: normalizeInfluenceLevel(stakeholder.influence, fallbackDecisionPower),
    decisionPower: normalizeInfluenceLevel(stakeholder.decisionPower || stakeholder.decision_power, fallbackDecisionPower),
    expectations,
    concerns,
    status: normalizeAudienceStatus(stakeholder.status),
    createdAt: String(stakeholder.createdAt || stakeholder.created_at || DEFAULT_AUDIENCE_TIMESTAMP).trim(),
    updatedAt: String(stakeholder.updatedAt || stakeholder.updated_at || DEFAULT_AUDIENCE_TIMESTAMP).trim(),
  };
}

function getProductAudienceSource(product = {}, storedAudience = {}, key = "personas") {
  const hasStoredAudience = Boolean(storedAudience && typeof storedAudience === "object" && !Array.isArray(storedAudience));
  if (hasStoredAudience) {
    return Array.isArray(storedAudience[key]) ? storedAudience[key] : [];
  }

  if (Array.isArray(productAudienceMocks[product.id]?.[key])) {
    return productAudienceMocks[product.id][key];
  }

  return Array.isArray(product[key]) ? product[key] : [];
}

function normalizeProductAudience(product = {}, storedAudience = {}) {
  const personaSource = getProductAudienceSource(product, storedAudience, "personas");
  const stakeholderSource = getProductAudienceSource(product, storedAudience, "stakeholders");

  return {
    personas: personaSource
      .map((persona, index) => normalizeProductPersona(persona, product, index))
      .filter(Boolean),
    stakeholders: stakeholderSource
      .map((stakeholder, index) => normalizeProductStakeholder(stakeholder, product, index))
      .filter(Boolean),
  };
}

function hydrateProductAudience() {
  const storedAudienceTable = loadProductAudienceTable();
  const nextAudienceTable = {};

  products.forEach((product) => {
    const normalizedAudience = normalizeProductAudience(product, storedAudienceTable[product.id]);
    product.personas = normalizedAudience.personas;
    product.stakeholders = normalizedAudience.stakeholders;
    nextAudienceTable[product.id] = normalizedAudience;
  });

  productAudienceByProduct = nextAudienceTable;
  saveProductAudienceTable();
}

hydrateProductAudience();

const productDiscoveryTemplates = [
  { title: "Dashboard de sinais operacionais", methodologyCompleted: 1, methodologyTotal: 3, statusType: "blue", action: "Continuar", text: "Dashboard operacional com métricas em tempo real e sinais de atenção." },
  { title: "Jornada de decisão comercial", methodologyCompleted: 2, methodologyTotal: 3, statusType: "blue", action: "Continuar", text: "Síntese de entrevistas e jornadas para tomada de decisão." },
  { title: "Consolidação de aprendizados", methodologyCompleted: 3, methodologyTotal: 3, statusType: "green", action: "Ver detalhes", text: "Aprendizados consolidados, riscos e próximos passos do produto." },
  { title: "Priorização de hipóteses", methodologyCompleted: 1, methodologyTotal: 3, statusType: "blue", action: "Continuar", text: "Hipóteses priorizadas com evidências e critérios de sucesso." },
  { title: "Mapa de métricas críticas", methodologyCompleted: 0, methodologyTotal: 3, statusType: "amber", action: "Continuar", text: "Mapeamento operacional para acompanhamento de métricas críticas." },
  { title: "Monitoramento de exceções", methodologyCompleted: 1, methodologyTotal: 3, statusType: "blue", action: "Continuar", text: "Dashboard operacional com métricas em tempo real e sinais de atenção." },
  { title: "Síntese de entrevistas", methodologyCompleted: 2, methodologyTotal: 3, statusType: "blue", action: "Continuar", text: "Síntese de entrevistas e jornadas para tomada de decisão." },
  { title: "Revisão de riscos e próximos passos", methodologyCompleted: 3, methodologyTotal: 3, statusType: "green", action: "Ver detalhes", text: "Aprendizados consolidados, riscos e próximos passos do produto." },
  { title: "Validação de oportunidades", methodologyCompleted: 1, methodologyTotal: 3, statusType: "blue", action: "Continuar", text: "Hipóteses priorizadas com evidências e critérios de sucesso." },
  { title: "Acompanhamento operacional", methodologyCompleted: 0, methodologyTotal: 3, statusType: "amber", action: "Continuar", text: "Mapeamento operacional para acompanhamento de métricas críticas." },
];

const discoveryTemplate = {
  id: "discovery-name-1",
  name: "Nome do Discovery",
  status: "Em Execução",
  variant: "teste-ab",
  problem: "Baixa clareza sobre incentivos e recompensas no fluxo de promoções.",
  objective: "Teste A/B de elementos de gamificação (badges, ranking) para aumentar engajamento com promoções.",
  insights: [
    "Grupo com badges teve 28% mais interações",
    "Ranking semanal aumentou frequência de acesso em 34%",
    "Notificações de conquistas geraram 2.3x mais compartilhamentos",
  ],
  csd: {
    certezas: ["Badges aumentaram interações no grupo testado", "Ranking semanal elevou recorrência de acesso"],
    suposicoes: ["Personalização pode aumentar retenção após a primeira interação"],
    duvidas: ["Qual recompensa percebida sustenta engajamento no longo prazo?"],
  },
  tags: ["gamificacao", "engagement", "teste-ab", "promocoes"],
  artifacts: ["Análise", "Análise", "Análise"],
  methods: [
    { name: "Matriz CSD", progress: 45, status: "Em andamento" },
    { name: "Desk Research", progress: 100, status: "Complete" },
    { name: "Entrevista em profundidade", progress: 20, status: "10" },
    { name: "Survey", progress: 20, status: "10" },
    { name: "Jornada AS IS", progress: 20, status: "10" },
    { name: "Brainstorming", progress: 20, status: "10" },
    { name: "Jornada TO BE", progress: 20, status: "10" },
    { name: "User Journey", progress: 20, status: "10" },
    { name: "Protótipo navegável", progress: 0, status: "10" },
    { name: "Teste de usabilidade", progress: 0, status: "10" },
    { name: "Handoff", progress: 0, status: "10" },
  ],
  personaIds: ["persona-pricing-analyst", "persona-revenue-manager", "persona-sales-coordinator"],
  stakeholderIds: ["stakeholder-head-product", "stakeholder-commercial-revenue", "stakeholder-data-bi"],
  personasSnapshot: [
    {
      id: "persona-pricing-analyst",
      name: "Analista de Pricing",
      type: "Usuário interno",
      description: "Monitora variações de preço, margem e volume para detectar desvios operacionais.",
    },
    {
      id: "persona-revenue-manager",
      name: "Gerente de Revenue",
      type: "Usuário interno",
      description: "Acompanha resultados comerciais e toma decisões sobre preço, desconto e margem.",
    },
    {
      id: "persona-sales-coordinator",
      name: "Coordenador Comercial",
      type: "Usuário impactado",
      description: "Consulta preços e justificativas para orientar negociações e execução em campo.",
    },
  ],
  stakeholdersSnapshot: [
    {
      id: "stakeholder-head-product",
      name: "Head de Produto",
      area: "Produto",
      role: "Decision maker",
      description: "Aprova prioridades e acompanha impacto estratégico.",
      interest: "Clareza de impacto, risco e priorização",
    },
    {
      id: "stakeholder-commercial-revenue",
      name: "Comercial/Revenue",
      area: "Revenue",
      role: "Sponsor de negócio",
      description: "Acompanha performance comercial, margem e oportunidades de receita.",
      interest: "Proteção de margem, velocidade de reação e consistência comercial",
    },
    {
      id: "stakeholder-data-bi",
      name: "Data/BI",
      area: "Dados",
      role: "Parceiro técnico",
      description: "Garante métricas confiáveis, segmentações e leitura de performance.",
      interest: "Qualidade, disponibilidade e rastreabilidade dos dados",
    },
  ],
  evidence: [
    { quote: "Eu nunca sei quando tem promoção nova, só descubro por acaso", file: "transcript_entrevista_01.mp3" },
    { quote: "O processo de resgate é muito confuso, desisti várias vezes", file: "transcript_entrevista_01.mp3" },
    { quote: "Gostaria de receber notificações personalizadas baseadas no meu histórico", file: "notas_observacao.pdf" },
  ],
};

const synthesisAgentOutput = {
  synthesis_status: "READY",
  synthesis_status_label: "Concluído",
  synthesis_state: "UPDATED",
  synthesis_state_message: "Síntese atualizada com novos dados.",
  event_name: "NEW_EVIDENCE_ADDED",
  synthesis_summary: "A análise preliminar indica padrões significativos relacionados a dificuldades de onboarding e questões de confiança. No entanto, ainda são necessárias evidências quantitativas adicionais para validar completamente esses insights. Três hipóteses principais foram parcialmente confirmadas, enquanto duas permanecem inconclusivas devido à falta de dados comparativos.",
  evidence_inventory: [
    { label: "Entrevistas em profundidade", count: 12, updated_at: "10/05/2026" },
    { label: "Surveys", count: 3, updated_at: "08/05/2026" },
    { label: "Benchmarks", count: 5, updated_at: "05/05/2026" },
    { label: "Documentos históricos", count: 8, updated_at: "01/05/2026" },
    { label: "Observações de usabilidade", count: 6, updated_at: "12/05/2026" },
  ],
  patterns: [
    { name: "Confusão no onboarding", frequency: "18 ocorrências", confidence: "Alta" },
    { name: "Questões de confiança", frequency: "14 ocorrências", confidence: "Alta" },
    { name: "Fricção técnica", frequency: "11 ocorrências", confidence: "Média" },
    { name: "Incompatibilidade de expectativas", frequency: "8 ocorrências", confidence: "Média" },
  ],
  contradictions: [
    {
      description: "Survey indica alta satisfação geral (85%), mas entrevistas revelam frustração profunda com processo de setup",
      sources: ["Survey Q2 2026", "Entrevistas - Abril", "Observações de usabilidade"],
    },
    {
      description: "Stakeholders reportam aumento de engajamento, mas dados de analytics mostram redução de 12% no uso recorrente",
      sources: ["Stakeholder feedback", "Analytics Dashboard", "Entrevista - CTO"],
    },
  ],
  confidence_levels: {
    "Confusão no onboarding": "HIGH",
    "Questões de confiança": "HIGH",
    "Fricção técnica": "MEDIUM",
    "Incompatibilidade de expectativas": "MEDIUM",
  },
  hypothesis_status: [
    { hypothesis: "Usuários abandonam devido à complexidade inicial", status: "Confirmada" },
    { hypothesis: "Falta de transparência afeta retenção", status: "Confirmada" },
    { hypothesis: "Problemas técnicos são barreira primária", status: "Enfraquecida" },
    { hypothesis: "Concorrentes oferecem melhor UX", status: "Inconclusiva" },
    { hypothesis: "Falta de recursos educacionais impacta adoção", status: "Confirmada" },
  ],
  unanswered_questions: [
    "Qual é o principal fator de decisão entre continuar ou cancelar após o trial?",
    "Como a percepção de valor muda ao longo dos primeiros 30 dias?",
    "Quais funcionalidades são mais valorizadas versus mais utilizadas?",
    "Existe correlação entre perfil demográfico e padrões de uso?",
  ],
  missing_evidence: [
    "Dados quantitativos sobre taxa de abandono por etapa do onboarding",
    "Comparação detalhada com benchmarks de concorrentes diretos",
    "Métricas de performance técnica em diferentes dispositivos",
    "Feedback de usuários que cancelaram assinatura (churn analysis)",
  ],
  updated_insights: [
    "Onboarding e confiança formam o principal eixo de risco para adoção.",
    "Evidências qualitativas são fortes, mas ainda precisam de validação quantitativa.",
    "A fricção técnica aparece como barreira secundária, não como causa primária isolada.",
  ],
};

function createBlankDraftDiscovery(discoveryId = "draft-novo-discovery") {
  const fallbackMethodology = methodologyPackages.optimized;
  const now = new Date().toISOString();
  return {
    id: discoveryId,
    name: "Novo discovery",
    status: "Em Execução",
    workflow: WORKFLOW_STATES.DISCOVERY_CREATED,
    currentState: WORKFLOW_STATES.DISCOVERY_CREATED,
    current_state: WORKFLOW_STATES.DISCOVERY_CREATED,
    variant: "rascunho",
    problem: "Problema ainda não informado.",
    objective: "Objetivo ainda não informado.",
    insights: [],
    csd: {
      certezas: [],
      suposicoes: [],
      duvidas: [],
    },
    csdMatrix: createCsdMatrixFromLegacyCsd({
      certezas: [],
      suposicoes: [],
      duvidas: [],
    }),
    tags: ["rascunho", "novo-discovery"],
    artifacts: [],
    methodology: fallbackMethodology,
    selectedMethodology: fallbackMethodology,
    methodologyType: fallbackMethodology.name,
    methodologyId: fallbackMethodology.id,
    methods: buildMethodsFromMethodology(fallbackMethodology.id),
    personaIds: [],
    stakeholderIds: [],
    personasSnapshot: [],
    stakeholdersSnapshot: [],
    evidence: [],
    methodologyVisible: true,
    createdAt: now,
    updatedAt: now,
    created_at: now,
    updated_at: now,
  };
}

function createMethodEntry() {
  return {
    text: "",
    files: [],
  };
}

const responseLibrary = [
  {
    match: ["etapa final", "final", "3/3", "andamento"],
    reply: "Encontrei três discoveries em etapa avançada. Dashboard operacional e Cora Transportes estão em 3/3, enquanto Conciliação de pagamentos já foi finalizado.",
    bullets: [
      "Prioridade: revisar decisão e evidência antes do handoff.",
      "Risco: discoveries 3/3 sem critério de sucesso podem virar backlog pouco acionável.",
      "Próximo passo: abrir síntese e confirmar responsável por produto.",
    ],
    metadata: ["3 discoveries", "Etapa final", "Atualizado hoje"],
  },
  {
    match: ["preco", "precos", "cora precos", "dashboard"],
    reply: "Para Cora Preços, o principal insight é dar visibilidade operacional sem exigir cruzamento manual. O discovery aponta demanda por métricas de preço, margem e volume em uma leitura única.",
    bullets: [
      "Hipótese validada: anomalias precisam aparecer com contexto de impacto.",
      "Evidência: usuários citam demora para identificar causa raiz.",
      "Sugestão: prototipar filtros por período, produto e severidade.",
    ],
    metadata: ["Cora Preços", "Insight", "Alta confiança"],
  },
  {
    match: ["transporte", "transportes", "logistica", "sla", "rota"],
    reply: "O discovery de Cora Transportes está focado em gargalos de rota, SLA e comunicação. A oportunidade mais clara é transformar atrasos em eventos rastreáveis.",
    bullets: [
      "Pergunta aberta: qual atraso exige ação imediata?",
      "Sinal forte: times pedem histórico por rota e janela de entrega.",
      "Próximo passo: consolidar critérios de exceção.",
    ],
    metadata: ["Logística", "2/3 concluídos", "SLA"],
  },
  {
    match: ["pagamento", "pagamentos", "conciliacao", "repasses"],
    reply: "Nos discoveries de pagamentos, a dor recorrente é rastrear divergências com confiança. A síntese recomenda uma trilha de auditoria que conecte origem, ajuste e aprovação.",
    bullets: [
      "Insight: planilhas paralelas reduzem confiabilidade do fechamento.",
      "Risco: falta de histórico dificulta suporte e auditoria.",
      "Ação sugerida: mapear eventos mínimos da conciliação.",
    ],
    metadata: ["Pagamentos", "3/3 concluídos", "Rastreabilidade"],
  },
  {
    match: ["alerta", "alertas", "risco", "riscos", "prioridade"],
    reply: "Os alertas mais relevantes aparecem quando há impacto financeiro ou operacional. A recomendação é classificar por severidade, responsável e janela de resposta.",
    bullets: [
      "Separar alerta informativo de alerta acionável.",
      "Exibir motivo da prioridade junto ao alerta.",
      "Medir tempo até primeira ação do analista.",
    ],
    metadata: ["Alertas", "Risco", "Operações"],
  },
  {
    match: ["novo", "criar", "discovery", "dicovery", "onboarding"],
    reply: "Posso iniciar um discovery simulado com nome, produto, problema, hipóteses e perguntas de pesquisa. Para onboarding, eu sugeriria começar entendendo a primeira ação útil do usuário.",
    bullets: [
      "Nome sugerido: Onboarding de produto.",
      "Pergunta guia: o que impede o usuário de chegar ao primeiro valor?",
      "Amostra inicial: clientes ativados, não ativados e suporte.",
    ],
    metadata: ["Novo discovery", "Roteiro", "Pesquisa"],
  },
];

function getCurrentTime() {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function scrollChatToEnd() {
  if (!chatLog) {
    return;
  }

  chatLog.scrollTop = chatLog.scrollHeight;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildMetadata(metadata = []) {
  if (!metadata.length) {
    return "";
  }

  return `<div class="message-metadata">${metadata.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}</div>`;
}

function addMessage(role, content, options = {}) {
  if (!CONVERSATIONAL_ASSISTANT_ENABLED || !chatLog) {
    return;
  }

  const row = document.createElement("article");
  row.className = `message-row ${role}`;

  const time = getCurrentTime();
  const bullets = options.bullets?.length
    ? `<ul>${options.bullets.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
    : "";

  const avatar = role === "bot"
    ? `<span class="message-avatar" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <rect x="4" y="8" width="16" height="10" rx="2"></rect>
          <path d="M8 8V5h8v3"></path>
          <path d="M9 13h.01"></path>
          <path d="M15 13h.01"></path>
        </svg>
      </span>`
    : "";

  row.innerHTML = `
    ${avatar}
    <div class="message-bubble">
      <p>${escapeHTML(content)}</p>
      ${bullets}
      ${buildMetadata(options.metadata)}
      <time>${time}</time>
    </div>
  `;

  chatLog.appendChild(row);
  scrollChatToEnd();
}

function addDiscoveryChatMessage(role, content) {
  const message = document.createElement("article");
  message.className = `discovery-chat-message ${role}`;
  message.textContent = content;
  discoveryChatLog.appendChild(message);
  discoveryChatLog.scrollTop = discoveryChatLog.scrollHeight;
}

function renderDiscoveryAttachments() {
  discoveryAttachmentList.hidden = discoveryAttachments.length === 0;
  discoveryAttachmentList.innerHTML = discoveryAttachments.map((file) => `
    <span class="attachment-chip" title="${escapeHTML(file.name)}">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </svg>
      ${escapeHTML(file.name)}
    </span>
  `).join("");
}

function clearDiscoveryAttachments() {
  discoveryAttachments = [];
  discoveryAttachmentInput.value = "";
  renderDiscoveryAttachments();
}

function normalizeFileInfo(file) {
  return {
    name: file.name,
    size: file.size,
    type: file.type || "arquivo",
  };
}

function renderMethodEntryFiles() {
  methodEntryFileLabel.textContent = methodEntryFiles.length
    ? `${methodEntryFiles.length} arquivo${methodEntryFiles.length === 1 ? "" : "s"} selecionado${methodEntryFiles.length === 1 ? "" : "s"}`
    : "Nenhum arquivo selecionado";
  methodEntryFileList.hidden = methodEntryFiles.length === 0;
  methodEntryFileList.innerHTML = methodEntryFiles.map((file, index) => `
    <span class="attachment-chip" title="${escapeHTML(file.name)}">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
      </svg>
      ${escapeHTML(file.name)}
      <button type="button" aria-label="Remover ${escapeHTML(file.name)}" data-method-entry-file-remove="${index}">×</button>
    </span>
  `).join("");
}

function addTypingIndicator() {
  if (!CONVERSATIONAL_ASSISTANT_ENABLED || !chatLog) {
    return;
  }

  const row = document.createElement("article");
  row.className = "message-row bot";
  row.dataset.typing = "true";
  row.innerHTML = `
    <span class="message-avatar" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <rect x="4" y="8" width="16" height="10" rx="2"></rect>
        <path d="M8 8V5h8v3"></path>
        <path d="M9 13h.01"></path>
        <path d="M15 13h.01"></path>
      </svg>
    </span>
    <div class="message-bubble">
      <div class="typing" aria-label="Assistente pensando">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  chatLog.appendChild(row);
  scrollChatToEnd();
}

function removeTypingIndicator() {
  if (!chatLog) {
    return;
  }

  const typing = chatLog.querySelector("[data-typing='true']");
  if (typing) {
    typing.remove();
  }
}

function findDiscoveryByText(text) {
  const normalized = normalizeText(text);
  return discoveries.find((discovery) => {
    return normalized.includes(normalizeText(discovery.title)) || normalized.includes(normalizeText(discovery.product));
  });
}

function findProductByText(text) {
  const normalized = normalizeText(text);
  return products.find((product) => normalized.includes(normalizeText(product.name)));
}

function createResponse(userMessage) {
  const normalized = normalizeText(userMessage);
  const directProduct = findProductByText(normalized);
  const directDiscovery = findDiscoveryByText(normalized);

  const hasDirectProductIntent = directProduct && (
    normalized.includes("produto") ||
    normalizeText(directProduct.name).includes("product name")
  );

  if (hasDirectProductIntent) {
    return {
      reply: `${directProduct.name} tem ${directProduct.discoveryCount} discovery conectado ao repositório. ${directProduct.description}`,
      bullets: [
        `Última atividade: ${directProduct.lastActivity}.`,
        `Concluídos: ${directProduct.doneCount}. Em execução: ${directProduct.progressCount}.`,
        "Sugestão: abrir o produto na lista para ver o contexto e seguir para o discovery relacionado.",
      ],
      metadata: ["Produto", `${directProduct.discoveryCount} discovery`, isProductFavorited(directProduct.id) ? "Favorito" : "Monitorado"],
    };
  }

  const hasDirectDiscoveryIntent = directDiscovery && (
    normalized.includes(normalizeText(directDiscovery.title)) ||
    normalized.includes("abrir resumo") ||
    normalized.includes("ver detalhes") ||
    normalized.includes("o que falta") ||
    normalized.includes("proximos passos") ||
    normalized.includes("resuma os achados")
  );

  if (hasDirectDiscoveryIntent) {
    return {
      reply: `Resumo de ${directDiscovery.title}: ${directDiscovery.insight}`,
      bullets: [
        `Produto: ${directDiscovery.product}.`,
        `Status: ${directDiscovery.status}.`,
        `Próximo passo: ${directDiscovery.next}`,
      ],
      metadata: [directDiscovery.product, directDiscovery.status, "Resumo rápido"],
    };
  }

  const response = responseLibrary.find((item) => item.match.some((keyword) => normalized.includes(keyword)));

  if (response) {
    return response;
  }

  return {
    reply: "Encontrei sinais relacionados no repositório. Para refinar, posso buscar por produto, etapa, status, risco ou palavra-chave do discovery.",
    bullets: [
      "Tente perguntar por Cora Preços, pagamentos, transportes ou alertas.",
      "Também posso simular a criação de um novo discovery.",
      "Use os cards abaixo para abrir um resumo automaticamente.",
    ],
    metadata: ["Busca semântica", "Sugestões", "Repositório"],
  };
}

function submitMessage(message) {
  if (!CONVERSATIONAL_ASSISTANT_ENABLED || !chatInput || !chatLog) {
    return;
  }

  const cleanMessage = message.trim();
  if (!cleanMessage) {
    return;
  }

  addMessage("user", cleanMessage);
  chatInput.value = "";
  addTypingIndicator();

  window.setTimeout(() => {
    removeTypingIndicator();
    const response = createResponse(cleanMessage);
    addMessage("bot", response.reply, {
      bullets: response.bullets,
      metadata: response.metadata,
    });
  }, 520);
}

function updateNewDiscoveryProgress(value) {
  const progress = Math.max(0, Math.min(100, value));
  newDiscoveryProgress.style.width = `${progress}%`;
  newDiscoveryProgressLabel.textContent = `${progress}%`;
}

function setNewDiscoveryStep(step) {
  newDiscoverySetupForm.hidden = step !== "setup";
  newDiscoveryParticipantsForm.hidden = step !== "participants";
  newDiscoveryCsdForm.hidden = step !== "csd";
  newDiscoveryMethodologyForm.hidden = step !== "methodology";
  if (step !== "participants") {
    closeFlowSelectMenus();
  }
  newDiscoveryProgress.closest(".flow-progress").hidden = !["participants", "csd", "methodology"].includes(step);
}

function resetNewDiscoveryFlow() {
  setNewDiscoveryCreateState(false);
  setNewDiscoveryStatus("");
  resetCrewKickoffPanel();
  newDiscoverySetupForm.reset();
  newDiscoveryParticipantsForm.reset();
  newDiscoveryCsdForm.reset();
  newDiscoveryMethodologyForm.reset();
  newDiscoveryProblemDraft = "";
  newDiscoveryObjectiveDraft = "";
  newDiscoveryTitleDraft = "";
  newDiscoveryParticipantsDraft = {};
  newDiscoverySelectedPersonaIdsDraft = [];
  newDiscoverySelectedStakeholderIdsDraft = [];
  newDiscoveryDeadlineDraft = "";
  newDiscoverySupportFiles = [];
  newDiscoverySupportLinksDraft = [""];
  newDiscoveryCsdDraft = {};
  selectedMethodologyId = "optimized";
  newDiscoverySupportFile.value = "";
  newDiscoverySupportFileLabel.textContent = "Selecione seu arquivo";
  renderSupportLinkRows();
  setSelectedMethodology("optimized");
  resetFlowSelects();
  renderNewDiscoveryPeopleSelection();
  document.querySelectorAll("[data-csd-list]").forEach((list) => {
    list.querySelectorAll(".csd-row").forEach((row, index) => {
      row.querySelector("input").value = "";
      if (index > 2) {
        row.remove();
      }
    });
  });
  setNewDiscoveryStep("setup");
  updateNewDiscoveryProgress(0);
}

function openNewDiscoveryParticipantsStep() {
  setNewDiscoveryStep("participants");
  updateNewDiscoveryProgress(50);
  renderNewDiscoveryPeopleSelection();
  window.setTimeout(() => flowSelectButtons[0]?.focus(), 0);
}

function openNewDiscoveryCsdStep() {
  setNewDiscoveryStep("csd");
  updateNewDiscoveryProgress(75);
  window.setTimeout(() => document.querySelector("[data-csd-list] input")?.focus(), 0);
}

function openNewDiscoveryMethodologyStep() {
  setNewDiscoveryStep("methodology");
  updateNewDiscoveryProgress(90);
  setSelectedMethodology(selectedMethodologyId);
  window.setTimeout(() => document.querySelector("[data-methodology-option].active")?.focus(), 0);
}

function getSelectedMethodologyPackage(methodologyId = selectedMethodologyId) {
  return methodologyPackages[methodologyId] || methodologyPackages.optimized;
}

function buildMethodsFromMethodology(methodologyId = selectedMethodologyId) {
  return getSelectedMethodologyPackage(methodologyId).methods.map((method) => ({
    id: slugify(method.name),
    name: method.name,
    duration: method.duration,
    description: method.description,
    sample: method.sample,
    progress: 0,
    status: "Pendente",
    entry: createMethodEntry(),
  }));
}

function getMethodologyPackageByReference(reference) {
  if (!reference) {
    return null;
  }

  if (typeof reference === "object") {
    if (reference.id && methodologyPackages[reference.id]) {
      return methodologyPackages[reference.id];
    }

    const objectReference = reference.name
      || reference.title
      || reference.methodology_name
      || reference.recommended_methodology
      || reference.methodology
      || "";
    return getMethodologyPackageByReference(objectReference);
  }

  const normalizedReference = normalizeText(reference).replace(/_/g, " ");
  return Object.values(methodologyPackages).find((packageItem) => {
    const identifiers = [
      packageItem.id,
      packageItem.name,
      packageItem.name.replace(/^Discovery\s+/i, ""),
    ];
    return identifiers.some((identifier) => normalizeText(identifier).replace(/_/g, " ") === normalizedReference);
  }) || null;
}

function getResearchPlanMethodologySource(activeDiscovery = {}) {
  const artifactGroups = activeDiscovery.artifactGroups || activeDiscovery.discoveryArtifactGroups || activeDiscovery.runArtifacts || {};
  const artifactContainer = activeDiscovery.artifacts && !Array.isArray(activeDiscovery.artifacts) && typeof activeDiscovery.artifacts === "object"
    ? activeDiscovery.artifacts
    : {};

  return activeDiscovery.researchPlanPackage
    || activeDiscovery.research_plan_package
    || artifactGroups.research_plan_package
    || artifactContainer.research_plan_package
    || activeDiscovery.artifactsPayload?.research_plan_package
    || activeDiscovery.artifactsPayload?.artifacts?.research_plan_package
    || activeDiscovery.artifactsPayload?.data?.research_plan_package
    || activeDiscovery.artifactsPayload?.data?.artifacts?.research_plan_package
    || {};
}

function getMethodsFromResearchPlan(researchPlan = {}) {
  const methods = getArtifactValue(researchPlan, ["recommended_methods", "methods", "research_methods", "methodology_methods"]);
  if (Array.isArray(methods)) {
    return methods;
  }

  return [];
}

function normalizeDiscoveryMethod(method = {}, packageMethod = {}, index = 0) {
  const progress = Number(method.progress ?? method.completion ?? method.percent_complete ?? 0);
  const normalizedProgress = Number.isFinite(progress) ? Math.max(0, Math.min(100, progress)) : 0;
  const entry = method.entry && typeof method.entry === "object" ? method.entry : createMethodEntry();
  const name = method.name || method.title || method.label || packageMethod.name || `Método ${index + 1}`;

  return {
    id: method.id || method.key || packageMethod.id || slugify(name) || `method-${index + 1}`,
    name,
    duration: method.duration || method.timeline || method.estimated_duration || packageMethod.duration || "",
    description: method.description || method.summary || method.rationale || packageMethod.description || "",
    sample: method.sample || method.sample_size || method.participant_sample || method.participants || packageMethod.sample || "",
    progress: normalizedProgress,
    status: method.status || method.state || (normalizedProgress >= 100 ? "Concluído" : "Pendente"),
    entry,
    notes: method.notes || "",
    evidence: Array.isArray(method.evidence) ? method.evidence : [],
  };
}

function normalizeDiscoveryMethodology(activeDiscovery = {}) {
  const researchPlan = getResearchPlanMethodologySource(activeDiscovery);
  const explicitMethodology = activeDiscovery.methodology
    || activeDiscovery.selectedMethodology
    || activeDiscovery.methodologyId
    || activeDiscovery.methodology_id
    || activeDiscovery.methodologyType
    || activeDiscovery.methodology_type
    || getArtifactValue(researchPlan, ["methodology", "recommended_methodology", "methodology_name", "methodology_id"]);
  const researchPlanMethods = getMethodsFromResearchPlan(researchPlan);
  const matchedPackage = getMethodologyPackageByReference(explicitMethodology)
    || getMethodologyPackageByReference(researchPlan);
  const methodologyObject = explicitMethodology && typeof explicitMethodology === "object" ? explicitMethodology : {};
  const fallbackPackage = methodologyPackages.optimized;
  const sourcePackage = matchedPackage || {
    ...fallbackPackage,
    ...methodologyObject,
    methods: methodologyObject.methods || researchPlanMethods || fallbackPackage.methods,
  };
  const existingMethods = Array.isArray(activeDiscovery.methods) ? activeDiscovery.methods.filter(Boolean) : [];
  const packageMethods = Array.isArray(sourcePackage.methods) ? sourcePackage.methods : fallbackPackage.methods;
  const methodSource = existingMethods.length ? existingMethods : researchPlanMethods.length ? researchPlanMethods : packageMethods;
  const methods = methodSource.map((method, index) => {
    const isUsingExistingMethod = existingMethods.length > 0;
    const matchedPackageMethod = packageMethods.find((packageMethod) => normalizeText(packageMethod.name) === normalizeText(method.name))
      || (!isUsingExistingMethod ? packageMethods[index] : null)
      || {};
    return normalizeDiscoveryMethod(method, matchedPackageMethod, index);
  });
  const isFallback = !matchedPackage && !methodologyObject.name && !methodologyObject.id && !researchPlanMethods.length;

  return {
    id: sourcePackage.id || fallbackPackage.id,
    name: sourcePackage.name
      || getArtifactValue(researchPlan, ["methodology_name", "recommended_methodology", "methodology"])
      || fallbackPackage.name,
    duration: sourcePackage.duration
      || getArtifactValue(researchPlan, ["duration", "timeline", "estimated_duration"])
      || fallbackPackage.duration,
    description: sourcePackage.description
      || getArtifactValue(researchPlan, ["description", "summary", "methodology_summary", "plan_summary"])
      || fallbackPackage.description,
    methods: methods.length ? methods : fallbackPackage.methods.map((method, index) => normalizeDiscoveryMethod(method, method, index)),
    isFallback,
  };
}

function enrichDiscoveryMethodology(discovery = {}) {
  const normalizedMethodology = normalizeDiscoveryMethodology(discovery);
  const methodology = {
    id: normalizedMethodology.id,
    name: normalizedMethodology.name,
    duration: normalizedMethodology.duration,
    description: normalizedMethodology.description,
    methods: normalizedMethodology.methods.map(({ entry, progress, status, notes, evidence, ...method }) => method),
  };

  return {
    ...discovery,
    methodology,
    selectedMethodology: discovery.selectedMethodology || methodology,
    methodologyType: discovery.methodologyType || normalizedMethodology.name,
    methodologyId: discovery.methodologyId || normalizedMethodology.id,
    methods: normalizedMethodology.methods,
  };
}

function getProductById(productId = "") {
  return products.find((product) => product.id === productId) || null;
}

function getDiscoveryProduct(discovery = {}) {
  return getProductById(discovery.productId || discovery.product_id || selectedProductId) || products[0];
}

function resolveProductReference(productOrId = "") {
  if (productOrId && typeof productOrId === "object") {
    return productOrId;
  }

  return getProductById(String(productOrId || "").trim()) || null;
}

function getProductPersonas(productId = "", options = {}) {
  const product = resolveProductReference(productId) || {};
  const personas = Array.isArray(product.personas) ? product.personas.filter(Boolean) : [];
  return options.includeArchived
    ? personas
    : personas.filter((persona) => persona.status !== AUDIENCE_STATUSES.ARCHIVED);
}

function getProductStakeholders(productId = "", options = {}) {
  const product = resolveProductReference(productId) || {};
  const stakeholders = Array.isArray(product.stakeholders) ? product.stakeholders.filter(Boolean) : [];
  return options.includeArchived
    ? stakeholders
    : stakeholders.filter((stakeholder) => stakeholder.status !== AUDIENCE_STATUSES.ARCHIVED);
}

function getPersonaById(productId = "", personaId = "", options = {}) {
  const normalizedPersonaId = String(personaId || "").trim();
  return getProductPersonas(productId, { includeArchived: true, ...options }).find((persona) => persona.id === normalizedPersonaId) || null;
}

function getStakeholderById(productId = "", stakeholderId = "", options = {}) {
  const normalizedStakeholderId = String(stakeholderId || "").trim();
  return getProductStakeholders(productId, { includeArchived: true, ...options }).find((stakeholder) => stakeholder.id === normalizedStakeholderId) || null;
}

function normalizeSelectedPeopleIds(value) {
  return Array.isArray(value)
    ? [...new Set(value.map((item) => String(item || "").trim()).filter(Boolean))]
    : [];
}

function normalizePersonaSnapshot(persona = {}, product = getDiscoveryProduct({}), index = 0) {
  return normalizeProductPersona(persona, product, index);
}

function normalizeStakeholderSnapshot(stakeholder = {}, product = getDiscoveryProduct({}), index = 0) {
  return normalizeProductStakeholder(stakeholder, product, index);
}

function mapPeopleById(items = [], normalizer = (item) => item) {
  const safeItems = Array.isArray(items) ? items : [];
  return new Map(safeItems
    .map(normalizer)
    .filter((item) => item?.id)
    .map((item) => [item.id, item]));
}

function resolveDiscoveryPersonas(discovery = {}, product = getDiscoveryProduct(discovery)) {
  const selectedIds = normalizeSelectedPeopleIds(discovery.personaIds || discovery.selectedPersonaIds);
  const snapshotPersonasById = mapPeopleById(
    discovery.personasSnapshot || discovery.selectedPersonas || discovery.personas,
    (persona, index) => normalizePersonaSnapshot(persona, product, index)
  );

  if (!selectedIds.length) {
    return Array.from(snapshotPersonasById.values());
  }

  const productPersonasById = mapPeopleById(getProductPersonas(product, { includeArchived: true }), (persona, index) => normalizePersonaSnapshot(persona, product, index));
  return selectedIds
    .map((personaId) => productPersonasById.get(personaId) || snapshotPersonasById.get(personaId))
    .filter(Boolean);
}

function resolveDiscoveryStakeholders(discovery = {}, product = getDiscoveryProduct(discovery)) {
  const selectedIds = normalizeSelectedPeopleIds(discovery.stakeholderIds || discovery.selectedStakeholderIds);
  const snapshotStakeholdersById = mapPeopleById(
    discovery.stakeholdersSnapshot || discovery.selectedStakeholders || discovery.stakeholders,
    (stakeholder, index) => normalizeStakeholderSnapshot(stakeholder, product, index)
  );

  if (!selectedIds.length) {
    return Array.from(snapshotStakeholdersById.values());
  }

  const productStakeholdersById = mapPeopleById(getProductStakeholders(product, { includeArchived: true }), (stakeholder, index) => normalizeStakeholderSnapshot(stakeholder, product, index));
  return selectedIds
    .map((stakeholderId) => productStakeholdersById.get(stakeholderId) || snapshotStakeholdersById.get(stakeholderId))
    .filter(Boolean);
}

function getNewDiscoveryPeopleSelection(product = getProductById(selectedProductId) || products[0]) {
  const draftDiscoveryPeople = {
    personaIds: newDiscoverySelectedPersonaIdsDraft,
    stakeholderIds: newDiscoverySelectedStakeholderIdsDraft,
    personasSnapshot: [],
    stakeholdersSnapshot: [],
  };

  return {
    personaIds: normalizeSelectedPeopleIds(newDiscoverySelectedPersonaIdsDraft),
    stakeholderIds: normalizeSelectedPeopleIds(newDiscoverySelectedStakeholderIdsDraft),
    personasSnapshot: resolveDiscoveryPersonas(draftDiscoveryPeople, product),
    stakeholdersSnapshot: resolveDiscoveryStakeholders(draftDiscoveryPeople, product),
  };
}

function normalizeDiscoveryAudience(discovery = {}, product = getDiscoveryProduct(discovery)) {
  const personaIds = normalizeSelectedPeopleIds(discovery.personaIds || discovery.selectedPersonaIds);
  const stakeholderIds = normalizeSelectedPeopleIds(discovery.stakeholderIds || discovery.selectedStakeholderIds);
  const personaSnapshotSource = discovery.personasSnapshot || discovery.selectedPersonas || discovery.personas || [];
  const stakeholderSnapshotSource = discovery.stakeholdersSnapshot || discovery.selectedStakeholders || discovery.stakeholders || [];
  const personasSnapshot = Array.from(mapPeopleById(personaSnapshotSource, (persona, index) => normalizePersonaSnapshot(persona, product, index)).values());
  const stakeholdersSnapshot = Array.from(mapPeopleById(stakeholderSnapshotSource, (stakeholder, index) => normalizeStakeholderSnapshot(stakeholder, product, index)).values());
  const {
    selectedPersonaIds,
    selectedStakeholderIds,
    selectedPersonas,
    selectedStakeholders,
    personas,
    stakeholders,
    ...baseDiscovery
  } = discovery;
  const discoveryWithIds = {
    ...baseDiscovery,
    personaIds,
    stakeholderIds,
    personasSnapshot,
    stakeholdersSnapshot,
  };
  const resolvedPersonas = personaIds.length
    ? resolveDiscoveryPersonas(discoveryWithIds, product)
    : personasSnapshot;
  const resolvedStakeholders = stakeholderIds.length
    ? resolveDiscoveryStakeholders(discoveryWithIds, product)
    : stakeholdersSnapshot;

  return {
    ...discoveryWithIds,
    personasSnapshot: resolvedPersonas,
    stakeholdersSnapshot: resolvedStakeholders,
  };
}

function enrichDiscoveryPeopleSelection(discovery = {}, product = getDiscoveryProduct(discovery)) {
  return normalizeDiscoveryAudience(discovery, product);
}

function toggleSelectedPersona(personaId) {
  const normalizedPersonaId = String(personaId || "").trim();
  if (!normalizedPersonaId) {
    return;
  }

  newDiscoverySelectedPersonaIdsDraft = newDiscoverySelectedPersonaIdsDraft.includes(normalizedPersonaId)
    ? newDiscoverySelectedPersonaIdsDraft.filter((id) => id !== normalizedPersonaId)
    : [...newDiscoverySelectedPersonaIdsDraft, normalizedPersonaId];
  renderNewDiscoveryPeopleSelection();
}

function toggleSelectedStakeholder(stakeholderId) {
  const normalizedStakeholderId = String(stakeholderId || "").trim();
  if (!normalizedStakeholderId) {
    return;
  }

  newDiscoverySelectedStakeholderIdsDraft = newDiscoverySelectedStakeholderIdsDraft.includes(normalizedStakeholderId)
    ? newDiscoverySelectedStakeholderIdsDraft.filter((id) => id !== normalizedStakeholderId)
    : [...newDiscoverySelectedStakeholderIdsDraft, normalizedStakeholderId];
  renderNewDiscoveryPeopleSelection();
}

createdDiscoveries = loadCreatedDiscoveries().map((discovery) => enrichDiscoveryWithFavorite(normalizeDiscoveryAudience(enrichDiscoveryMethodology(normalizeDiscoveryLifecycleFields(discovery)))));
if (createdDiscoveries.length) {
  saveCreatedDiscoveries();
}
migrateFavoriteDiscoveryIds();

function buildCrewAiMethodologyInput(methodology = getSelectedMethodologyPackage(), csd = {}) {
  return {
    id: methodology.id,
    name: methodology.name,
    duration: methodology.duration,
    description: methodology.description,
    csd: {
      certezas: csd.certezas || [],
      suposicoes: csd.suposicoes || [],
      duvidas: csd.duvidas || [],
    },
    items: methodology.methods.map((method) => ({
      name: method.name,
      duration: method.duration,
      description: method.description,
      sample: method.sample,
    })),
  };
}

const CREWAI_COMPATIBILITY_EMPTY_INPUTS = {
  '"discovery_id": "string", "readiness_status": "READY | PARTIALLY_READY | NOT_READY", "readiness_score": 0, "strengths": [], "critical_gaps": [], "blockers": [], "clarification_required": true, "clarification_questions": [], "uncertainty_profile": {"problem_uncertainty": "LOW | MEDIUM | HIGH", "user_uncertainty": "LOW | MEDIUM | HIGH", "validation_uncertainty": "LOW | MEDIUM | HIGH"': "",
  '"insight_number":1, "insight":""': "",
  '"discovery_id": "string", "scope_status": "DEFINED", "scope_statement": "string", "priority_questions": [], "out_of_scope": [], "must_answer_questions": [], "strategic_focus_areas": [], "workflow_recommendation": "PROCEED_TO_RESEARCH_PLANNING"': "",
  '"discovery_id": "string", "methodology_status": "DEFINED", "recommended_methodology": "GENERATIVE | EVALUATIVE | VALIDATIVE | MIXED", "methodology_summary": "string", "method_rationale": [], "recommended_methods": [], "sequencing_recommendation": [], "constraints": [], "risks": []': "",
  '"discovery_id": "string", "dor_status": "COMPLETED | PARTIALLY_COMPLETED | INSUFFICIENT_INFORMATION", "title": "string", "objective": "string", "problem": "string", "owners": [], "users": [], "stakeholders": [], "certainties": [], "assumptions": [], "open_questions": [], "deadline": null, "attached_files": [],  "completeness_score": 0, "missing_required_fields": [], "clarification_required": true, "clarification_questions": []': "",
};

function buildCrewAiDiscoveryInput({
  discoveryId = "",
  title = "",
  problem = "",
  objective = "",
  participants = {},
  csd = {},
  links = [],
} = {}) {
  const stringifyArrayInput = (values = []) => {
    const items = Array.isArray(values) ? values : [values];
    return JSON.stringify(items.map((item) => String(item ?? "").trim()).filter(Boolean));
  };

  return {
    discovery_id: String(discoveryId || ""),
    title: String(title || ""),
    objective: String(objective || ""),
    problem: String(problem || ""),
    owners: stringifyArrayInput(participants.responsaveis || []),
    users: stringifyArrayInput(participants.personas || []),
    stakeholders: stringifyArrayInput(participants.stakeholders || []),
    certainties: stringifyArrayInput(csd.certezas || []),
    assumptions: stringifyArrayInput(csd.suposicoes || []),
    open_questions: stringifyArrayInput(csd.duvidas || []),
    link: String((Array.isArray(links) ? links[0] : links) || ""),
    ...CREWAI_COMPATIBILITY_EMPTY_INPUTS,
  };
}

function buildDiscoveryRunInput({
  discoveryId = "",
  productId = "",
  title = "",
  problem = "",
  objective = "",
  participants = {},
  csd = {},
  links = [],
  deadline = "",
  methodology = getSelectedMethodologyPackage(),
  files = [],
} = {}) {
  return {
    discovery_id: String(discoveryId || ""),
    product_id: String(productId || ""),
    title: String(title || ""),
    problem: String(problem || ""),
    objective: String(objective || ""),
    owners: participants.responsaveis || [],
    users: participants.personas || [],
    stakeholders: participants.stakeholders || [],
    certainties: csd.certezas || [],
    assumptions: csd.suposicoes || [],
    open_questions: csd.duvidas || [],
    methodology_id: methodology.id,
    methodology_name: methodology.name,
    methodology_duration: methodology.duration,
    links: Array.isArray(links) ? links : [links].filter(Boolean),
    deadline: String(deadline || ""),
    files: files.map(normalizeFileInfo),
  };
}

function setSelectedMethodology(methodologyId) {
  selectedMethodologyId = methodologyPackages[methodologyId] ? methodologyId : "optimized";
  methodologyOptionButtons.forEach((button) => {
    const isActive = button.dataset.methodologyOption === selectedMethodologyId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getFlowSelectPlaceholder(key) {
  const placeholders = {
    responsaveis: "Selecione os responsáveis",
    personas: "Selecione os perfis de pesquisa",
    stakeholders: "Selecione stakeholders para pesquisa",
  };
  return placeholders[key] || "Selecione";
}

function getFlowSelectLabel(key) {
  const selected = flowSelectValues[key] || [];
  if (!selected.length) {
    return getFlowSelectPlaceholder(key);
  }

  if (selected.length <= 2) {
    return selected.join(", ");
  }

  return `${selected.length} selecionados`;
}

function syncFlowSelectButton(button) {
  const key = button.dataset.flowSelect;
  const selected = flowSelectValues[key] || [];
  const label = button.querySelector("[data-flow-select-label]");

  button.classList.toggle("active", selected.length > 0);
  button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "true" ? "true" : "false");
  if (label) {
    label.textContent = getFlowSelectLabel(key);
  }
}

function syncFlowSelectMenu(key) {
  document.querySelectorAll(`[data-flow-select-menu="${key}"] input[type="checkbox"]`).forEach((checkbox) => {
    checkbox.checked = (flowSelectValues[key] || []).includes(checkbox.value);
  });
}

function renderNewDiscoveryPeopleCard(item = {}, kind = "persona", selectedIds = []) {
  if (!item || typeof item !== "object") {
    return "";
  }

  const id = String(item.id || "").trim();
  if (!id) {
    return "";
  }

  const isPersona = kind === "persona";
  const meta = isPersona
    ? PERSONA_TYPE_LABELS[item.type] || item.type
    : [
        item.role,
        item.area,
      ].filter(Boolean).join(" · ");
  const description = item.shortDescription || item.description || item.expectations?.[0] || "";
  const isSelected = selectedIds.includes(id);
  const toggleAttribute = isPersona ? "data-persona-toggle" : "data-stakeholder-toggle";
  const label = isPersona ? "persona" : "stakeholder";

  return `
    <button class="people-option-card${isSelected ? " selected" : ""}" type="button" ${toggleAttribute}="${escapeHTML(id)}" aria-pressed="${String(isSelected)}" aria-label="${isSelected ? "Remover" : "Selecionar"} ${escapeHTML(label)} ${escapeHTML(item.name)}">
      <span class="people-option-name">${escapeHTML(item.name)}</span>
      ${meta ? `<span class="people-option-meta">${escapeHTML(meta)}</span>` : ""}
      ${description ? `<span class="people-option-description">${escapeHTML(description)}</span>` : ""}
    </button>
  `;
}

function renderNewDiscoveryPeopleSelection() {
  if (!newDiscoveryProductPeople) {
    return;
  }

  const product = getProductById(selectedProductId || getCurrentProductId()) || products[0];
  const personas = getProductPersonas(product.id);
  const stakeholders = getProductStakeholders(product.id);
  const selectedPersonaIds = normalizeSelectedPeopleIds(newDiscoverySelectedPersonaIdsDraft);
  const selectedStakeholderIds = normalizeSelectedPeopleIds(newDiscoverySelectedStakeholderIdsDraft);
  const personasHint = selectedPersonaIds.length
    ? `${selectedPersonaIds.length} selecionada${selectedPersonaIds.length === 1 ? "" : "s"}`
    : "Nenhuma persona selecionada";
  const stakeholdersHint = selectedStakeholderIds.length
    ? `${selectedStakeholderIds.length} selecionado${selectedStakeholderIds.length === 1 ? "" : "s"}`
    : "Nenhum stakeholder selecionado";
  const manageAudienceHref = getProductAudienceHash("product-audience", product.id);
  const renderManageAudienceLink = () => `
    <a class="related-people-manage-link" href="${escapeHTML(manageAudienceHref)}" data-manage-product-audience>
      Gerenciar pessoas do produto
    </a>
  `;

  newDiscoveryProductPeople.innerHTML = `
    <section class="related-people-group" aria-labelledby="new-discovery-personas-title">
      <div class="related-people-group-header">
        <div>
          <h4 id="new-discovery-personas-title">Personas relacionadas</h4>
          <p>Arquétipos e perfis impactados pelo discovery.</p>
        </div>
        <span>${escapeHTML(personasHint)}</span>
      </div>
      <div class="people-option-grid">
        ${personas.length
          ? personas.map((persona, index) => renderNewDiscoveryPeopleCard(normalizePersonaSnapshot(persona, product, index), "persona", selectedPersonaIds)).join("")
          : `<div class="related-people-empty">
              <p>Este produto ainda não possui personas cadastradas.</p>
              ${renderManageAudienceLink()}
            </div>`}
      </div>
    </section>

    <section class="related-people-group" aria-labelledby="new-discovery-stakeholders-title">
      <div class="related-people-group-header">
        <div>
          <h4 id="new-discovery-stakeholders-title">Stakeholders envolvidos</h4>
          <p>Funções envolvidas em decisão, aprovação, entrega ou influência.</p>
        </div>
        <span>${escapeHTML(stakeholdersHint)}</span>
      </div>
      <div class="people-option-grid">
        ${stakeholders.length
          ? stakeholders.map((stakeholder, index) => renderNewDiscoveryPeopleCard(normalizeStakeholderSnapshot(stakeholder, product, index), "stakeholder", selectedStakeholderIds)).join("")
          : `<div class="related-people-empty">
              <p>Este produto ainda não possui stakeholders cadastrados.</p>
              ${renderManageAudienceLink()}
            </div>`}
      </div>
    </section>

    ${!selectedPersonaIds.length && !selectedStakeholderIds.length
      ? `<p class="related-people-hint">Selecionar personas e stakeholders ajuda a contextualizar o discovery.</p>`
      : ""}
  `;
}

function closeFlowSelectMenus(exceptKey = "") {
  flowSelectButtons.forEach((button) => {
    const key = button.dataset.flowSelect;
    const menu = document.querySelector(`[data-flow-select-menu="${key}"]`);
    const field = button.closest(".custom-select, .participant-field");

    if (key !== exceptKey) {
      button.setAttribute("aria-expanded", "false");
      field?.classList.remove("open");
      if (menu) {
        menu.hidden = true;
      }
    }
  });
}

function updateFlowSelectValue(key, value, checked) {
  const current = new Set(flowSelectValues[key] || []);
  if (checked) {
    current.add(value);
  } else {
    current.delete(value);
  }

  flowSelectValues[key] = [...current];
  const button = document.querySelector(`[data-flow-select="${key}"]`);
  if (button) {
    syncFlowSelectButton(button);
  }
}

function resetFlowSelects() {
  flowSelectValues = {
    responsaveis: [...defaultFlowSelectValues.responsaveis],
    personas: [...defaultFlowSelectValues.personas],
    stakeholders: [...defaultFlowSelectValues.stakeholders],
  };

  flowSelectButtons.forEach((button) => {
    const key = button.dataset.flowSelect;
    syncFlowSelectButton(button);
    syncFlowSelectMenu(key);
  });
  closeFlowSelectMenus();
}

function initializeFlowSelects() {
  flowSelectButtons.forEach((button) => {
    const key = button.dataset.flowSelect;
    const field = button.closest(".participant-field");
    field?.classList.add("custom-select");
    button.classList.add("custom-select-trigger");

    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");

    if (!field || field.querySelector(`[data-flow-select-menu="${key}"]`)) {
      syncFlowSelectButton(button);
      return;
    }

    const menu = document.createElement("div");
    menu.className = "flow-select-menu custom-select-menu";
    menu.dataset.flowSelectMenu = key;
    menu.hidden = true;
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-label", getFlowSelectPlaceholder(key));
    menu.innerHTML = (flowSelectOptions[key] || []).map((name) => `
      <label class="flow-select-option custom-select-option">
        <input type="checkbox" value="${escapeHTML(name)}" />
        <span>${escapeHTML(name)}</span>
      </label>
    `).join("");

    menu.addEventListener("change", (event) => {
      const checkbox = event.target.closest("input[type='checkbox']");
      if (!checkbox) {
        return;
      }

      updateFlowSelectValue(key, checkbox.value, checkbox.checked);
    });

    field.appendChild(menu);
    syncFlowSelectButton(button);
    syncFlowSelectMenu(key);
  });
}

function normalizeSupportLinkRows(links = []) {
  const normalizedLinks = Array.isArray(links)
    ? links.map((link) => String(link || ""))
    : [];
  return normalizedLinks.length ? normalizedLinks : [""];
}

function syncSupportLinksFromInputs() {
  newDiscoverySupportLinksDraft = normalizeSupportLinkRows([...newDiscoverySupportLinks.querySelectorAll("[data-support-link-input]")]
    .map((input) => input.value));
}

function renderSupportLinkRows(focusIndex = -1) {
  const links = normalizeSupportLinkRows(newDiscoverySupportLinksDraft);
  const canRemoveRows = links.length > 1;

  newDiscoverySupportLinks.innerHTML = links.map((link, index) => `
    <div class="dynamic-link-row">
      <input type="url" placeholder="Insira aqui seu link" value="${escapeHTML(link)}" data-support-link-input data-support-link-index="${index}" />
      ${canRemoveRows ? `
        <button class="btn btn-icon link-remove-button" type="button" aria-label="Remover link" data-remove-support-link="${index}">
          <span aria-hidden="true">×</span>
        </button>
      ` : ""}
    </div>
  `).join("");

  if (focusIndex >= 0) {
    const inputToFocus = newDiscoverySupportLinks.querySelector(`[data-support-link-index="${focusIndex}"]`);
    window.setTimeout(() => inputToFocus?.focus(), 0);
  }
}

function collectParticipantInfo() {
  newDiscoveryParticipantsDraft = [...flowSelectButtons].reduce((acc, button) => {
    const key = button.dataset.flowSelect;
    acc[key] = [...(flowSelectValues[key] || [])];
    return acc;
  }, {});
  newDiscoveryDeadlineDraft = newDiscoveryDeadline.value.trim();
  newDiscoverySupportFiles = [...newDiscoverySupportFile.files];
  syncSupportLinksFromInputs();
  newDiscoverySupportLinksDraft = newDiscoverySupportLinksDraft
    .map((link) => link.trim())
    .filter(Boolean);
}

function collectCsdInfo() {
  return ["certezas", "suposicoes", "duvidas"].reduce((acc, key) => {
    acc[key] = [...document.querySelectorAll(`[data-csd-list="${key}"] input`)]
      .map((input) => input.value.trim())
      .filter(Boolean);
    return acc;
  }, {});
}

function formatDraftParticipants(participants = {}) {
  const groups = [
    ["Responsáveis", participants.responsaveis],
    ["Perfis de pesquisa", participants.personas],
    ["Stakeholders de pesquisa", participants.stakeholders],
  ];

  return groups
    .filter(([, values]) => Array.isArray(values) && values.length)
    .map(([label, values]) => `${label}: ${values.join(", ")}`)
    .join(" | ");
}

function setNewDiscoveryStatus(message = "", type = "info") {
  if (!newDiscoveryStatus) {
    return;
  }

  newDiscoveryStatus.hidden = !message;
  newDiscoveryStatus.textContent = message;
  newDiscoveryStatus.classList.toggle("error", type === "error");
}

function formatCrewKickoffElapsed() {
  if (!crewKickoffStartedAt) {
    return "0s";
  }

  const seconds = Math.max(0, Math.round((Date.now() - crewKickoffStartedAt) / 1000));
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
}

function stopCrewKickoffElapsedTimer() {
  if (crewKickoffElapsedTimer) {
    window.clearInterval(crewKickoffElapsedTimer);
    crewKickoffElapsedTimer = null;
  }
}

function startCrewKickoffElapsedTimer() {
  stopCrewKickoffElapsedTimer();
  if (!crewKickoffElapsed) {
    return;
  }

  crewKickoffElapsed.textContent = formatCrewKickoffElapsed();
  crewKickoffElapsedTimer = window.setInterval(() => {
    crewKickoffElapsed.textContent = formatCrewKickoffElapsed();
  }, 1000);
}

function resetCrewKickoffPanel() {
  crewKickoffStartedAt = 0;
  stopCrewKickoffElapsedTimer();
  if (!crewKickoffPanel) {
    return;
  }

  crewKickoffPanel.hidden = true;
  crewKickoffSummary.textContent = "Preparando integração com a CrewAI.";
  crewKickoffPhase.textContent = "Preparando";
  crewKickoffId.textContent = "Aguardando...";
  crewKickoffElapsed.textContent = "0s";
  crewKickoffLog.innerHTML = "";
  crewKickoffPanel.classList.remove("error", "success");
}

function addCrewKickoffLog(message, type = "info") {
  if (!crewKickoffPanel || !crewKickoffLog) {
    return;
  }

  crewKickoffPanel.hidden = false;
  const item = document.createElement("li");
  item.className = type;
  item.innerHTML = `
    <time>${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</time>
    <span>${escapeHTML(message)}</span>
  `;
  crewKickoffLog.appendChild(item);
  crewKickoffLog.scrollTop = crewKickoffLog.scrollHeight;
}

function updateCrewKickoffPanel({ summary = "", phase = "", kickoffId = "", state = "" } = {}) {
  if (!crewKickoffPanel) {
    return;
  }

  crewKickoffPanel.hidden = false;
  if (summary) {
    crewKickoffSummary.textContent = summary;
  }
  if (phase) {
    crewKickoffPhase.textContent = phase;
  }
  if (kickoffId) {
    crewKickoffId.textContent = kickoffId;
  }
  crewKickoffElapsed.textContent = formatCrewKickoffElapsed();
  crewKickoffPanel.classList.toggle("error", state === "error");
  crewKickoffPanel.classList.toggle("success", state === "success");
}

function setNewDiscoveryCreateState(isProcessing) {
  isCreatingNewDiscovery = isProcessing;
  if (newDiscoveryCreateButton) {
    const defaultLabel = newDiscoveryCreateButton.dataset.defaultLabel || newDiscoveryCreateButton.textContent;
    newDiscoveryCreateButton.dataset.defaultLabel = defaultLabel;
    newDiscoveryCreateButton.disabled = isProcessing;
    newDiscoveryCreateButton.textContent = isProcessing ? "Criando..." : defaultLabel;
  }

  [newDiscoveryCsdBack, newDiscoveryMethodologyBack, closeNewDiscoveryButton, ...cancelNewDiscoveryButtons, ...methodologyOptionButtons].filter(Boolean).forEach((button) => {
    button.disabled = isProcessing;
  });
}

function getNewDiscoveryDraftTitle(title = "", objective = "") {
  const generatedTitle = objective.length > 54 ? `${objective.slice(0, 54).trim()}...` : objective;
  return title || generatedTitle || "Novo discovery";
}

function createNewDiscoveryDraftId(draftTitle) {
  const baseId = `draft-${slugify(draftTitle) || Date.now()}`;
  return createdDiscoveries.some((discovery) => discovery.id === baseId) ? `${baseId}-${Date.now()}` : baseId;
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function getApiPath(path = "") {
  return `${API_BASE_PATH}/${String(path || "").replace(/^\/+/, "")}`;
}

function parsePositiveInteger(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

async function loadCrewAiClientConfig() {
  if (crewAiClientConfigLoaded) {
    return true;
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 2000);

  try {
    const response = await fetch(getApiPath("config"), { signal: controller.signal });
    if (!response.ok) {
      return false;
    }

    const config = await readApiJson(response);
    crewAiPollIntervalMs = parsePositiveInteger(config.crewAiPollIntervalMs, DEFAULT_CREWAI_POLL_INTERVAL_MS);
    crewAiPollTimeoutMs = parsePositiveInteger(config.crewAiPollTimeoutMs, DEFAULT_CREWAI_POLL_TIMEOUT_MS);
    crewAiClientConfigLoaded = true;
    return true;
  } catch {
    crewAiPollIntervalMs = DEFAULT_CREWAI_POLL_INTERVAL_MS;
    crewAiPollTimeoutMs = DEFAULT_CREWAI_POLL_TIMEOUT_MS;
    return false;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function loadFrontendApiModeFromConfig() {
  if (getRequestedDiscoveryFrontendApiMode()) {
    return false;
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 1200);

  try {
    const response = await fetch(getApiPath("config"), { signal: controller.signal });
    if (!response.ok) {
      return false;
    }

    const config = await readApiJson(response);
    return setDiscoveryFrontendApiMode(config.frontendApiMode || config.discoveryFrontendApiMode || config.apiMode || "", {
      persist: false,
    });
  } catch {
    return false;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function loadDiscoveryRunPollingConfig() {
  if (discoveryRunPollingConfigLoaded) {
    return true;
  }

  if (isLocalMockApiMode()) {
    discoveryRunPollIntervalMs = DEFAULT_DISCOVERY_POLL_INTERVAL_MS;
    discoveryRunPollingConfigLoaded = true;
    return true;
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 2000);

  try {
    const response = await fetch(getApiPath("config"), { signal: controller.signal });
    if (!response.ok) {
      discoveryRunPollIntervalMs = DEFAULT_DISCOVERY_POLL_INTERVAL_MS;
      return false;
    }

    const config = await readApiJson(response);
    discoveryRunPollIntervalMs = parsePositiveInteger(
      config.discoveryAiPollIntervalMs || config.discoveryPollIntervalMs || config.mvpPollIntervalMs,
      DEFAULT_DISCOVERY_POLL_INTERVAL_MS,
    );
    discoveryRunPollingConfigLoaded = true;
    return true;
  } catch {
    discoveryRunPollIntervalMs = DEFAULT_DISCOVERY_POLL_INTERVAL_MS;
    return false;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function readApiJson(response) {
  const text = await response.text();
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

function formatApiPayloadDetails(payload = {}) {
  if (!payload || !Object.keys(payload).length) {
    return "Sem corpo de resposta.";
  }

  const source = payload.discoveryAi || payload.crewAi || payload.detail || payload.message || payload.error || payload.raw || payload;
  const text = typeof source === "string" ? source : JSON.stringify(source);
  return text.length > 700 ? `${text.slice(0, 700)}...` : text;
}

function getFriendlyUiErrorMessage(error, fallback = "Não foi possível concluir a ação agora.") {
  const details = error?.payload ? formatApiPayloadDetails(error.payload) : "";
  const message = String(error?.message || details || "").trim();
  const normalizedMessage = normalizeText(message);

  if (!message) {
    return fallback;
  }

  if (normalizedMessage.includes("discovery_ai_api_base_url")) {
    return "Backend MVP não configurado. Configure DISCOVERY_AI_API_BASE_URL ou use o modo mock local para a demo.";
  }

  if (normalizedMessage.includes("failed to fetch") || normalizedMessage.includes("networkerror")) {
    return "Não consegui conectar ao backend MVP. Verifique se ele está rodando ou use o modo mock local.";
  }

  return `${fallback} Detalhes: ${message}`;
}

function createApiClientError(action, response, payload = {}) {
  const details = formatApiPayloadDetails(payload);
  const error = new Error(`${action} (${response.status}). ${details}`);
  error.payload = payload;
  error.status = response.status;
  return error;
}

async function requestDiscoveryApi(path, { method = "GET", body = null, action = "Falha na chamada ao Discovery AI backend" } = {}) {
  const options = {
    method,
    headers: {
      Accept: "application/json",
    },
  };

  if (body !== null) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const response = await fetch(path, options);
  const payload = await readApiJson(response);

  if (!response.ok) {
    throw createApiClientError(action, response, payload);
  }

  return payload;
}

function requireDiscoveryRunId(runId) {
  const normalizedRunId = String(runId || "").trim();
  if (!normalizedRunId) {
    throw new Error("runId é obrigatório para chamar o Discovery AI backend.");
  }

  return normalizedRunId;
}

function isLocalMockApiMode() {
  return isDemoApiMode();
}

function loadLocalMockRuns() {
  try {
    const storedRuns = window.localStorage?.getItem(LOCAL_MOCK_RUNS_STORAGE_KEY);
    if (!storedRuns) {
      return localMockRunsMemory;
    }

    const parsedRuns = JSON.parse(storedRuns);
    localMockRunsMemory = parsedRuns && typeof parsedRuns === "object" && !Array.isArray(parsedRuns) ? parsedRuns : {};
    return localMockRunsMemory;
  } catch {
    return localMockRunsMemory;
  }
}

function saveLocalMockRuns(runs = {}) {
  localMockRunsMemory = runs && typeof runs === "object" && !Array.isArray(runs) ? runs : {};
  try {
    window.localStorage?.setItem(LOCAL_MOCK_RUNS_STORAGE_KEY, JSON.stringify(localMockRunsMemory));
  } catch {
    // Mock persistence is best-effort for demo mode.
  }
}

function getLocalMockRun(runId) {
  const runs = loadLocalMockRuns();
  return runs[runId] || null;
}

function upsertLocalMockRun(run) {
  const runs = loadLocalMockRuns();
  const updatedRun = {
    ...run,
    updated_at: new Date().toISOString(),
  };
  runs[updatedRun.run_id] = updatedRun;
  saveLocalMockRuns(runs);
  return updatedRun;
}

function requireLocalMockRun(runId) {
  const normalizedRunId = requireDiscoveryRunId(runId);
  const run = getLocalMockRun(normalizedRunId);
  if (!run) {
    throw new Error(`Run mock não encontrada: ${normalizedRunId}.`);
  }

  return run;
}

function getLocalMockDiscoveryInput(input = {}) {
  return input && typeof input === "object" && "inputs" in input ? input.inputs || {} : input || {};
}

function createLocalMockRun(input = {}) {
  const inputs = getLocalMockDiscoveryInput(input);
  const now = new Date().toISOString();
  const discoveryId = String(inputs.discovery_id || `mock-discovery-${Date.now()}`);
  const runId = `mock-run-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  return upsertLocalMockRun({
    run_id: runId,
    discovery_id: discoveryId,
    current_state: WORKFLOW_STATES.DOR_ANALYZING,
    status: RUN_STATUSES.RUNNING,
    status_poll_count: 0,
    inputs,
    evidence_items: [],
    created_at: now,
    updated_at: now,
  });
}

function getMockArtifactStageIndex(state = "") {
  const order = [
    WORKFLOW_STATES.DISCOVERY_CREATED,
    WORKFLOW_STATES.DOR_ANALYZING,
    WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING,
    WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING,
    WORKFLOW_STATES.INSIGHT_REVIEW_PENDING,
    WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING,
    WORKFLOW_STATES.RECOMMENDATION_RUNNING,
    WORKFLOW_STATES.HANDOFF_RUNNING,
    WORKFLOW_STATES.COMPLETED,
  ];
  const index = order.indexOf(normalizeWorkflowValue(state));
  return index >= 0 ? index : 0;
}

function createLocalMockArtifactLibrary(run = {}) {
  const inputs = run.inputs || {};
  const evidenceItems = Array.isArray(run.evidence_items) && run.evidence_items.length
    ? run.evidence_items
    : [
      {
        title: "Entrevista com time comercial",
        source_type: "interview",
        participant_or_segment: "Coordenadores de vendas",
        notes: "Participantes relataram dificuldade para explicar diferenças de preço e regras promocionais durante negociações regionais.",
        evidence_date: "2026-05-20",
      },
    ];

  return {
    discovery_charter: {
      title: inputs.title || "Discovery Cora Preços",
      problem: inputs.problem || "Times comerciais precisam de mais clareza sobre regras de preço e promoções para reduzir retrabalho.",
      objective: inputs.objective || "Identificar oportunidades para aumentar confiança e velocidade na tomada de decisão comercial.",
      dor_status: "COMPLETED",
      readiness_score: 86,
      certainties: inputs.certainties?.length ? inputs.certainties : ["Há fricção na leitura de regras comerciais atuais."],
      assumptions: inputs.assumptions?.length ? inputs.assumptions : ["Uma visão única de preço e promoção reduz dúvidas operacionais."],
      open_questions: inputs.open_questions?.length ? inputs.open_questions : ["Quais sinais explicam melhor uma divergência de preço?"],
      critical_gaps: ["Validar profundidade necessária por perfil comercial."],
    },
    research_plan_package: {
      summary: "Plano focado em validar clareza, confiança e acionabilidade das informações de preço para times comerciais.",
      recommended_methodology: inputs.methodology_name || "Discovery Otimizado",
      sample: "8 a 12 participantes entre coordenadores, analistas e operação comercial",
      timeline: "3 semanas",
      plan_status: "READY_FOR_APPROVAL",
      learning_goals: [
        "Entender quais dúvidas bloqueiam decisões comerciais.",
        "Mapear evidências necessárias para explicar preço, promoção e exceções.",
        "Validar critérios de confiança para recomendação automatizada.",
      ],
      research_questions: [
        "Quais informações o usuário precisa antes de aprovar uma exceção?",
        "Onde a jornada atual gera retrabalho ou dupla conferência?",
        "Que nível de detalhe torna uma recomendação confiável?",
      ],
      participant_strategy: [
        "Combinar usuários de operação comercial e liderança regional.",
        "Priorizar perfis que lidam com divergência de preço semanalmente.",
      ],
      protocol_summary: "Entrevistas semiestruturadas com análise de casos reais e priorização de oportunidades ao final.",
      recommended_methods: [
        { name: "Entrevistas em profundidade", sample: "8 participantes", rationale: "Capturar contexto e critérios de decisão." },
        { name: "Desk research operacional", sample: "Documentos e dashboards atuais", rationale: "Mapear regras e exceções existentes." },
      ],
      risks: ["Disponibilidade de participantes em fechamento mensal.", "Acesso parcial a exemplos reais de divergência."],
    },
    evidence_inventory: {
      total: evidenceItems.length,
      inventory_status: evidenceItems.length ? "EVIDENCE_RECEIVED" : "WAITING_FOR_EVIDENCE",
      coverage: evidenceItems.length ? "Cobertura inicial suficiente para síntese MVP" : "Aguardando uploads textuais",
      items: evidenceItems,
      gaps: evidenceItems.length >= 2 ? [] : ["Adicionar ao menos uma evidência de perfil liderança/regional."],
    },
    insights_package: {
      synthesis_summary: "A síntese indica que confiança na decisão depende menos de volume de dados e mais de rastreabilidade clara entre regra, exceção e impacto comercial.",
      synthesis_status: "READY_FOR_REVIEW",
      confidence_level: "Média-alta",
      evidence_strength: "Forte para dores de clareza operacional; média para estimativa de impacto financeiro.",
      key_patterns: [
        "Usuários alternam entre múltiplas fontes para explicar divergências.",
        "Exceções comerciais precisam de histórico e responsável visível.",
        "Alertas são mais úteis quando trazem próxima ação recomendada.",
      ],
      validated_insights: [
        { title: "Rastreabilidade aumenta confiança", description: "Usuários aceitam recomendações quando conseguem ver origem, regra e impacto esperado.", confidence: "Alta" },
        { title: "Resumo executivo reduz retrabalho", description: "Um resumo com motivo da divergência evita consultas manuais em planilhas e conversas paralelas.", confidence: "Média-alta" },
      ],
      contradictions: ["Alguns perfis pedem detalhes extensos, enquanto liderança prefere síntese curta."],
      unsupported_claims: ["Impacto financeiro exato ainda precisa de validação quantitativa."],
    },
    opportunity_package: {
      opportunity_status: "READY_FOR_REVIEW",
      opportunity_solution_tree: {
        outcome: "Aumentar confiança e velocidade nas decisões de preço",
        opportunities: "Explicar divergências, evidenciar exceções, recomendar próxima ação",
      },
      prioritized_opportunities: [
        { title: "Explicação de divergência em linguagem comercial", impact: "Alto", confidence: "Alta", risk: "Médio" },
        { title: "Trilha de evidências da regra aplicada", impact: "Alto", confidence: "Média-alta", risk: "Baixo" },
        { title: "Recomendação de próxima ação", impact: "Médio", confidence: "Média", risk: "Médio" },
      ],
      supporting_insights: ["Rastreabilidade aumenta confiança", "Resumo executivo reduz retrabalho"],
      scores: { confidence: "Média-alta", impact: "Alto", risk: "Médio" },
      recommended_focus_area: "Explicabilidade da decisão comercial antes de automações mais prescritivas.",
      deferred_opportunities: ["Simulação financeira avançada em tempo real", "Automação completa de aprovação de exceções"],
      risks: ["Dependência de qualidade das regras comerciais cadastradas."],
    },
    recommendation: {
      recommendation_type: "Proceed with focused MVP",
      executive_summary: "Recomenda-se avançar com um MVP de explicabilidade para decisões de preço, priorizando rastreabilidade, resumo executivo e próxima ação.",
      decision_rationale: "As evidências apontam alta dor operacional e boa confiança qualitativa, mas impacto financeiro precisa ser medido em piloto controlado.",
      confidence_level: "Média-alta",
      risks: ["Dados de regras incompletos podem reduzir confiança.", "Piloto sem métrica de retrabalho pode subestimar valor."],
      next_steps: [
        "Definir squad de piloto com Comercial Revenue.",
        "Mapear fontes oficiais de regra e exceção.",
        "Instrumentar métricas de tempo de análise e retrabalho.",
      ],
      success_metrics: ["Tempo para explicar divergência", "Redução de consultas manuais", "Taxa de confiança declarada"],
    },
    handoff: {
      handoff_status: "READY",
      owner: "Product Discovery",
      target_team: "Comercial Revenue",
      delivery_requirements_summary: "Construir uma superfície que explique divergência de preço com origem da regra, exceções, impacto esperado e ação recomendada.",
      user_stories: [
        "Como analista comercial, quero entender por que um preço divergiu para decidir sem consultar múltiplas fontes.",
        "Como coordenador, quero ver histórico e responsável pela exceção para aprovar com segurança.",
      ],
      acceptance_criteria: [
        "Mostra regra aplicada, fonte e data de atualização.",
        "Destaca exceções e responsável quando existirem.",
        "Exibe próxima ação recomendada com justificativa.",
      ],
      analytics_to_track: ["Tempo até decisão", "Cliques em fontes de evidência", "Taxa de aprovação sem retrabalho"],
      open_questions: ["Qual fonte será autoridade para exceções regionais?", "Qual threshold define divergência crítica?"],
      traceability_map_summary: "Cada recomendação deve apontar para insight, evidência, regra de negócio e métrica de sucesso relacionada.",
    },
  };
}

function getLocalMockArtifactsForRun(run = {}) {
  const library = createLocalMockArtifactLibrary(run);
  const stageIndex = getMockArtifactStageIndex(run.current_state);
  const artifacts = {
    discovery_charter: library.discovery_charter,
  };

  if (stageIndex >= getMockArtifactStageIndex(WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING)) {
    artifacts.research_plan_package = library.research_plan_package;
  }
  if (stageIndex >= getMockArtifactStageIndex(WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING)) {
    artifacts.evidence_inventory = library.evidence_inventory;
  }
  if (stageIndex >= getMockArtifactStageIndex(WORKFLOW_STATES.INSIGHT_REVIEW_PENDING)) {
    artifacts.insights_package = library.insights_package;
  }
  if (stageIndex >= getMockArtifactStageIndex(WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING)) {
    artifacts.opportunity_package = library.opportunity_package;
  }
  if (stageIndex >= getMockArtifactStageIndex(WORKFLOW_STATES.COMPLETED)) {
    artifacts.recommendation = library.recommendation;
    artifacts.handoff = library.handoff;
  }

  return artifacts;
}

async function kickoffLocalMockDiscoveryRun(input) {
  const run = createLocalMockRun(input);
  return {
    run_id: run.run_id,
    discovery_id: run.discovery_id,
    current_state: run.current_state,
    status: run.status,
    created_at: run.created_at,
  };
}

async function getLocalMockDiscoveryRunStatus(runId) {
  let run = requireLocalMockRun(runId);
  if ([WORKFLOW_STATES.DISCOVERY_CREATED, WORKFLOW_STATES.DOR_ANALYZING].includes(run.current_state)) {
    run = upsertLocalMockRun({
      ...run,
      current_state: WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING,
      status: RUN_STATUSES.WAITING_FOR_HUMAN,
      status_poll_count: Number(run.status_poll_count || 0) + 1,
    });
  }

  return {
    run_id: run.run_id,
    discovery_id: run.discovery_id,
    current_state: run.current_state,
    status: run.status,
    updated_at: run.updated_at,
  };
}

async function resumeLocalMockDiscoveryRun(runId, eventType, payload = {}) {
  const run = requireLocalMockRun(runId);
  const nextByEvent = {
    [EVENT_TYPES.APPROVE_RESEARCH]: WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING,
    [EVENT_TYPES.REQUEST_RESEARCH_CHANGES]: WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING,
    [EVENT_TYPES.APPROVE_INSIGHTS]: WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING,
    [EVENT_TYPES.REQUEST_SYNTHESIS_REVIEW]: WORKFLOW_STATES.INSIGHT_REVIEW_PENDING,
    [EVENT_TYPES.APPROVE_OPPORTUNITIES]: WORKFLOW_STATES.COMPLETED,
    [EVENT_TYPES.REQUEST_OPPORTUNITY_REVIEW]: WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING,
  };
  const nextState = nextByEvent[eventType] || run.current_state;
  const nextStatus = nextState === WORKFLOW_STATES.COMPLETED ? RUN_STATUSES.COMPLETED : RUN_STATUSES.WAITING_FOR_HUMAN;
  const updatedRun = upsertLocalMockRun({
    ...run,
    current_state: nextState,
    status: nextStatus,
    last_event_type: eventType,
    last_event_payload: payload,
  });

  return {
    run_id: updatedRun.run_id,
    discovery_id: updatedRun.discovery_id,
    current_state: updatedRun.current_state,
    status: updatedRun.status,
    updated_at: updatedRun.updated_at,
  };
}

async function getLocalMockDiscoveryRunArtifacts(runId) {
  const run = requireLocalMockRun(runId);
  return {
    run_id: run.run_id,
    discovery_id: run.discovery_id,
    artifacts: getLocalMockArtifactsForRun(run),
    updated_at: run.updated_at,
  };
}

async function uploadLocalMockDiscoveryEvidence(runId, evidenceItems) {
  const run = requireLocalMockRun(runId);
  const evidence = Array.isArray(evidenceItems) ? evidenceItems : [evidenceItems].filter(Boolean);
  const updatedRun = upsertLocalMockRun({
    ...run,
    evidence_items: [
      ...(Array.isArray(run.evidence_items) ? run.evidence_items : []),
      ...evidence,
    ],
    current_state: WORKFLOW_STATES.INSIGHT_REVIEW_PENDING,
    status: RUN_STATUSES.WAITING_FOR_HUMAN,
    last_event_type: EVENT_TYPES.SUBMIT_EVIDENCE,
  });

  return {
    run_id: updatedRun.run_id,
    discovery_id: updatedRun.discovery_id,
    current_state: updatedRun.current_state,
    status: updatedRun.status,
    evidence_count: updatedRun.evidence_items.length,
    updated_at: updatedRun.updated_at,
  };
}

// Discovery AI MVP API client. These methods target the new local proxy under /api/discovery/*.
async function kickoffDiscoveryRun(input) {
  if (isLocalMockApiMode()) {
    return kickoffLocalMockDiscoveryRun(input);
  }

  const body = input && typeof input === "object" && "inputs" in input ? input : { inputs: input || {} };
  return requestDiscoveryApi(getApiPath("discovery/kickoff"), {
    method: "POST",
    body,
    action: "Falha ao iniciar run do Discovery AI",
  });
}

async function getDiscoveryRunStatus(runId) {
  const normalizedRunId = requireDiscoveryRunId(runId);
  if (isLocalMockApiMode()) {
    return getLocalMockDiscoveryRunStatus(normalizedRunId);
  }

  return requestDiscoveryApi(getApiPath(`discovery/status/${encodeURIComponent(normalizedRunId)}`), {
    action: "Falha ao consultar status do Discovery AI",
  });
}

async function resumeDiscoveryRun(runId, eventType, payload = {}) {
  const normalizedRunId = requireDiscoveryRunId(runId);
  const normalizedEventType = String(eventType || "").trim();
  if (!normalizedEventType) {
    throw new Error("eventType é obrigatório para retomar uma run do Discovery AI.");
  }

  if (isLocalMockApiMode()) {
    return resumeLocalMockDiscoveryRun(normalizedRunId, normalizedEventType, payload);
  }

  return requestDiscoveryApi(getApiPath("discovery/resume"), {
    method: "POST",
    body: {
      ...payload,
      run_id: normalizedRunId,
      event_type: normalizedEventType,
    },
    action: "Falha ao retomar run do Discovery AI",
  });
}

async function getDiscoveryRunOutputs(runId) {
  const normalizedRunId = requireDiscoveryRunId(runId);
  if (isLocalMockApiMode()) {
    const run = requireLocalMockRun(normalizedRunId);
    return { run_id: run.run_id, outputs: getLocalMockArtifactsForRun(run) };
  }

  return requestDiscoveryApi(getApiPath(`discovery/outputs/${encodeURIComponent(normalizedRunId)}`), {
    action: "Falha ao buscar outputs do Discovery AI",
  });
}

async function getDiscoveryRun(runId) {
  const normalizedRunId = requireDiscoveryRunId(runId);
  if (isLocalMockApiMode()) {
    return requireLocalMockRun(normalizedRunId);
  }

  return requestDiscoveryApi(getApiPath(`discovery/runs/${encodeURIComponent(normalizedRunId)}`), {
    action: "Falha ao buscar run do Discovery AI",
  });
}

async function getDiscoveryRunArtifacts(runId) {
  const normalizedRunId = requireDiscoveryRunId(runId);
  if (isLocalMockApiMode()) {
    return getLocalMockDiscoveryRunArtifacts(normalizedRunId);
  }

  return requestDiscoveryApi(getApiPath(`discovery/runs/${encodeURIComponent(normalizedRunId)}/artifacts`), {
    action: "Falha ao buscar artefatos do Discovery AI",
  });
}

async function loadDiscoveryArtifacts(runId) {
  const payload = await getDiscoveryRunArtifacts(runId);
  return {
    raw: payload,
    groups: normalizeDiscoveryArtifactsPayload(payload),
  };
}

async function uploadDiscoveryEvidence(runId, evidenceItems) {
  const normalizedRunId = requireDiscoveryRunId(runId);
  const evidence = Array.isArray(evidenceItems) ? evidenceItems : [evidenceItems].filter(Boolean);
  if (isLocalMockApiMode()) {
    return uploadLocalMockDiscoveryEvidence(normalizedRunId, evidence);
  }

  return requestDiscoveryApi(getApiPath(`discovery/runs/${encodeURIComponent(normalizedRunId)}/evidence`), {
    method: "POST",
    body: { evidence },
    action: "Falha ao enviar evidências para o Discovery AI",
  });
}

function getDiscoveryRunId(discovery = {}) {
  return String(discovery.run_id || discovery.runId || "").trim();
}

function persistDiscoveryRunPatch(runId, baseDiscovery = {}, patch = {}) {
  const updatedDiscovery = updateCreatedDiscoveryRun(runId, patch);
  if (updatedDiscovery) {
    return updatedDiscovery;
  }

  if (baseDiscovery?.id) {
    const fallbackDiscovery = {
      ...baseDiscovery,
      ...patch,
    };
    upsertCreatedDiscovery(fallbackDiscovery);
    if (draftDiscovery?.id === fallbackDiscovery.id) {
      draftDiscovery = fallbackDiscovery;
    }
    return fallbackDiscovery;
  }

  return {
    ...baseDiscovery,
    ...patch,
  };
}

const DISCOVERY_ARTIFACT_GROUPS = Object.freeze([
  {
    key: "discovery_charter",
    title: "Discovery Charter",
    renderer: renderDiscoveryCharterArtifact,
  },
  {
    key: "research_plan_package",
    title: "Research Plan",
    renderer: renderResearchPlanArtifact,
  },
  {
    key: "evidence_inventory",
    title: "Evidence Upload",
    renderer: renderEvidenceInventoryArtifact,
  },
  {
    key: "insights_package",
    title: "Insights",
    renderer: renderInsightsArtifact,
  },
  {
    key: "opportunity_package",
    title: "Opportunities",
    renderer: renderOpportunityArtifact,
  },
  {
    key: "recommendation",
    title: "Recommendation",
    renderer: renderRecommendationArtifact,
  },
  {
    key: "handoff",
    title: "Handoff",
    renderer: renderHandoffArtifact,
  },
]);

function isEmptyArtifactValue(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return !value.trim();
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}

function hasRenderableArtifact(artifact) {
  return !isEmptyArtifactValue(artifact);
}

function asArray(value) {
  if (isEmptyArtifactValue(value)) {
    return [];
  }

  return Array.isArray(value) ? value.filter((item) => !isEmptyArtifactValue(item)) : [value];
}

function getArtifactValue(artifact = {}, keys = []) {
  if (!artifact || typeof artifact !== "object" || Array.isArray(artifact)) {
    return "";
  }

  return keys.reduce((found, key) => {
    if (!isEmptyArtifactValue(found)) {
      return found;
    }
    return artifact[key];
  }, "");
}

function getArtifactGroupFromArray(groups = [], key) {
  const normalizedKey = normalizeText(key).replace(/_/g, " ");
  const group = groups.find((item = {}) => {
    const identifiers = [
      item.key,
      item.id,
      item.type,
      item.name,
      item.title,
      item.group,
      item.group_key,
      item.groupKey,
    ];
    return identifiers.some((identifier) => normalizeText(String(identifier || "")).replace(/_/g, " ") === normalizedKey);
  });

  if (!group) {
    return "";
  }

  return group.artifact || group.artifacts || group.data || group.output || group.content || group;
}

function normalizeDiscoveryArtifactsPayload(payload = {}) {
  const source = payload.artifacts
    || payload.artifact_groups
    || payload.groups
    || payload.data?.artifacts
    || payload.data?.artifact_groups
    || payload.data?.groups
    || payload.data
    || payload;

  return DISCOVERY_ARTIFACT_GROUPS.reduce((groups, group) => {
    if (Array.isArray(source)) {
      groups[group.key] = getArtifactGroupFromArray(source, group.key);
      return groups;
    }

    groups[group.key] = source?.[group.key]
      || source?.[group.title]
      || payload[group.key]
      || payload.data?.[group.key]
      || "";
    return groups;
  }, {});
}

function formatArtifactDisplayValue(value) {
  if (isEmptyArtifactValue(value)) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.map(formatArtifactDisplayValue).filter(Boolean).join(", ");
  }

  if (typeof value === "object") {
    return formatArtifactDisplayValue(
      value.title
      || value.name
      || value.label
      || value.summary
      || value.description
      || value.status
      || "Informação estruturada disponível no pacote"
    );
  }

  return String(value);
}

function renderArtifactField(label, value) {
  const displayValue = formatArtifactDisplayValue(value);
  if (!displayValue) {
    return "";
  }

  return `
    <div class="artifact-field">
      <dt>${escapeHTML(label)}</dt>
      <dd>${escapeHTML(displayValue)}</dd>
    </div>
  `;
}

function renderArtifactListItem(item) {
  if (isEmptyArtifactValue(item)) {
    return "";
  }

  if (!item || typeof item !== "object" || Array.isArray(item)) {
    return `<li>${escapeHTML(formatArtifactDisplayValue(item))}</li>`;
  }

  const title = formatArtifactDisplayValue(
    item.title
    || item.name
    || item.label
    || item.insight
    || item.opportunity
    || item.hypothesis
    || item.question
    || item.source
    || item.file_name
    || item.fileName
    || item.recommendation
    || item.action
  );
  const body = formatArtifactDisplayValue(
    item.description
    || item.summary
    || item.rationale
    || item.detail
    || item.notes
    || item.content
    || item.evidence
  );
  const meta = [
    item.status,
    item.confidence,
    item.priority,
    item.owner,
    item.type,
    item.updated_at || item.updatedAt,
  ].map(formatArtifactDisplayValue).filter(Boolean);

  if (!title && !body && !meta.length) {
    return `<li>${escapeHTML(formatArtifactDisplayValue(item))}</li>`;
  }

  return `
    <li>
      ${title ? `<strong>${escapeHTML(title)}</strong>` : ""}
      ${body ? `<span>${escapeHTML(body)}</span>` : ""}
      ${meta.length ? `<small>${meta.map((itemMeta) => escapeHTML(itemMeta)).join(" · ")}</small>` : ""}
    </li>
  `;
}

function renderArtifactList(title, items) {
  const normalizedItems = asArray(items);
  if (!normalizedItems.length) {
    return "";
  }

  return `
    <section class="artifact-list-block">
      <h4>${escapeHTML(title)}</h4>
      <ul class="artifact-list">
        ${normalizedItems.map(renderArtifactListItem).filter(Boolean).join("")}
      </ul>
    </section>
  `;
}

function resolveArtifactOptionValue(artifact, option = {}) {
  if ("value" in option) {
    return option.value;
  }

  return getArtifactValue(artifact, option.keys || []);
}

function renderArtifactDebug(artifact) {
  const params = new URLSearchParams(window.location.search);
  const shouldShowDebug = window.DISCOVERY_SHOW_ARTIFACT_DEBUG === true || params.get("debugArtifacts") === "true";
  if (!shouldShowDebug) {
    return "";
  }

  return `
    <details class="artifact-debug">
      <summary>Detalhes técnicos</summary>
      <pre>${escapeHTML(JSON.stringify(artifact, null, 2))}</pre>
    </details>
  `;
}

function renderArtifactGroup(title, artifact, options = {}) {
  if (!hasRenderableArtifact(artifact)) {
    return "";
  }

  const fields = (options.fields || [])
    .map((field) => renderArtifactField(field.label, resolveArtifactOptionValue(artifact, field)))
    .filter(Boolean)
    .join("");
  const lists = (options.lists || [])
    .map((list) => renderArtifactList(list.title, resolveArtifactOptionValue(artifact, list)))
    .filter(Boolean)
    .join("");
  const defaultSummary = typeof artifact === "object" && !Array.isArray(artifact)
    ? getArtifactValue(artifact, ["summary", "description", "executive_summary"])
    : artifact;
  const summary = formatArtifactDisplayValue(options.summary || defaultSummary);
  const chips = asArray(options.chips || getArtifactValue(artifact, ["status", "state", "phase"]))
    .map(formatArtifactDisplayValue)
    .filter(Boolean);

  return `
    <article class="artifact-group">
      <header class="artifact-group-header">
        <div>
          ${options.eyebrow ? `<span>${escapeHTML(options.eyebrow)}</span>` : ""}
          <h3>${escapeHTML(title)}</h3>
        </div>
        ${chips.length ? `<div class="artifact-chip-row">${chips.map((chip) => `<mark>${escapeHTML(chip)}</mark>`).join("")}</div>` : ""}
      </header>
      ${summary ? `<p class="artifact-summary">${escapeHTML(summary)}</p>` : ""}
      ${fields ? `<dl class="artifact-field-grid">${fields}</dl>` : ""}
      ${lists}
      ${renderArtifactDebug(artifact)}
    </article>
  `;
}

function renderDiscoveryCharterArtifact(artifact) {
  return renderArtifactGroup("Discovery Charter", artifact, {
    eyebrow: "Charter",
    fields: [
      { label: "Título", keys: ["title", "name", "discovery_title"] },
      { label: "Problema", keys: ["problem", "problem_statement"] },
      { label: "Objetivo", keys: ["objective", "goal"] },
      { label: "Prontidão", keys: ["readiness_status", "dor_status", "status"] },
      { label: "Score", keys: ["readiness_score", "completeness_score"] },
    ],
    lists: [
      { title: "Certezas", keys: ["certainties", "certezas"] },
      { title: "Suposições", keys: ["assumptions", "suposicoes"] },
      { title: "Dúvidas abertas", keys: ["open_questions", "duvidas", "questions"] },
      { title: "Gaps críticos", keys: ["critical_gaps", "missing_required_fields", "blockers"] },
    ],
  });
}

function renderResearchPlanArtifact(artifact) {
  return renderArtifactGroup("Research Plan", artifact, {
    eyebrow: "Plano",
    fields: [
      { label: "Metodologia", keys: ["recommended_methodology", "methodology", "methodology_summary"] },
      { label: "Amostra", keys: ["sample", "sample_size", "participant_sample"] },
      { label: "Prazo", keys: ["timeline", "duration", "estimated_duration"] },
      { label: "Status", keys: ["plan_status", "status"] },
    ],
    lists: [
      { title: "Métodos recomendados", value: Array.isArray(artifact) ? artifact : getArtifactValue(artifact, ["recommended_methods", "methods", "research_methods"]) },
      { title: "Estratégia de participantes", keys: ["participant_strategy", "participants", "recruitment_strategy"] },
      { title: "Protocolos", keys: ["protocols", "research_protocols", "scripts"] },
      { title: "Riscos e restrições", keys: ["risks", "constraints"] },
    ],
  });
}

function renderEvidenceInventoryArtifact(artifact) {
  return renderArtifactGroup("Evidence Upload", artifact, {
    eyebrow: "Evidências",
    fields: [
      { label: "Total", keys: ["total", "count", "evidence_count"] },
      { label: "Status", keys: ["inventory_status", "status"] },
      { label: "Cobertura", keys: ["coverage", "coverage_status"] },
    ],
    lists: [
      { title: "Itens de evidência", value: Array.isArray(artifact) ? artifact : getArtifactValue(artifact, ["items", "evidence", "evidence_items", "sources"]) },
      { title: "Lacunas", keys: ["gaps", "missing_evidence", "missing_items"] },
    ],
  });
}

function renderInsightsArtifact(artifact) {
  return renderArtifactGroup("Insights", artifact, {
    eyebrow: "Síntese",
    fields: [
      { label: "Status", keys: ["synthesis_status", "insight_status", "status"] },
      { label: "Confiança", keys: ["confidence", "confidence_level"] },
    ],
    lists: [
      { title: "Principais insights", value: Array.isArray(artifact) ? artifact : getArtifactValue(artifact, ["insights", "key_insights", "updated_insights"]) },
      { title: "Padrões", keys: ["patterns", "themes"] },
      { title: "Contradições", keys: ["contradictions", "tensions"] },
      { title: "Evidências conectadas", keys: ["evidence", "evidence_refs", "supporting_evidence"] },
    ],
  });
}

function renderOpportunityArtifact(artifact) {
  return renderArtifactGroup("Opportunities", artifact, {
    eyebrow: "Oportunidades",
    fields: [
      { label: "Status", keys: ["opportunity_status", "status"] },
      { label: "Critério", keys: ["prioritization_criteria", "criteria"] },
    ],
    lists: [
      { title: "Oportunidades", value: Array.isArray(artifact) ? artifact : getArtifactValue(artifact, ["opportunities", "mapped_opportunities"]) },
      { title: "Hipóteses", keys: ["hypotheses", "solution_hypotheses"] },
      { title: "Priorização", keys: ["prioritization", "prioritized_opportunities"] },
      { title: "Riscos", keys: ["risks", "watchouts"] },
    ],
  });
}

function renderRecommendationArtifact(artifact) {
  return renderArtifactGroup("Recommendation", artifact, {
    eyebrow: "Recomendação",
    fields: [
      { label: "Decisão", keys: ["decision", "recommendation", "strategic_recommendation"] },
      { label: "Status", keys: ["recommendation_status", "status"] },
      { label: "Impacto esperado", keys: ["expected_impact", "impact"] },
    ],
    lists: [
      { title: "Racional", value: Array.isArray(artifact) ? artifact : getArtifactValue(artifact, ["rationale", "reasoning", "evidence_based_rationale"]) },
      { title: "Próximos passos", keys: ["next_steps", "actions", "recommended_actions"] },
      { title: "Critérios de sucesso", keys: ["success_metrics", "metrics", "kpis"] },
    ],
  });
}

function renderHandoffArtifact(artifact) {
  return renderArtifactGroup("Handoff", artifact, {
    eyebrow: "Entrega",
    fields: [
      { label: "Status", keys: ["handoff_status", "status"] },
      { label: "Responsável", keys: ["owner", "responsible", "handoff_owner"] },
      { label: "Destino", keys: ["target_team", "team", "destination"] },
    ],
    lists: [
      { title: "Pacote de entrega", value: Array.isArray(artifact) ? artifact : getArtifactValue(artifact, ["package", "handoff_package", "artifacts"]) },
      { title: "Checklist", keys: ["checklist", "acceptance_criteria"] },
      { title: "Pendências", keys: ["open_items", "pending_items", "dependencies"] },
    ],
  });
}

function extractDiscoveryRunIdentifiers(payload = {}, fallbackDiscoveryId = "") {
  const runId = payload.run_id
    || payload.runId
    || payload.id
    || payload.data?.run_id
    || payload.data?.runId
    || payload.run?.id
    || "";
  const discoveryId = payload.discovery_id
    || payload.discoveryId
    || payload.data?.discovery_id
    || payload.data?.discoveryId
    || payload.run?.discovery_id
    || fallbackDiscoveryId
    || "";

  return {
    runId: String(runId || "").trim(),
    discoveryId: String(discoveryId || "").trim(),
  };
}

function getDiscoveryRunLifecycle(payload = {}, fallback = {}) {
  const state = payload.current_state
    || payload.state
    || payload.data?.current_state
    || payload.data?.state
    || payload.run?.current_state
    || payload.run?.state
    || fallback.current_state
    || fallback.state
    || WORKFLOW_STATES.DISCOVERY_CREATED;
  const status = payload.status
    || payload.data?.status
    || payload.run?.status
    || fallback.status
    || RUN_STATUSES.RUNNING;

  return {
    current_state: normalizeWorkflowValue(state),
    status: normalizeWorkflowValue(status),
  };
}

function getDiscoveryRunStatusLabel(discovery = {}) {
  const state = discovery.current_state || WORKFLOW_STATES.DISCOVERY_CREATED;
  const status = discovery.status || RUN_STATUSES.RUNNING;
  const stateLabel = getWorkflowStepLabel(state);

  if (isWaitingForHuman(state, status)) {
    return `${stateLabel} · aguardando ação`;
  }

  if (isTerminalState(state, status)) {
    return state === WORKFLOW_STATES.FAILED || status === RUN_STATUSES.FAILED ? "Falha no workflow" : stateLabel;
  }

  return `${stateLabel} · em andamento`;
}

function updateDiscoveryRunStatusOnPage(discovery = {}) {
  if (!discoveryReadinessStatus || selectedDiscoveryId !== discovery.id) {
    return;
  }

  renderDiscoveryWorkflowCockpit(discovery);
  renderDiscoveryResearchApprovalPanel(discovery);
  renderDiscoveryEvidenceUploadPanel(discovery);
  renderDiscoveryInsightReviewPanel(discovery);
  renderDiscoveryOpportunityReviewPanel(discovery);
  renderDiscoveryRecommendationHandoffSection(discovery);
  const state = discovery.current_state || WORKFLOW_STATES.DISCOVERY_CREATED;
  const status = discovery.status || RUN_STATUSES.RUNNING;
  discoveryReadinessStatus.classList.toggle("ready", isTerminalState(state, status) && state === WORKFLOW_STATES.COMPLETED);
  discoveryReadinessStatus.classList.toggle("not-ready", state === WORKFLOW_STATES.FAILED || status === RUN_STATUSES.FAILED);
  discoveryReadinessStatus.innerHTML = `<span></span>${escapeHTML(getDiscoveryRunStatusLabel(discovery))}`;
}

const DISCOVERY_POLL_STOP_STATES = new Set([
  WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING,
  WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING,
  WORKFLOW_STATES.INSIGHT_REVIEW_PENDING,
  WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING,
]);

function shouldStopDiscoveryRunPolling(state, status) {
  const normalizedState = normalizeWorkflowValue(state);
  const normalizedStatus = normalizeWorkflowValue(status);

  return normalizedStatus === RUN_STATUSES.WAITING_FOR_HUMAN
    || normalizedStatus === RUN_STATUSES.COMPLETED
    || normalizedStatus === RUN_STATUSES.FAILED
    || normalizedStatus === RUN_STATUSES.CANCELLED
    || DISCOVERY_POLL_STOP_STATES.has(normalizedState)
    || isTerminalState(normalizedState, normalizedStatus);
}

function stopDiscoveryRunStatusPolling(runId = "") {
  if (runId && activeDiscoveryRunPoll.runId !== runId) {
    return;
  }

  if (activeDiscoveryRunPoll.timerId) {
    window.clearTimeout(activeDiscoveryRunPoll.timerId);
  }

  activeDiscoveryRunPoll = {
    runId: "",
    discoveryId: "",
    timerId: null,
    inFlight: false,
    starting: false,
    lastState: "",
    lastStatus: "",
    intervalMs: 0,
  };
}

async function refreshDiscoveryArtifactsForRun(runId, activeDiscovery = {}) {
  const artifactResult = await loadDiscoveryArtifacts(runId);
  const updatedDiscovery = persistDiscoveryRunPatch(runId, activeDiscovery, {
    artifactGroups: artifactResult.groups,
    artifactsPayload: artifactResult.raw,
    updated_at: new Date().toISOString(),
  });

  if (getCurrentRoute() === "discovery" && selectedDiscoveryId === updatedDiscovery.id && discoveryArtifacts) {
    discoveryArtifacts.innerHTML = renderDiscoveryArtifactGroups(artifactResult.groups) || renderArtifactsEmptyState(
      "Artefatos ainda não disponíveis",
      "A run existe, mas o backend ainda não retornou nenhum pacote de artefatos para renderizar."
    );
    renderDiscoveryResearchApprovalPanel(updatedDiscovery);
    renderDiscoveryEvidenceUploadPanel(updatedDiscovery);
    renderDiscoveryInsightReviewPanel(updatedDiscovery);
    renderDiscoveryOpportunityReviewPanel(updatedDiscovery);
    renderDiscoveryRecommendationHandoffSection(updatedDiscovery);
  }

  return updatedDiscovery;
}

async function pollDiscoveryRunStatus(runId) {
  if (activeDiscoveryRunPoll.runId !== runId || activeDiscoveryRunPoll.inFlight) {
    return;
  }

  activeDiscoveryRunPoll.inFlight = true;
  let shouldContinue = true;

  try {
    const payload = await getDiscoveryRunStatus(runId);
    if (activeDiscoveryRunPoll.runId !== runId) {
      return;
    }

    const lifecycle = getDiscoveryRunLifecycle(payload);
    const lifecycleChanged = lifecycle.current_state !== activeDiscoveryRunPoll.lastState
      || lifecycle.status !== activeDiscoveryRunPoll.lastStatus;
    let updatedDiscovery = persistDiscoveryRunPatch(runId, getActiveDiscoveryForCurrentPage(), {
      ...lifecycle,
      runStatusPayload: payload,
      lastRunStatusError: "",
      updated_at: payload.updated_at || payload.data?.updated_at || new Date().toISOString(),
    });

    if (updatedDiscovery) {
      activeDiscoveryRunPoll.lastState = updatedDiscovery.current_state || lifecycle.current_state;
      activeDiscoveryRunPoll.lastStatus = updatedDiscovery.status || lifecycle.status;
      updateDiscoveryRunStatusOnPage(updatedDiscovery);

      if (lifecycleChanged) {
        try {
          updatedDiscovery = await refreshDiscoveryArtifactsForRun(runId, updatedDiscovery);
        } catch (error) {
          updatedDiscovery = persistDiscoveryRunPatch(runId, updatedDiscovery, {
            lastArtifactRefreshError: getFriendlyUiErrorMessage(error, "Não foi possível atualizar os artefatos."),
            updated_at: new Date().toISOString(),
          });
        }
      }

      shouldContinue = !shouldStopDiscoveryRunPolling(updatedDiscovery.current_state, updatedDiscovery.status);
    }
  } catch (error) {
    if (activeDiscoveryRunPoll.runId !== runId) {
      return;
    }

    const updatedDiscovery = persistDiscoveryRunPatch(runId, getActiveDiscoveryForCurrentPage(), {
      lastRunStatusError: getFriendlyUiErrorMessage(error, "Status temporariamente indisponível."),
      updated_at: new Date().toISOString(),
    });
    if (updatedDiscovery && selectedDiscoveryId === updatedDiscovery.id && discoveryReadinessStatus) {
      discoveryReadinessStatus.innerHTML = `<span></span>${escapeHTML("Status temporariamente indisponível")}`;
    }
  } finally {
    if (activeDiscoveryRunPoll.runId !== runId) {
      return;
    }

    activeDiscoveryRunPoll.inFlight = false;
    if (shouldContinue) {
      activeDiscoveryRunPoll.timerId = window.setTimeout(
        () => pollDiscoveryRunStatus(runId),
        activeDiscoveryRunPoll.intervalMs || discoveryRunPollIntervalMs || DEFAULT_DISCOVERY_POLL_INTERVAL_MS,
      );
    } else {
      stopDiscoveryRunStatusPolling(runId);
    }
  }
}

async function startDiscoveryRunStatusPolling(discovery = {}) {
  const runId = getDiscoveryRunId(discovery);
  if (!runId || shouldStopDiscoveryRunPolling(discovery.current_state, discovery.status)) {
    stopDiscoveryRunStatusPolling(runId);
    return;
  }

  if (activeDiscoveryRunPoll.runId === runId && (activeDiscoveryRunPoll.timerId || activeDiscoveryRunPoll.inFlight || activeDiscoveryRunPoll.starting)) {
    return;
  }

  stopDiscoveryRunStatusPolling();
  activeDiscoveryRunPoll = {
    runId,
    discoveryId: discovery.id || selectedDiscoveryId,
    timerId: null,
    inFlight: false,
    starting: true,
    lastState: normalizeWorkflowValue(discovery.current_state || discovery.state || ""),
    lastStatus: normalizeWorkflowValue(discovery.status || discovery.run_status || ""),
    intervalMs: DEFAULT_DISCOVERY_POLL_INTERVAL_MS,
  };

  await loadDiscoveryRunPollingConfig();
  if (activeDiscoveryRunPoll.runId !== runId) {
    return;
  }

  activeDiscoveryRunPoll.starting = false;
  activeDiscoveryRunPoll.intervalMs = discoveryRunPollIntervalMs || DEFAULT_DISCOVERY_POLL_INTERVAL_MS;
  pollDiscoveryRunStatus(runId);
}

function getCrewAiStatusValue(payload = {}) {
  const candidates = [
    payload.state,
    payload.result?.state,
    payload.data?.state,
    payload.status,
    payload.result?.status,
    payload.data?.status,
  ];
  const status = candidates.find((item) => typeof item === "string" && item.trim());
  return status ? normalizeText(status) : "";
}

function parseMaybeJson(value) {
  if (typeof value !== "string") {
    return value;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  try {
    return JSON.parse(trimmed);
  } catch {
    return value;
  }
}

function findCrewAiDiscoveryResult(value, depth = 0) {
  const parsed = parseMaybeJson(value);
  if (!parsed || typeof parsed !== "object" || depth > 4) {
    return null;
  }

  if ("discovery_ready" in parsed || "reasoning" in parsed || "insights" in parsed) {
    return parsed;
  }

  const nestedCandidates = [
    parsed.discovery,
    parsed.discovery_result,
    parsed.result,
    parsed.data?.result,
    parsed.output,
    parsed.response,
    parsed.raw,
  ];

  for (const candidate of nestedCandidates) {
    const result = findCrewAiDiscoveryResult(candidate, depth + 1);
    if (result) {
      return result;
    }
  }

  return null;
}

function getCrewAiResult(payload = {}) {
  const parsedPayload = parseMaybeJson(payload) || {};
  const candidates = [
    parsedPayload.result,
    parsedPayload.data?.result,
    parsedPayload.output,
    parsedPayload.response,
  ];
  const result = candidates.find((item) => item !== undefined && item !== null && !(typeof item === "string" && !item.trim()));

  if (result !== undefined) {
    return parseMaybeJson(result);
  }

  return findCrewAiDiscoveryResult(parsedPayload);
}

function normalizeDiscoveryReady(value = "") {
  const normalized = normalizeText(String(value || "").trim());
  if (["yes", "sim", "true", "ready", "pronto"].includes(normalized)) {
    return "yes";
  }
  if (["no", "nao", "false", "not-ready", "not_ready", "nao-pronto", "nao_pronto", "nao pronto"].includes(normalized)) {
    return "no";
  }
  return "";
}

function normalizeCrewAiInsights(insights = []) {
  const parsedInsights = parseMaybeJson(insights);
  const items = Array.isArray(parsedInsights) ? parsedInsights : parsedInsights ? [parsedInsights] : [];

  return items.map((item, index) => {
    const parsedItem = parseMaybeJson(item);
    if (typeof parsedItem === "string") {
      return {
        insight_number: index + 1,
        insight: parsedItem,
      };
    }

    const number = Number(parsedItem?.insight_number ?? parsedItem?.number ?? parsedItem?.id);
    return {
      insight_number: Number.isFinite(number) && number > 0 ? number : index + 1,
      insight: String(parsedItem?.insight ?? parsedItem?.description ?? parsedItem?.text ?? parsedItem?.title ?? "").trim(),
    };
  }).filter((item) => item.insight).sort((a, b) => a.insight_number - b.insight_number);
}

function normalizeCrewAiDiscoveryResult(value = {}) {
  const candidate = findCrewAiDiscoveryResult(value) || {};
  const discoveryReady = normalizeDiscoveryReady(candidate.discovery_ready);
  return {
    discovery_ready: discoveryReady,
    discoveryReady,
    reasoning: String(candidate.reasoning || "").trim(),
    insights: normalizeCrewAiInsights(candidate.insights || []),
    raw: candidate,
  };
}

function formatCrewAiPayloadForLog(payload = {}) {
  if (!payload || !Object.keys(payload).length) {
    return "Sem corpo de resposta.";
  }

  const source = payload.crewAi || payload.detail || payload.message || payload.error || payload.raw || payload;
  const text = typeof source === "string" ? source : JSON.stringify(source);
  return text.length > 700 ? `${text.slice(0, 700)}...` : text;
}

function createCrewAiApiError(action, response, payload = {}) {
  const details = formatCrewAiPayloadForLog(payload);
  const error = new Error(`${action} (${response.status}). ${details}`);
  error.payload = payload;
  error.status = response.status;
  return error;
}

async function kickoffCrewAiDiscovery(discoveryInput = {}) {
  const inputs = buildCrewAiDiscoveryInput(discoveryInput);
  const response = await fetch(getApiPath("crewai/kickoff"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs }),
  });
  const payload = await readApiJson(response);

  if (!response.ok) {
    throw createCrewAiApiError("Falha no kickoff da CrewAI", response, payload);
  }

  if (!payload.kickoff_id) {
    throw new Error("A CrewAI não retornou kickoff_id.");
  }

  return payload;
}

async function fetchCrewAiStatus(kickoffId) {
  const response = await fetch(getApiPath(`crewai/status/${encodeURIComponent(kickoffId)}`));
  const payload = await readApiJson(response);

  if (!response.ok) {
    throw createCrewAiApiError("Falha ao consultar status da CrewAI", response, payload);
  }

  return payload;
}

async function pollCrewAiStatus(kickoffId) {
  const startedAt = Date.now();
  let lastPayload = null;
  let pollCount = 0;

  while (Date.now() - startedAt < crewAiPollTimeoutMs) {
    pollCount += 1;
    updateCrewKickoffPanel({
      summary: `Consultando status da execução. Tentativa ${pollCount}.`,
      phase: "Polling",
      kickoffId,
    });
    addCrewKickoffLog(`Consultando /status/${kickoffId} — tentativa ${pollCount}.`);
    lastPayload = await fetchCrewAiStatus(kickoffId);
    const status = getCrewAiStatusValue(lastPayload);
    updateCrewKickoffPanel({
      summary: status ? `Último status recebido: ${status}.` : "Status recebido sem estado final claro.",
      phase: status || "Processando",
      kickoffId,
    });
    addCrewKickoffLog(status ? `Status recebido: ${status}.` : "Resposta recebida, aguardando estado final claro.");

    if (CREWAI_SUCCESS_STATUSES.has(status)) {
      stopCrewKickoffElapsedTimer();
      updateCrewKickoffPanel({
        summary: "CrewAI concluiu o processamento. Abrindo o discovery.",
        phase: "Concluído",
        kickoffId,
        state: "success",
      });
      addCrewKickoffLog("Execução concluída com sucesso.", "success");
      return lastPayload;
    }

    if (CREWAI_ERROR_STATUSES.has(status)) {
      stopCrewKickoffElapsedTimer();
      updateCrewKickoffPanel({
        summary: `A CrewAI retornou erro: ${status}.`,
        phase: "Erro",
        kickoffId,
        state: "error",
      });
      addCrewKickoffLog(`Execução retornou erro: ${status}.`, "error");
      throw new Error(`A CrewAI retornou status "${status}".`);
    }

    setNewDiscoveryStatus(status ? `CrewAI status: ${status}. Aguardando conclusão...` : "CrewAI processando. Aguardando status final...");
    addCrewKickoffLog(`Próxima consulta em ${Math.round(crewAiPollIntervalMs / 1000)} segundos.`);
    await sleep(crewAiPollIntervalMs);
  }

  const timeoutError = new Error("Tempo limite ao aguardar a CrewAI. Tente criar o discovery novamente.");
  timeoutError.lastPayload = lastPayload;
  stopCrewKickoffElapsedTimer();
  throw timeoutError;
}

function openNewDiscoveryModal() {
  resetNewDiscoveryFlow();
  document.body.classList.add("flow-open");
  newDiscoveryModal.hidden = false;
  window.setTimeout(() => newDiscoverySetupTitle.focus(), 0);
}

function closeNewDiscoveryModal(options = {}) {
  if (isCreatingNewDiscovery && !options.force) {
    return;
  }

  newDiscoveryModal.hidden = true;
  document.body.classList.remove("flow-open");
  resetNewDiscoveryFlow();
}

const PRODUCT_AUDIENCE_ROUTES = [
  "product-audience",
  "persona-new",
  "persona-detail",
  "persona-edit",
  "stakeholder-new",
  "stakeholder-detail",
  "stakeholder-edit",
];

function getProductAudienceRouteInfo(route = window.location.hash.replace("#", "")) {
  const parts = String(route || "").split("/");
  if (parts[0] !== "product" || !parts[1]) {
    return null;
  }

  if (parts[2] === "audience") {
    return {
      route: "product-audience",
      productId: parts[1],
      kind: "",
      itemId: "",
      mode: "list",
    };
  }

  const kindBySegment = {
    personas: "persona",
    stakeholders: "stakeholder",
  };
  const kind = kindBySegment[parts[2]];
  if (!kind) {
    return null;
  }

  if (parts[3] === "new") {
    return {
      route: `${kind}-new`,
      productId: parts[1],
      kind,
      itemId: "",
      mode: "new",
    };
  }

  const itemId = parts[3] || "";
  if (!itemId) {
    return {
      route: "product-audience",
      productId: parts[1],
      kind: "",
      itemId: "",
      mode: "list",
    };
  }

  return {
    route: parts[4] === "edit" ? `${kind}-edit` : `${kind}-detail`,
    productId: parts[1],
    kind,
    itemId,
    mode: parts[4] === "edit" ? "edit" : "detail",
  };
}

function isProductAudienceRoute(route = "") {
  return PRODUCT_AUDIENCE_ROUTES.includes(route);
}

function getProductAudienceHash(route = "product-audience", productId = selectedProductId, itemId = "") {
  const safeProductId = productId || products[0].id;
  if (route === "persona-new") {
    return `#product/${safeProductId}/personas/new`;
  }
  if (route === "persona-detail") {
    return `#product/${safeProductId}/personas/${itemId}`;
  }
  if (route === "persona-edit") {
    return `#product/${safeProductId}/personas/${itemId}/edit`;
  }
  if (route === "stakeholder-new") {
    return `#product/${safeProductId}/stakeholders/new`;
  }
  if (route === "stakeholder-detail") {
    return `#product/${safeProductId}/stakeholders/${itemId}`;
  }
  if (route === "stakeholder-edit") {
    return `#product/${safeProductId}/stakeholders/${itemId}/edit`;
  }

  return `#product/${safeProductId}/audience`;
}

function getProductAudienceRouteView(route = "") {
  return isProductAudienceRoute(route) ? "product-audience" : route;
}

function getCurrentProductId() {
  const route = window.location.hash.replace("#", "");
  const audienceRoute = getProductAudienceRouteInfo(route);
  if (audienceRoute) {
    return audienceRoute.productId || selectedProductId || products[0].id;
  }

  if (route.startsWith("synthesis/")) {
    const parts = route.split("/");
    return parts[2] || selectedProductId || products[0].id;
  }

  if (route.startsWith("interview-session/")) {
    const parts = route.split("/");
    return parts[4] || selectedProductId || products[0].id;
  }

  if (route.startsWith("interview/")) {
    const parts = route.split("/");
    return parts[3] || selectedProductId || products[0].id;
  }

  if (route.startsWith("discovery/")) {
    const parts = route.split("/");
    return parts[2] || selectedProductId || products[0].id;
  }

  if (!route.startsWith("product/")) {
    return selectedProductId || products[0].id;
  }

  return route.split("/")[1] || products[0].id;
}

function getCurrentDiscoveryId() {
  const route = window.location.hash.replace("#", "");
  if (route.startsWith("synthesis/")) {
    const parts = route.split("/");
    return parts[1] || selectedDiscoveryId;
  }

  if (route.startsWith("interview-session/")) {
    const parts = route.split("/");
    return parts[3] || selectedDiscoveryId;
  }

  if (route.startsWith("interview/")) {
    const parts = route.split("/");
    return parts[2] || selectedDiscoveryId;
  }

  if (!route.startsWith("discovery/")) {
    return selectedDiscoveryId;
  }

  return route.split("/")[1] || selectedDiscoveryId;
}

function getCurrentInterviewMethodId() {
  const route = window.location.hash.replace("#", "");
  if (route.startsWith("interview-session/")) {
    const parts = route.split("/");
    return parts[2] || selectedInterviewMethodId;
  }

  if (!route.startsWith("interview/")) {
    return selectedInterviewMethodId;
  }

  return route.split("/")[1] || selectedInterviewMethodId;
}

function getCurrentInterviewParticipantId() {
  const route = window.location.hash.replace("#", "");
  if (!route.startsWith("interview-session/")) {
    return selectedInterviewParticipantId;
  }

  return route.split("/")[1] || selectedInterviewParticipantId;
}

function getCurrentRoute() {
  const route = window.location.hash.replace("#", "");
  const audienceRoute = getProductAudienceRouteInfo(route);
  if (audienceRoute) {
    return audienceRoute.route;
  }

  if (route.startsWith("synthesis/")) {
    return "synthesis";
  }

  if (route.startsWith("interview-session/")) {
    return "interview-session";
  }

  if (route.startsWith("interview/")) {
    return "interview";
  }

  if (route.startsWith("discovery/")) {
    return "discovery";
  }

  if (route.startsWith("product/")) {
    return "product";
  }

  return route === "products" ? "products" : "home";
}

function setRoute(route, productId = selectedProductId, discoveryId = selectedDiscoveryId, interviewMethodId = selectedInterviewMethodId, participantId = selectedInterviewParticipantId) {
  const currentAudienceRoute = getProductAudienceRouteInfo();
  const nextRoute = isProductAudienceRoute(route) ? route : route === "interview-session" ? "interview-session" : route === "interview" ? "interview" : route === "synthesis" ? "synthesis" : route === "discovery" ? "discovery" : route === "product" ? "product" : route === "products" ? "products" : "home";
  const activeProductId = currentAudienceRoute?.productId || productId || selectedProductId || products[0].id;
  const activeDiscoveryId = discoveryId || selectedDiscoveryId || discoveryTemplate.id;
  const activeInterviewMethodId = interviewMethodId || selectedInterviewMethodId || "entrevista-em-profundidade";
  const activeParticipantId = participantId || selectedInterviewParticipantId || "ana-martins";
  const activeView = getProductAudienceRouteView(nextRoute);

  views.forEach((view) => {
    view.hidden = view.dataset.view !== activeView;
  });

  routeLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.routeLink === activeView || (isProductAudienceRoute(nextRoute) && link.dataset.routeLink === "product"));
  });

  renderFavoriteProductsMenu(activeProductId, nextRoute, activeDiscoveryId);
  renderFavoriteDiscoveriesMenu(activeDiscoveryId);

  appShell.classList.toggle("product-mode", nextRoute === "product" || isProductAudienceRoute(nextRoute));
  appShell.classList.toggle("discovery-mode", nextRoute === "discovery" || nextRoute === "synthesis" || nextRoute === "interview" || nextRoute === "interview-session");
  appShell.classList.toggle("discovery-detail-mode", nextRoute === "discovery");
  appShell.classList.toggle("synthesis-mode", nextRoute === "synthesis");
  appShell.classList.toggle("interview-mode", nextRoute === "interview");
  appShell.classList.toggle("interview-session-mode", nextRoute === "interview-session");
  productBack.hidden = nextRoute !== "product" && !isProductAudienceRoute(nextRoute) && nextRoute !== "discovery" && nextRoute !== "synthesis" && nextRoute !== "interview" && nextRoute !== "interview-session";
  brandName.textContent = nextRoute === "synthesis" ? "Discovery IA - Síntese" : "Discovery IA";
  if (nextRoute !== "discovery") {
    stopDiscoveryRunStatusPolling();
  }

  if (nextRoute === "product" || isProductAudienceRoute(nextRoute) || nextRoute === "discovery" || nextRoute === "synthesis" || nextRoute === "interview" || nextRoute === "interview-session") {
    selectedProductId = activeProductId;
  }

  if (nextRoute === "product") {
    renderProductPage(activeProductId);
  }

  if (nextRoute === "home") {
    renderHomeProductBar();
  }

  if (isProductAudienceRoute(nextRoute)) {
    renderProductAudienceRoute(activeProductId, currentAudienceRoute || {
      route: nextRoute,
      productId: activeProductId,
      kind: nextRoute.startsWith("persona") ? "persona" : nextRoute.startsWith("stakeholder") ? "stakeholder" : "",
      itemId: "",
      mode: nextRoute.endsWith("new") ? "new" : "list",
    });
  }

  if (nextRoute === "discovery") {
    selectedDiscoveryId = activeDiscoveryId;
    renderDiscoveryPage(activeProductId, activeDiscoveryId);
  }

  if (nextRoute === "synthesis") {
    selectedDiscoveryId = activeDiscoveryId;
    renderSynthesisPage(activeProductId, activeDiscoveryId);
  }

  if (nextRoute === "interview") {
    selectedDiscoveryId = activeDiscoveryId;
    selectedInterviewMethodId = activeInterviewMethodId;
    renderInterviewDetailPage(activeProductId, activeDiscoveryId, activeInterviewMethodId);
  }

  if (nextRoute === "interview-session") {
    selectedDiscoveryId = activeDiscoveryId;
    selectedInterviewMethodId = activeInterviewMethodId;
    selectedInterviewParticipantId = activeParticipantId;
    renderParticipantInterviewPage(activeProductId, activeDiscoveryId, activeInterviewMethodId, activeParticipantId);
  }

  const nextHash = isProductAudienceRoute(nextRoute)
    ? getProductAudienceHash(nextRoute, activeProductId, currentAudienceRoute?.itemId || "")
    : nextRoute === "interview-session"
    ? `#interview-session/${activeParticipantId}/${activeInterviewMethodId}/${activeDiscoveryId}/${activeProductId}`
    : nextRoute === "interview"
    ? `#interview/${activeInterviewMethodId}/${activeDiscoveryId}/${activeProductId}`
    : nextRoute === "synthesis"
    ? `#synthesis/${activeDiscoveryId}/${activeProductId}`
    : nextRoute === "discovery"
    ? `#discovery/${activeDiscoveryId}/${activeProductId}`
    : nextRoute === "product"
      ? `#product/${activeProductId}`
      : `#${nextRoute}`;
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getVisibleProducts() {
  const query = normalizeText(productSearch.value.trim());

  if (!query) {
    return [...products];
  }

  return products.filter((product) => {
    return normalizeText(`${product.name} ${product.description} ${product.tower || ""} ${product.tribe || ""}`).includes(query);
  });
}

function getProductTaxonomyLabel(product) {
  return [product.tower, product.tribe].filter(Boolean).join(" / ");
}

function getFavoriteProductsForCurrentUser() {
  const favoriteIds = getCurrentUserFavoriteProductIds();
  return favoriteIds
    .map((productId) => products.find((product) => product.id === productId))
    .filter(Boolean);
}

function getFavoriteProducts() {
  return getFavoriteProductsForCurrentUser();
}

function isProductFavorite(productId = "") {
  return isProductFavorited(productId);
}

function getProductGroupLabel(product = {}) {
  const tower = product.torre || product.tower || "";
  const area = product.area || product.tribe || product.category || "";
  if (tower && area && normalizeText(tower) !== normalizeText(area)) {
    return `${tower} / ${area}`;
  }
  return tower || area || "Outros";
}

function getProductsGroupedByArea(productItems = products) {
  return productItems.reduce((groups, product) => {
    const groupLabel = getProductGroupLabel(product);
    groups[groupLabel] = [...(groups[groupLabel] || []), product];
    return groups;
  }, {});
}

function getFavoriteDiscoveriesByProduct() {
  return getFavoriteDiscoveries()
    .filter((discovery) => discovery && !discovery.missing)
    .reduce((groups, discovery) => {
      const productId = discovery.productId || getProductForDiscoverySummary(discovery).id;
      groups[productId] = [...(groups[productId] || []), discovery];
      return groups;
    }, {});
}

function getRecentDiscoveries(limit = 6) {
  const createdRecent = createdDiscoveries
    .filter((discovery) => discovery && !discovery.isAudienceSelectionOverride)
    .map((discovery) => {
      const product = getDiscoveryProduct(discovery);
      return {
        ...discovery,
        id: discovery.id,
        title: discovery.title || discovery.name || "Discovery",
        productId: product.id,
        productName: product.name,
      };
    });
  const repositoryRecent = discoveries.map((discovery) => {
    const product = getProductForDiscoverySummary(discovery);
    const discoveryId = discovery.id || slugify(discovery.title || "");
    return {
      ...discovery,
      id: discoveryId,
      productId: product.id,
      productName: product.name,
    };
  });

  return [...createdRecent, ...repositoryRecent]
    .filter((discovery) => discovery.id)
    .slice(0, limit);
}

function navigateToProduct(productId = "") {
  const product = getProductById(productId);
  if (!product) {
    showAppToast("Produto não encontrado.", "error");
    return false;
  }

  setRoute("product", product.id);
  return true;
}

function loadSidebarPinned() {
  try {
    return window.localStorage.getItem(SIDEBAR_PINNED_STORAGE_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function saveSidebarPinned(isPinned) {
  try {
    window.localStorage.setItem(SIDEBAR_PINNED_STORAGE_KEY, String(Boolean(isPinned)));
  } catch (error) {
    // Local persistence is best-effort in the static prototype.
  }
}

function loadSidebarSelectedSection() {
  try {
    const storedSection = window.localStorage.getItem(SIDEBAR_SELECTED_SECTION_STORAGE_KEY);
    return ["home", "products", "recent", "favorites"].includes(storedSection) ? storedSection : "";
  } catch (error) {
    return "";
  }
}

function saveSidebarSelectedSection(section = selectedSidebarContext.type) {
  try {
    window.localStorage.setItem(SIDEBAR_SELECTED_SECTION_STORAGE_KEY, section);
  } catch (error) {
    // Local persistence is best-effort in the static prototype.
  }
}

function setSidebarPinned(isPinned) {
  isSidebarPinned = Boolean(isPinned);
  appShell?.classList.toggle("sidebar-pinned", isSidebarPinned);
  saveSidebarPinned(isSidebarPinned);
  setSidebarOpen(isSidebarPinned || !sidebar?.classList.contains("collapsed"), { persist: false });
  renderSidebarPanel(selectedSidebarContext, selectedDiscoveryId);
}

function setSidebarOpen(isOpen, options = {}) {
  if (!sidebar || !appShell) {
    return;
  }

  const shouldOpen = Boolean(isOpen);
  sidebar.classList.toggle("collapsed", !shouldOpen);
  sidebar.classList.toggle("is-collapsed", !shouldOpen);
  sidebar.classList.toggle("is-expanded", shouldOpen);
  appShell.classList.toggle("sidebar-collapsed", !shouldOpen);
  if (sidebarToggle) {
    sidebarToggle.setAttribute("aria-expanded", String(shouldOpen));
    sidebarToggle.setAttribute("aria-label", shouldOpen ? "Recolher menu" : "Expandir menu");
  }
  if (sidebarToggleIcon) {
    sidebarToggleIcon.textContent = shouldOpen ? "«" : "»";
  }
  if (options.saveSection !== false) {
    saveSidebarSelectedSection(selectedSidebarContext.type);
  }
}

function toggleSidebarCollapsed() {
  setSidebarOpen(sidebar?.classList.contains("collapsed"));
}

function closeSidebarPanelIfTemporary() {
  if (!isSidebarPinned) {
    setSidebarOpen(false, { saveSection: false });
  }
}

function selectSidebarContext(context = {}) {
  selectedSidebarContext = {
    type: context.type || "home",
  };
  saveSidebarSelectedSection(selectedSidebarContext.type);
}

function getRouteSidebarSection(activeRoute = getCurrentRoute()) {
  if (activeRoute === "products" || activeRoute === "product" || isProductAudienceRoute(activeRoute)) {
    return "products";
  }
  if (["discovery", "synthesis", "interview", "interview-session"].includes(activeRoute)) {
    return selectedSidebarContext.type === "favorites" ? "favorites" : "recent";
  }
  return "home";
}

function getSidebarContext(activeProductId = selectedProductId, activeRoute = getCurrentRoute()) {
  const storedSection = selectedSidebarContext.type || loadSidebarSelectedSection();
  if ((isSidebarPinned || !sidebar?.classList.contains("collapsed")) && ["home", "products", "recent", "favorites"].includes(storedSection)) {
    return { type: storedSection };
  }
  return { type: getRouteSidebarSection(activeRoute) };
}

function renderSidebar(activeProductId = selectedProductId, activeRoute = getCurrentRoute(), activeDiscoveryId = selectedDiscoveryId) {
  if (!sidebarRail || !sidebarPanel) {
    return;
  }

  const context = getSidebarContext(activeProductId, activeRoute);
  selectSidebarContext(context);
  renderSidebarRail(context);
  renderSidebarPanel(context, activeDiscoveryId);
}

function renderSidebarRail(context = selectedSidebarContext) {
  const isActive = (type) => context.type === type;

  sidebarRail.innerHTML = `
    <div class="sidebar-rail-section">
      <button class="sidebar-rail-item${isActive("home") ? " active" : ""}" type="button" data-sidebar-context="home" title="Início" aria-label="Ir para início">
        <span class="sidebar-rail-icon" aria-hidden="true">${getSidebarSvgIcon("home")}</span>
        <span class="sidebar-rail-label">Início</span>
      </button>
      <button class="sidebar-rail-item${isActive("products") ? " active" : ""}" type="button" data-sidebar-context="products" title="Produtos" aria-label="Abrir lista de produtos">
        <span class="sidebar-rail-icon" aria-hidden="true">${getSidebarSvgIcon("products")}</span>
        <span class="sidebar-rail-label">Produtos</span>
      </button>
      <button class="sidebar-rail-item${isActive("recent") ? " active" : ""}" type="button" data-sidebar-context="recent" title="Discoveries recentes" aria-label="Abrir discoveries recentes">
        <span class="sidebar-rail-icon" aria-hidden="true">${getSidebarSvgIcon("recent")}</span>
        <span class="sidebar-rail-label">Recentes</span>
      </button>
      <button class="sidebar-rail-item${isActive("favorites") ? " active" : ""}" type="button" data-sidebar-context="favorites" title="Favoritos" aria-label="Abrir favoritos">
        <span class="sidebar-rail-icon" aria-hidden="true">${getSidebarSvgIcon("favorites")}</span>
        <span class="sidebar-rail-label">Favoritos</span>
      </button>
    </div>
  `;
}

function getSidebarSvgIcon(type = "home") {
  const icons = {
    home: '<svg viewBox="0 0 24 24"><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>',
    products: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="7" height="7" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" /><rect x="3" y="15" width="7" height="5" rx="1" /><rect x="14" y="15" width="7" height="5" rx="1" /></svg>',
    recent: '<svg viewBox="0 0 24 24"><path d="M12 8v5l3 2" /><path d="M3.05 11a9 9 0 1 1 2.64 6.36" /><path d="M3 17v-6h6" /></svg>',
    favorites: '<svg viewBox="0 0 24 24"><polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2" /></svg>',
  };
  return icons[type] || icons.home;
}

function renderSidebarPanel(context = selectedSidebarContext, activeDiscoveryId = selectedDiscoveryId) {
  if (context.type === "recent") {
    renderRecentDiscoveriesPanel(activeDiscoveryId);
    return;
  }
  if (context.type === "products") {
    renderProductsSidebarPanel();
    return;
  }
  if (context.type === "favorites") {
    renderFavoritesSidebarPanel(activeDiscoveryId);
    return;
  }
  renderHomeSidebarPanel();
}

function renderSidebarPanelHeader(kicker = "", title = "", copy = "") {
  return `
    <header class="sidebar-panel-header">
      <div>
        <span class="sidebar-panel-kicker">${escapeHTML(kicker)}</span>
        <h2 class="sidebar-panel-title">${escapeHTML(title)}</h2>
        ${copy ? `<p class="sidebar-panel-copy">${escapeHTML(copy)}</p>` : ""}
      </div>
      <button class="sidebar-pin-button${isSidebarPinned ? " active" : ""}" type="button" data-sidebar-pin aria-pressed="${String(isSidebarPinned)}" aria-label="${isSidebarPinned ? "Desafixar menu" : "Fixar menu"}" title="${isSidebarPinned ? "Desafixar menu" : "Fixar menu"}">
        ${isSidebarPinned ? "Fixado" : "Fixar"}
      </button>
    </header>
  `;
}

function renderHomeSidebarPanel() {
  sidebarPanel.innerHTML = `
    ${renderSidebarPanelHeader("Navegação", "Início", "Acesse seus produtos e discoveries recentes.")}
    <div class="sidebar-submenu">
      <button class="sidebar-submenu-link active" type="button" data-sidebar-context="home">Página inicial</button>
      <button class="sidebar-submenu-link" type="button" data-sidebar-context="products">Todos os produtos</button>
      <button class="sidebar-submenu-link" type="button" data-sidebar-context="recent">Discoveries recentes</button>
    </div>
  `;
}

function renderProductsSidebarPanel() {
  const favoriteProducts = getFavoriteProducts();
  const favoriteProductIds = new Set(favoriteProducts.map((product) => product.id));
  const groupedProducts = getProductsGroupedByArea(products.filter((product) => !favoriteProductIds.has(product.id)));
  sidebarPanel.innerHTML = `
    ${renderSidebarPanelHeader("Produtos", "Produtos", "Produtos que você acompanha.")}
    <div class="sidebar-submenu">
      ${favoriteProducts.length ? `
        <div class="sidebar-submenu-section">
          <span class="sidebar-submenu-heading">Favoritos</span>
          <div class="sidebar-list">${favoriteProducts.map((product) => renderSidebarProductRow(product)).join("")}</div>
        </div>
      ` : ""}
      ${Object.entries(groupedProducts).map(([groupLabel, groupProducts]) => `
        <div class="sidebar-submenu-section">
          <span class="sidebar-submenu-heading">${escapeHTML(groupLabel)}</span>
          <div class="sidebar-list">${groupProducts.map((product) => renderSidebarProductRow(product)).join("")}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSidebarProductRow(product = {}) {
  const isFavorite = isProductFavorite(product.id);
  return `
    <div class="sidebar-product-row" role="button" tabindex="0" data-sidebar-product="${escapeHTML(product.id)}" title="${escapeHTML(product.name)}">
      <span class="sidebar-product-copy">
        <strong>${escapeHTML(product.name)}</strong>
        <small>${escapeHTML(getProductGroupLabel(product))}</small>
      </span>
      <button class="sidebar-favorite-button${isFavorite ? " is-favorite" : ""}" type="button" data-sidebar-product-favorite="${escapeHTML(product.id)}" aria-label="${isFavorite ? "Remover produto dos favoritos" : "Favoritar produto"}" aria-pressed="${String(isFavorite)}" title="${isFavorite ? "Remover dos favoritos" : "Favoritar"}">
        ★
      </button>
    </div>
  `;
}

function renderFavoritesSidebarPanel(activeDiscoveryId = selectedDiscoveryId) {
  const favoriteProducts = getFavoriteProducts();
  const favoriteDiscoveriesByProduct = getFavoriteDiscoveriesByProduct();
  const favoriteDiscoveryEntries = Object.entries(favoriteDiscoveriesByProduct);
  const hasFavorites = favoriteProducts.length || favoriteDiscoveryEntries.length;

  sidebarPanel.innerHTML = `
    ${renderSidebarPanelHeader("Favoritos", "Favoritos", "Produtos e discoveries salvos para acesso rápido.")}
    <div class="sidebar-submenu">
      ${!hasFavorites ? '<p class="sidebar-empty">Nenhum favorito ainda.</p>' : ""}
      ${favoriteProducts.length ? `
        <div class="sidebar-submenu-section">
          <span class="sidebar-submenu-heading">Produtos favoritos</span>
          <div class="sidebar-list">${favoriteProducts.map((product) => renderSidebarProductRow(product)).join("")}</div>
        </div>
      ` : ""}
      ${favoriteDiscoveryEntries.length ? `
        <div class="sidebar-submenu-section">
          <span class="sidebar-submenu-heading">Discoveries favoritos</span>
          ${favoriteDiscoveryEntries.map(([productId, productDiscoveries]) => {
            const product = getProductById(productId) || getProductForDiscoverySummary(productDiscoveries[0]);
            return `
              <div class="sidebar-list-group">
                <span class="sidebar-list-group-title">${escapeHTML(product.name || "Produto")}</span>
                <div class="sidebar-list">
                  ${productDiscoveries.map((discovery) => renderSidebarDiscoveryRow(discovery, activeDiscoveryId, true)).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function renderRecentDiscoveriesPanel(activeDiscoveryId = selectedDiscoveryId) {
  const recentItems = getRecentDiscoveries(8);
  sidebarPanel.innerHTML = `
    ${renderSidebarPanelHeader("Discovery", "Recentes", "Acesse rapidamente os discoveries atualizados por produto.")}
    <div class="sidebar-submenu">
      <div class="sidebar-recent-list">
        ${recentItems.length
          ? recentItems.map((discovery) => renderSidebarDiscoveryRow(discovery, activeDiscoveryId)).join("")
          : '<p class="sidebar-empty">Nenhum discovery recente.</p>'}
      </div>
    </div>
  `;
}

function renderSidebarDiscoveryRow(discovery = {}, activeDiscoveryId = selectedDiscoveryId, isFavorite = false) {
  const title = discovery.title || discovery.name || "Discovery";
  const product = getProductById(discovery.productId) || getProductForDiscoverySummary(discovery);
  const status = discovery.status || discovery.workflow || discovery.currentState || discovery.progressLabel || "";
  return `
    <button class="sidebar-discovery-row${discovery.id === activeDiscoveryId ? " active" : ""}" type="button" ${isFavorite ? `data-favorite-discovery-shortcut="${escapeHTML(discovery.id)}"` : `data-sidebar-discovery="${escapeHTML(discovery.id)}"`} data-sidebar-discovery-product="${escapeHTML(product.id)}" title="${escapeHTML(title)}">
      <span class="sidebar-discovery-copy">
        <strong>${escapeHTML(title)}</strong>
        <small>${escapeHTML(product.name || discovery.productName || "")}${status ? ` · ${escapeHTML(status)}` : ""}</small>
      </span>
    </button>
  `;
}

function renderFavoriteProductsMenu(activeProductId = selectedProductId, activeRoute = getCurrentRoute(), activeDiscoveryId = selectedDiscoveryId) {
  renderSidebar(activeProductId, activeRoute, activeDiscoveryId);
}

function updateProductStats(visibleProducts) {
  const totals = visibleProducts.reduce((acc, product) => {
    acc.total += product.discoveryCount;
    acc.done += product.doneCount;
    acc.progress += product.progressCount;
    return acc;
  }, { total: 0, done: 0, progress: 0 });

  statTotal.textContent = totals.total;
  statDone.textContent = totals.done;
  statProgress.textContent = totals.progress;
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  updateProductStats(visibleProducts);

  productEmpty.hidden = visibleProducts.length > 0;
  let currentTower = "";
  let currentTribe = "";

  productList.innerHTML = visibleProducts.map((product) => {
    const plural = product.discoveryCount === 1 ? "discovery" : "discoveries";
    const selectedClass = product.id === selectedProductId ? " selected" : "";
    const favoriteClass = isProductFavorited(product.id) ? " active" : "";
    const favoriteLabel = isProductFavorited(product.id) ? "Remover dos favoritos" : "Favoritar";
    const taxonomyLabel = getProductTaxonomyLabel(product);
    const towerHeader = product.tower !== currentTower
      ? `<header class="product-group-header"><span>Torre</span><strong>${escapeHTML(product.tower || "Sem torre")}</strong></header>`
      : "";
    const tribeHeader = product.tower !== currentTower || product.tribe !== currentTribe
      ? `<div class="product-tribe-header"><span>Tribo</span><strong>${escapeHTML(product.tribe || "Sem tribo")}</strong></div>`
      : "";

    currentTower = product.tower || "";
    currentTribe = product.tribe || "";

    return `
      ${towerHeader}
      ${tribeHeader}
      <article class="product-row${selectedClass}" role="button" tabindex="0" data-product-id="${product.id}" aria-label="Abrir ${escapeHTML(product.name)}">
        <div class="product-row-main">
          <div class="product-title-line">
            <h2>${escapeHTML(product.name)}</h2>
            <button class="star-button${favoriteClass}" type="button" aria-label="${favoriteLabel} ${escapeHTML(product.name)}" data-product-favorite="${product.id}">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2"></polygon>
              </svg>
            </button>
          </div>
          <p>${escapeHTML(product.description)}</p>
          <div class="product-meta">
            <span>Torre:</span>
            <strong>${escapeHTML(product.tower || "-")}</strong>
            <span>Tribo:</span>
            <strong>${escapeHTML(product.tribe || "-")}</strong>
            <span>Última atividade:</span>
            <strong>${escapeHTML(product.lastActivity)}</strong>
          </div>
        </div>
        <div class="product-row-aside">
          <span class="product-taxonomy">${escapeHTML(taxonomyLabel)}</span>
          <span class="product-badge">${product.discoveryCount} ${plural}</span>
        </div>
      </article>
    `;
  }).join("");

  renderFavoriteProductsMenu(selectedProductId, getCurrentRoute());
}

function findCreatedDiscovery(discoveryId = "") {
  return createdDiscoveries.find((discovery) => discovery.id === discoveryId) || null;
}

function getNormalizedDiscoveryResult(activeDiscovery = {}) {
  const normalizedResult = normalizeCrewAiDiscoveryResult(activeDiscovery.crewAiResult || activeDiscovery.crewAiStatusPayload || {});
  const localInsights = normalizeCrewAiInsights(activeDiscovery.insights || []);
  return {
    discoveryReady: activeDiscovery.discoveryReady || normalizedResult.discoveryReady,
    reasoning: activeDiscovery.reasoning || normalizedResult.reasoning,
    insights: localInsights.length ? localInsights : normalizedResult.insights,
  };
}

function hasCrewAiDiscoveryResult(activeDiscovery = {}) {
  const normalizedResult = getNormalizedDiscoveryResult(activeDiscovery);
  return Boolean(
    activeDiscovery.crewAiResult
    || activeDiscovery.crewAiStatusPayload
    || normalizedResult.discoveryReady
    || normalizedResult.reasoning
    || normalizedResult.insights.length
  );
}

function getDiscoveryReadyLabel(readiness = "") {
  const normalized = normalizeDiscoveryReady(readiness);
  if (normalized === "yes") {
    return "Discovery pronto";
  }
  if (normalized === "no") {
    return "Discovery não pronto";
  }
  return "Prontidão não informada";
}

function getDiscoveryInsightTexts(activeDiscovery = {}) {
  return getNormalizedDiscoveryResult(activeDiscovery).insights.map((item) => item.insight);
}

function getDraftDiscoveryCardText(activeDiscovery = {}) {
  const insights = getDiscoveryInsightTexts(activeDiscovery);
  return insights[0] || activeDiscovery.reasoning || activeDiscovery.objective || activeDiscovery.problem || "Discovery criado com processamento da CrewAI.";
}

function formatCompactDate(value = "") {
  if (!value) {
    return "";
  }

  const parsedDate = new Date(value);
  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  return String(value || "").trim();
}

function getProductDiscoveryAudienceSummary(discovery = {}, product = {}) {
  const normalizedDiscovery = normalizeDiscoveryAudience({
    productId: product.id,
    ...discovery,
  }, product);
  const resolvedPersonas = resolveDiscoveryPersonas(normalizedDiscovery, product);
  const resolvedStakeholders = resolveDiscoveryStakeholders(normalizedDiscovery, product);
  const personaCount = normalizeSelectedPeopleIds(normalizedDiscovery.personaIds).length || resolvedPersonas.length;
  const stakeholderCount = normalizeSelectedPeopleIds(normalizedDiscovery.stakeholderIds).length || resolvedStakeholders.length;

  return `${personaCount} persona${personaCount === 1 ? "" : "s"} · ${stakeholderCount} stakeholder${stakeholderCount === 1 ? "" : "s"}`;
}

function getProductDiscoveryWorkflowLabel(discovery = {}) {
  const state = discovery.current_state || discovery.workflow_state || discovery.state;
  if (state) {
    return getWorkflowStepLabel(state);
  }

  if (discovery.statusType === "green") {
    return "Completed";
  }

  return "Discovery em andamento";
}

function getProductDiscoveryMethodologyLabel(discovery = {}) {
  const normalizedMethodology = normalizeDiscoveryMethodology(discovery);
  return normalizedMethodology.name || discovery.methodologyType || "Discovery Otimizado";
}

function getProductDiscoveryDescription(discovery = {}) {
  return discovery.summary
    || discovery.description
    || discovery.text
    || discovery.problem
    || discovery.objective
    || "Discovery em andamento.";
}

function getProductDiscoveryProgress(discovery = {}) {
  const total = Number.isFinite(discovery.methodologyTotal) ? discovery.methodologyTotal : 0;
  const completed = Number.isFinite(discovery.methodologyCompleted) ? discovery.methodologyCompleted : 0;
  if (total > 0) {
    const safeCompleted = Math.max(0, Math.min(total, completed));
    return {
      completed: safeCompleted,
      total,
      label: `${safeCompleted}/${total} concluídos`,
      isDone: safeCompleted >= total,
    };
  }

  const methods = Array.isArray(discovery.methods) ? discovery.methods : [];
  if (methods.length) {
    const completedMethods = methods.filter((method) => Number(method.progress) >= 100).length;
    return {
      completed: completedMethods,
      total: methods.length,
      label: `${completedMethods}/${methods.length} concluídos`,
      isDone: completedMethods >= methods.length,
    };
  }

  return {
    completed: 0,
    total: 3,
    label: discovery.status || "0/3 concluídos",
    isDone: discovery.statusType === "green",
  };
}

function renderProductDiscoveryStepIndicator(progress = {}) {
  const total = Math.max(0, Math.min(5, Number(progress.total) || 0));
  if (!total) {
    return "";
  }

  const completed = Math.max(0, Math.min(total, Number(progress.completed) || 0));
  return `
    <div class="product-discovery-steps" aria-hidden="true">
      ${Array.from({ length: total }, (_, index) => `<span class="${index < completed ? "complete" : ""}"></span>`).join("")}
    </div>
  `;
}

function createDiscoveryCard(discovery, index, product = getProductById(selectedProductId) || products[0]) {
  const progress = getProductDiscoveryProgress(discovery);
  const isDone = discovery.statusType === "green" || progress.isDone;
  const route = discovery.route || (isDone ? "synthesis" : "discovery");
  const discoveryId = discovery.id || `discovery-${index + 1}`;
  const statusIcon = isDone
    ? `<path d="M20 6 9 17l-5-5"></path>`
    : `<circle cx="12" cy="12" r="10"></circle><path d="M12 8v5"></path><path d="M12 16h.01"></path>`;
  const favoriteClass = isDiscoveryFavorite(discoveryId) ? " active" : "";
  const favoriteLabel = isDiscoveryFavorite(discoveryId) ? "Remover dos favoritos" : "Favoritar discovery";
  const description = getProductDiscoveryDescription(discovery);
  const statusType = isDone ? "green" : discovery.statusType || "blue";

  return `
    <article class="discovery-card product-discovery-card" data-product-discovery-index="${index}" data-product-discovery-id="${escapeHTML(discoveryId)}" data-product-discovery-route="${escapeHTML(route)}">
      <div class="discovery-card-top card-topline">
        <button class="star-button discovery-card-favorite${favoriteClass}" type="button" aria-label="${escapeHTML(favoriteLabel)}" aria-pressed="${String(isDiscoveryFavorite(discoveryId))}" data-discovery-favorite="${escapeHTML(discoveryId)}" data-discovery-product-id="${escapeHTML(product.id)}">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2"></polygon>
          </svg>
        </button>
        <span class="status-pill discovery-card-progress ${statusType}">
          <svg aria-hidden="true" viewBox="0 0 24 24">${statusIcon}</svg>
          ${escapeHTML(progress.label)}
        </span>
      </div>
      <h3 class="discovery-card-title">${escapeHTML(discovery.title)}</h3>
      <p class="discovery-card-description">${escapeHTML(description)}</p>
      <footer class="discovery-card-footer">
        <button class="text-action" type="button">Abrir discovery <span aria-hidden="true">›</span></button>
      </footer>
    </article>
  `;
}

function getProductDiscoveries(product) {
  const templateCards = productDiscoveryTemplates.map((discovery, index) => ({
    ...(product.id === "cora-precos" ? discoveryTemplate : {}),
    ...discovery,
    id: `discovery-${index + 1}`,
    title: discovery.title || discoveryTemplate.name,
    problem: discoveryTemplate.problem,
    personaIds: product.id === "cora-precos" ? discoveryTemplate.personaIds : [],
    stakeholderIds: product.id === "cora-precos" ? discoveryTemplate.stakeholderIds : [],
    personasSnapshot: product.id === "cora-precos" ? discoveryTemplate.personasSnapshot : [],
    stakeholdersSnapshot: product.id === "cora-precos" ? discoveryTemplate.stakeholdersSnapshot : [],
    methodology: product.id === "cora-precos" ? discoveryTemplate.methodology : methodologyPackages.optimized,
    methodologyId: product.id === "cora-precos" ? discoveryTemplate.methodologyId : methodologyPackages.optimized.id,
    methodologyType: product.id === "cora-precos" ? discoveryTemplate.methodologyType : methodologyPackages.optimized.name,
    route: discovery.statusType === "green" ? "synthesis" : "discovery",
  }))
    .map((discovery) => normalizeDiscoveryLifecycleFields(discovery))
    .map((discovery) => enrichDiscoveryWithFavorite(discovery));

  const createdCards = createdDiscoveries
    .filter((discovery) => discovery.productId === product.id && !discovery.isAudienceSelectionOverride)
    .map((discovery) => ({
      ...normalizeDiscoveryLifecycleFields(discovery),
      id: discovery.id,
      title: discovery.name,
      methodologyCompleted: 3,
      methodologyTotal: 3,
      statusType: "green",
      action: "Ver detalhes",
      text: getDraftDiscoveryCardText(discovery),
      route: "discovery",
    }))
    .map((discovery) => enrichDiscoveryWithFavorite(discovery));

  return [...createdCards, ...templateCards];
}

function renderProductDiscoveries(product) {
  const query = normalizeText(productDiscoverySearch.value.trim());
  const visibleDiscoveries = getProductDiscoveries(product).filter((discovery) => {
    const progress = getProductDiscoveryProgress(discovery);
    const hiddenSearchMetadata = [
      getProductDiscoveryWorkflowLabel(discovery),
      getProductDiscoveryAudienceSummary(discovery, product),
      getProductDiscoveryMethodologyLabel(discovery),
      formatCompactDate(discovery.updated_at || discovery.updatedAt || discovery.lastUpdated || product.lastActivity),
    ].join(" ");
    return !query || normalizeText(`${discovery.title} ${progress.label} ${getProductDiscoveryDescription(discovery)} ${hiddenSearchMetadata}`).includes(query);
  });

  productDiscoveryEmpty.hidden = visibleDiscoveries.length > 0;
  productDiscoveryGrid.innerHTML = visibleDiscoveries.map((discovery, index) => createDiscoveryCard(discovery, index, product)).join("");
  refreshDiscoveryFavoriteControls(productDiscoveryGrid);
}

function persistProductAudience(product = {}) {
  if (!product?.id) {
    return;
  }

  product.personas = (Array.isArray(product.personas) ? product.personas : [])
    .map((persona, index) => normalizeProductPersona(persona, product, index))
    .filter(Boolean);
  product.stakeholders = (Array.isArray(product.stakeholders) ? product.stakeholders : [])
    .map((stakeholder, index) => normalizeProductStakeholder(stakeholder, product, index))
    .filter(Boolean);
  productAudienceByProduct = {
    ...productAudienceByProduct,
    [product.id]: {
      personas: product.personas,
      stakeholders: product.stakeholders,
    },
  };
  saveProductAudienceTable();
  renderProductAudienceSummary(product);
  renderNewDiscoveryPeopleSelection();
}

function getAudienceStatusLabel(status = "") {
  return AUDIENCE_STATUS_LABELS[status] || status || "Ativo";
}

function getInfluenceLevelLabel(level = "") {
  return INFLUENCE_LEVEL_LABELS[level] || level || "-";
}

function getPersonaTypeLabel(type = "") {
  return PERSONA_TYPE_LABELS[type] || type || "Persona";
}

function getAudienceSegmentPath(kind = "persona") {
  return kind === "stakeholder" ? "stakeholders" : "personas";
}

function getAudienceKindLabel(kind = "persona") {
  return kind === "stakeholder" ? "stakeholder" : "persona";
}

function getAudienceItem(product = {}, kind = "persona", itemId = "") {
  return kind === "stakeholder"
    ? getStakeholderById(product.id, itemId)
    : getPersonaById(product.id, itemId);
}

function normalizeTextAreaItems(value = "") {
  return String(value || "")
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatTextAreaItems(items = []) {
  return normalizeStringList(items).join("\n");
}

function createAudienceItemId(product = {}, kind = "persona", name = "") {
  const prefix = kind === "stakeholder" ? "stakeholder" : "persona";
  const baseSlug = slugify(name || prefix) || prefix;
  const existingIds = new Set([
    ...getProductPersonas(product, { includeArchived: true }).map((persona) => persona.id),
    ...getProductStakeholders(product, { includeArchived: true }).map((stakeholder) => stakeholder.id),
  ]);
  let candidate = `${prefix}-${baseSlug}`;
  let suffix = 2;
  while (existingIds.has(candidate)) {
    candidate = `${prefix}-${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function getAllDiscoveriesForAudience(product = {}) {
  const templateCandidates = product.id === "cora-precos"
    ? [
        normalizeDiscoveryAudience({
          ...discoveryTemplate,
          id: "discovery-1",
          name: "Dashboard operacional",
          title: "Dashboard operacional",
          productId: product.id,
        }, product),
      ]
    : [];
  const createdCandidates = createdDiscoveries
    .filter((discovery) => discovery.productId === product.id)
    .map((discovery) => normalizeDiscoveryAudience(discovery, product));

  return [...templateCandidates, ...createdCandidates];
}

function getAudienceRelatedDiscoveries(product = {}, kind = "persona", itemId = "") {
  const normalizedItemId = String(itemId || "").trim();
  if (!normalizedItemId) {
    return [];
  }

  return getAllDiscoveriesForAudience(product).filter((discovery) => {
    const ids = kind === "stakeholder" ? discovery.stakeholderIds : discovery.personaIds;
    return normalizeSelectedPeopleIds(ids).includes(normalizedItemId);
  });
}

function getProductStatusLabel(product = {}) {
  if ((product.progressCount || 0) > 0) {
    return "Com discovery ativo";
  }

  if ((product.doneCount || 0) > 0) {
    return "Com aprendizados consolidados";
  }

  return "Monitorado";
}

function getProductDashboardMetrics(product = {}) {
  const discoveries = getProductDiscoveries(product);
  const activeDiscoveries = discoveries.filter((discovery) => discovery.statusType !== "green").length || product.progressCount || 0;
  const insightsGenerated = Math.max(product.doneCount * 3 + product.progressCount * 2, product.metrics?.length || 0);
  const opportunitiesOpen = Math.max(product.progressCount + Math.ceil(activeDiscoveries / 2), activeDiscoveries ? 1 : 0);
  const activePersonas = getProductPersonas(product.id).length;
  const activeStakeholders = getProductStakeholders(product.id).length;

  return [
    { label: "Discoveries ativos", value: activeDiscoveries, hint: `${discoveries.length} no histórico` },
    { label: "Insights gerados", value: insightsGenerated, hint: "Sinais mapeados" },
    { label: "Oportunidades abertas", value: opportunitiesOpen, hint: "Para priorização" },
    { label: "Personas cadastradas", value: activePersonas, hint: "Ativas no produto" },
    { label: "Stakeholders cadastrados", value: activeStakeholders, hint: "Ativos no produto" },
  ];
}

function renderProductKpis(product = {}) {
  if (!productKpiGrid) {
    return;
  }

  productKpiGrid.innerHTML = getProductDashboardMetrics(product).map((metric) => `
    <article class="product-kpi-card card-surface">
      <span>${escapeHTML(metric.label)}</span>
      <strong>${escapeHTML(String(metric.value))}</strong>
      <small>${escapeHTML(metric.hint)}</small>
    </article>
  `).join("");
}

function renderProductLearningSummary(product = {}) {
  if (!productLearningSummary) {
    return;
  }

  const metrics = Array.isArray(product.metrics) ? product.metrics.slice(0, 3) : [];
  const opportunities = [
    product.about || product.description,
    `Próximo foco: conectar descobertas recentes aos discoveries ativos de ${product.tribe || product.category || "produto"}.`,
  ].filter(Boolean);

  productLearningSummary.innerHTML = `
    <div class="product-section-header">
      <div>
        <span>Aprendizados</span>
        <h2 id="product-learning-title">Sinais recentes</h2>
      </div>
    </div>
    <div class="product-learning-grid">
      <section>
        <h3>Indicadores acompanhados</h3>
        <div class="product-chip-row">
          ${metrics.length
            ? metrics.map((metric) => `<span>${escapeHTML(metric)}</span>`).join("")
            : `<span>Nenhum indicador cadastrado</span>`}
        </div>
      </section>
      <section>
        <h3>Oportunidades em aberto</h3>
        <ul>
          ${opportunities.slice(0, 2).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
}

function renderProductSupportArtifacts(product = {}) {
  if (!productArtifacts) {
    return;
  }

  const artifacts = Array.isArray(product.artifacts) ? product.artifacts : [];
  const visibleArtifacts = artifacts.slice(0, 3);
  const hiddenCount = Math.max(0, artifacts.length - visibleArtifacts.length);

  productArtifacts.innerHTML = `
    <div class="product-support-list">
      ${visibleArtifacts.length
        ? visibleArtifacts.map((artifact) => `<button type="button" data-artifact="${escapeHTML(artifact)}">${escapeHTML(artifact)}</button>`).join("")
        : `<span>Nenhum material cadastrado</span>`}
      ${hiddenCount ? `<span>+${hiddenCount}</span>` : ""}
    </div>
  `;
}

function updateProductAudienceLinks(product = {}) {
  document.querySelectorAll("[data-product-audience-manage-link], [data-product-audience-manage-link-secondary]").forEach((link) => {
    link.setAttribute("href", getProductAudienceHash("product-audience", product.id));
  });
}

function renderProductAudienceChips(items = [], emptyLabel = "Nenhum item") {
  const visibleItems = items.slice(0, 3);
  const hiddenCount = Math.max(0, items.length - visibleItems.length);

  if (!items.length) {
    return `<span class="product-audience-chip muted">${escapeHTML(emptyLabel)}</span>`;
  }

  return `
    ${visibleItems.map((item) => `<span class="product-audience-chip">${escapeHTML(item.name)}</span>`).join("")}
    ${hiddenCount ? `<span class="product-audience-chip more">+${hiddenCount}</span>` : ""}
  `;
}

function renderProductAudienceSummary(product = {}) {
  if (!productAudienceSummary || !product?.id) {
    return;
  }

  const activePersonas = getProductPersonas(product.id);
  const activeStakeholders = getProductStakeholders(product.id);

  productAudienceSummary.innerHTML = `
    <div class="product-audience-summary-copy">
      <h2 id="product-audience-summary-title">Pessoas do produto</h2>
      <p>Arquétipos e funções disponíveis para contextualizar discoveries.</p>
    </div>
    <div class="product-audience-summary-stats compact" aria-label="Resumo de pessoas do produto">
      <div>
        <strong>${activePersonas.length}</strong>
        <span>personas</span>
      </div>
      <div>
        <strong>${activeStakeholders.length}</strong>
        <span>stakeholders</span>
      </div>
    </div>
    <div class="product-audience-chip-groups">
      <div aria-label="Personas do produto">${renderProductAudienceChips(activePersonas, "Sem personas")}</div>
      <div aria-label="Stakeholders do produto">${renderProductAudienceChips(activeStakeholders, "Sem stakeholders")}</div>
    </div>
    <div class="product-audience-actions card-actions">
      <button class="btn btn-secondary btn-sm secondary-action compact" type="button" data-product-audience-preview>Visualizar</button>
      <a class="btn btn-primary btn-sm primary-action compact" href="${getProductAudienceHash("product-audience", product.id)}">Gerenciar</a>
    </div>
  `;
}

function renderProductAudiencePreviewItem(product = {}, item = {}, kind = "persona") {
  const isPersona = kind === "persona";
  const segment = isPersona ? "personas" : "stakeholders";
  const meta = isPersona ? getPersonaTypeLabel(item.type) : [item.role, item.area].filter(Boolean).join(" · ");
  const description = isPersona
    ? item.shortDescription || item.description || ""
    : normalizeStringList(item.expectations)[0] || item.role || "";

  return `
    <article class="product-audience-preview-item">
      <div>
        <strong>${escapeHTML(item.name)}</strong>
        ${meta ? `<span>${escapeHTML(meta)}</span>` : ""}
        ${description ? `<p>${escapeHTML(description)}</p>` : ""}
      </div>
      <div class="product-audience-preview-actions card-actions">
        <a class="btn btn-secondary btn-sm secondary-action compact" href="#product/${escapeHTML(product.id)}/${segment}/${escapeHTML(item.id)}" data-product-audience-preview-link>Ver detalhes</a>
        <a class="btn btn-secondary btn-sm secondary-action compact" href="#product/${escapeHTML(product.id)}/${segment}/${escapeHTML(item.id)}/edit" data-product-audience-preview-link>Editar</a>
      </div>
    </article>
  `;
}

function renderProductAudiencePreviewGroup(product = {}, title = "", items = [], kind = "persona") {
  return `
    <section class="product-audience-preview-group">
      <div class="product-audience-preview-heading">
        <h3>${escapeHTML(title)}</h3>
        <span>${items.length}</span>
      </div>
      ${items.length
        ? `<div class="product-audience-preview-list">${items.map((item) => renderProductAudiencePreviewItem(product, item, kind)).join("")}</div>`
        : `<p class="audience-empty-state">${escapeHTML(kind === "stakeholder" ? "Nenhum stakeholder ativo." : "Nenhuma persona ativa.")}</p>`}
    </section>
  `;
}

function closeProductAudiencePreviewModal() {
  if (productAudiencePreviewModal) {
    productAudiencePreviewModal.hidden = true;
  }
}

function openProductAudiencePreviewModal(product = getProductById(selectedProductId) || products[0]) {
  if (!productAudiencePreviewModal || !productAudiencePreviewBody) {
    return;
  }

  productAudiencePreviewBody.innerHTML = `
    <div class="product-audience-preview-grid">
      ${renderProductAudiencePreviewGroup(product, "Personas", getProductPersonas(product.id), "persona")}
      ${renderProductAudiencePreviewGroup(product, "Stakeholders", getProductStakeholders(product.id), "stakeholder")}
    </div>
  `;
  productAudiencePreviewModal.hidden = false;
  window.setTimeout(() => productAudiencePreviewClose?.focus(), 0);
}

function renderAudienceStatusPill(status = "") {
  const isArchived = status === AUDIENCE_STATUSES.ARCHIVED;
  return `<span class="audience-status-pill${isArchived ? " archived" : ""}">${escapeHTML(getAudienceStatusLabel(status))}</span>`;
}

function renderAudienceListCard(product = {}, kind = "persona", item = {}) {
  const segment = getAudienceSegmentPath(kind);
  const detailsHref = `#product/${escapeHTML(product.id)}/${segment}/${escapeHTML(item.id)}`;
  const editHref = `${detailsHref}/edit`;

  if (kind === "stakeholder") {
    return `
      <article class="audience-list-card">
        <div class="audience-list-main">
          <div class="audience-list-title">
            <h3>${escapeHTML(item.name)}</h3>
            ${renderAudienceStatusPill(item.status)}
          </div>
          <dl class="audience-inline-meta">
            <div><dt>Função</dt><dd>${escapeHTML(item.role || "-")}</dd></div>
            <div><dt>Área</dt><dd>${escapeHTML(item.area || "-")}</dd></div>
            <div><dt>Influência</dt><dd>${escapeHTML(getInfluenceLevelLabel(item.influence))}</dd></div>
            <div><dt>Decisão</dt><dd>${escapeHTML(getInfluenceLevelLabel(item.decisionPower))}</dd></div>
          </dl>
        </div>
        <div class="audience-list-actions card-actions">
          <a class="btn btn-secondary btn-sm secondary-action compact" href="${detailsHref}">Ver detalhes</a>
          <a class="btn btn-secondary btn-sm secondary-action compact" href="${editHref}">Editar</a>
          <button class="btn btn-secondary btn-sm secondary-action compact" type="button" data-audience-delete="${escapeHTML(item.id)}" data-audience-kind="stakeholder">Excluir</button>
        </div>
      </article>
    `;
  }

  return `
    <article class="audience-list-card">
      <div class="audience-list-main">
        <div class="audience-list-title">
          <h3>${escapeHTML(item.name)}</h3>
          ${renderAudienceStatusPill(item.status)}
        </div>
        <dl class="audience-inline-meta">
          <div><dt>Tipo</dt><dd>${escapeHTML(getPersonaTypeLabel(item.type))}</dd></div>
          <div><dt>Segmento</dt><dd>${escapeHTML(item.segment || "-")}</dd></div>
        </dl>
        ${item.shortDescription ? `<p>${escapeHTML(item.shortDescription)}</p>` : ""}
      </div>
      <div class="audience-list-actions card-actions">
        <a class="btn btn-secondary btn-sm secondary-action compact" href="${detailsHref}">Ver detalhes</a>
        <a class="btn btn-secondary btn-sm secondary-action compact" href="${editHref}">Editar</a>
        <button class="btn btn-secondary btn-sm secondary-action compact" type="button" data-audience-delete="${escapeHTML(item.id)}" data-audience-kind="persona">Excluir</button>
      </div>
    </article>
  `;
}

function renderProductAudienceList(product = {}, kind = "persona") {
  const isStakeholder = kind === "stakeholder";
  const allItems = isStakeholder
    ? getProductStakeholders(product.id, { includeArchived: true })
    : getProductPersonas(product.id, { includeArchived: true });
  const visibleItems = audienceShowArchived ? allItems : allItems.filter((item) => item.status !== AUDIENCE_STATUSES.ARCHIVED);
  const newRoute = isStakeholder ? "stakeholder-new" : "persona-new";
  const emptyLabel = isStakeholder ? "Nenhum stakeholder cadastrado." : "Nenhuma persona cadastrada.";

  return `
    <section class="audience-list-section${activeAudienceTab === (isStakeholder ? "stakeholders" : "personas") ? " active" : ""}" data-audience-section="${isStakeholder ? "stakeholders" : "personas"}">
      <div class="audience-section-header">
        <div>
          <h2>${isStakeholder ? "Stakeholders" : "Personas"}</h2>
          <p>${isStakeholder ? "Funções de decisão, influência, aprovação e entrega." : "Arquétipos e perfis impactados pelo produto."}</p>
        </div>
        <a class="btn btn-primary btn-sm primary-action compact" href="${getProductAudienceHash(newRoute, product.id)}">${isStakeholder ? "Criar stakeholder" : "Criar persona"}</a>
      </div>
      <div class="audience-list">
        ${visibleItems.length
          ? visibleItems.map((item) => renderAudienceListCard(product, kind, item)).join("")
          : `<p class="audience-empty-state">${escapeHTML(emptyLabel)}${audienceShowArchived ? "" : " Itens arquivados ficam ocultos por padrão."}</p>`}
      </div>
    </section>
  `;
}

function renderProductAudienceManagementPage(product = {}) {
  activeAudienceTab = activeAudienceTab === "stakeholders" ? "stakeholders" : "personas";
  productAudiencePage.innerHTML = `
    <nav class="breadcrumb" aria-label="Caminho">
      <a href="#home">Início</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <a href="#products">Produtos</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <a href="#product/${escapeHTML(product.id)}">${escapeHTML(product.name)}</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <span>Pessoas do produto</span>
    </nav>

    <header class="audience-page-hero card-surface">
      <div>
        <span>${escapeHTML(getProductTaxonomyLabel(product) || product.name)}</span>
        <h1 id="product-audience-page-title">Pessoas do produto</h1>
        <p>Cadastre personas e stakeholders do produto. Cada discovery escolhe apenas o subconjunto relacionado ao seu escopo.</p>
      </div>
      <div class="audience-hero-actions page-header-actions">
        <a class="btn btn-secondary secondary-action" href="#product/${escapeHTML(product.id)}">Voltar ao produto</a>
        <a class="btn btn-primary primary-action" href="${getProductAudienceHash("persona-new", product.id)}">Criar persona</a>
        <a class="btn btn-primary primary-action" href="${getProductAudienceHash("stakeholder-new", product.id)}">Criar stakeholder</a>
      </div>
    </header>

    <section class="audience-manager card-surface">
      <div class="audience-toolbar">
        <div class="audience-tabs" role="tablist" aria-label="Pessoas do produto">
          <button type="button" class="${activeAudienceTab === "personas" ? "active" : ""}" data-audience-tab="personas" role="tab" aria-selected="${String(activeAudienceTab === "personas")}">Personas</button>
          <button type="button" class="${activeAudienceTab === "stakeholders" ? "active" : ""}" data-audience-tab="stakeholders" role="tab" aria-selected="${String(activeAudienceTab === "stakeholders")}">Stakeholders</button>
        </div>
        <label class="audience-archive-toggle">
          <input type="checkbox" data-audience-show-archived ${audienceShowArchived ? "checked" : ""} />
          Mostrar arquivados
        </label>
      </div>
      ${renderProductAudienceList(product, "persona")}
      ${renderProductAudienceList(product, "stakeholder")}
    </section>
  `;
}

function renderAudienceRelatedDiscoveries(product = {}, kind = "persona", itemId = "") {
  const relatedDiscoveries = getAudienceRelatedDiscoveries(product, kind, itemId);
  return `
    <section class="audience-detail-section">
      <h2>Discoveries relacionados</h2>
      ${relatedDiscoveries.length
        ? `<div class="audience-related-list">
            ${relatedDiscoveries.map((discovery) => `
              <article class="audience-related-item">
                <a href="#discovery/${escapeHTML(discovery.id)}/${escapeHTML(product.id)}">
                  <strong>${escapeHTML(discovery.name || discovery.title || discovery.id)}</strong>
                  <span>${escapeHTML(discovery.status || discovery.current_state || "Em acompanhamento")}</span>
                </a>
                <button class="star-button${isDiscoveryFavorite(discovery.id) ? " active" : ""}" type="button" aria-label="${isDiscoveryFavorite(discovery.id) ? "Remover dos favoritos" : "Favoritar discovery"}" aria-pressed="${String(isDiscoveryFavorite(discovery.id))}" data-discovery-favorite="${escapeHTML(discovery.id)}">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2"></polygon>
                  </svg>
                </button>
              </article>
            `).join("")}
          </div>`
        : `<p class="audience-empty-state">Nenhum discovery selecionou este item ainda.</p>`}
    </section>
  `;
}

function renderAudienceDetailList(title = "", items = []) {
  const safeItems = normalizeStringList(items);
  return `
    <section class="audience-detail-section">
      <h2>${escapeHTML(title)}</h2>
      ${safeItems.length
        ? `<ul>${safeItems.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
        : `<p class="audience-empty-state">Nenhum item informado.</p>`}
    </section>
  `;
}

function renderProductAudienceDetailPage(product = {}, routeInfo = {}) {
  const kind = routeInfo.kind || "persona";
  const item = getAudienceItem(product, kind, routeInfo.itemId);
  const segment = getAudienceSegmentPath(kind);
  if (!item) {
    productAudiencePage.innerHTML = `
      <section class="audience-not-found card-surface">
        <h1 id="product-audience-page-title">Item não encontrado</h1>
        <p>Esse item pode ter sido excluído ou nunca existiu neste produto.</p>
        <a class="btn btn-primary primary-action" href="${getProductAudienceHash("product-audience", product.id)}">Voltar para pessoas do produto</a>
      </section>
    `;
    return;
  }

  const isStakeholder = kind === "stakeholder";
  const editRoute = isStakeholder ? "stakeholder-edit" : "persona-edit";
  productAudiencePage.innerHTML = `
    <nav class="breadcrumb" aria-label="Caminho">
      <a href="#home">Início</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <a href="#product/${escapeHTML(product.id)}">${escapeHTML(product.name)}</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <a href="${getProductAudienceHash("product-audience", product.id)}">Pessoas do produto</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <span>${escapeHTML(item.name)}</span>
    </nav>

    <article class="audience-detail-page card-surface">
      <header class="audience-detail-header">
        <div>
          <span>${isStakeholder ? "Stakeholder" : "Persona"}</span>
          <h1 id="product-audience-page-title">${escapeHTML(item.name)}</h1>
          ${renderAudienceStatusPill(item.status)}
        </div>
        <div class="audience-detail-actions card-actions">
          <a class="btn btn-secondary secondary-action" href="${getProductAudienceHash("product-audience", product.id)}">Voltar</a>
          <a class="btn btn-primary primary-action" href="#product/${escapeHTML(product.id)}/${segment}/${escapeHTML(item.id)}/edit">Editar</a>
          <button class="btn btn-secondary secondary-action" type="button" data-audience-delete="${escapeHTML(item.id)}" data-audience-kind="${escapeHTML(kind)}">${item.status === AUDIENCE_STATUSES.ARCHIVED ? "Excluir" : "Arquivar/Excluir"}</button>
        </div>
      </header>

      <div class="audience-detail-grid">
        ${isStakeholder ? `
          <section class="audience-detail-section">
            <h2>Resumo</h2>
            <dl>
              <div><dt>Função</dt><dd>${escapeHTML(item.role || "-")}</dd></div>
              <div><dt>Área</dt><dd>${escapeHTML(item.area || "-")}</dd></div>
              <div><dt>Influência</dt><dd>${escapeHTML(getInfluenceLevelLabel(item.influence))}</dd></div>
              <div><dt>Poder de decisão</dt><dd>${escapeHTML(getInfluenceLevelLabel(item.decisionPower))}</dd></div>
            </dl>
          </section>
          ${renderAudienceDetailList("Expectativas", item.expectations)}
          ${renderAudienceDetailList("Preocupações", item.concerns)}
        ` : `
          <section class="audience-detail-section">
            <h2>Resumo</h2>
            <dl>
              <div><dt>Tipo</dt><dd>${escapeHTML(getPersonaTypeLabel(item.type))}</dd></div>
              <div><dt>Segmento</dt><dd>${escapeHTML(item.segment || "-")}</dd></div>
              <div><dt>Descrição curta</dt><dd>${escapeHTML(item.shortDescription || "-")}</dd></div>
            </dl>
          </section>
          <section class="audience-detail-section wide">
            <h2>Descrição</h2>
            <p>${escapeHTML(item.description || "Descrição não informada.")}</p>
          </section>
          ${renderAudienceDetailList("Objetivos", item.goals)}
          ${renderAudienceDetailList("Dores", item.painPoints)}
          <section class="audience-detail-section wide">
            <h2>Contexto</h2>
            <p>${escapeHTML(item.context || "Contexto não informado.")}</p>
          </section>
        `}
        ${renderAudienceRelatedDiscoveries(product, kind, item.id)}
      </div>
    </article>
  `;
}

function renderAudienceSelectOptions(options = {}, selectedValue = "") {
  return Object.entries(options).map(([value, label]) => `
    <option value="${escapeHTML(value)}" ${value === selectedValue ? "selected" : ""}>${escapeHTML(label)}</option>
  `).join("");
}

function renderAudienceFormField(name = "", label = "", value = "", options = {}) {
  const inputId = `audience-${name}`;
  const isTextarea = options.type === "textarea";
  const input = isTextarea
    ? `<textarea id="${inputId}" name="${escapeHTML(name)}" rows="${options.rows || 4}" ${options.required ? "required" : ""}>${escapeHTML(value)}</textarea>`
    : `<input id="${inputId}" name="${escapeHTML(name)}" type="text" value="${escapeHTML(value)}" ${options.required ? "required" : ""} />`;

  return `
    <label class="audience-form-field">
      <span>${escapeHTML(label)}</span>
      ${input}
      ${options.help ? `<small>${escapeHTML(options.help)}</small>` : ""}
    </label>
  `;
}

function renderProductAudienceFormPage(product = {}, routeInfo = {}) {
  const kind = routeInfo.kind || (routeInfo.route?.startsWith("stakeholder") ? "stakeholder" : "persona");
  const isStakeholder = kind === "stakeholder";
  const isEdit = routeInfo.mode === "edit";
  const item = isEdit ? getAudienceItem(product, kind, routeInfo.itemId) : null;
  if (isEdit && !item) {
    renderProductAudienceDetailPage(product, routeInfo);
    return;
  }

  const title = `${isEdit ? "Editar" : "Criar"} ${getAudienceKindLabel(kind)}`;
  const backHref = item
    ? getProductAudienceHash(isStakeholder ? "stakeholder-detail" : "persona-detail", product.id, item.id)
    : getProductAudienceHash("product-audience", product.id);

  productAudiencePage.innerHTML = `
    <nav class="breadcrumb" aria-label="Caminho">
      <a href="#home">Início</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <a href="#product/${escapeHTML(product.id)}">${escapeHTML(product.name)}</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <a href="${getProductAudienceHash("product-audience", product.id)}">Pessoas do produto</a>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      <span>${escapeHTML(title)}</span>
    </nav>

    <form class="audience-form-page card-surface" data-audience-form data-audience-kind="${escapeHTML(kind)}" data-audience-mode="${isEdit ? "edit" : "new"}" data-audience-item-id="${escapeHTML(item?.id || "")}">
      <header class="audience-detail-header">
        <div>
          <span>${isStakeholder ? "Stakeholder do produto" : "Persona do produto"}</span>
          <h1 id="product-audience-page-title">${escapeHTML(title)}</h1>
          <p>${isStakeholder ? "Cadastre funções envolvidas em decisão, influência, aprovação ou entrega." : "Cadastre arquétipos e perfis que podem ser relacionados a discoveries."}</p>
        </div>
        <div class="audience-detail-actions form-actions">
          <a class="btn btn-secondary secondary-action" href="${backHref}">Cancelar</a>
          <button class="btn btn-primary primary-action" type="submit">Salvar</button>
        </div>
      </header>

      <div class="audience-form-grid">
        ${isStakeholder ? `
          ${renderAudienceFormField("name", "Nome", item?.name || "", { required: true })}
          ${renderAudienceFormField("role", "Função", item?.role || "", { required: true })}
          ${renderAudienceFormField("area", "Área", item?.area || "", { required: true })}
          <label class="audience-form-field">
            <span>Influência</span>
            <select name="influence">${renderAudienceSelectOptions(INFLUENCE_LEVEL_LABELS, item?.influence || INFLUENCE_LEVELS.MEDIUM)}</select>
          </label>
          <label class="audience-form-field">
            <span>Poder de decisão</span>
            <select name="decisionPower">${renderAudienceSelectOptions(INFLUENCE_LEVEL_LABELS, item?.decisionPower || INFLUENCE_LEVELS.MEDIUM)}</select>
          </label>
          <label class="audience-form-field">
            <span>Status</span>
            <select name="status">${renderAudienceSelectOptions(AUDIENCE_STATUS_LABELS, item?.status || AUDIENCE_STATUSES.ACTIVE)}</select>
          </label>
          ${renderAudienceFormField("expectations", "Expectativas", formatTextAreaItems(item?.expectations), { type: "textarea", rows: 5, help: "Um item por linha." })}
          ${renderAudienceFormField("concerns", "Preocupações", formatTextAreaItems(item?.concerns), { type: "textarea", rows: 5, help: "Um item por linha." })}
        ` : `
          ${renderAudienceFormField("name", "Nome", item?.name || "", { required: true })}
          <label class="audience-form-field">
            <span>Tipo</span>
            <select name="type">${renderAudienceSelectOptions(PERSONA_TYPE_LABELS, item?.type || PERSONA_TYPES.INTERNAL_USER)}</select>
          </label>
          ${renderAudienceFormField("segment", "Segmento", item?.segment || "", { required: true })}
          ${renderAudienceFormField("shortDescription", "Descrição curta", item?.shortDescription || "", { required: true })}
          ${renderAudienceFormField("description", "Descrição", item?.description || "", { type: "textarea", rows: 4 })}
          ${renderAudienceFormField("goals", "Objetivos", formatTextAreaItems(item?.goals), { type: "textarea", rows: 5, help: "Um item por linha." })}
          ${renderAudienceFormField("painPoints", "Dores", formatTextAreaItems(item?.painPoints), { type: "textarea", rows: 5, help: "Um item por linha." })}
          ${renderAudienceFormField("context", "Contexto", item?.context || "", { type: "textarea", rows: 4 })}
          <label class="audience-form-field">
            <span>Status</span>
            <select name="status">${renderAudienceSelectOptions(AUDIENCE_STATUS_LABELS, item?.status || AUDIENCE_STATUSES.ACTIVE)}</select>
          </label>
        `}
      </div>
    </form>
  `;
}

function renderProductAudienceRoute(productId, routeInfo = getProductAudienceRouteInfo()) {
  if (!productAudiencePage) {
    return;
  }

  const product = getProductById(productId) || products[0];
  selectedProductId = product.id;
  const normalizedRouteInfo = routeInfo || {
    route: "product-audience",
    productId: product.id,
    kind: "",
    itemId: "",
    mode: "list",
  };

  if (normalizedRouteInfo.mode === "new" || normalizedRouteInfo.mode === "edit") {
    renderProductAudienceFormPage(product, normalizedRouteInfo);
    return;
  }

  if (normalizedRouteInfo.mode === "detail") {
    renderProductAudienceDetailPage(product, normalizedRouteInfo);
    return;
  }

  renderProductAudienceManagementPage(product);
}

function getAudienceFormData(form) {
  const formData = new FormData(form);
  const kind = form.dataset.audienceKind || "persona";
  const isStakeholder = kind === "stakeholder";
  if (isStakeholder) {
    return {
      name: String(formData.get("name") || "").trim(),
      role: String(formData.get("role") || "").trim(),
      area: String(formData.get("area") || "").trim(),
      influence: normalizeInfluenceLevel(formData.get("influence")),
      decisionPower: normalizeInfluenceLevel(formData.get("decisionPower")),
      expectations: normalizeTextAreaItems(formData.get("expectations")),
      concerns: normalizeTextAreaItems(formData.get("concerns")),
      status: normalizeAudienceStatus(formData.get("status")),
    };
  }

  return {
    name: String(formData.get("name") || "").trim(),
    type: normalizePersonaType(formData.get("type")),
    segment: String(formData.get("segment") || "").trim(),
    shortDescription: String(formData.get("shortDescription") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    goals: normalizeTextAreaItems(formData.get("goals")),
    painPoints: normalizeTextAreaItems(formData.get("painPoints")),
    context: String(formData.get("context") || "").trim(),
    status: normalizeAudienceStatus(formData.get("status")),
  };
}

function handleAudienceFormSubmit(form) {
  const product = getProductById(selectedProductId || getCurrentProductId()) || products[0];
  const kind = form.dataset.audienceKind || "persona";
  const mode = form.dataset.audienceMode || "new";
  const itemId = form.dataset.audienceItemId || "";
  const isStakeholder = kind === "stakeholder";
  const itemsKey = isStakeholder ? "stakeholders" : "personas";
  const existingItem = itemId ? getAudienceItem(product, kind, itemId) : null;
  const submittedData = getAudienceFormData(form);

  if (!submittedData.name) {
    showAppToast("Informe um nome antes de salvar.", "error");
    return;
  }

  const now = new Date().toISOString();
  const nextItem = {
    ...(existingItem || {}),
    ...submittedData,
    id: existingItem?.id || createAudienceItemId(product, kind, submittedData.name),
    createdAt: existingItem?.createdAt || now,
    updatedAt: now,
  };

  product[itemsKey] = Array.isArray(product[itemsKey]) ? [...product[itemsKey]] : [];
  if (mode === "edit" && existingItem) {
    product[itemsKey] = product[itemsKey].map((item) => item.id === existingItem.id ? nextItem : item);
  } else {
    product[itemsKey] = [nextItem, ...product[itemsKey]];
  }

  persistProductAudience(product);
  showAppToast(`${isStakeholder ? "Stakeholder" : "Persona"} salvo com sucesso.`, "success");
  window.location.hash = getProductAudienceHash(isStakeholder ? "stakeholder-detail" : "persona-detail", product.id, nextItem.id);
}

function openAudienceDeleteConfirmation(product = {}, kind = "persona", itemId = "") {
  const item = getAudienceItem(product, kind, itemId);
  if (!item || !audienceConfirmModal) {
    return;
  }

  const relatedCount = getAudienceRelatedDiscoveries(product, kind, item.id).length;
  pendingAudienceDelete = {
    productId: product.id,
    kind,
    itemId: item.id,
  };

  audienceConfirmTitle.textContent = `Excluir ${getAudienceKindLabel(kind)}`;
  audienceConfirmMessage.textContent = relatedCount
    ? `Este item está vinculado a ${relatedCount} ${relatedCount === 1 ? "discovery" : "discoveries"}. Recomendamos arquivar em vez de excluir.`
    : "Arquivar mantém o histórico e remove este item das seleções futuras. Excluir remove o item da lista do produto.";
  audienceConfirmModal.hidden = false;
  audienceConfirmModal.querySelector("[data-audience-confirm-action='archive']")?.focus();
}

function closeAudienceDeleteConfirmation() {
  pendingAudienceDelete = null;
  if (audienceConfirmModal) {
    audienceConfirmModal.hidden = true;
  }
}

function archiveAudienceItem(product = {}, kind = "persona", itemId = "") {
  const itemsKey = kind === "stakeholder" ? "stakeholders" : "personas";
  product[itemsKey] = (Array.isArray(product[itemsKey]) ? product[itemsKey] : []).map((item) => item.id === itemId
    ? {
        ...item,
        status: AUDIENCE_STATUSES.ARCHIVED,
        updatedAt: new Date().toISOString(),
      }
    : item);
  persistProductAudience(product);
}

function hardDeleteAudienceItem(product = {}, kind = "persona", itemId = "") {
  const itemsKey = kind === "stakeholder" ? "stakeholders" : "personas";
  product[itemsKey] = (Array.isArray(product[itemsKey]) ? product[itemsKey] : []).filter((item) => item.id !== itemId);
  persistProductAudience(product);
}

function handleAudienceDeleteAction(action = "cancel") {
  if (!pendingAudienceDelete || action === "cancel") {
    closeAudienceDeleteConfirmation();
    return;
  }

  const product = getProductById(pendingAudienceDelete.productId) || products[0];
  const { kind, itemId } = pendingAudienceDelete;

  if (action === "archive") {
    archiveAudienceItem(product, kind, itemId);
    audienceShowArchived = true;
    showAppToast(`${getAudienceKindLabel(kind)} arquivado.`, "success");
  }

  if (action === "delete") {
    hardDeleteAudienceItem(product, kind, itemId);
    showAppToast(`${getAudienceKindLabel(kind)} excluído.`, "success");
  }

  closeAudienceDeleteConfirmation();
  const currentRouteInfo = getProductAudienceRouteInfo();
  if (currentRouteInfo?.mode === "detail" || currentRouteInfo?.mode === "edit") {
    window.location.hash = getProductAudienceHash("product-audience", product.id);
    return;
  }

  renderProductAudienceRoute(product.id, currentRouteInfo);
}

function getActiveDiscoveryFilter() {
  return [...filterButtons].find((button) => button.classList.contains("active"))?.dataset.filter || "all";
}

function applyDiscoveryFilter(filter = getActiveDiscoveryFilter()) {
  if (!discoveryGrid) {
    return;
  }

  discoveryGrid.querySelectorAll(".discovery-card").forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.status === filter;
    card.hidden = !shouldShow;
  });
}

function createRecentDiscoveryCard(activeDiscovery = {}) {
  const readinessLabel = getDiscoveryReadyLabel(activeDiscovery.discoveryReady);
  const product = products.find((item) => item.id === activeDiscovery.productId) || products[0];
  const cardText = getDraftDiscoveryCardText(activeDiscovery);
  const favoriteClass = isDiscoveryFavorite(activeDiscovery.id) ? " active" : "";
  const favoriteLabel = isDiscoveryFavorite(activeDiscovery.id) ? "Remover dos favoritos" : "Favoritar discovery";

  return `
    <article class="discovery-card" data-status="done" data-title="${escapeHTML(activeDiscovery.name)}" data-product="${escapeHTML(product.category || product.name)}" data-product-id="${escapeHTML(product.id)}" data-discovery-id="${escapeHTML(activeDiscovery.id)}" data-route="discovery" data-prompt="Ver detalhes de ${escapeHTML(activeDiscovery.name)}">
      <div class="card-topline">
        <button class="star-button${favoriteClass}" type="button" aria-label="${escapeHTML(favoriteLabel)}" aria-pressed="${String(isDiscoveryFavorite(activeDiscovery.id))}" data-discovery-favorite="${escapeHTML(activeDiscovery.id)}">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <polygon points="12 2 15.1 8.3 22 9.3 17 14.2 18.2 21 12 17.8 5.8 21 7 14.2 2 9.3 8.9 8.3 12 2"></polygon>
          </svg>
        </button>
        <span class="status-pill green">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          ${escapeHTML(readinessLabel)}
        </span>
      </div>
      <h3>${escapeHTML(activeDiscovery.name)}</h3>
      <p>${escapeHTML(cardText)}</p>
      <button class="text-action" type="button">Ver detalhes <span aria-hidden="true">›</span></button>
    </article>
  `;
}

function renderRecentDraftDiscoveryCard() {
  if (!discoveryGrid || !draftDiscovery) {
    return;
  }

  discoveryGrid.querySelectorAll("[data-discovery-id]").forEach((card) => {
    if (card.dataset.discoveryId === draftDiscovery.id) {
      card.remove();
    }
  });

  discoveryGrid.insertAdjacentHTML("afterbegin", createRecentDiscoveryCard(draftDiscovery));
  refreshDiscoveryFavoriteControls(discoveryGrid);
  applyDiscoveryFilter();
}

function getEditableDiscovery() {
  const isDraftRoute = String(selectedDiscoveryId || "").startsWith("draft-");

  if (isDraftRoute) {
    const createdDiscovery = findCreatedDiscovery(selectedDiscoveryId);
    if (createdDiscovery) {
      draftDiscovery = normalizeDiscoveryAudience(enrichDiscoveryMethodology(createdDiscovery));
      return draftDiscovery;
    }

    if (!draftDiscovery || draftDiscovery.id !== selectedDiscoveryId) {
      draftDiscovery = createBlankDraftDiscovery(selectedDiscoveryId);
    }

    draftDiscovery = normalizeDiscoveryAudience(enrichDiscoveryMethodology(draftDiscovery));
    return draftDiscovery;
  }

  Object.assign(discoveryTemplate, normalizeDiscoveryAudience(enrichDiscoveryMethodology(discoveryTemplate), getProductById(selectedProductId) || products[0]));
  return discoveryTemplate;
}

function getMethodEntrySummary(method) {
  const entry = method.entry || createMethodEntry();
  const hasText = Boolean(entry.text?.trim());
  const fileCount = entry.files?.length || 0;

  if (!hasText && !fileCount) {
    return "Abrir Detalhes";
  }

  return [
    hasText ? "Texto salvo" : "",
    fileCount ? `${fileCount} arquivo${fileCount === 1 ? "" : "s"}` : "",
  ].filter(Boolean).join(" · ");
}

function isInterviewMethod(methodName = "") {
  const normalized = normalizeText(methodName);
  return normalized.includes("entrevista em profundidade") || normalized.includes("pesquisa em profundidade");
}

function isUsabilityMethod(methodName = "") {
  return normalizeText(methodName).replace(/[^a-z0-9]+/g, " ").includes("teste de usabilidade");
}

function isCsdMethod(methodName = "") {
  return normalizeText(methodName || "").includes("matriz csd");
}

function openInterviewDetail(method) {
  selectedInterviewMethodId = slugify(method.name) || "entrevista-em-profundidade";
  const productId = selectedProductId || getCurrentProductId();
  const discoveryId = selectedDiscoveryId || getCurrentDiscoveryId();
  setRoute("interview", productId, discoveryId, selectedInterviewMethodId);
}

const CSD_COLUMN_CONFIG = {
  certainties: {
    legacyKey: "certezas",
    title: "Certezas",
    icon: "✓",
    addLabel: "+ Adicionar certeza",
    emptyLabel: "Nenhuma certeza registrada.",
  },
  assumptions: {
    legacyKey: "suposicoes",
    title: "Suposições",
    icon: "S",
    addLabel: "+ Adicionar suposição",
    emptyLabel: "Nenhuma suposição registrada.",
  },
  doubts: {
    legacyKey: "duvidas",
    title: "Dúvidas",
    icon: "?",
    addLabel: "+ Adicionar dúvida",
    emptyLabel: "Nenhuma dúvida registrada.",
  },
};

function getCsdItemText(item = {}) {
  if (typeof item === "string") {
    return item;
  }

  return item.text
    || item.value
    || item.label
    || item.question
    || item.content
    || "";
}

function createCsdItemId(type = "item", text = "", index = 0) {
  const slug = slugify(text || type).slice(0, 34) || type;
  return `csd-${type}-${slug}-${index}`;
}

function createEditableCsdItem(type = "certainties", text = "", overrides = {}) {
  const now = new Date().toISOString();
  return {
    id: overrides.id || `csd-${type}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    type,
    text,
    status: overrides.status || "Ativo",
    source: overrides.source || "",
    sourceId: overrides.sourceId || "",
    sourceType: overrides.sourceType || "",
    sourceLabel: overrides.sourceLabel || "",
    answer: overrides.answer || "",
    answerDraft: overrides.answerDraft || "",
    answeredAt: overrides.answeredAt || "",
    validatedAt: overrides.validatedAt || "",
    active: overrides.active !== false,
    createdAt: overrides.createdAt || now,
    updatedAt: overrides.updatedAt || now,
    isDraft: overrides.isDraft !== false,
    isAnswering: Boolean(overrides.isAnswering),
    isConfirming: Boolean(overrides.isConfirming),
    answerError: Boolean(overrides.answerError),
  };
}

function normalizeCsdItem(item = {}, type = "certainties", index = 0) {
  const isObject = item && typeof item === "object" && !Array.isArray(item);
  const text = getCsdItemText(item);
  const answer = isObject ? item.answer || item.response || item.resolution || "" : "";
  const source = isObject ? item.source || item.origin || "" : "";
  const sourceId = isObject ? item.sourceId || item.source_id || item.originId || item.origin_id || "" : "";
  const sourceType = isObject
    ? item.sourceType || item.originType || item.source_type || (item.movedFromAssumption ? "assumption" : item.answeredDoubt || item.fromDoubt ? "doubt" : "")
    : "";
  const sourceLabel = isObject
    ? item.sourceLabel || item.source_label || ""
    : "";
  const createdAt = isObject ? item.createdAt || item.created_at || item.date || item.updatedAt || item.updated_at : "";
  const updatedAt = isObject ? item.updatedAt || item.updated_at || item.date || createdAt : createdAt;
  const answeredAt = isObject ? item.answeredAt || item.answered_at || "" : "";
  const validatedAt = isObject ? item.validatedAt || item.validated_at || item.confirmedAt || item.confirmed_at || "" : "";
  const status = isObject
    ? item.status || item.state || (type === "doubts" && answer ? "Respondida" : "Ativo")
    : "Ativo";

  return {
    id: isObject && item.id ? String(item.id) : createCsdItemId(type, text, index),
    type,
    text: String(text || ""),
    status: String(status || "Ativo"),
    source: String(source || ""),
    sourceId: String(sourceId || ""),
    sourceType: String(sourceType || ""),
    sourceLabel: String(sourceLabel || ""),
    answer: String(answer || ""),
    answerDraft: String(isObject && item.answerDraft ? item.answerDraft : answer || ""),
    answeredAt: String(answeredAt || ""),
    validatedAt: String(validatedAt || ""),
    active: isObject ? item.active !== false && item.status !== "removed" : true,
    createdAt: createdAt || new Date().toISOString(),
    updatedAt: updatedAt || createdAt || new Date().toISOString(),
    isDraft: Boolean(isObject && item.isDraft),
    isAnswering: Boolean(isObject && item.isAnswering),
    isConfirming: Boolean(isObject && item.isConfirming),
    answerError: Boolean(isObject && item.answerError),
  };
}

function getCsdSourceArray(source = {}, key = "certainties", legacyKey = "") {
  const candidates = [
    source[key],
    source[legacyKey],
    source[key === "certainties" ? "certezas" : key === "assumptions" ? "suposicoes" : "duvidas"],
  ];
  return candidates.find((candidate) => Array.isArray(candidate)) || [];
}

function normalizeCsdMatrix(activeDiscovery = {}) {
  const sourceMatrix = activeDiscovery.csdMatrix || activeDiscovery.csd_matrix || {};
  const legacyCsd = activeDiscovery.csd || {};
  const source = Object.keys(sourceMatrix || {}).length ? sourceMatrix : legacyCsd;

  const matrix = Object.entries(CSD_COLUMN_CONFIG).reduce((acc, [key, config]) => {
    const items = getCsdSourceArray(source, key, config.legacyKey);
    acc[key] = items.map((item, index) => normalizeCsdItem(item, key, index));
    return acc;
  }, {});

  return {
    certainties: matrix.certainties || [],
    assumptions: matrix.assumptions || [],
    doubts: matrix.doubts || [],
    updatedAt: sourceMatrix.updatedAt
      || sourceMatrix.updated_at
      || activeDiscovery.csdUpdatedAt
      || activeDiscovery.updated_at
      || activeDiscovery.updatedAt
      || new Date().toISOString(),
    updatedBy: sourceMatrix.updatedBy || sourceMatrix.updated_by || activeDiscovery.csdUpdatedBy || "Admin",
  };
}

function cloneCsdMatrix(matrix = {}) {
  return JSON.parse(JSON.stringify(normalizeCsdMatrix({ csdMatrix: matrix })));
}

function getActiveCsdItems(matrix = {}, key = "certainties") {
  return (Array.isArray(matrix[key]) ? matrix[key] : []).filter((item) => item && item.active !== false);
}

function getCountableCsdItems(matrix = {}, key = "certainties") {
  return getActiveCsdItems(matrix, key).filter((item) => String(item.text || "").trim());
}

function isCsdDoubtAnswered(item = {}) {
  const normalizedStatus = normalizeText(item.status || "");
  return Boolean(String(item.answer || "").trim())
    || normalizedStatus.includes("respondida")
    || normalizedStatus.includes("answered");
}

function calculateCsdValidationPercent(matrix = {}) {
  const normalizedMatrix = normalizeCsdMatrix({ csdMatrix: matrix });
  const certainties = getCountableCsdItems(normalizedMatrix, "certainties");
  const assumptions = getCountableCsdItems(normalizedMatrix, "assumptions");
  const doubts = getCountableCsdItems(normalizedMatrix, "doubts");
  const total = certainties.length + assumptions.length + doubts.length;
  if (!total) {
    return 0;
  }

  const validatedAssumptions = assumptions.filter((item) => {
    const status = normalizeText(item.status || "");
    return status.includes("validada") || status.includes("confirmada") || status.includes("validated") || status.includes("confirmed");
  }).length;
  const answeredDoubts = doubts.filter(isCsdDoubtAnswered).length;
  const percent = ((certainties.length + validatedAssumptions + answeredDoubts) / total) * 100;
  return Math.max(0, Math.min(100, Math.round(percent)));
}

function getLegacyCsdFromMatrix(matrix = {}) {
  const normalizedMatrix = normalizeCsdMatrix({ csdMatrix: matrix });
  return {
    certezas: getCountableCsdItems(normalizedMatrix, "certainties")
      .map((item) => item.text.trim())
      .filter(Boolean),
    suposicoes: getCountableCsdItems(normalizedMatrix, "assumptions")
      .map((item) => item.text.trim())
      .filter(Boolean),
    duvidas: getCountableCsdItems(normalizedMatrix, "doubts")
      .map((item) => item.text.trim())
      .filter(Boolean),
  };
}

function formatCsdDate(value = "") {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return "Hoje";
  }

  return new Intl.DateTimeFormat("pt-BR").format(date);
}

function getCsdLastUpdatedLabel(matrix = {}) {
  return `Última atualização: ${formatCsdDate(matrix.updatedAt)} por ${matrix.updatedBy || "Admin"}`;
}

function createCsdMatrixFromLegacyCsd(csd = {}, options = {}) {
  const now = options.updatedAt || new Date().toISOString();
  return cleanCsdMatrixForSave({
    ...normalizeCsdMatrix({ csd }),
    updatedAt: now,
    updatedBy: options.updatedBy || "Admin",
  });
}

function getDiscoveryCsd(activeDiscovery = {}) {
  return getLegacyCsdFromMatrix(normalizeCsdMatrix(activeDiscovery));
}

function renderCsdPanel(activeDiscovery) {
  const csd = getDiscoveryCsd(activeDiscovery);
  const counters = typeof csdCounts !== "undefined" ? csdCounts : [];
  const outputLists = typeof csdLists !== "undefined" ? csdLists : [];

  counters.forEach((counter) => {
    const key = counter.dataset.csdCount;
    counter.textContent = String(csd[key]?.length || 0);
  });

  outputLists.forEach((list) => {
    const key = list.dataset.csdListOutput;
    const items = csd[key] || [];
    list.innerHTML = items.length
      ? items.slice(0, 4).map((item) => `<li>${escapeHTML(item)}</li>`).join("")
      : `<li class="empty-csd-item">Sem registros</li>`;
  });
}

function getCsdSummaryData(activeDiscovery = {}) {
  const matrix = normalizeCsdMatrix(activeDiscovery);
  const certaintiesCount = getCountableCsdItems(matrix, "certainties").length;
  const assumptionsCount = getCountableCsdItems(matrix, "assumptions").length;
  const doubtsCount = getCountableCsdItems(matrix, "doubts").length;

  return {
    matrix,
    validationPercent: calculateCsdValidationPercent(matrix),
    certaintiesCount,
    assumptionsCount,
    doubtsCount,
    totalCount: certaintiesCount + assumptionsCount + doubtsCount,
    lastUpdated: getCsdLastUpdatedLabel(matrix),
  };
}

function renderCsdSummaryPanel(activeDiscovery = {}) {
  const summary = getCsdSummaryData(activeDiscovery);
  const emptyMessage = summary.totalCount ? "Certezas, suposições e dúvidas organizadas para orientar a pesquisa." : "Matriz CSD ainda vazia.";
  const routeDiscoveryId = selectedDiscoveryId || getCurrentDiscoveryId();
  const summaryDiscoveryId = activeDiscovery.id === discoveryTemplate.id && routeDiscoveryId
    ? routeDiscoveryId
    : activeDiscovery.id || routeDiscoveryId || "";

  return `
    <section class="csd-summary-panel card-surface" data-csd-summary-panel aria-labelledby="csd-summary-title">
      <div class="csd-summary-header">
        <div>
          <span>Discovery framing</span>
          <h2 id="csd-summary-title">Matriz CSD</h2>
          <p>${escapeHTML(emptyMessage)}</p>
        </div>
        <strong>${escapeHTML(`${summary.validationPercent}% validado`)}</strong>
      </div>
      <div class="csd-summary-counts" aria-label="Resumo da Matriz CSD">
        <div>
          <span>${escapeHTML(String(summary.certaintiesCount))}</span>
          <small>certezas</small>
        </div>
        <div>
          <span>${escapeHTML(String(summary.assumptionsCount))}</span>
          <small>suposições</small>
        </div>
        <div>
          <span>${escapeHTML(String(summary.doubtsCount))}</span>
          <small>dúvidas</small>
        </div>
      </div>
      <footer class="csd-summary-footer">
        <span>${escapeHTML(summary.lastUpdated)}</span>
        <button class="btn btn-primary btn-sm primary-action compact" type="button" data-open-csd-matrix="${escapeHTML(summaryDiscoveryId)}">Abrir matriz</button>
      </footer>
    </section>
  `;
}

function renderDiscoveryCsdSummaryPanel(activeDiscovery = {}) {
  const existingPanel = discoveryPage.querySelector("[data-csd-summary-panel]");
  if (existingPanel) {
    existingPanel.remove();
  }

  const workflowPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  const summary = discoveryPage.querySelector(".discovery-summary");
  const anchor = workflowPanel || summary;
  if (!anchor) {
    return;
  }

  anchor.insertAdjacentHTML("afterend", renderCsdSummaryPanel(activeDiscovery));
}

function getCsdColumnCountLabel(matrix = {}, key = "certainties") {
  const items = getCountableCsdItems(matrix, key);
  return String(items.length);
}

function getCsdSourceBadge(item = {}) {
  const sourceType = normalizeText([item.source, item.sourceType, item.sourceLabel].filter(Boolean).join(" "));
  if (sourceType.includes("moved_from_assumption") || sourceType.includes("assumption") || sourceType.includes("suposicao")) {
    return "Movida de Suposição";
  }

  if (sourceType.includes("answered_doubt") || sourceType.includes("doubt") || sourceType.includes("duvida")) {
    return "Dúvida respondida";
  }

  return item.sourceLabel || "";
}

function renderCsdStatusBadges(item = {}, key = "certainties") {
  const badges = [];
  const sourceBadge = getCsdSourceBadge(item);
  if (sourceBadge) {
    badges.push(`<span class="csd-item-badge source">${escapeHTML(sourceBadge)}</span>`);
  }

  if (key === "doubts" && isCsdDoubtAnswered(item)) {
    badges.push(`<span class="csd-item-badge answered">Respondida</span>`);
  } else if (item.status && normalizeText(item.status) !== "ativo") {
    badges.push(`<span class="csd-item-badge">${escapeHTML(item.status)}</span>`);
  }

  if (key === "certainties" && item.validatedAt) {
    badges.push(`<span class="csd-item-badge confirmed">Confirmada em ${escapeHTML(formatCsdDate(item.validatedAt))}</span>`);
  }

  return badges.join("");
}

function renderCsdItemCard(key = "certainties", item = {}, index = 0) {
  const config = CSD_COLUMN_CONFIG[key] || CSD_COLUMN_CONFIG.certainties;
  const dateLabel = formatCsdDate(item.updatedAt || item.createdAt);
  const assumptionConfirmationMarkup = key === "assumptions" && item.isConfirming
    ? `
      <div class="csd-inline-panel" role="group" aria-label="Confirmar suposição como certeza">
        <p>Mover esta suposição para Certezas?</p>
        <div class="csd-inline-actions">
          <button class="btn btn-primary btn-sm" type="button" data-csd-confirm-assumption-final="${index}">Confirmar</button>
          <button class="btn btn-secondary btn-sm" type="button" data-csd-confirm-assumption-cancel="${index}">Cancelar</button>
        </div>
      </div>
    `
    : "";
  const doubtAnswerMarkup = key === "doubts" && item.isAnswering
    ? `
      <div class="csd-inline-panel" role="group" aria-label="Responder dúvida">
        <label class="csd-answer-field">
          <span>Resposta</span>
          <textarea rows="3" data-csd-doubt-answer-draft="${index}" placeholder="Digite a resposta da dúvida">${escapeHTML(item.answerDraft || "")}</textarea>
        </label>
        ${item.answerError ? `<p class="csd-inline-error">Digite uma resposta antes de salvar.</p>` : ""}
        <div class="csd-inline-actions">
          <button class="btn btn-primary btn-sm" type="button" data-csd-save-doubt-answer="${index}">Salvar resposta</button>
          <button class="btn btn-secondary btn-sm" type="button" data-csd-cancel-doubt-answer="${index}">Cancelar</button>
        </div>
      </div>
    `
    : "";
  const actionMarkup = key === "assumptions" && !item.isConfirming
    ? `<button class="btn btn-secondary btn-sm csd-card-action" type="button" data-csd-start-confirm-assumption="${index}">Confirmar como certeza</button>`
    : key === "doubts" && !item.isAnswering
      ? `<button class="btn btn-secondary btn-sm csd-card-action" type="button" data-csd-start-answer-doubt="${index}">Responder dúvida</button>`
      : "";

  return `
    <article class="csd-card csd-item-card" data-csd-card="${escapeHTML(key)}" data-csd-index="${index}">
      <div class="csd-item-card-topline">
        <span>${escapeHTML(dateLabel)}</span>
        <button class="csd-item-remove btn btn-ghost btn-icon btn-sm" type="button" data-csd-remove-item="${escapeHTML(key)}:${index}" aria-label="Remover item de ${escapeHTML(config.title)}">×</button>
      </div>
      <label class="csd-item-text-label">
        <span class="visually-hidden">${escapeHTML(config.title)}</span>
        <textarea rows="4" data-csd-item-text="${escapeHTML(key)}:${index}" placeholder="Digite o conteúdo...">${escapeHTML(item.text || "")}</textarea>
      </label>
      <div class="csd-item-meta">
        ${renderCsdStatusBadges(item, key)}
      </div>
      ${assumptionConfirmationMarkup}
      ${doubtAnswerMarkup}
      ${actionMarkup ? `<div class="csd-item-actions">${actionMarkup}</div>` : ""}
    </article>
  `;
}

function renderCsdColumn(key = "certainties", matrix = {}) {
  const config = CSD_COLUMN_CONFIG[key] || CSD_COLUMN_CONFIG.certainties;
  const items = getActiveCsdItems(matrix, key);

  return `
    <section class="csd-column csd-${escapeHTML(key)}" aria-labelledby="csd-${escapeHTML(key)}-title">
      <header class="csd-column-header">
        <div>
          <span class="csd-column-icon" aria-hidden="true">${escapeHTML(config.icon)}</span>
          <h3 id="csd-${escapeHTML(key)}-title">${escapeHTML(config.title)}</h3>
        </div>
        <strong>${escapeHTML(getCsdColumnCountLabel(matrix, key))}</strong>
      </header>
      <div class="csd-card-list csd-column-list">
        ${items.length
          ? items.map((item, index) => renderCsdItemCard(key, item, index)).join("")
          : `<p class="csd-column-empty">${escapeHTML(config.emptyLabel)}</p>`}
      </div>
      <button class="csd-add-button btn btn-secondary" type="button" data-csd-add-column="${escapeHTML(key)}">${escapeHTML(config.addLabel)}</button>
    </section>
  `;
}

function renderCsdMatrixModal(discovery = {}) {
  if (!csdModalBody || !editingCsdMatrixState) {
    return;
  }

  const matrix = editingCsdMatrixState.matrix;
  const validationPercent = calculateCsdValidationPercent(matrix);
  if (csdModalValidationBadge) {
    csdModalValidationBadge.textContent = `${validationPercent}% validado`;
  }
  if (csdModalLastUpdated) {
    csdModalLastUpdated.textContent = getCsdLastUpdatedLabel(matrix);
  }

  csdModalBody.innerHTML = `
    <div class="csd-board">
      ${renderCsdColumn("certainties", matrix)}
      ${renderCsdColumn("assumptions", matrix)}
      ${renderCsdColumn("doubts", matrix)}
    </div>
  `;

  if (discovery?.name) {
    csdModal?.setAttribute("aria-label", `Matriz CSD de ${discovery.name}`);
  }
}

function openCsdMatrixModal(discoveryId = selectedDiscoveryId || getCurrentDiscoveryId()) {
  if (!csdModal || !csdModalBody) {
    return;
  }

  const requestedDiscoveryId = String(discoveryId || selectedDiscoveryId || getCurrentDiscoveryId() || "").trim();
  const activeDiscovery = findCreatedDiscovery(requestedDiscoveryId)
    || (draftDiscovery?.id === requestedDiscoveryId ? draftDiscovery : null)
    || getEditableDiscovery()
    || {};
  const matrix = normalizeCsdMatrix(activeDiscovery);
  editingCsdMatrixState = {
    discoveryId: requestedDiscoveryId || activeDiscovery.id || "",
    productId: selectedProductId || activeDiscovery.productId || getCurrentProductId(),
    matrix: cloneCsdMatrix(matrix),
  };
  renderCsdMatrixModal(activeDiscovery);
  csdModal.hidden = false;
  window.setTimeout(() => csdModalClose?.focus(), 0);
}

function closeCsdMatrixModal() {
  editingCsdMatrixState = null;
  if (csdModal) {
    csdModal.hidden = true;
  }
}

function updateCsdMatrixItem(key = "certainties", index = 0, patch = {}) {
  if (!editingCsdMatrixState?.matrix || !Array.isArray(editingCsdMatrixState.matrix[key])) {
    return;
  }

  const item = editingCsdMatrixState.matrix[key][index];
  if (!item) {
    return;
  }

  editingCsdMatrixState.matrix[key][index] = {
    ...item,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
}

function getCsdOriginalItemIndex(key = "certainties", activeIndex = 0) {
  if (!editingCsdMatrixState?.matrix || !Array.isArray(editingCsdMatrixState.matrix[key])) {
    return -1;
  }

  const activeItem = getActiveCsdItems(editingCsdMatrixState.matrix, key)[activeIndex];
  if (!activeItem) {
    return -1;
  }

  return editingCsdMatrixState.matrix[key].findIndex((item) => item.id === activeItem.id);
}

function updateCsdMatrixActiveItem(key = "certainties", activeIndex = 0, patch = {}) {
  const originalIndex = getCsdOriginalItemIndex(key, activeIndex);
  if (originalIndex < 0) {
    return;
  }

  updateCsdMatrixItem(key, originalIndex, patch);
}

function parseCsdMatrixTarget(value = "") {
  const [key, indexValue] = String(value || "").split(":");
  const safeKey = CSD_COLUMN_CONFIG[key] ? key : "certainties";
  return {
    key: safeKey,
    index: Number(indexValue) || 0,
  };
}

function cleanCsdMatrixForSave(matrix = {}) {
  const normalizedMatrix = normalizeCsdMatrix({ csdMatrix: matrix });
  const cleanedMatrix = {
    ...normalizedMatrix,
    updatedAt: matrix.updatedAt || normalizedMatrix.updatedAt,
    updatedBy: matrix.updatedBy || normalizedMatrix.updatedBy || "Admin",
  };

  Object.keys(CSD_COLUMN_CONFIG).forEach((key) => {
    cleanedMatrix[key] = (Array.isArray(normalizedMatrix[key]) ? normalizedMatrix[key] : [])
      .filter((item) => String(item.text || "").trim())
      .map((item) => {
        const { isDraft, isAnswering, isConfirming, answerDraft, answerError, ...persistableItem } = item;
        return {
          ...persistableItem,
          text: String(item.text || "").trim(),
          answer: String(item.answer || "").trim(),
        };
      });
  });

  return cleanedMatrix;
}

function addCsdMatrixItem(key = "certainties") {
  if (!editingCsdMatrixState?.matrix || !Array.isArray(editingCsdMatrixState.matrix[key])) {
    return;
  }

  editingCsdMatrixState.matrix[key] = [
    ...editingCsdMatrixState.matrix[key],
    createEditableCsdItem(key),
  ];
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
  window.setTimeout(() => {
    const newItemIndex = editingCsdMatrixState?.matrix?.[key]?.length - 1;
    const input = csdModalBody?.querySelector(`[data-csd-item-text="${key}:${newItemIndex}"]`);
    input?.focus();
  }, 0);
}

function removeCsdMatrixItem(key = "certainties", index = 0) {
  if (!editingCsdMatrixState?.matrix || !Array.isArray(editingCsdMatrixState.matrix[key])) {
    return;
  }

  const originalIndex = getCsdOriginalItemIndex(key, index);
  editingCsdMatrixState.matrix[key] = editingCsdMatrixState.matrix[key].map((item, itemIndex) => (
    itemIndex === originalIndex ? { ...item, active: false, updatedAt: new Date().toISOString() } : item
  ));
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
}

function startCsdAssumptionConfirmation(index = 0) {
  updateCsdMatrixActiveItem("assumptions", index, { isConfirming: true });
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
}

function cancelCsdAssumptionConfirmation(index = 0) {
  updateCsdMatrixActiveItem("assumptions", index, { isConfirming: false });
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
}

function hasCsdCertaintyFromSource(source = "", sourceId = "") {
  if (!source || !sourceId || !editingCsdMatrixState?.matrix) {
    return false;
  }

  return (Array.isArray(editingCsdMatrixState.matrix.certainties) ? editingCsdMatrixState.matrix.certainties : [])
    .some((item) => item.active !== false && item.source === source && item.sourceId === sourceId);
}

function confirmCsdAssumptionAsCertainty(index = 0) {
  if (!editingCsdMatrixState?.matrix) {
    return;
  }

  const assumption = getActiveCsdItems(editingCsdMatrixState.matrix, "assumptions")[index];
  if (!assumption) {
    return;
  }

  const now = new Date().toISOString();
  if (!hasCsdCertaintyFromSource("moved_from_assumption", assumption.id)) {
    editingCsdMatrixState.matrix.certainties = [
      createEditableCsdItem("certainties", assumption.text, {
        status: "confirmed",
        source: "moved_from_assumption",
        sourceId: assumption.id,
        sourceType: "assumption",
        sourceLabel: "Movida de Suposição",
        validatedAt: now,
        createdAt: now,
        updatedAt: now,
        isDraft: false,
      }),
      ...editingCsdMatrixState.matrix.certainties,
    ];
  }
  editingCsdMatrixState.matrix.assumptions = editingCsdMatrixState.matrix.assumptions.map((item) => (
    item.id === assumption.id
      ? { ...item, active: false, status: "confirmed", isConfirming: false, confirmedAt: now, updatedAt: now }
      : item
  ));
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
}

function startCsdDoubtAnswer(index = 0) {
  const doubt = getActiveCsdItems(editingCsdMatrixState?.matrix || {}, "doubts")[index];
  if (!doubt) {
    return;
  }

  updateCsdMatrixActiveItem("doubts", index, {
    isAnswering: true,
    answerDraft: doubt.answer || doubt.answerDraft || "",
    answerError: false,
  });
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
  window.setTimeout(() => csdModalBody?.querySelector(`[data-csd-doubt-answer-draft="${index}"]`)?.focus(), 0);
}

function cancelCsdDoubtAnswer(index = 0) {
  updateCsdMatrixActiveItem("doubts", index, {
    isAnswering: false,
    answerDraft: "",
    answerError: false,
  });
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
}

function saveCsdDoubtAnswer(index = 0) {
  if (!editingCsdMatrixState?.matrix) {
    return;
  }

  const doubt = getActiveCsdItems(editingCsdMatrixState.matrix, "doubts")[index];
  if (!doubt) {
    return;
  }

  const answerText = String(doubt.answerDraft || "").trim();
  if (!answerText) {
    updateCsdMatrixActiveItem("doubts", index, { answerError: true, isAnswering: true });
    renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
    window.setTimeout(() => csdModalBody?.querySelector(`[data-csd-doubt-answer-draft="${index}"]`)?.focus(), 0);
    return;
  }

  const now = new Date().toISOString();
  if (!hasCsdCertaintyFromSource("answered_doubt", doubt.id)) {
    editingCsdMatrixState.matrix.certainties = [
      createEditableCsdItem("certainties", answerText, {
        status: "confirmed",
        source: "answered_doubt",
        sourceId: doubt.id,
        sourceType: "doubt",
        sourceLabel: "Dúvida respondida",
        validatedAt: now,
        createdAt: now,
        updatedAt: now,
        isDraft: false,
      }),
      ...editingCsdMatrixState.matrix.certainties,
    ];
  }

  editingCsdMatrixState.matrix.doubts = editingCsdMatrixState.matrix.doubts.map((item) => (
    item.id === doubt.id
      ? {
          ...item,
          active: false,
          status: "answered",
          answer: answerText,
          answerDraft: "",
          answeredAt: now,
          isAnswering: false,
          answerError: false,
          updatedAt: now,
        }
      : item
  ));
  renderCsdMatrixModal(getActiveDiscoveryForCurrentPage());
}

function syncCsdMethodProgress(activeDiscovery = {}, matrix = {}) {
  const methods = Array.isArray(activeDiscovery.methods) ? activeDiscovery.methods : [];
  const methodIndex = methods.findIndex((method) => isCsdMethod(method.name));
  if (methodIndex < 0) {
    return activeDiscovery;
  }

  const progress = calculateCsdValidationPercent(matrix);
  const status = progress >= 100 ? "Validado" : progress > 0 ? "Em andamento" : "Pendente";
  activeDiscovery.methods = methods.map((method, index) => (
    index === methodIndex ? { ...method, progress, status } : method
  ));
  return activeDiscovery;
}

function saveCsdMatrixModal() {
  if (!editingCsdMatrixState?.matrix) {
    return null;
  }

  const currentDiscoveryId = editingCsdMatrixState.discoveryId || selectedDiscoveryId || getCurrentDiscoveryId();
  const product = getProductById(editingCsdMatrixState.productId || selectedProductId || getCurrentProductId()) || products[0];
  const activeDiscovery = findCreatedDiscovery(currentDiscoveryId)
    || (draftDiscovery?.id === currentDiscoveryId ? draftDiscovery : null)
    || getEditableDiscovery()
    || {};
  const now = new Date().toISOString();
  const cleanedMatrix = cleanCsdMatrixForSave({
    ...editingCsdMatrixState.matrix,
    updatedAt: now,
    updatedBy: "Admin",
  });
  const patch = {
    csdMatrix: cleanedMatrix,
    csd: getLegacyCsdFromMatrix(cleanedMatrix),
    updated_at: now,
  };
  const updatedDiscovery = syncCsdMethodProgress(normalizeDiscoveryAudience(enrichDiscoveryMethodology({
    ...activeDiscovery,
    id: currentDiscoveryId,
    productId: product.id,
    ...patch,
  }), product), cleanedMatrix);

  if (activeDiscovery === discoveryTemplate || currentDiscoveryId === discoveryTemplate.id) {
    Object.assign(discoveryTemplate, updatedDiscovery);
  }

  upsertCreatedDiscovery(updatedDiscovery);

  if (draftDiscovery?.id === updatedDiscovery.id) {
    draftDiscovery = updatedDiscovery;
  }

  closeCsdMatrixModal();
  renderDiscoveryPage(product.id, updatedDiscovery.id);
  showAppToast("Matriz CSD salva.", "success");
  return updatedDiscovery;
}

function getMethodOperationalState(method = {}) {
  const normalized = normalizeText(method.name || "");
  const progress = Number(method.progress) || 0;

  if (normalized.includes("entrevista") || normalized.includes("pesquisa em profundidade")) {
    return progress > 0 ? "3/8 participantes recrutados" : "0/8 participantes recrutados";
  }

  if (normalized.includes("teste de usabilidade")) {
    return progress > 0 ? "2 sessões realizadas" : "0 sessões realizadas";
  }

  if (normalized.includes("survey")) {
    return progress > 0 ? "63 respostas recebidas" : "0 respostas recebidas";
  }

  if (normalized.includes("desk")) {
    return progress > 0 ? "12 fontes analisadas" : "0 fontes analisadas";
  }

  if (normalized.includes("matriz csd")) {
    return progress > 0 ? "CSD em refinamento" : "CSD pronto para priorização";
  }

  if (normalized.includes("protótipo")) {
    return progress > 0 ? "Protótipo em revisão" : "0 telas prototipadas";
  }

  if (normalized.includes("handoff")) {
    return progress > 0 ? "Handoff em preparação" : "0 decisões documentadas";
  }

  return progress > 0 ? "Em andamento" : "Pronto para iniciar";
}

function renderDiscoveryOperations(activeDiscovery = {}) {
  const methods = activeDiscovery.methods || [];
  const interviewMethod = methods.find((method) => isInterviewMethod(method.name));
  const surveyMethod = methods.find((method) => normalizeText(method.name).includes("survey"));
  const usabilityMethod = methods.find((method) => normalizeText(method.name).includes("teste de usabilidade"));
  const completedMethods = methods.filter((method) => Number(method.progress) >= 100).length;
  const startedMethods = methods.filter((method) => Number(method.progress) > 0).length;
  const cards = [
    {
      title: "Recrutamento",
      value: interviewMethod && Number(interviewMethod.progress) > 0 ? "3/8" : "0/8",
      detail: "participantes confirmados",
    },
    {
      title: "Survey",
      value: surveyMethod && Number(surveyMethod.progress) > 0 ? "63" : "0",
      detail: "respostas coletadas",
    },
    {
      title: "Usabilidade",
      value: usabilityMethod && Number(usabilityMethod.progress) > 0 ? "2" : "0",
      detail: "sessões realizadas",
    },
    {
      title: "Metodologias",
      value: `${completedMethods}/${methods.length || 0}`,
      detail: startedMethods ? `${startedMethods} em andamento ou concluídas` : "todas prontas para iniciar",
    },
  ];

  discoveryOperations.innerHTML = cards.map((card) => `
    <article class="operation-card">
      <span>${escapeHTML(card.title)}</span>
      <strong>${escapeHTML(card.value)}</strong>
      <p>${escapeHTML(card.detail)}</p>
    </article>
  `).join("");
}

function normalizeInsightItem(insight, index, evidence = []) {
  if (typeof insight === "string") {
    return {
      title: `Insight ${index + 1}`,
      description: insight,
      priority: "Média",
      method: "Síntese do discovery",
      evidence: evidence.map((item) => item.quote || item.file).filter(Boolean).slice(0, 3),
    };
  }

  return {
    title: insight.title || `Insight ${index + 1}`,
    description: insight.description || "",
    priority: insight.priority || insight.severity || "Média",
    method: insight.method || insight.source || "Metodologia não informada",
    evidence: Array.isArray(insight.evidence) ? insight.evidence : [],
  };
}

function renderDiscoveryInsights(activeDiscovery = {}) {
  const insights = Array.isArray(activeDiscovery.insights) ? activeDiscovery.insights : [];
  if (!insights.length) {
    discoveryInsightsPanel.hidden = true;
    discoveryInsights.innerHTML = "";
    return;
  }

  discoveryInsightsPanel.hidden = false;
  discoveryInsights.innerHTML = insights.map((item, index) => {
    const insight = normalizeInsightItem(item, index, activeDiscovery.evidence || []);
    return `
      <details class="insight-card">
        <summary>
          <span>
            <strong>${escapeHTML(insight.title)}</strong>
            <small>${escapeHTML(insight.method)} · Prioridade ${escapeHTML(insight.priority)}</small>
          </span>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <p>${escapeHTML(insight.description)}</p>
        <div class="insight-evidence">
          <span>Evidências relacionadas</span>
          <ul>
            ${insight.evidence.length
              ? insight.evidence.map((evidence) => `<li>${escapeHTML(evidence)}</li>`).join("")
              : "<li>Evidências serão vinculadas após a execução das metodologias.</li>"}
          </ul>
        </div>
      </details>
    `;
  }).join("");
}

function normalizeRunStatusForWorkflow(status = "", state = "") {
  const normalizedStatus = normalizeWorkflowValue(status);
  const normalizedState = normalizeWorkflowValue(state);

  if (Object.values(RUN_STATUSES).includes(normalizedStatus)) {
    return normalizedStatus;
  }

  if (normalizedState === WORKFLOW_STATES.COMPLETED) {
    return RUN_STATUSES.COMPLETED;
  }

  if (normalizedState === WORKFLOW_STATES.FAILED) {
    return RUN_STATUSES.FAILED;
  }

  if (normalizeText(status).includes("execucao") || normalizeText(status).includes("andamento")) {
    return RUN_STATUSES.RUNNING;
  }

  return RUN_STATUSES.RUNNING;
}

function formatWorkflowTimestamp(value = "") {
  if (!value) {
    return "Não informado";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getDiscoveryWorkflowSnapshot(activeDiscovery = {}) {
  const hasLegacyCrewCompletion = Boolean(activeDiscovery.crewAiResult || activeDiscovery.crewAiStatusPayload);
  const fallbackState = hasLegacyCrewCompletion
    ? WORKFLOW_STATES.COMPLETED
    : WORKFLOW_STATES.DISCOVERY_CREATED;
  const currentState = normalizeWorkflowValue(activeDiscovery.current_state || activeDiscovery.workflow_state || activeDiscovery.state || fallbackState);
  const runStatus = normalizeRunStatusForWorkflow(activeDiscovery.run_status || activeDiscovery.status, currentState);
  const agentProcessingStatus = getAgentProcessingStatus(currentState, runStatus);

  return {
    state: currentState,
    status: runStatus,
    agentProcessingStatus,
    agentProcessingStatusLabel: getAgentProcessingStatusLabel(agentProcessingStatus),
    stateLabel: getWorkflowStepLabel(currentState),
    statusLabel: getRunStatusLabel(runStatus),
    progress: getWorkflowProgressPercentage(currentState),
    gateLabel: isWaitingForHuman(currentState, runStatus) ? getHumanGateLabel(currentState) : "",
    allowedActions: getAllowedFrontendActions(currentState, runStatus),
    lastUpdated: formatWorkflowTimestamp(activeDiscovery.updated_at || activeDiscovery.updatedAt || activeDiscovery.created_at || activeDiscovery.createdAt),
    errorMessage: currentState === WORKFLOW_STATES.FAILED || runStatus === RUN_STATUSES.FAILED
      ? activeDiscovery.lastRunStatusError || activeDiscovery.error_message || activeDiscovery.error || "O workflow falhou. Revise os detalhes da run ou tente novamente."
      : "",
  };
}

function shouldShowMvpWorkflow(activeDiscovery = {}) {
  const hasRunContext = Boolean(
    getDiscoveryRunId(activeDiscovery)
    || activeDiscovery.current_state
    || activeDiscovery.workflow_state
    || activeDiscovery.run_status
    || activeDiscovery.runStatusPayload
  );

  return hasRunContext || DISCOVERY_FRONTEND_API_MODE !== DISCOVERY_FRONTEND_API_MODES.LEGACY_CREWAI;
}

function getWorkflowActionLabel(action, state) {
  const gate = HUMAN_GATES[normalizeWorkflowValue(state)];
  if (gate?.approveEvent === action) {
    return gate.primaryAction;
  }

  if (gate?.changeEvent === action) {
    return gate.secondaryAction;
  }

  const labels = {
    [EVENT_TYPES.START_DISCOVERY]: "Iniciar discovery",
    [EVENT_TYPES.SUBMIT_EVIDENCE]: "Enviar evidências",
    [EVENT_TYPES.RETRY_RUN]: "Tentar novamente",
    [EVENT_TYPES.ACCEPT_HANDOFF]: "Aceitar handoff",
    [EVENT_TYPES.REQUEST_HANDOFF_CHANGES]: "Solicitar ajustes no handoff",
  };

  return labels[action] || getNextActionLabel(state);
}

function renderWorkflowTimeline(currentState, status) {
  const currentIndex = getMvpTimelineStepIndex(currentState);
  const isComplete = currentState === WORKFLOW_STATES.COMPLETED || status === RUN_STATUSES.COMPLETED;
  const isFailed = currentState === WORKFLOW_STATES.FAILED || status === RUN_STATUSES.FAILED;

  return `
    <ol class="workflow-timeline" aria-label="Etapas do workflow MVP">
      ${MVP_TIMELINE_STEPS.map((step, index) => {
        const stepClass = index < currentIndex || isComplete
          ? "complete"
          : index === currentIndex
            ? isFailed ? "failed active" : "active"
            : "";
        return `
          <li class="${stepClass}">
            <span>${index + 1}</span>
            <strong>${escapeHTML(step.label)}</strong>
          </li>
        `;
      }).join("")}
    </ol>
  `;
}

function getDiscoveryProgressSteps(activeDiscovery = {}, snapshot = getDiscoveryWorkflowSnapshot(activeDiscovery)) {
  const normalizedMethodology = normalizeDiscoveryMethodology(activeDiscovery);
  const methodSteps = Array.isArray(normalizedMethodology.methods) ? normalizedMethodology.methods.filter(Boolean) : [];
  if (methodSteps.length) {
    const completedCount = methodSteps.filter((method) => Number(method.progress) >= 100).length;
    const currentIndex = Math.min(methodSteps.length - 1, methodSteps.findIndex((method) => Number(method.progress) < 100));
    const safeCurrentIndex = currentIndex >= 0 ? currentIndex : methodSteps.length - 1;
    return methodSteps.map((method, index) => ({
      label: method.name || `Etapa ${index + 1}`,
      state: index < completedCount || Number(method.progress) >= 100
        ? "complete"
        : index === safeCurrentIndex
          ? "current"
          : "upcoming",
    }));
  }

  const currentIndex = getMvpTimelineStepIndex(snapshot.state);
  const isComplete = snapshot.state === WORKFLOW_STATES.COMPLETED || snapshot.status === RUN_STATUSES.COMPLETED;
  return MVP_TIMELINE_STEPS.map((step, index) => ({
    label: step.label,
    state: index < currentIndex || isComplete
      ? "complete"
      : index === currentIndex
        ? "current"
        : "upcoming",
  }));
}

function renderWorkflowCockpit(activeDiscovery = {}) {
  const snapshot = getDiscoveryWorkflowSnapshot(activeDiscovery);
  const normalizedMethodology = normalizeDiscoveryMethodology(activeDiscovery);
  const timelineSteps = getDiscoveryProgressSteps(activeDiscovery, snapshot);

  return `
    <section class="discovery-progress-card card-surface" aria-labelledby="discovery-progress-title">
      <div class="discovery-progress-header">
        <div>
          <span>Agentes de discovery</span>
          <h2 id="discovery-progress-title">Progresso do discovery</h2>
          <p>Etapa atual: ${escapeHTML(snapshot.stateLabel)}</p>
        </div>
        <strong class="discovery-progress-percent">${snapshot.progress}%</strong>
      </div>

      <div class="discovery-progress-track" aria-label="Progresso do workflow de agentes">
        <span style="width: ${snapshot.progress}%"></span>
      </div>

      <div class="discovery-progress-meta">
        <span>${escapeHTML(normalizedMethodology.name)}</span>
        <span>${escapeHTML(snapshot.statusLabel)}</span>
        <span>Status dos agentes: ${escapeHTML(snapshot.agentProcessingStatusLabel)}</span>
        ${snapshot.gateLabel ? `<span>${escapeHTML(snapshot.gateLabel)}</span>` : ""}
      </div>

      <ol class="discovery-timeline" aria-label="Etapas compactas do workflow de agentes">
        ${timelineSteps.map((step) => `
          <li class="discovery-timeline-step is-${escapeHTML(step.state)}">
            <span aria-hidden="true"></span>
            <strong>${escapeHTML(step.label)}</strong>
          </li>
        `).join("")}
      </ol>
      ${snapshot.errorMessage ? `<p class="workflow-error">${escapeHTML(snapshot.errorMessage)}</p>` : ""}
    </section>
  `;
}

function renderDiscoveryWorkflowCockpit(activeDiscovery = {}) {
  const existingPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  if (existingPanel) {
    existingPanel.remove();
  }

  const summary = discoveryPage.querySelector(".discovery-summary");
  if (!summary) {
    return;
  }

  summary.insertAdjacentHTML("afterend", renderWorkflowCockpit(activeDiscovery).replace("<section", "<section data-workflow-cockpit data-discovery-progress-card"));
}

function renderDiscoveryArtifactGroups(groups = {}) {
  const renderedGroups = DISCOVERY_ARTIFACT_GROUPS
    .map((group) => group.renderer(groups[group.key]))
    .filter(Boolean)
    .join("");

  return renderedGroups ? `<div class="artifact-group-list">${renderedGroups}</div>` : "";
}

function renderArtifactsEmptyState(title, message, modifier = "") {
  const modifierClass = modifier ? ` ${modifier}` : "";
  return `
    <div class="artifact-empty-state${modifierClass}">
      <strong>${escapeHTML(title)}</strong>
      <span>${escapeHTML(message)}</span>
    </div>
  `;
}

function renderArtifactsLoadingState() {
  return `
    <div class="artifact-loading-state" role="status">
      <span></span>
      <strong>Carregando artefatos do Discovery AI...</strong>
    </div>
  `;
}

function renderLocalDiscoveryArtifacts(artifacts = []) {
  const localArtifacts = Array.isArray(artifacts) ? artifacts.filter(Boolean) : [];
  if (!localArtifacts.length) {
    return renderArtifactsEmptyState(
      "Artefatos ainda não disponíveis",
      AGENT_OUTPUT_EMPTY_MESSAGE
    );
  }

  return `
    <div class="artifact-local-list" aria-label="Artefatos locais do protótipo">
      ${localArtifacts.map((artifact) => `
        <div class="artifact-row">
          <span>${escapeHTML(artifact)}</span>
          <button type="button" data-discovery-artifact="${escapeHTML(artifact)}">Abrir</button>
        </div>
      `).join("")}
    </div>
  `;
}

function renderDiscoveryArtifactsSection(activeDiscovery = {}) {
  if (!discoveryArtifacts) {
    return;
  }

  const runId = getDiscoveryRunId(activeDiscovery);
  if (!runId) {
    activeArtifactsRequestId += 1;
    discoveryArtifacts.innerHTML = renderLocalDiscoveryArtifacts(activeDiscovery.artifacts);
    return;
  }

  const requestId = activeArtifactsRequestId + 1;
  activeArtifactsRequestId = requestId;
  discoveryArtifacts.innerHTML = renderArtifactsLoadingState();

  loadDiscoveryArtifacts(runId)
    .then((artifactResult) => {
      if (requestId !== activeArtifactsRequestId) {
        return;
      }

      const { raw, groups } = artifactResult;
      const updatedDiscovery = persistDiscoveryRunPatch(runId, activeDiscovery, {
        artifactGroups: groups,
        artifactsPayload: raw,
        updated_at: new Date().toISOString(),
      });
      discoveryArtifacts.innerHTML = renderDiscoveryArtifactGroups(groups) || renderArtifactsEmptyState(
        "Artefatos ainda não disponíveis",
        AGENT_WAITING_MESSAGE
      );
      renderDiscoveryResearchApprovalPanel(updatedDiscovery);
      renderDiscoveryEvidenceUploadPanel(updatedDiscovery);
      renderDiscoveryInsightReviewPanel(updatedDiscovery);
      renderDiscoveryOpportunityReviewPanel(updatedDiscovery);
      renderDiscoveryRecommendationHandoffSection(updatedDiscovery);
    })
    .catch((error) => {
      if (requestId !== activeArtifactsRequestId) {
        return;
      }

      const fallback = renderLocalDiscoveryArtifacts(activeDiscovery.artifacts);
      discoveryArtifacts.innerHTML = `
        ${renderArtifactsEmptyState(
          "Não foi possível carregar artefatos",
          getFriendlyUiErrorMessage(error, "O backend MVP não respondeu com artefatos agora."),
          "artifact-error-state"
        )}
        ${fallback}
      `;
    });
}

function getResearchPlanArtifact(activeDiscovery = {}) {
  const artifactGroups = activeDiscovery.artifactGroups
    || activeDiscovery.discoveryArtifactGroups
    || activeDiscovery.runArtifacts
    || normalizeDiscoveryArtifactsPayload(activeDiscovery.artifactsPayload || {});
  return artifactGroups?.research_plan_package || "";
}

function renderResearchApprovalValue(value, fallback) {
  if (isEmptyArtifactValue(value)) {
    return `<p>${escapeHTML(fallback)}</p>`;
  }

  if (Array.isArray(value)) {
    return `
      <ul>
        ${value.map(renderArtifactListItem).filter(Boolean).join("")}
      </ul>
    `;
  }

  if (typeof value === "object") {
    const entries = Object.entries(value)
      .filter(([, entryValue]) => !isEmptyArtifactValue(entryValue))
      .slice(0, 8);

    if (!entries.length) {
      return `<p>${escapeHTML(fallback)}</p>`;
    }

    return `
      <dl>
        ${entries.map(([key, entryValue]) => `
          <div>
            <dt>${escapeHTML(key.replace(/_/g, " "))}</dt>
            <dd>${escapeHTML(formatArtifactDisplayValue(entryValue))}</dd>
          </div>
        `).join("")}
      </dl>
    `;
  }

  return `<p>${escapeHTML(formatArtifactDisplayValue(value) || fallback)}</p>`;
}

function renderResearchApprovalBlock(title, value, fallback) {
  return `
    <section class="research-approval-block">
      <h3>${escapeHTML(title)}</h3>
      ${renderResearchApprovalValue(value, fallback)}
    </section>
  `;
}

function getResearchApprovalPanelData(activeDiscovery = {}) {
  const plan = getResearchPlanArtifact(activeDiscovery);
  const selectedMethodology = activeDiscovery.selectedMethodology || activeDiscovery.methodology || {};

  return {
    plan,
    summary: getArtifactValue(plan, ["summary", "plan_summary", "research_plan_summary", "description", "executive_summary"])
      || activeDiscovery.objective
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    methodology: getArtifactValue(plan, ["recommended_methodology", "methodology", "methodology_summary", "methodology_name"])
      || selectedMethodology.name
      || activeDiscovery.methodology_name
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    learningGoals: getArtifactValue(plan, ["learning_goals", "goals", "research_goals", "objectives", "learning_objectives"])
      || activeDiscovery.csd?.duvidas
      || activeDiscovery.open_questions
      || [],
    researchQuestions: getArtifactValue(plan, ["research_questions", "questions", "priority_questions", "must_answer_questions"])
      || activeDiscovery.csd?.duvidas
      || [],
    participantStrategy: getArtifactValue(plan, ["participant_strategy", "participants", "recruitment_strategy", "sample_strategy"])
      || activeDiscovery.participants
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    protocolSummary: getArtifactValue(plan, ["protocol_summary", "protocols", "research_protocols", "scripts", "script_summary"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
  };
}

function shouldShowResearchApprovalPanel(activeDiscovery = {}) {
  return normalizeWorkflowValue(activeDiscovery.current_state || activeDiscovery.workflow_state || activeDiscovery.state) === WORKFLOW_STATES.RESEARCH_APPROVAL_PENDING;
}

function renderResearchApprovalPanel(activeDiscovery = {}) {
  const runId = getDiscoveryRunId(activeDiscovery);
  const panelData = getResearchApprovalPanelData(activeDiscovery);
  const hasBackendPlan = hasRenderableArtifact(panelData.plan);

  return `
    <section class="research-approval-panel card-surface" data-research-approval-panel aria-labelledby="research-approval-title">
      <div class="research-approval-header">
        <div>
          <span>Gate humano</span>
          <h2 id="research-approval-title">Aprovação do plano de pesquisa</h2>
        </div>
        <mark>${hasBackendPlan ? "Plano recebido" : "Aguardando artefato"}</mark>
      </div>

      <div class="research-approval-grid">
        ${renderResearchApprovalBlock("Resumo do plano", panelData.summary, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderResearchApprovalBlock("Metodologia", panelData.methodology, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderResearchApprovalBlock("Objetivos de aprendizagem", panelData.learningGoals, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderResearchApprovalBlock("Perguntas de pesquisa", panelData.researchQuestions, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderResearchApprovalBlock("Estratégia de participantes", panelData.participantStrategy, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderResearchApprovalBlock("Resumo do protocolo", panelData.protocolSummary, AGENT_OUTPUT_EMPTY_MESSAGE)}
      </div>

      <label class="research-approval-comment">
        <span>Comentário para ajustes</span>
        <textarea rows="3" placeholder="Descreva o que precisa mudar no plano antes de seguir" data-research-approval-comment></textarea>
      </label>

      <div class="research-approval-actions">
        <button type="button" data-research-approval-action="approve" ${runId ? "" : "disabled"}>Aprovar pesquisa</button>
        <button type="button" class="secondary" data-research-approval-action="changes" ${runId ? "" : "disabled"}>Solicitar ajustes</button>
      </div>

      <p class="research-approval-status" data-research-approval-status role="status" hidden></p>
    </section>
  `;
}

function renderDiscoveryResearchApprovalPanel(activeDiscovery = {}) {
  const existingPanel = discoveryPage.querySelector("[data-research-approval-panel]");
  if (existingPanel) {
    existingPanel.remove();
  }

  if (!shouldShowResearchApprovalPanel(activeDiscovery)) {
    return;
  }

  const workflowPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  const summary = discoveryPage.querySelector(".discovery-summary");
  const anchor = workflowPanel || summary;
  if (!anchor) {
    return;
  }

  anchor.insertAdjacentHTML("afterend", renderResearchApprovalPanel(activeDiscovery));
}

function setResearchApprovalStatus(message = "", type = "info") {
  const status = discoveryPage.querySelector("[data-research-approval-status]");
  if (!status) {
    return;
  }

  status.hidden = !message;
  status.textContent = message;
  status.classList.toggle("success", type === "success");
  status.classList.toggle("error", type === "error");
}

function setResearchApprovalSubmitting(isSubmitting) {
  discoveryPage.querySelectorAll("[data-research-approval-action]").forEach((button) => {
    button.disabled = isSubmitting;
    button.classList.toggle("is-loading", isSubmitting);
  });
}

function showAppToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `app-toast ${type}`;
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => {
    toast.classList.add("leaving");
    window.setTimeout(() => toast.remove(), 180);
  }, 3200);
}

function getActiveDiscoveryForCurrentPage() {
  return findCreatedDiscovery(selectedDiscoveryId)
    || (draftDiscovery?.id === selectedDiscoveryId ? draftDiscovery : null)
    || discoveryTemplate;
}

async function refreshDiscoveryRunAfterResume(runId, activeDiscovery = {}) {
  const statusPayload = await getDiscoveryRunStatus(runId);
  const lifecycle = getDiscoveryRunLifecycle(statusPayload, activeDiscovery);
  let updatedDiscovery = persistDiscoveryRunPatch(runId, activeDiscovery, {
    ...lifecycle,
    runStatusPayload: statusPayload,
    updated_at: statusPayload.updated_at || statusPayload.data?.updated_at || new Date().toISOString(),
  });

  try {
    const artifactResult = await loadDiscoveryArtifacts(runId);
    updatedDiscovery = persistDiscoveryRunPatch(runId, updatedDiscovery, {
      artifactGroups: artifactResult.groups,
      artifactsPayload: artifactResult.raw,
      updated_at: new Date().toISOString(),
    });

    if (selectedDiscoveryId === updatedDiscovery.id && discoveryArtifacts) {
      discoveryArtifacts.innerHTML = renderDiscoveryArtifactGroups(artifactResult.groups) || renderArtifactsEmptyState(
        "Artefatos ainda não disponíveis",
        "A run existe, mas o backend ainda não retornou nenhum pacote de artefatos para renderizar."
      );
    }
  } catch (error) {
    updatedDiscovery = persistDiscoveryRunPatch(runId, updatedDiscovery, {
      lastArtifactRefreshError: getFriendlyUiErrorMessage(error, "Não foi possível atualizar os artefatos."),
      updated_at: new Date().toISOString(),
    });
    renderDiscoveryArtifactsSection(updatedDiscovery);
  }

  updateDiscoveryRunStatusOnPage(updatedDiscovery);
  return updatedDiscovery;
}

async function handleResearchApprovalAction(action) {
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const runId = getDiscoveryRunId(activeDiscovery);
  if (!runId) {
    setResearchApprovalStatus("Não há run_id para retomar este workflow.", "error");
    return;
  }

  const commentInput = discoveryPage.querySelector("[data-research-approval-comment]");
  const comment = commentInput?.value.trim() || "";
  const isChangeRequest = action === "changes";
  if (isChangeRequest && !comment) {
    setResearchApprovalStatus("Inclua um comentário para solicitar ajustes no plano.", "error");
    commentInput?.focus();
    return;
  }

  const eventType = isChangeRequest ? EVENT_TYPES.REQUEST_RESEARCH_CHANGES : EVENT_TYPES.APPROVE_RESEARCH;
  const payload = isChangeRequest ? { comment } : {};

  setResearchApprovalSubmitting(true);
  setResearchApprovalStatus(isChangeRequest ? "Enviando solicitação de ajustes..." : "Aprovando plano de pesquisa...");

  try {
    const resumePayload = await resumeDiscoveryRun(runId, eventType, payload);
    const discoveryAfterResume = persistDiscoveryRunPatch(runId, activeDiscovery, {
      lastResumePayload: resumePayload,
      lastResearchApprovalEvent: eventType,
      lastResearchApprovalComment: comment,
      updated_at: new Date().toISOString(),
    });
    const updatedDiscovery = await refreshDiscoveryRunAfterResume(runId, discoveryAfterResume);
    setResearchApprovalStatus(isChangeRequest ? "Ajustes solicitados com sucesso." : "Plano de pesquisa aprovado com sucesso.", "success");
    showAppToast(isChangeRequest ? "Ajustes solicitados no plano de pesquisa." : "Plano de pesquisa aprovado.", "success");

    if (!shouldShowResearchApprovalPanel(updatedDiscovery)) {
      renderDiscoveryResearchApprovalPanel(updatedDiscovery);
    }
  } catch (error) {
    setResearchApprovalStatus(getFriendlyUiErrorMessage(error, "Não foi possível concluir a ação do gate."), "error");
    showAppToast("Não foi possível atualizar o gate de pesquisa.", "error");
  } finally {
    setResearchApprovalSubmitting(false);
  }
}

function shouldShowEvidenceUploadPanel(activeDiscovery = {}) {
  return normalizeWorkflowValue(activeDiscovery.current_state || activeDiscovery.workflow_state || activeDiscovery.state) === WORKFLOW_STATES.EVIDENCE_UPLOAD_PENDING;
}

function getPendingEvidenceItems(activeDiscovery = getActiveDiscoveryForCurrentPage()) {
  return Array.isArray(activeDiscovery.pendingEvidenceItems) ? activeDiscovery.pendingEvidenceItems : [];
}

function persistPendingEvidenceItems(items = []) {
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const runId = getDiscoveryRunId(activeDiscovery);
  return persistDiscoveryRunPatch(runId, activeDiscovery, {
    pendingEvidenceItems: items,
    updated_at: new Date().toISOString(),
  });
}

function getEvidenceInventoryArtifact(activeDiscovery = {}) {
  const artifactGroups = activeDiscovery.artifactGroups
    || activeDiscovery.discoveryArtifactGroups
    || activeDiscovery.runArtifacts
    || normalizeDiscoveryArtifactsPayload(activeDiscovery.artifactsPayload || {});
  return artifactGroups?.evidence_inventory || "";
}

function getEvidenceInventorySummary(activeDiscovery = {}) {
  const inventory = getEvidenceInventoryArtifact(activeDiscovery);
  const total = getArtifactValue(inventory, ["total", "count", "evidence_count"]);
  const status = getArtifactValue(inventory, ["inventory_status", "status", "coverage_status"]);
  const gaps = asArray(getArtifactValue(inventory, ["gaps", "missing_evidence", "missing_items"]));

  if (!hasRenderableArtifact(inventory)) {
    return AGENT_WAITING_MESSAGE;
  }

  return [
    total ? `${formatArtifactDisplayValue(total)} evidência(s)` : "",
    status ? formatArtifactDisplayValue(status) : "",
    gaps.length ? `${gaps.length} lacuna(s) mapeada(s)` : "",
  ].filter(Boolean).join(" · ") || "Inventário de evidências disponível.";
}

function renderEvidenceUploadItems(items = []) {
  if (!items.length) {
    return `
      <div class="evidence-upload-empty">
        <strong>Nenhuma evidência adicionada</strong>
        <span>${AGENT_WAITING_MESSAGE}</span>
      </div>
    `;
  }

  return `
    <div class="evidence-upload-list" aria-label="Evidências pendentes">
      ${items.map((item, index) => `
        <article class="evidence-upload-item">
          <div>
            <strong>${escapeHTML(item.title)}</strong>
            <span>${escapeHTML([item.source_type, item.participant_or_segment, item.evidence_date].filter(Boolean).join(" · ") || "Sem metadados")}</span>
            <p>${escapeHTML(item.notes)}</p>
          </div>
          <button type="button" data-evidence-remove="${index}" aria-label="Remover evidência ${escapeHTML(item.title)}">Remover</button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderEvidenceUploadPanel(activeDiscovery = {}) {
  const runId = getDiscoveryRunId(activeDiscovery);
  const items = getPendingEvidenceItems(activeDiscovery);

  return `
    <section class="evidence-upload-panel card-surface" data-evidence-upload-panel aria-labelledby="evidence-upload-title">
      <div class="evidence-upload-header">
        <div>
          <span>Gate humano</span>
          <h2 id="evidence-upload-title">Envio de evidências</h2>
          <p>${escapeHTML(getEvidenceInventorySummary(activeDiscovery))}</p>
        </div>
        <mark>${items.length} pendente${items.length === 1 ? "" : "s"}</mark>
      </div>

      <form class="evidence-upload-form" data-evidence-upload-form>
        <label>
          <span>Título da evidência</span>
          <input type="text" data-evidence-title placeholder="Ex.: Entrevista com coordenador de vendas" />
        </label>
        <label>
          <span>Tipo de fonte</span>
          <select data-evidence-source-type>
            <option value="">Selecione</option>
            <option value="interview">Entrevista</option>
            <option value="survey">Survey</option>
            <option value="desk_research">Desk research</option>
            <option value="analytics">Analytics</option>
            <option value="support_ticket">Ticket de suporte</option>
            <option value="other">Outro</option>
          </select>
        </label>
        <label>
          <span>Participante ou segmento</span>
          <input type="text" data-evidence-participant placeholder="Ex.: Promotores ativos SP" />
        </label>
        <label>
          <span>Data opcional</span>
          <input type="date" data-evidence-date />
        </label>
        <label class="evidence-upload-notes">
          <span>Notas ou transcrição</span>
          <textarea rows="5" data-evidence-notes placeholder="Cole aqui notas, transcrição, observações ou achados textuais"></textarea>
        </label>

        <div class="evidence-upload-actions">
          <button type="submit">Adicionar evidência</button>
          <button type="button" class="secondary" data-evidence-submit ${runId && items.length ? "" : "disabled"}>Enviar evidências</button>
        </div>
      </form>

      <div data-evidence-upload-items>
        ${renderEvidenceUploadItems(items)}
      </div>

      <p class="evidence-upload-status" data-evidence-upload-status role="status" hidden></p>
    </section>
  `;
}

function renderDiscoveryEvidenceUploadPanel(activeDiscovery = {}) {
  const existingPanel = discoveryPage.querySelector("[data-evidence-upload-panel]");
  if (existingPanel) {
    existingPanel.remove();
  }

  if (!shouldShowEvidenceUploadPanel(activeDiscovery)) {
    return;
  }

  const workflowPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  const researchPanel = discoveryPage.querySelector("[data-research-approval-panel]");
  const summary = discoveryPage.querySelector(".discovery-summary");
  const anchor = researchPanel || workflowPanel || summary;
  if (!anchor) {
    return;
  }

  anchor.insertAdjacentHTML("afterend", renderEvidenceUploadPanel(activeDiscovery));
}

function setEvidenceUploadStatus(message = "", type = "info") {
  const status = discoveryPage.querySelector("[data-evidence-upload-status]");
  if (!status) {
    return;
  }

  status.hidden = !message;
  status.textContent = message;
  status.classList.toggle("success", type === "success");
  status.classList.toggle("error", type === "error");
}

function setEvidenceUploadSubmitting(isSubmitting) {
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const hasRun = Boolean(getDiscoveryRunId(activeDiscovery));
  const hasItems = getPendingEvidenceItems(activeDiscovery).length > 0;
  discoveryPage.querySelectorAll("[data-evidence-upload-form] button, [data-evidence-upload-form] input, [data-evidence-upload-form] select, [data-evidence-upload-form] textarea").forEach((element) => {
    if (element.matches("[data-evidence-submit]")) {
      element.disabled = isSubmitting || !hasRun || !hasItems;
      element.classList.toggle("is-loading", isSubmitting);
      return;
    }

    element.disabled = isSubmitting;
  });
}

function collectEvidenceFormItem() {
  const titleInput = discoveryPage.querySelector("[data-evidence-title]");
  const sourceInput = discoveryPage.querySelector("[data-evidence-source-type]");
  const participantInput = discoveryPage.querySelector("[data-evidence-participant]");
  const notesInput = discoveryPage.querySelector("[data-evidence-notes]");
  const dateInput = discoveryPage.querySelector("[data-evidence-date]");
  const title = titleInput?.value.trim() || "";
  const sourceType = sourceInput?.value.trim() || "";
  const notes = notesInput?.value.trim() || "";

  if (!title) {
    setEvidenceUploadStatus("Informe um título para a evidência.", "error");
    titleInput?.focus();
    return null;
  }

  if (!sourceType) {
    setEvidenceUploadStatus("Selecione o tipo de fonte.", "error");
    sourceInput?.focus();
    return null;
  }

  if (!notes) {
    setEvidenceUploadStatus("Inclua notas ou transcrição antes de adicionar.", "error");
    notesInput?.focus();
    return null;
  }

  return {
    title,
    source_type: sourceType,
    participant_or_segment: participantInput?.value.trim() || "",
    notes,
    evidence_date: dateInput?.value || "",
    created_at: new Date().toISOString(),
  };
}

function resetEvidenceUploadForm() {
  const form = discoveryPage.querySelector("[data-evidence-upload-form]");
  form?.reset();
}

function addEvidenceUploadItem() {
  const item = collectEvidenceFormItem();
  if (!item) {
    return;
  }

  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const items = [...getPendingEvidenceItems(activeDiscovery), item];
  const updatedDiscovery = persistPendingEvidenceItems(items);
  renderDiscoveryEvidenceUploadPanel(updatedDiscovery);
  setEvidenceUploadStatus("Evidência adicionada à fila de envio.", "success");
  resetEvidenceUploadForm();
}

function removeEvidenceUploadItem(index) {
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const items = getPendingEvidenceItems(activeDiscovery).filter((_, itemIndex) => itemIndex !== index);
  const updatedDiscovery = persistPendingEvidenceItems(items);
  renderDiscoveryEvidenceUploadPanel(updatedDiscovery);
  setEvidenceUploadStatus(items.length ? "Evidência removida da fila." : "Fila de evidências vazia.");
}

async function handleEvidenceUploadSubmit() {
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const runId = getDiscoveryRunId(activeDiscovery);
  const evidenceItems = getPendingEvidenceItems(activeDiscovery);

  if (!runId) {
    setEvidenceUploadStatus("Não há run_id para enviar evidências neste workflow.", "error");
    return;
  }

  if (!evidenceItems.length) {
    setEvidenceUploadStatus("Adicione ao menos uma evidência antes de submeter.", "error");
    return;
  }

  setEvidenceUploadSubmitting(true);
  setEvidenceUploadStatus("Enviando evidências para o backend MVP...");

  try {
    const uploadPayload = await uploadDiscoveryEvidence(runId, evidenceItems);
    const uploadedAt = new Date().toISOString();
    const discoveryAfterUpload = persistDiscoveryRunPatch(runId, activeDiscovery, {
      pendingEvidenceItems: [],
      uploadedEvidenceItems: [
        ...(Array.isArray(activeDiscovery.uploadedEvidenceItems) ? activeDiscovery.uploadedEvidenceItems : []),
        ...evidenceItems.map((item) => ({ ...item, uploaded_at: uploadedAt })),
      ],
      lastEvidenceUploadPayload: uploadPayload,
      updated_at: uploadedAt,
    });
    const updatedDiscovery = await refreshDiscoveryRunAfterResume(runId, discoveryAfterUpload);
    showAppToast("Evidências enviadas para o Discovery AI.", "success");
    renderDiscoveryEvidenceUploadPanel(updatedDiscovery);
    setEvidenceUploadStatus("Evidências enviadas com sucesso.", "success");
  } catch (error) {
    setEvidenceUploadStatus(getFriendlyUiErrorMessage(error, "Não foi possível enviar as evidências."), "error");
    showAppToast("Não foi possível enviar evidências.", "error");
  } finally {
    setEvidenceUploadSubmitting(false);
  }
}

function getInsightsReviewArtifact(activeDiscovery = {}) {
  const artifactGroups = activeDiscovery.artifactGroups
    || activeDiscovery.discoveryArtifactGroups
    || activeDiscovery.runArtifacts
    || normalizeDiscoveryArtifactsPayload(activeDiscovery.artifactsPayload || {});
  return artifactGroups?.insights_package || "";
}

function shouldShowInsightReviewPanel(activeDiscovery = {}) {
  return normalizeWorkflowValue(activeDiscovery.current_state || activeDiscovery.workflow_state || activeDiscovery.state) === WORKFLOW_STATES.INSIGHT_REVIEW_PENDING;
}

function getInsightReviewPanelData(activeDiscovery = {}) {
  const insights = getInsightsReviewArtifact(activeDiscovery);

  return {
    insights,
    summary: getArtifactValue(insights, ["synthesis_summary", "summary", "executive_summary", "description"])
      || getDiscoveryInsightTexts(activeDiscovery).join(" ")
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    keyPatterns: getArtifactValue(insights, ["key_patterns", "patterns", "themes"])
      || [],
    validatedInsights: getArtifactValue(insights, ["validated_insights", "insights", "key_insights", "updated_insights"])
      || getDiscoveryInsightTexts(activeDiscovery)
      || [],
    evidenceStrength: getArtifactValue(insights, ["evidence_strength", "confidence", "confidence_level", "evidence_confidence", "supporting_evidence"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    contradictions: getArtifactValue(insights, ["contradictions", "warnings", "tensions", "risks"])
      || [],
    unsupportedClaims: getArtifactValue(insights, ["unsupported_claims", "unsupported", "weak_claims", "claims_without_evidence"])
      || [],
  };
}

function renderInsightReviewBlock(title, value, fallback) {
  return `
    <section class="insight-review-block">
      <h3>${escapeHTML(title)}</h3>
      ${renderResearchApprovalValue(value, fallback)}
    </section>
  `;
}

function renderInsightReviewPanel(activeDiscovery = {}) {
  const runId = getDiscoveryRunId(activeDiscovery);
  const panelData = getInsightReviewPanelData(activeDiscovery);
  const hasBackendInsights = hasRenderableArtifact(panelData.insights);

  return `
    <section class="insight-review-panel card-surface" data-insight-review-panel aria-labelledby="insight-review-title">
      <div class="insight-review-header">
        <div>
          <span>Gate humano</span>
          <h2 id="insight-review-title">Revisão de insights</h2>
        </div>
        <mark>${hasBackendInsights ? "Síntese recebida" : "Aguardando artefato"}</mark>
      </div>

      <div class="insight-review-grid">
        ${renderInsightReviewBlock("Resumo da síntese", panelData.summary, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderInsightReviewBlock("Padrões-chave", panelData.keyPatterns, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderInsightReviewBlock("Insights validados", panelData.validatedInsights, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderInsightReviewBlock("Força da evidência/confiança", panelData.evidenceStrength, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderInsightReviewBlock("Contradições ou alertas", panelData.contradictions, "Nenhuma contradição ou alerta informado.")}
        ${renderInsightReviewBlock("Claims sem suporte", panelData.unsupportedClaims, "Nenhum claim sem suporte informado.")}
      </div>

      ${hasBackendInsights ? renderInsightsArtifact(panelData.insights) : ""}

      <label class="insight-review-comment">
        <span>Comentário para revisão</span>
        <textarea rows="3" placeholder="Descreva o que precisa ser revisado na síntese" data-insight-review-comment></textarea>
      </label>

      <div class="insight-review-actions">
        <button type="button" data-insight-review-action="approve" ${runId ? "" : "disabled"}>Aprovar insights</button>
        <button type="button" class="secondary" data-insight-review-action="review" ${runId ? "" : "disabled"}>Solicitar revisão</button>
      </div>

      <p class="insight-review-status" data-insight-review-status role="status" hidden></p>
    </section>
  `;
}

function renderDiscoveryInsightReviewPanel(activeDiscovery = {}) {
  const existingPanel = discoveryPage.querySelector("[data-insight-review-panel]");
  if (existingPanel) {
    existingPanel.remove();
  }

  if (!shouldShowInsightReviewPanel(activeDiscovery)) {
    return;
  }

  const evidencePanel = discoveryPage.querySelector("[data-evidence-upload-panel]");
  const researchPanel = discoveryPage.querySelector("[data-research-approval-panel]");
  const workflowPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  const summary = discoveryPage.querySelector(".discovery-summary");
  const anchor = evidencePanel || researchPanel || workflowPanel || summary;
  if (!anchor) {
    return;
  }

  anchor.insertAdjacentHTML("afterend", renderInsightReviewPanel(activeDiscovery));
}

function setInsightReviewStatus(message = "", type = "info") {
  const status = discoveryPage.querySelector("[data-insight-review-status]");
  if (!status) {
    return;
  }

  status.hidden = !message;
  status.textContent = message;
  status.classList.toggle("success", type === "success");
  status.classList.toggle("error", type === "error");
}

function setInsightReviewSubmitting(isSubmitting) {
  discoveryPage.querySelectorAll("[data-insight-review-action]").forEach((button) => {
    button.disabled = isSubmitting;
    button.classList.toggle("is-loading", isSubmitting);
  });
}

async function handleInsightReviewAction(action) {
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const runId = getDiscoveryRunId(activeDiscovery);
  if (!runId) {
    setInsightReviewStatus("Não há run_id para retomar este workflow.", "error");
    return;
  }

  const commentInput = discoveryPage.querySelector("[data-insight-review-comment]");
  const comment = commentInput?.value.trim() || "";
  const isReviewRequest = action === "review";
  if (isReviewRequest && !comment) {
    setInsightReviewStatus("Inclua um comentário para solicitar revisão da síntese.", "error");
    commentInput?.focus();
    return;
  }

  const eventType = isReviewRequest ? EVENT_TYPES.REQUEST_SYNTHESIS_REVIEW : EVENT_TYPES.APPROVE_INSIGHTS;
  const payload = isReviewRequest ? { comment } : {};

  setInsightReviewSubmitting(true);
  setInsightReviewStatus(isReviewRequest ? "Enviando solicitação de revisão..." : "Aprovando insights...");

  try {
    const resumePayload = await resumeDiscoveryRun(runId, eventType, payload);
    const discoveryAfterResume = persistDiscoveryRunPatch(runId, activeDiscovery, {
      lastResumePayload: resumePayload,
      lastInsightReviewEvent: eventType,
      lastInsightReviewComment: comment,
      updated_at: new Date().toISOString(),
    });
    const updatedDiscovery = await refreshDiscoveryRunAfterResume(runId, discoveryAfterResume);
    setInsightReviewStatus(isReviewRequest ? "Revisão da síntese solicitada com sucesso." : "Insights aprovados com sucesso.", "success");
    showAppToast(isReviewRequest ? "Revisão da síntese solicitada." : "Insights aprovados.", "success");

    if (!shouldShowInsightReviewPanel(updatedDiscovery)) {
      renderDiscoveryInsightReviewPanel(updatedDiscovery);
    }
  } catch (error) {
    setInsightReviewStatus(getFriendlyUiErrorMessage(error, "Não foi possível concluir a ação do gate de insights."), "error");
    showAppToast("Não foi possível atualizar o gate de insights.", "error");
  } finally {
    setInsightReviewSubmitting(false);
  }
}

function getOpportunityReviewArtifact(activeDiscovery = {}) {
  const artifactGroups = activeDiscovery.artifactGroups
    || activeDiscovery.discoveryArtifactGroups
    || activeDiscovery.runArtifacts
    || normalizeDiscoveryArtifactsPayload(activeDiscovery.artifactsPayload || {});
  return artifactGroups?.opportunity_package || "";
}

function shouldShowOpportunityReviewPanel(activeDiscovery = {}) {
  return normalizeWorkflowValue(activeDiscovery.current_state || activeDiscovery.workflow_state || activeDiscovery.state) === WORKFLOW_STATES.OPPORTUNITY_REVIEW_PENDING;
}

function getOpportunityScores(opportunityPackage = {}) {
  const scores = getArtifactValue(opportunityPackage, ["scores", "scorecard", "scoring", "priority_scores"]);
  if (hasRenderableArtifact(scores)) {
    return scores;
  }

  const scoreParts = {
    confidence: getArtifactValue(opportunityPackage, ["confidence", "confidence_score"]),
    impact: getArtifactValue(opportunityPackage, ["impact", "impact_score"]),
    risk: getArtifactValue(opportunityPackage, ["risk", "risk_score"]),
  };

  return Object.values(scoreParts).some((value) => !isEmptyArtifactValue(value)) ? scoreParts : "";
}

function getOpportunityReviewPanelData(activeDiscovery = {}) {
  const opportunityPackage = getOpportunityReviewArtifact(activeDiscovery);

  return {
    opportunityPackage,
    solutionTree: getArtifactValue(opportunityPackage, ["opportunity_solution_tree", "solution_tree", "opportunity_tree", "tree"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    prioritizedOpportunities: getArtifactValue(opportunityPackage, ["prioritized_opportunities", "opportunities", "mapped_opportunities"])
      || [],
    supportingInsights: getArtifactValue(opportunityPackage, ["supporting_insights", "insights", "evidence", "supporting_evidence"])
      || [],
    scores: getOpportunityScores(opportunityPackage)
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    recommendedFocusArea: getArtifactValue(opportunityPackage, ["recommended_focus_area", "focus_area", "strategic_focus_area", "focus"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    deferredOpportunities: getArtifactValue(opportunityPackage, ["deferred_opportunities", "deprioritized_opportunities", "out_of_scope", "parking_lot"])
      || [],
  };
}

function renderOpportunityReviewBlock(title, value, fallback) {
  return `
    <section class="opportunity-review-block">
      <h3>${escapeHTML(title)}</h3>
      ${renderResearchApprovalValue(value, fallback)}
    </section>
  `;
}

function renderOpportunityReviewPanel(activeDiscovery = {}) {
  const runId = getDiscoveryRunId(activeDiscovery);
  const panelData = getOpportunityReviewPanelData(activeDiscovery);
  const hasBackendOpportunities = hasRenderableArtifact(panelData.opportunityPackage);

  return `
    <section class="opportunity-review-panel card-surface" data-opportunity-review-panel aria-labelledby="opportunity-review-title">
      <div class="opportunity-review-header">
        <div>
          <span>Gate humano</span>
          <h2 id="opportunity-review-title">Revisão de oportunidades</h2>
        </div>
        <mark>${hasBackendOpportunities ? "Oportunidades recebidas" : "Aguardando artefato"}</mark>
      </div>

      <div class="opportunity-review-grid">
        ${renderOpportunityReviewBlock("Árvore de solução", panelData.solutionTree, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderOpportunityReviewBlock("Oportunidades priorizadas", panelData.prioritizedOpportunities, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderOpportunityReviewBlock("Insights de suporte", panelData.supportingInsights, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderOpportunityReviewBlock("Scores de confiança/impacto/risco", panelData.scores, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderOpportunityReviewBlock("Área de foco recomendada", panelData.recommendedFocusArea, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderOpportunityReviewBlock("Oportunidades postergadas", panelData.deferredOpportunities, "Nenhuma oportunidade postergada informada.")}
      </div>

      ${hasBackendOpportunities ? renderOpportunityArtifact(panelData.opportunityPackage) : ""}

      <label class="opportunity-review-comment">
        <span>Comentário para ajustes</span>
        <textarea rows="3" placeholder="Descreva o que precisa mudar nas oportunidades mapeadas" data-opportunity-review-comment></textarea>
      </label>

      <div class="opportunity-review-actions">
        <button type="button" data-opportunity-review-action="approve" ${runId ? "" : "disabled"}>Aprovar oportunidades</button>
        <button type="button" class="secondary" data-opportunity-review-action="changes" ${runId ? "" : "disabled"}>Solicitar ajustes</button>
      </div>

      <p class="opportunity-review-status" data-opportunity-review-status role="status" hidden></p>
    </section>
  `;
}

function renderDiscoveryOpportunityReviewPanel(activeDiscovery = {}) {
  const existingPanel = discoveryPage.querySelector("[data-opportunity-review-panel]");
  if (existingPanel) {
    existingPanel.remove();
  }

  if (!shouldShowOpportunityReviewPanel(activeDiscovery)) {
    return;
  }

  const insightPanel = discoveryPage.querySelector("[data-insight-review-panel]");
  const evidencePanel = discoveryPage.querySelector("[data-evidence-upload-panel]");
  const researchPanel = discoveryPage.querySelector("[data-research-approval-panel]");
  const workflowPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  const summary = discoveryPage.querySelector(".discovery-summary");
  const anchor = insightPanel || evidencePanel || researchPanel || workflowPanel || summary;
  if (!anchor) {
    return;
  }

  anchor.insertAdjacentHTML("afterend", renderOpportunityReviewPanel(activeDiscovery));
}

function setOpportunityReviewStatus(message = "", type = "info") {
  const status = discoveryPage.querySelector("[data-opportunity-review-status]");
  if (!status) {
    return;
  }

  status.hidden = !message;
  status.textContent = message;
  status.classList.toggle("success", type === "success");
  status.classList.toggle("error", type === "error");
}

function setOpportunityReviewSubmitting(isSubmitting) {
  discoveryPage.querySelectorAll("[data-opportunity-review-action]").forEach((button) => {
    button.disabled = isSubmitting;
    button.classList.toggle("is-loading", isSubmitting);
  });
}

async function handleOpportunityReviewAction(action) {
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const runId = getDiscoveryRunId(activeDiscovery);
  if (!runId) {
    setOpportunityReviewStatus("Não há run_id para retomar este workflow.", "error");
    return;
  }

  const commentInput = discoveryPage.querySelector("[data-opportunity-review-comment]");
  const comment = commentInput?.value.trim() || "";
  const isChangeRequest = action === "changes";
  if (isChangeRequest && !comment) {
    setOpportunityReviewStatus("Inclua um comentário para solicitar ajustes nas oportunidades.", "error");
    commentInput?.focus();
    return;
  }

  const eventType = isChangeRequest ? EVENT_TYPES.REQUEST_OPPORTUNITY_REVIEW : EVENT_TYPES.APPROVE_OPPORTUNITIES;
  const payload = isChangeRequest ? { comment } : {};

  setOpportunityReviewSubmitting(true);
  setOpportunityReviewStatus(isChangeRequest ? "Enviando solicitação de ajustes..." : "Aprovando oportunidades...");

  try {
    const resumePayload = await resumeDiscoveryRun(runId, eventType, payload);
    const discoveryAfterResume = persistDiscoveryRunPatch(runId, activeDiscovery, {
      lastResumePayload: resumePayload,
      lastOpportunityReviewEvent: eventType,
      lastOpportunityReviewComment: comment,
      updated_at: new Date().toISOString(),
    });
    const updatedDiscovery = await refreshDiscoveryRunAfterResume(runId, discoveryAfterResume);
    setOpportunityReviewStatus(isChangeRequest ? "Ajustes nas oportunidades solicitados com sucesso." : "Oportunidades aprovadas com sucesso.", "success");
    showAppToast(isChangeRequest ? "Ajustes solicitados nas oportunidades." : "Oportunidades aprovadas.", "success");

    if (!shouldShowOpportunityReviewPanel(updatedDiscovery)) {
      renderDiscoveryOpportunityReviewPanel(updatedDiscovery);
    }
  } catch (error) {
    setOpportunityReviewStatus(getFriendlyUiErrorMessage(error, "Não foi possível concluir a ação do gate de oportunidades."), "error");
    showAppToast("Não foi possível atualizar o gate de oportunidades.", "error");
  } finally {
    setOpportunityReviewSubmitting(false);
  }
}

function getRecommendationHandoffArtifacts(activeDiscovery = {}) {
  const artifactGroups = activeDiscovery.artifactGroups
    || activeDiscovery.discoveryArtifactGroups
    || activeDiscovery.runArtifacts
    || normalizeDiscoveryArtifactsPayload(activeDiscovery.artifactsPayload || {});

  return {
    recommendation: artifactGroups?.recommendation || "",
    handoff: artifactGroups?.handoff || "",
  };
}

function hasRecommendationHandoffPackage(activeDiscovery = {}) {
  const { recommendation, handoff } = getRecommendationHandoffArtifacts(activeDiscovery);
  return hasRenderableArtifact(recommendation) || hasRenderableArtifact(handoff);
}

function shouldShowRecommendationHandoffSection(activeDiscovery = {}) {
  const state = normalizeWorkflowValue(activeDiscovery.current_state || activeDiscovery.workflow_state || activeDiscovery.state);
  return hasRecommendationHandoffPackage(activeDiscovery)
    || [WORKFLOW_STATES.RECOMMENDATION_RUNNING, WORKFLOW_STATES.HANDOFF_RUNNING, WORKFLOW_STATES.COMPLETED].includes(state);
}

function getRecommendationHandoffPanelData(activeDiscovery = {}) {
  const { recommendation, handoff } = getRecommendationHandoffArtifacts(activeDiscovery);

  return {
    recommendation,
    handoff,
    recommendationType: getArtifactValue(recommendation, ["recommendation_type", "type", "decision_type", "recommendation_category"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    executiveSummary: getArtifactValue(recommendation, ["executive_summary", "summary", "recommendation_summary", "description"])
      || getArtifactValue(handoff, ["executive_summary", "summary", "handoff_summary"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    decisionRationale: getArtifactValue(recommendation, ["decision_rationale", "rationale", "reasoning", "evidence_based_rationale"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    confidenceLevel: getArtifactValue(recommendation, ["confidence_level", "confidence", "evidence_confidence"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    risks: getArtifactValue(recommendation, ["risks", "watchouts", "known_risks"])
      || getArtifactValue(handoff, ["risks", "open_risks"])
      || [],
    nextSteps: getArtifactValue(recommendation, ["next_steps", "actions", "recommended_actions"])
      || getArtifactValue(handoff, ["next_steps", "handoff_next_steps"])
      || [],
    deliveryRequirements: getArtifactValue(handoff, ["delivery_requirements_summary", "requirements_summary", "delivery_requirements", "requirements"])
      || getArtifactValue(recommendation, ["delivery_requirements", "prototype_requirements"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
    userStoriesOrJobs: getArtifactValue(handoff, ["user_stories", "jobs_to_be_done", "jobs", "stories"])
      || getArtifactValue(recommendation, ["user_stories", "jobs_to_be_done", "jobs"])
      || [],
    acceptanceCriteria: getArtifactValue(handoff, ["acceptance_criteria", "checklist", "definition_of_done"])
      || [],
    analyticsToTrack: getArtifactValue(handoff, ["analytics_to_track", "analytics", "metrics", "kpis"])
      || getArtifactValue(recommendation, ["success_metrics", "metrics", "kpis"])
      || [],
    openQuestions: getArtifactValue(handoff, ["open_questions", "pending_questions", "questions"])
      || getArtifactValue(recommendation, ["open_questions", "questions"])
      || [],
    traceabilityMap: getArtifactValue(handoff, ["traceability_map_summary", "traceability_summary", "traceability_map", "evidence_traceability"])
      || getArtifactValue(recommendation, ["traceability_map_summary", "traceability_map"])
      || AGENT_OUTPUT_EMPTY_MESSAGE,
  };
}

function renderRecommendationHandoffBlock(title, value, fallback) {
  return `
    <section class="recommendation-handoff-block">
      <h3>${escapeHTML(title)}</h3>
      ${renderResearchApprovalValue(value, fallback)}
    </section>
  `;
}

function isDiscoveryCompleted(activeDiscovery = {}) {
  const state = normalizeWorkflowValue(activeDiscovery.current_state || activeDiscovery.workflow_state || activeDiscovery.state);
  const status = normalizeRunStatusForWorkflow(activeDiscovery.run_status || activeDiscovery.status, state);
  return state === WORKFLOW_STATES.COMPLETED || status === RUN_STATUSES.COMPLETED;
}

function renderRecommendationHandoffSection(activeDiscovery = {}) {
  const panelData = getRecommendationHandoffPanelData(activeDiscovery);
  const hasRecommendation = hasRenderableArtifact(panelData.recommendation);
  const hasHandoff = hasRenderableArtifact(panelData.handoff);
  const isComplete = isDiscoveryCompleted(activeDiscovery);
  const packageStatus = isComplete
    ? "Run concluída"
    : hasRecommendation && hasHandoff
      ? "Pacote pronto para revisão"
      : "Pacote em montagem";

  return `
    <section class="recommendation-handoff-panel card-surface" data-recommendation-handoff-panel aria-labelledby="recommendation-handoff-title">
      <div class="recommendation-handoff-header">
        <div>
          <span>Recommendation & Handoff</span>
          <h2 id="recommendation-handoff-title">${isComplete ? "Discovery concluído" : "Recommendation & Handoff"}</h2>
          <p>${isComplete ? "Pacote executivo final disponível para alinhamento e passagem para delivery." : "Consolidação executiva gerada a partir dos artefatos finais do workflow."}</p>
        </div>
        <mark>${escapeHTML(packageStatus)}</mark>
      </div>

      ${isComplete ? `
        <div class="recommendation-final-state" role="status">
          <strong>Estado final: COMPLETED</strong>
          <span>O workflow terminou. Use este pacote como referência para decisão, handoff e acompanhamento pós-discovery.</span>
        </div>
      ` : ""}

      <div class="recommendation-handoff-actions" aria-label="Ações de exportação">
        <button type="button" data-placeholder-action="copy-recommendation">Copiar resumo</button>
        <button type="button" class="secondary" data-placeholder-action="download-handoff">Download do pacote</button>
      </div>

      <div class="recommendation-handoff-grid">
        ${renderRecommendationHandoffBlock("Tipo de recomendação", panelData.recommendationType, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderRecommendationHandoffBlock("Resumo executivo", panelData.executiveSummary, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderRecommendationHandoffBlock("Racional da decisão", panelData.decisionRationale, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderRecommendationHandoffBlock("Nível de confiança", panelData.confidenceLevel, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderRecommendationHandoffBlock("Riscos", panelData.risks, "Nenhum risco informado.")}
        ${renderRecommendationHandoffBlock("Próximos passos", panelData.nextSteps, "Próximos passos ainda não disponíveis.")}
        ${renderRecommendationHandoffBlock("Resumo dos requisitos de entrega", panelData.deliveryRequirements, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderRecommendationHandoffBlock("User stories ou jobs", panelData.userStoriesOrJobs, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderRecommendationHandoffBlock("Critérios de aceite", panelData.acceptanceCriteria, AGENT_OUTPUT_EMPTY_MESSAGE)}
        ${renderRecommendationHandoffBlock("Analytics para acompanhar", panelData.analyticsToTrack, "Analytics ainda não definidos.")}
        ${renderRecommendationHandoffBlock("Perguntas abertas", panelData.openQuestions, "Nenhuma pergunta aberta informada.")}
        ${renderRecommendationHandoffBlock("Resumo do mapa de rastreabilidade", panelData.traceabilityMap, AGENT_OUTPUT_EMPTY_MESSAGE)}
      </div>

      <div class="recommendation-source-flags" aria-label="Artefatos finais disponíveis">
        <span class="${hasRecommendation ? "available" : ""}">Recommendation ${hasRecommendation ? "disponível" : "pendente"}</span>
        <span class="${hasHandoff ? "available" : ""}">Handoff ${hasHandoff ? "disponível" : "pendente"}</span>
      </div>
    </section>
  `;
}

function renderDiscoveryRecommendationHandoffSection(activeDiscovery = {}) {
  const existingPanel = discoveryPage.querySelector("[data-recommendation-handoff-panel]");
  if (existingPanel) {
    existingPanel.remove();
  }

  if (!shouldShowRecommendationHandoffSection(activeDiscovery)) {
    return;
  }

  const opportunityPanel = discoveryPage.querySelector("[data-opportunity-review-panel]");
  const insightPanel = discoveryPage.querySelector("[data-insight-review-panel]");
  const evidencePanel = discoveryPage.querySelector("[data-evidence-upload-panel]");
  const researchPanel = discoveryPage.querySelector("[data-research-approval-panel]");
  const workflowPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  const summary = discoveryPage.querySelector(".discovery-summary");
  const anchor = opportunityPanel || insightPanel || evidencePanel || researchPanel || workflowPanel || summary;
  if (!anchor) {
    return;
  }

  anchor.insertAdjacentHTML("afterend", renderRecommendationHandoffSection(activeDiscovery));
}

function getDiscoveryPeopleSelection(activeDiscovery = {}, product = getDiscoveryProduct(activeDiscovery)) {
  const normalizedDiscovery = normalizeDiscoveryAudience(activeDiscovery, product);
  const selectedPersonas = resolveDiscoveryPersonas(normalizedDiscovery, product);
  const selectedStakeholders = resolveDiscoveryStakeholders(normalizedDiscovery, product);

  return {
    normalizedDiscovery,
    selectedPersonas,
    selectedStakeholders,
    personaIds: normalizeSelectedPeopleIds(normalizedDiscovery.personaIds),
    stakeholderIds: normalizeSelectedPeopleIds(normalizedDiscovery.stakeholderIds),
  };
}

function getDiscoveryAudienceItemHref(product = {}, kind = "persona", item = {}, mode = "detail") {
  const segment = kind === "stakeholder" ? "stakeholders" : "personas";
  const suffix = mode === "edit" ? "/edit" : "";
  return `#product/${escapeHTML(product.id)}/${segment}/${escapeHTML(item.id)}${suffix}`;
}

function renderDiscoveryPeopleChips(items = [], kind = "persona", limit = 3) {
  const visibleItems = items.slice(0, limit);
  const hiddenCount = Math.max(0, items.length - visibleItems.length);
  const fallbackLabel = kind === "stakeholder" ? "Stakeholder" : "Persona";

  if (!items.length) {
    return `<span class="discovery-people-chip muted">${escapeHTML(kind === "stakeholder" ? "Nenhum stakeholder" : "Nenhuma persona")}</span>`;
  }

  return `
    ${visibleItems.map((item) => `<span class="discovery-people-chip">${escapeHTML(item.name || fallbackLabel)}</span>`).join("")}
    ${hiddenCount ? `<span class="discovery-people-chip more">+${hiddenCount}</span>` : ""}
  `;
}

function renderDiscoveryPeoplePreviewItem(product = {}, item = {}, kind = "persona") {
  const isPersona = kind === "persona";
  const meta = isPersona
    ? getPersonaTypeLabel(item.type)
    : [item.role, item.area].filter(Boolean).join(" · ");
  const description = isPersona ? item.shortDescription || item.description || "" : "";

  return `
    <article class="discovery-people-preview-item">
      <div>
        <strong>${escapeHTML(item.name || (isPersona ? "Persona" : "Stakeholder"))}</strong>
        ${meta ? `<span>${escapeHTML(meta)}</span>` : ""}
        ${description ? `<p>${escapeHTML(description)}</p>` : ""}
      </div>
      <div class="discovery-people-preview-actions card-actions">
        <a class="btn btn-secondary btn-sm secondary-action compact" href="${getDiscoveryAudienceItemHref(product, kind, item)}" data-discovery-people-link>Ver detalhes</a>
        <a class="btn btn-secondary btn-sm secondary-action compact" href="${getDiscoveryAudienceItemHref(product, kind, item, "edit")}" data-discovery-people-link>Editar</a>
      </div>
    </article>
  `;
}

function renderDiscoveryPeoplePreviewGroup(product = {}, title = "", items = [], kind = "persona") {
  return `
    <section class="discovery-people-preview-group">
      <div class="discovery-people-preview-heading">
        <h3>${escapeHTML(title)}</h3>
        <span>${items.length}</span>
      </div>
      ${items.length
        ? `<div class="discovery-people-preview-list">${items.map((item) => renderDiscoveryPeoplePreviewItem(product, item, kind)).join("")}</div>`
        : `<p class="discovery-people-empty">${escapeHTML(kind === "stakeholder" ? "Nenhum stakeholder selecionado." : "Nenhuma persona selecionada.")}</p>`}
    </section>
  `;
}

function closeDiscoveryPeoplePreviewModal() {
  if (discoveryPeoplePreviewModal) {
    discoveryPeoplePreviewModal.hidden = true;
  }
}

function openDiscoveryPeoplePreviewModal(activeDiscovery = getActiveDiscoveryForCurrentPage(), product = getDiscoveryProduct(activeDiscovery)) {
  if (!discoveryPeoplePreviewModal || !discoveryPeoplePreviewBody) {
    return;
  }

  const { selectedPersonas, selectedStakeholders } = getDiscoveryPeopleSelection(activeDiscovery, product);
  discoveryPeoplePreviewBody.innerHTML = `
    <div class="discovery-people-preview-grid">
      ${renderDiscoveryPeoplePreviewGroup(product, "Personas", selectedPersonas, "persona")}
      ${renderDiscoveryPeoplePreviewGroup(product, "Stakeholders", selectedStakeholders, "stakeholder")}
    </div>
  `;
  discoveryPeoplePreviewModal.hidden = false;
  window.setTimeout(() => discoveryPeoplePreviewClose?.focus(), 0);
}

function closeDiscoveryPeopleEditModal() {
  editingDiscoveryPeopleSelection = null;
  if (discoveryPeopleEditModal) {
    discoveryPeopleEditModal.hidden = true;
  }
}

function ensureProductAudienceForQuickEdit(product = {}) {
  if (!product?.id) {
    return product || {};
  }

  const mockAudience = productAudienceMocks[product.id] || {};
  let changed = false;

  if (!getProductPersonas(product, { includeArchived: true }).length && Array.isArray(mockAudience.personas) && mockAudience.personas.length) {
    product.personas = mockAudience.personas
      .map((persona, index) => normalizeProductPersona(persona, product, index))
      .filter(Boolean);
    changed = true;
  }

  if (!getProductStakeholders(product, { includeArchived: true }).length && Array.isArray(mockAudience.stakeholders) && mockAudience.stakeholders.length) {
    product.stakeholders = mockAudience.stakeholders
      .map((stakeholder, index) => normalizeProductStakeholder(stakeholder, product, index))
      .filter(Boolean);
    changed = true;
  }

  if (changed) {
    persistProductAudience(product);
  }

  return product;
}

function getDiscoveryPeopleEditSnapshotItems(kind = "persona") {
  if (!editingDiscoveryPeopleSelection) {
    return [];
  }

  return kind === "stakeholder"
    ? editingDiscoveryPeopleSelection.stakeholdersSnapshot || []
    : editingDiscoveryPeopleSelection.personasSnapshot || [];
}

function getDiscoveryPeopleEditSelectedItems(product = {}, items = [], kind = "persona", selectedIds = []) {
  const normalizer = kind === "stakeholder" ? normalizeStakeholderSnapshot : normalizePersonaSnapshot;
  const selectedItemsById = mapPeopleById([
    ...items,
    ...getDiscoveryPeopleEditSnapshotItems(kind),
  ], (item, index) => normalizer(item, product, index));

  return normalizeSelectedPeopleIds(selectedIds)
    .map((itemId) => selectedItemsById.get(itemId))
    .filter(Boolean);
}

function filterDiscoveryPeopleEditItems(items = [], query = "", kind = "persona") {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) => {
    const searchableText = kind === "stakeholder"
      ? [
          item.name,
          item.role,
          item.area,
          getInfluenceLevelLabel(item.influence),
          getInfluenceLevelLabel(item.decisionPower),
        ]
      : [
          item.name,
          getPersonaTypeLabel(item.type),
          item.segment,
          item.shortDescription,
          item.description,
        ];

    return normalizeText(searchableText.filter(Boolean).join(" ")).includes(normalizedQuery);
  });
}

function renderDiscoveryPeopleSelectedChips(product = {}, selectedItems = [], kind = "persona") {
  if (!selectedItems.length) {
    return `<p class="discovery-people-empty">${escapeHTML(kind === "stakeholder" ? "Nenhum stakeholder selecionado." : "Nenhuma persona selecionada.")}</p>`;
  }

  const toggleAttribute = kind === "stakeholder" ? "data-discovery-stakeholder-selection" : "data-discovery-persona-selection";
  const fallbackLabel = kind === "stakeholder" ? "Stakeholder" : "Persona";

  return `
    <div class="discovery-selected-chips">
      ${selectedItems.map((item) => `
        <button class="discovery-selected-chip" type="button" ${toggleAttribute}="${escapeHTML(item.id)}" aria-label="Remover ${escapeHTML(item.name || fallbackLabel)}">
          <span>${escapeHTML(item.name || fallbackLabel)}</span>
          <span aria-hidden="true">x</span>
        </button>
      `).join("")}
    </div>
  `;
}

function renderDiscoveryPeopleEditOptionCard(item = {}, kind = "persona", selectedIds = []) {
  const id = String(item.id || "").trim();
  if (!id) {
    return "";
  }

  const isPersona = kind === "persona";
  const isSelected = selectedIds.includes(id);
  const toggleAttribute = isPersona ? "data-discovery-persona-selection" : "data-discovery-stakeholder-selection";
  const meta = isPersona
    ? getPersonaTypeLabel(item.type)
    : [item.role, item.area].filter(Boolean).join(" · ");
  const description = isPersona ? item.shortDescription || item.description || "" : "";
  const fallbackLabel = isPersona ? "Persona" : "Stakeholder";

  return `
    <label class="discovery-people-select-card${isSelected ? " selected" : ""}" ${toggleAttribute}="${escapeHTML(id)}">
      <input type="checkbox" ${isSelected ? "checked" : ""} aria-label="${isSelected ? "Remover" : "Selecionar"} ${escapeHTML(item.name || fallbackLabel)}">
      <span>
        <strong>${escapeHTML(item.name || fallbackLabel)}</strong>
        ${meta ? `<small>${escapeHTML(meta)}</small>` : ""}
        ${description ? `<em>${escapeHTML(description)}</em>` : ""}
      </span>
    </label>
  `;
}

function renderDiscoveryPeopleEditGroup(product = {}, title = "", items = [], kind = "persona", selectedIds = []) {
  const isStakeholder = kind === "stakeholder";
  const selectedItems = getDiscoveryPeopleEditSelectedItems(product, items, kind, selectedIds);
  const queryKey = isStakeholder ? "stakeholderQuery" : "personaQuery";
  const query = editingDiscoveryPeopleSelection?.[queryKey] || "";
  const filteredItems = filterDiscoveryPeopleEditItems(items, query, kind);
  const countLabel = `${selectedIds.length} selecionado${selectedIds.length === 1 ? "" : "s"}`;
  const emptyMessage = isStakeholder
    ? "Nenhum stakeholder cadastrado. Adicione rapidamente abaixo ou gerencie pessoas do produto."
    : "Nenhuma persona cadastrada. Adicione rapidamente abaixo ou gerencie pessoas do produto.";
  const noResultsMessage = isStakeholder
    ? "Nenhum stakeholder encontrado para esta busca."
    : "Nenhuma persona encontrada para esta busca.";
  const quickAddPlaceholder = isStakeholder ? "Adicionar grupo/stakeholder" : "Adicionar grupo/persona";
  const searchPlaceholder = isStakeholder ? "Buscar stakeholders" : "Buscar personas";

  return `
    <section class="discovery-people-edit-group">
      <div class="discovery-people-edit-heading">
        <div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(isStakeholder ? "Funções envolvidas em decisão, influência ou entrega." : "Arquétipos de usuários impactados pelo discovery.")}</p>
        </div>
        <span>${escapeHTML(countLabel)}</span>
      </div>
      <label class="discovery-people-search-label">
        <span>${escapeHTML(searchPlaceholder)}</span>
        <input class="discovery-people-search" type="search" value="${escapeHTML(query)}" placeholder="${escapeHTML(searchPlaceholder)}" data-discovery-people-search="${escapeHTML(kind)}" autocomplete="off">
      </label>
      <div class="discovery-people-selected-block">
        <strong>Selecionados</strong>
        ${renderDiscoveryPeopleSelectedChips(product, selectedItems, kind)}
      </div>
      <div class="discovery-people-selection-list" role="list">
        ${items.length
          ? (filteredItems.length
            ? filteredItems.map((item) => renderDiscoveryPeopleEditOptionCard(item, kind, selectedIds)).join("")
            : `<p class="discovery-people-empty">${escapeHTML(noResultsMessage)}</p>`)
          : `<p class="discovery-people-empty">${escapeHTML(emptyMessage)}</p>`}
      </div>
      <div class="discovery-people-quick-add">
        <input type="text" placeholder="${escapeHTML(quickAddPlaceholder)}" data-discovery-people-quick-add-input="${escapeHTML(kind)}">
        <button class="btn btn-secondary btn-sm" type="button" data-discovery-people-quick-add="${escapeHTML(kind)}">Adicionar</button>
      </div>
    </section>
  `;
}

function renderDiscoveryPeopleEditSelection(options = {}) {
  if (!discoveryPeopleEditBody || !editingDiscoveryPeopleSelection) {
    return;
  }

  const product = ensureProductAudienceForQuickEdit(getProductById(editingDiscoveryPeopleSelection.productId) || products[0]);
  const activePersonas = getProductPersonas(product.id);
  const activeStakeholders = getProductStakeholders(product.id);

  discoveryPeopleEditBody.innerHTML = `
    <p class="discovery-people-edit-help">Selecione somente as personas e stakeholders relacionados a este discovery. Participantes de pesquisa continuam separados.</p>
    <div class="discovery-people-edit-grid">
      ${renderDiscoveryPeopleEditGroup(product, "Personas", activePersonas, "persona", editingDiscoveryPeopleSelection.personaIds)}
      ${renderDiscoveryPeopleEditGroup(product, "Stakeholders", activeStakeholders, "stakeholder", editingDiscoveryPeopleSelection.stakeholderIds)}
    </div>
    <div class="discovery-people-edit-management">
      <a class="btn btn-ghost btn-sm" href="${getProductAudienceHash("product-audience", product.id)}" data-discovery-people-link>Gerenciar pessoas do produto</a>
    </div>
  `;

  if (options.focusSearchKind) {
    window.setTimeout(() => {
      const searchInput = discoveryPeopleEditBody.querySelector(`[data-discovery-people-search="${options.focusSearchKind}"]`);
      if (searchInput) {
        searchInput.focus();
        searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
      }
    }, 0);
  }
}

function openDiscoveryPeopleEditModal(activeDiscovery = getActiveDiscoveryForCurrentPage(), product = getDiscoveryProduct(activeDiscovery)) {
  if (!discoveryPeopleEditModal || !discoveryPeopleEditBody) {
    return;
  }

  const resolvedProduct = ensureProductAudienceForQuickEdit(product);
  const { personaIds, stakeholderIds, selectedPersonas, selectedStakeholders } = getDiscoveryPeopleSelection(activeDiscovery, resolvedProduct);
  editingDiscoveryPeopleSelection = {
    discoveryId: selectedDiscoveryId || activeDiscovery.id,
    productId: resolvedProduct.id,
    personaIds: personaIds.length ? personaIds : normalizeSelectedPeopleIds(selectedPersonas.map((persona) => persona.id)),
    stakeholderIds: stakeholderIds.length ? stakeholderIds : normalizeSelectedPeopleIds(selectedStakeholders.map((stakeholder) => stakeholder.id)),
    personasSnapshot: selectedPersonas,
    stakeholdersSnapshot: selectedStakeholders,
    personaQuery: "",
    stakeholderQuery: "",
  };

  renderDiscoveryPeopleEditSelection();
  discoveryPeopleEditModal.hidden = false;
  window.setTimeout(() => discoveryPeopleEditSave?.focus(), 0);
}

function toggleDiscoveryPeopleEditSelection(kind = "persona", itemId = "") {
  if (!editingDiscoveryPeopleSelection) {
    return;
  }

  const key = kind === "stakeholder" ? "stakeholderIds" : "personaIds";
  const selectedIds = new Set(editingDiscoveryPeopleSelection[key] || []);
  if (selectedIds.has(itemId)) {
    selectedIds.delete(itemId);
  } else {
    selectedIds.add(itemId);
  }

  editingDiscoveryPeopleSelection = {
    ...editingDiscoveryPeopleSelection,
    [key]: [...selectedIds],
  };
  renderDiscoveryPeopleEditSelection();
}

function quickAddDiscoveryPeopleItem(kind = "persona", name = "") {
  if (!editingDiscoveryPeopleSelection) {
    return null;
  }

  const normalizedName = String(name || "").trim();
  if (!normalizedName) {
    showAppToast("Informe um nome para adicionar.", "error");
    return null;
  }

  const product = ensureProductAudienceForQuickEdit(getProductById(editingDiscoveryPeopleSelection.productId) || products[0]);
  const now = new Date().toISOString();
  const isStakeholder = kind === "stakeholder";
  const item = isStakeholder
    ? normalizeProductStakeholder({
        id: createAudienceItemId(product, "stakeholder", normalizedName),
        name: normalizedName,
        role: "Stakeholder",
        area: "",
        influence: INFLUENCE_LEVELS.MEDIUM,
        decisionPower: INFLUENCE_LEVELS.MEDIUM,
        expectations: [],
        concerns: [],
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: now,
        updatedAt: now,
      }, product, getProductStakeholders(product, { includeArchived: true }).length)
    : normalizeProductPersona({
        id: createAudienceItemId(product, "persona", normalizedName),
        name: normalizedName,
        type: PERSONA_TYPES.INTERNAL_USER,
        shortDescription: "",
        description: "",
        goals: [],
        painPoints: [],
        context: "",
        segment: "",
        status: AUDIENCE_STATUSES.ACTIVE,
        createdAt: now,
        updatedAt: now,
      }, product, getProductPersonas(product, { includeArchived: true }).length);

  if (!item?.id) {
    showAppToast("Não foi possível adicionar este item.", "error");
    return null;
  }

  if (isStakeholder) {
    product.stakeholders = [...(Array.isArray(product.stakeholders) ? product.stakeholders : []), item];
  } else {
    product.personas = [...(Array.isArray(product.personas) ? product.personas : []), item];
  }

  persistProductAudience(product);
  toggleDiscoveryPeopleEditSelection(kind, item.id);
  showAppToast(`${isStakeholder ? "Stakeholder" : "Persona"} adicionado e selecionado.`, "success");
  return item;
}

function handleDiscoveryPeopleQuickAdd(kind = "persona") {
  if (!discoveryPeopleEditBody) {
    return;
  }

  const input = discoveryPeopleEditBody.querySelector(`[data-discovery-people-quick-add-input="${kind}"]`);
  const createdItem = quickAddDiscoveryPeopleItem(kind, input?.value || "");
  if (createdItem && input) {
    input.value = "";
  }
}

function persistDiscoveryPeopleSelection() {
  if (!editingDiscoveryPeopleSelection) {
    return null;
  }

  const product = ensureProductAudienceForQuickEdit(getProductById(editingDiscoveryPeopleSelection.productId) || products[0]);
  const activeDiscovery = getActiveDiscoveryForCurrentPage();
  const personaIds = normalizeSelectedPeopleIds(editingDiscoveryPeopleSelection.personaIds);
  const stakeholderIds = normalizeSelectedPeopleIds(editingDiscoveryPeopleSelection.stakeholderIds);
  const snapshotDiscovery = {
    personaIds,
    stakeholderIds,
    personasSnapshot: editingDiscoveryPeopleSelection.personasSnapshot || [],
    stakeholdersSnapshot: editingDiscoveryPeopleSelection.stakeholdersSnapshot || [],
  };
  const patch = {
    personaIds,
    stakeholderIds,
    personasSnapshot: resolveDiscoveryPersonas(snapshotDiscovery, product),
    stakeholdersSnapshot: resolveDiscoveryStakeholders(snapshotDiscovery, product),
    updated_at: new Date().toISOString(),
  };
  const currentDiscoveryId = editingDiscoveryPeopleSelection.discoveryId || activeDiscovery.id || selectedDiscoveryId;
  const existingStoredDiscovery = findCreatedDiscovery(currentDiscoveryId);
  const shouldStoreAsOverride = !existingStoredDiscovery
    && !String(currentDiscoveryId || "").startsWith("draft-")
    && !getDiscoveryRunId(activeDiscovery);
  const persistentDiscovery = normalizeDiscoveryAudience(enrichDiscoveryMethodology({
    ...activeDiscovery,
    id: currentDiscoveryId,
    productId: product.id,
    isAudienceSelectionOverride: shouldStoreAsOverride || activeDiscovery.isAudienceSelectionOverride || false,
    ...patch,
  }), product);

  if (activeDiscovery === discoveryTemplate) {
    Object.assign(discoveryTemplate, patch);
  }

  upsertCreatedDiscovery(persistentDiscovery);
  if (draftDiscovery?.id === persistentDiscovery.id) {
    draftDiscovery = persistentDiscovery;
  }

  renderDiscoveryPeoplePanel(persistentDiscovery, product);
  showAppToast("Pessoas relacionadas atualizadas.", "success");
  closeDiscoveryPeopleEditModal();
  return persistentDiscovery;
}

function renderDiscoveryPeoplePanel(activeDiscovery = {}, product = getDiscoveryProduct(activeDiscovery)) {
  const existingPanel = discoveryPage.querySelector("[data-discovery-people-panel]");
  if (existingPanel) {
    existingPanel.remove();
  }

  const { selectedPersonas, selectedStakeholders } = getDiscoveryPeopleSelection(activeDiscovery, product);
  const hasSelections = selectedPersonas.length || selectedStakeholders.length;
  const workflowPanel = discoveryPage.querySelector("[data-workflow-cockpit]");
  const summary = discoveryPage.querySelector(".discovery-summary");
  const anchor = workflowPanel || summary;
  if (!anchor) {
    return;
  }

  anchor.insertAdjacentHTML("afterend", `
    <section class="discovery-people-panel card-surface" data-discovery-people-panel aria-labelledby="discovery-people-title">
      <div class="discovery-people-panel-header">
        <div>
          <h2 id="discovery-people-title">Pessoas relacionadas</h2>
          <p>Personas e stakeholders selecionados para contextualizar este discovery.</p>
        </div>
      </div>
      ${hasSelections ? `
        <div class="discovery-people-summary-grid">
          <div>
            <strong>${selectedPersonas.length}</strong>
            <span>${selectedPersonas.length === 1 ? "persona" : "personas"}</span>
          </div>
          <div>
            <strong>${selectedStakeholders.length}</strong>
            <span>stakeholder${selectedStakeholders.length === 1 ? "" : "s"}</span>
          </div>
        </div>
        <div class="discovery-people-chip-groups">
          <div aria-label="Personas selecionadas">${renderDiscoveryPeopleChips(selectedPersonas, "persona")}</div>
          <div aria-label="Stakeholders selecionados">${renderDiscoveryPeopleChips(selectedStakeholders, "stakeholder")}</div>
        </div>
        <div class="discovery-people-actions card-actions">
          <button class="btn btn-secondary btn-sm secondary-action compact" type="button" data-discovery-people-preview>Visualizar</button>
          <button class="btn btn-primary btn-sm primary-action compact" type="button" data-discovery-people-edit>Editar seleção</button>
        </div>
      ` : `
        <p class="discovery-people-empty prominent">Nenhuma pessoa relacionada selecionada.</p>
        <div class="discovery-people-actions card-actions">
          <button class="btn btn-primary btn-sm primary-action compact" type="button" data-discovery-people-edit>Selecionar pessoas</button>
        </div>
      `}
    </section>
  `);
}

function renderMethodologyList(activeDiscovery = {}) {
  if (!methodologyList) {
    return;
  }

  const methodology = normalizeDiscoveryMethodology(activeDiscovery);
  const methods = Array.isArray(methodology.methods) ? methodology.methods : [];
  const methodCountLabel = `${methods.length} método${methods.length === 1 ? "" : "s"}`;
  const fallbackMessage = "Metodologia ainda não definida. O sistema usará Discovery Otimizado como padrão para estruturar o plano de pesquisa.";
  const methodCards = methods.map((method, index) => {
    const entry = method.entry || createMethodEntry();
    const hasEntry = Boolean(entry.text?.trim()) || Boolean(entry.files?.length);
    const entryClass = hasEntry ? " has-entry" : "";
    const actionLabel = getMethodEntrySummary(method);
    const progress = Math.max(0, Math.min(100, Number(method.progress) || 0));
    const methodMeta = [method.duration, method.sample].filter(Boolean).join(" · ");

    return `
      <button class="method-step method-step-card${entryClass}" type="button" data-method-index="${index}" aria-label="Abrir ${escapeHTML(method.name)}">
        <div class="method-step-header">
          <span>${escapeHTML(method.name)}</span>
          <small class="method-step-status">${escapeHTML(method.status || "Pendente")}</small>
        </div>
        ${methodMeta ? `<span class="method-step-meta">${escapeHTML(methodMeta)}</span>` : ""}
        <div class="progress-track" aria-hidden="true">
          <div class="progress-bar" style="width: ${progress}%"></div>
        </div>
        <span class="method-step-progress-value">${progress}%</span>
        <span class="method-step-entry${entryClass}">${escapeHTML(actionLabel)}</span>
      </button>
    `;
  }).join("");

  methodologyList.innerHTML = `
    <div class="methodology-summary-card">
      <strong>${escapeHTML(methodology.name)}</strong>
      <span>${escapeHTML([methodology.duration, methodCountLabel].filter(Boolean).join(" · "))}</span>
      <p>${escapeHTML(methodology.description || fallbackMessage)}</p>
      ${methodology.isFallback ? `<small>${escapeHTML(fallbackMessage)}</small>` : ""}
    </div>
    <div class="methodology-method-list">
      ${methodCards || `<p class="methodology-empty-state">${escapeHTML(fallbackMessage)}</p>`}
    </div>
  `;
}

function renderProductPage(productId) {
  const product = products.find((item) => item.id === productId) || products[0];
  selectedProductId = product.id;
  currentProductName.textContent = product.name;
  productPageTitle.textContent = product.name;
  productPageCategory.textContent = getProductTaxonomyLabel(product);
  productPageAbout.textContent = product.about || product.description || "Produto monitorado pelo repositório de discoveries.";
  productPageStatus.textContent = getProductStatusLabel(product);
  productSquad.textContent = product.squad || "-";
  productParticipants.textContent = product.participants || "-";
  productStart.textContent = product.periodStart || product.start || "-";
  productEnd.textContent = product.periodEnd || product.end || "-";
  if (productMetrics) {
    const metrics = Array.isArray(product.metrics) ? product.metrics : [];
    productMetrics.innerHTML = metrics.map((metric) => `<li>${escapeHTML(metric)}</li>`).join("");
  }
  updateProductAudienceLinks(product);
  renderProductKpis(product);
  renderProductDiscoveries(product);
}

function renderDiscoveryPage(productId, discoveryId) {
  const product = products.find((item) => item.id === productId) || products[0];
  const isDraftRoute = String(discoveryId || "").startsWith("draft-");
  const savedDraft = findCreatedDiscovery(discoveryId) || (draftDiscovery?.id === discoveryId ? draftDiscovery : null);
  const isSavedDraft = Boolean(savedDraft);
  const isDraft = isSavedDraft || isDraftRoute;
  let activeDiscovery = discoveryTemplate;
  if (isSavedDraft) {
    draftDiscovery = savedDraft;
    activeDiscovery = savedDraft;
  } else if (isDraftRoute) {
    draftDiscovery = createBlankDraftDiscovery(discoveryId);
    activeDiscovery = draftDiscovery;
  }
  activeDiscovery = normalizeDiscoveryAudience(enrichDiscoveryMethodology(activeDiscovery), product);
  if (isSavedDraft || isDraftRoute) {
    draftDiscovery = activeDiscovery;
    if (findCreatedDiscovery(activeDiscovery.id)) {
      upsertCreatedDiscovery(activeDiscovery);
    }
  }
  selectedProductId = product.id;
  selectedDiscoveryId = discoveryId || activeDiscovery.id;
  discoveryPage.classList.add("new-discovery-detail");
  const normalizedCrewResult = getNormalizedDiscoveryResult(activeDiscovery);
  const hasCrewResult = isDraft && hasCrewAiDiscoveryResult(activeDiscovery);
  const hasMvpRun = Boolean(getDiscoveryRunId(activeDiscovery));
  const hasMvpWorkflow = shouldShowMvpWorkflow(activeDiscovery);
  const readinessLabel = getDiscoveryReadyLabel(normalizedCrewResult.discoveryReady);
  const statusLabel = hasMvpWorkflow
    ? getDiscoveryRunStatusLabel(activeDiscovery)
    : hasCrewResult
      ? `Concluído · ${readinessLabel}`
      : activeDiscovery.status || "Em Execução";
  const insightTexts = getDiscoveryInsightTexts(activeDiscovery);

  discoveryProductLink.textContent = product.category || product.name;
  discoveryProductLink.href = `#product/${product.id}`;
  discoveryPageName.textContent = activeDiscovery.name;
  if (discoveryPageTitle) {
    discoveryPageTitle.textContent = activeDiscovery.name || activeDiscovery.title || "Discovery";
  }
  discoveryProductName.textContent = product.name;
  if (discoveryIdLabel) {
    discoveryIdLabel.textContent = activeDiscovery.id || discoveryId || "ID não informado";
  }
  syncDiscoveryDetailFavoriteButton(selectedDiscoveryId);
  if (discoveryReadinessStatus) {
    discoveryReadinessStatus.classList.toggle("ready", hasMvpWorkflow ? activeDiscovery.current_state === WORKFLOW_STATES.COMPLETED : hasCrewResult && normalizedCrewResult.discoveryReady === "yes");
    discoveryReadinessStatus.classList.toggle("not-ready", hasMvpWorkflow ? activeDiscovery.current_state === WORKFLOW_STATES.FAILED || activeDiscovery.status === RUN_STATUSES.FAILED : hasCrewResult && normalizedCrewResult.discoveryReady === "no");
    discoveryReadinessStatus.innerHTML = `<span></span>${escapeHTML(statusLabel)}`;
  }
  renderDiscoveryWorkflowCockpit(activeDiscovery);
  renderDiscoveryResearchApprovalPanel(activeDiscovery);
  renderDiscoveryEvidenceUploadPanel(activeDiscovery);
  renderDiscoveryInsightReviewPanel(activeDiscovery);
  renderDiscoveryOpportunityReviewPanel(activeDiscovery);
  renderDiscoveryRecommendationHandoffSection(activeDiscovery);
  renderDiscoveryCsdSummaryPanel(activeDiscovery);
  renderDiscoveryPeoplePanel(activeDiscovery, product);
  discoveryProblem.textContent = activeDiscovery.problem || "Problema ainda não informado.";
  discoveryObjective.textContent = activeDiscovery.objective || "Objetivo ainda não informado.";
  if (discoveryCrewSummary && discoveryCrewReasoning) {
    discoveryCrewSummary.hidden = !hasCrewResult;
    discoveryCrewReasoning.textContent = normalizedCrewResult.reasoning || "A CrewAI concluiu, mas ainda não retornou um resumo.";
  }
  discoveryInsightsTitle.textContent = hasCrewResult ? "Insights Atualizados" : "Principais insights e evidências";
  discoverySquad.textContent = product.squad;
  discoveryParticipants.textContent = isDraft && activeDiscovery.participants
    ? formatDraftParticipants(activeDiscovery.participants) || product.participants
    : product.participants;
  discoveryStart.textContent = activeDiscovery.periodStart || activeDiscovery.start || product.periodStart || product.start;
  discoveryEnd.textContent = activeDiscovery.periodEnd || activeDiscovery.end || (isDraft && activeDiscovery.deadline ? activeDiscovery.deadline : product.periodEnd || product.end);
  if (discoveryMethodologyName) {
    discoveryMethodologyName.textContent = normalizeDiscoveryMethodology(activeDiscovery).name;
  }
  if (discoveryTimelineTitle) {
    discoveryTimelineTitle.textContent = "Prazo discovery";
  }
  discoveryInsights.innerHTML = insightTexts.length
    ? insightTexts.map((insight) => `<li>${escapeHTML(insight)}</li>`).join("")
    : `<li class="insights-empty-state">${hasCrewResult ? AGENT_OUTPUT_EMPTY_MESSAGE : AGENT_WAITING_MESSAGE}</li>`;
  if (discoveryTags) {
    const tags = Array.isArray(activeDiscovery.tags) ? activeDiscovery.tags : [];
    discoveryTags.innerHTML = tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("");
  }
  renderDiscoveryArtifactsSection(activeDiscovery);
  renderMethodologyList(activeDiscovery);
  methodologyPanel.hidden = false;
  const staticMethodCard = discoveryPage.querySelector(".method-card");
  if (staticMethodCard) {
    staticMethodCard.hidden = hasMvpWorkflow;
  }
  const evidenceItems = Array.isArray(activeDiscovery.evidence) ? activeDiscovery.evidence : [];
  evidenceList.innerHTML = evidenceItems.length ? evidenceItems.map((item) => `
    <article class="evidence-item">
      <blockquote>"${escapeHTML(item.quote)}"</blockquote>
      <span>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        ${escapeHTML(item.file)}
      </span>
    </article>
  `).join("") : `<article class="evidence-item"><blockquote>"As evidências serão adicionadas ao longo da pesquisa."</blockquote><span>rascunho</span></article>`;

  discoveryChatLog.innerHTML = "";
  clearDiscoveryAttachments();
  addDiscoveryChatMessage("bot", isDraft
    ? hasMvpRun
      ? `Run criada. Vou acompanhar o workflow em segundo plano; você já pode navegar pelo discovery "${activeDiscovery.name}".`
      : `Rascunho criado. A metodologia começa zerada; converse comigo para transformar as dores em hipóteses, perguntas de pesquisa e próximos passos para "${activeDiscovery.name}".`
    : `Estou pronto para conversar sobre "${activeDiscovery.name}" e recuperar contexto, evidências ou próximos passos.`
  );
  if (hasMvpWorkflow && hasMvpRun) {
    startDiscoveryRunStatusPolling(activeDiscovery);
  }
}

function getDiscoveryDisplayName(discoveryId, fallback = discoveryTemplate.name) {
  const createdDiscovery = findCreatedDiscovery(discoveryId) || (draftDiscovery?.id === discoveryId ? draftDiscovery : null);
  if (String(discoveryId || "").startsWith("draft-") && createdDiscovery?.name) {
    return createdDiscovery.name;
  }

  const productDiscoveryMatch = String(discoveryId || "").match(/^discovery-(\d+)$/);
  if (productDiscoveryMatch) {
    const discovery = productDiscoveryTemplates[Number(productDiscoveryMatch[1]) - 1];
    if (discovery?.title) {
      return discovery.title;
    }
  }

  const recentDiscovery = discoveries.find((item) => slugify(item.title) === discoveryId);
  if (recentDiscovery?.title) {
    return recentDiscovery.title;
  }

  return fallback;
}

function getSynthesisPayload(activeDiscovery = {}) {
  if (hasCrewAiDiscoveryResult(activeDiscovery)) {
    const normalizedResult = getNormalizedDiscoveryResult(activeDiscovery);
    return {
      synthesis_status: "READY",
      synthesis_status_label: `Concluído · ${getDiscoveryReadyLabel(normalizedResult.discoveryReady)}`,
      synthesis_summary: normalizedResult.reasoning || "A CrewAI concluiu, mas ainda não retornou um resumo.",
      evidence_inventory: [],
      patterns: [],
      contradictions: [],
      confidence_levels: {},
      hypothesis_status: [],
      unanswered_questions: [],
      missing_evidence: [],
      updated_insights: normalizedResult.insights.map((item) => item.insight),
    };
  }

  const crewResult = activeDiscovery.crewAiResult;
  const candidate = crewResult?.synthesis || crewResult?.synthesis_output || crewResult;
  const hasAgentSynthesis = candidate && typeof candidate === "object" && (
    candidate.synthesis_status
    || candidate.synthesis_summary
    || candidate.evidence_inventory
    || candidate.patterns
    || candidate.updated_insights
  );

  return hasAgentSynthesis
    ? { ...synthesisAgentOutput, ...candidate }
    : synthesisAgentOutput;
}

function getConfidenceClass(value = "") {
  const normalized = normalizeText(value);
  if (normalized.includes("alta") || normalized.includes("high")) {
    return "high";
  }
  if (normalized.includes("media") || normalized.includes("medium")) {
    return "medium";
  }
  return "low";
}

function getHypothesisClass(status = "") {
  const normalized = normalizeText(status);
  if (normalized.includes("confirm")) {
    return "confirmed";
  }
  if (normalized.includes("enfraquec") || normalized.includes("weaken")) {
    return "weakened";
  }
  if (normalized.includes("rejeit") || normalized.includes("reject")) {
    return "rejected";
  }
  return "inconclusive";
}

function getHypothesisIcon(status = "") {
  const statusClass = getHypothesisClass(status);
  if (statusClass === "confirmed") {
    return `<path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="9"></circle>`;
  }
  if (statusClass === "weakened") {
    return `<path d="M12 8v5"></path><path d="M12 16h.01"></path><circle cx="12" cy="12" r="9"></circle>`;
  }
  if (statusClass === "rejected") {
    return `<path d="M15 9l-6 6"></path><path d="m9 9 6 6"></path><circle cx="12" cy="12" r="9"></circle>`;
  }
  return `<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>`;
}

function renderSynthesisPage(productId, discoveryId) {
  const product = products.find((item) => item.id === productId) || products[0];
  const savedDraft = findCreatedDiscovery(discoveryId) || (draftDiscovery?.id === discoveryId ? draftDiscovery : null);
  const activeDiscovery = savedDraft || discoveryTemplate;
  const synthesis = getSynthesisPayload(activeDiscovery);
  const discoveryName = getDiscoveryDisplayName(discoveryId, activeDiscovery.name);
  selectedProductId = product.id;
  selectedDiscoveryId = discoveryId || activeDiscovery.id;

  synthesisPage.innerHTML = `
    <nav class="breadcrumb synthesis-breadcrumb" aria-label="Caminho">
      <a href="#home" data-route-link="home">Início</a>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m9 18 6-6-6-6" />
      </svg>
      <a href="#product/${escapeHTML(product.id)}">${escapeHTML(product.category || product.name)}</a>
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m9 18 6-6-6-6" />
      </svg>
      <span>Síntese do Discovery</span>
    </nav>

    <div class="synthesis-layout">
      <main class="synthesis-main">
        <section class="synthesis-hero synthesis-card">
          <div class="synthesis-title-row">
            <div>
              <h1 id="synthesis-page-title">${escapeHTML(discoveryName)}</h1>
              <span class="synthesis-status ready">
                <span aria-hidden="true"></span>
                ${escapeHTML(synthesis.synthesis_status_label || "Concluído")}
              </span>
            </div>
          </div>

          <h2>Resumo Executivo</h2>
          <p>${escapeHTML(synthesis.synthesis_summary || "")}</p>
        </section>

        <section class="synthesis-card" aria-labelledby="patterns-title">
          <h2 id="patterns-title">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="m4.93 4.93 2.83 2.83" />
              <path d="m16.24 16.24 2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="m4.93 19.07 2.83-2.83" />
              <path d="m16.24 7.76 2.83-2.83" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Padrões Detectados
          </h2>
          <div class="synthesis-pattern-list">
            ${(synthesis.patterns || []).map((pattern) => {
              const confidence = pattern.confidence || synthesis.confidence_levels?.[pattern.name] || "Média";
              return `
                <article class="pattern-item">
                  <div>
                    <strong>${escapeHTML(pattern.name)}</strong>
                    <span>Frequência: ${escapeHTML(pattern.frequency || "não informada")}</span>
                  </div>
                  <mark class="${getConfidenceClass(confidence)}">${escapeHTML(confidence)}</mark>
                </article>
              `;
            }).join("")}
          </div>
        </section>

        <section class="synthesis-card" aria-labelledby="contradictions-title">
          <h2 id="contradictions-title">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            Contradições Detectadas
          </h2>
          <div class="contradiction-list">
            ${(synthesis.contradictions || []).map((contradiction) => `
              <article class="contradiction-item">
                <strong>${escapeHTML(contradiction.description)}</strong>
                <div>
                  ${(contradiction.sources || []).map((source) => `<span>${escapeHTML(source)}</span>`).join("")}
                </div>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="synthesis-card" aria-labelledby="hypothesis-title">
          <h2 id="hypothesis-title">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m3 17 6-6 4 4 8-8" />
              <path d="M14 7h7v7" />
            </svg>
            Status das Hipóteses
          </h2>
          <div class="hypothesis-list">
            ${(synthesis.hypothesis_status || []).map((item) => {
              const statusClass = getHypothesisClass(item.status);
              return `
                <article class="hypothesis-item ${statusClass}">
                  <span>
                    <svg aria-hidden="true" viewBox="0 0 24 24">${getHypothesisIcon(item.status)}</svg>
                    ${escapeHTML(item.hypothesis)}
                  </span>
                  <strong>${escapeHTML(item.status)}</strong>
                </article>
              `;
            }).join("")}
          </div>
        </section>

        <section class="synthesis-card" aria-labelledby="insights-title">
          <h2 id="insights-title">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M8.5 14a6 6 0 1 1 7 0c-.9.7-1.5 1.8-1.5 3h-4c0-1.2-.6-2.3-1.5-3Z" />
            </svg>
            Insights Atualizados
          </h2>
          <ul class="updated-insight-list">
            ${(synthesis.updated_insights || []).length ? synthesis.updated_insights.map((insight) => `<li>${escapeHTML(insight)}</li>`).join("") : `<li>A CrewAI concluiu, mas ainda não retornou insights.</li>`}
          </ul>
        </section>
      </main>

      <aside class="synthesis-aside">
        <section class="synthesis-card" aria-labelledby="inventory-title">
          <h2 id="inventory-title">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h5" />
            </svg>
            Inventário de Evidências
          </h2>
          <div class="evidence-inventory-list">
            ${(synthesis.evidence_inventory || []).map((item) => `
              <article class="inventory-item">
                <div>
                  <strong>${escapeHTML(item.label || item.type)}</strong>
                  <span>Última atualização: ${escapeHTML(item.updated_at || item.updatedAt || "não informada")}</span>
                </div>
                <b>${escapeHTML(String(item.count || 0))}</b>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="synthesis-card" aria-labelledby="questions-title">
          <h2 id="questions-title">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            Questões Não Respondidas
          </h2>
          <div class="question-list">
            ${(synthesis.unanswered_questions || []).map((question) => `
              <article class="question-item">
                <span>?</span>
                ${escapeHTML(question)}
              </article>
            `).join("")}
          </div>
        </section>

        <section class="synthesis-card" aria-labelledby="missing-title">
          <h2 id="missing-title">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            Evidências Faltantes
          </h2>
          <ul class="missing-evidence-list">
            ${(synthesis.missing_evidence || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
          </ul>
        </section>
      </aside>
    </div>
  `;
}

function openMethodEntryModal(methodIndex) {
  const activeDiscovery = getEditableDiscovery();
  const method = activeDiscovery.methods[methodIndex];
  if (!method) {
    return;
  }

  const entry = method.entry || createMethodEntry();
  activeMethodEntryIndex = methodIndex;
  methodEntryTitle.textContent = method.name;
  methodEntryText.value = entry.text || "";
  methodEntryFiles = [...(entry.files || [])];
  methodEntryFile.value = "";
  renderMethodEntryFiles();
  methodEntryModal.hidden = false;
  window.setTimeout(() => methodEntryText.focus(), 0);
}

function closeMethodEntryModal() {
  methodEntryModal.hidden = true;
  activeMethodEntryIndex = null;
  methodEntryFiles = [];
  methodEntryFile.value = "";
  methodEntryText.value = "";
  renderMethodEntryFiles();
}

function saveMethodEntry() {
  if (activeMethodEntryIndex === null) {
    return;
  }

  const activeDiscovery = getEditableDiscovery();
  const method = activeDiscovery.methods[activeMethodEntryIndex];
  if (!method) {
    return;
  }

  method.entry = {
    text: methodEntryText.value.trim(),
    files: [...methodEntryFiles],
  };

  if (findCreatedDiscovery(activeDiscovery.id)) {
    upsertCreatedDiscovery(activeDiscovery);
  }

  renderMethodologyList(activeDiscovery);
  closeMethodEntryModal();
}

function getResearchActivityType(methodIdOrName = "") {
  return isUsabilityMethod(methodIdOrName) ? "usability_test" : "in_depth_interview";
}

function getResearchActivityScopeKey(scope = currentResearchActivityScope) {
  if (!scope) {
    return "";
  }

  return [
    scope.discoveryId,
    scope.methodId,
    scope.activityType,
  ].map((part) => slugify(part || "default")).join("::");
}

function loadResearchActivityUsersTable() {
  try {
    const stored = window.localStorage.getItem(RESEARCH_ACTIVITY_USERS_STORAGE_KEY);
    if (!stored) {
      return {};
    }

    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveResearchActivityUsersTable(table = {}) {
  try {
    window.localStorage.setItem(RESEARCH_ACTIVITY_USERS_STORAGE_KEY, JSON.stringify(table));
  } catch (error) {
    // Local persistence is best-effort in the static prototype.
  }
}

function loadResearchActivityUsers(scope = currentResearchActivityScope) {
  const key = getResearchActivityScopeKey(scope);
  if (!key) {
    return [];
  }

  const table = loadResearchActivityUsersTable();
  const users = Array.isArray(table[key]) ? table[key] : [];
  return users.filter((user) => user && typeof user === "object");
}

function saveResearchActivityUsers(scope = currentResearchActivityScope, users = []) {
  const key = getResearchActivityScopeKey(scope);
  if (!key) {
    return;
  }

  const table = loadResearchActivityUsersTable();
  table[key] = users;
  saveResearchActivityUsersTable(table);
}

function hydrateResearchActivityUsers(scope = currentResearchActivityScope) {
  interviewParticipants = loadResearchActivityUsers(scope);
}

function normalizeResearchUserStatus(status = "") {
  const normalized = normalizeText(status).replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  if (["confirmado", "confirmed"].includes(normalized)) {
    return RESEARCH_USER_STATUSES.CONFIRMADO.value;
  }
  if (["recusado", "declined", "rejeitado"].includes(normalized)) {
    return RESEARCH_USER_STATUSES.RECUSADO.value;
  }
  if (["enviado", "sent"].includes(normalized)) {
    return RESEARCH_USER_STATUSES.ENVIADO.value;
  }
  return RESEARCH_USER_STATUSES.PENDENTE.value;
}

function getResearchUserStatusMeta(status = "") {
  const normalizedStatus = normalizeResearchUserStatus(status);
  return RESEARCH_USER_STATUSES[normalizedStatus] || RESEARCH_USER_STATUSES.PENDENTE;
}

function getInterviewConfirmedCount() {
  return interviewParticipants.filter((participant) => normalizeResearchUserStatus(participant.status) === RESEARCH_USER_STATUSES.CONFIRMADO.value).length;
}

function getInterviewPersonas(activeDiscovery) {
  const personas = activeDiscovery.participants?.personas;
  if (Array.isArray(personas) && personas.length) {
    return personas.join(", ");
  }

  return "Analista de Topline, Especialista Trade Price, Analista de vendas";
}

function getRecruitmentStatusClass(status = "") {
  return getResearchUserStatusMeta(status).className;
}

function updateInterviewOverview() {
  const target = currentResearchActivityScope?.activityType === "usability_test" ? 5 : 8;
  const importedCount = interviewParticipants.length;
  const percent = target ? Math.min(100, (importedCount / target) * 100) : 0;

  interviewConfirmed.textContent = importedCount;
  interviewTarget.textContent = target;
  interviewRecruitmentBar.style.width = `${percent}%`;
  interviewRecruitmentSummary.textContent = importedCount
    ? `${importedCount} usuário${importedCount === 1 ? "" : "s"} importado${importedCount === 1 ? "" : "s"} por CSV.`
    : "Importe um CSV para preencher a tabela desta atividade.";
}

function renderInterviewParticipants() {
  if (!interviewParticipants.length) {
    interviewParticipantsBody.innerHTML = `
      <tr class="recruitment-table-empty">
        <td colspan="6">Nenhum usuário importado ainda. Importe uma planilha CSV para preencher esta tabela.</td>
      </tr>
    `;
    updateInterviewOverview();
    return;
  }

  interviewParticipantsBody.innerHTML = interviewParticipants.map((participant) => {
    const statusMeta = getResearchUserStatusMeta(participant.status);
    const viewTitle = `Ver detalhes de ${participant.name}`;
    const profile = participant.persona || participant.profile || participant.role || "-";
    const companySegment = [participant.company, participant.segment].filter(Boolean).join(" / ") || "-";
    const uploadTitle = participant.resultUpload?.fileName
      ? `Resultado importado: ${participant.resultUpload.fileName}`
      : `Upload resultado de ${participant.name}`;

    return `
      <tr data-participant-id="${participant.id}">
        <td>
          <div class="participant-cell">
            <strong>${escapeHTML(participant.name)}</strong>
            <span>${escapeHTML(participant.phone || participant.notes || "")}</span>
          </div>
        </td>
        <td>${escapeHTML(participant.email || "-")}</td>
        <td>${escapeHTML(profile)}</td>
        <td>${escapeHTML(companySegment)}</td>
        <td><span class="recruitment-chip ${statusMeta.className}">${escapeHTML(statusMeta.label)}</span></td>
        <td>
          <div class="research-row-actions">
            <button class="row-icon-button" type="button" data-interview-view="${participant.id}" aria-label="${escapeHTML(viewTitle)}" title="${escapeHTML(viewTitle)}">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
            <button class="row-icon-button" type="button" data-interview-upload-result="${participant.id}" aria-label="${escapeHTML(uploadTitle)}" title="${escapeHTML(uploadTitle)}">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12 3v12" />
                <path d="m7 8 5-5 5 5" />
                <path d="M5 21h14" />
              </svg>
            </button>
            <button class="row-icon-button row-more-button" type="button" data-interview-status-menu="${participant.id}" aria-label="Alterar status do usuário" title="Alterar status do usuário" aria-haspopup="menu" aria-expanded="${activeInterviewStatusMenuParticipantId === participant.id ? "true" : "false"}">
              <span aria-hidden="true">⋯</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
  updateInterviewOverview();
}

function closeInterviewStatusMenu() {
  activeInterviewStatusMenuParticipantId = null;
  document.querySelector("[data-interview-status-dropdown]")?.remove();
  document.querySelectorAll("[data-interview-status-menu]").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function updateResearchActivityUser(participantId, patch = {}) {
  if (!participantId) {
    return;
  }

  interviewParticipants = interviewParticipants.map((participant) => (
    participant.id === participantId
      ? { ...participant, ...patch }
      : participant
  ));
  saveResearchActivityUsers(currentResearchActivityScope, interviewParticipants);
}

function updateResearchUserStatus(participantId, status) {
  if (!participantId) {
    closeInterviewStatusMenu();
    return;
  }

  updateResearchActivityUser(participantId, { status: normalizeResearchUserStatus(status) });
  closeInterviewStatusMenu();
  renderInterviewParticipants();
}

function openInterviewStatusMenu(participantId, anchorButton) {
  if (!participantId || !anchorButton) {
    return;
  }

  closeInterviewStatusMenu();
  activeInterviewStatusMenuParticipantId = participantId;
  anchorButton.setAttribute("aria-expanded", "true");

  const rect = anchorButton.getBoundingClientRect();
  const dropdown = document.createElement("div");
  dropdown.className = "research-status-dropdown";
  dropdown.dataset.interviewStatusDropdown = participantId;
  dropdown.setAttribute("role", "menu");
  dropdown.style.top = `${rect.bottom + window.scrollY + 6}px`;
  dropdown.style.left = `${Math.max(12, rect.right + window.scrollX - 176)}px`;
  dropdown.innerHTML = RESEARCH_USER_STATUS_OPTIONS.map((option) => `
    <button type="button" role="menuitem" data-interview-status-option="${option.value}">
      ${escapeHTML(option.label)}
    </button>
  `).join("");
  document.body.appendChild(dropdown);
}

function uploadResearchUserResult(participantId) {
  const participant = getParticipantById(participantId);
  if (!participant) {
    return;
  }

  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".csv,.txt,.pdf,.doc,.docx,.mp3,.mp4,.mov,text/csv,text/plain,application/pdf";
  input.addEventListener("change", () => {
    const [file] = input.files || [];
    if (!file) {
      return;
    }

    updateResearchActivityUser(participantId, {
      resultUpload: {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type || "application/octet-stream",
        uploadedAt: new Date().toISOString(),
      },
    });
    renderInterviewParticipants();
    setInterviewFeedback(`Resultado de ${participant.name} anexado: ${file.name}.`, "success");
  }, { once: true });
  input.click();
}

function renderInterviewGuide(activityType = currentResearchActivityScope?.activityType || "in_depth_interview") {
  const isUsability = activityType === "usability_test";
  const questions = isUsability ? usabilityGuideQuestions : interviewGuideQuestions;
  if (interviewGuideTitle) {
    interviewGuideTitle.textContent = isUsability ? "Roteiro do teste de usabilidade" : "Roteiro da entrevista";
  }
  if (interviewGuideDescription) {
    interviewGuideDescription.textContent = isUsability
      ? "Lista com tarefas e perguntas essenciais para conduzir o teste com consistência."
      : "Lista única com 10 perguntas essenciais para conduzir a entrevista com consistência.";
  }

  interviewRouteBlocks.innerHTML = `
    <article class="guide-single-card">
      <ol class="guide-question-list">
        ${questions.map((question, index) => `
          <li>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <p>${escapeHTML(question)}</p>
          </li>
        `).join("")}
      </ol>
    </article>
  `;
}

function renderInterviewDetailPage(productId, discoveryId, methodId = "entrevista-em-profundidade") {
  const product = products.find((item) => item.id === productId) || products[0];
  const savedDraft = findCreatedDiscovery(discoveryId) || (draftDiscovery?.id === discoveryId ? draftDiscovery : null);
  const isSavedDraft = Boolean(savedDraft);
  const isDraftRoute = String(discoveryId || "").startsWith("draft-");
  let activeDiscovery = discoveryTemplate;

  if (isSavedDraft) {
    draftDiscovery = savedDraft;
    activeDiscovery = savedDraft;
  } else if (isDraftRoute) {
    draftDiscovery = createBlankDraftDiscovery(discoveryId);
    activeDiscovery = draftDiscovery;
  }

  const discoveryName = activeDiscovery.name || "Checkout Experience";
  const activityType = getResearchActivityType(methodId);
  const isUsabilityActivity = activityType === "usability_test";
  currentResearchActivityScope = {
    productId: product.id,
    discoveryId: discoveryId || activeDiscovery.id || discoveryTemplate.id,
    methodId: slugify(methodId || (isUsabilityActivity ? "teste-de-usabilidade" : "entrevista-em-profundidade")),
    activityType,
  };

  interviewContent.hidden = true;
  interviewSkeleton.hidden = false;
  interviewBackLink.href = `#discovery/${discoveryId}/${product.id}`;
  interviewBackLink.textContent = product.category || product.name;
  interviewDiscoveryName.textContent = discoveryName;
  interviewTitle.textContent = isUsabilityActivity ? "Teste de Usabilidade | Checkout Experience" : "Entrevistas em Profundidade | Checkout Experience";
  interviewObjective.textContent = activeDiscovery.objective || (isUsabilityActivity
    ? "Validar se usuários conseguem concluir as principais tarefas do fluxo com clareza e confiança."
    : "Validar quais incentivos e sinais aumentam a confiança durante o checkout e reduzem fricções operacionais.");
  interviewPersonas.textContent = getInterviewPersonas(activeDiscovery);
  interviewFeedback.hidden = true;
  interviewFeedback.textContent = "";

  hydrateResearchActivityUsers(currentResearchActivityScope);
  renderInterviewParticipants();
  renderInterviewGuide(activityType);

  window.setTimeout(() => {
    interviewSkeleton.hidden = true;
    interviewContent.hidden = false;
  }, 420);
}

function countCsvDelimiter(line = "", delimiter = ",") {
  let count = 0;
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === delimiter && !inQuotes) {
      count += 1;
    }
  }

  return count;
}

function detectCsvDelimiter(text = "") {
  const sampleLine = String(text).split(/\r?\n/).find((line) => line.trim()) || "";
  return countCsvDelimiter(sampleLine, ";") > countCsvDelimiter(sampleLine, ",") ? ";" : ",";
}

function parseCsvRows(text = "", delimiter = ",") {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === delimiter && !inQuotes) {
      row.push(cell.trim());
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(cell.trim());
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell.trim());
  rows.push(row);
  return rows;
}

function normalizeCsvHeader(header = "") {
  return normalizeText(header).replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function getCsvValue(record = {}, keys = []) {
  const normalizedKeys = keys.map(normalizeCsvHeader);
  const foundKey = normalizedKeys.find((key) => Object.prototype.hasOwnProperty.call(record, key));
  return foundKey ? String(record[foundKey] || "").trim() : "";
}

function createImportedUserId(user = {}, index = 0) {
  const base = slugify(user.email || user.name || user.phone || `usuario-${index + 1}`) || `usuario-${index + 1}`;
  return `${base}-${index + 1}`;
}

function normalizeImportedUser(record = {}, index = 0, fileName = "") {
  const email = getCsvValue(record, ["email", "e-mail", "mail"]);
  const name = getCsvValue(record, ["nome", "name"]) || email;
  const phone = getCsvValue(record, ["telefone", "phone", "celular", "mobile"]);
  const role = getCsvValue(record, ["cargo", "role", "funcao", "função"]);
  const company = getCsvValue(record, ["empresa", "company"]);
  const segment = getCsvValue(record, ["segmento", "segment"]);
  const persona = getCsvValue(record, ["persona", "perfil", "profile"]);
  const notes = getCsvValue(record, ["observacoes", "observações", "notes", "notas"]);

  if (![name, email, phone, role, company, segment, persona, notes].some(Boolean)) {
    return null;
  }

  return {
    id: createImportedUserId({ name, email, phone }, index),
    name,
    email,
    phone,
    role,
    company,
    segment,
    persona,
    perfil: persona,
    notes,
    status: "PENDENTE",
    source: "csv_upload",
    importedAt: new Date().toISOString(),
    sourceFileName: fileName,
    resultUpload: null,
  };
}

function parseResearchUsersCsv(text = "", fileName = "") {
  const rows = parseCsvRows(text, detectCsvDelimiter(text));
  const headerIndex = rows.findIndex((row) => row.some((value) => String(value || "").trim()));
  if (headerIndex < 0) {
    return { users: [], ignoredRows: rows.length || 1 };
  }

  const headers = rows[headerIndex].map(normalizeCsvHeader);
  let ignoredRows = 0;
  const users = rows.slice(headerIndex + 1).map((row, index) => {
    if (!row.some((value) => String(value || "").trim())) {
      ignoredRows += 1;
      return null;
    }

    const record = {};
    headers.forEach((header, headerIndex) => {
      if (header) {
        record[header] = row[headerIndex] || "";
      }
    });

    const user = normalizeImportedUser(record, index, fileName);
    if (!user) {
      ignoredRows += 1;
    }
    return user;
  }).filter(Boolean);

  return { users, ignoredRows };
}

function setInterviewFeedback(message = "", type = "info") {
  if (!interviewFeedback) {
    return;
  }

  interviewFeedback.hidden = !message;
  interviewFeedback.className = `recruitment-feedback${type && type !== "info" ? ` ${type}` : ""}`;
  interviewFeedback.textContent = message;
}

function importResearchUsersFromFile(file) {
  if (!file || !currentResearchActivityScope) {
    return;
  }

  if (!/\.csv$/i.test(file.name) && file.type !== "text/csv") {
    setInterviewFeedback("Envie um arquivo CSV para importar usuários.", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const { users, ignoredRows } = parseResearchUsersCsv(String(reader.result || ""), file.name);
    interviewParticipants = users;
    saveResearchActivityUsers(currentResearchActivityScope, users);
    renderInterviewParticipants();

    const countMessage = `${users.length} usuário${users.length === 1 ? "" : "s"} importado${users.length === 1 ? "" : "s"}`;
    const ignoredMessage = ignoredRows ? ` ${ignoredRows} linha${ignoredRows === 1 ? "" : "s"} vazia${ignoredRows === 1 ? " foi" : "s foram"} ignorada${ignoredRows === 1 ? "" : "s"}.` : "";
    setInterviewFeedback(`${countMessage}.${ignoredMessage}`, ignoredRows ? "warning" : "success");
  };
  reader.onerror = () => {
    setInterviewFeedback("Não foi possível ler o arquivo CSV.", "error");
  };
  reader.readAsText(file);
}

function getParticipantById(participantId) {
  return interviewParticipants.find((participant) => participant.id === participantId)
    || interviewParticipantSeed.find((participant) => participant.id === participantId)
    || interviewParticipantSeed[0];
}

function getParticipantInterviewDetail(participantId) {
  const fallback = {
    date: "17/05/2026",
    duration: "49 min",
    insights: {
      pains: "Relata dificuldade para entender rapidamente se o desvio visto no checkout é erro, regra comercial ou exceção aprovada.",
      behaviors: "Antes de decidir, compara informações com histórico, conversa com pares e busca validações fora da plataforma.",
      expectations: "Espera uma experiência que antecipe risco, mostre evidências e reduza a necessidade de conferência manual.",
      opportunities: "Conectar resumo operacional, trilha de evidências e recomendação de próxima ação na mesma superfície.",
    },
  };

  return participantInterviewDetails[participantId] || fallback;
}

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "UX";
}

function renderParticipantInsights(detail) {
  const cards = [
    {
      title: "Dores principais",
      body: detail.insights.pains,
      icon: `<path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />`,
    },
    {
      title: "Comportamentos observados",
      body: detail.insights.behaviors,
      icon: `<path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />`,
    },
    {
      title: "Expectativas",
      body: detail.insights.expectations,
      icon: `<path d="M12 2v4" /><path d="M12 18v4" /><path d="m4.93 4.93 2.83 2.83" /><path d="m16.24 16.24 2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="m4.93 19.07 2.83-2.83" /><path d="m16.24 7.76 2.83-2.83" />`,
    },
    {
      title: "Oportunidades identificadas",
      body: detail.insights.opportunities,
      icon: `<path d="M12 2a7 7 0 0 0-4 12.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26A7 7 0 0 0 12 2Z" /><path d="M9 22h6" />`,
    },
  ];

  participantInsights.innerHTML = cards.map((card) => `
    <article class="participant-insight-card">
      <span aria-hidden="true">
        <svg viewBox="0 0 24 24">${card.icon}</svg>
      </span>
      <h3>${escapeHTML(card.title)}</h3>
      <p>${escapeHTML(card.body)}</p>
    </article>
  `).join("");
}

function renderTranscript(participant, detail) {
  const transcriptLines = [
    ["Entrevistador", `Obrigado por participar, ${participant.name.split(" ")[0]}. Para começar, você pode contar qual é sua relação com o processo de checkout e validação comercial?`],
    ["Participante", `Eu acompanho pedidos e condições comerciais quase todos os dias. Quando existe promoção ou ajuste de preço, preciso garantir que a informação esteja correta antes de seguir.`],
    ["Entrevistador", "O que costuma tornar esse processo mais difícil na rotina?"],
    ["Participante", detail.insights.pains],
    ["Entrevistador", "Quando você encontra uma divergência, qual é o caminho mais comum para resolver?"],
    ["Participante", `Normalmente eu confiro o pedido, procuro histórico em planilhas e conversas antigas, e só depois aciono alguém do time. O problema é que cada caso parece exigir uma investigação própria.`],
    ["Entrevistador", "Que tipo de informação ajudaria você a tomar decisão com mais confiança?"],
    ["Participante", detail.insights.expectations],
    ["Entrevistador", "Você lembra de uma situação recente em que isso gerou retrabalho?"],
    ["Participante", `Sim. Tivemos um caso em que a condição parecia errada, mas na verdade era uma exceção aprovada. Como a aprovação não estava visível no fluxo, três pessoas revisaram a mesma coisa.`],
    ["Entrevistador", "Se pudesse melhorar uma parte da experiência, qual seria?"],
    ["Participante", detail.insights.opportunities],
    ["Entrevistador", "Existe algo que deveríamos considerar antes de desenhar uma solução?"],
    ["Participante", `A solução precisa explicar o motivo do alerta. Só mostrar que algo está errado não basta; precisamos entender impacto, origem e quem pode resolver.`],
  ];

  transcriptContent.innerHTML = transcriptLines.map(([speaker, line]) => `
    <div class="transcript-line ${speaker === "Entrevistador" ? "interviewer" : "participant"}">
      <strong>${speaker}</strong>
      <p>${escapeHTML(line)}</p>
    </div>
  `).join("");
}

function renderParticipantInterviewPage(productId, discoveryId, methodId, participantId) {
  const product = products.find((item) => item.id === productId) || products[0];
  currentResearchActivityScope = {
    productId: product.id,
    discoveryId: discoveryId || selectedDiscoveryId || discoveryTemplate.id,
    methodId: slugify(methodId || "entrevista-em-profundidade"),
    activityType: getResearchActivityType(methodId),
  };
  hydrateResearchActivityUsers(currentResearchActivityScope);
  const participant = getParticipantById(participantId);
  const detail = getParticipantInterviewDetail(participant.id);

  activeRecordingParticipant = { participant, detail };
  participantInterviewBack.href = `#interview/${methodId}/${discoveryId}/${product.id}`;
  participantInterviewBreadcrumb.textContent = participant.name;
  participantAvatar.textContent = getInitials(participant.name);
  participantInterviewName.textContent = participant.name;
  participantInterviewRole.textContent = participant.role;
  participantInterviewCompany.textContent = participant.company;
  participantInterviewDate.textContent = detail.date;
  participantInterviewDuration.textContent = detail.duration;
  recordingSummary.textContent = `Gravação da entrevista com ${participant.name}, ${detail.duration}, concluída em ${detail.date}.`;
  transcriptToggle.setAttribute("aria-expanded", "false");
  transcriptContent.hidden = true;

  renderParticipantInsights(detail);
  renderTranscript(participant, detail);
}

function openRecordingModal() {
  if (!activeRecordingParticipant) {
    return;
  }

  const { participant, detail } = activeRecordingParticipant;
  isMockVideoPlaying = false;
  recordingModalTitle.textContent = `Entrevista com ${participant.name}`;
  recordingModalDuration.textContent = `${detail.duration} · Sessão concluída`;
  videoDuration.textContent = detail.duration.replace(" min", ":00");
  videoState.textContent = "Pronto para reproduzir";
  videoProgress.style.width = "0%";
  recordingModal.hidden = false;
}

function closeRecordingModal() {
  recordingModal.hidden = true;
  isMockVideoPlaying = false;
  videoState.textContent = "Pronto para reproduzir";
  videoProgress.style.width = "0%";
}

function toggleMockVideoPlayback() {
  isMockVideoPlaying = !isMockVideoPlaying;
  videoState.textContent = isMockVideoPlaying ? "Reproduzindo gravação mockada" : "Gravação pausada";
  videoProgress.style.width = isMockVideoPlaying ? "38%" : "38%";
}

function selectProduct(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  selectedProductId = product.id;
  productDetail.hidden = false;
  productDetailTitle.textContent = product.name;
  productDetailCopy.textContent = `${getProductTaxonomyLabel(product)}. ${product.discoveryCount} discovery relacionado. ${product.description}`;
  renderProducts();
}

function openProductShortcut(productName) {
  const product = products.find((item) => item.id === productName)
    || products.find((item) => normalizeText(item.name) === normalizeText(productName));

  if (!product) {
    return;
  }

  setRoute("product", product.id);
}

if (CONVERSATIONAL_ASSISTANT_ENABLED && chatForm && chatInput) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitMessage(chatInput.value);
  });

  chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitMessage(chatInput.value);
    }
  });

  quickPromptButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const prompt = button.dataset.prompt;
      if (prompt) {
        setRoute("home");
        submitMessage(prompt);
      }
    });
  });
}

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setRoute(link.dataset.routeLink);
  });
});

if (sidebar) {
  sidebar.addEventListener("click", (event) => {
    event.stopPropagation();

    const pinButton = event.target.closest("[data-sidebar-pin]");
    if (pinButton) {
      event.preventDefault();
      setSidebarPinned(!isSidebarPinned);
      return;
    }

    const productFavoriteButton = event.target.closest("[data-sidebar-product-favorite]");
    if (productFavoriteButton) {
      event.preventDefault();
      event.stopPropagation();
      toggleProductFavorite(productFavoriteButton.dataset.sidebarProductFavorite);
      renderSidebar(selectedProductId, getCurrentRoute(), selectedDiscoveryId);
      return;
    }

    const removeButton = event.target.closest("[data-remove-favorite-discovery]");
    if (removeButton) {
      event.preventDefault();
      removeFavoriteDiscovery(removeButton.dataset.removeFavoriteDiscovery);
      showAppToast("Favorito removido.", "success");
      return;
    }

    const discoveryShortcut = event.target.closest("[data-favorite-discovery-shortcut]");
    if (discoveryShortcut) {
      event.preventDefault();
      navigateToDiscovery(discoveryShortcut.dataset.favoriteDiscoveryShortcut);
      closeSidebarPanelIfTemporary();
      return;
    }

    const discoveryButton = event.target.closest("[data-sidebar-discovery]");
    if (discoveryButton) {
      event.preventDefault();
      const discoveryId = discoveryButton.dataset.sidebarDiscovery;
      const productId = discoveryButton.dataset.sidebarDiscoveryProduct || selectedProductId;
      setRoute("discovery", productId, discoveryId);
      closeSidebarPanelIfTemporary();
      return;
    }

    const productPeopleButton = event.target.closest("[data-sidebar-product-people]");
    if (productPeopleButton) {
      event.preventDefault();
      setRoute("product-audience", productPeopleButton.dataset.sidebarProductPeople);
      return;
    }

    const productOverviewButton = event.target.closest("[data-sidebar-product-overview]");
    if (productOverviewButton) {
      event.preventDefault();
      navigateToProduct(productOverviewButton.dataset.sidebarProductOverview);
      return;
    }

    const productButton = event.target.closest("[data-sidebar-product]");
    if (productButton) {
      event.preventDefault();
      selectSidebarContext({ type: "products" });
      navigateToProduct(productButton.dataset.sidebarProduct);
      closeSidebarPanelIfTemporary();
      return;
    }

    const contextButton = event.target.closest("[data-sidebar-context]");
    if (contextButton) {
      event.preventDefault();
      const context = contextButton.dataset.sidebarContext;
      selectSidebarContext({ type: context });
      setSidebarOpen(true);
      if (context === "home") {
        setRoute("home");
      } else if (context === "products") {
        setRoute("products");
      } else if (context === "recent") {
        setRoute("home");
        renderSidebar(selectedProductId, "home", selectedDiscoveryId);
      } else if (context === "favorites") {
        renderSidebar(selectedProductId, getCurrentRoute(), selectedDiscoveryId);
      }
      return;
    }

    const routeButton = event.target.closest("[data-sidebar-route]");
    if (routeButton) {
      event.preventDefault();
      selectSidebarContext({ type: routeButton.dataset.sidebarRoute });
      setRoute(routeButton.dataset.sidebarRoute);
    }
  });

  sidebar.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const productFavoriteButton = event.target.closest("[data-sidebar-product-favorite]");
    if (productFavoriteButton) {
      event.preventDefault();
      toggleProductFavorite(productFavoriteButton.dataset.sidebarProductFavorite);
      renderSidebar(selectedProductId, getCurrentRoute(), selectedDiscoveryId);
      return;
    }

    const productRow = event.target.closest("[data-sidebar-product]");
    if (productRow) {
      event.preventDefault();
      navigateToProduct(productRow.dataset.sidebarProduct);
      closeSidebarPanelIfTemporary();
    }
  });
}

document.addEventListener("click", (event) => {
  if (isSidebarPinned || sidebar?.classList.contains("collapsed")) {
    return;
  }

  if (sidebar?.contains(event.target)) {
    return;
  }

  setSidebarOpen(false, { saveSection: false });
});

if (favoriteDiscoveriesMenu) {
  favoriteDiscoveriesMenu.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-favorite-discovery]");
    if (removeButton) {
      event.preventDefault();
      removeFavoriteDiscovery(removeButton.dataset.removeFavoriteDiscovery);
      showAppToast("Favorito removido.", "success");
      return;
    }

    const shortcut = event.target.closest("[data-favorite-discovery-shortcut]");
    if (!shortcut) {
      return;
    }

    event.preventDefault();
    navigateToDiscovery(shortcut.dataset.favoriteDiscoveryShortcut);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    applyDiscoveryFilter(filter);
  });
});

if (discoveryGrid) {
  discoveryGrid.addEventListener("click", (event) => {
    const starButton = event.target.closest(".star-button");
    if (starButton) {
      event.stopPropagation();
      const card = event.target.closest(".discovery-card");
      const discoveryId = starButton.dataset.discoveryFavorite || getDiscoveryIdFromCard(card);
      toggleDiscoveryFavorite(discoveryId);
      return;
    }

    const card = event.target.closest(".discovery-card");
    if (!card) {
      return;
    }

    const product = products.find((item) => item.id === card.dataset.productId)
      || products.find((item) => normalizeText(item.name) === normalizeText(card.dataset.product))
      || products.find((item) => normalizeText(item.category) === normalizeText(card.dataset.product))
      || products.find((item) => normalizeText(item.name) === normalizeText(card.dataset.title))
      || products[0];
    const discoveryId = getDiscoveryIdFromCard(card) || discoveryTemplate.id;
    const route = card.dataset.route || (card.dataset.status === "done" ? "synthesis" : "discovery");
    setRoute(route, product.id, discoveryId);
  });
}

if (homeProductBar) {
  homeProductBar.addEventListener("click", (event) => {
    const productButton = event.target.closest("[data-home-product-id]");
    if (!productButton) {
      return;
    }

    setRoute("product", productButton.dataset.homeProductId);
  });
}

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", toggleSidebarCollapsed);
}

productSearch.addEventListener("input", () => {
  selectedProductId = null;
  productDetail.hidden = true;
  renderProducts();
});

productList.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-product-favorite]");
  if (favoriteButton) {
    const product = products.find((item) => item.id === favoriteButton.dataset.productFavorite);
    if (product) {
      toggleProductFavorite(product.id);
      renderProducts();
    }
    return;
  }

  const productRow = event.target.closest("[data-product-id]");
  if (productRow) {
    setRoute("product", productRow.dataset.productId);
  }
});

productList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const productRow = event.target.closest("[data-product-id]");
  if (productRow) {
    event.preventDefault();
    setRoute("product", productRow.dataset.productId);
  }
});

productDetailOpen.addEventListener("click", () => {
  if (selectedProductId) {
    setRoute("product", selectedProductId);
  }
});

if (productDetailChat) {
  productDetailChat.hidden = !CONVERSATIONAL_ASSISTANT_ENABLED;
  productDetailChat.addEventListener("click", () => {
    if (!CONVERSATIONAL_ASSISTANT_ENABLED) {
      return;
    }

    const product = products.find((item) => item.id === selectedProductId);
    if (!product) {
      return;
    }

    setRoute("home");
    submitMessage(`Resumo do produto ${product.name}`);
  });
}

productDetailClear.addEventListener("click", () => {
  selectedProductId = null;
  productDetail.hidden = true;
  renderProducts();
});

productAudiencePage?.addEventListener("click", (event) => {
  const discoveryFavoriteButton = event.target.closest("[data-discovery-favorite]");
  if (discoveryFavoriteButton) {
    event.preventDefault();
    event.stopPropagation();
    toggleDiscoveryFavorite(discoveryFavoriteButton.dataset.discoveryFavorite);
    return;
  }

  const tabButton = event.target.closest("[data-audience-tab]");
  if (tabButton) {
    activeAudienceTab = tabButton.dataset.audienceTab === "stakeholders" ? "stakeholders" : "personas";
    renderProductAudienceRoute(selectedProductId || getCurrentProductId(), getProductAudienceRouteInfo());
    return;
  }

  const deleteButton = event.target.closest("[data-audience-delete]");
  if (deleteButton) {
    const product = getProductById(selectedProductId || getCurrentProductId()) || products[0];
    openAudienceDeleteConfirmation(product, deleteButton.dataset.audienceKind || "persona", deleteButton.dataset.audienceDelete);
  }
});

productAudiencePage?.addEventListener("change", (event) => {
  const archiveToggle = event.target.closest("[data-audience-show-archived]");
  if (!archiveToggle) {
    return;
  }

  audienceShowArchived = archiveToggle.checked;
  renderProductAudienceRoute(selectedProductId || getCurrentProductId(), getProductAudienceRouteInfo());
});

productAudiencePage?.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-audience-form]");
  if (!form) {
    return;
  }

  event.preventDefault();
  handleAudienceFormSubmit(form);
});

audienceConfirmCancel?.addEventListener("click", closeAudienceDeleteConfirmation);
audienceConfirmModal?.addEventListener("click", (event) => {
  if (event.target === audienceConfirmModal) {
    closeAudienceDeleteConfirmation();
  }
});
audienceConfirmActions.forEach((button) => {
  button.addEventListener("click", () => {
    handleAudienceDeleteAction(button.dataset.audienceConfirmAction);
  });
});

productAudienceSummary?.addEventListener("click", (event) => {
  const previewButton = event.target.closest("[data-product-audience-preview]");
  if (!previewButton) {
    return;
  }

  const product = getProductById(selectedProductId || getCurrentProductId()) || products[0];
  openProductAudiencePreviewModal(product);
});

productAudiencePreviewClose?.addEventListener("click", closeProductAudiencePreviewModal);
productAudiencePreviewModal?.addEventListener("click", (event) => {
  if (event.target === productAudiencePreviewModal) {
    closeProductAudiencePreviewModal();
    return;
  }

  if (event.target.closest("[data-product-audience-preview-link]")) {
    closeProductAudiencePreviewModal();
  }
});

discoveryPeoplePreviewClose?.addEventListener("click", closeDiscoveryPeoplePreviewModal);
discoveryPeoplePreviewModal?.addEventListener("click", (event) => {
  if (event.target === discoveryPeoplePreviewModal) {
    closeDiscoveryPeoplePreviewModal();
    return;
  }

  if (event.target.closest("[data-discovery-people-link]")) {
    closeDiscoveryPeoplePreviewModal();
  }
});

discoveryPeopleEditClose?.addEventListener("click", closeDiscoveryPeopleEditModal);
discoveryPeopleEditCancel?.addEventListener("click", closeDiscoveryPeopleEditModal);
discoveryPeopleEditSave?.addEventListener("click", persistDiscoveryPeopleSelection);
discoveryPeopleEditModal?.addEventListener("click", (event) => {
  if (event.target === discoveryPeopleEditModal) {
    closeDiscoveryPeopleEditModal();
    return;
  }

  const quickAddButton = event.target.closest("[data-discovery-people-quick-add]");
  if (quickAddButton) {
    handleDiscoveryPeopleQuickAdd(quickAddButton.dataset.discoveryPeopleQuickAdd || "persona");
    return;
  }

  const personaSelectionButton = event.target.closest("[data-discovery-persona-selection]");
  if (personaSelectionButton) {
    event.preventDefault();
    toggleDiscoveryPeopleEditSelection("persona", personaSelectionButton.dataset.discoveryPersonaSelection);
    return;
  }

  const stakeholderSelectionButton = event.target.closest("[data-discovery-stakeholder-selection]");
  if (stakeholderSelectionButton) {
    event.preventDefault();
    toggleDiscoveryPeopleEditSelection("stakeholder", stakeholderSelectionButton.dataset.discoveryStakeholderSelection);
    return;
  }

  if (event.target.closest("[data-discovery-people-link]")) {
    closeDiscoveryPeopleEditModal();
  }
});
discoveryPeopleEditModal?.addEventListener("input", (event) => {
  const searchInput = event.target.closest("[data-discovery-people-search]");
  if (!searchInput || !editingDiscoveryPeopleSelection) {
    return;
  }

  const kind = searchInput.dataset.discoveryPeopleSearch === "stakeholder" ? "stakeholder" : "persona";
  editingDiscoveryPeopleSelection = {
    ...editingDiscoveryPeopleSelection,
    [kind === "stakeholder" ? "stakeholderQuery" : "personaQuery"]: searchInput.value,
  };
  renderDiscoveryPeopleEditSelection({ focusSearchKind: kind });
});
discoveryPeopleEditModal?.addEventListener("keydown", (event) => {
  const quickAddInput = event.target.closest("[data-discovery-people-quick-add-input]");
  if (!quickAddInput || event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  handleDiscoveryPeopleQuickAdd(quickAddInput.dataset.discoveryPeopleQuickAddInput || "persona");
});

csdModalClose?.addEventListener("click", closeCsdMatrixModal);
csdModalCancel?.addEventListener("click", closeCsdMatrixModal);
csdModalSave?.addEventListener("click", saveCsdMatrixModal);
csdModal?.addEventListener("click", (event) => {
  if (event.target === csdModal) {
    closeCsdMatrixModal();
    return;
  }

  const addButton = event.target.closest("[data-csd-add-column]");
  if (addButton) {
    addCsdMatrixItem(addButton.dataset.csdAddColumn || "certainties");
    return;
  }

  const removeButton = event.target.closest("[data-csd-remove-item]");
  if (removeButton) {
    const { key, index } = parseCsdMatrixTarget(removeButton.dataset.csdRemoveItem);
    removeCsdMatrixItem(key, index);
    return;
  }

  const startConfirmButton = event.target.closest("[data-csd-start-confirm-assumption]");
  if (startConfirmButton) {
    startCsdAssumptionConfirmation(Number(startConfirmButton.dataset.csdStartConfirmAssumption) || 0);
    return;
  }

  const confirmButton = event.target.closest("[data-csd-confirm-assumption-final]");
  if (confirmButton) {
    confirmCsdAssumptionAsCertainty(Number(confirmButton.dataset.csdConfirmAssumptionFinal) || 0);
    return;
  }

  const cancelConfirmButton = event.target.closest("[data-csd-confirm-assumption-cancel]");
  if (cancelConfirmButton) {
    cancelCsdAssumptionConfirmation(Number(cancelConfirmButton.dataset.csdConfirmAssumptionCancel) || 0);
    return;
  }

  const answerButton = event.target.closest("[data-csd-start-answer-doubt]");
  if (answerButton) {
    startCsdDoubtAnswer(Number(answerButton.dataset.csdStartAnswerDoubt) || 0);
    return;
  }

  const saveAnswerButton = event.target.closest("[data-csd-save-doubt-answer]");
  if (saveAnswerButton) {
    saveCsdDoubtAnswer(Number(saveAnswerButton.dataset.csdSaveDoubtAnswer) || 0);
    return;
  }

  const cancelAnswerButton = event.target.closest("[data-csd-cancel-doubt-answer]");
  if (cancelAnswerButton) {
    cancelCsdDoubtAnswer(Number(cancelAnswerButton.dataset.csdCancelDoubtAnswer) || 0);
  }
});
csdModal?.addEventListener("input", (event) => {
  const textInput = event.target.closest("[data-csd-item-text]");
  if (textInput) {
    const { key, index } = parseCsdMatrixTarget(textInput.dataset.csdItemText);
    updateCsdMatrixActiveItem(key, index, { text: textInput.value });
    return;
  }

  const answerInput = event.target.closest("[data-csd-doubt-answer-draft]");
  if (answerInput) {
    updateCsdMatrixActiveItem("doubts", Number(answerInput.dataset.csdDoubtAnswerDraft) || 0, {
      answerDraft: answerInput.value,
      isAnswering: true,
      answerError: false,
    });
  }
});

discoveryDetailFavorite?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const discoveryId = discoveryDetailFavorite.dataset.discoveryFavorite || selectedDiscoveryId;
  toggleDiscoveryFavorite(discoveryId);
});

productDiscoverySearch.addEventListener("input", () => {
  const product = products.find((item) => item.id === selectedProductId) || products[0];
  renderProductDiscoveries(product);
});

productNewDiscoveryButton.addEventListener("click", () => {
  selectedProductId = selectedProductId || getCurrentProductId();
  openNewDiscoveryModal();
});

productDiscoveryGrid.addEventListener("click", (event) => {
  const starButton = event.target.closest(".star-button");
  if (starButton) {
    event.stopPropagation();
    const card = event.target.closest("[data-product-discovery-index]");
    const discoveryId = starButton.dataset.discoveryFavorite || getDiscoveryIdFromCard(card);
    toggleDiscoveryFavorite(discoveryId);
    return;
  }

  const card = event.target.closest("[data-product-discovery-index]");
  const product = products.find((item) => item.id === selectedProductId) || products[0];
  if (card) {
    const discoveryId = card.dataset.productDiscoveryId || `discovery-${Number(card.dataset.productDiscoveryIndex) + 1}`;
    const route = card.dataset.productDiscoveryRoute || "discovery";
    setRoute(route, product.id, discoveryId);
  }
});

productArtifacts?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-artifact]");
  if (!button) {
    return;
  }

  button.textContent = "Aberto";
  button.classList.add("artifact-status");
});

discoveryArtifacts.addEventListener("click", (event) => {
  const button = event.target.closest("[data-discovery-artifact]");
  if (!button) {
    return;
  }

  button.textContent = "Aberto";
  button.classList.add("artifact-status");
});

discoveryPage.addEventListener("click", (event) => {
  const csdOpenButton = event.target.closest("[data-open-csd-matrix]");
  if (csdOpenButton) {
    openCsdMatrixModal(csdOpenButton.dataset.openCsdMatrix || selectedDiscoveryId || getCurrentDiscoveryId());
    return;
  }

  const peoplePreviewButton = event.target.closest("[data-discovery-people-preview]");
  if (peoplePreviewButton) {
    openDiscoveryPeoplePreviewModal();
    return;
  }

  const peopleEditButton = event.target.closest("[data-discovery-people-edit]");
  if (peopleEditButton) {
    openDiscoveryPeopleEditModal();
    return;
  }

  const placeholderButton = event.target.closest("[data-placeholder-action]");
  if (placeholderButton) {
    if (isLocalMockApiMode()) {
      showDemoModeMessage();
      return;
    }

    const actionLabel = placeholderButton.dataset.placeholderAction === "download-handoff"
      ? "Export do pacote ainda depende do backend."
      : "Cópia estruturada ainda depende do backend.";
    showAppToast(actionLabel, "success");
    return;
  }

  const opportunityActionButton = event.target.closest("[data-opportunity-review-action]");
  if (opportunityActionButton) {
    handleOpportunityReviewAction(opportunityActionButton.dataset.opportunityReviewAction);
    return;
  }

  const insightActionButton = event.target.closest("[data-insight-review-action]");
  if (insightActionButton) {
    handleInsightReviewAction(insightActionButton.dataset.insightReviewAction);
    return;
  }

  const evidenceSubmitButton = event.target.closest("[data-evidence-submit]");
  if (evidenceSubmitButton) {
    handleEvidenceUploadSubmit();
    return;
  }

  const evidenceRemoveButton = event.target.closest("[data-evidence-remove]");
  if (evidenceRemoveButton) {
    removeEvidenceUploadItem(Number(evidenceRemoveButton.dataset.evidenceRemove));
    return;
  }

  const actionButton = event.target.closest("[data-research-approval-action]");
  if (!actionButton) {
    return;
  }

  handleResearchApprovalAction(actionButton.dataset.researchApprovalAction);
});

discoveryPage.addEventListener("submit", (event) => {
  const evidenceForm = event.target.closest("[data-evidence-upload-form]");
  if (!evidenceForm) {
    return;
  }

  event.preventDefault();
  addEvidenceUploadItem();
});

methodologyList.addEventListener("click", (event) => {
  const methodCard = event.target.closest("[data-method-index]");
  if (!methodCard) {
    return;
  }

  const activeDiscovery = getEditableDiscovery();
  const method = activeDiscovery.methods[Number(methodCard.dataset.methodIndex)];
  if (!method) {
    return;
  }

  if (isInterviewMethod(method.name) || isUsabilityMethod(method.name)) {
    openInterviewDetail(method);
    return;
  }

  if (isCsdMethod(method.name)) {
    openCsdMatrixModal(activeDiscovery.id || selectedDiscoveryId || getCurrentDiscoveryId());
    return;
  }

  openMethodEntryModal(Number(methodCard.dataset.methodIndex));
});

interviewParticipantsBody.addEventListener("click", (event) => {
  const statusMenuButton = event.target.closest("[data-interview-status-menu]");
  if (statusMenuButton) {
    openInterviewStatusMenu(statusMenuButton.dataset.interviewStatusMenu, statusMenuButton);
    return;
  }

  const uploadResultButton = event.target.closest("[data-interview-upload-result]");
  if (uploadResultButton) {
    uploadResearchUserResult(uploadResultButton.dataset.interviewUploadResult);
    return;
  }

  const viewButton = event.target.closest("[data-interview-view]");
  if (!viewButton) {
    return;
  }

  const participant = getParticipantById(viewButton.dataset.interviewView);
  if (viewButton.disabled || !participant) {
    return;
  }

  setRoute(
    "interview-session",
    selectedProductId || getCurrentProductId(),
    selectedDiscoveryId || getCurrentDiscoveryId(),
    selectedInterviewMethodId || getCurrentInterviewMethodId(),
    viewButton.dataset.interviewView,
  );
});

document.addEventListener("click", (event) => {
  const statusOption = event.target.closest("[data-interview-status-option]");
  if (statusOption) {
    const dropdown = statusOption.closest("[data-interview-status-dropdown]");
    updateResearchUserStatus(dropdown?.dataset.interviewStatusDropdown, statusOption.dataset.interviewStatusOption);
    return;
  }

  if (
    event.target.closest("[data-interview-status-dropdown]")
    || event.target.closest("[data-interview-status-menu]")
  ) {
    return;
  }

  closeInterviewStatusMenu();
});

window.addEventListener("resize", closeInterviewStatusMenu);

interviewUsersImport?.addEventListener("click", () => {
  interviewUsersFile?.click();
});

interviewUsersFile?.addEventListener("change", () => {
  const [file] = interviewUsersFile.files || [];
  importResearchUsersFromFile(file);
  interviewUsersFile.value = "";
});

transcriptToggle.addEventListener("click", () => {
  const willOpen = transcriptContent.hidden;
  transcriptContent.hidden = !willOpen;
  transcriptToggle.setAttribute("aria-expanded", String(willOpen));
});

watchRecordingButton.addEventListener("click", openRecordingModal);
recordingClose.addEventListener("click", closeRecordingModal);
recordingModal.addEventListener("click", (event) => {
  if (event.target === recordingModal) {
    closeRecordingModal();
  }
});
videoPlayButton.addEventListener("click", toggleMockVideoPlayback);

methodEntryFileButton.addEventListener("click", () => {
  methodEntryFile.click();
});

methodEntryFile.addEventListener("change", () => {
  methodEntryFiles = [
    ...methodEntryFiles,
    ...[...methodEntryFile.files].map(normalizeFileInfo),
  ];
  methodEntryFile.value = "";
  renderMethodEntryFiles();
});

methodEntryFileList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-method-entry-file-remove]");
  if (!removeButton) {
    return;
  }

  methodEntryFiles.splice(Number(removeButton.dataset.methodEntryFileRemove), 1);
  renderMethodEntryFiles();
});

methodEntryClose.addEventListener("click", closeMethodEntryModal);
methodEntryCancel.addEventListener("click", closeMethodEntryModal);

methodEntryModal.addEventListener("click", (event) => {
  if (event.target === methodEntryModal) {
    closeMethodEntryModal();
  }
});

methodEntryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveMethodEntry();
});

teamButton?.addEventListener("click", () => {
  document.querySelector(".product-hero-meta")?.scrollIntoView({ behavior: "smooth", block: "center" });
});

closeNewDiscoveryButton.addEventListener("click", closeNewDiscoveryModal);
cancelNewDiscoveryButtons.forEach((button) => {
  button.addEventListener("click", closeNewDiscoveryModal);
});

function createNewDiscoveryDraft({
  draftId = "",
  title = "",
  problem = "",
  objective = "",
  csd = {},
  methodology = null,
  methods = null,
  crewAi = null,
}) {
  const csdInsights = [
    ...(csd.certezas || []).map((item) => `Certeza: ${item}`),
    ...(csd.suposicoes || []).map((item) => `Suposição: ${item}`),
    ...(csd.duvidas || []).map((item) => `Dúvida: ${item}`),
  ];
  const hasCsdInputs = csdInsights.length > 0;

  const draftTitle = getNewDiscoveryDraftTitle(title, objective);
  const resolvedDraftId = draftId || createNewDiscoveryDraftId(draftTitle);
  const product = products.find((item) => item.id === selectedProductId) || products[0];
  const selectedMethodology = methodology || getSelectedMethodologyPackage();
  const csdMatrix = createCsdMatrixFromLegacyCsd(csd);
  const normalizedCrewResult = normalizeCrewAiDiscoveryResult(crewAi?.result || crewAi?.statusPayload || {});
  const localFiles = newDiscoverySupportFiles.map(normalizeFileInfo);
  const localLinks = [...newDiscoverySupportLinksDraft];
  const peopleSelection = getNewDiscoveryPeopleSelection(product);
  const artifactItems = [
    "Briefing inicial",
    ...localFiles.map((file) => file.name),
    ...localLinks,
  ].filter(Boolean);

  draftDiscovery = {
    ...createBlankDraftDiscovery(resolvedDraftId),
    name: draftTitle,
    title: draftTitle,
    discovery_id: resolvedDraftId,
    kickoff_id: crewAi?.kickoffId || "",
    crewAiStatusPayload: crewAi?.statusPayload || null,
    crewAiResult: crewAi?.result || null,
    crewAi,
    productId: product.id,
    problem: problem || "Problema ainda não informado.",
    objective: objective || "Objetivo ainda não informado.",
    discoveryReady: normalizedCrewResult.discoveryReady,
    discovery_ready: normalizedCrewResult.discovery_ready,
    reasoning: normalizedCrewResult.reasoning,
    insights: normalizedCrewResult.insights,
    tags: ["rascunho", "novo-discovery", selectedMethodology.name],
    methodology: selectedMethodology,
    selectedMethodology,
    methodologyType: selectedMethodology.name,
    methodologyId: selectedMethodology.id,
    methods: methods || buildMethodsFromMethodology(selectedMethodology.id),
    participants: newDiscoveryParticipantsDraft,
    personaIds: peopleSelection.personaIds,
    stakeholderIds: peopleSelection.stakeholderIds,
    personasSnapshot: peopleSelection.personasSnapshot,
    stakeholdersSnapshot: peopleSelection.stakeholdersSnapshot,
    deadline: newDiscoveryDeadlineDraft,
    links: localLinks,
    files: localFiles,
    csd,
    csdMatrix,
    hasCsdInputs,
    artifacts: artifactItems,
  };

  upsertCreatedDiscovery(draftDiscovery);
  renderRecentDraftDiscoveryCard();
  renderProductDiscoveries(product);
  updateNewDiscoveryProgress(100);
  closeNewDiscoveryModal({ force: true });
  setRoute("discovery", product.id, resolvedDraftId);
}

function createMvpDiscoveryDraft({
  draftId = "",
  runId = "",
  kickoffPayload = {},
  title = "",
  problem = "",
  objective = "",
  csd = {},
  methodology = null,
  methods = null,
}) {
  const draftTitle = getNewDiscoveryDraftTitle(title, objective);
  const resolvedDraftId = draftId || createNewDiscoveryDraftId(draftTitle);
  const product = products.find((item) => item.id === selectedProductId) || products[0];
  const selectedMethodology = methodology || getSelectedMethodologyPackage();
  const lifecycle = getDiscoveryRunLifecycle(kickoffPayload, {
    current_state: WORKFLOW_STATES.DISCOVERY_CREATED,
    status: RUN_STATUSES.RUNNING,
  });
  const localFiles = newDiscoverySupportFiles.map(normalizeFileInfo);
  const localLinks = [...newDiscoverySupportLinksDraft];
  const peopleSelection = getNewDiscoveryPeopleSelection(product);
  const now = new Date().toISOString();
  const csdMatrix = createCsdMatrixFromLegacyCsd(csd, { updatedAt: now });

  draftDiscovery = {
    ...createBlankDraftDiscovery(resolvedDraftId),
    id: resolvedDraftId,
    name: draftTitle,
    title: draftTitle,
    discovery_id: resolvedDraftId,
    run_id: runId,
    runId,
    current_state: lifecycle.current_state,
    status: lifecycle.status,
    runKickoffPayload: kickoffPayload,
    productId: product.id,
    problem: problem || "Problema ainda não informado.",
    objective: objective || "Objetivo ainda não informado.",
    tags: ["rascunho", "novo-discovery", selectedMethodology.name],
    methodology: selectedMethodology,
    selectedMethodology,
    methodologyType: selectedMethodology.name,
    methodologyId: selectedMethodology.id,
    methods: methods || buildMethodsFromMethodology(selectedMethodology.id),
    participants: newDiscoveryParticipantsDraft,
    personaIds: peopleSelection.personaIds,
    stakeholderIds: peopleSelection.stakeholderIds,
    personasSnapshot: peopleSelection.personasSnapshot,
    stakeholdersSnapshot: peopleSelection.stakeholdersSnapshot,
    deadline: newDiscoveryDeadlineDraft,
    links: localLinks,
    files: localFiles,
    csd,
    csdMatrix,
    hasCsdInputs: Boolean((csd.certezas || []).length || (csd.suposicoes || []).length || (csd.duvidas || []).length),
    artifacts: ["Briefing inicial", ...localFiles.map((file) => file.name), ...localLinks].filter(Boolean),
    created_at: kickoffPayload.created_at || now,
    updated_at: kickoffPayload.updated_at || now,
  };

  upsertCreatedDiscovery(draftDiscovery);
  renderRecentDraftDiscoveryCard();
  renderProductDiscoveries(product);
  updateNewDiscoveryProgress(100);
  closeNewDiscoveryModal({ force: true });
  setRoute("discovery", product.id, resolvedDraftId);
}

async function createDiscoveryWithMvpBackend({
  draftId = "",
  draftTitle = "",
  csd = {},
  selectedMethodology = getSelectedMethodologyPackage(),
} = {}) {
  const product = products.find((item) => item.id === selectedProductId) || products[0];
  const isDemoMode = isLocalMockApiMode();

  setNewDiscoveryCreateState(true);
  setNewDiscoveryStatus(isDemoMode ? DEMO_MODE_MESSAGE : "Criando run no Discovery AI...");
  resetCrewKickoffPanel();
  crewKickoffStartedAt = Date.now();
  startCrewKickoffElapsedTimer();
  updateCrewKickoffPanel({
    summary: isDemoMode
      ? "Modo demo ativo. O discovery será criado com dados locais e estados simulados."
      : "Criando run no backend MVP. O discovery abrirá assim que o kickoff responder.",
    phase: isDemoMode ? "Simulação local" : "Kickoff",
  });
  addCrewKickoffLog(`Discovery ID gerado: ${draftId}.`);
  if (isDemoMode) {
    addCrewKickoffLog(DEMO_MODE_MESSAGE);
  }

  try {
    const kickoffInput = buildDiscoveryRunInput({
      discoveryId: draftId,
      productId: product.id,
      title: draftTitle,
      problem: newDiscoveryProblemDraft,
      objective: newDiscoveryObjectiveDraft,
      participants: newDiscoveryParticipantsDraft,
      csd,
      links: newDiscoverySupportLinksDraft,
      deadline: newDiscoveryDeadlineDraft,
      methodology: selectedMethodology,
      files: newDiscoverySupportFiles,
    });
    addCrewKickoffLog(isDemoMode ? "Simulando kickoff local." : "Enviando POST /api/discovery/kickoff.");
    const kickoffPayload = await kickoffDiscoveryRun(kickoffInput);
    const responseIdentifiers = extractDiscoveryRunIdentifiers(kickoffPayload);
    if (!responseIdentifiers.runId && !responseIdentifiers.discoveryId) {
      throw new Error("O Discovery AI backend não retornou run_id ou discovery_id.");
    }

    const resolvedDraftId = responseIdentifiers.discoveryId || draftId;
    updateCrewKickoffPanel({
      summary: isDemoMode
        ? "Discovery demo criado. Os próximos estados serão simulados localmente."
        : "Run criada. Abrindo discovery e acompanhando status em segundo plano.",
      phase: isDemoMode ? "Demo criada" : "Run criada",
      kickoffId: responseIdentifiers.runId || resolvedDraftId,
      state: "success",
    });
    addCrewKickoffLog(`Run criada: ${responseIdentifiers.runId || "sem run_id retornado"}.`, "success");
    stopCrewKickoffElapsedTimer();
    createMvpDiscoveryDraft({
      draftId: resolvedDraftId,
      runId: responseIdentifiers.runId,
      kickoffPayload,
      title: newDiscoveryTitleDraft,
      problem: newDiscoveryProblemDraft,
      objective: newDiscoveryObjectiveDraft,
      csd,
      methodology: selectedMethodology,
      methods: buildMethodsFromMethodology(selectedMethodology.id),
    });
  } catch (error) {
    const friendlyError = getFriendlyUiErrorMessage(error, "Não foi possível criar a run no Discovery AI.");
    setNewDiscoveryCreateState(false);
    stopCrewKickoffElapsedTimer();
    updateCrewKickoffPanel({
      summary: friendlyError,
      phase: "Falha",
      state: "error",
    });
    addCrewKickoffLog(friendlyError, "error");
    if (error.payload) {
      addCrewKickoffLog(`Resposta da API: ${formatApiPayloadDetails(error.payload)}`, "error");
    }
    setNewDiscoveryStatus(friendlyError, "error");
  }
}

newDiscoverySetupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newDiscoveryTitleDraft = newDiscoverySetupTitle.value.trim();
  newDiscoveryProblemDraft = newDiscoverySetupProblem.value.trim();
  newDiscoveryObjectiveDraft = newDiscoverySetupObjective.value.trim();

  if (!newDiscoveryTitleDraft || !newDiscoveryProblemDraft || !newDiscoveryObjectiveDraft) {
    return;
  }

  openNewDiscoveryParticipantsStep();
});

flowSelectButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const key = button.dataset.flowSelect;
    const menu = document.querySelector(`[data-flow-select-menu="${key}"]`);
    const field = button.closest(".custom-select, .participant-field");
    const shouldOpen = button.getAttribute("aria-expanded") !== "true";

    closeFlowSelectMenus(shouldOpen ? key : "");
    button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    field?.classList.toggle("open", shouldOpen);
    if (menu) {
      menu.hidden = !shouldOpen;
    }
  });
});

newDiscoveryProductPeople?.addEventListener("click", (event) => {
  const manageAudienceLink = event.target.closest("[data-manage-product-audience]");
  if (manageAudienceLink) {
    event.preventDefault();
    const product = getProductById(selectedProductId || getCurrentProductId()) || products[0];
    closeNewDiscoveryModal({ force: true });
    setRoute("product-audience", product.id);
    return;
  }

  const personaButton = event.target.closest("[data-persona-toggle]");
  if (personaButton) {
    toggleSelectedPersona(personaButton.dataset.personaToggle);
    return;
  }

  const stakeholderButton = event.target.closest("[data-stakeholder-toggle]");
  if (stakeholderButton) {
    toggleSelectedStakeholder(stakeholderButton.dataset.stakeholderToggle);
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".participant-field")) {
    closeFlowSelectMenus();
  }
});

newDiscoverySupportFileButton.addEventListener("click", () => {
  newDiscoverySupportFile.click();
});

newDiscoverySupportFile.addEventListener("change", () => {
  const files = [...newDiscoverySupportFile.files];
  newDiscoverySupportFileLabel.textContent = files.length
    ? files.map((file) => file.name).join(", ")
    : "Selecione seu arquivo";
});

addSupportLinkButton.addEventListener("click", () => {
  syncSupportLinksFromInputs();
  newDiscoverySupportLinksDraft = [...normalizeSupportLinkRows(newDiscoverySupportLinksDraft), ""];
  renderSupportLinkRows(newDiscoverySupportLinksDraft.length - 1);
});

newDiscoverySupportLinks.addEventListener("input", (event) => {
  const input = event.target.closest("[data-support-link-input]");
  if (!input) {
    return;
  }

  const linkIndex = Number(input.dataset.supportLinkIndex);
  if (!Number.isInteger(linkIndex) || linkIndex < 0) {
    return;
  }

  const links = normalizeSupportLinkRows(newDiscoverySupportLinksDraft);
  links[linkIndex] = input.value;
  newDiscoverySupportLinksDraft = links;
});

newDiscoverySupportLinks.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-support-link]");
  if (!removeButton) {
    return;
  }

  syncSupportLinksFromInputs();
  const removeIndex = Number(removeButton.dataset.removeSupportLink);
  if (!Number.isInteger(removeIndex) || removeIndex < 0) {
    return;
  }

  const links = normalizeSupportLinkRows(newDiscoverySupportLinksDraft);
  links.splice(removeIndex, 1);
  newDiscoverySupportLinksDraft = links.length ? links : [""];
  renderSupportLinkRows(Math.min(removeIndex, newDiscoverySupportLinksDraft.length - 1));
});

newDiscoveryParticipantsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  collectParticipantInfo();
  openNewDiscoveryCsdStep();
});

newDiscoveryParticipantsBack.addEventListener("click", () => {
  setNewDiscoveryStep("setup");
  updateNewDiscoveryProgress(0);
  window.setTimeout(() => newDiscoverySetupTitle.focus(), 0);
});

newDiscoveryCsdBack.addEventListener("click", () => {
  setNewDiscoveryStep("participants");
  updateNewDiscoveryProgress(50);
});

newDiscoveryCsdForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (isCreatingNewDiscovery) {
    return;
  }

  collectParticipantInfo();
  newDiscoveryCsdDraft = collectCsdInfo();
  openNewDiscoveryMethodologyStep();
});

newDiscoveryMethodologyBack.addEventListener("click", () => {
  setNewDiscoveryStep("csd");
  updateNewDiscoveryProgress(75);
});

methodologyOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setSelectedMethodology(button.dataset.methodologyOption);
  });
});

newDiscoveryMethodologyForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (isCreatingNewDiscovery) {
    return;
  }

  collectParticipantInfo();
  const csd = Object.keys(newDiscoveryCsdDraft).length ? newDiscoveryCsdDraft : collectCsdInfo();
  const selectedMethodology = getSelectedMethodologyPackage();
  const draftTitle = getNewDiscoveryDraftTitle(newDiscoveryTitleDraft, newDiscoveryObjectiveDraft);
  const draftId = createNewDiscoveryDraftId(draftTitle);

  if (DISCOVERY_FRONTEND_API_MODE !== DISCOVERY_FRONTEND_API_MODES.LEGACY_CREWAI) {
    await createDiscoveryWithMvpBackend({
      draftId,
      draftTitle,
      csd,
      selectedMethodology,
    });
    return;
  }

  setNewDiscoveryCreateState(true);
  setNewDiscoveryStatus("Enviando discovery para CrewAI...");
  resetCrewKickoffPanel();
  crewKickoffStartedAt = Date.now();
  startCrewKickoffElapsedTimer();
  updateCrewKickoffPanel({
    summary: "Preparando payload e configuração segura do proxy.",
    phase: "Preparando",
  });
  addCrewKickoffLog(`Discovery ID gerado: ${draftId}.`);

  try {
    addCrewKickoffLog("Carregando configuração de polling.");
    updateCrewKickoffPanel({
      summary: "Buscando /api/config por até 2s. Se não responder, o kickoff seguirá com valores padrão.",
      phase: "Configuração",
    });
    const configLoaded = await loadCrewAiClientConfig();
    addCrewKickoffLog(configLoaded ? "Configuração de polling carregada." : "Configuração não respondeu; usando valores padrão.");
    updateCrewKickoffPanel({
      summary: `Polling configurado a cada ${Math.round(crewAiPollIntervalMs / 1000)}s por até ${Math.round(crewAiPollTimeoutMs / 60000)}min.`,
      phase: "Configuração",
    });
    addCrewKickoffLog("Enviando POST /kickoff para CrewAI via proxy local.");
    const kickoffPayload = await kickoffCrewAiDiscovery({
      discoveryId: draftId,
      title: draftTitle,
      problem: newDiscoveryProblemDraft,
      objective: newDiscoveryObjectiveDraft,
      participants: newDiscoveryParticipantsDraft,
      csd,
      links: newDiscoverySupportLinksDraft,
      deadline: newDiscoveryDeadlineDraft,
      methodology: selectedMethodology,
    });
    updateCrewKickoffPanel({
      summary: "Kickoff criado. Iniciando acompanhamento de status.",
      phase: "Kickoff recebido",
      kickoffId: kickoffPayload.kickoff_id,
    });
    addCrewKickoffLog(`kickoff_id recebido: ${kickoffPayload.kickoff_id}.`, "success");
    setNewDiscoveryStatus(`Processamento iniciado. Kickoff: ${kickoffPayload.kickoff_id}`);
    const statusPayload = await pollCrewAiStatus(kickoffPayload.kickoff_id);
    createNewDiscoveryDraft({
      draftId,
      title: newDiscoveryTitleDraft,
      problem: newDiscoveryProblemDraft,
      objective: newDiscoveryObjectiveDraft,
      csd,
      methodology: selectedMethodology,
      methods: buildMethodsFromMethodology(selectedMethodology.id),
      crewAi: {
        discoveryId: draftId,
        kickoffId: kickoffPayload.kickoff_id,
        kickoffPayload,
        statusPayload,
        result: getCrewAiResult(statusPayload),
      },
    });
  } catch (error) {
    setNewDiscoveryCreateState(false);
    stopCrewKickoffElapsedTimer();
    updateCrewKickoffPanel({
      summary: error.message || "Não foi possível criar o discovery via CrewAI.",
      phase: "Falha",
      state: "error",
    });
    addCrewKickoffLog(error.message || "Não foi possível criar o discovery via CrewAI.", "error");
    if (error.payload) {
      addCrewKickoffLog(`Resposta da API: ${formatCrewAiPayloadForLog(error.payload)}`, "error");
    }
    setNewDiscoveryStatus(error.message || "Não foi possível criar o discovery via CrewAI.", "error");
  }
});

newDiscoveryCsdForm.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-csd-add]");
  if (addButton) {
    const list = document.querySelector(`[data-csd-list="${addButton.dataset.csdAdd}"]`);
    const row = document.createElement("div");
    row.className = "csd-row";
    row.innerHTML = `<input type="text" placeholder="Placeholder" /><button type="button" data-csd-remove aria-label="Remover item">⌫</button>`;
    list.appendChild(row);
    row.querySelector("input").focus();
    return;
  }

  const removeButton = event.target.closest("[data-csd-remove]");
  if (removeButton) {
    const list = removeButton.closest(".csd-list");
    if (list.querySelectorAll(".csd-row").length > 1) {
      removeButton.closest(".csd-row").remove();
    } else {
      removeButton.closest(".csd-row").querySelector("input").value = "";
    }
  }
});

discoveryAttachButton.addEventListener("click", () => {
  discoveryAttachmentInput.click();
});

discoveryAttachmentInput.addEventListener("change", () => {
  discoveryAttachments = [...discoveryAttachmentInput.files];
  renderDiscoveryAttachments();
});

newDiscoveryModal.addEventListener("click", (event) => {
  if (event.target === newDiscoveryModal) {
    closeNewDiscoveryModal();
  }
});

discoveryChatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = discoveryChatInput.value.trim();
  const attachmentNames = discoveryAttachments.map((file) => file.name);
  if (!message && !attachmentNames.length) {
    return;
  }

  const isDraftRoute = String(selectedDiscoveryId || "").startsWith("draft-");
  const createdDiscovery = findCreatedDiscovery(selectedDiscoveryId);
  if (createdDiscovery) {
    draftDiscovery = createdDiscovery;
  } else if (isDraftRoute && draftDiscovery?.id !== selectedDiscoveryId) {
    draftDiscovery = createBlankDraftDiscovery(selectedDiscoveryId);
  }

  const activeDiscovery = draftDiscovery?.id === selectedDiscoveryId ? draftDiscovery : discoveryTemplate;
  if (isDraftRoute && activeDiscovery === draftDiscovery) {
    if (!getDiscoveryRunId(draftDiscovery)) {
      draftDiscovery.methodologyVisible = true;
      methodologyPanel.hidden = false;
    }
    if (findCreatedDiscovery(draftDiscovery.id)) {
      upsertCreatedDiscovery(draftDiscovery);
    }
  }

  const userMessage = attachmentNames.length
    ? `${message || "Arquivos anexados"} | Anexos: ${attachmentNames.join(", ")}`
    : message;

  addDiscoveryChatMessage("user", userMessage);
  discoveryChatInput.value = "";
  clearDiscoveryAttachments();
  window.setTimeout(() => {
    const attachmentReply = attachmentNames.length ? " Vou considerar os anexos como evidências de apoio para a análise." : "";
    addDiscoveryChatMessage("bot", `Para "${activeDiscovery.name}", eu sugiro transformar isso em hipótese, evidência necessária e próximo passo de pesquisa.${attachmentReply}`);
  }, 260);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (!methodEntryModal.hidden) {
    closeMethodEntryModal();
    return;
  }

  if (csdModal && !csdModal.hidden) {
    closeCsdMatrixModal();
    return;
  }

  if (!recordingModal.hidden) {
    closeRecordingModal();
    return;
  }

  if (!newDiscoveryModal.hidden) {
    closeNewDiscoveryModal();
    return;
  }

  if (productAudiencePreviewModal && !productAudiencePreviewModal.hidden) {
    closeProductAudiencePreviewModal();
    return;
  }

  if (discoveryPeoplePreviewModal && !discoveryPeoplePreviewModal.hidden) {
    closeDiscoveryPeoplePreviewModal();
    return;
  }

  if (discoveryPeopleEditModal && !discoveryPeopleEditModal.hidden) {
    closeDiscoveryPeopleEditModal();
    return;
  }

  if (audienceConfirmModal && !audienceConfirmModal.hidden) {
    closeAudienceDeleteConfirmation();
  }
});

window.addEventListener("hashchange", () => {
  setRoute(getCurrentRoute(), getCurrentProductId(), getCurrentDiscoveryId(), getCurrentInterviewMethodId(), getCurrentInterviewParticipantId());
});

initializeFlowSelects();
renderApiModeBadge();
renderProducts();
isSidebarPinned = loadSidebarPinned();
{
  const routeSidebarSection = getRouteSidebarSection(getCurrentRoute());
  const storedSidebarSection = loadSidebarSelectedSection();
  selectedSidebarContext = {
    type: storedSidebarSection && (storedSidebarSection !== "home" || routeSidebarSection === "home")
      ? storedSidebarSection
      : routeSidebarSection,
  };
}
appShell?.classList.toggle("sidebar-pinned", isSidebarPinned);
setSidebarOpen(isSidebarPinned, { saveSection: false });
setRoute(getCurrentRoute(), getCurrentProductId(), getCurrentDiscoveryId(), getCurrentInterviewMethodId(), getCurrentInterviewParticipantId());
refreshDiscoveryFavoriteControls();
if (!HAS_STATIC_DISCOVERY_FRONTEND_CONFIG && (!isLocalMockApiMode() || !getRequestedDiscoveryFrontendApiMode())) {
  loadFrontendApiModeFromConfig().then((modeChanged) => {
    if (!modeChanged) {
      return;
    }

    renderProducts();
    setRoute(getCurrentRoute(), getCurrentProductId(), getCurrentDiscoveryId(), getCurrentInterviewMethodId(), getCurrentInterviewParticipantId());
    refreshDiscoveryFavoriteControls();
  });
}
