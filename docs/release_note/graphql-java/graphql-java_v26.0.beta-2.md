---
title: "graphql-java v26.0.beta-2"
project: "graphql-java"
repo: "graphql-java/graphql-java"
tag: "v26.0.beta-2"
published: "2026-02-19"
type: "pre"
lang: "en"
summary: "While all features are tested and we consider them ready to be used, we don't guarantee that this is a stable version: this means there will be more breaking changes until we reach 26.0."
---

# graphql-java v26.0.beta-2

## A word of warning
While all features are tested and we consider them ready to be used, we don't guarantee that this is a stable version: this means there will be more breaking changes until we reach 26.0.

This version is intended for testing and providing feedback to the GraphQL Java team.

## What's Changed

### Breaking Changes

* **Validation rules consolidated into single `OperationValidator`** — The 31 individual rule classes in `graphql.validation.rules.*`, `AbstractRule`, and `RulesVisitor` have been removed. The rule filtering predicate type changed from `Predicate<Class<?>>` to `Predicate<OperationValidationRule>` (a new `@PublicApi` enum). Code that filters rules by class reference must migrate to the enum. ([#4228](https://github.com/graphql-java/graphql-java/pull/4228))

* **`DirectiveInfo` class removed** — Use `Directives.isBuiltInDirective()` and `Directives.BUILT_IN_DIRECTIVES` instead. `GraphQLSchema.Builder.clearDirectives()` has also been removed — all 7 built-in directives are now always present. Built-in directives now consistently appear first in `schema.getDirectives()`. ([#4229](https://github.com/graphql-java/graphql-java/pull/4229))

* **JSpecify nullability annotations — big wave 2** — ~50 classes annotated with `@NullMarked` and `@Nullable`. This may surface new warnings or errors in projects using NullAway or Kotlin. ([#4184](https://github.com/graphql-java/graphql-java/pull/4184))

### Performance

* **23-39% execution throughput improvement** — Reduce allocations in `Async$Many` (zero-copy list), `ResultPath` (lazy `toString()`), and `GraphQLCodeRegistry` (fast-path DataFetcher lookup avoiding throwaway `FieldCoordinates` allocation). ([#4252](https://github.com/graphql-java/graphql-java/pull/4252))

* **14-40% faster validation** — Single `OperationValidator` eliminates per-rule visitor overhead and reduces collection allocations on hot paths. ([#4228](https://github.com/graphql-java/graphql-java/pull/4228))

### New Features
* feat: `GraphQLSchema.FastBuilder` for high-performance schema construction by @rstata in https://github.com/graphql-java/graphql-java/pull/4197
* Add OneOf inhabitability validation by @jbellenger in https://github.com/graphql-java/graphql-java/pull/4248
* Call `onExceptionHandled` in `ChainedInstrumentation` by @tinnou in https://github.com/graphql-java/graphql-java/pull/4207
* New `transformSchemaWithDeletes` method for complex deletion cases in https://github.com/graphql-java/graphql-java/pull/4209

### Bug Fixes
* Fix `ExecutableNormalizedField` to respect `GraphqlFieldVisibility` by @Samjin in https://github.com/graphql-java/graphql-java/pull/4204
* Fix type collecting for indirect references in https://github.com/graphql-java/graphql-java/pull/4213
* Fix and improve field visibility in https://github.com/graphql-java/graphql-java/pull/4212
* Code-built schemas now perform deprecated non-null field validations (same as SDL-built) in https://github.com/graphql-java/graphql-java/pull/4194
* Remove incorrect `@Nullable` from `GraphQLSchema.getCodeRegistry()` in https://github.com/graphql-java/graphql-java/pull/4247

### Other Improvements
* AST directives holder has a `toString()` in https://github.com/graphql-java/graphql-java/pull/4195
* Add documentation and test for `additionalTypes` in `GraphQLSchema` in https://github.com/graphql-java/graphql-java/pull/4208
* Build and test using Java 25 by @yeikel in https://github.com/graphql-java/graphql-java/pull/4173
* Update Objenesis, Spock and Groovy by @m1ngyuan in https://github.com/graphql-java/graphql-java/pull/4240
* Bump Gradle wrapper to 9.3.1, Shadow to 9.3.1, Kotlin to 2.3.0

## New Contributors
* @jbellenger made their first contribution in https://github.com/graphql-java/graphql-java/pull/4248
* @rstata made their first contribution in https://github.com/graphql-java/graphql-java/pull/4197
* @Samjin made their first contribution in https://github.com/graphql-java/graphql-java/pull/4204
* @m1ngyuan made their first contribution in https://github.com/graphql-java/graphql-java/pull/4240
* @yeikel made their first contribution in https://github.com/graphql-java/graphql-java/pull/4173

**Full Changelog**: https://github.com/graphql-java/graphql-java/compare/v26.0.beta-1...v26.0.beta-2

---

> **Source** [graphql-java/graphql-java](https://github.com/graphql-java/graphql-java) · `v26.0.beta-2` · 2026-02-19 · [upstream release](https://github.com/graphql-java/graphql-java/releases/tag/v26.0.beta-2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
