---
title: "dify 1.16.1"
project: "dify"
repo: "langgenius/dify"
tag: "1.16.1"
version: "1.16.1"
published: "2026-07-28"
type: "patch"
lang: "en"
summary: "Tool Multi-Select Input"
---

# dify 1.16.1

## What's Changed

### New Features
**Tool Multi-Select Input**
- Workflow tool nodes now support multi-select dropdown inputs, allowing users to choose multiple values from a predefined list when configuring tool parameters. (#39346)

**Workflow Node Locator**
- You can now click a node_id in workflow run logs or error messages to locate and highlight the corresponding node in the workflow editor canvas. (#38187)

**Workflow Block Selector Improvements**
- The block selector panel now features improved keyboard navigation, category previews, and a more intuitive search experience when adding nodes to workflows. (#39212)

**Export Agent DSL from Sidebar**
- Agent apps can now be exported as DSL YAML directly from the app sidebar menu, making it easy to back up or version-control agent configurations. (#39299)

**Knowledge Tracing**
- Added more observability traces to knowledge/RAG document processing operations, improving visibility into indexing pipelines. (#38959)


---

### Bug Fixes

**Workflow & Collaboration**
- Fixed hidden-tab collaboration leader saving stale drafts when the tab is inactive (#38997)
- Fixed unsaved edits being dropped when collaboration never connects (#39579)
- Preserved latest collaboration session after reconnection (#39646)
- Fixed false draft save error during Strict Mode initialization (#39353)
- Show persistent error notification when workflow draft save fails (#39293)
- Wait for workflow worker threads to finish before Celery tasks complete, preventing orphaned executions (#39614)
- Lazy-load Loro collaboration runtime to reduce initial bundle size (#39631)
- Don't open node settings panel when clicking a node in comment mode (#39500)
- Don't close active comment panel when a different comment is resolved (#39491)

**RAG & Knowledge**
- Fixed document cleaner stripping valid characters ï (U+00EF), ¿ (U+00BF), ¾ (U+00BE) (#39215)
- Preserved spaces during recursive text splitting (#39498)
- Used `flush()` instead of `commit()` in dataset service to preserve caller transaction boundaries (#39223)
- Sent valid body in external knowledge validation probe (#39410)

**Agent**
- Fixed agent preview: start new Preview conversations without inheriting an old ID (#39463)
- Fixed agent chat input being replaced when conversation history updates (#39289)
- Preserved complete model usage pricing in agent logs (#39201)
- Show workflow node runs in agent execution logs (#39471)
- Include workflow runs in agent monitoring stats (#39354)
- Block unpublished agents from being used in workflows (#39532)
- Prevent agent preview actions from being clipped (#39510)
- Prevent build reset from clearing preview chat history (#39490)
- Fixed agent build draft UI flashing during apply (#39642)

**Web App & UI**
- Fixed webapp JWT expiration time being incorrectly set (#39537)
- Fixed TTS playback in Safari and Firefox (#39444)
- Fixed clipboard writes failing in embedded apps (#39511)
- Fixed text generation web app showing infinite loading after timeout (#39268)
- Fixed chat not passing document if model doesn't support vision (#39461)
- Stopped chunk length/overlap inputs collapsing to unusable width in narrow containers (#39600)
- Fixed search hotkey hydration mismatch (#39574)
- Improved DSL import/export dialog states (#39432, #39409)
- Fixed basePath doubling in auth refresh redirects (#39273)
- Show unavailable state for disabled Web Apps (#39392)
- Fixed permission selector semantics (#39269)
- Fixed customization page horizontal overflow (#39557)

**API & Backend**
- Fixed MCP tool `output_schema` being treated as required when it's optional (#39453)
- Honored array-element limit and byte budget for `list[File]` in VariableTruncator (#39220)
- Prevented identity logging deadlock (#39449)
- Rejected `host:port`-shaped `PLUGIN_REMOTE_INSTALL_PORT` values with an actionable hint (#39329)
- Fixed `PaginatedResult.pages` returning 1 instead of 0 for empty result sets (#39229)
- Used resource tenant for draft variable files (#39307)
- Scoped HITL snapshot message lookup to utilize database index (#39351)
- Returned 400 instead of 500 when `file` field is missing from audio-to-text endpoints (#39303, #39322)
- Fixed tool_meta missing `tool_provider_type` during tool execution (#39513)
- Applied configured timeout to enterprise inner API requests (#39335)
- Returned disabled auto-upgrade settings when strategy is missing (#39494)
- Enforced tool provider type contracts (#39380)
- Fixed WaterCrawl website crawler handling non-JSON error responses (#37514)
- Fixed can't create chat app when tenant default model schema errors (#39266)

---
### Security Enhancements

- The Agent local sandbox now runs behind a dedicated Squid forward proxy with strict ACL rules, preventing the sandbox from reaching internal services directly. Only the `/files/` endpoint on the API and `/agent-stub/` on agent_backend are permitted, both protected with short-lived access tokens. This significantly reduces the blast radius of arbitrary code execution in the agent sandbox. (#39544)
- Communication between the Dify API and the agent backend now uses token-based authentication via `DIFY_AGENT_API_TOKEN` / `AGENT_BACKEND_API_TOKEN`, hardening the internal service boundary. (#39622)
- Switched Jinja2 template rendering to use `SandboxedEnvironment`, preventing template injection attacks in workflow code nodes (#39609)
- Patched React Server Components DoS vulnerability (#39539)
- Used `re.fullmatch` in email validator to reject trailing newlines, preventing bypass attacks (#39320)
- Validated account status before accepting workspace invitations (#39438)

---

### Performance

- **Lightweight recent apps endpoint** — New `GET /console/api/apps/recent` endpoint reduces the home page "Continue Work" section latency by ~69% (3.2× faster), cutting SQL queries from 19+ to 1 projection SELECT and response size by ~50% (#39625)
- **Lazy-load Home creation modals** — Deferred loading of creation modal code until interaction, reducing initial JavaScript bundle (#39634)

---

### Improvements

- Made agent composer save and publish state consistent (#39637)
- Simplified Dify logo theming (#39580)
- Improved workflow block selector UI (#39377)
- Improved web accessibility semantics (#39505)
- Nodes are no longer draggable when previewing a workflow (#39131)
- Display non-LLM settings in integration tool details (#39295)

---

## Environment Variable Changes

### New Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DIFY_AGENT_API_TOKEN` | `dify-agent-run-token-for-dev-only` | Shared bearer token for API → agent_backend authentication. **Change this in production.** |
| `AGENT_BACKEND_API_TOKEN` | `dify-agent-run-token-for-dev-only` | Same token on the agent backend side. Must match `DIFY_AGENT_API_TOKEN`. |
| `PLUGIN_MODEL_PROVIDERS_CACHE_ENABLED` | `true` | Set to `false` if plugins are installed externally and the cache cannot be invalidated. |

> [!IMPORTANT]
> `DIFY_AGENT_API_TOKEN` is a **new required variable** for secure communication between the Dify API and agent backend. The default value (`dify-agent-run-token-for-dev-only`) is insecure and **must be replaced in production**. Generate one with:
> ```bash
> python -c 'import secrets; print(secrets.token_urlsafe(32))'
> ```
> Set the same value as `AGENT_BACKEND_API_TOKEN` on the agent backend side.

### Docker Compose Changes

- **Agent sandbox network isolation**: `local_sandbox` is moved off the `default` network to dedicated `agent_sandbox_network` + `local_sandbox_proxy_network`. A new `agent_ssrf_proxy` service (Squid) is added.
- **Bearer auth**: `AGENT_BACKEND_API_TOKEN` / `DIFY_AGENT_API_TOKEN` are now passed to `api`, `worker`, and `agent_backend` services.
- Image tags updated to `1.16.1`.

---

## Database Migrations

This release includes **4 new migrations**:

1. `2026_07_15_1600-3c9f8e2a1d7b_add_workflow_run_archive_bundle_cursor_indexes.py` — Add indexes to `workflow_run_archive_bundles` (concurrent on PostgreSQL)
2. `2026_06_29_1200-b8c9d0e1f2a3_add_step_by_step_tour_state.py` — Create `account_step_by_step_tour_states` table
3. `2026_07_22_1500-d2825e7b9c10_scope_agent_debug_conversations.py` — Add `draft_type` column to `agent_debug_conversations` and update unique constraint
4. `2026_07_23_1200-6f5a9c2d8e1b_add_telemetry_fields_to_dify_setups.py` — Add telemetry fields (`instance_id`, `install_reported_at`, `last_heartbeat_at`) to `dify_setups`

All migrations are additive (new tables, columns, indexes) and are safe to run without downtime.

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

### Docker Compose (Recommended)

```bash
cd docker
docker compose down
git pull origin main
docker compose pull
docker compose up -d
```

The database migrations will run automatically on startup.

> [!IMPORTANT]
> Review the new `DIFY_AGENT_API_TOKEN` variable in `.env`. The default value is insecure — generate a secure token for production:
> ```bash
> python -c 'import secrets; print(secrets.token_urlsafe(32))'
> ```

### Source Code

```bash
git pull origin main
cd api
flask db upgrade
```

---

## What's Changed
* refactor(web): use generated dataset card queries by @lyzno1 in https://github.com/langgenius/dify/pull/39203
* refactor(web): use generated OAuth query options by @lyzno1 in https://github.com/langgenius/dify/pull/39204
* refactor(web): align integrations sidebar components by @lyzno1 in https://github.com/langgenius/dify/pull/39202
* feat(workflow): improve block selector navigation and previews by @lyzno1 in https://github.com/langgenius/dify/pull/39212
* fix(dataset_service): use flush() instead of commit() to preserve caller transaction by @sergioperezcheco in https://github.com/langgenius/dify/pull/39223
* ci: route default Depot jobs to 4-core runners by @lyzno1 in https://github.com/langgenius/dify/pull/39277
* chore: the node should not draggable when preview a workflow by @hjlarry in https://github.com/langgenius/dify/pull/39131
* test(web): align test state boundaries by @lyzno1 in https://github.com/langgenius/dify/pull/39239
* refactor(web): avoid setState in website crawler effects by @wanxiankai in https://github.com/langgenius/dify/pull/39237
* fix: text generation web app keeps loading after timeout by @iamjoel in https://github.com/langgenius/dify/pull/39268
* refactor(web): avoid direct setState in effect in jina reader crawler (#25194) by @pepepeboom in https://github.com/langgenius/dify/pull/39216
* fix(web): restore permission selector semantics by @lyzno1 in https://github.com/langgenius/dify/pull/39269
* chore: bump the github-actions-dependencies group with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/39247
* fix: can't create chat app when get tenant default model schema error by @hjlarry in https://github.com/langgenius/dify/pull/39266
* fix: prevent hidden-tab collaboration leader from saving stale drafts by @Kevin9703 in https://github.com/langgenius/dify/pull/38997
* fix(api, web): scope trial app file uploads to the app tenant by @linw1995 in https://github.com/langgenius/dify/pull/39149
* refactor: use catalog for workflow archive maintenance by @zhaohao1004 in https://github.com/langgenius/dify/pull/39001
* fix(agent): preserve complete model usage pricing by @zyssyz123 in https://github.com/langgenius/dify/pull/39201
* feat(web): add webapp access control to agent access point by @GareArc in https://github.com/langgenius/dify/pull/39285
* fix: the input of  agent chat would be replaced if conversation history updated by @iamjoel in https://github.com/langgenius/dify/pull/39289
* feat(dataset): proxy KnowledgeFS Console requests by @hyoban in https://github.com/langgenius/dify/pull/39158
* docs: refine frontend testing guidance by @lyzno1 in https://github.com/langgenius/dify/pull/39290
* chore(deps): update pnpm and workspace dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/39292
* fix: show persistent error when workflow draft save fails by @iamjoel in https://github.com/langgenius/dify/pull/39293
* feat(web): add step-by-step tour shell by @Jingyi-Dify in https://github.com/langgenius/dify/pull/38785
* chore: display non-LLM settings in integration tool details by @iamjoel in https://github.com/langgenius/dify/pull/39295
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/39296
* revert(ci): restore default Depot runners by @lyzno1 in https://github.com/langgenius/dify/pull/39297
* test: use SQLite sessions in unit misc by @asukaminato0721 in https://github.com/langgenius/dify/pull/39123
* test: use SQLite sessions in unit misc by @asukaminato0721 in https://github.com/langgenius/dify/pull/39121
* test: use SQLite sessions in unit misc by @asukaminato0721 in https://github.com/langgenius/dify/pull/39122
* feat: support export agent dsl in sidebar by @iamjoel in https://github.com/langgenius/dify/pull/39299
* fix(web): stop doubling basePath in auth refresh redirects by @sergioperezcheco in https://github.com/langgenius/dify/pull/39273
* chore: when dataset permission is not all team, update rbac config to… by @fatelei in https://github.com/langgenius/dify/pull/39227
* refactor(web): remove basePath from hydration boundary by @lyzno1 in https://github.com/langgenius/dify/pull/39308
* ci: simplify test workflow execution by @WH-2099 in https://github.com/langgenius/dify/pull/39318
* test: use SQLite sessions in unit misc by @asukaminato0721 in https://github.com/langgenius/dify/pull/39120
* fix(api): use resource tenant for draft variable files by @linw1995 in https://github.com/langgenius/dify/pull/39307
* fix(configs): reject host:port-shaped PLUGIN_REMOTE_INSTALL_PORT with actionable hint by @sergioperezcheco in https://github.com/langgenius/dify/pull/39329
* fix: return 400 instead of 500 when file field is missing in audio-to-text endpoints (#39303) by @rkfshakti in https://github.com/langgenius/dify/pull/39322
* test: use SQLite sessions in unit misc by @asukaminato0721 in https://github.com/langgenius/dify/pull/39119
* test: use SQLite sessions in services workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/39116
* fix(api): keep workflow log archives owner-admin only by @lyzno1 in https://github.com/langgenius/dify/pull/39338
* fix(web): restore billing access boundary by @lyzno1 in https://github.com/langgenius/dify/pull/39343
* fix(api): return 400 instead of 500 when 'file' is missing from trial-app audio-to-text by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/39305
* refactor(web): remove permission catalog service hooks by @lyzno1 in https://github.com/langgenius/dify/pull/39342
* fix(watercrawl): handle non-json error responses by @luochen211 in https://github.com/langgenius/dify/pull/37514
* fix(dev): use gevent WebSocket server for local API by @hjlarry in https://github.com/langgenius/dify/pull/39349
* fix: not support  jump to detail in marketplace by @iamjoel in https://github.com/langgenius/dify/pull/39347
* fix(workflow): avoid false draft save error during Strict Mode initia… by @hjlarry in https://github.com/langgenius/dify/pull/39353
* test: use sqlite3 session in test_account_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38751
* test: use SQLite sessions in services workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/39115
* test: use SQLite sessions in unit misc by @asukaminato0721 in https://github.com/langgenius/dify/pull/39118
* test: use sqlite3 session in test_built_in_retrieval by @asukaminato0721 in https://github.com/langgenius/dify/pull/38735
* test: use sqlite3 session in test_based_generate_task_pipeline by @asukaminato0721 in https://github.com/langgenius/dify/pull/38738
* test: use sqlite3 session in test_conversation_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38774
* test: move API token service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38918
* test: use sqlite3 session in test_accounts by @asukaminato0721 in https://github.com/langgenius/dify/pull/38752
* test: move app import API coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38920
* test: use sqlite3 session in test_database_retrieval by @asukaminato0721 in https://github.com/langgenius/dify/pull/38743
* test: use sqlite3 session in test_agent_app_parameters by @asukaminato0721 in https://github.com/langgenius/dify/pull/38759
* test: use sqlite3 session in test_workspace_account by @asukaminato0721 in https://github.com/langgenius/dify/pull/38757
* test: use sqlite3 session in test_tool_file_manager by @asukaminato0721 in https://github.com/langgenius/dify/pull/38771
* test: move human input delivery coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38926
* test: use sqlite3 session in test_build_from_mapping by @asukaminato0721 in https://github.com/langgenius/dify/pull/38769
* test: add SQLite session fixture for providers by @asukaminato0721 in https://github.com/langgenius/dify/pull/38982
* fix(agent): include workflow runs in monitoring stats by @zyssyz123 in https://github.com/langgenius/dify/pull/39354
* feat(webapp-access): add WEBAPP_PUBLIC_ACCESS_ENABLED toggle by @GareArc in https://github.com/langgenius/dify/pull/38567
* fix(api): scope HITL snapshot message lookup to utilize db index by @QuantumGhost in https://github.com/langgenius/dify/pull/39351
* fix: update the agent roster documentation link by @iamjoel in https://github.com/langgenius/dify/pull/39368
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/39362
* refactor(web): improve workflow block selector by @lyzno1 in https://github.com/langgenius/dify/pull/39377
* fix(api): PaginatedResult.pages should be 0 for an empty result set by @lntutor in https://github.com/langgenius/dify/pull/39229
* feat: add WebSocket support to dev proxy with cookie rewriting by @WTW0313 in https://github.com/langgenius/dify/pull/39370
* fix: enforce tool provider type contracts by @lyzno1 in https://github.com/langgenius/dify/pull/39380
* chore(deps): upgrade Next.js to 16.2.11 by @lyzno1 in https://github.com/langgenius/dify/pull/39384
* test: use SQLite sessions in services misc by @asukaminato0721 in https://github.com/langgenius/dify/pull/39114
* test: use SQLite sessions in services enterprise by @asukaminato0721 in https://github.com/langgenius/dify/pull/39113
* test: use SQLite sessions in services core by @asukaminato0721 in https://github.com/langgenius/dify/pull/39111
* test: use SQLite sessions in core workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/39109
* test: use sqlite3 session in test_auth_wraps by @asukaminato0721 in https://github.com/langgenius/dify/pull/38760
* docs: note minimum Docker Compose version by @zcxGGmu in https://github.com/langgenius/dify/pull/39374
* test: use sqlite3 session in test_human_input_forms by @asukaminato0721 in https://github.com/langgenius/dify/pull/38777
* test: move console OAuth coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38923
* fix: apply configured timeout to enterprise inner API requests by @GareArc in https://github.com/langgenius/dify/pull/39335
* fix(web): show unavailable state for disabled Web Apps by @lyzno1 in https://github.com/langgenius/dify/pull/39392
* fix(datasets): update empty state handling and permissions messaging by @WTW0313 in https://github.com/langgenius/dify/pull/39360
* chore: bump pyasn1 from 0.6.3 to 0.6.4 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/39390
* chore: bump setuptools from 82.0.1 to 83.0.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/39387
* chore: bump gitpython from 3.1.50 to 3.1.52 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/39389
* chore: bump google.golang.org/grpc from 1.82.0 to 1.82.1 in /dify-agent-runtime by @dependabot[bot] in https://github.com/langgenius/dify/pull/39386
* chore: bump pyasn1 from 0.6.3 to 0.6.4 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/39388
* test: use sqlite3 session in test_clear_free_plan_tenant_expired_logs by @asukaminato0721 in https://github.com/langgenius/dify/pull/38693
* chore: bump pillow from 12.2.0 to 12.3.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/39328
* test: use sqlite3 session in test_workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/38686
* test: use SQLite sessions in service API fixtures by @asukaminato0721 in https://github.com/langgenius/dify/pull/38784
* test: use sqlite3 session in test_export_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38718
* test: use sqlite3 session in test_generator_api_missing by @asukaminato0721 in https://github.com/langgenius/dify/pull/38719
* test: use sqlite3 session in test_app_runner_conversation_variables by @asukaminato0721 in https://github.com/langgenius/dify/pull/38687
* test: use sqlite3 session in test_model_config_api by @asukaminato0721 in https://github.com/langgenius/dify/pull/38675
* fix(e2e): align fixtures with generated contracts by @lyzno1 in https://github.com/langgenius/dify/pull/39394
* chore: clean up CODEOWNERS by @lyzno1 in https://github.com/langgenius/dify/pull/39398
* fix(oauth): reauth after accepting invitation by @linw1995 in https://github.com/langgenius/dify/pull/39366
* fix(ci): avoid duplicate post-merge e2e runs by @lyzno1 in https://github.com/langgenius/dify/pull/39401
* test: use sqlite3 session in test_base_app_runner by @asukaminato0721 in https://github.com/langgenius/dify/pull/38740
* fix(api,billing): invalidate vector space cache after cleanup by @linw1995 in https://github.com/langgenius/dify/pull/39404
* test(e2e): validate generated console contracts by @lyzno1 in https://github.com/langgenius/dify/pull/39400
* chore: Update permission tip across i18n locales by @WTW0313 in https://github.com/langgenius/dify/pull/39406
* test: use sqlite3 session in test_reset_encrypt_key_pair by @asukaminato0721 in https://github.com/langgenius/dify/pull/38673
* test: use sqlite3 session in test_rag_pipeline_workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/38676
* fix(agent): isolate build and preview chat conversations by @zyssyz123 in https://github.com/langgenius/dify/pull/39405
* test: use sqlite3 session in test_snippet_workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/38677
* test: use sqlite3 session in test_snippet_workflow_draft_variable by @asukaminato0721 in https://github.com/langgenius/dify/pull/38678
* fix(web): improve DSL export feedback by @lyzno1 in https://github.com/langgenius/dify/pull/39409
* test: use sqlite3 session in test_app_import_api by @asukaminato0721 in https://github.com/langgenius/dify/pull/38674
* test: use sqlite3 session in test_tags by @asukaminato0721 in https://github.com/langgenius/dify/pull/38679
* test: use sqlite3 session in test_init_validate by @asukaminato0721 in https://github.com/langgenius/dify/pull/38680
* test: use sqlite3 session in test_plugin_wraps by @asukaminato0721 in https://github.com/langgenius/dify/pull/38681
* test: use sqlite3 session in test_runtime_credentials by @asukaminato0721 in https://github.com/langgenius/dify/pull/38682
* test: use sqlite3 session in test_workflow_events_openapi by @asukaminato0721 in https://github.com/langgenius/dify/pull/38683
* feat(dataset): add New Knowledge list and empty state by @hyoban in https://github.com/langgenius/dify/pull/39300
* fix: prevent RBAC role names overflowing settings panel by @balancetheworld in https://github.com/langgenius/dify/pull/39412
* fix(agent): refresh stale inline preview drafts by @zyssyz123 in https://github.com/langgenius/dify/pull/39415
* feat: support  tool multi-select input by @hjlarry in https://github.com/langgenius/dify/pull/39346
* fix(dify-ui): preserve link semantics in button story by @lyzno1 in https://github.com/langgenius/dify/pull/39430
* feat(dataset): expose New RAG KnowledgeFS contracts by @hyoban in https://github.com/langgenius/dify/pull/39314
* fix(web): improve import DSL dialog states by @lyzno1 in https://github.com/langgenius/dify/pull/39432
* feat: gate cloud analytics behind cookie consent by @CodingOnStar in https://github.com/langgenius/dify/pull/39408
* fix(api): send valid body in external knowledge validation probe by @dparkmit24 in https://github.com/langgenius/dify/pull/39410
* test: move password reset coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38936
* test: use sqlite3 session in test_conversation by @asukaminato0721 in https://github.com/langgenius/dify/pull/38684
* test: use sqlite3 session in test_hitl_service_api by @asukaminato0721 in https://github.com/langgenius/dify/pull/38685
* test: use sqlite3 session in test_async_workflow_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38692
* chore(api): cloud use presigned download url on api site by @linw1995 in https://github.com/langgenius/dify/pull/39436
* fix(workflow): hide Agent V2 in chatflow by @lyzno1 in https://github.com/langgenius/dify/pull/39439
* fix(auth): validate account before accepting invitations by @zyssyz123 in https://github.com/langgenius/dify/pull/39438
* fix: use re.fullmatch in email validator to reject trailing newlines (#39234) by @rkfshakti in https://github.com/langgenius/dify/pull/39320
* chore: improve lambda plugin runtime error display by @hjlarry in https://github.com/langgenius/dify/pull/39437
* fix(web): support TTS playback in Safari and Firefox by @euxx in https://github.com/langgenius/dify/pull/39444
* feat(dataset): add New Knowledge creation flow by @hyoban in https://github.com/langgenius/dify/pull/39315
* feat: gate agent management behind the agent.manage permission by @GareArc in https://github.com/langgenius/dify/pull/39330
* fix(api): prevent identity logging deadlock by @hjlarry in https://github.com/langgenius/dify/pull/39449
* fix(web): echo OAuth state on authorize redirect by @samzong in https://github.com/langgenius/dify/pull/39459
* fix(agent): start new Preview conversations without an ID by @zyssyz123 in https://github.com/langgenius/dify/pull/39463
* fix: chat not pass doc if not support vision by @iamjoel in https://github.com/langgenius/dify/pull/39461
* chore: avoid duplicate token counting during dataset indexing by @41tair in https://github.com/langgenius/dify/pull/39466
* feat(dataset): add source connections by @hyoban in https://github.com/langgenius/dify/pull/39319
* fix(agent): show workflow node runs in logs by @zyssyz123 in https://github.com/langgenius/dify/pull/39471
* feat(web): locate workflow nodes by node_id in the workflow editor by @ruanimal in https://github.com/langgenius/dify/pull/38187
* feat(dataset): add website crawl preview by @hyoban in https://github.com/langgenius/dify/pull/39324
* feat(oauth): expose stable account id on provider account endpoint by @samzong in https://github.com/langgenius/dify/pull/39470
* feat: knowledge add more trace by @fatelei in https://github.com/langgenius/dify/pull/38959
* chore: support preview mode if not in community version by @iamjoel in https://github.com/langgenius/dify/pull/39399
* test: use sqlite3 session in test_base_trace_instance by @asukaminato0721 in https://github.com/langgenius/dify/pull/38744
* fix(web): adapt workflow agent logs by @lyzno1 in https://github.com/langgenius/dify/pull/39488
* fix: prevent build reset from clearing preview chat by @iamjoel in https://github.com/langgenius/dify/pull/39490
* fix(web): simplify agent configure mode state by @lyzno1 in https://github.com/langgenius/dify/pull/39492
* fix: don't close the active comment panel when a different comment is resolved by @dparkmit24 in https://github.com/langgenius/dify/pull/39491
* fix: return disabled auto-upgrade settings when strategy is missing by @hjlarry in https://github.com/langgenius/dify/pull/39494
* fix: smooth the preview-to-build transition by @iamjoel in https://github.com/langgenius/dify/pull/39495
* fix(api): make the 10-minute email IP first-strike window take effect by @he-yufeng in https://github.com/langgenius/dify/pull/39479
* feat(dataset): add crawl source selection by @hyoban in https://github.com/langgenius/dify/pull/39325
* refactor: centralize deployment edition in system features by @lyzno1 in https://github.com/langgenius/dify/pull/39454
* fix: download skill files through authenticated API requests by @iamjoel in https://github.com/langgenius/dify/pull/39499
* fix: don't open the node settings panel when clicking a node in comment mode by @dparkmit24 in https://github.com/langgenius/dify/pull/39500
* fix: audio config ui problem by @iamjoel in https://github.com/langgenius/dify/pull/39504
* chore: add deploy-knowledge.yml by @JohnJyong in https://github.com/langgenius/dify/pull/39509
* fix: prevent agent preview actions from being clipped by @iamjoel in https://github.com/langgenius/dify/pull/39510
* chore(web): improve web accessibility semantics by @linw1995 in https://github.com/langgenius/dify/pull/39505
* fix(web): allow clipboard writes in embedded apps by @WTW0313 in https://github.com/langgenius/dify/pull/39511
* fix(web): hydrate workspace permissions before navigation render by @lyzno1 in https://github.com/langgenius/dify/pull/39524
* chore: add web shell code owners by @lyzno1 in https://github.com/langgenius/dify/pull/39526
* fix: include CSRF token when fetching skill file content by @iamjoel in https://github.com/langgenius/dify/pull/39527
* fix(agent-v2): link API reference to agent guide by @lyzno1 in https://github.com/langgenius/dify/pull/39534
* test(e2e): wait for app list before menu interaction by @lyzno1 in https://github.com/langgenius/dify/pull/39538
* fix(agent): block unpublished agents in workflows by @zyssyz123 in https://github.com/langgenius/dify/pull/39532
* fix: fix when tool execute in progress tool_meta miss tool_provider_type by @fatelei in https://github.com/langgenius/dify/pull/39513
* feat(dataset): add document processing tasks by @hyoban in https://github.com/langgenius/dify/pull/39326
* test: use caplog in ext login tests by @EvanYao826 in https://github.com/langgenius/dify/pull/39542
* fix(web): patch React Server Components DoS by @lyzno1 in https://github.com/langgenius/dify/pull/39539
* feat(dataset): add document detail by @hyoban in https://github.com/langgenius/dify/pull/39361
* refactor(web): remove obsolete route prefix handler by @lyzno1 in https://github.com/langgenius/dify/pull/39545
* refactor: remove backend-only system feature fields by @lyzno1 in https://github.com/langgenius/dify/pull/39543
* fix(web): prevent customization horizontal overflow by @Jingyi-Dify in https://github.com/langgenius/dify/pull/39557
* test: use sqlite3 session in test_datasource_provider_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38695
* test: use sqlite3 session in test_human_input_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38697
* refactor(web): migrate vector space billing query to contract client by @EvanYao826 in https://github.com/langgenius/dify/pull/39558
* test: use sqlite3 session in test_webhook_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38699
* test: use sqlite3 session in test_workflow_execute_task by @asukaminato0721 in https://github.com/langgenius/dify/pull/38704
* test: use sqlite3 session in test_easy_ui_message_end_files by @asukaminato0721 in https://github.com/langgenius/dify/pull/38706
* test: use sqlite3 session in test_wraps by @asukaminato0721 in https://github.com/langgenius/dify/pull/38716
* test: use sqlite3 session in test_metadata_nullable_bug by @asukaminato0721 in https://github.com/langgenius/dify/pull/38717
* test: use sqlite3 session in test_llm_quota by @asukaminato0721 in https://github.com/langgenius/dify/pull/38720
* test: use sqlite3 session in test_encrypter by @asukaminato0721 in https://github.com/langgenius/dify/pull/38726
* test: use sqlite3 session in test_workflow_node_execution_offload by @asukaminato0721 in https://github.com/langgenius/dify/pull/38728
* test: use sqlite3 session in test_pipeline_template_base by @asukaminato0721 in https://github.com/langgenius/dify/pull/38730
* chore: Grammar fix in VDB provider README ("a importable") by @SpiliosDimakopoulos in https://github.com/langgenius/dify/pull/39577
* chore: Broken docker-compose.yaml link in Hindi README (missing slash) by @SpiliosDimakopoulos in https://github.com/langgenius/dify/pull/39576
* docs: fix typos in ValueSourceType docstring  by @SpiliosDimakopoulos in https://github.com/langgenius/dify/pull/39573
* chore(agent): update && simplify readme by @wylswz in https://github.com/langgenius/dify/pull/39584
* refactor(agents): simplify repository context by @lyzno1 in https://github.com/langgenius/dify/pull/39583
* docs: Broken Grafana link in Turkish README (placeholder text instead of URL) by @SpiliosDimakopoulos in https://github.com/langgenius/dify/pull/39575
* fix(dify-ui): honor instant popup transitions by @lyzno1 in https://github.com/langgenius/dify/pull/39572
* fix(web): prevent search hotkey hydration mismatch by @lyzno1 in https://github.com/langgenius/dify/pull/39574
* refactor: move trial app capability out of system features by @lyzno1 in https://github.com/langgenius/dify/pull/39562
* refactor(workflow): remove hook barrel exports by @lyzno1 in https://github.com/langgenius/dify/pull/39588
* fix(workflow): stop dropping unsaved edits when collaboration never c… by @BenjaminX in https://github.com/langgenius/dify/pull/39579
* test: use sqlite3 session in test_snippet by @asukaminato0721 in https://github.com/langgenius/dify/pull/38691
* test: use sqlite3 session in test_message_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38698
* fix(web): stop chunk length/overlap inputs collapsing to an unusable width in narrow containers by @dparkmit24 in https://github.com/langgenius/dify/pull/39600
* feat: add CE telemetry report by @FFXN in https://github.com/langgenius/dify/pull/39452
* fix(api): honor array-element limit and byte budget for list[File] in VariableTruncator (#39218) by @Taranum01 in https://github.com/langgenius/dify/pull/39220
* fix: The expiration time for web app login to JWT is incorrectly set. by @FFXN in https://github.com/langgenius/dify/pull/39537
* fix(rag): stop the document cleaner from stripping valid characters ï, ¿, ¾ by @winklemad in https://github.com/langgenius/dify/pull/39215
* refactor(web): simplify Dify logo theming by @lyzno1 in https://github.com/langgenius/dify/pull/39580
* feat(api): expose app mode in webapp site response by @linw1995 in https://github.com/langgenius/dify/pull/39607
* fix: preserve spaces during recursive text splitting by @CYJ1226 in https://github.com/langgenius/dify/pull/39498
* chore: bump pypdf from 6.10.2 to 6.14.2 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/39502
* fix(agent): expose publish state from composer by @zyssyz123 in https://github.com/langgenius/dify/pull/39615
* chore(deps): bump the github-actions-dependencies group with 6 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/39603
* feat(inner_api): add endpoint to invalidate plugin model providers cache by @GareArc in https://github.com/langgenius/dify/pull/39468
* fix: align workspace card plan ownership by @lyzno1 in https://github.com/langgenius/dify/pull/39616
* feat: add amptitude to new agent by @iamjoel in https://github.com/langgenius/dify/pull/39608
* fix: use jinja sandbox by @wylswz in https://github.com/langgenius/dify/pull/39609
* feat(agent): add a squid proxy for agent sandbox by @wylswz in https://github.com/langgenius/dify/pull/39544
* fix(web): stop reporting workspace status by @lyzno1 in https://github.com/langgenius/dify/pull/39626
* fix(workflow): lazy-load Loro collaboration runtime by @lyzno1 in https://github.com/langgenius/dify/pull/39631
* fix(api): wait for workflow worker cleanup before task completion by @linw1995 in https://github.com/langgenius/dify/pull/39614
* perf(web): lazy-load Home creation modals by @lyzno1 in https://github.com/langgenius/dify/pull/39634
* perf: add lightweight recent apps endpoint by @hjlarry in https://github.com/langgenius/dify/pull/39625
* test: use pristine file-backed SQLite fixtures by @escape0707 in https://github.com/langgenius/dify/pull/39624
* test: use sqlite3 session in test_workflow_run_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38701
* test: use sqlite3 session in test_draft_var_loader_simple by @asukaminato0721 in https://github.com/langgenius/dify/pull/38702
* test: use sqlite3 session in test_utils by @asukaminato0721 in https://github.com/langgenius/dify/pull/38729
* test: use sqlite3 session in test_workflow_comment_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38700
* test: use sqlite3 session in test_llm_generator_missing by @asukaminato0721 in https://github.com/langgenius/dify/pull/38742
* fix: gate service API, MCP and trigger surfaces on enterprise license by @GareArc in https://github.com/langgenius/dify/pull/39635
* feat: add bearer auth to agent backend by @wylswz in https://github.com/langgenius/dify/pull/39622
* refactor: make agent composer save and publish state consistent by @iamjoel in https://github.com/langgenius/dify/pull/39637
* chore: bump gitpython from 3.1.52 to 3.1.54 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/39619
* test: use sqlite3 session in test_api by @asukaminato0721 in https://github.com/langgenius/dify/pull/38733
* chore(deps): bump golang.org/x/net from 0.53.0 to 0.55.0 in /dify-agent-runtime by @dependabot[bot] in https://github.com/langgenius/dify/pull/39025
* test: use sqlite3 session in test_extract_thread_messages by @asukaminato0721 in https://github.com/langgenius/dify/pull/38739
* chore: bump pymdown-extensions from 10.21.2 to 11.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/39618
* test: use SQLite sessions in rag retrieval by @asukaminato0721 in https://github.com/langgenius/dify/pull/39049
* chore(deps): bump the storage group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/39604
* fix: prevent the agent build draft UI from flashing during apply by @iamjoel in https://github.com/langgenius/dify/pull/39642
* test: use SQLite sessions in services core by @asukaminato0721 in https://github.com/langgenius/dify/pull/39057
* test: use SQLite sessions in core memory by @asukaminato0721 in https://github.com/langgenius/dify/pull/39066
* fix(ui): unify combobox trigger focus rings by @lyzno1 in https://github.com/langgenius/dify/pull/39643
* test: use SQLite sessions in controllers service api by @asukaminato0721 in https://github.com/langgenius/dify/pull/39069
* chore: update workspace dependencies by @lyzno1 in https://github.com/langgenius/dify/pull/39641
* fix(workflow): preserve latest collaboration session by @lyzno1 in https://github.com/langgenius/dify/pull/39646
* test: use SQLite sessions in core ops by @asukaminato0721 in https://github.com/langgenius/dify/pull/39072
* test: use SQLite sessions in core app by @asukaminato0721 in https://github.com/langgenius/dify/pull/39075
* test: use SQLite sessions in core tools by @asukaminato0721 in https://github.com/langgenius/dify/pull/39077
* fix(web): align tour trigger DOM order by @lyzno1 in https://github.com/langgenius/dify/pull/39654
* fix(workflow): align block icon vector sizes by @Jingyi-Dify in https://github.com/langgenius/dify/pull/39657
* fix(cli): decouple release script tests from the live compat window by @GareArc in https://github.com/langgenius/dify/pull/39658
* feat(plugin): allow disabling the tenant plugin model providers cache by @GareArc in https://github.com/langgenius/dify/pull/39632
* chore: bump version to 1.16.1 by @wylswz in https://github.com/langgenius/dify/pull/39653
* fix: fix mcp output_schema is optional by @fatelei in https://github.com/langgenius/dify/pull/39453

## New Contributors
* @wanxiankai made their first contribution in https://github.com/langgenius/dify/pull/39237
* @pepepeboom made their first contribution in https://github.com/langgenius/dify/pull/39216
* @rkfshakti made their first contribution in https://github.com/langgenius/dify/pull/39322
* @lntutor made their first contribution in https://github.com/langgenius/dify/pull/39229
* @zcxGGmu made their first contribution in https://github.com/langgenius/dify/pull/39374
* @dparkmit24 made their first contribution in https://github.com/langgenius/dify/pull/39410
* @samzong made their first contribution in https://github.com/langgenius/dify/pull/39459
* @SpiliosDimakopoulos made their first contribution in https://github.com/langgenius/dify/pull/39577
* @Taranum01 made their first contribution in https://github.com/langgenius/dify/pull/39220
* @winklemad made their first contribution in https://github.com/langgenius/dify/pull/39215
* @CYJ1226 made their first contribution in https://github.com/langgenius/dify/pull/39498

**Full Changelog**: https://github.com/langgenius/dify/compare/1.16.0...1.16.1

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.16.1` · 2026-07-28 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.16.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
