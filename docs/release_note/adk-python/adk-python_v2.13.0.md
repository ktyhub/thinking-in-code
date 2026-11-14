---
title: "adk-python v2.13.0"
project: "adk-python"
repo: "google/adk-python"
tag: "v2.13.0"
version: "v2.13.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "This release stabilizes core features while introducing TypeSafe workflow classification, live audio interactions, MongoDB integrations, and execution performance improvements."
---

# adk-python v2.13.0

## [2.13.0](https://github.com/google/adk-python/compare/v2.12.0...v2.13.0) (2026-10-22)


### Highlights

This release stabilizes core features while introducing TypeSafe workflow classification, live audio interactions, MongoDB integrations, and execution performance improvements.

* **Stability**: Access 12 mature experimental features now promoted to stable status. See the [unit guide](https://github.com/google/adk-python/blob/main/docs/guides/features/feature_registry/index.md) for more details. ([ea298d4](https://github.com/google/adk-python/commit/ea298d4bde4477daa6c419d45637f339eec86d58))
* **Classifiers**: Route workflows with TypeSafe's Jev models via the new `TypesafeClassifier` and `ClassifierNode`. Jev returns calibrated probabilities in a single forward pass, much faster than an LLM. See the [unit guide](https://github.com/google/adk-python/blob/main/docs/guides/labs/classifiers/classifier_node/index.md) for more details. ([ddf8c55](https://github.com/google/adk-python/commit/ddf8c55eb6bc5e0c5fb90acbed3b66af939f7d7a), [e8c4bac](https://github.com/google/adk-python/commit/e8c4bacdfe675ceb5adcaf24ea005af94d271c68))
* **Live Audio**: Enable natural real-time voice interactions with barge-in support alongside Gemini speech-to-text and text-to-speech integration. See the [unit guide](https://github.com/google/adk-python/blob/main/docs/guides/live/cascade_live/index.md) for more details. ([2e7ef92](https://github.com/google/adk-python/commit/2e7ef926c953e5daab31cbc7ccb52fc77ebd9ae6))
* **MongoDB Sessions & Memory**: Persist sessions in MongoDB and share them across runner replicas with the new `MongoDbSessionService`. Add long-term memory without an embedding model using `MongoDbMemoryService`, which recalls past turns by keyword match on any MongoDB deployment, with no vector index needed. Both are experimental. See the [session service](https://github.com/google/adk-python/blob/main/docs/guides/integrations/mongodb/session_service/index.md) and [memory service](https://github.com/google/adk-python/blob/main/docs/guides/integrations/mongodb/memory_service/index.md) guides for more details. ([0df43f5](https://github.com/google/adk-python/commit/0df43f572b0c24d0e76123e44e7a090c5a785df2), [e40e349](https://github.com/google/adk-python/commit/e40e3496cdbe38d4c7194f127d9b2566f1bdbb0c))
* **MongoDB**: Deploy MongoDbToolset to Agent Engine without packaging your connection string, and let Atlas Automated Embedding embed search queries server-side, with no Google embedding call or credentials needed. See the [unit guide](https://github.com/google/adk-python/blob/main/docs/guides/integrations/mongodb/mongodb_toolset/index.md) for more details. ([bc3773f](https://github.com/google/adk-python/commit/bc3773ff250361e0edb0bab8f00f4d7754e3a304), [2f6c666](https://github.com/google/adk-python/commit/2f6c6664a8d3cdf9151ac585bcfe6cb2c0f78d52), [8bbfc33](https://github.com/google/adk-python/commit/8bbfc33a54f92be11283c25a7c4a2b709f9cc3e3))
* **Performance**: Enjoy up to 8x faster execution turns for string-model agents and reduced event-loading overhead. ([772f139](https://github.com/google/adk-python/commit/772f1396244ac7c3381ee7cfe22530899b428de2))

#### Breaking changes

* **Telemetry**: Defaults to OpenTelemetry GenAI v2 (`otel_semconv_1_44`, removing `call_llm`); set `ADK_TELEMETRY_SCHEMA_VERSION_OPT_IN=otel_semconv_1_36` to keep the legacy v1 schema. See the [unit guide](https://github.com/google/adk-python/blob/main/docs/guides/telemetry/telemetry_config/index.md) for more details. ([7838488](https://github.com/google/adk-python/commit/783848821aabc6656a79949996c31608d5043606))

<details>
<summary>All changes</summary>

### ⚠ BREAKING CHANGES

* **telemetry:** deprecate `call_llm` span and OpenTelemetry 1.36 GenAI semconv

### Features

* add delete_memory api to BaseMemoryService ([41e5c7b](https://github.com/google/adk-python/commit/41e5c7b90622c90ed79af70f0ce96c3b55ab1ff3)), closes [#6949](https://github.com/google/adk-python/issues/6949)
* add MongoDB-backed memory service ([e40e349](https://github.com/google/adk-python/commit/e40e3496cdbe38d4c7194f127d9b2566f1bdbb0c))
* add MongoDB-backed session service ([0df43f5](https://github.com/google/adk-python/commit/0df43f572b0c24d0e76123e44e7a090c5a785df2))
* add OpenSandbox environment ([69d1c90](https://github.com/google/adk-python/commit/69d1c901ba842b5300d6ef8ce2872ea545b2375c)), closes [#6758](https://github.com/google/adk-python/issues/6758)
* **classifiers:** add BaseClassifier and typed question/answer types ([773418f](https://github.com/google/adk-python/commit/773418f34f93edd7c379edb5703744066b9cc28a))
* **classifiers:** add ClassifierNode for workflow routing ([e8c4bac](https://github.com/google/adk-python/commit/e8c4bacdfe675ceb5adcaf24ea005af94d271c68))
* **classifiers:** add LlmClassifier ([772b577](https://github.com/google/adk-python/commit/772b5773bcc4f695ea7a1fe9459277bef8aac4a1))
* **eval:** split invocation duration into model, tool and framework time ([e3797a4](https://github.com/google/adk-python/commit/e3797a496e5521209e13513f956284877410b436))
* **features:** promote 12 mature experimental features to stable ([ea298d4](https://github.com/google/adk-python/commit/ea298d4bde4477daa6c419d45637f339eec86d58))
* honor ADK_SUPPRESS_EXPERIMENTAL_FEATURE_WARNINGS ([b592dee](https://github.com/google/adk-python/commit/b592dee0a7ca1e1f9fb84b40c808fda16776b57e)), closes [#5114](https://github.com/google/adk-python/issues/5114)
* **integrations:** add TypesafeClassifier for TypeSafe's Jev models ([ddf8c55](https://github.com/google/adk-python/commit/ddf8c55eb6bc5e0c5fb90acbed3b66af939f7d7a))
* **integrations:** keep MongoDB credentials out of Agent Engine packages ([ab5cb45](https://github.com/google/adk-python/commit/ab5cb4591c091b37de90d3596aea023cae376d55))
* **live:** add barge-in support to CascadeLiveConnection ([2e7ef92](https://github.com/google/adk-python/commit/2e7ef926c953e5daab31cbc7ccb52fc77ebd9ae6))
* **live:** add Gemini speech-to-text and text-to-speech for CascadeLive ([f78149a](https://github.com/google/adk-python/commit/f78149a97e109e9c947ade06e3a9ab8a45385e0e))
* **live:** add ZIP_STORED visual frame pack and unpack helpers ([17d8a5a](https://github.com/google/adk-python/commit/17d8a5aeaa2b6a97ad042cb97e400985ef74ba0b))
* make MongoDbToolset picklable for Agent Engine ([2f6c666](https://github.com/google/adk-python/commit/2f6c6664a8d3cdf9151ac585bcfe6cb2c0f78d52))
* **plugins:** add agent evaluation session and turn trace views ([ab9c994](https://github.com/google/adk-python/commit/ab9c99427e867234da692b969302b466b76e89a5))
* **plugins:** classify error-bearing tool results and extract shared callback helpers ([a4b8ee9](https://github.com/google/adk-python/commit/a4b8ee94c8dcbcd867fe41567868413ae6b834c1)), closes [#7112](https://github.com/google/adk-python/issues/7112)
* **plugins:** classify write-time 403 and 404 drops in BigQueryAgentAnalyticsPlugin ([d5c87a6](https://github.com/google/adk-python/commit/d5c87a66cff0333b8afb3bbb2fd64204251d23a8))
* **plugins:** log terminations, node results and tool result errors in the logging plugins ([6a77d48](https://github.com/google/adk-python/commit/6a77d48cc6405cd50a33c87e1b533881ebf72380))
* record google_search grounding on LLM spans ([ead208a](https://github.com/google/adk-python/commit/ead208a47540e0004286302d6718330679278a1b)), closes [#7345](https://github.com/google/adk-python/issues/7345)
* **samples:** add Secret Manager and Parameter Manager integration samples ([7391411](https://github.com/google/adk-python/commit/7391411d75f7f7a21b2d19fc6658833dd4901bbb)), closes [#7582](https://github.com/google/adk-python/issues/7582)
* seed adk web sessions from initial_state.json ([3c8c63e](https://github.com/google/adk-python/commit/3c8c63e41b3efca99e20b0b06804ed6b69b1dbf1)), closes [#4961](https://github.com/google/adk-python/issues/4961)
* support Atlas Automated Embedding in MongoDB search ([8bbfc33](https://github.com/google/adk-python/commit/8bbfc33a54f92be11283c25a7c4a2b709f9cc3e3))
* support BaseLlm instances in evaluation and user simulation ([cb48b91](https://github.com/google/adk-python/commit/cb48b91981c7306b3110435019e19047b712a7eb)), closes [#3400](https://github.com/google/adk-python/issues/3400)
* support extra packages in cloud deployments ([18a41a5](https://github.com/google/adk-python/commit/18a41a543f2db1dd8856b8f887d48d0c4c2ab56e)), closes [#4980](https://github.com/google/adk-python/issues/4980)
* surface Vertex rubric verdicts and explanations in eval results ([bc220d2](https://github.com/google/adk-python/commit/bc220d2ef5da6d36d707baacc04760d4f57afbe6)), closes [#7350](https://github.com/google/adk-python/issues/7350)
* **telemetry:** count conversation compactions per workflow ([d01d5d8](https://github.com/google/adk-python/commit/d01d5d840832df35d536dcf154dc2575348ca5cc))
* **telemetry:** report tool call content under the semconv attributes ([5f0babc](https://github.com/google/adk-python/commit/5f0babc9c59a03005502504713d9f4bd0e5cca55))
* **telemetry:** serve the elided LLM content to the ADK Web UI ([f7e3f12](https://github.com/google/adk-python/commit/f7e3f127f3163af9da77ef82624f3b2289ebf25c))
* **tools:** add ForceEscalationPlugin for deterministic model consultation ([a84d978](https://github.com/google/adk-python/commit/a84d978e213d8c788bf719b35f103be8c82ef02d))
* **tools:** infer Workflow input_schema from START successors in NodeTool ([4ec4af1](https://github.com/google/adk-python/commit/4ec4af1959471bf3445d66bb7a25680865187c8a))
* **tools:** measure model consultation escalations, tokens, and cost ([f02b89c](https://github.com/google/adk-python/commit/f02b89c398ead95eda1748e771ef9c91c5675f11))
* **tools:** support Gemini 3.x computer use browser action schemas ([b90e4a5](https://github.com/google/adk-python/commit/b90e4a5eefac8d7dd24c3bc0e60ef774b21ac7a7))
* **vmaas:** add AgentEngineEnvironment ([3800f06](https://github.com/google/adk-python/commit/3800f0689df1b3f1bb4fdd83750b37a03c3a9ead))
* **vmaas:** add command and readiness helpers to the sandbox manager ([46edd25](https://github.com/google/adk-python/commit/46edd253341b22cd1f9e3cafc92c2bd6a18f05d9))
* **workflow:** honor tool_thread_pool_config for synchronous workflow nodes ([3f11cb3](https://github.com/google/adk-python/commit/3f11cb3dec76d5346734432393d1e32131575d65))


### Bug Fixes

* accept Gemini 3 and later in the CFC and example gates ([f1c23e3](https://github.com/google/adk-python/commit/f1c23e30882a0593b40c09ea373d03f664554bd4))
* add SSRF protection to RestApiTool ([30726ea](https://github.com/google/adk-python/commit/30726eaf0aab26d61474d96acb4cdd2beadbc083))
* adk eval process exit code now reflects passed/failed ([c2ff634](https://github.com/google/adk-python/commit/c2ff63480bf879da70c3b82bb3e4ed06f6842498))
* **agents:** restore ToolUnion parameter type on _convert_tool_union_to_tools ([8ef71d5](https://github.com/google/adk-python/commit/8ef71d5e3cc50bc8766c15f71db1c4bf8b384b20))
* align MCP auth and header provider precedence ([f82aa22](https://github.com/google/adk-python/commit/f82aa222f1e90b9a32a32dc82cd6d347840a8574)), closes [#7548](https://github.com/google/adk-python/issues/7548)
* align shipped AgentConfig.json schema with runtime validation ([33453d8](https://github.com/google/adk-python/commit/33453d8874d58071454218f23d02fc5788c7f4f2))
* allow custom name/description when VertexAiSearchTool is swapped ([aa9af7b](https://github.com/google/adk-python/commit/aa9af7bfba59c263a7adb3a245ea251fe14d2e40))
* bind sandbox resources per tool call, not per computer ([facaf29](https://github.com/google/adk-python/commit/facaf297b1f7f74516f090df03e10eae0808bd56))
* cap litellm below 1.106.3 ([efbb072](https://github.com/google/adk-python/commit/efbb072bbc8117d77c512ff995ed957cd4c56e7a))
* cap the google-genai instrumentor below 1.0 in the test extra ([0e96818](https://github.com/google/adk-python/commit/0e968189596f93a0220f8f7bc63ebe3a569765a8))
* classify artifact MIME types without case sensitivity ([a468d5a](https://github.com/google/adk-python/commit/a468d5a5be5f27789eab0eae147949f5c7f4eaed))
* clear strict mypy errors in model connectors and telemetry ([6e02699](https://github.com/google/adk-python/commit/6e02699531946a00637e58634c2ce9cabeb450b0))
* clear strict mypy errors in the adk cli and web server ([7296062](https://github.com/google/adk-python/commit/7296062ecbf0085750951d6c0bd7ea9fef430c4b))
* **cli:** serialize BaseNode instances in serialize_node_like ([53e962f](https://github.com/google/adk-python/commit/53e962f97cec44773821305845978d60bde234b1))
* **compaction:** isolate event compaction by isolation_scope ([dd9ca6f](https://github.com/google/adk-python/commit/dd9ca6fc100c146978ce2d199ff168458be4007b))
* consume AGENT_GATEWAY_ROOT_CERTIFICATES in deploy Dockerfile ([2ba3e2d](https://github.com/google/adk-python/commit/2ba3e2dbd5b661d1beebe6248b0f1b853345cfde))
* copy events and search results in InMemoryMemoryService ([77a74f0](https://github.com/google/adk-python/commit/77a74f0206eaf8542e4db6243d4b9dc7965f4475)), closes [#7565](https://github.com/google/adk-python/issues/7565)
* **core:** stop the unsafe local code executor waiting forever ([1def14b](https://github.com/google/adk-python/commit/1def14ba8efa662a5fa5d3b4c368ec8eecc9a2d6))
* disambiguate colliding truncated OpenAPI tool names ([b310c30](https://github.com/google/adk-python/commit/b310c3080bd95a0d4bf865dfa59704e580319887)), closes [#7281](https://github.com/google/adk-python/issues/7281)
* do not resolve Bigtable view parameters from session state ([57e8bc6](https://github.com/google/adk-python/commit/57e8bc67f19aa964e928b6c6d3199a9ec7892de6))
* drop plain execute_sql when Bigtable view parameters are set ([3893d7f](https://github.com/google/adk-python/commit/3893d7fa36fc6cf9fb504075845d6542eb94398d))
* **evaluation:** reject drive-qualified app and eval set ids ([29bb053](https://github.com/google/adk-python/commit/29bb0532c48abad0314cecea5a30b3cdaf6d7898))
* **features:** fail fast when feature decorators are misused ([0491606](https://github.com/google/adk-python/commit/0491606e42f56565aa6091f6aefa4cedd006476c))
* find stored words with a capital dotted I in sqlite memory ([2416f66](https://github.com/google/adk-python/commit/2416f660b15fbb6b8e8d92c76eef76d6de69963e)), closes [#7540](https://github.com/google/adk-python/issues/7540)
* finish runner cleanup when close is cancelled ([e342a14](https://github.com/google/adk-python/commit/e342a14eca15e4e5a0a103a06f8307543633e904))
* **flows:** isolate parallel single-turn node events across branches and node_paths ([1360dda](https://github.com/google/adk-python/commit/1360dda520dbff1b8f41c9f6265226c92a7021f2)), closes [#7488](https://github.com/google/adk-python/issues/7488)
* **flows:** preserve completed sibling tool responses on NodeInterruptedError ([cb47e7b](https://github.com/google/adk-python/commit/cb47e7bf00f3c84e3c03a98f436b450426ed441c))
* **flows:** read interrupt ids through the shared extractor in the agent flow ([0798b2c](https://github.com/google/adk-python/commit/0798b2c94c4f5bf83693de9850e451cb17701306))
* forward thinking_config to litellm reasoning params ([dd80f8f](https://github.com/google/adk-python/commit/dd80f8f7500c9853d44a3682405c4742f2c40c37)), closes [#7360](https://github.com/google/adk-python/issues/7360)
* give each retry of a dynamic function node fresh arguments ([13dde39](https://github.com/google/adk-python/commit/13dde39b685aee292be9056f63a7ca24214950de))
* give each seeded environment-simulation injection its own generator ([52cc2d8](https://github.com/google/adk-python/commit/52cc2d82a2959e9920db04c028be1450d7b4aaa0))
* honor an output schema on Claude when the request carries no tools ([97af1ff](https://github.com/google/adk-python/commit/97af1ff62af59a5a8eeb6db0a29a154a07a16715))
* honor each metric's own eval_status in AgentEvaluator.evaluate() ([5bf7f12](https://github.com/google/adk-python/commit/5bf7f12efbf84ec3ac8959e9388e31dcb6bf57f2))
* ignore OAuth credentials without access tokens in McpTool ([dc78d0a](https://github.com/google/adk-python/commit/dc78d0a58595012fd09ad5bff9448fc2271b9787)), closes [#7587](https://github.com/google/adk-python/issues/7587)
* **integrations:** lazy-import google-cloud clients in gcs, secret_manager and parameter_manager ([cb54727](https://github.com/google/adk-python/commit/cb547270100aafe134bb4a831f680a44d9deb1c2)), closes [#7581](https://github.com/google/adk-python/issues/7581)
* **integrations:** use the mTLS Model Armor endpoint when mTLS is enabled ([3139855](https://github.com/google/adk-python/commit/31398554885485f92bd918f35f90b9810f3ffed1)), closes [#7553](https://github.com/google/adk-python/issues/7553)
* keep a streamed thought signature sent without the call's name ([557743c](https://github.com/google/adk-python/commit/557743c4484c7745f6c52b3bca07727011852e78))
* keep ADK tracking headers and http options when client_kwargs sets http_options ([8197c10](https://github.com/google/adk-python/commit/8197c107b1136d7f99820f59aabbaaea13c9cba1))
* keep client token usage when the last response has none ([8ff9941](https://github.com/google/adk-python/commit/8ff99419f3da8bc5921122699f125bf931905698)), closes [#7560](https://github.com/google/adk-python/issues/7560)
* keep every artifact when converting an A2A task to an event ([e3e6581](https://github.com/google/adk-python/commit/e3e6581354e069d7d67f915ddcb36f5949c914e9))
* keep every tool call in a finish-bearing stream chunk ([74d0eff](https://github.com/google/adk-python/commit/74d0eff89391746464997b6eb1ca5cb3d44ca670)), closes [#7004](https://github.com/google/adk-python/issues/7004)
* keep finished parallel tool results when a sibling raises ([7d3658e](https://github.com/google/adk-python/commit/7d3658ef1a1f61c4c18cc4781f6892460add960c)), closes [#7428](https://github.com/google/adk-python/issues/7428)
* keep integers outside 64 bits exact in SqliteSessionService state ([db432db](https://github.com/google/adk-python/commit/db432dbae7c92df1c88b6d37d82a36c86998becb)), closes [#7576](https://github.com/google/adk-python/issues/7576)
* keep sticky routing when a sub-agent runs in task mode ([c5ee35e](https://github.com/google/adk-python/commit/c5ee35e332052b197b98952cec5442653f1c2aa6))
* key Eventarc client cache by full credential identity and scopes ([67b816b](https://github.com/google/adk-python/commit/67b816b477251d0fcfbf72d4e1e0bace338e1d58))
* let operation parameters override path-level ones ([6563a09](https://github.com/google/adk-python/commit/6563a09ed649084867b981c27fe26f43e4875365)), closes [#7205](https://github.com/google/adk-python/issues/7205)
* **live:** stop adding set_model_response to live sessions ([8fbcd42](https://github.com/google/adk-python/commit/8fbcd42e1d3b08951231db6169aaf75af0a9dfa4))
* load the whole session when rewinding ([8431830](https://github.com/google/adk-python/commit/8431830c75c282b2afaf10e474394c32e0c30190))
* make JoinNode in a loop wait for each iteration's predecessors ([a6ed859](https://github.com/google/adk-python/commit/a6ed85905d4c1d1f285ba9d4f76a9d801b66d17f)), closes [#7498](https://github.com/google/adk-python/issues/7498) [#7515](https://github.com/google/adk-python/issues/7515)
* merge tracking headers regardless of casing ([377306e](https://github.com/google/adk-python/commit/377306e43c5914de3f64f72526173b0732b0c7d8))
* **otel:** degrade gracefully when OTel exporter packages are missing ([a221ccd](https://github.com/google/adk-python/commit/a221ccd806cea0d0af6b09ce6f9d27658c75a969))
* pin certifi 2026.10.19 in the constraints files ([62be742](https://github.com/google/adk-python/commit/62be74214cd04fda36a27676895aac6b40daecc4))
* **plugins:** match credential key names that use hyphens ([e4165d0](https://github.com/google/adk-python/commit/e4165d0a43947ba7e1a0b2544e9e6e65f86ad1a8))
* point litellm install hints at google-adk[extensions] ([18d2032](https://github.com/google/adk-python/commit/18d20325200cd47c54726266042f2304bace3dd5))
* present the mTLS client certificate from OAuth2 metadata discovery ([a3b1515](https://github.com/google/adk-python/commit/a3b15155a6b78f3c97d03687349f771fd3d86e66))
* present the mTLS client certificate from RestApiTool's default client ([a8fa294](https://github.com/google/adk-python/commit/a8fa294f77f7822d75dcfda1e3f3ef8c5304d158))
* preserve Annotated text and content schemas ([04b8b60](https://github.com/google/adk-python/commit/04b8b6011ed6335febeef77631f137613d471348))
* preserve custom client factories ([1daa0ec](https://github.com/google/adk-python/commit/1daa0eca989f5f19c8081107c1d1f9767929ba6b)), closes [#3158](https://github.com/google/adk-python/issues/3158)
* raise a clear error when an agentplatform older than 2.2 loads ([270ef5e](https://github.com/google/adk-python/commit/270ef5ee9f958174148982f0c4941f401e1910ed))
* record a nested state write only when its container converts to JSON unchanged ([662b017](https://github.com/google/adk-python/commit/662b0175aa23605d4936c36ec60609ad8bbca09f))
* record a write into a nested state container as a state change ([ce2fdc5](https://github.com/google/adk-python/commit/ce2fdc5aac5c97b4e2e12581e18e2dfacfe99524))
* record artifact_delta from before and after agent callbacks ([019387c](https://github.com/google/adk-python/commit/019387c62d706375059376156c355f20e0c735c2)), closes [#7478](https://github.com/google/adk-python/issues/7478)
* recover the correct occurrence of reused compacted tool calls ([626bd20](https://github.com/google/adk-python/commit/626bd20717100edf781a738c65c92e40b183d179))
* refuse internal agents with a 403 on a non-loopback dev server ([c08225d](https://github.com/google/adk-python/commit/c08225da0a6e4adc667aea858c93f96cbf23599c))
* reject empty train eval cases and honor empty validation case IDs in LocalEvalSampler ([d9fe639](https://github.com/google/adk-python/commit/d9fe639c03f2e0af94188c0e2f796e9f5e502d99)), closes [#7168](https://github.com/google/adk-python/issues/7168)
* reject whitespace-only path segments in artifact validation ([0c94967](https://github.com/google/adk-python/commit/0c9496744a8ccf0ddaab8610f5a8d76cd94e7cfe))
* report cached and detailed token usage for the Interactions API ([d57f0cb](https://github.com/google/adk-python/commit/d57f0cb0cefc1e6eab1acff95ca9108293c300c5))
* require authlib 1.9.1 or newer for CVE fixes ([ef3e80a](https://github.com/google/adk-python/commit/ef3e80aa8e74c76ebd34bdb2e38488b5750abac9))
* resolve JSON Pointer $ref in _dereference_schema ([59fe93b](https://github.com/google/adk-python/commit/59fe93bd0e7b32649c217dcce76f8928ee3c10bc))
* retry a rejected dynamic child instead of replaying it ([e2dbc0f](https://github.com/google/adk-python/commit/e2dbc0f55027372f3a701d41004ee006ee8f9f14))
* return 404 when adding a session to a missing eval set ([7d6637c](https://github.com/google/adk-python/commit/7d6637c536f3e4343c904f64b4d8bd2c8331ce7a))
* return 404 when an eval result or session is missing ([c2dcb75](https://github.com/google/adk-python/commit/c2dcb75af5c7a6786c68d8d2e6ed26506a830c75))
* route next turn to target of unfinished transfer_to_agent ([bb353c8](https://github.com/google/adk-python/commit/bb353c8ddf129dfaccba3ce4bfa5ce418fd49acb)), closes [#7458](https://github.com/google/adk-python/issues/7458)
* route the turn after a paused single_turn sub-agent to its delegator ([6727f8f](https://github.com/google/adk-python/commit/6727f8f5617509f88d2b3d4e5bf49c59d3b0e539)), closes [#7602](https://github.com/google/adk-python/issues/7602)
* run a task delegation sent in the same turn as finish_task ([486ef30](https://github.com/google/adk-python/commit/486ef302cf6cc620c13d0e2bb0e1d98d5d66cf02))
* **samples:** prevent comment spam alerts from labeling entire issue as spam ([05355fd](https://github.com/google/adk-python/commit/05355fd49ec2c49e8ae9ed3952c8ab243e0e7618))
* sanitize GCS blob names to prevent path traversal in skill loading ([20a5a0c](https://github.com/google/adk-python/commit/20a5a0cd47735487b504a249a3145cea5d4afef3))
* send adk run queries as messages after a pause is answered ([23bc0bb](https://github.com/google/adk-python/commit/23bc0bb79d2d9b5b8657562cee00a63afdbef38a))
* serve dev UI behind prefix-stripping proxies ([b60b44f](https://github.com/google/adk-python/commit/b60b44ff2a2ab843cabb4804bfc5492926953352)), closes [#7439](https://github.com/google/adk-python/issues/7439)
* **sessions:** purge events before deleting session row in DatabaseSessionService ([3b2b949](https://github.com/google/adk-python/commit/3b2b949c4b0b2a063b01e838d0fdde4aa93336d7))
* share event id across streamed A2A artifact chunks ([5d40869](https://github.com/google/adk-python/commit/5d408696d2c5a1c8bb80cac6e4fb63263093bf82)), closes [#7395](https://github.com/google/adk-python/issues/7395)
* source MCP destination ID from RuntimeReference.uri ([2802834](https://github.com/google/adk-python/commit/2802834eb2dc15855e82142b598b7d22a6843810)), closes [#7196](https://github.com/google/adk-python/issues/7196)
* **spanner:** validate the database id used in the create statement ([456d2cb](https://github.com/google/adk-python/commit/456d2cb9ef1ac2c20842c60c97cf9079eb8adf33))
* stop persisting an OAuth2 credential whose code was never redeemed ([7fca46f](https://github.com/google/adk-python/commit/7fca46f1155ff04a4d9b50516c6badc6d7cdfc89))
* support callables with positional-only arguments in FunctionTool ([12726f7](https://github.com/google/adk-python/commit/12726f7a9775dfb46eddea044742efd89956ac1e)), closes [#7382](https://github.com/google/adk-python/issues/7382)
* support unhashable callable tools ([56ac304](https://github.com/google/adk-python/commit/56ac304859b35906f12171d1a6aac489a0ffbffb))
* surface HITL pauses in AgentTool instead of returning "" ([9a5510e](https://github.com/google/adk-python/commit/9a5510e09b788d114cedfb07119a0c9cd4cc527b)), closes [#7245](https://github.com/google/adk-python/issues/7245)
* **telemetry:** drop the call_llm span under telemetry schema v2 ([5909a0e](https://github.com/google/adk-python/commit/5909a0ebabdf5786397b68babf1a1fa15aea22ce))
* tolerate non-UTF-8 artifact metadata in FileArtifactService ([69c0b00](https://github.com/google/adk-python/commit/69c0b00fc60a35f0a20882f8cddea052e43ba66a))
* **tools:** extract query text from all user content parts in ExampleTool ([8f17ac4](https://github.com/google/adk-python/commit/8f17ac4fa4c9a18efabc699ea3032bb861e25dcf))
* **tools:** preserve raw routine docstrings in legacy declaration builder ([e4067db](https://github.com/google/adk-python/commit/e4067dbcc8192615b69d8ca1fc1de17743a71676))
* **tools:** return validation error dict when Workflow entry node rejects tool args in NodeTool ([d0c8454](https://github.com/google/adk-python/commit/d0c8454ed762981a9bd6be8aa843ce80e18a5327))
* **tools:** run on_tool_error callbacks when a tool call is cancelled ([2723a18](https://github.com/google/adk-python/commit/2723a18919fbcf22ce45c61595e1c7d7f3538307))
* track Live background tool calls per function call ([cf4ec93](https://github.com/google/adk-python/commit/cf4ec93993ccb53f6f882dd1afdd1032b4775b60)), closes [#7058](https://github.com/google/adk-python/issues/7058)
* unify boolean environment variable parsing in is_env_enabled ([95d6215](https://github.com/google/adk-python/commit/95d62152387f52318f04c14d979b83da60f1b313))
* use a real CallToolResult in agent identity 2LO MCP tests ([e02b2bf](https://github.com/google/adk-python/commit/e02b2bff416602476cd94e8f9184a9fda1879444))
* use explicit re-export in __init__.py generated by adk create ([8ccbb55](https://github.com/google/adk-python/commit/8ccbb55a83ab6e8d1b71037713a7869c9171ff4b)), closes [#6648](https://github.com/google/adk-python/issues/6648)
* use McpTool inside McpToolset ([eff016d](https://github.com/google/adk-python/commit/eff016d235e4b19407868e5278c579e5414c2675))
* **vmaas:** report sandbox timeouts and retry commands only when safe ([019b2b2](https://github.com/google/adk-python/commit/019b2b21f9b68a344efd6b92f4f7a40a7c6e273b))
* **vmaas:** stop retrying expired unreachable sandboxes and timed-out commands ([287b7e9](https://github.com/google/adk-python/commit/287b7e9a19f8a0cd5003cad228b5ae84a3534c3c))
* warn when cousin agents share a name ([6031bb1](https://github.com/google/adk-python/commit/6031bb1d75a411f21c4cd8a54251823b03249f78)), closes [#7110](https://github.com/google/adk-python/issues/7110)
* **workflow:** buffer out-of-order completions in ReplaySequenceBarrier ([a4ba813](https://github.com/google/adk-python/commit/a4ba8137262f6a36339f6dd02f41cf9710f8542f)), closes [#7502](https://github.com/google/adk-python/issues/7502)
* **workflow:** disambiguate RequestInput interrupt_id across rerun loop iterations ([ed81e1b](https://github.com/google/adk-python/commit/ed81e1b26ecb536b39cbd88693714710addb915b)), closes [#5617](https://github.com/google/adk-python/issues/5617)
* **workflow:** preserve route and retry order during replay interception ([3b3de80](https://github.com/google/adk-python/commit/3b3de80f1ab75f0adf210c1eab1e440cd61d8c7b))
* **workflow:** publish a delegated output on the claiming node's branch ([7c53386](https://github.com/google/adk-python/commit/7c53386ad3c7996dd103afdc0c5061e2ca77ca5c))
* **workflow:** run a resumed sub-agent again when control transfers back to it ([b0e5952](https://github.com/google/adk-python/commit/b0e59521dbc9b15d7ccbf634b5f61dc6dc2d15ae))
* yield turn_complete and interrupted after flushing live audio ([da121d7](https://github.com/google/adk-python/commit/da121d7bd8be75806b9f87a8323bac0677701169))


### Performance Improvements

* avoid quadratic scans of compacted session history ([2a28c3e](https://github.com/google/adk-python/commit/2a28c3edebeecebcd8e738933f24b29c4f51b3a9))
* cut a string-model agent's turn from 20 ms to 2.5 ms ([772f139](https://github.com/google/adk-python/commit/772f1396244ac7c3381ee7cfe22530899b428de2))
* cut late /run_sse turns by 13-30% by loading their events once ([ebbfb0e](https://github.com/google/adk-python/commit/ebbfb0ee5166424240156ab9056f2bf67f5af784))
* defer the sessions.state import in code_executor_context ([dcd20ec](https://github.com/google/adk-python/commit/dcd20ec4a966073fe5e462e33182089d83bc5f7c))
* skip the connector poll sleep once the operation is done ([9163b19](https://github.com/google/adk-python/commit/9163b19debc64edff3aecc771bdcd085b76bc093))
* **tools:** preserve skill tool order and cap AgentTool cache TTL ([81311b7](https://github.com/google/adk-python/commit/81311b7abd542a5073cd1b9313c0babc61a0e0ea))


### Documentation

* **agents:** add RunConfig unit guide covering StreamingMode and ToolThreadPoolConfig ([de92647](https://github.com/google/adk-python/commit/de926474b285a568bd53cad77aea3774b1a8ff2d))
* clarify VAD usage of activity and audio stream end signals ([ab795b6](https://github.com/google/adk-python/commit/ab795b6742f202de4278eae5b03a73bb41a1dd39))
* document GcsArtifactService URL generation ([2824b4a](https://github.com/google/adk-python/commit/2824b4a54ca4ce56c1457721c55b470b715693f0))
* fix get_gcp_exporters docstring argument names ([8909689](https://github.com/google/adk-python/commit/8909689ae46de5ecadd12cd8fccfdee6a32b67cc))
* fix grammar and phrasing in README ([fb44710](https://github.com/google/adk-python/commit/fb447108ab4dd1d4c1ed7e1ffde60ea3b4dd55f2))
* **live:** fix run_live and CascadeLive snippets and document LiveRequest.state_delta ([43bab7d](https://github.com/google/adk-python/commit/43bab7db04b4418eec1b55e9eb0e73a72504b9d4))
* mark Sequential/Parallel/Loop agents deprecated in README ([c9f53a6](https://github.com/google/adk-python/commit/c9f53a6242b0eeb0cc3622da788e12ed824b233f))
* **memory:** document SqliteMemoryService and delete_memory support in unit guide ([4dbb55d](https://github.com/google/adk-python/commit/4dbb55d0a7e02f6d654244e42506bc220ba285ba))
* **runner:** fix InMemoryRunner auto_create_session example and constructor options ([f9f7825](https://github.com/google/adk-python/commit/f9f7825e39dc601b3ff3a8a82d2f74b963e7ffda))
* **runner:** fix voluntary early-termination guidance in abort unit guide ([92bb67f](https://github.com/google/adk-python/commit/92bb67f9b5e4204aba71e482aeabfab39bd87da9))
* **samples:** add classifier tool gate sample ([723beea](https://github.com/google/adk-python/commit/723beea21234cd6d8784382a64b4bb1f2cce26b9))
* **samples:** add ClassifierNode workflow routing sample ([bba90f2](https://github.com/google/adk-python/commit/bba90f2e2ff77b0e10d484ee3f7a7e839443a1ec))
* **sessions:** update State iteration, nested write tracking, and session error docs ([2d81d32](https://github.com/google/adk-python/commit/2d81d3289586bdfb1b9ec4264193dba01416f945))
* **vmaas:** add a unit guide for AgentEngineEnvironment ([c006e00](https://github.com/google/adk-python/commit/c006e00b96b96777090c423f428a6bbffebac275))
* **workflow:** align retry_config, graph validation, and error types with HEAD ([ff6c851](https://github.com/google/adk-python/commit/ff6c851dde00cbf3469400810c3148164ff82a18))

</details>

---

> **Source** [google/adk-python](https://github.com/google/adk-python) · `v2.13.0` · 2026-10-23 · [upstream release](https://github.com/google/adk-python/releases/tag/v2.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
