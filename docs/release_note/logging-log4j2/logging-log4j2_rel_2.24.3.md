---
title: "logging-log4j2 rel/2.24.3"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.24.3"
published: "2024-12-13"
type: "release"
lang: "en"
summary: "This release fixes two minor bugs."
---

# logging-log4j2 rel/2.24.3

## Release Notes

This release fixes two minor bugs.

* Fix `ConcurrentModificationException`, if multiple threads modify loggers concurrently.
  This bug affects users that modify logger levels programmatically. (#3234)
* Protects `PropertiesUtil` against property sources that call `PropertiesUtil` recursively.
  In some cases such a property source can even cause deadlocks. (#3252)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.24.3` · 2024-12-13 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.24.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
