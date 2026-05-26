(() => {
  const params = new URLSearchParams(window.location.search);
  const hasExplicitMode = Boolean(
    window.DISCOVERY_FRONTEND_API_MODE
      || params.get("apiMode")
      || params.get("discoveryApiMode")
      || window.localStorage?.getItem("discoveryIa.frontendApiMode"),
  );

  if (!hasExplicitMode) {
    window.DISCOVERY_FRONTEND_API_MODE = "mock";
  }
})();
