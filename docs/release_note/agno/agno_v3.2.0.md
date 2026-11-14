---
title: "agno v3.2.0"
project: "agno"
repo: "agno-agi/agno"
tag: "v3.2.0"
version: "v3.2.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "Agno v3.2 makes Super Agent faster and more capable with direct tools, expands Company task governance and coordination, introduces database-backed AgentOS homepage metrics, upgrades A2A to the v1.0 protocol, updates…"
---

# agno v3.2.0

## Summary

Agno v3.2 makes Super Agent faster and more capable with direct tools, expands Company task governance and coordination, introduces database-backed AgentOS homepage metrics, upgrades A2A to the v1.0 protocol, updates the Slack interface to use the Bolt SDK and makes external agents first-class stored components.

## Changelog

## Breaking changes

- **OS Manager defaults and validation:** `OSManager.tool_call_limit` now defaults to 24 (was 8), and `num_history_runs` defaults to 5 (was 7). AgentOS refuses startup when `OSManager(root=...)` is combined with custom tools named `read_file`, `list_files`, or `search_content`.
- **A2A v1.0:** AgentOS and `A2AClient` now run on the official `a2a-sdk` 1.x, so upgrade the Agno server and client together. ([#10956](https://github.com/agno-agi/agno/pull/10956))
    - The `/v1/message:*` and `/v1/tasks:*` routes are removed; use each entity's A2A endpoint instead.
    - Stream events and response artifacts follow the v1.0 shape.
    - The `a2a` extra now requires `a2a-sdk[http-server]>=1.2.2,<2`.
    - Direct imports of removed A2A helpers need updating.
    - Standard v0.3 clients still work through the compatibility wire by default.
- **Slack interface:** the interface now runs on Slack Bolt, and only the person who started a run can Approve or Deny it, unless they're named in `approvers=` or mapped to the same user with `users=`. ([#11599](https://github.com/agno-agi/agno/pull/11599))
    - The `slack` extra now requires `slack_bolt>=1.29.0,<2` and `slack_sdk>=3.43.0,<4`; run `pip install -U "agno[slack]"`.
    - List anyone else who approves runs in `approvers=`.
    - AgentOS refuses startup when Slack serves `agent_os.manager` under `AgentOS(authorization=...)` or an authorization middleware without `users=`.
    - Direct imports of removed internal Slack helpers (`SlackEventHandler`, `HITLHandler`, `verify_slack_signature`) need updating.

## New features

- **Super Agent:** Super Agent now does the work itself instead of routing requests through manager members. Platform Builder is its only member. ([#11572](https://github.com/agno-agi/agno/pull/11572))
    - Lists and runs agents, teams, and workflows, and reads platform activity and schedules.
    - Uses Company, docs, source-file, and custom OS Manager tools, and reads the current chat history.
    - Its context includes accessible components, and every tool keeps its own permission check.
- **Company OS:** Routines get a dedicated runner, Tasks carry richer state, and published Studio components can execute work.
    - **Mini Agent for Routines:** Routines run on a restricted, non-chat Mini Agent with Company tools and packaged Routine skills, but no platform or general run tools. It is hidden from agent discovery, MCP, and A2A, and refuses non-Routine runs. ([#11572](https://github.com/agno-agi/agno/pull/11572))
    - **Task coordination:** Tasks expose `last_run` and API-computed `allowed_transitions`, support direct start, and record durable attempt state. Super Agent can start an accepted Task on the durable queue without blocking the conversation; human acceptance and review are unchanged. ([#11430](https://github.com/agno-agi/agno/pull/11430), [#11562](https://github.com/agno-agi/agno/pull/11562))
    - **Company details:** set a Company name and description in config, through `/company/details`, or from chat, with confirmation before replacing existing details. Super Agent gets fresh Company context on every run plus concise coordination guidance. ([#11502](https://github.com/agno-agi/agno/pull/11502), [#11569](https://github.com/agno-agi/agno/pull/11569), [#11563](https://github.com/agno-agi/agno/pull/11563))
    - **Studio components as executors:** published Studio agents, teams, and workflows can execute Company Tasks and Routines. Drafts cannot, and normal executor safety checks still apply. ([#11443](https://github.com/agno-agi/agno/pull/11443))
- **AgentOS homepage metrics:** new component, aggregate, and refresh tables back daily sessions, runs, tokens, users, models, cost, duration, time-to-first-token, and model latency through `/os/metrics/*`. Refreshes run in the background on all supported databases, rebuild only changed days, support ETags, and aggregate across multiple local or remote databases. ([#10874](https://github.com/agno-agi/agno/pull/10874))
- **Stored external-agent components:** `ClaudeAgent` and `CodexAgent` can be saved, loaded, versioned, listed, and run through the components API. Sandbox and output-schema references resolve through the registry, and unsupported or non-serializable settings fail explicitly instead of being silently dropped. ([#11268](https://github.com/agno-agi/agno/pull/11268))
- **A2A stored tasks and lifecycle:** A2A tasks are stored in the database and support send, stream, get, cancel, list, and subscribe. External agents are served, HITL and external tools can pause and continue, and Agent Cards advertise both v1.0 and v0.3 interfaces. ([#10956](https://github.com/agno-agi/agno/pull/10956))
- **Session-run pagination:** `GET /sessions/{session_id}/runs` supports opt-in cursor pagination via `limit`, `before_run_index`, and `after_run_index`. Pages keep top-level runs together with their nested member and step runs, and calls without `limit` still return a bare list. ([#8456](https://github.com/agno-agi/agno/pull/8456))
- **Slack interface:** Slack now supports the agent view, Stop, external agents and Super Agent results. Assistant-view apps keep working. ([#11599](https://github.com/agno-agi/agno/pull/11599))
    - **Agent view:** the shipped manifest turns on Slack's agent view, with suggested prompts on the Messages tab and a thread title set from the first direct message.
    - **Streaming:** replies stream with task cards and a status line, and long replies or runs past nine minutes continue in a new message instead of being cut.
    - **Stop:** pressing Stop cancels the run for Agents, Teams, Workflows, external agents and remote entities.
    - **External agents:** `ClaudeAgent` and `CodexAgent` run behind the interface, and their native approvals are answered from Slack, including sandboxed agents on the durable queue.
    - **Super Agent delivery:** `Slack(team=agent_os.manager)` serves Super Agent, and a Company Task it starts posts its result once into the thread that started it, across restarts.
    - **User mapping:** `users=` maps Slack users to AgentOS principals so each message runs with that principal's roles, and `approvers=` names who may approve, deny or stop any run.

## Improvements

- **Studio component ID recovery:** Studio tools normalize surrounding whitespace and invisible format characters in component IDs. Read-only `get_component` can resolve a visible leading ID followed by stray text and warns with the exact ID; mutating tools remain strict. ([#11572](https://github.com/agno-agi/agno/pull/11572))
- **Sandbox operation and deployment:** Redis is optional for sandboxed agents on the durable queue; Postgres plus a shared checkpoint store now handles cross-replica cancellation, resume, and recovery. Checkpoint restore/capture also run outside long-lived database transactions, avoiding blocked writers, exhausted connections, and lease expiry during large transfers. ([#11217](https://github.com/agno-agi/agno/pull/11217), [#11192](https://github.com/agno-agi/agno/pull/11192))
- **Metrics accuracy and compatibility:** run/session token totals now avoid double counting, include failed/cancelled external runs and all model/tool-loop calls, and report corrected timing and provider usage. MongoDB, Valkey, and DynamoDB legacy-run refreshes are corrected and optimized; no-op refresh messages move to debug; fresh installs no longer create the deprecated `agno_metrics` table. ([#11426](https://github.com/agno-agi/agno/pull/11426), [#11574](https://github.com/agno-agi/agno/pull/11574), [#11570](https://github.com/agno-agi/agno/pull/11570), [#11579](https://github.com/agno-agi/agno/pull/11579))
- **Manager and MCP discovery:** manifest descriptions are included in manager discovery, and MCP Server Cards honor `X-Forwarded-Proto` even without `X-Forwarded-Host`. ([#11394](https://github.com/agno-agi/agno/pull/11394), [#11396](https://github.com/agno-agi/agno/pull/11396))
- **Slack setup:** `Slack(...)` raises `ValueError` at startup without a token or signing secret, unsigned requests answer 403, the default suggested prompt no longer assumes web tools, and shutdown ends replies still running after 30 seconds. ([#11599](https://github.com/agno-agi/agno/pull/11599))

## Model and provider updates

- **Gemini:** supported Developer API features default to `v1beta` unless callers explicitly select a version; `generation_config` and `generative_model_kwargs` values are preserved instead of being overwritten by unset model fields. ([#11564](https://github.com/agno-agi/agno/pull/11564), [#10162](https://github.com/agno-agi/agno/pull/10162))
- **Mistral:** streaming calls now send Pydantic or dictionary output schemas, restoring native structured output constraints. ([#11273](https://github.com/agno-agi/agno/pull/11273))
- **OpenAIResponses:** per-request derived reasoning parameters no longer mutate shared model state or the caller's reasoning dictionary. ([#10310](https://github.com/agno-agi/agno/pull/10310))
- **Hugging Face:** streamed chunks retain every tool call instead of dropping all but the first; deprecated cookbook model IDs are updated. ([#11526](https://github.com/agno-agi/agno/pull/11526), [#11541](https://github.com/agno-agi/agno/pull/11541))
- **SmallestTools:** defaults move to the supported Lightning Pro model and voice catalog. ([#11479](https://github.com/agno-agi/agno/pull/11479))
- **SurrealDB:** the dependency is pinned below 3.0 to avoid resolving an incompatible major release. ([#11484](https://github.com/agno-agi/agno/pull/11484))

## Bug fixes

- **Run storage and ordering:** new runs never receive an index below a session's existing maximum after earlier runs are deleted; SingleStore run upserts work with this ordering; deleted runs are scrubbed atomically from the legacy session blob; Team and Workflow run deserialization restores `RunStatus`. ([#9938](https://github.com/agno-agi/agno/pull/9938), [#11508](https://github.com/agno-agi/agno/pull/11508), [#11496](https://github.com/agno-agi/agno/pull/11496), [#11424](https://github.com/agno-agi/agno/pull/11424))
- **Team list input:** roleful message lists retain their roles and attached media without leaking few-shot `additional_input` into memory updates or sending orphaned tool results. ([#11497](https://github.com/agno-agi/agno/pull/11497))
- **GmailTools:** list operations preserve HTML and nested message bodies. ([#10359](https://github.com/agno-agi/agno/pull/10359))
- **DuckDB:** full-text results are ordered by descending relevance. ([#11362](https://github.com/agno-agi/agno/pull/11362))
- **ApifyTools:** supports `apify-client` 3.x response models; the job-search cookbook now enforces its item cap. ([#11407](https://github.com/agno-agi/agno/pull/11407), [#11400](https://github.com/agno-agi/agno/pull/11400))
- **YouTube:** `SearchAPI` honors an explicit zero-result limit, and `YouTubeReader.async_read()` accepts the documented `name` argument. ([#11370](https://github.com/agno-agi/agno/pull/11370), [#11417](https://github.com/agno-agi/agno/pull/11417))
- **CSV readers:** `FieldLabeledCSVReader` handles `None` and non-string stream names. ([#11397](https://github.com/agno-agi/agno/pull/11397))
- **Slack replies and approvals:** ([#11599](https://github.com/agno-agi/agno/pull/11599))
    - A double click no longer runs a tool twice.
    - A Team member's error or completion no longer ends the Team's reply.
    - A Team inside a Team shows only the leader's answer.
    - A failing workflow step posts its error once.
    - Approval-card notices post in the card's thread.
    - `thread_broadcast` replies are answered.
    - Redirected files such as PDFs download.
    - A "Check status" rejection continues the run.

## Documentation and internal maintenance

- Added a Membase memory integration example and corrected the FlexAI DeepSeek image-input model ID. ([#11552](https://github.com/agno-agi/agno/pull/11552), [#11401](https://github.com/agno-agi/agno/pull/11401))
- Corrected tool docstring argument/return sections and clarified README capabilities and guide links. Company tool documentation no longer recommends unsupported direct MCP publication. ([#11523](https://github.com/agno-agi/agno/pull/11523), [#11516](https://github.com/agno-agi/agno/pull/11516), [#11388](https://github.com/agno-agi/agno/pull/11388), [#11444](https://github.com/agno-agi/agno/pull/11444), [#11578](https://github.com/agno-agi/agno/pull/11578))
- Fixed AG-UI typing with `jsonpatch` 1.41. A temporary Validation test-sharding change was reverted, leaving no release behavior change. ([#11438](https://github.com/agno-agi/agno/pull/11438), [#11234](https://github.com/agno-agi/agno/pull/11234), [#11490](https://github.com/agno-agi/agno/pull/11490))

## What's Changed
* chore: clarify README capabilities and link to guides by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11388
* fix: include manifest descriptions in manager discovery by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11394
* fix: honour X-Forwarded-Proto in MCP server card without X-Forwarded-Host by @sannya-singal in https://github.com/agno-agi/agno/pull/11396
* feat: add pagination to get session runs endpoint by @ysolanky in https://github.com/agno-agi/agno/pull/8456
* [fix] Apply the item cap in the Apify job search cookbook by @johnisanerd in https://github.com/agno-agi/agno/pull/11400
* docs: correct FlexAI DeepSeek image-input model id in cookbook README by @Akaliup in https://github.com/agno-agi/agno/pull/11401
* fix: support apify-client 3.x response models in ApifyTools by @johnisanerd in https://github.com/agno-agi/agno/pull/11407
* fix: accept the name argument in YouTubeReader.async_read by @Dengzi555 in https://github.com/agno-agi/agno/pull/11417
* [fix] Handle non-string and None stream names in FieldLabeledCSVReader (#11375) by @ansh-rohilla in https://github.com/agno-agi/agno/pull/11397
* fix: send the output schema on Mistral streaming calls by @ysolanky in https://github.com/agno-agi/agno/pull/11273
* fix: satisfy mypy with typed jsonpatch 1.41 in the AG-UI state delta by @sannya-singal in https://github.com/agno-agi/agno/pull/11438
* feat: let published Studio components execute Company Tasks by @mishramonalisha76 in https://github.com/agno-agi/agno/pull/11443
* fix: correct run and session token metrics by @harshsinha03 in https://github.com/agno-agi/agno/pull/11426
* [fix] Restore RunStatus on Team and Workflow run deserialization by @simpleqt in https://github.com/agno-agi/agno/pull/11424
* [fix] Honor zero YouTube result limits in SearchAPI by @RAMZI0TO99 in https://github.com/agno-agi/agno/pull/11370
* chore: update README by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11444
* fix: move sandbox checkpoint restore and capture out of the database transaction by @ysolanky in https://github.com/agno-agi/agno/pull/11192
* feat: move A2A to v1.0 with stored tasks, external agents and pause/continue [SDK-647] by @harshsinha03 in https://github.com/agno-agi/agno/pull/10956
* [fix] Rank DuckDB full-text matches by descending relevance by @RAMZI0TO99 in https://github.com/agno-agi/agno/pull/11362
* fix: make Redis optional for sandboxed agents on the durable queue by @ysolanky in https://github.com/agno-agi/agno/pull/11217
* fix: pin surrealdb below 3.0 by @sannya-singal in https://github.com/agno-agi/agno/pull/11484
* chore: deal the Validation unit tests round-robin across 15 shards by @harshsinha03 in https://github.com/agno-agi/agno/pull/11234
* fix: Revert "chore: deal the Validation unit tests round-robin across 15 shards" by @sannya-singal in https://github.com/agno-agi/agno/pull/11490
* feat: store and serve external agents as components by @ysolanky in https://github.com/agno-agi/agno/pull/11268
* [fix] Keep generation_config and generative_model_kwargs values in Gemini requests by @alanhuangyoo in https://github.com/agno-agi/agno/pull/10162
* [fix] agno 3.x: never place a new run below the session's existing run_index by @basnijholt in https://github.com/agno-agi/agno/pull/9938
* fix: scrub deleted runs from the legacy blob in the same transaction as the row delete by @ysolanky in https://github.com/agno-agi/agno/pull/11496
* fix: keep Team list input roleful without mining additional_input or dropping media by @ysolanky in https://github.com/agno-agi/agno/pull/11497
* feat: Company Task run state, allowed moves and direct start [SDK-648] by @harshsinha03 in https://github.com/agno-agi/agno/pull/11430
* [fix] Restore SingleStore run upserts by @Himanshu040604 in https://github.com/agno-agi/agno/pull/11508
* chore: name the arguments the docstrings' signatures actually accept by @lxcxjxhx in https://github.com/agno-agi/agno/pull/11516
* [fix] Migrate SmallestTools defaults before Lightning v3.1 retirement by @Vmnebula in https://github.com/agno-agi/agno/pull/11479
* chore: drop the bool Returns block from delete_user_memory docstrings by @ysolanky in https://github.com/agno-agi/agno/pull/11523
* chore: update hf deprecated model id by @kausmeows in https://github.com/agno-agi/agno/pull/11541
* fix: preserve all tool calls in streamed chunks in hf by @princejain756 in https://github.com/agno-agi/agno/pull/11526
* [fix] Preserve HTML and nested bodies in Gmail list tools by @tdog54646 in https://github.com/agno-agi/agno/pull/10359
* [fix] copy the reasoning block before writing derived params into it by @feiiiiii5 in https://github.com/agno-agi/agno/pull/10310
* [cookbook] Add Membase memory integration example by @parasyte-x in https://github.com/agno-agi/agno/pull/11552
* feat: add public manager IDs and company details by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11502
* feat: add short Company coordination instructions to Super Agent by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11563
* fix: use beta Gemini Developer API for supported model features by @Himanshu040604 in https://github.com/agno-agi/agno/pull/11564
* feat: metrics tables, background refresh and /os/metrics homepage routes on every database by @harshsinha03 in https://github.com/agno-agi/agno/pull/10874
* feat: update company details from human chats by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11569
* fix: log metrics refresh no-op messages at debug level by @ysolanky in https://github.com/agno-agi/agno/pull/11570
* fix: metrics refresh follow-ups for MongoDB, Valkey and DynamoDB legacy runs by @harshsinha03 in https://github.com/agno-agi/agno/pull/11574
* feat: require Project approval before accepting or running Tasks by @Himanshu040604 in https://github.com/agno-agi/agno/pull/11377
* feat: let Super Agent start accepted Company Tasks without blocking the conversation by @kausmeows in https://github.com/agno-agi/agno/pull/11562
* fix: stop publishing Company tools over MCP by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11578
* fix: stop creating the deprecated agno_metrics table on new installs by @harshsinha03 in https://github.com/agno-agi/agno/pull/11579
* feat: Super Agent does the work itself with direct tools by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11572
* feat: add a GitHub interface for webhook events and GitHub App credentials by @kausmeows in https://github.com/agno-agi/agno/pull/11583
* feat: decide Company work from chat and run accepted Tasks on Mini Agent by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11581
* feat: auto_accept is one switch on a Routine, in code or from chat by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11582
* fix: run post-hook guardrails and keep workflow metadata on a continued run by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11585
* fix: send remote run fields in a shape AgentOS parses by @ysolanky in https://github.com/agno-agi/agno/pull/11587
* feat: one file tree for Super Agent, Mini Agent and Company by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11588
* fix: stop the durable queue sweeping or reclaiming runs still executing here by @ysolanky in https://github.com/agno-agi/agno/pull/11586
* feat: deliver Company Task results with evidence and continue Tasks from a reply by @kausmeows in https://github.com/agno-agi/agno/pull/11568
* fix: Company fixes before 3.2 by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11592
* fix: quiet metrics refresh debug logs by @ysolanky in https://github.com/agno-agi/agno/pull/11606
* feat: Slack agent view, Bolt, Stop, external agents and Super Agent results by @harshsinha03 in https://github.com/agno-agi/agno/pull/11599
* fix: list one metrics table per database in /config by @ysolanky in https://github.com/agno-agi/agno/pull/11610
* feat: Release v3.2.0 by @kausmeows in https://github.com/agno-agi/agno/pull/11399

## New Contributors
* @Akaliup made their first contribution in https://github.com/agno-agi/agno/pull/11401
* @Dengzi555 made their first contribution in https://github.com/agno-agi/agno/pull/11417
* @ansh-rohilla made their first contribution in https://github.com/agno-agi/agno/pull/11397
* @RAMZI0TO99 made their first contribution in https://github.com/agno-agi/agno/pull/11370
* @alanhuangyoo made their first contribution in https://github.com/agno-agi/agno/pull/10162
* @lxcxjxhx made their first contribution in https://github.com/agno-agi/agno/pull/11516
* @Vmnebula made their first contribution in https://github.com/agno-agi/agno/pull/11479
* @princejain756 made their first contribution in https://github.com/agno-agi/agno/pull/11526
* @feiiiiii5 made their first contribution in https://github.com/agno-agi/agno/pull/10310
* @parasyte-x made their first contribution in https://github.com/agno-agi/agno/pull/11552

**Full Changelog**: https://github.com/agno-agi/agno/compare/v3.1.12...v3.2.0

---

> **Source** [agno-agi/agno](https://github.com/agno-agi/agno) · `v3.2.0` · 2026-11-12 · [upstream release](https://github.com/agno-agi/agno/releases/tag/v3.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
