---
title: "brave 5.18.1"
project: "brave"
repo: "openzipkin/brave"
tag: "5.18.1"
published: "2024-01-10"
type: "patch"
lang: "en"
summary: "Brave 5.18 prepares for Brave 6 by deprecating instrumentation for libraries not released in 1.5-3.5 years including"
---

# brave 5.18.1

Brave 5.18 prepares for Brave 6 by deprecating instrumentation for libraries not released in 1.5-3.5 years including:

* context/rxjava2 - last released Feb 2021
  * replaced by RxJava3, but unlikely this module will be ported as it wasn't used widely.
* instrumentation/dubbo-rpc - (alibaba) last released Dec 2021
  * replaced by Apache Dubbo instrumentation/dubbo
* instrumentation/p6spy - last released July 2020
  * project dormant
* instrumentation/sparkjava - last released July 2022
  * project dormant

A minor change is we changed the artifact we use to test MySQL 8 to com.mysql:mysql-connector-j  (instead of mysql:mysql-connector-java), to ensure we validate against current versions. Thanks @m1ngyuan for the help on this.

**Full Changelog**: https://github.com/openzipkin/brave/compare/5.17.1..5.18.1

---

> **Source** [openzipkin/brave](https://github.com/openzipkin/brave) · `5.18.1` · 2024-01-10 · [upstream release](https://github.com/openzipkin/brave/releases/tag/5.18.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
