---
title: "graphql-java v26.0"
project: "graphql-java"
repo: "graphql-java/graphql-java"
tag: "v26.0"
published: "2026-04-23"
type: "major"
lang: "en"
summary: "This is the 26.0 release of graphql-java. Highlights are summarized below; the full list of merged PRs is at the end."
---

# graphql-java v26.0

This is the 26.0 release of graphql-java. Highlights are summarized below; the full list of merged PRs is at the end.

## ⚠️ Breaking Changes

### Query complexity limits are now enforced by default
New `QueryComplexityLimits` validation checks `maxDepth` (default **100**) and `maxFieldsCount` (default **100,000**) as part of standard validation. Queries exceeding these limits will now fail with new `MaxQueryDepthExceeded` / `MaxQueryFieldsExceeded` validation errors.

- Set custom limits via `GraphQLContext` using `QueryComplexityLimits.KEY`.
- Disable entirely with `QueryComplexityLimits.NONE`.

Introduced in #4256.

### Validation rule filtering API changed
In #4228 the rule-filter predicate changed from `Predicate<Class<?>>` to `Predicate<OperationValidationRule>` in `Validator.validateDocument(...)` and `ParseAndValidate.parseAndValidate(...)`. Callers that filtered by class (e.g. `rule -> rule != NoUnusedFragments.class`) must migrate to the enum (`rule -> rule != OperationValidationRule.NO_UNUSED_FRAGMENTS`). The `@Internal` classes `AbstractRule` and `RulesVisitor` were removed.

### Built-in directive handling consolidated (#4229)
- `DirectiveInfo` was removed. Replace usages:
  - `DirectiveInfo.isGraphqlSpecifiedDirective(...)` → `Directives.isBuiltInDirective(...)`
  - `DirectiveInfo.GRAPHQL_SPECIFICATION_DIRECTIVES` → `Directives.BUILT_IN_DIRECTIVES`
  - `DirectiveInfo.GRAPHQL_SPECIFICATION_DIRECTIVE_MAP` → `Directives.BUILT_IN_DIRECTIVES_MAP`
- Directive ordering is now consistent: all 7 built-in directives appear first, followed by user-defined directives.
- `GraphQLSchema.Builder.clearDirectives()` was initially removed then re-added in #4276 with new semantics — it clears all `additionalDirectives`, but built-in directives are always re-added automatically at build time.

### OneOf inhabitability validation (#4248)
New validator rejects OneOf input types that cannot be populated with a finite value (e.g. `input A @oneOf { a: A }`). Schemas that previously validated may now be rejected.

### Non-null field validation for code-built schemas (#4194)
Code-built schemas now perform the same deprecated-on-non-null field validation as SDL-built ones. Schemas relying on the gap may now fail validation.

### `GraphQLSchema.getCodeRegistry()` is no longer `@Nullable` (#4247)
The return type was incorrectly annotated nullable. Callers may now drop redundant null checks; downstream nullness tooling will reflect the change.

### JSpecify nullability annotations rolled out broadly
Waves 2 and 3 (#4184, #4274) plus many individual PRs annotated hundreds of classes across `graphql.analysis`, `graphql.execution`, `graphql.language`, `graphql.schema` and others with `@NullMarked`/`@NullUnmarked`/`@Nullable`. Kotlin and other null-aware callers will now see stricter nullability contracts; code that relied on previously-permissive signatures may need adjustment.

## ✨ New Features

- **`GraphQLSchema.FastBuilder`** (#4197) — a more restrictive but **~5× faster** schema builder that reduces both time and memory for large schemas.
- **Query complexity limits** (#4256) — depth/field-count guardrails baked into validation (see breaking changes above for the enforcement side).
- **`QueryAppliedDirective` on operations and documents** (#4297) — directives applied at the operation/document level are now exposed as `QueryAppliedDirective`s.
- **New instrumentation hook for post-exception-handling results** (#4206, #4207) — observe the `DataFetcherResult` after `DataFetcherExceptionHandler` has mapped exceptions to errors. `ChainedInstrumentation` delegates the new hook correctly.
- **Generic `DataFetcherResult.newBuilder(T data)`** (#4254) — removes the need for explicit type witnesses on the common `DataFetcherResult.<T>newResult().data(x)...` pattern.
- **Re-added `GraphQLSchema.Builder.clearDirectives()`** (#4276) — useful with `GraphQLSchema.transform` to rewrite non-built-in directives; built-ins are always re-added.
- **`toString()` on AST directives holders** (#4195).

## ⚡ Performance

- **Incremental `@defer` execution starts earlier** (#4174) — begins processing deferred payloads as soon as the first incremental call is detected instead of waiting for the initial result to complete.
- **Validation consolidation** (#4228) — all operation validation rules run in a single `OperationValidator` pass, significantly cutting validation overhead.
- **Reduced allocations on the execution hot path** (#4252):
  - `Async$Many.materialisedList()` — replaced `ArrayList` copy with a zero-copy `Arrays.asList()` wrapper.
  - `ResultPath.toStringValue` — lazy computation; the string form is only built on first `toString()` (typically only during error reporting).
  - New `GraphQLCodeRegistry.getDataFetcher(String, String, GraphQLFieldDefinition)` overload avoiding per-fetch `FieldCoordinates` allocations (~54 KB/op reduction).
- **`FastBuilder` for schema construction** (#4197) — see New Features.
- Fixed `ShallowTypeRefCollector` to also resolve type refs inside applied directive arguments and enum value definitions (#4288) — correctness fix enabling `FastBuilder` to be used on more schemas.

## 🐛 Other Noteworthy Changes

### Execution / data fetching
- **DataLoader dispatch with multiple `@defer` fragments** (#4270) — fixes a case where DataLoaders were not dispatched correctly when multiple deferred fragments were in play.
- **`CompletionStageSubscriber` race condition** (#4296) — completion signal could be lost if an in-flight `CompletionStage` resolved concurrently. Fix is backed by new jcstress stress tests.
- **`PropertyDataFetcher` on non-public classes** (#4287) — properties on non-public classes that implement public interfaces (e.g. `TreeMap.Entry`) now fetch correctly on Java 16+ by searching public interfaces.
- **`ExecutableNormalizedField` respects `GraphqlFieldVisibility`** (#4204) — selection-set APIs now use the schema's configured visibility instead of going straight to the type.
- **`ScheduledDataLoaderRegistry` "dispatch all" fix** (#4164).
- **`ChainedInstrumentation` `onExceptionHandled` delegation** (#4207).

### Schema / field visibility
- Fixes for complex field-visibility transformer cases and schema transformation when deletions cascade (#4203, #4205, #4208, #4209, #4212, #4213, #4275).
- **Overlapping-fields null-type regression** fixed (#4291).
- **`GraphQLTypeCollectingVisitor`** now recursively traverses indirect strong references (#4213).
- **`SchemaTraverser::depthFirst`** overload signature fix (#4165).

### Build / packaging / security
- **Bytecode-modified classes no longer ship in published JARs** (#4343) — the `@Generated` annotation injected for coverage reporting was leaking into published artifacts. JARs now contain pristine compiler output.
- **Trojan Source / glassworm Unicode detection** (#4344) — pre-commit hook and CI workflow now reject dangerous BiDi/zero-width/control characters in source.
- **Windows compatibility** (#4239) — removed colons from `performance-results/` filenames, split the oversized `large-schema-5.graphqls`, added pre-commit + CI checks.

### Tooling / DX
- `getDataLoader` type bounds improved (#4180).
- Build and test on Java 25 (#4173, #4330).
- Many dependency updates (Reactor, Jackson, Kotlin, Groovy, Gradle, ByteBuddy, errorprone, etc.) across the release.

---

## Full PR list

<details>
<summary>Expand to see all merged PRs</summary>

* use dispatch all to not break ScheduledDataLoaderRegistry by @andimarek in https://github.com/graphql-java/graphql-java/pull/4164
* Upgrade to Gradle 9.2.0 by @Copilot in https://github.com/graphql-java/graphql-java/pull/4171
* fix build after gradle 9 upgrade by @andimarek in https://github.com/graphql-java/graphql-java/pull/4175
* GQLGW-5297-optimise-incremental-part-execution-for-defer-requests by @llin2 in https://github.com/graphql-java/graphql-java/pull/4174
* Bump actions/checkout from 5 to 6 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4178
* Bump net.bytebuddy:byte-buddy from 1.17.8 to 1.18.1 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4176
* Bump io.projectreactor:reactor-core from 3.7.12 to 3.8.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4168
* Bump com.google.errorprone:error_prone_core from 2.43.0 to 2.44.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4167
* Fix error: Unusable type signature for overload of graphql.schema.SchemaTraverser::depthFirst #4147 by @marktech0813 in https://github.com/graphql-java/graphql-java/pull/4165
* Getdataloader type bounds by @ctbarbour in https://github.com/graphql-java/graphql-java/pull/4180
* All fields removed from object/interface via field visibility transformer which is reachable via additional types by @andimarek in https://github.com/graphql-java/graphql-java/pull/4203
* fixes complex case for Field visibility transformer. See test case by @andimarek in https://github.com/graphql-java/graphql-java/pull/4205
* Proposal for an additional instrumentation hook point by @tinnou in https://github.com/graphql-java/graphql-java/pull/4206
* Call onExceptionHandled in ChainedInstrumentation by @tinnou in https://github.com/graphql-java/graphql-java/pull/4207
* Add documentation and test for additionalTypes in GraphQLSchema by @andimarek in https://github.com/graphql-java/graphql-java/pull/4208
* Fix schema transformation and Field Visibility for complex deletion cases by @andimarek in https://github.com/graphql-java/graphql-java/pull/4209
* fix javadoc and add github job to verify it explicitly by @andimarek in https://github.com/graphql-java/graphql-java/pull/4210
* Build and test using Java 25 by @yeikel in https://github.com/graphql-java/graphql-java/pull/4173
* #4190 - AST directives holder has a toString() by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4195
* #4182 - code built schemas should perform deprecated non null field validations as well as SDL built ones by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4194
* fixes and improves field visibility by @andimarek in https://github.com/graphql-java/graphql-java/pull/4212
* Fix type collecting for indirect references by @andimarek in https://github.com/graphql-java/graphql-java/pull/4213
* Fix testWithJava21 task running zero tests by @andimarek in https://github.com/graphql-java/graphql-java/pull/4227
* Fix ExecutableNormalizedField to respect GraphqlFieldVisibility by @Samjin in https://github.com/graphql-java/graphql-java/pull/4204
* Consolidate built-in directive handling and move helpers to Directives class by @andimarek in https://github.com/graphql-java/graphql-java/pull/4229
* Add more large schemas for performance testing by @andimarek in https://github.com/graphql-java/graphql-java/pull/4233
* feat: GraphQLSchema.FastBuilder for High-Performance Schema Construction by @rstata in https://github.com/graphql-java/graphql-java/pull/4197
* Bump EnricoMi/publish-unit-test-result-action from 2.21.0 to 2.22.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4199
* Bump com.gradleup.shadow from 9.0.0 to 9.3.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4189
* Update Objenesis, Spock and Groovy by @m1ngyuan in https://github.com/graphql-java/graphql-java/pull/4240
* Bump gradle-wrapper from 9.2.0 to 9.3.1 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4236
* Bump com.gradleup.shadow from 9.3.0 to 9.3.1 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4235
* Bump org.jetbrains.kotlin.jvm from 2.2.21 to 2.3.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4234
* JSpecify big wave 2 by @dondonz in https://github.com/graphql-java/graphql-java/pull/4184
* Fix Windows compatibility: rename files with reserved chars, split large files, add pre-commit hook and CI validation by @Copilot in https://github.com/graphql-java/graphql-java/pull/4239
* Remove incorrect @Nullable from GraphQLSchema.getCodeRegistry() by @andimarek in https://github.com/graphql-java/graphql-java/pull/4247
* OneOf Inhabitability by @jbellenger in https://github.com/graphql-java/graphql-java/pull/4248
* Consolidate validation rules into single OperationValidator and improve performance by @andimarek in https://github.com/graphql-java/graphql-java/pull/4228
* Reduce allocations in Async$Many and ResultPath on execution hot path by @andimarek in https://github.com/graphql-java/graphql-java/pull/4252
* Bump aws-actions/configure-aws-credentials from 5 to 6 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4241
* Bump org.testng:testng from 7.11.0 to 7.12.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4242
* Bump com.fasterxml.jackson.core:jackson-databind from 2.20.1 to 2.21.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4243
* Bump net.ltgt.errorprone from 4.3.0 to 5.0.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4246
* Fix SchemaTransformerBenchmark to pass schema validation by @andimarek in https://github.com/graphql-java/graphql-java/pull/4255
* Add generic DataFetcherResult.newBuilder(T data) method by @jord1e in https://github.com/graphql-java/graphql-java/pull/4254
* Benchmark introspection against multiple large schemas by @andimarek in https://github.com/graphql-java/graphql-java/pull/4260
* Bump net.bytebuddy:byte-buddy from 1.18.1 to 1.18.5 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4265
* Bump com.fasterxml.jackson.core:jackson-databind from 2.21.0 to 2.21.1 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4266
* Bump me.bechberger:ap-loader-all from 4.0-10 to 4.3-12 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4264
* Bump com.google.errorprone:error_prone_core from 2.44.0 to 2.47.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4244
* Bump EnricoMi/publish-unit-test-result-action from 2.22.0 to 2.23.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4262
* Re-add GraphQLSchema.Builder.clearDirectives() by @rstata in https://github.com/graphql-java/graphql-java/pull/4276
* Add performance results dashboard subproject by @andimarek in https://github.com/graphql-java/graphql-java/pull/4277
* Fix jar file naming when branch contains slashes by @andimarek in https://github.com/graphql-java/graphql-java/pull/4290
* Fix overlapping fields null type regression from 072165b by @andimarek in https://github.com/graphql-java/graphql-java/pull/4291
* Small typo fixed by @zkozina in https://github.com/graphql-java/graphql-java/pull/4273
* Check in field visibility transformer test - union member error now fixed by @dondonz in https://github.com/graphql-java/graphql-java/pull/4275
* Add test & coverage reporting to PR comments and master baseline by @andimarek in https://github.com/graphql-java/graphql-java/pull/4292
* Fix spec303 flaky failure in ordered publisher TCK tests by @andimarek in https://github.com/graphql-java/graphql-java/pull/4293
* Add unified allBuildAndTestSuccessful CI check by @andimarek in https://github.com/graphql-java/graphql-java/pull/4294
* Fix CompletionStageSubscriber race condition, add jcstress tests and CI coverage gate by @andimarek in https://github.com/graphql-java/graphql-java/pull/4296
* Extract shared JaCoCo parser and fix self-closing tag bug by @andimarek in https://github.com/graphql-java/graphql-java/pull/4300
* Add Dependabot auto-merge workflow by @dondonz in https://github.com/graphql-java/graphql-java/pull/4298
* Bump net.bytebuddy:byte-buddy from 1.18.5 to 1.18.7 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4286
* Bump net.ltgt.errorprone from 5.0.0 to 5.1.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4285
* Bump io.projectreactor:reactor-core from 3.8.0 to 3.8.3 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4283
* Bump org.jetbrains.kotlin.jvm from 2.3.0 to 2.3.10 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4282
* Bump actions/upload-pages-artifact from 3 to 4 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4281
* Add agentic CI doctor workflow by @dondonz in https://github.com/graphql-java/graphql-java/pull/4258
* Bump com.google.errorprone:error_prone_core from 2.47.0 to 2.48.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4284
* Fix Dependabot auto-merge showing as skipped check on all PRs by @dondonz in https://github.com/graphql-java/graphql-java/pull/4304
* Add JSpecify annotations to execution instrumentation classes (10 more) by @dondonz in https://github.com/graphql-java/graphql-java/pull/4272
* Add unit tests for ExhaustedDataLoaderDispatchStrategy by @andimarek in https://github.com/graphql-java/graphql-java/pull/4306
* Fix flaky DataLoaderPerformanceTest with deterministic synchronization by @andimarek in https://github.com/graphql-java/graphql-java/pull/4299
* Add unit tests for PerLevelDataLoaderDispatchStrategy coverage by @andimarek in https://github.com/graphql-java/graphql-java/pull/4308
* Fix findPubliclyAccessibleMethod to search interfaces for accessible methods by @andimarek in https://github.com/graphql-java/graphql-java/pull/4287
* Fix dataloader dispatch in @defer when multiple deferred fragments exist by @timward60 in https://github.com/graphql-java/graphql-java/pull/4270
* Bump actions/upload-artifact from 4 to 7 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4315
* Bump org.ow2.asm:asm from 9.7.1 to 9.9.1 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4318
* Bump org.junit.jupiter:junit-jupiter from 5.14.1 to 5.14.3 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4321
* Improve coverage gate: hybrid regression check + method-level detail reporting by @andimarek in https://github.com/graphql-java/graphql-java/pull/4324
* Fix ShallowTypeRefCollector: resolve type refs in applied directive arguments by @rstata in https://github.com/graphql-java/graphql-java/pull/4288
* Bump actions/download-artifact from 4 to 8 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4323
* Bump actions/github-script from 7 to 8 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4322
* Bump github/gh-aw from 0.49.0 to 0.56.2 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4319
* Update agents.md to improve AI assisted PRs by @dondonz in https://github.com/graphql-java/graphql-java/pull/4305
* Add deterministic CAS retry tests for ExhaustedDataLoaderDispatchStrategy by @andimarek in https://github.com/graphql-java/graphql-java/pull/4329
* Default test task to Java 25 only by @andimarek in https://github.com/graphql-java/graphql-java/pull/4330
* Change Dependabot update schedule from weekly to monthly by @dondonz in https://github.com/graphql-java/graphql-java/pull/4326
* Bump gradle-wrapper from 9.3.1 to 9.4.0 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4333
* Bump github/gh-aw from 0.56.2 to 0.57.2 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4334
* Bump org.junit.platform:junit-platform-launcher from 1.14.1 to 1.14.3 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4335
* Bump io.projectreactor:reactor-core from 3.8.3 to 3.8.4 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4336
* Bump com.gradleup.shadow from 9.3.1 to 9.3.2 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4337
* Agentic CI doctor to ignore coverage gate warnings by @dondonz in https://github.com/graphql-java/graphql-java/pull/4340
* This adds support for QueryAppliedDirective on operations and documents by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4297
* Never package bytecode-modified class files in published JARs by @andimarek in https://github.com/graphql-java/graphql-java/pull/4343
* Add dangerous Unicode character detection (Trojan Source / glassworm) by @andimarek in https://github.com/graphql-java/graphql-java/pull/4344
* Add JSpecify annotations to language package nodes - redo (12 more) by @dondonz in https://github.com/graphql-java/graphql-java/pull/4257
* Add JSpecify annotations to 10 classes in graphql.language package and improve annotation prompt by @Copilot in https://github.com/graphql-java/graphql-java/pull/4216
* Disable no-op issue reporting for CI Failure Doctor by @dondonz in https://github.com/graphql-java/graphql-java/pull/4346
* Add JSpecify annotations to 10 graphql.language classes by @Copilot in https://github.com/graphql-java/graphql-java/pull/4217
* Add query complexity limits and refactor GoodFaithIntrospection to use validation by @andimarek in https://github.com/graphql-java/graphql-java/pull/4256
* Remove agentic CI doctor pipeline by @dondonz in https://github.com/graphql-java/graphql-java/pull/4354
* Bump net.bytebuddy:byte-buddy from 1.18.7 to 1.18.8 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4356
* Bump gradle/actions from 5 to 6 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4357
* Bump actions/deploy-pages from 4 to 5 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4358
* Bump org.jetbrains.kotlin.jvm from 2.3.10 to 2.3.20 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4360
* Bump me.bechberger:ap-loader-all from 4.3-12 to 4.3-13 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4361
* Bump org.apache.groovy:groovy from 5.0.4 to 5.0.5 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4363
* Bump actions/configure-pages from 5 to 6 by @dependabot in https://github.com/graphql-java/graphql-java/pull/4359
* Add JSpecify annotations to 10 language package classes by @Copilot in https://github.com/graphql-java/graphql-java/pull/4218
* Add JSpecify annotations to 10 language package classes by @Copilot in https://github.com/graphql-java/graphql-java/pull/4219
* JSpecify big wave 3 by @dondonz in https://github.com/graphql-java/graphql-java/pull/4274

## New Contributors
* @Copilot made their first contribution in https://github.com/graphql-java/graphql-java/pull/4171
* @llin2 made their first contribution in https://github.com/graphql-java/graphql-java/pull/4174
* @marktech0813 made their first contribution in https://github.com/graphql-java/graphql-java/pull/4165
* @ctbarbour made their first contribution in https://github.com/graphql-java/graphql-java/pull/4180
* @Samjin made their first contribution in https://github.com/graphql-java/graphql-java/pull/4204
* @rstata made their first contribution in https://github.com/graphql-java/graphql-java/pull/4197
* @m1ngyuan made their first contribution in https://github.com/graphql-java/graphql-java/pull/4240
* @zkozina made their first contribution in https://github.com/graphql-java/graphql-java/pull/4273

</details>

**Full Changelog**: https://github.com/graphql-java/graphql-java/compare/v25.0...v26.0

---

> **Source** [graphql-java/graphql-java](https://github.com/graphql-java/graphql-java) · `v26.0` · 2026-04-23 · [upstream release](https://github.com/graphql-java/graphql-java/releases/tag/v26.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
