---
title: "consul v2.0.2"
project: "consul"
repo: "hashicorp/consul"
tag: "v2.0.2"
version: "v2.0.2"
published: "2026-07-08"
type: "patch"
lang: "en"
summary: "Upgrade alpine base image version to 3.24 to address [CVE-2026-41989], [ALPINE-CVE-2026-2100]. [GH-23711] · dependency: Upgrade Serf and Memberlist to use the latest versions. [GH-23704]"
---

# consul v2.0.2

## 2.0.2 (July 8, 2026)
SECURITY:

* Upgrade alpine base image version to 3.24 to address [CVE-2026-41989], [ALPINE-CVE-2026-2100]. [[GH-23711](https://github.com/hashicorp/consul/issues/23711)]
* dependency: Upgrade Serf and Memberlist to use the latest versions. [[GH-23704](https://github.com/hashicorp/consul/issues/23704)]
* xds: Return errors when injecting the L4 intention (RBAC) filter or the mTLS transport socket onto an inbound public listener, so the listener is not served without intention enforcement or mTLS. [[GH-23686](https://github.com/hashicorp/consul/issues/23686)]

FEATURES:

* config-entry(api-gateway): (Enterprise only) Add ExtAuthzFilter to HTTPRoute Filters and gateway-wide ExtAuthz toggle to the api-gateway config entry [[GH-23703](https://github.com/hashicorp/consul/issues/23703)]
* config-entry: (Enterprise only) Addition of External Processor (ext_proc) Envoy Extension support to api-gateway and connect-proxy [[GH-23705](https://github.com/hashicorp/consul/issues/23705)]

IMPROVEMENTS:

* ci: upgrade GitHub Actions that used the deprecated Node 20 runtime to Node 24, and restore GOTOOLCHAIN=auto after setup-go so backward-compatibility and integration test lanes resolve the correct Go toolchain. [[GH-23687](https://github.com/hashicorp/consul/issues/23687)]
* connect: update support for nomad and vault version to v2.0.3 [[GH-23624](https://github.com/hashicorp/consul/issues/23624)]
* deps: Migrate `armon/go-metrics` to `hashicorp/go-metrics` and update Go dependencies across all modules [[GH-23635](https://github.com/hashicorp/consul/issues/23635)]

BUG FIXES:

* xds: only emit the client cert SDS block when both CertFile and KeyFile are set. [[GH-23679](https://github.com/hashicorp/consul/issues/23679)]

KNOWN ISSUES:

* consul-k8s: In setups using consul OSS version, consul-k8s-connect-injector fails to come up because of a missing CRD RouteExtProc. A new version(2.0.2-oss) of consul helm chart is released to resolve this issue. Use the Chart version '2.0.2-oss' for OSS distribution of consul of this release v2.0.2.
* consul (enterprise only): Since (2.0.0) API-GW understands traffic routing via discovery chain configs(resolvers, routers, splitters) attached to services in its route-match destinations. API gateways understands listeners on a hostname basis and compiles overall traffic routing rules for services pointed in the routes for those listeners. A bug surfaced when the destination service has defined failovers/redirects/subsets with targets in different namespace/partition in its resolvers config. The reconciliation of overall discovery chain for all routable targets of api gateway post this feature encounters issues due to missing synthetic defaults for protocols in the said use case and causes xds rendering issues.

---

> **Source** [hashicorp/consul](https://github.com/hashicorp/consul) · `v2.0.2` · 2026-07-08 · [upstream release](https://github.com/hashicorp/consul/releases/tag/v2.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
