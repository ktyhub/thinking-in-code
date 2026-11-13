---
title: "guava v33.4.6"
project: "guava"
repo: "google/guava"
tag: "v33.4.6"
published: "2025-03-25"
type: "patch"
lang: "en"
summary: "Prefer to upgrade straight to 33.4.8: While Guava 33.4.6 fixes two problems that we introduced while modularizing Guava in 33.4.5, it still contains some small problems with the module system, and it may still cause…"
---

# guava v33.4.6

**Prefer to upgrade straight to [33.4.8](https://github.com/google/guava/releases/tag/v33.4.8):** While Guava 33.4.6 fixes two problems that we introduced while modularizing Guava in [33.4.5](https://github.com/google/guava/releases/tag/v33.4.5), it still contains some small problems with the module system, and it may still cause trouble for optimizers, and the subsequent 33.4.7 [breaks the build of Android apps with a minSdkVersion below 26](https://github.com/google/guava/issues/7769). These problems have been fixed in 33.4.8.

Even if you're not upgrading from Guava 33.4.0 or earlier, still read [the release notes for Guava 33.4.1](https://github.com/google/guava/releases/tag/v33.4.1). Those release notes contain information about the effects of Guava 33.4.5 and higher on the module system.

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.4.6-jre</version>
  <!-- or, for Android: -->
  <version>33.4.6-android</version>
</dependency>
```

### Jar files

- [33.4.6-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.6-jre/guava-33.4.6-jre.jar)
- [33.4.6-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.6-android/guava-33.4.6-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

- [33.4.6-jre](https://guava.dev/releases/33.4.6-jre/api/docs/)
- [33.4.6-android](https://guava.dev/releases/33.4.6-android/api/docs/)

### JDiff

- [33.4.6-jre vs. 33.4.5-jre](https://guava.dev/releases/33.4.6-jre/api/diffs/)
- [33.4.6-android vs. 33.4.5-android](https://guava.dev/releases/33.4.6-android/api/diffs/)
- [33.4.6-android vs. 33.4.6-jre](https://guava.dev/releases/33.4.6-android/api/androiddiffs/)

### Changelog

- Removed the extra copy of each class from the Guava jar. The extra copies were an accidental addition from the modularization work in [Guava 33.4.5](https://github.com/google/guava/releases/tag/v33.4.5). (40485b93ce)
- Fixed annotation-related warnings when using Guava in modular builds. The most common such warning is `Cannot find annotation method 'value()' in type 'DoNotMock': ...`. (7e15ab3566)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.4.6` · 2025-03-25 · [upstream release](https://github.com/google/guava/releases/tag/v33.4.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
