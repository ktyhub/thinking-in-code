---
title: "containerd v2.4.1"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.4.1"
published: "2026-09-24"
type: "patch"
lang: "en"
summary: "Welcome to the v2.4.1 release of containerd!"
---

# containerd v2.4.1

Welcome to the v2.4.1 release of containerd!

The first patch release for containerd 2.4 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Container Runtime Interface (CRI)

* Fix bug where failed container start cleanup leaked tasks and prevented container removal ([#14223](https://github.com/containerd/containerd/pull/14223))
* Fix bug where container creation failed when SELinux relabeling was unsupported by the filesystem ([#14212](https://github.com/containerd/containerd/pull/14212))

#### Image Distribution

* Fix content upload failures when retrying fetch content after reaching EOF ([#14197](https://github.com/containerd/containerd/pull/14197))

#### Snapshotters

* Apply hardening to filter ID-mapping labels from image annotations during unpack ([#14200](https://github.com/containerd/containerd/pull/14200))

#### ctr development tool

* Fix bug where arguments following "-" were dropped in "ctr images export" ([#14219](https://github.com/containerd/containerd/pull/14219))
* Fix bug where container command arguments were parsed as flags in "ctr run", "ctr containers create", "ctr tasks exec", and "containerd oci-hook" ([#14215](https://github.com/containerd/containerd/pull/14215))
* Fix bug where comma-separated flag values were incorrectly split in ctr subcommands ([#14188](https://github.com/containerd/containerd/pull/14188))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Aysha Afrah Ziya
* Chris Henzie
* CrazyMax
* Maksym Pavlenko
* Nan Liu
* Sebastiaan van Stijn

### Changes
<details><summary>23 commits</summary>
<p>

  * [`9f7f70fc31`](https://github.com/containerd/containerd/commit/9f7f70fc3160fec77a3a3eb4e62c9b07cc138b19) Prepare release notes for v2.4.1
  * [`98e88f2afe`](https://github.com/containerd/containerd/commit/98e88f2afe2dc59452eaa26606e3f2823ab42531) Merge commit from fork
  * [`e0c8eed120`](https://github.com/containerd/containerd/commit/e0c8eed120dfd6f5546d754f406b0aa19939f463) Bound Walk references
  * [`ddf544326a`](https://github.com/containerd/containerd/commit/ddf544326a38a602da50b499ca97efe349efd8f6) Bound Dispatch concurrency and references
* cri: don't leak task when StartContainer cleanup fails to delete task ([#14223](https://github.com/containerd/containerd/pull/14223))
  * [`9e8abe0405`](https://github.com/containerd/containerd/commit/9e8abe0405ff03c49cbd475cb0c45ff6c1c3f995) cri: fix process leak when start cleanup fails to delete task
* ctr: preserve args after "-" in images export ([#14219](https://github.com/containerd/containerd/pull/14219))
  * [`acbdd57f0d`](https://github.com/containerd/containerd/commit/acbdd57f0dc38e900a45e7d7da364e0e83c848bd) ctr: preserve args after "-" in images export
* ctr: fix flag parsing issues in run, containers create, tasks exec, and oci-hook ([#14215](https://github.com/containerd/containerd/pull/14215))
  * [`a2e9a5196e`](https://github.com/containerd/containerd/commit/a2e9a5196e8264842f78d843b358afb0cbb20fde) cmd/containerd: stop flag parsing on oci-hook
  * [`2d0e53474d`](https://github.com/containerd/containerd/commit/2d0e53474d9e0fb47f028a52134fff1e19e07db6) ctr: stop flag parsing before container command
* cri: tolerate wrapped ENOTSUP during relabel ([#14212](https://github.com/containerd/containerd/pull/14212))
  * [`eb2dfa125d`](https://github.com/containerd/containerd/commit/eb2dfa125db8f670538c8a8b49b7bb0e3e2a5898) cri: tolerate wrapped ENOTSUP during relabel
* core/unpack: don't honor id-mapping labels from image annotations ([#14200](https://github.com/containerd/containerd/pull/14200))
  * [`429f317b55`](https://github.com/containerd/containerd/commit/429f317b55882a0ebd536e0f8b81b019d90fe776) core/unpack: tighten comments around id-mapping label filtering
  * [`cc1b8a2dc5`](https://github.com/containerd/containerd/commit/cc1b8a2dc5cbc76ecdd47f1bd97414f3bf88d16b) core/unpack: don't honor id-mapping labels from image annotations
* remotes: revert closing fetch readers at EOF ([#14197](https://github.com/containerd/containerd/pull/14197))
  * [`d265baec5a`](https://github.com/containerd/containerd/commit/d265baec5a62c1b2bcc2d8051cfd68f7970cdd51) remotes: test fetch retries and HTTP reader lifetime
  * [`9e8507bea8`](https://github.com/containerd/containerd/commit/9e8507bea8a5b66c32caa199a0df76cf94cc67d3) Revert "remotes: close fetch reader immediately on EOF"
* ctr: disable slice flag separator on commands ([#14188](https://github.com/containerd/containerd/pull/14188))
  * [`2543d23905`](https://github.com/containerd/containerd/commit/2543d239053adb35b8d4e2f94361cee40dbbedf7) ctr: disable slice flag separator on commands
* vendor: github.com/fxamacker/cbor/v2 v2.9.4 ([#14179](https://github.com/containerd/containerd/pull/14179))
  * [`f00dd7552e`](https://github.com/containerd/containerd/commit/f00dd7552e957c7909df861586180b2a35868357) vendor: github.com/fxamacker/cbor/v2 v2.9.4
</p>
</details>

### Dependency Changes

* **github.com/fxamacker/cbor/v2**  v2.9.1 -> v2.9.4

Previous release can be found at [v2.4.0](https://github.com/containerd/containerd/releases/tag/v2.4.0)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.35 (Ubuntu 22.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on Linux distributions that do not use glibc >= 2.35. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.4.1` · 2026-09-24 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
