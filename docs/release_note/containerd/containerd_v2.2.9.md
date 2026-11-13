---
title: "containerd v2.2.9"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.2.9"
published: "2026-09-24"
type: "patch"
lang: "en"
summary: "Welcome to the v2.2.9 release of containerd!"
---

# containerd v2.2.9

Welcome to the v2.2.9 release of containerd!

The ninth patch release for containerd 2.2 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Container Runtime Interface (CRI)

* Fix bug where container creation failed when SELinux relabeling was unsupported by the filesystem ([#14210](https://github.com/containerd/containerd/pull/14210))
* Enable mount manager for image mounts in CRI ([#14148](https://github.com/containerd/containerd/pull/14148))

#### Image Storage

* Ensure all layers are fetched when multiple manifests in an index share a config descriptor ([#14140](https://github.com/containerd/containerd/pull/14140))

#### Runtime

* Mask /proc/interrupts and CPU thermal throttle sysfs paths in Linux containers by default ([#14182](https://github.com/containerd/containerd/pull/14182))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Chris Henzie
* Maksym Pavlenko
* Wei Fu
* Gao Xiang
* Nan Liu

### Changes
<details><summary>13 commits</summary>
<p>

  * [`60acf78bc5`](https://github.com/containerd/containerd/commit/60acf78bc5fef52160db2fdbcef6d2cfe5fc8e12) Prepare release notes for v2.2.9
  * [`253f9cc140`](https://github.com/containerd/containerd/commit/253f9cc14079b16aa50beb7d3a4e6309cb78718b) Merge commit from fork
  * [`053c0cc412`](https://github.com/containerd/containerd/commit/053c0cc412f2a36c77a973d0b62ff4fa4815a9bb) Bound Walk references
  * [`efd11fc9c2`](https://github.com/containerd/containerd/commit/efd11fc9c2935f1a7ce6626b348d1461bac34acf) Bound Dispatch concurrency and references
* cri: tolerate wrapped ENOTSUP during relabel ([#14210](https://github.com/containerd/containerd/pull/14210))
  * [`39d0dd4b43`](https://github.com/containerd/containerd/commit/39d0dd4b438524984290e17912c31dee90b29866) cri: tolerate wrapped ENOTSUP during relabel
* pkg/oci: mask thermal interrupt info ([#14182](https://github.com/containerd/containerd/pull/14182))
  * [`baffef9669`](https://github.com/containerd/containerd/commit/baffef966984d14e77a5cf18b7e7e86bced235fd) pkg/oci: mask thermal interrupt info
* core/unpack: fetch layers of every config-sharing manifest ([#14140](https://github.com/containerd/containerd/pull/14140))
  * [`9e1ae6a9e9`](https://github.com/containerd/containerd/commit/9e1ae6a9e9363836d3a2856f47ed84f63f520eb9) core/unpack: fetch layers of every config-sharing manifest
* cri: Backport image mount fixes 2.2 ([#14148](https://github.com/containerd/containerd/pull/14148))
  * [`2cdf8d80cc`](https://github.com/containerd/containerd/commit/2cdf8d80cc5aa408ce956c6b216d15f9de4e6099) cri: only unmount image volumes when mounting fails
  * [`2e1dcc5da0`](https://github.com/containerd/containerd/commit/2e1dcc5da0acd26e3c729c659993ea9fb75a3d79) cri: enable mount manager for image mounts
</p>
</details>

### Dependency Changes

This release has no dependency changes

Previous release can be found at [v2.2.8](https://github.com/containerd/containerd/releases/tag/v2.2.8)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.35 (Ubuntu 22.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on Linux distributions that do not use glibc >= 2.35. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.2.9` · 2026-09-24 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.2.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
