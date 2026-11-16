---
title: "WeKnora v0.7.0"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.7.0"
version: "v0.7.0"
published: "2026-07-17"
type: "minor"
lang: "en"
summary: "feat(im): 新增QQBot即时通讯平台集成支持；fix(frontend): hide redundant card badges when section headers apply；chore: bump version to 0.6.3；fix(embedding): add SSRF validation and safe HTTP client for embedders"
---

# WeKnora v0.7.0

## What's Changed
* feat(im): 新增QQBot即时通讯平台集成支持 by @YS-zdck in https://github.com/Tencent/WeKnora/pull/1824
* fix(frontend): hide redundant card badges when section headers apply by @lyingbug in https://github.com/Tencent/WeKnora/pull/1825
* chore: bump version to 0.6.3 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1826
* fix(embedding): add SSRF validation and safe HTTP client for embedders by @lyingbug in https://github.com/Tencent/WeKnora/pull/1828
* ui(frontend): polish channel cards and use official QQBot icon by @lyingbug in https://github.com/Tencent/WeKnora/pull/1830
* feat(frontend): Chrome 插件与 Claw Skill 集成落地页 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1832
* fix(frontend): reposition card hover popover to card instead of cursor by @hiasky in https://github.com/Tencent/WeKnora/pull/1829
* feat(frontend): show stacked integration icons on sidebar hover by @lyingbug in https://github.com/Tencent/WeKnora/pull/1837
* fix: make infrastructure host/port configurable via env vars in docker-compose by @hiasky in https://github.com/Tencent/WeKnora/pull/1840
* test: fix stale Doris SQL-shape and flaky OSS bucket assertions by @lyingbug in https://github.com/Tencent/WeKnora/pull/1842
* feat(chat): @Skill/@MCP mentions with scoped agent runtime by @lyingbug in https://github.com/Tencent/WeKnora/pull/1841
* optimize grep tag mention scope by @lyingbug in https://github.com/Tencent/WeKnora/pull/1843
* feat(mcp): drive auth by AuthType and auto-detect OAuth on connection test by @lyingbug in https://github.com/Tencent/WeKnora/pull/1844
* feat(mcp): prompt and resume OAuth authorization mid-conversation by @lyingbug in https://github.com/Tencent/WeKnora/pull/1845
* Align MCP OAuth and tool approval cards with agent tool timeline by @lyingbug in https://github.com/Tencent/WeKnora/pull/1846
* feat: scope API MCP OAuth by principal by @lyingbug in https://github.com/Tencent/WeKnora/pull/1847
* fix(frontend): gate API integration tab and polish landing pages by @lyingbug in https://github.com/Tencent/WeKnora/pull/1850
* fix(docker): default DB_HOST to postgres in .env.example by @lyingbug in https://github.com/Tencent/WeKnora/pull/1851
* feat(frontend): add API integration playground by @lyingbug in https://github.com/Tencent/WeKnora/pull/1852
* Chore: update dev script checks and Air docs by @oxkrypton in https://github.com/Tencent/WeKnora/pull/1854
* fix(vlm): allow configurable temperature for VLM models by @lawrence1912 in https://github.com/Tencent/WeKnora/pull/1858
* feat(agent): add configurable MCP OAuth wait timeout per agent by @lyingbug in https://github.com/Tencent/WeKnora/pull/1863
* Fix lint and test failures by @lyingbug in https://github.com/Tencent/WeKnora/pull/1871
* feat(im): include per-service MCP OAuth URLs in IM auth notices by @lyingbug in https://github.com/Tencent/WeKnora/pull/1874
* Fix MCP code import placeholder by @lyingbug in https://github.com/Tencent/WeKnora/pull/1877
* fix(security): close SQL validator bypass in agent database tools by @lyingbug in https://github.com/Tencent/WeKnora/pull/1881
* fix(security): enforce KB access on wiki reads and related IDOR paths by @lyingbug in https://github.com/Tencent/WeKnora/pull/1882
* fix(security): block SSRF in knowledge import, web_fetch, and datasource connectors by @lyingbug in https://github.com/Tencent/WeKnora/pull/1883
* fix(security): redact integration secrets from viewer-accessible endpoints by @lyingbug in https://github.com/Tencent/WeKnora/pull/1884
* fix(security): close open GHSA findings from security triage by @lyingbug in https://github.com/Tencent/WeKnora/pull/1887
* fix(security): block refresh tokens as bearer and sandbox MCP uploads by @lyingbug in https://github.com/Tencent/WeKnora/pull/1890
* fix(nginx):embed iframe x-frame-options by @oxkrypton in https://github.com/Tencent/WeKnora/pull/1879
* fix(security): redact IM list credentials and harden MinerU SSRF by @lyingbug in https://github.com/Tencent/WeKnora/pull/1897
* fix(security): harden follow-up request and preview surfaces by @lyingbug in https://github.com/Tencent/WeKnora/pull/1899
* fix(client): harden chat and agent SSE reliability by @coconut-yc in https://github.com/Tencent/WeKnora/pull/1740
* feat(cli)!: add agent-first `chat` / `session ask` output modes by @coconut-yc in https://github.com/Tencent/WeKnora/pull/1741
* fix(cli): align stream error handling after output-mode merge by @lyingbug in https://github.com/Tencent/WeKnora/pull/1903
* Fix manual knowledge editor publish flow by @lyingbug in https://github.com/Tencent/WeKnora/pull/1911
* fix(frontend): prevent white screen from corrupted localStorage by @hiasky in https://github.com/Tencent/WeKnora/pull/1925
* fix(frontend): harden settings localStorage load after #1925 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1927
* [codex] Fix Feishu card markdown image uploads by @lyingbug in https://github.com/Tencent/WeKnora/pull/1933
* refactor(frontend): extract shared document action menu and card view component by @hiasky in https://github.com/Tencent/WeKnora/pull/1931
* fix(frontend): unify document action menu styles and reset move state on close by @lyingbug in https://github.com/Tencent/WeKnora/pull/1939
* feat(cli)!: v0.10 CLI reliability, agent-UX & command-surface hardening by @voidkey in https://github.com/Tencent/WeKnora/pull/1917
* feat(redis): support TLS for Redis connections by @qilifan in https://github.com/Tencent/WeKnora/pull/1930
* fix(redis): harden TLS tests and surface TLS config at startup by @lyingbug in https://github.com/Tencent/WeKnora/pull/1940
* fix(im/feishu): actually close WebSocket long connection when channel is stopped by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/1908
* fix(agent): treat end_turn as natural stop by @jacentsao in https://github.com/Tencent/WeKnora/pull/1868
* fix(search): apply tag filters to knowledge search by @langcaiye in https://github.com/Tencent/WeKnora/pull/1907
* feat: add scoped tenant API keys by @lyingbug in https://github.com/Tencent/WeKnora/pull/1922
* fix(frontend): keep HMAC secret visible for copy after save by @lyingbug in https://github.com/Tencent/WeKnora/pull/1947
* feat: add Keenable as a configurable web search provider by @ilya-bogin-keenable in https://github.com/Tencent/WeKnora/pull/1946
* fix(web-search): polish Keenable provider integration after #1946 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1948
* Improve quick QA source drawer and agent capability controls by @lyingbug in https://github.com/Tencent/WeKnora/pull/1949
* Close references drawer when switching chat sessions by @lyingbug in https://github.com/Tencent/WeKnora/pull/1951
* fix(agent): polish selector capability status chips by @lyingbug in https://github.com/Tencent/WeKnora/pull/1956
* fix(search): harden tag scope resolution after #1907 by @lyingbug in https://github.com/Tencent/WeKnora/pull/1952
* fix(faq): guard against division by zero in import timing logs by @lyingbug in https://github.com/Tencent/WeKnora/pull/1965
* feat(dev): support remote infrastructure via .env.local by @lyingbug in https://github.com/Tencent/WeKnora/pull/1966
* fix(knowledge-base): improve doc filter bar responsive layout by @lyingbug in https://github.com/Tencent/WeKnora/pull/1967
* feat(knowledge-list): show Wiki badge on knowledge base cards by @lyingbug in https://github.com/Tencent/WeKnora/pull/1970
* Add knowledge base duplicate flow by @lyingbug in https://github.com/Tencent/WeKnora/pull/1971
* feat(frontend): add inline session title rename in sidebar by @lyingbug in https://github.com/Tencent/WeKnora/pull/1973
* fix: harden document pipeline concurrency and diagnostics by @lyingbug in https://github.com/Tencent/WeKnora/pull/1978
* fix(im): ingest DingTalk file/image messages into knowledge base by @voidkey in https://github.com/Tencent/WeKnora/pull/1969
* fix(im): harden DingTalk file download with SSRF checks by @lyingbug in https://github.com/Tencent/WeKnora/pull/1982
* feat(wiki): dedicated worker pool with concurrent claim-based batching by @lyingbug in https://github.com/Tencent/WeKnora/pull/1979
* feat(models): cap background LLM concurrency per model by @lyingbug in https://github.com/Tencent/WeKnora/pull/1986
* chore(env): update WEKNORA_MODEL_MAX_CONCURRENCY to 32 in configuration files by @lyingbug in https://github.com/Tencent/WeKnora/pull/1995
* feat(tenant): optional legacy auto-create API key on tenant creation by @lyingbug in https://github.com/Tencent/WeKnora/pull/1999
* fix(im/feishu): reply via reply-message API so replies land in the or… by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/1898
* feat(system): add runtime task queue observability dashboard by @lyingbug in https://github.com/Tencent/WeKnora/pull/2001
* refactor(RuntimeQueues): enhance UI layout and styling for better readability by @lyingbug in https://github.com/Tencent/WeKnora/pull/2002
* feat(system): expose model concurrency stats on runtime queues dashboard by @lyingbug in https://github.com/Tencent/WeKnora/pull/2003
* chore(deps): resolve Dependabot security alerts by @lyingbug in https://github.com/Tencent/WeKnora/pull/2005
* fix(docreader): route mislabeled legacy DOC files correctly by @lyingbug in https://github.com/Tencent/WeKnora/pull/2004
* fix(spans): expand knowledge span name column for long wiki slugs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2020
* fix(spans): make fitSpanName rune-aware and normalize lookups by @lyingbug in https://github.com/Tencent/WeKnora/pull/2021
* fix(router): allow scoped API keys to poll FAQ import progress by @lyingbug in https://github.com/Tencent/WeKnora/pull/2022
* fix(files): serve shared KB images via KB-scoped file proxy by @lyingbug in https://github.com/Tencent/WeKnora/pull/2023
* feat(knowledge-base): add per-pipeline custom instruction fields by @lyingbug in https://github.com/Tencent/WeKnora/pull/2026
* feat(worker): per-pool asynq governance with shared elastic capacity by @lyingbug in https://github.com/Tencent/WeKnora/pull/2030
* fix(wiki): strip internal chunk aliases from page content by @lyingbug in https://github.com/Tencent/WeKnora/pull/2028
* feat(provider): add Requesty as an OpenAI-compatible model provider by @Thibaultjaigu in https://github.com/Tencent/WeKnora/pull/2013
* docs(model): add Requesty to API and wiki provider lists by @lyingbug in https://github.com/Tencent/WeKnora/pull/2036
* fix(security): harden agent share listing and align full-access API key routes by @lyingbug in https://github.com/Tencent/WeKnora/pull/2034
* feat(auth): tenantless provisioning and gated self-service workspace creation by @lyingbug in https://github.com/Tencent/WeKnora/pull/2037
* refactor(auth): unify OIDC provisioning under shared default_tenant_mode policy by @lyingbug in https://github.com/Tencent/WeKnora/pull/2038
* feat(frontend): reorganize system settings into tabbed sections by @lyingbug in https://github.com/Tencent/WeKnora/pull/2039
* feat(system): add admin password reset with session revocation by @lyingbug in https://github.com/Tencent/WeKnora/pull/2040
* feat(agent): add question suggestions with after-answer follow-ups by @lyingbug in https://github.com/Tencent/WeKnora/pull/2045
* style(system): polish admin password reset trigger and dialog layout by @lyingbug in https://github.com/Tencent/WeKnora/pull/2046
* fix(frontend): add cancelled, finalizing, draft statuses to parse-status dropdown by @hiasky in https://github.com/Tencent/WeKnora/pull/2041
* fix: propagate chunking strategy to parent-child splitter configs by @darcyx in https://github.com/Tencent/WeKnora/pull/2048
* feat(system): add failed-task inspection and manual retry for runtime queues by @lyingbug in https://github.com/Tencent/WeKnora/pull/2049
* feat(system): expand runtime queue task inspection and safe actions by @lyingbug in https://github.com/Tencent/WeKnora/pull/2050
* feat(models): let system admins edit builtin model config by @lyingbug in https://github.com/Tencent/WeKnora/pull/2051
* refactor(terminology): rename user-facing tenant labels to workspace by @lyingbug in https://github.com/Tencent/WeKnora/pull/2052
* fix(knowledge): align processing timeline status with knowledge row by @lyingbug in https://github.com/Tencent/WeKnora/pull/2053
* feat(system): cursor pagination for runtime queue tasks by @lyingbug in https://github.com/Tencent/WeKnora/pull/2056
* feat(chat): polish follow-up suggestion loading and answer toolbar timing by @lyingbug in https://github.com/Tencent/WeKnora/pull/2060
* fix(knowledge): recover tasks safely after server restart by @lyingbug in https://github.com/Tencent/WeKnora/pull/2059
* fix(frontend): open chat reference links in new tabs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2062
* fix(knowledge): reload doc list after tag rename in manage drawer by @hiasky in https://github.com/Tencent/WeKnora/pull/2064
* feat(api-keys): let manage_kbs cover full KB lifecycle routes by @lyingbug in https://github.com/Tencent/WeKnora/pull/2068
* fix: storage engine config retrieval and default provider fallback handling by @ShadowSmallBaby in https://github.com/Tencent/WeKnora/pull/2067
* fix(api-keys): let manage_kbs keys poll KB copy progress by @lyingbug in https://github.com/Tencent/WeKnora/pull/2070
* fix(storage): align default provider fallback with STORAGE_ALLOW_LIST by @lyingbug in https://github.com/Tencent/WeKnora/pull/2071
* feat(storage): add multi-instance storage backends per workspace by @lyingbug in https://github.com/Tencent/WeKnora/pull/2072
* feat(resource): stable resource registry with LLM-context alias compaction by @lyingbug in https://github.com/Tencent/WeKnora/pull/2075
* feat(agent): enrich follow-up suggestion generation context by @lyingbug in https://github.com/Tencent/WeKnora/pull/2076
* fix(chat): improve Markdown image context and enforce retrieved image output by @lyingbug in https://github.com/Tencent/WeKnora/pull/2077
* fix(agent): ground follow-up suggestions and preserve KB scope on click by @lyingbug in https://github.com/Tencent/WeKnora/pull/2080
* feat(chat): session-scoped temporary attachments with async parsing by @lyingbug in https://github.com/Tencent/WeKnora/pull/2086
* fix(chat): native loading placeholders and suggestion UI polish by @lyingbug in https://github.com/Tencent/WeKnora/pull/2089
* fix(agent): improve MCP selector and attachment upload nav in editor by @lyingbug in https://github.com/Tencent/WeKnora/pull/2092
* feat(llm): introduce request-local source reference aliases by @lyingbug in https://github.com/Tencent/WeKnora/pull/2093
* fix(chat): polish references drawer layout and web reference titles by @lyingbug in https://github.com/Tencent/WeKnora/pull/2097
* feat(im,datasource): support Lark, Feishu's international edition by @qilifan in https://github.com/Tencent/WeKnora/pull/2096
* fix(chat): emit retrieval references when citation output is disabled by @lyingbug in https://github.com/Tencent/WeKnora/pull/2098
* fix(parser): remove workspace chat parser policy UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/2104
* docs: release v0.7.0 notes and version artifacts by @lyingbug in https://github.com/Tencent/WeKnora/pull/2107

## New Contributors
* @YS-zdck made their first contribution in https://github.com/Tencent/WeKnora/pull/1824
* @oxkrypton made their first contribution in https://github.com/Tencent/WeKnora/pull/1854
* @lawrence1912 made their first contribution in https://github.com/Tencent/WeKnora/pull/1858
* @coconut-yc made their first contribution in https://github.com/Tencent/WeKnora/pull/1740
* @qilifan made their first contribution in https://github.com/Tencent/WeKnora/pull/1930
* @Greenplumwine made their first contribution in https://github.com/Tencent/WeKnora/pull/1908
* @jacentsao made their first contribution in https://github.com/Tencent/WeKnora/pull/1868
* @ilya-bogin-keenable made their first contribution in https://github.com/Tencent/WeKnora/pull/1946
* @Thibaultjaigu made their first contribution in https://github.com/Tencent/WeKnora/pull/2013
* @darcyx made their first contribution in https://github.com/Tencent/WeKnora/pull/2048
* @ShadowSmallBaby made their first contribution in https://github.com/Tencent/WeKnora/pull/2067

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.6.3...v0.7.0

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.7.0` · 2026-07-17 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
