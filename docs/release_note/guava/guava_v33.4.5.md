---
title: "guava v33.4.5"
project: "guava"
repo: "google/guava"
tag: "v33.4.5"
published: "2025-03-19"
type: "patch"
lang: "en"
summary: "Use Guava 33.4.8, not Guava 33.4.5. 33.4.5 was our first attempt to modularize Guava, but we misconfigured our build, so it:"
---

# guava v33.4.5

**Use Guava 33.4.8, not Guava 33.4.5**. 33.4.5 was our first attempt to modularize Guava, but we misconfigured our build, so it:

- [contains an extra copy of each of its classes](https://github.com/google/guava/issues/7743)
- [does not declare its dependencies on artifacts of annotations](https://github.com/google/guava/pull/7732)

33.4.5 (and 33.4.6) also may cause [trouble for some optimizers](https://github.com/google/guava/pull/7766) (like those commonly used for Android apps), and 33.4.7 [breaks the build of Android apps with a minSdkVersion below 26](https://github.com/google/guava/issues/7769).

All these issues are fixed by release 33.4.8. Sorry for the trouble.

When you read [the release notes for 33.4.8](https://github.com/google/guava/releases/tag/v33.4.8), you should also read [the release notes for Guava 33.4.1](https://github.com/google/guava/releases/tag/v33.4.1), even if you're not upgrading from Guava 33.4.0 or earlier: Those release notes contain information about the effect of Guava 33.4.5 and higher on the module system.

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.4.5-jre</version>
  <!-- or, for Android: -->
  <version>33.4.5-android</version>
</dependency>
```

### Jar files

- [33.4.5-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.5-jre/guava-33.4.5-jre.jar)
- [33.4.5-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.5-android/guava-33.4.5-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

- [33.4.5-jre](https://guava.dev/releases/33.4.5-jre/api/docs/)
- [33.4.5-android](https://guava.dev/releases/33.4.5-android/api/docs/)

### JDiff

- [33.4.5-jre vs. 33.4.4-jre](https://guava.dev/releases/33.4.5-jre/api/diffs/)
- [33.4.5-android vs. 33.4.4-android](https://guava.dev/releases/33.4.5-android/api/diffs/)
- [33.4.5-android vs. 33.4.5-jre](https://guava.dev/releases/33.4.5-android/api/androiddiffs/)

### Changelog

- Changed the Guava jar (plus `guava-testlib` and [`failureaccess`](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies) jars) to be a modular jar. (7a71ea0bfa, 287c701a86)
- Changed various classes to stop using `sun.misc.Unsafe` under Java 9+. (ee63055ddd, 80aab00dc5b7a36785f5e09b6a54397388980cde, 400af25292096746ed3f6164f0ff88209acbb19f, 71d0692d418a5dd001c9b3786275a5f1f94e1971, d1a3cd5037528a2ae990bfceed9cdd009fbc54de, b3bb29a54b8f13d6f6630b6cb929867adbf6b9a0, 1a300f6b2f7ba03ae9bc3620a80c4d4589c65b69)
  - Note that, if you use `guava-android` on the JVM (instead of using `guava-jre`), Guava will still try to use `sun.misc.Unsafe`. We will do [further work](https://github.com/google/guava/issues/7742) on this in the future.
- Belatedly updated the Public Suffix List data. (ee3b9c64382037f72b3a8341915cc64b87850b53, d25d62fc843ece1c3866859bc8639b815093eac8)

Special thanks to @sgammon for [his modularization efforts](https://javamodules.dev/).

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.4.5` · 2025-03-19 · [upstream release](https://github.com/google/guava/releases/tag/v33.4.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
