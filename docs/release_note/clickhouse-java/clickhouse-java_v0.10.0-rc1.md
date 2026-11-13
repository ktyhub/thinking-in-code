---
title: "clickhouse-java v0.10.0-rc1"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.10.0-rc1"
published: "2026-07-03"
type: "minor"
lang: "en"
summary: "Release Migration Guide"
---

# clickhouse-java v0.10.0-rc1

[Release Migration Guide](https://github.com/ClickHouse/clickhouse-java/blob/main/docs/releases/0_10_0.md)

### Breaking Changes

- **[jdbc-v2]** The driver no longer hardcodes the server settings `async_insert=0` and `wait_end_of_query=0` on every JDBC
  connection. This unblocks two scenarios that previously did not work: overriding these settings per connection or per
  statement, and using the driver against read-only profiles that disallow `SETTINGS` overrides. There are two consequences:
  - The driver now follows the server-side defaults for these settings (note: starting with ClickHouse 26.3, `async_insert`
    defaults to `1`). Removing the explicit `wait_end_of_query=0` is a no-op against server defaults but lets users opt in to
    `wait_end_of_query=1`.
  - The row count returned by `java.sql.Statement.executeUpdate(java.lang.String)` (and the matching `PreparedStatement`
    method) is no longer guaranteed to be accurate for INSERT statements when the server runs them asynchronously, and
    parsing/data errors in the INSERT body may not surface synchronously as a `SQLException`. Previously these were
    accurate because inserts were forced to be synchronous (see also https://github.com/ClickHouse/ClickHouse/issues/57768).
    To restore the previous behavior, set `async_insert=0` (or `wait_for_async_insert=1`) per connection as server setting.
    Read more about asynchronous insert: https://clickhouse.com/docs/optimize/asynchronous-inserts.

  (https://github.com/ClickHouse/clickhouse-java/issues/2652, https://github.com/ClickHouse/clickhouse-java/issues/2825)

- **[client-v2]** `Client.Builder#build()` now throws `ClientMisconfigurationException` instead of
  `IllegalArgumentException` for authentication and SSL misconfiguration (missing credentials, conflicting
  authentication methods, missing client certificate when SSL authentication is enabled, and trust store used together
  with a client certificate). Callers that relied on catching `IllegalArgumentException` from `build()` for these cases
  must catch `ClientMisconfigurationException` (which extends `RuntimeException` via `ClientException`). (https://github.com/ClickHouse/clickhouse-java/pull/2812)

- **[client-v2]** Combining `setUsername(...)` + `setPassword(...)` with a custom `Authorization` HTTP header (
  `httpHeader(HttpHeaders.AUTHORIZATION, ...)`) now fails at `Client.Builder#build()` with
  `ClientMisconfigurationException` unless HTTP Basic authentication is explicitly disabled via
  `useHTTPBasicAuth(false)`. Previously this combination was accepted and the custom `Authorization` header overrode 
  the user/password at request time. (https://github.com/ClickHouse/clickhouse-java/pull/2812)

- **[client-v2]** The `access_token` configuration property (set via `Client.Builder#setAccessToken(String)` or directly
  through `setOption`) is now actually applied to outgoing requests as the `Authorization` HTTP header value verbatim.
  Previously the value was stored under `access_token` but never sent on the wire, so providing it alone had no effect
  on authentication. Callers must include the scheme prefix themselves (e.g. `setAccessToken("Bearer <token>")`), or use
  `useBearerTokenAuth(String)` which prepends `Bearer ` automatically. (https://github.com/ClickHouse/clickhouse-java/pull/2812)

- **[client-v2]** `Client.Builder#useBearerTokenAuth(String)` now stores the bearer token under the `access_token`
  configuration key (with the `Bearer ` prefix) instead of writing it directly into `http_header_authorization`. The
  HTTP wire format is unchanged, but the token is no longer observable through `Client#getReadOnlyConfig()` under the
  `http_header_authorization` key. (https://github.com/ClickHouse/clickhouse-java/pull/2812)

- **[client-v2]** Fixed inconsistent use of `executionTimeout` parameter in `Client` component. The timeout was
  previously set in milliseconds but mistakenly retrieved and used in seconds in some places. Now it correctly uses
  milliseconds consistently. (https://github.com/ClickHouse/clickhouse-java/issues/2358)

### New Features

- **[jdbc-v2, client-v2]** Implemented SSL modes configuration. Now it is possible to set `ssl_mode` to `DISABLED`, 
  `TRUST`, `VERIFY_CA` and `STRICT`. Note for V1 users: `NONE` is supported only by JDBC driver and mapped to `TRUST`.
  Please migrate to the new naming. 
  - Examples for client-v2 https://github.com/ClickHouse/clickhouse-java/blob/main/examples/client-v2/src/main/java/com/clickhouse/examples/client_v2/SSLExamples.java
  - Examples for jdbc-v2 https://github.com/ClickHouse/clickhouse-java/blob/main/examples/jdbc/src/main/java/com/clickhouse/examples/jdbc/SSLExamples.java
  (https://github.com/ClickHouse/clickhouse-java/pull/2874, https://github.com/ClickHouse/clickhouse-java/issues/2389,
  https://github.com/ClickHouse/clickhouse-java/issues/2309, https://github.com/ClickHouse/clickhouse-java/issues/2819)

- **[jdbc-v2, client-v2] (beta)** Implemented standalone readers for `JSONEachRow` to provide scaffold for 
  reading this format. Additionally, it gives a way to map `Json` columns to custom types using JDBC driver. See examples 
  in https://github.com/ClickHouse/clickhouse-java/tree/main/examples/jdbc-v2-json-processors and https://github.com/ClickHouse/clickhouse-java/tree/main/examples/client-v2-json-processors.
  (https://github.com/ClickHouse/clickhouse-java/pull/2871)

- **[client-v2]** Added `Session` API to encapsulate and manage ClickHouse session settings (`session_id`,
  `session_check`, `session_timeout`, `session_timezone`) as a reusable object. The `Session` instance can be applied to
  any request settings using `applyTo()`, and session state can be cleared via `clearSession()`. Additionally, added
  `resetOption(String)` to `InsertSettings`, `QuerySettings`, and `CommonSettings` to allow removing specific settings.
  Settings explicitly set to `null` will not be sent to the server, which is useful for overriding global settings.
  (https://github.com/ClickHouse/clickhouse-java/pull/2810)

- **[client-v2]** Added runtime credential update APIs on `Client`: `updateUserAndPassword(String, String)`,
  `updateAccessToken(String)`, and `updateBearerToken(String)`. Subsequent requests on the same `Client` instance use
  the new credentials without rebuilding the client. The authentication method is fixed at construction time; calling a
  runtime updater that does not match the configured method throws `ClientMisconfigurationException`. See
  `docs/authentication.md` for details and migration guidance. (https://github.com/ClickHouse/clickhouse-java/pull/2812)

- **[jdbc-v2]** Added `cluster_name` configuration property to specify a target cluster for statements like `KILL QUERY`
  that require an `ON CLUSTER` clause to execute across all
  nodes. (https://github.com/ClickHouse/clickhouse-java/issues/2837)

- **[client-v2, jdbc-v2]** Added support for ClickHouse `Geometry` type for ClickHouse `25.11+`, where `Geometry`
  changed from a `String` alias to `Variant(Point, Ring, LineString, MultiLineString, Polygon, MultiPolygon)` (client
  still compatible with older versions). Includes client read/write handling and JDBC type mapping for retrieving and
  inserting geometry values. Current writes infer the target geometry variant from array nesting depth, so `Ring` vs
  `LineString` and `Polygon` vs `MultiLineString` are not yet distinguishable through the generic `Geometry` write
  path. (https://github.com/ClickHouse/clickhouse-java/pull/2815)

- **[jdbc-v2]** `ResultSet#getObject(int|String, Map<String, Class<?>>)` now accepts ClickHouse type names as map keys
  in addition to the JDBC `SQLType` names it has always accepted. Only unwrapped type names are used for the lookup —
  `Nullable(...)` and `LowCardinality(...)` wrappers are stripped and do not affect resolution, so a key like `"Int32"`
  matches both `Int32` and `Nullable(Int32)` columns; keys like `"Nullable(Int32)"` are not recognized. Lookup order is
  the `ClickHouseDataType` enum name (e.g. `"Int32"`, `"String"`, `"DateTime"`) then the JDBC `SQLType` name (e.g.
  `"INTEGER"`, `"VARCHAR"`, `"TIMESTAMP"`); a missing entry leaves the value uncoerced. The feature is supported for
  primitive ClickHouse types only — `Array`, `Tuple`, `Map`, `Nested`, and geometry types are not supported and continue
  to be returned in their native form regardless of the user-supplied map. Existing maps keyed only by JDBC `SQLType`
  names continue to work unchanged. (https://github.com/ClickHouse/clickhouse-java/pull/2865)

  - **[jdbc-v2]** Added support of custom mapping for JDBC types. Mainly used in cases when big integers should be 
  presented as string. Use `DriverProperties.JDBC_TYPE_MAPPINGS` (`jdbc_type_mappings`) and set needed type mapping 
  as `key=value[,]` list (For example, `Int32=Long,UInt64=String`). Deprecation notice: V1 property `typeMappings` is 
  supported but will be removed. Please migrate to the new property. 
  (https://github.com/ClickHouse/clickhouse-java/issues/2858)

### Improvements 

- **[jdbc-v2, client-v2]** Added support of hostnames with underscore (`_`) in them. Now it is possible to specify endpoint 
like `ch_db_01`. This is mostly used in k8s environment. (https://github.com/ClickHouse/clickhouse-java/issues/2792,
  https://github.com/ClickHouse/clickhouse-java/issues/2753)

### Updated Dependencies

- **[tests]** Bump org.postgresql:postgresql from 42.6.1 to 42.7.11

### Docs & Examples 

- **[client-v2]** Added example of working with `Apache Arrow` library using client. (https://github.com/ClickHouse/clickhouse-java/pull/2820)

- **[repo]** Added a contribution guide. Please review and send us your feedback. (https://github.com/ClickHouse/clickhouse-java/pull/2859)

### Bug Fixes

- **[jdbc-v2, client-v2]** Fixed error handling for responses that not a ClickHouse error, like `404` response. (https://github.com/ClickHouse/clickhouse-java/issues/2803)

- **[jdbc-v2, client-v2]** Fixed setting `null` as password. Previously it was converted to `null` literal. Still we recommend 
passing empty string. (https://github.com/ClickHouse/clickhouse-java/pull/2809)

- **[jdbc-v2, client-v2]** Fixed `ClickHouseBinaryFormatReader::getBigDecimal` silently truncating big integer.
(https://github.com/ClickHouse/clickhouse-java/issues/2748)

- **[jdbc-v2, client-v2]** Fixed handling `NULL` values to `Variant` and `Dynamic` columns. Previously indicator 
of `NULL` was not set and read. (https://github.com/ClickHouse/clickhouse-java/issues/2789, https://github.com/ClickHouse/clickhouse-java/issues/2791)

- **[jdbc-v2]** Fixed `Statement.cancel()` throwing `SESSION_IS_LOCKED` when the statement was running inside a
  ClickHouse session. The driver now accepts `session_id`, `session_check`, and `session_timeout` as first-class
  connection properties and correctly suppresses them when issuing a `KILL QUERY` during cancellation. This ensures the
  cancellation request runs outside the session and no longer contends with the running query for the session
  lock. (https://github.com/ClickHouse/clickhouse-java/issues/2690, https://github.com/ClickHouse/clickhouse-java/issues/2881)

- **[jdbc-v2]** Added option to specify cluster name for operations on cluster. One of them is `KILL QUERY .. ON CLUSTER <cluster_name>`.
  Use `DriverProperties.CLUSTER_NAME` (`jdbc_cluster_name`) to define name of the cluster to be used in such queries.
  (https://github.com/ClickHouse/clickhouse-java/issues/2837)

- **[jdbc-v2, client-v2]** Fixed writing nullable marker for nested `Tuple` and `Map values. (https://github.com/ClickHouse/clickhouse-java/issues/2721)

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.10.0-rc1` · 2026-07-03 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.10.0-rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
