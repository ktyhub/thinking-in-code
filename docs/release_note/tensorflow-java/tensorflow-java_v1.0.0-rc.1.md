---
title: "tensorflow-java v1.0.0-rc.1"
project: "tensorflow-java"
repo: "tensorflow/java"
tag: "v1.0.0-rc.1"
published: "2024-04-12"
type: "pre"
lang: "en"
summary: "This is the first release candidate for TensorFlow Java 1.0.0, and includes a major refactoring of the source structure and the CI/CD pipelines (see https://github.com/tensorflow/java/pull/521)."
---

# tensorflow-java v1.0.0-rc.1

This is the first release candidate for TensorFlow Java 1.0.0, and includes a major refactoring of the source structure and the CI/CD pipelines (see https://github.com/tensorflow/java/pull/521). While most the API has not been impacted, there are some breaking changes that might require updating the code of your application if you've been using TensorFlow Java before, please see [these guidelines](https://github.com/tensorflow/java/blob/r1.0/MIGRATING.md#migrating-to-100) for more details.

Conformity to semantic versioning will start with the 1.0.0 release, as per [TensorFlow API stability guarantees](https://www.tensorflow.org/guide/versions).

## Major Changes

* Upgrade to TensorFlow 2.16.1
* Major refactoring of the build and CI/CD pipelines, to facilitate next TensorFlow upgrades 
    * Using official TensorFlow native builds in published TensorFlow Java artifacts
    * Publish macOS ARM64 binaries as one of the default platforms
    * Enable compatibility with existing TensorFlow plugins (e.g. `tensorflow-text`)
* Fix non-deterministic gradient descent during training

## All Changes
* Fixed the broken link in install.md by @tiruk007 in https://github.com/tensorflow/java/pull/491
* Update ci.yml to ubuntu-20.04 by @Craigacp in https://github.com/tensorflow/java/pull/503
* [linux-arm64] set "mkl_aarch64" bazel config for linux-arm64 platform by @snadampal in https://github.com/tensorflow/java/pull/502
* Update ci.yml by @Craigacp in https://github.com/tensorflow/java/pull/504
* Refactoring native builds and Java binding generation by @karllessard in https://github.com/tensorflow/java/pull/521
* Interface should be public for external usage by @nfeybesse in https://github.com/tensorflow/java/pull/522
* fix #526 by @nfeybesse in https://github.com/tensorflow/java/pull/527
* Upgrade to TF 2.16.1 by @karllessard in https://github.com/tensorflow/java/pull/531
* Adding casts to the if test so it passes on GPU by @Craigacp in https://github.com/tensorflow/java/pull/528
* Pom profile changes by @Craigacp in https://github.com/tensorflow/java/pull/525
* Fixing the native build so it can find the TSL headers by @Craigacp in https://github.com/tensorflow/java/pull/534
* Make all TF operations visible via the Ops API by @karllessard in https://github.com/tensorflow/java/pull/533

## New Contributors
* @tiruk007 made their first contribution in https://github.com/tensorflow/java/pull/491
* @snadampal made their first contribution in https://github.com/tensorflow/java/pull/502
* @nfeybesse made their first contribution in https://github.com/tensorflow/java/pull/522

**Full Changelog**: https://github.com/tensorflow/java/compare/v0.5.0...v1.0.0-rc.1

---

> **Source** [tensorflow/java](https://github.com/tensorflow/java) · `v1.0.0-rc.1` · 2024-04-12 · [upstream release](https://github.com/tensorflow/java/releases/tag/v1.0.0-rc.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
