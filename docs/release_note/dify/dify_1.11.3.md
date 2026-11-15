---
title: "dify 1.11.3"
project: "dify"
repo: "langgenius/dify"
tag: "1.11.3"
version: "1.11.3"
published: "2026-01-13"
type: "patch"
lang: "en"
summary: "Our latest release, v1.11.3, brings to you a slew of bug fixes and features focused on performance, functionality, and user experience. Here's a look at what's changed"
---

# dify 1.11.3

## 🚀 What's New in v1.11.3?

Our latest release, v1.11.3, brings to you a slew of bug fixes and features focused on performance, functionality, and user experience. Here's a look at what's changed:

### 🎬 New Features

- **MCP Tool Enhancements**: Added support for `embeddedResource` and made MCP tools display directly for quicker access by @IthacaDream and @fatelei in #30261 and #30019.
- **Batch Operations**: Introduced re-index operation in document batch operations by @fatelei in #30275.
- **Agent and Workflow Updates**: New AgentMaxIterationError and enhancements in app mode checks make workflows and agents more robust by @fatelei.
- **OAuth Integration**: Frontend login now supports `oauth_new_user` flag by @zyssyz123 in #30370.
- **PDF Extraction**: Improved RAG extractor to support image extraction from PDFs by @yangzq50 in #30399.
- **Storage and Archive**: Added archive storage client and config settings by @hjlarry in #30422.
- **Translation and Internationalization**: Added initial RSC support for translations for a global audience by @hyoban in #30596.

### 🛠️ Bug Fixes

- **Redis and Cache**: Used pipelines to optimize Redis cache deletions, enhancing speed and reliability by @fatelei in #30159.
- **UI/UX Fixes**: From preventing page crashes due to permission errors to fixing flicking button sizes, multiple UI-related issues have been addressed by various contributors.
- **Data Operations**: Fixed dataset access errors and improved error handling in batch operations by @zhaobingshuang and others.
- **Performance**: Released runtime state references under high load to prevent potential memory leaks by @SherlockShemol in #30236.
- **Security**: Rectified CORS and SSL issues that could've affected bot integrations and Celery operations.
- **Internationalization**: Korean translations and content were updated for accuracy by @sangyun-han in #30347.

### 🔧 Under the Hood

- **CI/CD and Build Enhancements**: Enhanced GitHub actions and build processes for better reliability and less downtime by @bowenliang123 and @hyoban.
- **Code & Query Optimization**: Addressed inefficiencies in SQL queries and data handling in workflows and the API, improving overall stability.

This release emphasizes streamlining backend operations, fortifying security, and enriching the user interface for a smoother, more productive experience. Thank you to all contributors for refining Dify and pushing our platform forward! 🛠️💡

---

## Upgrade Guide

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
   git checkout 1.11.3
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
* perf: using pipeline to delete redis cache by @fatelei in https://github.com/langgenius/dify/pull/30159
* fix: update permission in member list  caused page crash by @iamjoel in https://github.com/langgenius/dify/pull/30164
* feat(refactoring): introduce comprehensive guidelines and tools for component refactoring in Dify by @CodingOnStar in https://github.com/langgenius/dify/pull/30162
* fix: validate first then save to db by @fatelei in https://github.com/langgenius/dify/pull/30107
* fix: load i18n on server by @hyoban in https://github.com/langgenius/dify/pull/30171
* chore: some test by @iamjoel in https://github.com/langgenius/dify/pull/30148
* fix(web): correct deleted tools matching to use provider_id instead of id by @majiayu000 in https://github.com/langgenius/dify/pull/30138
* fix: add transparent border to prevent button size flickering by @Pleasurecruise in https://github.com/langgenius/dify/pull/30128
* refactor: part of remove all reqparser by @asukaminato0721 in https://github.com/langgenius/dify/pull/29847
* fix: fix metadata filter not survive a rename by @fatelei in https://github.com/langgenius/dify/pull/30174
* feat: add mcp tool display directly by @fatelei in https://github.com/langgenius/dify/pull/30019
* feat: allow config NEXT_PUBLIC_BATCH_CONCURRENCY by @fatelei in https://github.com/langgenius/dify/pull/30086
* fix(dataset): dataset tags service_api error "Dataset not found" by @zhaobingshuang in https://github.com/langgenius/dify/pull/30028
* refactor: split changes for api/controllers/console/workspace/load_ba… by @asukaminato0721 in https://github.com/langgenius/dify/pull/29887
* refactor: split changes for api/controllers/console/explore/saved_mes… by @asukaminato0721 in https://github.com/langgenius/dify/pull/29889
* refactor: split changes for api/controllers/console/explore/message.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/29890
* chore: bypass InsufficientPrivilege on Azure PostgreSQL by @fatelei in https://github.com/langgenius/dify/pull/30191
* chore: some tests for components by @iamjoel in https://github.com/langgenius/dify/pull/30194
* fix: use query param for delete method by @GareArc in https://github.com/langgenius/dify/pull/30206
* fix: fix DatasetRetrieval._process_metadata_filter_func miss in operator by @fatelei in https://github.com/langgenius/dify/pull/30199
* fix: fix missing not in by @fatelei in https://github.com/langgenius/dify/pull/30207
* fix: retrieval test and knowledge retrieval node failed in multimodal mode by @JohnJyong in https://github.com/langgenius/dify/pull/30210
* test(web): add unit tests for Avatar component by @SherlockShemol in https://github.com/langgenius/dify/pull/30201
* fix: remove unused CSS styles and fix HitTestingPage layout by @WTW0313 in https://github.com/langgenius/dify/pull/30235
* chore(web): remove unused dev-preview page by @sarxxt in https://github.com/langgenius/dify/pull/30226
* fix: Add JSON RPC request type guard by @Nov1c444 in https://github.com/langgenius/dify/pull/30216
* fix: consolidate duplicate InvokeRateLimitError definitions by @Mairuis in https://github.com/langgenius/dify/pull/30229
* fix: wrong usage of redis lock by @NeatGuyCoding in https://github.com/langgenius/dify/pull/28177
* chore(claude-code): migrate from legacy MCP configuration to official plugin system by @lyzno1 in https://github.com/langgenius/dify/pull/30265
* fix: fix custom tool content is not update by @fatelei in https://github.com/langgenius/dify/pull/30250
* fix(api): fix credential type handling and rebuild subscription transaction safety by @NeatGuyCoding in https://github.com/langgenius/dify/pull/30242
* chore(deps): bump scheduler from 0.26.0 to 0.27.0 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/30284
* chore(deps): bump json-repair from 0.54.1 to 0.54.3 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/30285
* refactor(web): Migrate to Unified TanStack Devtools by @lyzno1 in https://github.com/langgenius/dify/pull/30279
* fix: Workflow Start node optional enum parameter is treated as required by @hjlarry in https://github.com/langgenius/dify/pull/30287
* feat: document batch operation tool add re-index operation by @fatelei in https://github.com/langgenius/dify/pull/30275
* chore(sdk/nodejs): update deps by @hyoban in https://github.com/langgenius/dify/pull/30291
* feat: MCP tool adds support for embeddedResource by @IthacaDream in https://github.com/langgenius/dify/pull/30261
* fix(web): handle null/undefined message in log list by @majiayu000 in https://github.com/langgenius/dify/pull/30253
* fix: release graph_runtime_state reference to prevent memory leak under high load by @SherlockShemol in https://github.com/langgenius/dify/pull/30236
* fix(web): rollback React Scan dynamic import by @lyzno1 in https://github.com/langgenius/dify/pull/30294
* refactor(query-state): migrate query param state management to nuqs by @lyzno1 in https://github.com/langgenius/dify/pull/30184
* build: update github actions by @bowenliang123 in https://github.com/langgenius/dify/pull/30106
* fix(template-transform): use base64 encoding for Jinja2 templates to fix #26818 by @devbyteai in https://github.com/langgenius/dify/pull/30223
* refactor(web): drop swr and migrate share/chat hooks to tanstack query by @lyzno1 in https://github.com/langgenius/dify/pull/30232
* refactor(i18n): use JSON with flattened key and namespace by @hyoban in https://github.com/langgenius/dify/pull/30114
* feat: support tencent cos custom domain by @fatelei in https://github.com/langgenius/dify/pull/30193
* test: add comprehensive tests for plugin authentication components by @CodingOnStar in https://github.com/langgenius/dify/pull/30094
* fix(api): remove tool provider list cache to fix cache inconsistency by @Mairuis in https://github.com/langgenius/dify/pull/30323
* chore: refactor config var and add tests by @iamjoel in https://github.com/langgenius/dify/pull/30312
* chore: i18n namespace refactor in package.json and add missing translations by @lyzno1 in https://github.com/langgenius/dify/pull/30324
* test: add some tests for marketplace by @CodingOnStar in https://github.com/langgenius/dify/pull/30326
* refactor(web): organize devtools components by @lyzno1 in https://github.com/langgenius/dify/pull/30318
* fix: restore draft version correctly in version history panel by @majiayu000 in https://github.com/langgenius/dify/pull/30296
* feat: allow fail fast by @fatelei in https://github.com/langgenius/dify/pull/30262
* feat: get plan bulk with cache by @hj24 in https://github.com/langgenius/dify/pull/30339
* fix: update Korean translations for various components and improve cl… by @sangyun-han in https://github.com/langgenius/dify/pull/30347
* fix: missing i18n translation for Trans by @hyoban in https://github.com/langgenius/dify/pull/30353
* refactor(i18n): about locales by @hyoban in https://github.com/langgenius/dify/pull/30336
* fix(i18n): load server namespaces by kebab-case by @lyzno1 in https://github.com/langgenius/dify/pull/30368
* chore: remove useless __esModule by @hyoban in https://github.com/langgenius/dify/pull/30366
* fix: fix provider_id is empty by @fatelei in https://github.com/langgenius/dify/pull/30374
* fix: fix markdown escape issue by @fatelei in https://github.com/langgenius/dify/pull/30299
* feat: integrate Google Analytics event tracking and update CSP for script sources by @CodingOnStar in https://github.com/langgenius/dify/pull/30365
* refactor: Replace direct `process.env.NODE_ENV` checks with `IS_PROD` and `IS_DEV` constants. by @lyzno1 in https://github.com/langgenius/dify/pull/30383
* feat: add oauth_new_user flag for frontend when user oauth login by @zyssyz123 in https://github.com/langgenius/dify/pull/30370
* fix(web): template creation permission for app templates by @quicksandznzn in https://github.com/langgenius/dify/pull/30367
* refactor: split changes for api/services/tools/api_tools_manage_servi… by @asukaminato0721 in https://github.com/langgenius/dify/pull/29899
* fix: Incorrect REDIS ssl variable used for Celery causing Celery unable to start by @jasonfish568 in https://github.com/langgenius/dify/pull/29605
* fix: keyword search now matches both content and keywords fields by @majiayu000 in https://github.com/langgenius/dify/pull/29619
* fix: [xxx](xxx) render as xxx](xxx) by @fatelei in https://github.com/langgenius/dify/pull/30392
* fix: workflow incorrectly marked as completed while nodes are still executing by @Chenyl-Sai in https://github.com/langgenius/dify/pull/30251
* feat(web): migrate from es-toolkit/compat to native es-toolkit (#30244) by @lyzno1 in https://github.com/langgenius/dify/pull/30246
* chore(deps): bump qs from 6.14.0 to 6.14.1 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/30409
* fix: Ensure chat history refreshes when switching back to conversations by @devbyteai in https://github.com/langgenius/dify/pull/30389
* fix(web): enable JSON_OBJECT type support in console UI by @QuantumGhost in https://github.com/langgenius/dify/pull/30412
* fix: correct useEducationStatus query cache configuration by @lyzno1 in https://github.com/langgenius/dify/pull/30416
* fix: fix create app xss issue by @fatelei in https://github.com/langgenius/dify/pull/30305
* chore: lint for react compiler by @hyoban in https://github.com/langgenius/dify/pull/30417
* chore: update knip config and include in CI by @hyoban in https://github.com/langgenius/dify/pull/30410
* feat: support image extraction in PDF RAG extractor by @yangzq50 in https://github.com/langgenius/dify/pull/30399
* test: unify i18next mocks into centralized helpers by @hyoban in https://github.com/langgenius/dify/pull/30376
* feat: add archive storage client and env config by @hjlarry in https://github.com/langgenius/dify/pull/30422
* build: bring back babel-loader, add build check by @hyoban in https://github.com/langgenius/dify/pull/30427
* chore: add jotai store by @hyoban in https://github.com/langgenius/dify/pull/30432
* fix(web): stop thinking timer when user clicks stop button by @majiayu000 in https://github.com/langgenius/dify/pull/30442
* refactor: migrate some ns.model to BaseModel by @asukaminato0721 in https://github.com/langgenius/dify/pull/30388
* fix: fix when vision is disabled delete the configs by @fatelei in https://github.com/langgenius/dify/pull/30420
* feat: add AgentMaxIterationError exc by @fatelei in https://github.com/langgenius/dify/pull/30423
* chore: Standardized the OpenAI icon by @hjlarry in https://github.com/langgenius/dify/pull/30471
* chore: remove icon_large of models by @hjlarry in https://github.com/langgenius/dify/pull/30466
* feat: optimize for migration versions by @longbingljw in https://github.com/langgenius/dify/pull/28787
* chore: remove redundant web/app/page.module.css by @lyzno1 in https://github.com/langgenius/dify/pull/30482
* chore: integrate @tanstack/eslint-plugin-query and fix service layer lint errors by @lyzno1 in https://github.com/langgenius/dify/pull/30444
* feat(refactoring): Support Structured Logging (JSON) by @41tair in https://github.com/langgenius/dify/pull/30170
* feat: model total credits by @CodingOnStar in https://github.com/langgenius/dify/pull/26942
* fix(plugins): enhance search to match name, label and description by @zhsama in https://github.com/langgenius/dify/pull/30501
* ci: fix translate, allow manual dispatch by @hyoban in https://github.com/langgenius/dify/pull/30505
* chore(i18n): translate i18n files based on en-US changes by @github-actions[bot] in https://github.com/langgenius/dify/pull/30508
* refactor: more ns.model to BaseModel by @asukaminato0721 in https://github.com/langgenius/dify/pull/30445
* chore: upgrade fickling to 0.1.6 by @laipz8200 in https://github.com/langgenius/dify/pull/30495
* test: add unit tests for RagPipeline components by @CodingOnStar in https://github.com/langgenius/dify/pull/30429
* feat: revert model total credits by @CodingOnStar in https://github.com/langgenius/dify/pull/30518
* feat: add Ralph Wiggum plugin support by @lyzno1 in https://github.com/langgenius/dify/pull/30525
* feat: add frontend code review skills by @iamjoel in https://github.com/langgenius/dify/pull/30520
* refactor(web): align signup mail submit and tests by @lyzno1 in https://github.com/langgenius/dify/pull/30456
* feat: enhance squid config by @fatelei in https://github.com/langgenius/dify/pull/30146
* feat: skip rerank if only one dataset is retrieved by @fatelei in https://github.com/langgenius/dify/pull/30075
* fix: when first setup after auto login error by @sszaodian in https://github.com/langgenius/dify/pull/30523
* refactor(code_node): implement DI for the code node by @laipz8200 in https://github.com/langgenius/dify/pull/30519
* docs: update comments in docker/.env.example by @longbingljw in https://github.com/langgenius/dify/pull/30516
* chore: Update PR template lint command by @laipz8200 in https://github.com/langgenius/dify/pull/30533
* refactor(workflow): add Jinja2 renderer abstraction for template transform by @laipz8200 in https://github.com/langgenius/dify/pull/30535
* chore(deps-dev): bump intersystems-irispython from 5.3.0 to 5.3.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/30540
* chore: Add a new rule for import lint by @laipz8200 in https://github.com/langgenius/dify/pull/30526
* feat: add flask command file-usage by @fatelei in https://github.com/langgenius/dify/pull/30500
* chore: update dockerignore by @hsiong in https://github.com/langgenius/dify/pull/30460
* fix: fix WorkflowExecution.outputs containing non-JSON-serializable o… by @fatelei in https://github.com/langgenius/dify/pull/30464
* fix(api): surface subscription deletion errors to users by @Mairuis in https://github.com/langgenius/dify/pull/30333
* fix: support to change NEXT_PUBLIC_BASE_PATH env using `--build-arg` in docker build by @darkelf21cn in https://github.com/langgenius/dify/pull/29836
* feat: return data_source_info and data_source_detail_dict by @fatelei in https://github.com/langgenius/dify/pull/29912
* fix: INDEXING_MAX_SEGMENTATION_TOKENS_LENGTH settings by @hsiong in https://github.com/langgenius/dify/pull/30463
* fix: fix db env not work by @fatelei in https://github.com/langgenius/dify/pull/30541
* chore(deps): bump @amplitude/analytics-browser from 2.31.4 to 2.33.1 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/30538
* fix: #30511 [Bug] knowledge_retrieval_node fails when using Rerank Model: "Working outside of application context" and add regression test by @hsiong in https://github.com/langgenius/dify/pull/30549
* refactor: use contains_any instead of  Chaining where = where | f by @fatelei in https://github.com/langgenius/dify/pull/30559
* chore(web): add ESLint rules for i18n JSON validation by @hyoban in https://github.com/langgenius/dify/pull/30491
* refactor(models): Add mapped type hints to MessageAnnotation by @laipz8200 in https://github.com/langgenius/dify/pull/27751
* chore(docker): update nltk data download process to include unstructured download_nltk_packages by @lework in https://github.com/langgenius/dify/pull/28876
* chore: fix lint in i18n by @hyoban in https://github.com/langgenius/dify/pull/30571
* feat(logstore): make `graph` field optional via env variable LOGSTORE… by @scdeng in https://github.com/langgenius/dify/pull/30554
* feat(graph-engine): make layer runtime state non-null and bound early by @laipz8200 in https://github.com/langgenius/dify/pull/30552
* feat(graph-engine): add command to update variables at runtime by @laipz8200 in https://github.com/langgenius/dify/pull/30563
* chore: Harden API image Node.js runtime install by @laipz8200 in https://github.com/langgenius/dify/pull/30497
* fix(api): refactors the SQL LIKE pattern escaping logic to use a centralized  utility function, ensuring consistent and secure handling of special characters across all database queries. by @NeatGuyCoding in https://github.com/langgenius/dify/pull/30450
* refactor: split changes for api/controllers/web/saved_message.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/30583
* refactor: split changes for api/controllers/web/conversation.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/30582
* fix: system model selector loading state flash by @lyzno1 in https://github.com/langgenius/dify/pull/30572
* refactor: split changes for api/controllers/console/datasets/hit_test… by @asukaminato0721 in https://github.com/langgenius/dify/pull/30581
* chore: remove unused link icon type by @GKTOKWR in https://github.com/langgenius/dify/pull/30469
* feat: unified management stop event by @fatelei in https://github.com/langgenius/dify/pull/30479
* refactor: port controllers/console/app/app.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/30522
* fix: correct docx hyperlink extraction by @yangzq50 in https://github.com/langgenius/dify/pull/30360
* fix: allow unauthenticated CORS preflight for embedded bots by @Thebinary110 in https://github.com/langgenius/dify/pull/30587
* feat: init rsc support for translation by @hyoban in https://github.com/langgenius/dify/pull/30596
* feat: Add conversation variable persistence layer  by @laipz8200 in https://github.com/langgenius/dify/pull/30531
* fix: _model_to_insertion_dict missing id by @fatelei in https://github.com/langgenius/dify/pull/30603
* refactor: clean type: ignore comments in login.py and template_transformer.py by @majiayu000 in https://github.com/langgenius/dify/pull/30510
* refactor(api): inject sessionmaker into conversation variable updater by @laipz8200 in https://github.com/langgenius/dify/pull/30609
* refactor: generate_url to support scenario to build url by @fatelei in https://github.com/langgenius/dify/pull/30598
* fix(db): parameterize sessionmaker with Session by @laipz8200 in https://github.com/langgenius/dify/pull/30612
* chore: bump pnpm version in packageManager by @lyzno1 in https://github.com/langgenius/dify/pull/30605
* feat: use more universal C.UTF-8 instead of en_US.UTF-8 by @fatelei in https://github.com/langgenius/dify/pull/30621
* feat: implement dataset creation step one with preview functionality by @CodingOnStar in https://github.com/langgenius/dify/pull/30507
* refactor(web): migrate legacy forms to TanStack Form by @lyzno1 in https://github.com/langgenius/dify/pull/30631
* fix: prevent empty state flash and add skeleton loading for app list by @lyzno1 in https://github.com/langgenius/dify/pull/30616
* fix: flask db check fails due to nullable mismatch between migrations and models by @ltoppyl in https://github.com/langgenius/dify/pull/30474
* refactor: restructure DatasetCard component for improved readability and maintainability by @CodingOnStar in https://github.com/langgenius/dify/pull/30617
* refactor(api): clarify published RAG pipeline invoke naming by @laipz8200 in https://github.com/langgenius/dify/pull/30644
* refactor: port api/fields/file_fields.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/30638
* chore: use from __future__ import annotations by @sarxxt in https://github.com/langgenius/dify/pull/30254
* chore: add skill creator for create agent skills by @lyzno1 in https://github.com/langgenius/dify/pull/30652
* fix: add DB_TYPE environment variable to unit tests by @fghpdf in https://github.com/langgenius/dify/pull/30660
* fix: fix not record access token by @fatelei in https://github.com/langgenius/dify/pull/30654
* chore: rename ralph-wiggum plugin to ralph-loop by @lyzno1 in https://github.com/langgenius/dify/pull/30664
* refactor(web): remove useMixedTranslation, better resource loading by @hyoban in https://github.com/langgenius/dify/pull/30630
* fix: signin page stuck on loading when refresh token valid but access token expired by @lyzno1 in https://github.com/langgenius/dify/pull/30675
* refactor: remove unnecessary type: ignore from rag_pipeline_fields.py by @fghpdf in https://github.com/langgenius/dify/pull/30666
* fix: fix assign value stand as default by @fatelei in https://github.com/langgenius/dify/pull/30651
* refactor(web): remove unused type alias VoiceLanguageKey by @fghpdf in https://github.com/langgenius/dify/pull/30694
* feat(i18n): Migrate translation workflow to Claude Code GitHub Actions by @lyzno1 in https://github.com/langgenius/dify/pull/30692
* refactor: split changes for api/controllers/console/workspace/trigger… by @asukaminato0721 in https://github.com/langgenius/dify/pull/30627
* fix(workflow): pass correct user_from/invoke_from into graph init by @laipz8200 in https://github.com/langgenius/dify/pull/30637
* fix(i18n): resolve Claude Code sandbox path issues in workflow by @lyzno1 in https://github.com/langgenius/dify/pull/30710
* fix(web): resolve key-value input box height inconsistency on focus/blur (#30715) by @JunIce in https://github.com/langgenius/dify/pull/30716
* feat: add decryption decorators for password and code fields in webapp by @GareArc in https://github.com/langgenius/dify/pull/30704
* fix: web app login code encrypt by @douxc in https://github.com/langgenius/dify/pull/30705
* feat: credit pool by @zyssyz123 in https://github.com/langgenius/dify/pull/30720
* feat: model total credits by @CodingOnStar in https://github.com/langgenius/dify/pull/30727
* fix(web): restrict postMessage targetOrigin from wildcard to specific origins by @xuwei95 in https://github.com/langgenius/dify/pull/30690
* fix(web): resolve chat message loading race conditions and infinite loops by @MkDev11 in https://github.com/langgenius/dify/pull/30695
* fix(ci): use repository_dispatch for i18n sync workflow by @lyzno1 in https://github.com/langgenius/dify/pull/30744
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/30750
* feat: implement step two of dataset creation with comprehensive UI components and hooks by @CodingOnStar in https://github.com/langgenius/dify/pull/30681
* feat(embedding-process): implement embedding process components and polling logic by @CodingOnStar in https://github.com/langgenius/dify/pull/30622
* feat(workflows): add agent-dev deploy workflow by @Mairuis in https://github.com/langgenius/dify/pull/30774
* fix: fix enhance app mode check by @fatelei in https://github.com/langgenius/dify/pull/30758
* fix(web): invalidate app list cache after deleting app from detail page by @majiayu000 in https://github.com/langgenius/dify/pull/30751
* refactor: marketplace state management by @hyoban in https://github.com/langgenius/dify/pull/30702
* revert: "fix: fix assign value stand as default (#30651)" by @QuantumGhost in https://github.com/langgenius/dify/pull/30717
* feat: enhance start node object value check by @fatelei in https://github.com/langgenius/dify/pull/30732
* feat(web): migrate PWA to Serwist by @hyoban in https://github.com/langgenius/dify/pull/30808
* refactor(models): Refine MessageAgentThought SQLAlchemy typing by @laipz8200 in https://github.com/langgenius/dify/pull/27749
* fix: Broken import in .storybook/preview.tsx by @fatelei in https://github.com/langgenius/dify/pull/30812
* fix: fix refresh token deadlock by @fatelei in https://github.com/langgenius/dify/pull/30828
* fix: drop useless pyrefly in ci by @yihong0618 in https://github.com/langgenius/dify/pull/30826
* chore(deps-dev): bump @storybook/react from 9.1.13 to 9.1.17 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/30833
* chore(deps-dev): bump tos from 2.7.2 to 2.9.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/30834
* docs(web): add corepack recommendation by @hyoban in https://github.com/langgenius/dify/pull/30837
* feat: add block-no-verify hook for Claude Code by @Lemonadeccc in https://github.com/langgenius/dify/pull/30839
* refactor(web): extract isServer/isClient utility & upgrade Node.js to 22.12.0 by @lyzno1 in https://github.com/langgenius/dify/pull/30803
* ci: add HITL test env deployment action by @QuantumGhost in https://github.com/langgenius/dify/pull/30846
* build: limit esbuild, glob, docker base version to avoid cve by @hyoban in https://github.com/langgenius/dify/pull/30848
* feat: clear free plan workflow run logs by @hjlarry in https://github.com/langgenius/dify/pull/29494
* fix(api): defer streaming response until referenced variables are updated by @QuantumGhost in https://github.com/langgenius/dify/pull/30832
* fix: use node factory for single-step workflow nodes by @hjlarry in https://github.com/langgenius/dify/pull/30859
* feat(ops): set root span kind for AliyunTrace to enable service-level metrics aggregation by @hieheihei in https://github.com/langgenius/dify/pull/30728
* fix: entrypoint.sh overrides NEXT_PUBLIC_TEXT_GENERATION_TIMEOUT_MS when TEXT_GENERATION_TIMEOUT_MS is unset (#30864) by @hsiong in https://github.com/langgenius/dify/pull/30865
* fix: fix formatNumber accuracy by @fatelei in https://github.com/langgenius/dify/pull/30877
* fix(amplitude): update sessionReplaySampleRate default value to 0.5 by @CodingOnStar in https://github.com/langgenius/dify/pull/30880
* fix: missing content if assistant message with tool_calls by @leslie2046 in https://github.com/langgenius/dify/pull/30083
* fix: fix object value is optional should skip validate by @fatelei in https://github.com/langgenius/dify/pull/30894
* chore: rename the migration file by @hjlarry in https://github.com/langgenius/dify/pull/30893
* fix(web): add null check for SSE stream bufferObj to prevent TypeError by @majiayu000 in https://github.com/langgenius/dify/pull/30131
* fix: In the LLM model in dify, when a message is added, the first cli… by @zhichenghouse in https://github.com/langgenius/dify/pull/29540
* chore: case insensitive email  by @hjlarry in https://github.com/langgenius/dify/pull/29978
* refactor(web): setup status caching by @lyzno1 in https://github.com/langgenius/dify/pull/30798
* chore: Bump Dify version to 1.11.3 by @laipz8200 in https://github.com/langgenius/dify/pull/30903

## New Contributors
* @sarxxt made their first contribution in https://github.com/langgenius/dify/pull/30226
* @devbyteai made their first contribution in https://github.com/langgenius/dify/pull/30223
* @sangyun-han made their first contribution in https://github.com/langgenius/dify/pull/30347
* @yangzq50 made their first contribution in https://github.com/langgenius/dify/pull/30399
* @sszaodian made their first contribution in https://github.com/langgenius/dify/pull/30523
* @darkelf21cn made their first contribution in https://github.com/langgenius/dify/pull/29836
* @lework made their first contribution in https://github.com/langgenius/dify/pull/28876
* @scdeng made their first contribution in https://github.com/langgenius/dify/pull/30554
* @Thebinary110 made their first contribution in https://github.com/langgenius/dify/pull/30587
* @ltoppyl made their first contribution in https://github.com/langgenius/dify/pull/30474
* @fghpdf made their first contribution in https://github.com/langgenius/dify/pull/30660
* @xuwei95 made their first contribution in https://github.com/langgenius/dify/pull/30690
* @MkDev11 made their first contribution in https://github.com/langgenius/dify/pull/30695
* @Lemonadeccc made their first contribution in https://github.com/langgenius/dify/pull/30839
* @zhichenghouse made their first contribution in https://github.com/langgenius/dify/pull/29540

**Full Changelog**: https://github.com/langgenius/dify/compare/1.11.2...1.11.3

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.11.3` · 2026-01-13 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.11.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
