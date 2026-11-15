---
title: "browser-use 0.13.7"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.7"
version: "0.13.7"
published: "2026-07-27"
type: "patch"
lang: "en"
summary: "Ships the latest version of the CLI, which includes bug fixes and better browser management."
---

# browser-use 0.13.7

Ships the latest version of the CLI, which includes bug fixes and better browser management.

## What's Changed
* fix: dont send default params in gemini genconfig by @markmcd in https://github.com/browser-use/browser-use/pull/5173
* Fix tool name in flash prompts: replace_file_str -> replace_file by @MagMueller in https://github.com/browser-use/browser-use/pull/5272
* fix: handle file:// urls in _extract_start_url by @laithrw in https://github.com/browser-use/browser-use/pull/5276
* extract: stop auto-inheriting output_model_schema into per-page extraction by @MagMueller in https://github.com/browser-use/browser-use/pull/5278
* Fix clear-to-empty on React controlled inputs (native value setter) by @MagMueller in https://github.com/browser-use/browser-use/pull/5274
* Gate the skeleton-screen 'still loading?' hint on in-flight network requests by @MagMueller in https://github.com/browser-use/browser-use/pull/5273
* Fix nested cross-origin iframe extraction filtering by @MagMueller in https://github.com/browser-use/browser-use/pull/5290
* Keep selector indices unique across CDP sessions by @MagMueller in https://github.com/browser-use/browser-use/pull/5291
* fix(browser): bound DOM fanout and preserve recoverable state by @MagMueller in https://github.com/browser-use/browser-use/pull/5292
* Fix compact cross-origin payment field extraction by @MagMueller in https://github.com/browser-use/browser-use/pull/5296
* Stop reusing cached DOM after browser-state timeouts by @MagMueller in https://github.com/browser-use/browser-use/pull/5297
* Allow checkbox-sized cross-origin controls safely by @MagMueller in https://github.com/browser-use/browser-use/pull/5298
* Simplify cross-origin iframe minimum size by @MagMueller in https://github.com/browser-use/browser-use/pull/5299
* Call the model with minimal state after capture timeout by @MagMueller in https://github.com/browser-use/browser-use/pull/5300
* Release 0.13.7 with Browser Harness 0.1.8 by @laithrw in https://github.com/browser-use/browser-use/pull/5308


**Full Changelog**: https://github.com/browser-use/browser-use/compare/0.13.6...0.13.7

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `0.13.7` · 2026-07-27 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/0.13.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
