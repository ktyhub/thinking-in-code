---
title: "kubernetes-client v8.0.0"
project: "kubernetes-client"
repo: "fabric8io/kubernetes-client"
tag: "v8.0.0"
published: "2026-09-24"
type: "major"
lang: "en"
summary: "Full Changelog: https://github.com/fabric8io/kubernetes-client/compare/v7.9.0...v8.0.0"
---

# kubernetes-client v8.0.0

#### Bugs
- Fix #8105: requests hanging when a retry action, retry decision, or response cleanup throws an exception.
- Fix #7374: (crd-generator) Generated CRDs no longer prune or reject what the client writes: `Object`, raw `Map`, `List<Object>`, raw collection, `@JsonUnwrapped` and polymorphic properties keep their content, and date and time types only declare a format their values match (`Duration`, `LocalDateTime` and the partial types lose `date-time`). `Optional` properties get their value type's schema instead of preserving unknown fields, see the [migration guide](./doc/MIGRATION-v8.md#jackson-3-crd-generator)
- Fix #6779: (httpclient-jetty) 401 responses without a `WWW-Authenticate` header, which is how the API server sends them, are returned with their body instead of failing with "HTTP protocol violation: Authentication challenge without WWW-Authenticate header"
- Fix #6779: (httpclient-jetty, httpclient-vertx, httpclient-vertx-5) A proxy password containing a colon, or a proxy URL with a user and no password, is now used to authenticate with the proxy, instead of falling back to a `Proxy-Authorization` request header that HTTPS requests carry through the proxy tunnel to the API server
- Fix #6779: A proxy username configured without a password is sent with an empty password instead of `null`, and a proxy URL with a user and no password as `user:` instead of `user` (RFC 7617)
- Fix #8134: (httpclient-jetty) A failed WebSocket handshake no longer calls the listener's `onError`, the returned future already fails with it. When the handshake was retried, this ended watches and exec/attach sessions before the retry could open them
- Fix #8134: (httpclient-jetty) Credentials for a SOCKS5 proxy are sent to it
- Fix #8134: (httpclient-jetty, httpclient-vertx) Proxy credentials that aren't `Basic user:password` are only added as a `Proxy-Authorization` header to the requests an HTTP proxy reads. HTTPS and WSS requests, WebSockets that Vert.x tunnels, and requests through a SOCKS proxy carried them to the API server
- Fix #8134: (httpclient-vertx-5) Proxy credentials that aren't `Basic user:password` are sent to the HTTP proxy by Vert.x, on the CONNECT too, so HTTPS and WebSocket requests through a proxy that requires them work, and they no longer reach the API server
- Fix #8134: (httpclient-okhttp) A 407 from the API server (through `pods/proxy` for example) is no longer answered with the proxy credentials, which went through the proxy tunnel to it, and credentials the proxy rejected aren't sent again
- Fix #8140: (httpclient-vertx-5) A request whose connection is closed before it could be written fails with an `IOException`, and is retried, instead of hanging until the request timeout (seen on Windows)
- Fix #8134: (httpclient-jetty) Cookies set by a response are no longer sent back on later requests and WebSocket upgrades, like with the other HttpClient implementations
- Fix #8109: A `java.sql.Date` written as `yyyy-MM-dd` is read as a local date instead of the previous day west of UTC. `Year`, `Month`, `java.sql.Date` and `Locale` keep their 7.x wire format, mappers you build yourself need the new `Jackson2JdkTypesModule`, see the [migration guide](./doc/MIGRATION-v8.md#jackson-3)
- Fix #8109: (crd-generator) `byte[]`, `ByteBuffer`, `char[]`, `Year` and `java.sql.Date` schemas match what the client writes (`byte[]` and `ByteBuffer` are `format: byte` strings), so the API server no longer rejects them. `@PrinterColumn` on a `LocalDate` is a `string` column instead of a `date` column that showed `<invalid>`
- Fix #8008: (httpclient-vertx-5) Requests with an `InputStream` body and `Expect: 100-continue` (binary builds) no longer hang, and an `InputStream` body of known length is sent with `Content-Length` instead of chunked
- Fix #8139: (httpclient-okhttp) WebSockets answer the server's Close frame even when the listener doesn't, so port forwarding and custom listeners release the connection instead of waiting for the server to drop it
- Fix #8152: (httpclient-vertx, httpclient-vertx-5, httpclient-jetty, httpclient-jdk) WebSockets send a ping every `Config#websocketPingInterval` (30s by default), like OkHttp already did, so load balancers that close idle connections no longer drop quiet watches

#### Improvements
- Fix #8109: (crd-generator) `int`/`Integer` and `long`/`Long` properties get `format: int32` and `format: int64`, like controller-gen
- Fix #7987: (kubernetes-client-api) `withShardSelector` accepts a typed `ShardSelector` (`ShardSelector.builder().addShard(0, 4).addShard(2, 4).build()`) next to the raw expression `String`, so the `shardRange(...)` CEL grammar and its hexadecimal bounds don't have to be written by hand

#### Dependency Upgrade
- Fix #7374: Upgrade Jackson from 2.x to 3.2.1
- Fix #8096: bump cert-manager from 1.20.2 to 1.21.2
- Fix #8098: bump chaos-mesh api from 4db47f5 to d70b66a
- Fix #8086: bump cluster-api from 1.12.2 to 1.13.6
- Fix #8101: bump cluster-api from 1.13.6 to 1.14.2
- Fix #8101: bump cluster-api-provider-metal3 from 1.13.0 to 1.14.0
- Fix #8133: bump controller-runtime from 0.19.7 to 0.23.3
- Fix #8142: bump controller-runtime from 0.23.3 to 0.25.1
- Fix #8086: bump gateway-api from 1.6.1 to 1.6.2
- Fix #8127: bump istio.io/client-go from 1.30.0 to 1.31.0
- Fix #8148: bump openshift/api from 1cb53e3 (release-4.19) to 231177c (release-4.22)
- Fix #8148: bump openshift/cloud-credential-operator from 0e03b7a to 5c4a396
- Fix #8148: bump openshift/cluster-network-operator from 698e349 to 61de77e
- Fix #8148: bump openshift/cluster-node-tuning-operator from 2ed182b to 039bae9
- Fix #8148: bump openshift/hive/apis from 2d25383 to 8104fcf
- Fix #8148: bump openshift/installer from 1.4.21-pre to 1.4.22-ec5
- Fix #6779: bump Jetty from 11.0.26 to 12.1.13
- Fix #8086: bump k8s.io/api from 0.35.2 to 0.35.8
- Fix #8142: bump k8s.io/api from 0.35.8 to 0.37.0
- Fix #8086: bump k8s.io/apiextensions-apiserver from 0.36.1 to 0.37.0
- Fix #8086: bump k8s.io/apimachinery from 0.36.1 to 0.37.0
- Fix #8086: bump k8s.io/autoscaler/vertical-pod-autoscaler from 1.7.0 to 1.7.1
- Fix #8086: bump k8s.io/client-go from 0.35.2 to 0.35.8
- Fix #8142: bump k8s.io/client-go from 0.35.8 to 0.37.0
- Fix #8142: bump k8s.io/cloud-provider from 0.35.8 to 0.37.0
- Fix #8142: bump k8s.io/csi-translation-lib from 0.35.8 to 0.37.0
- Fix #8086: bump k8s.io/kube-openapi from 0.0.0-20260501160325-927ab1f70cd6 to 0.0.0-20260821135717-be32def86098
- Fix #8142: bump k8s.io/kube-scheduler from 0.35.8 to 0.37.0
- Fix #8086: bump k8s.io/metrics from 0.36.1 to 0.37.0
- Fix #8142: bump k8s.io/mount-utils from 0.35.8 to 0.37.0
- Fix #8118: bump knative.dev/caching from 0.0.0-20260422140616-453ad996bbe2 to 0.0.0-20260821014320-af6341f3ab2b
- Fix #8118: bump knative.dev/eventing from 0.49.1 to 0.50.0
- Fix #8118: bump knative.dev/eventing-github from 0.49.1 to 0.50.0
- Fix #8118: bump knative.dev/eventing-gitlab from 0.49.1 to 0.50.0
- Fix #8118: bump knative.dev/eventing-kafka-broker from 0.49.1 to 0.50.1
- Fix #8118: bump knative.dev/networking from 0.0.0-20260529061306-c8de379770b9 to 0.0.0-20260921014731-e39778429a0f
- Fix #8118: bump knative.dev/pkg from 0.0.0-20260422015212-ec452872dcc1 to 0.0.0-20260918182429-5dc1978f0042
- Fix #8118: bump knative.dev/serving from 0.49.1 to 0.50.0
- Fix #8133: bump open-cluster-management.io/governance-policy-propagator from 0.18.0 to 0.20.0
- Fix #8126: bump prometheus-operator from 0.91.0 to 0.94.0
- Fix #8133: bump stolostron/discovery from 6a13204 to ea34ca3
- Fix #8133: bump stolostron/klusterlet-addon-controller from 0d7e21c to 5341d76
- Fix #8133: bump stolostron/multicluster-observability-operator from 3a17a1a to 553f19c
- Fix #8133: bump stolostron/multiclusterhub-operator from c3e46b4 to 30a5420
- Fix #8133: bump stolostron/search-v2-operator from 030a382 to 8d84710
- Fix #8100: bump tektoncd/pipeline from 1.12.0 to 1.16.0
- Fix #8100: bump tektoncd/triggers from 0.36.0 to 0.37.0
- Fix #8097: bump volcano.sh/apis from 1.11.0 to 1.15.2
- Fix #8050: (karaf) The Karaf feature bundles Aries SPI-Fly 1.3.7 (from 1.3.0) and ASM 9.10.1 (from 8.0.1), the versions required to weave Java 17 bytecode

#### New Features
- Fix #8041: Typed DSL for the resources added in Kubernetes 1.37: `certificates().v1().podCertificateRequests()`, `dynamicResourceAllocation().v1().deviceTaintRules()`, `storageMigration().v1().storageVersionMigrations()` and `scheduling().v1beta1()` `podGroups()` and `workloads()`, plus `certificates().v1beta1().podCertificateRequests()` and `storageMigration().v1beta1().storageVersionMigrations()`. `kubernetes-model-policy` also ships the `lifecycle.k8s.io/v1alpha1` model (`Eviction` and `EvictionRequest`)

#### _**Note**_: Breaking changes
- Check detailed migration documentation for breaking changes in [8.0.0](./doc/MIGRATION-v8.md)
- Fix #8041: (kubernetes-client-api) `runtimeClasses()` and `network().ingresses()` (and `network().ingress()`) use the `v1` models instead of `v1beta1` ones Kubernetes no longer serves, see the [migration guide](./doc/MIGRATION-v8.md#unversioned-dsl-v1)
- Fix #7374: Moved to Jackson 3 (`tools.jackson` coordinates and packages). The default serialization keeps the Jackson 2 behavior for custom types, see the [migration guide](./doc/MIGRATION-v8.md#jackson-3)
- Fix #7987: (kubernetes-client-api) `Filterable#withShardSelector` also accepts a typed `ShardSelector`, so a literal `withShardSelector(null)` no longer compiles, see the [migration guide](./doc/MIGRATION-v8.md#shard-selector-null)
- Fix #8031: (crd-generator) Removed the deprecated CRD Generator v1 (`crd-generator-api` and `crd-generator-apt`). Migrate to `crd-generator-api-v2` with the [Maven plugin](./crd-generator/maven-plugin/README.md), the [CLI tool](./crd-generator/cli/README.md), or the [Gradle build script recipe](./crd-generator/gradle/README.md), see the [migration guide](./doc/CRD-generator-migration-v2.md)
- Fix #8009: Moved Java baseline from 11 to 17. In addition to the runtime requirement, the Maven plugins, the Gradle plugin and the annotation processor now require a Java 17+ JVM to run the build, and the OSGi bundles declare `osgi.ee=JavaSE 17`
- Fix #8050: (karaf) The `kubernetes-karaf` feature repository no longer defines its own `scr` feature. `kubernetes-client` now depends on the `scr` feature provided by the Karaf distribution, which supplies the Declarative Services API bundles and the `scr:*` shell commands
- Fix #8142: (knative) Serving `RevisionSpec` replaces `workloadRef` with `schedulingGroup` and adds `evictionResponders`, like the core `PodSpec` since Kubernetes 1.37
- Fix #8133: (open-cluster-management) `DiscoveredClusterSpec` drops `owner` and `DiscoveredClusterCondition` drops `lastUpdateTime`
- Fix #8148: (openshift-model) Model class `io.fabric8.openshift.api.model.customresourcestatus.conditions.v1.Condition` removed, Hive `ClusterDeploymentCustomizationStatus` conditions use the Kubernetes `Condition`
- Fix #8148: (openshift-model-config) `ClusterImagePolicySpec` and `ImagePolicySpec` policies are `ImageSigstoreVerificationPolicy` and their roots of trust `ImagePolicyFulcioCAWithRekorRootOfTrust`, `ImagePolicyPKIRootOfTrust` and `ImagePolicyPublicKeyRootOfTrust`. Model classes `FulcioCAWithRekor`, `PKI`, `Policy` and `PublicKey` removed
- Fix #8148: (openshift-model-config) `GCPPlatformStatus` drops `serviceEndpoints`, model class `GCPServiceEndpoint` removed
- Fix #8148: (openshift-model-hive) oVirt support removed: `ClusterDeprovisionPlatform`, `MachinePoolPlatform` and `Platform` drop `ovirt`, model classes `OvirtClusterDeprovision` and the `io.fabric8.openshift.api.model.hive.ovirt.v1` package removed
- Fix #8148: (openshift-model-hive) vSphere `MachinePool.osDisk` uses the installer `io.fabric8.openshift.api.model.installer.vsphere.v1.OSDisk`, model class `io.fabric8.openshift.api.model.hive.vsphere.v1.OSDisk` removed. The module now depends on `openshift-model-installer`, `openshift-model-machine` and `openshift-model-operator`
- Fix #8148: (openshift-model-installer) GCP `PSCEndpoint` drops `region`
- Fix #8148: (openshift-model-machineconfiguration) `v1alpha1` model classes `MachineConfigNode`, `PinnedImageSet` and their related types removed, use the `v1` ones
- Fix #8133: (open-cluster-management) `MultiClusterHubSpec` drops `customCAConfigmap`, `enableClusterBackup`, `enableClusterProxyAddon`, `hive`, `ingress` and `separateCertificateManagement`. Model classes `BackupConfig`, `ExternalDNSAWSConfig`, `ExternalDNSConfig`, `ExternalDNSGCPConfig`, `FailedProvisionConfig`, `HiveConfigSpec`, `HiveConfigStatus`, `IngressSpec` and `VeleroBackupConfig` removed
- Fix #8133: (open-cluster-management) Observability `PlatformMetricsSpec` and `UserWorkloadMetricsSpec` replace `collection` with `default` (`PlatformMetricsCollectionSpec` and `UserWorkloadMetricsCollectionSpec` removed), and `PlatformNamespaceRightSizingRecommendationSpec` is renamed to `PlatformRightSizingRecommendationSpec`
- Fix #8100: (tekton) Model classes `Template` and `AffinityAssistantTemplate` moved from package `io.fabric8.tekton.pod` to `io.fabric8.tekton.unversioned`, since tekton pipeline 1.16.0 declares them as `+versionName=unversioned`
- Fix #6779: (httpclient-jetty) Moved from Jetty 11 to Jetty 12.1, see the [migration guide](./doc/MIGRATION-v8.md#jetty-12)
- Fix #8008: `kubernetes-client` and `openshift-client` default to the Vert.x 5 HttpClient (`kubernetes-httpclient-vertx-5`) instead of Vert.x 4 (`kubernetes-httpclient-vertx`), see the [migration guide](./doc/MIGRATION-v8.md#vertx5-httpclient)

## New Contributors
* @arnav-ag made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/8108
* @Fayupable made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/8042

**Full Changelog**: https://github.com/fabric8io/kubernetes-client/compare/v7.9.0...v8.0.0

---

> **Source** [fabric8io/kubernetes-client](https://github.com/fabric8io/kubernetes-client) · `v8.0.0` · 2026-09-24 · [upstream release](https://github.com/fabric8io/kubernetes-client/releases/tag/v8.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
