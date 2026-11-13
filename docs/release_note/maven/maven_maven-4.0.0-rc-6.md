---
title: "maven maven-4.0.0-rc-6"
project: "maven"
repo: "apache/maven"
tag: "maven-4.0.0-rc-6"
published: "2026-07-30"
type: "pre"
lang: "en"
summary: "This new release candidate of Maven 4 is released to get feedback from users. Maven 4 has restricted a few things compared to Maven 3, so make sure to run the mvnup tool before trying your project with Maven 4."
---

# maven maven-4.0.0-rc-6

## Notes

This new release candidate of Maven 4 is released to get feedback from users.
Maven 4 has restricted a few things compared to Maven 3, so make sure to run the [`mvnup`](https://maven.apache.org/tools/mvnup.html#Plugin_Compatibility_.26_Upgrades) tool before trying your project with Maven 4.

### Issues fixed since RC-5

All known issues reported in the RC-5 release notes have been fixed:

- **Bean configuration bug** — field accessibility state was cached globally, causing plugin configuration injection failures. Fixed in [#11433](https://github.com/apache/maven/pull/11433).
- **Concurrency issue in the v4 API** — a `ConcurrentModificationException` was fixed in [#11429](https://github.com/apache/maven/pull/11429).
- **BOM packaging** — consumer POM conversion for BOM projects now correctly preserves dependency versions. Fixed in [#11464](https://github.com/apache/maven/pull/11464).
- **macOS Gatekeeper** — the extracted JLine native binaries that triggered Gatekeeper have been removed from the distribution ([#11997](https://github.com/apache/maven/pull/11997)). The `xattr` workaround from RC-5 is no longer needed.

### Known compatibility issues

The following are known compatibility issues when using Maven 4. Running
[`mvnup`](https://maven.apache.org/tools/mvnup.html) before building with
Maven 4 will fix many common plugin version issues automatically. The issues
below are those that require manual intervention or upstream fixes.

#### Stricter POM validation

Maven 4 enforces stricter validation than Maven 3. Projects may need to fix their POMs:

- **Duplicate XML elements** — duplicate `<artifactId>`, `<properties>`, etc. are now rejected (`Duplicated tag` error). Fix the source POM.
- **Duplicate dependency declarations** — same `groupId:artifactId` declared twice is now rejected (`must be unique`).
- **Uninterpolated expressions** — `${...}` expressions in repository URLs, distribution management IDs, and other fields that Maven 3 silently accepted are now rejected.
- **Invalid XML in transitive POMs** — illegal processing instructions or undeclared namespace prefixes in transitive POMs cause `Non-parseable POM` errors.
- **Properties in `<module>` paths** — Maven 4 no longer interpolates properties like `${spark.version}` in `<module>` elements at POM reading time.
- **CI-friendly versions** — projects using `${revision}` without `flatten-maven-plugin` may hit missing dependency version errors.
- **Invalid Collect Request** — transitive dependencies with uninterpolated `${...}` version expressions are rejected.

#### Transitive dependency resolution changes

Maven 4's `TransitiveDependencyManager` applies `dependencyManagement` at all transitive depths (Maven 3 only applied it at the first level). This is intentional but can change resolved versions:

- Dependencies previously on the classpath may disappear — add explicit declarations. See [#12302](https://github.com/apache/maven/issues/12302).
- `maven-enforcer-plugin` version rules may trigger due to downgraded transitive versions.
- `license-maven-plugin` may report new transitive dependencies not in the allow-list.
- Karaf feature verification may fail due to OSGi bundle version mismatches.

#### Plugin and extension compatibility

Some plugins and extensions require specific versions for Maven 4:

- **Quarkus** — versions before 3.20 use `ServiceLocator`/`RepositorySystem` patterns incompatible with Maven 4's Sisu-based DI. Upgrade to Quarkus 3.20+.
- **Tycho** — versions before 5.0 use Guice/Sisu injection patterns broken by Maven 4. Upgrade to Tycho 5.0.3+.
- **Develocity Maven extension** — fails to initialize due to SLF4J classloading changes (`ClassNotFoundException: SimpleLogger`).
- **pgpverify-maven-plugin** — versions before 1.20 hit a `ClassCastException` with Maven 4's resolver. See [resolver#1957](https://github.com/apache/maven-resolver/pull/1957).
- **cyclonedx-maven-plugin** — fails with `Invalid Version Range Request` when using `${revision}` CI-friendly versions.
- **maven-site-plugin** — Velocity template rendering may fail with incompatible site plugin versions.
- **maven-shade-plugin** — `dependency-reduced-pom.xml` can cause `The parents form a cycle` error.
- **commons-release-plugin** — `clean-staging` fails under Maven 4.

#### Classloading changes

- Plugins relying on Maven 3's classrealm layout may encounter **"foreign imports"** errors (e.g., Quarkus, JAXB plugins).
- Maven 4's prefix-based repository routing may block artifacts not matching `/.meta/prefixes.txt`.

#### Post-mvnup formatting

- **spotless-maven-plugin** and **sortpom-maven-plugin** may report formatting violations after `mvnup` modifies POM files. Re-run the formatter after `mvnup`.

#### Other

- **Broken upstream POMs** — e.g., `hadoop-project` 3.1.0–3.3.0 has invalid XML (`<Xlint:-unchecked/>`) causing parse errors. These need upstream fixes tracked in [HADOOP-19923](https://issues.apache.org/jira/browse/HADOOP-19923).
- **Enforcer POM element ordering** — Maven 4's model builder reorders POM elements into a canonical order, which can break enforcer rules checking element ordering.
- **SNAPSHOT handling** — SNAPSHOT artifacts may show as "present, but unavailable" under Maven 4's different resolver metadata handling.


## 🚀 New features and improvements

- Backport the use of hardlink instead of file copy ([#11564](https://github.com/apache/maven/pull/11564)) @desruisseaux
- Accept Java module names as attached artifactId even if they differ from the project's artifactId ([#11573](https://github.com/apache/maven/pull/11573)) @desruisseaux
- Add module-aware resource handling for modular sources ([#11700](https://github.com/apache/maven/pull/11700)) @desruisseaux
- [[MNG-8507]](https://issues.apache.org/jira/browse/MNG-8507) - Reduce allocation pressure in model building pipeline ([#12540](https://github.com/apache/maven/pull/12540)) @gnodet
- [Backport 4.0.x] Fix #12530: add mvnup upgrade strategies for Maven 4 known compatibility issues ([#12560](https://github.com/apache/maven/pull/12560)) @gnodet
- Introduce validation control ([#12548](https://github.com/apache/maven/pull/12548)) @cstamas
- Backport #12505: mvnup: widen exact Maven version pins to allow Maven 4 ([#12508](https://github.com/apache/maven/pull/12508)) @gnodet
- [[MNG-5913]](https://issues.apache.org/jira/browse/MNG-5913) - Allow defining aliases for existing server configurations in settings.xml ([#12473](https://github.com/apache/maven/pull/12473)) @slawekjaranowski
- Backport #12454: mvnup upgrade strategies and compatibility improvements ([#12467](https://github.com/apache/maven/pull/12467)) @gnodet
- In failed build limit reactor summary to only failed modules ([#12469](https://github.com/apache/maven/pull/12469)) @slawekjaranowski
- [Backport 4.0.x] Add mvnup SourceStrategy for migrating to <source> elements ([#12357](https://github.com/apache/maven/pull/12357)) @gnodet
- [Backport 4.0.x][#12353] Add jaxb2-maven-plugin to mvnup plugin upgrade list ([#12356](https://github.com/apache/maven/pull/12356)) @gnodet
- [Backport 4.0.x] Switch default resolver transport from JDK/methanol to Apache HttpClient ([#12341](https://github.com/apache/maven/pull/12341)) @gnodet
- Feat: Pull out maven-executor into its own project (#12004) ([#12186](https://github.com/apache/maven/pull/12186)) @cstamas
- [maven-4.0.x] Add maven-surefire-report-plugin to PluginUpgradeStrategy ([#12114](https://github.com/apache/maven/pull/12114)) @gnodet
- [maven-4.0.x] Fix #12087: add surefire and failsafe plugins to PluginUpgradeStrategy ([#12109](https://github.com/apache/maven/pull/12109)) @gnodet
- Backport: Maven Executor Fixes ([#11987](https://github.com/apache/maven/pull/11987)) @cstamas
- Promote java version in JavaToolchain ([#11971](https://github.com/apache/maven/pull/11971)) @slawekjaranowski
- Add time zone to Maven startup banner ([#11781](https://github.com/apache/maven/pull/11781)) @slawekjaranowski
- Update formatting of prerequisites-requirements error to improve readability ([#11525](https://github.com/apache/maven/pull/11525)) @slawekjaranowski

## 🐛 Bug Fixes

- Remove an optimization on PathSelector producing false negatives ([#12623](https://github.com/apache/maven/pull/12623)) @desruisseaux
- Remove erroneous path normalization optimization + regression test ([#12621](https://github.com/apache/maven/pull/12621)) @gnodet
- Fix #12583: Inverted file existence check in DefaultTransport.put() ([#12619](https://github.com/apache/maven/pull/12619)) @gnodet @elharo
- [[MNG-8507]](https://issues.apache.org/jira/browse/MNG-8507) mvnup: skip dedup inside plugin `<configuration>` elements ([#12582](https://github.com/apache/maven/pull/12582)) @gnodet
- Fix BOM consumer POM leaving property references unresolved ([#12627](https://github.com/apache/maven/pull/12627)) @gnodet
- Use resource filtering for mng-12534 IT plugin mavenVersion to avoid hardcoded versions ([58cb473](https://github.com/apache/maven/commit/58cb473e74)) @gnodet
- [MNG-8425] Fix mvnenc init saving invalid master source configuration ([#12564](https://github.com/apache/maven/pull/12564)) @gnodet
- Consumer POM of multi-module project should exclude <build> and <dependencies> elements ([#11764](https://github.com/apache/maven/pull/11764)) @desruisseaux
- Fix #12045: fix mvnup plugin upgrade strategy for inherited plugins from remote parent POMs ([#12054](https://github.com/apache/maven/pull/12054)) @gnodet
- Backport #12538: Handle Ctrl+C on Windows terminals ([#12550](https://github.com/apache/maven/pull/12550)) @gnodet
- [Backport 4.0.x] Fix #12531: filter NO_REPOSITORY sentinel from mapped exceptions in ArtifactResolverResult ([#12561](https://github.com/apache/maven/pull/12561)) @gnodet
- [Backport 4.0.x] Fix #12534: Wire up @After annotation processing in Maven core ([#12566](https://github.com/apache/maven/pull/12566)) @gnodet
- [Backport 4.0.x] Fix #12427: Reject path-traversal segments in coordinate ids and versions ([#12565](https://github.com/apache/maven/pull/12565)) @gnodet
- [Backport 4.0.x] [[MNG-11147]](https://issues.apache.org/jira/browse/MNG-11147) - Fix BOM version inference for sibling modules in dependencyManagement ([#12569](https://github.com/apache/maven/pull/12569)) @gnodet
- Backport #12523 to 4.0.x: preserve unresolved ${...} in CLI -D values ([#12524](https://github.com/apache/maven/pull/12524)) @ascheman
- [Backport 4.0.x] Avoid IllegalStateException on duplicate profile ids in DefaultModelBuilder ([#12506](https://github.com/apache/maven/pull/12506)) @ascheman
- Backport #12446: Fix deadlock in AbstractRequestCache ([#12468](https://github.com/apache/maven/pull/12468)) @gnodet
- Fix #12464: Skip MAVEN_ARGS for non-default main classes (backport to 4.0.x) ([#12466](https://github.com/apache/maven/pull/12466)) @gnodet
- Bugfix: use GAV and not GAPV in source labels for profiles (#12406) ([#12424](https://github.com/apache/maven/pull/12424)) @cstamas
- [#11449] Fix Mockito agent: use late binding @{} interpolation (backport to 4.0.x) ([#12415](https://github.com/apache/maven/pull/12415)) @gnodet
- Make LookupContext#closeables thread safe (backport to 4.0.x) ([#12414](https://github.com/apache/maven/pull/12414)) @gnodet
- [#11683] Install JUL-to-SLF4J bridge to route java.util.logging through Maven logging ([#12345](https://github.com/apache/maven/pull/12345)) @gnodet
- [#12303] Fix CI-friendly ${revision} not interpolated for non-build POM reads ([#12322](https://github.com/apache/maven/pull/12322)) @gnodet
- [4.0.x] Fix mvn.cmd jvm.config read failing silently on Windows CI ([#12379](https://github.com/apache/maven/pull/12379)) @gnodet
- [Backport 4.0.x] Fix mvnup spurious pluginManagement injection for remote parent plugins ([#12351](https://github.com/apache/maven/pull/12351)) @gnodet
- [[MNG-8650]](https://issues.apache.org/jira/browse/MNG-8650) - Fix MAVEN_ARGS backslash stripping on Windows ([#12349](https://github.com/apache/maven/pull/12349)) @gnodet
- Port #11908: Do not force metadata download for plugin prefix resolution (#11905) ([#12343](https://github.com/apache/maven/pull/12343)) @gnodet
- [Backport 4.0.x] Fix NPE in DefaultLookup.lookupOptional() when container returns null ([#12340](https://github.com/apache/maven/pull/12340)) @gnodet
- [#12301] Use stack-passed Set for activeModelReads cycle detection ([#12325](https://github.com/apache/maven/pull/12325)) @gnodet
- [Backport 4.0.x] Sync DefaultTypeProvider and dependency-types docs across impl and compat ([#12326](https://github.com/apache/maven/pull/12326)) @gnodet
- [#12301] Fix StackOverflowError with internal parent and CI-friendly revision ([#12314](https://github.com/apache/maven/pull/12314)) @gnodet
- [Backport 4.0.x] [#12288] Add -P !profile deactivation regression guard (#12298) ([#12315](https://github.com/apache/maven/pull/12315)) @gnodet
- [maven-4.0.x] Fix #12305: filter uninterpolated deps in ArtifactDescriptorReaderDelegate ([#12309](https://github.com/apache/maven/pull/12309)) @gnodet
- [maven-4.0.x] Fix #12304: replace deprecated property expressions in mvnup ([#12308](https://github.com/apache/maven/pull/12308)) @gnodet
- [maven-4.0.x] Fix #12306: normalize targetPath in DefaultSourceRoot ([#12307](https://github.com/apache/maven/pull/12307)) @gnodet
- [Backport 4.0.x] [#12288] Pass settings.xml profile properties to LRM ([#12299](https://github.com/apache/maven/pull/12299)) @gnodet
- Fix thread-safety in DefaultModelValidator (backport to 4.0.x) ([#12284](https://github.com/apache/maven/pull/12284)) @gnodet
- Fix MojoExtension.beforeEach to use merged model instead of raw parsed model (backport to 4.0.x) ([#12287](https://github.com/apache/maven/pull/12287)) @gnodet
- Fix BUILD_CONSUMER profile activation for locally-resolved parent POMs (backport to 4.0.x) ([#12286](https://github.com/apache/maven/pull/12286)) @gnodet
- Fix NPE in DefaultModelBuilder when POM resolved from repository (backport to 4.0.x) ([#12285](https://github.com/apache/maven/pull/12285)) @gnodet
- Backport #12053: Tokenize arithmetic operators as delimiters in ConditionParser ([#12275](https://github.com/apache/maven/pull/12275)) @gnodet
- Backport #12117: Support sealed parameter implementation hints ([#12258](https://github.com/apache/maven/pull/12258)) @gnodet
- Backport #12038: Fix ConditionParser to handle newlines before && operator ([#12259](https://github.com/apache/maven/pull/12259)) @gnodet
- Backport #12146: Handle missing package metadata in model ids ([#12257](https://github.com/apache/maven/pull/12257)) @gnodet
- Backport #11742: Fix #11715: preserve 4.1.0 namespace/schema in help:effective-pom ([#12255](https://github.com/apache/maven/pull/12255)) @gnodet
- Backport #12237: Add XmlService classloader fallback for ServiceLoader discovery ([#12254](https://github.com/apache/maven/pull/12254)) @gnodet
- Avoid reflective InputSource modelId mutation ([#12147](https://github.com/apache/maven/pull/12147)) @Will-thom
- Fix MavenITConsumerPomBomFromSettingsRepoTest missing super constructor call ([#12253](https://github.com/apache/maven/pull/12253)) @gnodet
- fix reportSet inheritance in Maven 4 model building ([#12245](https://github.com/apache/maven/pull/12245)) @hboutemy
- [4.0.x] [[GH-11772]](https://issues.apache.org/jira/browse/GH-11772) - Fail-fast consumer POM validation for non-4.0.0 model versions ([#12236](https://github.com/apache/maven/pull/12236)) @gnodet
- [4.0.x] Fix Source.targetPath incorrectly aligned to basedir ([#12235](https://github.com/apache/maven/pull/12235)) @gnodet
- [4.0.x] Fix #11856: Improve error message for prefix-based remote repository filtering errors ([#12234](https://github.com/apache/maven/pull/12234)) @gnodet
- [4.0.x] Fix #11796: Preserve default-phases bindings for standard lifecycle phases ([#12233](https://github.com/apache/maven/pull/12233)) @gnodet
- [4.0.x] Fix @PreDestroy ClassNotFoundException from premature ClassRealm disposal ([#12232](https://github.com/apache/maven/pull/12232)) @gnodet
- [4.0.x] [[MNG-6772]](https://issues.apache.org/jira/browse/MNG-6772) - Re-enable integration test for nested import scope repository override ([#12231](https://github.com/apache/maven/pull/12231)) @gnodet
- Fix deadlocks in request cache (unstable hashCode, re-entrant self-deadlock, mutable properties) ([#12166](https://github.com/apache/maven/pull/12166)) @gnodet
- [maven-4.0.x] Backport bug fixes from #11741 and #11733 ([#12144](https://github.com/apache/maven/pull/12144)) @gnodet
- [backport maven-4.0.x] Fix logging setup/teardown order ([#12137](https://github.com/apache/maven/pull/12137)) @gnodet
- Fix domtrip API breakage after 1.5.1 upgrade ([#12138](https://github.com/apache/maven/pull/12138)) @gnodet
- Update binary distribution LICENSE with complete Apache License 2.0 text ([#12116](https://github.com/apache/maven/pull/12116)) @slawekjaranowski
- Fix #11899: Default addLocationInformation to false in Settings and Toolchains XML writers ([#12123](https://github.com/apache/maven/pull/12123)) @gnodet
- [maven-4.0.x] Fix mvn script expanding ${...} in CLI arguments ([#12095](https://github.com/apache/maven/pull/12095)) @gnodet
- [maven-4.0.x] Fix consumer POM serialization of prefixed XML attributes (fixes #11760) ([#12110](https://github.com/apache/maven/pull/12110)) @gnodet
- Fix #11885: Disable ANSI colors when stdout is piped on JDK 22+ (backport) ([#12111](https://github.com/apache/maven/pull/12111)) @gnodet
- [maven-4.0.x] Fix #12085: regression tests for version inheritance from remote parent ([#12101](https://github.com/apache/maven/pull/12101)) @gnodet
- Fix #12074: prevent false parent cycle with shade plugin's dependency-reduced-pom.xml ([#12079](https://github.com/apache/maven/pull/12079)) @gnodet
- Fix #12075: skip expression validation for distributionManagement repository IDs (#12076) ([#12077](https://github.com/apache/maven/pull/12077)) @gnodet
- [maven-4.0.x] fix: restore buildConfiguration() callback in deprecated build() methods ([#12094](https://github.com/apache/maven/pull/12094)) @gnodet
- [maven-4.0.x] fix: propagate addResource() to model Build for Maven 3 compat ([#12093](https://github.com/apache/maven/pull/12093)) @gnodet
- [maven-4.0.x] Filter transitive repositories with uninterpolated IDs (#12049) ([#12070](https://github.com/apache/maven/pull/12070)) @gnodet
- Downgrade plexus-classworlds from 2.11.0 to 2.9.0 ([#12092](https://github.com/apache/maven/pull/12092)) @gnodet
- [maven-4.0.x] Fix #11920: skip expression validation for profile repository URLs ([#12055](https://github.com/apache/maven/pull/12055)) @gnodet
- Mvn4: Remove extracted Mac OS JLine binaries from Maven distro ([#11997](https://github.com/apache/maven/pull/11997)) @kwin
- Fixes issue #11827 - Maven DI crashes if the file org.apache.maven.api.di.Inject contains empty lines ([#11830](https://github.com/apache/maven/pull/11830)) @slawekjaranowski
- Backport the simplification and fixes of PathSelector ([#11565](https://github.com/apache/maven/pull/11565)) @desruisseaux
- [maven-4.0.x] Fix special characters in .mvn/jvm.config (fix #11363, #11485 and #11486) (#11365) ([#11537](https://github.com/apache/maven/pull/11537)) @gnodet
- Improve DefaultModelProcessor error reporting for alternative parsers ([#11529](https://github.com/apache/maven/pull/11529)) @gnodet
- Allow ${project.basedir} in profile activation.condition ([#11528](https://github.com/apache/maven/pull/11528)) @gnodet
- [maven-4.0.x] Fix profile source tracking in multi-module projects (fixes #11409) (#11440) ([#11466](https://github.com/apache/maven/pull/11466)) @gnodet
- [maven-4.0.x] Fix BOM packaging in consumer POMs (#11427) ([#11464](https://github.com/apache/maven/pull/11464)) @gnodet
- [maven-4.0.x] Fix field accessibility leak in EnhancedCompositeBeanHelper (#11425) ([#11433](https://github.com/apache/maven/pull/11433)) @gnodet
- Fix a `ConcurrentModificationException` ([#11429](https://github.com/apache/maven/pull/11429)) @desruisseaux

## 📝 Documentation updates

- [Backport 4.0.x] Fix Javadoc about default value of consumer POM flattening ([#12562](https://github.com/apache/maven/pull/12562)) @gnodet
- [Backport 4.0.x] [[ISSUE-10329]](https://issues.apache.org/jira/browse/ISSUE-10329) - Document behaviour of UrlNormalizer ([#12296](https://github.com/apache/maven/pull/12296)) @gnodet
- Add deprecation Javadoc to XmlNode constants and methods (backport #11576) ([#12295](https://github.com/apache/maven/pull/12295)) @gnodet
- [Backport 4.0.x] Update lifecycles reference to point to LifecycleRegistry ([#12292](https://github.com/apache/maven/pull/12292)) @gnodet
- [Backport 4.0.x] Document deprecation rationale for Artifact version constants ([#12290](https://github.com/apache/maven/pull/12290)) @gnodet
- fix doc cross references ([#12273](https://github.com/apache/maven/pull/12273)) @hboutemy
- document modelVersion supported values ([#11810](https://github.com/apache/maven/pull/11810)) @hboutemy
- [maven-4.0.x] improve align in dependency graph ([#12015](https://github.com/apache/maven/pull/12015)) @hboutemy
- document supported values: 4.0.0 and 4.1.0 ([#11957](https://github.com/apache/maven/pull/11957)) @hboutemy
- clarify repository vs deployment repository ([#11491](https://github.com/apache/maven/pull/11491)) @hboutemy
- fix javadoc group packages ([#11455](https://github.com/apache/maven/pull/11455)) @hboutemy
- update links ([#11452](https://github.com/apache/maven/pull/11452)) @hboutemy
- adapt documentatiion directories ([#11450](https://github.com/apache/maven/pull/11450)) @hboutemy
- add maintained branches ([#11447](https://github.com/apache/maven/pull/11447)) @hboutemy
- improve dependency graph rendering ([#11445](https://github.com/apache/maven/pull/11445)) @hboutemy

## 👻 Maintenance

- Add Apache license headers to fix ATR concerns ([#12613](https://github.com/apache/maven/pull/12613)) @gnodet
- Add DefaultLookupTest for lookupOptional NPE fix ([#12385](https://github.com/apache/maven/pull/12385)) @ascheman
- [Backport 4.0.x] [[MNG-8425]](https://issues.apache.org/jira/browse/MNG-8425) - Fix mvnenc init saving invalid master source configuration ([#12564](https://github.com/apache/maven/pull/12564)) @gnodet
- push-to-atr profile for source+binaries in apache-maven subproject ([#12448](https://github.com/apache/maven/pull/12448)) @hboutemy
- configure ATR project ([#12449](https://github.com/apache/maven/pull/12449)) @hboutemy
- Forward-port #11985: remove redundant required MDO attrs (#11979) ([#12347](https://github.com/apache/maven/pull/12347)) @gnodet
- Forward port Maven 3.10.0 PluginDependenciesResolver changes ([#12335](https://github.com/apache/maven/pull/12335)) @cstamas
- [Backport 4.0.x] Move model SPI interfaces from maven-impl to maven-api-spi ([#12289](https://github.com/apache/maven/pull/12289)) @gnodet
- Deprecate testing classes in org.apache.maven.api, add new ones in org.apache.maven.testing ([#12277](https://github.com/apache/maven/pull/12277)) @gnodet
- Backport #12256: Centralize XXE hardening for StAX XML parsers ([#12269](https://github.com/apache/maven/pull/12269)) @gnodet
- Refactor JUnit extensions to avoid using static fields. ([#12202](https://github.com/apache/maven/pull/12202)) @slawekjaranowski
- [4.0.x] Fix mvnup effective model analysis for CI-friendly parent versions ([#12230](https://github.com/apache/maven/pull/12230)) @gnodet
- [4.0.x] Filter project repos with uninterpolated property expressions ([#12229](https://github.com/apache/maven/pull/12229)) @gnodet
- [4.0.x] Bump exec-maven-plugin target to 3.5.0 and fix PLUGIN_UPGRADES inconsistencies ([#12228](https://github.com/apache/maven/pull/12228)) @gnodet
- [4.0.x] Use request properties consistently for CI-friendly version interpolation ([#12227](https://github.com/apache/maven/pull/12227)) @gnodet
- [4.0.x] Bump scala-maven-plugin upgrade target from 4.9.2 to 4.9.5 ([#12226](https://github.com/apache/maven/pull/12226)) @gnodet
- [4.0.x] Fix mvnup PLUGIN_UPGRADES for compiler and exec plugins ([#12225](https://github.com/apache/maven/pull/12225)) @gnodet
- [4.0.x] Remove invalid combine.self and combine.children attributes in mvnup ([#12224](https://github.com/apache/maven/pull/12224)) @gnodet
- [4.0.x] Fix mvnup plugin upgrade for versions locked by parent build/plugins ([#12223](https://github.com/apache/maven/pull/12223)) @gnodet
- [4.0.x] Fix mvnup: use effective model to resolve properties from remote parents ([#12222](https://github.com/apache/maven/pull/12222)) @gnodet
- [4.0.x] Fix mvnup recommending non-existent maven-enforcer-plugin:3.5.2 ([#12156](https://github.com/apache/maven/pull/12156)) @gnodet
- [maven-4.0.x] Fix #12080: mvnup - comment out dependencies with undefined property expressions ([#12099](https://github.com/apache/maven/pull/12099)) @gnodet

---

> **Source** [apache/maven](https://github.com/apache/maven) · `maven-4.0.0-rc-6` · 2026-07-30 · [upstream release](https://github.com/apache/maven/releases/tag/maven-4.0.0-rc-6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
