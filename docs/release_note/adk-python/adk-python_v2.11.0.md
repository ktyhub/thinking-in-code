---
title: "adk-python v2.11.0"
project: "adk-python"
repo: "google/adk-python"
tag: "v2.11.0"
version: "v2.11.0"
published: "2026-10-02"
type: "minor"
lang: "en"
summary: "This release adds graceful cancellation and tool confirmation to workflows, a tool for consulting another model mid-task, and a built-in SQLite memory service."
---

# adk-python v2.11.0

## [2.11.0](https://github.com/google/adk-python/compare/v2.10.0...v2.11.0) (2026-10-01)


### Highlights

This release adds graceful cancellation and tool confirmation to workflows, a tool for consulting another model mid-task, and a built-in SQLite memory service.

* **Execution cancellation**: Pass an `abort_signal` to `Runner`, `Workflow`, and nodes to stop a run gracefully; `/run_sse` now cancels the run when the client disconnects. See the [unit guide](https://github.com/google/adk-python/blob/main/docs/guides/runners/runner/abort.md) for more details. ([ef5bbcf](https://github.com/google/adk-python/commit/ef5bbcfe51670bd211645a043914c162e7c1cd60), [3d73603](https://github.com/google/adk-python/commit/3d73603deb180a6518982b2b60f036c764f0cf7e))
* **Tool confirmation in workflows**: Tool nodes now pause for user approval via `RequestInput`, the same way an `LlmAgent` does, instead of passing an error downstream. ([ce132b9](https://github.com/google/adk-python/commit/ce132b92d471b8df903524593d863171b000a764))
* **ModelConsultTool**: Let an agent consult another model mid-task, capped by per-turn and per-session budgets. See the [unit guide](https://github.com/google/adk-python/blob/main/docs/guides/tools/model_consult/model_consult_tool/index.md) for more details. ([84cc99a](https://github.com/google/adk-python/commit/84cc99abd53010817a85b51fdcdc5d4f48366769))
* **SQLite memory service**: Keep agent memory in a local SQLite database, selected with a `sqlite://` memory service URI. ([9625b06](https://github.com/google/adk-python/commit/9625b06c9a1be6b9ecd85225657690ae5c0e9d3e))
* **MCP SDK 2.x**: Connect to MCP servers over the modern protocol through a new opt-in path. ([e738c26](https://github.com/google/adk-python/commit/e738c26fe5abcecffe2fbeba31f8d837086aad8a))

<details>
<summary>All changes</summary>

### Features

* add a sample preloading memory profiles into the instruction ([fdf1b7f](https://github.com/google/adk-python/commit/fdf1b7fbac216b98181cbfa83609f186f3cde2d0))
* add avatar configuration to server commands ([e4c0d94](https://github.com/google/adk-python/commit/e4c0d946f6d602b0ac23804328473b8d9e597b3e)), closes [#5435](https://github.com/google/adk-python/issues/5435)
* add max llm calls to server commands ([14f4154](https://github.com/google/adk-python/commit/14f4154893e15f293cc09a8ea2cd824a17b04ed8)), closes [#5434](https://github.com/google/adk-python/issues/5434)
* add optional abort_signal support to Runner, Workflow, and Nodes ([ef5bbcf](https://github.com/google/adk-python/commit/ef5bbcfe51670bd211645a043914c162e7c1cd60)), closes [#4796](https://github.com/google/adk-python/issues/4796)
* add pagination to list_accessible_data_agents in data_agent toolset ([46d5a2d](https://github.com/google/adk-python/commit/46d5a2d37d13303bd8ede3ee4558b850a4b3409f))
* add sqlite memory service ([9625b06](https://github.com/google/adk-python/commit/9625b06c9a1be6b9ecd85225657690ae5c0e9d3e))
* add the model consult session context handover layer ([b2da4c6](https://github.com/google/adk-python/commit/b2da4c6030dcd4b4f156743201a49f01bd4ec61a))
* **cli:** wire abort_signal to /run_sse on client disconnect ([3d73603](https://github.com/google/adk-python/commit/3d73603deb180a6518982b2b60f036c764f0cf7e))
* default Vertex project from GCP metadata ([8d8bbd2](https://github.com/google/adk-python/commit/8d8bbd286ffa6f1d00753f40dbba8c928aacce19))
* **events:** add internal metadata for ADK events ([8e29f16](https://github.com/google/adk-python/commit/8e29f16645e0607d2942bbdfe2010f7d7bacd7c1))
* honor tool_thread_pool_config for sync tools outside live mode ([c50ade3](https://github.com/google/adk-python/commit/c50ade39c88f391032887bcd1ba5e9299697d8c8))
* let BigQuery tools run where CMEK is required ([4d06641](https://github.com/google/adk-python/commit/4d06641e7dff5f2f2fa77feea24f68885110cf6d)), closes [#3931](https://github.com/google/adk-python/issues/3931)
* **live:** default to a pre-built avatar for VIDEO live sessions ([d5c9b11](https://github.com/google/adk-python/commit/d5c9b11b6440bbc66e0482c3c88cb28324a8544e))
* mark spans whose response came from a callback ([9633ab9](https://github.com/google/adk-python/commit/9633ab9f8227ebeba18b5ceca12e58377ab8ab4a))
* **mcp:** add an opt-in modern-protocol connect path for MCP SDK 2.x ([e738c26](https://github.com/google/adk-python/commit/e738c26fe5abcecffe2fbeba31f8d837086aad8a))
* **plugins:** add optional ToolCallIntegrityPlugin ([b7efc4e](https://github.com/google/adk-python/commit/b7efc4edb4deee133f13c7358b5164e8ac23a67d))
* propagate grounding metadata from MCP _meta ([0960104](https://github.com/google/adk-python/commit/09601045f4daced76b00f92c641fb1899ae3fa53)), closes [#6081](https://github.com/google/adk-python/issues/6081)
* skip __init__.py for config-based adk create ([d594b69](https://github.com/google/adk-python/commit/d594b693053fb29c3b30815270a31cd17990eab2)), closes [#6753](https://github.com/google/adk-python/issues/6753)
* synthesize abort event and function response on cancellation ([da65851](https://github.com/google/adk-python/commit/da65851a9e25005480db8164f8f0fff92ba31922))
* **telemetry:** move skill telemetry span attributes out of experimental ([e0f4c97](https://github.com/google/adk-python/commit/e0f4c979e119ee31f58882d4823cdb3bcd568b1e))
* **tools:** add ModelConsultTool with turn and session budgets ([84cc99a](https://github.com/google/adk-python/commit/84cc99abd53010817a85b51fdcdc5d4f48366769))
* **tools:** invoke advisor models without tools for model_consult ([28c47b5](https://github.com/google/adk-python/commit/28c47b550d29746ce4f4b38a30617e0f6e14c1eb))
* **workflow:** pause tool nodes for tool confirmation via RequestInput ([ce132b9](https://github.com/google/adk-python/commit/ce132b92d471b8df903524593d863171b000a764))
* **workflow:** propagate skip_summarization from node tools to tool response ([5a0421c](https://github.com/google/adk-python/commit/5a0421cbc58ae7b9e00ae4cd41f124863b0cbb70))
* **workflow:** run plugin tool callbacks around ToolNode calls ([cfeece9](https://github.com/google/adk-python/commit/cfeece9efbb93a6ad3efb7baf7e9bf9061c83e69))


### Bug Fixes

* accept a client factory written against either httpx major ([438c3eb](https://github.com/google/adk-python/commit/438c3eb65564d8e1f14896be37886a2c4905b14a))
* accept dotted registry ids in GCPSkillRegistry ([cbbdec3](https://github.com/google/adk-python/commit/cbbdec3f79b2ae830cc8d34de83d2cc18e128222)), closes [#7136](https://github.com/google/adk-python/issues/7136)
* **antigravity:** extract real execution output for built-in tool steps ([3fd932d](https://github.com/google/adk-python/commit/3fd932d525789c0ba616ac762897930392033e45))
* **artifacts:** return None for negative versions in InMemoryArtifactService ([6193957](https://github.com/google/adk-python/commit/6193957a53d58b7dc14942c09ac53b71a4cbc21f))
* cancel the in-flight tool call when the caller is cancelled ([f0dd560](https://github.com/google/adk-python/commit/f0dd560a6db286f9aa9c903a19b63278023c6716))
* classify plugin output before persisting events ([044a1ec](https://github.com/google/adk-python/commit/044a1ec3f434cf2e3f7acfdbd52305b60d16f6e5)), closes [#7184](https://github.com/google/adk-python/issues/7184)
* detect a dead MCP session whose transport sits behind a dispatcher ([8632980](https://github.com/google/adk-python/commit/86329806d1eb5c4cc767ab291730ccdf338d5ae5))
* drop stale replies to superseded tool updates ([fdca5e7](https://github.com/google/adk-python/commit/fdca5e7b20db78347a19966354af4219c2bd012a))
* drop unpairable trailing FRs in rearrange ([643df96](https://github.com/google/adk-python/commit/643df966a0fa223454e34a4eee1eddd68931ffa3)), closes [#6751](https://github.com/google/adk-python/issues/6751)
* **eval:** skip content-less events when mapping Vertex multi-turn turns ([fd2ca87](https://github.com/google/adk-python/commit/fd2ca8773ed51ec13a96670fdeb11f333727217a))
* **flows:** detect thought-only and whitespace turns as empty content ([dea8110](https://github.com/google/adk-python/commit/dea81109d15066b89dd3447f7c20523cc06d5e6a))
* follow redirects when downloading skills in GcpSkillRegistry ([fd14aec](https://github.com/google/adk-python/commit/fd14aec26534adb9743e963f39af468f1f0c329f))
* install greenlet with the db extra and name it when missing ([ffc2494](https://github.com/google/adk-python/commit/ffc2494a656d4fdaaec1c930d1124bba339a3cfd))
* isolate and clean up single_turn LlmAgent node_input events ([6f30039](https://github.com/google/adk-python/commit/6f3003907564e93e625477f1856a483937aae3d6)), closes [#7227](https://github.com/google/adk-python/issues/7227)
* keep credential-request events out of the compaction prompt ([b562ef4](https://github.com/google/adk-python/commit/b562ef4de858adc81d62f1438771c77bb06ff8e0))
* keep default credentials out of pickled AgentRegistry toolsets ([345a1a8](https://github.com/google/adk-python/commit/345a1a83307b868aaf966ac02f1fbee9be46836e))
* keep identical streamed function calls that have no model-provided id ([46b22e4](https://github.com/google/adk-python/commit/46b22e4e8ac3cb800dd9d8e8b5c936c22c655a77))
* **live:** only cache audio blobs in the live input realtime cache ([b627a15](https://github.com/google/adk-python/commit/b627a15b6b3862a197815a123be6a1a702d33355))
* load validated MCP toolsets under adk web ([f44d512](https://github.com/google/adk-python/commit/f44d51244a59a6a05210d45d23e1f6e75148a7df)), closes [#6735](https://github.com/google/adk-python/issues/6735)
* look up padded session ids the same way create_session stores them ([eef75de](https://github.com/google/adk-python/commit/eef75de8db16f3aea98e7a99e068046b66822313)), closes [#6941](https://github.com/google/adk-python/issues/6941)
* make conformance runs report replay and recording failures ([5355c7c](https://github.com/google/adk-python/commit/5355c7c60684e38e9ea158e34a41974e525be90f))
* only apply --avatar_config to live sessions requesting video ([4d241bf](https://github.com/google/adk-python/commit/4d241bff1bdf63ddf5ef947a2aa5d145b008c013))
* persist sibling tool results before a tool confirmation request ([67d3e49](https://github.com/google/adk-python/commit/67d3e494b610c6962ca8290dcb66c9f6b8b08735)), closes [#6732](https://github.com/google/adk-python/issues/6732)
* **plugins:** let tools run as workflow nodes under ToolCallIntegrityPlugin ([b057697](https://github.com/google/adk-python/commit/b0576978ec1f341980abdf385cf47f8b22da4178))
* **plugins:** record content_formatter failure class in error_message ([e5a24b6](https://github.com/google/adk-python/commit/e5a24b6f168581a1904049a8896a6939cdb88e30))
* preserve single-turn structured output ([6b96ba1](https://github.com/google/adk-python/commit/6b96ba199b3e2684272fad870d9e0ab45b79ec33)), closes [#6089](https://github.com/google/adk-python/issues/6089)
* prevent improper merging of parallel streaming function calls ([cacf92a](https://github.com/google/adk-python/commit/cacf92a5f4b72bd49f552da584725e79a7e2153f))
* propagate url_prefix to FastAPI root_path ([2daa303](https://github.com/google/adk-python/commit/2daa303fe495a2e8048484bcd8bf748cec377524)), closes [#7070](https://github.com/google/adk-python/issues/7070)
* refresh the access token in the BigQuery MCP sample ([9a33588](https://github.com/google/adk-python/commit/9a33588b445be5f204983b2b2c929821b2c513ef)), closes [#7217](https://github.com/google/adk-python/issues/7217)
* reject RestApiTool path params with "." or ".." segments ([6f3aabe](https://github.com/google/adk-python/commit/6f3aabeef09bccb63db235f6496d4d4af218c3f9)), closes [#7065](https://github.com/google/adk-python/issues/7065)
* render Jinja2 instructions in a sandbox and expose a read-only state mapping ([0e19550](https://github.com/google/adk-python/commit/0e19550c53b8bddaf380b50849189a5201892191))
* replay a parallel tool call that never ran when a sibling answered ([7298e09](https://github.com/google/adk-python/commit/7298e09acb485c4b226ec552c899f661df64fe49)), closes [#7108](https://github.com/google/adk-python/issues/7108)
* report the events the SQLite migration actually migrated ([31e5358](https://github.com/google/adk-python/commit/31e5358c7742021b9bc72663ebeb68366f9edc08)), closes [#7298](https://github.com/google/adk-python/issues/7298)
* resolve Agent Registry MCP bindings for the deployed agent at runtime ([9115d61](https://github.com/google/adk-python/commit/9115d612ea0286f867273042d6f23f04f75540cc))
* resume a remote A2A agent when a human answers its relayed pause ([caf2356](https://github.com/google/adk-python/commit/caf235659a5e75e265882dfc617aeaff00000384)), closes [#6721](https://github.com/google/adk-python/issues/6721)
* run BigQuery tools off the event loop via BigQueryToolset async adapter ([497b65b](https://github.com/google/adk-python/commit/497b65b14b3337a0450e7452c215cf1204d3bb7b)), closes [#7160](https://github.com/google/adk-python/issues/7160)
* **runner:** collect and close toolsets from Workflow graph nodes in Runner.close() ([6fbb22b](https://github.com/google/adk-python/commit/6fbb22b14e80c8cb2733f83611094e52df847a98))
* **runners:** safely skip non-BaseNode instances in _collect_toolset ([018c41c](https://github.com/google/adk-python/commit/018c41c8dddac3fcd2b4ca53feec128498b3b823))
* serve the dev UI runtime config from the server instead of a file ([3722746](https://github.com/google/adk-python/commit/3722746568a33226d54ba51876801c5948479eb5))
* **sessions:** disable pool reset on return for StaticPool in DatabaseSessionService ([74bb82b](https://github.com/google/adk-python/commit/74bb82bc9989dc8213e15aedd7279a5b1a7549bd))
* **sessions:** let any colon-prefixed key bypass state_schema validation again ([6e1ec09](https://github.com/google/adk-python/commit/6e1ec0931ec7a7d37c402d69cfeae5883897396f))
* stamp Redis sessions with the event timestamp ([def458b](https://github.com/google/adk-python/commit/def458b609c2811d137b0332b2fc7b201dddd5c0)), closes [#7292](https://github.com/google/adk-python/issues/7292)
* stop live session teardown hanging and lazy-load the auth transport ([41bebdc](https://github.com/google/adk-python/commit/41bebdc0ad5bb53fd07827643a01c0a7591a2417))
* stop RemoteA2aAgent failing on a2a-sdk 0.3.4 to 0.3.10 ([5b079ee](https://github.com/google/adk-python/commit/5b079eedbfbbe44441a537741acc3477e6118b8d))
* stop update_time onupdate from overriding explicit writes ([aec7c0a](https://github.com/google/adk-python/commit/aec7c0ad09af620c837c4ba7bbb596219bf3cc07)), closes [#7276](https://github.com/google/adk-python/issues/7276)
* **tools:** apply the load_web_page SSRF checks on the proxy path ([d7a7c3c](https://github.com/google/adk-python/commit/d7a7c3c6881785420fc9a25374629b08c18aad25))
* **tools:** package model_consult advisor prompt as a single user content block ([ecb429c](https://github.com/google/adk-python/commit/ecb429c941d213a1a44f739bb2ec46a23973f307))
* **tools:** stop marking every NodeTool as long-running ([0478224](https://github.com/google/adk-python/commit/0478224ba50d4044325fbccb474aa6aaf46987d5))
* **tools:** surface NodeTool failures to on_tool_error and return dict validation errors ([b4c5272](https://github.com/google/adk-python/commit/b4c5272c53eb5401480ad7472535d1099ef4e9d7))
* treat inbound new_message in Runner.run_async as a user turn ([15ec279](https://github.com/google/adk-python/commit/15ec2791315db8d63a700c1ae2ad87a58b0bcaec))
* **workflow:** keep outputs of sibling nodes that finished in the same tick as a failing node ([2c759e9](https://github.com/google/adk-python/commit/2c759e9e6e0a12e74e2d114a962559e1152d9f26))
* **workflow:** run ToolNode tools with the node context so deltas are emitted ([cffc967](https://github.com/google/adk-python/commit/cffc9677dac4f00c55a38e4331318da2b1595c6c))


### Documentation

* add known issues for A2A workflow output schema and serialization ([f7967c3](https://github.com/google/adk-python/commit/f7967c35fecbd2080953d28d0f9f9a8d71674fc2))
* add unit guide for Node and `@node` ([3e59f4d](https://github.com/google/adk-python/commit/3e59f4dd18391cd9d56cc712c64ec030cba9fab7))
* document execution cancellation, node tool direct output, and span provenance ([76af4b0](https://github.com/google/adk-python/commit/76af4b08cbc81e46c933d1558305f7336d876cc0))
* explain local lockfile needed by tox in adk-setup skill ([96319fc](https://github.com/google/adk-python/commit/96319fc85d01c64137610de85250f950055e9747))
* explain why live audio is not flushed on generation_complete ([dcd5d76](https://github.com/google/adk-python/commit/dcd5d76036aa28048cf52c1fb902082290d20c90))
* fix to_a2a import so the task mode sample runs ([e6bdb4d](https://github.com/google/adk-python/commit/e6bdb4dab7a1657a871ef63292f9b76e26a95bd0))
* **runners:** add developer guide for execution cancellation ([4e48bb0](https://github.com/google/adk-python/commit/4e48bb07292ac80a0c897bf1311454750bda8097))
* **tools:** add ModelConsultTool developer guide and sample agent ([89ebdec](https://github.com/google/adk-python/commit/89ebdecf233b9d57fcd27cc4b003a9a62b107097))

</details>

---

> **Source** [google/adk-python](https://github.com/google/adk-python) · `v2.11.0` · 2026-10-02 · [upstream release](https://github.com/google/adk-python/releases/tag/v2.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
