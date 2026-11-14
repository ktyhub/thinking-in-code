---
title: "shardingsphere 5.3.2"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.3.2"
published: "2023-03-30"
type: "patch"
lang: "en"
summary: "Proxy: Add property system-log-level, support dynamic change of log level by DistSQL. · DistSQL: Remove Hint-related DistSQL, users can use SQL Hint instead"
---

# shardingsphere 5.3.2

### API Changes

1. Proxy: Add property `system-log-level`, support dynamic change of log level by DistSQL.
1. DistSQL: Remove Hint-related DistSQL, users can use `SQL Hint` instead

### New Features

1. Scaling: Support any type of column unique key table

### Enhancements

1. Scaling: Use stream query for inventory dump and data consistency check
1. Scaling: Compatible with `VARBINARY` column type in MySQL binlog parsing
1. Scaling: Refactor `AbstractSimplePipelineJob.execute` to blocking
1. Scaling: Improve table records count calculation
1. Scaling: Support proxy sharding rule absent for migration job
1. Scaling: Add `useServerPrepStmts=false` for pipeline job on MySQL
1. Scaling: Improve datetime/time parsing for MySQL binlog
1. Scaling: Add global status for prepare stage
1. Scaling: Add `netTimeoutForStreamingResults` for pipeline job on MySQL
1. Authority: Support specifying password authentication method
1. Authority: Add md5 authentication support for openGauss protocol
1. Agent: Add more metrics for JDBC
1. Kernel: ShardingSphere Driver configuration supports Apollo
1. Kernel: Adjust `SKIP_ENCRYPT_REWRITE SQL` Hint to `SKIP_SQL_REWRITE` to support more scenarios
1. Kernel: Support openGauss `EXPLAIN PERFORMANCE`
1. Encrypt: Like supports concat function

### Bug Fixes

1. Scaling: Fix unicode char and special char decoding for PostgreSQL incremental task
1. Scaling: Fix Migration not support PostgreSQL json type
1. DistSQL: `CREATE SHARDING TABLE RULE` supports `NONE` strategy
1. Kernel: Fix use system database error when data sources are empty
1. Kernel: Fix set worker-id does not take effect with Standalone mode
1. Kernel: Clear storage node information when delete readwrite-splitting and database discovery rules
1. Kernel: Fix the abnormal problem of Column index out of range in single table complex query
1. Kernel: Fix PostgreSQL like lower case failed.
1. Kernel: Fixed the exception of built-in metabase data collection when the front and back database types were inconsistent
1. Kernel: Fix the problem of routing error reporting under certain table names
1. Kernel: Fix MySQL create procedure parse error
1. Kernel: Fix union extract table name NPE
1. Kernel: Fix upper case table constraint not rewrite error
1. Kernel: Fix failed to parse PostgreSQL / openGauss SQL contains money type
1. Kernel: Fix PostgreSQL / openGauss positional parameter rule
1. Kernel: Fix PostgreSQL / openGauss failed to parse const with type cast
1. Kernel: Fix Chinese characters encode exception when execute select with sql federation engine
1. Kernel: Fix `IndexOutOfBoundsException` when execute set variable statement int jdbc adapter
1. Kernel: Fix index does not exist exception when execute drop index statement
1. Proxy: Properly handle number sign in MySQL Proxy binary protocol
1. Proxy: Fix PostgreSQL Proxy failed to handle bytea data type
1. Proxy: Fix PostgreSQL Proxy failed to parse time value with microseconds
1. Proxy: Fix PostgreSQL protocol codec for date type in binary format
1. Proxy: Fix possible CCE `PostgreSQLInt2BinaryProtocolValue`
1. Proxy: Fix possible error when client pass quoted charset to PostgreSQL/openGauss Proxy

### Change Log

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/24)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.3.2` · 2023-03-30 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
