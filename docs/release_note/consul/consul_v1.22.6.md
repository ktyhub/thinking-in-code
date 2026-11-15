---
title: "consul v1.22.6"
project: "consul"
repo: "hashicorp/consul"
tag: "v1.22.6"
version: "v1.22.6"
published: "2026-03-26"
type: "patch"
lang: "en"
summary: "security: upgrade envoy version to 1.35.9 and 1.34.13 [GH-23372] · security: update google.golang.org/grpc to fix CVE-2026-33186 [GH-23379] · security: upgrade go version to 1.25.8 [GH-23322]"
---

# consul v1.22.6

## 1.22.6 (March 23, 2026)

SECURITY:

* security: upgrade envoy version to 1.35.9 and 1.34.13 [[GH-23372](https://github.com/hashicorp/consul/pull/23372)]
* security: update google.golang.org/grpc to fix CVE-2026-33186 [[GH-23379](https://github.com/hashicorp/consul/pull/23379)]
* security: upgrade go version to 1.25.8 [[GH-23322](https://github.com/hashicorp/consul/pull/23322)]
* security: bump golang.org/x/* dependencies to align with consul-enterprise and address security vulnerabilities. [[GH-23322](https://github.com/hashicorp/consul/pull/23322)]

IMPROVEMENTS:

* api-gateway: Add support to disable traffic with weight 0 in services for HTTPRoute backends, allowing explicit zero-weight backends to be excluded from traffic. [[GH-23216](https://github.com/hashicorp/consul/pull/23216)]
* ui: Fixed Consul UI to work in non-secure environments by enabling Ember Data's UUID polyfill for crypto.randomUUID. [[GH-23341](https://github.com/hashicorp/consul/pull/23341)]
* ui: Fixed Consul UI services page navigation by ensuring route transitions trigger the expected model hook behavior after Ember upgrade. [[GH-23271](https://github.com/hashicorp/consul/pull/23271)]
* ui: Replaced deprecated SideNav component with AppSideNav for improved navigation structure. [[GH-23289](https://github.com/hashicorp/consul/pull/23289)]

---

> **Source** [hashicorp/consul](https://github.com/hashicorp/consul) · `v1.22.6` · 2026-03-26 · [upstream release](https://github.com/hashicorp/consul/releases/tag/v1.22.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
