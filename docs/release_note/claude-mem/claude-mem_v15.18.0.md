---
title: "claude-mem v15.18.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.18.0"
version: "v15.18.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "claude-mem/eve now gives an eve agent the full claude-mem memory loop through your cmem.ai account (#6042)."
---

# claude-mem v15.18.0

## eve agents get the same memory as Claude Code and Codex

`claude-mem/eve` now gives an eve agent the full claude-mem memory loop through your cmem.ai account (#6042).

- **Session context:** each turn starts with the recent timeline from your memory. It is refreshed every turn under one message id, so it replaces itself instead of piling up.
- **Recall each turn:** one search before the turn, as before.
- **Recording is now on by default.** After each completed turn the provider sends the prompt, one observation per tool call, and a turn summary to cmem.ai as platform `eve`. Recorded tool calls and summaries come out of your cmem.ai observer allowance, the same allowance your other clients use. Pass `capture: false` to keep the old read-only behaviour; session context, recall, search and `remember` keep working.
  - `<private>…</private>` regions and secret-shaped text are removed on your deployment before anything is sent, with the same rules the Cowork plugin uses.
  - Replays of the same turn are dropped by cmem.ai (turn-scoped tool call ids and an idempotency key).
  - Each request is sent once. No retry, spool or queue, so an outage never creates spend later. A failure is logged with how many events were accepted.
- **Tools:** `search`, `timeline`, `get_observations` (the three-step Smart search) and `remember`.
- **eve versions:** tested on eve 0.84.0 and 1.0.0-rc.9.
- **Template:** works on a free-credit Vercel AI Gateway (Claude, falling back to `openai/gpt-5-mini` when Claude is refused on free credits), or set `ANTHROPIC_API_KEY` to call Claude directly and `EVE_MODEL` to pick an exact model. Scheduled runs get the owner's memory, owner email must match exactly, and a morning-digest example schedule ships turned off.

Docs: https://docs.claude-mem.ai/eve-integration

## Install choices move to the browser

A standard install now sets up the runtime in the terminal, then opens the local web setup to choose agents and integrations, bundled skills, model, native-memory preferences, optional email updates and telemetry (#5967). Agent shells can pass `--setup browser` when a person is there, or `--setup defer` to leave the choices for the first My Work visit. Explicit `--provider` / `--ide` installs and `npx claude-mem update` behave as before.

## Also new

- **Gemini CLI:** native lifecycle capture with `npx claude-mem gemini install|status|uninstall` (#5991, thanks @Kirat0201, closes #5949). Docs: https://docs.claude-mem.ai/gemini-cli/setup
- **Knowledge corpus on your API provider (opt-in):** `CLAUDE_MEM_CORPUS_AGENT=api` answers `query_corpus` through the selected OpenRouter or OpenAI-compatible provider instead of the Claude Agent SDK. The default is unchanged (#5682, thanks @bulanovk).
- **Agent SDK:** a project-scoped memory example (#5995, thanks @Kirat0201).

## Privacy clarification

- **Prompt-history uploads (#5176):** browser setup asks before sending selected prompt history to cmem.ai (fixed in v15.8.3, #5220). **Skip this step** sends no prompt history. The owner-goals skill can use your existing coding agent to analyze local history and save through the local worker without a separate cmem.ai intent upload. Inference still uses that agent's model provider. Updating does not remove data previously sent.

## Fixes

Thanks @Afloat16 for every fix below unless another name is given.

**Search and memory**
- Unicode words in long questions still match indexed memories (#5997); canonically equivalent titles match (#5975); literal backslashes in POSIX file history are kept (#5985, thanks @Kirat0201); the observation-only semantic endpoint paginates (#5892).
- Recall survives repeated project merges (#5990), and Chroma keeps live metadata during a merge and bootstraps large projects without spreading row ids (#5881, #5862).
- Distinct structured observation content is no longer merged (#5979); colliding manual session identities are kept apart (#5868).
- Native memory notes: quoted metadata is decoded (#5983), BOM-prefixed Markdown parses (#5976), and frontmatter needs a real top-level closing line (#5845).
- Knowledge answers in several parts are kept whole (#6002).

**Context and server**
- Server context rows obey mode filters (#5993, thanks @0xABCD01) and keep their platforms when prior replies are selected (#6003); cached labels refresh after discovery usage settles (#6006).
- The server keeps platform scope for unlinked manual memories (#5875), native receipt identity through event validation (#5872), event platforms in viewer feeds (#5846), and capture mutation receipts within the key's scope (#5883).
- Delegated recall keys need read scope (#5856); in-flight generation results are purged before returning (#5858); salvaged summary bodies show in the viewer (#5869).
- Shutdown stops accepting HTTP before draining connections (#5853).
- The observer keeps delivery identity when capture is disabled (#5867); sync keeps the outbox when a stopped push is rejected (#5850).

**Import and setup**
- Imports keep compressed Codex history (#6000), Gemini text-part provenance and JSONL history edits (#5999, #5865), Unicode in prompt provenance (#5989), distinct legacy Claude prompts (#5982) and legacy observation text (#5854); copied OpenCode fork activity is excluded (#6004).
- A history import is bounded to its starting rows (#5877); local scans include archived Codex history (#5888); token coverage leaves out observer history and Codex context estimates (#5847, #5886).
- Exports include the full saved history (#5879); linked data-directory ancestors work for media (#5874); Claude Code rule imports escape spaces (#5852).
- Telemetry discloses default sharing in the first session (#5884).

**My Work**
- Shared-work sync passes are bounded so a hung thread cannot stall owner actions (#6014, thanks @LuckVd), and reader requests have a deadline (#5860, thanks @LuckVd).
- Session provenance is republished after a failed activity publish (#6010, thanks @bulanovk); failed shared-activity publication is retried (#5870).
- Owner goals drop unverifiable quotes from a fresh save instead of refusing the whole save (#5992, thanks @0xABCD01); rules-only goal snapshots are reused (#5987); newer focus decisions survive an undo (#5849).
- Products refresh when local files change (#5887), GitHub products link from SSH push output (#5998), valued `git push` options parse before targets (#5885), and single-quoted commit subjects are kept literally (#5896).
- Deliverables keep declarations for previously captured copies (#5973).

**Integrations**
- OpenCode: the current V2 built-in tool contract is normalized and failed tool status is kept (#5857, #5855).
- OMP: native tool semantics and tool-call receipt identity are kept, and hooks install into the selected profile (#5871, #5864, #5876).
- OpenClaw: JSON5 configuration is accepted, and the selected host config and state paths are used (#5861, #5844).
- Windsurf: user hook commands survive installation and the MCP server identity is kept for recursion filtering (#5882, #5880).
- Cursor: MCP argument and result JSON envelopes are decoded (#5848). DSH: the managed transcript path refreshes on reinstall (#5873). T3 Code: TOML plugin state is read before removal (#5851).
- Smart file reading includes C and C++ header declarations, compact Java record constructors and TypeScript `declare function`s (#6015, #6012, #6005); XML literals keep their closing tags (#5977).

**Redaction and performance**
- Pulumi access tokens and Doppler personal tokens are redacted (#5984, thanks @kevin9327).
- Telemetry aggregates event statistics on arrival (#5994), long transcript lines are assembled once on import (#5981), OpenCode token usage is streamed (#5974), and legacy prompt retry lookups in the viewer are bounded by time (#6011).

## Docs

- Agent framework guides are grouped, and a setting that does not exist was removed (#6030).
- The token claim is stated as a per-result size ratio (#5889, thanks @Zhong-fan, #4138).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.17.1...v15.18.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.18.0` · 2026-11-12 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.18.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
