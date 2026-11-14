---
title: "envoy v1.39.4"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.39.4"
published: "2026-10-12"
type: "patch"
lang: "en"
summary: "Bug fixes · aws: fixed a race where the route-level configuration of the AWS"
---

# envoy v1.39.4

**Summary of changes**:

* Bug fixes:
- aws: fixed a race where the route-level configuration of the AWS
request signing and AWS Lambda filters could be destroyed on a worker
thread when an RDS update replaced the route configuration.
- composite: fixed a race where the route-level configuration of the
composite filter could be destroyed on a worker thread when an RDS
update replaced the route configuration.
- dynamic_modules: fixed a bug where the per-route config destroy hook
could run on a worker thread, and the module could be unloaded there,
when an RDS update replaced the route configuration.
- filter_chain: fixed a race where the route-level configuration of the
filter chain filter could be destroyed on a worker thread when an RDS
update replaced the route configuration.
- local_ratelimit: fixed a race where the share provider manager owned
by a local rate limit route-level configuration could be destroyed on a
worker thread.
- sds: fixed a race where a generic secret provider shared with worker
threads could be destroyed on a worker thread.
- stats: fixed a bug introduced in 1.38.0 that exported Prometheus
native histogram bucket indices one bucket too low, causing consumers to
decode observations into lower value ranges and underreport quantiles.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.39.4
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.39.4/
**Release notes**:

https://www.envoyproxy.io/docs/envoy/v1.39.4/version_history/v1.39/v1.39.4
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.39.3...v1.39.4

Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.39.4` · 2026-10-12 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.39.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
