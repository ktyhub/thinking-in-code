---
title: "mybatis-3 mybatis-3.5.12"
project: "mybatis-3"
repo: "mybatis/mybatis-3"
tag: "mybatis-3.5.12"
published: "2023-03-01"
type: "release"
lang: "en"
summary: "#2703 Referencing collection parameter by name fails fixing #2693 · #2709 Fix a race condition caused by other threads calling mapper methods while mapped tables are being constructed"
---

# mybatis-3 mybatis-3.5.12

"The Great Cleanup"

User impactful changes

- #2703 Referencing collection parameter by name fails fixing #2693
- #2709 Fix a race condition caused by other threads calling mapper methods while mapped tables are being constructed
- #2727 Enable ability to provide custom configuration to XMLConfigBuilder
- #2731 Adding mapper could fail under JPMS
- #2741 Add 'affectedData' attribute to @Select, @SelectProvider, and ```<select />```
- #2767 Resolve resultType by namespace and id when not provided resultType and resultMap
- #2804 Search readable property when resolving constructor arg type by name

- Minor correction: 'boolean' can never be null (primative)
- General library updates
- Uses parameters option for compiler now (needed by spring boot 3) (for reflection needs)

Code cleanup

- #2816 Use open rewrite to partially cleanup java code
- #2817 Add private constructors per open rewrite
- #2819 Add final where appropriate per open rewrite
- #2825 Cleanup if statement breaks / return logic
- #2826 Eclipse based cleanup

Build

- #2820 Remove test ci group profile in favor of more direct usage on GH-Actions and update deprecated surefire along in overview in README.md
- Adjustments to build so shaded ognl and javassist no longer throw warnings
- Build with jdk 21-ea as well now
- Various test cleanup, updates, and additions
- Turn on auto formatting of all java code including note to contributors on readme to skip formatting when necessary in code blocks
- Tests may use jdk 11 now while retaining jdk 8 runtime
- Pom cleanup / better clarification on parameters

Documentation

- Various documentation updates

For Contributors:

- Mybatis is now using auto formatting of the code base.  If contribution needs special formatting such as annotations or specific javadocs that conflict with formatting rules, use ```// @formatter:off``` and ```// @formatter:on``` around block of code to be ignored on formatting.  If within a javadoc, since its a comment type, the entire thing is affected so just wrap this around the entire javadoc.  Try to ensure code inside the non formatting block is appropriately formatted otherwise to ease readability.

## What's Changed
* Update junit5 monorepo to v5.9.1 by @renovate in https://github.com/mybatis/mybatis-3/pull/2702
* Update dependency org.slf4j:slf4j-api to v2.0.2 by @renovate in https://github.com/mybatis/mybatis-3/pull/2701
* Referencing collection parameter by name fails ... by @harawata in https://github.com/mybatis/mybatis-3/pull/2703
* Update dependency org.slf4j:slf4j-api to v2.0.3 by @renovate in https://github.com/mybatis/mybatis-3/pull/2704
* Update dependency org.testcontainers:junit-jupiter to v1.17.4 by @renovate in https://github.com/mybatis/mybatis-3/pull/2706
* Update dependency org.testcontainers:postgresql to v1.17.4 by @renovate in https://github.com/mybatis/mybatis-3/pull/2708
* Update dependency org.testcontainers:mysql to v1.17.4 by @renovate in https://github.com/mybatis/mybatis-3/pull/2707
* Update dependency ch.qos.logback:logback-classic to v1.4.2 by @renovate in https://github.com/mybatis/mybatis-3/pull/2710
* Update dependency ch.qos.logback:logback-classic to v1.4.3 by @renovate in https://github.com/mybatis/mybatis-3/pull/2711
* Update dependency org.testcontainers:postgresql to v1.17.5 by @renovate in https://github.com/mybatis/mybatis-3/pull/2714
* Update dependency org.testcontainers:junit-jupiter to v1.17.5 by @renovate in https://github.com/mybatis/mybatis-3/pull/2712
* Update dependency org.testcontainers:mysql to v1.17.5 by @renovate in https://github.com/mybatis/mybatis-3/pull/2713
* Update dependency ch.qos.logback:logback-classic to v1.4.4 by @renovate in https://github.com/mybatis/mybatis-3/pull/2716
* Update dependency mysql:mysql-connector-java to v8.0.31 by @renovate in https://github.com/mybatis/mybatis-3/pull/2720
* Update dependency org.mockito:mockito-junit-jupiter to v4.8.1 by @renovate in https://github.com/mybatis/mybatis-3/pull/2719
* Update dependency org.mockito:mockito-core to v4.8.1 by @renovate in https://github.com/mybatis/mybatis-3/pull/2725
* Enable ability to provide custom configuration to XMLConfigBuilder by @epochcoder in https://github.com/mybatis/mybatis-3/pull/2727
* Fix a race condition caused by other threads calling mapper methods while mappedStatements are being constructed by @tianshuang in https://github.com/mybatis/mybatis-3/pull/2709
* Adding mapper could fail under JPMS by @harawata in https://github.com/mybatis/mybatis-3/pull/2731
* Update mockito monorepo to v4.9.0 by @renovate in https://github.com/mybatis/mybatis-3/pull/2733
* Update dependency org.testcontainers:mysql to v1.17.6 by @renovate in https://github.com/mybatis/mybatis-3/pull/2737
* Update dependency org.testcontainers:junit-jupiter to v1.17.6 by @renovate in https://github.com/mybatis/mybatis-3/pull/2736
* Update dependency org.testcontainers:postgresql to v1.17.6 by @renovate in https://github.com/mybatis/mybatis-3/pull/2738
* Update dependency org.slf4j:slf4j-api to v2.0.4 by @renovate in https://github.com/mybatis/mybatis-3/pull/2739
* Bump postgresql from 42.5.0 to 42.5.1 by @dependabot in https://github.com/mybatis/mybatis-3/pull/2744
* Update dependency ch.qos.reload4j:reload4j to v1.2.23 by @renovate in https://github.com/mybatis/mybatis-3/pull/2742
* Update dependency ch.qos.logback:logback-classic to v1.4.5 by @renovate in https://github.com/mybatis/mybatis-3/pull/2740
* Update dependency org.slf4j:slf4j-api to v2.0.5 by @renovate in https://github.com/mybatis/mybatis-3/pull/2745
* Add `affectData` attribute to `@Select`, `@SelectProvider` and `<select />` by @harawata in https://github.com/mybatis/mybatis-3/pull/2741
* Update dependency ch.qos.reload4j:reload4j to v1.2.24 by @renovate in https://github.com/mybatis/mybatis-3/pull/2748
* [pom] Update mysql-connector-j to new GAV relocation by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2751
* [ci] Cleanup charset usage by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2752
* [pom] Add filter to exclude MANIFEST.MF from uber jar from other jars… by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2753
* Update dependency org.slf4j:slf4j-api to v2.0.6 by @renovate in https://github.com/mybatis/mybatis-3/pull/2755
* Update mockito monorepo to v4.10.0 by @renovate in https://github.com/mybatis/mybatis-3/pull/2756
* Update dependency org.mybatis:mybatis-parent to v37 by @renovate in https://github.com/mybatis/mybatis-3/pull/2766
* Update mockito monorepo to v4.11.0 by @renovate in https://github.com/mybatis/mybatis-3/pull/2765
* [actions] Drop jdk 18 by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2768
* Use method signature to resolve `resultType` of `<select>` by @FlyInWind1 in https://github.com/mybatis/mybatis-3/pull/2767
* Update dependency org.assertj:assertj-core to v3.24.1 by @renovate in https://github.com/mybatis/mybatis-3/pull/2769
* Update junit5 monorepo to v5.9.2 by @renovate in https://github.com/mybatis/mybatis-3/pull/2772
* Update mockito monorepo to v5 (major) by @renovate in https://github.com/mybatis/mybatis-3/pull/2774
* Update dependency org.assertj:assertj-core to v3.24.2 by @renovate in https://github.com/mybatis/mybatis-3/pull/2775
* Update dependency com.mysql:mysql-connector-j to v8.0.32 by @renovate in https://github.com/mybatis/mybatis-3/pull/2776
* Update dependency maven to v3.8.7 by @renovate in https://github.com/mybatis/mybatis-3/pull/2779
* [pom] Add mockito subclass support by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2781
* Include JDK 21 in CI build by @harawata in https://github.com/mybatis/mybatis-3/pull/2780
* Update mockito monorepo to v5.1.0 by @renovate in https://github.com/mybatis/mybatis-3/pull/2782
* Update mockito monorepo to v5.1.1 by @renovate in https://github.com/mybatis/mybatis-3/pull/2783
* Update dependency org.postgresql:postgresql to v42.5.2 by @renovate in https://github.com/mybatis/mybatis-3/pull/2785
* [ci] Type the array lists by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2788
* Road toward turning on auto formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2790
* [ci] Formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2791
* [ci] Formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2792
* [ci] formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2793
* Update dependency org.postgresql:postgresql to v42.5.3 by @renovate in https://github.com/mybatis/mybatis-3/pull/2789
* [ci] Formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2794
* [ci] formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2795
* [ci] formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2796
* [ci] formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2797
* [ci] formatting by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2798
* [ci] Fix readme for formatter tags by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2799
* [mvn] Bump to maven 3.9.0 and change maven.config to 3.9/4.x style by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2801
* Search readable property when resolving constructor arg type by name by @harawata in https://github.com/mybatis/mybatis-3/pull/2804
* Update test code to clarify the consequence by @hogimn in https://github.com/mybatis/mybatis-3/pull/2805
* Update dependency org.postgresql:postgresql to v42.5.4 by @renovate in https://github.com/mybatis/mybatis-3/pull/2808
* Add Unit Test for PooledDataSource by @hogimn in https://github.com/mybatis/mybatis-3/pull/2809
* [ci] Minor formatting adjustments by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2814
* [ci] Fix end of line markers at end of file per git standards (ie emp… by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2815
* [ci] Apply open rewrite partially on java cleanup by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2816
* Add private constructors per open rewrite / fix two tests that were invalid by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2817
* [ci] Tabs to spaces by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2818
* [ci] Add final where appropriate per open rewrite by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2819
* [tests] Rework test process and document it dropping use of prioer profile for straight property usage by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2820
* [ci] Do not use star imports (across test classes) by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2821
* [tests] Various cleanups via Eclipse with extra hand holding by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2822
* [tests] More test modernization cleanups by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2823
* [ci] Use objects class for hash, equals usage by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2824
* [ci] Cleanup if statement breaks / return logic by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2825
* More Eclipse based cleanups by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2826
* Update dependency org.apache.logging.log4j:log4j-core to v2.20.0 by @renovate in https://github.com/mybatis/mybatis-3/pull/2828
* Update dependency org.apache.logging.log4j:log4j-api to v2.20.0 by @renovate in https://github.com/mybatis/mybatis-3/pull/2827
* Few cleanups in pom by @hazendaz in https://github.com/mybatis/mybatis-3/pull/2833
* Use CountDownLatch to coordinate the execution order by @hogimn in https://github.com/mybatis/mybatis-3/pull/2831

## New Contributors
* @epochcoder made their first contribution in https://github.com/mybatis/mybatis-3/pull/2727
* @tianshuang made their first contribution in https://github.com/mybatis/mybatis-3/pull/2709
* @FlyInWind1 made their first contribution in https://github.com/mybatis/mybatis-3/pull/2767
* @hogimn made their first contribution in https://github.com/mybatis/mybatis-3/pull/2805

**Full Changelog**: https://github.com/mybatis/mybatis-3/compare/mybatis-3.5.11...mybatis-3.5.12

---

> **Source** [mybatis/mybatis-3](https://github.com/mybatis/mybatis-3) · `mybatis-3.5.12` · 2023-03-01 · [upstream release](https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
