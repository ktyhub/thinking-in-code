---
title: "jmeter rel/v5.6"
project: "jmeter"
repo: "apache/jmeter"
tag: "rel/v5.6"
published: "2023-06-24"
type: "release"
lang: "en"
summary: "The following regressions will be resolved in 5.6.1:"
---

# jmeter rel/v5.6

## Regressions

The following regressions will be resolved in 5.6.1:
* ThreadGroups are running endlessly in non-gui mode https://github.com/apache/jmeter/issues/6008
* After disabling the Java Request sampler, it cannot be enabled again https://github.com/apache/jmeter/issues/6004

## What's Changed
* doc: add load profile samples to Open Model Thread Group documentation by @vlsi in https://github.com/apache/jmeter/pull/718
* Master tests by @pjfanning in https://github.com/apache/jmeter/pull/722
* Add .asf.yaml, enable GitHub Issues by @vlsi in https://github.com/apache/jmeter/pull/728
* Add GitHub Issue templates by @vlsi in https://github.com/apache/jmeter/pull/5710
* doc: handle <issue> markup in documentation by @vlsi in https://github.com/apache/jmeter/pull/5711
* Add Chinese Simplified Translation for Open Model Thread Group by @kaola89 in https://github.com/apache/jmeter/pull/725
* SyncTimerTest | Used Junit 5 assertions to keep it consistent by @SampathKumarAmex in https://github.com/apache/jmeter/pull/726
* Update grgit to 4.1.1 (from 4.1.0) by @SampathKumarAmex in https://github.com/apache/jmeter/pull/691
* Update Spock to 2.2-groovy-3.0 (from 2.1-groovy-3.0) by @vlsi in https://github.com/apache/jmeter/pull/5713
* Remove Travis CI configuration as the ASF is moving away from Travis CI by @vlsi in https://github.com/apache/jmeter/pull/5719
* Bump actions/checkout to v3 by @vlsi in https://github.com/apache/jmeter/pull/5722
* Update Bugzilla -> GitHub issues in the contribution documentation by @vlsi in https://github.com/apache/jmeter/pull/5712
* UPPER is the default case for changeCase by @orimarko in https://github.com/apache/jmeter/pull/5731
* bump checksum-dependency-plugin to 1.86, so public pgp keys could be stored under the source control by @vlsi in https://github.com/apache/jmeter/pull/5760
* Update Gradle to 7.6 from 7.3 by @vlsi in https://github.com/apache/jmeter/pull/5763
* Change from Assert. to Assertions. by @milamberspace in https://github.com/apache/jmeter/pull/5813
* Bug #5807 - Fix an ArrayIndexOutOfBoundsException on HTTP parameters … by @milamberspace in https://github.com/apache/jmeter/pull/5812
* Add KeyStroke for start_no_timers (Start no pauses: CRTL+SHIFT+n) by @dgetzlaf in https://github.com/apache/jmeter/pull/5792
* chore: bump Gradle to 8.1.1 by @vlsi in https://github.com/apache/jmeter/pull/5814
* chore: call verifyReleaseDependencies only when building release version by @vlsi in https://github.com/apache/jmeter/pull/5828
* Deadlock in testsuite by @FSchumacher in https://github.com/apache/jmeter/pull/5870
* Trim variable names in Argument objects by @FSchumacher in https://github.com/apache/jmeter/pull/5874
* [66139] Ensure Open Model Thread Group initializes config elements only once by @vlsi in https://github.com/apache/jmeter/pull/717
* Add errorprone verifications by @vlsi in https://github.com/apache/jmeter/pull/5873
* Fix NumberFormatException when counter is empty or not a digit on Proxy Settings panel by @milamberspace in https://github.com/apache/jmeter/pull/5901
* Speed up CPU-bound tests by skipping recoverRunningVersion for elements that are shared between threads (the ones that implement NoThreadClone) by @vlsi in https://github.com/apache/jmeter/pull/5899
* Use JMeterProperty#intValue for loop count directly by @FSchumacher in https://github.com/apache/jmeter/pull/5876
* Use Caffeine for caching HTTP headers instead of commons-collections4 LRUMap by @vlsi in https://github.com/apache/jmeter/pull/5911
* feat: Use Caffeine for caching compiled scripts in JSR223 samplers instead of commons-collections4 LRUMap by @vlsi in https://github.com/apache/jmeter/pull/5909
* feat: Use Caffeine for caching customizers in TestBeanGUI instead of commons-collections4 LRUMap by @vlsi in https://github.com/apache/jmeter/pull/5910
* feat: use ServiceLoader to find implementations instead of searching classes in jars by @vlsi in https://github.com/apache/jmeter/pull/5885
* feat: add property to disable FunctionProperty caching by @vlsi in https://github.com/apache/jmeter/pull/5788
* ci: add randomized matrix for better test coverage by @vlsi in https://github.com/apache/jmeter/pull/693
* style: use bounded wildcards for private, and static methods by @vlsi in https://github.com/apache/jmeter/pull/5927
* Update website copyright year to 2023 by @raboof in https://github.com/apache/jmeter/pull/5787
* perf: cache datetime formatter in __time function by @vlsi in https://github.com/apache/jmeter/pull/5934
* Added Shortcut key event for Reset search - 66053 by @rollno748 in https://github.com/apache/jmeter/pull/710
* perf: remove excessive BufferedInputStream from HTTP sampler by @vlsi in https://github.com/apache/jmeter/pull/5952
* perf: avoid String.replaceAll in HTTPJavaImpl by @vlsi in https://github.com/apache/jmeter/pull/5953
* perf: avoid string concatenation in HTTPHC4.HttpClientKey by @vlsi in https://github.com/apache/jmeter/pull/5954
* fix: PropertyIterator.remove should remove properties from both collections in TestElement by @vlsi in https://github.com/apache/jmeter/pull/5958
* chore: allocate Xmx1500m for the build by @vlsi in https://github.com/apache/jmeter/pull/5962
* test: Add OpenJDK JMH for creating microbenchmarks in JMeter code by @vlsi in https://github.com/apache/jmeter/pull/5960
* Migrate TestElement interface to Kotlin by @vlsi in https://github.com/apache/jmeter/pull/5959
* chore: reduce verbosity of the build logs by @vlsi in https://github.com/apache/jmeter/pull/5965
* Add more variables to template to compute sampler names by @FSchumacher in https://github.com/apache/jmeter/pull/5869
* doc: update the next version to be 5.6 by @vlsi in https://github.com/apache/jmeter/pull/5936
* feat: Enable usage of ${...} expressions for checkbox controls by @vlsi in https://github.com/apache/jmeter/pull/5944
* chore: bump vlsi-release-plugins to 1.89 by @vlsi in https://github.com/apache/jmeter/pull/5972
* chore: use testFixtures sourceset instead of depending on all the test classes by @vlsi in https://github.com/apache/jmeter/pull/5975
* perf: add PropertyIteratorImpl.EMPTY_ITERATOR when iterating over an empty collection by @vlsi in https://github.com/apache/jmeter/pull/5985
* fix: AbstractTestElement#clone might produce non-identical clones if element constructor adds a non-default property value by @vlsi in https://github.com/apache/jmeter/pull/5984
* DSL for programmatic test plan generation by @vlsi in https://github.com/apache/jmeter/pull/678
* fix: restore public static final String references to literals for backward compatibility by @vlsi in https://github.com/apache/jmeter/pull/5988
* fix: encode unicode characters in filenames when sending files in HTTP Sampler by @vlsi in https://github.com/apache/jmeter/pull/5987

## Dependencies
* Update lets-plot-jvm by @FSchumacher in https://github.com/apache/jmeter/pull/5797
* chore: update xalan:xalan to 2.7.3 by @vlsi in https://github.com/apache/jmeter/pull/5880
* fix(deps): update com.github.vlsi to v1.88 by @renovate-bot in https://github.com/apache/jmeter/pull/5824
* fix(deps): update dependency checkstyle to v10.10.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5825
* fix(deps): update dependency de.thetaphi.forbiddenapis:de.thetaphi.forbiddenapis.gradle.plugin to v3.5.1 by @renovate-bot in https://github.com/apache/jmeter/pull/5826
* fix(deps): update dependency jacoco to v0.8.10 by @renovate-bot in https://github.com/apache/jmeter/pull/5827
* fix(deps): update junit5 monorepo to v5.9.3 by @renovate-bot in https://github.com/apache/jmeter/pull/5832
* fix(deps): update dependency org.codehaus.groovy:groovy-bom to v3.0.17 by @renovate-bot in https://github.com/apache/jmeter/pull/5830
* fix(deps): update dependency org.jsoup:jsoup to v1.15.4 by @renovate-bot in https://github.com/apache/jmeter/pull/5835
* fix(deps): update dependency org.jetbrains.kotlinx:kotlinx-coroutines-bom to v1.6.4 by @renovate-bot in https://github.com/apache/jmeter/pull/5834
* fix(deps): update dependency org.freemarker:freemarker to v2.3.32 by @renovate-bot in https://github.com/apache/jmeter/pull/5833
* fix(deps): update dependency org.ow2.asm:asm to v9.5 by @renovate-bot in https://github.com/apache/jmeter/pull/5837
* fix(deps): update dependency cglib:cglib-nodep to v3.3.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5842
* fix(deps): update dependency org.apache.rat:apache-rat to v0.15 by @renovate-bot in https://github.com/apache/jmeter/pull/5844
* fix(deps): update dependency org.checkerframework:checker to v3.33.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5846
* fix(deps): update dependency nl.jqno.equalsverifier:equalsverifier to v3.14.1 by @renovate-bot in https://github.com/apache/jmeter/pull/5845
* fix(deps): update dependency org.objenesis:objenesis to v3.3 by @renovate-bot in https://github.com/apache/jmeter/pull/5849
* fix(deps): update dependency com.fifesoft:rsyntaxtextarea to v3.3.3 by @renovate-bot in https://github.com/apache/jmeter/pull/5847
* fix(deps): update dependency net.minidev:json-smart to v2.4.10 by @renovate-bot in https://github.com/apache/jmeter/pull/5841
* fix(deps): update dependency org.jetbrains:annotations to v23.1.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5853
* fix(deps): update dependency org.apache.commons:commons-jexl3 to v3.3 by @renovate-bot in https://github.com/apache/jmeter/pull/5851
* fix(deps): update dependency org.apache.mina:mina-core to v2.2.1 by @renovate-bot in https://github.com/apache/jmeter/pull/5855
* fix(deps): update dependency net.minidev:accessors-smart to v2.4.9 by @renovate-bot in https://github.com/apache/jmeter/pull/5840
* fix(deps): update dependency org.hsqldb:hsqldb to v2.7.1 by @renovate-bot in https://github.com/apache/jmeter/pull/5856
* fix(deps): update org.apache.logging.log4j to v2.20.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5859
* fix(deps): update dependency org.apache.xmlgraphics:xmlgraphics-commons to v2.8 by @renovate-bot in https://github.com/apache/jmeter/pull/5852
* fix(deps): update org.apache.httpcomponents by @renovate-bot in https://github.com/apache/jmeter/pull/5862
* fix(deps): update dependency org.jsoup:jsoup to v1.16.1 by @renovate-bot in https://github.com/apache/jmeter/pull/5864
* fix(deps): update dependency com.sun.mail:all to v1.6.7 by @renovate-bot in https://github.com/apache/jmeter/pull/5867
* fix(deps): update dependency com.helger.commons:ph-commons to v10.2.3 by @renovate-bot in https://github.com/apache/jmeter/pull/5868
* fix(deps): update dependency com.helger.commons:ph-commons to v10.2.4 by @renovate-bot in https://github.com/apache/jmeter/pull/5886
* fix(deps): update dependency org.jetbrains.kotlinx:kotlinx-coroutines-bom to v1.7.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5889
* fix(deps): update dependency org.jetbrains:annotations to v24 by @renovate-bot in https://github.com/apache/jmeter/pull/5908
* fix(deps): update dependency net.sf.saxon:saxon-he to v11.5 by @renovate-bot in https://github.com/apache/jmeter/pull/5854
* fix(deps): update dependency org.jetbrains.lets-plot:lets-plot-batik to v3.2.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5907
* fix(deps): update org.checkerframework by @renovate-bot in https://github.com/apache/jmeter/pull/5887
* fix(deps): update dependency checkstyle to v10.11.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5913
* fix(deps): update dependency org.jetbrains.kotlinx:kotlinx-coroutines-bom to v1.7.1 by @renovate-bot in https://github.com/apache/jmeter/pull/5918
* fix(deps): update com.fasterxml.jackson.core to v2.15.1 by @renovate-bot in https://github.com/apache/jmeter/pull/5921
* fix(deps): update dependency org.spockframework:spock-core to v2.3-groovy-3.0 by @renovate-bot in https://github.com/apache/jmeter/pull/5931
* fix(deps): update net.minidev json-smart to v2.4.11 by @renovate-bot in https://github.com/apache/jmeter/pull/5930
* fix(deps): update dependency org.eclipse.jgit:org.eclipse.jgit to v5.13.1.202206130422-r by @renovate-bot in https://github.com/apache/jmeter/pull/5929
* chore(deps): update actions/checkout action to v3 by @renovate-bot in https://github.com/apache/jmeter/pull/5932


## New Contributors
* @pjfanning made their first contribution in https://github.com/apache/jmeter/pull/722
* @kaola89 made their first contribution in https://github.com/apache/jmeter/pull/725
* @orimarko made their first contribution in https://github.com/apache/jmeter/pull/5731
* @milamberspace made their first contribution in https://github.com/apache/jmeter/pull/5813
* @dgetzlaf made their first contribution in https://github.com/apache/jmeter/pull/5792
* @renovate-bot made their first contribution in https://github.com/apache/jmeter/pull/5824
* @raboof made their first contribution in https://github.com/apache/jmeter/pull/5787
* @rollno748 made their first contribution in https://github.com/apache/jmeter/pull/710

**Full Changelog**: https://github.com/apache/jmeter/compare/rel/v5.5...rel/v5.6

---

> **Source** [apache/jmeter](https://github.com/apache/jmeter) · `rel/v5.6` · 2023-06-24 · [upstream release](https://github.com/apache/jmeter/releases/tag/rel/v5.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
