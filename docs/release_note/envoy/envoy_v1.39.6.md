---
title: "envoy v1.39.6"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.39.6"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "Upstream security fixes · eMudhra intermediate CA compromise"
---

# envoy v1.39.6

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    release: updated the `distroless` docker image base to pick up the patched
    `ca-certificates` package (`20250419+deb13u1`), so it no longer trusts the roots of the
    compromised eMudhra intermediate CAs. The distroless image released in 1.39.5 still
    shipped the unpatched bundle.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.39.6
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.39.6/
**Release notes**:
    https://www.envoyproxy.io/docs/envoy/v1.39.6/version_history/v1.39/v1.39.6
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.39.5...v1.39.6

Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.39.6` · 2026-10-27 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.39.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
