---
title: "gson gson-parent-2.10"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.10"
published: "2022-10-25"
type: "release"
lang: "en"
summary: "Support for serializing and deserializing Java records, on Java ≥ 16. (#2201) · Add JsonArray.asList and JsonObject.asMap view methods (#2225)"
---

# gson gson-parent-2.10

## Most important changes

* Support for serializing and deserializing Java records, on Java ≥ 16. (#2201)

* Add `JsonArray.asList` and `JsonObject.asMap` view methods (#2225)

* Fix `TypeAdapterRuntimeTypeWrapper` not detecting reflective `TreeTypeAdapter` and `FutureTypeAdapter` (#1787)

* Improve `JsonReader.skipValue()` (#2062)

* Perform numeric conversion for primitive numeric type adapters (#2158)

* Add `Gson.fromJson(..., TypeToken)` overloads (#1700)

* Fix changes to `GsonBuilder` affecting existing `Gson` instances (#1815)

* Make `JsonElement` conversion methods more consistent and fix javadoc (#2178)

* Throw `UnsupportedOperationException` when `JsonWriter.jsonValue` is not supported (#1651)

* Disallow `JsonObject` `Entry.setValue(null)` (#2167)

* Fix `TypeAdapter.toJson` throwing AssertionError for custom IOException (#2172)

* Convert null to JsonNull for `JsonArray.set` (#2170)

* Fixed nullSafe usage. (#1555)

* Validate `TypeToken.getParameterized` arguments (#2166)

* Fix #1702: Gson.toJson creates CharSequence which does not implement toString (#1703)

* Prefer existing adapter for concurrent `Gson.getAdapter` calls (#2153)

* Improve `ArrayTypeAdapter` for `Object[]` (#1716)

* Improve `AppendableWriter` performance (#1706)

## List of all changes

* Improve AppendableWriter performance by @Marcono1234 in https://github.com/google/gson/pull/1706
* Improve ArrayTypeAdapter for Object[] by @Marcono1234 in https://github.com/google/gson/pull/1716
* Prefer existing adapter for concurrent `Gson.getAdapter` calls by @Marcono1234 in https://github.com/google/gson/pull/2153
* Fix #1702: Gson.toJson creates CharSequence which does not implement toString by @Marcono1234 in https://github.com/google/gson/pull/1703
* Deprecate JsonElement constructor by @Marcono1234 in https://github.com/google/gson/pull/1761
* Validate `TypeToken.getParameterized` arguments by @Marcono1234 in https://github.com/google/gson/pull/2166
* Fixed nullSafe usage. by @bufistov in https://github.com/google/gson/pull/1555
* Convert null to JsonNull for `JsonArray.set` by @Marcono1234 in https://github.com/google/gson/pull/2170
* Clarify that `GsonBuilder.setExclusionStrategies` does not replace existing ones by @Marcono1234 in https://github.com/google/gson/pull/2168
* Fix typo by @JamesZBL in https://github.com/google/gson/pull/1246
* Remove not needed .gitattributes file by @Marcono1234 in https://github.com/google/gson/pull/1862
* Improve InternationalizationTest by @Marcono1234 in https://github.com/google/gson/pull/1705
* Fix JsonWriter documentation regarding top-level value by @Marcono1234 in https://github.com/google/gson/pull/1766
* Fix JsonTreeReader throwing wrong exception type for non-finite doubles by @Marcono1234 in https://github.com/google/gson/pull/1782
* Clarify doc about non-finite numbers for non-lenient JsonReader by @Marcono1234 in https://github.com/google/gson/pull/1723
* Fix `TypeAdapter.toJson` throwing AssertionError for custom IOException by @Marcono1234 in https://github.com/google/gson/pull/2172
* Add test for JsonArray.isEmpty() by @LorenzNickel in https://github.com/google/gson/pull/2173
* Disallow `JsonObject` `Entry.setValue(null)` by @Marcono1234 in https://github.com/google/gson/pull/2167
* Improve GsonTest.testGetAdapter_Concurrency by @Marcono1234 in https://github.com/google/gson/pull/2177
* Add null checks for GsonBuilder methods by @Marcono1234 in https://github.com/google/gson/pull/2179
* Throw UnsupportedOperationException when JsonWriter.jsonValue is not supported by @Marcono1234 in https://github.com/google/gson/pull/1651
* Make JsonElement conversion methods more consistent and fix javadoc by @Marcono1234 in https://github.com/google/gson/pull/2178
* Bump maven-javadoc-plugin from 3.4.0 to 3.4.1 by @dependabot in https://github.com/google/gson/pull/2175
* Add tests checking GsonBuilder not affecting existing Gson instances by @Marcono1234 in https://github.com/google/gson/pull/1815
* Fix  #1697: Mention that GsonBuilder.registerTypeAdapter makes (de-)serializers null-safe by @Marcono1234 in https://github.com/google/gson/pull/1704
* Replace `$Gson$Preconditions.checkNotNull` with `Objects.requireNonNull` by @Marcono1234 in https://github.com/google/gson/pull/2180
* Verify that JsonTreeReader and JsonTreeWriter override all methods by @Marcono1234 in https://github.com/google/gson/pull/2181
* Fail Maven build on compiler warnings; remove some warning suppressions by @Marcono1234 in https://github.com/google/gson/pull/2183
* Add GitHub workflow for checking API compatibility by @Marcono1234 in https://github.com/google/gson/pull/2182
* Bump japicmp-maven-plugin from 0.15.7 to 0.16.0 by @dependabot in https://github.com/google/gson/pull/2187
* Bump jackson-databind from 2.13.3 to 2.13.4 by @dependabot in https://github.com/google/gson/pull/2191
* Remove usage of oss-parent Maven parent and update `ReleaseProcess.md` by @Marcono1234 in https://github.com/google/gson/pull/2159
* Improve documentation by @Marcono1234 in https://github.com/google/gson/pull/2193
* updated JsonDeserializer example by @deeptimarrivada1 in https://github.com/google/gson/pull/2192
* Add Gson.fromJson(..., TypeToken) overloads by @Marcono1234 in https://github.com/google/gson/pull/1700
* Bump maven-jar-plugin from 3.2.2 to 3.3.0 by @dependabot in https://github.com/google/gson/pull/2195
* Build on JDK 17 as well as 11. by @eamonnmcmanus in https://github.com/google/gson/pull/2198
* Fix incorrect HTML headings in Javadoc by @Marcono1234 in https://github.com/google/gson/pull/2200
* Add a currently-failing test for Java records and `@Ignore` it. by @eamonnmcmanus in https://github.com/google/gson/pull/2203
* Follow-up for record test build changes by @Marcono1234 in https://github.com/google/gson/pull/2207
* Disable Maven transfer progress for GitHub workflows by @Marcono1234 in https://github.com/google/gson/pull/2206
* Only create one UnsafeAllocator instance by @kb-1000 in https://github.com/google/gson/pull/2196
* Mention in User Guide alternative for Gson versions without fromJson(..., TypeToken) by @Marcono1234 in https://github.com/google/gson/pull/2209
* Fix typo in GsonBuilder Javadoc by @BillyGalbreath in https://github.com/google/gson/pull/2213
* Add Javadoc `@since` tags for previously added elements by @Marcono1234 in https://github.com/google/gson/pull/2211
* Improve versioning support documentation and validate version by @Marcono1234 in https://github.com/google/gson/pull/2214
* Perform numeric conversion for primitive numeric type adapters by @Marcono1234 in https://github.com/google/gson/pull/2158
* Clarify in documentation that Gson might cache strategy results by @Marcono1234 in https://github.com/google/gson/pull/2215
* Improve `JsonReader.skipValue()` by @Marcono1234 in https://github.com/google/gson/pull/2062
* Fix TypeAdapterRuntimeTypeWrapper not detecting reflective TreeTypeAdapter and FutureTypeAdapter by @Marcono1234 in https://github.com/google/gson/pull/1787
* Support Java Records when present in JVM. by @staale in https://github.com/google/gson/pull/2201
* Small adjustments to the new record code. by @eamonnmcmanus in https://github.com/google/gson/pull/2219
* Bump jackson-databind from 2.13.4 to 2.13.4.1 by @dependabot in https://github.com/google/gson/pull/2222
* Bump jackson-databind from 2.13.4.1 to 2.13.4.2 by @dependabot in https://github.com/google/gson/pull/2223
* Add `JsonArray.asList` and `JsonObject.asMap` view methods by @Marcono1234 in https://github.com/google/gson/pull/2225
* Adjust Record adapter and extend test coverage by @Marcono1234 in https://github.com/google/gson/pull/2224
* Small tweaks to fix Error Prone warnings. by @eamonnmcmanus in https://github.com/google/gson/pull/2227
* Automatically replace version references on `release:prepare` by @Marcono1234 in https://github.com/google/gson/pull/2212
* Revise the version regex in `GsonVersionDiagnosticsTest`. by @eamonnmcmanus in https://github.com/google/gson/pull/2228

## New Contributors
* @bufistov made their first contribution in https://github.com/google/gson/pull/1555
* @JamesZBL made their first contribution in https://github.com/google/gson/pull/1246
* @xtay2 made their first contribution in https://github.com/google/gson/pull/2169
* @deeptimarrivada1 made their first contribution in https://github.com/google/gson/pull/2192
* @kb-1000 made their first contribution in https://github.com/google/gson/pull/2196
* @BillyGalbreath made their first contribution in https://github.com/google/gson/pull/2213
* @staale made their first contribution in https://github.com/google/gson/pull/2201

**Full Changelog**: https://github.com/google/gson/compare/gson-parent-2.9.1...gson-parent-2.10

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.10` · 2022-10-25 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
