---
title: "graphql-java 25.0.beta-6"
project: "graphql-java"
repo: "graphql-java/graphql-java"
tag: "25.0.beta-6"
published: "2025-09-22"
type: "pre"
lang: "en"
summary: "This is another beta release for the upcoming version 25."
---

# graphql-java 25.0.beta-6

This is another beta release for the upcoming version 25.

It contains various changes, specifically performance improvements for the new chained dataloader feature.

## A word of warning
While all features are tested and we consider them ready to be used, we don't guarantee that this is a stable version: this means there will be more breaking changes until we reach 25.0.

This version is intended for testing and providing feedback to the GraphQL Java team.

## What's Changed
* MergedField single field support by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4056
* Prohibit JMH tests from having more than 2 forks by @dondonz in https://github.com/graphql-java/graphql-java/pull/4075
* Remove unused imports by @ngocnhan-tran1996 in https://github.com/graphql-java/graphql-java/pull/4078
* Require JSpecify annotations on new Public API and Experimental API classes by @dondonz in https://github.com/graphql-java/graphql-java/pull/3892
* Specify nullness for nodes in the `graphql.language` package by @mk868 in https://github.com/graphql-java/graphql-java/pull/3899
* Update badges and add book link by @dondonz in https://github.com/graphql-java/graphql-java/pull/4079
* Bump com.gradleup.shadow from 8.3.8 to 9.0.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4080
* Fix IncrementalExecutionResult.transform() to preserve incremental fields by @AndreaRomani in https://github.com/graphql-java/graphql-java/pull/4073
* Type extension field name uniqueness is checked only once by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4076
* Bump com.uber.nullaway:nullaway from 0.12.7 to 0.12.8 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4081
* Bump actions/checkout from 4 to 5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4082
* Fixed deferred support to have proper Instrumentation by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4083
* Prohibit Map.of and provide alternative methods by @dondonz in https://github.com/graphql-java/graphql-java/pull/4086
* Bump io.projectreactor:reactor-core from 3.7.8 to 3.7.9 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4090
* Bump com.gradleup.shadow from 9.0.1 to 9.0.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4091
* Bump org.eclipse.jetty:jetty-server from 11.0.25 to 11.0.26 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4092
* Bump org.jetbrains.kotlin.jvm from 2.2.0 to 2.2.10 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4093
* Bump net.bytebuddy:byte-buddy from 1.17.6 to 1.17.7 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4094
* Add `@NullUnmarked` to builders by @dondonz in https://github.com/graphql-java/graphql-java/pull/4087
* Try revert this shadow change with JMH debugging by @dondonz in https://github.com/graphql-java/graphql-java/pull/4095
* Bump com.uber.nullaway:nullaway from 0.12.8 to 0.12.9 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4100
* Bump actions/setup-java from 4 to 5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4101
* Bump actions/stale from 9 to 10 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4110
* Bump aws-actions/configure-aws-credentials from 4 to 5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4109
* Bump com.fasterxml.jackson.core:jackson-databind from 2.19.2 to 2.20.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4106
* Removed ' character from introspection messages by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4112
* Dont include Kotlin stdlib as a dependency by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4113
* Bump io.projectreactor:reactor-core from 3.7.9 to 3.7.11 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4117
* Bump org.jetbrains.kotlin.jvm from 2.2.10 to 2.2.20 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4116
* Bump com.google.code.gson:gson from 2.13.1 to 2.13.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4114
* Chained dl performance improvements with no locking by @andimarek in https://github.com/graphql-java/graphql-java/pull/4123
* chained data loader performance improvements by @andimarek in https://github.com/graphql-java/graphql-java/pull/4122

## New Contributors
* @AndreaRomani made their first contribution in https://github.com/graphql-java/graphql-java/pull/4073

**Full Changelog**: https://github.com/graphql-java/graphql-java/compare/v25.0.beta-5...25.0.beta-6

---

> **Source** [graphql-java/graphql-java](https://github.com/graphql-java/graphql-java) · `25.0.beta-6` · 2025-09-22 · [upstream release](https://github.com/graphql-java/graphql-java/releases/tag/25.0.beta-6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
