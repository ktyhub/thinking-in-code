---
title: "shiro shiro-root-3.0.1"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-3.0.1"
published: "2026-08-23"
type: "release"
lang: "en"
summary: "enh: added replay whitelist and blacklist check before resubmitting a…"
---

# shiro shiro-root-3.0.1

## Security updates
* enh: added replay whitelist and blacklist check before resubmitting a… by @lprimak in https://github.com/apache/shiro/pull/2826
* [#2831] - Add optional JEP-290 ObjectInputFilter support to DefaultSerializer, with a conservative resource-limit default on RememberMe deserialization by @Nexory in https://github.com/apache/shiro/pull/2832
* bugfix(aop/guice): add support for retrieving annotations from superc… by @lprimak in https://github.com/apache/shiro/pull/2860
* Enhancement: support for remembered principals in session management, check w… by @lprimak in https://github.com/apache/shiro/pull/2859
* Bugfix: improve form resubmit handling  by @lprimak in https://github.com/apache/shiro/pull/2858
* Bugfix: default case insensitive filters for programmatic and Spring / Spring Boot configurations by @lprimak in https://github.com/apache/shiro/pull/2857
* [#2841] Fix Active Directory DN authentication by @abhiramaab in https://github.com/apache/shiro/pull/2854
* Various bug fixes by @lprimak in https://github.com/apache/shiro/pull/2866

## Bug fixes
* [#2804] bugfix: fix login() once again accepts null subject by @lprimak in https://github.com/apache/shiro/pull/2807
* [#2818] bugfix(matcher): prevent accidental matches for simulated credentials in… by @lprimak in https://github.com/apache/shiro/pull/2856
* bugfix(jakarta-ee): missing cache entry for the check by @lprimak in https://github.com/apache/shiro/pull/2861
* [#2868]  bugfix: fix security context handling in JAX-RS support for methods i… by @lprimak in https://github.com/apache/shiro/pull/2867
* [#2870] bugfix(aop): added handling for annotations for class with static… by @lprimak in https://github.com/apache/shiro/pull/2869

## Improvements
* [2805] Discard Jenkins build workspace after 30 days by @apupier in https://github.com/apache/shiro/pull/2806
* chore: re-enable API compatibility checks post 3.0 release by @lprimak in https://github.com/apache/shiro/pull/2814
* bugfix(test): fix flaky ExecutorServiceSessionValidationSchedulerTest… by @lprimak in https://github.com/apache/shiro/pull/2820
* [CI] Add prek priority levels to allow safe parallel execution of hooks by @jbampton in https://github.com/apache/shiro/pull/2816
* Update markdown-lint configuration add link to rules by @jbampton in https://github.com/apache/shiro/pull/2815
* [#2827] enh: added new constructors to be able to set host and start timestamp by @lprimak in https://github.com/apache/shiro/pull/2830
* chore(jenkins): clean up custom workspace directories by @lprimak in https://github.com/apache/shiro/pull/2810
* [#2837] Fail closed when getPathWithinApplication() cannot normalize the request path by @xaccefy in https://github.com/apache/shiro/pull/2836
* chore: fix reproducibility of AspectJ support module by forcing USA l… by @lprimak in https://github.com/apache/shiro/pull/2862

## Dependency Updates
* chore(deps): bump the maven-dependencies group across 1 directory with 18 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2823
* chore(deps): bump the pre-commit-hooks group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2822
* chore(deps): bump the github-actions-dependencies group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2821
* chore(deps): bump the maven-dependencies group with 13 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2829
* chore(deps): bump the github-actions-dependencies group with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2828
* chore(deps): bump the pre-commit-hooks group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2842
* chore(deps): bump the github-actions-dependencies group across 1 directory with 10 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2843
* chore(deps): bump the maven-dependencies group across 1 directory with 32 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2844
* chore(deps): bump the maven-dependencies group with 5 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2849
* chore(deps): bump the github-actions-dependencies group with 6 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2850
* chore(deps): bump the pre-commit-hooks group with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2851
* chore(deps): bump the maven-dependencies group with 22 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2852
* chore(deps): bump the github-actions-dependencies group with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2853
* chore(deps): bump the github-actions-dependencies group with 4 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2865
* chore(deps): bump the maven-dependencies group with 15 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2864
* chore(deps): bump the pre-commit-hooks group with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2863


## New Contributors
* @apupier made their first contribution in https://github.com/apache/shiro/pull/2806
* @Nexory made their first contribution in https://github.com/apache/shiro/pull/2832
* @xaccefy made their first contribution in https://github.com/apache/shiro/pull/2836
* @abhiramaab made their first contribution in https://github.com/apache/shiro/pull/2854

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-3.0.0...shiro-root-3.0.1

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-3.0.1` · 2026-08-23 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-3.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
