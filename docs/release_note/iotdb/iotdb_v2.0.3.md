---
title: "iotdb v2.0.3"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.3"
version: "v2.0.3"
published: "2025-05-30"
type: "patch"
lang: "en"
summary: "Data Query: Added new aggregate function count_if and scalar functions greatest / least to the table model. · Data Query: Significantly improved the performance of full-table count() queries in the table model."
---

# iotdb v2.0.3

## Features & Improvements

- Data Query: Added new aggregate function count_if and scalar functions greatest / least to the table model.
- Data Query: Significantly improved the performance of full-table count(*) queries in the table model.
- AI Management: Added timestamps to the results returned by AINode.
- System Management: Optimized the performance of the table model's metadata module.
- System Management: Enabled the table model to actively listens and loads TsFile.
- System Management: Added support for TsBlock deserialization in the Python and Go client query interfaces.
- Ecosystem Integration: Expanded the table model's ecosystem to integrate with Spark.
- Scripts and Tools: The import-schema and export-schema scripts now support importing and exporting metadata for the table model.
- ...

## Bugs

- Fixed the issue where a single write request exceeding the total size of the WAL queue caused write queries to hang.
- Fixed the issue where the receiver experienced OOM (Out of Memory) after resuming synchronization following a long period of inactivity.
- Fixed the issue where repeatedly setting TTL for DB and Table led to inserted data being unqueryable and returning an empty list.
- Fixed the issue where a regular user with create+insert permissions on a table encountered exceptions when loading tsfile.
- Fixed the issue where passwords were logged when SessionPool getSession timed out.
- Fixed the issue in the Go client tree model query interface where the absence of a check for the Time column led to an "index out of range [-1]" error when retrieving Time column data.
- Fixed the issue where distinct hits aggregate pushdown optimization and is used with group by date_bin, causing execution exceptions in aggregate queries.
- Fixed the issue of whitespace characters at the beginning and end of port and directory address parameters in the configuration file.
- Fixed the issue where setting the maximum number of concurrent RPC clients less than the number of CPU threads caused DN startup failure.
- Fixed the issue where using a template, after activation, writing to extended columns, and then creating a pipe, caused the series under the device to double.
- Fixed the issue where metadata synchronization, creating a pipe after a template, caused the series to double when using show timeseries.
- Fixed the issue where a regular user with INSERT permissions encountered exceptions when exporting metadata using export-schema.sh.
- ...

**Full Changelog**: https://github.com/apache/iotdb/compare/v2.0.2-1...v2.0.3

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v2.0.3` · 2025-05-30 · [upstream release](https://github.com/apache/iotdb/releases/tag/v2.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
