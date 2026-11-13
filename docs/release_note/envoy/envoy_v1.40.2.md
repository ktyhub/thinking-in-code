---
title: "envoy v1.40.2"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.40.2"
published: "2026-10-27"
type: "patch"
lang: "en"
summary: "Summary of changes:"
---

# envoy v1.40.2

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    release: updated the `distroless` docker image base to pick up the patched
    `ca-certificates` package (`20250419+deb13u1`), so it no longer trusts the roots of the
    compromised eMudhra intermediate CAs. The distroless image released in 1.40.1 still
    shipped the unpatched bundle.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.40.2
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.40.2/
**Release notes**:
    https://www.envoyproxy.io/docs/envoy/v1.40.2/version_history/v1.40/v1.40.2
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.40.1...v1.40.2

Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.40.2` · 2026-10-27 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.40.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
