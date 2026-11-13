---
title: "quarkus 3.40.1"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "3.40.1"
published: "2026-09-30"
type: "patch"
lang: "en"
---

# quarkus 3.40.1

### Complete changelog

  * [#48420](https://github.com/quarkusio/quarkus/issues/48420) - Redis with "CacheResult" returns "QUEUED" under high concurrency load
  * [#56834](https://github.com/quarkusio/quarkus/issues/56834) - Missing RdsUtilities during Java 25 native build
  * [#56938](https://github.com/quarkusio/quarkus/pull/56938) - Harden AeshLauncher signal protocol and timeout diagnostics
  * [#56942](https://github.com/quarkusio/quarkus/issues/56942) - RestEasy Reactive logs warning when an endpoint has a `void` return type
  * [#56943](https://github.com/quarkusio/quarkus/pull/56943) - Fix MariaDB GraalVM metadata when AWS SDK is on the classpath, clean up unnecessary related build items
  * [#56944](https://github.com/quarkusio/quarkus/pull/56944) - Extend `void` check when indexing endpoints with RestEasy Reactive
  * [#56946](https://github.com/quarkusio/quarkus/pull/56946) - WebSockets Next: fix stalled Multi stream on decode failure with backpressure
  * [#56958](https://github.com/quarkusio/quarkus/issues/56958) - ForwardedProxyHandler leaks DNS UDP sockets — DnsClient never closed
  * [#56961](https://github.com/quarkusio/quarkus/pull/56961) - Prevent leak of DnsClient instance when resolving proxy hostnames
  * [#56976](https://github.com/quarkusio/quarkus/pull/56976) - Redis Client: fix error handling in blocking transaction API

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `3.40.1` · 2026-09-30 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/3.40.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
