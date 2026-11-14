---
title: "dubbo-spi-extensions v3.3.1"
project: "dubbo-spi-extensions"
repo: "apache/dubbo-spi-extensions"
tag: "v3.3.1"
published: "2024-11-14"
type: "patch"
lang: "en"
summary: "Compatible with Apache Dubbo 3.3.x"
---

# dubbo-spi-extensions v3.3.1

## What's Changed

## Reference

- Compatible with Apache Dubbo [3.3.x](https://github.com/apache/dubbo/tree/3.3) 

## Enhancement
* remove useless junit by @wcy666103 in https://github.com/apache/dubbo-spi-extensions/pull/396
* upgrade doc version by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/544
* 3.3.1 (#566) by @songxiaosheng in https://github.com/apache/dubbo-spi-extensions/pull/567
* optimize: the handling logic of PathAndInvokerMapper by @funky-eyes in https://github.com/apache/dubbo-spi-extensions/pull/473
* optimize: rest protocol connection default keepalive by @funky-eyes in https://github.com/apache/dubbo-spi-extensions/pull/472
* support apache seata 2.1.0 by @funky-eyes in https://github.com/apache/dubbo-spi-extensions/pull/509

## Bugfix
* fix:npe by @qyi71 in https://github.com/apache/dubbo-spi-extensions/pull/400
* fix lose seata xid when happens injvm invoke by @laywin in https://github.com/apache/dubbo-spi-extensions/pull/461
* Fix fury bug by @heliang666s in https://github.com/apache/dubbo-spi-extensions/pull/476


## Dependency Upgrade
* Bump org.xolstice.maven.plugins:protobuf-maven-plugin from 0.5.1 to 0.6.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/361
* Bump com.github.codemonstur:embedded-redis from 0.10.0 to 0.13.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/362
* Bump org.apache.maven.plugins:maven-shade-plugin from 3.2.4 to 3.5.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/356
* Bump de.ruedigermoeller:fst from 2.48-jdk-6 to 2.57 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/351
* Bump com.esotericsoftware:kryo from 5.4.0 to 5.6.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/358
* Bump commons-net:commons-net from 3.9.0 to 3.10.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/354
* Bump org.apache.maven.plugins:maven-surefire-plugin from 2.7.1 to 2.22.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/349
* Bump dubbo.version from 3.2.11 to 3.2.12 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/350
* Bump org.apache.maven.plugins:maven-dependency-plugin from 3.1.2 to 3.6.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/348
* Bump byte-buddy.version from 1.14.5 to 1.14.16 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/375
* Bump eureka.version from 1.9.12 to 1.10.18 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/374
* Bump spring.version from 5.2.9.RELEASE to 5.3.36 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/372
* Bump fabric8_kubernetes_version from 6.12.0 to 6.12.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/373
* Bump org.furyio:fury-core from 0.2.0 to 0.4.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/371
* Bump msgpack_version from 0.8.22 to 0.9.8 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/370
* Bump junit_jupiter_version from 5.9.3 to 5.10.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/368
* Bump org.mockito:mockito-all from 1.9.5 to 1.10.19 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/365
* Bump org.apache.httpcomponents:httpclient from 4.5.13 to 4.5.14 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/360
* Bump com.googlecode.xmemcached:xmemcached from 1.3.6 to 1.4.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/363
* Bump jackson_version from 2.15.3 to 2.17.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/369
* Bump org.apache.maven.plugins:maven-source-plugin from 3.2.1 to 3.3.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/366
* Bump org.slf4j:slf4j-api from 1.7.25 to 1.7.36 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/357
* Bump grpc.version from 1.63.0 to 1.64.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/355
* upgrade maven version by @wcy666103 in https://github.com/apache/dubbo-spi-extensions/pull/379
* Bump com.orbitz.consul:consul by @wcy666103 in https://github.com/apache/dubbo-spi-extensions/pull/378
* Bump org.apache.maven.plugins:maven-release-plugin from 3.0.0-M1 to 3.0.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/394
* Bump org.apache.rat:apache-rat-plugin from 0.13 to 0.16.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/393
* Bump org.apache.maven.plugins:maven-compiler-plugin from 3.8.1 to 3.13.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/392
* Bump javax.ws.rs:javax.ws.rs-api from 2.0 to 2.1.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/389
* Bump org.apache.maven.plugins:maven-javadoc-plugin from 3.2.0 to 3.7.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/388
* Bump io.seata:seata-core from 1.5.2 to 1.8.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/385
* Bump org.junit.platform:junit-platform-commons from 1.9.3 to 1.10.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/387
* Bump org.apache.maven.plugins:maven-jxr-plugin from 2.2 to 2.5 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/382
* Bump org.apache.maven.plugins:maven-enforcer-plugin from 3.0.0-M3 to 3.5.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/390
* Bump org.jacoco:jacoco-maven-plugin from 0.8.6 to 0.8.12 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/381
* Bump ch.qos.logback:logback-classic from 1.3.12 to 1.5.6 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/413
* Bump fabric8_kubernetes_version from 6.12.1 to 6.13.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/412
* Bump org.assertj:assertj-core from 3.13.2 to 3.26.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/411
* Bump kr.motd.maven:os-maven-plugin from 1.6.1 to 1.7.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/410
* Bump org.apache.maven.plugins:maven-shade-plugin from 3.5.3 to 3.6.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/409
* Bump dubbo.version from 3.2.12 to 3.2.13 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/408
* Bump io.netty:netty-all from 4.1.66.Final to 4.1.110.Final by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/407
* Bump cglib:cglib-nodep from 2.2 to 2.2.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/406
* Bump com.google.code.gson:gson from 2.10.1 to 2.11.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/405
* Bump com.caucho:hessian from 4.0.51 to 4.0.66 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/404
* Bump commons-net:commons-net from 3.10.0 to 3.11.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/403
* Bump org.apache.maven.plugins:maven-checkstyle-plugin from 3.0.0 to 3.4.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/401
* Bump byte-buddy.version from 1.14.16 to 1.14.17 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/402
* Bump org.apache.maven.plugins:maven-jar-plugin from 3.2.0 to 3.4.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/352
* Bump spring.version from 5.3.36 to 5.3.37 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/428
* Bump io.github.kawamuray.wasmtime:wasmtime-java from 0.18.0 to 0.19.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/429
* Bump com.ecwid.consul:consul-api from 1.4.2 to 1.4.5 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/425
* Bump org.apache.maven.plugins:maven-release-plugin from 3.0.1 to 3.1.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/424
* Bump commons-net:commons-net from 3.11.0 to 3.11.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/426
* Bump junit:junit from 4.13.1 to 4.13.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/422
* Bump io.netty:netty-all from 4.1.110.Final to 4.1.111.Final by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/420
* Bump org.apache.maven.plugins:maven-dependency-plugin from 3.6.1 to 3.7.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/419
* Bump dubbo.version from 3.2.13 to 3.2.14 by @wcy666103 in https://github.com/apache/dubbo-spi-extensions/pull/434
* Bump org.apache.maven.plugins:maven-clean-plugin from 3.3.2 to 3.4.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/433
* Bump org.apache.maven.plugins:maven-dependency-plugin from 3.7.0 to 3.7.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/432
* Bump org.apache.maven.plugins:maven-jar-plugin from 3.4.1 to 3.4.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/431
* Bump junit_jupiter_version from 5.10.2 to 5.10.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/437
* Bump grpc.version from 1.64.0 to 1.65.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/435
* Bump org.junit.platform:junit-platform-commons from 1.10.2 to 1.10.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/436
* Bump jackson_version from 2.17.1 to 2.17.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/442
* Bump byte-buddy.version from 1.14.17 to 1.14.18 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/450
* Bump grpc.version from 1.65.0 to 1.65.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/449
* Bump org.apache.maven.plugins:maven-release-plugin from 3.1.0 to 3.1.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/448
* Bump org.assertj:assertj-core from 3.26.0 to 3.26.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/447
* Bump fabric8_kubernetes_version from 6.13.0 to 6.13.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/441
* Bump org.apache.maven.plugins:maven-javadoc-plugin from 3.7.0 to 3.8.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/456
* Bump io.netty:netty-all from 4.1.111.Final to 4.1.112.Final by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/455
* Bump org.testcontainers:testcontainers from 1.19.8 to 1.20.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/454
* Bump org.apache.commons:commons-lang3 from 3.14.0 to 3.15.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/452
* Bump protobuf-java_version from 3.16.3 to 3.25.4 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/459
* update apache-fury version to improve performance by @heliang666s in https://github.com/apache/dubbo-spi-extensions/pull/460
* Bump org.testcontainers:testcontainers from 1.20.0 to 1.20.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/462
* Bump fabric8_kubernetes_version from 6.12.0 to 6.13.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/475
* Bump org.apache.commons:commons-lang3 from 3.15.0 to 3.16.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/464
* Bump grpc.version from 1.65.1 to 1.66.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/465
* Bump org.awaitility:awaitility from 4.2.1 to 4.2.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/468
* Bump com.ecwid.consul:consul-api from 1.4.2 to 1.4.5 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/488
* Bump org.apache.httpcomponents:httpclient from 4.5.13 to 4.5.14 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/487
* Bump com.github.codemonstur:embedded-redis from 0.10.0 to 0.13.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/484
* Bump org.furyio:fury-core from 0.2.0 to 0.4.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/483
* Bump junit_jupiter_version from 5.10.3 to 5.11.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/482
* Bump msgpack_version from 0.8.22 to 0.9.8 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/485
* Bump spring.version from 5.2.9.RELEASE to 5.3.39 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/481
* Bump jackson_version from 2.15.3 to 2.17.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/480
* Bump com.esotericsoftware:kryo from 5.4.0 to 5.6.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/479
* Update readme by @aofall in https://github.com/apache/dubbo-spi-extensions/pull/478
* Bump com.caucho:hessian from 4.0.51 to 4.0.66 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/486
* Bump javax.ws.rs:javax.ws.rs-api from 2.0 to 2.1.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/498
* Bump eureka.version from 1.9.12 to 1.10.18 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/497
* Bump com.google.code.gson:gson from 2.10.1 to 2.11.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/496
* Bump byte-buddy.version from 1.14.5 to 1.15.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/495
* Bump com.googlecode.xmemcached:xmemcached from 1.3.6 to 1.4.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/494
* Bump ch.qos.logback:logback-classic from 1.3.12 to 1.5.7 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/493
* Bump protobuf-java_version from 3.16.3 to 3.25.4 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/492
* Bump io.seata:seata-core from 1.5.2 to 1.8.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/491
* Bump de.ruedigermoeller:fst from 2.48-jdk-6 to 2.57 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/490
* Bump org.slf4j:slf4j-api from 1.7.25 to 1.7.36 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/489
* Bump ch.qos.logback:logback-classic from 1.5.7 to 1.5.8 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/512
* Bump io.netty:netty-all from 4.1.66.Final to 4.1.113.Final by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/511
* Bump org.yaml:snakeyaml from 2.2 to 2.3 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/508
* Bump org.apache.maven.plugins:maven-javadoc-plugin from 3.8.0 to 3.10.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/507
* Bump org.apache.commons:commons-lang3 from 3.16.0 to 3.17.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/506
* Bump byte-buddy.version from 1.15.0 to 1.15.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/504
* Bump org.junit.platform:junit-platform-commons from 1.10.3 to 1.11.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/503
* Bump com.google.protobuf:protobuf-java from 3.16.3 to 3.25.5 in /dubbo-mock-extensions by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/513
* Bump commons-net:commons-net from 3.9.0 to 3.11.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/505
* Bump org.springframework.boot:spring-boot-maven-plugin from 2.3.4.RELEASE to 2.7.18 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/518
* Bump org.apache.fury:fury-core from 0.7.0 to 0.7.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/517
* Bump protobuf-java_version from 3.25.4 to 3.25.5 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/515
* Bump grpc.version from 1.66.0 to 1.68.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/514
* Bump org.apache.maven.plugins:maven-checkstyle-plugin from 3.4.0 to 3.5.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/500
* Bump org.apache.maven.plugins:maven-dependency-plugin from 3.7.1 to 3.8.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/499
* Bump org.apache.avro:avro from 1.11.3 to 1.11.4 in /dubbo-extensions-dependencies-bom by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/533
* Bump org.junit.platform:junit-platform-commons from 1.11.0 to 1.11.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/532
* Bump io.netty:netty-all from 4.1.113.Final to 4.1.114.Final by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/528
* Bump org.apache.maven.plugins:maven-javadoc-plugin from 3.10.0 to 3.10.1 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/527
* Bump org.apache.seata:seata-core from 2.1.0 to 2.2.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/537
* Bump com.esotericsoftware:kryo from 5.6.0 to 5.6.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/536
* Bump byte-buddy.version from 1.15.1 to 1.15.4 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/535
* Resolved conflicts between 3.3 and master by @heliang666s in https://github.com/apache/dubbo-spi-extensions/pull/538
* Bump ch.qos.logback:logback-classic from 1.5.8 to 1.5.10 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/534
* Bump junit_jupiter_version from 5.11.0 to 5.11.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/530
* Bump org.testcontainers:testcontainers from 1.20.1 to 1.20.2 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/529
* Bump fabric8_kubernetes_version from 6.13.3 to 6.13.4 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/524
* Bump com.alibaba:fastjson from 1.2.83 to 1.2.83_noneautotype by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/526
* Bump jackson_version from 2.17.2 to 2.18.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/522
* Bump com.google.protobuf:protobuf-java from 3.25.4 to 3.25.5 in /dubbo-extensions-dependencies-bom by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/519
* Bump ch.qos.logback:logback-classic from 1.5.10 to 1.5.11 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/543
* Bump redis.clients:jedis from 5.1.0 to 5.2.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/541
* Bump byte-buddy.version from 1.15.4 to 1.15.5 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/540
* Bump org.apache.fury:fury-core from 0.7.1 to 0.8.0 by @dependabot in https://github.com/apache/dubbo-spi-extensions/pull/531

## New Contributors
* @laywin made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/461
* @funky-eyes made their first contribution in https://github.com/apache/dubbo-spi-extensions/pull/473

**Full Changelog**: https://github.com/apache/dubbo-spi-extensions/compare/v3.3.0...v3.3.1

---

> **Source** [apache/dubbo-spi-extensions](https://github.com/apache/dubbo-spi-extensions) · `v3.3.1` · 2024-11-14 · [upstream release](https://github.com/apache/dubbo-spi-extensions/releases/tag/v3.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
