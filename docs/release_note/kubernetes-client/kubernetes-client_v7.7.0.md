---
title: "kubernetes-client v7.7.0"
project: "kubernetes-client"
repo: "fabric8io/kubernetes-client"
tag: "v7.7.0"
published: "2026-05-12"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/fabric8io/kubernetes-client/compare/v7.6.1...v7.7.0"
---

# kubernetes-client v7.7.0

#### Bugs
- Fix #7747: (mockwebserver) avoid RejectedExecutionException in MockWebServer#shutdown() — linearize close sequence to remove the httpClose-listener vs await race, and make shutdown() idempotent against repeated calls (e.g. JUnit @Nested afterAll cascades)
- Fix #7734: (mockwebserver) avoid sending Content-Length together with Transfer-Encoding for chunked responses
- Fix #7716: (informer) SerialExecutor.execute() now returns immediately after shutdown — no wrapper is offered, scheduleNext() is not called, and the underlying executor is not touched, fixing a post-stop NPE race exposed by SharedProcessor.distribute(...) after stop()
- Fix #7702: ExecWebSocketListener.onError now wraps WebSocketHandshakeException via the chaining KubernetesClientException constructor instead of post-hoc initCause — handshake failures with a non-null upgrade response no longer throw IllegalStateException synchronously, so onFailure/exitCode receive the parsed Status and the original handshake exception as the cause
- Fix #7686: (httpclient-vertx-5) StackBasedRecursionGuard.enter() no longer increments depth when refusing entry, fixing an infinite runOnContext loop that stalled InputStreamReadStream uploads under CPU contention
- Fix #7700: ExecWebSocketListener.onError now defers failure handling through the SerialExecutor so a pending channel-3 exit-status task runs first and the parsed exit code is preserved instead of being overwritten by a peer-close exception
- Fix #7698: (httpclient-vertx-5) InputStreamReadStream now fires endHandler when registered after the end signal has already been delivered, fixing a race for empty/fast streams
- Fix #7696: (httpclient-vertx) clear response exception handler before reset in cancel() to prevent StreamResetException from racing with future cancellation
- Fix #7695: ExecWebSocketListener now defers exitCode completion through the SerialExecutor so pending stdout/stderr async writes are flushed before exit signals
- Fix #7632: java-generator now HTML-escapes `<`, `>`, and `&` in CRD descriptions to produce valid Javadoc
- Fix #7543: fix processInlineDuplicateFields to recursively resolve nested inline embeds
- Fix #7450: StandardHttpClient.shouldRetry() does not retry on Vert.x HttpClosedException
- Fix #7350: Improper callback timing in leaderelection leads to the dual-leader
- Fix #7265: fix ephemeral removal of index entries from informer caches

#### Improvements
- Fix #7426: add `HasMetadata#isSameResource` to test whether two HasMetadata instances point to the same logical cluster resource, with an optional strict mode that also requires matching kind and resourceVersion
- Fix #7662: (mockwebserver) new `MockWebServer#setHttp2ClearTextEnabled(boolean)` setter to opt out of HTTP/2 cleartext (h2c) upgrade
- Fix #7522: improve dependency management for kubernetes-httpclient-okhttp
- Fix #7550: add a ResourceEventHandler onList method and deprecated onNothing
- Fix #6922: add addOwnerReference variant to set controller and blockOwnerDeletion fields
- Fix #3396: (mockwebserver) Enhance self-signed certificate generation to include Subject Alternative Names (SANs) for proper TLS verification by modern clients
- Fix #6923: Make the crd-generator-maven-plugin be toolchain aware

#### Dependency Upgrade
- Fix #7754: bump baremetal-operator/apis from 0.12.4 to 0.13.0
- Fix #7754: bump cluster-api-provider-metal3 from 1.12.4 to 1.13.0
- Fix #7651: bump k8s.io/apimachinery from 0.35.4 to 0.36.0
- Fix #7579: bump istio.io/client-go from 1.28.0 to 1.29.1
- Fix #7551: bump jackson-bom from 2.20.0 to 2.21.1
- Fix #7718: bump kin-openapi from 0.135.0 to 0.137.0
- Fix #7758: bump kin-openapi from 0.137.0 to 0.138.0
- Fix #7723: bump knative.dev/eventing from 0.48.2 to 0.49.0
- Fix #7723: bump knative.dev/eventing-github from 0.48.0 to 0.49.0
- Fix #7723: bump knative.dev/eventing-gitlab from 0.48.0 to 0.49.0
- Fix #7723: bump knative.dev/eventing-kafka-broker from 0.48.3 to 0.49.0
- Fix #7723: bump knative.dev/networking from 0.0.0-20260120131110-a7cdca238a0d to 0.0.0-20260422140718-e9578ef11562
- Fix #7723: bump knative.dev/serving from 0.48.2 to 0.49.0
- Fix #7580: bump kustomize/api from 0.20.1 to 0.21.1
- Fix #7726: bump tektoncd/pipeline from 1.11.1 to 1.12.0
- Fix #7552: bump tektoncd/triggers from 0.33.0 to 0.35.0
- Fix #7556: bump eventing-kafka-broker from 0.46.2 to 0.48.1
- Fix #7553: bump cert-manager from 1.19.4 to 1.20.0
- Fix #7557: bump baremetal-operator/apis from 0.9.2 to 0.12.2
- Fix #7544: bump cluster-api-provider-metal3 from 1.9.3 to 1.12.2
- Fix #7543: bump prometheus-operator from 0.85.0 to 0.89.0
- Fix #7542: bump open-cluster-management.io/api from 0.16.2 to 1.2.0
- Fix #7753: bump open-cluster-management.io/api from 1.2.0 to 1.3.0
- Fix #7541: bump gateway-api from 1.4.0 to 1.5.0
- Fix #7538: bump cert-manager from 1.18.2 to 1.19.4
- Fix #7583: bump operator-framework/api from 0.33.0 to 0.41.0
- Fix #7589: bump prometheus-operator from 0.89.0 to 0.90.0
- Fix #7736: bump prometheus-operator from 0.90.1 to 0.91.0
- Fix #7578: bump tektoncd/pipeline from 1.9.0 to 1.10.2
- Fix #7582: bump vertical-pod-autoscaler from 1.4.1 to 1.6.0
- Fix #7659: bump vertx.version from 4.5.24 to 4.5.26
- Fix #7731: bump vertx-5 version from 5.0.7 to 5.0.12

#### New Features
- Fix #7417: Support for Kubernetes v1.36 (ハル / Haru)
- Fix #5495: Add more support for subresource operations with enhanced documentation and examples for the generic `subresource()` method
- Fix #7451: Add support for server-side content negotiation (Table and PartialObjectMetadata responses)

#### _**Note**_: Breaking changes
- Fix #7417: `scheduling.k8s.io/v1alpha1` model classes removed (`Workload`, `WorkloadList`, `WorkloadSpec`, `PodGroup`, `PodGroupPolicy`, `BasicSchedulingPolicy`, `GangSchedulingPolicy`, `TypedLocalObjectReference`) — upstream rearchitected workload scheduling via KEP-5832
- Fix #7544: cluster-api model classes moved from package `io.fabric8.kubernetes.api.model.clusterapi.v1beta1` to `io.fabric8.kubernetes.api.model.clusterapi.core.v1beta1` (following upstream cluster-api v1.11+ API reorganization)
- Fix #7538: cert-manager model `ObjectReference` renamed to `IssuerReference` (following upstream rename in cert-manager v1.19.0)
- Fix #7541: gateway-api model `v1beta1.ReferenceGrantFrom`, `v1beta1.ReferenceGrantSpec`, and `v1beta1.ReferenceGrantTo` removed (ReferenceGrant graduated to v1 upstream)
- Fix #7723: knative model `internal.autoscaling.v1alpha1.PodScalableSpec.template` field removed (upstream removed the field in autoscaling.internal.knative.dev v1alpha1)
- Fix #7580: kustomize model `Patch.options` field type changed from `Map<String, Boolean>` to `PatchArgs` (following upstream kustomize v0.21.0 PatchArgs API type addition)
- Fix #7543: monitoring model `v1.AuthorizationValidationError`, `v1.OAuth2ValidationError`, `v1.ProbeTargetsValidationError`, and `v1.PrometheusTracingConfig` removed
- Fix #7736: monitoring model `v1.ThanosSpec.grpcServerTlsConfig` and `v1.ThanosRulerSpec.grpcServerTlsConfig` field type changed from `TLSConfig` to the new `GRPCServerTLSConfig` (following upstream prometheus-operator v0.91.0)
- Fix #7542: open-cluster-management model `operator.v1.WebhookConfiguration` removed (replaced by `DefaultWebhookConfiguration` and `HostedWebhookConfiguration` upstream)

## New Contributors
* @Desel72 made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7558
* @rtsui-harmonicinc made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7699
* @taole33 made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7383

**Full Changelog**: https://github.com/fabric8io/kubernetes-client/compare/v7.6.1...v7.7.0

---

> **Source** [fabric8io/kubernetes-client](https://github.com/fabric8io/kubernetes-client) · `v7.7.0` · 2026-05-12 · [upstream release](https://github.com/fabric8io/kubernetes-client/releases/tag/v7.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
