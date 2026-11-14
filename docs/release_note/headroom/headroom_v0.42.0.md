---
title: "headroom v0.42.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.42.0"
version: "v0.42.0"
published: "2026-10-26"
type: "minor"
lang: "en"
summary: "pipeline: put per-request saved tokens on OutcomeSnapshot (#4231) (8cedf7b) · proxy: let turn hooks rewrite OpenAI Responses requests on HTTP and WebSocket (#4232) (fbf7bc3)"
---

# headroom v0.42.0

## [0.42.0](https://github.com/headroomlabs-ai/headroom/compare/v0.41.0...v0.42.0) (2026-10-26)


### Features

* **pipeline:** put per-request saved tokens on OutcomeSnapshot ([#4231](https://github.com/headroomlabs-ai/headroom/issues/4231)) ([8cedf7b](https://github.com/headroomlabs-ai/headroom/commit/8cedf7be4decfb3a0da42e4e955b6a3301a66dc9))
* **proxy:** let turn hooks rewrite OpenAI Responses requests on HTTP and WebSocket ([#4232](https://github.com/headroomlabs-ai/headroom/issues/4232)) ([fbf7bc3](https://github.com/headroomlabs-ai/headroom/commit/fbf7bc3278c11975299b9bd0a2ecf200dfd25a05))
* **proxy:** report the same tool savings on gateway /v1/compress as the proxy path ([#4467](https://github.com/headroomlabs-ai/headroom/issues/4467)) ([a904210](https://github.com/headroomlabs-ai/headroom/commit/a90421083a781990b877d34fdaba0bc1b6cf6c4d))
* **savings:** add the per-request counterfactual savings record ([#4236](https://github.com/headroomlabs-ai/headroom/issues/4236)) ([2912b7b](https://github.com/headroomlabs-ai/headroom/commit/2912b7b620d7abd39828db73e4f326b9a041d309))


### Bug Fixes

* **batch:** preserve live contexts during capacity cleanup ([#4210](https://github.com/headroomlabs-ai/headroom/issues/4210)) ([2cbdd22](https://github.com/headroomlabs-ai/headroom/commit/2cbdd22a65789676d9ebbd9e2b6a908e7f8fad95))
* **batch:** preserve native Gemini continuation tools ([#4211](https://github.com/headroomlabs-ai/headroom/issues/4211)) ([8757458](https://github.com/headroomlabs-ai/headroom/commit/875745889ff065208d3a32aa583881468ae7c41d))
* **cache:** bound the router's compression cache, keep the rest in SQLite ([#4357](https://github.com/headroomlabs-ai/headroom/issues/4357)) ([b196424](https://github.com/headroomlabs-ai/headroom/commit/b196424e35df0afc0c8576aea1950ed16b00e027))
* **cache:** keep indented lines intact in OpenAI whitespace normalization ([#4343](https://github.com/headroomlabs-ai/headroom/issues/4343)) ([2480100](https://github.com/headroomlabs-ai/headroom/commit/248010091578e1f05ebcf65c8146bb57f9fb4e00))
* **cache:** keep prefix-tracker state across a graceful proxy restart ([#4299](https://github.com/headroomlabs-ai/headroom/issues/4299)) ([62b3bed](https://github.com/headroomlabs-ai/headroom/commit/62b3bedaba988de87e38b1a58c11d28baaba7dbf))
* **ccr:** recognize client-owned MCP retrieval aliases ([#4165](https://github.com/headroomlabs-ai/headroom/issues/4165)) ([89545fb](https://github.com/headroomlabs-ai/headroom/commit/89545fbdf3873f75461f71a03c89b1f9c64d650d))
* **ccr:** stream the buffered CCR upstream request so idle-killing networks cannot cut it ([#4206](https://github.com/headroomlabs-ai/headroom/issues/4206)) ([ca6ba34](https://github.com/headroomlabs-ai/headroom/commit/ca6ba3486c09badecb1bfe99ddabf562c9f01c77))
* **ci:** pin checkout in release notification smoke workflow ([#4399](https://github.com/headroomlabs-ai/headroom/issues/4399)) ([70273db](https://github.com/headroomlabs-ai/headroom/commit/70273db0af392e8f971d42e21484656676255d0b))
* **copilot:** detect COPILOT_API_URL in cli-main.js for Copilot CLI &gt;= 1.0.93 ([#4450](https://github.com/headroomlabs-ai/headroom/issues/4450)) ([043fe09](https://github.com/headroomlabs-ai/headroom/commit/043fe09d8c620201045619bcbcd88e26e2c6e71f))
* **copilot:** preserve native inline OAuth identity ([#4144](https://github.com/headroomlabs-ai/headroom/issues/4144)) ([ad62166](https://github.com/headroomlabs-ai/headroom/commit/ad62166ba3056e5b98fc5bfee19f0c9b6c316e8d))
* **deps:** bump rustls to 0.23.46 for RUSTSEC-2026-0346..0349 ([#4222](https://github.com/headroomlabs-ai/headroom/issues/4222)) ([132dbc7](https://github.com/headroomlabs-ai/headroom/commit/132dbc76995cdbecc25b4f647dbf919351cd5f7f))
* **deps:** patch OpenClaw Undici and narrow E2E audit exceptions ([#4453](https://github.com/headroomlabs-ai/headroom/issues/4453)) ([1be699f](https://github.com/headroomlabs-ai/headroom/commit/1be699f68ee884c5c319cee9841ca304e448873c))
* **deps:** require hf-xet&gt;=1.6.0 so a Hub download can't crash Python at exit ([#4192](https://github.com/headroomlabs-ai/headroom/issues/4192)) ([9e5dac7](https://github.com/headroomlabs-ai/headroom/commit/9e5dac7c74979abd8d1b9ad9615443b76e42b530))
* **deps:** require mcp&gt;=1.30.0 for CVE-2026-59951 ([#4239](https://github.com/headroomlabs-ai/headroom/issues/4239)) ([2f7a83a](https://github.com/headroomlabs-ai/headroom/commit/2f7a83a91d3ca33a79b5c41b8095f6454b5bfb43))
* **gateway:** keep input_includes_cache when re-drive usage is merged ([#4423](https://github.com/headroomlabs-ai/headroom/issues/4423)) ([3f94144](https://github.com/headroomlabs-ai/headroom/commit/3f941446bfbeb0b66cf6eb4a1ddf254e17d0c2a4))
* **gemini:** keep snake_case inline_data and function parts when compressing ([#4290](https://github.com/headroomlabs-ai/headroom/issues/4290)) ([4bf1bf5](https://github.com/headroomlabs-ai/headroom/commit/4bf1bf55d175ad047c32cc3049aeff51126424c8))
* **image:** clear last_result before each compress() call ([#4341](https://github.com/headroomlabs-ai/headroom/issues/4341)) ([19c91a8](https://github.com/headroomlabs-ai/headroom/commit/19c91a870fac09f824001197e72c8929698ea0b8))
* **image:** flatten transparent images onto white before re-encoding as JPEG ([#4296](https://github.com/headroomlabs-ai/headroom/issues/4296)) ([9f5cfcf](https://github.com/headroomlabs-ai/headroom/commit/9f5cfcfd2bb90097f79144ff3821fc7db9fe36d5))
* **install:** keep the HuggingFace cache on a writable mount in Docker presets ([#4207](https://github.com/headroomlabs-ai/headroom/issues/4207)) ([#4209](https://github.com/headroomlabs-ai/headroom/issues/4209)) ([7b6cb77](https://github.com/headroomlabs-ai/headroom/commit/7b6cb7790552ac10f0135013337ea4a09a9e951e))
* **kompress:** skip the local model download when a remote endpoint is set ([#4234](https://github.com/headroomlabs-ai/headroom/issues/4234)) ([ff36931](https://github.com/headroomlabs-ai/headroom/commit/ff3693165344410eaf2882209648e504f9d3eaf0))
* **kompress:** time each model-load stage and stop false not-ready warnings during warm-up ([#4195](https://github.com/headroomlabs-ai/headroom/issues/4195)) ([89b229c](https://github.com/headroomlabs-ai/headroom/commit/89b229ce5feaeb8710f4e226a47697426231ca55))
* **learn:** anchor the managed block on its last start marker, append when no end marker ([#4342](https://github.com/headroomlabs-ai/headroom/issues/4342)) ([45dacc1](https://github.com/headroomlabs-ai/headroom/commit/45dacc1f94a4343c76a6e257143d22d67dc713f0))
* **learn:** keep the digest's loop section inside its budget ([#4269](https://github.com/headroomlabs-ai/headroom/issues/4269)) ([506ba16](https://github.com/headroomlabs-ai/headroom/commit/506ba16c4a7f231b177d28066bcda389133a5e91))
* **logs:** count omitted levels from dropped lines ([#4141](https://github.com/headroomlabs-ai/headroom/issues/4141)) ([023dd1b](https://github.com/headroomlabs-ai/headroom/commit/023dd1bc5402dcebf52a5ed3cf6a2a2878a524d9))
* **mcp:** accept the JSONC opencode config that wrap and install already accept ([#4297](https://github.com/headroomlabs-ai/headroom/issues/4297)) ([9202948](https://github.com/headroomlabs-ai/headroom/commit/9202948c1e57a4ab8daa7c00c400605844c19f4f))
* **memory:** bound retrieval queries before embedding ([#4244](https://github.com/headroomlabs-ai/headroom/issues/4244)) ([8c07cf4](https://github.com/headroomlabs-ai/headroom/commit/8c07cf4a0fff1b67da1b542dc746b0b4a0e952e6))
* **memory:** ignore incidental cwd prose ([#4166](https://github.com/headroomlabs-ai/headroom/issues/4166)) ([3765439](https://github.com/headroomlabs-ai/headroom/commit/37654390b60ccb7658bb96a2f177b8666c7b7273))
* **memory:** log storage and SQLite failures that currently make retrieval miss silently ([#4111](https://github.com/headroomlabs-ai/headroom/issues/4111)) ([4e6e955](https://github.com/headroomlabs-ai/headroom/commit/4e6e955cad0bff318e30bd4f24e934a23f57e9c6))
* **memory:** resolve partial IDs beyond the first 1000 records ([#4389](https://github.com/headroomlabs-ai/headroom/issues/4389)) ([c4ea31b](https://github.com/headroomlabs-ai/headroom/commit/c4ea31b156478adde015833074ad7278230b4512))
* **memory:** treat a cwd with no UTF-8 form as unresolved instead of raising ([#4167](https://github.com/headroomlabs-ai/headroom/issues/4167)) ([760c05e](https://github.com/headroomlabs-ai/headroom/commit/760c05e1b0ff8c34443f5d6eba0c4ff36f171eb2))
* **openai:** read Responses cache_write_tokens instead of inferring writes ([#4237](https://github.com/headroomlabs-ai/headroom/issues/4237)) ([4630602](https://github.com/headroomlabs-ai/headroom/commit/46306024e74b3a44aca17fb70c1416f96b2a0b53))
* **openai:** recompress cached Responses units whose CCR entries expired ([#4146](https://github.com/headroomlabs-ai/headroom/issues/4146)) ([8f7b419](https://github.com/headroomlabs-ai/headroom/commit/8f7b41998076727d08e5db4ee57c8bd579988c30))
* **opencode:** do not rewrite an OpenCode config that fails to parse ([#4424](https://github.com/headroomlabs-ai/headroom/issues/4424)) ([0fe0a59](https://github.com/headroomlabs-ai/headroom/commit/0fe0a597c1929bcb4a7372e6689fd62410bad9d2))
* **opencode:** restore process env keys on transport dispose ([#4430](https://github.com/headroomlabs-ai/headroom/issues/4430)) ([d17bac8](https://github.com/headroomlabs-ai/headroom/commit/d17bac8d64dd74ade81638ac7170715851c9704b))
* **pricing:** suppress litellm's Provider List banner that corrupts perf JSON ([#4197](https://github.com/headroomlabs-ai/headroom/issues/4197)) ([e01ad35](https://github.com/headroomlabs-ai/headroom/commit/e01ad350dc71d44f1a4e07df5ea4e45fa39a4773))
* **proxy:** accept HEADROOM_MEMORY_INJECTION_MODE=tool ([#4395](https://github.com/headroomlabs-ai/headroom/issues/4395)) ([f89c928](https://github.com/headroomlabs-ai/headroom/commit/f89c9282a8216b8e168c29d85c6f13c5ce7d6301))
* **proxy:** bound per-model state keyed by the client model string ([#4407](https://github.com/headroomlabs-ai/headroom/issues/4407)) ([33e5f67](https://github.com/headroomlabs-ai/headroom/commit/33e5f67464286961f37d09298d31c5022d275a32))
* **proxy:** copy cached tool compaction results (hardening) ([#4410](https://github.com/headroomlabs-ai/headroom/issues/4410)) ([a256231](https://github.com/headroomlabs-ai/headroom/commit/a25623109d5075276af057e79c3ed3e309906563))
* **proxy:** count output tokens from CRLF-framed SSE streams too ([#4298](https://github.com/headroomlabs-ai/headroom/issues/4298)) ([755293d](https://github.com/headroomlabs-ai/headroom/commit/755293dd68d495b6fcec15fd47d324c3ce5eeefa))
* **proxy:** do not rebuild a failed turn-hook re-drive as HTTP 200 ([#4398](https://github.com/headroomlabs-ai/headroom/issues/4398)) ([f59c8ff](https://github.com/headroomlabs-ai/headroom/commit/f59c8ffcd80f19564cf041d1fa4eb6247f2e1d01))
* **proxy:** drop web_search_call history from a Responses request with no web_search tool ([#4202](https://github.com/headroomlabs-ai/headroom/issues/4202)) ([2a70d12](https://github.com/headroomlabs-ai/headroom/commit/2a70d128195575cbc52129a5287a9a3ccc097744))
* **proxy:** honor bypass header and license gate in Anthropic batch create ([#4411](https://github.com/headroomlabs-ai/headroom/issues/4411)) ([4fd9cdd](https://github.com/headroomlabs-ai/headroom/commit/4fd9cddfd2e9cbbe38ab0b9d3acc6bc6f934a6e2))
* **proxy:** import Response at runtime in the Bedrock handler ([#4397](https://github.com/headroomlabs-ai/headroom/issues/4397)) ([51e4ae3](https://github.com/headroomlabs-ai/headroom/commit/51e4ae36a5751fc494c0b583d37e62213e5a08a9))
* **proxy:** judge NAT64 upstream addresses by their embedded IPv4 ([#4179](https://github.com/headroomlabs-ai/headroom/issues/4179)) ([486afaa](https://github.com/headroomlabs-ai/headroom/commit/486afaac7426fa1d6735fe2ce6ae37630d9d11ae))
* **proxy:** keep in-period costs in the budget ledger when the entry cap is reached ([#4448](https://github.com/headroomlabs-ai/headroom/issues/4448)) ([41c15b3](https://github.com/headroomlabs-ai/headroom/commit/41c15b311cd5ab34d5108569eef4249a60973f96))
* **proxy:** keep negative compression savings across restart ([#4406](https://github.com/headroomlabs-ai/headroom/issues/4406)) ([bebe24c](https://github.com/headroomlabs-ai/headroom/commit/bebe24c5ff0e815ac87937d9ecb1633a5091ab64))
* **proxy:** keep tool deferral for GitHub Copilot upstream ([#4356](https://github.com/headroomlabs-ai/headroom/issues/4356)) ([217b658](https://github.com/headroomlabs-ai/headroom/commit/217b658845389e32a02760d75886de20d60e2ba3))
* **proxy:** let HEADROOM_LOG_LEVEL=debug turn on Headroom's own debug logs ([#4137](https://github.com/headroomlabs-ai/headroom/issues/4137)) ([00093ce](https://github.com/headroomlabs-ai/headroom/commit/00093ceddcf42c3936a96ea5f280af2d0e1b2e47))
* **proxy:** make handler failures debuggable from the logs ([#4127](https://github.com/headroomlabs-ai/headroom/issues/4127)) ([7dc20b6](https://github.com/headroomlabs-ai/headroom/commit/7dc20b6fe027cf262c5e2d0415f0dbb2032ac73b))
* **proxy:** net tools a turn hook adds against the saving it books ([#4057](https://github.com/headroomlabs-ai/headroom/issues/4057)) ([85520c2](https://github.com/headroomlabs-ai/headroom/commit/85520c2941ed6b2c4cd4bfd9f747b24227a256aa))
* **proxy:** record a stream the client closes after its terminal event as completed ([#4286](https://github.com/headroomlabs-ai/headroom/issues/4286)) ([762a337](https://github.com/headroomlabs-ai/headroom/commit/762a337bbeba268ae1e172c7a7de1e374231e32c))
* **proxy:** record outcome when a passthrough stream ends mid-character ([#4429](https://github.com/headroomlabs-ai/headroom/issues/4429)) ([75cfbba](https://github.com/headroomlabs-ai/headroom/commit/75cfbba91d9bb2ff55df3949eddd4452dd9fb661))
* **proxy:** report disabled Kompress at startup ([#4217](https://github.com/headroomlabs-ai/headroom/issues/4217)) ([430ea4f](https://github.com/headroomlabs-ai/headroom/commit/430ea4f4ebaeb0b217e237084963b64775bef24a))
* **proxy:** report read maturation as inert in cache mode ([#4198](https://github.com/headroomlabs-ai/headroom/issues/4198)) ([ba82453](https://github.com/headroomlabs-ai/headroom/commit/ba824539d6f80c3e056f299789c1cf079a4693fe))
* **proxy:** show turn-hook savings in /stats extension_savings, incl. Codex WS ([#4233](https://github.com/headroomlabs-ai/headroom/issues/4233)) ([1d112cd](https://github.com/headroomlabs-ai/headroom/commit/1d112cd36c9aee765ec3b550773de0c93c6d79be))
* **proxy:** snapshot the original messages when a turn hook can edit them ([#4241](https://github.com/headroomlabs-ai/headroom/issues/4241)) ([df11f27](https://github.com/headroomlabs-ai/headroom/commit/df11f2749862a0090db11f7fca3e7dc42a75b612))
* **relevance:** load the default embedder from one pinned snapshot ([#4152](https://github.com/headroomlabs-ai/headroom/issues/4152)) ([f380692](https://github.com/headroomlabs-ai/headroom/commit/f380692b463637e90de84f1b5cc29c7ae9f7b969))
* **savings:** key a Responses conversation on its thread, not the shared session ([#4440](https://github.com/headroomlabs-ai/headroom/issues/4440)) ([11f743d](https://github.com/headroomlabs-ai/headroom/commit/11f743dd90e9f60cf01805a23514bd06440dd2d2))
* **sdk:** preserve Vercel AI SDK file and image parts through compression ([#4048](https://github.com/headroomlabs-ai/headroom/issues/4048)) ([1668a6c](https://github.com/headroomlabs-ai/headroom/commit/1668a6c0dd73cd8a1b9d7fc5eae297149e8f7d93))
* **security:** restrict the Windows runtime log via NTFS ACL, not just warn ([#4135](https://github.com/headroomlabs-ai/headroom/issues/4135)) ([125a703](https://github.com/headroomlabs-ai/headroom/commit/125a703a65c574e9db809f95eefdc70407e0250e))
* **smart-crusher:** match audit-safe protected_patterns against unescaped text ([#4294](https://github.com/headroomlabs-ai/headroom/issues/4294)) ([e11afdb](https://github.com/headroomlabs-ai/headroom/commit/e11afdbdf8a729e50553681143d0f925b71fcd83))
* **storage:** normalize timezone-aware JSONL time filters ([#4063](https://github.com/headroomlabs-ai/headroom/issues/4063)) ([bf34ccf](https://github.com/headroomlabs-ai/headroom/commit/bf34ccf58861a687e814abf1a158885987add9ae))
* **tabular:** pass tables with repeated header names through verbatim ([#4278](https://github.com/headroomlabs-ai/headroom/issues/4278)) ([ed3195b](https://github.com/headroomlabs-ai/headroom/commit/ed3195beef1dcfbb0219c2da9b59984167c81c01))
* **telemetry:** give empty-item compressions a stable tool signature ([#4396](https://github.com/headroomlabs-ai/headroom/issues/4396)) ([a79def4](https://github.com/headroomlabs-ai/headroom/commit/a79def4dd1b7217a75ce6c4eebd0b06ea3a70c1d))
* **telemetry:** let HEADROOM_TELEMETRY=off stop the anonymous beacon ([#4235](https://github.com/headroomlabs-ai/headroom/issues/4235)) ([1a40b3c](https://github.com/headroomlabs-ai/headroom/commit/1a40b3ce67ad9e155ba768e8d05cec4c872c7f99))
* **transforms:** keep the fences of a code block passed through for a protected tag ([#4292](https://github.com/headroomlabs-ai/headroom/issues/4292)) ([02958c6](https://github.com/headroomlabs-ai/headroom/commit/02958c6ffe41a1d3466c21558670875df87384ae))
* **transforms:** log the compression failures that silently become "no savings" ([#4092](https://github.com/headroomlabs-ai/headroom/issues/4092)) ([580cc83](https://github.com/headroomlabs-ai/headroom/commit/580cc83a9a412123040978447a2c9b77c08670b0))
* **zcode:** skip providers that point at the Headroom proxy itself ([#4413](https://github.com/headroomlabs-ai/headroom/issues/4413)) ([9ac1b52](https://github.com/headroomlabs-ai/headroom/commit/9ac1b52c2762bbc40d3e459e5f87cd4bbfbde8aa))


### Dependencies

* Bump base64 from 0.22.1 to 0.23.1 ([#4029](https://github.com/headroomlabs-ai/headroom/issues/4029)) ([8d468d4](https://github.com/headroomlabs-ai/headroom/commit/8d468d455c2e3c195cc2975bbc13e63d6b85ef59))
* Bump ruff from 0.16.8 to 0.17.0 in the pip-minor-patch group across 1 directory ([#4026](https://github.com/headroomlabs-ai/headroom/issues/4026)) ([de3f639](https://github.com/headroomlabs-ai/headroom/commit/de3f639803f1f172f65c05c165bfab92c0bec9e8))
* Bump the cargo-minor-patch group across 1 directory with 12 updates ([#4186](https://github.com/headroomlabs-ai/headroom/issues/4186)) ([683c9a6](https://github.com/headroomlabs-ai/headroom/commit/683c9a6120c309e84e4848378dbe3891d064f82e))
* Bump the npm-minor-patch group across 2 directories with 16 updates ([#4218](https://github.com/headroomlabs-ai/headroom/issues/4218)) ([07c8bbf](https://github.com/headroomlabs-ai/headroom/commit/07c8bbf1edcc143a7fe97b9e29214355cc371a19))
* Bump the npm-minor-patch group across 3 directories with 12 updates ([#4219](https://github.com/headroomlabs-ai/headroom/issues/4219)) ([1f71cb3](https://github.com/headroomlabs-ai/headroom/commit/1f71cb3d64e1586c97331a3482aae84558741102))
* Update huggingface-hub requirement from &lt;2.0,&gt;=1.5.0 to &gt;=1.5.0,&lt;3.0 ([#4027](https://github.com/headroomlabs-ai/headroom/issues/4027)) ([fcf3db8](https://github.com/headroomlabs-ai/headroom/commit/fcf3db8e70d15aef0d80a561cf5d0e45e918a338))


### Code Refactoring

* **integrations:** share the local/cloud compress backend of asgi and litellm_callback ([#4124](https://github.com/headroomlabs-ai/headroom/issues/4124)) ([58caafb](https://github.com/headroomlabs-ai/headroom/commit/58caafb59b40c00b35ceee6237ef2289df71f25d))
* **transforms:** share one CCR persist helper for the Rust-backed compressors ([#4094](https://github.com/headroomlabs-ai/headroom/issues/4094)) ([ea947ca](https://github.com/headroomlabs-ai/headroom/commit/ea947ca421ee6d6b8f15a9ed522c3a3bea5a3225))

<!-- headroom-teams-footer -->

---

**Headroom for Teams:** 3 months of Headroom Enterprise free with a 12-month plan. [Claim the perk →](https://headroom-perks.vercel.app/?source=github&utm_source=github&utm_medium=release-notes&utm_content=v0.42.0)

---

> **Source** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · `v0.42.0` · 2026-10-26 · [upstream release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.42.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
