---
title: "containerd v2.3.7"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.3.7"
published: "2026-10-13"
type: "patch"
lang: "en"
summary: "Welcome to the v2.3.7 release of containerd!"
---

# containerd v2.3.7

Welcome to the v2.3.7 release of containerd!

The seventh patch release for containerd 2.3 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-95839**](https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f)
  * [**GHSA-5p7c-hggf-c748**](https://github.com/containerd/containerd/security/advisories/GHSA-5p7c-hggf-c748)
  * [**GHSA-8647-2jxj-p2rc**](https://github.com/containerd/containerd/security/advisories/GHSA-8647-2jxj-p2rc)
  * [**GHSA-hc94-p972-ch66**](https://github.com/containerd/containerd/security/advisories/GHSA-hc94-p972-ch66)

### Highlights

#### Container Runtime Interface (CRI)

* Apply hardening to not follow symlinks for container log files ([#14301](https://github.com/containerd/containerd/pull/14301))

#### Image Distribution

* Apply hardening to reject image references with ".." path components ([#14281](https://github.com/containerd/containerd/pull/14281))

#### Runtime

* Apply hardening to allowlist socket domains in the default seccomp profile ([#14248](https://github.com/containerd/containerd/pull/14248))

#### Snapshotters

* Apply hardening to filter ID-mapping labels from image annotations during unpack ([#14261](https://github.com/containerd/containerd/pull/14261))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Wei Fu
* Maksym Pavlenko
* Aysha Afrah Ziya
* Derek McGowan
* Sebastiaan van Stijn
* Akihiro Suda
* LEI WANG
* Paweł Gronowski
* Phil Estes
* Vishal Srinivasan
* syed abdul khaliq
* 申玥

### Changes
<details><summary>31 commits</summary>
<p>

* Prepare release notes for v2.3.7 ([#14339](https://github.com/containerd/containerd/pull/14339))
  * [`c8b271adb`](https://github.com/containerd/containerd/commit/c8b271adb49ddc7fae68d77e4dd484dca32fdb23) Prepare release notes for v2.3.7
* Update to go1.26.9 ([#14353](https://github.com/containerd/containerd/pull/14353))
  * [`320278f96`](https://github.com/containerd/containerd/commit/320278f96cfe37c26bfd34fd6111bcc40ae4ae61) Update to go1.26.9
  * [`ca3d94d2f`](https://github.com/containerd/containerd/commit/ca3d94d2f937e25ca1825d5cf553e0c935b68fd0) Merge commit from fork
  * [`9621a5f9c`](https://github.com/containerd/containerd/commit/9621a5f9cd80984d2a821e4229b7c632e28e1dd8) remotes/docker: bound parallel fetch readers
  * [`dff0d82dd`](https://github.com/containerd/containerd/commit/dff0d82dd708c176ca35aec8c763d2fecea584d4) Merge commit from fork
  * [`2181d7baa`](https://github.com/containerd/containerd/commit/2181d7baa2a303ea2082e5c0f1a7697787b61ef2) images: skip malformed digests when computing referrer labels
  * [`29ed4ba2e`](https://github.com/containerd/containerd/commit/29ed4ba2e697b35c5bb3f3557a6ecfd540536063) Merge commit from fork
  * [`80885a94d`](https://github.com/containerd/containerd/commit/80885a94d1886ff98a2ea5f7c60c678fe64daaae) content, remotes: bound reads to expected size
  * [`5c6687786`](https://github.com/containerd/containerd/commit/5c66877869e1db173c327f936a8724a75fad1a44) Merge commit from fork
  * [`2e17e62e2`](https://github.com/containerd/containerd/commit/2e17e62e2c1559489ce12489e7aa11e697e9e6ce) cri: unmount checkpoint view on every CRImportCheckpoint return path
* integration/client: fix TestContainerExecLargeOutputWithTTY ([#14306](https://github.com/containerd/containerd/pull/14306))
  * [`da23fb7af`](https://github.com/containerd/containerd/commit/da23fb7af93737f8115477f955cec00639a7882b) integration/client: fix TestContainerExecLargeOutputWithTTY
* cri: should not follow log file ([#14301](https://github.com/containerd/containerd/pull/14301))
  * [`50a18659f`](https://github.com/containerd/containerd/commit/50a18659fbaa58ca25be1cba312323e802c33940) cri: should not follow log file
* reference: reject `..` path components that rewrite the host ([#14281](https://github.com/containerd/containerd/pull/14281))
  * [`b3dd30ae5`](https://github.com/containerd/containerd/commit/b3dd30ae531e46c01f4bf04508a64f61329ce142) reference: reject `..` path components that rewrite the host
* vendor: google.golang.org/grpc v1.83.2 ([#14263](https://github.com/containerd/containerd/pull/14263))
  * [`993898bbf`](https://github.com/containerd/containerd/commit/993898bbf6f408397d827c0f756ef7eac9786315) [release/2.3] vendor: google.golang.org/grpc v1.83.2
* core/unpack: don't honor id-mapping labels from image annotations ([#14261](https://github.com/containerd/containerd/pull/14261))
  * [`fe408f2a4`](https://github.com/containerd/containerd/commit/fe408f2a4e709098dfc5714b1b1a717d09108c86) core/unpack: tighten comments around id-mapping label filtering
  * [`3ab5f9c0e`](https://github.com/containerd/containerd/commit/3ab5f9c0efda9dfd682a986ab4f13024b83cd6af) core/unpack: don't honor id-mapping labels from image annotations
* seccomp: Use an allow-list for socket domains ([#14248](https://github.com/containerd/containerd/pull/14248))
  * [`658428e2f`](https://github.com/containerd/containerd/commit/658428e2fd508b30b0c035d49e5e2bf43a1acfa6) seccomp: Use an allow-list for socket domains
* Conditional actions ([#14244](https://github.com/containerd/containerd/pull/14244))
  * [`c73186ea6`](https://github.com/containerd/containerd/commit/c73186ea6e33faa7ae307575b137393f48b6a59a) Makefile: remove go mod download from integration
  * [`030b7b3f7`](https://github.com/containerd/containerd/commit/030b7b3f7dc725aad041bf44e655b8f1b7ee68c3) ci: skip linters steps in private repositories
  * [`ec6240e3e`](https://github.com/containerd/containerd/commit/ec6240e3eee186d3887d1e21f24d4f622daaa41d) workflows: skip non-CI jobs in private forks
* update runc binary to v1.5.2 ([#14240](https://github.com/containerd/containerd/pull/14240))
  * [`63092f411`](https://github.com/containerd/containerd/commit/63092f41193d1478ed5a23001e2867f5b7622705) update runc binary to v1.5.2
</p>
</details>

### Dependency Changes

* **go.opentelemetry.io/otel**                   v1.43.0 -> v1.44.0
* **go.opentelemetry.io/otel/metric**            v1.43.0 -> v1.44.0
* **go.opentelemetry.io/otel/sdk**               v1.43.0 -> v1.44.0
* **go.opentelemetry.io/otel/trace**             v1.43.0 -> v1.44.0
* **golang.org/x/crypto**                        v0.53.0 -> v0.55.0
* **golang.org/x/mod**                           v0.36.0 -> v0.38.0
* **golang.org/x/net**                           v0.55.0 -> v0.58.0
* **golang.org/x/oauth2**                        v0.35.0 -> v0.36.0
* **golang.org/x/sync**                          v0.21.0 -> v0.22.0
* **golang.org/x/sys**                           v0.46.0 -> v0.47.0
* **golang.org/x/term**                          v0.44.0 -> v0.45.0
* **golang.org/x/text**                          v0.38.0 -> v0.41.0
* **google.golang.org/genproto/googleapis/api**  9d38bb4040a9 -> 3dc84a4a5aaa
* **google.golang.org/genproto/googleapis/rpc**  6f92a3bedf2d -> 3dc84a4a5aaa
* **google.golang.org/grpc**                     v1.80.0 -> v1.83.2

Previous release can be found at [v2.3.6](https://github.com/containerd/containerd/releases/tag/v2.3.6)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.35 (Ubuntu 22.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on Linux distributions that do not use glibc >= 2.35. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.3.7` · 2026-10-13 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.3.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
