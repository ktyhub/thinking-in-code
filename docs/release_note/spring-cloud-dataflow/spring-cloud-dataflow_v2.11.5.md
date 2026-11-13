---
title: "spring-cloud-dataflow v2.11.5"
project: "spring-cloud-dataflow"
repo: "spring-cloud/spring-cloud-dataflow"
tag: "v2.11.5"
published: "2024-09-19"
type: "patch"
lang: "en"
summary: "Component | Version"
---

# spring-cloud-dataflow v2.11.5

# Dependent Projects and Compatibility
Component | Version
--- | ---
Spring Cloud Deployer|2.9.5
Spring Cloud Skipper|2.11.5
Spring Cloud Dataflow UI|3.4.6
Spring Cloud Dataflow|2.11.5

# Issues

* spring-cloud/spring-cloud-deployer#465 Allow setting up more than one initContainer per platform
* spring-cloud/spring-cloud-deployer#462 Node Selector doesn&#39;t get applied on K8s platforms
* spring-cloud/spring-cloud-dataflow#5909 User should be able to set app version when creating schedule.
* spring-cloud/spring-cloud-dataflow#5854 Task table prefix is not resolved correctly in CTR

## :hammer: Dependency Upgrades
- Spring Framework to 5.3.39
- Reactor to 2020.0.47
- Netty to 4.1.113.Final
- Tomcat to 9.0.93
- Snappy Java 1.1.10.6


## What's Changed in Spring Cloud Dataflow and Skipper from v2.11.4 to v2.11.5

#5931  Update various dependencies patch versions                                 @onobc                        
#5905  [CI] Remove actions that don't add value.                                  @corneil                             
#5904  Update to 2.11.5-SNAPSHOT                                                  @corneil                           
#5887  Handle case where docker-compose executable is absent.                     @corneil
#5866  Update documentation for initContainers addition in spring-cloud-deployer  @corneil                   
#5857  CTR needs to support boot property styles for the tablePrefix property     @cppwfs                                         
#5852  Port download-apps.sh to macOs                                             @cachescrubber                   
#5817  Added verification of tasks/thinexecutions in DataflowOAuthIT.             @corneil   

**Full Changelog**: https://github.com/spring-cloud/spring-cloud-dataflow/compare/v2.11.4...v2.11.5

---

> **Source** [spring-cloud/spring-cloud-dataflow](https://github.com/spring-cloud/spring-cloud-dataflow) · `v2.11.5` · 2024-09-19 · [upstream release](https://github.com/spring-attic/spring-cloud-dataflow/releases/tag/v2.11.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
