---
title: "qdrant v1.18.1"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.18.1"
version: "v1.18.1"
published: "2026-05-22"
type: "patch"
lang: "en"
summary: "https://github.com/qdrant/qdrant/pull/8988 - Refactor quantized multi-vector scorers for io_uring support · https://github.com/qdrant/qdrant/pull/9058 - Validate vector dimensions before WAL write for async upserts"
---

# qdrant v1.18.1

# Change log

## Improvements

* https://github.com/qdrant/qdrant/pull/8988 - Refactor quantized multi-vector scorers for io_uring support
* https://github.com/qdrant/qdrant/pull/9058 - Validate vector dimensions before WAL write for async upserts

## Bug Fixes

* https://github.com/qdrant/qdrant/pull/8990 - Notify pending consensus ops on snapshot apply
* https://github.com/qdrant/qdrant/pull/9054 - Fix indexed integer range filter with float values
* https://github.com/qdrant/qdrant/pull/9055 - Fix `{match: {except: []}}` returning zero results with payload index
* https://github.com/qdrant/qdrant/pull/9070 - Fix empty vector panic
* https://github.com/qdrant/qdrant/pull/9099 - Fix TurboQuant heap memory under-reporting
* https://github.com/qdrant/qdrant/pull/9107 - Do not use unnecessary sequential mmaps
* https://github.com/qdrant/qdrant/pull/9014 - Fix resharding cleanup data race with update queue
* https://github.com/qdrant/qdrant/pull/9120 - Use cluster default shard transfer method for fallback
* https://github.com/qdrant/qdrant/pull/9121 - Recreate workers/optimizers async to not block consensus
* https://github.com/qdrant/qdrant/pull/9110 - Restart optimizer on conflicting vector schema
* https://github.com/qdrant/qdrant/pull/9122 - Do not remove shard for snapshot transfer receiver
* https://github.com/qdrant/qdrant/pull/9125 - Fix snapshot transfer cancellation on external malformed requests
* https://github.com/qdrant/qdrant/pull/9116 - Fix deleted mask race on optimization and snapshot creation

## Security

* https://github.com/qdrant/qdrant/pull/9031 - Authorize request before we accept snapshot file upload

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.18.1` · 2026-05-22 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.18.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
