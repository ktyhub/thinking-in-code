---
title: "promptfoo 0.122.1"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.122.1"
version: "0.122.1"
published: "2026-08-26"
type: "patch"
lang: "en"
summary: "eval: distinguish scan footprint from incurred token usage (#10497) (8df8ef0) · providers: add Gemini 3.7 Flash and Flash-Lite (#10389) (bc6b189)"
---

# promptfoo 0.122.1

## [0.122.1](https://github.com/promptfoo/promptfoo/compare/0.122.0...0.122.1) (2026-08-26)


### Features

* **eval:** distinguish scan footprint from incurred token usage ([#10497](https://github.com/promptfoo/promptfoo/issues/10497)) ([8df8ef0](https://github.com/promptfoo/promptfoo/commit/8df8ef0148a838be26a08a1124a733563db178d7))
* **providers:** add Gemini 3.7 Flash and Flash-Lite ([#10389](https://github.com/promptfoo/promptfoo/issues/10389)) ([bc6b189](https://github.com/promptfoo/promptfoo/commit/bc6b189ba7a2f21098a2e52c9f46063c62a6f696))
* **redteam:** account for multi-turn attacker and grading tokens ([#10407](https://github.com/promptfoo/promptfoo/issues/10407)) ([33cc8bc](https://github.com/promptfoo/promptfoo/commit/33cc8bc90e07d6c4ba36c83001cca1b4726b7593))
* **redteam:** report generation, target, attacker, and grading tokens ([#10408](https://github.com/promptfoo/promptfoo/issues/10408)) ([0891e4e](https://github.com/promptfoo/promptfoo/commit/0891e4e9e49d1c63df6379b1dfbb79bac659e331))
* **tracing:** add test-case roots and universal target spans ([#10328](https://github.com/promptfoo/promptfoo/issues/10328)) ([334586e](https://github.com/promptfoo/promptfoo/commit/334586ee4b21e56d16cff63c9b82134614d05486))
* **tracing:** align spans with OpenTelemetry GenAI conventions ([#10361](https://github.com/promptfoo/promptfoo/issues/10361)) ([e6f44f8](https://github.com/promptfoo/promptfoo/commit/e6f44f8b04cf961d7227ad4062c1c04dcb62c1f0))
* **tracing:** fetch external spans from Grafana Tempo ([#10327](https://github.com/promptfoo/promptfoo/issues/10327)) ([1b445b0](https://github.com/promptfoo/promptfoo/commit/1b445b0db4cf7e2ef87cfb9a09ab397ecae802e2))
* **tracing:** fetch external traces from Braintrust ([#10329](https://github.com/promptfoo/promptfoo/issues/10329)) ([f372318](https://github.com/promptfoo/promptfoo/commit/f3723187d94479add2a51c5f36c4f61fb1999e80))
* **tracing:** fetch external traces from Langfuse ([#10372](https://github.com/promptfoo/promptfoo/issues/10372)) ([f7809f6](https://github.com/promptfoo/promptfoo/commit/f7809f60e44fbb4898f5c2abc31990ac0712b5a8))
* **tracing:** harden trace span persistence ([#10326](https://github.com/promptfoo/promptfoo/issues/10326)) ([d9d0e82](https://github.com/promptfoo/promptfoo/commit/d9d0e82254f265f8d299a7a9fb3e4ed9e99d7834))
* **tracing:** instrument grading and red-team execution ([#10362](https://github.com/promptfoo/promptfoo/issues/10362)) ([a53ba32](https://github.com/promptfoo/promptfoo/commit/a53ba328e6af77fce98e67ab2ca69035f9f026ec))
* **tracing:** integrate OpenAI Agents and Vercel SDK telemetry ([#10364](https://github.com/promptfoo/promptfoo/issues/10364)) ([8f89002](https://github.com/promptfoo/promptfoo/commit/8f890022486aac5884e614fc85d670fd0125d10d))
* **tracing:** standardize tool execution across providers ([#10363](https://github.com/promptfoo/promptfoo/issues/10363)) ([b54ccbd](https://github.com/promptfoo/promptfoo/commit/b54ccbd7b253d9a4f469766f581e0b3803681b24))
* **tracing:** support Claude and Codex subprocess telemetry ([#10365](https://github.com/promptfoo/promptfoo/issues/10365)) ([84c518f](https://github.com/promptfoo/promptfoo/commit/84c518f412ac6e08bdb2e17e21b2eb32312fc649))


### Bug Fixes

* **app:** clarify red team grading actions ([#10366](https://github.com/promptfoo/promptfoo/issues/10366)) ([84a5cf2](https://github.com/promptfoo/promptfoo/commit/84a5cf214f3bad068eb5a90bed0803c129a4e44f))
* **assertions:** avoid regex backtracking in GLEU and SQL parsing ([#10373](https://github.com/promptfoo/promptfoo/issues/10373)) ([57243cf](https://github.com/promptfoo/promptfoo/commit/57243cf84bd9625fa9b4d331806cfb240c75d247))
* **assertions:** correct inverse JSON failure messages ([#9824](https://github.com/promptfoo/promptfoo/issues/9824)) ([d1d8de3](https://github.com/promptfoo/promptfoo/commit/d1d8de31470b0dc238f67cf2de0a926bc0ed3416))
* **assertions:** reject out-of-range trace-span-duration percentile ([#10089](https://github.com/promptfoo/promptfoo/issues/10089)) ([49c0f6d](https://github.com/promptfoo/promptfoo/commit/49c0f6d77496c022c6d32e362522993bb0d72d42))
* **assertions:** score tokenless GLEU inputs as zero ([#9850](https://github.com/promptfoo/promptfoo/issues/9850)) ([cc8c0c6](https://github.com/promptfoo/promptfoo/commit/cc8c0c65f1378d80166b2a209747cd9c1a6302c2))
* **deps:** align Chevrotain CST generator with parser ([#10360](https://github.com/promptfoo/promptfoo/issues/10360)) ([6ae80cd](https://github.com/promptfoo/promptfoo/commit/6ae80cd9e5bde81f976cfba65fcea5d05661c7f8))
* **deps:** block install scripts in Docker builds ([#10330](https://github.com/promptfoo/promptfoo/issues/10330)) ([c4454c4](https://github.com/promptfoo/promptfoo/commit/c4454c401c93d77a6a46fe1d883175f47adc1eff))
* **deps:** bundle the runtime cache dependency ([#10302](https://github.com/promptfoo/promptfoo/issues/10302)) ([b5f8ea3](https://github.com/promptfoo/promptfoo/commit/b5f8ea3b0a307adb91c31ed4e13a3d6896902841))
* **deps:** enforce npm release age during lockfile maintenance ([#10396](https://github.com/promptfoo/promptfoo/issues/10396)) ([42c1076](https://github.com/promptfoo/promptfoo/commit/42c1076b9ba691f65b5c5cbd5bfedc3cbba8842c))
* **deps:** hold jsdom below the release our Node floor cannot install ([#10351](https://github.com/promptfoo/promptfoo/issues/10351)) ([2dcb128](https://github.com/promptfoo/promptfoo/commit/2dcb128ce6ced450fd91d036d5695a29c8369681))
* **deps:** hold tanstack table below incompatible v9 ([#10388](https://github.com/promptfoo/promptfoo/issues/10388)) ([fded938](https://github.com/promptfoo/promptfoo/commit/fded938b65a81e12070a66e90ca4ad2d42a8062e))
* **deps:** keep Renovate on the supported npm major ([#10393](https://github.com/promptfoo/promptfoo/issues/10393)) ([f5034c1](https://github.com/promptfoo/promptfoo/commit/f5034c1a33a6db26f25dfa77e7e587d8386d6b4a))
* **deps:** limit pnpm install scripts and new releases ([#10331](https://github.com/promptfoo/promptfoo/issues/10331)) ([0dbf6c8](https://github.com/promptfoo/promptfoo/commit/0dbf6c8e0bbcaa232b2fe4447545080aa0e5bf18))
* **deps:** patch vulnerable transitive js-yaml releases ([#10356](https://github.com/promptfoo/promptfoo/issues/10356)) ([2626fd0](https://github.com/promptfoo/promptfoo/commit/2626fd0eddf687784f89e7b0aa791953e83b3e72))
* **deps:** prevent incompatible Chevrotain parser updates ([#10306](https://github.com/promptfoo/promptfoo/issues/10306)) ([77c08d5](https://github.com/promptfoo/promptfoo/commit/77c08d5f0cf7720249648ff064dfdef2a3f23200))
* **deps:** prevent incompatible chevrotain-allstar upgrades ([#10399](https://github.com/promptfoo/promptfoo/issues/10399)) ([5357d06](https://github.com/promptfoo/promptfoo/commit/5357d067166b3b3a1eed49e2e5717855643a1188))
* **deps:** restore standard cache dependency resolution ([#10314](https://github.com/promptfoo/promptfoo/issues/10314)) ([ca65846](https://github.com/promptfoo/promptfoo/commit/ca65846615f65a2316c3378adae0607488303e8f))
* **deps:** update anthropic packages ([#10426](https://github.com/promptfoo/promptfoo/issues/10426)) ([ef4cd6b](https://github.com/promptfoo/promptfoo/commit/ef4cd6bd234cb69f63c5fb6c61d3cd8483ab8f54))
* **deps:** update anthropic packages ([#10471](https://github.com/promptfoo/promptfoo/issues/10471)) ([ed5bae3](https://github.com/promptfoo/promptfoo/commit/ed5bae37f5c9d68184ea9378c53f69d456a9d6c2))
* **deps:** update dependency @apidevtools/json-schema-ref-parser to v16 ([#10474](https://github.com/promptfoo/promptfoo/issues/10474)) ([7600c55](https://github.com/promptfoo/promptfoo/commit/7600c558c8dc1e6d8f245d2c2a122dc449d1963d))
* **deps:** update dependency @hono/node-server to v2.1.0 ([#10385](https://github.com/promptfoo/promptfoo/issues/10385)) ([af026d0](https://github.com/promptfoo/promptfoo/commit/af026d02115c31dad4bebe0484ab5b6a3a62f6e2))
* **deps:** update dependency @hono/node-server to v2.1.1 ([#10472](https://github.com/promptfoo/promptfoo/issues/10472)) ([24ef223](https://github.com/promptfoo/promptfoo/commit/24ef22354a86f8adf32fbc89d9dfe581a6671162))
* **deps:** update dependency chalk to v6 ([#10309](https://github.com/promptfoo/promptfoo/issues/10309)) ([1c30e18](https://github.com/promptfoo/promptfoo/commit/1c30e183c4a464d953898398399dc6aa69786471))
* **deps:** update dependency gcp-metadata to v9 ([#10350](https://github.com/promptfoo/promptfoo/issues/10350)) ([16cb1f3](https://github.com/promptfoo/promptfoo/commit/16cb1f3c251d2aa8227ead6fd802ee3b8790f5d2))
* **deps:** update dependency js-yaml to v5.2.3 ([#10354](https://github.com/promptfoo/promptfoo/issues/10354)) ([fc36f28](https://github.com/promptfoo/promptfoo/commit/fc36f283493e4c23afee1e1ae9a2e7b127cf2ea3))
* **deps:** update dependency js-yaml to v5.3.0 ([#10473](https://github.com/promptfoo/promptfoo/issues/10473)) ([e419aff](https://github.com/promptfoo/promptfoo/commit/e419aff5021543ff3d940c0ce408e552ca3d6e9b))
* **deps:** update dependency openai to v7 ([#10318](https://github.com/promptfoo/promptfoo/issues/10318)) ([9a5f84b](https://github.com/promptfoo/promptfoo/commit/9a5f84b96976111376a586c48414014ddd8b42fd))
* **providers:** apply path-traversal guard to all callback loaders ([#9472](https://github.com/promptfoo/promptfoo/issues/9472)) ([87a5a42](https://github.com/promptfoo/promptfoo/commit/87a5a4267c548033398b351a91b72f371930d47f))
* **providers:** avoid crash on empty choices in snowflake and openrouter ([#10418](https://github.com/promptfoo/promptfoo/issues/10418)) ([c149fcf](https://github.com/promptfoo/promptfoo/commit/c149fcf36c2aeaac83a215906c2caa659cafecff))
* **providers:** count cached and thinking tokens for Claude on Bedrock ([#10492](https://github.com/promptfoo/promptfoo/issues/10492)) ([0170037](https://github.com/promptfoo/promptfoo/commit/0170037970dd4732f7542c60ceafa5f4951289de))
* **providers:** count Claude Agent SDK subagent tokens ([#10455](https://github.com/promptfoo/promptfoo/issues/10455)) ([5cd3baa](https://github.com/promptfoo/promptfoo/commit/5cd3baae39922b704d5cf6e8ccbe4a8283e921e4))
* **providers:** future-proof Claude sampling without alias collisions ([#10359](https://github.com/promptfoo/promptfoo/issues/10359)) ([9a1e965](https://github.com/promptfoo/promptfoo/commit/9a1e9659bbe694c8b1122a415428a8daf5472b22))
* **providers:** harden coding-agent tool policies ([#9044](https://github.com/promptfoo/promptfoo/issues/9044)) ([7759d6f](https://github.com/promptfoo/promptfoo/commit/7759d6f9421499e6bf72b5e843113fb5d8a531d9))
* **providers:** honor Claude Agent SDK cancellation ([#10459](https://github.com/promptfoo/promptfoo/issues/10459)) ([a488cb4](https://github.com/promptfoo/promptfoo/commit/a488cb498d3786befcdcf415b2373bc02fe1808f))
* **providers:** isolate Anthropic credentials and Meta Responses ([#10110](https://github.com/promptfoo/promptfoo/issues/10110)) ([f24966a](https://github.com/promptfoo/promptfoo/commit/f24966ab7c3f4aab0403611e18de5f2590b3e052))
* **providers:** normalize OpenRouter URLs and validate SDK ranges ([#10433](https://github.com/promptfoo/promptfoo/issues/10433)) ([a0b9c34](https://github.com/promptfoo/promptfoo/commit/a0b9c349fa2e0631d68a66042bda319ab4e707e0))
* **providers:** preserve Claude SDK task tools ([#10489](https://github.com/promptfoo/promptfoo/issues/10489)) ([ac71008](https://github.com/promptfoo/promptfoo/commit/ac71008b68946c4cdb9c3e8c507a29565813d523))
* **providers:** preserve scheduled Claude task results ([#10233](https://github.com/promptfoo/promptfoo/issues/10233)) ([b1999a0](https://github.com/promptfoo/promptfoo/commit/b1999a03d43918f3016e8bea83cd0cdb24f8500c))
* **providers:** raise max_tokens above a manual thinking budget on every Claude route ([#10491](https://github.com/promptfoo/promptfoo/issues/10491)) ([73e0e1f](https://github.com/promptfoo/promptfoo/commit/73e0e1fb5dea61695acb3af9bcf7a13889bea913))
* **providers:** redact AWS SigV4 credentials in sanitized output ([#10482](https://github.com/promptfoo/promptfoo/issues/10482)) ([eeebd72](https://github.com/promptfoo/promptfoo/commit/eeebd72abd54ebf0de9e47541a6547577db63e2b))
* **providers:** resolve the anthropic shorthand for uncatalogued models ([#10490](https://github.com/promptfoo/promptfoo/issues/10490)) ([3c77783](https://github.com/promptfoo/promptfoo/commit/3c77783e19aa2df6b14699ec21eacac9c66d97ab))
* **providers:** update GPT model costs ([#10319](https://github.com/promptfoo/promptfoo/issues/10319)) ([9988fcb](https://github.com/promptfoo/promptfoo/commit/9988fcb02b1dc0b6aee11e4c2266b21c54c9a1da))
* **providers:** validate coding-agent targets and cache keys ([#10111](https://github.com/promptfoo/promptfoo/issues/10111)) ([2003fcc](https://github.com/promptfoo/promptfoo/commit/2003fcc659fa466f654c1be685475eda6fa9570a))
* **redteam:** account for all scan-time model calls ([#10479](https://github.com/promptfoo/promptfoo/issues/10479)) ([9b11bd8](https://github.com/promptfoo/promptfoo/commit/9b11bd8b5aea423c885cd56536cda78bf13e8422))
* **redteam:** account for remote strategy generation usage ([#10445](https://github.com/promptfoo/promptfoo/issues/10445)) ([02c9209](https://github.com/promptfoo/promptfoo/commit/02c9209aeab1c0f72b8aa923967cf0a8f869de16))
* **redteam:** count unmetered generation requests ([#10429](https://github.com/promptfoo/promptfoo/issues/10429)) ([b74d5e0](https://github.com/promptfoo/promptfoo/commit/b74d5e05570b2b4fcc48986503764b1ca8bfe5ed))
* **redteam:** preserve cached generation and retry accounting ([#10507](https://github.com/promptfoo/promptfoo/issues/10507)) ([4868649](https://github.com/promptfoo/promptfoo/commit/486864972a8e4f6d75832a138f4410325ab6c0d0))
* **redteam:** preserve cumulative grading token usage ([#10406](https://github.com/promptfoo/promptfoo/issues/10406)) ([be75b25](https://github.com/promptfoo/promptfoo/commit/be75b25b13a012d2c60820a244770bf1ef1241e0))
* **redteam:** prevent cached and duplicate token charges ([#10417](https://github.com/promptfoo/promptfoo/issues/10417)) ([4ba76df](https://github.com/promptfoo/promptfoo/commit/4ba76df943f4488281830f7424f64136b6f419cd))
* **redteam:** separate Mischievous User token usage ([#10431](https://github.com/promptfoo/promptfoo/issues/10431)) ([f30f67d](https://github.com/promptfoo/promptfoo/commit/f30f67d0134558123ce3a9a3ad2f024439e98c93))
* **scheduler:** parse RFC 3339 rate-limit reset headers ([#10322](https://github.com/promptfoo/promptfoo/issues/10322)) ([12f0322](https://github.com/promptfoo/promptfoo/commit/12f0322ab108886215922495d4ae9dbddfc14af5))
* **tracing:** capture effective OpenAI completion request settings ([#10368](https://github.com/promptfoo/promptfoo/issues/10368)) ([176215c](https://github.com/promptfoo/promptfoo/commit/176215c5a809cef59f38b27b682c07eef7a8dbc7))
* **tracing:** select meaningful model and tool spans for red teaming ([#10358](https://github.com/promptfoo/promptfoo/issues/10358)) ([be44f83](https://github.com/promptfoo/promptfoo/commit/be44f8389bcd234e7144861957f670548ce85326))
* **webui:** stop the media bulk download when the page unmounts ([#10487](https://github.com/promptfoo/promptfoo/issues/10487)) ([2309f65](https://github.com/promptfoo/promptfoo/commit/2309f65e1c64db9be66c785f5ccb6ee51eacec7d))

---

> **Source** [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · `0.122.1` · 2026-08-26 · [upstream release](https://github.com/promptfoo/promptfoo/releases/tag/0.122.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
