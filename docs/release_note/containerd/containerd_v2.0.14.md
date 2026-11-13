---
title: "containerd v2.0.14"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.0.14"
published: "2026-10-13"
type: "patch"
lang: "en"
summary: "Welcome to the v2.0.14 release of containerd!"
---

# containerd v2.0.14

Welcome to the v2.0.14 release of containerd!

The fourteenth patch release for containerd 2.0 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**GHSA-hc94-p972-ch66**](https://github.com/containerd/containerd/security/advisories/GHSA-hc94-p972-ch66)

### Highlights

#### Container Runtime Interface (CRI)

* Apply hardening to not follow symlinks for container log files ([#14299](https://github.com/containerd/containerd/pull/14299))

#### Runtime

* Apply hardening to allowlist socket domains in the default seccomp profile ([#14251](https://github.com/containerd/containerd/pull/14251))

#### Snapshotters

* Apply hardening to filter ID-mapping labels from image annotations during unpack ([#14270](https://github.com/containerd/containerd/pull/14270))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Wei Fu
* Maksym Pavlenko
* Aysha Afrah Ziya
* Paweł Gronowski
* Phil Estes
* Shiming Zhang
* ningmingxiao

### Changes
<details><summary>21 commits</summary>
<p>

  * [`30145a48d`](https://github.com/containerd/containerd/commit/30145a48d25fcb7c33862c8248aeaa677766dbe8) Prepare release notes for v2.0.14
  * [`eaae6434c`](https://github.com/containerd/containerd/commit/eaae6434c4025b23b4fa42b55d0dce869ef0202d) Merge commit from fork
  * [`21fd0a996`](https://github.com/containerd/containerd/commit/21fd0a996b9cf97752d28c0d98290759f7ad9732) content, remotes: bound reads to expected size
* Skip critest OOMKilled testcase for systemd cgroup ([#14320](https://github.com/containerd/containerd/pull/14320))
  * [`eb878c296`](https://github.com/containerd/containerd/commit/eb878c296ff40b0717e113c0a60c9f192c841806) script/critest.sh: always skip OOMKilled on systemd cgroup
  * [`95be879a5`](https://github.com/containerd/containerd/commit/95be879a5c21be00c8228b2247dda8cda243187c) *: skip critest OOMKilled testcase for systemd cgroup
* integration/client: fix TestContainerExecLargeOutputWithTTY ([#14308](https://github.com/containerd/containerd/pull/14308))
  * [`9101dc4e3`](https://github.com/containerd/containerd/commit/9101dc4e31cd35230f6b0a595bbb9907cc3ab806) integration/client: fix TestContainerExecLargeOutputWithTTY
  * [`16e119c17`](https://github.com/containerd/containerd/commit/16e119c179d30c9c8b25ff1863e5b30e55c8761e) ci:fix ci TestContainerExecLargeOutputWithTTY panic
* cri: should not follow log file ([#14299](https://github.com/containerd/containerd/pull/14299))
  * [`85b6459b2`](https://github.com/containerd/containerd/commit/85b6459b248866b5107f0770a1a157d3f9659503) cri: should not follow log file
* core/unpack: don't honor id-mapping labels from image annotations ([#14270](https://github.com/containerd/containerd/pull/14270))
  * [`1e0b4964e`](https://github.com/containerd/containerd/commit/1e0b4964e3f5306fbc0104e5f2b0d98c2ed592fd) core/unpack: tighten comments around id-mapping label filtering
  * [`6e9229820`](https://github.com/containerd/containerd/commit/6e92298203f0493dd5b0cf710eeca0d0289ebccf) core/unpack: don't honor id-mapping labels from image annotations
* seccomp: Use an allow-list for socket domains ([#14251](https://github.com/containerd/containerd/pull/14251))
  * [`1183551f1`](https://github.com/containerd/containerd/commit/1183551f12e847f431f381be95e25d3644e33318) seccomp: Use an allow-list for socket domains
* Conditional actions ([#14250](https://github.com/containerd/containerd/pull/14250))
  * [`29ab0dcca`](https://github.com/containerd/containerd/commit/29ab0dcca0add2c7f6a562adaff951863c9d1b07) [CI] Prevents triggering of an inactive issue/PR check for forked repository.
  * [`23c28d68c`](https://github.com/containerd/containerd/commit/23c28d68ce44abe286cc703bf5460a87e822da73) Makefile: remove go mod download from integration
  * [`4b3976166`](https://github.com/containerd/containerd/commit/4b397616648dab5de6f57d907e53bffa98f5391e) ci: skip linters steps in private repositories
  * [`db335dfa0`](https://github.com/containerd/containerd/commit/db335dfa0d7010148d5adf8dc2bf381790e45df8) workflows: skip non-CI jobs in private forks
</p>
</details>

### Dependency Changes

This release has no dependency changes

Previous release can be found at [v2.0.13](https://github.com/containerd/containerd/releases/tag/v2.0.13)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.31 (Ubuntu 20.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on non-glibc Linux distributions. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.0.14` · 2026-10-13 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.0.14)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
