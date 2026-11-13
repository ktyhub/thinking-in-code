---
title: "shiro shiro-root-2.0.2"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-2.0.2"
published: "2024-11-07"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/shiro/compare/shiro-root-2.0.1...shiro-root-2.0.2"
---

# shiro shiro-root-2.0.2

## Enhancements
* [#1381] enh: Build on JDK 22 by @lprimak in https://github.com/apache/shiro/pull/1530
* [#1762] enh: follow desired request scheme when doing redirection by @lprimak in https://github.com/apache/shiro/pull/1727
* enh(jakarta,it-tests): no longer relying on hardcoded https port in t… by @lprimak in https://github.com/apache/shiro/pull/1808

## Bug fixes
* [SHIRO-875] Fix creating subjects from a `SubjectFactory` that disables session-creation by @boris-petrov in https://github.com/apache/shiro/pull/1514
* bugfix(deps): remove junit bom from root by @lprimak in https://github.com/apache/shiro/pull/1690

## Maintenance Tasks
* chore: re-enabled API compatibility check plugin by @lprimak in https://github.com/apache/shiro/pull/1652
* enh(checkstyle): disable method name validation for test classes by @lprimak in https://github.com/apache/shiro/pull/1650

## Dependency updates
* update quartz to 2.4.0-rc2, fix CVE-2023-39017 by @minchai23 in https://github.com/apache/shiro/pull/1498
* chore(deps): bump org.quartz-scheduler:quartz from 2.4.0-rc2 to 2.5.0-rc1 by @dependabot in https://github.com/apache/shiro/pull/1503
* chore(deps-dev): bump org.assertj:assertj-core from 3.25.3 to 3.26.0 by @dependabot in https://github.com/apache/shiro/pull/1505
* chore(deps): bump org.sonatype.plugins:nexus-staging-maven-plugin from 1.6.13 to 1.6.14 by @dependabot in https://github.com/apache/shiro/pull/1506
* chore(deps): bump com.puppycrawl.tools:checkstyle from 10.16.0 to 10.17.0 by @dependabot in https://github.com/apache/shiro/pull/1504
* chore(deps): bump org.sonatype.plugins:nexus-staging-maven-plugin from 1.6.14 to 1.7.0 by @dependabot in https://github.com/apache/shiro/pull/1508
* chore(deps): bump bytebuddy.version from 1.14.16 to 1.14.17 by @dependabot in https://github.com/apache/shiro/pull/1509
* chore(deps-dev): bump org.hsqldb:hsqldb from 2.7.2 to 2.7.3 by @dependabot in https://github.com/apache/shiro/pull/1511
* chore(deps): bump github/codeql-action from 3.25.6 to 3.25.7 by @dependabot in https://github.com/apache/shiro/pull/1515
* chore(deps): bump com.flowlogix:flowlogix-jee from 5.5.3 to 5.5.4 by @dependabot in https://github.com/apache/shiro/pull/1518
* chore(deps): bump org.apache.maven.plugins:maven-jxr-plugin from 3.3.2 to 3.4.0 by @dependabot in https://github.com/apache/shiro/pull/1519
* chore(deps): bump github/codeql-action from 3.25.7 to 3.25.8 by @dependabot in https://github.com/apache/shiro/pull/1520
* chore(deps): bump org.apache.maven.plugins:maven-help-plugin from 3.4.0 to 3.4.1 by @dependabot in https://github.com/apache/shiro/pull/1522
* chore(deps): bump org.apache.maven.plugins:maven-checkstyle-plugin from 3.3.1 to 3.4.0 by @dependabot in https://github.com/apache/shiro/pull/1523
* chore(deps): bump org.htmlunit:htmlunit from 4.1.0 to 4.2.0 by @dependabot in https://github.com/apache/shiro/pull/1524
* chore(deps-dev): bump org.easymock:easymock from 5.2.0 to 5.3.0 by @dependabot in https://github.com/apache/shiro/pull/1527
* chore(deps): bump org.apache.commons:commons-configuration2 from 2.10.1 to 2.11.0 by @dependabot in https://github.com/apache/shiro/pull/1528
* chore(deps): bump github/codeql-action from 3.25.8 to 3.25.9 by @dependabot in https://github.com/apache/shiro/pull/1533
* chore(deps): bump org.apache.maven.plugins:maven-pmd-plugin from 3.22.0 to 3.23.0 by @dependabot in https://github.com/apache/shiro/pull/1534
* chore(deps): bump actions/checkout from 4.1.6 to 4.1.7 by @dependabot in https://github.com/apache/shiro/pull/1535
* chore(deps): bump spring.version from 5.3.36 to 5.3.37 by @dependabot in https://github.com/apache/shiro/pull/1539
* chore(deps): bump github/codeql-action from 3.25.9 to 3.25.10 by @dependabot in https://github.com/apache/shiro/pull/1536
* deps: updated javassist to latest by @lprimak in https://github.com/apache/shiro/pull/1545
* chore(deps-dev): bump tomcat.version from 10.1.24 to 10.1.25 by @dependabot in https://github.com/apache/shiro/pull/1546
* chore(deps): bump org.apache.maven.plugins:maven-scm-publish-plugin from 3.2.1 to 3.3.0 by @dependabot in https://github.com/apache/shiro/pull/1553
* chore(deps): bump junit.version from 5.10.2 to 5.10.3 by @dependabot in https://github.com/apache/shiro/pull/1555
* chore(deps): bump org.htmlunit:htmlunit from 4.2.0 to 4.3.0 by @dependabot in https://github.com/apache/shiro/pull/1556
* chore(deps): bump github/codeql-action from 3.25.10 to 3.25.11 by @dependabot in https://github.com/apache/shiro/pull/1557
* chore(deps): bump org.projectlombok:lombok from 1.18.32 to 1.18.34 by @dependabot in https://github.com/apache/shiro/pull/1558
* chore(deps): bump org.owasp:dependency-check-maven from 9.2.0 to 10.0.0 by @dependabot in https://github.com/apache/shiro/pull/1564
* chore(deps): bump org.codehaus.mojo:versions-maven-plugin from 2.16.2 to 2.17.0 by @dependabot in https://github.com/apache/shiro/pull/1562
* chore(deps): bump groovy.version from 4.0.21 to 4.0.22 by @dependabot in https://github.com/apache/shiro/pull/1563
* chore(deps): bump org.owasp:dependency-check-maven from 10.0.0 to 10.0.1 by @dependabot in https://github.com/apache/shiro/pull/1565
* chore(deps): bump jetty.version from 9.4.54.v20240208 to 9.4.55.v20240627 by @dependabot in https://github.com/apache/shiro/pull/1567
* chore(deps): bump org.codehaus.mojo:taglist-maven-plugin from 3.0.0 to 3.1.0 by @dependabot in https://github.com/apache/shiro/pull/1568
* chore(deps-dev): bump commons-logging:commons-logging from 1.3.2 to 1.3.3 by @dependabot in https://github.com/apache/shiro/pull/1569
* chore(deps): bump actions/upload-artifact from 4.3.3 to 4.3.4 by @dependabot in https://github.com/apache/shiro/pull/1573
* chore(deps): bump org.owasp:dependency-check-maven from 10.0.1 to 10.0.2 by @dependabot in https://github.com/apache/shiro/pull/1575
* chore(deps-dev): bump org.assertj:assertj-core from 3.26.0 to 3.26.3 by @dependabot in https://github.com/apache/shiro/pull/1580
* chore(deps): bump bytebuddy.version from 1.14.17 to 1.14.18 by @dependabot in https://github.com/apache/shiro/pull/1579
* chore(deps): bump org.jsoup:jsoup from 1.17.2 to 1.18.1 by @dependabot in https://github.com/apache/shiro/pull/1586
* chore(deps): bump org.apache:apache from 32 to 33 by @dependabot in https://github.com/apache/shiro/pull/1587
* chore(deps-dev): bump org.jboss.arquillian.junit5:arquillian-junit5-container from 1.8.0.Final to 1.9.0.Final by @dependabot in https://github.com/apache/shiro/pull/1578
* chore(deps-dev): bump tomcat.version from 10.1.25 to 10.1.26 by @dependabot in https://github.com/apache/shiro/pull/1594
* chore(deps): bump github/codeql-action from 3.25.11 to 3.25.12 by @dependabot in https://github.com/apache/shiro/pull/1595
* chore(deps): bump org.codehaus.mojo:versions-maven-plugin from 2.17.0 to 2.17.1 by @dependabot in https://github.com/apache/shiro/pull/1600
* chore(deps): bump org.apache.maven.plugins:maven-pmd-plugin from 3.23.0 to 3.24.0 by @dependabot in https://github.com/apache/shiro/pull/1601
* chore(deps): bump org.owasp:dependency-check-maven from 10.0.2 to 10.0.3 by @dependabot in https://github.com/apache/shiro/pull/1604
* chore(deps): bump com.hazelcast:hazelcast from 5.3.7 to 5.3.8 by @dependabot in https://github.com/apache/shiro/pull/1605
* chore(deps): bump org.apache.cxf:cxf-rt-rs-client from 3.6.3 to 3.6.4 by @dependabot in https://github.com/apache/shiro/pull/1606
* chore(deps-dev): bump org.apache.cxf:cxf-rt-frontend-jaxrs from 3.6.3 to 3.6.4 by @dependabot in https://github.com/apache/shiro/pull/1607
* chore(deps): bump org.apache.commons:commons-lang3 from 3.14.0 to 3.15.0 by @dependabot in https://github.com/apache/shiro/pull/1608
* chore(deps): bump github/codeql-action from 3.25.12 to 3.25.13 by @dependabot in https://github.com/apache/shiro/pull/1611
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.21.2 to 0.22.0 by @dependabot in https://github.com/apache/shiro/pull/1612
* chore(deps-dev): bump arquillian.core.version from 1.9.0.Final to 1.9.1.Final by @dependabot in https://github.com/apache/shiro/pull/1615
* chore(deps): bump github/codeql-action from 3.25.13 to 3.25.14 by @dependabot in https://github.com/apache/shiro/pull/1616
* chore(deps): bump ossf/scorecard-action from 2.3.3 to 2.4.0 by @dependabot in https://github.com/apache/shiro/pull/1619
* chore(deps): bump github/codeql-action from 3.25.14 to 3.25.15 by @dependabot in https://github.com/apache/shiro/pull/1618
* chore(deps): bump org.htmlunit:htmlunit from 4.3.0 to 4.4.0 by @dependabot in https://github.com/apache/shiro/pull/1620
* chore(deps-dev): bump org.hamcrest:hamcrest-core from 2.2 to 3.0 by @dependabot in https://github.com/apache/shiro/pull/1624
* chore(deps-dev): bump org.easymock:easymock from 5.3.0 to 5.4.0 by @dependabot in https://github.com/apache/shiro/pull/1625
* chore(deps): bump actions/upload-artifact from 4.3.4 to 4.3.5 by @dependabot in https://github.com/apache/shiro/pull/1626
* chore(deps): bump org.owasp.encoder:encoder from 1.2.3 to 1.3.0 by @dependabot in https://github.com/apache/shiro/pull/1628
* chore(deps): bump actions/setup-java from 4.2.1 to 4.2.2 by @dependabot in https://github.com/apache/shiro/pull/1632
* chore(deps-dev): bump tomcat.version from 10.1.26 to 10.1.28 by @dependabot in https://github.com/apache/shiro/pull/1634
* chore(deps): bump github/codeql-action from 3.25.15 to 3.26.0 by @dependabot in https://github.com/apache/shiro/pull/1636
* chore(deps): bump actions/upload-artifact from 4.3.5 to 4.3.6 by @dependabot in https://github.com/apache/shiro/pull/1637
* chore(deps): bump org.codehaus.mojo:exec-maven-plugin from 3.3.0 to 3.4.0 by @dependabot in https://github.com/apache/shiro/pull/1643
* chore(deps): bump slf4j.version from 2.0.13 to 2.0.14 by @dependabot in https://github.com/apache/shiro/pull/1642
* chore(deps): bump org.apache.commons:commons-lang3 from 3.15.0 to 3.16.0 by @dependabot in https://github.com/apache/shiro/pull/1641
* chore(deps): bump slf4j.version from 2.0.14 to 2.0.15 by @dependabot in https://github.com/apache/shiro/pull/1645
* chore(deps): bump slf4j.version from 2.0.15 to 2.0.16 by @dependabot in https://github.com/apache/shiro/pull/1647
* chore(deps): bump org.codehaus.mojo:exec-maven-plugin from 3.4.0 to 3.4.1 by @dependabot in https://github.com/apache/shiro/pull/1648
* chore(deps-dev): bump jakarta.servlet.jsp.jstl:jakarta.servlet.jsp.jstl-api from 3.0.0 to 3.0.1 by @dependabot in https://github.com/apache/shiro/pull/1649
* chore(deps): bump github/codeql-action from 3.26.0 to 3.26.2 by @dependabot in https://github.com/apache/shiro/pull/1653
* chore(deps): bump junit.version from 5.10.3 to 5.11.0 by @dependabot in https://github.com/apache/shiro/pull/1655
* chore(deps): bump spring.version from 5.3.37 to 5.3.39 by @dependabot in https://github.com/apache/shiro/pull/1654
* chore(deps): bump commons-cli:commons-cli from 1.8.0 to 1.9.0 by @dependabot in https://github.com/apache/shiro/pull/1658
* chore(deps): bump com.github.mjeanroy:junit-servers-jetty-9 from 3.1.1 to 3.2.0 by @dependabot in https://github.com/apache/shiro/pull/1664
* chore(deps): bump org.jboss.shrinkwrap.resolver:shrinkwrap-resolver-bom from 3.3.0 to 3.3.1 by @dependabot in https://github.com/apache/shiro/pull/1663
* chore(deps): bump bytebuddy.version from 1.14.18 to 1.14.19 by @dependabot in https://github.com/apache/shiro/pull/1662
* chore(deps-dev): bump commons-logging:commons-logging from 1.3.3 to 1.3.4 by @dependabot in https://github.com/apache/shiro/pull/1666
* chore(deps): bump github/codeql-action from 3.26.2 to 3.26.3 by @dependabot in https://github.com/apache/shiro/pull/1665
* chore(deps): bump org.owasp.encoder:encoder from 1.3.0 to 1.3.1 by @dependabot in https://github.com/apache/shiro/pull/1673
* chore(deps): bump com.github.mjeanroy:junit-servers-jetty-9 from 3.2.0 to 3.3.0 by @dependabot in https://github.com/apache/shiro/pull/1678
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.22.0 to 0.23.0 by @dependabot in https://github.com/apache/shiro/pull/1677
* chore(deps): bump github/codeql-action from 3.26.3 to 3.26.4 by @dependabot in https://github.com/apache/shiro/pull/1679
* chore(deps): bump org.apache.maven.plugins:maven-checkstyle-plugin from 3.4.0 to 3.5.0 by @dependabot in https://github.com/apache/shiro/pull/1684
* chore(deps): bump org.apache.maven.plugins:maven-help-plugin from 3.4.1 to 3.5.0 by @dependabot in https://github.com/apache/shiro/pull/1685
* chore(deps): bump org.apache.maven.plugins:maven-jxr-plugin from 3.4.0 to 3.5.0 by @dependabot in https://github.com/apache/shiro/pull/1686
* chore(deps): bump bytebuddy.version from 1.14.19 to 1.15.0 by @dependabot in https://github.com/apache/shiro/pull/1687
* deps: updated to latest SpringBoot 3 by @lprimak in https://github.com/apache/shiro/pull/1688
* chore: updated maven site model to 2.0 by @lprimak in https://github.com/apache/shiro/pull/1689
* chore(deps): bump com.puppycrawl.tools:checkstyle from 10.17.0 to 10.18.0 by @dependabot in https://github.com/apache/shiro/pull/1693
* chore(deps): bump github/codeql-action from 3.26.4 to 3.26.5 by @dependabot in https://github.com/apache/shiro/pull/1695
* chore(deps-dev): bump jakarta.servlet.jsp.jstl:jakarta.servlet.jsp.jstl-api from 3.0.1 to 3.0.2 by @dependabot in https://github.com/apache/shiro/pull/1694
* chore(deps): bump org.apache.maven.plugins:maven-pmd-plugin from 3.24.0 to 3.25.0 by @dependabot in https://github.com/apache/shiro/pull/1696
* chore(deps): bump mockito.version from 5.12.0 to 5.13.0 by @dependabot in https://github.com/apache/shiro/pull/1704
* chore(deps): bump github/codeql-action from 3.26.5 to 3.26.6 by @dependabot in https://github.com/apache/shiro/pull/1706
* chore(deps): bump bytebuddy.version from 1.15.0 to 1.15.1 by @dependabot in https://github.com/apache/shiro/pull/1705
* chore(deps): bump com.puppycrawl.tools:checkstyle from 10.18.0 to 10.18.1 by @dependabot in https://github.com/apache/shiro/pull/1707
* chore(deps): bump org.apache.commons:commons-lang3 from 3.16.0 to 3.17.0 by @dependabot in https://github.com/apache/shiro/pull/1708
* chore(deps): bump actions/upload-artifact from 4.3.6 to 4.4.0 by @dependabot in https://github.com/apache/shiro/pull/1710
* chore(deps): bump org.yaml:snakeyaml from 2.2 to 2.3 by @dependabot in https://github.com/apache/shiro/pull/1711
* chore(deps): bump org.omnifaces:omnifaces from 3.14.5 to 3.14.6 by @dependabot in https://github.com/apache/shiro/pull/1713
* chore(deps): bump org.owasp:dependency-check-maven from 10.0.3 to 10.0.4 by @dependabot in https://github.com/apache/shiro/pull/1712
* chore(deps): bump org.codehaus.mojo:buildnumber-maven-plugin from 3.2.0 to 3.2.1 by @dependabot in https://github.com/apache/shiro/pull/1716
* chore(deps): bump jetty.version from 9.4.55.v20240627 to 9.4.56.v20240826 by @dependabot in https://github.com/apache/shiro/pull/1718
* chore(deps): bump actions/setup-java from 4.2.2 to 4.3.0 by @dependabot in https://github.com/apache/shiro/pull/1719
* chore(deps): bump log4j.version from 2.23.1 to 2.24.0 by @dependabot in https://github.com/apache/shiro/pull/1721
* chore(deps-dev): bump tomcat.version from 10.1.28 to 10.1.29 by @dependabot in https://github.com/apache/shiro/pull/1723
* chore(deps): bump groovy.version from 4.0.22 to 4.0.23 by @dependabot in https://github.com/apache/shiro/pull/1724
* chore(deps): bump github/codeql-action from 3.26.6 to 3.26.7 by @dependabot in https://github.com/apache/shiro/pull/1725
* chore(deps-dev): bump tomcat.version from 10.1.29 to 10.1.30 by @dependabot in https://github.com/apache/shiro/pull/1729
* chore(deps): bump github/codeql-action from 3.26.7 to 3.26.8 by @dependabot in https://github.com/apache/shiro/pull/1760
* deps: updated Spring to 3.3.4 / 6.1.13 by @lprimak in https://github.com/apache/shiro/pull/1761
* chore(deps): bump com.flowlogix:flowlogix-jee from 5.5.4 to 5.5.5 by @dependabot in https://github.com/apache/shiro/pull/1763
* chore(deps): bump org.codehaus.mojo:jdepend-maven-plugin from 2.0 to 2.1 by @dependabot in https://github.com/apache/shiro/pull/1767
* chore(deps): bump actions/setup-java from 4.3.0 to 4.4.0 by @dependabot in https://github.com/apache/shiro/pull/1764
* chore(deps): bump bytebuddy.version from 1.15.1 to 1.15.2 by @dependabot in https://github.com/apache/shiro/pull/1769
* chore(deps): bump com.mycila:license-maven-plugin from 4.5 to 4.6 by @dependabot in https://github.com/apache/shiro/pull/1771
* chore(deps-dev): bump junit.engine.version from 1.11.0 to 1.11.1 by @dependabot in https://github.com/apache/shiro/pull/1770
* chore(deps): bump junit.version from 5.11.0 to 5.11.1 by @dependabot in https://github.com/apache/shiro/pull/1772
* chore(deps): bump github/codeql-action from 3.26.8 to 3.26.9 by @dependabot in https://github.com/apache/shiro/pull/1773
* chore(deps): bump actions/checkout from 4.1.7 to 4.2.0 by @dependabot in https://github.com/apache/shiro/pull/1775
* chore(deps): bump mockito.version from 5.13.0 to 5.14.0 by @dependabot in https://github.com/apache/shiro/pull/1777
* chore(deps): bump bytebuddy.version from 1.15.2 to 1.15.3 by @dependabot in https://github.com/apache/shiro/pull/1778
* chore(deps): bump com.puppycrawl.tools:checkstyle from 10.18.1 to 10.18.2 by @dependabot in https://github.com/apache/shiro/pull/1784
* chore(deps): bump mockito.version from 5.14.0 to 5.14.1 by @dependabot in https://github.com/apache/shiro/pull/1782
* chore(deps): bump github/codeql-action from 3.26.9 to 3.26.10 by @dependabot in https://github.com/apache/shiro/pull/1779
* chore(deps): bump log4j.version from 2.24.0 to 2.24.1 by @dependabot in https://github.com/apache/shiro/pull/1783
* chore(deps): bump org.apache.maven.skins:maven-fluido-skin from 2.0.0-M10 to 2.0.0-M11 by @dependabot in https://github.com/apache/shiro/pull/1785
* chore(deps): bump org.codehaus.gmavenplus:gmavenplus-plugin from 3.0.2 to 4.0.1 by @dependabot in https://github.com/apache/shiro/pull/1790
* chore(deps): bump github/codeql-action from 3.26.10 to 3.26.11 by @dependabot in https://github.com/apache/shiro/pull/1791
* chore(deps-dev): bump junit.engine.version from 1.11.1 to 1.11.2 by @dependabot in https://github.com/apache/shiro/pull/1793
* chore(deps): bump junit.version from 5.11.1 to 5.11.2 by @dependabot in https://github.com/apache/shiro/pull/1792
* chore(deps): bump actions/checkout from 4.2.0 to 4.2.1 by @dependabot in https://github.com/apache/shiro/pull/1794
* chore(deps): bump actions/cache from 4.0.2 to 4.1.0 by @dependabot in https://github.com/apache/shiro/pull/1795
* chore(deps-dev): bump org.junit-pioneer:junit-pioneer from 2.2.0 to 2.3.0 by @dependabot in https://github.com/apache/shiro/pull/1802
* chore(deps): bump github/codeql-action from 3.26.11 to 3.26.12 by @dependabot in https://github.com/apache/shiro/pull/1796
* chore(deps): bump actions/upload-artifact from 4.4.0 to 4.4.1 by @dependabot in https://github.com/apache/shiro/pull/1797
* chore(deps): bump actions/cache from 4.1.0 to 4.1.1 by @dependabot in https://github.com/apache/shiro/pull/1803
* chore(deps): bump actions/upload-artifact from 4.4.1 to 4.4.3 by @dependabot in https://github.com/apache/shiro/pull/1805
* chore(deps): bump bytebuddy.version from 1.15.3 to 1.15.4 by @dependabot in https://github.com/apache/shiro/pull/1807
* chore(deps): bump io.openliberty.tools:liberty-maven-plugin from 3.10.3 to 3.11.0 by @dependabot in https://github.com/apache/shiro/pull/1813
* chore(deps): bump org.codehaus.mojo:taglist-maven-plugin from 3.1.0 to 3.2.0 by @dependabot in https://github.com/apache/shiro/pull/1812
* chore(deps): bump com.flowlogix:flowlogix-jee from 5.5.5 to 5.5.6 by @dependabot in https://github.com/apache/shiro/pull/1811
* chore(deps): bump github/codeql-action from 3.26.12 to 3.26.13 by @dependabot in https://github.com/apache/shiro/pull/1816
* chore(deps): bump org.codehaus.mojo:taglist-maven-plugin from 3.2.0 to 3.2.1 by @dependabot in https://github.com/apache/shiro/pull/1814
* chore(deps): bump mockito.version from 5.14.1 to 5.14.2 by @dependabot in https://github.com/apache/shiro/pull/1818
* chore(deps): bump io.openliberty.tools:liberty-maven-plugin from 3.11.0 to 3.11.1 by @dependabot in https://github.com/apache/shiro/pull/1817
* chore(deps): bump bytebuddy.version from 1.15.4 to 1.15.5 by @dependabot in https://github.com/apache/shiro/pull/1821
* chore(deps-dev): bump junit.engine.version from 1.11.2 to 1.11.3 by @dependabot in https://github.com/apache/shiro/pull/1827
* chore(deps): bump org.owasp:dependency-check-maven from 10.0.4 to 11.0.0 by @dependabot in https://github.com/apache/shiro/pull/1828
* chore(deps): bump org.apache.maven.plugins:maven-help-plugin from 3.5.0 to 3.5.1 by @dependabot in https://github.com/apache/shiro/pull/1825
* chore(deps): bump junit.version from 5.11.2 to 5.11.3 by @dependabot in https://github.com/apache/shiro/pull/1824
* chore(deps): bump org.htmlunit:htmlunit from 4.4.0 to 4.5.0 by @dependabot in https://github.com/apache/shiro/pull/1826
* chore(deps): bump github/codeql-action from 3.26.13 to 3.27.0 by @dependabot in https://github.com/apache/shiro/pull/1834
* chore(deps): bump org.codehaus.mojo:exec-maven-plugin from 3.4.1 to 3.5.0 by @dependabot in https://github.com/apache/shiro/pull/1833
* chore(deps): bump actions/cache from 4.1.1 to 4.1.2 by @dependabot in https://github.com/apache/shiro/pull/1835
* chore(deps): bump org.jboss.shrinkwrap.resolver:shrinkwrap-resolver-bom from 3.3.1 to 3.3.2 by @dependabot in https://github.com/apache/shiro/pull/1837
* chore(deps): bump actions/checkout from 4.2.1 to 4.2.2 by @dependabot in https://github.com/apache/shiro/pull/1839
* chore(deps): bump bytebuddy.version from 1.15.5 to 1.15.7 by @dependabot in https://github.com/apache/shiro/pull/1836
* chore(deps): bump actions/setup-java from 4.4.0 to 4.5.0 by @dependabot in https://github.com/apache/shiro/pull/1840
* chore(deps): bump org.apache.maven.plugins:maven-jxr-plugin from 3.5.0 to 3.6.0 by @dependabot in https://github.com/apache/shiro/pull/1842
* chore(deps): bump org.apache.maven.plugins:maven-checkstyle-plugin from 3.5.0 to 3.6.0 by @dependabot in https://github.com/apache/shiro/pull/1841
* chore(deps): bump org.quartz-scheduler:quartz from 2.5.0-rc1 to 2.5.0-rc2 by @dependabot in https://github.com/apache/shiro/pull/1843
* chore(deps): bump com.puppycrawl.tools:checkstyle from 10.18.2 to 10.19.0 by @dependabot in https://github.com/apache/shiro/pull/1847
* chore(deps): bump org.apache.maven.plugins:maven-pmd-plugin from 3.25.0 to 3.26.0 by @dependabot in https://github.com/apache/shiro/pull/1848
* chore(deps): bump org.owasp:dependency-check-maven from 11.0.0 to 11.1.0 by @dependabot in https://github.com/apache/shiro/pull/1853
* chore(deps-dev): bump org.bouncycastle:bcprov-jdk18on from 1.78.1 to 1.79 by @dependabot in https://github.com/apache/shiro/pull/1852
* chore(deps): bump com.puppycrawl.tools:checkstyle from 10.19.0 to 10.20.0 by @dependabot in https://github.com/apache/shiro/pull/1854
* chore(deps-dev): bump org.hsqldb:hsqldb from 2.7.3 to 2.7.4 by @dependabot in https://github.com/apache/shiro/pull/1856
* chore(deps): bump bytebuddy.version from 1.15.7 to 1.15.10 by @dependabot in https://github.com/apache/shiro/pull/1855
* chore(deps): bump org.apache.maven.skins:maven-fluido-skin from 2.0.0-M11 to 2.0.0 by @dependabot in https://github.com/apache/shiro/pull/1864
* chore(deps): bump org.htmlunit:htmlunit from 4.5.0 to 4.6.0 by @dependabot in https://github.com/apache/shiro/pull/1865

## New Contributors
* @minchai23 made their first contribution in https://github.com/apache/shiro/pull/1498

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-2.0.1...shiro-root-2.0.2

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-2.0.2` · 2024-11-07 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-2.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
