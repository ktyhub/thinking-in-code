---
title: "iotdb v1.3.7"
project: "iotdb"
repo: "apache/iotdb"
tag: "v1.3.7"
published: "2026-03-04"
type: "patch"
lang: "en"
---

# iotdb v1.3.7

## Features & Improvements
- Others: Remove risky RPC interfaces.
- Others: Remove JEXL functions.
- Others: Check naming when creating a Pipe.
- Others: Change the default client RPC service address to 127.0.0.1.
- Others: Modify code to make internal services bind to the value specified by `dn_internal_address` instead of the default address.

## Bugs
- Fixed an issue in the partition table automatic deletion logic: Only TTL configured at the DB level takes effect, using the maximum TTL value within the DB.

**Full Changelog**: https://github.com/apache/iotdb/compare/v1.3.6...v1.3.7

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v1.3.7` · 2026-03-04 · [upstream release](https://github.com/apache/iotdb/releases/tag/v1.3.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
