---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.13.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.13.0"
version: "chrome-devtools-mcp-v1.13.0"
published: "2026-11-11"
type: "release"
lang: "en"
summary: "add logpoints built on the DevTools BreakpointManager (#3211) (0877ee0) · add page-scoped network mocks (#3384) (1d692d3) · support upstream network mock responses (#3420) (c4bf342)"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.13.0

## [1.13.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.12.0...chrome-devtools-mcp-v1.13.0) (2026-11-11)


### 🎉 Features

* add logpoints built on the DevTools BreakpointManager ([#3211](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3211)) ([0877ee0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0877ee00d2e43c1c04bba275e7d08cc1033e36e9))
* add page-scoped network mocks ([#3384](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3384)) ([1d692d3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1d692d31ae370105afcf4d826dc36f1c4c22e21a))
* support upstream network mock responses ([#3420](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3420)) ([c4bf342](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c4bf342b0854620d2e41262a971e1b24b705f957))


### 🛠️ Fixes

* **config:** accept config files with a UTF-8 BOM ([#3365](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3365)) ([63170b1](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/63170b11a2fa74d5ceea757194d7b25f3e145f68))
* **console:** stop resolving a cyclic Error.cause chain after 10 causes ([#3338](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3338)) ([172656a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/172656ab38a4ff666f88dc9032fa841834a69495))
* disable set_logpoints when --no-javascript-evaluation is set ([#3415](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3415)) ([11fcc59](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/11fcc596290eb73658a3afad89afc037595172e5)), closes [#3414](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3414)
* **extensions:** say list_extensions only lists unpacked extensions ([#3433](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3433)) ([1383bb9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1383bb9b4145227976e49a5dd010aa105b638e44))
* ignore an invalid cached version in the update check ([#3392](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3392)) ([3a9f378](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3a9f3780d23a765ed0125d139338d41d311701c0))
* **input:** validate press_key and submitKey parameters in Zod schema ([#3382](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3382)) ([375a269](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/375a269ee0905a8a30bd15827e701bc1a94d9d9e))
* **network:** start an empty request list for navigations without a request ([#3357](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3357)) ([b701776](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b7017767a4b230509670a27ffee20a8255e3554f))
* normalize non-Error values thrown by tool handlers ([#3068](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3068)) ([535a3dc](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/535a3dc619498240e25a4ab1b9d9ed37a68579ad))
* **performance:** error when performance_stop_trace is called on a non-recording page ([#2971](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2971)) ([#3117](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3117)) ([1ab630a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1ab630aecc558ba1626851982cdec13f7c4659f6))
* **plugin:** launch the Claude Code MCP server with npx --prefix ([#3353](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3353)) ([a24334d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/a24334d3a1733996438c3c4786ab4f880aaaf044))
* preserve task serialization on request cancellation ([#3079](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3079)) ([03fd4e8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/03fd4e840c6afc8b86f1d2dd9d94b41dcff8a326))
* report page loads that keep the URL ([#3395](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3395)) ([3cc38bb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3cc38bb3640a7f3c4a24f10258b44f5a5ae808a3))
* save binary request bodies byte for byte ([#3404](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3404)) ([e3eb901](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e3eb901fcc1de3a3cbf1be39d22e0d306a0ae23d))
* suggest --headless when Chrome cannot find an X server ([#3428](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3428)) ([8b0856a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8b0856ad3f403fb560159eec563365632f5d0e58))
* **url:** unwrap view-source: before all scheme checks in validateUrl ([#3335](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3335)) ([7275268](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/7275268bf05258d8cff8d18ace79848adbf27cac))
* **wait:** explain whitespace-sensitive text matching ([#3350](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3350)) ([81a0379](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/81a037939b19a3588ac6a35e06d576af706a3b57))


### 📄 Documentation

* add Pi client configuration ([#3364](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3364)) ([bc0d93e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/bc0d93ee2df6f2410d9e9704903c3547acae7c9a))
* clarify custom browser launch and connection options ([#3386](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3386)) ([7e10c08](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/7e10c08d30172f4a9d0dba64fa21890afebed09a))
* **input:** note that press_key cannot drive native &lt;select&gt; popups on macOS ([#3288](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3288)) ([8e79bd0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8e79bd09632613d24c3124c367e874dc85469602))


### ⚡ Performance

* **memory:** drop async parents of request initiators in NetworkCollector ([#3345](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3345)) ([ca6f834](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ca6f83498014e74243117a2aa3830cf71091d64d)), closes [#3344](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3344)


### 🏗️ Refactor

* re-export only used Zod runtime members from third_party barrel ([#3439](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3439)) ([6b056c8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6b056c848a981c5ecb493f6e22edd6701964a06d))
* reuse Zod schemas and validate integer viewport dimensions ([#3367](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3367)) ([3c609da](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3c609da38a39067f4a0b885ce81968eb958b76a8))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.13.0` · 2026-11-11 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
