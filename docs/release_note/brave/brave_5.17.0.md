---
title: "brave 5.17.0"
project: "brave"
repo: "openzipkin/brave"
tag: "5.17.0"
published: "2024-01-01"
type: "minor"
lang: "en"
summary: "Brave 5.17.0 updates all versions to latest and renovates the build so that it can work on JDK21. Thanks in particular to @ShenFeng312 for work updating to Dubbo 3."
---

# brave 5.17.0

Brave 5.17.0 updates all versions to latest and renovates the build so that it can work on JDK21. Thanks in particular to @ShenFeng312 for work updating to Dubbo 3.

It also changes the brave-tests dependency to rely on junit-jupiter instead of junit 4, removing rev-locks and CVE warnings from downstream users. Jupiter was assisted by [OpenRewrite](https://docs.openrewrite.org) automated refactoring by @TeamModerne.

Thanks finally, to those who helped with maintenance, bugs and test backfilling in the last 6 months including @JochemKuijpers @sprimonk @strehle @mauhiz  @1derian @charley-zhang @pen4 @rewolf @mustafau and @jcchavezs

**Full Changelog**: https://github.com/openzipkin/brave/compare/5.16.0..5.17.0

---

> **Source** [openzipkin/brave](https://github.com/openzipkin/brave) · `5.17.0` · 2024-01-01 · [upstream release](https://github.com/openzipkin/brave/releases/tag/5.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
