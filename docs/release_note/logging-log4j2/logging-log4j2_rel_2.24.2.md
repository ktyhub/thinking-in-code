---
title: "logging-log4j2 rel/2.24.2"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.24.2"
published: "2024-11-21"
type: "release"
lang: "en"
summary: "This release fixes a critical bug in Log4j API initialization code, which can cause LogManager.getLogger() to return null under certain conditions. See #3143 for details."
---

# logging-log4j2 rel/2.24.2

## Release Notes

This release fixes a critical bug in Log4j API initialization code, which can cause `LogManager.getLogger()` to return `null` under certain conditions. See #3143 for details.

### Fixed

* Fix key removal issues in Thread Context (#3048)
* Use hard references to ``Logger``s in `LoggerRegistry`. (#3143)
* Fix `ArrayIndexOutOfBoundsException` in JSON Template Layout truncated exception resolver (#3216)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.24.2` · 2024-11-21 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.24.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
