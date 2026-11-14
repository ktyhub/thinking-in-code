---
title: "shardingsphere 5.4.1"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.4.1"
published: "2023-10-21"
type: "patch"
lang: "en"
summary: "Proxy: Supports dbcp and c3p0 connection pools · Metadata: Standalone mode adapts to metadata new structure · Governance: Governance supports register instance level data source"
---

# shardingsphere 5.4.1

### New Features
1. Proxy: Supports dbcp and c3p0 connection pools
1. Metadata: Standalone mode adapts to metadata new structure
1. Governance: Governance supports register instance level data source

### Enhancements
1. Mode: Improve Standalone mode JDBC type impl reset data on initialization
1. Scaling: Isolate ShardingSphereDataSource Standalone repository in pipeline
1. Scaling: Disable system-schema-metadata-enabled in pipeline
1. JDBC: Move jdbc core META-INF/services/java.sql.Driver from test to main
1. Scaling: Add algorithm columns in SHOW MIGRATION CHECK ALGORITHMS DistSQL result
1. Scaling: Add type_aliaes column in SHOW MIGRATION CHECK ALGORITHMS DistSQL result
1. Encrypt: Add duplicate name check for derived columns and logical columns
1. Encrypt: Deny DDL for cipher columns in Proxy
1. Encrypt: Add the default type for derived columns to varchar(4000)

### Bug Fixes
1. Scaling: Fix get inventory position not correctly on breakpoint resuming when table names are similar
1. Scaling: Fix CDC importer not start on breakpoint resuming when first inventory task is finished
1. Single Table: Fix not switched active version when CREATE/DROP table modifies the Single rule configuration
1. JDBC: Fix JDBC memory leak with MySQL in the 5.4.0 version

### Change Log

1. [MILESTONE](https://github.com/apache/shardingsphere/milestone/27)

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.4.1` · 2023-10-21 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
