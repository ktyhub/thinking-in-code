---
title: "clickhouse-java v0.11.1"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.11.1"
published: "2026-11-09"
type: "patch"
lang: "en"
summary: "ZstdException: Destination buffer is too small (ZSTD) when request compression is enabled (compressClientRequest(true)) and a 64 KiB block of the data does not compress, for example random bytes. The compressed output…"
---

# clickhouse-java v0.11.1

## Bug Fixes

- **[client-v2]** Fixed `INSERT` failing with `LZ4Exception: maxDestLen is too small` (LZ4) or
  `ZstdException: Destination buffer is too small` (ZSTD) when request compression is enabled
  (`compressClientRequest(true)`) and a 64 KiB block of the data does not compress, for example random bytes. The
  compressed output buffer was as large as the uncompressed block, but such a block grows when it is compressed. The
  buffer is now sized with the worst-case bound of the codec (`LZ4Compressor.maxCompressedLength`,
  `Zstd.compressBound`). The bug was introduced in 0.11.0. (https://github.com/ClickHouse/clickhouse-java/issues/3302)

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.11.1` · 2026-11-09 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.11.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
