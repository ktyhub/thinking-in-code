---
title: "tensorflow-java v1.0.0"
project: "tensorflow-java"
repo: "tensorflow/java"
tag: "v1.0.0"
published: "2024-12-06"
type: "major"
lang: "en"
summary: "Starting from this version, the project will follow the TensorFlow API stability guarantees."
---

# tensorflow-java v1.0.0

# TensorFlow Java 1.0.0 Release!

Starting from this version, the project will follow the [TensorFlow API stability guarantees](https://www.tensorflow.org/guide/versions).

While most the API has not been impacted, there are some breaking changes that might require updating the code of your application if you've been using TensorFlow Java before, please see [these guidelines](https://github.com/tensorflow/java/blob/r1.0/MIGRATING.md#migrating-to-100) for more details.


## Major Changes
* Support of Linux Arm64 systems by @snadampal in https://github.com/tensorflow/java/pull/545
* Upgrade to TF2.16.2 by @karllessard in https://github.com/tensorflow/java/pull/557
* Major refactoring of the build and CI/CD pipelines, to facilitate next TensorFlow upgrades 
    * Using official TensorFlow native builds in published TensorFlow Java artifacts
    * Publish macOS ARM64 binaries as one of the default platforms
    * Enable compatibility with existing TensorFlow plugins (e.g. `tensorflow-text`)
* Fix non-deterministic gradient descent during training

## Other Changes
* Graph is changed to public in Session.java by @manojava98 in https://github.com/tensorflow/java/pull/535
* Shape proto fix by @karllessard in https://github.com/tensorflow/java/pull/539
* Accept partially known shapes in boolean mask/updates by @karllessard in https://github.com/tensorflow/java/pull/541
* Various javadoc fixes by @Craigacp and @karllessard in https://github.com/tensorflow/java/pull/542, https://github.com/tensorflow/java/pull/555
* Add user instructions on how to use new module names by @karllessard in https://github.com/tensorflow/java/pull/554
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
* @manojava98 made their first contribution in https://github.com/tensorflow/java/pull/535
* @tiruk007 made their first contribution in https://github.com/tensorflow/java/pull/491
* @snadampal made their first contribution in https://github.com/tensorflow/java/pull/502
* @nfeybesse made their first contribution in https://github.com/tensorflow/java/pull/522

**Full Changelog**: https://github.com/tensorflow/java/compare/v0.5.0...v1.0.0

---

> **Source** [tensorflow/java](https://github.com/tensorflow/java) · `v1.0.0` · 2024-12-06 · [upstream release](https://github.com/tensorflow/java/releases/tag/v1.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
