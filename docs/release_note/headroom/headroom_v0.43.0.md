---
title: "headroom v0.43.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.43.0"
version: "v0.43.0"
published: "2026-11-05"
type: "minor"
lang: "en"
---

# headroom v0.43.0

## [0.43.0](https://github.com/headroomlabs-ai/headroom/compare/v0.42.0...v0.43.0) (2026-11-05)


### ⚠ BREAKING CHANGES

* **mcp:** port MCP servers to SDK 2.x ([#4603](https://github.com/headroomlabs-ai/headroom/issues/4603))

### Features

* **ccr:** answer headroom_retrieve on streaming chat completions ([#4631](https://github.com/headroomlabs-ai/headroom/issues/4631)) ([31dcaf4](https://github.com/headroomlabs-ai/headroom/commit/31dcaf41f7fafaebec0838a05ff328da456faef0))
* **mcp:** port MCP servers to SDK 2.x ([#4603](https://github.com/headroomlabs-ai/headroom/issues/4603)) ([ee2252a](https://github.com/headroomlabs-ai/headroom/commit/ee2252a3155c87e948c8893b79af5824eb30e64c))
* **plugins:** headroom skill for Claude Code, Codex, Copilot and skills.sh ([#4533](https://github.com/headroomlabs-ai/headroom/issues/4533)) ([66e1467](https://github.com/headroomlabs-ai/headroom/commit/66e14676827366c2bf8d15e252f8766cb27b1a98))
* **savings:** show the proxy's model-routing savings in headroom savings ([#4304](https://github.com/headroomlabs-ai/headroom/issues/4304)) ([aaab338](https://github.com/headroomlabs-ai/headroom/commit/aaab338b64cb55929de904411db65db126e22ec0))


### Bug Fixes

* [BUG] A timeout in one image compression call resets the shared worker pool and affects concurrent requests ([#4528](https://github.com/headroomlabs-ai/headroom/issues/4528)) ([e9bcfe7](https://github.com/headroomlabs-ai/headroom/commit/e9bcfe73fadf69f0b27b7bc338ea7d2380931054))
* [BUG] DirectMem0Adapter.search_memories calls removed mem0 search API ([#4518](https://github.com/headroomlabs-ai/headroom/issues/4518)) ([d9cee45](https://github.com/headroomlabs-ai/headroom/commit/d9cee452681c79d6f13919e9e651e88a774c0874))
* [BUG] Saved request metrics lose their cache optimization fields ([#4584](https://github.com/headroomlabs-ai/headroom/issues/4584)) ([b4c9bdf](https://github.com/headroomlabs-ai/headroom/commit/b4c9bdf100d97fb038beba95de6d4ad6a8786090))
* [BUG] Volatile SQLite metrics stores lose their schema before the first save ([#4633](https://github.com/headroomlabs-ai/headroom/issues/4633)) ([d8ff0fe](https://github.com/headroomlabs-ai/headroom/commit/d8ff0fe9d2cb2477f6662a90f8fcd7e030a52666))
* Add info about apply to README.md ([#1592](https://github.com/headroomlabs-ai/headroom/issues/1592)) ([4d34680](https://github.com/headroomlabs-ai/headroom/commit/4d34680c34ad379d693820869e77d4a2a6be2cdf))
* **backends/litellm:** keep cache_control on text blocks for Bedrock prompt caching ([#4565](https://github.com/headroomlabs-ai/headroom/issues/4565)) ([23a5bb1](https://github.com/headroomlabs-ai/headroom/commit/23a5bb1c81dc943398f9271f068a02487207f2e7))
* **backends:** forward the standard service_tier param (litellm + anyllm) ([#2468](https://github.com/headroomlabs-ai/headroom/issues/2468)) ([62cc38a](https://github.com/headroomlabs-ai/headroom/commit/62cc38a6b09dbcf723681a0ff56acd02131ad1f1))
* **cache:** build semantic entry before evicting so a failed embedding keeps live entries ([#4581](https://github.com/headroomlabs-ai/headroom/issues/4581)) ([0d4c450](https://github.com/headroomlabs-ai/headroom/commit/0d4c450d774691568b850f0d22ce17e087405281))
* **cache:** count a tool_result with no text as replayable in the frozen prefix ([#4523](https://github.com/headroomlabs-ai/headroom/issues/4523)) ([fba09f6](https://github.com/headroomlabs-ai/headroom/commit/fba09f674c8a9c91b39a563a70ab7727b44d1dbc))
* **cache:** fail closed on SQLite corruption instead of deleting the store online ([#4361](https://github.com/headroomlabs-ai/headroom/issues/4361)) ([9801833](https://github.com/headroomlabs-ai/headroom/commit/98018333f997783487af15efe4d9e631ecd85939))
* **cache:** invalidate configured registry instances on replacement ([#4363](https://github.com/headroomlabs-ai/headroom/issues/4363)) ([1bcdca2](https://github.com/headroomlabs-ai/headroom/commit/1bcdca2d9dd279f49aa4276d523d93c2cfeb5a51))
* **cache:** namespace SemanticCacheLayer by provider, model and metadata ([#4473](https://github.com/headroomlabs-ai/headroom/issues/4473)) ([99cdaaf](https://github.com/headroomlabs-ai/headroom/commit/99cdaaf1c7de2bd81a8e64f198462fd1ceec3a17))
* **cache:** preserve OpenAI tool block metadata on cached replay ([#4334](https://github.com/headroomlabs-ai/headroom/issues/4334)) ([f1035ac](https://github.com/headroomlabs-ai/headroom/commit/f1035ac73788a577fb5495a59eed0fc925d42782))
* **cache:** scope router results to request compression policy ([#4590](https://github.com/headroomlabs-ai/headroom/issues/4590)) ([5d40fe7](https://github.com/headroomlabs-ai/headroom/commit/5d40fe76471b12ffe2a5c81309d9df617ca60b41))
* **ccr:** buffer a stream only for a marker new this turn ([#4607](https://github.com/headroomlabs-ai/headroom/issues/4607)) ([946a70c](https://github.com/headroomlabs-ai/headroom/commit/946a70cfcbdc522f940b01f0aeb2b7a214f54cb5))
* **ccr:** keep proactive expansion out of the cached prefix ([#4300](https://github.com/headroomlabs-ai/headroom/issues/4300)) ([b1f340e](https://github.com/headroomlabs-ai/headroom/commit/b1f340e0b35d4659d7ebc993d9dcc08057da93e9))
* **cli:** document that code-aware compression is enabled by default ([#4616](https://github.com/headroomlabs-ai/headroom/issues/4616)) ([affd17c](https://github.com/headroomlabs-ai/headroom/commit/affd17c5fde174ad78287eef1696251e18363722))
* **client:** close upstream responses when wrapped streams are closed ([#4482](https://github.com/headroomlabs-ai/headroom/issues/4482)) ([3d8dcf4](https://github.com/headroomlabs-ai/headroom/commit/3d8dcf476c148f633e66eb98c478095adfd9354b))
* **client:** honor configured cache optimizer enablement ([#4501](https://github.com/headroomlabs-ai/headroom/issues/4501)) ([d4c0810](https://github.com/headroomlabs-ai/headroom/commit/d4c0810ea3ebdd7e49e5d29f4e0dfd2da1511b02))
* **client:** preserve Anthropic create stream flags ([#4500](https://github.com/headroomlabs-ai/headroom/issues/4500)) ([3910caa](https://github.com/headroomlabs-ai/headroom/commit/3910caabd68311ae99d5659aa2d470eb2c15ea0e))
* **codex:** accept multi-line inline tables in Codex config.toml ([#4436](https://github.com/headroomlabs-ai/headroom/issues/4436)) ([4a851ed](https://github.com/headroomlabs-ai/headroom/commit/4a851ed25469a51de00ccd00d14d0a6ab62a0866))
* **compaction:** reject negative dictionary indices and non-array legends in expand_compacted ([#4470](https://github.com/headroomlabs-ai/headroom/issues/4470)) ([3c1fcbd](https://github.com/headroomlabs-ai/headroom/commit/3c1fcbdfde31069795b03faf9f43fdd73e6941d9))
* **core:** case-insensitive Bearer scheme, clamp SQLite CCR TTLs, redact the Redis URL in logs ([#4561](https://github.com/headroomlabs-ai/headroom/issues/4561)) ([9e8cc64](https://github.com/headroomlabs-ai/headroom/commit/9e8cc64b48ebd4e2fb31332f261464d3bd0550b7))
* **dedup:** bound line-number digit run and never fold into a longer pointer ([#4488](https://github.com/headroomlabs-ai/headroom/issues/4488)) ([21e8867](https://github.com/headroomlabs-ai/headroom/commit/21e8867504df57c8f99aa30bd889e7eed01cd49e))
* **deps:** clear the glob and minimatch npm audit findings ([#4599](https://github.com/headroomlabs-ai/headroom/issues/4599)) ([2e49e53](https://github.com/headroomlabs-ai/headroom/commit/2e49e5304b245fdaca0d2640bb1a59cb1ffa63fc))
* **diff:** keep combined-diff changes made against a later parent ([#4318](https://github.com/headroomlabs-ai/headroom/issues/4318)) ([4b788fd](https://github.com/headroomlabs-ai/headroom/commit/4b788fd04d407cea0113c74f979f7cc3072a0132))
* **docker:** install the redis extra in every image ([#4514](https://github.com/headroomlabs-ai/headroom/issues/4514)) ([8d5dde7](https://github.com/headroomlabs-ai/headroom/commit/8d5dde77656c9bb3daa354a14ffa6904cb8311aa))
* **docker:** pass RUNTIME_HOME=/root for root bake targets ([#4445](https://github.com/headroomlabs-ai/headroom/issues/4445)) ([670767e](https://github.com/headroomlabs-ai/headroom/commit/670767eeb49f224a7a0bcbcc31b3584a35110b7d))
* **doctor:** detect root openai_base_url Codex routing and agent-configured proxy ports ([#4490](https://github.com/headroomlabs-ai/headroom/issues/4490)) ([222f2d1](https://github.com/headroomlabs-ai/headroom/commit/222f2d1df3c6296462bc38c871cd29c221af55bc))
* **evals:** reject changed numeric probe values ([#4502](https://github.com/headroomlabs-ai/headroom/issues/4502)) ([1fe8549](https://github.com/headroomlabs-ai/headroom/commit/1fe8549f9ca77a2bc1280e4319980e0b9b31f5b9))
* **install:** stabilize Windows task lifecycle and eliminate console window popup ([#4627](https://github.com/headroomlabs-ai/headroom/issues/4627)) ([6b903cb](https://github.com/headroomlabs-ai/headroom/commit/6b903cbc81c13f417485f059aa6ef7aca6b0c4ec))
* **install:** tolerate absent Windows tasks in stop_supervisor ([#4465](https://github.com/headroomlabs-ai/headroom/issues/4465)) ([#4468](https://github.com/headroomlabs-ai/headroom/issues/4468)) ([50af2ff](https://github.com/headroomlabs-ai/headroom/commit/50af2ff7a81efb89d6752374a811be4fa2eec6f6))
* **kompress:** keep words past the tokenizer's truncation point ([#4328](https://github.com/headroomlabs-ai/headroom/issues/4328)) ([bb13384](https://github.com/headroomlabs-ai/headroom/commit/bb13384829069e7e0559fccf77620891e0c90be0))
* **kompress:** read the pinned snapshot from Python's one HF cache in the native proxy ([#4438](https://github.com/headroomlabs-ai/headroom/issues/4438)) ([eef44f6](https://github.com/headroomlabs-ai/headroom/commit/eef44f60cc56118a0de98455012cc18ff3eaafbd))
* **langgraph:** replace the compressed ToolMessage in graph state ([#4620](https://github.com/headroomlabs-ai/headroom/issues/4620)) ([70a8f09](https://github.com/headroomlabs-ai/headroom/commit/70a8f0979e585aa4e9b6f663fa7528340fb4efd6))
* **mcp:** confine headroom_read to the workspace (GHSA-8g49-pg6g-xgrf) ([#4525](https://github.com/headroomlabs-ai/headroom/issues/4525)) ([8ab2e91](https://github.com/headroomlabs-ai/headroom/commit/8ab2e914687266f5b602f6d3a78f13026fd5ef88))
* **memory:** bound verb-pattern word runs to stop quadratic backtracking in bridge import ([#4370](https://github.com/headroomlabs-ai/headroom/issues/4370)) ([#4376](https://github.com/headroomlabs-ai/headroom/issues/4376)) ([d232d09](https://github.com/headroomlabs-ai/headroom/commit/d232d097cf33d92f3a5112c14a306ba4a80330ee))
* **memory:** fail close unresolved project operations ([#2637](https://github.com/headroomlabs-ai/headroom/issues/2637)) ([957ab18](https://github.com/headroomlabs-ai/headroom/commit/957ab1830d73a39ba7662ee9b01dd22c7abd403e))
* **memory:** keep learned evidence until persistence succeeds ([#4229](https://github.com/headroomlabs-ai/headroom/issues/4229)) ([662a7f6](https://github.com/headroomlabs-ai/headroom/commit/662a7f6fd836ca87db5f2093c6487b500e8da2eb))
* **memory:** preserve parent scopes when clearing memories ([#4305](https://github.com/headroomlabs-ai/headroom/issues/4305)) ([a8375a1](https://github.com/headroomlabs-ai/headroom/commit/a8375a1d26c5fc6dd619bfa7a50a15bbba18acf3))
* **mixed-content:** do not carve ISO-timestamped log rows as search results ([#4463](https://github.com/headroomlabs-ai/headroom/issues/4463)) ([abbade9](https://github.com/headroomlabs-ai/headroom/commit/abbade9b4c761a82f711d0687703d0409fbe6edc))
* **offline:** guard the learn and memory-eval LLM calls under HEADROOM_OFFLINE ([#4344](https://github.com/headroomlabs-ai/headroom/issues/4344)) ([dd361bb](https://github.com/headroomlabs-ai/headroom/commit/dd361bb7a3a1d3f2e3c7572bf544ea4ea895b0a5))
* **openclaw/release:** ship responsive npm integrations ([#1458](https://github.com/headroomlabs-ai/headroom/issues/1458)) ([33f2044](https://github.com/headroomlabs-ai/headroom/commit/33f204406cc670588b9a873678b74b4af6ca3620))
* **openclaw:** record turn advancements as one marker file per key ([#4212](https://github.com/headroomlabs-ai/headroom/issues/4212)) ([24acbe8](https://github.com/headroomlabs-ai/headroom/commit/24acbe8f32b6d49e3f61097398330e7529729d3e))
* **opencode:** only route POST requests to LLM endpoint paths ([#4464](https://github.com/headroomlabs-ai/headroom/issues/4464)) ([336d462](https://github.com/headroomlabs-ai/headroom/commit/336d46225370c946ad8420ecb3f6bac81193e2f7))
* **opencode:** route Copilot Claude models through the proxy ([#4594](https://github.com/headroomlabs-ai/headroom/issues/4594)) ([3d9a6f2](https://github.com/headroomlabs-ai/headroom/commit/3d9a6f2cf7fefa2cd0d347521e0050d604a50d22))
* **output-savings:** rewrite a pre-rule ledger once instead of warning on every /stats poll ([#4196](https://github.com/headroomlabs-ai/headroom/issues/4196)) ([96e81ac](https://github.com/headroomlabs-ai/headroom/commit/96e81ac6703dcfcf4535f989319d677775e2384d))
* **packaging:** rename the sandbox extra to lean and correct SECURITY.md claims ([#3727](https://github.com/headroomlabs-ai/headroom/issues/3727)) ([09b7e8c](https://github.com/headroomlabs-ai/headroom/commit/09b7e8c1e41779b4c22f1a4ec941b59a61e621f1))
* **packaging:** use direct CLI module entry point ([#2665](https://github.com/headroomlabs-ai/headroom/issues/2665)) ([2892214](https://github.com/headroomlabs-ai/headroom/commit/28922148816b2b6ebf192abfcd6e65db8bb71511))
* **pipeline:** store the pipeline input in CCR behind offload markers ([#4576](https://github.com/headroomlabs-ai/headroom/issues/4576)) ([4d7765c](https://github.com/headroomlabs-ai/headroom/commit/4d7765c84b06d1a8630faa32a897a39a40261cd1))
* **pricing:** add Claude Haiku 5.5 rates, 1M context and its 100K long-prompt card ([#4037](https://github.com/headroomlabs-ai/headroom/issues/4037)) ([703755e](https://github.com/headroomlabs-ai/headroom/commit/703755e873d3af74b89d25792c7c9869322b0467))
* **privacy:** turn off Mem0's PostHog telemetry by default ([#4619](https://github.com/headroomlabs-ai/headroom/issues/4619)) ([fe69f38](https://github.com/headroomlabs-ai/headroom/commit/fe69f381168035ea6527bb7b908d11eeeb01838f))
* **providers:** isolate resolved Anthropic context limits ([#4593](https://github.com/headroomlabs-ai/headroom/issues/4593)) ([51258ef](https://github.com/headroomlabs-ai/headroom/commit/51258ef14a987b2c3137027e0c90f586eb290462))
* **proxy/memory:** harden _extract_tool_calls against malformed choices and blocks ([#2483](https://github.com/headroomlabs-ai/headroom/issues/2483)) ([effa5a5](https://github.com/headroomlabs-ai/headroom/commit/effa5a5886be7e3c5bc553b86da5b506046d461f))
* **proxy:** allow loopback-published container hosts to access /debug/memory ([#4259](https://github.com/headroomlabs-ai/headroom/issues/4259)) ([e546e71](https://github.com/headroomlabs-ai/headroom/commit/e546e71aeb32c355584d37abb61e8d587efce0c3))
* **proxy:** answer /api/hello probes behind the token gate, log rejection context ([#4150](https://github.com/headroomlabs-ai/headroom/issues/4150)) ([673831a](https://github.com/headroomlabs-ai/headroom/commit/673831a456ef0f551de8dc3b2cbb0deae3861c65))
* **proxy:** cap cache_control breakpoints on OpenAI chat path ([#4471](https://github.com/headroomlabs-ai/headroom/issues/4471)) ([#4491](https://github.com/headroomlabs-ai/headroom/issues/4491)) ([55602fc](https://github.com/headroomlabs-ai/headroom/commit/55602fc1e207e7101917e45bf6dba30ce544558c))
* **proxy:** do not book Gemini countTokens as a request outcome ([#4412](https://github.com/headroomlabs-ai/headroom/issues/4412)) ([4d2dd62](https://github.com/headroomlabs-ai/headroom/commit/4d2dd62b7c61724497b4bde33ef8685717f6a682))
* **proxy:** don't fail startup when libc_ver() can't read the interpreter ([#4519](https://github.com/headroomlabs-ai/headroom/issues/4519)) ([28172a9](https://github.com/headroomlabs-ai/headroom/commit/28172a921f4e3945aa43061a9e5cdd0ffd066c0e))
* **proxy:** forward Copilot accounting headers on streaming path ([#4431](https://github.com/headroomlabs-ai/headroom/issues/4431)) ([66023a0](https://github.com/headroomlabs-ai/headroom/commit/66023a0187b3260747ece4e99e6932098805442a))
* **proxy:** handle ClientDisconnect in anthropic_messages ([#3532](https://github.com/headroomlabs-ai/headroom/issues/3532)) ([251d149](https://github.com/headroomlabs-ai/headroom/commit/251d149a13ae482c1a0843d899b0321e175ac66d))
* **proxy:** honor x-headroom-base-url on provider passthrough routes ([#4596](https://github.com/headroomlabs-ai/headroom/issues/4596)) ([5c8772b](https://github.com/headroomlabs-ai/headroom/commit/5c8772b7210caeb291a202a58d4b5e88d51ff35b))
* **proxy:** install SOCKS support for websocket proxies ([#3357](https://github.com/headroomlabs-ai/headroom/issues/3357)) ([79181ca](https://github.com/headroomlabs-ai/headroom/commit/79181ca0fe35798b25104ff93b2c3a6c38baa72c))
* **proxy:** keep Gemini memory context on entries with non-text parts ([#4506](https://github.com/headroomlabs-ai/headroom/issues/4506)) ([35a2b76](https://github.com/headroomlabs-ai/headroom/commit/35a2b763f09bb147888aeeec69f72d1ed3ae872b))
* **proxy:** keep health probes and the Codex attestation out of the proxy log ([#4611](https://github.com/headroomlabs-ai/headroom/issues/4611)) ([78736a1](https://github.com/headroomlabs-ai/headroom/commit/78736a16bc46ee0bd86b7aae8ef04f7f9cfa9d6d))
* **proxy:** keep read maturation out of the provider-confirmed prefix ([#4522](https://github.com/headroomlabs-ai/headroom/issues/4522)) ([526e06b](https://github.com/headroomlabs-ai/headroom/commit/526e06b7e0120820e5b1be44b4ded70698bb86c8))
* **proxy:** keep tool deferral on Copilot Business/Enterprise/Individual hosts ([#4608](https://github.com/headroomlabs-ai/headroom/issues/4608)) ([be456d4](https://github.com/headroomlabs-ai/headroom/commit/be456d4e3f46c7f4dae725c2dd150324000c724f))
* **proxy:** log unknown model ids as one bounded token; skip unparseable PERF lines ([#4374](https://github.com/headroomlabs-ai/headroom/issues/4374)) ([c014bd6](https://github.com/headroomlabs-ai/headroom/commit/c014bd6311742e35c86ef64adfbec88ab264ef28))
* **proxy:** preserve response cache keys across in-place hooks ([#4457](https://github.com/headroomlabs-ai/headroom/issues/4457)) ([03590cd](https://github.com/headroomlabs-ai/headroom/commit/03590cd61e17ad1ef313e38a35932f729ff0c871))
* **proxy:** recognise every local spelling of the proxy in the cc-switch loop guard ([#4405](https://github.com/headroomlabs-ai/headroom/issues/4405)) ([d9958bf](https://github.com/headroomlabs-ai/headroom/commit/d9958bfdff047ff2a7ef26f9e29fc7263f790346))
* **proxy:** reconcile Chat content-block cache markers after prefix replay ([#4333](https://github.com/headroomlabs-ai/headroom/issues/4333)) ([35ca9b8](https://github.com/headroomlabs-ai/headroom/commit/35ca9b835616f7923eab23e99e9561a8da452f9f))
* **proxy:** route /v1/models to the x-headroom-base-url upstream ([#4308](https://github.com/headroomlabs-ai/headroom/issues/4308)) ([6ef52c2](https://github.com/headroomlabs-ai/headroom/commit/6ef52c2047688e41c7903a0331149a915f20d6b3))
* **proxy:** skip memory-context search in cache mode on OpenAI routes ([#4632](https://github.com/headroomlabs-ai/headroom/issues/4632)) ([365f6fe](https://github.com/headroomlabs-ai/headroom/commit/365f6fe5233c4e102584ee4c3e7a140aeccb6a75))
* **proxy:** skip memory-context search on OpenAI paths in cache mode ([#4634](https://github.com/headroomlabs-ai/headroom/issues/4634)) ([3654037](https://github.com/headroomlabs-ai/headroom/commit/36540379e0dee0c071e3a3ff00bea9b16eb3902a))
* **proxy:** skip the memory-context search in cache mode ([#4606](https://github.com/headroomlabs-ai/headroom/issues/4606)) ([053925b](https://github.com/headroomlabs-ai/headroom/commit/053925b03c6cae028731634f0ad3557518f931d5))
* **proxy:** strip only one leading space from SSE field values ([#4306](https://github.com/headroomlabs-ai/headroom/issues/4306)) ([9226eaf](https://github.com/headroomlabs-ai/headroom/commit/9226eaf3852f6d7462ebb95e6d09af3b33eb53c3))
* **proxy:** strip upstream transport framing headers from Gemini response replays ([#4605](https://github.com/headroomlabs-ai/headroom/issues/4605)) ([dfcac78](https://github.com/headroomlabs-ai/headroom/commit/dfcac78119b7038b2e20ad38cead2f4e7fe60c43))
* **read-lifecycle:** keep Reads fresh after a failed Edit or Write ([#4461](https://github.com/headroomlabs-ai/headroom/issues/4461)) ([4c3799f](https://github.com/headroomlabs-ai/headroom/commit/4c3799fd81567cd516cdc5c1463f23cea99d6594))
* **relevance:** cap embedding batch size so ORT's arena stays small ([#4507](https://github.com/headroomlabs-ai/headroom/issues/4507)) ([a2d4fe7](https://github.com/headroomlabs-ai/headroom/commit/a2d4fe72381e186651466ee94e92ce9d8d1396cc))
* **relevance:** hand the embedding arena back after each run on macOS ([#4567](https://github.com/headroomlabs-ai/headroom/issues/4567)) ([2363f83](https://github.com/headroomlabs-ai/headroom/commit/2363f833092052227a9b98a9e21a0b1a69647eab))
* **relevance:** load the Rust default embedder from Python's pinned snapshot ([#4190](https://github.com/headroomlabs-ai/headroom/issues/4190)) ([9bb4b13](https://github.com/headroomlabs-ai/headroom/commit/9bb4b130ff87a2914a8f74dbcc6b49b49c3c87a8))
* **router:** keep small shell results verbatim ([#3590](https://github.com/headroomlabs-ai/headroom/issues/3590)) ([#4426](https://github.com/headroomlabs-ai/headroom/issues/4426)) ([4ee6164](https://github.com/headroomlabs-ai/headroom/commit/4ee616453fcebed5ab7ce847e1da1016c827a4ed))
* **router:** preserve read protection for quiet sed options ([#4521](https://github.com/headroomlabs-ai/headroom/issues/4521)) ([312ffec](https://github.com/headroomlabs-ai/headroom/commit/312ffec8ead5c8c93b8f4c794ca7f588a7b84bd2))
* **router:** validate lossless provider output on the excluded-tool path ([#4486](https://github.com/headroomlabs-ai/headroom/issues/4486)) ([9f068a6](https://github.com/headroomlabs-ai/headroom/commit/9f068a6c135730c1bd4f1d800083f9318a3067a4))
* **scripts:** resolve hooks dir via git so install-git-hooks works in linked worktrees ([#4176](https://github.com/headroomlabs-ai/headroom/issues/4176)) ([0f4275f](https://github.com/headroomlabs-ai/headroom/commit/0f4275f8b331f3db14c41d958c85180a3c70a318))
* **sdk:** carry Vercel AI SDK reasoning parts and provider options through compression ([#4564](https://github.com/headroomlabs-ai/headroom/issues/4564)) ([a26faae](https://github.com/headroomlabs-ai/headroom/commit/a26faaeee34ecfde57608aea4a1ec7ea2b33272f))
* **sdk:** send Anthropic messages to /v1/compress natively so thinking blocks survive ([#4489](https://github.com/headroomlabs-ai/headroom/issues/4489)) ([cd5e2b9](https://github.com/headroomlabs-ai/headroom/commit/cd5e2b9e73eb8bd783ab872bdda71263b941e2d3))
* **security:** lstat before narrowing sqlite files ([#4527](https://github.com/headroomlabs-ai/headroom/issues/4527)) ([2cf64ef](https://github.com/headroomlabs-ai/headroom/commit/2cf64ef0cc918c7cdb3de98d56f48fdc9c4c2b4b))
* **smart-crusher:** preserve unchanged JSON bytes ([#4044](https://github.com/headroomlabs-ai/headroom/issues/4044)) ([93279f3](https://github.com/headroomlabs-ai/headroom/commit/93279f3208b1afffdbba87c2fdecbeea246d5234))
* **tabular:** keep empty records and separator-like Markdown body rows ([#4582](https://github.com/headroomlabs-ai/headroom/issues/4582)) ([5cebb90](https://github.com/headroomlabs-ai/headroom/commit/5cebb90db1f179b00eafdf79568efbc98c8ef366))
* **tabular:** keep interior blank CSV rows instead of dropping them ([#4563](https://github.com/headroomlabs-ai/headroom/issues/4563)) ([8c360ca](https://github.com/headroomlabs-ai/headroom/commit/8c360ca69fd3fc9cd6bc1e4b02109c1e5595385c))
* **thinking:** isolate compaction memo by compressor instance ([#4569](https://github.com/headroomlabs-ai/headroom/issues/4569)) ([5dcb1e4](https://github.com/headroomlabs-ai/headroom/commit/5dcb1e4adec4f6e82d943488d8aecb8967753e4e))
* **thinking:** leave a thinking block with a null or non-string value unchanged ([#4562](https://github.com/headroomlabs-ai/headroom/issues/4562)) ([cc1eb54](https://github.com/headroomlabs-ai/headroom/commit/cc1eb5402aade58204b96b6b4b4d280cdd5456d2))
* **toin:** preserve stores that exceed the byte limit ([#4589](https://github.com/headroomlabs-ai/headroom/issues/4589)) ([f9cae66](https://github.com/headroomlabs-ai/headroom/commit/f9cae66b6b19d6e6acfa4bf6da031642c256404a))
* **toin:** retain pending changes after filesystem save failures ([#4568](https://github.com/headroomlabs-ai/headroom/issues/4568)) ([8b15a15](https://github.com/headroomlabs-ai/headroom/commit/8b15a15799898d8c0a396ca0d39f951be4e0cfcf))
* **toin:** skip a malformed pattern instead of aborting the store load ([#4484](https://github.com/headroomlabs-ai/headroom/issues/4484)) ([8b628d9](https://github.com/headroomlabs-ai/headroom/commit/8b628d968574053b26849b21e5cea2e2593691c5))
* **tokenizers:** coerce structured text values in message token counters ([#4472](https://github.com/headroomlabs-ai/headroom/issues/4472)) ([6cc27a4](https://github.com/headroomlabs-ai/headroom/commit/6cc27a453d9cf69c76dc8134eb6739891471716e))
* **tokenizers:** don't cache token-count inputs larger than max_chars ([#4469](https://github.com/headroomlabs-ai/headroom/issues/4469)) ([aebb729](https://github.com/headroomlabs-ai/headroom/commit/aebb729ef3f03bee8852d067c365f075957638f9))
* **tokenizers:** price Anthropic document blocks by page count, not as ([fc1ba89](https://github.com/headroomlabs-ai/headroom/commit/fc1ba891bff2d1e0cb53c4ffd4037f5066988c8e))
* **tokenizers:** price Anthropic document blocks by page count, not as base64 text ([#4441](https://github.com/headroomlabs-ai/headroom/issues/4441)) ([fc1ba89](https://github.com/headroomlabs-ai/headroom/commit/fc1ba891bff2d1e0cb53c4ffd4037f5066988c8e))
* **tokenizers:** resolve tiktoken encoding for gateway-prefixed model ids ([#4637](https://github.com/headroomlabs-ai/headroom/issues/4637)) ([e9331b6](https://github.com/headroomlabs-ai/headroom/commit/e9331b6b963b5b6554f45943abed2366aaa25ea6))
* **transforms:** enforce role, mutable, and cache zone guards in batch compression ([#4480](https://github.com/headroomlabs-ai/headroom/issues/4480)) ([#4494](https://github.com/headroomlabs-ai/headroom/issues/4494)) ([40cd7e7](https://github.com/headroomlabs-ai/headroom/commit/40cd7e7503c66a903ac88e6a090aa0bdac7b315d))
* **transforms:** honour Subscription toin_read_only when the router calls SmartCrusher ([#4493](https://github.com/headroomlabs-ai/headroom/issues/4493)) ([7c11d46](https://github.com/headroomlabs-ai/headroom/commit/7c11d462e6d8265a2cfdb8a1cf62026fb4d1f401))
* **transforms:** preserve YAML block scalar data during comment elision ([#4498](https://github.com/headroomlabs-ai/headroom/issues/4498)) ([534cec0](https://github.com/headroomlabs-ai/headroom/commit/534cec0e14db48e787ada13535e0763fc7c52e8e))
* **transforms:** recognise code fences whose info string is not a bare word ([#4291](https://github.com/headroomlabs-ai/headroom/issues/4291)) ([a8df6f9](https://github.com/headroomlabs-ai/headroom/commit/a8df6f919f1c4730971fc2481fd18853ddcfe6b9))
* **transforms:** stop an embedded markdown table from dropping the rest of a tool result ([#4216](https://github.com/headroomlabs-ai/headroom/issues/4216)) ([b66c9c7](https://github.com/headroomlabs-ai/headroom/commit/b66c9c7db6fb7314c366fd2c28866d0ab688f211))
* **transforms:** tolerate malformed assistant tool calls in ContentRouter.apply ([#4459](https://github.com/headroomlabs-ai/headroom/issues/4459)) ([cddd2fd](https://github.com/headroomlabs-ai/headroom/commit/cddd2fd60ed711d7fc1df75b1d5e1cac947ae6c8))
* **update-check:** skip releases with no files and do not fall back to an uninstallable version ([#4560](https://github.com/headroomlabs-ai/headroom/issues/4560)) ([c1dae5a](https://github.com/headroomlabs-ai/headroom/commit/c1dae5adae2b93871314143bba4cb03b7b971e05))
* use all user text blocks for relevance scoring ([#4628](https://github.com/headroomlabs-ai/headroom/issues/4628)) ([12dca26](https://github.com/headroomlabs-ai/headroom/commit/12dca26aa11d99b3af6c6d68cdf96ff90ef415aa))
* **wrap:** overwrite drifted selfheal hook command instead of skipping it ([#2723](https://github.com/headroomlabs-ai/headroom/issues/2723)) ([2643f34](https://github.com/headroomlabs-ai/headroom/commit/2643f34a542d944ba3ad4a0a574b5e9e9d9bd474))
* **wrap:** route OMP OpenAI providers through Headroom ([#2755](https://github.com/headroomlabs-ai/headroom/issues/2755)) ([fae1e84](https://github.com/headroomlabs-ai/headroom/commit/fae1e849cb59c85cfbd46e76a05e6c299e446b02))


### Dependencies

* Bump @anthropic-ai/sdk from 0.133.0 to 1.3.0 in /sdk/typescript ([#4554](https://github.com/headroomlabs-ai/headroom/issues/4554)) ([74277d4](https://github.com/headroomlabs-ai/headroom/commit/74277d47ecfbca349ddb99f81094c4dd30539d43))
* Bump lru from 0.18.5 to 0.19.0 ([#4382](https://github.com/headroomlabs-ai/headroom/issues/4382)) ([038af59](https://github.com/headroomlabs-ai/headroom/commit/038af599e1a3c5e7e6b3047781aaf9ba2bbbf8bd))
* bump ruff from 0.17.0 to 0.17.2 in the pip-minor-patch group across 1 directory ([#4380](https://github.com/headroomlabs-ai/headroom/issues/4380)) ([64f43bd](https://github.com/headroomlabs-ai/headroom/commit/64f43bdf8f2080d5d7c1874fe1572acbb05872b6))
* bump ruff from 0.17.2 to 0.17.3 in the pip-minor-patch group ([#4652](https://github.com/headroomlabs-ai/headroom/issues/4652)) ([cb9602a](https://github.com/headroomlabs-ai/headroom/commit/cb9602aef0e4914f723a33ef6bad3a7c06eb485a))
* Bump the cargo-minor-patch group across 1 directory with 12 updates ([#4553](https://github.com/headroomlabs-ai/headroom/issues/4553)) ([b9049d7](https://github.com/headroomlabs-ai/headroom/commit/b9049d703af340ff90ed867f86e5fafa10c155c9))
* Bump the npm-minor-patch group across 1 directory with 6 updates ([#4621](https://github.com/headroomlabs-ai/headroom/issues/4621)) ([5e4827d](https://github.com/headroomlabs-ai/headroom/commit/5e4827de12c9fdf33d7d36b1939eee73a18fe6c5))
* Bump the npm-minor-patch group across 2 directories with 14 updates ([#4455](https://github.com/headroomlabs-ai/headroom/issues/4455)) ([f10725e](https://github.com/headroomlabs-ai/headroom/commit/f10725e6b9940d8bc2fcde950c86f8ac97543cb6))
* Bump the npm-minor-patch group across 3 directories with 9 updates ([#4495](https://github.com/headroomlabs-ai/headroom/issues/4495)) ([f367728](https://github.com/headroomlabs-ai/headroom/commit/f36772805178e3fed1a95313e8211c57a291b953))
* Bump tsup from 8.5.1 to 9.0.0 in /plugins/openclaw ([#4384](https://github.com/headroomlabs-ai/headroom/issues/4384)) ([9d87151](https://github.com/headroomlabs-ai/headroom/commit/9d871516101ff5428b592acb213aeacd30afc328))
* Bump tsup from 8.5.1 to 9.0.0 in /plugins/opencode ([#4385](https://github.com/headroomlabs-ai/headroom/issues/4385)) ([99e223c](https://github.com/headroomlabs-ai/headroom/commit/99e223c0e2c2ea6eb88ce28b160ae179897a9c67))
* Bump tsup from 8.5.1 to 9.0.0 in /sdk/typescript ([#4386](https://github.com/headroomlabs-ai/headroom/issues/4386)) ([e666fd8](https://github.com/headroomlabs-ai/headroom/commit/e666fd8e35dbe7c0433739297873b6a0a51c26cf))
* qualify latest Anthropic SDK 1.4.0 in docs ([#4556](https://github.com/headroomlabs-ai/headroom/issues/4556)) ([65bcc4c](https://github.com/headroomlabs-ai/headroom/commit/65bcc4c313aadfb609973563573b8bb3f308d81f))
* qualify latest compatible docs and E2E tools ([#4580](https://github.com/headroomlabs-ai/headroom/issues/4580)) ([e42f74e](https://github.com/headroomlabs-ai/headroom/commit/e42f74ebc9a784014ad9799b75f862efe4bf69e3))
* require Python 3.11; clear Dependabot alerts in the 3.10 lock fork ([#4517](https://github.com/headroomlabs-ai/headroom/issues/4517)) ([3c6f82b](https://github.com/headroomlabs-ai/headroom/commit/3c6f82b06091206379106f8fe1a54f2400ed7a93))
* update tomlkit requirement from &lt;1.0,&gt;=0.15.0 to &gt;=0.15.2,&lt;1.0 ([#4653](https://github.com/headroomlabs-ai/headroom/issues/4653)) ([00d5a5c](https://github.com/headroomlabs-ai/headroom/commit/00d5a5ca619f6e23da54d8b7e3fa4cc7af444035))

<!-- headroom-teams-footer -->

---

**Want more savings?** Headroom Enterprise saves more for teams and enterprises. Talk to us at [hello@headroomlabs.ai](mailto:hello@headroomlabs.ai) or [headroomlabs.ai](https://headroomlabs.ai).

---

> **Source** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · `v0.43.0` · 2026-11-05 · [upstream release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.43.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
