---
title: "gpt-researcher v3.4.3"
project: "gpt-researcher"
repo: "assafelovic/gpt-researcher"
tag: "v3.4.3"
published: "2026-03-13"
type: "patch"
lang: "en"
summary: "Huge release with major fixes and performance improvements. Welcome to all the incredible new contributors and shoutout to @Br1an67 with major contributions!"
---

# gpt-researcher v3.4.3

Huge release with major fixes and performance improvements. Welcome to all the incredible new contributors and shoutout to @Br1an67 with major contributions!

## What's Changed
* fix: Read all pages in PyMuPDFScraper instead of just first page by @MattBenesch in https://github.com/assafelovic/gpt-researcher/pull/1623
* docs: fix invalid Discord invite link in LLM docs by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1649
* fix: invalidate import caches after runtime package install by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1650
* fix: fallback to OPENAI_API_VERSION for Azure embeddings by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1651
* fix: increase PyMuPDF download timeout and add SSL fallback by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1652
* fix: use all configured retrievers in deep research planning by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1653
* fix: add table styles to FastAPI frontend report container by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1654
* feat: track cost per step in research process by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1655
* feat: add scrape count option to FastAPI frontend by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1656
* feat: add pondering questions section to FastAPI frontend by @Br1an67 in https://github.com/assafelovic/gpt-researcher/pull/1657
* fix: dynamically retrieve agent role if missing in ReportGenerator by @kiwabb in https://github.com/assafelovic/gpt-researcher/pull/1658
* fix docs links and add ag2 pipeline diagram by @qingyun-wu in https://github.com/assafelovic/gpt-researcher/pull/1662
* fix: improve retry handling in create_chat_completion by @jhyz in https://github.com/assafelovic/gpt-researcher/pull/1664
* Add support for connection headers in MCP client/server config by @GeorgelPreput in https://github.com/assafelovic/gpt-researcher/pull/1665

## New Contributors
* @MattBenesch made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1623
* @Br1an67 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1649
* @kiwabb made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1658
* @qingyun-wu made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1662
* @jhyz made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1664

**Full Changelog**: https://github.com/assafelovic/gpt-researcher/compare/v3.4.2...v3.4.3

---

> **Source** [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) · `v3.4.3` · 2026-03-13 · [upstream release](https://github.com/assafelovic/gpt-researcher/releases/tag/v3.4.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
