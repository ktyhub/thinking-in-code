---
title: "dubbo dubbo-3.3.4"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.4"
published: "2025-03-05"
type: "release"
lang: "en"
summary: "Releates PRs: #14800, #15058, #15064, #15017, #15065, #15082, #15122, #15125, #15135, #15163, #15164"
---

# dubbo dubbo-3.3.4

## What's Changed

### Feature
* Client supports requests to server-streaming endpoints without parameters by @funky-eyes in https://github.com/apache/dubbo/pull/15029
* Add a configuration to determine whether to enable the point-to-point network interface by @finefuture in https://github.com/apache/dubbo/pull/15032
* Support pass SSLSession in Invocation to check permission by @AlbumenJ in https://github.com/apache/dubbo/pull/15049
* Native image support generic service by @eye-gu in https://github.com/apache/dubbo/pull/15139

### Bugfix
* Fix fastjson2 init error cause startup failure by @AlbumenJ in https://github.com/apache/dubbo/pull/14798
* Fix init order in AbstractPortUnificationServer by @AlbumenJ in https://github.com/apache/dubbo/pull/14892
* Fix possible infinite loop when cleaning up expired metadata info by @funky-eyes in https://github.com/apache/dubbo/pull/15086
* Fix zookeeper reflection type describer registrar path by @CrazyHZM in https://github.com/apache/dubbo/pull/15109
* Remove strong dep micrometer in tracing by @songxiaosheng in https://github.com/apache/dubbo/pull/14986
* Try register Service Instance after export by @AlbumenJ in https://github.com/apache/dubbo/pull/15113
* Get all nacos instances without subscription by @zrlw in https://github.com/apache/dubbo/pull/15126
* Fix triple protocol echoService invoke. by @wuwen5 in https://github.com/apache/dubbo/pull/15127
* Get authority by calling HttpServletRequest#getServerName by @zrlw in https://github.com/apache/dubbo/pull/15141
* Fix gRPC-related URL object caused a NullPointerException by @Stellar1999 in https://github.com/apache/dubbo/pull/15157
* Check the md5 of the metadata cache file by @finefuture in https://github.com/apache/dubbo/pull/15006
* Fix the issue where the charset from Content-Type is not parsed correctly by @Stellar1999 in https://github.com/apache/dubbo/pull/15188

### Code Enhancement
Releates PRs: #14800, #15058, #15064, #15017, #15065, #15082, #15122, #15125, #15135, #15163, #15164

### Dependency Upgrade
* Update byte-buddy_version: 1.15.11 -> 1.17.1 #15079 #15104 #15150
* Update com.alibaba.fastjson2:fastjson2: 2.0.53 -> 2.0.56 #15053 #15154 #15172
* Update com.alibaba.nacos:nacos-client: 2.4.3 -> 2.5.0 #15099
* Update com.ctrip.framework.apollo:apollo-client: 2.3.0 -> 2.4.0 #15117
* Update com.ctrip.framework.apollo:apollo-mockserver: 2.3.0 -> 2.4.0 #15120
* Update com.diffplug.spotless:spotless-maven-plugin: 2.43.0 -> 2.44.3 #15071 #15175
* Update com.google.code.gson:gson: 2.11.0 -> 2.12.1 #15103
* Update commons-codec:commons-codec: 1.17.1 -> 1.18.0 #15057 #15100
* Update commons-logging:commons-logging: 1.3.4 -> 1.3.5 #15119
* Update grpc.version: 1.69.0 -> 1.70.0 #15093
* Update io.micrometer:micrometer-bom: 1.13.6 -> 1.14.4 #15077 #15149
* Update io.micrometer:micrometer-core: 1.14.2 -> 1.14.4 #15076 #15152
* Update io.micrometer:micrometer-tracing-bom: 1.4.1 -> 1.4.3 #15078 #15151
* Update io.opentelemetry:opentelemetry-bom: 1.45.0 -> 1.47.0 #15054 #15118
* Update io.projectreactor:reactor-core: 3.7.1 -> 3.7.3 #15075 #15153
* Update io.swagger.core.v3:swagger-annotations: 2.2.27 -> 2.2.28 #15081
* Update io.zipkin.reporter2:zipkin-reporter-bom: 3.4.3 -> 3.5.0 #15147
* Update jakarta.validation:jakarta.validation-api: 3.1.0 -> 3.1.1 #15098
* Update jetty_version: 9.4.56.v20240826 -> 9.4.57.v20241219 #15052
* Update netty4_version: 4.1.115.Final -> 4.1.118.Final #15038 #15080 #15148
* Update org.apache.groovy:groovy: 4.0.24 -> 4.0.25 #15097
* Update org.eclipse.jetty:jetty-maven-plugin: 9.4.56.v20240826 -> 9.4.57.v20241219 #15056
* Update org.webjars:redoc: 2.1.5 -> 2.3.0 #15102
* Update org.webjars:swagger-ui: 5.18.2 -> 5.18.3 #15101
* Update org.yaml:snakeyaml: 2.3 -> 2.4 #15155
* Update protobuf-java_version: 3.25.5 -> 3.25.6 #15095
* Update spring-6.version: 6.2.1 -> 6.2.3 #15072 #15145
* Update spring-boot-3.version: 3.4.1 -> 3.4.3 #15094 #15169
* Update swagger_version: 1.6.14 -> 1.6.15 #15074
* Update tomcat.version: 8.5.100 -> 10.1.36 #15146 #15167

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@AlbumenJ, @CrazyHZM, @eye-gu, @finefuture, @funky-eyes, @songxiaosheng, @Stellar1999, @wuwen5, @youjie23, @zrlw

## New Contributors
* @youjie23 made their first contribution in https://github.com/apache/dubbo/pull/15017

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.3...dubbo-3.3.4

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.4` · 2025-03-05 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
