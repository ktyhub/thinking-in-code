---
title: "jmeter rel/v5.6.1"
project: "jmeter"
repo: "apache/jmeter"
tag: "rel/v5.6.1"
published: "2023-07-10"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/jmeter/compare/rel/v5.6...rel/v5.6.1"
---

# jmeter rel/v5.6.1

## Known issues
* Maven does not resolve transitive dependencies, see https://github.com/apache/jmeter/issues/6041. It will be resolved in 5.6.2

## New and Noteworthy
* fix: use UTF-8 as a default encoding in HTTP sampler by @vlsi in https://github.com/apache/jmeter/pull/6010
* **Fixed endless thread groups in non-GUI mode**. Use default value for LoopController.continue_forever rather than initializing it in the constructor by @vlsi in https://github.com/apache/jmeter/pull/6011
* fix: after disabling the Java Request sampler, it cannot be enabled again by @vlsi in https://github.com/apache/jmeter/pull/6012

## What's Changed
* docs: add release-drafter for populating GitHub releases info based on the PRs by @vlsi in https://github.com/apache/jmeter/pull/6000
* chore: use Gradle toolchains for JDK provisioning by @vlsi in https://github.com/apache/jmeter/pull/5989
* test: replace TestTransactionController.TestSampleListener with CollectSamplesListener by @vlsi in https://github.com/apache/jmeter/pull/6002
* bump JMeter version in issue templates to 5.6 by @alexsch01 in https://github.com/apache/jmeter/pull/6013
* fix: treat null or blank values as empty for saved properties by @vlsi in https://github.com/apache/jmeter/pull/6027
* doc: update documentation for sampleresult.default.encoding default value by @vlsi in https://github.com/apache/jmeter/pull/6028
* chore: trim dependencyManagement and optional dependencies from pom.xml by @vlsi in https://github.com/apache/jmeter/pull/6031
* doc: update changelog for 5.6.1 by @vlsi in https://github.com/apache/jmeter/pull/6024
* doc: update changelog for 5.6.1 by @vlsi in https://github.com/apache/jmeter/pull/6001

## Dependencies

* fix(deps): update com.github.vlsi to v1.90 by @renovate-bot in https://github.com/apache/jmeter/pull/6003
* fix(deps): update com.fasterxml.jackson.core to v2.15.2 by @renovate-bot in https://github.com/apache/jmeter/pull/5991
* fix(deps): update kotlin monorepo to v1.8.22 by @renovate-bot in https://github.com/apache/jmeter/pull/6017
* fix(deps): update dependency org.hsqldb:hsqldb to v2.7.2 by @renovate-bot in https://github.com/apache/jmeter/pull/6016
* fix(deps): update dependency nl.jqno.equalsverifier:equalsverifier to v3.14.3 by @renovate-bot in https://github.com/apache/jmeter/pull/6014
* chore(deps): update release-drafter/release-drafter digest to 65c5fb4 by @renovate-bot in https://github.com/apache/jmeter/pull/6018
* fix(deps): update dependency org.apache.mina:mina-core to v2.2.2 by @renovate-bot in https://github.com/apache/jmeter/pull/6015
* fix(deps): update dependency com.helger.commons:ph-commons to v10.2.5 by @renovate-bot in https://github.com/apache/jmeter/pull/5993
* fix(deps): update dependency checkstyle to v10.12.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6021
* fix(deps): update dependency org.jetbrains.dokka:org.jetbrains.dokka.gradle.plugin to v1.8.20 by @renovate-bot in https://github.com/apache/jmeter/pull/6019

## New Contributors
* @alexsch01 made their first contribution in https://github.com/apache/jmeter/pull/6013

**Full Changelog**: https://github.com/apache/jmeter/compare/rel/v5.6...rel/v5.6.1

---

> **Source** [apache/jmeter](https://github.com/apache/jmeter) · `rel/v5.6.1` · 2023-07-10 · [upstream release](https://github.com/apache/jmeter/releases/tag/rel/v5.6.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
