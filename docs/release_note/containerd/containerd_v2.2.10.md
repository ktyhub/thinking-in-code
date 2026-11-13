---
title: "containerd v2.2.10"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.2.10"
published: "2026-10-13"
type: "patch"
lang: "en"
summary: "Welcome to the v2.2.10 release of containerd!"
---

# containerd v2.2.10

Welcome to the v2.2.10 release of containerd!

The tenth patch release for containerd 2.2 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-95839**](https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f)
  * [**GHSA-5p7c-hggf-c748**](https://github.com/containerd/containerd/security/advisories/GHSA-5p7c-hggf-c748)
  * [**GHSA-8647-2jxj-p2rc**](https://github.com/containerd/containerd/security/advisories/GHSA-8647-2jxj-p2rc)
  * [**GHSA-hc94-p972-ch66**](https://github.com/containerd/containerd/security/advisories/GHSA-hc94-p972-ch66)

### Highlights

#### Container Runtime Interface (CRI)

* Apply hardening to not follow symlinks for container log files ([#14300](https://github.com/containerd/containerd/pull/14300))

#### Image Distribution

* Avoid hang and data corruption during multipart image fetch ([#14316](https://github.com/containerd/containerd/pull/14316))
* Apply hardening to reject image references with ".." path components ([#14280](https://github.com/containerd/containerd/pull/14280))

#### Runtime

* Apply hardening to allowlist socket domains in the default seccomp profile ([#14249](https://github.com/containerd/containerd/pull/14249))

#### Snapshotters

* Apply hardening to filter ID-mapping labels from image annotations during unpack ([#14269](https://github.com/containerd/containerd/pull/14269))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Maksym Pavlenko
* Wei Fu
* Aysha Afrah Ziya
* Phil Estes
* Adrien Delorme
* LEI WANG
* Paweł Gronowski
* Sebastiaan van Stijn
* Shiming Zhang
* syed abdul khaliq
* 申玥

### Changes
<details><summary>33 commits</summary>
<p>

* Prepare release notes for v2.2.10 ([#14340](https://github.com/containerd/containerd/pull/14340))
  * [`27d59fe59`](https://github.com/containerd/containerd/commit/27d59fe5912d1857249e2bee2ed7c0d885bd7107) Prepare release notes for v2.2.10
* Update to go1.26.9 ([#14354](https://github.com/containerd/containerd/pull/14354))
  * [`cb4648a80`](https://github.com/containerd/containerd/commit/cb4648a80ada45faafde99368507e584a0210162) Update to go1.26.9, remove go1.25.12
  * [`6fe70e5cc`](https://github.com/containerd/containerd/commit/6fe70e5cc99c2bf9c5c1b5e6a08261e4cff89510) Merge commit from fork
  * [`70c8ae49e`](https://github.com/containerd/containerd/commit/70c8ae49e440c62ab1797a144ede5cd75f4b46e7) remotes/docker: bound parallel fetch readers
  * [`aff52a508`](https://github.com/containerd/containerd/commit/aff52a508b386e74d7c8d2b1795ccfae79d9c9f2) Merge commit from fork
  * [`2455fec2f`](https://github.com/containerd/containerd/commit/2455fec2f7bfa63adb1f993c63ba0cea9cdedb8c) images: skip malformed digests when computing referrer labels
  * [`32fc74497`](https://github.com/containerd/containerd/commit/32fc74497a0bbf3e317b8bf305c0a076fa82daf9) Merge commit from fork
  * [`5f8c507a2`](https://github.com/containerd/containerd/commit/5f8c507a2b01be28b825a1fb5a37a6d68c24292c) content, remotes: bound reads to expected size
  * [`14da554b2`](https://github.com/containerd/containerd/commit/14da554b267b668e6b7ea344e9d346107e05e6ec) Merge commit from fork
  * [`c3b7534ed`](https://github.com/containerd/containerd/commit/c3b7534edc4a508b78c15ac97bd78acdd8d128fe) cri: unmount checkpoint view on every CRImportCheckpoint return path
* Skip critest OOMKilled testcase for systemd cgroup ([#14319](https://github.com/containerd/containerd/pull/14319))
  * [`a47da7e9b`](https://github.com/containerd/containerd/commit/a47da7e9b392d87f6fac2663fac7b83e10df16e9) script/critest.sh: always skip OOMKilled on systemd cgroup
  * [`32c566557`](https://github.com/containerd/containerd/commit/32c566557857c851f35b3b641bbef70118ce7409) *: skip critest OOMKilled testcase for systemd cgroup
* multipart fetch stability fixes ([#14316](https://github.com/containerd/containerd/pull/14316))
  * [`5dde40350`](https://github.com/containerd/containerd/commit/5dde40350d67446b12509000a6dec7b969b89dd8) multipart fetch stability fixes
* integration/client: fix TestContainerExecLargeOutputWithTTY ([#14307](https://github.com/containerd/containerd/pull/14307))
  * [`7dff2d997`](https://github.com/containerd/containerd/commit/7dff2d997e3d5003df72f2dc904dd6d469d6e36c) integration/client: fix TestContainerExecLargeOutputWithTTY
* cri: should not follow log file ([#14300](https://github.com/containerd/containerd/pull/14300))
  * [`a5e41909a`](https://github.com/containerd/containerd/commit/a5e41909a2b1ad3224264c08a7f2f9f724847013) cri: should not follow log file
* reference: reject `..` path components that rewrite the host ([#14280](https://github.com/containerd/containerd/pull/14280))
  * [`4f71fd9b0`](https://github.com/containerd/containerd/commit/4f71fd9b0b2e3ce341bfb89ed7e001657b2f412c) reference: reject `..` path components that rewrite the host
* core/unpack: don't honor id-mapping labels from image annotations ([#14269](https://github.com/containerd/containerd/pull/14269))
  * [`4b3494a8d`](https://github.com/containerd/containerd/commit/4b3494a8dc966eb4c660f99749ee54922bf0dbcb) core/unpack: tighten comments around id-mapping label filtering
  * [`076598878`](https://github.com/containerd/containerd/commit/0765988786af6a75ab2b0e9aaf1fbf3ee9fb8268) core/unpack: don't honor id-mapping labels from image annotations
* seccomp: Use an allow-list for socket domains ([#14249](https://github.com/containerd/containerd/pull/14249))
  * [`5ba51c0f2`](https://github.com/containerd/containerd/commit/5ba51c0f21647d6d1844823cee9729034f8a6701) seccomp: Use an allow-list for socket domains
* Conditional actions ([#14246](https://github.com/containerd/containerd/pull/14246))
  * [`fa5e5452e`](https://github.com/containerd/containerd/commit/fa5e5452ea91e16f536f38f17b18b027f20bf7f0) [CI] Prevents triggering of an inactive issue/PR check for forked repository.
  * [`1c0d72890`](https://github.com/containerd/containerd/commit/1c0d728906a7f267d2de4c45f3b11c3f94ff095f) Makefile: remove go mod download from integration
  * [`9cfd2b4f8`](https://github.com/containerd/containerd/commit/9cfd2b4f8c94fb18cdae3d789ee3af99eaf2d64b) ci: skip linters steps in private repositories
  * [`8c0ab89ce`](https://github.com/containerd/containerd/commit/8c0ab89ce3ce9b602b2ac0b1b5bc97356b464f01) workflows: skip non-CI jobs in private forks
</p>
</details>

### Dependency Changes

This release has no dependency changes

Previous release can be found at [v2.2.9](https://github.com/containerd/containerd/releases/tag/v2.2.9)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.35 (Ubuntu 22.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on Linux distributions that do not use glibc >= 2.35. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.2.10` · 2026-10-13 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.2.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
