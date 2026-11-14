---
title: "gson gson-parent-2.13.0"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.13.0"
published: "2025-04-11"
type: "release"
lang: "en"
summary: "A bug in deserializing collections has been fixed. Previously, if you did something like this"
---

# gson gson-parent-2.13.0

## What's Changed

* A bug in deserializing collections has been fixed. Previously, if you did something like this:
  ```
  gson.fromJson(jsonString, new TypeToken<ImmutableList<String>>() {})
  ```
  then the inferred type would be `ImmutableList<String>`, but Gson actually gave you an `ArrayList<String>`. Usually that would lead to an immediate `ClassCastException`, but in some circumstances the code might sometimes succeed despite the wrong type. Now you will see an exception like this:
  ```
  com.google.gson.JsonIOException: Abstract classes can't be instantiated!
  Adjust the R8 configuration or register an InstanceCreator or a TypeAdapter for this type.
  Class name: com.google.common.collect.ImmutableList
  ```
  because Gson now really is trying to create an `ImmutableList` through its constructor, but that isn't possible.
  Either change the requested type (in the `TypeToken`) to `List<String>`, or register a `TypeAdapter` or `JsonDeserializer` for `ImmutableList`.

* The internal classes `$Gson$Types` and `$Gson$Preconditions` have been renamed to remove the `$` characters. Since these are internal classes (as signaled not only by the package name but by the `$` characters), client code should not be affected. If your code _was_ depending on these classes then we suggest making a copy of the class (subject to the [license](https://www.apache.org/licenses/LICENSE-2.0)) rather than depending on the new names.

**Full Changelog**: https://github.com/google/gson/compare/gson-parent-2.12.1...gson-parent-2.13.0

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.13.0` · 2025-04-11 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
