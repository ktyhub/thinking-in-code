---
title: "jmeter rel/v5.6.3"
project: "jmeter"
repo: "apache/jmeter"
tag: "rel/v5.6.3"
published: "2024-01-09"
type: "release"
lang: "en"
summary: "Fix computation of min in Summary report · fix: allow usage of variables in ConstantThroughputTimer.throughput and PreciseThroughputTimer · fix: log errors happening while JMeter starts the test"
---

# jmeter rel/v5.6.3

## What's Changed
* Fix computation of min in Summary report by @vlsi in https://github.com/apache/jmeter/pull/6044
* fix: allow usage of variables in ConstantThroughputTimer.throughput and PreciseThroughputTimer by @vlsi in https://github.com/apache/jmeter/pull/6192
* fix: log errors happening while JMeter starts the test by @vlsi in https://github.com/apache/jmeter/pull/6193
* feat: pass JDBCSampler.maxRows to Statement.setMaxRows so the driver does not fetch extra rows from the database by @vlsi in https://github.com/apache/jmeter/pull/6216
* Restore references to boms in the generated pom.xml files by @vlsi in https://github.com/apache/jmeter/pull/6046

## Non-functional changes
* Add space before stopping_test_host by @pochopsp in https://github.com/apache/jmeter/pull/6045
* Fix link to bug database by @sebbASF in https://github.com/apache/jmeter/pull/6050
* Resolve checkstyle cache miss by @tylerbertrand in https://github.com/apache/jmeter/pull/6072
* Fixed Chinese translation errors in multiple languages by @MarkHoo in https://github.com/apache/jmeter/pull/6073
* Add Java 22 version (ignored) to the build matrix by @vlsi in https://github.com/apache/jmeter/pull/6112
* chore: bump Gradle to 8.5 by @vlsi in https://github.com/apache/jmeter/pull/6166
* refactor: migrate existing Groovy tests to Kotlin, remove Groovy compiler from the build pipeline by @vlsi in https://github.com/apache/jmeter/pull/6212
* Refactor JUnit 3 and JUnit 4 tests to JUnit 5, remove JUnit 4 dependency by @vlsi in https://github.com/apache/jmeter/pull/6214
* docs: update changelog for 5.6.3 by @vlsi in https://github.com/apache/jmeter/pull/6190

## Update dependencies
* fix(deps): update dependency org.neo4j.driver:neo4j-java-driver to v4.4.12 by @renovate-bot in https://github.com/apache/jmeter/pull/6039
* fix(deps): update dependency org.jetbrains.kotlinx:kotlinx-coroutines-bom to v1.7.3 by @renovate-bot in https://github.com/apache/jmeter/pull/6038
* fix(deps): update dependency org.eclipse.jgit:org.eclipse.jgit to v5.13.2.202306221912-r by @renovate-bot in https://github.com/apache/jmeter/pull/6037
* fix(deps): update dependency org.codehaus.groovy:groovy-bom to v3.0.19 by @renovate-bot in https://github.com/apache/jmeter/pull/6036
* fix(deps): update kotlin monorepo to v1.9.21 by @renovate-bot in https://github.com/apache/jmeter/pull/6111
* chore(deps): update release-drafter/release-drafter digest to 09c613e by @renovate-bot in https://github.com/apache/jmeter/pull/6115
* fix(deps): update dependency jacoco to v0.8.11 by @renovate-bot in https://github.com/apache/jmeter/pull/6118
* fix(deps): update dependency com.github.tomakehurst:wiremock-jre8 to v2.35.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6117
* fix(deps): update dependency net.bytebuddy:byte-buddy to v1.14.10 by @renovate-bot in https://github.com/apache/jmeter/pull/6120
* fix(deps): update org.apache.activemq to v5.16.7 by @renovate-bot in https://github.com/apache/jmeter/pull/6122
* fix(deps): update dependency org.ow2.asm:asm to v9.6 by @renovate-bot in https://github.com/apache/jmeter/pull/6132
* fix(deps): update dependency org.jsoup:jsoup to v1.16.2 by @renovate-bot in https://github.com/apache/jmeter/pull/6128
* fix(deps): update dependency org.apache.mina:mina-core to v2.2.3 by @renovate-bot in https://github.com/apache/jmeter/pull/6127
* fix(deps): update dependency org.apache.httpcomponents.client5:httpclient5 to v5.2.2 by @renovate-bot in https://github.com/apache/jmeter/pull/6126
* fix(deps): update dependency commons-codec:commons-codec to v1.16.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6133
* fix(deps): update dependency org.jetbrains:annotations to v24.1.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6130
* fix(deps): update dependency commons-io:commons-io to v2.15.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6134
* chore(deps): update actions/checkout action to v4 by @renovate-bot in https://github.com/apache/jmeter/pull/6146
* chore(deps): update actions/github-script action to v7 by @renovate-bot in https://github.com/apache/jmeter/pull/6147
* fix(deps): update org.openjdk.jmh to v1.37 by @renovate-bot in https://github.com/apache/jmeter/pull/6145
* fix(deps): update dependency org.jetbrains.dokka:org.jetbrains.dokka.gradle.plugin to v1.9.10 by @renovate-bot in https://github.com/apache/jmeter/pull/6141
* fix(deps): update dependency nl.jqno.equalsverifier:equalsverifier to v3.15.3 by @renovate-bot in https://github.com/apache/jmeter/pull/6138
* fix(deps): update dependency org.jetbrains.lets-plot:lets-plot-kotlin-jvm to v4.5.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6142
* fix(deps): update dependency spotbugs to v4.8.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6143
* fix(deps): update org.apache.logging.log4j to v2.22.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6157
* fix(deps): update net.minidev json-smart to v2.5.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6156
* fix(deps): update dependency org.apache.xmlgraphics:xmlgraphics-commons to v2.9 by @renovate-bot in https://github.com/apache/jmeter/pull/6150
* fix(deps): update dependency commons-net:commons-net to v3.10.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6135
* fix(deps): update dependency org.junit:junit-bom to v5.10.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6131
* fix(deps): update dependency org.apache.commons:commons-lang3 to v3.14.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6153
* fix(deps): update io.burt to v0.6.0 by @renovate-bot in https://github.com/apache/jmeter/pull/6159
* fix(deps): update dependency com.github.spotbugs:com.github.spotbugs.gradle.plugin to v5.2.5 by @renovate-bot in https://github.com/apache/jmeter/pull/6167
* fix(deps): update dependency commons-io:commons-io to v2.15.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6168
* fix(deps): update dependency com.fifesoft:rsyntaxtextarea to v3.3.4 by @renovate-bot in https://github.com/apache/jmeter/pull/6158
* fix(deps): update dependency nl.jqno.equalsverifier:equalsverifier to v3.15.4 by @renovate-bot in https://github.com/apache/jmeter/pull/6178
* chore(deps): update actions/setup-java action to v4 by @renovate-bot in https://github.com/apache/jmeter/pull/6184
* fix(deps): update dependency com.github.spotbugs:com.github.spotbugs.gradle.plugin to v6 by @renovate-bot in https://github.com/apache/jmeter/pull/6185
* fix(deps): update dependency org.apache.httpcomponents.client5:httpclient5 to v5.3 by @renovate-bot in https://github.com/apache/jmeter/pull/6181
* fix(deps): update dependency org.jsoup:jsoup to v1.17.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6182
* fix(deps): update dependency spotbugs to v4.8.3 by @renovate-bot in https://github.com/apache/jmeter/pull/6187
* fix(deps): update dependency net.sf.saxon:saxon-he to v11.6 by @renovate-bot in https://github.com/apache/jmeter/pull/6180
* fix(deps): update dependency org.jetbrains.lets-plot:lets-plot-batik to v4 by @renovate-bot in https://github.com/apache/jmeter/pull/6189
* fix(deps): update com.fasterxml.jackson.core to v2.16.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6200
* fix(deps): update dependency com.github.spotbugs:com.github.spotbugs.gradle.plugin to v6.0.4 by @renovate-bot in https://github.com/apache/jmeter/pull/6201
* fix(deps): update dependency org.neo4j.driver:neo4j-java-driver to v4.4.13 by @renovate-bot in https://github.com/apache/jmeter/pull/6206
* fix(deps): update dependency net.bytebuddy:byte-buddy to v1.14.11 by @renovate-bot in https://github.com/apache/jmeter/pull/6203
* fix(deps): update kotlin monorepo to v1.9.22 by @renovate-bot in https://github.com/apache/jmeter/pull/6207
* fix(deps): update dependency nl.jqno.equalsverifier:equalsverifier to v3.15.5 by @renovate-bot in https://github.com/apache/jmeter/pull/6204
* Streamline binding of UI elements to TestElement properties by @vlsi in https://github.com/apache/jmeter/pull/6199
* fix(deps): update org.apache.logging.log4j to v2.22.1 by @renovate-bot in https://github.com/apache/jmeter/pull/6213


## New Contributors
* @pochopsp made their first contribution in https://github.com/apache/jmeter/pull/6045
* @sebbASF made their first contribution in https://github.com/apache/jmeter/pull/6050
* @tylerbertrand made their first contribution in https://github.com/apache/jmeter/pull/6072
* @MarkHoo made their first contribution in https://github.com/apache/jmeter/pull/6073

**Full Changelog**: https://github.com/apache/jmeter/compare/rel/v5.6.2...rel/v5.6.3

---

> **Source** [apache/jmeter](https://github.com/apache/jmeter) · `rel/v5.6.3` · 2024-01-09 · [upstream release](https://github.com/apache/jmeter/releases/tag/rel/v5.6.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
