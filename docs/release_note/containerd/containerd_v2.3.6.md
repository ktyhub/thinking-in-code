---
title: "containerd v2.3.6"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.3.6"
published: "2026-09-24"
type: "patch"
lang: "en"
summary: "Welcome to the v2.3.6 release of containerd!"
---

# containerd v2.3.6

Welcome to the v2.3.6 release of containerd!

The sixth patch release for containerd 2.3 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Container Runtime Interface (CRI)

* Fix bug where container creation failed when SELinux relabeling was unsupported by the filesystem ([#14211](https://github.com/containerd/containerd/pull/14211))
* Enable mount manager for image mounts in CRI ([#14147](https://github.com/containerd/containerd/pull/14147))

#### Image Storage

* Ensure all layers are fetched when multiple manifests in an index share a config descriptor ([#14139](https://github.com/containerd/containerd/pull/14139))

#### Runtime

* Avoid unexpected mutation of mount options in mount helpers ([#14192](https://github.com/containerd/containerd/pull/14192))
* Mask /proc/interrupts and CPU thermal throttle sysfs paths in Linux containers by default ([#14144](https://github.com/containerd/containerd/pull/14144))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Paweł Gronowski
* Samuel Karp
* Chris Henzie
* Maksym Pavlenko
* Wei Fu
* Gao Xiang
* Nan Liu

### Changes
<details><summary>26 commits</summary>
<p>

  * [`086fc0d40e`](https://github.com/containerd/containerd/commit/086fc0d40ed639a9665e5fd5b98c537eb6482a86) Prepare release notes for v2.3.6
  * [`3e3b3daabc`](https://github.com/containerd/containerd/commit/3e3b3daabc00cc7e467ebf22d4832966e7da9658) Merge commit from fork
  * [`03fbef37da`](https://github.com/containerd/containerd/commit/03fbef37dad145d03299b31a742023a7025e1c8a) Bound Walk references
  * [`bfe167214b`](https://github.com/containerd/containerd/commit/bfe167214b9c17d48949aab74f213544a17464da) Bound Dispatch concurrency and references
* Fix input mutation in mount option helpers ([#14192](https://github.com/containerd/containerd/pull/14192))
  * [`5f17a29a9b`](https://github.com/containerd/containerd/commit/5f17a29a9b9da1b2f2cd5c8e89263dc78623e7c8) core/mount: Keep lazy copy for filtered options
  * [`49796574fb`](https://github.com/containerd/containerd/commit/49796574fba65ae671a8176ed595189167a734b6) core/mount: Return copied filtered mount options
  * [`cb3f358aea`](https://github.com/containerd/containerd/commit/cb3f358aeac03433f0f7e8ab555391f39d9fbb13) mount: share lazy option filtering
  * [`ee7ae5b7c7`](https://github.com/containerd/containerd/commit/ee7ae5b7c73bf8aed5ac0466104c05905a936314) mount: fix shallow copy of Options in RemoveVolatileOption and RemoveIDMapOption
  * [`1facedfb21`](https://github.com/containerd/containerd/commit/1facedfb21bfab06ebc7200ca5a6e6233a6ac98f) mount: fix input mutation in readonlyMounts
  * [`5ca695a441`](https://github.com/containerd/containerd/commit/5ca695a441ba5226a217fb64e474198f47f407e3) mount: replace copyMounts with slices.Clone
* cri: tolerate wrapped ENOTSUP during relabel ([#14211](https://github.com/containerd/containerd/pull/14211))
  * [`7fd198f858`](https://github.com/containerd/containerd/commit/7fd198f85842c917196752ad03c469aa2744ef7e) cri: tolerate wrapped ENOTSUP during relabel
* release: don't mark 2.3 releases as latest ([#14180](https://github.com/containerd/containerd/pull/14180))
  * [`147edce99f`](https://github.com/containerd/containerd/commit/147edce99fadeef350c822f1af8fdb0952d1ae67) release: don't mark 2.3 releases as latest
* cri: Backport image mount fixes 2.3 ([#14147](https://github.com/containerd/containerd/pull/14147))
  * [`c2c5164437`](https://github.com/containerd/containerd/commit/c2c5164437c1aa37358aec088c0bca3da104c536) cri: only unmount image volumes when mounting fails
  * [`74d0c79682`](https://github.com/containerd/containerd/commit/74d0c7968271e95123f1c481c63dae6783a600e3) cri: enable mount manager for image mounts
* core/unpack: fetch layers of every config-sharing manifest ([#14139](https://github.com/containerd/containerd/pull/14139))
  * [`4a3a41d353`](https://github.com/containerd/containerd/commit/4a3a41d35378065f78d9c2ae7d217d943eb7c30a) core/unpack: fetch layers of every config-sharing manifest
* pkg/oci: mask thermal interrupt info ([#14144](https://github.com/containerd/containerd/pull/14144))
  * [`9c6d7e9509`](https://github.com/containerd/containerd/commit/9c6d7e95093a9b1b237854d5cfbfbb78fe7a3418) pkg/oci: mask thermal interrupt info
* Update to go1.26.8 ([#14088](https://github.com/containerd/containerd/pull/14088))
  * [`ac4464a399`](https://github.com/containerd/containerd/commit/ac4464a399d4a0e09e4e5bc2e42c5824fa55fe79) Update to go1.26.8
  * [`f7f64ddc06`](https://github.com/containerd/containerd/commit/f7f64ddc06eaf7d26b268adf938b7fe67114ea37) Update to go1.26.7
  * [`902a7d5e6c`](https://github.com/containerd/containerd/commit/902a7d5e6cac2b07af3a6b1a87b92762d90ce22a) Update to go1.26.6
</p>
</details>

### Dependency Changes

This release has no dependency changes

Previous release can be found at [v2.3.5](https://github.com/containerd/containerd/releases/tag/v2.3.5)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.35 (Ubuntu 22.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on Linux distributions that do not use glibc >= 2.35. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.3.6` · 2026-09-24 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.3.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
