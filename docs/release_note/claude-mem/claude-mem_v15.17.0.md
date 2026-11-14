---
title: "claude-mem v15.17.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.17.0"
version: "v15.17.0"
published: "2026-11-11"
type: "minor"
lang: "en"
summary: "Quick start for an existing eve agent:"
---

# claude-mem v15.17.0

## New: claude-mem memory for eve agents

- **`claude-mem/eve`** is a new export of the `claude-mem` npm package. It is a memory provider for [eve](https://eve.dev), Vercel's framework for durable backend agents. An eve agent can now recall what you did in Claude Code, Codex and your other claude-mem clients, using your [cmem.ai](https://cmem.ai) memory (key from cmem.ai/pro/key) (#5863).
  - **Recall:** one search before every turn. No inference spend. Matches reach the model as escaped data, never as instructions.
  - **Tools:** `<slot>__search` to look further back and `<slot>__remember` to save a note. Both are bound to the slot's scope.
  - **Separate memory per caller:** each eve scope gets its own claude-mem project by default. `searchAllProjects` reads the whole account and is for single-owner agents only.
  - **No automatic capture:** eve can replay a capture step, and that would save the same turn twice, so saves only happen when the model calls `remember`.
  - **Failures stay visible:** if cmem.ai can't be reached, the turn still runs, the failure is logged, and the model is told memory is unavailable.
  - Requires eve 0.84.0 or later and Node.js 24 or later. `eve` and `zod` are optional peer dependencies, so nothing changes for existing installs.
- **One-click eve personal agent template** at [`integrations/eve/template`](https://github.com/thedotmack/claude-mem/tree/main/integrations/eve/template): password-protected web chat with your claude-mem memory. Deploy with Vercel and enter two values, `EVE_CHAT_PASSWORD` and `CLAUDE_MEM_API_KEY`. iMessage is an eve add-on (`npx eve add channel/linq` or `channel/photon`); only texts from `CLAUDE_MEM_OWNER_PHONE` get your memory.

Quick start for an existing eve agent:

```bash
npm install claude-mem
```

```ts
// agent/memory/claude-mem.ts
import { claudeMem } from "claude-mem/eve";
import { defineMemory } from "eve/memory";
import { byPrincipal } from "eve/memory/scope";

export default defineMemory({
  description: "Recall and save durable context for the current user.",
  provider: claudeMem({ apiKey: process.env.CLAUDE_MEM_API_KEY }),
  scope: byPrincipal,
});
```

Docs: https://docs.claude-mem.ai/eve-integration

No changes to the Claude Code plugin's capture, worker or hooks in this release.

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.16.1...v15.17.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.17.0` · 2026-11-11 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
