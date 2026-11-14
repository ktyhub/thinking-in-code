---
title: "nightingale v9.1.1"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.1.1"
published: "2026-08-18"
type: "patch"
lang: "en"
summary: "feat: list pages keep the current page in the URL, so a refresh or a trip into a detail page brings you back to where you were; the page resets to 1 only on save or when you switch business group"
---

# nightingale v9.1.1

## What's Changed
- feat: list pages keep the current page in the URL, so a refresh or a trip into a detail page brings you back to where you were; the page resets to 1 only on save or when you switch business group
- feat: the user list gains an account source column, and the last-active-time column that was missing from the column config — neither rendered nor selectable — is fixed
- perf: the logs viewer renders rows through a virtual list, so large log volumes no longer stutter
- fix: concurrent webhook / callback queue creation no longer blocks on itself and drops events
- fix: a malformed `HH:MM` effective time span in an alert rule is now rejected outright instead of being saved silently as an unusable config
- fix: integration component icons no longer break on Linux when an upgraded database has a directory case or spelling mismatch, and the icon route now rejects path traversal
- fix: woff2 fonts and `n9e-collect-templates/*.toml` collect templates were treated as frontend routes and served `index.html`, which broke their download
- fix: the `board_busigroup` table never got its composite primary key, because the tag was written outside the `gorm` tag
- fix: correct the normalization of LLM provider base URLs that do not end in `/v1`
- fix: an Elasticsearch alert rule no longer keeps a stale `date_field` when the selected index has no date fields
- fix: the Doris log explorer resolves flattened pseudo field names back to the real columns when filtering
- fix: event pipeline header parameters are now submitted as an object
- fix: MCP APIs go through the `N9E_PATHNAME` prefix in sub-path deployments
- fix: the datasource dropdown search now also matches the datasource type name
- fix: `raw_message` is surfaced when an API call fails


## v9 highlights
- Introducing Nightingale AI: a built-in AI assistant, a Skills marketplace, LLM configuration management, and page-aware prompt recommendations
- A built-in time series database that works out of the box, so small-scale setups no longer need a separate Prometheus / VictoriaMetrics
- Redesigned navigation menu, global layout and table UI
- Fully rebuilt alert rule / mute rule / subscribe rule / notification rule forms
- Reworked notification channel management
- A new event pipeline execution tracking page that shows the processing in detail
- A new generation of log explorer with unified support for Elasticsearch, Loki and VictoriaLogs

## Upgrade steps
Replace the binary and the `integrations` directory, then restart.

## Schema changes (skip this if your database account can create tables)
Nightingale creates the tables for you. If the database account Nightingale connects with cannot create tables, you need to create them by hand — the DDL is at https://github.com/ccfos/nightingale/blob/main/docker/migratesql/migrate.sql

## Notes
- The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users, to enable sharded Pub/Sub)
- Replacing only the binary does **not** enable the built-in TSDB: the `[EmbeddedTSDB]` section exists only in the new `etc/config.toml`, so carrying over an old config file leaves the feature off — copy the section across yourself. It is handled by the center process only (n9e-edge / n9e-alert / n9e-pushgw ignore it and log a warning), and the data lives on that center instance's local disk, so it suits single-instance deployments only; with multiple center replicas, use an external TSDB instead
- telegraf users need to append `ignore_host=false` to the metrics write address, otherwise the hosts running telegraf will no longer register into the host list
- If you run n9e-edge or n9e-pushgw, upgrade them together with n9e

<img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=4302a683-3037-4b5b-bdcd-93775980ed04" />

![](https://gettrack.link/p/h7tXLNpu)

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.1.1` · 2026-08-18 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
