---
title: "headroom v0.44.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.44.0"
version: "v0.44.0"
published: "2026-11-10"
type: "minor"
lang: "en"
---

# headroom v0.44.0

## [0.44.0](https://github.com/headroomlabs-ai/headroom/compare/v0.43.1...v0.44.0) (2026-11-09)


### ⚠ BREAKING CHANGES

* **packaging:** keep PyTorch extras out of all ([#4067](https://github.com/headroomlabs-ai/headroom/issues/4067))

### Features

* **pipeline:** say whose request an OutcomeSnapshot is ([#4698](https://github.com/headroomlabs-ai/headroom/issues/4698)) ([a2bcbd1](https://github.com/headroomlabs-ai/headroom/commit/a2bcbd101b1391debfd218ec8c63cb72d2bc240a))
* **providers:** add Hermes agent wrap support ([#934](https://github.com/headroomlabs-ai/headroom/issues/934)) ([7877241](https://github.com/headroomlabs-ai/headroom/commit/7877241d84c93b3ec487e07324245838ddae85cc))
* **proxy/model-router:** add shadow mode (HEADROOM_MODEL_ROUTER_LOG_ONLY) ([#2395](https://github.com/headroomlabs-ai/headroom/issues/2395)) ([861ef95](https://github.com/headroomlabs-ai/headroom/commit/861ef95620c801c2560a2eacc5773a26e131dfd0))
* **proxy:** add lossless /v1/compress mode and detect provider by wire shape ([#4617](https://github.com/headroomlabs-ai/headroom/issues/4617)) ([33f067a](https://github.com/headroomlabs-ai/headroom/commit/33f067a243b2e648730c01ae6b9f20cba879f351))
* **proxy:** expose per-request cost_usd in /stats recent_requests ([#1079](https://github.com/headroomlabs-ai/headroom/issues/1079)) ([#1565](https://github.com/headroomlabs-ai/headroom/issues/1565)) ([84cedbf](https://github.com/headroomlabs-ai/headroom/commit/84cedbf2b4197f09ace9944c50655786dac35b03))
* **proxy:** expose shared Redis store availability in /health and /metrics ([#4578](https://github.com/headroomlabs-ai/headroom/issues/4578)) ([602ca65](https://github.com/headroomlabs-ai/headroom/commit/602ca65126e12d73ef44d4b1b01bbe1fa3b37080))
* **proxy:** give turn hooks one conversation id per client conversation ([#4496](https://github.com/headroomlabs-ai/headroom/issues/4496)) ([94a99ed](https://github.com/headroomlabs-ai/headroom/commit/94a99ed20f6fe110e03d2613e9feec42d9547150))
* **proxy:** report DeepSeek as its own provider in dashboard ([#2565](https://github.com/headroomlabs-ai/headroom/issues/2565)) ([9ad16a7](https://github.com/headroomlabs-ai/headroom/commit/9ad16a77f8b9a7817331aa5e9a9ee04d1e1fc05e))
* **proxy:** show per-request /stats metadata to token-authenticated callers ([#4168](https://github.com/headroomlabs-ai/headroom/issues/4168)) ([9b2dec5](https://github.com/headroomlabs-ai/headroom/commit/9b2dec56f9882a25fb511dc5f480b047845141f9))
* **proxy:** unified multi-upstream routing for Anthropic Cloud and local oMLX ([#4597](https://github.com/headroomlabs-ai/headroom/issues/4597)) ([f896161](https://github.com/headroomlabs-ai/headroom/commit/f896161340893dd8e96502d4c309980bed52d3d1))
* **savings:** carry cumulative actual output_tokens in history checkpoints ([#2921](https://github.com/headroomlabs-ai/headroom/issues/2921)) ([8388ff5](https://github.com/headroomlabs-ai/headroom/commit/8388ff5efd7caf3a827e66bf69449c4a64df05af))
* **wrap:** add `headroom wrap droid` for Factory Droid ([#4143](https://github.com/headroomlabs-ai/headroom/issues/4143)) ([bb8d18a](https://github.com/headroomlabs-ai/headroom/commit/bb8d18a56abb07ca7e811235c86ea6b626eb1f8b))
* **wrap:** make the Serena code-memory MCP opt-in ([#4509](https://github.com/headroomlabs-ai/headroom/issues/4509)) ([2649835](https://github.com/headroomlabs-ai/headroom/commit/2649835a51e6d459ac47e8dcb8591e5bf027715b))


### Bug Fixes

* **asgi:** stop buffering when the client disconnects (GHSA-mc2f-vg4v-2fh4) ([#4701](https://github.com/headroomlabs-ai/headroom/issues/4701)) ([c6d7081](https://github.com/headroomlabs-ai/headroom/commit/c6d708144ce27abeb08c4c57374b373eebe1951e))
* **beacon:** enforce the allowlist below the top-level keys ([#4691](https://github.com/headroomlabs-ai/headroom/issues/4691)) ([456288d](https://github.com/headroomlabs-ai/headroom/commit/456288da0765985ca31eed58dbdaef44ff9aa43a))
* **binaries:** fail closed on HEADROOM_BINARIES_ALLOW_UNVERIFIED=0/false ([#3218](https://github.com/headroomlabs-ai/headroom/issues/3218)) ([da6d973](https://github.com/headroomlabs-ai/headroom/commit/da6d9736cd82074988c7d0a2360b49d9d8b6c0a0))
* **cache:** record TTL observations with relative filenames ([#4711](https://github.com/headroomlabs-ai/headroom/issues/4711)) ([51d9dc5](https://github.com/headroomlabs-ai/headroom/commit/51d9dc59b3dc6b8c386cc2293e78d1334aac0893))
* **cache:** round learned TTL upper bounds up to whole seconds ([#4710](https://github.com/headroomlabs-ai/headroom/issues/4710)) ([13347e3](https://github.com/headroomlabs-ai/headroom/commit/13347e339c4cc88dfa0cfa1deceeb0dae56ee2fc))
* **cache:** save prefix-tracker state when the exit signal arrives ([#4715](https://github.com/headroomlabs-ai/headroom/issues/4715)) ([3ba4223](https://github.com/headroomlabs-ai/headroom/commit/3ba422361e3bce92afd6bb30e3cd817ec3b9cb46))
* **ccr:** lowercase the hash in the streaming feedback recorders ([#2313](https://github.com/headroomlabs-ai/headroom/issues/2313)) ([3912c04](https://github.com/headroomlabs-ai/headroom/commit/3912c0405321c498f854fd0c152ae01abf63bf48))
* **ci:** keep the npm publish token out of install and build steps ([#4690](https://github.com/headroomlabs-ai/headroom/issues/4690)) ([8f6366c](https://github.com/headroomlabs-ai/headroom/commit/8f6366cf66d035fc8e9f390be424bc9bdf6c62e4))
* **cli:** resolve active proxy port for read commands ([#3522](https://github.com/headroomlabs-ai/headroom/issues/3522)) ([02c4e92](https://github.com/headroomlabs-ai/headroom/commit/02c4e922f748cfac5db59303918bb13906031650))
* **content-router:** trust confident HTML detection over mixed-content heuristics ([#3627](https://github.com/headroomlabs-ai/headroom/issues/3627)) ([f50db67](https://github.com/headroomlabs-ai/headroom/commit/f50db67006e2fe3f43b295542b759d90bb73e5a1))
* **dashboard:** lifetime metrics and refresh ([#2374](https://github.com/headroomlabs-ai/headroom/issues/2374)) ([eb9932a](https://github.com/headroomlabs-ai/headroom/commit/eb9932a671c92b19c58949a63ec833869fc1a8e7))
* **doctor:** recognize IPv6 loopback and case-insensitive proxy routing URLs ([#3255](https://github.com/headroomlabs-ai/headroom/issues/3255)) ([2b0315b](https://github.com/headroomlabs-ai/headroom/commit/2b0315b2d4b0d54947050bbdad2de9e89df06378))
* **install:** decode Windows Task Scheduler XML output before parsing ([#3969](https://github.com/headroomlabs-ai/headroom/issues/3969)) ([#4064](https://github.com/headroomlabs-ai/headroom/issues/4064)) ([b78e07d](https://github.com/headroomlabs-ai/headroom/commit/b78e07da7fadeaafdbba16312140d44f812bc181))
* **install:** make install status agree with doctor when the proxy is reachable ([#3072](https://github.com/headroomlabs-ai/headroom/issues/3072)) ([#3141](https://github.com/headroomlabs-ai/headroom/issues/3141)) ([05431b2](https://github.com/headroomlabs-ai/headroom/commit/05431b264f4fc105a302cceed60b5327abc35e10))
* **langchain:** check optional integration availability ([#4042](https://github.com/headroomlabs-ai/headroom/issues/4042)) ([cde584d](https://github.com/headroomlabs-ai/headroom/commit/cde584d7fe6930b8ecf612b705e984b2c6a41527))
* **learn:** harden analyzer JSON parsing against malformed LLM output ([#2471](https://github.com/headroomlabs-ai/headroom/issues/2471)) ([12864fc](https://github.com/headroomlabs-ai/headroom/commit/12864fc8f01a1ca6c58440eccef0dabdd3e595b8))
* **learn:** support opencode v2 session schema in learn scanner ([#4199](https://github.com/headroomlabs-ai/headroom/issues/4199)) ([c05466a](https://github.com/headroomlabs-ai/headroom/commit/c05466a469c848c69a62a5c283c09dcd35d8e9c8))
* **lossless:** fold only pure path listings, never markup ([#4716](https://github.com/headroomlabs-ai/headroom/issues/4716)) ([0ccd559](https://github.com/headroomlabs-ai/headroom/commit/0ccd559db052ea2ec8baef122ac769a146a75518))
* **memory:** gracefully degrade on context lookup and initialization errors ([#3251](https://github.com/headroomlabs-ai/headroom/issues/3251)) ([#4049](https://github.com/headroomlabs-ai/headroom/issues/4049)) ([00d4f44](https://github.com/headroomlabs-ai/headroom/commit/00d4f441d3f1d48c463fea57e6c574c2f3671302))
* **metrics:** cap savings_by_source rows and fold the rest into other ([#4257](https://github.com/headroomlabs-ai/headroom/issues/4257)) ([2038fb2](https://github.com/headroomlabs-ai/headroom/commit/2038fb2a3667d9cba3ff9cb1c4957add06ef5acb))
* **packaging:** keep PyTorch extras out of all ([#4067](https://github.com/headroomlabs-ai/headroom/issues/4067)) ([a890521](https://github.com/headroomlabs-ai/headroom/commit/a8905214d949cdc42b1d76fbc83146f51e0c4f19))
* **proxy:** add --no-ccr-response-handling flag to bypass response buffering ([#3082](https://github.com/headroomlabs-ai/headroom/issues/3082)) ([#3100](https://github.com/headroomlabs-ai/headroom/issues/3100)) ([ce14271](https://github.com/headroomlabs-ai/headroom/commit/ce14271ba8ca66b653fbbb555d50ca20e7a36d3f))
* **proxy:** bound the Bedrock Prometheus model label ([#4694](https://github.com/headroomlabs-ai/headroom/issues/4694)) ([d70a8b7](https://github.com/headroomlabs-ai/headroom/commit/d70a8b76a5bc12b4eae6655e40e60abe19b145d0))
* **proxy:** drop headers named by Connection when forwarding responses ([#4674](https://github.com/headroomlabs-ai/headroom/issues/4674)) ([3871b36](https://github.com/headroomlabs-ai/headroom/commit/3871b3664a03c9dc489be13f245462f2a9fc0b67))
* **proxy:** keep cold-turn reasoning drops sticky so the next warm turn reuses the cached prefix ([#4592](https://github.com/headroomlabs-ai/headroom/issues/4592)) ([3544cf5](https://github.com/headroomlabs-ai/headroom/commit/3544cf5b88a0d0e704f3d3c5eb8a89f7c52d8c13))
* **proxy:** keep the Bedrock credentials provider when startup resolution fails ([#4705](https://github.com/headroomlabs-ai/headroom/issues/4705)) ([5438f00](https://github.com/headroomlabs-ai/headroom/commit/5438f0035d2fd0261b50aac0520b30021dc56fe0))
* **proxy:** refresh Bedrock AWS credentials before they expire ([#4696](https://github.com/headroomlabs-ai/headroom/issues/4696)) ([adc6724](https://github.com/headroomlabs-ai/headroom/commit/adc67249660b4464e8489e21287d9b95d044b095))
* **proxy:** rename leaked_threads metric to timed_out_workers_total ([#3908](https://github.com/headroomlabs-ai/headroom/issues/3908)) ([bd164a2](https://github.com/headroomlabs-ai/headroom/commit/bd164a2c3ba3a2eeb470a0b9503a696dd02b0e9c))
* **proxy:** track response.-prefixed item and content-part events in Responses SSE state ([#4695](https://github.com/headroomlabs-ai/headroom/issues/4695)) ([8f4122f](https://github.com/headroomlabs-ai/headroom/commit/8f4122f4e5ae351703c775e042d2ad705cebc143))
* **router:** compress tool_result blocks in mutable window with trailing messages ([#4717](https://github.com/headroomlabs-ai/headroom/issues/4717)) ([0511bcd](https://github.com/headroomlabs-ai/headroom/commit/0511bcd33186f57d76e508bbec388bb4256cfc68))
* **router:** ignore shell operators inside quoted arguments in read detection ([#4646](https://github.com/headroomlabs-ai/headroom/issues/4646)) ([8cdce17](https://github.com/headroomlabs-ai/headroom/commit/8cdce172ea5b70f9ed5300f089c11f4ca23b8c66))
* **scripts:** skip ci-precheck in the pre-push hook when a push only deletes refs ([#4702](https://github.com/headroomlabs-ai/headroom/issues/4702)) ([cbcf8d8](https://github.com/headroomlabs-ai/headroom/commit/cbcf8d8d9b3c43a93276b46db569fab185ed949d))
* **sdk:** keep Vercel AI SDK tool-result output kinds through compression ([#4670](https://github.com/headroomlabs-ai/headroom/issues/4670)) ([ce42754](https://github.com/headroomlabs-ai/headroom/commit/ce4275491299231bc9d2907833f72f72ea22b8a9))
* **search_compressor:** keep kept rows byte-for-byte and in input order ([#3982](https://github.com/headroomlabs-ai/headroom/issues/3982)) ([a538740](https://github.com/headroomlabs-ai/headroom/commit/a538740ee40a80642bb1092d179171828260696c))
* **smart-crusher:** keep mixed-array dict rows and exact drop count with factor_out_constants ([#4692](https://github.com/headroomlabs-ai/headroom/issues/4692)) ([ced2685](https://github.com/headroomlabs-ai/headroom/commit/ced26852c6d103991e05c5eec1f13103e5ce2755))
* **smart-crusher:** keep the row the question names ([#4713](https://github.com/headroomlabs-ai/headroom/issues/4713)) ([e6e2ebb](https://github.com/headroomlabs-ai/headroom/commit/e6e2ebb6782119e46400a66cef33bb8eb9295484))
* **storage:** return the latest snapshot from JSONLStorage.get ([#4675](https://github.com/headroomlabs-ai/headroom/issues/4675)) ([b25c45b](https://github.com/headroomlabs-ai/headroom/commit/b25c45b08f1cc5ed8fe49671e356711b89800ac1))
* **tabular:** split fixed-width rows on column boundaries, not on double spaces ([#4541](https://github.com/headroomlabs-ai/headroom/issues/4541)) ([b80245e](https://github.com/headroomlabs-ai/headroom/commit/b80245ea73e452f2c14de7a5cd8520f7e7d92c61))
* **tag-protector:** do not treat a slash in an unquoted attribute as self-closing ([#4681](https://github.com/headroomlabs-ai/headroom/issues/4681)) ([d5644cb](https://github.com/headroomlabs-ai/headroom/commit/d5644cbacab79607fe8864d007810aa06c5c68ea))
* **tag-protector:** keep the enclosing tag open after a nested close in marker mode ([#4682](https://github.com/headroomlabs-ai/headroom/issues/4682)) ([385d487](https://github.com/headroomlabs-ai/headroom/commit/385d487f41abd029fb4e2f8346c0cc30dc546bc4))
* **telemetry:** keep install ID stateless ([#3542](https://github.com/headroomlabs-ai/headroom/issues/3542)) ([27bba79](https://github.com/headroomlabs-ai/headroom/commit/27bba79ff2d1800e390ed20820adff971e99ce08))
* **tokenizers:** resolve chatgpt-4o-* aliases to o200k_base ([#4672](https://github.com/headroomlabs-ai/headroom/issues/4672)) ([9648d2d](https://github.com/headroomlabs-ai/headroom/commit/9648d2d867c99eb7e91f81754c5e2877be56feac))
* **tokenizers:** unwrap BatchEncoding in HuggingFaceTokenizer.count_messages ([#2447](https://github.com/headroomlabs-ai/headroom/issues/2447)) ([9eed58f](https://github.com/headroomlabs-ai/headroom/commit/9eed58f84cacc30116c6b6b29cb99eade57e0edf))
* **vertex:** explain Vertex failures in-band, correct the model/region matrix ([#2640](https://github.com/headroomlabs-ai/headroom/issues/2640)) ([0ddaa56](https://github.com/headroomlabs-ai/headroom/commit/0ddaa56c21cdc01c4774391fdcc69e987ecc4e5c))
* **wrap:** route Claude Code's Bedrock mode through Headroom ([#4316](https://github.com/headroomlabs-ai/headroom/issues/4316)) ([aa2093b](https://github.com/headroomlabs-ai/headroom/commit/aa2093b4a08ca1f1bb9c8fb92fe0fc85d9ffe936))


### Dependencies

* bump rusqlite from 0.40.2 to 0.41.1 ([#4658](https://github.com/headroomlabs-ai/headroom/issues/4658)) ([74b7ac2](https://github.com/headroomlabs-ai/headroom/commit/74b7ac23861944f1411d30c5394043ec0505b334))
* bump the cargo-minor-patch group with 3 updates ([#4657](https://github.com/headroomlabs-ai/headroom/issues/4657)) ([c01cf07](https://github.com/headroomlabs-ai/headroom/commit/c01cf07d943d816cfd9d97e6838ed4e38f1ff9a4))
* bump the npm-minor-patch group across 1 directory with 2 updates ([#4650](https://github.com/headroomlabs-ai/headroom/issues/4650)) ([def4ef1](https://github.com/headroomlabs-ai/headroom/commit/def4ef10099514d09188326852138a8b20c26237))
* update click requirement from &gt;=8.3.3 to &gt;=8.5.0 ([#4655](https://github.com/headroomlabs-ai/headroom/issues/4655)) ([ea59ac3](https://github.com/headroomlabs-ai/headroom/commit/ea59ac3eef3a3dc02076e9fe4bb30d572ca9c1a9))
* update sqlite-vec requirement from &gt;=0.1.6 to &gt;=0.1.9 ([#4654](https://github.com/headroomlabs-ai/headroom/issues/4654)) ([de1a1e0](https://github.com/headroomlabs-ai/headroom/commit/de1a1e0f478d1eb9257dd8dd0d4ac87c9e6fc639))
* update tree-sitter requirement from &lt;0.27,&gt;=0.25.2 to &gt;=0.26.0,&lt;0.27 ([#4656](https://github.com/headroomlabs-ai/headroom/issues/4656)) ([910588e](https://github.com/headroomlabs-ai/headroom/commit/910588e6b15ab54c4099d03703e5fa20c8abb757))

<!-- headroom-teams-footer -->

---

**Want more savings?** Headroom Enterprise saves more for teams and enterprises. Talk to us at [hello@headroomlabs.ai](mailto:hello@headroomlabs.ai) or [headroomlabs.ai](https://headroomlabs.ai).

---

> **Source** [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · `v0.44.0` · 2026-11-10 · [upstream release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.44.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
