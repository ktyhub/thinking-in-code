---
title: "dify 1.14.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.14.0"
published: "2026-04-29"
type: "minor"
lang: "en"
---

# dify 1.14.0

## 🚀 What's New in v1.14.0?

### Collaboration
<img width="2632" height="1190" alt="img_v3_02117_67a67218-1ae5-4d68-a45b-3ada592f87fg" src="https://github.com/user-attachments/assets/1d4a3660-8a6a-4b29-9766-4d5b5fd9a51b" />

Collaboration allows workspace members to edit the same workflow together, with synced graph updates, online presence, and shared visibility into who is working where.

On self-hosted deployments, collaboration is turned off by default. Enable it by setting:

```
ENABLE_COLLABORATION_MODE = true
SERVER_WORKER_CLASS = geventwebsocket.gunicorn.workers.GeventWebSocketWorker
NEXT_PUBLIC_SOCKET_URL = your deployment’s WebSocket URL (e.g., wss://dify.example.com)
```

For more details, see [Full Documentation](https://docs.dify.ai/en/use-dify/build/workflow-collaboration)

### Human-in-the-loop (HITL)

- **Service API for HITL** — programmatic support for human-in-the-loop flows alongside existing console behavior.

### MCP and plugins

- **MCP tool metadata** — refresh after updates so the UI stays in sync.
- **MCP server URL** — fix double `/v1` that could break OAuth and authorization (404).
- **MCP OAuth discovery** — handle malformed JSON safely.
- **MCP schema publishing** — map `checkbox` and `json_object` types correctly.
- **Plugins** — auto-upgrade strategy persistence, local installer and file-input behavior, tenant scoping for inner API end-user lookup.

### Marketplace and OAuth

- **Marketplace and OAuth** — targeted fixes for marketplace flows and OAuth sign-in (including edge cases such as null email on GitHub OAuth).

### UI kit and front-end platform

- **`@langgenius/dify-ui`** — shared primitives (for example **PreviewCard**, **Meter**), design tokens, and broad migration from ad-hoc `web/base/ui` toward the package.
- **Accessibility** — date and time pickers, auto-update strategy picker, scrollbars in plugin and model selectors, and related polish.
- **Goto Anything** — recent items, `/go` command, deeper app sub-sections; fix for **Cmd+K** (removed problematic dynamic import).
- **Prompt editor** — slash-triggered **variable filtering**; keyboard **up/down** in variable lists.
- **Follow-up questions** — improved settings and token limits for suggested questions.
- **Modals** — ApiKey, provider config, and others refactored toward a shared **Dialog** pattern with tests.

### Observability and analytics
- **Langfuse** — optional **time-to-first-token (TTFT)** reporting.
- **Explore** — banner impression tracking; app preview event tracking on cards.

### Billing and quotas

- **Quota v3** integration in the product stack.
- **Billing UI** — Meter-based usage presentation; more resilient cleanup when billing APIs fail.
- **File uploader** — billing-aware behavior and copy updates.

### Data, RAG, and knowledge

- **Summary index and Weaviate** — compatibility fixes when using the summary index with Weaviate.
- **Vector projection** — include `is_summary` and `original_chunk_id` in default projection where relevant.
- **External and bound datasets** — stronger tenant checks on knowledge APIs.

### Infrastructure and operations

- **Docker Compose** — **healthchecks** for `api`, `worker`, and `worker_beat`; template and env example updates (for example S3 address style).
- **Celery** — default worker **concurrency raised to 4**; missing queue fix.
- **PostgreSQL** — higher default **max connections (200)** for the updated app DB path.
- **Redis** — **configurable key prefix**; **retry** logic for Redis operations.
- **TiDB** — endpoint support and related auth binding migration (**Qdrant endpoint on TiDB auth bindings**).
- **Markdown** — optional **`ALLOW_INLINE_STYLES`** environment variable to allow inline CSS in rendered Markdown when needed.

### Security

- **Change-email flow** — stricter phase-bound token handling ([GHSA-4q3w-q5mc-45rq](https://github.com/advisories?query=GHSA-4q3w-q5mc-45rq)).
- **IDOR hardening** — tenant validation on data-source binding; dataset and API ownership checks where gaps were found.

### Performance
- Optimized performance of graph initialization.

### API and platform internals

- **Graphon** — upgrade to standalone **Graphon 0.2.2** (replacing in-tree `dify_graph` naming and packaging).
- **OpenAPI** — script to generate **OpenAPI v2** JSON and documentation pointer.
- **Deprecation** — some legacy console APIs marked deprecated in favor of newer patterns.
- Large **SQLAlchemy 2.0** `select()` migration, **Pydantic `BaseModel`** for many console and service responses, and **testcontainers**-based tests for stability.


## What's Changed
* test: migrate restore archived workflow run tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34083
* refactor(api): continue decoupling dify_graph from API concerns by @laipz8200 in https://github.com/langgenius/dify/pull/33580
* refactor: replace dict with BedrockRetrievalSetting BaseModel in knowledge_service by @faizkhairi in https://github.com/langgenius/dify/pull/34080
* test: migrate workflow converter tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34038
* refactor(api): rename dify_graph to graphon by @WH-2099 in https://github.com/langgenius/dify/pull/34095
* refactor: select in service API wraps, file_preview, and site controllers by @RenzoMXD in https://github.com/langgenius/dify/pull/34086
* test: migrate database retrieval tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34087
* test: migrate account deletion sync tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34091
* test: migrate metadata partial update tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34088
* test: migrate plugin parameter service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34090
* test: Unit test case for services.dataset_services.py by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/33212
* fix: handle null email in GitHub OAuth sign-in by @Krishnachaitanyakc in https://github.com/langgenius/dify/pull/34043
* fix: datasource api-key modal z-index incorrect by @hjlarry in https://github.com/langgenius/dify/pull/34103
* fix(prompt-editor): fix unexpected blur effect in prompt editor by @WTW0313 in https://github.com/langgenius/dify/pull/34069
* refactor: select in service API dataset document and segment controllers by @RenzoMXD in https://github.com/langgenius/dify/pull/34101
* chore(deps): bump pypdf from 6.9.1 to 6.9.2 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34099
* refactor: use ungh for github api by @hyoban in https://github.com/langgenius/dify/pull/34108
* fix: dataset query created_by empty UUID in iteration subgraph (#34004) by @Achieve3318 in https://github.com/langgenius/dify/pull/34044
* chore: enable no-barrel-files by @hyoban in https://github.com/langgenius/dify/pull/34121
* chore(deps): update picomatch version in nodejs-client and web packages by @WTW0313 in https://github.com/langgenius/dify/pull/34123
* fix: the menu of multi nodes always display on left top corner by @hjlarry in https://github.com/langgenius/dify/pull/34120
* refactor(web): convert 7 enums to as-const objects (batch 5) by @mahmoodhamdi in https://github.com/langgenius/dify/pull/33960
* fix: import path by @QuantumGhost in https://github.com/langgenius/dify/pull/34124
* chore: Support merge queue status checks in required CI workflows by @laipz8200 in https://github.com/langgenius/dify/pull/34133
* chore(api): remove backend utcnow usage by @laipz8200 in https://github.com/langgenius/dify/pull/34131
* chore: Keep main CI lane checks stable when skipped by @laipz8200 in https://github.com/langgenius/dify/pull/34143
* chore: remove stale mypy suppressions and align dataset service tests by @WH-2099 in https://github.com/langgenius/dify/pull/34130
* test: migrate human input delivery test service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34092
* chore(deps-dev): bump nltk from 3.9.3 to 3.9.4 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34117
* test: migrate api key auth service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34147
* refactor: use EnumText for model_type and WorkflowNodeExecution.status by @tmimmanuel in https://github.com/langgenius/dify/pull/34093
* test: migrate plugin service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34098
* chore(deps): bump requests from 2.32.5 to 2.33.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34116
* test: migrate api token service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34148
* chore(deps): bump brace-expansion from 5.0.4 to 5.0.5 in /sdks/nodejs-client by @dependabot[bot] in https://github.com/langgenius/dify/pull/34159
* test: migrate auth integration tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34089
* feat: add copy/delete to multi nodes context menu by @hjlarry in https://github.com/langgenius/dify/pull/34138
* test: use happy dom by @hyoban in https://github.com/langgenius/dify/pull/34154
* chore(ci): remove Python 3.11 from CI test workflows by @1Ckpwee in https://github.com/langgenius/dify/pull/34164
* ci: skip duplicate actions by @hyoban in https://github.com/langgenius/dify/pull/34168
* feat: return correct dify-plugin-daemon error message by @fatelei in https://github.com/langgenius/dify/pull/34171
* feat: enterprise otel exporter by @GareArc in https://github.com/langgenius/dify/pull/33138
* refactor: use EnumText for credential_type in TriggerSubscription by @tmimmanuel in https://github.com/langgenius/dify/pull/34174
* refactor: select in core/ops trace manager and trace providers by @RenzoMXD in https://github.com/langgenius/dify/pull/34197
* refactor(api): use standalone graphon package by @WH-2099 in https://github.com/langgenius/dify/pull/34209
* refactor: use EnumText for prompt_type and customize_token_strategy by @tmimmanuel in https://github.com/langgenius/dify/pull/34204
* chore(deps): bump cryptography from 44.0.3 to 46.0.6 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34210
* test: migrate messages clean service retention tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34207
* refactor: use select for API key auth lookups by @Maa-ly in https://github.com/langgenius/dify/pull/34146
* test: migrate metadata service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34220
* test: migrate workspace service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34218
* test: migrate tag service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34219
* refactor: core/tools, agent, callback_handler, encrypter, llm_generator, plugin, inner_api by @RenzoMXD in https://github.com/langgenius/dify/pull/34205
* chore(ci): reduce web test shard fan-out by @laipz8200 in https://github.com/langgenius/dify/pull/34215
* chore(ci): remove duplicate pyrefly work from style lane by @laipz8200 in https://github.com/langgenius/dify/pull/34213
* fix: Fix docker-compose.yaml's ENV variables by @jasonfish568 in https://github.com/langgenius/dify/pull/31101
* test: init e2e by @hyoban in https://github.com/langgenius/dify/pull/34193
* chore(deps-dev): bump happy-dom from 20.8.8 to 20.8.9 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/34243
* test: migrate workflow service tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34206
* chore(ci): split API unit and integration coverage reporting by @laipz8200 in https://github.com/langgenius/dify/pull/34211
* chore(ci): tighten backend workflow path filters by @laipz8200 in https://github.com/langgenius/dify/pull/34217
* Docs: unify language switch links across root and localized README files by @Fronut in https://github.com/langgenius/dify/pull/34201
* chore(web): remove stale i18n check test by @lyzno1 in https://github.com/langgenius/dify/pull/34237
* chore(ci): simplify i18n translation workflow by @lyzno1 in https://github.com/langgenius/dify/pull/34238
* fix(ci): tighten Claude i18n workflow scope by @lyzno1 in https://github.com/langgenius/dify/pull/34262
* chore(deps): bump boto3 from 1.42.73 to 1.42.78 in /api in the storage group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34248
* chore(deps): update redis requirement from ~=7.3.0 to ~=7.4.0 in /api in the database group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34247
* chore(deps): bump the google group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34252
* chore(deps): bump opik from 1.10.45 to 1.10.54 in /api in the llm group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34254
* chore(deps-dev): update types-regex requirement from ~=2026.2.28 to ~=2026.3.32 in /api in the dev group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34249
* chore(deps-dev): bump the dev group in /api with 7 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34258
* feat(api): add delete workflow functionality with error handling by @ZeroZ-lab in https://github.com/langgenius/dify/pull/33657
* chore(deps): update gunicorn requirement from ~=25.1.0 to ~=25.3.0 in /api in the flask group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34244
* chore(deps): bump the storage group in /api with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34256
* chore(deps-dev): bump the vdb group in /api with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34257
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/34267
* chore(deps): bump the github-actions-dependencies group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34261
* refactor: core/rag docstore, datasource, embedding, rerank, retrieval by @RenzoMXD in https://github.com/langgenius/dify/pull/34203
* refactor(api): replace json.loads with Pydantic validation in services layer by @eureka0928 in https://github.com/langgenius/dify/pull/33704
* fix: enrich Service API segment responses with summary content by @jigangz in https://github.com/langgenius/dify/pull/34221
* refactor: introduce pnpm workspace by @hyoban in https://github.com/langgenius/dify/pull/34241
* fix: upgrade langfuse SDK to v3+ for LLM-as-judge support by @majiayu000 in https://github.com/langgenius/dify/pull/34265
* fix(workflow): improve node organization by @WTW0313 in https://github.com/langgenius/dify/pull/34276
* test: migrate trigger providers controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34295
* fix(i18n): translate "nodes.note.addNote" as "メモを追加" in ja-JP by @t-daisuke in https://github.com/langgenius/dify/pull/34294
* test: migrate data source controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34292
* test: migrate app apis controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34291
* test: migrate web forgot password controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34288
* fix: map checkbox and json_object types in MCP schema publishing by @majiayu000 in https://github.com/langgenius/dify/pull/34226
* test: migrate workspace wraps controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34296
* test: migrate web wraps controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34289
* test: migrate web conversation controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34287
* test: migrate app import api controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34290
* chore(deps): bump pygments from 2.19.2 to 2.20.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34301
* test: migrate tool provider controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34293
* test: migrate mcp controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34297
* refactor: use EnumText for Provider.quota_type and consolidate ProviderQuotaType by @tmimmanuel in https://github.com/langgenius/dify/pull/34299
* refactor: use EnumText for model_type in provider models by @tmimmanuel in https://github.com/langgenius/dify/pull/34300
* chore(ci): move full VDB matrix off the PR path by @laipz8200 in https://github.com/langgenius/dify/pull/34216
* fix: bridge Dify design tokens for streamdown table fullscreen by @ZZITE in https://github.com/langgenius/dify/pull/34224
* fix(web): fix document detail page status inconsistency with list page by @fisherOne1 in https://github.com/langgenius/dify/pull/33740
* fix: silent diff when number count are the same by @asukaminato0721 in https://github.com/langgenius/dify/pull/34097
* refactor(api): narrow otel instrumentor typing by @wangji0923 in https://github.com/langgenius/dify/pull/33853
* fix(http): expose structured vars in HTTP body selector by @owldev127 in https://github.com/langgenius/dify/pull/34185
* fix(dev): load middleware env in start-docker-compose by @dominciyue in https://github.com/langgenius/dify/pull/33927
* feat: increase default celery worker concurrency to 4 by @SeasonPilot in https://github.com/langgenius/dify/pull/33105
* test: add tests for api/services retention, enterprise, plugin by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32648
* chore: try to avoid supply chain security by @hyoban in https://github.com/langgenius/dify/pull/34317
* test: migrate rag pipeline controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34303
* test: migrate rag pipeline datasets controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34304
* test: migrate rag pipeline import controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34305
* test: migrate rag pipeline workflow controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34306
* test: migrate explore conversation controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34312
* fix(web): internationalize DSL export modal labels by @lyzno1 in https://github.com/langgenius/dify/pull/34323
* fix(ci): restore i18n dispatch bridge by @lyzno1 in https://github.com/langgenius/dify/pull/34331
* chore: normalize frozenset literals and myscale typing by @WH-2099 in https://github.com/langgenius/dify/pull/34327
* refactor(nodejs-sdk): replace axios with fetch transport by @lyzno1 in https://github.com/langgenius/dify/pull/34325
* fix(web): localize error boundary copy by @lyzno1 in https://github.com/langgenius/dify/pull/34332
* fix(ci): structure i18n sync payload and PR flow by @lyzno1 in https://github.com/langgenius/dify/pull/34342
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/34339
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/34338
* test: migrate apikey controller tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34286
* refactor: use sessionmaker().begin() in console app controllers by @Desel72 in https://github.com/langgenius/dify/pull/34282
* refactor: use sessionmaker().begin() in console datasets controllers by @Desel72 in https://github.com/langgenius/dify/pull/34283
* refactor: use sessionmaker().begin() in web and mcp controllers by @Desel72 in https://github.com/langgenius/dify/pull/34281
* refactor: use sessionmaker().begin() in console workspace and misc co… by @Desel72 in https://github.com/langgenius/dify/pull/34284
* refactor(api): clean redundant type ignore in request query parsing 🤖🤖🤖 by @majiayu000 in https://github.com/langgenius/dify/pull/34350
* perf: use global httpx client instead of per request create new one by @fatelei in https://github.com/langgenius/dify/pull/34311
* feat(docker): add healthcheck for api, worker, and worker_beat services by @majiayu000 in https://github.com/langgenius/dify/pull/34345
* refactor: enhance ELK layout handling by @WTW0313 in https://github.com/langgenius/dify/pull/34334
* refactor: core/app pipeline, core/datasource, and core/indexing_runner by @RenzoMXD in https://github.com/langgenius/dify/pull/34359
* fix: Variable Aggregator cannot click group swich by @hjlarry in https://github.com/langgenius/dify/pull/34361
* refactor: select in 13 small service files by @RenzoMXD in https://github.com/langgenius/dify/pull/34371
* fix: support qa_preview shape in IndexProcessor preview formatting by @EndlessLucky in https://github.com/langgenius/dify/pull/34151
* refactor(api): replace json.loads with Pydantic validation in controllers and infra layers by @eureka0928 in https://github.com/langgenius/dify/pull/34277
* fix: apply Baidu Vector DB connection timeout when initializing Mochow client by @jimmyzhuu in https://github.com/langgenius/dify/pull/34328
* refactor: select in 10 service files by @RenzoMXD in https://github.com/langgenius/dify/pull/34373
* chore: move commit hook to root by @hyoban in https://github.com/langgenius/dify/pull/34404
* fix: sqlalchemy.exc.InvalidRequestError: Can't operate on closed tran… by @fatelei in https://github.com/langgenius/dify/pull/34407
* refactor: migrate service_api and inner_api to sessionmaker pattern by @xr843 in https://github.com/langgenius/dify/pull/34379
* refactor: select in message_service and ops_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34414
* chore(deps): bump aiohttp from 3.13.3 to 3.13.4 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34425
* refactor(api): type OpsTraceProviderConfigMap with TracingProviderCon… by @YB0y in https://github.com/langgenius/dify/pull/34424
* refactor(web): migrate remaining toast usage by @lyzno1 in https://github.com/langgenius/dify/pull/34433
* refactor: model_load_balancing_service and api_tools_manage_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34434
* fix: fix online_drive is not a valid datasource_type by @fatelei in https://github.com/langgenius/dify/pull/34440
* refactor(api): replace test fixture side-effect imports by @WH-2099 in https://github.com/langgenius/dify/pull/34421
* refactor: select in tag_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34441
* chore(api): align Python support with 3.12 by @WH-2099 in https://github.com/langgenius/dify/pull/34419
* fix: add tenant/dataset ownership checks to prevent IDOR vulnerabilities by @LikiosSedo in https://github.com/langgenius/dify/pull/34436
* test: added test for api/services/rag_pipeline folder by @akashseth-ifp in https://github.com/langgenius/dify/pull/33222
* test: added unit test for remaining files in core helper folder by @akashseth-ifp in https://github.com/langgenius/dify/pull/33288
* refactor: update to tailwind v4 by @hyoban in https://github.com/langgenius/dify/pull/34415
* refactor: split icon collections by @hyoban in https://github.com/langgenius/dify/pull/34453
* test: add unit tests for services and tasks part-4 by @poojanInfocusp in https://github.com/langgenius/dify/pull/33223
* refactor(api): tighten login and wrapper typing by @WH-2099 in https://github.com/langgenius/dify/pull/34447
* ci: Update pyrefly version to 0.59.1 by @asukaminato0721 in https://github.com/langgenius/dify/pull/34452
* chore: clean up useless tailwind reference by @hyoban in https://github.com/langgenius/dify/pull/34478
* refactor: select in metadata_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34479
* refactor: select in workflow_tools_manage_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34477
* fix: remove redundant cast in MCP base session by @majiayu000 in https://github.com/langgenius/dify/pull/34461
* fix(security): add tenant_id validation to prevent IDOR in data source binding by @xr843 in https://github.com/langgenius/dify/pull/34456
* chore: knip fix by @hyoban in https://github.com/langgenius/dify/pull/34481
* fix: fix import dsl failed by @fatelei in https://github.com/langgenius/dify/pull/34492
* refactor(api): type get_knowledge_rate_limit with KnowledgeRateLimitD… by @YB0y in https://github.com/langgenius/dify/pull/34483
* refactor(api): type webhook data extraction with RawWebhookDataDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34486
* refactor(api): type hit testing retrieve responses with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34484
* refactor(api): type log identity dict with IdentityDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34485
* test: migrate service_api dataset controller tests to testcontainers by @YB0y in https://github.com/langgenius/dify/pull/34423
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/34487
* refactor: replace useContext with use in selected batch by @agenthaulk in https://github.com/langgenius/dify/pull/34450
* refactor: select in external_knowledge_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34493
* refactor: select in rag_pipeline by @RenzoMXD in https://github.com/langgenius/dify/pull/34495
* refactor: select in account_service (AccountService class) by @RenzoMXD in https://github.com/langgenius/dify/pull/34496
* chore: override lodash by @hyoban in https://github.com/langgenius/dify/pull/34502
* fix(web): restore ui select public exports by @lyzno1 in https://github.com/langgenius/dify/pull/34501
* chore: update code-inspector-plugin to 1.5.1 by @hyoban in https://github.com/langgenius/dify/pull/34506
* refactor: select in account_service (RegisterService class) by @RenzoMXD in https://github.com/langgenius/dify/pull/34500
* refactor(api): type annotation service dicts with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34482
* refactor(web): replace react-syntax-highlighter with shiki by @mvanhorn in https://github.com/langgenius/dify/pull/33473
* refactor(web): migrate notion page selectors to tanstack virtual by @lyzno1 in https://github.com/langgenius/dify/pull/34508
* test: add unit tests for app store and annotation components, enhancing coverage for state management and UI interactions by @CodingOnStar in https://github.com/langgenius/dify/pull/34510
* refactor: select in account_service (TenantService class) by @RenzoMXD in https://github.com/langgenius/dify/pull/34499
* refactor: select in dataset_service (DatasetService class) by @RenzoMXD in https://github.com/langgenius/dify/pull/34525
* refactor(api): type celery sqlcommenter tags with CelerySqlcommenterTagsDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34526
* refactor(api): type messages cleanup stats with MessagesCleanStatsDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34527
* build: include packages in docker build by @hyoban in https://github.com/langgenius/dify/pull/34532
* refactor: select in annotation_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34503
* refactor: select in dataset_service (DocumentService class) by @RenzoMXD in https://github.com/langgenius/dify/pull/34528
* refactor: select in datasource_provider_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34548
* refactor: select in dataset_service (SegmentService and remaining cla… by @RenzoMXD in https://github.com/langgenius/dify/pull/34547
* refactor: convert ProviderQuotaType if/elif to match/case (#30001) by @agenthaulk in https://github.com/langgenius/dify/pull/34561
* refactor: convert AppMode if/elif to match/case in service files (#30001) by @agenthaulk in https://github.com/langgenius/dify/pull/34562
* refactor: convert AppMode if/elif to match/case in app_generate_service (#30001) by @agenthaulk in https://github.com/langgenius/dify/pull/34563
* refactor(api): type workflow run delete/count results with RunsWithRelatedCountsDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34531
* fix:  lighten the health checks for the Worker and Worker Beat services, and disable them by default by @kurokobo in https://github.com/langgenius/dify/pull/34572
* chore(deps): bump boto3 from 1.42.78 to 1.42.83 in /api in the storage group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34578
* chore(deps): bump the storage group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34585
* chore(deps): bump flask-compress from 1.23 to 1.24 in /api in the flask group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34580
* chore(deps): bump the google group in /api with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34581
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34582
* chore(deps): bump sqlalchemy from 2.0.48 to 2.0.49 in /api in the database group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34584
* chore(deps): bump the llm group in /api with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34583
* refactor(api): reuse IdentityDict TypedDict in logging filters by @YB0y in https://github.com/langgenius/dify/pull/34593
* chore(deps): update flask-compress requirement from <1.24,>=1.17 to >=1.17,<1.25 in /api in the flask group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34573
* chore(deps): bump google-auth-httplib2 from 0.3.0 to 0.3.1 in /api in the google group by @dependabot[bot] in https://github.com/langgenius/dify/pull/34575
* chore(deps-dev): bump the vdb group in /api with 7 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34586
* refactor(api): type orphaned draft variable stats with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34590
* refactor(api): type upload file serialization with UploadFileDict TypedDict by @jakearmstrong59 in https://github.com/langgenius/dify/pull/34589
* refactor(api): type archive manifest with ArchiveManifestDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34594
* chore(deps-dev): bump the dev group in /api with 6 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34579
* refactor(api): type workflow run related counts with RelatedCountsDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34530
* chore(deps-dev): bump the dev group across 1 directory with 20 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/34601
* refactor(api): type storage statistics with StorageStatisticsDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34609
* refactor(api): type document summary status detail with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34610
* refactor(api): type crawl status dicts with CrawlStatusDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34611
* refactor(api): type MCP tool schema and arguments with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34612
* refactor(api): type notification response with NotificationResponseDict TypedDict by @jakearmstrong59 in https://github.com/langgenius/dify/pull/34616
* refactor(api): type invitation detail with InvitationDetailDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34613
* refactor(api): type LLM generator results with TypedDict by @statxc in https://github.com/langgenius/dify/pull/34621
* refactor(api): enforce strict typing on retrieval_model to resolve FIXME by @iamPulakesh in https://github.com/langgenius/dify/pull/34614
* refactor(api): type dataset service dicts with TypedDict by @statxc in https://github.com/langgenius/dify/pull/34625
* refactor(api): type plugin migration results with TypedDict by @statxc in https://github.com/langgenius/dify/pull/34627
* fix: web app user avatar display incorrect black by @hjlarry in https://github.com/langgenius/dify/pull/34624
* refactor: migrate session.query to select API in core misc modules by @RenzoMXD in https://github.com/langgenius/dify/pull/34608
* refactor: migrate session.query to select API in small task files by @RenzoMXD in https://github.com/langgenius/dify/pull/34617
* refactor: migrate session.query to select API in console controllers by @aliworksx08 in https://github.com/langgenius/dify/pull/34607
* fix: simplify pre-commit hook flow by @lyzno1 in https://github.com/langgenius/dify/pull/34637
* refactor: replace dict params with BaseModel payloads in TagService by @YB0y in https://github.com/langgenius/dify/pull/34422
* refactor: migrate session.query to select API in sync task and services by @RenzoMXD in https://github.com/langgenius/dify/pull/34619
* refactor: migrate session.query to select API in end_user_service and small tasks by @RenzoMXD in https://github.com/langgenius/dify/pull/34620
* refactor: migrate session.query to select API in retrieval_service by @RenzoMXD in https://github.com/langgenius/dify/pull/34638
* fix: improve app delete alert dialog UX by @lyzno1 in https://github.com/langgenius/dify/pull/34644
* refactor: migrate session.query to select API in document task files by @RenzoMXD in https://github.com/langgenius/dify/pull/34646
* refactor(api): type app parameter feature toggles with FeatureToggleD… by @YB0y in https://github.com/langgenius/dify/pull/34651
* refactor: migrate session.query to select API in summary and remove document tasks by @RenzoMXD in https://github.com/langgenius/dify/pull/34650
* refactor(api): migrate dict returns to TypedDicts in billing service by @iamPulakesh in https://github.com/langgenius/dify/pull/34649
* refactor: migrate session.query to select API in rag pipeline task files by @RenzoMXD in https://github.com/langgenius/dify/pull/34648
* refactor(api): type webhook validation result and workflow inputs with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34645
* refactor(api): type aliyun trace utils with TypedDict and tighten return types by @YB0y in https://github.com/langgenius/dify/pull/34642
* refactor(api): type error stream response with TypedDict by @statxc in https://github.com/langgenius/dify/pull/34641
* refactor(api): type load balancing config dicts with TypedDict by @statxc in https://github.com/langgenius/dify/pull/34639
* fix(#34636): replace SimpleNamespace with MagicMock(spec=App) in test_app_dsl_service by @iamPulakesh in https://github.com/langgenius/dify/pull/34659
* fix: var input label missing icon by @hjlarry in https://github.com/langgenius/dify/pull/34569
* fix(workflow): correct env variable picker validation by @lyzno1 in https://github.com/langgenius/dify/pull/34666
* chore: remove unused pnpm overrides by @lyzno1 in https://github.com/langgenius/dify/pull/34658
* refactor(api): replace json.loads with Pydantic validation in security and tools layers by @eureka0928 in https://github.com/langgenius/dify/pull/34380
* refactor(api): Extract shared ResponseModel by @corevibe555 in https://github.com/langgenius/dify/pull/34633
* refactor(api): type VDB to_index_struct with VectorIndexStructDict TypedDict by @statxc in https://github.com/langgenius/dify/pull/34674
* refactor(api): type gen_index_struct_dict with VectorIndexStructDict TypedDict by @statxc in https://github.com/langgenius/dify/pull/34675
* refactor(api): type single-node graph structure with TypedDicts in workflow_entry by @YB0y in https://github.com/langgenius/dify/pull/34671
* refactor(api): type indexing result with IndexingResultDict TypedDict by @statxc in https://github.com/langgenius/dify/pull/34672
* refactor(api): type Tenant custom config with TypedDict and tighten MCP headers type by @YB0y in https://github.com/langgenius/dify/pull/34670
* refactor(api): type VDB config params dicts with TypedDicts by @statxc in https://github.com/langgenius/dify/pull/34677
* refactor(api): type Chroma and AnalyticDB config params dicts with TypedDicts by @statxc in https://github.com/langgenius/dify/pull/34678
* refactor(api): extract shared RAG domain entities into core/rag/entity by @corevibe555 in https://github.com/langgenius/dify/pull/34685
* refactor(api): deduplicate shared auth request payloads into auth_entities.py by @corevibe555 in https://github.com/langgenius/dify/pull/34694
* refactor(api): clean up AssistantPromptMessage typing in CotChatAgentRunner by @iamPulakesh in https://github.com/langgenius/dify/pull/34681
* refactor(api): type I18nObject.to_dict with I18nObjectDict TypedDict by @statxc in https://github.com/langgenius/dify/pull/34680
* refactor: migrate session.query to select API in small task files batch by @RenzoMXD in https://github.com/langgenius/dify/pull/34684
* refactor(api): migrate consumers to shared RAG domain entities from core/rag/entities/ by @corevibe555 in https://github.com/langgenius/dify/pull/34692
* refactor(api): remove duplicated RAG entities from services layer by @corevibe555 in https://github.com/langgenius/dify/pull/34689
* refactor: use sessionmaker in controllers, events, models, and tasks 1 by @carlos4s in https://github.com/langgenius/dify/pull/34693
* refactor: replace untyped dicts with TypedDict in VDB config classes by @RenzoMXD in https://github.com/langgenius/dify/pull/34697
* refactor(api): tighten types for Tenant.custom_config_dict and MCPToolProvider.headers by @corevibe555 in https://github.com/langgenius/dify/pull/34698
* refactor(api): deduplicate I18nObject in datasource entities by @corevibe555 in https://github.com/langgenius/dify/pull/34701
* fix: backendModelConfig.chat_prompt_config.prompt is undefined by @fatelei in https://github.com/langgenius/dify/pull/34709
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/34704
* refactor(api): deduplicate RAG index entities and consolidate import paths by @corevibe555 in https://github.com/langgenius/dify/pull/34690
* refactor(api): deduplicate shared controller request schemas into controller_schemas.py by @corevibe555 in https://github.com/langgenius/dify/pull/34700
* ci: update web changes scope by @hyoban in https://github.com/langgenius/dify/pull/34713
* refactor: enhance billing info response handling by @hj24 in https://github.com/langgenius/dify/pull/34340
* fix(web): avoid prehydration script in slider by @lyzno1 in https://github.com/langgenius/dify/pull/34676
* refactor: use sessionmaker in small services 2 by @carlos4s in https://github.com/langgenius/dify/pull/34696
* fix: legacy model_type deserialization regression by @IthacaDream in https://github.com/langgenius/dify/pull/34717
* refactor(api): deduplicate Pydantic models across fields and controllers by @corevibe555 in https://github.com/langgenius/dify/pull/34718
* build: include vinext in docker build by @hyoban in https://github.com/langgenius/dify/pull/34535
* chore: remove raw vite deps by @hyoban in https://github.com/langgenius/dify/pull/34726
* feat(web): add ALLOW_INLINE_STYLES env var to opt-in inline CSS in Markdown rendering by @s-kawamura-upgrade in https://github.com/langgenius/dify/pull/34719
* test: add unit tests for access control components to enhance coverage and reliability  by @CodingOnStar in https://github.com/langgenius/dify/pull/34722
* fix: update how ky handle error by @hyoban in https://github.com/langgenius/dify/pull/34735
* fix(ci): repair i18n bridge and translation workflow by @lyzno1 in https://github.com/langgenius/dify/pull/34738
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/34742
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/34745
* chore: align prompt editor var checks with use-check-list checks by @hjlarry in https://github.com/langgenius/dify/pull/34715
* fix: add backward-compatible query param for decode_plugin_from_ident… by @zhangbububu in https://github.com/langgenius/dify/pull/34720
* fix: fix import error by @fatelei in https://github.com/langgenius/dify/pull/34728
* chore(deps): bump cryptography from 46.0.6 to 46.0.7 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34776
* refactor: migrate session.query to select API in schedule cleanup task by @aliworksx08 in https://github.com/langgenius/dify/pull/34775
* refactor(api): use sessionmaker in trigger provider service & dataset… by @carlos4s in https://github.com/langgenius/dify/pull/34774
* refactor(api): tighten types in trivial lint and config fixes by @tmimmanuel in https://github.com/langgenius/dify/pull/34773
* refactor: migrate session.query to select API in delete conversation task by @RenzoMXD in https://github.com/langgenius/dify/pull/34772
* refactor(api): use sessionmaker in core app generators & pipelines by @carlos4s in https://github.com/langgenius/dify/pull/34771
* refactor(api): use sessionmaker in plugin & trigger services by @carlos4s in https://github.com/langgenius/dify/pull/34764
* refactor: migrate session.query to select API in delete segment and regenerate summary tasks by @RenzoMXD in https://github.com/langgenius/dify/pull/34763
* refactor: migrate session.query to select API in batch clean and disable segments tasks by @RenzoMXD in https://github.com/langgenius/dify/pull/34760
* refactor: migrate session.query to select API in add document and clean document tasks by @RenzoMXD in https://github.com/langgenius/dify/pull/34761
* refactor(api): use sessionmaker in end user, retention & cleanup services by @carlos4s in https://github.com/langgenius/dify/pull/34765
* refactor(api): deduplicate ImportMode and ImportStatus enums from rag_pipeline_dsl_service by @jakearmstrong59 in https://github.com/langgenius/dify/pull/34759
* refactor: convert FileTransferMethod if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34769
* refactor(api): deduplicate workflow controller schemas into controller_schemas.py by @jakearmstrong59 in https://github.com/langgenius/dify/pull/34755
* refactor: convert importStatus if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34780
* refactor: convert webapp auth type if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34782
* refactor: convert ToolProviderType if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34768
* refactor: convert segmentType if/elif to match/case in  webhook_service.py (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34770
* test: migrate recommended_app_service tests to testcontainers by @volcano303 in https://github.com/langgenius/dify/pull/34751
* refactor: convert file-transfer-method-tools if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34783
* refactor: convert segmentType workflow if/elif to match/case by @dataCenter430 in https://github.com/langgenius/dify/pull/34785
* refactor: convert SegmentType controllers if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34784
* refactor: convert file-transfer-method-pipeline if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34788
* refactor: convert appMode controllers if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34789
* refactor: convert appmode plugin if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34790
* refactor: convert ProviderQuota if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34791
* fix: copy button not working on API Server and API Key pages by @BrianWang1990 in https://github.com/langgenius/dify/pull/34515
* feat: redis add retry logic by @fatelei in https://github.com/langgenius/dify/pull/34566
* test: add e2e scenarios for app creation and sign-out by @majiayu000 in https://github.com/langgenius/dify/pull/34285
* chore(deps): bump litellm from 1.82.6 to 1.83.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34544
* refactor: convert TelemetryCase if/elif to match/case (#3001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34797
* refactor: deduplicate DefaultRetrievalModelDict TypedDict into retrieval_service.py by @jakearmstrong59 in https://github.com/langgenius/dify/pull/34758
* refactor(api): use sessionmaker in workflow & RAG pipeline services by @carlos4s in https://github.com/langgenius/dify/pull/34805
* refactor(api): use sessionmaker in datasource provider service by @carlos4s in https://github.com/langgenius/dify/pull/34811
* refactor: migrate session.query to select API in document indexing sync task by @RenzoMXD in https://github.com/langgenius/dify/pull/34813
* refactor: migrate session.query to select API in core tools by @aliworksx08 in https://github.com/langgenius/dify/pull/34814
* refactor: convert ToolProviderType if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34794
* refactor: migrate session.query to select API in clean dataset task by @RenzoMXD in https://github.com/langgenius/dify/pull/34815
* refactor(api): use sessionmaker in pgvecto_rs VDB service by @carlos4s in https://github.com/langgenius/dify/pull/34818
* refactor: migrate session.query to select API in plugin services by @aliworksx08 in https://github.com/langgenius/dify/pull/34817
* refactor: migrate session.query to select API in deal dataset vector index task by @RenzoMXD in https://github.com/langgenius/dify/pull/34819
* refactor(api): deduplicate DSL shared entities into dsl_entities.py by @aliworksx08 in https://github.com/langgenius/dify/pull/34762
* refactor(api): use sessionmaker in builtin tools manage service by @carlos4s in https://github.com/langgenius/dify/pull/34812
* fix(web): use nuqs for log conversation url state by @lyzno1 in https://github.com/langgenius/dify/pull/34820
* refactor(api): deduplicate json serialization in AppModelConfig.from_model_config_dict by @jonathanchang31 in https://github.com/langgenius/dify/pull/34795
* fix(docker): restore S3_ADDRESS_STYLE env examples by @laipz8200 in https://github.com/langgenius/dify/pull/34826
* test: add unit tests for AppPublisher, Sidebar, Chat, FileUploader, Form Demo, Notion Page Selector, Prompt Editor, and Header Navigation components by @CodingOnStar in https://github.com/langgenius/dify/pull/34802
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/34833
* refactor(api): reduce Dify GraphInitParams usage by @laipz8200 in https://github.com/langgenius/dify/pull/34825
* fix(web): resolve Dify compact array types in tool output schema by @balancetheworld in https://github.com/langgenius/dify/pull/34804
* ci: bump pyrefly version by @asukaminato0721 in https://github.com/langgenius/dify/pull/34821
* fix: fix remove_leading_symbols remove [ by @fatelei in https://github.com/langgenius/dify/pull/34832
* chore: install from npm for vinext by @hyoban in https://github.com/langgenius/dify/pull/34840
* fix: fix sqlalchemy.orm.exc.DetachedInstanceError by @fatelei in https://github.com/langgenius/dify/pull/34845
* refactor: migrate session.query to select API in webhook service by @aliworksx08 in https://github.com/langgenius/dify/pull/34849
* refactor: migrate session.query to select API in file service by @aliworksx08 in https://github.com/langgenius/dify/pull/34852
* refactor: migrate session.query to select API in deal dataset index update task by @RenzoMXD in https://github.com/langgenius/dify/pull/34847
* refactor(api): deduplicate EnabledConfig property logic in AppModelConfig by @jonathanchang31 in https://github.com/langgenius/dify/pull/34793
* refactor: migrate web human_input_form from reqparse to Pydantic BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/34859
* chore: remove commented-out reqparse code from rag_pipeline_workflow by @ai-hpc in https://github.com/langgenius/dify/pull/34860
* refactor: migrate console human_input_form from reqparse to PydanticBaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/34858
* refactor: migrate TrialApp and AccountTrialAppRecord to TypeBase by @sxxtony in https://github.com/langgenius/dify/pull/34806
* refactor(api): type recommend app database retrieval dicts with TypedDicts by @YB0y in https://github.com/langgenius/dify/pull/34873
* refactor(api): type Celery SSL options and Sentinel transport dicts with TypedDicts by @dataCenter430 in https://github.com/langgenius/dify/pull/34871
* refactor(api): type OpenSearch/Lindorm/Huawei VDB config params dicts with TypedDicts by @dataCenter430 in https://github.com/langgenius/dify/pull/34870
* refactor: convert appmode misc if/elif to match/case (#30001) by @dataCenter430 in https://github.com/langgenius/dify/pull/34869
* fix(mcp): catch JSONDecodeError in OAuth discovery functions 🤖🤖🤖 by @jeanibarz in https://github.com/langgenius/dify/pull/34868
* refactor(api): type DatasourceProviderApiEntity.to_dict with TypedDict by @volcano303 in https://github.com/langgenius/dify/pull/34879
* refactor(models): replace Any with precise types in Tenant and MCPToo… by @corevibe555 in https://github.com/langgenius/dify/pull/34880
* refactor(api): use sessionmaker in relyt & tidb_vector VDB services by @carlos4s in https://github.com/langgenius/dify/pull/34848
* fix(api): replace `assert isinstance` with proper runtime type checks in message transformers by @iamPulakesh in https://github.com/langgenius/dify/pull/34865
* fix(api): prevent cross-tenant external API use-check disclosure by @laipz8200 in https://github.com/langgenius/dify/pull/34744
* refactor(web): move avatar to base ui by @lyzno1 in https://github.com/langgenius/dify/pull/34889
* refactor(api): type format_preview returns with TypedDicts in index processors by @volcano303 in https://github.com/langgenius/dify/pull/34893
* refactor(api): modernize type annotations — replace Optional/Union with | syntax by @corevibe555 in https://github.com/langgenius/dify/pull/34888
* refactor: migrate TrialApp and AccountTrialAppRecord to TypeBase by @sxxtony in https://github.com/langgenius/dify/pull/34897
* refactor(api): replace Optional/Union with | syntax, remove dead AnyFunction by @corevibe555 in https://github.com/langgenius/dify/pull/34894
* refactor(mcp): remove unused AnyFunction alias, tighten callback type by @corevibe555 in https://github.com/langgenius/dify/pull/34890
* fix(web): assign in-progress tracing items to latest loop/iteration record by @plind-junior in https://github.com/langgenius/dify/pull/34661
* refactor(services): replace Union with | syntax in service layer (batch 2) by @corevibe555 in https://github.com/langgenius/dify/pull/34906
* fix: fix orm_exc.DetachedInstanceError by @fatelei in https://github.com/langgenius/dify/pull/34904
* refactor(otel): replace Any with Tracer and [T] generics by @corevibe555 in https://github.com/langgenius/dify/pull/34883
* feat(ci): add pyrefly type coverage reporting to CI by @corevibe555 in https://github.com/langgenius/dify/pull/34754
* refactor(services): replace Union with | syntax in service layer by @corevibe555 in https://github.com/langgenius/dify/pull/34905
* fix: sqlalchemy.orm.exc.DetachedInstanceError by @leslie2046 in https://github.com/langgenius/dify/pull/34910
* test: migrate ops_service tests to testcontainers by @volcano303 in https://github.com/langgenius/dify/pull/34749
* test: migrate hit_testing_service tests to testcontainers by @volcano303 in https://github.com/langgenius/dify/pull/34750
* refactor(api): type workflow generator args dict with TypedDict by @dataCenter430 in https://github.com/langgenius/dify/pull/34876
* refactor(tools): replace redundant dict[str, str] with EmojiIconDict by @YgorLeal in https://github.com/langgenius/dify/pull/34786
* refactor: make DefaultFieldsMixin compatible with TypeBase (MappedAsDataclass) by @sxxtony in https://github.com/langgenius/dify/pull/34686
* fix(api): default parent_mode to paragraph for hierarchical chunking via API by @plind-junior in https://github.com/langgenius/dify/pull/34635
* fix(workflow): correct maximized editor panel layout in execution logs by @HamzaSwitch in https://github.com/langgenius/dify/pull/34909
* refactor(api): replace Any with precise types in db_migration_lock by @corevibe555 in https://github.com/langgenius/dify/pull/34891
* docs(contributing): move agent attribution guidance to PR template by @laipz8200 in https://github.com/langgenius/dify/pull/34919
* chore: should hide change action when node is undeletable by @hjlarry in https://github.com/langgenius/dify/pull/34592
* fix: fix outputs share same name var by @fatelei in https://github.com/langgenius/dify/pull/34604
* refactor(api): type Redis connection param builder functions with TypedDicts by @dataCenter430 in https://github.com/langgenius/dify/pull/34875
* test: add unit tests for workflow components including tools and inspect vars by @CodingOnStar in https://github.com/langgenius/dify/pull/34843
* test: migrate SQLAlchemyWorkflowNodeExecutionRepository tests to testcontainers by @bittoby in https://github.com/langgenius/dify/pull/34926
* refactor(api): type Document.to_dict with DocumentDict TypedDict by @bittoby in https://github.com/langgenius/dify/pull/34924
* chore(deps): bump pypdf from 6.9.2 to 6.10.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/34946
* refactor(api): type ToolInvokeMeta.to_dict with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34942
* refactor(api): type get_prompt_template with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34943
* refactor(api): type DatasourceInvokeMeta.to_dict with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34940
* refactor(api): type SQLALCHEMY_ENGINE_OPTIONS with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34941
* refactor: replace inline api.model with Pydantic BaseModel in model_config by @ai-hpc in https://github.com/langgenius/dify/pull/34930
* test: remove dataset service update/delete mock tests superseded by testcontainers by @bittoby in https://github.com/langgenius/dify/pull/34937
* test: remove dataset metadata mock tests superseded by testcontainers by @bittoby in https://github.com/langgenius/dify/pull/34931
* refactor: replace inline api.model with register_schema_models in billing by @ai-hpc in https://github.com/langgenius/dify/pull/34928
* test: remove dataset permission mock tests superseded by testcontainers by @bittoby in https://github.com/langgenius/dify/pull/34936
* refactor: remove base ui i18n dependency by @lyzno1 in https://github.com/langgenius/dify/pull/34921
* fix: fix tool output duplicate by @fatelei in https://github.com/langgenius/dify/pull/34962
* refactor(api): migrate controllers to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34960
* test: migrate Conversation/Message inputs tenant resolution SQL tests to Testcontainers by @wdeveloper16 in https://github.com/langgenius/dify/pull/34957
* test: migrate WorkflowNodeExecutionModel creator property SQL tests to Testcontainers by @wdeveloper16 in https://github.com/langgenius/dify/pull/34958
* refactor(api): migrate core RAG layer to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34965
* test: migrate RagPipelineService DB operation SQL tests to Testcontainer by @wdeveloper16 in https://github.com/langgenius/dify/pull/34959
* refactor: migrate verify_subscription_credentials return type to TypedDict by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/34967
* test: migrate Conversation.status_count and Site.generate_code SQL tests to Testcontainers by @wdeveloper16 in https://github.com/langgenius/dify/pull/34955
* refactor(services): migrate dataset_service and clear_free_plan_tenant_expired_logs to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34970
* refactor(services): migrate datasource_provider_service to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34974
* test: update TestContainers integration tests and unit test fixtures to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34969
* refactor(services): migrate builtin_tools_manage_service to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34973
* refactor(services): migrate trigger_provider_service to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34972
* refactor(services): migrate summary_index_service to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34971
* refactor(api): migrate tools, account, workflow and plugin services to SQLAlchemy 2.0 by @wdeveloper16 in https://github.com/langgenius/dify/pull/34966
* refactor(tasks): migrate document_indexing_task and remove_app_and_related_data_task to SQLAlchemy 2.0 select() API by @wdeveloper16 in https://github.com/langgenius/dify/pull/34968
* test: migrate test_remove_app_and_related_data_task to SQLAlchemy 2.0 select() API by @dataCenter430 in https://github.com/langgenius/dify/pull/34985
* test: migrate conftest and plugin lifecycle tests to SQLAlchemy 2.0 select() API by @dataCenter430 in https://github.com/langgenius/dify/pull/34979
* test: migrate test_messages_clean_service to SQLAlchemy 2.0 select() API by @dataCenter430 in https://github.com/langgenius/dify/pull/34984
* refactor: migrate _model_to_insertion_dict return type to TypedDict by @thegdsks in https://github.com/langgenius/dify/pull/34988
* refactor(api): type DataSourceApiKeyAuthBinding.to_dict with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/35001
* refactor(api): type _serialize_full_content with FullContentDict TypedDict by @YB0y in https://github.com/langgenius/dify/pull/35000
* refactor(api): type _get_cluster_connection_health_params with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34999
* refactor: replace bare dict with ActionDict TypedDict in cot_agent_runner by @wdeveloper16 in https://github.com/langgenius/dify/pull/34997
* test: migrate conversation rename/delete edge cases to Testcontainers integration tests by @wdeveloper16 in https://github.com/langgenius/dify/pull/34991
* test: migrate test_workflow_draft_variable_service to SQLAlchemy 2.0 select() API by @dataCenter430 in https://github.com/langgenius/dify/pull/34986
* refactor: replace bare dict with typed annotations in external_data_tool by @wdeveloper16 in https://github.com/langgenius/dify/pull/34996
* refactor(api): type _build_log_dict return with LogDict TypedDict by @aviu16 in https://github.com/langgenius/dify/pull/34983
* fix: external dataset tenant checks for bound knowledge APIs  by @laipz8200 in https://github.com/langgenius/dify/pull/34734
* chore(deps): bump the flask group in /api with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35007
* chore(deps): bump the google group in /api with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35010
* chore(deps): bump the database group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35013
* chore(deps): bump the storage group in /api with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35014
* chore(deps): bump the llm group in /api with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35019
* chore(deps-dev): bump the dev group in /api with 40 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35022
* chore(deps): bump the storage group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35020
* chore(deps-dev): bump the vdb group in /api with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35021
* chore(deps): bump opentelemetry-propagator-b3 from 1.40.0 to 1.41.0 in /api in the opentelemetry group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35017
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35018
* chore(deps): bump the python-packages group across 1 directory with 18 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35023
* fix(rag): include is_summary and original_chunk_id in default vector projection by @HamzaSwitch in https://github.com/langgenius/dify/pull/34950
* refactor(api): enable reportUntypedFunctionDecorator in pyright config (#26412) by @YgorLeal in https://github.com/langgenius/dify/pull/35031
* chore(deps): bump the opentelemetry group across 1 directory with 16 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35028
* test: implement Account/Tenant model integration tests to replace db-mocked unit tests by @wdeveloper16 in https://github.com/langgenius/dify/pull/34994
* test: migrate BillingService permission-check tests to Testcontainers integration tests by @wdeveloper16 in https://github.com/langgenius/dify/pull/34993
* refactor: replace bare dict with TypedDicts in annotation_service by @wdeveloper16 in https://github.com/langgenius/dify/pull/34998
* refactor: use sessionmaker in workflow_tools_manage_service.py by @HeYin-OS in https://github.com/langgenius/dify/pull/34896
* chore: refine .github configs for dependabot, PR template, and stale workflow by @crazywoola in https://github.com/langgenius/dify/pull/35035
* chore(deps): bump weave from 0.52.17 to 0.52.36 in /api in the llm group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35038
* chore(deps-dev): bump mypy from 1.20.0 to 1.20.1 in /api in the dev group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35039
* refactor: remove marshal_with and inline api.model from app_import by @ai-hpc in https://github.com/langgenius/dify/pull/34934
* refactor: migrate mcp_server from marshal_with/api.model to Pydantic BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/34935
* refactor: migrate app site from marshal_with/api.model to Pydantic BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/34933
* refactor: migrate apikey from marshal_with/api.model to Pydantic BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/34932
* refactor: migrate RecommendedApp to TypeBase by @sxxtony in https://github.com/langgenius/dify/pull/34808
* refactor: replace inline api.model response schemas with register_schema_models in activate by @ai-hpc in https://github.com/langgenius/dify/pull/34929
* refactor: migrate SegmentAttachmentBinding to TypeBase by @sxxtony in https://github.com/langgenius/dify/pull/34810
* refactor(api): deduplicate TextToAudioPayload and MessageListQuery into controller_schemas.py by @jakearmstrong59 in https://github.com/langgenius/dify/pull/34757
* refactor(api): improve type safety in MCPToolManageService.execute_auth_actions by @dev-miro26 in https://github.com/langgenius/dify/pull/34824
* refactor(api): deduplicate dataset controller schemas into controller_schemas.py by @jakearmstrong59 in https://github.com/langgenius/dify/pull/34756
* refactor: migrate WorkflowPause and WorkflowPauseReason to TypeBase by @sxxtony in https://github.com/langgenius/dify/pull/34688
* refactor(api): type WorkflowAppLog.to_dict with WorkflowAppLogDict TypedDict by @statxc in https://github.com/langgenius/dify/pull/34682
* refactor(api): consolidate duplicate RerankingModelConfig and WeightedScoreConfig definitions by @corevibe555 in https://github.com/langgenius/dify/pull/34747
* fix: correct typo submision to submission by @LincolnBurrows2017 in https://github.com/langgenius/dify/pull/33435
* feat: support ttft report to langfuse by @leslie2046 in https://github.com/langgenius/dify/pull/33344
* refactor: migrate MessageAnnotation to TypeBase by @sxxtony in https://github.com/langgenius/dify/pull/34807
* test: migrate app_dsl_service tests to testcontainers by @volcano303 in https://github.com/langgenius/dify/pull/34429
* test: migrate AudioService TTS message-ID lookup tests to Testcontainers integration tests by @wdeveloper16 in https://github.com/langgenius/dify/pull/34992
* fix: fix qdrant delete size is too large by @fatelei in https://github.com/langgenius/dify/pull/35042
* fix: optimize trigger long running read transactions by @hj24 in https://github.com/langgenius/dify/pull/35046
* refactor(api): type WorkflowRun.to_dict with WorkflowRunDict TypedDict by @KeWang0622 in https://github.com/langgenius/dify/pull/35047
* refactor: move vdb implementations to workspaces by @wylswz in https://github.com/langgenius/dify/pull/34900
* refactor: improve type annotations in HitTestingService by @xingarr in https://github.com/langgenius/dify/pull/27838
* chore: revert react-i18next update by @hyoban in https://github.com/langgenius/dify/pull/35058
* refactor(auth): standardize failed login audit logging by @laipz8200 in https://github.com/langgenius/dify/pull/35054
* refactor: replace bare dict with dict[str, Any] in ops_service tracin… by @wdeveloper16 in https://github.com/langgenius/dify/pull/35064
* refactor: replace bare dict with dict[str, Any] in plugin endpoint_service by @wdeveloper16 in https://github.com/langgenius/dify/pull/35065
* refactor: replace bare dict with dict[str, Any] in OpenAPI tools parser by @wdeveloper16 in https://github.com/langgenius/dify/pull/35061
* refactor: replace bare dict with dict[str, Any] in watercrawl client by @wdeveloper16 in https://github.com/langgenius/dify/pull/35063
* refactor: replace bare dict with dict[str, Any] in datasource_entities by @wdeveloper16 in https://github.com/langgenius/dify/pull/35062
* fix: db session expired issue by @hj24 in https://github.com/langgenius/dify/pull/35049
* refactor: replace bare dict with UtmInfo TypedDict in operation_service by @wdeveloper16 in https://github.com/langgenius/dify/pull/35055
* refactor: replace bare dict with AdvancedPromptTemplateArgs TypedDict by @wdeveloper16 in https://github.com/langgenius/dify/pull/35056
* refactor: replace bare dict with WorkflowRunListArgs TypedDict by @wdeveloper16 in https://github.com/langgenius/dify/pull/35057
* refactor: replace bare dict with dict[str, Any] in helper cache modules by @wdeveloper16 in https://github.com/langgenius/dify/pull/35067
* refactor: replace bare dict with dict[str, Any] in rag extractors by @wdeveloper16 in https://github.com/langgenius/dify/pull/35068
* refactor: replace bare dict with dict[str, Any] in tools message_transformer by @wdeveloper16 in https://github.com/langgenius/dify/pull/35069
* refactor: replace bare dict with dict[str, Any] in ops_trace_manager by @wdeveloper16 in https://github.com/langgenius/dify/pull/35070
* refactor: replace bare dict with dict[str, Any] in pipeline_template module by @wdeveloper16 in https://github.com/langgenius/dify/pull/35071
* fix: click empty http node value may cause blur by @iamjoel in https://github.com/langgenius/dify/pull/35051
* chore(web): upgrade @base-ui/react to v1.4.0 by @lyzno1 in https://github.com/langgenius/dify/pull/35048
* fix: handle URL construction error when switching to Visual Editor by @samrusani in https://github.com/langgenius/dify/pull/35004
* refactor: replace bare dict with dict[str, Any] in website_service by @wdeveloper16 in https://github.com/langgenius/dify/pull/35074
* refactor: replace bare dict with dict[str, Any] in dataset and external_knowledge services by @wdeveloper16 in https://github.com/langgenius/dify/pull/35073
* refactor: replace bare dict with dict[str, Any] in tools manage services by @wdeveloper16 in https://github.com/langgenius/dify/pull/35075
* refactor: replace bare dict with dict[str, Any] in moderation module by @wdeveloper16 in https://github.com/langgenius/dify/pull/35076
* refactor: replace bare dict with dict[str, Any] in provider entities and plugin client by @wdeveloper16 in https://github.com/langgenius/dify/pull/35077
* refactor: replace bare dict with dict[str, Any] in ops trace providers by @wdeveloper16 in https://github.com/langgenius/dify/pull/35082
* refactor: replace bare dict with dict[str, Any] in model_manager and … by @wdeveloper16 in https://github.com/langgenius/dify/pull/35083
* refactor: replace bare dict with dict[str, Any] in app task_entities … by @wdeveloper16 in https://github.com/langgenius/dify/pull/35084
* refactor: replace bare dict with dict[str, Any] in openai_moderation by @jimcody1995 in https://github.com/langgenius/dify/pull/35079
* refactor: replace bare dict with dict[str, Any] in app_config managers by @wdeveloper16 in https://github.com/langgenius/dify/pull/35087
* test: migrate trigger integration tests to SQLAlchemy 2.0 select API by @bohdansolovie in https://github.com/langgenius/dify/pull/35081
* refactor: replace bare dict with typed annotations in controllers by @dataCenter430 in https://github.com/langgenius/dify/pull/35095
* refactor(api): type _jsonify_form_definition payload with FormDefinitionPayload TypedDict by @aviu16 in https://github.com/langgenius/dify/pull/35094
* test: migrate remove_app_and_related_data integration tests to SQLAlchemy 2.0 APIs by @bohdansolovie in https://github.com/langgenius/dify/pull/35092
* test: migrate mail and segment indexing integration tests to SQLAlchemy 2.0 APIs by @bohdansolovie in https://github.com/langgenius/dify/pull/35091
* refactor: replace bare dict with typed annotations in core plugin module by @dataCenter430 in https://github.com/langgenius/dify/pull/35096
* test: migrate mail_human_input_delivery cleanup fixture to SQLAlchemy 2.0 delete API by @bohdansolovie in https://github.com/langgenius/dify/pull/35090
* test(e2e): improve auth coverage and authoring support by @lyzno1 in https://github.com/langgenius/dify/pull/34920
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/35066
* fix(web): handle IME composition in DelimiterInput by @plind-junior in https://github.com/langgenius/dify/pull/34660
* refactor: replace bare dict with dict[str, Any] in VDB providers and libs by @wdeveloper16 in https://github.com/langgenius/dify/pull/35123
* refactor: replace bare dict with dict[str, Any] in services grab-bag by @wdeveloper16 in https://github.com/langgenius/dify/pull/35112
* refactor: replace bare dict with dict[str, Any] in rag_pipeline and datasource_provider services by @wdeveloper16 in https://github.com/langgenius/dify/pull/35107
* refactor: replace bare dict with dict[str, Any] in entities, workflow nodes, and tasks by @wdeveloper16 in https://github.com/langgenius/dify/pull/35109
* refactor: replace bare dict with dict[str, Any] in VDB providers by @wdeveloper16 in https://github.com/langgenius/dify/pull/35110
* refactor: replace bare dict with dict[str, Any] in core provider services and misc modules by @wdeveloper16 in https://github.com/langgenius/dify/pull/35124
* refactor: replace bare dict with dict[str, Any] in core tools and runtime by @wdeveloper16 in https://github.com/langgenius/dify/pull/35111
* fix: Compatibility issues with the summary index feature when using the weaviate vector database by @FFXN in https://github.com/langgenius/dify/pull/35052
* feat(goto-anything): recent items, /go navigation command, deep app sub-sections by @crazywoola in https://github.com/langgenius/dify/pull/35078
* chore: Add global fetch mock in vitest.setup.ts to suppress happy-dom ECONNREFUSED errors by @Copilot in https://github.com/langgenius/dify/pull/35131
* chore: remove unused Ruff ignore rules by @WH-2099 in https://github.com/langgenius/dify/pull/35102
* test: split merged API test modules and remove F811 ignore by @WH-2099 in https://github.com/langgenius/dify/pull/35105
* chore(deps): bump pillow from 12.1.1 to 12.2.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35119
* refactor(web): align tooltip content class props by @lyzno1 in https://github.com/langgenius/dify/pull/35135
* refactor(web): remove highPriority modal stacking by @lyzno1 in https://github.com/langgenius/dify/pull/35132
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35134
* chore: allow disabling app-level PostgreSQL timezone injection by @hjlarry in https://github.com/langgenius/dify/pull/35129
* chore(deps): update pyarrow to version 23.0.1 and add override deps by @BenjaminX in https://github.com/langgenius/dify/pull/35137
* refactor: replace bare dict with typed annotations in core tools module by @dataCenter430 in https://github.com/langgenius/dify/pull/35098
* refactor: replace bare dict with typed annotations in app_config/extension/provider by @dataCenter430 in https://github.com/langgenius/dify/pull/35099
* refactor: replace bare dict with typed annotations in llm_generator and prompt by @dataCenter430 in https://github.com/langgenius/dify/pull/35100
* refactor: replace bare dict with typed annotations in core rag module by @dataCenter430 in https://github.com/langgenius/dify/pull/35097
* refactor: convert plugin permission if/elif to match/case (#30001) by @aether-png in https://github.com/langgenius/dify/pull/35140
* refactor: use sessionmaker in tool_label_manager.py by @HeYin-OS in https://github.com/langgenius/dify/pull/34895
* refactor: convert InvokeFrom if/elif to match/case by @aether-png in https://github.com/langgenius/dify/pull/35143
* test: migrate document indexing task tests to SQLAlchemy 2.0 select API by @bohdansolovie in https://github.com/langgenius/dify/pull/35145
* test: migrate clean_dataset integration tests to SQLAlchemy 2.0 APIs by @bohdansolovie in https://github.com/langgenius/dify/pull/35146
* chore: clarify tracing error copy to direct users to the Tracing tab by @iamjoel in https://github.com/langgenius/dify/pull/35153
* fix: doc modal hidden by config modal by @iamjoel in https://github.com/langgenius/dify/pull/35157
* refactor: replace bare dict with dict[str, Any] in model provider service and core modules by @wdeveloper16 in https://github.com/langgenius/dify/pull/35122
* feat: support configurable redis key prefix by @Blackoutta in https://github.com/langgenius/dify/pull/35139
* chore: url in tool description support clicking jump directly by @iamjoel in https://github.com/langgenius/dify/pull/35163
* refactor(web): re-design button api by @lyzno1 in https://github.com/langgenius/dify/pull/35166
* test: migrate task integration tests to SQLAlchemy 2.0 query APIs by @bohdansolovie in https://github.com/langgenius/dify/pull/35170
* test: migrate clean_notion_document integration tests to SQLAlchemy 2… by @bohdansolovie in https://github.com/langgenius/dify/pull/35147
* ci: Fix path in coverage markdown rendering step by @asukaminato0721 in https://github.com/langgenius/dify/pull/35136
* refactor(web): replace Button destructive boolean with tone semantic axis by @lyzno1 in https://github.com/langgenius/dify/pull/35176
* test: migrate conversation read timestamp SQL test to Testcontainers (#32454) by @bohdansolovie in https://github.com/langgenius/dify/pull/35177
* refactor(web): migrate confirm dialogs to base/ui/alert-dialog by @CodingOnStar in https://github.com/langgenius/dify/pull/35127
* refactor: replace bare dict with dict[str, Any] in RAG and service unit tests by @wdeveloper16 in https://github.com/langgenius/dify/pull/35184
* refactor: replace bare dict with dict[str, Any] in enterprise telemetry, external data tool, and moderation tests by @wdeveloper16 in https://github.com/langgenius/dify/pull/35185
* test: migrate web site controller tests to Testcontainers (#32454) by @bohdansolovie in https://github.com/langgenius/dify/pull/35180
* refactor: replace bare dict with dict[str, Any] in controller and core unit tests by @wdeveloper16 in https://github.com/langgenius/dify/pull/35181
* refactor: replace bare dict with dict[str, Any] in models, providers, extensions, libs, and test utilities by @wdeveloper16 in https://github.com/langgenius/dify/pull/35186
* refactor(api): migrate workspace account marshal_with responses to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35190
* refactor(api): migrate console extension endpoint from api.model to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35189
* test: remove document service status mock tests superseded by testcontainers by @jamesrayammons in https://github.com/langgenius/dify/pull/35197
* refactor(api): migrate dataset hit-testing response model to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35192
* refactor(api): add null safety to extractor_processor and firecrawl by @tmimmanuel in https://github.com/langgenius/dify/pull/35209
* refactor: replace bare dict with dict[str, Any] in services unit test helpers by @wdeveloper16 in https://github.com/langgenius/dify/pull/35182
* refactor(api): migrate console installed-app list response to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35202
* refactor(api): migrate console workflow app-log responses to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35201
* refactor: replace bare dict with dict[str, Any] in services and hosti… by @wdeveloper16 in https://github.com/langgenius/dify/pull/35211
* refactor: replace bare dict with dict[str, Any] in response converter… by @wdeveloper16 in https://github.com/langgenius/dify/pull/35212
* refactor(api): migrate service api workflow responses from marshal_with to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35195
* refactor(api): migrate console message responses from marshal_with to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35204
* refactor(api): migrate service conversation-variable responses to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35205
* refactor(api): migrate console recommended-app response to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35206
* refactor(api): migrate workspace current response from marshal_with to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35207
* refactor(api): migrate console conversation variables response model to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35193
* test: migrate dataset service dataset mock tests to testcontainers by @jamesrayammons in https://github.com/langgenius/dify/pull/35194
* refactor(api): migrate console workflow-trigger responses to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35200
* test: migrate schedule service mock tests to testcontainers by @jamesrayammons in https://github.com/langgenius/dify/pull/35196
* test: remove legacy python3 code executor integration test by @jamesrayammons in https://github.com/langgenius/dify/pull/35223
* test: remove legacy code executor integration test by @jamesrayammons in https://github.com/langgenius/dify/pull/35224
* fix: import DSL and copy app not work by @hjlarry in https://github.com/langgenius/dify/pull/35239
* fix: open restore version panel raise 500 by @hjlarry in https://github.com/langgenius/dify/pull/35240
* test: migrate Service API site controller tests to Testcontainers (#32454) by @Eruis2579 in https://github.com/langgenius/dify/pull/35183
* refactor(ui): decouple CSS dependencies and improve test quality by @lyzno1 in https://github.com/langgenius/dify/pull/35242
* fix: Change 'commit' to 'flush' to prevent subsequent transaction fai… by @zyssyz123 in https://github.com/langgenius/dify/pull/35243
* fix(dataset): fix dataset list overlay issue by @WTW0313 in https://github.com/langgenius/dify/pull/35244
* test: migrate webhook service additional mock tests to testcontainers by @jamesrayammons in https://github.com/langgenius/dify/pull/35199
* feat: tidb endpoint by @zyssyz123 in https://github.com/langgenius/dify/pull/35158
* feat(web): unify create_app tracking and persist external attribution by @CodingOnStar in https://github.com/langgenius/dify/pull/35241
* fix: remove enable for get by @zyssyz123 in https://github.com/langgenius/dify/pull/35245
* test: remove legacy storage key loader integration test by @jamesrayammons in https://github.com/langgenius/dify/pull/35225
* test: remove legacy jinja2 code executor integration test by @jamesrayammons in https://github.com/langgenius/dify/pull/35222
* test: remove legacy workflow draft variable api test by @jamesrayammons in https://github.com/langgenius/dify/pull/35226
* test: remove legacy trigger provider permissions test by @jamesrayammons in https://github.com/langgenius/dify/pull/35227
* refactor(api): migrate console tag responses from marshal_with to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35208
* feat(ui): scaffold @langgenius/dify-ui and migrate design tokens by @lyzno1 in https://github.com/langgenius/dify/pull/35256
* fix(web): include dify-ui workspace package in docker install filter by @lyzno1 in https://github.com/langgenius/dify/pull/35268
* refactor(web): align Switch API with Base UI naming convention by @lyzno1 in https://github.com/langgenius/dify/pull/35269
* test(types): replace Account/Tenant status string literals with enum values by @xr843 in https://github.com/langgenius/dify/pull/35267
* chore(api): prune redundant direct dependency declarations by @WH-2099 in https://github.com/langgenius/dify/pull/35272
* feat: collaboration by @hjlarry in https://github.com/langgenius/dify/pull/30781
* fix: add miss celery queue by @fatelei in https://github.com/langgenius/dify/pull/35282
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35283
* chore(deps): bump hono from 4.12.12 to 4.12.14 by @dependabot[bot] in https://github.com/langgenius/dify/pull/35287
* chore(deps): bump langsmith from 0.7.30 to 0.7.31 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35288
* chore(deps): bump pypdf from 6.10.0 to 6.10.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35273
* test: migrate duplicate and vector index task integration tests to SQLAlchemy 2.0 APIs by @bohdansolovie in https://github.com/langgenius/dify/pull/35292
* chore(deps): upgrade vite-plus to 0.1.18 by @lyzno1 in https://github.com/langgenius/dify/pull/35300
* refactor(api): add BaseModel conversation variable schemas by @ai-hpc in https://github.com/langgenius/dify/pull/35296
* chore(deps): bump dompurify from 3.3.3 to 3.4.0 by @dependabot[bot] in https://github.com/langgenius/dify/pull/35286
* refactor(api): add BaseModel workflow field schemas by @ai-hpc in https://github.com/langgenius/dify/pull/35297
* refactor(web): redesign Select component and migrate WorkplaceSelector by @lyzno1 in https://github.com/langgenius/dify/pull/35293
* refactor(api): migrate console conversation responses to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35294
* refactor(web): migrate base/popoversto ui/dropdown-menu and ui/select by @CodingOnStar in https://github.com/langgenius/dify/pull/35278
* fix(web): set app card dropdown menu to non-modal by @lyzno1 in https://github.com/langgenius/dify/pull/35302
* fix: http node key value type dropdown by @hjlarry in https://github.com/langgenius/dify/pull/35304
* fix: apply score threshold after reranking in hybrid search by @aayushbaluni in https://github.com/langgenius/dify/pull/35263
* refactor(web): unify Base UI component props to namespace types by @lyzno1 in https://github.com/langgenius/dify/pull/35306
* test: migrate clean notion task tests to SQLAlchemy 2.0 APIs by @jimcody1995 in https://github.com/langgenius/dify/pull/35159
* test: migrate conversation service mock tests to testcontainers by @jamesrayammons in https://github.com/langgenius/dify/pull/35198
* chore: reorg imports by @wylswz in https://github.com/langgenius/dify/pull/35308
* perf(web): optimize first-screen rendering performance by @lyzno1 in https://github.com/langgenius/dify/pull/35313
* fix(web): add destructive hover background to menu item components by @lyzno1 in https://github.com/langgenius/dify/pull/35322
* chore: enable noUncheckedIndexedAccess by @hyoban in https://github.com/langgenius/dify/pull/35178
* refactor(web): align UI component APIs with shadcn v4 best practices by @lyzno1 in https://github.com/langgenius/dify/pull/35328
* chore: workspace level typecheck by @hyoban in https://github.com/langgenius/dify/pull/35329
* chore: workspace lint by @hyoban in https://github.com/langgenius/dify/pull/35331
* chore: auto fix for tailwind rules by @hyoban in https://github.com/langgenius/dify/pull/35332
* refactor(web): quality closure pass on base UI primitives by @lyzno1 in https://github.com/langgenius/dify/pull/35333
* feat(web): add tracking for app preview events in AppCard component by @CodingOnStar in https://github.com/langgenius/dify/pull/35347
* chore(deps): bump pypdf from 6.10.1 to 6.10.2 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35339
* chore(deps): bump mako from 1.3.10 to 1.3.11 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35340
* chore(deps): bump authlib from 1.6.9 to 1.6.11 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35341
* chore(api): migrate event handlers to use Session(db.engine) by @jerryzai in https://github.com/langgenius/dify/pull/35234
* refactor(api): migrate console mcp-server responses to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35219
* docs(web): add Storybook stories for overlay and select primitives by @lyzno1 in https://github.com/langgenius/dify/pull/35334
* refactor(api): migrate dataset document response schemas to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35298
* fix(web): stop Splash after useUserProfile errors by @shaun0927 in https://github.com/langgenius/dify/pull/35326
* refactor: use sessionmaker in api_tools_manage_service.py by @HeYin-OS in https://github.com/langgenius/dify/pull/34892
* refactor(web): replace portal component with DropdownMenu in various components by @CodingOnStar in https://github.com/langgenius/dify/pull/35319
* fix: scope plugin inner API end-user lookup by tenant by @shaun0927 in https://github.com/langgenius/dify/pull/35325
* test: add API seeding infrastructure and app creation E2E scenarios by @Jingyi-Dify in https://github.com/langgenius/dify/pull/35276
* refactor: migrate DocumentSegmentSummary to TypeBase by @sxxtony in https://github.com/langgenius/dify/pull/34862
* test: migrate dataset service document mock tests to testcontainers by @jamesrayammons in https://github.com/langgenius/dify/pull/35191
* fix: guard against KeyError in update_prompt_message_tool loop by @kuishou68 in https://github.com/langgenius/dify/pull/35150
* fix(web): stabilize workflow node panel operator dropdown trigger by @CodingOnStar in https://github.com/langgenius/dify/pull/35352
* fix: move remote credential validation outside DB session to prevent … by @zyssyz123 in https://github.com/langgenius/dify/pull/35350
* refactor(api): move trace providers by @wylswz in https://github.com/langgenius/dify/pull/35144
* chore(api): migrate file factory builders and account commands to use Session(db.engine) by @jerryzai in https://github.com/langgenius/dify/pull/35236
* refactor(api): type pipeline template retrieval dicts with TypedDict by @YB0y in https://github.com/langgenius/dify/pull/34874
* fix: raise chat settings select dropdown above dialog by @hyl64 in https://github.com/langgenius/dify/pull/35357
* fix: guard chat file preview rendering when mime type is missing by @hyl64 in https://github.com/langgenius/dify/pull/35355
* refactor(dify-ui): finish primitive migration from web/base/ui to @langgenius/dify-ui by @lyzno1 in https://github.com/langgenius/dify/pull/35349
* chore(api): migrate mail task and OAuth data source to use Session(db… by @jerryzai in https://github.com/langgenius/dify/pull/35235
* fix(web): keep workflow panel operator anchor mounted during menu close animation by @lyzno1 in https://github.com/langgenius/dify/pull/35363
* feat: copy nodes cross apps by @hjlarry in https://github.com/langgenius/dify/pull/33273
* ci: Add conditional comment creation for diff by @asukaminato0721 in https://github.com/langgenius/dify/pull/35179
* feat(explore): implement banner impression tracking and refactor tracking logic by @CodingOnStar in https://github.com/langgenius/dify/pull/35369
* test: browser mode for dify ui by @hyoban in https://github.com/langgenius/dify/pull/35365
* feat(dify-ui): Meter primitive and billing adoption by @lyzno1 in https://github.com/langgenius/dify/pull/35380
* chore(api): adapt Graphon 0.2.2 upgrade by @WH-2099 in https://github.com/langgenius/dify/pull/35377
* chore(web): drop delay={0} from tooltip triggers and retype DocName by @lyzno1 in https://github.com/langgenius/dify/pull/35382
* fix(web): remove dynamic import from Goto Anything to restore cmd+k by @lyzno1 in https://github.com/langgenius/dify/pull/35383
* chore: Replace 'db' with 'sa' for SQLAlchemy compatibility by @asukaminato0721 in https://github.com/langgenius/dify/pull/35373
* ci: Update pyrefly dependency version to 0.61.1 by @asukaminato0721 in https://github.com/langgenius/dify/pull/35391
* fix(web): prevent infinite render loop on /apps page by @lyzno1 in https://github.com/langgenius/dify/pull/35393
* refactor(web): convert file-local Step enum to as-const in website crawlers 🤖🤖🤖 by @jeanibarz in https://github.com/langgenius/dify/pull/34565
* fix: complete assigned variable reference descriptions by @hjlarry in https://github.com/langgenius/dify/pull/35406
* refactor: remove file upload migration tip by @hjlarry in https://github.com/langgenius/dify/pull/35409
* chore: improve conversation opener by @hjlarry in https://github.com/langgenius/dify/pull/35403
* fix: accept icon type in app icon updates by @hyl64 in https://github.com/langgenius/dify/pull/35360
* fix: prevent double /v1 in MCP server URL causing 404 authorization failure by @dev-miro26 in https://github.com/langgenius/dify/pull/34596
* refactor(web): unify app-shell bootstrap on TanStack Query + Next.js route conventions by @lyzno1 in https://github.com/langgenius/dify/pull/35394
* refactor(api): flatten nested conditionals and clean up token helpers by @bitcompass in https://github.com/langgenius/dify/pull/34835
* chore: migrate workflow node title tooltip by @hjlarry in https://github.com/langgenius/dify/pull/35418
* feat(amplitude): integrate AmplitudeProvider and refactor initialization logic by @CodingOnStar in https://github.com/langgenius/dify/pull/35415
* fix: handle numpy scalar types in safe_json_value by @avasis-ai in https://github.com/langgenius/dify/pull/35389
* docs(frontend): align docs and comments by @lyzno1 in https://github.com/langgenius/dify/pull/35364
* fix: missing icon from iconify set by @hyoban in https://github.com/langgenius/dify/pull/35420
* chore: export dsl add loading by @iamjoel in https://github.com/langgenius/dify/pull/35427
* fix(auth): enforce phase-bound change-email token flow (GHSA-4q3w-q5mc-45rq) by @zyssyz123 in https://github.com/langgenius/dify/pull/35425
* chore(deps): bump json-repair from 0.59.2 to 0.59.4 in /api in the python-packages group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35404
* chore(deps): bump google-cloud-aiplatform from 1.147.0 to 1.148.1 in /api in the google group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35397
* chore(deps-dev): bump xinference-client from 2.4.0 to 2.5.0 in /api in the vdb group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35399
* chore(deps): bump the storage group in /api with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35398
* ci: [codex] Remove anti-slop GitHub Actions workflow by @laipz8200 in https://github.com/langgenius/dify/pull/35432
* chore(deps): bump the github-actions-dependencies group across 1 directory with 7 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35435
* chore: fix oxlint warnings (unused variables and imports) by @sicnuyudidi in https://github.com/langgenius/dify/pull/35249
* fix: increase maximum PostgreSQL connections to 200 by @Mutantpenguin in https://github.com/langgenius/dify/pull/35439
* refactor(web): continue replacing PortalToFollowElem with Popover components by @CodingOnStar in https://github.com/langgenius/dify/pull/35431
* feat(dify-ui): add PreviewCard primitive by @lyzno1 in https://github.com/langgenius/dify/pull/35434
* fix(workflow): cache provider configurations during graph init by @laipz8200 in https://github.com/langgenius/dify/pull/35447
* refactor(api): tighten core rag typing batch 1 by @tmimmanuel in https://github.com/langgenius/dify/pull/35210
* chore: resolve oxlint warnings across web and SDK by @agenthaulk in https://github.com/langgenius/dify/pull/34540
* refactor(billing): use Infotip for UsageInfo help icon, migrate storage tooltip to dify-ui by @lyzno1 in https://github.com/langgenius/dify/pull/35448
* fix: webscaper sometime not work by @hjlarry in https://github.com/langgenius/dify/pull/35450
* refactor: replace deprecated Iterator with Generator in contextmanagers #35433 by @iAbhi001 in https://github.com/langgenius/dify/pull/35441
* feat: support slash variable filtering in prompt editor by @iamjoel in https://github.com/langgenius/dify/pull/35460
* chore(deps): bump base ui to 1.4.1 by @lyzno1 in https://github.com/langgenius/dify/pull/35459
* chore(deps-dev): bump the dev group in /api with 6 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35402
* chore(deps): bump vite-plus to 0.1.19 by @lyzno1 in https://github.com/langgenius/dify/pull/35462
* fix(plugin): persist tenant plugin auto-upgrade strategy changes by @zyssyz123 in https://github.com/langgenius/dify/pull/35464
* refactor: migrate from PortalToFollowElem to Popover component across various components by @CodingOnStar in https://github.com/langgenius/dify/pull/35454
* chore: port 2 api as deprecated by @asukaminato0721 in https://github.com/langgenius/dify/pull/35261
* chore(deps): bump lxml from 6.0.2 to 6.1.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35470
* fix: bump pyrefly version by @JiwaniZakir in https://github.com/langgenius/dify/pull/33702
* chore: migrate type-check from tsc to tsgo across all workspaces by @lyzno1 in https://github.com/langgenius/dify/pull/35488
* chore: update 3 api by @asukaminato0721 in https://github.com/langgenius/dify/pull/35481
* fix(web): keep Add model dialog footer visible when form overflows by @crazywoola in https://github.com/langgenius/dify/pull/35490
* feat: improve follow-up settings by @hjlarry in https://github.com/langgenius/dify/pull/35442
* refactor: migrate base/select to dify-ui/select by @CodingOnStar in https://github.com/langgenius/dify/pull/35487
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35492
* refactor: enhance node handle components with opacity transitions and add tests for visibility behavior by @CodingOnStar in https://github.com/langgenius/dify/pull/35494
* fix(plugin): handle file input reset and improve local installer close functionality by @CodingOnStar in https://github.com/langgenius/dify/pull/35506
* chore: add script to generate openapi v2 json and add in README #35474 by @asukaminato0721 in https://github.com/langgenius/dify/pull/35477
* test(auth): add sign-in smoke test and core validation  by @Jingyi-Dify in https://github.com/langgenius/dify/pull/35501
* test(e2e): add publish app happy path scenario by @Jingyi-Dify in https://github.com/langgenius/dify/pull/35503
* fix(web): restore "Copied" feedback state on copy buttons by @lyzno1 in https://github.com/langgenius/dify/pull/35513
* fix(web): three small UX fixes on /datasets and /plugins by @lyzno1 in https://github.com/langgenius/dify/pull/35514
* fix: improve collaboration by @hjlarry in https://github.com/langgenius/dify/pull/35309
* test(e2e): add app detail navigation and redirect scenarios by @Jingyi-Dify in https://github.com/langgenius/dify/pull/35502
* fix: improve note node by @hjlarry in https://github.com/langgenius/dify/pull/35461
* fix: update node handle opacity and pointer events behavior in components and tests by @CodingOnStar in https://github.com/langgenius/dify/pull/35525
* refactor(api): fix pyright errors in jieba, milvus, couchbase, oracle, and router by @tmimmanuel in https://github.com/langgenius/dify/pull/34938
* feat: support key up and down to select variable item by @iamjoel in https://github.com/langgenius/dify/pull/35527
* fix: sync 35528 by @wylswz in https://github.com/langgenius/dify/pull/35539
* chore(dify-ui): update tooltip and infotip migration by @lyzno1 in https://github.com/langgenius/dify/pull/35543
* feat: add service api of HITL by @hjlarry in https://github.com/langgenius/dify/pull/32826
* feat: marketplace and oauth fixes by @RockChinQ in https://github.com/langgenius/dify/pull/35509
* fix: app icon could not only change background by @hjlarry in https://github.com/langgenius/dify/pull/35537
* fix: suggest questions more max_tokens by @hjlarry in https://github.com/langgenius/dify/pull/35533
* test(dify-ui): disable base ui animations globally by @lyzno1 in https://github.com/langgenius/dify/pull/35467
* fix: right click node not display the node detail panel by @hjlarry in https://github.com/langgenius/dify/pull/35554
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35552
* chore: fix use select style api in orm by @asukaminato0721 in https://github.com/langgenius/dify/pull/35531
* feat: refactor modals to use Dialog component and add tests for ApiKeyModal and ProviderConfigModal by @CodingOnStar in https://github.com/langgenius/dify/pull/35550
* chore: port 2 api by @asukaminato0721 in https://github.com/langgenius/dify/pull/35542
* docs: fix Kubernetes deployment wording by @MukundaKatta in https://github.com/langgenius/dify/pull/35547
* test: add P0 workflow run, publish, and share scenarios   by @Jingyi-Dify in https://github.com/langgenius/dify/pull/35559
* fix(api): declare flask dependency by @WH-2099 in https://github.com/langgenius/dify/pull/35568
* refactor: port ChildChunk by @asukaminato0721 in https://github.com/langgenius/dify/pull/30920
* chore(deps): bump gitpython from 3.1.45 to 3.1.47 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35570
* refactor: port MessageAnnotation by @asukaminato0721 in https://github.com/langgenius/dify/pull/31005
* chore(ci): move image builds to depot by @goocarlos in https://github.com/langgenius/dify/pull/35575
* refactor: quota v3 integration by @hj24 in https://github.com/langgenius/dify/pull/35436
* chore(deps): bump anthropics/claude-code-action from 1.0.101 to 1.0.107 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35579
* chore(deps-dev): bump the dev group in /api with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35581
* chore(deps): bump psycopg2-binary from 2.9.11 to 2.9.12 in /api in the database group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35577
* chore(deps): bump the opentelemetry group in /api with 7 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35576
* chore(deps-dev): bump xinference-client from 2.5.0 to 2.7.0 in /api in the vdb group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35580
* chore(deps): bump the storage group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35578
* chore(ci): increase tsslint heap limit by @lyzno1 in https://github.com/langgenius/dify/pull/35591
* refactor(web): migrate simple overlay tooltips by @lyzno1 in https://github.com/langgenius/dify/pull/35588
* fix(web): migrate variable type selector overlay by @hjlarry in https://github.com/langgenius/dify/pull/35590
* fix: improve variable picker text width allocation by @hjlarry in https://github.com/langgenius/dify/pull/35587
* ci: upgrade web test runners by @lyzno1 in https://github.com/langgenius/dify/pull/35593
* fix: enhance file uploader with billing support and update translations by @WTW0313 in https://github.com/langgenius/dify/pull/35583
* fix: school name can not input by @iamjoel in https://github.com/langgenius/dify/pull/35597
* chore: update dependency catalog by @lyzno1 in https://github.com/langgenius/dify/pull/35594
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35595
* fix: keep cleanup tasks resilient to billing API failures by @zyssyz123 in https://github.com/langgenius/dify/pull/35600
* fix: download and upload package before invoking upgrade in auto-upgrade task by @BenjaminX in https://github.com/langgenius/dify/pull/35599
* refactor: move SegmentAttachmentBinding and UploadFile to TypeBase by @asukaminato0721 in https://github.com/langgenius/dify/pull/30218
* test: add Baidu OBS storage unit tests by @jimmyzhuu in https://github.com/langgenius/dify/pull/34330
* fix: show full checklist message tooltip instead of truncated by @hjlarry in https://github.com/langgenius/dify/pull/35613
* fix: align auto update time picker to the right by @hjlarry in https://github.com/langgenius/dify/pull/35621
* fix: align object value remove button of chat variable by @hjlarry in https://github.com/langgenius/dify/pull/35616
* fix(test): register baidu_obs mock as pytest plugin by @lin-snow in https://github.com/langgenius/dify/pull/35618
* fix: prioritize URL conversation_id over localStorage in embedded chatbot by @treekimm in https://github.com/langgenius/dify/pull/35519
* refactor(web): improve a11y and design-system consistency for date/time picker and auto-update strategy picker by @lyzno1 in https://github.com/langgenius/dify/pull/35627
* refactor: improve scrollbar handling in plugin and model selector UI by @lyzno1 in https://github.com/langgenius/dify/pull/35630
* test: cover shared workflow app run by @lyzno1 in https://github.com/langgenius/dify/pull/35634
* fix(web): filter model selector by model name by @WTW0313 in https://github.com/langgenius/dify/pull/35624
* fix(ci): wait for mysql to accept queries before db migration by @lin-snow in https://github.com/langgenius/dify/pull/35631
* chore: port one api by @asukaminato0721 in https://github.com/langgenius/dify/pull/35609
* fix: hit-testing response failed because of Pydantic check. by @FFXN in https://github.com/langgenius/dify/pull/35640
* chore: correction of ru translation by @knyazz in https://github.com/langgenius/dify/pull/35645
* fix: flaky WordExtractor close test in CI by @kenwoodjw in https://github.com/langgenius/dify/pull/35652
* fix: refresh MCP tool metadata after updates and align App DSL test stubs by @hyl64 in https://github.com/langgenius/dify/pull/35354
* fix: improve workflow as tool overlays by @hjlarry in https://github.com/langgenius/dify/pull/35661
* chore: bump version to 1.14.0 by @wylswz in https://github.com/langgenius/dify/pull/35662

## New Contributors
* @faizkhairi made their first contribution in https://github.com/langgenius/dify/pull/34080
* @Maa-ly made their first contribution in https://github.com/langgenius/dify/pull/34146
* @Fronut made their first contribution in https://github.com/langgenius/dify/pull/34201
* @jigangz made their first contribution in https://github.com/langgenius/dify/pull/34221
* @ZZITE made their first contribution in https://github.com/langgenius/dify/pull/34224
* @fisherOne1 made their first contribution in https://github.com/langgenius/dify/pull/33740
* @wangji0923 made their first contribution in https://github.com/langgenius/dify/pull/33853
* @owldev127 made their first contribution in https://github.com/langgenius/dify/pull/34185
* @dominciyue made their first contribution in https://github.com/langgenius/dify/pull/33927
* @SeasonPilot made their first contribution in https://github.com/langgenius/dify/pull/33105
* @EndlessLucky made their first contribution in https://github.com/langgenius/dify/pull/34151
* @jimmyzhuu made their first contribution in https://github.com/langgenius/dify/pull/34328
* @LikiosSedo made their first contribution in https://github.com/langgenius/dify/pull/34436
* @agenthaulk made their first contribution in https://github.com/langgenius/dify/pull/34450
* @mvanhorn made their first contribution in https://github.com/langgenius/dify/pull/33473
* @jakearmstrong59 made their first contribution in https://github.com/langgenius/dify/pull/34589
* @iamPulakesh made their first contribution in https://github.com/langgenius/dify/pull/34614
* @aliworksx08 made their first contribution in https://github.com/langgenius/dify/pull/34607
* @corevibe555 made their first contribution in https://github.com/langgenius/dify/pull/34633
* @carlos4s made their first contribution in https://github.com/langgenius/dify/pull/34693
* @s-kawamura-upgrade made their first contribution in https://github.com/langgenius/dify/pull/34719
* @zhangbububu made their first contribution in https://github.com/langgenius/dify/pull/34720
* @dataCenter430 made their first contribution in https://github.com/langgenius/dify/pull/34769
* @volcano303 made their first contribution in https://github.com/langgenius/dify/pull/34751
* @BrianWang1990 made their first contribution in https://github.com/langgenius/dify/pull/34515
* @jonathanchang31 made their first contribution in https://github.com/langgenius/dify/pull/34795
* @balancetheworld made their first contribution in https://github.com/langgenius/dify/pull/34804
* @ai-hpc made their first contribution in https://github.com/langgenius/dify/pull/34859
* @sxxtony made their first contribution in https://github.com/langgenius/dify/pull/34806
* @jeanibarz made their first contribution in https://github.com/langgenius/dify/pull/34868
* @plind-junior made their first contribution in https://github.com/langgenius/dify/pull/34661
* @YgorLeal made their first contribution in https://github.com/langgenius/dify/pull/34786
* @HamzaSwitch made their first contribution in https://github.com/langgenius/dify/pull/34909
* @wdeveloper16 made their first contribution in https://github.com/langgenius/dify/pull/34960
* @AlsoTheZv3n made their first contribution in https://github.com/langgenius/dify/pull/34967
* @thegdsks made their first contribution in https://github.com/langgenius/dify/pull/34988
* @aviu16 made their first contribution in https://github.com/langgenius/dify/pull/34983
* @HeYin-OS made their first contribution in https://github.com/langgenius/dify/pull/34896
* @dev-miro26 made their first contribution in https://github.com/langgenius/dify/pull/34824
* @LincolnBurrows2017 made their first contribution in https://github.com/langgenius/dify/pull/33435
* @KeWang0622 made their first contribution in https://github.com/langgenius/dify/pull/35047
* @xingarr made their first contribution in https://github.com/langgenius/dify/pull/27838
* @samrusani made their first contribution in https://github.com/langgenius/dify/pull/35004
* @jimcody1995 made their first contribution in https://github.com/langgenius/dify/pull/35079
* @bohdansolovie made their first contribution in https://github.com/langgenius/dify/pull/35081
* @aether-png made their first contribution in https://github.com/langgenius/dify/pull/35140
* @jamesrayammons made their first contribution in https://github.com/langgenius/dify/pull/35197
* @Eruis2579 made their first contribution in https://github.com/langgenius/dify/pull/35183
* @aayushbaluni made their first contribution in https://github.com/langgenius/dify/pull/35263
* @jerryzai made their first contribution in https://github.com/langgenius/dify/pull/35234
* @shaun0927 made their first contribution in https://github.com/langgenius/dify/pull/35326
* @kuishou68 made their first contribution in https://github.com/langgenius/dify/pull/35150
* @hyl64 made their first contribution in https://github.com/langgenius/dify/pull/35357
* @bitcompass made their first contribution in https://github.com/langgenius/dify/pull/34835
* @avasis-ai made their first contribution in https://github.com/langgenius/dify/pull/35389
* @sicnuyudidi made their first contribution in https://github.com/langgenius/dify/pull/35249
* @Mutantpenguin made their first contribution in https://github.com/langgenius/dify/pull/35439
* @iAbhi001 made their first contribution in https://github.com/langgenius/dify/pull/35441
* @JiwaniZakir made their first contribution in https://github.com/langgenius/dify/pull/33702
* @MukundaKatta made their first contribution in https://github.com/langgenius/dify/pull/35547
* @treekimm made their first contribution in https://github.com/langgenius/dify/pull/35519
* @knyazz made their first contribution in https://github.com/langgenius/dify/pull/35645

**Full Changelog**: https://github.com/langgenius/dify/compare/1.13.3...1.14.0

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.14.0` · 2026-04-29 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
