---
title: "guava v33.4.3"
project: "guava"
repo: "google/guava"
tag: "v33.4.3"
published: "2025-03-19"
type: "patch"
lang: "en"
summary: "This is one of a series of releases that improve Guava's nullness annotations. For more information, including troubleshooting help, see the release notes for Guava 33.4.1. Most users can update directly to Guava 33.4.8."
---

# guava v33.4.3

This is one of a series of releases that improve Guava's nullness annotations. For more information, including troubleshooting help, see [the release notes for Guava 33.4.1](https://github.com/google/guava/releases/tag/v33.4.1). Most users can update directly to Guava 33.4.8.

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.4.3-jre</version>
  <!-- or, for Android: -->
  <version>33.4.3-android</version>
</dependency>
```

### Jar files

- [33.4.3-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.3-jre/guava-33.4.3-jre.jar)
- [33.4.3-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.3-android/guava-33.4.3-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.2.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.2/failureaccess-1.0.2.jar)

### Javadoc

- [33.4.3-jre](https://guava.dev/releases/33.4.3-jre/api/docs/)
- [33.4.3-android](https://guava.dev/releases/33.4.3-android/api/docs/)

### JDiff

- [33.4.3-jre vs. 33.4.2-jre](https://guava.dev/releases/33.4.3-jre/api/diffs/)
- [33.4.3-android vs. 33.4.2-android](https://guava.dev/releases/33.4.3-android/api/diffs/)
- [33.4.3-android vs. 33.4.3-jre](https://guava.dev/releases/33.4.3-android/api/androiddiffs/)

### Changelog

- Migrated from `@CheckForNull` to the Checker Framework `@Nullable`. Most tools recognize both annotations, so we expect this to be a no-op in almost all cases. This release removes our dependency on JSR-305. (d997ad9367)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.4.3` · 2025-03-19 · [upstream release](https://github.com/google/guava/releases/tag/v33.4.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
