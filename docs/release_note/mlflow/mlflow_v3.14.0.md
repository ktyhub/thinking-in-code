---
title: "mlflow v3.14.0"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.14.0"
version: "v3.14.0"
published: "2026-06-17"
type: "minor"
lang: "en"
summary: "MLflow 3.14.0 includes several major features and improvements"
---

# mlflow v3.14.0

MLflow 3.14.0 includes several major features and improvements

### Major New Features

- **🚀 [One-command agent onboarding with `mlflow agent setup`](https://mlflow.org/docs/latest/genai/tracing/quickstart/)**: Install MLflow, set up tracing, and hand your favorite coding agent (Claude Code, OpenAI Codex, or OpenCode) the MLflow skills to instrument your app, all from a single command.
- **⚡ [Durable, low-latency tracing for Claude Code](https://mlflow.org/docs/latest/genai/tracing/integrations/listing/claude_code)**: Roll out Claude Code tracing across a team with confidence: a write-ahead-log keeps it from slowing the agent, overwhelming the tracking server, or losing traces on a network blip or crash.
- **📝 [Review Queues for traces](https://mlflow.org/docs/latest/genai/assessments/review-queues)**: Assign traces to reviewers (or agents) and collect structured feedback and ground-truth annotations in the UI, written straight back onto the trace so they are immediately usable for evaluation.
- **🗂️ [Revamped evaluation dataset UI](https://mlflow.org/docs/latest/genai/datasets/)**: Browse, inspect, edit, and bulk-manage evaluation dataset records directly in the UI, with click-through to the source trace.
- **🧪 [Pytest integration for regression testing](https://mlflow.org/docs/latest/genai/eval-monitor/regression-testing)**: Write GenAI regression tests as plain pytest functions with the `@mlflow.test` marker, gate them in CI, and review test history and per-assertion judge results in the UI.
- **🎛️ [LLM Playground](https://mlflow.org/docs/latest/genai/prompt-registry/playground)**: Iterate on prompts in the browser against your AI Gateway endpoints and Prompt Registry versions, with settings, tools, structured output, and template variables.

### Breaking Changes

- [Models] Change `mlflow.sklearn` `serialization_format` default from `cloudpickle` to `skops` (#23987, @copilot-swe-agent)
- [Models] Change `serialization_format` default to `"pt2"` for `mlflow.pytorch.log_model` and `mlflow.pytorch.save_model` (#23988, @copilot-swe-agent)
- [Models] Change `serialization_format` default to `"skops"` in `mlflow.lightgbm` `log_model`/`save_model` (#23986, @copilot-swe-agent)

### Other Assorted Features & Improvements:

- [Evaluation / UI] [3/3] Show regression-test results in the existing eval-run UI (#23985, @B-Step62)
- [Prompts / UI] Add "Save prompt to registry" action to the Prompt Playground (#24021, @B-Step62)
- [Prompts] Prompt Playground (#23273, @TomeHirata)
- [Evaluation] [2/3] Add `EvaluationResult.passed`/`.reason` for `@mlflow.test` assertions (#23869, @B-Step62)
- [UI] Review queues: list the affected queues in the delete-question confirmation (#24002, @kriscon-db)
- [UI] Add shareable review queue URLs with a `startReview` deep link (#23941, @harupy)
- [UI] Allow editing a completed review in place in focus mode (#23967, @kriscon-db)
- [Tracing] Add `x-mlflow-run-id` support to OTLP trace ingestion (#23664, @sanatb187)
- [Evaluation / Tracing] [1/3] Add @mlflow.test pytest marker and assertion framework (#23864, @B-Step62)
- [UI] Improve review queue empty states with onboarding content (#23903, @B-Step62)
- [UI] Add `mlflow skills view/list` CLI (#23907, @joshuawong-db)
- [UI] Improve review queue list: flat layout, sortable columns, status filter (#23902, @B-Step62)
- [Tracing] Add `MLFLOW_WORKSPACE` support to OSS auth provider (#23927, @Nehanth)
- [Gateway] Add cached token pricing to Databricks model catalog (#23901, @TomeHirata)
- [Evaluation] Add `MLFLOW_GENAI_JUDGE_DEFAULT_MODEL` environment variable (#23860, @B-Step62)
- [Evaluation] Wire "Run judge(s)" submission in "Run Eval" in Evaluations Run page to POST /mlflow/genai/evaluate/invoke (#23781, @aaronteo-db)
- [Evaluation] Add rule-based built-in scorers: `RegexMatch`, `PIIDetection`, `ResponseLength` (#22571, @debu-sinha)
- [Tracing] Support Databricks backend in `mlflow agent setup` (#23783, @harupy)
- [Evaluation] Add POST /mlflow/genai/evaluate/invoke handler & job for UI-triggered eval runs (#23779, @aaronteo-db)
- [Tracing] [Claude Code] Support UC trace location via `MLFLOW_TRACE_LOCATION` (#23770, @B-Step62)
- [Tracing] [Codex] Support UC trace location via `MLFLOW_TRACE_LOCATION` (#23771, @B-Step62)
- [Evaluation / Tracking] [3/N] Label schemas: handlers + SDK + REST client (#23603, @kriscon-db)
- [Tracing / Tracking] Add `run_id` support for trace APIs (#23629, @sanatb187)
- [Evaluation / UI] Dataset v2 port (#23560, @B-Step62)
- [Evaluation / Tracking] Add OSS-native label schema entity, validation, and SQL store (#23597, @kriscon-db)
- [Tracing] Support mapping gen_ai.conversation.id to MLflow trace session (#23584, @SahilKumar75)
- [Tracing / UI] Added polling logic to live check and auto-refresh traces tab empty state with trace first ingestion (#23184, @vivian-xie-db)
- [Tracing] Add MlflowWalSpanExporter to hand traces off to the WAL daemon (#23641, @aaronteo-db)
- [Tracing] Support native UC trace ingestion from TypeScript SDK (#23562, @B-Step62)
- [Evaluation] Add Google ADK LLM judge scorers (`Hallucination`, `Safety`, `ResponseEvaluation`) (#22496, @debu-sinha)
- [Gateway] Add OpenAI `/responses/compact` passthrough route to AI Gateway (#23353, @id-jazzx)
- [Gateway] Add 21 new models to Databricks model catalog (#23520, @TomeHirata)

Bug fixes:

- [Evaluation] Fix `ChrfScore` RAGAS scorer instantiation due to class name mismatch (#24047, @B-Step62)
- [Tracing / Tracking] Map OpenAI Agents SDK guardrail spans to `SpanType.GUARDRAIL` (#24044, @B-Step62)
- [UI] Surface review-question modal failures as toasts (#24035, @kriscon-db)
- [Tracking] Prevent review queues from shadowing usernames (#24034, @kriscon-db)
- [Tracking] Make review-queue names unique case-insensitively (defined at table creation) (#24015, @kriscon-db)
- [Tracking / UI] Normalize review-queue add-items ids before the trace-existence check (#24029, @kriscon-db)
- [UI] Scope review-queue permission UX gate to the active workspace (#24031, @kriscon-db)
- [UI] Surface review-queue trace-removal failures and keep the selection on error (#24027, @kriscon-db)
- [UI] Surface assignable-users load error in review-queue pickers (#24020, @kriscon-db)
- [UI] Prefill review answers from the most recent assessment by timestamp (#24026, @kriscon-db)
- [UI] Surface review-queue self-assign failures with an error toast (#24018, @harupy)
- [Evaluation / Tracing] Fix genai.evaluate() dropping dataset expectations and tags with scorers=[] (#23957, @Incheonkirin)
- [UI] Require at least one question when saving review queue settings (#24007, @harupy)
- [UI] Send review-queue schema_ids only when the questions actually change (#24017, @kriscon-db)
- [UI] Block saving a review when a previously-answered question is cleared (#24008, @kriscon-db)
- [UI] Compare review-queue picker usernames case-insensitively (#24014, @kriscon-db)
- [Tracking] Bind review-queue completed_by to the authenticated caller (#24006, @kriscon-db)
- [UI] Fix non-functional JSON/Table toggle in the review queue full-trace explorer (#24005, @kriscon-db)
- [UI] Surface review-queue deletion failures instead of swallowing them (#24004, @harupy)
- [Tracing] Fix TS SDK traces storage when MLflow server uses a local FS artifact root without mlflow-artifacts:// uri schema (#23992, @aaronteo-db)
- [UI] Show minute fidelity in the review-queue "Date added" column (#23993, @kriscon-db)
- [UI] Review queues: show the optional rationale box in the question preview (#23995, @kriscon-db)
- [Tracing] Set model provider in Anthropic autolog so LLM cost is computed (#23972, @B-Step62)
- [Evaluation] Add missing `ContextUtilization` RAGAS scorer class (#23956, @B-Step62)
- [UI] Refresh per-trace queue membership after adding/removing review-queue items (#23940, @kriscon-db)
- [Gateway] Fix JSON response format for Gemini and Anthropic gateway providers (#23932, @tanghaoji)
- [Tracking] Fix `metrics/get-history` returning empty results when `max_results` is omitted (#23917, @Vedant-Agarwal)
- [UI] Auto-select default user queue on Review tab load (#23904, @B-Step62)
- [UI] Require at least one answer before completing a focused review (#23923, @kriscon-db)
- [Tracing / Tracking] Clean up review-queue items and assessment errors when a trace is deleted (#23913, @harupy)
- [Evaluation / Tracing] Support common RETRIEVER chunk content fields (#23867, @sanatb187)
- [Tracing / Tracking] Preserve OTel resource attributes during OTLP trace ingestion (#23829, @TomeHirata)
- [Gateway] Fix AI Gateway SSE large-frame read limit (#23880, @yashjiv15-jazzx)
- [Evaluation] Honor `OPENAI_BASE_URL` env var in OpenAI provider config (#23862, @B-Step62)
- [Build] @mlflow/XXXX package root points to missing dist/index.js (#23874, @WeichenXu123)
- [Build] Add auth extra for full docker image (#23892, @WeichenXu123)
- [Artifacts] Return 404 for missing Azure blob artifacts (#23832, @feynmanliang)
- [Tracking] Fix `_stop_listen_for_spark_activity` hanging indefinitely on CLOSE_WAIT socket (#23839, @kishor-rkrishnan)
- [UI] Install Codex/OpenCode skills at `.agents/skills` (#23847, @harupy)
- [Tracing / Tracking] Fix `mlflow.openai.autolog` span type resolution for `ChatCompletions` subclasses (#23759, @harupy)
- [Tracking] Fix `mlflow db upgrade` on a fresh database (#23752, @harupy)
- [Tracking] Expose workspace on experiment response (#23593, @joshuawong-db)
- [UI] Handle missing clipboard API in insecure HTTP contexts (#23598) (#23601, @srinjoy356)
- [Build / UI] Fix PDF artifact viewer `import.meta` SyntaxError (#23731, @harupy)
- [Tracking] Fix `_parse_extra_conf` for HDFS config values containing `=` (#23730, @copilot-swe-agent)
- [Prompts / UI] Hide experiment kebab on prompt details page (#23661, @harupy)
- [Tracking] Enforce upload artifact size for chunked requests (#23712, @dfgvaetyj3456356-hash)
- [Projects] Reject path traversal in project zip extraction (#23713, @dfgvaetyj3456356-hash)
- [Tracking] Prefer routed ASGI paths in FastAPI auth checks. (#23685, @HumairAK)
- [Tracing / Tracking] Restore `mlflow.crewai` autolog on crewai 1.14.5 (#23682, @harupy)
- [Tracing] Unwrap JSON-encoded `session.id` / `user.id` span attributes on ingest (#23642, @SahilKumar75)
- [Evaluation / Tracing / UI] Forward OpenAI custom base URL in Detect Issues flow (#23650, @harupy)
- [Tracking] Add ON DELETE CASCADE relationship for `SqlTraceInfo` to `SqlExperiment` (#23194, @Mytolo)
- [Tracing] Extend `mlflow.sourceRun` metrics filter to cover post-hoc linked OTLP traces (#23591, @RudraDudhat2509)
- [Tracing] UI does not show Judge costs (#23586, @WeichenXu123)
- [Tracking] [Security] Register auth validator for /ajax-api/3.0/mlflow/get-trace-artifact (#23317, @B-Step62)
- [Tracing] Fix pydantic-ai >= 1.78.0 ToolManager module rename (#23508) (#23528, @kishor-rkrishnan)
- [UI] Add `.jsonl` artifact previews (#23532, @bvolpato)
- [Tracking] Disable credentialed CORS when wildcard origins are configured (#23178, @B-Step62)
- [Evaluation] Fix judge fallback on event-based traces grading itself (#23445, @james-fletcher-db)

Documentation updates:

- [Docs / Evaluation] Add docs page for `@mlflow.test` pytest regression testing (#24011, @B-Step62)
- [Docs] Fix `make_judge` doc: self-referential deprecation note and link typo (#24046, @B-Step62)
- [Docs] Add documentation for review queues and label schemas (#23975, @kriscon-db)
- [Docs] Surface mlflow agent setup in docs (#23859, @joshuawong-db)
- [Docs] Document MLFLOW_STATIC_PREFIX behavior change in migration guide (#23851, @Sanket2329)
- [Docs] Add Colab warning in Quickstart Step 4 (#23831, @Farzah11)
- [Docs] Fix undefined generate_response in tracing docs (#23814, @llljjjwww333)
- [Docs / Tracing] Use CLI for Claude Code plugin install in docs (#23679, @harupy)
- [Docs / Models] Deprecate `validate_serving_input` in favor of `mlflow.models.predict` (#23376, @B-Step62)
- [Docs] Fix incorrect output comment for best_run.info in tracking docs (#23571, @Aksh123100)

Small bug fixes and documentation updates:

#24045, #24042, #24024, #24023, #23969, #23970, #23961, #23964, #23963, #23866, #23729, #23670, #23310, #23294, @B-Step62; #24022, #24019, #23937, #23758, #23737, #23735, #23605, #23579, #23545, #23511, #23526, @aaronteo-db; #24025, #24003, #23996, #23915, #23912, #23882, @kevin-lyn; #23910, #23994, #23990, #23974, #23984, #23934, #23935, #23946, #23938, #23931, #23925, #23921, #23924, #23846, #23926, #23844, #23886, #23887, #23885, #23884, #23878, #23879, #23876, #23875, #23807, #23804, #23801, #23799, #23795, #23604, #23599, #23613, @kriscon-db; #23997, #23834, #23853, #23823, #23780, #23630, #23614, @joshuawong-db; #23947, #23920, #23858, #23848, #23845, #23841, #23840, #23838, #23837, #23803, #23827, #23826, #23824, #23806, #23802, #23798, #23796, #23788, #23595, #23776, #23764, #23745, #23743, #23742, #23740, #23739, #23718, #23711, #23710, #23708, #23700, #23699, #23697, #23684, #23677, #23672, #23671, #23669, #23668, #23667, #23666, #23663, #23653, #23644, #23643, #23639, #23640, #23638, #23636, #23632, #23631, #23626, #23625, #23618, #23606, #23596, #23588, #23585, #23582, #23581, #23580, #23576, #23573, #23567, #23566, #23565, #23563, #23558, #23553, #23552, #23523, #23506, #23498, @harupy; #23893, @debu-sinha; #23722, @kishor-rkrishnan; #23833, #23741, #23732, #23727, @TomeHirata; #23769, @mprahl; #23589, @charlesverge; #23690, @pvelayudhan; #23658, @copilot-swe-agent; #23540, @jamesbraza

---

> **Source** [mlflow/mlflow](https://github.com/mlflow/mlflow) · `v3.14.0` · 2026-06-17 · [upstream release](https://github.com/mlflow/mlflow/releases/tag/v3.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
