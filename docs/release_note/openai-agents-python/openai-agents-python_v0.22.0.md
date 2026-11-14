---
title: "openai-agents-python v0.22.0"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.22.0"
published: "2026-08-19"
type: "minor"
lang: "en"
summary: "Version 0.22.0 is a minor release because it adds substantial runtime hardening and tightens an existing provider configuration contract."
---

# openai-agents-python v0.22.0

## Key Changes

Version 0.22.0 is a minor release because it adds substantial runtime hardening and tightens an existing provider configuration contract. Applications that combine an explicit `openai_client` with `organization` or `project` must move those values to the `AsyncOpenAI` client.

### Highlights:

-   Redacts terminal function-tool output rejected by agent output guardrails from replayable and persisted SDK state.
-   Raises `ModelBehaviorError` for non-streaming Responses with terminal status `failed` or `incomplete`.
-   Rejects conflicting provider options when `OpenAIProvider` receives an explicit client.
-   Isolates usage accounting between independent `RunState` checkpoints while preserving nested-agent aggregation.
-   Expands agents registered through `handoff(agent)` in generated graphs.
-   Clarifies the existing shallow-copy behavior of `Agent.clone()` and `RealtimeAgent.clone()`.

## What's Changed

* fix(core): redact blocked tool outputs from replay state by @seratch in https://github.com/openai/openai-agents-python/pull/4507
* fix(core): reject ignored explicit-client options for OpenAIProvider by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4497
* fix(core): preserve Griffe logger inheritance by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4494
* fix(core): reject terminal failed/incomplete responses in non-streaming get_response by @weike-zhang in https://github.* * fix(core): isolate usage between RunState checkpoints by @chiruu12 in https://github.com/openai/openai-agents-python/pull/4479
fix(sandbox): require apply_patch update hunks by @li2631026381-alt in https://github.com/openai/openai-agents-python/pull/4470
* fix(sandbox): enforce Windows mypy compatibility by @seratch in https://github.com/openai/openai-agents-python/pull/4499
* fix(tracing): respect model-data logging redaction for record_model_error_on_span by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4496
* fix(tracing): clean up processors after tracing is disabled by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4502
* fix(visualization): expand handoff() targets in agent graphs by @hsusul in https://github.com/openai/openai-agents-python/pull/4517

### Documentation & Other Changes

* docs: document v0.21.1 runtime behavior by @seratch in https://github.com/openai/openai-agents-python/pull/4460
* docs: correct Agent.clone list attribute semantics by @thegoodengineer in https://github.com/openai/openai-agents-python/pull/4474
* docs: add testing resources to llms indexes by @teachershuang in https://github.com/openai/openai-agents-python/pull/4509
* ci: align Python version coverage by @seratch in https://github.com/openai/openai-agents-python/pull/4475
* test: use sys.executable instead of tee for the stdio placeholder command by @ErenAta16 in https://github.com/openai/openai-agents-python/pull/4478
* fix: keep Codex verification for development sandboxed by @seratch in https://github.com/openai/openai-agents-python/pull/4508
com/openai/openai-agents-python/pull/4516
* release: 0.22.0 by @seratch in https://github.com/openai/openai-agents-python/pull/4523

## New Contributors
* @li2631026381-alt made their first contribution in https://github.com/openai/openai-agents-python/pull/4470
* @thegoodengineer made their first contribution in https://github.com/openai/openai-agents-python/pull/4474
* @teachershuang made their first contribution in https://github.com/openai/openai-agents-python/pull/4509
* @weike-zhang made their first contribution in https://github.com/openai/openai-agents-python/pull/4516
* @chiruu12 made their first contribution in https://github.com/openai/openai-agents-python/pull/4479

**Full Changelog**: https://github.com/openai/openai-agents-python/compare/v0.21.1...v0.22.0

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.22.0` · 2026-08-19 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
