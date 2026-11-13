---
title: "selenide v7.17.0"
project: "selenide"
repo: "selenide/selenide"
tag: "v7.17.0"
published: "2026-07-11"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/selenide/selenide/compare/v7.16.2...v7.17.0"
---

# selenide v7.17.0

## What's Changed
* #3359 Add "byRole" locator - find elements by ARIA role (#3336)
* Add more MCP tools (browser_network_requests, browser_fill_form, browser_tab_list, browser_resize etc.) (#3335)
* #3261 add method `$.downloadFiles()` for downloading multiple files at once (#3334)
* #2761 Make `SelenideAppiumElement` methods `find`, `$`, `$x`, `findAll`, `$$`, `$$x` return `SelenideAppiumElement`s (#3373) --  thanks to Stanislav Vasenkov for PR #3362
* add methods for adding/deleting/verifying cookies: `Selenide.cookies().clear()` (#3375)
* #3357 deprecate methods `clearBrowserLocalStorage()` and `clearBrowserCookies()` in favor of new method `cookies()` --  thanks to Stanislav Vasenkov (#3361)
* #3348 add `element()`/`elements()` aliases to `SelenideAppium` for Kotlin projects  --  thanks to Gabriel Baldez (#3350)
* convert debug logs to trace ("Method {} execution failed" during re-try Selenide commands)
* update Selenium from 4.44.0 to 4.45.0 (incl. CDP from 148 -> 149)   (#3347)
* update Selenium from 4.45.0 to 4.46.0 (incl. CDP from 149 -> 150)   (#3374)


## New Contributors
* @GabrielBBaldez made their first contribution in https://github.com/selenide/selenide/pull/3350

**Full Changelog**: https://github.com/selenide/selenide/compare/v7.16.2...v7.17.0

---

> **Source** [selenide/selenide](https://github.com/selenide/selenide) · `v7.17.0` · 2026-07-11 · [upstream release](https://github.com/selenide/selenide/releases/tag/v7.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
