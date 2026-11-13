---
title: "iotdb v2.0.6"
project: "iotdb"
repo: "apache/iotdb"
tag: "v2.0.6"
published: "2026-01-20"
type: "patch"
lang: "en"
---

# iotdb v2.0.6

## Features & Improvements
- Data Query: Supports table model query and write-back functions.
- Data Query: The MATCH RECOGNIZE feature for table models supports aggregate functions to capture continuous data for analysis and calculation.
- Data Query: Added built-in scalar functions bit manipulation functions for table models.
- Data Query: Added pushdown-enabled EXTRACT time function for table models.
- Others: Fixed security vulnerabilities CVE-2025-12183, CVE-2025-66566 and CVE-2025-11226.
- ...
## Bugs
- Fixed the issue where executing queries with CASE WHEN throws an internal server error.
- Fixed the issue where creating a view succeeds but querying the view fails when the tree model database name is the same as the device name in tree-to-table scenarios.
- Fixed the issue where the automatic database creation function fails subsequently if a database is deleted after successful table model data synchronization, and the database is not restarted.
- Fixed the issue where modifying the password of a user that failed to be created throws an internal server error.
- Fixed the issue where an error is thrown when using the IF PERMITTED clause to modify sequence encoding and compression settings.
- Fixed the issue where querying BLOB data types via the tree model RESTAPI interface /rest/v2/query returns garbled results.
- Fixed the issue where incorrect exception information is displayed when checking pipe status after creating a pipe in a table model that only contains tree-to-table views.
- Fixed the issue where the number of server connections keeps increasing when using a user without MAINTAIN permission (non-root user in table models) in a Session.
- ...

**Full Changelog**: https://github.com/apache/iotdb/compare/v2.0.5...v2.0.6

---

> **Source** [apache/iotdb](https://github.com/apache/iotdb) · `v2.0.6` · 2026-01-20 · [upstream release](https://github.com/apache/iotdb/releases/tag/v2.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
