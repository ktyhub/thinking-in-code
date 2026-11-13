---
title: "containerd v2.4.0"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.4.0"
published: "2026-09-16"
type: "minor"
lang: "en"
summary: "Welcome to the v2.4.0 release of containerd!"
---

# containerd v2.4.0

Welcome to the v2.4.0 release of containerd!

containerd 2.4 is a regular (non-LTS) release with a shorter support window,
intended for users who want to adopt new features sooner. As the release
following the 2.3 LTS, it is the point in the release cycle where previously
deprecated features may be removed, so this release may include breaking
changes; check the notes below and clear any deprecation warnings from your
current version before upgrading.

Users prioritizing stability and a longer support lifecycle should stay on the
2.3 LTS release.

### Highlights

#### Container Runtime Interface (CRI)

* Enable mount manager for image mounts in CRI ([#13542](https://github.com/containerd/containerd/pull/13542))
* Export sandbox image and CNI directory configuration in CRI plugin info ([#13940](https://github.com/containerd/containerd/pull/13940))
* Set default runtimeFeatures.UserNamespacesHostNetwork to true ([#13162](https://github.com/containerd/containerd/pull/13162))
* Support OCI runtime feature introspection for non-runc runtimes ([#13504](https://github.com/containerd/containerd/pull/13504))

#### Image Distribution

* Apply hardening to strip sensitive authentication headers when fetching descriptor URLs ([#12889](https://github.com/containerd/containerd/pull/12889))
* Support propagating HTTP 299 warning headers from registries to the resolver ([#12698](https://github.com/containerd/containerd/pull/12698))
* Use klauspost/compress for gzip layer decompression ([#13560](https://github.com/containerd/containerd/pull/13560))

#### Image Storage

* Add client options to fetch all layer content during unpack even when snapshots exist ([#14126](https://github.com/containerd/containerd/pull/14126))
* Include media type in content create events ([#13833](https://github.com/containerd/containerd/pull/13833))
* Add forward References to the GC collection context ([#13634](https://github.com/containerd/containerd/pull/13634))

#### Node Resource Interface (NRI)

* Expose container image name, digest, and config digest to NRI plugins ([#13960](https://github.com/containerd/containerd/pull/13960))
* Emit deprecation warnings for plugins using deprecated NRI interfaces ([#13916](https://github.com/containerd/containerd/pull/13916))

#### Runtime

* Mask /proc/interrupts and CPU thermal throttle sysfs paths in Linux containers by default ([#14090](https://github.com/containerd/containerd/pull/14090))
* Add UpdateSandbox RPC to propagate sandbox controller updates to the shim ([#14105](https://github.com/containerd/containerd/pull/14105))
* Avoid immediately restarting containers with restart=always policy after they are explicitly stopped ([#13993](https://github.com/containerd/containerd/pull/13993))
* Pass tracing context from shim to runc and hooks ([#14036](https://github.com/containerd/containerd/pull/14036))
* Fix user and group lookup failures in container rootfs containing symlinked /etc/passwd or /etc/group ([#13818](https://github.com/containerd/containerd/pull/13818))
* Implement Windows named-pipe server and log streaming support in pkg/shim ([#13948](https://github.com/containerd/containerd/pull/13948))
* Enable log scrubbing by default on Windows ([#13837](https://github.com/containerd/containerd/pull/13837))
* Allow specifying parent checkpoint directory when checkpointing with runc ([#13699](https://github.com/containerd/containerd/pull/13699))

#### Snapshotters

* Add Prometheus metrics for EROFS snapshotter layer content cache ([#13941](https://github.com/containerd/containerd/pull/13941))
* Support warm image cache for erofs snapshotter ([#13813](https://github.com/containerd/containerd/pull/13813))
* Add max size label for snapshots ([#13520](https://github.com/containerd/containerd/pull/13520))

#### Breaking

* Remove deprecated CRI and tracing configuration options:
  * Remove `enable_cdi` in CRI runtime configuration (CDI is now always enabled)
  * Remove `bin_dir` in CRI CNI configuration (use `bin_dirs`)
  * Remove `endpoint`, `protocol`, and `insecure` in OTLP tracing processor configuration (use standard OTLP environment variables)
  * Remove `service_name` and `sampling_ratio` in internal tracing configuration (use standard OpenTelemetry environment variables) ([#14166](https://github.com/containerd/containerd/pull/14166))
* Remove restore in CreateContainer ([#13871](https://github.com/containerd/containerd/pull/13871))

#### Deprecations

* Deprecate containerd.io/runtime-allow-mounts shim annotation in favor of MountCapabilities bootstrap extension ([#14002](https://github.com/containerd/containerd/pull/14002))
* Remove deprecated shim.Command from pkg ([#13991](https://github.com/containerd/containerd/pull/13991))
* Deprecate task API address and version fields in runc options and move to CreateTaskRequest ([#13360](https://github.com/containerd/containerd/pull/13360))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Maksym Pavlenko
* Sebastiaan van Stijn
* Samuel Karp
* Derek McGowan
* Wei Fu
* Akihiro Suda
* Mike Brown
* Paweł Gronowski
* Chris Henzie
* Phil Estes
* Brian Goff
* Austin Vazquez
* ningmingxiao
* Jordan Liggitt
* Akhil Mohan
* Eshaan Mathur
* Krisztian Litkey
* Chris Ayoub
* Kazuyoshi Kato
* Kir Kolyshkin
* Sergey Kanzhelev
* Ahmet Alp Balkan
* Arpit Jain
* Cindy Li
* Damien Grisonnet
* Esteban Ginez
* Gao Xiang
* Harsh Rawat
* Laura Lorenz
* Maksim An
* Oleh Konko
* Philip Laine
* Abhishek Bhunia
* Alan Grosskurth
* Albin Kerouanton
* Alex Lyn
* Aman Raj
* Amir Alavi
* Amit Barve
* Andrew Halaney
* AprilNEA
* Arjun Yogidas
* Ayato Tokubi
* Aysha Afrah Ziya
* Ben Cressey
* Bing Hongtao
* Chris Crone
* Craig Gumbley
* Daniel De Graaf
* Davanum Srinivas
* Dr. Jan-Philip Gehrcke
* Harshal Patel
* Henry Wang
* Hsiu-Chi Tsai
* JP Phillips
* Jing Chen
* Kohei Tokunaga
* LEI WANG
* Martín Fernández
* Mikhail Dmitrichenko
* Nahum Litvin
* Nikolaus Schuetz
* Pablo Garcia Caceres
* Paco Xu
* Robert Cronin
* SaloniRathi
* Shambhavi Srivastava
* Tianon Gravi
* XlabAI
* Yuanliang Zhang
* ayush-panta
* crawfordxx
* cshung
* match man
* s3onghyun
* 归寂
* 徐晓伟

### Changes
<details><summary>658 commits</summary>
<p>

  * [`647fafa847`](https://github.com/containerd/containerd/commit/647fafa84793aba98b7ce93539e33726bd05aba1) Prepare release notes for v2.4.0
* Prepare release notes for api/v1.12.0 ([#14170](https://github.com/containerd/containerd/pull/14170))
  * [`5c4ea21de3`](https://github.com/containerd/containerd/commit/5c4ea21de307791022fd2584f096f07b97f5ef1e) Prepare release notes for api/v1.12.0
* Deprecations and removals for 2.4 ([#14166](https://github.com/containerd/containerd/pull/14166))
  * [`531b3a37b9`](https://github.com/containerd/containerd/commit/531b3a37b93fffaf1d93fdcdb4ed8f56ed0030ab) tracing: remove deprecated tracing config options
  * [`ca8579a334`](https://github.com/containerd/containerd/commit/ca8579a3342c1c50dcdcb70ecf7d4835bddb1a34) tracing: add tests for otlp exporter and env vars
  * [`ee024b7c99`](https://github.com/containerd/containerd/commit/ee024b7c9976e6a6b89788c1259753f3b53d1845) tracing: remove deprecated otlp configs
  * [`f7c654fb4f`](https://github.com/containerd/containerd/commit/f7c654fb4f08b2588b4e0038e32069a37aa50384) cri: remove deprecated cni bin_dir
  * [`4f7de25abb`](https://github.com/containerd/containerd/commit/4f7de25abbb53c9bddd502e9cbafb3472430f55b) cri: remove enable_cdi config option
  * [`830b48d3fd`](https://github.com/containerd/containerd/commit/830b48d3fde3e769501566118708b40438453faa) cri: delay registry config removal to 2.7
* Prepare release notes for v2.4.0-rc.0 ([#14115](https://github.com/containerd/containerd/pull/14115))
  * [`c02620e398`](https://github.com/containerd/containerd/commit/c02620e39811d200c69a85b34ed5d9a1f8107e64) Prepare release notes for v2.4.0-rc.0
  * [`02c7c97f43`](https://github.com/containerd/containerd/commit/02c7c97f436c5b491edf4db0ee68f7dffe1472ee) Update release doc for 2.4.0 release
  * [`484e5aba58`](https://github.com/containerd/containerd/commit/484e5aba58b906b0bdaa83fe86a7b0b994eeaa19) vendor: github.com/containerd/containerd/api v1.12.0-rc.1
  * [`67174d675c`](https://github.com/containerd/containerd/commit/67174d675c6c131e3638b2cd545e49445acdf056) mailmap: add Paweł Gronowski
* Update erofs snapshotter to record blob source ([#14107](https://github.com/containerd/containerd/pull/14107))
  * [`697a7571a4`](https://github.com/containerd/containerd/commit/697a7571a440ab462734c1c6bc69640791580559) erofs: give a dm-verity device a name unique to its mount
  * [`f75817eb3b`](https://github.com/containerd/containerd/commit/f75817eb3b474447ff1977d69ce775ab0554895f) erofs: record where a layer blob is
  * [`d92088d822`](https://github.com/containerd/containerd/commit/d92088d822ccd00be95e4b4f9c8a511065be45f7) erofs: refuse to apply into a read-only snapshot
  * [`8cc0b076a6`](https://github.com/containerd/containerd/commit/8cc0b076a62a718f3f9babbc86963293a123503c) erofs: serve layer content cache on parented Prepare
* build(deps): bump the golang-x group with 4 updates ([#14150](https://github.com/containerd/containerd/pull/14150))
  * [`75138b3fda`](https://github.com/containerd/containerd/commit/75138b3fda925db55bd2896030c2090cdbb871ba) build(deps): bump the golang-x group with 4 updates
* build(deps): bump github.com/klauspost/compress from 1.19.2 to 1.20.0 ([#14153](https://github.com/containerd/containerd/pull/14153))
  * [`353342cae6`](https://github.com/containerd/containerd/commit/353342cae6848c28bd37616380e5372119bd23ab) build(deps): bump github.com/klauspost/compress from 1.19.2 to 1.20.0
* pkg/oci: mask thermal interrupt info ([#14090](https://github.com/containerd/containerd/pull/14090))
  * [`c176f185b0`](https://github.com/containerd/containerd/commit/c176f185b08e14bde055d81dc509bd8f6bccf2a5) pkg/oci: mask thermal interrupt info
* vendor: github.com/containerd/nri v0.12.3 ([#14065](https://github.com/containerd/containerd/pull/14065))
  * [`69269c635b`](https://github.com/containerd/containerd/commit/69269c635b8fd424436ede8629ac7a57db149c64) vendor: github.com/containerd/nri v0.12.3
* cri: only unmount image volumes when mounting fails ([#14143](https://github.com/containerd/containerd/pull/14143))
  * [`d13064937e`](https://github.com/containerd/containerd/commit/d13064937e13eb8bb2323e155da35641657bc2aa) cri: only unmount image volumes when mounting fails
* migrate to github.com/urfave/cli/v3 ([#14095](https://github.com/containerd/containerd/pull/14095))
  * [`f72829f36b`](https://github.com/containerd/containerd/commit/f72829f36b8ed0562644bf45b6c3397f52ad614b) migrate to github.com/urfave/cli/v3
* shim-runc-v2: record exit status in bundle ([#14113](https://github.com/containerd/containerd/pull/14113))
  * [`3264a09dff`](https://github.com/containerd/containerd/commit/3264a09dff64cbbdd3a945be8fa88be58d23e935) shim-runc-v2: record exit status in bundle
* core/unpack: fetch layers of every config-sharing manifest ([#13966](https://github.com/containerd/containerd/pull/13966))
  * [`3c5d9fefd8`](https://github.com/containerd/containerd/commit/3c5d9fefd84498de699fdc2f57c6682fe4599d00) core/unpack: fetch layers of every config-sharing manifest
* time to update cri-tools to v1.37.0 ([#14133](https://github.com/containerd/containerd/pull/14133))
  * [`5c957005ab`](https://github.com/containerd/containerd/commit/5c957005abfd3554cadb9acb4362162636a38db7) adding container_threads metric emission for cgroups v1
  * [`d038c4f1f9`](https://github.com/containerd/containerd/commit/d038c4f1f97bd40117336fe635c949cc6f0ec80b) time to update cri-tools to v1.37.0
* update crun to v1.29.1 ([#14136](https://github.com/containerd/containerd/pull/14136))
  * [`64d7857d2b`](https://github.com/containerd/containerd/commit/64d7857d2bb996f070df88668abad2cb78ff8c75) update crun to v1.29.1
* vendor: github.com/containerd/log main, use log.Level consts for log-levels ([#14019](https://github.com/containerd/containerd/pull/14019))
  * [`b178103a4f`](https://github.com/containerd/containerd/commit/b178103a4fb0800491a0d850ef66acacc873b743) use log.Level consts for log-levels
  * [`a77089ba8e`](https://github.com/containerd/containerd/commit/a77089ba8ea2fecb75a064e86b2f6013de788bd4) vendor: github.com/containerd/log v0.2.0
  * [`0ca704384f`](https://github.com/containerd/containerd/commit/0ca704384f08c4389ecb3ded01527aa040f38aed) vendor: github.com/containerd/log/otel v0.1.0
* vendor: github.com/moby/sys/userns v0.2.1 ([#14130](https://github.com/containerd/containerd/pull/14130))
  * [`f30398314f`](https://github.com/containerd/containerd/commit/f30398314f30f7674e248b35abd75a3c24cc027b) vendor: github.com/moby/sys/userns v0.2.1
* cri: enable mount manager for image mounts ([#13542](https://github.com/containerd/containerd/pull/13542))
  * [`9224f17d7c`](https://github.com/containerd/containerd/commit/9224f17d7cf8a24aa7f32db02447663f45c0b537) cri: enable mount manager for image mounts
* Fix input mutation in mount option helpers ([#13433](https://github.com/containerd/containerd/pull/13433))
  * [`165abaf8fd`](https://github.com/containerd/containerd/commit/165abaf8fd955b7f5521e3e7514a638ecd09c392) core/mount: Keep lazy copy for filtered options
  * [`674c3a1acb`](https://github.com/containerd/containerd/commit/674c3a1acb8f20200f9f1bdd61dbf78f844dfc9d) core/mount: Return copied filtered mount options
  * [`79455dd4b0`](https://github.com/containerd/containerd/commit/79455dd4b0f07e6d19ba3350d0ace6279b901eeb) mount: share lazy option filtering
  * [`b73b82f2af`](https://github.com/containerd/containerd/commit/b73b82f2af9f7df967526dc09d84606e8d9b9ca9) mount: fix shallow copy of Options in RemoveVolatileOption and RemoveIDMapOption
  * [`70cfd7796a`](https://github.com/containerd/containerd/commit/70cfd7796ac57a81eac0eaf90c7171b44ccb829d) mount: fix input mutation in readonlyMounts
  * [`35e919f329`](https://github.com/containerd/containerd/commit/35e919f3291219341c41c8fc91e66619aa1927ea) mount: replace copyMounts with slices.Clone
* cmd: refactor in preparation of urfave/cli/v3 migration ([#14103](https://github.com/containerd/containerd/pull/14103))
  * [`861dc7ed7a`](https://github.com/containerd/containerd/commit/861dc7ed7a50f3da6e7ec903d102cbba4bd34139) cmd: commands.NewClient: explicitly pass context
  * [`324866a884`](https://github.com/containerd/containerd/commit/324866a8849ad0fd1cba879a0bb356af373569a5) cmd: commands.AppContext: explicitly pass context
  * [`bd954e4e2c`](https://github.com/containerd/containerd/commit/bd954e4e2cf399c707e0d322949e23a1bc0fb86b) cmd: initialize CLI apps with struct literals
  * [`ba71234151`](https://github.com/containerd/containerd/commit/ba71234151c59205b8192f357151c525c535f34d) cmd: rename cliContext -> cmd in preparation of v3 migration
  * [`de193f2059`](https://github.com/containerd/containerd/commit/de193f205965d9d9edf14750fe5894d42724d905) cmd: edit: pass editor name instead of cli.Context
  * [`2cc86cb07b`](https://github.com/containerd/containerd/commit/2cc86cb07bf0f0e5fb873b6721b01dc422fd4476) cmd: rename some vars that shadowed
  * [`e6be784a71`](https://github.com/containerd/containerd/commit/e6be784a71ddba6310d97ef6b3258382440d1f50) cmd: use urfave/cli RunContext
  * [`4d13856983`](https://github.com/containerd/containerd/commit/4d13856983cae56d2153a840499e0f75a15b8dad) cmd: remove redundant empty slice flag values
  * [`211cde9039`](https://github.com/containerd/containerd/commit/211cde9039afbf2c8ed829d5c2f2948ac7760362) cmd: remove uses of urfave/cli.Commands
  * [`c52e77eccd`](https://github.com/containerd/containerd/commit/c52e77eccd483d2626c53e3f19d560a0cbcfa0d0) cmd/ctr: remove unused pluginCmds
* unpack: Add opt-in fetching for existing snapshots ([#14126](https://github.com/containerd/containerd/pull/14126))
  * [`2b0302fd85`](https://github.com/containerd/containerd/commit/2b0302fd85162056dd3ef351c97cd9a8d2c9d87b) unpack: Add opt-in fetching for existing snapshots
* integration/client: fix TestContainerExecLargeOutputWithTTY ([#14120](https://github.com/containerd/containerd/pull/14120))
  * [`68f92da9fb`](https://github.com/containerd/containerd/commit/68f92da9fbb33d524179b9648459e5f4995dccb9) integration/client: fix TestContainerExecLargeOutputWithTTY
* vendor: github.com/go-jose/go-jose/v4 v4.1.5 (security) ([#14116](https://github.com/containerd/containerd/pull/14116))
  * [`0c4981cc2e`](https://github.com/containerd/containerd/commit/0c4981cc2ec56c74c2d8fa3d5c5ebf0f42b36837) vendor: github.com/go-jose/go-jose/v4 v4.1.5
* Revert "metadata: bound snapshotter Remove during garbage collection" ([#14119](https://github.com/containerd/containerd/pull/14119))
  * [`aeb095b175`](https://github.com/containerd/containerd/commit/aeb095b175442bb59bef5a01c2e23ea5da655f65) Revert "metadata: bound snapshotter Remove during garbage collection"
* build(deps): bump azure/login from 3.0.1 to 3.0.2 ([#14114](https://github.com/containerd/containerd/pull/14114))
  * [`2bfdafac7b`](https://github.com/containerd/containerd/commit/2bfdafac7bba137e1406c3b2cddb135f6385b092) build(deps): bump azure/login from 3.0.1 to 3.0.2
* pkg/tracing: deprecate Logrushook in favor of log/otel.Logrushook ([#14023](https://github.com/containerd/containerd/pull/14023))
  * [`20fed5179a`](https://github.com/containerd/containerd/commit/20fed5179aea2fe62d7c441e1a03d625d4449ce7) pkg/tracing: deprecate Logrushook in favor of log/otel.Logrushook
* sandbox: wire Controller.Update through to the shim ([#14105](https://github.com/containerd/containerd/pull/14105))
  * [`b971bac19f`](https://github.com/containerd/containerd/commit/b971bac19f6a563acb900d131501fe52903a859e) docs: document optional sandbox updates
  * [`40f84371c6`](https://github.com/containerd/containerd/commit/40f84371c6b5f1b7f200656f0c00963cc6ec3322) vendor: update containerd api
  * [`2ea4ddb32f`](https://github.com/containerd/containerd/commit/2ea4ddb32f5855bf21680c4b2cdf5d0a23ffe552) sandbox: add UpdateSandbox RPC and forward Controller.Update to the shim
* vendor: golang.org/x/crypto v0.56.0 ([#14093](https://github.com/containerd/containerd/pull/14093))
  * [`977cb4bb0a`](https://github.com/containerd/containerd/commit/977cb4bb0a206319cd2cb8ccc552af2bb827bbaf) vendor: golang.org/x/crypto v0.56.0
  * [`8dd0970b3c`](https://github.com/containerd/containerd/commit/8dd0970b3c73e87efd21f4f6f942d808086e17ac) Merge commit from fork
  * [`ff39a97236`](https://github.com/containerd/containerd/commit/ff39a972369e2f12fae561a58d658bbf8f2bc318) cri: cancel ExecSync IO drain on context cancellation
  * [`65dcc83dad`](https://github.com/containerd/containerd/commit/65dcc83dad422213ca53b7868ae8881f44a4e0a5) Merge commit from fork
  * [`e6ca378dcf`](https://github.com/containerd/containerd/commit/e6ca378dcfa610d06589a3ac96aa992de866e4f0) archive: skip redundant opaque whiteout walks
* vendor: tags.cncf.io/container-device-interface v1.1.1 ([#14109](https://github.com/containerd/containerd/pull/14109))
  * [`d1b8275dc2`](https://github.com/containerd/containerd/commit/d1b8275dc2951a85faaf0090a3c64b6971d3a2d8) vendor: tags.cncf.io/container-device-interface v1.1.1
* vendor: bump go-cni v1.1.14 and containernetworking/cni v1.3.1 ([#14104](https://github.com/containerd/containerd/pull/14104))
  * [`9ca93e5488`](https://github.com/containerd/containerd/commit/9ca93e548844ec8b3ce69384f6334792426133a7) vendor: bump go-cni v1.1.14 and containernetworking/cni v1.3.1
* Update Go 1.26.8 and 1.27.1 ([#14087](https://github.com/containerd/containerd/pull/14087))
  * [`db128f8955`](https://github.com/containerd/containerd/commit/db128f89559613a6a3668b4a94b75fdec4b64d9b) Update to go1.27.1
  * [`f257e6b98c`](https://github.com/containerd/containerd/commit/f257e6b98c6b125e0f2031e5d8765559f7c740cc) Update go1.26 to go1.26.8
  * [`43f85c6b53`](https://github.com/containerd/containerd/commit/43f85c6b53a35e1703f58e5254325a1c6f091983) Update go1.26 to go1.26.7
* gha: Update golangci-lint to v2.13.2 ([#14089](https://github.com/containerd/containerd/pull/14089))
  * [`3c10e5f0be`](https://github.com/containerd/containerd/commit/3c10e5f0bef4781b89db40fb359b44f3301841e1) all: Address G702 command execution findings
  * [`7797833d8e`](https://github.com/containerd/containerd/commit/7797833d8e92239934d807870cc20b0de98b97f8) gha: Update golangci-lint to v2.13.2
  * [`2e587fd358`](https://github.com/containerd/containerd/commit/2e587fd358ceaa39edc48bf82f13af07ba576c21) ctr: Use context-aware pprof dialing
  * [`a0ea6a138b`](https://github.com/containerd/containerd/commit/a0ea6a138bc0bd798bf13fcde16855736732994d) runtime: Preserve context values in background goroutines
  * [`2c75374a2f`](https://github.com/containerd/containerd/commit/2c75374a2fc2d52e32ac73c8221bc8bfabbf6abb) all: Use slices.Backward for reverse iteration
  * [`b7ae26eea7`](https://github.com/containerd/containerd/commit/b7ae26eea7af2a2cee16aec746d1f38eb015fa16) all: Use errors.AsType
* runtime: invoke shim.Delete when connection is closed ([#13309](https://github.com/containerd/containerd/pull/13309))
  * [`e49a475d4a`](https://github.com/containerd/containerd/commit/e49a475d4a87d25513febbc2e625ddf0f1f447e0) runtime: invoke shim.Delete when connection is closed
* Fix data races and a deadlock in the byte stream helpers ([#14085](https://github.com/containerd/containerd/pull/14085))
  * [`3914a449d4`](https://github.com/containerd/containerd/commit/3914a449d46e5644b66dd0270299101ef0290158) Fix data races and a deadlock in the byte stream helpers
* erofs: enable fsview fallback for unsupported features ([#14077](https://github.com/containerd/containerd/pull/14077))
  * [`9d804de10b`](https://github.com/containerd/containerd/commit/9d804de10bd5ecd6f29a744623676f4d56f16cf4) erofs: enable fsview fallback for unsupported features
* all: fix typos in code comments ([#14082](https://github.com/containerd/containerd/pull/14082))
  * [`93b0eea04b`](https://github.com/containerd/containerd/commit/93b0eea04b072c3dc0d775c63d37f45fde3aedca) all: fix typos in code comments
* fix: fix incorrect restart=always restart logic ([#13993](https://github.com/containerd/containerd/pull/13993))
  * [`452b4d99cc`](https://github.com/containerd/containerd/commit/452b4d99cc5c15442b29f20c9ebbed88dd71bef1) fix: fix incorrect restart=always restart logic
* add additional tests for toCriSignal contract  ([#14073](https://github.com/containerd/containerd/pull/14073))
  * [`961764f6b2`](https://github.com/containerd/containerd/commit/961764f6b20059c5da0f41b0078491b43f593851) test toCriSignal contract for metadata pre SIGNAL_ prefix
* build(deps): bump docker/setup-buildx-action from 4.2.0 to 4.3.0 in the docker-actions group ([#14067](https://github.com/containerd/containerd/pull/14067))
  * [`6512b4caf1`](https://github.com/containerd/containerd/commit/6512b4caf103f35b1375116e002ffeb34956bf0d) build(deps): bump docker/setup-buildx-action in the docker-actions group
* build(deps): bump azure/login from 3.0.0 to 3.0.1 ([#13964](https://github.com/containerd/containerd/pull/13964))
  * [`59f415c7d6`](https://github.com/containerd/containerd/commit/59f415c7d690304df303844fe1d184ab985a978d) build(deps): bump azure/login from 3.0.0 to 3.0.1
* cri: trace image pull result attributes ([#13959](https://github.com/containerd/containerd/pull/13959))
  * [`09997c13a4`](https://github.com/containerd/containerd/commit/09997c13a4ee2f0067e00deda1b31e9a2ef9b6da) cri: trace image pull result attributes
* internal/cri/server: avoid debug log formatting for container spec ([#13972](https://github.com/containerd/containerd/pull/13972))
  * [`30cd464708`](https://github.com/containerd/containerd/commit/30cd4647085620557f2f2b31fa7ce1ecdfa16ad4) internal/cri/server: avoid debug log formatting for container spec
* build(deps): bump github.com/google/certtostore from 1.0.6 to 1.0.7 ([#13919](https://github.com/containerd/containerd/pull/13919))
  * [`f07b18490b`](https://github.com/containerd/containerd/commit/f07b18490b215bfb9d534dbd24a74852a7b4bd9c) build(deps): bump github.com/google/certtostore from 1.0.6 to 1.0.7
* vendor: github.com/docker/go-events v0.1.0 ([#14064](https://github.com/containerd/containerd/pull/14064))
  * [`5333ee0952`](https://github.com/containerd/containerd/commit/5333ee0952bd60f4f3afa358b7da0b80d106054e) vendor: github.com/docker/go-events v0.1.0
* chore(deps): go.opentelemetry.io/otel v1.46.0, contrib v0.71.0 ([#14058](https://github.com/containerd/containerd/pull/14058))
  * [`bfe115abe8`](https://github.com/containerd/containerd/commit/bfe115abe84b9a10d108682ce2cae49e69963721) chore(deps): go.opentelemetry.io/otel v1.46.0, contrib v0.71.0
* vendor: tags.cncf.io/container-device-interface 73444d1f71f2 ([#14060](https://github.com/containerd/containerd/pull/14060))
  * [`ea60594619`](https://github.com/containerd/containerd/commit/ea60594619ffb201d59b304895ee8edf142c75df) vendor: tags.cncf.io/container-device-interface 73444d1f71f2
* plugins: remove some stray logrus imports ([#14057](https://github.com/containerd/containerd/pull/14057))
  * [`b845501327`](https://github.com/containerd/containerd/commit/b8455013273e511bf9c24e6ee1438fafa99fb228) plugins: remove some stray logrus imports
* snapshots/erofs: advertise the erofs OS feature from the snapshotter plugin ([#14012](https://github.com/containerd/containerd/pull/14012))
  * [`988f113ab7`](https://github.com/containerd/containerd/commit/988f113ab7318457bf05836799ca50512b120fb2) snapshots/erofs: test the advertised erofs feature platform
  * [`5e083f8d43`](https://github.com/containerd/containerd/commit/5e083f8d43cab359c73e5eb07dd3e97008c60004) erofs: advertise the erofs OS feature platform from the snapshotter
* build(deps): bump github.com/prometheus/client_golang from 1.24.0 to 1.24.1 ([#13883](https://github.com/containerd/containerd/pull/13883))
  * [`5e89a2c119`](https://github.com/containerd/containerd/commit/5e89a2c1198354abf7f0489c9f8f4bcbc9b049ff) build(deps): bump github.com/prometheus/client_golang
* Prepare api/v1.12.0-rc.0 release ([#14047](https://github.com/containerd/containerd/pull/14047))
  * [`d767f44b52`](https://github.com/containerd/containerd/commit/d767f44b5227116479ebbf4145623f3500e4cc23) Prepare api/v1.12.0-rc.0 release
* update kubernetes to v1.37.0 ([#14051](https://github.com/containerd/containerd/pull/14051))
  * [`67336d701d`](https://github.com/containerd/containerd/commit/67336d701ddbb3d2e8fa7b7259c053b998cd92a3) modifies criSignalToOCIStopSignal to remove the extra cri SIGNAL_ prefixes
  * [`00ecad3d7a`](https://github.com/containerd/containerd/commit/00ecad3d7a8f80e8b1702b94dfac2d5ffe2a0197) resolve lint issue upstreamcri.NewRemoteImageService() is deprecated
  * [`ee09726316`](https://github.com/containerd/containerd/commit/ee097263167d8db40d6c133e128b2e62f83a636f) fix for cri api Signal_ to Signal_SIGNAL_
  * [`52be09ef1c`](https://github.com/containerd/containerd/commit/52be09ef1c526776140131d5f6cf406123c42eb8) update kubernetes to v1.37.0
* Pass tracing context from shim to runc and hooks ([#14036](https://github.com/containerd/containerd/pull/14036))
  * [`0b4ed79573`](https://github.com/containerd/containerd/commit/0b4ed795732b2b78fd03843af5b24c14022892e5) integration: add e2e test to verify trace context propagation
  * [`5c25750dd5`](https://github.com/containerd/containerd/commit/5c25750dd52506940c8ee559b3a4cb0c5e3ca732) shim: propagate trace context to runc and OCI hooks
  * [`beb23bc68d`](https://github.com/containerd/containerd/commit/beb23bc68d6f6063f6785d62647ecadd93e54f3e) vendor: add go.opentelemetry.io/contrib/propagators/envcar v0.70.0
* runtime: make task.Delete API retriable ([#14020](https://github.com/containerd/containerd/pull/14020))
  * [`24dc6900ec`](https://github.com/containerd/containerd/commit/24dc6900ec0081ec80eb837cbc751c3e32c5351e) runtime: make task.Delete API retriable
* vendor: google.golang.org/grpc v1.83.2 ([#14042](https://github.com/containerd/containerd/pull/14042))
  * [`89ba8063e1`](https://github.com/containerd/containerd/commit/89ba8063e1b1a6b03c20b268128059fe926a46f0) vendor: google.golang.org/grpc v1.83.2
* vendor: tags.cncf.io/container-device-interface 04278701a635 ([#14043](https://github.com/containerd/containerd/pull/14043))
  * [`ab451b6de8`](https://github.com/containerd/containerd/commit/ab451b6de889ad449625fa4c34e747207632d81f) vendor: tags.cncf.io/container-device-interface 04278701a635
* Shim mount handler protocol ([#14002](https://github.com/containerd/containerd/pull/14002))
  * [`fbd9f37c2d`](https://github.com/containerd/containerd/commit/fbd9f37c2dbd86bf4f8a15d6da2cf0b1c6d08b67) docs: document the transform suffix rule
  * [`aedbd24669`](https://github.com/containerd/containerd/commit/aedbd246699e2db731b6c5ac22deb641d859eb3f) docs: document the shim mount capability
  * [`1ff0c13859`](https://github.com/containerd/containerd/commit/1ff0c138598109667fbbe8e451bb491f947f85d4) runtime/v2: migrate early adopters of the deprecated annotation
  * [`d3cc320650`](https://github.com/containerd/containerd/commit/d3cc3206501aecccaf0a5d19569d9196d546e1df) runtime/v2: propagate shim mount capabilities to sandbox members
  * [`e8963fc32b`](https://github.com/containerd/containerd/commit/e8963fc32b62415165ec3ea62445f98298706dc3) runtime/v2: negotiate mount capabilities from shim bootstrap
  * [`0b641f0099`](https://github.com/containerd/containerd/commit/0b641f00994f9cf037aa23e052d4114dc2d2c52d) mount: honor a claimed transform as a chain suffix
  * [`8ba69faf06`](https://github.com/containerd/containerd/commit/8ba69faf067f82c47c6ad9dfe65bb5ead96eb4e0) mount: extract activation planning
  * [`00967ecf03`](https://github.com/containerd/containerd/commit/00967ecf03ba1016972a9b1125fac18051f84778) mount: add WithAllowTransform activate option
  * [`6d9307f346`](https://github.com/containerd/containerd/commit/6d9307f3465fd339a03a6695f5b6526d9ddaf0e2) runtime/v2: decode the whole bootstrap result from JSON
  * [`65b4eb916e`](https://github.com/containerd/containerd/commit/65b4eb916e0cbd5e75d554caa2b563ae1b3adba0) vendor: use local api module and update vendored api
  * [`a72247425b`](https://github.com/containerd/containerd/commit/a72247425b44e86a3790828dd11de5c5aecaf23d) api: add shim mount capabilities
  * [`329998caa9`](https://github.com/containerd/containerd/commit/329998caa954b6fc2f066bfcabbc80233ecdb128) runtime/v2: remove the runtime-allow-mounts annotation
* vendor: github.com/docker/go-metrics v0.1.0 ([#14041](https://github.com/containerd/containerd/pull/14041))
  * [`b44bea515c`](https://github.com/containerd/containerd/commit/b44bea515ca613f38b8fe3d7aeeb57bd6e592229) vendor: github.com/docker/go-metrics v0.1.0
* chore(api): update github.com/sirupsen/logrus v1.10.2 ([#14037](https://github.com/containerd/containerd/pull/14037))
  * [`a28910b14f`](https://github.com/containerd/containerd/commit/a28910b14ffc8ff5098d14e2f776dfc6b1857afe) chore(api): update github.com/sirupsen/logrus v1.10.2
* Update CI to include Go 1.27 ([#14033](https://github.com/containerd/containerd/pull/14033))
  * [`8d32443320`](https://github.com/containerd/containerd/commit/8d324433204e2191332f4ab43894c8591ebf7653) Update CI to include Go 1.27
* vendor: github.com/containerd/go-runc v1.2.1 ([#14038](https://github.com/containerd/containerd/pull/14038))
  * [`704ca21342`](https://github.com/containerd/containerd/commit/704ca21342b06de4828b6be7d8dddc0d46df9d77) vendor: github.com/containerd/go-runc v1.2.1
* erofs: instrument warm up cache ([#13941](https://github.com/containerd/containerd/pull/13941))
  * [`81c272b28d`](https://github.com/containerd/containerd/commit/81c272b28db4f810a113eb958388143a2cc40d61) erofs: instrument the layer content cache and applies
* Remove shim.Command form pkg ([#13991](https://github.com/containerd/containerd/pull/13991))
  * [`55c39f2516`](https://github.com/containerd/containerd/commit/55c39f25160a250814babbc018bb8c0b2f403f1a) Move shim.Command to runtime
* pkg/tracing: handle error and typed-nil Stringer attributes ([#14013](https://github.com/containerd/containerd/pull/14013))
  * [`442969ef0e`](https://github.com/containerd/containerd/commit/442969ef0e79fab04656b50aaf2e85789512315d) pkg/tracing: handle error and typed-nil Stringer attributes
* docker fetcher: strip sensitive headers on descriptor URLs ([#12889](https://github.com/containerd/containerd/pull/12889))
  * [`51cf999e92`](https://github.com/containerd/containerd/commit/51cf999e92d6918aea835547d23de0e5fe49cab6) core/remotes/docker: normalize descriptor URL origins
  * [`5b3ce72589`](https://github.com/containerd/containerd/commit/5b3ce72589093bf122cfe3a7415ad447b28cc741) core/remotes/docker: strip sensitive headers on desc.urls fetch
* metadata: bound snapshotter Remove during garbage collection ([#13799](https://github.com/containerd/containerd/pull/13799))
  * [`a9d5caf7fc`](https://github.com/containerd/containerd/commit/a9d5caf7fc8488ec4ad9a2c006190cfcf6256515) metadata: bound snapshotter Remove during garbage collection
* build(deps): bump github.com/checkpoint-restore/checkpointctl from 1.5.0 to 1.6.0 ([#14009](https://github.com/containerd/containerd/pull/14009))
  * [`64f05273e3`](https://github.com/containerd/containerd/commit/64f05273e30ee724508aa9fbf9ab4ff24baeba65) build(deps): bump github.com/checkpoint-restore/checkpointctl
* build(deps): bump github.com/moby/sys/userns from 0.1.0 to 0.2.0 in the moby-sys group ([#14008](https://github.com/containerd/containerd/pull/14008))
  * [`0880064dea`](https://github.com/containerd/containerd/commit/0880064deac006004203eef8401950fdcb83342c) build(deps): bump github.com/moby/sys/userns in the moby-sys group
* build(deps): bump the k8s group across 1 directory with 2 updates ([#14007](https://github.com/containerd/containerd/pull/14007))
  * [`b86bc4be52`](https://github.com/containerd/containerd/commit/b86bc4be52671060f3eaf9942ebbbbad8e2c38a8) build(deps): bump the k8s group across 1 directory with 2 updates
* Bump go-runc to 1.2.0 ([#14006](https://github.com/containerd/containerd/pull/14006))
  * [`10cf7114e6`](https://github.com/containerd/containerd/commit/10cf7114e62f381d6e427e41498cea9525965f0d) Bump go-runc to 1.2.0
* vendor: tags.cncf.io/container-device-interface 05ae4b5bb730 ([#14004](https://github.com/containerd/containerd/pull/14004))
  * [`1448bcd8f0`](https://github.com/containerd/containerd/commit/1448bcd8f0a363e92bb3b3671bc729bb0a97a4e6) vendor: tags.cncf.io/container-device-interface 05ae4b5bb730
* build(deps): bump actions/attest-build-provenance from 4.1.1 to 4.2.2 ([#13965](https://github.com/containerd/containerd/pull/13965))
  * [`0db88d7f83`](https://github.com/containerd/containerd/commit/0db88d7f836e30cb2298c4675b6902cf29aa4671) build(deps): bump actions/attest-build-provenance from 4.1.1 to 4.2.2
* internal/cri/server: remove remaining uses of k8s.io/utils ([#14003](https://github.com/containerd/containerd/pull/14003))
  * [`10e82fac8d`](https://github.com/containerd/containerd/commit/10e82fac8d87ac5eb2386cd01f83eb7ac817964e) internal/cri/server: remove remaining uses of k8s.io/utils
* vendor: github.com/sirupsen/logrus v1.10.1 ([#13294](https://github.com/containerd/containerd/pull/13294))
  * [`f511928a11`](https://github.com/containerd/containerd/commit/f511928a111fa89fc3009e7b91a81c6ef2d7bc69) vendor: github.com/sirupsen/logrus v1.10.1
* vendor: github.com/containerd/platforms v1.0.0-rc.5 ([#14001](https://github.com/containerd/containerd/pull/14001))
  * [`0d797891bb`](https://github.com/containerd/containerd/commit/0d797891bb9a0fd67ef9450e5dbf36d6c35e2d31) vendor: github.com/containerd/platforms v1.0.0-rc.5
* vendor: github.com/stretchr/testify v1.12.1 ([#13973](https://github.com/containerd/containerd/pull/13973))
  * [`c351cf4682`](https://github.com/containerd/containerd/commit/c351cf4682e9d2bd53e919594dfa75dbcc4d94c4) vendor: github.com/stretchr/testify v1.12.1
* internal/cri/server/events: use testing/synctest ([#13997](https://github.com/containerd/containerd/pull/13997))
  * [`f7e8f30a05`](https://github.com/containerd/containerd/commit/f7e8f30a05faf6e530db67f4830bea5e993b4062) internal/cri/server/events: use testing/synctest
* pkg/shim: Report bootstrap API mismatch on startup ([#13910](https://github.com/containerd/containerd/pull/13910))
  * [`85385a4c33`](https://github.com/containerd/containerd/commit/85385a4c339ff3ec371e9850f68a610e1a2c6c7e) pkg/shim: Report bootstrap API mismatch on startup
* internal/cri/bandwidth: remove dead code ([#13996](https://github.com/containerd/containerd/pull/13996))
  * [`fcb54dc5fa`](https://github.com/containerd/containerd/commit/fcb54dc5fac7daa5ae039d3484128549defcd89f) internal/cri/bandwidth: remove dead code
* pkg/oci: resolve rootfs symlinks for user lookup ([#13818](https://github.com/containerd/containerd/pull/13818))
  * [`a8fc3a0172`](https://github.com/containerd/containerd/commit/a8fc3a017297f9ac4a28b115f9b706a90f497851) pkg/oci: resolve rootfs symlinks for user lookup
* Revert "add check on version of drop in configs" ([#13939](https://github.com/containerd/containerd/pull/13939))
  * [`c8da81e49b`](https://github.com/containerd/containerd/commit/c8da81e49b4d43c1cd67faf918cedce116b0547a) ensure that the final config version is the higest in the config list
  * [`a8ed546687`](https://github.com/containerd/containerd/commit/a8ed546687310b39c3779a784333e5bad7e8b516) Revert "add check on version of drop in configs"
* shim: use PublisherOpts when creating new publisher ([#13989](https://github.com/containerd/containerd/pull/13989))
  * [`014e20a87f`](https://github.com/containerd/containerd/commit/014e20a87f662f7aa233f16ef24d009c0527842f) shim: apply PublisherOpts
* script/setup: update critools to v1.36.0 ([#13992](https://github.com/containerd/containerd/pull/13992))
  * [`920978fd61`](https://github.com/containerd/containerd/commit/920978fd61ff185b93931c045fa194b2718d2af2) script/setup: update critools to v1.36.0
* build(deps): bump github.com/klauspost/compress from 1.19.1 to 1.19.2 ([#13962](https://github.com/containerd/containerd/pull/13962))
  * [`da7420a420`](https://github.com/containerd/containerd/commit/da7420a420c8dcb764f1cc860cbea298032ccbcc) build(deps): bump github.com/klauspost/compress from 1.19.1 to 1.19.2
* update runhcs to v0.15.0-rc.4 ([#13984](https://github.com/containerd/containerd/pull/13984))
  * [`4ad9d13181`](https://github.com/containerd/containerd/commit/4ad9d13181f7d49670c08dc302fd3f1bfa809522) update runhcs to v0.15.0-rc.4
* vendor: github.com/Microsoft/hcsshim v0.15.0-rc.4 ([#13985](https://github.com/containerd/containerd/pull/13985))
  * [`972ef71c84`](https://github.com/containerd/containerd/commit/972ef71c84621d4d49883e01bd1983ee98b10f87) vendor: github.com/Microsoft/hcsshim v0.15.0-rc.4
  * [`6e6518a155`](https://github.com/containerd/containerd/commit/6e6518a1559f66e6ad491489a233a3bf629752c2) vendor: go.opentelemetry.io/otel v1.45.0, go.opentelemetry.io/contrib v0.70.0
  * [`9023b7eb12`](https://github.com/containerd/containerd/commit/9023b7eb120b2d6b9717f97b936ca9d7bbf5f5aa) vendor: google.golang.org/protobuf v1.36.12
  * [`ee2255275b`](https://github.com/containerd/containerd/commit/ee2255275b96ceafb65547768dbef0fa6cbcf9e1) vendor: google.golang.org/genproto/* 6ac0973c030d
  * [`389f75a955`](https://github.com/containerd/containerd/commit/389f75a9559b59247af28f624862a37d0a1f2f84) vendor: google.golang.org/grpc v1.83.1
  * [`444ecd0be0`](https://github.com/containerd/containerd/commit/444ecd0be093f588aec660aa715ab62e1afb830c) vendor: github.com/go-logr/logr v1.4.4
  * [`26c040fb40`](https://github.com/containerd/containerd/commit/26c040fb40c6f8dd23a316e038ecd7a735e57ec1) vendor: github.com/felixge/httpsnoop v1.1.0
  * [`d1df90fb51`](https://github.com/containerd/containerd/commit/d1df90fb51f13a0061fbf2c78a00dcf522b63dd0) vendor: golang.org/x/mod v0.40.0
  * [`e994dd627a`](https://github.com/containerd/containerd/commit/e994dd627a69de6cf95c8916265cc5fe066ab3f8) vendor: golang.org/x/net v0.58.0
  * [`4fb52e086c`](https://github.com/containerd/containerd/commit/4fb52e086c3f0ad7049d7a6fb69d972e2217bb44) vendor: golang.org/x/crypto v0.55.0
  * [`99178d1e2e`](https://github.com/containerd/containerd/commit/99178d1e2ee7c2417ace729673d262726c8d81e8) vendor: golang.org/x/text v0.41.0
  * [`f6b36c43af`](https://github.com/containerd/containerd/commit/f6b36c43aff61e5c5e43d212a545481ade3cae36) vendor: golang.org/x/mod v0.39.0
* cri, nri: record resolved image name and digest in container metadata ([#13960](https://github.com/containerd/containerd/pull/13960))
  * [`203578e2eb`](https://github.com/containerd/containerd/commit/203578e2eb817db3045b92091260a21f478aa252) cri,nri: record resolved image name and digest in container metadata
  * [`8c4ccd2984`](https://github.com/containerd/containerd/commit/8c4ccd2984663d90b814b7fcfafb942c60ed7405) build: bump github.com/containerd/nri
* Export config in CRI plugin ([#13940](https://github.com/containerd/containerd/pull/13940))
  * [`93f38adbca`](https://github.com/containerd/containerd/commit/93f38adbca76f09ddb5bf9aa460cda502435c737) Export config in CRI plugin
* runtime: invoke Shutdown after every task deletion ([#13958](https://github.com/containerd/containerd/pull/13958))
  * [`402eb3166e`](https://github.com/containerd/containerd/commit/402eb3166e088938090c759965f2ea7a3bbf22d4) runtime: invoke Shutdown after every task deletion
* implement Windows support for the shim server ([#13948](https://github.com/containerd/containerd/pull/13948))
  * [`3bb3d8b7c6`](https://github.com/containerd/containerd/commit/3bb3d8b7c67ecc943e71cb87e150febe91b6df6b) address copilot comments
  * [`983dcf4987`](https://github.com/containerd/containerd/commit/983dcf49877f4b20db8c303e30bc5534d9487558) [pkg/shim] Implement Windows-specific unimplemented methods
* fix(runtime): apply load timeout to load shim ([#13954](https://github.com/containerd/containerd/pull/13954))
  * [`fd29ff1073`](https://github.com/containerd/containerd/commit/fd29ff1073de96f6c50ee2bdf92ae23edac2b567) fix(runtime): bound shim loading with the load timeout
* Update Go to 1.26.6 ([#13957](https://github.com/containerd/containerd/pull/13957))
  * [`b665fde220`](https://github.com/containerd/containerd/commit/b665fde220ff77431f28671253329285542a37e0) Update Go to 1.26.6
* cri: add tracing spans for image pull and sandbox setup paths ([#12628](https://github.com/containerd/containerd/pull/12628))
  * [`0d8883b6dc`](https://github.com/containerd/containerd/commit/0d8883b6dcb915bf5683f454b860cc9f90537e48) client: trace image pull stages
* ctr: drain exec output before cleanup ([#13931](https://github.com/containerd/containerd/pull/13931))
  * [`3778cc36f4`](https://github.com/containerd/containerd/commit/3778cc36f4cdecf0d8437c0c69cdeb33243492bc) ctr: drain exec output before cleanup
* snapshots/erofs: protect snapshot staging from cleanup ([#13932](https://github.com/containerd/containerd/pull/13932))
  * [`e940b5ac18`](https://github.com/containerd/containerd/commit/e940b5ac18e8f9e31d7cb4fd3336b85a67557690) snapshots/erofs: protect snapshot staging from cleanup
* build(deps): bump docker/login-action from 4.4.0 to 4.6.0 in the docker-actions group across 1 directory ([#13886](https://github.com/containerd/containerd/pull/13886))
  * [`3dd83f6774`](https://github.com/containerd/containerd/commit/3dd83f67748308c4a6aeb1f394064e5599d834af) build(deps): bump docker/login-action
* build(deps): bump the codeql-actions group with 3 updates ([#13922](https://github.com/containerd/containerd/pull/13922))
  * [`cd9113b9d5`](https://github.com/containerd/containerd/commit/cd9113b9d5080672d16432d153894c043c6d4181) build(deps): bump the codeql-actions group with 3 updates
* build(deps): bump actions/stale from 10.4.0 to 11.0.0 ([#13923](https://github.com/containerd/containerd/pull/13923))
  * [`c013c7df4d`](https://github.com/containerd/containerd/commit/c013c7df4de764b972093164811a3953e1625ee6) build(deps): bump actions/stale from 10.4.0 to 11.0.0
* nri,deprecation: record and emit warnings for NRI deprecations. ([#13916](https://github.com/containerd/containerd/pull/13916))
  * [`bf0111a9cc`](https://github.com/containerd/containerd/commit/bf0111a9cce941c99c347402da48b1ef85057ad3) nri,deprecation: emit warnings for old NRI plugins.
* Add more context to the shim delete error ([#13912](https://github.com/containerd/containerd/pull/13912))
  * [`29058e6501`](https://github.com/containerd/containerd/commit/29058e6501b1db3a17072edcf92ecdab0ab010ee) Add more context to the shim delete error
* Remove dependency on `github.com/opencontainers/runtime-tools` ([#13519](https://github.com/containerd/containerd/pull/13519))
  * [`e01c004cc6`](https://github.com/containerd/containerd/commit/e01c004cc6edaf1c671d91dc303ec1e302373d95) Remove dependency on `github.com/opencontainers/runtime-tools`
* Set the default of runtimeFeatures.UserNamespacesHostNetwork to true ([#13162](https://github.com/containerd/containerd/pull/13162))
  * [`a909c305c4`](https://github.com/containerd/containerd/commit/a909c305c42acf2dea318f51ac8a4175be375ed7) Set the default of runtimeFeatures.UserNamespacesHostNetwork to true
* docs: update erofs docs ([#13907](https://github.com/containerd/containerd/pull/13907))
  * [`0d21db6bf5`](https://github.com/containerd/containerd/commit/0d21db6bf5fb869f515a9b1ca26ecce172871ff0) docs: reflow the erofs tar index mode section
  * [`a23e4a127a`](https://github.com/containerd/containerd/commit/a23e4a127a580759c24138a96e45b32347ffd1f3) docs: document the erofs layer content cache
* unpack: don't drop topHalf errors in parallel mode ([#13902](https://github.com/containerd/containerd/pull/13902))
  * [`a35da471f3`](https://github.com/containerd/containerd/commit/a35da471f36265ff4e4c62c2a47aa230aba49bb3) unpack: don't drop topHalf errors in parallel mode
* cri: fix container_start_time_seconds unit conversion ([#13897](https://github.com/containerd/containerd/pull/13897))
  * [`71bc89b288`](https://github.com/containerd/containerd/commit/71bc89b2885fcb5c85e73457056a42c57b6d6897) cri: fix container_start_time_seconds unit conversion
* remotes/docker: Propagate registry warnings to the resolver ([#12698](https://github.com/containerd/containerd/pull/12698))
  * [`80975e2c75`](https://github.com/containerd/containerd/commit/80975e2c75f4c72a5a4a7c6afbe320634f5e1ad4) remotes/docker: Propagate registry warnings to resolver
* bump selinux to v1.15.1, use SetProcessKind ([#13395](https://github.com/containerd/containerd/pull/13395))
  * [`ba3a464b8d`](https://github.com/containerd/containerd/commit/ba3a464b8dbbae3481b8f5b9a6e8b665845caf40) bump oc/selinux to v1.15.1, use SetProcessKind
  * [`4167499888`](https://github.com/containerd/containerd/commit/416749988858ac217df215a27687f4acf4117068) deps: bump oc/selinux to v1.14.1
* erofs: allow multiple cache directories ([#13900](https://github.com/containerd/containerd/pull/13900))
  * [`7df6bb0a67`](https://github.com/containerd/containerd/commit/7df6bb0a67eff453df5a7b753704edb574d8f326) erofs: allow multiple layer content cache directories
* Update api version to v1.12.0-beta.0 ([#13906](https://github.com/containerd/containerd/pull/13906))
  * [`a272df5685`](https://github.com/containerd/containerd/commit/a272df568584d45ccc559bd1019e748d604952cb) Update api version to v1.12.0-beta.0
* build(deps): bump the codeql-actions group with 3 updates ([#13885](https://github.com/containerd/containerd/pull/13885))
  * [`406c8dc44a`](https://github.com/containerd/containerd/commit/406c8dc44af3e44017b146762ebddf2ec9be5afa) build(deps): bump the codeql-actions group with 3 updates
* Prepare release notes for api/v1.12.0-beta.0 ([#13899](https://github.com/containerd/containerd/pull/13899))
  * [`0ff04dc3f7`](https://github.com/containerd/containerd/commit/0ff04dc3f7934523f6a2001e67d9572d4a9d4885) Prepare release notes for api/v1.12.0-beta.0
* erofs: enable parallel unpack with content cache ([#13826](https://github.com/containerd/containerd/pull/13826))
  * [`257a5900b0`](https://github.com/containerd/containerd/commit/257a5900b054c157ef87e85f889cd33887b342f9) core/unpack: detect staged layers via read-only mounts
  * [`1e001e6dfe`](https://github.com/containerd/containerd/commit/1e001e6dfe711e3d81582e94e30162bbd889ba48) erofs: make the layer content cache work with parallel unpack
* cri: skip failed container instead of dropping entire sandbox metrics ([#13896](https://github.com/containerd/containerd/pull/13896))
  * [`34524e8a68`](https://github.com/containerd/containerd/commit/34524e8a689107e8c6f1bfb844457d2f70b2db83) cri: skip failed container instead of dropping entire sandbox metrics
* ctr: register EROFS fsview ([#13891](https://github.com/containerd/containerd/pull/13891))
  * [`0d37ad2683`](https://github.com/containerd/containerd/commit/0d37ad2683f32544ac565e326746c2e76418ef28) ctr: register EROFS fsview
* Prepare release notes for v2.4.0-beta.0 ([#13865](https://github.com/containerd/containerd/pull/13865))
  * [`f46e608b9b`](https://github.com/containerd/containerd/commit/f46e608b9ba263dfd809b983f67f377c79d3c063) Prepare release notes for v2.4.0-beta.0
* cri: remove restore in CreateContainer ([#13871](https://github.com/containerd/containerd/pull/13871))
  * [`91be73ba62`](https://github.com/containerd/containerd/commit/91be73ba6233ffcf6e652710bfec6b4127bdd5c2) cri: remove restore in CreateContainer
* integration: build the whiteout-test image locally ([#13735](https://github.com/containerd/containerd/pull/13735))
  * [`f418688f2c`](https://github.com/containerd/containerd/commit/f418688f2ccf048f79b89dd634190db9054fce58) integration: build the whiteout-test image locally
* docs/security: update security report triage criteria ([#13873](https://github.com/containerd/containerd/pull/13873))
  * [`fdf814c21a`](https://github.com/containerd/containerd/commit/fdf814c21a379caf5327141c28422ba06da92bd8) docs/security: update security report triage criteria
* snapshots/erofs: keep lowers stacked above a merged fsmeta ([#13860](https://github.com/containerd/containerd/pull/13860))
  * [`01f5087866`](https://github.com/containerd/containerd/commit/01f508786623f0fb49d50b42f3e3975155d24b80) snapshots/erofs: keep lowers stacked above a merged fsmeta
* build(deps): bump github.com/containerd/imgcrypt/v2 from 2.0.2 to 2.0.3 ([#13862](https://github.com/containerd/containerd/pull/13862))
  * [`fbbe206722`](https://github.com/containerd/containerd/commit/fbbe206722df93289a3ac31faa404a8ae12d5a77) build(deps): bump github.com/containerd/imgcrypt/v2 from 2.0.2 to 2.0.3
* workflows/stale: exempt priority and status labels ([#13869](https://github.com/containerd/containerd/pull/13869))
  * [`565606decf`](https://github.com/containerd/containerd/commit/565606decf292fcbb0c215ca6066732b9adbe7d9) workflows/stale: exempt priority and status labels
* cri: deprecate restore in CreateContainer ([#13838](https://github.com/containerd/containerd/pull/13838))
  * [`a3f99ba690`](https://github.com/containerd/containerd/commit/a3f99ba6900c4f3a25bfbc32e6f2fba84cd00468) cri: deprecate restore in CreateContainer
* internal/oom: Fix memory leak by removing watcher from map on Stop ([#13856](https://github.com/containerd/containerd/pull/13856))
  * [`7f9455628a`](https://github.com/containerd/containerd/commit/7f9455628a53c20e33956c49d33ef0ab65f6e071) internal/oom: Fix memory leak by removing watcher from map on Stop
* build(deps): bump github.com/klauspost/compress from 1.19.0 to 1.19.1 ([#13861](https://github.com/containerd/containerd/pull/13861))
  * [`7fdc69ca0c`](https://github.com/containerd/containerd/commit/7fdc69ca0c70775aef6a7503c0e70e3edf0d01f5) build(deps): bump github.com/klauspost/compress from 1.19.0 to 1.19.1
* build(deps): bump github.com/prometheus/client_golang from 1.23.2 to 1.24.0 ([#13863](https://github.com/containerd/containerd/pull/13863))
  * [`af9ded8e88`](https://github.com/containerd/containerd/commit/af9ded8e8873266e96587f8baec6e9a75ff96ce6) build(deps): bump github.com/prometheus/client_golang
* build(deps): bump the codeql-actions group with 3 updates ([#13864](https://github.com/containerd/containerd/pull/13864))
  * [`ef89efe0d0`](https://github.com/containerd/containerd/commit/ef89efe0d0f280bf3626b4bd111f6190c1e77ae9) build(deps): bump the codeql-actions group with 3 updates
* ci: dependabot: group docker/* and codeql action updates ([#13847](https://github.com/containerd/containerd/pull/13847))
  * [`069df6c325`](https://github.com/containerd/containerd/commit/069df6c325876e18221da9059f2c8e5195b94f28) ci: dependabot: group docker/* and codeql action updates
* Use ScrubLogs by default on Windows ([#13837](https://github.com/containerd/containerd/pull/13837))
  * [`18a01c0020`](https://github.com/containerd/containerd/commit/18a01c0020c5d9bdb6d6d4850ffb37b74e6959ee) ctr: add --scrub-logs flag for Windows
  * [`f4e7944625`](https://github.com/containerd/containerd/commit/f4e79446256734cddf3f8178edb10a8323264307) cri/config: use ScrubLogs by default on Windows
* pkg/epoch: reject negative SOURCE_DATE_EPOCH values ([#13817](https://github.com/containerd/containerd/pull/13817))
  * [`41f6f0e877`](https://github.com/containerd/containerd/commit/41f6f0e87705f15f273cc25107fd7c1dabd1431e) pkg/epoch: reject negative SOURCE_DATE_EPOCH values
* build(deps): bump actions/checkout from 7.0.0 to 7.0.1 ([#13844](https://github.com/containerd/containerd/pull/13844))
  * [`4fa23707c8`](https://github.com/containerd/containerd/commit/4fa23707c89e8244878e12a1b98e3f59795082b0) build(deps): bump actions/checkout from 7.0.0 to 7.0.1
* build(deps): bump google.golang.org/grpc from 1.82.0 to 1.82.1 ([#13842](https://github.com/containerd/containerd/pull/13842))
  * [`c8fdb63ea1`](https://github.com/containerd/containerd/commit/c8fdb63ea194f05bef962fb758a75641a3b8fcf0) build(deps): bump google.golang.org/grpc from 1.82.0 to 1.82.1
* core/runtime/v2: Drop checkpointctl module dependency ([#13839](https://github.com/containerd/containerd/pull/13839))
  * [`9c6b71c95c`](https://github.com/containerd/containerd/commit/9c6b71c95c8486226eb480bc1b316a0fca2255c4) core/runtime/v2: Drop checkpointctl module dependency
* Include media type in content create event ([#13833](https://github.com/containerd/containerd/pull/13833))
  * [`a452c2e230`](https://github.com/containerd/containerd/commit/a452c2e2304d43f48299ed2663ed82673b25be81) Include media type in content create event
* build(deps): bump github.com/fsnotify/fsnotify from 1.9.0 to 1.10.1 ([#13343](https://github.com/containerd/containerd/pull/13343))
  * [`b1085e19b7`](https://github.com/containerd/containerd/commit/b1085e19b75310d2b480b07a83d99939b2941b98) build(deps): bump github.com/fsnotify/fsnotify from 1.9.0 to 1.10.1
* cri: add streaming RPCs ([#13187](https://github.com/containerd/containerd/pull/13187))
  * [`47c7085d22`](https://github.com/containerd/containerd/commit/47c7085d222160d8d944ef55251c963d62036e03) cri: add streaming RPCs
* Handle []byte envvar value for CRI ([#13453](https://github.com/containerd/containerd/pull/13453))
  * [`b824ddc0b5`](https://github.com/containerd/containerd/commit/b824ddc0b5bc882ce0bad8564fc28c64e67458ab) Handle []byte envvar value
  * [`78abbfb7f7`](https://github.com/containerd/containerd/commit/78abbfb7f7c0459ffe5ee81ae2f2740b9de591ad) update to v0.36.x kubernetes dependencies
* build(deps): bump github.com/erofs/go-erofs from 0.3.0 to 0.3.1 ([#13820](https://github.com/containerd/containerd/pull/13820))
  * [`6e4c6acc0d`](https://github.com/containerd/containerd/commit/6e4c6acc0dc4b81b25f5008ec20e8ed6bc4cac5f) build(deps): bump github.com/erofs/go-erofs from 0.3.0 to 0.3.1
* shim_load: Consider shim leaked only if we can't find pids ([#13790](https://github.com/containerd/containerd/pull/13790))
  * [`54a5a606cb`](https://github.com/containerd/containerd/commit/54a5a606cb8438cafe483507c8dbeedcfc963e8b) shim_load: Consider shim leaked only if we can't find pids
* Fix flaky CI on windows ([#13827](https://github.com/containerd/containerd/pull/13827))
  * [`dd654ecca0`](https://github.com/containerd/containerd/commit/dd654ecca04082541f953062f8008fa3e78d9ee7) Fix does not contain \x00 on windows
  * [`5c620e984f`](https://github.com/containerd/containerd/commit/5c620e984fdae621e910e74454dac2124f6a9903) Fix NET/network CI failure on Windows
* build: bump github.com/containerd/nri ([#13812](https://github.com/containerd/containerd/pull/13812))
  * [`5d35f9ef97`](https://github.com/containerd/containerd/commit/5d35f9ef9774e64f012c801c12af6e5c2ff2d729) build: bump github.com/containerd/nri
* build(deps): bump golang.org/x/net from 0.51.0 to 0.55.0 in /api ([#13819](https://github.com/containerd/containerd/pull/13819))
  * [`52c5f1f64e`](https://github.com/containerd/containerd/commit/52c5f1f64e2184af56f3550940db29ccdb94e576) build(deps): bump golang.org/x/net from 0.51.0 to 0.55.0 in /api
* docs: correct default for [debug] address ([#13821](https://github.com/containerd/containerd/pull/13821))
  * [`1a7d78e0b9`](https://github.com/containerd/containerd/commit/1a7d78e0b9bbd5a756d316acf592ec619f506231) docs: correct default for [debug] address
* Support warm image cache for erofs snapshotter ([#13813](https://github.com/containerd/containerd/pull/13813))
  * [`82a47efe92`](https://github.com/containerd/containerd/commit/82a47efe92a079b0cd9837a2e2a5fb1b6822e5c8) Support dmverity
  * [`f52e748f16`](https://github.com/containerd/containerd/commit/f52e748f164d0a90fdea9effd1bcb90df9f64336) ctr: add build-erofs-cache to populate the erofs layer cache
  * [`728093bdca`](https://github.com/containerd/containerd/commit/728093bdca8837673ed43eb17821a53c28d9ee80) snapshots/erofs: source pre-converted layers from a content cache
* docs: add threat model and triage guide ([#12942](https://github.com/containerd/containerd/pull/12942))
  * [`3a3eddcbf9`](https://github.com/containerd/containerd/commit/3a3eddcbf99b741dda7b0b8aad1059cab6a251a6) docs: add threat model and triage guide
* build(deps): bump golang.org/x/mod from 0.37.0 to 0.38.0 in the golang-x group ([#13806](https://github.com/containerd/containerd/pull/13806))
  * [`9ead7c087d`](https://github.com/containerd/containerd/commit/9ead7c087df39b1d07f0e24e28e76a8172d0fdf5) build(deps): bump golang.org/x/mod in the golang-x group
* build(deps): bump actions/attest-build-provenance from 4.1.0 to 4.1.1 ([#13688](https://github.com/containerd/containerd/pull/13688))
  * [`43866c6a3f`](https://github.com/containerd/containerd/commit/43866c6a3f8d311196ccd9e3131c06257dbc6103) build(deps): bump actions/attest-build-provenance from 4.1.0 to 4.1.1
* fsmount: Fix selinux mount parameter parsing ([#13754](https://github.com/containerd/containerd/pull/13754))
  * [`dd2bcfc643`](https://github.com/containerd/containerd/commit/dd2bcfc6438e51ca8eae7f72543fcfd7034cdd39) fsmount: Fix selinux mount parameter parsing
* build(deps): bump github/codeql-action/upload-sarif from 4.36.2 to 4.37.0 ([#13810](https://github.com/containerd/containerd/pull/13810))
  * [`624c8e85bd`](https://github.com/containerd/containerd/commit/624c8e85bdf66985038097ec4e1a2539e3bf4055) build(deps): bump github/codeql-action/upload-sarif
* build(deps): bump docker/setup-buildx-action from 4.1.0 to 4.2.0 ([#13765](https://github.com/containerd/containerd/pull/13765))
  * [`51355849a7`](https://github.com/containerd/containerd/commit/51355849a7299cadb066c8f42ad7987035429229) build(deps): bump docker/setup-buildx-action from 4.1.0 to 4.2.0
* build(deps): bump docker/login-action from 4.2.0 to 4.4.0 ([#13772](https://github.com/containerd/containerd/pull/13772))
  * [`a9bb893ecb`](https://github.com/containerd/containerd/commit/a9bb893ecbefc861a66ce614d02a1ad35c3265ad) build(deps): bump docker/login-action from 4.2.0 to 4.4.0
* build(deps): bump github.com/pelletier/go-toml/v2 from 2.4.2 to 2.4.3 ([#13807](https://github.com/containerd/containerd/pull/13807))
  * [`10e0d68a94`](https://github.com/containerd/containerd/commit/10e0d68a948f1dcee27992e922bb1e0f98e9ba59) build(deps): bump github.com/pelletier/go-toml/v2 from 2.4.2 to 2.4.3
* build(deps): bump actions/stale from 10.3.0 to 10.4.0 ([#13811](https://github.com/containerd/containerd/pull/13811))
  * [`a4b1e9a44b`](https://github.com/containerd/containerd/commit/a4b1e9a44b319b68b4339411445ccf4af0b0d708) build(deps): bump actions/stale from 10.3.0 to 10.4.0
* README: remove Go Report Card badge ([#13741](https://github.com/containerd/containerd/pull/13741))
  * [`5de7b675c6`](https://github.com/containerd/containerd/commit/5de7b675c652181b2476ea3d7f8e6c51a82cfef2) README: remove Go Report Card badge
* overlay: don't override a configured index mount option ([#13805](https://github.com/containerd/containerd/pull/13805))
  * [`5e25f36e5e`](https://github.com/containerd/containerd/commit/5e25f36e5e23fdd759cbc87fb3dad61e7742da10) overlay: don't override a configured index mount option
* core/mount/manager: improve TestMkdirHandler failure messages ([#13800](https://github.com/containerd/containerd/pull/13800))
  * [`807fbc13dc`](https://github.com/containerd/containerd/commit/807fbc13dcff3ecf77e0b9add9d575146e8256d3) core/mount/manager: improve TestMkdirHandler failure messages
* core/runtime/v2: Preserve protobuf shim response bytes ([#13801](https://github.com/containerd/containerd/pull/13801))
  * [`dac4ea43f3`](https://github.com/containerd/containerd/commit/dac4ea43f366561df1931ef4a4b4cd7fd27f80c5) core/runtime/v2: Preserve protobuf shim response bytes
* Run CI against dev branches ([#13748](https://github.com/containerd/containerd/pull/13748))
  * [`6c438b0479`](https://github.com/containerd/containerd/commit/6c438b0479adfe31c1b2e3420e905c858c4eac6b) Run CI against dev branches
* Raise stale bot limits ([#13780](https://github.com/containerd/containerd/pull/13780))
  * [`12f6a4d585`](https://github.com/containerd/containerd/commit/12f6a4d585448729e3101906087e08b31a33d26b) Raise stale bot limits
* pkg/archive: reject out-of-range device numbers in layer headers ([#13792](https://github.com/containerd/containerd/pull/13792))
  * [`0205398ac2`](https://github.com/containerd/containerd/commit/0205398ac25d256ca90f76f4981e57e0dfb5a3aa) pkg/archive: reject out-of-range device numbers in layer headers
* blockcim config and plugin initialization changes ([#13469](https://github.com/containerd/containerd/pull/13469))
  * [`5ae5d993e6`](https://github.com/containerd/containerd/commit/5ae5d993e6edeffb94ef18a7f2270d805d1725e3) use IsBlockCimWriteSupported for block CIM plugin init checks
  * [`8fbeab28d2`](https://github.com/containerd/containerd/commit/8fbeab28d263a3a0bbea4bbe398e449725f11015) Fix incorrect default config value for block CIM snapshotter
* update runc to v1.5.1 ([#13791](https://github.com/containerd/containerd/pull/13791))
  * [`21efcf19a4`](https://github.com/containerd/containerd/commit/21efcf19a402cc15a45a00a94321c8e463a0d5e9) update runc to v1.5.1
* ci: bound Go fuzzing by execution count ([#13757](https://github.com/containerd/containerd/pull/13757))
  * [`c1b9b78f47`](https://github.com/containerd/containerd/commit/c1b9b78f473f2936fb5d3f06b147d0a01f7a12dc) ci: bound Go fuzzing by execution count
* Introspect OCI runtime features for non-runc runtimes ([#13504](https://github.com/containerd/containerd/pull/13504))
  * [`fd7819bcb7`](https://github.com/containerd/containerd/commit/fd7819bcb7d5fa60d2e05861b64eed758840020f) fix(cri): introspect OCI runtime features for non-runc runtimes
* build(deps): bump github.com/klauspost/compress from 1.18.6 to 1.19.0 ([#13768](https://github.com/containerd/containerd/pull/13768))
  * [`61a70e7ef2`](https://github.com/containerd/containerd/commit/61a70e7ef2d1fa611065fff1fdfd83505bb0f87a) build(deps): bump github.com/klauspost/compress from 1.18.6 to 1.19.0
* build(deps): bump the golang-x group across 1 directory with 2 updates ([#13766](https://github.com/containerd/containerd/pull/13766))
  * [`d5657dbf64`](https://github.com/containerd/containerd/commit/d5657dbf64242a74ce463e30119ecbf31130538e) build(deps): bump the golang-x group across 1 directory with 2 updates
* build(deps): bump google.golang.org/grpc from 1.81.1 to 1.82.0 ([#13767](https://github.com/containerd/containerd/pull/13767))
  * [`bfae6f3513`](https://github.com/containerd/containerd/commit/bfae6f35131f6c40a48001aa3af4d534b89dbe25) build(deps): bump google.golang.org/grpc from 1.81.1 to 1.82.0
* build(deps): bump github.com/containerd/ttrpc to v1.2.9 ([#13740](https://github.com/containerd/containerd/pull/13740))
  * [`658a1c78b5`](https://github.com/containerd/containerd/commit/658a1c78b52e25002c9c26a504055c8d3af09ea3) build(deps): bump github.com/containerd/ttrpc to v1.2.9
* CI: migrate Vagrant to Lima ([#13728](https://github.com/containerd/containerd/pull/13728))
  * [`a42b09aaa6`](https://github.com/containerd/containerd/commit/a42b09aaa6719d5956b72fd6a2c6c164970bece2) CI: migrate Vagrant to Lima
* RELEASES.md: mark 2.1 EOL and update latest 1.7/2.0/2.1/2.2/2.3 tags ([#13739](https://github.com/containerd/containerd/pull/13739))
  * [`617944babe`](https://github.com/containerd/containerd/commit/617944babe00b8d7df7db31fca7b3bd913bd6e0b) RELEASES.md: mark 2.1 EOL and update latest 1.7/2.0/2.1/2.2/2.3 tags
* remotes: surface OCI error body in registry 4xx responses ([#13547](https://github.com/containerd/containerd/pull/13547))
  * [`5c66703ee3`](https://github.com/containerd/containerd/commit/5c66703ee37a122f813f9cd1cb37c792e9f7097c) remotes: surface OCI error body on HEAD 403 via GET fallback
* Disable checkpoint restore codepath when CRIU is not installed ([#13664](https://github.com/containerd/containerd/pull/13664))
  * [`81350a5d9a`](https://github.com/containerd/containerd/commit/81350a5d9a7a4299ed88ce188062badc986b9e6c) github/workflows: install criu in node-e2e
  * [`06495733b2`](https://github.com/containerd/containerd/commit/06495733b2c3b21433ec6e5d6e2e329726e3a181) cri: add enable_criu configuration option
  * [`186397511b`](https://github.com/containerd/containerd/commit/186397511b62120b4b99157005268339be84e796) cri: validate CRIU availability and version early
* Update go to 1.26.5 ([#13725](https://github.com/containerd/containerd/pull/13725))
  * [`2b017f12b5`](https://github.com/containerd/containerd/commit/2b017f12b5759e0298d13eb9c072ab652a7bf516) Update go to 1.26.5
* feat: add loong64 (LoongArch) build support ([#13642](https://github.com/containerd/containerd/pull/13642))
  * [`48c841fe2d`](https://github.com/containerd/containerd/commit/48c841fe2d17d76619e81760e842b825c7f13b95) feat: add loong64 (LoongArch) build support
* Add dockerfile for the whiteout-test test image ([#13704](https://github.com/containerd/containerd/pull/13704))
  * [`cb3c0f0665`](https://github.com/containerd/containerd/commit/cb3c0f0665266c3929f0bd0086d23bc653bacd56) Add dockerfile for the whiteout-test test image
* build(deps): bump actions/cache from 5.0.5 to 6.1.0 ([#13687](https://github.com/containerd/containerd/pull/13687))
  * [`ee7e56cac7`](https://github.com/containerd/containerd/commit/ee7e56cac79aff6970b56931582fe87f9baa5da3) build(deps): bump actions/cache from 5.0.5 to 6.1.0
* *: disable bbolt stat usage ([#13721](https://github.com/containerd/containerd/pull/13721))
  * [`0b7466980e`](https://github.com/containerd/containerd/commit/0b7466980e90aec50e497b05a0a7ebc937395cd5) *: disable bbolt stat usage
* build(deps): bump github.com/pelletier/go-toml/v2 from 2.4.1 to 2.4.2 ([#13672](https://github.com/containerd/containerd/pull/13672))
  * [`fb80dbbf94`](https://github.com/containerd/containerd/commit/fb80dbbf9419e3bb15fb04590d865a5c8b23dd86) build(deps): bump github.com/pelletier/go-toml/v2 from 2.4.1 to 2.4.2
* pkg/kernelversion: fix linting and sync with upstream ([#13701](https://github.com/containerd/containerd/pull/13701))
  * [`296f917d5d`](https://github.com/containerd/containerd/commit/296f917d5da0eaae4c12037240faa2d40b14a84d) pkg/kernelversion: update links to upstream source
  * [`c45f911980`](https://github.com/containerd/containerd/commit/c45f911980ca2e7582333898f28bc1086c09d3fd) pkg/kernelversion: simplify code with sync.OnceValues
  * [`5e3e05aec7`](https://github.com/containerd/containerd/commit/5e3e05aec7f54689f588166ee6bf790427a19e15) pkg/kernelversion: fix minor linting issues
  * [`762b89ceeb`](https://github.com/containerd/containerd/commit/762b89ceebbea1fa58c68c24c748f268fcfbb08f) pkg/kernelversion: use unix.ByteSliceToString for utsname fields
* Update stale PR policy ([#13716](https://github.com/containerd/containerd/pull/13716))
  * [`4f9bae6776`](https://github.com/containerd/containerd/commit/4f9bae6776084facc8e3de384d0abd50731f0700) Update stale PR policy
* ci: pin fog-json to resolve gem conflict ([#13707](https://github.com/containerd/containerd/pull/13707))
  * [`84112c78c1`](https://github.com/containerd/containerd/commit/84112c78c1f70e5f115ea777f0e878f59e1074d0) ci: pin fog-json to resolve gem conflict
* cri: auto-add prefix for pause image ([#13513](https://github.com/containerd/containerd/pull/13513))
  * [`c7d4057d47`](https://github.com/containerd/containerd/commit/c7d4057d47dd8c8187e6c145d254e0db201c9198) cri: auto-add prefix for pause image
* gha: pin remaining actions and apply hardening from zizmor ([#13597](https://github.com/containerd/containerd/pull/13597))
  * [`0f18307820`](https://github.com/containerd/containerd/commit/0f18307820499e8ef91b8bdb23fc25f0b12ee49a) gha: quote some values
  * [`0274924d74`](https://github.com/containerd/containerd/commit/0274924d743e94f9efc802f8fc054e68e4049076) gha: remove uses of "read-all" permissions
  * [`072a34d648`](https://github.com/containerd/containerd/commit/072a34d64804081aa4694732b3edfdfce4009f4f) gha: suppress zizmor warning for intentionally un-pinned workflows
  * [`9f0bb640ce`](https://github.com/containerd/containerd/commit/9f0bb640ce2f8775a3ad0f1383dfcaef82f8b6fb) gha: apply zizmor fixes
  * [`8722c46313`](https://github.com/containerd/containerd/commit/8722c4631378261544e2e69d78b978e170a477df) gha: buf-breaking: pin actions by sha
* Add parent path to runc checkpoint options ([#13699](https://github.com/containerd/containerd/pull/13699))
  * [`ea0ed51e21`](https://github.com/containerd/containerd/commit/ea0ed51e2101448874215c0de945197a1cafdea4) shim: allow specifying runc's --parent-path during checkpointing
* Fix nil pointer dereference in NRI GetIPs ([#13683](https://github.com/containerd/containerd/pull/13683))
  * [`c2dae310af`](https://github.com/containerd/containerd/commit/c2dae310af03dec3654ecbf8a0b846e86372766d) Fix nil pointer dereference in NRI GetIPs
* Set SystemTemp env var to config temp on Windows ([#13667](https://github.com/containerd/containerd/pull/13667))
  * [`faff4d66ba`](https://github.com/containerd/containerd/commit/faff4d66ba60734cf309d442266cb9a1d061e8a8) Set SystemTemp env var to config temp on Windows
* update runhcs to v0.15.0-rc.3 ([#13691](https://github.com/containerd/containerd/pull/13691))
  * [`7c9c25d649`](https://github.com/containerd/containerd/commit/7c9c25d649c5521daed619d5462a1d3ef347b1bc) update runhcs to v0.15.0-rc.3
* build(deps): bump github.com/Microsoft/hcsshim from 0.15.0-rc.1 to 0.15.0-rc.3 ([#13690](https://github.com/containerd/containerd/pull/13690))
  * [`d763407d4a`](https://github.com/containerd/containerd/commit/d763407d4aba357cfd3cd42ccc5d1ec19bf7a3bb) build(deps): bump github.com/Microsoft/hcsshim
* Use klauspost/compress/gzip for decode ([#13560](https://github.com/containerd/containerd/pull/13560))
  * [`d8f13bf4cc`](https://github.com/containerd/containerd/commit/d8f13bf4cce8b8a99ae61457cb574696fcf475e5) pkg/archive/compression: use klauspost/compress/gzip for decode
* cri: route sandbox stats through Controller.Metrics ([#13312](https://github.com/containerd/containerd/pull/13312))
  * [`749d8fbe45`](https://github.com/containerd/containerd/commit/749d8fbe45e2217089e07a1aa5d084a4f03968cf) Use metric timestamp for sandbox stats samples
  * [`e8dbd24ac5`](https://github.com/containerd/containerd/commit/e8dbd24ac5a83f9d19c4d076013c9862e5374edf) cri: route stats collector's sandbox path through Controller.Metrics
  * [`309aaba2a5`](https://github.com/containerd/containerd/commit/309aaba2a5396b42992ae52e9b68ebd00e972b4d) cri: route sandbox stats through Controller.Metrics
* docs: point runtime to updated errdefs pkg ([#13410](https://github.com/containerd/containerd/pull/13410))
  * [`668e0681a4`](https://github.com/containerd/containerd/commit/668e0681a437d1da8339b468a3048669e9efb88c) docs: point runtime to updated errdefs pkg
* : increase fuzz test time to 60s ([#13677](https://github.com/containerd/containerd/pull/13677))
  * [`2121a44ce7`](https://github.com/containerd/containerd/commit/2121a44ce7feaf1821b0b2a51a02b9ab3d93e56f) Increase fuzz timeout to 60s
* build(deps): bump github.com/moby/sys/user from 0.4.0 to 0.4.1 in the moby-sys group across 1 directory ([#13670](https://github.com/containerd/containerd/pull/13670))
  * [`6079844dae`](https://github.com/containerd/containerd/commit/6079844dae04c8ac9de6d4cd34e1d395ddeab13e) build(deps): bump github.com/moby/sys/user
* snapshots/devmapper: avoid nil status deref after mkfs failure ([#13633](https://github.com/containerd/containerd/pull/13633))
  * [`5e38aadc53`](https://github.com/containerd/containerd/commit/5e38aadc536518dfe3de789c20024a9aba48f96b) snapshots/devmapper: avoid nil status deref after mkfs failure
* pkg/archive: remove redundant github.com/moby/sys/sequential dependency ([#13675](https://github.com/containerd/containerd/pull/13675))
  * [`35f753cc44`](https://github.com/containerd/containerd/commit/35f753cc4431b2c69f84a30ac62988810f37ff0a) pkg/archive: remove redundant github.com/moby/sys/sequential dependency
* pkg/oci: update TestOpenUserFileCapsReads to use newlined data ([#13674](https://github.com/containerd/containerd/pull/13674))
  * [`7a7aebfcbf`](https://github.com/containerd/containerd/commit/7a7aebfcbf6d3ce24d7b50eb2d7f9676b26c91d5) pkg/oci: update TestOpenUserFileCapsReads to use newlined data
* cri: exclude cached layer bytes from image_pulling_throughput_mibps ([#13245](https://github.com/containerd/containerd/pull/13245))
  * [`16ff70b861`](https://github.com/containerd/containerd/commit/16ff70b8614592cb379dccfb0376c54cbe0e147d) cri: add image_pulling_throughput_mibps and deprecate image_pulling_throughput
  * [`1755053a78`](https://github.com/containerd/containerd/commit/1755053a786fd7f027e52ead3734e3966d502cb4) cri: exclude cached layer bytes from image_pulling_throughput
* RELEASES: document platform support policy ([#13655](https://github.com/containerd/containerd/pull/13655))
  * [`d0b3819495`](https://github.com/containerd/containerd/commit/d0b381949517c2ecd4e2b94a60450279e9aeb016) RELEASES: document platform support policy
* update runc to v1.5.0 ([#13673](https://github.com/containerd/containerd/pull/13673))
  * [`8f2bbc77a4`](https://github.com/containerd/containerd/commit/8f2bbc77a416d7034855527f4633eb388037e08c) update runc to v1.5.0
* fix snapshotter variable check in ContainerWithCheckpoint ([#13482](https://github.com/containerd/containerd/pull/13482))
  * [`57fca66a60`](https://github.com/containerd/containerd/commit/57fca66a602440bfb42b61ec8b23c9c5da73c055) [Bugfix] fix snapshotter variable check in ContainerWithCheckpoint
* build(deps): bump actions/checkout from 6 to 7 ([#13648](https://github.com/containerd/containerd/pull/13648))
  * [`38aaa269c7`](https://github.com/containerd/containerd/commit/38aaa269c7f7457e5ab551fc22278ea984fe091e) build(deps): bump actions/checkout from 6 to 7
* cri: fix duplicated image env vars on checkpoint import ([#13623](https://github.com/containerd/containerd/pull/13623))
  * [`6a677e0fd6`](https://github.com/containerd/containerd/commit/6a677e0fd61fa0200a4aa5ba57c6c200433ee7d2) cri: fix duplicated image env vars on checkpoint import
* cri: reject CreateContainer when sandbox is not running ([#13654](https://github.com/containerd/containerd/pull/13654))
  * [`ae30a5cad2`](https://github.com/containerd/containerd/commit/ae30a5cad24925d2aec232d31fb390aa2c77d1ff) cri: reject CreateContainer when sandbox is not running
* build(deps): bump github.com/mdlayher/vsock from 1.2.1 to 1.3.0 ([#13493](https://github.com/containerd/containerd/pull/13493))
  * [`3fdb9abcab`](https://github.com/containerd/containerd/commit/3fdb9abcabab47168fb2acd6e516dac78675d5eb) build(deps): bump github.com/mdlayher/vsock from 1.2.1 to 1.3.0
* build(deps): bump github.com/intel/goresctrl from 0.12.0 to 0.13.0 ([#13527](https://github.com/containerd/containerd/pull/13527))
  * [`787bb3da64`](https://github.com/containerd/containerd/commit/787bb3da649b1a676fc6ba0fcf73fe797a0c0a41) build(deps): bump github.com/intel/goresctrl from 0.12.0 to 0.13.0
* oci: use path.Join to fill CgroupsPath ([#13661](https://github.com/containerd/containerd/pull/13661))
  * [`51e3a8f4ab`](https://github.com/containerd/containerd/commit/51e3a8f4ab30363239cce0de9f4aaf3927b82887) oci: use path.Join to fill CgroupsPath
* build(deps): bump github.com/moby/sys/sequential from 0.6.0 to 0.7.0 in the moby-sys group across 1 directory ([#13557](https://github.com/containerd/containerd/pull/13557))
  * [`ef32a6c8ac`](https://github.com/containerd/containerd/commit/ef32a6c8ac68ec43c05a95aaac6eb118cacf5937) build(deps): bump github.com/moby/sys/sequential
* Register tracing log hook before signal handling ([#13411](https://github.com/containerd/containerd/pull/13411))
  * [`125c15bcd0`](https://github.com/containerd/containerd/commit/125c15bcd09972d754284693f26857517ef9869c) Register tracing log hook before signal handling
* content: handle sharing violations on Windows ([#13329](https://github.com/containerd/containerd/pull/13329))
  * [`a26143af1e`](https://github.com/containerd/containerd/commit/a26143af1e314668ff7875c3893fc48b52b4f50f) content: handle sharing violations on Windows
* update runhcs to v0.15.0-rc.2 ([#13659](https://github.com/containerd/containerd/pull/13659))
  * [`ceee91ff5a`](https://github.com/containerd/containerd/commit/ceee91ff5a8e161330d367cb038025d10560c88f) update runhcs to v0.15.0-rc.2
* build(deps): bump go.etcd.io/bbolt from 1.4.3 to 1.5.0 ([#13649](https://github.com/containerd/containerd/pull/13649))
  * [`7f3f8fffdd`](https://github.com/containerd/containerd/commit/7f3f8fffdd743b93450ada2fb50742131d4c6bc5) build(deps): bump go.etcd.io/bbolt from 1.4.3 to 1.5.0
* cri: don't leak the new mount if mutateImageMount() fails ([#13656](https://github.com/containerd/containerd/pull/13656))
  * [`a88ce40fd1`](https://github.com/containerd/containerd/commit/a88ce40fd12e50de3c9252a88e79ba1cd3c51131) cri: don't leak the new mount if mutateImageMount() fails
* build(deps): bump softprops/action-gh-release from 3.0.0 to 3.0.1 ([#13650](https://github.com/containerd/containerd/pull/13650))
  * [`d568ae9cb5`](https://github.com/containerd/containerd/commit/d568ae9cb5b435bec0666dddbbb9ffbdfbefd98e) build(deps): bump softprops/action-gh-release from 3.0.0 to 3.0.1
* build(deps): bump github.com/pelletier/go-toml/v2 from 2.3.1 to 2.4.1 ([#13651](https://github.com/containerd/containerd/pull/13651))
  * [`f407302bab`](https://github.com/containerd/containerd/commit/f407302bab3d993a508236805e196936a06f42b3) build(deps): bump github.com/pelletier/go-toml/v2 from 2.3.1 to 2.4.1
* docs: fix duplicated word in NRI guide ([#13618](https://github.com/containerd/containerd/pull/13618))
  * [`59ccb0029b`](https://github.com/containerd/containerd/commit/59ccb0029ba1e279c79f8870f316174861fe487c) docs: fix duplicated word in NRI guide
* Add forward References to the GC collection context ([#13634](https://github.com/containerd/containerd/pull/13634))
  * [`4be39f13f4`](https://github.com/containerd/containerd/commit/4be39f13f4545ae42117a033c2c4ec68442f7985) core/metadata: add forward References to the GC collection context
* integration: add http trace for debug ([#13518](https://github.com/containerd/containerd/pull/13518))
  * [`3d80ce2881`](https://github.com/containerd/containerd/commit/3d80ce2881f6b24bc289a5e9fd00a57e2452208b) integration: add http trace for debug
* test: fix flaky image timestamp check on coarse clocks ([#13588](https://github.com/containerd/containerd/pull/13588))
  * [`e5e2190886`](https://github.com/containerd/containerd/commit/e5e219088632e67d1024e647fd9e9820619d3a1d) test: fix flaky image timestamp check on coarse clocks
* core/content/proxy: Convert reader errors to native errdefs ([#13585](https://github.com/containerd/containerd/pull/13585))
  * [`d58c2c1aa4`](https://github.com/containerd/containerd/commit/d58c2c1aa4ddc2bd8bb27875e189cceaa64c4c80) core/content/proxy: Convert reader errors to native errdefs
* Patches ([#13626](https://github.com/containerd/containerd/pull/13626))
  * [`a0086cfcee`](https://github.com/containerd/containerd/commit/a0086cfceec8efcb17c64f6a3d03dbac0e59fd42) Merge commit from fork
  * [`861ffc1097`](https://github.com/containerd/containerd/commit/861ffc1097685f9ecf13adaa381aca5fdf7ef0b4) cri: filter CDI annotations on checkpoint restore
  * [`432a7af299`](https://github.com/containerd/containerd/commit/432a7af29942e0c7c8817a019d89aac4c0b32218) Merge commit from fork
  * [`0c0918fa8f`](https://github.com/containerd/containerd/commit/0c0918fa8fb4d997f889a3d811603995a3a2b68a) cri: do not re-tag restored checkpoints
  * [`3977106b53`](https://github.com/containerd/containerd/commit/3977106b535137b1345279599ff80565b9542c66) Merge commit from fork
  * [`8196411f24`](https://github.com/containerd/containerd/commit/8196411f24065533093be4c7ad874c23b06178f3) cri: make checkpoint restore robust to unexpected archive content
  * [`5a91c99584`](https://github.com/containerd/containerd/commit/5a91c99584d9c7a4718d76944bbbfaee845dc1a8) Merge commit from fork
  * [`7b05ec421d`](https://github.com/containerd/containerd/commit/7b05ec421d0a07b33964c74145b6bf5dff58f476) Bound user-database file reads in openUserFile
  * [`a834385de9`](https://github.com/containerd/containerd/commit/a834385de9eec8445afbfc6f4283919e08e1b413) Merge commit from fork
  * [`0ec1af4cae`](https://github.com/containerd/containerd/commit/0ec1af4cae1256d18719ca892bf66340499e8050) Do not propagate reserved labels from image configs
* erofs: align default mkfs block size across platforms ([#13624](https://github.com/containerd/containerd/pull/13624))
  * [`773d3517dd`](https://github.com/containerd/containerd/commit/773d3517ddfca4c03881ac0164a4ea9eaf7a1fe7) erofs: align default mkfs block size across platforms
* fix(shim/windows): retry on winio.ErrTimeout in awaitPipeReady ([#13536](https://github.com/containerd/containerd/pull/13536))
  * [`be3fcf33e8`](https://github.com/containerd/containerd/commit/be3fcf33e81e5991ed239f9116f6482d571e50fd) fix(shim/windows): retry on winio.ErrTimeout in awaitPipeReady
* vendor: golang.org/x/crypto v0.53.0 ([#13600](https://github.com/containerd/containerd/pull/13600))
  * [`9838a323ed`](https://github.com/containerd/containerd/commit/9838a323ed8b310643a7a36dc758270676ed59c0) vendor: golang.org/x/crypto v0.53.0
* update runc binary to v1.4.3 ([#13590](https://github.com/containerd/containerd/pull/13590))
  * [`ebef5893cc`](https://github.com/containerd/containerd/commit/ebef5893ccd74b7ffe8de855666cffdc9df5278b) update runc binary to v1.4.3
* core/proxy: Convert stream proxy errors to native errdefs ([#13586](https://github.com/containerd/containerd/pull/13586))
  * [`d3c143e8b4`](https://github.com/containerd/containerd/commit/d3c143e8b4904e22485b2c9e94b4d7b2db5eb07f) core/proxy: Convert stream proxy errors to native errdefs
* build(deps): bump the golang-x group with 3 updates ([#13556](https://github.com/containerd/containerd/pull/13556))
  * [`719088fbaa`](https://github.com/containerd/containerd/commit/719088fbaa3248cda723765fa3c7a33841170b17) build(deps): bump the golang-x group with 3 updates
* resolver: retry on transient network errors ([#13323](https://github.com/containerd/containerd/pull/13323))
  * [`20af2e324a`](https://github.com/containerd/containerd/commit/20af2e324a5fab7e1fed9b17ef0dbb42ecdc4596) resolver: retry on transient network errors
* update go to 1.26.4 ([#13575](https://github.com/containerd/containerd/pull/13575))
  * [`3c37ceee46`](https://github.com/containerd/containerd/commit/3c37ceee46acd9d9557e88c5b6c9b282f09cd708) update go to 1.26.4
* Update to current setup-go version ([#13516](https://github.com/containerd/containerd/pull/13516))
  * [`80b3fe5c78`](https://github.com/containerd/containerd/commit/80b3fe5c78b93b56b496cdd10b15f2c0ee6d5bb9) Update to current setup-go version
* build(deps): bump github/codeql-action from 4.36.0 to 4.36.2 ([#13555](https://github.com/containerd/containerd/pull/13555))
  * [`dfb00c4770`](https://github.com/containerd/containerd/commit/dfb00c477001dd4a82ac106b8e6beb10a8ab34bc) build(deps): bump github/codeql-action from 4.36.0 to 4.36.2
* Configure udevd children-max for root-test ([#13562](https://github.com/containerd/containerd/pull/13562))
  * [`4adafdf7e1`](https://github.com/containerd/containerd/commit/4adafdf7e1c671bfe58a14d890d632a2d5c77fd1) Configure udevd children-max for root-test
* Add defer in event of mid-function failures in RunPodSandbox to avoid mount leaks ([#13399](https://github.com/containerd/containerd/pull/13399))
  * [`2b2b80f558`](https://github.com/containerd/containerd/commit/2b2b80f558e592610dd2484f1dd8cb43246cce0e) Add deferred call to ShutdownSandbox to avoid leaks
* Upload crash artifacts from go test -fuzz when failed ([#13503](https://github.com/containerd/containerd/pull/13503))
  * [`0ffe456f1e`](https://github.com/containerd/containerd/commit/0ffe456f1eaddfe9df40668e024e59b658fed436) github: upload crash artifacts from go test -fuzz
* Use intermediate env variables for bash script runners in github workflows ([#13434](https://github.com/containerd/containerd/pull/13434))
  * [`d5b1a69dae`](https://github.com/containerd/containerd/commit/d5b1a69dae9d7ba122d8459414e159054ab17c1f) Use intermediate env variables for bash script runners
* Add max size label for snapshots ([#13520](https://github.com/containerd/containerd/pull/13520))
  * [`f2b7791b23`](https://github.com/containerd/containerd/commit/f2b7791b23b42d702116aaea0c37757a2b85d1f5) Add max size label for snapshots
* CI: update Fedora to 44 ([#13525](https://github.com/containerd/containerd/pull/13525))
  * [`e37dfad050`](https://github.com/containerd/containerd/commit/e37dfad050b2431373a7dc63862638171a697310) CI: update Fedora to 44
* remotes: close fetch reader immediately on EOF ([#13438](https://github.com/containerd/containerd/pull/13438))
  * [`45cc0c578e`](https://github.com/containerd/containerd/commit/45cc0c578e8e636c55b9aa57bdfbd54de75ac8b2) integration: use streaming Read in test mirror limiter
  * [`a989093a9c`](https://github.com/containerd/containerd/commit/a989093a9cd10df073e7e1fcb4e3359c1568a674) remotes: close fetch reader immediately on EOF
* cri: reset pull progress timer on idle→active transition ([#13304](https://github.com/containerd/containerd/pull/13304))
  * [`6c396d050d`](https://github.com/containerd/containerd/commit/6c396d050dc75d64b35bced78b09069fdd03342c) cri: reset pull progress timer on idle→active transition
* runc-shim: don't hold the service lock across runc create ([#13483](https://github.com/containerd/containerd/pull/13483))
  * [`dbcaa504c6`](https://github.com/containerd/containerd/commit/dbcaa504c6553f7f52b53b917d0f3c98416281c1) runc-shim: don't hold the service lock across runc create
* integration: deflake TestFailFastWhenConnectShim ([#13471](https://github.com/containerd/containerd/pull/13471))
  * [`a9fba66231`](https://github.com/containerd/containerd/commit/a9fba66231f2e55326e132aa29d0647b10be378f) integration: deflake TestFailFastWhenConnectShim
* Resurrect 2.1 branch for a short period ([#13498](https://github.com/containerd/containerd/pull/13498))
  * [`660e411a3a`](https://github.com/containerd/containerd/commit/660e411a3ad09faceb8e098747235ab874730208) Resurrect 2.1 branch for a short period
* build(deps): bump the otel group across 1 directory with 8 updates ([#13495](https://github.com/containerd/containerd/pull/13495))
  * [`de9dcf6aa6`](https://github.com/containerd/containerd/commit/de9dcf6aa650b408d88efbcf5f822e5418376db6) build(deps): bump the otel group across 1 directory with 8 updates
* Update typeurl/v2 to v2.3.0 to drop gogo dependency ([#13490](https://github.com/containerd/containerd/pull/13490))
  * [`ce39143249`](https://github.com/containerd/containerd/commit/ce39143249b595d2b275e47c279c129f67e3a2a9) Update typeurl/v2 to v2.3.0 to drop gogo dependency
* build(deps): bump google.golang.org/grpc from 1.81.0 to 1.81.1 ([#13428](https://github.com/containerd/containerd/pull/13428))
  * [`8f3c916a76`](https://github.com/containerd/containerd/commit/8f3c916a76a11eb7b3bbf22468c126c06ac733b0) build(deps): bump google.golang.org/grpc from 1.81.0 to 1.81.1
* cri: skip pause image pull for shim sandboxer ([#13424](https://github.com/containerd/containerd/pull/13424))
  * [`8f7c7fb447`](https://github.com/containerd/containerd/commit/8f7c7fb447056adaf0f274658b8b0dae2cccd32e) cri: skip pause image pull for non-podsandbox sandboxers
* Vagrantfile: update DNF cache ([#13487](https://github.com/containerd/containerd/pull/13487))
  * [`8ef3b6a12b`](https://github.com/containerd/containerd/commit/8ef3b6a12bcde4653c3ec5f17a166c09ac14cf64) Vagrantfile: update DNF cache
* build(deps): bump docker/login-action from 4.1.0 to 4.2.0 ([#13476](https://github.com/containerd/containerd/pull/13476))
  * [`4939e073d5`](https://github.com/containerd/containerd/commit/4939e073d54ad6323fbe48f8ff4bc0235d5b8f9b) build(deps): bump docker/login-action from 4.1.0 to 4.2.0
* core/runtime/v2: fix race on Windows deferredPipeConnection.c in Read ([#13462](https://github.com/containerd/containerd/pull/13462))
  * [`88af11e081`](https://github.com/containerd/containerd/commit/88af11e081b3ef90e06b479c2b3da7769187211f) core/runtime/v2: fix race on Windows deferredPipeConnection.c in Read
* build(deps): bump the k8s group across 1 directory with 6 updates ([#13427](https://github.com/containerd/containerd/pull/13427))
  * [`f19f84cfe0`](https://github.com/containerd/containerd/commit/f19f84cfe07bbdb4b771c1d1b578dad38182bbff) build(deps): bump the k8s group across 1 directory with 6 updates
* build(deps): bump actions/stale from 10.2.0 to 10.3.0 ([#13473](https://github.com/containerd/containerd/pull/13473))
  * [`8baa17cced`](https://github.com/containerd/containerd/commit/8baa17ccedadd3abd6683550dccb85742b141ce3) build(deps): bump actions/stale from 10.2.0 to 10.3.0
* build(deps): bump golang.org/x/sys from 0.44.0 to 0.45.0 in the golang-x group ([#13474](https://github.com/containerd/containerd/pull/13474))
  * [`be9c7a8571`](https://github.com/containerd/containerd/commit/be9c7a85714b85141813f85af608a2461d18ff34) build(deps): bump golang.org/x/sys in the golang-x group
* build(deps): bump github/codeql-action from 4.35.2 to 4.36.0 ([#13475](https://github.com/containerd/containerd/pull/13475))
  * [`032232ac0b`](https://github.com/containerd/containerd/commit/032232ac0b299133388e9f9bfdd40d64900ced75) build(deps): bump github/codeql-action from 4.35.2 to 4.36.0
* build(deps): bump golangci/golangci-lint-action from 9.2.0 to 9.2.1 ([#13477](https://github.com/containerd/containerd/pull/13477))
  * [`95ccda2f23`](https://github.com/containerd/containerd/commit/95ccda2f2300672fde2f46bfb26a59dfdfc20ed6) build(deps): bump golangci/golangci-lint-action from 9.2.0 to 9.2.1
* build(deps): bump docker/setup-buildx-action from 4.0.0 to 4.1.0 ([#13478](https://github.com/containerd/containerd/pull/13478))
  * [`db807068a7`](https://github.com/containerd/containerd/commit/db807068a7986b3996ed82cd7731882f11f107a9) build(deps): bump docker/setup-buildx-action from 4.0.0 to 4.1.0
* pkg/oci: WithUser: remove redundant isErrRange utility ([#13480](https://github.com/containerd/containerd/pull/13480))
  * [`633a5be1c9`](https://github.com/containerd/containerd/commit/633a5be1c991e1d93d9a2ea730ecb8429a7915f5) pkg/oci: WithUser: remove redundant isErrRange utility
* Fix flaky e2e test ([#13470](https://github.com/containerd/containerd/pull/13470))
  * [`8e0713454f`](https://github.com/containerd/containerd/commit/8e0713454f5b8e1e44c7dc78796d87a8fc2b943d) cri: use per-metric timestamp in background stats collector
* Fix: TestCgroupNamespace failure on cgroups v1 hosts ([#13240](https://github.com/containerd/containerd/pull/13240))
  * [`970b5d46bc`](https://github.com/containerd/containerd/commit/970b5d46bc30b5aafe16c4fbb245500f885cc9cd) Fix TestCgroupNamespace failure on cgroups v1 hosts
* do not hide linitng errors ([#13423](https://github.com/containerd/containerd/pull/13423))
  * [`7f10e9eb5f`](https://github.com/containerd/containerd/commit/7f10e9eb5fe3b6e89438fd4806f75bcddfbf576e) do not hide linitng errors
* contrib/checkpoint: increase timeouts to 30s ([#13436](https://github.com/containerd/containerd/pull/13436))
  * [`7515c32ea4`](https://github.com/containerd/containerd/commit/7515c32ea46a540809d50d182855ae1fb814d4d3) contrib/checkpoint: increase timeouts to 30s
* oci: return explicit error for out-of-range USER values ([#13446](https://github.com/containerd/containerd/pull/13446))
  * [`9439355c2b`](https://github.com/containerd/containerd/commit/9439355c2bffd12d9e15f1fa57cdd1c6da677cd2) oci: return explicit error for out-of-range USER values
* use local go toolchain in CI to confirm that build actually uses requ… ([#13102](https://github.com/containerd/containerd/pull/13102))
  * [`6a80f19a1c`](https://github.com/containerd/containerd/commit/6a80f19a1cfeaa6ef6998e7a395a093fc3edc876) use local go toolchain in CI to confirm that build actually uses requested toolchain
* Fix sandbox task API endpoints for non-runc runtimes ([#13360](https://github.com/containerd/containerd/pull/13360))
  * [`b88ab5af4f`](https://github.com/containerd/containerd/commit/b88ab5af4fdfd17b626a7dc76b4d6a150af78adf) Wire task address and version fields
  * [`ac01ae5c27`](https://github.com/containerd/containerd/commit/ac01ae5c2766961c3592523ab679dc06ca73c331) protos: include task API address to CreateTaskRequest
* remove 1.26.2 from CI builds as it is not supported any longer due to… ([#13419](https://github.com/containerd/containerd/pull/13419))
  * [`d7a8346600`](https://github.com/containerd/containerd/commit/d7a8346600520943daac967eb9ff30ca25bb355c) remove 1.26.2 from CI builds as it is not supported any longer due to the dependency
* ci: skip advisory jobs in merge queue ([#13404](https://github.com/containerd/containerd/pull/13404))
  * [`342edf84ab`](https://github.com/containerd/containerd/commit/342edf84abe985f462224fb343491f516bcb7b64) ci: skip advisory jobs in merge queue
* cleanup the systemd debug notification logging ([#13400](https://github.com/containerd/containerd/pull/13400))
  * [`7b1604739f`](https://github.com/containerd/containerd/commit/7b1604739f9c38a6f5ecc86b33c41e5bdb7f7939) cleanup the systemd debug notification logging
* RELEASES.md: 2.1 EOL (2026-05-05) ([#13376](https://github.com/containerd/containerd/pull/13376))
  * [`bef924dcb7`](https://github.com/containerd/containerd/commit/bef924dcb7568f0be7af96c4ab1cf7d80aadc2c5) RELEASES.md: 2.1 EOL (2026-05-05)
* build(deps): bump the golang-x group with 2 updates ([#13384](https://github.com/containerd/containerd/pull/13384))
  * [`8c2e686ffb`](https://github.com/containerd/containerd/commit/8c2e686ffbb4dd7fe361b2799b9467ca9539274a) build(deps): bump the golang-x group with 2 updates
* build(deps): bump github.com/pelletier/go-toml/v2 from 2.3.0 to 2.3.1 ([#13345](https://github.com/containerd/containerd/pull/13345))
  * [`67121b9ab6`](https://github.com/containerd/containerd/commit/67121b9ab6dbd26b48fc135c4fd6fe0b20342da0) build(deps): bump github.com/pelletier/go-toml/v2 from 2.3.0 to 2.3.1
* pkg: remove unused nolint annotations ([#13391](https://github.com/containerd/containerd/pull/13391))
  * [`899dee1f59`](https://github.com/containerd/containerd/commit/899dee1f59dadf21e8d3405c8253de763ede58f9) pkg: remove unused nolint annotations
* seccomp: Block AF_ALG in default socket policy ([#13327](https://github.com/containerd/containerd/pull/13327))
  * [`0c23e946a7`](https://github.com/containerd/containerd/commit/0c23e946a784ebd48cc53d5df9d16ec8199747a1) seccomp: Block AF_ALG in default socket policy
  * [`ed061a08de`](https://github.com/containerd/containerd/commit/ed061a08de19ce99d223c60dfdbdf6054dd94290) seccomp: Document socket rule scope and socketcall limitation
* overlay: disable "rebase" capability when running in UserNS ([#13389](https://github.com/containerd/containerd/pull/13389))
  * [`65d75e997b`](https://github.com/containerd/containerd/commit/65d75e997bbdde96e34d652045fce63fa7f7af63) overlay: disable "rebase" capability when running in UserNS
* build(deps): bump github.com/klauspost/compress from 1.18.5 to 1.18.6 ([#13344](https://github.com/containerd/containerd/pull/13344))
  * [`d30223f09f`](https://github.com/containerd/containerd/commit/d30223f09f11e7c6911c2703afa97ac4f63da4b9) build(deps): bump github.com/klauspost/compress from 1.18.5 to 1.18.6
* server: tolerate failed gRPC plugins when starting listeners ([#13363](https://github.com/containerd/containerd/pull/13363))
  * [`ef985f8628`](https://github.com/containerd/containerd/commit/ef985f8628344d803d511adf12e5af7cf4606aef) server: tolerate failed gRPC plugins when starting listeners
* fix(erofs): set TMPDIR for mkfs.erofs on Windows ([#13008](https://github.com/containerd/containerd/pull/13008))
  * [`1a6bd7020a`](https://github.com/containerd/containerd/commit/1a6bd7020a151263a5fe2320c33f16c6a21be2fa) fix(erofs): set TMPDIR for mkfs.erofs on Windows
* Update Go to 1.26.3 ([#13361](https://github.com/containerd/containerd/pull/13361))
  * [`c4275193b6`](https://github.com/containerd/containerd/commit/c4275193b6bd4a7dd5a79f7434ddf94a69bc21f4) Update Go to 1.26.3
* build(deps): bump google.golang.org/grpc from 1.80.0 to 1.81.0 ([#13342](https://github.com/containerd/containerd/pull/13342))
  * [`f698202ed8`](https://github.com/containerd/containerd/commit/f698202ed81eb8ba11d6d13982870ef20e655b1e) build(deps): bump google.golang.org/grpc from 1.80.0 to 1.81.0
* fix: close boltdb on metadata and mount plugin close ([#13348](https://github.com/containerd/containerd/pull/13348))
  * [`3bc019ea3d`](https://github.com/containerd/containerd/commit/3bc019ea3d09ae1e4ce3da2b44f24e6c2dd1b0e1) fix: close boltdb on metadata and mount plugin close
* Fix optional EROFS differ setup in transfer plugin ([#13328](https://github.com/containerd/containerd/pull/13328))
  * [`f8a5f8d2c0`](https://github.com/containerd/containerd/commit/f8a5f8d2c04bde833d578f5dbbe215bffda6c83a) Refactor transfer unpack configuration setup
  * [`5860534c35`](https://github.com/containerd/containerd/commit/5860534c355b9bb06246863cd6c60ad21698a968) Fix optional transfer differ setup
</p>
</details>

### Changes from containerd/go-cni
<details><summary>7 commits</summary>
<p>

* feat: Instrument CNI interface with OpenTelemetry tracing ([containerd/go-cni#132](https://github.com/containerd/go-cni/pull/132))
  * [`72f1253`](https://github.com/containerd/go-cni/commit/72f1253ad0b2843fe641ba8f91ee263765eae3b0) Document cni.Setup span
  * [`868ee13`](https://github.com/containerd/go-cni/commit/868ee1362d60cae05960656f80d4f58a161e44de) Instrument CNI interface with OpenTelemetry tracing
* Bump github.com/sirupsen/logrus from 1.7.0 to 1.8.3 in /integration ([containerd/go-cni#134](https://github.com/containerd/go-cni/pull/134))
  * [`c3cfd3d`](https://github.com/containerd/go-cni/commit/c3cfd3d804f5642f50f8de1b4bcf9162702dddd8) Bump github.com/sirupsen/logrus from 1.7.0 to 1.8.3 in /integration
* ci: declare least-privilege workflow-level contents: read ([containerd/go-cni#138](https://github.com/containerd/go-cni/pull/138))
  * [`871cf73`](https://github.com/containerd/go-cni/commit/871cf73559c43017e068ba1dbdcde36bdbf7adc3) ci: declare workflow-level contents: read on 1 workflow
</p>
</details>

### Changes from containerd/go-runc
<details><summary>30 commits</summary>
<p>

* chore(deps): update containerd/console to v1.0.5 ([containerd/go-runc#119](https://github.com/containerd/go-runc/pull/119))
  * [`d6ff02d`](https://github.com/containerd/go-runc/commit/d6ff02d636218eaf94df18669fb472440306b530) chore(deps): update containerd/console to v1.0.5
* io: skip chowning pipes on non-Linux platforms ([containerd/go-runc#117](https://github.com/containerd/go-runc/pull/117))
  * [`2df5488`](https://github.com/containerd/go-runc/commit/2df548833308de623a33a056c1f37e72bcf21d86) io: skip chowning pipes on non-Linux platforms
* README: cleanup and fix links ([containerd/go-runc#122](https://github.com/containerd/go-runc/pull/122))
  * [`c08ca30`](https://github.com/containerd/go-runc/commit/c08ca3014a5da540e3d9808daa91e25d45b13eae) README: cleanup and fix links
* ci: update actions, golangci-lint, and test against oldest (go.mod), oldstable, and stable ([containerd/go-runc#120](https://github.com/containerd/go-runc/pull/120))
  * [`87f213c`](https://github.com/containerd/go-runc/commit/87f213c6676be80ca1468f4e558ee9fd74270eda) ci: test against oldest (go.mod), oldstable, and stable Go versions
  * [`1ef7086`](https://github.com/containerd/go-runc/commit/1ef7086d6003926f265d2adf3466a31cb11caea6) ci: remove custom working-directories and GOPATH
  * [`af126fb`](https://github.com/containerd/go-runc/commit/af126fbcc16328941d44ac922c00dbc571b65c23) ci: apply zizmor fixes, ping actions by sha
  * [`c665434`](https://github.com/containerd/go-runc/commit/c66543435a7a641016af7f04b1b8978fa722e0de) ci: update actions and golangci-lint
  * [`4b025f9`](https://github.com/containerd/go-runc/commit/4b025f9c73313736c8eb0eabff9897dc6759c31e) fix linting
* deprecate ErrParseRuncVersion ([containerd/go-runc#118](https://github.com/containerd/go-runc/pull/118))
  * [`e039ef4`](https://github.com/containerd/go-runc/commit/e039ef45b4f7865ab9a0fb38fa7c63814e89caa1) deprecate ErrParseRuncVersion
* Add support for runc's --pidfd-socket ([containerd/go-runc#115](https://github.com/containerd/go-runc/pull/115))
  * [`13e8412`](https://github.com/containerd/go-runc/commit/13e8412d52e9a435f456ffc368a5d5a5964f5a3d) Add support for runc's --pidfd-socket
* Add WithExtraEnv to set the environment per invocation ([containerd/go-runc#116](https://github.com/containerd/go-runc/pull/116))
  * [`7a33975`](https://github.com/containerd/go-runc/commit/7a3397590825f65f9205059ea401f18844d68358) Add WithExtraEnv to set the environment per invocation
* Add Go 1.22 to CI ([containerd/go-runc#107](https://github.com/containerd/go-runc/pull/107))
  * [`41244b9`](https://github.com/containerd/go-runc/commit/41244b90879fabcc21aa755fa38e76c6ba8d9e65) Add Go 1.22 to CI
* Wire WorkDir into runc command invocation ([containerd/go-runc#114](https://github.com/containerd/go-runc/pull/114))
  * [`a43614f`](https://github.com/containerd/go-runc/commit/a43614f93d794b658fd33c03dc59f447f6e76270) Add WorkDir option to set the runc process working directory
* crun features command is added ([containerd/go-runc#103](https://github.com/containerd/go-runc/pull/103))
  * [`21dc3de`](https://github.com/containerd/go-runc/commit/21dc3debad4451a7b2946f164c4ac36c96f73c59) crun features command is added
* exec:support to set custom log path ([containerd/go-runc#112](https://github.com/containerd/go-runc/pull/112))
  * [`df61552`](https://github.com/containerd/go-runc/commit/df6155231d4a2b2b4cba30f2a03a76152212fb3a) exec:support to set custom log path
* go.mod: bump up ([containerd/go-runc#98](https://github.com/containerd/go-runc/pull/98))
  * [`8f10d5c`](https://github.com/containerd/go-runc/commit/8f10d5cc0fe49ee5dfccd4cc8160114e52e558c8) go.mod: bump up
* Updating go-runc Stats to be compliant with OCI runc.Stats ([containerd/go-runc#102](https://github.com/containerd/go-runc/pull/102))
  * [`2642b42`](https://github.com/containerd/go-runc/commit/2642b42a08dc61babc674bc2a70e804be3e51119) Updating go-runc Stats to be compliant be OCI runc.Stats
</p>
</details>

### Changes from containerd/nri
<details><summary>51 commits</summary>
<p>

* update plugins to current NRI version ([containerd/nri#315](https://github.com/containerd/nri/pull/315))
  * [`420e081`](https://github.com/containerd/nri/commit/420e0816e664ed282729ef27ccb97142abbe54d9) update plugins to current NRI version
* examples: update for current NRI and cgroups versions ([containerd/nri#314](https://github.com/containerd/nri/pull/314))
  * [`492ff6c`](https://github.com/containerd/nri/commit/492ff6c638c23fca8f717dc8411fdcb7c0d11763) examples: update for current NRI and cgroups versions
* chore(deps): plugins/differ bump github.com/r3labs/diff/v3 v3.0.2, github.com/goccy/go-yaml v1.13.7 ([containerd/nri#313](https://github.com/containerd/nri/pull/313))
  * [`d02a067`](https://github.com/containerd/nri/commit/d02a067a3ec950dc8518541cfda9c0c0003e2807) chore(deps): plugins/differ bump github.com/goccy/go-yaml v1.13.7
  * [`b0ac9aa`](https://github.com/containerd/nri/commit/b0ac9aaf6e62115b800af763cc1ceeb1b0f18034) chore(deps): plugins/differ bump github.com/r3labs/diff/v3 v3.0.2
* chore(deps): bump google.golang.org/grpc v1.65.1 ([containerd/nri#312](https://github.com/containerd/nri/pull/312))
  * [`8db1158`](https://github.com/containerd/nri/commit/8db1158c84ffa2e8bd619a3b9eb8ac4e723567c7) chore(deps): bump google.golang.org/grpc v1.65.1
* chore(deps): bump sigs.k8s.io/yaml v1.5.0 ([containerd/nri#311](https://github.com/containerd/nri/pull/311))
  * [`98d54e5`](https://github.com/containerd/nri/commit/98d54e58757f0115de07002c99c1a14d4b7a6257) chore(deps): bump sigs.k8s.io/yaml v1.5.0
* rewrite tests without ginkgo ([containerd/nri#309](https://github.com/containerd/nri/pull/309))
  * [`6ed16f8`](https://github.com/containerd/nri/commit/6ed16f86951e83cbbf3825eda9daa3d4eb5eba8f) pkg/net/multiplex: rewrite tests without ginkgo
  * [`5e53b31`](https://github.com/containerd/nri/commit/5e53b31afb6eeb828ca16fb33c6776f36c1832ab) pkg/adaptation: rewrite tests without ginkgo
  * [`f0edf67`](https://github.com/containerd/nri/commit/f0edf671ace63980107bb95fa0802b5b67b26e1e) pkg/runtime-tools/generate: rewrite tests without ginkgo
* fix(adaptation): record sysctl removal markers in Linux.Sysctl ([containerd/nri#300](https://github.com/containerd/nri/pull/300))
  * [`f02bd69`](https://github.com/containerd/nri/commit/f02bd695ad3d18372a578db613836c2d88df9c3a) fix(adaptation): record sysctl removal markers in Linux.Sysctl
* ci: update actions, pin actions by sha, and apply zizmor fixes, and update to ubuntu 26.04 ([containerd/nri#306](https://github.com/containerd/nri/pull/306))
  * [`d952523`](https://github.com/containerd/nri/commit/d952523c228ec8120116837245720d14a84814d0) ci: update to ubuntu-26.04
  * [`d58850c`](https://github.com/containerd/nri/commit/d58850caa8cd24ca33893dc543852dfe49e1596f) ci: pin all actions by sha
  * [`8d07299`](https://github.com/containerd/nri/commit/8d0729900bcf9f09c1e08b8c0641ac1252d0b4d7) ci: set default permissions, concurrency, and fix zizmor linting
  * [`b54c44f`](https://github.com/containerd/nri/commit/b54c44fb715a67278294f4b390d241034688c54c) ci: update codespell-project/actions-codespell@v2.2
  * [`c2b379f`](https://github.com/containerd/nri/commit/c2b379ff45193e226bc05e3b0309b1f6d1320340) ci: update github/codeql-action v4.37.7
  * [`de3aa56`](https://github.com/containerd/nri/commit/de3aa56e53c9a1cb05e16d0da866258b61f218a3) ci: update sigstore/cosign-installer@v4.1.2
  * [`6597f73`](https://github.com/containerd/nri/commit/6597f73197f3be16f806d660459a7fedaf4a4798) ci: update golangci/golangci-lint-action@v9.3.0
  * [`3d0359b`](https://github.com/containerd/nri/commit/3d0359bc626aa753952db6a4be6e27f5b777903b) ci: update docker actions
  * [`ebdebf6`](https://github.com/containerd/nri/commit/ebdebf68ef55b29478e421b0dd0686ce8b15589d) ci: update actions/setup-go@v7.0.0
  * [`2a66ab2`](https://github.com/containerd/nri/commit/2a66ab245d06f969e8e5f723e51936b016f00e1e) ci: update actions/checkout@v7.0.1
  * [`3bfe8b2`](https://github.com/containerd/nri/commit/3bfe8b27fa62cb0c25a83de7d741350e05c00a40) ci: use reusable install-go action
* chore(deps):  go.yaml.in/yaml/v3 v3.0.5, testify v1.12.1, logrus v1.9.4 ([containerd/nri#308](https://github.com/containerd/nri/pull/308))
  * [`9120181`](https://github.com/containerd/nri/commit/912018159cd10a0bf68269c6e6308916287041c1) chore(deps): github.com/sirupsen/logrus v1.9.4
  * [`081b62d`](https://github.com/containerd/nri/commit/081b62d134fe33bc0b926cceb2914f1412da70fc) chore(deps): github.com/stretchr/testify v1.12.1
  * [`1a657cf`](https://github.com/containerd/nri/commit/1a657cf628578b8221345dac2d028a183e415829) chore(deps): go.yaml.in/yaml/v3 v3.0.5
* ci: declare contents: read on ci.yml and codespell.yml ([containerd/nri#296](https://github.com/containerd/nri/pull/296))
  * [`925060e`](https://github.com/containerd/nri/commit/925060e9079425122c8f70968bfdf5e071661e2e) ci: declare contents: read on ci.yml and codespell.yml
* docs: add context to nri image keys ([containerd/nri#307](https://github.com/containerd/nri/pull/307))
  * [`03cfa9c`](https://github.com/containerd/nri/commit/03cfa9c2ba28faa83cc30ea979992d1b694bfb17) docs: add context to nri image keys
* api,adaptation: add container image info ([containerd/nri#302](https://github.com/containerd/nri/pull/302))
  * [`6327012`](https://github.com/containerd/nri/commit/632701238ecc4681d9e88efad79c83b53afaacd5) api,adaptation: add container image info
* Remove dependency on `github.com/opencontainers/runtime-tools` ([containerd/nri#305](https://github.com/containerd/nri/pull/305))
  * [`6113b94`](https://github.com/containerd/nri/commit/6113b94b794d8801dd5358d43e3ec59af6031844) Remove dependency on `github.com/opencontainers/runtime-tools`
  * [`a673378`](https://github.com/containerd/nri/commit/a6733780ad22adf81dd3b71e5a27966c00987ac0) fix linting
* replace uses of deprecated gopkg.in/yaml.v3 module ([containerd/nri#293](https://github.com/containerd/nri/pull/293))
  * [`8c90b09`](https://github.com/containerd/nri/commit/8c90b09def280c839d3a3bf56faafdec5ef58bda) replace uses of deprecated gopkg.in/yaml.v3 module
* adaptation: avoid holding lock across runtime update callback ([containerd/nri#301](https://github.com/containerd/nri/pull/301))
  * [`55afaa2`](https://github.com/containerd/nri/commit/55afaa25d2d7827cd51841a5cc2f09981544b894) adaptation: avoid holding lock across runtime update callback
* docs: Fix typo in containerd config for default validator. ([containerd/nri#297](https://github.com/containerd/nri/pull/297))
  * [`b7e479f`](https://github.com/containerd/nri/commit/b7e479f52f51be794ff24af3a5103f7db47ce08d) docs: Fix typo in containerd config for default validator.
* Fix .gitignore ([containerd/nri#290](https://github.com/containerd/nri/pull/290))
  * [`0d37892`](https://github.com/containerd/nri/commit/0d37892494085e17e266a7643d8ac37fe6e7eea1) fix .gitignore to include info/none
  * [`0a92ac9`](https://github.com/containerd/nri/commit/0a92ac958717b461fbf43d76fd56e0de6eef3115) delete manually-added none file
</p>
</details>

### Changes from containerd/platforms
<details><summary>2 commits</summary>
<p>

* Fix WS2022 compat on hosts past the latest LTSC ([containerd/platforms#34](https://github.com/containerd/platforms/pull/34))
  * [`bacc690`](https://github.com/containerd/platforms/commit/bacc69061152115965f5b17fa59dc4e051ba8dc3) Fix WS2022 compat on hosts past the latest LTSC
</p>
</details>

### Changes from containerd/ttrpc
<details><summary>25 commits</summary>
<p>

* build(deps): bump golang.org/x/sys from 0.42.0 to 0.46.0 in the golang-x group across 1 directory ([containerd/ttrpc#215](https://github.com/containerd/ttrpc/pull/215))
  * [`093db7f`](https://github.com/containerd/ttrpc/commit/093db7f71f2dcdeee642719481ba5927a384fcbc) build(deps): bump golang.org/x/sys
* build(deps): bump google.golang.org/grpc from 1.69.2 to 1.81.1 ([containerd/ttrpc#237](https://github.com/containerd/ttrpc/pull/237))
  * [`651f052`](https://github.com/containerd/ttrpc/commit/651f052e274fd290e140243c349c25e12d91f6d6) build(deps): bump google.golang.org/grpc from 1.69.2 to 1.81.1
* build(deps): bump golangci/golangci-lint-action from 9.2.0 to 9.2.1 ([containerd/ttrpc#238](https://github.com/containerd/ttrpc/pull/238))
  * [`ae8cc36`](https://github.com/containerd/ttrpc/commit/ae8cc36b9ec4bcc265f214c6407e54c4b668c09d) build(deps): bump golangci/golangci-lint-action from 9.2.0 to 9.2.1
* build(deps): bump actions/checkout from 6.0.2 to 6.0.3 ([containerd/ttrpc#240](https://github.com/containerd/ttrpc/pull/240))
  * [`abdb054`](https://github.com/containerd/ttrpc/commit/abdb0541a8053aec47e154c969c95162b85195a9) build(deps): bump actions/checkout from 6.0.2 to 6.0.3
* Remove gogo vanity command and gogo dependency ([containerd/ttrpc#239](https://github.com/containerd/ttrpc/pull/239))
  * [`5909255`](https://github.com/containerd/ttrpc/commit/5909255a26ba77df1a17448b2ef4f18beec22d22) Remove gogo vanity command
* Fix deadlock when stream is not consumed ([containerd/ttrpc#229](https://github.com/containerd/ttrpc/pull/229))
  * [`cc8699e`](https://github.com/containerd/ttrpc/commit/cc8699ea6f11f8d0ae818cb77645d71cf1707f19) Bump minimum go version to 1.23 for immediate GC of timers
  * [`61715d2`](https://github.com/containerd/ttrpc/commit/61715d2134168e0dd3eb6b1ad57dafd85ad5955e) Add deadlock fix when stream is not consumed
  * [`25b19dd`](https://github.com/containerd/ttrpc/commit/25b19dd07e9b4c51f1a3c4e0ea5c0a65e4b3f729) Add unit test to check for deadlock on unconsumed stream
* server: cancel per-stream context when handler returns ([containerd/ttrpc#231](https://github.com/containerd/ttrpc/pull/231))
  * [`acefd00`](https://github.com/containerd/ttrpc/commit/acefd00e4c172a17a2f51250f76de7cea1674809) server: cancel per-stream context when handler returns
* Set buf version from file and match dev version ([containerd/ttrpc#233](https://github.com/containerd/ttrpc/pull/233))
  * [`02f1a13`](https://github.com/containerd/ttrpc/commit/02f1a13e35a7d6ffb0d21c9a18e66aa57e72bfbd) Set buf version from file and match dev version
* Fix proto generation ([containerd/ttrpc#232](https://github.com/containerd/ttrpc/pull/232))
  * [`45d5a6c`](https://github.com/containerd/ttrpc/commit/45d5a6c128a59e2d56371abcb24b81c305e39dd0) Fix proto generation
* build(deps): bump actions/setup-go from 6.3.0 to 6.4.0 ([containerd/ttrpc#228](https://github.com/containerd/ttrpc/pull/228))
  * [`f0dc2d5`](https://github.com/containerd/ttrpc/commit/f0dc2d5a3994af8f06a5e8befe420410d300c45a) build(deps): bump actions/setup-go from 6.3.0 to 6.4.0
* Migrate from protobuild to buf ([containerd/ttrpc#226](https://github.com/containerd/ttrpc/pull/226))
  * [`056f619`](https://github.com/containerd/ttrpc/commit/056f6193c49266cd49c71628cfe3a7380c877a93) Update CI workflow to use buf instead of protobuild
  * [`4308a4e`](https://github.com/containerd/ttrpc/commit/4308a4e35ad3f738bf0c4efca169ac606875a303) Migrate from protobuild to buf
</p>
</details>

### Dependency Changes

* **cyphar.com/go-pathrs**                                                         v0.2.1 -> v0.2.5
* **github.com/Microsoft/hcsshim**                                                 v0.15.0-rc.1 -> v0.15.0-rc.4
* **github.com/ProtonMail/go-crypto**                                              v1.4.1 **_new_**
* **github.com/StackExchange/wmi**                                                 cbe66965904d -> v1.2.1
* **github.com/checkpoint-restore/checkpointctl**                                  v1.5.0 -> v1.6.0
* **github.com/cilium/ebpf**                                                       v0.16.0 -> v0.17.3
* **github.com/cloudflare/circl**                                                  v1.6.3 **_new_**
* **github.com/containerd/containerd/api**                                         v1.11.0 -> v1.12.0
* **github.com/containerd/go-cni**                                                 v1.1.13 -> v1.1.14
* **github.com/containerd/go-runc**                                                v1.1.0 -> v1.2.1
* **github.com/containerd/imgcrypt/v2**                                            v2.0.2 -> v2.0.3
* **github.com/containerd/log/otel**                                               v0.1.0 **_new_**
* **github.com/containerd/nri**                                                    v0.12.0 -> v0.12.3
* **github.com/containerd/platforms**                                              v1.0.0-rc.4 -> v1.0.0-rc.5
* **github.com/containerd/ttrpc**                                                  v1.2.8 -> v1.2.9
* **github.com/containerd/typeurl/v2**                                             v2.2.3 -> v2.3.0
* **github.com/containernetworking/cni**                                           v1.3.0 -> v1.3.1
* **github.com/containers/ocicrypt**                                               v1.2.1 -> v1.3.2
* **github.com/cyphar/filepath-securejoin**                                        v0.6.0 -> v0.7.0
* **github.com/docker/go-events**                                                  e31b211e4f1c -> v0.1.0
* **github.com/docker/go-metrics**                                                 v0.0.1 -> v0.1.0
* **github.com/erofs/go-erofs**                                                    v0.3.0 -> v0.3.1
* **github.com/felixge/httpsnoop**                                                 v1.0.4 -> v1.1.0
* **github.com/fsnotify/fsnotify**                                                 v1.9.0 -> v1.10.1
* **github.com/fxamacker/cbor/v2**                                                 v2.9.0 -> v2.9.1
* **github.com/go-jose/go-jose/v4**                                                v4.1.4 -> v4.1.5
* **github.com/go-logr/logr**                                                      v1.4.3 -> v1.4.4
* **github.com/go-ole/go-ole**                                                     v1.2.6 -> v1.3.0
* **github.com/google/certtostore**                                                v1.0.6 -> v1.0.7
* **github.com/google/deck**                                                       105ad94aa8ae -> v1.1.0
* **github.com/grpc-ecosystem/grpc-gateway/v2**                                    v2.28.0 -> v2.30.0
* **github.com/intel/goresctrl**                                                   v0.12.0 -> v0.13.0
* **github.com/klauspost/compress**                                                v1.18.5 -> v1.20.0
* **github.com/mdlayher/socket**                                                   v0.5.1 -> v0.6.0
* **github.com/mdlayher/vsock**                                                    v1.2.1 -> v1.3.0
* **github.com/miekg/pkcs11**                                                      v1.1.1 -> v1.1.2
* **github.com/moby/sys/user**                                                     v0.4.0 -> v0.4.1
* **github.com/moby/sys/userns**                                                   v0.1.0 -> v0.2.1
* **github.com/opencontainers/selinux**                                            v1.13.1 -> v1.15.1
* **github.com/pelletier/go-toml/v2**                                              v2.3.0 -> v2.4.3
* **github.com/prometheus/client_golang**                                          v1.23.2 -> v1.24.1
* **github.com/prometheus/common**                                                 v0.67.5 -> v0.70.1
* **github.com/prometheus/procfs**                                                 v0.19.2 -> v0.21.1
* **github.com/sirupsen/logrus**                                                   v1.9.4 -> v1.10.2
* **github.com/smallstep/pkcs7**                                                   v0.1.1 -> v0.2.1
* **github.com/stretchr/testify**                                                  v1.11.1 -> v1.12.1
* **github.com/urfave/cli-docs/v3**                                                v3.1.0 **_new_**
* **github.com/urfave/cli/v3**                                                     v3.11.0 **_new_**
* **go.etcd.io/bbolt**                                                             v1.4.3 -> v1.5.0
* **go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc**  v0.68.0 -> v0.71.0
* **go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp**                v0.68.0 -> v0.71.0
* **go.opentelemetry.io/contrib/propagators/envcar**                               v0.71.0 **_new_**
* **go.opentelemetry.io/otel**                                                     v1.43.0 -> v1.46.0
* **go.opentelemetry.io/otel/exporters/otlp/otlptrace**                            v1.43.0 -> v1.46.0
* **go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc**              v1.43.0 -> v1.46.0
* **go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp**              v1.43.0 -> v1.46.0
* **go.opentelemetry.io/otel/metric**                                              v1.43.0 -> v1.46.0
* **go.opentelemetry.io/otel/sdk**                                                 v1.43.0 -> v1.46.0
* **go.opentelemetry.io/otel/trace**                                               v1.43.0 -> v1.46.0
* **go.opentelemetry.io/proto/otlp**                                               v1.10.0 -> v1.11.0
* **go.yaml.in/yaml/v2**                                                           v2.4.3 -> v2.4.4
* **go.yaml.in/yaml/v3**                                                           v3.0.5 **_new_**
* **golang.org/x/crypto**                                                          v0.49.0 -> v0.56.0
* **golang.org/x/mod**                                                             v0.35.0 -> v0.41.0
* **golang.org/x/net**                                                             v0.52.0 -> v0.58.0
* **golang.org/x/oauth2**                                                          v0.35.0 -> v0.36.0
* **golang.org/x/sync**                                                            v0.20.0 -> v0.23.0
* **golang.org/x/sys**                                                             v0.43.0 -> v0.48.0
* **golang.org/x/term**                                                            v0.41.0 -> v0.45.0
* **golang.org/x/text**                                                            v0.35.0 -> v0.41.0
* **golang.org/x/time**                                                            v0.15.0 -> v0.16.0
* **google.golang.org/genproto/googleapis/api**                                    9d38bb4040a9 -> da73d73af1c5
* **google.golang.org/genproto/googleapis/rpc**                                    6f92a3bedf2d -> da73d73af1c5
* **google.golang.org/grpc**                                                       v1.80.0 -> v1.83.2
* **google.golang.org/protobuf**                                                   f2248ac996af -> v1.36.12
* **k8s.io/api**                                                                   v0.36.0 -> v0.37.0
* **k8s.io/apimachinery**                                                          v0.36.0 -> v0.37.0
* **k8s.io/client-go**                                                             v0.36.0 -> v0.37.0
* **k8s.io/component-base**                                                        v0.36.0 -> v0.37.0
* **k8s.io/cri-api**                                                               v0.36.0 -> v0.37.0
* **k8s.io/cri-client**                                                            v0.36.0 -> v0.37.0
* **k8s.io/cri-streaming**                                                         v0.36.0 -> v0.37.0
* **k8s.io/kube-openapi**                                                          5883c5ee87b9 -> d427ff9ee9ad
* **k8s.io/streaming**                                                             v0.36.0 -> v0.37.0
* **k8s.io/utils**                                                                 28399d86e0b5 -> be93311217bd
* **sigs.k8s.io/structured-merge-diff/v6**                                         v6.3.2 -> v6.4.2
* **tags.cncf.io/container-device-interface**                                      v1.1.0 -> v1.1.1
* **tags.cncf.io/container-device-interface/specs-go**                             v1.1.0 -> v1.1.1

Previous release can be found at [v2.3.0](https://github.com/containerd/containerd/releases/tag/v2.3.0)
### Which file should I download?
* `containerd-<VERSION>-<OS>-<ARCH>.tar.gz`:         ✅Recommended. Dynamically linked with glibc 2.35 (Ubuntu 22.04).
* `containerd-static-<VERSION>-<OS>-<ARCH>.tar.gz`:  Statically linked. Expected to be used on Linux distributions that do not use glibc >= 2.35. Not position-independent.

In addition to containerd, typically you will have to install [runc](https://github.com/opencontainers/runc/releases)
and [CNI plugins](https://github.com/containernetworking/plugins/releases) from their official sites too.

See also the [Getting Started](https://github.com/containerd/containerd/blob/m

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.4.0` · 2026-09-16 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
