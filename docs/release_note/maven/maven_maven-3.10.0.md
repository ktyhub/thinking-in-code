---
title: "maven maven-3.10.0"
project: "maven"
repo: "apache/maven"
tag: "maven-3.10.0"
published: "2026-10-01"
type: "release"
lang: "en"
summary: "Maven 3.10.x should use Maven 3.1 validation in strict mode (#1542) @gnodet · Do not depend on maven-resolver-supplier-mvn3 (#13266) @cstamas"
---

# maven maven-3.10.0

<!-- Optional: add a release summary here -->

## 🚀 New features and improvements

- Maven 3.10.x should use Maven 3.1 validation in strict mode ([#1542](https://github.com/apache/maven/pull/1542)) @gnodet
- Do not depend on maven-resolver-supplier-mvn3 ([#13266](https://github.com/apache/maven/pull/13266)) @cstamas
- [[MNG-6797]](https://issues.apache.org/jira/browse/MNG-6797) - Remember if Maven model problems were encountered. ([#298](https://github.com/apache/maven/pull/298)) @wilx
- feat: add relativePath validation ([#12742](https://github.com/apache/maven/pull/12742)) @cstamas
- Add validation for Plexus-based plugin dependency injection ([#12651](https://github.com/apache/maven/pull/12651)) @slawekjaranowski
- Introduce validation control ([#12549](https://github.com/apache/maven/pull/12549)) @cstamas
- Update to Resolver 2.0.21 ([#12504](https://github.com/apache/maven/pull/12504)) @cstamas
- [[MNG-5913]](https://issues.apache.org/jira/browse/MNG-5913) - Allow defining aliases for existing server configurations in settings.xml ([#12475](https://github.com/apache/maven/pull/12475)) @slawekjaranowski

## 🐛 Bug Fixes

- Issue #13265: let a settings server declare the repository origins its credentials may be used with ([#13275](https://github.com/apache/maven/pull/13275)) @slawekjaranowski
- Backport #13040: treat reactor BOM imports as ProjectSorter edges so -am includes them ([#13263](https://github.com/apache/maven/pull/13263)) @gnodet
- [[MNG-8174]](https://issues.apache.org/jira/browse/MNG-8174) - Fix NPE when a property references itself in a plugin configuration (backport #12932) ([#12936](https://github.com/apache/maven/pull/12936)) @elharo
- Fix #13200: publish a complete set from MavenProject.getArtifacts ([#13204](https://github.com/apache/maven/pull/13204)) @gnodet
- Fixes #13135: ensure completeness of the reactor summary, privilege f… ([#13173](https://github.com/apache/maven/pull/13173)) @rmannibucau
- [3.10.x] Fix #13084: sandbox profile activation context for external model builds ([#13114](https://github.com/apache/maven/pull/13114)) @gnodet
- Fix #13100: honor repositories from legitimately-active external model profiles ([#13116](https://github.com/apache/maven/pull/13116)) @gnodet
- Add support for MAVEN_PROJECTBASEDIR substitution in jvm.config (backport of MNG-8598 to 3.10.x) ([#13115](https://github.com/apache/maven/pull/13115)) @gnodet
- Scope server credentials and validate legacy relocation coordinates ([#12954](https://github.com/apache/maven/pull/12954)) @slachiewicz
- Honour configured policy and validate inputs on the legacy compat paths ([#12978](https://github.com/apache/maven/pull/12978)) @gnodet
- Add unit test for #12600 null-guard in forked executions ([#12923](https://github.com/apache/maven/pull/12923)) @gnodet
- Fix: make ProjectIndex thread-safe for parallel builds (backport #12832) ([#12927](https://github.com/apache/maven/pull/12927)) @gnodet
- Fail on misconfigured plugin-requested toolchains ([#12616](https://github.com/apache/maven/pull/12616)) @wilx
- Resolve classified POM artifacts from the reactor in Maven 3.x ([#12659](https://github.com/apache/maven/pull/12659)) @wilx
- [3.10.x] Convert paths for MSYS2 and jvm.config placeholders in bin/mvn ([#12567](https://github.com/apache/maven/pull/12567)) @gnodet
- Preserve dependency scope in plugin artifacts - fix #12497 ([#12503](https://github.com/apache/maven/pull/12503)) @slawekjaranowski

## 📝 Documentation updates

- docs: document plugin.xml V4 vs V3 ([#13261](https://github.com/apache/maven/pull/13261)) @gnodet
- [maven-3.10.x] Port the site documentation from APT to Markdown ([#12712](https://github.com/apache/maven/pull/12712)) @slachiewicz
- improve doc about deprecating plugin descriptor's requirement ([#12555](https://github.com/apache/maven/pull/12555)) @hboutemy
- Drop mention of Plexus XML ([#12482](https://github.com/apache/maven/pull/12482)) @cstamas

## 👻 Maintenance

- [3.10.x] maintenance: Align use of profiles ([#13274](https://github.com/apache/maven/pull/13274)) @cstamas
- Remove version from rat directory deployment ([#13046](https://github.com/apache/maven/pull/13046)) @slawekjaranowski
- Update NOTICE file in distribution packages ([#13044](https://github.com/apache/maven/pull/13044)) @slawekjaranowski
- Restrict what a repository-resolved model contributes to the build ([#12953](https://github.com/apache/maven/pull/12953)) @slachiewicz
- Validate coordinates and repository precedence during artifact resolution ([#12952](https://github.com/apache/maven/pull/12952)) @slachiewicz
- [[MNG-8129]](https://issues.apache.org/jira/browse/MNG-8129) - Clarify relativePath validation comment ([#12966](https://github.com/apache/maven/pull/12966)) @gnodet
- [12811] Keep plexus-cipher at 2.0: POM note ([#12879](https://github.com/apache/maven/pull/12879)) @slachiewicz
- [3.10.x] Use try-with-resources ([#12845](https://github.com/apache/maven/pull/12845)) @slachiewicz
- Migrate the embedder-test-project fixture to JUnit 5 ([#12717](https://github.com/apache/maven/pull/12717)) @slachiewicz
- [maven-3.10.x] Port the site documentation from APT to Markdown ([#12712](https://github.com/apache/maven/pull/12712)) @slachiewicz
- Migrate legacy plugin Javadoc annotations in Maven Embedder tests ([#12708](https://github.com/apache/maven/pull/12708)) @wilx
- Replace custom `GraphLogger` with `DependencyGraphDumper` in dependency resolution ([#12639](https://github.com/apache/maven/pull/12639)) @slawekjaranowski
- Fix UT: do not use checkout directly ([#12483](https://github.com/apache/maven/pull/12483)) @cstamas

## 🔧 Build

- Replace nicoulaj checksum plugin with maveniverse checksum plugin ([#13053](https://github.com/apache/maven/pull/13053)) @slawekjaranowski
- 3.10.x Build by JDK 25, limit JDK to min and max LTS in build ([#12848](https://github.com/apache/maven/pull/12848)) @slawekjaranowski
- Update Maven version to 3.10.0-rc-1 in GH configuration ([#12847](https://github.com/apache/maven/pull/12847)) @slawekjaranowski

## 📦 Dependency updates

- [3.10.x] deps: Update to Maven Resolver 2.0.24 ([#13271](https://github.com/apache/maven/pull/13271)) @cstamas
- build: bump xmlunitVersion from 2.13.0 to 2.14.0 ([#13237](https://github.com/apache/maven/pull/13237)) @[dependabot[bot]](https://github.com/apps/dependabot)
- build: bump org.apache.maven:maven-parent from 49 to 50 ([#13242](https://github.com/apache/maven/pull/13242)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Resolver 2.0.23 and validation cleanup ([#13078](https://github.com/apache/maven/pull/13078)) @cstamas
- Bump org.codehaus.mojo:build-helper-maven-plugin from 3.6.1 to 3.6.2 ([#13134](https://github.com/apache/maven/pull/13134)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.mojo:buildnumber-maven-plugin from 3.3.0 to 3.3.1 ([#13132](https://github.com/apache/maven/pull/13132)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.mojo:exec-maven-plugin from 3.6.3 to 3.6.4 ([#13130](https://github.com/apache/maven/pull/13130)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.mojo:animal-sniffer-maven-plugin from 1.27 to 1.28 ([#13129](https://github.com/apache/maven/pull/13129)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/setup-java from 6.0.0 to 6.0.1 ([#13110](https://github.com/apache/maven/pull/13110)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump jlineVersion from 3.30.16 to 3.30.17 ([#13111](https://github.com/apache/maven/pull/13111)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump slf4jVersion from 2.0.18 to 2.0.19 ([#13074](https://github.com/apache/maven/pull/13074)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.modello:modello-maven-plugin from 2.8.0 to 2.8.1 ([#13028](https://github.com/apache/maven/pull/13028)) @[dependabot[bot]](https://github.com/apps/dependabot)
- [12811] Keep plexus-cipher at 2.0: POM note ([#12879](https://github.com/apache/maven/pull/12879)) @slachiewicz
- Bump actions/setup-java from 5.7.0 to 6.0.0 ([#12860](https://github.com/apache/maven/pull/12860)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Deps: Bump to Resolver 2.0.22 ([#12803](https://github.com/apache/maven/pull/12803)) @cstamas
- Bump resolverVersion from 2.0.21 to 2.0.22 ([#12823](https://github.com/apache/maven/pull/12823)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.plexus:plexus-interpolation from 1.29 to 1.30.0 ([#12825](https://github.com/apache/maven/pull/12825)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump com.google.guava:guava from 33.7.0-jre to 33.7.1-jre ([#12796](https://github.com/apache/maven/pull/12796)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.plexus:plexus-utils from 3.6.1 to 3.6.2 ([#12795](https://github.com/apache/maven/pull/12795)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.plexus:plexus-testing from 2.1.0 to 2.2.0 ([#12794](https://github.com/apache/maven/pull/12794)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.modello:modello-maven-plugin from 2.7.0 to 2.8.0 ([#12793](https://github.com/apache/maven/pull/12793)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.plexus:plexus-classworlds from 2.12.0 to 2.12.1 ([#12792](https://github.com/apache/maven/pull/12792)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump com.google.guava:guava from 33.6.0-jre to 33.7.0-jre ([#12776](https://github.com/apache/maven/pull/12776)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump xmlunitVersion from 2.12.0 to 2.13.0 ([#12673](https://github.com/apache/maven/pull/12673)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/setup-java from 5.6.0 to 5.7.0 ([#12666](https://github.com/apache/maven/pull/12666)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump apache/maven-gh-actions-shared/.github/workflows/release-drafter.yml from 4 to 5 ([#12496](https://github.com/apache/maven/pull/12496)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Deps: Bump to Eclipse Sisu 1.1.0 ([#12547](https://github.com/apache/maven/pull/12547)) @cstamas
- Bump resolverVersion from 2.0.21-SNAPSHOT to 2.0.21 ([#12545](https://github.com/apache/maven/pull/12545)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump jlineVersion from 3.30.15 to 3.30.16 ([#12518](https://github.com/apache/maven/pull/12518)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/checkout from 7.0.0 to 7.0.1 ([#12514](https://github.com/apache/maven/pull/12514)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Update to Resolver 2.0.21 ([#12504](https://github.com/apache/maven/pull/12504)) @cstamas
- Bump actions/setup-java from 5.5.0 to 5.6.0 ([#12501](https://github.com/apache/maven/pull/12501)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump apache/maven-gh-actions-shared/.github/workflows/pr-automation.yml from 4 to 5 ([#12495](https://github.com/apache/maven/pull/12495)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/setup-java from 5.4.0 to 5.5.0 ([#12439](https://github.com/apache/maven/pull/12439)) @[dependabot[bot]](https://github.com/apps/dependabot)

---

> **Source** [apache/maven](https://github.com/apache/maven) · `maven-3.10.0` · 2026-10-01 · [upstream release](https://github.com/apache/maven/releases/tag/maven-3.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
