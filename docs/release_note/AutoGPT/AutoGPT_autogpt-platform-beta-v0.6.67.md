---
title: "AutoGPT autogpt-platform-beta-v0.6.67"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.6.67"
version: "autogpt-platform-beta-v0.6.67"
published: "2026-07-15"
type: "pre"
lang: "en"
summary: "#12670 - Add first-class org/workspace support — schema, auth, APIs, migration, frontend (by @ntindle) · #13505 - Split adapter base into Socket/Webhook + neutralize shared-core coupling (by @Bentlybro)"
---

# AutoGPT autogpt-platform-beta-v0.6.67

# 🚀 Release `autogpt-platform-beta-v0.6.67`

**Date:** January 2025

---

## 🔥 What's New?

### New Features
- **#12670** - Add first-class org/workspace support — schema, auth, APIs, migration, frontend (by @ntindle)
- **#13505** - Split adapter base into Socket/Webhook + neutralize shared-core coupling (by @Bentlybro)
- **#13515** - Tour demo auto-play, sidebar upsell card, and logged-out marketplace shell (by @0ubbe)
- **#13489** - Copilot composer + menu with Skills/Scheduled/Integrations modals and guided creation flows (by @0ubbe)
- **#13508** - Add Slack adapter (webhook / Events API) (by @Bentlybro)
- **#13509** - Surface Slack on the Bots settings + admin analytics pages (by @Bentlybro)
- **#13514** - Multi-workspace Slack install via OAuth (by @Bentlybro)
- **#11219** - Unmask static content for Sentry replays (by @ntindle with @Copilot)
- **#13561** - Telegram adapter — third platform on the chat bus (by @Bentlybro)
- **#13563** - LaunchDarkly per-platform visibility for Settings → Bots (by @Bentlybro)
- **#13565** - Stream Telegram replies as live draft previews (by @Bentlybro)

### Enhancements
- **#13485** - Auto-redeploy active previews when a PR is updated (by @ntindle)
- **#13506** - Extract shared adapter helpers (attachments, mentions, history, chunking) (by @Bentlybro)
- **#13553** - Copilot-bot cleanup — handler split, shared command policy, AutoGPT branding (by @Bentlybro)

### Bug Fixes
- **#13512** - Unbrick dev deploy — drop no-op cutover backfill, batch startup tenancy backfill (by @ntindle)
- **#13521** - Harden batch-bot merge gate + migrate to a GitHub App identity (by @ntindle)
- **#13353** - Classify trigger blocks as inputs (by @cyphercodes)
- **#13536** - Batch bot — push rollup objects instead of refs-API update, fix add-then-list race (by @ntindle)
- **#13538** - Batch bot — findRollupPR head filter matches nothing after first rollup (by @ntindle)
- **#13547** - Cut auth panel vortex animation cost to stop page-wide jank (by @0ubbe)
- **#13548** - Stop registering baseline-only MCP TodoWrite on the SDK server (by @0ubbe)
- **#13550** - Reset tour chat dim when switching scenarios (by @0ubbe)
- **#13552** - Prevent duplicate personal orgs — in-loop lock renewal, get-or-create backfill, partial unique index (by @ntindle)
- **#13564** - Bot chat turns crash on dev — route org lookup through DatabaseManager (by @Bentlybro)
- **#13511** - Don't bounce /reset-password to /onboarding for un-onboarded accounts (by @Pwuts)
- **#13520** - Use onboarding "call you" name in copilot greeting (by @Pwuts)
- **#13577** - Clamp oversized bot prompts to the request cap (by @Bentlybro)
- **#13578** - Unstick publish submit after adding image and cut success-screen lag (by @Abhi1992002)

### Dependencies & Maintenance
- **#13507** - Remove built-in Revid credential, require user-provided key (by @kcze)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributor:

- @cyphercodes

As well as our returning contributors:
- @ntindle
- @Bentlybro
- @0ubbe
- @Pwuts
- @kcze
- @Abhi1992002

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.6.67
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.6.66...autogpt-platform-beta-v0.6.67).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.6.67` · 2026-07-15 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.6.67)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
