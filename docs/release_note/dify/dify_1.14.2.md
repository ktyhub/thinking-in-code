---
title: "dify 1.14.2"
project: "dify"
repo: "langgenius/dify"
tag: "1.14.2"
published: "2026-05-19"
type: "patch"
lang: "en"
summary: "v1.14.2 is a patch release focused on security hardening, workflow and knowledge reliability, observability fixes, agent groundwork, and deployment/runtime tuning after v1.14.1."
---

# dify 1.14.2

## 🚀 What's New in v1.14.2?

v1.14.2 is a patch release focused on security hardening, workflow and knowledge reliability, observability fixes, agent groundwork, and deployment/runtime tuning after v1.14.1.

### 🔐 Security and administration

- **Tenant-scoped sensitive endpoints** — strengthened tenant isolation for app trace-config endpoints and FilePreview text extraction. Thanks @xr843 in [#35793](https://github.com/langgenius/dify/pull/35793) and [#35797](https://github.com/langgenius/dify/pull/35797).
- **Tool credential safety** — restricted default builtin tool credential updates to workspace admins and owners, and cleaned stale tenant tool credentials during `reset-encrypt-key-pair`. Thanks @NeatGuyCoding and @xr843 in [#36264](https://github.com/langgenius/dify/pull/36264) and [#35843](https://github.com/langgenius/dify/pull/35843).

### 🧩 Workflow, HITL, and app runtime

- **Workflow execution reliability** — restored tracing after HITL workflow resume, improved workflow run callback tracking, reduced message-update database roundtrips, fixed memory fetches outside Flask context, and closed base64 file lookup sessions correctly. Thanks @Blackoutta, @CodingOnStar, @wylswz, @hjlarry, and @escape0707 in [#36064](https://github.com/langgenius/dify/pull/36064), [#36149](https://github.com/langgenius/dify/pull/36149), [#36213](https://github.com/langgenius/dify/pull/36213), [#36253](https://github.com/langgenius/dify/pull/36253), and [#36308](https://github.com/langgenius/dify/pull/36308).
- **Workflow and model selection polish** — fixed loading behavior when no model is selected, filtered model presets by supported parameters, and improved API extension dialog controls. Thanks @iamjoel and @lyzno1 in [#36342](https://github.com/langgenius/dify/pull/36342), [#36339](https://github.com/langgenius/dify/pull/36339), and [#36323](https://github.com/langgenius/dify/pull/36323).

### 📚 Data, RAG, and knowledge

- **Knowledge-base stability** — fixed knowledge hit-testing rendering, empty knowledge creation, recommended app category ordering, and null handling in recommended app detail retrieval. Thanks @FFXN, @laipz8200, @hjlarry, and @EvanYao826 in [#36106](https://github.com/langgenius/dify/pull/36106), [#36336](https://github.com/langgenius/dify/pull/36336), [#36161](https://github.com/langgenius/dify/pull/36161), and [#36153](https://github.com/langgenius/dify/pull/36153).
- **RAG and document processing** — allowed LLM nodes to access retrieved knowledge files, regenerated document summaries after API updates, fixed pipeline template rendering, and handled credential fetch failures in RAG pipelines more gracefully. Thanks @laipz8200, @EvanYao826, @FFXN, and @linw1995 in [#36175](https://github.com/langgenius/dify/pull/36175), [#36035](https://github.com/langgenius/dify/pull/36035), [#36168](https://github.com/langgenius/dify/pull/36168), and [#36165](https://github.com/langgenius/dify/pull/36165).

### 🎨 Web UI and product experience

- **App creation and onboarding** — tracked app creation source and template ID, initialized user timezone and language from the browser, and fixed WebApp icon and description display. Thanks @CodingOnStar, @lyzno1, and @JzoNgKVO in [#36369](https://github.com/langgenius/dify/pull/36369), [#36170](https://github.com/langgenius/dify/pull/36170), [#36206](https://github.com/langgenius/dify/pull/36206), and [#36209](https://github.com/langgenius/dify/pull/36209).
- **Annotation and datasets UI** — allowed annotation reply score thresholds below `0.8`, redirected unauthorized knowledge editors back to datasets, and fixed tag rename without type payload. Thanks @JzoNgKVO, @iamjoel, and @lyzno1 in [#36337](https://github.com/langgenius/dify/pull/36337), [#36073](https://github.com/langgenius/dify/pull/36073), and [#36182](https://github.com/langgenius/dify/pull/36182).
- **UI platform migration and polish** — added Checkbox and CheckboxGroup primitives, migrated more controls to `@langgenius/dify-ui`, improved dialog overflow layouts, and refined account avatar and install-flow interactions. Thanks @lyzno1 and @CodingOnStar in [#36271](https://github.com/langgenius/dify/pull/36271), [#36295](https://github.com/langgenius/dify/pull/36295), [#36255](https://github.com/langgenius/dify/pull/36255), [#36302](https://github.com/langgenius/dify/pull/36302), [#36111](https://github.com/langgenius/dify/pull/36111), [#36199](https://github.com/langgenius/dify/pull/36199), and [#36210](https://github.com/langgenius/dify/pull/36210).

### 🔎 Observability and tracing

- **Tracing reliability** — isolated Langfuse v3 SDK tracer providers to prevent cross-task interference and added Phoenix parent trace fallback behavior. Thanks @GareArc and @Blackoutta in [#36136](https://github.com/langgenius/dify/pull/36136) and [#36290](https://github.com/langgenius/dify/pull/36290).

### ⚙️ Deployment, dependencies, and developer experience

- **Deployment tuning** — upgraded plugin-daemon to `0.6.1`, increased the default GraphEngine minimum worker count, and refreshed Docker README references. Thanks @laipz8200, @kenwoodjw, and @RiskeyL in [#36312](https://github.com/langgenius/dify/pull/36312), [#35650](https://github.com/langgenius/dify/pull/35650), and [#36303](https://github.com/langgenius/dify/pull/36303).
- **Backend and CI maintenance** — moved static analysis toward Pyrefly, upgraded Graphon to `0.4.0`, added hotfix cherry-pick provenance checks, and improved generated contract workflows. Thanks @cqjjjzr, @laipz8200, and @hyoban in [#36154](https://github.com/langgenius/dify/pull/36154), [#36124](https://github.com/langgenius/dify/pull/36124), [#36340](https://github.com/langgenius/dify/pull/36340), and [#36286](https://github.com/langgenius/dify/pull/36286).
- **Dependency updates** — refreshed backend and agent dependencies including `authlib`, `ujson`, `langsmith`, and `urllib3`. Thanks @dependabot[bot] in [#36112](https://github.com/langgenius/dify/pull/36112), [#36121](https://github.com/langgenius/dify/pull/36121), [#36142](https://github.com/langgenius/dify/pull/36142), and [#36160](https://github.com/langgenius/dify/pull/36160).

## Upgrade Guide

> [!IMPORTANT]
>
> - This release includes a new database migration for configurable Explore app categories. Run database migrations as part of the upgrade.
> - Docker Compose environment variables are now split into categorized files under `docker/envs/**`. If you maintain a customized `docker-compose.yaml` or `.env`, review the new layout and re-apply local customizations carefully.
> - For self-hosted deployments, explicitly configured `SECRET_KEY` values continue to be respected. If `SECRET_KEY` is empty, Dify now generates and persists a runtime key automatically.

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
   git checkout 1.14.2
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
   git checkout 1.14.2
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
* fix: redirect unauthorized dataset access to /datasets for knowledge editors by @iamjoel in https://github.com/langgenius/dify/pull/36073
* chore: admin also has the permission of changing role by @iamjoel in https://github.com/langgenius/dify/pull/36069
* fix: fixed relative by @CodingOnStar in https://github.com/langgenius/dify/pull/36078
* chore: some match case by @asukaminato0721 in https://github.com/langgenius/dify/pull/36080
* fix: fix plugin miss version and checksum by @fatelei in https://github.com/langgenius/dify/pull/36083
* fix: restore tracing after HITL workflow resume by @Blackoutta in https://github.com/langgenius/dify/pull/36064
* chore: update deps by @hyoban in https://github.com/langgenius/dify/pull/36091
* fix: use Trans component for delete app confirmation text on editing page by @Copilot in https://github.com/langgenius/dify/pull/36092
* refactor: stabilize selector preview cards by @lyzno1 in https://github.com/langgenius/dify/pull/36105
* ci: Update pyrefly dependency version to 1.0.0 by @asukaminato0721 in https://github.com/langgenius/dify/pull/36100
* fix: knowledge hit-testing render failed. by @FFXN in https://github.com/langgenius/dify/pull/36106
* chore: remove obsolete admin console routes by @hjlarry in https://github.com/langgenius/dify/pull/35637
* fix(web): refine account avatar interactions by @lyzno1 in https://github.com/langgenius/dify/pull/36111
* chore(deps): bump ujson from 5.12.0 to 5.12.1 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/36112
* chore(i18n): sync translations with en-US by @github-actions[bot] in https://github.com/langgenius/dify/pull/36115
* chore(deps): bump authlib from 1.6.11 to 1.6.12 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/36121
* fix: isolate Langfuse v3 SDK TracerProvider to prevent cross-task interference by @GareArc in https://github.com/langgenius/dify/pull/36136
* chore(deps): bump langsmith from 0.7.31 to 0.8.0 in /api by @dependabot[bot] in https://github.com/langgenius/dify/pull/36142
* fix: credit pool access outside flask context by @hjlarry in https://github.com/langgenius/dify/pull/36143
* fix: fix pydantic union type error by @fatelei in https://github.com/langgenius/dify/pull/36134
* fix(errors): clean unnecessary | None in error classes by @mturac in https://github.com/langgenius/dify/pull/36135
* chore: drop unnecessary | None on LLMError and Mail.send by @BrianWang1990 in https://github.com/langgenius/dify/pull/36147
* chore: Remove pyright in favor of pyrefly by @cqjjjzr in https://github.com/langgenius/dify/pull/36154
* chore: enchance notify link ui by @iamjoel in https://github.com/langgenius/dify/pull/36155
* feat(agent): init agent server by @BeautyyuYanli in https://github.com/langgenius/dify/pull/36087
* feat(workflow): enhance workflow run callbacks with additional data tracking by @CodingOnStar in https://github.com/langgenius/dify/pull/36149
* chore(deps): bump urllib3 from 2.6.3 to 2.7.0 in /dify-agent by @dependabot[bot] in https://github.com/langgenius/dify/pull/36160
* fix: get recommend_app categories should not re-order it by @hjlarry in https://github.com/langgenius/dify/pull/36161
* fix: add null check in get_recommend_app_detail before accessing result['id'] by @EvanYao826 in https://github.com/langgenius/dify/pull/36153
* feat: allow disabling run time cred check by @wylswz in https://github.com/langgenius/dify/pull/36031
* fix: fix delete logs failed by @fatelei in https://github.com/langgenius/dify/pull/36151
* fix(api): gracefully handle credential fetch failures in rag pipeline by @linw1995 in https://github.com/langgenius/dify/pull/36165
* feat(MessageLogModal): refactor modal structure and improve tab handling by @CodingOnStar in https://github.com/langgenius/dify/pull/36169
* fix: pipeline template render by @FFXN in https://github.com/langgenius/dify/pull/36168
* chore: increase default graph engine min workers by @kenwoodjw in https://github.com/langgenius/dify/pull/35650
* fix: action btn is hidden if  there are many packages to install by @iamjoel in https://github.com/langgenius/dify/pull/36176
* refactor: cleanup duplicate code by @cqjjjzr in https://github.com/langgenius/dify/pull/36173
* refactor(api): migrate console.app.workflow_comment to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36180
* fix(api): allow LLM nodes to access retrieved knowledge files by @laipz8200 in https://github.com/langgenius/dify/pull/36175
* fix(security): enforce tenant scoping on app trace-config endpoints (GHSA-48xc-wmw8-3jr3) by @xr843 in https://github.com/langgenius/dify/pull/35793
* fix(security): tenant-scope FilePreviewApi text-extract endpoint (GHSA-2qwc-c2cc-2xwv) by @xr843 in https://github.com/langgenius/dify/pull/35797
* fix(commands): purge tenant tool credentials on reset-encrypt-key-pair (#35396) by @xr843 in https://github.com/langgenius/dify/pull/35843
* fix: allow tag rename without type payload by @lyzno1 in https://github.com/langgenius/dify/pull/36182
* fix: replace deprecated testcontainers log waits by @KurodaKayn in https://github.com/langgenius/dify/pull/36125
* refactor(install): improve layout and scrolling behavior for plugin installation step by @CodingOnStar in https://github.com/langgenius/dify/pull/36199
* chore: enchance copywriting in none education plan warning modal by @iamjoel in https://github.com/langgenius/dify/pull/36201
* chore(layout): reintroduce AmplitudeProvider in common layouts for analytics tracking by @CodingOnStar in https://github.com/langgenius/dify/pull/36208
* refactor: enhance layout and scrolling behavior in various modals for improved user experience by @CodingOnStar in https://github.com/langgenius/dify/pull/36210
* fix: regenerate document summary after update via API (#35950) by @EvanYao826 in https://github.com/langgenius/dify/pull/36035
* fix(web): app icon in webapp by @JzoNgKVO in https://github.com/langgenius/dify/pull/36206
* fix(web): web app description missing by @JzoNgKVO in https://github.com/langgenius/dify/pull/36209
* feat: initialize user timezone and language from browser by @lyzno1 in https://github.com/langgenius/dify/pull/36170
* fix(api): avoid dify-agent path lookup during Docker build by @BeautyyuYanli in https://github.com/langgenius/dify/pull/36187
* fix: reduce db roundtrips of message update by @wylswz in https://github.com/langgenius/dify/pull/36213
* refactor: convert isinstance chains to match/case in easy_ui_based_generate_task_pipeline.py by @EvanYao826 in https://github.com/langgenius/dify/pull/36222
* refactor: convert isinstance chains to match/case (part 3) by @EvanYao826 in https://github.com/langgenius/dify/pull/36242
* fix: fetch memory of LLM node may cause out of flask context by @hjlarry in https://github.com/langgenius/dify/pull/36253
* chore: improve swagger markdown optional fields typing by @cqjjjzr in https://github.com/langgenius/dify/pull/36247
* fix(web): migrate metadata picker to combobox by @zhangxuhe1 in https://github.com/langgenius/dify/pull/36255
* fix(auth): preserve `phase` field in `_TokenData` so reset-password / change-email phase-bound checks don't 400 (#36116) by @vuko in https://github.com/langgenius/dify/pull/36117
* refactor: use match cases for workflow stream responses by @D-393Patel in https://github.com/langgenius/dify/pull/36267
* chore(api): upgrade graphon to 0.4.0 by @laipz8200 in https://github.com/langgenius/dify/pull/36124
* feat(dify-ui): add Checkbox/CheckboxGroup primitives by @lyzno1 in https://github.com/langgenius/dify/pull/36271
* fix: add missing phase field to _TokenData TypedDict by @xxiaoxiong in https://github.com/langgenius/dify/pull/36261
* chore: generate contract in ci by @hyoban in https://github.com/langgenius/dify/pull/36286
* refactor: migrate checkbox to dify-ui by @lyzno1 in https://github.com/langgenius/dify/pull/36295
* fix(web): constrain dialog overflow layouts by @lyzno1 in https://github.com/langgenius/dify/pull/36302
* refactor(web): simplify github install focus by @lyzno1 in https://github.com/langgenius/dify/pull/36314
* chore(docker): upgrade plugin daemon to 0.6.1 by @laipz8200 in https://github.com/langgenius/dify/pull/36312
* ci: ensure pnpm is available in setup-web action by @lyzno1 in https://github.com/langgenius/dify/pull/36315
* fix: use Generator type annotation with @contextmanager decorators by @EvanYao826 in https://github.com/langgenius/dify/pull/36297
* fix(api): close base64 file lookup sessions by @escape0707 in https://github.com/langgenius/dify/pull/36308
* refactor: convert isinstance chains to match/case (part 5) by @EvanYao826 in https://github.com/langgenius/dify/pull/36298
* refactor(api): migrate console.app.workflow to BaseModel by @cqjjjzr in https://github.com/langgenius/dify/pull/36216
* refactor: add console client migration demo by @hyoban in https://github.com/langgenius/dify/pull/36300
* fix: improve API extension dialog controls by @lyzno1 in https://github.com/langgenius/dify/pull/36323
* fix(dev): handle empty pyrefly target paths by @laipz8200 in https://github.com/langgenius/dify/pull/36325
* chore: add type to test by @asukaminato0721 in https://github.com/langgenius/dify/pull/36324
* test(api): isolate container DB between tests by @escape0707 in https://github.com/langgenius/dify/pull/36310
* fix: fallback phoenix parent trace when parent tracing disabled by @Blackoutta in https://github.com/langgenius/dify/pull/36290
* fix: can not create empty knowledge by @laipz8200 in https://github.com/langgenius/dify/pull/36336
* chore: Filter model presets by supported parameters by @iamjoel in https://github.com/langgenius/dify/pull/36339
* ci: add hotfix cherry-pick provenance check by @laipz8200 in https://github.com/langgenius/dify/pull/36340
* feat(web): allow annotation reply score threshold below 0.8 by @JzoNgKVO in https://github.com/langgenius/dify/pull/36337
* fix(console): require admin/owner to set default builtin tool credential by @NeatGuyCoding in https://github.com/langgenius/dify/pull/36264
* docs: fix docker README numbering and refresh stale references by @RiskeyL in https://github.com/langgenius/dify/pull/36303
* fix: no model selected but params keep loading by @iamjoel in https://github.com/langgenius/dify/pull/36342
* fix(offline): guard marketplace I/O paths for ENG-421 by @GareArc in https://github.com/langgenius/dify/pull/36335
* feat: enhance app creation tracking with source and template ID by @CodingOnStar in https://github.com/langgenius/dify/pull/36369
* chore(release): bump version to 1.14.2 by @laipz8200 in https://github.com/langgenius/dify/pull/36313

## New Contributors
* @mturac made their first contribution in https://github.com/langgenius/dify/pull/36135
* @linw1995 made their first contribution in https://github.com/langgenius/dify/pull/36165
* @KurodaKayn made their first contribution in https://github.com/langgenius/dify/pull/36125
* @vuko made their first contribution in https://github.com/langgenius/dify/pull/36117
* @D-393Patel made their first contribution in https://github.com/langgenius/dify/pull/36267
* @xxiaoxiong made their first contribution in https://github.com/langgenius/dify/pull/36261

**Full Changelog**: https://github.com/langgenius/dify/compare/1.14.1...1.14.2

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.14.2` · 2026-05-19 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.14.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
