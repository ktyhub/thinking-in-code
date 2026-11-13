---
title: "maven maven-3.9.12"
project: "maven"
repo: "apache/maven"
tag: "maven-3.9.12"
published: "2025-12-16"
type: "release"
lang: "en"
---

# maven maven-3.9.12

<!-- Optional: add a release summary here -->
## 🚀 New features and improvements

- [3.9.x] Apply resolver changes and improvements ([#11536](https://github.com/apache/maven/pull/11536)) @cstamas
- Update formatting of prerequisites-requirements error to improve readability ([#11523](https://github.com/apache/maven/pull/11523)) @slawekjaranowski
- Allow a Maven plugin to require a Java version ([#11479](https://github.com/apache/maven/pull/11479)) @slawekjaranowski
- Use MavenRepositorySystem in ProjectBuildingHelper instead of deprecated RepositorySystem ([#11358](https://github.com/apache/maven/pull/11358)) @slawekjaranowski
- Make maven.config use UTF8 ([#11264](https://github.com/apache/maven/pull/11264)) @cstamas
- Simplify prefix resolution ([#11197](https://github.com/apache/maven/pull/11197)) @slawekjaranowski

## 🐛 Bug Fixes

- Add default implementation for new method in MavenPluginManager ([#11522](https://github.com/apache/maven/pull/11522)) @slawekjaranowski
- Repository layout should be used in MavenRepositorySystem ([#11495](https://github.com/apache/maven/pull/11495)) @slawekjaranowski
- Fix plugin prefix resolution when metadata is not available from repository ([#11290](https://github.com/apache/maven/pull/11290)) @slawekjaranowski
- Improve source root modification warning message ([#11105](https://github.com/apache/maven/pull/11105)) @gnodet
- Bug: bad cache isolation between two sessions ([#11082](https://github.com/apache/maven/pull/11082)) @cstamas
- Set Guice class loading to CHILD - avoid using terminally deprecated methods ([#11003](https://github.com/apache/maven/pull/11003)) @slawekjaranowski
- Avoid parsing MAVEN_OPTS (3.9.x) ([#10969](https://github.com/apache/maven/pull/10969)) @BobVul

## 📝 Documentation updates

- clarify repository vs deployment repository ([#11492](https://github.com/apache/maven/pull/11492)) @hboutemy
- add maintained branches ([#11448](https://github.com/apache/maven/pull/11448)) @hboutemy

## 👻 Maintenance

- Add IntelliJ icon ([#11408](https://github.com/apache/maven/pull/11408)) @Bukama
- Build by JDK 25 ([#11187](https://github.com/apache/maven/pull/11187)) @slawekjaranowski
- Deprecate org.apache.maven.repository.RepositorySystem in 3.9.x ([#11096](https://github.com/apache/maven/pull/11096)) @slawekjaranowski

## 🔧 Build

- Bump actions/download-artifact from 5.0.0 to 6.0.0 ([#11335](https://github.com/apache/maven/pull/11335)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/upload-artifact from 4.6.2 to 5.0.0 ([#11336](https://github.com/apache/maven/pull/11336)) @[dependabot[bot]](https://github.com/apps/dependabot)

## 📦 Dependency updates

- Bump actions/cache from 4.3.0 to 5.0.0 ([#11542](https://github.com/apache/maven/pull/11542)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump resolverVersion from 1.9.24 to 1.9.25 ([#11533](https://github.com/apache/maven/pull/11533)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/checkout from 6.0.0 to 6.0.1 ([#11512](https://github.com/apache/maven/pull/11512)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/setup-java from 5.0.0 to 5.1.0 ([#11519](https://github.com/apache/maven/pull/11519)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/checkout from 5.0.1 to 6.0.0 ([#11476](https://github.com/apache/maven/pull/11476)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/checkout from 5.0.0 to 5.0.1 ([#11458](https://github.com/apache/maven/pull/11458)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump commons-cli:commons-cli from 1.10.0 to 1.11.0 ([#11438](https://github.com/apache/maven/pull/11438)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.plexus:plexus-interpolation from 1.28 to 1.29 ([#11416](https://github.com/apache/maven/pull/11416)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump commons-io:commons-io from 2.20.0 to 2.21.0 ([#11417](https://github.com/apache/maven/pull/11417)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump xmlunitVersion from 2.10.4 to 2.11.0 ([#11331](https://github.com/apache/maven/pull/11331)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.codehaus.mojo:animal-sniffer-maven-plugin from 1.24 to 1.26 ([#11231](https://github.com/apache/maven/pull/11231)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump org.ow2.asm:asm from 9.8 to 9.9 ([#11203](https://github.com/apache/maven/pull/11203)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/cache from 4.2.4 to 4.3.0 ([#11172](https://github.com/apache/maven/pull/11172)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump com.google.guava:guava from 33.4.8-jre to 33.5.0-jre ([#11143](https://github.com/apache/maven/pull/11143)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump xmlunitVersion from 2.10.3 to 2.10.4 ([#11121](https://github.com/apache/maven/pull/11121)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump actions/cache from 4.2.3 to 4.2.4 ([#11032](https://github.com/apache/maven/pull/11032)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump commons-cli:commons-cli from 1.9.0 to 1.10.0 ([#11018](https://github.com/apache/maven/pull/11018)) @[dependabot[bot]](https://github.com/apps/dependabot)
- Bump commons-io:commons-io from 2.19.0 to 2.20.0 ([#10966](https://github.com/apache/maven/pull/10966)) @[dependabot[bot]](https://github.com/apps/dependabot)

---

> **Source** [apache/maven](https://github.com/apache/maven) · `maven-3.9.12` · 2025-12-16 · [upstream release](https://github.com/apache/maven/releases/tag/maven-3.9.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
