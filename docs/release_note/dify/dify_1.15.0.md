---
title: "dify 1.15.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.15.0"
published: "2026-06-25"
type: "minor"
lang: "en"
summary: "Redesigned landing / onboarding for an easier first-run experience (#37433, #37844, #37800) · Faster navigation — improved 'go to anything' palette and autofocused search inputs (#32130, #37175)"
---

# dify 1.15.0

# Dify 1.15.0 Release Note

## What's Changed

### UX & UI Enhancements

<img width="1920" height="1044" alt="录屏2026-06-25 21 12 33" src="https://github.com/user-attachments/assets/c3ac7394-2ccf-4a66-873a-b7224a16897a" />


- **Redesigned landing / onboarding** for an easier first-run experience (#37433, #37844, #37800)
- **Faster navigation** — improved "go to anything" palette and autofocused search inputs (#32130, #37175)
- **Safer deletes** — one-click confirmation before removing an app (#37263)
- **Cleaner workflow editor** with collapsible panels (#37276)
- **Clearer notifications** — consistent toasts that show long errors in full (#37382, #37581)
- **More accessible** — plugin permission hints, restored contact-us menu, skip-nav link, and keyboard focus polish (#37310, #37774, #37644)

### New Features
**difyctl — drive Dify from the command line** ([Docs](https://docs.dify.ai/en/cli/overview))
- difyctl is a command-line client for Dify: you can now run apps and workflows straight from your terminal, so personal agents, scripts, and CI pipelines can invoke Dify workflows without opening the web UI (#37036)
- Install it on any platform (macOS, Linux, Windows) with a single command and no access token — binaries are published as public releases with checksum verification (#37036, #37454)
- Pass scoped environment variables to CLI tool runs, and get clearer, consistent error messages (including friendly rate-limit handling) across both difyctl and the `/openapi/v1` API (#37324, #37285, #37313, #36896)

**See CoT in Workflow & Chatflow & CLI**
- Chat Flow / Workflow can now stream the model's reasoning into a dedicated live "thinking" panel while keeping the final answer clean and readable. The reasoning is preserved so it's still there after a page refresh, and the same reasoning is visible in CLI and workflow run previews (#37460, #37828)

**Richer Human-in-the-Loop forms**
- When a workflow pauses to ask a person for input, the form can now include dropdown selects and file / multi-file uploads — not just free text — so people can answer with structured choices and attachments (#36322)

**Support for slow, long-running models**
- Workflows can now use generation models that take a long time to respond (such as image or video generation) via a polling mechanism: the node patiently waits for the final result instead of timing out (#37462)

**Knowledge from richer spreadsheets**
- Images embedded inside Excel files are now extracted during knowledge import, so spreadsheet content that relies on pictures (diagrams, screenshots, charts) is no longer lost (#37104)

**Deeper observability**
- Set your own trace session id for Phoenix so traces line up with your application's sessions, and follow document-retrieval steps in traces to understand how RAG results were produced (#37056, #37283)

**Workflow authoring polish**
- A refreshed start node makes it clearer how a workflow begins, and a smarter output node gives you more control over what a workflow returns (#37348, #35511)
- Friendlier errors when an app or workspace ID is malformed, instead of confusing failures (#37212)

**Faster plugin installs in certain regions**
- The plugin daemon now auto-detects your region at startup and, where network connectivity to PyPI is poor, automatically picks a nearby package mirror — so installing plugins is faster and more reliable without any manual setup. You can still pin a specific mirror if you prefer (dify-plugin-daemon#750)

### Security Updates

This release fixes a path traversal issue in plugin-daemon forwarding (cve-2026-41948).

### Bug Fixes
- Hardened outbound HTTP with bounded timeouts for Firecrawl, Jina, Watercrawl, Nacos, and Marketplace requests, and hardened default SSRF proxy egress (#37638, #37637, #37515, #37444, #37424, #36332)
- Fixed Lindorm vector store errors caused by the `opensearch-py` update (#37862) and Tongyi credential compatibility (#37942)
- Invalidated credential cache after OAuth refresh (#37630)
- Improved workflow execution error handling, eagerly validated conversations to prevent hanging, and prevented legacy stop from interrupting GraphEngine runs (#37919, #37224, #37129)
- Resolved `DetachedInstanceError` via session management refactoring (#37847) and stabilized deployment state hydration (#37818)
- Fixed conversation variable description length validation to prevent `varchar(255)` truncation (#33038) and stored Chinese as unicode so search works (#37446)
- Numerous web UI and accessibility/focus-ring polish fixes

### Improvements
- Refactored session management across services to accept `db.session` explicitly via dependency injection for consistency (#37639, #37832, #37695, #37694, and related)
- Modernized typing (removed redundant `type: ignore`/`cast`, converted ABCs to `Protocol`, replaced `isinstance` chains with `match-case`)
- Reduced workflow startup latency for Chatflow (#36773) and lowered workflow termination latency so stopping a run takes effect faster (#37106, #37129)
- Upgraded dependencies for CVE fixes (Bleach, PyJWT, starlette, storage group) (#37860, #37008, #37076, #37861)

## Environment Variable Changes

### Added
- `DEVICE_FLOW_APPROVE_RATE_LIMIT_PER_HOUR` (`docker/envs/core-services/shared.env.example`)
- `DIFY_ENV_NACOS_CONNECT_TIMEOUT`, `DIFY_ENV_NACOS_REQUEST_TIMEOUT` (`api/.env.example`)
- `ENABLE_LEARN_APP` (`api/.env.example`)
- `ENABLE_OAUTH_BEARER` (`docker/envs/core-services/shared.env.example`)
- `MILVUS_SECURE`, `MILVUS_SERVER_NAME`, `MILVUS_SERVER_PEM_PATH` (`docker/envs/vectorstores/milvus.env.example`)
- `NEXT_PUBLIC_ENABLE_FEATURE_PREVIEW` (`docker/envs/core-services/web.env.example`)
- `OPENAPI_CORS_ALLOW_ORIGINS`, `OPENAPI_ENABLED`, `OPENAPI_KNOWN_CLIENT_IDS`, `OPENAPI_RATE_LIMIT_PER_TOKEN` (`docker/envs/core-services/shared.env.example`)
- `PLUGIN_MODEL_PROVIDERS_CACHE_TTL` (`api/.env.example`)
- `SERVER_CONSOLE_API_URL` (`docker/.env.example`)
- `SSRF_PROXY_ALLOW_PRIVATE_DOMAINS`, `SSRF_PROXY_ALLOW_PRIVATE_IPS`, `SSRF_SANDBOX_PROXY_HOST`, `SSRF_SANDBOX_PROXY_PORT` (`docker/envs/middleware.env.example`)
-  `PIP_MIRROR_AUTO_DETECT` (plugin daemon; default `true`) — auto-select a nearby PyPI mirror at startup for regions with poor connectivity
- `PIP_MIRROR_URL` (plugin daemon; default empty) — manually pin the PyPI mirror; takes precedence over auto-detection


### Removed
- `SSRF_REVERSE_PROXY_PORT`, `SSRF_SANDBOX_HOST` (`docker/envs/middleware.env.example`)

### Modified
- `UV_CACHE_DIR`: `/tmp/.uv-cache` → `/tmp/uv_cache`

### Docker Compose Files
- `docker/docker-compose.yaml` (modified)
- `docker/docker-compose.middleware.yaml` (modified)
- `docker/docker-compose.pytest.ports.yaml` (added)

## Database Migrations

This release includes new database migrations. Run `flask db upgrade` (or `uv run --project api flask db upgrade`) after updating the code. Notable schema additions:
- OAuth access tokens (`ENABLE_OAUTH_BEARER`)
- Credential visibility
- Human Input upload tables and conversation linkage
- **Category-scoped plugin auto-upgrade strategy** (`add_plugin_auto_upgrade_category`)
- App stars, learn-dify / cloud-only flags on recommended apps
- Normalized legacy end-user type

## Upgrade Guide

### Model Type Migration

> [!IMPORTANT]
>
> **One-time legacy model type migration for self-hosted upgrades**
>
> If this deployment was upgraded from a Dify version earlier than `1.15.0` and this migration has not already been applied, run it after upgrading.
>
> This migration is **not included in `flask db upgrade`**. Without it, legacy model records can cause model-related API requests to fail with errors, preventing affected models from being loaded or used.
>
> Back up the database before applying the migration. The command runs in dry-run mode by default; review the output before rerunning it with `--apply`. The migration is idempotent and can be safely rerun.

#### Docker Compose

Run from the `docker` directory.

```bash
# Apply after reviewing the dry-run output
docker compose exec -T api flask data-migrate legacy-model-types --apply \
  > legacy-model-types-apply.jsonl
```

#### Source Code Deployment

Run from the repository root after completing `flask db upgrade`.

```bash
# Apply after reviewing the dry-run output
uv run --project api flask data-migrate legacy-model-types --apply \
  > legacy-model-types-apply.jsonl
```

After applying the migration, run the dry-run command again. If it reports no additional row updates or deletions, restart the relevant services and verify that existing models can be loaded and invoked successfully.

> [!IMPORTANT]
>
> - This release includes new database migrations. Run them as part of the upgrade.
> - **Plugin auto-upgrade is now configured per plugin category.** After running `flask db upgrade`, you MUST also run `flask backfill-plugin-auto-upgrade` to migrate existing tenants' auto-upgrade settings into the new category-scoped model. If you skip this step, plugin auto-upgrade settings users previously configured may stop taking effect.
> - Environment variables changed (19 added, 2 removed, 1 modified). Review the Environment Variable Changes section and update your `.env` accordingly.
> - Docker Compose configuration files changed. If you maintain a customized `docker-compose.yaml`, review the changes and re-apply local customizations carefully.

### Docker Compose Deployments
1. Back up your customized docker-compose YAML and env files.
   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```
2. Get the latest code for the `1.15.0` release.
   ```bash
   git fetch --tags
   git checkout 1.15.0
   ```
3. Stop the services (run inside the `docker` directory).
   ```bash
   docker compose down
   ```
4. Back up data.
   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```
5. Review any env file changes and re-apply local customizations.
6. Upgrade services.
   ```bash
   docker compose up -d
   ```
7. **Backfill category-scoped plugin auto-upgrade strategies** (required).
   ```bash
   docker compose exec api flask backfill-plugin-auto-upgrade
   ```

### Source Code Deployments
1. Stop the API server, Worker, and Web frontend server.
2. Get the latest code for the `1.15.0` release.
   ```bash
   git fetch --tags
   git checkout 1.15.0
   ```
3. Update Python dependencies.
   ```bash
   cd api
   uv sync
   ```
4. Run database migrations.
   ```bash
   uv run flask db upgrade
   ```
5. **Backfill category-scoped plugin auto-upgrade strategies** (required).
   ```bash
   uv run flask backfill-plugin-auto-upgrade
   ```
6. Restart the API server, Worker, and Web frontend server.


## Full Change List
* feat(dify-ui): add shared form primitives by @lyzno1 in https://github.com/langgenius/dify/pull/36334
* refactor(web): migrate annotation selection to checkbox group by @lyzno1 in https://github.com/langgenius/dify/pull/36370
* feat(dev-proxy): isolate local auth cookies by target by @lyzno1 in https://github.com/langgenius/dify/pull/36371
* chore(api): annotate simple contract responses by @hyoban in https://github.com/langgenius/dify/pull/36331
* fix(agenton): use AsyncGenerator return annotation for asynccontextmanager by @algojogacor in https://github.com/langgenius/dify/pull/36361
* test(api): manage backend pytest services natively by @laipz8200 in https://github.com/langgenius/dify/pull/36235
* refactor(web): migrate multi-checkbox lists to CheckboxGroup by @lyzno1 in https://github.com/langgenius/dify/pull/36381
* chore: hide model provider setting in default model setting by @iamjoel in https://github.com/langgenius/dify/pull/36383
* feat(dev-proxy): reload env file changes by @lyzno1 in https://github.com/langgenius/dify/pull/36384
* fix: prevent agent tool info popover from jumping on close by @iamjoel in https://github.com/langgenius/dify/pull/36389
* test: stabilize trigger subscription name uniqueness setup by @escape0707 in https://github.com/langgenius/dify/pull/36353
* fix(api): add Phoenix wrapper spans and error tracing by @Blackoutta in https://github.com/langgenius/dify/pull/36388
* feat: add new agent by @zyssyz123 in https://github.com/langgenius/dify/pull/36284
* chore(codeowners): update plugin ownership by @laipz8200 in https://github.com/langgenius/dify/pull/36394
* fix: workflow node selection state not sync caused problem by @iamjoel in https://github.com/langgenius/dify/pull/36390
* chore(web): remove generic tailwind skill by @lyzno1 in https://github.com/langgenius/dify/pull/36402
* fix: fix add uv_cache_dir env by @fatelei in https://github.com/langgenius/dify/pull/36398
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/36413
* refactor: convert isinstance chains to match/case pattern by @xxiaoxiong in https://github.com/langgenius/dify/pull/36364
* fix(web): prevent local cloud analytics script errors by @lyzno1 in https://github.com/langgenius/dify/pull/36420
* refactor: migrate to tailwind v4 style by @hyoban in https://github.com/langgenius/dify/pull/36417
* chore(deps): bump the storage group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/36393
* build: fix api docker build by @hyoban in https://github.com/langgenius/dify/pull/36423
* chore: bump versions for litellm and langsmith by @wylswz in https://github.com/langgenius/dify/pull/36385
* fix: prevent recursion error when SharePoint folder is empty by @EvanYao826 in https://github.com/langgenius/dify/pull/36372
* fix(web): resolve model provider console warnings by @lyzno1 in https://github.com/langgenius/dify/pull/36422
* chore: Check more files by @asukaminato0721 in https://github.com/langgenius/dify/pull/36407
* fix(api): fix invalid token error while changing email by @QuantumGhost in https://github.com/langgenius/dify/pull/36412
* chore: example for [Refactor/Chore] add missing-override-decorator #36406 by @asukaminato0721 in https://github.com/langgenius/dify/pull/36425
* chore(codeowners): assign trigger scheduler ownership by @laipz8200 in https://github.com/langgenius/dify/pull/36430
* fix(web): debounce email check when change email by @JzoNgKVO in https://github.com/langgenius/dify/pull/36421
* chore: move API readiness reporting to terminal output by @hyoban in https://github.com/langgenius/dify/pull/36433
* chore(api): cap non-dev dependency major versions by @laipz8200 in https://github.com/langgenius/dify/pull/36429
* refactor(web): use dropdown data attributes by @lyzno1 in https://github.com/langgenius/dify/pull/36431
* fix(auth): use validity-returned token in ChangePasswordForm reset submit by @GareArc in https://github.com/langgenius/dify/pull/36415
* ci: show web test shard failures by @lyzno1 in https://github.com/langgenius/dify/pull/36436
* chore: update to only SaaS can view template by @iamjoel in https://github.com/langgenius/dify/pull/36440
* fix: allow config pubsub join timeout for lower post-run latency by @wylswz in https://github.com/langgenius/dify/pull/36438
* chore: remove unused pyrefly ignore comments in dataset.py by @xxiaoxiong in https://github.com/langgenius/dify/pull/36443
* chore: upgrade base ui to 1.5.0 by @lyzno1 in https://github.com/langgenius/dify/pull/36442
* feat(ui): migrate radio to Base UI and update web callsites by @lyzno1 in https://github.com/langgenius/dify/pull/36451
* chore: compatiable conversation is not exists by @fatelei in https://github.com/langgenius/dify/pull/33274
* feat: wire workflow agent node runtime by @zyssyz123 in https://github.com/langgenius/dify/pull/36437
* fix: suggested questions API crash on legacy conversation override configs by @leslie2046 in https://github.com/langgenius/dify/pull/36459
* feat: add dify-ui input primitive by @lyzno1 in https://github.com/langgenius/dify/pull/36446
* fix(web): use popup-open selectors for trigger styles by @lyzno1 in https://github.com/langgenius/dify/pull/36471
* fix(ci): bad pyinfra type coverage report comments by @cqjjjzr in https://github.com/langgenius/dify/pull/36482
* refactor: add missing @override decorator to AppGenerateResponseConverter subclasses by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36486
* refactor(api): migrate console.datasets.metadata to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36450
* feat(api): Flask-RESTX `response()` vs actual return value checker by @cqjjjzr in https://github.com/langgenius/dify/pull/36488
* fix(api): stop returning 204 with response body and add CI check by @cqjjjzr in https://github.com/langgenius/dify/pull/36489
* refactor: add missing @override decorator to AppQueueManager subclasses by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36490
* refactor: add missing @override decorator to GraphEngineLayer subclasses by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36491
* chore: add Type to test by @asukaminato0721 in https://github.com/langgenius/dify/pull/36454
* refactor: add missing @override decorator to code executor providers and transformers by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36496
* refactor: add missing @override decorator to file access controller and workflow file runtime by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36495
* refactor: add missing @override decorator to PluginModelRuntime by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36493
* refactor: add missing @override decorator to datasource plugin classes by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36494
* refactor: add missing @override decorator to Moderation subclasses by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36492
* fix(api): pass SSL verify flag to SSRF proxy mounts by @laipz8200 in https://github.com/langgenius/dify/pull/36455
* fix(api): preserve remote file URL query params by @lord-Rheagar in https://github.com/langgenius/dify/pull/36478
* refactor: streamline workflow context menu lifecycle by @lyzno1 in https://github.com/langgenius/dify/pull/36500
* refactor: add missing @override decorator to agent runners, tool caches, and logging extensions by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36511
* fix(dify-ui): align form label guidance by @lyzno1 in https://github.com/langgenius/dify/pull/36510
* refactor(web): improve retrieval and tag control semantics by @lyzno1 in https://github.com/langgenius/dify/pull/36521
* fix(web): stabilize document picker search focus by @lyzno1 in https://github.com/langgenius/dify/pull/36525
* chore: seprate vector space quota query by @hjlarry in https://github.com/langgenius/dify/pull/36514
* refactor: add missing @override decorator to remaining MCP, Jieba, embeddings, and misc subclasses by @AlsoTheZv3n in https://github.com/langgenius/dify/pull/36528
* refactor(api): migrate console/service_api.dataset to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36480
* refactor: convert isinstance chains to match/case in otel parser by @liaoyl830 in https://github.com/langgenius/dify/pull/36534
* feat(plugin): cache plugin model providers by tenant by @laipz8200 in https://github.com/langgenius/dify/pull/36449
* refactor: add missing @override decorators to method overrides by @EvanYao826 in https://github.com/langgenius/dify/pull/36501
* fix: handle null summary_index_setting in KnowledgeIndexNodeData by @EvanYao826 in https://github.com/langgenius/dify/pull/36355
* fix(api): use plain Session in RAG pipeline controllers to prevent closed-transaction error by @KurodaKayn in https://github.com/langgenius/dify/pull/36392
* chore: add UUID/str type annotations to api endpoints for files in api/controllers/console/app by @Lillian68 in https://github.com/langgenius/dify/pull/36559
* chore: add UUID/str type annotations to api endpoints for files in api/controllers/files and api/controllers/web by @Lillian68 in https://github.com/langgenius/dify/pull/36562
* chore: add UUID/str type annotations to api endpoints for files in api/controllers/service_api by @Lillian68 in https://github.com/langgenius/dify/pull/36561
* chore: add UUID/str type annotations to api endpoints for files in api/controllers/console/datasets by @Lillian68 in https://github.com/langgenius/dify/pull/36560
* chore: add UUID/str type annotations to api endpoints for files in api/controllers/console by @Lillian68 in https://github.com/langgenius/dify/pull/36563
* refactor: add missing @override decorators to TypeDecorator subclasses in models/types.py by @zhang-liz in https://github.com/langgenius/dify/pull/36565
* feat: add and unify pagination components across UI and app surfaces by @lyzno1 in https://github.com/langgenius/dify/pull/36569
* refactor(dify-ui): refine switch contract by @lyzno1 in https://github.com/langgenius/dify/pull/36539
* chore(web): remove select-auto in body by @lyzno1 in https://github.com/langgenius/dify/pull/36554
* fix(web): clean up header logo accessibility by @lyzno1 in https://github.com/langgenius/dify/pull/36567
* fix: request /api/datasets raise exception by @hjlarry in https://github.com/langgenius/dify/pull/36591
* fix: External retrieval model response rejects empty score threshold bug by @hsiong in https://github.com/langgenius/dify/pull/36577
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/36599
* feat(dify-agent): add history layer and structural output layer by @BeautyyuYanli in https://github.com/langgenius/dify/pull/36600
* refactor(dify-ui): rename toggle group to segmented control by @lyzno1 in https://github.com/langgenius/dify/pull/36605
* chore: upgrade dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/36606
* feat: add workflow_version to workflow_agent_node_bindings by @zyssyz123 in https://github.com/langgenius/dify/pull/36603
* fix: replace .distinct() with .group_by(Conversation.id) for PostgreSQL JSON compatibility by @kuishou68 in https://github.com/langgenius/dify/pull/36610
* fix: type mismatches (route says uuid: but handler says str) by @Lillian68 in https://github.com/langgenius/dify/pull/36612
* fix: center align slider thumb by @lyzno1 in https://github.com/langgenius/dify/pull/36614
* fix(api): preserve dataset nested null shapes by @FFXN in https://github.com/langgenius/dify/pull/36611
* feat(dify-ui): add status and progress primitives by @lyzno1 in https://github.com/langgenius/dify/pull/36615
* fix: member invite limits with dedup, locking, and accurate new-member counting by @linw1995 in https://github.com/langgenius/dify/pull/36512
* chore: use dify_config.BILLING_ENABLED by @hjlarry in https://github.com/langgenius/dify/pull/36619
* feat: output declaration and inspector by @zyssyz123 in https://github.com/langgenius/dify/pull/36618
* fix: normalize app icon picker dialog state by @lyzno1 in https://github.com/langgenius/dify/pull/36621
* chore: example of current user id dep injection by @asukaminato0721 in https://github.com/langgenius/dify/pull/36588
* chore: inject current user in console handlers by @Tianlel in https://github.com/langgenius/dify/pull/36628
* fix: normalize summary_index_setting None to fix preview error by @EvanYao826 in https://github.com/langgenius/dify/pull/36626
* chore: dep inject for sql session by @asukaminato0721 in https://github.com/langgenius/dify/pull/36545
* fix(security): reject path traversal sequences before plugin daemon forward (GHSA-gvc6-fh3x-89xh) by @xr843 in https://github.com/langgenius/dify/pull/35796
* fix: remove unused datasource_parameters from Notion pre-import query by @EvanYao826 in https://github.com/langgenius/dify/pull/36627
* feat: adding dify cli by @wylswz in https://github.com/langgenius/dify/pull/36348
* feat(dify-ui): add textarea primitive by @lyzno1 in https://github.com/langgenius/dify/pull/36547
* feat(dify-agent): sync agent progress by @BeautyyuYanli in https://github.com/langgenius/dify/pull/36633
* chore: inject current user in explore message handlers by @Tianlel in https://github.com/langgenius/dify/pull/36652
* chore: inject tenant id in feature handlers by @Tianlel in https://github.com/langgenius/dify/pull/36654
* chore: inject account context in file handlers by @Tianlel in https://github.com/langgenius/dify/pull/36655
* chore: inject tenant id in extension handlers by @Tianlel in https://github.com/langgenius/dify/pull/36656
* chore(deps): bump boto3 from 1.43.10 to 1.43.14 in /api in the storage group by @dependabot[bot] in https://github.com/langgenius/dify/pull/36595
* chore: add dependabot to lts branch by @wylswz in https://github.com/langgenius/dify/pull/36424
* feat(api): Node Output Inspector service + 3 REST endpoints (Stage 4 §8) by @zyssyz123 in https://github.com/langgenius/dify/pull/36644
* fix(dify-ui): align picker stories with Base UI by @lyzno1 in https://github.com/langgenius/dify/pull/36680
* refactor(api): migrate console tags to tenant/user via DI and improve tests by @cqjjjzr in https://github.com/langgenius/dify/pull/36658
* refactor(api): migrate tenant/user via DI: apikey, extension, data_source_bearer, oauth_server by @cqjjjzr in https://github.com/langgenius/dify/pull/36660
* chore: add InstalledApp type annotations to api endpoints by @Lillian68 in https://github.com/langgenius/dify/pull/36678
* chore: backend feature api exclude_vector_space by @hjlarry in https://github.com/langgenius/dify/pull/36642
* fix(chat): close streaming LLM generator when stop response is triggered by @zeus1959 in https://github.com/langgenius/dify/pull/36227
* chore: add EndUser and App type annotations to api endpoints by @Lillian68 in https://github.com/langgenius/dify/pull/36677
* chore: add App type annotations to api endpoints by @Lillian68 in https://github.com/langgenius/dify/pull/36675
* fix(plugin): align local install modal spacing by @lyzno1 in https://github.com/langgenius/dify/pull/36689
* feat(api): introduce model-type migration script by @QuantumGhost in https://github.com/langgenius/dify/pull/36520
* feat: add agent backend plugin layer by @zyssyz123 in https://github.com/langgenius/dify/pull/36686
* fix(tools): improve custom collection modal scrolling by @lyzno1 in https://github.com/langgenius/dify/pull/36694
* feat(openapi,cli): workspace switch + member management by @lin-snow in https://github.com/langgenius/dify/pull/36651
* chore(web): restrict legacy service fetch imports by @lyzno1 in https://github.com/langgenius/dify/pull/36701
* chore(api): polishhelp output for legacy-model-types migration script by @QuantumGhost in https://github.com/langgenius/dify/pull/36707
* refactor: convert isinstance chains to match/case (part 6) by @EvanYao826 in https://github.com/langgenius/dify/pull/36705
* chore: add pnpm-managed node runtime by @escape0707 in https://github.com/langgenius/dify/pull/36531
* fix(web): add loading skeletons for tools and knowledge lists by @Jingyi-Dify in https://github.com/langgenius/dify/pull/36712
* feat(api): support explicit TLS for Milvus vector store by @amr-sheriff in https://github.com/langgenius/dify/pull/36265
* refactor(cli): add kvstore and platform interface by @wylswz in https://github.com/langgenius/dify/pull/36687
* refactor(api): migrate console/service_api.dataset.hit_testing to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36533
* fix(ui): chip style by @lyzno1 in https://github.com/langgenius/dify/pull/36720
* fix: fix DocumentSegment.keywords can not a valid json by @fatelei in https://github.com/langgenius/dify/pull/36715
* refactor: use match case for draft variable serialization by @zhuiguangzhe2003 in https://github.com/langgenius/dify/pull/36716
* feat(ui): add kbd primitive by @lyzno1 in https://github.com/langgenius/dify/pull/36729
* feat(openapi): redesign auth pipeline with per-token-type routing by @GareArc in https://github.com/langgenius/dify/pull/36693
* test: move delete account task to container integration by @escape0707 in https://github.com/langgenius/dify/pull/36733
* feat(api): agent backend session lifecycle for workflow agent nodes by @zyssyz123 in https://github.com/langgenius/dify/pull/36724
* chore: install dify-agent as editable by @escape0707 in https://github.com/langgenius/dify/pull/36735
* refactor: inject tenant id in tenant-only console handlers by @Tianlel in https://github.com/langgenius/dify/pull/36751
* chore(codeowners): add Riskey for service API docs by @laipz8200 in https://github.com/langgenius/dify/pull/36731
* fix(docker): pin web docker node version by @KurodaKayn in https://github.com/langgenius/dify/pull/36756
* test: migrate workspace members tests to containers by @escape0707 in https://github.com/langgenius/dify/pull/36738
* fix(docker): copy dify-agent source into production stage by @GareArc in https://github.com/langgenius/dify/pull/36757
* refactor: add @override decorators to storage backend subclasses (#36406) by @NishchayMahor in https://github.com/langgenius/dify/pull/36755
* fix: handle null plugin badges by @crazywoola in https://github.com/langgenius/dify/pull/36767
* docs(api): fix typo in vector migration docstrings by @aliyevaladddin in https://github.com/langgenius/dify/pull/36741
* feat: add cross-environment app migration toolkit by @Blackoutta in https://github.com/langgenius/dify/pull/36765
* fix: fix cannot extract elements from a scalar by @fatelei in https://github.com/langgenius/dify/pull/36769
* feat(docker): add missing OPENAPI_* env vars to shared.env.example by @GareArc in https://github.com/langgenius/dify/pull/36752
* refactor(cli): use Store interface as token storage by @wylswz in https://github.com/langgenius/dify/pull/36726
* test: isolate Redis state in container tests by @escape0707 in https://github.com/langgenius/dify/pull/36740
* chore: type check test container tests by @escape0707 in https://github.com/langgenius/dify/pull/36790
* feat: add DTO for agent api by @zyssyz123 in https://github.com/langgenius/dify/pull/36797
* test: stabilize modal context pricing test by @escape0707 in https://github.com/langgenius/dify/pull/36524
* fix: install failed plugin dose not show icon by @iamjoel in https://github.com/langgenius/dify/pull/36811
* fix(api): validate annotation list pagination query by @WOLIKIMCHENG in https://github.com/langgenius/dify/pull/36807
* chore: unified plugin status icon position by @iamjoel in https://github.com/langgenius/dify/pull/36816
* fix(device): surface SSO errors on /device and fix CLI null-account crash on external-SSO login by @GareArc in https://github.com/langgenius/dify/pull/36781
* chore: not store search tag condition in url by @iamjoel in https://github.com/langgenius/dify/pull/36814
* refactor(cli): optimize error handling in flag parsing by @wylswz in https://github.com/langgenius/dify/pull/36810
* chore: deploy saas dev workflow by @hjlarry in https://github.com/langgenius/dify/pull/36819
* fix(cli): fix style by @wylswz in https://github.com/langgenius/dify/pull/36821
* refactor: add ts common style check for web and cli by @wylswz in https://github.com/langgenius/dify/pull/36823
* refactor: convert isinstance chains to match/case (part 7) (#35902) by @EvanYao826 in https://github.com/langgenius/dify/pull/36826
* fix: remove unnecessary # type: ignore comments (#24494) by @EvanYao826 in https://github.com/langgenius/dify/pull/36825
* chore: using single SSH_SCRIPT for saas dev by @hjlarry in https://github.com/langgenius/dify/pull/36827
* refactor(web): remove app initializer and move auth boot logic to route boundaries by @lyzno1 in https://github.com/langgenius/dify/pull/36818
* fix(web): use default profile query cache by @lyzno1 in https://github.com/langgenius/dify/pull/36832
* chore: reuse injected SQLAlchemy sessions in app read paths by @myshkin451 in https://github.com/langgenius/dify/pull/36798
* fix(auth): avoid leaking request origin in refresh redirects by @lyzno1 in https://github.com/langgenius/dify/pull/36847
* refactor(api): migrate console/service_api.dataset.segment to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36522
* fix(auth): reset profile query after login by @lyzno1 in https://github.com/langgenius/dify/pull/36851
* refactor(api): migrate console/service_api.dataset.document to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36506
* chore: dep inject for model by @asukaminato0721 in https://github.com/langgenius/dify/pull/36750
* chore: add missing @override decorators to pipeline WorkflowAppGenerateResponseConverter by @krishkantiuj-ren in https://github.com/langgenius/dify/pull/36859
* chore: split to single app_dsl_version API by @hjlarry in https://github.com/langgenius/dify/pull/36864
* fix(web): use generated current workspace query by @lyzno1 in https://github.com/langgenius/dify/pull/36843
* chore: split trial models to a single API by @hjlarry in https://github.com/langgenius/dify/pull/36796
* feat(web): add server oRPC client by @lyzno1 in https://github.com/langgenius/dify/pull/36856
* refactor(web): scope workflow hotkeys by @lyzno1 in https://github.com/langgenius/dify/pull/36860
* fix(web): prefetch workspace and guard routes with contract query by @lyzno1 in https://github.com/langgenius/dify/pull/36870
* refactor: convert isinstance chains to match/case (part 8) by @EvanYao826 in https://github.com/langgenius/dify/pull/36869
* fix: #36585 dep inject current user id by @duongynhi000005-oss in https://github.com/langgenius/dify/pull/36845
* refactor: convert isinstance chains to match/case (part 4) by @EvanYao826 in https://github.com/langgenius/dify/pull/36274
* refactor: inject current user into user-only controllers by @Tianlel in https://github.com/langgenius/dify/pull/36754
* refactor: convert if isinstance chains to match case by @duongynhi000005-oss in https://github.com/langgenius/dify/pull/36846
* refactor: convert isinstance chains to match/case (part 5) by @EvanYao826 in https://github.com/langgenius/dify/pull/36503
* fix(api): dedup EndUser in plugin get_user by session_id for Reverse Invocation by @ShuntaroOkuma in https://github.com/langgenius/dify/pull/36742
* fix: MCP search results include only MCP providers by @1795771535y-cell in https://github.com/langgenius/dify/pull/36871
* refactor: use absolute path for inter dir importing by @wylswz in https://github.com/langgenius/dify/pull/36822
* docs: add security policy by @bmtriet in https://github.com/langgenius/dify/pull/36873
* fix(api): preserve hierarchical estimate rules by @WOLIKIMCHENG in https://github.com/langgenius/dify/pull/36852
* refactor: convert isinstance chains to match/case syntax by @krishkantiuj-ren in https://github.com/langgenius/dify/pull/36862
* chore(cli): move eslint config into cli package by @lyzno1 in https://github.com/langgenius/dify/pull/36878
* chore(web): remove TanStack devtools by @lyzno1 in https://github.com/langgenius/dify/pull/36882
* fix(web): respect marketplace feature flag in model selector by @lyzno1 in https://github.com/langgenius/dify/pull/36883
* chore: update deps by @lyzno1 in https://github.com/langgenius/dify/pull/36884
* refactor(web): mark workflow run props readonly by @meaqua9420 in https://github.com/langgenius/dify/pull/36857
* chore: add override decorators to core repositories by @cupkk in https://github.com/langgenius/dify/pull/36885
* feat: per-credential visibility control for plugin credentials by @ForeignKeyCN in https://github.com/langgenius/dify/pull/35468
* fix(web): read pnpm config env in standalone start by @lyzno1 in https://github.com/langgenius/dify/pull/36887
* refactor(web): migrate local storage access to react hook by @lyzno1 in https://github.com/langgenius/dify/pull/36888
* refactor(web): migrate local storage hook usage by @lyzno1 in https://github.com/langgenius/dify/pull/36890
* refactor(cli/http): replace ky with a self-contained HTTP client by @lin-snow in https://github.com/langgenius/dify/pull/36711
* fix(api): centralize remote file retrieval by @laipz8200 in https://github.com/langgenius/dify/pull/36399
* chore: not request system-features for cloud edition by @hjlarry in https://github.com/langgenius/dify/pull/36891
* feat(web): create system-features vertical by @lyzno1 in https://github.com/langgenius/dify/pull/36894
* test: satisfy strict pyrefly for migrated container tests by @escape0707 in https://github.com/langgenius/dify/pull/36791
* docs: add client state guidelines by @lyzno1 in https://github.com/langgenius/dify/pull/36900
* fix(tools): use short-lived sessions for icon lookups to prevent idle-in-transaction by @goingforstudying-ctrl in https://github.com/langgenius/dify/pull/36903
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/36911
* chore(api): adjust migration timestamp metadata for a1b2c3d4e5f6 by @QuantumGhost in https://github.com/langgenius/dify/pull/36910
* chore: ignore .vinext by @hyoban in https://github.com/langgenius/dify/pull/36914
* fix(web): defer react-scan loader by @lyzno1 in https://github.com/langgenius/dify/pull/36920
* refactor(web): migrate workflow featured collapsed storage by @myshkin451 in https://github.com/langgenius/dify/pull/36918
* refactor(web): migrate NOTE_SHOW_AUTHOR_STORAGE_KEY to useLocalStorage/useSetLocalStorage by @kuishou68 in https://github.com/langgenius/dify/pull/36915
* feat(api): Agent App type S1 — AppMode.AGENT + create flow + binding by @zyssyz123 in https://github.com/langgenius/dify/pull/36829
* refactor(cli): unify token storage behind Store + add host/account switching by @GareArc in https://github.com/langgenius/dify/pull/36830
* refactor(web): migrate anthropic quota notice storage by @popsiclelmlm in https://github.com/langgenius/dify/pull/36922
* fix(contracts): include account avatar url in profile schema by @lyzno1 in https://github.com/langgenius/dify/pull/36924
* fix(cli): invalidate app metadata cache on 422 to clear stale data by @GareArc in https://github.com/langgenius/dify/pull/36921
* refactor: inject current user id in stop message endpoints by @likalikali in https://github.com/langgenius/dify/pull/36925
* fix: user token by @zyssyz123 in https://github.com/langgenius/dify/pull/36930
* refactor: remove unused Flask-RESTX field dicts from end_user and conversation_variable fields (#28015) by @EvanYao826 in https://github.com/langgenius/dify/pull/36929
* fix(web): use generated account-profile contracts by @lyzno1 in https://github.com/langgenius/dify/pull/36927
* feat(dify-agent): add shell layer by @BeautyyuYanli in https://github.com/langgenius/dify/pull/36838
* refactor(web): manage goto anything open state with atom by @lyzno1 in https://github.com/langgenius/dify/pull/36938
* refactor(web): migrate NEED_REFRESH_APP_LIST_KEY to useLocalStorage/useSetLocalStorage by @ZongrongLi in https://github.com/langgenius/dify/pull/36908
* refactor(web): migrate rag recommendations collapsed storage by @myshkin451 in https://github.com/langgenius/dify/pull/36940
* refactor(web): migrate question classifier label hint storage by @popsiclelmlm in https://github.com/langgenius/dify/pull/36932
* refactor: improve network error and allow verbose output by @wylswz in https://github.com/langgenius/dify/pull/36923
* ci: ruff cover agent by @asukaminato0721 in https://github.com/langgenius/dify/pull/36949
* refactor(web): migrate education verifying storage to useLocalStorage by @yzhkali in https://github.com/langgenius/dify/pull/36934
* refactor(web): migrate debug-and-preview-panel-width to useSetLocalStorage by @shifang0511 in https://github.com/langgenius/dify/pull/36977
* refactor(web): migrate workflow-variable-inpsect-panel-height to useSetLocalStorage by @shifang0511 in https://github.com/langgenius/dify/pull/36982
* refactor(api): migrate tenant/user via DI for several endpoints by @cqjjjzr in https://github.com/langgenius/dify/pull/36971
* refactor(web): migrate workflow-node-panel-width to useSetLocalStorage by @shifang0511 in https://github.com/langgenius/dify/pull/36983
* fix: normalize json_schema from string to dict in VariableEntity by @EvanYao826 in https://github.com/langgenius/dify/pull/36777
* refactor(web): migrate chat sidebar collapse storage by @popsiclelmlm in https://github.com/langgenius/dify/pull/36963
* chore: add missing @override decorato to `api/extensions` by @eryue0220 in https://github.com/langgenius/dify/pull/36941
* chore: add :str to <path: parameter by @asukaminato0721 in https://github.com/langgenius/dify/pull/36913
* fix: create app from template modal has no backdrop by @iamjoel in https://github.com/langgenius/dify/pull/36987
* fix: configure server console api url by @lyzno1 in https://github.com/langgenius/dify/pull/36958
* refactor(web): migrate account education notice storage by @myshkin451 in https://github.com/langgenius/dify/pull/36991
* fix(api): tighten agent v2 generated contracts by @lyzno1 in https://github.com/langgenius/dify/pull/36989
* refactor: use explicit session in inner api user auth by @WUMIKE233 in https://github.com/langgenius/dify/pull/36995
* fix: pydantic_core._pydantic_core.ValidationError: 2 validation errors for DatasetDetailResponse by @leslie2046 in https://github.com/langgenius/dify/pull/36753
* feat: add Milvus TLS env examples by @laipz8200 in https://github.com/langgenius/dify/pull/36980
* fix(api): enforce workspace membership + role checks in auth pipeline by @GareArc in https://github.com/langgenius/dify/pull/36931
* chore: update Claude skill links by @lyzno1 in https://github.com/langgenius/dify/pull/36997
* refactor(api): migrate tenant/user via DI for several endpoints by @cqjjjzr in https://github.com/langgenius/dify/pull/37004
* fix(web): auth form state management by @lyzno1 in https://github.com/langgenius/dify/pull/37003
* chore: add missing @override decorator to api/configs by @siyux1927 in https://github.com/langgenius/dify/pull/37006
* chore(deps): bump pyjwt to 2.13.0 by @wylswz in https://github.com/langgenius/dify/pull/37008
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37011
* chore: add missing @override decorators to `api/libs` by @eryue0220 in https://github.com/langgenius/dify/pull/37012
* chore: add missing @override decorator to api/core/rag/extractor by @siyux1927 in https://github.com/langgenius/dify/pull/37013
* refactor(api): migrate console.datasets.rag_pipeline partially to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36649
* refactor(api): migrate console.datasets.data_source to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36624
* feat(agent): Sandbox / CLI Agent (dify.shell) + read-only sandbox file inspector by @zyssyz123 in https://github.com/langgenius/dify/pull/36984
* feat(api): introduce select, file and file list form input types to Human Input node by @QuantumGhost in https://github.com/langgenius/dify/pull/36322
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37035
* fix(agent): complete CLI-tool + env shell bootstrap & add composer validation (ENG-367/368) by @zyssyz123 in https://github.com/langgenius/dify/pull/37033
* refactor(api): migrate tenant/user via DI for several endpoints by @cqjjjzr in https://github.com/langgenius/dify/pull/37026
* fix: agent tool selector marketplace checks for local and builtin tools by @leslie2046 in https://github.com/langgenius/dify/pull/37037
* feat(cli): unified help system by @lin-snow in https://github.com/langgenius/dify/pull/36896
* fix(api): return agent timestamps as epoch seconds by @lyzno1 in https://github.com/langgenius/dify/pull/37057
* feat: support custom trace session id for Phoenix tracing by @Blackoutta in https://github.com/langgenius/dify/pull/37056
* feat: enhance go to anything by @crazywoola in https://github.com/langgenius/dify/pull/32130
* fix(ui): align form control focus rings by @lyzno1 in https://github.com/langgenius/dify/pull/37069
* feat: improve output node by @hjlarry in https://github.com/langgenius/dify/pull/35511
* fix(api): expose device-flow approve rate limit as env var by @GareArc in https://github.com/langgenius/dify/pull/37083
* fix(explore): render human input preview handles by @lyzno1 in https://github.com/langgenius/dify/pull/37086
* fix(web): attach Amplitude user ID before firing registration event by @CodingOnStar in https://github.com/langgenius/dify/pull/37091
* fix(web): stabilize block selector layout by @lyzno1 in https://github.com/langgenius/dify/pull/37089
* fix: avoid duplicating lines when merging text for summarization by @bymle in https://github.com/langgenius/dify/pull/37093
* fix(workflow): prevent inspect trigger text wrapping by @lyzno1 in https://github.com/langgenius/dify/pull/37099
* feat: update frontend code review skill by @lyzno1 in https://github.com/langgenius/dify/pull/37098
* fix(difyctl): improve auth login host prompt UX by @GareArc in https://github.com/langgenius/dify/pull/37054
* refactor(web): align search input with dify ui by @lyzno1 in https://github.com/langgenius/dify/pull/37101
* feat(web): add Forward-user-identity toggle to MCP provider modal by @CourTeous33 in https://github.com/langgenius/dify/pull/36840
* fix(web): style issue of add input field panel in human input form co… by @JzoNgKVO in https://github.com/langgenius/dify/pull/37102
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37105
* feat: snippet by @FFXN in https://github.com/langgenius/dify/pull/37046
* chore: update frontend code owners by @lyzno1 in https://github.com/langgenius/dify/pull/37109
* refactor(api): migrate tenant/user via DI for several endpoints by @cqjjjzr in https://github.com/langgenius/dify/pull/37114
* refactor(web): mark Props of datasets/hit-testing components as read-only by @archievi in https://github.com/langgenius/dify/pull/37118
* chore(api): Fix several typing errors by @cqjjjzr in https://github.com/langgenius/dify/pull/37119
* refactor(api): remove redundant typing.cast calls by @EvanYao826 in https://github.com/langgenius/dify/pull/37124
* fix(api): normalize empty workflow tool file lists by @PopperLi in https://github.com/langgenius/dify/pull/37125
* chore: add missing @override decorators to `api/repositories` by @eryue0220 in https://github.com/langgenius/dify/pull/37138
* refactor(web): mark Props of explore/try-app/preview components as read-only (#25219) by @archievi in https://github.com/langgenius/dify/pull/37135
* fix: remove unnecessary # type: ignore comments (#24494) by @EvanYao826 in https://github.com/langgenius/dify/pull/37139
* feat(cli): difyctl release pipeline + tokenless installers by @GareArc in https://github.com/langgenius/dify/pull/37036
* feat(api): support embedded Excel images in knowledge import by @leslie2046 in https://github.com/langgenius/dify/pull/37104
* style(dify-ui): align focus rings by @lyzno1 in https://github.com/langgenius/dify/pull/37144
* fix(web): align viewport and overlay accessibility by @lyzno1 in https://github.com/langgenius/dify/pull/37142
* feat(web): gate /create and /refine slash commands behind feature preview flag by @crazywoola in https://github.com/langgenius/dify/pull/37094
* feat(api): add MCP user-identity forwarding by @CourTeous33 in https://github.com/langgenius/dify/pull/36839
* chore: update npm deps by @lyzno1 in https://github.com/langgenius/dify/pull/37156
* ci: add flag for linter by @asukaminato0721 in https://github.com/langgenius/dify/pull/37018
* fix(web): z-index issue of variable picker in prompt editor by @JzoNgKVO in https://github.com/langgenius/dify/pull/37163
* refactor(web): mark Props of base/ components as read-only (#25219) by @EvanYao826 in https://github.com/langgenius/dify/pull/37161
* chore(web): sync i18n by @lyzno1 in https://github.com/langgenius/dify/pull/37169
* feat(web): support search input autofocus by @lyzno1 in https://github.com/langgenius/dify/pull/37175
* feat(cli): adopt generated oRPC contract for unary endpoints by @lin-snow in https://github.com/langgenius/dify/pull/37090
* chore(api): convert MessagesCleanPolicy from ABC to Protocol by @caoergou in https://github.com/langgenius/dify/pull/37171
* chore(api): convert RecommendAppRetrievalBase and WorkflowPauseEntity from ABC to Protocol by @caoergou in https://github.com/langgenius/dify/pull/37182
* refactor(web): migrate code generator model storage by @popsiclelmlm in https://github.com/langgenius/dify/pull/37195
* fix(ui): align scroll area focus styles by @lyzno1 in https://github.com/langgenius/dify/pull/37204
* chore(api): convert BaseTruncator from ABC to Protocol by @caoergou in https://github.com/langgenius/dify/pull/37199
* chore(api): convert BaseQueueDispatcher from ABC to Protocol by @caoergou in https://github.com/langgenius/dify/pull/37200
* chore(api): convert PipelineTemplateRetrievalBase from ABC to Protocol by @caoergou in https://github.com/langgenius/dify/pull/37201
* docs: merge frontend agent guidance by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37121
* chore(api): convert AppContext from ABC to Protocol by @caoergou in https://github.com/langgenius/dify/pull/37203
* feat(agent): Agent Files / agent Cloud storage — api backend (ENG-589) by @zyssyz123 in https://github.com/langgenius/dify/pull/37172
* fix(agent-v2): complete console API contract schemas by @lyzno1 in https://github.com/langgenius/dify/pull/37210
* chore: DI current_user && use inspect by @asukaminato0721 in https://github.com/langgenius/dify/pull/37084
* chore: filter unavailable apps from the installed apps list API by @hjlarry in https://github.com/langgenius/dify/pull/37206
* fix(dataset): include segment created_at in hit testing response by @wylswz in https://github.com/langgenius/dify/pull/37181
* chore(deps): bump the storage group across 1 directory with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/37153
* chore(deps): bump starlette from 1.0.0 to 1.0.1 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/37077
* chore(deps): bump starlette from 1.0.0 to 1.0.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/37076
* feat(api,cli): strict UUID validation for app-id and workspace-id by @GareArc in https://github.com/langgenius/dify/pull/37212
* test(cli-e2e): full E2E test suite for difyctl — auth / run / discovery / framework / output / error-handling / agent by @gigglewang0417 in https://github.com/langgenius/dify/pull/36874
* chore(api): Suppress unknown contract checks by default by @cqjjjzr in https://github.com/langgenius/dify/pull/36969
* refactor(web): mark Props of workflow/variable-inspect components as read-only (#25219) by @EvanYao826 in https://github.com/langgenius/dify/pull/37230
* chore: [Refactor/Chore] if isinstance to match case #35902 by @asukaminato0721 in https://github.com/langgenius/dify/pull/37087
* fix: run ci properly on pr by @wylswz in https://github.com/langgenius/dify/pull/37233
* feat(dify-ui): file tree by @lyzno1 in https://github.com/langgenius/dify/pull/37235
* fix: agent mode missing file cards for BINARY_LINK and FILE type tool outputs by @cheatofrom in https://github.com/langgenius/dify/pull/36746
* test: migrate credit pool service tests to Testcontainers by @escape0707 in https://github.com/langgenius/dify/pull/37252
* refactor(web): mark Props of tools/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37255
* refactor(web): mark Props of billing/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37249
* refactor(openapi): unify request validation behind @accepts/@returns decorators by @lin-snow in https://github.com/langgenius/dify/pull/37216
* feat(dify-agent): sync shell and back proxy updates by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37159
* refactor(web): mark Props of tools/mcp components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37251
* refactor(api): migrate tenant/user via DI for several endpoints by @cqjjjzr in https://github.com/langgenius/dify/pull/37240
* fix(web): unify workflow node single-run actions by @lyzno1 in https://github.com/langgenius/dify/pull/37262
* refactor(web): replace useContext with use() in remaining components (#25193) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37254
* refactor(web): replace useContext with use() in workflow components (#25193) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37253
* refactor(web): replace useContext with use() (React 19) (Issue #25193) by @guangyang1206 in https://github.com/langgenius/dify/pull/36338
* feat: enter the app name that need to be deleted by one click by @HanqingZ in https://github.com/langgenius/dify/pull/37263
* fix: validate conversation variable description length to prevent varchar(255) truncation error by @Nov1c444 in https://github.com/langgenius/dify/pull/33038
* fix(plugin): align plugin list endpoint counts with live endpoint state by @leslie2046 in https://github.com/langgenius/dify/pull/37179
* fix(api): require all selected tags in list filters by @hjlarry in https://github.com/langgenius/dify/pull/37272
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37269
* feat: add dify-ui collapsible primitive and refactor workflow collapse usage by @lyzno1 in https://github.com/langgenius/dify/pull/37276
* fix(e2e): replace non-UUID workspace IDs in auth/use.e2e.ts and global-flags.e2e.ts by @gigglewang0417 in https://github.com/langgenius/dify/pull/37266
* feat: support import / export dsl in CLI by @wylswz in https://github.com/langgenius/dify/pull/37232
* fix: block frozen deleted accounts during invite activation by @hjlarry in https://github.com/langgenius/dify/pull/37281
* feat: agent slash menu backend by @zyssyz123 in https://github.com/langgenius/dify/pull/37268
* refactor(web): compose tab header with dify-ui tabs by @lyzno1 in https://github.com/langgenius/dify/pull/37280
* refactor(web): mark Props of header/account-setting components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37293
* refactor(web): mark Props of misc components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37294
* refactor(web): mark Props of explore/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37290
* refactor(web): mark Props of (commonLayout) components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37291
* refactor(web): mark Props of share/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37292
* refactor(web): mark Props of datasets/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37300
* refactor(web): mark Props of app/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37301
* refactor(web): mark Props of base/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37302
* refactor(web): mark Props of plugins/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37303
* refactor(web): mark Props of workflow/ components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37304
* refactor(web): mark Props of app/annotation components as read-only (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37299
* refactor: use foxact package for copied hooks by @hyoban in https://github.com/langgenius/dify/pull/37308
* refactor(api): migrate remaining console APIs to use injected user/tenant by @cqjjjzr in https://github.com/langgenius/dify/pull/37288
* feat: trace document retrieval by @wylswz in https://github.com/langgenius/dify/pull/37283
* feat(dify-agent): sync ask-human updates by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37286
* fix(web): show plugin auth permission hint by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37310
* fix(api): handle agent deferred tool events by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37319
* fix(web): typo of creator filter by @JzoNgKVO in https://github.com/langgenius/dify/pull/37321
* fix(web): correct icon of tag by @JzoNgKVO in https://github.com/langgenius/dify/pull/37326
* perf(api): reduce workflow startup latency for chatflow by @leslie2046 in https://github.com/langgenius/dify/pull/36773
* feat(agent): support cli tool scoped env by @zyssyz123 in https://github.com/langgenius/dify/pull/37324
* chore(api): Upgrade graphon to v0.5.1 by @QuantumGhost in https://github.com/langgenius/dify/pull/37168
* test: remove dead helper causing invalid tool provider constructor args by @siewcapital in https://github.com/langgenius/dify/pull/33124
* chore: add integration tests for openapi group by @wylswz in https://github.com/langgenius/dify/pull/37314
* feat: unified ErrorBody contract for /openapi/v1 and difyctl by @GareArc in https://github.com/langgenius/dify/pull/37285
* refactor(web): use React use for context helper by @popsiclelmlm in https://github.com/langgenius/dify/pull/37289
* refactor: convert remaining isinstance chains to match/case (part 9) (#35902) by @EvanYao826 in https://github.com/langgenius/dify/pull/37340
* chore(api): Fix several typing errors by @cqjjjzr in https://github.com/langgenius/dify/pull/37237
* fix(web): correct MCP forward-identity header copy; guard toggle hydration by @CourTeous33 in https://github.com/langgenius/dify/pull/37176
* feat: agent slash menu backend by @zyssyz123 in https://github.com/langgenius/dify/pull/37331
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37351
* chore: add eslint rules for a11y by @lyzno1 in https://github.com/langgenius/dify/pull/37353
* feat: harden /create and /refine workflow generation for edge cases by @crazywoola in https://github.com/langgenius/dify/pull/37336
* refactor(agent): replace workspace inspector with sandbox API by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37349
* refactor(cli): auth/workspace cleanup — record-backed token store by @GareArc in https://github.com/langgenius/dify/pull/37219
* fix: handle GraphRunAbortedEvent in TriggerPostLayer by @linw1995 in https://github.com/langgenius/dify/pull/37350
* fix(web): preserve form state during config refetch by @JzoNgKVO in https://github.com/langgenius/dify/pull/37357
* refactor: agent draft by @zyssyz123 in https://github.com/langgenius/dify/pull/37356
* chore(api): clean redundant type ignores (Fixes #24494) by @gmrnlg1971 in https://github.com/langgenius/dify/pull/37358
* feat(workflow): update start node UI by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37348
* chore(web): support separate public API target for dev proxy by @JzoNgKVO in https://github.com/langgenius/dify/pull/37363
* feat: 429 rate-limit handling on the unified ErrorBody contract (openapi + difyctl) by @lin-snow in https://github.com/langgenius/dify/pull/37313
* feat(api): forward user_type for MCP identity forwarding (webapp end-users) by @CourTeous33 in https://github.com/langgenius/dify/pull/37347
* chore(codeowners): update CLI ownership by @laipz8200 in https://github.com/langgenius/dify/pull/37375
* chore: update to openapi v3 by change dep by @asukaminato0721 in https://github.com/langgenius/dify/pull/37316
* docs(dify-ui): document scroll area content width by @lyzno1 in https://github.com/langgenius/dify/pull/37376
* fix(ui): align infotip popover focus styles by @lyzno1 in https://github.com/langgenius/dify/pull/37377
* fix(agent-v2): filter workflow invite options by @lyzno1 in https://github.com/langgenius/dify/pull/37368
* fix(web): tighten start block preview card spacing by @lyzno1 in https://github.com/langgenius/dify/pull/37379
* fix: GET query parameter OpenAPI contracts by @hyoban in https://github.com/langgenius/dify/pull/37378
* fix: align toast stack with Base UI by @lyzno1 in https://github.com/langgenius/dify/pull/37382
* fix(ui): keep loading buttons focusable by @lyzno1 in https://github.com/langgenius/dify/pull/37383
* chore(api): Fix several typing errors by @cqjjjzr in https://github.com/langgenius/dify/pull/37248
* refactor: fix OpenAPI contract generation schemas by @hyoban in https://github.com/langgenius/dify/pull/37387
* fix(dify-ui): restore pagination jump focus by @lyzno1 in https://github.com/langgenius/dify/pull/37393
* test: migrate recommended app service tests by @escape0707 in https://github.com/langgenius/dify/pull/37398
* feat(agent): Skills & Files effective chain — drive runtime exposure, inspector, lifecycle, infer-tools by @zyssyz123 in https://github.com/langgenius/dify/pull/37370
* fix: render marketplace template icons with AppIcon by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37401
* refactor: replace if isinstance with match case by @gmrnlg1971 in https://github.com/langgenius/dify/pull/37412
* refactor: type remaining bare dict annotations by @yzhkali in https://github.com/langgenius/dify/pull/37422
* refactor(api): remove unnecessary type: ignore in summary_index_service (#24494) by @manan-tech in https://github.com/langgenius/dify/pull/37423
* refactor: normalize search input and dify-ui focus states by @lyzno1 in https://github.com/langgenius/dify/pull/37413
* docs: add drawer stories by @lyzno1 in https://github.com/langgenius/dify/pull/37409
* fix: remove pagination current transition by @lyzno1 in https://github.com/langgenius/dify/pull/37404
* refactor: accept db.session explicitly in RecommendedAppService by @nexiouscaliver in https://github.com/langgenius/dify/pull/37417
* refactor: TagService to accept db.session explicitly by @cn7shi in https://github.com/langgenius/dify/pull/37416
* fix: change store apis to async by @wylswz in https://github.com/langgenius/dify/pull/37329
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/37427
* fix: fix remove logo not work by @fatelei in https://github.com/langgenius/dify/pull/37435
* feat: rbac scaffold by @wylswz in https://github.com/langgenius/dify/pull/37443
* fix: align agent app backing roster API by @zyssyz123 in https://github.com/langgenius/dify/pull/37442
* fix(agent-v2): sync node job prompt from draft graph by @lyzno1 in https://github.com/langgenius/dify/pull/37441
* fix: fix store chinese as unicode, let search failed by @fatelei in https://github.com/langgenius/dify/pull/37446
* fix(api): fix incorrect docker build context by @QuantumGhost in https://github.com/langgenius/dify/pull/37438
* fix: keep segmented control focus ring inset by @lyzno1 in https://github.com/langgenius/dify/pull/37448
* fix: fix human input form logo replace by @fatelei in https://github.com/langgenius/dify/pull/37452
* fix: preserve inline image for chatflow messages by @wylswz in https://github.com/langgenius/dify/pull/37455
* feat(web): refine onboarding UI by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37433
* feat(cli): difyctl per-commit edge distribution via Cloudflare R2 by @GareArc in https://github.com/langgenius/dify/pull/37454
* feat: Unify Agent v2 console routes by @zyssyz123 in https://github.com/langgenius/dify/pull/37465
* test(dify-ui): add strict Storybook a11y checks by @lyzno1 in https://github.com/langgenius/dify/pull/37459
* fix: project agent node outputs into draft graph by @zyssyz123 in https://github.com/langgenius/dify/pull/37467
* chore: example to color the session by @asukaminato0721 in https://github.com/langgenius/dify/pull/37402
* fix(workflow): reset block selector tab on reopen by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37469
* chore: example use caplog in test by @asukaminato0721 in https://github.com/langgenius/dify/pull/37470
* test: use caplog for workspace permission logging by @popsiclelmlm in https://github.com/langgenius/dify/pull/37473
* fix(api): add bounded timeouts to Marketplace POST requests by @citizen204 in https://github.com/langgenius/dify/pull/37424
* feat(api): Agent ask_human HITL (phase-1) — workflow node + Agent v2 chat — ENG-635 by @zyssyz123 in https://github.com/langgenius/dify/pull/37437
* test: example of make db.session pass from parameter. #37403 by @asukaminato0721 in https://github.com/langgenius/dify/pull/37471
* refactor: replace isinstance chains with match-case (#24487) by @EvanYao826 in https://github.com/langgenius/dify/pull/37482
* refactor: remove unnecessary # type: ignore for yaml imports (#24494) by @EvanYao826 in https://github.com/langgenius/dify/pull/37481
* fix(workflow): refine tool picker copy by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37477
* fix: replace patch logger with caplog in test_remove_app_and_related_data_task (#37468) by @EvanYao826 in https://github.com/langgenius/dify/pull/37480
* fix(workflow): clamp file list upload limit by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37474
* fix(agent): support agent-id chat and inline draft bindings by @zyssyz123 in https://github.com/langgenius/dify/pull/37483
* fix(agent): include app display fields in published references by @zyssyz123 in https://github.com/langgenius/dify/pull/37485
* ci: add deploy-agent workflow triggered on deploy/agent branch by @MRZHUH in https://github.com/langgenius/dify/pull/37496
* fix(api): add bounded timeouts to Nacos remote settings HTTP requests by @manan-tech in https://github.com/langgenius/dify/pull/37444
* fix(api): Agent v2 chat ask_human — resume on timeout + skip input guards on resume by @zyssyz123 in https://github.com/langgenius/dify/pull/37492
* fix(watercrawl): bound result download timeout by @luochen211 in https://github.com/langgenius/dify/pull/37495
* fix(watercrawl): accept content type parameters by @luochen211 in https://github.com/langgenius/dify/pull/37500
* fix(watercrawl): handle non-json auth errors by @luochen211 in https://github.com/langgenius/dify/pull/37498
* fix(jina): handle non-json auth errors by @luochen211 in https://github.com/langgenius/dify/pull/37502
* test: use caplog for mail task logging by @popsiclelmlm in https://github.com/langgenius/dify/pull/37493
* fix(cli/e2e): remove LLM nodes from fixture DSLs and fix test assertions by @gigglewang0417 in https://github.com/langgenius/dify/pull/37463
* fix: issue by @zyssyz123 in https://github.com/langgenius/dify/pull/37508
* chore: audit deps by @hyoban in https://github.com/langgenius/dify/pull/37516
* fix(docker): remove duplicate inline styles env by @laipz8200 in https://github.com/langgenius/dify/pull/37510
* test(dify-ui): add Storybook interaction coverage by @lyzno1 in https://github.com/langgenius/dify/pull/37519
* feat: refine snippet layout by @JzoNgKVO in https://github.com/langgenius/dify/pull/37517
* fix: support Agent v2 plugin tool runtime params by @zyssyz123 in https://github.com/langgenius/dify/pull/37526
* test: replace logger patch with caplog in test_telemetry_log by @WaterDimension in https://github.com/langgenius/dify/pull/37533
* fix(agent): persist Agent App prompt message by @zyssyz123 in https://github.com/langgenius/dify/pull/37534
* fix(agent): align config detail and output contracts by @zyssyz123 in https://github.com/langgenius/dify/pull/37535
* fix: align app and knowledge detail shell styles by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37555
* test: replace logger patch with caplog in version and rag pipeline tests by @jithu2111 in https://github.com/langgenius/dify/pull/37554
* refactor: replace mock.patch logger with pytest caplog in tests by @EvanYao826 in https://github.com/langgenius/dify/pull/37560
* refactor: optimize free plan workflow run cleanup batching by @zhaohao1004 in https://github.com/langgenius/dify/pull/37227
* test: replace logger patch with caplog in remaining test files  by @jithu2111 in https://github.com/langgenius/dify/pull/37562
* feat: add agent roster observability APIs by @zyssyz123 in https://github.com/langgenius/dify/pull/37566
* fix(agent-v2): include workflow references in agent list by @lyzno1 in https://github.com/langgenius/dify/pull/37567
* fix(api): allow inline workflow agent soul saves by @zyssyz123 in https://github.com/langgenius/dify/pull/37563
* fix(api): hide agent apps from installed apps by @zyssyz123 in https://github.com/langgenius/dify/pull/37570
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37557
* chore: workflow restore sandbox upgrade by @hjlarry in https://github.com/langgenius/dify/pull/37568
* fix(agent): add agent app duplicate endpoint by @zyssyz123 in https://github.com/langgenius/dify/pull/37571
* fix(web): prevent workspace trigger focus ring clipping by @lyzno1 in https://github.com/langgenius/dify/pull/37576
* feat: app deploy by @hyoban in https://github.com/langgenius/dify/pull/35670
* feat(agent): wire knowledge base retrieval into runtime by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37577
* fix: toast long error message may caused not show all by @iamjoel in https://github.com/langgenius/dify/pull/37581
* fix(api): enforce document creation limits in pipeline generator by @linw1995 in https://github.com/langgenius/dify/pull/37586
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37587
* feat(agent): add Agent Stub drive commands by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37593
* fix: improve Service API OpenAPI contracts by @hyoban in https://github.com/langgenius/dify/pull/37592
* fix(agent): align roster observability logs contract by @zyssyz123 in https://github.com/langgenius/dify/pull/37578
* fix(agent): sync generated observability contracts by @zyssyz123 in https://github.com/langgenius/dify/pull/37597
* fix: add service api openapi descriptions by @hyoban in https://github.com/langgenius/dify/pull/37595
* feat(api): LLM polling support by @QuantumGhost in https://github.com/langgenius/dify/pull/37462
* chore: port isinstance to match case by @asukaminato0721 in https://github.com/langgenius/dify/pull/37271
* fix: stream Agent App backend deltas by @zyssyz123 in https://github.com/langgenius/dify/pull/37600
* fix: require Agent App role by @zyssyz123 in https://github.com/langgenius/dify/pull/37601
* fix: clean unnecessary | None type annotations (#35557) by @EvanYao826 in https://github.com/langgenius/dify/pull/36824
* chore: example of make db.session pass from parameter. by @asukaminato0721 in https://github.com/langgenius/dify/pull/37561
* test(cli/e2e): add ErrorBody contract tests for error.server structure by @gigglewang0417 in https://github.com/langgenius/dify/pull/37518
* feat(agent-v2): sync nightly updates to main by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37599
* ci: build and push dify-agent-backend image by @MRZHUH in https://github.com/langgenius/dify/pull/37606
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37611
* chore: improve invite member flow by @hjlarry in https://github.com/langgenius/dify/pull/37479
* fix(docker): harden default SSRF proxy egress by @laipz8200 in https://github.com/langgenius/dify/pull/36332
* refactor(web): centralize main nav route access by @lyzno1 in https://github.com/langgenius/dify/pull/37612
* test: use caplog for annotation service logging by @WaterDimension in https://github.com/langgenius/dify/pull/37618
* refactor(tests): replace mock_logger with caplog in service tests (#37468) by @EvanYao826 in https://github.com/langgenius/dify/pull/37617
* fix(agent): keep debugger session across soul saves by @zyssyz123 in https://github.com/langgenius/dify/pull/37620
* docs: enrich generated service API descriptions by @hyoban in https://github.com/langgenius/dify/pull/37615
* fix(agent): decouple roster from app quota by @zyssyz123 in https://github.com/langgenius/dify/pull/37625
* chore(deps): bump the github-actions-dependencies group across 1 directory with 13 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/37234
* fix(web): nav link focus ring style by @lyzno1 in https://github.com/langgenius/dify/pull/37633
* fix(agent): resolve roster file downloads versions and log filters by @zyssyz123 in https://github.com/langgenius/dify/pull/37626
* chore(agent-v2): sync nightly updates to main (2026-06-18) by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37610
* feat: RBAC by @WTW0313 in https://github.com/langgenius/dify/pull/37107
* chore: Caplog type by @asukaminato0721 in https://github.com/langgenius/dify/pull/37603
* chore: add more type in test by @asukaminato0721 in https://github.com/langgenius/dify/pull/37609
* refactor(api): type end user records with enum by @laipz8200 in https://github.com/langgenius/dify/pull/36945
* fix: use f-string for error messages in resume_workflow_execution by @EvanYao826 in https://github.com/langgenius/dify/pull/37666
* refactor(web): migrate shared localStorage to createLocalStorageState by @SukkaW in https://github.com/langgenius/dify/pull/37408
* chore: add Type to test by @asukaminato0721 in https://github.com/langgenius/dify/pull/37191
* chore: move one db.session by @asukaminato0721 in https://github.com/langgenius/dify/pull/37656
* test: migrate hit testing dump record tests by @escape0707 in https://github.com/langgenius/dify/pull/37672
* fix(agent): return conflict for duplicate agent names by @zyssyz123 in https://github.com/langgenius/dify/pull/37686
* refactor: accept db.session explicitly in SavedMessageService by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37682
* fix(watercrawl): bound client request timeouts by @luochen211 in https://github.com/langgenius/dify/pull/37515
* refactor: accept db.session explicitly in FeedbackService by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37694
* refactor: accept db.session explicitly in APIBasedExtensionService by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37693
* refactor: accept db.session explicitly in FileService.get_upload_files_by_ids by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37695
* refactor(test): replace logger mock with caplog in billing and vector service tests by @MeloMei in https://github.com/langgenius/dify/pull/37697
* refactor: replace patch logger with caplog in core/rag tests (#37468) by @WaterDimension in https://github.com/langgenius/dify/pull/37621
* fix: skip empty tool entries in legacy dataset config extraction by @he-yufeng in https://github.com/langgenius/dify/pull/37669
* feat(web): add app shell skip navigation by @lyzno1 in https://github.com/langgenius/dify/pull/37644
* chore(deps): bump base-ui to v1.6.0 by @lyzno1 in https://github.com/langgenius/dify/pull/37663
* fix(web): simplify completed drawer dismissal by @lyzno1 in https://github.com/langgenius/dify/pull/37664
* test(dify-ui): align select form story with field primitives by @lyzno1 in https://github.com/langgenius/dify/pull/37670
* fix: invalidate credential cache after OAuth refresh by @hjlarry in https://github.com/langgenius/dify/pull/37630
* chore: remove legacy CI configurations by @QuantumGhost in https://github.com/langgenius/dify/pull/37721
* fix: add bounded timeout to Jina credential validation requests by @EvanYao826 in https://github.com/langgenius/dify/pull/37637
* fix: add bounded timeout to Firecrawl credential validation by @EvanYao826 in https://github.com/langgenius/dify/pull/37638
* fix(watercrawl): don't disable request timeouts with timeout=None by @he-yufeng in https://github.com/langgenius/dify/pull/37685
* chore: clean some isinstance by @asukaminato0721 in https://github.com/langgenius/dify/pull/37602
* feat(cli): recover omitted and length-aware command suggestions by @lin-snow in https://github.com/langgenius/dify/pull/37624
* fix(cli): align difyctl help text with actual flags and error envelope by @lin-snow in https://github.com/langgenius/dify/pull/37728
* feat(web): hide snippets by @JzoNgKVO in https://github.com/langgenius/dify/pull/37729
* feat(agent): add skill inspect API by @zyssyz123 in https://github.com/langgenius/dify/pull/37726
* chore(deps): upgrade npm dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/37731
* fix: add legacy snippet permissions by @hjlarry in https://github.com/langgenius/dify/pull/37718
* refactor(tests): replace mock_logger with caplog in 5 service tests (#37468) by @EvanYao826 in https://github.com/langgenius/dify/pull/37715
* fix(cli): document HITL pause exit code as 0, not 2 by @GareArc in https://github.com/langgenius/dify/pull/37737
* fix(hitl): stop confusing 404 when resuming forms via CLI by @GareArc in https://github.com/langgenius/dify/pull/37556
* fix(agent): support restoring roster versions by @zyssyz123 in https://github.com/langgenius/dify/pull/37734
* fix(cli): align run app --conversation mode list with runtime gate by @GareArc in https://github.com/langgenius/dify/pull/37733
* fix: bound OperationService billing requests by @he-yufeng in https://github.com/langgenius/dify/pull/37425
* chore: remove duplicate code by @fatelei in https://github.com/langgenius/dify/pull/37724
* fix: add RBAC feature across various components by @WTW0313 in https://github.com/langgenius/dify/pull/37732
* fix(cli): apply --think filtering to workflow app outputs by @lin-snow in https://github.com/langgenius/dify/pull/37736
* fix(cli): make auth devices revoke --yes a real flag by @GareArc in https://github.com/langgenius/dify/pull/37740
* refactor(openapi/cli): split app usage-face from studio-app build-face by @GareArc in https://github.com/langgenius/dify/pull/37641
* fix: disable deployment DSL imports by @hyoban in https://github.com/langgenius/dify/pull/37745
* fix: prevent legacy stop from interrupting GraphEngine runs by @Blackoutta in https://github.com/langgenius/dify/pull/37129
* fix(agent): add stable debug conversation by @zyssyz123 in https://github.com/langgenius/dify/pull/37744
* fix: add the outlined button of notification by @hjlarry in https://github.com/langgenius/dify/pull/37741
* fix: Add tenant-level Redis lock for credit pool deduction by @linw1995 in https://github.com/langgenius/dify/pull/37753
* feat: guard openapi with rbac by @wylswz in https://github.com/langgenius/dify/pull/37752
* fix(agent): switch roster node to inline by @zyssyz123 in https://github.com/langgenius/dify/pull/37754
* fix(tests): enhance toast mock and add preview-only app warning test by @WTW0313 in https://github.com/langgenius/dify/pull/37749
* fix(web): derive publish shortcut display from hotkey by @lyzno1 in https://github.com/langgenius/dify/pull/37758
* fix: replace mock_logger with caplog in tests by @EvanYao826 in https://github.com/langgenius/dify/pull/37757
* refactor(web): manage create release form with Jotai by @hyoban in https://github.com/langgenius/dify/pull/37762
* feat(agent): add roster service api access by @zyssyz123 in https://github.com/langgenius/dify/pull/37759
* chore: not use request.scoped session by @fatelei in https://github.com/langgenius/dify/pull/37421
* fix(web): restore contact us support menu by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37774
* fix: isolate agent debug conversations by account by @zyssyz123 in https://github.com/langgenius/dify/pull/37766
* refactor(web): consolidate create release state by @hyoban in https://github.com/langgenius/dify/pull/37765
* refactor: adapt docs links for product prefixes by @hyoban in https://github.com/langgenius/dify/pull/37565
* chore: add ENTERPRISE_RBAC_API_URL check and update permission key by @fatelei in https://github.com/langgenius/dify/pull/37777
* refactor: improve stream close 2 by @wylswz in https://github.com/langgenius/dify/pull/37106
* feat: add agent debug conversation refresh API by @zyssyz123 in https://github.com/langgenius/dify/pull/37784
* fix(app): derive get-app --mode whitelist from listable app types by @GareArc in https://github.com/langgenius/dify/pull/37761
* refactor: pass session into hit testing service by @myshkin451 in https://github.com/langgenius/dify/pull/37785
* fix: support agent duplicate role and skill file preview by @zyssyz123 in https://github.com/langgenius/dify/pull/37788
* feat(retention): add V2 workflow run archive bundlesa by @41tair in https://github.com/langgenius/dify/pull/37747
* refactor(web): consolidate deployment state atoms by @hyoban in https://github.com/langgenius/dify/pull/37783
* feat: support query catalog add billing enabled by @fatelei in https://github.com/langgenius/dify/pull/37791
* feat(agent-v2): sync nightly updates to main (2026-06-22) by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37651
* feat(cli): prepare for alpha release by @GareArc in https://github.com/langgenius/dify/pull/37794
* fix: snippet history detail includes input fields by @FFXN in https://github.com/langgenius/dify/pull/37797
* fix(web): polish main nav and deployment tooltip styles by @hyoban in https://github.com/langgenius/dify/pull/37800
* fix(agent): agent composer publish validation by @linw1995 in https://github.com/langgenius/dify/pull/37803
* fix: correct misleading password length validation message by @xiaweiwei67-stack in https://github.com/langgenius/dify/pull/37796
* chore: compatiable old role update by @fatelei in https://github.com/langgenius/dify/pull/37804
* fix(api): disable gunicorn control sock by @wylswz in https://github.com/langgenius/dify/pull/37806
* feat(chatflow): stream LLM reasoning to a live thinking panel by @lin-snow in https://github.com/langgenius/dify/pull/37460
* refactor(web): sync deployment route state from next route by @hyoban in https://github.com/langgenius/dify/pull/37811
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37802
* fix: fix logic by @fatelei in https://github.com/langgenius/dify/pull/37812
* fix(agent): inject env inline per-command instead of persisting workspace file by @linw1995 in https://github.com/langgenius/dify/pull/37815
* fix(web): stabilize deployment state hydration by @hyoban in https://github.com/langgenius/dify/pull/37818
* feat(agent): copy roster agent into workflow inline agent by @zyssyz123 in https://github.com/langgenius/dify/pull/37813
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37760
* refactor(web): manage deployment async state with atoms by @hyoban in https://github.com/langgenius/dify/pull/37819
* refactor(web): simplify deployment async ownership by @hyoban in https://github.com/langgenius/dify/pull/37823
* refactor: for db.session feedback service.export feedbacks by @Kunal152000 in https://github.com/langgenius/dify/pull/37763
* refactor(web): reuse infinite scroll hook in deployments by @hyoban in https://github.com/langgenius/dify/pull/37825
* refactor: accept db.session explicitly in ApiKeyAuthService by @Kunal152000 in https://github.com/langgenius/dify/pull/37832
* fix(agent): save workflow agents as console roster apps by @zyssyz123 in https://github.com/langgenius/dify/pull/37848
* fix: add RBAC feature toggle to environment configuration by @WTW0313 in https://github.com/langgenius/dify/pull/37853
* refactor(web): simplify deployment action state by @hyoban in https://github.com/langgenius/dify/pull/37851
* refactor: inject session into audio TTS by @myshkin451 in https://github.com/langgenius/dify/pull/37849
* fix(web): align marketplace i18n terminology by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37837
* fix: resolve DetachedInstanceError via session management refactoring by @gmrnlg1971 in https://github.com/langgenius/dify/pull/37847
* refactor: pass session as parameter in knowledge_retrieval_inner_service and agent_app_feature_service by @EvanYao826 in https://github.com/langgenius/dify/pull/37639
* fix(web): polish onboarding main nav and preferences tab by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37844
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37855
* chore: Update permission keys and descriptions for multiple languages to simplify application and dataset management phrases by @WTW0313 in https://github.com/langgenius/dify/pull/37859
* chore: rm all mock_logger by @asukaminato0721 in https://github.com/langgenius/dify/pull/37786
* chore(web): clean up unused production code by @hyoban in https://github.com/langgenius/dify/pull/37854
* chore: make AccountService.load_user use passed session by @asukaminato0721 in https://github.com/langgenius/dify/pull/37764
* fix(cli): make app-info cache resilient to corrupt entries + route errors through structured envelope (WTA-257) by @GareArc in https://github.com/langgenius/dify/pull/37852
* feat: surface separated-mode LLM reasoning in CLI and workflow run preview by @lin-snow in https://github.com/langgenius/dify/pull/37828
* chore(deps): bump dep versions for CVE fixes by @wylswz in https://github.com/langgenius/dify/pull/37861
* fix: add is_cloud_only for templates  by @hjlarry in https://github.com/langgenius/dify/pull/37846
* fix: align switch focus outline by @lyzno1 in https://github.com/langgenius/dify/pull/37870
* chore(web): remove unused frontend code by @hyoban in https://github.com/langgenius/dify/pull/37866
* fix: Lindorm vector store errors caused by the update of opensearch-py by @AlwaysBluer in https://github.com/langgenius/dify/pull/37862
* feat: filter dataset operator and add miss permission key by @fatelei in https://github.com/langgenius/dify/pull/37867
* fix: banner has ui problem in small screen by @iamjoel in https://github.com/langgenius/dify/pull/37879
* chore(knip): add mdx support clean unused code by @hyoban in https://github.com/langgenius/dify/pull/37882
* refactor(tests): use caplog in web login tests by @lin-hongkuan in https://github.com/langgenius/dify/pull/37889
* chore(web): prune unused i18n translations by @hyoban in https://github.com/langgenius/dify/pull/37888
* refactor: replace logger patches with pytest caplog in tests by @Oxygen56 in https://github.com/langgenius/dify/pull/37890
* fix: respect legacy plugin permissions without RBAC by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37903
* feat: delete member delete rbac binding by @fatelei in https://github.com/langgenius/dify/pull/37904
* fix: keep body background consistent on overscroll by @hyoban in https://github.com/langgenius/dify/pull/37909
* fix: eagerly validate conversation before generator to prevent hanging by @functionkiller in https://github.com/langgenius/dify/pull/37224
* chore: add type to test by @asukaminato0721 in https://github.com/langgenius/dify/pull/37876
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37891
* docs: add Dify Cloud support contact by @Jingyi-Dify in https://github.com/langgenius/dify/pull/37913
* fix: Fix frontend rbac issues by @WTW0313 in https://github.com/langgenius/dify/pull/37872
* build(deps): update Bleach sanitizer security fix by @gateway in https://github.com/langgenius/dify/pull/37860
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/37916
* fix: remove redundant snippets permissions by @FFXN in https://github.com/langgenius/dify/pull/37921
* fix: improve error handling for workflow execution by @QuantumGhost in https://github.com/langgenius/dify/pull/37919
* feat: enhance app permissions and access controls by @WTW0313 in https://github.com/langgenius/dify/pull/37933
* refactor(test): replace SimpleNamespace with real UploadFile model in test_dataset_models.py by @manan-tech in https://github.com/langgenius/dify/pull/37935
* feat: update monitor permission key  and plugin permission key by @fatelei in https://github.com/langgenius/dify/pull/37937
* refactor(tests): replace logger mocks with caplog (#37468) by @xiejl001 in https://github.com/langgenius/dify/pull/37922
* fix: polish tool provider selection and detail drawer by @lyzno1 in https://github.com/langgenius/dify/pull/37940
* fix(api): tongyi credential compatibility by @linw1995 in https://github.com/langgenius/dify/pull/37942
* feat: add hydration support and fallback for Countdown component by @WTW0313 in https://github.com/langgenius/dify/pull/37943
* chore: bump versions to 1.15.0 by @wylswz in https://github.com/langgenius/dify/pull/37929

## New Contributors
* @algojogacor made their first contribution in https://github.com/langgenius/dify/pull/36361
* @lord-Rheagar made their first contribution in https://github.com/langgenius/dify/pull/36478
* @liaoyl830 made their first contribution in https://github.com/langgenius/dify/pull/36534
* @Lillian68 made their first contribution in https://github.com/langgenius/dify/pull/36559
* @zhang-liz made their first contribution in https://github.com/langgenius/dify/pull/36565
* @Tianlel made their first contribution in https://github.com/langgenius/dify/pull/36628
* @zeus1959 made their first contribution in https://github.com/langgenius/dify/pull/36227
* @amr-sheriff made their first contribution in https://github.com/langgenius/dify/pull/36265
* @zhuiguangzhe2003 made their first contribution in https://github.com/langgenius/dify/pull/36716
* @NishchayMahor made their first contribution in https://github.com/langgenius/dify/pull/36755
* @aliyevaladddin made their first contribution in https://github.com/langgenius/dify/pull/36741
* @WOLIKIMCHENG made their first contribution in https://github.com/langgenius/dify/pull/36807
* @myshkin451 made their first contribution in https://github.com/langgenius/dify/pull/36798
* @krishkantiuj-ren made their first contribution in https://github.com/langgenius/dify/pull/36859
* @duongynhi000005-oss made their first contribution in https://github.com/langgenius/dify/pull/36845
* @ShuntaroOkuma made their first contribution in https://github.com/langgenius/dify/pull/36742
* @1795771535y-cell made their first contribution in https://github.com/langgenius/dify/pull/36871
* @bmtriet made their first contribution in https://github.com/langgenius/dify/pull/36873
* @meaqua9420 made their first contribution in https://github.com/langgenius/dify/pull/36857
* @cupkk made their first contribution in https://github.com/langgenius/dify/pull/36885
* @ForeignKeyCN made their first contribution in https://github.com/langgenius/dify/pull/35468
* @goingforstudying-ctrl made their first contribution in https://github.com/langgenius/dify/pull/36903
* @popsiclelmlm made their first contribution in https://github.com/langgenius/dify/pull/36922
* @likalikali made their first contribution in https://github.com/langgenius/dify/pull/36925
* @ZongrongLi made their first contribution in https://github.com/langgenius/dify/pull/36908
* @yzhkali made their first contribution in https://github.com/langgenius/dify/pull/36934
* @shifang0511 made their first contribution in https://github.com/langgenius/dify/pull/36977
* @eryue0220 made their first contribution in https://github.com/langgenius/dify/pull/36941
* @WUMIKE233 made their first contribution in https://github.com/langgenius/dify/pull/36995
* @siyux1927 made their first contribution in https://github.com/langgenius/dify/pull/37006
* @bymle made their first contribution in https://github.com/langgenius/dify/pull/37093
* @archievi made their first contribution in https://github.com/langgenius/dify/pull/37118
* @PopperLi made their first contribution in https://github.com/langgenius/dify/pull/37125
* @gigglewang0417 made their first contribution in https://github.com/langgenius/dify/pull/36874
* @cheatofrom made their first contribution in https://github.com/langgenius/dify/pull/36746
* @Rohit-Gahlawat made their first contribution in https://github.com/langgenius/dify/pull/37255
* @siewcapital made their first contribution in https://github.com/langgenius/dify/pull/33124
* @gmrnlg1971 made their first contribution in https://github.com/langgenius/dify/pull/37358
* @manan-tech made their first contribution in https://github.com/langgenius/dify/pull/37423
* @nexiouscaliver made their first contribution in https://github.com/langgenius/dify/pull/37417
* @cn7shi made their first contribution in https://github.com/langgenius/dify/pull/37416
* @citizen204 made their first contribution in https://github.com/langgenius/dify/pull/37424
* @MRZHUH made their first contribution in https://github.com/langgenius/dify/pull/37496
* @luochen211 made their first contribution in https://github.com/langgenius/dify/pull/37495
* @WaterDimension made their first contribution in https://github.com/langgenius/dify/pull/37533
* @jithu2111 made their first contribution in https://github.com/langgenius/dify/pull/37554
* @zhaohao1004 made their first contribution in https://github.com/langgenius/dify/pull/37227
* @SukkaW made their first contribution in https://github.com/langgenius/dify/pull/37408
* @MeloMei made their first contribution in https://github.com/langgenius/dify/pull/37697
* @he-yufeng made their first contribution in https://github.com/langgenius/dify/pull/37669
* @xiaweiwei67-stack made their first contribution in https://github.com/langgenius/dify/pull/37796
* @Kunal152000 made their first contribution in https://github.com/langgenius/dify/pull/37763
* @lin-hongkuan made their first contribution in https://github.com/langgenius/dify/pull/37889
* @Oxygen56 made their first contribution in https://github.com/langgenius/dify/pull/37890
* @functionkiller made their first contribution in https://github.com/langgenius/dify/pull/37224
* @gateway made their first contribution in https://github.com/langgenius/dify/pull/37860
* @xiejl001 made their first contribution in https://github.com/langgenius/dify/pull/37922

**Full Changelog**: https://github.com/langgenius/dify/compare/1.14.2...1.15.0

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.15.0` · 2026-06-25 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.15.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
