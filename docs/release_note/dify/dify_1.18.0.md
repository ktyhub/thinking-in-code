---
title: "dify 1.18.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.18.0"
version: "1.18.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "Dify 1.18.0 brings Agents that route workflows, portable app packages, deeper visibility into nested workflow runs, and the opt-in Agent Knowledge Base experience."
---

# dify 1.18.0

Dify 1.18.0 brings **Agents that route workflows**, **portable app packages**, **deeper visibility into nested workflow runs**, and the opt-in **Agent Knowledge Base** experience. OpenAPI and the new difyctl expand how you build and manage apps from the command line.

> [!IMPORTANT]
> **Read the upgrade guide below before deploying.** Upgrade the API, workers, Agent Backend, and Agent runtime images together. Local Agent sandboxes require a non-empty authentication token, and Agent Backend uses a new run protocol. Source installations require Python 3.13. Install the new difyctl client and sign in again. Preserve your existing `PASSWORD_PEPPER` configuration.

### Release highlights

#### Agents that choose the next step

Let an Agent decide which workflow branch to take. Enable **Output Routes**, give each route a selection condition, and connect it to the next step—such as resolving a request directly or handing it to a specialist. The read-only `switch` output exposes the chosen route. (#42599)

![Agent Output Routes with Resolve directly and Escalate to team branches](https://github.com/user-attachments/assets/30480ac3-d53e-4522-b1c5-95eb1d9ac9f2)

*Output Routes configuration with two branches in the workflow editor.*

Plain Agent v2 nodes also stream text as it is generated. Structured results, routed results, and nodes using default-value error handling remain buffered. (#43986)

#### Portable apps in one package

Move an app with its supported resources in a single **`.ifpkg` package**. Workflow and Chatflow packages carry inline Agents, Skills, and their files; imports recreate those resources in the destination workspace and remap references. File and URL imports support both packages and YAML, and explicit YAML export remains available. (#42066, #42579, #42626, #42863)

![Studio Import App dialog with a portable-workflow.ifpkg package selected](https://github.com/user-attachments/assets/11ae78d4-c902-45ff-b875-7c91dd6a530f)

*Studio's `.ifpkg` import preview.*

#### See inside nested workflow runs

Open a **Workflow Tool invocation** from the run history and inspect the child workflow's individual steps. Nested tools now run as child graphs with coordinated pause, resume, stop, and file outputs. Access checks protect the source app's details. (#40277, #42819, #42820, #42821, #42822)

![Nested Workflow Tool trace showing successful Start, Template, and End steps](https://github.com/user-attachments/assets/90a2236f-2118-4bc4-82fe-20508167b636)

*Trace drilldown into a successful Workflow Tool invocation.*

Nested usage and step totals can still be approximate, particularly after a pause or stop. Console drilldown and external trace export have different scopes; see the full feature details below.

#### Agent Knowledge Base · Beta

Create a knowledge space for your agents, add files or connect sources, and inspect document processing, metadata, retrieval traces, and quality evaluations in one place. The new Knowledge Retrieval node and Agent integrations share access-controlled KnowledgeFS spaces. Classic Knowledge remains available. This is an opt-in integration with a separate service and database; see the deployment requirements below. (#44165)

*Will soon be available on cloud.dify.ai*

### Developer spotlight

**Build and manage apps with OpenAPI and difyctl.** The CLI discovers commands from the server's operation catalog, with searchable help and support for Workflow and Chatflow creation, DSL import/export, settings, environment variables, publishing, and version restoration. Draft hashes protect concurrent edits. (#42487, #42608, #43067)

Install the bundled skill for agents building Dify apps:

```bash
difyctl install skills <dir>
```

The new client requires a fresh sign-in; see the deployment instructions below. (#43819)

---

### Upgrade guide

**Compatibility and Rollout**

1. **Back up first.** Retain the database, vector-store data, uploaded files, Agent snapshot/workspace storage, and all deployment secrets and env files. Use a maintenance window for a single-stack upgrade.
2. **Upgrade the Agent components together.** `/runs` now accepts composition v2 and rejects v1 requests. Existing session snapshots are converted on read and saved as v2; old runtimes cannot read newly saved v2 snapshots. Direct Agent Backend integrations must update their request format. The old Agent-specific AskHuman tool and deferred resume path are removed: historical Agent forms no longer resume execution, while shared Workflow Human Input nodes remain supported. (#43833)
3. **Retire old workflow consumers before admitting new-version traffic.** Let in-flight runs finish, then replace legacy workers/resume consumers so they cannot process the shared queue without the new cancellation guards. Legacy paused task IDs can be recovered from valid saved invocation snapshots within the existing access scope; missing or invalid snapshots require separate recovery. Nested usage totals retain the limitation noted above. (#40277)
4. **Configure the Local sandbox token before restart.** Supply a high-entropy secret through the shared Compose interpolation source. The `1.17.1` runtime image does not support the new `--require-auth-token` flag; deploy the matching `1.18.0` Agent Backend and Local sandbox images. (#44152)
5. **Preserve password hashing configuration.** Existing installations without a pepper should leave `PASSWORD_PEPPER` empty. Setting a new pepper during the upgrade is not a transparent migration and requires an explicit password-reset plan. Keep any configured pepper unchanged across all instances and restore it with the database.
6. **Review the proxy boundary.** Bundled Nginx replaces `X-Forwarded-For` with its resolved client address, and Compose enables forwarded-header handling. Keep direct API access restricted to trusted callers. If a load balancer or Cloudflare sits before Nginx, configure trusted real-IP handling there; otherwise visitors may share the proxy’s rate-limit bucket. See [client IP and trusted proxies](https://github.com/langgenius/dify/blob/laipz8200/release-1.18.0/docker/README.md#client-ip-and-trusted-proxies).
7. **Enable KnowledgeFS deliberately.** Default Compose installations keep it off; local Community Edition development requires the explicit Community development opt-in. Configure its separate database and migrations, Capability v2 public verifier, Dify signing keys, model profile (embedding, reasoning, and rerank), and Workspace cutover gates before enabling traffic. The optional service must pass `/ready`, not only `/health`. Standard Dify API images do not contain the separate KnowledgeFS engine used by the optional engine-worker profile; the published default KnowledgeFS API image is currently amd64 only. Follow the [KnowledgeFS deployment and recovery guide](https://github.com/langgenius/dify/blob/laipz8200/release-1.18.0/docker/README.md#knowledgefs-integration-service).

<details>
<summary><strong>Deployment instructions · Docker Compose, source, and difyctl</strong></summary>

**Docker Compose**

Once the 1.18.0 release images and tag are published, stop the old stack gracefully, switch to the release, merge the configuration changes above, and pull/start the new stack:

```bash
cd dify/docker
docker compose stop -t -1
git fetch --tags
git checkout 1.18.0
# Merge required configuration changes into existing env files here.
docker compose pull
docker compose up -d
```

Keep database migrations enabled (`MIGRATION_ENABLED=true`) for the API startup, or run them through your managed migration process before starting new workers. The bundled Weaviate update from 1.17.1 is a patch update within 1.39. If coming from a version that still runs Weaviate 1.27, complete the [1.17.1 staged Weaviate upgrade](https://github.com/langgenius/dify/releases/tag/1.17.1) first.

**Source Deployments**

Use Python **3.13** for the API, Node.js **24.22.1** or later in the 24.x line, and pnpm **12.10.1**. Refresh the locked dependencies and apply the database migrations from the repository root:

```bash
uv sync --project api --frozen
uv run --directory api flask db upgrade
pnpm install --frozen-lockfile
```

Rebuild the web application and restart API, worker, scheduler, and Agent services from the same release. If deploying Agent Backend separately from source, refresh its locked `server` dependencies as well.

**difyctl**

Install the matching 1.18.0 client. Its v2 implementation does not reuse v1 login state:

```bash
difyctl login --server https://your-dify.example.com
difyctl help
```

Update scripts to the current server-discovered command surface. The old mode-agnostic `/openapi/v1/apps/{app_id}:run` route is replaced by per-mode operations; use the catalog instead of hard-coded v1 routes. Refresh installed agent skills with `difyctl install skills <dir>`. (#42487, #42608, #43819)

</details>

<details>
<summary><strong>Existing data that may need recovery</strong></summary>

- **Published triggers:** the draft-sync fix does not repair subscriptions already removed before upgrading. Rebind missing subscriptions and republish affected workflows as needed. (#44068)
- **Document extraction:** re-import/re-index affected content to apply extraction fixes to existing documents.
- **Built-in document metadata:** toggling built-in fields rewrites only enabled, non-archived documents whose indexing is complete. Other legacy rows can retain the old format and need a later rewrite when eligible; this release does not include a full backfill. (#44218)

</details>

### Detailed changes

<details>
<summary><strong>New features · complete capabilities and availability</strong></summary>

**Agent Knowledge Base and KnowledgeFS**

- Add the Beta knowledge-space experience with local upload preview, connected-source management, document availability and metadata, retrieval history/research, and quality evaluation. Settings control app, Agent, and Service API access. Classic Knowledge remains supported alongside it. (#44165)
- Knowledge Retrieval v2 and Agent knowledge bindings use scoped capabilities; published Explore runs reuse published bindings without requiring ordinary viewers to reconfigure access. (#44165)
- Classic Dataset upgrades have durable checkpoints, availability/metadata reconciliation, retry protection, and recovery through Beat. Run the dedicated upgrade worker with the documented prefork pool and task limits; apply `b9d3f7a5c102` before restarting API/workers/Beat. Opting into the service does not automatically migrate all Classic datasets. (#44165)

**Portable App Packages**

- App exports now default to `.ifpkg`, bringing the application configuration and its supported resources into one portable package. Explicit YAML export remains available, and imports accept both formats from files or URLs. (#42066, #42189, #42425, #42552)
- Workflow and Chatflow packages include inline Agents, their Skills, and files from each node’s bound configuration snapshot. Imports recreate those Agents in the destination workspace and remap their resources. App icons, Site settings, and node plugin dependencies are included in the export flow. Missing resources are reported during import. (#42579, #42626, #42816, #42863, #42913)
- Agent exports can target a published version. Agent version menus now offer Restore, and pending draft saves finish before restoration so autosave cannot overwrite the restored configuration. Skill duplication and export use the latest saved draft content. (#42485, #42567, #42424, #42502)

**Nested Workflow Tools and Trace Drilldown**

- Called Workflow Tools run as child graphs under the workflow engine, with coordinated pause, resume, stop, and file outputs. Source graphs are captured before execution, so republishing a tool does not change an in-flight run, including calls inside loops and iterations. (#40277, #42820)
- Workflow, Chatflow, and history views can open a particular tool invocation and navigate its internal execution traces. Access to each source application is required before its details are returned. Human Input forms are tracked by execution identity, including repeated invocations of the same node. (#42819, #42821, #42822)
- Nested Agent logs and usage records retain their source workflow identity and their relationship to the outer run. **Nested usage and step totals can still be approximate, particularly after pauses or stops.** (#42824, #42820)

**Agent Output Routes and Streaming**

- Agent v2 nodes can select a workflow branch as part of completing their task. Enable Output Routes, define at least two branches and their selection conditions, and use the read-only `switch` output to inspect the chosen route. With routing disabled, the normal success outlet remains available. Routed nodes support stopping on error or taking a failure branch; node-level default-value handling is unavailable with routes enabled. (#42599)
- Plain Agent v2 nodes stream text as it is generated. Structured or routed results remain buffered, and nodes using default-value error handling stay buffered so the configured fallback can still replace a failed result. (#43986)

**Build and Manage Apps with OpenAPI and difyctl**

- `/openapi/v1` publishes a server operation catalog. difyctl discovers commands and their input fields from that catalog, provides searchable help, and follows server-provided next steps. Workflow and Chatflow authoring now covers app creation, DSL import/export, settings, environment variables, publishing, and version restoration. Draft hashes protect imports from overwriting concurrent edits. (#42487, #42608, #43067)
- The CLI includes a `difyctl` skill for agents building Dify apps. Install it with `difyctl install skills <dir>`. Device login supports `--no-wait` and `--resume`, and folder uploads send one multipart part per file. (#43819, #44356)
- Workspace owners can create resource access tokens bound to selected apps or knowledge bases. Tokens work with the supported Service API routes and app operations in difyctl; they do not grant workspace administration. The Settings entry is opt-in through `NEXT_PUBLIC_ENABLE_ACCESS_TOKEN`, which defaults to `false`. (#42293, #44422)

**Edit Agent Prompts from the Sandbox**

- `dify-agent config prompt pull [--to PATH]` and `push [PATH|-]` read or replace the raw system prompt, preserving UTF-8, whitespace, and mention markers. Empty text clears it. Only the current account’s writable build draft can be changed; later requests use the saved prompt. (#44561)

**Agent Execution Tracing**

- Agent apps and Workflow Agent v2 nodes can export their Agent, model, and tool execution trees through the existing tracing providers. Monitoring adds shared tracing configuration, delivery status, retry controls, and links to the trace belonging to the selected execution. Agents referenced by a Workflow inherit the caller’s tracing policy. (#44144, #44186)
- Application tracing is opt-in on both the API and Agent Backend. A separate deployment-wide OTLP trajectory exporter is also available, independently of system tracing. (#42651, #44144)
- Called Workflow Tools’ internal nodes are excluded from external exports because those exports have no viewer identity for source-app access checks. Agents inside those called tools are also excluded from the new execution-tree export for now; authorized Console drilldown remains available. (#42823, #44144)

**OpenShell Sandbox Backend and E2B Usage Collection**

- Agent execution can use a self-hosted NVIDIA OpenShell gateway with `DIFY_AGENT_RUNTIME_BACKEND=openshell`. Each Binding has its own sandbox, with authenticated shell access, Home Snapshots on an operator-managed shared volume, and an optional egress allowlist. OpenShell gateway 0.0.106 or newer and a compatible runtime image are required. (#41076)
- OpenShell lease release closes the connection but leaves the sandbox running. There is no automatic idle-stop or sandbox TTL; operators must manage those resources. Multi-tenant deployments require separate OpenShell workspaces and snapshot volumes per tenant. See the [OpenShell deployment guide](https://github.com/langgenius/dify/blob/laipz8200/release-1.18.0/dify-agent/docs/dify-agent/guide/openshell.md).
- Optional E2B usage collection records provider execution duration and resource sizes through Celery Beat and the `ops_trace` queue. Collection starts from a configured activation time and does not backfill earlier executions. Both the API and Agent Backend metering flags default to off. (#42554)

**Cloud Access Controls, Templates, and Archive Management**

- Reusable network access groups let supported Cloud deployments share IP rules across apps, with permission checks, effective-policy status, and trusted client-IP previews. Enforcement depends on the Cloud policy service and Gateway; this is not a standalone Community Edition firewall. (#41025, #44464)
- Cloud users can preview and try published Agent templates before importing them. Agent “Create from Template” is hidden in Community and Enterprise editions because its template data source is Cloud-only. (#42837, #44035)
- In Cloud Workflow Log Archives, workspace owners can permanently delete a selected month, with confirmation, progress, and retry. The action removes archived objects and prepared ZIP downloads; live workflow-run records are outside its scope. Failed deletion jobs now enter the retry policy instead of reporting success. (#44052, #44061, #44203)

</details>

<details>
<summary><strong>Improvements · performance, navigation, accessibility, and operations</strong></summary>

- **Knowledge performance:** dataset lists and indexing status use batched queries; segment imports avoid repeated position queries; retrieval and result post-processing reduce repeated lookups. (#42279, #42191, #42233, #42673, #43665)
- **Faster loading:** translations load by feature, workflow configuration panels load on demand, and chart, music, and SVG previews defer heavier work. Chat history no longer loads saved prompts that are not needed for display. (#42812, #42873, #42874, #42877, #42970, #42840, #42951, #44521)
- **Navigation and accessibility:** improved command discovery, keyboard navigation, focus return, dialog labels, and responsive layouts across Studio, workflow editing, Knowledge, Agent configuration, and workspace settings. Studio filters survive navigation, timezones are searchable, and workflow image export has a dedicated toolbar action. (#43133, #44330, #44429, #43944, #43662, #44220, #44378, #44492, #44535, #44539, #44548, #44564)
- **Floating controls:** menus, selectors, popovers, and tooltips now use Base UI positioning directly, with migrated alignment and offset settings throughout the console. (#44588)
- **Date, time, and icons:** redesigned date/time pickers, native scrolling for time options, and an updated icon picker with image cropping and self-hosted emoji assets. (#43090, #43723, #43007, #42469)
- **Localization:** Azerbaijani (`az-AZ`) joins the supported UI languages, with additional translation and right-to-left layout improvements. (#42291, #43808)
- **Developer tooling:** faster TypeScript checks through tsrs, plus typed Document and CustomizedSnippet models that preserve existing constructors and database defaults. (#44562, #36084, #40818)
- **Operations:** archive storage supports configurable S3 addressing style; the API image includes its spaCy model so startup does not need to download it; workflow generation logs identify tools omitted from the bounded fallback catalog. (#43066, #43601, #42596)

</details>

<details>
<summary><strong>Security enhancements</strong></summary>

- **Local sandbox authentication and isolation:** enabled Local runtimes reject blank authentication tokens. When path isolation is enabled, a Landlock setup failure aborts the job with exit code `125` before executing user code. (#44152)
- **Password hashing and plugin permissions:** optional `PASSWORD_PEPPER` adds a server-side secret to account password hashes. Plugin installation defaults to workspace owners and administrators when no explicit policy is stored; existing saved policies remain in effect. **Setting, changing, or removing the pepper invalidates existing password hashes.** See the upgrade guidance. ([ed772cfcf7](https://github.com/langgenius/dify/commit/ed772cfcf7))
- **Access boundaries:** exact CSRF whitelist matching, stronger dataset operation permissions, workspace-bound tracing service accounts, and protected owner/admin role handling. Re-inviting a removed member restores access without allowing the invitation to be reused after a later removal. (#42118, #42758, #44208, #43118, #43311, #43667)
- **Knowledge sharing defaults:** in RBAC-enabled deployments, new knowledge bases no longer automatically include every workspace member. (#42430)
- **Error and plugin handling:** API and webhook failures return fixed public messages instead of internal exception text, and plugin daemon requests use pinned package identifiers. (#43049, #44395, #44396)
- **Dependency updates:** bundled Weaviate moves from `1.39.2` to `1.39.13`, alongside Next.js and other dependency security updates. The Weaviate change stays within the 1.39 series; the staged minor-version migration described for 1.17.1 still matters when upgrading from older installations. (#44508, #44127, #44148, #44524)
- The standalone Agent certifi bundle is updated to `2026.10.19`; rebuild Agent images to consume the updated trust bundle. (#44462)
- **NLTK:** NLTK is updated to 3.10.4 for upstream path-handling hardening; this change alone is not a claim that every advisory is resolved. (#44581)

</details>

<details>
<summary><strong>Bug fixes · workflows, Agents, Knowledge, APIs, and the web app</strong></summary>

**Workflow and Scheduling**

- Preserve LLM prompt/model changes during collaboration and synchronize imported graphs correctly. Code generation retains input bindings for surviving parameter names, understands multiline/destructured signatures and Python parameters containing commas, and preserves literal `{{inputs}}` text in user code. (#42124, #42817, #44075, #44046, #44337, #43438)
- Remove unsupported Chatflow memory settings when pasting into a Workflow and when loading/saving Workflow graphs in the editor. Existing published versions or API-only flows are not rewritten by this editor fix. (#43597, #43752)
- Preserve configured fallback values when Code node outputs are removed, added, or renamed; require confirmation before saving an empty canvas; and retain in-run tool-file access for later nodes. (#42678, #43668, #41300)
- Persist task ownership and stop intent so late writes or a concurrent resume cannot revive a stopped workflow. Failed asynchronous trigger dispatches are recorded as failed in trigger logs, and elapsed time remains consistent across resumptions. (#40277, #43009, #44161)
- Scheduled fire-and-forget dispatch no longer creates a Redis result-backend drainer for every task group, preventing accumulating idle result connections. The same correction covers trigger refresh and pipeline dispatch. (#44551)
- Editing a draft no longer removes published trigger subscriptions. This prevents new damage but does not rebuild relationships already lost before the upgrade. (#44068)
- Save the timezone shown on new schedule nodes, handle daylight-saving transitions in next-run calculation and offset labels, and correct hourly previews at month boundaries. (#43532, #43357, #43627, #43925)

**Agents and Skills**

- Conversations can continue after cancelled tool calls; replayed tool-call IDs remain stable; parallel tool results stay attached to their own thoughts; and initial event-write failures finalize runs instead of leaving them running. Redis event replay also works with Redis 6. (#41846, #43796, #43843, #43959, #44420)
- E2B uses SDK 2.55.1 with safer retry behavior: resource creation is not replayed after an ambiguous 502, while safe lifecycle operations retain transient-failure recovery. Pauses and Home Snapshots explicitly request full-memory mode. (#43930)
- E2B sandbox acquisition checks that Home and Workspace resources exist, and confirmed-missing Enterprise Home Snapshots count as successful deletion. (#44014, #44085)
- Skill attachments preserve formatted DOCX text, RTF Unicode fallback lengths and binary boundaries, and PPTX presentation order. (#43718, #43789, #43893)
- RTF extraction also combines UTF-16 surrogate pairs before truncation and replaces unmatched surrogates, avoiding UTF-8 encoding failures. (#44565)

**Knowledge and Retrieval**

- Preserve CSV cell content, Notion mentions/equations, and newlines in recursive splitting. URL imports infer useful file extensions from content type, and unsupported pipeline file types return an explicit error. Re-import affected documents to regenerate content already indexed incorrectly. (#42159, #42171, #44179, #42364, #44012)
- Message citations retain document metadata. Built-in document dates use consistent UTC epoch values while preserving fractional seconds; existing mixed-format metadata is not automatically rewritten. (#41861, #44218)
- Re-enabling segments restores their vectors and refuses segments that have not completed indexing. Hybrid Search retains the reranking setting when saved from either dataset settings or app configuration. (#43865, #44017, #42563)
- Dataset deletion uses bounded cleanup steps with retry-safe progress. Qdrant balances results across keywords, TiDB-on-Qdrant filtering is corrected, Vastbase supports its graph index/BM25 paths, and OceanBase memory-limit discovery no longer depends on row order. (#38519, #44352, #44339, #42922, #42846)

**APIs, MCP, and SDKs**

- List endpoints calculate `has_more` from the page size actually served, and message pagination preserves records with tied timestamps. MySQL-specific datasource credential and installed-app ordering issues are corrected. (#41876, #42323, #42531, #44023, #44039, #44029)
- MCP discovery follows all tool pages with bounded requests, mixed-type parameters preserve list values, failed SSE connections close before HTTP fallback, and unsupported methods return protocol errors. MCP protocol support includes `2025-11-25`. (#43842, #44182, #42761, #44197, #44066)
- The Node.js SDK handles workflow text chunks and message replacement, propagates streamed API errors, preserves SSE whitespace, and replaces headers case-insensitively. Write requests avoid automatic replay, and reused upload forms retain the explicitly supplied user. (#44177, #44199, #44083, #44090, #43079, #44120)
- difyctl preserves existing files if Windows replacement fails, surfaces SSE read failures, serializes token/config updates, and accepts BOM-prefixed JSON inputs. The PHP client uses the correct conversation rename endpoint and preserves custom API base-path prefixes with or without a trailing slash. (#43974, #43943, #44329, #44375, #44386, #43075, #44569)

**Web App and Workspace**

- Numeric zero and JSON object inputs keep their intended values. Browser-autofilled login credentials submit correctly, SSO failures are surfaced, and logout clears session state. (#43243, #42431, #44474, #43076, #43055)
- Log annotations apply to the displayed regenerated answer. Feedback drafts remain available when submission fails, and attachment previews keep their resources for the lifetime of the dialog. (#43238, #43520, #43521)
- Existing knowledge-base Add file pages retain their Knowledge sidebar in both standard and pipeline flows. (#44552)
- Knowledge metadata panels remain scrollable without covering their controls, dataset tag actions do not open the card, and Marketplace details open correctly for self-hosted editions. (#43621, #42269, #42576)
- Email normalization expands to Microsoft, Apple, and Proton addresses while retaining original stored email addresses; case-fallback account lookup works in both directions. (#42112, #42541)

</details>

<details>
<summary><strong>Environment variables · required changes, optional settings, and removals</strong></summary>

**Required or Changed Behavior**

| Setting | Change in 1.18.0 |
| --- | --- |
| `DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN` | Required and nonblank for an enabled Local runtime. For Compose, set it in `docker/.env`, the invoking shell, or `--env-file` so Agent Backend and shellctl receive the same secret. Setting it only in a service env file is insufficient. |
| `SHELLCTL_ENABLE_PATH_ISOLATION` | When enabled, Landlock errors stop execution instead of allowing the script to continue. |
| `PASSWORD_PEPPER` | New, empty by default. Leave it empty on an existing unpeppered installation to preserve logins. For deployments that use it, keep the same secret across API/worker instances and retain it with backups. In Compose, keep it in `docker/envs/core-services/api.env` so unrelated services do not receive it. |
| `GRAPH_ENGINE_MAX_WORKERS` | Now the fixed worker count per engine instance; default `10`. The old minimum-worker and autoscaling thresholds are removed. |
| `RESPECT_XFORWARD_HEADERS_ENABLED` | Standalone API default remains `false`; bundled Compose explicitly enables it for API/WebSocket services behind Nginx. Settings supplied only through `shared.env` are overridden. Move an intentional override to `docker/.env`, the invoking shell, or a Compose override. |
| `OAUTH_TTL_DAYS` | Now read through application settings at startup, including `api/.env`. Default remains `14`, with the existing 1–365 day bounds. |

**New Optional Settings**

| Area | Settings and defaults |
| --- | --- |
| Application Agent tracing | API: `OPS_AGENT_TRACE_ENABLED=false`. Agent Backend: `DIFY_AGENT_APPLICATION_TRACING_ENABLED=false`. Application policy and provider configuration are also required. `ENABLE_APPLICATION_TRACE_RECONCILE_TASK=true` controls scheduled reconciliation. |
| Deployment-wide trajectories | `DIFY_AGENT_TRAJECTORY_ENABLED=false`, `DIFY_AGENT_TRAJECTORY_OTLP_TRACES_ENDPOINT`, `DIFY_AGENT_TRAJECTORY_OTLP_HEADERS`, and `DIFY_AGENT_TRAJECTORY_SERVICE_NAME`; content capture defaults to off and trace context defaults to `isolated`. |
| E2B usage | API: `AGENT_SANDBOX_METERING_ENABLED=false`, `AGENT_SANDBOX_METERING_PROJECT_ID`, `AGENT_SANDBOX_METERING_START_AT`, `AGENT_SANDBOX_METERING_INTERVAL_SECONDS=60`. Backend: `DIFY_AGENT_SANDBOX_METERING_ENABLED=false`, `DIFY_AGENT_E2B_PROJECT_ID`, plus overlap/full-scan/page limits. |
| OpenShell | Select `DIFY_AGENT_RUNTIME_BACKEND=openshell`; configure the `DIFY_AGENT_OPENSHELL_*` gateway, credentials, image, driver/shared-volume, shell token, and optional egress settings in the Agent service env file. |
| Package bounds | `SKILL_PACKAGE_MAX_UNCOMPRESSED_BYTES=209715200`, `SKILL_PACKAGE_MAX_ENTRIES=5000`, `SKILL_PACKAGE_MAX_SKILL_MD_BYTES=1048576`; `AGENT_PACKAGE_MAX_BYTES=536870912`, `AGENT_PACKAGE_MAX_MANIFEST_BYTES=5242880`, `AGENT_PACKAGE_MAX_ENTRIES=5000`. Ordinary app packages retain the 10 MiB DSL limit. |
| KnowledgeFS | `KNOWLEDGE_FS_ENABLED=false` by default; configure `KNOWLEDGE_FS_BASE_URL`, Capability v2 signing/verification, and the lifecycle/cutover rollout gates through the dedicated API and KnowledgeFS service env files. `KNOWLEDGE_FS_TIMEOUT_SECONDS=10`. Do not enable traffic until the separate service is ready. |
| Access-token UI | `NEXT_PUBLIC_ENABLE_ACCESS_TOKEN=false` controls the owner-only Settings entry. |
| Archive storage | `ARCHIVE_STORAGE_ADDRESS_STYLE=path` supports `path`, `virtual`, and `auto` addressing for S3-compatible archive storage. |
| Cloud network policies | `NETWORK_ACCESS_API_URL`, `NETWORK_ACCESS_TRUSTED_PROXY_CIDRS`, `WEBAPP_ACCESS_PREFLIGHT_URL`, and `WEBAPP_ACCESS_PREFLIGHT_PROXY_SECRET`; require the corresponding trusted ingress and Cloud Gateway integration. The preflight secret is server-only. |

**Removed Settings and Features**

- `GRAPH_ENGINE_MIN_WORKERS`, `GRAPH_ENGINE_SCALE_UP_THRESHOLD`, and `GRAPH_ENGINE_SCALE_DOWN_IDLE_TIME` are no longer used.
- The older KnowledgeFS implementation removed in #44163 is superseded by #44165. Do not reuse its `KNOWLEDGE_FS_JWT_SECRET` or SSE timeout configuration; the new integration uses Capability v2 signing and public verification material. `KNOWLEDGE_FS_ENABLED`, `KNOWLEDGE_FS_BASE_URL`, and `KNOWLEDGE_FS_TIMEOUT_SECONDS` remain supported by the new configuration.
- The Console feedback export endpoint, `GET /console/api/apps/{app_id}/feedbacks/export`, is removed. Update integrations that called it directly. (#43751)
- `UV_CACHE_DIR` no longer has a baked-in shared default. Keep any deliberate plugin-daemon cache override explicit. (#42481)

Optional/provider-specific settings are documented in the matching files under [docker/envs](https://github.com/langgenius/dify/tree/laipz8200/release-1.18.0/docker/envs). Preserve existing service env files when upgrading.

</details>

<details>
<summary><strong>Database migrations</strong></summary>

Upgrading from 1.17.1 applies 22 schema/data migration revisions and two migration-head merges, ending at `b9d3f7a5c102`:

| Revision | Purpose |
| --- | --- |
| `d8e4a6b1c902` | Backfill normalized email values for the additional providers without merging accounts or changing their original addresses. |
| `e7b2a9c4d601` | Add Agent sandbox usage events and execution accounting. |
| `a8c9e2f1b704` | Add resource access tokens and resource bindings. |
| `f1d3c5b7a902` | Add workflow archive deletion status. |
| `c6f4a90d8b31` | Add nullable workflow task IDs, stop intent, and the task-ID index. |
| `a8c3e7f4b912` | Add immediate caller workflow/node identifiers to nested node execution records. |
| `a17c2980f3e6` | Add durable application trace runs, invocations, and delivery batches. |
| `f7e2c9a6d481`, `d6b9e2f1a407` | Merge migration branches; no additional schema changes. |
| `a4e7c2f91b30` | Add independent KnowledgeFS control-plane tables. |
| `b7f2a9d41c60` | Add KnowledgeFS workspace cutover ledger and migration evidence. |
| `c8e31b7d52a4` | Add guarded cleanup, cutover evidence, and capability issuance reservations. |
| `d4f6e8a1c305` | Add durable KnowledgeFS remote freeze evidence. |
| `e5a7c9b2d416` | Add global KnowledgeFS cleanup completion evidence. |
| `7c1e9a4b2d60` | Add KnowledgeFS workspace staged uploads. |
| `9d4e6f8a1b2c` | Add KnowledgeFS space tag bindings. |
| `4f8b2c7d9e10` | Add KnowledgeFS icon background. |
| `f3a8c1d7e920` | Add KnowledgeFS legacy Dataset upgrade jobs. |
| `e6b4a2c9d731` | Limit active KnowledgeFS legacy Dataset upgrades. |
| `9a4e7d1c2b60` | Add resource_type to dataset_api_token_bindings. |
| `b6e2c4d8f1a0` | Allow namespace capability audits before a KnowledgeFS control space exists. |
| `3edd6cd27f54` | Limit active KnowledgeFS legacy Dataset upgrades on MySQL. |
| `a8c2e6f4b901` | Track KnowledgeFS upgrade document availability independently of metadata. |
| `b9d3f7a5c102` | Persist delivery and execution leases for upgrade document reconciliation. |

The PostgreSQL task-ID index is created concurrently, but still scans `workflow_runs` and consumes I/O; adding the columns requires a brief schema lock. Existing task IDs need no global backfill. Apply the complete migration chain before starting the new workers. KnowledgeFS has a separate engine database and migration process. A downgrade that would leave KnowledgeFS-only API keys unrestricted is blocked until those keys are revoked through the API; keep backups for rollback.

</details>

**Full Changelog**: https://github.com/langgenius/dify/compare/1.17.1...1.18.0

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.18.0` · 2026-10-23 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.18.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
