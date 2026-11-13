---
title: "AutoGPT autogpt-platform-beta-v0.8.3"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.3"
published: "2026-10-08"
type: "pre"
lang: "en"
summary: "Date: October 2026"
---

# AutoGPT autogpt-platform-beta-v0.8.3

# 🚀 Release `autogpt-platform-beta-v0.8.3`

**Date:** October 2026

---

## 🔥 What's New?

### New Features
- **#14990** - Report OAuth starts and exchange failures to PostHog (by @kcze)
- **#15052** - Let users edit and combine suggested answers in question cards (by @0ubbe)
- **#15069** - A chat driven from a linked Discord, Slack, Teams or Telegram server gets its approval cards in the channel as native buttons (by @Pwuts)
- **#15138** - `ENABLE_USER_NOTIFICATIONS` switch so prod can send auth emails only (by @Bentlybro)
- **#15145** - Add Clip's avatar and roster pins for the 33rd roster expert (by @ntindle)
- **#15146** - Add Clip's avatar and roster pins for the 33rd roster expert (hotfix) (by @ntindle)
- **#14951** - Add official PayPal MCP Server to MCP catalog (by @ntindle)
- **#15070** - Add GPT-6.1 Sol to the LLM catalog (by @ntindle)
- **#14836** - Send signup, onboarding, checkout and churn events to PostHog (by @kcze)
- **#15134** - Add official Canva MCP Server to MCP catalog (by @ntindle)
- **#15053** - Ordinary sandbox work never asks; outward commands and unrequested deletes of the user's files still do (by @Pwuts)
- **#15203** - Add Mistral Large 4 (by @ntindle)
- **#15210** - Add Mistral Medium 3.5, Small 4 and Ministral 3, and retire Medium 3.1 and Small 3.2 (by @Pwuts)
- **#15188** - Add GitHub repository traffic block (views, clones, referrers, popular content) (by @ntindle)
- **#15191** - Add Hacker News search, stories, item and user blocks (by @ntindle)
- **#15135** - Require a verified email before the first session, and provision the platform User at sign-up (by @Bentlybro)
- **#15152** - Signup consent line, marketing opt-out, and MailerLite gate (by @itsababseh)
- **#15035** - Combine new tasks and recap on home (by @0ubbe)
- **#15201** - Simplify logged-out sidebar and promote free trial (by @Torantulino)
- **#15084** - ID every stream entry, checkpoint every persist, and resume a turn from a cursor (by @Pwuts)
- **#15088** - Fold the chat stream into the rows the server persists, and report where they drift (by @Pwuts)
- **#14950** - Add Conductor integration blocks (by @Abhi1992002)

### Enhancements
- **#14835** - Remove duplicate PostHog events and add base properties (by @kcze)
- **#15163** - Move engineering notes out of the published docs folder (by @ntindle)

### UI/UX Improvements
- **#15064** - Keep a dialog opened from a dropdown menu open on phones (by @Pwuts)
- **#15063** - Keep the expert setup card off the Home hero (by @0ubbe)
- **#15102** - Open a fresh expert page from the sidebar + and reveal the group chevron on hover (by @Abhi1992002)
- **#15103** - Treat ENTERPRISE as admin-managed on the billing plan card (by @Abhi1992002)
- **#15104** - Keep the expert onboarding card's place when its row remounts (by @Abhi1992002)
- **#15105** - Let Enter queue a follow-up while Otto answers, and hold a refused follow-up until the local stream settles (by @Abhi1992002)
- **#15155** - Send signed-in and onboarded users straight to /home (by @Pwuts)
- **#15082** - Don't send on Enter on touch devices (by @Otto-AGPT)
- **#15160** - Offer Reconnect when a provider refused the saved credential (by @kcze)

### Bug Fixes
- **#15045** - Log why MailerLite refused a backfill write (by @ntindle)
- **#15021** - Deny Google Consent Mode everywhere until Cookiebot's answer (by @kcze)
- **#15039** - Approval cards show a held call's arguments as text, up to the supervisor's 24k ceiling (by @Pwuts)
- **#14881** - Return 404/502 instead of 500 for failed workspace file downloads (by @Bentlybro)
- **#15058** - Put gh, Node and python back into the AutoPilot sandbox image (by @Pwuts)
- **#15068** - AutoPilot chats driven from a linked chat bot no longer wait on an approval card the channel cannot show (by @Pwuts)
- **#15042** - Correct GPT-OSS 120B OpenRouter display price drift (by @ntindle)
- **#15096** - Deny Google Consent Mode everywhere until Cookiebot's answer (hotfix) (by @kcze)
- **#15097** - Send Plan selected before the Stripe redirect and add a Trial started conversion (hotfix) (by @kcze)
- **#15109** - Disallow the CLI's ListAgents and SendMessage tools (by @ntindle)
- **#15117** - Disallow the CLI's ListAgents and SendMessage tools (dev, from #15109) (by @Pwuts)
- **#15036** - Judge long calls instead of holding them, and against the user's own words (by @Pwuts)
- **#14890** - Stop reporting Next's handled RSC fetch fallback to Sentry (by @Bentlybro)
- **#15054** - Serialize Linear OAuth refreshes (by @Bentlybro)
- **#14895** - Stop Sentry initialising its LaunchDarkly integration (by @Bentlybro)
- **#15114** - Accept Conductor prompt IDs as Get Session cursors and expose next_after (by @Abhi1992002)
- **#15112** - Stop copilot re-describing capabilities and re-loading skills every turn (by @Abhi1992002)
- **#15111** - Expert find_capability reports needs_expert_grant, not connected, for ungranted credentials (by @Abhi1992002)
- **#15108** - Make Conductor Create Workspace's base branch explicit and report it (by @Abhi1992002)
- **#15116** - Stop Settings > Billing from creating a Stripe customer that gets admin-granted plans revoked (by @Abhi1992002)
- **#15141** - Only checkout openers go to MailerLite, segmented for GTM (by @ntindle)
- **#15140** - Only checkout openers go to MailerLite, segmented for GTM (hotfix) (by @ntindle)
- **#15142** - Pass secret_key to the PostHog client (by @Pwuts)
- **#15071** - Correct DeepSeek V4.1 Flash OpenRouter display price drift (by @ntindle)
- **#15139** - Correct Kimi K2.6 OpenRouter display price drift (by @ntindle)
- **#15095** - Remove outdated demo link from signup page (by @itsababseh)
- **#15125** - Scheduled run_agent reaches the DB through the DatabaseManager, and failed scheduled turns alert (by @Bentlybro)
- **#15193** - Split public and private media storage (by @kcze)
- **#15166** - Make Copilot error retries start a new turn (by @Torantulino)
- **#15167** - Align transactional emails with the design system (by @Torantulino)
- **#15037** - Judge a heredoc write into the workspace as a file write, not a shell command (by @Pwuts)
- **#15181** - PostHog flag sync can create a flag that serves nobody, and says why a request was refused (by @Pwuts)
- **#15206** - Split public and private storage in production (by @ntindle)
- **#15056** - The content judge reads only what came from outside AutoGPT, never the platform's own guidance (by @Pwuts)
- **#15131** - A channel's approval button wakes its turn the way a web click does, so the gate judges it against the user's request (by @Pwuts)
- **#15197** - Stop a wide graph fan-out from exhausting the Redis connection pool (by @Bentlybro)
- **#15186** - web_search returns every cited source with its number (by @Bentlybro)
- **#15130** - bash_exec no longer reports a false timeout when the sandbox drops a running command (by @Bentlybro)
- **#14882** - Don't show users a provider's raw out-of-credits error (by @Bentlybro)
- **#15127** - Keep AutoPilot sub-agents in the foreground so their work reaches the reply (by @Bentlybro)
- **#15132** - Scheduled runs use the account picked when the schedule was made, never a chooser nobody answers (by @Bentlybro)
- **#15053** - Ordinary sandbox work never asks; outward commands and unrequested deletes of the user's files still do (by @Pwuts)

### Documentation
- **#15172** - Document the Redis cluster the platform needs (by @ntindle)
- **#14810** - Timestamp the .env backup so a retry never reuses an old one (by @kcze)

### Dependencies & Maintenance
- **#14654** - Bump @types/node from 24.10.0 to 26.6.2 in /autogpt_platform/frontend (by @dependabot[bot])
- **#14655** - Bump msw-storybook-addon from 2.0.6 to 3.0.3 in /autogpt_platform/frontend (by @dependabot[bot])
- **#14985** - Keep critical-path packages out of Dependabot groups (by @kcze)
- **#15165** - Keep the gitbook branch a one-way copy of master's docs (by @ntindle)
- **#15169** - Remove the nightly repo stats workflow (by @ntindle)
- **#15171** - Move pull requests opened against gitbook to dev (by @ntindle)
- **#15060** - Reproduce each known cause of the chat drifting from the backend (by @Pwuts)
- **#14942** - Drop the LLM format lines from the Jev rubric (by @Pwuts)
- **#14936** - Add shadcn lint setup (by @0ubbe)
- **#14938** - Remove unused legacy components (by @0ubbe)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @Otto-AGPT
- @Torantulino
- @itsababseh

As well as our returning contributors:
- @ntindle
- @kcze
- @Abhi1992002
- @0ubbe
- @Pwuts
- @Bentlybro
- @dependabot[bot]

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.8.3
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.2...autogpt-platform-beta-v0.8.3).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.8.3` · 2026-10-08 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
