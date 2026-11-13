---
title: "nightingale v9.0.0-beta.3"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.0.0-beta.3"
published: "2026-06-12"
type: "pre"
lang: "en"
summary: "the operation can be forced after confirmation"
---

# nightingale v9.0.0-beta.3

## What's Changed
  - feat: dashboards now support AI-powered analysis
  - feat: AI assistant supports creating and modifying notification rules, mute rules, and subscription rules through conversation
  - feat: AI assistant can now import built-in integration templates, enabling one-click reuse of dashboard templates and alert rule packages
  - feat: AI conversations can now be shared
  - feat: AI assistant appends guided follow-up question suggestions after each answer
  - feat: improve A2A interface handling to deliver dashboard / alert rule cards as streaming artifacts, so pure streaming clients can also receive structured results
  - feat: host list supports force deletion; when deleting hosts or removing them from a business group, each host is validated first and the reasons for failure are returned, then
  the operation can be forced after confirmation
  - feat: log query field top-N statistics now use ES terms aggregation, and field values support rendering of non-string types
  - feat: dashboard line charts support font size settings, with improved line colors and font rendering in dark theme
  - fix: correct datasource type matching in subscription rules
  - fix: isolate async time-series write concurrency quota per backend, so a single failing backend no longer drags down other write backends
  - fix: fix connection leak when refreshing ClickHouse datasource cache
  - fix: clear selected rows in the host list when query parameters change

##  V9 new feature
- feat: Introduce Nightingale AI — built-in AI assistant, Skills marketplace, LLM config management, with page-specific prompt recommendations
- feat: Redesigned navigation menu, global layout, and table UI
- feat: Refactored notification channel management
- feat: New event pipeline execution tracking page with detailed execution view

## Upgrade note ⚠️
The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub).

## New Contributors
* @admin-dong made their first contribution in https://github.com/ccfos/nightingale/pull/3181

**Full Changelog**: https://github.com/ccfos/nightingale/compare/v9.0.0-beta.2...v9.0.0-beta.3

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.0.0-beta.3` · 2026-06-12 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.0.0-beta.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
