---
title: "dubbo-go v3.1.1"
project: "dubbo-go"
repo: "apache/dubbo-go"
tag: "v3.1.1"
published: "2024-03-05"
type: "patch"
lang: "en"
---

# dubbo-go v3.1.1

## Bugfixes
* Fix metrics path set in config does not work, https://github.com/apache/dubbo-go/pull/2553
* Fix retry time calculation, https://github.com/apache/dubbo-go/issues/2550
* Fix nacos App Metadata not compatible with that in dubbo-java, https://github.com/apache/dubbo-go/pull/2563
* Fix router warn log, https://github.com/apache/dubbo-go/pull/2559
* Change timeout of DubboInvoker from Milliseconds to Nanoseconds, https://github.com/apache/dubbo-go/issues/2546
* Set default application name to `dubbo.io` if it's empty, https://github.com/apache/dubbo-go/pull/2572
* Service discovery always try to resue protocol port to avoid listening on too many ports, https://github.com/apache/dubbo-go/pull/2548

---

> **Source** [apache/dubbo-go](https://github.com/apache/dubbo-go) · `v3.1.1` · 2024-03-05 · [upstream release](https://github.com/apache/dubbo-go/releases/tag/v3.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
