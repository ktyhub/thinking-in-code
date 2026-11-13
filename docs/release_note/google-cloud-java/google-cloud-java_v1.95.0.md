---
title: "google-cloud-java v1.95.0"
project: "google-cloud-java"
repo: "googleapis/google-cloud-java"
tag: "v1.95.0"
published: "2026-11-03"
type: "minor"
lang: "en"
---

# google-cloud-java v1.95.0

## [1.95.0](https://github.com/googleapis/google-cloud-java/compare/v1.94.0...v1.95.0) (2026-11-02)


### Features

* **bigquery-jdbc:** expose BigQueryResultSetMetadata and getField(int) ([#14761](https://github.com/googleapis/google-cloud-java/issues/14761)) ([f01245a](https://github.com/googleapis/google-cloud-java/commit/f01245a4333bb4d2f79ee2c3d170bd196a041aaf))
* **gax:** align resumable upload chunk size to server granularity and surface effective chunk size ([#14670](https://github.com/googleapis/google-cloud-java/issues/14670)) ([6cbb096](https://github.com/googleapis/google-cloud-java/commit/6cbb096ca81053546ee134e5a828257ea459ae91))
* **google/cloud/designcenter/v1:** add designcenter ([#14823](https://github.com/googleapis/google-cloud-java/issues/14823)) ([01d27dc](https://github.com/googleapis/google-cloud-java/commit/01d27dcf704f2861cf939e183c20b79919bf12ca))
* **google/cloud/observability/v1:** add observability ([#14722](https://github.com/googleapis/google-cloud-java/issues/14722)) ([624f28e](https://github.com/googleapis/google-cloud-java/commit/624f28e6b3a1d8f34dcea029c340686ddb1c53d8))
* **oauth2:** support certificate-bound OAuth2 tokens and mTLS rotation for Workload Identity Federation ([#14781](https://github.com/googleapis/google-cloud-java/issues/14781)) ([dcb29b0](https://github.com/googleapis/google-cloud-java/commit/dcb29b01aa5e4dcaa4bdca9dd433402559b4cbc1))
* **storage:** add bucket IP filtering samples and tests ([#14328](https://github.com/googleapis/google-cloud-java/issues/14328)) ([cb2b726](https://github.com/googleapis/google-cloud-java/commit/cb2b726884850cd76c9ec43ae8009e82e0a685f3))
* **storage:** add support for DirectPath over Interconnect ([#14006](https://github.com/googleapis/google-cloud-java/issues/14006)) ([ad0eb94](https://github.com/googleapis/google-cloud-java/commit/ad0eb94e12beb367ad33d90e5a9b72f0f8b23756))
* **storage:** OpenTelemetry client metrics configuration and options ([#14484](https://github.com/googleapis/google-cloud-java/issues/14484)) ([7c29e48](https://github.com/googleapis/google-cloud-java/commit/7c29e489ff7716ef76e53c25f5ea1b58bddcdd13))
* **storage:** OpenTelemetry client metrics instrument registry and views ([#14398](https://github.com/googleapis/google-cloud-java/issues/14398)) ([60233b7](https://github.com/googleapis/google-cloud-java/commit/60233b70ca2dbb31da7acd13f23c7d5314b9d263))


### Bug Fixes

* add user agent to session path ([#14835](https://github.com/googleapis/google-cloud-java/issues/14835)) ([a653638](https://github.com/googleapis/google-cloud-java/commit/a65363840a06969570700955a7886e7bf1f343ec))
* **auth:** align mTLS transport and bound token certificate startup polling and well-known discovery ([#14748](https://github.com/googleapis/google-cloud-java/issues/14748)) ([0bae268](https://github.com/googleapis/google-cloud-java/commit/0bae26845d21edcb5e384695b27edbc2f8284325))
* **bigquery-jdbc:** expand handling to OOM errors ([#14759](https://github.com/googleapis/google-cloud-java/issues/14759)) ([7d4b921](https://github.com/googleapis/google-cloud-java/commit/7d4b921b3aaa89f93d1fbff900a0d7f247d88926))
* **bigquery-jdbc:** fix naive fallback of parameter count ([#14779](https://github.com/googleapis/google-cloud-java/issues/14779)) ([c3e4a5b](https://github.com/googleapis/google-cloud-java/commit/c3e4a5b3d056008b1c2d0e2fd5c9acc7e8b2badb))
* **bigquery-jdbc:** format RANGE bounds consistently across REST and Arrow ([#14807](https://github.com/googleapis/google-cloud-java/issues/14807)) ([2108b8e](https://github.com/googleapis/google-cloud-java/commit/2108b8eced0469a0a58035183c57a347009f31f6))
* **bigquery-jdbc:** parse scientific-notation epoch TIMESTAMPs ([#14777](https://github.com/googleapis/google-cloud-java/issues/14777)) ([71a31b1](https://github.com/googleapis/google-cloud-java/commit/71a31b138d1ea2aa642ea661c9f97042899fe2d4))
* **bigquery-jdbc:** preserve pre-1582 and pre-standard-time DATE/DATETIME digits ([#14787](https://github.com/googleapis/google-cloud-java/issues/14787)) ([3dc394f](https://github.com/googleapis/google-cloud-java/commit/3dc394f97626e919b22cd03a2f61a602331fbc59))
* **bigtable:** avoid mutating Query in-place in createPointReadCallable ([#14797](https://github.com/googleapis/google-cloud-java/issues/14797)) ([1b1c6a7](https://github.com/googleapis/google-cloud-java/commit/1b1c6a72fb29dd7a8e04b6ddb2e402603ad6ac90))
* **bigtable:** check isOk and getRejected first in RetryingVRpc.shouldRetry ([#14795](https://github.com/googleapis/google-cloud-java/issues/14795)) ([d821bd3](https://github.com/googleapis/google-cloud-java/commit/d821bd3e81aacea3b8aeb7adf471b88e47cb3764))
* **bigtable:** check remaining deadline on client-initiated retries in RetryingVRpc ([#14796](https://github.com/googleapis/google-cloud-java/issues/14796)) ([a04e24c](https://github.com/googleapis/google-cloud-java/commit/a04e24c1beb3558a6c7f93aab6293beb0c4428c9))
* **bigtable:** Fix empty RowResult semantics in TestProxy. ([#14810](https://github.com/googleapis/google-cloud-java/issues/14810)) ([1d2fb9a](https://github.com/googleapis/google-cloud-java/commit/1d2fb9a698f0c3eae14f8c0d06afea2440d5aca0))
* **bigtable:** include reversed in Query equals, hashCode, and toString ([#14799](https://github.com/googleapis/google-cloud-java/issues/14799)) ([fe9232b](https://github.com/googleapis/google-cloud-java/commit/fe9232bb7fa3debbafe067e453a156a5dd8fbd2a))
* **bigtable:** pass cell value size to RowBuilder.startCell in RowBuilderShim ([#14800](https://github.com/googleapis/google-cloud-java/issues/14800)) ([cfa7949](https://github.com/googleapis/google-cloud-java/commit/cfa7949755b23c7e86acb798d87ff6a11a426d7f))
* **bigtable:** reject empty split points in RowSetUtil and clarify QueryPaginator Javadoc ([#14811](https://github.com/googleapis/google-cloud-java/issues/14811)) ([1bc507f](https://github.com/googleapis/google-cloud-java/commit/1bc507f80adc6b85af4761420f5408cb6acb15f7))
* **bigtable:** remove legacy PollingConfiguration migration in ClientConfigurationManager ([#14822](https://github.com/googleapis/google-cloud-java/issues/14822)) ([95ead45](https://github.com/googleapis/google-cloud-java/commit/95ead459480137a07d5b62ad75ff9978ecb8099a))
* **bigtable:** resolve session diversion through a single shared rule ([#14738](https://github.com/googleapis/google-cloud-java/issues/14738)) ([00f7bea](https://github.com/googleapis/google-cloud-java/commit/00f7bea135eb77de710e71c97ae5be3a2829886d))
* **bigtable:** respect query limit smaller than pageSize and avoid mutating Query in QueryPaginator ([#14821](https://github.com/googleapis/google-cloud-java/issues/14821)) ([cecd09e](https://github.com/googleapis/google-cloud-java/commit/cecd09e27d3511de8def4983a94cf7823a248af3))
* **firestore:** graduate pipeline search from preview to GA ([#14741](https://github.com/googleapis/google-cloud-java/issues/14741)) ([a993026](https://github.com/googleapis/google-cloud-java/commit/a993026ba27f460189e0181b2b75aff17eec616d))
* **gax:** do not treat a SocketTimeoutException as a thread interrupt ([#14778](https://github.com/googleapis/google-cloud-java/issues/14778)) ([7b91805](https://github.com/googleapis/google-cloud-java/commit/7b91805a5a2189b31555bd3a571613377006d44e))
* **jdbc:** populate `ResultSetMetaData` on empty `DatabaseMetaData` resultsets ([#14809](https://github.com/googleapis/google-cloud-java/issues/14809)) ([4c6a7e3](https://github.com/googleapis/google-cloud-java/commit/4c6a7e3911f08d12b1cbc89f84431860289f9d9e))
* **pubsub:** make publish hedging robust to clock jumps, queue errors, and shutdown ([#14860](https://github.com/googleapis/google-cloud-java/issues/14860)) ([9b9e2a5](https://github.com/googleapis/google-cloud-java/commit/9b9e2a5bca98bca5972185e75bb7d15b79d78a30))
* **spanner:** attach routing hints to read-write transaction requests ([#14786](https://github.com/googleapis/google-cloud-java/issues/14786)) ([54e0585](https://github.com/googleapis/google-cloud-java/commit/54e0585f4bd423f6acff3713f8ff9e1ddff5ad59))
* **spanner:** cancel queries promptly on close and synchronize error handling ([#14887](https://github.com/googleapis/google-cloud-java/issues/14887)) ([323a8f7](https://github.com/googleapis/google-cloud-java/commit/323a8f72ae35953022baf146f10c706441c9a9a8))
* **spanner:** do not cache retryable errors in AbstractLazyInitializer ([#14752](https://github.com/googleapis/google-cloud-java/issues/14752)) ([6a9ac76](https://github.com/googleapis/google-cloud-java/commit/6a9ac76d47b8e4c26fef3996d9a25dd72b3ea882))
* **spanner:** restore setCall overload for stream test compatibility ([#14885](https://github.com/googleapis/google-cloud-java/issues/14885)) ([cfe728e](https://github.com/googleapis/google-cloud-java/commit/cfe728e8118a98c9e54aa4080ecc5705202bc562))
* **spanner:** synchronize stream lifecycle and retry buffering in ResumableStreamIterator ([#14770](https://github.com/googleapis/google-cloud-java/issues/14770)) ([4edefc5](https://github.com/googleapis/google-cloud-java/commit/4edefc527a742a9d61ba3c78acf4cf8c9f227ce8))
* **spanner:** trigger best-effort rollback on indeterminate commit failures ([#14831](https://github.com/googleapis/google-cloud-java/issues/14831)) ([b9d1b95](https://github.com/googleapis/google-cloud-java/commit/b9d1b95cfefa4b322811e85585d7693363355359))
* **storage:** preserve HTTP status for XML multipart upload errors so retries work ([#14804](https://github.com/googleapis/google-cloud-java/issues/14804)) ([3c03034](https://github.com/googleapis/google-cloud-java/commit/3c03034cf46187024f91792c12b4e812a7799738))
* **storage:** send destination on gRPC copy when target BlobInfo is provided ([#14784](https://github.com/googleapis/google-cloud-java/issues/14784)) ([43a67a0](https://github.com/googleapis/google-cloud-java/commit/43a67a06fb4f4a1dc754ff882d2bf7a3e4546ead))
* **storage:** validate CRC32C on HTTP downloads that were not decompressed ([#14805](https://github.com/googleapis/google-cloud-java/issues/14805)) ([61aa22f](https://github.com/googleapis/google-cloud-java/commit/61aa22fc1a38d4392e9d1df464903cb533374615))


### Documentation

* **bigtable:** document that skipped large rows count towards row limit ([#14801](https://github.com/googleapis/google-cloud-java/issues/14801)) ([91d60e0](https://github.com/googleapis/google-cloud-java/commit/91d60e05e5c81d47288c53f55e25961169c2b3c5))

---

> **Source** [googleapis/google-cloud-java](https://github.com/googleapis/google-cloud-java) · `v1.95.0` · 2026-11-03 · [upstream release](https://github.com/googleapis/google-cloud-java/releases/tag/v1.95.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
