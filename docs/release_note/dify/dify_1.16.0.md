---
title: "dify 1.16.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.16.0"
version: "1.16.0"
published: "2026-07-17"
type: "minor"
lang: "en"
summary: "As many of you know, the shell-based LLM agent paradigm has brought a major leap in agent capabilities and changed how we think about agents. Meanwhile, Skills provide a standardized way to package and distribute…"
---

# dify 1.16.0

# Introducing Dify Agent *(Beta)*: A New Agent Experience in Dify

> [!WARNING]
> You should provide Dify Agent services ⚠️**only to trusted, non-malicious users**⚠️.

As many of you know, the shell-based LLM agent paradigm has brought a major leap in agent capabilities and changed how we think about agents. Meanwhile, Skills provide a standardized way to package and distribute capabilities, making it easier to build powerful agents.


Today, we are launching Dify Agent. Like other leading agents, it runs in a Linux sandbox. This release includes:

- A builder for creating Dify Agents
  - You can build Dify Agents through the UI: set a base prompt, upload Skills and files, and connect tools and knowledge from the Dify ecosystem.
  - We also provide an agent that helps you build Dify Agents. Through conversation, it can configure the Linux sandbox environment, install required packages, and create new Skills and files that your Dify Agent can use later.

- Dify Workflow integration for Dify Agent
  - You can use an existing Dify Agent in a Dify Workflow, or temporarily create an inline Dify Agent. It will execute the task defined by the workflow node, generate the required output, and pass it to the next node.

- A new web app experience
  - The Dify Agent you build can be published and used as a web app. While the user experience remains familiar, it is now powered by Dify Agent.

Docs: https://docs.dify.ai/en/self-host/use-dify/build/new-agent/overview

<img width="3012" height="1638" alt="image" src="https://github.com/user-attachments/assets/57d10af3-eb74-4ca9-829d-03489c27edf1" />

# ⚠️ Action Required
**OpenAI GPT-5.6 Compatibility Notice**

The OpenAI plugin previously defaulted to using the Chat Completions API, which was deprecated by OpenAI earlier this year and has increasingly poor support for newer model series. The newly released GPT-5.6 family has many unusual and unique parameter combination restrictions when used with Chat Completions, because OpenAI now provides only minimal compatibility support for Chat Completions with new models. **This is not a Dify system issue.**

The default API type for new configurations has been changed from Chat Completions to **Responses**. However, users who previously saved a custom API key with the old default (Chat Completions) will retain that setting, which may cause unexpected errors that appear to originate from Dify.

> If you have previously configured a custom OpenAI API key, please check your API type setting and switch to **Responses** if it is still set to Chat Completions, especially when using GPT-5.6 or later models.


## New Features

**Agent App (Open Beta)**
- Agent App enters open beta and is now enabled by default for all users. It introduces a built-in sandbox for code execution and shell commands, a skill system that lets agents call tools and APIs, an agent roster for managing and reusing agents across a workspace, and support for referencing new agents from workflow agent nodes.


**Smarter AI Workflow Generation**
- The ⌘K → /create and /refine AI workflow generator has been enhanced end-to-end: the low-value "Ideal output" field was removed, static example chips replaced with AI-generated suggestions grounded in your workspace context, and node config generation is now parallelized for faster results. A configurable timeout (`WORKFLOW_GENERATION_TIMEOUT_MS`, default 180s) prevents long-running generations from hanging.

**MCP Protocol Upgrade**
- The workflow-as-MCP server now supports MCP protocol 2025-06-18 with version negotiation and structured tool output, while remaining backward compatible with older clients. MCPClient connections can now inject dynamic HTTP request headers at runtime using placeholders (e.g. `{{request.headers.X-Custom-Auth}}`), enabling per-request authentication passthrough.

**Web App Customization**
- App owners can now customize the chat input placeholder text (up to 64 chars) for Chatbot, Agent, and Chatflow web apps. The customization UI has been refined with clearer naming ("Custom Frontend" / "Branding") and better label handling. App descriptions are now displayed on chat and text-generation app screens with a collapsible view to avoid pushing the input form off screen.

**Workflow Reliability & Operations**
- Workflow run archives can now be exported, and active runs are properly aborted during Celery warm shutdown to prevent orphaned tasks. Redis connections are more resilient with TCP keepalive support and expanded retry coverage. Model providers now receive `app_id` for provider-side cost attribution (e.g. Bedrock requestMetadata, OpenAI metadata, Vertex AI labels). OAuth and SSO login flows now preserve redirect URLs more reliably, with a dedicated error view for failed SSO completions.

## Bug Fixes

**Workflow & Agent**
- Fixed multiple issues with workflow draft imports losing references, node settlement after failures, retry detail visibility, and HITL resume state restoration
- Fixed SSE stream corruption with Unicode separators, agent final answer clearing after stream completion, and conversation title being overwritten with empty values
- Fixed workflow archive retry hardening, multi-worker collaboration support, and chat tree out-of-order parent nodes
- Fixed knowledge retrieval failures not being surfaced to users, and End output variable name collisions in built-in templates

**Authentication & Access Control**
- Fixed open redirect vulnerabilities in post-login and auth redirect flows
- Fixed login redirects not staying on current deployment, auth prefix duplication, and change email not working
- Fixed editor permission issues: editors can now view logs, no longer query billing subscriptions, and can no longer manage members
- Fixed trace config changes not requiring edit access, and trial app access hardening for recommended apps

**Models & Plugins**
- Fixed custom model cache not being cleared on deletion, model plugin debugging failures, and Xinference credential context handling
- Fixed max token params not being disableable in follow-up model parameters
- Fixed plugin provider cache stampedes, marketplace installation callbacks, and plugin permission settings

**Web & UI**
- Fixed app creation from Learn Dify, node search field input, workspace avatar consistency, and navigation profile display
- Fixed Streamdown fullscreen table actions, marketplace page header jitter, and install dialog accessibility
- Fixed chat attachments scrolling out of view, HITL input save button visibility, and app card meta overflow
- Fixed monitoring chart zero-value display, member invitation state handling, dark mode background, and Unicode characters in form field names
- Fixed markdown file-preview link downloads, Notion sync empty state, and blog UTM attribution under CSP

**Other**
- Fixed infinite loop in batch document deletion, invalid UTF-8 cache payloads, and swallowed document indexing errors
- Fixed PostgreSQL 18 native uuidv7() support and ADB-PG 7.0 compatibility
- Fixed `CAN_REPLACE_LOGO` defaulting to true, unsupported language errors in execute_code, and CLI `--insecure` flag not skipping TLS verification

## Improvements

**Performance**
- Eliminated N+1 queries in advanced-chat workflow run lists and TokenBufferMemory message file loading
- Faster frontend startup via lazy-loaded Vite plugins and console contract shards
- Reduced database load by caching setup status, compressing large plugin model objects in Redis with zstd, and retrieving published workflows via direct foreign key

**Architecture & Code Quality**
- Migrated all console API endpoints to generated OpenAPI contracts with BaseModel, and frontend console contracts to generated routes and types
- Propagated explicit database sessions across backend paths for consistency and testability
- Replaced legacy app context providers with Jotai atoms across the frontend
- Upgraded to TypeScript 7 and Vite+ toolchain, enforced strict ESLint rules, and disallowed new direct SQLAlchemy in controllers

## Security Enhancements

This release includes several security hardening fixes, some of which were addressed after the 1.16.0-rc1 release:

- **SQL injection**: Closed a SQL injection vulnerability and enhanced SQL query safety with metadata key validation
- **SSRF**: Fixed an SSRF bypass via raw `httpx.get` in API tool schema fetch
- **Open redirects**: Prevented open redirects in post-login and auth redirect flows
- **Sandbox enforcement**: Chatflow API now checks workflow_id and sandbox plan; sandbox plan will not execute special workflows
- **Landlock protection**: Agent HOME directory protected with Landlock; downgraded to v1 for broader kernel compatibility
- **CVE dependency upgrades**: httplib2, setuptools, wandb; python-engineio, python-socketio; fickling, pillow, click

---

## Environment Variable Changes

### Added

| Variable | Default | File | Description |
|---|---|---|---|
| `AGENT_BACKEND_BASE_URL` | `http://localhost:5050` | `api/.env.example` | Base URL for the Agent backend service |
| `AGENT_BACKEND_STREAM_READ_TIMEOUT_SECONDS` | `30` | `api/.env.example` | Stream read timeout for Agent backend |
| `AGENT_BACKEND_STREAM_MAX_RECONNECTS` | `3` | `api/.env.example` | Max reconnection attempts for Agent backend streams |
| `AGENT_BACKEND_RUN_TIMEOUT_SECONDS` | `1200` | `api/.env.example` | Overall run timeout for Agent backend |
| `API_WEBSOCKET_WORKER_AMOUNT` | `1` | `docker/envs/core-services/shared.env.example` | Number of WebSocket API workers |
| `DIFY_AGENT_REDIS_URL` | _(empty, derived from `REDIS_PASSWORD`)_ | `docker/envs/core-services/dify-agent.env.example` | Redis URL for Dify Agent |
| `DIFY_AGENT_REDIS_PREFIX` | `dify-agent` | `docker/envs/core-services/dify-agent.env.example` | Redis key prefix for Dify Agent |
| `DIFY_AGENT_SHUTDOWN_GRACE_SECONDS` | `30` | `docker/envs/core-services/dify-agent.env.example` | Grace period before forced shutdown |
| `DIFY_AGENT_RUN_RETENTION_SECONDS` | `259200` | `docker/envs/core-services/dify-agent.env.example` | Retention period for agent run records |
| `DIFY_AGENT_PLUGIN_DAEMON_URL` | _(empty, derived from `PLUGIN_DAEMON_URL`)_ | `docker/envs/core-services/dify-agent.env.example` | Plugin daemon URL for Dify Agent |
| `DIFY_AGENT_PLUGIN_DAEMON_API_KEY` | _(empty, derived from `PLUGIN_DAEMON_KEY`)_ | `docker/envs/core-services/dify-agent.env.example` | Plugin daemon API key for Dify Agent |
| `DIFY_AGENT_INNER_API_URL` | _(empty, derived from `PLUGIN_DIFY_INNER_API_URL`)_ | `docker/envs/core-services/dify-agent.env.example` | Inner API URL for Dify Agent |
| `DIFY_AGENT_INNER_API_KEY` | _(empty)_ | `docker/envs/core-services/dify-agent.env.example` | Inner API key (must match `INNER_API_KEY_FOR_PLUGIN`, not `INNER_API_KEY`) |
| `DIFY_AGENT_SHELLCTL_ENTRYPOINT` | `http://local_sandbox:5004` | `docker/envs/core-services/dify-agent.env.example` | Shellctl entrypoint URL |
| `DIFY_AGENT_SHELLCTL_AUTH_TOKEN` | _(empty)_ | `docker/envs/core-services/dify-agent.env.example` | Auth token for shellctl |
| `DIFY_AGENT_STUB_API_BASE_URL` | `http://agent_backend:5050/agent-stub` | `docker/envs/core-services/dify-agent.env.example` | Base URL for Agent Stub API |
| `DIFY_AGENT_SERVER_SECRET_KEY` | _(dev default)_ | `docker/envs/core-services/dify-agent.env.example` | JWE encryption key for Agent Stub bearer tokens. **Replace in production** with `python -c 'import secrets; print(secrets.token_urlsafe(32))'` |
| `DIFY_AGENT_SHELL_REDACT_PATTERNS` | _(empty)_ | `docker/envs/core-services/dify-agent.env.example` | Patterns for redacting shell output |
| `SHELLCTL_ENABLE_PATH_ISOLATION` | `true` | `docker/envs/core-services/local-sandbox.env.example` | Enable path isolation in shellctl |
| `NEW_USER_DEFAULT_PLUGIN_IDS` | _(empty)_ | `api/.env.example` | Comma-separated plugin IDs to auto-install for new users |
| `NEW_USER_DEFAULT_MODELS` | _(empty)_ | `api/.env.example` | Default models for new users |
| `WORKFLOW_GENERATION_TIMEOUT_MS` | `180000` | `docker/envs/core-services/shared.env.example` | Timeout for AI workflow generation |
| `WORKFLOW_GENERATOR_NODE_BUILDER_MAX_WORKERS` | `6` | `api/.env.example` | Max parallel workers for node config generation |
| `REDIS_KEEPALIVE` | `true` | `api/.env.example` | Enable Redis TCP keepalive |
| `REDIS_KEEPALIVE_IDLE` | `30` | `api/.env.example` | Redis keepalive idle time (seconds) |
| `REDIS_KEEPALIVE_INTERVAL` | `10` | `api/.env.example` | Redis keepalive interval (seconds) |
| `REDIS_KEEPALIVE_COUNT` | `10` | `api/.env.example` | Redis keepalive probe count |
| `NEXT_PUBLIC_ENABLE_AGENT_V2` | `true` | `docker/envs/core-services/web.env.example` | Enable Agent App v2 (replaces `ENABLE_AGENT_V2`) |

### Removed

| Variable | Old Default | File | Notes |
|---|---|---|---|
| `ENABLE_AGENT_V2` | `false` | `docker/envs/core-services/web.env.example` | Replaced by `NEXT_PUBLIC_ENABLE_AGENT_V2` (now defaults to `true`) |

### Modified

| Variable | Old | New | File |
|---|---|---|---|
| `NEXT_PUBLIC_ENABLE_FEATURE_PREVIEW` | `false` | `true` | `docker/envs/core-services/web.env.example` |

### Docker Compose Changes

- New services: `agent_backend` (`langgenius/dify-agent-backend:1.16.0`) and `local_sandbox` (`langgenius/dify-agent-local-sandbox:1.16.0`)
- `api` and `worker` services now depend on `agent_backend`
- `API_WEBSOCKET_WORKER_AMOUNT` is now configurable (was hardcoded to 1)
- `WORKFLOW_GENERATION_TIMEOUT_MS` added to `web` service

---

## Database Migrations

This release includes 9 new database migrations:

- `2026_05_25_1143-97e2e1a644e8_add_workflow_version_to_workflow_agent_.py`
- `2026_06_12_1100-0b2f2c8a9d1e_add_agent_role.py`
- `2026_06_18_2300-b2515f9d4c2a_agent_drive_skill_metadata_refactor.py`
- `2026_06_24_1900-a6f1c9d2e8b4_add_input_placeholder_to_sites.py`
- `2026_06_24_2015-e4f5a6b7c8d9_add_agent_config_drafts.py`
- `2026_06_25_1100-a2b3c4d5e6f7_add_agent_backing_app_id.py`
- `2026_06_25_1500-7a1c2d9e4b60_add_workflow_run_archive_index_tables.py`
- `2026_06_26_1000-c3d4e5f6a7b8_add_agent_active_config_is_published.py`

Run `flask db upgrade` after updating the code.

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
>
> - This release includes **8 new database migrations**. Run database migrations as part of the upgrade.
> - **28 new environment variables**, **1 removed**, and **1 modified**. Review the Environment Variable Changes section and update your `.env` accordingly.
> - **Docker Compose configuration changed significantly**: two new services (`agent_backend`, `local_sandbox`) were added. If you maintain a customized `docker-compose.yaml`, review the changes and re-apply local customizations carefully.
> - **`DIFY_AGENT_SERVER_SECRET_KEY`** ships with a development default. **You must replace it in production** with a securely generated key: `python -c 'import secrets; print(secrets.token_urlsafe(32))'`
> - **`ENABLE_AGENT_V2`** has been renamed to `NEXT_PUBLIC_ENABLE_AGENT_V2` and now defaults to `true`. Remove the old variable from your env files.
> - **OpenAI GPT-5.6 users**: If you have previously configured a custom OpenAI API key, verify your API type is set to **Responses** (not Chat Completions). See the Known Issues section above.

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
   git checkout 1.16.0
   ```

3. Stop the service. Please execute in the `docker` directory.
   ```bash
   docker compose down
   ```

4. Back up data.
   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5. Review the new environment variables (especially `DIFY_AGENT_SERVER_SECRET_KEY`) and update your `.env` file. Re-apply any local customizations.

6. Upgrade services.
   ```bash
   docker compose up -d
   ```

### Source Code Deployments

1. Stop the API server, Worker, and Web frontend Server.

2. Get the latest code from the release tag.
   ```bash
   git fetch --tags
   git checkout 1.16.0
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

5. Configure the new Agent backend service. Refer to the `dify-agent` section in `docker/envs/core-services/dify-agent.env.example` for required environment variables.

6. Restart the API server, Worker, and Web frontend Server.

---

## What's Changed
* chore(api): surface pyrefly output on type-check failures by @QuantumGhost in https://github.com/langgenius/dify/pull/37934
* test: replace logger mock with caplog in workflow collaboration test by @ojasarora77 in https://github.com/langgenius/dify/pull/37971
* ci: emit pyrefly diagnostics as GitHub workflow commands by @ojasarora77 in https://github.com/langgenius/dify/pull/37974
* refactor(api): migrate response contract tooling to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37950
* fix(cli): use a(n) article in difyctl prerelease warning by @GareArc in https://github.com/langgenius/dify/pull/37976
* fix(api): require edit access for trace config changes by @laipz8200 in https://github.com/langgenius/dify/pull/37973
* feat(webapp): display app description on chat and text-generation app screens by @kurokobo in https://github.com/langgenius/dify/pull/37345
* fix: decouple deployment access control dialog by @hyoban in https://github.com/langgenius/dify/pull/37936
* refactor(tests): use caplog in workflow collaboration service tests (#37468) by @hikariming in https://github.com/langgenius/dify/pull/37991
* fix(web): make marketplace URL builder SSR-safe by @lyzno1 in https://github.com/langgenius/dify/pull/37944
* refactor: simplify deployment access ownership by @hyoban in https://github.com/langgenius/dify/pull/37994
* refactor: Use pytest caplog instead of logger patching in test_spec.py by @DevCube24 in https://github.com/langgenius/dify/pull/37997
* refactor: align deployment detail state ownership by @hyoban in https://github.com/langgenius/dify/pull/38008
* fix: isolate node selector keyboard events by @lyzno1 in https://github.com/langgenius/dify/pull/37998
* fix(web): keep HITL input-field save button visible in the edit dialog by @manan-tech in https://github.com/langgenius/dify/pull/38007
* refactor(api): enforce enums over string literals on openapi surface by @GareArc in https://github.com/langgenius/dify/pull/38009
* chore: migrate account role test to testcontainers by @escape0707 in https://github.com/langgenius/dify/pull/38010
* refactor: pass db session into service calls (#37403) by @xiejl001 in https://github.com/langgenius/dify/pull/38016
* feat(api): cache workflow provider configurations by @linw1995 in https://github.com/langgenius/dify/pull/37980
* fix(web): capture blog UTM/slug attribution reliably under CSP by @CodingOnStar in https://github.com/langgenius/dify/pull/38022
* fix: plugin installation task popover layout when some failed too long by @hjlarry in https://github.com/langgenius/dify/pull/38000
* feat(web): add customizable input placeholder for Agent/Chatflow/Chatbot web app by @CyberPU2099 in https://github.com/langgenius/dify/pull/37790
* refactor: replace patch logger with caplog in test_version.py by @EvanYao826 in https://github.com/langgenius/dify/pull/38029
* docs(web): fix testing guide link by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/38006
* feat(agent-v2): sync nightly updates to main (2026-06-25) by @BeautyyuYanli in https://github.com/langgenius/dify/pull/37915
* chore: inject session by @asukaminato0721 in https://github.com/langgenius/dify/pull/37941
* fix(web): download markdown file-preview links as attachments by @uxgnod in https://github.com/langgenius/dify/pull/38030
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/38035
* fix: remove aria-busy from loading button by @lyzno1 in https://github.com/langgenius/dify/pull/38036
* fix: improve members role chip accessibility by @lyzno1 in https://github.com/langgenius/dify/pull/38037
* fix: improve workflow run archive idempotency and batching by @41tair in https://github.com/langgenius/dify/pull/38027
* refactor(web): organize deployment feature state by @hyoban in https://github.com/langgenius/dify/pull/38065
* fix: prevent exiting toasts from blocking page clicks by @lyzno1 in https://github.com/langgenius/dify/pull/38063
* fix: gate deployments in route layout by @lyzno1 in https://github.com/langgenius/dify/pull/38078
* refactor: shell provider protocol by @wylswz in https://github.com/langgenius/dify/pull/38077
* fix: simplify scroll area composition by @lyzno1 in https://github.com/langgenius/dify/pull/38113
* fix(web): improve main nav focus outline by @lyzno1 in https://github.com/langgenius/dify/pull/38114
* fix: CAN_REPLACE_LOGO should be false by @fatelei in https://github.com/langgenius/dify/pull/38126
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/38128
* chore: downgrade openapi-ts by @hyoban in https://github.com/langgenius/dify/pull/38141
* fix: support Unicode characters in form field names by @WTW0313 in https://github.com/langgenius/dify/pull/38138
* feat: refine snippet siderbar and support RBAC. by @FFXN in https://github.com/langgenius/dify/pull/38134
* fix(web): align web app nav item width by @lyzno1 in https://github.com/langgenius/dify/pull/38146
* fix(api): isolate side-effect database writes by @lin-hongkuan in https://github.com/langgenius/dify/pull/37895
* fix(api): wire dedicated timeout into inner RBAC requests by @GareArc in https://github.com/langgenius/dify/pull/38150
* fix: multimodal segment attachment indexing by @Blackoutta in https://github.com/langgenius/dify/pull/38080
* fix: agent app log detail modal not display well by @hjlarry in https://github.com/langgenius/dify/pull/38014
* fix(vdb): remove deprecated SQL options for ADB-PG 7.0 compatibility by @shiyuanfang2nd in https://github.com/langgenius/dify/pull/38004
* fix: editor should not query billing subscriptions by @hjlarry in https://github.com/langgenius/dify/pull/38157
* perf(api): retrieve published workflows via app.workflow_id by @linw1995 in https://github.com/langgenius/dify/pull/38153
* fix: editor can view the logs by @hjlarry in https://github.com/langgenius/dify/pull/38165
* perf: make command rbac-migrate-member-roles use less mem and make it… by @fatelei in https://github.com/langgenius/dify/pull/38151
* fix(api): skip uuidv7() creation when PostgreSQL 18 provides it natively by @zeeshan56656 in https://github.com/langgenius/dify/pull/36998
* feat(mcp): support dynamic HTTP request headers in MCPClient by @Sanket2329 in https://github.com/langgenius/dify/pull/37938
* chore(i18n): update role management permission keys for multiple languages by @WTW0313 in https://github.com/langgenius/dify/pull/38186
* fix: update documentation links in permission set and role modals by @WTW0313 in https://github.com/langgenius/dify/pull/38188
* test(e2e): add agent v2 test infrastructure by @lyzno1 in https://github.com/langgenius/dify/pull/38191
* feat: support dataset permission migrate to rbac by @fatelei in https://github.com/langgenius/dify/pull/38166
* chore: inject more db.session by @asukaminato0721 in https://github.com/langgenius/dify/pull/38045
* fix(workflow): guard on_tool_execution stdout traces behind DEBUG by @MRZHUH in https://github.com/langgenius/dify/pull/38200
* fix: stress test setup process and report structure workflow for Dify 1.15.0+ by @Blackoutta in https://github.com/langgenius/dify/pull/38194
* fix: debug plugin permission setting not work by @hjlarry in https://github.com/langgenius/dify/pull/38197
* chore(dify-ui): update theme tokens by @lyzno1 in https://github.com/langgenius/dify/pull/38189
* fix(api): scope nested resource lookups by owner refs by @WH-2099 in https://github.com/langgenius/dify/pull/38177
* fix(api): register rbac-migrate-dataset-permissions CLI command by @GareArc in https://github.com/langgenius/dify/pull/38204
* fix(api): Fixing API contract generation infrastructure by @cqjjjzr in https://github.com/langgenius/dify/pull/38042
* fix(api): prevent plugin provider cache stampedes by @VeraPyuyi in https://github.com/langgenius/dify/pull/37388
* perf(web): improve vinext home startup time by @hyoban in https://github.com/langgenius/dify/pull/38219
* fix(web): hide deployment access tab by @hyoban in https://github.com/langgenius/dify/pull/38222
* fix(web): hide deployment access sidebar tab by @hyoban in https://github.com/langgenius/dify/pull/38229
* perf(web): lazy load console contract shards by @hyoban in https://github.com/langgenius/dify/pull/38230
* fix(api): avoid infinite loop in _delete_records when batch deletion fails by @p2003722 in https://github.com/langgenius/dify/pull/38118
* refactor(web): migrate console contracts to generated types by @hyoban in https://github.com/langgenius/dify/pull/38231
* feat(workflow-generator): enhance the AI auto-creation flow end-to-end by @crazywoola in https://github.com/langgenius/dify/pull/38175
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/38239
* build(deps): bump pydantic-ai-slim from 1.85.1 to 1.102.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/38135
* fix: handle integration marketplace install callbacks by @Jingyi-Dify in https://github.com/langgenius/dify/pull/38236
* chore(agent-v2): sync daily changes by @lyzno1 in https://github.com/langgenius/dify/pull/38162
* refactor(web): migrate console contracts to generated routes by @hyoban in https://github.com/langgenius/dify/pull/38233
* refactor(web): decouple detail sidebars from main nav by @hyoban in https://github.com/langgenius/dify/pull/38241
* refactor: pass db.session explicitly in DatasetIndexToolCallbackHandler by @sergioperezcheco in https://github.com/langgenius/dify/pull/38082
* refactor: use Pydantic for sensitive word avoidance config (Fixes #37… by @escapefyh in https://github.com/langgenius/dify/pull/37660
* fix: order main nav account classes by @hjlarry in https://github.com/langgenius/dify/pull/38251
* chore(github): add e2e labeler and code owner by @lyzno1 in https://github.com/langgenius/dify/pull/38257
* fix(web): improve card grid responsiveness by @hyoban in https://github.com/langgenius/dify/pull/38263
* chore: remove useless tag params logic in use effect by @iamjoel in https://github.com/langgenius/dify/pull/38269
* fix(web): clarify unpublished explore app handling by @euxx in https://github.com/langgenius/dify/pull/38260
* refactor(ui): use inset ring utilities by @lyzno1 in https://github.com/langgenius/dify/pull/38275
* refactor(web): migrate model provider console contracts by @hyoban in https://github.com/langgenius/dify/pull/38253
* refactor(web): migrate trigger console contracts by @hyoban in https://github.com/langgenius/dify/pull/38255
* refactor(web): migrate rbac access console contracts by @hyoban in https://github.com/langgenius/dify/pull/38256
* refactor(web): migrate plugin console contracts by @hyoban in https://github.com/langgenius/dify/pull/38252
* refactor(web): migrate snippet console contracts by @hyoban in https://github.com/langgenius/dify/pull/38258
* refactor(web): migrate trial app console contracts by @hyoban in https://github.com/langgenius/dify/pull/38254
* chore: remove empty .codex file by @QuantumGhost in https://github.com/langgenius/dify/pull/38286
* fix(web): add missing i18n for CLI device flow login page by @GareArc in https://github.com/langgenius/dify/pull/38282
* refactor(api): migrate console app common endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37951
* refactor(web): remove custom console contract loaders by @hyoban in https://github.com/langgenius/dify/pull/38284
* refactor(api): migrate console app chat endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37952
* fix(api): keep provider refresh waiters single-flight by @WH-2099 in https://github.com/langgenius/dify/pull/38226
* fix(api): tolerate legacy `service_api` end-user type on load by @manan-tech in https://github.com/langgenius/dify/pull/38271
* fix(templates): make End output variable names unique in built-in templates by @manan-tech in https://github.com/langgenius/dify/pull/38293
* fix: web detail adjustment before release by @iamjoel in https://github.com/langgenius/dify/pull/38296
* test(e2e): add agent v2 core coverage by @lyzno1 in https://github.com/langgenius/dify/pull/38209
* fix: sql injection by @FFXN in https://github.com/langgenius/dify/pull/38295
* fix(api): stop swallowing document indexing errors in create handler by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/38192
* chore(api): disallow builtins getattr variants in new code by @QuantumGhost in https://github.com/langgenius/dify/pull/38250
* fix: Working outside of application context. by @fatelei in https://github.com/langgenius/dify/pull/38300
* fix(agent-v2): preserve oauth2 credential refs when converting tool c… by @linw1995 in https://github.com/langgenius/dify/pull/38303
* fix(web): align monitoring overview charts by @hyoban in https://github.com/langgenius/dify/pull/38292
* fix(web): fill dataset create layout height by @lyzno1 in https://github.com/langgenius/dify/pull/38308
* fix: support multi-worker workflow collaboration by @hjlarry in https://github.com/langgenius/dify/pull/38242
* refactor(web): move marketplace contract to contracts package by @hyoban in https://github.com/langgenius/dify/pull/38311
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/38301
* fix: enhance SQL query safety and add metadata key validation by @FFXN in https://github.com/langgenius/dify/pull/38307
* feat(agent-v2): resolve Dify core tools in agent runtime runner by @linw1995 in https://github.com/langgenius/dify/pull/38316
* fix: Notion sync empty state width in knowledge creation by @hjlarry in https://github.com/langgenius/dify/pull/38321
* fix: normalize query array params for oRPC by @hyoban in https://github.com/langgenius/dify/pull/38322
* fix(workspace): expose last opened in contract by @lyzno1 in https://github.com/langgenius/dify/pull/38323
* fix(web): keep app sort filter with header filters by @hyoban in https://github.com/langgenius/dify/pull/38324
* test: migrate tag service tests to testcontainers by @escape0707 in https://github.com/langgenius/dify/pull/38313
* refactor: thread explicit sessions through app retrieval paths by @41tair in https://github.com/langgenius/dify/pull/38309
* fix(web): align main nav app item states by @lyzno1 in https://github.com/langgenius/dify/pull/38326
* fix: prevent app card meta overflow by @Jingyi-Dify in https://github.com/langgenius/dify/pull/38349
* perf(memory): batch-load message files in TokenBufferMemory to remove N+1 queries by @weijun-xia in https://github.com/langgenius/dify/pull/38002
* feat(device-flow): redirect SSO-complete failures to a dedicated device error view by @GareArc in https://github.com/langgenius/dify/pull/38185
* fix(web): align external API and service API buttons vertically in datasets header by @p2003722 in https://github.com/langgenius/dify/pull/38139
* chore(api): upgrade graphon to v0.6.0, migrate HITL logic back to Dify by @QuantumGhost in https://github.com/langgenius/dify/pull/38247
* fix: handle Xinference model credential context by @AsperforMias in https://github.com/langgenius/dify/pull/38348
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/38355
* feat(api): abort active workflow runs during Celery warm shutdown by @linw1995 in https://github.com/langgenius/dify/pull/38220
* feat: snippet siderbar update by @JzoNgKVO in https://github.com/langgenius/dify/pull/38371
* chore: compress large plugin_model obj in redis by @hjlarry in https://github.com/langgenius/dify/pull/38374
* fix(cli): report GitHub API rate limits in difyctl install scripts by @lin-snow in https://github.com/langgenius/dify/pull/38375
* refactor: manage rag pipeline sessions explicitly by @41tair in https://github.com/langgenius/dify/pull/38274
* fix: incorrect backgroud when dark mode and no plugins by @hjlarry in https://github.com/langgenius/dify/pull/38378
* chore: use zstd for plugin model provider cache by @hjlarry in https://github.com/langgenius/dify/pull/38382
* fix(web): adjust snippets input count badge color by @JzoNgKVO in https://github.com/langgenius/dify/pull/38386
* fix(chat): enhance pointer event handling in chat components by @WTW0313 in https://github.com/langgenius/dify/pull/38385
* feat(api): add sandbox info endpoint for Agent App conversations by @linw1995 in https://github.com/langgenius/dify/pull/38390
* refactor: make session boundaries explicit for migration flows by @41tair in https://github.com/langgenius/dify/pull/38379
* refactor: replace db.paginate with plain SQLAlchemy pagination by @sergioperezcheco in https://github.com/langgenius/dify/pull/38280
* test(dify-ui): remove low-value style assertions by @lyzno1 in https://github.com/langgenius/dify/pull/38418
* fix(dify-ui): standardize story focus indicators by @lyzno1 in https://github.com/langgenius/dify/pull/38417
* fix(models): correct onupdate typo on trigger.py updated_at columns by @SquabbyZ in https://github.com/langgenius/dify/pull/38341
* refactor(dify-ui): render ContextMenu story trigger as a semantic area by @lyzno1 with @Copilot in https://github.com/langgenius/dify/pull/38420
* chore(agent-v2): sync daily changes by @lyzno1 in https://github.com/langgenius/dify/pull/38298
* style: fix provider card dropdown menu seperator margin by @lyzno1 in https://github.com/langgenius/dify/pull/38422
* ci: extract external E2E into dedicated post-merge workflow by @lyzno1 with @Copilot in https://github.com/langgenius/dify/pull/38426
* fix(web): prevent plugin cards from overlapping marketplace panel by @lyzno1 in https://github.com/langgenius/dify/pull/38427
* fix(dify-ui): improve picker type inference by @lyzno1 in https://github.com/langgenius/dify/pull/38428
* fix(dify-ui): preserve radio value generics by @lyzno1 in https://github.com/langgenius/dify/pull/38429
* test(e2e): split agent build draft apply coverage by @lyzno1 in https://github.com/langgenius/dify/pull/38431
* fix(api/tasks): use f-string for raise messages in resume_workflow_ex… by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/37607
* refactor(api): migrate console explore endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37953
* refactor: drop redundant len(tag_ids)==0 check in get_target_ids_by_tag_ids by @isheng-eqi in https://github.com/langgenius/dify/pull/38447
* build(deps): bump the github-actions-dependencies group across 1 directory with 12 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/38430
* fix(web): update snippet placeholder icon color by @JzoNgKVO in https://github.com/langgenius/dify/pull/38445
* fix(api): isolate side-effect session writes in multimodal and RAG handlers by @agarwalpranav0711 in https://github.com/langgenius/dify/pull/38210
* docs(dify-ui): clarify radio composition stories by @lyzno1 in https://github.com/langgenius/dify/pull/38456
* refactor(api): migrate workspace account endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37954
* refactor(api): migrate dataset rag pipeline endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37958
* refactor(api): remove member field compatibility by @cqjjjzr in https://github.com/langgenius/dify/pull/37966
* test: example use sqlite3 as unittest backend by @asukaminato0721 in https://github.com/langgenius/dify/pull/38159
* refactor(api): migrate web auth endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37961
* fix(api): resolve plugin external user ids in backwards invocation by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/38098
* feat(api): pass app_id to model plugins for provider-side cost attribution by @ryuta-kobayashi-ug in https://github.com/langgenius/dify/pull/35859
* fix(web): redirect imported apps with creator permissions by @hjlarry in https://github.com/langgenius/dify/pull/38460
* chore: Update sidebar web app menu translations by @hjlarry in https://github.com/langgenius/dify/pull/38473
* refactor(dify-ui): consolidate radio family API by @lyzno1 in https://github.com/langgenius/dify/pull/38479
* chore(agent-v2): sync changes by @lyzno1 in https://github.com/langgenius/dify/pull/38442
* refactor(api): Stop masking refresh-token service errors as 401 by @QuantumGhost in https://github.com/langgenius/dify/pull/38463
* fix(web): unify detail sidebar home control by @Jingyi-Dify in https://github.com/langgenius/dify/pull/38487
* refactor(api): clarify DSL import and plugin migration boundaries by @WH-2099 in https://github.com/langgenius/dify/pull/38483
* chore: set NEXT_PUBLIC_ENABLE_FEATURE_PREVIEW default to true by @crazywoola with @Copilot in https://github.com/langgenius/dify/pull/38362
* feat(mcp): support MCP protocol 2025-06-18 for workflow-as-MCP server (version negotiation + structured output) by @CourTeous33 in https://github.com/langgenius/dify/pull/37892
* test(e2e): stabilize Agent v2 external runtime checks by @hyoban in https://github.com/langgenius/dify/pull/38493
* chore: add sqlite3 to conftest by @asukaminato0721 in https://github.com/langgenius/dify/pull/38475
* fix: resolve 36288 mypy errors by @jashwanth-reddy-g in https://github.com/langgenius/dify/pull/37850
* fix: editor should not manage member by @hjlarry in https://github.com/langgenius/dify/pull/38503
* chore: update editor permission by @fatelei in https://github.com/langgenius/dify/pull/38505
* chore: improve cherry pick missed message by @FFXN in https://github.com/langgenius/dify/pull/38496
* docs(component): document focus-visible guidance by @lyzno1 in https://github.com/langgenius/dify/pull/38509
* refactor(web): move app context layout styles to shell by @lyzno1 in https://github.com/langgenius/dify/pull/38511
* fix(web): add backdrop blur to skip nav by @lyzno1 in https://github.com/langgenius/dify/pull/38517
* fix: can't debug model plugins by @hjlarry in https://github.com/langgenius/dify/pull/38500
* refactor(web): clarify app context bootstrap graph by @hyoban in https://github.com/langgenius/dify/pull/38516
* chore(api): cache the setup status to cut down DB access by @cqjjjzr in https://github.com/langgenius/dify/pull/36966
* refactor(test): replace SimpleNamespace with typed mocks in schedule service tests by @ojasarora77 in https://github.com/langgenius/dify/pull/38393
* refactor(web): reduce query atom subscriptions by @hyoban in https://github.com/langgenius/dify/pull/38521
* test(services): cover DSL import and plugin migration regressions by @Lillian68 in https://github.com/langgenius/dify/pull/36072
* refactor(openapi): resource-oriented paths for /openapi/v1 + difyctl version gate by @lin-snow in https://github.com/langgenius/dify/pull/38367
* refactor(web): migrate dataset access context by @hyoban in https://github.com/langgenius/dify/pull/38523
* chore: clean Db session from service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38227
* test(dify-ui): remove brittle primitive assertions by @lyzno1 in https://github.com/langgenius/dify/pull/38529
* refactor(web): migrate app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38530
* chore(deps): upgrade vite-plus toolchain by @lyzno1 in https://github.com/langgenius/dify/pull/38534
* fix(web): cache server console context by @lyzno1 in https://github.com/langgenius/dify/pull/38535
* test(web): align auth e2e with console home by @lyzno1 in https://github.com/langgenius/dify/pull/38538
* fix: raise clear error on unsupported language in execute_code by @isheng-eqi in https://github.com/langgenius/dify/pull/38448
* fix(ci): make no-new-getattr guard stable in shallow PR checkouts by @EvanYao826 in https://github.com/langgenius/dify/pull/38480
* fix(web): guard invite-settings activate button against double-click by @SquabbyZ in https://github.com/langgenius/dify/pull/38337
* refactor(web): migrate plugins and tools app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38533
* refactor(web): migrate billing app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38541
* feat(api): use billing quota for credit pool by @zyssyz123 in https://github.com/langgenius/dify/pull/38028
* fix(cli): --insecure also skips TLS certificate verification by @GareArc in https://github.com/langgenius/dify/pull/38531
* chore: remove superpowers artifacts by @lyzno1 in https://github.com/langgenius/dify/pull/38547
* fix: display errors for oauth page by @crazywoola in https://github.com/langgenius/dify/pull/38546
* refactor(web): migrate account settings app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38544
* test: more caplog by @asukaminato0721 in https://github.com/langgenius/dify/pull/38452
* refactor(web): migrate workflow app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38552
* refactor(web): migrate agent v2 app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38558
* refactor(api): migrate workspace tool endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37959
* refactor(api): remove remaining legacy field remnants by @cqjjjzr in https://github.com/langgenius/dify/pull/37967
* refactor(web): migrate shell navigation app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38560
* test: scope agent build draft e2e selector by @lyzno1 in https://github.com/langgenius/dify/pull/38563
* refactor(web): remove remaining app context consumers by @hyoban in https://github.com/langgenius/dify/pull/38565
* chore(agent-v2): sync changes by @lyzno1 in https://github.com/langgenius/dify/pull/38513
* perf: batch-load messages in advanced-chat workflow run list to remove N+1 by @weijun-xia in https://github.com/langgenius/dify/pull/38359
* refactor(web): remove app context provider by @hyoban in https://github.com/langgenius/dify/pull/38568
* test(e2e): stabilize agent build draft note scenario by @lyzno1 in https://github.com/langgenius/dify/pull/38571
* refactor(web): sync app context effects with jotai by @hyoban in https://github.com/langgenius/dify/pull/38570
* test(e2e): fix agent build note runtime connection by @lyzno1 in https://github.com/langgenius/dify/pull/38574
* fix: preserve ResponseStreamFilter state across workflow pause/resume by @GareArc in https://github.com/langgenius/dify/pull/38540
* chore: upgrade TypeScript 7 by @hyoban in https://github.com/langgenius/dify/pull/38575
* fix: when delete custom model remove its cache by @hjlarry in https://github.com/langgenius/dify/pull/38577
* refactor(web): add prefetched query atom by @hyoban in https://github.com/langgenius/dify/pull/38572
* chore: generate fastopenapi console contracts by @hyoban in https://github.com/langgenius/dify/pull/38580
* refactor(api): migrate workspace model endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37963
* refactor(api): migrate snippet workspace endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37956
* refactor(api): migrate dataset endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37957
* refactor(api): migrate web chat endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37962
* refactor(api): migrate service app endpoints to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/37960
* fix: run user_connect authorization inside Flask app context by @GareArc in https://github.com/langgenius/dify/pull/38585
* fix: guard chat tree against out-of-order parents by @iamjoel in https://github.com/langgenius/dify/pull/38590
* fix(web): preserve attribution from auth redirect by @CodingOnStar in https://github.com/langgenius/dify/pull/38583
* refactor(web): split app context state atoms by @hyoban in https://github.com/langgenius/dify/pull/38588
* refactor(tests): replace logger mocks with caplog in trace provider tests by @melooooooo in https://github.com/langgenius/dify/pull/38569
* fix: chunk workflow failure tracking data by @CodingOnStar in https://github.com/langgenius/dify/pull/38598
* chore: batch example #38419 by @asukaminato0721 in https://github.com/langgenius/dify/pull/38474
* fix: harden workflow archive DB retries by @zhaohao1004 in https://github.com/langgenius/dify/pull/38170
* fix(api): ignore invalid utf8 cache payloads by @Harsh23Kashyap in https://github.com/langgenius/dify/pull/37835
* docs: remove Dify Premium on AWS Marketplace section from all READMEs by @Inlei in https://github.com/langgenius/dify/pull/38607
* feat: daily sync by @zyssyz123 in https://github.com/langgenius/dify/pull/38593
* fix(web): update docs links by @hyoban in https://github.com/langgenius/dify/pull/38591
* fix: fix miss session param by @fatelei in https://github.com/langgenius/dify/pull/38612
* chore: Bump version to 1.16.0-rc1 by @QuantumGhost in https://github.com/langgenius/dify/pull/38600
* fix: fix auth prefix duplicate by @fatelei in https://github.com/langgenius/dify/pull/38616
* fix: remove hardcoded sandbox path in configuration file by @QuantumGhost in https://github.com/langgenius/dify/pull/38618
* fix(web): save agent configure draft on route leave by @lyzno1 in https://github.com/langgenius/dify/pull/38620
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/38627
* chore: remove unused param by @fatelei in https://github.com/langgenius/dify/pull/38628
* chore: Replace @patch logger.warning with caplog fixture in credit_pool_service test by @DresdenGman in https://github.com/langgenius/dify/pull/38626
* chore(api): Prohibit new direct SQLAlchemy in controller by @cqjjjzr in https://github.com/langgenius/dify/pull/38624
* test: Mock to sqlite3 by @asukaminato0721 in https://github.com/langgenius/dify/pull/38499
* feat: ee agent sandbox support by @wylswz in https://github.com/langgenius/dify/pull/38528
* fix: simplify help menu upgrade item by @lyzno1 in https://github.com/langgenius/dify/pull/38635
* chore: migrate js-yaml to v5 by @hyoban in https://github.com/langgenius/dify/pull/38639
* test(e2e): consume agent service API SSE incrementally by @lyzno1 in https://github.com/langgenius/dify/pull/38634
* fix(web): agent tool credentials mismatch by @JzoNgKVO in https://github.com/langgenius/dify/pull/38637
* fix(agent): surface knowledge retrieval failures by @zyssyz123 in https://github.com/langgenius/dify/pull/38640
* test: use sqlite3 session by @asukaminato0721 in https://github.com/langgenius/dify/pull/38641
* fix: final answer in new agent would clear after sse if agent thought has answer by @iamjoel in https://github.com/langgenius/dify/pull/38649
* fix(web): simplify infotip icon variants by @lyzno1 in https://github.com/langgenius/dify/pull/38644
* fix(web): support punctuation in markdown form field names by @JzoNgKVO in https://github.com/langgenius/dify/pull/38651
* feat(web): refine web app customization options by @CyberPU2099 in https://github.com/langgenius/dify/pull/38650
* fix(trigger): surface webhook trigger quota exceeded as 429 response by @linw1995 in https://github.com/langgenius/dify/pull/38656
* feat: create app init rbac scope to all and add workspace members. by @fatelei in https://github.com/langgenius/dify/pull/38636
* refactor(web): migrate i18n to selector optimize mode by @hyoban in https://github.com/langgenius/dify/pull/38657
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/38658
* fix(trigger): return 429 instead of 500 when API quota is exceeded by @linw1995 in https://github.com/langgenius/dify/pull/38664
* perf(web): lazy-load Vite plugins by @hyoban in https://github.com/langgenius/dify/pull/38663
* test(web): centralize i18n mocks by @hyoban in https://github.com/langgenius/dify/pull/38670
* refactor(dify-ui): standardize primitive boundary names by @lyzno1 in https://github.com/langgenius/dify/pull/38669
* fix(web): improve marketplace install dialog accessibility by @lyzno1 in https://github.com/langgenius/dify/pull/38798
* fix(web): correct knowledge dialog draft state by @lyzno1 in https://github.com/langgenius/dify/pull/38794
* refactor(web): normalize z-index layering by @lyzno1 in https://github.com/langgenius/dify/pull/38796
* fix(agent-v2): restore keyboard access to row actions by @lyzno1 in https://github.com/langgenius/dify/pull/38792
* chore(dify-ui): enforce strict ESLint rules by @lyzno1 in https://github.com/langgenius/dify/pull/38793
* fix(web): split model selection and settings actions by @lyzno1 in https://github.com/langgenius/dify/pull/38797
* chore: migrate formatting to vp fmt by @hyoban in https://github.com/langgenius/dify/pull/38705
* fix: eagerly validate conversation on service-api and explore chat endpoints by @he-yufeng in https://github.com/langgenius/dify/pull/38801
* style: format with vp fmt by @hyoban in https://github.com/langgenius/dify/pull/38803
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/38807
* fix: update role selector to use max height for scroll area by @WTW0313 in https://github.com/langgenius/dify/pull/38831
* chore: sandbox plan should not execution special workflow by @hjlarry in https://github.com/langgenius/dify/pull/38662
* test: use sqlite3 session in test_remove_app_and_related_data_task by @asukaminato0721 in https://github.com/langgenius/dify/pull/38778
* test: use sqlite3 session in test_plugin_tool by @asukaminato0721 in https://github.com/langgenius/dify/pull/38781
* test: use sqlite3 session in test_data_migration_commands by @asukaminato0721 in https://github.com/langgenius/dify/pull/38672
* fix: marketplace page header jitter when it in sticky status by @iamjoel in https://github.com/langgenius/dify/pull/38832
* chore(deps): bump flask-cors from 6.0.2 to 6.0.5 in /api in the flask group by @dependabot[bot] in https://github.com/langgenius/dify/pull/38810
* chore(deps): bump the google group in /api with 2 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/38811
* build(deps): bump soupsieve from 2.8 to 2.8.4 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/38631
* chore(deps): bump the storage group in /api with 5 updates by @dependabot[bot] in https://github.com/langgenius/dify/pull/38825
* refactor(chat): modernize speech-to-text pipeline by @lyzno1 in https://github.com/langgenius/dify/pull/38653
* test: use sqlite3 session in test_completion by @asukaminato0721 in https://github.com/langgenius/dify/pull/38783
* test: use sqlite3 session in test_comment_models by @asukaminato0721 in https://github.com/langgenius/dify/pull/38767
* test: use sqlite3 session in test_wraps by @asukaminato0721 in https://github.com/langgenius/dify/pull/38749
* test: use sqlite3 session in test_trace_session_metadata by @asukaminato0721 in https://github.com/langgenius/dify/pull/38750
* test: use sqlite3 session in test_credential_utils by @asukaminato0721 in https://github.com/langgenius/dify/pull/38747
* test: use sqlite3 session in test_buildin_retrieval by @asukaminato0721 in https://github.com/langgenius/dify/pull/38745
* test: use sqlite3 session in test_banner by @asukaminato0721 in https://github.com/langgenius/dify/pull/38746
* fix: max token params can not be disabled in follow-up model parameters by @iamjoel in https://github.com/langgenius/dify/pull/38842
* chore: migrate linting to vp lint with ESLint fallback by @hyoban in https://github.com/langgenius/dify/pull/38834
* fix: prevent chat attachments from scrolling out of view by @iamjoel in https://github.com/langgenius/dify/pull/38846
* chore(deps): bump python-engineio and python-socketio for CVE fixes by @GareArc in https://github.com/langgenius/dify/pull/38844
* test: use sqlite3 session in test_billing_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38779
* test: use sqlite3 session in test_remote_retrieval by @asukaminato0721 in https://github.com/langgenius/dify/pull/38748
* test: use sqlite3 session in test_retrieval_attachment_access by @asukaminato0721 in https://github.com/langgenius/dify/pull/38766
* test: use sqlite3 session in test_app_event_signals by @asukaminato0721 in https://github.com/langgenius/dify/pull/38776
* test: use sqlite3 session in test_oauth_device_flow by @asukaminato0721 in https://github.com/langgenius/dify/pull/38782
* chore: add skill upload fail tip by @iamjoel in https://github.com/langgenius/dify/pull/38851
* test: use sqlite3 session in test_create_document_index by @asukaminato0721 in https://github.com/langgenius/dify/pull/38690
* chore: migrate static checks to vp check by @hyoban in https://github.com/langgenius/dify/pull/38850
* fix(api): require trial app registration for reads by @linw1995 in https://github.com/langgenius/dify/pull/38858
* chore: Improve workflow generator accessibility and API contracts by @crazywoola in https://github.com/langgenius/dify/pull/38838
* fix(auth): prevent open redirects in post-login flows by @CodingOnStar in https://github.com/langgenius/dify/pull/38864
* chore: improve static check performance by @hyoban in https://github.com/langgenius/dify/pull/38866
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/38868
* fix: align member invitation flow and API contracts by @lyzno1 in https://github.com/langgenius/dify/pull/38856
* chore: simplify lint plugin configuration by @hyoban in https://github.com/langgenius/dify/pull/38872
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/38873
* fix: align member invitation state and errors by @lyzno1 in https://github.com/langgenius/dify/pull/38885
* fix(web): monitoring chart zero-value color and date range indicator by @hjlarry in https://github.com/langgenius/dify/pull/38821
* test: use sqlite3 session in test_schedule_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38707
* test: use sqlite3 session in test_plugin by @asukaminato0721 in https://github.com/langgenius/dify/pull/38710
* test: use sqlite3 session in test_data_migration_wizard by @asukaminato0721 in https://github.com/langgenius/dify/pull/38708
* test: use sqlite3 session in test_app_dsl_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38715
* test: use sqlite3 session in test_annotation_reply by @asukaminato0721 in https://github.com/langgenius/dify/pull/38714
* test: use sqlite3 session in test_audio by @asukaminato0721 in https://github.com/langgenius/dify/pull/38713
* test: use sqlite3 session in test_skill_standardize_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38712
* test: use sqlite3 session in test_credential_permission_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38711
* test: use sqlite3 session in test_agent_drive_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38709
* chore(deps): bump json-repair from 0.59.4 to 0.60.1 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/38878
* chore(deps): bump json-repair from 0.59.4 to 0.60.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/38879
* chore(deps): bump transformers from 5.3.0 to 5.5.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/38877
* fix(deps): upgrade fickling, pillow, click by @wylswz in https://github.com/langgenius/dify/pull/38893
* fix(e2e): harden failure lifecycle diagnostics by @lyzno1 in https://github.com/langgenius/dify/pull/38896
* fix(web): align workspace card hover state by @lyzno1 in https://github.com/langgenius/dify/pull/38898
* test: use sqlite3 session in test_file_factory by @asukaminato0721 in https://github.com/langgenius/dify/pull/38758
* test: use sqlite3 session in test_file_tenant_validator by @asukaminato0721 in https://github.com/langgenius/dify/pull/38756
* test: use sqlite3 session in test_dataset_service_lock_not_owned by @asukaminato0721 in https://github.com/langgenius/dify/pull/38755
* feat(enterprise): enforce licensed seats cap at account creation by @zhangx1n in https://github.com/langgenius/dify/pull/38883
* fix(web): improve explore banner responsiveness by @lyzno1 in https://github.com/langgenius/dify/pull/38899
* test: use sqlite3 session in test_remote_fetcher by @asukaminato0721 in https://github.com/langgenius/dify/pull/38773
* test: use sqlite3 session in test_workspaces_members by @asukaminato0721 in https://github.com/langgenius/dify/pull/38775
* docs: simplify frontend testing guidance by @lyzno1 in https://github.com/langgenius/dify/pull/38909
* fix(auth): preserve redirect URL across auth flows by @CodingOnStar in https://github.com/langgenius/dify/pull/38905
* feat: allow user specific home dir by @fatelei in https://github.com/langgenius/dify/pull/38903
* feat(oauth): preserve redirect_url through OAuth state for post-login… by @linw1995 in https://github.com/langgenius/dify/pull/38900
* feat: archive logs export by @hjlarry in https://github.com/langgenius/dify/pull/38207
* fix: SSRF bypass via raw httpx.get in API tool schema fetch by @Snakinya in https://github.com/langgenius/dify/pull/37746
* feat: when knowledge permission is all team need update rbac setttings by @fatelei in https://github.com/langgenius/dify/pull/38911
* refactor(web): rebuild goto anything dialog by @lyzno1 in https://github.com/langgenius/dify/pull/38914
* test: move recommended app service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38940
* test: move web forgot-password coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38943
* test: move trigger provider coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38942
* feat(agent): shellctl rewritten in go  by @wylswz in https://github.com/langgenius/dify/pull/38841
* chore: chatflow api should check workflow_id and sandbox plan by @hjlarry in https://github.com/langgenius/dify/pull/38892
* feat(agent): support new Agent DSL import and export by @zyssyz123 in https://github.com/langgenius/dify/pull/38849
* refactor(web): standardize hotkey ownership and typing by @lyzno1 in https://github.com/langgenius/dify/pull/38960
* test: move plugin service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38935
* test: use sqlite3 session in test_audio_service by @asukaminato0721 in https://github.com/langgenius/dify/pull/38768
* fix(web): gate console atom consumers on bootstrap by @Jingyi-Dify in https://github.com/langgenius/dify/pull/38962
* test: remove duplicate code executor integration coverage by @asukaminato0721 in https://github.com/langgenius/dify/pull/38947
* test: remove unit-only authentication integration cases by @asukaminato0721 in https://github.com/langgenius/dify/pull/38948
* test: move tool provider controller coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38944
* test: move RAG pipeline dataset coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38933
* fix(e2e): restore shellctl external runtime by @lyzno1 in https://github.com/langgenius/dify/pull/38968
* test: move hit testing service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38925
* test: move recommendation database retrieval coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38921
* test: move account deletion sync coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38917
* test: move API key authentication coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38919
* test: move console forgot-password coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38922
* test: move RAG pipeline controller coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38939
* test: move email registration coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38928
* fix(e2e): probe shellctl health in preflight by @lyzno1 in https://github.com/langgenius/dify/pull/38971
* test: move console app API coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38915
* test: move MCP controller coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38930
* test: use sqlite3 session in test_provider_configuration by @asukaminato0721 in https://github.com/langgenius/dify/pull/38689
* test: move feedback service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38927
* fix(agent-v2): use default select composition for time range picker by @lyzno1 in https://github.com/langgenius/dify/pull/38977
* fix: preserve and display workflow retry details by @Blackoutta in https://github.com/langgenius/dify/pull/38854
* chore: workflow comment remove rbac check by @fatelei in https://github.com/langgenius/dify/pull/38978
* fix(api): harden trial apps access for recommended apps by @linw1995 in https://github.com/langgenius/dify/pull/38970
* chore(deps): bump httplib2, setuptools, wandb for CVE fixes by @GareArc in https://github.com/langgenius/dify/pull/38976
* feat: redis support keepalive and retry more error by @fatelei in https://github.com/langgenius/dify/pull/38973
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/38979
* refactor: explicit DB session propagation across backend paths by @41tair in https://github.com/langgenius/dify/pull/38559
* fix: restore responding state after HITL resume by @WTW0313 in https://github.com/langgenius/dify/pull/38992
* feat(enterprise): reject member invites that would exceed licensed seats by @zhangx1n in https://github.com/langgenius/dify/pull/38995
* fix: fix conversation title is overwrite empty by @fatelei in https://github.com/langgenius/dify/pull/39004
* fix(agent): preserve Unicode separators in SSE streams by @zyssyz123 in https://github.com/langgenius/dify/pull/39008
* fix(web): align agent activity disclosure by @lyzno1 in https://github.com/langgenius/dify/pull/38999
* fix(api): bind scoped lookups to nested owner refs by @WH-2099 in https://github.com/langgenius/dify/pull/38470
* fix(auth): keep login redirects on current deployment by @CodingOnStar in https://github.com/langgenius/dify/pull/39013
* fix: allow workflow comments for layout users by @WTW0313 in https://github.com/langgenius/dify/pull/39014
* refactor(dify-ui): clarify overlay style semantics by @lyzno1 in https://github.com/langgenius/dify/pull/39016
* feat: new agent support import and export in frontend by @iamjoel in https://github.com/langgenius/dify/pull/39012
* feat: protect agent HOME with landlock by @wylswz in https://github.com/langgenius/dify/pull/39000
* docs: update Star History chart token by @WH-2099 in https://github.com/langgenius/dify/pull/39019
* fix(agent): preserve DSL asset placeholders and count draft references by @zyssyz123 in https://github.com/langgenius/dify/pull/39015
* fix(e2e): follow agent roster create menu by @lyzno1 in https://github.com/langgenius/dify/pull/39020
* test: align dify ui tests with browser mode by @lyzno1 in https://github.com/langgenius/dify/pull/39024
* fix(agent): aggregate monitor sources by workflow app by @zyssyz123 in https://github.com/langgenius/dify/pull/39021
* test: simplify dify ui browser test setup by @lyzno1 in https://github.com/langgenius/dify/pull/39028
* test(dify-ui): focus component tests on behavior by @lyzno1 in https://github.com/langgenius/dify/pull/39030
* feat: improve ai-credits display by @hjlarry in https://github.com/langgenius/dify/pull/38589
* fix(web): hide broken table actions in Streamdown fullscreen by @hjlarry in https://github.com/langgenius/dify/pull/38894
* fix: fix miss create rbac binding by @fatelei in https://github.com/langgenius/dify/pull/39023
* fix(api): serialize trial workflow conversation variables by @linw1995 in https://github.com/langgenius/dify/pull/39038
* fix(agent): accept legacy missing asset placeholders by @zyssyz123 in https://github.com/langgenius/dify/pull/39039
* fix(agent): add new envs to .env.example by @wylswz in https://github.com/langgenius/dify/pull/39041
* fix(ci): run CLI checks for contract changes by @lyzno1 in https://github.com/langgenius/dify/pull/39047
* chore: new agent enchance by @iamjoel in https://github.com/langgenius/dify/pull/39040
* test(e2e): harden behavior coverage and CI gates by @lyzno1 in https://github.com/langgenius/dify/pull/39043
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/39134
* fix(agent): import workflow agents as inline by @zyssyz123 in https://github.com/langgenius/dify/pull/39135
* fix: validate inline agent files and skills in the workflow checklist by @iamjoel in https://github.com/langgenius/dify/pull/39137
* test: use SQLite sessions in core workflow by @asukaminato0721 in https://github.com/langgenius/dify/pull/39110
* test: use SQLite sessions in services core by @asukaminato0721 in https://github.com/langgenius/dify/pull/39112
* refactor(api): pass tenant_id explicitly to workflow repositories by @linw1995 in https://github.com/langgenius/dify/pull/39042
* fix(readme): remove trailing whitespace by @KurosawaGeeker in https://github.com/langgenius/dify/pull/39143
* fix: downgrade to landlock v1 by @wylswz in https://github.com/langgenius/dify/pull/39139
* test: use SQLite sessions in tasks by @asukaminato0721 in https://github.com/langgenius/dify/pull/39117
* chore: show package  installed status in marketplace page by @iamjoel in https://github.com/langgenius/dify/pull/39146
* chore: remove empty advanced setting by @iamjoel in https://github.com/langgenius/dify/pull/39147
* test: use sqlite3 session in test_api by @asukaminato0721 in https://github.com/langgenius/dify/pull/38736
* test: use sqlite3 session in test_remote_retrieval by @asukaminato0721 in https://github.com/langgenius/dify/pull/38737
* test: use sqlite3 session in test_tool_providers by @asukaminato0721 in https://github.com/langgenius/dify/pull/38754
* test: use sqlite3 session in test_tool_label_manager by @asukaminato0721 in https://github.com/langgenius/dify/pull/38762
* test: use sqlite3 session in test_passport by @asukaminato0721 in https://github.com/langgenius/dify/pull/38763
* test: move plugin parameter service coverage to unit tests by @asukaminato0721 in https://github.com/langgenius/dify/pull/38934
* test: use sqlite3 session in test_human_input_form by @asukaminato0721 in https://github.com/langgenius/dify/pull/38780
* test(e2e): enforce behavior-driven quality gates by @lyzno1 in https://github.com/langgenius/dify/pull/39148
* test: use sqlite3 session in test_customized_retrieval by @asukaminato0721 in https://github.com/langgenius/dify/pull/38741
* fix: clean up env in example by @wylswz in https://github.com/langgenius/dify/pull/39044
* fix(web): unify workspace avatar usage by @Jingyi-Dify in https://github.com/langgenius/dify/pull/39160
* perf(workflow-generator): parallelize node config generation by @crazywoola in https://github.com/langgenius/dify/pull/38975
* chore: remove useless agent tip by @iamjoel in https://github.com/langgenius/dify/pull/39171
* feat: default plugins for new user by @hjlarry in https://github.com/langgenius/dify/pull/39167
* fix(web): show current profile in main navigation by @lyzno1 in https://github.com/langgenius/dify/pull/39172
* fix(web): settle running nodes after workflow failure by @lyzno1 in https://github.com/langgenius/dify/pull/39173
* chore: upgrade Vite+ to 0.2.5 by @lyzno1 in https://github.com/langgenius/dify/pull/39181
* chore: add agent tooltip by @iamjoel in https://github.com/langgenius/dify/pull/39183
* fix: change email not work by @hjlarry in https://github.com/langgenius/dify/pull/39182
* fix: remove patch logger in test, use caplog instead (Closes #37468) by @sahasweety in https://github.com/langgenius/dify/pull/39159
* fix: can not create app from learn dify in app list page by @iamjoel in https://github.com/langgenius/dify/pull/39187
* feat: add Responses API tip for GPT-5.6 and later models in multiple languages by @WTW0313 in https://github.com/langgenius/dify/pull/39188
* fix(agent): bound streams and cancel zombie workflow runs by @zyssyz123 in https://github.com/langgenius/dify/pull/39186
* fix: can not typing in the change node search field by @iamjoel in https://github.com/langgenius/dify/pull/39189
* feat: redact agent shell output by @wylswz in https://github.com/langgenius/dify/pull/39190
* fix(agent): allow dangling refs in workflow drafts by @zyssyz123 in https://github.com/langgenius/dify/pull/39192
* test(web): remove low-value unit tests by @lyzno1 in https://github.com/langgenius/dify/pull/39193
* chore: bump version to 1.16.0 by @wylswz in https://github.com/langgenius/dify/pull/39196

## New Contributors
* @ojasarora77 made their first contribution in https://github.com/langgenius/dify/pull/37971
* @DevCube24 made their first contribution in https://github.com/langgenius/dify/pull/37997
* @CyberPU2099 made their first contribution in https://github.com/langgenius/dify/pull/37790
* @Harsh23Kashyap made their first contribution in https://github.com/langgenius/dify/pull/38006
* @uxgnod made their first contribution in https://github.com/langgenius/dify/pull/38030
* @shiyuanfang2nd made their first contribution in https://github.com/langgenius/dify/pull/38004
* @zeeshan56656 made their first contribution in https://github.com/langgenius/dify/pull/36998
* @Sanket2329 made their first contribution in https://github.com/langgenius/dify/pull/37938
* @VeraPyuyi made their first contribution in https://github.com/langgenius/dify/pull/37388
* @p2003722 made their first contribution in https://github.com/langgenius/dify/pull/38118
* @sergioperezcheco made their first contribution in https://github.com/langgenius/dify/pull/38082
* @escapefyh made their first contribution in https://github.com/langgenius/dify/pull/37660
* @SquabbyZ made their first contribution in https://github.com/langgenius/dify/pull/38341
* @isheng-eqi made their first contribution in https://github.com/langgenius/dify/pull/38447
* @agarwalpranav0711 made their first contribution in https://github.com/langgenius/dify/pull/38210
* @ryuta-kobayashi-ug made their first contribution in https://github.com/langgenius/dify/pull/35859
* @melooooooo made their first contribution in https://github.com/langgenius/dify/pull/38569
* @DresdenGman made their first contribution in https://github.com/langgenius/dify/pull/38626
* @Snakinya made their first contribution in https://github.com/langgenius/dify/pull/37746
* @KurosawaGeeker made their first contribution in https://github.com/langgenius/dify/pull/39143
* @sahasweety made their first contribution in https://github.com/langgenius/dify/pull/39159

**Full Changelog**: https://github.com/langgenius/dify/compare/1.15.0...1.16.0

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.16.0` · 2026-07-17 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
