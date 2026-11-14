---
title: "iotdb v2.0.11"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.11"
published: "2026-09-11"
type: "patch"
lang: "en"
summary: "This version raises the minimum required JDK version to 17."
---

# iotdb v2.0.11

## Break change
- This version raises the minimum required JDK version to 17.

## Features & Improvements

- Metadata: SHOW TIMESERIES supports sorting by measurement name.
- Query: Support SQL statements that contain only a SELECT clause.
- Region: Support manually repairing partitioned tables using SQL.
- Views: Support logical views.
- Metadata: Add the COUNT DATABASE statement for the table model.
- IoTConsensus: Support multiple directories when IoTConsensus receives snapshots.
- Region: The EXTEND REGION and REMOVE REGION syntaxes support a regionId list, allowing multiple regions to be processed at once.
- Query: EXPLAIN ANALYZE supports JSON output format.
- Mods: Strengthen memory control for queries involving mods. Memory usage must also be controllable for a single large, GB-level mods2 file.
- Data Ingestion: When deleting data, send requests only to the region group to which the current table belongs.
- Protocol Layer: Add memory control at the protocol layer.
- UDF: Add an InternalSession interface to the UDF API.
- Pipe: Modify the real-time data definition logic.
- Functions: Support subsequent-value filling.
- SQL Clauses: GROUP BY and ORDER BY support aliases defined with AS in the SELECT clause.
- Parameter Configuration: Support hot reloading of cluster runtime configurations.
- Communication Encryption: Support mutual authentication for encrypted client communications.
- Query: Support writing query results to a TsFile at a specified path using SQL.
- High Availability: Support high availability for table management, device management, writable-view management, TTL management, database management, and user privileges.
- Client: Support a Node.js client. Only version 2.x is supported.
- Edge Edition: To facilitate use on edge devices with limited memory, introduce an Edge Edition that limits the combined memory usage of the ConfigNode and DataNode to 512 MB. The target workload is approximately 10,000 measurements operating at 1 Hz for read and write workloads. The first version will primarily adjust certain JVM and default configuration parameters; future versions may continue evolving toward a more integrated DataNodeâ€“ConfigNode architecture.

## Bugs
- Query: In the tree and table models, comparisons between integer and floating-point values in query filter conditions behave inconsistently.
- Scaling: During scale-in validation, IoTConsensusQueue under IoTConsensus Used Memory on the monitoring dashboard displays a negative value.
- Load TsFile: When the receiving end has write privileges, LOAD TSFILE fails with No permissions for this operation, please add privilege SYSTEM, and the data is not synchronized.
- SSL: Fix NullPointerException: Cannot invoke "String.contains(java.lang.CharSequence)" because the return value of "java.lang.Throwable.getMessage()" is null.
- SSL: Improve the error message displayed when SSL is enabled in the security package but the CLI connects to the cluster without specifying SSL, making the message more explicit.
- Cluster Management: During validation of Issue 0228, a new problem was encountered: after restarting the cluster, one node remained in the Unknown state and produced no enjoy logs, indicating that the main thread was blocked. However, the node could still perform compaction normally.
- Scaling: During scale-in, the CompressionRatio field for a DataRegion in the Adding state displays a negative value in SHOW REGIONS.
- Region: Preserve two decimal places for the CompressionRatio field in SHOW REGIONS results.
- Scaling: During scale-in, after restarting the cluster, the CompressionRatio field for most DataRegions in SHOW REGIONS is NaN, even though it had a value before the restart.
- ConfigNode: Fix a ConfigNode thread leak. In an IoTV2 3C3D deployment with three replicas, running SQL covering tree-model test cases caused the number of ConfigNodeRPC-Processor threads to reach 3,000. The cluster could no longer be connected to, and the ConfigNode/DataNode reported NullPointerExceptions.
- Query: Fix an error in CAST(1.1 AS FLOAT): java.lang.UnsupportedOperationException: org.apache.tsfile.read.common.block.column.DoubleColumn. The operation is expected to succeed.
- DataNode: PipeTsFileEpochProgressIndexKeeper retains more than 50,000 TsFileResources, causing the DataNode to run out of memory. In an IoTV2 3C3D deployment with two replicas, concurrent reads, writes, and deletes were performed while one DataNode was stopped; after 54 hours of testing, one DataNode ran out of memory and generated a 23-GB OOM dump with ON_HEAP_MEMORY="20G".
- User Management: Concurrent execution of LIST USER, CREATE USER, and DROP USER may result in 301: Ratis request failed Unknown. The ConfigNode log shows Caused by: java.util.ConcurrentModificationException: null.
- IoTConsensus: In a 3C3D deployment with two replicas, concurrent reads, writes, and deletes were performed while a DataNode was stopped. One DataNode process exited and generated a 25-GB dump file.
- Metadata: Prohibit creating devices on template measurements and their subpaths.
- Region: A frame size error, Frame size (69670459) larger than protect max size (67108864), may cause a query to hang. The system should return an appropriate error message instead.

## New Contributors
* @potiuk made their first contribution in https://github.com/apache/iotdb/pull/17823
* @MileaRobertStefan made their first contribution in https://github.com/apache/iotdb/pull/17765

**Full Changelog**: https://github.com/apache/iotdb/compare/v2.0.10...v2.0.11

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v2.0.11` · 2026-09-11 · [upstream release](https://github.com/apache/iotdb/releases/tag/v2.0.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
