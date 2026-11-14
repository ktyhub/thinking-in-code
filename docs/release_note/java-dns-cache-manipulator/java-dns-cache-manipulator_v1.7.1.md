---
title: "java-dns-cache-manipulator v1.7.1"
project: "java-dns-cache-manipulator"
repo: "alibaba/java-dns-cache-manipulator"
tag: "v1.7.1"
published: "2022-01-24"
type: "patch"
lang: "en"
summary: "[tool] remove apache.commons.io runtime dependency of DcmTool · submodule pom extends parent, DRY · docs · add maven(e.g. running test) config for Java 17"
---

# java-dns-cache-manipulator v1.7.1

<a href="#"><img src="https://img.shields.io/badge/Java-8+-green?logo=java&amp;logoColor=white" alt="Java support"></a> [![](https://img.shields.io/badge/maven-com.alibaba:dns--cache--manipulator:1.7.1-7777ff.svg?style=flat&maxAge=7200&logo=ko-fi)](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.7.1/jar) [![GitHub release download - dcm.tar.gz)](https://img.shields.io/github/downloads/alibaba/java-dns-cache-manipulator/v1.7.1/dcm-1.7.1.tar.gz.svg?logoColor=white&logo=DocuSign)](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.7.1/dcm-1.7.1.tar.gz) 


#### Start from `DCM 1.7+` upgrade to `Java 8` 🚀

## improvement

- [tool] remove `apache.commons.io` runtime dependency of `DcmTool`
- submodule pom extends parent, DRY
- docs
  - add `maven`(e.g. running test) config for Java 17
  - add java 6 support announce for `v1.6.x`
- test
  - add `JavaVersionUtilTests`
  - migrate `JUnit 4` test cases to `kotest` 🍩 
  - test code refactor and cleanup

## Java Dns Cache Manipulator Library

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/tree/v1.7.1/README.md)
- [java apidocs](http://alibaba.github.io/java-dns-cache-manipulator/apidocs/1.7.1/index.html)

maven dependency:

``` xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dns-cache-manipulator</artifactId>
    <version>1.7.1</version>
</dependency>
```

Already deployed to [maven central repository](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.7.1/jar).

## Java Dns Cache Manipulator Tool

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.7.1/README.md#java-dns-cache-manipulator-tool)
- Download [dcm-1.7.1.tar.gz](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.7.1/dcm-1.7.1.tar.gz)

---

> **Source** [alibaba/java-dns-cache-manipulator](https://github.com/alibaba/java-dns-cache-manipulator) · `v1.7.1` · 2022-01-24 · [upstream release](https://github.com/alibaba/java-dns-cache-manipulator/releases/tag/v1.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
