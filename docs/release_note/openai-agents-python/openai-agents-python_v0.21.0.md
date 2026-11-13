---
title: "openai-agents-python v0.21.0"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.21.0"
published: "2026-08-15"
type: "minor"
lang: "en"
summary: "This minor release does not introduce a known breaking SDK behavior change. The minor version bump is for the new provider-neutral testing APIs and the OpenAI Python v3 compatibility update."
---

# openai-agents-python v0.21.0

## Key Changes

This minor release does not introduce a known breaking SDK behavior change. The minor version bump is for the new provider-neutral testing APIs and the OpenAI Python v3 compatibility update.

### Highlights:

-   Added `agents.testing`, `agents.realtime.testing`, and `agents.voice.testing` utilities for deterministic Agent, Sandbox, Realtime, and Voice workflow tests without provider requests.
-   Updated OpenAI provider compatibility to `openai>=3.0.0,<4`, including HTTPX2-aware request, response, transport, and exception handling.
-   Hardened RunState interruption snapshots, recursive agent-tool approvals, max-turn finalization, streaming cleanup, and sensitive-error redaction.
-   Improved MCP lifecycle snapshot isolation and added configurable retry backoff ceilings.
-   Added Sandbox Runloop existing-secret support and tightened view-image path grants.
-   Added stricter Voice validation for invalid channels, frame rates, incomplete multichannel frames, and non-finite audio rates.

## What's Changed

* feat: support OpenAI Python 3 and HTTPX2 by @seratch in https://github.com/openai/openai-agents-python/pull/4380
* feat: add scripted model test utilities by @seratch in https://github.com/openai/openai-agents-python/pull/4362
  * fix: freeze public testing module contracts by @seratch in https://github.com/openai/openai-agents-python/pull/4386
  * fix: freeze public testing API state contracts by @seratch in https://github.com/openai/openai-agents-python/pull/4404
  * fix(core): preserve scripted annotation streaming across Python SDK releases by @apcha-oai in https://github.com/openai/openai-agents-python/pull/4422
* fix(core): isolate interruption results by @hsusul in https://github.com/openai/openai-agents-python/pull/4384
* fix(core): close the model stream when a streamed turn ends in a terminal failure by @Luccacvb in https://github.com/openai/openai-agents-python/pull/4366
* fix(core): redact tool output value from output-type validation errors by @hsusul in https://github.com/openai/openai-agents-python/pull/4396
* fix(core): align Responses parallel tool calls with converted tools by @seratch in https://github.com/openai/openai-agents-python/pull/4405
* fix(core): max-turn handler session semantics by @seratch in https://github.com/openai/openai-agents-python/pull/4412
* fix(core): detach RunState interruption snapshots by @seratch in https://github.com/openai/openai-agents-python/pull/4409
* fix(core): isolate RunState checkpoint tool decisions by @seratch in https://github.com/openai/openai-agents-python/pull/4413
* fix(core): resume recursive agent tool approvals by @seratch in https://github.com/openai/openai-agents-python/pull/4414
* fix(mcp): stop handing the tools cache to callers by @chinmayv095 in https://github.com/openai/openai-agents-python/pull/4424
* fix(mcp): protect manager lifecycle state snapshots by @seratch in https://github.com/openai/openai-agents-python/pull/4407
* fix(mcp): isolate manager lifecycle results by @hsusul in https://github.com/openai/openai-agents-python/pull/4368
* fix(mcp): add configurable retry backoff ceiling by @seratch in https://github.com/openai/openai-agents-python/pull/4379
* fix(realtime): handle non-finite audio rates by @hsusul in https://github.com/openai/openai-agents-python/pull/4419
* fix(sandbox): expose the scripted sandbox session type by @seratch in https://github.com/openai/openai-agents-python/pull/4406
* fix(sandbox): apply stacked anchors sequentially by @seratch in https://github.com/openai/openai-agents-python/pull/4369
* fix(sandbox): snapshot HTTP proxy headers by @hsusul in https://github.com/openai/openai-agents-python/pull/4397
* fix(sandbox): snapshot per-op audit policies by @hsusul in https://github.com/openai/openai-agents-python/pull/4398
* fix(sandbox): honor view_image extra path grants by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4417
* fix(sessions): handle zero conversation history limits by @hsusul in https://github.com/openai/openai-agents-python/pull/4365
* fix(voice): honor WAV sample width by @FU-max-boop in https://github.com/openai/openai-agents-python/pull/4361
* fix(voice): reject incomplete multichannel audio frames by @seratch in https://github.com/openai/openai-agents-python/pull/4370
* fix(voice): reject non-positive audio channels by @hansu650 in https://github.com/openai/openai-agents-python/pull/4372
* fix(voice): reject non-positive audio frame rates by @hsusul in https://github.com/openai/openai-agents-python/pull/4382
* fix(voice): stop buffering audio when audio tracing is disabled by @rxits in https://github.com/openai/openai-agents-python/pull/4411
* fix(extensions): gate AnyLLM parallel tool calls on converted tools by @weivwang in https://github.com/openai/openai-agents-python/pull/4363
* fix(extensions): preserve resume argument ordering by @viyatb-oai in https://github.com/openai/openai-agents-python/pull/4400
* fix(extensions): let managed_secrets reference existing Runloop secrets by @xumaple in https://github.com/openai/openai-agents-python/pull/4378

### Documentation & Other Changes

* docs: synchronize v0.20.0 features by @seratch in https://github.com/openai/openai-agents-python/pull/4280
* docs: clarify PGP key location by @jaideeppyne in https://github.com/openai/openai-agents-python/pull/4371
* test: order test spans by start sequence, not by started_at alone by @ErenAta16 in https://github.com/openai/openai-agents-python/pull/4392
* release: 0.21.0 by @seratch in https://github.com/openai/openai-agents-python/pull/4387

## New Contributors
* @FU-max-boop made their first contribution in https://github.com/openai/openai-agents-python/pull/4361
* @weivwang made their first contribution in https://github.com/openai/openai-agents-python/pull/4363
* @jaideeppyne made their first contribution in https://github.com/openai/openai-agents-python/pull/4371
* @hansu650 made their first contribution in https://github.com/openai/openai-agents-python/pull/4372
* @xumaple made their first contribution in https://github.com/openai/openai-agents-python/pull/4378
* @viyatb-oai made their first contribution in https://github.com/openai/openai-agents-python/pull/4400
* @ErenAta16 made their first contribution in https://github.com/openai/openai-agents-python/pull/4392
* @apcha-oai made their first contribution in https://github.com/openai/openai-agents-python/pull/4422
* @sylvesterkaczmarek made their first contribution in https://github.com/openai/openai-agents-python/pull/4417

**Full Changelog**: https://github.com/openai/openai-agents-python/compare/v0.20.0...v0.21.0

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.21.0` · 2026-08-15 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.21.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
