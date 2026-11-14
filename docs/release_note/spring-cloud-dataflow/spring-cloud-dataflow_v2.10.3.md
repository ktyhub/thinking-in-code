---
title: "spring-cloud-dataflow v2.10.3"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.10.3"
published: "2023-05-05"
type: "patch"
lang: "en"
summary: "Spring Boot 2.7.11"
---

# spring-cloud-dataflow v2.10.3

# Notable changes

## Library updates
- Spring Boot 2.7.11

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow Build|2.10.3
Spring Cloud Dataflow Common|2.10.3
Spring Cloud Deployer|2.8.3
Spring Cloud Deployer Local|2.8.3
Spring Cloud Deployer CF|2.8.3
Spring Cloud Deployer K8S|2.8.3
Spring Cloud Common Security Config|1.8.3
Spring Cloud Skipper|2.9.3
Spring Cloud Dataflow UI|3.3.3
Spring Cloud Dataflow|2.10.3

# CVE Fixes
spring-cloud/spring-cloud-dataflow#5329 Fix code scanning alert - Constructor Deserialization Remote Code Execution
spring-cloud/spring-cloud-dataflow#5303 Security issues in transitive dependency of spring-security-oauth2-client-5.4.2
spring-cloud/spring-cloud-dataflow#5302 Security issues in transitive dependency of spring-expression-5.2.11
spring-cloud/spring-cloud-dataflow#5301 Security issues in transitive dependency of spring-webmvc-5.3.25
spring-cloud/spring-cloud-dataflow#5300 Security issues in transitive dependency of json-smart-2.3
spring-cloud/spring-cloud-dataflow#5299 Security issues in transitive dependency of jettison-1.51
spring-cloud/spring-cloud-dataflow#5248 Misalignment of spring-security-oauth2-client versions in spring-cloud-dataflow-server module

# Issues
spring-cloud/spring-cloud-dataflow#5325 Switch maven repos off of libs-xyz variants 
spring-cloud/spring-cloud-dataflow#5321 default spring repo at local scdf is not available 
spring-cloud/spring-cloud-dataflow#5317 Unregistering multiple applications doesn&#39;t work while unregistering single application works. 
spring-cloud/spring-cloud-dataflow#5297 [2.10.x] Documentation cleanup 
spring-cloud/spring-cloud-dataflow#5252 Simplify Carvel packages (Part 1)
spring-cloud/spring-cloud-dataflow#4791 Hibernate statistics are not exposed even if corresponding configuration are applied
https://github.com/spring-cloud/spring-cloud-deployer/pull/381 (Backport) Respect initContainer from global properties
https://github.com/spring-cloud/spring-cloud-deployer/pull/386 (Backport) Add pod-level 'terminationGracePeriodSeconds'

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.10.3` · 2023-05-05 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.10.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
