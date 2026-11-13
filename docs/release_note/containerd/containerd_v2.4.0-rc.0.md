---
title: "containerd v2.4.0-rc.0"
project: "containerd"
repo: "containerd/containerd"
tag: "v2.4.0-rc.0"
published: "2026-09-15"
type: "pre"
lang: "en"
summary: "Welcome to the v2.4.0-rc.0 release of containerd! This is a pre-release of containerd"
---

# containerd v2.4.0-rc.0

Welcome to the v2.4.0-rc.0 release of containerd!
*This is a pre-release of containerd*

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

### Dependency Changes

* **cyphar.com/go-pathrs**                                                         v0.2.1 -> v0.2.5
* **github.com/Microsoft/hcsshim**                                                 v0.15.0-rc.1 -> v0.15.0-rc.4
* **github.com/ProtonMail/go-crypto**                                              v1.4.1 **_new_**
* **github.com/StackExchange/wmi**                                                 cbe66965904d -> v1.2.1
* **github.com/checkpoint-restore/checkpointctl**                                  v1.5.0 -> v1.6.0
* **github.com/cilium/ebpf**                                                       v0.16.0 -> v0.17.3
* **github.com/cloudflare/circl**                                                  v1.6.3 **_new_**
* **github.com/containerd/containerd/api**                                         v1.11.0 -> v1.12.0-rc.1
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

See also the [Getting Started](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) documentation.

---

> **Source** [containerd/containerd](https://github.com/containerd/containerd) · `v2.4.0-rc.0` · 2026-09-15 · [upstream release](https://github.com/containerd/containerd/releases/tag/v2.4.0-rc.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
