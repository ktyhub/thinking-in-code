---
title: "feign 13.15"
project: "feign"
repo: "OpenFeign/feign"
tag: "13.15"
published: "2026-09-09"
type: "minor"
lang: "en"
summary: "Port multi-encoder to master using predicates · Generate the flattened feign-bom POM under target · Add MultiDecoder to select a decoder per response · Apply review feedback to the multi-encoder and multi-decoder surface"
---

# feign 13.15

## What's Changed
* Port multi-encoder to master using predicates by @velo in https://github.com/OpenFeign/feign/pull/3527
* Generate the flattened feign-bom POM under target by @velo in https://github.com/OpenFeign/feign/pull/3531
* Add MultiDecoder to select a decoder per response by @velo in https://github.com/OpenFeign/feign/pull/3528
* Apply review feedback to the multi-encoder and multi-decoder surface by @velo in https://github.com/OpenFeign/feign/pull/3534
* Bump mvnd wrapper to 1.0.6 to fix broken 1.0.2 download URL by @velo in https://github.com/OpenFeign/feign/pull/3557
* Decode kotlin.Unit suspend return values to Unit.INSTANCE instead of null by @velo in https://github.com/OpenFeign/feign/pull/3558
* Encode Gson request bodies using the runtime class by @tanvir-ux in https://github.com/OpenFeign/feign/pull/3535

---

<details>
<summary>List of PRs that updated libraries versions</summary>
<br />

* build(deps): Bump jackson.version from 2.22.1 to 2.22.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3529
* build(deps): Bump com.squareup.okhttp3:okhttp-bom from 5.4.0 to 5.5.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3530
* build(deps): Bump reactor.version from 3.8.6 to 3.8.7 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3540
* build(deps): Bump micrometer.version from 1.17.0 to 1.17.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3541
* build(deps): Bump spring.version from 7.0.8 to 7.0.9 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3536
* build(deps): Bump springboot.version from 4.1.0 to 4.1.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3538
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.42.0 to 3.42.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3537
* build(deps): Bump org.springframework.cloud:spring-cloud-dependencies from 2025.1.2 to 2025.1.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3539
* build(deps-dev): Bump org.springframework.cloud:spring-cloud-starter-openfeign from 5.0.2 to 5.0.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3542
* build(deps): Bump license-maven-plugin.version from 5.1.1 to 5.1.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3543
* build(deps): Bump com.graphql-java:graphql-java from 26.0 to 26.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3545
* build(deps): Bump org.apache.maven.plugins:maven-compiler-plugin from 3.15.0 to 3.16.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3554
* build(deps): Bump org.apache.felix:maven-bundle-plugin from 6.1.0 to 6.1.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3555
* build(deps): Bump io.dropwizard.metrics5:metrics-core from 5.0.7 to 5.0.8 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3549
* build(deps-dev): Bump io.undertow:undertow-core from 2.4.2.Final to 2.4.3.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3547
* build(deps): Bump io.dropwizard.metrics:metrics-core from 4.2.39 to 4.2.40 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3550
* build(deps): Bump maven-surefire-plugin.version from 3.5.6 to 3.6.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3556
* build(deps-dev): Bump vertx.version from 5.1.6 to 5.1.7 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3564
* build(deps-dev): Bump vertx.version from 4.5.32 to 4.5.33 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3563
* build(deps): Bump com.alibaba.fastjson2:fastjson2 from 2.0.64.android8 to 2.0.65.android8 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3560
* build(deps-dev): Bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.26.1 to 0.26.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3562
* build(deps-dev): Bump io.sundr:sundr-maven-plugin from 0.300.0 to 0.400.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3561
* build(deps): Bump org.projectlombok:lombok from 1.18.46 to 1.18.48 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3565
* build(deps): Bump org.slf4j:slf4j-log4j12 from 2.0.18 to 2.0.19 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3567
* build(deps): Bump slf4j.version from 2.0.18 to 2.0.19 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3566
</details>

## New Contributors
* @tanvir-ux made their first contribution in https://github.com/OpenFeign/feign/pull/3535

**Full Changelog**: https://github.com/OpenFeign/feign/compare/13.14...13.15

---

> **Source** [OpenFeign/feign](https://github.com/OpenFeign/feign) · `13.15` · 2026-09-09 · [upstream release](https://github.com/OpenFeign/feign/releases/tag/13.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
