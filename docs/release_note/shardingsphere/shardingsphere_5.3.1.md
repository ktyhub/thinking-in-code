---
title: "shardingsphere 5.3.1"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.3.1"
published: "2023-01-10"
type: "patch"
lang: "en"
---

# shardingsphere 5.3.1

### New Features

1. Kernel: Add new data masking, dynamic data masking features, and built-in data masking algorithms
1. Scaling: Basic support of CDC feature
1. DistSQL: Add masking rule related DistSQL


### Enhancements

1. Kernel: Cluster mode avoids secondary refresh of metadata 
1. Kernel: SHOW COMPUTE NODES supports displaying the version number of each instance
1. Kernel: System database add cluster information table
1. Kernel: Standalone mode persistent metadata supports MySQL
1. Kernel: SQL HINT performance improvement
1. Kernel: Restore routing to the specified database with Hint
1. Encrypt: Supports underscore wildcards for Encrypt CharDigestLikeEncryptAlgorithm
1. Kernel: Support SQL federation SELECT NULLS LAST/FIRST statement
1. Kernel: Refactor encrypt integration test logic and add more test cases
1. Kernel: Add salt props for MD5MaskAlgorithm, MD5EncryptAlgorithm
1. Kernel: Refactor ShardingConditionEngine to support SPI configuration
1. DistSQL: Support defining column level `QUERY_WITH_CIPHER_COLUMN` when `CREATE ENCRYPT RULE`
1. DistSQL: Add algorithm type check for `CREATE SHARDING TABLE RULE`


### Bug Fixes

1. Fix the problem of ZooKeeper cluster error reporting when ShardingSphere connects to Kubernetes
1. Kernel:  Fix use Consul in cluster mode start up failure
1. DB Discovery: Close heartbeat job when drop discovery rule
1. Kernel: Fix wrong decide result when execute same sharding condition subquery with SQL federation
1. Kernel:  Fix priority problem of UNION, INTERSECT, EXCEPT set operation in SQL Federation for PostgreSQL and openGuass dialect
1. Kernel:  Fix create view index out of range exception when view contains set operator
1. Kernel: Add XA resource exceeds length check
1. Kernel:  Fix transaction support for spring requires_new
1. Encrypt:  Fix AESEncryptAlgorithm decrypt exception when config char type with PostgreSQL and openGauss
1. Encrypt: Fix abnormal expansion result for shorthand when encrypt subquery contains an alias
1. Kernel:  Fix unsigned flag of column metadata was not serialized
1. Kernel: Fix PostgreSQL / openGauss select fetch parsing issue to support federation execution engine
1. Proxy: Fix packet sequence ID may be incorrect if error occurred in MySQL Proxy
1. Proxy: Fix error occur in Proxy when using PostgreSQL composite type
1. Proxy: Set proper column definition flag for MySQL COM_STMT_PREPARE
1. Proxy: When querying PG metadata through Proxy and the result set is empty, the labels are lost

### Change Log

1. [MILESTONE]( https://github.com/apache/shardingsphere/milestone/23 )

---

> **Source** [apache/shardingsphere](https://github.com/apache/shardingsphere) · `5.3.1` · 2023-01-10 · [upstream release](https://github.com/apache/shardingsphere/releases/tag/5.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
