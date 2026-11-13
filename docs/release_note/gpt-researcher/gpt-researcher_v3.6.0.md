---
title: "gpt-researcher v3.6.0"
project: "gpt-researcher"
repo: "assafelovic/gpt-researcher"
tag: "v3.6.0"
published: "2026-07-18"
type: "minor"
lang: "en"
summary: "Introducing a super stable version with enhanced improvements across security, stability and performance. We're also introducing a collaboration with Langchain with the latest deep agents framework here -…"
---

# gpt-researcher v3.6.0

Introducing a super stable version with enhanced improvements across security, stability and performance. We're also introducing a collaboration with Langchain with the latest deep agents framework here - https://github.com/assafelovic/gpt-researcher/tree/main/deep_agents

Thank you and welcome to all the new contributors!

## What's Changed
* security: sanitize untrusted content, add SECURITY.md, pin brotli by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1820
* Fix silently dropped token limits, real usage-based cost tracking, and research pipeline robustness by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1861
* Add Deep Agents example: GPT Researcher as the research engine in a LangChain deep agent by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1857
* Resolve post-merge conflicts: 4 retriever/context fixes (supersedes #1895-1898) by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1906
* Retriever hardening: 20 guard fixes against malformed results (supersedes #1837…#1890) by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1907
* Scraper robustness: 6 fixes (title/PDF-detection/temp-file/dimensions) (supersedes #1824…#1842) by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1908
* Multi-agent robustness: bound revision loops + exact sentinels (supersedes #1883/#1885/#1886) by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1909
* Core/misc hardening: 11 fixes (costs/query/llm/agent/mcp/config) (supersedes #1822…#1902) by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1910
* Reconcile master→main: GetXAPI retriever, Claude 4.x temp fix, MiniMax M3, curate_sources fixes by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1911
* feat: add Nebius Token Factory as LLM and embedding provider by @teionarr in https://github.com/assafelovic/gpt-researcher/pull/1891
* chore(multi_agents): nest AG2 variant under multi_agents/ag2 by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1912
* docs(skill): fix drift in .claude reference docs (retrievers, multi-agents, api) by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1913

## New Contributors
* @teionarr made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1891

**Full Changelog**: https://github.com/assafelovic/gpt-researcher/compare/v3.5.1...v3.6.0

---

> **Source** [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) · `v3.6.0` · 2026-07-18 · [upstream release](https://github.com/assafelovic/gpt-researcher/releases/tag/v3.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
