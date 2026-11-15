---
title: "consul v2.0.1"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.0.1"
version: "v2.0.1"
published: "2026-06-19"
type: "patch"
lang: "en"
summary: "Upgrade go version to 1.26.4 to address GO-2026-5039, GO-2026-5038,GO-2026-5037 [GH-23637] · connect: Upgrade envoy version to 1.37.4, 1.36.8, 1.35.12; Add new version of Envoy 1.38.2 and remove 1.34.14 [GH-23664]"
---

# consul v2.0.1

## 2.0.1 (June 18, 2026)

SECURITY:

* Upgrade go version to 1.26.4 to address [GO-2026-5039](https://pkg.go.dev/vuln/GO-2026-5039), [GO-2026-5038](https://pkg.go.dev/vuln/GO-2026-5038),[GO-2026-5037](https://pkg.go.dev/vuln/GO-2026-5037) [[GH-23637](https://github.com/hashicorp/consul/issues/23637)]
* connect: Upgrade envoy version to 1.37.4, 1.36.8, 1.35.12; Add new version of Envoy 1.38.2 and remove 1.34.14 [[GH-23664](https://github.com/hashicorp/consul/issues/23664)]

IMPROVEMENTS:

* dockerfile: layer reduction by merging RUN commands and minor changes following best practices. [[GH-23650](https://github.com/hashicorp/consul/issues/23650)]
* product-telemetry: product usage reporting now preserves export cadence across restarts and leader re-elections by resuming from the last successful export time, preventing delays
* server: Auth method TokenNameFormat field accepts OIDC and JWT claim mapping values [[GH-23616](https://github.com/hashicorp/consul/issues/23616)]
* ui: Removed block-slot addon dependency [[GH-23481](https://github.com/hashicorp/consul/issues/23481)]

BUG FIXES:

* connect: Strip the `x-forwarded-client-cert` header from inbound HTTP requests before forwarding them to local service instances. [[GH-23544](https://github.com/hashicorp/consul/issues/23544)]
* server: Fixed a bug where renaming a server (or wiping and rejoining it with the same IP and Raft node ID) could cause an out-of-order serf event to evict the live leader from the internal server lookup, resulting in `Raft leader not found in server lookup mapping` (HTTP 500) errors on follower RPCs until the next member event resynced the mapping. [[GH-23533](https://github.com/hashicorp/consul/issues/23533)]

---

> **Source** [hashicorp/consul](https://github.com/hashicorp/consul) · `v2.0.1` · 2026-06-19 · [upstream release](https://github.com/hashicorp/consul/releases/tag/v2.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
