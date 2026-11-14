---
title: "nightingale v9.3.0"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.3.0"
published: "2026-10-21"
type: "minor"
lang: "en"
summary: "feat: native Microsoft Teams, Twilio (SMS / voice), Pushover, ntfy, Splunk On-Call (VictorOps) and LINE notification channels, each with built-in message templates (#3431, #3435)"
---

# nightingale v9.3.0

## What's Changed
- feat: native Microsoft Teams, Twilio (SMS / voice), Pushover, ntfy, Splunk On-Call (VictorOps) and LINE notification channels, each with built-in message templates (#3431, #3435)
- feat: the unit picker accepts custom units and searches units by description
- feat: table row actions expand into inline icon buttons when the row has room
- feat: the AI assistant adds preset questions for CloudWatch Logs
- fix: trigger values keep enough precision when rounding would hide the deviation from the threshold (#3429)
- fix: events of unknown idents are muted when a rule is limited to its business group (#3432)
- fix: host alert rules are no longer dropped by the empty-expression trigger filter
- fix: sub-path deployments — generated links honor the deployment prefix, exclude rules win over already-prefixed URLs, and an externally supplied prefix is kept at build time
- fix: toggling a rule's status keeps the row in place, and overlapping status updates are serialized so a stale read can no longer revert a confirmed status
- fix: the Elasticsearch log total is capped at `max_result_window`
- fix: notification media expand their advanced settings on validation failure, and the media type list / media list scroll independently
- fix: the log detail drawer opens at medium size, log download failures show a message, the scrollbar is visible in dark mode, and the app re-initializes after leaving the service error page
- docs: an editable SVG architecture diagram and deep links to the documentation site in the README (#3430)

## v9 highlights
- Introducing Nightingale AI: a built-in AI assistant, a Skills marketplace, LLM configuration management, and page-aware prompt recommendations
- A built-in time series database that works out of the box, so small-scale setups no longer need a separate Prometheus / VictoriaMetrics
- Redesigned navigation menu, global layout and table UI
- Fully rebuilt alert rule / mute rule / subscribe rule / notification rule forms
- Reworked notification channel management
- A new event pipeline execution tracking page that shows the processing in detail
- A new generation of log explorer with unified support for Elasticsearch, Loki and VictoriaLogs

## Upgrade steps
Replace the binary and restart. No schema changes in this release.

## Notes
- The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users, to enable sharded Pub/Sub)
- Microsoft Teams and ntfy are created automatically at startup. Twilio, Pushover, Splunk On-Call and LINE need account credentials, so add them yourself under notification media. See https://github.com/ccfos/nightingale/blob/main/doc/api/notify-channel-native.md
- If you run n9e-edge or n9e-pushgw, upgrade them together with n9e

**Full Changelog**: https://github.com/ccfos/nightingale/compare/v9.2.0...v9.3.0

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.3.0` · 2026-10-21 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
