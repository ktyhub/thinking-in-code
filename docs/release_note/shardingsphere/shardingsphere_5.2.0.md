---
title: "shardingsphere 5.2.0"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.2.0"
version: "5.2.0"
published: "2022-09-08"
type: "minor"
lang: "en"
summary: "Support SQL audit for sharding feature · Support MySQL show processlist and kill process list id feature · Scaling: Add dedicated DistSQL for data migration · Scaling: Basic support migrate data to heterogeneous database"
---

# shardingsphere 5.2.0

### New Feature

1. Support SQL audit for sharding feature
1. Support MySQL show processlist and kill process list id feature
1. Scaling: Add dedicated DistSQL for data migration
1. Scaling: Basic support migrate data to heterogeneous database
1. DistSQL: New syntax `CREATE MIGRATION PROCESS CONFIGURATION`
1. DistSQL: New syntax `ALTER MIGRATION PROCESS CONFIGURATION`
1. DistSQL: New syntax `SHOW MIGRATION PROCESS CONFIGURATION`
1. DistSQL: New syntax  `ADD MIGRATION SOURCE RESOURCE`
1. DistSQL: New syntax `SHOW SQL_TRANSLATOR RULE`
1. DistSQL: New syntax `CREATE SHARDING AUDITOR`
1. DistSQL: New syntax `ALTER SHARDING AUDITOR`
1. DistSQL: New syntax `SHOW SHARDING AUDIT ALGORITHMS`

### Enhancement

1. Support column visible feature for MySQL, Oracle, SQLServer and H2
1. Support cartesian product configuration for read write splitting
1. Support spring namespace and spring boot usage for sql translator
1. Support JSR-310 Year and Month in IntervalShardingAlgorithm
1. Support broadcast table update/delete limit statement
1. Support create index on table(column) statement rewrite when config encrypt
1. Support openGauss cursor, fetch, move, close statement for sharding, readwrite-splitting
1. Support encrypt column rewrite when execute column is null in predicate
1. Support encrypt show create table return logic columns
1. Support create table with index statement rewrite when config encrypt
1. Support PostgreSQL create operator statement parse
1. Support PostgreSQL create materialized view statement parse
1. Support PostgreSQL nested comments parse
1. Support PostgreSQL alter subscription statement parse
1. Support PostgreSQL create group statement parse
1. Support PostgreSQL alter statictics statement parse
1. Support PostgreSQL create foreign table statement parse
1. Support PostgreSQL alter server statement parse
1. Support PostgreSQL create foreign data wrapper statement parse
1. Support PostgreSQL create event trigger statement parse
1. Support PostgreSQL security label statement parse
1. Support PostgreSQL reindex statement parse
1. Support PostgreSQL reassign owned statement and refresh materialized view statement parse
1. Support PostgreSQL prepare transaction statement parse
1. Support PostgreSQL create collation statement parse
1. Support PostgreSQL lock statement parse
1. Support PostgreSQL alter rule statement parse
1. Support PostgreSQL notify statement parse
1. Support PostgreSQL unlisten statement parse
1. Support Oracle alter function and alter hierarchy statement parse
1. Support Oracle alter pluggable database statement parse
1. Support Oracle alter materialized view log statement parse
1. Support Oracle alter diskgroup statement parse
1. Support Oracle alter operator statement parse
1. Support oracle alter cluster statement parse
1. Support oracle alter audit policy statement parse
1. Support Oracle alter index type statement parse
1. Support Oracle lock table statement parse
1. Support Oracle alter java statement parse
1. Support Oracle inline constraint statement parse
1. Support openGauss geometric operator statement parse
1. Optimize MySQL visible/invisible parse of create/alter table statements
1. Support scope of variable prefixed with @@ in MySQL SET statement parse
1. Support MySQL create procedure with create view parse
1. Support column segments parse in create index on table statement
1. Support openGauss cursor, fetch, move, close statement for sharding, readwrite-splitting
1. Support encrypt column rewrite when execute column is null in predicate
1. Support encrypt show create table return logic columns
1. Support create table with index statement rewrite when config encrypt
1. Support parsing ALTER LOCKDOWN PROFILE in Oracle
1. Support parsing ALTER MATERIALIZED VIEW in Oracle
1. Support parsing ALTER MATERIALIZED ZONEMAP in Oracle
1. Support parsing ALTER LIBRARY in Oracle
1. Support parsing ALTER INMEMORY JOIN GROUP in Oracle
1. Support parsing DROP OPERATOR in Oracle
1. Support parsing DROP RESTORE POINT in Oracle
1. Support parsing CREATE RESTORE POINT in Oracle
1. Support parsing DROP INMEMORY JOIN GROUP in Oracle
1. Support parsing create_bit_xor_table in MySQL
1. Support parsing MySQL DO statement
1. Support parsing DropServer in openGauss
1. Support parsing CREATE AGGREGATE In openGauss
1. Support parsing ALTER ROUTINE in PostgreSQL
1. Add PostgreSQL Create Cast Statement
1. Add PostgreSQL Create Aggregate Statement
1. Support fetch/move/close cursor statement in PostgreSQL
1. Support Parsing ALTER PUBLICATION in PostgreSQL
1. Add PostgreSQL Create Access Method Statement
1. Support Parsing ALTER POLICY in PostgreSQL
1. Support parsing ALTER OPERATOR in PostgreSQL
1. Add PostgreSQL Copy Statement
1. Add PostgreSQL Comment Statement
1. Support listen statement in postgreSQL
1. Support DECLARE cursor statement
1. Add default serverConfig in helm charts
1. Assemble openGauss JDBC Driver into Proxy distribution
1. ShardingSphere-Proxy listen on specified IP addresses
1. Support COM_STMT_SEND_LONG_DATA in MySQL Proxy
1. SELECT VERSION() support alias in MySQL Proxy
1. Fix openGauss Proxy could not be connected if no resource defined
1. Support using JRE defined in JAVA_HOME in ShardingSphere-Proxy's startup script
1. Avoid client blocked when OOM occurred in ShardingSphere-Proxy
1. Support using c3p0 in ShardingSphere-JDBC
1. Support SET NAMES with value quoted by double-quote
1. Connection.prepareStatement with columns arguments is available in ShardingSphere-JDBC
1. Scaling: Improve MySQL connect and reconnect
1. Scaling: Fix MySQL json column may cause leak at incremental task
1. Scaling: Add permission check for PostgreSQL data sources
1. Scaling: Incremental migration support for MySQL MGR mode
1. Scaling: Improve job progress persistence
1. Scaling: Start job DistSQL execute and return synchronously
1. Scaling: Inventory migration support table has primary key and unique key
1. Scaling: Close unerlying ElasticJob when stopping job
1. Scaling: Improve logical replication slot name generation for PostgreSQL and openGauss
1. Scaling: Make query DistSQL could be executed when no database selected
1. DistSQL: Add worker_id to the result set of `SHOW INSTANCE LIST` & `SHOW INSTANCE INFO`
1. DistSQL: Improve the result of `EXPORT DATABASE CONFIG`
1. DistSQL: Support more databases for `FORMAT SQL`
1. DistSQL: Optimize the execution logic of `CREATE TRAFFIC RULE`
1. DistSQL: Add paramter `writeDataSourceQueryEnabled` for RDL READWRITE_SPLITTING RULE.
1. DistSQL: Support `assistEncryptor` for Encrypt RDL
1. DistSQL: Add sharding algorithm type check when `CREATE SHARDING TABLE RULE`
1. Support database discovery to configure multiple groups of high availability under the same logic database
1. Support ShardingSphere-Proxy to start up under empty logic library
1. Support for isolating EventBus events by instance
1. Support the database to detect changes in the master node and restart the detection heartbeat task
1. Support ShardingSphere-Proxy to generate new worker-id when re-registering in cluster mode
1. Thrown exception when inserting expression value in shadow column on executing insert
1. Support distributed transactions across multiple logical databases
1. Support executing truncate in XA & PostgreSQL
1. Support alter local transaction rule with DistSQL
1. Support global transaction manager
1. Delete support for branch transaction on proxy

### Bug Fix

1. Fix single table metadata refresh error caused by filtering DataSourceContainedRule
1. Fix parsing exception caused by the null value of MySQL blob type
1. Fix PostgreSQL/openGauss reset statement parse error
1. Fix wrong parameter rewrite when use sharding and encrypt
1. Fix the failed conversion of Month related classes on IntervalShardingAlgorithm
1. Fix NullPointerException when execute select union statement contains subquery
1. Fix wrong encrypt rewrite result due to incorrect order of metadata
1. Fix MySQL trim function parse error
1. Fix MySQL insert values with _binary parse error
1. Fix MySQL syntax error cannot be thrown to client
1. Avoid EventLoop blocked because of closing JDBC resources
1. Correct server status flags returned by MySQL Proxy
1. Fix a possible connection leak issue if Proxy client disconnected in transaction
1. Fixed a possible consistency issue with the statement being executed when the Proxy client is disconnected
1. Avoid pooled connection polluted by executing SET statements
1. Make SHOW TABLES FROM work in ShardingSphere-Proxy
1. Fix PostgreSQL DDL could not be executed by Extended Query
1. Fix SHOW VARIABLES could not be executed in PostgreSQL Proxy without resource
1. Fix FileNotFoundException when use ShardingSphere Driver with SpringBoot fatjar
1. Scaling: Fix the problem that the table contains both primary key and unique index at inventory migration
1. Scaling: Improve incremental migration, support the latest position in the middle of batch insert event
1. Scaling: Fix the error caused by null field value in openGauss incremental migration
1. DistSQL: Fix incorrect strategy name in result of `SHOW SHARDING TABLE RULES`
1. DistSQL: Fix current rule config is modified in advance when `ALTER SHARDING TABLE RULE`
1. DistSQL: Fix connection leak when `ALTER RESOURCE`
1. DistSQL: Fix `CREATE TRAFFIC RULE` failed when load balance algorithm is null
1. Fix that the monitoring heartbeat task was not stopped when the database was discovered and the logical library was deleted
1. Fix cluster mode ShardingSphere-JDBC load all logic database
1. Fix worker-id generated by SnowflakeKeyGenerateAlgorithm in cluster mode may exceed the maximum value
1. Fix `DistSQL` adding shadow algorithm exception without shadow data source
1. Fix cross-database data source confusion caused by same data source name in multiple logical databases
1. Fix RUL DistSQL execution failure in transaction
1. Fix begin for PostgreSQL & openGauss
1. Agent: Fixed the error of null value in contextManager when collecting metric data

### API Changes

1. Remove SQL passthrough to data source feature
1. Add new assistedQueryEncryptorName and remove QueryAssistedEncryptAlgorithm interface
1. Refactor readwrite-splitting api to improve user experience
1. Remove check-duplicate-table-enabled configuration
1. Remove useless config item show-process-list-enabled configuration
1. Scaling: Change keyword for part of data migration DistSQL
1. Scaling: Redesign part of data migration DistSQL
1. DistSQL: Unify parameter type specification
1. DistSQL: Split `SHOW INSTANCE MODE` to `SHOW MODE INFO` and `SHOW INSTANCE INFO`
1. DistSQL: Change `DROP SCALING jobId` to `CLEAN MIGRATION jobId`
1. DistSQL: Remove `COUNT INSTANCE RULES`
1. Add database found that high availability supports all the slave libraries to go offline, and the main library undertakes the read traffic configuration
1. SnowflakeKeyGenerateAlgorithm supports configuring worker-id in standalone mode
1. Replace `sourceDataSourceName` with `productionDataSourceName` in Shadow API Configuration
1. Authority: Remove deprecated native authority provider

### Refactor

1. ShardingSphere metadata refactoring for splitting actual metadata and logical metadata
1. Use ConnectionContext, QueryContext to remove ThreadLocal in FetchOrderByValueQueuesHolder, TrafficContextHolder, SQLStatementDatabaseHolder and TransactionHolder
1. Modify the default value of the ShardingSphere-Proxy version in the helm chart
1. Docker container will exit if ShardingSphere-Proxy failed to startup
1. Helm Charts in ShardingSphere repository are transferred to sub-project shardingsphere-on-cloud
1. Scaling: Plenty of refactor for better code reuse
1. DistSQL: Add a new category named RUL
1. Refactor the schedule module and split it into cluster schedule and standalone schedule
1. Remove memory mode, keep standalone mode and cluster mode
1. Refactoring metadata table loading logic and persistence logic
1. Refactoring distributed locks to retain the most concise interface design
1. Refactor : Unify The Creation for Proxy Containers in IT from ENV Modules
1. Refactor : Unify The Configuration for container created by testcontainer

### Change Log

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/20)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.2.0` · 2022-09-08 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
