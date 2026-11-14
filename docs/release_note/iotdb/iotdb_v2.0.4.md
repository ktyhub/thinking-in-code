---
title: "iotdb v2.0.4"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.4"
version: "v2.0.4"
published: "2025-07-09"
type: "patch"
lang: "en"
summary: "Data Query: Added user-defined table functions (UDTF) and various built-in table functions to the table model. · Data Query: Added support for ASOF INNER JOIN on time columns in the table model."
---

# iotdb v2.0.4

## Features & Improvements
- Data Query: Added user-defined table functions (UDTF) and various built-in table functions to the table model.
- Data Query: Added support for ASOF INNER JOIN on time columns in the table model.
- Data Query: Added the approximate aggregation function approx_count_distinct to the table model.
- Stream Processing: Added support for asynchronous loading of TsFile through SQL.
- System Management: Added support for disaster recovery load balancing strategy in replica selection during scaling down.
- System Management: Adapted to Windows Server 2025.
- Scripts and Tools: Categorized and organized script tools, and separated Windows-specific scripts.
- ...
  
## Bugs
- Fixed the memory leak issue in the WAL compression buffer.
- Fixed the issue where the async connector gets stuck after running for a long time.
- Fixed the issue where data subscription cannot be terminated after using data export scripts.
- Fixed the issue where pipe restarts frequently due to insertnode and resource management memory problems under memory pressure.
- Fixed the NPE issue triggered during memory statistics estimation on the data synchronization receiver end.
- Fixed the error when configuring ConsumerConstant.NODE_URLS_KEY as a cluster address while using SubscriptionPullConsumer to consume data.
- Fixed the deadlock issue on DN startup caused by concurrent agent pipe metadata fetching and CN metadata pushing.
- ...

## New Contributors
* @q977734161 made their first contribution in https://github.com/apache/iotdb/pull/15322

**Full Changelog**: https://github.com/apache/iotdb/compare/v2.0.3...v2.0.4

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v2.0.4` · 2025-07-09 · [upstream release](https://github.com/apache/iotdb/releases/tag/v2.0.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
