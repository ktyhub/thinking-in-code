---
title: "agno v3.1.8"
project: "agno"
repo: "agno-agi/agno"
tag: "v3.1.8"
version: "v3.1.8"
published: "2026-10-21"
type: "patch"
lang: "en"
---

# agno v3.1.8

# Changelog

## New Features

- Postgres Sandbox Checkpoint Store: Added `PostgresCheckpointStore` for storing sandbox checkpoints directly in PostgreSQL, allowing multi-replica deployments to restore sessions without S3 or shared filesystems. Checkpoints are chunked, written transactionally, deduplicated by SHA-256 and verified on read. It is opt-in; existing checkpoint defaults are unchanged. (#11186)
- Framework Managers as Routine Executors: Company Routines can now use the internal Product Manager or OS Manager as executors through declarations, the Routine API and human-chat configuration. Reserved manager IDs resolve only from the owning AgentOS and cannot be replaced by saved or user-defined components. Includes an optional weekly Product Manager review. (#11193)
- Sandbox Checkpoint Retention: Sandboxes now retain the three newest checkpoints per session by default. Configure `retain_checkpoints=None` to preserve every checkpoint. Unpublished or superseded checkpoints are retired and deleted after the run outcome is safely stored. (#11187)

## Improvements

- Sandbox Session Cleanup: Deleting a sandbox-backed session now removes its warm computer and associated checkpoint objects after the database transaction commits. Single, bulk and user-scoped session deletion are supported without affecting sessions the caller does not own. (#11187)
- OS Manager Specialist Visibility: Platform Builder and Platform Manager now appear as members of OS Manager in `/teams` and `/teams/os-manager-internal`. They remain excluded from the reusable application registry, top-level agent discovery and standalone agent routes. (#11198)
- Claude Defaults to Sonnet 5.5: `Claude()` now defaults to `claude-sonnet-5-5`, replacing the deprecated `claude-sonnet-4-5-20250929` before its retirement. Non-default `temperature`, `top_p` and `top_k` values are dropped with a warning for newer Claude models that reject those sampling parameters. This behavior applies across Anthropic, Bedrock, Foundry and Vertex providers. (#11212)

## Behavior Changes

- Checkpoint Retention: Only the three newest sandbox checkpoints are retained by default. Opening a checkpoint for an older run can now raise `CheckpointObjectNotFound`. Set `retain_checkpoints=None` to restore the previous unlimited-retention behavior. (#11187)
- Durable Sandbox Startup Validation: AgentOS now fails at startup when a durable-queue sandbox uses the host-local default checkpoint store. Configure a checkpoint store shared by every replica, such as `PostgresCheckpointStore` or `S3CheckpointStore`. Previously this invalid configuration failed only on the first submission. (#11187)

## Bug Fixes

- Missing Sandbox Checkpoints: A committed checkpoint missing from storage now ends the turn with a clear, non-retryable error, retires the newly created computer and releases the session. Previously the run remained `RUNNING`, exhausted queue retries and blocked later turns on the session. (#11187)
- Company Routine Execution: Denied status writes and failed Studio runner delegation now correctly fail the Routine. Stale archived catalog entries no longer collide with owned reserved managers. (#11193)

## What's Changed
* fix: sandbox checkpoint recovery, retention and session-delete cleanup by @ysolanky in https://github.com/agno-agi/agno/pull/11187
* fix: show platform specialists under OS Manager by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11198
* feat: add PostgresCheckpointStore for sandbox checkpoints in Postgres by @ysolanky in https://github.com/agno-agi/agno/pull/11186
* feat: support framework managers as Company Routine executors by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11193
* fix: default Claude to sonnet-5-5 before sonnet-4-5 retires by @kausmeows in https://github.com/agno-agi/agno/pull/11212
* fix: default OpenAITools image generation to gpt-image-2 by @23821 in https://github.com/agno-agi/agno/pull/10824
* chore: split Company db suites out of test-db and add a sixth unit-test shard by @harshsinha03 in https://github.com/agno-agi/agno/pull/11213
* fix: send adaptive thinking when a Claude model rejects a thinking budget by @harshsinha03 in https://github.com/agno-agi/agno/pull/11215
* chore: Release v3.1.8 by @kausmeows in https://github.com/agno-agi/agno/pull/11208

## New Contributors
* @23821 made their first contribution in https://github.com/agno-agi/agno/pull/10824

**Full Changelog**: https://github.com/agno-agi/agno/compare/v3.1.7...v3.1.8

---

> **Source** [agno-agi/agno](https://github.com/agno-agi/agno) · `v3.1.8` · 2026-10-21 · [upstream release](https://github.com/agno-agi/agno/releases/tag/v3.1.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
