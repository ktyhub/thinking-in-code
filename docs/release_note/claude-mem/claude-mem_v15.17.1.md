---
title: "claude-mem v15.17.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.17.1"
version: "v15.17.1"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "Since 15.16.0 the worker clears old plugin versions out of Claude Code's plugin cache five minutes after it starts and then hourly. A Claude Code session that was already open when an update arrived keeps running from…"
---

# claude-mem v15.17.1

## Open sessions keep capturing after an update

Since 15.16.0 the worker clears old plugin versions out of Claude Code's plugin cache five minutes after it starts and then hourly. A Claude Code session that was already open when an update arrived keeps running from the older version folder. Once the sweep deleted that folder, Claude Code refused to run every claude-mem hook for that session ("Plugin directory does not exist"), so the session silently stopped saving prompts, tool calls, observations and summaries.

The sweep now reads the `.in_use` records Claude Code keeps for each plugin version, and keeps a version while any session loaded from it is still running. Folders no running session uses are still removed on the next sweep, so the disk clean-up from 15.16.0 stays. The worker's sweep, `npx claude-mem prune` (and its `--dry-run`) and the installer all follow the same rule (#5971, thanks @rigel905, fixes #5970).

## Fixes

- **Context:** an explicitly empty project selection shows nothing instead of observations from every project (#5866, thanks @Afloat16).
- **Context:** read-cost and savings estimates count stored facts once, instead of counting extra escape characters and an invented `[]` for rows without facts (#5980, thanks @Afloat16).
- **Observer:** a streamed answer that arrives as a refusal counts as generated output, so an interrupted stream is not sent again and charged twice (#5843, thanks @Afloat16).
- **My Work:** the API agent rejects an answer the provider cut with `content_filter`, instead of saving an incomplete report (#5878, thanks @Afloat16).
- **Sync:** a pulled page of synced records waits for another writer instead of failing at once with "database is locked", so a large first pull no longer backs off for minutes (#5996).
- **My Work:** the worker reads My Work's shared history once per change instead of re-reading all of it on every sync pass (#5986).
- **Cloud viewer:** a slow-starting cloud viewer reloads its "starting" page until the worker answers, and a hidden cloud My Work tab closes its live feed until it is shown again (#5988, #5953).

## Integrations

New verified memory workflows for agent frameworks, each scoped to one project: Vercel AI SDK (#5951), LangGraph (#5954), Pydantic AI (#5955), Microsoft Agent Framework (#6017), Haystack (#6018), LlamaIndex (#6019), Google ADK (#6020), CrewAI (#6021), Strands Agents (#6023), OpenAI Agents SDK (#6024), Agno (#6025), SmolAgents (#6026), AG2 (#6027) and AutoGen (#6028). Thanks @Afloat16 for all of them.

## Also in this release

- **Cloud viewer:** groundwork for routing each signed-in account to its own app; production behaviour is unchanged (#5952).
- **eve template:** the template's lockfile includes claude-mem 15.17.0, so its deploy button installs (#5968).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.17.0...v15.17.1

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.17.1` · 2026-11-11 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.17.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
