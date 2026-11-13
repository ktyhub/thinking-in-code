---
title: "envoy v1.37.9"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.37.9"
published: "2026-10-12"
type: "patch"
lang: "en"
summary: "Summary of changes:"
---

# envoy v1.37.9

**Summary of changes**:

* Upstream security fixes:
- CVE-2026-54786: wasm: bumped `wasmtime` to `24.0.10` to resolve
CVE-2026-54786.

* Bug fixes:
- aws: fixed a race where the route-level configuration of the AWS
request signing and AWS Lambda filters could be destroyed on a worker
thread when an RDS update replaced the route configuration.
- local_ratelimit: fixed a race where the share provider manager owned
by a local rate limit route-level configuration could be destroyed on a
worker thread.
- sds: fixed a race where a generic secret provider shared with worker
threads could be destroyed on a worker thread.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.37.9
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.37.9/
**Release notes**:

https://www.envoyproxy.io/docs/envoy/v1.37.9/version_history/v1.37/v1.37.9
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.37.8...v1.37.9


Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.37.9` · 2026-10-12 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.37.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
