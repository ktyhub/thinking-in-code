---
title: "langfuse v4.79.0"
project: "langfuse"
repo: "langfuse/langfuse"
tag: "v4.79.0"
version: "v4.79.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "feat(ai-gateway): add OpenRouter as a pre-release gateway provider · feat: add SUBSTITUTE_OK no-data mode for monitors · feat(ai-gateway): add xAI as a pre-release gateway provider"
---

# langfuse v4.79.0

## What's Changed
### Features

* feat(ai-gateway): add OpenRouter as a pre-release gateway provider by @wochinge in https://github.com/langfuse/langfuse/pull/20002
* feat: add SUBSTITUTE_OK no-data mode for monitors by @marksalpeter in https://github.com/langfuse/langfuse/pull/19981
* feat(ai-gateway): add xAI as a pre-release gateway provider by @wochinge in https://github.com/langfuse/langfuse/pull/20004
* feat(audit-logs): record read-access events for MCP tools by @Steffen911 in https://github.com/langfuse/langfuse/pull/19759
* feat: Delete isAdmin flag by @jordibosch20 in https://github.com/langfuse/langfuse/pull/19582
* feat(audit-logs): stage and relay audit events on self-hosted enterprise installs by @Steffen911 in https://github.com/langfuse/langfuse/pull/20024
* feat(ai-gateway): add Vercel AI Gateway as a pre-release gateway provider by @wochinge in https://github.com/langfuse/langfuse/pull/20020
* feat(ai-gateway): make OpenRouter, xAI and Vercel AI Gateway generally available by @wochinge in https://github.com/langfuse/langfuse/pull/20028
* feat(web): seed default score configs when a project is created by @annabellscha in https://github.com/langfuse/langfuse/pull/19911
* feat(ai-gateway): make custom base URLs generally available by @wochinge in https://github.com/langfuse/langfuse/pull/20030
* feat(ai-gateway): make extra headers available on all deployments by @wochinge in https://github.com/langfuse/langfuse/pull/20058
* feat(ai-gateway): route OpenAI Decisions as its own api format by @wochinge in https://github.com/langfuse/langfuse/pull/20027
* feat(mcp): add tools to manage the default evaluation model by @wochinge in https://github.com/langfuse/langfuse/pull/20032
* feat(worker): export settings and feature tables to the core data export by @AbdallahAHO in https://github.com/langfuse/langfuse/pull/20011
* feat(ai-gateway): route OpenAI Decisions through Vercel by @wochinge in https://github.com/langfuse/langfuse/pull/20069
* feat(topics): better display of llm cost by @nimarb in https://github.com/langfuse/langfuse/pull/19889
* feat(prompts): tag list endpoint spans with pagination and filters by @tobi12345 in https://github.com/langfuse/langfuse/pull/20075
* feat(pricing): price Vertex AI Flex PayGo Gemini calls via trafficType service tiers by @wochinge in https://github.com/langfuse/langfuse/pull/20062
* feat(evals): schedule trace transcript evaluations by @marliessophie in https://github.com/langfuse/langfuse/pull/20006
* feat(ai-gateway): filter connection models by API format and tidy the toolbar by @wochinge in https://github.com/langfuse/langfuse/pull/20074
* feat(topics): multiple live rules, one-off analyses, map picker and list view by @nmtrang29 in https://github.com/langfuse/langfuse/pull/19991
* feat(ai-gateway): route OpenAI Embeddings as its own api format by @wochinge in https://github.com/langfuse/langfuse/pull/20033
* feat(native): preserve JavaScript JSON value semantics in Rust by @sumerman in https://github.com/langfuse/langfuse/pull/19951
* feat(native): convert OTLP attributes into owned values by @sumerman in https://github.com/langfuse/langfuse/pull/19954
* feat(topics): build a rule's first map through trace dispatch and the nightly refit job by @LysanderKie in https://github.com/langfuse/langfuse/pull/20093

### Fixes / Improvments

* fix(ai-gateway): keep provider names out of the delete dialog replay by @wochinge in https://github.com/langfuse/langfuse/pull/20025
* fix(experiments): load every evaluation rule scoped to the dataset by @wochinge in https://github.com/langfuse/langfuse/pull/19942
* fix(filters): make value optional for null filters by @niklassemmler in https://github.com/langfuse/langfuse/pull/20029
* fix(trace-dispatch): exclude traces whose recorded start is over a year old by @LysanderKie in https://github.com/langfuse/langfuse/pull/20047
* fix(ai-gateway): call provider configs connections instead of credentials by @hassiebp in https://github.com/langfuse/langfuse/pull/20056
* fix(ai-gateway): distrust compromised emSign certificate paths by @maxdeichmann in https://github.com/langfuse/langfuse/pull/20038
* fix(datasets): return the newest open dataset item by id by @marliessophie in https://github.com/langfuse/langfuse/pull/20060
* fix(ai-gateway): evict cached resolve contexts when a key owner's org role changes by @hassiebp in https://github.com/langfuse/langfuse/pull/20067
* perf(prompts): fetch a prompt's dependencies in one query by @tobi12345 in https://github.com/langfuse/langfuse/pull/20043
* fix(deps): bump nodemailer to 10.4.1 and fast-xml-parser to 5.12.0 by @nimarb in https://github.com/langfuse/langfuse/pull/20071
* fix(ai-gateway): use "the" before an existing ingestion project by @nimarb in https://github.com/langfuse/langfuse/pull/20072
* fix(ai-gateway): version the model catalog cache and name the Decisions test question by @wochinge in https://github.com/langfuse/langfuse/pull/20073
* fix(sessions): Match sidebar row hover size for the last row by @nimarb in https://github.com/langfuse/langfuse/pull/19847
* fix(sec-dependabot): run twice daily and on code scanning by @nimarb in https://github.com/langfuse/langfuse/pull/20076
* fix(web): place AI feature lock icons beside their switches by @nimarb in https://github.com/langfuse/langfuse/pull/20077
* fix(evals): parse external code-eval endpoint with the canonical outbound URL parser by @wochinge in https://github.com/langfuse/langfuse/pull/20082
* fix(api): read full metadata for trace contains filters by @nkabardin in https://github.com/langfuse/langfuse/pull/19883
* fix(web): keep an empty filter param from being replaced by the default view by @marksalpeter in https://github.com/langfuse/langfuse/pull/19994
* fix(dashboards): suggest boolean score names in the Score name filter by @Steffen911 in https://github.com/langfuse/langfuse/pull/20115
* fix(web): move the org switcher to the sidebar top and tidy both switchers by @nmtrang29 in https://github.com/langfuse/langfuse/pull/20012

### Chores

* docs(api): a filter condition replaces only the query parameter for the same field by @HardMax71 in https://github.com/langfuse/langfuse/pull/18845
* chore(deps): bump uuid from 1.28.0 to 1.29.0 in /ai-gateway in the rust-dependencies group across 1 directory by @dependabot[bot] in https://github.com/langfuse/langfuse/pull/19830
* ci(deploy): assume the AWS deploy role via GitHub OIDC instead of static keys by @Steffen911 in https://github.com/langfuse/langfuse/pull/20017
* refactor(query-ast): type the v2 observations view as AST expressions by @niklassemmler in https://github.com/langfuse/langfuse/pull/19908
* docs(api): align v2 observations filter docs with server behavior by @niklassemmler in https://github.com/langfuse/langfuse/pull/20026
* chore(deps): bump minimatch to 11.0.1 by @maxdeichmann in https://github.com/langfuse/langfuse/pull/20039
* chore(deps): bump next to 16.4.5 by @maxdeichmann in https://github.com/langfuse/langfuse/pull/20041
* chore(deps): bump glob to 14.0.3 by @maxdeichmann in https://github.com/langfuse/langfuse/pull/20042
* chore(worker): share lazy evaluation scheduling for OTEL ingestion by @sumerman in https://github.com/langfuse/langfuse/pull/19950
* test(trace-dispatch): cover the dispatcher's events-dispatch queue path by @LysanderKie in https://github.com/langfuse/langfuse/pull/20048
* chore(pricing): add GPT-6 Cyber, GPT-5.6 Cyber, GPT-5 Search API and GPT Audio pricing by @hassiebp in https://github.com/langfuse/langfuse/pull/20015
* chore(deps): bump @google-cloud/storage to 8.4.0 and dockerode to 5.0.1 by @maxdeichmann in https://github.com/langfuse/langfuse/pull/20031
* refactor(ai-gateway): read the provider request ID once per response by @wochinge in https://github.com/langfuse/langfuse/pull/20063
* refactor(ai-gateway): key usage projection on ApiFormat by @wochinge in https://github.com/langfuse/langfuse/pull/20064
* chore(deps-upgrader): update security maintainer configuration and tracing by @nimarb in https://github.com/langfuse/langfuse/pull/20095
* refactor(query-ast): compile the events row selection through the AST by @niklassemmler in https://github.com/langfuse/langfuse/pull/19983
* chore(pricing): widen claude-mythos-5 and claude-mythos-5-1 Bedrock matchPatterns by @langfuse-bot in https://github.com/langfuse/langfuse/pull/20109
* chore(deps): bump react to 19.3.1 and next to 16.4.6 by @nimarb in https://github.com/langfuse/langfuse/pull/20104

**Full Changelog**: https://github.com/langfuse/langfuse/compare/v4.78.0...v4.79.0

---

> **Source** [langfuse/langfuse](https://github.com/langfuse/langfuse) · `v4.79.0` · 2026-11-12 · [upstream release](https://github.com/langfuse/langfuse/releases/tag/v4.79.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
