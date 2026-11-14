---
title: "AutoGPT autogpt-platform-beta-v0.10.0"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.10.0"
version: "autogpt-platform-beta-v0.10.0"
published: "2026-10-27"
type: "pre"
lang: "en"
summary: "#15970 - Self-hosted Docker Compose generates its own service passwords per install and won't start without them: run make init-env (or the installer) before docker compose up."
---

# AutoGPT autogpt-platform-beta-v0.10.0

## 🔥 What's New?

### ⚠️ Breaking Changes

- **#15970** - Self-hosted Docker Compose generates its own service passwords per install and won't start without them: run `make init-env` (or the installer) before `docker compose up`. PostgreSQL, RabbitMQ, Redis, FalkorDB and ClamAV now listen on `127.0.0.1` only. Existing installs: see [Upgrading: service passwords are generated per install](https://github.com/Significant-Gravitas/AutoGPT/blob/master/docs/platform/getting-started.md#upgrading-service-passwords-are-generated-per-install) (by @ntindle)
- **#12206** - External API v1 is deprecated in favour of the new v2, and keeps working until 2027-01-31 (by @Pwuts)

### New Features

- **#15990** - Record when each API key was last used (by @ntindle)
- **#15862** - Tell chat-platform bots where each message came from (by @Bentlybro)
- **#16023** - Role and text design tokens at today's values (DS1) (by @Abhi1992002)
- **#16035** - Send product mail only to subscribers, trialists and accounts that lapsed in the last 7 days (by @Torantulino)
- **#16037** - Molecules read only role tokens, same look (DS2b) (by @Abhi1992002)
- **#16044** - Move contextual and renderers onto the design tokens (DS5c) (by @Abhi1992002)
- **#16045** - Atoms read only design tokens, same look (DS2a) (by @Abhi1992002)
- **#16078** - Move library, artifacts and (platform)/components onto design tokens (DS5e) (by @Abhi1992002)
- **#16081** - Data-slot on every element an atom renders (DS7-1) (by @Abhi1992002)
- **#16084** - Data-slot on every element the molecules render (DS7-2) (by @Abhi1992002)
- **#15549** - The read-injection check gets its own flag and a shadow mode that judges every read and holds nothing (by @Pwuts)
- **#16105** - Slot-object AttentionCard as the card and notice composition reference (DS8) (by @Abhi1992002)
- **#16072** - The paywall tells users their scheduled workflows are paused (by @Pwuts)
- **#16096** - Add Kimi K3.1 Pro model (by @ntindle)
- **#16156** - Run Tailwind CSS 4 with Tailwind 3's theme and output (SECRT-3102) (by @Abhi1992002)
- **#16176** - Stop the runs a removed member has going in the org (by @ntindle)
- **#12206** - External API v2 (by @Pwuts)
- **#15970** - Per-install service passwords and localhost-only data ports for Docker Compose (by @ntindle)
- **#15941** - Replace the pixel-grid thinking loader with a drawn line (by @0ubbe)
- **#15939** - Show places as an interactive Google Map in chat (by @0ubbe)
- **#15863** - Pick an expert and fast or smart mode from the chat bots (by @Bentlybro)
- **#16036** - Redesign the onboarding paywall as one calm trial welcome (by @Torantulino)
- **#16242** - Read HTTP response bodies under a size limit (by @ntindle)
- **#16241** - Cap the field sizes a template can format (by @ntindle)
- **#16240** - Run every user-supplied pattern under a time limit (by @ntindle)
- **#16217** - Add Cloudflare to the MCP catalog (by @ntindle)
- **#16261** - Add GPT-6.1 Terra model (by @ntindle)
- **#16221** - Tag every Otto model call with what started the turn (by @kcze)
- **#16236** - Polish onboarding and Otto greeting cards (by @0ubbe)
- **#15952** - Warn before sending something that looks like a secret in chat (by @kcze)
- **#16094** - Pick Airtable bases from a card, preview table changes (by @Abhi1992002)
- **#16095** - Explain what pays for what in the wallet and chat (by @Abhi1992002)
- **#16107** - Guided first run over the real UI, with one-time tips (by @Abhi1992002)
- **#16101** - Hire an expert and hand off the task in one click (by @Abhi1992002)
- **#16252** - Role-based prompts, guidance, and a way back from a blocked mic on the brain dump step (by @itsababseh)

### Enhancements

- **#15817** - Delete what the old navigation left behind (by @Pwuts)
- **#15763** - Compile the copilot with the React Compiler (by @Abhi1992002)
- **#16040** - Move copilot (rest) onto colour and text tokens (DS5g-3) (by @Abhi1992002)
- **#16041** - Organisms read only DS1 role tokens, same look (DS2c) (by @Abhi1992002)
- **#15790** - Drop the memos the React Compiler now covers (by @Abhi1992002)
- **#16043** - Move the admin pages onto colour and text tokens (DS5f) (by @Abhi1992002)
- **#16042** - Layout, auth, app root and (no-navbar) read the design tokens (DS5b) (by @Abhi1992002)
- **#16055** - Move settings, home, profile and raise onto colour and text tokens (DS5a) (by @Abhi1992002)
- **#16046** - Copilot tools on design tokens, same pixels (DS5g part 2) (by @Abhi1992002)
- **#16056** - Move team and marketplace onto colour and text tokens (DS5d) (by @Abhi1992002)
- **#16077** - Move copilot components onto colour and text tokens (DS5g, part 1) (by @Abhi1992002)
- **#16106** - Data-slot on every element the organisms render (DS7 part 3) (by @Abhi1992002)
- **#16085** - Move the legacy table primitives into molecules/Table (DS3a-4) (by @Abhi1992002)
- **#16086** - Atoms/Select owns its select primitives (DS3a-4) (by @Abhi1992002)
- **#16087** - Move the legacy dialog primitives into molecules/Dialog (DS3a-4) (by @Abhi1992002)
- **#16088** - Wallet top-up tabs on TabsLine's new pill variant (DS3a-4) (by @Abhi1992002)
- **#16089** - Move the legacy sheet primitives into molecules/Dialog (DS3a-4) (by @Abhi1992002)
- **#16012** - Delete the Playwright test helpers no spec uses (by @Pwuts)
- **#15917** - Both client-address readers share one X-Forwarded-For trust check (by @Pwuts)
- **#16083** - Ai-elements on colour and text tokens, same pixels (DS3b-3a) (by @Abhi1992002)
- **#16131** - Globals.css dialog selectors on slots, drop dead link-modal rule (DS7-1 PR 2a) (by @Abhi1992002)
- **#16124** - Move the Radix accordion into molecules/Accordion (DS3b) (by @Abhi1992002)
- **#16091** - Atoms/Input owns its bare input; delete the legacy ui input (DS3a part 3) (by @Abhi1992002)
- **#16092** - Move legacy ui button importers onto atoms/Button (DS3a part 3) (by @Abhi1992002)
- **#16097** - Fold ai-elements into organisms (DS3b-3b) (by @Abhi1992002)
- **#16099** - Builder roles, and the flow editor's nodes and panels on tokens (DS5h part 1) (by @Abhi1992002)
- **#16170** - Parametrize the SQL query block's near-identical SSRF and write-mode tests (by @Pwuts)
- **#16136** - Move collapsible, carousel and pagination-controls off __legacy__/ui (DS3a-1, 1/8) (by @Abhi1992002)
- **#16103** - The flow editor's canvas, edges, handles and tutorial on tokens (DS5h part 2) (by @Abhi1992002)
- **#16137** - Move calendar, loading and scroll-area off __legacy__/ui (DS3a-1, 2/8) (by @Abhi1992002)
- **#16139** - Move multiselect and command off __legacy__/ui (DS3a-1, 3/8) (by @Abhi1992002)
- **#16140** - Move popover importers onto molecules/Popover (DS3a-1, 4/8) (by @Abhi1992002)
- **#16125** - Move the Radix collapsible into molecules/Collapsible (DS3b) (by @Abhi1992002)
- **#16126** - Move the Radix scroll area into molecules/ScrollArea (DS3b) (by @Abhi1992002)
- **#16127** - Move the Radix sheet into molecules/Sheet (DS3b) (by @Abhi1992002)
- **#16181** - Move card importers onto atoms/Card (DS3a-1, 5/8) (by @Abhi1992002)
- **#16182** - Move label off __legacy__/ui into atoms/Label (DS3a-1, 6/8) (by @Abhi1992002)
- **#16183** - Draw the legacy icons through the Icon atom (DS3a-1, 7/8) (by @Abhi1992002)
- **#16184** - Move separator off __legacy__/ui into atoms/Separator (DS3a-1, 8/8) (by @Abhi1992002)
- **#16168** - Delete the block helper types and the helpers nothing uses (by @Pwuts)
- **#16128** - Move the sidebar into molecules/Sidebar (DS3b) (by @Abhi1992002)
- **#16129** - Promote input-group to molecules/InputGroup on tokens (DS3b) (by @Abhi1992002)
- **#16130** - Move the marketing effects out of components/ui (DS3b) (by @Abhi1992002)
- **#15946** - Remove Sentry session replay (by @kcze)
- **#16203** - Parametrize near-identical tests in 14 files (by @Pwuts)
- **#16118** - Move legacy badge callers onto atoms/Badge and delete ui/badge (DS3a-2) (by @Abhi1992002)
- **#16119** - Move legacy skeleton callers onto atoms/Skeleton and delete ui/skeleton (DS3a-2) (by @Abhi1992002)
- **#16120** - Add atoms/Checkbox and delete ui/checkbox (DS3a-2) (by @Abhi1992002)
- **#16121** - Add atoms/Textarea and delete ui/textarea (DS3a-2) (by @Abhi1992002)
- **#16122** - Move legacy form callers onto molecules/Form and delete ui/form (DS3a-2) (by @Abhi1992002)
- **#16134** - Profile-tab copy on a Text variant, drop the 15px context rule (DS7-1 PR 2b) (by @Abhi1992002)
- **#16110** - Delete components/ui/button for the Button atom's compact family (DS3b-1) (by @Abhi1992002)
- **#16111** - Delete components/ui/input for <Input bare> (DS3b-1) (by @Abhi1992002)
- **#16112** - Delete components/ui/textarea for <Input bare type="textarea"> (DS3b-1) (by @Abhi1992002)
- **#16113** - Delete components/ui/skeleton for the Skeleton atom's translucent variant (DS3b-1) (by @Abhi1992002)
- **#16114** - Delete components/ui/spinner for the LoadingSpinner atom (DS3b-1) (by @Abhi1992002)
- **#16115** - Delete components/ui/tooltip for the Tooltip atom (DS3b-1) (by @Abhi1992002)
- **#16116** - Delete components/ui/separator for a Separator atom (DS3b-1) (by @Abhi1992002)

### UI/UX Improvements

- **#16019** - Keep keyboard focus on an expert's onboarding card when its chat loads (by @Pwuts)
- **#16108** - Register the radius token names in tailwind-merge (DS-radius) (by @Abhi1992002)
- **#16102** - Make the Files storage label readable (by @Pwuts)
- **#16067** - Say so when the brain dump's microphone can't open, and offer Write (by @Pwuts)
- **#16073** - "Thought for" reads the saved turn duration once it exists (by @Pwuts)
- **#16065** - An inline file link in a chat message opens the file in the panel (by @Pwuts)
- **#16068** - Home's team link says "Open team" when the tile lists everyone, and US spelling in search (by @Pwuts)
- **#15904** - Start e2e users with the latest changelog entry already seen (by @Pwuts)
- **#16142** - A chat message with one account mention no longer ends in "__" (by @Pwuts)
- **#16160** - The What's new popup skips releases older than the user's account (by @Pwuts)
- **#16213** - The chat's slide-over panels tell screen readers what they hold (by @Pwuts)
- **#16204** - Stop the e2e changelog helper failing a test whose context closes mid-read (by @Pwuts)
- **#16209** - The first Home's composer asks what Otto should take on, not for the brain dump again (by @Pwuts)
- **#16024** - Expand the app sidebar by default (by @itsababseh)
- **#16082** - Keep question cards on screen once asked (by @Abhi1992002)
- **#16171** - Stop push notifications when browser notifications are switched off (by @kcze)

### Bug Fixes

- **#15975** - Stop mailing a user after a Postmark spam complaint or suppression (by @Torantulino)
- **#15839** - Usage-counter tests pass when a CI run crosses midnight UTC (by @Pwuts)
- **#15724** - Surface matching skills before experts act (by @ntindle)
- **#15385** - Assign experiment arms on the server, so a user keeps theirs without analytics consent (by @Pwuts)
- **#16010** - The brain-dump quality judge and team recommendation answer again on Haiku 5.5, and the team fallback offers three experts (by @Pwuts)
- **#15875** - Read a user's workspace before trying to create it (by @ntindle)
- **#15877** - Look up the workspace only when a marketplace copy is updated (by @ntindle)
- **#15469** - Read the usage state and trial once per message and once per turn (by @ntindle)
- **#15867** - Clear the user-lookup cache in a thread, not on the event loop (by @ntindle)
- **#15871** - Rebuild the skill version map without reading every skill's text (by @ntindle)
- **#15848** - Share the usage status's trial read with the turn's other checks (by @ntindle)
- **#16009** - Accept a new brain dump after a skipped or finished one, and keep a skipped recording for Back (by @Pwuts)
- **#16014** - Show what Otto knows about your work on Settings > Memory (by @Pwuts)
- **#16018** - Answer an expert's pending setup questions in the chat that asked them (by @Pwuts)
- **#16034** - Human labels for every tool row, never raw [] results (by @Abhi1992002)
- **#16028** - Keep Otto's working files out of Files and Recent work (by @Abhi1992002)
- **#16039** - Keep hired experts' skill files out of Files and storage (by @Abhi1992002)
- **#15878** - Resolve an expert's file scope with its three reads together (by @ntindle)
- **#16021** - Small Claude 5 calls stop thinking their whole output cap away (by @Pwuts)
- **#16059** - A prompt the AI provider refuses fails with a plain error (by @Pwuts)
- **#16133** - Build the AutoPilot sandbox image with Node 24.22.1 or later (by @Pwuts)
- **#16054** - Cache invalidation reaches entries cached over the RPC (by @Pwuts)
- **#16061** - Refuse a late upload for a brain-dump recording the user already skipped (by @Pwuts)
- **#16015** - Wait for a service's route during a rollout instead of failing the call (by @Pwuts)
- **#16050** - Say "no charge today" under the trial's Stripe checkout button (by @Pwuts)
- **#16143** - Assign experiment arms on the server and say "no charge today" on the trial checkout (cherry-pick of #15385 and #16050) (by @Pwuts)
- **#16057** - Say an address can't receive mail instead of claiming an email was sent (by @Pwuts)
- **#16063** - Home's credits warning counts only workflow schedules (by @Pwuts)
- **#16058** - Home says "Scheduled run" and names the workflow for older schedules (by @Pwuts)
- **#16148** - Upgrade Mem0 to unblock image security scans (by @ntindle)
- **#16167** - The chat bridge closes its Discord connection on shutdown (by @Pwuts)
- **#16166** - A service stopped during start-up shuts down cleanly instead of crashing in its own cleanup (by @Pwuts)
- **#16175** - An org member joins only by accepting an invitation (by @Pwuts)
- **#15057** - Send OAuth users back only to a registered redirect_uri (by @ntindle)
- **#16179** - One broken trial subscription no longer holds back every tier downgrade in the Stripe sweep (by @Torantulino)
- **#15992** - Count orchestrator tool charges in the run's cost (by @ntindle)
- **#16186** - Lease only OAuth credentials for a node run (by @ntindle)
- **#16104** - Let Add Memory output memories with nested values (by @kcze)
- **#15086** - Answer a missing or unanswered routine over RPC at once instead of retrying a 500 for 48 minutes (by @Pwuts)
- **#16208** - Greet an email sign-up as "there", not by the start of their address (by @Pwuts)
- **#16207** - The hire step offers a team to a user who skipped the brain dump (by @Pwuts)
- **#16165** - The onboarding greeting names every problem in the dump, hands-on ones as Otto's own work (by @Pwuts)
- **#15471** - Warm the CLI binary once at executor start, not per thread (by @ntindle)
- **#16223** - A stopped run still settles a node whose block already finished (by @kcze)
- **#16244** - Handle self-closing tags and reject attributes in XML Parser (by @ntindle)
- **#15318** - Stratified sampling only tops up strata with spare items (by @ntindle)
- **#15332** - Bound page and page_size on builder routes (by @ntindle)
- **#15315** - Only treat '<digits>. text' as a Notion numbered list item (by @ntindle)
- **#16205** - Dream facts get their source record on FalkorDB 4.12 (by @Pwuts)
- **#16251** - Normalize invitation emails and respect deleted orgs and archived teams (by @ntindle)
- **#15333** - Escape backslash before quote in Content-Disposition (by @ntindle)
- **#14552** - Make structured-output tag deterministic for Anthropic cache (by @ntindle)
- **#15899** - Find In Dictionary plucks from every dict in a list, misses go to missing (by @ntindle)
- **#15728** - Map creator from library model in List Library Agents block (by @ntindle)
- **#15314** - No empty leading list chunk; decoder keeps non-ASCII; case-insensitive fence removal (by @ntindle)
- **#15320** - LibraryFolder unique names among live siblings and roots (by @ntindle)
- **#15323** - Treat REVOKED as a terminal API key status (by @ntindle)
- **#15794** - GitHub List Discussions fails on every run (GraphQL URL rewritten) (by @ntindle)
- **#15316** - Send Discord Message always closes the client; reject empty content (by @ntindle)
- **#15319** - Guard last admin on leave/demote; 409 on re-add; 404 on non-member update (by @ntindle)
- **#15334** - Don't treat an all-digit commit SHA as a PR number (by @ntindle)
- **#15802** - Start the CLI while the turn builds its query (by @ntindle)
- **#16263** - Run Claude Code only on the user's own Anthropic key (by @kcze)
- **#15329** - Count cancelled/stale/startup_failure CI checks as failures (by @ntindle)

### Documentation

- **#16150** - Add test-writing rules that keep new tests from flaking on CI (by @Pwuts)
- **#16248** - Make the v2 API findable from the docs home, the app and the README (by @Pwuts)

### Dependencies & Maintenance

- **#16027** - Stop long release notes from breaking the Docker Hub publish (by @ntindle)
- **#15476** - Check a trial user's subscription is checked and honoured on every message and turn (by @ntindle)
- **#15782** - Compiler-era lint rules and a React Compiler coverage test (by @Abhi1992002)
- **#16003** - Bump storybook from 9.1.5 to 9.1.21 in /autogpt_platform/frontend (by @dependabot[bot])
- **#15896** - Bump rabbitmq from `42b190d` to `3e5cc23` in /autogpt_platform/single-container (by @dependabot[bot])
- **#16076** - Pin that a turn cut off by the budget backstop is still charged (by @Pwuts)
- **#15989** - Seed faker, size test waits for CI, and refuse global clock and sleep patches in tests (by @Pwuts)
- **#16147** - Refresh Docker Hub with expert-first branding (by @ntindle)
- **#16151** - Sync public security credits and release notes (by @ntindle)
- **#15890** - Bump the development-dependencies group across 1 directory with 2 updates (by @dependabot[bot])
- **#15894** - Bump the development-dependencies group across 1 directory with 4 updates (by @dependabot[bot])
- **#15999** - Bump @vitejs/plugin-react from 5.1.2 to 5.2.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16198** - Seed E2E data after the frontend image build, and time-box it (by @Pwuts)
- **#16192** - Bump the production-dependencies group across 1 directory with 52 updates (by @dependabot[bot])
- **#16259** - Let the credits PR run CI and flag advisories no release lists (by @ntindle)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our returning contributors:

- @Torantulino
- @Pwuts
- @ntindle
- @Bentlybro
- @Abhi1992002
- @kcze
- @0ubbe
- @itsababseh

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.10.0
```

Or download it directly from the [Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.9.0...autogpt-platform-beta-v0.10.0).

---

## 📝 **Feedback and Issues**

If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.10.0` · 2026-10-27 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
