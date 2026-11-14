---
title: "adk-python v2.12.0"
project: "adk-python"
repo: "google/adk-python"
tag: "v2.12.0"
version: "v2.12.0"
published: "2026-10-13"
type: "minor"
lang: "en"
summary: "This release enhances execution performance in long sessions while introducing finer control over tool execution, workflow approvals, and deployment security."
---

# adk-python v2.12.0

## [2.12.0](https://github.com/google/adk-python/compare/v2.11.0...v2.12.0) (2026-10-13)


### Highlights

This release enhances execution performance in long sessions while introducing finer control over tool execution, workflow approvals, and deployment security.

* **Performance**: Cut time to first model request by 40% in long sessions. ([1754b3e](https://github.com/google/adk-python/commit/1754b3eeb6cdb2c16e3b30619a12066623df132e))
* **Tools**: Intercept and filter tool outputs before returning them to the model using `after_tool_callback`. ([fdda17c](https://github.com/google/adk-python/commit/fdda17cbcfec35a1cca1638b028c1af98e893eae))
* **Workflows**: Require human confirmation before executing workflow nodes via `require_confirmation`. ([988fd1a](https://github.com/google/adk-python/commit/988fd1a73d174f9e3acb6d2e1bec102f9ec02238))
* **Deployment**: Deploy agents to Agent Engine using dedicated custom service accounts. ([629e119](https://github.com/google/adk-python/commit/629e11996ebb544ea6b0f652e413955b2dfedeb6))
* **Python 3.15**: Install and run ADK on Python 3.15. ([75aef1e](https://github.com/google/adk-python/commit/75aef1ec133c92c9e35f0575392ef5c4e3910b31))

<details>
<summary>All changes</summary>

### Features

* add --state_file option to adk run ([c390266](https://github.com/google/adk-python/commit/c390266b51204a1bc59f6671d2674ba6ca1e79ad)), closes [#7083](https://github.com/google/adk-python/issues/7083)
* add after_tool_callback to screen tool output ([fdda17c](https://github.com/google/adk-python/commit/fdda17cbcfec35a1cca1638b028c1af98e893eae)), closes [#6966](https://github.com/google/adk-python/issues/6966)
* add skill-level security support to AgentCardBuilder ([79a7e49](https://github.com/google/adk-python/commit/79a7e49cd656c1650945e87a955a096c06c09494))
* **agents:** adapt BaseNode in tool consumers and preserve ToolUnion compatibility ([8350c14](https://github.com/google/adk-python/commit/8350c143da8837426f18ad75027984fdaacc856b))
* **antigravity:** preserve model thinking parts, client tool responses, and sub-agent hierarchy in ADK events ([fac77be](https://github.com/google/adk-python/commit/fac77be5d32cf8b07db0162fdd73f5f9155f60bf))
* **cli:** source the agent builder assistant's ADK knowledge from the installed package ([ab9fffc](https://github.com/google/adk-python/commit/ab9fffc9e000c2e5e417f5a66c14cb53250f1511))
* continue with de-identified text when only SDP matched ([315c3dd](https://github.com/google/adk-python/commit/315c3dd2cd2710b3ccc2fbb88c22125938d89adf)), closes [#7369](https://github.com/google/adk-python/issues/7369)
* encrypt google credential in session ([42a17a9](https://github.com/google/adk-python/commit/42a17a9fd2f14d466f8903f2ba776c90e871455f))
* **eval:** report the efficiency metrics for evals run from the Dev UI ([49bf291](https://github.com/google/adk-python/commit/49bf291ce63c4756a45dce2f9070053e7ac212ff))
* install lightweight Gemini Enterprise (Agent Platform) SDK without the GAPIC stack ([d92735d](https://github.com/google/adk-python/commit/d92735dc71700905a4e72a8d2e5c5ae8ce054a04))
* **live:** add an internal model for Live background tool calls ([3f25ab5](https://github.com/google/adk-python/commit/3f25ab50227104338f79df3bab6390b0f597e478))
* **live:** implement CascadeLive model & sample ([128faab](https://github.com/google/adk-python/commit/128faabb6dddacf26e029aa8c28c903c3a7a6b61))
* migrate ADK to google-cloud-aiplatform v2.2 (agentplatform) ([77d4dcd](https://github.com/google/adk-python/commit/77d4dcd0aa8c7ff841160f3c0db3754c347dfc1f))
* migrate VertexAiExampleStore and VertexAiRagRetrieval away from vertexai.preview ([9e411be](https://github.com/google/adk-python/commit/9e411be81c5ad9e28ea892362c2ec4f76982f680))
* persist skill-script outputs as artifacts ([beaef0d](https://github.com/google/adk-python/commit/beaef0d807e6759489afd72995451486c0a4cca3)), closes [#5579](https://github.com/google/adk-python/issues/5579)
* **plugins:** add on_schema_error and on_schema_ready callback hooks to BigQueryLoggerConfig ([4d31fa9](https://github.com/google/adk-python/commit/4d31fa98b03efa2cabfaa05d20039e286db06f86))
* **plugins:** enrich AGENT_STARTING metadata in BigQueryAgentAnalyticsPlugin ([c32ad3b](https://github.com/google/adk-python/commit/c32ad3bdb4b6f928d764999654ce012187a81faf))
* print next steps after adk create ([06b7847](https://github.com/google/adk-python/commit/06b78477a5fab38c8a9094afa078c9bcf7ef9230))
* resume Gemini generations paused with a continuation token ([b3cbb47](https://github.com/google/adk-python/commit/b3cbb4727727f5bc60e0161e850ce6c105cca952))
* **skills:** migrate GCPSkillRegistry.search_skills from GET to POST ([e9464ca](https://github.com/google/adk-python/commit/e9464ca8ece72fdedabd0ec3591ebbf8f8c0443d))
* support custom service accounts for agent engine deploy ([629e119](https://github.com/google/adk-python/commit/629e11996ebb544ea6b0f652e413955b2dfedeb6)), closes [#2951](https://github.com/google/adk-python/issues/2951)
* **telemetry:** name skill tool spans after the skill they touch ([c11060c](https://github.com/google/adk-python/commit/c11060cca66c880050091064fb1b8b12734e802f))
* **tools:** run a sync FunctionNode tool's callable on the tool thread pool ([71d5ed7](https://github.com/google/adk-python/commit/71d5ed77382865c419a57692d68c296866efe2e5))
* **tools:** run non-live generator FunctionTools via FunctionNode ([0ee891a](https://github.com/google/adk-python/commit/0ee891a53b3c45908d3a6abcc44e165840159e5c))
* **tools:** tag model_consult advisor requests with client label ([068610f](https://github.com/google/adk-python/commit/068610f272ecfe3d235ea5995e5168609d41d94b))
* user feedback survey workflow ([f5efa2a](https://github.com/google/adk-python/commit/f5efa2a3a229a2bc85cf765fe859a61c030b6bf0))
* **vmaas:** add sandbox lifecycle helpers to the sandbox manager ([46dff4b](https://github.com/google/adk-python/commit/46dff4b904a387100c64760edf09bc69da8cbba2))
* **vmaas:** find or create sandbox templates per container config ([650394f](https://github.com/google/adk-python/commit/650394f06817acf04a1ee7572da18c57d5d8abc5))
* **workflow:** run a sync generator FunctionNode's steps on the tool thread pool ([8112f4a](https://github.com/google/adk-python/commit/8112f4a885f441f1f4b32e5f7d33fb13a75188ae))
* **workflow:** support require_confirmation in `@node` and FunctionNode ([988fd1a](https://github.com/google/adk-python/commit/988fd1a73d174f9e3acb6d2e1bec102f9ec02238))
* **workflow:** support scalar auto-boxing for ToolNode input ([873eed5](https://github.com/google/adk-python/commit/873eed5f102003c80368e19a3c46637d4075f04d))
* **workflow:** support task sub-agent delegation and resume in task-mode wrapper ([8d71635](https://github.com/google/adk-python/commit/8d716351ec9ec5fb7a51e4c62cac19458906560d))
* **workflow:** support tool authentication requests and credential resume in _ToolNode ([c001a6c](https://github.com/google/adk-python/commit/c001a6cd817bd2ada095a3698642a98ab9aa79ba))


### Bug Fixes

* **a2a:** support tool_call and tool_response in A2A part converter ([a334bac](https://github.com/google/adk-python/commit/a334bacaae1ec0e116c74eb275fb3128ee5f913b))
* add JSON-tolerant LiteLLM tool call argument parsing ([a01b226](https://github.com/google/adk-python/commit/a01b226845b3343f788a7df10e337cad412f544b))
* add namespaced mode for forwarded A2A session context_id ([c213adf](https://github.com/google/adk-python/commit/c213adf02d491726037b9dcceecbc4106dbd2aa6)), closes [#7305](https://github.com/google/adk-python/issues/7305)
* agent engine memory service with A2A endpoint activated ([d919ec0](https://github.com/google/adk-python/commit/d919ec040f7f7fd462b3239b5907158965a6eceb)), closes [#3458](https://github.com/google/adk-python/issues/3458)
* **agents:** centralize resume routing decision and fix sub-branch/callback/abort routing ([8a43244](https://github.com/google/adk-python/commit/8a43244db72815d593f5803e5c275f645b0500e3))
* **agents:** route user FunctionResponses to sub-agents when is_resumable is False ([86a47f6](https://github.com/google/adk-python/commit/86a47f6974bae349a5c9ea15a74a4b450614ae42))
* allow built-in search tools with sub-agents on Gemini 3+ ([6d52a23](https://github.com/google/adk-python/commit/6d52a23b842f912bae7d6c331d8b453cd72d44ad))
* allow OIDC token exchange without client_secret ([4b1e004](https://github.com/google/adk-python/commit/4b1e00450199a7bd15c982911e33c7b5b4312303)), closes [#2256](https://github.com/google/adk-python/issues/2256)
* **antigravity:** harden parallel tool call IDs, start_subagent resolution, and thinking types ([1e1ed51](https://github.com/google/adk-python/commit/1e1ed512594bd0563184b7a1728f84775200cc88))
* **artifacts:** isolate InMemoryArtifactService entries from caller mutation ([cb8ced5](https://github.com/google/adk-python/commit/cb8ced5f52e125fec8f885508565046427b5a926))
* avoid mutating caller Content role in live send_to_model ([12b4924](https://github.com/google/adk-python/commit/12b4924a739aa0de2afcfa50849b5cdaa54f456d))
* **bigquery:** attribute BigQuery and Dataplex clients to active telemetry surface ([6d6828f](https://github.com/google/adk-python/commit/6d6828f8792805b4f3607ef35ff839f9c6b9b73e))
* build the rewind tombstone part once instead of on every check ([11584d9](https://github.com/google/adk-python/commit/11584d945043f3553adcfee99c7e2bfb0ff2112d))
* cancel and await parallel tool tasks on BaseException and GeneratorExit ([a344350](https://github.com/google/adk-python/commit/a3443505203ecdcaa1141434ef0ecd0006b95f31))
* cancel sibling tools on child-originated cancellation ([1ab2fe8](https://github.com/google/adk-python/commit/1ab2fe8e4921bd45312897371f98d3903d80e028)), closes [#7172](https://github.com/google/adk-python/issues/7172)
* check where a builder app name imports from ([8c5b3df](https://github.com/google/adk-python/commit/8c5b3df4a70a89bb635b1f606aa38ea43a6ae771))
* clear 23 strict mypy errors in evaluation and optimization ([9d8e602](https://github.com/google/adk-python/commit/9d8e602da4429d4726563b1bbffbb46ba9c34d57))
* **cli:** restrict mutating /dev and agent builder endpoints to local clients by default ([97f9379](https://github.com/google/adk-python/commit/97f9379b5133c699cb5ca06deb0f953ce45de568))
* close remaining plugins when plugin close is cancelled ([f9558b3](https://github.com/google/adk-python/commit/f9558b36e8d70cb69978cd96b7abcd310691d125))
* count ID-less responses when resuming parallel calls ([531f410](https://github.com/google/adk-python/commit/531f4101243554f9544446089ca27fe2f10cea4f)), closes [#7387](https://github.com/google/adk-python/issues/7387)
* decode error bodies with the declared charset ([962fe9b](https://github.com/google/adk-python/commit/962fe9bdad6f8d91c03d53ff928de7c409c7251a)), closes [#7206](https://github.com/google/adk-python/issues/7206)
* decode url-safe base64 strictly so malformed input is rejected ([c2ddeef](https://github.com/google/adk-python/commit/c2ddeef5d3dc4b42766dcd034e1447b0f5d1b632))
* default RubricContent.text_property to None so rubrics save ([7d8c950](https://github.com/google/adk-python/commit/7d8c9502f924ed5e7a1ab00dc1f5a603e858abc3))
* **docs:** fix broken code example rendering in the BaseLlm.generate_content_async docs ([ccd868a](https://github.com/google/adk-python/commit/ccd868a3986a9bbc8683640eb33f2d9f1d58ff7a))
* don't forward the caller's abort signal to AgentTool runs on another event loop ([6bbef14](https://github.com/google/adk-python/commit/6bbef14ffa3beadfb812cc57bf83e1eb68800152))
* drop a flushed live audio cache that could not be written ([1da622c](https://github.com/google/adk-python/commit/1da622c859f058fc57d4d765636bd796ccd14d3a))
* drop MIME parameters from saved live audio filenames ([8c513c9](https://github.com/google/adk-python/commit/8c513c9fdf58a047042cc75c4e38f87cf91729cc))
* **eval:** generate Agent Engine-compliant eval session IDs ([4368d68](https://github.com/google/adk-python/commit/4368d6831c4c8227656ef3f788f58645fb28d696)), closes [#6683](https://github.com/google/adk-python/issues/6683)
* **evaluation:** disable AFC in all LlmAsJudge judge requests ([cc339e0](https://github.com/google/adk-python/commit/cc339e08083119a6b0eda610288125e50ea205ed)), closes [#7146](https://github.com/google/adk-python/issues/7146)
* **evaluation:** stop loading deprecated Vertex RAG on eval import ([6854b88](https://github.com/google/adk-python/commit/6854b88272f84a6ca9b1e4dec979a6476a00e0d7)), closes [#7415](https://github.com/google/adk-python/issues/7415)
* exclude thoughts from typed workflow node inputs ([2d43701](https://github.com/google/adk-python/commit/2d4370170cc2d773ebe5047108a9e5d2b971ca4a))
* expose trigger delivery id so tools can detect redeliveries ([74cd0ef](https://github.com/google/adk-python/commit/74cd0ef30c113a5388485ea95851ef7d8d3d95a0)), closes [#7322](https://github.com/google/adk-python/issues/7322)
* extract bucket name from eval_storage_uri when a path is given ([490cfd7](https://github.com/google/adk-python/commit/490cfd75239a252ff63394b0e34afd61c0f996f5)), closes [#6881](https://github.com/google/adk-python/issues/6881)
* **flows:** keep tool sub-branch events out of the calling agent's LLM context ([2e06fdc](https://github.com/google/adk-python/commit/2e06fdc81957b439cec8d860a97feefaf04f3f68))
* **flows:** replay sub-branch interrupted tool calls when is_resumable is False ([51dbf89](https://github.com/google/adk-python/commit/51dbf89936f70a17281eba554d9b176c94da3865))
* **flows:** unify decide_step_resume across resumable and non-resumable invocations ([b591910](https://github.com/google/adk-python/commit/b5919107e5a860bb5bbe5bf54645683c2d1eb4a2))
* format code execution and capture custom metadata in BigQuery Agent Analytics telemetry ([c4b9eaa](https://github.com/google/adk-python/commit/c4b9eaa254b5c6336a66e7e40675d2aeba0e27c8))
* give failed migrations and deploy usage errors the right exit code ([e896ecb](https://github.com/google/adk-python/commit/e896ecbb9f103ee23dd6165007a4a14692ef4d54))
* harden SetModelResponseTool fallback to prevent infinite loops ([d185ca5](https://github.com/google/adk-python/commit/d185ca5ac50f493cdcb9552d2ab4e9d1e30a1b34))
* hide thoughts from nonverbose debug output ([53cb763](https://github.com/google/adk-python/commit/53cb7638f30e748456c1a269a8fd421aa033ecfb))
* honor auto_create_session in the /run_live websocket endpoint ([4912a08](https://github.com/google/adk-python/commit/4912a0804d2ba82bc3ae44aa81ddc6333466f3cd))
* honor explicit None for audio transcription ([c0f92f8](https://github.com/google/adk-python/commit/c0f92f8964eff431eca46234fe3d83bd2a67bde1)), closes [#6827](https://github.com/google/adk-python/issues/6827)
* include grounding metadata in hallucinations judge context ([e5ee44e](https://github.com/google/adk-python/commit/e5ee44e4110b7345d757b41ef18378aa3155d4f9)), closes [#7157](https://github.com/google/adk-python/issues/7157)
* inherit usage_metadata when after_model_callback replaces response ([8e386a9](https://github.com/google/adk-python/commit/8e386a9242edb427e6bee2faafb2052196b8ff94)), closes [#7451](https://github.com/google/adk-python/issues/7451)
* inject artifact text, not the Part repr, into instructions ([cd5814e](https://github.com/google/adk-python/commit/cd5814edee2580522c20e86361525b235460ccf7))
* install the exporters the cloud telemetry flags need ([e54eba0](https://github.com/google/adk-python/commit/e54eba050d6779032257c85688fbfb95d94eb80a))
* isolate dev deploy log and staging paths per invocation ([25b8a18](https://github.com/google/adk-python/commit/25b8a181231c11667f762a43255bc21fcd59f79f))
* keep auth credentials out of the caller's tool args ([d8483a0](https://github.com/google/adk-python/commit/d8483a098760a6c8bfe21a462e67ed9d1e6f9a29)), closes [#7162](https://github.com/google/adk-python/issues/7162)
* keep every text part of an assistant message ([b158f9f](https://github.com/google/adk-python/commit/b158f9f84ecb68fdab6b545986450fe4c45d24d6))
* keep GCS bookkeeping keys out of custom_metadata ([1094775](https://github.com/google/adk-python/commit/10947756c689b65a1a7ed75803ff99f4d5cc0a1c))
* keep Gemini thought signatures on streamed LiteLlm tool calls ([3abea3e](https://github.com/google/adk-python/commit/3abea3e18df5ed302ebaef26dba7d579a38453ea)), closes [#7438](https://github.com/google/adk-python/issues/7438)
* keep proxied file uploads inside the proxy ([24f2a2e](https://github.com/google/adk-python/commit/24f2a2eeb0e2ac65317f631ab3c312e937e75170)), closes [#6722](https://github.com/google/adk-python/issues/6722)
* keep rejected saves out of in-memory artifact catalog ([b1a3b7c](https://github.com/google/adk-python/commit/b1a3b7c9b41c14487a681fb6610b91cd76775a46)), closes [#7411](https://github.com/google/adk-python/issues/7411)
* keep SQLite session state numbers exact across updates ([13787a5](https://github.com/google/adk-python/commit/13787a5bd43fcc7306f5b14dc87ff633bd6e7ea2))
* keep streamed artifacts when a Task snapshot arrives mid-stream ([71c4fd7](https://github.com/google/adk-python/commit/71c4fd799f3072e53367b62e132cf1a7a555b58c)), closes [#6680](https://github.com/google/adk-python/issues/6680)
* keep text sent alongside a function response in ApigeeLlm ([f5db310](https://github.com/google/adk-python/commit/f5db3104c51b76a0dea9aafbe2ffc702d2523892)), closes [#7475](https://github.com/google/adk-python/issues/7475)
* **live:** drop internal artifact parts from live history replay ([f03d23d](https://github.com/google/adk-python/commit/f03d23dbb6f01ab41982d88d3e272c10a6a3122d))
* **live:** invoke before_run and after_run plugin callbacks in run_node_live ([8a93ce9](https://github.com/google/adk-python/commit/8a93ce90fda3ed330fe8499db98f2dea04067c1b))
* load artifacts removed by a rewind as None in file and GCS services ([a116c22](https://github.com/google/adk-python/commit/a116c22580c42a3240739dbba995d9b49bf30f07)), closes [#7482](https://github.com/google/adk-python/issues/7482)
* load custom services from the agent folder in single agent mode ([f5b6b08](https://github.com/google/adk-python/commit/f5b6b0893338f2e1c025cb37792185656719cb1e))
* make `adk eval --print_detailed_results` invocation details readable ([69c58ea](https://github.com/google/adk-python/commit/69c58ea73adfcbe26cc1d17a5270a700c9ca20fb))
* make the firestore session and memory services usable ([b0ffa24](https://github.com/google/adk-python/commit/b0ffa24abfc63c4f291535fb449258aa28be49d5)), closes [#7192](https://github.com/google/adk-python/issues/7192)
* match ExecuteBashTool allowlist on whole shell tokens ([2a2364f](https://github.com/google/adk-python/commit/2a2364fd71faeaa64bd5216e1cf593ede3654c25))
* **mcp:** respect proxy environment variables in mTLS transport ([3d11f9f](https://github.com/google/adk-python/commit/3d11f9fe7990b909db8f954923af3a5537797aba))
* **memory:** skip credential exchange events when adding to Memory Bank ([56a6842](https://github.com/google/adk-python/commit/56a6842660053e857c5478f7cba127f5be6b4735))
* name the missing pandas package in VertexAiExampleStore ([6a38283](https://github.com/google/adk-python/commit/6a3828325b6f9feb429aa9e73e86837ad9acecdd))
* only enable the built-in agents when adk web is bound to loopback ([eca36ac](https://github.com/google/adk-python/commit/eca36ac916ae969366cd2e5e7db74c8b3a8a7411))
* preserve append order for tied timestamps in SqliteSessionService ([f33343f](https://github.com/google/adk-python/commit/f33343fbfe7bac9d99b977bf3f59b51908ab996e))
* preserve context for invalid byte encodings in safe_json_loads ([c5dca19](https://github.com/google/adk-python/commit/c5dca193f1e385226d69087724061810cf43aebd))
* preserve field constraints in state validation ([cc88d05](https://github.com/google/adk-python/commit/cc88d058363fffba28055957a704535549a288e1))
* preserve history after filtered Redis reads ([233e64c](https://github.com/google/adk-python/commit/233e64c59f87b5c9ad4d3ddfb08e77e5c2a7c4ef))
* raise SessionNotFoundError when appending to unknown Redis session ([7d10709](https://github.com/google/adk-python/commit/7d1070902627159d8ad071f026e71d7a1143b984))
* raise ValueError instead of assert in Gemma model check ([608ce2d](https://github.com/google/adk-python/commit/608ce2dd5a07e15e1804965bd15249a4bb93c938)), closes [#7355](https://github.com/google/adk-python/issues/7355)
* read and write CLI text files as UTF-8 ([d4e092e](https://github.com/google/adk-python/commit/d4e092e99703a8c8b6898b3d294778241a28009c))
* record the artifact version the service assigns on rewind ([ecb2230](https://github.com/google/adk-python/commit/ecb22308cd0d8a874a4ad6dc51c9d7c5efb64864))
* redact non-oauth credential secrets from the auth request event ([82af2ef](https://github.com/google/adk-python/commit/82af2eff369165bbea95bb0fbba72320dc25f929))
* refuse the reserved tool name set_model_response ([cc5d516](https://github.com/google/adk-python/commit/cc5d5164faf520b9f30ca7edf18a5751df419fc0)), closes [#7144](https://github.com/google/adk-python/issues/7144)
* request the cloud-platform scope for GCP OTel exporters ([6be386d](https://github.com/google/adk-python/commit/6be386d8939c4898aa2c0fc8a1f7cb34e7df7904))
* require a boolean email_verified claim in GoogleOidcVerifier ([4434070](https://github.com/google/adk-python/commit/44340704efdf6cb40b90d1efa3078ae6a830b0e5)), closes [#7289](https://github.com/google/adk-python/issues/7289)
* require oidc audience when trigger endpoints are enabled ([b3ccb29](https://github.com/google/adk-python/commit/b3ccb295ac09514b7f676ef150a349b36d2c3e41))
* resume paused A2A tasks on ordinary user replies ([539a0d0](https://github.com/google/adk-python/commit/539a0d071c4fe6b8bd3ae9bda3a53e14ea80aeb8)), closes [#4934](https://github.com/google/adk-python/issues/4934)
* retain sessions for SQLite memory URIs ([51a20e2](https://github.com/google/adk-python/commit/51a20e24918c8d4b2b05909f408fc1c79f80020a)), closes [#7405](https://github.com/google/adk-python/issues/7405)
* return 403, not 500, for built-in agents on a non-loopback adk web ([7e4407f](https://github.com/google/adk-python/commit/7e4407f0ffdab4164540e4959174fc758b1039d4))
* return 500 instead of 404 when an agent fails to load ([65ab126](https://github.com/google/adk-python/commit/65ab1261b047b0697b460d463e60f16e6ffd8a0b))
* return long_running_tool_ids from message and artifact converters ([7099ce4](https://github.com/google/adk-python/commit/7099ce45fa7b55d708c96e1696aa03f15067756d)), closes [#6988](https://github.com/google/adk-python/issues/6988)
* return structured error when RestApiTool is missing required path param ([b930828](https://github.com/google/adk-python/commit/b9308284a35ead7ce6abcdc0912e4c580c263a7f)), closes [#7282](https://github.com/google/adk-python/issues/7282)
* reuse Vertex AI clients per event loop in session and memory ([3f09197](https://github.com/google/adk-python/commit/3f09197ac3d26d65f7d6bca417295201a6c5efd7)), closes [#7353](https://github.com/google/adk-python/issues/7353)
* revert the 25-round tool cap on agents with output_schema and tools ([e58293a](https://github.com/google/adk-python/commit/e58293ac63b7433c7554fb141bbf5d48470120e5))
* run a confirmed tool once per approval ([bfdeb4a](https://github.com/google/adk-python/commit/bfdeb4a1ed74b410b2e8cdc18b5441046e23a150)), closes [#7434](https://github.com/google/adk-python/issues/7434)
* run after_run_callback when an aborted run is cancelled ([d806a36](https://github.com/google/adk-python/commit/d806a36f5988530db8bf130418d9736feac37c26))
* **runners:** resolve invocation_id from FunctionResponse when is_resumable is False ([ea656b0](https://github.com/google/adk-python/commit/ea656b03d3f3c6dd041ba8e3f65d612017592c42))
* **samples:** use behavior instead of response_scheduling in non-blocking tool sample ([ff75783](https://github.com/google/adk-python/commit/ff75783884d4b7d0bbabbe3edec746a78f047b8e))
* sanitize generated session IDs ([3f474f4](https://github.com/google/adk-python/commit/3f474f4a4dd7ccfa3d419d0bb020619e4030fb2b)), closes [#6435](https://github.com/google/adk-python/issues/6435)
* **scripts:** require a unit guide only for re-exported modules ([1cd0a2a](https://github.com/google/adk-python/commit/1cd0a2ae21875484eaa6ad42a794f98977327976))
* send role 'tool' for Gemma-4 on OpenAI-compatible endpoints ([7d190e6](https://github.com/google/adk-python/commit/7d190e6ebccf8b172c6c25583c3916b6352ca78a)), closes [#6482](https://github.com/google/adk-python/issues/6482)
* send the body for oneOf/anyOf/allOf OpenAPI request schemas ([2036206](https://github.com/google/adk-python/commit/20362069e0dc1b65b30c7775e0c0d01d364cb3d8)), closes [#6991](https://github.com/google/adk-python/issues/6991)
* serialize credential lifecycle by key ([28be9c8](https://github.com/google/adk-python/commit/28be9c801553d5fa3904b9c2423f66ea07bcc482)), closes [#6475](https://github.com/google/adk-python/issues/6475)
* serialize path, header, and cookie parameters and omit None values ([b4cf70c](https://github.com/google/adk-python/commit/b4cf70ca6d5e88be5e4f56e9961eb3e17f538408)), closes [#7164](https://github.com/google/adk-python/issues/7164) [#7099](https://github.com/google/adk-python/issues/7099)
* serialize V1OwnerReference with wire names in GKE code executor ([b9a2c05](https://github.com/google/adk-python/commit/b9a2c0546a856c1520405cae9307f2e2cce4dc65)), closes [#7443](https://github.com/google/adk-python/issues/7443) [#7444](https://github.com/google/adk-python/issues/7444)
* **sessions:** check `user_id is not None` instead of truthiness in `SqliteSessionService.list_sessions` ([ac990df](https://github.com/google/adk-python/commit/ac990df7c23fb228fb0a73a9becd42117fdca38b))
* skip a compaction that cannot shrink the request ([36779a0](https://github.com/google/adk-python/commit/36779a0e1c4b59f4b355c7f05ac1b3b79b44c5e9))
* skip compaction instead of failing when summarization errors ([5c54055](https://github.com/google/adk-python/commit/5c54055916fbd81d9147fab1b414ff1ef3772786))
* skip empty text parts in Anthropic message conversion ([6e8546c](https://github.com/google/adk-python/commit/6e8546c88d774ea4897d09279dc1752ad91ec010)), closes [#6982](https://github.com/google/adk-python/issues/6982)
* skip ignored params' annotations on the legacy declaration path ([62745cc](https://github.com/google/adk-python/commit/62745ccc62513514bc0f30f5cfdaf1c593d156ca)), closes [#7436](https://github.com/google/adk-python/issues/7436)
* stabilize unit tests in test_litellm and test_gke_code_executor ([6aa1fdd](https://github.com/google/adk-python/commit/6aa1fdd9630afced1b9511df7ea337dfa2c973d0))
* stage extra_packages for cloud_run and gke deployments ([de1df98](https://github.com/google/adk-python/commit/de1df98edb5f3dd0f3431087faa174b0dd80463d)), closes [#4980](https://github.com/google/adk-python/issues/4980)
* stop compaction failing on tool responses JSON cannot encode ([d4f9eb1](https://github.com/google/adk-python/commit/d4f9eb11c74b68a92487ddb25b952bce13a4fadd))
* stop double-counting cumulative cache invocation counters ([1492ff7](https://github.com/google/adk-python/commit/1492ff70ddb8ebd5b7fbd1bd4cbef3ac59bb670e))
* stop dropping temperature and top_p on the interactions API ([8e89a64](https://github.com/google/adk-python/commit/8e89a64c397472fd5cb85dac2b87bd6298dbb7b6))
* stop OAuth2 secrets from leaking over /run, /run_sse, /run_live, dev_server, and session endpoints ([63aed55](https://github.com/google/adk-python/commit/63aed55113d4fe78245d3d6667b6e87569888bf5))
* stop orphaned function_call from permanently blocking compaction ([3f34675](https://github.com/google/adk-python/commit/3f34675a196717d872376fe9e5085f94da36aebe)), closes [#7236](https://github.com/google/adk-python/issues/7236)
* stop partial tools colliding and send the __call__ docstring ([6a60d6a](https://github.com/google/adk-python/commit/6a60d6a2e8414479466bc397d7d1d905131eeb3b)), closes [#7190](https://github.com/google/adk-python/issues/7190)
* stop run_llm_agent_as_node mutating the shared node agent ([60c4081](https://github.com/google/adk-python/commit/60c40816d8d9c83680c60ca23b440760382d6d44))
* stop to_a2a from overriding the application's log level ([7a50a85](https://github.com/google/adk-python/commit/7a50a8591b057b73ee6a572cb06ba4380360ef1d)), closes [#7462](https://github.com/google/adk-python/issues/7462)
* stringify enum values in legacy schema declarations ([014f987](https://github.com/google/adk-python/commit/014f987d7e4abbe12033b0fa2cc7c203091252e6)), closes [#6978](https://github.com/google/adk-python/issues/6978)
* strip embedded thought signature from LiteLLM tool call ids ([be42798](https://github.com/google/adk-python/commit/be4279876299d7831f192f27061a3fbcff3596c4)), closes [#6742](https://github.com/google/adk-python/issues/6742)
* take the ADK user id only from an authenticated principal ([d0c4060](https://github.com/google/adk-python/commit/d0c40600fc4f4028d7b4fb86ce0f1b2163f8e28e))
* **telemetry:** stop holding OTel context across async generator yields ([10c694f](https://github.com/google/adk-python/commit/10c694f5c3f186cc5d335291743352c7869c8f3a))
* tolerate trailing slash on discovered OAuth2 issuer ([c220fca](https://github.com/google/adk-python/commit/c220fca16a7e7f7620bde799c50b240f2451ef79)), closes [#7265](https://github.com/google/adk-python/issues/7265)
* **tools:** guard concurrent lazy initialization in ComputerUseToolset and EnvironmentToolset ([15486db](https://github.com/google/adk-python/commit/15486dbb2ac26284f4384857acc0d4002f4e4fc4))
* **tools:** key NodeTool node runs by function call id ([40edc5b](https://github.com/google/adk-python/commit/40edc5b173f408d8fd439f4b42a268173779e274))
* update session last_update_time on Vertex AI append_event ([11d92d7](https://github.com/google/adk-python/commit/11d92d7d538e7d74f5c5b5d0a31c19ae63a72d67)), closes [#7338](https://github.com/google/adk-python/issues/7338)
* use asyncio.sleep in PlaywrightComputer async methods ([9c83a65](https://github.com/google/adk-python/commit/9c83a65daab46cd4ca5502ef59b01468b98cc9c0))
* use card descriptions for initial routing ([9311d6f](https://github.com/google/adk-python/commit/9311d6f50b75405a6ac77aac0aa53c658d2838fe)), closes [#4064](https://github.com/google/adk-python/issues/4064)
* use the project backend when generating eval scenarios ([1135d7f](https://github.com/google/adk-python/commit/1135d7ffbdad7c8f1f5a7156ad45780db056000a))
* warn when session state is dropped ([d2cb22e](https://github.com/google/adk-python/commit/d2cb22edd7fbaf9edba1cd324f8576a060ecec0e)), closes [#6854](https://github.com/google/adk-python/issues/6854)
* warn when the dev server binds a non-loopback address ([ec7756b](https://github.com/google/adk-python/commit/ec7756b969bd2f3df64ffedde98e396ee6d5a589))
* **workflow:** avoid mutating LlmAgent.mode when resolving effective mode ([666c26d](https://github.com/google/adk-python/commit/666c26db0bad86ae1b0a0557bc0fd1eeeca0d70e))
* **workflow:** isolate parallel agent_states by node_path ([19bc401](https://github.com/google/adk-python/commit/19bc4012a843e37d647a80007ea665d4aca2ab4e))
* **workflow:** isolate single-turn workflow node events and contents by node path ([097ae1e](https://github.com/google/adk-python/commit/097ae1ea3a50720dbdbd2b996ddbcdb3250a67c4))
* **workflow:** rerun rerun_on_resume nodes as soon as any interrupt is resolved ([5ee5cf8](https://github.com/google/adk-python/commit/5ee5cf8534f3e894f78cc37d3f46a51f6d0963ce))
* **workflow:** support retry_config on dynamic node failures in NodeRunner ([2b8b6d5](https://github.com/google/adk-python/commit/2b8b6d5358eb6f1b0a9304f110ca55378cea941f))
* **workflow:** wait for all direct interrupts before rerunning rerun_on_resume nodes ([bcac35a](https://github.com/google/adk-python/commit/bcac35a6efb21f176eef9d28d663db247f4e5afd))
* **workflow:** wait for in-flight workers on HITL interrupt in ParallelWorker ([531a86a](https://github.com/google/adk-python/commit/531a86a194c910ec5bfdfc9f7de09be80c5aaada))


### Performance Improvements

* cut time to first model request by 40% in long sessions ([1754b3e](https://github.com/google/adk-python/commit/1754b3eeb6cdb2c16e3b30619a12066623df132e))
* **flows:** stop importing unused providers on the first LLM request ([3c31fa5](https://github.com/google/adk-python/commit/3c31fa5100a617d03a19f8a9495b8b93d2e47628))


### Documentation

* add guides and details for internal event metadata and ToolCallIntegrityPlugin ([72f7c93](https://github.com/google/adk-python/commit/72f7c93045d8c3108d190a95b35c7e5a14a61ad6))
* **api:** consider new fields under storage services as breaking changes ([f03015c](https://github.com/google/adk-python/commit/f03015c9f7ceacc00f63548395c1faaa4fc8d1e3))
* **changelog:** remove false-positive breaking changes from v2.9.0 and v2.11.0 ([d8dc299](https://github.com/google/adk-python/commit/d8dc29948c68dff31e008d9532aac238f87887d4))
* correct Redis session retention and configuration defaults ([0f6a3d5](https://github.com/google/adk-python/commit/0f6a3d562a19d1a45d0d6755fb4ceaca13c50d11))
* fix docstring argument names that do not match signatures ([865a6d6](https://github.com/google/adk-python/commit/865a6d62a561f3ca4069f6b844a610d586961d09))
* fix eval and CLI docstrings that contradict the code ([d56a994](https://github.com/google/adk-python/commit/d56a9943169dc80b9a0ac04f38713c0e6f79b201))
* refresh stale links and a broken sample in the repo docs ([e0f8e2b](https://github.com/google/adk-python/commit/e0f8e2bad8fe26772edc2bb0d88950ec1c85a030))
* replace retiring model names in docstrings and skill references ([5c2567c](https://github.com/google/adk-python/commit/5c2567c07f8593a159951960d12c54b84f95423a))
* **samples:** add Microsoft Teams notification sample ([5d9cc1d](https://github.com/google/adk-python/commit/5d9cc1d56d8ad546af2db1e64356f32178344226))
* **samples:** enhance Model Consult sample README with inspection guide and architecture graph ([8af4652](https://github.com/google/adk-python/commit/8af46523edf9d641d4088f197f7ec3be5a0f6368))
* **sessions:** correct the rationale for InMemorySessionService event deduplication ([20ee4a2](https://github.com/google/adk-python/commit/20ee4a2e0df8db8cc49a368366b72e4845a7308a))
* **skills:** document AgentMode and path/node builders in adk-style ([262a8a4](https://github.com/google/adk-python/commit/262a8a4f23001ed4b37ba77eb9bb861797df876e))
* **skills:** document internal metadata, test runners, and private wrapper nodes in adk-style ([f84c432](https://github.com/google/adk-python/commit/f84c4325e1b25ac131bcf92cf854e44f4ff53e92))
* **skills:** update the bigquery-ai-ml skill ([cb9b8f7](https://github.com/google/adk-python/commit/cb9b8f70c317eb79a4ff5947a078a7c2480f6a27))


### Miscellaneous Chores

* release as 2.12.0 ([cfc5854](https://github.com/google/adk-python/commit/cfc5854ef4bd77301d1219e29da5182d7bbffc42))

</details>

---

> **Source** [google/adk-python](https://github.com/google/adk-python) · `v2.12.0` · 2026-10-13 · [upstream release](https://github.com/google/adk-python/releases/tag/v2.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
