---
title: "envoy v1.37.10"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.37.10"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Upstream security fixes · eMudhra intermediate CA compromise"
---

# envoy v1.37.10

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    the private keys of several eMudhra intermediate CA certificates were compromised.
    - release: updated the Envoy docker images so they no longer trust the compromised
      eMudhra CAs.
    - mobile: removed the `AAA Certificate Services` and `emSign ECC Root CA - G3` roots
      from the root certificate bundle built into Envoy Mobile. Servers whose certificate
      chains only lead to these roots are no longer trusted by Envoy Mobile when it uses
      its built-in bundle.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.37.10
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.37.10/
**Release notes**:
    https://www.envoyproxy.io/docs/envoy/v1.37.10/version_history/v1.37/v1.37.10
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.37.9...v1.37.10

Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.37.10` · 2026-10-22 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.37.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
