---
title: "shiro shiro-root-2.2.1"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-2.2.1"
published: "2026-06-14"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/shiro/compare/shiro-root-2.2.0...shiro-root-2.2.1"
---

# shiro shiro-root-2.2.1

## Bug fixes
* chore(jacoco): added exclusion for weld client proxy by @lprimak in https://github.com/apache/shiro/pull/2769

## Security Improvements
* [#2704] [#2710] Fixed Session fixation-related regressions by @lprimak in https://github.com/apache/shiro/pull/2711
* [#2758] Deprecate RandomSessionIdGenerator due to insufficient entropy by @lprimak in https://github.com/apache/shiro/pull/2770
* [enh(jakarta-ee): strip out the host part of the referer header](https://github.com/apache/shiro/commit/bd278bcc360938161abb7c4740c8e1c4a1e44831)
* [Using Rdn.escapeValues()](https://github.com/apache/shiro/commit/9063406e70acbb90a6d1c1f3c69e01b8893bd1dd)

## Improvements
* Switch pre-commit to ASF approved prek-action by @jbampton in https://github.com/apache/shiro/pull/2705
* Add AGENTS.md + SECURITY.md linking the project's security model by @potiuk in https://github.com/apache/shiro/pull/2702
* [CI] Add pre-commit hook to validate the CITATION file; Add missing required field `message` by @jbampton in https://github.com/apache/shiro/pull/2717
* [CI] Add hook to validate dependabot.yml with pre-commit by @jbampton in https://github.com/apache/shiro/pull/2716
* chore: add branch protection rules by @lprimak in https://github.com/apache/shiro/pull/2701
* [chore: removed branch protection from main, update github ruleset to include additional branches](https://github.com/apache/shiro/commit/2a1c4da29ca5767c4fcea6cd2551d556e3806272) 
* [CI] Pin to sha all pre-commit hooks and clean up by @jbampton in https://github.com/apache/shiro/pull/2730
* Configure EditorConfig for more file types by @jbampton in https://github.com/apache/shiro/pull/2747
* Update and expand the CITATION file by @jbampton in https://github.com/apache/shiro/pull/2766
* [#2760] chore: update shiro.doap file with more recent versions and maintainers by @lprimak in https://github.com/apache/shiro/pull/2768

## New Contributors
* @potiuk made their first contribution in https://github.com/apache/shiro/pull/2702

## Dependency Updates
* chore(deps): bump https://github.com/zizmorcore/zizmor-pre-commit from v1.24.1 to 1.25.2 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2709
* chore(deps): bump org.apache:apache from 37 to 38 by @dependabot[bot] in https://github.com/apache/shiro/pull/2700
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.25.6 to 0.25.7 by @dependabot[bot] in https://github.com/apache/shiro/pull/2699
* chore(deps): bump slf4j.version from 2.0.17 to 2.0.18 by @dependabot[bot] in https://github.com/apache/shiro/pull/2694
* chore(deps): bump log4j.version from 2.25.4 to 2.26.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2697
* chore(deps): bump org.apache.johnzon:johnzon-jsonb from 1.2.22 to 1.3.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2698
* chore(deps): bump org.apache.cxf:cxf-rt-rs-client from 3.6.10 to 3.6.11 by @dependabot[bot] in https://github.com/apache/shiro/pull/2729
* chore(deps): bump org.apache.cxf:cxf-bom from 3.6.10 to 3.6.11 by @dependabot[bot] in https://github.com/apache/shiro/pull/2728
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.25.7 to 0.26.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2727
* chore(deps): bump org.omnifaces:omnifaces from 3.14.20 to 3.14.21 by @dependabot[bot] in https://github.com/apache/shiro/pull/2725
* chore(deps): bump org.apache.commons:commons-configuration2 from 2.15.0 to 2.15.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2724
* chore(deps): bump the github-actions-dependencies group with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2723
* chore(deps-dev): bump arquillian.core.version from 1.10.1.Final to 1.10.2.Final by @dependabot[bot] in https://github.com/apache/shiro/pull/2722
* chore(deps-dev): bump org.apache.cxf:cxf-rt-frontend-jaxrs from 3.6.10 to 3.6.11 by @dependabot[bot] in https://github.com/apache/shiro/pull/2721
* chore(deps): bump ch.qos.logback:logback-classic from 1.5.32 to 1.5.34 by @dependabot[bot] in https://github.com/apache/shiro/pull/2748
* chore(deps): bump ch.qos.logback:logback-core from 1.5.32 to 1.5.34 by @dependabot[bot] in https://github.com/apache/shiro/pull/2749
* chore(deps): bump org.jacoco:jacoco-maven-plugin from 0.8.14 to 0.8.15 by @dependabot[bot] in https://github.com/apache/shiro/pull/2765
* chore(deps): bump the github-actions-dependencies group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2756
* chore(deps): bump org.codehaus.gmavenplus:gmavenplus-plugin from 4.3.1 to 5.0.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2753
* chore(deps): bump org.jboss.shrinkwrap.resolver:shrinkwrap-resolver-bom from 3.3.6 to 3.3.7 by @dependabot[bot] in https://github.com/apache/shiro/pull/2750
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.26.0 to 0.26.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2751
* chore(deps): bump bytebuddy.version from 1.18.8 to 1.18.10 by @dependabot[bot] in https://github.com/apache/shiro/pull/2752

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-2.2.0...shiro-root-2.2.1

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-2.2.1` · 2026-06-14 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-2.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
