---
title: "guava v33.5.0"
project: "guava"
repo: "google/guava"
tag: "v33.5.0"
published: "2025-09-17"
type: "minor"
lang: "en"
summary: "33.5.0-jre.jar · 33.5.0-android.jar"
---

# guava v33.5.0

### Maven
 
```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.5.0-jre</version>
  <!-- or, for Android: -->
  <version>33.5.0-android</version>
</dependency>
```
 
### Jar files
 
- [33.5.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.5.0-jre/guava-33.5.0-jre.jar)
- [33.5.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.5.0-android/guava-33.5.0-android.jar)
 
Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:
 
- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)
 
### Javadoc
 
- [33.5.0-jre](https://guava.dev/releases/33.5.0-jre/api/docs/)
- [33.5.0-android](https://guava.dev/releases/33.5.0-android/api/docs/)
 
### JDiff
 
- [33.5.0-jre vs. 33.4.8-jre](https://guava.dev/releases/33.5.0-jre/api/diffs/)
- [33.5.0-android vs. 33.4.8-android](https://guava.dev/releases/33.5.0-android/api/diffs/)
- [33.5.0-android vs. 33.5.0-jre](https://guava.dev/releases/33.5.0-android/api/androiddiffs/)
 
### Changelog

- Restored the `Automatic-Module-Name` to `guava-android`. (It, unlike, `guava-jre`, is not a proper module.) (7a04a8a955)
- For users of `guava-gwt`: Google [has moved off GWT internally](https://github.com/gwtproject/gwt-site/pull/394). We plan to continue to release `guava-gwt` for users of GWT and [J2CL](https://github.com/google/j2cl), but the artifact is no longer tested for GWT-specific issues, and we have limited resources to fix any unexpected issues that might arise. While we do not anticipate any specific problems, we can't guarantee how long support will continue.
- Increased our Android `minSdkVersion` to 23 (Marshmallow). This follows the minimum of Google's foundational Android libraries, and we expect it to have no practical impact on users. (5c23347cc1)
- Listed the JSpecify annotations as an optional dependency in our OSGi metadata. (2dfd572981)
- `cache`: Improved the handling of exceptions from compute functions in `Cache.asMap()`. (We do still [recommend](https://guava.dev/releases/snapshot-jre/api/docs/com/google/common/cache/CacheBuilder.html#prefer-caffeine-over-guava-s-caching-api-heading) using [Caffeine](https://github.com/ben-manes/caffeine) rather than `com.google.common.cache`.) (087f2c4a80)
- `collect`: Improved `Iterators.mergeSorted()` to preserve stability for equal elements. (4dc93be9a8)
- `math`: Added `saturatedAbs` methods to `IntMath` and `LongMath`. (ed0e518f20)
- `net`: Added `image/avif` to `MediaType`. (53344caba6)
- `testing`: Made `CollectorTester` available to Android users. (294c251079)
- `util.concurrent`: Added `Striped.custom`. (1586eb271d)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.5.0` · 2025-09-17 · [upstream release](https://github.com/google/guava/releases/tag/v33.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
