---
title: "tensorflow-java v1.2.0"
project: "tensorflow-java"
repo: "tensorflow/java"
tag: "v1.2.0"
published: "2026-07-24"
type: "minor"
lang: "en"
summary: "This release upgrades the native component to TensorFlow 2.21, merges tensorflow-ndarray back into this project, and adds small fixes to the gradient system. Due to a lack of available builds from upstream TensorFlow it…"
---

# tensorflow-java v1.2.0

## Changes

This release upgrades the native component to TensorFlow 2.21, merges [tensorflow-ndarray](https://github.com/tensorflow/java-ndarray) back into this project, and adds small fixes to the gradient system. Due to a lack of available builds from upstream TensorFlow it drops support for Windows x86.

Updated TensorFlow-Java documentation is now available at [tensorflow.github.io/java](https://tensorflow.github.io/java) which will be maintained with this project. The old documentation pages at [tensorflow.org/jvm](https://tensorflow.org/jvm) and [tensorflow.org/api_docs/java/org/tensorflow/package-summary](https://www.tensorflow.org/api_docs/java/org/tensorflow/package-summary) are no longer maintained, but we are unable to remove them at the moment.

## PR List
* add Gradle snippets to README.md by @winne42 in https://github.com/tensorflow/java/pull/613
* bump to version 1.1.0 in README.md Gradle examples by @winne42 in https://github.com/tensorflow/java/pull/616
* Fix typos in GPU migration instructs by @karllessard in https://github.com/tensorflow/java/pull/589
* Bump Windows image by @Craigacp in https://github.com/tensorflow/java/pull/619
* Small docs fixes by @Craigacp in https://github.com/tensorflow/java/pull/622
* Adding a link to tensorflow-java-ndarray's javadoc at javadoc generation time. by @Craigacp in https://github.com/tensorflow/java/pull/623
* Fix/docs nav by @karllessard in https://github.com/tensorflow/java/pull/624
* Upgrade GitHub Actions for Node 24 compatibility by @salmanmkc in https://github.com/tensorflow/java/pull/626
* Feature/add t bool test by @winne42 in https://github.com/tensorflow/java/pull/628
* docs: align API stability guarantees with 1.0.0 release (#597) by @sshekhar-04 in https://github.com/tensorflow/java/pull/629
* fix(generator): ensure variadic options in secondary factory methods (#615) by @sshekhar-04 in https://github.com/tensorflow/java/pull/630
* Bumps TF version to 2.20 by @Craigacp in https://github.com/tensorflow/java/pull/631
* Migrate ndarray by @karllessard in https://github.com/tensorflow/java/pull/636
* Custom/gradients dispatch by @nfeybesse in https://github.com/tensorflow/java/pull/632
* Publish snapshots to Maven Central by @karllessard in https://github.com/tensorflow/java/pull/639
* Rollback to deployment management by @karllessard in https://github.com/tensorflow/java/pull/640
* Rollback to deployment management fix by @karllessard in https://github.com/tensorflow/java/pull/641
* test(ops): add integration tests for unary math ops (Square, Abs) by @Rohan13253 in https://github.com/tensorflow/java/pull/642
* Upgrading to TF 2.21.0 by @Craigacp in https://github.com/tensorflow/java/pull/638
* Change repository names by @karllessard in https://github.com/tensorflow/java/pull/643
* Cache graph functions and add If gradient test by @nfeybesse in https://github.com/tensorflow/java/pull/637
* Update copyright section with documentation link by @Craigacp in https://github.com/tensorflow/java/pull/627
* Fix path in mkdocs by @Craigacp in https://github.com/tensorflow/java/pull/645
* Deploy native artifacts by @karllessard in https://github.com/tensorflow/java/pull/649

## New Contributors
* @winne42 made their first contribution in https://github.com/tensorflow/java/pull/613
* @salmanmkc made their first contribution in https://github.com/tensorflow/java/pull/626
* @sshekhar-04 made their first contribution in https://github.com/tensorflow/java/pull/629
* @Rohan13253 made their first contribution in https://github.com/tensorflow/java/pull/642

**Full Changelog**: https://github.com/tensorflow/java/compare/v1.1.0...v1.2.0

---

> **Source** [tensorflow/java](https://github.com/tensorflow/java) · `v1.2.0` · 2026-07-24 · [upstream release](https://github.com/tensorflow/java/releases/tag/v1.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
