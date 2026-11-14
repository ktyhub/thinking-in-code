---
title: "AutoGPT autogpt-platform-beta-v0.8.0"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.8.0"
published: "2026-09-19"
type: "pre"
lang: "en"
summary: "ENCRYPTION_KEY, UNSUBSCRIBE_SECRET_KEY and BETTER_AUTH_SECRET no longer ship with values in .env.default; they are generated per install, and the backend does not start on the value .env.default used to contain."
---

# AutoGPT autogpt-platform-beta-v0.8.0

### ⚠️ Upgrading a self-hosted install — breaking change

`ENCRYPTION_KEY`, `UNSUBSCRIBE_SECRET_KEY` and `BETTER_AUTH_SECRET` no longer ship with values in `.env.default`; they are generated per install, and the backend **does not start** on the value `.env.default` used to contain. A fresh install needs nothing beyond `make init-env` (or the installer). An install that set its own values needs nothing. If your install ran on the defaults (no `ENCRYPTION_KEY` line in `backend/.env`, or startup stops with `ENCRYPTION_KEY is set to a value that was published…`), do this from `autogpt_platform/` — it moves your connected integrations to the new key instead of losing them:

1. `docker compose down`
2. Keep the key your data is encrypted with:
   `export OLD_ENCRYPTION_KEY=$(git show autogpt-platform-beta-v0.7.4:autogpt_platform/backend/.env.default | grep '^ENCRYPTION_KEY=' | cut -d= -f2-)`
   (if you had set your own key and are replacing it, export that value instead and keep a copy of `backend/.env` outside the checkout).
3. In `backend/.env` make sure `ENCRYPTION_KEY=` and `UNSUBSCRIBE_SECRET_KEY=` exist with nothing after the `=`, and `BETTER_AUTH_SECRET=` in `frontend/.env`; then `make init-env` (fills every empty secret, never overwrites a value).
4. Re-encrypt what is stored — dry run first, then apply:
   `docker compose build migrate rest_server && docker compose run --rm migrate`
   `docker compose run --rm --no-deps -e OLD_ENCRYPTION_KEY rest_server cli rotate-encryption-key`
   `docker compose run --rm --no-deps -e OLD_ENCRYPTION_KEY rest_server cli rotate-encryption-key --apply`
5. Clear the token signing key stored under the old `BETTER_AUTH_SECRET`, then start:
   `docker compose up -d --wait db`
   `docker compose exec db psql -U postgres -c 'DELETE FROM platform."UserAuthJwks";'`
   `docker compose up -d --build`

Full instructions: [Upgrading: secrets are generated per install](https://github.com/Significant-Gravitas/AutoGPT/blob/master/docs/platform/getting-started.md#upgrading-secrets-are-generated-per-install).

Also in this release: the legacy HS256 JWT verification path is removed, so a `JWT_VERIFY_KEY` in `backend/.env` is no longer read (#14519); the unused `TrialNotificationDelivery` table is dropped by migration.

## 🔥 What's New?

### New Features

- **#14688** - Standing work: routines for experts and Otto, repeating or once (by @ntindle)
- **#14331** - Let the Discord bot mention server members and roles, never everyone (by @Bentlybro)
- **#14313** - Dedicated, shareable expert pages with a Coming soon state (by @0ubbe)
- **#14273** - Expert proposal cards outside the tool chain with approve flow and taglines (by @Abhi1992002)
- **#14187** - Tag the settings-billing paying surfaces for DataFast (by @ntindle)
- **#14186** - Report each onboarding step to DataFast (by @ntindle)
- **#13299** - Alert + gate admin impersonation start via Discord (by @ntindle)
- **#11791** - Add button to generate data to admin dashboard on local dev (by @ntindle)
- **#14332** - Connect every provider a tool needs, then proceed once (by @Pwuts)
- **#14342** - Group Home's Recent work by expert, workflow, or Autopilot (by @0ubbe)
- **#13261** - Add Linux and macOS appliance installer (by @ntindle)
- **#14358** - Add GPT-6 Astra support (by @ntindle)
- **#14385** - Add Opus 5 and upgrade Advanced Anthropic (by @Torantulino)
- **#14075** - Support Basic authentication for MCP servers (by @Torantulino)
- **#14403** - Experts first, one-line runs, and run triggers on Home's Recent work (by @0ubbe)
- **#14361** - Add actionable automation credit history (by @Torantulino)
- **#14399** - Add expert budget endpoint and run source (by @Abhi1992002)
- **#14402** - Add Claude Fable 5.1 support (by @ntindle)
- **#14425** - Expert new-chat button in the sidebar and expert-aware empty session (by @0ubbe)
- **#14322** - Look Mum No Hands - AutoPilot Voice Mode (by @Pwuts)
- **#14411** - Experts do the public-data part of the job when a connection is skipped (by @Pwuts)
- **#14428** - Canonical categories and a category filter (by @Pwuts)
- **#14353** - Add configurable card-required trials (by @ntindle)
- **#14422** - Add Google Gemini 3.8 Flash support (by @ntindle)
- **#14446** - Give marketplace pages real Open Graph link previews (by @Pwuts)
- **#14431** - List knowledge skills in the marketplace and install them to AutoPilot (by @Pwuts)
- **#14424** - Let AutoPilot read the user's expert chats (by @Pwuts)
- **#14244** - Per-tree envelope and ledger for spawned turns (by @Pwuts)
- **#14420** - Pause expert work for approval once her spend reaches the threshold (by @Pwuts)
- **#14423** - AutoPilot authors the morning brief (by @Pwuts)
- **#14432** - Publish knowledge skills to the marketplace and review them (by @Pwuts)
- **#14395** - Make silent credential-connection failures visible (by @Pwuts)
- **#14421** - Score each expert's writing style against a stored baseline (by @Pwuts)
- **#14452** - Update Slant3D integration for API v2 (by @ntindle)
- **#14460** - Add generated expert avatars across team and chat surfaces (by @Abhi1992002)
- **#14461** - Choose generated avatars when raising experts (by @Abhi1992002)
- **#14462** - Recommend experts from onboarding brain dumps (by @Abhi1992002)
- **#14464** - Introduce an expert-first onboarding wizard (by @Abhi1992002)
- **#14465** - Introduce the expert team model in copilot onboarding (by @Abhi1992002)
- **#14466** - Teach AutoPilot to propose the first expert hire (by @Abhi1992002)
- **#14490** - Show an expert's integrations as logos on the team card (by @0ubbe)
- **#14037** - Expert profiles show required services, cost, and AI disclosure (by @Abhi1992002)
- **#14379** - Run copilot sandboxes on our own 1 vCPU / 2 GiB desktop image (by @ntindle)
- **#14505** - Show what an expert has learned in its Soul drawer (by @Pwuts)
- **#14512** - Expert profiles show what the expert sets up on day one (by @Pwuts)
- **#14389** - Add RMFG manufacturing blocks (by @ntindle)
- **#14506** - Show a bundled workflow's cadence before hire, and skip install-time schedules a hire cannot run (by @Pwuts)
- **#14504** - Return experts from search and the category chips (by @Pwuts)
- **#14458** - Add Alibaba Qwen 3.8 Max (0902) support (by @ntindle)
- **#14414** - Skills owned per expert or personal AutoPilot (by @Abhi1992002)
- **#14511** - Expert profiles show only the real Skills a hire comes with (by @Pwuts)
- **#14202** - Add Microsoft 365 Copilot transport (by @ntindle)
- **#14286** - Record how each agent run started and emit activation events (by @ntindle)
- **#14287** - Record A/B experiment arms per user (by @ntindle)
- **#14459** - Add Meta Muse Spark 1.3 support (by @ntindle)
- **#14530** - Add DeepSeek V4.1 Flash (by @ntindle)
- **#14393** - AutoPilot says what its task has left and wraps up before it runs out (by @Pwuts)
- **#14559** - Install a marketplace skill straight onto one of your experts (by @Pwuts)
- **#14544** - Make a skill package's files reachable and runnable in a turn (by @Pwuts)
- **#14549** - Store, copy and delete a skill as its whole package (by @Pwuts)
- **#14555** - Upload and download a skill as a zip package (by @Pwuts)
- **#14538** - Add Sakana Fugu Ultra v2 (by @ntindle)
- **#12945** - Add moderation blocks (by @ntindle)
- **#14578** - Let the chat-platform bot stay silent with NO_REPLY (by @Bentlybro)
- **#14550** - Raise experts with real marketplace skills (by @0ubbe)
- **#14557** - Publish and install a skill as its whole package (by @Pwuts)
- **#14561** - Show a skill's package on the Hub and in admin review (by @Pwuts)
- **#14543** - Split marketing into four scoped experts (by @0ubbe)
- **#14415** - Experts run only installed workflows with granted credentials (by @Abhi1992002)
- **#14416** - AutoPilot manages all schedules, experts see only their runs (by @Abhi1992002)
- **#14417** - Grant access from the connect card in expert chats (by @Abhi1992002)
- **#14365** - Interactive E2B desktop sandboxes with live embedded streams (by @ntindle)
- **#14382** - One box per owner — the desktop is the shell's screen (by @ntindle)
- **#14288** - One anonymous id across PostHog and LaunchDarkly, stored at signup (by @ntindle)
- **#14436** - Let AutoPilot edit its own chat-platform messages (by @Bentlybro)
- **#14514** - Add supported official MCP integrations (by @ntindle)
- **#14568** - Capability registry core and index (by @ntindle)
- **#14038** - Experts funnel + briefing instrumentation (by @Abhi1992002)
- **#14207** - Live sessions message each other, and one cross-expert check (by @Pwuts)
- **#14639** - Add TypeSafe Jev judgment blocks (by @Torantulino)
- **#14569** - Swap copilot discovery to find/describe/run_capability (by @ntindle)
- **#14635** - Add Inception Mercury 2.5 (by @ntindle)
- **#14675** - Add nine business core experts (by @0ubbe)
- **#14707** - Show expert job titles on the pill and ask for one when raising (by @0ubbe)
- **#14677** - Use the credential the user picked, and ask instead of guessing (by @Bentlybro)

### Enhancements

- **#14310** - Count graph runs by terminal status (by @Bentlybro)
- **#14319** - Wire the application metrics that were defined but never recorded (by @Bentlybro)
- **#14208** - Upgrade claude-agent-sdk to 0.2.152 and pin the context window explicitly (by @Pwuts)
- **#14360** - Clarify Max model access in picker (by @Torantulino)
- **#14398** - Add compact variants to core atoms and restyle Home (by @Abhi1992002)
- **#14400** - Inline expert chat and team page polish (by @Abhi1992002)
- **#14404** - Rebuild Files page as a list with hover previews (by @0ubbe)
- **#14302** - Speak MCP 2026-07-28 alongside legacy servers (by @kcze)
- **#14408** - Colour Home's work chips and show workflow pictures (by @0ubbe)
- **#14442** - Recalibrate AutoPilot's per-plan daily and weekly spend limits (by @Pwuts)
- **#14336** - Shrink the schemas and tool results AutoPilot reads (by @Pwuts)
- **#14469** - Files multi-select, Team setup card, and Team/Home design polish (by @0ubbe)
- **#14463** - Refresh brain dump recording with an animated AutoPilot (by @Abhi1992002)
- **#14497** - Replace the expert kickoff auto-run with an onboarding card (by @0ubbe)
- **#14571** - Promote GPT-6 Astra to Codex advanced-tier default (by @Otto-AGPT)
- **#14548** - Notion-style expert avatars with a face picker in the raise flow (by @0ubbe)
- **#14457** - Build the backend image once instead of eight times (by @Bentlybro)
- **#14603** - Notify sessions when the skill registry drifts since session start (by @ntindle)

### UI/UX Improvements

- **#14266** - Show error toast when a requested graph fails to load (by @Pwuts)
- **#14368** - Calm the Recent work card on Home (by @0ubbe)
- **#14407** - Use solid expert colors for covers (by @Abhi1992002)
- **#14300** - Ignore Enter and other keys while an IME is composing (by @kcze)
- **#14472** - Hide unfinished expert pods UI (by @Abhi1992002)
- **#14437** - Format sidebar date group labels with the user's locale (by @gaoanze888)
- **#14673** - Move billing toggle closer to plan cards in onboarding (by @0ubbe)
- **#14661** - Unify expert display and sidebar chats (by @0ubbe)
- **#14696** - Put the desktop back in reach of the chat (by @kcze)
- **#14700** - Restore result cards for tools run through run_capability (by @kcze)
- **#14682** - Stopping a response shows the stopped card, not an error (by @Pwuts)

### Bug Fixes

- **#14721** - Apply the building-mode guide on restart instead of re-deriving it from history (by @Pwuts)
- **#14714** - Run a tool reached by capability id through the normal tool path — AutoPilot can create and edit agents again (by @Pwuts)
- **#14702** - Name deferred tools by capability id in model-facing text (by @kcze)
- **#14330** - Read the post a Discord thread was created from (by @Bentlybro)
- **#14325** - Skip scheduled runs for paywalled users quietly (by @Bentlybro)
- **#14337** - Show expert cards to signed-out visitors (by @0ubbe)
- **#14324** - Route every Stripe SDK call through one async helper (by @Bentlybro)
- **#14334** - Upgrade redis-py to 8.1 so a dropped cluster connection no longer poisons the client (by @Bentlybro)
- **#14057** - Render array items with a known object shape as a real sub-form (by @ntindle)
- **#14206** - Raise the LLM request timeout to 600s and make it configurable (by @Pwuts)
- **#14327** - Stop managed, stale and trigger credentials breaking the Connect card (by @Pwuts)
- **#14212** - Show what the approval card will execute, and approve only that (by @Pwuts)
- **#14320** - Invalidate the copilot integration-token cache across processes (by @Pwuts)
- **#14309** - A sub-session hands back a bounded result, not its whole tool log (by @Pwuts)
- **#14205** - Require library membership AND marketplace submission for graph access (by @Pwuts)
- **#14373** - Render canonical agent and block names in AutoPilot (by @Torantulino)
- **#13524** - Authorize team management by target team id, drop active-team requirement (by @ntindle)
- **#14394** - Match sensitive header names case-insensitively when following redirects (by @Pwuts)
- **#14441** - Drop first-person voice from run activity summaries (by @0ubbe)
- **#14303** - Stop deleting valid MCP credentials on a 403, and verify tokens server-side (by @kcze)
- **#14445** - Gate the expert page's Coming soon on the hire-experts flag (by @0ubbe)
- **#14419** - Stop replaying Authorization across cross-origin redirects (by @kcze)
- **#14426** - Keep each expert's workspace files separate from other experts (by @0ubbe)
- **#14451** - Bind the scheduler's RPC port before the embedding backfill (by @Pwuts)
- **#14412** - Facts an expert stores now persist as recallable memories (by @Pwuts)
- **#14448** - Keep block and agent inputs off the copilot setup card (by @0ubbe)
- **#14434** - Use the timezone AutoPilot was given when scheduling an agent (by @Pwuts)
- **#14390** - Tell AutoPilot and the user when a stored credential is rejected, not "not connected" (by @Pwuts)
- **#14454** - Seed E2E embeddings before CI dumps the database for its cache (by @Pwuts)
- **#14392** - Tag Vercel previews as preview in Sentry, and stop pytest runs reporting (by @Pwuts)
- **#14391** - Store the scopes the provider granted, not the ones we asked for (by @Pwuts)
- **#14375** - Never drop a user's tier on an unauthoritative payment-flag read (by @Pwuts)
- **#14374** - Cap the compaction window pin at the routed model's real window (by @Pwuts)
- **#14354** - Read aloud falls back to our own TTS when the browser has no voices (by @Pwuts)
- **#13420** - Use custom rjsf validator for anyOf fields (by @seer-by-sentry[bot])
- **#13576** - Base64-encode the ExecuteCodeBlock variables payload (by @albatrossflyon-coder)
- **#14372** - Isolate copilot dispatch sleep mocks (by @Torantulino)
- **#14388** - Silence AbortError in onboarding provider (by @seer-by-sentry[bot])
- **#14323** - Guard Tally popup script removal to prevent NotFoundError (by @seer-by-sentry[bot])
- **#14453** - Prevent agent page crash on 404 (by @seer-by-sentry[bot])
- **#14260** - Guard AppSidebar keydown listener against undefined event.key (by @seer-by-sentry[bot])
- **#14179** - Prevent Tooltip from switching between controlled/uncontrolled (by @seer-by-sentry[bot])
- **#13498** - Prevent ApiError [object Object] from FastAPI 422 detail (by @seer-by-sentry[bot])
- **#13581** - Guard against undefined platform in PlatformBadge (by @seer-by-sentry[bot])
- **#13166** - Remove benign console.warn from credential input (by @seer-by-sentry[bot])
- **#14491** - Stop the hire kickoff from telling the expert to run a workflow (by @Pwuts)
- **#14492** - Stop logging Ayrshare requests (by @Pwuts)
- **#14500** - Refresh every expert list after connecting a service (by @0ubbe)
- **#13356** - Trim Ayrshare profile keys in request headers (by @pony-maggie)
- **#14515** - Send question answers right away and advance on option pick (by @Abhi1992002)
- **#14513** - Stop the roster seed from overwriting hired experts' skills (by @Pwuts)
- **#14178** - Stop a tool result rendering its own discriminator (by @ntindle)
- **#14177** - Stop device auth reporting a new credential as removed (by @ntindle)
- **#14326** - Avoid retrying Redis during test collection (by @Ftgn-dpA)
- **#14095** - Let device-code providers connect from copilot chat (by @ntindle)
- **#14517** - Disable CoPilot spend caps for self-hosted installs (by @ntindle)
- **#14524** - Store marketplace media locally when GCS is unset (by @ntindle)
- **#14526** - Distinguish experts from Otto in UI and tools (by @Torantulino)
- **#14529** - Await the onImagesChange assertion in ThumbnailImages local-media test (by @Pwuts)
- **#14486** - Strip whitespace in bool string conversion (by @soroush5)
- **#14488** - Wrap strings as single element in set/tuple conversion (by @soroush5)
- **#14547** - Keep a hire's onboarding card on the expert's own role (by @0ubbe)
- **#13750** - Stabilize ReactFlow prop references on the builder canvas (by @chelsealong)
- **#14439** - Stop unpickling paused/fired schedules on every get_execution_schedules read (by @Bentlybro)
- **#14542** - Reap the browser process tree when a turn ends (by @Bentlybro)
- **#14556** - Test fixtures delete the templates and hires they create (by @Pwuts)
- **#14435** - Deliver AutoPilot clarifying questions to bot platforms (by @Bentlybro)
- **#14501** - Make the bot's mentions actually ping, by name or id (by @Bentlybro)
- **#14468** - Block the CLI cron tools that silently schedule nothing (by @kcze)
- **#14363** - Enforce string truncation size limits (by @QiuLsG)
- **#13527** - Gate org credits routes behind MANAGE_BILLING (by @ntindle)
- **#14618** - Give a second card the credential the expert was granted (by @Pwuts)
- **#14621** - Make Remy a skills-only expert (by @0ubbe)
- **#14519** - Remove legacy HS256 verification path (by @kcze)
- **#14614** - Align autogpt_libs PyJWT constraint with the backend (by @kcze)
- **#14627** - Await the Add buttons in the MarketplaceStep test (by @Pwuts)
- **#14628** - Keep the copilot system prompt fresh after a Langfuse publish (by @Pwuts)
- **#14631** - Keep acronym casing in marketplace skill titles (by @Pwuts)
- **#14634** - Hide the pooled org balance on /home from members without MANAGE_BILLING (by @Pwuts)
- **#14633** - Make the second-opener-waits desktop test deterministic (by @Pwuts)
- **#14641** - Stop the expert-kickoff tests inheriting a stale kickoff latch (by @Pwuts)
- **#14218** - Park unrestorable scheduler jobs instead of deleting them (by @Pwuts)
- **#14643** - Prevent localStorage errors on restricted WebViews (by @sentry[bot])
- **#14518** - Generate local secrets at bootstrap instead of shipping them (by @kcze)
- **#14670** - Desktop stream fails to start since the VNC stack runs as root (by @kcze)
- **#14667** - Offer the reconnect card when a credential cannot be refreshed (by @Bentlybro)
- **#14662** - Give the sandbox the credential the connect card shows as connected (by @Bentlybro)
- **#14686** - Queue a message on a plain-HTTP origin without crashing the chat (by @Bentlybro)
- **#14687** - Read the host from a URL whose scheme is uppercase (by @Pwuts)
- **#14689** - Stop reporting a user's cancel as an assistant error (by @Pwuts)
- **#14679** - Let users enter host-scoped and username/password credentials (by @Pwuts)
- **#14709** - Allow skipping expert job titles (by @0ubbe)
- **#14698** - Restart the desktop stream when x11vnc died behind a live noVNC (by @kcze)
- **#14699** - Stop the desktop stream when the box pauses (by @kcze)
- **#14684** - Deliver a Stop to every executor pod, not one of them (by @Pwuts)
- **#14685** - Deliver a graph-run cancel to every pod, not one of them (by @Pwuts)
- **#14710** - Keep a non-default port on a host-scoped credential's host (by @Pwuts)
- **#14712** - Generate secrets in the Compose installer and add an upgrade path (by @kcze)

### Documentation

- **#14335** - Publish new SECURITY.md (by @Pwuts)
- **#14305** - Post pr-test screenshots as comment attachments, not repo branches (by @Pwuts)
- **#14387** - Point the Forge quickstart link at a file that exists (by @firekou)
- **#14470** - Regenerate block docs for Gemini 3.8 Flash (#14422 skipped it) (by @Pwuts)
- **#14483** - Regenerate block docs for the AutoPilot tool names #14424 added (by @Pwuts)
- **#13998** - Fix dead feature-requests link in README (by @putramkti)
- **#14236** - Refresh agent guidance paths (by @Ricky-7-Yan)
- **#14447** - Refresh manual guides and links (by @ntindle)
- **#13048** - Document integration icon, auth patterns, auto-discovery, docs sync, and test patterns (by @ntindle)
- **#14539** - Align AGENTS.md matcher with suite (no jest-dom) (by @ntindle)

### Dependencies & Maintenance

- **#14720** - Bump anyio to 4.15.1 for CVE-2026-63374 (by @Pwuts)
- **#14348** - Drop the trailing blank line black rejects in org_credit_test (by @Bentlybro)
- **#14366** - Record agent and model attribution (by @Torantulino)
- **#14396** - Remove the four dormant claude-code-action workflows (by @Pwuts)
- **#14450** - Name the icon library the frontend actually uses (by @Pwuts)
- **#14455** - Widen the AutoPilot tool-schema budget to 65,000 chars (by @Pwuts)
- **#14484** - Raise the AutoPilot tool-schema budget to 67,651 chars for the in-flight expert PRs (by @Pwuts)
- **#14495** - Refresh the expert writing-style baseline (by @Pwuts)
- **#14278** - Make Classic Python checks dispatch safe (by @ntindle)
- **#14067** - Document the GitHub review bot as an option in PR skills (by @ntindle)
- **#14277** - Register scored workflow dispatches (by @ntindle)
- **#14279** - Shard tests with fail-closed reports (by @ntindle)
- **#14536** - Reject stale skip allowances across shard reports (by @ntindle)
- **#14280** - Shard integration tests with verified coverage (by @ntindle)
- **#14502** - Read and write block docs as UTF-8 regardless of platform (by @Bentlybro)
- **#14606** - Let secret-gated skips pass on fork PRs (by @Pwuts)
- **#14630** - Seed a fixture roster in tests, never the real one (by @Pwuts)
- **#14632** - Credits authz invariants see the whole app and assert instead of exempt (by @Pwuts)
- **#14644** - The payment-method route opens the caller's own billing portal (by @Pwuts)
- **#14647** - Fix what stops Dependabot PRs from opening or passing CI (by @kcze)
- **#14651** - Bump @chromatic-com/storybook from 4.1.2 to 4.1.3 in /autogpt_platform/frontend (by @dependabot[bot])
- **#13274** - Bump the development-dependencies group across 1 directory with 3 updates (by @dependabot[bot])
- **#14562** - Bump the production-dependencies group across 1 directory with 43 updates (by @dependabot[bot])
- **#13277** - Bump cryptography from 46.0.5 to 50.0.1 in /autogpt_platform/autogpt_libs (by @dependabot[bot])
- **#13279** - Bump faker from 38.3.0 to 40.39.0 in /autogpt_platform/backend (by @dependabot[bot])
- **#12038** - Bump groq from 0.30.0 to 1.7.0 in /autogpt_platform/backend (by @dependabot[bot])
- **#12045** - Bump aiodns from 3.6.1 to 4.0.4 in /autogpt_platform/backend (by @dependabot[bot])

### Refactoring

- **#14343** - Refine team and expert pages (by @Abhi1992002)
- **#14210** - Narrow the external-action soul rule to what is enforced (by @Pwuts)
- **#14456** - Move the API-key routes into their own feature module (by @Pwuts)
- **#14471** - Move the copilot-skills routes into their own feature module (by @Pwuts)
- **#14473** - Move the schedule routes into their own feature module (by @Pwuts)
- **#14474** - Move the execution routes into features/graph_executions (by @Pwuts)
- **#14475** - Move the graph routes into their own feature module (by @Pwuts)
- **#14476** - Move the credit ledger routes into features/billing/credits (by @Pwuts)
- **#14477** - Move the subscription and Stripe routes into features/billing/subscriptions (by @Pwuts)
- **#14478** - Move the block and file-upload routes into features/blocks (by @Pwuts)
- **#14629** - Stop declaring tools an automation session cannot call (by @Pwuts)
- **#14479** - Move the onboarding routes into features/onboarding (by @Pwuts)
- **#14480** - Move the user-settings routes into features/user and delete v1.py (by @Pwuts)
- **#14481** - Give the four colliding response models unambiguous names (by @Pwuts)
- **#14637** - Match the trial card to the plan cards and billing cards (by @0ubbe)
- **#14648** - Delete find_block, the tool nothing calls (by @ntindle)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @albatrossflyon-coder
- @chelsealong
- @firekou
- @Ftgn-dpA
- @gaoanze888
- @putramkti
- @QiuLsG
- @Ricky-7-Yan
- @soroush5

As well as our returning contributors:
- @0ubbe
- @Abhi1992002
- @Bentlybro
- @kcze
- @ntindle
- @Otto-AGPT
- @pony-maggie
- @Pwuts
- @Torantulino

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.8.0
```

Or download it directly from the  
[Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.7.4...autogpt-platform-beta-v0.8.0).

---

## 📝 **Feedback and Issues**
If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.8.0` · 2026-09-19 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
