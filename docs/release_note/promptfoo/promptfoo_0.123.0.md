---
title: "promptfoo 0.123.0"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.123.0"
version: "0.123.0"
published: "2026-09-10"
type: "minor"
lang: "en"
summary: "providers: default GPT-5.6+ to Responses (#10803)"
---

# promptfoo 0.123.0

## [0.123.0](https://github.com/promptfoo/promptfoo/compare/0.122.2...0.123.0) (2026-09-10)


### ⚠ BREAKING CHANGES

* **providers:** default GPT-5.6+ to Responses ([#10803](https://github.com/promptfoo/promptfoo/issues/10803))

### Features

* **assertions:** grade native audio with llm-rubric ([#10814](https://github.com/promptfoo/promptfoo/issues/10814)) ([39c4fb5](https://github.com/promptfoo/promptfoo/commit/39c4fb55516a405bbb04f6e300a09e6168006c08))
* **providers:** add Claude Fable and Mythos 5.1 ([#10601](https://github.com/promptfoo/promptfoo/issues/10601)) ([ac6ba5b](https://github.com/promptfoo/promptfoo/commit/ac6ba5b7bfacf9da728219ebf2c9d813f0832240))
* **providers:** add GPT-6 Astra support ([#10625](https://github.com/promptfoo/promptfoo/issues/10625)) ([cd4c68b](https://github.com/promptfoo/promptfoo/commit/cd4c68bd5a143b42b507ebc7b8cce1a0d9511539))
* **providers:** add grok-4.6, grok-imagine-image-2.0, and grok-imagine-video-1.5 ([#10587](https://github.com/promptfoo/promptfoo/issues/10587)) ([48a71cd](https://github.com/promptfoo/promptfoo/commit/48a71cd0163b01ba8efb2954eb0165dd810a6c6e))
* **providers:** default GPT-5.6+ to Responses ([#10803](https://github.com/promptfoo/promptfoo/issues/10803)) ([b051efd](https://github.com/promptfoo/promptfoo/commit/b051efdc6a9d2eaa0c6a209d4878484db8e1ead7))
* **providers:** expose MCP tool calls in response metadata ([#10516](https://github.com/promptfoo/promptfoo/issues/10516)) ([891d870](https://github.com/promptfoo/promptfoo/commit/891d870990b8a3f51bfd5f2db44669ac82ccb63e))
* **providers:** support Gemini 3.8 Flash ([#10616](https://github.com/promptfoo/promptfoo/issues/10616)) ([b89a25d](https://github.com/promptfoo/promptfoo/commit/b89a25d4dbb15889ffb602927747ebcb24d91efe))
* **providers:** support GPT Image 2.5 generation ([#10812](https://github.com/promptfoo/promptfoo/issues/10812)) ([71346b0](https://github.com/promptfoo/promptfoo/commit/71346b0f8b13f19a86e5c5abc2de65d636349193))
* **providers:** support GPT Transcribe file uploads ([#10813](https://github.com/promptfoo/promptfoo/issues/10813)) ([c85b395](https://github.com/promptfoo/promptfoo/commit/c85b395d9b6b3487a219ea477540024393968a6c))
* **providers:** support Muse Spark 1.3 ([#10617](https://github.com/promptfoo/promptfoo/issues/10617)) ([8e0de03](https://github.com/promptfoo/promptfoo/commit/8e0de03b5934392168f471a192ac7a061f1e2eac))


### Bug Fixes

* **assertions:** parse multiline tool calls and clarify guides ([#10789](https://github.com/promptfoo/promptfoo/issues/10789)) ([5f0324f](https://github.com/promptfoo/promptfoo/commit/5f0324fc4f5b928c21cb7ae800d86988b1cd9f22))
* **assertions:** recognize OpenAI Responses function_call items in tool-call-f1 ([#10665](https://github.com/promptfoo/promptfoo/issues/10665)) ([028282c](https://github.com/promptfoo/promptfoo/commit/028282cc77f84093cf145c73dc2cffbe8ae91deb))
* **claude-agent-sdk:** recognize documented model selectors ([#10741](https://github.com/promptfoo/promptfoo/issues/10741)) ([c7e32f6](https://github.com/promptfoo/promptfoo/commit/c7e32f6d23fb63623bd51c8a4f2d987f303f3804))
* **claude-agent:** preserve per-server env for stdio MCP servers ([#10557](https://github.com/promptfoo/promptfoo/issues/10557)) ([6fd4c41](https://github.com/promptfoo/promptfoo/commit/6fd4c41bcc58c4563ba5794c2543a3aabd848083))
* **cli:** remove retired GitHub example downloads ([#10876](https://github.com/promptfoo/promptfoo/issues/10876)) ([bf09397](https://github.com/promptfoo/promptfoo/commit/bf0939743711ed641eb1f352488387f0c33488b9))
* **cloudflare:** use the versioned Mistral gateway route ([#10734](https://github.com/promptfoo/promptfoo/issues/10734)) ([ea6d6d3](https://github.com/promptfoo/promptfoo/commit/ea6d6d393c255aa0c35207005371fb0927d39ede))
* **config:** avoid stack traces for missing optional configs ([#10523](https://github.com/promptfoo/promptfoo/issues/10523)) ([3d67680](https://github.com/promptfoo/promptfoo/commit/3d676805ca5cf40f5a4e92d65db21836cb7391a3))
* **db:** preserve writes after lock failures and during shutdown ([#9009](https://github.com/promptfoo/promptfoo/issues/9009)) ([130389e](https://github.com/promptfoo/promptfoo/commit/130389e4c08d78d001fe5933534f74904617f8ee))
* **deps:** preserve browser production dependencies ([#10755](https://github.com/promptfoo/promptfoo/issues/10755)) ([0b4ccbe](https://github.com/promptfoo/promptfoo/commit/0b4ccbe4f936e03db4fd90a1bded52ba05403370))
* **deps:** update anthropic packages ([#10571](https://github.com/promptfoo/promptfoo/issues/10571)) ([93f963d](https://github.com/promptfoo/promptfoo/commit/93f963d880831fbe4de6a049afbf88f68301114e))
* **deps:** update anthropic packages ([#10679](https://github.com/promptfoo/promptfoo/issues/10679)) ([152c423](https://github.com/promptfoo/promptfoo/commit/152c4234968cbff8755218d880fae2b47e3b64a6))
* **deps:** update dependency @inquirer/core to v12 ([#10554](https://github.com/promptfoo/promptfoo/issues/10554)) ([90fa399](https://github.com/promptfoo/promptfoo/commit/90fa399b941364363f57288fbf305b6d6aaff7ed))
* **deps:** update dependency ai to ^6.0.264 ([#10585](https://github.com/promptfoo/promptfoo/issues/10585)) ([da073db](https://github.com/promptfoo/promptfoo/commit/da073db4261af95bff25a23f517b1d67b89f132e))
* **deps:** update dependency js-yaml to v5.4.0 ([#10629](https://github.com/promptfoo/promptfoo/issues/10629)) ([58fe7cc](https://github.com/promptfoo/promptfoo/commit/58fe7cce225e0ab8937f170fea27434093accaa2))
* **deps:** update dependency zod to v4.5.4 ([#10788](https://github.com/promptfoo/promptfoo/issues/10788)) ([03b0564](https://github.com/promptfoo/promptfoo/commit/03b0564d1aeb4a500dbbbfe683d22b67974af609))
* **deps:** update Hono to v4.13.5 ([#10815](https://github.com/promptfoo/promptfoo/issues/10815)) ([6a7568d](https://github.com/promptfoo/promptfoo/commit/6a7568ddd99a0b98fe5864703a8f5d7cd15ea61b))
* **deps:** update js-yaml to 5.4.1 ([#10680](https://github.com/promptfoo/promptfoo/issues/10680)) ([bd18712](https://github.com/promptfoo/promptfoo/commit/bd187127654c187d1d06a94bdc4e1118c8faf81b))
* **deps:** update OpenCode SDK to v1.18.21 ([#10565](https://github.com/promptfoo/promptfoo/issues/10565)) ([93b9f8c](https://github.com/promptfoo/promptfoo/commit/93b9f8c04fbbf8265f94c920e7cdea0b73ec4b40))
* **deps:** update webpack to v5.110.3 ([#10863](https://github.com/promptfoo/promptfoo/issues/10863)) ([fbfc5fb](https://github.com/promptfoo/promptfoo/commit/fbfc5fb782f43e61fef3840ca79f0e9d207e6476))
* **eval:** keep the CLI alive while watch mode is watching ([#10562](https://github.com/promptfoo/promptfoo/issues/10562)) ([89d4138](https://github.com/promptfoo/promptfoo/commit/89d41387f5f1b0d9746d7175c23b8c0c9c8cfa52))
* **eval:** watch mode ignored scalar and generator `tests` references ([#10169](https://github.com/promptfoo/promptfoo/issues/10169)) ([71499e3](https://github.com/promptfoo/promptfoo/commit/71499e3ed2c1292df16ab9f77cd11dbcf8f791ee))
* **examples:** honor framework model selection ([#10781](https://github.com/promptfoo/promptfoo/issues/10781)) ([34cfb68](https://github.com/promptfoo/promptfoo/commit/34cfb68489d646eecd5043ada91675703c1575ad))
* **examples:** use selected CrewAI credentials ([#10799](https://github.com/promptfoo/promptfoo/issues/10799)) ([e2cabfa](https://github.com/promptfoo/promptfoo/commit/e2cabfa76923571546c8f8b47737b7103eac446d))
* **go-provider:** support importable packages ([#10540](https://github.com/promptfoo/promptfoo/issues/10540)) ([10deb31](https://github.com/promptfoo/promptfoo/commit/10deb31cc3ac953a28ee88fe43530cfc4d2c7927))
* **google:** route stable Omni through Interactions ([#10737](https://github.com/promptfoo/promptfoo/issues/10737)) ([9ef3c96](https://github.com/promptfoo/promptfoo/commit/9ef3c96d4119c56e80863138c1d11a2a82e2a348))
* guard empty drift stats and clarify provider options ([#10645](https://github.com/promptfoo/promptfoo/issues/10645)) ([bfcd067](https://github.com/promptfoo/promptfoo/commit/bfcd0674689c538df416b7cfac4e762614149fb7))
* harden eval and provider edge cases ([#10576](https://github.com/promptfoo/promptfoo/issues/10576)) ([1adb6e5](https://github.com/promptfoo/promptfoo/commit/1adb6e5e16084f3ebde04b1d2fb340fbdb99cf1f))
* **http:** clear error context when signature fails due to missing private key ([#10586](https://github.com/promptfoo/promptfoo/issues/10586)) ([7abf349](https://github.com/promptfoo/promptfoo/commit/7abf349d897b58efdf860aa5b87e1574dc95d7df))
* **http:** support Windows drive letter and file:// source paths in multipart ([#10566](https://github.com/promptfoo/promptfoo/issues/10566)) ([22468f4](https://github.com/promptfoo/promptfoo/commit/22468f45be80ee1cb40f18bf843c18b96c86aef5))
* **huggingface:** normalize classification and embedding responses ([#10735](https://github.com/promptfoo/promptfoo/issues/10735)) ([d31716d](https://github.com/promptfoo/promptfoo/commit/d31716d04184d036a2f48bab98c6de423f239c49))
* **mcp:** use valid provider model selectors ([#10806](https://github.com/promptfoo/promptfoo/issues/10806)) ([8bcf17d](https://github.com/promptfoo/promptfoo/commit/8bcf17dc91ba9705a7eafaa255904ec4ba4a4401))
* **n8n:** omit request bodies for HEAD webhooks ([#10730](https://github.com/promptfoo/promptfoo/issues/10730)) ([7f897cf](https://github.com/promptfoo/promptfoo/commit/7f897cfcc4b578b7951d3a5a1c33d35cc3f5a7f7))
* **openai:** preserve model routing and historical compatibility ([#10810](https://github.com/promptfoo/promptfoo/issues/10810)) ([460e221](https://github.com/promptfoo/promptfoo/commit/460e221b2c0c39472111137e40d8fadc17abeecb))
* **openclaw:** sign the server challenge timestamp ([#10739](https://github.com/promptfoo/promptfoo/issues/10739)) ([517e181](https://github.com/promptfoo/promptfoo/commit/517e1814785c044a624ecb33ea625db9d0952e5c))
* **providers:** address AI code quality findings ([#10552](https://github.com/promptfoo/promptfoo/issues/10552)) ([9cd1924](https://github.com/promptfoo/promptfoo/commit/9cd19241a0706fcf59dd609167f4218612fc4beb))
* **providers:** align billing rates and zero-token usage ([#10743](https://github.com/promptfoo/promptfoo/issues/10743)) ([0a2852c](https://github.com/promptfoo/promptfoo/commit/0a2852c06dedd00e484bc514b42f97cb03d80851))
* **providers:** align Hyperbolic audio requests and metadata ([#10786](https://github.com/promptfoo/promptfoo/issues/10786)) ([e680c7f](https://github.com/promptfoo/promptfoo/commit/e680c7fcf299ceedda11819e254bd873dbd3d377))
* **providers:** align Vercel generation with AI SDK 6 ([#10728](https://github.com/promptfoo/promptfoo/issues/10728)) ([6514ebc](https://github.com/promptfoo/promptfoo/commit/6514ebcb7419ecbaa3edf4bb65d6113cf34cd2e6))
* **providers:** allow zero-argument MCP commands ([#10647](https://github.com/promptfoo/promptfoo/issues/10647)) ([1d32ab1](https://github.com/promptfoo/promptfoo/commit/1d32ab1c94a22d3731266f751bc23f4c3e58cbdf))
* **providers:** correct Bedrock embeddings and knowledge base requests ([#10751](https://github.com/promptfoo/promptfoo/issues/10751)) ([3f0787b](https://github.com/promptfoo/promptfoo/commit/3f0787bc367cfd93f22acafc6227f77ce2e11375))
* **providers:** correct Databricks serving endpoint requests ([#10747](https://github.com/promptfoo/promptfoo/issues/10747)) ([b0b3874](https://github.com/promptfoo/promptfoo/commit/b0b38742cf021cd22f987ad0207e4080a4fec389))
* **providers:** correct stale Bedrock pricing, regional rates, and Nova cache billing ([#10593](https://github.com/promptfoo/promptfoo/issues/10593)) ([dad89cd](https://github.com/promptfoo/promptfoo/commit/dad89cda85c28425491ddc04d9a7641eecafa5cf))
* **providers:** defer FAL SDK loading until inference ([#10792](https://github.com/promptfoo/promptfoo/issues/10792)) ([3afb563](https://github.com/promptfoo/promptfoo/commit/3afb5634f1f8a513fe5c8d4a50101cfc9f05a419))
* **providers:** drop Claude model ids that resolve nowhere ([#10635](https://github.com/promptfoo/promptfoo/issues/10635)) ([281f8d4](https://github.com/promptfoo/promptfoo/commit/281f8d42984771608baf6e925ca24bb090554027))
* **providers:** finish the GitHub Models retirement ([#10849](https://github.com/promptfoo/promptfoo/issues/10849)) ([b67f9e0](https://github.com/promptfoo/promptfoo/commit/b67f9e02aa62d87980242fd6ed82405575877fd9))
* **providers:** forward Azure request settings ([#10729](https://github.com/promptfoo/promptfoo/issues/10729)) ([685b354](https://github.com/promptfoo/promptfoo/commit/685b3546547a136e73f4649d087e19ae4d930f59))
* **providers:** forward moderation cancellation ([#10804](https://github.com/promptfoo/promptfoo/issues/10804)) ([5a4288e](https://github.com/promptfoo/promptfoo/commit/5a4288e8d4b0b0bd1638b1f11422ae2d01b1a2dd))
* **providers:** handle Vercel stream cancellation ([#10805](https://github.com/promptfoo/promptfoo/issues/10805)) ([753c4e4](https://github.com/promptfoo/promptfoo/commit/753c4e48675557bd221d07a4853bbf1a7921e920))
* **providers:** isolate FAL SDK client configuration ([#10749](https://github.com/promptfoo/promptfoo/issues/10749)) ([e3bbad6](https://github.com/promptfoo/promptfoo/commit/e3bbad609ffe108b6cf5ae42dd10369211c5587c))
* **providers:** isolate SageMaker completion cache ([#10731](https://github.com/promptfoo/promptfoo/issues/10731)) ([8e0a58f](https://github.com/promptfoo/promptfoo/commit/8e0a58f63a56b71952b72d7413815d0985427ac4))
* **providers:** keep SageMaker request and cache settings consistent ([#10808](https://github.com/promptfoo/promptfoo/issues/10808)) ([f81947d](https://github.com/promptfoo/promptfoo/commit/f81947d792ca9480e6648ecfc40d0af23254dc67))
* **providers:** normalize typed Responses messages ([#10600](https://github.com/promptfoo/promptfoo/issues/10600)) ([a966cc5](https://github.com/promptfoo/promptfoo/commit/a966cc5d1fb3701900b2d27b409bc6f685afde5e))
* **providers:** omit unset Bedrock generation settings ([#10774](https://github.com/promptfoo/promptfoo/issues/10774)) ([189c458](https://github.com/promptfoo/promptfoo/commit/189c458d039854d1ecb658049bc608e04730f22b))
* **providers:** preserve Bedrock Reel IDs and clarify serving routes ([#10807](https://github.com/promptfoo/promptfoo/issues/10807)) ([2bc1354](https://github.com/promptfoo/promptfoo/commit/2bc135467284f9f07acbac56c0e731c5cf99e222))
* **providers:** preserve local model parameters ([#10732](https://github.com/promptfoo/promptfoo/issues/10732)) ([c8e606c](https://github.com/promptfoo/promptfoo/commit/c8e606c11e59e8a92992bc2027e89bd84b40ff6d))
* **providers:** preserve MiniMax and Moonshot request overrides ([#10745](https://github.com/promptfoo/promptfoo/issues/10745)) ([01f4d9c](https://github.com/promptfoo/promptfoo/commit/01f4d9cd77f1668362aea630c4d7f0aa7b877daf))
* **providers:** preserve OpenRouter BYOK and cached costs ([#10801](https://github.com/promptfoo/promptfoo/issues/10801)) ([790e768](https://github.com/promptfoo/promptfoo/commit/790e768c7a4962217de1c6b48d6a64d417004fac))
* **providers:** preserve Perplexity usage and search data ([#10809](https://github.com/promptfoo/promptfoo/issues/10809)) ([c105c2c](https://github.com/promptfoo/promptfoo/commit/c105c2c91105c10ce4e543998145c2d8948d06e4))
* **providers:** preserve Replicate creation sharing on cancellation ([#10773](https://github.com/promptfoo/promptfoo/issues/10773)) ([884f2b0](https://github.com/promptfoo/promptfoo/commit/884f2b0dde0febaf2a827c20c9094b6bcf7ed667))
* **providers:** preserve selected credential sources ([#10811](https://github.com/promptfoo/promptfoo/issues/10811)) ([1ca6fe2](https://github.com/promptfoo/promptfoo/commit/1ca6fe2f10cf87e66e68f04d8f8cc891ef93268b))
* **providers:** preserve service connection settings ([#10742](https://github.com/promptfoo/promptfoo/issues/10742)) ([c8aa59d](https://github.com/promptfoo/promptfoo/commit/c8aa59dabff415ac24dd4a4d9f9247a662f3fee3))
* **providers:** preserve WatsonX caller cancellation ([#10861](https://github.com/promptfoo/promptfoo/issues/10861)) ([3113c6f](https://github.com/promptfoo/promptfoo/commit/3113c6fa9ec0f90625b43731e64782bd8e101b90))
* **providers:** prevent duplicate Realtime prompts and correct transcription metrics ([#10868](https://github.com/promptfoo/promptfoo/issues/10868)) ([7e4e706](https://github.com/promptfoo/promptfoo/commit/7e4e706641e3accde074ce7446131aadafa9c02c))
* **providers:** price auto-quality xai image edits ([#10613](https://github.com/promptfoo/promptfoo/issues/10613)) ([8e06f14](https://github.com/promptfoo/promptfoo/commit/8e06f149edbc3625721d963a182b151611b66521))
* **providers:** raise equal Claude thinking token budgets ([#10498](https://github.com/promptfoo/promptfoo/issues/10498)) ([ae3615a](https://github.com/promptfoo/promptfoo/commit/ae3615a9a09c8eb008a97b75b3e037f96889bd9e))
* **providers:** recognize Daybreak reasoning aliases ([#10723](https://github.com/promptfoo/promptfoo/issues/10723)) ([b9ce5cc](https://github.com/promptfoo/promptfoo/commit/b9ce5ccbead36c73f9a289aa0ffce4b766d85a57))
* **providers:** recover gateway model discovery ([#10778](https://github.com/promptfoo/promptfoo/issues/10778)) ([ff69bd3](https://github.com/promptfoo/promptfoo/commit/ff69bd38b7d7c864a4a4bdfaa74d98fb109a0c9b))
* **providers:** remove retired OpenAI models ([#10636](https://github.com/promptfoo/promptfoo/issues/10636)) ([3f4280b](https://github.com/promptfoo/promptfoo/commit/3f4280b22eca11ea991d01d82aa50d3d5390971f))
* **providers:** retain failed security scan costs ([#10521](https://github.com/promptfoo/promptfoo/issues/10521)) ([04e36f3](https://github.com/promptfoo/promptfoo/commit/04e36f3b139be643a72d6b08649fe14527b0a4d0))
* **providers:** retire GitHub Models inference ([#10746](https://github.com/promptfoo/promptfoo/issues/10746)) ([cf7adb7](https://github.com/promptfoo/promptfoo/commit/cf7adb7da35766942941f4ee7edc137cb52a6a9b))
* **providers:** route Grok 4.6 inference profiles on Bedrock ([#10589](https://github.com/promptfoo/promptfoo/issues/10589)) ([48bad74](https://github.com/promptfoo/promptfoo/commit/48bad74d5ee616889acff49a81a511692e581570))
* **providers:** scope Hyperbolic legacy audio fields ([#10796](https://github.com/promptfoo/promptfoo/issues/10796)) ([819a3d9](https://github.com/promptfoo/promptfoo/commit/819a3d91da2b6b441c680748d07bcbd2d7f17080))
* **providers:** scope WatsonX pricing metadata ([#10802](https://github.com/promptfoo/promptfoo/issues/10802)) ([9cc4a36](https://github.com/promptfoo/promptfoo/commit/9cc4a362e37af0b20a64eb7aef93c60aa3f8026b))
* **providers:** select TrueFoundry tasks explicitly ([#10790](https://github.com/promptfoo/promptfoo/issues/10790)) ([83b12b9](https://github.com/promptfoo/promptfoo/commit/83b12b9224fc375df667605e740de56db0144ae3))
* **providers:** separate Azure chat and embedding defaults ([#10784](https://github.com/promptfoo/promptfoo/issues/10784)) ([79454fa](https://github.com/promptfoo/promptfoo/commit/79454fadd6bc467d7ee6375599d3cbfea2e430aa))
* **providers:** separate connection and model settings ([#10681](https://github.com/promptfoo/promptfoo/issues/10681)) ([35f3434](https://github.com/promptfoo/promptfoo/commit/35f343479aae4c68071f475eb3eccd2cadd3ea58))
* **providers:** snapshot SageMaker request cache keys ([#10798](https://github.com/promptfoo/promptfoo/issues/10798)) ([3b40040](https://github.com/promptfoo/promptfoo/commit/3b40040c9364550bc79ea77a03c61796d3bd040a))
* **providers:** stop forwarding portkey provider config as HTTP headers ([#10536](https://github.com/promptfoo/promptfoo/issues/10536)) ([3f94284](https://github.com/promptfoo/promptfoo/commit/3f942845637918a72111e632952b16daf9fb2066))
* **providers:** support Abliteration Large V2 reasoning ([#10615](https://github.com/promptfoo/promptfoo/issues/10615)) ([51b8f12](https://github.com/promptfoo/promptfoo/commit/51b8f125d14ca28e5aae2d2e1f9696ea49db2a10))
* **providers:** treat Claude Sonnet 5 as thinking-on-by-default ([#10631](https://github.com/promptfoo/promptfoo/issues/10631)) ([5bf2ad1](https://github.com/promptfoo/promptfoo/commit/5bf2ad1ada2780871e1661d78db2f1a46f6d39fb))
* **providers:** unbreak Grok on Azure and multimodal Responses prompts ([#10592](https://github.com/promptfoo/promptfoo/issues/10592)) ([d7ce7ec](https://github.com/promptfoo/promptfoo/commit/d7ce7ec2e68e2ca18c9ee63c65197bf0ed50e5fb))
* **providers:** update OpenAI models and defaults ([#10865](https://github.com/promptfoo/promptfoo/issues/10865)) ([607c820](https://github.com/promptfoo/promptfoo/commit/607c820f68d35b08b48e64130c2e9e6627ddbef2))
* **providers:** use OpenRouter reported costs ([#10777](https://github.com/promptfoo/promptfoo/issues/10777)) ([ef82931](https://github.com/promptfoo/promptfoo/commit/ef829315ee3a86a6e794143140f34199df421905))
* **redteam:** standardize target response attribution ([#10862](https://github.com/promptfoo/promptfoo/issues/10862)) ([01f9e87](https://github.com/promptfoo/promptfoo/commit/01f9e87deac6f53c55ef9aca2aa8d91efd4abd10))
* **replicate:** stop local polling when evaluations abort ([#10740](https://github.com/promptfoo/promptfoo/issues/10740)) ([2cbfcd8](https://github.com/promptfoo/promptfoo/commit/2cbfcd8cc5e5538b38de823b185fd7a0a1b66c49))
* **security:** match env credential names case-insensitively, and stop redacting vendor names ([#10638](https://github.com/promptfoo/promptfoo/issues/10638)) ([e5767f2](https://github.com/promptfoo/promptfoo/commit/e5767f290f8b57d132fe4dbe4629679552d447e7))
* **security:** redact credential-named variables in persisted env maps ([#10628](https://github.com/promptfoo/promptfoo/issues/10628)) ([811158e](https://github.com/promptfoo/promptfoo/commit/811158ee380d0bdcc909ba466f24a6806240b9ed))
* **slack:** preserve scoped auth and returned DM conversations ([#10738](https://github.com/promptfoo/promptfoo/issues/10738)) ([c0aa003](https://github.com/promptfoo/promptfoo/commit/c0aa00334bab8e8b0a9ff5c863486b1d6f8db4d7))

---

> **Source** [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · `0.123.0` · 2026-09-10 · [upstream release](https://github.com/promptfoo/promptfoo/releases/tag/0.123.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
