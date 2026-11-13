---
title: "guava v33.7.1"
project: "guava"
repo: "google/guava"
tag: "v33.7.1"
published: "2026-08-18"
type: "patch"
lang: "en"
summary: "com.google.guava guava 33.7.1-jre 33.7.1-android"
---

# guava v33.7.1

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.7.1-jre</version>
  <!-- or, for Android: -->
  <version>33.7.1-android</version>
</dependency>
```

### Jar files

- [33.7.1-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.7.1-jre/guava-33.7.1-jre.jar)
- [33.7.1-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.7.1-android/guava-33.7.1-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

- [33.7.1-jre](https://guava.dev/releases/33.7.1-jre/api/docs/)
- [33.7.1-android](https://guava.dev/releases/33.7.1-android/api/docs/)

### JDiff

- [33.7.1-jre vs. 33.7.0-jre](https://guava.dev/releases/33.7.1-jre/api/diffs/)
- [33.7.1-android vs. 33.7.0-android](https://guava.dev/releases/33.7.1-android/api/diffs/)
- [33.7.1-android vs. 33.7.1-jre](https://guava.dev/releases/33.7.1-android/api/androiddiffs/)

### Changelog

Guava 33.7.1 removes the `Multi-Release` line from our jar manifest, fixing an issue under Java 9 and 10 that was introduced to `guava-jre` in [version 33.7.0](https://github.com/google/guava/releases/tag/v33.7.0). Sorry for the trouble.

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.7.1` · 2026-08-18 · [upstream release](https://github.com/google/guava/releases/tag/v33.7.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
