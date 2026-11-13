---
title: "firecrawl v2.8.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.8.0"
published: "2026-02-03"
type: "minor"
lang: "en"
summary: "Firecrawl v2.8.0 brings major improvements to agent workflows, developer tooling, and self-hosted deployments across the API and SDKs, including our new Skill."
---

# firecrawl v2.8.0

# v2.8.0

## Firecrawl v2.8.0 is here!

Firecrawl v2.8.0 brings major improvements to agent workflows, developer tooling, and self-hosted deployments across the API and SDKs, including our new Skill.

* Parallel Agents for running thousands of `/agent` queries simultaneously, powered by our new Spark 1 Fast model.
* Firecrawl CLI with full support for scrape, search, crawl, and map commands.
* Firecrawl Skill for enabling AI agents (Claude Code, Codex, OpenCode) to use Firecrawl autonomously.
* Three new models powering /agent: Spark 1 Fast for instant retrieval (currently only available in Playground), Spark 1 Mini for complex research queries, and Spark 1 Pro for advanced extraction tasks.
* Agent enhancements including webhooks, model selection, and new MCP Server tools.
* Platform-wide performance improvements including faster search execution and optimized Redis calls.
* SDK improvements including Zod v4 compatibility.

And much more, check it out below!

## New Features

* **Parallel Agents**  
  Execute thousands of `/agent` queries in parallel with automatic failure handling and intelligent waterfall execution. Powered by Spark 1-Fast for instant retrieval, automatically upgrading to Spark 1 Mini for complex queries requiring full research.

* **Firecrawl CLI**  
  New command-line interface for Firecrawl with full support for scrape, search, crawl, and map commands. Install with `npm install -g firecrawl-cli`.

* **Firecrawl Skill**  
  Enables agents like Claude Cursor, Codex, and OpenCode to use Firecrawl for web scraping and data extraction, installable via `npx skills add firecrawl/cli.`
  
* **Spark Model Family**  
  Three new models powering /agent: **Spark 1 Fast** for instant retrieval (currently available in Playground), **Spark 1 Mini** (default) for everyday extraction tasks at 60% lower cost, and **Spark 1 Pro** for complex multi-domain research requiring maximum accuracy. Spark 1 Pro achieves ~50% recall while Mini delivers ~40% recall, both significantly outperforming tools costing 4-7x more per task.

* **Firecrawl MCP Server Agent Tools**  
  New `firecrawl_agent` and `firecrawl_agent_status` tools for autonomous web data gathering via MCP-enabled agents.

* **Agent Webhooks**  
  Agent endpoint now supports webhooks for real-time notifications on job completion and progress.

* **Agent Model Selection**  
  Agent endpoint now accepts a `model` parameter and includes model info in status responses.

* **Multi-Arch Docker Images**  
  Self-hosted deployments now support `linux/arm64` architecture in addition to `amd64`.

* **Sitemap-Only Crawl Mode**  
  New crawl option to exclusively use sitemap URLs without following links.

* **`ignoreCache` Map Parameter**  
  New option to bypass cached results when mapping URLs.

* **Custom Headers for `/map`**  
  Map endpoint now supports custom request headers.

* **Background Image Extraction**  
  Scraper now extracts background images from CSS styles.

* **Improved Error Messages**  
  All user-facing error messages now include detailed explanations to help diagnose issues.

---

## API Improvements

* Search without concurrency limits — scrapes in search now execute directly without queue overhead.
* Return `400` for unsupported actions with clear errors when requested actions aren't supported by available engines.
* Job ID now included in search metadata for easier tracking.
* Metadata responses now include detected timezone.
* Backfill metadata title from `og:title` or `twitter:title` when missing.
* Preserve `gid` parameter when rewriting Google Sheets URLs.
* Fixed v2 path in batch scrape status pagination.
* Validate team ownership when appending to existing crawls.
* Screenshots with custom viewport or quality settings now bypass cache.
* Optimized Redis calls across endpoints.
* Reduced excessive `robots.txt` fetching and parsing.
* Minimum request timeout parameter now configurable.

---

## SDK Improvements

### JavaScript SDK

* **Zod v4 Compatibility** — schema conversion now works with Zod v4 with improved error detection.
* **Watcher Exports** — `Watcher` and `WatcherOptions` now exported from the SDK entrypoint.
* **Agent Webhook Support** — new webhook options for agent calls.
* **Error Retry Polling** — SDK retries polling after transient errors.
* **Job ID in Exceptions** — error exceptions now include `jobId` for debugging.

### Python SDK

* Manual pagination helpers for iterating through results.
* Agent webhook support added to agent client.
* Agent endpoint now accepts model selection parameter.
* Metadata now includes concurrency limit information.
* Fixed `max_pages` handling in crawl requests.

---

## Dashboard Improvements

* Dark mode is now supported.
* On the usage page, you can now view credit usage broken down by day.
* On the activity logs page, you can now filter by the API key that was used.
* The "images" output format is now supported in the Playground.
* All admins can now manage their team's subscriptions.

---

## Quality & Performance

* Skip markdown conversion checks for large HTML documents.
* Export Google Docs as HTML instead of PDF for improved performance.
* Improved branding format with better logo detection and error messages for PDFs and documents.
* Improved `lopdf` metadata loading performance.
* Updated `html-to-markdown` module with multiple bug fixes.
* Increased markdown service body limit and added request ID logging.
* Better Sentry filtering for cancelled jobs and engine errors.
* Fixed extract race conditions and RabbitMQ poison pill handling.
* Centralized Firecrawl configuration across the codebase.
* Multiple security vulnerability fixes, including CVE-2025-59466 and lodash prototype pollution.

---

## Self-Hosted Improvements

* CLI custom API URL support via `firecrawl --api-url http://localhost:3002` for local instances.
* ARM64 Docker support via multi-arch images for Apple Silicon and ARM servers.
* Fixed docker-compose database credentials out of the box.
* Fixed Playwright service startup caused by Chromium path issues.
* Updated Node.js to major version 22 instead of a pinned minor.
* Added RabbitMQ health check endpoint.
* Fixed PostgreSQL port exposure in docker-compose.

---

## New Contributors

* @gemyago
* @loganaden
* @pcgeek86
* @dmlarionov

---

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.7.0...v2.8.0

## What's Changed
* refactor(api): centralize firecrawl config by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2496
* fix(config): add .catch to NUQ worker port defaults for error handling by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2505
* (sdk)fix/same timeout as api now by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2503
* (sdks)feat/added concurrency info to metadata by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2502
* fix: make srcset URLs absolute in HTML transformation by @Chadha93 in https://github.com/firecrawl/firecrawl/pull/2515
* feat(api/admin/crawl-monitor): add endpoint for monitoring crawl system by @mogery in https://github.com/firecrawl/firecrawl/pull/2518
* feat(api/logRequest): associate requests with API keys by @mogery in https://github.com/firecrawl/firecrawl/pull/2519
* Fix Config Load on Tests by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2506
* feat(api): update model usage to gpt-4o-mini by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2520
* feat(api/scrapeURL): engpicker integ by @mogery in https://github.com/firecrawl/firecrawl/pull/2523
* fix(playwright-service-ts): wasn't starting up due to the lack of chromium under /tmp/.cache by @dmlarionov in https://github.com/firecrawl/firecrawl/pull/2512
* added timezone to metadata response by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2526
* Increase Go Service Write Timeout by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2489
* (python-sdk)fix/max_pages by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2527
* Use invoiced billing for certain expansion packs by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2532
* Fix PostgreSQL port exposure in docker-compose by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2530
* (feat/partners) Allow email to be optional for partners API by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2533
* Advanced model for recursive schemas by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2535
* feat(api): update gpt-4o usage to gpt-4.1 by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2536
* fix(api): cost tracking by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2537
* Update Sentry for ZDR compliance by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2529
* sanitize null-byte strings and report robustInsert failures to Sentry by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2538
* Dont log Feature Flog Errors to Sentry by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2540
* Debug logs to Extract Updates by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2539
* Update test site build by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2543
* feat: increase precrawl limits by @delong3 in https://github.com/firecrawl/firecrawl/pull/2544
* fix(api): engines for robots and scrape + reduced sitemap limit by @delong3 in https://github.com/firecrawl/firecrawl/pull/2545
* Webhook dispatcher by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2534
* (feat/partner-integrations) Rotate endpoint by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2547
* fix: extract race condition by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2548
* fix: correct property name from 'success' to 'is_successful' by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2550
* feat: update root endpoint to return JSON with documentation URL by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2552
* Branding Format Improvements by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2438
* Add more Sentry filtering by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2556
* Revert "feat(crawl): implement URL modification handling in crawl con… by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2558
* fix: export URL schema for external usage by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2559
* feat: add configurable harness startup timeout by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2560
* fix(api): scrapeURL/index-metrics logging by @delong3 in https://github.com/firecrawl/firecrawl/pull/2561
* fix(api): excessive robots.txt fetching/parsing by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2562
* feat(api): optimize redis calls by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2564
* Add strictJsonSchema on Branding Format LLM Call by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2567
* Fix docker-compose db credentials by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2568
* Fix Deps Audit by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2569
* feat(api): ab/b by @mogery in https://github.com/firecrawl/firecrawl/pull/2570
* feat(api): ab/bs by @mogery in https://github.com/firecrawl/firecrawl/pull/2571
* feat(api): ab/bsrch by @mogery in https://github.com/firecrawl/firecrawl/pull/2572
* Update html-to-markdown module by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2573
* python-sdk: Update Agent Client by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2579
* fix(extract): rabbitmq + poison pill handling by @mogery in https://github.com/firecrawl/firecrawl/pull/2581
* chore(api): re-route fire-1 by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2584
* feat: add bypassCreditChecks team flag for infinite graceful credit checks by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2578
* fix(api/search): saner billing logic by @mogery in https://github.com/firecrawl/firecrawl/pull/2585
* feat(api): custom header support for /map by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2593
* fix(api): index metrics backwards compat by @delong3 in https://github.com/firecrawl/firecrawl/pull/2598
* Add redis.sadd("billed_teams", team_id) to clearACUCTeam for centralized tracking by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2602
* Throw error when v3-beta is passed into /extract by @micahstairs in https://github.com/firecrawl/firecrawl/pull/2601
* Fixes #2583 add RabbitMQ health check and update API dependencies by @pcgeek86 in https://github.com/firecrawl/firecrawl/pull/2605
* js-sdk: Retry polling after errors, add jobId to error exception by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2608
* Allow formats on agent schema by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2603
* feat(api): extract background images by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2611
* Don't log EngineError to Sentry by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2613
* Ignore Cancelled Jobs on Sentry by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2614
* feat(api): include jobId in search response metadata by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2618
* Update html-to-markdown version by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2620
* Add request_id to Markdown Logs by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2621
* Fix NPM Audit by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2623
* Add error details to Go Markdown Service by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2624
* Add Request ID to Markdown Service Logger by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2630
* Increase Markdown Service Body Limit by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2629
* Multi-arch images for playwright and api with linux/arm64 support by @gemyago in https://github.com/firecrawl/firecrawl/pull/2555
* fix(nuq): zombie pg clients by @mogery in https://github.com/firecrawl/firecrawl/pull/2633
* Webhooks for agent by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2628
* Update firecrawl/html-to-markdown by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2634
* fix: add Number() coercion to prevent string concatenation in credit calculations by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2635
* Revert "fix: add Number() coercion to prevent string concatenation in credit calculations" by @devhims in https://github.com/firecrawl/firecrawl/pull/2636
* fix(api): validate team ownership when appending to an existing crawl by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2637
* Add debug logging for 402 credit check failures by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2638
* Implement num_results for searxng by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2645
* Bump auth_credit_usage_chunk_38 to auth_credit_usage_chunk_39 by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2646
* Attempt fix infinite loop by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2644
* Update lopdf to use load_metadata method for better performance by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2642
* fix: backfill metadata title from og:title or twitter:title when missing by @devhims in https://github.com/firecrawl/firecrawl/pull/2650
* fix(security): fix audit-ci vulnerabilities and clean up allowlists by @mogery in https://github.com/firecrawl/firecrawl/pull/2657
* chore(api): export gdocs as HTML instead of PDF by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2652
* Skip Markdown Check for Big HTML Documents by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2622
* feat(sdk): add model parameter to agent endpoint by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2663
* fix(security): add new hono vulnerabilities to audit allowlist by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2664
* Update Audit Workflow by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2667
* fix(nuq): align RabbitMQ expiration with lock reaper to prevent oscillation by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2672
* fix(nuq-postgres): tune checkpoint and autovacuum to reduce job prefetch stalls by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2673
* feat(billing): skip credit checks for organization teams by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2674
* fix(cache): skip cache for screenshots with custom viewport or quality settings by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2677
* .github/workflows: Migrate workflows to Blacksmith runners by @blacksmith-sh[bot] in https://github.com/firecrawl/firecrawl/pull/2680
* fix(ci): allowlist new vulnerabilities in npm audit by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2681
* fix(nuq-postgres): aggressive checkpoint tuning to prevent queue stalls by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2679
* chore(ci): tune runners by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2683
* chore(ci): tune runners by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2685
* fix(js-sdk): detect mistaken use of Zod schema.shape and provide helpful error by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2684
* fix(ci): allowlist low severity npm audit vulnerabilities by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2682
* fix(ci): add new vulnerabilities to audit allowlists by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2688
* feat(api): add ignoreCache parameter to map endpoint by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2686
* chore(api): update A/B test to use FIRE_ENGINE_AB_URL instead of FIRE… by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2689
* chore: update audit runner from 4c to 2c by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2690
* fix(scraper): preserve postprocessor markdown in transformer by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2694
* Fix CVE-2025-59466 by @loganaden in https://github.com/firecrawl/firecrawl/pull/2695
* fix(docker): use node 22 major version instead of pinned 22.22 by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2696
* feat(search): remove NuQ queue and execute scrapes directly without concurrency limits by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2668
* fix: preserve gid parameter when rewriting Google Sheets URLs by @devin-ai-integration[bot] in https://github.com/firecrawl/firecrawl/pull/2693
* feat(api): fire-engine action metadata by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2699
* Don't Expose Internal Errors by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2700
* docs: fix typos in README by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2703
* feat(sdk): add agent webhook support to Node.js and Python SDKs by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2705
* Return 400 when actions are requested but no engines support then by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2704
* feat: add fire engine A/B comparison by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2706
* chore: remove DB webhook logic by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2707
* fix: a/b test logic by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2708
* feat: allow slight variance on test comparison by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2709
* feat: HTML to markdown conversion in A/B comparison by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2714
* feat: request timeout parameter min by @delong3 in https://github.com/firecrawl/firecrawl/pull/2710
* feat: word jaccard diff by @amplitudesxd in https://github.com/firecrawl/firecrawl/pull/2720
* fix(api): use correct v2 path in batch scrape status next URL by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2722
* fix(js-sdk): add Zod v4 compatibility for schema conversion by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2724
* feat(crawl): add sitemap-only support by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2726
* fix(deps): resolve lodash prototype pollution vulnerability by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2728
* Add manual pagination helpers for Python SDK by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2727
* feat(agent): include model in status responses by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2717
* feat(errors): improve all user-facing error messages with detailed explanations by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2697
* chore(codeowners): add abimaelmartell as owner for branding files by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2735
* fix: handle 415 Unsupported Media Type without retrying by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2737
* fix(branding): use spread operator instead of Array.from for Set conversion by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2746
* fix(js-sdk): export Watcher and WatcherOptions from SDK entrypoint by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2754
* fix(audit): Fix pnpm audit issues by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2757
* fix(audit): Upgrade eslint to fix GHSA-p5wg-g6qr-c7cg vulnerability in ingestion-ui by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2765
* feat(api): add enhanced proxy option as alias for stealth by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2759
* feat(api): only load more pages if we already have one by @tomsideguide in https://github.com/firecrawl/firecrawl/pull/2767
* fix(api): update notification email from address by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2769
* conc boost for agent interop by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2770
* chore(api): Remove jest-junit test reporting by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2768
* chore(api): Add logging to flaky map redirect test by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2771
* fix(branding): Improve Logo Detection by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2749
* feat(api): promote jobs in concurrency queue backfill by @tomsideguide in https://github.com/firecrawl/firecrawl/pull/2773
* fix(security): allowlist fast-xml-parser vulnerability GHSA-37qj-frw5-hhjh by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2775
* fix(branding): improve error messages for PDFs and documents by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2776
* chore: remove firecrawl_jobs cleanup from ZDR cleaner by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2777
* fix(billing): bump to update_tally_8_team by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2779
* fix(api): add 'enhanced' to proxy enum in OpenAPI specs by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2780
* chore: bump auth_credit_usage_chunk_39 to auth_credit_usage_chunk_40 by @firecrawl-spring[bot] in https://github.com/firecrawl/firecrawl/pull/2782
* feat(rust-sdk): add v2 API namespace with agent support by @abimaelmartell in https://github.com/firecrawl/firecrawl/pull/2778

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.8.0` · 2026-02-03 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
