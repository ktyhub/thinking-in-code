---
title: "outlines 1.3.0"
project: "outlines"
repo: "dottxt-ai/outlines"
tag: "1.3.0"
version: "1.3.0"
published: "2026-05-13"
type: "minor"
lang: "en"
summary: "Fix error message for model type determination · Implement uniform exceptions classes across model providers"
---

# outlines 1.3.0

## What's Changed
* Fix error message for model type determination by @Reslan-Tinawi in https://github.com/dottxt-ai/outlines/pull/1862
* Implement uniform exceptions classes across model providers by @plpxsk in https://github.com/dottxt-ai/outlines/pull/1823

## New Contributors
* @Reslan-Tinawi made their first contribution in https://github.com/dottxt-ai/outlines/pull/1862
* @plpxsk made their first contribution in https://github.com/dottxt-ai/outlines/pull/1823

**Full Changelog**: https://github.com/dottxt-ai/outlines/compare/1.2.13...1.3.0

**Minor Breaking Change**: API-based models (`OpenAI`, `Anthropic`...) are now raising standardized errors in case of API errors (`outlines.exceptions`). Make sure to update your code if you were catching specific exceptions from your provider. Information on Outlines standardized exceptions can be found [here](https://dottxt-ai.github.io/outlines/main/features/core/exceptions/)

---

> **Source** [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) · `1.3.0` · 2026-05-13 · [upstream release](https://github.com/dottxt-ai/outlines/releases/tag/1.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
