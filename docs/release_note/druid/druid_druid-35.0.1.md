---
title: "druid druid-35.0.1"
project: "druid"
repo: "apache/druid"
tag: "druid-35.0.1"
published: "2025-12-15"
type: "release"
lang: "en"
summary: "Apache Druid 35.0.1 is a patch release that contains important fixes for historical server segment dropping and the protobuf input format extension."
---

# druid druid-35.0.1

Apache Druid 35.0.1 is a patch release that contains important fixes for historical server segment dropping and the protobuf input format extension.

For information about new features in Druid 35, see the [Druid 35 release notes](https://druid.apache.org/docs/35.0.0/release-info/release-notes/).

## Bug fixes

* Fixed an issue where dropping segments didn't remove the memory mapping of segment files, leaving file descriptors of the deleted files open until the process exits [#18782](https://github.com/apache/druid/pull/18782)
* Fixed an issue where the URL path for the protobuf input format wasn't loading [#18770](https://github.com/apache/druid/pull/18770)

## Dependency updates
* Updated lz4-java to 1.8.1 [#18804](https://github.com/apache/druid/pull/18804)

---

> **Source** [apache/druid](https://github.com/apache/druid) · `druid-35.0.1` · 2025-12-15 · [upstream release](https://github.com/apache/druid/releases/tag/druid-35.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
