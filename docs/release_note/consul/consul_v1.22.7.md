---
title: "consul v1.22.7"
project: "consul"
repo: "hashicorp/consul"
tag: "v1.22.7"
version: "v1.22.7"
published: "2026-04-25"
type: "patch"
lang: "en"
summary: "security: update google.golang.org/grpc to fix CVE-2026-33186 [GH-23379] · security: upgrade go.opentelemetry.io/otel to 1.42.0 to remediate CVE-2026-24051 (Path Hijacking / Untrusted Search Paths on macOS). [GH-23387]"
---

# consul v1.22.7

## 1.22.7 (April 21, 2026)

SECURITY:

* security: update google.golang.org/grpc to fix CVE-2026-33186 [[GH-23379](https://github.com/hashicorp/consul/issues/23379)]
* security: upgrade go.opentelemetry.io/otel to 1.42.0 to remediate CVE-2026-24051 (Path Hijacking / Untrusted Search Paths on macOS). [[GH-23387](https://github.com/hashicorp/consul/issues/23387)]
* test-sds-server: bump github.com/hashicorp/consul to v1.22.5 in integration test module to align with the CVE-2026-2808 fixed release line. [[GH-23437](https://github.com/hashicorp/consul/issues/23437)]
* ui: **(Enterprise only)** Backport Rollup update to 2.80.0 for release/1.21.x to address CVE-2026-27606 (SECVULN-38912). 

IMPROVEMENTS:

* acl: Addition of TokenNameFormat field to auth-method and parse the same for token name [[GH-23444](https://github.com/hashicorp/consul/issues/23444)]
* discovery-chain: removes the use of hashstructure_v2 ([github.com/mitchellh/hashstructure/v2] from compiled discovery chain hashing and replaces it with explicit custom hash implementations. [[GH-23393](https://github.com/hashicorp/consul/issues/23393)]
* ui: removed consul docs website related code as it is being maintained in a separate internal repository. [[GH-23398](https://github.com/hashicorp/consul/issues/23398)]

BUG FIXES:

* api-gateway: fix HTTPRoute PathPrefix routing to preserve the original request path when `replacePrefixMatch` is not configured [[GH-23390](https://github.com/hashicorp/consul/issues/23390)]

---

> **Source** [hashicorp/consul](https://github.com/hashicorp/consul) · `v1.22.7` · 2026-04-25 · [upstream release](https://github.com/hashicorp/consul/releases/tag/v1.22.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
