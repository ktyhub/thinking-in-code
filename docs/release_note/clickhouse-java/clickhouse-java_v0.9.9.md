---
title: "clickhouse-java v0.9.9"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.9.9"
published: "2026-08-25"
type: "patch"
lang: "en"
summary: "[client-v2] ServerException with code 159 Execution Timeout is retried unconditionally. After the fix this"
---

# clickhouse-java v0.9.9

## Bug Fixes 

- **[client-v2]** `ServerException` with code `159 Execution Timeout` is retried unconditionally. After the fix this
error treated as non-retriable. (part of https://github.com/ClickHouse/clickhouse-java/issues/2637)
- **[jdbc-v2]** Fixes `Statement#setQueryTimeout`. By default, client executes query in calling thread and future timeout 
has no effect. Fix makes `setQueryTimeout` to set `max_execution_time` server setting in this case to overcome limitation.
  (https://github.com/ClickHouse/clickhouse-java/issues/2637)

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.9.9` · 2026-08-25 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.9.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
