---
title: "shardingsphere 5.5.3"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.5.3"
published: "2026-02-28"
type: "patch"
lang: "en"
---

# shardingsphere 5.5.3

## Release 5.5.3

### CVE

1. Fix CVE-2025-55163, CVE-2025-58056, CVE-2025-58057 [#36758](https://github.com/apache/shardingsphere/pull/36758)
1. Fix CVE-2025-48924 [#36085](https://github.com/apache/shardingsphere/pull/36085)
1. Fix CVE-2024-7254 [#36153](https://github.com/apache/shardingsphere/pull/36153)
1. Fix CVE-2015-5237, CVE-2024-7254, CVE-2022-3171, CVE-2021-22569, CVE-2021-22570 [#37888](https://github.com/apache/shardingsphere/pull/37888)
1. Fix CVE-2024-12798, CVE-2024-12801, CVE-2025-11226 [#37936](https://github.com/apache/shardingsphere/pull/37936)
1. Fix CVE-2023-39017 [#38039](https://github.com/apache/shardingsphere/pull/38039)
1. Fix CVE-2024-22399, CVE-2021-32824, CVE-2025-5222, CVE-2016-1000027 [#38040](https://github.com/apache/shardingsphere/pull/38040)
1. Fix CVE-2023-2976, CVE-2024-29131, CVE-2025-27821 [#38042](https://github.com/apache/shardingsphere/pull/38042)

### Metadata Storage Changes

1. Remove `default_strategies` prefix on sharding rule metadata persist - [#34664](https://github.com/apache/shardingsphere/pull/34664)

### API Changes

1. Remove SQL formatting feature - [#35390](https://github.com/apache/shardingsphere/pull/35390)
1. Remove logging rule feature - [#35458](https://github.com/apache/shardingsphere/pull/35458)
1. Remove configuration property key `system-log-level` - [#35493](https://github.com/apache/shardingsphere/pull/35493)
1. Change ShardingSphere SQL log topic from `ShardingSphere-SQL` to `org.apache.shardingsphere.sql` - [#37022](https://github.com/apache/shardingsphere/pull/37022)
1. Add temporary config key `instance-connection-enabled` - [#37694](https://github.com/apache/shardingsphere/pull/37694)
1. Add property config key `proxy-frontend-connection-idle-timeout` - [#38045](https://github.com/apache/shardingsphere/pull/38045)

### New Features

1. Add ShardingSphere BOM - [#36866](https://github.com/apache/shardingsphere/issues/36866)
1. Decouple feature modules as pluggable - [#36086](https://github.com/apache/shardingsphere/pull/36086)
1. Decouple database types as pluggable - [#35346](https://github.com/apache/shardingsphere/pull/35346)
1. Decouple registry center types as pluggable - [#36087](https://github.com/apache/shardingsphere/pull/36087)
1. Proxy: Support Firebird Proxy - [#35937](https://github.com/apache/shardingsphere/pull/35937)
1. JDBC: Support ZooKeeper and ETCD URL format - [#37037](https://github.com/apache/shardingsphere/pull/37037)
1. Proxy: Auto close idle frontend connection for Proxy - [#38045](https://github.com/apache/shardingsphere/pull/38045)

### Enhancements

1. Build: Support compiling and using ShardingSphere under OpenJDK 24 and 25 - [#36688](https://github.com/apache/shardingsphere/issues/36688)
1. Metadata: Support IPv6 for JDBC connection URL - [#35289](https://github.com/apache/shardingsphere/issues/35289)
1. Metadata: Support to load partition tables for PostgreSQL - [#34346](https://github.com/apache/shardingsphere/pull/34346)
1. Metadata: Support for connecting to Presto's Memory Connector - [#34432](https://github.com/apache/shardingsphere/pull/34432)
1. Kernel: Add LocalDate data type support - [#37053](https://github.com/apache/shardingsphere/pull/37053)
1. SQL Parser: Support to parse stored procedure syntax for MySQL - [#36690](https://github.com/apache/shardingsphere/pull/36690)
1. SQL Parser: Support to parse more SQL statements for MySQL - [#36689](https://github.com/apache/shardingsphere/issues/36689)
1. SQL Parser: Support to parse more SQL statements for SQLServer - [#36695](https://github.com/apache/shardingsphere/issues/36695)
1. SQL Parser: Support to parse more SQL statements for Oracle - [#36696](https://github.com/apache/shardingsphere/issues/36696)
1. SQL Parser: Support to parse more SQL statements for Hive - [#36694](https://github.com/apache/shardingsphere/pull/36694) [#37074](https://github.com/apache/shardingsphere/pull/37074)
1. SQL Parser: Support to parse CREATE MATERIALIZED VIEW for Doris - [#31499](https://github.com/apache/shardingsphere/pull/31499)
1. SQL Parser: Support to parse CREATE FUNCTION with $$ symbol for PostgreSQL and openGauss - [#35947](https://github.com/apache/shardingsphere/pull/35947)
1. SQL Parser: Support Oracle SQL parser correctly extract REGEXP_SUBSTR parameters - [#37924](https://github.com/apache/shardingsphere/pull/37924)
1. SQL Parser: Fix escape '\' in SQL causing DialectSQLParsingException - [#37943](https://github.com/apache/shardingsphere/pull/37943)
1. SQL Parser: Fix error parsing \l command SQL statement when front-end protocol is og - [#37953](https://github.com/apache/shardingsphere/pull/37953)
1. SQL Parser: Fix SQLParsingException when using reserved word `order` in ORDER BY clause - [#37958](https://github.com/apache/shardingsphere/pull/37958)
1. SQL Parser: Fix parsing error for SQLServer session `SET QUOTED_IDENTIFIER` and `SET TEXTSIZE` statements - [#38005](https://github.com/apache/shardingsphere/pull/38005)
1. SQL Parser: Support '2'::int statement in PostgreSQL and openGauss - [#37962](https://github.com/apache/shardingsphere/pull/37962)
1. SQL Parser: Support range type constructor functions in PostgreSQL without quotes - [#37994](https://github.com/apache/shardingsphere/pull/37994)
1. SQL Parser: Support parsing MySQL stored procedure syntax- [#38017](https://github.com/apache/shardingsphere/pull/38017)
1. SQL Binder: Support to bind more SQL statements - [#36697](https://github.com/apache/shardingsphere/pull/36697)
1. SQL Binder: Add ALTER TABLE metadata check - [#35877](https://github.com/apache/shardingsphere/pull/35877)
1. SQL Binder: Support Grant statement SQL bind - [#36207](https://github.com/apache/shardingsphere/pull/36207)
1. SQL Router: Add SELECT with UNION ALL routing to multi data sources check - [#35037](https://github.com/apache/shardingsphere/pull/35037)
1. SQL Router: Improve support for executing tableless SQL with single data source - [#35659](https://github.com/apache/shardingsphere/pull/35659)
1. SQL Router: Add `max-union-size-per-datasource` property to batch UNION ALL rewrite per data source and keep parallel execution - [#37405](https://github.com/apache/shardingsphere/pull/37405)
1. DistSQL: Add job sharding nodes info to the query results of `SHOW MIGRATION LIST` - [#35053](https://github.com/apache/shardingsphere/pull/35053)
1. DistSQL: Add DistSQL for query storage units which used in single rule - [#35131](https://github.com/apache/shardingsphere/pull/35131)
1. Proxy: Implement write bool binary data type for PostgreSQL protocol - [#35831](https://github.com/apache/shardingsphere/pull/35831)
1. Proxy: Add authority check on SQL `SHOW CREATE DATABASE` for MySQL - [#36862](https://github.com/apache/shardingsphere/pull/36862)
1. Proxy: MySQLTextResultSetRowPacket and MySQLDateBinaryProtocolValue to support LocalDateTime and LocalTime when value contains scale - [#37881](https://github.com/apache/shardingsphere/pull/37881)
1. Sharding: Using cache to avoid memory overflow from inline expression parsing - [#22196](https://github.com/apache/shardingsphere/issues/22196)
1. Sharding: Add digital suffix check with binding table names - [#35293](https://github.com/apache/shardingsphere/issues/35293)
1. Encrypt: Use EncryptDerivedColumnSuffix to enhance encrypt table subquery rewrite logic - [#34829](https://github.com/apache/shardingsphere/pull/34829)
1. Encrypt: Add quotes to encrypt rewrite derived columns - [#34950](https://github.com/apache/shardingsphere/pull/34950)
1. Encrypt: Support NOT LIKE operator in encryption feature - [#35984](https://github.com/apache/shardingsphere/pull/35984)
1. Readwrite-splitting: Update transactional read query strategy default type as PRIMARY - [#36477](https://github.com/apache/shardingsphere/pull/36477)
1. Pipeline: Improve pipeline job progress incremental latestActiveTimeMillis persistence - [#34655](https://github.com/apache/shardingsphere/pull/34655)
1. Pipeline: Improve heterogeneous databases migration - [#35424](https://github.com/apache/shardingsphere/pull/35424)
1. Pipeline: Improve DATA_MATCH data consistency check to use range streaming query - [#35740](https://github.com/apache/shardingsphere/pull/35740)
1. Pipeline: Add streaming-range-type property and LARGE impl in DATA_MATCH consistency check on MySQL sharding table for better performance - [#35786](https://github.com/apache/shardingsphere/pull/35786)
1. Pipeline: Improve migration consistency check to reflect storage unit maxPoolSize dynamically - [#36507](https://github.com/apache/shardingsphere/pull/36507)
1. Pipeline: Improve "show migration check status" inventory_finished_percentage column inaccurate result - [#36509](https://github.com/apache/shardingsphere/pull/36509)
1. Pipeline: Compatible with COMPLEX_INLINE allow-range-query-with-inline-sharding - [#36524](https://github.com/apache/shardingsphere/pull/36524)
1. Pipeline: Support pipeline job realtime reflection on proxy global properties after restarting - [#36749](https://github.com/apache/shardingsphere/pull/36749)
1. Pipeline: InventoryDumper reuse table inventory calculator for better function and performance - [#36830](https://github.com/apache/shardingsphere/pull/36830)
1. Pipeline: Improve "alter transmission rule": verify STREAM_CHANNEL TYPE NAME - [#36864](https://github.com/apache/shardingsphere/pull/36864)
1. Pipeline: Support multi-columns unique key first integer column splitting - [#36935](https://github.com/apache/shardingsphere/pull/36935)
1. Pipeline: Support unique key first integer column exact splitting - [#37517](https://github.com/apache/shardingsphere/pull/37517)
1. Pipeline: Support unique key first integer column possible null value - [#37522](https://github.com/apache/shardingsphere/pull/37522)
1. Pipeline: Support unique key first integer column exact or estimated splitting based on data sparseness - [#37542](https://github.com/apache/shardingsphere/pull/37542)
1. Pipeline: Support unique key first big integer column splitting - [#37574](https://github.com/apache/shardingsphere/pull/37574)
1. Pipeline: Support unique key first string column exact splitting - [#37543](https://github.com/apache/shardingsphere/pull/37543)
1. Pipeline: Support unique key first binary (e.g. MySQL VARBINARY) column exact splitting - [#38041](https://github.com/apache/shardingsphere/pull/38041)
1. Pipeline: Support multi-columns unique key non-first column nullable - [#37647](https://github.com/apache/shardingsphere/pull/37647)
1. Encrypt: Support handling show create view result decoration in encrypt - [#37299](https://github.com/apache/shardingsphere/pull/37299)
1. JDBC: Enhance ResultSetUtils to support flexible string date/time conversions - [37424](https://github.com/apache/shardingsphere/pull/37424)

### Bug Fixes

1. Kernel: Fix not return generate key when set null in INSERT statement - [35783](https://github.com/apache/shardingsphere/pull/35783)
1. Kernel: Add AllowNotUseDatabaseSQLStatementAttribute to support some mysql dal statement execute without use database - [#37033](https://github.com/apache/shardingsphere/pull/37033)
1. Metadata: Fix the exception to rename schema name when executing ALTER SCHEMA - [#34465](https://github.com/apache/shardingsphere/pull/34465)
1. SQL Parser: Support multiple column names with pivot and unpivot clause for Oracle - [#35586](https://github.com/apache/shardingsphere/pull/35586)
1. SQL Parser: Fix set OnDuplicateKeyColumnsSegment on INSERT for PostgreSQL - [#34425](https://github.com/apache/shardingsphere/pull/34425)
1. SQL Parser: Fix SQL parser error when SQL contains implicit concat expression for MySQL - [#34660](https://github.com/apache/shardingsphere/pull/34660)
1. SQL Parser: Fix SQL parser error when SQL contains subquery with alias for Oracle - [#35239](https://github.com/apache/shardingsphere/pull/35239)
1. SQL Parser: Fix multiple SQLs split error when comma contained - [#31609](https://github.com/apache/shardingsphere/pull/31609)
1. SQL Parser: Fix wrong parameter count parse when function contains placeholder [#38019](https://github.com/apache/shardingsphere/pull/38019)
1. SQL Binder: Fix unable to find the outer table in the NotExpressionBinder - [36135](https://github.com/apache/shardingsphere/pull/36135)
1. SQL Binder: Fix unable to find the outer table in the ExistsSubqueryExpressionBinder - [#36068](https://github.com/apache/shardingsphere/pull/36068)
1. SQL Binder: Fix column bind exception caused by oracle XMLELEMENT function first parameter without quote - [#36963](https://github.com/apache/shardingsphere/pull/36963)
1. SQL Binder: Fix correlated subquery in HAVING cannot reference outer query column - [#37872](https://github.com/apache/shardingsphere/pull/37872)
1. Transaction: Fix conflicting dependencies of BASE transaction integration module - [#35142](https://github.com/apache/shardingsphere/pull/35142)
1. Transaction: Alleviate connection leaks caused by SEATA client throwing exceptions - [#34463](https://github.com/apache/shardingsphere/pull/34463)
1. Transaction: Fix XA data source enlist failure caused connection leaks - [37593](https://github.com/apache/shardingsphere/pull/37593)
1. SQL Federation: Fix Operation not allowed after ResultSet closed exception when use SQL federation - [#35206](https://github.com/apache/shardingsphere/pull/35206)
1. DistSQL: Fix duplicate result when show rules used storage unit with readwrite-splitting rule - [#35129](https://github.com/apache/shardingsphere/pull/35129)
1. DistSQL: Fix missing comma in `ALTER SQL_FEDERATION RULE` - [#35523](https://github.com/apache/shardingsphere/pull/35523)
1. DistSQL: Fix load single table with specific schema - [#37535](https://github.com/apache/shardingsphere/pull/37535)
1. JDBC: Fix some wrong JDBC database metadata retrieve logics - [#34959](https://github.com/apache/shardingsphere/pull/34959)
1. JDBC: Fix getting database name from SQL statement context - [#34960](https://github.com/apache/shardingsphere/pull/34960)
1. JDBC: Support set data source properties type with java.time.Duration - [#35241](https://github.com/apache/shardingsphere/pull/35241)
1. JDBC: Resolve statement manager leaks when creating multiple statements - [#35665](https://github.com/apache/shardingsphere/pull/35665)
1. JDBC: Fix the issue where cached connections in DriverDatabaseConnectionManager were not released in time - [35834](https://github.com/apache/shardingsphere/pull/35834)
1. JDBC: Clear batch generated keys result set when call clearBatch method - [37204](https://github.com/apache/shardingsphere/pull/37204)
1. JDBC: Fix Oracle TIMESTAMP WITH TIME ZONE ORDER BY exception - [#37181](https://github.com/apache/shardingsphere/pull/37181)
1. JDBC: Fix generated keys retrieval for PostgreSQL SINGLE tables - [#38024](https://github.com/apache/shardingsphere/pull/38024)
1. Proxy: Fix `SHOW PROCESSLIST` not wait for all nodes - [#35348](https://github.com/apache/shardingsphere/pull/35348)
1. Proxy: Fix NoSuchElementException exception when execute MySQL SHOW VARIABLES without current database - [#35550](https://github.com/apache/shardingsphere/pull/35550)
1. Proxy: Fix column length for PostgreSQL string binary protocol value - [35840](https://github.com/apache/shardingsphere/pull/35840)
1. Proxy: Fix the connection leak caused by rollback failure in Proxy - [35867](https://github.com/apache/shardingsphere/pull/35867)
1. Proxy: Fix the behavior difference of select built-in function names with spaces -[#36537](https://github.com/apache/shardingsphere/pull/36537)
1. Proxy: Fix MySQL text protocol datetime fractional seconds output - [#37410](https://github.com/apache/shardingsphere/pull/37410)
1. Proxy: Fix IndexOutOfBoundsException for MySQL no-FROM multi-projection SELECT routed to admin path - [#37391](https://github.com/apache/shardingsphere/pull/37391)
1. Proxy: Fix MySQL binary protocol datetime/time fractional seconds precision - [#37294](https://github.com/apache/shardingsphere/pull/37294)
1. Proxy: Fix PostgreSQL boolean text output to return `t`/`f` as per protocol - [#37184](https://github.com/apache/shardingsphere/pull/37184)
1. Proxy: Fix PostgreSQL text protocol bytea output to use hex encoding and avoid truncation - [#37772](https://github.com/apache/shardingsphere/pull/37772)
1. Proxy: Fix MySQL prepared statement sharding failure with `interpolateParams=false` when `MYSQL_TYPE_STRING` is used for character sharding columns - [#37993](https://github.com/apache/shardingsphere/issues/37993)
1. Proxy: Handle `byte[]` pagination parameters in MySQL prepared statements (`LIMIT ?`, `LIMIT ?, ?`) - [#38057](https://github.com/apache/shardingsphere/pull/38057)
1. Proxy: Fix command type error when use openGauss driver to execute statements in transaction - [37749](https://github.com/apache/shardingsphere/pull/37749)
1. Mode: Fix issue of drop schema can not work on standalone mode - [#34470](https://github.com/apache/shardingsphere/pull/34470)
1. Sharding: Fix mod sharding algorithm judgement -[#36386](https://github.com/apache/shardingsphere/pull/36386)
1. Sharding: Fix check inline sharding algorithms in table rules - [#36999](https://github.com/apache/shardingsphere/pull/36999)
1. Sharding: Fix wrong sharding condition merge when sharding column in case-sensitive - [#37389](https://github.com/apache/shardingsphere/pull/37389)
1. Sharding: Fix wrong merge sharding condition logic caused by different type sharding value - [#37528](https://github.com/apache/shardingsphere/pull/37528)
1. Sharding: Prevent SELECT DISTINCT rewrite from losing global de-duplication across shards - [#37857](https://github.com/apache/shardingsphere/pull/37857)
1. Encrypt: Resolve rewrite issue in nested concat function - [#35815](https://github.com/apache/shardingsphere/pull/35815)
1. Pipeline: Recover value of migration incremental importer batch size - [#34670](https://github.com/apache/shardingsphere/pull/34670)
1. Pipeline: Fix InventoryDumper first time dump SQL without ORDER BY on multiple columns unique key table - [#34736](https://github.com/apache/shardingsphere/pull/34736)
1. Pipeline: Fix MySQL JDBC query properties extension when SSL is required on server - [#36581](https://github.com/apache/shardingsphere/pull/36581)
1. Pipeline: Fix migration might skip some records on big table after job restarting - [#36878](https://github.com/apache/shardingsphere/pull/36878)
1. Pipeline: Fix unsigned number column value type inconsistent in inventory and incremental - [#37280](https://github.com/apache/shardingsphere/pull/37280)
1. Pipeline: Fix PostgreSQL migration create table SQL generation failure caused by locale-formatted sequence values - [#28360](https://github.com/apache/shardingsphere/issues/28360)
1. Pipeline: MySQLBinlogClient compatible with async exception - [#37631](https://github.com/apache/shardingsphere/issues/37631)
1. Pipeline: Fix SHOW MIGRATION RULE always display default values when ALTER MIGRATION RULE without STREAM_CHANNEL - [#37737](https://github.com/apache/shardingsphere/issues/37737)
1. DistSQL: Eliminate the concurrency safety risks of DistSQL executors. - [#38097](https://github.com/apache/shardingsphere/pull/38097)

### Change Logs

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/31)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.5.3` · 2026-02-28 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.5.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
