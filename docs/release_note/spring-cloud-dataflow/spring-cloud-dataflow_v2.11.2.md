---
title: "spring-cloud-dataflow v2.11.2"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.11.2"
published: "2024-01-11"
type: "patch"
lang: "en"
summary: "spring-cloud/spring-cloud-dataflow#5593 Update logback to handle CVE-2023-6378 spring-cloud/spring-cloud-deployer#407 CF Deployer needs to use LogCacheClient to retrieve logs spring-cloud/spring-cloud-dataflow-ui#1974…"
---

# spring-cloud-dataflow v2.11.2

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow Build|`2.11.2`
Spring Cloud Dataflow Common|`2.11.2`
Spring Cloud Deployer|`2.9.2`
Spring Cloud Deployer Local|`2.9.2`
Spring Cloud Deployer CF|`2.9.2`
Spring Cloud Deployer K8S|`2.9.2`
Spring Cloud Common Security Config|`2.11.2`
Spring Cloud Skipper|`2.11.2`
Spring Cloud Dataflow UI|`3.4.2`
Spring Cloud Dataflow|`2.11.2`

# Issues
spring-cloud/spring-cloud-dataflow#5593 Update logback to handle CVE-2023-6378
spring-cloud/spring-cloud-deployer#407 CF Deployer needs to use LogCacheClient to retrieve logs
spring-cloud/spring-cloud-dataflow-ui#1974 Creating Schedule of Task prevents version property
spring-cloud/spring-cloud-dataflow-ui#1944 Task Execution Log doesn&#39;t scroll horizontally
spring-cloud/spring-cloud-dataflow#5615 Unable to sort tasks by Schema Target
spring-cloud/spring-cloud-dataflow#5611 Update to Spring Cloud 2021.0.9
spring-cloud/spring-cloud-dataflow#5609 Remove of JOB_CONFIGURATION_LOCATION broke some queries
spring-cloud/spring-cloud-dataflow#5591 The BOOT3 batch schema has old columns in table
spring-cloud/spring-cloud-dataflow#5576 Mariadb Schema needs to change BOOT3 Sequence tabels to sequences.
spring-cloud/spring-cloud-dataflow#5568 Schedule Task with Arguments and Properties does not work
spring-cloud/spring-cloud-dataflow#5564 Check dependencies for Spring Boot 2.7.18
spring-cloud/spring-cloud-dataflow#5561 Update Spring Boot 2.7.18
spring-cloud/spring-cloud-dataflow#5522 Update to Spring Boot 2.7.17
spring-cloud/spring-cloud-dataflow#5557 Step Context section is not populated on the UI
spring-cloud/spring-cloud-dataflow#5555 BOOT3_BATCH_JOB_EXECUTION should not contain JOB_CONFIGURATION_LOCATION
spring-cloud/spring-cloud-dataflow#5551 Batch Remote Parititioning does not pass Boot3 info to partitions
spring-cloud/spring-cloud-dataflow#5549 getJobExecutionsWithStepCountFilteredByTaskExecutionId in JdbcSearchableJobExecutionDao does not support task prefixes
spring-cloud/spring-cloud-dataflow#5548 Unable to configure Harbor as container registry
spring-cloud/spring-cloud-dataflow#5539 As a developer I need to run Oracle locally on my Mac ARM64
spring-cloud/spring-cloud-dataflow#5534 Task re-launch fails when using BOOT3 and Oracle
spring-cloud/spring-cloud-dataflow#5533 Add Boot3 Support for SimpleJobService
spring-cloud/spring-cloud-dataflow#5531 Unable to navigate through the job execution pages
spring-cloud/spring-cloud-dataflow#5524 Controller /jobs/thinexecutions is very slow with a large amount of job executions and no navigation possible oracle db
spring-cloud/spring-cloud-dataflow#5520 Stopping a batch with Spring Boot 3/Spring Batch 5 doesn&#39;t work properly.
spring-cloud/spring-cloud-dataflow#5518 Relaunch of a Spring Boot 3/Spring Batch 5 batch doesn&#39;t work properly.
spring-cloud/spring-cloud-dataflow#5507 Add commit info to the about controller
spring-cloud/spring-cloud-dataflow#5496 spring.cloud.dataflow.task.platform.kubernetes.accounts.[platformid].initContainer no longer injects the initContainer
spring-cloud/spring-cloud-dataflow#5484 Inconsistent data when consulting jobs/instances
spring-cloud/spring-cloud-dataflow#5464 Add documentation for launching multiple versions of a task. 
spring-cloud/spring-cloud-dataflow#5408 Error during &#34;Clean up all task/job executions&#34;


# Update
[Kubernetes Deployment scripts](https://github.com/spring-cloud/spring-cloud-dataflow/releases/download/v2.11.2/spring-cloud-dataflow-oss-install-2.11.2-rp1.zip)  updated.

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.11.2` · 2024-01-11 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.11.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
