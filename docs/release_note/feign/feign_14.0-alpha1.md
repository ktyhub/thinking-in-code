---
title: "feign 14.0-alpha1"
project: "feign"
repo: "OpenFeign/feign"
tag: "14.0-alpha1"
published: "2026-11-10"
type: "major"
lang: "en"
summary: "feat!: make feign.Request.Body streaming-ready · refactor: split feign-core into feign-api and feign-core · feat: add streaming support for request bodies in DefaultEncoder"
---

# feign 14.0-alpha1

> [!WARNING]
> **Pre-release.** 14.0 is the API-breaking line: streaming request and response bodies, `feign-core` split into `feign-api` + `feign-core`, Java 11 baseline, and immutable `Request`/`Request.Options`/`MethodMetadata`. Read the [migration guide](https://github.com/OpenFeign/feign/blob/14.0-alpha1/MIGRATION-v14.md) before upgrading. Also includes every fix released in 13.18.

## What's Changed
* feat!: make `feign.Request.Body` streaming-ready by @yvasyliev in https://github.com/OpenFeign/feign/pull/3360
* refactor: split feign-core into feign-api and feign-core by @velo in https://github.com/OpenFeign/feign/pull/3383
* feat: add streaming support for request bodies in `DefaultEncoder` by @yvasyliev in https://github.com/OpenFeign/feign/pull/3396
* feat: raise minimum Java version to 11 and apply OpenRewrite best practices by @velo in https://github.com/OpenFeign/feign/pull/3397
* escape crlf and quotes in streaming multipart part headers by @alhudz in https://github.com/OpenFeign/feign/pull/3418
* Windows prevents folder deletion if log file is still locked. There is by @trumpetinc in https://github.com/OpenFeign/feign/pull/3493
* Stop Http2ClientTest from calling live nghttp2.org by @arimu1 in https://github.com/OpenFeign/feign/pull/3503
* Streaming decoder support2 by @trumpetinc in https://github.com/OpenFeign/feign/pull/3551
* Make shared runtime state immutable for v14 by @velo in https://github.com/OpenFeign/feign/pull/3677

## New Contributors
* @trumpetinc made their first contribution in https://github.com/OpenFeign/feign/pull/3493

**Full Changelog**: https://github.com/OpenFeign/feign/compare/13.18...14.0-alpha1

---

> **Source** [OpenFeign/feign](https://github.com/OpenFeign/feign) · `14.0-alpha1` · 2026-11-10 · [upstream release](https://github.com/OpenFeign/feign/releases/tag/14.0-alpha1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
