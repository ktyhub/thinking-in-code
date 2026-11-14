---
title: "hindsight v1.0.0"
project: "hindsight"
repo: "vectorize-io/hindsight"
tag: "v1.0.0"
version: "v1.0.0"
published: "2026-10-13"
type: "major"
lang: "en"
summary: "fix(docs): overview hero reaches the window edges on wide screens · docs: changelog and blog post for v0.10.3 · docs: fix the home page link preview"
---

# hindsight v1.0.0

## What's Changed
* fix(docs): overview hero reaches the window edges on wide screens by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5440
* docs: changelog and blog post for v0.10.3 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5435
* docs: fix the home page link preview by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5441
* docs(blog): plain post titles with a description subtitle and byline row by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5460
* fix(ui): hide the no-op '+field' button at the entity-label root level by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5450
* refactor(openclaw)!: remove the agent-sdk package and the agent_knowledge_* tools by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5462
* fix(api): refuse tag-scoped callers on operations answered for the whole bank by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5463
* docs(grok-bot): the marketplace listing is not approved yet by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5465
* blog: Grok Bot Can Read What Your Other AI Tools Already Learned by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5461
* chore(deps): bump handlebars to 4.7.10 in eliza integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5482
* chore(deps): bump pydantic-ai-slim to 1.107.7 in pydantic-ai integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5483
* chore(deps): bump banks to 2.5.1 in llamaindex integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5484
* chore(deps): bump handlebars to 4.7.10 in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5481
* fix(integrations): claude-code chunk loss + timestamps, cursor Windows hooks, zed native MCP url by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5506
* fix(coding-agents): Windows hooks and spawns, pi session cwd, git log parsing by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5511
* fix(openclaw): drop the bankMission schema default so it stops overwriting bank missions by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5512
* fix(coding-agents): session-start survey/reflect gating, shared-bank page scope, initiative markers by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5510
* fix(coding-agents): memory injection on long prompts, empty first recalls, dsh repeats and Grok Build by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5514
* fix(openclaw): retain from plugin copies OpenClaw never started by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5517
* fix(control-plane): fix the next build type error in the entity-labels editor by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5518
* fix(coding-agents): keep retained sessions whole (pi runs, failed ops, exit, btw sessions, codex startup) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5508
* fix(openclaw): read the ended transcript through OpenClaw's reader on session_end by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5522
* fix(api): consolidation discovery probe, mental-model edit race, LlamaParse v2 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5513
* docs(hermes): complete and correct the config reference by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5521
* feat(integrations): every integration identifies itself with its own User-Agent by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5466
* fix(clients,cli): forward-compatible decoding and bounded export polling by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5515
* fix(coding-agents): HTTP error handling in drain, reflect, page latch, append probe, long reflects by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5509
* fix(hermes): six plugin bugs that need no behaviour change by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5523
* test(retain): judge agent-experience classification instead of counting fact types by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5525
* fix(openclaw): capture inbound identity on message_received so Goals can start by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5530
* docs(meta-muse): link the changelog from the integration page by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5533
* fix(openclaw): honour logLevel and logSummaryIntervalMs by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5532
* fix(retain): merge JSON-array appends to a new document into one array by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5529
* fix(hermes): batch of small plugin bugs from #4662 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5534
* feat(openclaw): register as OpenClaw's native memory provider by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5535
* fix(api): retain prose 'no facts', claude-code JSON repair, codex stream errors, provider spans, claude-code ToS docs by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5516
* fix(api): a store that sheds a request answers 503 + Retry-After, not 500 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5527
* fix(hermes): skip cron runs, honour HINDSIGHT_BANK_ID, add reflect_tags, re-probe an unreachable server by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5538
* test(worker): poll until drained in the concurrent-claim test by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5537


**Full Changelog**: https://github.com/vectorize-io/hindsight/compare/v0.10.3...v1.0.0

---

> **Source** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · `v1.0.0` · 2026-10-13 · [upstream release](https://github.com/vectorize-io/hindsight/releases/tag/v1.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
