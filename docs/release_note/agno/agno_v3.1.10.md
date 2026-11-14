---
title: "agno v3.1.10"
project: "agno"
repo: "agno-agi/agno"
tag: "v3.1.10"
version: "v3.1.10"
published: "2026-10-23"
type: "patch"
lang: "en"
---

# agno v3.1.10

# Changelog

## Bug Fixes:

- **CodexAgent**: Now signs in automatically with `OPENAI_API_KEY`, and keeps an existing ChatGPT or other login.
- **OS Manager**: OS Manager now lists and runs external agents such as `ClaudeAgent` and `CodexAgent` registered in `AgentOS(agents=[...])`, by name or ID.
- **Knowledge Upload**: `POST /knowledge/content` now returns a clear `400` message when an upload has no file, `text_content` or URL, or when `url` is not a single URL.
- **Tracing**: Spans from `AgentOS(tracing=True)` and `setup_tracing()` now keep up to 1,024 attributes, so model spans keep their full input and message history on runs with many tool calls. `OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT` and `OTEL_ATTRIBUTE_COUNT_LIMIT` still take precedence.

## What's Changed
* chore: log replica-local queue stream notice at info level by @ysolanky in https://github.com/agno-agi/agno/pull/11264
* fix: reword the no-authorization user isolation warning by @SamJupe in https://github.com/agno-agi/agno/pull/11263
* fix: authenticate Codex automatically with OPENAI_API_KEY by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11249
* fix: let OS Manager discover and run external agents by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11247
* fix: clarify accepted Company Task execution by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11261
* fix: reject knowledge uploads without a content source by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11259
* fix: clarify readable Company sources for agents by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11256
* fix: reject unsupported knowledge URL input types by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11260
* fix: use LLM-appropriate tracing attribute limits by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11255
* fix: keep Company Task projection off the queue's critical path by @ysolanky in https://github.com/agno-agi/agno/pull/11188
* fix: allow authorized members to trigger Company routines by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11254
* feat: govern Company writes by scope instead of ownership by @SamJupe in https://github.com/agno-agi/agno/pull/11270
* chore: Release v3.1.10 by @harshsinha03 in https://github.com/agno-agi/agno/pull/11265


**Full Changelog**: https://github.com/agno-agi/agno/compare/v3.1.9...v3.1.10

---

> **Source** [agno-agi/agno](https://github.com/agno-agi/agno) · `v3.1.10` · 2026-10-23 · [upstream release](https://github.com/agno-agi/agno/releases/tag/v3.1.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
