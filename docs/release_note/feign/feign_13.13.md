---
title: "feign 13.13"
project: "feign"
repo: "OpenFeign/feign"
tag: "13.13"
published: "2026-06-13"
type: "minor"
lang: "en"
summary: "List of PRs that updated libraries versions"
---

# feign 13.13

## What's Changed
* Add MethodInterceptor extension point with feign-validation and feign-http-cache modules by @velo in https://github.com/OpenFeign/feign/pull/3346
* Fix Slf4jLogger and JavaLogger returning unbuffered response when logging disabled by @loadkrnis in https://github.com/OpenFeign/feign/pull/3172
* Add custom tags support to Metrics5Capability  Allows users to pass a… by @cexes in https://github.com/OpenFeign/feign/pull/3320
* Document metrics published by the micrometer module by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3370
* Forward dismiss404 from CoroutineFeign builder to AsyncFeign by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3371
* Only unwrap declared checked causes with UNWRAP by @young0264 in https://github.com/OpenFeign/feign/pull/3359
* Publish feign-bom as a real module so it auto-deploys to Central by @velo in https://github.com/OpenFeign/feign/pull/3384
* Fix flaky vertx http2NoConnectionLeak test by using h2c prior knowledge by @velo in https://github.com/OpenFeign/feign/pull/3385
* fix: prevent Content-Length smuggling, log format-string injection, and common-pool starvation by @velo in https://github.com/OpenFeign/feign/pull/3395
* [issue #2998] Expose uriTemplate in RequestTemplate by @Dainerx in https://github.com/OpenFeign/feign/pull/3393
* Open observation scope and stop on non-FeignException errors by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3407
* Avoid ClassLoader leak from static default async executor (#3178) by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3394
* Fix feign-core test compilation broken by removed Request.create overload by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3406
* revert: move Request.Body streaming breaking changes off master, they belong to 14.x by @velo in https://github.com/OpenFeign/feign/pull/3409
* guard numeric retry-after against long overflow by @alhudz in https://github.com/OpenFeign/feign/pull/3405
* [Issue 1487] Fix ErrorDecoder not invoked for Apache HttpClient checked exceptions by @gitshabh in https://github.com/OpenFeign/feign/pull/3338

---

<details>
<summary>List of PRs that updated libraries versions</summary>
<br />

* build(deps-dev): Bump org.springframework:spring-context from 7.0.6 to 7.0.7 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3316
* build(deps-dev): Bump io.sundr:sundr-maven-plugin from 0.240.1 to 0.300.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3317
* build(deps): Bump org.apache.httpcomponents.client5:httpclient5 from 5.6 to 5.6.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3318
* build(deps): Bump org.springframework:spring-web from 7.0.6 to 7.0.7 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3319
* build(deps): Bump org.projectlombok:lombok from 1.18.44 to 1.18.46 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3321
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.36.0 to 6.37.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3322
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.32.1 to 3.33.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3324
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.34.0 to 3.35.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3323
* build(deps): Bump com.gradle:common-custom-user-data-maven-extension from 2.1.0 to 2.2.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3326
* build(deps): Bump com.graphql-java:graphql-java from 25.0 to 26.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3325
* build(deps): Bump springboot.version from 4.0.5 to 4.0.6 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3327
* build(deps): Bump kotlin.version from 2.3.20 to 2.3.21 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3328
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.33.0 to 3.33.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3329
* build(deps): Bump com.google.code.gson:gson from 2.13.2 to 2.14.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3330
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.35.0 to 3.35.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3331
* build(deps): Bump commons-codec:commons-codec from 1.21.0 to 1.22.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3333
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.35.1 to 3.35.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3334
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.37.0 to 6.38.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3336
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.33.1 to 3.34.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3335
* build(deps): Bump jackson.version from 2.21.2 to 2.21.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3337
* build(deps): Bump tools.jackson:jackson-bom from 3.1.2 to 3.1.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3339
* build(deps): Bump netty.version from 4.2.12.Final to 4.2.13.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3340
* build(deps-dev): Bump vertx.version from 5.0.11 to 5.0.12 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3343
* build(deps-dev): Bump vertx.version from 4.5.26 to 4.5.27 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3344
* build(deps): Bump com.github.jknack:handlebars from 4.5.0 to 4.5.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3342
* build(deps-dev): Bump io.undertow:undertow-core from 2.3.24.Final to 2.4.0.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3341
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.38.0 to 6.39.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3345
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.34.0 to 3.34.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3347
* build(deps-dev): Bump org.glassfish.expressly:expressly from 5.0.0 to 6.0.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3350
* build(deps): Bump jakarta.validation:jakarta.validation-api from 3.0.2 to 3.1.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3352
* build(deps-dev): Bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.25.6 to 0.25.7 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3349
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.35.2 to 3.35.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3351
* build(deps): Bump kotlinx.coroutines.version from 1.10.2 to 1.11.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3354
* build(deps): Bump org.slf4j:slf4j-log4j12 from 2.0.16 to 2.0.17 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3356
* build(deps): Bump org.slf4j:slf4j-log4j12 from 2.0.17 to 2.0.18 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3358
* build(deps): Bump slf4j.version from 2.0.17 to 2.0.18 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3357
* build(deps): Bump org.apache.maven.plugins:maven-enforcer-plugin from 3.6.2 to 3.6.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3361
* build(deps-dev): Bump io.undertow:undertow-core from 2.4.0.Final to 2.4.1.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3362
* build(deps): Bump org.junit:junit-bom from 6.0.3 to 6.1.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3363
* build(deps): Bump netty.version from 4.2.13.Final to 4.2.14.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3364
* build(deps-dev): Bump com.gradle:develocity-maven-extension from 2.4.0 to 2.4.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3365
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.39.0 to 6.40.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3366
* build(deps-dev): Bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.25.7 to 0.26.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3369
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.35.3 to 3.36.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3368
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.34.1 to 3.35.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3367
* build(deps): Bump org.json:json from 20251224 to 20260522 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3372
* build(deps): Bump io.dropwizard.metrics:metrics-core from 4.2.38 to 4.2.39 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3374
* build(deps): Bump io.dropwizard.metrics5:metrics-core from 5.0.6 to 5.0.7 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3373
* build(deps-dev): Bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.26.0 to 0.26.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3376
* build(deps): Bump maven-surefire-plugin.version from 3.5.5 to 3.5.6 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3377
* build(deps-dev): Bump vertx.version from 5.0.12 to 5.1.0 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3375
* build(deps): Bump netty.version from 4.2.14.Final to 4.2.15.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3386
* build(deps-dev): Bump vertx.version from 5.1.0 to 5.1.1 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3387
* build(deps-dev): Bump vertx.version from 4.5.27 to 4.5.28 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3388
* build(deps): Bump kotlin.version from 2.3.21 to 2.4.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3389
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.35.0 to 3.36.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3390
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.40.0 to 6.41.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3391
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.36.0 to 3.37.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3392
* build(deps-dev): Bump jersey.version from 3.1.11 to 3.1.12 in /jaxrs3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3412
* build(deps): Bump org.springframework.cloud:spring-cloud-dependencies from 2025.1.1 to 2025.1.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3410
* build(deps-dev): Bump org.springframework.cloud:spring-cloud-starter-openfeign from 5.0.1 to 5.0.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3411
* build(deps): Bump jackson.version from 2.21.3 to 2.22.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3380
* build(deps): Bump org.hibernate.validator:hibernate-validator from 6.2.5.Final to 9.1.0.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3348
* build(deps-dev): Bump vertx.version from 5.1.1 to 5.1.2 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3403
* build(deps): Bump micrometer.version from 1.16.5 to 1.17.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3400
* build(deps): Bump tools.jackson:jackson-bom from 3.1.3 to 3.2.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3398
* build(deps): Bump com.squareup.okhttp3:okhttp-bom from 5.3.2 to 5.4.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3399
* build(deps): Bump reactor.version from 3.8.5 to 3.8.6 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3401
* build(deps): consolidate spring-web/spring-context into single spring.version 7.0.8 by @velo in https://github.com/OpenFeign/feign/pull/3413
</details>

## New Contributors
* @loadkrnis made their first contribution in https://github.com/OpenFeign/feign/pull/3172
* @cexes made their first contribution in https://github.com/OpenFeign/feign/pull/3320
* @seonwooj0810 made their first contribution in https://github.com/OpenFeign/feign/pull/3370
* @young0264 made their first contribution in https://github.com/OpenFeign/feign/pull/3359
* @Dainerx made their first contribution in https://github.com/OpenFeign/feign/pull/3393
* @alhudz made their first contribution in https://github.com/OpenFeign/feign/pull/3405
* @gitshabh made their first contribution in https://github.com/OpenFeign/feign/pull/3338

**Full Changelog**: https://github.com/OpenFeign/feign/compare/13.12...13.13

---

> **Source** [OpenFeign/feign](https://github.com/OpenFeign/feign) · `13.13` · 2026-06-13 · [upstream release](https://github.com/OpenFeign/feign/releases/tag/13.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
