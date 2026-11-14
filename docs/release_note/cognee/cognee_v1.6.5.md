---
title: "cognee v1.6.5"
project: "cognee"
repo: "topoteretes/cognee"
tag: "v1.6.5"
version: "v1.6.5"
published: "2026-10-16"
type: "patch"
lang: "en"
summary: "Release Date: 2026-10-16 Changes: v1.6.4 → v1.6.5"
---

# cognee v1.6.5

# v1.6.5 — Faster trace processing & richer code-graph docs

**Release Date:** 2026-10-16
**Changes:** v1.6.4 → v1.6.5

**Pull Requests:** #5287, #5534, #5620, #5622, #5720, #5721, #5722, #5725, #5726, #5751, #5798, #5898, #5938, #5955, #5958, #5961

---

## Summary

This release speeds up trace and ingestion pipelines, improves session handling, and makes code documentation searchable inside the code graph. It also adds a new memify API, better embedding compatibility (base64), and several security and connector hardenings.

## Highlights

- Faster trace processing: traces are persisted and processed in fewer, larger operations for lower latency and fewer database writes.
- Code-graph docstrings: function/class docstrings are stored as graph documents and linked to code symbols for better code recall and search.
- New Memify API endpoints: convert content into memory entries via the API to make ingestion and downstream recall simpler.
- Base64 embeddings support: request embeddings encoded as base64 where providers allow it to improve compatibility and reduce transport issues.
- Security & connectors: daily CVE Slack alert, Google Calendar connector hardening, and improved OAuth/token sharing.

## Breaking Changes

- datamodel-code-generator requirement bumped: if you use a custom graph_model generation step, you must have datamodel-code-generator >= 0.56.0. What to do: upgrade that dependency when generating custom graph models to avoid generation errors.

## New Features

- Store code docstrings in the code graph: Docstrings (the documentation strings attached to functions, classes and modules) are now saved as first-class graph documents and linked to the corresponding code symbols. What it does: when you ingest code, the human-readable docstrings are indexed and connected to the code symbol nodes. Why it matters: search and code-aware agents can return richer, context-aware answers and surface inline documentation alongside code references.
- New Memify API and endpoints: 'memify' is the process of converting content (files, messages, or other data) into memory entries the system can store and recall. What it does: we added server endpoints and CLI wiring to create memory entries (memify) directly via the API. Why it matters: it simplifies turning raw content into searchable, recallable memories for use in recall and improve flows.
- Request base64 embeddings where supported: some embedding providers accept embeddings encoded as base64 to avoid binary transport problems. What it does: Cognee will request base64-encoded embedding responses when the provider supports it. Why it matters: improves interoperability with certain providers and reduces problems when sending/receiving binary embedding payloads.
- Persist a session's trace backlog as one document: traces are the interaction records (events, steps, logs) from a user session. What it does: instead of writing many small trace documents, Cognee can now persist a session's backlog as one consolidated document. Why it matters: fewer database writes and improved throughput for high-traffic sessions, leading to faster ingestion and lower resource usage.
- Build trace pass windows in a single cognify run: 'cognify' is the pipeline run that converts raw traces into memory entries. What it does: trace windowing for a pass is computed in one cognify execution rather than multiple runs. Why it matters: reduces repeated pipeline runs and speeds up trace processing so results appear faster and more consistently.

## Improvements

- Session/dataset binding reliability and speed: bound sessions (sessions tied to a specific dataset — a collection of documents you've added) now skip unnecessary re-reads and correctly route skill runs to the bound dataset. This reduces latency and fixes several edge cases where a stale or mismatched binding could cause errors.
- Curation and distillation fixes: distilled entries are sealed per curator batch and new entries are curated by default on each distill run. This makes automated filtering and quality control of memory entries more consistent.
- Embedding token tracking: the activity model now records embedding token usage so you can see embedding costs per activity.
- Google and Azure auth sharing: OAuth and token-provider code for Google and Azure have been consolidated so integrations reuse the same adapters, reducing duplication and improving maintenance.
- Improved content selection for distillation: only the needed QA turns are read during distillation which reduces work and speeds the distill process.

## Performance

- Faster trace ingestion: persisting the session trace backlog as one document and draining the backlog per run reduce database writes and pipeline churn, improving throughput for active sessions.
- Reduced cognify runs: building trace pass windows and handling them in one run means fewer pipeline invocations and lower end-to-end processing time for trace-to-memory conversion.
- Lower overhead for embedding transfers: base64 embedding support can reduce transport issues and improve compatibility with some providers, leading to smoother embedding flows.

## Security

- Daily CVE alert to Slack: a new GitHub Actions job sends a daily summary of known CVEs to Slack so maintainers can track vulnerable dependencies.
- Google Calendar connector hardening and shared OAuth adapter: multiple fixes improve robustness and error handling for Google integrations and centralize OAuth behavior to reduce security risk.
- Hidden NATURAL_LANGUAGE setting and remediation guidance: a security-sensitive surface has been removed from the public surfaces and a remediation path is set.

## Bug Fixes

- Drain the trace backlog per run: fixed a bug that could leave traces unprocessed across runs.
- Break loop on payment error: addressed an infinite-loop risk when payment errors occur during an operation.
- Refuse stale session binding like a forbidden id: stale or invalid session-to-dataset bindings are now rejected consistently, preventing silent misrouting of data.
- Read only the needed QA turns for distillation: reduces unnecessary reads and potential errors during distillation.
- Accept string dataset_id on typed entries and route typed entries to the session's dataset: fixes that prevented some entries from being correctly bound to datasets.

## Technical Changes

- Large internal refactors across memify, improve, and cognify pipelines to consolidate task registries, distillation stages, and graph-change operations.
- New evaluation tooling (Locomo) and many test/CI workflow updates (including new workflows for CVE alerting and latest-libraries checks).
- Added Azure managed identity support and tightened Litellm client behavior and types.

## Dependency Updates

**Updated:**
- datamodel-code-generator: >=0.54.0 → >=0.56.0
- enola-cli: ==0.4.26 → ==0.4.30
- litellm: >=1.83.7,<1.97.0 → >=1.102.2,<2.0.0

**Removed:**
- python-magic-bin <0.5

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

*— The Cognee Team · 2026-10-16*

---

> **Source** [topoteretes/cognee](https://github.com/topoteretes/cognee) · `v1.6.5` · 2026-10-16 · [upstream release](https://github.com/topoteretes/cognee/releases/tag/v1.6.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
