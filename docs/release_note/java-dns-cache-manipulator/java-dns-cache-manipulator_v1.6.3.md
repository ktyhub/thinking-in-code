---
title: "java-dns-cache-manipulator v1.6.3"
project: "java-dns-cache-manipulator"
repo: "alibaba/java-dns-cache-manipulator"
tag: "v1.6.3"
published: "2021-11-23"
type: "patch"
lang: "en"
summary: "[](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.6.3/jar) [](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.6.3/dcm-1.6.3.tar.gz)"
---

# java-dns-cache-manipulator v1.6.3

[![](https://img.shields.io/badge/maven-com.alibaba:dns--cache--manipulator:1.6.3-7777ff.svg?style=flat&maxAge=7200&logo=ko-fi)](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.6.3/jar) [![GitHub release download - dcm.tar.gz)](https://img.shields.io/github/downloads/alibaba/java-dns-cache-manipulator/v1.6.3/dcm-1.6.3.tar.gz.svg?logoColor=white&logo=DocuSign)](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.6.3/dcm-1.6.3.tar.gz)

## Improvement

- performance improvement: cache reflection objects(field/constructor)
- [TOOL] fix action list, remove wrong `file` action
- unify double check conditions
- code refactor/cleanup
  - simplify code: use `clone` instead of explicit copy for `String[]`
  - [TOOL] split big method `DcmTool.main`
  - split big method `agentmain`
  - fix codeclimate issues
  - rename methods, remove `Field` word of methods that return field value
  - improve error message of `DcmAgent`
  - rename field: `FILE` -> `FILE_KEY` in `DcmAgent`
  - add private for internal methods/fields in `DcmAgent`
- CI: use `HOME` env var instead of hard-coded value in AppVeyor CI
- Documentation:
  - update badges
- improve javadoc

## Java Dns Cache Manipulator Library

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.6.3/library/README.md)
- [java apidocs](http://alibaba.github.io/java-dns-cache-manipulator/apidocs/1.6.3/index.html)

maven dependency:

``` xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>dns-cache-manipulator</artifactId>
    <version>1.6.3</version>
</dependency>
```

Already deployed to [maven central repository](https://search.maven.org/artifact/com.alibaba/dns-cache-manipulator/1.6.3/jar).

## Java Dns Cache Manipulator Tool

- [User Guide & Document](https://github.com/alibaba/java-dns-cache-manipulator/blob/v1.6.3/tool/README.md)
- Download [dcm-1.6.3.tar.gz](https://github.com/alibaba/java-dns-cache-manipulator/releases/download/v1.6.3/dcm-1.6.3.tar.gz)

---

> **Source** [alibaba/java-dns-cache-manipulator](https://github.com/alibaba/java-dns-cache-manipulator) · `v1.6.3` · 2021-11-23 · [upstream release](https://github.com/alibaba/java-dns-cache-manipulator/releases/tag/v1.6.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
