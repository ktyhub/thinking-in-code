---
title: "openai-agents-python v0.20.0"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.20.0"
published: "2026-08-11"
type: "minor"
lang: "en"
summary: "Version 0.20.0 is a minor release because it changes the implicit default model and includes a potentially breaking MCP dependency migration for applications with customized local HTTP transports. MCP v1 remains…"
---

# openai-agents-python v0.20.0

## Key Changes

Version 0.20.0 is a minor release because it changes the implicit default model and includes a potentially breaking MCP dependency migration for applications with customized local HTTP transports. MCP v1 remains supported, and affected applications can migrate to `httpx2` or pin `mcp<2`.

### Highlights:

-   The default model is now `gpt-5.6-luna`; explicit models, run-level overrides, and `OPENAI_DEFAULT_MODEL` continue to take precedence.
-   Local MCP connections support MCP Python SDK v1 and v2 across stdio, SSE, and Streamable HTTP transports.
-   Applications using custom MCP HTTP authentication or client factories must use the HTTP types owned by the installed MCP major version, or pin `mcp<2`.
-   `RunState.add_input()` can stage durable user input before a resumed model call, with guardrail, persistence, and serialization support.
-   Sandbox mount validation adds explicit credential-exposure acknowledgements and preserves redacted error contracts without serializing credential authority.
-   Realtime input transcription supports the GA transcription settings for `gpt-live-transcribe`, `gpt-transcribe`, and `gpt-realtime-whisper`.

## What's Changed

* feat: use GPT-5.6 Luna as the default model by @seratch in https://github.com/openai/openai-agents-python/pull/4282
* feat: add durable pending input to RunState by @seratch in https://github.com/openai/openai-agents-python/pull/4325
* feat(mcp): support MCP Python SDK v1 and v2 by @seratch in https://github.com/openai/openai-agents-python/pull/4106
* feat(sessions): pass run context to custom sessions by @seratch in https://github.com/openai/openai-agents-python/pull/4209
* feat(realtime): support GA transcription options by @seratch in https://github.com/openai/openai-agents-python/pull/4351
* feat: preserve raw usage payloads by @seratch in https://github.com/openai/openai-agents-python/pull/4279
* feat: allow applications to approve unsafe replays by @seratch in https://github.com/openai/openai-agents-python/pull/4319
* fix: falsy optional reference handling by @seratch in https://github.com/openai/openai-agents-python/pull/4305
* fix: prevent queue consumer deadlocks by @seratch in https://github.com/openai/openai-agents-python/pull/4201
* fix: publish completed streamed guardrail results on failure paths by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4223
* fix: annotate the bare tool guardrail decorator overloads by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4238
* fix: tool approval is not honored on resume when `Runner.run` is given a context by @ojassharma7 in https://github.com/openai/openai-agents-python/pull/4245
* fix: redact JSON validation errors by @seratch in https://github.com/openai/openai-agents-python/pull/4211
* fix: copy raw_responses when building a RunState by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4237
* fix: keep empty turns in the nested conversation history by @abhay-codes07 in https://github.com/openai/openai-agents-python/pull/4230
* fix: keep tool guardrail results when a resumed run interrupts again by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4239
* fix: work on copies of the lists a resumed run adopts from RunState by @hsusul in https://github.com/openai/openai-agents-python/pull/4251
* fix: strip placeholder item IDs without provider_data on the Responses path by @LeSingh1 in https://github.com/openai/openai-agents-python/pull/4266
* fix: bind tool approvals to concrete invocations by @seratch in https://github.com/openai/openai-agents-python/pull/4257
* fix: normalize optional fields in tool invocation identity by @seratch in https://github.com/openai/openai-agents-python/pull/4289
* fix: count requests when providers omit usage by @seratch in https://github.com/openai/openai-agents-python/pull/4290
* fix: suppress pydantic serializer warnings by @seratch in https://github.com/openai/openai-agents-python/pull/4291
* fix: keep FunctionTool subclasses copyable by @seratch in https://github.com/openai/openai-agents-python/pull/4311
* fix: preserve streamed guardrail session state by @seratch in https://github.com/openai/openai-agents-python/pull/4312
* fix: keep acknowledged safety checks serializable after restore by @ribhavjain in https://github.com/openai/openai-agents-python/pull/4316
* fix: preserve default-valued fields in serialized tool output by @hsusul in https://github.com/openai/openai-agents-python/pull/4307
* fix: strip output-only created_by when replaying model output as input by @hsusul in https://github.com/openai/openai-agents-python/pull/4308
* fix: preserve local shell outputs across RunState resume by @seratch in https://github.com/openai/openai-agents-python/pull/4320
* fix: serialize containers of models and dataclasses as structured data by @ribhavjain in https://github.com/openai/openai-agents-python/pull/4339
* fix: reject schemas that exceed safe recursion depth by @seratch in https://github.com/openai/openai-agents-python/pull/4358
* fix: reject unsafe strict-schema ref siblings by @seratch in https://github.com/openai/openai-agents-python/pull/4356
* fix(sandbox): reject unsafe mount credential configurations by @seratch in https://github.com/openai/openai-agents-python/pull/4255
  * fix(extensions): settle snapshot directory mount transitions for Modal by @seratch in https://github.com/openai/openai-agents-python/pull/4315
  * fix(sandbox): preserve sandbox error contracts during mount redaction by @seratch in https://github.com/openai/openai-agents-python/pull/4344
  * feat(sandbox): add explicit mount credential exposure acknowledgements by @seratch in https://github.com/openai/openai-agents-python/pull/4321
* fix(sandbox): cancel sibling env resolvers when one fails by @PranavMishra28 in https://github.com/openai/openai-agents-python/pull/4195
* fix(sandbox): encode Blaxel terminal WebSocket URL query values by @abhay-codes07 in https://github.com/openai/openai-agents-python/pull/4217
* fix(sandbox): stop splitting Cloudflare SSE events at chunk boundaries by @abhay-codes07 in https://github.com/openai/openai-agents-python/pull/4215
* fix(sandbox): keep move_to when coercing apply_patch operation mappings by @hsusul in https://github.com/openai/openai-agents-python/pull/4242
* fix(sandbox): retain program items in memory rollouts by @seratch in https://github.com/openai/openai-agents-python/pull/4276
* fix(sandbox): restore archived file modes when extracting a workspace tar by @hsusul in https://github.com/openai/openai-agents-python/pull/4287
* fix(sandbox): keep source entry metadata when lazily loading a skill by @hsusul in https://github.com/openai/openai-agents-python/pull/4294
* fix(mcp): hosted MCP approval identity by @seratch in https://github.com/openai/openai-agents-python/pull/4256
* fix(mcp): keep MCP error content when structured output is enabled by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4224
* fix(mcp): build the active server list without re-consuming the iterable by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4235
* fix(mcp): preserve free-form MCP object schemas by @seratch in https://github.com/openai/openai-agents-python/pull/4310
* fix(mcp): serialize non-text content blocks as JSON instead of Python repr by @ribhavjain in https://github.com/openai/openai-agents-python/pull/4338
* fix(mcp): serialize manager lifecycle operations by @seratch in https://github.com/openai/openai-agents-python/pull/4340
* fix(mcp): bound lifecycle and CI waits by @seratch in https://github.com/openai/openai-agents-python/pull/4342
* fix(chat-completions): keep url citations when converting chat completions output by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4222
* fix(chat-completions): assemble chat completions content parts in content index order by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4236
* fix(chat-completions): propagate the OpenAI request ID on the Chat Completions path by @hsusul in https://github.com/openai/openai-agents-python/pull/4243
* fix(chat-completions): keep url citations on the streamed chat completions path by @Luccacvb in https://github.com/openai/openai-agents-python/pull/4252
* fix(chat-completions): announce the chat completions assistant message once by @hsusul in https://github.com/openai/openai-agents-python/pull/4275
* fix(chat-completions): convert input_file items that reference a file_id on the Chat Completions path by @hsusul in https://github.com/openai/openai-agents-python/pull/4295
* fix(chat-completions): raise on audio output in the streamed chat completions path by @Luccacvb in https://github.com/openai/openai-agents-python/pull/4309
* fix(chat-completions): omit parallel_tool_calls without tools on the Chat Completions path by @Luccacvb in https://github.com/openai/openai-agents-python/pull/4359
* fix(sessions): release SQLite engine config entries when engines are collected by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4210
* fix(sessions): enforce closed state on SQLite session empty add_items by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4231
* fix(sessions): make session mutations atomic by @seratch in https://github.com/openai/openai-agents-python/pull/4212
* fix(sessions): preserve required program item ids for OpenAI conversations by @hsusul in https://github.com/openai/openai-agents-python/pull/4253
* fix(sessions): apply the reasoning item id policy to stored session history by @LeSingh1 in https://github.com/openai/openai-agents-python/pull/4278
* fix(sessions): preserve DaprSession created_at across writes by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4213
* fix(sessions): strip placeholder item IDs before Conversations persistence by @hsusul in https://github.com/openai/openai-agents-python/pull/4288
* fix(sessions): preserve falsey compaction decision hooks by @hsusul in https://github.com/openai/openai-agents-python/pull/4299
* fix(sessions): restore session history when compaction replacement is cancelled by @nothariharan in https://github.com/openai/openai-agents-python/pull/4298
* fix(sessions): prune orphaned tool outputs from limited sessions by @seratch in https://github.com/openai/openai-agents-python/pull/4324
* fix(realtime): apply tool call item updates to session history by @hsusul in https://github.com/openai/openai-agents-python/pull/4284
* fix(realtime): preserve falsey custom models by @hsusul in https://github.com/openai/openai-agents-python/pull/4286
* fix(realtime): compute G.711 audio length for typed and mapping format spellings by @abhay-codes07 in https://github.com/openai/openai-agents-python/pull/4292
* fix(voice): forward TTSModelSettings.speed to the OpenAI speech API by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4220
* fix(voice): keep the word separator when flushing streamed sentences by @abhay-codes07 in https://github.com/openai/openai-agents-python/pull/4227
* fix(voice): start the dispatcher when a session ends with no turns by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4259
* fix(voice): report transcription session close failures to the consumer by @Luccacvb in https://github.com/openai/openai-agents-python/pull/4343
* fix(tracing): release the trace scope when a generator is closed by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4221
* fix(tracing): release the span scope when a generator is closed by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4233
* fix(tracing): catch only the context reset on generator close by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4232
* fix(extensions): harden tool output trimming contracts by @seratch in https://github.com/openai/openai-agents-python/pull/4204
* fix(extensions): forward prompt_cache_retention on the any-llm Responses path by @hsusul in https://github.com/openai/openai-agents-python/pull/4248
* fix(extensions): resolve the any-llm default model at call time by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4219
* fix(extensions): surface content filter refusals on the any_llm chat path by @adityasingh2400 in https://github.com/openai/openai-agents-python/pull/4234
* fix(extensions): omit litellm's parallel_tool_calls without tools by @seratch in https://github.com/openai/openai-agents-python/pull/4330

### Documentation & Other Changes

* docs: correct nonexistent guardrail type names by @dfedoryshchev in https://github.com/openai/openai-agents-python/pull/4218
* docs(tracing): fix custom span output example by @XSAM in https://github.com/openai/openai-agents-python/pull/4196
* docs: voice quickstart also needs sounddevice by @ColebyPearson in https://github.com/openai/openai-agents-python/pull/4250
* docs: improve translation source clarity by @seratch in https://github.com/openai/openai-agents-python/pull/4306
* perf: run serial tests alongside xdist by @seratch in https://github.com/openai/openai-agents-python/pull/4197
* perf: add source-only typecheck target by @seratch in https://github.com/openai/openai-agents-python/pull/4200
* perf: accelerate developer checks by @seratch in https://github.com/openai/openai-agents-python/pull/4258
* test: harden release compatibility contracts by @seratch in https://github.com/openai/openai-agents-python/pull/4297
* ci: check prospective release contracts before merge by @seratch in https://github.com/openai/openai-agents-python/pull/4347
* fix: make release API contract promotion policy-driven by @seratch in https://github.com/openai/openai-agents-python/pull/4349
* fix: freeze Runloop platform properties by @seratch in https://github.com/openai/openai-agents-python/pull/4355
* test: isolate released API source validation by @seratch in https://github.com/openai/openai-agents-python/pull/4350
* release: 0.20.0 by @seratch in https://github.com/openai/openai-agents-python/pull/4348

## New Contributors
* @XSAM made their first contribution in https://github.com/openai/openai-agents-python/pull/4196
* @abhay-codes07 made their first contribution in https://github.com/openai/openai-agents-python/pull/4217
* @ColebyPearson made their first contribution in https://github.com/openai/openai-agents-python/pull/4250
* @Luccacvb made their first contribution in https://github.com/openai/openai-agents-python/pull/4252
* @ojassharma7 made their first contribution in https://github.com/openai/openai-agents-python/pull/4245
* @nothariharan made their first contribution in https://github.com/openai/openai-agents-python/pull/4298
* @ribhavjain made their first contribution in https://github.com/openai/openai-agents-python/pull/4316

**Full Changelog**: https://github.com/openai/openai-agents-python/compare/v0.19.4...v0.20.0

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.20.0` · 2026-08-11 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.20.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
