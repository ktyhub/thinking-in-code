---
title: "feign 13.18"
project: "feign"
repo: "OpenFeign/feign"
tag: "13.18"
published: "2026-11-10"
type: "minor"
lang: "en"
summary: "List of PRs that updated libraries versions"
---

# feign 13.18

## What's Changed
* Add feign-jdk-json codec for the JDK Simple JSON API (JEP 540) and fix Dependabot auto-merge by @velo in https://github.com/OpenFeign/feign/pull/3620
* Exclude static fields from field query maps by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3613
* Treat runtime HeaderMap values as literals by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3612
* docs: fix typos in documentation by @hamidzr in https://github.com/OpenFeign/feign/pull/3659
* Reads response charset after other Content-Type parameters by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3628
* Read quoted and mixed-case charset parameters in FormEncoder by @kdelay in https://github.com/OpenFeign/feign/pull/3611
* Document that Logger reflects Feign's Request, not the wire request by @ChrisJr404 in https://github.com/OpenFeign/feign/pull/3544
* Apply @Param expanders on QueryMap POJO fields and getters by @havefunatcode in https://github.com/OpenFeign/feign/pull/3658
* Add opt-in target host and port observation tags by @henriquejsza in https://github.com/OpenFeign/feign/pull/3546
* feign-kotlin: add non-blocking WebClient AsyncClient and improve coroutine support by @ggoowlgns in https://github.com/OpenFeign/feign/pull/3645
* skip private and Vary: * responses in HttpCacheInterceptor by @alhudz in https://github.com/OpenFeign/feign/pull/3610
* Enforce Java 11 response body timeouts by @goutamadwant in https://github.com/OpenFeign/feign/pull/3462
* feign-mock: allow matching request headers by subset by @lxcxjxhx in https://github.com/OpenFeign/feign/pull/3661
* Fix URI fragment replacement and preserve target escapes by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3633
* Honors reserved-character flag for unescaped URI values by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3627
* Preserve Java11 response header value order and duplicates by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3638
* Preserve literal query values and expand array parameters by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3624
* Recognize HTTP URI schemes without regard to case by @wozhenbang2004 in https://github.com/OpenFeign/feign/pull/3665
* Honor zero connect and read timeouts in the Java11 client by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3637
* Restore Apache HTTP4 retries for bodyless idempotent requests by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3634
* Completes async client futures when the delegate throws Error by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3630
* Shares quote-aware charset parsing with form encoders by @hutiefang76 in https://github.com/OpenFeign/feign/pull/3674
* Reuse DefaultClient keep-alive connections when chunked bodies are not read to the end by @velo in https://github.com/OpenFeign/feign/pull/3673

---

<details>
<summary>List of PRs that updated libraries versions</summary>
<br />

* build(deps): Bump com.google.testing.compile:compile-testing from 0.23.0 to 0.24.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3621
* build(deps-dev): Bump org.codehaus.mojo:versions-maven-plugin from 2.22.0 to 2.23.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3622
* build(deps-dev): Bump org.sonatype.central:central-publishing-maven-plugin from 0.11.0 to 0.12.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3632
* build(deps-dev): Bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.26.3 to 0.26.5 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3639
* build(deps): Bump com.alibaba.fastjson2:fastjson2 from 2.0.65.android8 to 2.0.66.android8 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3640
* build(deps): Bump jackson.version from 2.22.3 to 2.22.4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3641
* build(deps): Bump com.fasterxml.jackson:jackson-bom from 2.22.3 to 2.22.4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3642
* build(deps): Bump tools.jackson:jackson-bom from 3.2.3 to 3.2.4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3643
* build(deps): Bump openjdk from `74a5c5b` to `5d242e8` in /.circleci/jdk28 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3644
* build(deps-dev): Bump com.gradle:develocity-maven-extension from 2.6.0 to 2.6.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3647
* build(deps): Bump reactor.version from 3.8.7 to 3.8.8 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3648
* build(deps-dev): Bump vertx.version from 5.2.0 to 5.2.2 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3654
* build(deps): Bump maven-surefire-plugin.version from 3.6.0 to 3.6.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3646
* build(deps): Bump micrometer.version from 1.17.1 to 1.17.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3653
* build(deps): Bump springboot.version from 4.1.1 to 4.1.2 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3649
* build(deps-dev): Bump org.springframework.cloud:spring-cloud-starter-openfeign from 5.0.3 to 5.0.4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3652
* build(deps): Bump com.squareup.okhttp3:okhttp-bom from 5.5.0 to 5.5.1 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3650
* build(deps): Bump spring.version from 7.0.9 to 7.0.10 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3651
* build(deps): Bump org.springframework.cloud:spring-cloud-dependencies from 2025.1.3 to 2025.1.4 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3655
* build(deps): Bump com.google.code.gson:gson from 2.14.0 to 2.15.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3656
* build(deps): Bump com.github.jknack:handlebars from 4.5.5 to 4.5.6 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3657
* build(deps): Bump com.github.jknack:handlebars from 4.5.6 to 4.5.7 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3660
* build(deps): Bump org.apache.maven.plugins:maven-enforcer-plugin from 3.6.3 to 3.7.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3662
* build(deps): Bump openjdk from `5d242e8` to `168e5cb` in /.circleci/jdk28 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3664
* build(deps): Bump com.github.jknack:handlebars from 4.5.7 to 4.5.8 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3663
* build(deps): Bump netty.version from 4.2.18.Final to 4.2.20.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3666
* build(deps): Bump openjdk from `168e5cb` to `c79e85f` in /.circleci/jdk28 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3668
* build(deps): Bump com.google.guava:guava from 33.7.2-jre to 33.8.0-jre by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3667
* build(deps-dev): Bump vertx.version from 5.2.2 to 5.2.3 in /vertx/feign-vertx5-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3670
* build(deps-dev): Bump vertx.version from 4.5.34 to 4.5.36 in /vertx/feign-vertx4-test by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3671
* build(deps): Bump commons-codec:commons-codec from 1.22.1 to 1.23.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3619
* build(deps): Bump org.apache.httpcomponents.client5:httpclient5 from 5.6.4 to 5.6.5 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3618
* build(deps): Bump kotlin.version from 2.4.20 to 2.4.21 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3614
* build(deps): Bump org.hibernate.validator:hibernate-validator from 6.2.5.Final to 6.2.6.Final by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3631
* build(deps-dev): Bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.26.5 to 0.27.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3669
* build(deps-dev): Bump org.codehaus.mojo:versions-maven-plugin from 2.23.0 to 2.24.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3675
* build(deps-dev): Bump org.codehaus.mojo:flatten-maven-plugin from 1.8.0 to 1.9.0 by @dependabot[bot] in https://github.com/OpenFeign/feign/pull/3676
</details>

## New Contributors
* @hamidzr made their first contribution in https://github.com/OpenFeign/feign/pull/3659
* @ChrisJr404 made their first contribution in https://github.com/OpenFeign/feign/pull/3544
* @havefunatcode made their first contribution in https://github.com/OpenFeign/feign/pull/3658
* @henriquejsza made their first contribution in https://github.com/OpenFeign/feign/pull/3546
* @ggoowlgns made their first contribution in https://github.com/OpenFeign/feign/pull/3645
* @goutamadwant made their first contribution in https://github.com/OpenFeign/feign/pull/3462
* @lxcxjxhx made their first contribution in https://github.com/OpenFeign/feign/pull/3661
* @wozhenbang2004 made their first contribution in https://github.com/OpenFeign/feign/pull/3665

**Full Changelog**: https://github.com/OpenFeign/feign/compare/13.17...13.18

---

> **Source** [OpenFeign/feign](https://github.com/OpenFeign/feign) · `13.18` · 2026-11-10 · [upstream release](https://github.com/OpenFeign/feign/releases/tag/13.18)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
