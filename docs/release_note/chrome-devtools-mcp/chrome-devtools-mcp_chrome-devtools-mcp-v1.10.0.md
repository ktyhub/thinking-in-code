---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.10.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.10.0"
version: "chrome-devtools-mcp-v1.10.0"
published: "2026-09-23"
type: "release"
lang: "en"
summary: "add css formatter class (#2707) (f0b5fa4) · add get_css_style tool (#2612) (4454ae0) · performance: chunked trace buffer parser for large recordings (#2721) (23b9a48)"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.10.0

## [1.10.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.9.0...chrome-devtools-mcp-v1.10.0) (2026-09-23)


### 🎉 Features

* add css formatter class ([#2707](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2707)) ([f0b5fa4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f0b5fa4bde0afa30c53996ec0f987af6b6ab28ac))
* add get_css_style tool ([#2612](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2612)) ([4454ae0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4454ae0a8a3d6072ea52d8931a9562907e8dbaae))
* **performance:** chunked trace buffer parser for large recordings ([#2721](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2721)) ([23b9a48](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/23b9a480010d803fc8962bb5d11017b1e2ad76b2))
* set default pageSize and pageIdx for get_css_styles tool ([#2799](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2799)) ([dc9d14d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/dc9d14dc6f08c289376655365adffedae8d04054))
* support config file ([#2661](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2661)) ([314a5fa](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/314a5fabfec56f3067c8bd754a945e9e76bea4fb))
* **telemetry:** persist date of the last tool call. ([#2705](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2705)) ([c54a493](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c54a49383a47e10c445ab9997fd0032fc7acf177))
* **telemetry:** recording a sanitized version of the client name ([#2757](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2757)) ([55fbc57](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/55fbc576f7fe32b40f97bc7161cfe655c9bb99eb))
* **telemetry:** report hermes client usage. ([#2703](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2703)) ([fb47e6c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fb47e6ca31d06874fa00daafee7a4823793dcb6b))
* update css formatter class to add AtRule, PositionTryRule, PropertyRule, FunctionRule ([#2717](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2717)) ([d4a0620](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d4a0620ce620a3ddc0c0f45703198536367b4f9b))
* update css formatter class to add inherited rules ([#2715](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2715)) ([3d7e7bb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3d7e7bb4382971cedc313eb52d5d508284be7388))
* update css formatter class to add matched rules ([#2713](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2713)) ([8c8616f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8c8616fcc4ad3f793f88ed0f358f4c7c0dd0d96e))
* update css formatter class to add pseudo element ([#2716](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2716)) ([df1469a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/df1469af579163fbfee312661bcae3630fd89733))
* update css formatter to add keyframes rules ([#2718](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2718)) ([cdc365c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/cdc365ca95f53e67a724ec45d4fca7e62cff0824))


### 🛠️ Fixes

* bound ConsoleCollector retention per navigation ([#2773](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2773)) ([e98a3ca](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e98a3ca40465c8f58ceb3b121ce7759811a5068a))
* **cli:** forward explicit false options on start ([#2702](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2702)) ([d9a8cb6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d9a8cb6ec22aadf5cb964c5e97a8b047693046e2))
* **config:** preserve raw values for config coercion ([#2747](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2747)) ([906c83b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/906c83b004320b7f8fc3ac558e96b0f9be9d2e07))
* don't log Puppeteer logs to file unless requested ([#2743](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2743)) ([4fbfbc4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4fbfbc4fd96b26e4a09712de6044dad39cc661c0))
* explain launch failures caused by running as root ([#2634](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2634)) ([9d29223](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9d2922369bfa7f12723b3ffd4098ed95c5a6cb8c))
* handle JavaScript dialogs opened during input tool actions ([#2794](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2794)) ([266112b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/266112b988e04d9756f036bf95cde726961dc348))
* **performance:** prevent memory leak by scoping trace engine model per parse ([#2720](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2720)) ([d05cbc0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d05cbc0511c6f05396d0419bf56962fcd2498203))
* preserve console history across same-document navigations ([#2676](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2676)) ([aa25562](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/aa255629f29611a7ae0b7affffcd55dc0698e13b))
* preserve underlying error message in input tool actions ([#2792](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2792)) ([6e47dbb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6e47dbb560883a1a51f8e84f2542f38e80efe450))
* set emulatedUserAgent and use finalDisplayedUrl in lighthouse_audit ([#2795](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2795)) ([941f82a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/941f82a3ec43332a9cbe4f97e840b1eca1ddc112))
* timout in WaitForHelper.ts ([#2772](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2772)) ([dc1d055](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/dc1d055e162a22dc3c63f902fa6a103f8029e28b))


### 📄 Documentation

* add FLUJO client configuration ([#2690](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2690)) ([65a679e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/65a679e389fbbd0722fea1cddf88fa1c1f652b15))
* fix categories not being configured correclty ([#2807](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2807)) ([2250cdc](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2250cdcde4aad79d54101c80346df4190e0c2da7))
* fix defaults for non-boolean values ([#2744](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2744)) ([342d243](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/342d2430cec6bcc4b234d119a2a76a78e52be56e))
* update page routing option name ([#2748](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2748)) ([8939965](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/89399657a1f2d5d486d38df9d70e5e9e3bbb980c))
* update SKILL for chrome-devtools to use get_css_styles tool ([#2760](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2760)) ([421011e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/421011e19fb53d8bc5fbd1de8c54136945b9fe99))


### 🏗️ Refactor

* disable tools instead of not registering them ([#2636](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2636)) ([b455469](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b4554691cfffd3eed7b88d91e38e365b336cbfd0))
* extract browser in a BrowserManager class ([#2787](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2787)) ([3228f44](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3228f44af9164bb2da9c26477fd79dac7f23d624))
* migrate the MCP SDK to v2 ([#2408](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2408)) ([da3c406](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/da3c40609a2966ec4b8e02dcf3c6c0fe9046acc4))
* move comments formatting to CommentFormatter class ([#2719](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2719)) ([e3cded0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e3cded0f43b06a7e8f935a37223016bb93fa725a))
* prepare for SDK v2 ([#2771](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2771)) ([61780c7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/61780c7498a447771127d1fd3b2454fc4ae4ba28))
* simplify our gen scritps ([#2793](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2793)) ([5068584](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5068584894c8f508e98bb6ea87ac752e112a74c2))
* unify call type and ensure typesafety ([#2659](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2659)) ([882f93e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/882f93e9a8809fe88eced35d793951fb456b7117))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.10.0` · 2026-09-23 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
