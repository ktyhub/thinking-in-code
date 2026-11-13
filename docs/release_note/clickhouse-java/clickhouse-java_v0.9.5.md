---
title: "clickhouse-java v0.9.5"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.9.5"
published: "2025-12-19"
type: "patch"
lang: "en"
---

# clickhouse-java v0.9.5

## New Features
- [client-v2] Log durations in ISO-8601 duration format (https://github.com/ClickHouse/clickhouse-java/pull/2660)
- [jdbc-v2] Added support for `getResultSet()` method in Array data types. (https://github.com/ClickHouse/clickhouse-java/issues/1545, https://github.com/ClickHouse/clickhouse-java/issues/2683)
- [jdbc-v2] Added handling for `Time` and `Time64` data types in JDBC. (https://github.com/ClickHouse/clickhouse-java/issues/2682)

## Bug Fixes
- [client-v2] Fixed reading columns of `Array` with component type `Variant`. For example, `Array(Variant(String, Int32))`. (https://github.com/ClickHouse/clickhouse-java/issues/2602) 
- [jdbc-v2] Fixed backward compatibility for `getPrimaryKeys()` method. (https://github.com/ClickHouse/clickhouse-java/issues/2654)
- [jdbc-v2] Fixed array conversion issues with multidimensional arrays and nested arrays. (https://github.com/ClickHouse/clickhouse-java/issues/2457)
- [jdbc-v2] Fixed backward compatibility issues with older ClickHouse versions by replacing `::` cast operator with `CAST` function in prepared statements. Fixed issue with reading database version on older versions. (https://github.com/ClickHouse/clickhouse-java/issues/2654, https://github.com/ClickHouse/clickhouse-java/issues/2227)
- [jdbc-v2] Reviewed and fixed database metadata support flags and return values. (https://github.com/ClickHouse/clickhouse-java/issues/2520, https://github.com/ClickHouse/clickhouse-java/issues/778, https://github.com/ClickHouse/clickhouse-java/issues/2519)
- [jdbc-v2] Added verification tests for issues #1999, #1015, #2155 (https://github.com/ClickHouse/clickhouse-java/pull/2659)

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.9.5` · 2025-12-19 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.9.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
