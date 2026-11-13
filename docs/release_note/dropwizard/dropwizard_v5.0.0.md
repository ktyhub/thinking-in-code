---
title: "dropwizard v5.0.0"
project: "dropwizard"
repo: "dropwizard/dropwizard"
tag: "v5.0.0"
published: "2025-09-16"
type: "major"
lang: "en"
summary: "Please refer to the Dropwizard 5.0.x upgrade notes in the documentation for a list of breaking changes and a migration path."
---

# dropwizard v5.0.0

# Dropwizard 5.0.0

Please refer to the [Dropwizard 5.0.x upgrade notes](https://www.dropwizard.io/en/stable/manual/upgrade-notes/upgrade-notes-5_0_x.html) in the documentation for a list of breaking changes and a migration path.

## What's Changed

For a full list of changes, please refer to the pre-release notes:

- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-alpha.1
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-alpha.2
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-alpha.3
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-alpha.4
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-alpha.5
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-rc.1
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-rc.2
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-rc.3
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-rc.4
- https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0-rc.5

### Changes since Dropwizard 5.0.0-rc.5

* Update Dropwizard 5.0.0 documentation for dependency upgrades and Java 17 requirement by @Copilot in https://github.com/dropwizard/dropwizard/pull/10415
* chore(deps): update dependency sphinx-autobuild to v2025 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10414
* ci: update link to Mastodon (foojay.social) by @joschi in https://github.com/dropwizard/dropwizard/pull/10423
* docs: fix incorrect format string in archivedLogFilenamePattern by @joschi in https://github.com/dropwizard/dropwizard/pull/10420
* build: remove empty distributionManagement from POM by @joschi in https://github.com/dropwizard/dropwizard/pull/10429
* fix(deps): update dependency io.dropwizard.logback:logback-throttling-appender to v1.5.2 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10433
* fix(deps): update dependency io.dropwizard.metrics:metrics-bom to v4.2.35 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10436
* fix(deps): update dependency com.fasterxml.jackson:jackson-bom to v2.20.0 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10439
* fix(deps): update dependency org.apache.httpcomponents.core5:httpcore5 to v5.3.5 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10444
* chore(deps): update dependency org.sonarsource.scanner.maven:sonar-maven-plugin to v5.2.0.4988 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10445
* Replace call to deprecated logback PatternLayout#getDefaultConverterMap by @joschi in https://github.com/dropwizard/dropwizard/pull/10447
* fix(deps): update dependency org.hibernate.orm:hibernate-core to v6.6.28.final (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10451
* fix(deps): update dependency org.checkerframework:checker-qual to v3.50.0 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10452
* Use non-deprecated httpclient methods for managing client timeouts by @joschi in https://github.com/dropwizard/dropwizard/pull/10455
* chore: mark `AuthConfiguration#NT_CREDS` as deprecated by @joschi in https://github.com/dropwizard/dropwizard/pull/10457
* fix(deps): update dependency io.dropwizard.metrics:metrics-bom to v4.2.36 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10462
* chore: remove Checker framework by @joschi in https://github.com/dropwizard/dropwizard/pull/10463
* chore(deps): update github/codeql-action action to v3.30.0 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10466
* fix(deps): update dependency org.apache.tomcat:tomcat-jdbc to v11.0.11 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10481
* chore(deps): update github/codeql-action action to v3.30.1 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10480
* chore(deps): update actions/stale action to v10 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10482
* fix(deps): update jetty monorepo to v12.1.1 (release/5.0.x) (patch) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10483
* Replace deprecated Liquibase call in DbMigrateCommand by @joschi in https://github.com/dropwizard/dropwizard/pull/10489
* Use non-deprecated freemarker constructor by @joschi in https://github.com/dropwizard/dropwizard/pull/10490
* Reinstate pretty-printing of health check counters by @joschi in https://github.com/dropwizard/dropwizard/pull/10493
* Simplify NetUtil's parsing of Linux TCP backlog setting by @joschi in https://github.com/dropwizard/dropwizard/pull/10487
* Force ASCII parsing of header values in dropwizard-servlets ByteRange… by @joschi in https://github.com/dropwizard/dropwizard/pull/10497
* Avoid deprecated LevenshteinDistance constructor in dropwizard-configuration by @joschi in https://github.com/dropwizard/dropwizard/pull/10495
* chore(deps): update github/codeql-action action to v3.30.3 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10507
* fix(deps): update dependency jakarta.activation:jakarta.activation-api to v2.1.4 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10508
* Replace CacheControl#toString with its non-deprecated equivalent by @joschi in https://github.com/dropwizard/dropwizard/pull/10496
* Mark getDefaultConverterMap as deprecated by @joschi in https://github.com/dropwizard/dropwizard/pull/10499
* chore(deps): update maven plugins (release/5.0.x) (patch) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10513
* fix(deps): update dependency org.hibernate.orm:hibernate-core to v6.6.29.final (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10514
* fix(deps): update dependency jakarta.xml.bind:jakarta.xml.bind-api to v4.0.4 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10523
* fix(deps): update dependency io.dropwizard.logback:logback-throttling-appender to v1.5.3 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10527
* fix(deps): update dependency io.dropwizard.metrics:metrics-bom to v4.2.37 (release/5.0.x) by @renovate[bot] in https://github.com/dropwizard/dropwizard/pull/10530

**Full Changelog**: https://github.com/dropwizard/dropwizard/compare/v5.0.0-rc.5...v5.0.0

---

> **Source** [dropwizard/dropwizard](https://github.com/dropwizard/dropwizard) · `v5.0.0` · 2025-09-16 · [upstream release](https://github.com/dropwizard/dropwizard/releases/tag/v5.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
