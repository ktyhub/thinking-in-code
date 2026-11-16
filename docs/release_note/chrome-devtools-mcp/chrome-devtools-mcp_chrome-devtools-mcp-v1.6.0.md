---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.6.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.6.0"
version: "chrome-devtools-mcp-v1.6.0"
published: "2026-07-14"
type: "release"
lang: "en"
summary: "add experimentalGcfFormat flag for GCF-encoded tool responses (#2235) (3d21389) · Print object count and total sizes in get_heapsnapshot_details (#2325) (15a6b78)"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.6.0

## [1.6.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.5.0...chrome-devtools-mcp-v1.6.0) (2026-07-14)


### 🎉 Features

* add experimentalGcfFormat flag for GCF-encoded tool responses ([#2235](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2235)) ([3d21389](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3d2138945c7d3ee95f95c36680ce7c63d24f672f))
* Print object count and total sizes in get_heapsnapshot_details ([#2325](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2325)) ([15a6b78](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/15a6b789daec20463786ff6d05a8b4d5b058000d))
* support --allow-unrestricted-paths configuration ([#2296](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2296)) ([6e56c02](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6e56c028cf80ac977c501a94d0958568dea901c2))
* Support filter with heap snapshots aggregates ([#2323](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2323)) ([2812902](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2812902ba9dca67a320f00983e54d03b741388ce))
* update Lighthouse to 13.4.0 ([#2317](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2317)) ([ffc6060](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ffc6060acf55c011388c7bfe7adcbcee75d0c479))


### 🛠️ Fixes

* enforce .gz instead of json.gz in performance tools ([#2305](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2305)) ([b06e39b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b06e39b164f02a30efc58057091436a1329949bd))
* keep a still-open selected page instead of falling back to the first page ([#2328](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2328)) ([c645eee](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c645eee8751ebec9ebaeb18cb01dd11173ef32f2)), closes [#2304](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2304)
* keep page ids unique across browser reconnects ([#2345](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2345)) ([3e8d922](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3e8d92245c138777b5719e72ac3173dbda0075d7))
* paginate page 0 in list_network_requests and list_console_messages ([#2359](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2359)) ([d0025b3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d0025b3908707a5dc1c6c6a82d5d7d9020f3df46))
* release held modifiers when press_key key event fails ([#2347](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2347)) ([78ccb19](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/78ccb193e08137b48cef6f665ad0b3a98c9538da))
* report when the selected page was auto-replaced by the fallback ([#2308](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2308)) ([2c16ac3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2c16ac311befd40ef2b0f4ecb27941a5a809c8d3)), closes [#2304](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2304)
* resolve page ids only among listed pages ([#2332](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2332)) ([eb04951](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/eb049513d2724a41083a80db5ed34e7ea1c3c7bc)), closes [#2304](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2304)
* **snapshot:** resolve element ids on the correct snapshot ([#2295](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2295)) ([b703f2c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b703f2ce20bbe2ce8af4f0a77e56a6a3e1b9c6d6))
* **telemetry:** resolve enum values through nested schema wrappers ([#2315](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2315)) ([c065fd9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c065fd90ce0172acf1fd8436e51d4878c7745cdf))
* Wait until daemon is started ([#2327](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2327)) ([ed7e95d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ed7e95d3e0fd605cae8515d42e7b781da1e635b2))


### 📄 Documentation

* add Grok Build CLI configuration section ([#2294](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2294)) ([aa4be07](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/aa4be07f7ab09430a601460c3f6cec5deb4c7263))
* update memory leak debugging skill ([#2330](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2330)) ([c1736a0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c1736a071b8050b3f49dfa7521b5af703948d14a))


### ⚡ Performance

* concurrent I/O in Root Path Resolution ([#2279](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2279)) ([b2c63e6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b2c63e644eae3fad6747c1f3d678952fc4d756c0))


### 🏗️ Refactor

* clean up McpContext getters ([#2340](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2340)) ([5b33deb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5b33debf1a1c040e24112c146afb573dfcc511d8))
* clean up more of the context interface ([#2335](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2335)) ([9cd734b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9cd734b0a3c6ab3f1d66549174d5187a3206d997))
* clean up page management ([#2333](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2333)) ([16db01f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/16db01f79c9b9a1fa0d55226a2193f94d543c943))
* clean up page snapshot generation ([#2348](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2348)) ([68cfce2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/68cfce2bcb9953d6539aa6d5277e55a75cacd68e))
* make collectors work per page ([#2324](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2324)) ([9bc61b4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9bc61b43d6fdb13e775c0fa2d2d3f945475ebc81))
* move and rename files ([#2355](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2355)) ([9c3542b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9c3542bd74c39e470f8618b51daf251ead7ce913))
* move DevTools universe to McpPage ([#2341](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2341)) ([c006c9b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c006c9ba5e8da4f63401ed83cd9d9ed661bfaa22))
* move remaining McpContext getters ([#2342](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2342)) ([58ba174](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/58ba1742731109a860b9c3ba5a292f7a3b1df3d8))
* remove isolated context getter ([#2336](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2336)) ([8a4ddb3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8a4ddb32565b0e4af130e3e9b801269afff0af54))
* Use array instead of Map for idToClassKey ([#2321](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2321)) ([ff53b7b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ff53b7bb823cc61ccde0eb6dc235450ff9884d0a))
* use helper for Dialog handle ([#2334](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2334)) ([64005f9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/64005f924f108a7986d75ff382415da5be5a29d6))
* use response page in formatting ([#2349](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2349)) ([c53c1ec](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c53c1ec4c9ed58980ab074ba4b59dc31385d263c))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.6.0` · 2026-07-14 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
