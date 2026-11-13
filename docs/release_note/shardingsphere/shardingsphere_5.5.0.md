---
title: "shardingsphere 5.5.0"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.5.0"
published: "2024-04-30"
type: "minor"
lang: "en"
---

# shardingsphere 5.5.0

### API Change
1. Proxy: Remove the outdated schemaName configuration of the Proxy
2. Kernel: Remove the sqlCommentParseEnabled configuration in SQL Parser Rule to reduce code complexity
3. SQL Parser: Consider removing sqlCommentParseEnabled config in SQLParser rule
4. Federation: Add allQueryUseSQLFederation config for sql federation

### Bug Fix
1. Pipeline: Fix commit/rollback migration job doesn't drop related consistency check job when check job is not completed
5. Pipeline: Fix show consistency check status stop_time display
6. Proxy: Restore original databaseName in connectionSession after unicast
7. Proxy: Fix show tables can be executed without use database
8. Proxy: Fix the incorrect current database after unicast routing
9. Proxy: Fix the problem that show tables can be executed before use database
10. Readwrite-splitting: Fix check exception when using shadow data source
12. Governance: Fix thread blocking problem when create logic database for Etcd register center
13. Governance：Fix register storage units and create feature rules failure when use Standalone mode
14. MetaData: Fix database system schema is not built when create database
15. Metadata: Fix NPE of system schema builder rule
16. SQL Parser: Fix PostgreSQL NPE when parse columnRef
17. SQL Parser: Fix npe cause by parse MySQL select window statement
18. Sharding: Fix routing error when joining tables in uppercase
19. Sharding: Fix drop sharding table exception when table name is uppercase
20. Sharding: Fix generated key with upper case column name
21. Federation: Fix Object 'DUAL' not found exception when execute select 1 from dual with sql federation
22. Transaction: Fix xa auto commit in executeQuery
23. Proxy: Fix multi statements with specified database name

### Enhancement
1. Pipeline: Improve CDC stability and performance
1. Pipeline: MemoryPipelineChannel supports configurable zero queue size for less memory consumption
1. Pipeline: Show dedicated error when mode type is not Cluster
2. Authority: Add isSuper option for user
4. Pipeline: Ignore error message in status DistSQL result on job cancelling
5. DistSQL: Use JSON format to output props in RQL
7. DistSQL: Optimize REFRESH DATABASE METADATA logic
8. DistSQL: SHOW COMPUTE NODES supports JDBC nodes
9. DistSQL: Optimize syntax of REFRESH DATABASE METADATA
10. DistSQL: Optimize the output of SHOW TABLE METADATA
11. Proxy: Add MySQL precompiled parameter verification to avoid turning on rewriteBatchedStatements=true when BenchmarkSQL connects to Proxy, causing an ArrayIndexOutOfBoundsException exception when the Proxy parameterCount exceeds 65535.
12. SQL Parser: Add EOF to throw exception when parse distsql rollback migration statement
13. SQL Parser: Support more plsql statement parse and add plsql parse assert logic
14.  SQL Parser: Support parse index hint
15. SQL Parser: Support mysql intersect combine operation sql parse
16. SQL Parser: Supoort parse chinese white space for oracle
17. SQL Parser: Fix mysql TimeStampDiff function parse
18. SQL Parser: Fix sqlServer unqualified shorthand parsing
19. SQL Parser: Support sqlServer SEARCH unreserved word parsing
20. SQL Parser: Add sql server MEMBER unreserved word
21. Binder: Add ParameterMarkerSegmentBinder logic for Oracle MergeStatementBinder
24. Federation: Support mysql cross join statement for sql federation
25. Transaction: Add advice message in XATransactionCheckPrivilegeFailedException
26. Sharding: Validate duplicate sharding actual data nodes
27. Sharding: Support null condition value routing
28. Proxy: Fix mysql client multi statements option in protocol

### New Feature
1. DistSQL: New syntax for query plugin (SPI) implementation
3. DistSQL: New syntax for managing SQL_TRANSLATOR rule

### Refactor
1. JDBC: Merge shardingsphere-jdbc-core to shardingsphere-jdbc module
6. Proxy: Rename server.yaml to global.yaml, config- to database- and keep compatible with old config
7. Proxy: Rename `config-xxx.yaml` to `database-xxx.yaml`
8. Proxy: Optimize MySQLComStmtPrepareExecutor logic
9. Encrypt: Refactor encrypt interface and add encrypt algorithm metadata
10. Infra: Create new algorithm module in infra and move snowflake, uuid to this module
11. Infra: Modify unmarshal method to return a default object when yaml is empty
12. Infra: Optimize StandardParameterBuilder logic

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.5.0` · 2024-04-30 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
