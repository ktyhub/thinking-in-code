---
title: "containerd v1.7.36"
project: "containerd"
repo: "containerd/containerd"
tag: "v1.7.36"
published: "2026-09-24"
type: "patch"
lang: "en"
summary: "Welcome to the v1.7.36 release of containerd!"
---

# containerd v1.7.36

Welcome to the v1.7.36 release of containerd!

The thirty-sixth patch release for containerd 1.7 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Image Storage

* Ensure all layers are fetched when multiple manifests in an index share a config descriptor ([#14142](https://github.com/containerd/containerd/pull/14142))

#### Runtime

* Mask /proc/interrupts and CPU thermal throttle sysfs paths in Linux containers by default ([#14184](https://github.com/containerd/containerd/pull/14184))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Chris Henzie
* Derek McGowan

### Changes
<details><summary>9 commits</summary>
<p>

  * [`b0ab39c205`](https://github.com/containerd/containerd/commit/b0ab39c2051a116f090708a7280dbbc749ca19d7) Prepare release notes for v1.7.36
  * [`670a5de22f`](https://github.com/containerd/containerd/commit/670a5de22fe8175987bde6ad6c422683a233e509) Merge commit from fork
  * [`a3a39e5873`](https://github.com/containerd/containerd/commit/a3a39e587332b3046724be2fb4447efb6c13b5a8) Bound Walk references
  * [`ffc673f859`](https://github.com/containerd/containerd/commit/ffc673f85906b174b9192f86f4485f7a16434bdc) Bound Dispatch concurrency and references
* pkg/oci: mask thermal interrupt info ([#14184](https://github.com/containerd/containerd/pull/14184))
  * [`19334a4d7e`](https://github.com/containerd/containerd/commit/19334a4d7ed59334d9d68f57b0f1cd827f32c64d) pkg/oci: mask thermal interrupt info
* core/unpack: fetch layers of every config-sharing manifest ([#14142](https://github.com/containerd/containerd/pull/14142))
  * [`4684c683c2`](https://github.com/containerd/containerd/commit/4684c683c213e5b32990851ce0ea9e07f5fe70b7) core/unpack: fetch layers of every config-sharing manifest
  * [`7fba9f7c3c`](https://github.com/containerd/containerd/commit/7fba9f7c3cb413600e6eea1f9b732cd84b657b38) Create new imagetest package
</p>
</details>

### Dependency Changes

This release has no dependency changes

Previous release can be found at [v1.7.35](https://github.com/containerd/containerd/releases/tag/v1.7.35)

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v1.7.36` · 2026-09-24 · [upstream release](https://github.com/containerd/containerd/releases/tag/v1.7.36)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
