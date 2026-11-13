---
title: "envoy v1.39.5"
project: "envoy"
repo: "envoyproxy/envoy"
tag: "v1.39.5"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "Summary of changes:"
---

# envoy v1.39.5

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

* Behavior changes:
  - contrib/istio: peer metadata conversion takes a peer's app name and version from the
    `app` and `version` labels again, falling back to `app.kubernetes.io/name` and
    `app.kubernetes.io/version` only when those are absent or empty. This makes peer-reported
    `source_app`, `destination_app`, `source_version` and `destination_version` match the
    values a workload reports for itself.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/envoy/tags?page=1&name=v1.39.5
**Docs**:
    https://www.envoyproxy.io/docs/envoy/v1.39.5/
**Release notes**:
    https://www.envoyproxy.io/docs/envoy/v1.39.5/version_history/v1.39/v1.39.5
**Full changelog**:
    https://github.com/envoyproxy/envoy/compare/v1.39.4...v1.39.5

Signed-off-by: Jonh Wendell <jwendell@redhat.com>
Signed-off-by: Ryan Northey <ryan@synca.io>

---

> **Source** [envoyproxy/envoy](https://github.com/envoyproxy/envoy) · `v1.39.5` · 2026-10-23 · [upstream release](https://github.com/envoyproxy/envoy/releases/tag/v1.39.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
