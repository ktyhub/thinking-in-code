---
title: "mem0 ts-v3.3.0"
project: "mem0"
repo: "mem0ai/mem0"
tag: "ts-v3.3.0"
version: "ts-v3.3.0"
published: "2026-09-23"
type: "release"
lang: "en"
summary: "Client: Add User Profiles to MemoryClient: getProfile(), generateProfile(), getProfileSettings(), updateProfileSettings(), sampleProfiles(), and getProfileJob()."
---

# mem0 ts-v3.3.0

**New Features:**
- **Client:** Add User Profiles to `MemoryClient`: `getProfile()`, `generateProfile()`, `getProfileSettings()`, `updateProfileSettings()`, `sampleProfiles()`, and `getProfileJob()`. A profile is a structured, always-current JSON summary of one user, shaped by a JSON Schema you configure per project and filled by an LLM from that user's memories. Generation is asynchronous. Every job POST carries an `Idempotency-Key`; to retry a lost request without starting a second job, pass the same `idempotencyKey` on each attempt ([#7340](https://github.com/mem0ai/mem0/pull/7340))

---

> **Source** [mem0ai/mem0](https://github.com/mem0ai/mem0) · `ts-v3.3.0` · 2026-09-23 · [upstream release](https://github.com/mem0ai/mem0/releases/tag/ts-v3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
