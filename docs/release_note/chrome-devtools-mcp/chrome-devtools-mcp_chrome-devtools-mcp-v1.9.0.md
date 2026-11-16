---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.9.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.9.0"
version: "chrome-devtools-mcp-v1.9.0"
published: "2026-09-08"
type: "release"
lang: "en"
summary: "Add --allow-unrestricted-paths by default for CLI (#2618) (2dc104c) · add Agent Plugins 1.0 package (#2623) (05d9e55) · add an option to turn off js execution tools (#2627) (a78566e)"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.9.0

## [1.9.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.8.0...chrome-devtools-mcp-v1.9.0) (2026-09-08)


### 🎉 Features

* Add --allow-unrestricted-paths by default for CLI ([#2618](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2618)) ([2dc104c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2dc104ce1bec57f17763cb7d72b33e03057a79bc))
* add Agent Plugins 1.0 package ([#2623](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2623)) ([05d9e55](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/05d9e55581b48e12412c0b531d87c739143782b6))
* add an option to turn off js execution tools ([#2627](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2627)) ([a78566e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/a78566ee7cf5f0126aab84b131ffb15df8785866))
* Add cookie-debugging skill and improve network/pages tool descriptions ([#2596](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2596)) ([6a67552](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6a67552771e8e7d6b2e3180f607175ab515e4027))
* add screencast fps option ([#2312](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2312)) ([2e641d8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2e641d8a8a08c3f0c944f308cd1194c0fca78cb6))
* extend --no-javascript-evaluation to cover navigations and initScripts ([#2638](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2638)) ([4993a0f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4993a0f40fb91c6e7e14c073896c14db08817ded))
* option to disable source maps ([#2628](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2628)) ([4430a76](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4430a76c443e98f9bda804a469c16c579070c9c2))
* **performance:** set default trace buffer size to match DevTools (1.2gb) ([#2614](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2614)) ([d1baa90](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d1baa90e2ba8df743c6a3ad41083611799340b5f))
* support configurable filesystem roots ([#2605](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2605)) ([d00e6f8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d00e6f8239d9377fba60f19be635b1bef36ade33))


### 🛠️ Fixes

* detect scheduled script navigations ([#2622](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2622)) ([1b2c0e5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1b2c0e5872949b414c19f1ec2aa62999a317c9b2))
* do not enable the DevTools frontend Audits subscription ([#2625](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2625)) ([d1e73ff](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d1e73ffd7e7329386c7606c947b0f88047bbe765))
* filter out Chrome webui targets by default ([#2648](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2648)) ([020c048](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/020c04890fcec77bb4aa5a21187a75e4f1a96fda))
* honor background when new_page uses isolatedContext ([#2658](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2658)) ([f215c82](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f215c82d3f41b00472f858b80a5cda1f56f7380f))
* **memory:** expliclity mention the need of a flag ([#2620](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2620)) ([46c3e05](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/46c3e05ade790321a01014492d7b524ff244d3a3))
* truncate long urls in concise network request output ([#2513](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2513)) ([552c870](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/552c870d3cb8396373b11e2215505b735a394dd8))
* validate viewport and geolocation inputs in emulate tool ([#2663](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2663)) ([808aed6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/808aed68739867da0c6690c99f40403871fc66c0)), closes [#2662](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2662)


### 📄 Documentation

* correct what --screenshotFormat reduces ([#2617](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2617)) ([c575777](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c5757770b051c049ff4a8e5fed3fe6b397390779))
* split the docs in separate files ([#2600](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2600)) ([5463101](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5463101120f94fc7c79d43c44c01a4ab57835279))
* update agents.md for testing ([#2660](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2660)) ([18ca912](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/18ca9125f1ab46edcb89c2a41b87072af4a6a1ae))
* update SECURITY.md ([#2626](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2626)) ([fd67970](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fd67970881624f231ff84129a1234bb04c762be7))


### 🏗️ Refactor

* extract browser options ([#2654](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2654)) ([a918b7b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/a918b7b4086bcb14105b80abab1deb882535f15e))
* extract category config into a seprate file ([#2652](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2652)) ([401a119](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/401a1192b6e745a360c2a011a4bb69a67bf2af7a))
* move transform logic to Clearcut level ([#2637](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2637)) ([f0058d5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f0058d55d238edcb6fdef79b089a0ca025c2034f))
* wrap Server into a class ([#2633](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2633)) ([1a092ff](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1a092ff551c89c137d65f16f595caeb4a46277db))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.9.0` · 2026-09-08 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
