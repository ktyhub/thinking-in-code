---
title: "claude-mem v15.18.2"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.18.2"
version: "v15.18.2"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "Gemini CLI on Windows records again (#6079, thanks @tanishqbaweja). On Windows, Gemini CLI runs hook commands through PowerShell."
---

# claude-mem v15.18.2

## Critical fixes

- **Gemini CLI on Windows records again** (#6079, thanks @tanishqbaweja). On Windows, Gemini CLI runs hook commands through PowerShell. The hook commands claude-mem wrote started with a quoted path, which PowerShell rejects as a parser error. Every claude-mem Gemini hook (SessionStart, BeforeAgent, AfterTool, AfterAgent, SessionEnd) failed on every event since 15.18.0, so Gemini sessions on Windows saved nothing and got no saved context. Hook commands on Windows now start with PowerShell's `&` call operator, as the Cursor and Windsurf hooks already do. macOS and Linux are unchanged.

  **Windows Gemini CLI users: run `npx claude-mem gemini install` once after updating.** `npx claude-mem update` and auto-update do not rewrite Gemini's hooks, so the broken commands stay until you reinstall them. The reinstall replaces the old commands, and `npx claude-mem gemini uninstall` removes both forms.

## Improvements

- **My Work shows the real state of open work** (#6038). Jev now reads each open work-state item once per version on the 10-minute My Work check and labels it: the state its notes describe, plus which of its fields holds the next step and the result. At confidence 0.8 or higher, My Work shows a judged status in place of a quiet agent's stale `doing` or missing status (finished becomes Done, not checked; waiting on you becomes Needs you; abandoned becomes Closed). A status the agent set on purpose, such as `blocked`, is kept. Labels are stored in `work-view/work-state-labels.json`; the work-state log itself is never written. Notes are redacted before Jev reads them, calls are paced one a second, and a service refusal or outage stops the run without being retried until the next check.

## CI

- The integration lane launches Chrome once before its tests, so the first browser test no longer fails on the runner's slow first Chrome start (#6070, thanks @bulanovk, fixes #6069).

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.18.2` · 2026-11-12 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.18.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
