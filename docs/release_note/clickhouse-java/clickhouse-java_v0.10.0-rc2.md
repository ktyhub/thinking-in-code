---
title: "clickhouse-java v0.10.0-rc2"
project: "clickhouse-java"
repo: "ClickHouse/clickhouse-java"
tag: "v0.10.0-rc2"
published: "2026-07-22"
type: "minor"
lang: "en"
summary: "[client-v2] The public ClickHouseBinaryFormatWriter interface gained two methods, setString(String, byte[]) and setString(int, byte[]), for writing raw String/FixedString bytes."
---

# clickhouse-java v0.10.0-rc2

[Release Migration Guide](https://github.com/ClickHouse/clickhouse-java/blob/v0.10.0/docs/releases/0_10_0.md)

Additionally to `v0.10.0-rc1` 

### Breaking Changes

- **[client-v2]** The public `ClickHouseBinaryFormatWriter` interface gained two methods, `setString(String, byte[])` and `setString(int, byte[])`, for writing raw `String`/`FixedString` bytes. Code that only *uses* the interface is unaffected, but any third party that *implements* `ClickHouseBinaryFormatWriter` directly is source- and binary-incompatible until it adds these methods (recompiling against the new version is required; otherwise an `AbstractMethodError` can occur at runtime).

- **[client-v2]** HTTP `503 Service Unavailable` responses are now surfaced as a connection-style failure (
  `java.net.ConnectException`) and are retried by default. Previously a `503` was treated as a server error (
  `ServerException`) and fell under the `ServerRetryable` fault cause. It has been moved to the `ConnectTimeout` fault
  cause category so that connectivity/availability failures are handled uniformly with other connection errors. Callers
  that specifically excluded `ServerRetryable` to avoid retrying `503` should now adjust their
  `client_retry_on_failures` configuration to exclude `ConnectTimeout` instead.

- **[client-v2]** Unexpected/unknown HTTP status codes (those the client cannot interpret as a ClickHouse response) now
  throw a `ClientException` instead of a `ServerException`. Since the client cannot meaningfully handle these responses,
  they are reported as a client-side error rather than being attributed to the server.

### New Features

- **[client-v2, jdbc-v2]** Added opt-in binary string support through the `binary_string_support` configuration property
  (or `Client.Builder#binaryStringSupport(boolean)`), disabled by default. The setting is resolved per operation from 
  the merged client and query settings, so it can be overridden for a single request via the `binary_string_support` 
  operation option (e.g. `QuerySettings#setOption(ClientConfigProperties.BINARY_STRING_SUPPORT.getKey(), true)`) 
  independently of the client-level default. When enabled, top-level `String` and `FixedString` columns are read 
  into a `StringValue` that preserves the raw bytes instead of decoding them into a `String`, allowing non-UTF-8/binary 
  content to round-trip byte-for-byte. `StringValue` exposes the bytes via `toByteArray()`/`asByteBuffer()` and 
  lazily decodes a `String` via `asString()` (UTF-8 by default, or a caller-supplied `Charset`). Values nested inside 
  containers (`Array`, `Map`, `Tuple`, `Nested`, `Variant`) continue to be read as `String`, since those types are not 
  expected to carry large/binary strings. On the JDBC side, `ResultSet#getBinaryStream(int)` and 
  `ResultSet#getBinaryStream(String)` are now implemented (previously unsupported) and, together with `getBytes(...)`, 
  return the raw column bytes.
  
- **[client-v2]** Added `Client#cancelTransportRequest(String queryId)` to cancel an in-flight request that has not yet
  received a response from the server, identified by the query id supplied in the operation settings. This aborts the
  request on the client side (cancels the underlying IO operation) but does **not** issue a `KILL QUERY` on the server,
  so a query that already started executing may continue to run server-side. It is recommended to use operation timeout
  settings where possible; this API is intended for explicitly aborting a request from the client.

---

> **Source** [ClickHouse/clickhouse-java](https://github.com/ClickHouse/clickhouse-java) · `v0.10.0-rc2` · 2026-07-22 · [upstream release](https://github.com/ClickHouse/clickhouse-java/releases/tag/v0.10.0-rc2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
