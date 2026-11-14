---
title: "claude-mem v15.15.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.15.1"
version: "v15.15.1"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "When the worker was down or refused a capture, some capture paths kept that work and sent it again later, which could start model calls nobody asked for."
---

# claude-mem v15.15.1

## No replay after an outage

When the worker was down or refused a capture, some capture paths kept that work and sent it again later, which could start model calls nobody asked for. They now drop what the worker refused and carry on with new work (#5663):

- **Transcript capture:** a transcript line the worker refuses or cannot take is skipped. Before, the watcher stopped at that line and, once the worker was back, sent it again with every line after it. A restart no longer resends lines from an outage either.
- **Cowork:** a prompt, observation or summary that fails to send is dropped instead of being spooled and sent again by a later hook. Only session start, session end and subagent stop events are still spooled, and prompts, observations and summaries left in an older spool are removed on its next flush.
- **OpenCode:** a session start the worker refused is sent once, like observations and summaries, instead of being retried in the background for about 10 seconds.

## Fixes

- **Redaction:** Grafana service account tokens (`glsa_`), Grafana Cloud tokens (`glc_`) and Postman API keys (`PMAK-`) are redacted, by the worker and by the Cowork shim. Turn either off by name with `CLAUDE_MEM_REDACT_DISABLED_BUILTINS` (`grafana_token`, `postman_key`) (#5662, thanks @kevin9327).
- **OpenClaw:** `<private>` content is removed from tool output before the output is cut to 1,000 characters. Before, a cut inside a private block dropped its closing tag, so the private text was stored. Text after an unclosed `<private>` tag is now dropped too (#5663).
- **Status and doctor:** `claude-mem status` names every dependency in words, such as "Observer data directory setup required" instead of `observer_dir: setup_required`, and its hint points to `claude-mem doctor` instead of a Settings screen that does not show these. `doctor` shows a status from a newer worker instead of dropping it (#5661).
- **Work state:** `Done` and `Dropped` close an item in any letter case, everywhere. Before, saving an owner-goals item as `Done` was refused although every reader already treated it as closed (#5661).
- **CCS Align:** a corrupt exclusion file is refused instead of being read as empty, so excluded observations stay excluded and the file is not overwritten (#5663).
- **Viewer:** observations of type `sensitive` get their own "Sensitive" filter on the session page instead of being counted under "Other" (#5663).

## Also in this release

- **Setup and My Work:** each setup, billing, scan and refresh state is defined once and shared by the installer, the worker and the pages, so a new state fails the typecheck until every screen handles it (#5661).
- **Tests:** about 60,000 lines of tests removed: tests that only checked their own fixtures, duplicate cases (folded into tables) and four duplicate copies of the agent-cost-report Python tests. Kept regression tests run production code (#5663).
- **CI:** Bun is pinned to 1.4.4, ripgrep is installed, the Cowork runner and agent-cost-report Python tests run, and tool-heavy suites moved to the integration lane (#5663).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.15.0...v15.15.1

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.15.1` · 2026-11-10 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.15.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
