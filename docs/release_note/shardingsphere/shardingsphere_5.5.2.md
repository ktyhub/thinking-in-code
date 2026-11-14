---
title: "shardingsphere 5.5.2"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.5.2"
published: "2025-01-22"
type: "patch"
lang: "en"
summary: "Kernel: Add firebird SQL parser module and database type #33773"
---

# shardingsphere 5.5.2

## Release 5.5.2

### API Changes

### New Features

1. Kernel: Add firebird SQL parser module and database type [#33773](https://github.com/apache/shardingsphere/pull/33773)

### Enhancements

1. Kernel: Add arguments not null check when creating RouteUnit - [#33382](https://github.com/apache/shardingsphere/pull/33382)
1. Kernel: Add index columns not empty judgement for IndexColumnTokenGenerator - [#33384](https://github.com/apache/shardingsphere/pull/33384)
1. Kernel: Add binding to owner table - [#33533](https://github.com/apache/shardingsphere/pull/33533)
1. Kernel: Add binding to owner table - [#33533](https://github.com/apache/shardingsphere/pull/33533)
1. Kernel: Add WithAvailable interface and encrypt with, combine, insert select support checker - [#34175](https://github.com/apache/shardingsphere/pull/34175)
1. Metadata: Add load-table-metadata-batch-size props to concurrent load table metadata - [#34009](https://github.com/apache/shardingsphere/pull/34009)
1. DistSQL: Check inline expression when create sharding table rule with inline sharding algorithm - [#33735](https://github.com/apache/shardingsphere/pull/33735)
1. SQL Parser: Support parsing Doris BITXOR - [#33258](https://github.com/apache/shardingsphere/pull/33258)
1. SQL Parser: Support parsing Doris INSTR - [#33289](https://github.com/apache/shardingsphere/pull/33289)
1. SQL Parser: Support parsing Doris STRRIGHT - [#33393](https://github.com/apache/shardingsphere/pull/33393)
1. SQL Parser: Support parsing MySQL by adding non-reserved keywords in BaseRule.g4 file according to MySQL 8.4 doc - [#33846](https://github.com/apache/shardingsphere/pull/33846)
1. SQL Parser: Support parsing Doris EXTRACT\_URL\_PARAMETER - [#33571](https://github.com/apache/shardingsphere/pull/33571)
1. SQL Parser: Enhance create view, alter view, drop view sql parser - [#34283](https://github.com/apache/shardingsphere/pull/34283)
1. SQL Binder: Add sql bind logic for create table statement - [#34074](https://github.com/apache/shardingsphere/pull/34074)
1. SQL Binder: Support create index statement sql bind - [#34112](https://github.com/apache/shardingsphere/pull/34112)
1. SQL Parser: Support MySQL update with statement parse - [#34126](https://github.com/apache/shardingsphere/pull/34126)
1. SQL Binder: Remove TablesContext#findTableNames method and implement select order by, group by bind logic - [#34123](https://github.com/apache/shardingsphere/pull/34123)
1. SQL Binder: Support select with statement sql bind and add bind test case - [#34141](https://github.com/apache/shardingsphere/pull/34141)
1. SQL Binder: Support sql bind for select with current select projection reference - [#34151](https://github.com/apache/shardingsphere/pull/34151)
1. SQL Binder: Support alter table, drop table sql bind and add test case - [#34154](https://github.com/apache/shardingsphere/pull/34154)
1. SQL Binder: Support rename table statement sql bind and split segment bind to ddl and dml package - [#34158](https://github.com/apache/shardingsphere/pull/34158)
1. SQL Binder: Support copy statement sql bind and add bind test case - [#34159](https://github.com/apache/shardingsphere/pull/34159)
1. SQL Binder: Support truncate table sql bind and add test case - [#34162](https://github.com/apache/shardingsphere/pull/34162)
1. SQL Binder: Support create view, alter view, drop view sql bind logic - [#34167](https://github.com/apache/shardingsphere/pull/34167)
1. SQL Binder: Support load data and load xml sql bind and add test case - [#34177](https://github.com/apache/shardingsphere/pull/34177)
1. SQL Binder: Support optimize table sql bind and add test case - [#34242](https://github.com/apache/shardingsphere/pull/34242)
1. SQL Binder: Support show create table, show columns, show index statement bind - [#34271](https://github.com/apache/shardingsphere/pull/34271)
1. SQL Binder: Support deny user sql bind and add test case - [#34279](https://github.com/apache/shardingsphere/pull/34279)
1. SQL Binder: Support with segment bind check with UniqueCommonTableExpressionException - [#34163](https://github.com/apache/shardingsphere/pull/34163)
1. Storage: Support setting `hive_conf_list`, `hive_var_list` and `sess_var_list` for jdbcURL when connecting to HiveServer2 - [#33749](https://github.com/apache/shardingsphere/pull/33749)
1. Storage: Support connecting to HiveServer2 through database connection pools other than HikariCP - [#33762](https://github.com/apache/shardingsphere/pull/33762)
1. Storage: Partial support for connecting to embedded ClickHouse `chDB` - [#33786](https://github.com/apache/shardingsphere/pull/33786)
1. Transaction: Support savepoint/release savepoint TCL statements in jdbc adapter -[#34173](https://github.com/apache/shardingsphere/pull/34173)
1. Transaction: Bump the minimum Seata Client version for Seata AT integration to 2.2.0 - [#33872](https://github.com/apache/shardingsphere/pull/33872)
1. SQL Federation: Upgrade calcite version to 1.38.0 and update all license info in LICENSE file - [#33279](https://github.com/apache/shardingsphere/pull/33279)
1. JDBC: Add show database name for JDBC when execute SHOW COMPUTE NODES - [#33437](https://github.com/apache/shardingsphere/pull/33437)
1. JDBC: Support ZonedDateTime on ResultSet - [#33660](https://github.com/apache/shardingsphere/issues/33660)
1. Proxy: Add query parameters and check for MySQL kill processId - [#33274](https://github.com/apache/shardingsphere/pull/33274)
1. Proxy: Support table not exist exception for PostgreSQL proxy - [#33885](https://github.com/apache/shardingsphere/pull/33274)
1. Proxy Native: Change the Base Docker Image of ShardingSphere Proxy Native - [#33263](https://github.com/apache/shardingsphere/issues/33263)
1. Proxy Native: Support connecting to HiveServer2 with ZooKeeper Service Discovery enabled in GraalVM Native Image - [#33768](https://github.com/apache/shardingsphere/pull/33768)
1. Proxy Native: Support local transactions of ClickHouse under GraalVM Native Image - [#33801](https://github.com/apache/shardingsphere/pull/33801)
1. Proxy Native: Support Seata AT integration under Proxy Native in GraalVM Native Image - [#33889](https://github.com/apache/shardingsphere/pull/33889)
1. Sharding: Support GroupConcat function for aggregating multiple shards in MySQL, OpenGauss, Doris - [#33808](https://github.com/apache/shardingsphere/pull/33808)
1. Agent: Simplify the use of Agent's Docker Image - [#33356](https://github.com/apache/shardingsphere/pull/33356)
1. Mode: Support modifying Hikari-CP configurations via props in standalone mode [#34185](https://github.com/apache/shardingsphere/pull/34185)
1. Encrypt: Support insert statement rewrite use quote [#34259](https://github.com/apache/shardingsphere/pull/34259)
1. Infra: Support connecting to Firebird via jdbcUrl containing the absolute path to fdb - [#34335](https://github.com/apache/shardingsphere/pull/34335)

### Bug Fixes

1. SQL Parser: Fixes LiteralExpressionSegment cast exception in SQL parser - [#33332](https://github.com/apache/shardingsphere/pull/33332)
1. SQL Parser: Fixes PostgreSQL and openGauss time extract function parse week and quarter error - [#33564](https://github.com/apache/shardingsphere/pull/33564)
1. SQL Parser: Fixes MySQL parse zone unreserved keyword error - [#33720](https://github.com/apache/shardingsphere/pull/33720)
1. SQL Parser: Fixes MySQL range parse error when use table owner - [#33874](https://github.com/apache/shardingsphere/pull/33874)
1. SQL Binder: Fixes table does not exist exception when use HintManager#setDatabaseName to transparent - [#33370](https://github.com/apache/shardingsphere/pull/33370)
1. SQL Binder: Use Multimap and CaseInsensitiveString to replace CaseInsensitiveMap for supporting MySQL multi table join with same table alias - [#33303](https://github.com/apache/shardingsphere/pull/33303)
1. SQL Binder: Fixes the combine statement cannot find the outer table when bind - [#33357](https://github.com/apache/shardingsphere/pull/33357)
1. SQL Binder: Fixes SQL performance issues caused by repeated subquery fetches - [#33361](https://github.com/apache/shardingsphere/pull/33361)
1. SQL Binder: Fixes the expression segment cannot find the outer table when binding - [#34015](https://github.com/apache/shardingsphere/pull/34015)
1. Storage: Fixes cannot connect to HiveServer2 using remote Hive Metastore Server - [#33837](https://github.com/apache/shardingsphere/pull/33837)
1. Proxy: Fixes BatchUpdateException when execute INSERT INTO ON DUPLICATE KEY UPDATE in proxy adapter - [#33796](https://github.com/apache/shardingsphere/pull/33796)
1. Proxy: Fixes "ALL PRIVILEGES ON `DB`.*" is not recognized during SELECT privilege verification for MySQL - [#34037](https://github.com/apache/shardingsphere/pull/34037)
1. Proxy: Fixes MySQL longblob wrong column type returned by proxy protocol - [#34121](https://github.com/apache/shardingsphere/pull/34121)
1. Proxy: Fixes MySQL proxy error if insert SQL contains more parameters not in insert values syntax - [#34287](https://github.com/apache/shardingsphere/pull/34287)
1. Sharding: Remove ShardingRouteAlgorithmException check logic temporarily to support different actual table name configuration - [#33367](https://github.com/apache/shardingsphere/pull/33367)
1. Sharding: Fixes SQL COUNT with GROUP BY to prevent incorrect row returns - [#33380](https://github.com/apache/shardingsphere/pull/33380)
1. Sharding: Fixes avg, sum, min, max function return empty data when no query result return - [#33449](https://github.com/apache/shardingsphere/pull/33449)
1. Encrypt: Fixes merge exception without encrypt rule in database - [#33708](https://github.com/apache/shardingsphere/pull/33708)
1. Encrypt: Use sql bind info in EncryptInsertPredicateColumnTokenGenerator to avoid wrong column table mapping - [#34110](https://github.com/apache/shardingsphere/pull/34110)
1. Mode: Fixes `JDBCRepository` improper handling of H2-database in memory mode - [#33281](https://github.com/apache/shardingsphere/issues/33281)
1. Mode: Fixes duplicate column names added when index changed in DDL - [#33982](https://github.com/apache/shardingsphere/issues/33281)

### Change Logs

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/30)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.5.2` · 2025-01-22 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.5.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
