---
title: "AutoGPT autogpt-platform-beta-v0.8.4"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.4"
version: "autogpt-platform-beta-v0.8.4"
published: "2026-10-14"
type: "pre"
lang: "en"
summary: "Date: October 2026"
---

# AutoGPT autogpt-platform-beta-v0.8.4

# 🚀 Release `autogpt-platform-beta-v0.8.4`

**Date:** October 2026

---

## 🔥 What's New?

### New Features
- **#15089** - Run Copilot chat on a turn runtime that resumes at its cursor on one connection (by @Pwuts)
- **#15199** - Expert integrations connect through MCP first (by @0ubbe)
- **#15248** - Add “Give feedback” to the account menu (hotfix) (by @kcze)
- **#15216** - Keep Otto and expert replies short (by @0ubbe)
- **#15217** - Make the expert hire card short and Typeform-like (by @0ubbe)
- **#15249** - Send onboarding role to MailerLite and PostHog; exclude Iran and Russia from MailerLite (by @ntindle)
- **#15204** - Redesign wallet with chat usage and credits (by @Torantulino)
- **#15196** - Move onboarding paywall after personalization (by @Torantulino)
- **#15061** - Approval cards label/word tool arguments from the tool schema (by @Pwuts)
- **#15358** - Canceling a trial keeps access until the trial ends (by @itsababseh)
- **#15361** - Sub-session waits for a slot when the user’s slots are full (by @Pwuts)
- **#15043** - Approved call chain row expands to show what ran (by @Pwuts)
- **#15349** - Add “Chats” to the collapsed sidebar (by @itsababseh)
- **#15441** - Show “Thinking…” instead of backend status lines in Copilot (by @0ubbe)
- **#15442** - Restyle chat markdown tables (by @0ubbe)
- **#15462** - Give Copilot turns and graph node runs their own Sentry traces (by @ntindle)
- **#15460** - Tag Sentry events with deployed commit and allow environment overrides (by @ntindle)
- **#15213** - Route browser PostHog traffic through our own domain (by @kcze)
- **#15480** - Add Meta Muse Wonder support (by @ntindle)
- **#15466** - Send MailerLite segmentation fields to PostHog too (by @ntindle)
- **#15496** - Add Google Gemini 4 Argon support (by @ntindle)
- **#15498** - Attribute AutoPilot generations in PostHog and send reply feedback there (by @kcze)

### Enhancements
- **#15461** - Add shared Sentry perf-compare recipe for performance agents (by @ntindle)

### UI/UX Improvements
- **#15343** - Allow scrolling anywhere in the sidebar (by @Torantulino)
- **#15407** - Show a single paywall toast with an upgrade link when a Copilot send is refused (by @ntindle)
- **#15439** - Indicate no model is connected in builder chat; hide spend without billing (by @ntindle)
- **#15448** - Prevent mobile expert pill overlap (by @0ubbe)
- **#15455** - Line up mobile expert pill with the floating controls (by @0ubbe)

### Bug Fixes
- **#15252** - Prevent long “Other” role input from losing onboarding profile (by @ntindle)
- **#15250** - Use the right client for worker timezone and store checks (by @ntindle)
- **#15309** - Install poetry and prisma in their own venvs so the image builds on debian:13-slim (by @Pwuts)
- **#14148** - Index schedule reads by user and reduce jobstore queries per cache miss (by @ntindle)
- **#15342** - Stop overcharging resumed SDK turns (hotfix) (by @ntindle)
- **#15147** - Marketplace search finds experts by job title (by @Pwuts)
- **#15149** - `find_capability` finds roster experts to hire and the user’s team (by @Pwuts)
- **#15305** - Charge each SDK turn its own cost, not the session’s running total (by @Pwuts)
- **#15182** - Bound AutoPilot trace export retries (by @ntindle)
- **#15159** - Connect Telegram by messaging the bot first; adding to a group is optional (by @Bentlybro)
- **#15254** - `bash_exec` kill-tree no longer leaves children alive during mid-listing exit (by @Bentlybro)
- **#15346** - Start streaming a queued turn once backend runs it (no reload needed) (by @Pwuts)
- **#15357** - PostHog flag reads carry email; dual mode logs only real disagreements (by @Pwuts)
- **#15348** - Skip scheduled Copilot turn while owner is paywalled or over cost cap (by @Pwuts)
- **#15153** - Library e2e: wait for search to apply before clicking a card (by @Pwuts)
- **#15356** - Accept Web Push subscriptions from Edge, Safari, and pre-release Chrome (by @Pwuts)
- **#15347** - Keep one running slot reserved for the user’s own message (by @Pwuts)
- **#15353** - Queued messages and approval wakes start under their correct envelope (by @Pwuts)
- **#15121** - Sync Codex transport tool rounds to the main turn limit (by @ntindle)
- **#15370** - Load feature flags at startup in every service that reads them (by @Pwuts)
- **#15380** - Show a lost send’s finished answer instead of “Failed to fetch” (by @Pwuts)
- **#15382** - Plans bought during a canceled trial update the trial’s subscription (by @ntindle)
- **#15381** - Retry Anthropic 5xx and overload errors reported by Claude CLI (by @ntindle)
- **#15391** - Make Sentry reports readable and reduce instrumentation noise (by @ntindle)
- **#15393** - Stop library, home, and AutoPilot pages waiting on the scheduler (by @ntindle)
- **#15399** - Charge retried turns only for the attempt that succeeded (by @ntindle)
- **#15310** - Strip only trailing `/api` in `getAGPTServerBaseUrl` (by @ntindle)
- **#15311** - Route briefing footer choice via proxy; echo state on MCP OAuth errors (by @ntindle)
- **#15331** - Stop `transformDates` rewriting user inputs and zone-less strings (by @ntindle)
- **#15389** - Prevent per-user credentials lock from stalling Copilot for 60s (by @ntindle)
- **#15395** - Make editing a schedule work end-to-end (by @ntindle)
- **#15402** - Stale-tab message during another tab’s turn shows as queued follow-up (by @Pwuts)
- **#15408** - Keep hosted-only UI out of self-hosted installs (by @ntindle)
- **#15409** - Fix self-hosted signup grant, memory page, and no-model chat (by @ntindle)
- **#15398** - Prevent false errors/spinners/endless retries after lost Copilot connection (by @Pwuts)
- **#15410** - Stop sending a locked Advanced tier from a stored choice (by @Pwuts)
- **#15413** - Replace a user’s credential list in a single transaction (by @ntindle)
- **#15412** - Share subscription lookup cache across API workers (by @ntindle)
- **#15420** - Transient retries bill once, never repeat tool calls, and work on first turns (by @ntindle)
- **#15417** - Mask credentials in request URLs before logs and Sentry (by @ntindle)
- **#15424** - Fix dropped-Escape test flakes and an unhovered usage tooltip (by @ntindle)
- **#15425** - Log logout-closed WebSocket at debug, not failure (by @ntindle)
- **#15426** - Create a new user profile on first read instead of returning 404 (by @ntindle)
- **#15419** - Show which step failed and why when a run completes with errors (by @ntindle)
- **#15066** - Sign in to Slack’s MCP server using a configured Slack app (by @Bentlybro)
- **#15367** - HubSpot block: request service key/private app token instead of retired API key (by @Bentlybro)
- **#15435** - Fail tests that leave DB transactions open; fix the offending test (by @ntindle)
- **#15433** - Stop duplicate/noisy Sentry reports (by @ntindle)
- **#15434** - Prevent optional select inputs crashing review cards and run forms (by @ntindle)
- **#15438** - Name the missing field when a graph can’t be saved (by @ntindle)
- **#15427** - Stop slow reads from hiding pending subscription changes (by @ntindle)
- **#15366** - Sign in to HubSpot’s MCP server with configured app; refuse placeholder client where secret is required (by @Bentlybro)
- **#15359** - Safely render .pptx and other Office files on Files page (SECRT-2437) (by @Abhi1992002)
- **#15464** - Refresh Debian packages daily in image builds so security fixes ship (by @ntindle)
- **#15467** - Read a trial user’s trial once per chat message (not four times) (by @ntindle)
- **#15474** - Revert 1-hour SDK prompt cache (reverts #15470) (by @ntindle)
- **#15481** - Label dev deployment as dev (not preview) in Sentry and PostHog (by @ntindle)
- **#15369** - Provision managed Ayrshare profile when AutoPilot needs it (by @Bentlybro)
- **#15482** - Make load tests authenticate through Better Auth (by @ntindle)
- **#15484** - Keep an approved call’s result out of the user’s bubbles (by @Pwuts)
- **#15221** - Hide trial offers for users with an existing plan (by @Torantulino)
- **#15219** - Finish transactional email client compatibility (by @Torantulino)
- **#14154** - Fix AI/ML API URL (blocks/llm) (by @hugoaimlapi)
- **#14939** - Stop retransmitted chat send from queueing and running again (SECRT-2695) (by @Bentlybro)
- **#15067** - Give every sidebar, popup, and builder chat the main chat’s cards (by @Bentlybro)
- **#15128** - Run community Replicate models without a version hash (SECRT-2806) (by @Bentlybro)
- **#15493** - Approval label reflects what each answered card sent to Otto (by @Pwuts)
- **#15489** - Deleted shared runs stop serving their page and files (by @kcze)
- **#15251** - Use “workflow” (not “agent”/“graph”) in user-facing copy (SECRT-2853) (by @itsababseh)

### Documentation
- *(No documentation changes in this release)*

### Dependencies & Maintenance
- **#15230** - Halve local test RAM and dependency image footprint (by @ntindle)
- **#15354** - Drop leftover names of retired feature flags (by @Pwuts)
- **#15360** - Keep OSS Scanner build and threat model in `.oss-scanner/` (by @ntindle)
- **#15379** - Verify each chat route charges what its provider billed (by @ntindle)
- **#15404** - Test billing audit mischarge report and clarify which relaunches keep the baseline (by @ntindle)
- **#15397** - Add journeys leg to e2e for hosted-config user journeys (by @ntindle)
- **#15405** - Frontend Copilot tests: assert UI after every way the connection can end (by @Pwuts)
- **#15429** - Park compaction streams in tests instead of timing them (by @ntindle)
- **#15428** - Pin retry shutdown boundary and compaction cut-short test coverage (by @ntindle)
- **#15431** - Run AutoPilot journeys against a scripted model server (by @ntindle)
- **#15072** - Bump dev dependencies (2 updates) (by @dependabot[bot])
- **#15158** - Bump production dependencies (2 updates) (by @dependabot[bot])
- **#15465** - Bump production dependencies (2 updates) (by @dependabot[bot])
- **#15457** - Apply Dependabot security bumps to backend dev dependencies (by @kcze)
- **#15242** - Bump backend dev dependencies (7 updates) (by @dependabot[bot])

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @hugoaimlapi

As well as our returning contributors:
- @0ubbe
- @Abhi1992002
- @Bentlybro
- @dependabot[bot]
- @itsababseh
- @kcze
- @ntindle
- @Pwuts
- @Torantulino

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.8.4
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.3...autogpt-platform-beta-v0.8.4).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.8.4` · 2026-10-14 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
