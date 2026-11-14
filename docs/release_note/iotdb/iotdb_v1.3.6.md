---
title: "iotdb v1.3.6"
project: "iotdb"
repo: "apache/iotdb"
tag: "v1.3.6"
published: "2026-01-07"
type: "patch"
lang: "en"
---

# iotdb v1.3.6

## Features & Improvements
- Data Query: Optimized query performance for multiple scenarios, including the multi-series Last query.
- Data Query: Added the FastLastQuery interface to the Java SDK, supporting more efficient Last query operations.
- Data Query: Adjusted the tree-model fetchSchema to return data in segmented streaming mode, improving response speed in large-data-volume scenarios.
- Storage Management: Optimized memory management to avoid memory leak risks and ensure long-term stable system operation.
- Storage Management: Optimized the file compaction mechanism to enhance compaction efficiency and reduce system storage resource consumption.
- Data Synchronization: Optimized Pipe SQL parameter configurations to support specifying asynchronous loading methods.
- Data Synchronization: Added a syntactic sugar feature that automatically splits full-volume Pipe creation SQL into real-time synchronization and historical synchronization.
- System Management: Added a global configuration item for data type compression methods, supporting on-demand adjustment of storage compression strategies.
- Others: Fixed security vulnerabilities CVE-2025-12183, CVE-2025-66566 and CVE-2025-11226.
- ...

## Bugs
- Fixed the issue where selecting discontinuous sequence files for the settle task from the sequence zone under device-level TTL would trigger an overlap error during execution.
- Fixed the issue where running the pattern_match custom function in tree-model SQL (3C3D deployment) would throw an error indicating "tsDataType" is null.
- Fixed the issue where TTL would continuously write data into the modification cache in fast compaction mode, resulting in slow compaction speed.
- Fixed the stack overflow issue that occurred when performing value filter queries with a large number of devices without adding the align by device clause.
- Fixed the issue where loading TsFiles with empty value chunks across time partitions would generate TsFiles with misaligned chunks.
- Fixed the incorrect processing logic of TransformOperator for empty TsBlocks.
- Fixed the issue where the number of server connections would keep increasing when using a user without MAINTAIN permission  in a Session.
- Fixed the issue where Load would ignore mods import under certain special circumstances (e.g., mismatched aligned types or inconsistent table schemas).
- Fixed the issue where data that had been deleted would be resynchronized to the receiver if mod files existed when Pipe pattern was configured.
- Fixed the issue where info logs related to TTL checks would still be printed during compaction scheduling even when TTL was not configured.
- ...

**Full Changelog**: https://github.com/apache/iotdb/compare/v1.3.5...v1.3.6

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v1.3.6` · 2026-01-07 · [upstream release](https://github.com/apache/iotdb/releases/tag/v1.3.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
