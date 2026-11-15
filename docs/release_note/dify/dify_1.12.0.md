---
title: "dify 1.12.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.12.0"
version: "1.12.0"
published: "2026-02-03"
type: "minor"
lang: "en"
summary: "We are introducing Summary Index, a powerful enhancement to our knowledge base retrieval system that significantly improves search accuracy by generating AI-powered summaries for document chunks."
---

# dify 1.12.0

## 🚀 New Features: Summary Index

We are introducing **Summary Index**, a powerful enhancement to our knowledge base retrieval system that significantly improves search accuracy by generating AI-powered summaries for document chunks.

**Background**

Traditional vector search relies on raw chunk embeddings, which can miss semantic nuances and context when matching user queries. This is especially challenging for long documents or complex content where key information might be scattered across multiple chunks. Summary Index addresses this by creating concise, semantically-rich summaries for each document chunk, which are then vectorized and used as an additional retrieval layer.

**Key Capabilities**
- **AI-Powered Summarization:** Automatically generates concise summaries for document chunks using configurable LLM models, capturing essential semantic information in a compact format.
- **Multimodal Support:** When using vision-capable LLMs (e.g., GPT-4V, Claude-3), the system can generate summaries that incorporate both text and images from document chunks, providing richer context understanding.
- **Enhanced Retrieval Accuracy:** Summary vectors serve as an additional retrieval layer, improving the precision of knowledge base searches by matching queries against both original content and AI-generated summaries.
- **Flexible Configuration:** Supports default summary prompts, allowing you to tailor the summarization style to match your domain-specific requirements.
- **Asynchronous Processing:** Summary generation runs asynchronously, ensuring that document indexing remains fast and non-blocking.
- **Manual Summary Editing:** Allows you to manually edit and refine AI-generated summaries to better align with the original chunk content, ensuring summaries accurately reflect domain-specific terminology and context.
- **Index Structure Compatibility:** Works with both general chunking and parent-child chunking modes, with intelligent handling of hierarchical document relationships.
- **High-Quality Index Integration:** Available exclusively for datasets using the "high_quality" indexing technique, ensuring optimal performance for production knowledge bases.

### Other Improvements

*   **Agent App Multimodal Support:** Agent App now natively supports multimodal inputs (images/files).
*   **Qdrant Full-Text Search:** Implemented full-text search with multi-keyword support for Qdrant vector database.
*   **Workflow Enhancements:**
    *   Added support for registering and reading context in workflows.
    *   Added OpenTelemetry support for single runs.
*   **Plugin System:** Added an option to delete or keep API keys when uninstalling a plugin.
*   **Template Preview Before Creating**: Added a detailed app template preview with workflow graphs or app configs by app type.

### 🐞 Bug Fixes & Security Updates

*   **Security:**
    * Logstore security fix: Addressed potential SQL injection, serialization issues, and optimized initialization.
    *   Fixed an SSRF vulnerability in WordExtractor URL download.
    *   Upgraded `tanstack devtools` to fix seroval RCE vulnerability.
    *   Security updates for `pdfminer.six`, `authlib`, `werkzeug`, `aiohttp`, and `pycryptodome`.
*   **Workflow & Graph Engine:**
    *   Fixed issues where single iteration or loop nodes could not run.
    *   Fixed `NextStep` crash when the target node is missing.
    *   Fixed `ToolInvokeMessage` Union type parsing issue.
*   **API & Backend:**
    *   Fixed CORS resource pattern for `/console/api` routes.
    *   Fixed IRIS hybrid search returning zero results.
    *   Fixed billing account deletion issues.
    *   Fixed `vdb-migrate` command for parent-child segment migration.
*   **Frontend:**
    *   Fixed "Expand all chunks" button not working.
    *   Fixed vertical scrolling support for floating elements.
    *   Fixed validation error when uploading images with None URL values.

## ⚙️ Configuration Changes

*   `SANDBOX_EXPIRED_RECORDS_CLEAN_TASK_LOCK_TTL`: Sets the lock TTL for the sandbox expired records cleanup task (Default: `90000`).
*   `SMTP_LOCAL_HOSTNAME`: Optional override for the local hostname used during SMTP HELO/EHLO.
*   `PLUGIN_MODEL_SCHEMA_CACHE_TTL`: Sets the cache TTL for plugin model schemas (Default: `3600`).
*   `ENABLE_TRIAL_APP`: Enables trial app (Default: `false`).
*   `ENABLE_EXPLORE_BANNER`: Enables explore banner (Default: `false`).

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

## What's Changed
* fix: fix instance is not bind to session by @fatelei in https://github.com/langgenius/dify/pull/30913
* feat: inject traceparent in enterprise api by @wylswz in https://github.com/langgenius/dify/pull/30895
* refactor: init orpc contract by @hyoban in https://github.com/langgenius/dify/pull/30885
* refactor(variables): clarify base vs union type naming by @laipz8200 in https://github.com/langgenius/dify/pull/30634
* feat: change param to pydantic model by @fatelei in https://github.com/langgenius/dify/pull/30870
* chore(deps): bump filelock from 3.20.0 to 3.20.3 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/30939
* feat: Add option to delete or keep API keys when uninstalling plugin by @UMDKyle in https://github.com/langgenius/dify/pull/28201
* chore(deps): bump azure-core from 1.36.0 to 1.38.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/30941
* fix: Correction to the full name of Volc TOS by @jneless in https://github.com/langgenius/dify/pull/30741
* fix(logstore): prevent SQL injection, fix serialization issues, and optimize initialization by @adongfan in https://github.com/langgenius/dify/pull/30697
* fix: use Factory to create repository in Aliyun Trace by @hieheihei in https://github.com/langgenius/dify/pull/30899
* fix: fix LOOP_CHILDREN_Z_INDEX by @fatelei in https://github.com/langgenius/dify/pull/30719
* refactor(web): MCP tool availability to context-based version gating by @lyzno1 in https://github.com/langgenius/dify/pull/30955
* refactor(http_request_node): apply DI for http request node by @laipz8200 in https://github.com/langgenius/dify/pull/30509
* fix(web): preserve HTTP method in ORPC fetchCompat mode by @lyzno1 in https://github.com/langgenius/dify/pull/30971
* chore(web): disable Serwist dev logs by @lyzno1 in https://github.com/langgenius/dify/pull/30980
* chore(web): remove unused demo service component by @lyzno1 in https://github.com/langgenius/dify/pull/30979
* fix(deps): security updates for pdfminer.six, authlib, werkzeug, aiohttp and others by @kenwoodjw in https://github.com/langgenius/dify/pull/30976
* fix: redirect after login by @hyoban in https://github.com/langgenius/dify/pull/30985
* feat: allow pass hostname in docker env by @fatelei in https://github.com/langgenius/dify/pull/30975
* fix: fix Cannot destructure property 'name' of 'value' as it is undef… by @fatelei in https://github.com/langgenius/dify/pull/30991
* fix: correct API Extension documentation link by @Milad93R in https://github.com/langgenius/dify/pull/30962
* feat: add .agent/skills symlink and orpc-contract-first skill by @lyzno1 in https://github.com/langgenius/dify/pull/30968
* fix: increase name length limit in ExternalDatasetCreatePayload by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31000
* fix: fix missing id and message_id by @fatelei in https://github.com/langgenius/dify/pull/31008
* fix: Use raw SQL UPDATE to set read status without triggering updated… by @fatelei in https://github.com/langgenius/dify/pull/31015
* refactor: port TidbAuthBinding( by @asukaminato0721 in https://github.com/langgenius/dify/pull/31006
* fix: fix plugin edit endpoint app disappear by @fatelei in https://github.com/langgenius/dify/pull/30951
* refactor: delete_endpoint should be idempotent by @fatelei in https://github.com/langgenius/dify/pull/30954
* refactor: port TenantCreditPool by @asukaminato0721 in https://github.com/langgenius/dify/pull/30926
* refactor: port AppAnnotationHitHistory by @asukaminato0721 in https://github.com/langgenius/dify/pull/30922
* feat: implement document creation pipeline with multi-step wizard and datasource management by @CodingOnStar in https://github.com/langgenius/dify/pull/30843
* feat(web): refactor documents component structure and enhance functionality by @CodingOnStar in https://github.com/langgenius/dify/pull/30854
* build: require node 24.13.0 by @hyoban in https://github.com/langgenius/dify/pull/30945
* refactor(contract): restructure console contracts with nested billing module by @lyzno1 in https://github.com/langgenius/dify/pull/30999
* fix: validation error when uploading images with None URL values by @josephadamsdev in https://github.com/langgenius/dify/pull/31012
* test: add unit tests for PluginPage and related components by @CodingOnStar in https://github.com/langgenius/dify/pull/30908
* feat: single run add opentelemetry by @fatelei in https://github.com/langgenius/dify/pull/31020
* chore: bump version to 1.11.4 by @laipz8200 in https://github.com/langgenius/dify/pull/30961
* refactor: enhance clean messages task by @hj24 in https://github.com/langgenius/dify/pull/29638
* fix: message clean service ut by @hj24 in https://github.com/langgenius/dify/pull/31038
* refactor: remove manual set query logic by @hyoban in https://github.com/langgenius/dify/pull/31039
* feat: credential sync fix for enterprise edition by @GareArc in https://github.com/langgenius/dify/pull/30626
* fix: fix log updated_at is refreshed by @fatelei in https://github.com/langgenius/dify/pull/31045
* fix: remove hardcoded 48-character limit from text inputs by @majiayu000 in https://github.com/langgenius/dify/pull/30156
* ci: eslint annotation by @hyoban in https://github.com/langgenius/dify/pull/31056
* ci: disable limit annotation by @hyoban in https://github.com/langgenius/dify/pull/31072
* refactor: always preserve marketplace search state in URL by @byteforge38 in https://github.com/langgenius/dify/pull/31069
* fix: resolve 'Expand all chunks' button not working by @GlobalStar117 in https://github.com/langgenius/dify/pull/31074
* chore: lint for state hooks by @hyoban in https://github.com/langgenius/dify/pull/31088
* fix(web): use portal for variable picker in code editor (Fixes #31063) by @Pavior0 in https://github.com/langgenius/dify/pull/31066
* fix(web): replace Response.json with legacy Response constructor for pre-Chrome 105 compatibility(#31091) by @XiaoBa-Yu in https://github.com/langgenius/dify/pull/31095
* chore: Update coding agent workflow for backend by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31093
* fix(search-input): retain focus after clearing input by @lyzno1 in https://github.com/langgenius/dify/pull/31107
* fix: call `get_text_content()` instead of casting to `str` by @Stream29 in https://github.com/langgenius/dify/pull/31121
* refactor: migrate tag list API query parameters to Pydantic by @fghpdf in https://github.com/langgenius/dify/pull/31097
* chore: Update outdated GitHub Actions versions by @pgoslatara in https://github.com/langgenius/dify/pull/31114
* chore: improve accessibility for learn more link by @khmandarrin in https://github.com/langgenius/dify/pull/31120
* test(web): add global zustand mock for tests by @lyzno1 in https://github.com/langgenius/dify/pull/31149
* feat(web): add loading indicators for infinite scroll pagination by @eureka928 in https://github.com/langgenius/dify/pull/31110
* chore: introduce bulk-suppressions and multithread linting by @hyoban in https://github.com/langgenius/dify/pull/31157
* chore: update vite related version by @hyoban in https://github.com/langgenius/dify/pull/31180
* feat: add Vercel React Best Practices skill for Claude Code by @lyzno1 in https://github.com/langgenius/dify/pull/31133
* fix(web): Zustand testing best practices and state read optimization by @lyzno1 in https://github.com/langgenius/dify/pull/31163
* chore: no custom lint cache location by @hyoban in https://github.com/langgenius/dify/pull/31195
* chore: improve clear workflow_run task by @hjlarry in https://github.com/langgenius/dify/pull/31124
* feat: ee workspace permission control by @douxc in https://github.com/langgenius/dify/pull/30841
* feat: implement workspace permission checks for member invitations an… by @GareArc in https://github.com/langgenius/dify/pull/31202
* refactor: refactor workflow context by @fatelei in https://github.com/langgenius/dify/pull/30607
* chore: drop slow lint rules by @hyoban in https://github.com/langgenius/dify/pull/31205
* refactor: make url in email template more better by @fatelei in https://github.com/langgenius/dify/pull/31166
* test: add unit tests for plugin detail panel components including action lists, strategy lists, and endpoint management by @CodingOnStar in https://github.com/langgenius/dify/pull/31053
* fix: fix dify-plugin-daemon error message by @fatelei in https://github.com/langgenius/dify/pull/31218
* fix: Revert "fix: fix create app xss issue" by @fatelei in https://github.com/langgenius/dify/pull/31219
* chore: relocate datasets api form by @zxhlyh in https://github.com/langgenius/dify/pull/31224
* feat: Download the uploaded files by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31068
* fix: correct i18n for stepOne.uploader.tip by @kurokobo in https://github.com/langgenius/dify/pull/31177
* chore: init tsslint by @hyoban in https://github.com/langgenius/dify/pull/31209
* chore(web): remove redundant optimizePackageImports config by @cxhello in https://github.com/langgenius/dify/pull/31257
* test: add tests for dataset list by @CodingOnStar in https://github.com/langgenius/dify/pull/31231
* ci: label web changes by @hyoban in https://github.com/langgenius/dify/pull/31261
* fix(web): disable HTML escaping for form field validation messages by @lyzno1 in https://github.com/langgenius/dify/pull/31292
* fix: lint for i18n place holder by @hyoban in https://github.com/langgenius/dify/pull/31283
* chore(web): remove version prefixes from package.json by @Copilot in https://github.com/langgenius/dify/pull/31286
* chore(deps): bump js-yaml from 4.1.0 to 4.1.1 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/31297
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31298
* fix: enforce no-leaked-conditional-rendering as error and fix violations by @byteforge38 in https://github.com/langgenius/dify/pull/31262
* chore(deps-dev): bump jsdom from 27.3.0 to 27.4.0 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/31186
* chore(web): comment out unused provider entries in quota panel by @CodingOnStar in https://github.com/langgenius/dify/pull/31315
* test: enhance HitTestingPage tests with additional coverage for rendering and state updates by @CodingOnStar in https://github.com/langgenius/dify/pull/31321
* chore: lint custom tag in i18n by @hyoban in https://github.com/langgenius/dify/pull/31301
* build: bump NextJS from 15 to 16 with turbopack enabled for web production build boost by @bowenliang123 in https://github.com/langgenius/dify/pull/27014
* refactor: use session factory instead of call db.session directly by @fatelei in https://github.com/langgenius/dify/pull/31198
* chore: update dev config by @hyoban in https://github.com/langgenius/dify/pull/31329
* feat: enhance ProgressBar and UsageInfo for storage mode by @CodingOnStar in https://github.com/langgenius/dify/pull/31273
* feat: add lock for retention jobs by @hj24 in https://github.com/langgenius/dify/pull/31320
* feat: workflow support register context and read context by @fatelei in https://github.com/langgenius/dify/pull/31265
* feat: re organize agent skills and add web design skills for all agents by @lyzno1 in https://github.com/langgenius/dify/pull/31334
* refactor(web): refactor next.config.js to next.config.ts by @bowenliang123 in https://github.com/langgenius/dify/pull/31331
* fix(i18n): update model provider tip to only mention OpenAI in English, Japanese, and Simplified Chinese translations by @CodingOnStar in https://github.com/langgenius/dify/pull/31339
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31332
* fix: check and update doc links by @hyoban in https://github.com/langgenius/dify/pull/30849
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31342
* test: fix test in #30849 by @hyoban in https://github.com/langgenius/dify/pull/31350
* refactor(web): extract useCopyToClipboard hook to reduce duplication by @SherlockShemol in https://github.com/langgenius/dify/pull/31308
* refactor(db): enforce non-null message annotation questions by @laipz8200 in https://github.com/langgenius/dify/pull/27915
* chore: revert jsdom update by @hyoban in https://github.com/langgenius/dify/pull/31353
* test: enhance HitTestingPage tests with additional coverage for rende… by @hyoban in https://github.com/langgenius/dify/pull/31355
* fix: remove _try_resolve_user_from_request by @fatelei in https://github.com/langgenius/dify/pull/31360
* fix: fix visibilityState event handle by @fatelei in https://github.com/langgenius/dify/pull/31354
* fix: non-auto variable type params of agent node tool are not correctly parsed by @dataknocker in https://github.com/langgenius/dify/pull/31128
* fix: following docs link fix by @hyoban in https://github.com/langgenius/dify/pull/31390
* fix: more doc link fix by @hyoban in https://github.com/langgenius/dify/pull/31395
* feat: app trial by @zyssyz123 in https://github.com/langgenius/dify/pull/26281
* fix(web): disable single tilde strikethrough in markdown rendering by @majiayu000 in https://github.com/langgenius/dify/pull/31400
* fix: use thread local isolation the context by @fatelei in https://github.com/langgenius/dify/pull/31410
* refactor: Move workflow node factory to app workflow by @laipz8200 in https://github.com/langgenius/dify/pull/31385
* feat: frontend part of support try apps by @iamjoel in https://github.com/langgenius/dify/pull/31287
* fix(web): use Array.from() for FileList to fix tsc type errors by @majiayu000 in https://github.com/langgenius/dify/pull/31398
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31413
* docs(api): mark SystemFeatureApi as unauthenticated by design by @QuantumGhost in https://github.com/langgenius/dify/pull/31417
* fix: NextStep crash when target node is missing by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31416
* fix: fix create-by-file doc_form by @fatelei in https://github.com/langgenius/dify/pull/31346
* chore: disable serwist in dev by @hyoban in https://github.com/langgenius/dify/pull/31424
* refactor: optimize system features response payload for unauthenticated clients by @Cursx in https://github.com/langgenius/dify/pull/31392
* ci: enable ESLint autofix in autofix bot by @majiayu000 in https://github.com/langgenius/dify/pull/31428
* feat: archive workflow run logs backend by @hjlarry in https://github.com/langgenius/dify/pull/31310
* docs(api): clarity SystemFeatureApi for webapp is unauthenticated by design by @QuantumGhost in https://github.com/langgenius/dify/pull/31432
* refactor: split changes for api/controllers/web/login.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/29854
* refactor: split changes for api/controllers/web/workflow.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/29852
* feat: init fastopenapi by @asukaminato0721 in https://github.com/langgenius/dify/pull/30453
* feat: optimize http status code by @fatelei in https://github.com/langgenius/dify/pull/31430
* fix(tools): fix ToolInvokeMessage Union type parsing issue by @qiaofenlin in https://github.com/langgenius/dify/pull/31450
* chore: Update dev setup scripts and API README by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31415
* fix(http-request): prevent UUID truncation in JSON body by @majiayu000 in https://github.com/langgenius/dify/pull/31444
* refactor: port AppModelConfig by @asukaminato0721 in https://github.com/langgenius/dify/pull/30919
* refactor: single-node workflow runner helpers by @laipz8200 in https://github.com/langgenius/dify/pull/31472
* fix(api): fix IRIS hybrid search returning zero results by @TomoOkuyama in https://github.com/langgenius/dify/pull/31309
* chore(deps): bump pyasn1 from 0.6.1 to 0.6.2 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/31140
* chore(deps): bump @lexical/utils from 0.38.2 to 0.39.0 in /web by @dependabot[bot] in https://github.com/langgenius/dify/pull/31503
* refactor: example of refine dict / Mapping by @asukaminato0721 in https://github.com/langgenius/dify/pull/31498
* feat: add trial model list in system features by @zyssyz123 in https://github.com/langgenius/dify/pull/31313
* refactor: restructure Completed component by @CodingOnStar in https://github.com/langgenius/dify/pull/31435
* feat: enhance quota panel to support additional model providers and integrate trial models feature by @CodingOnStar in https://github.com/langgenius/dify/pull/31443
* refactor(tool-selector): remove unused components and consolidate import by @CodingOnStar in https://github.com/langgenius/dify/pull/31018
* fix(web): upgrade tanstack devtools to fix seroval RCE vulnerability by @lyzno1 in https://github.com/langgenius/dify/pull/31515
* refactor: pass BaseModel instances instead of dict by @fghpdf in https://github.com/langgenius/dify/pull/31514
* refactor: LLM plugin invoke parsing by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31499
* refactor: api/controllers/console/version.py to v3 by @asukaminato0721 in https://github.com/langgenius/dify/pull/31463
* refactor: api/controllers/console/setup.py to ov3 by @asukaminato0721 in https://github.com/langgenius/dify/pull/31465
* fix: Add vertical scrolling support for floating elements. by @coopercoder in https://github.com/langgenius/dify/pull/30897
* chore: eslint prune-suppressions by @hyoban in https://github.com/langgenius/dify/pull/31526
* fix: fix Cannot read properties of null (reading 'credential_form_sch… by @fatelei in https://github.com/langgenius/dify/pull/31117
* chore: update to story book nextjs-vite by @hyoban in https://github.com/langgenius/dify/pull/31536
* chore: increase plugin cache ttl to 1 hour by @RockChinQ in https://github.com/langgenius/dify/pull/31552
* chore: follow-up fixes for storybook vite migration by @lyzno1 in https://github.com/langgenius/dify/pull/31545
* fix: service api doc can not gen by @asukaminato0721 in https://github.com/langgenius/dify/pull/31549
* feat: chatflow support multimodal by @fatelei in https://github.com/langgenius/dify/pull/31293
* chore: move agent notes into docstrings by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31560
* docs: add ESLint guide to AGENTS.md by @majiayu000 in https://github.com/langgenius/dify/pull/31559
* chore(deps): bump pycryptodome from 3.19.1 to 3.23.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/31504
* refactor: replace request.args.get with Pydantic BaseModel validation by @GlobalStar117 in https://github.com/langgenius/dify/pull/31104
* refactor(web): extract MCP components and add comprehensive tests by @CodingOnStar in https://github.com/langgenius/dify/pull/31517
* chore(deps): bump pypdf from 6.6.0 to 6.6.2 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/31568
* fix: billing account deletion by @hj24 in https://github.com/langgenius/dify/pull/31556
* fix: wrap test cleanup in act() to prevent window is not defined error by @majiayu000 in https://github.com/langgenius/dify/pull/31558
* chore: update react and next version by @hyoban in https://github.com/langgenius/dify/pull/31593
* feat: Enhances OpenTelemetry node parsers by @hieheihei in https://github.com/langgenius/dify/pull/30706
* test: add tests for dataset document detail by @CodingOnStar in https://github.com/langgenius/dify/pull/31274
* feat: enhance quota panel with installed providers mapping by @CodingOnStar in https://github.com/langgenius/dify/pull/31546
* fix: ConsoleDatasetListQuery request.args.to_dict() by @asukaminato0721 in https://github.com/langgenius/dify/pull/31598
* fix: doc not gen bug by @asukaminato0721 in https://github.com/langgenius/dify/pull/31547
* chore: remove project skills by @lyzno1 in https://github.com/langgenius/dify/pull/31615
* test: add comprehensive tests for chat-user-input component by @CodingOnStar in https://github.com/langgenius/dify/pull/31595
* fix(cors): correct CORS resource pattern for /console/api routes by @NeatGuyCoding in https://github.com/langgenius/dify/pull/31485
* refactor(graph_engine): move observability layer and persistence laye… by @laipz8200 in https://github.com/langgenius/dify/pull/31620
* fix(graph_engine): Cannot run single iteration or loop node by @laipz8200 in https://github.com/langgenius/dify/pull/31470
* feat: summary index by @zxhlyh in https://github.com/langgenius/dify/pull/31523
* fix: vdb-migrate command did not use for parent-child segment migration by @gaoyue1989 in https://github.com/langgenius/dify/pull/31605
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31630
* fix(app-log): fetching messages correctly when scrolling message list by @JzoNgKVO in https://github.com/langgenius/dify/pull/31655
* refactor(graph_engine): Add a Config class for graph engine. by @laipz8200 in https://github.com/langgenius/dify/pull/31663
* fix: add list type support for ToolInput constant value in tool node by @qiaofenlin in https://github.com/langgenius/dify/pull/31276
* feat(qdrant): implement full-text search with multi-keyword support by @euxx in https://github.com/langgenius/dify/pull/31658
* test: add comprehensive tests by @CodingOnStar in https://github.com/langgenius/dify/pull/31649
* chore: remove non-ASCII characters in .env.example by @bangjiehan in https://github.com/langgenius/dify/pull/31638
* chore: disable turbopackFileSystemCacheForDev by @hyoban in https://github.com/langgenius/dify/pull/31696
* feat: Add summary index for knowledge. by @FFXN in https://github.com/langgenius/dify/pull/31625
* fix: SSRF in WordExtractor URL download (credit to @EaEa0001 ) by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31678
* refactor(model): Refactor plugin model schema cache to be process-global to prevent redundant Daemon API calls by @NieRonghua in https://github.com/langgenius/dify/pull/31689
* refactor: ExporleBanner to TypeBase by @asukaminato0721 in https://github.com/langgenius/dify/pull/31698
* chore(import-linter): add a rule to make model_runtime isolate by @laipz8200 in https://github.com/langgenius/dify/pull/31706
* fix: convert HTTP method to lowercase when parsing cURL commands by @JQSevenMiao in https://github.com/langgenius/dify/pull/31704
* fix(web): remove unwanted border on sticky elements in dark mode by @taronsung in https://github.com/langgenius/dify/pull/31699
* refactor(web): consolidate download helpers by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31664
* chore: Set plugin schema cache TTL to 1h by @laipz8200 in https://github.com/langgenius/dify/pull/31708
* chore(ty): Bootstrap ty type checking for api by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31681
* refactor: unified shortcut keys display using component by @CrabSAMA in https://github.com/langgenius/dify/pull/31713
* docs: relocate frontend docs for agents and human by @hyoban in https://github.com/langgenius/dify/pull/31714
* feat: use xdist to make make test faster by @yihong0618 in https://github.com/langgenius/dify/pull/30824
* feat: try app support review by @iamjoel in https://github.com/langgenius/dify/pull/31716
* refactor: prefer css icon by @hyoban in https://github.com/langgenius/dify/pull/31551
* chore(typing): reduce ty excludes for A1 by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31721
* feat: Human Input node (Frontend Part) by @WTW0313 in https://github.com/langgenius/dify/pull/31631
* feat(api): Human Input Node (backend part) by @QuantumGhost in https://github.com/langgenius/dify/pull/31646
* chore: update version to 1.12.0 by @QuantumGhost in https://github.com/langgenius/dify/pull/31726
* feat: Summary index for knowledge. by @FFXN in https://github.com/langgenius/dify/pull/31719
* chore: Revert "refactor: prefer css icon" by @hyoban in https://github.com/langgenius/dify/pull/31733
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/31730
* chore: update lint config by @hyoban in https://github.com/langgenius/dify/pull/31735
* chore(docker): update plugin daemon version to 0.5.3-local in docker-compose  by @QuantumGhost in https://github.com/langgenius/dify/pull/31739
* fix(redis): Redis Cluster eval errors by adding hash tags to trigger debug keys by @anobaka in https://github.com/langgenius/dify/pull/31701
* refactor: rm some dict api/controllers/console/app/generator.py api/core/llm_generator/llm_generator.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/31709
* fix: Drain non-stream plugin chunk iterator by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31564
* fix: trigger doc link by @hyoban in https://github.com/langgenius/dify/pull/31754
* fix(api): fix workflow state persistence issue by @QuantumGhost in https://github.com/langgenius/dify/pull/31752
* chore: hide disable try tab when not support by @iamjoel in https://github.com/langgenius/dify/pull/31759
* refactor: api/controllers/console/feature.py (test) by @Cursx in https://github.com/langgenius/dify/pull/31562
* refactor: api/controllers/console/remote_files.py to ov3 by @asukaminato0721 in https://github.com/langgenius/dify/pull/31466
* revert: revert human input relevant code by @QuantumGhost in https://github.com/langgenius/dify/pull/31766
* fix(i18n): improve Chinese translation of Max Tokens by @majiayu000 in https://github.com/langgenius/dify/pull/31771
* chore: update restx to 1.3.2 by @asukaminato0721 in https://github.com/langgenius/dify/pull/31229
* refactor: init_validate.py to v3 by @asukaminato0721 in https://github.com/langgenius/dify/pull/31457
* refactor: port api/controllers/console/tag/tags.py to ov3 by @asukaminato0721 in https://github.com/langgenius/dify/pull/31767
* fix(api): align graph protocols for response streaming by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31777
* refactor(typing): Fixup typing A2 - workflow engine & nodes by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31723
* refactor: remove all reqparser by @asukaminato0721 in https://github.com/langgenius/dify/pull/29289
* refactor: examples of use match case by @asukaminato0721 in https://github.com/langgenius/dify/pull/31312
* refactor(typing): use enum types for workflow status fields by @lyzno1 in https://github.com/langgenius/dify/pull/31792
* fix: summary index bug by @FFXN in https://github.com/langgenius/dify/pull/31810
* chore(CODEOWNERS): assign `.agents/skills` to @hyoban by @laipz8200 in https://github.com/langgenius/dify/pull/31816
* refactor: "chore: update version to 1.12.0" by @QuantumGhost in https://github.com/langgenius/dify/pull/31817
* refactor: add test for api/controllers/console/workspace/tool_pr… by @asukaminato0721 in https://github.com/langgenius/dify/pull/29886
* refactor: port api/controllers/console/app/audio.py  api/controllers/console/app/message.py  api/controllers/console/auth/data_source_oauth.py api/controllers/console/auth/forgot_password.py api/controllers/console/workspace/endpoint.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/30680
* refactor: if to match by @asukaminato0721 in https://github.com/langgenius/dify/pull/31799
* refactor: port api/controllers/console/datasets/datasets_document.py api/controllers/service_api/app/annotation.py api/core/app/app_config/easy_ui_based_app/agent/manager.py api/core/app/apps/pipeline/pipeline_generator.py api/core/workflow/nodes/knowledge_retrieval/knowledge_retrieval_node.py to match case by @asukaminato0721 in https://github.com/langgenius/dify/pull/31832
* refactor: port api/controllers/console/datasets/data_source.py /datasets/metadata.py /service_api/dataset/metadata.py /nodes/agent/agent_node.py api/core/workflow/nodes/datasource/datasource_node.py api/services/dataset_service.py to match case by @asukaminato0721 in https://github.com/langgenius/dify/pull/31836
* refactor: port api/controllers/console/app/annotation.py api/controllers/console/explore/trial.py  api/controllers/console/workspace/account.py  api/controllers/console/workspace/members.py  api/controllers/service_api/app/annotation.py to basemodel by @asukaminato0721 in https://github.com/langgenius/dify/pull/31833
* chore(deps-dev): bump types-psutil from 7.0.0.20251116 to 7.2.2.20260130 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/31814
* fix: revert "refactor: api/controllers/console/feature.py (test)" by @hyoban in https://github.com/langgenius/dify/pull/31850
* test: enhance CommandSelector and GotoAnythingProvider tests by @CodingOnStar in https://github.com/langgenius/dify/pull/31743
* refactor: update oauth_new_user handling in AppInitializer to use parseAsBoolean by @CodingOnStar in https://github.com/langgenius/dify/pull/31862
* fix: create app from template not support review by @iamjoel in https://github.com/langgenius/dify/pull/31866
* test: fix test by @hyoban in https://github.com/langgenius/dify/pull/31869
* chore: update version to 1.12.0 by @QuantumGhost in https://github.com/langgenius/dify/pull/31878
* test: fix test by @hyoban in https://github.com/langgenius/dify/pull/31880
* chore(dev): use strict bash mode for pytest by @BeautyyuYanli in https://github.com/langgenius/dify/pull/31873
* refactor: replace line-clamp package with native CSS by @niveshdandyan in https://github.com/langgenius/dify/pull/31877
* fix: "refactor: port api/controllers/console/tag/tags.py to ov3" by @asukaminato0721 in https://github.com/langgenius/dify/pull/31887

## New Contributors
* @UMDKyle made their first contribution in https://github.com/langgenius/dify/pull/28201
* @jneless made their first contribution in https://github.com/langgenius/dify/pull/30741
* @Milad93R made their first contribution in https://github.com/langgenius/dify/pull/30962
* @BeautyyuYanli made their first contribution in https://github.com/langgenius/dify/pull/31000
* @josephadamsdev made their first contribution in https://github.com/langgenius/dify/pull/31012
* @byteforge38 made their first contribution in https://github.com/langgenius/dify/pull/31069
* @GlobalStar117 made their first contribution in https://github.com/langgenius/dify/pull/31074
* @Pavior0 made their first contribution in https://github.com/langgenius/dify/pull/31066
* @pgoslatara made their first contribution in https://github.com/langgenius/dify/pull/31114
* @khmandarrin made their first contribution in https://github.com/langgenius/dify/pull/31120
* @eureka928 made their first contribution in https://github.com/langgenius/dify/pull/31110
* @cxhello made their first contribution in https://github.com/langgenius/dify/pull/31257
* @dataknocker made their first contribution in https://github.com/langgenius/dify/pull/31128
* @coopercoder made their first contribution in https://github.com/langgenius/dify/pull/30897
* @bangjiehan made their first contribution in https://github.com/langgenius/dify/pull/31638
* @taronsung made their first contribution in https://github.com/langgenius/dify/pull/31699
* @niveshdandyan made their first contribution in https://github.com/langgenius/dify/pull/31877

**Full Changelog**: https://github.com/langgenius/dify/compare/1.11.3...1.12.0

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.12.0` · 2026-02-03 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
