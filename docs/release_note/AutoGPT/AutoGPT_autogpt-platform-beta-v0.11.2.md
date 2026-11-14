---
title: "AutoGPT autogpt-platform-beta-v0.11.2"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.11.2"
version: "autogpt-platform-beta-v0.11.2"
published: "2026-11-11"
type: "pre"
lang: "en"
summary: "Date: January 2025"
---

# AutoGPT autogpt-platform-beta-v0.11.2

# 🚀 Release `autogpt-platform-beta-v0.11.2`

**Date:** January 2025

---

## 🔥 What's New?

### New Features
- **#16308** - Plan-first trial: starter tasks and experts on the paywall, hire step removed, team hired on trial start, Home starts with ranked tasks owned by experts (by @itsababseh)
- **#16650** - Add Wix to the MCP catalog (by @ntindle)
- **#16654** - Otto replies on the brain dump's not-enough screen (by @itsababseh)
- **#15459** - Self-serve account deletion with an optional exit question (by @itsababseh)
- **#16698** - Send a PostHog event whenever a usage limit refuses or pauses work (SECRT-3411) (by @kcze)
- **#16269** - Continue with Microsoft, with the Microsoft 365 offer as a movable onboarding step (by @ntindle)
- **#16348** - Add in-app feedback prompts (by @0ubbe)
- **#16461** - Limit how many E2B sandboxes run at once, per deployment and per account (by @Pwuts)
- **#16689** - Open a new Expert's chat from its card and the sidebar, and create and start in one click (by @itsababseh)
- **#16702** - Set the plan tier on the PostHog person (SECRT-3411) (by @kcze)
- **#15454** - Let the HubSpot blocks sign in with HubSpot OAuth (by @Bentlybro)
- **#15487** - Erase closed accounts after #15459's 14 days, keeping a ban record (erase-account CLI and job) (by @kcze)

### Enhancements
- **#16700** - Add Meta Muse Ember model support (by @ntindle)
- **#16699** - Add Claude Fable 5.2 support (by @ntindle)
- **#15761** - Overlap independent skill reads in copilot (by @ntindle)
- **#16685** - Verify OAuth client secrets off the event loop for better performance (by @ntindle)

### UI/UX Improvements
- **#16697** - Show a block's approval card in the live chat and name the Expert on Home (by @itsababseh)

### Bug Fixes
- **#16655** - Leave the model unset in generated workflows unless the user names one (by @kcze)
- **#15081** - Record why OAuth refreshes fail, stop replaying dead tokens, name missing scopes (by @Bentlybro)
- **#16216** - Delete Telegram Message no longer fails after a successful delete (by @ntindle)
- **#16621** - Normalise chat-platform messages before they are stored or run (by @ntindle)
- **#16667** - Guess CSV delimiters by parsing instead of csv.Sniffer (by @ntindle)
- **#16471** - Make brain dump ids without crypto.randomUUID (by @posthog-eu[bot])
- **#16368** - Redirect read_tool_result on workspace tool-outputs/ paths (by @0ubbe)
- **#16669** - Rebuild memory communities from one hourly job instead of a cron per scope (by @Pwuts)
- **#16691** - Remove block media files after AutoPilot block runs (by @ntindle)
- **#16690** - Bound sub-workflow nesting and count nested runs toward the user's worker share (by @ntindle)
- **#16693** - Run video encodes off the executor loop with a real time limit (by @ntindle)
- **#16692** - Honour automod_fail_open when moderation times out (by @ntindle)
- **#16672** - bash_exec kills everything a timed-out command started (by @Pwuts)
- **#16717** - Resolve a v1 external API request's auth once (by @Pwuts)
- **#16670** - The email Unsubscribe link opens a page to confirm, instead of an error (by @Pwuts)
- **#16721** - Settle a Stripe refund when an update reports it succeeded (by @Pwuts)
- **#16671** - Stop Home and onboarding bouncing after the paid onboarding checkout (by @Pwuts)
- **#16682** - Let the Discord bot see forwarded and replied-to images (by @Bentlybro)
- **#16703** - Fail at once with a clear message when an LLM request is too large for the provider (by @Bentlybro)
- **#16704** - Otto no longer says a signed-in MCP account isn't connected when the server answers 403 (by @Bentlybro)
- **#16684** - An expert run with a failed step reports failed, not completed (by @Bentlybro)
- **#16707** - Mark Exa Create Research as an external action (by @0ubbe)
- **#16713** - Treat the platform's SDK keys (Firecrawl, DataForSEO, Tavily, ...) as system credentials everywhere (by @Torantulino)
- **#16745** - Account erasure deletes the account's chats (SECRT-2854) (by @kcze)
- **#16706** - Let a run leave an input blank when Advanced is on (by @0ubbe)
- **#16710** - Say when a JSON field holds a number too long to keep (by @0ubbe)

### Documentation
- **#14339** - Codify accepted review findings as AGENTS.md rules (by @Pwuts)
- **#12122** - Add deployment environment variables guide (by @Bentlybro)
- **#15872** - Document every rate limit, and how the Platform finds a caller's IP address (by @Pwuts)

### Dependencies & Maintenance
- **#16609** - Bump @ai-sdk/react from 4.0.147 to 4.0.158 in frontend (by @dependabot[bot])
- **#16591** - Bump vite from 7.3.1 to 7.3.7 in frontend in the security-updates group (by @dependabot[bot])
- **#16592** - Bump the development-dependencies group across 1 directory with 2 updates (by @dependabot[bot])
- **#16590** - Bump pyasn1 from 0.6.4 to 0.6.5 in autogpt_libs in the security-updates group (by @dependabot[bot])
- **#16589** - Bump the development-dependencies group across 1 directory with 3 updates (by @dependabot[bot])
- **#16606** - Bump eventsource-parser from 3.0.6 to 4.1.3 in frontend (by @dependabot[bot])
- **#15996** - Bump concurrently from 9.2.1 to 10.0.6 in frontend (by @dependabot[bot])
- **#16610** - Bump framer-motion from 13.3.0 to 14.7.1 in frontend (by @dependabot[bot])
- **#16653** - Run the macOS installer job on macos-15 (by @ntindle)
- **#16603** - Bump peter-evans/create-pull-request from 6.1.0 to 8.1.1 (by @dependabot[bot])
- **#15225** - Read the single-container build cache from the final bake target only (by @Bentlybro)

### Development Experience
- **#16712** - Declare Max's new weekly-perfect-fit-leads routine (by @Torantulino)
- **#15477** - Add Linear start-of-work rules for core team agents (by @itsababseh)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release:

- @itsababseh
- @kcze
- @Bentlybro
- @Pwuts
- @ntindle
- @0ubbe
- @Torantulino
- @posthog-eu[bot]
- @dependabot[bot]

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.11.2
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.11.1...autogpt-platform-beta-v0.11.2).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.11.2` · 2026-11-11 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.11.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
