---
title: "jmeter rel/v5.5"
project: "jmeter"
repo: "apache/jmeter"
tag: "rel/v5.5"
published: "2023-06-24"
type: "release"
lang: "en"
summary: "Bump Gradle 6.7 -> 6.8.1 · fix doc for 'get-started' file · Update to Gradle 7.0.2 · Reduce memory consumption by the logging panel (disable undo events for it)"
---

# jmeter rel/v5.5

## What's Changed
* Bump Gradle 6.7 -> 6.8.1 by @vlsi in https://github.com/apache/jmeter/pull/642
* fix doc for 'get-started' file by @ooooo-youwillsee in https://github.com/apache/jmeter/pull/653
* Update to Gradle 7.0.2 by @vlsi in https://github.com/apache/jmeter/pull/657
* Reduce memory consumption by the logging panel (disable undo events for it) by @vlsi in https://github.com/apache/jmeter/pull/676
* Align ssl props / Enable setting cipher suite  (WIP) by @pmouawad in https://github.com/apache/jmeter/pull/677
* Open Model Thread Group by @vlsi in https://github.com/apache/jmeter/pull/674
* Update log4j2 to 2.15.0 to fix CVE-2021-44228: Apache Log4j2 JNDI features do not protect against attacker controlled LDAP and other JNDI related endpoints by @vlsi in https://github.com/apache/jmeter/pull/680
* Bump lets-plot to 2.2.1 and 3.1.1 by @vlsi in https://github.com/apache/jmeter/pull/681
* Update changelog for JMeter 5.5 by @vlsi in https://github.com/apache/jmeter/pull/684
* 65108: Support JMeter variables in GraphQL HTTP Request by @woonsan in https://github.com/apache/jmeter/pull/660
* Setters in ConstantThroughputTimer need to set Properties to be picked up by test during runtime by @mspangdal in https://github.com/apache/jmeter/pull/662
* Update log4j2 to 2.17.1 by @psmietanaa in https://github.com/apache/jmeter/pull/685
* Deleted the redundant log variable in parse curl command action class by @SampathKumarAmex in https://github.com/apache/jmeter/pull/687
* Remove unnecessary throws exception from distributed runner test by @SampathKumarAmex in https://github.com/apache/jmeter/pull/688
* [Bug 63620] Fix GUI freeze when viewing response body with long lines by @vlsi in https://github.com/apache/jmeter/pull/694
* update tika-parsers to 1.28.1 (from 1.28) and xstreams to 1.4.19 (from 1.4.18) by @sseide in https://github.com/apache/jmeter/pull/698
* CSV文件中共享模式汉化翻译有误：所有现场-->所有线程 by @KING76169835 in https://github.com/apache/jmeter/pull/702
* ci: use https://www.apache.org instead of http://www.eu.apache.org for downloading Maven by @Geno1024 in https://github.com/apache/jmeter/pull/704
* (typo) in zh-CN translation. by @Geno1024 in https://github.com/apache/jmeter/pull/703
* Revert Bugfix 65885 by @pmouawad in https://github.com/apache/jmeter/pull/709
* Update Kotlin to 1.6.21 by @vlsi in https://github.com/apache/jmeter/pull/713
* Use kotlinx-coroutines for UI launcher by @vlsi in https://github.com/apache/jmeter/pull/712
* Fix to Bug 66061 - Refine the log message in DefaultSamplerCreator  from the state of in progress to complete  by @zisding in https://github.com/apache/jmeter/pull/714

## New Contributors
* @ooooo-youwillsee made their first contribution in https://github.com/apache/jmeter/pull/653
* @mspangdal made their first contribution in https://github.com/apache/jmeter/pull/662
* @psmietanaa made their first contribution in https://github.com/apache/jmeter/pull/685
* @KING76169835 made their first contribution in https://github.com/apache/jmeter/pull/702
* @Geno1024 made their first contribution in https://github.com/apache/jmeter/pull/704
* @zisding made their first contribution in https://github.com/apache/jmeter/pull/714

**Full Changelog**: https://github.com/apache/jmeter/compare/rel/v5.4.1...rel/v5.5

---

> **Source** [apache/jmeter](https://github.com/apache/jmeter) · `rel/v5.5` · 2023-06-24 · [upstream release](https://github.com/apache/jmeter/releases/tag/rel/v5.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
