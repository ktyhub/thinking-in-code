---
title: "guava v33.4.7"
project: "guava"
repo: "google/guava"
tag: "v33.4.7"
published: "2025-04-08"
type: "patch"
lang: "en"
summary: "Prefer to upgrade straight to 33.4.8: 33.4.7 breaks the build of Android apps with a minSdkVersion below 26. We will publish a fixed version soon. This problem is fixed in 33.4.8."
---

# guava v33.4.7

**Prefer to upgrade straight to [33.4.8](https://github.com/google/guava/releases/tag/v33.4.8):** 33.4.7 [breaks the build of Android apps with a minSdkVersion below 26](https://github.com/google/guava/issues/7769). We will publish a fixed version soon. This problem is fixed in 33.4.8.

Guava 33.4.7, like [33.4.6](https://github.com/google/guava/releases/tag/v33.4.6), fixes two problems that we introduced while modularizing Guava and migrating off `Unsafe` in [33.4.5](https://github.com/google/guava/releases/tag/v33.4.5).

Even if you're not upgrading from Guava 33.4.0 or earlier, still read [the release notes for Guava 33.4.1](https://github.com/google/guava/releases/tag/v33.4.1). Those release notes contain information about the effects of Guava 33.4.5 and higher on the module system.

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.4.7-jre</version>
  <!-- or, for Android: -->
  <version>33.4.7-android</version>
</dependency>
```

### Jar files

- [33.4.7-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.7-jre/guava-33.4.7-jre.jar)
- [33.4.7-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.4.7-android/guava-33.4.7-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

- [33.4.7-jre](https://guava.dev/releases/33.4.7-jre/api/docs/)
- [33.4.7-android](https://guava.dev/releases/33.4.7-android/api/docs/)

### JDiff

- [33.4.7-jre vs. 33.4.6-jre](https://guava.dev/releases/33.4.7-jre/api/diffs/)
- [33.4.7-android vs. 33.4.6-android](https://guava.dev/releases/33.4.7-android/api/diffs/)
- [33.4.7-android vs. 33.4.7-jre](https://guava.dev/releases/33.4.7-android/api/androiddiffs/)

### Changelog

- Modified the `guava` module's dependency on `failureaccess` to be `transitive`. Also, modified the `guava-testlib` module to make its dependency on `guava` transitive, to remove its dependency on `failureaccess`, and to add a dependency (`transitive`) on `junit`. (63ecdf2239)
- `util.concurrent`: Modified our fast paths to ensure that they continue to work when run through optimizers, such as those commonly used by Android apps. This fixes problems that some users may have seen since [Guava 33.4.5](https://github.com/google/guava/releases/tag/v33.4.5). (b8dcaede09bcf1c3bd5fc037690498f6ac560c54, f9eff73b8d)
- `util.concurrent`: Changed the `guava-android` copy of `AbstractFuture` to try `VarHandle` before `Unsafe`, eliminating a warning under newer JDKs. (7336af1831)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.4.7` · 2025-04-08 · [upstream release](https://github.com/google/guava/releases/tag/v33.4.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
