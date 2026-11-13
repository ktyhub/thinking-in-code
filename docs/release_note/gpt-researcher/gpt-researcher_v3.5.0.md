---
title: "gpt-researcher v3.5.0"
project: "gpt-researcher"
repo: "assafelovic/gpt-researcher"
tag: "v3.5.0"
published: "2026-05-28"
type: "minor"
lang: "en"
summary: "Massive update across the stack with critical bug fixes and performance improvements including addition to new models and retrievers. Thanks to the amazing community for pushing this!"
---

# gpt-researcher v3.5.0

Massive update across the stack with critical bug fixes and performance improvements including addition to new models and retrievers. Thanks to the amazing community for pushing this!

## What's Changed
* feat: add ModelsLab image generation provider by @adhikjoshi in https://github.com/assafelovic/gpt-researcher/pull/1647
* fix: NameError when STRATEGIC_LLM lacks colon separator (#1673) by @sudabg in https://github.com/assafelovic/gpt-researcher/pull/1679
* fix: properly resolve report_type imports in websocket_manager and re… by @varadfromeast in https://github.com/assafelovic/gpt-researcher/pull/1740
* Fix: resolve unhashable dict error in detailed report context deduplication by @3mk4yl in https://github.com/assafelovic/gpt-researcher/pull/1700
* Add Codex CLI plugin manifest by @internet-dot in https://github.com/assafelovic/gpt-researcher/pull/1721
* fix: eliminate process-level env pollution from MCP retriever setup by @octo-patch in https://github.com/assafelovic/gpt-researcher/pull/1742
* feat(cli): generate filename from LLM and add YAML frontmatter for re… by @VVjwell in https://github.com/assafelovic/gpt-researcher/pull/1743
* feat: add OpenAlex retriever by @CuiweiG in https://github.com/assafelovic/gpt-researcher/pull/1748
* feat(server): add Agent Discovery Protocol manifest endpoint by @zhao0112 in https://github.com/assafelovic/gpt-researcher/pull/1749
* fix: truncate document content to prevent embedding token limit errors by @octo-patch in https://github.com/assafelovic/gpt-researcher/pull/1750
* fix: support MISTRAL_BASE_URL env var for custom Mistral-compatible endpoints by @octo-patch in https://github.com/assafelovic/gpt-researcher/pull/1754
* Add LLM cost change analysis to CI by @Jwrede in https://github.com/assafelovic/gpt-researcher/pull/1761
* chore: fix some typos across codebase by @box4wangjing in https://github.com/assafelovic/gpt-researcher/pull/1768
* Limit multi-agent human plan revisions by @CalibratedGhosts in https://github.com/assafelovic/gpt-researcher/pull/1769
* fix(deep_research): parse LLM output with json_repair + regex fallback by @RomainROCH in https://github.com/assafelovic/gpt-researcher/pull/1773
* fix(llm): raise max_tokens cap from 32k to 200k for modern long-output models by @RomainROCH in https://github.com/assafelovic/gpt-researcher/pull/1775
* Fix incorrect config file path in Chinese README by @wesssI in https://github.com/assafelovic/gpt-researcher/pull/1779
* fix(retrieval): send Brave snippets to scraper by @RomainROCH in https://github.com/assafelovic/gpt-researcher/pull/1780
* feat(cost): track Anthropic usage from native metadata by @RomainROCH in https://github.com/assafelovic/gpt-researcher/pull/1781

## New Contributors
* @adhikjoshi made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1647
* @sudabg made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1679
* @varadfromeast made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1740
* @3mk4yl made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1700
* @internet-dot made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1721
* @VVjwell made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1743
* @CuiweiG made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1748
* @zhao0112 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1749
* @Jwrede made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1761
* @box4wangjing made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1768
* @CalibratedGhosts made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1769
* @RomainROCH made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1773
* @wesssI made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/1779

**Full Changelog**: https://github.com/assafelovic/gpt-researcher/compare/v3.4.4...v3.5.0

---

> **Source** [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) · `v3.5.0` · 2026-05-28 · [upstream release](https://github.com/assafelovic/gpt-researcher/releases/tag/v3.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
