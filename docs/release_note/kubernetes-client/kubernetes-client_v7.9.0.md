---
title: "kubernetes-client v7.9.0"
project: "kubernetes-client"
repo: "fabric8io/kubernetes-client"
tag: "v7.9.0"
published: "2026-09-04"
type: "minor"
lang: "en"
summary: "Fix #8024: (httpclient-vertx-5) WebSocket operations (exec/attach/portForward/WebSocket-backed watches) on a derived client - one produced by calling newBuilder()/build() on an already-built HttpClient - no longer fall…"
---

# kubernetes-client v7.9.0

#### Bugs
- Fix #8024: (httpclient-vertx-5) WebSocket operations (`exec`/`attach`/`portForward`/WebSocket-backed watches) on a *derived* client - one produced by calling `newBuilder()`/`build()` on an already-built `HttpClient` - no longer fall back to Vert.x's bare `WebSocketClient` defaults. `Vertx5HttpClientBuilder.build()`'s short-circuit path for derived clients reused the original client's plain HTTP connection (with its configuration intact) but always created a brand-new `WebSocketClient` with no options at all, discarding both the trust/key material (so TLS verified against the JVM default trust store instead of the configured cluster CA) and the configured limits (`maxFrameSize`/`maxMessageSize` fell back to 64 KiB/256 KiB instead of unlimited, and `maxConnections` to 50 instead of 8192, so oversized `exec`/`attach` messages were silently dropped even on plain HTTP). This affects `kubernetes-httpclient-vertx-5` only, which is opt-in - the bundled default `kubernetes-httpclient-vertx` (Vert.x 4) serves WebSockets from the same client it reuses when deriving and was never affected - and it is present in 7.6.0 through 7.8.0. Derivation happens more often than it looks: `OpenShiftClientImpl` derives on every `adapt(OpenShiftClient.class)` to install its OAuth token-refresh interceptor, `OpenShiftOAuthInterceptor` derives on every token refresh, and `BaseClient#newClient` derives whenever a differing `RequestConfig` is set. Derived clients now reuse the original's `WebSocketClient` outright, the same way they already reused its HTTP client, so they can no longer drift from it and no second transport is allocated per derivation. Note that sharing the transport also means closing any client in a derived family closes it for the whole family: `close()` on a client obtained from `adapt(OpenShiftClient.class)` now ends WebSocket operations on the client it was derived from as well, which is already what happened to that client's HTTP requests and what the other four implementations do. Nothing usable is lost, since the original's HTTP client was closed regardless; what changes is that the per-derivation `WebSocketClient` is no longer left behind unclosed
- Fix #8029: (httpclient-vertx-5, httpclient-jetty) WebSocket connections now honor the configured proxy, so `exec`/`attach`/`portForward` and WebSocket-backed watches no longer connect straight to the API server and bypass a mandated egress proxy. Both implementations serve WebSockets from a transport separate from the HTTP client (a Vert.x 5 `WebSocketClient`, and a second Jetty `HttpClient` behind the `WebSocketClient`) and neither was given the proxy configuration; Jetty's WebSocket transport now also receives the proxy `BasicAuthentication` entry. The OkHttp, JDK and Vert.x 4 modules were unaffected because a single client serves both. On `httpclient-vertx-5` the configured connect timeout was not applied to the WebSocket client either, so a WebSocket connect could hang well past it. One consequence worth calling out: when the proxy credentials cannot be decoded - `HttpClientUtils.decodeBasicCredentials` returns `null` for anything that is not `Basic`, or whose decoded value does not split into exactly two `:`-separated parts, so a proxy password containing a colon is enough - the client falls back to stamping `Proxy-Authorization` on the request instead of configuring it on the transport. Such WebSocket connections now reach the proxy and are rejected with a 407 rather than silently completing straight to the API server, so a setup that appeared to work only because it was bypassing the proxy will now fail
- Fix #7807: (kube-api-test) The `KUBE_API_TEST_STARTUP_TIMEOUT` environment variable is now parsed instead of throwing `ClassCastException` on every use — the value (always a `String`) was passed to `Class.cast()` for an `Integer`/`Boolean` target, which only widens reference types and never parses, so the timeout could not be configured via environment at all. A new `startupTimeout` attribute on `@EnableKubeAPIServer` (e.g. `@EnableKubeAPIServer(startupTimeout = 180000)`) allows overriding it declaratively, and all three configuration paths (annotation, builder, env var) now reject non-positive values
- Fix #7983: (mockwebserver) WebSocket upgrades are now performed synchronously from the Vert.x request handler instead of from the asynchronous `HttpServerRequest#body()` callback. Deferring the upgrade let the request end event be processed first, so `HttpServerRequest#toWebSocket()` intermittently threw `IllegalStateException: Request has already been read` and the upgrade was lost (surfacing as flaky `exec`/`attach` mock-server tests). Upgrade requests carry no body, so they are detected via the `Upgrade` header and upgraded before the request is read; the asynchronous path is unchanged for regular HTTP requests
- Fix #7955: (java-generator) Malicious CRD schema values can no longer inject executable code into the generated Java sources. Schema-controlled values (enum values, CRD group/version/names, property names, descriptions and defaults) are emitted as fully escaped Java string literals, so a value carrying a Unicode-escaped quote cannot break out of its literal once `javac` decodes it. As a defense in depth, each generated class is also re-parsed and structurally validated before it is written (with Java Unicode escape preprocessing enabled to match `javac`), aborting generation on any residual structural mismatch
- Fix #8028: (openshift-model, kube-api-test) No package is shipped by two artifacts anymore, so each pair can be placed on the JPMS module path together. `openshift-model` no longer bundles the `io.fabric8.openshift.api.model.config.*` classes that `openshift-model-config` owns (its `Export-Package` wildcard inlined them from that dependency); they still reach consumers through it. `Fabric8ClientInjectionHandler` moved to `io.fabric8.kubeapitest.junit.inject`

#### Improvements

#### Dependency Upgrade
- Fix #8033: bump gateway-api from 1.5.1 to 1.6.1

#### New Features
- Fix #7752: Support for Kubernetes v1.37.0 (Garhwal)
- Fix #8033: gateway-api model gains `v1.TCPRoute` and `v1.UDPRoute` (both graduated from `v1alpha2` upstream in gateway-api v1.6.0). The `v1alpha2` types remain available, but upstream has deprecated them and will remove them in a future release, so new code should use the `v1` types

#### _**Note**_: Breaking changes
- Fix #7752: Kubernetes model API removals (removed upstream in Kubernetes v1.37.0). The following API versions have been completely removed from Kubernetes and are no longer available in the client:
  - `certificates.k8s.io/v1alpha1/ClusterTrustBundle` → use `certificates.k8s.io/v1` or `v1beta1`
  - `networking.k8s.io/v1beta1/IPAddress` → use `networking.k8s.io/v1`
  - `networking.k8s.io/v1beta1/ServiceCIDR` → use `networking.k8s.io/v1`
  - `storage.k8s.io/v1beta1/VolumeAttributesClass` → use `storage.k8s.io/v1`
  - `scheduling.k8s.io/v1alpha2` (entire API version, 28 types) → use `v1alpha3` or `v1beta1`
- Fix #7752: `VolumeMount` constructor signature changed (Kubernetes v1.37.0 added `bindMountOptions` field). The canonical constructor now takes `bindMountOptions` (List<String>) as its first parameter. Builder usage (`new VolumeMountBuilder().with...()`) is unaffected
- Fix #8033: gateway-api model `v1.SessionPersistence` no longer exposes `idleTimeout` (removed upstream in gateway-api v1.6.0). Besides the field, this removes `getIdleTimeout()`/`setIdleTimeout()`, collapses the canonical constructor from five arguments to four, and drops `SessionPersistenceFluent.withIdleTimeout()`/`getIdleTimeout()`/`hasIdleTimeout()`, so the builder form (`withNewSessionPersistence().withIdleTimeout(...)`) no longer compiles. There is no runtime data loss: the class keeps its `@JsonAnyGetter`/`@JsonAnySetter`, and both the fluent and the builder carry `additionalProperties` through, so JSON or YAML still containing `idleTimeout` continues to deserialize and re-serialize intact
- Fix #8028: (kube-api-test) `Fabric8ClientInjectionHandler` moved to `io.fabric8.kubeapitest.junit.inject`. It is resolved through `ServiceLoader`, so only code naming the class directly is affected
- Fix #8028: (openshift-model) The bundle no longer exports or contains `io.fabric8.openshift.api.model.config.*`. Maven consumers are unaffected (`openshift-model-config` is a compile dependency), but OSGi deployments importing those packages must install the `openshift-model-config` bundle, which the `openshift-client` Karaf feature already does

## New Contributors
* @mfredenhagen made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7983
* @austek made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/8028
* @xstefank made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/8025
* @williamhaw made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/8033

**Full Changelog**: https://github.com/fabric8io/kubernetes-client/compare/v7.8.0...v7.9.0

---

> **Source** [fabric8io/kubernetes-client](https://github.com/fabric8io/kubernetes-client) · `v7.9.0` · 2026-09-04 · [upstream release](https://github.com/fabric8io/kubernetes-client/releases/tag/v7.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
