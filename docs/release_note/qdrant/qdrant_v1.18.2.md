---
title: "qdrant v1.18.2"
project: "qdrant"
repo: "qdrant/qdrant"
tag: "v1.18.2"
version: "v1.18.2"
published: "2026-06-04"
type: "patch"
lang: "en"
summary: "https://github.com/qdrant/qdrant/pull/9282 - Log slow operations during shard WAL recovery · https://github.com/qdrant/qdrant/pull/9137 - Clear cache of ID tracker after building a segment"
---

# qdrant v1.18.2

# Change log

## Improvements

* https://github.com/qdrant/qdrant/pull/9282 - Log slow operations during shard WAL recovery
* https://github.com/qdrant/qdrant/pull/9137 - Clear cache of ID tracker after building a segment
* https://github.com/qdrant/qdrant/pull/9138 - Don't rebuild payload index if changing `on_disk` flag

## Bug Fixes

* https://github.com/qdrant/qdrant/pull/9285 - Fix potential infinite loop in optimizer when using multi vectors with `prevent_unoptimized`
* https://github.com/qdrant/qdrant/pull/9217 - Clean up unfinished segment optimizations on cancellation, don't load them on restart
* https://github.com/qdrant/qdrant/pull/9260 - Fix MatchAny with an empty list being rejected on integer index
* https://github.com/qdrant/qdrant/pull/9239 - Add timeout to shard snapshot streaming endpoint, drop connections not actively read from
* https://github.com/qdrant/qdrant/pull/9215 - Fix abort transfer with resharding not being idempotent
* https://github.com/qdrant/qdrant/pull/9237 - Fix reporting old progress in new snapshot transfers
* https://github.com/qdrant/qdrant/pull/9226 - Fix WAL lock error on Android platforms

## Security

* https://github.com/qdrant/qdrant/pull/9254 - Fix REST auth whitelist bypass on specially crafted paths, resolve route before authorizing
* https://github.com/qdrant/qdrant/pull/9268 - Fix out of bound heap read with malicious snapshot by rejecting incorrect length

---

> **Source** [qdrant/qdrant](https://github.com/qdrant/qdrant) · `v1.18.2` · 2026-06-04 · [upstream release](https://github.com/qdrant/qdrant/releases/tag/v1.18.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
