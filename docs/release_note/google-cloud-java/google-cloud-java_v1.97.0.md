---
title: "google-cloud-java v1.97.0"
project: "google-cloud-java"
repo: "googleapis/google-cloud-java"
tag: "v1.97.0"
published: "2026-11-13"
type: "minor"
lang: "en"
summary: "shopping-merchant: remove discontinued Merchant API v1beta (#14942)"
---

# google-cloud-java v1.97.0

## [1.97.0](https://github.com/googleapis/google-cloud-java/compare/v1.96.0...v1.97.0) (2026-11-12)


### ⚠ BREAKING CHANGES

* **shopping-merchant:** remove discontinued Merchant API v1beta ([#14942](https://github.com/googleapis/google-cloud-java/issues/14942))

### Features

* **bigquery-jdbc:** adds BigQuery graph integration to DatabaseMetadata methods ([#14930](https://github.com/googleapis/google-cloud-java/issues/14930)) ([950b81b](https://github.com/googleapis/google-cloud-java/commit/950b81bb0fd858a61e597be671cf4f16bc199977))
* **gax:** implement resumable upload session resumption ([#14677](https://github.com/googleapis/google-cloud-java/issues/14677)) ([24728d6](https://github.com/googleapis/google-cloud-java/commit/24728d6ff6b2d1783b6be7076616d7deac57e5e8))
* **grpc-gcp:** add built-in channel_count metric for client library pools ([#14947](https://github.com/googleapis/google-cloud-java/issues/14947)) ([712f043](https://github.com/googleapis/google-cloud-java/commit/712f043e8fe7087997ca97f811a2862ee861ad05))
* **grpc-gcp:** add built-in channel_load metric for client library pools ([#14985](https://github.com/googleapis/google-cloud-java/issues/14985)) ([9f87888](https://github.com/googleapis/google-cloud-java/commit/9f878882c3d9264ac1c3d1223097dae7ba020a69))
* **shopping-merchant:** remove discontinued Merchant API v1beta ([#14942](https://github.com/googleapis/google-cloud-java/issues/14942)) ([2947dfd](https://github.com/googleapis/google-cloud-java/commit/2947dfdb004d5c14cbb5956b6f676f6cd6e65642))
* **storage:** add StorageErrorTypeMapper for standard metrics ([#14694](https://github.com/googleapis/google-cloud-java/issues/14694)) ([a9ac393](https://github.com/googleapis/google-cloud-java/commit/a9ac393f0ca46abbc29fe698468a4852b0f3bcca))
* **storage:** add StorageMetricsContext for operation metrics state ([#14728](https://github.com/googleapis/google-cloud-java/issues/14728)) ([edea395](https://github.com/googleapis/google-cloud-java/commit/edea39554785ff41e7327601e33201fd4336587a))
* **storage:** wire logical operation metrics in Retrying and StorageOptions ([#14695](https://github.com/googleapis/google-cloud-java/issues/14695)) ([589c66c](https://github.com/googleapis/google-cloud-java/commit/589c66c96bc0680fc51bd9d3d000ee3e9ebe7b1e))
* update API sources and regenerate ([#14958](https://github.com/googleapis/google-cloud-java/issues/14958)) ([75944f3](https://github.com/googleapis/google-cloud-java/commit/75944f3ef3597403f76da765f8eb1091b0401537))


### Bug Fixes

* **auth:** verify public/private key match with retries in mTLS keystore loading ([#14829](https://github.com/googleapis/google-cloud-java/issues/14829)) ([096dbd6](https://github.com/googleapis/google-cloud-java/commit/096dbd6b5a0e74edf3b89b34bdb8f347fb6eb636))
* **bigquery:** set QueryResultsFormat.ARROW in QueryArrow sample ([#14960](https://github.com/googleapis/google-cloud-java/issues/14960)) ([c98e7c3](https://github.com/googleapis/google-cloud-java/commit/c98e7c39b8155fa64f562d9d68b6d5e7b95d6fe8))
* **bigtable:** avoid triggering per-RPC credential session fallback on default call context ([#14961](https://github.com/googleapis/google-cloud-java/issues/14961)) ([eb06d2c](https://github.com/googleapis/google-cloud-java/commit/eb06d2c9b501b4207f50e4a1c5c54aad140325b6))
* **bigtable:** copy Metadata per GetClientConfiguration call ([#14950](https://github.com/googleapis/google-cloud-java/issues/14950)) ([278fe2f](https://github.com/googleapis/google-cloud-java/commit/278fe2fb46c565534a6063d424ad7636f739a81d))
* **bigtable:** disable SwitchingChannelPool when ChannelPoolConfiguration is empty ([#14911](https://github.com/googleapis/google-cloud-java/issues/14911)) ([fa24702](https://github.com/googleapis/google-cloud-java/commit/fa24702a94afc4df290a5f62d515e52ac5474952))
* **bigtable:** handle empty SessionPoolConfiguration in SessionPoolImpl and PoolSizer ([#14912](https://github.com/googleapis/google-cloud-java/issues/14912)) ([cc7b235](https://github.com/googleapis/google-cloud-java/commit/cc7b235981eb0ce4cc4bcbc42ede60ea8417ac87))
* **bigtable:** replace SessionPoolImpl Watchdog with per-session closeTimeout ([#14977](https://github.com/googleapis/google-cloud-java/issues/14977)) ([a15acfb](https://github.com/googleapis/google-cloud-java/commit/a15acfbdb465123da685797b83f1040b54a972c8))
* **spanner-jdbc:** report database default isolation level ([#14929](https://github.com/googleapis/google-cloud-java/issues/14929)) ([7e7595a](https://github.com/googleapis/google-cloud-java/commit/7e7595aa7f456dc1218821d3ed2efd2af3542c60))
* **spanner:** fix PG SHOW isolation level statements ([#14904](https://github.com/googleapis/google-cloud-java/issues/14904)) ([bc917ed](https://github.com/googleapis/google-cloud-java/commit/bc917edc5ea870007c88dd36a8730ae1a068d68d))


### Dependencies

* bump grpc to 1.85.1, opentelemetry to 1.67.0, and guava to 33.7.2-jre ([#14957](https://github.com/googleapis/google-cloud-java/issues/14957)) ([1a27a00](https://github.com/googleapis/google-cloud-java/commit/1a27a00b4df033a7039052e36b9551f293094c19))
* bump guava to 33.7.1-jre and jspecify to 1.0.1 ([#14937](https://github.com/googleapis/google-cloud-java/issues/14937)) ([1441527](https://github.com/googleapis/google-cloud-java/commit/14415278ae25501f7f4901e38a7af74020f94279))


### Documentation

* **spanner:** update CHANGELOG.md for java spanner releases ([#14935](https://github.com/googleapis/google-cloud-java/issues/14935)) ([956681e](https://github.com/googleapis/google-cloud-java/commit/956681e6726a99b27fd1b495a3d25217180ebdd2))
* **storage:** add Rapid Cache samples ([#14886](https://github.com/googleapis/google-cloud-java/issues/14886)) ([e714f62](https://github.com/googleapis/google-cloud-java/commit/e714f62ee3b96f12f32c3c8cb2ab4621f6d069f3))

---

> **Source** [googleapis/google-cloud-java](https://github.com/googleapis/google-cloud-java) · `v1.97.0` · 2026-11-13 · [upstream release](https://github.com/googleapis/google-cloud-java/releases/tag/v1.97.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
