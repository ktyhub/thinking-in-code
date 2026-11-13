---
title: "shardingsphere 5.3.0"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.3.0"
published: "2023-01-08"
type: "minor"
lang: "en"
---

# shardingsphere 5.3.0

### API Changes

1. DistSQL: Refactor syntax API, please refer to the user manual
1. Proxy: Change the configuration style of global rule, remove the exclamation mark
1. Proxy: Allow zero-configuration startup, enable the default account root/root when there is no Authority configuration
1. Proxy: Remove the default logback.xml and use API initialization
1. JDBC: Remove the Spring configuration and use Driver + YAML configuration instead

### Enhancements

1. DistSQL: New syntax REFRESH DATABASE METADATA, refresh logic database metadata
1. Kernel: Support DistSQL REFRESH DATABASE METADATA to load configuration from the governance center and rebuild MetaDataContext
1. Support postgresql/openGauss setting transaction isolation level
1. Scaling: Increase inventory task progress update frequency
1. Scaling: DATA_MATCH consistency check support breakpoint resume
1. Scaling: Support drop consistency check job via DistSQL
1. Scaling: Rename column from sharding_total_count to job_item_count in job list DistSQL response
1. Scaling: Add sharding column in incremental task SQL to avoid broadcast routing
1. Scaling: Sharding column could be updated when generating SQL
1. Scaling: Improve column value reader for DATA_MATCH consistency check
1. DistSQL: Encrypt DistSQL syntax optimization, support like query algorithm
1. DistSQL: Add properties value check when REGISTER STORAGE UNIT
1. DistSQL: Remove useless algorithms at the same time when DROP RULE
1. DistSQL: EXPORT DATABASE CONFIGURATION supports broadcast tables
1. DistSQL: REGISTER STORAGE UNIT supports heterogeneous data sources
1. Encrypt: Support Encrypt LIKE feature
1. Automatically start distributed transactions when executing DML statements across multiple shards
1. Kernel: Support client \d for PostgreSQL and openGauss
1. Kernel: Support select group by, order by statement when column contains null values
1. Kernel: Support parse RETURNING clause of PostgreSQL/openGauss Insert
1. Kernel: SQL HINT performance improvement
1. Kernel: Support mysql case when then statement parse
1. Kernel: Supporting data source level heterogeneous database gateway
1. (Experimental) Sharding: Add sharding cache plugin
1. Proxy: Support more PostgreSQL datetime formats
1. Proxy: Support MySQL COM_RESET_CONNECTION
1. Scaling: Improve MySQLBinlogEventType.valueOf to support unknown event type
1. Kernel: Support case when for federation

### Bug Fix

1. Scaling: Fix barrier node created at job deletion
1. Scaling: Fix part of columns value might be ignored in DATA_MATCH consistency check
1. Scaling: Fix jdbc url parameters are not updated in consistency check
1. Scaling: Fix tables sharding algorithm type INLINE is case-sensitive
1. Scaling: Fix incremental task on MySQL require mysql system database permission
1. Proxy: Fix the NPE when executing select SQL without storage node
1. Proxy: Support DATABASE_PERMITTED permission verification in unicast scenarios
1. Kernel: Fix the wrong value of worker-id in show compute nodes
1. Kernel: Fix route error when the number of readable data sources and weight configurations of the Weight algorithm are not equal
1. Kernel: Fix multiple groups of readwrite-splitting refer to the same load balancer name, and the load balancer fails problem
1. Kernel: Fix can not disable and enable compute node problem
1. JDBC: Fix data source is closed in ShardingSphereDriver cluster mode when startup problem
1. Kernel: Fix wrong rewrite result when part of logical table name of the binding table is consistent with the actual table name, and some are inconsistent
1. Kernel: Fix startup exception when use SpringBoot without configuring rules
1. Encrypt: Fix null pointer exception when Encrypt value is null
1. Kernel: Fix oracle parsing does not support varchar2 specified type
1. Kernel: Fix serial flag judgment error within the transaction
1. Kernel: Fix cursor fetch error caused by wasNull change
1. Kernel: Fix alter transaction rule error when refresh metadata
1. Encrypt: Fix EncryptRule cast to TransparentRule exception that occurs when the call procedure statement is executed in the Encrypt scenario
1. Encrypt: Fix exception which caused by ExpressionProjection in shorthand projection
1. Proxy: Fix PostgreSQL Proxy int2 negative value decoding incorrect
1. Proxy: PostgreSQL/openGauss support describe insert returning clause
1. Proxy: Fix gsql 3.0 may be stuck when connecting Proxy
1. Proxy: Fix parameters are missed when checking SQL in Proxy backend
1. Proxy: Enable MySQL Proxy to encode large packets
1. Kernel: Fix oracle parse comment without whitespace error
1. DistSQL: Fix show create table for encrypt table

### Refactor

1. Scaling: Reverse table name and column name when generating SQL if it's SQL keyword
1. Scaling: Improve increamental task failure handling
1. Kernel: Governance center node adjustment, unified hump to underscore

### Change Log

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/22)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.3.0` · 2023-01-08 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
