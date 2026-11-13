---
title: "guava v33.6.0"
project: "guava"
repo: "google/guava"
tag: "v33.6.0"
published: "2026-04-14"
type: "minor"
lang: "en"
summary: "com.google.guava guava 33.6.0-jre 33.6.0-android"
---

# guava v33.6.0

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.6.0-jre</version>
  <!-- or, for Android: -->
  <version>33.6.0-android</version>
</dependency>
```

### Jar files

- [33.6.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.6.0-jre/guava-33.6.0-jre.jar)
- [33.6.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.6.0-android/guava-33.6.0-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

- [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

- [33.6.0-jre](https://guava.dev/releases/33.6.0-jre/api/docs/)
- [33.6.0-android](https://guava.dev/releases/33.6.0-android/api/docs/)

### JDiff

- [33.6.0-jre vs. 33.5.0-jre](https://guava.dev/releases/33.6.0-jre/api/diffs/)
- [33.6.0-android vs. 33.5.0-android](https://guava.dev/releases/33.6.0-android/api/diffs/)
- [33.6.0-android vs. 33.6.0-jre](https://guava.dev/releases/33.6.0-android/api/androiddiffs/)

### Changelog

- Migrated some classes from `finalize()` to `PhantomReference` in preparation for [the removal of finalization](https://openjdk.org/jeps/421). (786b619dd6, 7c6b17c, aeef90988d)
- `cache`: Deprecated `CacheBuilder` APIs that use `TimeUnit` in favor of those that use `Duration`. (73f8b0bb84)
- `collect`: Added `toImmutableSortedMap` collectors that use the natural comparator. (64d70b9f94)
- `collect`: Changed `ConcurrentHashMultiset`, `ImmutableMultimap`, and `TreeMultiset` deserialization to [avoid mutating `final` fields](https://openjdk.org/jeps/500). In extremely unlikely scenarios in which an instance of that type contains an object that refers back to that instance, this could lead to [a broken instance](https://docs.oracle.com/en/java/javase/26/docs/specs/serialization/input.html#the-readresolve-method:~:text=in%20cases%20where%20an%20object%20being%20serialized%20nominates%20a%20replacement%20object%20whose%20object%20graph%20has%20a%20reference%20to%20the%20original%20object) that throws `NullPointerException` when used. (8240c7e596, 046468055f)
- `graph`: Removed `@Beta` from all APIs in the package. (dae9566b73)
- `graph`: Added support to `Graphs.transitiveClosure()` for different strategies for adding self-loops. (2e13df25b2)
- `graph`: Added an `asNetwork()` view to `Graph` and `ValueGraph`. (909c593c61)
- `hash`: Added `BloomFilter.serializedSize()`. (df9bcc251a)
- `net`: Added `HttpHeaders.CDN_CACHE_CONTROL`. (75331b5030)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.6.0` · 2026-04-14 · [upstream release](https://github.com/google/guava/releases/tag/v33.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
