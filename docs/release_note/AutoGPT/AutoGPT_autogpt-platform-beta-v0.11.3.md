---
title: "AutoGPT autogpt-platform-beta-v0.11.3"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.11.3"
version: "autogpt-platform-beta-v0.11.3"
published: "2026-11-15"
type: "pre"
lang: "en"
summary: "Date: November 15, 2026"
---

# AutoGPT autogpt-platform-beta-v0.11.3

# 🚀 Release `autogpt-platform-beta-v0.11.3`

**Date:** November 15, 2026

---

## 🔒 Security

This release fixes several privately reported security issues. We'll publish the advisories once the fixes are live in production.

---

## 🔥 What's New?

### New Features

- **#15384** - Add native mobile server foundations (by @ntindle)
- **#16683** - Support native and browser Sign in with Apple (by @ntindle)
- **#16677** - Let Otto answer with visual cards (by @0ubbe)
- **#16768** - Close and erase an account without the confirmation email (erase-account --no-email) (by @kcze)
- **#16767** - One-off to delete bucket folders of deleted accounts (by @kcze)
- **#16688** - Reset an expert to how it arrived (by @Bentlybro)
- **#16792** - Add Gemini 4 Hydrogen support (by @ntindle)
- **#16741** - Add Gemini 4 Carbon support (by @ntindle)
- **#16791** - Show every expert's chats in the sidebar with real counts and per-expert paging (by @ntindle)
- **#13050** - Add remote Local PC execution targets (by @ntindle)
- **#16793** - Open account deletion to every user (SECRT-3488) (by @kcze)

### Enhancements

- **#16711** - Show a stone expert in the thinker's colour while thinking (by @0ubbe)
- **#16387** - Label Otto's Team card stats as the team's totals (by @Pwuts)
- **#16727** - Stream workspace downloads, profile continuously, make cache metrics admin-only (by @Pwuts)

### Bug Fixes

- **#14226** - Isolate billing state across account switches (by @ntindle)
- **#15440** - Self-host auth DB connection budget, visible token failures, build memory (by @ntindle)
- **#16720** - Marketplace creator pages and workflow outlines follow what the marketplace lists (by @Pwuts)
- **#16709** - Let a NO_TIER account with a card-less trial buy a plan (by @0ubbe)
- **#16708** - Name connected accounts by email when they have no title (by @0ubbe)
- **#15842** - Leave the embeddings out of memory recall's FalkorDB reads (by @ntindle)
- **#16537** - Stop offering expert workflows whose library agent was deleted (by @Pwuts)
- **#16536** - run_agent says a subscription is required instead of "Failed to process request" (by @Pwuts)
- **#16724** - Keep a library entry's settings when it is reused or restored (by @Pwuts)
- **#16722** - Validate the generic webhook's stored secret token as text (by @Pwuts)
- **#16436** - Judge the graph content find_library_agent returns like other reads (by @Pwuts)
- **#15843** - Walk each of memory recall's BFS origins once (by @ntindle)
- **#16719** - Read at most 1 MiB of a text attachment in Read Discord Messages (by @Pwuts)
- **#16469** - Charge ClaudeCodeBlock for the platform's E2B sandbox by walltime (by @Pwuts)
- **#16760** - Verify webhook secrets on preset triggers and check signature timestamps (by @ntindle)
- **#16761** - Bill usage-priced blocks run from AutoPilot like workflow runs (by @ntindle)
- **#16775** - Refuse edits whose result would pass the file size limit (by @ntindle)
- **#16769** - Account erasure removes AutoPilot transcripts from before April 2026 (by @kcze)
- **#16763** - Delete the PostHog person after the account's rows, and let a rerun repeat it (by @kcze)
- **#16766** - Free a crashed account erasure's lease within minutes, log CLI runs and page on stalled erasures (by @kcze)
- **#16764** - Ban records match every spelling of an address, and Keep refuses a banned account (by @kcze)
- **#16765** - Catch keys and Checkouts made in the seconds after an account closes (by @kcze)
- **#16539** - Say when a site refuses the browser or web_fetch, and name a fallback (by @Pwuts)
- **#16611** - No notification consumer is cut short at shutdown or orphaned at start-up (by @Pwuts)
- **#16531** - Re-read the wallet balance after a run finishes or a chat turn ends (by @Pwuts)
- **#16723** - Apply the team-change session rules to expert credential grants (by @Pwuts)
- **#14905** - Give each bash_exec sandbox its own PID and IPC namespace (by @ntindle)
- **#15059** - Rate-limit v1 API key validation before Scrypt (by @ntindle)
- **#16445** - Sign up through OAuth only with a provider-verified email (by @Pwuts)
- **#16800** - Stop skipping runs of agent schedules stored with a one-second grace (by @Pwuts)

### Documentation

- **#16787** - Microsoft sign-in is set up on both Entra apps and in Vercel (by @ntindle)
- **#16716** - Remove the multi-expert teams plan and citations of files the repo lacks (by @Pwuts)
- **#16794** - List what an account erasure leaves in Stripe, cost records and handed-over agents (by @kcze)
- **#16757** - Changelog v0.11.1 to v0.11.2 (by @itsababseh)

### Dependencies & Maintenance

- **#16600** - Bump pnpm/action-setup from 4.3.0 to 6.1.0 (by @dependabot[bot])
- **#16751** - Bump @ai-sdk/react from 4.0.158 to 4.0.166 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16608** - Bump actions/cache from 5.1.0 to 6.1.0 in /.github/actions/generate-prisma-client (by @dependabot[bot])
- **#16749** - Bump ruff from 0.17.3 to 0.17.4 in /autogpt_platform/autogpt_libs in the development-dependencies group (by @dependabot[bot])
- **#16750** - Bump pytest-asyncio from 1.4.1 to 1.4.1.post1 in /autogpt_platform/autogpt_libs (by @dependabot[bot])
- **#16754** - Bump the production-dependencies group across 1 directory with 8 updates (by @dependabot[bot])
- **#16795** - Bump opentelemetry-api from 1.45.1 to 1.45.2 in /autogpt_platform/autogpt_libs in the security-updates group (by @dependabot[bot])
- **#15889** - Bump the production-dependencies group across 1 directory with 2 updates (by @dependabot[bot])
- **#16574** - Deploy production only for platform releases (by @ntindle)

### Development Experience

- **#14338** - Add the /process-vulnerability-report skill (by @Pwuts)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release:

- @itsababseh
- @Bentlybro
- @ntindle
- @Pwuts
- @0ubbe
- @kcze
- @dependabot[bot]

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.11.3
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.11.2...autogpt-platform-beta-v0.11.3).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.11.3` · 2026-11-15 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.11.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
