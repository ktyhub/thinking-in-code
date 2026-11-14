---
title: "langfuse v4.80.0"
project: "langfuse"
repo: "langfuse/langfuse"
tag: "v4.80.0"
version: "v4.80.0"
published: "2026-11-13"
type: "minor"
lang: "en"
summary: "feat(clickhouse): send query parameters in the request body by default · feat(ai-gateway): add Google AI Studio as a gateway provider"
---

# langfuse v4.80.0

## What's Changed
### Features

* feat(clickhouse): send query parameters in the request body by default by @Steffen911 in https://github.com/langfuse/langfuse/pull/20049
* feat(ai-gateway): add Google AI Studio as a gateway provider by @wochinge in https://github.com/langfuse/langfuse/pull/20086
* feat(ai-gateway): rename to Connections & Models and hide Models tab without connections by @wochinge in https://github.com/langfuse/langfuse/pull/20112
* feat(in-app-agent): add "Copy session link" to Halo's session menu and hide session links in HIPAA by @nimarb in https://github.com/langfuse/langfuse/pull/20103
* feat(native): decode typed OTLP envelopes without a document tree by @sumerman in https://github.com/langfuse/langfuse/pull/19955
* feat(skills): make skill size and file count limits configurable by @tobi12345 in https://github.com/langfuse/langfuse/pull/20119
* feat(native): derive owned OTEL rows from the ClickHouse schema by @sumerman in https://github.com/langfuse/langfuse/pull/19956
* feat(topics): filter the tracing table by topic and show topics as a column by @LysanderKie in https://github.com/langfuse/langfuse/pull/19120
* feat(skills): keep unsaved skill drafts in sessionStorage by @tobi12345 in https://github.com/langfuse/langfuse/pull/20122
* feat(prompts): allow removing labels from a prompt version via API and MCP by @tobi12345 in https://github.com/langfuse/langfuse/pull/20126
* feat(ai-gateway): add Microsoft Azure as a gateway provider by @wochinge in https://github.com/langfuse/langfuse/pull/20085
* feat(billing): count correction scores from a cutoff by @marliessophie in https://github.com/langfuse/langfuse/pull/19948
* feat(native): normalize OTEL metadata and evaluation attributes by @sumerman in https://github.com/langfuse/langfuse/pull/19957
* feat(ai-gateway): redesign gateway key creation dialog by @wochinge in https://github.com/langfuse/langfuse/pull/20135
* feat(ai-gateway): show connection test status in the connection dialog footer by @wochinge in https://github.com/langfuse/langfuse/pull/20127
* feat(topics): summarize every Topics path from the rendered Topics text by @LysanderKie in https://github.com/langfuse/langfuse/pull/20083
* feat(native): normalize tool definitions and calls in owned OTEL values by @sumerman in https://github.com/langfuse/langfuse/pull/19958
* feat(monitoring): tag query and queue latency metrics by window, project size and action by @marksalpeter in https://github.com/langfuse/langfuse/pull/19980
* feat(topics): default New scan to an empty live scan by @LysanderKie in https://github.com/langfuse/langfuse/pull/20160
* feat(ai-gateway): support custom base URLs for OpenRouter connections by @wochinge in https://github.com/langfuse/langfuse/pull/20170
* feat(ai-gateway): restrict gateway keys to model patterns by @wochinge in https://github.com/langfuse/langfuse/pull/20139
* feat: Adds API key masking on UX by @jordibosch20 in https://github.com/langfuse/langfuse/pull/20151
* feat(topics): resizable split in list and treemap views by @nimarb in https://github.com/langfuse/langfuse/pull/20152
* feat(ai-gateway): edit name, metadata and models of existing gateway keys by @wochinge in https://github.com/langfuse/langfuse/pull/20142
* feat(skills): add Halo entry points to create, edit, and improve skills by @tobi12345 in https://github.com/langfuse/langfuse/pull/20179

### Fixes / Improvments

* fix(auth): bind sessions to the user id they were issued for by @Steffen911 in https://github.com/langfuse/langfuse/pull/20078
* fix(ai-gateway): drop "+ Add" diagram labels and show Custom badge before copy by @wochinge in https://github.com/langfuse/langfuse/pull/20123
* fix(evals): fail fast on rate limits in the TypeSafe decision-model client by @wochinge in https://github.com/langfuse/langfuse/pull/20125
* fix(topics): assign new summaries to every matching rule's map by @LysanderKie in https://github.com/langfuse/langfuse/pull/20118
* fix(topics): show a one-off scan's own state instead of the live-map empty state by @LysanderKie in https://github.com/langfuse/langfuse/pull/20113
* style(evals): clean up the evaluator setup screen by @marliessophie in https://github.com/langfuse/langfuse/pull/20089
* fix(topics): open a topic in Tracing with the topic filter instead of trace IDs by @LysanderKie in https://github.com/langfuse/langfuse/pull/20128
* fix(auth): send SSO-domain users to SSO from invitations and sign-up by @Steffen911 in https://github.com/langfuse/langfuse/pull/19705
* fix(worker): stream rows in the dataset run item backfill insert by @Steffen911 in https://github.com/langfuse/langfuse/pull/20131
* fix(web): stop render loop in sidebar org switcher plan badge by @nkabardin in https://github.com/langfuse/langfuse/pull/20144
* fix(dashboard): cap analytics results and respect SSE backpressure by @sumerman in https://github.com/langfuse/langfuse/pull/20143
* fix(topics): seed rule setup traces from any worker by @LysanderKie in https://github.com/langfuse/langfuse/pull/20147
* fix(experiments): always render result cells as JSON by @marliessophie in https://github.com/langfuse/langfuse/pull/20148
* fix(topics): filter summary rows on every rule's assignment by @LysanderKie in https://github.com/langfuse/langfuse/pull/20129
* fix(topics): offer only filter operators live scans accept by @LysanderKie in https://github.com/langfuse/langfuse/pull/20161
* fix(topics): spread rule setup seeds over 60s by @LysanderKie in https://github.com/langfuse/langfuse/pull/20168
* fix(worker): page and resume batch observation evals by @wochinge in https://github.com/langfuse/langfuse/pull/20138
* fix(topics): keep long topic names from covering questions in the trace topics card by @nimarb in https://github.com/langfuse/langfuse/pull/20153
* fix(web): give account deletion a 30s transaction budget by @nimarb in https://github.com/langfuse/langfuse/pull/20105

### Chores

* test(mcp): deny default evaluation model writes without evalDefaultModel:CUD by @wochinge in https://github.com/langfuse/langfuse/pull/20116
* test(evals): cover tenant and scope negatives for experiment dataset rules by @wochinge in https://github.com/langfuse/langfuse/pull/20132
* refactor(query-ast): compile the dashboard v2 observations build through the AST by @niklassemmler in https://github.com/langfuse/langfuse/pull/20070
* ci: harden minio healthcheck and golang-migrate download by @nkabardin in https://github.com/langfuse/langfuse/pull/19805
* test(query): make dashboard SQL keyword assertions case-insensitive by @niklassemmler in https://github.com/langfuse/langfuse/pull/20146
* chore(deps): bump `@hono/node-server` to 2.1.6 by @github-actions[bot] in https://github.com/langfuse/langfuse/pull/20167
* test(ai-gateway): cover private-network rejection on OpenRouter custom endpoints by @wochinge in https://github.com/langfuse/langfuse/pull/20177
* test(query): run the events-table query builder servertests again by @niklassemmler in https://github.com/langfuse/langfuse/pull/20176

**Full Changelog**: https://github.com/langfuse/langfuse/compare/v4.79.0...v4.80.0

---

> **Source** [langfuse/langfuse](https://github.com/langfuse/langfuse) · `v4.80.0` · 2026-11-13 · [upstream release](https://github.com/langfuse/langfuse/releases/tag/v4.80.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
