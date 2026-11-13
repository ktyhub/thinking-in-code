---
title: "java-dns-cache-manipulator v1.8.4-Alpha1"
project: "java-dns-cache-manipulator"
repo: "alibaba/java-dns-cache-manipulator"
tag: "v1.8.4-Alpha1"
published: "2026-05-04"
type: "patch"
lang: "en"
summary: "[](https://central.sonatype.com/artifact/com.alibaba/dns-cache-manipulator/1.8.4-Alpha1) [](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.8.4-Alpha1/dcm-1.8.4-Alpha1.tar.gz)"
---

# java-dns-cache-manipulator v1.8.4-Alpha1

<a href="#"><img src="https://img.shields.io/badge/Java-8+-green?logo=openjdk&amp;logoColor=white" alt="Java support"></a> [![](https://img.shields.io/badge/maven-com.alibaba:dns--cache--manipulator:1.8.4--Alpha1-7777ff.svg?style=flat&maxAge=7200&logo=ko-fi)](https://central.sonatype.com/artifact/com.alibaba/dns-cache-manipulator/1.8.4-Alpha1) [![GitHub release download - dcm.tar.gz)](https://img.shields.io/github/downloads/alibaba/java-dns-cache-manipulator/v1.8.4-Alpha1/dcm-1.8.4-Alpha1.tar.gz.svg?logoColor=white&logo=DocuSign)](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.8.4-Alpha1/dcm-1.8.4-Alpha1.tar.gz) 

> [!NOTE]
> Start from `DCM 1.7+` upgrade to `Java 8` 🚀
> If you need `Java 6` support, use version `1.6.x` <a href="https://central.sonatype.com/artifact/com.alibaba/dns-cache-manipulator/versions"><img src="https://img.shields.io/maven-central/v/com.alibaba/dns-cache-manipulator?versionPrefix=1.6.&color=lightgrey&logo=apache-maven&logoColor=white" alt="Maven Central"></a>

## ☘️ Features

- Support Java 25/26  
  where `InetAddressCachePolicy` removed `set/negativeSet` fields, which caused `NoSuchFieldException` (c87cd607c8c36722ef58032f70c55c2d78b53275)

## 📚 Documentation

- Remove Java 6/7 references since project targets Java 8+

## 🚜 Build/Chore

- Upgrade maven wrapper to `3.9.15` 🪶
- Upgrade dependencies/plugins 🛠️
    - Fix spotbugs-maven-plugin error (5571dbc)
- migrate publishing from OSSRH to Sonatype Central Portal
- Do not install Java versions included in ubuntu image to speed up CI
- Upgrade CI JDKs
    - Add JDK 25 and 26
    - Remove non-LTS CI JDK to 23/22

## Java Dns Cache Manipulator Library

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/tree/v1.8.4-Alpha1/README.md)
- [java apidocs](http://alibaba.github.io/java-dns-cache-manipulator/apidocs/1.8.4-Alpha1/index.html)

maven dependency:

``` xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dns-cache-manipulator</artifactId>
    <version>1.8.4-Alpha1</version>
</dependency>
```

Already deployed to [maven central repository](https://central.sonatype.com/artifact/com.alibaba/dns-cache-manipulator/1.8.4-Alpha1).

## Java Dns Cache Manipulator Tool

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.8.4-Alpha1/README.md#java-dns-cache-manipulator-tool)
- Download [dcm-1.8.4-Alpha1.tar.gz](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.8.4-Alpha1/dcm-1.8.4-Alpha1.tar.gz)

---

> **Source** [alibaba/java-dns-cache-manipulator](https://github.com/alibaba/java-dns-cache-manipulator) · `v1.8.4-Alpha1` · 2026-05-04 · [upstream release](https://github.com/alibaba/java-dns-cache-manipulator/releases/tag/v1.8.4-Alpha1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
