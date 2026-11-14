---
title: "mem0 pi-agent-v0.3.2"
project: "mem0"
repo: "mem0ai/mem0"
tag: "pi-agent-v0.3.2"
version: "pi-agent-v0.3.2"
published: "2026-09-23"
type: "release"
lang: "en"
summary: "Search: The memory policy, mem0_memory tool description, and prompt guidelines no longer ask the agent to search before answering anything that may depend on earlier context or to run several searches per question."
---

# mem0 pi-agent-v0.3.2

**Improvements:**
- **Search:** The memory policy, `mem0_memory` tool description, and prompt guidelines no longer ask the agent to search before answering anything that may depend on earlier context or to run several searches per question. They now ask for a search before repeating investigation or when earlier decisions, fixes, commands, or results may help ([#7420](https://github.com/mem0ai/mem0/pull/7420))
- **Skills:** `context-loader` makes one search instead of 2-4 parallel searches, and uses the search skill description from the other coding-agent plugins ([#7420](https://github.com/mem0ai/mem0/pull/7420))
- **Automatic recall:** Injected memories are introduced as "Mem0 found these relevant memories from earlier work in this repository:", the same heading as the Python plugins. The old heading called them a shallow first pass and told the agent to search again ([#7420](https://github.com/mem0ai/mem0/pull/7420))

---

> **Source** [mem0ai/mem0](https://github.com/mem0ai/mem0) · `pi-agent-v0.3.2` · 2026-09-23 · [upstream release](https://github.com/mem0ai/mem0/releases/tag/pi-agent-v0.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
