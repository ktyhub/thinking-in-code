---
title: "shiro shiro-root-3.0.0"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-3.0.0"
published: "2026-06-20"
type: "release"
lang: "en"
summary: "JDK 17 · Jakarta EE 9/10/11+ (no javax. namespace) · Spring 6/7+ and SpringBoot 3/4+ · Guice 7/8+"
---

# shiro shiro-root-3.0.0

## Minimum runtime Requirements
- JDK 17
- Jakarta EE 9/10/11+ (no javax.* namespace)
- Spring 6/7+ and SpringBoot 3/4+
- Guice 7/8+

Breaking Changes:
- Made default implementation of `PrincipalCollection` immutable (`ImmutablePrincipalCollection`)
- Removed `setHost()` and `setStartTimestamp()` from public API of `SimpleSession` to keep immutability

Security improvements:
- Case-insensitive path matching is now enabled by default for `shiro.ini`-based configurations only (hardened by default)
- Added NoAccessFilter and add it to the default filter chain (breaking change, hardened-by-default)
- [#2799] enh: warn if realm authentication fails by @lprimak in https://github.com/apache/shiro/pull/2798
- Web RememberMe and Guice Enhancements by @lprimak in https://github.com/apache/shiro/pull/2800
- Enable CORS preflight requests by default

Other Changes:
- Modernized Java code to JDK 17 baseline
- Added fluent API in `MergableAuthenticationInfo` class
- Improved thread-safety of Shiro-native sessions (SimpleSession, SimpleSessionFactory, CachingSessionDAO)
- Multi-Release JAR in order to support different JDK version levels, and JDK 25 Scoped values
- Using Java Scoped values for Subject and SecurityManager instead of ThreadLocals on JDK 25+
- Separated out `ShiroFilterFactoryBeanPostProcessor` to fix post processing warnings in Spring
- Using AssertJ for testing

Removals of deprecated artifacts
- Removed Shiro BOM - no longer necessary
- Removed EhCache module in favor of JCache
- Removed Hazelcast module in favor of JCache
- Removed deprecated `SimplePrincipalCollection` class
- Removed deprecated `RandomSessionIdGenerator` class
- Removed deprecated `HttpSessionContext` class
- Removed deprecated `JavaEnvironment` class
- Removed deprecated `XmlSerializer.java` class
- Removed `JakartaTransformer` class and it's `jakartify()` method
- Removed Spring/Boot `ShiroUrlPathHelper` class
- Removed Spring/Boot's remoting support
- Removed Spring/Boot deprecated `ShiroRequestMappingConfig` class
- Removed samples and tests associated with deprecated modules

##  Minimum build requirements
- JDK 21 (JDK 25 required to release)
- Jakarta EE 11 (build-time default)
- Spring 7/SpringBoot 4 (build-time default)
- Guice 8 (build-time default)

## What's Changed
* [#1584] Merge 3.x branch into main by @lprimak in https://github.com/apache/shiro/pull/2772

## Thank you Contributors:
* @janitza-mage
* @timtebeek
* @rgcv
* @nsoft
* 0xCc.zhang

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-2.2.1...shiro-root-3.0.0

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-3.0.0` · 2026-06-20 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-3.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
