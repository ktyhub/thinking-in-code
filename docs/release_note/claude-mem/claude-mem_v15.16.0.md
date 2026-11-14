---
title: "claude-mem v15.16.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.16.0"
version: "v15.16.0"
published: "2026-11-11"
type: "minor"
lang: "en"
summary: "My Work refresh on your API provider (opt-in): set CLAUDE_MEM_WORK_VIEW_AGENT=api to run the My Work refresh on the provider you already selected (openrouter, openai-compatible, or the legacy cmem spelling)."
---

# claude-mem v15.16.0

## New

- **My Work refresh on your API provider (opt-in):** set `CLAUDE_MEM_WORK_VIEW_AGENT=api` to run the My Work refresh on the provider you already selected (`openrouter`, `openai-compatible`, or the legacy `cmem` spelling). Installs with no logged-in Claude Code, Codex or Gemini CLI (for example OpenCode or DSH hosts) can now use My Work. With an API provider selected and the setting empty, the refresh no longer falls back to a logged-in Claude Code: no agent runs and nothing is spent until you choose one (#5674, thanks @bulanovk).
- **GitHub MCP pull requests in My Work:** pull requests created through GitHub's official MCP `create_pull_request` tool now show up as My Work products. Only completed results whose URL matches the requested repository are accepted (#5809, thanks @Afloat16).
- **UberLLM preset:** `uberllm` is now a preset of the `openai-compatible` provider (`https://api.uberllm.dev/v1`, default model `deepseek/deepseek-v4.1-flash`) (#5706, thanks @PSA-Team-source).
- **Tunable live handoff timeout:** `CLAUDE_MEM_HOOK_HANDOFF_TIMEOUT_MS` (default 250) sets the budget for the single live handoff from a hook to the worker, and a missed handoff is now logged at WARN instead of DEBUG (#5831, thanks @mohitdixit02).

## Notable fixes

- **Plugin cache cleanup:** the worker now prunes old version folders that Claude Code's marketplace updates leave in `~/.claude/plugins/cache/thedotmack/claude-mem/` (one report: 21 versions, about 16 GB). It keeps the running copy and the registered version, and sweeps after boot settles and then hourly (#5685, thanks @MaxWang007).
- **Windows antivirus noise:** install, update and launcher rebuilds no longer start a hidden PowerShell when the launcher folder is already on PATH, the pattern Kaspersky flagged (#5835, reported by @Ali-Sabri-0).
- **My Work language:** when `CLAUDE_MEM_WORK_VIEW_TEXT_LANGUAGE` is empty, every refresh step now writes in the system locale's language, so one run no longer mixes languages (#5669, thanks @0xABCD01).
- **My Work idle cost:** idle polling no longer rescans every synced row, and the live overview, focus-area merging and heavy panels do less work per update (#5834).
- **Backups:** a declined backup run returns a failure, saved backups are reported separately from retention errors, backup intervals beyond the timer limit are honored, and restore rejects stamped snapshots missing worker tables (#5750, #5781, #5784, #5684, thanks @Kirat0201).
- **Shell setup:** the launcher PATH block and the legacy uninstall alias are written atomically, Cowork stages spooled events under `$HOME` when the host sets it, and Hermes keeps permanent HTTP client errors out of its circuit breaker (#5680, #5679, #5677, #5678, thanks @DeryFerd).
- **OpenCode:** the bash tool is reported as `Bash`, so `SKIP_BASH_PATTERNS` applies (#5668, thanks @ryrenz).
- **Sync:** a failed Chroma cleanup after a delete is retried (#5673, thanks @Zhong-fan).
- **SessionStart:** the cache read and compose steps share one body budget, so a cached body is served only when it fits (#5686, thanks @Varshith-Kali).

## More fixes

About 130 smaller fixes from @Afloat16 across capture, sync, search, context, import, transcripts, media, the server, and the Codex, OpenCode, OpenClaw, Hermes, Grok, Kimi, Gemini, Pi, Goose, Notion and Telegram integrations. Highlights:

- **Search and context:** literal project keys and file paths are preserved through recall, merges and caching; Unicode and combining marks survive query words and snippet limits; cached context expires after restores and row replacements; the largest fitting timeline prefix is kept.
- **Sync and memory:** session titles commit with their outbox mutation and get receiver redaction; manual saves and new prompts work after a session deletion; note revisions survive title dedup.
- **Transcripts and import:** multipart Codex messages, paired patch results and zstd frame seams are read correctly; reasoning stays out of final answers; OpenCode, Gemini and restored summaries import without duplicates or lost prompts.
- **Server and providers:** API key derivation stays off the request loop; cancellations propagate through retries and compression; split token usage is metered on compatible replies; memory content is sanitized before storage.
- **Media:** image ordinals, Read evidence across path spellings, and advertised image dimension bounds are preserved; inline allowance is charged only for accepted images.

Also from @Kirat0201: file history follows whole project merges, interactive timeline search honors project lists, and unified search keeps literal `filePath` values (#5789, #5787, #5785).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.15.2...v15.16.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.16.0` · 2026-11-11 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
