---
title: "google-cloud-java v1.93.0"
project: "google-cloud-java"
repo: "googleapis/google-cloud-java"
tag: "v1.93.0"
published: "2026-09-30"
type: "minor"
lang: "en"
summary: "automl: remove java-automl library (#14540)"
---

# google-cloud-java v1.93.0

## [1.93.0](https://github.com/googleapis/google-cloud-java/compare/v1.92.0...v1.93.0) (2026-09-30)


### ⚠ BREAKING CHANGES

* **automl:** remove java-automl library ([#14540](https://github.com/googleapis/google-cloud-java/issues/14540))

### Features

* **automl:** remove java-automl library ([#14540](https://github.com/googleapis/google-cloud-java/issues/14540)) ([6f13a1d](https://github.com/googleapis/google-cloud-java/commit/6f13a1d026e4df5b61ebfed4226d7d8a87847f2b))
* **bigquery-jdbc:** infer undeclared fields in PreparedStatement ([#14400](https://github.com/googleapis/google-cloud-java/issues/14400)) ([e989a72](https://github.com/googleapis/google-cloud-java/commit/e989a72718f9e3280215064204a31f7a1d49b473))
* **gax,gapic-generator-java:** retry start upload call and rename ResumableUploadCallSettings to ResumableUploadOptions ([#14511](https://github.com/googleapis/google-cloud-java/issues/14511)) ([98c2073](https://github.com/googleapis/google-cloud-java/commit/98c20738afa067da5eed015f5caa219a3ac247ef))
* **gax:** add chunk upload recovery loop for resumable uploads ([#14424](https://github.com/googleapis/google-cloud-java/issues/14424)) ([8ecd1e5](https://github.com/googleapis/google-cloud-java/commit/8ecd1e58ac66982d7cc6cac11ca8c69044efa061))
* **gax:** add ResumableUploadProgressListener and related infrastructure ([#14426](https://github.com/googleapis/google-cloud-java/issues/14426)) ([c7f10d8](https://github.com/googleapis/google-cloud-java/commit/c7f10d81f0485fd45ec20aa0ae5a48f18e36368c))
* **gax:** add RewindableStreamBuffer in prep for chunk upload recovery ([#14423](https://github.com/googleapis/google-cloud-java/issues/14423)) ([349c315](https://github.com/googleapis/google-cloud-java/commit/349c315caaecc93bfee2cdb0e89efe3e3999813d))
* **gax:** enforce global timeout for resumable uploads ([#14425](https://github.com/googleapis/google-cloud-java/issues/14425)) ([3cb9805](https://github.com/googleapis/google-cloud-java/commit/3cb980531c385a641a5b6c95b1c771e7a5fcc1e1))
* **gax:** include upload-status header in resumable upload command response objects ([#14420](https://github.com/googleapis/google-cloud-java/issues/14420)) ([23e49c1](https://github.com/googleapis/google-cloud-java/commit/23e49c181e6e2d331e4e3d3507ac127c33bb075a))
* **gax:** replace InputStream with InputStreamSupplier in resumable upload public surfaces ([#14521](https://github.com/googleapis/google-cloud-java/issues/14521)) ([3c79730](https://github.com/googleapis/google-cloud-java/commit/3c797300b9c165cc242746072b06180a59501af9))
* **gax:** retry chunk upload on transient errors ([#14422](https://github.com/googleapis/google-cloud-java/issues/14422)) ([e72365e](https://github.com/googleapis/google-cloud-java/commit/e72365ea11701876f6d6c3a257bf2b7fa229ea4f))
* **gax:** treat resumable upload server rejection as terminal ([#14516](https://github.com/googleapis/google-cloud-java/issues/14516)) ([b288788](https://github.com/googleapis/google-cloud-java/commit/b28878825df0a363d9a61e4bce0b3733144f64cb))
* **gax:** wire up ResumableUploadProgressTracker ([#14427](https://github.com/googleapis/google-cloud-java/issues/14427)) ([e7ba3e8](https://github.com/googleapis/google-cloud-java/commit/e7ba3e8e06aa7bdc4997b301132f57b996fa390c))
* **grpc-gcp:** Add shared fallback state and probing recovery options to GcpFallbackChannel ([#14013](https://github.com/googleapis/google-cloud-java/issues/14013)) ([675f639](https://github.com/googleapis/google-cloud-java/commit/675f639a99646f06f0f5ade145d2efe7495e4b97))
* **pubsub:** add publish start time to client telemetry header ([#14496](https://github.com/googleapis/google-cloud-java/issues/14496)) ([4b6a671](https://github.com/googleapis/google-cloud-java/commit/4b6a671193315a8af14ce1e827d82a7ae4ac31cb))


### Bug Fixes

* **auth:** exclude javax.annotation-api from api-common dependency ([#14538](https://github.com/googleapis/google-cloud-java/issues/14538)) ([668fd18](https://github.com/googleapis/google-cloud-java/commit/668fd184e6800022c6bf74414a6f3dda550f26fd)), refs [#12363](https://github.com/googleapis/google-cloud-java/issues/12363)
* **bigquery-jdbc:** abort session when connection is closed ([#14273](https://github.com/googleapis/google-cloud-java/issues/14273)) ([5bd4520](https://github.com/googleapis/google-cloud-java/commit/5bd45202ce46f66177e76d1bb5b48ad39b100522)), refs [#13922](https://github.com/googleapis/google-cloud-java/issues/13922)
* **storage:** add App Hub storage.googleapis.com prefix to destination.id ([#14527](https://github.com/googleapis/google-cloud-java/issues/14527)) ([0f6f9b5](https://github.com/googleapis/google-cloud-java/commit/0f6f9b519762ef629aef80d3528319f15922a1e6))


### Documentation

* Add gRPC Post-Quantum Cryptography Guide ([#14245](https://github.com/googleapis/google-cloud-java/issues/14245)) ([340a239](https://github.com/googleapis/google-cloud-java/commit/340a2391dd9871141f0b694cca0fe8cf06f663ec))
* **samples:** add zonal bucket pre-warmed writer pool sample ([#14517](https://github.com/googleapis/google-cloud-java/issues/14517)) ([32e6f87](https://github.com/googleapis/google-cloud-java/commit/32e6f87158d29b151ba500797a41086ba5e6118d))
* **samples:** pre-warm writer pool channels with flush() after open() ([#14537](https://github.com/googleapis/google-cloud-java/issues/14537)) ([df06290](https://github.com/googleapis/google-cloud-java/commit/df062901ee5fb5082f1cb4e29387a5b883760fe4))
* update PQC guide to follow standard template format ([#14333](https://github.com/googleapis/google-cloud-java/issues/14333)) ([0b969d5](https://github.com/googleapis/google-cloud-java/commit/0b969d50ef44cb53e8dce154c0ebb9e2cbddce06))

---

> **Source** [googleapis/google-cloud-java](https://github.com/googleapis/google-cloud-java) · `v1.93.0` · 2026-09-30 · [upstream release](https://github.com/googleapis/google-cloud-java/releases/tag/v1.93.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
