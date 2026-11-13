---
title: "dify 1.14.1"
project: "dify"
repo: "langgenius/dify"
tag: "1.14.1"
published: "2026-05-12"
type: "patch"
lang: "en"
summary: "v1.14.1 is a patch release focused on security hardening, workflow and knowledge-base stability, deployment cleanup, and continued UI platform migration after v1.14.0."
---

# dify 1.14.1

## 🚀 What's New in v1.14.1?

v1.14.1 is a patch release focused on security hardening, workflow and knowledge-base stability, deployment cleanup, and continued UI platform migration after v1.14.0.

### 🔐 Security

- **Self-hosted `SECRET_KEY` hardening** — Docker deployments no longer rely on a public default key. When `SECRET_KEY` is left empty, the API generates and persists a runtime key through the configured storage backend, while explicitly configured keys continue to work as before. Thanks @laipz8200 in [#36049](https://github.com/langgenius/dify/pull/36049).
- **Internal metrics endpoint protection** — `/threads` and `/db-pool-stat` are hardened to avoid unauthenticated exposure of internal runtime and database-pool details. Thanks @orbisai0security in [#35665](https://github.com/langgenius/dify/pull/35665).
- **Account and tool isolation** — fixed an IDOR issue in `GET /account/avatar` and scoped builtin-tool default-credential cleanup to the current tenant. Thanks @NeatGuyCoding and @GareArc in [#35771](https://github.com/langgenius/dify/pull/35771) and [#35887](https://github.com/langgenius/dify/pull/35887).
- **Dependency security** — upgraded LiteLLM for CVE-2026-42208 and refreshed several backend dependencies, including `urllib3`, `gunicorn`, `gitpython`, `mako`, Google SDK packages, storage libraries, and OpenTelemetry exporter packages. Thanks @crazywoola in [#35953](https://github.com/langgenius/dify/pull/35953), [#35779](https://github.com/langgenius/dify/pull/35779), [#35791](https://github.com/langgenius/dify/pull/35791), [#35863](https://github.com/langgenius/dify/pull/35863), [#35864](https://github.com/langgenius/dify/pull/35864), [#35958](https://github.com/langgenius/dify/pull/35958), [#36011](https://github.com/langgenius/dify/pull/36011), [#36012](https://github.com/langgenius/dify/pull/36012), [#36013](https://github.com/langgenius/dify/pull/36013), [#36017](https://github.com/langgenius/dify/pull/36017), and [#36050](https://github.com/langgenius/dify/pull/36050).

### 🧩 Workflow, HITL, and app runtime

- **Workflow stability** — restored workflow-version loading through the backend API, fixed online-user polling for large app lists, prevented preview resize observer loops, and avoided schema model collisions in trial workflows. Thanks @hjlarry and @lyzno1 in [#35817](https://github.com/langgenius/dify/pull/35817), [#35786](https://github.com/langgenius/dify/pull/35786), [#35936](https://github.com/langgenius/dify/pull/35936), and [#36061](https://github.com/langgenius/dify/pull/36061).
- **Workflow authoring polish** — fixed variable reference picker behavior for sub-variables, workflow node title overflow, condition operator popovers, workflow checklist semantics, and KB metadata filter field selection. Thanks @iamjoel, @hjlarry, @lyzno1, and @shawny011717 in [#35732](https://github.com/langgenius/dify/pull/35732), [#35740](https://github.com/langgenius/dify/pull/35740), [#35828](https://github.com/langgenius/dify/pull/35828), [#36006](https://github.com/langgenius/dify/pull/36006), and [#34149](https://github.com/langgenius/dify/pull/34149).
- **Workflow execution correctness** — preserved single-run input variable types, fixed `structured_output_enabled` validation, fixed file-preview URL handling in node output display, and unblocked plugin model selector tools on v1.14.0 workflows. Thanks @Jingyi-Dify, @fatelei, @shawny011717, and @sawyer-shi in [#35710](https://github.com/langgenius/dify/pull/35710), [#35747](https://github.com/langgenius/dify/pull/35747), [#34150](https://github.com/langgenius/dify/pull/34150), and [#35794](https://github.com/langgenius/dify/pull/35794).
- **Human input** — exposed selected action values for Human-in-the-loop flows. Thanks @Blackoutta in [#35451](https://github.com/langgenius/dify/pull/35451).
- **Question Classifier** — added editable class labels. Thanks @Blackoutta in [#35430](https://github.com/langgenius/dify/pull/35430).

### 📚 Data, RAG, and knowledge

- **Knowledge-base image rendering** — fixed image rendering failures in the knowledge base. Thanks @FFXN in [#35914](https://github.com/langgenius/dify/pull/35914).
- **Document indexing** — skip empty documents before vector embedding and validate missing text indexing techniques. Thanks @princepal9120 and @juyua9 in [#35763](https://github.com/langgenius/dify/pull/35763) and [#35941](https://github.com/langgenius/dify/pull/35941).
- **RAG deduplication** — use `doc_id` as the deduplication key across providers, not only Dify-hosted providers. Thanks @ki3nd in [#35759](https://github.com/langgenius/dify/pull/35759).
- **Dataset metadata filters** — preserve dataset metadata filters in API paths and fix KB metadata filter field selection. Thanks @princepal9120 and @shawny011717 in [#35700](https://github.com/langgenius/dify/pull/35700) and [#34149](https://github.com/langgenius/dify/pull/34149).
- **Upload filename handling** — clean upload filenames parsed from URLs and avoid doubled dots when standardizing datasource file extensions. Thanks @jonathanchang31 and @Beandon13 in [#35706](https://github.com/langgenius/dify/pull/35706) and [#35808](https://github.com/langgenius/dify/pull/35808).

### 🎨 Web UI and design system

- **Dify UI migration** — continued migration from legacy overlays, tooltips, drawers, selects, tags, and searchable pickers to `@langgenius/dify-ui` primitives, including new Drawer, Tabs, ToggleGroup, Autocomplete, and Combobox support. Thanks @lyzno1 and @CodingOnStar in [#35675](https://github.com/langgenius/dify/pull/35675), [#35715](https://github.com/langgenius/dify/pull/35715), [#35720](https://github.com/langgenius/dify/pull/35720), [#35721](https://github.com/langgenius/dify/pull/35721), [#35774](https://github.com/langgenius/dify/pull/35774), [#35785](https://github.com/langgenius/dify/pull/35785), [#35787](https://github.com/langgenius/dify/pull/35787), [#35792](https://github.com/langgenius/dify/pull/35792), [#35825](https://github.com/langgenius/dify/pull/35825), [#35868](https://github.com/langgenius/dify/pull/35868), [#35881](https://github.com/langgenius/dify/pull/35881), [#35892](https://github.com/langgenius/dify/pull/35892), [#35896](https://github.com/langgenius/dify/pull/35896), [#35917](https://github.com/langgenius/dify/pull/35917), [#35961](https://github.com/langgenius/dify/pull/35961), [#35962](https://github.com/langgenius/dify/pull/35962), [#35963](https://github.com/langgenius/dify/pull/35963), [#35965](https://github.com/langgenius/dify/pull/35965), [#35976](https://github.com/langgenius/dify/pull/35976), [#35982](https://github.com/langgenius/dify/pull/35982), and [#36066](https://github.com/langgenius/dify/pull/36066).
- **Accessibility and semantics** — improved web accessibility, removed unnecessary `data-testid` usage, normalized select value handling, improved help glyph semantics, and refined premium badge button semantics. Thanks @lyzno1 in [#35999](https://github.com/langgenius/dify/pull/35999), [#36007](https://github.com/langgenius/dify/pull/36007), [#36008](https://github.com/langgenius/dify/pull/36008), and [#36026](https://github.com/langgenius/dify/pull/36026).
- **Overlay and navigation reliability** — restored app navigation create submenu interaction, fixed transfer workspace dropdown display, normalized overlay control, aligned Tailwind v4 CSS migration, forwarded CSP nonce to the theme script, and aligned tag filter dropdown icons. Thanks @hjlarry, @iamjoel, and @lyzno1 in [#35681](https://github.com/langgenius/dify/pull/35681), [#35876](https://github.com/langgenius/dify/pull/35876), [#35832](https://github.com/langgenius/dify/pull/35832), [#35829](https://github.com/langgenius/dify/pull/35829), [#35960](https://github.com/langgenius/dify/pull/35960), and [#36041](https://github.com/langgenius/dify/pull/36041).
- **Publisher and launch flows** — improved publisher confirmation dialog handling and fixed mismatched copy in prefilled WebApp launch descriptions. Thanks @CodingOnStar and @iamjoel in [#35701](https://github.com/langgenius/dify/pull/35701) and [#35964](https://github.com/langgenius/dify/pull/35964).
- **Audio and transcript behavior** — explicitly resume `AudioContext` and play audio on first TTS load, and pass `end_user.external_user_id` correctly to transcript ASR. Thanks @ki3nd in [#35901](https://github.com/langgenius/dify/pull/35901) and [#35898](https://github.com/langgenius/dify/pull/35898).

### 🔎 Observability and tracing

- **Phoenix tracing** — improved Phoenix workflow tracing. Thanks @Blackoutta in [#35605](https://github.com/langgenius/dify/pull/35605).
- **LangSmith tracing** — fixed `trace_id` mismatch in chatflow workflow traces. Thanks @ki3nd in [#35979](https://github.com/langgenius/dify/pull/35979).

### ⚙️ Deployment and operations

- **Docker env layout** — split Docker Compose environment variables into organized `docker/envs/**` files and updated generation, cleanup, and middleware setup flows. Thanks @macatizm and @laipz8200 in [#31586](https://github.com/langgenius/dify/pull/31586) and [#35938](https://github.com/langgenius/dify/pull/35938).
- **Middleware setup** — updated local setup and cleanup flows for the new middleware env template location. Thanks @laipz8200 in [#35946](https://github.com/langgenius/dify/pull/35946).
- **Database pool behavior** — added `SQLALCHEMY_POOL_RESET_ON_RETURN` configuration support. Thanks @fatelei in [#31156](https://github.com/langgenius/dify/pull/31156).
- **WebSocket service** — separated the WebSocket service for cleaner deployment boundaries. Thanks @hjlarry in [#35981](https://github.com/langgenius/dify/pull/35981).
- **Explore categories** — Explore recommended apps now support multiple configurable categories and adjustable category order. Thanks @hjlarry in [#35723](https://github.com/langgenius/dify/pull/35723).
- **TiDB endpoint updates** — fixed endpoint updates when TiDB status changes. Thanks @zyssyz123 in [#35854](https://github.com/langgenius/dify/pull/35854).

## Upgrade Guide

### Important notes

- This release includes a new database migration for configurable Explore app categories. Run database migrations as part of the upgrade.
- Docker Compose environment variables are now split into categorized files under `docker/envs/**`. If you maintain a customized `docker-compose.yaml` or `.env`, review the new layout and re-apply local customizations carefully.
- For self-hosted deployments, explicitly configured `SECRET_KEY` values continue to be respected. If `SECRET_KEY` is empty, Dify now generates and persists a runtime key automatically.

### Docker Compose Deployments

1. Back up your customized docker-compose YAML and env files.

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```

2. Get the latest code from the release branch or tag.

   ```bash
   git fetch --tags
   git checkout 1.14.1
   ```

3. Stop the service. Please execute in the `docker` directory.

   ```bash
   docker compose down
   ```

4. Back up data.

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5. Review the new `docker/envs/**` env file layout and re-apply any local customizations.

6. Upgrade services.

   ```bash
   docker compose up -d
   ```

### Source Code Deployments

1. Stop the API server, Worker, and Web frontend Server.

2. Get the latest code from the release tag.

   ```bash
   git fetch --tags
   git checkout 1.14.1
   ```

3. Update Python dependencies.

   ```bash
   cd api
   uv sync
   ```

4. Run the migration script.

   ```bash
   uv run flask db upgrade
   ```

5. Restart the API server, Worker, and Web frontend Server.

---

## What's Changed
* fix: ensure generated password satisfies the password policy by @kurokobo in https://github.com/langgenius/dify/pull/35672
* chore: update eslint suppressions codeowner by @lyzno1 in https://github.com/langgenius/dify/pull/35679
* chore: update to pnpm 11 by @hyoban in https://github.com/langgenius/dify/pull/35673
* refactor(web): migrate rich tooltip overlays by @lyzno1 in https://github.com/langgenius/dify/pull/35675
* fix: restore app nav create submenu interaction by @hjlarry in https://github.com/langgenius/dify/pull/35681
* fix(web): disable pnpm dependency checks during Docker build by @lyzno1 in https://github.com/langgenius/dify/pull/35686
* chore: allow configurable Next.js dev origins by @hjlarry in https://github.com/langgenius/dify/pull/35683
* fix(publisher): enhance confirm dialog handling and improve popup interactions by @CodingOnStar in https://github.com/langgenius/dify/pull/35701
* refactor(auth): update OAuth button and settings modal for improved state management and UI consistency by @CodingOnStar in https://github.com/langgenius/dify/pull/35702
* refactor: port WorkflowDraftVariableFile by @asukaminato0721 in https://github.com/langgenius/dify/pull/30923
* refactor(web): migrate short tooltips to dify-ui by @lyzno1 in https://github.com/langgenius/dify/pull/35715
* refactor(web): migrate subscription create modal to dialog by @lyzno1 in https://github.com/langgenius/dify/pull/35721
* fix: ToolEntity data validation failed during workflow synchronization by @eldoradoel in https://github.com/langgenius/dify/pull/35696
* refactor(web/select):  base selects to dify-ui by @lyzno1 in https://github.com/langgenius/dify/pull/35720
* fix(plugin): preserve multi-value HTTP response headers by @xr843 in https://github.com/langgenius/dify/pull/35726
* fix: var reference picker can not choose sub vars by @iamjoel in https://github.com/langgenius/dify/pull/35732
* chore: generate enterprise console API by @hyoban in https://github.com/langgenius/dify/pull/35735
* fix: prevent workflow node titles from overflowing by @hjlarry in https://github.com/langgenius/dify/pull/35740
* refactor(web): workflow hotkeys and history state by @lyzno1 in https://github.com/langgenius/dify/pull/35736
* fix: fix structured_output_enabled miss in second validate by @fatelei in https://github.com/langgenius/dify/pull/35747
* chore: generate contact from api by @hyoban in https://github.com/langgenius/dify/pull/35748
* refactor: replace Any with [T] syntax by @aliworksx08 in https://github.com/langgenius/dify/pull/35750
* fix(api): preserve dataset metadata filters by @princepal9120 in https://github.com/langgenius/dify/pull/35700
* ci: Remove API contracts generation step from autofix workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/35768
* fix: Clean upload filenames parsed from URLs by @jonathanchang31 in https://github.com/langgenius/dify/pull/35706
* refactor(tests): use db_session_with_containers in test_storage_key_loader by @guangyang1206 in https://github.com/langgenius/dify/pull/35766
* fix: IDOR on console `GET /account/avatar` by @NeatGuyCoding in https://github.com/langgenius/dify/pull/35771
* chore(deps): bump the google group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35779
* chore(deps): bump anthropics/claude-code-action from 1.0.110 to 1.0.111 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/langgenius/dify/pull/35781
* fix(web): secure external form help links by @aliworksx08 in https://github.com/langgenius/dify/pull/35751
* refactor(web): convert ValidatedStatus enum to as-const in key-valida… by @guangyang1206 in https://github.com/langgenius/dify/pull/35749
* fix: skip empty documents before vector embedding by @princepal9120 in https://github.com/langgenius/dify/pull/35763
* refactor(web): migrate legacy tooltip to infotip by @lyzno1 in https://github.com/langgenius/dify/pull/35774
* refactor(web): migrate workflow node actions menu by @lyzno1 in https://github.com/langgenius/dify/pull/35785
* chore(deps-dev): bump the dev group in /api with 6 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35782
* fix: preserve single-run input variable types by @Jingyi-Dify in https://github.com/langgenius/dify/pull/35710
* refactor(web): migrate workflow panel context menu primitive by @lyzno1 in https://github.com/langgenius/dify/pull/35787
* fix(rag): use doc_id dedup key for any provider, not only dify by @ki3nd in https://github.com/langgenius/dify/pull/35759
* refactor(web): migrate HITL overlays to base dialog by @lyzno1 in https://github.com/langgenius/dify/pull/35792
* chore(deps): bump the storage group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/35791
* fix: workflow online users polling for large app lists by @hjlarry in https://github.com/langgenius/dify/pull/35786
* refactor: migrate workflow queries to contracts by @lyzno1 in https://github.com/langgenius/dify/pull/35799
* fix: fix test_sharded_channel failed by @fatelei in https://github.com/langgenius/dify/pull/35814
* fix: fix Working outside of application context by @fatelei in https://github.com/langgenius/dify/pull/35819
* fix: restore workflow versions via backend API by @hjlarry in https://github.com/langgenius/dify/pull/35817
* fix(file_factory): drop doubled dot when standardizing datasource file extension by @Beandon13 in https://github.com/langgenius/dify/pull/35808
* chore(tailwind-css): migrate to css first by @lyzno1 in https://github.com/langgenius/dify/pull/35754
* refactor(webapp): migrate partial overlays by @lyzno1 in https://github.com/langgenius/dify/pull/35825
* fix: migrate condition operator popover by @hjlarry in https://github.com/langgenius/dify/pull/35828
* fix(web): align Tailwind v4 CSS migration by @lyzno1 in https://github.com/langgenius/dify/pull/35829
* fix(workflow): unblock plugin model selector tools on 1.14.0 by @sawyer-shi in https://github.com/langgenius/dify/pull/35794
* fix(web): normalize dify-ui overlay control by @lyzno1 in https://github.com/langgenius/dify/pull/35832
* chore(web): add enterprise dev proxy support by @hyoban in https://github.com/langgenius/dify/pull/35842
* chore: improve the progress of education pay  by @iamjoel in https://github.com/langgenius/dify/pull/35851
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35853
* refactor: verticalize tag management and batch bindings by @lyzno1 in https://github.com/langgenius/dify/pull/35840
* ci: bump tyck by @asukaminato0721 in https://github.com/langgenius/dify/pull/35862
* fix: update endpoint when update tidb status by @zyssyz123 in https://github.com/langgenius/dify/pull/35854
* chore(deps): bump mako from 1.3.11 to 1.3.12 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35863
* chore(deps): bump gitpython from 3.1.47 to 3.1.49 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35864
* fix(workflow): use correct field ID in KB metadata filter selection by @shawny011717 in https://github.com/langgenius/dify/pull/34149
* feat(dev-proxy): init package by @hyoban in https://github.com/langgenius/dify/pull/35852
* refactor: add type to test by @asukaminato0721 in https://github.com/langgenius/dify/pull/30873
* feat: add dify-ui autocomplete and combobox by @lyzno1 in https://github.com/langgenius/dify/pull/35868
* chore: easier and simpler deploy by @Stream29 in https://github.com/langgenius/dify/pull/35708
* refactor: improve model selector search by @lyzno1 in https://github.com/langgenius/dify/pull/35875
* fix: transfer workspace dropdown not show by @iamjoel in https://github.com/langgenius/dify/pull/35876
* refactor(web): migrate tag controls to combobox by @lyzno1 in https://github.com/langgenius/dify/pull/35881
* test: migrate plugin permission tests to testcontainers by @escape0707 in https://github.com/langgenius/dify/pull/35884
* fix: delete redundant api/libs/typing.py by @escape0707 in https://github.com/langgenius/dify/pull/35890
* refactor(web): portal to follow elem migration by @CodingOnStar in https://github.com/langgenius/dify/pull/35892
* refactor(api): migrate console apikey responses to BaseModel by @ai-hpc in https://github.com/langgenius/dify/pull/35218
* test: add type to test by @asukaminato0721 in https://github.com/langgenius/dify/pull/35871
* chore: example of isinstance to match case by @asukaminato0721 in https://github.com/langgenius/dify/pull/35903
* refactor: migrate app selector to combobox by @lyzno1 in https://github.com/langgenius/dify/pull/35896
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/35812
* refactor(web): inline tag query defaults by @lyzno1 in https://github.com/langgenius/dify/pull/35883
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/35907
* fix(web): explicitly resume AudioContext and play audio on first TTS load by @ki3nd in https://github.com/langgenius/dify/pull/35901
* fix(web): pass end_user.external_user_id string to transcript_asr by @ki3nd in https://github.com/langgenius/dify/pull/35898
* fix: replace SimpleNamespace with MagicMock(spec=App) in _app_stub (#34636) by @EvanYao826 in https://github.com/langgenius/dify/pull/35897
* fix(i18n): update Turkish translations for new strings by @bakiburakogun in https://github.com/langgenius/dify/pull/35905
* fix(tools): scope builtin tool default-credential clear to tenant by @GareArc in https://github.com/langgenius/dify/pull/35887
* feat: support configurable explore app categories by @hjlarry in https://github.com/langgenius/dify/pull/35723
* fix(workflow): handle file-preview URLs in node output display by @shawny011717 in https://github.com/langgenius/dify/pull/34150
* feat(dify-ui): add drawer by @lyzno1 in https://github.com/langgenius/dify/pull/35917
* chore: add query generator before lauch webapp by @iamjoel in https://github.com/langgenius/dify/pull/35416
* refactor: convert isinstance chains to match/case (#35902) by @EvanYao826 in https://github.com/langgenius/dify/pull/35922
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35933
* feat: support SQLALCHEMY_POOL_RESET_ON_RETURN config by @fatelei in https://github.com/langgenius/dify/pull/31156
* chore(docker): clean up env examples by @laipz8200 in https://github.com/langgenius/dify/pull/35938
* refactor: split docker-compose env config into separate files by @macatizm in https://github.com/langgenius/dify/pull/31586
* chore: dep inject for session by @asukaminato0721 in https://github.com/langgenius/dify/pull/35934
* fix: prevent workflow preview resize observer loop by @lyzno1 in https://github.com/langgenius/dify/pull/35936
* fix: change write to db order by @fatelei in https://github.com/langgenius/dify/pull/35948
* ci: auto gen api doc and download link by @asukaminato0721 in https://github.com/langgenius/dify/pull/35919
* chore: bump LiteLLM for CVE-2026-42208 by @crazywoola in https://github.com/langgenius/dify/pull/35953
* chore: add Type to test by @asukaminato0721 in https://github.com/langgenius/dify/pull/35942
* chore(deps): bump gitpython from 3.1.49 to 3.1.50 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/35958
* fix(web): forward csp nonce to theme script by @lyzno1 in https://github.com/langgenius/dify/pull/35960
* fix(swagger): add util to convert BaseModel to schema for query params by @cqjjjzr in https://github.com/langgenius/dify/pull/35959
* refactor(web): migrate legacy tooltip callers by @lyzno1 in https://github.com/langgenius/dify/pull/35961
* refactor(web): migrate headless-ui components to dify-ui by @lyzno1 in https://github.com/langgenius/dify/pull/35962
* fix: mismatched button label in prefilled WebApp launch description by @iamjoel in https://github.com/langgenius/dify/pull/35964
* chore(api): upgrade graphon to v0.3.0 by @laipz8200 in https://github.com/langgenius/dify/pull/35469
* ci: update comment by @asukaminato0721 in https://github.com/langgenius/dify/pull/35968
* fix(swagger): Apply the inline-nested-dicts patch to HTTP Swagger endpoints by @cqjjjzr in https://github.com/langgenius/dify/pull/35952
* feat(dify-ui): add Tabs/ToggleGroup by @lyzno1 in https://github.com/langgenius/dify/pull/35965
* refactor(api): migrate console.app.workflow etc. to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/35967
* fix: Image rendering in the knowledge base failed. by @FFXN in https://github.com/langgenius/dify/pull/35914
* refactor(web): drop headless-ui, migrate overlay to dify-ui by @CodingOnStar in https://github.com/langgenius/dify/pull/35963
* refactor(web): converge overlay layering on dify-ui z-50 by @lyzno1 in https://github.com/langgenius/dify/pull/35976
* refactor(web): migrate drawer components to dify-ui and remove legacy drawer implementation by @CodingOnStar in https://github.com/langgenius/dify/pull/35982
* chore: unify api && clean some type ignore by @asukaminato0721 in https://github.com/langgenius/dify/pull/35984
* chore: api para type by @asukaminato0721 in https://github.com/langgenius/dify/pull/35985
* chore(web): remove drawer overlay import restriction by @lyzno1 in https://github.com/langgenius/dify/pull/35990
* feat: support editable class labels in question classifier by @Blackoutta in https://github.com/langgenius/dify/pull/35430
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/35994
* fix(api): "File validation failed" on Chatflow follow-up with custom file type + memory by @lin-snow in https://github.com/langgenius/dify/pull/35891
* feat(human-input): expose selected action value by @Blackoutta in https://github.com/langgenius/dify/pull/35451
* chore: separate websocket service by @hjlarry in https://github.com/langgenius/dify/pull/35981
* fix(trace): LangSmith trace_id mismatch in chatflow workflow traces by @ki3nd in https://github.com/langgenius/dify/pull/35979
* refactor: port DatasetProcessRule by @asukaminato0721 in https://github.com/langgenius/dify/pull/31004
* feat(web): improve a11y and remove data-testid by @lyzno1 in https://github.com/langgenius/dify/pull/35999
* chore(deps): bump the github-actions-dependencies group with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/36009
* chore(deps): bump opentelemetry-exporter-otlp-proto-grpc from 1.41.0 to 1.41.1 in /api in the opentelemetry group by @dependabot[bot] in https://github.com/langgenius/dify/pull/36013
* chore(web): refresh agent skills by @hyoban in https://github.com/langgenius/dify/pull/36015
* chore(deps): bump the storage group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/36017
* chore(deps): bump gunicorn from 25.3.0 to 26.0.0 in /api in the flask group by @dependabot[bot] in https://github.com/langgenius/dify/pull/36011
* fix(web): remove unsafe select value casts by @lyzno1 in https://github.com/langgenius/dify/pull/36007
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/36019
* fix: improve workflow checklist semantics by @lyzno1 in https://github.com/langgenius/dify/pull/36006
* fix: use infotip for help glyphs by @lyzno1 in https://github.com/langgenius/dify/pull/36008
* chore(deps): bump the google group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/36012
* fix(docker): update middleware env setup by @laipz8200 in https://github.com/langgenius/dify/pull/35946
* chore(api): upgrade graphon to v0.3.1 by @QuantumGhost in https://github.com/langgenius/dify/pull/35987
* refactor(web): split premium badge button semantics by @lyzno1 in https://github.com/langgenius/dify/pull/36026
* refactor: replace dict params with BaseModel in AppService by @satishkc7 in https://github.com/langgenius/dify/pull/35904
* refactor: enhance modal layouts and scrolling behavior across components by @CodingOnStar in https://github.com/langgenius/dify/pull/36033
* refactor: port some if else to match by @asukaminato0721 in https://github.com/langgenius/dify/pull/31841
* feat: improve phoenix workflow tracing by @Blackoutta in https://github.com/langgenius/dify/pull/35605
* fix(web): align tag filter dropdown icon by @lyzno1 in https://github.com/langgenius/dify/pull/36041
* chore: port WorkflowComment by @asukaminato0721 in https://github.com/langgenius/dify/pull/36039
* refactor(apps): simplify query state and debounce URL writes by @lyzno1 in https://github.com/langgenius/dify/pull/36043
* chore(deps): bump urllib3 from 2.6.3 to 2.7.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/36050
* fix: avoid trial workflow schema model collision by @hjlarry in https://github.com/langgenius/dify/pull/36061
* fix: validate missing text indexing technique by @juyua9 in https://github.com/langgenius/dify/pull/35941
* refactor(web): migrate searchable pickers to combobox by @lyzno1 in https://github.com/langgenius/dify/pull/36066
* refactor: rewrite estimate_args_validate using Pydantic v2 models by @Deepam02 in https://github.com/langgenius/dify/pull/36036
* fix(security): harden self-hosted SECRET_KEY bootstrap by @laipz8200 in https://github.com/langgenius/dify/pull/36049
* fix: the /threads and /db-pool-stat endpoints in api... in... by @orbisai0security in https://github.com/langgenius/dify/pull/35665
* chore(release): bump version to 1.14.1 by @laipz8200 in https://github.com/langgenius/dify/pull/36034
* chore: DocumentSegment to Typebase by @asukaminato0721 in https://github.com/langgenius/dify/pull/35635

## New Contributors
* @eldoradoel made their first contribution in https://github.com/langgenius/dify/pull/35696
* @princepal9120 made their first contribution in https://github.com/langgenius/dify/pull/35700
* @guangyang1206 made their first contribution in https://github.com/langgenius/dify/pull/35766
* @ki3nd made their first contribution in https://github.com/langgenius/dify/pull/35759
* @Beandon13 made their first contribution in https://github.com/langgenius/dify/pull/35808
* @sawyer-shi made their first contribution in https://github.com/langgenius/dify/pull/35794
* @shawny011717 made their first contribution in https://github.com/langgenius/dify/pull/34149
* @escape0707 made their first contribution in https://github.com/langgenius/dify/pull/35884
* @EvanYao826 made their first contribution in https://github.com/langgenius/dify/pull/35897
* @macatizm made their first contribution in https://github.com/langgenius/dify/pull/31586
* @cqjjjzr made their first contribution in https://github.com/langgenius/dify/pull/35959
* @satishkc7 made their first contribution in https://github.com/langgenius/dify/pull/35904
* @juyua9 made their first contribution in https://github.com/langgenius/dify/pull/35941
* @Deepam02 made their first contribution in https://github.com/langgenius/dify/pull/36036
* @orbisai0security made their first contribution in https://github.com/langgenius/dify/pull/35665

**Full Changelog**: https://github.com/langgenius/dify/compare/1.14.0...1.14.1

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.14.1` · 2026-05-12 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.14.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
