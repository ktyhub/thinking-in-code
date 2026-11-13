---
title: "google-cloud-java v1.94.0"
project: "google-cloud-java"
repo: "googleapis/google-cloud-java"
tag: "v1.94.0"
published: "2026-10-23"
type: "minor"
lang: "en"
---

# google-cloud-java v1.94.0

## [1.94.0](https://github.com/googleapis/google-cloud-java/compare/v1.93.0...v1.94.0) (2026-10-22)


### Features

* **auth:** request certificate-bound tokens for agent identities by ([01eaba1](https://github.com/googleapis/google-cloud-java/commit/01eaba17a695cd74d6b09789501c27ceda77ae88))
* **bigquery-jdbc:** Add clearcut telemetry client  ([#14607](https://github.com/googleapis/google-cloud-java/issues/14607)) ([c702438](https://github.com/googleapis/google-cloud-java/commit/c702438f7d93af7fe30c94316240e2341819ccd4))
* **bigquery-jdbc:** expose QueryStatistics for jobless queries ([#14596](https://github.com/googleapis/google-cloud-java/issues/14596)) ([15f472c](https://github.com/googleapis/google-cloud-java/commit/15f472c81bb8a35e2bf424d4afd1eda25767164a))
* **bigquery:** expose QueryStatistics from TableResult ([#14588](https://github.com/googleapis/google-cloud-java/issues/14588)) ([40b2b1a](https://github.com/googleapis/google-cloud-java/commit/40b2b1afe1e0dd22153528fe884f397f1d06afa7))
* **bigtable:** add per-method session diversion configuration ([#14681](https://github.com/googleapis/google-cloud-java/issues/14681)) ([042dd3e](https://github.com/googleapis/google-cloud-java/commit/042dd3eeff4b60fc5be076de58e0015d2fa65c67))
* **bigtable:** support SessionCheckAndMutateRow on the session client ([#14565](https://github.com/googleapis/google-cloud-java/issues/14565)) ([86de9c1](https://github.com/googleapis/google-cloud-java/commit/86de9c171da56be0b442a9bba023c1c625c3d9b2))
* **bigtable:** support SessionReadModifyWriteRow on the session client ([#14585](https://github.com/googleapis/google-cloud-java/issues/14585)) ([8e653b2](https://github.com/googleapis/google-cloud-java/commit/8e653b2b3c7ebe6031b89f5610b502deafe95f01))
* **firestore:** DML ([#14703](https://github.com/googleapis/google-cloud-java/issues/14703)) ([11bc071](https://github.com/googleapis/google-cloud-java/commit/11bc0716fcbd8549a7b4e9677d520ee0be8b91b0))
* **gax:** implement operation-level client request spans (T3) ([#14549](https://github.com/googleapis/google-cloud-java/issues/14549)) ([275063b](https://github.com/googleapis/google-cloud-java/commit/275063b52e4c0cd9112664e05882d6337fd0ad7e))
* **gax:** link attempt spans to parent context and clean up on operation completion ([#14459](https://github.com/googleapis/google-cloud-java/issues/14459)) ([0c481bd](https://github.com/googleapis/google-cloud-java/commit/0c481bd5f232516a07ac40149add2bfd3e56b081))
* **gax:** standardize mapping terminal resumable upload exceptions to ApiException ([#14624](https://github.com/googleapis/google-cloud-java/issues/14624)) ([d4961f0](https://github.com/googleapis/google-cloud-java/commit/d4961f015b9b9881bd95b4cf50851053a984f33c))
* **google/devicesandservices/health/v4beta:** add health v4beta ([#14600](https://github.com/googleapis/google-cloud-java/issues/14600)) ([95f863c](https://github.com/googleapis/google-cloud-java/commit/95f863c47782eccc209279035ba65e7922425081))
* **google/shopping/merchant/reviews/v1:** add shopping-merchant-reviews ([#14724](https://github.com/googleapis/google-cloud-java/issues/14724)) ([13310c7](https://github.com/googleapis/google-cloud-java/commit/13310c7b955f3a8c9536cc15a83ff3ce97ab1237))
* include writerId as part of trace id ([#13488](https://github.com/googleapis/google-cloud-java/issues/13488)) ([ffa8063](https://github.com/googleapis/google-cloud-java/commit/ffa8063dcdf5ea25d56cdbb07aa8788423399fc1))
* log actionable errors on operation failure in LoggingTracer ([#14460](https://github.com/googleapis/google-cloud-java/issues/14460)) ([27559f4](https://github.com/googleapis/google-cloud-java/commit/27559f433ae16ef12ca3d16f08a4892ed13b46ff))
* populate client_stats in AppendRowsRequest ([#14614](https://github.com/googleapis/google-cloud-java/issues/14614)) ([a7a0098](https://github.com/googleapis/google-cloud-java/commit/a7a00988c1fda121b3c17ecbf34a16f2a4d51385))
* **spanner:** add option to create GcpFallbackChannel per channel instead of per pool ([#14501](https://github.com/googleapis/google-cloud-java/issues/14501)) ([74f7591](https://github.com/googleapis/google-cloud-java/commit/74f7591082cfadd8a82a5c24708d05758c1e07b8))


### Bug Fixes

* **api-common:** validate path template variables against dot segments ([#14641](https://github.com/googleapis/google-cloud-java/issues/14641)) ([4ad59e2](https://github.com/googleapis/google-cloud-java/commit/4ad59e2618779f0543c2a4cc0a1b7216c9883eaa))
* **auth:** fix serialization gaps in DownscopedCredentials and UrlIdentityPoolSubjectTokenSupplier ([#14341](https://github.com/googleapis/google-cloud-java/issues/14341)) ([a3e3324](https://github.com/googleapis/google-cloud-java/commit/a3e3324c64e192e182ed59e7c29254984a6d3e2e))
* **bigquery-jdbc:** ensure JDBC uses PQC-compliant algorithm by default ([#14560](https://github.com/googleapis/google-cloud-java/issues/14560)) ([b0ffe3d](https://github.com/googleapis/google-cloud-java/commit/b0ffe3df29eb32a6591402797c27f9b23ccf39eb))
* **bigquery-jdbc:** fix Exception handling ([#14566](https://github.com/googleapis/google-cloud-java/issues/14566)) ([3e7a206](https://github.com/googleapis/google-cloud-java/commit/3e7a206fa5d3a513717175c409f72ca2da956f7e))
* **bigquery-jdbc:** fix missing logger instances ([#14733](https://github.com/googleapis/google-cloud-java/issues/14733)) ([0e822dc](https://github.com/googleapis/google-cloud-java/commit/0e822dcfed7a660894ada073b86ae0baea7afc4a))
* **bigquery-jdbc:** fix pqc working in proxy env ([#14599](https://github.com/googleapis/google-cloud-java/issues/14599)) ([ceb45b4](https://github.com/googleapis/google-cloud-java/commit/ceb45b46f5fda41ca524be3b3d7a9920aa46bebd))
* **bigquery-jdbc:** format nested ARRAY fields as valid JSON in Struct.toString() ([#14720](https://github.com/googleapis/google-cloud-java/issues/14720)) ([bc0126a](https://github.com/googleapis/google-cloud-java/commit/bc0126a4c48e66921422a44bda3f14f8aedf053d))
* **bigquery-jdbc:** format TIMESTAMP as UTC in getString and add multi-zone TIMESTAMP(12) tests ([#14666](https://github.com/googleapis/google-cloud-java/issues/14666)) ([e666612](https://github.com/googleapis/google-cloud-java/commit/e6666121943f690b8a0a18c0902350e62ed9419e))
* **bigquery-jdbc:** honor `Calendar` timezone and prevent `ClassCastException` in ResultSet temporal getters ([#14657](https://github.com/googleapis/google-cloud-java/issues/14657)) ([7dd2b37](https://github.com/googleapis/google-cloud-java/commit/7dd2b37c52e0e54dfaa0351e2b77f9b20dfa14b2))
* **bigquery-jdbc:** limit Storage Read API Arrow batch queue to 32 batches ([#14709](https://github.com/googleapis/google-cloud-java/issues/14709)) ([d339c41](https://github.com/googleapis/google-cloud-java/commit/d339c4179517df5e35bc33dd823a38b6ed367bce))
* **bigquery-jdbc:** normalize `setTime` from Calendar zone to JVM zone ([#14660](https://github.com/googleapis/google-cloud-java/issues/14660)) ([54d2bc6](https://github.com/googleapis/google-cloud-java/commit/54d2bc684399a0b9f7cce50b770cac1e4511ccf7))
* **bigquery-jdbc:** poll the JSON reference queue and release processed finalizers ([#14719](https://github.com/googleapis/google-cloud-java/issues/14719)) ([1b7d00d](https://github.com/googleapis/google-cloud-java/commit/1b7d00d4580b2a32be061fab3a6e3f0819348c86))
* **bigquery-jdbc:** preserve `Timestamp` instant in `PreparedStatement` and `CallableStatement` Calendar overloads ([#14640](https://github.com/googleapis/google-cloud-java/issues/14640)) ([3b02a44](https://github.com/googleapis/google-cloud-java/commit/3b02a442725d216d9b1fa6f2b97b02a82f5c8ad8))
* **bigquery-jdbc:** preserve the instant on the TIMESTAMP write path and bind LocalDateTime as STRING ([#14647](https://github.com/googleapis/google-cloud-java/issues/14647)) ([2106e26](https://github.com/googleapis/google-cloud-java/commit/2106e2682e1a626d00712baf4bc14f3f3f97637c))
* **bigquery-jdbc:** stop per-ResultSet logger registration leak ([#14718](https://github.com/googleapis/google-cloud-java/issues/14718)) ([e83c768](https://github.com/googleapis/google-cloud-java/commit/e83c768171a7f7aceaf35cd7c7192e232d9d89a8))
* **bigquery-jdbc:** stop producer and release resources on ResultSet.close ([#14712](https://github.com/googleapis/google-cloud-java/issues/14712)) ([6b99452](https://github.com/googleapis/google-cloud-java/commit/6b99452a5f9a987add9708b74fe35f23a4f13fc3))
* **bigquery:** fix invalid mappings in domain models ([#14646](https://github.com/googleapis/google-cloud-java/issues/14646)) ([17048ed](https://github.com/googleapis/google-cloud-java/commit/17048eda00b935598f0454d66e5f3da8e1d0979c))
* **bigquery:** remove duplicate google-cloud-storage dependency ([#14586](https://github.com/googleapis/google-cloud-java/issues/14586)) ([ab6173e](https://github.com/googleapis/google-cloud-java/commit/ab6173ed027691bd62663a532325d690305dd3e2))
* **datastore:** allow any gRPC TransportChannelProvider in DatastoreOptions ([#14478](https://github.com/googleapis/google-cloud-java/issues/14478)) ([d9a8db5](https://github.com/googleapis/google-cloud-java/commit/d9a8db5077def1d746f699adc36d4bae95e0c6e7))
* **datastore:** update emulator zip checksum for 2.3.1 ([#14592](https://github.com/googleapis/google-cloud-java/issues/14592)) ([fb73ed5](https://github.com/googleapis/google-cloud-java/commit/fb73ed5a38987e936671b16d628c19a37567ee66))
* **deps:** update dependency com.google.api-client:google-api-client-bom to v2.9.2 ([#14725](https://github.com/googleapis/google-cloud-java/issues/14725)) ([1ffa467](https://github.com/googleapis/google-cloud-java/commit/1ffa467dedbf38be9f86a2a1381a3796938c9d9f))
* **gax-httpjson:** gracefully handle error details with unrecognized types ([#14612](https://github.com/googleapis/google-cloud-java/issues/14612)) ([7295640](https://github.com/googleapis/google-cloud-java/commit/7295640fea97814249784d5912e8f1c4ab554282))
* revise health metrics inflightBytes to become inflightBytesMax ([#14613](https://github.com/googleapis/google-cloud-java/issues/14613)) ([44a12ef](https://github.com/googleapis/google-cloud-java/commit/44a12efb60c3507ff5099d795c8506a037d940a9))
* **showcase:** update parent context retry tests for operation span in ITOtelTracing ([#14673](https://github.com/googleapis/google-cloud-java/issues/14673)) ([312b5ea](https://github.com/googleapis/google-cloud-java/commit/312b5ea505b8fd94ac4eb421068c030174cb8432))
* **spanner:** increase max inbound message size from 256MB to 300MB ([#14551](https://github.com/googleapis/google-cloud-java/issues/14551)) ([70c7439](https://github.com/googleapis/google-cloud-java/commit/70c7439de5a3ae401b8d5833abd06de32c8f7a0a))
* **spanner:** increase max inbound message size from 256MB to 300MB as ([70c7439](https://github.com/googleapis/google-cloud-java/commit/70c7439de5a3ae401b8d5833abd06de32c8f7a0a))
* **spanner:** prevent stream leaks and race conditions on result set close ([#14665](https://github.com/googleapis/google-cloud-java/issues/14665)) ([013b49b](https://github.com/googleapis/google-cloud-java/commit/013b49bbcfee830ff31d46a1018ff7e5c99a5fd6))
* **spanner:** support autoscaling config, edition, and positive capacity in cloud instance actions ([#14574](https://github.com/googleapis/google-cloud-java/issues/14574)) ([004f0fd](https://github.com/googleapis/google-cloud-java/commit/004f0fd86aef7f187c09e18d93fcf1ed0aa49fd7))


### Performance Improvements

* **bigquery:** defer blocking jobs.get RPC in QueryPageFetcher until getNextPage() ([#14650](https://github.com/googleapis/google-cloud-java/issues/14650)) ([6183b63](https://github.com/googleapis/google-cloud-java/commit/6183b63faa1f9b054f422ded8358871d637dce7d))


### Dependencies

* Upgrade jackson-bom to v2.22.4 ([#14701](https://github.com/googleapis/google-cloud-java/issues/14701)) ([09ce4c5](https://github.com/googleapis/google-cloud-java/commit/09ce4c59d9f67a2c41e3103fb7e700f2d8f24623))


### Documentation

* **auth:** clarify quota project behavior on ImpersonatedCredentials ([#14597](https://github.com/googleapis/google-cloud-java/issues/14597)) ([4e5a0d0](https://github.com/googleapis/google-cloud-java/commit/4e5a0d0106f1e623077fe3667d9dc08dfc8aca16))
* **pubsub:** Create a Cloud Pub/Sub sample for publishing with hedging ([#14623](https://github.com/googleapis/google-cloud-java/issues/14623)) ([9de611f](https://github.com/googleapis/google-cloud-java/commit/9de611fe5633e9f43c6081754c834cabcd0317bb))
* **pubsub:** regenerate README.md sample table ([#14643](https://github.com/googleapis/google-cloud-java/issues/14643)) ([5394618](https://github.com/googleapis/google-cloud-java/commit/539461836ecab5da742206ea3c2195860cd87aa9)), refs [#14543](https://github.com/googleapis/google-cloud-java/issues/14543)

---

> **Source** [googleapis/google-cloud-java](https://github.com/googleapis/google-cloud-java) · `v1.94.0` · 2026-10-23 · [upstream release](https://github.com/googleapis/google-cloud-java/releases/tag/v1.94.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
