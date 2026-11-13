---
title: "druid druid-31.0.1"
project: "druid"
repo: "apache/druid"
tag: "druid-31.0.1"
published: "2024-12-25"
type: "release"
lang: "en"
summary: "Apache Druid 31.0.1 is a patch release that contains important fixes for topN queries using query granularity other than 'ALL' and for the new complex metric column compression feature introduced in Druid 31.0.0. It…"
---

# druid druid-31.0.1

Apache Druid 31.0.1 is a patch release that contains important fixes for topN queries using query granularity other than 'ALL' and for the new complex metric column compression feature introduced in Druid 31.0.0. It also contains fixes for the web console, the new projections feature, and a fix for a minor performance regression.

See the [complete set of changes for 31.0.1](https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A31.0.1+sort%3Aupdated-desc+) for additional details.

For information about new features in Druid 31, see the [Druid 31 release notes](https://druid.apache.org/docs/31.0.0/release-info/release-notes/).

## <a name="31.0.1-bugs" href="#31.0.1-bugs">#</a>Bug fixes

* Fixes an issue with topN queries that use a query granularity other than 'ALL', which could cause some query correctness issues [#17565](https://github.com/apache/druid/pull/17565)
* Fixes an issue with complex metric compression that caused some data to be read incorrectly, resulting in segment data corruption or system instability due to out-of-memory exceptions. We recommend that you reingest data if you use compression for complex metric columns [#17422](https://github.com/apache/druid/pull/17422)
* Fixes an issue with projection segment merging [#17460](https://github.com/apache/druid/pull/17460)
* Fixes web console progress indicator [#17334](https://github.com/apache/druid/pull/17334)
* Fixes a minor performance regression with query processing [#17397](https://github.com/apache/druid/pull/17397)

## <a name="31.0.1-credits" href="#31.0.1-credits">#</a> Credits
@clintropolis 
@findingrish 
@gianm 
@techdocsmith 
@vogievetsky

---

> **Source** [apache/druid](https://github.com/apache/druid) · `druid-31.0.1` · 2024-12-25 · [upstream release](https://github.com/apache/druid/releases/tag/druid-31.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
