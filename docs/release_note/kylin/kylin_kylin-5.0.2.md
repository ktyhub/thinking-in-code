---
title: "kylin kylin-5.0.2"
project: "kylin"
repo: "apache/kylin"
tag: "kylin-5.0.2"
published: "2025-04-06"
type: "release"
lang: "en"
summary: "With 6 binding (and 2 non-binding) votes, Apache Kylin 5.0.2 is released. Download links will be updated on the website shortly."
---

# kylin kylin-5.0.2

With 6 binding (and 2 non-binding) votes, Apache Kylin 5.0.2 is released. Download links will be updated on the website shortly.

Change highlights:
New Features:
- [KYLIN-5993] - Internal table For website
- [KYLIN-5996] - Support preloading for internal table cache
- [KYLIN-6025] - Support file merging within partitions for internal tables
Enhancement:
- [KYLIN-5995] - Reorder the gluten jar loader
- [KYLIN-6000] - After Kylin starts, the file `krb5cc_gluten` is generated in the directory at the same level as `Kylin_Home`. The location of the file generation needs to be adjusted.
- [KYLIN-6009] - API performance test shows a decrease compared to Kylin4
- [KYLIN-6020] - Add system-level/project-level configuration to allow direct querying of internal tables.
- [KYLIN-6022] - Support parallel incremental loading for internal tables
- [KYLIN-6024] - Gluten metadata caching supports RocksDB
- [KYLIN-6030] - Inconsistent attribute name style in the tables response message
- [KYLIN-6031] - Add an internal table OpenAPI to support viewing details of a specified internal table
- [KYLIN-6033] - When answering `min` and `max` queries using metadata, route to the Calcite engine to avoid submitting Spark tasks
- [KYLIN-6039] - Performance Optimization for Long SQL Parsing with Dynamic Parameters
- [KYLIN-6051] - Historical Code Cleanup + Refactoring
- [KYLIN-6052] - Kylin5 Internal Tables Support Logical Views
- [KYLIN-6053] - Add OpenAPI for viewing the details of a specified inner table
- [KYLIN-6054] - Optimize shard pruning logic to avoid query failures
- [KYLIN-6060] - Add separate load methods for different storage types of internal tables
- [KYLIN-6061] - Support building index files using Gluten
- [KYLIN-6068] - Spring Session Cleanup to Avoid MySQL Deadlock Warnings
- [KYLIN-6069] - [Internal Table - Incremental Load] Overlapping Time Ranges Prohibited for Loading
- [KYLIN-6071] - Support JDBC Service Discovery
- [KYLIN-6072] - StorageV3 Catalog Refactoring to Avoid Conflicts with Iceberg Catalog
- [KYLIN-6073] - Refresh Button for Non-Time-Partitioned Internal Tables Should Not Be Grayed Out & Backend Returns Error on Refresh
Bugfix:
https://issues.apache.org/jira/projects/KYLIN/versions/12355670

Thanks to everyone who has contributed to this release. Here are the release notes:
https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12355670&styleName=Html&projectId=12316121

The commit:
https://github.com/apache/kylin/tree/kylin-5.0.2 (33cfb69)

Release artifacts are signed with the following key:
https://people.apache.org/keys/committer/liyang.asc

---

> **Source** [apache/kylin](https://github.com/apache/kylin) · `kylin-5.0.2` · 2025-04-06 · [upstream release](https://github.com/apache/kylin/releases/tag/kylin-5.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
