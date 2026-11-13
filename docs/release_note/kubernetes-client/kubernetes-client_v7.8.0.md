---
title: "kubernetes-client v7.8.0"
project: "kubernetes-client"
repo: "fabric8io/kubernetes-client"
tag: "v7.8.0"
published: "2026-06-29"
type: "minor"
lang: "en"
summary: "Full Changelog: https://github.com/fabric8io/kubernetes-client/compare/v7.7.0...v7.8.0"
---

# kubernetes-client v7.8.0

#### Bugs
- Fix #7953: (httpclient-jdk) bodyless requests now preserve the requested HTTP method instead of silently defaulting to `GET`. `JdkHttpClientImpl.requestBuilder` only called `HttpRequest.Builder.method(...)` inside the `body != null` branch, so a bodyless `DELETE`/`POST`/`PUT`/`PATCH` (such as `client.raw(uri, "DELETE", null)`) was sent as `GET` on the JDK backend; the method is now set with `BodyPublishers.noBody()` when there is no body, matching the OkHttp, Jetty and Vert.x backends
- Fix #7435: (kubernetes-client) A `SharedIndexInformer`'s periodic resync no longer stops permanently and silently when a single resync cycle throws. `DefaultSharedIndexInformer.scheduleResync` runs the resync through `Utils.scheduleAtFixedRate`, whose self-rescheduling chain re-arms the next cycle only when the previous one completes normally; an uncaught exception completed the (unobserved) `resyncFuture` exceptionally and the resync was never scheduled again, with no log, while the independent watch kept `isWatching()` reporting `true` (a restart was required to recover). The resync command now catches and `WARN`-logs the failure so the schedule fires again at the next interval
- Fix #7933: (kubernetes-client-api) Deterministic TLS trust failures (untrusted cert, expired cert, hostname mismatch) are now classified as terminal and fail fast instead of being retried by the shared `StandardHttpClient.shouldRetry` backoff loop (~19 s drain). The classifier walks both `getCause()` and `getSuppressed()` trees for `CertificateException`, `CertPathValidatorException`, `CertPathBuilderException`, and `SSLPeerUnverifiedException`. Affects all five HTTP client modules (jdk, jetty, okhttp, vertx-4, vertx-5) on both the HTTP request and WebSocket connect paths
- Fix #7867: (kubernetes-server-mock) `WatchEventsListener` now buffers outgoing watch events that are scheduled before Vert.x fires `onOpen` and replays them once the WebSocket is available, closing the open-side race where a CRUD operation landing between `handleWatch` registering the listener and `onOpen` populating `webSocketRef` scheduled a send that dereferenced a null `webSocketRef`; the resulting `NullPointerException` was silently swallowed by the executor and the event was dropped. Buffered events are replayed after the initial-sync `ADDED`s so ordering is preserved
- Fix #7896: (kubernetes-client) `AbstractWatchManager.watchEnded()` now emits a `WatcherException` when a watch closes cleanly with no messages within 2 seconds, compensating for a GKE-specific behaviour on `v1/events` where the GKFE proxy rejects a stale `resourceVersion` with a bare WebSocket close (code 1000, no body) instead of `{"type":"ERROR","code":410}`, causing an indefinite reconnect loop with the same stale resourceVersion
- Fix #7907: (httpclient-vertx-5) WebSocket-over-TLS operations (`exec`/`attach`/`portForward`/WebSocket-backed watches, and the CRD-establishment waits that depend on them) now trust the cluster certificate again. Vert.x 5.1 rewrote the WebSocket client to resolve TLS through a per-connection `ClientSSLOptions` that ignored the custom `SslContextFactory` the client used as its sole carrier of trust material, so WebSocket handshakes silently fell back to the default JVM trust store, failed PKIX validation, and hung to the client-side timeout (regular HTTPS request/response was unaffected). Both the HTTP and WebSocket clients are now configured uniformly with Vert.x `TrustOptions`/`KeyCertOptions` derived from the supplied trust/key managers
- Fix #7873: (kube-api-test) `Utils.findFreePort` now records every port it hands out for the JVM's lifetime and skips any port already returned, eliminating the back-to-back duplicate-port window that surfaced as a `JUnitExtensionOnMethodTest.simpleTest2` flake — the probe `ServerSocket` was closed before the caller bound it, so `EtcdProcess.startEtcd()` and `KubeAPIServerProcess.startApiServer()` could draw the same port from `Random.nextInt`, etcd would win the bind, and apiserver would exit 1 with `bind: address already in use`, surfacing in `ProcessReadinessChecker` as `Connection reset by peer`
- Fix #7857: (kubernetes-server-mock) `WatchEventsListener.onClosing` now queues the server-side `WebSocket.close(...)` on the listener's send executor instead of invoking it directly on the Vert.x event loop. This preserves FIFO ordering with any data frames already queued on that executor, so events scheduled before a client-initiated watch close (e.g. an `ADDED`/`DELETED` pair on a final `create`/`delete` before `watch.close()`) are delivered before the close frame instead of being silently dropped by writes against an already-closing socket
- Fix #7832: (sonar) Re-interrupt thread in 8 production-code catch blocks that swallowed `InterruptedException` without preserving the interrupt status (S2142)
- Fix #7841: (mockwebserver) split `Dispatcher` shutdown into two phases so `MockDispatcher` only tears down per-session `WebSocketSession` executors after the HTTP server has drained, removing the window where an in-flight upgrade's `onOpen` could land on a shut-down executor. `shutdown()` still runs before `httpServer.close()` to unblock blocked dispatches (e.g. `QueueDispatcher.take()`); the new `releaseResources()` runs after. `WebSocketSession.send()` additionally catches `RejectedExecutionException` defensively so any residual shutdown race stays silent instead of bubbling as a Vert.x `Unhandled exception`. `KubernetesMixedDispatcher` now delegates both lifecycle hooks to its inner `MockDispatcher`, fixing a pre-existing leak where CRUD-mode WebSocket session executors were never shut down
- Fix #7779: (kubernetes-client) ExecWebSocketListener now notifies the user-supplied ExecListener on transport-level errors that race with `terminateOnError` / channel-3 exit-status completion — `listener.onFailure` (or `onClose`) fires exactly once, gated by a dedicated flag, instead of being silently swallowed when the deferred onError task observes `exitCode.isDone()`
- Fix #7765: (kubernetes-client) `BaseOperation.informOnCondition` now stops the informer inline when the inner predicate completes the future, closing a CompletableFuture `postComplete` race where a waiter helping drain dependents could fire `informer.stop` after `cf.complete` had already triggered a spurious `?watch=true` HTTP request
- Fix #7847: (kubernetes-client) `BaseClient.addToCloseable` now synchronizes on the internal closeable set rather than the caller-supplied parameter, so callers cannot break mutual exclusion by passing different references (sonar S2445)
- Fix #7847: (kubernetes-client-api) `KUBERNETES_SUBDOMAIN_REGEX` uses possessive quantifiers on the outer groups to block ReDoS-style backtracking on adversarial subdomain input; semantics still match the canonical RFC 1123 subdomain pattern (sonar S5998)
- Fix #7847: (kubernetes-client-api) `Serialization.yamlMapper` builds the mapper into a local before assigning to the `volatile` field, so concurrent readers can no longer observe a partially-initialized instance with modules not yet registered (sonar S3064)
- Fix #7847: (mockwebserver) self-signed cert/key temp file cleanup goes through `Files.deleteIfExists` with logging instead of swallowing the `File.delete()` return value (sonar S899)
- Fix #7847: (httpclient-okhttp) `OkHttpClientBuilderImpl` now picks the first `X509TrustManager` from a multi-entry `TrustManager[]` rather than passing `null` to OkHttp's `sslSocketFactory` and NPE'ing; user-supplied `sslContext` is preserved for multi-CA setups (sonar S2637)
- Fix #7847: (httpclient-okhttp) `OkHttpClientImpl.doClose` removes dead null checks on `dispatcher` and `connectionPool` that are guaranteed non-null by the OkHttp API (sonar S2583)

#### Improvements
- Fix #7675: (mockwebserver) `MockWebServer.dispatcher` field marked `volatile` so a `setDispatcher(...)` call is reliably visible to the Vert.x request handler thread without further synchronization. `MockWebServer.reset()` Javadoc tightened to make its non-destructive contract explicit (no change to the running server, dispatcher, listeners, SSL/TLS state, port, or protocols)
- Fix #7809: (kubernetes-client) Support for shard selectors for list and watch - including informers
- Fix #7837: (kubernetes-client) Follow-ups on shard selector
- Fix #7899: (kubernetes-client) Callback before re-list for Informers

#### Dependency Upgrade
- Fix #7849: bump istio.io/client-go from 1.29.2 to 1.30.0
- Fix #7894: bump k8s.io/autoscaler/vertical-pod-autoscaler from 1.6.0 to 1.7.0
- Fix #7894: bump k8s.io/gengo/v2 from 2.0.0-20251215205346-5ee0d033ba5b to 2.0.0-20260408192533-25e2208e0dc3
- Fix #7894: bump k8s.io/kube-openapi from 0.0.0-20260319004828-5883c5ee87b9 to 0.0.0-20260414162039-ec9c827d403f
- Fix #7875: bump vertx5.version from 5.0.12 to 5.1.1, adapting httpclient-vertx-5 to Vert.x 5.1 behaviour changes (SSL engine options no longer accept an empty protocol array; request-body stream errors are reset with HTTP/2 CANCEL so they are not retried as transient IOExceptions)

#### New Features
- Fix #7926: (httpclient-vertx-5, httpclient-vertx) opt-in TLS warm-up on the Vert.x HTTP client factory. `Vertx5HttpClientFactory`/`VertxHttpClientFactory` now expose `setTlsWarmup(TlsWarmup)` with modes `OFF`, `CONTEXT` (default, unchanged) and `FULL`. `FULL` runs a synchronous, once-per-JVM, throwaway loopback TLS handshake off the event loop when the client is built, so the first real connection no longer blocks the event loop on the one-time JDK/Netty TLS class loading — for users on cold or hard-CPU-throttled JVMs hitting the first-connection block/timeout described in #7921. Default behavior is unchanged; see the FAQ for CDS and pod CPU-sizing guidance for hard-throttled pods
- Fix #5084: Jbang scripts to generate graalVM metadata
- Fix #7375: (crd-generator) Support @JsonClassDescription for adding descriptions to classes in the generated CRD schema.

## New Contributors
* @officialasishkumar made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7783
* @tehaci made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7898
* @GrosQuildu made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7937

**Full Changelog**: https://github.com/fabric8io/kubernetes-client/compare/v7.7.0...v7.8.0

---

> **Source** [fabric8io/kubernetes-client](https://github.com/fabric8io/kubernetes-client) · `v7.8.0` · 2026-06-29 · [upstream release](https://github.com/fabric8io/kubernetes-client/releases/tag/v7.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
