---
title: "gson gson-parent-2.14.0"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.14.0"
published: "2026-04-23"
type: "release"
lang: "en"
summary: "When the java.time API is available, Gson automatically can read and write instances of classes like Instant and Duration. The format it uses essentially freezes the JSON representation that ReflectiveTypeAdapterFactory…"
---

# gson gson-parent-2.14.0

## What's Changed

* Add type adapters for `java.time` classes by @eamonnmcmanus in https://github.com/google/gson/pull/2948

  When the `java.time` API is available, Gson automatically can read and write instances of classes like `Instant` and `Duration`. The format it uses essentially freezes the JSON representation that `ReflectiveTypeAdapterFactory` established by default, based on the private fields of `java.time` classes. That's not a great representation, but it is understandable. Changing it to anything else would break compatibility with systems that are expecting the current format.
  
  With this change, Gson no longer tries to access private fields of these classes using reflection. So it is no longer necessary to run with `--add-opens` for these classes on recent JDKs.
 
* Remove `com.google.gson.graph` by @eamonnmcmanus in https://github.com/google/gson/pull/2990.

  This package was not part of any released artifact and depended on Gson internals in potentially problematic ways.

* Validate that strings being parsed as integers consist of ASCII characters by @eamonnmcmanus in https://github.com/google/gson/pull/2995

  Previously, strings could contain non-ASCII Unicode digits and still be parsed as integers. That's inconsistent with how JSON numbers are treated.

* Fix duplicate key detection when first value is null by @andrewstellman in https://github.com/google/gson/pull/3006

  This could potentially break code that was relying on the incorrect behaviour. For example, this JSON string was previously accepted but will no longer be: `{"foo": null, "foo": bar}`.

* Remove `Serializable` from internal `Type` implementation classes. by @eamonnmcmanus in https://github.com/google/gson/pull/3011

  The nested classes `ParameterizedTypeImpl`, `GenericArrayTypeImpl`, and `WildcardTypeImpl` in `GsonTypes` are implementations of the corresponding types (without `Impl`) in `java.lang.reflect`. For some reason, they were serializable, even though the `java.lang.reflect` implementations are not. Having unnecessarily serializable classes could _conceivably_ have been a security problem if they were part of a larger exploit using serialization. (We do not consider this a likely scenario and do not suggest that you need to update Gson just to get this change.)

* Add `LegacyProtoTypeAdapterFactory`. by @eamonnmcmanus in https://github.com/google/gson/pull/3014

  This is not part of any released artifact, but may be of use when trying to fix code that is currently accessing the internals of protobuf classes via reflection.

* Make AppendableWriter do flush and close if delegation object supports by @MukjepScarlet in https://github.com/google/gson/pull/2925

## Other less visible changes  

* Add default capacity to EnumTypeAdapter maps by @MukjepScarlet in https://github.com/google/gson/pull/2959
* refactor: move derived adapters from Gson to TypeAdapters by @MukjepScarlet in https://github.com/google/gson/pull/2951
* Optimize `new Gson()` by @MukjepScarlet in https://github.com/google/gson/pull/2864



## New Contributors
* @ThirdGoddess made their first contribution in https://github.com/google/gson/pull/2944
* @lmj798 made their first contribution in https://github.com/google/gson/pull/2988
* @Eng-YasminKotb made their first contribution in https://github.com/google/gson/pull/3005
* @andrewstellman made their first contribution in https://github.com/google/gson/pull/3006

**Full Changelog**: https://github.com/google/gson/compare/gson-parent-2.13.2...gson-parent-2.14.0

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.14.0` · 2026-04-23 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
