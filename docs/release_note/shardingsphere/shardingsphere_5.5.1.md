---
title: "shardingsphere 5.5.1"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.5.1"
published: "2024-10-22"
type: "patch"
lang: "en"
---

# shardingsphere 5.5.1

### API Changes

1. Authority: Mark privilege provider ALL_PERMITTED as deprecated and will be removed in future
1. DistSQL: Remove optional param usageCount from show storage units
1. Readwrite-splitting: Change dataSources to dataSourceGroups for YAML

### New Features

1. Kernel: Add new doris, hive and presto sql parser module and database type

### Enhancements

1. DistSQL: Check privilege when registering or altering storage unit
1. DistSQL: Check duplicate actual data nodes when creating or altering sharding table rule
1. DistSQL: Add like support for show storage units
1. DistSQL: Rollback if import database configuration failed
1. DistSQL: add table type to result set of show logical tables
1. SQL Parser: Support MySQL change replication with no server ids
1. SQL Parser: Support MySQL row and column aliases with ON DUPLICATE KEY UPDATE
1. SQL Parser: Support MySQL CALL sql with mysql prefix
1. SQL Parser: Support MySQL create loadable function returns int/dec
1. SQL Parser: Support parsing MySQL CREATE TABLESPACE/TABLE in Mysql-8
1. SQL Parser: Support parsing MySQL CREATE INDEX with ENGINE_ATTRIBUTE
1. SQL Parser: Support parsing MySQL LOAD DATA with @ variable
1. SQL Parser: Support parsing MySQL START REPLICA statement
1. SQL Parser: Support parsing MySQL json table function
1. SQL Parser: Add MySQL column not null SQL parsing
1. SQL Parser: Add MySQL charset SQL parsing
1. SQL Parser: Enhance mysql json function visit statement result
1. SQL Parser: Support PostgreSQL COLLATION and CONSTRAINT keywords
1. SQL Parser: Support PostgreSQL, openGauss function table and update from parse
1. SQL Parser: Support CTE with PostgreSQL and openGauss
1. SQL Parser: Optimize the timezone support of PostgreSQLDateValueParser.
1. SQL Parser: Support PostgreSQL limit and offset as null
1. SQL Parser: Enhance Oracle update statement as alias parse and add test case
1. SQL Parser: Support Oracle column length unit type SQL parsing
1. Metadata: Collect table type for PostgreSQL
1. Kernel: Support sql hint extract when sql contains dbeaver hint comment
1. Kernel: Add extract combine left select in extractFromSelectStatementWithoutProjection method
1. Kernel: Add assisted node to create and delete databases
1. Transaction: Use same transaction type in one transaction in JDBC adapter
1. Transaction: Support for switching transaction types
1. SQL Federation: Support sql federation bit_count function for mysql
1. SQL Federation: Improve atan and anan2 sql function for mysql
1. SQL Federation: Support federated query mysql bin function
1. SQL Federation: Support for federated query NOT operator
1. Proxy: Make the results of show tables in order
1. Proxy: Trigger metadata collection when creating and deleting database and table
1. Proxy: Optimize Agent to support collecting metrics data from multiple data sources when used with Driver
1. Proxy Native: Add more graalvm reachability metadata for caffeine cache
1. Sharding: Revise all local index for sharding table and add object uniqueness level spi to control index token generator
1. Sharding: Add NullsOrderType.LOW and NullsOrderType.HIGH to handle NULL order by in sharding feature
1. Sharding: Add inline sharding algorithms match actual data nodes check
1. Encrypt: Add unsupported check for combine statement with encrypt columns
1. Encrypt: Support select distinct(column) encrypt rewrite and refactor SubstitutableColumnNameToken build logic
1. Encrypt: Support like concat nested concat statement rewrite with encrypt feature
1. Pipeline: Add SHARDING_TOTAL_COUNT impl of JobExecutorServiceHandler to improve CPU core requirement
1. Pipeline: Support page query for inventory dumper and data consistency streaming query
1. Pipeline: Use case-insensitive identifiers to enhance the table metadata loader
1. Pipeline: Support primary key columns ordering for standard pipeline table metadata loader

### Bug Fixes

1. DistSQL: Fix load single table error after creating logical data source
1. DistSQL: Fix set default single table storage unit to random failed
1. DistSQL: Fix set default single table storage unit to logical data source failed
1. DistSQL: Fix NPE when import metadata
1. SQL Parser: Support PostgreSQL do nothing conflict action
1. SQL Parser: Fix oracle nvl function and interval hour parse error
1. Metadata: Keep in-used storage node when unregister storage unit
1. Metadata: Fixed the problem of missing storage unit when registering storage unit
1. Kernel: Replace ThreadLocal with TransmittableThreadLocal in HintManager to support cross Thread usage
1. Kernel: Use ConnectionPropertiesParser spi to parse jdbcUrl to solve oracle url parse error
1. Kernel: Fix column count assert exception caused by postgresql system table judge
1. SQL Binder: Add TableAvailable interface for CloseStatementContext, MoveStatementContext, FetchStatementContext and fix sql rewrite test case
1. Transaction: Fix setSavepoint method invocation not cleaning up
1. Transaction: Fix savepoint manager not cleaned up in distributed transactions
1. Transaction: Fix transaction context not cleaned up when xa transaction is committed
1. Transaction: Fix the issue that cursor is not rewritten
1. SQL Federation: Fix federated query LocalDateTime conversion
1. SQL Federation: Fix push down sql execute error when sql contains chinese character with sql federation
1. SQL Federation: Fix federation query binary type data query
1. SQL Federation: Fix null result in federated query for a single projected column
1. SQL Federation: Fix sql federation unknown type exception caused by calcite wrong result type with bigint
1. Proxy: Support binary type bool value in PostgreSQL
1. Proxy: Support array type prepared param in PostgreSQL
1. Proxy: Support binary protocol value for text array in PostgreSQL
1. Proxy: Fix duplicate results when querying information_schema.SCHEMATA
1. Proxy: Fix incorrect results for querying information_schema.SCHEMATA
1. Proxy: Fix NPE when execute show table status
1. Proxy: Fix no database selected exception occurs when show tables from db
1. Proxy: Fix the error that the process does not exit after proxy startup fail
1. Proxy: Fix the error that the persisted system metadata was not cleared after the database was deleted in the PostgreSQL scenario
1. Proxy: Fix no database selected exception in the query SQL
1. JDBC: Resolve the issue where "zip file closed" in versions prior to SpringBoot 2.3.
1. JDBC: Fix the NPE when it does not contain a specified logic database in Driver.
1. Sharding: Fix Sharding column not tracked through aliases
1. Sharding: Fix alter view exception when config sharding rule and binding table rule
1. Sharding: Fix is need accumulate logic
1. Sharding: Fix the generated key column name case insensitivity error
1. Encrypt: Fix show create table wrong result with encrypt when data type contains float
1. Encrypt: Fix the issue where updating a non-encrypted table and using a subquery on an encrypted table.
1. Encrypt: Add insert select rewrite for encrypt
1. Pipeline: InventoryTaskSplitter compatible with `BigInteger` primary key
1. Pipeline: Fix default data source lost when create migration job

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.5.1` · 2024-10-22 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.5.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
