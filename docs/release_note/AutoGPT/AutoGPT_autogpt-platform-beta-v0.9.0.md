---
title: "AutoGPT autogpt-platform-beta-v0.9.0"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "autogpt-platform-beta-v0.9.0"
version: "autogpt-platform-beta-v0.9.0"
published: "2026-10-23"
type: "pre"
lang: "en"
summary: "#15824 - Add measures and admin tools against multi-account abuse (by @Pwuts) · #14553 - Self-host from the Docker Hub image, with a Windows installer (by @ntindle)"
---

# AutoGPT autogpt-platform-beta-v0.9.0

## 🔥 What's New?

### New Features

- **#15824** - Add measures and admin tools against multi-account abuse (by @Pwuts)
- **#14553** - Self-host from the Docker Hub image, with a Windows installer (by @ntindle)
- **#14981** - Every block declares its effect; Auto judges cheap outward actions and asks first on costly ones (by @Pwuts)
- **#15675** - Add admin users page to look up, ban and impersonate a user, with rate limits folded in (by @Pwuts)
- **#15859** - Send the browser tools' traffic through an egress proxy (by @ntindle)
- **#15215** - Redesign usage limits and review upgrade charges (by @Torantulino)
- **#15388** - AutoPilot turns pause at their limits instead of dying, and Keep going picks them up (by @ntindle)
- **#15390** - Resume or send a chat's turn when the budget resets (by @ntindle)
- **#15403** - Add send at reset, the out-of-budget panel for Max, and a running-low hint (by @ntindle)
- **#15585** - Add voice mode to the + menu; model and token usage open as dialogs (by @0ubbe)
- **#15115** - Add per-expert default approval mode for new web chats (by @Abhi1992002)
- **#14551** - Distill private account and Expert skills during dreaming (by @ntindle)
- **#14960** - Add durable per-scope schedule registry for dream and community jobs with lifecycle hooks and backfill (by @ntindle)
- **#14961** - Add durable DreamPass record written from the sync and batch dream paths (by @ntindle)
- **#14970** - Add one guard against overlapping dream passes and a stop path built on the DreamPass record (by @ntindle)
- **#15374** - A scheduled chat says once why its run was skipped (by @ntindle)
- **#15375** - Pause a scheduled chat that keeps failing the same way, and say why (by @ntindle)
- **#15377** - Alert the owner when a scheduled chat pauses, list it on Home, resume it on reconnect (by @ntindle)
- **#15400** - Run a scheduled chat less often from its usage-limit note (by @ntindle)
- **#14865** - Serve the swap proxy from a service that exposes only its two calls (by @kcze)
- **#14868** - Hand boxes behind the swap proxy placeholders, not tokens (by @kcze)
- **#15874** - Add multi-choice, answer review, full keyboard use and touch sizing for expert onboarding cards (by @0ubbe)
- **#15836** - Hire the whole recommended team in one click on the hire step (by @Pwuts)
- **#12652** - Show a changelog notification for new releases (by @ntindle)
- **#15850** - Send Postmark email deliveries, opens, clicks and bounces to PostHog (by @kcze)
- **#15307** - Add Claude Haiku 5.5 to the LLM catalog (by @ntindle)
- **#15566** - Add Meta Muse Spark Open model (by @ntindle)
- **#15023** - Add a Cookie settings link to signed-out pages (by @kcze)
- **#15483** - Read PostHog flags from one project while dev reports to its own (by @kcze)

### Enhancements

- **#15564** - The chat's approval gate answers the review pauses of workflows it started (by @Pwuts)
- **#15701** - A banned account is refused by the API and its scheduled runs stop (by @Pwuts)
- **#15906** - Show people who don't own a workflow the shared version of it (by @ntindle)
- **#15982** - Keep each run in an org its runner belongs to (by @ntindle)
- **#15949** - Require a shared key on calls between the backend's internal services (by @ntindle)
- **#15951** - Start every Claude Code CLI from an allow-listed environment (by @ntindle)
- **#15926** - Apply the outbound address rules to every IPv6 form of a blocked address (by @ntindle)
- **#15986** - Send the Ollama blocks' traffic through the egress proxy (by @ntindle)
- **#15959** - Pre-screen email addresses before sign-up and auth sends (by @Bentlybro)
- **#14869** - Declare each provider's content hosts so the swap proxy scrubs them (by @kcze)
- **#14872** - Hold each box to the run's ceiling on connected accounts (by @kcze)
- **#14874** - Cap the swap proxy's credentialed requests per box and per user (by @kcze)
- **#15725** - Let Otto view workspace and rendered images (by @ntindle)
- **#15837** - Keep the suggested first tasks on Home until each is hidden (by @Pwuts)
- **#15703** - Cap and cache public store search embeddings (by @Pwuts)
- **#15208** - Reset usage on trial conversion to Pro or Max (by @Torantulino)
- **#15530** - Count only paying subscribers as subscribed, in PostHog and MailerLite (by @kcze)
- **#15396** - Check the AutoPilot allowance wherever a turn starts, bill AutoPilot block turns to credits past it, and say which limit decides (by @ntindle)
- **#15436** - Default title and classifier models to Claude Haiku 5.5 (by @ntindle)
- **#15383** - The frontend can read its feature flags from the backend (by @Pwuts)
- **#15583** - PostHog answers feature flags by default, and the browser asks the backend for them (by @Pwuts)
- **#15609** - Every PostHog event carries the revision that sent it (by @Pwuts)
- **#15604** - Group each AutoPilot reply's model calls into one PostHog trace (by @kcze)
- **#15605** - Send AutoPilot's tool calls and replies to PostHog as AI traces (by @kcze)
- **#15852** - Flag our team and admin impersonation in PostHog (by @kcze)
- **#15690** - Correlate Sentry errors with PostHog (by @ntindle)
- **#15475** - Log when a queued turn starts, is cancelled, or gives its slot back (by @Pwuts)
- **#15003** - Refresh warm context on follow-up turns (by @ntindle)
- **#14977** - Add dream pass leases with renewal, a reaper for expired passes, retention, and in-flight batch cancellation (by @ntindle)
- **#15010** - Protect recently recalled memories from dream demotions (by @ntindle)
- **#15020** - Dream facts cite their sources, and a forget reaches what was derived from them (by @ntindle)
- **#14941** - Read the three chat-rule keys in one pipelined MGET (by @Pwuts)
- **#15683** - Skip node form re-renders on drag and edge writes in the builder (by @Abhi1992002)
- **#15689** - Batch and dedupe builder execution updates (by @Abhi1992002)
- **#15711** - Use by-id node reads, memoized viewers and ref-driven beads in the builder (by @Abhi1992002)
- **#15726** - Isolate canvas renders, batch loads and memoize the block menu in the builder (by @Abhi1992002)
- **#15678** - Keep Streamdown props stable while streaming (by @Abhi1992002)
- **#15679** - Keep pending-answer contexts and actions stable (by @Abhi1992002)
- **#15684** - Stop the app chrome re-rendering on URL-param writes (by @Abhi1992002)
- **#15681** - Stop re-subscribing to execution events per render in the library (by @Abhi1992002)
- **#15688** - Highlight a streaming code block incrementally (by @Abhi1992002)
- **#15685** - Tick the thinking timer from one shared clock (by @Abhi1992002)
- **#15710** - Stop reprocessing the whole chat on each render (by @Abhi1992002)
- **#15709** - Select UI store fields and resize once per frame in the copilot (by @Abhi1992002)
- **#15712** - Lazy-load mermaid and shiki, and profile 1 in 10 sessions (by @Abhi1992002)
- **#15715** - Render transcript rows through a memoized MessageRow (by @Abhi1992002)
- **#15713** - Re-render only the new row when a run is added to the library (by @Abhi1992002)
- **#15717** - Stop waking snapshot subscribers on text tokens (by @Abhi1992002)
- **#15716** - Keep the composer still while a reply streams (by @Abhi1992002)
- **#15719** - Stop redrawing session rows on each list poll (by @Abhi1992002)
- **#15740** - Virtualize the copilot transcript (by @Abhi1992002)

### UI/UX Improvements

- **#15500** - Mobile polish for chat and sidebar, plus team and expert page redesign (by @0ubbe)
- **#15545** - Mobile chat input polish, camera capture and composer overflow menu (by @0ubbe)
- **#15769** - Smooth chat interactions on phones (by @0ubbe)
- **#15876** - Restyle login and signup to match the app, and drop costly animations (by @0ubbe)
- **#15106** - Delete the classic layout and serve the sidebar layout to everyone (by @Abhi1992002)
- **#15882** - Show image thumbnails in the chat input and chat (by @0ubbe)
- **#15401** - Add the in-chat Paused card for turns that land at a limit (by @ntindle)
- **#15692** - Close the mobile nav on navigation and speed up its slide (by @0ubbe)
- **#14370** - Prevent tooltips from blocking mouse interaction (by @Torantulino)
- **#15590** - Say "workflows" in the billing and usage-limit copy merged after the rename (by @ntindle)
- **#15704** - Drop the old "AutoPilot" name from the usage-limit copy (by @ntindle)
- **#15768** - Name Otto or the expert where screens still said AutoPilot or Copilot (by @ntindle)

### Bug Fixes

- **#15504** - Preserve LinkedIn and TikTok in block names (by @ntindle)
- **#15501** - Refresh Needs you after answering questions (by @ntindle)
- **#15529** - Send trial-ending notice for an early trial_will_end event (by @kcze)
- **#15184** - Give new free trials one $20 CoPilot budget (by @Torantulino)
- **#15547** - A second tap right after Send no longer stops the message (by @Pwuts)
- **#15548** - AutoPilot stops asking about version checks, Expert hand-offs and work the user already asked for (by @Pwuts)
- **#15589** - Keep a deleted skill deleted (by @ntindle)
- **#15594** - List HubSpot in the MCP integration catalog (by @ntindle)
- **#15587** - A long or blank search no longer breaks the marketplace search page (by @Pwuts)
- **#15596** - Leave a skill review that another run may still be making alone (by @ntindle)
- **#15574** - The app sidebar keeps the user's open/closed choice across reloads (by @Pwuts)
- **#15580** - A retired Jev pin runs on jev-latest and logs an ERROR (by @Pwuts)
- **#15602** - Release a cluster lock even after a failed refresh (by @ntindle)
- **#15598** - Check the skill limit before saving a new learned skill (by @ntindle)
- **#15597** - Explain why a skill stopped after its source was removed (by @ntindle)
- **#15599** - Save a skill package as one change (by @ntindle)
- **#15612** - Preserve translated button labels during checkout (by @ntindle)
- **#15610** - Keep onboarding brain dump visible on short screens (by @ntindle)
- **#15582** - Send attached files from the expert side-panel chat and show the message at once (by @Abhi1992002)
- **#15579** - Stop chat delete waiting on best-effort cleanup (by @Abhi1992002)
- **#15107** - Return compact Conductor wait/poll output by default (by @Abhi1992002)
- **#15619** - Proactively refresh OAuth credentials before expiry (by @Otto-AGPT)
- **#15639** - Maintain idle OAuth refresh grants daily (by @ntindle)
- **#15647** - Lock every rotating OAuth refresh, and keep Notion's and Todoist's refresh tokens (by @Pwuts)
- **#15632** - Make OAuth refresh-token rotation atomic under concurrent refreshes (by @goingforstudying-ctrl)
- **#15150** - Default Graphiti reranker to gpt-4.1-mini (by @ntindle)
- **#15656** - Migrate Graphiti extraction and reranking to GPT-6 Luna (by @ntindle)
- **#15677** - Preserve concrete memory details in Luna extraction (by @ntindle)
- **#15613** - Refuse a template from a pre-credentials run with a 400, not a 500 (by @Pwuts)
- **#15654** - Show static Agent Output values on public share links (by @ntindle)
- **#15653** - Handle long UTF-8 upload names safely (by @ntindle)
- **#15222** - Start each morning briefing in a new Otto chat (by @Torantulino)
- **#15649** - Keep IME input and the caret working in text fields that rewrite what the user types (by @kcze)
- **#15592** - Keep a send handed to a new chat until the request setting it settles (by @ntindle)
- **#15593** - Charge a credit-billed turn as its cost lands (by @ntindle)
- **#15595** - Serialize at-reset joins and cancels across replicas (by @ntindle)
- **#15591** - Fail a send at reset the server didn't set, bound the draft cache, ease far-off polling (by @ntindle)
- **#15672** - Render file previews within a bounded size and concurrency cap (by @Pwuts)
- **#15676** - Accounts without an active plan can't upload, preview, publish or connect tools (by @Pwuts)
- **#15485** - Delete onboarding voice recordings once transcribed (by @kcze)
- **#15337** - Keep the error code in the scheduled-turn alert so a failed routine says why (by @Pwuts)
- **#15603** - Keep checkout buttons busy until the page leaves for Stripe (by @kcze)
- **#15387** - Deliver mid-task messages to ChatGPT, and name the account and reset time on its limits (by @ntindle)
- **#15336** - Treat a missing session as no pending messages instead of an unhandled rejection (by @Pwuts)
- **#15643** - A delegated Expert chat starts on the mode its parent chat's gate enforces (by @Pwuts)
- **#15641** - Plot admin accuracy trends oldest-first and only count scored days (by @ntindle)
- **#15335** - List graph versions with their sub-graphs so the credentials schema matches the single-graph read (by @Pwuts)
- **#15211** - Acknowledge Stripe refunds and disputes of subscription invoices instead of failing the webhook (by @Pwuts)
- **#15178** - Skip RSS polling sleep in run-once mode (by @xjsns346)
- **#15324** - Pin resume identity and rebuild credential masks (by @ntindle)
- **#15232** - A URL that is not an MCP server gets a one-line 400, not its 404 page as a 502 (by @Pwuts)
- **#15051** - The "Waiting for you" box leaves once its last card is answered (by @Pwuts)
- **#15231** - Stop logging the password in the login page object (by @Pwuts)
- **#15137** - Stop re-embedding unchanged multi-category blocks in every process (by @Pwuts)
- **#15698** - Builder search history updates only the caller's own entry (by @Pwuts)
- **#15129** - Support large ExecuteCodeBlock variables and JavaScript NaN (by @Bentlybro)
- **#15423** - Clear the signup page's loading-reset timer on unmount (by @Pwuts)
- **#15568** - Remove the tab title counter and re-notify chats once opened (by @kcze)
- **#15490** - Keep Google block data out of Langfuse traces and session replays (by @kcze)
- **#15705** - Stop sending emails and IPs to Sentry and mask session replay by default (by @kcze)
- **#15567** - Stop sending a previous account's notifications after switching accounts (by @kcze)
- **#15351** - Keep the traceback when a TruncatedLogger call passes exc_info (by @Pwuts)
- **#15050** - A team change or Soul edit asks the user once, and its card names the teammate (by @Pwuts)
- **#15747** - Turn off graphiti-core and mem0 vendor telemetry by default (by @kcze)
- **#15750** - Load Tally's script only when someone opens the feedback form (by @kcze)
- **#15011** - Rank connected MCP and first-party tools (by @Bentlybro)
- **#15080** - Make chat session create idempotent so a lost response can't orphan a session (by @Bentlybro)
- **#14496** - Prefer sub_heading over the long description on link-preview cards (by @Pwuts)
- **#14887** - AutoPilot runs a block with an optional credentials field when the user has no key (by @Pwuts)
- **#15756** - Resetting onboarding clears the wizard draft with a JSON null (by @Pwuts)
- **#15758** - Refuse unknown webhook providers and bad email links with 404/400, not 500 (by @Pwuts)
- **#15752** - DataFast waits for consent on /tour and stops sending workflow names (by @kcze)
- **#15575** - Keep the memory inspector's dream result after the job ends (by @ntindle)
- **#15499** - Surface capabilities hidden by kind filters (by @Bentlybro)
- **#15123** - Deny every tool outside the session's allowed set, and fail CI on an unclassified CLI built-in (by @Pwuts)
- **#15325** - Execute transfers atomically and re-check ownership (by @ntindle)
- **#14972** - Use one recall policy so a forgotten fact is never recalled again (by @ntindle)
- **#15748** - Load Google Analytics only when a measurement ID is set (by @kcze)
- **#15062** - A burst of approval answers runs in one turn that is never dropped (by @Pwuts)
- **#15327** - Don't re-charge REVIEW/RUNNING nodes on re-dispatch (by @ntindle)
- **#15468** - Price Sonnet 5.5 cache reads at Anthropic's $0.10 per million (by @ntindle)
- **#15798** - Preserve tentative status and episode reference time in recall (by @ntindle)
- **#15018** - Keep the first turn's memory block out of stored history (by @ntindle)
- **#15815** - Refuse a refund of an unknown top-up with 404, not 500 (by @Pwuts)
- **#15816** - Let a trigger preset's webhook cross the database-manager RPC (by @Pwuts)
- **#15720** - Retain Codex usage for interrupted turns (by @ntindle)
- **#15751** - Load YouTube embeds only after marketing consent (by @kcze)
- **#15765** - Stop asking PostHog over the network about flags it doesn't have (by @ntindle)
- **#15787** - Browser and Next.js Sentry events mask URLs the way backend events do (by @Pwuts)
- **#15814** - Keep saving onboarding after a save the server applied but never answered (by @Pwuts)
- **#15345** - A failed renewal only cuts access on its own subscription, and wallet payments can resume (by @Bentlybro)
- **#15233** - Sign brain-dump recording links through IAM so hosted pods can hand them out (by @Pwuts)
- **#15873** - Keep answered questions readable in the chat history (by @0ubbe)
- **#15887** - Give the onboarding card's chat answers their own name so dev builds again (by @Pwuts)
- **#15884** - Load the block registry when the database manager starts (by @Pwuts)
- **#15562** - Stop refusing sub-agent briefs and to-dos that mention sudo or subprocess (by @Pwuts)
- **#15835** - Escape the auditor's ruling everywhere the consulting expert's model reads it (by @ntindle)
- **#15646** - Drift reports name the fields that drifted (by @Pwuts)
- **#15834** - Finish the memory stack's review follow-ups (by @ntindle)
- **#15910** - Hand chat text to the Claude Code CLI exactly as written (by @ntindle)
- **#15860** - Drop the virtualizer's scroll-end update once the transcript unmounts (by @Pwuts)
- **#15936** - Set every Google Consent Mode default before the banner answers (by @kcze)
- **#15928** - Pass the liveness probe before loading the block registry (by @Pwuts)
- **#15940** - Keep the website visitor's PostHog id when they sign up (by @kcze)
- **#15092** - Bill SDK provider base costs in every process, on platform keys only (by @Bentlybro)
- **#15927** - Leave the brain dump on the first Skip click, and only once (by @Pwuts)
- **#15965** - Check a webhook delivery's signature before loading its owner's credentials (by @ntindle)
- **#15966** - Serve the API servers' Prometheus metrics on internal ports (by @ntindle)
- **#15631** - Charge orchestrator tool calls before they run (by @qxyuan853)
- **#15935** - Lock the approval mode until the chat knows its session and expert (by @ntindle)
- **#15957** - A left-out expert's tick takes a mouse click again (by @Pwuts)
- **#15918** - Send the same message again once the last one was answered, stopped or failed (by @Pwuts)
- **#15633** - Price run_block with the resolved credentials (by @qxyuan853)
- **#15969** - Check a signed-in route's token before reading the request body (by @ntindle)
- **#15967** - Turn off the Better Auth endpoints nothing calls (by @ntindle)
- **#15981** - Only unverify a user on a Postmark bounce that means the address failed (by @Torantulino)
- **#15363** - Refuse an unsafe redirect_uri on the integration setup wizard (by @insuffer)
- **#15552** - Correct transactional email copy, amounts and mobile layout (by @Torantulino)
- **#15974** - Gate notification mail on a verified auth identity (by @Torantulino)
- **#15953** - Suppress transactional emails to preview addresses (by @Torantulino)
- **#15932** - Record why the brain-dump gate rejected a take, and retry it when its judge failed (by @Pwuts)
- **#15948** - Serve memory calls in scripted journeys (by @ntindle)
- **#15931** - Keep a message sent right after Stop on screen until its row is stored (by @Pwuts)
- **#15960** - Cap the typed brain dump at the backend's 20,000-character limit (by @Pwuts)

### Documentation

- **#15502** - Tell coding agents user-facing copy says "workflow", not "agent" or "graph" (by @itsababseh)
- **#15611** - Lead the README with Experts and Otto (by @ntindle)
- **#15682** - Link the README straight to the marketplace and docs (by @ntindle)
- **#15968** - Bring the OSS Scanner threat model's scope, flags and severity guide up to date (by @ntindle)
- **#15556** - Changelog v0.6.67–v0.6.69 (1 of 6) (by @itsababseh)
- **#15557** - Changelog v0.6.70–v0.7.1 (2 of 6) (by @itsababseh)
- **#15558** - Changelog v0.7.2–v0.7.4 (3 of 6) (by @itsababseh)
- **#15559** - Changelog v0.8.0 (4 of 6) (by @itsababseh)
- **#15560** - Changelog v0.8.1–v0.8.2 (5 of 6) (by @itsababseh)
- **#15561** - Changelog v0.8.3–v0.8.4 (6 of 6) (by @itsababseh)

### Dependencies & Maintenance

- **#15746** - Upgrade React to 19 (by @Abhi1992002)
- **#15984** - Bump Next.js to 15.5.28 for the October 14 security release (by @Bentlybro)
- **#15888** - Ship Node 24.22.1 in the Docker images, refusing the compromised eMudhra CAs (by @Pwuts)
- **#15934** - Run workflows on patched Node 24.22.1 (CVE-2026-111497 Brotli RCE) (by @0ubbe)
- **#15864** - Update certifi and pillow (by @kcze)
- **#15741** - Bump pyasn1 to 0.6.4 in the libs and backend lockfiles (by @kcze)
- **#15800** - Bump the security-updates group across 1 directory with 10 updates (frontend) (by @dependabot[bot])
- **#15522** - Bump cryptography from 50.0.1 to 50.0.2 in backend (by @dependabot[bot])
- **#15521** - Bump cryptography from 50.0.1 to 50.0.2 in autogpt_libs (by @dependabot[bot])
- **#15505** - Bump pyjwt from 2.15.0 to 2.15.1 in backend (by @dependabot[bot])
- **#15510** - Bump pyjwt from 2.15.0 to 2.15.1 in autogpt_libs (by @dependabot[bot])
- **#15516** - Bump google-auth-oauthlib from 1.4.1 to 1.5.0 in backend (by @dependabot[bot])
- **#15508** - Bump google-api-python-client from 2.200.0 to 2.201.0 in backend (by @dependabot[bot])
- **#15235** - Bump the production-dependencies group across 1 directory with 4 updates in libs (by @dependabot[bot])
- **#15524** - Bump requests from 2.32.5 to 2.34.2 in backend (by @dependabot[bot])
- **#15519** - Bump better-auth from 1.6.22 to 1.6.33 in frontend (by @dependabot[bot])
- **#15514** - Bump aiohttp from 3.14.3 to 3.14.5 in backend (by @dependabot[bot])
- **#15506** - Bump ruff from 0.16.10 to 0.17.0 in autogpt_libs (by @dependabot[bot])
- **#15507** - Bump the development-dependencies group across 1 directory with 2 updates in backend (by @dependabot[bot])
- **#15572** - Revert: read PostHog flags from each deployment's own project again (by @Pwuts)
- **#15799** - Retire mature product flags (by @ntindle)
- **#15964** - Remove the ENABLE_AUTH setting (by @ntindle)
- **#15851** - Stop sending in-app events to DataFast (by @kcze)
- **#15749** - Remove Vercel Web Analytics, keep Speed Insights (by @kcze)
- **#15865** - Rewrite the copilot prompt text to say each rule once (by @Bentlybro)
- **#14955** - Introduce MemoryScope and thread it through the memory code (by @ntindle)
- **#14957** - Price dream inference from the LLM catalog and fix structured output on the native Anthropic path (by @ntindle)
- **#14958** - Add one inference context, cost record and trace for background LLM calls (by @ntindle)
- **#14953** - Run dream tests without the test server and drop unreachable dream paths (by @ntindle)
- **#15669** - Add perf dev tools for re-renders, JS CPU and heap (by @Abhi1992002)
- **#15621** - Resync drifted OpenRouter prices for six LLMs (by @ntindle)
- **#15306** - Resync drifted OpenRouter prices for DeepSeek V4.1 Flash and Kimi K2.6 (by @ntindle)
- **#15845** - Resync Mistral Large 4 OpenRouter price in the LLM catalog (by @ntindle)
- **#15686** - Remove the unused email-update API route (by @Pwuts)
- **#15697** - Remove the unused chat health route (by @Pwuts)
- **#15818** - Delete backend functions and classes nothing calls (by @Pwuts)
- **#15253** - Delete the unused contextual RunAgentInputs copy (by @Pwuts)
- **#15755** - Delete the unused icons and boilerplate docs from the legacy icon module (by @Pwuts)
- **#15776** - Share one empty-state illustration across the library view's empty tabs and delete its unused components (by @Pwuts)
- **#15777** - Delete the unused helpers from the builder tutorial module (by @Pwuts)
- **#15784** - Delete the unused barrels and helpers from the InputRenderer module (by @Pwuts)
- **#15821** - Delete the builder's unused files, helpers and tutorial constants (by @Pwuts)
- **#15829** - Delete the shared components' unused files (by @Pwuts)
- **#15925** - Delete the unused page components and helpers outside components/ (by @Pwuts)
- **#15929** - Delete the functions nothing calls from the shared utility modules (by @Pwuts)
- **#15919** - Replace the legacy dropdown-menu module with the design system's DropdownMenu (by @Pwuts)
- **#15921** - Build the admin and settings section navigation from one shared sidebar and mobile menu (by @Pwuts)
- **#15780** - Share one tweet-fetching helper across the three Twitter timeline blocks (by @Pwuts)
- **#15785** - Share the Revid API calls of the three AI video blocks through one base class (by @Pwuts)
- **#15915** - Share the video blocks' media-storing methods through one mixin (by @Pwuts)
- **#15825** - Build each Apollo block test fixture once (by @Pwuts)
- **#15588** - Fix a flaky chat-reconnect test that ejected PRs from the merge queue (by @Pwuts)
- **#15617** - Wait for the typed search in the MarketplaceStep attach test (by @Pwuts)
- **#15687** - Stop the OAuth refresh lock test flaking in the merge queue (by @ntindle)
- **#15338** - Request the app stack in the search tests that need it, and drop the dead graph_cleanup overrides (by @Pwuts)
- **#15702** - Keep the test server's scheduler jobs out of the platform database (by @Pwuts)
- **#15352** - Find the chat's Stop button by its exact name in the copilot tests (by @Pwuts)
- **#15422** - Stop the trace-export retry test accepting a late attempt (by @Pwuts)
- **#15378** - Keep the feature-flag tests from sending events to PostHog (by @Pwuts)
- **#15371** - Write test fixture users to a fresh database even while their cached lookup is warm (by @Pwuts)
- **#14962** - Cover the spend card's $0 chat ceiling in tests (by @Pwuts)
- **#15372** - run_block_test.py runs on its own without a backend stack (by @Pwuts)
- **#14963** - The skills-catalog tests refuse to empty a database that holds listings (by @Pwuts)
- **#15759** - Stop the e2e and CI flakes from GC stalls, keep-alive resets, a refused first send and partial codecov verdicts (by @Pwuts)
- **#15792** - Look for the workspace file inside the picker in attachment tests (by @kcze)
- **#15452** - Pin the credits rate-limit test's clock so window boundaries can't flake it (by @ntindle)
- **#15902** - Start smoke e2e users with the tab intros already seen (by @Pwuts)
- **#15938** - Wait on the composer and the post-reply settle in attachment tests (by @kcze)
- **#15962** - Settle each test's open requests before its file tears down (by @Pwuts)
- **#15963** - Stop two copilot tests failing on slow CI runners (by @Pwuts)
- **#15979** - Keep garbage collection out of the dream tests' timed runs (by @Pwuts)
- **#15636** - Pin email rate limit window in a frontend test (by @mangod12)
- **#15616** - Run the copilot journeys on the new chat stream runtime in CI (by @Pwuts)
- **#15880** - Keep `cla: signed` on a push until CLA-assistant reports on the new head (by @Pwuts)
- **#15945** - Pin workflow actions and restore MinIO CI (by @0ubbe)
- **#15973** - Install Playwright's Chromium without apt, so a slow Ubuntu mirror can't time out CI (by @Pwuts)
- **#15978** - Pull full-stack CI's service images with a retry that outlasts a Docker Hub refusal (by @Pwuts)
- **#15983** - Cache the e2e seed dump in GHCR instead of the Actions cache (by @Bentlybro)

### New Blocks

- **#15861** - Add "Update Notion page properties" and "Append to Notion page" blocks (by @Pwuts)
- **#15838** - Add a block that emails the account owner their own result through the platform's mail, with no sign-in (by @Pwuts)

---

## 🎉 Thanks to Our Contributors!

A huge shoutout to everyone who contributed to this release. Special thanks to our new contributors:

- @xjsns346
- @qxyuan853
- @insuffer

As well as our returning contributors:

- @ntindle
- @Pwuts
- @kcze
- @Abhi1992002
- @0ubbe
- @Torantulino
- @Bentlybro
- @itsababseh
- @Otto-AGPT
- @mangod12
- @goingforstudying-ctrl

---

## 📥 How to Get This Update

To update to this version, run:

```bash
git pull origin autogpt-platform-beta-v0.9.0
```

Or download it directly from the [Releases page](https://github.com/Significant-Gravitas/AutoGPT/releases).

For a complete list of changes, see the [Full Changelog](https://github.com/Significant-Gravitas/AutoGPT/compare/autogpt-platform-beta-v0.8.4...autogpt-platform-beta-v0.9.0).

---

## 📝 **Feedback and Issues**

If you encounter any issues or have suggestions, please [join our Discord](https://discord.gg/autogpt) and let us know!

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `autogpt-platform-beta-v0.9.0` · 2026-10-23 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
