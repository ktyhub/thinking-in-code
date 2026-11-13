---
title: "openai-agents-python v0.24.0"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.24.0"
published: "2026-10-15"
type: "minor"
lang: "en"
---

# openai-agents-python v0.24.0

## [0.24.0](https://github.com/openai/openai-agents-python/compare/v0.23.1...v0.24.0) (2026-10-15)


### Features

* expose MCP annotations on converted tools ([#5356](https://github.com/openai/openai-agents-python/issues/5356)) ([75813f8](https://github.com/openai/openai-agents-python/commit/75813f83997b249e5f4b53cccaff0d8a03aa179f))
* support run-wide tool exception formatting ([#5326](https://github.com/openai/openai-agents-python/issues/5326)) ([8fd9a7c](https://github.com/openai/openai-agents-python/commit/8fd9a7cd19a4c495c438d39c83fb03ea3fb5a7e0))


### Bug Fixes

* batch OpenAI conversation session writes within the API limit ([#5334](https://github.com/openai/openai-agents-python/issues/5334)) ([26345c1](https://github.com/openai/openai-agents-python/commit/26345c1e45ebede8e2fc9b0bc7341dedab5e01fc))
* defer automatic compaction for pending approvals ([#5363](https://github.com/openai/openai-agents-python/issues/5363)) ([5eb47a5](https://github.com/openai/openai-agents-python/commit/5eb47a5bdeab8ba9f6087de288c7e606816c76c6))
* **deps-dev:** bump fastapi from 0.139.2 to 0.141.1 ([#5312](https://github.com/openai/openai-agents-python/issues/5312)) ([cdf23bd](https://github.com/openai/openai-agents-python/commit/cdf23bd513b1fa2d26a1057784d64fdc43c8468a))
* **deps-dev:** bump grpcio from 1.83.1 to 1.84.0 ([#5310](https://github.com/openai/openai-agents-python/issues/5310)) ([a85487e](https://github.com/openai/openai-agents-python/commit/a85487ebf1b9b52cabeac6afa6c4c9110214b414))
* **deps-dev:** bump pymdown-extensions from 11.0.2 to 12.1 ([#5314](https://github.com/openai/openai-agents-python/issues/5314)) ([d9758b0](https://github.com/openai/openai-agents-python/commit/d9758b00b53f0b0cac68955717331c943a6c2620))
* **deps-dev:** bump pymongo from 4.18.1 to 4.18.2 ([#5313](https://github.com/openai/openai-agents-python/issues/5313)) ([858856f](https://github.com/openai/openai-agents-python/commit/858856f1f3b65d9b4a3a299b69ee5cdef4b9b8bb))
* **deps:** bump boto3 from 1.42.75 to 1.43.109 ([#5378](https://github.com/openai/openai-agents-python/issues/5378)) ([7da6a92](https://github.com/openai/openai-agents-python/commit/7da6a927cc42d955c2fdc8f2cb9a7443fefa4f46))
* **deps:** bump filelock from 3.20.3 to 4.0.12 ([#5375](https://github.com/openai/openai-agents-python/issues/5375)) ([14f4553](https://github.com/openai/openai-agents-python/commit/14f4553e288ad5df2c4097c823f3d91f333a1f84))
* **deps:** bump fsspec from 2025.7.0 to 2026.6.0 ([#5317](https://github.com/openai/openai-agents-python/issues/5317)) ([66504e9](https://github.com/openai/openai-agents-python/commit/66504e953ae49b9d884c638e7bd32b9fa1157fe0))
* **deps:** bump redis from 7.0.1 to 8.1.0 ([#5379](https://github.com/openai/openai-agents-python/issues/5379)) ([24ebf1c](https://github.com/openai/openai-agents-python/commit/24ebf1cb0f4b3107d5350b13a1308637d3dec9ca))
* **deps:** bump temporalio from 1.33.0 to 1.34.0 ([#5377](https://github.com/openai/openai-agents-python/issues/5377)) ([c148280](https://github.com/openai/openai-agents-python/commit/c148280f8f748552cc5b385802ef6dedd8ab6576))
* **deps:** bump vercel-sandbox from 0.7.0 to 0.8.0 ([#5374](https://github.com/openai/openai-agents-python/issues/5374)) ([2938d87](https://github.com/openai/openai-agents-python/commit/2938d87a2837537138dc7839003317a27ed3441f))
* **deps:** update fastapi requirement from &gt;=0.141.1 to &gt;=0.142.2 in /examples/realtime/twilio_sip ([#5372](https://github.com/openai/openai-agents-python/issues/5372)) ([f47d2c3](https://github.com/openai/openai-agents-python/commit/f47d2c3771f0aa2299f0cd63c2cbebae95f6599a))
* **deps:** update fastapi requirement in /examples/realtime/twilio_sip ([f47d2c3](https://github.com/openai/openai-agents-python/commit/f47d2c3771f0aa2299f0cd63c2cbebae95f6599a))
* **deps:** update openai requirement from &lt;4,&gt;=3.19.1 to &gt;=3.20.0,&lt;4 in /examples/realtime/twilio_sip ([#5308](https://github.com/openai/openai-agents-python/issues/5308)) ([f346950](https://github.com/openai/openai-agents-python/commit/f3469502299006f49a84cbba66c658cadf39cccc))
* **deps:** update openai requirement from &lt;4,&gt;=3.20.0 to &gt;=3.26.0,&lt;4 in /examples/realtime/twilio_sip ([#5376](https://github.com/openai/openai-agents-python/issues/5376)) ([172ff5e](https://github.com/openai/openai-agents-python/commit/172ff5e1dbc5b42f5b302e3f66226eac1a54b96d))
* **deps:** update openai requirement in /examples/realtime/twilio_sip ([172ff5e](https://github.com/openai/openai-agents-python/commit/172ff5e1dbc5b42f5b302e3f66226eac1a54b96d))
* **deps:** update openai requirement in /examples/realtime/twilio_sip ([f346950](https://github.com/openai/openai-agents-python/commit/f3469502299006f49a84cbba66c658cadf39cccc))
* **deps:** update pyjwt requirement from &gt;=2.15.0 to &gt;=2.15.1 in /examples/realtime/twilio ([#5306](https://github.com/openai/openai-agents-python/issues/5306)) ([7ca3c44](https://github.com/openai/openai-agents-python/commit/7ca3c444857ed5316a9c9782d121ab6500201c11))
* **deps:** update pyjwt requirement in /examples/realtime/twilio ([7ca3c44](https://github.com/openai/openai-agents-python/commit/7ca3c444857ed5316a9c9782d121ab6500201c11))
* **deps:** update python-dotenv requirement ([408c33f](https://github.com/openai/openai-agents-python/commit/408c33fec202c8260c83236e2f09e0f8f802e025))
* **deps:** update python-dotenv requirement from &gt;=1.2.3 to &gt;=1.2.4 in /examples/realtime/twilio ([#5373](https://github.com/openai/openai-agents-python/issues/5373)) ([c4cc409](https://github.com/openai/openai-agents-python/commit/c4cc409d057893eccbddc609c79499f1ac227958))
* **deps:** update python-dotenv requirement from &gt;=1.2.3 to &gt;=1.2.4 in /examples/realtime/twilio_sip ([#5371](https://github.com/openai/openai-agents-python/issues/5371)) ([408c33f](https://github.com/openai/openai-agents-python/commit/408c33fec202c8260c83236e2f09e0f8f802e025))
* **deps:** update python-dotenv requirement in /examples/realtime/twilio ([c4cc409](https://github.com/openai/openai-agents-python/commit/c4cc409d057893eccbddc609c79499f1ac227958))
* **deps:** update twilio requirement from &lt;10,&gt;=9.11.1 to &gt;=9.11.2,&lt;10 in /examples/realtime/twilio ([#5307](https://github.com/openai/openai-agents-python/issues/5307)) ([cb03652](https://github.com/openai/openai-agents-python/commit/cb03652e59eedb2a9979fa40260511e26e942956))
* **deps:** update twilio requirement in /examples/realtime/twilio ([cb03652](https://github.com/openai/openai-agents-python/commit/cb03652e59eedb2a9979fa40260511e26e942956))
* **deps:** update uvicorn requirement from &gt;=0.53.0 to &gt;=0.54.0 in /examples/realtime/twilio_sip ([#5309](https://github.com/openai/openai-agents-python/issues/5309)) ([f84fe73](https://github.com/openai/openai-agents-python/commit/f84fe73873e0497938ac0370a5a6bf2020b470ad))
* **deps:** update uvicorn requirement in /examples/realtime/twilio_sip ([f84fe73](https://github.com/openai/openai-agents-python/commit/f84fe73873e0497938ac0370a5a6bf2020b470ad))
* **examples:** render realtime tool events as text ([#5283](https://github.com/openai/openai-agents-python/issues/5283)) ([81f0ccf](https://github.com/openai/openai-agents-python/commit/81f0ccf20c6e24063b9da36fa37f2bdb6a43d8d3))
* honor Runner tracing opt-out inside caller traces ([#5296](https://github.com/openai/openai-agents-python/issues/5296)) ([8c4aa08](https://github.com/openai/openai-agents-python/commit/8c4aa0814fa19fb9f20f6f020d860b8439e60d64))
* **memory:** replace Redis compaction history atomically ([#5354](https://github.com/openai/openai-agents-python/issues/5354)) ([f50525c](https://github.com/openai/openai-agents-python/commit/f50525c8d7a77fd0935a01f27cb8231ed6e53670))
* omit unserializable dataclass run contexts ([#5303](https://github.com/openai/openai-agents-python/issues/5303)) ([d7e52c3](https://github.com/openai/openai-agents-python/commit/d7e52c375021248973f60ccbea8e7b69bc5b16e3))
* preserve caller-owned exceptions during sandbox redaction ([#5367](https://github.com/openai/openai-agents-python/issues/5367)) ([2244e9f](https://github.com/openai/openai-agents-python/commit/2244e9fe302a91b9e9ca97624e273166b8d8bca1))
* preserve completed tool outputs when a sibling fails ([#5332](https://github.com/openai/openai-agents-python/issues/5332)) ([1c1a28d](https://github.com/openai/openai-agents-python/commit/1c1a28df92f359dded4eed83976301c2f9850e89))
* preserve embedded separators in sandbox patches ([#5365](https://github.com/openai/openai-agents-python/issues/5365)) ([67d4f8a](https://github.com/openai/openai-agents-python/commit/67d4f8ab893ec41e1fac2393c610a1f6e1f4e0b7))
* preserve function-call aliases across RunState restoration ([#5358](https://github.com/openai/openai-agents-python/issues/5358)) ([f093ced](https://github.com/openai/openai-agents-python/commit/f093ced7b0112b0f9c6e8962bc930102bf5af98b))
* Preserve parameter descriptions in Args-only docstrings ([#5302](https://github.com/openai/openai-agents-python/issues/5302)) ([a726a9c](https://github.com/openai/openai-agents-python/commit/a726a9c99d4d9d7168ea85c8942f65a4cac13a7b))
* preserve RunState agent ownership across hook state changes ([#5362](https://github.com/openai/openai-agents-python/issues/5362)) ([d8e0a76](https://github.com/openai/openai-agents-python/commit/d8e0a769b6a32ab580f9c55bf9bc2a85512c0754))
* preserve tool outputs after callback failures ([#5318](https://github.com/openai/openai-agents-python/issues/5318)) ([71c2da4](https://github.com/openai/openai-agents-python/commit/71c2da4de47159ccc37905b8fe781be805dbfa66))
* recover from invalid sandbox tool arguments ([#5321](https://github.com/openai/openai-agents-python/issues/5321)) ([6ba967b](https://github.com/openai/openai-agents-python/commit/6ba967bbf4bf4c6a939e14492bbdc63511022817))
* reject pending input when completed stop tools end resume ([#5366](https://github.com/openai/openai-agents-python/issues/5366)) ([5a30187](https://github.com/openai/openai-agents-python/commit/5a30187df904533fe2dbb500d6a6425f0c98b3a2))
* reject unsupported Redis Cluster session clients early ([#5323](https://github.com/openai/openai-agents-python/issues/5323)) ([911f106](https://github.com/openai/openai-agents-python/commit/911f106d9987a61a59654b046b6e891b212b00e3))
* scope Redis Cluster rejection to transactional writes ([#5361](https://github.com/openai/openai-agents-python/issues/5361)) ([8068c37](https://github.com/openai/openai-agents-python/commit/8068c37388e2b39268f0aa7e5b9fb0f35d25b73a))
* **sessions:** persist deferred approval history across resumes ([#4828](https://github.com/openai/openai-agents-python/issues/4828)) ([c757a43](https://github.com/openai/openai-agents-python/commit/c757a4346214ac8641e68f5cf5880530344d0520))
* trace approved tools inside the resumed agent span ([#5294](https://github.com/openai/openai-agents-python/issues/5294)) ([cf89d7e](https://github.com/openai/openai-agents-python/commit/cf89d7ebdae8641bfca8f0152e08f62b12396c10))
* **tracing:** omit caller data from lifecycle debug logs ([#5299](https://github.com/openai/openai-agents-python/issues/5299)) ([d27abe8](https://github.com/openai/openai-agents-python/commit/d27abe8972408a638e97422e9fd8066445bb7b21))
* warn about unhandled computer safety checks ([#5305](https://github.com/openai/openai-agents-python/issues/5305)) ([2c11c22](https://github.com/openai/openai-agents-python/commit/2c11c224f4cd2a500d064814269c25c0b2a01029))

<!-- agents-release-review:start -->
### Release readiness review (v0.23.1 -> TARGET 0f44a46474d1f37a6b0ee006251a78bde4179bea)

This is a release readiness report done by `$final-release-review` skill.

### Diff

https://github.com/openai/openai-agents-python/compare/v0.23.1...0f44a46474d1f37a6b0ee006251a78bde4179bea

### Release intent

- Review mode: final candidate, Release Please PR #5285.
- Intended release: minor, 0.24.0.
- Minimum required release type: minor. Existing tool error formatters receive a new category, and the RunState reader restricts some legacy agent identities.
- Versioning verdict: compatible with the required minor release.

### Release call

**🟢 GREEN LIGHT TO SHIP.** The prepared 0.24.0 candidate has no unresolved release blocker. Its compatibility changes have supported migration or fallback paths described below.

### Scope summary

- 111 files changed (+15,444/-1,412). Main areas: tool execution and failure recovery, durable RunState and session history, sandbox safety, tracing, examples, dependencies, and release metadata.
- The candidate contains current main and #5335. Changes beyond main are limited to release-owned metadata.

### Risk assessment (ordered by impact)

1. **Route affected saved runs to their original SDK and agent code.**
   - Risk: **🟢 LOW**, with a required upgrade precaution. Some previously readable checkpoints now fail safely instead of risking incorrect agent ownership.
   - Evidence: the writer advances from schema 1.18 to 1.21. The reader rejects certain older graphs with same-name non-root agents whose saved identity ordering could have depended on hook attributes, even when those attributes remained unchanged. New identity generation excludes all hook instance attributes and retains the hook type. Graphs distinguishable only by those attributes cannot be serialized. Other supported historical schemas remain readable.
   - Files: `src/agents/run_state.py`, `src/agents/_run_state_agent_identity.py`, `tests/test_run_state.py`.
   - Action: finish affected legacy tasks with the original SDK, unchanged agent definitions, and hook ordering used when the snapshot was written. Use unique agent names before starting new durable runs. Do not rename a stored graph or change its schema label to force migration. Older SDKs cannot read new 1.21 snapshots.

2. **Update existing custom tool error formatters for a third category.**
   - Risk: **🟢 LOW**, with an explicit migration for exhaustive callbacks. A formatter that treats every non-rejection as a missing tool can now return misleading text for a crashed function.
   - Evidence: `ToolErrorFormatterArgs.kind` adds `"tool_exception"`; the optional `error` field is appended. The run-wide callback now handles eligible decorated function failures. Explicit per-tool handlers, including explicit `None` or the default handler, keep precedence. Factory-created MCP and `Agent.as_tool` failures, timeouts, cancellation, and schema-backed program calls keep their separate behavior.
   - Files: `src/agents/run_config.py`, `src/agents/tool.py`, `src/agents/run_internal/tool_execution.py`, `tests/test_tool_exception_formatter.py`.
   - Action: handle `"tool_exception"` explicitly or return `None` for it to retain the default message. Keep exception details out of model-visible output unless deliberately sanitized. With no custom formatter, default behavior stays unchanged.

3. **Preserve completed work without promising automatic replay.**
   - Risk: **🟢 LOW**. Recovery retains more completed work, but applications must still reconcile external side effects and partially committed history.
   - Evidence: deferred approval history waits for the output guardrail boundary. For client-managed runs, accepted call/output pairs survive sibling or callback failures after input and tool-output guardrails permit publication. Server-managed conversations retain their separate recovery path. Pending writes retain session identity and compaction state. Automatic compaction waits for pending approvals; standalone Redis replacement uses a transaction. Conversations writes use batches of at most 20 items and can commit partially across requests.
   - Files: `src/agents/run_internal/session_persistence.py`, `src/agents/run_internal/tool_execution.py`, `src/agents/memory/openai_conversations_session.py`, `src/agents/memory/openai_responses_compaction_session.py`, `src/agents/extensions/memory/redis_session.py`.
   - Action: resume supported nonterminal failures with the original session backend and ID, using returned state and history instead of replaying completed tools. After a partial Conversations append, inspect and repair remote history before retrying; do not resend the full list while an earlier part remains stored. Coordinate other writers; Redis atomic replacement does not prevent stale compaction across processes. Redis Cluster reads and pops remain available, but transactional append, clear, and replacement require a supported backend. Terminal output failures do not become replayable.

4. **Retain the intended sandbox, tracing, and display boundaries.**
   - Risk: **🟢 LOW**. macOS local commands can no longer launch host applications through Launch Services; disabled runs emit fewer spans inside caller-owned traces.
   - Evidence: #5335 adds Launch Services denial to the shared normal/PTY macOS profile. Native coverage checks the operating-system decision. Sandbox input validation returns recoverable tool errors without swallowing provider failures. Protected mount failures produce fresh redacted errors. Source arguments and linked exceptions remain intact, but the caught source traceback is detached. Tracing opt-out covers resumed tools and streamed cleanup, while resumed approved tools use the agent span. The realtime example renders tool content as literal text.
   - Files: `src/agents/sandbox/sandboxes/unix_local.py`, `src/agents/sandbox/_mount_security.py`, `src/agents/run.py`, `src/agents/tracing/`, `examples/realtime/app/static/app.js`.
   - Action: retain the macOS behavior note and #5335 reporter credit in the release. Do not describe local sandboxing as complete host or network isolation; use the documented Docker or hosted alternatives where needed. No tracing or realtime configuration migration is required.

5. **Keep additive integrations and dependency requirements explicit.**
   - Risk: **🟢 LOW**. Consumers opting into metadata, examples, or extras must use their specific contracts.
   - Evidence: converted MCP tools expose copied `mcp_annotations` metadata; it does not grant approval or become a model tool schema. Decisions examples use a separate OpenAI client with named typed answers and conservative refusal handling. Core Python support remains >=3.10 and the OpenAI dependency remains >=3.0.0,<4. The examples require OpenAI >=3.26.0,<4; the Temporal extra pins 1.34.0 and the Vercel extra accepts >=0.7.0,<0.9.
   - Files: `src/agents/mcp/util.py`, `src/agents/tool.py`, `examples/decisions/`, `pyproject.toml`, `uv.lock`.
   - Action: treat MCP annotations as untrusted discovery hints. Non-MCP and unannotated tools return `None`; reads return copies. Omitted hints stay omitted, so apply the installed MCP defaults yourself. The metadata is not serialized into tool origin. Install the example-specific SDK version and retain separate client/tracing ownership. Refresh application lockfiles when adopting the changed extras.

### Documentation coverage (non-blocking)

- Coverage source: current candidate documentation and a fresh search of all open PRs. The only open documentation PR is #5370 at `7754b11c7a8b4a2a0e9492f43de5f4762c456367`; its complete diff removes Runloop guidance for unmerged #5369. It does not cover this release's new obligations. Runloop removal is outside this candidate.
- Status: partially covered.
- Covered obligations: existing SDK/agent version routing for saved tasks; tracing opt-out and local sandbox limits; MCP callable approval policies; computer safety checks; Decisions example setup, separate client ownership, refusal handling, and routing limitations.
- Gaps and exact post-release suggestions:

| File and section | Wording or example to add |
| --- | --- |
| `docs/human_in_the_loop.md`, "Versioning pending tasks" and "Serialization options" | Explain schema 1.21, the legacy hook-identity restriction, and finishing affected tasks on their original SDK/agent code. Recommend unique names for new durable runs; same-name agents indistinguishable without hook attributes cannot serialize. Explain that unserializable dataclass context is omitted with a warning; show a serializer/deserializer or `context_override`, and `strict_context=True` to reject omission. |
| `docs/running_agents.md`, `tool_error_formatter`; `docs/tools.md`, "Handling errors in function tools" | Add `tool_exception`, `error`, callback migration, `None` fallback, explicit per-tool precedence, exclusions, and safe model-visible messages. |
| `docs/results.md`, failure recovery and pending input | Explain retained completed outputs, absent custom output metadata after failed extraction, original session ownership, and the terminal-output replay limit. State that completed stop tools can reject added pending input; finish that run before starting a new user turn. |
| `docs/sessions/index.md`, Conversations, Redis, and compaction sections | Document 20-item request batches and partial-append reconciliation. Multi-request writes disable client retries and drain the current request on cancellation; single-request writes retain client behavior. Explain deferred compaction during approvals; standalone Redis atomic replacement, Cluster write restrictions, and application coordination across writers. |
| `docs/mcp.md`, tool discovery and agent-level configuration | Document `FunctionTool.mcp_annotations` as copied optional metadata; absent annotations return `None` and omitted hints remain omitted. Consumers apply the installed MCP defaults. State that metadata neither authorizes execution nor enters model schemas or serialized tool origin. Distinguish MCP failure handlers from the run-wide formatter. |
| `docs/sandbox/clients.md`, local and hosted clients | Optionally note macOS Launch Services denial and document the Vercel >=0.7.0,<0.9 bound. Preserve the existing local-isolation limitations. |

- Publication timing: publish documentation for new behavior after 0.24.0 is available. These documentation gaps do not block the release.

### Key Changes draft

## Key Changes

0.24.0 adds run-wide function error formatting and MCP discovery annotations, and improves recovery, sandbox safety, and tracing. This minor release includes compatibility changes for custom error callbacks and some saved agent graphs. Review the first two highlights before upgrading.

### Highlights:

- **Update custom error formatters.** `RunConfig.tool_error_formatter` can receive `kind="tool_exception"` and an optional `error`. Handle the new kind or return `None` to retain the default message. Explicit per-tool handlers keep precedence; unconfigured defaults stay unchanged.
- **Plan upgrades around saved runs.** New RunState snapshots use schema 1.21. Finish affected older same-name agent graphs on their original SDK. Keep the agent code and original hook ordering unchanged. Use unique agent names for new durable runs; renaming a saved graph is not a migration.
- **Recover completed work more reliably.** Deferred approval history, completed tool outputs, aliases, and compaction state survive supported recovery paths. Automatic compaction waits for approvals. Redis replaces history atomically on supported standalone clients. Conversations appends respect the 20-item request limit. Reconcile partial writes before retrying.
- **Harden local execution and display.** macOS sandbox commands deny Launch Services requests. Sandbox tools recover from invalid model arguments. Protected mount errors preserve caller exception data while detaching the caught traceback. The realtime demo displays tool content as text.
- **Honor tracing choices through resume and cleanup.** Per-run tracing opt-out applies inside caller traces, and approved resumed tools attach to the resumed agent span.
- **Use richer integration examples and metadata.** MCP tools expose optional `mcp_annotations` as discovery hints. New Decisions recipes demonstrate classification, routing, and tool review with OpenAI >=3.26.0,<4. They use a separate client, not an Agents model adapter.
- **Refresh optional dependency locks.** The Temporal extra uses `temporalio==1.34.0`; the Vercel extra supports `vercel-sandbox>=0.7.0,<0.9`. Core Python and OpenAI SDK minimums are unchanged.

Thanks to @masasron for reporting the macOS local sandbox issue fixed in #5335.

### Notes

- This review covers the exact candidate above, including its release metadata. Changes to main, the candidate, or its API baseline require a fresh release check and approval.
<!-- agents-release-review:end -->

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.24.0` · 2026-10-15 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.24.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
