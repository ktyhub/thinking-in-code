---
title: "cognee v1.6.6rc1"
project: "cognee"
repo: "topoteretes/cognee"
tag: "v1.6.6rc1"
version: "v1.6.6rc1"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "Release Date: 2026-10-23 Changes: v1.6.5.dev0 → v1.6.6rc1"
---

# cognee v1.6.6rc1

# v1.6.6rc1 — History controls, connectors, and sync hardening

**Release Date:** 2026-10-23
**Changes:** v1.6.5.dev0 → v1.6.6rc1

**Pull Requests:** #5765, #5850, #5893, #5898, #5938, #5955, #5958, #5961, #6011, #6013, #6014, #6185

---

## Summary

This release focuses on giving users clearer, safer controls over memory & search history, adding several new connectors, and hardening sync reliability. Key workflow changes include explicit history-purging behaviour, a new flag to remove search history from the CLI/API, and fixes that make Drive/Asana synchronisation and indexing more robust.

## Highlights

- New forget(clean_history=True) option so you can remove search history without needing other inputs.
- Users can now delete their own search history via the API and server endpoints.
- New connectors: Obsidian (vaults), Asana (tasks) and OneNote are added and their syncs are hardened.
- Reliability improvements: Drive and Asana syncs are faster and resumable; graph and index operations avoid unnecessary work.

## Breaking Changes

- Dataset delete now purges associated search and conversation history: When you delete a dataset, all associated history is removed. Action required: if you depend on preserved search or session traces for backups or audit, export or back them up before deleting datasets.
- run_info structure changed: run_info metadata no longer contains the full 'data' items that ingestion pipelines previously stored. Action required: any code or tooling that read run_info expecting embedded data must be updated to instead fetch original items via their data ids or use the new storage shapes. A migration to remove the old data shape is included in this release.
- Fail-on-history-purge: delete/forget operations that attempt to purge history will now fail if the purge cannot be completed. Action required: ensure the service has permission to delete search history and that long-running purge operations are allowed to complete; handle failures when calling delete APIs.
- Budget/quota errors: Budget exhaustion and payment-required errors are raised more consistently (LLMPaymentRequiredError). Action required: clients should catch and handle these exceptions if they interact with LLM billing paths.

## New Features

- Forget(clean_history=True): A new clean_history flag for the forget command and API that lets you purge recorded search history while keeping other deletion behaviour. What it does: call forget(clean_history=True) to remove stored search history related to a dataset or user. Why it matters: you can now remove traces of user searches without performing other delete operations, making privacy and cleanup operations clearer and easier.
- Delete your own search history: The server and API now include a route that allows a user to delete their own search history. What it does: end-users (via API or UI) can remove their personal queries and search metadata. Why it matters: improves user privacy and compliance by giving individuals direct control over their search traces.
- Obsidian connector (vaults): A new connector that ingests Obsidian vaults (local notes and markdown vaults). What it does: lets you import notes stored in Obsidian vaults into Cognee so they become searchable and recallable. Why it matters: broadens supported sources so personal knowledge stored in Obsidian can be included in memory and search workflows.
- Asana connector: A first-class Asana connector for tasks and events. What it does: syncs Asana tasks and events into Cognee and makes them available for search and recall. Why it matters: teams using Asana can now include task context and history in their memory-driven workflows.
- OneNote connector: Add OneNote support for ingestion and sync. What it does: pulls OneNote content into Cognee so notebooks are searchable and linked into memory. Why it matters: integrates another major note-taking source so users' OneNote content participates in memory and search.
- Expose dataset and data ids in recall hits: Recall results now include the dataset (where the hit came from) and underlying data ids. What it does: returned recall hits include the dataset name and the original item id for clarity. Why it matters: makes it easier to trace answers back to source documents for auditing and follow-up.

## Improvements

- Forward clean_history through CogneeClient.forget and name history-only cases clearly so the client and server behaviour match and error messages are clearer.
- Docs: Clarified what memory_only (memory-only deletion) keeps versus what remains on disk, so users better understand deletion semantics.
- Search code: reuse internal delete_user_search_history logic, add a dedicated search-history delete route, and scope search history actions to the calling user to avoid accidental cross-user deletion.
- Graph and indexing: look up graph edges only once per add_edges call and in has_edges to reduce redundant work during graph updates and ingestion.
- Drive sync: sped up and widened Drive sync and made it more robust to interruptions (name unreadable PDFs, better resume logic).
- Asana sync: made resumable, improved timestamp handling, and raise on repeated sync tokens to avoid stuck syncs.
- Index building: retry skipped HNSW index builds on every version change to increase reliability of vector indexes when upgrading.
- Error handling: surface budget exhaustion and quota/permission errors through shared helpers so client code and calling apps receive consistent, actionable exceptions.

## Performance

- Faster graph updates: avoiding repeated edge lookups reduces CPU during bulk add_edges operations (practical impact: faster ingestion and lower CPU on large graph updates).
- Faster Drive sync: file syncs run faster and handle wider datasets (practical impact: quicker initial syncs and catch-ups for Google Drive sources).
- Index retry improvements: HNSW (vector index) build retries are more reliable after version changes, reducing failed index states that block search.

## Security

- Dependency updates: boto3 is now listed in the aws install extra so AWS integrations get a compatible SDK when users install the aws extras. The certifi bundle was updated (require certifi 2026.10.19) and container CA bundles were refreshed to improve TLS reliability.
- Stricter error propagation for budget/quota failures so callers get explicit payment/quota errors instead of silent retries. This helps avoid leaking unexpected retry behaviour and surfaces required remediation.

## Bug Fixes

- Purge history on every dataset delete so dataset removal no longer leaves stale search or conversation history behind.
- Forget now fails if history purge fails (so partial deletes won't silently leave traces).
- Stop storing data items inside run_info (internal pipeline run metadata) — stored run_info now excludes the original 'data' payload to avoid duplication and reduce storage.
- Stop native adapter retrying quota failures to prevent busy-loop retries on quota errors and return quota errors promptly.
- Fix: name unreadable Drive PDFs so they are still tracked correctly during sync and ingestion.
- Fix: resume cut Asana listings and make Asana listing/sync more robust to transient API errors and pagination cuts.
- Fix: scope tracing spans (observability) to the calling user so telemetry no longer mixes users.
- Various connector hardenings and test fixes (Drive, OneNote, Gmail, Notion, etc.) to improve real-world ingestion reliability.

## Technical Changes

- Large refactors and many new and updated ingestion connectors added (Google Drive, Gmail, Notion, Obsidian, Asana, OneNote) with new sync code and tests.
- Added many task modules for code documentation extraction, memify global context index builders, and session distillation pieces used by internal pipelines and examples.
- CI and tests: split integration jobs, added new API snapshots for the search history delete route, and refreshed test coverage and fixtures.
- Internal: migrations added/updated (including a migration that drops run_info data fields), numerous refactors to server/client plumbing, and observability/tracing improvements.

## Dependency Updates

**Added:**
- certifi >=2026.10.19

## Compatibility

| Component | Supported / Required |
| --- | --- |
| Python | `>=3.10,<3.15` |
| pydantic | `>=2.10.5` |
| litellm | `>=1.102.2,<2.0.0` |
| fastapi | `>=0.116.2,<1.0.0` |
| sqlalchemy | `>=2.0.39,<3.0.0` |
| lancedb | `>=0.39.0,<0.40.0` |
| ladybug | `==0.19.0` |

---

*— The Cognee Team · 2026-10-23*

---

> **Source** [topoteretes/cognee](https://github.com/topoteretes/cognee) · `v1.6.6rc1` · 2026-10-23 · [upstream release](https://github.com/topoteretes/cognee/releases/tag/v1.6.6rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
