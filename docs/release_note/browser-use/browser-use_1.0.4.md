---
title: "browser-use 1.0.4"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.4"
version: "1.0.4"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "pip install 'browser-use==1.0.4'"
---

# browser-use 1.0.4

`pip install 'browser-use==1.0.4'`

- The agent drops old screenshots in one batch once 20 tool results carry one, instead of on every new screenshot. Each prune rewrote an earlier message and broke the provider's prompt cache, so screenshot-heavy runs paid full input price on almost every step (BU Bench 1.0.3: one 705-step task read 27.8M input tokens, 1.6M from cache).
- `BU_NAME` callers get their own Chromium when Chrome can't be used (#6387).
- When a browser setup error may be fixed in a newer release, the CLI and MCP tell the agent to upgrade (#6388).

BU Bench v2.1 (200 tasks), vs 1.0.3: same score (76.1 vs 76.0), model cost per task $0.208 vs $0.434.

PR: https://github.com/browser-use/browser-use/pull/6394

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `1.0.4` · 2026-11-13 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/1.0.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
