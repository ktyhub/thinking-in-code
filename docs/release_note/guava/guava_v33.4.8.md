---
title: "guava v33.4.8"
project: "guava"
repo: "google/guava"
tag: "v33.4.8"
published: "2025-04-14"
type: "patch"
lang: "en"
summary: "Guava 33.4.8 fixes a problem that we introduced while starting to migrate guava-android off Unsafe in 33.4.7."
---

# guava v33.4.8

Guava 33.4.8 fixes a problem that we introduced while starting to migrate `guava-android` off `Unsafe` in [33.4.7](https://github.com/google/guava/releases/tag/v33.4.7).

Even if you're not upgrading from Guava 33.4.0 or earlier, still read [the release notes for Guava 33.4.1](https://github.com/google/guava/releases/tag/v33.4.1). Those release notes contain information about the effects of Guava 33.4.5 and higher on the module system.

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.4.8-jre</version>
  <!-- or, for Android: -->
  <version>33.4.8-android</version>
</dependency>
```

### Jar files

- [33.4.8-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.8-jre/guava-33.4.8-jre.jar)
- [33.4.8-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.8-android/guava-33.4.8-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

- [33.4.8-jre](https://guava.dev/releases/33.4.8-jre/api/docs/)
- [33.4.8-android](https://guava.dev/releases/33.4.8-android/api/docs/)

### JDiff

- [33.4.8-jre vs. 33.4.7-jre](https://guava.dev/releases/33.4.8-jre/api/diffs/)
- [33.4.8-android vs. 33.4.7-android](https://guava.dev/releases/33.4.8-android/api/diffs/)
- [33.4.8-android vs. 33.4.8-jre](https://guava.dev/releases/33.4.8-android/api/androiddiffs/)

### Changelog

- `util.concurrent`: Removed our `VarHandle` code from `guava-android`. While the code was never used at runtime under Android, it was causing [problems under the Android Gradle Plugin](https://github.com/google/guava/issues/7769) with a `minSdkVersion` below 26. To continue to avoid `sun.misc.Unsafe` under the JVM, `guava-android` will now always use `AtomicReferenceFieldUpdater` when run there. (75da92419a)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.4.8` · 2025-04-14 · [upstream release](https://github.com/google/guava/releases/tag/v33.4.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
