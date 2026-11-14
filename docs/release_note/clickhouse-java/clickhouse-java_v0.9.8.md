---
title: "clickhouse-java v0.9.8"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.9.8"
published: "2026-03-18"
type: "patch"
lang: "en"
summary: "[client-v2] Added Records#getSchema() to expose table schema metadata even when query result is empty. ("
---

# clickhouse-java v0.9.8

### Improvements 

- **[client-v2]** Added `Records#getSchema()` to expose table schema metadata even when query result is empty. (https://github.com/ClickHouse/clickhouse-java/pull/2777)

### Bug Fixes

- **[jdbc-v1, jdbc-v2]** Fixed type mapping/conversion behavior for large unsigned integer values (issue #2779), including related test coverage updates. (https://github.com/ClickHouse/clickhouse-java/issues/2779)

- **[jdbc-v2]** Fixed off-by-one bug in `ArrayResultSet#next()` that could return `true` one extra time and then fail with `SQLException: No current row`. (https://github.com/ClickHouse/clickhouse-java/pull/2790)

- **[jdbc-v2]** Fixed handling of malformed `SELECT`-like queries (for example, `SELECT a, FROM table`): previously, the driver could fail to read returned data when query type was not inferred before execution; now it detects a returned result set at runtime from the server response and reads it correctly. (https://github.com/ClickHouse/clickhouse-java/issues/2784)

### Updated Dependencies

- **[repo]** Upgraded `at.yawk.lz4:lz4-java` from `1.10.2` to `1.10.4` to pick up native performance fixes. (https://github.com/ClickHouse/clickhouse-java/pull/2778)

- **[repo]** Upgraded `com.fasterxml.jackson.core:jackson-core` from `2.17.2` to `2.18.6` in `jdbc-v2`. (https://github.com/ClickHouse/clickhouse-java/pull/2767)

- **[repo]** Upgraded `com.fasterxml.jackson.core:jackson-core` from `2.17.2` to `2.18.6` in `examples/client-v2`. (https://github.com/ClickHouse/clickhouse-java/pull/2766)

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.9.8` · 2026-03-18 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.9.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
