---
title: "dify 1.13.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.13.0"
version: "1.13.0"
published: "2026-02-11"
type: "minor"
lang: "en"
summary: "We are introducing the Human Input node, a major update that transforms how AI and humans collaborate within Dify workflows."
---

# dify 1.13.0

## 🚀 New Features

### Human-in-the-Loop (HITL)

We are introducing the **Human Input** node, a major update that transforms how AI and humans 
collaborate within Dify workflows.

**Background**

Previously, workflows were binary: either fully automated or fully manual. This created a "trust gap" in 
high-stakes scenarios where AI speed is needed but human judgment is essential. With HITL, we are making h
uman oversight a native part of the workflow architecture, allowing you to embed 
review steps directly into the execution graph.

**Key Capabilities**

- **Native Workflow Pausing:** Insert a "Human Input" node to suspend workflow execution at critical decision points.
- **Review & Edit:** The node generates a UI where humans can review AI outputs and modify variables (e.g., editing a draft or correcting data) before the process continues.
- **Action-Based Routing:** Configure custom buttons (like "Approve," "Reject," or "Escalate") that determine 
  the subsequent path of the workflow.
- **Flexible Delivery Methods:** Human input forms can be delivered via **Webapp** or **Email**. In cloud environments, Email delivery availability may depend on plan/feature settings.


## 🛠 Architecture Updates

To support the stateful pause/resume mechanism required by HITL and provide event‑subscription APIs, we refactored the execution engine: **Workflow‑based streaming executions and Advanced Chat executions now run in Celery workers**, while non‑streaming **WORKFLOW** runs still execute in the API process.
All pause/resume paths (e.g., HITL) are resumed via Celery, and events are streamed back through Redis Pub/Sub.

**For Large Deployments & Self-Hosted Users:**

We have introduced a new Celery queue named `workflow_based_app_execution`. While standard setups will work out of the box, high-throughput environments should consider the following optimizations to ensure stability and performance:

1.  **Scale Workers:** Adjust the number of workers consuming the `workflow_based_app_execution` queue based on your specific workload.
2.  **Dedicated Redis (Optional):** For large-scale deployments, we recommend configuring the new `PUBSUB_REDIS_URL` environment variable to point to a dedicated Redis instance. Using **Redis Cluster mode with Sharded PubSub** is strongly advised to ensure horizontal scalability.

## ⚠️ Important Upgrade Note

**New Celery Queue Required: `workflow_based_app_execution`**

Please ensure your deployment configuration (Docker Compose, Helm Chart, etc.) includes workers listening to the new **`workflow_based_app_execution`** queue.  
This queue is required for workflow‑based streaming executions and all resume flows (e.g., HITL); otherwise, streaming executions and resume tasks will not be processed.

## 🔧 Operational Note

**Additional Celery Queue: `api_token`**

If `ENABLE_API_TOKEN_LAST_USED_UPDATE_TASK=true`, ensure your deployment also has workers listening to **`api_token`**.
This queue is used by the scheduled batch update task for API token `last_used_at` timestamps.

## ⚙️ Configuration Changes

We have introduced several new environment variables to support the architectural changes. **Large deployments should pay special attention to the PubSub Redis configurations** to ensure scalability.

*   **`PUBSUB_REDIS_URL`** (Critical): Specifies the Redis URL used for PubSub communication between the API and Celery workers. If left empty, it defaults to the standard `REDIS_*` configuration.
*   **`PUBSUB_REDIS_CHANNEL_TYPE`** (Critical): Defines the channel type for streaming events. Options are `pubsub` (default) or `sharded`. **We highly recommend using `sharded` for high-throughput environments.**
*   **`PUBSUB_REDIS_USE_CLUSTERS`** (Critical): Set to `true` to enable Redis cluster mode for PubSub. Combined with sharded PubSub, this is essential for horizontal scaling.

**Other Additions:**

*   `WEB_FORM_SUBMIT_RATE_LIMIT_MAX_ATTEMPTS`: Maximum number of web form submissions allowed per IP within the rate limit window (Default: `30`).
*   `WEB_FORM_SUBMIT_RATE_LIMIT_WINDOW_SECONDS`: Time window in seconds for web form submission rate limiting (Default: `60`).
*   `HUMAN_INPUT_GLOBAL_TIMEOUT_SECONDS`: Maximum seconds a workflow run can stay paused waiting for human input before global timeout (Default: `604800`, 7 days).
*   `ENABLE_HUMAN_INPUT_TIMEOUT_TASK`: Enables the background task that checks for expired human input requests (Default: `true`).
*   `HUMAN_INPUT_TIMEOUT_TASK_INTERVAL`: Sets the interval (in minutes) for the timeout check task (Default: `1`).
*   `ENABLE_API_TOKEN_LAST_USED_UPDATE_TASK`: Enables the periodic background task that batch-updates API token `last_used_at` timestamps (Default: `true`).
*   `API_TOKEN_LAST_USED_UPDATE_INTERVAL`: Sets the interval (in minutes) for batch-updating API token `last_used_at` timestamps (Default: `30`).
*   `SANDBOX_EXPIRED_RECORDS_CLEAN_BATCH_MAX_INTERVAL`: Maximum random delay (in milliseconds) between retention cleanup batches to reduce DB pressure spikes (Default: `200`).

## 📌 Additional Changelog Highlights

### Reliability & Correctness

- Added migration-time deduplication and a unique constraint for tenant default models to prevent duplicate default model records.
- Fixed a tools-deletion edge case caused by provider ID type mismatch.
- Fixed a FastOpenAPI integration regression where authenticated users could be resolved as anonymous in remote file APIs.
- Fixed message event type detection for file-related responses, and hid the workspace invite action for non-manager users.

### Performance & Scalability

- Reduced backend load and console latency with plugin manifest pre-caching and `AppListApi` query optimizations.
- Improved large-data task stability with split DB sessions, batched cleanup execution, index tuning, and configurable inter-batch throttling for retention cleanup jobs.

### API & Platform Capabilities

- Added a Service API endpoint for end-user lookup with tenant/app scope enforcement.
- Improved workflow run history refresh behavior during run state transitions.
- Enhanced MCP Tool integration by extracting and reporting usage metadata (for example, token/cost fields) from MCP responses.

### Security

- Removed dynamic `new Function` evaluation from ECharts parsing and now return explicit parsing errors for unsupported chart code.

### Localization

- Added Dutch (`nl-NL`) language support across backend language mapping and web localization resources.

---

## Upgrade Guide

> [!IMPORTANT]
> If you use custom `CELERY_QUEUES`, make sure `workflow_based_app_execution` is included.  
> If `ENABLE_API_TOKEN_LAST_USED_UPDATE_TASK=true`, also include `api_token`.
> 
> For background and details, see **⚠️ Important Upgrade Note** and **🔧 Operational Note** above.

### Docker Compose Deployments

1. Back up your customized docker-compose YAML file (optional)

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   ```

2. Get the latest code from the main branch

   ```bash
   git checkout main
   git pull origin main
   ```

3. Stop the service. Please execute in the docker directory

   ```bash
   docker compose down
   ```

4. Back up data

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5. Upgrade services

   ```bash
   docker compose up -d
   ```

> [!NOTE]
> 
> If you encounter errors like below
> 
> ```bash
> 2025/11/26 11:37:57 /app/internal/db/pg/pg.go:30
> [error] failed to initialize database, got error failed to connect to `host=db_postgres user=postgres database=dify_plugin`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> 
> 2025/11/26 11:37:57 /app/internal/db/pg/pg.go:34
> [error] failed to initialize database, got error failed to connect to `host=db_postgres user=postgres database=postgres`: hostname > resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> 2025/11/26 11:37:57 init.go:99: [PANIC]failed to init dify plugin db: failed to connect to `host=db_postgres user=postgres database=postgres`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> panic: [PANIC]failed to init dify plugin db: failed to connect to `host=db_postgres user=postgres database=postgres`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> ```
> Please use the following command instead. For details, please read this https://github.com/langgenius/dify/issues/28706
>    ```bash
>    docker compose --profile postgresql up -d
>    ```

### Source Code Deployments

1. Stop the API server, Worker, and Web frontend Server.

2. Get the latest code from the release branch:

   ```bash
   git checkout 1.13.0
   ```

3. Update Python dependencies:

   ```bash
   cd api
   uv sync
   ```

4. Then, let's run the migration script:

   ```bash
   uv run flask db upgrade
   ```

5. Finally, run the API server, Worker, and Web frontend Server again.

---

## What's Changed
* refactor(api): replace reqparse with Pydantic models in trial.py by @Sean-Kenneth-Doherty in https://github.com/langgenius/dify/pull/31789
* refactor: plugin detail panel components for better maintainability and code organization. by @CodingOnStar in https://github.com/langgenius/dify/pull/31870
* fix: remove api reference doc link en prefix by @hyoban in https://github.com/langgenius/dify/pull/31910
* fix: missing import console_ns by @hjlarry in https://github.com/langgenius/dify/pull/31916
* fix: fix mcp server status is not right by @fatelei in https://github.com/langgenius/dify/pull/31826
* test: try fix test, clear test log in CI by @hyoban in https://github.com/langgenius/dify/pull/31912
* fix: fix mcp output schema is union type frontend crash by @fatelei in https://github.com/langgenius/dify/pull/31779
* fix: auto summary env by @zxhlyh in https://github.com/langgenius/dify/pull/31930
* refactor(datasets): extract hooks and components with comprehensive tests by @CodingOnStar in https://github.com/langgenius/dify/pull/31707
* fix: include locale in appList query key for localization support inuseExploreAppList by @CodingOnStar in https://github.com/langgenius/dify/pull/31921
* chore: assign code owners for test directories by @laipz8200 in https://github.com/langgenius/dify/pull/31940
* refactor(web): extract complex components into modular structure with comprehensive tests by @CodingOnStar in https://github.com/langgenius/dify/pull/31729
* fix: fix delete_draft_variables_batch cycle forever by @fatelei in https://github.com/langgenius/dify/pull/31934
* chore: bump version in docker-compose and package manager to 1.12.1 by @QuantumGhost in https://github.com/langgenius/dify/pull/31947
* chore: update CODEOWNERS to specify test file patterns for base components by @CodingOnStar in https://github.com/langgenius/dify/pull/31941
* feat: use latest hash to sync draft by @fatelei in https://github.com/langgenius/dify/pull/31924
* fix: remove staleTime/gcTime overrides from trigger query hooks and use orpc contract by @lyzno1 in https://github.com/langgenius/dify/pull/31863
* feat: account delete cleanup by @GareArc in https://github.com/langgenius/dify/pull/31519
* test: fix test by @hyoban in https://github.com/langgenius/dify/pull/31975
* fix: fix miss use db.session by @fatelei in https://github.com/langgenius/dify/pull/31971
* chore: sticky the applist header in explore page by @iamjoel in https://github.com/langgenius/dify/pull/31967
* fix(web): add rewrite rule to fix Serwist precaching 404 errors by @majiayu000 in https://github.com/langgenius/dify/pull/31770
* fix: fix uuid_generate_v4 only used in postgresql by @fatelei in https://github.com/langgenius/dify/pull/31304
* chore: migrate to eslint-better-tailwind by @hyoban in https://github.com/langgenius/dify/pull/31969
* feat: pre-cache all the plugin manifests before checking updates by @Stream29 in https://github.com/langgenius/dify/pull/31942
* perf(api): Optimize the response time of AppListApi endpoint by @QuantumGhost in https://github.com/langgenius/dify/pull/31999
* chore: Remove redundant double space in variable type description (core/variables/variables.py) by @WH-2099 in https://github.com/langgenius/dify/pull/32002
* refactor: strip external imports in workflow template transform by @WH-2099 in https://github.com/langgenius/dify/pull/32017
* chore: remove .codex/skills directory by @longway-code in https://github.com/langgenius/dify/pull/32022
* fix: fix agent node tool type is not right by @fatelei in https://github.com/langgenius/dify/pull/32008
* fix: make `flask upgrade-db` fail on error by @longbingljw in https://github.com/langgenius/dify/pull/32024
* chore: update HITL auto deploy workflow by @QuantumGhost in https://github.com/langgenius/dify/pull/32040
* fix: fix tool type is miss by @fatelei in https://github.com/langgenius/dify/pull/32042
* perf: use batch delete method instead of single delete by @QuantumGhost in https://github.com/langgenius/dify/pull/32036
* fix(api): return proper HTTP 204 status code in DELETE endpoints by @NeatGuyCoding in https://github.com/langgenius/dify/pull/32012
* test: only remove text coverage in CI by @hyoban in https://github.com/langgenius/dify/pull/32043
* chore: update deploy branches for deploy-hitl.yaml by @QuantumGhost in https://github.com/langgenius/dify/pull/32051
* fix: redis for api token by @zyssyz123 in https://github.com/langgenius/dify/pull/31861
* fix: batch delete document db session block by @JohnJyong in https://github.com/langgenius/dify/pull/32062
* fix: remove unexpected scrollbar in KB Retrieval settings by @crazywoola in https://github.com/langgenius/dify/pull/32082
* refactor: remove unnecessary type: async_workflow_service.py by @kongdayan in https://github.com/langgenius/dify/pull/32081
* refactor: partition Celery task sessions into smaller, discrete execu… by @fatelei in https://github.com/langgenius/dify/pull/32085
* feat: extract mcp tool usage by @fatelei in https://github.com/langgenius/dify/pull/31802
* fix: search model provider list by @zxhlyh in https://github.com/langgenius/dify/pull/32106
* refactor: document_indexing_update_task split database session by @fatelei in https://github.com/langgenius/dify/pull/32105
* test: stable test by @hyoban in https://github.com/langgenius/dify/pull/32108
* refactor: decouple database operations from knowledge retrieval nodes by @fatelei in https://github.com/langgenius/dify/pull/31981
* feat: Service API - add end-user lookup endpoint by @BeautyyuYanli in https://github.com/langgenius/dify/pull/32015
* fix: pass user timezone from app context to the date picker component. by @ZeroZ-lab in https://github.com/langgenius/dify/pull/31831
* fix: fix trigger output schema miss by @fatelei in https://github.com/langgenius/dify/pull/32116
* feat: Human Input Node by @QuantumGhost in https://github.com/langgenius/dify/pull/32060
* chore(api): update launch.json.template by @QuantumGhost in https://github.com/langgenius/dify/pull/32124
* style: update banner item styles and enhance dark/light theme variables by @Yessenia-d in https://github.com/langgenius/dify/pull/32111
* chore: fix type for useTranslation in `#i18n` by @hyoban in https://github.com/langgenius/dify/pull/32134
* refactor: document_indexing_sync_task split db session by @fatelei in https://github.com/langgenius/dify/pull/32129
* fix(api): register knowledge pipeline service API routes by @tokezooo in https://github.com/langgenius/dify/pull/32097
* fix(api): serialize pipeline file-upload created_at by @tokezooo in https://github.com/langgenius/dify/pull/32098
* chore: detect utilities in css by @hyoban in https://github.com/langgenius/dify/pull/32143
* chore: introduce css icons by @hyoban in https://github.com/langgenius/dify/pull/32004
* refactor(api): tighten OTel decorator typing by @shuv-amp in https://github.com/langgenius/dify/pull/32163
* fix(api): clean up orphaned pending accounts on member removal by @eureka928 in https://github.com/langgenius/dify/pull/32151
* fix: When the user is a non-sandbox user and has a paid balance, the … by @zyssyz123 in https://github.com/langgenius/dify/pull/32173
* refactor: import component css in globals.css by @hyoban in https://github.com/langgenius/dify/pull/32180
* fix(api): include file marker for workflow tool file outputs by @OiPunk in https://github.com/langgenius/dify/pull/32114
* fix(web): fill workflow tool output descriptions from schema by @OiPunk in https://github.com/langgenius/dify/pull/32117
* fix: replace sendBeacon with fetch keepalive for autosave on page close by @veeceey in https://github.com/langgenius/dify/pull/32088
* test: add comprehensive tests for Human Input Node functionality by @WTW0313 in https://github.com/langgenius/dify/pull/32191
* chore(api): update launch.json.example to include new workflow_based_app_execution. by @Nov1c444 in https://github.com/langgenius/dify/pull/32184
* refactor: extract sub-components and custom hooks from UpdateDSLModal and Metadata components by @CodingOnStar in https://github.com/langgenius/dify/pull/32045
* fix: fix no dify home directory lead permission error by @fatelei in https://github.com/langgenius/dify/pull/32169
* refactor: type safe env, update to zod v4 by @hyoban in https://github.com/langgenius/dify/pull/32035
* feat: enhancement celery configuration by @ruanimal in https://github.com/langgenius/dify/pull/32145
* fix(console): keep conversation updated_at unchanged when marking read by @OiPunk in https://github.com/langgenius/dify/pull/32133
* chore: allow draft run single node without connect to other node by @hjlarry in https://github.com/langgenius/dify/pull/31977
* chore(deps): bump axios from 1.13.2 to 1.13.5 in /sdks/nodejs-client by @dependabot[bot] in https://github.com/langgenius/dify/pull/32199
* fix: Fix the display of state icon of base node by @WTW0313 in https://github.com/langgenius/dify/pull/32208
* chore(api): consume tasks in `workflow_based_app_execution` queue in start-worker script by @QuantumGhost in https://github.com/langgenius/dify/pull/32214
* fix(api): excessive high CPU usage caused by RedisClientWrapper by @QuantumGhost in https://github.com/langgenius/dify/pull/32212
* fix: fix all tools is deleted by @fatelei in https://github.com/langgenius/dify/pull/32207
* fix: add unique constraint to tenant_default_models to prevent duplic… by @qiaofenlin in https://github.com/langgenius/dify/pull/31221
* feat: support nl-NL language by @fatelei in https://github.com/langgenius/dify/pull/32216
* fix: fix get_message_event_type return wrong message type by @fatelei in https://github.com/langgenius/dify/pull/32019
* docs(api): mark SetupApi as unauthenticated by design by @41tair in https://github.com/langgenius/dify/pull/32224
* feat(workflow): enhance workflow run history management and UI updates by @WTW0313 in https://github.com/langgenius/dify/pull/32230
* chore(deps): bump cryptography from 46.0.3 to 46.0.5 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32218
* chore(deps): bump google-api-python-client from 2.90.0 to 2.189.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32102
* feat(tests): add mock for useInvalidateWorkflowRunHistory in pipeline run tests by @WTW0313 in https://github.com/langgenius/dify/pull/32234
* fix: fix use fastopenapi lead user is anonymouse by @fatelei in https://github.com/langgenius/dify/pull/32236
* fix: update index to optimize message clean performance by @hj24 in https://github.com/langgenius/dify/pull/32238
* fix: hide invite button if current user is not workspace manager by @douxc in https://github.com/langgenius/dify/pull/31744
* chore: bump version to 1.13.0 by @QuantumGhost in https://github.com/langgenius/dify/pull/32147

## New Contributors
* @Sean-Kenneth-Doherty made their first contribution in https://github.com/langgenius/dify/pull/31789
* @WH-2099 made their first contribution in https://github.com/langgenius/dify/pull/32002
* @longway-code made their first contribution in https://github.com/langgenius/dify/pull/32022
* @kongdayan made their first contribution in https://github.com/langgenius/dify/pull/32081
* @tokezooo made their first contribution in https://github.com/langgenius/dify/pull/32097
* @shuv-amp made their first contribution in https://github.com/langgenius/dify/pull/32163
* @OiPunk made their first contribution in https://github.com/langgenius/dify/pull/32114
* @veeceey made their first contribution in https://github.com/langgenius/dify/pull/32088

**Full Changelog**: https://github.com/langgenius/dify/compare/1.12.1...1.13.0

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.13.0` · 2026-02-11 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
