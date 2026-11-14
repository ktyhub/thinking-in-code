---
title: "adk-python v2.10.0"
project: "adk-python"
repo: "google/adk-python"
tag: "v2.10.0"
version: "v2.10.0"
published: "2026-09-25"
type: "minor"
lang: "en"
summary: "This release introduces advanced skill lifecycle management, expands database and model integration support, and brings richer efficiency metrics to agent evaluation."
---

# adk-python v2.10.0

## [2.10.0](https://github.com/google/adk-python/compare/v2.9.2...v2.10.0) (2026-09-24)


### Highlights

This release introduces advanced skill lifecycle management, expands database and model integration support, and brings richer efficiency metrics to agent evaluation.

* **Skills**: Control resource usage and tool persistence dynamically using new ephemeral lifecycles and active skill limits (experimental; enable with `ADK_ENABLE_SKILL_LIFECYCLE=1`). ([43b73e4](https://github.com/google/adk-python/commit/43b73e4fc0920c08693bcec3985c832c7d9870b0))
* **Database Integrations**: Perform high-performance vector and hybrid searches seamlessly within your agent flows with the new MongoDB toolset. ([0961ced](https://github.com/google/adk-python/commit/0961ced3e3dd92056ecf10c7b10aa736eead08f1))
* **Evaluation**: Optimize agent execution costs and latency with new evaluation metrics for tracking duration, token consumption, and model call counts. ([2d428ea](https://github.com/google/adk-python/commit/2d428ead3860fbc131de362b485eb15551373665))
* **Model Support**: Integrate OpenAI reasoning models more effectively with automated request parameter adaptation and precise reasoning token reporting. ([52a2f0f](https://github.com/google/adk-python/commit/52a2f0f09f2910043127042e6ba3dd805d5a1479))

#### Behavior changes

* **BigQuery protected write mode** now runs a non-SELECT statement only when the dry run places it in the session's anonymous dataset, so multi-statement scripts, `CALL`, `EXPORT DATA` and other statements the dry run gives no destination are rejected. ([8b883d0](https://github.com/google/adk-python/commit/8b883d07147f62f8e9979ec8e6b1205437d60f4f))
* **BigQuery protected mode** keeps its BigQuery session in process memory instead of session state, so its temporary tables do not survive a restart or carry over to another replica. ([094012b](https://github.com/google/adk-python/commit/094012b4509fc136083e6be95f273ad1163fbf2c))
* **`OpenAIResponsesLlm`** ignores `thinking_config` (`thinking_level` / `thinking_budget`) with a warning; use `OpenAIGenerateContentConfig.effort` instead. ([b3d1392](https://github.com/google/adk-python/commit/b3d1392a1a9caf382b9483c5fecd4b9140949abb))
* **`AgentEvaluator.evaluate` and `evaluate_eval_set`** raise `ValueError` when no eval cases are evaluated, instead of passing. ([9dbc2ae](https://github.com/google/adk-python/commit/9dbc2aebd7a0ad88183d166c19398bbbab93d507))
* **Instruction templating** leaves `${var}` and backslash-escaped `\{var}` as written instead of filling them from state. ([0caecd2](https://github.com/google/adk-python/commit/0caecd236f95131da625a3bf1de282130f6aa437))
* **Legacy live-audio modules** under `google.adk.flows.llm_flows` (`audio_cache_manager`, `audio_transcriber`, `transcription_manager`) emit a `DeprecationWarning` on import; move to `google.adk.live`. Test suites run with `-W error` will fail on these imports. ([bf2bc56](https://github.com/google/adk-python/commit/bf2bc561ef9c2b9cfaec5bc6ca441b6c1d3b3496))

<details>
<summary>All changes</summary>

### Features

* add a duration efficiency metric to ADK eval ([49e7264](https://github.com/google/adk-python/commit/49e7264bf6a72a6b42813300a2192e0898ff5b23))
* add an EPHEMERAL skill lifecycle that lasts one turn (experimental, off by default; enable with `ADK_ENABLE_SKILL_LIFECYCLE=1`) ([f938abd](https://github.com/google/adk-python/commit/f938abd8beb213774eda069dd2a315fe998c399e))
* add an opt-in unload_skill tool to SkillToolset (experimental, off by default; enable with `ADK_ENABLE_SKILL_LIFECYCLE=1`) ([ce53a36](https://github.com/google/adk-python/commit/ce53a36c0a221542afbd22dc4f3d6f5e3c8fecd7))
* add dev-only deploy endpoints for Agent Runtime, Cloud Run, and GKE ([1235104](https://github.com/google/adk-python/commit/1235104b6598eb3a6b92abc5d07c52edb62dee5b))
* add informational efficiency metrics (tokens, calls) to ADK eval ([2d428ea](https://github.com/google/adk-python/commit/2d428ead3860fbc131de362b485eb15551373665))
* add MongoDB toolset with vector and hybrid search ([0961ced](https://github.com/google/adk-python/commit/0961ced3e3dd92056ecf10c7b10aa736eead08f1))
* add name-based request processor helpers to BaseLlmFlow ([fd335cd](https://github.com/google/adk-python/commit/fd335cda08be4764c2ef3570d172cf0fcd468ef7))
* add on_error handler to skill listing functions ([9b220e7](https://github.com/google/adk-python/commit/9b220e7546858fecfc1bb94430d8e2af9b50f78c))
* add optional context_builder to RemoteA2aAgent ([322e3bf](https://github.com/google/adk-python/commit/322e3bf0ae4896f44ce4589926c1daa930c781b5)), closes [#3301](https://github.com/google/adk-python/issues/3301)
* add programmatic skill activation APIs to SkillToolset ([a0f3955](https://github.com/google/adk-python/commit/a0f395570461f2eccfecb132c6c751064b1e6bbe))
* add skill lifecycle modes and an active-skill cap to SkillToolset (experimental, off by default; enable with `ADK_ENABLE_SKILL_LIFECYCLE=1`) ([43b73e4](https://github.com/google/adk-python/commit/43b73e4fc0920c08693bcec3985c832c7d9870b0))
* **bigquery:** add default_project_id and default_dataset_id to BigQueryToolConfig ([6f301fc](https://github.com/google/adk-python/commit/6f301fcc6b7a31d61c35d606e8a5968769ffd357))
* **cli:** add gemini-3.8-flash to the `adk create` model options ([6592ee5](https://github.com/google/adk-python/commit/6592ee5b5b11dbc6a8dfa33703cb4a682990af47))
* **cli:** auto-configure session and memory services on Agent Runtime ([fede561](https://github.com/google/adk-python/commit/fede5618df90c1d9ab340334519068916fa3af50))
* **context:** add abort signal primitives to InvocationContext and Context; the Runner and workflows do not act on an abort yet ([d99b23f](https://github.com/google/adk-python/commit/d99b23fbf1dc32383f88708f3b84453dde97897f))
* drop an unloaded skill's instructions from later requests (experimental, off by default; enable with `ADK_ENABLE_SKILL_LIFECYCLE=1`) ([accb906](https://github.com/google/adk-python/commit/accb906eac1534e4cc8ba66a7b2d5a389996522b))
* expose serving tier via `RunConfig.service_tier` ([3e3d1dc](https://github.com/google/adk-python/commit/3e3d1dce4d6015a1d88fedcd8e3cffb789037835))
* expose session options in api_server REST endpoint ([fa4719e](https://github.com/google/adk-python/commit/fa4719e78db01ec6333875dc26fd2bd88c786f6c)), closes [#6342](https://github.com/google/adk-python/issues/6342)
* **integrations:** add a google-adk[openai] extra ([9be86bf](https://github.com/google/adk-python/commit/9be86bf610390202ad233bfc34219862c1885410))
* **integrations:** move the OpenAI models to `google.adk.integrations.openai`; `google.adk.labs.openai` still re-exports them ([95c0591](https://github.com/google/adk-python/commit/95c0591031edfd7068b5c71d6ae61fd9a34f2809))
* let SkillToolset notice that a loaded skill has changed ([f848b7e](https://github.com/google/adk-python/commit/f848b7e3bd4943d245b324fd233483c9857804cf))
* **mcp:** identify ADK in the MCP clientInfo handshake ([5117f28](https://github.com/google/adk-python/commit/5117f286de5587af254d22830962108221e1c98a))
* **mcp:** identify ADK in the User-Agent of MCP HTTP requests ([061dcd6](https://github.com/google/adk-python/commit/061dcd64bcc6abba8586a71e5c868eaad51e6d4b))
* **openai:** adapt request params for reasoning models on both surfaces ([137eba8](https://github.com/google/adk-python/commit/137eba8431e4e66bc469ddf6c6b8f6c38b56cc52))
* **openai:** add api_key/base_url with per-request key resolution to OpenAILlm ([56aabce](https://github.com/google/adk-python/commit/56aabce2323cd132554471b403c11110c7f9daf3))
* **openai:** add OpenAIGenerateContentConfig and per-model reasoning effort ([bb9023d](https://github.com/google/adk-python/commit/bb9023d1fae8bf2d273f47281570a23732a7e128))
* **openai:** honor tool_config mode and all tool declarations in OpenAILlm ([ed758bb](https://github.com/google/adk-python/commit/ed758bbabf7a4ca76f13602e0e1cbb24c793abef))
* **openai:** report reasoning tokens on Chat Completions; add live tests ([52a2f0f](https://github.com/google/adk-python/commit/52a2f0f09f2910043127042e6ba3dd805d5a1479))
* **openai:** surface streaming usage and finish reason in OpenAILlm ([ed030cb](https://github.com/google/adk-python/commit/ed030cbf431ef6c12a2b3a75dcc7aff08378cb82))
* **openai:** use build_reasoning_effort for reasoning in OpenAIResponsesLlm ([b3d1392](https://github.com/google/adk-python/commit/b3d1392a1a9caf382b9483c5fecd4b9140949abb))
* send the deferred service tier on interactions API requests ([cc912d5](https://github.com/google/adk-python/commit/cc912d587464051f3a3f4197d58a14a5c42ddc83))
* **skills:** add SkillDiscoveryMode to control how the skill catalog is disclosed ([3d3c1d9](https://github.com/google/adk-python/commit/3d3c1d90c89128d721569f54115be2b1d0ac5a74)), closes [#7092](https://github.com/google/adk-python/issues/7092)
* stamp the Agent Registry URN as gen_ai.main_agent.id ([5c3f64e](https://github.com/google/adk-python/commit/5c3f64e08c21912194acf71d0992e59f897c3229))
* stream partial function-call arguments across model adapters ([f449780](https://github.com/google/adk-python/commit/f44978013378ecba9e3cfc0c955b7890ceb7951b))
* **telemetry:** allow per-feature enabling of experimental telemetry ([0add163](https://github.com/google/adk-python/commit/0add163161099f435ce32bf3ba35d4502c80efd7))
* **tools:** add `behavior` field to control Live non-blocking function calls ([6189b2e](https://github.com/google/adk-python/commit/6189b2e03ab7979950bca90755b0d628822e97d7))
* when using interactions api with deferred tier, wait on an interaction operation ([b011fb2](https://github.com/google/adk-python/commit/b011fb21bd50ac006273d71dba8c32f1123a5519))
* **workflow:** filter rewound invocations during workflow rehydration ([ab4dba6](https://github.com/google/adk-python/commit/ab4dba6ef14c1deed57f9759a4cb6e089a94de67))
* **workflow:** let DEFAULT_ROUTE fan out to several nodes ([ffc191b](https://github.com/google/adk-python/commit/ffc191bbe57145da82c0776e56c5d5c410c442ec))
* **workflow:** unwrap NodeTool in build_node and bind state in _ToolNode ([5c59a73](https://github.com/google/adk-python/commit/5c59a730974546c7f56e72c2e06a91ec114cda92))


### Bug Fixes

* accept a client factory written against either httpx major ([b726964](https://github.com/google/adk-python/commit/b7269649074507e9c8640135472cc1c9e5c09f57))
* **agents:** accept the default hint in request_confirmation ([768969d](https://github.com/google/adk-python/commit/768969db14c0764dd72b04107d4fa25811772791))
* **agents:** allow descriptionless BaseNode in LlmAgent tools ([6373f23](https://github.com/google/adk-python/commit/6373f232c79136b80fe196bde1b351ddde13f9f4))
* **agents:** trigger after_agent_callback on cancellation ([37aa730](https://github.com/google/adk-python/commit/37aa7308bbcfd41a2eebee73f51e6f40a5448e78))
* allow forwarding session ID as context_id for remote A2A agents ([e10a1be](https://github.com/google/adk-python/commit/e10a1becd3ab44654a57e45b3b288b810c5b5602))
* **auth:** keep the OAuth2 client secret out of session state ([9b9aac0](https://github.com/google/adk-python/commit/9b9aac038fcc8a2358331bc93d58dca4b85d31d2))
* **auth:** report an auth scheme that carries no OAuth2 flows ([b22cfc4](https://github.com/google/adk-python/commit/b22cfc43c2d2a8dfd5dc5666aa5afc5f9fde847a))
* **bigquery:** reject writes protected mode cannot place in the session dataset ([8b883d0](https://github.com/google/adk-python/commit/8b883d07147f62f8e9979ec8e6b1205437d60f4f))
* **bigtable:** release the per-call data client in execute_sql ([f39cbf5](https://github.com/google/adk-python/commit/f39cbf560d08f727de0693e4bb8860dcb96fecd2))
* bound artifact reference resolution depth in load_artifact ([87b9f25](https://github.com/google/adk-python/commit/87b9f25b372733d8899a47817c7f3b72cbad5959))
* build the Gemini API clients once per event loop ([8164341](https://github.com/google/adk-python/commit/8164341ec5dc7d21d405e553c51cb0bd41cc7afa))
* **cli:** omit http_options from the generated recordings file ([09326ca](https://github.com/google/adk-python/commit/09326ca18a8d545f48199544078a5b190839697c))
* **cli:** reject multi-line env values when generating the Dockerfile ([8192d1b](https://github.com/google/adk-python/commit/8192d1bf75eadcf4e53c15abb948f2e3fcf7705c))
* **cli:** use exec-form RUN/CMD in generated Dockerfiles and validate app names ([9327437](https://github.com/google/adk-python/commit/93274370ffc60feb500f44665bb52a8c54e515b7))
* **cli:** validate the test name on every dev server test endpoint ([4c2bafb](https://github.com/google/adk-python/commit/4c2bafb7ed197046e44a2fa3a57f636c4f79054b))
* coerce integral floats inside list[int] tool parameters ([b1cba29](https://github.com/google/adk-python/commit/b1cba290b2505e5e1c324fc34e4cf53605ccefa7))
* **compaction:** stop backwards prompt token scan at compaction boundary ([4d9abb5](https://github.com/google/adk-python/commit/4d9abb5840a2f4d4135850cc4f9ee0c1ccf9fd24))
* complete an A2A task whose run ends without a status message ([9750c4c](https://github.com/google/adk-python/commit/9750c4c4a8658b6d92ccecfe7feecf9967866f8c))
* confine agent builder file globs to the configured directory ([896a29a](https://github.com/google/adk-python/commit/896a29a94abfae5387ca4e6f92eb07747f190d5e))
* **confirmation:** skip confirmation requests authored by other agents before resolving history ([e19ce05](https://github.com/google/adk-python/commit/e19ce0579b849a96df41fb27079d26548978970e))
* **core:** stop executing code found in the model's private reasoning ([a2a2f66](https://github.com/google/adk-python/commit/a2a2f6656aca4d7fe3606162e807462afa21e2ff))
* correct get_bigtable_data_client return annotation ([c673c59](https://github.com/google/adk-python/commit/c673c59c979822128ecdad8c63c378ffc1a9600e))
* do not match dollar-brace or escaped patterns in instructions ([0caecd2](https://github.com/google/adk-python/commit/0caecd236f95131da625a3bf1de282130f6aa437)), closes [#5706](https://github.com/google/adk-python/issues/5706)
* **eval:** ignore UI-only InvocationEvent fields on eval case save ([a4a50a4](https://github.com/google/adk-python/commit/a4a50a4d5bfe54e4ebe5173464b74bb4c2c0c055))
* **eval:** pin the specific version for safety_v1 ([997f408](https://github.com/google/adk-python/commit/997f40899042e0f00be83929bcf094fddded9355))
* exclude the local .adk folder from deployed agent images ([c409bd3](https://github.com/google/adk-python/commit/c409bd334b821c779fecb06cbdfcb4fa97a3b9f4))
* extract URL fragment key-value pairs as query params ([0cfe43b](https://github.com/google/adk-python/commit/0cfe43b657ead31fe463866f2a348b7d7ce38119))
* fence server-supplied tool description before reaching the model ([a519b6f](https://github.com/google/adk-python/commit/a519b6f6235146d5bc18f19582f8d4360b9adb64))
* **flows:** hold a tool call that requires confirmation in the framework ([1d0daeb](https://github.com/google/adk-python/commit/1d0daebaf7fbc286d3fad9b03ecf75efa9039d8d))
* **flows:** keep the streaming flags when after_model_callback replaces a response ([39e4538](https://github.com/google/adk-python/commit/39e4538578cc1c07be7bd201c3cda0e34040a271)), closes [#7035](https://github.com/google/adk-python/issues/7035)
* **flows:** only hold a tool call when its confirmation hook answers True ([659e28f](https://github.com/google/adk-python/commit/659e28f1a2cd9f9d9ffe2b662527623a2aa1bbc7))
* **flows:** prune orphaned function calls on interrupted turns ([54274cd](https://github.com/google/adk-python/commit/54274cdeba42a46e4346f48589c84fe2ebcc0da2))
* **flows:** release a tool thread pool when its event loop closes ([7ae1c9b](https://github.com/google/adk-python/commit/7ae1c9b026c84bf8a65921003f71b0f30c8e3166))
* forward tool output schema on the LiteLLM path ([fca7b88](https://github.com/google/adk-python/commit/fca7b887fba94e3b328025cd62e6a77830e0edc5)), closes [#6784](https://github.com/google/adk-python/issues/6784)
* give each LocalEvalService its own default UserSimulatorProvider ([55d47ae](https://github.com/google/adk-python/commit/55d47aea2ef7a495cb6de2358cd0df9f30c83553))
* hide run_skill_script when no skill has a script ([d8d9715](https://github.com/google/adk-python/commit/d8d97159c9fa02a3b3bbce9326674964b8b61ed0)), closes [#6281](https://github.com/google/adk-python/issues/6281)
* honor capability for schema and tools ([e37af14](https://github.com/google/adk-python/commit/e37af1435a7d4424c3d29c6cfd543c46e57a106e)), closes [#6954](https://github.com/google/adk-python/issues/6954)
* instruct models to format code for non-builtin sandbox executors ([8aafa4e](https://github.com/google/adk-python/commit/8aafa4eee65f50337b4f1234b3c7dd7bf51c2242))
* **integrations:** hold sandbox and BigQuery session bindings in process ([094012b](https://github.com/google/adk-python/commit/094012b4509fc136083e6be95f273ad1163fbf2c))
* join streamed reasoning into one thought part per block ([fed0e88](https://github.com/google/adk-python/commit/fed0e88b79eba197630bd0febec05de3bb557f13)), closes [#6895](https://github.com/google/adk-python/issues/6895)
* keep the latest write when parallel tool calls update a state list ([d42a3be](https://github.com/google/adk-python/commit/d42a3bebb847c8b9df3ee02cc011fa7260c8bc89))
* **litellm:** report malformed tool-call arguments instead of raising ([75d84b1](https://github.com/google/adk-python/commit/75d84b11c660e15e5065c43285ca00f73f25a1f7)), closes [#5896](https://github.com/google/adk-python/issues/5896) [#6716](https://github.com/google/adk-python/issues/6716)
* **live:** enqueue background function response events ([7807005](https://github.com/google/adk-python/commit/7807005e8df76644a378bc4e9fa115ecd47421b1))
* **live:** screen live content that does not complete the turn ([58b4fab](https://github.com/google/adk-python/commit/58b4fab2e7821102d203ddf890b10f0c19540fce))
* make shell JSON envelope parsing robust to other stdout garbage ([b07ec93](https://github.com/google/adk-python/commit/b07ec93f8be250d9c28a1633106c76608e18c08a))
* mark a workflow's span failed when one of its nodes failed ([dfc4b58](https://github.com/google/adk-python/commit/dfc4b5803f49033227b49e7f53d291299d304148))
* match a Latin word embedded in unspaced-script text ([13ecc31](https://github.com/google/adk-python/commit/13ecc31aca16ff8d862abcba9ba7974f5fb796fc))
* match tool response by name instead of assuming first part ([f199858](https://github.com/google/adk-python/commit/f199858e0f62c9e2e2aba81410f39c07eccf8619)), closes [#6603](https://github.com/google/adk-python/issues/6603)
* **mcp:** only attach application default credentials over https ([5a018c9](https://github.com/google/adk-python/commit/5a018c9af6a5ec47ef67e95481cd800b36ac1215))
* **mcp:** rebuild a session the server reports it no longer holds ([86ea33d](https://github.com/google/adk-python/commit/86ea33d7e9f0ca0623351ffa7da76d16913b67fa)), closes [#7060](https://github.com/google/adk-python/issues/7060)
* **mcp:** report an api key auth scheme that declares no key location ([d7370e1](https://github.com/google/adk-python/commit/d7370e11c47e156435eeb76ba737800489a94a5b))
* **mcp:** widen MCP bound to admit MCP 2.x ([d64dcfa](https://github.com/google/adk-python/commit/d64dcfaaca7601fe705605f6a8bde7ddb110d701))
* measure the compaction token threshold against the agent's own prompt ([8ccea93](https://github.com/google/adk-python/commit/8ccea93fdaec4faf197dff986b7a12b686dfceca))
* **models:** keep the keys beside "result" in a Claude tool result ([ffb5363](https://github.com/google/adk-python/commit/ffb5363b7e69d3c232e746fdbca20da4db61da23)), closes [#7073](https://github.com/google/adk-python/issues/7073)
* **models:** say how to reach a third-party model when a bare name misses ([87ccdc7](https://github.com/google/adk-python/commit/87ccdc796c8a231ae305fa59556263e8e613d0b6))
* only load artifacts listed for the current session ([cb7c469](https://github.com/google/adk-python/commit/cb7c4691ad23e02670052c54d5c63487f21b4194))
* **openai:** robustly parse Chat Completions responses (finish_reason, usage, choices) ([f28d28a](https://github.com/google/adk-python/commit/f28d28a37cce6e122f436d02edb3b5ee3301c830))
* **openai:** serialize non-string system_instruction ([783463d](https://github.com/google/adk-python/commit/783463dab1ff62b4a804f2eab3ae4c5e3ca9b140))
* **openapi:** handle HTTP 401 in RestApiTool and recover stale OAuth2 credentials ([9511479](https://github.com/google/adk-python/commit/9511479d6b165d012f4d3a539d6e25e061664b69))
* persist sandbox session state and add warning for static sandbox in AgentEngineSandboxCodeExecutor ([73ab76d](https://github.com/google/adk-python/commit/73ab76da459fcf34d6252013b6bd7f5be18a60ce))
* **plugins:** verify BigQuery table readiness once, not on every restart ([a9cf81f](https://github.com/google/adk-python/commit/a9cf81fe2165a7e5727a6867f3546d8217baeb2a)), closes [#7017](https://github.com/google/adk-python/issues/7017)
* preserve Annotated metadata in tool declarations and arg conversion ([2ecb3fb](https://github.com/google/adk-python/commit/2ecb3fb02467bcdcdf1e61c5f64d114261ac5f2c))
* preserve empty text and bytes in memory ([df55309](https://github.com/google/adk-python/commit/df55309744107fc13126179e14298438a541e3f7))
* preserve eval case order when updating ([a6c6623](https://github.com/google/adk-python/commit/a6c6623455e6064f1934bdff260abdc3f6eb5025)), closes [#7220](https://github.com/google/adk-python/issues/7220)
* preserve file artifact creation timestamps ([e93ff5b](https://github.com/google/adk-python/commit/e93ff5b01067ef1401796e6982de3b3740d18170))
* prevent cubic backtracking in _strip_json_code_fence ([3a06a86](https://github.com/google/adk-python/commit/3a06a8621d04fd87aad9f6b078c999c78a96fb66))
* prevent filenames from colliding with version storage ([26e8af2](https://github.com/google/adk-python/commit/26e8af2c0c1fc21c6b4bf08b34d651ece3ce9103))
* raise a clear error when conformance replay recordings are missing ([7a1b49f](https://github.com/google/adk-python/commit/7a1b49fd20ab2dd5c352ce00202dd77c028422eb)), closes [#7128](https://github.com/google/adk-python/issues/7128)
* raise clear ImportError when VertexAiSearchTool bypass needs gcp ([4e73b7d](https://github.com/google/adk-python/commit/4e73b7db48674cbcd9281e13fdb4ca7935cf058b))
* raise InvocationNotFoundError instead of bare ValueError on rewind ([fc16a78](https://github.com/google/adk-python/commit/fc16a78a2bba393f35c9b44025cf45548cdda3f9))
* raise when evaluate or evaluate_eval_set evaluates zero cases ([9dbc2ae](https://github.com/google/adk-python/commit/9dbc2aebd7a0ad88183d166c19398bbbab93d507)), closes [#6951](https://github.com/google/adk-python/issues/6951)
* redact signed URIs and HTTP options from errors and logs ([f425287](https://github.com/google/adk-python/commit/f42528732e73b5f13dc633e1558f0313099b0db9))
* reject num_samples=0 in JudgeModelOptions at construction time ([85e0868](https://github.com/google/adk-python/commit/85e08686f8310e00b2b031a042db86405920b4b2))
* reject parallelism < 1 in LocalEvalService instead of hanging ([9beb524](https://github.com/google/adk-python/commit/9beb52416d6b0c377e58e7e84bdfcd7e88eea415))
* reject reserved path segments with slashes in validate_path_segment ([5e29872](https://github.com/google/adk-python/commit/5e29872b1c29850929e126191af1bd2d8a7f94d1)), closes [#6973](https://github.com/google/adk-python/issues/6973)
* reject the reserved segment 'user' as a session_id ([b8de426](https://github.com/google/adk-python/commit/b8de4266d90fb9a6500079d062561cfdd4cf21d6)), closes [#7063](https://github.com/google/adk-python/issues/7063)
* report an A2A stream that ends before the remote task finishes ([e29ee23](https://github.com/google/adk-python/commit/e29ee231e02ec9e82dc91ee008c8a2798d021f3d)), closes [#6585](https://github.com/google/adk-python/issues/6585)
* report the event fields a session backend cannot store ([3e1ae9f](https://github.com/google/adk-python/commit/3e1ae9faed934532b9f5015578d1b9731817ce60))
* require agent authorship before resume-dispatching a function call ([2c61b84](https://github.com/google/adk-python/commit/2c61b8444a600c8d42ffaad36bdc31dfc31d13ed))
* resolve agent transfers from the caller's declared targets ([1538efe](https://github.com/google/adk-python/commit/1538efe880e88ea264f0b5a9c0f7b799bfd9d131))
* resolve deepcopy recursion in VertexAiCodeExecutor ([b3fe92b](https://github.com/google/adk-python/commit/b3fe92b38aa281efd083068ec5fc042f1011f1a2)), closes [#1762](https://github.com/google/adk-python/issues/1762)
* restore oldest-first Redis session lists ([6863842](https://github.com/google/adk-python/commit/686384246751dfa4703657f4730f02194fc028a9))
* run on_event callbacks for before_run early exits ([63e918a](https://github.com/google/adk-python/commit/63e918a31304802b3d466c6841f0aef67241c45a)), closes [#7007](https://github.com/google/adk-python/issues/7007)
* **runners:** ensure after_run plugin callback executes on early generator exit ([ba89707](https://github.com/google/adk-python/commit/ba89707af49279b14e36315b4565c70149846f9e))
* **runners:** keep the caller's OpenTelemetry trace in sync Runner.run ([1760b06](https://github.com/google/adk-python/commit/1760b06a903de4bb93cedadd15209a7911e43b2a))
* **sessions:** avoid redundant temp state processing in append_event and exclude temp keys from rewind delta ([52b247e](https://github.com/google/adk-python/commit/52b247eccabb8b2f16bbc795fe8a35670aa2f371))
* **sessions:** avoid runtime index drop and guard concurrent index creation ([cd6dee0](https://github.com/google/adk-python/commit/cd6dee0503f5d5495125e5b023e64230f8da4b7b))
* **sessions:** disable pool reset on return for StaticPool in DatabaseSessionService ([8ff50af](https://github.com/google/adk-python/commit/8ff50af7f0135b758b84e1c6c4405443f3464f5a))
* **sessions:** report the redacted database URL when migration cannot connect ([1579927](https://github.com/google/adk-python/commit/1579927e5eb95593d5b0a56f1e272fec1f9dc892))
* **sessions:** stop get_user_state aliasing stored user state ([dd96b81](https://github.com/google/adk-python/commit/dd96b811ea1abd2febfac781ad4f4b43efd8e36f))
* skip unreplayable function responses ([7dcfade](https://github.com/google/adk-python/commit/7dcfadedafc280c1c5e07ddf0a7b3fe30b00c107))
* stop a re-emitted output echo from reordering the replay sequence ([4b819ab](https://github.com/google/adk-python/commit/4b819ab7f28c639cff79991a3ea095a16d715e81)), closes [#7027](https://github.com/google/adk-python/issues/7027)
* stop Agent import loading authlib ([ac1d51b](https://github.com/google/adk-python/commit/ac1d51b456c8f5666c480b472c7abc25794306c7))
* stop background tools before the transfer delay ([c79f60f](https://github.com/google/adk-python/commit/c79f60f8acf572e9c45a611bc3726b27420d220b)), closes [#7006](https://github.com/google/adk-python/issues/7006)
* stop internal Agent Config subclassing from warning on plain imports ([3699fad](https://github.com/google/adk-python/commit/3699fad41bfecdd3ef8c43116ed7de89c339692b)), closes [#6968](https://github.com/google/adk-python/issues/6968)
* stop probing for mTLS credentials on every MCP session ([dfc96d0](https://github.com/google/adk-python/commit/dfc96d0aa9bca3af3bd788eeebc0485b4f7d8fac))
* stop retaining spans on servers with no debug trace endpoint ([7560061](https://github.com/google/adk-python/commit/756006175ade27be2de7530c415db22fa9f5f82f)), closes [#6915](https://github.com/google/adk-python/issues/6915)
* stop returned sessions aliasing scoped state ([557643b](https://github.com/google/adk-python/commit/557643bb32bd53696b1697d0bc9508ecbe3a27c6))
* stop the multimodal tool results plugin sending media twice ([a4d97b7](https://github.com/google/adk-python/commit/a4d97b7c3cf476202ba4adf65263e714fcbb1257))
* StreamingResponseAggregator drops/duplicates function calls in streaming mode ([3cf4ce2](https://github.com/google/adk-python/commit/3cf4ce2b8d6d1523903e32f772f9112e09ac0c74)), closes [#6566](https://github.com/google/adk-python/issues/6566)
* support openapi basic auth ([f2fe475](https://github.com/google/adk-python/commit/f2fe4759f1648439663a1f3b06957fd362c12a7f)), closes [#5492](https://github.com/google/adk-python/issues/5492)
* **telemetry:** make `google.adk.telemetry.tracing` importable on OpenTelemetry 1.39; `google.adk.telemetry.google_cloud` still needs a newer OpenTelemetry ([8f1323a](https://github.com/google/adk-python/commit/8f1323ae6daf5cc0a7e12f856fd56e5fa8c9c81b))
* **telemetry:** record only the function responses on a merged tool span ([42358b1](https://github.com/google/adk-python/commit/42358b156bd4862c1f86261ed76bf3ca7462fd2b))
* **tools:** clarify google_search_agent instruction to use built-in grounding ([56d3cae](https://github.com/google/adk-python/commit/56d3caece5229d912faa1dbed7770f695a467dec))
* **tools:** propagate outer CancelledError in stop_streaming ([b8836bd](https://github.com/google/adk-python/commit/b8836bdb22d75438640ec11edffec2b66bb9a30b))
* **tools:** stop ExampleTool crashing a live run that opens with no message ([1414fac](https://github.com/google/adk-python/commit/1414fac5474b685e3a1b297c71cf7468ed322867))
* trace tool calls under the agent, not under the model call ([83d966c](https://github.com/google/adk-python/commit/83d966cfe8b31a12629a10fca23a6c462083cfe6))
* use full query text and own logger in PreloadMemoryTool ([82687cf](https://github.com/google/adk-python/commit/82687cf819f64531376da9062dfa3cb2e5beff9e)), closes [#6884](https://github.com/google/adk-python/issues/6884)
* validate and coerce function tool argument types (opt-in; enable with `ADK_ENABLE_FUNCTION_TOOL_ARG_VALIDATION=1`) ([24b37e1](https://github.com/google/adk-python/commit/24b37e1716582bd3e6b0d27d142f70707d960bb4)), closes [#4612](https://github.com/google/adk-python/issues/4612)
* validate the detect_anomalies target data subquery ([60d0a9b](https://github.com/google/adk-python/commit/60d0a9bfb48e0b14691e40111a3bd79b07897a2c))
* **workflow:** allow resolved interrupts to resume without rerun_on_resume ([307d041](https://github.com/google/adk-python/commit/307d0413b4ab9a0458e3a9c5d2177af466a1eb74))
* **workflow:** do not leak descendant isolation_scope to parent in _reconstruct_node_states ([2fb34bc](https://github.com/google/adk-python/commit/2fb34bc69be71c1ec121e37bf5e87d0f64b4e96d))
* **workflow:** isolate peer task-mode agents in dynamic run_node calls ([ddbb59e](https://github.com/google/adk-python/commit/ddbb59ebf5306b5b09de01f35de20aa42af43078))
* **workflow:** resume interrupted agent transfers in static workflows ([97aefd8](https://github.com/google/adk-python/commit/97aefd87d315242d5060ad30fc6d33ca7ea77ee6))
* **workflow:** unwrap Content inputs for parallel workers after START ([e80677d](https://github.com/google/adk-python/commit/e80677dda26fd21450f6a23d46bef49a4003d1fb))


### Performance Improvements

* **sessions:** add id DESC to events composite index to eliminate filesort ([a00a2a9](https://github.com/google/adk-python/commit/a00a2a9771e3e48831457ce2b5038aa8fef17706))
* **sessions:** cache TypeAdapter in State and support key iteration ([220acfd](https://github.com/google/adk-python/commit/220acfdec67477c69941001be38b4d57444e35f3))
* trace a streamed model call once instead of once per chunk ([733162e](https://github.com/google/adk-python/commit/733162e8f848c79ca6c7981240ac294e1da914fe))
* **workflow:** avoid redundant event scans in _apply_rewinds and NodeRunner ([f5ef8df](https://github.com/google/adk-python/commit/f5ef8dfd52d44097acfd33aac3af38ec92766117))


### Documentation

* add unit guides for the third-party and cloud integrations ([3d70669](https://github.com/google/adk-python/commit/3d70669b4218ba10d6546ffff00f00008f0f4878))
* **agents:** add BaseAgent unit guide ([7d42b78](https://github.com/google/adk-python/commit/7d42b784f93653f09c1bfeea18d394ac27b6b8ec))
* **agents:** add Context unit guide ([c03683a](https://github.com/google/adk-python/commit/c03683a83853f03cb4dca830bc4a544787ec0d1a))
* **agents:** add InvocationContext unit guide ([5f3b6f0](https://github.com/google/adk-python/commit/5f3b6f0624cf43211eac30adecee194ce11847fe))
* **agents:** add LlmAgent unit guide ([75bf1dc](https://github.com/google/adk-python/commit/75bf1dc8a04e102e7cd84c4db06cc7f7308869aa))
* **apps:** describe the sliding-window compaction that actually runs ([9cb4eed](https://github.com/google/adk-python/commit/9cb4eedc95eab37ea41323688ae86a9361e1e979))
* list the twenty guides missing from the guides index ([68204f5](https://github.com/google/adk-python/commit/68204f58ec316acecc1e1e03846236e8a51f5e98))
* make the single-turn node example runnable ([06d4895](https://github.com/google/adk-python/commit/06d4895ba5a051b606127010ca3961832734faf5))
* **models:** add developer unit guide for ServiceTier ([0636bf8](https://github.com/google/adk-python/commit/0636bf8b3966536a3249903bf97e4a8995930a2a))
* **readme:** point the eval quickstart at a sample that exists ([c3f4e63](https://github.com/google/adk-python/commit/c3f4e63f1e0819631c3ff23eceb3102d3b734e7f))
* remove the 1.x breaking-changes callout from the README ([d69f995](https://github.com/google/adk-python/commit/d69f995c2e7ba7676bce3036c58d6b9cfbd60de2))
* rewrite the unit guides for the third-party integrations ([1addd76](https://github.com/google/adk-python/commit/1addd76c594f2eb05b9e5ba1c1860d8b08d08ed9))
* **samples:** add a Grok-4.6-on-Vertex sample using the labs OpenAI model ([40a0a8d](https://github.com/google/adk-python/commit/40a0a8d1368b4c17b1bbf48f76228983b36d0ecf))
* **samples:** add a hello-world OpenAI sample using the labs OpenAI model ([eb1a002](https://github.com/google/adk-python/commit/eb1a00245cd1fff0af34794e349fc65e40d2847b))
* **sessions:** document runtime DDL and concurrent index guidelines ([0002760](https://github.com/google/adk-python/commit/0002760ffd57b979cd0725f199bd1742d82ba6a3))
* **telemetry:** name the real do_not_elide parameter ([c7ae45a](https://github.com/google/adk-python/commit/c7ae45ad1aea4598549aa222021635f698921ea0))
* **workflow:** index BaseNode unit guide in documentation ([692b40a](https://github.com/google/adk-python/commit/692b40aed6fe0f88c7ffeedbc115f540605ae13e))


</details>

---

> **Source** [google/adk-python](https://github.com/google/adk-python) · `v2.10.0` · 2026-09-25 · [upstream release](https://github.com/google/adk-python/releases/tag/v2.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
