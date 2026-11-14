---
title: "cognee v1.6.5.dev0"
project: "cognee"
repo: "topoteretes/cognee"
tag: "v1.6.5.dev0"
version: "v1.6.5.dev0"
published: "2026-10-16"
type: "patch"
lang: "en"
summary: "Release Date: 2026-10-16 Changes: v1.6.4.dev0 → v1.6.5.dev0"
---

# cognee v1.6.5.dev0

# v1.6.5.dev0 — Distillation, Embeddings & Connector Hardening

**Release Date:** 2026-10-16
**Changes:** v1.6.4.dev0 → v1.6.5.dev0

**Pull Requests:** #5287, #5534, #5620, #5622, #5720, #5721, #5722, #5725, #5726, #5751, #5798, #5898

---

## Summary

This release focuses on making memory distillation more reliable, improving how embeddings are produced and metered, and hardening connectors and LLM integrations. It includes several bug fixes, security and operational improvements, and a few breaking changes related to legacy embedding surfaces and local cache layout.

## Highlights

- More reliable distillation: distillation now reads only the QA turns it needs, seals entries per curator batch, and curates every new entry by default so distilled memories are accurate and consistent.
- Embeddings improvements: support requesting base64-encoded embeddings where supported, meter embedding token usage, lower the default embedding batch size for stability, and keep local model cache under a predictable path.
- Connector and LLM fixes: Gmail and Google Calendar connectors were hardened (better quota handling and permissions), litellm and Mistral model handling were improved, and Azure token handling is shared to reduce auth complexity.
- Security & alerts: daily CVE alert delivery to Slack was added and repository security docs updated to help teams stay informed.

## Breaking Changes

- Triplet embedding / triplet memify surfaces removed or deprecated — the older triplet embedding surfaces have been deprecated and parts removed. If you rely on 'triplet' embedding flows, migrate to the newer embedding surfaces and memify pipelines. Check your pipelines and replacements before upgrading.
- datamodel-code-generator minimum version raised — custom graph model generation requires datamodel-code-generator >= 0.56.0. Upgrade this dependency if you use custom graph models.
- Fastembed cache path change — FASTEMBED_CACHE_PATH was removed from the .env.template and fastembed now uses ~/.cognee/models by default. If you relied on a custom FASTEMBED_CACHE_PATH, update your environment or move your cache to the new location.

## New Features

- Request Base64 embeddings where supported — Some embedding providers can return vectors encoded as base64. Cognee now requests base64 embeddings when the provider supports them. Why it matters: base64 can improve compatibility with certain providers and transports, reducing encoding errors and simplifying integrations.
- Daily CVE alert to Slack — A new automated alert posts daily security advisories (CVE summaries) to a configured Slack channel. Why it matters: keeps your team aware of new vulnerabilities affecting dependencies so you can act faster.
- Clone a chosen branch of a repo during ingestion — You can now select which branch to clone when pulling a repository. Why it matters: makes ingestion reproducible and lets you index branch-specific code or docs without manual repo handling.
- Embedding token usage metering — The system now records the number of embedding tokens used per activity. Why it matters: helps understand and audit embedding usage for cost tracking and debugging.

## Improvements

- More focused distillation: distillation now reads only the required QA turns (instead of whole conversations), and curator runs seal distilled entries per batch so partial results don’t leak. This reduces work and makes distilled summaries more deterministic.
- Curate every new entry per distill run by default — every newly added memory entry is considered for distillation unless you change the setting, making sure new content is summarized promptly.
- Bind typed entries to the session's dataset — when the system writes typed (structured) memory entries during a session, they are now correctly associated with that session's dataset. Why it matters: preserves correct dataset ownership and prevents data from landing in the wrong dataset.
- Take dataset_id on remember_skill_run_entry — explicit dataset routing for remembered skill outputs improves traceability and correctness.
- Fastembed and local model cache changes — fastembed models are now kept under ~/.cognee/models by default for consistent caching across platforms; the ENV template no longer exposes a deprecated FASTEMBED_CACHE_PATH. Why it matters: fewer surprises when loading local models and better cross-machine behavior.
- Lower default embedding batch size (36 → 32) — reduces memory spikes and improves stability on constrained machines.
- Return plain vectors from embed_text — embedding functions now return raw numeric vectors rather than wrapped objects in more places, simplifying downstream use.

## Performance

- More stable embedding usage: lowering the default embedding batch size and keeping models in a consistent local cache reduces memory and latency spikes when creating embeddings.
- Reduced unnecessary distillation work: reading only necessary QA turns and sealing per batch reduces I/O and CPU used during distillation runs.
- Shared counters and pacing: connectors and background pollers share counts and pacing logic where appropriate to avoid accidental overload and smoothing throughput.

## Security

- Daily CVE alert to Slack — daily summaries of dependency vulnerabilities are now available via a new GitHub Actions + Slack flow to help teams respond faster.
- Hide NATURAL_LANGUAGE surface and remediation guidance — certain surfaces were made less visible and remediation notes were added to help secure deployments.
- Azure token provider sharing — Azure token usage is centralized for fewer spurious credential refreshes and simpler secure handling.
- Google Calendar and Gmail hardening — the calendar connector now has stricter checks; Gmail is more resilient to per-user quota rejections and shares pacing across mailbox processing to avoid accidental rate-limit spikes.

## Bug Fixes

- Read only the needed QA turns for distillation so the distillation step no longer loads unnecessary conversation turns.
- Drain the agent trace backlog per improve run so new improve runs don't see stale traces.
- Seal distilled entries per curator batch to avoid partial distillations being visible.
- Curate every new entry per distill run by default to ensure fresh content gets summarized.
- Pin Data selection reads under the lock to avoid races with concurrent deletes/forgets.
- Fix visualize permission checks so the permission-skip option is applied only when explicitly requested, and skip the permission check only for the dataset owner when appropriate.
- Survive Gmail per-user quota rejections and share pacing per mailbox to reduce operation failures.
- Return 403 with a clear message when Cypher (graph DB query interface) is disabled, instead of a generic error.
- Narrow litellm response types and correctly return Mistral’s parsed model representation to improve LLM reliability and type safety.

## Technical Changes

- Large refactor of retrieval and code search components — new modules for broad retriever, code retriever and hybrid retrieval were added or reorganized to improve search quality and maintainability.
- Memify pipelines reorganized — memify and related task registration were refactored; some old task modules (triplet embedding) were removed as part of the SDK cleanup.
- New evaluation framework assets — a Locomo-based evaluation adapter, metrics, and many reference run artifacts were added for internal evaluation and end-to-end QA.
- Improvements to LLM adapters and token/encoding utilities — better litellm adapters, Azure identity handling, and embedding encoding utilities to improve compatibility across LLM/back-end providers.
- Session and data selection robustness — session management and data selection logic were tightened (locking and selection checks) to avoid races with forget/delete workflows.

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

> **Source** [topoteretes/cognee](https://github.com/topoteretes/cognee) · `v1.6.5.dev0` · 2026-10-16 · [upstream release](https://github.com/topoteretes/cognee/releases/tag/v1.6.5.dev0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
