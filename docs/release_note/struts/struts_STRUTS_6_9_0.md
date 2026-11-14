---
title: "struts STRUTS_6_9_0"
project: "struts"
repo: "apache/struts"
tag: "STRUTS_6_9_0"
published: "2026-04-10"
type: "release"
lang: "en"
summary: "WW-5583 Bump commons-validator:commons-validator from 1.9.0 to 1.10.0[bot] · WW-5581 Bump org.freemarker:freemarker from 2.3.33 to 2.3.34[bot] · WW-5584 Bump asm.version from 9.7.1 to 9.9[bot]"
---

# struts STRUTS_6_9_0

## What's Changed
* WW-5583 Bump commons-validator:commons-validator from 1.9.0 to 1.10.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1385
* WW-5581 Bump org.freemarker:freemarker from 2.3.33 to 2.3.34 by @dependabot[bot] in https://github.com/apache/struts/pull/1386
* WW-5584 Bump asm.version from 9.7.1 to 9.9 by @dependabot[bot] in https://github.com/apache/struts/pull/1393
* WW-5597 Bump org.apache.commons:commons-lang3 from 3.17.0 to 3.20.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1455
* Merges changes from older release branch by @lukaszlenart in https://github.com/apache/struts/pull/1458
* WW-5573  Multipart stream file cleanup by @ryanmurf in https://github.com/apache/struts/pull/1445
* fix(core): WW-5602 fix StreamResult contentCharSet handling by @lukaszlenart in https://github.com/apache/struts/pull/1511
* WW-5606 build(deps): bump commons-beanutils:commons-beanutils from 1.9.4 to 1.11.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1544
* WW-5608 build(deps): bump org.apache.velocity:velocity-engine-core from 2.3 to 2.4.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1546
* chore(conf): skips scans if PR created by Dependabot by @lukaszlenart in https://github.com/apache/struts/pull/1554
* WW-4291: Allow Spring bean names for type converters (6.9.x backport) by @lukaszlenart in https://github.com/apache/struts/pull/1564
* WW-5610 Extend Struts 7 forwards compat to more interceptors by @kusalk in https://github.com/apache/struts/pull/1565
* WW-5514: Make ProxyUtil cache configurable via struts constants by @lukaszlenart in https://github.com/apache/struts/pull/1573
* WW-4421 Fix duplicate @Action annotation check being skipped (6.x backport) by @lukaszlenart in https://github.com/apache/struts/pull/1590
* WW-5616 - JakartaStreamMultiPartRequest warns on file delete if the file doesn't exist by @brianandle in https://github.com/apache/struts/pull/1591
* WW-5535: enforce HTTP method annotations for wildcard actions by @lukaszlenart in https://github.com/apache/struts/pull/1593
* WW-5549 validate locale parameters against supportedLocale by @lukaszlenart in https://github.com/apache/struts/pull/1602
* Slim down CLAUDE.md to project-specific guardrails by @lukaszlenart in https://github.com/apache/struts/pull/1605
* Sets a proper SNAPSHOT version before next release by @lukaszlenart in https://github.com/apache/struts/pull/1615
* WW-4428 Add java.time support to JSON plugin (6.8.x backport) by @lukaszlenart in https://github.com/apache/struts/pull/1616
* WW-2963 fix(core): resolve default-action-ref via wildcard matching by @lukaszlenart in https://github.com/apache/struts/pull/1623
* WW-5618 feat(json): add configurable limits for DoS prevention by @lukaszlenart in https://github.com/apache/struts/pull/1626
* WW-5537 fix(core): resolve classloader/memory leaks during Tomcat hot deployment by @lukaszlenart in https://github.com/apache/struts/pull/1631
* ci: fix nightly publishing on release/struts-6-8-x by @lukaszlenart in https://github.com/apache/struts/pull/1644
* WW-5621 Harden XML parsers against Entity Expansion (Billion Laughs) attacks [S6] by @lukaszlenart in https://github.com/apache/struts/pull/1643
* WW-5622 Optimize Hibernate proxy detection when Hibernate is absent by @lukaszlenart in https://github.com/apache/struts/pull/1650
* ci(struts6): adjust workflows to use the new branch names by @lukaszlenart in https://github.com/apache/struts/pull/1658
* ci(scorecards): score cards analysis are only supported for default branch by @lukaszlenart in https://github.com/apache/struts/pull/1661

### Dependencies
* Bump org.apache.maven.plugins:maven-failsafe-plugin from 3.5.1 to 3.5.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1356
* Bump org.apache.maven.doxia:doxia-module-markdown from 1.12.0 to 2.0.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1369
* Bump org.assertj:assertj-core from 3.27.4 to 3.27.6 by @dependabot[bot] in https://github.com/apache/struts/pull/1387
* Bump com.thoughtworks.xstream:xstream from 1.4.20 to 1.4.21 by @dependabot[bot] in https://github.com/apache/struts/pull/1408
* Bump org.codehaus.mojo:exec-maven-plugin from 3.4.1 to 3.6.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1411
* Bump jackson.version from 2.20.0 to 2.20.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1412
* Bump org.apache.maven.plugins:maven-dependency-plugin from 3.8.0 to 3.9.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1426
* Bump org.jacoco:jacoco-maven-plugin from 0.8.12 to 0.8.14 by @dependabot[bot] in https://github.com/apache/struts/pull/1428
* Bump com.sun.xml.bind:jaxb-core from 2.3.0.1 to 4.0.6 by @dependabot[bot] in https://github.com/apache/struts/pull/1429
* Removes unused jaxb-core dependency by @lukaszlenart in https://github.com/apache/struts/pull/1434
* Bump log4j2.version from 2.25.1 to 2.25.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1437
* Bump org.jfree:jfreechart from 1.5.5 to 1.5.6 by @dependabot[bot] in https://github.com/apache/struts/pull/1440
* Bump org.apache.rat:apache-rat-plugin from 0.15 to 0.17 by @dependabot[bot] in https://github.com/apache/struts/pull/1436
* Bump maven-surefire-plugin.version from 3.5.1 to 3.5.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1452
* Bump org.apache.maven.plugins:maven-enforcer-plugin from 3.5.0 to 3.6.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1453
* Bump org.apache.maven.plugins:maven-release-plugin from 3.1.1 to 3.3.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1454
* Bump org.awaitility:awaitility from 4.2.2 to 4.3.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1462
* Bump org.apache.maven.plugins:maven-failsafe-plugin from 3.5.1 to 3.5.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1466
* build(deps): bump log4j2.version from 2.25.2 to 2.25.3 by @dependabot[bot] in https://github.com/apache/struts/pull/1486
* build(deps): bump org.apache.maven.plugins:maven-site-plugin from 3.20.0 to 3.21.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1494
* build(deps): bump asm.version from 9.9 to 9.9.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1495
* build(deps): bump org.apache.maven.plugins:maven-release-plugin from 3.3.0 to 3.3.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1499
* build(deps): bump org.owasp:dependency-check-maven from 10.0.4 to 12.1.9 by @dependabot[bot] in https://github.com/apache/struts/pull/1500
* build(deps): bump org.codehaus.mojo:versions-maven-plugin from 2.17.1 to 2.20.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1501
* build(deps): bump org.codehaus.mojo:exec-maven-plugin from 3.6.2 to 3.6.3 by @dependabot[bot] in https://github.com/apache/struts/pull/1509
* build(deps-dev): bump commons-logging:commons-logging from 1.3.4 to 1.3.5 by @dependabot[bot] in https://github.com/apache/struts/pull/1516
* build(deps): bump org.apache.maven.plugins:maven-war-plugin from 3.4.0 to 3.5.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1519
* build(deps): bump org.easymock:easymock from 5.4.0 to 5.6.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1520
* build(deps): bump io.github.x-stream:mxparser from 1.2.1 to 1.2.3 by @dependabot[bot] in https://github.com/apache/struts/pull/1517
* build(deps-dev): bump commons-validator:commons-validator from 1.10.0 to 1.10.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1523
* build(deps): bump org.apache.maven.plugins:maven-source-plugin from 3.3.1 to 3.4.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1532
* build(deps-dev): bump org.codehaus.mojo:versions-maven-plugin from 2.20.1 to 2.21.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1535
* build(deps-dev): bump org.apache.maven.plugins:maven-wrapper-plugin from 3.3.3 to 3.3.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1542
* build(deps): bump org.assertj:assertj-core from 3.27.6 to 3.27.7 by @dependabot[bot] in https://github.com/apache/struts/pull/1560
* build(deps): WW-5611 bump org.apache.commons:commons-text from 1.12.0 to 1.15.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1549
* build(deps): WW-5612 bump jackson.version from 2.20.1 to 2.21.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1550
* build(deps): bump org.owasp:dependency-check-maven from 12.1.9 to 12.2.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1527
* build(deps): bump org.apache.maven.plugins:maven-dependency-plugin from 3.9.0 to 3.10.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1576
* build(deps): bump jackson.version from 2.21.0 to 2.21.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1599
* build(deps): bump maven-surefire-plugin.version from 3.5.4 to 3.5.5 by @dependabot[bot] in https://github.com/apache/struts/pull/1600
* build(deps-dev): bump org.apache.maven.plugins:maven-failsafe-plugin from 3.5.4 to 3.5.5 by @dependabot[bot] in https://github.com/apache/struts/pull/1601
* build(deps-dev): bump commons-logging:commons-logging from 1.3.5 to 1.3.6 by @dependabot[bot] in https://github.com/apache/struts/pull/1621
* build(deps): bump jackson.version from 2.21.1 to 2.21.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1635
* build(deps): bump org.apache.maven.doxia:doxia-core from 2.0.0 to 2.1.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1636
* build(deps): bump org.apache.maven.doxia:doxia-module-markdown from 2.0.0 to 2.1.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1638
* build(deps): bump log4j2.version from 2.25.3 to 2.25.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1647

## New Contributors
* @ryanmurf made their first contribution in https://github.com/apache/struts/pull/1445

**Full Changelog**: https://github.com/apache/struts/compare/STRUTS_6_8_0...STRUTS_6_9_0

---

> **Source** [apache/struts](https://github.com/apache/struts) · `STRUTS_6_9_0` · 2026-04-10 · [upstream release](https://github.com/apache/struts/releases/tag/STRUTS_6_9_0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
