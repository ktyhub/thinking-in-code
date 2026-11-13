---
title: "druid druid-35.0.0"
project: "druid"
repo: "apache/druid"
tag: "druid-35.0.0"
published: "2025-11-18"
type: "release"
lang: "en"
summary: "Apache Druid 35.0.0 contains over 229 new features, bug fixes, performance enhancements, documentation improvements, and additional test coverage from 29 contributors."
---

# druid druid-35.0.0

Apache Druid 35.0.0 contains over 229 new features, bug fixes, performance enhancements, documentation improvements, and additional test coverage from 29 contributors.

See the [complete set of changes](https://github.com/apache/druid/issues?q=is%3Aclosed%20sort%3Aupdated-desc%20milestone%3A35.0.0) for additional details, including bug fixes.

Review the [upgrade notes](#upgrade-notes) and [incompatible changes](#incompatible-changes) before you upgrade to Druid 35.0.0.
If you are upgrading across multiple versions, see the [Upgrade notes](upgrade-notes.md) page, which lists upgrade notes for the most recent Druid versions.


## <a name="35.0.0-important-features%2C-changes%2C-and-deprecations" href="#35.0.0-important-features%2C-changes%2C-and-deprecations">#</a> Important features, changes, and deprecations

This section contains important information about new and existing features.

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-jetty" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-jetty">#</a> Jetty

Druid 35 uses Jetty 12. This change may impact your deployment. For more information,see [the upgrade note for Jetty 12](#jetty-12)

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-java-support" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-java-support">#</a> Java support

Druid now supports Java 21. Note that some versions of Java 21 encountered issues during test, specifically Java 21.05-21.07. If possible, avoid these versions.

Additionally, support for Java 11 has been removed. Upgrade to Java 17 or 21. 

[#18424](https://github.com/apache/druid/pull/18424) [#18624](https://github.com/apache/druid/pull/18624)

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-projections-" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-projections-">#</a> Projections 

Projections have been improved:

- Static filters are now supported
- The granularity in queries can match UTC time zones 

Additionally, there have been general improvements to performance and reliability.  

[#18342](https://github.com/apache/druid/pull/18342) [#18535](https://github.com/apache/druid/pull/18535) [#18403](https://github.com/apache/druid/pull/18403)

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-virtual-storage-%28experimental%29" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-virtual-storage-%28experimental%29">#</a> Virtual storage (experimental)

Virtual storage fabric mode for enables Historical servers to serve more segments than what their physical disk can hold. Instead of loading segments when they're published, segments get loaded on demand during queries. Any unneeded segments get removed from disk but get loaded again when processing a query requires that particular segment.

To enable virtual storage, set `druid.segmentCache.virtualStorage` to `true`. 

This feature is experimental and has several limitations. For more information, see the pull request:

[#18176](https://github.com/apache/druid/pull/18176)

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-new-input-format" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-new-input-format">#</a> New input format

Druid now supports a `lines` input format. Druid reads each line from an input as UTF-8 text and creates a single column named `line` that contains the entire line as a string. Use this for reading line-oriented data in a simple form for later processing.

[#18433](https://github.com/apache/druid/pull/18433)

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-multi-stage-query-task-engine" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-multi-stage-query-task-engine">#</a> Multi-stage query task engine

The MSQ task engine is now a core capability of Druid rather than an extension. It has been in the default extension load list for several releases. 

Remove `druid-multi-stage-query` from `druid.extensions.loadList` in `common.runtimes.properties` before you upgrade.

Druid 35.0.0 will ignore the extension if it's in the load list. Future versions of Druid will fail to start since it can't locate the extension.

[#18394](https://github.com/apache/druid/pull/18394)

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-improved-monitor-loading" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-improved-monitor-loading">#</a> Improved monitor loading

You can now specify monitors in `common.runtime.properties` and each monitor will be loaded only on the applicable server types. Previously, you needed to define monitors in the specific `runtime.properties` file for the service a monitor is meant for.

[#18321](https://github.com/apache/druid/pull/18321)

### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-exact-count-extension" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-exact-count-extension">#</a> Exact count extension

A new contributor extension (`druid-exact-count-bitmap`) adds support for exact cardinality counting using Roaring Bitmap over a Long column.

[#18021](https://github.com/apache/druid/pull/18021)


### <a name="35.0.0-important-features%2C-changes%2C-and-deprecations-improved-%60indexspec%60" href="#35.0.0-important-features%2C-changes%2C-and-deprecations-improved-%60indexspec%60">#</a> Improved `indexSpec`

Users can now specify a format specification for each JSON column individually, which will override the `IndexSpec` defined in the ingestion job. Additionally, a system-wide default `IndexSpec` can be set using the `druid.indexing.formats.indexSpec` property.

[#17762](https://github.com/apache/druid/pull/17762) [#18638](https://github.com/apache/druid/pull/18638)

## <a name="35.0.0-functional-area-and-related-changes" href="#35.0.0-functional-area-and-related-changes">#</a> Functional area and related changes

This section contains detailed release notes separated by areas.

### <a name="35.0.0-functional-area-and-related-changes-web-console" href="#35.0.0-functional-area-and-related-changes-web-console">#</a> Web console

#### <a name="35.0.0-functional-area-and-related-changes-web-console-time-zones" href="#35.0.0-functional-area-and-related-changes-web-console-time-zones">#</a> Time zones

You can now configure whether the web console displays local time or UTC. This setting is stored locally in your browser and doesn't impact other users. 

Note that the URL maintains the query parameters in UTC time, but the Druid console automatically converts the filter to local time.

[#18455](https://github.com/apache/druid/pull/18455)

#### <a name="35.0.0-functional-area-and-related-changes-web-console-other-web-console-improvements" href="#35.0.0-functional-area-and-related-changes-web-console-other-web-console-improvements">#</a> Other web console improvements

- Added better support for MSQ task engine-based compaction tasks. They now use the stages pane to render the compaction report instead of showing the JSON [#18545](https://github.com/apache/druid/pull/18545)
- Added a version column to the **Services** tab so that you can see what version a service is running. This is helpful during rolling upgrades to verify the state of the cluster and upgrade [#18542](https://github.com/apache/druid/pull/18542)
- Improved the resiliency of the web console when the supervisor history is extensive [#18416](https://github.com/apache/druid/pull/18416) 


### <a name="35.0.0-functional-area-and-related-changes-ingestion" href="#35.0.0-functional-area-and-related-changes-ingestion">#</a> Ingestion

#### <a name="35.0.0-functional-area-and-related-changes-ingestion-dimension-schemas" href="#35.0.0-functional-area-and-related-changes-ingestion-dimension-schemas">#</a> Dimension schemas

At ingestion time, dimension schemas in `dimensionsSpec` are now strictly validated against allowed types. Previously an invalid type would fall back to string dimension. Now, such values are rejected. Users must specify a type that's one of the allowed types. Omitting type still defaults to string, preserving backward compatibility.

[#18565](https://github.com/apache/druid/pull/18565)

#### <a name="35.0.0-functional-area-and-related-changes-ingestion-other-ingestion-improvements" href="#35.0.0-functional-area-and-related-changes-ingestion-other-ingestion-improvements">#</a> Other ingestion improvements

- Added support for session tokens (`sessionToken`) to the S3 input source [#18609](https://github.com/apache/druid/pull/18609)
- Improved performance of task APIs served by the Overlord. Druid now reads the in-memory state of the Overlord before fetching task information from the metadata store [#18448](https://github.com/apache/druid/pull/18448)
- Improved task execution so that they can successfully complete even if there are problems pushing logs and reports to deep storage [#18210](https://github.com/apache/druid/pull/18210)

#### <a name="35.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion" href="#35.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion">#</a> SQL-based ingestion

##### <a name="35.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion-other-sql-based-ingestion-improvements" href="#35.0.0-functional-area-and-related-changes-ingestion-sql-based-ingestion-other-sql-based-ingestion-improvements">#</a> Other SQL-based ingestion improvements

- Added the ability to configure the maximum frame size. Generally, you don't need to change this unless you have very large rows [#18442](https://github.com/apache/druid/pull/18442)
- Added logging for when segment processing fails [#18378](https://github.com/apache/druid/pull/18378)
- Improved logging to store the cause of invalid field exceptions [#18517](https://github.com/apache/druid/pull/18517) [#18517](https://github.com/apache/druid/pull/18517)


#### <a name="35.0.0-functional-area-and-related-changes-ingestion-streaming-ingestion" href="#35.0.0-functional-area-and-related-changes-ingestion-streaming-ingestion">#</a> Streaming ingestion

##### <a name="35.0.0-functional-area-and-related-changes-ingestion-streaming-ingestion-other-streaming-ingestion-improvements" href="#35.0.0-functional-area-and-related-changes-ingestion-streaming-ingestion-other-streaming-ingestion-improvements">#</a> Other streaming ingestion improvements

- Added a count parameter to the supervisor history API [#18416](https://github.com/apache/druid/pull/18416)

### <a name="35.0.0-functional-area-and-related-changes-querying" href="#35.0.0-functional-area-and-related-changes-querying">#</a> Querying

#### <a name="35.0.0-functional-area-and-related-changes-querying-segment-timeout" href="#35.0.0-functional-area-and-related-changes-querying-segment-timeout">#</a> Segment timeout

You can now configure timeout for a query's segment processing.

To set a timeout, set `druid.processing.numTimeoutThreads` to a low number, such as 3, on all data nodes where you want this feature enabled.

Then, include the `perSegmentTimeout` query context parameter in your query and set it to a value in milliseconds.

[#18148](https://github.com/apache/druid/pull/18148)

#### <a name="35.0.0-functional-area-and-related-changes-querying-caching-scan-query-results" href="#35.0.0-functional-area-and-related-changes-querying-caching-scan-query-results">#</a> Caching scan query results

Druid now supports result-level caching for scan queries.

By default, this behavior is turned off. To enable, override the `druid.*.cache.unCacheable` property. 

[#18568](https://github.com/apache/druid/pull/18568)

#### <a name="35.0.0-functional-area-and-related-changes-querying-new-expressions-for-sketches" href="#35.0.0-functional-area-and-related-changes-querying-new-expressions-for-sketches">#</a> New expressions for sketches

Druid now supports the following expressions:

- `HLL_SKETCH_ESTIMATE_WITH_ERROR_BOUNDS` 
- `THETA_SKETCH_ESTIMATE_WITH_ERROR_BOUNDS`

These estimates work on a sketch column and have the same behavior as the post aggregators.

[#18426](https://github.com/apache/druid/pull/18426)

#### <a name="35.0.0-functional-area-and-related-changes-querying-new-multi-value-sql-functions" href="#35.0.0-functional-area-and-related-changes-querying-new-multi-value-sql-functions">#</a> New multi-value SQL functions

Druid now supports the following multi-value functions:

- `MV_FILTER_REGEX`: filters a multi-value expression to include only values matching the specified regular expression pattern
- `MV_FILTER_PREFIX`: filters a multi-value expression to include only values that start with the specified prefix

[#18281](https://github.com/apache/druid/pull/18281)

#### <a name="35.0.0-functional-area-and-related-changes-querying-exception-handling" href="#35.0.0-functional-area-and-related-changes-querying-exception-handling">#</a> Exception handling

You can now  write exceptions that Druid encounters as a row and then verify whether the exception is expected. To use this feature, set the `writeExceptionBodyAsResponseRow` query context parameter to `true`.

[#18571](https://github.com/apache/druid/pull/18571)

#### <a name="35.0.0-functional-area-and-related-changes-querying-other-querying-improvements" href="#35.0.0-functional-area-and-related-changes-querying-other-querying-improvements">#</a> Other querying improvements

- Added stricter validation for `GREATEST` and `LEAST` [#18562](https://github.com/apache/druid/pull/18562)
- Added a query context option called `realtimeSegmentsOnly` that returns results from realtime segments only when set to `true` [#18329](https://github.com/apache/druid/pull/18329)
- Improved the performance of the following query types through vectorization: 
  - `CASE_SEARCHED` and `CASE_SIMPLE` queries [#18512](https://github.com/apache/druid/pull/18512)
  - `timestamp_ceil` and `timestamp_extract` queries [#18517](https://github.com/apache/druid/pull/18517)
  - `IF` expressions where the `THEN` and `ELSE` expressions [#18507](https://github.com/apache/druid/pull/18507)
- Improved the deserialization time for intervals by more than 40% [#18477](https://github.com/apache/druid/pull/18477)
- Improved the performance of `AND`/`OR` as well as `NOT`/`IS TRUE`/`IS FALSE` [#18491](https://github.com/apache/druid/pull/18491) [#18488](https://github.com/apache/druid/pull/18488)
- Improved the performance of scan queries [#18441](https://github.com/apache/druid/pull/18441)
- Improved the performance of metadata queries by parallelizing them at the data-node level [#18592](https://github.com/apache/druid/pull/18592)

### <a name="35.0.0-functional-area-and-related-changes-cluster-management" href="#35.0.0-functional-area-and-related-changes-cluster-management">#</a> Cluster management

#### <a name="35.0.0-functional-area-and-related-changes-cluster-management-labels-for-the-metadata-table" href="#35.0.0-functional-area-and-related-changes-cluster-management-labels-for-the-metadata-table">#</a> Labels for the metadata table

You can now configure labels for Druid services. Use the `druid.labels` field in the configuration options for the service and provide a JSON object of key-value pairs, such as `druid.labels={"location":"Airtrunk"}` or `druid.labels.location=Airtrunk`.

These labels can be queried using the `sys.servers` system table and are also displayed on the **Services** tab in the web console.

[#18547](https://github.com/apache/druid/pull/18547)

#### <a name="35.0.0-functional-area-and-related-changes-cluster-management-tls-server-configs" href="#35.0.0-functional-area-and-related-changes-cluster-management-tls-server-configs">#</a> TLS server configs

Add a `druid.server.https.forceApplyConfig` config flag to indicate that the `TLSServerConfig` values should be applied irrespective of whether a preexisting `SslContextFactory.Server` binding exists.

[#18610](https://github.com/apache/druid/pull/18610)

#### <a name="35.0.0-functional-area-and-related-changes-cluster-management-error-message-strategy" href="#35.0.0-functional-area-and-related-changes-cluster-management-error-message-strategy">#</a> Error message strategy

You can now configure Druid to log an error message and return an error ID for non-user targeted messages. This can be configured by setting `druid.server.http.errorResponseTransform.strategy` to `persona`.

[#18487](https://github.com/apache/druid/pull/18487)

#### <a name="35.0.0-functional-area-and-related-changes-cluster-management-kerberos-authentication" href="#35.0.0-functional-area-and-related-changes-cluster-management-kerberos-authentication">#</a> Kerberos authentication

The `druid.auth.authenticator.kerberos.cookieSignatureSecret` config is now mandatory. 

[#18368](https://github.com/apache/druid/pull/18368)

#### <a name="35.0.0-functional-area-and-related-changes-cluster-management-other-cluster-management-improvements" href="#35.0.0-functional-area-and-related-changes-cluster-management-other-cluster-management-improvements">#</a> Other cluster management improvements

- Added a `version` column to `sys.server`. This is useful during rolling upgrades to verify the state of the cluster [#18542](https://github.com/apache/druid/pull/18542)
- Added support for short, unique index names in metadata stores [#18515](https://github.com/apache/druid/pull/18515)
- Added config `stopTaskCountPercent` to lag-based auto-scaler to allow task count to be scaled as a percentage of the current task count. [#18480](https://github.com/apache/druid/pull/18480)
- Added headers to the user agent for services, improving traceability between services [#18505](https://github.com/apache/druid/pull/18505)
- Added a new Kafka emitter config: `druid.emitter.kafka.producer.shutdownTimeout`. It controls how long the Kafka producer waits for pending requests to finish before shutting down [#18427](https://github.com/apache/druid/pull/18427)
- Changed how Netty worker threads get calculated, lowering the number of threads used at small processor counts [#18493](https://github.com/apache/druid/pull/18493)
- Changed the response for the `/status/properties` to be sorted lexicographically on the property names. The response is more readable now and related keys are grouped together [#18506](https://github.com/apache/druid/pull/18506).
- Improved segment loading during startup in certain situations by optimizing concurrent writing [#18470](https://github.com/apache/druid/pull/18470)

### <a name="35.0.0-functional-area-and-related-changes-data-management" href="#35.0.0-functional-area-and-related-changes-data-management">#</a> Data management

- Improved S3 storage to support storing segments in S3 without zip compression [#18544](https://github.com/apache/druid/pull/18544)

### <a name="35.0.0-functional-area-and-related-changes-metrics-and-monitoring" href="#35.0.0-functional-area-and-related-changes-metrics-and-monitoring">#</a> Metrics and monitoring

#### <a name="35.0.0-functional-area-and-related-changes-metrics-and-monitoring-improved-prometheus-emitter-" href="#35.0.0-functional-area-and-related-changes-metrics-and-monitoring-improved-prometheus-emitter-">#</a> Improved Prometheus emitter 

You can now specify the TTL for a metric. If a metric value has not been updated within the TTL period then the value will stop being emitted.

Set `flushPeriod` when using the `exporter` strategy in the `prometheus-emitter`. 

[#18598](https://github.com/apache/druid/pull/18598)

#### <a name="35.0.0-functional-area-and-related-changes-metrics-and-monitoring-other-metrics-and-monitoring-improvements" href="#35.0.0-functional-area-and-related-changes-metrics-and-monitoring-other-metrics-and-monitoring-improvements">#</a> Other metrics and monitoring improvements

- Added a `statusCode` dimension to `query/time` and `sqlQuery/time` metrics containing the query result status code [#18633](https://github.com/apache/druid/pull/18633) [#18631](https://github.com/apache/druid/pull/18631)
- Added `segment/schemaCache/refreshSkipped/count` metric that shows the number of segments that skipped schema refresh [#18561](https://github.com/apache/druid/pull/18561)
- Added a metric for when auto-scaling /gets skipped when the publishing task set is not empty [#18536](https://github.com/apache/druid/pull/18536)
- Added Kafka consumer metrics for indexing tasks in the `prometheus-emitter` default metrics config [#18458](https://github.com/apache/druid/pull/18458)
- Added an event when a datasource gets dropped from the Coordinator: `segment/schemaCache/datasource/dropped/count` [#18497](https://github.com/apache/druid/pull/18497)
- Added the `taskType` dimension to the following Prometheus metrics to distinguish between realtime and compaction tasks: `ingest/count`, `ingest/segments/count`, and `ingest/tombstones/count` [#18452](https://github.com/apache/druid/pull/18452)
- Added a server dimension to segment assignment skip metrics like `segment/assignSkipped/count` [#18313](https://github.com/apache/druid/pull/18313)
- Changed `CgroupUtil` to be less noisy [#18472](https://github.com/apache/druid/pull/18472)
- Reduced the clutter of output logs when there's a mismatch in Kafka and task partition set [#18234](https://github.com/apache/druid/pull/18234)

### <a name="35.0.0-functional-area-and-related-changes-extensions" href="#35.0.0-functional-area-and-related-changes-extensions">#</a> Extensions

#### <a name="35.0.0-functional-area-and-related-changes-extensions-iceberg" href="#35.0.0-functional-area-and-related-changes-extensions-iceberg">#</a> Iceberg

You can now filter Iceberg data based on a configurable time window.

[#18531](https://github.com/apache/druid/pull/18531)

#### <a name="35.0.0-functional-area-and-related-changes-extensions-kubernetes" href="#35.0.0-functional-area-and-related-changes-extensions-kubernetes">#</a> Kubernetes

#### <a name="35.0.0-functional-area-and-related-changes-extensions-http-client" href="#35.0.0-functional-area-and-related-changes-extensions-http-client">#</a> HTTP client

You can now configure what HTTP client library the `Fabric8` `KubernetesClient` uses under the hood to communicate with the k8s server tasks run on. The default remains the same client and config that Druid 34 uses. The additional options that are now available are `okhttp` and a native JDK HttpClient. The default client and config should suffice for most use cases.

Set the `druid.indexer.runner.k8sAndWorker.http.httpClientType` config to `vertx` (default), `okhttp`, or `jdk`.

[#18540](https://github.com/apache/druid/pull/18540)

#### <a name="35.0.0-functional-area-and-related-changes-extensions-pod-logs" href="#35.0.0-functional-area-and-related-changes-extensions-pod-logs">#</a> Pod logs

You can now set a timeout for asynchronous operations that interact with k8s pod logs: `druid.indexer.runner.podLogOperationTimeout`.

[#18587](https://github.com/apache/druid/pull/18587)

##### <a name="35.0.0-functional-area-and-related-changes-extensions-pod-logs-task-logs" href="#35.0.0-functional-area-and-related-changes-extensions-pod-logs-task-logs">#</a> Task logs

For Middle Manager-less ingestion, persisting task logs no longer have the potential to block indefinitely. Instead, there is a time limit for persisting logs, that if breached, results in giving up on the persist. The default timeout is 5 minutes, but can be configured by overriding `druid.indexer.runner.logSaveTimeout` with a duration, such as `PT60S`.

Additionally, task log storage for the Kubernetes runner is now optional. 

[#18444](https://github.com/apache/druid/pull/18444) [#18341](https://github.com/apache/druid/pull/18341)

##### <a name="35.0.0-functional-area-and-related-changes-extensions-pod-logs-improved-fault-tolerance" href="#35.0.0-functional-area-and-related-changes-extensions-pod-logs-improved-fault-tolerance">#</a> Improved fault tolerance

The `druid-kubernetes-overlord-extensions` that uses Kubernetes for launching and managing tasks instead of the Middle Managers is now more resilient against certain transient faults.

[#18406](https://github.com/apache/druid/pull/18406)

##### <a name="35.0.0-functional-area-and-related-changes-extensions-pod-logs-faster-task-failure" href="#35.0.0-functional-area-and-related-changes-extensions-pod-logs-faster-task-failure">#</a> Faster task failure

Task pods will now output Kubernetes job events when failing during the pod creation phase, and K8s tasks will fail fast under unrecoverable conditions.

[#18159](https://github.com/apache/druid/pull/18159)

#### <a name="35.0.0-functional-area-and-related-changes-extensions-mount-additional-configs" href="#35.0.0-functional-area-and-related-changes-extensions-mount-additional-configs">#</a> Mount additional configs

Previously, you could specify additional configuration to be mounted to `_common` via an environment variable, but this only applied to the Druid process. You can now also apply the same configuration to ingestion tasks submitted as Kubernetes jobs (MiddleManager-less mode), ensuring consistency across all task types. 

[#18447](https://github.com/apache/druid/pull/18447) 

## <a name="35.0.0-upgrade-notes-and-incompatible-changes" href="#35.0.0-upgrade-notes-and-incompatible-changes">#</a> Upgrade notes and incompatible changes

### <a name="35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes" href="#35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes">#</a> Upgrade notes

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-fallback-vectorization-on-by-default" href="#35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-fallback-vectorization-on-by-default">#</a> Fallback vectorization on by default

The `druid.expressions.allowVectorizeFallback` now defaults to `true`. Additionally, `SAFE_DIVIDE` can now vectorize as a fallback.

[#18549](https://github.com/apache/druid/pull/18549)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-jetty-12-" href="#35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-jetty-12-">#</a> Jetty 12 

Druid now uses Jetty 12. Your deployment may be impacted depending, specifically with regards to URI compliance and SNI host checks.

A new server configuration option has been added: `druid.server.http.uriCompliance`. Jetty 12 by default has strict enforcement of `RFC3986` URI format. This is a change from Jetty 9. To avoid potential breaking changes in existing Druid deployments, this config defaults to `LEGACY`, which uses the more permissive URI format enforcement that Jetty 9 used. If the cluster you operate does not require legacy compatibility, we recommend you use the upstream Jetty default of `RFC3986` in your Druid deployment. See the jetty documentation for more info.

Jetty 12 servers  do strict SNI `host0` checks when TLS is enabled. If the host your client is connecting to the server with does not match what is in the keystore, even if there is only one certificate in that keystore, it will return a 400 response. This could impact some use cases, such as folks connecting over `localhost` for whatever reason. If this change will break your deployment, you can opt-out of the change by setting `druid.server.http.enforceStrictSNIHostChecking` to false in the runtime.properties for some or all of your Druid services. It is recommended that you modify your client behavior to accommodate this change in `jetty` instead of overriding the config whenever possible.

[#18424](https://github.com/apache/druid/pull/18424) [#18623](https://github.com/apache/druid/pull/18623)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-kerberos-authentication" href="#35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-kerberos-authentication">#</a> Kerberos authentication

The `druid.auth.authenticator.kerberos.cookieSignatureSecret` config is now mandatory. 

[#18368](https://github.com/apache/druid/pull/18368)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-multi-stage-query-task-engine" href="#35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-multi-stage-query-task-engine">#</a> Multi-stage query task engine

The MSQ task engine is now a core capability of Druid rather than an extension. It has been in the default extension load list for several releases. 

Remove `druid-multi-stage-query` from `druid.extensions.loadList` in `common.runtimes.properties` before you upgrade.

Druid 35.0.0 will ignore the extension if it's in the load list. Future versions of Druid will fail to start since it cannot locate the extension.

[#18394](https://github.com/apache/druid/pull/18394)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-pac4j-extension" href="#35.0.0-upgrade-notes-and-incompatible-changes-upgrade-notes-pac4j-extension">#</a> pac4j extension

Due to the upgrade from `pac4j` 4 to 5, session serialization has changed from `pac4j`’s `JavaSerializer` to standard Java serialization. As a result, clients of clusters using the `pac4j` extension may be logged out during rolling upgrades and need to re‑authenticate.

[#18259](https://github.com/apache/druid/pull/18259)

### <a name="35.0.0-upgrade-notes-and-incompatible-changes-incompatible-changes" href="#35.0.0-upgrade-notes-and-incompatible-changes-incompatible-changes">#</a> Incompatible changes

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-incompatible-changes-java-11-support-removed" href="#35.0.0-upgrade-notes-and-incompatible-changes-incompatible-changes-java-11-support-removed">#</a> Java 11 support removed

Upgrade to Java 17 or 21. Note that some versions of Java 21 encountered issues during test, specifically Java 21.05-21.07. If possible, avoid these versions.

[#18424](https://github.com/apache/druid/pull/18424)


### <a name="35.0.0-upgrade-notes-and-incompatible-changes-developer-notes" href="#35.0.0-upgrade-notes-and-incompatible-changes-developer-notes">#</a> Developer notes

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-embedded-cluster-tests" href="#35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-embedded-cluster-tests">#</a> Embedded cluster tests

You can use the new embedded cluster test framework to run lightweight integration tests using a fully functional Druid cluster that runs on a single process, including any extensions you want to load as well as ZooKeeper and Derby metadata store.

You no longer need to run `mvn build`, create a docker image, or even run startup scripts to perform integration tests.

[#18147](https://github.com/apache/druid/pull/18147)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-specialized-virtual-columns-for-json" href="#35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-specialized-virtual-columns-for-json">#</a> Specialized virtual columns for JSON

The `ColumnHolder` returned by `ColumnSelector` now returns a `SelectableColumn` rather than `BaseColumn` from `getColumn()`. The `SelectableColumn` may be a `BaseColumn` or may be an implementation provided by a virtual column. Extensions that need to retrieve physical columns from a `ColumnSelector` can check if the column is a `BaseColumn` using `instanceof`. For convenience, the return type of `getColumnHolder` on `QueryableIndex` has been specialized to `BaseColumnHolder`, which always returns `BaseColumn` from `getColumn()`. Extensions that are calling this method on `QueryableIndex` can store the result in a variable of type `BaseColumnHolder` to avoid needing to cast the column.

[#18521](https://github.com/apache/druid/pull/18521)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-%60reset-cluster%60-tool-removed" href="#35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-%60reset-cluster%60-tool-removed">#</a> `reset-cluster` tool removed

The `reset-cluster` dev and testing environment oriented tool has been removed. It was outdated and would fail to completely clear out the metadata store (missing `upgradeSegments` and `segmentSchemas` tables added in Druid 28 and 30 respectively). This tool was not intended for production use cases, so there should be no impact for cluster operators.

[#18246](https://github.com/apache/druid/pull/18246)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-breaking-change-for-sql-metadata-extensions" href="#35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-breaking-change-for-sql-metadata-extensions">#</a> Breaking change for SQL metadata extensions

The `MetadataStorageActionHandler` extension point now has simpler APIs.
This is a breaking change for any SQL metadata extensions in the wild.
The changes for PostgreSQL, MySQL and SQLServer are already complete. [#18479](https://github.com/apache/druid/pull/18479)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-%60driudleaderclient%60-removed" href="#35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-%60driudleaderclient%60-removed">#</a> `DriudLeaderClient` removed

`DruidLeaderClient` has been removed from extensions and replaced with a `ServiceClient`-based implementation. Additionally, `CoordinatorServiceClient` for querying non-core APIs exposed by the Coordinator is available through `druid-server`.

[#18297](https://github.com/apache/druid/pull/18297) [#18326](https://github.com/apache/druid/pull/18326)

#### <a name="35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-dependency-updates" href="#35.0.0-upgrade-notes-and-incompatible-changes-developer-notes-dependency-updates">#</a> Dependency updates

The following dependencies have been updated:

- `pac4j` version 4.5.7 to 5.7.3 [#18259](https://github.com/apache/druid/pull/18259)
- `nimbus-jose-jwt` version 8.22.1 to 9.37.2 [#18259](https://github.com/apache/druid/pull/18259)
- `oauth2-oidc-sdk` version 8.22 to 10.8 [#18259](https://github.com/apache/druid/pull/18259)
- `avactica` version 1.25.0 to 1.27.0 [#18421](https://github.com/apache/druid/pull/18421) [#18671](https://github.com/apache/druid/pull/18671)
- `protobuf-dynamic` library replaced with a built-in protobuf method [#18401](https://github.com/apache/druid/pull/18401)
- `com.github.spotbugs:spotbugs-maven-plugin` version 4.8.6.6 to 4.9.3.2 [#18177](https://github.com/apache/druid/pull/18177)
- `com.google.code.gson` version 2.10.1 to 2.12.0 [#18527](https://github.com/apache/druid/pull/18527)
- `org.apache.commons` version 3.17.0 to 3.18.0 [#18572](https://github.com/apache/druid/pull/18572)
- `fabric8` version 7.2.0 to 7.4 [#18556](https://github.com/apache/druid/pull/18556)
- `jackson` version 2.18.4 to 2.19.2 [#18556](https://github.com/apache/druid/pull/18556)

# <a name="35.0.0-credits" href="#35.0.0-credits">#</a> Credits
@317brian
@a2l007
@abhishekagarwal87
@abhishekrb19
@adarshsanjeev
@aho135
@Akshat-Jain
@amaechler
@ashibhardwaj
@ashwintumma23
@capistrant
@cecemei
@clintropolis
@cryptoe
@dependabot[bot]
@GabrielCWT
@gianm
@GWphua
@jamangstangs
@jtuglu1
@kfaraz
@kgyrtkirk
@maytasm
@rasmusselsmark
@skuldshao
@uds5501
@vogievetsky
@writer-jill
@yurmix

---

> **Source** [apache/druid](https://github.com/apache/druid) · `druid-35.0.0` · 2025-11-18 · [upstream release](https://github.com/apache/druid/releases/tag/druid-35.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
