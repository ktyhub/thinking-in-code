---
title: "graphql-java v25.0.beta-4"
project: "graphql-java"
repo: "graphql-java/graphql-java"
tag: "v25.0.beta-4"
published: "2025-07-28"
type: "pre"
lang: "en"
summary: "This is another beta release for the upcoming version 25."
---

# graphql-java v25.0.beta-4

This is another beta release for the upcoming version 25.

The key change in this beta-4 release is a change to "Delayed" DataLoaders to greatly simplify the use of this feature. In an earlier beta release we tried out a "batch window" for DataLoaders depending on an async function, but in testing we've found this adds complexity, particularly if a server is not already using a ScheduledExecutorService. Note this does not affect the "Chained" DataLoader case where one DataLoader is dependent on another DataLoader in the same DataFetcher. More documentation is to come.

## A word of warning
While all features are tested and we consider them ready to be used, we don't guarantee that this is a stable version: this means there will be more breaking changes until we reach 25.0.

This version is intended for testing and providing feedback to the GraphQL Java team.

## What's Changed
* Support null query when running APQ request by @timward60 in https://github.com/graphql-java/graphql-java/pull/4049
* fix repeat until failure usage by @andimarek in https://github.com/graphql-java/graphql-java/pull/4054
* simplify delayed dataloader dispatching by not using a batch window by @andimarek in https://github.com/graphql-java/graphql-java/pull/4055
* Possibility to run JMH benchmarks without JAR build by @dfa1 in https://github.com/graphql-java/graphql-java/pull/4057
* Removing the GraphQL java agent  by @andimarek in https://github.com/graphql-java/graphql-java/pull/4058


**Full Changelog**: https://github.com/graphql-java/graphql-java/compare/v25.0-beta-3...v25.0.beta-4

---

> **Source** [graphql-java/graphql-java](https://github.com/graphql-java/graphql-java) · `v25.0.beta-4` · 2025-07-28 · [upstream release](https://github.com/graphql-java/graphql-java/releases/tag/v25.0.beta-4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
