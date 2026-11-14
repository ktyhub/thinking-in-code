---
title: "shiro shiro-root-3.0.0-alpha-1"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-3.0.0-alpha-1"
published: "2026-02-23"
type: "pre"
lang: "en"
summary: "Java 17 is the minimum requirement · Jakarta EE 11, Spring 7 and SpringBoot 4 without classifiers, dropped support for Jakarta EE 8 and SpringBoot 2 · Removed many deprecations · Refactored code to use Java 17+ features"
---

# shiro shiro-root-3.0.0-alpha-1

## Major Changes
* Java 17 is the minimum requirement
* Jakarta EE 11, Spring 7 and SpringBoot 4 without classifiers, dropped support for Jakarta EE 8 and SpringBoot 2
* Removed many deprecations
* Refactored code to use Java 17+ features
* Using Scoped values instead of ThreadLocals on JDK 25+

## What's Changed
* [#1548] - redefines PrincipalCollection interface to be intended as immutable by @janitza-mage in https://github.com/apache/shiro/pull/1582
* Fix deprecation warnings by @lprimak in https://github.com/apache/shiro/pull/1630
* Refactor: AssertJ best practices by @timtebeek by @lprimak in https://github.com/apache/shiro/pull/1454
* chore(3.x): Migrate to jakarta EE 10 using OpenRewrite by @rgcv in https://github.com/apache/shiro/pull/2224
* [#1585] Migrate to Jakarta EE 10 (3.x) by @rgcv in https://github.com/apache/shiro/pull/2018
* enh[3.x]: Adds default NoAccess configuration to the default filter chain by @lprimak in https://github.com/apache/shiro/pull/2461
* [#1585] Jakarta namespace and java 17 for 3x by @nsoft in https://github.com/apache/shiro/pull/2017
* [3.x] Karaf needs update by @fpapon in https://github.com/apache/shiro/pull/2517
* [#1862] [3.0] Support for JDK 25 scoped values by @lprimak in https://github.com/apache/shiro/pull/2485

## New Contributors
* @janitza-mage made their first contribution in https://github.com/apache/shiro/pull/1582
* @Himakar made their first contribution in https://github.com/apache/shiro/pull/1581
* @rgcv made their first contribution in https://github.com/apache/shiro/pull/2224
* @nsoft made their first contribution in https://github.com/apache/shiro/pull/2017
* @iampratap7997-dot made their first contribution in https://github.com/apache/shiro/pull/2518

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-2.1.0...shiro-root-3.0.0-alpha-1

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-3.0.0-alpha-1` · 2026-02-23 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-3.0.0-alpha-1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
