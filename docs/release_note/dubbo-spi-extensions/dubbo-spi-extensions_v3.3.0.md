---
title: "dubbo-spi-extensions v3.3.0"
project: "dubbo-spi-extensions"
repo: "apache/dubbo-spi-extensions"
tag: "v3.3.0"
published: "2024-06-25"
type: "minor"
lang: "en"
summary: "Compatible with Apache Dubbo 3.3.x"
---

# dubbo-spi-extensions v3.3.0

## What's Changed

## Reference

- Compatible with Apache Dubbo [3.3.x](https://github.com/apache/dubbo/tree/3.3) 

## Enhancement

- [dubbo-wasm-rpc-api ] init dubbo-wasm-rpc-api module by @loongs-zhang in [279](https://github.com/apache/dubbo-spi-extensions/pull/279)
- [dubbo-wasm-cluster-api ]   init dubbo-wasm-cluster-api module by @loongs-zhang in [283](https://github.com/apache/dubbo-spi-extensions/pull/283)
- [dubbo-wasm]   support Protocol/Exporter/Invoker SPI by @loongs-zhang in [284](https://github.com/apache/dubbo-spi-extensions/pull/284)
- [dubbo-wasm-registry-api]  init dubbo-wasm-registry-api module by @loongs-zhang in [285](https://github.com/apache/dubbo-spi-extensions/pull/285)
- [dubbo-wasm-common-api ] part5 init dubbo-wasm-common-api module by @loongs-zhang in [286](https://github.com/apache/dubbo-spi-extensions/pull/286)
- [dubbo-proxy-bytebuddy] Import bytebuddy implementation from Dubbo 3.2 by @finefuture in [294](https://github.com/apache/dubbo-spi-extensions/pull/294)
- [dubbo-wasm-remoting-api]  init dubbo-wasm-remoting-api module by @loongs-zhang in [295](https://github.com/apache/dubbo-spi-extensions/pull/295)
- [dubbo-cluster-router-mesh]Move Mesh Rule Router to SPI Extensions #13957 by @heliang666s in [307](https://github.com/apache/dubbo-spi-extensions/pull/307)
- [dubbo-cluster-router-mesh]  Move Rest Protocol to SPI Extensions #13958 by @wcy666103 in [306](https://github.com/apache/dubbo-spi-extensions/pull/306)
- [dubbo-serialization-native-hessian] rename hession to hessian by @wcy666103 in [377](https://github.com/apache/dubbo-spi-extensions/pull/377)
- [dubbo-serialization-fury] remove useless maven.compiler 17 by @wcy666103 in [395](https://github.com/apache/dubbo-spi-extensions/pull/395)
- [[dubbo-serialization-jdk] move jdk-serialize and add test cases by @wcy666103 in [417](https://github.com/apache/dubbo-spi-extensions/pull/417)

## Bugfix

-  fix: dubbo-registry-dns resource leak by @aofall in [308](https://github.com/apache/dubbo-spi-extensions/pull/308) 
- fix test lib by @wcy666103 in [310](https://github.com/apache/dubbo-spi-extensions/pull/310)
- fix: redis connection do not close and return to connection pool by @aofall in [311](https://github.com/apache/dubbo-spi-extensions/pull/311)
- fix: try to fix etcd unit test failed sometimes by @aofall in [312](https://github.com/apache/dubbo-spi-extensions/pull/312)
- fix  module dependency errors error by @wcy666103 in [342](https://github.com/apache/dubbo-spi-extensions/pull/342)

## Doc/CI

-  add auddo-wasm/README_zh.md by @wcy666103 in [298](https://github.com/apache/dubbo-spi-extensions/pull/298)

- build: Add GitHub Actions workflow by @aofall in [300](https://github.com/apache/dubbo-spi-extensions/pull/300)

- add configcenter README by @wcy666103 in [299](https://github.com/apache/dubbo-spi-extensions/pull/299)

- :memo: readme update by @songxiaosheng in [304](https://github.com/apache/dubbo-spi-extensions/pull/304)

- build: CI support unit test on Windows platform && Add Dependabot config by @aofall in [309](https://github.com/apache/dubbo-spi-extensions/pull/309)

   

## Dependency Upgrade

- Update  avro vertsion  1.8.2  -> 1.11.3 by @aofall in [#252](https://github.com/apache/dubbo-spi-extensions/pull/252)
- Update  commons-lang3  3.8.1 -> 3.14.0 by @dependabot in [330](https://github.com/apache/dubbo-spi-extensions/pull/330)
- Update  testcontainers  1.15.2 -> 1.19.8 by @dependabot in [337](https://github.com/apache/dubbo-spi-extensions/pull/337)
- Update  spring-cloud-dependencies   Hoxton.SR8  -> Hoxton.SR10 by @dependabot in [335](https://github.com/apache/dubbo-spi-extensions/pull/335)
- Update protostuff_version  1.5.9  -> 1.8.0 by @dependabot in [332](https://github.com/apache/dubbo-spi-extensions/pull/332)
- Update org.apache.maven.plugins:maven-assembly-plugin 3.1.0  -> 3.7.1 by @dependabot in [331](https://github.com/apache/dubbo-spi-extensions/pull/331)
- Update protobuf-java_version  3.16.3  -> 3.25.3 by @dependabot in [329](https://github.com/apache/dubbo-spi-extensions/pull/329)
- Update sofa_registry_version  5.2.0  -> 5.4.3 by @dependabot in [328](https://github.com/apache/dubbo-spi-extensions/pull/328)
- Update rocketmq.version  4.9.2  -> 4.9.8 by @dependabot in [326](https://github.com/apache/dubbo-spi-extensions/pull/326)
- Update spring-boot.version  2.4.1  -> 2.7.18 by @dependabot in [327](https://github.com/apache/dubbo-spi-extensions/pull/327)
- Update com.google.code.gson:gson  2.8.9  -> 2.10.1 by @dependabot in [324](https://github.com/apache/dubbo-spi-extensions/pull/324)
- Update fabric8_kubernetes_version  6.9.2  -> 6.12.0 by @dependabot in [321](https://github.com/apache/dubbo-spi-extensions/pull/321)
- Update org.apache.httpcomponents:fluent-hc  4.5.5  -> 4.5.14 by @dependabot in [320](https://github.com/apache/dubbo-spi-extensions/pull/320)
- Update io.netty.incubator:netty-incubator-codec-quic  0.0.14.Final  -> 0.0.20.Final by @dependabot in [319](https://github.com/apache/dubbo-spi-extensions/pull/319)
- Update org.apache.maven.plugins:maven-clean-plugin  3.1.0  -> 3.3.2 by @dependabot in [323](https://github.com/apache/dubbo-spi-extensions/pull/323)
- Update org.codehaus.mojo:license-maven-plugin 2.0.0  -> 2.4.0 by @dependabot in [317](https://github.com/apache/dubbo-spi-extensions/pull/317)
- Update redis.clients:jedis  3.7.0  -> 3.10.0 by @dependabot in [313](https://github.com/apache/dubbo-spi-extensions/pull/313)
- Update org.apache.dubbo:dubbo  2.7.18  -> 2.7.23 by @dependabot in [315](https://github.com/apache/dubbo-spi-extensions/pull/315)
- Update grpc.version  1.53.0  -> 1.63.0 by @dependabot in [316](https://github.com/apache/dubbo-spi-extensions/pull/316)
- Upgrade dubbo 3.3 by @wcy666103 in [345](https://github.com/apache/dubbo-spi-extensions/pull/345)

## New Contributors

- @loongs-zhang made their first contribution in [279](https://github.com/apache/dubbo-spi-extensions/pull/279)
- @xiaozhigang made their first contribution in [297](https://github.com/apache/dubbo-spi-extensions/pull/297)
- @heliang666s made their first contribution in [307](https://github.com/apache/dubbo-spi-extensions/pull/307)



**Full Changelog**: https://github.com/apache/dubbo-spi-extensions/compare/v3.2.0...v3.3.0

---

> **Source** [apache/dubbo-spi-extensions](https://github.com/apache/dubbo-spi-extensions) · `v3.3.0` · 2024-06-25 · [upstream release](https://github.com/apache/dubbo-spi-extensions/releases/tag/v3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
