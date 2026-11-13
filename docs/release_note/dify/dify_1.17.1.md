---
title: "dify 1.17.1"
project: "dify"
repo: "langgenius/dify"
tag: "1.17.1"
published: "2026-09-10"
type: "patch"
lang: "en"
summary: "Dataset-Scoped Knowledge Base API Keys"
---

# dify 1.17.1

> [!WARNING]
> **Self-hosted deployments using the bundled Weaviate must complete a manual, staged upgrade before starting 1.17.1.** The bundled Weaviate server moves from `1.27.0` to `1.39.2` — 12 minor versions — and skipping minors **is unsupported**. Pulling and restarting can silently and permanently break vector search. See Upgrade Guide below. Fresh deployments, external Weaviate, and other vector stores are unaffected.

### New Features

**Dataset-Scoped Knowledge Base API Keys**
- Knowledge base service-API keys were scoped to the whole workspace: one key could read and write every knowledge base in the tenant, so giving an integration access to a single knowledge base meant giving it access to all of them. Keys can now be bound to specific knowledge bases from the knowledge base's API access panel, with a workspace / this-knowledge-base scope selector at creation time. A bound key returns `403` for any other dataset — both documents and retrieval — and for endpoints that carry no dataset ID, such as list-all. Existing keys are unbound and keep their workspace-wide behavior, so nothing changes when you upgrade. (#37569)

**Keyboard Movement for Workflow Nodes and Comments**
- The workflow canvas required a mouse to reposition anything. Nodes, multi-node selections, comment markers, and draft comments can now be moved with the arrow keys — hold Shift for larger steps — including Note, Iteration, and Loop nodes. Continuous movement is committed on key release or blur, so it produces one undo entry rather than one per keypress, and read-only mode, container boundaries, and collaboration updates are all still respected. (#41967)

**Marketplace Creator Profiles and Homepage Redesign**
- Plugin authors now have public profile pages at `/marketplace/creator/<handle>`, listing their creations with a publisher sidebar, reachable from a new Creator Center entry in the sidebar help menu. The marketplace homepage was rebuilt around a hero, a banner carousel, sticky search, catalog tabs, and tag/language filters, with a stacked-and-swipeable mobile layout. Bundles are no longer mixed into plugin categories. (#41538)

**Configurable Markdown Form Field Name Length**
- The Markdown form field-name limit was hard-coded at 128 characters, with no way to accommodate longer generated field names. It is now configurable through `MARKDOWN_FORM_FIELD_NAME_MAX_LENGTH` (Docker) or `NEXT_PUBLIC_MARKDOWN_FORM_FIELD_NAME_MAX_LENGTH` (direct Web deployments), defaulting to the previous 128. Character validation and prototype-pollution protections are unchanged. (#41697)

---

### Bug Fixes

**Knowledge Base**

This release fixes a cluster of extraction bugs that changed document content without reporting an error. Re-import affected documents after upgrading; indexed text is not retroactively repaired.

- **CSV cells were passed through pandas type inference before indexing.** Leading-zero codes became floats (`00123` → `123.0`), empty cells became the literal string `nan`, and cells containing `NA` or `NULL` became missing values. The extractor now reads everything as text and disables missing-value inference; an explicit `csv_args` still overrides this for callers that want typed parsing. (#41922)
- **Notion table rows lost or gained columns.** Each rich-text segment inside a cell was emitted as its own Markdown column, so any cell with mixed formatting — bold, links, mentions — produced extra columns and corrupted the table, while an empty cell was skipped entirely and shifted the rest of the row left. Cells are now emitted one-per-column with their segments concatenated. (#41993)
- **Notion database properties were truncated at the first formatting change.** `rich_text` and `title` properties read only their first segment, so a title of `Hello world` with `world` in bold was indexed as just `Hello `. All segments are now joined. (#42050)
- **`.xls` cells containing double quotes corrupted the row.** The extractor emits `"column":"value"` pairs; the `.xlsx` path escaped embedded quotes but the legacy `.xls` path interpolated them raw, so `he said "hi"` became `"note":"he said "hi""`. Both engines now behave the same for the same content. (#42049)
- **Any PDF loaded from a URL crashed with a bare `AssertionError`.** After tenant context was added to the PDF extractor, the code path used by `load_from_url` — including the built-in web scraper whenever a target returns `Content-Type: application/pdf` — asserted on an upload record that URL loads never have. Tenant context is now optional, image extraction is skipped when it is absent, and text extraction works again. (#41950)
- **The built-in web scraper returned Python data structures instead of page text.** `readabilipy` hands back `plain_text` as a list of dicts, which was interpolated straight into the output template, so every scraped page came back as `[{'text': '<p>…</p>'}, …]` — dict syntax, quotes, and HTML tags included. The items are now flattened into readable text. (#41954)
- **Partial segment updates wiped attachments.** A segment update that omitted `attachment_ids` was treated as "replace with nothing", deleting the segment's attachment bindings and multimodal vectors. Attachments are now left alone unless `attachment_ids` is explicitly provided; passing `[]` still clears them. (#41777)
- **Documents with invalid Markdown image links could stall the indexing queue.** Relative, protocol-relative, `data:`, `ftp:`, and malformed image targets were all handed to the remote image fetcher and entered its SSRF retry loop, so a single document with many bad references could hold an indexing worker long enough to back up everything behind it. Non-fetchable targets are now validated and skipped. (#41343)
- **Deleting content left orphaned files in object storage.** Segment deletion, multimodal re-indexing, and batch document deletion each removed the database rows but left the physical attachment objects behind. All three paths now delete the underlying objects after the database commit, with an orphan check so attachments shared by other segments survive. (#41400, #41999, #41256)
- **Text file previews were misreported as binary.** When the preview byte limit cut through a multi-byte UTF-8 character, strict decoding failed and the whole file was classified as binary — reproducible on a default preview with a single non-ASCII character at the 256 KiB boundary. Previews now keep the longest complete UTF-8 prefix; files with genuinely invalid encoding are still reported as binary. (#41761)

**Model Providers**

- **Upgrades from pre-1.15 no longer leave models unusable, and no longer need a manual command.** Installations older than 1.15 still carry legacy model type values (`text-generation`, `embeddings`, `reranking`) in their provider tables, which makes model-related API requests fail and prevents affected models from loading. Both 1.16.1 and 1.17.0 shipped this as a separate `flask data-migrate legacy-model-types` step that had to be run by hand. It now runs as part of `flask db upgrade`: legacy values are canonicalized to `llm` / `text-embedding` / `rerank`, legacy-versus-canonical row collisions are resolved deterministically while preserving credential references, and the provider cache namespace is rotated so stale cached credentials cannot shadow the migrated rows. (#41326, fixes #41294)
- **The built-in file upload data source asked for authorization it does not need.** When creating a RAG Pipeline knowledge base, local file upload showed "Please authorize first" and the creation checklist flagged it, because providers that declare no credentials schema never have a stored-credential row and were therefore always reported as unauthorized. Credential-free providers are now marked authorized directly. (#39772)
- Provider-scoped credential validation rules are now applied, and missing tool credentials are surfaced instead of failing opaquely. (#41659, #41726)

**Workflow & Triggers**

- **Human Input forms could finish a workflow while leaving it looking stuck.** Since the HITL callback migration in 1.17.0, submitting a form left its approval buttons on screen and the published Web App input blocked, because the engine emitted a generic node-success event without the form-filled or timeout events the response pipeline expects. Those events are now reconstructed, preserving submitted file values, original timeout deadlines, and execution metadata. (#42082)
- **Human Input could not be placed inside Iteration or Loop nodes**, even though 1.17.0 shipped the runtime support for it — two stale editor guards still blocked selecting, connecting, and pasting the node inside a container. (#40061)
- **The Human Input timeout edge could fire the wrong branch.** The editor writes the timeout edge as `__timeout`, but the backend compared against `__timeout__`, so at runtime a timeout could take a user-action branch instead of the timeout branch the author drew. (#40746)
- **A second Human Input pause in the same run could become unresumable.** If object storage rejected deleting the previous pause snapshot, the exception aborted the transaction — the run was already persisted as `PAUSED`, but its only pause row was the previous, already-resumed one, so the next submission failed with `Cannot resume an already resumed pause`. Snapshot cleanup is now best-effort, with the orphaned object key logged for later cleanup, so the run's durable state stays correct. (#41581)
- **Workflow-as-Tool only exposed the first End node's outputs.** Output declarations are now collected from every End node, with the source node listed for each, one warning per output affected by a duplicate or reserved name, and a fallback to the published schema when live draft metadata is unavailable. (#41517)
- **Loop Boolean break conditions never matched.** New conditions stored `"true"` / `"false"` as strings rather than booleans. Values are now stored and kept as real booleans, and legacy string values are normalized when rendered. (#41186)
- **Trigger-entry workflows could still be invoked manually** from the Web App, Service API, OpenAPI, and MCP `tools/call` — creating workflow runs that could never work. These are now rejected before a run or log is created, with a shared business code across HTTP and MCP JSON-RPC. Real trigger execution, read-only endpoints, and running a historical Start version by ID are unaffected. (#41519)
- **A single bad LLM node took down the whole editor.** A workflow whose LLM node had `model_selector` persisted as `null` rather than omitted crashed Workflow Studio's per-node checklist on load and tripped the page-level error boundary, making the entire canvas unusable rather than flagging one node. (#41707)
- **Workflows containing legacy Agent nodes could not be published** once Agent V2 was enabled, because publish validation could not resolve the legacy validator. They publish again, while legacy Agent nodes stay hidden from the node picker. (#41368)
- **Creating a tool from a workflow used the previously published version.** The current workflow is now published first — matching what the update path already did — and provider creation stops if that publish fails, instead of silently binding to a stale version. (#41528)
- **Undoing the deletion of a webhook trigger node changed its URL.** (#42069)
- **Document create and update could report "One or more files not found." on MySQL** even though the upload had committed. Under MySQL's default `REPEATABLE READ`, the request session's read snapshot was pinned before the upload happened in a separate session, so the just-written rows were invisible. All four affected endpoints — create-by-text, create-by-file, update-by-text, update-by-file — now refresh the snapshot before the lookup. PostgreSQL was never affected. (#41840)
- **Large workflow graphs broke the collaboration socket.** `sync_request` payloads exceeded Engine.IO's 1 MiB default, so the frame was rejected and the editor reconnect-looped. The ceiling is now configurable through `WEBSOCKET_MAX_HTTP_BUFFER_SIZE`, default 10 MiB. (#41347)
- The Access Point page no longer shows "no published version" guidance when the published-workflow request simply failed, and no longer retries requests that returned `403`. (#41572)

**Agent & Chat**

- **Chatflow Agent V2 forgot everything between turns.** Sessions are now keyed by `conversation_id`, so memory persists across a conversation. A follow-up fixed the related case where publishing a new Agent roster version mid-conversation paired a new configuration with the previous participant and failed generation validation — existing conversations now stay pinned to the version they started on, and only new conversations pick up the current one. (#41871, #42105)
- **Replies from reasoning models rendered entirely as "thinking".** Models such as GLM-5.3 wrap chain-of-thought in `<think>` tags, and a tool call frequently interrupts generation before `</think>` is emitted, leaving the answer nested inside a still-open tag. The dangling tag is now closed when a tool log interrupts the stream, when a new `<think>` starts after real content, and at stream end — plus the same repair in the Markdown preprocessor so already-stored output renders correctly. (#41764)
- **Images uploaded to an Agent App were turned into shell download instructions** rather than being shown to the model. Vision-capable models now receive them as native multimodal content, detected from the selected credential-bound model schema. The download fallback is preserved for non-image files and for models without vision support, and image URLs and Base64 payloads are redacted from agent backend logs. (#41685)
- **Suggested questions could take minutes, or hang.** With no dedicated suggested-question model configured, the endpoint fell back to the workspace default — inheriting expensive settings such as `reasoning_effort=high`, a 2,560-token output allowance, and the global 600-second plugin timeout, so the browser gave up after 100 seconds while the backend kept working. Output is now capped at 256 tokens, thinking is disabled or set to the lowest supported effort, and a request-scoped 30-second timeout applies. One reported case went from 113–344 seconds to under 3 seconds; an unavailable default model now returns an empty list immediately instead of failing. (#41705)
- **E2B-backed agent runs failed with `502 binding_create_failed`.** A stale HTTP/2 connection in the pinned E2B SDK surfaced as an inline chat failure. The SDK is upgraded past the affected transport path, connect/pause/kill/delete-snapshot are retried once on bounded transport failures, and provider capacity exhaustion now returns a `429` instead of being reported as a create failure. Binding and snapshot creation stay one-shot, so ambiguous results are never silently adopted. (#41623)
- **Agent Preview reused a session that no longer matched the configuration.** Because Preview edits the draft in place, a conversation could keep a session snapshot whose composition layers had since been added, removed, or reordered, and the agent backend rejected it with an internal mismatch error. This now returns `409 agent_session_configuration_changed` with an instruction to start a new conversation; changing configuration *values* without changing the layer topology still reuses the session. (#41447)

**Service API & OpenAPI**

- **Pagination silently truncated results.** `has_more` was computed against the client-requested `limit` while the query capped page size at 100, so requesting `limit=200` against 150 rows returned 100 rows and `has_more=false` — the remaining 50 were unreachable. Segment, dataset, and document list endpoints now compute `has_more` from the effective page size and report that size in the response. (#41776, #41784)
- **Deleting an MCP provider returned `422`.** Request parsing had started reading only query arguments on `DELETE`, while the web client sends `provider_id` in the JSON body; custom-model and credential deletion shared the same contract. The JSON body is now used as a fallback when the query string is empty, so query-parameter deletes keep working too. (#41288)
- **A standard OpenAPI schema was rejected as `invalid schema: 'env'`** whenever the `X-Request-Env` header was present, because server matching indexed a non-standard `env` key unconditionally. Schemas without the extension now take the intended fallback to the first server URL. (#42025)
- The generated Service API contract was realigned with runtime behavior: non-nullable fields no longer carry null defaults, Console-only permission metadata is excluded, error responses the endpoints never return are removed, historical 404/503 declarations are restored, and task-stop request schemas are split so chat/completion and workflow behavior are documented accurately. This changes the exported contract and generated clients, not request handling. (#41248, #41274, #41943)
- Service API rate limit descriptions were corrected. (#41975)

**Concurrency & Deadlocks**

- **Concurrent knowledge retrieval could deadlock.** The hit-count update incremented every matched segment in one `UPDATE … WHERE id IN (…)`, and PostgreSQL gives no guarantee that row locks are taken in the order the IDs were supplied — overlapping concurrent retrievals could acquire locks in different orders and fail with `deadlock_detected`. Locks are now taken in a stable `ORDER BY id` before incrementing, with up to three retries scoped strictly to deadlock errors. (#41979)
- **Automatic summary generation could hang a worker indefinitely.** Tencent VectorDB rejects booleans in JSON metadata, so the `is_summary: true` marker failed at upsert *after* summary generation and embedding had already succeeded. The failure path then opened a second database session to record the error on the same row the caller's session still held locked, so each waited on the other and the task occupied a worker slot. The marker is now an integer for Tencent only, and errors are recorded in the caller-owned session. (#41916)

**Skills, Plugins & Triggers**

- **Skill packages built on Windows failed with a misleading error.** A `SKILL.md` using CRLF line endings did not match the frontmatter parser, so the name field came back empty and the import reported `config asset name must not be blank`. CRLF is now accepted and normalized on import, and `__MACOSX` metadata folders in skill archives are tolerated. (#41657, #41757)
- **Triggers worked in Test Run but never fired in production.** Plugin trigger relationships were synchronized from the draft workflow rather than the version being published, so published events found no subscriber and no workflow started. (#41756)
- **Lease-based triggers stopped working after about a week.** Subscription creation persisted the builder's placeholder `expires_at` of `-1` instead of the real lease returned by the provider, and the refresh scanner skips `-1` — so providers like Gmail `users.watch` silently expired. The provider-supplied expiry is now stored. (#41773)
- Swagger tool authorization survives a page refresh, and SSR now appends `/api/v1` when reading `MARKETPLACE_API_URL`. (#41656, #41824)

**Workspace, Accounts & Imports**

- **Gmail addresses that differ only by dots or a `+alias` registered as separate accounts.** Registration now stores and checks a normalized email — dots stripped, `+alias` removed, `googlemail.com` folded to `gmail.com` — across self-registration, OAuth registration, email-code account creation, CLI registration, and new workspace-invite accounts, with a dedicated `normalized_email_already_in_use` error. Existing login and account-update lookups are deliberately unchanged, and existing equivalent accounts are preserved. (#41249)
- **Transferring workspace ownership left the workspace inconsistent.** The outgoing owner was demoted to admin rather than a restricted member, and the stored owner column was not always updated — so checks that read it, including the guard on the transfer endpoint itself, kept resolving the previous owner. Both now move correctly, and a workspace already left inconsistent by an earlier transfer is repaired on the next one, with no migration required. (#41267)
- **A quota of zero was displayed as unlimited.** Trigger Events and API rate limit now show zero as exhausted rather than unlimited, zero-count quotas appear in the exhausted-quota dialog, and `-1` continues to mean unlimited. Annotation batch imports are allowed when the annotation limit is `0` (unlimited), while positive limits still reject imports that would exceed them. (#41927)
- **DSL imports showed the wrong warning.** Backend-provided warning details — notably tool-authorization warnings raised while creating a recommended app — were discarded and replaced with a generic DSL-version warning. Real warning details are now shown, with the generic message kept as a fallback. (#41502)
- **Pending DSL imports could be confirmed by the wrong tenant or account.** Ownership is now mandatory and verified before any cached YAML is processed or database state is mutated, and validation errors no longer echo cached input values. (#40107)
- **A broken app icon reference broke the page.** Missing, malformed, and cross-tenant image icons now fall back to the default icon — silently during DSL import, and at Web App runtime with the invalid reference logged. (#41977)
- Repeated identical `GET` failures no longer stack up toasts: the first error shows immediately and identical errors for the same URL are suppressed for ten seconds, cleared on success. Every non-`GET` error, including consecutive failed saves, is still shown. (#42035)

**Correctness of Text and Value Parsing**

- **JSON extraction broke on backticks inside JSON.** `parse_json_markdown` picked the first code-fence-like marker anywhere in the text, so a backtick inside a string value — `` {"code": "use `print` function"} `` — or in surrounding prose made extraction start mid-string and fail. Extraction is now anchored on the JSON brackets themselves. This parser backs LLM output parsing for the rule-config generator and dataset retrieval metadata, where backticked code inside JSON is common. (#41959)
- **Variable names with a trailing newline passed validation.** Python's `$` anchor also matches before a trailing newline, so `"name\n"` was accepted into `user_input_form` despite the newline being outside the allowed character set. (#42029)
- Epoch-0 timestamps are accepted by the localtime conversion tool, and the weekday tool handles string and missing parameters. (#42027, #41952)

**Accessibility**

The console and web apps received a broad pass targeting the parts that made them unusable without a mouse or a screen reader: form controls got correct labels and programmatically associated validation feedback (#42096); sortable lists and panel/node resizing became keyboard-operable (#41974, #41963); focus is restored to its origin after overlays and comment threads close instead of being dropped to the document (#42068, #41978); page landmarks and heading structure were corrected so screen-reader users can navigate by region (#41938); button-styled navigation kept its link semantics so it still works with middle-click and modifier-click (#41312); decorative content and redundant list semantics were hidden from assistive technology (#42060); and clickable `div`s were replaced with native buttons in dataset lists (#41319). The apps list, home page, and login/signup flows were each covered as a whole (#41393, #41310, #41301).

**Web App & UI**

- The settings dialog is centered at all viewport sizes (#42120), invalid-input focus colors are preserved (#42108), Home and Studio route titles are stable (#41654), and the plugin detail drawer no longer traps interaction as a modal (#41473)
- Object editor values are stringified before Monaco creates a model, instead of failing on non-string input (#41719)
- Go to Anything resets its search when dismissed and its autocomplete behavior is consistent (#41976, #41258)
- Lao is available as a display language, and `pt-BR` maps to `pt_BR` for tool metadata (#41743, #41745)
- Registration tracking is consent-safe and retryable, and Web App analytics are separated from console page tracking (#41365, #41251)
- The education plan is no longer advertised outside Dify Cloud (#41898), and Open in Explore is hidden for SSO-restricted apps (#41518)

---

### Security Enhancements

- **Agent skills bypassed the SSRF private-network policy.** Agent traffic goes through a separate proxy that ignored `SSRF_PROXY_ALLOW_PRIVATE_IPS` and `SSRF_PROXY_ALLOW_PRIVATE_DOMAINS`, so the allowlist you configured for workflows did not constrain the agent runtime. Both proxies now honor the same allowlist. (#41870)
- **A plugin could exhaust worker memory with one declared number.** The blob chunk merger pre-allocated a buffer of the plugin-declared total length before checking it against the file size limit, so a plugin claiming an absurd size crashed the worker with `MemoryError` — the 30 MB limit was never consulted. The declared size is now validated first and rejected with the documented size-limit error. (#42021)
- `h2` bumped from `4.3.0` to `4.4.1` in both `api` and `dify-agent` (#40120, #40119)
- `transformers`, `unstructured`, `pypdf`, `nltk`, `httpx2`, `gitpython`, and `gunicorn` refreshed (#42053, #42054, #42011, #42012, #42017, #41607, #41602, #41505)

---

### Performance

- **Agent runs no longer fill up Redis.** Per-run event streams were appended without any cap: production held 3.89 GB across 3,457 streams — 81% of the affected Redis node — with individual streams reaching 30 MB and 78,000 entries, because every stream event including token-scale text deltas was written unbounded and every write refreshed a three-day TTL. Streams are now capped, consecutive text deltas from the same part are coalesced within a 100 ms / 4,096-character window, the cancellation-intent stream holds one entry, and default retention drops from 3 days to 2 hours. The public Agent event schema and SSE cursor contract are unchanged. (#41566)
- **The Web Apps sidebar was repainting every loaded app on every navigation.** Moving the list to cursor pagination in 1.17.0 dropped its virtualizer, so every page fetched stayed mounted in the main nav and survived route changes. On a workspace with 427 installed apps, clicking through the top-level nav spent 1,068 ms of 3.06 s compositing across 12,112 paint records — roughly 7.5 fps — with the cost in paint rather than script. The list is virtualized again, now on a single always-virtualized render path. (#41397)
- **The Console loaded 0.63 MB of support-widget JavaScript on every startup.** The Zendesk SDK is now fetched on the first Contact Us action instead: Home and Apps load with zero Zendesk requests, and the 36 requests / 628 KB are deferred to users who actually open support. (#41653)
- **Agent build-draft checks waited on an unrelated request.** Two surfaces returned their loading UI before the component owning the build-draft query mounted, so the browser could not start that request — which needs only the agent ID — until the composer request had finished. Both waterfalls are flattened. (#41816)
- **Account avatar uploads sent full-resolution images.** Cropped static avatars are now downsampled to a 256 px maximum edge before upload, preserving aspect ratio and never upscaling; animated avatars keep the original-file path. (#41655)

---

### Improvements

- **Bundled Weaviate server upgraded from `1.27.0` to `1.39.2`**, moving the pull from Docker Hub to `cr.weaviate.io`, the registry Weaviate publishes to directly. `1.39` ships no breaking changes and is where Weaviate's bug and security backports land — but existing data volumes require a staged manual upgrade, covered in the [Upgrade Guide](#bundled-weaviate-server-upgrade-127--139). Dify also now sends an `X-Weaviate-Client-Integration: dify/<version>` header so Weaviate can attribute traffic to Dify in its server-side telemetry; registration is best-effort and never blocks client initialization. (#38214)
- **Explicit database sessions across the ORM layer.** The legacy `db.session` property wrappers were removed from `App`, `Dataset`, `Document`, `DocumentSegment`, `Message`, `Conversation`, `Workflow`, `InstalledApp`, `ApiToolProvider`, and related models, and sessions are now passed in explicitly at every call site. There is no API surface change, but this removes a long-standing class of `DetachedInstanceError` and cross-request session bleed that produced intermittent, hard-to-reproduce failures under load.
- **Runtime and toolchain updates** — React 19.3 with browser-only rendering (#42093), Next.js 16.3.3 (#41262), Node.js 24 LTS (#41573), pnpm 12.3.4 (#42005), Jotai v3 (#42036), base-ui 1.8.0 (#41820). Node 24 and pnpm 12.3.4 are now required to build the web frontend from source.
- A compact command map makes agents discoverable from Go to Anything (#41226), and app and agent card interactions were reworked (#41449)
- Embedded recommend-banner templates and plugins open in the detail dialog rather than navigating away, and banner logos and template authors are preserved (#42063, #41828, #41980)
- The secret environment variable description was updated (#41309), and tracing configuration boundaries are preserved across app operations (#41403)

---

## Environment Variable Changes

### New Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `WEBSOCKET_MAX_HTTP_BUFFER_SIZE` | `10485760` | Socket.IO frame ceiling for the collaboration WebSocket. Raise it if very large workflow graphs still fail to sync. |
| `WEAVIATE_GRPC_ENDPOINT` | `grpc://localhost:50051` | Newly documented in `api/.env.example` for source deployments. gRPC has been **required since Weaviate 1.27**; the example files simply never listed it. The Docker value (`grpc://weaviate:50051`) is unchanged. |
| `EXPOSE_WEAVIATE_GRPC_PORT` | `50051` | Publishes Weaviate's gRPC port in the middleware-only stack. |
| `EXPOSE_LOCAL_SANDBOX_PORT` | `5004` | Publishes the local sandbox in the middleware-only stack, so a locally-run agent backend can reach it. |
| `DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN` | *(empty)* | `shellctl` auth token for the middleware-only local sandbox. |
| `MARKDOWN_FORM_FIELD_NAME_MAX_LENGTH` | `128` | Markdown form field-name length limit, previously hard-coded. |
| `NEXT_PUBLIC_ENABLE_AGENT_V2_IN_CHATFLOW` | `false` | Feature gate for the Agent V2 node in Chatflow apps. Off by default. |
| `DIFY_AGENT_RUN_EVENT_STREAM_MAX_LENGTH` | `5000` | Maximum entries retained per Agent run event stream. |
| `DIFY_AGENT_STREAM_TEXT_DELTA_COALESCING_ENABLED` | `true` | Merge consecutive Agent text deltas before writing them to Redis. |
| `DIFY_AGENT_STREAM_TEXT_DELTA_FLUSH_INTERVAL_MS` | `100` | Coalescing flush window. |
| `DIFY_AGENT_STREAM_TEXT_DELTA_MAX_CHARS` | `4096` | Coalescing size cap. |

### Modified (default values)

- `DIFY_AGENT_RUN_RETENTION_SECONDS`: `259200` (3 days) → `7200` (2 hours)

> [!IMPORTANT]
> Agent run records and event streams now expire after **2 hours** instead of 3 days. This is part of the fix for unbounded Redis growth (#41566). If you rely on inspecting Agent run events for longer than that, set `DIFY_AGENT_RUN_RETENTION_SECONDS` explicitly in your env file before upgrading.

No environment variables were removed in this release.

### Docker Compose Changes

- **Weaviate image and registry**: `semitechnologies/weaviate:1.27.0` → `cr.weaviate.io/semitechnologies/weaviate:1.39.2` in `docker-compose.yaml`, `docker-compose-template.yaml`, and `docker-compose.middleware.yaml`. **This is not a drop-in change for existing data** — see the Upgrade Guide.
- **`docker-compose.middleware.yaml`**: adds the `local_sandbox` service (present in the main Compose file since 1.16.1) with the `dify_agent_local_sandbox_home` and `dify_agent_local_sandbox_workspace` volumes, and publishes Weaviate's gRPC port `50051`.
- Image tags updated to `1.17.1`.

---

## Database Migrations

This release includes **3 new migrations**, all applied by `flask db upgrade`:

1. `2026_08_25_1200-9b7c6d5e4f3a_add_normalized_email_to_accounts.py` — Adds an indexed `accounts.normalized_email` column and backfills it, normalizing Gmail and Googlemail addresses. Deliberately **not unique**: existing installations may already hold equivalent accounts, and those records are preserved while new collisions are prevented.
2. `2026_08_27_1200-5578e028b2f2_migrate_legacy_model_types.py` — Data migration canonicalizing legacy model types across `provider_models`, `provider_model_credentials`, `tenant_default_models`, `provider_model_settings`, and `load_balancing_model_configs`, deduplicating colliding rows. This replaces the manual `flask data-migrate legacy-model-types` step from 1.16.1 and 1.17.0.
3. `2026_08_29_1200-c3f1a9b2e6d4_add_dataset_api_token_bindings.py` — Creates the `dataset_api_token_bindings` many-to-many table backing dataset-scoped API keys. Both foreign keys cascade on delete.

No manual backfill command is required.

> [!CAUTION]
> Migration `5578e028b2f2` is **not reversible** — its `downgrade()` is intentionally a no-op, because rows written after the enum rename cannot be distinguished from rows it rewrote. **Back up your database before upgrading.**

---

## Upgrade Guide

### Bundled Weaviate Server Upgrade

> [!WARNING]
>
> **Staged manual upgrade required for existing bundled-Weaviate deployments**
>
> This release moves the bundled Weaviate server from `1.27.0` to `1.39.2`. Weaviate neither tests nor supports skipping minor versions, and any release may carry an on-disk migration that expects the previous version to have run at least once. An existing data volume **cannot** cross 12 minors in one step.
>
> Do not pull `1.17.1` and restart. Step the volume through **every minor release in order**, landing on the latest patch of each, with a **graceful stop** at every rung.
>
> **Follow the runbook:** [Weaviate Server Upgrade Path](https://docs.dify.ai/en/self-host/deploy/troubleshooting/weaviate-server-migration-path)

This applies only if you run the bundled Weaviate with existing data. Check with:

```bash
grep -E '^VECTOR_STORE=' docker/.env
```

Fresh deployments start on `1.39.2` with an empty volume and need nothing. External Weaviate servers and other vector stores are unaffected.

The runbook is the source of truth for the image ladder, per-rung verification commands, backup, and rollback. In outline, the procedure is:

1. Stop Dify's request and worker services, and keep them stopped until the final rung passes.
2. Back up the Weaviate volume.
3. Step through all 13 rungs — `1.27` → `1.28` → … → `1.38` → finally exactly `1.39.2`, the version this release pins — verifying after each one.
4. Revert your temporary image edits, then continue with the normal upgrade steps below.

Two failure modes are worth knowing before you start:

- **A hard kill silently and permanently destroys vector recall.** Weaviate holds its HNSW index in memory and persists it through a commit log; `docker kill`, `docker rm -f`, an OOM kill, or a stop that exceeds Docker's grace period can leave that log incomplete. Measured on `1.39.2`, after a hard kill the object count, object listing, BM25 search, and fetch-by-ID all looked healthy while `near_vector` could reach only 680 of 700 objects. Nothing is logged, and it does not heal — the only repair is re-indexing the knowledge base. Always stop with `docker compose stop -t -1 weaviate`.
- **Queries fail for several seconds after every restart.** `/v1/meta` answers about 2s after start, but collections mount 4–9s later from `1.31` onward. Inside that window `/v1/objects` returns `404` and GraphQL returns `422 no graphql provider present … no schema is present`. Alarming mid-upgrade, and a false alarm — wait, or poll until a real collection query succeeds rather than trusting `/v1/meta`.

Collection layout does not change, so **no re-indexing is required**. Dify still stores each dataset as `Vector_index_<dataset_id>_Node` with a self-provided named vector `default` and the server-default cosine metric. The Python `weaviate-client` needs no attention either: `1.17.0` and `1.17.1` both pin `4.22.0`, which works against every server version on the ladder.

Running a Weaviate server older than `1.27.0`, or still on client v3? Start with the [Weaviate v4 migration guide](https://docs.dify.ai/en/self-host/deploy/troubleshooting/weaviate-v4-migration), then return to the upgrade path above.

### Legacy Model Types Now Migrate Automatically

> [!IMPORTANT]
>
> The manual `flask data-migrate legacy-model-types` step documented in the 1.16.1 and 1.17.0 upgrade guides is **no longer needed**. Migration `5578e028b2f2` performs the same canonicalization as part of `flask db upgrade` (#41326).
>
> If you already ran the manual command, the migration is a no-op for those rows. If you never ran it — and your deployment was upgraded from a version earlier than `1.15.0` — this release repairs the affected rows for you. After upgrading, verify that your model providers list their models and that previously failing models can be loaded and invoked.
>
> Back up the database first. This migration is **not reversible**.

### Docker Compose (Recommended)

Complete the Weaviate upgrade above first if it applies to you.

```bash
cd docker
docker compose down
git fetch --tags
git checkout 1.17.1
docker compose pull
docker compose up -d
```

The database migrations run automatically on startup.

> [!IMPORTANT]
> Review the env changes above and re-apply your local customizations before bringing the stack up — in particular the reduced `DIFY_AGENT_RUN_RETENTION_SECONDS` default (3 days → 2 hours).

### Source Code

```bash
git fetch --tags
git checkout 1.17.1
cd api
uv sync
uv run flask db upgrade
```

Rebuild and restart the Web frontend, then restart the API server and Worker. Node.js 24 LTS and pnpm 12.3.4 are now required for the web build.

### Post-Upgrade Verification

- Run a test retrieval against a knowledge base. Getting chunks back confirms the vector index survived, which an object count alone does not tell you.
- Confirm your model providers still list their models (see Legacy Model Types above).
- Open a large workflow in the editor and confirm it no longer reconnect-loops.
- Re-import any CSV, Excel, Notion, or web-scraped documents ingested on an earlier version — the extraction fixes in this release do not repair already-indexed text.


## What's Changed
* fix(api): align Service API OpenAPI contract by @hyoban in https://github.com/langgenius/dify/pull/41248
* fix(web): restore AI credits icon by @lyzno1 in https://github.com/langgenius/dify/pull/41257
* fix(agent-v2): refine access card interactions by @lyzno1 in https://github.com/langgenius/dify/pull/41254
* fix(web): align goto anything autocomplete behavior by @lyzno1 in https://github.com/langgenius/dify/pull/41258
* refactor(ci): trim redundant autofix work by @lyzno1 in https://github.com/langgenius/dify/pull/41259
* fix(web): upgrade Next.js to 16.3.3 by @lyzno1 in https://github.com/langgenius/dify/pull/41262
* feat(cli): add a compact command map for agent discovery by @samzong in https://github.com/langgenius/dify/pull/41226
* fix(api): enforce RBAC permission on agent app detail GET endpoint (#41264) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/41265
* fix: separate WebApp analytics from console page tracking by @iamjoel in https://github.com/langgenius/dify/pull/41251
* refactor(web): migrate document metadata input by @lyzno1 in https://github.com/langgenius/dify/pull/41276
* refactor(web): migrate dataset settings input by @lyzno1 in https://github.com/langgenius/dify/pull/41277
* refactor(web): migrate external knowledge input by @lyzno1 in https://github.com/langgenius/dify/pull/41278
* feat: go to anything check enable skill by @fatelei in https://github.com/langgenius/dify/pull/41281
* fix(api): restore Service API OpenAPI semantics by @hyoban in https://github.com/langgenius/dify/pull/41274
* fix(api): clean multimodal attachments in batch deletion by @hieheihei in https://github.com/langgenius/dify/pull/41256
* fix(rag-pipeline): mark credential-free datasources as authorized by @ccl125 in https://github.com/langgenius/dify/pull/39772
* refactor(api): extract console app site command boundary by @hjlarry in https://github.com/langgenius/dify/pull/41216
* refactor(api): standardize compliance downloads by @hjlarry in https://github.com/langgenius/dify/pull/41057
* fix(api): honor DELETE JSON body in model_validate by @leilei3167 in https://github.com/langgenius/dify/pull/41288
* chore(web): remove retired forum entry by @hjlarry in https://github.com/langgenius/dify/pull/41289
* fix(human-input): align backend timeout handle with frontend DSL by @Taranum01 in https://github.com/langgenius/dify/pull/40746
* fix(api): attribute Skill Builder credit usage by @linw1995 in https://github.com/langgenius/dify/pull/41290
* fix(auth): normalize Gmail registration emails by @linw1995 in https://github.com/langgenius/dify/pull/41249
* feat: optimize resource access config logic by @WTW0313 in https://github.com/langgenius/dify/pull/41164
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/41291
* refactor(api): thin OAuth controllers and extract application services by @41tair in https://github.com/langgenius/dify/pull/40692
* test(e2e): stabilize Agent access toggles by @lyzno1 in https://github.com/langgenius/dify/pull/41282
* fix: improve login and signup accessibility by @iamjoel in https://github.com/langgenius/dify/pull/41301
* feat: add command cli to migration rbac scope to automatic_include_workspace_members by @fatelei in https://github.com/langgenius/dify/pull/41304
* fix: update secret environment variable description by @zhangx1n in https://github.com/langgenius/dify/pull/41309
* fix(web): preserve link semantics in button-styled navigation by @lyzno1 in https://github.com/langgenius/dify/pull/41312
* fix(api): enforce RBAC permission on agent composer GET endpoint (#41324) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/41325
* fix(api): migrate legacy model types during upgrade by @laipz8200 in https://github.com/langgenius/dify/pull/41326
* fix(web): align model provider access permissions by @hjlarry in https://github.com/langgenius/dify/pull/41329
* refactor: remove unused workflow run export endpoint by @hjlarry in https://github.com/langgenius/dify/pull/41335
* refactor(web): migrate metadata inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41339
* refactor(api): extract workflow run archive application service by @hjlarry in https://github.com/langgenius/dify/pull/41253
* refactor(api): extract workflow statistic query service by @hjlarry in https://github.com/langgenius/dify/pull/41271
* chore(deps): bump h2 from 4.3.0 to 4.4.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/40120
* refactor(api): remove unused workflow archived logs endpoint by @hjlarry in https://github.com/langgenius/dify/pull/41345
* chore: remove permission check by @fatelei in https://github.com/langgenius/dify/pull/41349
* refactor(web): migrate workflow variable inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41340
* refactor(web): migrate tracing inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41341
* fix(web): route Agent V2 documentation links correctly by @lyzno1 in https://github.com/langgenius/dify/pull/41353
* fix(api): ignore broken pipe during app stop checks 🤖🤖🤖 by @QuantumGhost in https://github.com/langgenius/dify/pull/41356
* fix(web): use management provider list for MCP integrations by @hjlarry in https://github.com/langgenius/dify/pull/41360
* fix: improve home page accessibility by @iamjoel in https://github.com/langgenius/dify/pull/41310
* test: migrate Service API dataset segment sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40517
* test: migrate explore installed app sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40525
* test: migrate agent observability sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40588
* test: migrate knowledge file access sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40596
* fix: allow publishing workflows with legacy Agent nodes by @iamjoel in https://github.com/langgenius/dify/pull/41368
* test(e2e): wait for apps console readiness by @lyzno1 in https://github.com/langgenius/dify/pull/41357
* chore: add permission check back by @fatelei in https://github.com/langgenius/dify/pull/41369
* fix(web): refine agent configure section states by @lyzno1 in https://github.com/langgenius/dify/pull/41371
* chore(web): remove Agentation devtool by @lyzno1 in https://github.com/langgenius/dify/pull/41372
* fix(workflow): correct loop boolean break condition values by @HelloSrauker in https://github.com/langgenius/dify/pull/41186
* feat: track inline agent and preview mode events by @iamjoel in https://github.com/langgenius/dify/pull/41373
* fix: align documentation links with stable anchors by @lyzno1 in https://github.com/langgenius/dify/pull/41384
* feat: new user add automatic add to app / dataset whitelist by @fatelei in https://github.com/langgenius/dify/pull/41363
* revert(web): restore Agentation devtool by @lyzno1 in https://github.com/langgenius/dify/pull/41387
* fix(api): raise Socket.IO max_http_buffer_size for large workflows by @leilei3167 in https://github.com/langgenius/dify/pull/41347
* test: migrate human input sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40597
* test: migrate agent service sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40598
* perf(web): virtualize the Web Apps sidebar list again by @BenjaminX in https://github.com/langgenius/dify/pull/41397
* fix(api): preserve tracing configuration boundaries by @laipz8200 in https://github.com/langgenius/dify/pull/41403
* fix(ui): keep scroll area focus indicator visible by @lyzno1 in https://github.com/langgenius/dify/pull/41404
* refactor(web): simplify pricing components by @lyzno1 in https://github.com/langgenius/dify/pull/41416
* docs: correct UUIDv7 helper docstring by @huyua9 in https://github.com/langgenius/dify/pull/41419
* refactor(models): pass session into PipelineCustomizedTemplate.created_user_name by @a-yeyang in https://github.com/langgenius/dify/pull/41394
* refactor(models): pass session into ChildChunk accessors by @keith991001 in https://github.com/langgenius/dify/pull/41370
* fix: protect workspace owners in resource access by @WTW0313 in https://github.com/langgenius/dify/pull/41423
* fix(web): block resource access for Agent apps by @WTW0313 in https://github.com/langgenius/dify/pull/41424
* ci: run the dify-agent test suite by @alanhuangyoo in https://github.com/langgenius/dify/pull/41327
* feat: hide skill_entry when use has no skill.view permission by @fatelei in https://github.com/langgenius/dify/pull/41429
* fix(web): align web app sidebar spacing by @lyzno1 in https://github.com/langgenius/dify/pull/41425
* fix(web): prevent tool card footer clipping by @Jingyi-Dify in https://github.com/langgenius/dify/pull/41430
* fix(ci): correct difyctl release and e2e workflow gates by @GareArc in https://github.com/langgenius/dify/pull/41355
* fix: improve accessibility across the apps list by @iamjoel in https://github.com/langgenius/dify/pull/41393
* fix(web): give the favicon a single owner in root metadata by @BenjaminX in https://github.com/langgenius/dify/pull/41433
* fix(agent): add roster publication status contract by @lyzno1 in https://github.com/langgenius/dify/pull/41435
* fix(web): align agent roster card interactions by @lyzno1 in https://github.com/langgenius/dify/pull/41436
* fix: avoid duplicate error toast when applying agent build drafts by @iamjoel in https://github.com/langgenius/dify/pull/41442
* feat(web): enhance app and agent card interactions by @lyzno1 in https://github.com/langgenius/dify/pull/41449
* refactor(models): pass session into WorkflowAppLog accessors by @keith991001 in https://github.com/langgenius/dify/pull/41440
* test: centralize account and feature config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40864
* refactor(service_api): dep-inject payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41374
* test: centralize controller and storage config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40867
* refactor(controllers/console): dep-inject workflow payloads with @model_validate by @Terminator666666 in https://github.com/langgenius/dify/pull/41244
* chore: remove unnecessary type conversions by @lin597410-design in https://github.com/langgenius/dify/pull/41454
* test: centralize core and service config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40868
* test: migrate application DSL sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40554
* test: enforce centralized config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40869
* refactor(models): pass session into Workflow accessors by @jjj-n in https://github.com/langgenius/dify/pull/41464
* refactor: pass db.session explicitly in instruction_modify_workflow (#37403) by @weike-zhang in https://github.com/langgenius/dify/pull/40827
* refactor(service_api): dep-inject app payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41491
* fix(web): improve a11y of dataset clickable divs with native buttons by @LuckTerence in https://github.com/langgenius/dify/pull/41319
* refactor(service_api): dep-inject dataset payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41490
* revert(web): revert dataset button a11y changes by @lyzno1 in https://github.com/langgenius/dify/pull/41493
* refactor(console): dep-inject account payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41500
* refactor(web): dep-inject payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41501
* fix(e2e): target agent roster list items by @lyzno1 in https://github.com/langgenius/dify/pull/41453
* fix(web): refine agent dialog form sessions by @lyzno1 in https://github.com/langgenius/dify/pull/41492
* chore(deps): bump anthropics/claude-code-action from 1.0.199 to 1.0.210 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/langgenius/dify/pull/41504
* fix(web): unify tool plugin selection state by @lyzno1 in https://github.com/langgenius/dify/pull/41470
* fix(agent): reject incompatible session snapshots by @zyssyz123 in https://github.com/langgenius/dify/pull/41447
* fix(web): show DSL import warning details by @hjlarry in https://github.com/langgenius/dify/pull/41502
* fix(api): keep workspace owner consistent on ownership transfer by @GareArc in https://github.com/langgenius/dify/pull/41267
* feat: use app.acl.access_point_manage to control access point page access by @fatelei in https://github.com/langgenius/dify/pull/41462
* refactor(api): extract email registration application service by @41tair in https://github.com/langgenius/dify/pull/41108
* fix(web): make registration tracking consent-safe and retryable by @CodingOnStar in https://github.com/langgenius/dify/pull/41365
* fix(rbac): grant agent access to all legacy roles by @WTW0313 in https://github.com/langgenius/dify/pull/41511
* refactor(api): decouple onboarding and notification services by @41tair in https://github.com/langgenius/dify/pull/40759
* fix(web): make plugin detail drawer non-modal by @lyzno1 in https://github.com/langgenius/dify/pull/41473
* fix(web): preserve plugin footer text layout by @Jingyi-Dify in https://github.com/langgenius/dify/pull/41514
* test: migrate advanced chat generator sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40585
* test: migrate console dataset sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40521
* test: migrate audit findings sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40551
* test: migrate model and agent sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40087
* fix: stabilize node block selectors and restore start tabs by @iamjoel in https://github.com/langgenius/dify/pull/41523
* fix: prevent the exit versions button from shrinking by @iamjoel in https://github.com/langgenius/dify/pull/41527
* fix(web): align tool plugin card layout by @Jingyi-Dify in https://github.com/langgenius/dify/pull/41525
* fix: hide chat features drawer while opener dialog is active by @iamjoel in https://github.com/langgenius/dify/pull/41530
* fix(workflow): allow human input in iteration and loop by @laipz8200 in https://github.com/langgenius/dify/pull/40061
* chore(dify-agent): make local dev work with defaults out of the box by @wylswz in https://github.com/langgenius/dify/pull/41533
* fix(workflow): block manual runs for trigger workflows by @zyssyz123 in https://github.com/langgenius/dify/pull/41519
* fix(web): reset test-email sender state when reopening the modal by @GareArc in https://github.com/langgenius/dify/pull/41515
* docs(frontend): clarify transient state ownership by @lyzno1 in https://github.com/langgenius/dify/pull/41541
* fix(web): hide Open in Explore for SSO-restricted apps by @GareArc in https://github.com/langgenius/dify/pull/41518
* refactor(workflow): migrate schedule cron input by @lyzno1 in https://github.com/langgenius/dify/pull/41550
* refactor(workflow): migrate email subject input by @lyzno1 in https://github.com/langgenius/dify/pull/41551
* refactor(plugins): migrate credential rename input by @lyzno1 in https://github.com/langgenius/dify/pull/41552
* refactor(web): align skills card semantics by @lyzno1 in https://github.com/langgenius/dify/pull/41559
* fix(plugin): prevent install dialog error overflow by @lyzno1 in https://github.com/langgenius/dify/pull/41561
* chore: Revert "feat: use app.acl.access_point_manage to control access point page access" by @iamjoel in https://github.com/langgenius/dify/pull/41563
* chore(deps): upgrade workspace dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/41564
* refactor(console): dep-inject model provider payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41539
* refactor(service_api): dep-inject query params with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41562
* chore: enforce titles on CSS-truncated elements by @iamjoel in https://github.com/langgenius/dify/pull/41438
* fix(agent): bound Redis run event streams by @zyssyz123 in https://github.com/langgenius/dify/pull/41566
* refactor(models): pass session into DocumentSegment and AppDatasetJoin accessors by @elyar1124 in https://github.com/langgenius/dify/pull/41568
* refactor(models): remove legacy db.session property wrappers on Dataset by @keith991001 in https://github.com/langgenius/dify/pull/41569
* fix: handle published workflow request failures in access points by @iamjoel in https://github.com/langgenius/dify/pull/41572
* chore: upgrade Node.js runtime to 24 LTS by @lyzno1 in https://github.com/langgenius/dify/pull/41573
* fix(web): publish workflow before creating tool by @QuantumGhost in https://github.com/langgenius/dify/pull/41528
* fix(web): merge workflow tool outputs from all End nodes by @QuantumGhost in https://github.com/langgenius/dify/pull/41517
* test: migrate agent-v2 workflow sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40514
* test: migrate workspace member sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40523
* test: migrate dataset retrieval sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40548
* test: migrate dataset download sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40630
* refactor(api): decouple system features and web adapters by @41tair in https://github.com/langgenius/dify/pull/40772
* fix(web): announce agent draft status by @lyzno1 in https://github.com/langgenius/dify/pull/41595
* ci(e2e): shard pull request browser tests by @lyzno1 in https://github.com/langgenius/dify/pull/41596
* chore(deps-dev): bump nltk from 3.10.0 to 3.10.3 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/41602
* refactor(web): migrate external API selection input by @lyzno1 in https://github.com/langgenius/dify/pull/41610
* refactor(web): migrate dataset settings name input by @lyzno1 in https://github.com/langgenius/dify/pull/41611
* refactor(web): migrate webhook table input by @lyzno1 in https://github.com/langgenius/dify/pull/41612
* fix(rbac): let agent.manage operate every agent page by @GareArc in https://github.com/langgenius/dify/pull/41583
* chore(deps): bump pypdf from 6.15.0 to 6.16.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/41607
* refactor(service_api): dep-inject segment payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41571
* refactor(web): migrate access point mutations by @lyzno1 in https://github.com/langgenius/dify/pull/41614
* refactor(inner_api): dep-inject request payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41575
* docs(e2e): refine Playwright and Cucumber skill guidance by @lyzno1 in https://github.com/langgenius/dify/pull/41617
* fix: improve snippets list accessibility by @iamjoel in https://github.com/langgenius/dify/pull/41579
* fix(api): tolerate workflow pause snapshot cleanup failure by @QuantumGhost in https://github.com/langgenius/dify/pull/41581
* refactor(web): migrate console reset password inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41632
* refactor(web): migrate webapp reset password inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41633
* refactor(web): migrate webapp email code inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41634
* feat: app access point permission by @WTW0313 in https://github.com/langgenius/dify/pull/41631
* refactor(api): require active workspace in request context by @hjlarry in https://github.com/langgenius/dify/pull/41280
* chore(deps): bump pypdf from 6.14.2 to 6.16.1 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/41604
* perf(web): downsample static account avatars by @lyzno1 in https://github.com/langgenius/dify/pull/41655
* fix(web): stabilize Home and Studio route titles by @lyzno1 in https://github.com/langgenius/dify/pull/41654
* fix: preserve Swagger tool authorization after refresh by @iamjoel in https://github.com/langgenius/dify/pull/41656
* fix(dify-agent): harden E2B binding lifecycle by @zhaohao1004 in https://github.com/langgenius/dify/pull/41623
* fix: validate rule for provider scoped credentials by @wylswz in https://github.com/langgenius/dify/pull/41659
* fix(web): align avatar file extension with output type by @lyzno1 in https://github.com/langgenius/dify/pull/41662
* feat: allow knowledge base API keys to be scoped to a single dataset by @ForeignKeyCN in https://github.com/langgenius/dify/pull/37569
* perf(web): load Zendesk on support intent by @lyzno1 in https://github.com/langgenius/dify/pull/41653
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/41669
* chore(deps): bump transformers from 5.6.2 to 5.10.1 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/41608
* chore: Site to typebase by @asukaminato0721 in https://github.com/langgenius/dify/pull/35632
* refactor(api): extract forgot password application service by @41tair in https://github.com/langgenius/dify/pull/41111
* refactor(console,web): dep-inject query params with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41646
* chore(deps): bump transformers from 5.5.0 to 5.10.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/41609
* chore(dify-ui): migrate class merging to cn by @hyoban in https://github.com/langgenius/dify/pull/41693
* docs(web): clarify browser mode focus test boundary by @lyzno1 in https://github.com/langgenius/dify/pull/41692
* feat(web): make markdown form field name length configurable by @WTW0313 in https://github.com/langgenius/dify/pull/41697
* refactor(web): migrate legacy form controls to Dify UI by @lyzno1 in https://github.com/langgenius/dify/pull/41682
* refactor(service-api): inject file upload service by @hjlarry in https://github.com/langgenius/dify/pull/41585
* refactor(service_api): dep-inject the dataset create payload with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41651
* refactor(web): inject file upload service by @hjlarry in https://github.com/langgenius/dify/pull/41586
* refactor(console): inject file service by @hjlarry in https://github.com/langgenius/dify/pull/41603
* refactor(openapi): inject file upload service by @hjlarry in https://github.com/langgenius/dify/pull/41606
* fix(api): bound suggested question generation latency by @zyssyz123 in https://github.com/langgenius/dify/pull/41705
* refactor(api): centralize remote file handling by @hjlarry in https://github.com/langgenius/dify/pull/41627
* refactor(api): extract account login service and consolidate adapters by @41tair in https://github.com/langgenius/dify/pull/41184
* fix(web): guard LLM node model_selector against persisted null by @BenjaminX in https://github.com/langgenius/dify/pull/41707
* fix(web): align workspace switcher states and semantics by @Jingyi-Dify in https://github.com/langgenius/dify/pull/41713
* chore(web): canonicalize Tailwind classes by @hyoban in https://github.com/langgenius/dify/pull/41718
* fix(web): stringify object editor values before Monaco createModel by @kabishou11 in https://github.com/langgenius/dify/pull/41719
* chore(web): prune unused i18n keys by @hyoban in https://github.com/langgenius/dify/pull/41725
* test(web): remove workspace switcher browser test by @lyzno1 in https://github.com/langgenius/dify/pull/41728
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/41733
* refactor(api): decouple console OAuth flow from legacy account services by @41tair in https://github.com/langgenius/dify/pull/41188
* fix(agent): surface missing tool credentials by @zyssyz123 in https://github.com/langgenius/dify/pull/41726
* chore(dify-ui): enable purity lint in tests by @lyzno1 in https://github.com/langgenius/dify/pull/41736
* chore: remove redundant aria-label attributes by @iamjoel in https://github.com/langgenius/dify/pull/41724
* refactor(web): migrate runtime variable inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41739
* fix(web): map pt-BR to pt_BR for tool metadata by @hjlarry in https://github.com/langgenius/dify/pull/41745
* refactor(web): align account preference requests with API contracts by @hjlarry in https://github.com/langgenius/dify/pull/41748
* refactor(models): remove legacy db.session property wrappers on Document by @keith991001 in https://github.com/langgenius/dify/pull/41721
* refactor(query): migrate imperative APIs to query semantics by @lyzno1 in https://github.com/langgenius/dify/pull/41746
* fix(binding-files): keep UTF-8 text preview when max_bytes splits a character by @Souravrajvi0 in https://github.com/langgenius/dify/pull/41761
* refactor: pass notification language explicitly by @hjlarry in https://github.com/langgenius/dify/pull/41770
* feat: app deployment v2 by @WTW0313 in https://github.com/langgenius/dify/pull/41444
* chore(web): enforce query options lint by @lyzno1 in https://github.com/langgenius/dify/pull/41754
* chore: run dify-agent typecheck in python-style by @wylswz in https://github.com/langgenius/dify/pull/41701
* refactor(models): use sa.false()/sa.true() for boolean server defaults by @Souravrajvi0 in https://github.com/langgenius/dify/pull/41762
* ci: parallelize change detection and gate style jobs by @41tair in https://github.com/langgenius/dify/pull/41678
* fix(api): support Lao as a display language by @hjlarry in https://github.com/langgenius/dify/pull/41743
* refactor: make explore localization request-driven by @hjlarry in https://github.com/langgenius/dify/pull/41798
* chore: correct ARIA roles and preserve control interactions by @iamjoel in https://github.com/langgenius/dify/pull/41738
* fix(ci): avoid npm bootstrap in web setup by @lyzno1 in https://github.com/langgenius/dify/pull/41804
* test: split skill detail page suite by @lyzno1 in https://github.com/langgenius/dify/pull/41799
* chore(deps-dev): bump mkdocs-material from 9.7.6 to 9.7.7 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/41767
* docs(api): Fix reformat script path in api/README.md by @jrlprost in https://github.com/langgenius/dify/pull/41658
* fix(api): correct dataset and document list has_more pagination by @kabishou11 in https://github.com/langgenius/dify/pull/41784
* fix(skills): tolerate __MACOSX metadata folder when importing a Skill package by @chelsealong in https://github.com/langgenius/dify/pull/41757
* fix: close unclosed think tags around agent tool calls by @Souravrajvi0 in https://github.com/langgenius/dify/pull/41764
* fix(api): persist plugin trigger subscription expires_at from provider by @kabishou11 in https://github.com/langgenius/dify/pull/41773
* fix(api): keep segment attachments when attachment_ids omitted by @kabishou11 in https://github.com/langgenius/dify/pull/41777
* refactor(web): migrate runtime app inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41806
* refactor(api): move OpenAPI account access behind application services by @41tair in https://github.com/langgenius/dify/pull/41308
* fix(web): use stable error boundary retry by @lyzno1 in https://github.com/langgenius/dify/pull/41811
* fix(web): allow CookieYes consent logging by @lyzno1 in https://github.com/langgenius/dify/pull/41812
* fix(api): correct Service API segments has_more pagination by @kabishou11 in https://github.com/langgenius/dify/pull/41776
* feat(web): add marketplace creator profiles and homepage redesign by @CodingOnStar in https://github.com/langgenius/dify/pull/41538
* refactor(api): extract console workflow run application service by @hjlarry in https://github.com/langgenius/dify/pull/41336
* fix(api): skip invalid markdown image URLs by @euxx in https://github.com/langgenius/dify/pull/41343
* fix(trigger): sync plugin relationships on publish by @ayush-singh-0601 in https://github.com/langgenius/dify/pull/41756
* docs(dify-ui): document combobox chip keyboard hints by @lyzno1 in https://github.com/langgenius/dify/pull/41815
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/41817
* perf(agent-v2): flatten build draft request waterfalls by @lyzno1 in https://github.com/langgenius/dify/pull/41816
* test: migrate core agent runner sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40508
* chore: bump base-ui to 1.8.0 by @lyzno1 in https://github.com/langgenius/dify/pull/41820
* refactor(api): extract app statistic queries from console controllers by @hjlarry in https://github.com/langgenius/dify/pull/41557
* fix(api): enforce admin and RBAC permissions on model provider model credential GET endpoint (#41599) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/41600
* refactor(dify-ui): adopt ID-backed combobox items by @lyzno1 in https://github.com/langgenius/dify/pull/41821
* chore: use semantic tags for interactive elements by @iamjoel in https://github.com/langgenius/dify/pull/41813
* refactor(api): isolate workflow app log queries by @hjlarry in https://github.com/langgenius/dify/pull/41509
* fix(web): append /api/v1 when SSR reads MARKETPLACE_API_URL by @CodingOnStar in https://github.com/langgenius/dify/pull/41824
* docs(web): align PreviewCard disclosure guidance by @lyzno1 in https://github.com/langgenius/dify/pull/41827
* fix(button): align loading accessibility contract by @lyzno1 in https://github.com/langgenius/dify/pull/41823
* test: migrate application generation sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40509
* fix: align select and autocomplete collection contracts by @lyzno1 in https://github.com/langgenius/dify/pull/41829
* fix: preserve generated API contracts during local development by @hyoban in https://github.com/langgenius/dify/pull/41834
* fix(select): isolate trigger states and unavailable package selection by @lyzno1 in https://github.com/langgenius/dify/pull/41843
* refactor(models): pass session into tool provider accessors by @a-yeyang in https://github.com/langgenius/dify/pull/41830
* refactor(models): pass session into AppAnnotationHitHistory accessors by @a-yeyang in https://github.com/langgenius/dify/pull/41832
* refactor(web): dep-inject the passport query with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41845
* docs: clarify frontend guidance ownership and dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/41848
* refactor(console): decouple app tracing configuration by @hjlarry in https://github.com/langgenius/dify/pull/41576
* fix(web): open embedded recommend banner plugins in the detail dialog by @CodingOnStar in https://github.com/langgenius/dify/pull/41828
* refactor(api): extract human input file upload persistence by @hjlarry in https://github.com/langgenius/dify/pull/41716
* chore(deps): bump anthropics/claude-code-action from 1.0.211 to 1.0.216 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/langgenius/dify/pull/41892
* refactor(models): remove legacy db.session properties from Conversation by @Kiveiru3 in https://github.com/langgenius/dify/pull/41847
* chore: remove unnecessary str() calls in annotation tasks by @XiaoSong1223 in https://github.com/langgenius/dify/pull/41878
* refactor(web): migrate workflow error default inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41900
* refactor(web): migrate loop variable constant inputs by @lyzno1 in https://github.com/langgenius/dify/pull/41901
* fix(agent): send uploaded images as native multimodal input by @kenwoodjw in https://github.com/langgenius/dify/pull/41685
* chore(deps-dev): bump the dev group in /api with 48 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/41896
* feat(rbac): agent RBAC/ACL scenes and resource-locator check bundles by @GareArc in https://github.com/langgenius/dify/pull/41768
* refactor(models): pass session into AppAnnotationSetting.collection_binding_detail by @however-yir in https://github.com/langgenius/dify/pull/41885
* refactor(models): remove legacy db.session wrappers on Message feedback/annotation accessors by @however-yir in https://github.com/langgenius/dify/pull/41883
* refactor(inner_api): dep-inject workspace payloads with @model_validate by @ShousenZHANG in https://github.com/langgenius/dify/pull/41540
* refactor(controllers): inject message request models by @Kiveiru3 in https://github.com/langgenius/dify/pull/41884
* refactor(models): remove legacy db.session property wrappers on DocumentSegment and DatasetQuery by @keith991001 in https://github.com/langgenius/dify/pull/41794
* refactor(models): remove remaining legacy db.session property wrappers on Dataset by @keith991001 in https://github.com/langgenius/dify/pull/41647
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/41904
* refactor(models): pass session into CustomizedSnippet accessors by @anneheartrecord in https://github.com/langgenius/dify/pull/40379
* refactor(controllers): adopt with_session in web saved_message by @yuki-uix in https://github.com/langgenius/dify/pull/41859
* fix(web): use default Code Inspector integration by @lyzno1 in https://github.com/langgenius/dify/pull/41903
* refactor(web): move app quota refresh out of provider context by @lyzno1 in https://github.com/langgenius/dify/pull/41906
* refactor(web): remove provider plan query flags by @lyzno1 in https://github.com/langgenius/dify/pull/41908
* fix(ssrf): apply private allowlist to agent_ssrf_proxy by @kabishou11 in https://github.com/langgenius/dify/pull/41870
* refactor(web): remove legacy enableBilling consumers by @lyzno1 in https://github.com/langgenius/dify/pull/41913
* refactor(api): remove legacy billing enabled state by @lyzno1 in https://github.com/langgenius/dify/pull/41917
* fix(api): fix tencent summary vector deadlock by @FFXN in https://github.com/langgenius/dify/pull/41916
* refactor(service-api): extract file preview application service by @hjlarry in https://github.com/langgenius/dify/pull/41732
* refactor(models): pass session into ApiToolProvider.user accessor by @however-yir in https://github.com/langgenius/dify/pull/41882
* refactor(models): remove the last standalone legacy db.session properties on Dataset by @keith991001 in https://github.com/langgenius/dify/pull/41911
* refactor(models): remove legacy db.session wrappers on Message accessors by @however-yir in https://github.com/langgenius/dify/pull/41886
* fix(dx): repair and restage Python files in pre-commit by @lyzno1 in https://github.com/langgenius/dify/pull/41877
* fix(api): reject ownerless pending DSL imports by @WH-2099 in https://github.com/langgenius/dify/pull/40107
* refactor(web): retire provider context plan state by @lyzno1 in https://github.com/langgenius/dify/pull/41925
* refactor: preserve exception context when re-raising in except blocks by @zrh805 in https://github.com/langgenius/dify/pull/40432
* refactor(models): pass session into InstalledApp.tenant accessor by @ShawYann in https://github.com/langgenius/dify/pull/41831
* refactor: add missing @override decorators to console controller classes by @citizen204 in https://github.com/langgenius/dify/pull/37113
* style(api): remove unnecessary type conversions in services, repositories and tests by @Java123456com in https://github.com/langgenius/dify/pull/41856
* refactor(web): remove obsolete agent v2 scaffolding and editor state by @lyzno1 in https://github.com/langgenius/dify/pull/41931
* fix(billing): align zero and unlimited quota semantics by @lyzno1 in https://github.com/langgenius/dify/pull/41927
* fix(dataset_service): refresh session snapshot before UploadFile lookup by @Taranum01 in https://github.com/langgenius/dify/pull/41840
* fix(vdb-weaviate): backward-compatible cleanup + preserve positional alignment by @Taranum01 in https://github.com/langgenius/dify/pull/41915
* refactor(api): extract upload file delivery service by @hjlarry in https://github.com/langgenius/dify/pull/41772
* refactor(console): unify environment-aware oRPC clients and query policies by @lyzno1 in https://github.com/langgenius/dify/pull/41932
* refactor(api): extract tool file download service by @hjlarry in https://github.com/langgenius/dify/pull/41790
* refactor(web): move provider feature flags to query consumers by @lyzno1 in https://github.com/langgenius/dify/pull/41937
* refactor(web): move model lists out of provider context by @lyzno1 in https://github.com/langgenius/dify/pull/41939
* fix(agent): persist Chatflow Agent V2 memory by conversation_id by @kabishou11 in https://github.com/langgenius/dify/pull/41871
* refactor(api): extract plugin file upload application service by @hjlarry in https://github.com/langgenius/dify/pull/41808
* fix(api): align service api schemas with runtime behavior by @hyoban in https://github.com/langgenius/dify/pull/41943
* refactor(web): retire provider context by @lyzno1 in https://github.com/langgenius/dify/pull/41944
* fix: correct page landmarks and document layout rules by @iamjoel in https://github.com/langgenius/dify/pull/41938
* fix(api): enforce RBAC permission on MCP tool provider GET endpoint (#41547) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/41548
* refactor(api): trim workspace features response contract by @lyzno1 in https://github.com/langgenius/dify/pull/41948
* refactor(models): remove the legacy db.session wrappers on App by @ShousenZHANG in https://github.com/langgenius/dify/pull/41942
* refactor(models): remove four unread legacy db.session wrappers by @ShousenZHANG in https://github.com/langgenius/dify/pull/41964
* fix: make panel and node resizing keyboard accessible by @iamjoel in https://github.com/langgenius/dify/pull/41963
* refactor(web): isolate pricing modal state and lifecycle by @lyzno1 in https://github.com/langgenius/dify/pull/41960
* fix(dataset): delete segment attachment blobs from storage by @CoralGarden52 in https://github.com/langgenius/dify/pull/41400
* fix(api): anchor JSON extraction on brackets in parse_json_markdown by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/41959
* feat: support keyboard movement for workflow nodes and comments by @iamjoel in https://github.com/langgenius/dify/pull/41967
* fix(i18n): sync agent access point copy by @WTW0313 in https://github.com/langgenius/dify/pull/41969
* fix(rag): preserve CSV cell text during knowledge import by @Souravrajvi0 in https://github.com/langgenius/dify/pull/41922
* fix(api): handle string and missing params in weekday time tool by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/41952
* refactor(models): pass session into WorkflowNodeExecutionModel accessors by @keith991001 in https://github.com/langgenius/dify/pull/41968
* fix(api): correct service api rate limit descriptions by @hyoban in https://github.com/langgenius/dify/pull/41975
* fix(api): accept CRLF SKILL.md when importing skill zips by @leilei3167 in https://github.com/langgenius/dify/pull/41657
* fix(web): reset goto anything search after dialog closes by @lyzno1 in https://github.com/langgenius/dify/pull/41976
* fix: restore comment marker focus after closing threads by @iamjoel in https://github.com/langgenius/dify/pull/41978
* test: migrate provider core entity sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40532
* test: migrate console dataset document sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40522
* test: migrate workspace snippet sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40524
* test: migrate segment service sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40535
* fix(api): flatten readabilipy plain_text items in web reader tool by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/41954
* fix(web): keep recommend banner logos intact and show template authors by @CodingOnStar in https://github.com/langgenius/dify/pull/41980
* fix(api): resolve aliases in remote settings sources by @GYJ99 in https://github.com/langgenius/dify/pull/41463
* fix(api): allow PDF extraction from URLs without an upload file by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/41950
* docs(CODEOWNERS): Assign domain owners for backend test paths by @laipz8200 in https://github.com/langgenius/dify/pull/42007
* fix(dataset): clean multimodal attachments during reindex by @CoralGarden52 in https://github.com/langgenius/dify/pull/41999
* chore(deps): upgrade pnpm to 12.3.4 and Vite+ to 0.3.1 by @lyzno1 in https://github.com/langgenius/dify/pull/42005
* fix: dataset hitcount deadlock by @FFXN in https://github.com/langgenius/dify/pull/41979
* fix(api): fall back to first server URL when X-Request-Env is set but servers lack env key by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/42025
* fix: validate declared blob size before allocating buffer in chunk merger by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/42021
* fix(api): reject trailing newlines in user_input_form variable names by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/42029
* fix(api): handle invalid app icon references by @linw1995 in https://github.com/langgenius/dify/pull/41977
* fix: keep Notion table cell rich text segments in one Markdown column by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/41993
* chore(deps): upgrade jotai to v3 and jotai-scope by @lyzno1 in https://github.com/langgenius/dify/pull/42036
* fix(api): accept valid epoch-0 timestamps in localtime conversion tool by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/42027
* fix: deduplicate repeated GET request error notifications by @iamjoel in https://github.com/langgenius/dify/pull/42035
* chore(deps): bump gitpython from 3.1.58 to 3.1.59 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/42017
* fix(console): stop advertising the education plan outside Dify Cloud by @lin-snow in https://github.com/langgenius/dify/pull/41898
* refactor(models): remove the unread App.author_name db.session wrapper by @ShousenZHANG in https://github.com/langgenius/dify/pull/41983
* refactor(models): remove the App.bound_agent_id and App.is_agent wrappers by @ShousenZHANG in https://github.com/langgenius/dify/pull/41998
* refactor(api): remove InstalledApp implicit-session accessor by @nehal-a2z in https://github.com/langgenius/dify/pull/42000
* refactor(controllers/console): inject saved-message query with @model_validate by @wr-Jiao in https://github.com/langgenius/dify/pull/41819
* fix: escape double quotes in .xls cell values like the .xlsx path by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/42049
* chore(lint): share and tighten JSX accessibility rules by @lyzno1 in https://github.com/langgenius/dify/pull/42045
* fix: join all rich_text/title segments in Notion database extraction by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/42050
* refactor(web): migrate workflow numeric configuration inputs by @lyzno1 in https://github.com/langgenius/dify/pull/42052
* fix: make sortable lists keyboard accessible by @iamjoel in https://github.com/langgenius/dify/pull/41974
* chore(deps): bump transformers from 5.6.2 to 5.16.1 in /dify-agent by @wylswz in https://github.com/langgenius/dify/pull/42054
* test: reclassify response filter regressions by @asukaminato0721 in https://github.com/langgenius/dify/pull/40706
* chore(lint): tighten inline disable enforcement by @hyoban in https://github.com/langgenius/dify/pull/42058
* test: migrate workflow node execution task sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40571
* fix(web): hide decorative content and redundant list semantics by @iamjoel in https://github.com/langgenius/dify/pull/42060
* feat: add agent resource permissions by @WTW0313 in https://github.com/langgenius/dify/pull/41940
* chore(lint): respect gitignore in ESLint flat config by @hyoban in https://github.com/langgenius/dify/pull/42065
* chore(deps): bump unstructured from 0.21.5 to 0.27.5 in /api by @wylswz in https://github.com/langgenius/dify/pull/42053
* test: migrate console app response sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40562
* test: migrate console workflow sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40563
* chore(deps): bump h2 from 4.3.0 to 4.4.1 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/40119
* chore: example to add Mapped by @asukaminato0721 in https://github.com/langgenius/dify/pull/40374
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/42064
* fix: fix undo delete operation for webhook trigger node lead the url … by @fatelei in https://github.com/langgenius/dify/pull/42069
* chore(deps): bump httpx2 from 2.5.0 to 2.12.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/42011
* chore(deps): bump httpx2 from 2.5.0 to 2.12.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/42012
* fix(web): open embedded recommend banner templates in the detail dialog by @CodingOnStar in https://github.com/langgenius/dify/pull/42063
* chore(deps): bump the storage group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/41893
* chore(release): Upgrade self-hosted Weaviate to 1.39 by @dudanogueira in https://github.com/langgenius/dify/pull/38214
* fix(web): restore focus after closing overlays by @iamjoel in https://github.com/langgenius/dify/pull/42068
* chore(deps): bump gunicorn from 26.1.0 to 26.2.0 in /api in the flask group across 1 directory by @dependabot[bot] in https://github.com/langgenius/dify/pull/41505
* refactor(web): migrate conversation variable inputs by @lyzno1 in https://github.com/langgenius/dify/pull/42070
* refactor(api): migrate remaining RESTX models to Pydantic by @asukaminato0721 in https://github.com/langgenius/dify/pull/40399
* chore(deps): bump unstructured from 0.21.5 to 0.24.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/41765
* fix(web): align card tag masks with design tokens by @lyzno1 in https://github.com/langgenius/dify/pull/42074
* chore(deps): bump the google group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/41121
* chore: fit the app canvas when create from DSL and preview by @iamjoel in https://github.com/langgenius/dify/pull/42073
* fix: prevent note bold shortcut from toggling the sidebar by @iamjoel in https://github.com/langgenius/dify/pull/42078
* fix(ci): refresh E2E runtime path filters by @lyzno1 in https://github.com/langgenius/dify/pull/42079
* test: split CodeNode validation from sandbox coverage by @asukaminato0721 in https://github.com/langgenius/dify/pull/40707
* feat(nuqs-jotai): bridge nuqs URL state into Jotai by @hyoban in https://github.com/langgenius/dify/pull/42086
* refactor(api): remove legacy end user type fallback by @EvanYao826 in https://github.com/langgenius/dify/pull/39662
* chore(codeowners): assign dify-agent to Yanli by @laipz8200 in https://github.com/langgenius/dify/pull/42091
* docs(api): fix working directory instructions for running tests by @Babulubobo in https://github.com/langgenius/dify/pull/42085
* fix(web): prefetch skill feature flag for initial navigation by @kabishou11 in https://github.com/langgenius/dify/pull/41731
* fix(web): stabilize install footer and shortcut initial rendering by @hyoban in https://github.com/langgenius/dify/pull/42088
* chore(web): upgrade React to 19.3 and adopt browser-only rendering by @lyzno1 in https://github.com/langgenius/dify/pull/42093
* fix(web): restore content-sized search shortcut keycap by @lyzno1 in https://github.com/langgenius/dify/pull/42097
* fix: fix agent.id mismatch lead permission keys are empty by @fatelei in https://github.com/langgenius/dify/pull/42095
* fix(web): remove local search delay and clean up component lifecycles by @lyzno1 in https://github.com/langgenius/dify/pull/42102
* test: migrate summary index sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40505
* test: migrate console dataset metadata sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40520
* test: migrate custom tool provider ORM model to real entity by @asukaminato0721 in https://github.com/langgenius/dify/pull/40653
* test: migrate agent workspace and publishing sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40506
* test: migrate Service API app sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40558
* test: migrate RAG retrieval sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40512
* test: move mocked model and tool cases to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/40708
* fix(dify-ui): preserve invalid focus colors and remove shadow transitions by @lyzno1 in https://github.com/langgenius/dify/pull/42108
* fix(agent): pin chatflow participant versions across config updates by @zyssyz123 in https://github.com/langgenius/dify/pull/42105
* fix(api): restore Human Input completion events by @QuantumGhost in https://github.com/langgenius/dify/pull/42082
* fix(web): preserve web apps navigation focus and disclosure semantics by @lyzno1 in https://github.com/langgenius/dify/pull/42113
* fix(ui): let collapsible consumers own trigger styling by @lyzno1 in https://github.com/langgenius/dify/pull/42116
* fix(web): correct form labels, validation feedback, and keyboard navigation by @iamjoel in https://github.com/langgenius/dify/pull/42096
* fix(web): center settings dialog across viewport sizes by @hyoban in https://github.com/langgenius/dify/pull/42120
* fix(web): delegate overlay initial focus to popup owners by @lyzno1 in https://github.com/langgenius/dify/pull/42121
* chore: bump version to 1.17.1 by @wylswz in https://github.com/langgenius/dify/pull/42129

## New Contributors
* @ccl125 made their first contribution in https://github.com/langgenius/dify/pull/39772
* @HelloSrauker made their first contribution in https://github.com/langgenius/dify/pull/41186
* @huyua9 made their first contribution in https://github.com/langgenius/dify/pull/41419
* @keith991001 made their first contribution in https://github.com/langgenius/dify/pull/41370
* @alanhuangyoo made their first contribution in https://github.com/langgenius/dify/pull/41327
* @ShousenZHANG made their first contribution in https://github.com/langgenius/dify/pull/41374
* @Terminator666666 made their first contribution in https://github.com/langgenius/dify/pull/41244
* @lin597410-design made their first contribution in https://github.com/langgenius/dify/pull/41454
* @jjj-n made their first contribution in https://github.com/langgenius/dify/pull/41464
* @LuckTerence made their first contribution in https://github.com/langgenius/dify/pull/41319
* @elyar1124 made their first contribution in https://github.com/langgenius/dify/pull/41568
* @kabishou11 made their first contribution in https://github.com/langgenius/dify/pull/41719
* @jrlprost made their first contribution in https://github.com/langgenius/dify/pull/41658
* @ayush-singh-0601 made their first contribution in https://github.com/langgenius/dify/pull/41756
* @Kiveiru3 made their first contribution in https://github.com/langgenius/dify/pull/41847
* @XiaoSong1223 made their first contribution in https://github.com/langgenius/dify/pull/41878
* @however-yir made their first contribution in https://github.com/langgenius/dify/pull/41885
* @anneheartrecord made their first contribution in https://github.com/langgenius/dify/pull/40379
* @yuki-uix made their first contribution in https://github.com/langgenius/dify/pull/41859
* @ShawYann made their first contribution in https://github.com/langgenius/dify/pull/41831
* @Java123456com made their first contribution in https://github.com/langgenius/dify/pull/41856
* @GYJ99 made their first contribution in https://github.com/langgenius/dify/pull/41463
* @nehal-a2z made their first contribution in https://github.com/langgenius/dify/pull/42000
* @wr-Jiao made their first contribution in https://github.com/langgenius/dify/pull/41819
* @dudanogueira made their first contribution in https://github.com/langgenius/dify/pull/38214
* @Babulubobo made their first contribution in https://github.com/langgenius/dify/pull/42085

**Full Changelog**: https://github.com/langgenius/dify/compare/1.17.0...1.17.1

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.17.1` · 2026-09-10 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.17.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
