---
title: "nightingale v9.0.0"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.0.0"
published: "2026-07-25"
type: "major"
lang: "en"
summary: "feat: alert rules support test fire — trigger a rule on demand against real queried series and get a stage-by-stage report"
---

# nightingale v9.0.0

## What's Changed
  - feat: alert rules support **test fire** — trigger a rule on demand against real queried series and get a stage-by-stage report
  (query check → threshold → event → notify pipeline → notification), to verify the whole alerting chain before the condition is ever
  met (#3274)
  - feat: log query supports VictoriaLogs (#3239)
  - feat: alert mute rules support **notify-only mute** — the event is still generated and recorded (and tagged as muted in the event
  list and detail) while notifications are suppressed (#3250)
  - feat: the host page supports one-click Categraf installation — collector packages ship with the server, and a ready-to-run install
  script is generated per platform (#3272)
  - feat: the built-in `/mcp` endpoint now serves a fine-grained toolset (alerts, targets, datasource, mutes, notify rules, alert
  subscribes, event pipelines, users, metrics, logs, dashboards, roles) — read-only by default, with write tools and the toolset
  whitelist both requiring an explicit opt-in (#3245)
  - feat: AI Skills support authorization scope — public or team-private, with editing restricted to authorized teams (#3247, #3268)
  - feat: alert rule / mute / subscription / notification rule forms redesigned — section cards, right-side navigation with a live
  condition summary, auto-naming, quick duration presets, and scenario-based empty states
  - feat: message templates and the template center support i18n, so a single template renders in the recipient's language (#3235,
  #3238, #3261)
  - feat: alert history events can be retained for a configurable number of days (`CleanAlertHisEventDay`, cleaned in nightly batches),
  with a new composite index and cursor pagination (#3264)
  - feat: the AI summary node in event pipelines can reuse a centralized LLM config instead of carrying its own (#3242)
  - feat: full i18n coverage on the console
  - feat: list tables support inline row actions, sortable creator and time columns, and a pagination quick jumper
  - fix: aggregated alert event operations no longer fail with HTTP 414 — event IDs are now sent in the POST body as a JSON array
  - fix: batch-deleting history events no longer removes events that still have an active alert (#3263)
  - fix: quote the external config column so DDL works on MySQL 9.7 (#3276)
  - fix: sanitize user input and detail URLs before HTML rendering (XSS hardening)

## New Contributors
- feat: Introduce Nightingale AI — built-in AI assistant, Skills marketplace, LLM config management, with page-specific prompt recommendations
- feat: Redesigned navigation menu, global layout, and table UI
- feat: Refactored notification channel management
- feat: New event pipeline execution tracking page with detailed execution view

## Upgrade note ⚠️
The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub).

**Full Changelog**: https://github.com/ccfos/nightingale/compare/v9.0.0-beta.4...v9.0.0

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.0.0` · 2026-07-25 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
