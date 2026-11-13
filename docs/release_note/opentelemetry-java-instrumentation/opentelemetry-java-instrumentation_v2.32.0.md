---
title: "opentelemetry-java-instrumentation v2.32.0"
project: "opentelemetry-java-instrumentation"
repo: "open-telemetry/opentelemetry-java-instrumentation"
tag: "v2.32.0"
published: "2026-10-03"
type: "minor"
lang: "en"
summary: "This release targets the OpenTelemetry SDK 1.66.0."
---

# opentelemetry-java-instrumentation v2.32.0

This release targets the OpenTelemetry SDK 1.66.0.

Note that many artifacts have the `-alpha` suffix attached to their version number, reflecting that they will continue to have breaking changes. Please see [VERSIONING.md](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/VERSIONING.md#opentelemetry-java-instrumentation-versioning) for more details.

### ⚠️ Breaking changes to non-stable APIs

- Remove the deprecated `HostIdResource.REGISTRY_QUERY` constant. ([#19778](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19778))
- The `ExperimentalJmxMetricHandler` SPI now requires implementations to provide `getMetricNames()`. ([#19781](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19781))
- Add the required `isRequestStreaming(REQUEST)` method to `GenAiAttributesGetter`. ([#19879](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19879))
- The experimental `java.common.messaging.headers/development` YAML selector no longer configures header capture. Use `java.common.messaging.headers` instead. ([#20260](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20260))

### 🚫 Deprecations

- Deprecate `otel.jmx.target.system` in favor of `otel.jmx.metrics.experimental.included`. ([#19783](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19783))
- Deprecate `otel.instrumentation.elasticsearch.capture-search-query`. It will be removed in 3.0, when search query bodies are always captured. There is no replacement. ([#19675](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19675))
- Deprecate `otel.instrumentation.opensearch.capture-search-query`. It will be removed in 3.0, when search query bodies are always captured. There is no replacement. Sanitization remains enabled by default and configurable with `otel.instrumentation.opensearch.query-sanitization.enabled`. ([#19837](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19837))
- Deprecate `otel.jmx.enabled` in favor of `otel.instrumentation.jmx.enabled` to align with other instrumentation enablement properties. ([#19945](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19945))
- Deprecate automatic rewriting of `VirtualField.find(Class, Class)` calls in inlined javaagent advice. Instead, look up the `VirtualField` once and store it in a helper class's `static final` field. The `find` method itself remains supported. ([#19980](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19980))
- Deprecate the Elasticsearch REST library instrumentation. Use the Elasticsearch Java API Client's native OpenTelemetry support, or the Java agent for direct `RestClient` usage. Java agent instrumentation is unaffected. ([#19995](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19995))
- Deprecate `otel.instrumentation.messaging.experimental.receive-telemetry.enabled` in favor of `otel.instrumentation.common.messaging.experimental.receive-telemetry.enabled`. For headers, replace `otel.instrumentation.messaging.experimental.headers.included` and `.excluded` with `otel.instrumentation.common.messaging.headers.included` and `.excluded`. Also deprecate `otel.instrumentation.messaging.experimental.capture-headers` in favor of `otel.instrumentation.common.messaging.headers.included`. Stable selectors take precedence per leaf. ([#20060](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20060), [#20260](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20260))
- Deprecate the `.included` / `.excluded` properties under `otel.instrumentation.log4j-appender.experimental.map-message-attributes`, `otel.instrumentation.logback-appender.experimental.key-value-pair-attributes`, `otel.instrumentation.logback-appender.experimental.logstash-marker-attributes`, and `otel.instrumentation.logback-appender.experimental.logstash-structured-argument-attributes` in favor of the stable and unified `otel.instrumentation.common.logging.structured-attributes.included` / `.excluded`. ([#20066](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20066))
- Deprecate `otel.instrumentation.couchbase.experimental-span-attributes` in favor of `otel.instrumentation.couchbase.emit-experimental-telemetry`, a broader name for experimental attributes and internal spans from the underlying Couchbase client. ([#20117](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20117))
- Deprecate `otel.traces.sampler=linksbased_parentbased_always_on` with no replacement and declarative `rule_based_routing` in favor of the SDK incubator composite/development `rule_based` sampler, whose configuration and matching behavior differ. ([#20249](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20249))
- Promote controller and view telemetry configuration to the stable properties `otel.instrumentation.common.controller-telemetry.enabled` and `otel.instrumentation.common.view-telemetry.enabled`, deprecating `otel.instrumentation.common.experimental.controller-telemetry.enabled` and `otel.instrumentation.common.experimental.view-telemetry.enabled`. ([#20258](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20258))
- Promote Java agent span suppression configuration to the stable property `otel.instrumentation.common.span-suppression-strategy`, deprecating `otel.instrumentation.experimental.span-suppression-strategy`. ([#20259](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20259))
- Deprecate `otel.instrumentation.oshi.experimental-metrics.enabled`, `ProcessMetrics`, and its `registerObservers(...)` methods in favor of `jvm.memory.used` and `jvm.cpu.time`. ([#20323](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20323))
- Deprecate `SystemMetrics.registerObservers(Meter)` in the OSHI library instrumentation in favor of `SystemMetrics.registerObservers(OpenTelemetry)`. ([#20263](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20263))
- In declarative configuration YAML, deprecate dotted selectors in the `distribution.javaagent.instrumentation.enabled` and `.disabled` lists. Use `reactor_3_1` instead of `reactor_3.1`. Flat-property names such as `otel.instrumentation.reactor-3.1.enabled` are unchanged. ([#20326](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20326))

### 🌟 New javaagent instrumentation

- Add Redisson database connection pool metrics for versions 2.3.0 through 3.25. ([#19152](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19152), [#19634](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19634))
- Add Java agent instrumentation for Pekko remoting so trace context propagates across remote calls. ([#19823](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19823))

### 📈 Enhancements

- Expand the upcoming 3.0 database semantic conventions behind `otel.semconv-stability.opt-in=database`, including configured server targets and span names, endpoint validation, network-peer attributes, Redis namespaces, operation names, error types, query text, and connection pool metric names and database identity for Cassandra, ClickHouse, Couchbase, Elasticsearch, Geode, HBase, JDBC, Redis clients, MongoDB, OpenSearch, R2DBC, Spymemcached, and Vert.x. ([#19728](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19728), [#19747](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19747), [#19749](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19749), [#19753](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19753), [#19757](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19757), [#19795](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19795), [#19830](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19830), [#19831](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19831), [#19832](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19832), [#19834](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19834), [#19838](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19838), [#19839](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19839), [#19844](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19844), [#19845](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19845), [#19846](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19846), [#19848](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19848), [#19850](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19850), [#19864](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19864), [#19868](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19868), [#19872](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19872), [#19877](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19877), [#19883](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19883), [#19901](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19901), [#19902](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19902), [#19903](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19903), [#19904](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19904), [#19981](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19981), [#19983](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19983), [#19986](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19986), [#19988](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19988), [#20008](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20008), [#20011](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20011), [#20015](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20015), [#20017](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20017), [#20041](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20041), [#20065](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20065), [#20068](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20068), [#20070](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20070), [#20071](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20071), [#20072](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20072), [#20073](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20073), [#20074](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20074), [#20075](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20075), [#20076](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20076), [#20077](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20077), [#20078](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20078), [#20080](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20080), [#20082](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20082), [#20084](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20084), [#20086](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20086), [#20089](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20089), [#20105](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20105))
- Expand the upcoming 3.0 messaging semantic conventions behind `otel.semconv-stability.opt-in=messaging`, including operation-based spans, client and process metrics, per-message batch creation and propagation, consistent timestamps, durable subscription names, and duplicate processing suppression for Camel, Kafka Connect, JMS, SQS, and RocketMQ. ([#19483](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19483), [#19485](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19485), [#19503](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19503), [#19517](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19517), [#19915](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19915), [#20045](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20045), [#20067](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20067), [#20144](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20144))
- Kafka spans and metrics now include `messaging.kafka.cluster.id` once cluster metadata is resolved. ([#18978](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/18978))
- Add SQL database attributes to AWS SDK v2 RDS Data API `ExecuteStatement` and `BatchExecuteStatement` spans. ([#19259](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19259))
- Add `WARNING` logs for invalid or empty extension locations and failed extension JAR loads, plus `FINE` logs for successfully loaded extension JARs. ([#19584](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19584))
- The JMX metrics library now includes the experimental Kafka broker metrics target. ([#19722](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19722))
- Update the descriptions of `kafka.connect.connector.status` and `kafka.connect.task.status` to omit the listed supported state values. ([#19724](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19724))
- Geode database client spans now include `server.address` and `server.port` when the region's pool has exactly one configured server. ([#19748](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19748))
- Add exception-log support for HBase database clients, SofaRPC clients and servers, and GWT RPC with `otel.semconv.exception.signal.preview=logs`. ([#19750](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19750), [#20253](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20253), [#20254](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20254))
- Add `server.address` and `server.port` attributes to Couchbase database spans. ([#19758](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19758))
- Add metric-name filtering for JMX metrics with `otel.jmx.metrics.included` and `otel.jmx.metrics.excluded`, or `JmxTelemetryBuilder.setMetrics(IncludeExclude)` in the library. ([#19782](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19782))
- RabbitMQ spans now include `messaging.rabbitmq.vhost.name` and `messaging.rabbitmq.cluster.name` when `otel.instrumentation.rabbitmq.experimental-span-attributes=true`. ([#19822](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19822))
- JMX metric creation messages are now logged at `FINE` instead of `INFO`, reducing default log noise. ([#19825](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19825))
- Akka HTTP server spans now include the remote peer address in network peer address attributes. ([#19840](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19840))
- Pekko HTTP server spans now include `client.address` from the socket peer for HTTP/1.1 and HTTP/2 requests. ([#19841](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19841))
- Add the `network.protocol.version` attribute to Spring WebFlux 5.0 client request duration metrics. ([#19842](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19842))
- Ratpack HTTP client spans now include the `network.protocol.version` attribute. ([#19843](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19843))
- Add `otel.instrumentation.opensearch.query-sanitization.enabled` (default `true`) to control whether captured search query bodies are sanitized; set it to `false` to capture them verbatim. ([#19869](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19869))
- GenAI spans now include the `gen_ai.request.stream` attribute when the request uses streaming. ([#19879](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19879))
- OpenAI Java 1.1 instrumentation now reports cached input token counts as `gen_ai.usage.cache_read.input_tokens` and reasoning output token counts as `gen_ai.usage.reasoning.output_tokens` when usage details are available. ([#19906](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19906))
- Extend Couchbase Java agent instrumentation to support SDK 3.0.x. ([#19996](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19996))
- Add the `aws.bedrock.guardrail.id` span attribute to AWS Bedrock Runtime requests when a guardrail identifier is configured. ([#20040](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20040))
- Make `host.id` resource detection opt-in for the Java agent with `otel.resource.providers.host-id.enabled=true`. ([#20099](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20099))
- Add mode-aware semantic-conventions schema URLs to database, messaging, and RPC telemetry scopes. ([#20127](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20127))
- Add the semantic-conventions schema URL to runtime JVM metrics covered by the schema. ([#20255](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20255))
- GraphQL operation spans now use the OpenTelemetry semantic conventions v1.44.0 schema URL. ([#20262](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20262))
- Add the semantic-conventions schema URL to OSHI system metrics. ([#20263](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20263))

### 🛠️ Bug fixes

- Lettuce 5.1 client spans for Redis command failures now have error status. ([#19075](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19075))
- Prevent javaagent startup deadlocks caused by lazy context-storage initialization under class-loader locks. ([#19265](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19265))
- Fix high-cardinality NATS JetStream settlement span names. Use `$JS.ACK publish` under legacy semantic conventions. ([#19396](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19396))
- Fix context propagation for tail-delegated Kotlin `@WithSpan` methods so their spans retain the correct caller context. ([#19446](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19446))
- Fix Camel asynchronous sends so context scopes close on the thread that started the send. ([#19503](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19503))
- Fix Vert.x HTTP client tracing when a request is flushed with `sendHead()` and later completed with `end()`, so the server span is parented to the exported client span. ([#19547](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19547))
- Handle cyclic exception cause chains without hanging error extraction across instrumentations or JMX rule parsing. ([#19625](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19625))
- Sanitize captured Elasticsearch REST Java agent search query bodies by default, replacing literal values with `?` while preserving the query structure. Disable sanitization with `otel.instrumentation.elasticsearch.query-sanitization.enabled=false`. ([#19675](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19675))
- Prevent duplicate Pulsar listener instrumentation and suppress duplicate receive spans during nested deliveries, preserving the parent context for processing spans. ([#19699](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19699), [#20137](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20137))
- Apache HttpAsyncClient pipelined requests now produce client spans. ([#19710](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19710))
- Async Thrift server requests following a failed request on the same connection are no longer incorrectly reported as errors. ([#19712](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19712))
- Suppress duplicate Apache Commons Pool metrics for pools backing an Apache DBCP `BasicDataSource` when both instrumentations are enabled. ([#19721](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19721))
- Fix Spring Boot starter debug logging when `otel.spring-starter.debug=true`. ([#19725](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19725), [#20034](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20034))
- Fix duplicate processing spans and metrics across Spring Rabbit, RabbitMQ, and Spring Integration, preserving telemetry for separately registered consumers and correctly parented handler spans. ([#19732](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19732), [#20138](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20138), [#20200](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20200))
- Oracle UCP pool metrics now use a JDBC-derived name instead of the generated UCP name, consolidating pools connected to the same database under a consistent `pool.name` value. ([#19745](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19745))
- Populate Redis command names for client spans when using Lettuce 6.0.0–6.0.2. ([#19763](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19763))
- Fix `@SpanAttribute` handling so generic values and arrays are recorded correctly as span attributes. ([#19785](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19785))
- Avoid NullPointerExceptions when ending partially initialized Jedis requests or when JSF cannot derive a server span name. ([#19805](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19805))
- Fix class-loader instrumentation so the javaagent no longer injects its rewritten `java.lang.ClassLoader` stub as a helper. ([#19811](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19811))
- Pekko HTTP/2 server requests are now traced. ([#19817](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19817))
- Handle negative choice indices in OpenAI streaming chat completions. ([#19827](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19827))
- Pekko HTTP requests rejected during parsing now produce server spans with their response status and customized response headers. ([#19829](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19829))
- OpenAI chat completion spans now use the `CLIENT` span kind. ([#19858](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19858))
- Fix missing RocketMQ message-consumption spans for an additional `ConsumeService` constructor overload. ([#19860](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19860))
- Fix context propagation for Pekko batched tasks so spans created inside scheduled futures retain their correct parent. ([#19862](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19862))
- Limit captured OpenSearch query bodies to 32,768 characters, matching the Elasticsearch query capture limit. ([#19870](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19870))
- OpenSearch query body capture now uses the configured JSON provider, preserving mapper-specific serialization settings. ([#19875](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19875))
- Thrift server instrumentation skips repeated context-propagation fields after starting the request span. ([#19895](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19895))
- Fix a race in Ratpack protocol-version capture so spans record the correct protocol version. ([#19911](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19911))
- AWS Lambda instrumentation now extracts the X-Ray trace header from `Context.getXrayTraceId()` to continue the incoming trace. ([#19920](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19920))
- Fix a context scope leak in Thrift server request processing. ([#19925](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19925))
- Allow the Java agent to process H2’s `org.h2.command.dml.Update$$Lambda` class. ([#19993](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/19993))
- The Java agent now starts when its JAR is already on the bootstrap class path without appending the JAR to bootstrap search again. ([#20001](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20001))
- The JDBC `OpenTelemetryDriver` now honors `otel.instrumentation.jdbc.query-sanitization.enabled`, so JDBC-specific query sanitization can override the common setting. ([#20020](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20020))
- Fix inaccurate durations for Kafka producer and consumer interceptor spans by ending them immediately, since the interceptors cannot measure broker send or poll time. ([#20044](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20044))
- Vert.x SQL client 5 query spans now report `db.name`, `server.address`, and `server.port` for connections configured with `connectingTo` suppliers. ([#20050](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20050))
- Keep Java agent and Spring Boot declarative configuration customizers working with OpenTelemetry SDK 1.66.0. ([#20109](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20109))
- Prevent truncation of sanitized database and search queries from splitting Unicode surrogate pairs. ([#20123](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20123))
- Prevent duplicate Kafka processing spans across Kafka Connect, Kafka Streams, Reactor Kafka, and Vert.x, including asynchronous handoffs, without suppressing unrelated batches. ([#20139](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20139), [#20142](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20142), [#20143](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20143))
- Avoid duplicate JMS processing spans across JMS, Spring JMS, Camel, and SJMS listener layers. ([#20140](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20140))
- Apache ShenYu server instrumentation no longer throws when route metadata is null, allowing request processing to continue without a route value. ([#20148](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20148))
- Record exceptions handled by Spring Rabbit error handlers on the message-processing span. ([#20178](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20178))
- Fix database-system detection for Vert.x SQL client pools wrapped by Vert.x 5.2. ([#20191](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20191))
- Reactor instrumentation now propagates context values through externally driven publisher callbacks even when the captured context has no valid span. ([#20192](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20192))
- Spring Cloud AWS SQS processing spans now end when asynchronous listeners complete, recording their eventual failures or cancellation status. ([#20193](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20193))
- AWS SDK v1 SQS processing spans now end with callback failures and restore the previous context when `forEach` or `forEachRemaining` handlers throw. ([#20194](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20194))
- Prevent duplicate SQS processing spans when nested AWS Lambda handlers process the same event. ([#20195](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20195))
- Spring MVC server spans for Spring Boot Actuator endpoints now include the `http.route` attribute. ([#20216](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20216))
- Fix missing reflection hints for Spring Kafka listener interceptor fields and OAuth bearer JWT classes in GraalVM native images. ([#20332](https://github.com/open-telemetry/opentelemetry-java-instrumentation/pull/20332))

### 🙇 Thank you

This release was possible thanks to the following contributors who shared their brilliant ideas and awesome pull requests:

@abhishuraina
@aganjai
@akg268
@amit306
@arimu1
@benjoseph-grafana
@bhuvan-somisetty
@breedx-splk
@cdsap
@choufraise
@colamong
@edwardxia
@gniadeck
@himanshuc71
@hshar89
@jaydeluca
@jeefy
@johnbley
@kejne
@Kielek
@laurit
@leonard2901
@lymerin
@markfink-splunk
@maryantocinn
@mateuszrzeszutek
@mityayak
@mwimpelberg28
@nikhiln64
@oldium
@opentelemetry-pr-dashboard
@opentelemetrybot
@patschl
@pavolloffay
@pjfanning
@praneethhere
@pureklkl
@robsunday
@rsclarke
@Sebmaster
@shashank-reddy-nr
@steverao
@sudhanshubliz
@SylvainJuge
@trask
@vincent-fuchs
@walleseve
@wangzlei
@YaoYingLong
@ym0506
@zackman0010
@ZapolyarnyDev
@zeitlinger

---

> **Source** [open-telemetry/opentelemetry-java-instrumentation](https://github.com/open-telemetry/opentelemetry-java-instrumentation) · `v2.32.0` · 2026-10-03 · [upstream release](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/tag/v2.32.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
