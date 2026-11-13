---
title: "struts STRUTS_7_5_0"
project: "struts"
repo: "apache/struts"
tag: "STRUTS_7_5_0"
published: "2026-11-08"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/struts/compare/STRUTS740...STRUTS750"
---

# struts STRUTS_7_5_0

## What's Changed
* docs: state the control test that separates hardening from a vulnerability by @lukaszlenart in https://github.com/apache/struts/pull/1964
* docs(skills): send the [TEST] mail from the @apache.org identity by @lukaszlenart in https://github.com/apache/struts/pull/1963
* build(ci): decide "does this need a build" in one reusable workflow by @lukaszlenart in https://github.com/apache/struts/pull/1965
* ci: pin Scorecards checkout action by commit by @mcc0nnell in https://github.com/apache/struts/pull/1966
* build(ci): test once on JDK 17 in Jenkins, reserve Jetty ports for the showcase ITs by @lukaszlenart in https://github.com/apache/struts/pull/1967
* docs: drop derivable layout and architecture sections from CLAUDE.md by @lukaszlenart in https://github.com/apache/struts/pull/1977
* WW-5753 Reject cross-site non-GET navigations and cross-site GET subresource requests in the Fetch Metadata policy by @g0w6y in https://github.com/apache/struts/pull/1983
* WW-5751 Treat a negative maximumSize as no upload size limit by @lukaszlenart in https://github.com/apache/struts/pull/1976
* Release 7.4.0 RC-1 by @lukaszlenart in https://github.com/apache/struts/pull/1968
* WW-5752 Normalize request-derived values in log messages by @g0w6y in https://github.com/apache/struts/pull/1982
* docs(skills): resolve Dependabot tickets via Jira transition id by @lukaszlenart in https://github.com/apache/struts/pull/1985
* docs(skills): carry the 7.4.0 / 6.12.0 advisory lessons into the release skills by @lukaszlenart in https://github.com/apache/struts/pull/1987
* docs: re-baseline THREAT_MODEL.md against S2-075 to S2-078 by @lukaszlenart in https://github.com/apache/struts/pull/1988
* WW-5757 fix(bean-validation): resolve the constraint message template as the text key by @lukaszlenart in https://github.com/apache/struts/pull/1989
* WW-5759 Resolve @StrutsParameter accessors the way OGNL does by @lukaszlenart in https://github.com/apache/struts/pull/1992
* WW-5760 Upgrade OGNL to version 3.4.15 by @lukaszlenart in https://github.com/apache/struts/pull/1993
* WW-5758 Enforce @StrutsParameter authorization in AliasInterceptor's raw-parameter fallback by @g0w6y in https://github.com/apache/struts/pull/1991
* docs: drop the hard-coded version from CLAUDE.md by @lukaszlenart in https://github.com/apache/struts/pull/1994
* build(deps): WW-5763 bump org.apache.commons:commons-lang3 from 3.20.0 to 3.21.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1997
* build(deps): WW-5764 bump com.github.ben-manes.caffeine:caffeine from 3.2.4 to 3.3.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1995
* chore: hand Dependabot tickets back open and read fix versions from Jira by @lukaszlenart in https://github.com/apache/struts/pull/2001
* WW-3364 Use registered type converters in JSON serialization (opt-in) by @lukaszlenart in https://github.com/apache/struts/pull/2002
* WW-3447 test(convention): cover action-mapping flags with no tests by @lukaszlenart in https://github.com/apache/struts/pull/2003
* WW-3464 test(config): pin first-match-wins wildcard order by @lukaszlenart in https://github.com/apache/struts/pull/2004
* WW-3476 Add package-scoped constants by @lukaszlenart in https://github.com/apache/struts/pull/2005
* WW-5766 Support struts.scopedConstantProvider in Java-based configuration by @lukaszlenart in https://github.com/apache/struts/pull/2006
* WW-5767 Apply value substitution to scoped-constant values by @lukaszlenart in https://github.com/apache/struts/pull/2007
* WW-5768 Make struts.ui.theme and struts.ui.templateDir scopable per package by @lukaszlenart in https://github.com/apache/struts/pull/2008
* WW-5770 Make struts.convention.result.path scopable per package by @lukaszlenart in https://github.com/apache/struts/pull/2009
* build(ci): detect changes in-job and cancel superseded PR runs by @lukaszlenart in https://github.com/apache/struts/pull/2010
* build(ci): build a reduced matrix on pull requests by @lukaszlenart in https://github.com/apache/struts/pull/2011
* WW-5772 Remove inline event handlers from optiontransferselect, inputtransferselect, updownselect and combobox by @aeonframework in https://github.com/apache/struts/pull/2012
* build(ci): align GitHub Actions with the ASF Actions policy by @lukaszlenart in https://github.com/apache/struts/pull/2024
* WW-5765 Re-store only the token validated in the request in execAndWait by @lukaszlenart in https://github.com/apache/struts/pull/2022
* WW-5780 fix(html5): close the checkbox input in the html5 checkboxlist template by @lukaszlenart in https://github.com/apache/struts/pull/2025
* WW-5781 fix(tags): render a single class and style on checkboxlist and radio inputs by @lukaszlenart in https://github.com/apache/struts/pull/2026
* WW-5782 fix(tags): document and warn that s:a href ignores nested params by @lukaszlenart in https://github.com/apache/struts/pull/2034
* WW-3624 feat(tags): allow regex matching of field names on fielderror tag by @lukaszlenart in https://github.com/apache/struts/pull/2036
* WW-3655 test(freemarker): guard against resolving the result location from the request URI by @lukaszlenart in https://github.com/apache/struts/pull/2037
* WW-3717 feat(core): restrict an action to HTTP methods with an http-method attribute by @lukaszlenart in https://github.com/apache/struts/pull/2038
* WW-3666 Trim surrounding whitespace before converting to non-String types by @lukaszlenart in https://github.com/apache/struts/pull/2039
* WW-3720 test(core): cover comma-delimited interceptor params split across lines by @lukaszlenart in https://github.com/apache/struts/pull/2040
* WW-3792 test(core): pin css_xhtml checkbox left-label wrappers to match other controls by @lukaszlenart in https://github.com/apache/struts/pull/2041
* build(deps): WW-5779 bump asm.version from 9.10.1 to 9.11 by @dependabot[bot] in https://github.com/apache/struts/pull/2030
* WW-3576 Keep SessionMap in step with the HttpSession by @lukaszlenart in https://github.com/apache/struts/pull/2042
* WW-4323 Pin that ParameterNameAware cannot accept an excluded name by @lukaszlenart in https://github.com/apache/struts/pull/2049
* WW-5789 fix(rest): keep params-bound values when the body handler binds nothing by @lukaszlenart in https://github.com/apache/struts/pull/2050
* WW-5790 fix(rest): copy only what the body handler changed in the two-phase copy by @lukaszlenart in https://github.com/apache/struts/pull/2051
* WW-5786 Pin HTTP method enforcement on Convention plugin actions by @lukaszlenart in https://github.com/apache/struts/pull/2052
* WW-5791 Struts Boot: run Struts from main() on embedded Tomcat with a fluent action registry by @lukaszlenart in https://github.com/apache/struts/pull/2053
* WW-5792 Warn instead of silently skipping non-public action classes by @lukaszlenart in https://github.com/apache/struts/pull/2054
* WW-5778 Support datetextfield tag in the html5 theme by @lukaszlenart in https://github.com/apache/struts/pull/2055
* WW-5810 Support java.time types in the datetextfield tag by @lukaszlenart in https://github.com/apache/struts/pull/2056
* WW-5812 DateConverter rejects valid ISO dates when a lenient-only format matches first by @lukaszlenart in https://github.com/apache/struts/pull/2057
* WW-5813 DateConverter rejects date input with text after the parsed value by @lukaszlenart in https://github.com/apache/struts/pull/2058
* WW-5814 Opt-in offset-aware ISO date-times for java.util.Date by @lukaszlenart in https://github.com/apache/struts/pull/2059
* WW-5816 Add a range validator for java.time.LocalDate by @lukaszlenart in https://github.com/apache/struts/pull/2060
* WW-5811 Derive date min/max and temporal required HTML5 constraints by @lukaszlenart in https://github.com/apache/struts/pull/2061
* WW-5819 Log a validator param that fails type conversion by @lukaszlenart in https://github.com/apache/struts/pull/2062
* WW-5823 Escape javatemplates dynamic attributes and evaluate them only for lazy components by @lukaszlenart in https://github.com/apache/struts/pull/2076
* docs: state output encoding by the framework's own tags as a §8 property by @lukaszlenart in https://github.com/apache/struts/pull/2078
* WW-5824 fix(core): escape the radio name attribute like every other tag by @lukaszlenart in https://github.com/apache/struts/pull/2079
* WW-5825 Normalize request-derived values in DateTextFieldInterceptor log message by @g0w6y in https://github.com/apache/struts/pull/2081
* WW-5828 Bound integer digits when formatting BigDecimal by @lukaszlenart in https://github.com/apache/struts/pull/2085
* docs: tie the control test to the THREAT_MODEL §8 properties by @lukaszlenart in https://github.com/apache/struts/pull/2083
* Fix typo 'occured' to 'occurred' in MultiPartRequestWrapper and ValidationInterceptor by @siddiqueirshad in https://github.com/apache/struts/pull/2094
* WW-5837 Upgrade OGNL to version 3.4.17 by @lukaszlenart in https://github.com/apache/struts/pull/2107
* build: drop redundant doxia-core override from maven-site-plugin by @lukaszlenart in https://github.com/apache/struts/pull/2108
* WW-5820 Hold the declared-on-neither fallback to objects further down the value stack by @emilhuseyn in https://github.com/apache/struts/pull/2073
* WW-5774 Move combobox change handling into a static script with a delegated listener by @emilhuseyn in https://github.com/apache/struts/pull/2074
* WW-5826 fix(core): make ScopeInterceptor lock table thread-safe by @g0w6y in https://github.com/apache/struts/pull/2082
* WW-5834 fix(conversion): reject over-long numeric strings before parsing them by @g0w6y in https://github.com/apache/struts/pull/2092
* docs(skills): require the request-to-sink path in every security triage by @lukaszlenart in https://github.com/apache/struts/pull/2110
* WW-5838 Exclude java.beans, java.lang.reflect and java.lang.invoke from OGNL member access by default by @lukaszlenart in https://github.com/apache/struts/pull/2111
* docs(skills): owe a [NOT-VULNERABILITY] user-list notice for public reports closed as non-vulnerabilities by @lukaszlenart in https://github.com/apache/struts/pull/2113
* WW-5831 fix(xslt): make BeanAdapter property descriptor cache thread-safe by @g0w6y in https://github.com/apache/struts/pull/2089
* WW-5832 Bound the FreeMarker template cache by @g0w6y in https://github.com/apache/struts/pull/2090
* WW-5833 fix(rest): authorize nested container members at the depth ParametersInterceptor counts by @g0w6y in https://github.com/apache/struts/pull/2091
* WW-4164 Support per-package and per-action action extensions by @lukaszlenart in https://github.com/apache/struts/pull/2093
* WW-5836 Bound integer digits in number tag and message arguments by @lukaszlenart in https://github.com/apache/struts/pull/2095
* WW-5842 fix(core)!: map actions from the servlet path and path info the container reports by @lukaszlenart in https://github.com/apache/struts/pull/2118
* WW-5754 Accept cross-site HEAD navigations in the Fetch Metadata policy by @lukaszlenart in https://github.com/apache/struts/pull/2122
* WW-5846 Match exemptedPaths against the request path in FetchMetadata, COOP and COEP interceptors by @lukaszlenart in https://github.com/apache/struts/pull/2124
* WW-5847 fix(core): preselect multiple values in the doubleselect second list by @lukaszlenart in https://github.com/apache/struts/pull/2126
* chore: allow gh pr review in project Claude settings by @lukaszlenart in https://github.com/apache/struts/pull/2128
* WW-5829 fix(interceptor): apply parameter value filters to every value of a multi-valued parameter by @g0w6y in https://github.com/apache/struts/pull/2087
* WW-5841 fix(boot): restrict session tracking to cookies and set SameSite=Lax by @g0w6y in https://github.com/apache/struts/pull/2117
* WW-5844 fix(core)!: enforce HTTP method annotations across action hierarchies and plugin stacks by @g0w6y in https://github.com/apache/struts/pull/2120
* WW-5845 Validate JSONP callback names by @g0w6y in https://github.com/apache/struts/pull/2121
* WW-5791 chore(boot): mark Struts Boot as experimental by @lukaszlenart in https://github.com/apache/struts/pull/2131

### Dependencies
* build(deps-dev): bump org.codehaus.mojo:versions-maven-plugin from 2.21.0 to 2.22.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1950
* build(deps-dev): bump org.codehaus.mojo:exec-maven-plugin from 3.6.3 to 3.6.4 by @dependabot[bot] in https://github.com/apache/struts/pull/1954
* build(deps): bump github/codeql-action from 4.37.9 to 4.38.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1952
* build(deps-dev): bump org.apache.tomcat.embed:tomcat-embed-core from 10.1.59 to 11.0.26 by @dependabot[bot] in https://github.com/apache/struts/pull/1949
* build(deps): bump github/codeql-action from 4.38.0 to 4.38.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1978
* build(deps): bump org.webjars:webjars-locator-lite from 1.1.4 to 1.1.5 by @dependabot[bot] in https://github.com/apache/struts/pull/1975
* build(deps-dev): bump byte-buddy.version from 1.18.13 to 1.18.14 by @dependabot[bot] in https://github.com/apache/struts/pull/1974
* build(deps): bump org.apache.felix:maven-bundle-plugin from 6.1.2 to 6.2.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1972
* build(deps): bump ognl:ognl from 3.4.12 to 3.4.13 by @dependabot[bot] in https://github.com/apache/struts/pull/1971
* build(deps-dev): bump org.codehaus.mojo:build-helper-maven-plugin from 3.6.1 to 3.6.2 by @dependabot[bot] in https://github.com/apache/struts/pull/1999
* build(deps): bump org.apache.maven:apache-maven from 3.9.16 to 3.10.0 by @dependabot[bot] in https://github.com/apache/struts/pull/1996
* build(deps): bump ognl:ognl from 3.4.15 to 3.4.16 by @dependabot[bot] in https://github.com/apache/struts/pull/2014
* build(deps): bump ossf/scorecard-action from 2.4.4 to 2.5.0 by @dependabot[bot] in https://github.com/apache/struts/pull/2015
* build(deps-dev): bump org.codehaus.mojo:versions-maven-plugin from 2.22.0 to 2.23.0 by @dependabot[bot] in https://github.com/apache/struts/pull/2016
* build(deps): bump mikepenz/action-junit-report from 6.5.0 to 6.6.1 by @dependabot[bot] in https://github.com/apache/struts/pull/2017
* build(deps): bump github/codeql-action from 4.38.2 to 4.38.3 by @dependabot[bot] in https://github.com/apache/struts/pull/2018
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.22.2 to 2.22.3 by @dependabot[bot] in https://github.com/apache/struts/pull/2019
* build(deps-dev): bump org.apache.tomcat.embed:tomcat-embed-core from 11.0.26 to 11.0.27 by @dependabot[bot] in https://github.com/apache/struts/pull/2020
* build(deps): bump github/codeql-action/upload-sarif from 4.38.2 to 4.39.0 by @dependabot[bot] in https://github.com/apache/struts/pull/2047
* build(deps): bump github/codeql-action from 4.38.3 to 4.39.0 by @dependabot[bot] in https://github.com/apache/struts/pull/2046
* build(deps): bump org.mockito:mockito-core from 5.23.0 to 5.24.0 by @dependabot[bot] in https://github.com/apache/struts/pull/2031
* build(deps): bump org.webjars.npm:bootstrap-icons from 1.13.1 to 1.13.2 by @dependabot[bot] in https://github.com/apache/struts/pull/2029
* build(deps): bump org.sitemesh:sitemesh from 3.2.3 to 3.3.0 by @dependabot[bot] in https://github.com/apache/struts/pull/2028
* build(deps): bump com.github.ben-manes.caffeine:caffeine from 3.3.0 to 3.3.1 by @dependabot[bot] in https://github.com/apache/struts/pull/2027
* build(deps): bump github/codeql-action from 4.39.0 to 4.39.1 by @dependabot[bot] in https://github.com/apache/struts/pull/2071
* build(deps): bump github/codeql-action/upload-sarif from 4.39.0 to 4.39.1 by @dependabot[bot] in https://github.com/apache/struts/pull/2066
* build(deps): bump com.fasterxml.jackson:jackson-bom from 2.22.3 to 2.22.4 by @dependabot[bot] in https://github.com/apache/struts/pull/2065
* build(deps): bump asm.version from 9.11 to 9.11.1 by @dependabot[bot] in https://github.com/apache/struts/pull/2064
* build(deps-dev): bump byte-buddy.version from 1.18.14 to 1.18.16 by @dependabot[bot] in https://github.com/apache/struts/pull/2063
* build(deps-dev): bump org.jacoco:jacoco-maven-plugin from 0.8.15 to 0.8.16 by @dependabot[bot] in https://github.com/apache/struts/pull/2105
* build(deps): bump mikepenz/action-junit-report from 6.6.1 to 6.6.2 by @dependabot[bot] in https://github.com/apache/struts/pull/2102
* build(deps): bump org.htmlunit:htmlunit from 5.5.0 to 5.6.0 by @dependabot[bot] in https://github.com/apache/struts/pull/2098
* build(deps-dev): bump org.apache.maven.plugins:maven-failsafe-plugin from 3.6.0 to 3.6.1 by @dependabot[bot] in https://github.com/apache/struts/pull/2097

## New Contributors
* @mcc0nnell made their first contribution in https://github.com/apache/struts/pull/1966
* @aeonframework made their first contribution in https://github.com/apache/struts/pull/2012
* @siddiqueirshad made their first contribution in https://github.com/apache/struts/pull/2094
* @emilhuseyn made their first contribution in https://github.com/apache/struts/pull/2073

**Full Changelog**: https://github.com/apache/struts/compare/STRUTS_7_4_0...STRUTS_7_5_0

---

> **Source** [apache/struts](https://github.com/apache/struts) · `STRUTS_7_5_0` · 2026-11-08 · [upstream release](https://github.com/apache/struts/releases/tag/STRUTS_7_5_0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
