---
title: "mlflow v3.15.0"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.15.0"
version: "v3.15.0"
published: "2026-07-31"
type: "minor"
lang: "en"
summary: "MLflow 3.15.0 includes several major features and improvements"
---

# mlflow v3.15.0

MLflow 3.15.0 includes several major features and improvements

### Major New Features

- **🧩 [MCP Registry](https://mlflow.org/docs/latest/genai/mcp-registry/)**: A centralized catalog for registering, versioning, and sharing Model Context Protocol servers — with semantic-versioned configs, promotable aliases, tags, auto-discovered tools, and ready-made connection instructions for Claude Code and `.mcp.json`. Manage it from the UI, REST API, or Python!
- **🤖 MLflow Assistant enhancements**: The in-app AI assistant now supports multiple LLM providers (Claude Code, Codex, and OpenAI-compatible/Gateway endpoints) chosen from a single settings page, displays live per-session token usage and estimated cost in the composer, and is easier to set up — `mlflow agent setup` can enable it in one prompt, with API keys stored securely in the Gateway's LLM Connections.
- **🗂️ Sharable table views**: Save named views of the Runs table — capturing columns, order, widths, filters, and sort — and share them by URL.
- **⚡ Proxy-less artifact upload/download via presigned URLs**: Large artifact transfers can now bypass the tracking server and talk directly to cloud storage (e.g. S3) through presigned URLs, cutting server load and timeouts on big files. We fall back to proxied transfer automatically for backward compatibility.
- **🖼️ Multi-modal attachments in LLM judges**: `{{ trace }}` judges created with `make_judge()` can now _see_ images captured in trace spans via a new `get_span_image` tool, which fetches attachments as base64 data URLs and passes them to multimodal models (Anthropic, Gemini, and OpenAI-compatible via litellm) — enabling evaluation of vision tasks, screenshots, and other visual content.

### Other Assorted Features & Improvements:

- [Tracing / Tracking] Add Pydantic AI 2.x autologging support (#24721, @B-Step62)
- [Tracing / UI] [3/3] Add action recommendation for low-value issue detection result (#24580, @B-Step62)
- [Gateway] Support per-endpoint budget policies in the AI Gateway (#24370, @joelrobin18)
- [Evaluation / Gateway] Add `sap-ai-core:/` provider for SAP AI Core Orchestration v2 with `extra_headers` support (#24356, @shivamxtech)
- [Model Registry] [Model Registry] Migrate UC model artifact download to native temp-creds (#24576, @AknA13)
- [Gateway / Tracing / UI] [2/3] Simplify issue detection start modal (#24579, @B-Step62)
- [Tracing / UI] [1/3] Run issue detection in the background (#24578, @B-Step62)
- [Tracing] [BUG] Fix otel parent context propagation (#24444, @iyashk)
- [Model Registry] [Model Registry] Gate UC model-registry client on native `/api/2.1` endpoints (#24517, @AknA13)
- [Docs / Tracking] Enable artifacts-only mode with workspaces (#24452, @kramaranya)
- [Tracing / UI] Stop eagerly prefetching full neighboring traces in tracing UI (#24411, @DaoDaoNoCode)
- [Docs / Gateway] Authenticate OpenAI-protocol coding agents through the RBAC gateway (#24294, @joshuawong-db)
- [Tracing] feat: add search traces to typescript sdk (#23660, @WUMIKE233)
- [Prompts / UI] Add per-tool cards with a Monaco JSON editor and Format action to the Playground (#24129, @tanghaoji)
- [Prompts / UI] Redesign Playground `Tools` settings with an Add-tools entry flow (#24102, @tanghaoji)
- [] feat: add Cursor model catalog with Auto and Composer 2.5 pricing (#24078, @TomeHirata)
- [Tracing / Tracking] Support numeric assessment trace filters (#23948, @tanghaoji)

Bug fixes:

- [Tracing] Compute `mlflow.llm.cost` for Claude Code plugin traces on Databricks (#24416, @harupy)
- [UI] Fix artifact direct download capability checks in UI (#24748, @B-Step62)
- [Tracing / UI] Refresh traces saved-view on load across multiple windows (#24746, @joshuawong-db)
- [UI] Fix UnauthorizedError constructor message (#24729, @mihir2921)
- [UI] Fall back to nested spans for Chat Sessions turn content (#24703, @MannXo)
- [Tracing / Tracking] Fix experiment GC cascades for traces and logged models (#24351, @copilot-swe-agent)
- [Tracking] Fix workspace-enabled tracking store crash-loop when the default experiment is renamed (#24598, @daniellok-db)
- [Tracking] Fix Kubernetes auth token extraction for `kubernetes-client` 36+ (#24687, @HumairAK)
- [UI] Refresh Assistant config when leaving settings so the provider indicator isn't stale (#24704, @joshuawong-db)
- [Build] Fix `imagePullSecrets` for garbage collection CronJob (#24626, @nightcityblade)
- [UI] Lift Assistant floating button above bottom-pinned action bars (#24606, @joshuawong-db)
- [Evaluation / Tracing] Fix issue detection structured output schema (#24674, @B-Step62)
- [Models] Add `MLFLOW_ALLOW_PICKLE_DESERIALIZATION` guard to `mlflow.statsmodels` flavor (#24686, @B-Step62)
- [Tracking] Preserve static prefixes in notebook trace renderer URL (#24682, @mprahl)
- [UI] Fix blank and fields in run detail sidebar (#24634, @aishdbx)
- [Models / Scoring] Normalize reasoning content parts for `ChatAgentMessage` in `parse_message` (#24642, @iyashk)
- [UI] Fix Evaluation Runs `Actions` dropdown remaining clickable when no runs are selected (#24676, @daniellok-db)
- [UI] Surface truncated assistant streams as errors instead of a silent `done` (#24603, @joshuawong-db)
- [Tracking] Honor experiment grants on `--artifacts-only` servers when workspaces disabled (#24585, @PattaraS)
- [Tracking / UI] Bound get-history-bulk-interval memory by sampling metric history by row (#24305, @Mytolo)
- [Tracking] [BUG] Enforce artifact authorization on presigned download route in basic-auth (#24571, @iyashk)
- [Evaluation] Preserve explicit expectations in `mlflow.genai.evaluate` (#24561, @yangbaechu)
- [Gateway / UI] Support Portkey routing configuration in the AI Gateway (#24398, @rs-03)
- [UI] Show input modal submission errors inline instead of a transient toast in `GenericInputModal` (#23918, @Vedant-Agarwal)
- [Evaluation / Tracking] Enforce experiment permission on online scoring config endpoints (#24562, @aaronteo-db)
- [Tracing / Tracking] Propagate contextvars into trace read thread pool workers (#24456, @iyashk)
- [] Fix Windows path handling in artifact downloads (#20225, @acepace)
- [UI] Fix sidebar navigation and workflow type not updating on URL navigation or browser Back/Forward (#22116, @DaoDaoNoCode)
- [Gateway] Don't send `stream_options` from the Assistant to the gateway (#24552, @joshuawong-db)
- [Evaluation] Fix MemAlign guideline distillation against Databricks structured-output models (#24547, @veronicalyu320)
- [UI] fix: sort tags alphabetically in runs tag multiselect dropdown (#24134, @mysticalayushi)
- [Tracing] Fix LLM cost on autologged `ChatDatabricks` traces by preferring `ls_provider` (#24185, @james-fletcher-db)
- [Tracking] Fix pytorch `pt2` export for batch-size-1 `input_example` (use `Dim.AUTO`) (#24494, @B-Step62)
- [Tracing / Tracking] Fix double-counted trace token usage for rollup parent spans in `SqlAlchemyStore.log_spans` (#24339, @gauthierpiarrette)
- [Tracking] Fix `MlflowSparkStudy` pruner and direction handling (#24425, @hellocybernetics)
- [Gateway / Tracing / UI] Fix gateway Try-in-Browser traces rendering as raw `kvlist` data in the UI (#24400, @joelrobin18)
- [UI] Fix role modal resource pickers failing with `FEATURE_DISABLED` when workspaces are disabled (#24441, @joelrobin18)
- [Model Registry] [Model Registry] Restore oneof on TemporaryCredentials.credentials (#24489, @AknA13)
- [UI] [fix] Fix runs-table column reordering before pinned anchors (#24465, @joshuawong-db)
- [UI] Fix admin permission grants failing with `FEATURE_DISABLED` when workspaces are disabled (#24383, @joelrobin18)
- [UI] Fix `Columns` dropdown anchoring on the runs table (#24419, @joshuawong-db)
- [UI] Fix artifact viewer crash on text files with many lines (#23899, @jayceguo)
- [Tracing] Fix async trace export dropping workspace context (#24093) (#24275, @vatsalyd)
- [Tracing] fix: store OpenAI agent Generation span attributes under correct SpanAttributeKey constants (#24290, @RudraDudhat2509)
- [Tracing / Tracking] Fix Postgres deadlock between `start_trace()` and `log_spans()` on trace metadata (#24338, @joshuawong-db)
- [Tracing / Tracking] Avoid eager span deserialization for TRACKING_STORE trace reads. (#24331, @shivamAmrutia)
- [Gateway] Resolve workspace context before running FastAPI auth validators (#24368, @joelrobin18)
- [Tracing] Fix `RecursionError` corrupting deeply nested traces (#24362, @joshuawong-db)
- [Evaluation / Tracing] Fix `genai.evaluate` crash when a cloned trace is unavailable (#24357, @joshuawong-db)
- [Scoring] Handle uncut `{major}.x` minor in `DatabricksRuntimeVersion.parse` (#24353, @PattaraS)
- [Evaluation / Tracing] Fix basic-auth before-request validators invoking view functions (#24354, @joshuawong-db)
- [UI] Fix promo modal focus (aria-hidden) and show it on the empty models page (#24278, @aminehd)
- [Scoring] Fix `spark_udf` `InvalidVersion` on Databricks Serverless for `{major}.x` runtime image strings (#24336, @PattaraS)
- [Tracing] Fix trace OTLP encoding for lone surrogates (#24318, @sanatb187)
- [Model Registry / Models] Forward tags to registered ModelVersion in Model.log() (#24271, @Ankita7033)
- [Tracing / UI] Fix duplicate full-trace fetch for `TRACKING_STORE` traces in the trace UI (#24319, @PattaraS)
- [Models / Scoring] Honor declared ONNX execution providers at load time (#24232, @qyc)
- [Evaluation] Fix pos_label not propagated to evaluate ROC/PR/calibration curves (#24049, @immu4989)
- [Tracking] Resolve experiment id from workspace-prefixed artifact paths in auth proxy (#24214, @rakshithbk-moeng)
- [] Fix `DatabricksSDKModelsArtifactRepository` auth on serverless executors (#24247, @harupy)
- [Evaluation] Send strict-compatible `response_format` for AI Gateway judges and scorers (#24048, @B-Step62)
- [Model Registry] Require read permission on the source run or model when creating a model version (#24293, @PattaraS)
- [] Fix Vertex AI Gemini multi-turn tool calling (#24266, @joshuawong-db)
- [Tracking] Enforce update-run authorization on the LogInputs endpoint (#24291, @PattaraS)
- [Tracking] Honor `MLFLOW_S3_IGNORE_TLS` in multipart artifact upload (#24113, @yashmahamulkar)
- [Gateway / Tracking] Reject non-HTTP scopes in WSGI mount to fix WebSocket crash (#24274, @joshuawong-db)
- [Model Registry / Tracing / Tracking] Fix tracing provider thread leak and `set_experiment` silently re-enabling tracing (#24267, @PattaraS)
- [Tracing] Fix @mlflow/opencode dropping session metadata against published core (#24252, @joshuawong-db)
- [UI] [BUG] Fix #24170: surface direct (per-resource) permissions in Admin UI (#24253, @nghessss)
- [Model Registry] Fix DNS-rebinding SSRF bypass in webhook delivery (#24258, @PattaraS)
- [Tracing / Tracking] Fix Summary ignoring valid=False Assessments (#24251, @joshuawong-db)
- [Evaluation] Route DSPy judge optimizer Databricks models to Mosaic AI Gateway for Unity Catalog names (#24177, @veronicalyu320)
- [UI] Allow granting of tool call permissions on MLflow assistant (#24084, @joshuawong-db)
- [Build] Fix Python 3.14 compatibility in skill_installer by using pathlib.Path (#24103, @krishtyagi0109-pixel)
- [UI] Render playground tool-call args and JSON responses as code blocks (#24086, @tanghaoji)
- [Gateway] Support Gemini thought signature in AI Gateway (#24051, @vatsalyd)
- [UI] fix(playground): render tool_calls so prompts run with tools no longer show empty result (#24073, @tanghaoji)

Documentation updates:

- [Docs] Add documentation for MCP Registry feature (#24713, @dkuc)
- [Docs / Tracing] docs: troubleshoot $0 trace cost for unknown model names (#24705, @daniellok-db)
- [Docs] docs: credential-expiry trace-drop cause in tracing FAQ, experiment_id in quickstart (#24692, @adamgurary)
- [Docs] Add Swagger UI API docs for MCP Server Registry (#24519, @dkuc)
- [Docs] docs: update auth REST API docs to reflect new RBAC endpoints (#23965, @Farzah11)
- [Docs] docs: fix broken auth REST API links causing Access Denied (#24280) (#24350, @Farzah11)
- [Docs] Add Artifact Hub repository metadata and OCI install docs for the Helm chart (#24313, @B-Step62)
- [Docs] docs: update Omnigent integration page for pure OTel setup (#24240, @TomeHirata)
- [Docs] docs: add Omnigent tracing integration page (#24072, @TomeHirata)

Small bug fixes and documentation updates:

#24746, #24747, #24671, #24637, #24655, #24459, #24510, #24629, #24426, #24554, #24555, #24556, #24359, #24460, #24445, #23676, #24446, #24268, #24417, #24358, #24288, #24250, #24206, #24165, #23939, #23936, #23881, @joshuawong-db; #24743, #24723, #24720, #24694, #24695, #24706, #24698, #24693, #24636, #24675, #24673, #24672, #24663, #24632, #24630, #24628, #24627, #24625, #24548, #24216, #24208, #24205, #24158, #24159, #24136, #24095, #24119, #24106, #24104, #24085, @harupy; #24736, @henishborad; #24717, #24583, #24582, #24584, #24685, #24621, #24604, #24521, #24482, #24495, #24484, #24480, #24481, #24490, #24374, #24317, #24299, @B-Step62; #24656, @rrioh; #24696, #24600, #24601, @daniellok-db; #24657, @DaoDaoNoCode; #24217, @nananosirova; #24645, #24377, #24492, #24380, #21417, #24346, #24297, #24108, @mprahl; #24477, @dkuc; #24572, #24520, #24479, @jonburdo; #24505, @PattaraS; #24242, @Killian-fal; #24558, #24540, #24090, #24139, #24089, #24061, #24032, #24030, @aaronteo-db; #24176, @zcin; #24412, @AknA13; #24437, @smoorjani; #24361, @sun-andsky; #23873, @WeichenXu123; #24240, #24203, #24178, @TomeHirata; #24225, #24204, #24166, #24054, @tanghaoji; #23794, #24171, @kramaranya; #23251, @aakankshaduggal; #24151, #24150, @xq-yin; #24075, @kevin-lyn

---

> **Source** [mlflow/mlflow](https://github.com/mlflow/mlflow) · `v3.15.0` · 2026-07-31 · [upstream release](https://github.com/mlflow/mlflow/releases/tag/v3.15.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
