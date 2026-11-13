---
title: "gson gson-parent-2.9.0"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.9.0"
published: "2022-02-11"
type: "release"
lang: "en"
summary: "The minimum supported Java version changes from 6 to 7."
---

# gson gson-parent-2.9.0

**The minimum supported Java version changes from 6 to 7.**

* Change target Java version to 7 (#2043)
* Put `module-info.class` into Multi-Release JAR folder (#2013)
* Improve error message when abstract class cannot be constructed (#1814)
* Support EnumMap deserialization (#2071)
* Add LazilyParsedNumber default adapter (#2060)
* Fix JsonReader.hasNext() returning true at end of document (#2061)
* Remove Gradle build support. Build script was outdated and not actively maintained anymore (#2063)
* Add `GsonBuilder.disableJdkUnsafe()` (#1904)
* Add `UPPER_CASE_WITH_UNDERSCORES` in FieldNamingPolicy (#2024)
* Fix failing to serialize Collection or Map with inaccessible constructor (#1902)
* Improve TreeTypeAdapter thread-safety (#1976)
* Fix `Gson.newJsonWriter` ignoring lenient and HTML-safe setting (#1989)
* Delete unused LinkedHashTreeMap (#1992)
* Make default adapters stricter; improve exception messages (#2000)
* Fix `FieldNamingPolicy.upperCaseFirstLetter` uppercasing non-letter (#2004)

Thanks to our contributors, especially @Marcono1234!

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.9.0` · 2022-02-11 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
