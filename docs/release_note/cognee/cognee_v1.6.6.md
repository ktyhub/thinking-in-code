---
title: "cognee v1.6.6"
project: "cognee"
repo: "topoteretes/cognee"
tag: "v1.6.6"
version: "v1.6.6"
published: "2026-10-29"
type: "patch"
lang: "en"
summary: "Release Date: 2026-10-29 Changes: v1.6.6rc1 → v1.6.6"
---

# cognee v1.6.6

# v1.6.6 — Conflict resolution & stability

**Release Date:** 2026-10-29
**Changes:** v1.6.6rc1 → v1.6.6

**Pull Requests:** #6266, #6337, #6339, #6340

---

## Summary

This release focuses on making conflict handling more reliable and easier to manage, plus a handful of stability, vector, and data-layout fixes. You’ll find a new durable conflict-resolution API, safer retirement of conflicting choices, faster and safer cache/deletion paths, and improvements to vector handling that save re-embedding work.

## Highlights

- New durable API for fact conflict resolution so you can resolve data disagreements reliably from the API.
- Conflict review is enabled by default and many fixes ensure 'choices' (user decisions about conflicting facts) are retired correctly on edits, deletes, and rebuilds.
- Copy stored vectors between vector stores without re-embedding to save time and cost when moving/replicating embeddings.
- Safer deletion and caching: Redis list/context deletions are now atomic or in-place, and permission/KMS errors are surfaced so failures won’t be silently ignored.

## New Features

- Durable fact conflict resolution API — A new API endpoint that lets you resolve disagreements between conflicting facts in a durable (persistent) way. What it does: records and applies chosen resolutions so the system consistently uses the resolved fact. Why it matters: resolves data inconsistencies reliably across sessions and components, reducing incorrect answers or surprising behavior from stale/conflicting data.
- Default conflict review workflow — The system now reviews conflicts by default (previously optional). What it does: when the system detects conflicting facts (different sources or versions of the same information), it surfaces them for review automatically. Why it matters: makes conflict detection actionable out of the box, so fewer conflicts slip through and searches/agents return cleaner results.
- Copy stored vectors between stores without re-embedding — You can now move or copy vector embeddings from one vector store to another without re-running the embedding model. What it does: performs a direct copy of stored embeddings. Why it matters: speeds up migration and replication, and reduces compute and cost because models aren’t re-called.
- DLT column and dated-cell representation improvements — Every DLT column (a column used in change-tracking tables) is now treated as a value node by default, and dated cells are represented once as a Timestamp value. What it does: makes the platform treat change-tracking columns as concrete values and avoids duplicating date cells. Why it matters: fixes subtle correctness and duplication issues when reading dataset rows and keys, improving accuracy of reads and downstream processing.

## Improvements

- Safer retirement of choices (user decisions about conflicting facts) — Choices are retired at the correct times: on chunk edits, connector deletes, dataset forget operations, and when rebuilds would otherwise lose them. This reduces stale decisions lingering after data changes.
- Fail-fast on invalidation and malformed keys — Editing will fail if invalidation of related state fails; malformed hints for DLT keys now raise an error instead of silently skipping them. This prevents silent data inconsistencies.
- Preserve retrieval context when resolving conflicts — The retrieval context used to fetch supporting evidence is now preserved while resolving conflicts so answers remain grounded in the same context.
- Merge and validate tags before writing vectors — Tags are now merged and validated before vector upserts, avoiding broken or incomplete metadata on vector records.
- Finish multi-session stamp rollout — Session stamps (used to track actions across sessions) are now rolled out consistently across components for improved session handling and correctness.
- Make classify() accept plaintext view of sealed objects — Useful when you need to classify contents of encrypted/sealed objects after they are opened for processing.

## Performance

- Reduced retrieval contention when retiring deleted conflict facts — lowers race conditions and improves responsiveness when many decisions are being retired at once.
- Redis list deletions in-place and atomic context deletes — cache deletions are now more efficient and consistent, reducing latency and partial-deletion states.
- Direct reading of a row's key columns — looking up key columns directly reduces overhead when reading rows, improving read performance for table-backed datasets.

## Security

- KMS error transparency — Key Management System (KMS) errors are now surfaced unwrapped so calling code can see and correctly handle encryption/key issues instead of having them hidden.
- Deletion permission checks in cleanup — cleanup operations now verify delete permissions, reducing risk of unauthorized data removal.

## Bug Fixes

- Fail the edit when invalidation fails — Edits now stop and report errors if related invalidation cannot be performed, avoiding inconsistent state.
- Retire choices only on chunk edits and in update (not cognify) — Ensures choices are retired at the right lifecycle stage to avoid premature or missed retirements.
- Retire choices lost by rebuilds or when their fact is gone — Prevents stale choices from sticking around after the underlying fact was removed or replaced.
- Retire user choices on forget and on connector deletes — Ensures user decisions are cleaned up when you forget a dataset or remove a connector.
- Skip stated choices in the prelude — Avoids accidentally considering stated (static) choices during conflict pre-processing.
- Cite live chunks only when resolving conflicts — Uses only currently live (non-deleted) chunks as supporting evidence, preventing use of deleted data during resolution.
- Fix memory-only deletion paths — Addresses paths that previously behaved differently when operating purely in memory vs persistent storage.
- Make Redis context deletes atomic and delete list entries in-place — Fixes race conditions and partial deletions in the cache.
- Fail on malformed DLT key hints and raise on unreadable DLT table keys in BROAD mode — Prevents silent skips and surfaces bad table/key inputs.
- Merge tags and validate before raw vector upserts — Avoids writing invalid vector metadata that could break downstream tooling.
- Let classify() take plaintext view of sealed objects — Fixed classification behavior for sealed objects that are opened for analysis.
- Several test, CI, and docs updates to keep examples runnable and ensure stability across Python versions and environments.

## Technical Changes

- Refactor: bind sessions to an operation as a single list everywhere — internal session handling simplified to reduce bugs and make session-operations consistent.
- Refactor (deps): simplify onnxruntime pins and related dependency housekeeping.
- Refactor (telemetry): simplify telemetry limits for clearer instrumentation behavior.
- CI and tooling updates: expanded workflow coverage and adjustments to keyless model fetch scripts, S3 cache handling in CI, and test-suite improvements.

## Dependency Updates

**Updated:**
- fastembed: <=0.8.0 → >=0.9.1,<0.10
- filelock: >=3.12.0,<4.0.0 → >=3.12.0
- onnxruntime: >=1.24.1 → >=1.17
- pydantic: >=2.10.5 → >=2.13

**Removed:**
- diskcache >=5.6.3

## Compatibility

| Component | Supported / Required |
| --- | --- |
| Python | `>=3.10,<3.15` |
| pydantic | `>=2.13` |
| litellm | `>=1.102.2,<2.0.0` |
| fastapi | `>=0.116.2,<1.0.0` |
| sqlalchemy | `>=2.0.39,<3.0.0` |
| lancedb | `>=0.39.0,<0.40.0` |
| ladybug | `==0.19.0` |

---

*— The Cognee Team · 2026-10-29*

---

> **Source** [topoteretes/cognee](https://github.com/topoteretes/cognee) · `v1.6.6` · 2026-10-29 · [upstream release](https://github.com/topoteretes/cognee/releases/tag/v1.6.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
