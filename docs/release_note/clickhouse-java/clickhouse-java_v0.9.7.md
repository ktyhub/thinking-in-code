---
title: "clickhouse-java v0.9.7"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.9.7"
published: "2026-03-03"
type: "patch"
lang: "en"
---

# clickhouse-java v0.9.7

## Important Notes 

- Behavior of `Client.Builder.addEndpoint(String)` was changed: now it saves URL base path (more in https://github.com/ClickHouse/clickhouse-java/issues/2344). Previously this method was ignoring base path. Please pay attention that this method still ignores query parameters. Endpoint is NOT like JDBC URL. Client has designated builder method to set configuration. 

## Breaking Changes

- **[client-v2]** `Client.Builder#build()` now throws `ClientMisconfigurationException` when an unknown configuration property is passed. Previously, unknown properties were silently ignored what caused unexpected behaviour and problems. To restore the old behavior, add `ignore_unknown_config_key=true` to the client properties. JDBC driver-only properties (e.g. `ssl`) are no longer forwarded to the underlying client. (https://github.com/ClickHouse/clickhouse-java/issues/2658)

- **[client-v2]** `Date`/`Date32` columns are now decoded as `LocalDate` without any timezone adjustment. Previously, `Date` values could be returned as `ZonedDateTime`. Applications that need a `ZonedDateTime` must construct it from the returned `LocalDate` using their own timezone context. More read about it - https://clickhouse.com/docs/integrations/language-clients/java/jdbc_date_time_guide (https://github.com/ClickHouse/clickhouse-java/pull/2727)

## Improvements

- **[client-v2]** Added option to send query parameters in the HTTP request body using multipart form encoding. Enabled via the new `client.http.use_form_request_for_query` configuration property (or `Client.Builder#useHttpFormDataForQuery()`). Useful when query parameters would exceed URL length limits. (https://github.com/ClickHouse/clickhouse-java/issues/2324)

- **[client-v2]** `QueryResponse`, `InsertResponse`, and `CommandResponse` now expose `getServerDisplayName()` to retrieve the value of the `X-ClickHouse-Server-Display-Name` HTTP response header. A full map of whitelisted response headers is accessible via `getResponseHeaders()`. (https://github.com/ClickHouse/clickhouse-java/issues/2347)

- **[client-v2]** Added `getObjectArray()` to `ClickHouseBinaryFormatReader` and `GenericRecord` to read `Array(...)` columns as `Object[]`, including recursive support for nested arrays. `getStringArray()` now also handles `Array(Enum*)` by returning enum names. (https://github.com/ClickHouse/clickhouse-java/issues/2738)

- **[jdbc-v2]** Added support for reading and writing `byte[]` for `String`/`FixedString` columns. `PreparedStatement#setBytes()` encodes the value as a ClickHouse `unhex()` expression to preserve raw bytes; `ResultSet#getBytes()` returns the UTF-8 bytes of the string value. (https://github.com/ClickHouse/clickhouse-java/pull/2734)

- **[client-v2]** Preserve path part from URL passed to builder method `addEndpoint() (https://github.com/ClickHouse/clickhouse-java/pull/2691) 

### Date and Time Handling

- **[docs]** Added a [document](https://clickhouse.com/docs/integrations/language-clients/java/jdbc_date_time_guide) that explains how driver handles different date/time values.  

- **[client-v2, jdbc-v2]** Fixed writing `Date`/`Time`/`Timestamp` values so that timezone conversions are performed explicitly. Previously, timezone-naïve encoding caused day-shift and precision bugs, especially when a `Calendar` or non-default JVM timezone was in use. (https://github.com/ClickHouse/clickhouse-java/issues/2701, https://github.com/ClickHouse/clickhouse-java/issues/2065, https://github.com/ClickHouse/clickhouse-java/issues/2496, https://github.com/ClickHouse/clickhouse-java/issues/1220, https://github.com/ClickHouse/clickhouse-java/issues/1117, https://github.com/ClickHouse/clickhouse-java/issues/1048, https://github.com/ClickHouse/clickhouse-java/issues/2381, https://github.com/ClickHouse/clickhouse-java/issues/1735, https://github.com/ClickHouse/clickhouse-java/issues/2542, https://github.com/ClickHouse/clickhouse-java/issues/2557)

- **[client-v2, jdbc-v2]** Fixed reading `Date`/`Time`/`DateTime` values to be consistent and correct. `Date`/`Date32` are now decoded as `LocalDate` (no timezone), while `Time`/`Time64` are decoded as UTC-based `LocalDateTime`. New `getLocalTime()` API added to readers for `LocalTime` access. Reading date/time from `Dynamic` and `Variant` columns is also fixed. (https://github.com/ClickHouse/clickhouse-java/pull/2727)

- **[jdbc-v2]** `DatabaseMetaDataImpl#getTypeInfo()` now returns type information in deterministic alphabetical order, matching v1 driver behavior. (https://github.com/ClickHouse/clickhouse-java/pull/2733)

## SQL Parser (jdbc-v2)

- **[jdbc-v2]** Fixed SQL parser failing to handle ClickHouse keywords used as table names or column aliases (e.g. `AS value`, `FROM date`). Both the ANTLR4 and JavaCC parsers now maintain a list of non-reserved keywords allowed in identifier positions. Also fixed parsing of `DESCRIBE (SELECT ...)`, `IN` operator in `SELECT`, and bracketed array access in expressions. (https://github.com/ClickHouse/clickhouse-java/issues/2718)

- **[jdbc-v2]** Updated SQL parsers to recognise new ClickHouse keywords (`ABI`, `ARGUMENTS`, `DRY`, `LANGUAGE`, `RETURNS`, `RUN`) introduced in recent ClickHouse HEAD builds. Previously, queries using these keywords as identifiers would fail to parse. (https://github.com/ClickHouse/clickhouse-java/pull/2761)

- **[jdbc-v2]** Fixed SQL parser failing on statements containing the `^` (caret) operator, such as `toJSONString(data.^header_index)`. A new `CARET` token is now recognised and allowed in dotted identifier chains. (https://github.com/ClickHouse/clickhouse-java/issues/2768)

### Array and Collection Handling

- **[jdbc-v2]** Fixed `DataTypeConverter` causing NPE when converting nested arrays to strings (e.g. `ResultSet#getString()` on an `Array(Array(...))` column). The converter is now re-entrancy-safe. Previously was throwing `NullPointerException`. (https://github.com/ClickHouse/clickhouse-java/issues/2723)

- **[client-v2, jdbc-v2]** Fixed conversion of multi-dimensional `List`/array values into Java arrays. Child array dimensions are now calculated correctly from the parent depth level. Previously, converting `List<List<T>>` or similar structures produced incorrect results. (https://github.com/ClickHouse/clickhouse-java/issues/2741)

- **[client-v2]** Fixed binary array decoding when the first element of an array is an empty `Map` or `List`. Previously, this caused a type mismatch error during array population. (https://github.com/ClickHouse/clickhouse-java/issues/2499, https://github.com/ClickHouse/clickhouse-java/issues/2657, https://github.com/ClickHouse/clickhouse-java/issues/2703)

## Bug Fixes

- **[jdbc-v2]** Fixed `DatabaseMetaDataImpl#getJDBCMajorVersion()` and `getJDBCMinorVersion()` returning the ClickHouse driver version instead of the supported JDBC specification version. Now correctly returns `4` and `2` (JDBC 4.2). (https://github.com/ClickHouse/clickhouse-java/pull/2736)

- **[jdbc-v2]** Added mapping for all known ClickHouse table engines to JDBC table types. Added `MATERIALIZED VIEW` as a new table type. `getTables()` now correctly reports remote/external engine tables that were previously invisible. (https://github.com/ClickHouse/clickhouse-java/issues/2664)

- **[jdbc-v2]** Fixed `NullPointerException` in JDBC type metadata for columns of type `Map`, `IPv4`, `IPv6`, `UUID`, `BFloat16`, `Decimal256`, `Geometry`, all `Interval*` types, `JSON`, `LowCardinality`, `Nullable`, `Variant`, `Dynamic`, and others. Previously these types had no Java class mapping. (https://github.com/ClickHouse/clickhouse-java/issues/2711)

- **[jdbc-v2]** ClickHouse server error codes are now propagated to `SQLException#getErrorCode()`. Previously, `SQLException` was created without the vendor error code, making it impossible to distinguish error types programmatically. (https://github.com/ClickHouse/clickhouse-java/issues/2717)

- **[client-v2]** Fixed `max_execution_time` not being sent correctly to the server. Previously, it was treated as a client option and ignored by ClickHouse; it is now transmitted as a server setting. (https://github.com/ClickHouse/clickhouse-java/issues/2750)

- **[client-v2]** Fixed `hasValue(columnName)` throwing an exception when the column name does not exist. Previously, referencing an unknown column or an out-of-range index via `hasValue()` would throw; it now returns `false`. (https://github.com/ClickHouse/clickhouse-java/issues/2755)

- **[jdbc-v2]** Fixed `PreparedStatement` reporting missing parameters using 0-based indices in the error message. JDBC parameter positions are 1-based; the error message now reflects this correctly. (https://github.com/ClickHouse/clickhouse-java/pull/2749)

- **[jdbc-v2]** Ported legacy JDBC v1 connection properties (`CUSTOM_HTTP_PARAMS`, `CUSTOM_SETTINGS`, `HTTP_CONNECTION_PROVIDER`, `REMEMBER_LAST_SET_ROLES`, `USE_SERVER_TIME_ZONE_FOR_DATES`) to JDBC v2. Required for integrations that share JDBC v1/v2 configuration code. `custom_http_params` and `custom_settings` values are converted to server settings automatically. (https://github.com/ClickHouse/clickhouse-java/pull/2757)

- **[client-v2, jdbc-v2]** Fixed `custom_`-prefixed configuration properties not being forwarded to the server as custom settings when using the `custom_` prefix. Also fixed driver-only properties (e.g. `ssl`) being incorrectly forwarded to the HTTP client. (https://github.com/ClickHouse/clickhouse-java/issues/2658)

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.9.7` · 2026-03-03 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.9.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
