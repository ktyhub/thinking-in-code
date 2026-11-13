---
title: "gpt-researcher v3.7.0"
project: "gpt-researcher"
repo: "assafelovic/gpt-researcher"
tag: "v3.7.0"
published: "2026-09-26"
type: "minor"
lang: "en"
summary: "GPT Researcher now picks the context it sends to the LLM by usefulness, not similarity. Every passage scraped for a research question is scored by Jev on how useful it is for answering that question, and only the…"
---

# gpt-researcher v3.7.0

## Smarter context, no embeddings required

GPT Researcher now picks the context it sends to the LLM by **usefulness, not similarity**.
Every passage scraped for a research question is scored by [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
on how useful it is for answering that question, and only the passages that help are kept.

On a benchmark of 28 research tasks replayed on identical sources:

<img width="3200" height="1800" alt="image-1790437831580" src="https://github.com/user-attachments/assets/c2a7b305-2e60-4709-ad9c-8af09e297f9f" />

**Nothing is required.** With `TYPESAFE_API_KEY` set, Jev is used. Without one, or if a Jev call
fails, GPT Researcher falls back to local keyword (BM25) ranking, so you no longer need an
embeddings provider for standard research. Report chat uses the same filter.

- Docs: https://docs.gptr.dev/docs/gpt-researcher/gptr/context-filter
- Benchmark, method and code: `evals/context_filter/`

## ⚠️ Changes to note
- **Python 3.12+** is now required.
- **Default context filter:** without a TypeSafe key, the default is now keyword ranking instead of
  embeddings. It matched or beat embeddings on every measure in the benchmark. To keep the old
  behaviour, set `CONTEXT_FILTER=embeddings`.

## Also in this release
- Retriever plugins: ship a search provider as its own package via the `gpt_researcher.retrievers` entry point (#2154)
- Fixed the frontend WebSocket opening a second connection on a new research run (#2159)
- Multi-agent sections no longer repeat each other's content (#2158)
- Self-hosted frontend assets, no third-party CDNs (#2082)
- 25+ community fixes across retrievers, scrapers and deep research
- Docs: redesigned homepage, current model hallucination leaderboard, fixed builds on fresh installs

**Install:** `pip install -U gpt-researcher` (0.16.0)

## What's Changed
* fix: define stream output for multi-agent execution by @alaningtrump in https://github.com/assafelovic/gpt-researcher/pull/2092
* fix(deps): pin mcp below 2.0 to keep MCPRetriever importable by @DAI-BZ in https://github.com/assafelovic/gpt-researcher/pull/2147
* fix(bing): bound request and handle transport failures by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2133
* fix(semantic-scholar): bound request and guard response parsing by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2130
* fix(openalex): handle malformed JSON responses by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2128
* fix(multi-agents): load .env before tracing setup by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2126
* fix: preserve caller-provided empty visited_urls set by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2122
* fix: handle zero generated queries in deep research by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2111
* fix: reject whitespace-only deep research query fields by @L4XB in https://github.com/assafelovic/gpt-researcher/pull/2117
* fix(google): filter YouTube hosts case-insensitively by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2113
* fix(retrievers): fall back after blank normalization by @remote-controlled-man in https://github.com/assafelovic/gpt-researcher/pull/2105
* fix(research): preserve complementary web context by @remote-controlled-man in https://github.com/assafelovic/gpt-researcher/pull/2104
* fix(research): record prefetched URLs in visited_urls by @feiiiiii5 in https://github.com/assafelovic/gpt-researcher/pull/2123
* fix(research): preserve initial planning sources in report context by @guybass in https://github.com/assafelovic/gpt-researcher/pull/2145
* fix(mcp): detect URL schemes case-insensitively by @anupamking01 in https://github.com/assafelovic/gpt-researcher/pull/2114
* fix(chat): preserve sources from the actual search tool invocation by @beemines in https://github.com/assafelovic/gpt-researcher/pull/2112
* fix(scraper): keep inline text in its line when extracting page text by @L4XB in https://github.com/assafelovic/gpt-researcher/pull/2149
* fix(llm): let llm_kwargs / LLM_KWARGS override the computed temperature by @rbales79 in https://github.com/assafelovic/gpt-researcher/pull/2107
* fix: correct typos in user-facing warnings, subtopic prompt, and docstring by @feizhuzheng in https://github.com/assafelovic/gpt-researcher/pull/2080
* Make Serper retriever base URL configurable via SERPER_API_BASE by @starnikovoleg in https://github.com/assafelovic/gpt-researcher/pull/2103
* fix(frontend): self-host browser assets by @ousamabenyounes in https://github.com/assafelovic/gpt-researcher/pull/2082
* docs: fix dead retrievers link in hybrid research example by @yetuge in https://github.com/assafelovic/gpt-researcher/pull/2136
* docs: add Russian README translation by @MonteNegroX in https://github.com/assafelovic/gpt-researcher/pull/2083
* chore(deps): update numpy requirement from <2.3.0,>=2.0.0 to >=2.0.0,<2.5.0 by @dependabot[bot] in https://github.com/assafelovic/gpt-researcher/pull/2087
* chore(deps): update deepagents requirement from >=0.6 to >=0.7.8 by @dependabot[bot] in https://github.com/assafelovic/gpt-researcher/pull/2085
* chore: untrack maintainer triage notes; stop dependabot raising floors by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2151
* feat(retrievers): load third-party retrievers from entry points by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2154
* chore(deps): update numpy requirement from <2.3.0,>=2.0.0 to >=2.0.0,<2.5.0 by @dependabot[bot] in https://github.com/assafelovic/gpt-researcher/pull/2155
* Bump python from 3.12-slim-bookworm to 3.14-slim-bookworm by @dependabot[bot] in https://github.com/assafelovic/gpt-researcher/pull/1612
* fix(document): tolerate missing metadata source on loaded pages by @Bartok9 in https://github.com/assafelovic/gpt-researcher/pull/2152
* Add quality_eval: ground-truth-free report quality evaluation by @SeanHe727 in https://github.com/assafelovic/gpt-researcher/pull/1821
* fix: carry over the remaining fixes from #2140 and #2121 by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2157
* fix(multi_agents): tell each parallel section what its siblings cover by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2158
* fix(websocket): stop a new research run from opening a second socket by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2159
* ci: don't fail fork PRs on the LLM cost comment by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2160
* feat(context): filter scraped content with Jev; embeddings become optional by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2161
* feat(context): keyword fallback so no filter needs a key or embeddings by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2162
* docs: current model leaderboard; fix the docs build on fresh installs by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2170
* docs: redesign the documentation homepage by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2171
* docs(homepage): drop the code card and stats strip; centre the hero by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2172
* docs(homepage): restore the two-column hero by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2173

## New Contributors
* @alaningtrump made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2092
* @DAI-BZ made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2147
* @anupamking01 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2133
* @L4XB made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2117
* @remote-controlled-man made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2105
* @feiiiiii5 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2123
* @guybass made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2145
* @beemines made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2112
* @rbales79 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2107
* @feizhuzheng made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2080
* @starnikovoleg made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2103
* @ousamabenyounes made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2082
* @yetuge made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2136
* @MonteNegroX made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2083
* @Bartok9 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2152

**Full Changelog**: https://github.com/assafelovic/gpt-researcher/compare/v3.6.1...v3.7.0

---

> **Source** [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) · `v3.7.0` · 2026-09-26 · [upstream release](https://github.com/assafelovic/gpt-researcher/releases/tag/v3.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
