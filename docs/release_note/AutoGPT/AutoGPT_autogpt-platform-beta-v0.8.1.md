---
title: "AutoGPT autogpt-platform-beta-v0.8.1"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.1"
published: "2026-09-24"
type: "pre"
lang: "en"
summary: "Date: January 2025"
---

# AutoGPT autogpt-platform-beta-v0.8.1

# 🚀 Release `autogpt-platform-beta-v0.8.1`

**Date:** January 2025

---

## 🔥 What's New?

### New Features

- **#14636** - Add eight machine-built generalist experts with their skills and routines (by @ntindle)
- **#14794** - Add Zara, a go-to-market strategist expert (by @ntindle)
- **#14798** - Max is now the sales expert — fold the senior sales package into him (by @ntindle)
- **#14600** - Seed the skills marketplace from a private skills catalog (by @0ubbe)
- **#14713** - Add nine more core experts (by @0ubbe)
- **#14773** - Nested workspace folders, folder listing for AutoPilot, and expert access to the user's own files (by @Pwuts)
- **#14774** - Nested folders, folder attach, and the expert file filter in the workspace picker and the Files page (by @Pwuts)
- **#14741** - Allow multi-select questions in the copilot ask-user card (by @Abhi1992002)
- **#14758** - Show "Sent from" badge on delegated copilot messages (by @Abhi1992002)
- **#14771** - Shift-click selects a range in the workspace file picker (by @Pwuts)
- **#14838** - Replace the cookie banner with Cookiebot and put PostHog behind consent (by @kcze)
- **#14317** - Add a PostHog feature-flag backend behind the existing API (by @Pwuts)
- **#14767** - Share PostHog flag definitions through one refresher and a Redis cache (by @Pwuts)
- **#14805** - Sentry errors carry the feature flags that were on, recorded by the flag API (by @Pwuts)
- **#14624** - One chokepoint for every E2B create and connect, where egress is pinned (by @kcze)
- **#14290** - Activation, retention, unit-economics and experiment views (by @ntindle)
- **#14742** - Add FORCE_ALL_FLAGS to turn every feature flag on locally (by @Abhi1992002)
- **#14806** - Script that re-creates LaunchDarkly's flags and targeting in PostHog (by @Pwuts)

### New Blocks

- **#14697** - Add Unbiased Pareto to LLM catalog (by @ntindle)
- **#14683** - Add InclusionAI Ling 3.0 Flash VL (by @ntindle)
- **#14755** - Add Tencent Hy4 Preview via OpenRouter (by @ntindle)
- **#14757** - Add Alibaba Qwen 3.8 Flash via OpenRouter (by @ntindle)
- **#14753** - Add Zapier to the official MCP catalog (by @ntindle)
- **#14743** - Add Google Gemma 4 31B via OpenRouter (REQ-81) (by @Bentlybro)
- **#14821** - Add Claude Opus 5.5, GPT-6 Sol, and GPT-6 Luna (by @ntindle)

### Enhancements

- **#14786** - Give installed and saved skills separate per-expert budgets (by @ntindle)
- **#14779** - Make the session's skills first-class find_capability candidates (by @ntindle)
- **#14778** - Index whole descriptions and link save/store/write in capability search (by @ntindle)
- **#14740** - Rename and raise per-expert skill cap to 150 (by @wofiporia)
- **#14807** - Tell Otto and the experts that formulas render (by @Pwuts)
- **#14799** - Make trial capacity and country eligibility configurable (by @ntindle)
- **#14546** - Work notification queues concurrently and survive a channel swap (by @Bentlybro)
- **#14822** - Ship Clay & Rock V1 identities and copy (by @Abhi1992002)
- **#14768** - Integrate onboarding trial into plan cards (by @Torantulino)
- **#13749** - Cache compiled JSON schema validators safely (by @dexhunter)

### UI/UX Improvements

- **#14790** - Render inline $…$ math in chat replies and markdown artifacts (by @Pwuts)
- **#14769** - Keep the open folder in the URL so reloads and links land in it (by @Pwuts)
- **#14801** - Unify subscription sign-in cards across onboarding and integrations (by @ntindle)
- **#12847** - Preserve dictionary entries when clearing a key (by @djpjronline-netizen)
- **#12846** - Make password reveal toggle keyboard-accessible (by @djpjronline-netizen)
- **#12844** - Unify builder field accessibility and DOM identity (by @djpjronline-netizen)
- **#13456** - Improve add-block placement without viewport jump (by @anonymous-lad2)

### Bug Fixes

- **#14750** - Contain exec_file paths within the sandbox base (by @Bentlybro)
- **#14706** - When transcription fails, keep the recording and offer retry + download (by @Bentlybro)
- **#14574** - Carry the drained text on the pending-drained hint (by @Abhi1992002)
- **#14575** - Render a mid-turn follow-up where it belongs (by @Abhi1992002)
- **#14576** - Silence Radix DialogContent missing Description warning (#11035) (by @ntindle)
- **#14746** - Correct stale OpenRouter display prices in the LLM catalog (SECRT-2701) (by @Bentlybro)
- **#14751** - Make the test suite runnable — real Redis cluster and bounded teardowns (by @Bentlybro)
- **#14754** - Show copilot user bubble before attachments finish uploading (by @Abhi1992002)
- **#14738** - Split the refreshed token's space-separated scopes (by @Pwuts)
- **#14762** - Close the open text part before any event that clears the frontend's active parts (by @Pwuts)
- **#14760** - Replay the accepted tool-result response on a retried identical request instead of 409 (by @Pwuts)
- **#14763** - Stop rendering the first-turn context prefix inside the user's message (by @Pwuts)
- **#14749** - Stop ReadSpreadsheetBlock emptying N/A and five other defects (by @Bentlybro)
- **#14764** - Stop the replay recorder from buffering past its cap on a streaming response (by @Pwuts)
- **#14694** - Give LaunchDarkly a 5s init timeout instead of 5000s (by @Bentlybro)
- **#14776** - Correct drifted Kimi K3 OpenRouter display price (by @ntindle)
- **#14602** - Surface structured usage-limit envelope on 429 so BYOSUB reconnect unblocks chat (by @Otto-AGPT)
- **#14531** - Retire released and unused feature flags (by @ntindle)
- **#14289** - Fire the run_agent and schedule_agent DataFast goals from every human path (by @ntindle)
- **#14135** - Support explicit credential-free Ollama routes (by @primorLee)
- **#13400** - Validate schedule names before dispatch (by @sahil-mangla)
- **#13614** - Preserve tool-output provenance in workspace artifacts (by @Yigtwxx)
- **#14540** - Share cancellable MCP OAuth attempt lifecycle (by @L4XB)
- **#14793** - Enforce skill capacity at atomic root publication (by @ntindle)
- **#14789** - Give the skills seed a transaction timeout that fits the whole catalog (by @0ubbe)
- **#14796** - Correct drifted GPT-OSS 20B OpenRouter display price (by @ntindle)
- **#14745** - Ask which account to update instead of adding a duplicate (SECRT-2660) (by @Bentlybro)
- **#14761** - Log a repeating client request failure once per 10 seconds (by @Pwuts)
- **#14802** - Stop logging an error when no trial offer is configured (by @Pwuts)
- **#14008** - Parse HTTP response media types without losing error bodies (by @jiahao6635)
- **#14803** - Keep an owner-set avatar across roster seeds (by @Pwuts)
- **#13357** - Resolve auth before showing expired-session errors (by @pony-maggie)
- **#13432** - Recover budget-limited turns without resending work (by @C1-BA-B1-F3)
- **#14813** - A listing merely absent from the catalog is not delisted (by @ntindle)
- **#14770** - Refuse attachments past the 20-attachment cap when they are added, not when the message is sent (by @Pwuts)
- **#14808** - Leave dollar signs in indented code blocks unescaped (by @Pwuts)
- **#14819** - Repoint stale advanced-tier Opus defaults to claude-opus-5 (by @ntindle)
- **#14820** - Correct deepseek-v4.1-flash input price to match live OpenRouter rate (by @ntindle)
- **#14825** - Correct drifted Gemma 4 31B OpenRouter display price (by @ntindle)
- **#14716** - Stop forwarding browser deprecation reports to Sentry (by @Bentlybro)
- **#14708** - Resolve forward-ref RPC return annotations before validating (by @Bentlybro)
- **#14717** - Report WebSocket close code and reason instead of "[object CloseEvent]" (by @Bentlybro)
- **#14719** - Stop reporting an error when Web Storage is unavailable (by @Bentlybro)
- **#14830** - Restore langsmith reply spans broken by per-message tasks (by @ntindle)

### Documentation

- **#14690** - Say how to regenerate the expert style-eval baseline (by @Pwuts)
- **#14284** - Document CI execution and fail closed on docs diagnostics (by @ntindle)

### Dependencies & Maintenance

- **#14723** - Bump pytest from 8.4.1 to 9.1.1 in /autogpt_platform/autogpt_libs (by @dependabot[bot])
- **#14730** - Bump cryptography from 46.0.4 to 50.0.1 in /autogpt_platform/backend (by @dependabot[bot])
- **#14732** - Bump regex from 2025.11.3 to 2026.9.10 in /autogpt_platform/backend (by @dependabot[bot])
- **#14729** - Bump yt-dlp from 2025.12.8 to 2026.8.19 in /autogpt_platform/backend (by @dependabot[bot])
- **#14734** - Bump stagehand from 3.7.0 to 3.23.0 in /autogpt_platform/backend (by @dependabot[bot])
- **#14537** - Pin stats action and restrict workflow permissions (by @citizen204)
- **#14281** - Overlap full-stack builds and harden E2E validation (by @ntindle)
- **#14282** - Speed up and harden single-container validation (by @ntindle)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @primorLee
- @wofiporia
- @sahil-mangla
- @anonymous-lad2
- @Yigtwxx
- @L4XB
- @citizen204
- @jiahao6635
- @C1-BA-B1-F3

As well as our returning contributors:
- @ntindle
- @Bentlybro
- @Abhi1992002
- @Pwuts
- @0ubbe
- @Torantulino
- @Otto-AGPT
- @djpjronline-netizen
- @kcze
- @dexhunter
- @pony-maggie

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.8.1
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.0...autogpt-platform-beta-v0.8.1).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!



true

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.8.1` · 2026-09-24 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
