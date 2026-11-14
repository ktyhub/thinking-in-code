---
title: "headroom v0.41.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.41.0"
version: "v0.41.0"
published: "2026-10-14"
type: "minor"
lang: "en"
---

# headroom v0.41.0

## [0.41.0](https://github.com/headroomlabs-ai/headroom/compare/v0.40.0...v0.41.0) (2026-10-13)


### Features

* **antigravity:** add native Google Antigravity IDE integration ([#3817](https://github.com/headroomlabs-ai/headroom/issues/3817)) ([cd4367b](https://github.com/headroomlabs-ai/headroom/commit/cd4367b040bf80b7358f100da54994f6d5fbfcfe))
* **opencode:** support the OpenCode 2.x plugin API ([#3999](https://github.com/headroomlabs-ai/headroom/issues/3999)) ([1d4b357](https://github.com/headroomlabs-ai/headroom/commit/1d4b357ca745549382e1ed9a3a6d39b5df52d3d5))
* **plugins:** add headroom-snip Claude Code mod that animates compression ([#3980](https://github.com/headroomlabs-ai/headroom/issues/3980)) ([17abee2](https://github.com/headroomlabs-ai/headroom/commit/17abee2721c1946bc8903d623bec91ff6e531c17))
* **proxy:** native spend/savings stats + dashboard for the Rust proxy ([#2321](https://github.com/headroomlabs-ai/headroom/issues/2321)) ([70b21c1](https://github.com/headroomlabs-ai/headroom/commit/70b21c12c41cd128c7b8700c33b29b687de567a4))
* **router:** add max_output_tokens condition to ModelRoute ([#3898](https://github.com/headroomlabs-ai/headroom/issues/3898)) ([01185e3](https://github.com/headroomlabs-ai/headroom/commit/01185e32d393c02ae63b104429f6dbfc6cdd1da0))
* **savings:** per-agent attribution in history checkpoints and rollups ([#2627](https://github.com/headroomlabs-ai/headroom/issues/2627)) ([489de46](https://github.com/headroomlabs-ai/headroom/commit/489de468258584c69c90c798397d81e0b35ace67))
* show the Headroom for Teams offer in the dashboard, docs, llms.txt and release notes ([#3991](https://github.com/headroomlabs-ai/headroom/issues/3991)) ([1ad92f0](https://github.com/headroomlabs-ai/headroom/commit/1ad92f0cbc3dea27676e253588100f64a2af6994))


### Bug Fixes

* **anthropic:** route /api/hello connectivity probes to Anthropic ([#3336](https://github.com/headroomlabs-ai/headroom/issues/3336)) ([#4059](https://github.com/headroomlabs-ai/headroom/issues/4059)) ([931e5b9](https://github.com/headroomlabs-ai/headroom/commit/931e5b9666f4022feb38abadfbdb77c96c69e95a))
* **beacon:** stop Cloudflare logging senders' IP addresses ([#4018](https://github.com/headroomlabs-ai/headroom/issues/4018)) ([db983ba](https://github.com/headroomlabs-ai/headroom/commit/db983bacc616fec3d622e8a039b47135b1ad4166))
* **cache:** keep cache mode when Claude Code re-serializes its last reply ([#4003](https://github.com/headroomlabs-ai/headroom/issues/4003)) ([aeb09f8](https://github.com/headroomlabs-ai/headroom/commit/aeb09f8d1884318d27b05b440b44c603e1c0d727))
* **cache:** retain prefix trackers for the provider cache lifetime ([#4023](https://github.com/headroomlabs-ai/headroom/issues/4023)) ([9553d42](https://github.com/headroomlabs-ai/headroom/commit/9553d4292f949224105bfee8c29f4979a2c3092a))
* **cache:** stop Claude Code forks from cold-starting the conversation's lineage ([#4043](https://github.com/headroomlabs-ai/headroom/issues/4043)) ([1cf4d05](https://github.com/headroomlabs-ai/headroom/commit/1cf4d053d2bae276280dd3b71ebcf00cfd4d9cfc))
* **ccr:** serve headroom_retrieve when the model calls it alongside client tools ([#4034](https://github.com/headroomlabs-ai/headroom/issues/4034)) ([01d9194](https://github.com/headroomlabs-ai/headroom/commit/01d9194854233ef6ed04005cf0a5b8c32bf65d6d))
* **cli:** name the broken Codex config, write init configs atomically, keep the identity check ([#4129](https://github.com/headroomlabs-ai/headroom/issues/4129)) ([976aa71](https://github.com/headroomlabs-ai/headroom/commit/976aa714ef3e19174dc0cb586cee7b20d064e4ef))
* **cli:** pass configured SSL context to stdlib urlopen calls ([#4011](https://github.com/headroomlabs-ai/headroom/issues/4011)) ([22d0905](https://github.com/headroomlabs-ai/headroom/commit/22d0905a73d1498e1a3658427687416373c1d4a1))
* **cli:** say why the proxy failed to start ([#4120](https://github.com/headroomlabs-ai/headroom/issues/4120)) ([f3d240b](https://github.com/headroomlabs-ai/headroom/commit/f3d240bcae5f12d87925b5fa46d36eecff19ba2d))
* **codex:** make unwrap codex remove headroom init routing ([#3920](https://github.com/headroomlabs-ai/headroom/issues/3920)) ([3260795](https://github.com/headroomlabs-ai/headroom/commit/326079517b40d2bbec6d2c7a453b22be9b8b6755))
* **codex:** preserve auth.json API keys through Headroom ([#3355](https://github.com/headroomlabs-ai/headroom/issues/3355)) ([a6523b1](https://github.com/headroomlabs-ai/headroom/commit/a6523b19678af49ed1039fe946ae0cfee2181509))
* **copilot:** honour GitHub's advertised Business/Enterprise host by default ([#4155](https://github.com/headroomlabs-ai/headroom/issues/4155)) ([1dc7a18](https://github.com/headroomlabs-ai/headroom/commit/1dc7a183f55db35188aefa95f9cd4aed18377862))
* **copilot:** send VS Code next-edit requests to the completions host ([#4188](https://github.com/headroomlabs-ai/headroom/issues/4188)) ([22a1296](https://github.com/headroomlabs-ai/headroom/commit/22a1296cfabc855f9bc6e36a1bcb0f9e788f75a5))
* **dashboard:** keep savings profile visible in light mode ([#2544](https://github.com/headroomlabs-ai/headroom/issues/2544)) ([4e4f49d](https://github.com/headroomlabs-ai/headroom/commit/4e4f49d058846c44ae6061edd5a53776c03a0507))
* **dashboard:** show the effective value in settings enum selects ([#4032](https://github.com/headroomlabs-ai/headroom/issues/4032)) ([20ce054](https://github.com/headroomlabs-ai/headroom/commit/20ce054f8d34af50106daa0c8aa518231e17004b))
* **deps:** bump quinn-proto to 0.11.19 for RUSTSEC-2026-0338..0342 ([#4178](https://github.com/headroomlabs-ai/headroom/issues/4178)) ([49751ec](https://github.com/headroomlabs-ai/headroom/commit/49751ec4c797c9ff8ae7e3cdfed6c8372c7fbfcd))
* **deps:** clear the two high npm advisories failing the Security workflow ([#4004](https://github.com/headroomlabs-ai/headroom/issues/4004)) ([5a516b5](https://github.com/headroomlabs-ai/headroom/commit/5a516b54afd50156521638645a9063992e395a7b))
* **deps:** recommend headroom-ai for optional extras ([#4046](https://github.com/headroomlabs-ai/headroom/issues/4046)) ([f1bc260](https://github.com/headroomlabs-ai/headroom/commit/f1bc260948c159549d6937e9c4d2cf969256f2bb))
* **deps:** support Intel macOS ONNX Runtime resolution ([#3823](https://github.com/headroomlabs-ai/headroom/issues/3823)) ([51ec6e8](https://github.com/headroomlabs-ai/headroom/commit/51ec6e8ffef8d3c76b0dc7b283c8c5eabcd6acc2))
* **docker:** adds mount for the litellm config dir ([#2454](https://github.com/headroomlabs-ai/headroom/issues/2454)) ([64a661d](https://github.com/headroomlabs-ai/headroom/commit/64a661d5b4898d97061bfcaa10caad477b319b37))
* **gateway:** report why /v1/compress/response rejected a body ([#4081](https://github.com/headroomlabs-ai/headroom/issues/4081)) ([5cac7ab](https://github.com/headroomlabs-ai/headroom/commit/5cac7ab693c2f1e3d8dbbe4756f0e7f6fa0687d6))
* **grok:** attribute api.x.ai chat outcomes as provider xai, recognize grok-shell UA ([#2626](https://github.com/headroomlabs-ai/headroom/issues/2626)) ([b1fb162](https://github.com/headroomlabs-ai/headroom/commit/b1fb162b622327102832f15b2ca14a4613da9fcd))
* **install/windows:** back persistent-service with an always-on task ([#1866](https://github.com/headroomlabs-ai/headroom/issues/1866)) ([#2460](https://github.com/headroomlabs-ai/headroom/issues/2460)) ([5682883](https://github.com/headroomlabs-ai/headroom/commit/5682883bb03472caeb510d6ff84070d5558d0f62))
* **install:** distinguish protocol targets in status ([#4040](https://github.com/headroomlabs-ai/headroom/issues/4040)) ([79f2c27](https://github.com/headroomlabs-ai/headroom/commit/79f2c2781a1e6d5a13c75ae233e01c6d8d910ef1))
* **install:** keep an explicitly empty dashboard allowlist on Windows PowerShell 5.1 ([#4012](https://github.com/headroomlabs-ai/headroom/issues/4012)) ([c195a12](https://github.com/headroomlabs-ai/headroom/commit/c195a1220f8d3525879c87486bd63d96e870e648))
* **install:** preserve OpenCode edits during reactivation ([#4022](https://github.com/headroomlabs-ai/headroom/issues/4022)) ([40955b0](https://github.com/headroomlabs-ai/headroom/commit/40955b0eef2e509aad1a200db9cfa0762ca457ce))
* **learn:** decode sanitized pattern-id markers and keep visible-text dedup keys ([#3956](https://github.com/headroomlabs-ai/headroom/issues/3956)) ([ec1ba70](https://github.com/headroomlabs-ai/headroom/commit/ec1ba70c974fb0729870bfd444cdc1152a1b4301))
* **learn:** make live traffic learning use the shared error classifier ([#4110](https://github.com/headroomlabs-ai/headroom/issues/4110)) ([e6eaa41](https://github.com/headroomlabs-ai/headroom/commit/e6eaa411791750884a7eb2594d0b86f9e4100f81))
* **learn:** pin the learned verbosity level on a cache-mode proxy ([#4033](https://github.com/headroomlabs-ai/headroom/issues/4033)) ([71663b4](https://github.com/headroomlabs-ai/headroom/commit/71663b44e26fc2e0ad7d52c0b264aa7500926900))
* **logging:** add payload-safe helpers for exceptions, URLs, ids and repeat warnings ([#4138](https://github.com/headroomlabs-ai/headroom/issues/4138)) ([bebe559](https://github.com/headroomlabs-ai/headroom/commit/bebe5593ea4abaf326215c7236586b38e7b325a5))
* **onnx:** stop magika's ORT intra-op pool from spinning idle cores ([#4189](https://github.com/headroomlabs-ai/headroom/issues/4189)) ([2016dc6](https://github.com/headroomlabs-ai/headroom/commit/2016dc6d6064926790b9c843fbf1798d2e660524))
* **openclaw:** preserve tool-call thought signatures ([#4038](https://github.com/headroomlabs-ai/headroom/issues/4038)) ([37f3f9e](https://github.com/headroomlabs-ai/headroom/commit/37f3f9efe16f6b1ff94e03dbae85a27e387097a2))
* **plugins/openclaw:** keep compression system-prompt notice cache-stable ([#3811](https://github.com/headroomlabs-ai/headroom/issues/3811)) ([f885187](https://github.com/headroomlabs-ai/headroom/commit/f8851878a4feb0b64df8a5b22a89ebb198199bdf))
* **pricing:** reconcile cache billing with model-specific LiteLLM rates ([#3033](https://github.com/headroomlabs-ai/headroom/issues/3033)) ([463c1a4](https://github.com/headroomlabs-ai/headroom/commit/463c1a43e30fc33cb256a3f455daf28043e53b05))
* **providers:** drop the shadowed POST /v1/messages route spec ([#4075](https://github.com/headroomlabs-ai/headroom/issues/4075)) ([69a16cb](https://github.com/headroomlabs-ai/headroom/commit/69a16cb59c0fe4b8233caf5824e34e5772f48d81))
* **proxy/bedrock:** record the real upstream status on InvokeModel outcomes ([#4025](https://github.com/headroomlabs-ai/headroom/issues/4025)) ([159daa2](https://github.com/headroomlabs-ai/headroom/commit/159daa25a0886fb5c5808e37d62fe8cf4971290a))
* **proxy/streaming:** tolerate malformed upstream SSE events ([#2558](https://github.com/headroomlabs-ai/headroom/issues/2558)) ([d091fbd](https://github.com/headroomlabs-ai/headroom/commit/d091fbd9f2ccc522de87350c0bc7a85f0de230eb))
* **proxy:** astgrep disk verify truncation ([#3192](https://github.com/headroomlabs-ai/headroom/issues/3192)) ([1fb4cba](https://github.com/headroomlabs-ai/headroom/commit/1fb4cbaea0dcc62aa092bac3af04991d994207d0))
* **proxy:** break the compact-every-turn loop near the real context window ([#2942](https://github.com/headroomlabs-ai/headroom/issues/2942)) ([76cceeb](https://github.com/headroomlabs-ai/headroom/commit/76cceeb48728a4f179626e43f1ec23d1f7cebd79))
* **proxy:** classify failed streams as failed requests ([#3747](https://github.com/headroomlabs-ai/headroom/issues/3747)) ([42d4f58](https://github.com/headroomlabs-ai/headroom/commit/42d4f58b434bdca8f81cabf5f00d6e8e02a7fb2c))
* **proxy:** don't retry a 429/529 that cannot succeed within the backoff cap ([#3992](https://github.com/headroomlabs-ai/headroom/issues/3992)) ([a961a6f](https://github.com/headroomlabs-ai/headroom/commit/a961a6fea083a9a739df40d1371e1e7ec108516d))
* **proxy:** don't send a memory continuation with unanswered client tool calls ([#4009](https://github.com/headroomlabs-ai/headroom/issues/4009)) ([#4013](https://github.com/headroomlabs-ai/headroom/issues/4013)) ([87e05b6](https://github.com/headroomlabs-ai/headroom/commit/87e05b68b8aa578f1439abfc8006b38cd09db14d))
* **proxy:** forward x-litellm-key-* headers on streaming path ([#2532](https://github.com/headroomlabs-ai/headroom/issues/2532)) ([33ade5b](https://github.com/headroomlabs-ai/headroom/commit/33ade5b0e1019adf34d9fd888cc105d4bc23935e))
* **proxy:** ignore defer_loading when measuring a turn hook's tool delta ([#4056](https://github.com/headroomlabs-ai/headroom/issues/4056)) ([f8212a3](https://github.com/headroomlabs-ai/headroom/commit/f8212a39dcc5b03a75e98b60a8ecdef81a0f48ed))
* **proxy:** keep Claude Haiku 5.5 mid-conversation system messages in place ([#4153](https://github.com/headroomlabs-ai/headroom/issues/4153)) ([a9eb2a7](https://github.com/headroomlabs-ai/headroom/commit/a9eb2a7b6fe6b75042646284109846da46939649))
* **proxy:** keep leading Anthropic system payloads valid ([#3671](https://github.com/headroomlabs-ai/headroom/issues/3671)) ([d9e29bb](https://github.com/headroomlabs-ai/headroom/commit/d9e29bb2600a746dea80caa7721f0fb98109589c))
* **proxy:** log the savings and metrics failures that currently vanish ([#4084](https://github.com/headroomlabs-ai/headroom/issues/4084)) ([2800932](https://github.com/headroomlabs-ai/headroom/commit/2800932e1827400cf41be1cff6154f78f691ccce))
* **proxy:** read stream cache usage from message_delta; keep Fireworks sessions on one replica ([#4174](https://github.com/headroomlabs-ai/headroom/issues/4174)) ([30b22df](https://github.com/headroomlabs-ai/headroom/commit/30b22df7fda6163c576c8f720982bf1ca48762c3))
* **proxy:** record the provider's billed input count on streamed turns ([#4052](https://github.com/headroomlabs-ai/headroom/issues/4052)) ([a9815bb](https://github.com/headroomlabs-ai/headroom/commit/a9815bbb5fa2d2347ceeeac0f01cc9f041e2ded2))
* **proxy:** say why proxy.log is missing and why a knob or extension was ignored ([#4088](https://github.com/headroomlabs-ai/headroom/issues/4088)) ([72302a3](https://github.com/headroomlabs-ai/headroom/commit/72302a3998104a400765fa7e21177ed59f429f38))
* **release:** synchronize editable uv lock version ([#4054](https://github.com/headroomlabs-ai/headroom/issues/4054)) ([3f99066](https://github.com/headroomlabs-ai/headroom/commit/3f990663cca5b9dd2ed0ca26343b0619bbab0aa7))
* **router:** bound ML compression per request, not just per block ([#3721](https://github.com/headroomlabs-ai/headroom/issues/3721)) ([f37980f](https://github.com/headroomlabs-ai/headroom/commit/f37980f7f7612e7ae58b4f3b5b98f185e216fd91))
* **router:** preserve nested JSON records through compression ([#3680](https://github.com/headroomlabs-ai/headroom/issues/3680)) ([fd06703](https://github.com/headroomlabs-ai/headroom/commit/fd067033da185f1abf48ea58e63c6d71d4d11ec1))
* **savings,ccr:** log the ledger and MCP failures that are swallowed silently ([#4105](https://github.com/headroomlabs-ai/headroom/issues/4105)) ([97680e7](https://github.com/headroomlabs-ai/headroom/commit/97680e7782423308b8e35c5560fea5b1d9434e1b))
* **savings:** don't let a thin holdout arm decide the headline number ([#3127](https://github.com/headroomlabs-ai/headroom/issues/3127)) ([2a12e03](https://github.com/headroomlabs-ai/headroom/commit/2a12e035a3239bdfbb4fe75e1246923c144aabef))
* **security:** resolve 23 open CodeQL alerts ([#4045](https://github.com/headroomlabs-ai/headroom/issues/4045)) ([a88e2d5](https://github.com/headroomlabs-ai/headroom/commit/a88e2d51452f7a2fa1882639585d482e1f05d92f))
* **security:** resolve high-severity CodeQL alerts ([#4005](https://github.com/headroomlabs-ai/headroom/issues/4005)) ([dea9092](https://github.com/headroomlabs-ai/headroom/commit/dea9092e19385f286b7f67a64f4d85de2708d756))
* **smart-crusher:** preserve wrapped retrieval results in apply ([#4149](https://github.com/headroomlabs-ai/headroom/issues/4149)) ([9762a14](https://github.com/headroomlabs-ai/headroom/commit/9762a14a40bde4d3f58a027c086b6ac75fbd5ed2))
* **subscription:** log a failed OTEL window update instead of passing silently ([#4131](https://github.com/headroomlabs-ai/headroom/issues/4131)) ([7d9dd55](https://github.com/headroomlabs-ai/headroom/commit/7d9dd55e7c4bbd2a95b054de7e5722c4cf20ce50))
* **toin:** make diagnostic pattern identifiers addressable ([#4021](https://github.com/headroomlabs-ai/headroom/issues/4021)) ([def6d41](https://github.com/headroomlabs-ai/headroom/commit/def6d41185d3091d4ef42ae379829087deeaf38f))
* **transforms:** log failed transforms with tracebacks ([#3981](https://github.com/headroomlabs-ai/headroom/issues/3981)) ([a654558](https://github.com/headroomlabs-ai/headroom/commit/a65455804ce6c16670af6fe253bd9f8f6105bfe3))
* **wrap:** carry the shared proxy's extensions over to a dedicated Copilot proxy ([#4154](https://github.com/headroomlabs-ai/headroom/issues/4154)) ([feea130](https://github.com/headroomlabs-ai/headroom/commit/feea130f81953030bda222ffe88abb61fbb60ee8))
* **wrap:** let `wrap opencode` target a third-party OpenAI-compatible upstream ([#3125](https://github.com/headroomlabs-ai/headroom/issues/3125)) ([0d7d61d](https://github.com/headroomlabs-ai/headroom/commit/0d7d61d5ccaee25d399ae3209e8ce067e8673b30))
* **wrap:** reject saved bob gateway URLs the proxy would not route ([#3975](https://github.com/headroomlabs-ai/headroom/issues/3975)) ([944eafc](https://github.com/headroomlabs-ai/headroom/commit/944eafc6d4bcebbe6624cff95681f5af8b257868))
* **wrap:** trim the wrap claude startup banner ([#3900](https://github.com/headroomlabs-ai/headroom/issues/3900)) ([aba75cb](https://github.com/headroomlabs-ai/headroom/commit/aba75cbf6d2fe1e4c728e4af258907d9c28028d0))
* **wrap:** warn when reused proxy ignores compression settings ([#4019](https://github.com/headroomlabs-ai/headroom/issues/4019)) ([278bbc8](https://github.com/headroomlabs-ai/headroom/commit/278bbc8771938eec18e89df942e1594b6ddf41d4))


### Performance Improvements

* **proxy:** avoid eager dependency imports ([#3546](https://github.com/headroomlabs-ai/headroom/issues/3546)) ([59bd482](https://github.com/headroomlabs-ai/headroom/commit/59bd482fa1661293d86834e73fe90f0ee21130c5))


### Code Refactoring

* **backends:** reuse the LiteLLM tool converters in the any-llm backend ([#4076](https://github.com/headroomlabs-ai/headroom/issues/4076)) ([03538f2](https://github.com/headroomlabs-ai/headroom/commit/03538f2f2f55cafc0cec4ddf1b22e3189e2a0a24))
* **cli:** one missing-binary error for every wrap command ([#4122](https://github.com/headroomlabs-ai/headroom/issues/4122)) ([2c2357a](https://github.com/headroomlabs-ai/headroom/commit/2c2357ad342de69d4576f0e38efc58646f054913))
* **cli:** remove test-only and dead helpers from wrap, proxy and mcp ([#4118](https://github.com/headroomlabs-ai/headroom/issues/4118)) ([73f59a3](https://github.com/headroomlabs-ai/headroom/commit/73f59a32ccda8fe9de385031ccd032d1007be650))
* **compression:** deprecate the test-only UniversalCompressor package ([#4095](https://github.com/headroomlabs-ai/headroom/issues/4095)) ([fc8ff5a](https://github.com/headroomlabs-ai/headroom/commit/fc8ff5a7619271ffe306ffad50f2ee936d5d2158))
* **core:** remove unreferenced helpers, attributes and a shadowed module ([#4091](https://github.com/headroomlabs-ai/headroom/issues/4091)) ([08fce18](https://github.com/headroomlabs-ai/headroom/commit/08fce1831067005f048cb81f0033abc17a89e9fd))
* **graph:** drop the bespoke codebase-memory-mcp downloader nothing calls ([#4102](https://github.com/headroomlabs-ai/headroom/issues/4102)) ([30d23fb](https://github.com/headroomlabs-ai/headroom/commit/30d23fb799674a5d9a3c531baf09a307d62c2bf2))
* **mcp_registry:** share spec helpers and fold GrokRegistrar onto the Codex TOML registrar ([#4121](https://github.com/headroomlabs-ai/headroom/issues/4121)) ([6e14ee0](https://github.com/headroomlabs-ai/headroom/commit/6e14ee0bc2dde72378b841f708f73cdf79df6e2d))
* **memory,learn,cache:** remove unreferenced classes, methods and constants ([#4112](https://github.com/headroomlabs-ai/headroom/issues/4112)) ([abbf36f](https://github.com/headroomlabs-ai/headroom/commit/abbf36f052fca643a3cd5f7cadd21b5a7d4bf406))
* **memory:** deprecate the never-wired agent memory writers ([#4101](https://github.com/headroomlabs-ai/headroom/issues/4101)) ([2e497cb](https://github.com/headroomlabs-ai/headroom/commit/2e497cbec3c26c1d2c83adcc94794164cbab3268))
* **memory:** deprecate the orphaned Mem0SystemAdapter ([#4114](https://github.com/headroomlabs-ai/headroom/issues/4114)) ([7387b8c](https://github.com/headroomlabs-ai/headroom/commit/7387b8cc11ecdf4775faa6042e7cc15d114b4942))
* **memory:** drop the unused extraction prompts and tool schemas ([#4100](https://github.com/headroomlabs-ai/headroom/issues/4100)) ([6d23895](https://github.com/headroomlabs-ai/headroom/commit/6d23895dc003e865c3c5d4690853551406e7cdc8))
* **memory:** remove the unused memory budget manager ([#4099](https://github.com/headroomlabs-ai/headroom/issues/4099)) ([e7ac6ca](https://github.com/headroomlabs-ai/headroom/commit/e7ac6ca6f81834549a66fc0832b1ddb2470da245))
* **proxy:** delete the unused memory_tool_adapter module ([#4071](https://github.com/headroomlabs-ai/headroom/issues/4071)) ([7e5d97f](https://github.com/headroomlabs-ai/headroom/commit/7e5d97fe29073af0751cc0abc7bdf6a6d3bd74a2))
* **proxy:** drop the test-only memory ranker and file-backed native memory ops ([#4072](https://github.com/headroomlabs-ai/headroom/issues/4072)) ([fc5ac70](https://github.com/headroomlabs-ai/headroom/commit/fc5ac70b4a1eac8f49d86ad386c76c67bab40372))
* **proxy:** parse HEADROOM_OUTPUT_HOLDOUT in one place ([#4082](https://github.com/headroomlabs-ai/headroom/issues/4082)) ([1a4e419](https://github.com/headroomlabs-ai/headroom/commit/1a4e4194a0b26e4f09026c18ac6b8935c6a99c0c))
* **proxy:** remove dead aliases and wrappers from helpers, body_forwarding, forwarded_headers ([#4080](https://github.com/headroomlabs-ai/headroom/issues/4080)) ([63cc9af](https://github.com/headroomlabs-ai/headroom/commit/63cc9afa9d282aeae127e6af20d9a9efa2eebd7e))
* **proxy:** remove dead wiring and unused re-exports from server.py ([#4073](https://github.com/headroomlabs-ai/headroom/issues/4073)) ([58387c1](https://github.com/headroomlabs-ai/headroom/commit/58387c1174e6f7f526c3677b72986079da554a8a))
* **proxy:** remove test-only and dead helpers from the handlers ([#4117](https://github.com/headroomlabs-ai/headroom/issues/4117)) ([31d378b](https://github.com/headroomlabs-ai/headroom/commit/31d378b0e5337bf8c572ca272e8649762457dc5f))
* **proxy:** remove the unreachable debug branches from the Responses payload compressor ([#4116](https://github.com/headroomlabs-ai/headroom/issues/4116)) ([132cd58](https://github.com/headroomlabs-ai/headroom/commit/132cd583daeb968dd4121f0163677f5b1605f29c))
* **proxy:** remove the unreachable debug branches from the Responses unit router ([#4115](https://github.com/headroomlabs-ai/headroom/issues/4115)) ([25cc2d5](https://github.com/headroomlabs-ai/headroom/commit/25cc2d586316fee5cb67b7a25ef2927198a0ae6b))
* **proxy:** remove unreferenced and test-only helpers ([#4074](https://github.com/headroomlabs-ai/headroom/issues/4074)) ([e5cbec5](https://github.com/headroomlabs-ai/headroom/commit/e5cbec5f1a860eb51e4e49507b8eb26742abba22))
* remove test-only compatibility helpers in rollout and agent_savings ([#4089](https://github.com/headroomlabs-ai/headroom/issues/4089)) ([310c108](https://github.com/headroomlabs-ai/headroom/commit/310c108c24caef1839a538a28878b6709f8987f9))
* remove write-only and test-only code in subscription and install ([#4123](https://github.com/headroomlabs-ai/headroom/issues/4123)) ([c191bee](https://github.com/headroomlabs-ai/headroom/commit/c191beef59cc9bde622cf7db251ac94eb2a20c70))
* **transforms:** deprecate the unused Python AnchorSelector port ([#4104](https://github.com/headroomlabs-ai/headroom/issues/4104)) ([9b1971d](https://github.com/headroomlabs-ai/headroom/commit/9b1971dd82c941d683902014b203de4bf617cc61))
* **transforms:** deprecate unused compress_with_stats, extract_batch and align_for_cache ([#4098](https://github.com/headroomlabs-ai/headroom/issues/4098)) ([e4a1ec1](https://github.com/headroomlabs-ai/headroom/commit/e4a1ec19be787a312624fdca52e2184b9a4127b9))
* **transforms:** drop the Python mirror of the Rust log selector ([#4096](https://github.com/headroomlabs-ai/headroom/issues/4096)) ([a20c76c](https://github.com/headroomlabs-ai/headroom/commit/a20c76c26b15557a1bf176c4ef84f46121550297))
* **transforms:** drop the Python mirror of the Rust search selector ([#4103](https://github.com/headroomlabs-ai/headroom/issues/4103)) ([47f8710](https://github.com/headroomlabs-ai/headroom/commit/47f8710817ddc6612127662714b5fcecf83dc644))
* **transforms:** remove the unused summarize_dropped_items ([#4093](https://github.com/headroomlabs-ai/headroom/issues/4093)) ([eaa7308](https://github.com/headroomlabs-ai/headroom/commit/eaa7308a52620ad803b13c7f66300d7196f63212))
* **transforms:** remove unused convenience wrappers and helpers ([#4097](https://github.com/headroomlabs-ai/headroom/issues/4097)) ([5c72d82](https://github.com/headroomlabs-ai/headroom/commit/5c72d824f4d1ab0d46a960f8f61a14d000482591))

<!-- headroom-teams-footer -->

---

**Headroom for Teams:** 3 months of Headroom Enterprise free with a 12-month plan. [Claim the perk →](https://headroom-perks.vercel.app/?source=github&utm_source=github&utm_medium=release-notes&utm_content=v0.41.0)

---

> **Source** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · `v0.41.0` · 2026-10-14 · [upstream release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.41.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
