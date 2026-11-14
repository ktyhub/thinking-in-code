---
title: "nightingale v9.0.0-beta.2"
project: "nightingale"
repo: "ccfos/nightingale"
tag: "v9.0.0-beta.2"
published: "2026-05-29"
type: "pre"
lang: "en"
summary: "Added a document-based Q&A skill. For any usage-related questions, you can now ask directly in the AI chat. · Added a one-click AI analysis button to the Alert Event Details page."
---

# nightingale v9.0.0-beta.2

## What's Changed
- Added a document-based Q&A skill. For any usage-related questions, you can now ask directly in the AI chat.
- Added a one-click AI analysis button to the Alert Event Details page.

##  V9 new feature
- feat: Introduce Nightingale AI — built-in AI assistant, Skills marketplace, LLM config management, with page-specific prompt recommendations
- feat: Redesigned navigation menu, global layout, and table UI
- feat: Refactored notification channel management
- feat: New event pipeline execution tracking page with detailed execution view

## Upgrade note ⚠️
The new AI assistant relies on Redis Streams, so Redis 5.0 or later is required (Redis 7.0+ recommended for Cluster users to enable sharded Pub/Sub).


**Full Changelog**: https://github.com/ccfos/nightingale/compare/v9.0.0-beta.1...v9.0.0-beta.2

---

> **Source** [ccfos/nightingale](https://github.com/ccfos/nightingale) · `v9.0.0-beta.2` · 2026-05-29 · [upstream release](https://github.com/ccfos/nightingale/releases/tag/v9.0.0-beta.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
