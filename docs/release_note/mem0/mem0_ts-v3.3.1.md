---
title: "mem0 ts-v3.3.1"
project: "mem0"
repo: "mem0ai/mem0"
tag: "ts-v3.3.1"
version: "ts-v3.3.1"
published: "2026-09-25"
type: "release"
lang: "en"
summary: "Bug Fixes:"
---

# mem0 ts-v3.3.1

**Bug Fixes:**
- **Config (OSS):** `ConfigManager` no longer injects OpenAI's default `baseURL` and `model` into non-OpenAI LLM providers. The defaults now apply only to `openai` and `openai_structured`, so a DeepSeek, xAI, or other provider config without an explicit `baseURL` or `model` falls back to that provider's own defaults and env vars (`DEEPSEEK_API_BASE`, `XAI_API_BASE`, ...) instead of pointing at OpenAI with an OpenAI model name ([#7350](https://github.com/mem0ai/mem0/pull/7350))
- **Vector Stores:** Turbopuffer filters now apply every operator (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `in`, `nin`). Only the range operators were read before, so `eq`, `ne`, `in`, and `nin` were silently dropped. A `"*"` value now matches anything instead of nothing, an array value is treated as `in`, and an unsupported operator throws ([#6578](https://github.com/mem0ai/mem0/pull/6578))
- **Vector Stores:** Turbopuffer `search()` with `euclidean_squared` now maps the unbounded squared distance to `1 / (1 + distance)` instead of `1 - distance`, which went negative and inverted ranking for any distance above 1 ([#6580](https://github.com/mem0ai/mem0/pull/6580))
- **Packaging:** `pg`, `@types/pg`, and `natural` are now optional peer dependencies, and `pg` / `@types/pg` accept caret ranges instead of the exact `8.11.3` / `8.11.0` pins, so installing `mem0ai` no longer pulls in `pg` or conflicts with an app's own `pg` version. The PGVector store now imports `pg` only when it is used, so install it alongside `mem0ai` (`npm install pg`) if you use that store. `@types/jest` moved from peer dependencies to dev dependencies ([#7450](https://github.com/mem0ai/mem0/pull/7450))

---

> **Source** [mem0ai/mem0](https://github.com/mem0ai/mem0) · `ts-v3.3.1` · 2026-09-25 · [upstream release](https://github.com/mem0ai/mem0/releases/tag/ts-v3.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
