---
title: "dify 1.17.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.17.0"
version: "1.17.0"
published: "2026-08-25"
type: "minor"
lang: "en"
summary: "Agent: E2B Sandbox, Home Snapshots, and Skill Management"
---

# dify 1.17.0

## New Features

**Agent: E2B Sandbox, Home Snapshots, and Skill Management**
- **E2B sandbox backend**: agent shell/code execution can now run on [E2B](https://e2b.dev) cloud sandboxes in addition to the local sandbox. Select the backend with `DIFY_AGENT_RUNTIME_BACKEND`; a new `docker-compose.e2b.yaml` ships the E2B stack, E2B traffic is authenticated, and the E2B template is synced on release (#39480, #39705, #39873, #39996, #40858, #40871, #40891, #40892).
- **Build-time Home Snapshots**: when an agent build is applied (published), the agent's sandbox home directory — installed packages, prepared files, working state — is captured and subsequent runs of the published agent restore their home directory from that snapshot, so the agent starts from the exact filesystem state it had at build time. (#39702, #40876, #40996).
- **Workspace-level Skill management**: Skills are reusable, versioned capabilities packaged with code and tool definitions that agents can discover and invoke. A new workspace-level skills manager with draft → publish → version lifecycle ships alongside a web UI (skill listing, builder panel, file editor).  (#39675, #39798, #39799, #41180).
- **Context-aware history compaction**: long agent conversations no longer blow past the model's context window — Dify resolves each model's effective window and tiers compaction (clear old tool results first, then summarize older history) so runs stay within budget without losing recent context (#40872).

**Reusable LLM Environment Variables in Workflows**
- Define a shared provider/model/mode/parameter configuration once (e.g. `for_summarize`, `for_research`) and reference it from any LLM node. Coordinated model changes now happen in one place instead of drifting node-by-node, and the references survive DSL import/export, snippets, RAG pipelines, and collaborative editing (#39125).

**Human Input in Loops and Iterations**
- Human-in-the-loop forms now work *inside* Loop and Iteration nodes, pausing and resuming correctly across page refreshes for both debug and installed apps — enabling review/approval steps within repeated work (#39243).

**Provider-Neutral Unified Tracing**
- Opt-in unified tracing (`OPS_TRACE_UNIFIED_ENABLED`) assembles the full parent-child span tree (workflows, chatflows, messages, nodes, loops, iterations, nested workflows) once in core and delegates only transport to lightweight adapters. Phoenix and LangSmith adapters ship first; disabled by default and fully backward compatible (#39451).
- New GenAI spans surface LLM TTFT, agent ReAct steps, tool calls, and failed LLM nodes for deeper observability (#39339).

**Cloudflare Turnstile (CAPTCHA) Support**
- Optional Turnstile challenge on sign-in and email-code login to protect authentication endpoints from abuse, with configurable site/secret keys and allowed hostnames (#40494).

**Azure Key Vault / Pluggable KMS**
- Introduces a KMS provider abstraction with Azure Key Vault support for key provisioning, encryption, and decryption, plus key rotation configuration — a step toward externally-managed encryption keys (#39933).

**TiDB Vector Full-Text & Hybrid Search**
- TiDB Vector deployments can now enable full-text and hybrid retrieval (`TIDB_VECTOR_ENABLE_FULLTEXT_SEARCH`, default off), using a multilingual full-text index alongside vector search (#38112).

**Broader Model & File Handling**
- LLM nodes and agents can now pass image files directly to multimodal models, and non-vision attachments are no longer silently dropped from agent chats (#39848, #40179).
- New multimodal retrieval guidance helps users pick embedding models correctly for image-bearing knowledge bases (#40566).
- Audio ASR now accepts `audio/x-m4a`, and audio MIME types are validated more accurately (#40776, #41043).

**Go to Anything (⌘K / Ctrl+K)**
- Press ⌘K (Ctrl+K on Windows/Linux) anywhere in the console to open the command palette and jump to apps, agents, skills, knowledge bases, plugins, or workflow nodes, or trigger quick actions via slash commands. New in this release: agents and skills are searchable, and the icon-command system was refactored across all domains for consistency (#40620, #40621, #40646–#40649, #41160).

**Other Additions**
- ODT (OpenDocument Text) document extraction support (#39973).
- New `date` / `date-picker` parameter type for tool plugins (#36163).
- Lao (lo-LA) language support (#39474).
- Automatic cleanup task for old conversations (`ENABLE_CONVERSATION_CLEANUP_TASK`) to bound data growth (#40889-era).
- Marketplace embedded directly into integration categories for smoother tool/plugin discovery (#40744).

## Improvements

**Accessibility (large a11y pass)**
- A very large set of changes makes the console keyboard- and screen-reader-friendly: real `<button>` semantics for dozens of interactive controls, accessible names for icon-only actions (copy, close, delete, menus), primary headings on auth/install pages, keyboard-accessible member/tool selectors, and correct ARIA states (#40192–#40377 and many others).

**Workflow Authoring**
- The workflow generator now prefers already-installed and configured tools when suggesting nodes, so builders reach for the tools they actually have (#40611, #39850).

**Workflow & Runtime Stability**
- Reproducible web workflow runs, preserved canvas state after history updates, no more refresh render loops, and SSE streams now end cleanly on terminal events (#40010, #40489, #41105, #40042).
- `stop` is now honored between non-streaming nodes and paused workflows clear stale cancellation signals correctly (#41090, #40905, #40972).
- `APP_MAX_EXECUTION_TIME` and `WORKFLOW_MAX_EXECUTION_TIME` defaults raised from **1200s → 3600s** to accommodate longer-running workflows.

**Internal Quality**
- Large migration of unit tests to real ORM models / SQLite sessions for more reliable coverage, plus stronger typing across migrated tests (many #38xxx–#39xxx). No user-facing behavior change.

## Security Enhancements
- **Authentication hardening**: Turnstile challenge on login/email-code flows, hardened email-code verification with attempt limits and token expiry (`EMAIL_CODE_LOGIN_MAX_ATTEMPTS`, `EMAIL_CODE_LOGIN_TOKEN_EXPIRY_MINUTES`), suspended-email-domain handling, and short-lived agent authorization tokens (#40494, #40960, #41004, #40884).
- **Access-control / ownership scoping**: dataset, document, RAG, conversation, workspace-credential, and OAuth-client resources are now consistently bound to their owners and app scope, closing several unauthorized-access paths (#40989, #40888, #40790, #40745, #40893, #40786, and related).
- **SSRF & outbound hardening**: outbound HTTP connect phases are bounded (5s), agent/binding download and run timeouts are configurable, and the SSRF-blocked error message now points to the correct issue (#40807, #41027, #40605).

## Bug Fixes (selected)
- Prevent dropped `workflow_started` events in Redis Streams and dropped/duplicated runs from superseded executions (#40964, #40699).
- Normalize workflow timestamps to naive UTC and preserve run snapshots/history for failed, cancelled, and interrupted runs (#40947, #40876, #40972).
- Prevent cross-tab chat conversation switching and stop dropping non-vision attachments in agent chat (#40709, #40179).
- Correct Qwen/VL system-message ordering by merging system messages first (#39136).
- Fix Elasticsearch-JA adapter `document_id` mapping and `VectorType` (#40400); avoid empty Bedrock schema fields (#40443).
- Use dynamic DNS resolution for all nginx upstreams (#39155); preserve UTF-8 byte size for text uploads (#40034).
- Numerous webapp/UI fixes: restore email-code and password form submissions, mobile sign-in overflow, toast stacking, model selector spacing (#40227, #40222, #40921, #40970, #8d612895).

---

## Environment Variable Changes

### Added
**Agent runtime / sandbox** (`docker/envs/core-services/dify-agent.env.example`)
- `DIFY_AGENT_RUNTIME_BACKEND`, `DIFY_AGENT_RUN_TIMEOUT_SECONDS`, `DIFY_AGENT_SANDBOX_FILES_BASE_URL`, `DIFY_AGENT_STUB_UPLOAD_FILE_SIZE_LIMIT`, `DIFY_AGENT_BINDING_FILE_DOWNLOAD_COMMAND_TIMEOUT_SECONDS`
- E2B: `DIFY_AGENT_E2B_API_KEY`, `DIFY_AGENT_E2B_TEMPLATE`, `DIFY_AGENT_E2B_SHELLCTL_PORT`, `DIFY_AGENT_E2B_ACTIVE_TIMEOUT_SECONDS`
- Local sandbox: `DIFY_AGENT_LOCAL_SANDBOX_ENDPOINT`, `DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN`
- Outbound HTTP tuning: `DIFY_AGENT_OUTBOUND_HTTP_CONNECT_TIMEOUT`, `DIFY_AGENT_OUTBOUND_HTTP_READ_TIMEOUT`, `DIFY_AGENT_OUTBOUND_HTTP_WRITE_TIMEOUT`, `DIFY_AGENT_OUTBOUND_HTTP_POOL_TIMEOUT`, `DIFY_AGENT_OUTBOUND_HTTP_KEEPALIVE_EXPIRY`, `DIFY_AGENT_OUTBOUND_HTTP_MAX_CONNECTIONS`, `DIFY_AGENT_OUTBOUND_HTTP_MAX_KEEPALIVE_CONNECTIONS`
- `AGENT_BACKEND_BINDING_FILE_DOWNLOAD_TIMEOUT_SECONDS`, `AGENT_BACKEND_HOME_SNAPSHOT_TIMEOUT_SECONDS` (`api/.env.example`)

**Auth / security**
- `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `TURNSTILE_ALLOWED_HOSTNAMES`, `TURNSTILE_EMAIL_CODE_VERIFY_REQUIRED`
- `EMAIL_CODE_LOGIN_MAX_ATTEMPTS`, `EMAIL_CODE_LOGIN_TOKEN_EXPIRY_MINUTES`
- `KEY_PROVIDER_TYPE`, `AZURE_KEYVAULT_VAULT_URL`, `AZURE_KEYVAULT_KEY_SIZE`, `AZURE_KEYVAULT_ROTATION_INTERVAL_DAYS`

**Knowledge / retrieval**
- `TIDB_VECTOR_ENABLE_FULLTEXT_SEARCH`, `TIDB_ON_QDRANT_ESTIMATED_STORAGE_LIMITS_MB`, `KNOWLEDGE_UPLOAD_FILE_SIZE_LIMIT_FOR_PAID_PLAN`

**Tracing / observability**
- `OPS_TRACE_UNIFIED_ENABLED`, `OPS_TRACE_PARENT_CONTEXT_TTL_SECONDS`

**Misc**
- `ENABLE_CONVERSATION_CLEANUP_TASK`, `CONVERSATION_CLEANUP_TASK_INTERVAL`, `CONVERSATION_CLEANUP_BATCH_SIZE`
- `UPLOAD_SKILL_FILE_SIZE_LIMIT`, `PLUGIN_MAX_FILE_SIZE`, `MARKDOWN_FORM_FIELD_NAME_EXTRA_CHARS`
- `DEPLOYMENT_EDITION` (replaces `EDITION`, see below)

### Removed
- `EDITION` → renamed to `DEPLOYMENT_EDITION`
- `ENTERPRISE_ENABLED` (enterprise gating consolidated)
- `AGENT_BACKEND_RUN_TIMEOUT_SECONDS` → replaced by `DIFY_AGENT_RUN_TIMEOUT_SECONDS`
- `DIFY_AGENT_SHELLCTL_AUTH_TOKEN`, `DIFY_AGENT_SHELLCTL_ENTRYPOINT` (agent runtime reworked)

### Modified (default values)
- `APP_MAX_EXECUTION_TIME`: `1200` → `3600`
- `WORKFLOW_MAX_EXECUTION_TIME`: `1200` → `3600`
- `OPS_TRACE_RETRYABLE_DISPATCH_MAX_RETRIES`: `60` → `780`
- `GRAPH_ENGINE_SCALE_UP_THRESHOLD`: `3` → `0`

### Docker Compose
- `docker/docker-compose.yaml` — modified
- `docker/docker-compose.middleware.yaml` — modified
- `docker/docker-compose.e2b.yaml` — **new** (E2B agent sandbox stack)

---

## Database Migrations

This release includes new migrations (community-edition relevant):
- `add_workflow_version_number` — workflow version numbering (deployment v2)
- `add_oauth_provider_app_auto_authorize` — silent OAuth authorization flag
- `add_conversation_cleanup_index` — supports the conversation cleanup task
- `add_workspace_skill_management` — workspace-level Skill management (draft/version/publish lifecycle)
- `add_agent_home_snapshot_ledger`, `make_home_snapshot_references_nullable` — agent build-time Home Snapshot ledger and nullable snapshot references
- `replace_agent_runtime_sessions_with_*`, `remove_agent_drive`, `clean_legacy_agent_soul_files`, `simplify_agent_v2_output_contract` — new agent runtime

No manual backfill command is required for these migrations. Run `flask db upgrade` as part of the upgrade.

---

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
> - This release includes **new database migrations** — run them as part of the upgrade.
> - Environment variables changed substantially (many added, edition variable **renamed** `EDITION` → `DEPLOYMENT_EDITION`, several defaults changed). Review the Environment Variable Changes section and update your `.env` accordingly. In particular, **rename `EDITION` to `DEPLOYMENT_EDITION`** if you set it.
> - Docker Compose configuration changed and a new `docker-compose.e2b.yaml` was added. If you maintain a customized `docker-compose.yaml`, re-apply local customizations carefully.
> - The migration `add_conversation_cleanup_index` builds index on existing data, which could take longer to execute if the `conversations` table is big.


### Docker Compose Deployments
1. Back up your customized compose and env files:
   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```
2. Get the latest code:
   ```bash
   git fetch --tags
   git checkout main   # or the target release tag once cut
   ```
3. Stop services (from the `docker` directory):
   ```bash
   docker compose down
   ```
4. Back up data:
   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```
5. Review env changes and re-apply local customizations (remember `EDITION` → `DEPLOYMENT_EDITION`).
6. Upgrade:
   ```bash
   docker compose up -d
   ```

### Source Code Deployments
1. Stop the API server, Worker, and Web frontend.
2. Get the latest code:
   ```bash
   git fetch --tags
   git checkout main   # or the target release tag once cut
   ```
3. Update Python dependencies:
   ```bash
   cd api
   uv sync
   ```
4. Run migrations:
   ```bash
   uv run flask db upgrade
   ```
5. Rebuild/restart the Web frontend, then restart the API server and Worker.


## What's Changed
* test: use SQLite sessions in services plugin by @asukaminato0721 in https://github.com/langgenius/dify/pull/39084
* test: separate human input unit and database paths by @escape0707 in https://github.com/langgenius/dify/pull/39655
* test: use SQLite sessions in services core by @asukaminato0721 in https://github.com/langgenius/dify/pull/39088
* test: use SQLite sessions in controllers service api by @asukaminato0721 in https://github.com/langgenius/dify/pull/39098
* test: use SQLite sessions in services core by @asukaminato0721 in https://github.com/langgenius/dify/pull/39090
* test: move message cleanup coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38932
* test: use sqlite3 session in test_plugin_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38727
* test: use sqlite3 session in test_wraps by @asukaminato0721 in https://github.com/langgenius/dify/pull/38770
* test: use SQLite sessions in commands by @asukaminato0721 in https://github.com/langgenius/dify/pull/39080
* test: move data source controller coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38924
* fix: prevent Safari from clipping the settings close button by @iamjoel in https://github.com/langgenius/dify/pull/39664
* fix: prevent the model selector footer from covering options by @iamjoel in https://github.com/langgenius/dify/pull/39668
* test: move OAuth server service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38931
* fix: validate plugin installation scope by @lyzno1 in https://github.com/langgenius/dify/pull/39669
* chore: improve archived logs hint in logs list page by @hjlarry in https://github.com/langgenius/dify/pull/39659
* test: use SQLite sessions in core app by @asukaminato0721 in https://github.com/langgenius/dify/pull/39099
* test: use SQLite sessions in core datasource by @asukaminato0721 in https://github.com/langgenius/dify/pull/39104
* test: use SQLite in LangSmith traces by @asukaminato0721 in https://github.com/langgenius/dify/pull/38986
* test: move workflow app service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38946
* chore(docker): remove redundant feature preview env by @laipz8200 in https://github.com/langgenius/dify/pull/39035
* test: use SQLite in Aliyun trace utilities by @asukaminato0721 in https://github.com/langgenius/dify/pull/38983
* test: use SQLite sessions in services retention by @asukaminato0721 in https://github.com/langgenius/dify/pull/39074
* test: use SQLite sessions in core rag by @asukaminato0721 in https://github.com/langgenius/dify/pull/39105
* fix: reject trailing newlines in alphanumeric() validator (#39666) by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/39667
* test: use SQLite sessions in core app apps by @asukaminato0721 in https://github.com/langgenius/dify/pull/39103
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/39671
* test: use sqlite3 session in test_agent_app_feature_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38724
* test: use sqlite3 session in test_web_login by @asukaminato0721 in https://github.com/langgenius/dify/pull/38725
* fix: improve unconfigured agent guidance by @iamjoel in https://github.com/langgenius/dify/pull/39676
* fix: populate completion_params from model schema defaults in Agent node by @rkfshakti in https://github.com/langgenius/dify/pull/39590
* ci: wait for KnowledgeFS before deployment by @JohnJyong in https://github.com/langgenius/dify/pull/39677
* chore: bump nltk from 3.9.4 to 3.10.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/39503
* feat: add missing plugin installation to agent DSL imports by @iamjoel in https://github.com/langgenius/dify/pull/39680
* ci: replace custom noqa markers with guard ignores by @escape0707 in https://github.com/langgenius/dify/pull/39679
* ci: enforce strict checks for unit tests by @escape0707 in https://github.com/langgenius/dify/pull/39682
* refactor(web): derive workspace billing from current workspace by @lyzno1 in https://github.com/langgenius/dify/pull/39674
* feat: label agent conversation reset action on hover by @iamjoel in https://github.com/langgenius/dify/pull/39691
* chore(deps): bump gitpython from 3.1.54 to 3.1.57 in /api by @wylswz in https://github.com/langgenius/dify/pull/39684
* refactor: introduce agent working environment architecture by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39480
* test(e2e): align Agent tool credential states by @lyzno1 in https://github.com/langgenius/dify/pull/39698
* test: enforce strict typing in migrated unit tests by @escape0707 in https://github.com/langgenius/dify/pull/39689
* test: share unbound unit test sessions by @escape0707 in https://github.com/langgenius/dify/pull/39690
* refactor(e2e): unify seeded runtime orchestration by @lyzno1 in https://github.com/langgenius/dify/pull/39700
* chore(deps): bump starlette, soupsieve, cryptography for CVE fixes by @GareArc in https://github.com/langgenius/dify/pull/39716
* feat(agent): make home snapshots optional and use backend defaults by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39702
* chore: add E2B sync and tini supervision by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39705
* chore(deps): bump wandb 0.28.0 -> 0.28.1 for CVE fix attempt by @GareArc in https://github.com/langgenius/dify/pull/39718
* fix(web): gate plugin auth permission hint by @hjlarry in https://github.com/langgenius/dify/pull/39721
* refactor(web): remove workflow node useBoolean usage by @lyzno1 in https://github.com/langgenius/dify/pull/39729
* test: use sqlite3 session in test_workflow_pause_events by @asukaminato0721 in https://github.com/langgenius/dify/pull/38688
* test: use sqlite3 session in test_human_input_timeout_tasks by @asukaminato0721 in https://github.com/langgenius/dify/pull/38703
* test: use sqlite3 session in test_metadata_bug_complete by @asukaminato0721 in https://github.com/langgenius/dify/pull/38721
* test: use sqlite3 session in test_sqlalchemy_workflow_execution_repository by @asukaminato0721 in https://github.com/langgenius/dify/pull/38761
* test: use sqlite3 session in test_session by @asukaminato0721 in https://github.com/langgenius/dify/pull/38772
* test: use SQLite sessions in core tools by @asukaminato0721 in https://github.com/langgenius/dify/pull/39107
* test: use SQLite sessions in libs by @asukaminato0721 in https://github.com/langgenius/dify/pull/39089
* test: use SQLite sessions in core rag by @asukaminato0721 in https://github.com/langgenius/dify/pull/39106
* refactor(web): consolidate settings state in URL by @lyzno1 in https://github.com/langgenius/dify/pull/39740
* fix: handle unconfigured LLM workflow streams by @linw1995 in https://github.com/langgenius/dify/pull/39741
* fix: avoid returning unused vectors in TiDB on Qdrant search by @hjlarry in https://github.com/langgenius/dify/pull/39744
* fix: display workflow run errors in the result panel by @iamjoel in https://github.com/langgenius/dify/pull/39746
* refactor(web): clarify education state ownership by @lyzno1 in https://github.com/langgenius/dify/pull/39748
* fix(web): force render dialog backdrop and use dialog description in education verify modal by @lyzno1 in https://github.com/langgenius/dify/pull/39749
* test: move service dataset controller coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38941
* test: use SQLite sessions in core app by @asukaminato0721 in https://github.com/langgenius/dify/pull/39100
* fix(docker): mount shared storage volume in api_websocket by @dparkmit24 in https://github.com/langgenius/dify/pull/39424
* test: use SQLite in Tencent traces by @asukaminato0721 in https://github.com/langgenius/dify/pull/38988
* fix(web): show API errors when agent publishing fails by @iamjoel in https://github.com/langgenius/dify/pull/39756
* chore: paginate installed apps by @hjlarry in https://github.com/langgenius/dify/pull/39739
* test: migrate account service tests to shared SQLite by @escape0707 in https://github.com/langgenius/dify/pull/39758
* chore: canonicalize Tailwind classes by @hyoban in https://github.com/langgenius/dify/pull/39762
* fix: fix hardcode /home/dify by @fatelei in https://github.com/langgenius/dify/pull/39767
* fix(matrixone): generate ids for every document by @csurong in https://github.com/langgenius/dify/pull/39734
* fix: refactor account about dialog ownership by @lyzno1 in https://github.com/langgenius/dify/pull/39765
* fix(plugin): preserve credentials during local replacement by @zyssyz123 in https://github.com/langgenius/dify/pull/39764
* fix(socketio): omit socket_timeout from RedisManager pub/sub options by @sergioperezcheco in https://github.com/langgenius/dify/pull/39587
* fix: allow an empty Agent tools selection by @zyz619963502zyz in https://github.com/langgenius/dify/pull/39695
* fix(api): delete custom models stored with legacy model_type values by @Souravrajvi0 in https://github.com/langgenius/dify/pull/39708
* fix(web): constrain slash picker triggers by @lyzno1 in https://github.com/langgenius/dify/pull/39768
* test: use SQLite sessions in services tools by @asukaminato0721 in https://github.com/langgenius/dify/pull/39063
* test: use SQLite sessions in services data_migration by @asukaminato0721 in https://github.com/langgenius/dify/pull/39065
* test: use SQLite sessions in rag pipeline transform by @asukaminato0721 in https://github.com/langgenius/dify/pull/39050
* test: use sqlite3 session in test_completion_completion_app_generator by @asukaminato0721 in https://github.com/langgenius/dify/pull/38723
* test: use SQLite sessions in core repositories by @asukaminato0721 in https://github.com/langgenius/dify/pull/39067
* test: use SQLite sessions in core repositories by @asukaminato0721 in https://github.com/langgenius/dify/pull/39073
* test: use SQLite sessions in services workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/39091
* test: use SQLite sessions in core rag by @asukaminato0721 in https://github.com/langgenius/dify/pull/39092
* test: use SQLite sessions in controllers console app by @asukaminato0721 in https://github.com/langgenius/dify/pull/39095
* test: use SQLite sessions in controllers console app by @asukaminato0721 in https://github.com/langgenius/dify/pull/39097
* test: use SQLite sessions in core app apps by @asukaminato0721 in https://github.com/langgenius/dify/pull/39101
* test: use SQLite sessions in core app apps by @asukaminato0721 in https://github.com/langgenius/dify/pull/39102
* fix(api): prevent HITL pause from aborting workflow resume by @Success6666 in https://github.com/langgenius/dify/pull/39485
* fix: open inline agent editor from checklist warnings by @iamjoel in https://github.com/langgenius/dify/pull/39781
* test: use SQLite in Langfuse traces by @asukaminato0721 in https://github.com/langgenius/dify/pull/38985
* test: use SQLite in Opik traces by @asukaminato0721 in https://github.com/langgenius/dify/pull/38987
* test: use SQLite sessions in core tools by @asukaminato0721 in https://github.com/langgenius/dify/pull/39094
* test: move RAG pipeline import coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38938
* test: use sqlite3 session in test_billing by @asukaminato0721 in https://github.com/langgenius/dify/pull/38722
* test: use sqlite3 session in test_factory by @asukaminato0721 in https://github.com/langgenius/dify/pull/38731
* test: use sqlite3 session in test_trial by @asukaminato0721 in https://github.com/langgenius/dify/pull/38732
* test: use sqlite3 session in test_workflow_node_execution_truncation by @asukaminato0721 in https://github.com/langgenius/dify/pull/38734
* test: use SQLite sessions in tasks by @asukaminato0721 in https://github.com/langgenius/dify/pull/39076
* fix(workflow): provide default values for AgentNodeData fields (#39743) by @loulanyue in https://github.com/langgenius/dify/pull/39754
* refactor(web): localize model load balancing modal state by @lyzno1 in https://github.com/langgenius/dify/pull/39789
* fix(chat): derive themes per chat root by @lyzno1 in https://github.com/langgenius/dify/pull/39790
* refactor(web): localize dataset external API state by @lyzno1 in https://github.com/langgenius/dify/pull/39791
* refactor(web): remove app log drawer context by @lyzno1 in https://github.com/langgenius/dify/pull/39792
* refactor(web): internalize trigger limit modal state by @lyzno1 in https://github.com/langgenius/dify/pull/39794
* refactor(web): localize retrieval method query by @lyzno1 in https://github.com/langgenius/dify/pull/39795
* refactor(web): remove configuration mitt context by @lyzno1 in https://github.com/langgenius/dify/pull/39796
* fix(web): isolate MCP card action overlays by @Jingyi-Dify in https://github.com/langgenius/dify/pull/39797
* feat: add upload size guidance and validation for agent files and skills by @iamjoel in https://github.com/langgenius/dify/pull/39798
* refactor(web): remove dead dataset operator context state by @lyzno1 in https://github.com/langgenius/dify/pull/39800
* refactor(web): remove stale header maximize state by @lyzno1 in https://github.com/langgenius/dify/pull/39801
* refactor(web): narrow app list context by @lyzno1 in https://github.com/langgenius/dify/pull/39802
* fix(ui): align select trigger focus ring by @lyzno1 in https://github.com/langgenius/dify/pull/39804
* feat: make skill package upload size limit configurable by @linw1995 in https://github.com/langgenius/dify/pull/39799
* test: use SQLite sessions in app DSL service tests by @escape0707 in https://github.com/langgenius/dify/pull/39803
* test: use caplog for telemetry error logging by @EvanYao826 in https://github.com/langgenius/dify/pull/39722
* refactor(dify-ui): govern public component APIs by @lyzno1 in https://github.com/langgenius/dify/pull/39806
* feat: change api/v1/plugins/download to api/v1/plugins/download-url by @fatelei in https://github.com/langgenius/dify/pull/39811
* refactor(web): align Base UI composition contracts by @lyzno1 in https://github.com/langgenius/dify/pull/39820
* docs: remove trailing whitespace in docker/README.md by @xiaoyaoqilan in https://github.com/langgenius/dify/pull/39808
* chore(api): consolidate chained .where() calls into single calls by @MannXo in https://github.com/langgenius/dify/pull/39819
* test: exercise credential visibility with SQLite by @escape0707 in https://github.com/langgenius/dify/pull/39827
* fix: refresh mcp server code by app id by @zhangx1n in https://github.com/langgenius/dify/pull/39828
* docs: fix typos in api comments and prompt example by @iridescentWen in https://github.com/langgenius/dify/pull/39838
* fix(api): silence opentelemetry.context error reports to Sentry on cloud by @MRZHUH in https://github.com/langgenius/dify/pull/39841
* fix(workflow): remap snippet references by @JzoNgKVO in https://github.com/langgenius/dify/pull/39843
* feat: prioritize configured tools in the agent prompt picker by @iamjoel in https://github.com/langgenius/dify/pull/39850
* fix(web): skip auth validation for local file datasource by @hjlarry in https://github.com/langgenius/dify/pull/39856
* fix(web): hide prompt log action in agent v2 logs by @lyzno1 in https://github.com/langgenius/dify/pull/39858
* refactor(ui): simplify scroll area API by @lyzno1 in https://github.com/langgenius/dify/pull/39857
* test: use SQLite sessions in services agent by @asukaminato0721 in https://github.com/langgenius/dify/pull/39054
* test: use SQLite sessions in core rag by @asukaminato0721 in https://github.com/langgenius/dify/pull/39055
* test: use SQLite sessions in core ops by @asukaminato0721 in https://github.com/langgenius/dify/pull/39062
* test: use SQLite sessions in core tools by @asukaminato0721 in https://github.com/langgenius/dify/pull/39068
* test: use SQLite sessions in core llm_generator by @asukaminato0721 in https://github.com/langgenius/dify/pull/39070
* test: use SQLite sessions in core repositories by @asukaminato0721 in https://github.com/langgenius/dify/pull/39078
* test: use SQLite sessions in core callback_handler by @asukaminato0721 in https://github.com/langgenius/dify/pull/39081
* test: use SQLite sessions in core workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/39086
* test: use SQLite sessions in services workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/39087
* fix(rag): add bounded timeout to Firecrawl extractor requests by @superdiaodiao in https://github.com/langgenius/dify/pull/39831
* fix(rag): add bounded timeout to Notion extractor requests by @superdiaodiao in https://github.com/langgenius/dify/pull/39833
* fix(auth): add bounded timeout to WaterCrawl credential validation by @superdiaodiao in https://github.com/langgenius/dify/pull/39824
* fix(web): align secondary sidebar help trigger by @lyzno1 in https://github.com/langgenius/dify/pull/39862
* fix(api): scope segment batch deletes by @WH-2099 in https://github.com/langgenius/dify/pull/38217
* chore(api): fix typos in config description and comment by @zyz619963502zyz in https://github.com/langgenius/dify/pull/39870
* fix(api): bound billing service HTTP timeouts (#39874) by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/39875
* refactor(web): align Base UI state consumers by @lyzno1 in https://github.com/langgenius/dify/pull/39864
* fix(api): prevent cookies from shadowing admin API keys by @kenwoodjw in https://github.com/langgenius/dify/pull/39872
* fix(matrixone): apply score threshold to vector search by @csurong in https://github.com/langgenius/dify/pull/39784
* fix(api): bound JinaReader and adaptive-crawl HTTP timeouts (#39859) by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/39860
* fix(api): make SSRF-blocked error message actionable by @Taranum01 in https://github.com/langgenius/dify/pull/39867
* test(web): remove Base UI component mocks by @lyzno1 in https://github.com/langgenius/dify/pull/39877
* perf(dataset): fix N+1 database insert bottleneck in Notion sync by @HassanRady in https://github.com/langgenius/dify/pull/39899
* fix(vdb-oceanbase): reject trailing newlines in metadata-key and document-id validators (#39884) by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/39901
* feat(workflow): support human input in loop and iteration by @laipz8200 in https://github.com/langgenius/dify/pull/39243
* chore(deps): bump the github-actions-dependencies group with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/39909
* chore: pass session explicitly in ApiModeration by @HandSonic in https://github.com/langgenius/dify/pull/39885
* fix(web): clarify member permission exception copy by @WTW0313 in https://github.com/langgenius/dify/pull/39917
* chore: keep dify-agent env same with dify by @fatelei in https://github.com/langgenius/dify/pull/39918
* fix(api): stop echoing the raw api_key in the 403 error message (#39888) by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/39902
* fix(dify-agent): stabilize E2B config materialization by @zhaohao1004 in https://github.com/langgenius/dify/pull/39873
* chore: bump pyrefly version by @asukaminato0721 in https://github.com/langgenius/dify/pull/39876
* feat: pass image file to llm by @fatelei in https://github.com/langgenius/dify/pull/39848
* fix: keep colons in HTTP node form body values on migration by @weijun-xia in https://github.com/langgenius/dify/pull/38861
* fix(dify-agent): atomically finalize run terminals by @zhaohao1004 in https://github.com/langgenius/dify/pull/39929
* fix(web): improve home accessibility by @lyzno1 in https://github.com/langgenius/dify/pull/39938
* fix(web): remove Web Apps loading skeleton by @lyzno1 in https://github.com/langgenius/dify/pull/39939
* test: use SQLite sessions in web controller fixtures by @asukaminato0721 in https://github.com/langgenius/dify/pull/39052
* test: use SQLite sessions in rag pipeline dsl by @asukaminato0721 in https://github.com/langgenius/dify/pull/39053
* test: use SQLite sessions in controllers service api by @asukaminato0721 in https://github.com/langgenius/dify/pull/39059
* test: use SQLite sessions in controllers console explore by @asukaminato0721 in https://github.com/langgenius/dify/pull/39064
* test: use SQLite sessions in core test_provider_manager.py by @asukaminato0721 in https://github.com/langgenius/dify/pull/39071
* test: use SQLite sessions in core app apps by @asukaminato0721 in https://github.com/langgenius/dify/pull/39079
* fix(web): improve main navigation responsiveness and tour focus by @lyzno1 in https://github.com/langgenius/dify/pull/39940
* perf(web): streaming ssr for home page by @lyzno1 in https://github.com/langgenius/dify/pull/39922
* fix(api): bump OpenTelemetry to stop duplicate Flask context detach by @GareArc in https://github.com/langgenius/dify/pull/39921
* fix(api): validate installation scope for cached marketplace packages by @GareArc in https://github.com/langgenius/dify/pull/39935
* feat(api): isolate credentials from local packages by @linw1995 in https://github.com/langgenius/dify/pull/39957
* chore(deps): bump cryptography from 49.0.0 to 50.0.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/39958
* fix(dify-agent): keep tmux server alive without sessions by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39943
* fix(dify-agent): make run cancellation route-independent by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39942
* chore(deps): bump aiohttp from 3.14.1 to 3.14.3 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/39959
* fix(vdb): bound the TiDB Cloud API timeouts by @he-yufeng in https://github.com/langgenius/dify/pull/39953
* chore(deps): bump the vdb group with 9 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/39911
* refactor(workflow): move AgentNode events out of graphon by @laipz8200 in https://github.com/langgenius/dify/pull/39845
* chore(web): upgrade Next.js to 16.3 by @lyzno1 in https://github.com/langgenius/dify/pull/39962
* fix(api): allow external knowledge base creation under enterprise RBAC by @GareArc in https://github.com/langgenius/dify/pull/39930
* fix(dify-ui): improve select and status dot accessibility by @lyzno1 in https://github.com/langgenius/dify/pull/39971
* chore(docker): move optional settings to service envs by @laipz8200 in https://github.com/langgenius/dify/pull/39970
* feat(workflow): support LLM environment variables by @laipz8200 in https://github.com/langgenius/dify/pull/39125
* fix: align build and preview chat layouts by @iamjoel in https://github.com/langgenius/dify/pull/39980
* fix(workflow): avoid app context dependency in parallel iteration by @hjlarry in https://github.com/langgenius/dify/pull/39983
* fix(api): surface system quota exhaustion without fallback by @linw1995 in https://github.com/langgenius/dify/pull/39986
* fix(ui): align button spacing with design by @lyzno1 in https://github.com/langgenius/dify/pull/39990
* test: use sqlite3 session in test_if_else by @asukaminato0721 in https://github.com/langgenius/dify/pull/38753
* test: use sqlite3 session in test_qa_index_processor by @asukaminato0721 in https://github.com/langgenius/dify/pull/38765
* chore(api): remove unreachable match suppressions by @nightcityblade in https://github.com/langgenius/dify/pull/39949
* feat(agent): separate CLI file URL audiences by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39952
* fix(agent): expose feedback in agent logs by @zyssyz123 in https://github.com/langgenius/dify/pull/39994
* fix(e2e): configure sandbox-reachable API URL by @lyzno1 in https://github.com/langgenius/dify/pull/40005
* refactor(api): extract workspace list into layered application service by @41tair in https://github.com/langgenius/dify/pull/39822
* fix(web): preserve feedback state on submission failure by @lyzno1 in https://github.com/langgenius/dify/pull/40004
* test: use SQLite in Arize Phoenix traces by @asukaminato0721 in https://github.com/langgenius/dify/pull/38984
* chore(deps): upgrade Base UI to 1.7.0 by @lyzno1 in https://github.com/langgenius/dify/pull/40006
* fix(ci): harden Playwright browser installs by @lyzno1 in https://github.com/langgenius/dify/pull/40009
* fix(ci): make web workflows reproducible by @lyzno1 in https://github.com/langgenius/dify/pull/40010
* chore: add copy action to workflow log errors by @iamjoel in https://github.com/langgenius/dify/pull/40011
* refactor(web): simplify tag selector trigger by @lyzno1 in https://github.com/langgenius/dify/pull/40014
* refactor(web): remove duplicate dataset title update by @lyzno1 in https://github.com/langgenius/dify/pull/40023
* fix(web): remove misleading ARIA states by @lyzno1 in https://github.com/langgenius/dify/pull/40015
* refactor(web): align query client ownership by @lyzno1 in https://github.com/langgenius/dify/pull/40024
* refactor(web): derive system feature enums from schemas by @lyzno1 in https://github.com/langgenius/dify/pull/40030
* test: use sqlite3 session in test_credit_pool_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38694
* test: use sqlite3 session in test_agent_config_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38764
* fix(web): improve debug plugin copy accessibility by @linw1995 in https://github.com/langgenius/dify/pull/40035
* test: use real ORM models in RAG indexing tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/40017
* fix(dify-agent): wait for E2B shellctl readiness by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39996
* fix(web): refresh model provider plugins after updates by @Jingyi-Dify in https://github.com/langgenius/dify/pull/40002
* fix(web): redirect legacy plugin fallbacks by @Jingyi-Dify in https://github.com/langgenius/dify/pull/40051
* refactor(api): extract workspace member listing into layered service by @escape0707 in https://github.com/langgenius/dify/pull/39974
* fix: make document retry batches consistent by @csurong in https://github.com/langgenius/dify/pull/39978
* fix: preserve UTF-8 byte size for text uploads by @pineapple880066 in https://github.com/langgenius/dify/pull/40034
* chore: more upload file size for paid user by @hjlarry in https://github.com/langgenius/dify/pull/39967
* fix(api): allow account avatars across workspaces by @CodeWarriors0 in https://github.com/langgenius/dify/pull/40055
* test: use SQLite sessions in core tools by @asukaminato0721 in https://github.com/langgenius/dify/pull/39108
* test: use real ORM models in workflow repository tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/40019
* test: use SQLite sessions in services core by @asukaminato0721 in https://github.com/langgenius/dify/pull/39058
* fix: offset legacy app error toasts below model controls by @iamjoel in https://github.com/langgenius/dify/pull/40040
* test: use real ORM models in dataset service tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/40018
* fix: hide log detail actions for legacy app logs by @iamjoel in https://github.com/langgenius/dify/pull/40057
* test: use real ORM models in app and API tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/40020
* test: use SQLite sessions in core app apps by @asukaminato0721 in https://github.com/langgenius/dify/pull/39083
* test: move webhook service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38945
* test: use SQLite sessions in clean dataset by @asukaminato0721 in https://github.com/langgenius/dify/pull/39051
* refactor(system-features): derive nullable SSO protocol by @lyzno1 in https://github.com/langgenius/dify/pull/40063
* test: use SQLite sessions in core entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/39056
* test: use SQLite sessions in controllers console auth by @asukaminato0721 in https://github.com/langgenius/dify/pull/39060
* test: use SQLite sessions in commands by @asukaminato0721 in https://github.com/langgenius/dify/pull/39082
* test: use SQLite sessions in controllers console app by @asukaminato0721 in https://github.com/langgenius/dify/pull/39096
* fix(web): improve markdown form rendering by @WTW0313 in https://github.com/langgenius/dify/pull/40070
* test: use SQLite sessions in core repositories by @asukaminato0721 in https://github.com/langgenius/dify/pull/39061
* feat(trace-aliyun): GenAI spans for LLM TTFT, agent ReAct, tools, and failed LLM nodes by @123liuziming in https://github.com/langgenius/dify/pull/39339
* chore: upgrade workspace dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/40069
* fix(e2e): align marketplace plugin download URL by @lyzno1 in https://github.com/langgenius/dify/pull/40075
* fix(web): only open slash variable picker when / is typed (#39755) by @Souravrajvi0 in https://github.com/langgenius/dify/pull/39761
* chore: format GitHub metadata with Oxfmt by @lyzno1 in https://github.com/langgenius/dify/pull/40073
* fix: get role and list role need filter billing permission key by @fatelei in https://github.com/langgenius/dify/pull/38218
* fix(web): register audio listeners on real media events by @eldardada in https://github.com/langgenius/dify/pull/37841
* feat: Add Lao (lo-LA) language support #39489 by @bounkirdni-2025 in https://github.com/langgenius/dify/pull/39474
* feat: support TiDB Vector full-text and hybrid search by @bkidy in https://github.com/langgenius/dify/pull/38112
* chore(web): remove obsolete PWA assets by @lyzno1 in https://github.com/langgenius/dify/pull/40082
* fix: report unavailable agent tools in publish and workflow checks by @iamjoel in https://github.com/langgenius/dify/pull/40077
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/40096
* chore: remove obsolete development docs by @lyzno1 in https://github.com/langgenius/dify/pull/40098
* test: use sqlite3 session in test_external_dataset_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38696
* test: use SQLite sessions in datasource files by @asukaminato0721 in https://github.com/langgenius/dify/pull/39048
* fix(ci): switch Playwright jobs to Azure Ubuntu mirror by @lyzno1 in https://github.com/langgenius/dify/pull/40100
* revert(web): remove redundant slash picker intent tracking by @lyzno1 in https://github.com/langgenius/dify/pull/40103
* fix(dify-agent): end SSE streams on terminal events by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40042
* fix(dify-agent): align agent and shell execution limits by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40043
* fix: gate Agent access until first publish by @zyssyz123 in https://github.com/langgenius/dify/pull/40105
* feat: support azure keyvault by @wylswz in https://github.com/langgenius/dify/pull/39933
* refactor(api):  decouple console queries through application services by @41tair in https://github.com/langgenius/dify/pull/40031
* test(e2e): align duplicate Agent publish state by @lyzno1 in https://github.com/langgenius/dify/pull/40108
* feat: optimize integrations initial loading by @Jingyi-Dify in https://github.com/langgenius/dify/pull/40118
* refactor(web): modernize Studio app list data flow by @lyzno1 in https://github.com/langgenius/dify/pull/40109
* feat: make the console license expiry badge optional by @GareArc in https://github.com/langgenius/dify/pull/39972
* chore: improve current workspace summary by @hjlarry in https://github.com/langgenius/dify/pull/40121
* fix(web): enforce frame ancestors on protected routes by @lyzno1 in https://github.com/langgenius/dify/pull/40124
* test: use sqlite sessions at generation boundaries by @asukaminato0721 in https://github.com/langgenius/dify/pull/40095
* test: migrate document indexing task sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40092
* test: migrate console app sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40081
* refactor(api): move license expiry notice flag onto license detail by @GareArc in https://github.com/langgenius/dify/pull/40128
* fix(web): scope hidden outlines to focus-visible by @lyzno1 in https://github.com/langgenius/dify/pull/40130
* refactor(web): simplify billing portal link by @lyzno1 in https://github.com/langgenius/dify/pull/40131
* docs: Fixes Star History chart by @Mubelotix in https://github.com/langgenius/dify/pull/40115
* refactor(web): localize education status query by @lyzno1 in https://github.com/langgenius/dify/pull/40132
* chore: bump plugin daemon image by @hjlarry in https://github.com/langgenius/dify/pull/40134
* refactor(dify-agent): make config pulls direct and remove gRPC by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40044
* chore: use multi-arch plugin daemon image tag by @hjlarry in https://github.com/langgenius/dify/pull/40139
* chore(web): add dedicated home loading boundary by @lyzno1 in https://github.com/langgenius/dify/pull/40135
* perf(web): prefetch app links on intent by @lyzno1 in https://github.com/langgenius/dify/pull/40133
* fix: show inline agent build draft change details by @iamjoel in https://github.com/langgenius/dify/pull/40140
* chore: dep inject for model in notification dismiss by @likalikali in https://github.com/langgenius/dify/pull/40146
* fix(api): scope temporary capabilities to owners by @WH-2099 in https://github.com/langgenius/dify/pull/39863
* chore(web): remove unreachable explore sidebar by @lyzno1 in https://github.com/langgenius/dify/pull/40136
* fix: improve readability of DSL import warnings by @iamjoel in https://github.com/langgenius/dify/pull/40148
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/40150
* feat: support accessibility checks in CI by @iamjoel in https://github.com/langgenius/dify/pull/40137
* feat(dify-agent): propagate run limit error types by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40116
* chore: dep inject for model in datasets document and web human input … by @likalikali in https://github.com/langgenius/dify/pull/40151
* chore: dep inject for model in oauth server by @likalikali in https://github.com/langgenius/dify/pull/40147
* chore: dep inject for model in api based extension by @likalikali in https://github.com/langgenius/dify/pull/40154
* chore: dep inject for model in website crawl api by @likalikali in https://github.com/langgenius/dify/pull/40156
* chore: dep inject for model in tags, mcp server, and data source auth by @likalikali in https://github.com/langgenius/dify/pull/40159
* chore: dep inject for model in workflow run archive download by @likalikali in https://github.com/langgenius/dify/pull/40157
* chore: dep inject for model in onboarding step by step tour by @likalikali in https://github.com/langgenius/dify/pull/40155
* chore: dep inject for model in workspace snippets, load balancing, and endpoint by @likalikali in https://github.com/langgenius/dify/pull/40161
* chore: dep inject for model in agent app sandbox upload by @likalikali in https://github.com/langgenius/dify/pull/40153
* refactor(dify-agent): download Binding files through Agent Stub by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40143
* revert(web): use suspense boundary in home page by @lyzno1 in https://github.com/langgenius/dify/pull/40167
* chore: dep inject for model in explore apis by @likalikali in https://github.com/langgenius/dify/pull/40160
* chore: dep inject for model in explore workflow run by @likalikali in https://github.com/langgenius/dify/pull/40158
* refactor: replace manual model_validate with @model_validate decorator in app controllers by @likalikali in https://github.com/langgenius/dify/pull/40170
* fix(agent-v2): accept composer UI ids on manual metadata filter conditions by @chelsealong in https://github.com/langgenius/dify/pull/40171
* refactor(api): decouple setup and spec endpoints by @41tair in https://github.com/langgenius/dify/pull/40104
* test: move RAG pipeline workflow coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38937
* chore: Remove redundant dataset context string conversions by @medisean in https://github.com/langgenius/dify/pull/40189
* fix(workflow): fall back when default socket is unavailable by @hjlarry in https://github.com/langgenius/dify/pull/40191
* refactor: replace manual model_validate with @model_validate in agent controllers by @likalikali in https://github.com/langgenius/dify/pull/40233
* refactor: replace manual model_validate with @model_validate in workspace plugin/tool controllers by @likalikali in https://github.com/langgenius/dify/pull/40238
* refactor: replace manual model_validate with @model_validate in auth/billing/tag controllers by @likalikali in https://github.com/langgenius/dify/pull/40240
* refactor: replace manual model_validate with @model_validate in explore/snippets controllers by @likalikali in https://github.com/langgenius/dify/pull/40241
* refactor: replace manual model_validate with @model_validate in app core controllers by @likalikali in https://github.com/langgenius/dify/pull/40234
* refactor: replace manual model_validate with @model_validate in app workflow controllers by @likalikali in https://github.com/langgenius/dify/pull/40235
* refactor: replace manual model_validate with @model_validate in rag_pipeline controllers by @likalikali in https://github.com/langgenius/dify/pull/40237
* refactor: replace manual model_validate with @model_validate in workspace remaining controllers by @likalikali in https://github.com/langgenius/dify/pull/40239
* refactor: replace manual model_validate with @model_validate in datasets controllers by @likalikali in https://github.com/langgenius/dify/pull/40236
* fix(agent): preserve plugin-declared model parameters through Agent Soul by @chelsealong in https://github.com/langgenius/dify/pull/40163
* fix(web): hide credential icons from assistive tech by @lyzno1 in https://github.com/langgenius/dify/pull/40376
* fix(web): associate app deletion confirmation label by @lyzno1 in https://github.com/langgenius/dify/pull/40375
* fix(web): remove workflow output title tab stop by @lyzno1 in https://github.com/langgenius/dify/pull/40377
* test: Type test by @asukaminato0721 in https://github.com/langgenius/dify/pull/40371
* refactor(web): unify infinite scroll sentinels by @lyzno1 in https://github.com/langgenius/dify/pull/40188
* fix(web): use primary headings on auth pages by @lyzno1 in https://github.com/langgenius/dify/pull/40192
* fix(web): use a primary heading on the install page by @lyzno1 in https://github.com/langgenius/dify/pull/40194
* fix(web): use a button for the webapp fallback action by @lyzno1 in https://github.com/langgenius/dify/pull/40197
* fix(web): use a button for unauthorized logout by @lyzno1 in https://github.com/langgenius/dify/pull/40198
* feat(api): cache remote recommended app template fetches by @Souravrajvi0 in https://github.com/langgenius/dify/pull/40176
* fix(web): name chat settings triggers by @lyzno1 in https://github.com/langgenius/dify/pull/40341
* fix(web): use button for tool detail toggle by @lyzno1 in https://github.com/langgenius/dify/pull/40349
* fix(web): hide citation measurement items from assistive tech by @lyzno1 in https://github.com/langgenius/dify/pull/40203
* fix(web): name chat history controls by @lyzno1 in https://github.com/langgenius/dify/pull/40344
* fix(web): name workflow debug actions by @lyzno1 in https://github.com/langgenius/dify/pull/40273
* fix(web): restore webapp password form submission by @lyzno1 in https://github.com/langgenius/dify/pull/40222
* fix(web): use button for chat variable panel close by @lyzno1 in https://github.com/langgenius/dify/pull/40333
* fix(web): make the human input expander a button by @lyzno1 in https://github.com/langgenius/dify/pull/40202
* fix(web): make the member selector keyboard accessible by @lyzno1 in https://github.com/langgenius/dify/pull/40209
* fix(web): make the scroll-to-node action a button by @lyzno1 in https://github.com/langgenius/dify/pull/40214
* fix(web): restore webapp email code form submission by @lyzno1 in https://github.com/langgenius/dify/pull/40227
* fix(web): restore the signup email focus order by @lyzno1 in https://github.com/langgenius/dify/pull/40230
* fix(web): expose the voice recording timer by @lyzno1 in https://github.com/langgenius/dify/pull/40205
* fix(web): name conversation menu triggers by @lyzno1 in https://github.com/langgenius/dify/pull/40253
* refactor(web): keep copy id events on the button by @lyzno1 in https://github.com/langgenius/dify/pull/40247
* fix(web): name dataset configuration actions by @lyzno1 in https://github.com/langgenius/dify/pull/40254
* fix(web): name annotation configuration action by @lyzno1 in https://github.com/langgenius/dify/pull/40255
* fix(web): make dataset sidebar menu items buttons by @lyzno1 in https://github.com/langgenius/dify/pull/40248
* fix(web): name annotation reply actions by @lyzno1 in https://github.com/langgenius/dify/pull/40270
* fix(web): name saved item actions by @lyzno1 in https://github.com/langgenius/dify/pull/40256
* fix(web): name workflow version history action by @lyzno1 in https://github.com/langgenius/dify/pull/40276
* fix(web): name snippet stop action by @lyzno1 in https://github.com/langgenius/dify/pull/40278
* fix(web): expose debug toolbar semantics by @lyzno1 in https://github.com/langgenius/dify/pull/40258
* fix(web): name human input delete action by @lyzno1 in https://github.com/langgenius/dify/pull/40293
* fix(web): name image previewer actions by @lyzno1 in https://github.com/langgenius/dify/pull/40283
* fix(web): expose workflow parallel toggle state by @lyzno1 in https://github.com/langgenius/dify/pull/40282
* fix(web): name variable inspect close actions by @lyzno1 in https://github.com/langgenius/dify/pull/40289
* fix(web): name agent log navigation menu by @lyzno1 in https://github.com/langgenius/dify/pull/40286
* fix(web): name code generator action by @lyzno1 in https://github.com/langgenius/dify/pull/40324
* fix(web): name external retrieval close action by @lyzno1 in https://github.com/langgenius/dify/pull/40317
* fix(web): name human input preview close by @lyzno1 in https://github.com/langgenius/dify/pull/40321
* fix(web): expose SVG preview toggle state by @lyzno1 in https://github.com/langgenius/dify/pull/40332
* fix(web): name prompt generator action by @lyzno1 in https://github.com/langgenius/dify/pull/40328
* refactor(web): rely on QR panel containment by @lyzno1 in https://github.com/langgenius/dify/pull/40352
* fix(web): name assigner add operation by @lyzno1 in https://github.com/langgenius/dify/pull/40337
* fix(web): use buttons for plugin type switch by @lyzno1 in https://github.com/langgenius/dify/pull/40353
* fix(web): use buttons for pricing categories by @lyzno1 in https://github.com/langgenius/dify/pull/40360
* fix(web): use button for provider tool item by @lyzno1 in https://github.com/langgenius/dify/pull/40362
* refactor(web): rely on preview dialog containment by @lyzno1 in https://github.com/langgenius/dify/pull/40363
* fix(web): use button for publisher access by @lyzno1 in https://github.com/langgenius/dify/pull/40361
* fix(web): use primary headings on password reset pages by @lyzno1 in https://github.com/langgenius/dify/pull/40193
* fix(web): make the citation toggle a button by @lyzno1 in https://github.com/langgenius/dify/pull/40204
* fix(web): name the snippet info menu trigger by @lyzno1 in https://github.com/langgenius/dify/pull/40251
* fix(web): name the plugin debug trigger by @lyzno1 in https://github.com/langgenius/dify/pull/40252
* chore: example to rm db.session by @asukaminato0721 in https://github.com/langgenius/dify/pull/40370
* fix(web): name generated result copy action by @lyzno1 in https://github.com/langgenius/dify/pull/40259
* fix(web): make verification back actions keyboard accessible by @lyzno1 in https://github.com/langgenius/dify/pull/40196
* fix(web): name OAuth redirect copy action by @lyzno1 in https://github.com/langgenius/dify/pull/40303
* fix(web): name plugin item actions by @lyzno1 in https://github.com/langgenius/dify/pull/40261
* fix(web): name plugin detail close action by @lyzno1 in https://github.com/langgenius/dify/pull/40264
* fix(web): name external API panel close by @lyzno1 in https://github.com/langgenius/dify/pull/40309
* fix(web): name external API modal close by @lyzno1 in https://github.com/langgenius/dify/pull/40313
* chore(deps): bump the github-actions-dependencies group with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/40391
* fix(api): end_date filter in feedback export excludes the entire end date by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/40114
* fix: catch ValueError instead of bare except in account CLI commands by @chelsealong in https://github.com/langgenius/dify/pull/40356
* fix(web): name MCP header fields by @lyzno1 in https://github.com/langgenius/dify/pull/40299
* fix(web): make tool category filters keyboard accessible by @lyzno1 in https://github.com/langgenius/dify/pull/40243
* fix(web): use buttons for version filters by @lyzno1 in https://github.com/langgenius/dify/pull/40357
* chore(deps): bump pymdown-extensions from 11.0 to 11.0.1 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/40183
* chore(deps): bump gitpython from 3.1.57 to 3.1.58 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/40184
* fix(web): allow unlimited text input in trial apps by @hjlarry in https://github.com/langgenius/dify/pull/40403
* fix(web): expose chat variable tips state by @lyzno1 in https://github.com/langgenius/dify/pull/40334
* docs(web): add Next.js agent rules by @lyzno1 in https://github.com/langgenius/dify/pull/40398
* chore: tighten education verification and pause discount access by @iamjoel in https://github.com/langgenius/dify/pull/40402
* fix(web): name MCP header delete actions by @lyzno1 in https://github.com/langgenius/dify/pull/40300
* fix(web): name external API card actions by @lyzno1 in https://github.com/langgenius/dify/pull/40304
* fix(web): name secret key delete action by @lyzno1 in https://github.com/langgenius/dify/pull/40297
* fix(web): use button for workflow debug close by @lyzno1 in https://github.com/langgenius/dify/pull/40274
* fix(web): name endpoint card actions by @lyzno1 in https://github.com/langgenius/dify/pull/40260
* fix(web): make suggested questions native buttons by @lyzno1 in https://github.com/langgenius/dify/pull/40200
* refactor(web): migrate webapp password fields to dify ui by @lyzno1 in https://github.com/langgenius/dify/pull/40223
* fix(web): name the webapp password visibility action by @lyzno1 in https://github.com/langgenius/dify/pull/40225
* refactor(api): extract explore banner query service by @hjlarry in https://github.com/langgenius/dify/pull/40053
* test: migrate RAG index sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40080
* refactor(api): merge ping and version endpoints into system by @41tair in https://github.com/langgenius/dify/pull/40058
* test: migrate core app sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40084
* feat: add tool plugin param type date and date-picker by @zyqzyq in https://github.com/langgenius/dify/pull/36163
* fix: widen agent orchestration chat on large displays by @iamjoel in https://github.com/langgenius/dify/pull/40433
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/40435
* docs(web): clarify ref mutation ownership by @lyzno1 in https://github.com/langgenius/dify/pull/40426
* fix(web): keep shared ref updates out of render by @lyzno1 in https://github.com/langgenius/dify/pull/40427
* refactor(workflow): align standalone node execution layers by @linw1995 in https://github.com/langgenius/dify/pull/40447
* fix(web): keep workflow ref updates out of render by @lyzno1 in https://github.com/langgenius/dify/pull/40428
* chore: suppress pyrefly necessary conversions by @tusharmotwani1718 in https://github.com/langgenius/dify/pull/40444
* fix(docker): use dynamic DNS resolution for all nginx upstreams by @kanson1996 in https://github.com/langgenius/dify/pull/39155
* fix(web): keep agent ref updates out of render by @lyzno1 in https://github.com/langgenius/dify/pull/40429
* fix: _multiple_retrieve_thread not fail fast by @fatelei in https://github.com/langgenius/dify/pull/40466
* test: use sqlite sessions in rag pipeline coverage by @asukaminato0721 in https://github.com/langgenius/dify/pull/40093
* test: migrate dataset indexing task sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40091
* test: migrate app service sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40088
* fix: split sandbox files into saved and temporary tabs by @iamjoel in https://github.com/langgenius/dify/pull/40478
* test: migrate core RAG sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40085
* test: migrate retention and task sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40090
* fix: show a persistent toast for agent run timeouts by @iamjoel in https://github.com/langgenius/dify/pull/40486
* fix(web): preserve workflow canvas after history updates by @lyzno1 in https://github.com/langgenius/dify/pull/40489
* refactor(api): consolidate deployment edition handling by @41tair in https://github.com/langgenius/dify/pull/40142
* refactor(web): read app profile from query cache by @lyzno1 in https://github.com/langgenius/dify/pull/40467
* chore: bump cryptography, pypdf, h2 for CVE fixes by @wylswz in https://github.com/langgenius/dify/pull/40409
* fix(web): make legacy Home redirect permanent by @lyzno1 in https://github.com/langgenius/dify/pull/40492
* fix: add zh_Hans labels for builtin Audio provider and its tools by @zrh805 in https://github.com/langgenius/dify/pull/40408
* test: migrate controller sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40083
* refactor(web): read dataset profile from query cache by @lyzno1 in https://github.com/langgenius/dify/pull/40468
* test: migrate snippet and vector sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40089
* refactor(web): read workflow profile from query cache by @lyzno1 in https://github.com/langgenius/dify/pull/40469
* fix: improve agent working directory tab labels and tooltips by @iamjoel in https://github.com/langgenius/dify/pull/40496
* refactor(web): move education verification to dedicated routes by @lyzno1 in https://github.com/langgenius/dify/pull/40493
* refactor(web): read account profile from query cache by @lyzno1 in https://github.com/langgenius/dify/pull/40470
* chore: increase nofile ulimit for qdrant container by @typenoob in https://github.com/langgenius/dify/pull/40480
* refactor(web): read plugin profile from query cache by @lyzno1 in https://github.com/langgenius/dify/pull/40471
* refactor(web): align education autocomplete async behavior by @lyzno1 in https://github.com/langgenius/dify/pull/40500
* fix(api): bind dataset operations to owners by @WH-2099 in https://github.com/langgenius/dify/pull/40149
* feat: app deployment v2 by @WTW0313 in https://github.com/langgenius/dify/pull/39829
* refactor(web): sync amplitude from profile query by @lyzno1 in https://github.com/langgenius/dify/pull/40472
* refactor(web): sync zendesk from profile query by @lyzno1 in https://github.com/langgenius/dify/pull/40473
* feat: add trunstile by @zyssyz123 in https://github.com/langgenius/dify/pull/40494
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/40546
* fix(web): improve app deployment v2 accessibility by @WTW0313 in https://github.com/langgenius/dify/pull/40550
* refactor(web): remove profile bootstrap atom layer by @lyzno1 in https://github.com/langgenius/dify/pull/40474
* fix(agent-v2): stop dropping non-vision attachments from agent chat by @chelsealong in https://github.com/langgenius/dify/pull/40179
* feat(web): add multimodal retrieval guidance for Knowledge embedding models by @CyberPU2099 in https://github.com/langgenius/dify/pull/40566
* chore: add Docker configuration for the Turnstile site key by @iamjoel in https://github.com/langgenius/dify/pull/40569
* fix(api): bind remaining RAG resources to owners by @WH-2099 in https://github.com/langgenius/dify/pull/40503
* fix: restrict app deploy to explicit enterprise permission by @zhangx1n in https://github.com/langgenius/dify/pull/40564
* test: migrate agent app sandbox sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40568
* fix(web): restore app deletion autofill and knowledge scope label by @crazywoola in https://github.com/langgenius/dify/pull/40583
* fix(web): render workspace plan badge during SSR by @lyzno1 in https://github.com/langgenius/dify/pull/40581
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/40573
* test(web): remove brittle publisher lock test by @lyzno1 in https://github.com/langgenius/dify/pull/40592
* refactor(api): extract init validation into layered application service by @41tair in https://github.com/langgenius/dify/pull/40046
* refactor(web): remove deprecated deployments pages by @WTW0313 in https://github.com/langgenius/dify/pull/40593
* fix: fix create dataset with document miss rbac operation by @fatelei in https://github.com/langgenius/dify/pull/40599
* fix(rbac): grant member policies when a dataset is opened to the work… by @BenjaminX in https://github.com/langgenius/dify/pull/39735
* fix: enforce API key list permissions by @WH-2099 in https://github.com/langgenius/dify/pull/40516
* fix: meter hosted LLM invocations by @linw1995 in https://github.com/langgenius/dify/pull/40589
* feat(ui): add icon button primitive by @lyzno1 in https://github.com/langgenius/dify/pull/40616
* refactor(ui): adopt icon button in close controls by @lyzno1 in https://github.com/langgenius/dify/pull/40617
* refactor(web): migrate shared icon commands by @lyzno1 in https://github.com/langgenius/dify/pull/40620
* refactor(web): migrate domain icon commands by @lyzno1 in https://github.com/langgenius/dify/pull/40621
* feat(ui): expose base toggle composition by @lyzno1 in https://github.com/langgenius/dify/pull/40622
* test: migrate API workflow pause ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40669
* fix: hide knowledge retrieval from Agent V2 configuration by @iamjoel in https://github.com/langgenius/dify/pull/40679
* test: migrate residual ORM model stand-ins to real mappings by @asukaminato0721 in https://github.com/langgenius/dify/pull/40666
* test: migrate residual dataset and archive ORM models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40668
* test: migrate residual session factories to shared SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40665
* test: migrate workflow variable ORM model to real entity by @asukaminato0721 in https://github.com/langgenius/dify/pull/40664
* fix(ops): keep the path of self-hosted LangSmith and Weave endpoints by @GareArc in https://github.com/langgenius/dify/pull/40584
* fix: update Agent advanced settings copy by @iamjoel in https://github.com/langgenius/dify/pull/40682
* fix(ci): always report required style checks by @lyzno1 in https://github.com/langgenius/dify/pull/40684
* fix(e2e): skip hidden Agent knowledge E2E scenarios by @iamjoel in https://github.com/langgenius/dify/pull/40691
* test: migrate OpenTelemetry ORM identities to real models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40663
* test: migrate RAG dataset ORM contracts to real models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40662
* test: migrate residual controller ORM identities to real models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40661
* test: migrate reranker upload-file sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40659
* test: migrate app runner transaction sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40660
* test: migrate workflow tool-file ORM model to real entity by @asukaminato0721 in https://github.com/langgenius/dify/pull/40658
* test: migrate workflow node trace ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40657
* test: migrate conversation lifecycle sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40656
* fix(api): decouple response listeners from execution lifecycle by @zyssyz123 in https://github.com/langgenius/dify/pull/39813
* fix(agent): propagate resource collection failures by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40697
* fix(ci): prevent false failures from superseded runs by @lyzno1 in https://github.com/langgenius/dify/pull/40699
* refactor: resolve summary models through manager by @linw1995 in https://github.com/langgenius/dify/pull/40696
* chore: remove scope selection from the agent environment editor by @iamjoel in https://github.com/langgenius/dify/pull/40701
* refactor(web): migrate semantic icon controls by @lyzno1 in https://github.com/langgenius/dify/pull/40624
* refactor(web): migrate app icon commands by @lyzno1 in https://github.com/langgenius/dify/pull/40646
* refactor(web): migrate dataset icon commands by @lyzno1 in https://github.com/langgenius/dify/pull/40647
* refactor(web): migrate plugin icon commands by @lyzno1 in https://github.com/langgenius/dify/pull/40648
* refactor(web): migrate workflow icon commands by @lyzno1 in https://github.com/langgenius/dify/pull/40649
* refactor(web): migrate help menu icon trigger by @lyzno1 in https://github.com/langgenius/dify/pull/40650
* refactor(web): remove legacy action button references by @lyzno1 in https://github.com/langgenius/dify/pull/40651
* refactor(web): migrate app card icon controls by @lyzno1 in https://github.com/langgenius/dify/pull/40652
* fix(agent): normalize plugin provider identities by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40619
* fix: prevent cross-tab chat conversation switching by @iamjoel in https://github.com/langgenius/dify/pull/40709
* fix(dify-ui): refine pagination navigation semantics by @lyzno1 in https://github.com/langgenius/dify/pull/40723
* refactor(ui): enforce single-choice segmented controls by @lyzno1 in https://github.com/langgenius/dify/pull/40726
* refactor: generalize hosted model quota lifecycle by @linw1995 in https://github.com/langgenius/dify/pull/40722
* fix(agent): meter internal LLM calls through API by @zyssyz123 in https://github.com/langgenius/dify/pull/40613
* fix(api): chain original exception in 13 except blocks per PEP 3134 by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/40738
* fix(api): remove unsafe Bedrock test endpoint by @WH-2099 in https://github.com/langgenius/dify/pull/40742
* refactor(web): clarify model selector trigger ownership by @lyzno1 in https://github.com/langgenius/dify/pull/40732
* chore(deps): bump wandb to 0.28.2 (go-git, grpc, x/text, Go stdlib CVEs) by @GareArc in https://github.com/langgenius/dify/pull/40753
* feat(web): embed marketplace in integration categories by @Jingyi-Dify in https://github.com/langgenius/dify/pull/40744
* refactor: resolve completion model via manager by @linw1995 in https://github.com/langgenius/dify/pull/40756
* fix: add semantic document titles across pages by @iamjoel in https://github.com/langgenius/dify/pull/40396
* docs(web): consolidate maintainer guidance by @lyzno1 in https://github.com/langgenius/dify/pull/40758
* fix(api): enforce edit and RBAC permissions on dataset API key GET endpoint (#40740) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/40743
* fix(agent): authenticate agent control plane by @WH-2099 in https://github.com/langgenius/dify/pull/40737
* chore: upgrade Vite+ to 0.2.9 by @lyzno1 in https://github.com/langgenius/dify/pull/40762
* fix(web): skip lifecycle scripts in Docker install by @lyzno1 in https://github.com/langgenius/dify/pull/40763
* test: migrate app service accounts and commit failures to real ORM by @asukaminato0721 in https://github.com/langgenius/dify/pull/40655
* test: migrate annotation controller ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40643
* test: migrate load balancing account ORM model to real entity by @asukaminato0721 in https://github.com/langgenius/dify/pull/40644
* test: migrate expired log workflow ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40645
* test: migrate agent drive end-user ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40654
* test: migrate trace workflow run ORM model to real entity by @asukaminato0721 in https://github.com/langgenius/dify/pull/40642
* test: migrate OpenAPI and tool-file ORM entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40637
* test: migrate web controller identity ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40639
* feat(workflow-generator): prefer installed tools by @crazywoola in https://github.com/langgenius/dify/pull/40611
* test: migrate workflow event ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40634
* chore: update workspace dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/40764
* chore(deps): bump pydantic-ai-slim from 1.102.0 to 1.106.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/40736
* chore: reopen the education application flow by @iamjoel in https://github.com/langgenius/dify/pull/40760
* fix(dify-agent): clarify shell working spaces by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40623
* fix: handle long text URLs in webscraper by @linw1995 in https://github.com/langgenius/dify/pull/40757
* fix: preserve file preview content type by @myshkin451 in https://github.com/langgenius/dify/pull/37211
* fix(dify-ui): refine segmented control focus feedback by @lyzno1 in https://github.com/langgenius/dify/pull/40769
* feat(dify-agent): expand and enforce agent run limits by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40641
* test: migrate account tenant ORM stand-ins to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40627
* test: migrate residual namespace ORM entities to real models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40633
* test: migrate controller identity ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40626
* test: migrate workflow tool users to SQLite ORM models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40628
* test: migrate RAG residual entities to real ORM models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40629
* fix(agent): return conflict for duplicate creation by @zyssyz123 in https://github.com/langgenius/dify/pull/40771
* fix: preserve successful last run status after page restore by @iamjoel in https://github.com/langgenius/dify/pull/40775
* fix(ci): align staged checks with Vite+ by @lyzno1 in https://github.com/langgenius/dify/pull/40774
* refactor(api): extract installed app definition queries by @hjlarry in https://github.com/langgenius/dify/pull/40462
* refactor(api): reuse app definition queries in web and service APIs by @hjlarry in https://github.com/langgenius/dify/pull/40463
* refactor(api): reuse app definition queries for app parameters by @hjlarry in https://github.com/langgenius/dify/pull/40465
* refactor(api): reuse app definition queries for service API info by @hjlarry in https://github.com/langgenius/dify/pull/40476
* fix(api): enforce RAG draft variable access boundaries by @WH-2099 in https://github.com/langgenius/dify/pull/40745
* fix: show accurate copy for agent run limit errors by @iamjoel in https://github.com/langgenius/dify/pull/40784
* feat(oauth): drive silent authorization from oauth_provider_apps.auto_authorize by @lin-snow in https://github.com/langgenius/dify/pull/40783
* fix(api): protect custom OAuth client deletion by @WH-2099 in https://github.com/langgenius/dify/pull/40786
* chore: dep inject for model in dataset document actions by @ddddajie in https://github.com/langgenius/dify/pull/40787
* fix(api): point SSRF-blocked error message at the correct dify issue by @chelsealong in https://github.com/langgenius/dify/pull/40605
* test(api): make session decorator path assertion platform-agnostic by @AlexMultiAgent in https://github.com/langgenius/dify/pull/39895
* refactor: add Mapped type annotations to model fields (#40373) by @mahbubsouad in https://github.com/langgenius/dify/pull/40380
* fix(api): protect workspace credential mutations by @WH-2099 in https://github.com/langgenius/dify/pull/40790
* fix(api): protect agent sandbox reads by @WH-2099 in https://github.com/langgenius/dify/pull/40794
* fix: reclaim conversation resources on deletion by @zyssyz123 in https://github.com/langgenius/dify/pull/40792
* fix: replace bare except with except Exception in core agent, storage and vector backends by @TrueFurina in https://github.com/langgenius/dify/pull/40801
* refactor(controllers/web): dep-inject payloads with @model_validate by @a-yeyang in https://github.com/langgenius/dify/pull/40796
* fix: narrow bare except in storage exists() to ClientError by @zrh805 in https://github.com/langgenius/dify/pull/40420
* fix(extension): chain original exception in APIBasedExtensionRequestor per PEP 3134 by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/40810
* test: migrate residual user ORM stand-ins to real models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40625
* test: migrate file controller ORM models to real entities by @asukaminato0721 in https://github.com/langgenius/dify/pull/40632
* test: migrate agent surface sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40602
* test: migrate annotation security sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40604
* test: migrate RAG processor residuals to SQLite ORM models by @asukaminato0721 in https://github.com/langgenius/dify/pull/40608
* docs: fix pipeline_generator docstrings to reference pipeline instead of app_model by @mesrop2008 in https://github.com/langgenius/dify/pull/40813
* test: migrate agent controller sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40600
* test: migrate residual controller sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40606
* fix(api): support audio/x-m4a for ASR by @CodeMak1r-zy in https://github.com/langgenius/dify/pull/40776
* fix(web): align combobox interaction semantics by @lyzno1 in https://github.com/langgenius/dify/pull/40826
* feat(plugin-auth): visibility picker for OAuth credentials by @ForeignKeyCN in https://github.com/langgenius/dify/pull/39840
* chore(deps): bump the github-actions-dependencies group with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/40834
* refactor(controllers/web): dep-inject login and forgot-password payloads (#36659) by @weike-zhang in https://github.com/langgenius/dify/pull/40856
* feat(ci): sync E2B template on release tag push by @MRZHUH in https://github.com/langgenius/dify/pull/40858
* fix(web): let multimodal guidance height fit content by @CyberPU2099 in https://github.com/langgenius/dify/pull/40846
* fix(web): update agent model request limit copy by @lyzno1 in https://github.com/langgenius/dify/pull/40863
* test(e2e): align agent model selector locators by @lyzno1 in https://github.com/langgenius/dify/pull/40862
* fix(workflow): preserve historical Agent node compatibility by @zyssyz123 in https://github.com/langgenius/dify/pull/40859
* fix(dify-agent): require E2B traffic authentication by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40871
* feat: create accounts with client IP by @linw1995 in https://github.com/langgenius/dify/pull/40875
* feat(dify-agent): add context-aware history compaction by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40872
* fix(dify-agent): preserve snapshots for failed and cancelled runs by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40876
* feat: dispatch New Agent Beta eligibility checks by @hjlarry in https://github.com/langgenius/dify/pull/40725
* fix(dify-agent): enforce short-lived Agent Stub authorization by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40884
* feat(dify-agent): enforce signed upload size limits by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40883
* test: migrate console conversation sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40528
* test: migrate controller auth wrapper sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40529
* test: migrate console app MCP sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40526
* test: migrate console workflow controller sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40527
* test: migrate Service API dataset document sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40519
* test: migrate Service API dataset metadata sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40518
* test: migrate RAG pipeline sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40511
* test: migrate RAG indexing sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40513
* test: isolate config inputs from process environment by @asukaminato0721 in https://github.com/langgenius/dify/pull/40847
* fix: suggest deepseek-v4-flash for Agent mode by @BlessedWithLuck1105 in https://github.com/langgenius/dify/pull/40852
* refactor(dify-ui): expose autocomplete popup anatomy by @lyzno1 in https://github.com/langgenius/dify/pull/40895
* feat(dify-ui): add input group composition by @lyzno1 in https://github.com/langgenius/dify/pull/40890
* fix(api): repair two malformed logger format strings by @amogh-nagri-11 in https://github.com/langgenius/dify/pull/40901
* fix(api): clear stale cancellation signals when resuming a paused workflow by @mesrop2008 in https://github.com/langgenius/dify/pull/40905
* fix(ci): use default Ubuntu mirror for Playwright by @lyzno1 in https://github.com/langgenius/dify/pull/40909
* fix(dify-agent): use E2B traffic access header by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40891
* fix(dify-agent): isolate cancellation intent observer by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40896
* chore(dify-agent): disable Landlock for E2B templates by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40892
* fix(api): bound connect phase to 5.0s in two api/core/ outbound timeouts by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/40807
* refactor(web): standardize app log search inputs by @lyzno1 in https://github.com/langgenius/dify/pull/40912
* refactor(web): standardize dataset search inputs by @lyzno1 in https://github.com/langgenius/dify/pull/40913
* refactor(web): standardize label search inputs by @lyzno1 in https://github.com/langgenius/dify/pull/40914
* test(dify-ui): stabilize dropdown menu story by @lyzno1 in https://github.com/langgenius/dify/pull/40916
* fix: accept legacy plugin daemon list responses by @Zenine in https://github.com/langgenius/dify/pull/38265
* refactor(api): decouple data source API key auth flow by @41tair in https://github.com/langgenius/dify/pull/40452
* refactor(api): extract account activation application service by @41tair in https://github.com/langgenius/dify/pull/40421
* fix: preserve Agent tool-generated file outputs by @zyssyz123 in https://github.com/langgenius/dify/pull/40917
* refactor(web): compose search prefixes with input group by @lyzno1 in https://github.com/langgenius/dify/pull/40922
* chore(deps): bump sqlparse from 0.5.4 to 0.6.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/40904
* refactor(models): dep-inject Session on remaining @property accessors by @a-yeyang in https://github.com/langgenius/dify/pull/40797
* refactor(web): migrate retry units to number field by @lyzno1 in https://github.com/langgenius/dify/pull/40923
* refactor(web): migrate clearable search inputs by @lyzno1 in https://github.com/langgenius/dify/pull/40924
* refactor(web): remove legacy tag component by @lyzno1 in https://github.com/langgenius/dify/pull/40928
* fix(ci): align Oxlint suppression formatting by @lyzno1 in https://github.com/langgenius/dify/pull/40934
* refactor(web): remove legacy embedded API docs by @lyzno1 in https://github.com/langgenius/dify/pull/40929
* test: use typed config overrides in service coverage by @asukaminato0721 in https://github.com/langgenius/dify/pull/40848
* test: keep integration config overrides typed by @asukaminato0721 in https://github.com/langgenius/dify/pull/40850
* test: centralize enterprise config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40853
* test: scope plugin and datasource config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40854
* test: eliminate remaining whole config mocks by @asukaminato0721 in https://github.com/langgenius/dify/pull/40855
* test: migrate app model sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40530
* test: migrate residual model sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40531
* test: migrate service boundary sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40533
* test: migrate telemetry and core entity ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40574
* test: migrate residual service and task ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40576
* test: migrate residual controller sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40579
* test: migrate agent runtime sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40587
* test: migrate app runtime sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40590
* fix(web): gate system features requests by connection by @lyzno1 in https://github.com/langgenius/dify/pull/40939
* test: migrate dataset service sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40534
* fix(agent): retain usage for incomplete runs by @zyssyz123 in https://github.com/langgenius/dify/pull/40937
* chore(web): align browser support targets by @lyzno1 in https://github.com/langgenius/dify/pull/40938
* fix(web): remove only-me resource access option by @WTW0313 in https://github.com/langgenius/dify/pull/40956
* refactor: clean away unnecessary-type-conversion (bool/str no-op wrappers) by @akamabu in https://github.com/langgenius/dify/pull/40822
* fix: refine access point copy and remove undeploy state warning by @RiskeyL in https://github.com/langgenius/dify/pull/40886
* refactor(web): simplify debounced filter state by @lyzno1 in https://github.com/langgenius/dify/pull/40951
* refactor(web): compose reset password fields by @lyzno1 in https://github.com/langgenius/dify/pull/40952
* refactor(web): migrate HTTP timeout inputs by @lyzno1 in https://github.com/langgenius/dify/pull/40953
* refactor(agent): remove Agent Drive by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40887
* fix(api): enforce edit and RBAC permissions on model provider credential GET endpoints (#40899) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/40900
* fix(auth): harden email code login verification by @zyssyz123 in https://github.com/langgenius/dify/pull/40960
* refactor(api): reuse app definition queries for service API site by @hjlarry in https://github.com/langgenius/dify/pull/40795
* fix(agent): resolve suggested questions from runtime config by @zyssyz123 in https://github.com/langgenius/dify/pull/40963
* fix(ui): stabilize toast stack interactions by @lyzno1 in https://github.com/langgenius/dify/pull/40970
* refactor(api): extract web app access queries by @hjlarry in https://github.com/langgenius/dify/pull/40482
* refactor(api): snapshot explore banner feature flag by @hjlarry in https://github.com/langgenius/dify/pull/40555
* fix(dify-agent): persist interrupted run history by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40972
* perf(dify-agent): parallelize Agent Stub config pulls by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40973
* fix(web): prevent workflow errors after app deletion by @lyzno1 in https://github.com/langgenius/dify/pull/40977
* fix(ui): align toast swipe direction with viewport by @lyzno1 in https://github.com/langgenius/dify/pull/40980
* refactor(api): reuse web app access queries for permissions by @hjlarry in https://github.com/langgenius/dify/pull/40984
* fix(ci): run Playwright E2E on GitHub Ubuntu by @WH-2099 in https://github.com/langgenius/dify/pull/40986
* fix(logstore): normalize workflow timestamps to naive UTC by @amogh-nagri-11 in https://github.com/langgenius/dify/pull/40947
* fix(api): enforce dataset document ownership by @linw1995 in https://github.com/langgenius/dify/pull/40989
* refactor(web): migrate signup email field by @lyzno1 in https://github.com/langgenius/dify/pull/40990
* refactor(web): migrate signup password fields by @lyzno1 in https://github.com/langgenius/dify/pull/40991
* fix(web): redirect after deleting an agent by @lyzno1 in https://github.com/langgenius/dify/pull/40994
* ci(web): run browser tests on GitHub Ubuntu by @lyzno1 in https://github.com/langgenius/dify/pull/40995
* refactor(api): add account profile application service by @41tair in https://github.com/langgenius/dify/pull/40436
* refactor(api): extract web app runtime bootstrap by @hjlarry in https://github.com/langgenius/dify/pull/40949
* test: migrate document service sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40536
* test: migrate Explore controller sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40537
* test: migrate media and execution service sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40552
* test: migrate snippet service ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40567
* refactor(web): migrate install account fields by @lyzno1 in https://github.com/langgenius/dify/pull/40992
* refactor: consolidate frontend browser test infrastructure by @lyzno1 in https://github.com/langgenius/dify/pull/40997
* fix(web): clarify agent deletion consequences by @lyzno1 in https://github.com/langgenius/dify/pull/41002
* chore: inline custom ESLint rules by @hyoban in https://github.com/langgenius/dify/pull/41008
* fix(billing): remove misleading tax assurance by @lyzno1 in https://github.com/langgenius/dify/pull/41009
* fix(snippets): implement delete for published snippet workflow versions by @chelsealong in https://github.com/langgenius/dify/pull/41003
* fix(agent): complete ownership-aware deletion lifecycle by @BeautyyuYanli in https://github.com/langgenius/dify/pull/40888
* fix(api): handle suspended email domains by @linw1995 in https://github.com/langgenius/dify/pull/41004
* refactor(api): extract recommended app query service by @hjlarry in https://github.com/langgenius/dify/pull/40207
* fix(snippet): support snippet history version export by @FFXN in https://github.com/langgenius/dify/pull/41012
* fix(api): enforce admin and RBAC permissions on tool OAuth custom client GET endpoint (#40944) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/40945
* fix(dify-agent): adjust local sandbox home paths by @BeautyyuYanli in https://github.com/langgenius/dify/pull/41021
* fix(dify-agent): add reliable shellctl stdio mode by @BeautyyuYanli in https://github.com/langgenius/dify/pull/39997
* refactor(dify-agent): use Workspace as shell temp space by @BeautyyuYanli in https://github.com/langgenius/dify/pull/41023
* fix(agent): clean legacy Agent Soul files by @BeautyyuYanli in https://github.com/langgenius/dify/pull/41024
* fix(api): add missing admin and RBAC permission decorators to model credentials GET endpoints by @FasihUrRahman in https://github.com/langgenius/dify/pull/40962
* refactor(api): decouple console tag management by @fszcd in https://github.com/langgenius/dify/pull/40843
* refactor(api): isolate trial app usage writes by @hjlarry in https://github.com/langgenius/dify/pull/40208
* refactor(api): decouple recommended app runtime admission by @hjlarry in https://github.com/langgenius/dify/pull/40257
* refactor(api): replace legacy recommended app retrieval stack by @hjlarry in https://github.com/langgenius/dify/pull/40395
* feat: support ODT document extraction by @Zenine in https://github.com/langgenius/dify/pull/39973
* test: centralize typed runtime config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40857
* refactor(web): migrate conversation rename input by @lyzno1 in https://github.com/langgenius/dify/pull/41028
* refactor(web): migrate document rename input by @lyzno1 in https://github.com/langgenius/dify/pull/41029
* refactor(web): migrate empty dataset input by @lyzno1 in https://github.com/langgenius/dify/pull/41030
* fix: add MESSAGE_TRACE task on chat pipline error events by @hyhyf in https://github.com/langgenius/dify/pull/39129
* chore(deps): bump google-cloud-aiplatform from 1.160.0 to 1.164.0 in /api in the google group across 1 directory by @dependabot[bot] in https://github.com/langgenius/dify/pull/39249
* chore(deps): bump the storage group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/40393
* fix: when rbac enabled is true, not check_dataset_permission by @fatelei in https://github.com/langgenius/dify/pull/41022
* fix(agent): align Binding file upload timeouts by @zhaohao1004 in https://github.com/langgenius/dify/pull/41027
* fix(api): enforce app-scoped access on indirect resources by @WH-2099 in https://github.com/langgenius/dify/pull/40893
* fix(web): route enterprise documentation links by @hyoban in https://github.com/langgenius/dify/pull/40957
* fix(api): enforce edit and RBAC permissions on datasource credential …fix(api): enforce edit and RBAC permissions on datasource credential GET endpoint (#41040) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/41041
* fix(plugin): protect endpoint listings by @WH-2099 in https://github.com/langgenius/dify/pull/40897
* docs(dify-ui): establish documentation hierarchy by @lyzno1 in https://github.com/langgenius/dify/pull/41044
* refactor(dify-ui): expose slider anatomy by @lyzno1 in https://github.com/langgenius/dify/pull/41045
* fix(api): prevent dropped workflow_started events in Redis Streams by @zl86790 in https://github.com/langgenius/dify/pull/40964
* refactor(api): move account access behind application services by @41tair in https://github.com/langgenius/dify/pull/40437
* test: migrate annotation sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40504
* test: add tmp_path type by @asukaminato0721 in https://github.com/langgenius/dify/pull/40724
* test: migrate vector space admission sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40640
* test: migrate Agent App session store to SQLite ORM by @asukaminato0721 in https://github.com/langgenius/dify/pull/40638
* test: migrate remaining controller sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40538
* test: migrate console app sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40559
* fix: merge system messages and place them first to comply with Qwen/v… by @potoior in https://github.com/langgenius/dify/pull/39136
* test: migrate auth and access controller ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40572
* refactor(web): migrate human input timeout field by @lyzno1 in https://github.com/langgenius/dify/pull/41050
* refactor(web): migrate subscription confirmation input by @lyzno1 in https://github.com/langgenius/dify/pull/41051
* refactor(web): migrate external API input fields by @lyzno1 in https://github.com/langgenius/dify/pull/41052
* test: migrate console agent skill ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40570
* test: migrate console dataset segment sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40515
* test: migrate residual app generator ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40580
* refactor(api): move account lifecycle into application services by @41tair in https://github.com/langgenius/dify/pull/40438
* docs: add Sealos deployment option by @yangchuansheng in https://github.com/langgenius/dify/pull/41026
* refactor(api): extract change email state machine by @41tair in https://github.com/langgenius/dify/pull/40439
* refactor(api): finish account controller application boundary by @41tair in https://github.com/langgenius/dify/pull/40440
* fix(web): prevent Safari clipping tour recovery prompt by @lyzno1 in https://github.com/langgenius/dify/pull/41060
* fix: add missing metrics back and enhance typing by @wylswz in https://github.com/langgenius/dify/pull/40935
* refactor(dify-ui): compose dialog close controls by @lyzno1 in https://github.com/langgenius/dify/pull/41064
* fix(vdb): add document_id keyword mapping and fix VectorType in elasticsearch-ja adapter by @loulanyue in https://github.com/langgenius/dify/pull/40400
* fix(web): prevent signin page content from overflowing on mobile by @gegemeimingzi in https://github.com/langgenius/dify/pull/40921
* feat: Enterprise Home Snapshot — runtime endpoints and dify-agent adapter by @GareArc in https://github.com/langgenius/dify/pull/40996
* fix(api): attach exc_info=True to logger.warning sites that drop the traceback by @mesrop2008 in https://github.com/langgenius/dify/pull/41068
* feat(trace): add provider-neutral unified tracing by @Blackoutta in https://github.com/langgenius/dify/pull/39451
* refactor(agent): simplify Agent v2 output contract by @BeautyyuYanli in https://github.com/langgenius/dify/pull/41062
* refactor(dify-ui): simplify popover content API by @lyzno1 in https://github.com/langgenius/dify/pull/41069
* fix(api): enforce admin and RBAC permissions on data source integrates GET endpoint (#41079) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/41080
* refactor(dify-ui): simplify overlay content APIs by @lyzno1 in https://github.com/langgenius/dify/pull/41098
* fix(api): enforce admin and RBAC permissions on default model and provider models GET endpoints (#41099) by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/41100
* refactor(dify-ui): rename radio family entrypoint by @lyzno1 in https://github.com/langgenius/dify/pull/41104
* fix(agent-v2): prevent workflow refresh render loop by @lyzno1 in https://github.com/langgenius/dify/pull/41105
* docs: fix dead anchors in localized READMEs and stale dify-agent link by @simpleqt in https://github.com/langgenius/dify/pull/41101
* refactor(api): standardize console billing portal errors by @hjlarry in https://github.com/langgenius/dify/pull/41055
* fix(agent): avoid empty Bedrock schema fields by @ump45nose in https://github.com/langgenius/dify/pull/40443
* refactor(api): standardize session factory wiring by @hjlarry in https://github.com/langgenius/dify/pull/41085
* fix(workflow): honor stop between non-streaming nodes by @leilei3167 in https://github.com/langgenius/dify/pull/41090
* refactor(web): use shared session factory for JWT decoding by @XIIRUAN in https://github.com/langgenius/dify/pull/41007
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/41120
* refactor: pass session to workflow comment account accessors by @ddddajie in https://github.com/langgenius/dify/pull/41117
* chore(deps): bump gunicorn from 26.0.0 to 26.1.0 in /api in the flask group by @dependabot[bot] in https://github.com/langgenius/dify/pull/41118
* fix: fall back to the batch API when the global plugin manifest is empty by @BenjaminX in https://github.com/langgenius/dify/pull/41107
* fix(tts): propagate and validate actual audio MIME by @AsperforMias in https://github.com/langgenius/dify/pull/41043
* fix: stabilize the agent tool picker placement by @iamjoel in https://github.com/langgenius/dify/pull/41132
* test: migrate trigger and webhook sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40594
* refactor(web): migrate duplicate app input form by @lyzno1 in https://github.com/langgenius/dify/pull/41127
* refactor(web): migrate pipeline template input form by @lyzno1 in https://github.com/langgenius/dify/pull/41128
* refactor(web): migrate pipeline publishing input form by @lyzno1 in https://github.com/langgenius/dify/pull/41129
* chore: Replace star image with new asset link by @crazywoola in https://github.com/langgenius/dify/pull/41136
* feat: support agent skill by @fatelei in https://github.com/langgenius/dify/pull/39675
* fix: fix upload for plugin by @FFXN in https://github.com/langgenius/dify/pull/41133
* fix(api): scope hosted credits by tenant plan by @linw1995 in https://github.com/langgenius/dify/pull/41131
* fix: show checklist errors for inline agents without models by @iamjoel in https://github.com/langgenius/dify/pull/41146
* chore(deps): upgrade pnpm workspace dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/41138
* fix(web): align agent v2 monitoring copy by @lyzno1 in https://github.com/langgenius/dify/pull/41150
* fix: align duplicate agent name behavior with agent forms by @iamjoel in https://github.com/langgenius/dify/pull/41156
* chore: show full agent save time on hover by @iamjoel in https://github.com/langgenius/dify/pull/41148
* fix(agent): allow saving model-less inline Agent drafts by @zyssyz123 in https://github.com/langgenius/dify/pull/41147
* chore(api): enforce backend layer boundaries by @laipz8200 in https://github.com/langgenius/dify/pull/41159
* fix(web): align agent v2 monitoring translations by @lyzno1 in https://github.com/langgenius/dify/pull/41161
* fix: keep home intro without banner by @lyzno1 in https://github.com/langgenius/dify/pull/41155
* fix: preserve agent task editor focus when inserting commands by @iamjoel in https://github.com/langgenius/dify/pull/41166
* feat(web): enhance Go to Anything navigation and discovery by @crazywoola in https://github.com/langgenius/dify/pull/41160
* ci: add HITL IM test environment deployment by @QuantumGhost in https://github.com/langgenius/dify/pull/41171
* fix(api): respect configured model params in prompt generator by @GareArc in https://github.com/langgenius/dify/pull/41165
* fix: align main navigation card grids by @lyzno1 in https://github.com/langgenius/dify/pull/41167
* test: remove obsolete integration coverage by @asukaminato0721 in https://github.com/langgenius/dify/pull/40704
* fix(api): attach exc_info=True to 11 logger.debug/info('...: %s', str(e)) sites — sibling of #41066 (DEBUG/INFO level) by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/41077
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/41173
* fix: keep pagination skeletons in app grid by @lyzno1 in https://github.com/langgenius/dify/pull/41175
* fix: refine agent configuration copy by @iamjoel in https://github.com/langgenius/dify/pull/41177
* fix: avoid copy-sensitive agent file toast assertion by @iamjoel in https://github.com/langgenius/dify/pull/41179
* fix: failed e2e test in agent caused by changed copywriting by @iamjoel in https://github.com/langgenius/dify/pull/41187
* fix(web): restore model selector popup spacing by @lyzno1 in https://github.com/langgenius/dify/pull/41190
* fix(web): refresh model provider version after update by @Jingyi-Dify in https://github.com/langgenius/dify/pull/41212
* chore(deps): bump boto3 from 1.43.71 to 1.43.76 in /api in the storage group by @dependabot[bot] in https://github.com/langgenius/dify/pull/41126
* refactor(api): complete account education boundary by @hjlarry in https://github.com/langgenius/dify/pull/41153
* fix(skills): align management UI accessibility and localization by @zxhlyh in https://github.com/langgenius/dify/pull/41180
* fix(model): re-sign bare/backticked tool file URLs in answer by @Taranum01 in https://github.com/langgenius/dify/pull/40799
* fix(types): replace any[] with ThoughtItem[] for agent_thoughts by @3ni8ma in https://github.com/langgenius/dify/pull/41141
* fix: address Agent UX feedback by @iamjoel in https://github.com/langgenius/dify/pull/41219
* perf(api): batch recommended app catalog lookups by @SCW5370 in https://github.com/langgenius/dify/pull/41218
* fix: enforce read-only agent resources in build mode by @iamjoel in https://github.com/langgenius/dify/pull/41220
* perf(agent): polling interval tuning by @wylswz in https://github.com/langgenius/dify/pull/41221
* perf(agent): exponential backoff in polling to prevent forking storm by @wylswz in https://github.com/langgenius/dify/pull/41222
* fix(docker): harden agent compose configuration by @BeautyyuYanli in https://github.com/langgenius/dify/pull/41065
* fix(web): stop digits rendering in the emoji font by @shaba in https://github.com/langgenius/dify/pull/41201
* test(cli): tsconfig gap by @GareArc in https://github.com/langgenius/dify/pull/41224
* fix: allow OAuth trigger builder verification without credentials by @hjlarry in https://github.com/langgenius/dify/pull/39199
* fix(cli): declare write effect for import and context-switch commands by @samzong in https://github.com/langgenius/dify/pull/41225
* feat(api): support New Agent Beta for inline Workflow agents by @hjlarry in https://github.com/langgenius/dify/pull/41215
* fix: fix skill display name rename conflict by @fatelei in https://github.com/langgenius/dify/pull/41229
* test(vdb): use real ORM models in provider tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/40687
* test: move pure integration cases to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/40705
* test: centralize app and account config overrides by @asukaminato0721 in https://github.com/langgenius/dify/pull/40860
* test: migrate step-by-step tour sessions to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40636
* test: migrate RAG variable controller sessions and ORM models to SQLite by @asukaminato0721 in https://github.com/langgenius/dify/pull/40609
* fix(api): enforce APP_EDIT RBAC permission on MCP server refresh endpoint by @loulanyue in https://github.com/langgenius/dify/pull/41235
* fix: prevent sidebar footer actions from triggering hover preview by @iamjoel in https://github.com/langgenius/dify/pull/41230
* fix(skills): align Japanese Skills page title by @zxhlyh in https://github.com/langgenius/dify/pull/41242
* fix: show a not-allowed cursor for the prompt editor in build mode by @iamjoel in https://github.com/langgenius/dify/pull/41243
* feat: add skill enable feature switch by @fatelei in https://github.com/langgenius/dify/pull/41246
* fix(ui): add tabs panel focus treatment by @lyzno1 in https://github.com/langgenius/dify/pull/41231
* refactor(web): migrate pipeline DSL import form by @lyzno1 in https://github.com/langgenius/dify/pull/41232
* refactor(web): migrate dataset rename form by @lyzno1 in https://github.com/langgenius/dify/pull/41233
* feat(api): track credit usage contexts by @linw1995 in https://github.com/langgenius/dify/pull/41181
* feat: hide add library skill in agent ui by @fatelei in https://github.com/langgenius/dify/pull/41250
* chore: bump version to 1.17.0 by @wylswz in https://github.com/langgenius/dify/pull/41247

## New Contributors
* @zyz619963502zyz made their first contribution in https://github.com/langgenius/dify/pull/39695
* @Souravrajvi0 made their first contribution in https://github.com/langgenius/dify/pull/39708
* @Success6666 made their first contribution in https://github.com/langgenius/dify/pull/39485
* @loulanyue made their first contribution in https://github.com/langgenius/dify/pull/39754
* @xiaoyaoqilan made their first contribution in https://github.com/langgenius/dify/pull/39808
* @MannXo made their first contribution in https://github.com/langgenius/dify/pull/39819
* @iridescentWen made their first contribution in https://github.com/langgenius/dify/pull/39838
* @superdiaodiao made their first contribution in https://github.com/langgenius/dify/pull/39831
* @HassanRady made their first contribution in https://github.com/langgenius/dify/pull/39899
* @HandSonic made their first contribution in https://github.com/langgenius/dify/pull/39885
* @pineapple880066 made their first contribution in https://github.com/langgenius/dify/pull/40034
* @CodeWarriors0 made their first contribution in https://github.com/langgenius/dify/pull/40055
* @123liuziming made their first contribution in https://github.com/langgenius/dify/pull/39339
* @eldardada made their first contribution in https://github.com/langgenius/dify/pull/37841
* @bounkirdni-2025 made their first contribution in https://github.com/langgenius/dify/pull/39474
* @bkidy made their first contribution in https://github.com/langgenius/dify/pull/38112
* @Mubelotix made their first contribution in https://github.com/langgenius/dify/pull/40115
* @chelsealong made their first contribution in https://github.com/langgenius/dify/pull/40171
* @medisean made their first contribution in https://github.com/langgenius/dify/pull/40189
* @zyqzyq made their first contribution in https://github.com/langgenius/dify/pull/36163
* @tusharmotwani1718 made their first contribution in https://github.com/langgenius/dify/pull/40444
* @kanson1996 made their first contribution in https://github.com/langgenius/dify/pull/39155
* @zrh805 made their first contribution in https://github.com/langgenius/dify/pull/40408
* @typenoob made their first contribution in https://github.com/langgenius/dify/pull/40480
* @ddddajie made their first contribution in https://github.com/langgenius/dify/pull/40787
* @AlexMultiAgent made their first contribution in https://github.com/langgenius/dify/pull/39895
* @mahbubsouad made their first contribution in https://github.com/langgenius/dify/pull/40380
* @TrueFurina made their first contribution in https://github.com/langgenius/dify/pull/40801
* @a-yeyang made their first contribution in https://github.com/langgenius/dify/pull/40796
* @mesrop2008 made their first contribution in https://github.com/langgenius/dify/pull/40813
* @CodeMak1r-zy made their first contribution in https://github.com/langgenius/dify/pull/40776
* @weike-zhang made their first contribution in https://github.com/langgenius/dify/pull/40856
* @BlessedWithLuck1105 made their first contribution in https://github.com/langgenius/dify/pull/40852
* @amogh-nagri-11 made their first contribution in https://github.com/langgenius/dify/pull/40901
* @Zenine made their first contribution in https://github.com/langgenius/dify/pull/38265
* @akamabu made their first contribution in https://github.com/langgenius/dify/pull/40822
* @FasihUrRahman made their first contribution in https://github.com/langgenius/dify/pull/40962
* @fszcd made their first contribution in https://github.com/langgenius/dify/pull/40843
* @hyhyf made their first contribution in https://github.com/langgenius/dify/pull/39129
* @zl86790 made their first contribution in https://github.com/langgenius/dify/pull/40964
* @potoior made their first contribution in https://github.com/langgenius/dify/pull/39136
* @yangchuansheng made their first contribution in https://github.com/langgenius/dify/pull/41026
* @gegemeimingzi made their first contribution in https://github.com/langgenius/dify/pull/40921
* @simpleqt made their first contribution in https://github.com/langgenius/dify/pull/41101
* @ump45nose made their first contribution in https://github.com/langgenius/dify/pull/40443
* @leilei3167 made their first contribution in https://github.com/langgenius/dify/pull/41090
* @XIIRUAN made their first contribution in https://github.com/langgenius/dify/pull/41007
* @3ni8ma made their first contribution in https://github.com/langgenius/dify/pull/41141
* @SCW5370 made their first contribution in https://github.com/langgenius/dify/pull/41218
* @shaba made their first contribution in https://github.com/langgenius/dify/pull/41201

**Full Changelog**: https://github.com/langgenius/dify/compare/1.16.1...1.17.0

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.17.0` · 2026-08-25 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
