---
title: "browser-use 1.0.6"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.6"
version: "1.0.6"
published: "2026-11-16"
type: "patch"
lang: "en"
summary: "BU 4.0 is the default model. Agent(task) and ChatBrowserUse() now run bu-4.0 on the Browser Use gateway instead of bu-fast."
---

# browser-use 1.0.6

`pip install 'browser-use==1.0.6'`

- **BU 4.0 is the default model.** `Agent(task)` and `ChatBrowserUse()` now run `bu-4.0` on the Browser Use gateway instead of `bu-fast`. Pass `llm='bu-4.0-mini'` for simple tasks at the lowest cost, or `llm='bu-4.0-pro'` for the hardest tasks (#6430).
- **This costs more if you pass no `llm`.** BU 4.0 tokens cost 15 times as much as `bu-fast` ($1.80 / $9.00 per 1M input / output tokens, against $0.12 / $0.60), and it runs at high instead of medium reasoning in the default mode. A short test task cost $0.022 instead of $0.0014. To keep the previous model and price, pass `llm='bu-fast'`. Prices: https://docs.browser-use.com/open-source/models
- The first run without a key opens Browser Use login and continues after approval; cloud browsers print their live-view link (#6425).
- Judge gotchas stay grounded in what the run observed (#6418).

PRs: https://github.com/browser-use/browser-use/pull/6430, https://github.com/browser-use/browser-use/pull/6425, https://github.com/browser-use/browser-use/pull/6418, https://github.com/browser-use/browser-use/pull/6431

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `1.0.6` · 2026-11-16 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/1.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
