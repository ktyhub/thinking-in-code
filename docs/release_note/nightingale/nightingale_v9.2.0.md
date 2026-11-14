---
title: "nightingale v9.2.0"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.2.0"
published: "2026-10-11"
type: "minor"
lang: "en"
summary: "feat: native Jira, Discord, JSM Alert, Slack and Mattermost notification channels (#3408), and notification channel configs can reference user variables (#3349)"
---

# nightingale v9.2.0

## What's Changed
- feat: native Jira, Discord, JSM Alert, Slack and Mattermost notification channels (#3408), and notification channel configs can reference user variables (#3349)
- feat: dashboard panels can mix datasources — each query target carries its own datasource, backed by a new v2 multi-datasource batch query API with KQL support (#3292)
- feat: anonymous, time-limited dashboard sharing links, plus a read-only fullscreen view with URL switches to hide the header and variables (#3345)
- feat: Grafana dashboard import rewritten — a conversion report shows what was migrated and what is unsupported before saving
- feat: dashboard query variables support label/value options and Doris SQL time macros; embedded Grafana (iframe) dashboards sync the time range and refresh interval
- feat: user accounts can be disabled and re-enabled without losing their roles, teams and permissions (#3395)
- feat: OAuth2 login can assign default teams to new users (#3406), and `/login?sso=xxx` redirects straight to the given SSO provider
- feat: built-in content supports arbitrary languages; ja / ru / pt-BR / es / id / ko / fr added on the backend, and pt-BR / es / id / ko / fr added to the console (#3352)
- feat: custom alert severity names, a fullscreen live view for active alert events, and filtering historical alert events by hash (#3392)
- feat: an aggregated Nightingale AI page with renamable and shareable conversations (#3325); the AI assistant can dispatch script tasks through ibex (#3378)
- feat: integration center onboarding guide (collect template → dashboard → alert rule); new x509_cert integration, rabbitmq_exporter collect template and SNMP device health alert rules (#3394, #3348)
- feat: 403 responses render in place instead of redirecting to `/403`, so the URL survives and going back works
- feat: passwordless demo login entry for public demo sites, off by default (#3426) — see Notes
- perf: AI chat renders markdown incrementally, and A2A task store write amplification is cut ~30x (#3413)
- security: close an SSRF guard bypass via 6to4 / NAT64 / site-local IPv6 addresses (#3364), redact credentials embedded in datasource URLs (#3424), validate TDengine database / table names (#3423), tighten the dashboard share token scope (#3368), and upgrade vulnerable dependencies (#3419, #3422)
- fix: config key initialization now converges across instances, fixing a 401 / login loop in multi-instance deployments (#3385)
- fix: an unschedulable rule cron pattern no longer crashes n9e / n9e-edge / n9e-alert on every restart, and cron patterns are validated on save (#3407)
- fix: alert mutes that are not active yet are now synced into the engine cache (#3386), and empty mute tags are normalized (#3425)
- fix: populate the recovery time before dispatching alert events (#3382)
- fix: callback channels can notify without a message template (#3350)
- fix: disabled datasources can still be queried, and are kept out of write targets
- fix: an oversized VictoriaLogs line no longer fails the whole query (#3344)
- fix: PostgreSQL datasources use the configured database when initializing the client (#3367)

## v9 highlights
- Introducing Nightingale AI: a built-in AI assistant, a Skills marketplace, LLM configuration management, and page-aware prompt recommendations
- A built-in time series database that works out of the box, so small-scale setups no longer need a separate Prometheus / VictoriaMetrics
- Redesigned navigation menu, global layout and table UI
- Fully rebuilt alert rule / mute rule / subscribe rule / notification rule forms
- Reworked notification channel management
- A new event pipeline execution tracking page that shows the processing in detail
- A new generation of log explorer with unified support for Elasticsearch, Loki and VictoriaLogs

## Upgrade steps
Replace the binary and the `integrations` directory, then restart. To pick up the new metric descriptions in the added languages, also replace `etc/metrics.yaml`.

## Schema changes (skip this if your database account can create tables)
Nightingale applies these for you at startup. If the database account Nightingale connects with cannot alter tables, run them by hand — the DDL is at https://github.com/ccfos/nightingale/blob/main/docker/migratesql/migrate.sql

```sql
ALTER TABLE `source_token` ADD COLUMN `note` varchar(255) NOT NULL DEFAULT '' COMMENT 'note';
ALTER TABLE `source_token` ADD KEY `idx_source_token_token` (`token`);
ALTER TABLE `users` ADD COLUMN `disabled` int NOT NULL DEFAULT 0 COMMENT '0:enabled 1:disabled';
```

PostgreSQL:

```sql
ALTER TABLE source_token ADD COLUMN note varchar(255) NOT NULL DEFAULT '';
CREATE INDEX idx_source_token_token ON source_token (token);
ALTER TABLE users ADD COLUMN disabled int NOT NULL DEFAULT 0;
```

## Notes
- The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users, to enable sharded Pub/Sub)
- Replacing only the binary does **not** enable the built-in TSDB: the `[EmbeddedTSDB]` section exists only in the new `etc/config.toml`, so carrying over an old config file leaves the feature off — copy the section across yourself. It is handled by the center process only (n9e-edge / n9e-alert / n9e-pushgw ignore it and log a warning), and the data lives on that center instance's local disk, so it suits single-instance deployments only; with multiple center replicas, use an external TSDB instead
- telegraf users need to append `ignore_host=false` to the metrics write address, otherwise the hosts running telegraf will no longer register into the host list
- If you run n9e-edge or n9e-pushgw, upgrade them together with n9e

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.2.0` · 2026-10-11 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
