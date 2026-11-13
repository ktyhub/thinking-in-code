---
title: "AutoGPT autogpt-platform-beta-v0.8.2"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.2"
published: "2026-09-30"
type: "pre"
lang: "en"
summary: "A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:"
---

# AutoGPT autogpt-platform-beta-v0.8.2

## 🔥 What's New?

### New Features

- **#14209** - AutoPilot action gating modes - Ask First, Auto, Unsupervised (by @Pwuts)
- **#14817** - Workflows started from AutoPilot pause before an irreversible action; the irreversible marker renamed and widened (by @Pwuts)
- **#14832** - AutoPilot carries on while a held call awaits review: a queue of cards per chat, late results on approval (by @Pwuts)
- **#14837** - AutoPilot runs read-only and workspace blocks and workflows without asking, and names the block or workflow on every card (by @Pwuts)
- **#14839** - AutoPilot decides MCP calls on each server's effect map and asks on first use of any other tool (by @Pwuts)
- **#14834** - Outside reads are judged before the model sees them; a read carrying instructions is held for the user (by @Pwuts)
- **#14841** - Paid reads ask once the chat is over its spend ceiling (by @Pwuts)
- **#14645** - Credential swap proxy that every E2B box egresses through (by @kcze)
- **#14792** - Add AnySearch search, parallel-search and extract blocks (by @Xxx91n)
- **#14775** - Support connected integrations in copilot @ mentions (by @Abhi1992002)
- **#14695** - Add browser notification settings to the account page (by @kcze)
- **#14701** - Tell the main AutoPilot chat about its computer (by @kcze)
- **#14849** - Hiring an expert returns at once; its skills and workflows install in the background (by @Pwuts)
- **#14853** - AutoPilot's approval requests belong to their chat, not a made-up graph execution (by @Pwuts)
- **#14878** - Credit history and the cost log name the AutoPilot chat, not a made-up graph execution (by @Pwuts)
- **#14931** - Approval rules can hold for one chat, one Expert, or the whole team (by @Pwuts)
- **#14980** - Approval cards for bare tools offer "Approve from now on" and "Let Otto judge from now on" (by @Pwuts)
- **#14997** - Trust reads of memories, installed skills and owned workspace paths (by @Pwuts)
- **#14999** - Review held AutoPilot calls in a dialog (by @Pwuts)
- **#14858** - Add clay avatar picker and live AI generation (by @0ubbe)
- **#14901** - Include public expert pages in a maintained sitemap (SECRT-2750) (by @Abhi1992002)
- **#14945** - Publish the skills catalog on deploy and update installed copies in place (by @Torantulino)
- **#14859** - Add PostHog MCP and complete integration icons (by @ntindle)
- **#14971** - Add OpenSEO MCP, including self-hosted instances (by @ntindle)
- **#14891** - A held call names the things its IDs point at, with links (by @Pwuts)
- **#14494** - Require a short CTA-style sub_heading on marketplace listings, with a backfill script (by @Pwuts)
- **#14833** - Single PostHog event list and name constants (by @kcze)
- **#15040** - Keep subscription status and lifecycle dates on the PostHog person (by @kcze)
- **#15026** - Backfill existing subscribers into MailerLite and add a trial group (by @Bentlybro)

### Enhancements

- **#14867** - Speed up expert hires by batching skill installs and skipping repeat embeds and scans (by @ntindle)
- **#14765** - Put experts first when hire-experts is on (by @0ubbe)
- **#14928** - Tuned action-supervisor rubric for Haiku (98% recall, 43% needless holds on holdout) (by @Pwuts)
- **#14932** - Jev decides the action supervisor's calls; the LLM only explains an ask (by @Pwuts)
- **#15006** - Jev decides the content judge, Sonnet only quotes a hold (by @Pwuts)
- **#14875** - Preserve main content in web_fetch and warn on JS-only shells (by @JohnnyWilson16)
- **#14883** - Add xAI Grok 4.7 to the catalog (by @ntindle)
- **#14903** - Add GLM-5.3 to LLM catalog (by @ntindle)
- **#14943** - Add Claude Opus 4.8 (claude-opus-4-8) (by @ntindle)
- **#14988** - Add Xiaomi MiMo-V2.6-Pro and MiMo-V2.6-Flash to LLM catalog (by @ntindle)
- **#15014** - Add Claude Sonnet 5.5 and default the standard tier to it (by @ntindle)
- **#14949** - Promote gpt-6-luna to fast/standard default over gpt-5.6-luna (by @ntindle)

### UI/UX Improvements

- **#14885** - AutoPilot action gating card and queue design update (by @Pwuts)
- **#14876** - Offer the free trial on the platform paywall (by @0ubbe)
- **#14934** - Match artifact panel to Claude reference (by @0ubbe)
- **#14933** - Reduce the expert avatar creator to one AI avatar (by @0ubbe)
- **#15002** - Expert card and chat chip polish (by @0ubbe)
- **#15008** - Show avatar defaults before optional generation (by @0ubbe)
- **#15029** - Show chat document count and expert files (by @0ubbe)
- **#15033** - Show expert documents as Files-page rows (by @0ubbe)
- **#15041** - Drop section title icons and unify heading sizes (by @0ubbe)
- **#14935** - Guide existing users to workflows in Otto (by @Torantulino)
- **#14948** - Serve every Expert from the managed Clay & Rock library and constrain avatar generation to the design system (by @itsababseh)
- **#14994** - Compress Clay and Rock avatar assets (by @0ubbe)

### Bug Fixes

- **#14854** - Give the flag tests a consent answer after the master back-merge (by @Pwuts)
- **#14777** - Keep a mid-turn follow-up queued until the backend drains it (by @Abhi1992002)
- **#14493** - Fall back gracefully when an avatar or listing image URL is dead (by @Pwuts)
- **#14855** - Repoint copilot advanced-tier Opus alias to claude-opus-5.5 (by @ntindle)
- **#14856** - Correct deepseek-v4.1-flash pricing drift (again) (by @ntindle)
- **#14894** - Send the platform PKCE verifier on Google token exchange (by @itsababseh)
- **#14897** - Send the platform PKCE verifier on Google token exchange (prod replica of #14894) (by @Pwuts)
- **#14896** - Bump claude-agent-sdk so the bundled Claude Code accepts Opus 5.5 (by @Pwuts)
- **#14899** - Save thumbs up/down feedback as Langfuse scores (by @ntindle)
- **#14880** - Stop the Sentry scrubber silently dropping error events (by @Bentlybro)
- **#14921** - Finish skipped nodes instead of leaving them QUEUED (by @ntindle)
- **#14924** - Ask for a file instead of silently skipping an empty picker (by @ntindle)
- **#14902** - Make public expert profiles readable by search engines (SECRT-2749) (by @Abhi1992002)
- **#14907** - Keep the Drive file you picked when you save your agent (by @ntindle)
- **#14904** - Correct OpenRouter price drift for 3 models (by @ntindle)
- **#14944** - Correct OpenRouter price drift for inclusionai/ling-3.0-flash-vl (by @ntindle)
- **#14954** - Update pre-catalog copies and harden the marketplace copy reconcile (by @ntindle)
- **#14884** - Stop update_skills deleting skills the client never saw (by @Bentlybro)
- **#14973** - Settle a held call's inline step once its approval runs (by @Pwuts)
- **#14975** - Say so when a chat link can't be opened on this account (by @Pwuts)
- **#14974** - An approval's continuation reply streams into the chat that approved it (by @Pwuts)
- **#14979** - A hire's onboarding card is answerable from the team-page chat (by @Pwuts)
- **#14959** - Correct deepseek/deepseek-v4.1-flash pricing drift in catalog.py (by @ntindle)
- **#14989** - Correct deepseek-chat and kimi-k2.6 pricing drift in catalog.py (by @ntindle)
- **#14982** - A held call's chain row shows the answer at the click (by @Pwuts)
- **#15005** - A held read names the acting Expert as its reader; Otto stays the judge (by @Pwuts)
- **#15007** - Give the content judge room to think and one retry on an empty answer (by @Pwuts)
- **#14996** - Show a held read's reason in plain words, as the chat does (by @Pwuts)
- **#15015** - Load the block registry before taking runs (by @Bentlybro)
- **#15017** - Correct Grok 4.7 OpenRouter display price drift (by @ntindle)
- **#15012** - Sonnet's content judge holds agent-addressed text whatever its source (by @Pwuts)
- **#15022** - Keep one-time secrets out of session replays (by @kcze)
- **#15024** - Show the sign-in card instead of holding it as an outside read (by @Pwuts)
- **#15030** - Send CSP frame-ancestors and Referrer-Policy on every route (by @0ubbe)
- **#15038** - Restore pending expert onboarding in new chats (by @0ubbe)
- **#15034** - Start expert onboarding after raise and from the team chat panel (by @0ubbe)

### Dependencies & Maintenance

- **#14560** - Bump actions/stale from 10 to 11 (by @dependabot[bot])
- **#14657** - Bump boring-avatars from 1.11.2 to 2.0.4 in /autogpt_platform/frontend (by @dependabot[bot])
- **#14658** - Bump @vercel/analytics from 1.5.0 to 2.0.1 in /autogpt_platform/frontend (by @dependabot[bot])
- **#14652** - Bump shepherd.js from 14.5.1 to 15.3.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#14656** - Bump motion from 12.38.0 to 13.2.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#14735** - Bump exa-py from 1.16.1 to 2.21.0 in /autogpt_platform/backend (by @dependabot[bot])
- **#14653** - Bump framer-motion from 12.23.24 to 13.3.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#14845** - Bump ruff from 0.16.7 to 0.16.8 in /autogpt_platform/autogpt_libs in the development-dependencies group (by @dependabot[bot])
- **#14937** - Remove unused dependencies (by @0ubbe)
- **#14920** - Delete the graphs and store listings that tests create (by @ntindle)
- **#14923** - Stop parallel test runs clobbering each other's docker stack (by @ntindle)
- **#14969** - Put the single-container image's code layers last (by @ntindle)
- **#14998** - Drop a held read's bytes from the attention feed (by @Pwuts)

### CI/CD Improvements

- **#14870** - Run the full-stack e2e job on a free runner (by @Bentlybro)
- **#14877** - Speed up the full-stack e2e job on the free runner (by @Bentlybro)
- **#14892** - Cache the e2e Docker layers in GHCR instead of the Actions cache (by @Bentlybro)
- **#14947** - Let /reapprove restore the PR reviewer bot's dismissed approvals (by @ntindle)
- **#14965** - Stop an out-of-quota Copilot review from blocking every merge (by @ntindle)
- **#14964** - Default a manual dev deploy to the dev branch, not master (by @ntindle)
- **#14966** - Stop pinning the catalog's expert skill lists in backend tests (by @ntindle)
- **#15013** - Let single-container PR builds read the GHCR layer cache (by @Bentlybro)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @Xxx91n
- @JohnnyWilson16

As well as our returning contributors:
- @Pwuts
- @ntindle
- @0ubbe
- @kcze
- @Abhi1992002
- @Bentlybro
- @Torantulino
- @itsababseh
- @dependabot[bot]

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.8.2
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.1...autogpt-platform-beta-v0.8.2).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.8.2` · 2026-09-30 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
