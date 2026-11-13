---
title: "guava v33.7.2"
project: "guava"
repo: "google/guava"
tag: "v33.7.2"
published: "2026-09-29"
type: "patch"
lang: "en"
summary: "com.google.guava guava 33.7.2-jre 33.7.2-android"
---

# guava v33.7.2

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.7.2-jre</version>
  <!-- or, for Android: -->
  <version>33.7.2-android</version>
</dependency>
```

### Jar files

-   [33.7.2-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.7.2-jre/guava-33.7.2-jre.jar)
-   [33.7.2-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.7.2-android/guava-33.7.2-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

-   [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

-   [33.7.2-jre](https://guava.dev/releases/33.7.2-jre/api/docs/)
-   [33.7.2-android](https://guava.dev/releases/33.7.2-android/api/docs/)

### JDiff

-   [33.7.2-jre vs. 33.7.1-jre](https://guava.dev/releases/33.7.2-jre/api/diffs/)
-   [33.7.2-android vs. 33.7.1-android](https://guava.dev/releases/33.7.2-android/api/diffs/)
-   [33.7.2-android vs. 33.7.2-jre](https://guava.dev/releases/33.7.2-android/api/androiddiffs/)

### Changelog

- `collect`: Changed `MapMaker`, `CompactHashMap`, and `CompactHashSet` deserialization to [avoid eagerly allocating as much memory as a serialization payload requests](https://github.com/google/guava/security/advisories/GHSA-xxph-c9ww-hj94) ([CVE-2026-102554](https://www.cve.org/CVERecord?id=CVE-2026-102554)). (a0d0c36432)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.7.2` · 2026-09-29 · [upstream release](https://github.com/google/guava/releases/tag/v33.7.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
