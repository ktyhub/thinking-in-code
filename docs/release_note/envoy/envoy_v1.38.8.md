---
title: "envoy v1.38.8"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.38.8"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Summary of changes:"
---

# envoy v1.38.8

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
    - dns_resolver: updated the `webpki-roots` and `rustls-webpki` crates used by the
      built-in Hickory DNS resolver, so DNS-over-TLS and DNS-over-HTTPS upstreams no longer
      trust the compromised eMudhra intermediate CAs.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.38.8
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.38.8/
**Release notes**:
    https://www.envoyproxy.io/docs/envoy/v1.38.8/version_history/v1.38/v1.38.8
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.38.7...v1.38.8

Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.38.8` · 2026-10-22 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.38.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
