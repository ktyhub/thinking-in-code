---
title: "ruflo v3.77.1"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.77.1"
version: "v3.77.1"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "Fix: AgentDB now honours the configured embedding model and dimension (#4984, #4985)"
---

# ruflo v3.77.1

## 3.77.1

**Fix: AgentDB now honours the configured embedding model and dimension (#4984, #4985)**

`memory_store` ignored `.claude-flow/embeddings.json` after #2305: the controller registry created AgentDB with only a `dbPath`, so a configured model and dimension were dropped and AgentDB fell back to all-MiniLM-L6-v2 at 384 dimensions.

- `@claude-flow/memory` 3.3.3 forwards the configured dimension to AgentDB and installs the configured embedder, rejecting vectors of the wrong length.
- The CLI memory bridge passes a local embedder when a non-default model is configured, and labels stored rows by the embedder that actually produced them.
- Stores pinned to the default 384-dimension model are unchanged.

Also merged: #4975 (quarantine a flaky browser suite on CI).

Known: `no-metaharness-smoke` and the console `write-argv` test (#4978) were red on main before this release.

Thanks to the reporter of #4984.

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.77.1` · 2026-11-13 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.77.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
