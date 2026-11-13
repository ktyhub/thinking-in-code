---
title: "feign 13.16"
project: "feign"
repo: "OpenFeign/feign"
tag: "13.16"
published: "2026-10-05"
type: "minor"
lang: "en"
summary: "List of PRs that updated libraries versions"
---

# feign 13.16

## What's Changed
* Stop publishing feign-bom twice during release by @velo in https://github.com/OpenFeign/feign/pull/3568
* Allow retryable exceptions without a request by @taljeon in https://github.com/OpenFeign/feign/pull/3548
* Refactor Logger level checks and encapsulate Response.Builder fields by @saikat709 in https://github.com/OpenFeign/feign/pull/3553
* Report the latest supported source version from GraphqlSchemaProcessor by @velo in https://github.com/OpenFeign/feign/pull/3593
* Fixes OSGi exports for feign-form by @IT-Althusser in https://github.com/OpenFeign/feign/pull/3588
* Expand collection values inside path-style maps by @kalayciburak in https://github.com/OpenFeign/feign/pull/3587
* Skip null map values during expression expansion by @kdelay in https://github.com/OpenFeign/feign/pull/3597
* fix(form): correctly handle Map and POJO types by @EduardoRadieske in https://github.com/OpenFeign/feign/pull/3586
* Fix CodeQL ReDoS and XSS alerts by @velo in https://github.com/OpenFeign/feign/pull/3598
* Fix concurrency races in CancellableFuture and Options setMethodOptions by @saikat709 in https://github.com/OpenFeign/feign/pull/3552
* Add ability to make error as a value. by @ihsansfd in https://github.com/OpenFeign/feign/pull/3559
* Restore CodeQL scanning by @velo in https://github.com/OpenFeign/feign/pull/3599

---

<details>
<summary>List of PRs that updated libraries versions</summary>
<br />

* build(deps): Bump kotlin.version from 2.4.10 to 2.4.20 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3569
* build(deps): Bump netty.version from 4.2.17.Final to 4.2.18.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3570
* build(deps-dev): Bump vertx.version from 4.5.33 to 4.5.34 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3571
* build(deps-dev): Bump vertx.version from 5.1.7 to 5.1.8 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3572
* build(deps-dev): Bump org.codehaus.mojo:versions-maven-plugin from 2.21.0 to 2.22.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3573
* build(deps): Bump org.apache.maven.plugins:maven-deploy-plugin from 3.1.4 to 3.2.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3574
* build(deps-dev): Bump org.apache.maven.plugins:maven-install-plugin from 3.1.4 to 3.2.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3575
* build(deps): Bump com.github.jknack:handlebars from 4.5.4 to 4.5.5 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3576
* build(deps): Bump org.apache.felix:maven-bundle-plugin from 6.1.2 to 6.2.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3577
* build(deps-dev): Bump vertx.version from 5.1.8 to 5.2.0 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3579
* build(deps): Bump git-code-format-maven-plugin.version from 6.0 to 6.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3580
* build(deps-dev): Bump io.sundr:sundr-maven-plugin from 0.400.0 to 0.400.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3581
* build(deps): Bump jackson.version from 2.22.2 to 2.22.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3582
* build(deps): Bump tools.jackson:jackson-bom from 3.2.2 to 3.2.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3583
* build(deps-dev): Bump com.gradle:develocity-maven-extension from 2.5.0 to 2.6.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3592
* build(deps): Bump org.slf4j:slf4j-log4j12 from 2.0.19 to 2.0.20 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3589
* build(deps): Bump mockito.version from 5.23.0 to 5.24.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3590
* build(deps): Bump slf4j.version from 2.0.19 to 2.0.20 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3591
* build(deps-dev): Bump jersey.version from 4.0.2 to 4.0.3 in /jaxrs4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3594
* build(deps): Bump git-code-format-maven-plugin.version from 6.1 to 6.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3595
* build(deps): Bump com.google.guava:guava from 33.7.1-jre to 33.7.2-jre by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3596
</details>

## New Contributors
* @taljeon made their first contribution in https://github.com/OpenFeign/feign/pull/3548
* @saikat709 made their first contribution in https://github.com/OpenFeign/feign/pull/3553
* @IT-Althusser made their first contribution in https://github.com/OpenFeign/feign/pull/3588
* @kdelay made their first contribution in https://github.com/OpenFeign/feign/pull/3597
* @EduardoRadieske made their first contribution in https://github.com/OpenFeign/feign/pull/3586
* @ihsansfd made their first contribution in https://github.com/OpenFeign/feign/pull/3559

**Full Changelog**: https://github.com/OpenFeign/feign/compare/13.15...13.16

---

> **Source** [OpenFeign/feign](https://github.com/OpenFeign/feign) · `13.16` · 2026-10-05 · [upstream release](https://github.com/OpenFeign/feign/releases/tag/13.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
