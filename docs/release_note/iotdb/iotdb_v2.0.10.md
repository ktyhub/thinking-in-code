---
title: "iotdb v2.0.10"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.10"
published: "2026-07-04"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/apache/iotdb/compare/v2.0.8...v2.0.10"
---

# iotdb v2.0.10

## Features & Improvements

- Data Query: Support schema-level and table-level storage space statistics
- Data Query: Add DEBUG SQL capability and optimize the result set of Explain Analyze
- Data Query: Support set operations (UNION/INTERSECT/EXCEPT) and Common Table Expressions (CTE) in the table model
- Data Query: Add IF scalar function, binary functions and APPROX_PERCENTILE aggregate function for the table model
- Data Query: Optimize display fields of the show queries command, add three new columns: client IP that initiates the query, timeout threshold, and total request waiting latency
- Storage Management: Provide C-language driver SDK interfaces, including parameter binding, automatic failover for multi-node switching and other fault-tolerant capabilities
- System Management: Add the capability to manually trigger node load balancing
- System Management: Add progress query capability for the remove datanode operation
- System Management: Introduce the show configuration statement to view cluster configuration information
- System Management: Add statistics for the number of slow write requests
- AI Management: Add two built-in models: Moirai2 and Toto
- AI Management: Enable AINode to manage multiple models under the same model_type
- AI Management: Support loading built-in models for CPU inference with isolated inference processes

## Bugs

- Fix the issue that partition tables get lost when leader switch happens on single-node ConfigNode
- Fix the bug where configurations delivered via set configuration to a single DataNode take effect on all other DataNodes unexpectedly
- Fix the occasional continuous accumulation of reservedSize for timeout-only queries across multiple devices in tree model, which triggers query errors after hitting the max capacity limit
- Fix the parsing error in tree-model-to-table conversion logic when tree paths consist entirely of numeric characters
- Correct abnormal output of show devices root.db.** when root.db itself is a device, making it display root.db properly
- Fix the failure of kill query and query timeout mechanism when the client holds the connection open without fully consuming all result sets
- Fix array index out-of-bounds error caused by null values in attribute fields on the receiver side, which blocks the data synchronization pipeline
- Fix connection pool leakage exceptions in the C# client
- Fix exceptions occurring in the C++ client when write redirection is enabled while dn_rpc_address is configured to 0.0.0.0 on DataNode server
- Fix abnormal repeated broadcasting of deletion markers (Deletions) during the load operation
- Fix the issue that rows with null inserted fields cannot be synchronized to the receiver in real-time data synchronization scenarios
- Fix incorrect idempotency logic for out-of-order TTL-expired data on the synchronization receiver, which leads to repeated synchronization of expired data
- Fix the problem that enable-send-tsfile-limit parameter cannot be manually configured for historical Pipes split from full-data Pipe tasks
- Fix Pipe temporary stoppage triggered by insufficient memory of a single subtask within synchronization jobs
- Fix the issue that modifying username/password of source or sink in write-back-sink model generates error logs and prevents data from being received on the sink side
- Fix permission issue preventing non-root users from stopping the AINode process
- Mitigate memory leaks that tend to occur during long-running continuous inference of models running on CPU


**Full Changelog**: https://github.com/apache/iotdb/compare/v2.0.8...v2.0.10

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v2.0.10` · 2026-07-04 · [upstream release](https://github.com/apache/iotdb/releases/tag/v2.0.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
