---
title: "dify 1.16.0-rc1"
project: "dify"
repo: "langgenius/dify"
tag: "1.16.0-rc1"
published: "2026-07-09"
type: "minor"
lang: "en"
summary: "As many of you know, the shell-based LLM agent paradigm has brought a major leap in agent capabilities and changed how we think about agents."
---

# dify 1.16.0-rc1

# Introducing Dify Agent *(Experimental)*: A New Agent Experience in Dify

> [!WARNING]
> You should provide Dify Agent services ⚠️**only to trusted, non-malicious users**⚠️.

As many of you know, the shell-based LLM agent paradigm has brought a major leap in agent capabilities and changed how we think about agents. Meanwhile, Skills provide a standardized way to package and distribute capabilities, making it easier to build powerful agents.

Today, we are experimentally launching Dify Agent. Like other leading agents, it runs in a Linux sandbox. This release includes:

- A builder for creating Dify Agents
  - You can build Dify Agents through the UI: set a base prompt, upload Skills and files, and connect tools and knowledge from the Dify ecosystem.
  - We also provide an agent that helps you build Dify Agents. Through conversation, it can configure the Linux sandbox environment, install required packages, and create new Skills and files that your Dify Agent can use later.

- Dify Workflow integration for Dify Agent
  - You can use an existing Dify Agent in a Dify Workflow, or temporarily create an inline Dify Agent. It will execute the task defined by the workflow node, generate the required output, and pass it to the next node.

- A new web app experience
  - The Dify Agent you build can be published and used as a web app. While the user experience remains familiar, it is now powered by Dify Agent.

Docs: https://docs.dify.ai/en/self-host/use-dify/build/new-agent/overview

## Limitations

Please note that in the current experimental release, all Dify Agents run in the same sandbox. This means:

- Under normal circumstances, each Dify Agent configures its environment and executes tasks within its own workspace without interfering with others.
- However, with simple instructions, any Dify Agent can read or interfere with the environments and data of other Dify Agents, including user data.

Strict isolation will be implemented in a future release. For now,

> [!WARNING]
> You should provide Dify Agent services ⚠️**only to trusted, non-malicious users**⚠️.

Similarly, because Dify Agent is not fully ready yet, you may find that some features are not available for Dify Agent. For example, Dify Workflow DSL export is unavailable when the workflow contains nodes that reference Dify Agent.

## Upgrade Guide

> [!IMPORTANT]
>
> - This release includes new database migrations. Run them as part of the upgrade.
> - Environment variables changed. Review the Environment Variable Changes section and update your `.env` accordingly.
> - Docker Compose configuration files changed. If you maintain a customized `docker-compose.yaml`, review the changes and re-apply local customizations carefully.

### Docker Compose Deployments
1. Back up your customized docker-compose YAML and env files.
   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```
2. Get the latest code for the `1.16.0-rc1` release.
   ```bash
   git fetch --tags
   git checkout 1.16.0-rc1
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

### Source Code Deployments
1. Stop the API server, Worker, and Web frontend server.
2. Get the latest code for the `1.16.0-rc1` release.
   ```bash
   git fetch --tags
   git checkout 1.16.0-rc1
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
5. Restart the API server, Worker, and Web frontend server. To experiment with the new agent feature, you also need to start dify-agent and shellctl. **Important**: shellctl does not include built‑in authentication — for security, it is strongly recommended to run it inside a container.

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

**Full Changelog**: https://github.com/langgenius/dify/compare/1.15.0...1.16.0-rc1

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.16.0-rc1` · 2026-07-09 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.16.0-rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
