---
title: "containerd v2.0.13"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.0.13"
published: "2026-09-24"
type: "patch"
lang: "en"
summary: "Welcome to the v2.0.13 release of containerd!"
---

# containerd v2.0.13

Welcome to the v2.0.13 release of containerd!

The thirteenth patch release for containerd 2.0 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Image Storage

* Ensure all layers are fetched when multiple manifests in an index share a config descriptor ([#14141](https://github.com/containerd/containerd/pull/14141))

#### Runtime

* Mask /proc/interrupts and CPU thermal throttle sysfs paths in Linux containers by default ([#14183](https://github.com/containerd/containerd/pull/14183))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Chris Henzie
* Maksym Pavlenko

### Changes
<details><summary>8 commits</summary>
<p>

  * [`87c035016f`](https://github.com/containerd/containerd/commit/87c035016f8af2f6df76580eb5b01693b1b5d06e) Prepare release notes for v2.0.13
  * [`9bb64e7024`](https://github.com/containerd/containerd/commit/9bb64e70245e4180423d0ef493a999529e1be87c) Merge commit from fork
  * [`2dbcee240e`](https://github.com/containerd/containerd/commit/2dbcee240ed7985e3f0cdf6f7707ff3cc996295f) Bound Walk references
  * [`a2e7a37e0c`](https://github.com/containerd/containerd/commit/a2e7a37e0c341c9af36816e0b0dd4212f5d0a3b0) Bound Dispatch concurrency and references
* pkg/oci: mask thermal interrupt info ([#14183](https://github.com/containerd/containerd/pull/14183))
  * [`16ba4910fe`](https://github.com/containerd/containerd/commit/16ba4910feb5e1774fbbe71887e69424d563cd7b) pkg/oci: mask thermal interrupt info
* core/unpack: fetch layers of every config-sharing manifest ([#14141](https://github.com/containerd/containerd/pull/14141))
  * [`6850f41724`](https://github.com/containerd/containerd/commit/6850f41724f983ac0bd0e96a0008686be294f4ad) core/unpack: fetch layers of every config-sharing manifest
</p>
</details>

### Dependency Changes

This release has no dependency changes

Previous release can be found at [v2.0.12](https://github.com/containerd/containerd/releases/tag/v2.0.12)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.31 (Ubuntu 20.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on non-glibc Linux distributions. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.0.13` · 2026-09-24 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.0.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
