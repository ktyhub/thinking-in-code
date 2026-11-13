---
title: "gradle v9.8.1"
project: "gradle"
repo: "gradle/gradle"
tag: "v9.8.1"
published: "2026-10-07"
type: "patch"
lang: "en"
summary: "This is a patch release for Gradle 9.8.0. We recommend using 9.8.1 instead of 9.8.0."
---

# gradle v9.8.1

This is a patch release for Gradle 9.8.0. We recommend using 9.8.1 instead of 9.8.0.

This release addresses three high rated vulnerabilities:

- [Unauthenticated worker-to-daemon channel deserializes untrusted Java objects](https://github.com/gradle/gradle/security/advisories/GHSA-mvvg-497x-hmj8)
- [Deserialization of untrusted Java objects before authentication in the client - daemon communication](https://github.com/gradle/gradle/security/advisories/GHSA-xwqc-3h47-hg64)
- [Failure to disable repositories failing to establish an SSL connection can expose builds to malicious artifacts](https://github.com/gradle/gradle/security/advisories/GHSA-j5m7-59rp-24f5)

The following issues were resolved:

- [Gradle 9.8.0 complains again about invalid Toolchains on Debian / Ubuntu packaged systems]- (https://github.com/gradle/gradle/issues/39358)
- [Gradle 9.8.0 removes root java.util.logging handlers installed by a custom LogManager (breaks Quarkus test log capture)](https://github.com/gradle/gradle/issues/39359)
- [Dependency resolution regression](https://github.com/gradle/gradle/issues/39365)

[Read the Release Notes](https://docs.gradle.org/9.8.1/release-notes.html)

We would like to thank the following community members for their contributions to this release of Gradle:
[Aman Gautam](https://github.com/Gautam-aman),
[Björn Kautler](https://github.com/Vampire),
[Eng Zer Jun](https://github.com/Juneezee),
[Hashim Khan](https://github.com/Hashim1999164),
[Julian Krannich](https://github.com/jkrannich),
[KBS](https://github.com/youdie006),
[Labh R Jethe](https://github.com/itsCodeTide),
[Mark Dodgson](https://github.com/doddi),
[Maxim](https://github.com/kroune),
[monkey](https://github.com/Develop-KIM),
[nataphon-ktsystems](https://github.com/nataphon-ktsystems),
[Paul King](https://github.com/paulk-asert),
[Qiu Tian](https://github.com/qiu-tiandev),
[rg_sandesh](https://github.com/sandeshgorde),
[Roberto Perez Alcolea](https://github.com/rpalcolea),
[Sean](https://github.com/seanxuu),
[Zongle Wang](https://github.com/Goooler).

## Upgrade instructions
Switch your build to use Gradle 9.8.1 by updating your wrapper:
```
./gradlew :wrapper --gradle-version=9.8.1 && ./gradlew :wrapper
```
See the Gradle [9.x upgrade guide](https://docs.gradle.org/9.8.1/userguide/upgrading_version_9.html) to learn about deprecations, breaking changes and other considerations when upgrading.

For Java, Groovy, Kotlin and Android compatibility, see the [full compatibility notes](https://docs.gradle.org/9.8.1/userguide/compatibility.html).

## Reporting problems

If you find a problem with this release, please file a bug on [GitHub Issues](https://github.com/gradle/gradle/issues) adhering to our issue guidelines.
If you're not sure you're encountering a bug, please use the [forum](https://discuss.gradle.org/c/help-discuss).

We hope you will build happiness with Gradle, and we look forward to your feedback via [Twitter](https://twitter.com/gradle) or on [GitHub](https://github.com/gradle).

---

> **Source** [gradle/gradle](https://github.com/gradle/gradle) · `v9.8.1` · 2026-10-07 · [upstream release](https://github.com/gradle/gradle/releases/tag/v9.8.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
