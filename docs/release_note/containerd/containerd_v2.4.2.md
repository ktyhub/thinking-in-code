---
title: "containerd v2.4.2"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.4.2"
published: "2026-10-13"
type: "patch"
lang: "en"
summary: "Welcome to the v2.4.2 release of containerd!"
---

# containerd v2.4.2

Welcome to the v2.4.2 release of containerd!

The second patch release for containerd 2.4 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-95839**](https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f)
  * [**GHSA-8647-2jxj-p2rc**](https://github.com/containerd/containerd/security/advisories/GHSA-8647-2jxj-p2rc)
  * [**GHSA-hc94-p972-ch66**](https://github.com/containerd/containerd/security/advisories/GHSA-hc94-p972-ch66)

### Highlights

#### Container Runtime Interface (CRI)

* Apply hardening to not follow symlinks for container log files ([#14302](https://github.com/containerd/containerd/pull/14302))

#### Image Distribution

* Fix excessive memory usage during image pulls when registry downloads outpace content writes ([#14342](https://github.com/containerd/containerd/pull/14342))
* Apply hardening to reject image references with ".." path components ([#14282](https://github.com/containerd/containerd/pull/14282))

#### Runtime

* Apply hardening to allowlist socket domains in the default seccomp profile ([#14247](https://github.com/containerd/containerd/pull/14247))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Maksym Pavlenko
* Sebastiaan van Stijn
* Derek McGowan
* LEI WANG
* Paweł Gronowski
* Phil Estes
* Wei Fu
* syed abdul khaliq

### Changes
<details><summary>25 commits</summary>
<p>

  * [`4b342aeaf`](https://github.com/containerd/containerd/commit/4b342aeaf5002282e7f4c6b159c0d55309bfd56e) Prepare release notes for v2.4.2
* Update to go1.26.9 / go1.27.2 (security) ([#14350](https://github.com/containerd/containerd/pull/14350))
  * [`9c06c813e`](https://github.com/containerd/containerd/commit/9c06c813e23fc4082c2fcc2a97cf18f40406f71d) Update to go1.26.9 / go1.27.2
* ci: update to golangci-lint v2.14.0 (go1.27.2 compatibility) ([#14347](https://github.com/containerd/containerd/pull/14347))
  * [`3fb9faa68`](https://github.com/containerd/containerd/commit/3fb9faa68ea106ae120e9e74aeeaa521b42100f4) ci: update to golangci-lint v2.14.0 (go1.27.2 compatibility)
  * [`187caba38`](https://github.com/containerd/containerd/commit/187caba386bf88ce652ef5b9b667e2ee9a04508b) Merge commit from fork
  * [`44fd201a8`](https://github.com/containerd/containerd/commit/44fd201a89b74fb0f7f41b95ec4622ebd38571f0) remotes/docker: bound parallel fetch readers
  * [`fc7adbfab`](https://github.com/containerd/containerd/commit/fc7adbfab11e97687e26e1b71307418289b65a47) Merge commit from fork
  * [`a2eb01f66`](https://github.com/containerd/containerd/commit/a2eb01f667b320b00ec218216f26f7b79197d4cd) images: skip malformed digests when computing referrer labels
  * [`39cff482d`](https://github.com/containerd/containerd/commit/39cff482d1bf65e208730311f49ed2a1da9a8599) Merge commit from fork
  * [`7f0c0b822`](https://github.com/containerd/containerd/commit/7f0c0b822e20abc52d21b71aa211f991a816b913) content, remotes: bound reads to expected size
* remotes/docker: throttle worker chunk buffers ([#14342](https://github.com/containerd/containerd/pull/14342))
  * [`6a78f854a`](https://github.com/containerd/containerd/commit/6a78f854af4ba1366fb95f0d66324e3e10e250d1) remotes/docker: limit chunk buffers per layer
* cri: should not follow log file ([#14302](https://github.com/containerd/containerd/pull/14302))
  * [`098de667d`](https://github.com/containerd/containerd/commit/098de667dd0b4e83dc135f87420f55a4f05a190d) cri: should not follow log file
* reference: reject `..` path components that rewrite the host ([#14282](https://github.com/containerd/containerd/pull/14282))
  * [`6b631559b`](https://github.com/containerd/containerd/commit/6b631559bd8fa7cd368ad0db7d97b1b46c2e0457) reference: reject `..` path components that rewrite the host
* seccomp: Use an allow-list for socket domains ([#14247](https://github.com/containerd/containerd/pull/14247))
  * [`7936ee578`](https://github.com/containerd/containerd/commit/7936ee5789f2e915ad9f3d2bed5493e4dd28378b) seccomp: Use an allow-list for socket domains
* update runc binary to v1.5.2 ([#14241](https://github.com/containerd/containerd/pull/14241))
  * [`54a82dcf0`](https://github.com/containerd/containerd/commit/54a82dcf0b7a7776ea03f96a80ee10d0213e23b5) update runc binary to v1.5.2
* Conditional actions ([#14237](https://github.com/containerd/containerd/pull/14237))
  * [`6e3b0d040`](https://github.com/containerd/containerd/commit/6e3b0d040da5d7af3bcf60ff4b622f5f65cd14b9) Makefile: remove go mod download from integration
  * [`694cfb371`](https://github.com/containerd/containerd/commit/694cfb371c6313e4821d13cbcf8f65e0f1711e52) ci: skip linters steps in private repositories
  * [`ca0452717`](https://github.com/containerd/containerd/commit/ca04527178f9546b1d8e5378730d317bd9ae6e5c) workflows: skip non-CI jobs in private forks
</p>
</details>

### Dependency Changes

This release has no dependency changes

Previous release can be found at [v2.4.1](https://github.com/containerd/containerd/releases/tag/v2.4.1)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.35 (Ubuntu 22.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on Linux distributions that do not use glibc >= 2.35. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.4.2` · 2026-10-13 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.4.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
