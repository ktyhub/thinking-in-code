---
title: "gradle v9.9.0-RC1"
project: "gradle"
repo: "gradle/gradle"
tag: "v9.9.0-RC1"
published: "2026-10-30"
type: "minor"
lang: "en"
summary: "The Gradle team is excited to announce Gradle 9.9.0 RC1."
---

# gradle v9.9.0-RC1

The Gradle team is excited to announce Gradle 9.9.0 RC1.

Here are the highlights of this release:

 - Performance improvements for Kotlin DSL compilation
 - Test filtering for non-method JUnit Platform tests
 - Wrapper settings preserved on upgrade
 - Predefined groups in the Problems API

[Read the Release Notes](https://docs.gradle.org/9.9.0-rc-1/release-notes.html)

We would like to thank the following community members for their contributions to this release of Gradle:
[devareddy05](https://github.com/devareddy05),
[DragonFSKY](https://github.com/DragonFSKY),
[fru1tworld](https://github.com/fru1tworld),
[Ivan Khanas](https://github.com/ikxeno),
[Jeremy Schoemaker](https://github.com/shoemoney),
[John Burns](https://github.com/wakingrufus),
[Labh R Jethe](https://github.com/itsCodeTide),
[monkey](https://github.com/Develop-KIM),
[Nelson Osacky](https://github.com/runningcode),
[Roberto Perez Alcolea](https://github.com/rpalcolea),
[Róbert Papp](https://github.com/TWiStErRob),
[SeungTaek Lim](https://github.com/namest504),
[Stefan Oehme](https://github.com/oehme),
[万彬宇](https://github.com/Wanbinyu),
[한의준](https://github.com/exijn).

## Upgrade instructions
Switch your build to use Gradle 9.9.0 RC1 by updating your wrapper:
```
./gradlew :wrapper --gradle-version=9.9.0-rc-1 && ./gradlew :wrapper
```
See the Gradle [9.x upgrade guide](https://docs.gradle.org/9.9.0-rc-1/userguide/upgrading_version_9.html) to learn about deprecations, breaking changes and other considerations when upgrading.

For Java, Groovy, Kotlin and Android compatibility, see the [full compatibility notes](https://docs.gradle.org/9.9.0-rc-1/userguide/compatibility.html).

## Reporting problems

If you find a problem with this release, please file a bug on [GitHub Issues](https://github.com/gradle/gradle/issues) adhering to our issue guidelines.
If you're not sure you're encountering a bug, please use the [forum](https://discuss.gradle.org/c/help-discuss).

We hope you will build happiness with Gradle, and we look forward to your feedback via [Twitter](https://twitter.com/gradle) or on [GitHub](https://github.com/gradle).

---

> **Source** [gradle/gradle](https://github.com/gradle/gradle) · `v9.9.0-RC1` · 2026-10-30 · [upstream release](https://github.com/gradle/gradle/releases/tag/v9.9.0-RC1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
