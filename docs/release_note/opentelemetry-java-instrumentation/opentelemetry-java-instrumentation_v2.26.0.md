---
title: "opentelemetry-java-instrumentation v2.26.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.26.0"
published: "2026-03-14"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.60.1."
---

# opentelemetry-java-instrumentation v2.26.0

This release targets the OpenTelemetry SDK 1.60.1.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they are still alpha quality and will continue to have breaking changes. Please see the [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

 ### ⚠️ Breaking changes to non-stable APIs

- Remove deprecated AWS Lambda v2.2 wrappers and `forceFlush(int, TimeUnit)` overload ([#16170](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16170))
- Remove deprecated HTTP client/server methods ([#16167](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16167))
- Remove deprecated database instrumentation methods and classes ([#16164](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16164))
- Remove deprecated peer-service mapping APIs ([#16165](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16165))
- Make runtime-telemetry deprecated classes now internal ([#16173](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16173))
- Remove `AttributesExtractorUtil` ([#16152](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16152))
- Remove marker interface from `SqlClientAttributesGetter` ([#16205](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16205))
- Merge network/server getter methods into DB attribute getters ([#16264](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16264), [#16268](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16268))
- Rename SQL sanitizer classes to SQL analyzer ([#16269](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16269))
- Rename internal common module packages to follow new naming convention ([#16284](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16284), [#16308](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16308), [#16327](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16327), [#16341](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16341), [#16373](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16373))

### 🚫 Deprecations

- Deprecated individual runtime-telemetry module classes in favor of unified module ([#16087](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16087))
- Deprecated old HTTP server query parameter methods in favor of sensitive query param handling ([#16097](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16097))
- Deprecated old RPC attributes getter methods in favor of new ones supporting stable semantic conventions ([#16130](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16130))
- Deprecated old ClickHouse instrumentation methods as part of simplification ([#16206](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16206))
- Deprecated old R2DBC methods in favor of ones supporting `db.system.name` ([#16251](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16251))
- Deprecated old `DbClientAttributesGetter` methods; added `getErrorType()` with implementations ([#16276](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16276))
- Deprecated old RPC metrics methods in favor of ones supporting stable semantic conventions ([#16298](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16298))
- Deprecated old `DbClientAttributesGetter` methods; added `getDbName()` to better support old/stable semconv split ([#16318](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16318))

### 📈 Enhancements

- Add server address and port attributes for Spymemcached ([#15242](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15242))
- Add Kafka Connect as a built-in JMX metrics target ([#15561](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15561))
- Convert Lettuce instrumentation to use `Instrumenter` ([#15838](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15838))
- OpenSearch Java client: capture sanitized search query bodies ([#15634](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15634))
- Apply stable semantic conventions to Camel JMX metrics ([#16088](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16088))
- Add `jvm.file_descriptor.limit` metric ([#16174](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16174))
- Run gRPC client callbacks with parent context ([#16175](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16175))
- SQL summary: handle `EXPLAIN` statements ([#16184](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16184))
- Simplify InfluxDB instrumentation ([#16207](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16207))
- Update histogram buckets for `db.client.operation.duration` ([#16222](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16222))
- SQL summary: support Oracle dblink syntax ([#16230](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16230))
- Add instrumentation for ZIO HTTP server route ([#16232](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16232))
- Remove network attributes under database stable semconv flag ([#16257](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16257))
- Support Javalin 7 ([#16261](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16261))
- gRPC: initial stable semconv support ([#16304](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16304))
- Populate `os.version` resource attribute ([#16311](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16311))
- Camel: don't emit db spans under stable semconv ([#16275](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16275))
- Dubbo: stable semconv support ([#16352](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16352))
- Update the OpenTelemetry SDK version to 1.60.0 ([#16407](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16407))
- Use new stable `LogRecordBuilder.setException()` ([#16423](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16423))
- Configure `semconv-stability.opt-in` with declarative config API ([#16443](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16443))
- Support `otel.event.name` ([#16220](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16220))

### 🛠️ Bug fixes

- SQL sanitizer now treats double-quoted fragments as string literals by default ([#15582](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15582))
- Clear recorded exception when request completes ([#16138](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16138))
- Clear URL connection state after ending span ([#16155](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16155))
- Fix Spring declarative config with environment variable substitution ([#15775](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/15775))
- Fix Ktor server send pipeline error handling ([#16192](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16192))
- Logging appenders: `KeyValue` attributes should take priority over MDC ([#16239](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16239))
- Create new `PekkoRouteHolder` for each request ([#16258](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16258))
- Tomcat JMX: ignore negative thread and session limits ([#16355](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16355))
- `server.port` is required on HTTP client spans ([#16388](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16388))
- Fix Ktor server instrumentation resolving peer address ([#16392](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16392))
- Fix class cast exception in servlet instrumentation ([#16403](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16403))
- Fix empty response body on Jetty HttpClient 9.4.24–9.4.43 ([#16406](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/16406))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@aaaugustine29
@Arpan200502
@breedx-splk
@filipl
@fuleow
@hilmarf
@huange7
@imrahul23
@jack-berg
@jaydeluca
@jonasplaum
@laurit
@lmolkova
@lucacavenaghi97
@minwoox
@mznet
@pepeshore
@richard-salac
@robsunday
@samwright
@self-sasi
@steverao
@SylvainJuge
@trask
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.26.0` · 2026-03-14 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.26.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
