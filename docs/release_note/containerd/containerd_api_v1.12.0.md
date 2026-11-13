---
title: "containerd api/v1.12.0"
project: "containerd"
repo: "containerd/containerd"
tag: "api/v1.12.0"
published: "2026-09-16"
type: "release"
lang: "en"
summary: "Welcome to the api/v1.12.0 release of containerd!"
---

# containerd api/v1.12.0

Welcome to the api/v1.12.0 release of containerd!

The 13th release for the containerd 1.x API aligns with the containerd 2.4 release.

### Highlights

#### Image Storage

* Include media type in content create events ([#13833](https://github.com/containerd/containerd/pull/13833))

#### Runtime

* Add UpdateSandbox RPC to propagate sandbox controller updates to the shim ([#14105](https://github.com/containerd/containerd/pull/14105))
* Allow specifying parent checkpoint directory when checkpointing with runc ([#13699](https://github.com/containerd/containerd/pull/13699))

#### Deprecations

* Deprecate containerd.io/runtime-allow-mounts shim annotation in favor of MountCapabilities bootstrap extension ([#14002](https://github.com/containerd/containerd/pull/14002))
* Deprecate task API address and version fields in runc options and move to CreateTaskRequest ([#13360](https://github.com/containerd/containerd/pull/13360))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Derek McGowan
* Maksym Pavlenko
* Wei Fu
* Jordan Liggitt
* Samuel Karp
* Kohei Tokunaga
* Philip Laine
* Sebastiaan van Stijn
* Sergey Kanzhelev

### Changes
<details><summary>24 commits</summary>
<p>

* sandbox: wire Controller.Update through to the shim ([#14105](https://github.com/containerd/containerd/pull/14105))
  * [`2ea4ddb32f`](https://github.com/containerd/containerd/commit/2ea4ddb32f5855bf21680c4b2cdf5d0a23ffe552) sandbox: add UpdateSandbox RPC and forward Controller.Update to the shim
* Prepare api/v1.12.0-rc.0 release ([#14047](https://github.com/containerd/containerd/pull/14047))
  * [`d767f44b52`](https://github.com/containerd/containerd/commit/d767f44b5227116479ebbf4145623f3500e4cc23) Prepare api/v1.12.0-rc.0 release
* Shim mount handler protocol ([#14002](https://github.com/containerd/containerd/pull/14002))
  * [`a72247425b`](https://github.com/containerd/containerd/commit/a72247425b44e86a3790828dd11de5c5aecaf23d) api: add shim mount capabilities
* chore(api): update github.com/sirupsen/logrus v1.10.2 ([#14037](https://github.com/containerd/containerd/pull/14037))
  * [`a28910b14f`](https://github.com/containerd/containerd/commit/a28910b14ffc8ff5098d14e2f776dfc6b1857afe) chore(api): update github.com/sirupsen/logrus v1.10.2
* Prepare release notes for api/v1.12.0-beta.0 ([#13899](https://github.com/containerd/containerd/pull/13899))
  * [`0ff04dc3f7`](https://github.com/containerd/containerd/commit/0ff04dc3f7934523f6a2001e67d9572d4a9d4885) Prepare release notes for api/v1.12.0-beta.0
* Include media type in content create event ([#13833](https://github.com/containerd/containerd/pull/13833))
  * [`a452c2e230`](https://github.com/containerd/containerd/commit/a452c2e2304d43f48299ed2663ed82673b25be81) Include media type in content create event
* build(deps): bump golang.org/x/net from 0.51.0 to 0.55.0 in /api ([#13819](https://github.com/containerd/containerd/pull/13819))
  * [`52c5f1f64e`](https://github.com/containerd/containerd/commit/52c5f1f64e2184af56f3550940db29ccdb94e576) build(deps): bump golang.org/x/net from 0.51.0 to 0.55.0 in /api
* build(deps): bump github.com/containerd/ttrpc to v1.2.9 ([#13740](https://github.com/containerd/containerd/pull/13740))
  * [`658a1c78b5`](https://github.com/containerd/containerd/commit/658a1c78b52e25002c9c26a504055c8d3af09ea3) build(deps): bump github.com/containerd/ttrpc to v1.2.9
* Add parent path to runc checkpoint options ([#13699](https://github.com/containerd/containerd/pull/13699))
  * [`ea0ed51e21`](https://github.com/containerd/containerd/commit/ea0ed51e2101448874215c0de945197a1cafdea4) shim: allow specifying runc's --parent-path during checkpointing
* Update typeurl/v2 to v2.3.0 to drop gogo dependency ([#13490](https://github.com/containerd/containerd/pull/13490))
  * [`ce39143249`](https://github.com/containerd/containerd/commit/ce39143249b595d2b275e47c279c129f67e3a2a9) Update typeurl/v2 to v2.3.0 to drop gogo dependency
* do not hide linitng errors ([#13423](https://github.com/containerd/containerd/pull/13423))
  * [`7f10e9eb5f`](https://github.com/containerd/containerd/commit/7f10e9eb5fe3b6e89438fd4806f75bcddfbf576e) do not hide linitng errors
* Fix sandbox task API endpoints for non-runc runtimes ([#13360](https://github.com/containerd/containerd/pull/13360))
  * [`ac01ae5c27`](https://github.com/containerd/containerd/commit/ac01ae5c2766961c3592523ab679dc06ca73c331) protos: include task API address to CreateTaskRequest
</p>
</details>

### Dependency Changes

* **github.com/containerd/ttrpc**                v1.2.5 -> v1.2.9
* **github.com/containerd/typeurl/v2**           v2.1.1 -> v2.3.0
* **github.com/sirupsen/logrus**                 v1.9.3 -> v1.10.2
* **golang.org/x/net**                           v0.48.0 -> v0.55.0
* **golang.org/x/sys**                           v0.39.0 -> v0.46.0
* **golang.org/x/text**                          v0.32.0 -> v0.37.0
* **google.golang.org/genproto/googleapis/rpc**  ff82c1b0f217 -> a57be14db171
* **google.golang.org/grpc**                     v1.79.3 -> v1.81.1
* **google.golang.org/protobuf**                 v1.36.10 -> v1.36.11

Previous release can be found at [api/v1.11.0](https://github.com/containerd/containerd/releases/tag/api/v1.11.0)

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `api/v1.12.0` · 2026-09-16 · [upstream release](https://github.com/containerd/containerd/releases/tag/api/v1.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
