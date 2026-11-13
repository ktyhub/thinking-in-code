---
title: "spring-cloud-dataflow v2.10.0-M2"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.10.0-M2"
published: "2022-09-20"
type: "pre"
lang: "en"
summary: "Updates to the following versions:"
---

# spring-cloud-dataflow v2.10.0-M2

# Notable changes

## Spring updates
Updates to the following versions:
- Spring Boot `2.7.3`
- Spring Framework `5.3.22`
- Spring Cloud `2021.0.3`

## Spring Shell
Spring Shell has been updated to [2.1.0-M5](https://github.com/spring-projects/spring-shell/releases/tag/v2.1.0-M5).

## Add back mysql Support
In `M1` we removed support for `mysql`. This milestone restores support for MySQL `5.7+` using the MariaDB JDBC driver. See the [reference docs](https://docs.spring.io/spring-cloud-dataflow/docs/2.10.0-M2/reference/htmlsingle/#configuration-local-rdbms) for more details.

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Dataflow Build|2.10.0-M2
Spring Cloud Dataflow Common|2.10.0-M2
Spring Cloud Deployer|2.8.0-M2
Spring Cloud Deployer Local|2.8.0-M2
Spring Cloud Deployer CF|2.8.0-M2
Spring Cloud Deployer K8S|2.8.0-M2
Spring Cloud Common Security Config|1.8.0-M2
Spring Cloud Skipper|2.9.0-M2
Spring Cloud Dataflow UI|3.3.0-M2
Spring Cloud Dataflow|2.10.0-M2

# Issues

spring-cloud/spring-cloud-dataflow-build#78 Update spring-shell 2.1.0-M5
spring-cloud/spring-cloud-dataflow-build#77 Manage db2 jdbc driver
spring-cloud/spring-cloud-dataflow-build#75 Update Boot 2.7.0
spring-cloud/spring-cloud-dataflow-build#73 Update boot 2.7.0-RC1
spring-cloud/spring-cloud-dataflow-build#68 Update Boot 2.6.6
spring-cloud/spring-cloud-dataflow-common#20 Add custom MySQL database type
spring-cloud/spring-cloud-dataflow-common#18 Spring Boot 2.7.0-RC1 / Flyway 8.5.9 broke MariaDB/MySQL on SCDF
spring-cloud/spring-cloud-deployer#356 Manage commons-io dependency
spring-cloud/spring-cloud-deployer#355 Update maven-wagon 3.5.2
spring-cloud/spring-cloud-deployer-kubernetes#491 NPE in instance status
spring-cloud/spring-cloud-common-security-config#93 Remove deprecated spring-security-oauth2
spring-cloud/spring-cloud-skipper#1057 Use SafeConstructor with SnakeYaml (PORT from 2.8.x)
spring-cloud/spring-cloud-skipper#1049 Package db2 jdbc driver
spring-cloud/spring-cloud-skipper#1047 Update boot 2.7.0-RC1
spring-cloud/spring-cloud-skipper#1044 Update pack 0.24.1
spring-cloud/spring-cloud-skipper#1042 Remove deprecated spring-security-oauth2.
spring-cloud/spring-cloud-skipper#1036 Skipper fails with oauth config
spring-cloud/spring-cloud-skipper#1034 Tests fail under Windows
spring-cloud/spring-cloud-dataflow-ui#1838 Enable e2e tests on CI pipeline
spring-cloud/spring-cloud-dataflow-ui#1826 Add status on task execution
spring-cloud/spring-cloud-dataflow-ui#1815 Not showing JOB details (batch Jobs, Job execution id) in Latest task execution
spring-cloud/spring-cloud-dataflow-ui#1798 Color status on import streams/tasks
spring-cloud/spring-cloud-dataflow-ui#1730 Can&#39;t remove a task app property
spring-cloud/spring-cloud-dataflow#5080 Ensure ATs are covering the proper databases/drivers
spring-cloud/spring-cloud-dataflow#5079 Update ref docs on supported DB and drivers
spring-cloud/spring-cloud-dataflow#5062 CVE-2022-31197 in pgjdbc transitive dependency (requires manual dependency override)
spring-cloud/spring-cloud-dataflow#5060 cannot set container name as task name when task launch/execution
spring-cloud/spring-cloud-dataflow#5057 Remove db2 and oracle drivers
spring-cloud/spring-cloud-dataflow#5056 Update to Boot 2.7.3
spring-cloud/spring-cloud-dataflow#5054 Upgrade mariadb driver to the 3.0.x series
spring-cloud/spring-cloud-dataflow#5052 Update Spring Boot 2.7.3 + Spring Cloud 2021.0.3
spring-cloud/spring-cloud-dataflow#5050 Use SafeConstructor with SnakeYaml (PORT from 2.9.x)
spring-cloud/spring-cloud-dataflow#5026 Increase Security with CSP Settings
spring-cloud/spring-cloud-dataflow#4926 Package db2 jdbc driver
spring-cloud/spring-cloud-dataflow#4918 Update Boot 2.7.0
spring-cloud/spring-cloud-dataflow#4915 Please don&#39;t update ubuntu packages within the docker-compose
spring-cloud/spring-cloud-dataflow#4914 Move DataFlowIT to spring-cloud-dataflow-acceptance-tests.
spring-cloud/spring-cloud-dataflow#4909 Shell fails with app info
spring-cloud/spring-cloud-dataflow#4908 Security issues in transitive dependency of jackson-databind-2.11.4 (SPRING-CLOUD-DATAFLOW 2.9.4)
spring-cloud/spring-cloud-dataflow#4907 security issues in transitive dependency of posgresql 42.2.25 (SPRING-CLOUD-DATAFLOW 2.9.4)
spring-cloud/spring-cloud-dataflow#4904 Update boot 2.7.0-RC1
spring-cloud/spring-cloud-dataflow#4888 Update pack 0.24.1
spring-cloud/spring-cloud-dataflow#4887 Add support for MySQL 8 in OSS
spring-cloud/spring-cloud-dataflow#4879 Add Back support for mysql 5.7
spring-cloud/spring-cloud-dataflow#4875 Remove deprecated spring-security-oauth2
spring-cloud/spring-cloud-dataflow#4869 Reference guide on launching a task from a stream is out of date.
spring-cloud/spring-cloud-dataflow#4863 Update reference guides to include new team members
spring-cloud/spring-cloud-dataflow#4861 NullPointer throw when authenticate via Bearer Token to active endpoint i.e. register application
spring-cloud/spring-cloud-dataflow#4854 Proposal for documenting client-server compatibility on documentation
spring-cloud/spring-cloud-dataflow#4795 Update spring-shell 2.1.x
spring-cloud/spring-cloud-dataflow#4744 Experiment with App SSO (for K8s) + Spring Authorization Server
spring-cloud/spring-cloud-dataflow#4682 Allow RestTemplate configure with DataFlowClientAutoConfiguration
spring-cloud/spring-cloud-dataflow#4603 Retest Azure AD configuration

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.10.0-M2` · 2022-09-20 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.10.0-M2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
