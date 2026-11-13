---
title: "guava v33.8.0"
project: "guava"
repo: "google/guava"
tag: "v33.8.0"
published: "2026-11-02"
type: "minor"
lang: "en"
summary: "com.google.guava guava 33.8.0-jre 33.8.0-android"
---

# guava v33.8.0

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.8.0-jre</version>
  <!-- or, for Android: -->
  <version>33.8.0-android</version>
</dependency>
```

### Jar files

-   [33.8.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.8.0-jre/guava-33.8.0-jre.jar)
-   [33.8.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.8.0-android/guava-33.8.0-android.jar)

Guava requires [one runtime dependency](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies), which you can download here:

-   [failureaccess-1.0.3.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.3/failureaccess-1.0.3.jar)

### Javadoc

-   [33.8.0-jre](https://guava.dev/releases/33.8.0-jre/api/docs/)
-   [33.8.0-android](https://guava.dev/releases/33.8.0-android/api/docs/)

### JDiff

-   [33.8.0-jre vs. 33.7.2-jre](https://guava.dev/releases/33.8.0-jre/api/diffs/)
-   [33.8.0-android vs. 33.7.2-android](https://guava.dev/releases/33.8.0-android/api/diffs/)
-   [33.8.0-android vs. 33.8.0-jre](https://guava.dev/releases/33.8.0-android/api/androiddiffs/)

### Changelog  

- `collect`: Enhanced `HashBiMap` and `LinkedHashMultimap.ValueSet` to [defend against hash flooding](https://github.com/google/guava/security/advisories/GHSA-v5x9-67m3-7m56) (forthcoming [CVE-2026-118042](https://nvd.nist.gov/vuln/detail/cve-2026-118042)). (7cd44b3506)
- `collect`: Accidentally changed a few methods in `ForwardingMap.StandardValues` to be `final`. No Google-internal or [GitHub-public](https://github.com/search?q=%22com.google.common.collect%22+%2F%28%3F-i%29%5CbStandardValues%5Cb%2F+path%3A.java+NOT+path%3AForwardingMap+NOT+path%3Ahtml+NOT+path%3Acom%2Fgoogle%2Fcommon&type=code) code appears to be affected, but we will [fix this](https://github.com/google/guava/commit/592a1e6bf8b3370dde28e778931ccdf5242b1d0c) in the next release. If it causes you problems, [let us know](https://github.com/google/guava/issues/new?template=BLANK_ISSUE).
- `net`: Added `MediaType.APPLICATION_GZIP` (`application/gzip`) to be used in preference to `GZIP` (`application/x-gzip`). (6393ebbdb6)
- `primitives`: Added `Doubles.MIN_POSITIVE_VALUE` and `Floats.MIN_POSITIVE_VALUE` as more clearly named aliases for `Double.MIN_VALUE` and `Float.MIN_VALUE`. (adf5554e7e)
- `testlib`: Added `AbstractClassInitializationTest`. (80fd5c114d)
- and, among the usual changes, a larger than usual number of small fixes (4afb1e04a4246c261be4742e1f2e2c39ebaf6266, 79152348ece2de85559eb2eb18133862d492c892, a279b884fe9890a3869142919352156f2a67a705, 786bb1a9b44685875ebe7b83f1404a1f07ac653c, 6b3a8d7498a7fde122967ba37a023ba3dcb47792, de57a419b56bcd887f51bb99103d91c65b7c5e86, fa64cc7c2b320aca9219981952bbb544f8f6ccff, 7b64964048948de3b5633a75d6e64f98cf8fcece, 5ae56d77e64305752b919ff2c96713f47ac0c94c, 37535d73f0416f30e0301efe61a8eb8ede44c1b7, ca8aedb2fdaf40fd6937a0643180aea51ca4154e, c0a8a1edc69393e8141424037571d9825f5fc0f4, 51246d06bb85ccc182a0aeb6a7adcbd55f759ae5, 81c7d030f8f144a4885ccf8efdc72c92605b4eec, 2b86a8216627a807ce8520abc6ae55437dbb85fb, 669a232b4e20ae6e8bc6efc62caaf2f830d56327, b157643c41f9ee6a38732b4fa1a590ba187912d9, ad73fbb9beff220aa26390630724855ef92fc50b, 1e6eb68f2ee8dc6cb164c285f7fe6ad5e8bc0905, 3d5be86651ec58b3f9d15c76cf888ade15aba39b)

---

> **Source** [google/guava](https://github.com/google/guava) · `v33.8.0` · 2026-11-02 · [upstream release](https://github.com/google/guava/releases/tag/v33.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
