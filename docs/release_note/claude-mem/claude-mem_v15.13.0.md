---
title: "claude-mem v15.13.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.13.0"
version: "v15.13.0"
published: "2026-11-09"
type: "minor"
lang: "en"
summary: "Cursor summaries: Cursor sessions got no summary on native Windows, or when the workspace path had a , a space or a dot folder in it."
---

# claude-mem v15.13.0

## Critical fix

- **Cursor summaries:** Cursor sessions got no summary on native Windows, or when the workspace path had a `_`, a space or a dot folder in it. claude-mem now looks for the transcript in the project folder Cursor actually names, so those sessions get summaries again (#5544, thanks @tanishqbaweja; the same symptom was first reported in #2248 by @wbingli).

## New

- **Auto-clear at 33% context (off by default):** turn it on with `CLAUDE_MEM_AUTO_CLEAR_ENABLED=true`. When a Claude Code conversation reaches a third of the context window, Claude saves its work state, claude-mem runs `/clear` and sends `continue`, and the fresh conversation picks the work back up. No save means no clear (#5486).
- **Standard Compute preset** for the openai-compatible provider (#5492, thanks @henrikdukefoss).
- **PopNow preset** for the openai-compatible provider (#5434, thanks @kyuminjo).

## Fixes

- **Chroma:** deleting many observations at once no longer piles up cleanups that lock chroma-mcp for hours; they now run one at a time (#5496, thanks @xunguangzlj-cloud; reported in #5495 by @voyvodka).
- **CLI:** `claude-mem --help`, `-h` and a mistyped command print usage instead of starting a foreground worker (#5491, thanks @ryrenz; reported in #5490 by @ukdataservices-admin).
- **CLI:** `--flag=value` works in `server api-key`, `memory ingest` and `adopt`, so `--scope=memories:read` really makes a read-only key (#5469, thanks @rudycelekli).
- **Doctor:** `npx claude-mem doctor` no longer crashes at exit on Windows (#5465, thanks @tng7576650-commits).
- **CMEM Pro sign-in:** when cmem.ai refuses a sign-in start without a message, the installer shows the HTTP status instead of connectivity advice (#5498, thanks @xunguangzlj-cloud).
- **Redaction:** vendor keys printed at the start of a line in tool output are now redacted (#5521).
- **Cowork:** the Cowork shim redacts the NVIDIA, Runcrate, Groq, xAI and Perplexity keys the worker already redacts (#5483, thanks @DeryFerd).
- **Windsurf:** the installer writes `hooks.json` and the rules file atomically, so an interrupted install can't leave Windsurf with a broken hooks file (#5542, thanks @DeryFerd).
- **Server:** the viewer feed endpoints bound the `offset` a client can send (#5485, thanks @DeryFerd).
- **Install:** OpenCode, Kimi and Antigravity config files saved with a UTF-8 BOM are read correctly (#5472, thanks @rudycelekli).
- **Launcher:** a `~` at the start of `CLAUDE_MEM_DATA_DIR` is expanded when recording an empty hook payload, instead of creating a `~` folder in the project (#5473, thanks @rudycelekli).
- **Import:** re-importing an export keeps project merges (`merged_into_project`) (#5471, thanks @rudycelekli).
- **DSH:** ingested tool memories keep the configured `platformSource` (#5470, thanks @rudycelekli).
- **CLAUDE.md:** in a monorepo, folder CLAUDE.md rows are headed with a file that is in that folder (#5468, thanks @rudycelekli).
- **My Work:** commits made with `git commit -m "$(cat <<'EOF' ...)"` and every `gh pr` title form are read correctly (#5480, thanks @rudycelekli).
- **Search:** file filters match whether paths use `/` or `\` (#5466, thanks @liuyinchu).
- **Hermes:** malformed endpoints and truncated responses fall back cleanly, sessions end even when the final event fails, and recall on long prompts stops at the query limit (#5462, thanks @Afloat16).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.12.1...v15.13.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.13.0` · 2026-11-09 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
