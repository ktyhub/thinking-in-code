---
title: "clickhouse-java v0.9.6"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.9.6"
published: "2026-01-12"
type: "patch"
lang: "en"
summary: "Release is aimed to address potential security risk in one of the dependencies (see below). We strongly recommend to upgrade."
---

# clickhouse-java v0.9.6

Release is aimed to address potential security risk in one of the dependencies (see below). We strongly recommend to upgrade. 

## Dependencies
- [repo] - upgraded `lz4-java` to `1.10.2`. Previously used version had a vulnerability https://www.cve.org/CVERecord?id=CVE-2025-66566. (https://github.com/ClickHouse/clickhouse-java/pull/2706)
- [repo] - upgraded `commons-lang3` to `3.20.0`. Previously used version had a vulnerability https://www.cve.org/CVERecord?id=CVE-2025-48924. (https://github.com/ClickHouse/clickhouse-java/pull/2696)

## New Features
- [jdbc-v2] - support of dot notation for table names without quotes. (https://github.com/ClickHouse/clickhouse-java/issues/2650)

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.9.6` · 2026-01-12 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.9.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
