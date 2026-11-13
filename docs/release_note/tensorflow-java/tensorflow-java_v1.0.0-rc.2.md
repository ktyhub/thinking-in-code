---
title: "tensorflow-java v1.0.0-rc.2"
project: "tensorflow-java"
repo: "tensorflow/java"
tag: "v1.0.0-rc.2"
published: "2024-09-25"
type: "pre"
lang: "en"
summary: "This is the second release candidate for TensorFlow Java 1.0.0, with added support for Linux Arm64 systems, improved in-code documentation (JavaDoc) and other minor fixes."
---

# tensorflow-java v1.0.0-rc.2

This is the second release candidate for TensorFlow Java 1.0.0, with added support for Linux Arm64 systems, improved in-code documentation (JavaDoc) and other minor fixes.

Conformity to semantic versioning will start with the 1.0.0 release, as per [TensorFlow API stability guarantees](https://www.tensorflow.org/guide/versions).

# Major Changes
* Support of Linux Arm64 systems by @snadampal in https://github.com/tensorflow/java/pull/545
* Upgrade to TF2.16.2 by @karllessard in https://github.com/tensorflow/java/pull/557

## Other Changes
* Graph is changed to public in Session.java by @manojava98 in https://github.com/tensorflow/java/pull/535
* Shape proto fix by @karllessard in https://github.com/tensorflow/java/pull/539
* Accept partially known shapes in boolean mask/updates by @karllessard in https://github.com/tensorflow/java/pull/541
* Various javadoc fixes by @Craigacp and @karllessard in https://github.com/tensorflow/java/pull/542, https://github.com/tensorflow/java/pull/555
* Add user instructions on how to use new module names by @karllessard in https://github.com/tensorflow/java/pull/554

## New Contributors
* @manojava98 made their first contribution in https://github.com/tensorflow/java/pull/535
* @snadampal made their first contribution in https://github.com/tensorflow/java/pull/545

**Full Changelog**: https://github.com/tensorflow/java/compare/v1.0.0-rc.1...v1.0.0-rc.2

---

> **Source** [tensorflow/java](https://github.com/tensorflow/java) · `v1.0.0-rc.2` · 2024-09-25 · [upstream release](https://github.com/tensorflow/java/releases/tag/v1.0.0-rc.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
