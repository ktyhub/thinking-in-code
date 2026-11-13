---
title: "gson gson-parent-2.12.0"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.12.0"
published: "2025-01-27"
type: "release"
lang: "en"
summary: "The biggest change is that we no longer support Java 7. People who still need to run on Java 7 will need to use an earlier version of Gson."
---

# gson gson-parent-2.12.0

## What's Changed

The biggest change is that we no longer support Java 7. People who still need to run on Java 7 will need to use an earlier version of Gson.

Other changes:
* Allow registering adapters for `JsonElement` again by @Marcono1234 in https://github.com/google/gson/pull/2789
* Add nesting limit for `JsonReader` by @Marcono1234 in https://github.com/google/gson/pull/2588
* Add `@CheckReturnValue` to our packages. by @cpovirk in https://github.com/google/gson/pull/2693
* Add NullSafeTypeAdapter to prevent TypeAdapter.nullSafe() from returning nested null-safe type adapters (#2729) by @lyubomyr-shaydariv in https://github.com/google/gson/pull/2731
* Support Properties subclasses in GsonTypes.getMapKeyAndValueTypes by @panic08 in https://github.com/google/gson/pull/2758
* Enforce rawType to be a Class in ParameterizedTypeImpl by @panic08 in https://github.com/google/gson/pull/2759
* Remove `AccessController` usage for enum adapter by @Marcono1234 in https://github.com/google/gson/pull/2704
* Fix typeArguments array not being cloned when resolving ParameterizedType with changed owner by @TBlueF in https://github.com/google/gson/pull/2706
* Remove duplicated declaration of required OSGi execution environment by @HannesWell in https://github.com/google/gson/pull/2711
* Move bnd.bnd file configuration into 'bnd' element of bnd-maven-plugin by @HannesWell in https://github.com/google/gson/pull/2712
* Move enum and `JsonElement` adapter classes to separate class files by @Marcono1234 in https://github.com/google/gson/pull/2727
* EnumTypeAdapter constructor optimization by @esaulpaugh in https://github.com/google/gson/pull/2734
* OSGi / bnd: Remove the self-Import of gson.annotations by @chrisrueger in https://github.com/google/gson/pull/2735

## New Contributors
* @cpovirk made their first contribution in https://github.com/google/gson/pull/2693
* @jabagawee made their first contribution in https://github.com/google/gson/pull/2701
* @TBlueF made their first contribution in https://github.com/google/gson/pull/2706
* @HannesWell made their first contribution in https://github.com/google/gson/pull/2711
* @esaulpaugh made their first contribution in https://github.com/google/gson/pull/2734
* @chrisrueger made their first contribution in https://github.com/google/gson/pull/2735
* @panic08 made their first contribution in https://github.com/google/gson/pull/2756

**Full Changelog**: https://github.com/google/gson/compare/gson-parent-2.11.0...gson-parent-2.12.0

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.12.0` · 2025-01-27 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
