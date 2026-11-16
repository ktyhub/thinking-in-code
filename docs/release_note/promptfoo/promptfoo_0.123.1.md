---
title: "promptfoo 0.123.1"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.123.1"
version: "0.123.1"
published: "2026-09-18"
type: "patch"
lang: "en"
summary: "bedrock: refresh auth across HTTP adapters (#10123) (9d3f063) · providers: add Gemini 3.8 and Vertex Live (#10956) (1417f22) · providers: add GPT-Live voice sessions (#10891) (316a334)"
---

# promptfoo 0.123.1

## [0.123.1](https://github.com/promptfoo/promptfoo/compare/0.123.0...0.123.1) (2026-09-18)


### Features

* **bedrock:** refresh auth across HTTP adapters ([#10123](https://github.com/promptfoo/promptfoo/issues/10123)) ([9d3f063](https://github.com/promptfoo/promptfoo/commit/9d3f063815568afc77786966e1096aec01e53177))
* **providers:** add Gemini 3.8 and Vertex Live ([#10956](https://github.com/promptfoo/promptfoo/issues/10956)) ([1417f22](https://github.com/promptfoo/promptfoo/commit/1417f22b60f1268bb4bf8ead4df271853be6c512))
* **providers:** add GPT-Live voice sessions ([#10891](https://github.com/promptfoo/promptfoo/issues/10891)) ([316a334](https://github.com/promptfoo/promptfoo/commit/316a3341fe69c59c55bc835964ab588d27b844a3))
* **providers:** add OpenAI Agents API ([#10892](https://github.com/promptfoo/promptfoo/issues/10892)) ([ad3bee3](https://github.com/promptfoo/promptfoo/commit/ad3bee3299e3a9864ef6d47482298b2e7f1ceb37))
* **providers:** add portable HTTP config schemas ([#10968](https://github.com/promptfoo/promptfoo/issues/10968)) ([fcd0604](https://github.com/promptfoo/promptfoo/commit/fcd06045caab8ea338d6eab4655d07e656ff883f))
* **providers:** add portable MCP config schemas ([#10965](https://github.com/promptfoo/promptfoo/issues/10965)) ([f5ccb3c](https://github.com/promptfoo/promptfoo/commit/f5ccb3c8e8bb14a254bc95073b174739485ac054))
* **providers:** support Ollama 0.34 features and refresh model docs ([#10964](https://github.com/promptfoo/promptfoo/issues/10964)) ([ac01a4f](https://github.com/promptfoo/promptfoo/commit/ac01a4fe9f8cb265ff8dcaebefcb3854bb5fa065))
* **providers:** surface Ollama thinking output and finish reason ([#10954](https://github.com/promptfoo/promptfoo/issues/10954)) ([27d4c22](https://github.com/promptfoo/promptfoo/commit/27d4c22834272e278fa5cbcf3a9bf638d82f7622))
* **providers:** update Gemini tools and media support ([#10172](https://github.com/promptfoo/promptfoo/issues/10172)) ([627bdd0](https://github.com/promptfoo/promptfoo/commit/627bdd0cb70081be0c6c6583448dbf39127a0c70))


### Bug Fixes

* **assertions:** bound embedded tool call parsing ([#10877](https://github.com/promptfoo/promptfoo/issues/10877)) ([78202a3](https://github.com/promptfoo/promptfoo/commit/78202a3a785655ef639658b0c0318daf628da2e5))
* **assertions:** bound tool-call parser state ([#10887](https://github.com/promptfoo/promptfoo/issues/10887)) ([15290b4](https://github.com/promptfoo/promptfoo/commit/15290b4cd14392fbb6b12eb39c73c6663734cc4d))
* **assertions:** default RAG assertion thresholds to 0.5 ([#10202](https://github.com/promptfoo/promptfoo/issues/10202)) ([4831b60](https://github.com/promptfoo/promptfoo/commit/4831b602d0cfdd67aef716df0fa66feb95b6a3da)), closes [#9910](https://github.com/promptfoo/promptfoo/issues/9910) [#9848](https://github.com/promptfoo/promptfoo/issues/9848)
* **assertions:** invert score along with pass for search-rubric ([#10103](https://github.com/promptfoo/promptfoo/issues/10103)) ([26e8f2f](https://github.com/promptfoo/promptfoo/commit/26e8f2f788a1e3725f7e86ba7ceab5b279ad2cb5))
* **assertions:** never invert grader failures on not-classifier and not-search-rubric ([#10904](https://github.com/promptfoo/promptfoo/issues/10904)) ([e049702](https://github.com/promptfoo/promptfoo/commit/e04970224fcca500c6a86d3f7ddafe7d560ebab6))
* **assertions:** reject malformed webhook results ([#10955](https://github.com/promptfoo/promptfoo/issues/10955)) ([fc57736](https://github.com/promptfoo/promptfoo/commit/fc57736863f0a73860ebae67eab5dcc587cfb341))
* **assertions:** reject non-string search rubrics ([#10934](https://github.com/promptfoo/promptfoo/issues/10934)) ([7bbb79e](https://github.com/promptfoo/promptfoo/commit/7bbb79e5806e39af37915578b1145f371d52ac30))
* **auth:** harden custom header requests ([#10524](https://github.com/promptfoo/promptfoo/issues/10524)) ([5325084](https://github.com/promptfoo/promptfoo/commit/5325084139f826160dbeda5a6867d919c3c8746a))
* **cli:** handle large values during result export ([#10884](https://github.com/promptfoo/promptfoo/issues/10884)) ([be798f4](https://github.com/promptfoo/promptfoo/commit/be798f4d30fc04c82c2e59ee1ff4eb6e9c0df1a3))
* **cli:** preserve in-memory results for extensions ([#10885](https://github.com/promptfoo/promptfoo/issues/10885)) ([60483d9](https://github.com/promptfoo/promptfoo/commit/60483d94592c6fd58f5f91f7b9eaa19938e40ee6))
* **code-scan:** extractValidLineRanges off-by-one on trailing newline ([#10107](https://github.com/promptfoo/promptfoo/issues/10107)) ([2cbabdb](https://github.com/promptfoo/promptfoo/commit/2cbabdbeeb7d3f2223878ae21bf7bddd685f204d))
* **config:** preserve discovery in paths containing quotes ([#10549](https://github.com/promptfoo/promptfoo/issues/10549)) ([d9b3927](https://github.com/promptfoo/promptfoo/commit/d9b392750592e1506a2beb4552af9011437aae05))
* **db:** preserve shared blobs after persistence errors ([#10897](https://github.com/promptfoo/promptfoo/issues/10897)) ([3b353fb](https://github.com/promptfoo/promptfoo/commit/3b353fb8a66eba917fea723ca239e50f7d57358b))
* **deps:** update dependency @anthropic-ai/sdk to v0.123.0 ([#10901](https://github.com/promptfoo/promptfoo/issues/10901)) ([14f7c06](https://github.com/promptfoo/promptfoo/commit/14f7c06ccceef47eb4f7e160dcf65ba97ebee8ae))
* **deps:** update dependency @anthropic-ai/sdk to v0.124.0 ([#10940](https://github.com/promptfoo/promptfoo/issues/10940)) ([29a15d1](https://github.com/promptfoo/promptfoo/commit/29a15d1edb256c789d0035ce3f36ad7cf91db6bb))
* **deps:** update engine.io to v6.6.10 ([#10915](https://github.com/promptfoo/promptfoo/issues/10915)) ([e54a968](https://github.com/promptfoo/promptfoo/commit/e54a9686ab2e592b7c07105a2c3f93d33d9c9c6b))
* **deps:** update opentelemetry ([#10886](https://github.com/promptfoo/promptfoo/issues/10886)) ([280bc5e](https://github.com/promptfoo/promptfoo/commit/280bc5ef72c0e79aa6ed160bd7699a74bd0f035d))
* **deps:** update type definitions ([#10924](https://github.com/promptfoo/promptfoo/issues/10924)) ([01c6397](https://github.com/promptfoo/promptfoo/commit/01c6397974fc106ddc4e8592bb36f64680c4b7fb))
* drain database writes and preserve provider options ([#10911](https://github.com/promptfoo/promptfoo/issues/10911)) ([32bfa9e](https://github.com/promptfoo/promptfoo/commit/32bfa9edae56d36f526ab13b6637db8dfb82c73e))
* **eval:** keep concurrent derived metrics consistent ([#10873](https://github.com/promptfoo/promptfoo/issues/10873)) ([2a3a3bd](https://github.com/promptfoo/promptfoo/commit/2a3a3bd973f293ae0f7ccc75257672eecf6067be))
* **eval:** preserve audio grading results and order ([#10822](https://github.com/promptfoo/promptfoo/issues/10822)) ([395d21e](https://github.com/promptfoo/promptfoo/commit/395d21e0a0cc203acd83a2ad7a774cf75b31f40b))
* **eval:** preserve cloud UUID config semantics ([#7732](https://github.com/promptfoo/promptfoo/issues/7732)) ([8544fed](https://github.com/promptfoo/promptfoo/commit/8544feda8b15a04a6b27f401227f461f552a389a))
* **fetch:** decode URL credentials and match Authorization case-insensitively ([#10909](https://github.com/promptfoo/promptfoo/issues/10909)) ([b8aa6ff](https://github.com/promptfoo/promptfoo/commit/b8aa6ff8270720dbfc4ce1ebaf33fe4bffeac801))
* **fetch:** treat credit_balance_exhausted as a hard quota error ([#10881](https://github.com/promptfoo/promptfoo/issues/10881)) ([7f21bb2](https://github.com/promptfoo/promptfoo/commit/7f21bb253bfc901c64b769361f65482552362f6e))
* honor SDK options and load AVIF/TIFF images ([#10902](https://github.com/promptfoo/promptfoo/issues/10902)) ([15bba21](https://github.com/promptfoo/promptfoo/commit/15bba219d294e434d2aeb01dd9ea69c108f8b077))
* **integrations:** honor --env-file and config env for Helicone key and Langfuse base URL ([#10942](https://github.com/promptfoo/promptfoo/issues/10942)) ([8bd9f37](https://github.com/promptfoo/promptfoo/commit/8bd9f3796592c99ef6810b50b1ba092851ed4564))
* **integrations:** read Langfuse env at fetch time ([#10937](https://github.com/promptfoo/promptfoo/issues/10937)) ([033080c](https://github.com/promptfoo/promptfoo/commit/033080c64e42c1a5927a35be12dc5b98424fe25d))
* **integrations:** share Langfuse prompt fetches and surface real SDK load errors ([#10943](https://github.com/promptfoo/promptfoo/issues/10943)) ([379ecd0](https://github.com/promptfoo/promptfoo/commit/379ecd060ba43371d16106a8f0b9b6f473ec34c5))
* **matchers:** tag context-faithfulness grader failures ([#9907](https://github.com/promptfoo/promptfoo/issues/9907)) ([77bc3ba](https://github.com/promptfoo/promptfoo/commit/77bc3badf21138c6faf126ace243461b5b872307))
* **matchers:** tag RAG grader failures so inverse assertions cannot pass ([#10494](https://github.com/promptfoo/promptfoo/issues/10494)) ([b3d21d2](https://github.com/promptfoo/promptfoo/commit/b3d21d200363434a8f0a1a5627f529ee11d95dc9))
* **mcp:** accept fine-tuned model identifiers ([#10847](https://github.com/promptfoo/promptfoo/issues/10847)) ([9442129](https://github.com/promptfoo/promptfoo/commit/94421294af108de3d1d45b06de28579028e035f4))
* **opencode:** capture skill calls from full session history ([#10011](https://github.com/promptfoo/promptfoo/issues/10011)) ([290973d](https://github.com/promptfoo/promptfoo/commit/290973d2f75d0b55561aa1e21345011c54a8265d))
* **prompts:** CSV rows collapse to duplicate labels/IDs when basePrompt.label is set ([#10102](https://github.com/promptfoo/promptfoo/issues/10102)) ([25963c3](https://github.com/promptfoo/promptfoo/commit/25963c3d4e9e45916c74288a979b102e6b6cda22))
* **providers:** align ElevenLabs requests and audio inputs ([#10736](https://github.com/promptfoo/promptfoo/issues/10736)) ([de12341](https://github.com/promptfoo/promptfoo/commit/de123419c769d35ecb304b3a14e498b46d2e082e))
* **providers:** apply normalized Envoy base URL after user config spread ([#10642](https://github.com/promptfoo/promptfoo/issues/10642)) ([1b6e793](https://github.com/promptfoo/promptfoo/commit/1b6e793b07de366c2faeef3d85fa682f5c4d30c3))
* **providers:** clear ElevenLabs request and stream timers ([#10919](https://github.com/promptfoo/promptfoo/issues/10919)) ([23d245b](https://github.com/promptfoo/promptfoo/commit/23d245b0cc8380078d2014b19171a9a18e734eb2))
* **providers:** forward Snowflake provider configuration ([#10878](https://github.com/promptfoo/promptfoo/issues/10878)) ([7d0bacd](https://github.com/promptfoo/promptfoo/commit/7d0bacde37051ff78ae78a2d7a6d27a5c66850f1))
* **providers:** handle billing quotas and retryable throttles ([#10866](https://github.com/promptfoo/promptfoo/issues/10866)) ([16fdeb6](https://github.com/promptfoo/promptfoo/commit/16fdeb6bd626004e58fa2d1d685481cb480ac782))
* **providers:** honor Foundry overrides and bound fetch reads ([#10948](https://github.com/promptfoo/promptfoo/issues/10948)) ([6b153ad](https://github.com/promptfoo/promptfoo/commit/6b153adcbb800ddb0bddc01db2c4d7487628cfeb))
* **providers:** honor Nova Sonic inference configuration ([#10310](https://github.com/promptfoo/promptfoo/issues/10310)) ([aa2abb3](https://github.com/promptfoo/promptfoo/commit/aa2abb340161805bb5413c07d029fd8b773883e7))
* **providers:** honor prompt Gemini tool policy over passthrough ([#10890](https://github.com/promptfoo/promptfoo/issues/10890)) ([2fd7add](https://github.com/promptfoo/promptfoo/commit/2fd7addd8ab3c27464293a83061f0c16cadf0835))
* **providers:** isolate Agents endpoint credentials ([#10951](https://github.com/promptfoo/promptfoo/issues/10951)) ([f385d96](https://github.com/promptfoo/promptfoo/commit/f385d964daf383dcb96ebd095894641acf02d8bb))
* **providers:** migrate Ollama embeddings to /api/embed and honor config ([#10958](https://github.com/promptfoo/promptfoo/issues/10958)) ([6c33d1f](https://github.com/promptfoo/promptfoo/commit/6c33d1f7518daa784602493663c17553e919bffd))
* **providers:** preserve default MCP enablement ([#10661](https://github.com/promptfoo/promptfoo/issues/10661)) ([8a8a08b](https://github.com/promptfoo/promptfoo/commit/8a8a08b32a8cc3532a983cb12f84bc54ff20115d))
* **providers:** preserve HTTP transform errors ([#10454](https://github.com/promptfoo/promptfoo/issues/10454)) ([a7e4ffc](https://github.com/promptfoo/promptfoo/commit/a7e4ffcdbb5352c0e573f4c04134bb75e11acc23))
* **providers:** preserve patterned OpenCode skill history ([#10971](https://github.com/promptfoo/promptfoo/issues/10971)) ([ba0eeb4](https://github.com/promptfoo/promptfoo/commit/ba0eeb4d55b11d9428b2d20594ff15aa30b4b2d4))
* **providers:** preserve streamed Ollama tool calls ([#10946](https://github.com/promptfoo/promptfoo/issues/10946)) ([7867eb2](https://github.com/promptfoo/promptfoo/commit/7867eb24b2635e259e1dc05999e50f775ba7a5e2))
* **providers:** route OpenClaw default agent ([#9046](https://github.com/promptfoo/promptfoo/issues/9046)) ([139267a](https://github.com/promptfoo/promptfoo/commit/139267a1f45b886417bd59a62f25a5729df2421f))
* **providers:** stop clobbering resolved TogetherAI model params ([#10846](https://github.com/promptfoo/promptfoo/issues/10846)) ([783d71f](https://github.com/promptfoo/promptfoo/commit/783d71ff922d16c70d6b3cfadcd61c6fadae8d3f))
* **providers:** stop leaking local config into request bodies ([#10845](https://github.com/promptfoo/promptfoo/issues/10845)) ([329b748](https://github.com/promptfoo/promptfoo/commit/329b748113d64d3b1bf88651de91a1dc036fe1ad))
* **providers:** surface Ollama HTTP errors instead of empty output ([#10953](https://github.com/promptfoo/promptfoo/issues/10953)) ([c66b468](https://github.com/promptfoo/promptfoo/commit/c66b46874ee89c04efa7404a3b8ac45e65f520ab))
* **redteam:** align redteam-ollama example with its README ([#10959](https://github.com/promptfoo/promptfoo/issues/10959)) ([ccb4b5a](https://github.com/promptfoo/promptfoo/commit/ccb4b5a19ea5519ba6e334af39e7ee3fe268ddf3))
* **redteam:** align tool discovery generation and grading ([#10621](https://github.com/promptfoo/promptfoo/issues/10621)) ([d672144](https://github.com/promptfoo/promptfoo/commit/d672144df62d6b031596ef469155a0451438b58f))
* **redteam:** ground agent skill plans in application evidence ([#10903](https://github.com/promptfoo/promptfoo/issues/10903)) ([3c5429b](https://github.com/promptfoo/promptfoo/commit/3c5429b22e8124cdab5552b1b7bf7901b85a5f96))
* **redteam:** keep vulnerabilities when scoring fails ([#10931](https://github.com/promptfoo/promptfoo/issues/10931)) ([37608b6](https://github.com/promptfoo/promptfoo/commit/37608b614c87bba1cf858e4be0bb08693519e661))
* **redteam:** preserve strategy grading context ([#10969](https://github.com/promptfoo/promptfoo/issues/10969)) ([08e91da](https://github.com/promptfoo/promptfoo/commit/08e91da010e102ebbebe47126fb450d34c4008d6))
* **validators:** default session source to client when provider.config is undefined ([#10086](https://github.com/promptfoo/promptfoo/issues/10086)) ([62dbbc0](https://github.com/promptfoo/promptfoo/commit/62dbbc0932fc044a0845817d2fd73ee33807d2ab))
* **webui:** handle malformed login redirects ([#10460](https://github.com/promptfoo/promptfoo/issues/10460)) ([ebb1a6d](https://github.com/promptfoo/promptfoo/commit/ebb1a6d00005cc181ed8a3323f4bdf5b8c499c02))

---

> **Source** [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · `0.123.1` · 2026-09-18 · [upstream release](https://github.com/promptfoo/promptfoo/releases/tag/0.123.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
