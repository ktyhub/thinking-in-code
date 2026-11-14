---
title: "AutoGPT autogpt-platform-beta-v0.11.0"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.11.0"
version: "autogpt-platform-beta-v0.11.0"
published: "2026-11-04"
type: "pre"
lang: "en"
summary: "A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:"
---

# AutoGPT autogpt-platform-beta-v0.11.0

## 🔥 What's New?

### ⚠️ Breaking Changes

- **#16459** - Payment enforcement is now the backend setting `ENABLE_PLATFORM_PAYMENT` (default off) instead of the `enable-platform-payment` feature flag. A self-hosted install that charges must set it; `FORCE_FLAG_ENABLE_PLATFORM_PAYMENT` and `NEXT_PUBLIC_FORCE_FLAG_ENABLE_PLATFORM_PAYMENT` no longer do anything (by @Pwuts)
- **#16474** - The platform API answers `413` to a request body over `MAX_REQUEST_BODY_MB` (default 10 MiB) on any route that is not an upload route or webhook ingress. Raise it, or configure media storage, if you pass larger files inline (by @Pwuts)
- **#16522** - Behind a proxy chain whose `X-Forwarded-For` carries more than one address, list your proxies in the new `TRUSTED_PROXIES` setting (IP addresses or CIDR ranges). Left unset, per-visitor limits get no client IP instead of the header's leftmost entry. An entry that is not an IP address or CIDR range stops the frontend from starting (by @Pwuts)
- **#15853** - LaunchDarkly support is removed and every feature flag is read from PostHog. `LAUNCH_DARKLY_SDK_KEY`, `FEATURE_FLAG_BACKEND`, `NEXT_PUBLIC_LAUNCHDARKLY_ENABLED`, `NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_ID` and `NEXT_PUBLIC_FEATURE_FLAG_BACKEND` are ignored; without PostHog every flag is its default (by @kcze)
- **#16026** - AutoPilot conversations are no longer traced to Langfuse, which is now used only for prompt management. AutoPilot traces go to PostHog (by @kcze)

### New Features
- **#16310** - Add Parallel Decisions blocks (web-grounded yes/no, choice, score) (by @Torantulino)
- **#16326** - Show real changelog entries in the login What's new panel (by @Torantulino)
- **#16316** - Show popular services first in the Connect a service dialog (by @Torantulino)
- **#16306** - Offer Connect an integration from the @ mention list (by @Torantulino)
- **#16279** - Redesign the "Confirm your email address" email (by @Torantulino)
- **#16268** - One Microsoft connection for mail, calendar, files, Teams, Copilot and Work IQ (by @ntindle)
- **#15087** - Add Gemini 3.5 Flash, 3.5 Flash Lite and 3.1 Flash Lite to the LLM catalog (by @Bentlybro)
- **#16407** - Link feedback to the person's PostHog replay (by @kcze)
- **#16398** - Keep the onboarding role when its step is answered, not at the end (by @kcze)
- **#16527** - Ask self-hosted users for a GitHub star after five answered prompts (by @ntindle)
- **#14545** - Rate limit the v1 external API (by @Jia-ben00)
- **#16459** - Payment enforcement is the ENABLE_PLATFORM_PAYMENT setting (by @Pwuts)
- **#16522** - Resolve the client IP through operator-listed trusted proxies (by @Pwuts)
- **#16554** - Seed previews with a small synthetic marketplace (by @ntindle)
- **#16569** - Route load-test accounts to the dummy engine or a scripted model (by @ntindle)
- **#15733** - Wake Otto after opt-in background subtasks (by @ntindle)

### Enhancements
- **#16352** - Compact spend approval card with a positive tone (by @0ubbe)
- **#16280** - Clarify app connections in Otto (by @0ubbe)
- **#16314** - Sign-up panel describes a team of AI experts, not agent building (by @Torantulino)
- **#16394** - Design-system guardrails as lint rules with a per-file baseline (SECRT-3097 wave 0) (by @Abhi1992002)
- **#13676** - Skip the truncate() probe grid when the payload already fits (by @dexhunter)
- **#16225** - Say "Done" at the end of the latest turn (by @kcze)
- **#16226** - Plain-language compaction copy and a clock on long-running steps (by @kcze)
- **#16227** - Turn notifications on from the chat banner in one click (by @kcze)
- **#16228** - Thumbs up/down work on a reply that just finished (by @kcze)
- **#16250** - Give a Discord channel mention the recent channel messages as context (by @Bentlybro)

### UI/UX Improvements
- **#16401** - Design tokens, block-menu chips, LegacyButton refactor (by @Abhi1992002)
- **#16404** - Design tokens, Text and type scale; zero strict violations in copilot (by @Abhi1992002)
- **#16399** - Shadcn names alias the roles; Text and Button internals on tokens; one dark selector (by @Abhi1992002)
- **#16406** - Design tokens, Text, LegacyButton; zero strict violations in admin, team (by @Abhi1992002)
- **#16405** - Design tokens, Text, Status badge, profile sidebar, LegacyButton; zero strict violations in library, profile (by @Abhi1992002)
- **#16400** - Contextual, layout, renderers and auth on design tokens; zero strict violations (by @Abhi1992002)
- **#16403** - Design tokens, Text, type scale, search chips and sort menu; zero strict violations in settings, marketplace, artifacts (by @Abhi1992002)
- **#16402** - Atoms, molecules, organisms, tour and public pages on design tokens; zero strict violations (by @Abhi1992002)
- **#16411** - Delete the legacy layer; design-system lint is an error everywhere (SECRT-3153, DS4b, DS3a tail) (by @Abhi1992002)
- **#16429** - CSS-first theme on Tailwind 4 (by @Abhi1992002)
- **#16428** - Icons through the Icon atom (by @Abhi1992002)
- **#16513** - Text, Icon and Button variants instead of call-site restyles (by @Abhi1992002)
- **#16556** - One text-size scale; Tailwind's sizes reset (SECRT-3152) (by @Abhi1992002)
- **#16511** - Collapse colours to one role token set (SECRT-3154) (by @Abhi1992002)
- **#16256** - Show every onboarding role on a phone (by @Pwuts)

### Bug Fixes
- **#16053** - Websocket server reads through the database manager, so sockets open and live run updates stream (by @Pwuts)
- **#16267** - Microsoft 365 Copilot sign-in codes send the app's secret (by @ntindle)
- **#16303** - Show every paused run's approval in the chat, not only the newest (by @Pwuts)
- **#16265** - Keep MCP tools' structured results (by @ntindle)
- **#16311** - Sign-in tokens whose algorithm doesn't match their key get a 401, not a 500 (by @Pwuts)
- **#15492** - Score memory candidates in one wave, not two (by @ntindle)
- **#16349** - Keep list_workspace_files in the model's tool list (by @0ubbe)
- **#15162** - Execute the validated graph version in run_agent (by @siye566)
- **#16342** - Keep a menu open when the composer mounts under it (by @Pwuts)
- **#16360** - Report a tool's refusal to an MCP client as a failed call (by @Pwuts)
- **#16351** - Keep 50-75 KB tool results reachable from bash_exec (by @0ubbe)
- **#15298** - Keep distinct list items with equal keys apart in dedupe/difference/intersection (by @ntindle)
- **#16350** - Point agents at workspace storage for uploaded and saved files (by @0ubbe)
- **#16369** - Keep a plain chat's sandbox across long gaps and say when it is replaced (by @0ubbe)
- **#16365** - Redirect bash_exec on any reference to the host tool-results folder (by @0ubbe)
- **#16340** - Say a public mail provider's related accounts are linked by a shared IP (by @Pwuts)
- **#15386** - Keep users signed in through network blips and deploys (by @ntindle)
- **#16410** - Resync Mistral Large 4 display price with OpenRouter (by @ntindle)
- **#12896** - Prevent Select controlled/uncontrolled switch warning (#11093) (by @SymbolStar)
- **#13234** - Handle empty jina search results (by @RykerFeng)
- **#13244** - Clarify invalid models and bound retry token budgets (by @RykerFeng)
- **#15027** - Prevent RangeError from invalid date in timezone formatting (by @sentry[bot])
- **#15841** - Send memory recall's reranker through OpenRouter's priority tier (by @ntindle)
- **#15849** - Read a new chat's first-message context while the turn sets up (by @ntindle)
- **#15866** - Recall a new chat's memories while its query is built (by @ntindle)
- **#16370** - Run file-writing tool calls in the model's order (by @0ubbe)
- **#16312** - Reload once when a chunk fails to load after a deploy (by @posthog-eu[bot])
- **#16383** - Handle a missing currentPath in the validateSession server action (by @sentry[bot])
- **#16396** - Delete analytics and ad cookies when consent is declined or withdrawn (by @kcze)
- **#16432** - Give mirrored Sentry messages an exception PostHog can group (by @kcze)
- **#16435** - Stop two Sentry report tests depending on delivery order (by @kcze)
- **#15079** - Say why a bot turn failed, and replay a codex resend after a client timeout (by @Bentlybro)
- **#16262** - Normalize Ollama message payloads (by @Bentlybro)
- **#16264** - Handle invalid PDF artifact responses (by @Bentlybro)
- **#15330** - Bound store review score to 1-5 (by @ntindle)
- **#15600** - A declined card on auto top-up says why instead of failing with a 500 (by @Bentlybro)
- **#16440** - Restore dynamic nested output handles (by @ntindle)
- **#16443** - Update expert roster tests to the shipped skills catalog (by @Bentlybro)
- **#16419** - Move to Better Auth 1.7.12 ahead of its Nov 3 security release (by @ntindle)
- **#16448** - Bill DataForSEO and Exa at the platform's 150 credits per USD (by @ntindle)
- **#16444** - Apply attempt limits to the login and reset-password actions (by @Pwuts)
- **#16466** - Chat links to app pages without a leading slash open instead of showing [blocked] (by @kcze)
- **#16467** - Search the Favorites tab on the server (by @kcze)
- **#16468** - Recognise a duplicate chat message id from Prisma's real error (by @kcze)
- **#15326** - Make OAuth authorization code redemption single-use under races (by @ntindle)
- **#15788** - Count each run once in mv_agent_run_counts (by @ntindle)
- **#16478** - Preserve precision when converting integer strings (builds on #16415) (by @ntindle)
- **#15783** - Keep /link/<token> pages out of the onboarding redirect (by @ntindle)
- **#16494** - Limit video frame size and VideoConcatBlock input count (by @Bentlybro)
- **#16496** - Limit Text Replace and Combine Texts output to 10M characters (by @Bentlybro)
- **#15083** - First-turn thread context, other people's mentions, repeat and no-op setup cards (by @Bentlybro)
- **#16470** - Stream virus scans with backpressure and bound Sentry's frame locals (by @Pwuts)
- **#16472** - Finish the REST API start-up when a data migration fails (by @Pwuts)
- **#16474** - Limit request body size on the platform API (by @Pwuts)
- **#16499** - Render workspace previews in a child process with a time and memory limit (by @Bentlybro)
- **#16487** - Read folder listings and run credentials once, and keep folder-write reads on their transaction (by @Pwuts)
- **#16476** - Read each graph link and node once, and bound run inputs (by @Bentlybro)
- **#16481** - Run direct block execution off the server loop and bound block work (by @Bentlybro)
- **#16473** - Share one Redis connection per shard per WebSocket and cap subscriptions (by @Pwuts)
- **#16490** - Bound graph, review and skill request handling and response compression (by @Bentlybro)
- **#16483** - Bound how many named inputs a preset and a run can hold, and how many presets an account holds (by @Pwuts)
- **#16177** - Show plan guidance for memory chat paywalls (by @posthog-eu[bot])
- **#16497** - Cap the bytes archive members unpack to in previews, skill uploads and spreadsheet reads (by @Bentlybro)
- **#16510** - Load every page of library workflows so the briefing counts the whole library (by @kcze)
- **#16518** - Write PostHog once-per-tab markers only when the event is sent (by @kcze)
- **#16520** - Name users by ID, not email, in analytics views and ops alerts (by @kcze)
- **#16524** - Update the swap proxy to mitmproxy 12.3.1 and stop decoding Brotli bodies (by @kcze)
- **#16523** - A relaunched turn reaches the model instead of dying on our own 409 (by @Pwuts)
- **#16424** - Two chat turns starting at once on one executor pod both get their sandbox (by @Pwuts)
- **#16260** - Pin the consult escaping's quote handling and input cuts (by @ntindle)
- **#16079** - Pass value1 through when ConditionBlock omits the false value (by @saivinaypotluri)
- **#15553** - Reject lossy If Input Matches comparisons (by @cindykrafft)
- **#16453** - Reuse credential snapshots for setup cards (by @ntindle)
- **#15535** - Guard desktop stream fullscreen requests (by @sentry[bot])
- **#16545** - Read the chat list's page and its total side by side (by @ntindle)
- **#16548** - Read the subscription status's independent parts side by side (by @ntindle)
- **#16551** - Read the visitor's session beside the listing prefetches (by @ntindle)
- **#15911** - Validate stored workflow input depth (by @troyan-dy)
- **#16145** - Preserve explicit Responses tool strictness (by @sxl-lucky7)
- **#16549** - Read a new run's user, settings and workspace together (by @ntindle)
- **#16547** - Read the marketplace, experts, library and run pages' independent queries side by side (by @ntindle)
- **#16546** - Read AI connections, a chat's share state and an expert's workspace side by side (by @ntindle)
- **#16534** - Answer a refused graph activation over the DatabaseManager at once (by @Pwuts)
- **#15659** - Preserve empty anyOf object inputs (by @sentry[bot])
- **#16552** - Close a deleted session's browser only in the process that runs it (by @ntindle)
- **#16550** - Register a node output's links into different nodes side by side (by @ntindle)
- **#15742** - Resolve a request's personal org and its membership in one read (by @ntindle)
- **#16417** - Keep docker-compose.yml read-only inside the container (by @ntindle)
- **#16462** - Stop the preferences update from changing the account's email (by @ntindle)
- **#16465** - Credit a paid checkout once however many fulfilments race for it (by @ntindle)
- **#16571** - Stop the brain-dump loop check rejecting real Indic-script and long answers (by @ntindle)
- **#16493** - Render templates in a worker process under memory and time limits (by @Pwuts)
- **#16581** - Normalise key-name separators in shared-chat redaction (by @Pwuts)
- **#16344** - Judge a typed brain dump by whether it answers, not by speech rules (by @Pwuts)
- **#16409** - Decide the workspace storage quota where each file's row commits (by @Pwuts)
- **#16495** - Apply size limits while reading sandbox, tool and block output (by @Pwuts)
- **#16557** - Answer an error raised on purpose over RPC as itself, at once (by @Pwuts)
- **#16577** - Bump better-auth to 1.7.16 for the Nov 3 security release (by @ntindle)
- **#16334** - A marketplace listing version that doesn't exist answers 404, not 500 (by @Pwuts)
- **#16388** - Ten X blocks accept the X connections users actually have (by @Pwuts)
- **#16390** - A run finishing during shutdown no longer aborts the executor's graceful stop (by @Pwuts)
- **#16488** - Limit schedules and executor workers per account, and refuse crons that never fire (by @Pwuts)
- **#15638** - Make DELETE /graphs/{id} work instead of 500ing on FK violation (by @ntindle)
- **#16358** - Let Platform MCP calls read the caller's own workspace files (by @Pwuts)
- **#16485** - Bound stored request text, and the reads that load it back (by @Pwuts)
- **#16570** - Harden resuming approved block calls and sandboxes (by @ntindle)
- **#16389** - browser_screenshot keeps every unnamed capture and says why a save failed (by @Pwuts)
- **#16391** - Hiring an expert yourself completes the wallet's marketplace task (by @Pwuts)
- **#16191** - Move workflows on retired Claude aliases to the same family's successor (by @Pwuts)

### Documentation
- **#16020** - Changelog v0.9.0 (by @itsababseh)
- **#16304** - Tell v1 migrators to create a new API key, since keys can't be edited (by @Pwuts)

### Dependencies & Maintenance
- **#16266** - Add a helper that syncs selected env keys between machines (by @ntindle)
- **#16296** - Bump dotenv from 17.2.3 to 18.0.8 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16301** - Bump uuid from 11.1.1 to 14.0.3 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16295** - Bump @sentry/nextjs from 10.27.0 to 11.8.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16298** - Bump ai from 6.0.134 to 7.0.143 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16371** - Bump the production-dependencies group across 1 directory with 8 updates (by @dependabot[bot])
- **#16297** - Bump lucide-react from 0.552.0 to 1.59.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16283** - Bump ruff from 0.17.1 to 0.17.2 in /autogpt_platform/backend (by @dependabot[bot])
- **#16282** - Bump ruff from 0.17.1 to 0.17.2 in /autogpt_platform/autogpt_libs (by @dependabot[bot])
- **#16300** - Bump react-day-picker from 9.11.1 to 10.0.2 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16281** - Bump node from `1681862` to `55fb5f5` in /autogpt_platform/single-container (by @dependabot[bot])
- **#16286** - Bump certifi from 2025.7.14 to 2026.10.18 in /autogpt_platform/autogpt_libs (by @dependabot[bot])
- **#16289** - Bump motion from 13.2.0 to 14.4.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16291** - Bump shiki from 3.21.0 to 4.5.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16000** - Bump msw from 2.11.6 to 2.15.0 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16001** - Bump eslint-plugin-storybook from 9.1.5 to 10.6.3 in /autogpt_platform/frontend (by @dependabot[bot])
- **#16433** - Update posthog to 7.80.3 (by @kcze)
- **#15853** - Remove LaunchDarkly and read every flag from PostHog (by @kcze)
- **#16026** - Remove Langfuse tracing of AutoPilot conversations (by @kcze)
- **#14369** - Upgrade conflict label action to Node.js 24 (by @QiuLsG)
- **#16070** - Cache the Prisma CLI and retry its download in backend and full-stack CI (by @Pwuts)
- **#16418** - Run Classic's Python checks only on changes under classic/ (by @Pwuts)
- **#16508** - Run the Playwright browser jobs on ubuntu-24.04 (by @Pwuts)
- **#16423** - Start the e2e backend services after the frontend image is built (by @Pwuts)
- **#16477** - Deploy workflows dispatch the commit they migrated, not a branch name (by @Pwuts)
- **#16489** - Drop the MCP tests' stored-credential fixture (by @Pwuts)
- **#16544** - Guard every test against real iframe navigation (by @Pwuts)
- **#16463** - Count only trusted !deploy/!undeploy comments in the PR-close scan (by @ntindle)
- **#16232** - Keep compose FalkorDB's memory graph across container recreation (by @Pwuts)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @siye566
- @saivinaypotluri
- @cindykrafft
- @Jia-ben00
- @troyan-dy
- @sxl-lucky7

As well as our returning contributors:
- @Pwuts
- @ntindle
- @Torantulino
- @0ubbe
- @kcze
- @Bentlybro
- @Abhi1992002
- @itsababseh
- @SymbolStar
- @RykerFeng
- @dexhunter
- @QiuLsG

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.11.0
```

Or download it directly from the [Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.10.0...autogpt-platform-beta-v0.11.0).

---

## 📝 **Feedback and Issues**

If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.11.0` · 2026-11-04 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
