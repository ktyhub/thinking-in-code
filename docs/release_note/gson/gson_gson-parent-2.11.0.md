---
title: "gson gson-parent-2.11.0"
project: "gson"
repo: "google/gson"
tag: "gson-parent-2.11.0"
published: "2024-05-20"
type: "release"
lang: "en"
summary: "If you are using ProGuard or R8 (for example for Android projects) you might not need any special Gson configuration anymore if your classes have a no-args constructor and use @SerializedName for their fields."
---

# gson gson-parent-2.11.0

# Most important changes

- Added default ProGuard / R8 rules (@Marcono1234, #2397, #2420; @sgjesse, #2448; @sfreilich)\
If you are using ProGuard or R8 (for example for Android projects) you might not need any special Gson configuration anymore if your classes have a no-args constructor and use `@SerializedName` for their fields.
- On Android, Gson now requires API level 21 or newer
- Added new `Strictness` API (@marten-voorberg & fellow students, #2437)\
Some of Gson's API is still lenient by default, but you can now use the newly added methods `GsonBuilder#setStrictness`, `JsonReader#setStrictness` and `JsonWriter#setStrictness` with `Strictness.STRICT` to override this behavior and to instead strictly adhere to the JSON specification when parsing.
- New `FormattingStyle` class to allow configuring line breaks in JSON output (@mihnita, #2231)\
Can be set using `GsonBuilder#setFormattingStyle` and `JsonWriter#setFormattingStyle`.
- `TypeToken` can no longer capture type variables by default (@Marcono1234, #2376)\
This was previously a common source of issues. The newly thrown exception refers to a [Troubleshooting Guide article](https://github.com/google/gson/blob/main/Troubleshooting.md#typetoken-type-variable) which explains this in more detail and provides suggestions for updating affected code.
- Added serialization support for anonymous and local classes with a custom adapter (@Marcono1234, #2498)\
This affects for example `List` implementations returned by libraries such as Guava which are implemented as anonymous class, which were previously serialized as `null`. Anonymous and local classes without custom adapter will still be serialized as `null`.
- Added dependency on `com.google.errorprone:error_prone_annotations`\
Your project can use Maven or Gradle dependency exclusions to remove the transitive error_prone_annotations dependency from Gson. Or if you are manually maintaining dependencies as JARs in your project you can omit error_prone_annotations. And it should still work correctly.\
But Gson itself does declare it as a required dependency, and if you don't perform any custom configuration, then Maven or Gradle will by default try to download and use it.
- Many exception messages now refer to the [Troubleshooting Guide](https://github.com/google/gson/blob/main/Troubleshooting.md) (@Marcono1234, #2357)\
Feedback regarding the Troubleshooting Guide is appreciated!
- Officially documented that JVM languages other than Java might not be fully supported, see the [README](https://github.com/google/gson/blob/main/README.md).
- Guarantee that `JsonElement#toString` produces JSON output (@Marcono1234, #2659)

# Other changes

## Bug fixes

- Fixed incorrect `JsonPrimitive#equals` results for large `BigInteger` values (@MaicolAntali, #2311)
- Fixed incorrect `JsonPrimitive#equals` results for large `BigDecimal` values (@MaicolAntali, #2364)
- Fixed `JsonReader` throwing `NumberFormatException` instead of `MalformedJsonException` for malformed Unicode escape sequences (@MaicolAntali, #2337)
- Fixed `TypeToken#getParameterized` returning bogus `ParameterizedType` for non-generic types (@Marcono1234, #2447)
- Fixed Java Record adapter not working for GraalVM Native Image (@eamonnmcmanus, #2465)
- Fixed `JsonWriter#name` not throwing exception when no JSON object is currently being written (@shivam-sehgal, #2475; @Marcono1234, #2476)
- Fixed `Gson#getDelegateAdapter` not working properly for `@JsonAdapter` (@Marcono1234, #2435)\
Note that `null` is now not allowed as `skipPast` value anymore, which was previously allowed but undocumented.
- Fixed `GsonBuilder` not rejecting type adapters for `Object` and `JsonElement`, whose default adapters cannot be overridden (@sachinp97; #2479)
- Fixed no limits being enforced when deserializing `BigDecimal` and `BigInteger` (@Marcono1234, #2510)\
The new limits prevent potential performance problems when user code uses the deserialized numbers. Gson itself was and is not affected by these performance problems. The limits should be high enough to not cause issues for most use cases, but feedback is appreciated.
- Fixed `GsonBuilder#setDateFormat` not rejecting invalid date formats (@Carpe-Wang, #2538)
- Fixed `GsonBuilder#setDateFormat` not rejecting invalid date styles (@Marcono1234, #2545)
- Fixed `GsonBuilder#setDateFormat` ignoring partial DEFAULT style (@Marcono1234, #2556)
- Fixed `TypeToken#isAssignableFrom` throwing `AssertionError` in some cases (@Marcono1234, #2544)
- Fixed date adapters not restoring time zone after parsing (@Carpe-Wang, #2549)
- Fixed `TypeToken#equals` erroneously returning `false` for equal generic type parameters in some cases (@d-william, #2599)
- Fixed incorrect inherited URLs in `pom.xml` (@Marcono1234, #2351)

## Performance improvements

- Slightly reduce memory usage for reflection-based adapter (@sembseth, #2325; @Marcono1234, #2440)
- Improved parsing speed of `ToNumberPolicy#LONG_OR_DOUBLE` (@ctasada, #2674)

## Gson maintenance

- Changed many unit tests to use Truth instead of JUnit for assertions (@MaicolAntali, #2299, #2304)
- Configured Error Prone to automatically check for bugs when compiling (@MaicolAntali, #2308)
- Simplified expected exception handling in tests (@elevne, #2454)
- Added integration test for GraalVM Native Image (@Marcono1234, #2466)
- Formatted the code according to the Google Style Guide & configured Spotless (@MaicolAntali, #2531, #2537)
- Made Maven build reproducible (@Marcono1234, #2543)
- Removed internal `DateTypeAdapter` class to reduce code duplication (@Marcono1234, #2546)
- Dependencies and plugins updated by Dependabot

## GitHub repository

- Renamed default branch from `master` to `main`
- [GitHub Discussions](https://github.com/google/gson/discussions) have been enabled\
For questions, ideas, tips...
- Added GitHub pull request template (@Marcono1234, #2326)
- Added check for Android API compatibility (@Marcono1234, #2431)

## Other

- Added `@CanIgnoreReturnValue` as appropriate to Gson methods (@eamonnmcmanus, #2369)\
This is useful if you enable Error Prone's `CheckReturnValue` in your project when compiling, however Gson itself does not enable this by default.
- Various documentation and test improvements and typo fixes (@False-Mask; @avimathur009; @elevne; @0o001; @Codegass; @33nya)

----

Many thanks to @Marcono1234 for drafting these release notes.

---

> **Source** [google/gson](https://github.com/google/gson) · `gson-parent-2.11.0` · 2024-05-20 · [upstream release](https://github.com/google/gson/releases/tag/gson-parent-2.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
