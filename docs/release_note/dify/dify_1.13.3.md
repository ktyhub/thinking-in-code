---
title: "dify 1.13.3"
project: "dify"
repo: "langgenius/dify"
tag: "1.13.3"
published: "2026-03-27"
type: "patch"
lang: "en"
summary: "Our latest patch release, v1.13.3, focuses on stability and correctness across workflow execution, streaming, and knowledge retrieval. Here's a quick look at the most important updates:"
---

# dify 1.13.3

## 🚀 What's New in v1.13.3?
Our latest patch release, v1.13.3, focuses on stability and correctness across workflow execution, streaming, and knowledge retrieval. Here's a quick look at the most important updates:

### 🎬 New Features
- **Workflow Configuration**: Added variable-reference support for model parameters in LLM, Question Classifier, and Variable Extractor nodes by @scdeng in #33082.

### 🛠️ Bug Fixes
- **Streaming Reliability**: Fixed `StreamsBroadcastChannel` replay and concurrency issues to keep frontend/backend event delivery stable by @QuantumGhost in #34030 and #34061.
- **Workflow Editor Behavior**: Fixed pasted nodes retaining Loop/Iteration metadata and prevented `HumanInput` nodes from being pasted into invalid containers by @majiayu000 and @hjlarry in #29983 and #34077.
- **Runtime Execution**: Restored prompt message transformation logic and corrected `max_retries=0` handling for executor-driven HTTP Request execution by @QuantumGhost, @fatelei, and @kurokobo in #33666, #33619, and #33688.
- **Knowledge Retrieval**: Preserved citation metadata in web responses, fixed crashes when dataset icon metadata is missing, corrected hit-count query filtering, and restored indexed document chunk previews by @Theysua, @copilot-swe-agent, and @fatelei in #33778, #33907, #33757, and #33942.

### 🔧 Under the Hood
- **Patch Stability**: This release prioritizes targeted fixes for workflow runtime behavior, real-time streaming, and knowledge base usability for teams upgrading from v1.13.2.

---

## Upgrade Guide

> [!IMPORTANT]
> The Sandbox image used by Dify v1.13.3 expects the following Python and Node.js paths.
> If you upgraded from an older Docker Compose deployment and already have `docker/volumes/sandbox/conf/config.yaml`, update it on the host machine:
> ```yaml
> python_path: /opt/python/bin/python3
> nodejs_path: /usr/local/bin/node
> ```
> 
> Do not edit the file inside the sandbox container. The directory `docker/volumes/sandbox/conf` is mounted into the container as `/conf`, so host changes persist after container restarts.

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

### Source Code Deployments

1. Stop the API server, Worker, and Web frontend Server.

2. Get the latest code from the release branch:

   ```bash
   git checkout 1.13.3
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
* refactor(web): number inputs to use Base UI NumberField by @lyzno1 in https://github.com/langgenius/dify/pull/33539
* feat(web): add base ui toast by @lyzno1 in https://github.com/langgenius/dify/pull/33569
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/33585
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/33586
* refactor(api):  Query API to select function_1 by @RenzoMXD in https://github.com/langgenius/dify/pull/33565
* refactor: replace sa.String with EnumText for mapped_columns by @tmimmanuel in https://github.com/langgenius/dify/pull/33547
* refactor(api): replace dict/Mapping with TypedDict in core/app by @statxc in https://github.com/langgenius/dify/pull/33601
* chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33611
* refactor(api): replace dict/Mapping with TypedDict in core/tools by @bittoby in https://github.com/langgenius/dify/pull/33610
* refactor: use EnumText for dataset and replace string literals 4 by @tmimmanuel in https://github.com/langgenius/dify/pull/33606
* chore(deps): bump next packages to 16.1.7 by @lyzno1 in https://github.com/langgenius/dify/pull/33616
* fix: tighten toast typing and restore focus visibility by @lyzno1 in https://github.com/langgenius/dify/pull/33591
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/33618
* fix(toast): refine stacked hover and focus styles by @lyzno1 in https://github.com/langgenius/dify/pull/33620
* fix: fix max_retries is hardcode by @fatelei in https://github.com/langgenius/dify/pull/33619
* feat: enhance model plugin workflow checks and model provider management UX by @lyzno1 in https://github.com/langgenius/dify/pull/33289
* refactor: route low-cost next modules through compat re-exports by @lyzno1 in https://github.com/langgenius/dify/pull/33622
* refactor(api): replace dict/Mapping with TypedDict in core/rag retrieval_service.py by @bittoby in https://github.com/langgenius/dify/pull/33615
* refactor(web): move component tests into sibling __tests__ directories by @CodingOnStar in https://github.com/langgenius/dify/pull/33623
* refactor: route next/link through compat re-export by @lyzno1 in https://github.com/langgenius/dify/pull/33632
* refactor(api): replace dict with SummaryIndexSettingDict TypedDict in core/rag by @bittoby in https://github.com/langgenius/dify/pull/33633
* refactor: use EnumText in provider models by @tmimmanuel in https://github.com/langgenius/dify/pull/33634
* refactor: route next/navigation through compat re-export by @lyzno1 in https://github.com/langgenius/dify/pull/33636
* fix: add responding error information when obtain pipeline template detail failed by @FFXN in https://github.com/langgenius/dify/pull/33628
* fix: clarify webhook debug endpoint behavior by @laipz8200 in https://github.com/langgenius/dify/pull/33597
* chore: compatiable end-user and end_user by @fatelei in https://github.com/langgenius/dify/pull/33638
* test(workflow): reorganize specs into __tests__ and align with shared test infrastructure by @CodingOnStar in https://github.com/langgenius/dify/pull/33625
* refactor(web): migrate core toast call sites to base ui toast by @lyzno1 in https://github.com/langgenius/dify/pull/33643
* feat: remove weaviate client __del__ method by @fatelei in https://github.com/langgenius/dify/pull/33593
* fix: sync workflow description and name to MCP server on update by @Desel72 in https://github.com/langgenius/dify/pull/33637
* fix(api): Preserving the content transform logic in fetch_prompt_messages by @QuantumGhost in https://github.com/langgenius/dify/pull/33666
* refactor(api): type default_retrieval_model with DefaultRetrievalModelDict in core/rag by @bittoby in https://github.com/langgenius/dify/pull/33676
* chore: bump version to 1.13.2 by @QuantumGhost in https://github.com/langgenius/dify/pull/33681
* refactor: move to std-semver by @hyoban in https://github.com/langgenius/dify/pull/33682
* ci: revert agent reporter by @hyoban in https://github.com/langgenius/dify/pull/33685
* fix: leaked set timeout by @hyoban in https://github.com/langgenius/dify/pull/33692
* refactor: EnumText for preferred_provider_type MessageChain, Banner by @tmimmanuel in https://github.com/langgenius/dify/pull/33696
* chore(deps): bump ujson from 5.9.0 to 5.12.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33683
* refactor(api): type Firecrawl API responses with TypedDict by @bittoby in https://github.com/langgenius/dify/pull/33691
* chore(deps): bump pypdf from 6.8.0 to 6.9.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/33698
* refactor(api): type WaterCrawl API responses with TypedDict by @bittoby in https://github.com/langgenius/dify/pull/33700
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/33706
* feat(web): add base ui scroll area primitive by @lyzno1 in https://github.com/langgenius/dify/pull/33727
* ci: use codecov by @hyoban in https://github.com/langgenius/dify/pull/33723
* fix: compatible with emoji/object icons in plugin card icon resolver by @IthacaDream in https://github.com/langgenius/dify/pull/33732
* refactor: use EnumText(StorageType) for UploadFile.storage_type by @tmimmanuel in https://github.com/langgenius/dify/pull/33728
* feat(confirm): input app name for app deletion confirmation by @bowenliang123 in https://github.com/langgenius/dify/pull/33660
* refactor(web): sidebar app list to scroll area component by @lyzno1 in https://github.com/langgenius/dify/pull/33733
* refactor: migrate db.session.query to select in infra layer by @RenzoMXD in https://github.com/langgenius/dify/pull/33694
* fix: pass default root to OpenDAL Operator for fs scheme by @RickDamon in https://github.com/langgenius/dify/pull/33678
* refactor(web): migrate auth toast calls to ui toast by @lyzno1 in https://github.com/langgenius/dify/pull/33744
* chore: add pytest XML and branch coverage reports by @laipz8200 in https://github.com/langgenius/dify/pull/33730
* style(scroll-bar): align design by @lyzno1 in https://github.com/langgenius/dify/pull/33751
* fix(api): add `trigger_info` to WorkflowNodeExecutionMetadataKey by @QuantumGhost in https://github.com/langgenius/dify/pull/33753
* fix: use RetrievalModel type for retrieval_model field in HitTestingPayload by @lyfuci in https://github.com/langgenius/dify/pull/33750
* fix: preserve timing metrics in parallel iteration by @BeautyyuYanli in https://github.com/langgenius/dify/pull/33216
* test(workflow): add unit tests for workflow components  by @CodingOnStar in https://github.com/langgenius/dify/pull/33741
* fix: Add dataset_id filters to the hit_count's subqueries by @FFXN in https://github.com/langgenius/dify/pull/33757
* refactor: simplify the scroll area API for sidebar layouts by @lyzno1 in https://github.com/langgenius/dify/pull/33761
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/33749
* fix(tests): correct keyword arguments in tool provider test constructors by @xr843 in https://github.com/langgenius/dify/pull/33767
* refactor: use EnumText for MessageFeedback and MessageFile columns by @tmimmanuel in https://github.com/langgenius/dify/pull/33738
* refactor(api): type bare dict/list annotations in remaining rag folder by @bittoby in https://github.com/langgenius/dify/pull/33775
* refactor: migrate db.session.query to select in inner_api and web controllers by @RenzoMXD in https://github.com/langgenius/dify/pull/33774
* fix: remove legacy z-index overrides on model config popup by @xr843 in https://github.com/langgenius/dify/pull/33769
* fix(api): preserve citation metadata in web responses by @Theysua in https://github.com/langgenius/dify/pull/33778
* fix: stop think block timer in historical conversations by @Lubrsy706 in https://github.com/langgenius/dify/pull/33083
* refactor: migrate tag filter overlay and remove dead z-index override prop by @lyzno1 in https://github.com/langgenius/dify/pull/33791
* refactor(toast): migrate dataset-pipeline to new ui toast API and extract i18n by @lyzno1 in https://github.com/langgenius/dify/pull/33794
* fix: add max_retries=0 for executor by @kurokobo in https://github.com/langgenius/dify/pull/33688
* refactor: migrate high-risk overlay follow-up selectors by @lyzno1 in https://github.com/langgenius/dify/pull/33795
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/33796
* refactor(web): migrate tools/MCP/external-knowledge toast usage to UI toast and add i18n by @lyzno1 in https://github.com/langgenius/dify/pull/33797
* fix: adding a restore API for version control on workflow draft by @BeautyyuYanli in https://github.com/langgenius/dify/pull/33582
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/33804
* docs: add automated agent contribution note to CONTRIBUTING.md 🤖🤖🤖 by @yuchengpersonal in https://github.com/langgenius/dify/pull/33809
* refactor(web): update frontend toast call sites to use the new shortcut API by @lyzno1 in https://github.com/langgenius/dify/pull/33808
* chore: neutral PR opt-in instructions by @asukaminato0721 in https://github.com/langgenius/dify/pull/33817
* fix(chat): fix image re-render due to opener remount by @WTW0313 in https://github.com/langgenius/dify/pull/33816
* docs(web): update dev guide by @hyoban in https://github.com/langgenius/dify/pull/33815
* chore(deps): bump flatted from 3.4.1 to 3.4.2 in /sdks/nodejs-client by @dependabot[bot] in https://github.com/langgenius/dify/pull/33821
* chore: enable erasableOnly in lint by @jubinsoni in https://github.com/langgenius/dify/pull/31487
* refactor(workspace): optimize /workspaces plan resolution for SaaS and enterprise with resilient fallback by @lin-snow in https://github.com/langgenius/dify/pull/33788
* refactor(api): type workflow service dicts with TypedDict by @bittoby in https://github.com/langgenius/dify/pull/33829
* refactor: select in console auth, setup and apikey by @RenzoMXD in https://github.com/langgenius/dify/pull/33790
* refactor(api): type tool service dicts with TypedDict by @bittoby in https://github.com/langgenius/dify/pull/33836
* refactor: use EnumText for Conversation/Message invoke_from and from_source by @tmimmanuel in https://github.com/langgenius/dify/pull/33832
* refactor: migrate workflow run repository tests from mocks to … by @YB0y in https://github.com/langgenius/dify/pull/33837
* refactor: migrate workflow run repository unit tests from mocks to te… by @Desel72 in https://github.com/langgenius/dify/pull/33843
* refactor: select in console explore and workspace controllers by @RenzoMXD in https://github.com/langgenius/dify/pull/33842
* chore: use selectinload instead of joinedload in conversation query by @caoergou in https://github.com/langgenius/dify/pull/33014
* fix: test error by matching pkg versioin with docker compose by @ckstck in https://github.com/langgenius/dify/pull/33857
* perf: tidb_on_qdrant_vector delete_by_ids use batch delete by @fatelei in https://github.com/langgenius/dify/pull/33846
* test: added for core module moderation, repositories, schemas by @mahammadasim in https://github.com/langgenius/dify/pull/32514
* test: add unit tests for services-part-1 by @poojanInfocusp in https://github.com/langgenius/dify/pull/33050
* test: improve code-cov for controller tests  by @cryptus-neoxys in https://github.com/langgenius/dify/pull/33225
* chore(deps): bump anthropics/claude-code-action from 1.0.75 to 1.0.76 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33875
* chore: add guard tests for billing by @hj24 in https://github.com/langgenius/dify/pull/33831
* fix(i18n): standardize datetime display to 24-hour format on /apps page by @bowenliang123 in https://github.com/langgenius/dify/pull/33847
* feat(build): set root directory for turbopack configuration by @bowenliang123 in https://github.com/langgenius/dify/pull/33812
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/33862
* fix: remove contradictory optional chain in chat/utils.ts by @yoloni-9527 in https://github.com/langgenius/dify/pull/33841
* refactor(web): migrate dataset-related toast callsites to base/ui/toast and update tests by @lyzno1 in https://github.com/langgenius/dify/pull/33892
* fix: type object 'str' has no attribute 'LLM' by @fatelei in https://github.com/langgenius/dify/pull/33899
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/33894
* fix: handle null email/name from GitHub API for private-email users by @Copilot in https://github.com/langgenius/dify/pull/33882
* docs: EU AI Act compliance guide for Dify deployers by @BipinRimal314 in https://github.com/langgenius/dify/pull/33838
* refactor: migrate credit pool service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33898
* refactor: use EnumText for Conversation/Message invoke_from and from_source by @tmimmanuel in https://github.com/langgenius/dify/pull/33901
* refactor: migrate workflow deletion tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33904
* refactor: migrate conversation variable updater tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33903
* test: migrate dataset permission tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33906
* chore(deps): bump boto3 from 1.42.68 to 1.42.73 in /api in the storage group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33871
* chore(deps): bump litellm from 1.82.2 to 1.82.6 in /api in the llm group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33870
* chore(deps): bump google-api-python-client from 2.192.0 to 2.193.0 in /api in the google group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33868
* chore(deps-dev): update pytest-cov requirement from ~=7.0.0 to ~=7.1.0 in /api in the dev group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33872
* chore(deps): bump pydantic-extra-types from 2.11.0 to 2.11.1 in /api in the pydantic group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33876
* chore: remove log level reset by @fatelei in https://github.com/langgenius/dify/pull/33914
* refactor: migrate attachment service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33900
* refactor(web): remove legacy data-source settings by @lyzno1 in https://github.com/langgenius/dify/pull/33905
* fix: crash when dataset icon_info is undefined in Knowledge Retrieval node by @Copilot in https://github.com/langgenius/dify/pull/33907
* chore(deps): bump the llm group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33916
* chore(deps): bump google-cloud-aiplatform from 1.141.0 to 1.142.0 in /api in the google group across 1 directory by @dependabot[bot] in https://github.com/langgenius/dify/pull/33917
* chore(deps): bump the python-packages group in /api with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33873
* refactor: select in console app message controller by @RenzoMXD in https://github.com/langgenius/dify/pull/33893
* refactor: rewrite docker/dify-env-sync.sh in Python for better maintainability by @mahmoodhamdi in https://github.com/langgenius/dify/pull/33466
* chore(deps-dev): bump the storage group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33915
* chore(dep): move hono and @hono/node-server to devDependencies by @bowenliang123 in https://github.com/langgenius/dify/pull/33742
* chore(deps-dev): bump alibabacloud-gpdb20160503 from 3.8.3 to 5.1.0 in /api in the vdb group by @dependabot[bot] in https://github.com/langgenius/dify/pull/33879
* chore(deps-dev): bump the dev group across 1 directory with 12 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/33919
* refactor(web): migrate members invite overlays to base ui by @lyzno1 in https://github.com/langgenius/dify/pull/33922
* refactor: migrate execution extra content repository tests from mocks to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33852
* test(workflow): add unit tests for workflow components by @CodingOnStar in https://github.com/langgenius/dify/pull/33910
* feat: enhance banner tracking with impression and click events by @CodingOnStar in https://github.com/langgenius/dify/pull/33926
* refactor(web): replace MediaType enum with const object by @Desel72 in https://github.com/langgenius/dify/pull/33834
* feat: squid force ipv4 by @fatelei in https://github.com/langgenius/dify/pull/33556
* test(workflow): improve dataset item tests with edit and remove functionality by @CodingOnStar in https://github.com/langgenius/dify/pull/33937
* ci: fix  AttributeError: 'Flask' object has no attribute 'login_manager' FAILED #33891 by @asukaminato0721 in https://github.com/langgenius/dify/pull/33896
* fix: do not block upsert for baidu vdb by @letterbeezps in https://github.com/langgenius/dify/pull/33280
* test: migrate file service zip and lookup tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33944
* test: migrate end user service batch tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33947
* test: remove mock-based tests superseded by testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33946
* test: migrate batch update document status tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33951
* feat(firecrawl): follow pagination when crawl status is completed by @kurokobo in https://github.com/langgenius/dify/pull/33864
* fix(i18n): comprehensive Turkish (tr-TR) translation fixes and missing keys by @bakiburakogun in https://github.com/langgenius/dify/pull/33885
* test: migrate dataset service create dataset tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33945
* test: migrate api based extension service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33952
* test: migrate saved message service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33949
* refactor: use EnumText for WorkflowAppLog.created_from and WorkflowArchiveLog columns by @tmimmanuel in https://github.com/langgenius/dify/pull/33954
* refactor: use EnumText for ApiToken.type by @tmimmanuel in https://github.com/langgenius/dify/pull/33961
* test: remove mock tests superseded by testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33957
* test: migrate workflow tools manage service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33955
* refactor: use EnumText for TenantCreditPool.pool_type by @tmimmanuel in https://github.com/langgenius/dify/pull/33959
* refactor: select in remaining console app controllers by @RenzoMXD in https://github.com/langgenius/dify/pull/33969
* test: migrate api tools manage service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33956
* test: migrate oauth server service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33958
* refactor: use EnumText for DocumentSegment.type by @tmimmanuel in https://github.com/langgenius/dify/pull/33979
* refactor: use EnumText for TidbAuthBinding.status and MessageFile.type by @tmimmanuel in https://github.com/langgenius/dify/pull/33975
* test: migrate password reset tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33974
* fix(web): update account settings header by @lyzno1 in https://github.com/langgenius/dify/pull/33965
* fix: fix chunk not display in indexed document by @fatelei in https://github.com/langgenius/dify/pull/33942
* ci: update actions version, fix cache by @hyoban in https://github.com/langgenius/dify/pull/33950
* fix(sdk): patch flatted vulnerability in nodejs client lockfile by @lyzno1 in https://github.com/langgenius/dify/pull/33996
* refactor(api): type auth service credentials with TypedDict by @bittoby in https://github.com/langgenius/dify/pull/33867
* refactor: use EnumText for ApiToolProvider.schema_type_str and Docume… by @tmimmanuel in https://github.com/langgenius/dify/pull/33983
* refactor(web): migrate plugin toast usage to new UI toast API and update tests by @lyzno1 in https://github.com/langgenius/dify/pull/34001
* test: enhance useChat hook tests with additional scenarios by @WTW0313 in https://github.com/langgenius/dify/pull/33928
* fix(rate_limit): flush redis cache when __init__ is triggered by changing max_active_requests by @qwedc001 in https://github.com/langgenius/dify/pull/33830
* fix: fix omitted app icon_type updates by @QuantumGhost in https://github.com/langgenius/dify/pull/33988
* refactor: lazy load large modules by @hyoban in https://github.com/langgenius/dify/pull/33888
* feat(web): refactor pricing modal scrolling and accessibility by @lyzno1 in https://github.com/langgenius/dify/pull/34011
* feat: configurable model parameters with variable reference support in LLM, Question Classifier and Variable Extractor  nodes by @scdeng in https://github.com/langgenius/dify/pull/33082
* test(workflow): add helper specs and raise targeted workflow coverage by @CodingOnStar in https://github.com/langgenius/dify/pull/33995
* chore: Add initial configuration for Gemini by @asukaminato0721 in https://github.com/langgenius/dify/pull/34012
* test: migrate oauth tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33973
* refactor: select in console datasets document controller by @RenzoMXD in https://github.com/langgenius/dify/pull/34019
* test: remove feedback service tests superseded by testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34026
* test: migrate retention delete archived workflow run tests to testcon… by @Desel72 in https://github.com/langgenius/dify/pull/34020
* test: remove agent service tests superseded by testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34023
* chore: bump pyrefly from 0.55.0 to 0.57.0 by @yuchengpersonal in https://github.com/langgenius/dify/pull/33755
* test: migrate email register tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33971
* test: migrate forgot password tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/33972
* test: migrate dataset service document indexing tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34022
* refactor: use sessionmaker().begin() in console auth controllers by @Desel72 in https://github.com/langgenius/dify/pull/33966
* test: migrate mcp tools manage service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34024
* fix: SQLAlchemy deprecation warnings for default parameter by @qianchongyang in https://github.com/langgenius/dify/pull/33980
* test: unit test cases for sub modules in core.app (except core.app.apps) by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32476
* test: unit test cases for rag.cleaner, rag.data_post_processor and rag.datasource by @rajatagarwal-oss in https://github.com/langgenius/dify/pull/32521
* fix: use query params instead of request body for decode_plugin_from_identifier by @minodisk in https://github.com/langgenius/dify/pull/31697
* refactor: prefer instrumentation-client by @hyoban in https://github.com/langgenius/dify/pull/34009
* fix(api): StreamsBroadcastChannel start reading messages from the end by @QuantumGhost in https://github.com/langgenius/dify/pull/34030
* fix(workflow): clear loop/iteration metadata when pasting node outside container by @majiayu000 in https://github.com/langgenius/dify/pull/29983
* fix: update docs path by @hyoban in https://github.com/langgenius/dify/pull/34052
* test: replace indexing_technique string literals with IndexTechnique by @tmimmanuel in https://github.com/langgenius/dify/pull/34042
* test: migrate webapp auth service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34037
* test: migrate advanced prompt template service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34034
* refactor: select in console datasets segments and API key controllers by @RenzoMXD in https://github.com/langgenius/dify/pull/34027
* refactor: select in console datasets document controller by @tmimmanuel in https://github.com/langgenius/dify/pull/34029
* test: migrate app service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34025
* fix: resolve SADeprecationWarning for callable default in remaining TypeBase models by @Krishnachaitanyakc in https://github.com/langgenius/dify/pull/34049
* test: migrate tools transform service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34035
* refactor(workflow): migrate legacy toast usage to ui toast by @lyzno1 in https://github.com/langgenius/dify/pull/34002
* test: migrate workflow app service tests to testcontainers by @Desel72 in https://github.com/langgenius/dify/pull/34036
* refactor(web): expose avatar primitives for composition by @lyzno1 in https://github.com/langgenius/dify/pull/34057
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/34055
* refactor: add composable avatar slot wrappers by @lyzno1 in https://github.com/langgenius/dify/pull/34058
* fix(api): fix concurrency issues in StreamsBroadcastChannel by @QuantumGhost in https://github.com/langgenius/dify/pull/34061
* feat(web): base-ui slider by @lyzno1 in https://github.com/langgenius/dify/pull/34064
* fix: partner stack not recorded when not login by @iamjoel in https://github.com/langgenius/dify/pull/34062
* feat(workflow): add selection context menu helpers and integrate with context menu component by @CodingOnStar in https://github.com/langgenius/dify/pull/34013
* fix: HumanInput node should unable to paste into container by @hjlarry in https://github.com/langgenius/dify/pull/34077
* test(workflow-app): enhance unit tests for workflow components and hooks by @CodingOnStar in https://github.com/langgenius/dify/pull/34065
* feat: add inner API endpoints for admin DSL import/export by @zhangx1n in https://github.com/langgenius/dify/pull/34059
* chore: bump Dify to 1.13.3 and sandbox to 0.2.13 by @laipz8200 in https://github.com/langgenius/dify/pull/34079

## New Contributors
* @bittoby made their first contribution in https://github.com/langgenius/dify/pull/33610
* @xr843 made their first contribution in https://github.com/langgenius/dify/pull/33767
* @Lubrsy706 made their first contribution in https://github.com/langgenius/dify/pull/33083
* @yuchengpersonal made their first contribution in https://github.com/langgenius/dify/pull/33809
* @ckstck made their first contribution in https://github.com/langgenius/dify/pull/33857
* @yoloni-9527 made their first contribution in https://github.com/langgenius/dify/pull/33841
* @BipinRimal314 made their first contribution in https://github.com/langgenius/dify/pull/33838
* @letterbeezps made their first contribution in https://github.com/langgenius/dify/pull/33280
* @bakiburakogun made their first contribution in https://github.com/langgenius/dify/pull/33885
* @qwedc001 made their first contribution in https://github.com/langgenius/dify/pull/33830
* @qianchongyang made their first contribution in https://github.com/langgenius/dify/pull/33980
* @minodisk made their first contribution in https://github.com/langgenius/dify/pull/31697

**Full Changelog**: https://github.com/langgenius/dify/compare/1.13.2...1.13.3

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.13.3` · 2026-03-27 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.13.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
