---
title: "langfuse v4.78.0"
project: "langfuse"
repo: "langfuse/langfuse"
tag: "v4.78.0"
version: "v4.78.0"
published: "2026-11-10"
type: "minor"
lang: "en"
---

# langfuse v4.78.0

## What's Changed

### Features
* feat(web): EmptyState with illustrated drawings by @AbdallahAHO in https://github.com/langfuse/langfuse/pull/19864
* feat(web): LangfuseIllustration with lazy product scenes by @AbdallahAHO in https://github.com/langfuse/langfuse/pull/19865
* feat(topics): filter traces in the Topics setup flow by @LysanderKie in https://github.com/langfuse/langfuse/pull/19947
* feat(rbac): mirror memberships into role assignments by @marksalpeter in https://github.com/langfuse/langfuse/pull/19263
* feat(rbac): add USER api key scope evaluated against user and key policies by @marksalpeter in https://github.com/langfuse/langfuse/pull/19517
* feat(web): always show AI Gateway nav at org level and link it from projects by @wochinge in https://github.com/langfuse/langfuse/pull/19977
* feat(events-dispatch): own the read settings and allow 60 s reads by @LysanderKie in https://github.com/langfuse/langfuse/pull/19894
* feat(web): move new project and new organization actions into switcher headers by @nimarb in https://github.com/langfuse/langfuse/pull/19969
* feat(experiments): clean up experiment list view rows and tooltips by @marliessophie in https://github.com/langfuse/langfuse/pull/18213
* feat(evals): add external HTTP code eval dispatcher by @wochinge in https://github.com/langfuse/langfuse/pull/20001
* feat(ai-gateway): make Bedrock available in every environment by @wochinge in https://github.com/langfuse/langfuse/pull/19999
* feat(skills): filter the skills list by SKILL.md frontmatter keys by @tobi12345 in https://github.com/langfuse/langfuse/pull/19996
* feat(topics): log non-transient Topics setup model test failures by @LysanderKie in https://github.com/langfuse/langfuse/pull/20008
* feat(topics): refit each rule's map nightly as a continuous map, keep manual runs as snapshots by @LysanderKie in https://github.com/langfuse/langfuse/pull/19675
* feat(prompts): tag prompt cache outcome on request spans by @tobi12345 in https://github.com/langfuse/langfuse/pull/20009
* feat(scores): show score config details from the add score menu by @marliessophie in https://github.com/langfuse/langfuse/pull/19997
* feat(ai-gateway): offer custom models everywhere and pick their connection by @wochinge in https://github.com/langfuse/langfuse/pull/20014

### Fixes
* fix(web): resolve force-v3 flag from the session so the v4 migration banner does not flash by @wochinge in https://github.com/langfuse/langfuse/pull/19975
* fix(ai-gateway): wrap launch banner description instead of truncating by @marcklingen in https://github.com/langfuse/langfuse/pull/19985
* fix(web): match dashboard widget gap to page padding by @nmtrang29 in https://github.com/langfuse/langfuse/pull/19988
* fix(web): drop Langfuse badge from widgets on cloned dashboards by @nmtrang29 in https://github.com/langfuse/langfuse/pull/19987
* fix(web): move the section chevron after the title by @nmtrang29 in https://github.com/langfuse/langfuse/pull/19989
* fix(external-media-storage): show IAM role auth as an upgrade and honor the allowlist by @wochinge in https://github.com/langfuse/langfuse/pull/19992
* fix(web): give gateway-only members a way out of the AI Gateway by @wochinge in https://github.com/langfuse/langfuse/pull/19995
* fix(scores): warn when invalid stored rows are filtered by @marliessophie in https://github.com/langfuse/langfuse/pull/18852
* fix(topics): send max_completion_tokens to OpenAI connections with custom base URLs by @hassiebp in https://github.com/langfuse/langfuse/pull/19972
* fix(topics): store the trace name on automatic facet summaries by @LysanderKie in https://github.com/langfuse/langfuse/pull/20003
* fix(query-ast): reject unqualified columns in SELECTs with several relations by @niklassemmler in https://github.com/langfuse/langfuse/pull/19971

### Performance
* perf(annotation-queues): page queue items by ids first on a sort-covering index by @marliessophie in https://github.com/langfuse/langfuse/pull/19949

### Chores
* fix(deps): bump undici to 7.30.2 by @nimarb in https://github.com/langfuse/langfuse/pull/19973
* fix(deps): upgrade AG-UI and remove provider-utils by @nimarb in https://github.com/langfuse/langfuse/pull/19974
* chore(query-ast): lower metadata conditions and free-text search of the events predicate by @niklassemmler in https://github.com/langfuse/langfuse/pull/19807
* chore(pricing): add Claude Fable 5.2 and Mythos 5.2 default pricing by @langfuse-bot in https://github.com/langfuse/langfuse/pull/20000
* ci: make the SQL-equivalence golden tests blocking by @niklassemmler in https://github.com/langfuse/langfuse/pull/19970


**Full Changelog**: https://github.com/langfuse/langfuse/compare/v4.77.0...v4.78.0

---

> **Source** [langfuse/langfuse](https://github.com/langfuse/langfuse) · `v4.78.0` · 2026-11-10 · [upstream release](https://github.com/langfuse/langfuse/releases/tag/v4.78.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
