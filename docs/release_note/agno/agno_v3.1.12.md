---
title: "agno v3.1.12"
project: "agno"
repo: "agno-agi/agno"
tag: "v3.1.12"
version: "v3.1.12"
published: "2026-10-29"
type: "patch"
lang: "en"
---

# agno v3.1.12

# Changelog

## New Features:

- **Native Approvals for Harness Agents**: Claude's and Codex's own permission requests now reach the AgentOS approval UI. When the agent has a database, including one AgentOS supplies, a native request persists a PAUSED run that shows up in the existing chat and Approvals views, and Resolve plus Continue Run delivers the decision back to the same native execution without replaying the prompt. The harness's own policy decides when to ask — Claude keeps its `permission_mode` and explicit permission callbacks, Codex supports `approval_policy="on-request" | "untrusted" | "never"` alongside its existing SDK `auto_review` and `deny_all` modes — so there is no separate Agno setting to turn on. Decisions are validated against the exact action requested, with sync and async continuation, cancellation, expiry and storage-failure handling, and sandboxed agents keep this across Docker and AgentCore: capability negotiation, a decision RPC, fenced persistence, reattachment after an API-worker loss, separate approval-wait and execution budgets, and no replay after process loss. Note that a `CodexAgent` with no approval settings now runs under the native `on-request` policy, so a request that previously went nowhere pauses the run instead; `hitl_timeout` (default 900s) bounds how long it waits. See `cookbook/frameworks/human_in_the_loop/`.
- **Initially Disabled Company Routines**: `Routine(enabled=False)` lets a template ship an inactive Routine that a user turns on later from the UI, with `True` still the default. Disabled Routines are created atomically, stay linked to their Product and visible in listings, are skipped by the scheduler, and keep the user's saved choice across restarts. The flag is honored in Python and YAML bootstrap, the setup and creation APIs, the sync and async Company Manager, and the Company tools. Duplicate create requests still return `409` and cannot enable an existing Routine, and the existing pause/resume endpoints enable it without recreating it. See `cookbook/05_agent_os/30_company/11_disabled_routine.py`.
- **Headline Numbers on Charts**: `ChartTools.create_chart()` takes an optional preformatted `value` — a total or latest value such as `"$22.3K"` or `"94%"` — emitted as `"value"` in the chart block and rendered by Agno OS beside the chart title. The docstring tells the model to leave it out when no single number summarizes the chart, so averages and rates are not summed.

## Improvements:

- **Company Routine Sorting**: `GET /company/routines` now also sorts by `next_run_at`, `schedule_type` and `enabled`, so Agno OS can sort its routines table by Next run at, Schedule and Active. Paused and on-demand Routines have no upcoming run, so they come last in either direction, and Routines with the same value keep their creation order.
- **Cookbooks**: Added an `ApifyTools` job search example that caps the Actor's item count with a tool hook and trims each dataset item to title, company, location, posted date and link, so a broad search stays small in context. Added a fully local Pixeltable RAG example that writes chunks through `langchain-pixeltable` and searches them with `LangChainVectorDb`, using local `sentence-transformers` embeddings and Ollama — no embedding API key and no separate vector database server.

## Bug Fixes:

- **FastAPI Native Tracing**: FastAPI 0.142.0 enables its own OpenTelemetry tracing as soon as a global tracer provider exists, which `AgentOS(tracing=True)` installs, so FastAPI's request spans were stored alongside Agno's. Every run became a child of the request span and traces were recorded as `fastapi.dependencies` with empty `run_id`, `session_id` and `agent_id`, breaking the Runs view, while each UI request stored a trace of its own. AgentOS now opts the app it builds out of FastAPI's tracing, and `setup_tracing()` filters foreign spans so a stored trace is rooted at the Agno run. Apps without `tracing=True` keep FastAPI's defaults, and users' own spans created inside tools are still kept.
- **Company Routine Cancel**: `POST /company/routines/{id}/cancel` recorded the run as `cancelled` as soon as the executor accepted the request, but the agent only stops at its next checkpoint. For that window the API reported `cancelled` while the agent was still working, and archive, delete and executor change went through mid-run. The route now records a status only from durable evidence: a live run is left alone for `ScheduleExecutor` to settle, a finished run is written through the scheduler's own mapping, a missing run is recorded `cancelled`, and a crashed run past its timeout no longer blocks archive, delete or executor change.
- **AccuracyEval Judge**: `AccuracyEval` with no `model` and no `evaluator_agent` built its judge with `OpenAIChat(id="o4-mini")`, which OpenAI shut down on 2026-10-23, so every judge call returned `404 model_not_found`, no iteration scored, and the eval reported an empty run instead of the provider error behind it. The default is now `gpt-5.6-terra`, the replacement OpenAI lists for `o4-mini`. The examples that pinned retired models move across too, and the accuracy examples switch to `OpenAIResponses` because `OpenAIChat` rejects function tools for these models.
- **Knowledge Per-Upload Chunking**: `POST /knowledge/content` accepts per-upload `chunker`, `chunk_size` and `chunk_overlap`, and `process_content()` applied them straight to `content.reader` — the shared custom or already-resolved reader on the knowledge base. Every later upload using that reader kept the previous upload's chunker until the process restarted. The upload now gets its own shallow copy of the reader before the chunking strategy is applied, so the knowledge base keeps its own configuration.

## What's Changed
* fix: knowledge keep per-upload chunker options off the knowledge base reader by @sunhouy in https://github.com/agno-agi/agno/pull/11327
* fix: move the AccuracyEval judge and examples off retired OpenAI models by @kausmeows in https://github.com/agno-agi/agno/pull/11347
* [cookbook] Add a local Pixeltable RAG example by @pierrebrunelle in https://github.com/agno-agi/agno/pull/11314
* [cookbook] ApifyTools job search with capped runs and trimmed results by @johnisanerd in https://github.com/agno-agi/agno/pull/11305
* feat: show a headline number on ChartTools charts by @anuragts in https://github.com/agno-agi/agno/pull/11110
* fix: keep FastAPI native spans out of Agno traces by @kausmeows in https://github.com/agno-agi/agno/pull/11346
* fix: record a Routine cancel only once its run has stopped [SDK-643] by @harshsinha03 in https://github.com/agno-agi/agno/pull/11352
* chore: README by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11380
* feat: support initially disabled Company routines by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11372
* feat: route native Claude and Codex approvals through AgentOS by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11374
* feat: sort routines by next run, schedule type and enabled by @Ayush0054 in https://github.com/agno-agi/agno/pull/11382
* chore: core release v3.1.12 by @kausmeows in https://github.com/agno-agi/agno/pull/11383

## New Contributors
* @sunhouy made their first contribution in https://github.com/agno-agi/agno/pull/11327
* @pierrebrunelle made their first contribution in https://github.com/agno-agi/agno/pull/11314
* @johnisanerd made their first contribution in https://github.com/agno-agi/agno/pull/11305

**Full Changelog**: https://github.com/agno-agi/agno/compare/v3.1.11...v3.1.12

---

> **Source** [agno-agi/agno](https://github.com/agno-agi/agno) · `v3.1.12` · 2026-10-29 · [upstream release](https://github.com/agno-agi/agno/releases/tag/v3.1.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
