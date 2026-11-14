---
title: "mem0 v2.2.1"
project: "mem0"
repo: "mem0ai/mem0"
tag: "v2.2.1"
version: "v2.2.1"
published: "2026-09-25"
type: "patch"
lang: "en"
summary: "Core: add() (Memory and AsyncMemory) no longer reports records the vector store rejected as successful ADD events. Only records that were actually inserted are written to history, entity-linked, and returned."
---

# mem0 v2.2.1

**Bug Fixes:**
- **Core:** `add()` (`Memory` and `AsyncMemory`) no longer reports records the vector store rejected as successful `ADD` events. Only records that were actually inserted are written to history, entity-linked, and returned. If none of the extracted memories could be inserted, `add()` now raises `VectorStoreError` instead of returning memories that were never stored ([#7066](https://github.com/mem0ai/mem0/pull/7066))
- **Core:** Restore the context-manager protocol on `Memory` (`with Memory() as m:`) and `AsyncMemory` (`async with AsyncMemory() as m:`), which closes the instance on exit ([#7354](https://github.com/mem0ai/mem0/pull/7354))
- **LLMs:** The AWS Bedrock Anthropic path now returns the first Converse content block that carries text instead of always reading `content[0]`. Claude reasoning models can emit a `reasoningContent` block before the text block, which previously made the call fail with a `KeyError` ([#6369](https://github.com/mem0ai/mem0/pull/6369))
- **Vector Stores:** Turbopuffer filters now apply every operator (`eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `in`, `nin`). Only `gte` and `lte` were read before, so any other operator was silently dropped and the query returned unfiltered results. An unsupported operator now raises `ValueError` ([#6564](https://github.com/mem0ai/mem0/pull/6564))
- **Vector Stores:** Turbopuffer `search()` scores now respect `distance_metric`. With `euclidean_squared`, the unbounded squared distance maps to `1 / (1 + distance)` instead of `1 - distance`, which went negative and inverted ranking for any distance above 1 ([#6559](https://github.com/mem0ai/mem0/pull/6559))
- **Vector Stores:** S3 Vectors `search()` scores are now metric-aware. With `euclidean`, the distance maps to `1 / (1 + distance)` instead of `max(0, 1 - distance)`, which collapsed most scores to 0 ([#6547](https://github.com/mem0ai/mem0/pull/6547))

---

> **Source** [mem0ai/mem0](https://github.com/mem0ai/mem0) · `v2.2.1` · 2026-09-25 · [upstream release](https://github.com/mem0ai/mem0/releases/tag/v2.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
