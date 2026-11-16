---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.8.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.8.0"
version: "chrome-devtools-mcp-v1.8.0"
published: "2026-08-25"
type: "release"
lang: "en"
summary: "Add additional params to get_heapsnapshot_edges (#2561) (b58c613) · add optional stack traces to list_console_messages (#2505) (85c73a0) · add PWA automation tools (#2430) (0ea5c8d), closes #2270"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.8.0

## [1.8.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.7.0...chrome-devtools-mcp-v1.8.0) (2026-08-25)


### 🎉 Features

* Add additional params to get_heapsnapshot_edges ([#2561](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2561)) ([b58c613](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b58c613f4b05ade36bbf0d6ba44d5a525ec4d19a))
* add optional stack traces to list_console_messages ([#2505](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2505)) ([85c73a0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/85c73a0abc85a2a4e8b7705955dddcede543ebae))
* add PWA automation tools ([#2430](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2430)) ([0ea5c8d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0ea5c8d15b8db68a279cc0935c28672ad606e466)), closes [#2270](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2270)
* Add query_heapsnapshot MCP tool ([#2553](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2553)) ([fadbf41](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fadbf41d96db84cea12e379592bc13b005c053b4))
* allow evaluate_script to skip the stable DOM wait ([#2346](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2346)) ([781e2fb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/781e2fb98c6520f6dd0deb0d6ed77a18300d438f))
* make pageId required for page-scoped tools by default ([#1777](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/1777)) ([50a16fa](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/50a16fae69c5c28990328160f79db50af260e256))
* Report memory kept alive by contexts in get_heapsnapshot_summary ([#2570](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2570)) ([4103808](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4103808ea50e8709bdb080b952210dfa814a1da1))
* Show self and retained sizes for edges ([#2529](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2529)) ([2a7eb76](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2a7eb76fb01d5e22cdb55f9f0115918d6696c3db))
* support uploading multiple files with upload_file ([#2257](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2257)) ([c8a2393](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c8a2393df63da6f62bc76dcc3dc6c288c5fd5911))
* Use ranges with human readable sizes ([#2589](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2589)) ([61e312f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/61e312f59314907bca32dfeb63cb002601a76cea))


### 🛠️ Fixes

* **cli:** adjust chrome-devtools start defaults ([#2597](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2597)) ([c6cff23](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c6cff23fbfb1d8c7ee7e79ee3b74f7eb52e725eb))
* **cli:** enable tools which require --memoryDebugging on the CLI ([#2585](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2585)) ([1c92ba0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1c92ba091ce059533f009dafac5a92f452cfddf5))
* **clI:** print the errror message alone instead of JSON in the CLI ([#2580](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2580)) ([fce756a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fce756ad199af2ee0ebdab08d568b14c137b8142))
* **cli:** update the CLI skill ([#2569](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2569)) ([0e108ea](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0e108ea8c636aa999f07750f49a05d4861d217b5))
* do not append page url when the previously selected page is gone. ([#2588](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2588)) ([6506425](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6506425a46ead4dcb9e6831befc4501ef1a3beee))
* do not block tool calls on a roots/list the client is slow to answer ([#2477](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2477)) ([d93e667](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d93e66701f29bf78f82b816c91d15509cdb5388b)), closes [#2476](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2476)
* do not enable invalidation tracking in performance traces ([#2500](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2500)) ([f00778d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f00778d6bd4008e69b29b405a56bb1233aab45ac)), closes [#2499](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2499)
* do not validate local files for remote browsers ([#2573](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2573)) ([c0a7417](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c0a74175f8b98c3ccab95a1cab59fe39c2c1cd0e))
* ensure debugger statements are skipped by devtools ([#2555](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2555)) ([f8572f0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f8572f04e4da404f333530854286acc5626efe94))
* fix formatter bugs ([#2552](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2552)) ([b247315](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b24731572f184b9863b0ecbfda7eb8703f3f5885))
* flakiness in wait for helper ([#2541](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2541)) ([12f989a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/12f989a75bf6d24309d80cc59a71108e0c6c3df4))
* **input:** select empty-value options by text ([#2501](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2501)) ([b969c45](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b969c45c657ad42dcdb7d3e11475c483a959e1b3))
* new flags for page id routing moved to the end of metrics json ([#2613](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2613)) ([6dba5c7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6dba5c7d9d4dab3f8929cc27893e304efeafd611))
* puppeteer actions would not follow symlinks anymore ([#2592](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2592)) ([1bac85c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1bac85c90bcb38d5a695674eb8730015e51beb04))
* require .heapsnapshot (or .heaptimeline) as file extension ([#2579](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2579)) ([b750168](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b7501682e43e80b8c8d4fbaa6b8fd6e3c205fba4))
* respect screenshot bounds on HiDPI displays ([#2536](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2536)) ([ebf58f2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ebf58f2f4aa8f1dfbbae38e440fde4e5fef7deef))
* warn on unknown CLI args ([#2577](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2577)) ([e450369](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e45036953d8e0ae409b4052fccded8ff02e51944))


### 📄 Documentation

* add Bob MCP client configuration ([#2364](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2364)) ([5c16940](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5c1694080925934c74d48f7c6faa74d94ea7c7f7))
* fix commands ([#2546](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2546)) ([9331b63](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9331b6395fe729f074a1825a78e66dc321e2fd12))


### 🏗️ Refactor

* make validatePath return resolved url ([#2572](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2572)) ([57adfa9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/57adfa963ca6f97e4c167593d8010c2de71db6dd))
* move config files out of bin ([#2578](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2578)) ([5d02839](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5d0283969c34f26faf9ef4c34be437d1343cd930))
* move files to folders that better represent their use ([#2564](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2564)) ([06b7a5c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/06b7a5c3209ad8e17e1f9c5841d4c9eff1c5b9ed))
* **performance:** use default trace categories from DevTools ([#2571](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2571)) ([cb89762](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/cb897625fe176e89862b87363401a82fd00fd82d))
* replace debug with NodeJS native ([#2562](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2562)) ([f44f3c6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f44f3c60e8557d113446170cbfced44a7e97fc9b))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.8.0` · 2026-08-25 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
