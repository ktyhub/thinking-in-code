---
title: "guava v33.7.0"
project: "guava"
repo: "google/guava"
tag: "v33.7.0"
published: "2026-08-17"
type: "minor"
lang: "en"
summary: "Guava 33.7.0 includes a Multi-Release line in its jar manifest, even though it is no longer a multi-release jar. This causes some problems with tools from Java 9 and Java 10. The issue is fixed in version 33.7.1. Sorry…"
---

# guava v33.7.0

### Newly introduced problem for Java 9 and Java 10 only

Guava 33.7.0 includes a `Multi-Release` line in its jar manifest, even though it is no longer a multi-release jar. This causes [some problems with tools from Java 9 and Java 10](https://github.com/google/guava/issues/8614). The issue is fixed in [version 33.7.1](https://github.com/google/guava/releases/tag/v33.7.1). Sorry for the trouble.

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.7.0-jre</version>
  <!-- or, for Android: -->
  <version>33.7.0-android</version>
</dependency>
```

### Jar files

- [33.7.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.7.0-jre/guava-33.7.0-jre.jar)
- [33.7.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.7.0-android/guava-33.7.0-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

- [33.7.0-jre](https://guava.dev/releases/33.7.0-jre/api/docs/)
- [33.7.0-android](https://guava.dev/releases/33.7.0-android/api/docs/)

### JDiff

- [33.7.0-jre vs. 33.6.0-jre](https://guava.dev/releases/33.7.0-jre/api/diffs/)
- [33.7.0-android vs. 33.6.0-android](https://guava.dev/releases/33.7.0-android/api/diffs/)
- [33.7.0-android vs. 33.7.0-jre](https://guava.dev/releases/33.7.0-android/api/androiddiffs/)

### Changelog

- The Android jar now contains our Proguard configs. (b0668e7174)
- The Guava `module-info.class` is now present at the root of the jar instead of under [a multi-release root](https://openjdk.org/jeps/238). This prevents the jar from containing a file at `META-INF/versions/9/OSGI-INF/MANIFEST.MF`, which occasionally causes [trouble for some users](https://github.com/jspecify/jspecify/issues/484#issuecomment-2819506604). (230019b31e)
- Our Android `minSdkVersion` is now 24 (Nougat). This follows the minimum of Google's foundational Android libraries, and we expect it to have no practical impact on users. (ea0af870d5)
- `collect`: Changed some `ImmutableMap` implementations to create a new, lightweight object on each call to view methods like `keySet()`, rather than creating and storing that object during the first call for reuse later. This is likely to slightly improve performance for some users, but it could lead to regressions in unusual cases, such as repeatedly calling `asMultimap().inverse()` on the same `ImmutableMap` instance. (e87d019e47)
- `net`: Added `HttpHeaders` constant for `on-prefetch-activation`. (abd06a3679)
- `net`: Added `MediaType` constants for `application/yaml` and `application/x-pem-file`. (a8e9533b49, 1d40e27a4b)
- `util.concurrent`: Fixed `ExecutionSequencer` queue stall when delegate executor throws `RejectedExecutionException`. (8410194eed)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.7.0` · 2026-08-17 · [upstream release](https://github.com/google/guava/releases/tag/v33.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
