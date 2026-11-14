---
title: "promptfoo 0.125.0"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.125.0"
version: "0.125.0"
published: "2026-10-23"
type: "minor"
lang: "en"
---

# promptfoo 0.125.0

## [0.125.0](https://github.com/promptfoo/promptfoo/compare/0.124.1...0.125.0) (2026-10-23)


### ⚠ BREAKING CHANGES

* **deps:** make jks-js an optional peer dependency ([#11739](https://github.com/promptfoo/promptfoo/issues/11739))
* **providers:** make Claude Agent and Codex SDKs opt-in ([#11134](https://github.com/promptfoo/promptfoo/issues/11134))

### Features

* add provider-only environment overrides ([#11889](https://github.com/promptfoo/promptfoo/issues/11889)) ([2eed6e1](https://github.com/promptfoo/promptfoo/commit/2eed6e176eb8a07c43eb57de5c2c4d3d621fd9d2))
* **assertions:** add rouge-l and rouge-s assertion types ([#10256](https://github.com/promptfoo/promptfoo/issues/10256)) ([6842fc3](https://github.com/promptfoo/promptfoo/commit/6842fc3932e42d3a0da6feb42f51a1b656b378bf))
* **assertions:** filter trace spans by attributes ([#10648](https://github.com/promptfoo/promptfoo/issues/10648)) ([faf08b4](https://github.com/promptfoo/promptfoo/commit/faf08b45e17675a89b42c016589eae848964bb2c))
* **assertions:** optional Unicode normalization for equals and contains ([#10555](https://github.com/promptfoo/promptfoo/issues/10555)) ([92ae1ec](https://github.com/promptfoo/promptfoo/commit/92ae1ecc6f4332c7198a9caea0f8cfaf0a2d75f2))
* **eval:** add safe mode to disable inline JavaScript execution ([#11382](https://github.com/promptfoo/promptfoo/issues/11382)) ([80a27b6](https://github.com/promptfoo/promptfoo/commit/80a27b663efc77f2d43d85229a9391d8cc3c2524))
* **eval:** disclose cache-hit rows in the eval summary ([#11329](https://github.com/promptfoo/promptfoo/issues/11329)) ([3635a03](https://github.com/promptfoo/promptfoo/commit/3635a03a0cb4b19ec8ba8e713497a11dd8ca3294))
* **eval:** report stability across repeated tests ([#11416](https://github.com/promptfoo/promptfoo/issues/11416)) ([3f7bfa7](https://github.com/promptfoo/promptfoo/commit/3f7bfa7457f1ce1721daf06220278b02f59382d8))
* **examples:** add local Hermeneutic wording assertion ([#10663](https://github.com/promptfoo/promptfoo/issues/10663)) ([636d59e](https://github.com/promptfoo/promptfoo/commit/636d59ed8dc46982a30bbebdfec21049576bda80))
* **providers:** add Daybreak access program config ([#11737](https://github.com/promptfoo/promptfoo/issues/11737)) ([8f873ce](https://github.com/promptfoo/promptfoo/commit/8f873ce2236d53cda1edba9105e3654a4ef4b41a))
* **providers:** add portable OpenAI config schemas ([#11746](https://github.com/promptfoo/promptfoo/issues/11746)) ([3d6cdf2](https://github.com/promptfoo/promptfoo/commit/3d6cdf20755e9058ef8625c5ca31989bfe51e79c))
* **providers:** add templated request metadata for a2a provider ([#10242](https://github.com/promptfoo/promptfoo/issues/10242)) ([f86c893](https://github.com/promptfoo/promptfoo/commit/f86c893c2c18e215f03dfcbcfc361ecb2e0f5243))
* **providers:** support current Gemini media models ([#11581](https://github.com/promptfoo/promptfoo/issues/11581)) ([f511091](https://github.com/promptfoo/promptfoo/commit/f51109165fbe2b5ce826bc6f82b2cf67b668e531))
* **redteam:** add arabic-presentation-forms static encoding strategy ([#11404](https://github.com/promptfoo/promptfoo/issues/11404)) ([ce7adab](https://github.com/promptfoo/promptfoo/commit/ce7adabf6b59ef74dd8093444c0a59c548422387))


### Bug Fixes

* **accounting:** ignore malformed optional token usage ([#10112](https://github.com/promptfoo/promptfoo/issues/10112)) ([4f3b359](https://github.com/promptfoo/promptfoo/commit/4f3b359c426d539c7c197693b22c9ac3c5f04b3f))
* **app:** simplify navigation and refresh the local UI ([#11740](https://github.com/promptfoo/promptfoo/issues/11740)) ([bbe73b5](https://github.com/promptfoo/promptfoo/commit/bbe73b5560879d116e1a33b1932c234d65c441e3))
* **assertions:** honor the not- prefix for tool-call validity assertions ([#11488](https://github.com/promptfoo/promptfoo/issues/11488)) ([f5b1d39](https://github.com/promptfoo/promptfoo/commit/f5b1d399dcfabcd0519e9dd31ff71c6de37b9c9c))
* **assertions:** isolate cached answer relevance samples ([#11628](https://github.com/promptfoo/promptfoo/issues/11628)) ([a98f031](https://github.com/promptfoo/promptfoo/commit/a98f0313697861ab28a781ba7cc1f1ecae49f275))
* **assertions:** match actual required XML elements ([#11669](https://github.com/promptfoo/promptfoo/issues/11669)) ([6c3ffc5](https://github.com/promptfoo/promptfoo/commit/6c3ffc571102d0c7e3bfbc5f37cb98b597b8398b))
* **assertions:** preserve custom reason in not-javascript GradingResult inversion ([#10880](https://github.com/promptfoo/promptfoo/issues/10880)) ([62cbfee](https://github.com/promptfoo/promptfoo/commit/62cbfeec1d83cefaf4a2de9d1faa6daf437080e2))
* **assertions:** reject non-finite similarity calculations ([#11627](https://github.com/promptfoo/promptfoo/issues/11627)) ([895bbe4](https://github.com/promptfoo/promptfoo/commit/895bbe49f0251daa25a4bdccd93865d0681dda63))
* bound telemetry request lifetime ([#11536](https://github.com/promptfoo/promptfoo/issues/11536)) ([04ab6fb](https://github.com/promptfoo/promptfoo/commit/04ab6fb633feeaaa179de46b56627cd7769d74b2))
* **cache:** honor disabled caching across package copies ([#10793](https://github.com/promptfoo/promptfoo/issues/10793)) ([1b256fe](https://github.com/promptfoo/promptfoo/commit/1b256fef739eb94b810db99c51bfa8b22365e0af))
* **ci:** refresh code scan action before OIDC expires ([#11717](https://github.com/promptfoo/promptfoo/issues/11717)) ([7fd37b7](https://github.com/promptfoo/promptfoo/commit/7fd37b78629fb9b50cf403f7deda016bd0175bf4))
* **ci:** secure code-scan action releases ([#10108](https://github.com/promptfoo/promptfoo/issues/10108)) ([b5d6b20](https://github.com/promptfoo/promptfoo/commit/b5d6b20382fcfb6a48c23d05de98c39bc6437fad))
* **cli:** expose MCP errors and remove simulated tests ([#11676](https://github.com/promptfoo/promptfoo/issues/11676)) ([0044799](https://github.com/promptfoo/promptfoo/commit/00447994da41d563d1cc02c7229b07fd7de9b678))
* **code-scan:** explain empty scan results instead of bare "No files to scan" ([#11543](https://github.com/promptfoo/promptfoo/issues/11543)) ([0864873](https://github.com/promptfoo/promptfoo/commit/086487351e4cfc9b6f79adc4baf85d54e0eed78e))
* **config:** remove the default configuration cache ([#11166](https://github.com/promptfoo/promptfoo/issues/11166)) ([90c4a7a](https://github.com/promptfoo/promptfoo/commit/90c4a7a7ddd5755a88fa8f39737ad57dc85c8d77))
* **config:** scope runtime environment defaults ([#11091](https://github.com/promptfoo/promptfoo/issues/11091)) ([fb50526](https://github.com/promptfoo/promptfoo/commit/fb50526deb0478f17f4296665804e016bbc371da))
* correct provider billing, configuration, and JUnit output ([#11060](https://github.com/promptfoo/promptfoo/issues/11060)) ([c09adb3](https://github.com/promptfoo/promptfoo/commit/c09adb3f1f5d8df5d117050657247748b467936a))
* **csv:** parse similar:cosine/dot/euclidean assertion types from CSV ([#11365](https://github.com/promptfoo/promptfoo/issues/11365)) ([eb07d64](https://github.com/promptfoo/promptfoo/commit/eb07d644ad28606407f78defb883240a7ca8072a))
* **dataset:** gracefully extract personas from varied JSON responses during dataset synthesis ([#11293](https://github.com/promptfoo/promptfoo/issues/11293)) ([#11298](https://github.com/promptfoo/promptfoo/issues/11298)) ([2310a94](https://github.com/promptfoo/promptfoo/commit/2310a946dfb9ec6a8ee984c4adb7b935ef76b132))
* **deps:** align Storybook and update Mermaid/KaTeX ([#11914](https://github.com/promptfoo/promptfoo/issues/11914)) ([03844fb](https://github.com/promptfoo/promptfoo/commit/03844fb957487102bd21f7434a229915cee90e02))
* **deps:** hold IBM SDK before redaction regression ([cbebb0e](https://github.com/promptfoo/promptfoo/commit/cbebb0e24bb9769b2c4846f6b1e8156bfcdf2754))
* **deps:** make jks-js an optional peer dependency ([#11739](https://github.com/promptfoo/promptfoo/issues/11739)) ([1c28848](https://github.com/promptfoo/promptfoo/commit/1c28848f61a21719867b81fbd0f105f1aa1e8f1f))
* **deps:** preserve Claude permissions on SDK upgrade ([#11696](https://github.com/promptfoo/promptfoo/issues/11696)) ([80f0a11](https://github.com/promptfoo/promptfoo/commit/80f0a11d6a64a8f96e8005376bf57304d34e8bd3))
* **deps:** raise webpack-dev-server Express minimum to 4.22.3 ([#11865](https://github.com/promptfoo/promptfoo/issues/11865)) ([77c78d7](https://github.com/promptfoo/promptfoo/commit/77c78d7681ee7cff065951abd4bb68e4ee84d2dc))
* **deps:** synchronize Anthropic SDK upgrades ([#11483](https://github.com/promptfoo/promptfoo/issues/11483)) ([be8b169](https://github.com/promptfoo/promptfoo/commit/be8b169f428ec1a28da4465ae6e421f889cf96b2))
* **deps:** synchronize Claude Agent SDK upgrade ([#11553](https://github.com/promptfoo/promptfoo/issues/11553)) ([b4caec3](https://github.com/promptfoo/promptfoo/commit/b4caec3d188b4f780d2a6da8fb5b97acdd996684))
* **deps:** update anthropic packages ([#11860](https://github.com/promptfoo/promptfoo/issues/11860)) ([480893f](https://github.com/promptfoo/promptfoo/commit/480893f9c6f6dd84bbc2fa71ec9fbc2174885aaf))
* **deps:** update anthropic packages ([#11871](https://github.com/promptfoo/promptfoo/issues/11871)) ([fa8886a](https://github.com/promptfoo/promptfoo/commit/fa8886a2d8429f744268352b4d8636f8d8e26816))
* **deps:** update dependency @hono/node-server to v2.1.2 ([#11535](https://github.com/promptfoo/promptfoo/issues/11535)) ([7afa715](https://github.com/promptfoo/promptfoo/commit/7afa715d17c389d5ef9cdd82e0e9508d22835179))
* **deps:** update dependency @hono/node-server to v2.1.3 ([#11551](https://github.com/promptfoo/promptfoo/issues/11551)) ([6177a8b](https://github.com/promptfoo/promptfoo/commit/6177a8bc2fe352a71651caedc4649588a3670fb5))
* **deps:** update dependency @hono/node-server to v2.1.4 ([#11862](https://github.com/promptfoo/promptfoo/issues/11862)) ([0ed9ffd](https://github.com/promptfoo/promptfoo/commit/0ed9ffd67179ab05352b3bc0981afc108d672b6c))
* **deps:** update dependency @hono/node-server to v2.1.5 ([#11951](https://github.com/promptfoo/promptfoo/issues/11951)) ([5657b66](https://github.com/promptfoo/promptfoo/commit/5657b6688d7ba7c0ca09028391efe02fa6220f92))
* **deps:** update dependency @modelcontextprotocol/sdk to ^1.32.1 ([#11778](https://github.com/promptfoo/promptfoo/issues/11778)) ([09ac4d4](https://github.com/promptfoo/promptfoo/commit/09ac4d48a4e5fe5535e3b30b283ca49d29638126))
* **deps:** update dependency js-yaml to v5.4.3 ([#11789](https://github.com/promptfoo/promptfoo/issues/11789)) ([eac66f6](https://github.com/promptfoo/promptfoo/commit/eac66f61f9306082c670f1dd08ed0ad254b62ef0))
* **deps:** update DOMPurify to v3.4.17 ([#11941](https://github.com/promptfoo/promptfoo/issues/11941)) ([ea1df7f](https://github.com/promptfoo/promptfoo/commit/ea1df7f05b71ed7f6237917cdf75105581f70270))
* **deps:** update ip-address to 10.7.3 ([#11691](https://github.com/promptfoo/promptfoo/issues/11691)) ([06ecb0d](https://github.com/promptfoo/promptfoo/commit/06ecb0de7edc3fc79f51a0f242c46756e8ad436e))
* **deps:** update ip-address to 10.7.4 ([#11911](https://github.com/promptfoo/promptfoo/issues/11911)) ([6eb4f17](https://github.com/promptfoo/promptfoo/commit/6eb4f1748c6576fc3a50ecb3e87b791ed4a853e4))
* **deps:** update optional Hono to 4.13.12 ([#11690](https://github.com/promptfoo/promptfoo/issues/11690)) ([ef0a459](https://github.com/promptfoo/promptfoo/commit/ef0a459f205ba096c49208d2d9d663ad0b984765))
* **deps:** update optional OpenCode SDK to 1.18.34 ([#11687](https://github.com/promptfoo/promptfoo/issues/11687)) ([69a4f4a](https://github.com/promptfoo/promptfoo/commit/69a4f4a2eef6e8f1f9abb7b38e3c6035a5651e03))
* **deps:** update protobufjs to 8.8.1 ([#11908](https://github.com/promptfoo/promptfoo/issues/11908)) ([424f09c](https://github.com/promptfoo/promptfoo/commit/424f09c8e2c48507f340c4db630453ce9f7a9b56))
* **deps:** update Zod to 4.6.6 ([#11912](https://github.com/promptfoo/promptfoo/issues/11912)) ([15bcb0d](https://github.com/promptfoo/promptfoo/commit/15bcb0d2eaba847a0fd08b5df996fff69133578b))
* **deps:** update Zod to v4.6.7 ([#11942](https://github.com/promptfoo/promptfoo/issues/11942)) ([da1d402](https://github.com/promptfoo/promptfoo/commit/da1d40296e00ae42d5675326ee630875a093ad0d))
* **docker:** detect pip-installed ModelAudit in the image ([#11677](https://github.com/promptfoo/promptfoo/issues/11677)) ([16c7151](https://github.com/promptfoo/promptfoo/commit/16c7151b6c88f357de5259fd0870fb2dff50911a))
* **docker:** refresh Alpine packages in CI builds ([#11694](https://github.com/promptfoo/promptfoo/issues/11694)) ([a9ec196](https://github.com/promptfoo/promptfoo/commit/a9ec196c750fce17fa50398255659ad576aa7a2a))
* **eval:** allow empty dynamic variable values ([#10551](https://github.com/promptfoo/promptfoo/issues/10551)) ([244b7a2](https://github.com/promptfoo/promptfoo/commit/244b7a296930cb9fccb500d59802323fe18f4c08))
* **eval:** count cached graders in repeat stability ([#11584](https://github.com/promptfoo/promptfoo/issues/11584)) ([2a461ff](https://github.com/promptfoo/promptfoo/commit/2a461ff1c4d21fa9dd3855eca6feee54fbdd3d37))
* **eval:** honor cache setting from a config passed with -c ([#11327](https://github.com/promptfoo/promptfoo/issues/11327)) ([579043a](https://github.com/promptfoo/promptfoo/commit/579043a7fa9687f3ddbe103b6af9386456a75983))
* **eval:** insert nested var values literally when they contain $ patterns ([#11366](https://github.com/promptfoo/promptfoo/issues/11366)) ([af6fa65](https://github.com/promptfoo/promptfoo/commit/af6fa65a65b2d9c1283b94ee6191e9911bd88969))
* **eval:** keep shared providers alive across evaluations ([#11020](https://github.com/promptfoo/promptfoo/issues/11020)) ([7d11ea2](https://github.com/promptfoo/promptfoo/commit/7d11ea21643e588fe4e601efbeb3d8f055f8edaa))
* **eval:** preserve row metrics and harden sanitization ([#10889](https://github.com/promptfoo/promptfoo/issues/10889)) ([76dd354](https://github.com/promptfoo/promptfoo/commit/76dd35430a5ba621060b3903dd7235813b346432))
* **eval:** propagate grading cancellation through embedding providers ([#11017](https://github.com/promptfoo/promptfoo/issues/11017)) ([f29d43e](https://github.com/promptfoo/promptfoo/commit/f29d43e2191a7e55094970cf417b45817eced442))
* **examples:** require patched Pydantic AI minimum ([#11484](https://github.com/promptfoo/promptfoo/issues/11484)) ([2a54f11](https://github.com/promptfoo/promptfoo/commit/2a54f119d9a19ecfe895f3e8d6f81f9e71a3218b))
* **generation:** handle unexpected response shapes in dataset and assertion synthesis ([#11302](https://github.com/promptfoo/promptfoo/issues/11302)) ([4b6a417](https://github.com/promptfoo/promptfoo/commit/4b6a41752c4bef675dafc519c9d5e174e1ba4f28))
* isolate evaluation state and schema loading ([#11626](https://github.com/promptfoo/promptfoo/issues/11626)) ([2e347de](https://github.com/promptfoo/promptfoo/commit/2e347de5656aeb340cf1effc68e4c8236ad1c480))
* **matchers:** fail closed when llm-rubric grader response omits its verdict ([#10611](https://github.com/promptfoo/promptfoo/issues/10611)) ([37cfe71](https://github.com/promptfoo/promptfoo/commit/37cfe7146f7abe770867659ad7b01ff57b723033))
* preserve ordered JSON keys and verify meta history ([#11476](https://github.com/promptfoo/promptfoo/issues/11476)) ([0bef225](https://github.com/promptfoo/promptfoo/commit/0bef225c24362df0e735910724098750aca6fd6c))
* preserve per-provider prompt filters through loading and replay ([#11443](https://github.com/promptfoo/promptfoo/issues/11443)) ([ddf052a](https://github.com/promptfoo/promptfoo/commit/ddf052ad22af9d9e19a4ad3135d5b81b43eebe0f))
* preserve prompt metadata and provider controls ([#11260](https://github.com/promptfoo/promptfoo/issues/11260)) ([14178fb](https://github.com/promptfoo/promptfoo/commit/14178fb20c38cf487d285b63ec894b1571a45338))
* **prompts:** accept JSON and JSONL prompt files with a UTF-8 BOM ([#11473](https://github.com/promptfoo/promptfoo/issues/11473)) ([8014282](https://github.com/promptfoo/promptfoo/commit/801428268b5e421b2f6994332f6a06f86b27bb1f))
* **providers:** align Azure Responses service tier ([#10149](https://github.com/promptfoo/promptfoo/issues/10149)) ([fcfd526](https://github.com/promptfoo/promptfoo/commit/fcfd526dd411d32ec0782883e475c2c21747fa04))
* **providers:** align MCP initialization and cleanup ([#10676](https://github.com/promptfoo/promptfoo/issues/10676)) ([94356d0](https://github.com/promptfoo/promptfoo/commit/94356d0e9e3d64d2f57dd97fa4971c3afe787a0e))
* **providers:** clean up custom Codex version probes ([#11588](https://github.com/promptfoo/promptfoo/issues/11588)) ([0b6a9d2](https://github.com/promptfoo/promptfoo/commit/0b6a9d26e35285a6ceb73b04410d3c1962b8f390))
* **providers:** constrain MCP retries and repair OAuth discovery ([#10967](https://github.com/promptfoo/promptfoo/issues/10967)) ([1da4637](https://github.com/promptfoo/promptfoo/commit/1da4637ee10ab9cceb98ce377385b5c35e44182e))
* **providers:** decode base64 OpenAI embeddings ([#11383](https://github.com/promptfoo/promptfoo/issues/11383)) ([e4e3388](https://github.com/promptfoo/promptfoo/commit/e4e33887046ebda2138f79e115028f4a6e1ce26a))
* **providers:** harden malformed completion responses ([#9872](https://github.com/promptfoo/promptfoo/issues/9872)) ([60da518](https://github.com/promptfoo/promptfoo/commit/60da51862a809051c6352bb60a048b588f0c5089))
* **providers:** honor scoped environment overrides ([#11094](https://github.com/promptfoo/promptfoo/issues/11094)) ([763b437](https://github.com/promptfoo/promptfoo/commit/763b437952574fee35e91255f0c13508801ba1ad))
* **providers:** honor scoped Envoy gateway URLs ([#10859](https://github.com/promptfoo/promptfoo/issues/10859)) ([e4347d3](https://github.com/promptfoo/promptfoo/commit/e4347d3d0d50b706d9a079d0d96bd1cc5f1c0695))
* **providers:** preflight Codex SDK compatibility ([#9937](https://github.com/promptfoo/promptfoo/issues/9937)) ([c8f2ff2](https://github.com/promptfoo/promptfoo/commit/c8f2ff24cf4f17eb7482a5176ad1e5085b42775e))
* **providers:** preserve active WebSocket streams and retry stalls ([#10305](https://github.com/promptfoo/promptfoo/issues/10305)) ([f7ddd45](https://github.com/promptfoo/promptfoo/commit/f7ddd452c69f222dfeaec9ec2cc1eb849229a969))
* **providers:** preserve cancellation, quota accounting, and evaluation deadlines ([#10860](https://github.com/promptfoo/promptfoo/issues/10860)) ([00d6ce4](https://github.com/promptfoo/promptfoo/commit/00d6ce47021aec0644faa7e15f77e54e4c14be06))
* **providers:** preserve prompts in raw HTTP request URLs ([#11438](https://github.com/promptfoo/promptfoo/issues/11438)) ([1f304f9](https://github.com/promptfoo/promptfoo/commit/1f304f9ef2f91e954d1c8cdb6448d3a88e805f0c))
* **providers:** preserve remote provider errors ([#11867](https://github.com/promptfoo/promptfoo/issues/11867)) ([af8f09a](https://github.com/promptfoo/promptfoo/commit/af8f09a6fa7fe4160f70346d245f1b8d4df4fda5))
* **providers:** reject invalid OpenAI Agents retry policies ([#11679](https://github.com/promptfoo/promptfoo/issues/11679)) ([7885ca6](https://github.com/promptfoo/promptfoo/commit/7885ca6f92a7a5ca7a685d6cd973cd110e1ee2ab))
* **providers:** retain MCP paths across evaluations ([#11569](https://github.com/promptfoo/promptfoo/issues/11569)) ([e4a1b17](https://github.com/promptfoo/promptfoo/commit/e4a1b173131dd00e91f5b021583f641defb2f655))
* **providers:** retain supported scoped environment settings ([#10744](https://github.com/promptfoo/promptfoo/issues/10744)) ([75c4ac6](https://github.com/promptfoo/promptfoo/commit/75c4ac6f5b00f0b0293f1b1a61fe15201f531e69))
* **providers:** return a clean error on empty choices in localai and OpenAI completions ([#10437](https://github.com/promptfoo/promptfoo/issues/10437)) ([81cd1c1](https://github.com/promptfoo/promptfoo/commit/81cd1c111154caf1d687a8c789aecee51d2208ae))
* **providers:** share cache bypass and replay metadata ([#10687](https://github.com/promptfoo/promptfoo/issues/10687)) ([e7eb4a7](https://github.com/promptfoo/promptfoo/commit/e7eb4a7b861ab9537a68a0bb6ef73c36a0a740af))
* **providers:** update Google embeddings and catalog ([#11583](https://github.com/promptfoo/promptfoo/issues/11583)) ([7c11c1e](https://github.com/promptfoo/promptfoo/commit/7c11c1e6236f6d713254b445cf864669d9d1a83f))
* **python:** fail requests when workers crash or hang ([#10929](https://github.com/promptfoo/promptfoo/issues/10929)) ([ad5eaec](https://github.com/promptfoo/promptfoo/commit/ad5eaec9cf591902f9bfbee4618663ec119480d3))
* **redteam:** correct generated provider targets ([#10857](https://github.com/promptfoo/promptfoo/issues/10857)) ([20e221a](https://github.com/promptfoo/promptfoo/commit/20e221a64456e7f54a1c5ffa0cc0d34e01ff2a2e))
* **redteam:** do not invent an SSRF severity when the grader failed ([#11300](https://github.com/promptfoo/promptfoo/issues/11300)) ([33be2e3](https://github.com/promptfoo/promptfoo/commit/33be2e3f59ac3b5b90772732cd3e98827a212033))
* **redteam:** honor explicit redteamProvider in custom strategy ([#10978](https://github.com/promptfoo/promptfoo/issues/10978)) ([2603c54](https://github.com/promptfoo/promptfoo/commit/2603c54126338b737af6b6971ef270cdd67309ea))
* **redteam:** keep $ sequences literal when datamarking an injection ([#11381](https://github.com/promptfoo/promptfoo/issues/11381)) ([667ebe3](https://github.com/promptfoo/promptfoo/commit/667ebe3e39177cec13405aa948501f01606e478a))
* **redteam:** normalize generation error callbacks ([#11591](https://github.com/promptfoo/promptfoo/issues/11591)) ([ff83c4f](https://github.com/promptfoo/promptfoo/commit/ff83c4f0f76c08d5b73e5de2c79dee49ee8ccf1c))
* **redteam:** preserve attack prompts in jailbreak templates ([#11437](https://github.com/promptfoo/promptfoo/issues/11437)) ([39226cc](https://github.com/promptfoo/promptfoo/commit/39226cc462ded45cd8281d1139e9dab26976a618))
* **redteam:** preserve grader errors in iterative attacks ([#11301](https://github.com/promptfoo/promptfoo/issues/11301)) ([1d1477e](https://github.com/promptfoo/promptfoo/commit/1d1477eddca7cc237c734e5ec9062593c24ef1bb))
* **redteam:** preserve setup plugin options and workload counts ([#11218](https://github.com/promptfoo/promptfoo/issues/11218)) ([6ae0024](https://github.com/promptfoo/promptfoo/commit/6ae00244df143f39dfcbd8ed59ac8790c7a62aa0))
* **redteam:** use FIPS-compatible config fingerprints ([#11070](https://github.com/promptfoo/promptfoo/issues/11070)) ([ebb4948](https://github.com/promptfoo/promptfoo/commit/ebb4948489b97e06c7215b651cbb7e0138ac53bf))
* **redteam:** validate web page tracking identifiers ([#11522](https://github.com/promptfoo/promptfoo/issues/11522)) ([46102b7](https://github.com/promptfoo/promptfoo/commit/46102b7df66ef8c96ec892f1ad59a66b5110d7ea))
* remove stale MCP evaluation summary cache ([#11190](https://github.com/promptfoo/promptfoo/issues/11190)) ([58ca5a6](https://github.com/promptfoo/promptfoo/commit/58ca5a6330348a9338e48237f5b63355b29269a2))
* **scheduler:** require 429 to be a standalone token ([#11369](https://github.com/promptfoo/promptfoo/issues/11369)) ([40ff7a5](https://github.com/promptfoo/promptfoo/commit/40ff7a5a04f8c56b3c8ff819009709fd86c38142))
* **util:** ignore braces inside strings when extracting JSON objects ([#10268](https://github.com/promptfoo/promptfoo/issues/10268)) ([cf63b47](https://github.com/promptfoo/promptfoo/commit/cf63b472e817412fc269a384c02a72caec2ee19a))
* **webui:** redirect stale dashboard URLs to eval ([#11477](https://github.com/promptfoo/promptfoo/issues/11477)) ([a6922a1](https://github.com/promptfoo/promptfoo/commit/a6922a195440aa222b03dc13112b9271617dc921))


### Performance Improvements

* **providers:** make Claude Agent and Codex SDKs opt-in ([#11134](https://github.com/promptfoo/promptfoo/issues/11134)) ([d46ee50](https://github.com/promptfoo/promptfoo/commit/d46ee504e366be7788df5d389420ff36bb7e03c3))

---

> **Source** [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · `0.125.0` · 2026-10-23 · [upstream release](https://github.com/promptfoo/promptfoo/releases/tag/0.125.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
