---
title: "envoy v1.38.9"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.38.9"
published: "2026-10-26"
type: "patch"
lang: "en"
summary: "Summary of changes:"
---

# envoy v1.38.9

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    release: the `distroless` docker image now uses the patched `ca-certificates` package
    (`20250419~deb12u2`) from Debian bookworm, so it no longer trusts the roots of the
    compromised eMudhra intermediate CAs. The distroless image released in 1.38.8 still
    shipped the unpatched bundle.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.38.9
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.38.9/
**Release notes**:
    https://www.envoyproxy.io/docs/envoy/v1.38.9/version_history/v1.38/v1.38.9
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.38.8...v1.38.9

Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.38.9` · 2026-10-26 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.38.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
