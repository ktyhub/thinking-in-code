---
title: "AutoGPT autogpt-platform-beta-v0.7.4"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.7.4"
published: "2026-09-04"
type: "pre"
lang: "en"
summary: "#14215 - Scope integrations per expert and surface them in the UI (by @0ubbe) · #14216 - Surface agent work on the homepage via an activity event log (by @0ubbe)"
---

# AutoGPT autogpt-platform-beta-v0.7.4

## 🔥 What's New?

### New Features

- **#14215** - Scope integrations per expert and surface them in the UI (by @0ubbe)
- **#14216** - Surface agent work on the homepage via an activity event log (by @0ubbe)
- **#14078** - Let a user pick the connection every new chat starts on (by @ntindle)
- **#14081** - Show which ChatGPT account a connection runs as (by @ntindle)
- **#14082** - Describe an AI connection on the server that enforces it (by @ntindle)
- **#14086** - Show the ChatGPT connection a plan excludes, locked (by @ntindle)
- **#14103** - Report provider failures on the engine that actually runs (by @ntindle)
- **#14120** - Describe the Integrations page as what it now holds (by @ntindle)
- **#14150** - Let a chat continue elsewhere when a plan runs out (by @ntindle)
- **#14024** - Increase skill description limit to 1,024 chars (by @Torantulino)
- **#14231** - Add per-user rate limit on the subscription status endpoint (by @Bentlybro)
- **#14297** - Install your own library agents as expert workflows (by @Pwuts)
- **#13634** - Add GitHub notification management blocks (by @Pwuts)

### Enhancements

- **#14239** - Minimal GPT-style restyle of the copilot chat (by @0ubbe)
- **#14304** - Tidy copilot chrome and move recent workflow runs to the home briefing (by @0ubbe)
- **#14195** - Run Codex over HTTP and drop the 391 MB bundled CLI (by @ntindle)
- **#14229** - Cache redundant active-subscription lookups on the billing status endpoint (by @Bentlybro)
- **#14295** - Output full PR object from GithubReadPullRequestBlock (by @Pwuts)

### UI/UX Improvements

- **#14250** - Stop chat composer height flicker and placeholder flash on empty session (by @Otto-AGPT)
- **#14270** - Stop the composer flickering between its row and stacked layouts (by @0ubbe)

### Bug Fixes

- **#14163** - Disable Claude Code system prompt (by @Torantulino)
- **#14223** - Prevent unauthenticated credit/subscription API calls (by @ntindle)
- **#14232** - Clean up wallet timers (by @Torantulino)
- **#14259** - Make async Redis clients loop-safe (by @ntindle)
- **#14262** - Stop block docs generator overwriting prose on a rename (by @Pwuts)
- **#14267** - Align pytest async loop scope (by @ntindle)
- **#14097** - Copilot bot delivery and escaping fixes across adapters (by @Bentlybro)
- **#14168** - Fix self-referencing path filter after workflow rename (by @DanielSwift1992)
- **#14258** - Add AllQuiet to camelCase search exceptions (by @Otto-AGPT)
- **#14308** - Remove the morning-briefing cron when the feature flag is off (by @Pwuts)
- **#14316** - Make completing a Connect card actually connect (by @Pwuts)

### Documentation

- **#14214** - Regenerate block docs to fix check-docs-sync drift on dev (by @Pwuts)
- **#14217** - Fix invalid git clone command in README (by @odenta-747)
- **#14276** - Refresh pr-test skill for Better Auth, env setup, and billing-test trap (by @Pwuts)

### Dependencies & Maintenance

- **#14225** - Merge master back into dev (by @ntindle)
- **#14245** - Bump actions/download-artifact from 8.0.0 to 8.0.1 in the production-dependencies group (by @dependabot[bot])
- **#14269** - Add knip to find unused files, exports and dependencies (by @0ubbe)

### Refactoring

- **#14083** - Remove the Fast/Thinking mode, control and plumbing (by @ntindle)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @DanielSwift1992
- @odenta-747

As well as our returning contributors:
- @0ubbe
- @Bentlybro
- @ntindle
- @Otto-AGPT
- @Pwuts
- @Torantulino

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.7.4
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.7.3...autogpt-platform-beta-v0.7.4).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.7.4` · 2026-09-04 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.7.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
