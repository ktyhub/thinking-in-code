---
title: "firecrawl v2.11.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.11.0"
version: "v2.11.0"
published: "2026-06-19"
type: "minor"
lang: "en"
---

# firecrawl v2.11.0

# Firecrawl v2.11.0
 
## Improvements
 
- **Firecrawl Research Index** — Added a specialized index for agentic AI/ML research: search across 3M+ arXiv papers and the GitHub code behind them (issues, merged PRs, and READMEs, refreshed daily), fetch a paper's details or related work, and check claims against full text. It has state-of-the-art recall on arXivQA, outperforming the next best provider by 18% at comparable cost. Available via the API, SDKs, MCP, and CLI.
- **Keyless access for core endpoints** — Use `/scrape`, `/search`, `/interact`, and `/parse` without an API key from official MCP, CLI, and SDK clients.
- **Automatic PII redaction** — Added a `redactPII` option that strips personal and sensitive data like names, emails, phone numbers, addresses, and secrets out of scraped content before it's returned.
- **`deterministicJson` format** — Added a format that returns structured JSON without running an LLM on every request. Firecrawl generates a reusable extractor for your schema and caches it per site, so repeat scrapes are cheaper and return consistent results.
- **Video discovery on any page** — Expanded the `video` format to find videos on any page, not just supported providers like YouTube, returning each video's URL, title, thumbnail, duration, and more.
- **Attach your own browser automation** — Added a CDP WebSocket URL (`cdpUrl`) to browser session responses, so you can drive a live Firecrawl browser session directly with Playwright, Puppeteer, or any other CDP client.
- **Smarter monitor alerts** — Added a `goal` to monitors so an LLM judges each detected change as meaningful or noise against what you actually care about, cutting alert spam and surfacing the changes that matter first in summary emails.
- **Field-level JSON diffs for monitors** — Monitors that scrape in JSON mode now compare the actual field values between runs instead of the rendered page, so you see exactly which fields changed rather than noise from layout shifts.
- **Monitor email confirmation** — Added an opt-in confirmation flow with one-click unsubscribe for external monitor recipients; team members are auto-confirmed, and `Monitor` responses now report each recipient's subscription status.
- **AM/PM monitor schedules** — Added support for 12-hour schedule inputs like `daily at 9am` and `daily at 5:30pm`, converted to the correct UTC cron expression.
- **Monitor webhook delivery status** — Added delivery status to each monitor check, so you can see whether its webhook was attempted, delivered, or failed — and why.
- **Steadier monitor checks** — Monitors now wait for pages to finish rendering before diffing, cutting false alerts caused by partially-loaded pages.
- **PDF size cap** — Raised the PDF download and scrape size cap from 30 MB to 50 MB.
- **Python SDK `crawl()` scrape kwargs** — Added direct scrape kwargs (`formats`, `headers`, `include_tags`, `exclude_tags`, etc.) to `crawl()` and `start_crawl()`, removing the need to wrap them in `ScrapeOptions(...)`.
- **Clearer `.data` errors** — Improved the error raised when accessing `.data` on a search result to point at `.web`, `.news`, and `.images` with their counts, instead of returning a silent `None`.
- **Python format defaults** — Removed the required `type=` argument on `JsonFormat` and `ChangeTrackingFormat`, defaulting it like `ScreenshotFormat`.
- **`ChangeTrackingFormat` casing** — Added acceptance of both `change_tracking` and `changeTracking` for the format `type` so payloads round-trip between snake_case and camelCase clients.
## Fixes
 
- Resolved security advisories across the API and SDKs by upgrading `axios`, `esbuild`, `ws`, `openssl`, and other dependencies.
- Fixed scrape workers stalling for tens of seconds on very large LLM-extractor inputs, which previously caused dropped jobs and worker restarts.
- Fixed Wikipedia scrapes missing `metadata.ogImage` on roughly half of Wikimedia URLs.
- Fixed crawl and batch cancellation not draining the per-team concurrency backlog and reporting stale state; queued jobs are now removed and `status` reports `cancelled` immediately.
- Fixed monitor checks being charged when the credit lock was denied; denied locks now mark the check `skipped_no_credits` and stop the run.
- Fixed JSON-mode monitor diffs returning spurious `changed` verdicts when field values were identical but reordered; diffs now use order-insensitive equality.
- Fixed JSON-mode monitors treating an empty-string scrape as missing input and reporting `changed` on every run.
- Fixed monitor webhooks being dispatched twice for the same check.
- Fixed monitor webhooks being dropped as malformed by wrapping `monitor.page` and `monitor.check.completed` payloads in an array to match the crawl/batch shape.
- Fixed the monitor judge fabricating before/after text and losing context on long pages; it now receives the full unified diff as its only evidence.
- Fixed corrupt or unexpected stored artifacts breaking `GET /v2/monitor/:id/checks/:checkId`; bad data now surfaces as no diff.
- Fixed HTML tables losing their header row when the first row used `td` cells; the markdown converter now promotes it to a header so column labels survive into `document.markdown`.
- Fixed the PDF size cap being bypassed on certain scrape paths so oversized PDFs are now rejected consistently.
- Fixed `ChangeTrackingFormat` options (`modes`, `prompt`, and related fields) being dropped through Python SDK serialization round-trips.
## API
 
- Replaced the experimental `pii` format with `redactPII` (`boolean` or `{ mode?, entities?, replaceStyle? }`) on `POST /v2/scrape`, `/v2/batch/scrape`, `/v2/crawl`, `/v2/parse`, and `/v2/extract`; when enabled, `document.markdown` returns redacted text (defaults `mode: "accurate"`, `replaceStyle: "tag"`). The old `pii` format and `document.pii` block are removed, and requests including `"pii"` in `formats` are now rejected.
- Added the `deterministicJson` format (`{ type: "deterministicJson", schema?, prompt? }`) to `POST /v2/scrape`, `/v2/batch/scrape`, `/v2/crawl`, `/v2/parse`, and `/v2/extract`, populating `document.json`. Cannot be combined with the `json` format.
- Added `document.videos: VideoItem[]` (with `url`, `sourceURL`, `source`, and optional `title`, `thumbnail`, `duration`, dimensions, and more) to `POST /v2/scrape` and the endpoints sharing its options when the `video` format is requested. The legacy `document.video` string remains for supported providers.
- Added `createdAt`, `completedAt`, and `duration` (seconds) to `GET /v2/crawl/{id}` and `GET /v2/batch/scrape/{id}`; `completedAt` is present only on terminal states.
- Added the `/v2/search/research` proxy — `GET /v2/search/research/papers`, `/papers/:id`, `/papers/:id/similar`, and `/github` — billed against `SEARCH_CREDITS` at 2 credits per 10 results (10 per 10 for ZDR teams). The legacy `/v2/research/*` mount is kept as a deprecated alias.
- Added `POST`/`GET /interact`, `POST /interact/:sessionId/execute`, and `DELETE /interact/:sessionId` as full aliases for the `/v2/browser` session endpoints; behavior, rate limits, and the 2-credit session-create charge are identical.
- Added `cdpUrl` (Python: `cdp_url`) to the `POST /v2/scrape/:jobId/interact` and `/v2/browser` execute responses, exposing the raw CDP WebSocket URL alongside the existing live-view URLs.
- Added `POST /v2/feedback` covering search, scrape, parse, and map jobs with shared recording and refund logic; the legacy `POST /v2/search/:jobId/feedback` keeps working and writes to the same store.
- Added keyless access to `POST /v2/parse`, matching scrape and search, and tightened keyless credit accounting so concurrent requests stay within the per-IP daily cap.
- Added a `WWW-Authenticate: Bearer realm="firecrawl"` header to all `401` responses across `/v0`, `/v1`, and `/v2` so agent clients can discover the credential scheme.
- Added `searchZDR` values `"forced-zdr"` and `"forced-anon"` and deprecated `"forced"` (now an alias for `"forced-zdr"`); the resolved mode drives both billing and routing.
- Added `goal` and `judgeEnabled` to `POST /v2/monitor` and `PATCH /v2/monitor/:id`; `judgeEnabled` defaults to `true` when `goal` is set, and `goal: null` clears it.
- Added `judgment`, `meaningfulChange` (with a per-change `reason`), `meaningfulChanges[]`, a structured `diff` object (`text` and/or `json`), and a `snapshot` field to monitor check pages; JSON-mode checks return field-level diffs plus a current-value snapshot.
- Added unauthenticated `POST /v2/monitor/email/confirm` and `POST /v2/monitor/email/unsubscribe` (token accepted in the request body only), plus an `emailRecipientSubscriptions` array on `Monitor` responses reporting each recipient's `email`, `status` (`pending`/`confirmed`/`unsubscribed`), `source`, and `confirmationEmailSent`.
- Added `origin` to monitor create/update bodies, matching the other v2 endpoints.
- Added stricter validation on `delay` for `POST /v2/crawl` and `POST /v1/crawl`; non-numeric, negative, or values over `86400` are now rejected with a schema error instead of being silently applied.
- Added `include_domains` and `exclude_domains` to the Python SDK's sync `Firecrawl.search()`, matching the async client and the `/v2/search` payload.
- Added V1-compatible method aliases (`scrape_url`/`scrapeUrl`, `crawl_url`/`crawlUrl`, `batch_scrape_urls`, `map_url`, etc.) on the V2 Python and JS clients; aliases emit a `DeprecationWarning`.
- Changed the monitor webhook payload to wrap `data` in an array; `monitor.page` now includes `isMeaningful`, `judgment`, and a `diff` object.
- Normalized monitor `scrapeOptions.formats` so `changeTracking` json mode is rewritten to `json`, and the mixed `["json", "git-diff"]` form now runs both diffs instead of silently falling back to one.
---
 
**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.10...v2.11.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.11.0` · 2026-06-19 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
