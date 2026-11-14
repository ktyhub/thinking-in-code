---
title: "spring-cloud-dataflow v2.10.0"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.10.0"
published: "2022-12-12"
type: "minor"
lang: "en"
summary: "Updates to the following versions"
---

# spring-cloud-dataflow v2.10.0

# Notable changes

## Spring updates
Updates to the following versions:
- Spring Boot `2.7.6`
- Spring Framework `5.3.24`
- Spring Cloud `2021.0.5`

## Spring Shell
Spring Shell has been updated to [2.1.4](https://github.com/spring-projects/spring-shell/releases/tag/v2.1.4).

## Documentation Updates
### Container images for ARM.
Spring Cloud Data Flow and Skipper, and Stream Application projects contain scripts to use in creating containers when running on an ARM platform. The [Reference Guide](https://docs.spring.io/spring-cloud-dataflow/docs/current/reference/htmlsingle/#create-containers) has a section describing the use of the scripts.

### Scripts for local Kuberenetes Development
We have added a collection of scripts to the Spring Cloud Data Flow that makes it easy to launch a local Kuberenetes cluster and install SCDF with MariaDB and RabbitMQ or Kafka. See the [Reference Guide](https://docs.spring.io/spring-cloud-dataflow/docs/current/reference/htmlsingle/#local-k8s-development) for more info.

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow Build|2.10.0
Spring Cloud Dataflow Common|2.10.0
Spring Cloud Deployer|2.8.0
Spring Cloud Deployer Local|2.8.0
Spring Cloud Deployer CF|2.8.0
Spring Cloud Deployer K8S|2.8.0
Spring Cloud Common Security Config|1.8.0
Spring Cloud Skipper|2.9.0
Spring Cloud Dataflow UI|3.3.0
Spring Cloud Dataflow|2.10.0

# Issues

spring-cloud/spring-cloud-dataflow-build#93 Update spring-shell 2.1.4
spring-cloud/spring-cloud-deployer-kubernetes#503 Improve documentation on kuberenetes deployment properites
spring-cloud/spring-cloud-deployer-kubernetes#494 Support for concurrency policy of a Job Schedule
spring-cloud/spring-cloud-skipper#1068 Ensure reference doc is up-to-date and valid 
spring-cloud/spring-cloud-dataflow#5161 Shell fails with stream deploy using properties
spring-cloud/spring-cloud-dataflow#5151 Review outstanding issues for dataflow.spring.io
spring-cloud/spring-cloud-dataflow#5113 Obtain OSM license for SCDF PRO 
spring-cloud/spring-cloud-dataflow#5108 Support for TAS 3.0
spring-cloud/spring-cloud-dataflow#5083 Communicate best practice for extending the classpath of Dataflow/Skipper
spring-cloud/spring-cloud-dataflow#4946 Revisit shell changes
spring-cloud/spring-cloud-dataflow#4944 Arm64 docker images for Apple M1 usage
spring-cloud/spring-cloud-dataflow#4830 spring cloud dataflow launch task on other the kubernetes cluster
spring-cloud/spring-cloud-dataflow#4807 Ensure reference doc is up-to-date and valid
spring-cloud/spring-cloud-dataflow#4792 Update K8s compatibility in test-plan and docs
spring-cloud/spring-cloud-dataflow#4780 Add to docker-compose install docs info on env-vars and ssl. 
spring-cloud/spring-cloud-dataflow#4779 Issue with MariaDB when using skipper-deployment.yaml

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.10.0` · 2022-12-12 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
