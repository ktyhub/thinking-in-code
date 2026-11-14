---
title: "maven maven-3.10.0-rc-1"
project: "maven"
repo: "apache/maven"
tag: "maven-3.10.0-rc-1"
published: "2026-07-13"
type: "pre"
lang: "en"
summary: "Remove release-profile from super POM (#11999) @slawekjaranowski · Remove deprecated plugin management from super POM (#11986) @slawekjaranowski"
---

# maven maven-3.10.0-rc-1

<!-- Optional: add a release summary here -->
## :boom: Breaking changes

- Remove release-profile from super POM ([#11999](https://github.com/apache/maven/pull/11999)) @slawekjaranowski
- Remove deprecated plugin management from super POM ([#11986](https://github.com/apache/maven/pull/11986)) @slawekjaranowski

## 🚀 New features and improvements

- Feat: Align Maven 3.10.x and 4.0.x ([#12442](https://github.com/apache/maven/pull/12442)) @cstamas
- Feat: Align CP ordering with Maven 4 ([#12327](https://github.com/apache/maven/pull/12327)) @cstamas
- Feat: Apply latest Resolver 2.0.19 changes ([#12246](https://github.com/apache/maven/pull/12246)) @cstamas
- Feat: Maven 3.10.x super POM ([#12032](https://github.com/apache/maven/pull/12032)) @cstamas
- In failed build limit reactor summary to only failed modules ([#11977](https://github.com/apache/maven/pull/11977)) @slawekjaranowski
- Add time zone to Maven startup banner ([#11972](https://github.com/apache/maven/pull/11972)) @slawekjaranowski
- Feat: Version range filters plus ([#11955](https://github.com/apache/maven/pull/11955)) @cstamas
- Feat: Ability to disable site lifecycle ([#11970](https://github.com/apache/maven/pull/11970)) @cstamas
- Optimize log level rendering in MavenSimpleLogger ([#11969](https://github.com/apache/maven/pull/11969)) @slawekjaranowski
- Feat: Resolver 2.x update policy control via CLI ([#11948](https://github.com/apache/maven/pull/11948)) @cstamas
- Promote java version in JavaToolchain ([#11968](https://github.com/apache/maven/pull/11968)) @slawekjaranowski
- Feat: Transitive dep manager ([#11939](https://github.com/apache/maven/pull/11939)) @cstamas
- 3.10.x Upgrade slf4j to 2.0.17 ([#11880](https://github.com/apache/maven/pull/11880)) @olamy
- Do not force md download always ([#11908](https://github.com/apache/maven/pull/11908)) @cstamas
- Feat: user relocations backport ([#11937](https://github.com/apache/maven/pull/11937)) @cstamas
- Feat: Version range filtering ([#11936](https://github.com/apache/maven/pull/11936)) @cstamas
- Promote `project.rootDirectory` for interpolation and profile activation ([#11930](https://github.com/apache/maven/pull/11930)) @slawekjaranowski
- Feat: new artifact handler: fatjar ([#11928](https://github.com/apache/maven/pull/11928)) @cstamas
- Feat: migrate core to JSR330 ([#11916](https://github.com/apache/maven/pull/11916)) @cstamas
- Migrate from JAnsi to JLine, introduce MessageBuilderFactory ([#11874](https://github.com/apache/maven/pull/11874)) @slawekjaranowski
- Feat: Promote session.topDirectory and session.rootDirectory ([#11779](https://github.com/apache/maven/pull/11779)) @cstamas
- Feat: Maven 3.x with Resolver 2.x ([#11778](https://github.com/apache/maven/pull/11778)) @cstamas
- Feat: Generalize Maven 3.x extension handling ([#11777](https://github.com/apache/maven/pull/11777)) @cstamas

## 🐛 Bug Fixes

- [#12288] Backport: settings.xml activeByDefault profile props to LRM ([#12333](https://github.com/apache/maven/pull/12333)) @ascheman
- Fix illegal reflective access warning on JDK 11 (fixes #12167) ([#12339](https://github.com/apache/maven/pull/12339)) @gnodet
- Issue #12188 redirection of log output to a file does not redirect everything ([#12189](https://github.com/apache/maven/pull/12189)) @olamy
- Update binary distribution LICENSE with complete Apache License 2.0 text ([#12063](https://github.com/apache/maven/pull/12063)) @slawekjaranowski
- Bug: RSS was seeded but not exposed ([#12033](https://github.com/apache/maven/pull/12033)) @cstamas
- Export scope package from resolver-api 2.x ([#12023](https://github.com/apache/maven/pull/12023)) @slawekjaranowski
- Ensure `MavenProject#getPluginManagement` never returns null ([#12010](https://github.com/apache/maven/pull/12010)) @slawekjaranowski
- Remove redundant required attributes from Settings model ([#12005](https://github.com/apache/maven/pull/12005)) @slawekjaranowski
- Remove redundant required attributes from Maven model ([#11985](https://github.com/apache/maven/pull/11985)) @slawekjaranowski
- Bug: Settings interpolation and strict parsing ([#11776](https://github.com/apache/maven/pull/11776)) @cstamas
- Trim `threadConfiguration` to accept input surrounded with spaces ([#11851](https://github.com/apache/maven/pull/11851)) @pzygielo

## 📝 Documentation updates

- Add AGENTS.md + SECURITY.md security-model pointer for scanner discoverability ([#12444](https://github.com/apache/maven/pull/12444)) @potiuk
- document default plugin versions ([#12382](https://github.com/apache/maven/pull/12382)) @hboutemy
- Maven 3.10.x site ([#12370](https://github.com/apache/maven/pull/12370)) @cstamas
- [[[ISSUE-10329]](https://issues.apache.org/jira/browse/ISSUE-10329) - ](https://issues.apache.org/jira/browse/ISSUE-10329) - Document behaviour of UrlNormalizer (backport) ([#12294](https://github.com/apache/maven/pull/12294)) @gnodet
- Update Maven deps diagram for maven-jline ([#12068](https://github.com/apache/maven/pull/12068)) @Will-thom
- document the only supported value: 4.0.0 ([#11859](https://github.com/apache/maven/pull/11859)) @slawekjaranowski

## 👻 Maintenance

- push-to-atr profile for source+binaries in apache-maven subproject ([#12450](https://github.com/apache/maven/pull/12450)) @hboutemy
- Add AGENTS.md + SECURITY.md security-model pointer for scanner discoverability ([#12444](https://github.com/apache/maven/pull/12444)) @potiuk
- Remove deprecated methods use ([#12328](https://github.com/apache/maven/pull/12328)) @cstamas
- Make def session builder have interface ([#11967](https://github.com/apache/maven/pull/11967)) @cstamas
- Feat: Add Automatic Module Names to Maven JAR Manifests ([#11921](https://github.com/apache/maven/pull/11921)) @cstamas
- Configure CI for 3.10.x branch ([#11834](https://github.com/apache/maven/pull/11834)) @slawekjaranowski

## 📦 Dependency updates

- Bump resolverVersion from 2.0.20-SNAPSHOT to 2.0.20 ([#12426](https://github.com/apache/maven/pull/12426)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump jlineVersion from 3.30.14 to 3.30.15 ([#12409](https://github.com/apache/maven/pull/12409)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump jlineVersion from 3.30.13 to 3.30.14 ([#12400](https://github.com/apache/maven/pull/12400)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.apache.maven:maven-parent from 48 to 49 ([#12399](https://github.com/apache/maven/pull/12399)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/cache from 5.0.5 to 6.1.0 ([#12362](https://github.com/apache/maven/pull/12362)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/setup-java from 5.3.0 to 5.4.0 ([#12374](https://github.com/apache/maven/pull/12374)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump version.sisu-maven-plugin from 1.0.0 to 1.0.1 ([#12366](https://github.com/apache/maven/pull/12366)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/checkout from 6.0.3 to 7.0.0 ([#12321](https://github.com/apache/maven/pull/12321)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/setup-java from 5.2.0 to 5.3.0 ([#12283](https://github.com/apache/maven/pull/12283)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump xmlunitVersion from 2.11.0 to 2.12.0 ([#12198](https://github.com/apache/maven/pull/12198)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/checkout from 6.0.2 to 6.0.3 ([#12212](https://github.com/apache/maven/pull/12212)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.ow2.asm:asm from 9.10 to 9.10.1 ([#12153](https://github.com/apache/maven/pull/12153)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.plexus:plexus-classworlds from 2.11.0 to 2.12.0 ([#12127](https://github.com/apache/maven/pull/12127)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.ow2.asm:asm from 9.9.1 to 9.10 ([#12060](https://github.com/apache/maven/pull/12060)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Deps: Resolver 2.0.18 and drop unused stuff ([#12036](https://github.com/apache/maven/pull/12036)) @cstamas
- Bump resolverVersion from 2.0.17 to 2.0.18 ([#12104](https://github.com/apache/maven/pull/12104)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Deps: Bump Slf4j to 2.0.18 ([#12048](https://github.com/apache/maven/pull/12048)) @cstamas
- Bump org.codehaus.plexus:plexus-classworlds from 2.9.0 to 2.11.0 ([#12041](https://github.com/apache/maven/pull/12041)) @[dependabot[bot]](https://github.com/apps/dependabot)
- [3.10.x] Bump to parent POM 48 ([#12025](https://github.com/apache/maven/pull/12025)) @cstamas
- Bump jlineVersion from 3.30.12 to 3.30.13 ([#12013](https://github.com/apache/maven/pull/12013)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump jlineVersion from 3.30.11 to 3.30.12 ([#12003](https://github.com/apache/maven/pull/12003)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump resolverVersion from 2.0.17-SNAPSHOT to 2.0.17 ([#12008](https://github.com/apache/maven/pull/12008)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump jlineVersion from 3.30.9 to 3.30.11 ([#11996](https://github.com/apache/maven/pull/11996)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump commons-io:commons-io from 2.21.0 to 2.22.0 ([#11982](https://github.com/apache/maven/pull/11982)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump com.google.guava:guava from 33.5.0-jre to 33.6.0-jre ([#11964](https://github.com/apache/maven/pull/11964)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.modello:modello-maven-plugin from 2.6.0 to 2.7.0 ([#11935](https://github.com/apache/maven/pull/11935)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/cache from 5.0.4 to 5.0.5 ([#11946](https://github.com/apache/maven/pull/11946)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/upload-artifact from 7.0.0 to 7.0.1 ([#11934](https://github.com/apache/maven/pull/11934)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Update Resolver to 2.0.16 ([#11907](https://github.com/apache/maven/pull/11907)) @cstamas
- Bump org.codehaus.plexus:plexus-utils from 3.6.0 to 3.6.1 ([#11878](https://github.com/apache/maven/pull/11878)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.fusesource.jansi:jansi from 2.4.2 to 2.4.3 ([#11867](https://github.com/apache/maven/pull/11867)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/download-artifact from 8.0.0 to 8.0.1 ([#11837](https://github.com/apache/maven/pull/11837)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/cache from 5.0.3 to 5.0.4 ([#11839](https://github.com/apache/maven/pull/11839)) @[dependabot[bot]](https://github.com/apps/dependabot)

---

> **Source** [apache/maven](https://github.com/apache/maven) · `maven-3.10.0-rc-1` · 2026-07-13 · [upstream release](https://github.com/apache/maven/releases/tag/maven-3.10.0-rc-1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
