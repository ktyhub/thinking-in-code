---
title: "shenyu v2.7.2"
project: "shenyu"
repo: "apache/shenyu"
tag: "v2.7.2"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "Apache ShenYu 2.7.2 includes the complete changes from v2.7.1 through the approved RC4 candidate."
---

# shenyu v2.7.2

## What's Changed

Apache ShenYu 2.7.2 includes the complete changes from v2.7.1 through the approved RC4 candidate.

### AI and gateway fixes

* Replay one-shot request bodies safely in Request Transformer and preserve downstream execution errors.
* Honor fail-closed sensitive-word inspection when Redis is unavailable.
* Decode JSON text before sensitive-word inspection, including Unicode escapes.
* Scope Token Limiter usage accounting to provider protocol fields.
* Improve AI proxy, MCP, cache, retry, HTTP client, WebSocket, registry, and gateway lifecycle behavior.

### Platform and dependency updates

* Align the dependency baseline with Spring Boot 3.5 and the Spring Cloud 2025.0.3 release train.
* Upgrade and align MCP, Spring AI, Lettuce, Netty, Log4j, Jackson, Tomcat, Bouncy Castle, Fastjson, and related runtime dependencies.
* Add migration guidance for H2 2.x and the selector/rule `logged` field change.

### Release quality and security

* Correct Maven and distribution LICENSE/NOTICE materials and third-party license declarations.
* Include and validate dashboard license materials and JavaScript/CSS resources in source and Admin distributions.
* Add release artifact, source rebuild, dependency, registry, and cross-JDK CI validation.
* Document remaining dependency advisories and required deployment mitigations in the release notes.

## New Contributors

See the full changelog for all contributors between v2.7.1 and v2.7.2.

**Full Changelog**: https://github.com/apache/shenyu/compare/v2.7.1...v2.7.2

---

> **Source** [apache/shenyu](https://github.com/apache/shenyu) · `v2.7.2` · 2026-11-06 · [upstream release](https://github.com/apache/shenyu/releases/tag/v2.7.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
