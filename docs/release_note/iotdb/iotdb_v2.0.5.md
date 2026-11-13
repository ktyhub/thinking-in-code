---
title: "iotdb v2.0.5"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.5"
published: "2025-08-21"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/apache/iotdb/compare/v2.0.4...v2.0.5"
---

# iotdb v2.0.5

## Features & Improvements
- Data Query: Support manual creation of tree-to-table views
- Data Query: Table model adds window functions
- Data Query: Table model adds the aggregate function approx_most_frequent
- Data Query: Table model JOIN function expansion, supporting LEFT & RIGHT JOIN, ASOF LEFT JOIN
- Data Query: Table model supports row pattern recognition, enabling capture of continuous data for analysis and calculation
- Storage Management: Table model adds multiple system tables, such as: VIEWS (table view information), MODELS (model information), etc.
- AI Management: AINode adds two built-in models: Timer-XL and Timer-Sundial
- AI Management: AINode supports inference functions for tree models and table models
- ...

## Bugs
- Fixed the issue where the where time > X and time < X in last query was not applied to partitioned table fetching, failing to hit PartitionCache
- Fixed the error in aggregate query with order by time + align by device for single device across regions
- Fixed the error in aggregate query with order by time + align by device for multiple devices across regions
- Data synchronization batching supports sink.batch.max-delay-ms, providing more fine-grained cache time control
- Fixed the potential NPE issue when the tablet contains null values during data synchronization with sink format=tsfile
- Fixed the incorrect processing result of pipe processor when writing tablets with null values with duplicate timestamps
- Fixed the issue of tree model load updating table model schema cache
- Fixed the issue where disruptor queue close could not be completed, which might cause the DN stop script to get stuck
- Fixed multiple issues of data synchronization in normal scenarios, restart scenarios, and deletion scenarios
- Fixed the time formatting issue when exporting table model to csv
- ...

## New Contributors
* @jtmer made their first contribution in https://github.com/apache/iotdb/pull/15468
* @Young-Leo made their first contribution in https://github.com/apache/iotdb/pull/14423

**Full Changelog**: https://github.com/apache/iotdb/compare/v2.0.4...v2.0.5

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v2.0.5` · 2025-08-21 · [upstream release](https://github.com/apache/iotdb/releases/tag/v2.0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
