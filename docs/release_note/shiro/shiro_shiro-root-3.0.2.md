---
title: "shiro shiro-root-3.0.2"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-3.0.2"
published: "2026-11-08"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/shiro/compare/shiro-root-3.0.1...shiro-root-3.0.2"
---

# shiro shiro-root-3.0.2

## New Features
* [#2232] Form data save without requiring to log in by @lprimak in https://github.com/apache/shiro/pull/2907

## Security Fixes
* bugfix(Guice): align Guice behavior regarding superclass annotation p… by @lprimak in https://github.com/apache/shiro/pull/2881
* bugfix(jakarta-ee): form resubmit logic uses more data from the subse… by @lprimak in https://github.com/apache/shiro/pull/2885
* Align default settings of ShiroFilterFactoryBean and NoAccessFilter with other components by @lprimak in https://github.com/apache/shiro/pull/2921
* enh: harmonized superclass / interface annotation processing by @lprimak in https://github.com/apache/shiro/pull/2917

## Improvements
* enh: rework form data saving and replay via self-dispatch rather than a network-call by @lprimak in https://github.com/apache/shiro/pull/2900
* [#2931] - Rebuild expired Faces views during form replay without a preliminary GET by @balusc and @lprimak in https://github.com/apache/shiro/pull/2930
* [#2929] Use Spring Path matcher for Spring Boot 4.2+ where Ant matching is removed by @lprimak in https://github.com/apache/shiro/pull/2928
* [#2909] Change session validation log messages from INFO to DEBUG by @lprimak in https://github.com/apache/shiro/pull/2910
* chore(build): add Semeru runtimes by @lprimak in https://github.com/apache/shiro/pull/2879
* chore: add scarf.sh pixel to README by @lprimak in https://github.com/apache/shiro/pull/2880
* docs(README): added OpenSSF best practices badge by @lprimak in https://github.com/apache/shiro/pull/2892
* chore: Generate SBOM files with CycloneDX and SPDX maven plugins by @lprimak in https://github.com/apache/shiro/pull/2893
* chore: updated shiro.doap.rdf file for Shiro 3.0.1 by @lprimak in https://github.com/apache/shiro/pull/2873
* Build CI artifacts on only once, and reuse the builds in the matrix by @lprimak in https://github.com/apache/shiro/pull/2937
* Refactor Jakarta EE integration tests with Graphene page objects by @lprimak in https://github.com/apache/shiro/pull/2944

## Bug fixes
* [#2926] - Spring configuration appends a stray " }" to the rememberMe cookie path by @Nexory in https://github.com/apache/shiro/pull/2927
* [#2924] - WildcardPermission and DomainPermission lower-case with the JVM default locale by @sharanggupta in https://github.com/apache/shiro/pull/2925
* [#2923] Various bug fixes by @lprimak in https://github.com/apache/shiro/pull/2922
* bugfix(test): flaky test core/.../DefaultSecurityManagerTest fixed by @lprimak in https://github.com/apache/shiro/pull/2951
* chore: remove site override from apache release profile, is obsolete … by @lprimak in https://github.com/apache/shiro/pull/2887
* chore(build): removed windows profile, no longer necessary by @lprimak in https://github.com/apache/shiro/pull/2891
* Improve build stability: RAT, Selenium and JavaAPI Comparison enforcer plugin by @lprimak in https://github.com/apache/shiro/pull/2901
* enh: fix labeler workflow by @lprimak in https://github.com/apache/shiro/pull/2916
* [#2905] chore: replace labeler with the one that works like magpie and pull_r… by @lprimak in https://github.com/apache/shiro/pull/2908
* misc: fix typos in Java code by @jbampton in https://github.com/apache/shiro/pull/2914
* chore: add missing `@Override` annotations by @lprimak in https://github.com/apache/shiro/pull/2913
* chore: fix CodeQL issues by @lprimak in https://github.com/apache/shiro/pull/2915

## Dependency Updates
* chore(deps): bump the maven-dependencies group with 22 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2872
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2871
* chore(deps): bump the github-actions-dependencies group with 5 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2875
* chore(deps): bump the maven-dependencies group with 7 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2876
* chore(deps): bump the maven-dependencies group with 27 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2884
* chore(deps): bump the pre-commit-hooks group with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2883
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2890
* chore(deps): bump the maven-dependencies group with 18 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2889
* chore(deps): bump https://github.com/zizmorcore/zizmor-pre-commit from v1.30.0 to 1.30.1 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2888
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2894
* chore(deps): bump the maven-dependencies group with 8 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2895
* chore(deps): bump https://github.com/python-jsonschema/check-jsonschema from 0.38.0 to 0.38.2 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2897
* chore(deps): bump the maven-dependencies group with 13 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2898
* chore(deps): bump the github-actions-dependencies group with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2899
* chore(deps): bump the maven-dependencies group with 9 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2906
* chore(deps): bump the github-actions-dependencies group with 7 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2912
* chore(deps): bump the maven-dependencies group with 27 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2911
* chore(deps): bump https://github.com/zizmorcore/zizmor-pre-commit from v1.30.1 to 1.31.1 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2918
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2920
* chore(deps): bump the maven-dependencies group with 9 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2919
* chore(deps): bump the github-actions-dependencies group with 5 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2932
* chore(deps): bump the maven-dependencies group with 18 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2933
* chore(deps): bump the github-actions-dependencies group across 1 directory with 5 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2948
* chore(deps): bump the pre-commit-hooks group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2946
* chore(deps): bump the maven-dependencies group across 1 directory with 15 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2949

## New Contributors
* @sharanggupta made their first contribution in https://github.com/apache/shiro/pull/2925

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-3.0.1...shiro-root-3.0.2

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-3.0.2` · 2026-11-08 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-3.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
