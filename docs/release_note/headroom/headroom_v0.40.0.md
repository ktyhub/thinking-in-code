---
title: "headroom v0.40.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-10-06"
type: "minor"
lang: "en"
summary: "proxy: read HEADROOM_LICENSE and make usage reporting opt-in (#3857) · drop the crewai extra to remove chromadb from the lockfile (#3870)"
---

# headroom v0.40.0

## [0.40.0](https://github.com/headroomlabs-ai/headroom/compare/v0.39.1...v0.40.0) (2026-10-06)


### ⚠ BREAKING CHANGES

* **proxy:** read HEADROOM_LICENSE and make usage reporting opt-in ([#3857](https://github.com/headroomlabs-ai/headroom/issues/3857))
* drop the crewai extra to remove chromadb from the lockfile ([#3870](https://github.com/headroomlabs-ai/headroom/issues/3870))

### Features

* **compress:** add per-message compression diagnostics ([#3058](https://github.com/headroomlabs-ai/headroom/issues/3058)) ([fef99cc](https://github.com/headroomlabs-ai/headroom/commit/fef99cc5b444bb16ac33fe8ec70108f7c0271de1))
* **compress:** live-agent densify mode, lossless and cache-safe ([#1402](https://github.com/headroomlabs-ai/headroom/issues/1402)) ([84f0e84](https://github.com/headroomlabs-ai/headroom/commit/84f0e84dccd3736b4a0c6c817bc83da307a5fbb8))
* **dashboard:** add CO₂ Saved card to dashboard and /stats API ([#1369](https://github.com/headroomlabs-ai/headroom/issues/1369)) ([2bc9419](https://github.com/headroomlabs-ai/headroom/commit/2bc94194671548c5def53809f736340285e20e76))
* **dashboard:** give savings metrics one canonical home ([#3320](https://github.com/headroomlabs-ai/headroom/issues/3320)) ([6af7efe](https://github.com/headroomlabs-ai/headroom/commit/6af7efe0d1fa9786d1fd5e5dc9884b7750c0f569))
* **learn:** add agy (Antigravity CLI) as an analysis backend ([#3939](https://github.com/headroomlabs-ai/headroom/issues/3939)) ([4ba231a](https://github.com/headroomlabs-ai/headroom/commit/4ba231ab3d51c409804af24ea03692aed33deb2e))
* **live-zone:** wire the SourceCode and PlainText dispatch arms ([#3227](https://github.com/headroomlabs-ai/headroom/issues/3227)) ([49f69be](https://github.com/headroomlabs-ai/headroom/commit/49f69be2836e90cbd210e39d82b36d514404cc76))
* **memory:** persist TrafficLearner pending evidence across restarts + expose learner stats ([#3104](https://github.com/headroomlabs-ai/headroom/issues/3104)) ([4257ed4](https://github.com/headroomlabs-ai/headroom/commit/4257ed4df377a93cd2e0d526ef61d2a32cbc54cf))
* **proxy:** add x-headroom-keep-last-turns header for per-request context trimming (issue [#2858](https://github.com/headroomlabs-ai/headroom/issues/2858)) ([#3059](https://github.com/headroomlabs-ai/headroom/issues/3059)) ([246162d](https://github.com/headroomlabs-ai/headroom/commit/246162d70bbc68cc1b7d44a015ddaf320cd23a3d))
* **proxy:** route Gemini plugin traffic through native transforms ([#2697](https://github.com/headroomlabs-ai/headroom/issues/2697)) ([0ad996a](https://github.com/headroomlabs-ai/headroom/commit/0ad996a82eef65183271243fa71bb0f5653be369))
* **proxy:** serve on a Unix domain socket (--uds) ([#3151](https://github.com/headroomlabs-ai/headroom/issues/3151)) ([e7b3baf](https://github.com/headroomlabs-ai/headroom/commit/e7b3baf236b832e1d4d086c4425b8d32560d0d7c))
* **wrap:** add headroom wrap bob for IBM Bob CLI ([#3801](https://github.com/headroomlabs-ai/headroom/issues/3801)) ([0b7dab4](https://github.com/headroomlabs-ai/headroom/commit/0b7dab47c62a8372c7bf7031d744658d71745679))
* **wrap:** extend reduce-at-source quiet defaults to telemetry/nag banners ([#2550](https://github.com/headroomlabs-ai/headroom/issues/2550)) ([3a3a465](https://github.com/headroomlabs-ai/headroom/commit/3a3a465bb129ad74f6e04f7c50e0fe7489383ba2))


### Bug Fixes

* **anthropic:** preserve failed CCR continuations ([#3843](https://github.com/headroomlabs-ai/headroom/issues/3843)) ([94bb055](https://github.com/headroomlabs-ai/headroom/commit/94bb055810dc1258bd248cd0a9d0e7c51df64844))
* **backends/anyllm:** map Anthropic tool_choice none to OpenAI none ([#3963](https://github.com/headroomlabs-ai/headroom/issues/3963)) ([d722a64](https://github.com/headroomlabs-ai/headroom/commit/d722a6414c3896ef092a0d8764c64d9681e07410))
* **backends/litellm:** align streaming usage tokens with the non-streaming path ([#2688](https://github.com/headroomlabs-ai/headroom/issues/2688)) ([90a68e0](https://github.com/headroomlabs-ai/headroom/commit/90a68e02910126373f3d3769158925e3a55ce411))
* **backends/litellm:** keep the upstream 4xx status on send_message errors ([#3944](https://github.com/headroomlabs-ai/headroom/issues/3944)) ([e0e41cd](https://github.com/headroomlabs-ai/headroom/commit/e0e41cd2f57a80612ddbf1568e4ad245046a0131))
* **backends/litellm:** map Anthropic tool_choice none to OpenAI none ([#2689](https://github.com/headroomlabs-ai/headroom/issues/2689)) ([57a5708](https://github.com/headroomlabs-ai/headroom/commit/57a57088de8920091ecaaac0e3cadf3932698154))
* **backends/litellm:** match the caller-key Bearer scheme case-insensitively (RFC 7235) ([#3965](https://github.com/headroomlabs-ai/headroom/issues/3965)) ([848d7a0](https://github.com/headroomlabs-ai/headroom/commit/848d7a04b489600d3c0de0ba4f7c47cdb8ed5cc2))
* **backends/litellm:** report requested model in OpenAI streaming chunks ([#2690](https://github.com/headroomlabs-ai/headroom/issues/2690)) ([8538a83](https://github.com/headroomlabs-ai/headroom/commit/8538a831531bb277a6083ed2a010312a849c3050))
* **cache:** keep prefix lineage across a replaced system tail ([#3934](https://github.com/headroomlabs-ai/headroom/issues/3934)) ([16eaec1](https://github.com/headroomlabs-ai/headroom/commit/16eaec1e95cd39135ef06f6664b309c71b03e3ad))
* **ccr:** answer headroom_retrieve on the direct chat path instead of forwarding it ([#3816](https://github.com/headroomlabs-ai/headroom/issues/3816)) ([126e144](https://github.com/headroomlabs-ai/headroom/commit/126e144876d2bd01246b5066dd5d3379b7a0e2da))
* **ccr:** inject headroom_retrieve before the prefix is warm, not after ([#3810](https://github.com/headroomlabs-ai/headroom/issues/3810)) ([bb8c285](https://github.com/headroomlabs-ai/headroom/commit/bb8c285714b19dadf4f96305ba5a74877a0dd103))
* **ccr:** only proactively expand compressions present in the requesting conversation ([#3924](https://github.com/headroomlabs-ai/headroom/issues/3924)) ([9b9a883](https://github.com/headroomlabs-ai/headroom/commit/9b9a883e96ec28e361a3d95e34ec29ecd2ef8abb))
* **ccr:** unwrap Hermes batched tool_call so headroom_retrieve stays exempt ([#3839](https://github.com/headroomlabs-ai/headroom/issues/3839)) ([2f07668](https://github.com/headroomlabs-ai/headroom/commit/2f076687b069f09c69a1ce3e6f3eaaa521b838f7))
* **ci:** clear dependency audit and gate Docker publishing ([#3984](https://github.com/headroomlabs-ai/headroom/issues/3984)) ([67ce7d0](https://github.com/headroomlabs-ai/headroom/commit/67ce7d0f3119883a873a53c1fb1e569c80d36d71))
* **ci:** keep hard watchdog out of pytest shards ([#3845](https://github.com/headroomlabs-ai/headroom/issues/3845)) ([2527431](https://github.com/headroomlabs-ai/headroom/commit/25274310ca396aaf5761d78d07106de3dfde2951))
* **ci:** tolerate missing Docker cache blobs ([#3945](https://github.com/headroomlabs-ai/headroom/issues/3945)) ([540f4da](https://github.com/headroomlabs-ai/headroom/commit/540f4da19995ce9ec60240f991a8091466ee7e51))
* clarify CCR marker content preservation ([#3175](https://github.com/headroomlabs-ai/headroom/issues/3175)) ([005a4e1](https://github.com/headroomlabs-ai/headroom/commit/005a4e146f94e2388e8e0e7eaabe5a831676b26b))
* **cli:** honor CODEX_HOME and align wrap/init/doctor with the live proxy port ([#3855](https://github.com/headroomlabs-ai/headroom/issues/3855)) ([5bf6612](https://github.com/headroomlabs-ai/headroom/commit/5bf661232667fe2573caafcd9b48f86c6388b5bd))
* **cli:** strip unmarked headroom_memory TOML table before injecting ([#3490](https://github.com/headroomlabs-ai/headroom/issues/3490)) ([08dda4c](https://github.com/headroomlabs-ai/headroom/commit/08dda4cb0b5fe69bff8aa1deeabfb2111738087c))
* **codex:** explain why wrapped Codex runs without the shared server ([#3899](https://github.com/headroomlabs-ai/headroom/issues/3899)) ([1982b3a](https://github.com/headroomlabs-ai/headroom/commit/1982b3a773093ff8262887e69ffb12e342ce4ffc))
* **codex:** preserve remote compaction in init config ([#3410](https://github.com/headroomlabs-ai/headroom/issues/3410)) ([6df4a96](https://github.com/headroomlabs-ai/headroom/commit/6df4a963ae4cfefa2269b751874e142b02feb726))
* **codex:** resolve per-turn project context ([#2636](https://github.com/headroomlabs-ai/headroom/issues/2636)) ([0396ea2](https://github.com/headroomlabs-ai/headroom/commit/0396ea2fc22d72d95d1f3bfa63bfbdd0abd74a80))
* **codex:** strip stale compression framing on the Responses subpath passthrough ([#3792](https://github.com/headroomlabs-ai/headroom/issues/3792)) ([0eba65c](https://github.com/headroomlabs-ai/headroom/commit/0eba65ca4a8f04b55d568fc35829eca053a7cfac))
* **copilot:** defer keychain auth lookup ([#2739](https://github.com/headroomlabs-ai/headroom/issues/2739)) ([81a8a28](https://github.com/headroomlabs-ai/headroom/commit/81a8a28da38f1837c6b8dd6217a35a5ebb98bc87))
* **copilot:** read timezone-naive token expiry as UTC, not host local time ([#3216](https://github.com/headroomlabs-ai/headroom/issues/3216)) ([2b2dc1b](https://github.com/headroomlabs-ai/headroom/commit/2b2dc1b2c93c596ad5129dff914978c5679ef126))
* **copilot:** warn when a VS Code profile cannot see the proxy settings ([#3919](https://github.com/headroomlabs-ai/headroom/issues/3919)) ([7b68fc2](https://github.com/headroomlabs-ai/headroom/commit/7b68fc263a925f97116e1e648cd3fa22a0f04f1b))
* **deps:** patch brace-expansion in wrap E2E lockfile ([#3873](https://github.com/headroomlabs-ai/headroom/issues/3873)) ([5e0435d](https://github.com/headroomlabs-ai/headroom/commit/5e0435d2156229c04951da9fafeafdf74d2abf84))
* **deps:** patch urllib3 and Next.js advisories ([#3896](https://github.com/headroomlabs-ai/headroom/issues/3896)) ([573e385](https://github.com/headroomlabs-ai/headroom/commit/573e385f120cfd4f5e4d54c791025f2253abf08a))
* **doctor:** recognize Azure Foundry routing for Claude Code ([#1339](https://github.com/headroomlabs-ai/headroom/issues/1339)) ([d5318ac](https://github.com/headroomlabs-ai/headroom/commit/d5318ac235595b9740fccb0910ec7139c42d51a0))
* **grok:** route CLI traffic to api.x.ai on shared proxies ([#2693](https://github.com/headroomlabs-ai/headroom/issues/2693)) ([ef1c528](https://github.com/headroomlabs-ai/headroom/commit/ef1c528e92a2b037a170f94ec8adf917322ba630))
* honor configured port in container startup and healthcheck ([#2436](https://github.com/headroomlabs-ai/headroom/issues/2436)) ([1b7977c](https://github.com/headroomlabs-ai/headroom/commit/1b7977cecd95e53cccf45f04248097a8e4137b3f))
* **install/apply:** add --no-rate-limit flag, persist in proxy_args ([#1350](https://github.com/headroomlabs-ai/headroom/issues/1350)) ([#1365](https://github.com/headroomlabs-ai/headroom/issues/1365)) ([31d0344](https://github.com/headroomlabs-ai/headroom/commit/31d03449910fbacbefdde8c04ea2c10299f9bba6))
* **install:** parse Windows Task Scheduler XML output ([#3830](https://github.com/headroomlabs-ai/headroom/issues/3830)) ([c32a4f4](https://github.com/headroomlabs-ai/headroom/commit/c32a4f4131934dee48d793156fb8a536a4b2617e))
* **install:** replace the launchd wrapper with the proxy listener ([#3224](https://github.com/headroomlabs-ai/headroom/issues/3224)) ([44db755](https://github.com/headroomlabs-ai/headroom/commit/44db755ee6d85d0eb74f1fc79ef737741f87debc))
* **install:** use safe model backends for persistent services ([#3646](https://github.com/headroomlabs-ai/headroom/issues/3646)) ([7287589](https://github.com/headroomlabs-ai/headroom/commit/7287589d23b76911b036d97f58c3cc043a9693c8))
* **integrations:** record metric timestamps in UTC, not naive local time ([#3117](https://github.com/headroomlabs-ai/headroom/issues/3117)) ([76ef2c3](https://github.com/headroomlabs-ai/headroom/commit/76ef2c3bc9cc302f4b638fab83467ab53cb192c1))
* **kompress:** degrade when a native dep is installed but unloadable ([#3133](https://github.com/headroomlabs-ai/headroom/issues/3133)) ([8f3d677](https://github.com/headroomlabs-ai/headroom/commit/8f3d677354f50df9181cbb3fa002003be4e3c237))
* **kompress:** pin ModernBERT tokenizer and encoder revisions ([#3808](https://github.com/headroomlabs-ai/headroom/issues/3808)) ([2de5828](https://github.com/headroomlabs-ai/headroom/commit/2de582875b7dd1ef8754df8a2905ab4d72dab581))
* **learn:** drop the echoed prompt from a failed cli's error ([#3928](https://github.com/headroomlabs-ai/headroom/issues/3928)) ([f00d425](https://github.com/headroomlabs-ai/headroom/commit/f00d42561402752e56666ff35962ad8da6f7966c))
* **learn:** keep CLAUDE.local.md out of git via .git/info/exclude ([#3108](https://github.com/headroomlabs-ai/headroom/issues/3108)) ([c072251](https://github.com/headroomlabs-ai/headroom/commit/c072251c10a1334265974ed33f655487518d41d0))
* **learn:** keep transcript-derived content inside the managed block ([#3850](https://github.com/headroomlabs-ai/headroom/issues/3850)) ([c46e74d](https://github.com/headroomlabs-ai/headroom/commit/c46e74d06b5ffa9643f420f28d2da6686fb7e487))
* **learn:** merge git worktree sessions into the repo's project ([#3854](https://github.com/headroomlabs-ai/headroom/issues/3854)) ([3fdf18e](https://github.com/headroomlabs-ai/headroom/commit/3fdf18ededa162e5f46f5a996a164a6ca9de283f))
* **learn:** preserve stable traffic pattern items ([#2293](https://github.com/headroomlabs-ai/headroom/issues/2293)) ([1631cde](https://github.com/headroomlabs-ai/headroom/commit/1631cde6865cbc03a60ade5e9baaa28837add4e4))
* **learn:** recognize escaped persisted pattern IDs ([#3951](https://github.com/headroomlabs-ai/headroom/issues/3951)) ([2e74f06](https://github.com/headroomlabs-ai/headroom/commit/2e74f06ecec73d365e06de6832b13f7e9fe386b7))
* **learn:** run the claude-cli analysis with hooks disabled ([#3926](https://github.com/headroomlabs-ai/headroom/issues/3926)) ([2a4d34c](https://github.com/headroomlabs-ai/headroom/commit/2a4d34c47676080336577bb4b227864258cb2c78))
* **learn:** run the claude-cli analysis with no tools ([#3892](https://github.com/headroomlabs-ai/headroom/issues/3892)) ([db90b93](https://github.com/headroomlabs-ai/headroom/commit/db90b93da9f8decb9cac7fa007674de7974a1cdb))
* **log_compressor:** keep and name pytest short-summary failures ([#3828](https://github.com/headroomlabs-ai/headroom/issues/3828)) ([d90b320](https://github.com/headroomlabs-ai/headroom/commit/d90b32008dc47f25737d9cef8da942fd8dc1af76))
* make Headroom work behind Zscaler and other TLS-inspecting networks ([#3831](https://github.com/headroomlabs-ai/headroom/issues/3831)) ([66258c4](https://github.com/headroomlabs-ai/headroom/commit/66258c40a4589bb2fef934dec6fb69c527ae8b44))
* **mcp:** bound version-detection git subprocess ([#3038](https://github.com/headroomlabs-ai/headroom/issues/3038)) ([0712e04](https://github.com/headroomlabs-ai/headroom/commit/0712e048b034e7f15ce10c0fc4e99795cab082ff))
* **mcp:** escape control characters when rendering TOML server blocks ([#3964](https://github.com/headroomlabs-ai/headroom/issues/3964)) ([a96154f](https://github.com/headroomlabs-ai/headroom/commit/a96154f03b65179f23496a1ff9682cfc476eaff5))
* **mcp:** keep other apps' tables when replacing the Codex/Grok MCP span ([#3877](https://github.com/headroomlabs-ai/headroom/issues/3877)) ([d0fd56e](https://github.com/headroomlabs-ai/headroom/commit/d0fd56e4910c997a3121aa27ab578b998b260f5a))
* **mcp:** resolve opencode.jsonc for MCP registration ([#2496](https://github.com/headroomlabs-ai/headroom/issues/2496)) ([f824a27](https://github.com/headroomlabs-ai/headroom/commit/f824a270f132516443deeef2555076bf4cd40a34))
* **memory:** align project routing with wrap headers ([#3603](https://github.com/headroomlabs-ai/headroom/issues/3603)) ([b1b005a](https://github.com/headroomlabs-ai/headroom/commit/b1b005a9a867d75cbc6b459b1f5276c272e7ac50))
* **memory:** avoid injecting tools into tool-free requests ([#3677](https://github.com/headroomlabs-ai/headroom/issues/3677)) ([46755b5](https://github.com/headroomlabs-ai/headroom/commit/46755b5f72804c32dc7d6ded5595342a2cac6157))
* **memory:** close SQLite connections in memory/fts5/graph adapters ([#3153](https://github.com/headroomlabs-ai/headroom/issues/3153)) ([231a627](https://github.com/headroomlabs-ai/headroom/commit/231a6277024938d28e0ebeda29378dea3822b527))
* **memory:** handle list-shaped system content in inline memory injection ([#3794](https://github.com/headroomlabs-ai/headroom/issues/3794)) ([717527b](https://github.com/headroomlabs-ai/headroom/commit/717527bc8681665326c064ed47e3f5a0284b01a5))
* **memory:** ignore leading cd prefix when pairing Bash error recoveries ([#3776](https://github.com/headroomlabs-ai/headroom/issues/3776)) ([143a38d](https://github.com/headroomlabs-ai/headroom/commit/143a38d56f5bddb96dd486948c3318bd8dc93372))
* **memory:** pin LF on memory writers and guard the learn-writer newline contract ([#3706](https://github.com/headroomlabs-ai/headroom/issues/3706)) ([b10dd8d](https://github.com/headroomlabs-ai/headroom/commit/b10dd8db6e71903e550edd1707ce044f3520f0b4))
* **oauth2:** mint and inject only on requests that go upstream ([#3849](https://github.com/headroomlabs-ai/headroom/issues/3849)) ([f977d52](https://github.com/headroomlabs-ai/headroom/commit/f977d525e4cf4ac1cad64dd59cfc6d3e54cd8e36))
* **offline:** make HEADROOM_OFFLINE a real air-gap via one chokepoint ([#3729](https://github.com/headroomlabs-ai/headroom/issues/3729)) ([119d1a1](https://github.com/headroomlabs-ai/headroom/commit/119d1a19393697f22140da654f0b6a10c3866d79))
* **opencode:** hide spawned Windows console windows ([#3743](https://github.com/headroomlabs-ai/headroom/issues/3743)) ([2157400](https://github.com/headroomlabs-ai/headroom/commit/2157400b005b858fb4ab96dadde022bb22d3d244))
* **opencode:** route only LLM traffic through Headroom ([#3884](https://github.com/headroomlabs-ai/headroom/issues/3884)) ([d75eecd](https://github.com/headroomlabs-ai/headroom/commit/d75eecd814d391f51c6b98b1594c0ea180e9103a))
* **output-savings:** seed the holdout key on the whole first user message ([#3209](https://github.com/headroomlabs-ai/headroom/issues/3209)) ([117ff72](https://github.com/headroomlabs-ai/headroom/commit/117ff72ec9aa6385c4e6afb23f06a4a6edb59f8e))
* **parser:** stop counting HTML comments twice in waste signals ([#3942](https://github.com/headroomlabs-ai/headroom/issues/3942)) ([d0e9c4c](https://github.com/headroomlabs-ai/headroom/commit/d0e9c4ca4810f36c8bd71cfc567be9e72c8c06d1))
* **parser:** whitespace waste signal always reported zero ([#1102](https://github.com/headroomlabs-ai/headroom/issues/1102)) ([f19bc9a](https://github.com/headroomlabs-ai/headroom/commit/f19bc9a9c344e846ef61de09652c55f8db835aa1))
* **plugin:** resolve hook CLI through plugin-root launcher ([#3053](https://github.com/headroomlabs-ai/headroom/issues/3053)) ([ef7605f](https://github.com/headroomlabs-ai/headroom/commit/ef7605fdbb82a5c1a75c9192432bc719aa92927d))
* **plugins/openclaw:** return messages the proxy did not change exactly as they came in ([#3826](https://github.com/headroomlabs-ai/headroom/issues/3826)) ([d1ad189](https://github.com/headroomlabs-ai/headroom/commit/d1ad189819d0dd87137267a17233ab2703eb803c))
* prevent HF tokenizer downloads in offline mode ([#3783](https://github.com/headroomlabs-ai/headroom/issues/3783)) ([d503c57](https://github.com/headroomlabs-ai/headroom/commit/d503c575eabd6dfed3f390754d391a337340d7d7))
* **pricing:** add Claude Sonnet 5.5 / Opus 5.5 / Fable 5.1, correct Sonnet 5 rates ([#3841](https://github.com/headroomlabs-ai/headroom/issues/3841)) ([0d99c56](https://github.com/headroomlabs-ai/headroom/commit/0d99c56dc519c4684079a0e1107399068342104d))
* protect file reads in chained shell commands ([#2668](https://github.com/headroomlabs-ai/headroom/issues/2668)) ([ffc3599](https://github.com/headroomlabs-ai/headroom/commit/ffc359976b09f64388ac9cb8685904c5a5f59708))
* **providers/vertex:** Vertex route multi-region locations  ([#3802](https://github.com/headroomlabs-ai/headroom/issues/3802)) ([a9c1ac5](https://github.com/headroomlabs-ai/headroom/commit/a9c1ac5368798382b0d7e081e910a6df2a728bb0))
* **proxy/anthropic:** keep tool_result blocks first when neutralizing headroom_retrieve history ([#3874](https://github.com/headroomlabs-ai/headroom/issues/3874)) ([ccd9fff](https://github.com/headroomlabs-ai/headroom/commit/ccd9fffce93cd93d694d78c601ec50eeff0bd256))
* **proxy/batch:** honor x-headroom-bypass on the batch paths ([#2570](https://github.com/headroomlabs-ai/headroom/issues/2570)) ([9b26a49](https://github.com/headroomlabs-ai/headroom/commit/9b26a49c14eacd8e14385bf8d28c67b2425b3c5c))
* **proxy:** add same-origin check to /v1/retrieve/tool_call ([#3955](https://github.com/headroomlabs-ai/headroom/issues/3955)) ([2297b50](https://github.com/headroomlabs-ai/headroom/commit/2297b5059f27c0018b15f7857a5b3a7026a68bdd))
* **proxy:** bill the whole prompt on the gateway path so savings read true ([#3632](https://github.com/headroomlabs-ai/headroom/issues/3632)) ([befdb52](https://github.com/headroomlabs-ai/headroom/commit/befdb52fd565ff990e4ff1463f0550ba7df588b5))
* **proxy:** carry safeguard_results through SSE resynthesis ([#3958](https://github.com/headroomlabs-ai/headroom/issues/3958)) ([f37ef59](https://github.com/headroomlabs-ai/headroom/commit/f37ef591894c6b89bc25ea628b64b40bdd1037fb))
* **proxy:** classify Pi Codex Responses alias ([#2583](https://github.com/headroomlabs-ai/headroom/issues/2583)) ([a493f55](https://github.com/headroomlabs-ai/headroom/commit/a493f559a1a85a5462fc3bf3f363d64c3c9444ce))
* **proxy:** do not cache error replies delivered as http 200 ([#3930](https://github.com/headroomlabs-ai/headroom/issues/3930)) ([1132a54](https://github.com/headroomlabs-ai/headroom/commit/1132a54b21482332f6ffeeebe8c9935a69709afa))
* **proxy:** drop a tool_reference naming the search tool itself ([#3172](https://github.com/headroomlabs-ai/headroom/issues/3172)) ([b73adaa](https://github.com/headroomlabs-ai/headroom/commit/b73adaa0ce36a2e65a98f5590c46ea555751b445))
* **proxy:** F3 — per-tenant TOIN learning key ([#404](https://github.com/headroomlabs-ai/headroom/issues/404)) ([f90a56b](https://github.com/headroomlabs-ai/headroom/commit/f90a56b0388f3dcb6455425a3405b40b67da6858))
* **proxy:** forward operator-listed guarded upstreams through a proxy ([#3804](https://github.com/headroomlabs-ai/headroom/issues/3804)) ([4b7e5d2](https://github.com/headroomlabs-ai/headroom/commit/4b7e5d246e54b856af22cd1a90b47d93b26226cb))
* **proxy:** freeze and replay the forwarded prefix on Gemini paths ([#3394](https://github.com/headroomlabs-ai/headroom/issues/3394)) ([#3865](https://github.com/headroomlabs-ai/headroom/issues/3865)) ([dd84321](https://github.com/headroomlabs-ai/headroom/commit/dd84321daa0c3c9dca9264098bb396a75d9e52cd))
* **proxy:** gate the raw request body, not just its Content-Length header ([#3338](https://github.com/headroomlabs-ai/headroom/issues/3338)) ([c946b6b](https://github.com/headroomlabs-ai/headroom/commit/c946b6b0b0ae048c576940d1a57071b84cb05fb6))
* **proxy:** hard watchdog that dumps and exits when a native call seizes the GIL ([#3180](https://github.com/headroomlabs-ai/headroom/issues/3180)) ([79daeb5](https://github.com/headroomlabs-ai/headroom/commit/79daeb590f46c8f74483e975647c202d09f01fbb))
* **proxy:** inject memory context past a trailing system message ([#3948](https://github.com/headroomlabs-ai/headroom/issues/3948)) ([3948dbe](https://github.com/headroomlabs-ai/headroom/commit/3948dbe409eba48c065a3ecb2af9fa2f51921787))
* **proxy:** keep cache_control outside content blocks where the Chat Completions client put it ([#3895](https://github.com/headroomlabs-ai/headroom/issues/3895)) ([a6d6c14](https://github.com/headroomlabs-ai/headroom/commit/a6d6c14cf781a7725e4e8366e8cd86b1e4e44ba9))
* **proxy:** keep exception text and the proxy token out of client output ([#3851](https://github.com/headroomlabs-ai/headroom/issues/3851)) ([861e94d](https://github.com/headroomlabs-ai/headroom/commit/861e94d8c173bcca1ec4ae4f84a3e7ef477c4a19))
* **proxy:** keep the newest user message verbatim in cache-mode delta compression ([#3923](https://github.com/headroomlabs-ai/headroom/issues/3923)) ([613ae92](https://github.com/headroomlabs-ai/headroom/commit/613ae9215058c1d5cabc67186f3b47089b22eddb))
* **proxy:** key rate limits by peer unless the caller authenticated ([#3860](https://github.com/headroomlabs-ai/headroom/issues/3860)) ([6fb7cad](https://github.com/headroomlabs-ai/headroom/commit/6fb7cadfe4c54c2be6b90e9fdea36e91da7b2945))
* **proxy:** kill the image worker a timed-out call abandons ([#3940](https://github.com/headroomlabs-ai/headroom/issues/3940)) ([793bb85](https://github.com/headroomlabs-ai/headroom/commit/793bb85659d9aa907115ec16ea3356c5459f6299))
* **proxy:** label plain OpenAI chat traffic openai, not custom ([#3912](https://github.com/headroomlabs-ai/headroom/issues/3912)) ([7df8bd8](https://github.com/headroomlabs-ai/headroom/commit/7df8bd87b54725174e1ea88e2dcd428b66cb608f))
* **proxy:** log response_content_length in proxy_inbound_response ([#2701](https://github.com/headroomlabs-ai/headroom/issues/2701)) ([cfa479a](https://github.com/headroomlabs-ai/headroom/commit/cfa479af8e551d5d2710debf80adb86fd72b16e5))
* **proxy:** preserve Bedrock body-limit error dialect ([#3871](https://github.com/headroomlabs-ai/headroom/issues/3871)) ([ffc6edb](https://github.com/headroomlabs-ai/headroom/commit/ffc6edb4ba7a775d2f6440769b626132a66aa7d3))
* **proxy:** preserve Windows service when Rust core is blocked ([#2989](https://github.com/headroomlabs-ai/headroom/issues/2989)) ([eaa16d9](https://github.com/headroomlabs-ai/headroom/commit/eaa16d9f6343f9d5364863c7522734f6b86b1844))
* **proxy:** quarantine compression only once half the pool is stuck ([#3932](https://github.com/headroomlabs-ai/headroom/issues/3932)) ([be2b205](https://github.com/headroomlabs-ai/headroom/commit/be2b205c51430236404177bb7d80930a2d299d5a))
* **proxy:** read HEADROOM_LICENSE and make usage reporting opt-in ([#3857](https://github.com/headroomlabs-ai/headroom/issues/3857)) ([7460389](https://github.com/headroomlabs-ai/headroom/commit/746038991cf2b4dbb31dd2227d607db7bc273da7))
* **proxy:** reap wrap-spawned proxies once no wrap clients remain ([#3202](https://github.com/headroomlabs-ai/headroom/issues/3202)) ([4227bd2](https://github.com/headroomlabs-ai/headroom/commit/4227bd2419e72a922149d5dfaf416808d8e08139))
* **proxy:** redact upstream error detail and add opt-in /metrics loopback gate ([#2589](https://github.com/headroomlabs-ai/headroom/issues/2589)) ([a05717f](https://github.com/headroomlabs-ai/headroom/commit/a05717f6ec2b0514ccaa42b9bd1b3c95d3465730))
* **proxy:** refuse token-less non-loopback binds, gate operator routes ([#3852](https://github.com/headroomlabs-ai/headroom/issues/3852)) ([ee731d7](https://github.com/headroomlabs-ai/headroom/commit/ee731d7ea84503ad844eb2759fcb5bbf04a1ae0e))
* **proxy:** reset the cc-switch upstream when Claude Official is selected ([#3166](https://github.com/headroomlabs-ai/headroom/issues/3166)) ([fed7281](https://github.com/headroomlabs-ai/headroom/commit/fed7281120af5b476d3911ca1ebf4dc66d5ca1ea))
* **proxy:** run extension middleware inside the security gate and body ceiling ([#3847](https://github.com/headroomlabs-ai/headroom/issues/3847)) ([1854fd7](https://github.com/headroomlabs-ai/headroom/commit/1854fd7fd3f52bb4cc0b17803de0a04a850eb8f7))
* **proxy:** run injected memory tools server-side on streaming turns ([#3947](https://github.com/headroomlabs-ai/headroom/issues/3947)) ([1cf4966](https://github.com/headroomlabs-ai/headroom/commit/1cf496612e781ef8d67ff87ee4f78037492f0bc7))
* **proxy:** share one compression deadline across a Responses request ([#3938](https://github.com/headroomlabs-ai/headroom/issues/3938)) ([4d27d02](https://github.com/headroomlabs-ai/headroom/commit/4d27d024b09fe04f6e32b158063538f084d7febb))
* **proxy:** skip pricing lookup for passthrough:* models ([#2585](https://github.com/headroomlabs-ai/headroom/issues/2585)) ([f87848c](https://github.com/headroomlabs-ai/headroom/commit/f87848cf78db43dcd4b7e9b6aca3859245348456))
* **proxy:** stop headroom logger from suppressing propagation to stdout/stderr ([#3096](https://github.com/headroomlabs-ai/headroom/issues/3096)) ([f78e66f](https://github.com/headroomlabs-ai/headroom/commit/f78e66f7cc5e00d5db04c493f702ef4ebe7035b0))
* **relevance:** bound segment size by max_chars ([#2518](https://github.com/headroomlabs-ai/headroom/issues/2518)) ([0ef7b2a](https://github.com/headroomlabs-ai/headroom/commit/0ef7b2a7fdd7daf4dbb8628c616c28a233ce7910))
* **reporting:** price the savings tile instead of fabricating $0.00 ([#3821](https://github.com/headroomlabs-ai/headroom/issues/3821)) ([f519fa8](https://github.com/headroomlabs-ai/headroom/commit/f519fa8b97aa9ccef369f5973f1d476af2a65edf))
* **router:** fall back to built-ins when an external compressor passes through ([#3893](https://github.com/headroomlabs-ai/headroom/issues/3893)) ([2c4b20f](https://github.com/headroomlabs-ai/headroom/commit/2c4b20fcba6da0366c1c637a2a3cc61e843012a7))
* **router:** keep ccr_retrieve exemption through orchestrator wrappers ([#3915](https://github.com/headroomlabs-ai/headroom/issues/3915)) ([6151ed1](https://github.com/headroomlabs-ai/headroom/commit/6151ed1f52f3d0dd24eb28e0fa666226150a0055))
* **rust-proxy:** forward request paths verbatim and pin the rustls provider ([#3853](https://github.com/headroomlabs-ai/headroom/issues/3853)) ([9d98ea5](https://github.com/headroomlabs-ai/headroom/commit/9d98ea59082ca6b00be2508f00b85ef90c94f744))
* **savings:** record tool-schema dollars disjointly beside the folded headline ([#3170](https://github.com/headroomlabs-ai/headroom/issues/3170)) ([c719d4a](https://github.com/headroomlabs-ai/headroom/commit/c719d4af55ebca177c81c98f74531bfaca831366))
* **savings:** stop scoring unobserved strata against the global mean ([#3128](https://github.com/headroomlabs-ai/headroom/issues/3128)) ([f864525](https://github.com/headroomlabs-ai/headroom/commit/f8645257c074b7e5babd949e705d7ca4e8366ae4))
* **sdk:** keep tool names on Vercel tool-result parts through the OpenAI round trip ([#3883](https://github.com/headroomlabs-ai/headroom/issues/3883)) ([b715671](https://github.com/headroomlabs-ai/headroom/commit/b7156714acf1f06cd37f642044455e23e2f89d47))
* **sdk:** preserve Gemini media parts in message conversion instead of dropping the turn ([#3882](https://github.com/headroomlabs-ai/headroom/issues/3882)) ([038c923](https://github.com/headroomlabs-ai/headroom/commit/038c923b4bcd01305f18d993e301b837d668c343))
* **sdk:** stop JSON-wrapping structured tool_result content in the Anthropic adapter ([#3797](https://github.com/headroomlabs-ai/headroom/issues/3797)) ([2e4a60a](https://github.com/headroomlabs-ai/headroom/commit/2e4a60ae3730fc7ea8f5afebbc29961d5fd0af11))
* **search:** stop a context line's body from becoming its line marker ([#3788](https://github.com/headroomlabs-ai/headroom/issues/3788)) ([f3f2e00](https://github.com/headroomlabs-ai/headroom/commit/f3f2e0077ae67d492bfc5922e9a49427036e32e0))
* **security:** create memory stores and other state files owner-only ([#3848](https://github.com/headroomlabs-ai/headroom/issues/3848)) ([5119b6e](https://github.com/headroomlabs-ai/headroom/commit/5119b6eb545e35b617e2d08b183e968d0104d548))
* **security:** exempt only GET health probes from the proxy token ([#3921](https://github.com/headroomlabs-ai/headroom/issues/3921)) ([d99779d](https://github.com/headroomlabs-ai/headroom/commit/d99779dae69d44c934d2115ffd8ee1f1a6cbb898))
* **security:** partition the response cache by credential and principal ([#3862](https://github.com/headroomlabs-ai/headroom/issues/3862)) ([ee6cfcc](https://github.com/headroomlabs-ai/headroom/commit/ee6cfcccf6a8944225344c2a468f509783934239))
* **security:** poll usage only with the operator's own credential ([#3863](https://github.com/headroomlabs-ai/headroom/issues/3863)) ([65e63c0](https://github.com/headroomlabs-ai/headroom/commit/65e63c08835410149bec4acba8e3737366eb0586))
* **security:** stop forwarding the proxy token to upstream providers ([#3891](https://github.com/headroomlabs-ai/headroom/issues/3891)) ([0147cf0](https://github.com/headroomlabs-ai/headroom/commit/0147cf02207fd76be8a14932bcc65a9709bfdb59))
* **settings:** report live proxy configuration ([#3177](https://github.com/headroomlabs-ai/headroom/issues/3177)) ([58b1454](https://github.com/headroomlabs-ai/headroom/commit/58b1454282f2b2dee49616c6637fa135ccb885b7))
* **smart-crusher:** recurse at adaptive array limit ([#3770](https://github.com/headroomlabs-ai/headroom/issues/3770)) ([7790bde](https://github.com/headroomlabs-ai/headroom/commit/7790bdeebda290b9fdbf899df1cbf9a05e0bc5e9))
* **storage:** page JSONL queries after sorting ([#3872](https://github.com/headroomlabs-ai/headroom/issues/3872)) ([91237ca](https://github.com/headroomlabs-ai/headroom/commit/91237cae70771e8e19cbc06ca65d328ac6cb0878))
* **subscription:** match the Bearer scheme case-insensitively for the Codex usage poll (RFC 7235) ([#3966](https://github.com/headroomlabs-ai/headroom/issues/3966)) ([fe88461](https://github.com/headroomlabs-ai/headroom/commit/fe884612c07d2e8a4454615ccc5b6d4feed1d7dd))
* **subscription:** poll with the refreshed credentials-file OAuth token ([#3916](https://github.com/headroomlabs-ai/headroom/issues/3916)) ([2dc9fc2](https://github.com/headroomlabs-ai/headroom/commit/2dc9fc22f09ec85d8e73c916e7c1f6f565d271ec))
* surface Codex responses traffic in dashboard ([#399](https://github.com/headroomlabs-ai/headroom/issues/399)) ([ecc4967](https://github.com/headroomlabs-ai/headroom/commit/ecc496709b7f2c2657de25d1e3f8de3f226b32e5))
* **telemetry:** label custom-base chat upstreams from a fixed provider set ([#3759](https://github.com/headroomlabs-ai/headroom/issues/3759)) ([f0ec2bb](https://github.com/headroomlabs-ai/headroom/commit/f0ec2bb37697b1addccb416bd626e7bf3c5ea835))
* **thinking:** don't read the model's date suffix as its minor version ([#3791](https://github.com/headroomlabs-ai/headroom/issues/3791)) ([afaaaa8](https://github.com/headroomlabs-ai/headroom/commit/afaaaa88049357bac7ec186ea33678f406d02609))
* **transforms/kompress:** preserve line boundaries and tabular output in Kompress ([#3119](https://github.com/headroomlabs-ai/headroom/issues/3119)) ([fe2ed2b](https://github.com/headroomlabs-ai/headroom/commit/fe2ed2b545e4b3c97d21872232d5446cb54aedc2))
* **transforms:** judge a Codex exec envelope read by its output ([#3878](https://github.com/headroomlabs-ai/headroom/issues/3878)) ([922924e](https://github.com/headroomlabs-ai/headroom/commit/922924ef44ebd7501ff00923cc0c2007f06cfade))
* **transforms:** judge the code_aware Kompress fallback in tokens ([#3881](https://github.com/headroomlabs-ai/headroom/issues/3881)) ([6326965](https://github.com/headroomlabs-ai/headroom/commit/63269650462c1a565c259cfe3fc3bd67ac942f5a))
* **transforms:** keep record-bearing JSON out of Kompress ([#3673](https://github.com/headroomlabs-ai/headroom/issues/3673)) ([#3880](https://github.com/headroomlabs-ai/headroom/issues/3880)) ([8dbbd1d](https://github.com/headroomlabs-ai/headroom/commit/8dbbd1d8967f719acfaa21e2c1668e9f3193dbe8))
* **wrap:** never reuse a non-Headroom listener on the proxy port ([#3799](https://github.com/headroomlabs-ai/headroom/issues/3799)) ([3ffa57e](https://github.com/headroomlabs-ai/headroom/commit/3ffa57ec25a6f05dff073c0ad0b14c90ce264fd8))
* **wrap:** never reuse a proxy with incompatible routing config ([#3201](https://github.com/headroomlabs-ai/headroom/issues/3201)) ([f69e246](https://github.com/headroomlabs-ai/headroom/commit/f69e2463a0c29cea7943af5efe4b2a2170a1e863))
* **wrap:** preserve pre-set ANTHROPIC_BASE_URL as proxy upstream ([#1358](https://github.com/headroomlabs-ai/headroom/issues/1358)) ([bb1ab6a](https://github.com/headroomlabs-ai/headroom/commit/bb1ab6afd35a5c22b6c11b549aba4075fb7791ec))
* **wrap:** scope Serena's MCP registration to the wrapped project ([#2787](https://github.com/headroomlabs-ai/headroom/issues/2787)) ([#2992](https://github.com/headroomlabs-ai/headroom/issues/2992)) ([8cfeb69](https://github.com/headroomlabs-ai/headroom/commit/8cfeb692ca0cad9598160020a144c5c671cd2fc3))
* **wrap:** set ANTHROPIC_HOST so `wrap goose` actually proxies Anthropic ([#2619](https://github.com/headroomlabs-ai/headroom/issues/2619)) ([c07fad0](https://github.com/headroomlabs-ai/headroom/commit/c07fad0f37d44b7f6886e6ce774d424463636242))
* **wrap:** strip -dev from running proxy version in restart check ([#3200](https://github.com/headroomlabs-ai/headroom/issues/3200)) ([bd0296b](https://github.com/headroomlabs-ai/headroom/commit/bd0296b5e7b62b620df7b37b41ce573d57958e71))


### Performance Improvements

* add savings audit output ([#1211](https://github.com/headroomlabs-ai/headroom/issues/1211)) ([9a72bc0](https://github.com/headroomlabs-ai/headroom/commit/9a72bc024263e2470626fae7f20430db682e0042))
* **compression/code:** avoid a UTF-8 copy per code block in byte-to-char mapping ([#3169](https://github.com/headroomlabs-ai/headroom/issues/3169)) ([d5e5534](https://github.com/headroomlabs-ai/headroom/commit/d5e5534b4763b14d7710908153e0d6a89423eea9))
* **image:** OCR and SigLIP each image once, not once per turn ([#3941](https://github.com/headroomlabs-ai/headroom/issues/3941)) ([a8561fb](https://github.com/headroomlabs-ai/headroom/commit/a8561fb4be1bdc17bf8bf86ac97c17651e2820b7))
* **memory:** bound traffic-learner _persisted_ids with the dedup window ([#3341](https://github.com/headroomlabs-ai/headroom/issues/3341)) ([7e73438](https://github.com/headroomlabs-ai/headroom/commit/7e73438dc5f923c90ad0c1f2f07cb6de221c9f08))
* **metrics:** cap inbound request-path cardinality to bound memory ([#3340](https://github.com/headroomlabs-ai/headroom/issues/3340)) ([88a1f4e](https://github.com/headroomlabs-ai/headroom/commit/88a1f4e52ba220b5ddb34d94ac0a201391c16027))
* **proxy:** lighter request path: alias the message snapshot, keep the token cache on re-counts, decompress off the event loop ([#3909](https://github.com/headroomlabs-ai/headroom/issues/3909)) ([c873d13](https://github.com/headroomlabs-ai/headroom/commit/c873d13fe07d09be71d5dcbfd640a78ec5b3f0d7))
* **tokenizer:** memoize OpenAI token counts like the Anthropic counter ([#3168](https://github.com/headroomlabs-ai/headroom/issues/3168)) ([0a2c80d](https://github.com/headroomlabs-ai/headroom/commit/0a2c80d5207642a5e58ba9eb65e19cd004018642))


### Dependencies

* bump pyjwt 2.13.0 -&gt; 2.15.1 for CVE-2026-102274 ([#3861](https://github.com/headroomlabs-ai/headroom/issues/3861)) ([37b9c46](https://github.com/headroomlabs-ai/headroom/commit/37b9c46069f11a2b2a477ae4ef25dd33bf359684))
* Bump source-map-js from 1.2.1 to 1.2.2 in /docs ([#3986](https://github.com/headroomlabs-ai/headroom/issues/3986)) ([e06631a](https://github.com/headroomlabs-ai/headroom/commit/e06631a7a78d18432c90cfb44b30e461424cfd30))
* Bump source-map-js from 1.2.1 to 1.2.2 in /plugins/openclaw ([#3988](https://github.com/headroomlabs-ai/headroom/issues/3988)) ([4be83b3](https://github.com/headroomlabs-ai/headroom/commit/4be83b35e683df077b11af4c4b37b301c4a65547))
* Bump source-map-js from 1.2.1 to 1.2.2 in /plugins/opencode ([#3987](https://github.com/headroomlabs-ai/headroom/issues/3987)) ([478dd9e](https://github.com/headroomlabs-ai/headroom/commit/478dd9e0a34cd592fdc0e313019297bc23b17db3))
* Bump source-map-js from 1.2.1 to 1.2.2 in /sdk/typescript ([#3985](https://github.com/headroomlabs-ai/headroom/issues/3985)) ([62cde35](https://github.com/headroomlabs-ai/headroom/commit/62cde35b939d7405735b72d1e50aa7c1407e5892))
* bump the npm-minor-patch group across 2 directories with 11 updates ([#3903](https://github.com/headroomlabs-ai/headroom/issues/3903)) ([afe4f4e](https://github.com/headroomlabs-ai/headroom/commit/afe4f4eca58977ae9382dfb2899a8097b46c0909))
* bump the npm-minor-patch group across 3 directories with 11 updates ([#3910](https://github.com/headroomlabs-ai/headroom/issues/3910)) ([ff1a0d6](https://github.com/headroomlabs-ai/headroom/commit/ff1a0d69f4a83f7c5583a7af2d2961025587801e))
* bump webpki-roots from 0.26.11 to 1.0.8 ([#3905](https://github.com/headroomlabs-ai/headroom/issues/3905)) ([fee53b4](https://github.com/headroomlabs-ai/headroom/commit/fee53b4daa3a0ac2b2378a692278f24f0062d584))
* drop the crewai extra to remove chromadb from the lockfile ([#3870](https://github.com/headroomlabs-ai/headroom/issues/3870)) ([59b8cef](https://github.com/headroomlabs-ai/headroom/commit/59b8cefc24e48539974787e0677298f335b2720e))


### Code Refactoring

* **ccr:** read the expansion query through extract_user_query ([#2707](https://github.com/headroomlabs-ai/headroom/issues/2707)) ([dcec845](https://github.com/headroomlabs-ai/headroom/commit/dcec845851d8202ce3361022a14b3716fdeb59c0))
* **wrap:** generate goose/openhands/openclaude from a WrapTarget registry ([#3800](https://github.com/headroomlabs-ai/headroom/issues/3800)) ([de4cf7e](https://github.com/headroomlabs-ai/headroom/commit/de4cf7e7a1ece51ce6c60d25bc34f46897e972c9))

---

> **Source** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · `v0.40.0` · 2026-10-06 · [upstream release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.40.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
