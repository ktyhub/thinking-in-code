---
title: "mlflow v3.16.0"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.16.0"
version: "v3.16.0"
published: "2026-09-04"
type: "minor"
lang: "en"
summary: "MLflow 3.16.0 includes several major features and improvements"
---

# mlflow v3.16.0

MLflow 3.16.0 includes several major features and improvements

### Major New Features

- **🎨 Custom Trace Views**: Design your own trace UI in plain English — describe the view you want and the **MLflow Assistant** builds it for you, laying out exactly the fields you care about with no config files or custom code. Save, name, and reuse views per experiment so your whole team shares the same lens on your traces.
- **🔭 Redesigned Trace Experience (now default)**: The trace explorer has been rebuilt from the ground up and is now the default — tighter row density, cleaner navigation, and a redesigned span-tree view. **Reorder columns**, add **configurable custom columns** from any trace tag or metadata field, and find multi-turn conversations inline via **session grouping**.
- **🔗 Span Links**: Spans rarely stand alone. MLflow 3.16.0 adds first-class **span links** so relationships between spans — a retrieval step, a tool call, a downstream trace — are captured and navigable. Record links in your SDK and the trace explorer surfaces them in a dedicated Links tab to jump straight to the destination span.

Breaking changes:

- [Server-infra / Tracking] basic-auth: enable fail-closed authorization by default (#25308, @PattaraS)
- [Build / Models] Drop cross version testing for pyspark < 3.4.4 (#25098, @harupy)
- [Gateway / Tracing] fix: Serve FastAPI-native routers under `--static-prefix` (#24511, @SeiichiroYoshioka)

Features:

- [Evaluation / Tracing / Tracking] Add mlflow skills agent hints for GenAI anti-patterns (#25496, @james-fletcher-db)
- [Tracing] Add shell-based MLflow Tracing setup wizard (#25441, @B-Step62)
- [Gateway] Support per-user budget policies in the AI Gateway (USER scope + principal) (#24371, @joelrobin18)
- [Tracing / UI] Add trace-table column reordering to V4 traces tab (#25428, @joshuawong-db)
- [Tracing / UI] Add `Expectation` field to the traces table filter UI (#25460, @creater29)
- [Tracing / UI] Add saved views to MLflow demo (#25392, @joshuawong-db)
- [Tracing / UI] Add configurable custom trace columns (tags + metadata) to Traces V4 (#25427, @joshuawong-db)
- [Tracing / Tracking / UI] Refresh the Traces V4 table: row density, header, and navigation (#25354, @joshuawong-db)
- [Tracing / UI] Mount Traces V4 as the default traces experience (#25424, @joshuawong-db)
- [Tracing / UI] Port redesigned trace explorer (v2) to OSS (#25355, @joshuawong-db)
- [UI] Deprecate the experiment Sessions tab in favor of Traces session grouping (#25350, @joshuawong-db)
- [Evaluation / Tracing] feat(typescript): add `logFeedback` and typed trace assessments (#25169, @rajudandigam)
- [Tracing] Point coding agents at the MLflow tracing skill on `import mlflow` (#25247, @harupy)
- [Evaluation / Gateway] Support UC model services in built-in judges (#25246, @TomeHirata)
- [Tracing / UI] Enable `shouldEnableModelTraceExplorerCustomTraceView` in OSS (#25245, @aaronteo-db)
- [Tracking] jobs: add configurable Huey storage URL for Redis (#22653, @jeevan6996)
- [Tracking] [chart] Add optional External Secrets Operator support (#24523, @habibaikram1)
- [Evaluation] Enrich `mlflow scorers list --builtin` with the full scorer catalog (#25003, @joshuawong-db)
- [Tracing / UI] feat(ui): display scorer description in tooltip for custom judges (#22043, @adamgurary)
- [UI] Add Image Grid toggle for run parameters (#23705, @jdoughty04)
- [Tracing / Tracking / UI] [Custom View] Enforce saved view limit per experiment (#25064, @tanghaoji)
- [Tracking] [1/6] basic-auth: fail-closed authorization net + coverage guard (#25065, @PattaraS)
- [Build / Scoring] Bump model serving image to Ubuntu 24.04 and Python 3.11 (#25089, @harupy)
- [] Add SpanLink support to TypeScript SDK (#23480, @robinnarsinghranabhat)
- [Docs / Tracking] [Custom View] Increase experiment tag value limit to 20000 (#25062, @aaronteo-db)
- [Tracing / Tracking] feat(ts-sdk): add `MLFLOW_TRACKING_AUTH=kubernetes`/`kubernetes-namespaced` support (#24243, @robinnarsinghranabhat)
- [Tracing / UI] [Custom View] Add custom view deletion (#25057, @tanghaoji)
- [Tracing / UI] [Custom View] Support local Assistant providers with structured responses (#25034, @tanghaoji)
- [Tracing / UI] [Custom View] Submit custom view build prompts directly to Assistant (#25026, @aaronteo-db)
- [] Support optimizing chat-type prompts in `optimize_prompts` (#23488, @gaurav0107)
- [Docs / Tracking] Add `--artifact-policy retarget` to `mlflow db move-resources` for repointing experiment artifact roots (#24635, @gauthierpiarrette)
- [] [5 / N] Add custom view tab UI, save/rename, and experiment tag persistence (#24798, @aaronteo-db)
- [Evaluation] Expose `generate_rationale_first` through `make_judge` (#25002, @aaronteo-db)
- [Tracing / UI] [4/N] Add client-tool pause/resume for `render_custom_view` in Assistant (#24796, @aaronteo-db)
- [Tracing] Enable OpenCode tracing plugin to include reasoning/thinking content in the Span (#22997, @robinnarsinghranabhat)
- [UI] feat: enable parent-child run view in GenAI mode (#24790, @pasainatan)
- [Tracing] Add workspace support to Claude Code plugin (#23773, @Gkrumbach07)
- [Evaluation] Add Databricks scorer versioning support (#24940, @nihalmenon)
- [Tracking] Add artifact_path support for logged model artifacts (#23147, @Sanskar121543)
- [Tracing / UI] [3/N] Add custom view persistence model and prompt context builder (#24794, @aaronteo-db)
- [Tracing / UI] [2/N] Add data-source binding and A2UI message/template validator (#24792, @aaronteo-db)
- [Gateway] Add 13 new models to Databricks AI Gateway model catalog (#24893, @TomeHirata)
- [Evaluation / Tracking / UI] Add Assistant analyze action to evaluation runs (#24865, @joshuawong-db)
- [UI] [1/N] Updated A2UI catalog schema and added typed primitives for custom trace views (#24788, @aaronteo-db)

Bug fixes:

- [Tracing] Fix host-only Databricks CLI commands in tracing setup (#25529, @B-Step62)
- [Model Registry] [BUGFIX] Preserve empty webhook fields in partial `update_webhook` calls (#25509, @CoralGarden52)
- [UI] Wrap the traces toolbar so custom-date controls don't overflow off-screen (#25512, @joshuawong-db)
- [Tracing / UI] Fix V4 trace drawer review action (#25510, @joshuawong-db)
- [Tracing / UI] Fix Custom Views in Traces V4 (#25488, @joshuawong-db)
- [Evaluation / Tracking] Fix proto conversion of `DatasetRecordSourceType.UNSPECIFIED` dataset record sources (#25230, @2sumtech)
- [Tracing / UI] Fix Traces V4 "1 of 0" footer count on exact trace-id search (#25483, @joshuawong-db)
- [Tracing] fix: prevent async trace queue deadlock during flush (#25264, @mukeshbhandarkar)
- [Evaluation] Fix `IndexError` in `merge_records` after `to_dict`/`to_df` on empty `EvaluationDataset` (#25498, @TomeHirata)
- [Tracking] Fix integer/varchar type mismatch in WorkspaceAwareSqlAlchemyStore experiment_id filters (#25232, @mayuriphad)
- [Model Registry] [BUGFIX] Preserve status in partial `update_webhook` calls (#24842, @abligail)
- [Tracking] Fix `search_logged_models` quoted-value parsing and invalid-operator message (#25398, @VenishPaneliya)
- [Tracing] Keep `@mlflow/openai` Chat Completion spans open during streaming (#25416, @copilot-swe-agent)
- [Build] Fix the Helm chart ServiceMonitor rendering a null metrics path (#25365, @aqeelat)
- [Scoring] Return 400 instead of 500 for a non-UTF-8 scoring request body (#25173, @tushardev-365)
- [UI] Fix: show assistant floating button on remote servers with `MLFLOW_ENABLE_REMOTE_ASSISTANT=true` (#25394, @TomeHirata)
- [UI] Include `traceId` query param in trace navigation links (#25375, @NJAHNAVI2907)
- [Models] Fix pyfunc load crash on ONNX `(name, options)` provider entries (#25310, @rrioh)
- [Tracking] fix: use chunked I/O in HdfsArtifactRepository to prevent OOM (#21941, @OneSizeFitsQuorum)
- [Build / Tracking] Fix Windows CI failures: drive-letter paths and OS error messages (#25382, @TomeHirata)
- [Models] Fix empty Responses Agent output streams (#25388, @copilot-swe-agent)
- [Prompts] Remove redundant text from GEPA reflective datasets (#25387, @copilot-swe-agent)
- [Evaluation] Fix stale expectations and record counts on dataset export (#25265, @mprahl)
- [Docs] fix: correct max_output_tokens for 10 Databricks-hosted models (#25360, @TomeHirata)
- [Tracing / UI] Normalize span links from OTLP endpoints in the trace explorer (#25319, @khaledsulayman)
- [Tracing] Flush the `SpanBatcher` from the trace flush paths so UC-table spans are exported (#25260, @alekseevpavel04)
- [UI] Fix autoscale layout state in metric charts (#25314, @PrithviBadiga)
- [UI] Preserve chart section when switching chart type in `RunsChartsConfigureModal` (#25283, @DaoDaoNoCode)
- [Scoring / Tracking] Fix scorer experiment_id VARCHAR binds on PostgreSQL + psycopg v3 (#25315, @rexminnis)
- [Gateway] Fix streaming passthrough skipping fallback (#25268, @TomeHirata)
- [Evaluation] Propagate eval_retry_context flags into the scorer thread pool (#25318, @joshuawong-db)
- [] feat: add rate limiting and retry support to automatic evaluation path (#24702, @rahul-oss-sap)
- [UI] fix: Ensure consistent ordering of runs for charts (#25019, @pasainatan)
- [Tracing] Fix basic auth overriding Kubernetes auth in Python SDK (#25131, @karimitanii)
- [Tracking] Ignore S3 directory markers in artifact listing (#23250, @Vinno97)
- [Tracking] [8/8] basic-auth: gate native FastAPI job routes on per-job ownership (#25102, @PattaraS)
- [Gateway / Tracking] [7/8] basic-auth: fail-closed enforcement for native FastAPI routes (#25101, @PattaraS)
- [Evaluation / Tracking] [6/6] basic-auth: gate presigned/invoke/demo/metric-twin; empty the debt list (#25071, @PattaraS)
- [Gateway] basic-auth: redact gateway secrets-config passphrase signal from non-admins (#25298, @PattaraS)
- [UI] Fix stale deps and example in the Optimize Prompt modal (#25143, @PattaraS)
- [Gateway / Tracking] [5/6] basic-auth: gate gateway guardrail/budget/config/discovery + filter list endpoints (#25070, @PattaraS)
- [Tracing / Tracking] Fix $0.00 cost panel for bare Databricks serving-endpoint model names (#24620, @adamgurary)
- [Tracing / Tracking] Read top-level cache_read/creation token counts in `openai` autolog (#24618, @adamgurary)
- [UI] [MLflow Assistant] Fix trace drawer closing when opening the Assistant provider picker (#25255, @aaronteo-db)
- [] [Security] Deny Assistant Read tool file access when no project directory is configured (#24513, @LiteshGhute)
- [Tracking] Skip `entry_point.getLogger()` when unavailable in dynamic token config provider (#25207, @serena-ruan)
- [UI] Fix visibility control bug for Evaluation Runs in Gen AI mode (#25094, @pasainatan)
- [Tracking] [4/6] basic-auth: gate job routes on per-job ownership (#25069, @PattaraS)
- [Tracing / Tracking] Offload `log_spans()` from the async event loop (#25185, @HumairAK)
- [Evaluation / Tracing / Tracking] Fix late-binding closure in `configure_autologging_for_evaluation` configuring the wrong flavor (#25135, @Koustav-github)
- [Evaluation / Tracking] [3/6] basic-auth: gate issue routes on experiment permission (#25067, @PattaraS)
- [Models] Parse schema datetimes as nanoseconds under pandas 3 (#25119, @harupy)
- [Models] Bound pandas in logged requirements for prophet <1.2.2 (#25118, @harupy)
- [Evaluation / Tracking] [2/6] basic-auth: gate evaluation dataset routes on experiment permission (#25066, @PattaraS)
- [Tracking] [1/6] basic-auth: fail-closed authorization net + coverage guard (#25065, @PattaraS)
- [Tracing / UI] Add copy button for markdown-rendered span values in trace explorer (#24619, @adamgurary)
- [UI] Link evaluation datasets from the run overview dataset drawer (#25061, @PattaraS)
- [Tracing] Map OpenInference prompt-cache token counts in `OpenInferenceTranslator` (#25039, @felix-xsenda)
- [Tracking] Prevent object-store artifact deletion from removing sibling paths (#25024, @yangbaechu)
- [Docs / Tracing] Honor explicit set_outputs() inside the @mlflow.trace decorator (#24624, @adamgurary)
- [Tracking] [tracking] Fix system metrics resume step without metric history mate… (#23401, @iis-MarkKuang)
- [] fix(gateway): handle missing finish_reason in openai_compatible streaming (#24111, @lavkeshdwivedi)
- [Tracking] fix: Stop `SearchUtils._get_value` from silently dropping dataset IN clause values (#25045, @kaikaila)
- [Tracing] Surface trace-export auth failures at ERROR instead of silently dropping traces (#24847, @adamgurary)
- [Models] Fix PyFunc artifact path collisions (#24681, @yangbaechu)
- [Build] Bump Docker base image from `python:3.10-slim-bullseye` to `python:3.11-slim-trixie` (#24961, @mille-printemps)
- [Models] Fix remaining `torch_dtype` deprecation warnings on load and save paths (#25017, @rrioh)
- [Tracking] Bound `log_batch` duplicate-metric recovery in `SqlAlchemyStore` by batch size (#24683, @jayceguo)
- [] Fix `pydantic-ai-slim` version detection in autologging (#24959, @jiahao6635)
- [Gateway] fix(gateway): preserve provider usage extras (#25010, @uuzzrm)
- [Tracking] fix(langchain): elevate secondary autolog exception handlers to `logger.warning` (#22040, @adamgurary)
- [UI] fix(ui): Batch run fetching in `CompareRunPage` to avoid one request per run (#24894, @daniellok-db)
- [Tracing / Tracking] perf(tracing): index trace archival candidate ordering (#24976, @medisean)
- [Gateway] Preserve provider usage extras in OpenAI-compatible gateway (#25000, @uuzzrm)
- [Models] Fix Windows separators in pyfunc artifact paths (#24432, @evanwrm)
- [Tracking] Fix cross-batch deadlock in concurrent log_batch latest_metrics writes (#24941, @Michael97-li)
- [Tracking] Avoid re-enabling externally-disabled loggers in `_configure_mlflow_loggers` (#24957, @aaronteo-db)
- [Evaluation] Preserve schema maps when enforcing strict JSON schemas (#24193, @sairavuri-sudo)
- [Tracing] Fix flaky `test_search_traces_yields_expected_dataframe_contents` by flushing before snapshotting (#24996, @harupy)
- [Gateway] Handle zstd-compressed request bodies on the AI Gateway (#24784, @midhunsomu)
- [Tracing / Tracking] Surface Anthropic prompt-cache token counts in `mlflow.pydantic_ai.autolog` (#23052, @JasonPan)
- [Tracing] Resolve UC path from active experiment when using `get_trace` with a plain ID (#24700, @aishdbx)
- [Tracing] Validate trace exists in link_prompts_to_trace (fixes #24067) (#24303, @zibranxo)
- [UI] Hide redundant metric names in chart cards (#23212, @xianjianlf2)
- [Gateway] Fix Bedrock gateway grouping of parallel tool results (#24309, @shivamAmrutia)
- [Tracing / Tracking] fix: use response model name for openai chat (#22325, @hansen-young)
- [Gateway] Reject unspecified `linkage_type` in gateway model configs instead of returning 500 (#24664, @KunalBharadwaj)
- [Docs / Evaluation / Tracing] Fix: Add trace completion buffer to prevent online evaluator from skipping long-running traces (#22006, @amitmodi)
- [Models] Fix `torch_dtype` deprecation warning on transformers model load (#24929, @serena-ruan)
- [Tracing] Fix basic-auth after-request handler registration (#24322, @sun-andsky)
- [Gateway] Support Vertex AI `eu`/`us` multi-region endpoints in gateway provider (#24932, @aaronteo-db)
- [UI] Allow valid Kubernetes workspace names with consecutive hyphens (#24229, @divya0709)
- [Models / Tracking] Fix model-metric-dataset association broken by stale cached `ActiveRun` outputs (#21855, @daniellok-db)
- [Tracing] Capture Bedrock prompt caching token fields and normalize input tokens to include them (#24899, @gauthierpiarrette)
- [Tracking] Pre-import `databricks.sdk` in Databricks to avoid telemetry deadlock (#24841, @aaronteo-db)
- [Tracing] Support haystack 3.x in haystack autologging (#24744, @harupy)
- [Tracing] Honor UC-backed trace storage in Databricks model serving (#24806, @james-fletcher-db)
- [Tracking] Do not hard-fail `is_flavor_supported_for_associated_package_versions` when flavor module is not installed (#24846, @adamgurary)
- [UI] fix(ui): Fix Chart view unresponsiveness via virtualization in `RunsChartsDraggableCardsGridSection` (#24012) (#24424, @Alwaysgaurav1)
- [] Fix `claude_code` provider exceeding Windows `cmd.exe` command-line limit (#24440, @joshuawong-db)
- [UI] Fix RestoreRunModal to show actual error instead of hardcoded message (#24731, @mihir2921)
- [UI] Fix DeleteRunModal to show actual error instead of hardcoded message (#24730, @mihir2921)
- [UI] [UI] Show error notification when permission-denied for USER role actions (#24722, @mihir2921)
- [Build / Models] Add support for pandas 3.x (#23719, @twanahc)
- [Model Registry] Fix model version string to int cast in registry stores (#24565, @qubeena07)

Documentation updates:

- [Docs] Fix environment variable expansion in `docker/README.md` (#25474, @CoralGarden52)
- [Build] Use `Chart.appVersion` for the Helm example image (#25458, @CoralGarden52)
- [Docs / Tracing] docs: add TypeScript examples to Kubernetes auth page (#25083, @robinnarsinghranabhat)
- [Docs] Clarify trace-data scope in `detect-issues.mdx` (#25386, @copilot-swe-agent)
- [Docs] Add Red Hat OpenShift AI to hosting options (#25151, @B-Step62)
- [Docs / Tracing] Honor explicit set_outputs() inside the @mlflow.trace decorator (#24624, @adamgurary)
- [Docs / Tracing] docs: clarify Databricks profile, LangGraph autolog, runs-vs-traces, span attributes (#24954, @adamgurary)
- [Docs / Tracing] docs: warn that delete_traces() does not support Databricks Unity Catalog traces (#24647, @adamgurary)
- [Docs / Gateway] Clarify LiteLLM is an optional extension in AI Gateway docs (#24787, @TomeHirata)

Small bug fixes and documentation updates:

#25558, #25553, #25392, #25421, #25407, #24828, #25295, #25249, #25055, #24827, @joshuawong-db; #25547, #25127, #24884, #25501, #24714, #24913, #24879, @B-Step62; #25544, #25542, #25540, #25538, #25537, #25534, #25531, #25530, #25506, #25466, #25436, #25408, #25405, #25390, #25320, #25256, #25023, #25014, #24993, #24992, #24988, #24986, #24955, #24872, #24855, #24856, @copilot-swe-agent; #25545, #25502, #25486, #25485, #25482, #25481, #25478, #25475, #25468, #25467, #25464, #25462, #25461, #25465, #25457, #25456, #25452, #25450, #25447, #25446, #25443, #25437, #25430, #25432, #25423, #25429, #25409, #25420, #25417, #25419, #25401, #25404, #25402, #25396, #25393, #25368, #25358, #25346, #25344, #25343, #25342, #25341, #25339, #25338, #25337, #25335, #25334, #25325, #25316, #25312, #25277, #25276, #25252, #25165, #25163, #25162, #25161, #25160, #25159, #25158, #25156, #25154, #25153, #25152, #25144, #25142, #25124, #25122, #25117, #25109, #25110, #25106, #25103, #25100, #25099, #25096, #25090, #25092, #25091, #25088, #25048, #25047, #25042, #25041, #25037, #25030, #25032, #25031, #25029, #25022, #24996, #24991, #24990, #24987, #24982, #24980, #24977, #24978, #24975, #24974, #24973, #24972, #24971, #24970, #24968, #24966, #24965, #24910, #24908, #24922, #24911, #24909, #24901, #24866, #24874, #24853, #24840, #24839, #24834, #24791, #24751, #24770, @harupy; #25533, #25528, #25305, #25304, #25302, #25296, #25222, @kriscon-db; #25412, #25309, @IgorShishkin12; #25520, #25519, #25015, #24945, #24943, #24944, #24902, #24904, #24905, #24903, @dependabot; #25081, #24880, #24802, @mprahl; #25505, #25500, #25480, #25379, #25360, #25351, #24754, @TomeHirata; #25477, #25459, @CoralGarden52; #25180, @miyakido; #25369, @d0w; #25400, @ArrayPD; #25391, #25329, #25104, @tanghaoji; #25374, @brandonhawi; #24276, #24222, @khaledsulayman; #25272, @kaikaila; #25300, #25097, #25046, #24838, @PattaraS; #24998, @juliafmorgado; #25251, #25212, #25211, #25186, #25060, #25059, #25028, #25025, @aaronteo-db; #25202, @aravgarg28; #22653, @jeevan6996; #25164, @jaceklaskowski; #24925, @darkdi; #25040, @rrioh; #24914, @smoorjani; #24892, @codechrl; #24927, @serena-ruan; #24323, #24678, @NeriCarcasci; #24516, @gauthierpiarrette; #24732, @mihir2921; #24779, @daniellok-db

---

> **Source** [mlflow/mlflow](https://github.com/mlflow/mlflow) · `v3.16.0` · 2026-09-04 · [upstream release](https://github.com/mlflow/mlflow/releases/tag/v3.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
