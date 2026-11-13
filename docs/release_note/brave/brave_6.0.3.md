---
title: "brave 6.0.3"
project: "brave"
repo: "openzipkin/brave"
tag: "6.0.3"
published: "2024-04-11"
type: "patch"
lang: "en"
summary: "Brave 6.0.3 including the following minor changes. Thanks very much to @reta and @anuraaga for review support!"
---

# brave 6.0.3

Brave 6.0.3 including the following minor changes. Thanks very much to @reta and @anuraaga for review support!

* fixes bug that allowed setting local or remote service names to the empty string ("")
* fixed thread safety issue when using `Tag.tag`
* ports brave-instrumentation-mongodb to work on the new org.mongodb:mongodb-driver-core v5
  * Note: the floor JRE of this instrumentation is now 1.7, where it formerly was 1.6
* changes license headers to SPDX style, as used in zipkin and zipkin-reporter

**Full Changelog**: https://github.com/openzipkin/brave/compare/6.0.2..6.0.3

---

> **Source** [openzipkin/brave](https://github.com/openzipkin/brave) · `6.0.3` · 2024-04-11 · [upstream release](https://github.com/openzipkin/brave/releases/tag/6.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
