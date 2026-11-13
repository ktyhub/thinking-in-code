---
title: "iotdb v2.0.8"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.8"
published: "2026-04-13"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/apache/iotdb/compare/v2.0.7...v2.0.8"
---

# iotdb v2.0.8

## Features & Improvements
- Data Query: Added list display for available DataNode nodes
- Data Query: Added a system table for statistics on query latency in the table model
- Data Query: Python SessionDataset supported converting TsBlock to DataFrame and returning DataFrame in batches
- Storage Management: Supported custom column names for the TIME column
- Storage Management: Supported viewing the complete definition statement of created tables/views via SQL
- System Management: Added a system table for DataNode node connection status in the table model
- Stream Processing: Pipe synchronization supported excluding specified devices / measurement points
- Stream Processing: Supported specifying multiple exact paths in the path parameter of tree model data synchronization pipe statements
- Stream Processing: Supported comma-separated mixed use of source.pattern and source.path parameters when filtering paths in Pipe
- AI Management: Built-in Chronos-2 model supports prediction functions.
- AI Management: Built-in Timer-XL and Sundial models supported concurrent inference
- Others: Fixed security vulnerabilities CVE-2025-12183, CVE-2025-66566, and CVE-2025-11226
- ...


## Bugs
- Fixed the issue where the result set returned by the query was empty after last cache hit.
- Fixed the issue where reverse query with time filter conditions might miss partial data when a sequence in the memtable contained more than 200,000 points in TVList.
- Fixed the issue that aligned time series query timed out because canSkip failed to filter out firstTimeseriesMetadata.
- Fixed the issue where the result returned by LAST query with alias should be adjusted to the measurement alias.
- Fixed the issue where time filter conditions incorrectly filtered valid data in latest point query under specific cases.
- Fixed the issue that deletion would fail if performed immediately after a failed write operation.
- Fixed the potential NPE issue when using the active load function to load TsFiles that use non-default time columns.
- ...


## New Contributors
* @Adam-chengzhuo made their first contribution in https://github.com/apache/iotdb/pull/16913
* @ZhaoShuai-Buyi made their first contribution in https://github.com/apache/iotdb/pull/17013

**Full Changelog**: https://github.com/apache/iotdb/compare/v2.0.7...v2.0.8

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v2.0.8` · 2026-04-13 · [upstream release](https://github.com/apache/iotdb/releases/tag/v2.0.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
