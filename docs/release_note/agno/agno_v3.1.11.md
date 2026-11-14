---
title: "agno v3.1.11"
project: "agno"
repo: "agno-agi/agno"
tag: "v3.1.11"
version: "v3.1.11"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "Harness Agents in Teams and Workflows: ClaudeAgent and CodexAgent can now be members of an Agno Team and steps of a Workflow, including inside Parallel, Loop, Condition and Router."
---

# agno v3.1.11

# Changelog

## New Features:

- **Harness Agents in Teams and Workflows**: `ClaudeAgent` and `CodexAgent` can now be members of an Agno `Team` and steps of a `Workflow`, including inside `Parallel`, `Loop`, `Condition` and `Router`. The team leader delegates to them with `delegate_task_to_member` like any other member, each harness runs with its own model, tools and workspace, keeps its own conversation across turns of the same session, and the team or workflow collects its runs as usual. A harness agent with `sandbox=` runs each turn in its own container as a member or step, and AgentOS lists harness members on the team page. See `cookbook/frameworks/harness_teams/` and `cookbook/frameworks/harness_workflows/`.
- **Session Search**: Added `GET /sessions/filter-schema` and `POST /sessions/search` with nested AND/OR/NOT filters on session name, session/user/component IDs, session type and created/updated timestamps, matching the Traces API. Predicates are applied before counting and pagination in PostgreSQL and SQLite, with a batched fallback for other adapters. Sync and async client methods are included.
- **Company Tasks**: `POST /company/tasks` accepts `status`, so Tasks can be created in Backlog, Ready or Cancelled. Tasks can move between any stages, Done and Cancelled Tasks can reopen, and title and brief can be edited at any stage. In progress still starts only with a run, and moving out of it while that run is executing or paused is refused.
- **Company Routines**: Added `POST /company/routines/{id}/cancel`, `/archive`, `/restore` and admin-only `DELETE /company/routines/{id}`. `GET /company/routines` takes `sort_by` and `sort_order`. Pause and resume on an on-demand Routine return `409`, and scheduler runs no longer move `updated_at`.

## Improvements:

- **Cookbooks**: Added a customer feedback workflow for the AgentOS UI, where Company Manager reads Markdown feedback, proposes evidence-backed Projects and Backlog Tasks, and leaves acceptance to a human.
- **README**: Aligned the README with the docs introduction and the self-improving agent platform positioning.

## Bug Fixes:

- **ReaderFactory**: `create_reader()` now returns a fresh reader configured with the per-call options instead of a cached singleton, so `chunk_size` and other overrides are respected and mutations no longer leak across `Knowledge` instances.
- **Workflow Step Content**: `StepOutput.to_dict()` keeps ints, floats, bools and strs as themselves instead of stringifying them, so a step that returned `0` or `False` no longer comes back as `"0"` or `"False"` after a HITL resume, a session reload, or through the AgentOS workflow API.
- **HuggingFace**: `default_headers` is mapped to the SDK's `headers`, `store` is sent in `extra_body`, and `max_retries` and `default_query` are deprecated and ignored instead of raising `TypeError`. An agent with no tools no longer sends `tools=[]`, which made non-streaming runs return `None` content.
- **Google Calendar**: `find_available_slots` now works in the authenticated user's timezone instead of UTC, so working hours and date-only inputs mean the user's local day. It also fetches events for the full scanned window, so busy time on the last day of a range is no longer offered as free.
- **Company Archive**: Archived Tasks no longer block archiving their Project or Product. Visible active Tasks still block as before.
- **RedisDb**: `keyword_search` now passes the caller's `limit` to redisvl instead of silently returning its default of 10 results.
- **MMRReranker**: `rerank` and `arerank` return no documents when `limit` is zero or negative instead of always returning the closest match.
- **FieldLabeledCSVReader**: `page_size=0` is rejected alongside negative values instead of silently returning no documents on larger files.
- **AgentOSClient**: Removed the documented but non-existent `stream` argument from `continue_agent_run`. Use `continue_agent_run_stream` to stream.


## What's Changed
* cookbook: add customer feedback UI workflow by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11271
* chore: refresh platform README by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11291
* chore: clarify README self-improvement workflow by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11293
* [fix] Return no documents when the MMR reranker limit is zero by @makiaveli1 in https://github.com/agno-agi/agno/pull/10450
* fix: drop the non-existent `stream` arg from continue_agent_run by @yetuge in https://github.com/agno-agi/agno/pull/10453
* chore: align README with self-improving agent platform positioning by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11301
* fix: pass the caller's limit to redisvl in RedisDb.keyword_search by @Ayoubhm07 in https://github.com/agno-agi/agno/pull/10781
* fix: don't let archived Tasks block Company archive by @Ayush0054 in https://github.com/agno-agi/agno/pull/11292
* fix: query the scanned window in find_available_slots by @devYRPauli in https://github.com/agno-agi/agno/pull/10706
* fix: keep JSON-native step content types across a workflow session reload by @kausmeows in https://github.com/agno-agi/agno/pull/11304
* fix: send HuggingFace client and request params under the names the SDK takes by @kausmeows in https://github.com/agno-agi/agno/pull/11307
* [fix] Reject zero page size in field-labeled CSV reader by @jiangjiang248 in https://github.com/agno-agi/agno/pull/10602
* chore: align README with docs introduction by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11313
* fix: use the authenticated user's timezone for calendar slots by @Himanshu040604 in https://github.com/agno-agi/agno/pull/11306
* fix: ensure ReaderFactory respects per-call options and avoids mutable shared state by @Fazlul105 in https://github.com/agno-agi/agno/pull/11296
* test: move the OpenAI reasoning tests off the retired o3-mini by @kausmeows in https://github.com/agno-agi/agno/pull/11331
* test: move the team event streaming tests off the retired o3-mini by @harshsinha03 in https://github.com/agno-agi/agno/pull/11335
* feat: let Claude Code and Codex agents be members of an Agno team by @kausmeows in https://github.com/agno-agi/agno/pull/11241
* feat: add advanced session search and filter schema by @pritipsingh in https://github.com/agno-agi/agno/pull/11319
* feat: Company Task stages on create and move, Routine cancel, archive and delete by @harshsinha03 in https://github.com/agno-agi/agno/pull/11312
* fix: don't let archived Tasks block Project completion or retention by @ysolanky in https://github.com/agno-agi/agno/pull/11336
* chore: Release v3.1.11 by @kausmeows in https://github.com/agno-agi/agno/pull/11334

## New Contributors
* @Ayoubhm07 made their first contribution in https://github.com/agno-agi/agno/pull/10781

**Full Changelog**: https://github.com/agno-agi/agno/compare/v3.1.10...v3.1.11

---

> **Source** [agno-agi/agno](https://github.com/agno-agi/agno) · `v3.1.11` · 2026-10-27 · [upstream release](https://github.com/agno-agi/agno/releases/tag/v3.1.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
