---
title: "nightingale v9.0.0-beta.4"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.0.0-beta.4"
published: "2026-07-04"
type: "pre"
lang: "en"
summary: "The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub)."
---

# nightingale v9.0.0-beta.4

## What's Changed
- feat: new skill-creator built-in skill lets you create and edit Skills directly in conversation, and skill scripts now run inside a sandbox for safer execution, falling back gracefully to the strongest isolation level available on the host (#3220)
- feat: Skills can be imported from a Git repository, with git metadata preserved across re-imports (#3203, #3204, #3207, #3208)
- feat: MCP and A2A endpoints now support OAuth authentication, with an internationalized authorization-consent page (#3218)
- feat: IoTDB is now supported as an alerting datasource (#3221)
- feat: brand-new onboarding experience — guided empty states, a getting-started checklist, a sidebar progress badge, and in-place import of built-in templates
- feat: Elasticsearch index patterns support a weight column for custom sorting (#3213)
- feat: migrated 30+ list tables (alert rules, alert mutes, workflows, etc.) to EnhancedTable

##  V9 new feature
- feat: Introduce Nightingale AI — built-in AI assistant, Skills marketplace, LLM config management, with page-specific prompt recommendations
- feat: Redesigned navigation menu, global layout, and table UI
- feat: Refactored notification channel management
- feat: New event pipeline execution tracking page with detailed execution view

## Upgrade note ⚠️
The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub).

## New Contributors
* @loveyang2012 made their first contribution in https://github.com/ccfos/nightingale/pull/3190
* @ladeyi made their first contribution in https://github.com/ccfos/nightingale/pull/3215

**Full Changelog**: https://github.com/ccfos/nightingale/compare/v9.0.0-beta.3...v9.0.0-beta.4

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.0.0-beta.4` · 2026-07-04 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.0.0-beta.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
