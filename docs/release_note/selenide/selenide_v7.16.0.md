---
title: "selenide v7.16.0"
project: "selenide"
repo: "selenide/selenide"
tag: "v7.16.0"
published: "2026-04-10"
type: "minor"
lang: "en"
summary: "#3091 Add Selenide MCP server (#3291) · Add WebSockets support in Selenide proxy see BUP changelog (#3293) (#3290) · #3280 fix searching element by label (#3282)"
---

# selenide v7.16.0

## What's Changed
* #3091 Add Selenide MCP server (#3291)
* Add WebSockets support in Selenide proxy [see BUP changelog](https://github.com/valfirst/browserup-proxy/blob/main/CHANGELOG.md#330) (#3293) (#3290)
* #3280 fix searching element by label (#3282)
* #3283 fix CDP download when multiple tabs are open (#3284)
* change default FireFox behavior for unhandled alerts from "accept" to "ignore" (#3285)
* disable form resubmission confirmation dialog in Firefox (#3285)
* support `$.ancestor()` and `$.closest()` with multiple class names (#3286)
* #3278 fix video recorder for custom WebDriver management (#3279)  --  thanks to Kamil Pająk
* #3278 fallback taking screenshot to WebDriver method if CDP or BiDi doesn't work (#3279)  --  thanks to Kamil Pająk
* #3278 Video recorder: don't log "Video recorded" when no video file was created (#3279)  --  thanks to Kamil Pająk
* Video recorder: fix FFmpeg usage (https://github.com/selenide/selenide/commit/46bbf82eedc)  --  thanks to Aliaksandr Rasolka
* Video recorder: fix gaps in recorded video (#3297)
* update Selenium from 4.41.0 to 4.43.0, incl. CDP v145 -> v147 (#3294) (#3296)

## New Contributors
* @kamilpajak made their first contribution in https://github.com/selenide/selenide/pull/3279

**Full Changelog**: https://github.com/selenide/selenide/compare/v7.15.1...v7.16.0

---

> **Source** [selenide/selenide](https://github.com/selenide/selenide) · `v7.16.0` · 2026-04-10 · [upstream release](https://github.com/selenide/selenide/releases/tag/v7.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
