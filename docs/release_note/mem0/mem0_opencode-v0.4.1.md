---
title: "mem0 opencode-v0.4.1"
project: "mem0"
repo: "mem0ai/mem0"
tag: "opencode-v0.4.1"
version: "opencode-v0.4.1"
published: "2026-09-23"
type: "release"
lang: "en"
summary: "Improvements:"
---

# mem0 opencode-v0.4.1

**Improvements:**
- **Search:** The `search_memories` tool description no longer asks the agent to search proactively or to run several searches for multi-part questions. It now asks for a search before repeating investigation or when earlier decisions, fixes, commands, or results may help, the same wording as the other coding-agent plugins ([#7420](https://github.com/mem0ai/mem0/pull/7420))
- **Session context:** Removed two system-context lines that told the agent to run 2 parallel searches before responding and 2-4 parallel searches for non-trivial tasks ([#7420](https://github.com/mem0ai/mem0/pull/7420))
- **Skills:** `/mem0-search` and `/mem0-context-loader` make one `search_memories` call instead of 2 and 2-4 parallel calls. `/mem0-context-loader` now uses the search skill description from the other coding-agent plugins instead of asking to load at every new task or context switch ([#7420](https://github.com/mem0ai/mem0/pull/7420))

---

> **Source** [mem0ai/mem0](https://github.com/mem0ai/mem0) · `opencode-v0.4.1` · 2026-09-23 · [upstream release](https://github.com/mem0ai/mem0/releases/tag/opencode-v0.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
