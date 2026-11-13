---
title: "gson gson-parent-2.10.1"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.10.1"
published: "2023-01-06"
type: "release"
lang: "en"
summary: "This is technically a minor release rather than a patch release because there is one small API change: a new JsonObject.isEmpty() method."
---

# gson gson-parent-2.10.1

This is technically a minor release rather than a patch release because there is one small API change: a new `JsonObject.isEmpty()` method.

## What's Changed: User-Visible Changes
* _Added JsonObject method isEmpty()_ by @dhoard in https://github.com/google/gson/pull/2233
* _Fix non-threadsafe creation of adapter for type with cyclic dependency_ by @Marcono1234 in https://github.com/google/gson/pull/1832
* _Remove EOFException special casing of JsonStreamParser.next()_ by @Marcono1234 in https://github.com/google/gson/pull/2281
* _Improve exception message for duplicate field names_ by @Marcono1234 in https://github.com/google/gson/pull/2251
* _Fix the javadoc of JsonDeserializer.deserialize()_ by @MaicolAntali in https://github.com/google/gson/pull/2243
* _Bump os-maven-plugin from 1.7.0 to 1.7.1_ by @dependabot in https://github.com/google/gson/pull/2235
* _Bump jackson-databind from 2.13.4.2 to 2.14.0_ by @dependabot in https://github.com/google/gson/pull/2234
* _Bump maven-release-plugin from 3.0.0-M6 to 3.0.0-M7_ by @dependabot in https://github.com/google/gson/pull/2232
* _Bump japicmp-maven-plugin from 0.16.0 to 0.17.1_ by @dependabot in https://github.com/google/gson/pull/2238
* _Bump jackson-databind from 2.14.0 to 2.14.1_ by @dependabot in https://github.com/google/gson/pull/2241
* _Bump bnd-maven-plugin from 6.3.1 to 6.4.0_ by @dependabot in https://github.com/google/gson/pull/2245

## Site Documentation and Maintenance Changes (these were already visible)
* _Add troubleshooting guide_ by @Marcono1234 in https://github.com/google/gson/pull/2285
* _Replace custom user guide header anchors_ by @Marcono1234 in https://github.com/google/gson/pull/2289
* _Improve variable names in user guide_ by @Marcono1234 in https://github.com/google/gson/pull/2290
* _Add 2.10 changes to CHANGELOG; minor release follow-ups_ by @Marcono1234 in https://github.com/google/gson/pull/2229
* _Mention in CHANGELOG that GitHub Releases are used in the future_ by @Marcono1234 in https://github.com/google/gson/pull/2230
* _GitHub Workflows security hardening_ by @sashashura in https://github.com/google/gson/pull/2274

## Other Changes
* _Making consistent prefixs in PerformanceTest_ by @CirQ in https://github.com/google/gson/pull/1760
* _Adjust version numbers and a test to conform to the SemVer spec._ by @eamonnmcmanus in https://github.com/google/gson/pull/2237
* _Remove covered condition in JsonNull.equals()_ by @MaicolAntali in https://github.com/google/gson/pull/2271
* _Remove the `final` keyword from `private` method_ by @MaicolAntali in https://github.com/google/gson/pull/2276
* _Code cleanup_ by @MaicolAntali in https://github.com/google/gson/pull/2282
* _Unnecessary unboxing at JsonPrimitive.getAsBoolean()_ by @MaicolAntali in https://github.com/google/gson/pull/2277
* _Rewrite the `testParsingDatesFormattedWithSystemLocale()`, Fix #2199_ by @MaicolAntali in https://github.com/google/gson/pull/2287
* _Port tests from JUnit 3 to JUnit 4_ by @MaicolAntali in https://github.com/google/gson/pull/2294

## New Contributors (thanks!)
* @CirQ made their first contribution in https://github.com/google/gson/pull/1760
* @dhoard made their first contribution in https://github.com/google/gson/pull/2233
* @MaicolAntali made their first contribution in https://github.com/google/gson/pull/2243
* @sashashura made their first contribution in https://github.com/google/gson/pull/2274

**Full Changelog**: https://github.com/google/gson/compare/gson-parent-2.10...gson-parent-2.10.1

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.10.1` · 2023-01-06 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.10.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
