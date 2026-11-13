---
title: "nightingale v9.0.0-beta.1"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.0.0-beta.1"
published: "2026-05-23"
type: "pre"
lang: "en"
summary: "The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub)."
---

# nightingale v9.0.0-beta.1

## What's Changed
- feat: Introduce Nightingale AI — built-in AI assistant, Skills marketplace, LLM config management, with page-specific prompt recommendations
- feat: Redesigned navigation menu, global layout, and table UI
- feat: Refactored notification channel management
- feat: New event pipeline execution tracking page with detailed execution view
- feat: Alert mutes now support batch deletion of expired rules
- feat: Mute / subscription / recording rule lists now support filtering by disabled status
- feat: Added Feishu SSO; OAuth2 userinfo supports nested paths; LDAP login supports optional role override
- feat: New host dashboard page with CPU, memory, and version stat cards
- feat: Dashboards support cross-page panel copy/paste via clipboard, TableNG CSV export, and MySQL variables with multi/all selection
- fix: Strengthened SQL injection protection, added Webhook queue size limit, unified MySQL collation

## Upgrade note ⚠️
The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub).

## New Contributors
* @zgcbj made their first contribution in https://github.com/ccfos/nightingale/pull/3044
* @garudaen made their first contribution in https://github.com/ccfos/nightingale/pull/3050
* @feiguoL made their first contribution in https://github.com/ccfos/nightingale/pull/3062

**Full Changelog**: https://github.com/ccfos/nightingale/compare/v8.5.1...v9.0.0-beta.1

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.0.0-beta.1` · 2026-05-23 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.0.0-beta.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
