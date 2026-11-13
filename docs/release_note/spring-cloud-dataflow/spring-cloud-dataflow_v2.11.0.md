---
title: "spring-cloud-dataflow v2.11.0"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.11.0"
published: "2023-09-21"
type: "minor"
lang: "en"
summary: "More info can be found in the Boot 3 Appendix."
---

# spring-cloud-dataflow v2.11.0

# Noteworthy

## Spring Boot 3 Applications
- Adds support for Spring Boot 3.x based stream applications.
- Adds support for Spring Cloud Task 3.x based task applications.
- Adds support for Spring Batch 5.x based batch applications.

More info can be found in the [Boot 3 Appendix](https://docs.spring.io/spring-cloud-dataflow/docs/2.11.0/reference/htmlsingle/#appendix-boot3).

## Library Updates
- Spring Boot 2.7.15
- Spring Cloud 2021.0.8

## Kubernetes Update
- The long-awaited update of Kubernetes cronjobs from batch/v1beta -> batch/v1 which allows users to run Kubernetes >= 1.25.0. 

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow Build|`2.11.0`
Spring Cloud Dataflow Common|`2.11.0`
Spring Cloud Deployer|`2.9.0`
Spring Cloud Deployer Local|`2.9.0`
Spring Cloud Deployer CF|`2.9.0`
Spring Cloud Deployer K8S|`2.9.0`
Spring Cloud Common Security Config|`2.11.0`
Spring Cloud Skipper|`2.11.0`
Spring Cloud Dataflow UI|`3.4.0`
Spring Cloud Dataflow|`2.11.0`


# Issues

spring-cloud/spring-cloud-deployer#399 Duplicate Kubernetes pod ids when tasks are launched at the same time
spring-cloud/spring-cloud-dataflow-ui#1947 App registration details panel not updating when switch between boot versions
spring-cloud/spring-cloud-dataflow-ui#1946 Spring Boot 3 / Batch 5: Job execution is empty although shown in DB
spring-cloud/spring-cloud-dataflow#5467 Default version is always used to pick the table prefixes
spring-cloud/spring-cloud-dataflow#5459 The task configured as boot2 application cannot be executed in `SCDF 2.11.0 RC1`.
spring-cloud/spring-cloud-dataflow#5456 Error Value too long for column &#34;AUDIT_DATA CHARACTER VARYING(4000)
spring-cloud/spring-cloud-dataflow#5452 Sensitive data still displayed in audit dashboard
spring-cloud/spring-cloud-dataflow#5450 As a user I can easily tell that this repo is no longer active and now lives in the mono repo.
spring-cloud/spring-cloud-dataflow#5446 Add tests to the spring-cloud-dataflow-aggregate-task module
spring-cloud/spring-cloud-dataflow#5443 [Docs] Missing task 3.x coordinates in ref guide
spring-cloud/spring-cloud-dataflow#5442 Add num days option to task cleanup
spring-cloud/spring-cloud-dataflow#5441 SCDF 2.11.0-RC1 composed task runner documentation
spring-cloud/spring-cloud-dataflow#5439 LOB-Elements broken after migration with PostgreSQLTextToOID

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.11.0` · 2023-09-21 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
