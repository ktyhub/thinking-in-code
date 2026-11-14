---
title: "shardingsphere 5.4.0"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.4.0"
published: "2023-07-08"
type: "minor"
lang: "en"
summary: "Metadata: Change sharding broadcast tables to global broadcast tables · JDBC: Remove exclamation mark (!) for global rules · DistSQL: Simplify keywords ASSISTED_QUERY, LIKE_QUERY in encrypt DistSQL"
---

# shardingsphere 5.4.0

### API Changes
1. Metadata: Change sharding broadcast tables to global broadcast tables
1. JDBC: Remove exclamation mark (!) for global rules
1. DistSQL: Simplify keywords ASSISTED_QUERY, LIKE_QUERY in encrypt DistSQL
1. DistSQL: Optimize SQL_PARSER rule syntax
1. Encrypt: Adjust encryption yaml API to distinguish between encrypt, like, and assisted query configurations
1. Encrypt: Remove plain column and queryWithCipherColumn configuration in encrypt feature
1. Readwrite-splitting: Refactor read/write splitting api
1. Proxy: Remove property proxy-instance-type configuration
1. Proxy: Remove property proxy-backend-executor-suitable
1. Proxy: Remove property proxy-mysql-default-version
1. Scaling: Refactor commit rollback streaming to drop streaming
1. Sharding: Merge ShardingCacheRule into ShardingRule (Experimental)

### New Features
1. DistSQL: New syntax to manage SQL_FEDERATION rule
1. Proxy: Support Unix Domain Socket

### Enhancements
1. Scaling: CDC supports pure incremental mode
1. Scaling: CDC supports exporting data by transaction
1. Scaling: CDC supports MySQL and PostgreSQL
1. Scaling: CDC supports single table
1. Scaling: CDC supports all openGauss data types
1. Scaling: CDC supports replication reconnection
1. Scaling: Remove DataConsistencyCalculateAlgorithmChooser
1. Scaling: Improve performance of integer unique key table inventory data splitting
1. Scaling: Adjust process configuration default value to reduce resource consumption
1. Scaling: Auto refresh table metadata for migration
1. Scaling: Compatible with openGauss existing replication slot reuse when database not existing
1. Scaling: Show data consistency check status result should be empty when it's not completed
1. Scaling: Enable concurrent CRC32 match on source and target
1. Scaling: Pipeline job compatible with sharding rule audit strategy
1. Metadata: Refactor metadata persistence structure
1. Metadata: Optimize the process of loading single table metadata
1. Metadata: Support MySQL/PostgreSQL/openGauss system tables empty query
1. DistSQL: Add support for transactionalReadQueryStrategy for read/write splitting rule
1. DistSQL: Enhanced algorithm properties check
1. Transaction: Add privilege check
1. Transaction: Remove the TransactionTypeHolder and only create the current transaction manager
1. Parser: Support MySQL LOAD DATA and LOAD XML statement with single table or broadcast table
1. Parser: Improve the parsing support of high-priority SQL statements in the test results of the MySQL test program
1. Parser: Oracle dialect parser now supports Chinese comma
1. Encrypt: Support query of encrypt column in projection subquery when use encrypt feature
1. Kernel: Adds table existence metadata check for INSERT, DELETE, UPDATE and SELECT statements
1. JDBC: Implement batch execution for ShardingSphereStatement
1. Proxy: Frontend supports SSL/TLS
1. Proxy: Support Flush message for PostgreSQL/openGauss Proxy
1. Proxy: Support data type bit, bool for PostgreSQL Proxy

### Bug Fixes
1. Scaling: Fix pipeline job failure status persistence and usage
1. Scaling: Fix CDC DELETE event Record.beforeList is null
1. Scaling: Fix openGauss mppdb decoding plugin single quote issue
1. Scaling: Fix execute engine not closed after job stopping
1. Scaling: Fix stop job before task starting
1. Metadata: Fix case sensitive issue when loading schema meta data with H2 database
1. Metadata: Fix "object not found" exception when config PostgreSQL/openGauss schema name as database name
1. DistSQL: Fix wrong result of check_table_metadata_enabled when execute SHOW DIST VARIABLE
1. Encrypt: Fix SQL rewrite exception when use PostgreSQL/openGauss encrypt like feature
1. Sharding: Support null sharding condition pass to sharding algorithm to allow user control null value route
1. Parser: Support BETWEEN AND expression parsing in MySQL Projection
1. Mask: Fix wrong mask result when config same value of from-x and to-y with KEEP_FROM_X_TO_Y
1. Infra: Fix ClassNotFoundException may occur when missing pgjdbc
1. Proxy: Fix MySQL packet out of order when client sending pipelining requests

### Change Log

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/25)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.4.0` · 2023-07-08 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
