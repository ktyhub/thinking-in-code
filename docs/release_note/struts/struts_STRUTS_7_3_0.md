---
title: "struts STRUTS_7_3_0"
project: "struts"
repo: "apache/struts"
tag: "STRUTS_7_3_0"
published: "2026-08-01"
type: "release"
lang: "en"
summary: "Add CONTRIBUTING.md for new contributors · Release 7.2.1-RC1 · Add draft security threat model (THREAT_MODEL.md) + discoverability pointer · WW-5640 Add WebJars support to Struts core"
---

# struts STRUTS_7_3_0

## What's Changed
* Add CONTRIBUTING.md for new contributors by @lukaszlenart in https://github.com/apache/struts/pull/1757
* Release 7.2.1-RC1 by @lukaszlenart in https://github.com/apache/struts/pull/1744
* Add draft security threat model (THREAT_MODEL.md) + discoverability pointer by @potiuk in https://github.com/apache/struts/pull/1756
* WW-5640 Add WebJars support to Struts core by @lukaszlenart in https://github.com/apache/struts/pull/1765
* WW-5641 Restore struts.json.writer / struts.json.reader override in JSON plugin by @lukaszlenart in https://github.com/apache/struts/pull/1766
* WW-4858 Honor parameter filtering during JSON population by @lukaszlenart in https://github.com/apache/struts/pull/1773
* build(deps-dev): WW-5649 bump commons-logging:commons-logging from 1.3.6 to 1.4.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1760
* WW-5643 fix(json): confine StrutsJSONReader parse state to the parsing thread by @g0w6y in https://github.com/apache/struts/pull/1775
* WW-5644 fix(json): confine StrutsJSONWriter write state to the writing thread by @g0w6y in https://github.com/apache/struts/pull/1776
* WW-5645 Canonicalise static content paths and remove redundant URL decode by @arunmanni-ai in https://github.com/apache/struts/pull/1777
* WW-4858 Cover nested-leaf accepted-name and include patterns in JSON filtering by @lukaszlenart in https://github.com/apache/struts/pull/1783
* docs(security): treat a fix or PR as disclosure, require private report first by @lukaszlenart in https://github.com/apache/struts/pull/1785
* WW-5642 fix(rest): authorize @StrutsParameter on record/creator-bound REST body properties by @g0w6y in https://github.com/apache/struts/pull/1774
* WW-5646 Modernize path normalization in Include component by @arunmanni-ai in https://github.com/apache/struts/pull/1780
* WW-5650 Obtain a fresh JSON reader/writer per request in JSONInterceptor by @lukaszlenart in https://github.com/apache/struts/pull/1782
* WW-5647 Use ConcurrentHashMap for XSLT template cache by @arunmanni-ai in https://github.com/apache/struts/pull/1781
* WW-5652 Add support for Java records and Optional serialization in the JSON plugin. by @srilakshmikanthanp in https://github.com/apache/struts/pull/1792
* WW-5620 Standardize logging on Log4j2 by @lukaszlenart in https://github.com/apache/struts/pull/1794
* WW-5640 Rename DefaultWebJarUrlProvider to StrutsWebJarUrlProvider by @lukaszlenart in https://github.com/apache/struts/pull/1795
* WW-5653 Upgrade Bootstrap to 5.3.x in sample apps by @lukaszlenart in https://github.com/apache/struts/pull/1793
* WW-5604 Recognize CDI/Weld client proxies in SecurityMemberAccess by @lukaszlenart in https://github.com/apache/struts/pull/1796
* WW-4858 Evaluate JSON name allowlist at leaf keys only by @lukaszlenart in https://github.com/apache/struts/pull/1784
* WW-5591 Mark XWorkObjectPropertyAccessor as deprecated by @lukaszlenart in https://github.com/apache/struts/pull/1797
* WW-5580 Use Configuration.VERSION_2_3_34 for FreeMarker config by @lukaszlenart in https://github.com/apache/struts/pull/1798
* Library updates for cve's, suppression cleanup and not fail github action job SonarCloud if SONARCLOUD_TOKEN not found (summary report instead). by @duttonw in https://github.com/apache/struts/pull/1667
* ci(owasp): cap job timeout and disable NVD auto-update in check step by @lukaszlenart in https://github.com/apache/struts/pull/1807
* WW-5539 Concurrency performance enhancements by @lukaszlenart in https://github.com/apache/struts/pull/1799
* WW-5413 Avoid writing small in-memory multipart uploads to disk by @lukaszlenart in https://github.com/apache/struts/pull/1805
* WW-5474 Count files only for maxFiles, add maxParameterCount by @lukaszlenart in https://github.com/apache/struts/pull/1806
* WW-5540 Add caching to AbstractLocalizedTextProvider by @lukaszlenart in https://github.com/apache/struts/pull/1808
* WW-3427 Add regression test for conversion errors on aliased properties by @lukaszlenart in https://github.com/apache/struts/pull/1814
* WW-2934 Skip field validators when a field has a conversion error (opt-in) by @lukaszlenart in https://github.com/apache/struts/pull/1810
* WW-3530 Fix visitor-validator cache-key collision under wildcard actions by @lukaszlenart in https://github.com/apache/struts/pull/1811
* WW-3871 Derive ConversionRule prefixes for @TypeConversion keys by @lukaszlenart in https://github.com/apache/struts/pull/1812
* WW-3784 Order annotated wildcard actions most-specific-first by @lukaszlenart in https://github.com/apache/struts/pull/1813
* WW-5659 Resolve lazy interceptor params per invocation by @lukaszlenart in https://github.com/apache/struts/pull/1816
* docs: add creating-security-bulletins skill, bulletin template, and triage control-case rule by @lukaszlenart in https://github.com/apache/struts/pull/1820
* WW-5666 Apply input length limits consistently when reading request bodies by @lukaszlenart in https://github.com/apache/struts/pull/1819
* WW-5668 Bound the localized-text provider caches and align request-locale resolution by @lukaszlenart in https://github.com/apache/struts/pull/1821
* WW-5668 Keep the localized-text providers deserializable across a version upgrade by @lukaszlenart in https://github.com/apache/struts/pull/1824
* WW-5656 Mark ConversionRule.COLLECTION and the Collection_ prefix as @Deprecated by @lukaszlenart in https://github.com/apache/struts/pull/1825
* docs: add creating-version-notes skill and page template by @lukaszlenart in https://github.com/apache/struts/pull/1826

### Dependencies
* build(deps-dev): bump byte-buddy.version from 1.18.8 to 1.18.10 by @dependabot[bot] in https://github.com/apache/struts/pull/1745
* build(deps): bump org.sitemesh:sitemesh from 3.2.2 to 3.2.3 by @dependabot[bot] in https://github.com/apache/struts/pull/1749
* build(deps-dev): bump org.jacoco:jacoco-maven-plugin from 0.8.14 to 0.8.15 by @dependabot[bot] in https://github.com/apache/struts/pull/1751
* build(deps): bump org.glassfish.jaxb:jaxb-bom from 4.0.8 to 4.0.9 by @dependabot[bot] in https://github.com/apache/struts/pull/1753
* build(deps): bump actions/checkout from 6 to 7 by @dependabot[bot] in https://github.com/apache/struts/pull/1755
* build(deps): bump org.htmlunit:htmlunit from 5.1.0 to 5.2.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1762
* build(deps): bump github/codeql-action/upload-sarif from eda5730a8bfb740e03a28087a958444c646e5842 to 628fc3f124e68b0151f0d2a5d81e864ee1e42335 by @dependabot[bot] in https://github.com/apache/struts/pull/1758
* build(deps-dev): bump byte-buddy.version from 1.18.10 to 1.18.11 by @dependabot[bot] in https://github.com/apache/struts/pull/1771
* build(deps): bump github/codeql-action from 4.36.2 to 4.36.3 by @dependabot[bot] in https://github.com/apache/struts/pull/1769
* build(deps): bump github/codeql-action/upload-sarif from 628fc3f124e68b0151f0d2a5d81e864ee1e42335 to f58f0d11ebf5dedd870fab2f999275f7602cfa46 by @dependabot[bot] in https://github.com/apache/struts/pull/1768
* build(deps): bump org.apache.logging.log4j:log4j-bom from 2.26.0 to 2.26.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1767
* build(deps): bump net.sf.jasperreports:jasperreports from 7.0.4 to 7.0.7 in /plugins/jasperreports7 by @dependabot[bot] in https://github.com/apache/struts/pull/1779
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.22.0 to 2.22.1 by @dependabot[bot] in https://github.com/apache/struts/pull/1787
* build(deps): bump github/codeql-action from 4.36.3 to 4.37.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1786
* build(deps-dev): bump org.webjars:jquery from 3.7.1 to 4.0.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1789
* build(deps): bump org.htmlunit:htmlunit from 5.2.0 to 5.3.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1804
* build(deps): bump github/codeql-action from 4.37.0 to 4.37.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1800
* build(deps): bump org.webjars:webjars-locator-lite from 1.1.3 to 1.1.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1801
* build(deps): bump org.webjars:bootstrap from 5.3.7 to 5.3.8 by @dependabot[bot] in https://github.com/apache/struts/pull/1803
* build(deps-dev): bump org.webjars:jquery from 3.7.1 to 4.0.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1802
* build(deps): bump github/codeql-action from 4.37.2 to 4.37.3 by @dependabot[bot] in https://github.com/apache/struts/pull/1817
* build(deps): bump ossf/scorecard-action from 2.4.3 to 2.4.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1818

## New Contributors
* @potiuk made their first contribution in https://github.com/apache/struts/pull/1756
* @srilakshmikanthanp made their first contribution in https://github.com/apache/struts/pull/1792
* @duttonw made their first contribution in https://github.com/apache/struts/pull/1667

**Full Changelog**: https://github.com/apache/struts/compare/STRUTS_7_2_1...STRUTS_7_3_0

---

> **Source** [apache/struts](https://github.com/apache/struts) · `STRUTS_7_3_0` · 2026-08-01 · [upstream release](https://github.com/apache/struts/releases/tag/STRUTS_7_3_0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
