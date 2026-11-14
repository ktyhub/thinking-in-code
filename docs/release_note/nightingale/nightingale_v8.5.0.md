---
title: "nightingale v8.5.0"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v8.5.0"
published: "2025-12-20"
type: "minor"
lang: "en"
summary: "feat: Support VictoriaLogs datasource for alert rules · feat: Support Dingtalk for Single Sign-On (SSO) · feat: Display associated business groups in team management · feat: Add hash field to alert event details"
---

# nightingale v8.5.0

## What's Changed
- feat: Support VictoriaLogs datasource for alert rules
- feat: Support Dingtalk for Single Sign-On (SSO)
- feat: Display associated business groups in team management
- feat: Add hash field to alert event details
- feat: Add machine business group type option to the applicable attribute selector
- feat: Add "Metric classification ignore prefix" setting to quick view, allowing certain prefixes to be ignored before classification
- feat: Add notes field to dashboard configuration and tables
- refactor: Refactor dashboard variables, support data preview for variable configuration, display error message when Query type variable query fails
- refactor: Migrate "Max data points" and "Time" (custom time range) settings for individual queries in dashboards to the panel level, located to the right of the datasource selector
- refactor: Limit the maximum height of PromQL input for Prometheus instant queries
- refactor: Optimize ClickHouse datasource configuration page
- refactor: Rename "Collector" to "Category" for built-in metrics, include component type parameter when querying category options
- fix: Correct some typos in dashboard configuration
- fix: Fix message template save conflict issue ccfos/nightingale#2937

## New Contributors
* @SenCoder made their first contribution in https://github.com/ccfos/nightingale/pull/2978
* @busyster996 made their first contribution in https://github.com/ccfos/nightingale/pull/2982

**Full Changelog**: https://github.com/ccfos/nightingale/compare/v8.4.1...v8.5.0

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v8.5.0` · 2025-12-20 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v8.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
