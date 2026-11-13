---
title: "nightingale v9.1.0"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.1.0"
published: "2026-08-06"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/ccfos/nightingale/compare/v9.0.0...v9.1.0"
---

# nightingale v9.1.0

## What's Changed
- feat: built-in time series database — metrics pushed by Categraf are stored locally, so no external Prometheus / VictoriaMetrics is required to get started; a Prometheus datasource named `embedded-tsdb` is auto-registered on first start. Existing setups are respected: if any enabled Prometheus datasource is already present, the datasource is not auto-created — samples are still written locally, and you can add a Prometheus datasource pointing at the built-in TSDB to query them (#3283)
- feat: import datasources from Grafana in one click, with a per-datasource result summary (#3295)
- feat: datasource page revamp — after saving a datasource, Nightingale probes it with sentinel metrics to report which built-in dashboard / alert rule templates already have data, and guides you to your first query (#3301)
- feat: per-cycle alert evaluation records — each rule evaluation persists what it queried and how it judged to the alert engine's local disk, inspectable from a drawer on the alert rule page (#3305)
- feat: notification channel configs can be tested, and message templates previewed, before they are saved (#3302)
- feat: Categraf collect-config wizard — a new `/agents/categraf/collect.sh` endpoint serves the applier script, with plugin templates and metric verification in the console (#3286)
- feat: event pipeline supports mock events in try-run, time-range filtering on execution records, batch enable/disable, and a new change API (#3281, #3285)
- feat: built-in alert rule templates in integrations greatly expanded and revised, with en_US i18n (#3282)
- feat: MySQL datasources can append extra params to the DSN (#3299)
- feat: Doris datasources support `doris.internal_addr` for the edge process to reach FE MySQL (#3298)
- feat: alert rule list supports filtering by trigger type
- feat: active alert event list shows the value at trigger time, adds three-state tags, and remembers filter panel, auto-refresh interval and time range across visits
- feat: log explorer adds a query doc button for Loki and VictoriaLogs, lets you append a field filter straight from the logs viewer, and supports BCE BLS drilldown
- feat: dashboard TableNG panel supports a row detail drawer
- feat: host page onboarding — one-click host monitoring pack, test alert action, and next-steps cards
- feat: datasource proxy and log query access are now written to the audit log with the user and the payload
- feat: edge retries event persistence to center, with a tightened per-request timeout
- feat: new API to check whether any notification was ever delivered successfully (#3300)
- perf: speed up notification record queries and the daily cleanup, backed by two new `notification_record` indexes created online at startup (#3311)
- fix: deep copy events before pushing them to the queue, so a recovery event no longer overwrites a not-yet-consumed trigger event in place
- fix: a blank DingTalk app config no longer breaks group robot notifications (#3309)
- fix: pin explicit column types on the `ai_*` models to stop AutoMigrate schema drift, which had been failing the migration of those tables
- fix: support `max_completion_tokens` for newer OpenAI models (#3306)
- fix: guard invalid label names in alert rule `event_relabel_config` (#3287, #3296)
- fix: accept YAML content for collect builtin payloads (#3307)
- fix: allow force-saving a datasource that fails its health check (#3304)
- fix: probe the global default datasource against the full datasource list before per-engine cluster filtering, so a default datasource owned by another cluster is no longer cleared
- fix: correct alert rule units
- fix: repair builtin skill YAML frontmatter and expose code search tools in chat
- fix: give the async table migration its own gorm session, so one failed statement no longer poisons the rest

##  V9 new feature
- feat: Introduce Nightingale AI — built-in AI assistant, Skills marketplace, LLM config management, with page-specific prompt recommendations
- feat: Built-in time series database — works out of the box, no external Prometheus / VictoriaMetrics needed for small-scale setups
- feat: Redesigned navigation menu, global layout, and table UI
- feat: Refactored notification channel management
- feat: New event pipeline execution tracking page with detailed execution view

## Upgrade note ⚠️
- The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub).
- Alert evaluation records are **enabled by default**. The alert engine writes them to its local disk at `./evallog`, retained for 8 days and capped at 20GB. Tune or turn this off with the `[Alert.EvalLog]` section — see the new `etc/config.toml`.
- The built-in TSDB is **not** enabled by an in-place binary upgrade: `[EmbeddedTSDB]` only exists in the new `etc/config.toml`, so a config file carried over from an earlier version leaves it off. Copy the section over to enable it. It is handled by the center process only (n9e-edge / n9e-alert / n9e-pushgw ignore it), and it stores data on the local disk of that one center instance, so it fits single-instance deployments — with multiple center replicas, use an external TSDB instead.


## New Contributors
* @yangruike made their first contribution in https://github.com/ccfos/nightingale/pull/3306

**Full Changelog**: https://github.com/ccfos/nightingale/compare/v9.0.0...v9.1.0

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.1.0` · 2026-08-06 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
