---
title: "spring-cloud-dataflow v2.11.1"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.11.1"
published: "2023-10-17"
type: "patch"
lang: "en"
summary: "Updated versions and mitigations for CVEs. · json-smart: 2.4.11 · nimbus-jose-jwt: 9.31 · snappy-java: 1.1.10.4"
---

# spring-cloud-dataflow v2.11.1

# Notable changes in 2.11.1

* Updated versions and mitigations for CVEs.
  * json-smart: 2.4.11
  * nimbus-jose-jwt: 9.31
  * snappy-java: 1.1.10.4
  * commons-compress: 1.24.0
* Ensure TaskOperations launch API is backwards compatible.
* Fix issues in dependency managements of modules after creating mono-repo

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow Build|`2.11.1`
Spring Cloud Dataflow Common|`2.11.1`
Spring Cloud Deployer|`2.9.1`
Spring Cloud Deployer Local|`2.9.1`
Spring Cloud Deployer CF|`2.9.1`
Spring Cloud Deployer K8S|`2.9.1`
Spring Cloud Common Security Config|`2.11.1`
Spring Cloud Skipper|`2.11.1`
Spring Cloud Dataflow UI|`3.4.1`
Spring Cloud Dataflow|`2.11.1`

# Issues

spring-cloud/spring-cloud-dataflow#5492 TaskOperations launch API is not backwards compatible
spring-cloud/spring-cloud-dataflow#5488 Update dependencies for latest CVEs
spring-cloud/spring-cloud-dataflow#5485 Add common-security-config modules to dependency management

# Installer

The scripts for installing the Carvel package on Kubernetes and local development is [attached](https://github.com/spring-cloud/spring-cloud-dataflow/releases/download/v2.11.1/spring-cloud-dataflow-oss-install-2.11.1.zip) below

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.11.1` · 2023-10-17 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.11.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
