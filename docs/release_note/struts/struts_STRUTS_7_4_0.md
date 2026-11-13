---
title: "struts STRUTS_7_4_0"
project: "struts"
repo: "apache/struts"
tag: "STRUTS_7_4_0"
published: "2026-09-17"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/struts/compare/STRUTS730...STRUTS740"
---

# struts STRUTS_7_4_0

## What's Changed
* docs: refine creating-version-notes from the 7.3.0 release run by @lukaszlenart in https://github.com/apache/struts/pull/1828
* docs: add creating-release-vote-mail skill by @lukaszlenart in https://github.com/apache/struts/pull/1836
* docs: hand over a paste-ready body in creating-release-vote-mail by @lukaszlenart in https://github.com/apache/struts/pull/1837
* docs(skills): require plain-text list mail in the two mail-producing skills by @lukaszlenart in https://github.com/apache/struts/pull/1843
* docs(skills): add releasing-struts, and configure the release plugin in the pom by @lukaszlenart in https://github.com/apache/struts/pull/1844
* Prepare for a new development cycle of Struts 7.4.0 by @lukaszlenart in https://github.com/apache/struts/pull/1829
* build(ci): stop .claude-only changes from triggering full builds by @lukaszlenart in https://github.com/apache/struts/pull/1846
* WW-5674 Cut the per-call allocations in SecurityMemberAccess package matching by @lukaszlenart in https://github.com/apache/struts/pull/1830
* build(ci): report the required check when only .claude/ changed by @lukaszlenart in https://github.com/apache/struts/pull/1849
* build(ci): baseline the Jenkins .claude/ filter on the PR target branch by @lukaszlenart in https://github.com/apache/struts/pull/1850
* docs: point the releasing-struts skill at the published Release Guidelines by @lukaszlenart in https://github.com/apache/struts/pull/1848
* docs(skills): send CVE advisory mails from the ASF CVE tool by @lukaszlenart in https://github.com/apache/struts/pull/1851
* docs(security): re-baseline the threat model on S2-070..S2-074 by @lukaszlenart in https://github.com/apache/struts/pull/1852
* docs: correct stale facts in CLAUDE.md by @lukaszlenart in https://github.com/apache/struts/pull/1857
* WW-5675 Share parsed OGNL security configuration across SecurityMemberAccess instances by @lukaszlenart in https://github.com/apache/struts/pull/1847
* WW-5676 Keep arrays resolving to the empty package in OGNL security checks by @lukaszlenart in https://github.com/apache/struts/pull/1858
* WW-5677 Remove the remaining redundant getPackage() lookups on the OGNL member-access path by @lukaszlenart in https://github.com/apache/struts/pull/1859
* WW-5685 Stop dropping the rest of a -conversion.properties file after the first already-mapped key by @lukaszlenart in https://github.com/apache/struts/pull/1860
* WW-1742 docs(execAndWait): document token-scoped background process naming by @lukaszlenart in https://github.com/apache/struts/pull/1861
* WW-5688 Resolve id-bearing REST URIs into the root namespace when declared by @lukaszlenart in https://github.com/apache/struts/pull/1862
* WW-5690 perf(dispatcher): load the dev-mode error template on first use by @lukaszlenart in https://github.com/apache/struts/pull/1864
* Update Maven Central badge link in README by @lukaszlenart in https://github.com/apache/struts/pull/1875
* chore(copilot): add code-review agent skill by @lukaszlenart in https://github.com/apache/struts/pull/1876
* docs: add merging-dependabot-prs skill by @lukaszlenart in https://github.com/apache/struts/pull/1877
* WW-5695 Derive HTML5 constraint attributes from validators, deprecate the JS validator by @lukaszlenart in https://github.com/apache/struts/pull/1865
* chore: remove stale Claude Code agents and commands by @lukaszlenart in https://github.com/apache/struts/pull/1884
* docs: point CLAUDE.md at THREAT_MODEL.md for security scope by @lukaszlenart in https://github.com/apache/struts/pull/1885
* docs: drop hardcoded test-class counts from the review guides by @lukaszlenart in https://github.com/apache/struts/pull/1886
* WW-5697 Restrict the indexed-access fast path in XWorkMethodAccessor to real indexed properties by @lukaszlenart in https://github.com/apache/struts/pull/1871
* WW-5698 Scope the ModelDriven exemption in StrutsParameterAuthorizer to the model object by @lukaszlenart in https://github.com/apache/struts/pull/1872
* WW-5700 fix(ognl): skip the store when a map or list element cannot be converted by @lukaszlenart in https://github.com/apache/struts/pull/1873
* WW-5701 fix(conversion): compare the conversion marker by identity, not equals by @lukaszlenart in https://github.com/apache/struts/pull/1874
* WW-5706 Align RestfulActionMapper action name handling with DefaultActionMapper by @lukaszlenart in https://github.com/apache/struts/pull/1880
* WW-5707 Deprecate legacy restful and restful2 action mappers in core by @lukaszlenart in https://github.com/apache/struts/pull/1882
* WW-5711 fix(conversion): bound fraction digits when formatting BigDecimal by @lukaszlenart in https://github.com/apache/struts/pull/1887
* chore: gate reply drafting in triaging-security-reports skill by @lukaszlenart in https://github.com/apache/struts/pull/1901
* WW-5712 Cover Jackson any-setters in REST parameter authorization by @carrerasdarren-cell in https://github.com/apache/struts/pull/1889
* WW-5717 Bump Spring Framework to 7.0.9 in the jakartaee11 profile by @lukaszlenart in https://github.com/apache/struts/pull/1911
* WW-5716 Bound the per-locale definition caches in the Tiles plugin by @lukaszlenart in https://github.com/apache/struts/pull/1902
* docs: frame CVE-at-release-time as PMC practice, not a rule by @lukaszlenart in https://github.com/apache/struts/pull/1917
* WW-3226 test: pin which value wins for each alias/params ordering by @lukaszlenart in https://github.com/apache/struts/pull/1918
* WW-3245 feat(jasperreports): fill from report parameters when no dataSource or connection is set by @lukaszlenart in https://github.com/apache/struts/pull/1919
* WW-5729 fix(jasperreports): override HashMap.get/containsKey in ValueStackShadowMap by @lukaszlenart in https://github.com/apache/struts/pull/1920
* WW-5731 fix(jasperreports7): stop using the field delimiter as the CSV record delimiter by @lukaszlenart in https://github.com/apache/struts/pull/1921
* WW-5732 fix(jasperreports7): match the report format case-insensitively by @lukaszlenart in https://github.com/apache/struts/pull/1922
* WW-5733 fix(jasperreports7): stop closing the response stream before the report is written by @lukaszlenart in https://github.com/apache/struts/pull/1923
* WW-5734 test(jasperreports7): run the plugin end-to-end on an embedded Tomcat by @lukaszlenart in https://github.com/apache/struts/pull/1924
* WW-5735 build(jasperreports7): declare jasperreports as provided by @lukaszlenart in https://github.com/apache/struts/pull/1926
* WW-5723 Bound the request body read in the REST plugin by @lukaszlenart in https://github.com/apache/struts/pull/1912
* WW-5724 Hand out a clone of the cached MessageFormat by @lukaszlenart in https://github.com/apache/struts/pull/1914
* WW-5725 Authorize the buffered creator path in AuthorizingSettableBeanProperty by @lukaszlenart in https://github.com/apache/struts/pull/1916
* WW-5669 Honour struts.csp.nonceSource alongside struts.csp.nonce.source by @lukaszlenart in https://github.com/apache/struts/pull/1927
* WW-5670 Parse struts.locale once and stop mislabelling the fallback locale by @lukaszlenart in https://github.com/apache/struts/pull/1928
* WW-5686 Stop DateTest.testJavaSqlDate racing the clock by @lukaszlenart in https://github.com/apache/struts/pull/1929
* WW-5687 Clear the conversion and validator caches on Dispatcher.cleanup() by @lukaszlenart in https://github.com/apache/struts/pull/1930
* WW-5709 Recognise fluent (non-void) setters in @StrutsParameter enforcement by @lukaszlenart in https://github.com/apache/struts/pull/1931
* WW-5710 Prime the OGNL allowlist against the action as well as the ModelDriven model by @lukaszlenart in https://github.com/apache/struts/pull/1932
* WW-5663 Hand a WithLazyParams interceptor its own mapping's params by @lukaszlenart in https://github.com/apache/struts/pull/1933
* WW-5702 fix(core): close the scope gaps in HTML5 constraint derivation by @lukaszlenart in https://github.com/apache/struts/pull/1934
* WW-5702 fix(core): tighten the HTML5 constraint provider's attribute hygiene by @lukaszlenart in https://github.com/apache/struts/pull/1935
* WW-5702 test(core): render pattern, required-on-radio and required-on-file end to end by @lukaszlenart in https://github.com/apache/struts/pull/1936
* WW-5740 fix(core): resolve visitor-nested constraint messages like validation does by @lukaszlenart in https://github.com/apache/struts/pull/1937
* WW-5703 fix(core): keep the HTML5 pattern from rejecting blank input the regex validator skips by @lukaszlenart in https://github.com/apache/struts/pull/1938
* WW-5704 fix(core): emit required on radio/file only when the bound value would fail the validator by @lukaszlenart in https://github.com/apache/struts/pull/1939
* WW-5715 fix(rest): authorize REST body properties by Java member name, not wire name by @lukaszlenart in https://github.com/apache/struts/pull/1940
* WW-5726 fix(rest): decline the in-place merge of a polymorphic REST body property by @lukaszlenart in https://github.com/apache/struts/pull/1941
* WW-5727 fix(rest): authorize the @JsonIdentityInfo id property by @lukaszlenart in https://github.com/apache/struts/pull/1943
* WW-5745 fix(rest): keep the read-time verdict for a forward-referenced property by @lukaszlenart in https://github.com/apache/struts/pull/1944
* WW-5746 fix(rest): authorize a bean-typed @JsonIdentityInfo id's members under the id path by @lukaszlenart in https://github.com/apache/struts/pull/1945
* WW-5747 fix(rest): leave the parser at the end of an object the redaction wrapper drops by @lukaszlenart in https://github.com/apache/struts/pull/1946
* WW-5748 fix(rest): let Jackson XML's deserializer modifier see the bean deserializer by @lukaszlenart in https://github.com/apache/struts/pull/1947
* WW-5720 fix(rest): log any-setter dynamic-key rejections once per request by @lukaszlenart in https://github.com/apache/struts/pull/1948
* WW-3353 fix(junit): make StrutsRestTestCase work against a REST/Convention app by @lukaszlenart in https://github.com/apache/struts/pull/1956
* WW-5718 fix(rest,bean-validation): add the resource-isolation interceptors to the plugin default stacks by @lukaszlenart in https://github.com/apache/struts/pull/1957
* WW-5749 fix(rest): write nothing from the XML handlers when there is no target by @lukaszlenart in https://github.com/apache/struts/pull/1959
* WW-5713 Fail closed for legacy Tiles OGNL evaluation by @kuranikaran in https://github.com/apache/struts/pull/1890
* WW-5713 refactor(tiles): resolve the legacy OGNL flag from the container's own ServletContext by @lukaszlenart in https://github.com/apache/struts/pull/1961
* WW-5719 Pin Maven distribution checksum by @cameroncrippen in https://github.com/apache/struts/pull/1942
* WW-5743 fix(convention): rank path-spanning ** patterns after single-segment ones by @lukaszlenart in https://github.com/apache/struts/pull/1962

### Dependencies

* build(deps): bump github/codeql-action from 4.37.3 to 4.37.6 by @dependabot[bot] in https://github.com/apache/struts/pull/1839
* build(deps): bump org.owasp:dependency-check-maven from 12.2.2 to 13.0.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1840
* build(deps): bump github/codeql-action from 4.37.6 to 4.37.7 by @dependabot[bot] in https://github.com/apache/struts/pull/1856
* build(deps): bump org.htmlunit:htmlunit from 5.3.0 to 5.4.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1853
* build(deps): bump org.apache.felix:maven-bundle-plugin from 6.0.2 to 6.1.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1831
* build(deps): bump org.apache.maven.wrapper:maven-wrapper from 3.3.2 to 3.3.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1870
* build(deps): bump github/codeql-action from 4.37.7 to 4.37.8 by @dependabot[bot] in https://github.com/apache/struts/pull/1867
* build(deps-dev): bump byte-buddy.version from 1.18.11 to 1.18.12 by @dependabot[bot] in https://github.com/apache/struts/pull/1866
* build(deps-dev): bump org.apache.commons:commons-collections4 from 4.5.0 to 4.6.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1838
* build(deps-dev): bump commons-validator:commons-validator from 1.10.1 to 1.11.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1833
* build(deps): bump mikepenz/action-junit-report from 6.4.2 to 6.5.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1900
* build(deps): bump actions/setup-java from 5 to 6 by @dependabot[bot] in https://github.com/apache/struts/pull/1899
* build(deps): bump org.easymock:easymock from 5.6.0 to 5.7.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1898
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.22.1 to 2.22.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1897
* build(deps): bump ognl:ognl from 3.4.11 to 3.4.12 by @dependabot[bot] in https://github.com/apache/struts/pull/1895
* build(deps): bump github/codeql-action from 4.37.8 to 4.37.9 by @dependabot[bot] in https://github.com/apache/struts/pull/1894
* build(deps): bump org.apache.maven:apache-maven from 3.9.9 to 3.9.16 by @dependabot[bot] in https://github.com/apache/struts/pull/1892
* build(deps): bump org.freemarker:freemarker from 2.3.34 to 2.3.35 by @dependabot[bot] in https://github.com/apache/struts/pull/1891
* build(deps): bump org.apache.felix:maven-bundle-plugin from 6.1.0 to 6.1.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1910
* build(deps-dev): bump org.apache.maven.plugins:maven-failsafe-plugin from 3.5.6 to 3.6.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1909
* build(deps): bump org.htmlunit:htmlunit from 5.4.0 to 5.5.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1906
* build(deps-dev): bump byte-buddy.version from 1.18.12 to 1.18.13 by @dependabot[bot] in https://github.com/apache/struts/pull/1904
* build(deps-dev): bump org.apache.tomcat.embed:tomcat-embed-core from 10.1.55 to 10.1.59 in /plugins/jasperreports7 by @dependabot[bot] in https://github.com/apache/struts/pull/1925

## New Contributors
* @carrerasdarren-cell made their first contribution in https://github.com/apache/struts/pull/1889
* @kuranikaran made their first contribution in https://github.com/apache/struts/pull/1890
* @cameroncrippen made their first contribution in https://github.com/apache/struts/pull/1942
**Full Changelog**: https://github.com/apache/struts/compare/STRUTS_7_3_0...STRUTS_7_4_0

---

> **Source** [apache/struts](https://github.com/apache/struts) · `STRUTS_7_4_0` · 2026-09-17 · [upstream release](https://github.com/apache/struts/releases/tag/STRUTS_7_4_0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
