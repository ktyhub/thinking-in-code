---
title: "spring-cloud-dataflow v2.10.1"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.10.1"
published: "2023-02-16"
type: "patch"
lang: "en"
summary: "Spring Boot 2.7.8 · Spring Framework 5.3.25 · Spring Shell 2.1.5"
---

# spring-cloud-dataflow v2.10.1

# Notable changes

## Library updates
- Spring Boot `2.7.8`
- Spring Framework `5.3.25`
- Spring Shell `2.1.5`

## Kubernetes
- Added ability to fully configure pod and container security contexts.
- Container security context is propagated to init container and additional containers.

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow Build|2.10.1
Spring Cloud Dataflow Common|2.10.1
Spring Cloud Deployer|2.8.1
Spring Cloud Deployer Local|2.8.1
Spring Cloud Deployer CF|2.8.1
Spring Cloud Deployer K8S|2.8.1
Spring Cloud Common Security Config|1.8.1
Spring Cloud Skipper|2.9.1
Spring Cloud Dataflow UI|3.3.1
Spring Cloud Dataflow|2.10.1

# Issues

spring-cloud/spring-cloud-dataflow-build#95 Update spring-shell 2.1.5
spring-cloud/spring-cloud-deployer-local#219 maxConcurrentExecutionsReached() has a race-condition where multiple instances can start before it returns a result
spring-cloud/spring-cloud-deployer-kubernetes#512 Add support to configure SecurityContext/allowPrivilegeEscalation for the deployed containers
spring-cloud/spring-cloud-dataflow-ui#1904 Task executions status label
spring-cloud/spring-cloud-dataflow#5200 Clarify docs on extending classpath
spring-cloud/spring-cloud-dataflow#5194 Remove workaround for missing pivotal-cloudfoundry-client-reactor
spring-cloud/spring-cloud-dataflow#5193 Remove all uses of repo.spring.io/release (main)
spring-cloud/spring-cloud-dataflow#5191 Update to Spring Boot 2.7.8
spring-cloud/spring-cloud-dataflow#5188 Flyway error migrating from SCDF 2.9.5 to 2.10.0
spring-cloud/spring-cloud-dataflow#5187 AppRegistryCommands missing ApplicationType completion
spring-cloud/spring-cloud-dataflow#5184 As user I want to set `runAsGroup` property in podSecurityContext
spring-cloud/spring-cloud-dataflow#5183 Task execustion view report wrong status
spring-cloud/spring-cloud-dataflow#5174 dataflow.spring.io Batch related documentation issues
spring-cloud/spring-cloud-dataflow#5172 spring-cloud-dataflow-shell fails to parse kebab-case arguments
spring-cloud/spring-cloud-dataflow#5171 Misalignment of spring-security-oauth2-client versions in spring-cloud-dataflow-server module
spring-cloud/spring-cloud-dataflow#5170 Spring Batch run in K8S pod in SCDF fails to load MariaDB driver class
spring-cloud/spring-cloud-dataflow#5164 MySQL 5.7 not working w/ SCDF 2.10 when using config server
spring-cloud/spring-cloud-dataflow#5163 Documentation for 2.10.0 local SCDF still points to 2.10.0-SNAPSHOT for manual downloads
spring-cloud/spring-cloud-dataflow#4971 Deprecate Count attribute for Step History

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.10.1` · 2023-02-16 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.10.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
