---
title: "gson gson-parent-2.15.0"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.15.0"
published: "2026-10-24"
type: "release"
lang: "en"
summary: "These are some of the more important changes"
---

# gson gson-parent-2.15.0

## What's Changed

These are some of the more important changes

API addition:

* Add JsonReader.getCharacterOffset to track stream position by @barakhub in https://github.com/google/gson/pull/3102

Behaviour changes and bugfixes:

* Use LinkedHashMap as the default Map. by @eamonnmcmanus in https://github.com/google/gson/pull/3057
* Make `LazilyParsedNumber` implement `Comparable`. by @eamonnmcmanus in https://github.com/google/gson/pull/3076
* Only deserialize `InetAddress` from numeric IP addresses. by @eamonnmcmanus in https://github.com/google/gson/pull/3075
* Correct logic for BOM detection. by @eamonnmcmanus in https://github.com/google/gson/pull/3137
* fix: Include location info in NumberFormatException from JsonReader by @daguimu in https://github.com/google/gson/pull/3000
* Fix: peekNumber rejects some numerals like 2^64 + "0" by @ogolberg in https://github.com/google/gson/pull/3034
* Fix URI type adapter to preserve identity for non-ASCII URIs by @anishesg in https://github.com/google/gson/pull/3067
* Fix JsonPrimitive.hashCode to honor the equals/hashCode contract (#992) by @earfman in https://github.com/google/gson/pull/3059
* Reject non-ASCII digits in JsonTreeReader.nextInt/nextLong by @dong0713 in https://github.com/google/gson/pull/3063
* Include location in NumberFormatException thrown by JsonTreeReader by @dong0713 in https://github.com/google/gson/pull/3062
* Update JSON path after promoteNameToValue by @tanvir-ux in https://github.com/google/gson/pull/3098
* fix: reject unpaired surrogates in strict JSON by @rksharma-owg in https://github.com/google/gson/pull/3116
* Skip accessibility check in BoundField once it is known to have passed by @nileshpatil6 in https://github.com/google/gson/pull/3086
* Avoid quadratic removeIf in JsonArray list views by @ishu7w in https://github.com/google/gson/pull/3115
* Use the runtime type for a wildcard element type by @HuzaifaChaudary in https://github.com/google/gson/pull/3112


## New Contributors
* @daguimu made their first contribution in https://github.com/google/gson/pull/3000
* @anish-anantharaman made their first contribution in https://github.com/google/gson/pull/3025
* @adilburaksen made their first contribution in https://github.com/google/gson/pull/3027
* @ogolberg made their first contribution in https://github.com/google/gson/pull/3034
* @vasiliy-mikhailov made their first contribution in https://github.com/google/gson/pull/3038
* @mayokunyusuf made their first contribution in https://github.com/google/gson/pull/3061
* @arpitagarwal1301 made their first contribution in https://github.com/google/gson/pull/3065
* @anishesg made their first contribution in https://github.com/google/gson/pull/3067
* @earfman made their first contribution in https://github.com/google/gson/pull/3059
* @dong0713 made their first contribution in https://github.com/google/gson/pull/3063
* @nafisa1602 made their first contribution in https://github.com/google/gson/pull/3049
* @barakhub made their first contribution in https://github.com/google/gson/pull/3102
* @tanvir-ux made their first contribution in https://github.com/google/gson/pull/3098
* @rksharma-owg made their first contribution in https://github.com/google/gson/pull/3116
* @nileshpatil6 made their first contribution in https://github.com/google/gson/pull/3086
* @lllincoln made their first contribution in https://github.com/google/gson/pull/3046
* @Phhofm made their first contribution in https://github.com/google/gson/pull/1532
* @ishu7w made their first contribution in https://github.com/google/gson/pull/3115
* @HuzaifaChaudary made their first contribution in https://github.com/google/gson/pull/3112

**Full Changelog**: https://github.com/google/gson/compare/gson-parent-2.14.0...gson-parent-2.15.0

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.15.0` · 2026-10-24 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.15.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
