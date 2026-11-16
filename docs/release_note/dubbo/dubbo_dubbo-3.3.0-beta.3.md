---
title: "dubbo dubbo-3.3.0-beta.3"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.0-beta.3"
version: "dubbo-3.3.0-beta.3"
published: "2024-05-24"
type: "pre"
lang: "en"
summary: "Fix qos command name · Fix telnet ctrl+c issue #13812 · Fix the triple protocol request failed in the native scenario · Exlude transitive logbak dependency in zookeeper"
---

# dubbo dubbo-3.3.0-beta.3

## What's Changed
* Fix qos command name by @chickenlj in https://github.com/apache/dubbo/pull/13951
* Fix telnet ctrl+c issue #13812 by @hengyoush in https://github.com/apache/dubbo/pull/13921
* Fix the triple protocol request failed in the native scenario by @CrazyHZM in https://github.com/apache/dubbo/pull/13984
* Exlude transitive logbak dependency in zookeeper by @chickenlj in https://github.com/apache/dubbo/pull/13995
* Remove url ref in native scenario by @CrazyHZM in https://github.com/apache/dubbo/pull/14006
* For HTTP/1 unary mode, use Content-Length instead of chunk by @finefuture in https://github.com/apache/dubbo/pull/13979
* Fix dubbo-spring-boot-interceptor dependency by @wcy666103 in https://github.com/apache/dubbo/pull/14059
* Use ReentrantLock for loading Extension Classes by @He-Pin in https://github.com/apache/dubbo/pull/14056
* Fix netty memory leak by @finefuture in https://github.com/apache/dubbo/pull/14127
* Move Rest Protocol to SPI Extensions by @wcy666103 in https://github.com/apache/dubbo/pull/14061
* Triple protocol http1 upgrade support by @walklown in https://github.com/apache/dubbo/pull/14026
* Use ReentrantLock to init ReferenceConfig. by @He-Pin in https://github.com/apache/dubbo/pull/14136
* Fix memory leak of tri protocol by @icodening in https://github.com/apache/dubbo/pull/13973
* Remove zookeeper 3.4 by @Stellar1999 in https://github.com/apache/dubbo/pull/14028
* Clean up netty residual memory when the stream is closed by @finefuture in https://github.com/apache/dubbo/pull/14199
* Add ErrorResponse class into security/serialize.allowlist by @finefuture in https://github.com/apache/dubbo/pull/14222
* Fix triple rest http GET failed by @oxsean in https://github.com/apache/dubbo/pull/14223
* Update hessian-lite to 4.0.0 & Set hessian serialization back by @AlbumenJ in https://github.com/apache/dubbo/pull/13974
* Validator supports automatic switch by @aofall in https://github.com/apache/dubbo/pull/14194
* Triple Rest Cors Support by @Rawven in https://github.com/apache/dubbo/pull/14073
* Add TripleConfig to ProtocolConfig as nest configuration by @finefuture in https://github.com/apache/dubbo/pull/14077
* Optimize the decoding of generic http2 by @finefuture in https://github.com/apache/dubbo/pull/14175
* Remove validation of http headers by @finefuture in https://github.com/apache/dubbo/pull/14231

## New Contributors
* @He-Pin made their first contribution in https://github.com/apache/dubbo/pull/14056
* @walklown made their first contribution in https://github.com/apache/dubbo/pull/14026

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.0-beta.2...dubbo-3.3.0-beta.3

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.0-beta.3` · 2024-05-24 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.0-beta.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
