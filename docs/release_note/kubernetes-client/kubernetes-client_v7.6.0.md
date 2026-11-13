---
title: "kubernetes-client v7.6.0"
project: "kubernetes-client"
repo: "fabric8io/kubernetes-client"
tag: "v7.6.0"
published: "2026-03-02"
type: "minor"
lang: "en"
summary: "The kubernetes-httpclient-vertx (Vert.x 4.x) and kubernetes-httpclient-vertx-5 (Vert.x 5.x) modules are mutually exclusive. They must not be included together in your project dependencies. Both modules provide an…"
---

# kubernetes-client v7.6.0

#### Bugs
- Fix #5292: Cluster() configuration should use tlsServerName
- Fix #7174: (httpclient) Fix HTTP client factory priority - VertxHttpClientFactory (default) now has priority -1, OkHttpClientFactory restored to priority 0
- Fix #7174: (httpclient-vertx-5) Add runtime check for Vert.x 5 classes to provide clear error when Vert.x 4/5 conflict occurs
- Fix #7174: (chaos-tests) Fix classpath conflict when testing with Vert.x 5 HTTP client
- Fix #7415: (java-generator) Fix generic type erasure for array of enums with default values
- Fix #7422: (okhttp) Remove internal API usage and fix deprecated OkHttp 5 calls
- Fix #7446: making the timeout of BaseOperation.createOrReplace() configurable

#### Improvements
- Fix #1105: Add javadoc cross-linking for Fabric8 modules and external dependencies
- Fix #5756: Use Editable interface instead of reflection to instantiate resource builders
- Fix #7422: bump okhttp from 4.12.0 to 5.3.2
- Fix #7252: call additionalConfig when building Vert.x HTTP clients with VertxHttpClientFactory

#### Dependency Upgrade
- Fix #7374: bump snakeyaml-engine from 2.10 to 3.0.1

#### New Features
- Fix #7385: Support for Kubernetes v1.35 (Timbernetes)
- Fix #7174: Added Vert.x 5 HTTP client implementation with improved async handling and WebSocket separation
- Fix #7402: Added Byte code level semver API compatibility report generation using Revapi

#### _**Note**_: Breaking changes
- Fix #5756: Resources edited with visitors must now implement `io.fabric8.kubernetes.api.builder.Editable`. All model classes provided by the client already implement this interface. User-provided custom resources that use visitor-based editing will need to implement `Editable` (trivial when a builder already exists).
- Fix #7422: bump okhttp from 4.12.0 to 5.3.2. The versions are binary compatible, but the major version upgrade might cause side effects.

#### _**Note**_: Vert.x HTTP Client Compatibility (Issue #7174)

The `kubernetes-httpclient-vertx` (Vert.x 4.x) and `kubernetes-httpclient-vertx-5` (Vert.x 5.x) modules are **mutually exclusive**.
They must not be included together in your project dependencies.
Both modules provide an implementation of `HttpClient.Factory` and use the same `io.vertx` artifact coordinates but with incompatible major versions.

-*Problem**: If both modules are present on the classpath, Maven's dependency resolution may pick Vert.x 4.x JARs while the `Vertx5HttpClientFactory` is selected at runtime.
This causes `NoClassDefFoundError` for Vert.x 5-specific classes like `io.vertx.core.impl.SysProps`.

-*Solution**: Ensure your project includes only ONE of these modules:
- `kubernetes-httpclient-vertx` (default, uses Vert.x 4.x) - included transitively via `kubernetes-client`
- `kubernetes-httpclient-vertx-5` (optional, uses Vert.x 5.x) - requires explicit dependency and exclusion of vertx-4

When using Vert.x 5, exclude the default Vert.x 4 client and set the `vertx.version` property:
```xml
<properties>
  <vertx.version>${vertx5.version}</vertx.version> <!-- or explicit 5.0.7 -->
</properties>
<dependencies>
  <dependency>
    <groupId>io.fabric8</groupId>
    <artifactId>kubernetes-client</artifactId>
    <exclusions>
      <exclusion>
        <groupId>io.fabric8</groupId>
        <artifactId>kubernetes-httpclient-vertx</artifactId>
      </exclusion>
    </exclusions>
  </dependency>
  <dependency>
    <groupId>io.fabric8</groupId>
    <artifactId>kubernetes-httpclient-vertx-5</artifactId>
  </dependency>
</dependencies>
```

## New Contributors
* @Antrakos made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7416
* @ByteSizedJoe made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7184
* @klopfdreh made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7422
* @asomov made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7377
* @capistrant made their first contribution in https://github.com/fabric8io/kubernetes-client/pull/7384

**Full Changelog**: https://github.com/fabric8io/kubernetes-client/compare/v7.5.2...v7.6.0

---

> **Source** [fabric8io/kubernetes-client](https://github.com/fabric8io/kubernetes-client) · `v7.6.0` · 2026-03-02 · [upstream release](https://github.com/fabric8io/kubernetes-client/releases/tag/v7.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
