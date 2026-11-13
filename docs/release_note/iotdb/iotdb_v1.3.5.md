---
title: "iotdb v1.3.5"
project: "iotdb"
repo: "apache/iotdb"
tag: "v1.3.5"
published: "2025-09-11"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/apache/iotdb/compare/v1.3.4-1...v1.3.5"
---

# iotdb v1.3.5

## Improvements
- Storage Module: Optimize user password encryption by changing the algorithm to SHA-256
- ... 

## Bugs
- Fixed the array out-of-bounds exception in cross-Region aggregate query with align by device
- Fixed the error in aggregate queries with `order by time + align by device` for single or multiple devices spanning across Regions
- Fixed the "out of memory" error in query with large TEXT objects + align by device + order by time
- Fixed the issue where the last query with where time > X and time < X was not applied to partitioned table fetching, resulting in failure to hit PartitionCache
- Fixed the error in using change_point function + align by device when single device data spans multiple Regions
- Fixed the OOM (Out of Memory) issue caused by the asynchronous submission queue of pipeTransferFile
- Fixed the memory leak issue in pipe password detection
- For the pipe receiver and during Load, change the behavior of'clear schema cache' to 'update last cache'
- Optimize the loading speed of TsFile when there are a large number of measuring points and the mods file contains deletions of a large number of measuring points
- ...

**Full Changelog**: https://github.com/apache/iotdb/compare/v1.3.4-1...v1.3.5

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v1.3.5` · 2025-09-11 · [upstream release](https://github.com/apache/iotdb/releases/tag/v1.3.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
