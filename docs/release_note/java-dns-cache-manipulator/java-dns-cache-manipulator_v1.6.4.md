---
title: "java-dns-cache-manipulator v1.6.4"
project: "java-dns-cache-manipulator"
repo: "alibaba/java-dns-cache-manipulator"
tag: "v1.6.4"
published: "2021-12-17"
type: "patch"
lang: "en"
summary: "[](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.6.4/jar) [](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.6.4/dcm-1.6.4.tar.gz)"
---

# java-dns-cache-manipulator v1.6.4

[![](https://img.shields.io/badge/maven-com.alibaba:dns--cache--manipulator:1.6.4-7777ff.svg?style=flat&maxAge=7200&logo=ko-fi)](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.6.4/jar) [![GitHub release download - dcm.tar.gz)](https://img.shields.io/github/downloads/alibaba/java-dns-cache-manipulator/v1.6.4/dcm-1.6.4.tar.gz.svg?logoColor=white&logo=DocuSign)](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.6.4/dcm-1.6.4.tar.gz)

## Improvement

- improve codeclimate:
  - fix Method `InetAddressCacheUtilForJava9Plus#inetAddress$Addresses2DnsCacheEntry` codeclimate issue #66
  - fix method_complexity `InetAddressCacheUtilForJava8Minus#inetAddress$CacheEntry2DnsCacheEntry` #65
  - fix `initFieldsOfInetAddressCachePolicy` method issue in `InetAddressCacheUtilCommons` #64
  - define and throw a dedicated exception instead of using a generic one #67
- refactor: use `@*AreNonnullByDefault` instead of `@Nonnull`, less noisy
- upgrade dependencies/plugins
- upgrade maven wrapper to 3.8.4
- cleanup unit test
- Documentation:
  - add English README
  - add missing javadoc elements
  - update project description
  - add badge Maintainability

## Java Dns Cache Manipulator Library

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/tree/v1.6.4/README.md)
- [java apidocs](http://alibaba.github.io/java-dns-cache-manipulator/apidocs/1.6.4/index.html)

maven dependency:

``` xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dns-cache-manipulator</artifactId>
    <version>1.6.4</version>
</dependency>
```

Already deployed to [maven central repository](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.6.4/jar).

## Java Dns Cache Manipulator Tool

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.6.4/README.md#java-dns-cache-manipulator-tool)
- Download [dcm-1.6.4.tar.gz](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.6.4/dcm-1.6.4.tar.gz)

---

> **Source** [alibaba/java-dns-cache-manipulator](https://github.com/alibaba/java-dns-cache-manipulator) · `v1.6.4` · 2021-12-17 · [upstream release](https://github.com/alibaba/java-dns-cache-manipulator/releases/tag/v1.6.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
