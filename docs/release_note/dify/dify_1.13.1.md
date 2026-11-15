---
title: "dify 1.13.1"
project: "dify"
repo: "langgenius/dify"
tag: "1.13.1"
version: "1.13.1"
published: "2026-03-17"
type: "patch"
lang: "en"
summary: "Added Hologres as a supported backend option for both vector retrieval and full-text search. · Added Service API endpoints for dataset document downloads · Batch ZIP download for selected documents."
---

# dify 1.13.1

## 🚀 Major Functional Changes

### Data platform and dataset operations

- Added **Hologres** as a supported backend option for both vector retrieval and full-text search.
- Added Service API endpoints for dataset document downloads:
  - Batch ZIP download for selected documents.
  - Signed URL download for single-document original files.

### Workflow and chat experience improvements

- **Breaking change:** HITL email content now uses markdown rendering before delivery. 
  Existing email templates that relied on raw/plain behavior may render differently after upgrade.
- Draft variables are now user-scoped instead of app-scoped. Historical draft variables will not be available after upgrading.
- Added edge context menu support in workflow canvas, including direct edge deletion.
- Preserved existing connections when changing node types in workflow editing.
- Added configurable send-key behavior (`Enter` vs `Shift+Enter`) for embedded chat input.
- Added file payloads in message-end stream responses.
- Removed GPT-4-specific hardcoded behavior from default model selection logic.
- Added a new `export-app-messages` CLI command to export application messages and related feedback to `JSONL.GZ` (local or cloud storage).

## 🔐 Security Updates

- Prevented SQL injection risks in vector-store query paths by switching to parameterized SQL in affected implementations.
- Hardened HITL email delivery:
  - Sanitize subject and body content.
  - Strip CR/LF from subjects to prevent SMTP header-injection vectors.
- Enforced ownership checks for conversation deletion APIs.
- Cleared stale provider credentials during plugin uninstall to reduce residual credential risk.
- Improved enterprise API error handling and license-enforcement behavior for invalid/expired license states.

## 🏗️ Configuration, Architecture, and Deployment Updates

### Deployment and operations
- Added a dedicated Celery queue: `dataset_summary` for LLM-heavy summary generation tasks.
  - Ensure workers subscribe to this queue to avoid summary-job backlog.
- Added telemetry metrics for retention cleanup tasks (messages/workflow runs), plus flush behavior for short-lived command jobs.

### Configuration changes

- Added `REDIS_MAX_CONNECTIONS`.
- Deprecated `PUBSUB_*` event-bus settings in favor of `EVENT_BUS_*` settings.

## 🛠 Other Noteworthy Changes

- Fixed `workflow_runs.started_at` being overwritten on resume.
- Fixed metadata batch-edit silent failures caused by split-transaction edge cases.
- Fixed metadata filter extraction issues in knowledge retrieval (`{{...}}` conditions).
- Restored citation visibility in advanced chat applications.
- Fixed conversation variable reset behavior after HITL nodes.
- Fixed a page crash in knowledge-retrieval node configuration flow.
- Fixed chat assistant blocking response-mode behavior.
- Added `doc_type` handling in Weaviate vector attributes for better compatibility.
- Upgraded OpenTelemetry dependencies to resolve context-detach errors.

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
   git checkout 1.13.1
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
* feat(api): add scheduled cleanup task for specific workflow logs by @razerzhang in https://github.com/langgenius/dify/pull/31843
* test: add unit tests for some base components by @saumyatalwani in https://github.com/langgenius/dify/pull/32201
* test: add comprehensive unit and integration tests for dataset module by @CodingOnStar in https://github.com/langgenius/dify/pull/32187
* test(web): add comprehensive unit and integration tests for plugins and tools modules by @CodingOnStar in https://github.com/langgenius/dify/pull/32220
* test: add comprehensive unit and integration tests for billing components by @CodingOnStar in https://github.com/langgenius/dify/pull/32227
* test: add unit and integration tests for share, develop, and goto-anything modules by @CodingOnStar in https://github.com/langgenius/dify/pull/32246
* test: add comprehensive unit and integration tests for RAG Pipeline components by @CodingOnStar in https://github.com/langgenius/dify/pull/32237
* feat(tests): add integration tests for explore app list, installed apps, and sidebar lifecycle flows by @CodingOnStar in https://github.com/langgenius/dify/pull/32248
* fix: metadata batch edit silently fails due to split transactions and swallowed exceptions by @veeceey in https://github.com/langgenius/dify/pull/32041
* fix: can not upload file in single run by @hyoban in https://github.com/langgenius/dify/pull/32276
* chore(deps): bump pillow from 12.0.0 to 12.1.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32250
* feat: support config max size of plugin generated files by @bowenliang123 in https://github.com/langgenius/dify/pull/30887
* feat(api): optimize OceanBase vector store performance and configurability by @connermo in https://github.com/langgenius/dify/pull/32263
* test(web): add and enhance frontend automated tests across multiple modules by @CodingOnStar in https://github.com/langgenius/dify/pull/32268
* chore(deps): bump qs from 6.14.1 to 6.14.2 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/32290
* test: add unit tests for base components-part-1 by @poojanInfocusp in https://github.com/langgenius/dify/pull/32154
* test: add integration tests for app card operations, list browsing, and create app flows by @CodingOnStar in https://github.com/langgenius/dify/pull/32298
* test: add tests for some base components by @saumyatalwani in https://github.com/langgenius/dify/pull/32265
* refactor(web): extract custom hooks from complex components and add comprehensive tests by @CodingOnStar in https://github.com/langgenius/dify/pull/32301
* chore(deps): bump sqlparse from 0.5.3 to 0.5.4 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32315
* test: add unit tests for base chat components by @poojanInfocusp in https://github.com/langgenius/dify/pull/32249
* fix(app-copy): inherit web app permission from original app by @GareArc in https://github.com/langgenius/dify/pull/32323
* fix(api): make DB migration Redis lock TTL configurable and prevent LockNotOwnedError from masking failures by @lin-snow in https://github.com/langgenius/dify/pull/32299
* fix: remove explore context and migrate query to orpc contract by @lyzno1 in https://github.com/langgenius/dify/pull/32320
* refactor(web): centralize role-based route guards and fix anti-patterns by @lyzno1 in https://github.com/langgenius/dify/pull/32302
* ci: update dependabot config by @asukaminato0721 in https://github.com/langgenius/dify/pull/32346
* chore(deps-dev): bump types-greenlet from 3.1.0.20250401 to 3.3.0.20251206 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32349
* fix(i18n): fix critical errors and overhaul Persian (fa-IR) translations in workflow.json by @Haohao-end in https://github.com/langgenius/dify/pull/32342
* refactor(workflow-file): move `core.file` to `core.workflow.file` by @WH-2099 in https://github.com/langgenius/dify/pull/32252
* refactor(document_extractor): Extract configs by @laipz8200 in https://github.com/langgenius/dify/pull/31828
* refactor(web): replace String.match() with RegExp.exec() for non-global regex by @apoorvdarshan in https://github.com/langgenius/dify/pull/32386
* ci: Add weekly schedule for pip and uv ecosystems by @asukaminato0721 in https://github.com/langgenius/dify/pull/32398
* chore(deps): bump gmpy2 from 2.2.1 to 2.3.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32402
* chore(deps-dev): update types-markdown requirement from ~=3.7.0 to ~=3.10.2 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32401
* chore(deps-dev): bump opensearch-py from 2.4.0 to 3.1.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32400
* refactor(web): make Switch controlled-only and migrate call sites by @lyzno1 in https://github.com/langgenius/dify/pull/32399
* chore(deps-dev): bump import-linter from 2.7 to 2.10 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32403
* fix: correct misleading retry count in error message by @kurokobo in https://github.com/langgenius/dify/pull/32406
* test: add tests for base > date-time-picker by @saumyatalwani in https://github.com/langgenius/dify/pull/32396
* fix: clear stale provider credentials during plugin uninstall by @laipz8200 in https://github.com/langgenius/dify/pull/32380
* chore(deps): bump pypdf from 6.6.2 to 6.7.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32427
* chore(deps): bump werkzeug from 3.1.5 to 3.1.6 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32431
* chore(deps): bump flask from 3.1.2 to 3.1.3 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32432
* refactor: refine some type in trial by @asukaminato0721 in https://github.com/langgenius/dify/pull/32426
* fix: fix node after change can not select start node by @fatelei in https://github.com/langgenius/dify/pull/32441
* test: tighten user-visible specs and raise coverage for key-validator… by @akashseth-ifp in https://github.com/langgenius/dify/pull/32281
* test: header account about, account setting and account dropdown by @mahammadasim in https://github.com/langgenius/dify/pull/32283
* test(web): Added test for model-auth files in header folder by @akashseth-ifp in https://github.com/langgenius/dify/pull/32358
* test: Add unit tests for Data Source Integrations (Notion, Website) and Modals by @mahammadasim in https://github.com/langgenius/dify/pull/32313
* test: add  test cases for some base components by @saumyatalwani in https://github.com/langgenius/dify/pull/32314
* chore(deps): update pydantic requirement from ~=2.11.4 to ~=2.12.5 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32462
* chore(deps): update python-docx requirement from ~=1.1.0 to ~=1.2.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32463
* chore(deps): update redis[hiredis] requirement from ~=6.1.0 to ~=7.2.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32464
* refactor: inherit ABC in AppQueueManager for proper abstract method usage by @tysoncung in https://github.com/langgenius/dify/pull/32461
* test(web): add members-page account-setting specs and improve coverage by @akashseth-ifp in https://github.com/langgenius/dify/pull/32311
* test(web): add tests for model-provider-page files in header account-… by @akashseth-ifp in https://github.com/langgenius/dify/pull/32360
* fix: add return type annotation to BaseVector.create by @KinomotoMio in https://github.com/langgenius/dify/pull/32475
* test: migrate Dataset/Document property tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32487
* refactor: fix opentelemetry histogram type assignment error by @Hypertension42 in https://github.com/langgenius/dify/pull/32490
* fix: add return type annotation to Moderation.validate_config abstract method by @tysoncung in https://github.com/langgenius/dify/pull/32491
* fix: add return type annotation to abstract _publish method by @J0su3Code in https://github.com/langgenius/dify/pull/32493
* test: add unit tests for base-components part-3 by @poojanInfocusp in https://github.com/langgenius/dify/pull/32408
* test: add unit tests for prompt editor's component picker block plugin. by @mahammadasim in https://github.com/langgenius/dify/pull/32412
* test(web): increase test coverage for components inside header folder by @akashseth-ifp in https://github.com/langgenius/dify/pull/32392
* test(web): Fix failing web test in 'Web Tests' GitHub Action by @akashseth-ifp in https://github.com/langgenius/dify/pull/32481
* test: add tests for base > features by @saumyatalwani in https://github.com/langgenius/dify/pull/32397
* test: add unit tests for base-components-part-2 by @poojanInfocusp in https://github.com/langgenius/dify/pull/32409
* test: add tests for some base components by @saumyatalwani in https://github.com/langgenius/dify/pull/32356
* fix: correct type annotations in Langfuse trace entities to match SDK by @stakeswky in https://github.com/langgenius/dify/pull/32498
* test: add tests for file-upload components by @saumyatalwani in https://github.com/langgenius/dify/pull/32373
* test: added tests for some base components by @saumyatalwani in https://github.com/langgenius/dify/pull/32370
* fix: resolve pyright bad-index errors in parser.py by @tysoncung in https://github.com/langgenius/dify/pull/32507
* test(web): increase test coverage for model-provider-page folder by @akashseth-ifp in https://github.com/langgenius/dify/pull/32374
* test: add unit tests for chat components by @poojanInfocusp in https://github.com/langgenius/dify/pull/32367
* fix: add explicit return type annotations to BaseVector abstract methods by @longway-code in https://github.com/langgenius/dify/pull/32516
* test(web): increase coverage for files in folder plugin-page and model-provider-page by @akashseth-ifp in https://github.com/langgenius/dify/pull/32377
* test: add unit tests for chat/embedded-chatbot components by @poojanInfocusp in https://github.com/langgenius/dify/pull/32361
* test: add tests for some base components by @saumyatalwani in https://github.com/langgenius/dify/pull/32415
* test: add tests for base > image-uploader by @saumyatalwani in https://github.com/langgenius/dify/pull/32416
* test(base): added test coverage to form components by @akashseth-ifp in https://github.com/langgenius/dify/pull/32436
* test: migrate workflow run repository SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32519
* test: migrate remaining DocumentSegment navigation SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32523
* test: migrate end user service SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32530
* test: migrate message extra contents tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32532
* test: migrate workflow trigger log repository sql tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32525
* test: migrate node execution repository sql tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32524
* test: migrate remove_app_and_related_data_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32547
* test: migrate test_document_service_display_status SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32545
* test: migrate delete_archived_workflow_run SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32549
* test(base): add test coverage for more base/form components by @akashseth-ifp in https://github.com/langgenius/dify/pull/32437
* fix: incorrect form field height of input modal by @hjlarry in https://github.com/langgenius/dify/pull/32557
* chore(deps): bump fickling from 0.1.7 to 0.1.8 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32552
* test: migrate conversation service SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32527
* test: migrate dataset collection binding SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32539
* test: migrate dataset service update-delete SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32548
* test: unit test cases for controllers.files, controllers.mcp and controllers.trigger module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32057
* test: improve unit tests for controllers.service_api by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32073
* test: add tests for some components in base > prompt-editor by @saumyatalwani in https://github.com/langgenius/dify/pull/32472
* test: add tests for some base components by @saumyatalwani in https://github.com/langgenius/dify/pull/32479
* refactor(workflow): inject http request node config through factories and defaults by @laipz8200 in https://github.com/langgenius/dify/pull/32365
* test: migrate dataset service retrieval SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32528
* test: add unit tests for base components-part-4 by @poojanInfocusp in https://github.com/langgenius/dify/pull/32452
* test: add unit tests for base-components-part-5 by @poojanInfocusp in https://github.com/langgenius/dify/pull/32457
* fix: incorrect placeholder color in dark mode by @hjlarry in https://github.com/langgenius/dify/pull/32568
* fix: spin-animation animation-delay by @Pandaaaa906 in https://github.com/langgenius/dify/pull/32560
* feat(aliyun-trace): add app_id attribute by @hieheihei in https://github.com/langgenius/dify/pull/32489
* test: example for [Refactor/Chore] use Testcontainers to do sql test #32454 by @asukaminato0721 in https://github.com/langgenius/dify/pull/32459
* fix: type checking error in parser by @ajuijas in https://github.com/langgenius/dify/pull/32510
* test: migrate test_dataset_service_get_segments SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32544
* test: migrate restore_archived_workflow_run SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32590
* test: migrate workflow_node_execution_service_repository SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32591
* feat: Adding error handle support for Agent Node by @Pandaaaa906 in https://github.com/langgenius/dify/pull/31596
* ci: try from main repo by @asukaminato0721 in https://github.com/langgenius/dify/pull/32620
* fix: add None checks for tenant.id in dataset vector index tests by @stakeswky in https://github.com/langgenius/dify/pull/32603
* test: migrate clean_dataset_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32529
* test: migrate dataset_indexing_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32531
* fix: replace dict() merge with dict unpacking to resolve overload error by @toroleapinc in https://github.com/langgenius/dify/pull/32653
* test: migrate dataset service update-dataset SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32533
* fix: add type annotations to BaseStorage.exists and BaseStorage.download by @toroleapinc in https://github.com/langgenius/dify/pull/32652
* fix: replace deprecated SpanAttributes and ResourceAttributes with new semconv imports by @stakeswky in https://github.com/langgenius/dify/pull/32661
* test: improve coverage for header components by @poojanInfocusp in https://github.com/langgenius/dify/pull/32628
* refactor(api): inject code executor from node factory by @laipz8200 in https://github.com/langgenius/dify/pull/32618
* refactor(workflow): inject redis into graph engine manager by @laipz8200 in https://github.com/langgenius/dify/pull/32622
* revert: "fix: image preview triggers binary download" by @laipz8200 in https://github.com/langgenius/dify/pull/32683
* refactor(workflow): inject credential/model access ports into LLM nodes by @laipz8200 in https://github.com/langgenius/dify/pull/32569
* chore: update README.md by @Inlei in https://github.com/langgenius/dify/pull/32680
* refactor(web): remove mouseup listener in use-resize-panel cleanup by @haku-ink in https://github.com/langgenius/dify/pull/32636
* chore(ci): fold pyrefly diff comments by @laipz8200 in https://github.com/langgenius/dify/pull/32685
* test: align file preview mimetype expectation by @laipz8200 in https://github.com/langgenius/dify/pull/32688
* chore(deps-dev): bump nltk from 3.9.2 to 3.9.3 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32691
* fix: the action button of structure output modal should align right by @hjlarry in https://github.com/langgenius/dify/pull/32700
* docs(api): simplify setup README and worker guidance by @laipz8200 in https://github.com/langgenius/dify/pull/32704
* refactor: decouple the business logic from datasource_node by @fatelei in https://github.com/langgenius/dify/pull/32515
* fix: correct mock return type in CodeBasedExtension test by @veeceey in https://github.com/langgenius/dify/pull/32058
* chore: update to eslint 10 by @hyoban in https://github.com/langgenius/dify/pull/32646
* test: migrate document_indexing_sync_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32534
* feat(web): add hover clear button for provider search by @laipz8200 in https://github.com/langgenius/dify/pull/32707
* fix: add return type to abstract _publish method by @tda1017 in https://github.com/langgenius/dify/pull/32701
* chore(deps-dev): bump storybook from 10.2.0 to 10.2.10 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/32659
* ci(web): parallelize web tests with 4-shard Vitest sharding by @lyzno1 in https://github.com/langgenius/dify/pull/32713
* test: migrate test_dataset_service SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32535
* chore(deps-dev): align all @storybook/* packages to 10.2.13 by @lyzno1 in https://github.com/langgenius/dify/pull/32714
* fix: YAML syntax error in pyrefly-diff-comment workflow by @nielskaspers in https://github.com/langgenius/dify/pull/32718
* test: migrate document_service_status SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32536
* feat: add backend-code-review skill by @hj24 in https://github.com/langgenius/dify/pull/32719
* fix(ci): fix invalid workflow file pyrefly-diff.yml by @tysoncung in https://github.com/langgenius/dify/pull/32728
* fix: replace unreachable yield expression with yield from () by @tysoncung in https://github.com/langgenius/dify/pull/32727
* chore(deps): bump pypdf from 6.7.1 to 6.7.4 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32736
* refactor: consolidate LLM runtime model state on ModelInstance by @laipz8200 in https://github.com/langgenius/dify/pull/32746
* refactor(workflow): move variables package into core.workflow by @laipz8200 in https://github.com/langgenius/dify/pull/32750
* refactor: inject memory interface into LLMNode by @laipz8200 in https://github.com/langgenius/dify/pull/32754
* test(api): add autospec to MagicMock-based patch usage by @laipz8200 in https://github.com/langgenius/dify/pull/32752
* chore: add vinext as dev server by @hyoban in https://github.com/langgenius/dify/pull/32559
* fix: Fixed the adaptation issue of response formats for different mod… by @FFXN in https://github.com/langgenius/dify/pull/32326
* refactor(web): replace resolutions with pnpm.overrides by @slegarraga in https://github.com/langgenius/dify/pull/32768
* fix: remove REDIRECT_URL_KEY from url by @hyoban in https://github.com/langgenius/dify/pull/32770
* fix: some Qwen3 models only support streaming output. by @FFXN in https://github.com/langgenius/dify/pull/32766
* fix(workflow): decouple http request node external dependencies by @WH-2099 in https://github.com/langgenius/dify/pull/32762
* fix(api): add explicit return type annotations to clean() methods by @Br1an67 in https://github.com/langgenius/dify/pull/32772
* fix(api): resolve type errors in BaseTraceInstance and OpsTraceManager by @Br1an67 in https://github.com/langgenius/dify/pull/32773
* fix: add return type annotation to auth decorators by @tda1017 in https://github.com/langgenius/dify/pull/32699
* fix(web): improve chat edit input behavior and shortcuts by @laipz8200 in https://github.com/langgenius/dify/pull/32757
* refactor(workflow): remove code node helper imports by @WH-2099 in https://github.com/langgenius/dify/pull/32759
* fix: improve TanStack Query client setup and fix queryKey bug by @lyzno1 in https://github.com/langgenius/dify/pull/32422
* feat(enterprise): auto-join newly registered accounts to the default workspace by @lin-snow in https://github.com/langgenius/dify/pull/32308
* fix: add missing pipeline_templates by @akkoaya in https://github.com/langgenius/dify/pull/31528
* fix(api): enforce ownership check for conversation delete by @laipz8200 in https://github.com/langgenius/dify/pull/32686
* chore: remove ty from backend type-check pipeline by @BeautyyuYanli in https://github.com/langgenius/dify/pull/32782
* chore(web): remove PM2 process manager by @majiayu000 in https://github.com/langgenius/dify/pull/30252
* fix: serialize data_source_info with json.dumps in Notion sync task by @weiguangli-io in https://github.com/langgenius/dify/pull/32747
* revert(graph-engine): rollback stop-event unification by @laipz8200 in https://github.com/langgenius/dify/pull/32789
* chore: support code-inspector for vinext by @hjlarry in https://github.com/langgenius/dify/pull/32788
* refactor(api): move llm quota deduction to app graph layer by @laipz8200 in https://github.com/langgenius/dify/pull/32786
* refactor: inject workflow node memory via protocol by @laipz8200 in https://github.com/langgenius/dify/pull/32784
* refactor(workflow): move PromptMessageMemory to model_runtime.memory by @laipz8200 in https://github.com/langgenius/dify/pull/32796
* refactor(workflow): decouple start node external dependencies by @WH-2099 in https://github.com/langgenius/dify/pull/32793
* fix: fix import error by @fatelei in https://github.com/langgenius/dify/pull/32800
* fix: typo in WebScraper plugin description: "Scrapper" → "Scraper" by @Copilot in https://github.com/langgenius/dify/pull/32790
* fix(ci): make pyrefly diff comments focus on diagnostics by @hwb96 in https://github.com/langgenius/dify/pull/32778
* fix: remove references to non-existent Document attributes in test by @toroleapinc in https://github.com/langgenius/dify/pull/32654
* fix: use declared_attr.directive for WorkflowNodeExecutionModel.__table_args__ by @toroleapinc in https://github.com/langgenius/dify/pull/32656
* feat(web): add root isolation layer for portal stacking context by @lyzno1 in https://github.com/langgenius/dify/pull/32807
* fix: optimize workflow_run iter query by @hj24 in https://github.com/langgenius/dify/pull/32815
* test: add unit tests for base components by @CodingOnStar in https://github.com/langgenius/dify/pull/32818
* refactor(ci): use diff -u for pyrefly diff output by @stablegenius49 in https://github.com/langgenius/dify/pull/32813
* chore(deps): update pyjwt requirement from ~=2.10.1 to ~=2.11.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32804
* chore(deps-dev): update types-aiofiles requirement from ~=24.1.0 to ~=25.1.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32803
* fix: fix chat assistant response mode blocking is not work by @fatelei in https://github.com/langgenius/dify/pull/32394
* refactor: use unified diff format in pyrefly-diff workflow by @Echo0ff in https://github.com/langgenius/dify/pull/32828
* refactor: remove tests and core/rag from pyrefly excludes by @stablegenius49 in https://github.com/langgenius/dify/pull/32801
* fix: map all NodeType values to span kinds in Arize Phoenix tracing by @veeceey in https://github.com/langgenius/dify/pull/32059
* fix: upgrade OpenTelemetry to 0.49b0 to fix context detach error by @GareArc in https://github.com/langgenius/dify/pull/32825
* feat: ensure document id is not missing by @fatelei in https://github.com/langgenius/dify/pull/32765
* fix(api): add return type annotation to filter_none_values() by @Br1an67 in https://github.com/langgenius/dify/pull/32774
* refactor: knowledge index node decouples business logic by @fatelei in https://github.com/langgenius/dify/pull/32274
* feat(tests): add comprehensive test suite for workflow utilities and node creation by @CodingOnStar in https://github.com/langgenius/dify/pull/32841
* refactor: move workflow package to dify_graph by @laipz8200 in https://github.com/langgenius/dify/pull/32844
* perf: optimize dataset api query speed by @fatelei in https://github.com/langgenius/dify/pull/32847
* refactor(api): move model_runtime into dify_graph by @laipz8200 in https://github.com/langgenius/dify/pull/32858
* chore: update vinext, add workaround by @hyoban in https://github.com/langgenius/dify/pull/32878
* refactor(web): restructure app-sidebar with component decomposition and folder organization by @CodingOnStar in https://github.com/langgenius/dify/pull/32887
* refactor: TemplateTransformNode decouple code executor by @fatelei in https://github.com/langgenius/dify/pull/32879
* chore(deps): bump pypdf from 6.7.4 to 6.7.5 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32882
* chore(deps): bump @orpc/client from 1.13.4 to 1.13.6 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/32883
* refactor(dify_graph): unify invoke and user enums source in workflow by @WH-2099 in https://github.com/langgenius/dify/pull/32873
* fix: Add the missing validation of doc_form in the service API. by @FFXN in https://github.com/langgenius/dify/pull/32892
* fix: downgrade node version to 22 by @hyoban in https://github.com/langgenius/dify/pull/32897
* feat(web): overlay migration guardrails + Base UI primitives by @lyzno1 in https://github.com/langgenius/dify/pull/32824
* test(web): add high-quality unit tests for Base UI wrapper primitives by @lyzno1 in https://github.com/langgenius/dify/pull/32904
* refactor(web): migrate document list query state to nuqs by @lyzno1 in https://github.com/langgenius/dify/pull/32339
* test: migrate test_dataset_service_batch_update_document_status SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32537
* fix: get i18n lazy, make vinext build works by @hyoban in https://github.com/langgenius/dify/pull/32917
* chore: add dependency groups to Dependabot config by @nightcityblade in https://github.com/langgenius/dify/pull/32721
* fix(api): resolve OpenTelemetry histogram type mismatch by @Br1an67 in https://github.com/langgenius/dify/pull/32771
* test: migrate test_dataset_service_create_dataset SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32538
* fix(web): align dropdown-menu styles with Figma design by @lyzno1 in https://github.com/langgenius/dify/pull/32922
* fix: keep account dropdown open when switching theme by @lyzno1 in https://github.com/langgenius/dify/pull/32918
* chore: fix load env and treeshaking for vinext by @hyoban in https://github.com/langgenius/dify/pull/32928
* test(workflow): add unit tests for workflow store slices by @CodingOnStar in https://github.com/langgenius/dify/pull/32932
* refactor: migrate workflow onboarding modal to base dialog by @lyzno1 in https://github.com/langgenius/dify/pull/32915
* feat: redis connection support max connections by @fatelei in https://github.com/langgenius/dify/pull/32935
* refactor: human input node decouple db by @fatelei in https://github.com/langgenius/dify/pull/32900
* feat: support redis xstream by @fatelei in https://github.com/langgenius/dify/pull/32586
* feat: replace db.session with db_session_with_containers by @RenzoMXD in https://github.com/langgenius/dify/pull/32942
* refactor(web): migrate Button to Base UI with focus-visible by @lyzno1 in https://github.com/langgenius/dify/pull/32941
* feat(web): add base AlertDialog with app-card migration example by @lyzno1 in https://github.com/langgenius/dify/pull/32933
* perf(api): utilize the message_workflow_run_id_idx while querying messages by @QuantumGhost in https://github.com/langgenius/dify/pull/32944
* fix(api): decouple enterprise default-workspace join from personal workspace creation by @lin-snow in https://github.com/langgenius/dify/pull/32938
* refactor: do not import i18n resource json to split chunk by @hyoban in https://github.com/langgenius/dify/pull/32947
* refactor: document extract node decouple ssrf_proxy by @fatelei in https://github.com/langgenius/dify/pull/32949
* chore: refine oRPC contract-first skill guidance by @lyzno1 in https://github.com/langgenius/dify/pull/32955
* test(workflow): add comprehensive hooks unit tests and refactor test infrastructure (Part 3) by @CodingOnStar in https://github.com/langgenius/dify/pull/32958
* chore: drop pwa with serwist by @hyoban in https://github.com/langgenius/dify/pull/32838
* chore: clean up sw file by @hyoban in https://github.com/langgenius/dify/pull/32973
* chore: add react refresh plugin for vinext by @hyoban in https://github.com/langgenius/dify/pull/32996
* test: migrate duplicate_document_indexing_task SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32540
* chore: expand overlay migration ESLint rules to popover, dropdown, dialog by @lyzno1 in https://github.com/langgenius/dify/pull/33001
* chore(deps): bump fickling from 0.1.8 to 0.1.9 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32999
* chore(deps): bump authlib from 1.6.6 to 1.6.7 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/32998
* chore(deps): bump immutable from 5.1.4 to 5.1.5 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/33000
* test: migrate test_document_service_rename_document SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32542
* chore: add TypedDict related prompt to AGENTS.md by @caoergou in https://github.com/langgenius/dify/pull/32995
* chore: i18n hmr support, fix hmr for app context by @hyoban in https://github.com/langgenius/dify/pull/32997
* refactor: simplify oauthNewUser state handling in AppInitializer component by @CodingOnStar in https://github.com/langgenius/dify/pull/33019
* refactor(dify_graph): introduce run_context and delegate child engine creation by @WH-2099 in https://github.com/langgenius/dify/pull/32964
* test(workflow): add validation tests for workflow and node component rendering part 3 by @CodingOnStar in https://github.com/langgenius/dify/pull/33012
* fix: workflow canvas sync by @zxhlyh in https://github.com/langgenius/dify/pull/33030
* refactor: spilt context for better hmr by @hyoban in https://github.com/langgenius/dify/pull/33033
* chore: prevent Storybook crash caused by vite-plugin-inspect by @lyzno1 in https://github.com/langgenius/dify/pull/33039
* feat: add partial indexes on conversations for app_id with created_at and updated_at by @Nov1c444 in https://github.com/langgenius/dify/pull/32616
* feat: 204 http status code not return content by @fatelei in https://github.com/langgenius/dify/pull/33023
* fix: fix check workflow_run by @fatelei in https://github.com/langgenius/dify/pull/33028
* test: migrate test_dataset_service_delete_dataset SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32543
* chore(api): update Python type-checker versions by @lavish0000 in https://github.com/langgenius/dify/pull/33056
* chore(deps): bump dompurify from 3.3.0 to 3.3.2 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/33062
* test: migrate dataset permission service SQL tests to testcontainers by @KinomotoMio in https://github.com/langgenius/dify/pull/32546
* chore(deps): bump markdown from 3.5.2 to 3.8.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33064
* refactor(api): add TypedDict definitions to models/model.py by @statxc in https://github.com/langgenius/dify/pull/32925
* chore: add local pyrefly exclude workflow by @BeautyyuYanli in https://github.com/langgenius/dify/pull/33059
* fix(api): return inserted ids from Chroma and Clickzetta add_texts by @lavish0000 in https://github.com/langgenius/dify/pull/33065
* fix: show citations in advanced chat apps by @kurokobo in https://github.com/langgenius/dify/pull/32985
* fix: conversation var unexpected reset after HITL node by @hjlarry in https://github.com/langgenius/dify/pull/32936
* fix(i18n): correct French translation of "disabled" from medical term to UI-appropriate term by @Copilot in https://github.com/langgenius/dify/pull/33067
* fix(type-check): resolve missing-attribute in app dataset join update handler by @hjlarry in https://github.com/langgenius/dify/pull/33071
* chore: add support email env by @nite-knite in https://github.com/langgenius/dify/pull/33075
* feat(tasks): isolate summary generation to dedicated dataset_summary queue by @euxx in https://github.com/langgenius/dify/pull/32972
* chore: use react-grab to replace code-inspector-plugin by @hyoban in https://github.com/langgenius/dify/pull/33078
* fix(api): fix the issue that workflow_runs.started_at is overwritten while resuming by @QuantumGhost in https://github.com/langgenius/dify/pull/32851
* perf: no longer record install count for auto upgrade by @RockChinQ in https://github.com/langgenius/dify/pull/33086
* chore: bring back code-inspector-plugin and agentation by @hyoban in https://github.com/langgenius/dify/pull/33088
* chore: fix account dropdown test by @nite-knite in https://github.com/langgenius/dify/pull/33093
* test: improve coverage for some test files by @saumyatalwani in https://github.com/langgenius/dify/pull/32916
* feat(toast): add IToastProps type import to enhance type safety by @CodingOnStar in https://github.com/langgenius/dify/pull/33096
* refactor: pass KnowledgeConfiguration directly instead of dict by @pepsile in https://github.com/langgenius/dify/pull/32732
* feat: add export app messages by @hj24 in https://github.com/langgenius/dify/pull/32990
* feat: add files to message end pr32019 by @Stormhand in https://github.com/langgenius/dify/pull/32242
* chore: add TypedDict related prompt to api/AGENTS.md  by @CoralGarden52 in https://github.com/langgenius/dify/pull/33116
* fix(web): stabilize dayjs timezone tests against DST transitions by @lyzno1 in https://github.com/langgenius/dify/pull/33134
* test: remaining header component and increase branch coverage by @akashseth-ifp in https://github.com/langgenius/dify/pull/33052
* refactor: use thread.Timer instead of time.sleep by @fatelei in https://github.com/langgenius/dify/pull/33121
* test: unit test case for controllers.common module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32056
* fix: handle backslash path separators in DOCX ZIP entries exported on…(#33129) by @yijiaquan in https://github.com/langgenius/dify/pull/33131
* chore: update vinext, agentation, remove Prism in lexical by @hyoban in https://github.com/langgenius/dify/pull/33142
* fix: fix metadata filter condition not extract from {{}} by @fatelei in https://github.com/langgenius/dify/pull/33141
* feat(web): add context menu primitive and dropdown link item by @lyzno1 in https://github.com/langgenius/dify/pull/33125
* fix(web): fix tool item text not vertically centered in block selector by @lyzno1 in https://github.com/langgenius/dify/pull/33148
* refactor: deduplicate legacy section mapping in ConfigHelper by @Olexandr88 in https://github.com/langgenius/dify/pull/32715
* feat: keep connections when change node by @hjlarry in https://github.com/langgenius/dify/pull/31982
* fix: workflow_as_tool not work with json input by @hjlarry in https://github.com/langgenius/dify/pull/32554
* feat: when copy/paste multi nodes not require reconnect them by @hjlarry in https://github.com/langgenius/dify/pull/32631
* fix: fix allow handle value is none by @fatelei in https://github.com/langgenius/dify/pull/33031
* feat: support relative mode for message clean command by @hj24 in https://github.com/langgenius/dify/pull/32834
* docs: use docker compose command consistently in README by @haosenwang1018 in https://github.com/langgenius/dify/pull/33077
* refactor: reuse redis connection instead of create new one by @fatelei in https://github.com/langgenius/dify/pull/32678
* test: improve unit tests for controllers.web by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32150
* refactor: file saver decouple db engine and ssrf proxy by @fatelei in https://github.com/langgenius/dify/pull/33076
* fix: stop responding icon not display by @hjlarry in https://github.com/langgenius/dify/pull/33154
* test: unit test cases for console.datasets module  by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32179
* test: unit test case for controllers.console.workspace module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32181
* ci: ignore some major update by @hyoban in https://github.com/langgenius/dify/pull/33161
* ci: ignore ky and tailwind-merge in update by @hyoban in https://github.com/langgenius/dify/pull/33167
* chore(deps-dev): bump the storybook group in /web with 7 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33163
* chore(deps-dev): bump the eslint-group group in /web with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33168
* chore(deps): bump the npm-dependencies group across 1 directory with 55 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33170
* ci: update actions version, reuse workflow by composite action by @hyoban in https://github.com/langgenius/dify/pull/33177
* test: unit test case for controllers.console.app module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32247
* refactor: tool node decouple db by @fatelei in https://github.com/langgenius/dify/pull/33166
* fix(web): correct responding state after annotation reply completed by @JzoNgKVO in https://github.com/langgenius/dify/pull/33173
* test: add UTs for api core.trigger by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32587
* test: unit test cases for console.explore and tag module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32186
* feat: add batch download for dataset documents as ZIP and signed URL for single document download. by @ZeroZ-lab in https://github.com/langgenius/dify/pull/33100
* docs: Update Opik intergration docs by @vincentkoc in https://github.com/langgenius/dify/pull/32336
* feat: configurable Enter/Shift+Enter send behavior in embedded chat (#32295) by @agent-steven in https://github.com/langgenius/dify/pull/32300
* fix: copy button stays disabled after Human Input node pause/resume by @stakeswky in https://github.com/langgenius/dify/pull/32662
* feat: Improve SQL Comment Context for Celery Worker Queries by @Desel72 in https://github.com/langgenius/dify/pull/33058
* fix: use correct plugin_id for WaterCrawl datasource by @bgondell in https://github.com/langgenius/dify/pull/33182
* chore(ui): raise overlay primitives z-index for legacy coexistence by @lyzno1 in https://github.com/langgenius/dify/pull/33185
* test: add new unit tests for message service utilities, get message, feedback, and retention services. by @mahammadasim in https://github.com/langgenius/dify/pull/33169
* fix: prevent hydration warning from div nesting inside p for inline markdown images by @tysoncung in https://github.com/langgenius/dify/pull/32419
* test: unit test for core.rag module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32630
* feat: enterprise plugin pre uninstall by @wylswz in https://github.com/langgenius/dify/pull/33158
* fix: fix request.metadata_model_config param check by @fatelei in https://github.com/langgenius/dify/pull/33189
* refactor: use `generate_valid_password` helper for creating test account passwords by @ZeroZ-lab in https://github.com/langgenius/dify/pull/33192
* fix: ensure external knowledge API key updates are persisted by @Saber-youMianJing in https://github.com/langgenius/dify/pull/33188
* fix: nested spans and traces; by @aadereiko in https://github.com/langgenius/dify/pull/33049
* fix: copy to clipboard failed in non-secure (HTTP) contexts by @hizhujianfeng in https://github.com/langgenius/dify/pull/32287
* refactor: replace react markdown with streamdown by @WTW0313 in https://github.com/langgenius/dify/pull/32971
* ci: add anti-slop GitHub Action to detect low-quality AI PRs by @elliotllliu in https://github.com/langgenius/dify/pull/33193
* chore(deps-dev): bump the storybook group in /web with 7 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33198
* chore: update ky to 1.14.3 by @hyoban in https://github.com/langgenius/dify/pull/33201
* chore(deps-dev): bump the eslint-group group in /web with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33209
* chore(deps): bump rollup from 4.56.0 to 4.59.0 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/33197
* chore: split commands by domain by @hjlarry in https://github.com/langgenius/dify/pull/33085
* chore: switch vinext to npm, remove npm from dependabot by @hyoban in https://github.com/langgenius/dify/pull/33234
* test: add test for api core datasource by @mahammadasim in https://github.com/langgenius/dify/pull/32414
* fix(ci): add close-pr and failure label to anti-slop workflow by @RogueTex in https://github.com/langgenius/dify/pull/33236
* chore(deps): bump pypdf from 6.7.5 to 6.8.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33238
* fix: fix failed test by @fatelei in https://github.com/langgenius/dify/pull/33241
* fix: fix parse mailto / http link in table cell by @fatelei in https://github.com/langgenius/dify/pull/33224
* feat: source for plugin tasks by @zyssyz123 in https://github.com/langgenius/dify/pull/33244
* fix: PromptEditor leaves a pending blur timer that triggers a Vitest unhandled error by @ZeroZ-lab in https://github.com/langgenius/dify/pull/33253
* chore: remove optimize standalone script by @hyoban in https://github.com/langgenius/dify/pull/33256
* chore: update script for build docker by @hyoban in https://github.com/langgenius/dify/pull/33261
* chore: disable some auto fix, disable e18e rules by @hyoban in https://github.com/langgenius/dify/pull/33265
* fix: use moderation modified inputs and query by @fatelei in https://github.com/langgenius/dify/pull/33180
* fix: fix mcp tool parameter extract by @fatelei in https://github.com/langgenius/dify/pull/33258
* fix: vertically center key-value table headers in HTTP and Webhook  by @hjlarry in https://github.com/langgenius/dify/pull/33260
* test: add tests for some files in services module by @saumyatalwani in https://github.com/langgenius/dify/pull/32583
* refactor(avatar): migrate to Base UI primitives with Record size variants by @lyzno1 in https://github.com/langgenius/dify/pull/33268
* chore: fix dependabot alerts by @hyoban in https://github.com/langgenius/dify/pull/33277
* fix: main CI by @hjlarry in https://github.com/langgenius/dify/pull/33276
* test: add unit tests for some services by @poojanInfocusp in https://github.com/langgenius/dify/pull/32866
* refactor: move to modern monaco by @hyoban in https://github.com/langgenius/dify/pull/32966
* chore: skip pre commit check for merge by @hyoban in https://github.com/langgenius/dify/pull/33287
* refactor(select): align with Base UI data attributes and Figma specs by @lyzno1 in https://github.com/langgenius/dify/pull/33286
* feat: notification by @zyssyz123 in https://github.com/langgenius/dify/pull/32192
* feat: support in site message by @iamjoel in https://github.com/langgenius/dify/pull/33255
* chore: split /api dependabot groups by logical dependency category by @Copilot in https://github.com/langgenius/dify/pull/33297
* chore(deps): bump the flask group in /api with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33301
* chore(deps): bump the google group in /api with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33304
* chore(deps): bump astral-sh/setup-uv from 7.3.1 to 7.4.0 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33303
* chore(deps): bump the pydantic group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33302
* chore(deps): bump the google group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33299
* chore(deps): bump the flask group in /api with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33298
* chore(deps): bump the llm group in /api with 6 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33305
* chore(deps): update redis[hiredis] requirement from ~=7.2.0 to ~=7.3.0 in /api in the database group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33306
* chore(deps): bump the storage group in /api with 7 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33315
* chore(deps): bump mlflow-skinny from 3.6.0 to 3.10.1 in /api in the llm group across 1 directory by @dependabot[bot] in https://github.com/langgenius/dify/pull/33317
* chore(deps): bump opentelemetry-propagator-b3 from 1.28.0 to 1.40.0 in /api in the opentelemetry group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33308
* refactor: Unify NodeConfigDict.data and BaseNodeData by @BeautyyuYanli in https://github.com/langgenius/dify/pull/32780
* chore(deps-dev): bump the dev group across 1 directory with 18 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33322
* chore(deps): bump the python-packages group across 1 directory with 13 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33319
* ci: Revert "chore(deps): bump the python-packages group across 1 directory with 13 updates" by @asukaminato0721 in https://github.com/langgenius/dify/pull/33331
* test: improve unit tests for controllers.inner_api by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32203
* test: unit test cases for core.callback, core.base, core.entities module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32471
* test: unit test cases core.agent module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32474
* fix: allow line breaks when a field value overflows due to excessive length by @douxc in https://github.com/langgenius/dify/pull/33339
* test: unit test cases for core.app.apps module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32482
* test: add UTs for api/ services.plugin by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32588
* test: unit test cases for core.variables, core.plugin, core.prompt module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32637
* test: add UTs for api/services recommend_app, tools, workflow by @cryptus-neoxys in https://github.com/langgenius/dify/pull/32645
* test: add test for core extension, external_data_tool and llm generator by @mahammadasim in https://github.com/langgenius/dify/pull/32468
* test: added for core logging and core mcp by @mahammadasim in https://github.com/langgenius/dify/pull/32478
* test: added test for core token buffer memory and model runtime by @mahammadasim in https://github.com/langgenius/dify/pull/32512
* test: Unit test cases for core.tools module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32447
* chore: update vinext by @hyoban in https://github.com/langgenius/dify/pull/33347
* refactor(switch): Base UI migration with loading/skeleton variants by @lyzno1 in https://github.com/langgenius/dify/pull/33345
* test: improve coverage parameters for some files in base by @saumyatalwani in https://github.com/langgenius/dify/pull/33207
* test: improve coverage for some files by @saumyatalwani in https://github.com/langgenius/dify/pull/33218
* test: added tests for backend core.ops module by @mahammadasim in https://github.com/langgenius/dify/pull/32639
* test: added test for services of ops, summary, vector, website and ji… by @mahammadasim in https://github.com/langgenius/dify/pull/32893
* test: added test cases for core.workflow module by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/33126
* test: refactor mock implementation in markdown component tests by @CodingOnStar in https://github.com/langgenius/dify/pull/33350
* chore: use tsconfigPaths for vinext by @hyoban in https://github.com/langgenius/dify/pull/33363
* fix: The HTTP Request node panel supports line break and overflow handling for variable values by @douxc in https://github.com/langgenius/dify/pull/33359
* fix: test_get_credentials_and_config_selects_plugin_id_and_key_api_ke… by @fatelei in https://github.com/langgenius/dify/pull/33361
* chore(web): disable i18next support notice by @Copilot in https://github.com/langgenius/dify/pull/33309
* chore: add dev proxy server, update deps by @hyoban in https://github.com/langgenius/dify/pull/33371
* chore: remove unused WEAVIATE_GRPC_ENABLED config option by @majiayu000 in https://github.com/langgenius/dify/pull/33378
* feat(workflow): add edge context menu with delete support by @lyzno1 in https://github.com/langgenius/dify/pull/33391
* chore: add tracking info of in site message by @iamjoel in https://github.com/langgenius/dify/pull/33394
* fix: with_debug_recipient() silently drops debug emails when user_id is None or empty string by @gambletan in https://github.com/langgenius/dify/pull/33373
* test: enforce app/components coverage gates in web tests by @CodingOnStar in https://github.com/langgenius/dify/pull/33395
* test: [Refactor/Chore] use Testcontainers to do sql test #32454 by @asukaminato0721 in https://github.com/langgenius/dify/pull/32460
* chore(deps): bump orjson from 3.11.4 to 3.11.6 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33380
* chore: use vite plus by @hyoban in https://github.com/langgenius/dify/pull/33407
* refactor(web): split share text-generation and add high-coverage tests by @CodingOnStar in https://github.com/langgenius/dify/pull/33408
* fix(api): allow punctuation in uploaded filenames by @yevanmore in https://github.com/langgenius/dify/pull/33364
* fix: correctly detect required columns in archived workflow run restore by @hjlarry in https://github.com/langgenius/dify/pull/33403
* chore(deps): bump pyjwt from 2.11.0 to 2.12.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33437
* chore(deps): bump fickling from 0.1.9 to 0.1.10 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33436
* refactor: replace sa.String with EnumText in mapped_column for type s… by @tmimmanuel in https://github.com/langgenius/dify/pull/33332
* refactor(tests): use enum values instead of string literals for status fields by @nielskaspers in https://github.com/langgenius/dify/pull/33441
* refactor: replace remaining sa.String with EnumText 2 by @tmimmanuel in https://github.com/langgenius/dify/pull/33448
* refactor(workflow): move agent node back to core workflow by @WH-2099 in https://github.com/langgenius/dify/pull/33431
* refactor(api): move workflow knowledge nodes and trigger nodes by @laipz8200 in https://github.com/langgenius/dify/pull/33445
* fix: preserve custom icons in exported DSL by @majiayu000 in https://github.com/langgenius/dify/pull/33424
* fix: add doc_type to Weaviate properties and default Vector attributes by @RickDamon in https://github.com/langgenius/dify/pull/33398
* fix: update INTERNAL_FILES_URL example default for Docker Desktop by @laipz8200 in https://github.com/langgenius/dify/pull/33447
* feat: Add Hologres as a VDB & FullText DB choice by @TimothyDing in https://github.com/langgenius/dify/pull/32830
* fix: downgrade image download failure log from ERROR to WARNING by @tysoncung in https://github.com/langgenius/dify/pull/33429
* fix(api): resolve type errors in service API wraps tests by @mahmoodhamdi in https://github.com/langgenius/dify/pull/33467
* feat: Remove GPT-4 special-casing from default model selection by @laipz8200 in https://github.com/langgenius/dify/pull/33458
* fix: use parameterized queries to prevent SQL injection in vector stores by @mango766 in https://github.com/langgenius/dify/pull/33421
* chore(deps): bump sqlalchemy from 2.0.44 to 2.0.48 in /api in the database group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33487
* refactor: llm decouple code executor module by @fatelei in https://github.com/langgenius/dify/pull/33400
* chore(deps): bump the storage group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33488
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33485
* chore(deps): bump litellm from 1.82.1 to 1.82.2 in /api in the llm group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33480
* chore(deps-dev): update faker requirement from ~=40.8.0 to ~=40.11.0 in /api in the dev group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33482
* chore: add indexes for human_input_forms query patterns by @hjlarry in https://github.com/langgenius/dify/pull/32849
* chore(deps): bump the storage group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33481
* chore(deps): bump the llm group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33491
* chore(deps): bump the python-packages group in /api with 13 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33484
* ci: Simplify nltk data download in Dockerfile by @asukaminato0721 in https://github.com/langgenius/dify/pull/33495
* fix: enterprise API error handling and license enforcement by @GareArc in https://github.com/langgenius/dify/pull/33044
* chore(deps): bump google-auth from 2.49.0 to 2.49.1 in /api in the google group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33483
* feat: Add weaviate client single instance by @lcedaw in https://github.com/langgenius/dify/pull/27910
* refactor(web): consolidate query/mutation guidance and deprecate use-base wrappers by @lyzno1 in https://github.com/langgenius/dify/pull/33456
* chore(deps-dev): bump the vdb group across 1 directory with 15 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33502
* chore: change draft var to user scoped by @hjlarry in https://github.com/langgenius/dify/pull/33066
* fix: fix weaviate_vector test failed by @fatelei in https://github.com/langgenius/dify/pull/33511
* feat(diff-coverage): implement coverage analysis for changed components by @CodingOnStar in https://github.com/langgenius/dify/pull/33514
* refactor(web): split text-generation result flow and raise coverage by @CodingOnStar in https://github.com/langgenius/dify/pull/33499
* chore: remove next font by @hyoban in https://github.com/langgenius/dify/pull/33512
* feat(diff-coverage): enhance coverage reporting for multi-line statements and branches   by @CodingOnStar in https://github.com/langgenius/dify/pull/33516
* chore: compatiable resource_metadata return without scheme by @fatelei in https://github.com/langgenius/dify/pull/33506
* chore: remove next img by @hyoban in https://github.com/langgenius/dify/pull/33517
* feat: apply markdown rendering to HITL email, sanitize email subject and body by @Blackoutta in https://github.com/langgenius/dify/pull/32305
* test: limit web diff coverage to current push range by @CodingOnStar in https://github.com/langgenius/dify/pull/33523
* chore: update plugin daemon version to 0.5.4-local in Docker compose files by @QuantumGhost in https://github.com/langgenius/dify/pull/33526
* chore: fix dep alerts by @hyoban in https://github.com/langgenius/dify/pull/33527
* chore(api): rename configuration `EVENT_BUS_REDIS_CLUSTERS` by @QuantumGhost in https://github.com/langgenius/dify/pull/33528
* fix(web): migrate InputNumber to Base UI NumberField by @lyzno1 in https://github.com/langgenius/dify/pull/33520
* refactor(custom): reorganize web app brand module and raise coverage threshold by @CodingOnStar in https://github.com/langgenius/dify/pull/33531
* chore(deps-dev): bump the dev group across 1 directory with 19 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33525
* refactor(api): simplify response session eligibility by @laipz8200 in https://github.com/langgenius/dify/pull/33538
* chore: update coverage summary check in web tests workflow by @CodingOnStar in https://github.com/langgenius/dify/pull/33533
* chore(deps): bump authlib from 1.6.7 to 1.6.9 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33544
* refactor(api): replace dict/Mapping with TypedDict in dataset models by @statxc in https://github.com/langgenius/dify/pull/33550
* fix(web): page crash in knowledge retrieval node caused by dataset selection and score threshold by @JzoNgKVO in https://github.com/langgenius/dify/pull/33553
* fix: raise block selector overlay z-index by @lyzno1 in https://github.com/langgenius/dify/pull/33557
* refactor: use hoisted modern monaco by @hyoban in https://github.com/langgenius/dify/pull/33540
* refactor(api): replace dict/Mapping with TypedDict in trigger.py and workflow.py by @statxc in https://github.com/langgenius/dify/pull/33562
* test(web): ignore default-branch merge commits in diff coverage by @CodingOnStar in https://github.com/langgenius/dify/pull/33564
* chore: revert #33540 #32966 by @hyoban in https://github.com/langgenius/dify/pull/33566
* feat: add metrics to clean message and workflow-run task by @hjlarry in https://github.com/langgenius/dify/pull/33143
* fix(web): preserve public workflow SSE reconnect after pause by @laipz8200 in https://github.com/langgenius/dify/pull/33552

## New Contributors
* @razerzhang made their first contribution in https://github.com/langgenius/dify/pull/31843
* @saumyatalwani made their first contribution in https://github.com/langgenius/dify/pull/32201
* @poojanInfocusp made their first contribution in https://github.com/langgenius/dify/pull/32154
* @Haohao-end made their first contribution in https://github.com/langgenius/dify/pull/32342
* @apoorvdarshan made their first contribution in https://github.com/langgenius/dify/pull/32386
* @akashseth-ifp made their first contribution in https://github.com/langgenius/dify/pull/32281
* @mahammadasim made their first contribution in https://github.com/langgenius/dify/pull/32283
* @tysoncung made their first contribution in https://github.com/langgenius/dify/pull/32461
* @Hypertension42 made their first contribution in https://github.com/langgenius/dify/pull/32490
* @J0su3Code made their first contribution in https://github.com/langgenius/dify/pull/32493
* @stakeswky made their first contribution in https://github.com/langgenius/dify/pull/32498
* @rajatagarwal-oss made their first contribution in https://github.com/langgenius/dify/pull/32057
* @cryptus-neoxys made their first contribution in https://github.com/langgenius/dify/pull/32073
* @Pandaaaa906 made their first contribution in https://github.com/langgenius/dify/pull/32560
* @ajuijas made their first contribution in https://github.com/langgenius/dify/pull/32510
* @toroleapinc made their first contribution in https://github.com/langgenius/dify/pull/32653
* @haku-ink made their first contribution in https://github.com/langgenius/dify/pull/32636
* @tda1017 made their first contribution in https://github.com/langgenius/dify/pull/32701
* @nielskaspers made their first contribution in https://github.com/langgenius/dify/pull/32718
* @slegarraga made their first contribution in https://github.com/langgenius/dify/pull/32768
* @Br1an67 made their first contribution in https://github.com/langgenius/dify/pull/32772
* @akkoaya made their first contribution in https://github.com/langgenius/dify/pull/31528
* @hwb96 made their first contribution in https://github.com/langgenius/dify/pull/32778
* @stablegenius49 made their first contribution in https://github.com/langgenius/dify/pull/32813
* @Echo0ff made their first contribution in https://github.com/langgenius/dify/pull/32828
* @nightcityblade made their first contribution in https://github.com/langgenius/dify/pull/32721
* @RenzoMXD made their first contribution in https://github.com/langgenius/dify/pull/32942
* @caoergou made their first contribution in https://github.com/langgenius/dify/pull/32995
* @lavish0000 made their first contribution in https://github.com/langgenius/dify/pull/33056
* @statxc made their first contribution in https://github.com/langgenius/dify/pull/32925
* @pepsile made their first contribution in https://github.com/langgenius/dify/pull/32732
* @Stormhand made their first contribution in https://github.com/langgenius/dify/pull/32242
* @CoralGarden52 made their first contribution in https://github.com/langgenius/dify/pull/33116
* @Olexandr88 made their first contribution in https://github.com/langgenius/dify/pull/32715
* @haosenwang1018 made their first contribution in https://github.com/langgenius/dify/pull/33077
* @vincentkoc made their first contribution in https://github.com/langgenius/dify/pull/32336
* @agent-steven made their first contribution in https://github.com/langgenius/dify/pull/32300
* @Desel72 made their first contribution in https://github.com/langgenius/dify/pull/33058
* @bgondell made their first contribution in https://github.com/langgenius/dify/pull/33182
* @Saber-youMianJing made their first contribution in https://github.com/langgenius/dify/pull/33188
* @aadereiko made their first contribution in https://github.com/langgenius/dify/pull/33049
* @hizhujianfeng made their first contribution in https://github.com/langgenius/dify/pull/32287
* @elliotllliu made their first contribution in https://github.com/langgenius/dify/pull/33193
* @RogueTex made their first contribution in https://github.com/langgenius/dify/pull/33236
* @gambletan made their first contribution in https://github.com/langgenius/dify/pull/33373
* @tmimmanuel made their first contribution in https://github.com/langgenius/dify/pull/33332
* @RickDamon made their first contribution in https://github.com/langgenius/dify/pull/33398
* @TimothyDing made their first contribution in https://github.com/langgenius/dify/pull/32830
* @mahmoodhamdi made their first contribution in https://github.com/langgenius/dify/pull/33467
* @mango766 made their first contribution in https://github.com/langgenius/dify/pull/33421

**Full Changelog**: https://github.com/langgenius/dify/compare/1.13.0...1.13.1

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.13.1` · 2026-03-17 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.13.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
