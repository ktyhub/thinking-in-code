---
title: "graphql-java v26.0.beta-1"
project: "graphql-java"
repo: "graphql-java/graphql-java"
tag: "v26.0.beta-1"
published: "2026-01-14"
type: "pre"
lang: "en"
summary: "This is a beta release for the upcoming version 26."
---

# graphql-java v26.0.beta-1

This is a beta release for the upcoming version 26.

## A word of warning
While all features are tested and we consider them ready to be used, we don't guarantee that this is a stable version: this means there will be more breaking changes until we reach 26.0.

This version is intended for testing and providing feedback to the GraphQL Java team.

## What's Changed
* use dispatch all to not break ScheduledDataLoaderRegistry by @andimarek in https://github.com/graphql-java/graphql-java/pull/4164
* Upgrade to Gradle 9.2.0 by @Copilot in https://github.com/graphql-java/graphql-java/pull/4171
* fix build after gradle 9 upgrade by @andimarek in https://github.com/graphql-java/graphql-java/pull/4175
* GQLGW-5297-optimise-incremental-part-execution-for-defer-requests by @llin2 in https://github.com/graphql-java/graphql-java/pull/4174
* Bump actions/checkout from 5 to 6 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4178
* Bump net.bytebuddy:byte-buddy from 1.17.8 to 1.18.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4176
* Bump io.projectreactor:reactor-core from 3.7.12 to 3.8.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4168
* Bump com.google.errorprone:error_prone_core from 2.43.0 to 2.44.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4167
* Fix error: Unusable type signature for overload of graphql.schema.SchemaTraverser::depthFirst #4147 by @marktech0813 in https://github.com/graphql-java/graphql-java/pull/4165
* Getdataloader type bounds by @ctbarbour in https://github.com/graphql-java/graphql-java/pull/4180
* All fields removed from object/interface via field visibility transformer which is reachable via additional types by @andimarek in https://github.com/graphql-java/graphql-java/pull/4203
* fixes complex case for Field visibility transformer. See test case by @andimarek in https://github.com/graphql-java/graphql-java/pull/4205
* Proposal for an additional instrumentation hook point by @tinnou in https://github.com/graphql-java/graphql-java/pull/4206

## New Contributors
* @Copilot made their first contribution in https://github.com/graphql-java/graphql-java/pull/4171
* @llin2 made their first contribution in https://github.com/graphql-java/graphql-java/pull/4174
* @marktech0813 made their first contribution in https://github.com/graphql-java/graphql-java/pull/4165
* @ctbarbour made their first contribution in https://github.com/graphql-java/graphql-java/pull/4180

**Full Changelog**: https://github.com/graphql-java/graphql-java/compare/v25.0...v26.0.beta-1

---

> **Source** [graphql-java/graphql-java](https://github.com/graphql-java/graphql-java) · `v26.0.beta-1` · 2026-01-14 · [upstream release](https://github.com/graphql-java/graphql-java/releases/tag/v26.0.beta-1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
