---
title: "spring-cloud-dataflow v2.11.4"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.11.4"
published: "2024-07-19"
type: "patch"
lang: "en"
summary: "spring-cloud/spring-cloud-dataflow#5848 BadSqlGrammarException for Spring Boot 3 Task Applications · spring-cloud/spring-cloud-dataflow#5825 Security issues in transitive dependency of xmlunit-core-2.9.1.jar"
---

# spring-cloud-dataflow v2.11.4

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow|2.11.4
Spring Cloud Skipper|2.11.4
Spring Cloud Deployer|2.9.4
Spring Cloud Dataflow UI|3.4.5

# Issues
* spring-cloud/spring-cloud-dataflow#5848 BadSqlGrammarException for Spring Boot 3 Task Applications
* spring-cloud/spring-cloud-dataflow#5825 Security issues in transitive dependency of xmlunit-core-2.9.1.jar
* spring-cloud/spring-cloud-dataflow#5705 Task schedule is not using the version defined in the properties file

## :hammer: Dependency Upgrades
- Spring Framework to 5.3.37
- Jackson to 2.17.2
- Reactor to 2020.0.45
- Netty to 4.1.111.Final
- Tomcat to 9.0.90
- nimbus-jose-jwt to 9.37.3
- testcontainers to 1.19.8

## What's Changed in Spring Cloud Dataflow and Skipper from `v2.11.3` to `v2.11.4`
* Update scope of spring-boot-starter-test by @corneil in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5826
* Add spring-cloud-dataflow-server to version-info. by @corneil in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5822
* All src/deploy scripts must be updated to the 2.11.4 release. by @cppwfs in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5827
* [CI] Remove unused labeler workflow by @onobc in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5840
* last task execution performance by @corneil in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5843
* Remove redundant dep. mgmt for Bouncycastle by @onobc in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5855
* [CI] Create workflow for uaa-test container. by @corneil in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5861
* Update Spring Framework to 5.3.37 by @corneil in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5863
* Fix build-image name for containers. by @corneil in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5864
* Update Tomcat for 9.0.90 by @corneil in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5865
* Update various lib deps patch versions  by @onobc in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5868
* Remove Dependency Mgmt for H2 and rely on Boot Bom by @cppwfs in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5870
* Ensure PackageMetadata is created with SafeConstructor by @cppwfs in https://github.com/spring-cloud/spring-cloud-dataflow/pull/5871


**Full Changelog**: https://github.com/spring-cloud/spring-cloud-dataflow/compare/v2.11.3...v2.11.4


## What's Changed in Spring Cloud Deployer from `v2.9.3` to `v2.9.4`
* Update Spring Framework to 5.3.34 by @corneil in https://github.com/spring-cloud/spring-cloud-deployer/pull/449
* Add dep. mgmt. for commons-io and commons-compress by @onobc in https://github.com/spring-cloud/spring-cloud-deployer/pull/452
* [CI] Remove unused labeler workflow file by @onobc in https://github.com/spring-cloud/spring-cloud-deployer/pull/456
* Update Jackson to 2.17.1 by @onobc in https://github.com/spring-cloud/spring-cloud-deployer/pull/457
* Update hashids to 1.0.3 by @corneil in https://github.com/spring-cloud/spring-cloud-deployer/pull/458
* Fix cfenv detection by @jvalkeal in https://github.com/spring-cloud/spring-cloud-deployer/pull/461
* Put dependency versions in properties by @onobc in https://github.com/spring-cloud/spring-cloud-deployer/pull/467


**Full Changelog**: https://github.com/spring-cloud/spring-cloud-deployer/compare/v2.9.3...v2.9.4

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.11.4` · 2024-07-19 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.11.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
