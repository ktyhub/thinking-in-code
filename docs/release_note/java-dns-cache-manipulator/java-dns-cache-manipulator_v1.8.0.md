---
title: "java-dns-cache-manipulator v1.8.0"
project: "java-dns-cache-manipulator"
repo: "alibaba/java-dns-cache-manipulator"
tag: "v1.8.0"
published: "2022-12-24"
type: "minor"
lang: "en"
summary: "support Java 18/19"
---

# java-dns-cache-manipulator v1.8.0

<a href="#"><img src="https://img.shields.io/badge/Java-8+-green?logo=openjdk&amp;logoColor=white" alt="Java support"></a> [![](https://img.shields.io/badge/maven-com.alibaba:dns--cache--manipulator:1.8.0-7777ff.svg?style=flat&maxAge=7200&logo=ko-fi)](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.8.0/jar) [![GitHub release download - dcm.tar.gz)](https://img.shields.io/github/downloads/alibaba/java-dns-cache-manipulator/v1.8.0/dcm-1.8.0.tar.gz.svg?logoColor=white&logo=DocuSign)](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.8.0/dcm-1.8.0.tar.gz) 

> [!NOTE]
> Start from `DCM 1.7+` upgrade to `Java 8` 🚀
> If you need `Java 6` support, use version `1.6.x` <a href="https://central.sonatype.com/artifact/com.alibaba/dns-cache-manipulator/versions"><img src="https://img.shields.io/maven-central/v/com.alibaba/dns-cache-manipulator?versionPrefix=1.6.&color=lightgrey&logo=apache-maven&logoColor=white" alt="Maven Central"></a>

## Features

- support Java 18/19

## Fix

- Fix  issue of `Java 8` latest version(`8u352`)  (issue #115 submitted by @arcuri82)
  
## Cleanup

- refactor: remove java 6 logic since upgrade to java 8
- upgrade dependencies/plugins

## Build/CI

- add Java 19/20 into CI
- add `codecov.io` in CI

## Java Dns Cache Manipulator Library

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/tree/v1.8.0/README.md)
- [java apidocs](http://alibaba.github.io/java-dns-cache-manipulator/apidocs/1.8.0/index.html)

maven dependency:

``` xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dns-cache-manipulator</artifactId>
    <version>1.8.0</version>
</dependency>
```

Already deployed to [maven central repository](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.8.0/jar).

## Java Dns Cache Manipulator Tool

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.8.0/README.md#java-dns-cache-manipulator-tool)
- Download [dcm-1.8.0.tar.gz](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.8.0/dcm-1.8.0.tar.gz)

---

> **Source** [alibaba/java-dns-cache-manipulator](https://github.com/alibaba/java-dns-cache-manipulator) · `v1.8.0` · 2022-12-24 · [upstream release](https://github.com/alibaba/java-dns-cache-manipulator/releases/tag/v1.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
