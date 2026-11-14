---
title: "shardingsphere 5.1.2"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.1.2"
version: "5.1.2"
published: "2022-06-17"
type: "patch"
lang: "en"
summary: "Kernel: Alpha version to support SQL dialect translate for MySQL and PostgreSQL · Kernel: Support custom schema for PostgreSQL and openGauss · Kernel: Support create/alter/drop view statement for PostgreSQL and openGauss"
---

# shardingsphere 5.1.2

### New Feature

1. Kernel: Alpha version to support SQL dialect translate for MySQL and PostgreSQL
1. Kernel: Support custom schema for PostgreSQL and openGauss
1. Kernel: Support create/alter/drop view statement for PostgreSQL and openGauss
1. Kernel: Support openGauss cursor statement
1. Kernel: Support use customize system database
1. Kernel: Support get openGauss and MySQL create SQL
1. Kernel: Support get postgres create SQL
1. Proxy: Official support for quickly deploying a ShardingSphere-Proxy cluster with a ZooKeeper cluster in Kubernetes using Helm
1. JDBC: Support ShardingSphere JDBC Driver
1. Scaling: Support PostgreSQL auto create table
1. Scaling: Support scaling for table with customized schema in PostgreSQL and openGauss
1. Scaling: Support scaling for table with text primary key and without integer primary key
1. Mode: Registry center supports PG/openGauss three-level structure
1. Mode: Registry center supports database-level distributed lock

### Enhancement

1. Kernel: Support copy statement for PostgreSQL and openGauss
1. Kernel: Support alter/drop index statement for PostgreSQL
1. Kernel: Support update force index statement for MySQL
1. Kernel: Support create/alter/drop schema for openGauss
1. Kernel: Optimize RoundRobinReplicaLoadBalanceAlgorithm and RoundRobinTrafficLoadBalanceAlgorithm logic
1. Kernel: Optimize metadata loading logic when frontendDatabaseType and backendDatabaseType are different
1. Kernel: Refactor meta data load logic
1. Kernel: Optimize show processlist statement
1. Kernel: Improve performance about large tables loaded
1. Kernel: Support execute comment statement
1. Kernel: Support view in sharding rule
1. Kernel: Support parsing CREATE ROLLBACK SEGMENT in Oracle
1. Kernel: Support Parsing DROP TYPE in openGauss
1. Kernel: Support Parsing ALTER TYPE in openGauss
1. Kernel: Support parsing DROP DISKGROUP in Oracle
1. Kernel: Support parsing CREATE DISKGROUP in Oracle
1. Kernel: Support parsing DROP FLASHBACK ARCHIVE in Oracle
1. Kernel: Support Parsing CHECKPOINT in openGauss
1. Kernel: Support parsing CREATE FLASHBACK ARCHIVE in Oracle
1. Kernel: Add PostgreSQL Close Statement
1. Kernel: Support Parsing DROP CAST in openGauss
1. Kernel: Support parsing CREATE CAST in openGauss
1. Kernel: Support parsing CREATE CONTROL FILE in Oracle
1. Kernel: Support Parsing DROP DIRECTORY in openGauss
1. Kernel: Support parsing ALTER DIRECTORY in openGauss
1. Kernel: Support parsing CREATE DIRECTORY in openGauss
1. Kernel: Add PostgreSQL Checkpoint Statement
1. Kernel: Support parsing DROP SYNONYM in openGauss
1. Kernel: Support parsing CREATE SYNONYM in openGauss
1. Kernel: Support parsing ALTER SYNONYM in openGauss
1. Kernel: Add PostgreSQL CALL Statement
1. Kernel: Support parsing CREATE PFILE in Oracle
1. Kernel: Support parsing CREATE SPFILE in Oracle
1. Kernel: Support parsing ALTER SEQUENCE in Oracle
1. Kernel: Support parsing CREATE CONTEXT in Oracle
1. Kernel: Support Parsing ALTER PACKAGE in oracle
1. Kernel: Support parsing CREATE SEQUENCE in Oracle
1. Kernel: Support parsing ALTER ATTRIBUTE DIMENSION in Oracle
1. Kernel: Support parsing ALTER ANALYTIC VIEW in Oracle
1. Kernel: Use ShardingSphere SPI in SQLVisitorFacade
1. Kernel: Use ShardingSphere SPI in DatabaseTypedSQLParserFacade
1. Kernel: Support parsing ALTER OUTLINE in Oracle
1. Kernel: Support parsing DROP OUTLINE in Oracle
1. Kernel: Support parsing drop edition in oracle
1. Kernel: Support WITH Common Table Expression of SQLServer
1. Kernel: Exclude parenthesis from SubquerySegment's start and stop index in withClause
1. Kernel: Refactor JoinTableSegment
1. Kernel: Support parsing DROP SYNONYM in Oracle
1. Kernel: Support parsing CREATE DIRECTORY in Oracle
1. Kernel: Support parsing CREATE SYNONYM in Oracle
1. Kernel: Support for XmlNamespaces Clause of SQLServer SELECT Statement
1. Kernel: Support parsing Alter Database Dictionary in Oracle
1. Kernel: Support FOR Clause of SQLServer SELECT Statement
1. Kernel: Support Parsing ALTER DATABASE LINK in Oracle
1. Kernel: Support CREATE EDITION Parsing in Oracle
1. Kernel: Support parsing ALTER TRIGGER in Oracle
1. Kernel: Add SQLServer REVERT Statement
1. Kernel: Support Parsing DROP TEXT SEARCH in PostgreSQL
1. Kernel: Add drop server for PostgreSQL
1. Kernel: Support Parsing ALTER VIEW in Oracle
1. Kernel: Add drop access method for PostgreSQL
1. Kernel: Support Parsing DROP ROUTINE in PostgreSQL
1. Kernel: Proofread SQLServer DROP USER Statement
1. Kernel: Support parsing DROP TRIGGER in Oracle
1. Kernel: Support parsing Drop subscription in PostgreSQL
1. Kernel: Add drop operator class for PostgreSQL
1. Kernel: Support parsing DROP PUBLICATION in PostgreSQL
1. Kernel: Support Parsing DROP VIEW in Oracle
1. Kernel: Support Parsing DROP TRIGGER in PostgreSQL
1. Kernel: Support Parsing DROP DIRECTORY in Oracle
1. Kernel: Support Parsing DROP STATISTICS for PostgreSQL
1. Kernel: Add drop type SQL parser for PostgreSQL
1. Kernel: Support Parsing DROP RULE in PostgreSQL
1. Kernel: Proofread SQLServer ALTER LOGIN Statement
1. Kernel: Support parsing PostgreSQL DROP FOREIGN DATA WRAPPER
1. Kernel: Small changes to PostgreSQL DROP EVENT TRIGGER statement
1. Proxy: ShardingSphere-Proxy MySQL supports receiving MySQL packet more than 16 MB
1. Proxy: Supports netty parameter ChannelOption.SO_BACKLOG configurable in ShardingSphere-Proxy
1. Proxy: Optimize so-reuseaddr in netty to solve the problem of port occupied
1. Proxy: Docker image of ShardingSphere-Proxy supports aarch64 platform
1. Proxy: Make server version configurable in ShardingSphere-Proxy MySQL
1. Proxy: Supports more character sets in ShardingSphere-Proxy PostgreSQL/openGauss
1. Proxy: Make default port configurable in ShardingSphere-Proxy
1. Scaling: Compatible with HA ports for openGauss:3.0 when thread_pool enabled
1. Scaling: Optimize ZooKeeper event handling in PipelineJobExecutor to avoid blocking ZooKeeper events
1. Scaling: Make table name case-insensitive in whole process
1. Scaling: Improve replication slot cleanup for PostgreSQL and openGauss
1. Scaling: Improve lock protection for job preparation
1. Scaling: Support PostgreSQL insert on conflict do update
1. Scaling: Do not cache data source in GlobalDataSourceRegistry to avoid possible shared resource close issue
1. Scaling: Reuse data source pool as more as possible to reduce working database connections
1. DistSQL: `REFRESH TABLE METADATA` supports specifying PostgreSQL's schema
1. DistSQL: `ALTER SHARDING TABLE RULE` add validation of binding table
1. Mode: ShardingSphere-JDBC supports configuring database connection name
1. Distributed Transaction: DistSQL is prohibited from executing within a transaction
1. Distributed Transaction: autocommit = 0, DDL part of DML will automatically open the transaction

### Bug Fix

1. Kernel: Fix parsing error about show statement for PostgreSQL and openGauss
1. Kernel: Fix parsing error about time extract function for for PostgreSQL and openGauss
1. Kernel: Fix parsing error about select mod function for for PostgreSQL and openGauss
1. Kernel: Fix PSQLException when execute join statement with multi schema in readwrite scenario
1. Kernel: Fix wrong route result when execute create schema statement in encrypt scenario
1. Kernel: Fix npe when execute drop schema if exist statement
1. Kernel: Fix wrong route result when execute SELECT LAST_INSERT_ID() AS id; statement
1. Kernel: Fix npe when execute use database when database doesn't contains datasource
1. Kernel: Fix create function with set var
1. Proxy: Fix NPE caused by column's case unmatched in PostgreSQLComDescribeExecutor
1. Proxy: Complete command tags for schema DDL in ShardingSphere-Proxy PostgreSQL / openGauss
1. Scaling: Fix MySQL unsigned type null value cause error during increment task
1. Scaling: Fix resource leak caused by error occurred when creating DataSource in ShardingSphere-Scaling
1. Scaling: Fix ShardingSphereDataSource creation ignoring other rules
1. Scaling: Fix on preparation job could not be stopped
1. Scaling: Fix data source property url and jdbcUrl compatibility
1. Scaling: Fix openGauss logical replication slot creation, avoid possible incremental data loss
1. Scaling: Update local job status before persisting job status to registry center, make sure it won't be overwritten later
1. Scaling: Handling null value in TestDecodingPlugin for PostgreSQL
1. DistSQL: Fix `SET VARIABLE` modification not taking effect in stand-alone and memory mode
1. DistSQL: Fix the inconsistency between `SHOW INSTANCE LIST` display data and actual data
1. DistSQL: Fix capitalization sensitivity in sharding DistSQL
1. Mode: Fix the new version metadata lost data after the Scaling changes the table sharding rules
1. Distributed Transaction: Fix getIndexInfo with catalog

### API Changes

1. DistSQL: Change `EXPORT SCHEMA CONFIG`  to `EXPORT DATABASE CONFIG`
1. DistSQL: Change `IMPORT SCHEMA CONFIG` to `IMPORT DATABASE CONFIG`
1. DistSQL: Change `SHOW SCHEMA  RESOURCES` to `SHOW DATABASE RESOURCES`
1. DistSQL: Change `COUNT SCHEMA RULES` to `COUNT DATABASE RULES`
1. Mode: Adjust db-discovery algorithm configuration
1. Authority: Authority provider `ALL_PRIVILEGES_PERMITTED` updated to `ALL_PERMITTED`
1. Authority: Authority provider `SCHEMA_PRIVILEGES_PERMITTED` updated to `DATABASE_PERMITTED`

### Refactor

1. Scaling: Refactor JobConfiguration, prepare for different types of jobs reuse and extension
1. Mode: Optimize compute node structure of the registry center
1. Mode: Use uuid instead of ip@port as instance id

### Change Log

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/19)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.1.2` · 2022-06-17 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
