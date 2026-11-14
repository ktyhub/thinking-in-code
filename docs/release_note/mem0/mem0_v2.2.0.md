---
title: "mem0 v2.2.0"
project: "mem0"
repo: "mem0ai/mem0"
tag: "v2.2.0"
version: "v2.2.0"
published: "2026-09-23"
type: "minor"
lang: "en"
summary: "Client: Add User Profiles to MemoryClient and AsyncMemoryClient: get_profile(), generate_profile(), get_profile_settings(), update_profile_settings(), sample_profiles(), and get_profile_job()."
---

# mem0 v2.2.0

**New Features:**
- **Client:** Add User Profiles to `MemoryClient` and `AsyncMemoryClient`: `get_profile()`, `generate_profile()`, `get_profile_settings()`, `update_profile_settings()`, `sample_profiles()`, and `get_profile_job()`. A profile is a structured, always-current JSON summary of one user, shaped by a JSON Schema you configure per project and filled by an LLM from that user's memories. Generation is asynchronous. Every job POST carries an `Idempotency-Key`; to retry a lost request without starting a second job, pass the same `idempotency_key` on each attempt ([#7340](https://github.com/mem0ai/mem0/pull/7340))

**Bug Fixes:**
- **Vector Stores:** Guard against `None` timestamps in the Valkey vector store's `insert()` and `update()` paths. `created_at` and `updated_at` fields that were present in the payload but set to `None` previously passed the `"created_at" not in payload` / `"updated_at" in payload` checks and raised `TypeError` when `datetime.fromisoformat()` received `None`. Both paths now use `.get()` with a truthiness check so `None` values fall through to the default, matching the Redis provider's behavior ([#6993](https://github.com/mem0ai/mem0/pull/6993))

---

> **Source** [mem0ai/mem0](https://github.com/mem0ai/mem0) · `v2.2.0` · 2026-09-23 · [upstream release](https://github.com/mem0ai/mem0/releases/tag/v2.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
