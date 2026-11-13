---
title: "AutoGPT autogpt-platform-beta-v0.11.1"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.11.1"
published: "2026-11-06"
type: "pre"
lang: "en"
summary: "A huge shoutout to everyone who contributed to this release:"
---

# AutoGPT autogpt-platform-beta-v0.11.1

## 🔥 What's New?

### ⚠️ Breaking Changes

- **#16416** - Self-hosted installs: `.env.default` no longer ships a Web Push (VAPID) key pair, and the backend no longer sends push notifications with the old shipped pair. Run `make init-env` to generate a pair for your install; the single-container image generates its own on first boot. Replacing the pair invalidates existing push subscriptions. `NEXT_PUBLIC_VAPID_PUBLIC_KEY` can stay blank, and the frontend then uses the backend's key (by @ntindle)

### New Features

- **#11220** - Support input nodes alongside trigger nodes (by @Pwuts)
- **#14991** - Run skills as /commands with arguments in the copilot chat (by @ntindle)
- **#16582** - Make background subtasks real work that returns to the chat (by @ntindle)
- **#16506** - Warn canceled trials 3 days and 1 day before access ends (by @Torantulino)
- **#16622** - Make the email-change approval email clear about both addresses (by @Torantulino)
- **#15488** - Redesign the k6 load tests around real user workloads (by @ntindle)
- **#16605** - Add Tencent Hy4 to the LLM catalog (by @ntindle)

### New Blocks

- **#16561** - Add Firecrawl Alexandria data tool blocks (by @Torantulino)
- **#16395** - Bring the Exa integration up to date with Exa's current API (by @Torantulino)
- **#16393** - Add Treg blocks for people, company and web data (by @Torantulino)

### Enhancements

- **#16446** - Creating a GitHub repository asks first in Auto mode (by @Pwuts)
- **#14377** - Drop redundant schema titles and window every digest node (by @Pwuts)
- **#12017** - Correct uploaded image types without guessing containers (by @Otto-AGPT)

### UI/UX Improvements

- **#16612** - Remove the Tailwind palette; roles are the only colours (SECRT-3097 C4) (by @Abhi1992002)
- **#16620** - Left-align the bullet points on the Meet Otto screen (SECRT-3380) (by @Torantulino)
- **#16623** - Polish the first onboarding screen (SECRT-3382) (by @Torantulino)
- **#16584** - App links in chat open in a new tab on middle-click; external links always ask first (by @kcze)
- **#16617** - The run card in the chat follows the run until it ends (by @kcze)
- **#16587** - The chat run card shows when a run fails or completes (by @kcze)
- **#16640** - The side panel follows a file Otto overwrites (by @kcze)

### Bug Fixes

- **#16331** - A failed database connect at start-up is retried, not reported as connected (by @Pwuts)
- **#16343** - A run's output no longer deletes an earlier output with the same file name (by @Pwuts)
- **#16475** - Bound the cost of user regex patterns and Sentry event scrubbing (by @Pwuts)
- **#16559** - Keep shell text like "$(…)" and "$HOME" out of chat math (by @Pwuts)
- **#16586** - Otto names a failure's cause only when the error states it (by @kcze)
- **#16392** - Numbers too large for the database are refused with a 4xx before they reach it (by @Pwuts)
- **#16585** - Normalise chat input before it is stored or queued (by @ntindle)
- **#16613** - Trim whitespace around prompt-value keys (by @kcze)
- **#16614** - Count only listed workflows on the creator card (by @kcze)
- **#16449** - The PostHog consent test stops each page's capture interval (by @ntindle)
- **#16356** - Otto's workflow validator accepts links into list items (by @Pwuts)
- **#16361** - Stop context_test leaving an executing session behind (by @Pwuts)
- **#16566** - Give the shared auth mock the session exports actions.ts calls (by @Pwuts)
- **#16276** - Values linked into MCP tool arguments reach the tool (by @Pwuts)
- **#16357** - Turn numpy scalars in block outputs into plain Python values (by @Pwuts)
- **#16426** - Chat messages keep text that looks like an HTML tag (by @Pwuts)
- **#16367** - Keep interval system jobs' next run across scheduler restarts (by @Pwuts)
- **#16565** - Give the external API concurrency test room for a slow Redis (by @Pwuts)
- **#16364** - Send a changed email address its own verification email (by @Torantulino)
- **#16333** - read_workspace_file returns text files as text (by @Pwuts)
- **#16521** - Fail a block given a linked value it can't use (by @kcze)
- **#16416** - Generate the Web Push (VAPID) key pair per install (by @ntindle)
- **#16624** - Count a turn that ends in an error as failed, and export turn outcomes (by @ntindle)
- **#15714** - Look up a new chat's connections and expert side by side (by @ntindle)
- **#16456** - Omit Claude account emails from subscription logs (by @ntindle)
- **#16528** - Recover terminal turn errors and honor explicit Stop (by @ntindle)
- **#16451** - Detect closed ChatGPT sign-in windows (by @ntindle)
- **#16639** - Fail credential blocks on a bad value in dry runs (by @kcze)
- **#16629** - New sign-ups go to onboarding instead of Home and its paywall, unfinished users are sent back to onboarding, and the check reruns on account switch (with 0f22f28) (SECRT-3384) (by @itsababseh)
- **#16649** - Paying early during a trial grants the plan (hotfix, SECRT-3388) (by @kcze)
- **#16454** - Normalize configurable copilot workspace prefixes (by @ntindle)
- **#16450** - Support atomic runtime config writes on Windows (by @ntindle)
- **#16452** - Separate graph memory availability from skill learning (by @ntindle)
- **#16457** - Validate the configured Claude CLI before subscription auth (by @ntindle)
- **#16455** - Hide bash tool without a supported sandbox (by @ntindle)
- **#15534** - Reuse expert checks within a turn (by @ntindle)
- **#15796** - Admit a chat turn in one statement after its lock (by @ntindle)

### Dependencies & Maintenance

- **#16163** - Delete the exports nothing imports (by @Pwuts)
- **#15432** - Wire e2e page objects by handle name and assert real run outcomes (by @ntindle)

### Documentation

- **#16315** - Changelog v0.10.0 (by @itsababseh)
- **#16651** - Changelog v0.11.0 (by @itsababseh)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release:

- @Pwuts
- @ntindle
- @Torantulino
- @kcze
- @Abhi1992002
- @itsababseh
- @Otto-AGPT

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.11.1
```

Or download it directly from the [Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.11.0...autogpt-platform-beta-v0.11.1).

---

## 📝 **Feedback and Issues**

If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.11.1` · 2026-11-06 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.11.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
