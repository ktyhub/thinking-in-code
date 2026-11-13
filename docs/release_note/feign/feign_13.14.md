---
title: "feign 13.14"
project: "feign"
repo: "OpenFeign/feign"
tag: "13.14"
published: "2026-08-19"
type: "minor"
lang: "en"
summary: "List of PRs that updated libraries versions"
---

# feign 13.14

## What's Changed
* Honor jdk.httpclient.allowRestrictedHeaders in Http2Client (#2975) by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3419
* escape crlf and quotes in multipart Content-Disposition headers by @alhudz in https://github.com/OpenFeign/feign/pull/3417
* fall back to utf-8 for invalid content-type charset by @alhudz in https://github.com/OpenFeign/feign/pull/3427
* Make Expressions max length configurable (fixes #2916) by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3422
* Preserve delegate content type for multipart parameters by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3382
* cap Content-Length before narrowing to int in Http2Client by @alhudz in https://github.com/OpenFeign/feign/pull/3431
* generate multipart boundary from SecureRandom by @alhudz in https://github.com/OpenFeign/feign/pull/3429
* strip crlf from multipart Content-Type header by @alhudz in https://github.com/OpenFeign/feign/pull/3432
* Return response body in FeignException from errorReading (#2618) by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3415
* treat invalid expression value modifier as a literal by @alhudz in https://github.com/OpenFeign/feign/pull/3437
* encode collection values in urlencoded form bodies by @alhudz in https://github.com/OpenFeign/feign/pull/3436
* encode soap request body with the configured charset by @alhudz in https://github.com/OpenFeign/feign/pull/3433
* cap negative Content-Length in GoogleHttpClient and DefaultClient by @renechoi in https://github.com/OpenFeign/feign/pull/3492
* Avoid converting empty GET bodies to POST by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3463
* Support deflate request encoding in HC5 by @kmdy7991 in https://github.com/OpenFeign/feign/pull/3464
* Close JavaLogger file handlers by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3468
* honour response charset in StringDecoder by @alhudz in https://github.com/OpenFeign/feign/pull/3453
* honour response charset in gson and jackson iterator decoders by @alhudz in https://github.com/OpenFeign/feign/pull/3447
* Let capabilities supply response interceptors by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3446
* strip crlf from resolved header template values by @alhudz in https://github.com/OpenFeign/feign/pull/3444
* encode string request body with utf-8 not the platform default by @alhudz in https://github.com/OpenFeign/feign/pull/3442
* honour requested charset in okhttp response body reader by @alhudz in https://github.com/OpenFeign/feign/pull/3441
* Fix duplicate Content-Length handling in DefaultClient by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3448
* Add HTTP QUERY method support (RFC 10008) by @kumarprabhashanand in https://github.com/OpenFeign/feign/pull/3454
* clear response body length after gzip/deflate decode by @alhudz in https://github.com/OpenFeign/feign/pull/3445
* Fix fluent methods on cloned builders by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3449
* Add GraphQL subscription support over graphql-transport-ws by @velo in https://github.com/OpenFeign/feign/pull/3512
* Avoid default Content-Type on POST/PUT/PATCH with empty body by @seonwooj0810 in https://github.com/OpenFeign/feign/pull/3507
* Flatten feign-bom so imports do not override consumer dependency management by @kalayciburak in https://github.com/OpenFeign/feign/pull/3508
* Decode every root field of a GraphQL operation by @velo in https://github.com/OpenFeign/feign/pull/3526
* avoid duplicate Content-Length header in DefaultClient by @alhudz in https://github.com/OpenFeign/feign/pull/3451
* Apply JAXB factory properties when creating unmarshallers by @arimu1 in https://github.com/OpenFeign/feign/pull/3519
* Skip bridge methods in contract parsing and map them for dispatch by @AzazelSensei in https://github.com/OpenFeign/feign/pull/3517

---

<details>
<summary>List of PRs that updated libraries versions</summary>
<br />

* build(deps): Bump springboot.version from 4.0.6 to 4.1.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3408
* build(deps-dev): Bump org.sonatype.central:central-publishing-maven-plugin from 0.10.0 to 0.11.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3420
* build(deps): Bump com.github.jknack:handlebars from 4.5.1 to 4.5.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3421
* build(deps): Bump org.hibernate.validator:hibernate-validator from 6.2.5.Final to 9.1.0.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3416
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.37.0 to 3.38.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3423
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.36.0 to 3.37.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3426
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.41.0 to 6.42.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3424
* build(deps): Bump org.hibernate.validator:hibernate-validator from 6.2.5.Final to 9.1.0.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3425
* build(deps): Bump org.hibernate.validator:hibernate-validator from 6.2.5.Final to 9.1.0.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3428
* build(deps-dev): Bump com.gradle:develocity-maven-extension from 2.4.1 to 2.4.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3434
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.38.0 to 3.40.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3435
* build(deps-dev): Bump vertx.version from 5.1.2 to 5.1.3 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3438
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.37.0 to 3.38.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3439
* build(deps-dev): Bump io.undertow:undertow-core from 2.4.1.Final to 2.4.2.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3452
* build(deps): Bump org.junit:junit-bom from 6.1.0 to 6.1.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3455
* build(deps): Bump com.gradle:common-custom-user-data-maven-extension from 2.2.0 to 2.3.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3457
* build(deps): Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.1 to 5.6.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3456
* build(deps): Bump com.google.http-client:google-http-client from 2.1.0 to 2.1.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3458
* build(deps-dev): Bump com.gradle:develocity-maven-extension from 2.4.2 to 2.5.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3461
* build(deps): Bump com.github.jknack:handlebars from 4.5.2 to 4.5.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3460
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.38.0 to 3.39.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3465
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.42.0 to 6.43.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3467
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.40.0 to 3.41.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3466
* build(deps): Bump netty.version from 4.2.15.Final to 4.2.16.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3470
* build(deps-dev): Bump vertx.version from 5.1.3 to 5.1.4 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3472
* build(deps): Bump jackson.version from 2.22.0 to 2.22.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3471
* build(deps-dev): Bump vertx.version from 4.5.28 to 4.5.29 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3473
* build(deps): Bump tools.jackson:jackson-bom from 3.2.0 to 3.2.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3474
* build(deps): Bump org.junit:junit-bom from 6.1.1 to 6.1.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3475
* build(deps-dev): Bump vertx.version from 5.1.4 to 5.1.5 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3478
* build(deps-dev): Bump vertx.version from 4.5.29 to 4.5.30 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3477
* build(deps): Bump kotlin.version from 2.4.0 to 2.4.10 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3479
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.43.0 to 6.44.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3480
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.39.0 to 3.40.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3481
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.41.0 to 3.42.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3482
* build(deps): Bump org.json:json from 20260522 to 20260719 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3484
* build(deps-dev): Bump vertx.version from 4.5.30 to 4.5.31 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3487
* build(deps): Bump com.google.http-client:google-http-client from 2.1.1 to 2.2.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3486
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.42.0 to 3.42.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3488
* build(deps): Bump license-maven-plugin.version from 5.0.0 to 5.1.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3489
* build(deps): Bump org.apache.maven.plugins:maven-jar-plugin from 3.5.0 to 3.5.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3490
* build(deps-dev): Bump org.apache.maven.plugins:maven-toolchains-plugin from 3.2.0 to 3.3.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3491
* build(deps): Bump com.alibaba.fastjson2:fastjson2 from 2.0.61.android8 to 2.0.63.android8 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3495
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.40.0 to 3.41.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3496
* build(deps): Bump com.github.jknack:handlebars from 4.5.3 to 4.5.4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3497
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.44.0 to 6.45.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3498
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.42.1 to 3.43.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3499
* build(deps): Bump commons-codec:commons-codec from 1.22.0 to 1.22.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3500
* build(deps): Bump org.apache.felix:maven-bundle-plugin from 6.0.2 to 6.1.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3501
* build(deps): Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.2 to 5.6.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3502
* build(deps): Bump com.gradle:common-custom-user-data-maven-extension from 2.3.0 to 2.4.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3504
* build(deps): Bump com.alibaba.fastjson2:fastjson2 from 2.0.63.android8 to 2.0.64.android8 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3506
* build(deps): Bump netty.version from 4.2.16.Final to 4.2.17.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3510
* build(deps-dev): Bump vertx.version from 5.1.5 to 5.1.6 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3511
* build(deps): Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.3 to 5.6.4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3509
* build(deps-dev): Bump vertx.version from 4.5.31 to 4.5.32 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3514
* build(deps): Bump org.junit:junit-bom from 6.1.2 to 6.1.3 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3513
* build(deps-dev): Bump org.codehaus.mojo:flatten-maven-plugin from 1.7.3 to 1.8.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3515
* build(deps): Bump org.openrewrite.recipe:rewrite-testing-frameworks from 3.43.0 to 3.44.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3518
* build(deps-dev): Bump org.openrewrite.maven:rewrite-maven-plugin from 6.45.0 to 6.46.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3520
* build(deps): Bump org.openrewrite.recipe:rewrite-migrate-java from 3.41.0 to 3.42.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3521
* build(deps): Bump org.json:json from 20260719 to 20260814 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3522
* build(deps): Bump tools.jackson:jackson-bom from 3.2.1 to 3.2.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3523
* build(deps): Bump com.google.guava:guava from 33.6.0-jre to 33.7.1-jre by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3524
</details>

## New Contributors
* @renechoi made their first contribution in https://github.com/OpenFeign/feign/pull/3492
* @hutiefang76 made their first contribution in https://github.com/OpenFeign/feign/pull/3463
* @kmdy7991 made their first contribution in https://github.com/OpenFeign/feign/pull/3464
* @kumarprabhashanand made their first contribution in https://github.com/OpenFeign/feign/pull/3454
* @kalayciburak made their first contribution in https://github.com/OpenFeign/feign/pull/3508
* @AzazelSensei made their first contribution in https://github.com/OpenFeign/feign/pull/3517

**Full Changelog**: https://github.com/OpenFeign/feign/compare/13.13...13.14

---

> **Source** [OpenFeign/feign](https://github.com/OpenFeign/feign) · `13.14` · 2026-08-19 · [upstream release](https://github.com/OpenFeign/feign/releases/tag/13.14)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
