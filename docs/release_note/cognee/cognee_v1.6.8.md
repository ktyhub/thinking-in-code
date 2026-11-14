---
title: "cognee v1.6.8"
project: "cognee"
repo: "topoteretes/cognee"
tag: "v1.6.8"
version: "v1.6.8"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "Release Date: 2026-11-12 Changes: v1.6.7 → v1.6.8"
---

# cognee v1.6.8

# v1.6.8  Integrations & Connectors

**Release Date:** 2026-11-12
**Changes:** v1.6.7 → v1.6.8

**Pull Requests:** #5189, #6410, #6417, #6593, #6612, #6634, #6642

---

## Summary

This release focuses on expanding and hardening integrations (new Slack support and many connector improvements) and on building reliable background work for embeddings and data updates. You’ll find a new Slack connector and app, better Google/Drive/Gmail/Calendar connector behavior, a RabbitMQ-based embedding worker option, and many reliability and provenance (audit) fixes so your imports, updates, and deletions behave more predictably.

## Highlights

- Added a fully-featured Slack connector and @cognee Slack app so Slack messages can be asked and remembered directly from Slack.
- Introduced an embedding-worker engine over RabbitMQ so background embedding generation is more robust and scalable.
- Improved Google-family connectors (Drive, Gmail, Calendar) including handling legacy file formats and retry logic so fewer files are skipped.
- Many reliability fixes for updates and provenance: safer file locking, concurrent safe removals, and more correct audit (ledger) writes to avoid lost or out-of-order history.

## New Features

- Slack connector and @cognee app: A new integration that connects your Slack workspace to Cognee, letting users ask (search) and remember (save) information directly from Slack messages. Why it matters: you can interact with your Cognee memory without leaving Slack—ask questions, save snippets, and get answers where your team already communicates.
- Embedding worker engine over RabbitMQ: Added a new embedding-worker backend that runs over RabbitMQ (a message broker) to generate vector embeddings (numeric representations used for semantic search) in the background. What it does: decouples embedding generation from the main service so it can scale independently and recover from worker failures. Why it matters: large or bursty ingestion workloads won’t block the main service, and embedding work can be retried and distributed more reliably.
- Google Drive connector: Better ingestion of legacy Office formats (old .xls and .ppt files) and fixes for files that an earlier sync missed. What it does: reads and imports more types of Drive files and reconsiders files that previously failed. Why it matters: fewer missed documents and more complete content indexing from Google Drive.
- Gmail and Calendar connector improvements: Updated source code and retry logic to make Gmail and Google Calendar ingestion more robust. What it does: improves how we call Google APIs and handle transient failures. Why it matters: more reliable imports from your email and calendar without manual re-runs.
- POST /add accepts dlt_config: The add API now accepts a dlt_config parameter on POST /add to pass incremental sync options during ingestion. What it does: allows callers to configure the incremental loader when adding data. Why it matters: gives more control over how files are discovered and processed during ingestion.
- Agent tool-output limit as constructor argument: The agent retriever now accepts the tool-output character limit as a constructor argument. What it does: makes it possible to configure how much text an agent tool is allowed to return. Why it matters: you can tune agents to avoid overly long outputs or to permit longer answers when needed.

## Improvements

- More robust update/removal flow: update tasks now remove released (deleted) files concurrently and in batches to speed cleanup and reduce lock contention. Why it matters: updates complete faster and storage cleanup is less likely to leave stale files behind.
- Stored-file locking per location: Fixed and hardened how stored files are locked by location during updates so operations on one storage location don’t block others. Why it matters: reduces accidental contention when multiple update tasks touch different storage backends.
- Provenance / ledger accuracy: Multiple fixes ensure the provenance ledger (the audit trail of adds/updates/deletes) writes events in a safe order, records only data rows, preserves rolled-back entries, and writes deletion marks (tombstones) last. Why it matters: the audit trail is more accurate and resilient to partial failures, which makes debugging and data recovery more reliable.
- Retry and API resilience: Introduced a Google API retry helper and made several API calls more tolerant to timeouts and transient failures. Why it matters: fewer sync failures caused by short-lived Google API errors.
- Connector metadata carried into chunks: Connector titles and source metadata are now copied into stored payloads and chunk payloads (a chunk is a small piece of a document used for search). What it does: keeps human-friendly source names alongside stored content. Why it matters: search results and provenance can show clearer sources for returned content.
- Strip NUL characters from sources: The system now strips NUL characters from all document sources during ingestion. Why it matters: prevents parsing issues and corrupted text caused by embedded NULs in files.
- Testing and CI hardening: Multiple test and CI improvements (workflow fixes, pinned integration test keys) to make releases and integrations tests more stable and predictable.

## Performance

- Concurrent removal of released files: Update cleanup now removes deleted files in parallel, which reduces total time spent cleaning storage during updates.
- Dedicated pools for incremental walks: The incremental file-walking process (dlt walks, the discovery step used during updates) runs on its own worker pool so it no longer competes for threads with other update tasks, improving throughput for large syncs.

## Bug Fixes

- Drive: Fixed cases where Drive files that had been skipped by an earlier sync were not re-ingested; fewer missed files during subsequent syncs.
- Add/update copy fixes: Stopped removing a copy saved by a skipped add and ensured a new add keeps files it has not yet committed. Why it matters: prevents accidental loss of temporary copies during failed or skipped adds.
- Skip invalid chunk ids: Chunks whose document id is not a UUID are now skipped during processing to avoid crashes from malformed data. Why it matters: corrupted or malformed chunks no longer break pipelines.
- Slack answers: Read Slack answer sources from chunk payloads and close various Slack-related review findings so Slack responses are more consistent and traceable.
- Strip NUL bytes: Documents with embedded NUL characters are now cleaned during ingestion to avoid downstream parsing errors.
- Validation of tool-output limit: The system validates the max_tool_output_chars (the maximum characters an agent tool may return) to avoid misconfiguration causing runtime errors.
- Provenance / recovery fixes: Fixed several edge cases in run recovery so abandoned or overlapping runs are handled correctly and the dataset’s newest run is preserved. Why it matters: datasets won’t be left pointing to incorrect or older runs after interrupted updates.
- Remove replaced stored files: When files are replaced during update, the old stored files are now removed reliably.
- Slack and review closures: Multiple fixes to close previously reported Slack-related review findings, improving the interactive Slack experience.

## Technical Changes

- Added a full embedding-worker implementation and protocol (RabbitMQ-based) with client/server code and error handling to support external embedding workers.
- Large refactor and additions in the integrations subsystem: new adapters, scheduled syncs, sync policy store and tick logic, and credential management to support more connectors and reliable scheduled syncing.
- Provenance subsystem overhaul: new manager, anchors, tombstones, storage, and edge-evidence cleanup code to make the audit trail more maintainable and correct.
- Remote worker and RPC improvements: AMQP RPC and retry helpers added to support robust remote task execution.
- Refactor of connector payloads: connector titles and other source metadata are now consistently copied into payloads and chunk payloads to improve traceability.
- Lots of test coverage and CI workflow updates across connectors and frontend tests to keep the system stable as the codebase grows.

## Dependency Updates

**Updated:**
- enola-cli: ==0.4.30 → ==0.5.1
- ladybug: ==0.19.0 → ==0.22.3

## Compatibility

| Component | Supported / Required |
| --- | --- |
| Python | `>=3.10,<3.15` |
| pydantic | `>=2.13` |
| litellm | `>=1.102.2,<2.0.0` |
| fastapi | `>=0.116.2,<1.0.0` |
| sqlalchemy | `>=2.0.39,<3.0.0` |
| lancedb | `>=0.39.0,<0.40.0` |
| ladybug | `==0.22.3` |

---

*— The Cognee Team · 2026-11-12*

---

> **Source** [topoteretes/cognee](https://github.com/topoteretes/cognee) · `v1.6.8` · 2026-11-12 · [upstream release](https://github.com/topoteretes/cognee/releases/tag/v1.6.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
