---
title: "supertokens-core v12.4.0"
project: "supertokens-core"
repo: "supertokens/supertokens-core"
tag: "v12.4.0"
published: "2026-10-20"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/supertokens/supertokens-core/compare/v12.3.1...v12.4.0"
---

# supertokens-core v12.4.0

## What's Changed
* fix: move EE license sync off the FeatureFlag constructor to a jittered cron by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1431
* feat: add opt-in admin connector with port-scoped route classification by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1433
* feat: add admin-only global per-status-class request stats endpoint by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1435
* fix: normalize supertokens_saas_load_only_cud before filtering CUDs by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1432
* fix: keep previous FeatureFlag resource on load failure and restore error logging by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1430
* feat: add DB-free /livez liveness endpoint (ADMIN_ONLY) by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1434
* feat: debug-log OAuth non-rotating refresh atomicity-gap and commit errors by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1455
* test: deterministic single-connection-ownership regression for non-rotating OAuth refresh by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1454
* feat: expose concurrency-cap rejections and in-flight count in RequestStats by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1442
* fix: FeatureFlag resource resilience & non-blocking license sync (PLAN-013) by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1422
* feat: isolated admin connector + DB-free /livez liveness (PLAN-014) by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1426
* fix: bounded platform-thread pool + timeout for parallel storage init (12.3.1) by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1437
* fix: Hardening: legacy SAML userinfo token parsing + Tomcat error responses (12.3.1) by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1438
* feat: per-CUD in-flight request concurrency cap enforced under pool saturation by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1441
* fix: non-rotating OAuth refresh no longer borrows nested DB connections by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1453
* fix: apply env vars to boxed config fields such as bulk_migration_sleep_between_rounds_in_batch_ms by @breken-ai in https://github.com/supertokens/supertokens-core/pull/1457
* fix: container security scan — pin bcprov-jdk18on 1.85 (CVE-2026-8763) + pull base on image builds by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1456
* fix: return invalid config instead of 500 for object or array core config values by @breken-ai in https://github.com/supertokens/supertokens-core/pull/1458
* fix: look up WebAuthn sign-in credentials by relying party id by @amirsalarsafaei in https://github.com/supertokens/supertokens-core/pull/1459
* fix: keep WebAuthN.updateUserEmail's user-id lookup inside its transaction by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1460
* fix: resolve WebAuthn sign-in's external user id on its transaction connection by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1467
* fix: classify in-memory FK conflicts on the transaction connection by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1466
* fix: write one activity-log event per session create by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1488
* feat: test-only guard against nested same-pool connection acquisition (in-memory + regression test) by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1461
* fix: run the remaining REPEATABLE READ transactions at the default level by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1487
* fix: run AuthRecipe user lookups on the transaction connection inside recipe flows by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1468
* fix: arm the in-memory nested same-pool connection guard by default by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1491
* fix: resolve role revocation against the app's public tenant storage by @choksi2212 in https://github.com/supertokens/supertokens-core/pull/1490
* test: per-request transaction and commit counters for the in-memory storage, with a baseline test by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1492
* fix: read user id mappings without a transaction by @supertokens-agent-runner[bot] in https://github.com/supertokens/supertokens-core/pull/1493
* fix: non-rotating OAuth refresh holds a single DB connection (PLAN-017) by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1496
* chore: merge integration/12.3-next into 12.4 for the 12.4.0 release by @tamassoltesz in https://github.com/supertokens/supertokens-core/pull/1498

## New Contributors
* @breken-ai made their first contribution in https://github.com/supertokens/supertokens-core/pull/1457
* @amirsalarsafaei made their first contribution in https://github.com/supertokens/supertokens-core/pull/1459
* @choksi2212 made their first contribution in https://github.com/supertokens/supertokens-core/pull/1490

**Full Changelog**: https://github.com/supertokens/supertokens-core/compare/v12.3.1...v12.4.0

---

> **Source** [supertokens/supertokens-core](https://github.com/supertokens/supertokens-core) · `v12.4.0` · 2026-10-20 · [upstream release](https://github.com/supertokens/supertokens-core/releases/tag/v12.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
