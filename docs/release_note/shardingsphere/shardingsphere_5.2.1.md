---
title: "shardingsphere 5.2.1"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.2.1"
published: "2022-10-18"
type: "patch"
lang: "en"
---

# shardingsphere 5.2.1

### New Feature

1. Add ShardingSphere default system database to support global metadata management
1. Support asynchronous data consistency check
1. Added support for Consul governance center
1. Added support for Nacos governance center
1. Added support for the view function in the governance center

### Enhancement

1. SQL Federation engine adds ADVANCED executor and adapts to openGauss database
1. Support ShardingSphere Proxy startup after read-write splitting read database is disabled
1. SQL HINT supports force sharding route
1. Show processlist supports showing Proxy connections (sleep, active)
1. Optimized ShardingSphere-JDBC data source configuration error message
1. ShardingSphere-JDBC supports SpringBoot 3.x version
1. Support load MySQL, PostgreSQL, openGauss and SQLServer view metadata
1. Update Snakeyaml to 1.33 and open YAML 3MB limit
1. Reuse cached connections as possible when unicast sharding
1. Support Parsing ALTER ROLE in Oracle
1. Add support of ALTER RESOURCE COST for Oracle
1. Support parsing Drop Materialized View in Oracle
1. Support parsing DROP LIBRARY in Oracle
1. Support parsing DROP JAVA in Oracle
1. Support parsing DROP PLUGGABLE DATABASE in Oracle
1. Support parsing DROP INDEX TYPE in Oracle
1. Support Parsing ALTER PACKAGE in openGauss
1. Support openGauss select offset, count statement parse and remove useless syntax in PostgreSQL grammar
1. Add max_size to openGauss syntax
1. Optimize alter view/drop view parse logic and fix alter view refresher bug
1. Add sql parser error detail to ParseCancellationException
1. Add support for parse OptOnConflict for postgres
1. Enhance support for ALTER TABLE and ALTER VIEW in PostgreSQL
1. Add a missing keyword in PostgreSQL Declare Statement
1. Add json function support to mysql parser
1. ShardingSphere-Proxy automatically adapts to cgroup memory limits in Docker environment
1. Show migration status DistSQL respond new added error_message column
1. Show migration status respond new added processed_records_count column
1. Support MySQL 8 caching_sha2_password authentication in incremental dump
1. Improve drop pipeline process configuration
1. Support unique key table migration
1. Support migrate table to new name table
1. Improve thread pool usage in pipeline task and runner
1. Support cancelable data consistency check
1. DistSQL: When creating or altering readwrite-splitting rule, check duplicate write or read resources
1. DistSQL: Add validity check for `ALTER SHARDING BINDING TABLE RULES`
1. Standalone mode H2 support persistent metadata 
1. Fix openGauss cursor execution in xa transaction
1. Added transaction related exceptions

### Bug Fix

1. Generate proper placeholder for PostgreSQL when rewriting
1. Fix opengauss update set parse exception
1. Fix parse exception when execute insert statement with negative value
1. Fix wrong connectDescriptorUrlPattern in OracleDataSourceMetaData
1. Fix insert SQL garbled after sharding rewrote in special rules
1. Fix exception when execute select * from information_schema.tables
1. Fix exception when execute alter view rename
1. Fix PostgreSQL check data source permission when using rolsuper
1. DistSQL: fix NPE for `REFRESH TABLE METADATA` when there is no resource
1. Fix Unmodified table metadata when modify rules
1. Fix database discovery
1. The MySQL.NORMAL_REPLICATION algorithm cannot find primary node"
1. Fixed using etcd to build a cluster event not aware
1. Fix NPE occurred when transaction management is not created
1. Fix routing exception that occurs when the sharding value of the InlineShardingAlgorithm algorithm exceeds Integer

### API Changes

1. SQL HINT syntax format adjust to SQL-style format
1. DistSQL: Remove syntax `COUNT DATABASE RULES`
1. ShardingSphere mode remove overwrite configuration
1. Agent: Optimize configuration of agent.yaml

### Change Log

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/21)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.2.1` · 2022-10-18 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
