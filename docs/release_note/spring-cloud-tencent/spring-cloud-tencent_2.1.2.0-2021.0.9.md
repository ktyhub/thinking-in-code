---
title: "spring-cloud-tencent 2.1.2.0-2021.0.9"
project: "spring-cloud-tencent"
repo: "Tencent/spring-cloud-tencent"
tag: "2.1.2.0-2021.0.9"
published: "2026-07-27"
type: "patch"
lang: "en"
summary: "Spring Cloud Tencent: 2.1.2.0-2021.0.9 · Spring Cloud: 2021.0.9 · Spring Boot: 2.7.18 · Spring Framework: 5.3.39"
---

# spring-cloud-tencent 2.1.2.0-2021.0.9

### **Dependency Version**

- Spring Cloud Tencent: 2.1.2.0-2021.0.9
- Spring Cloud: 2021.0.9
- Spring Boot: 2.7.18
- Spring Framework: 5.3.39

### **Full Changelog**

https://github.com/Tencent/spring-cloud-tencent/compare/2.1.1.0-2021.0.9...2.1.2.0-2021.0.9

### **Features / Enhancements**

- Config
  - feat: Add config address to report client url conversion. #1795
  - feat: Update config server IP to 127.0.0.1 and adjust tests #1796
  - feat: Support Polaris config env value and add related tests #1797

- Context
  - refactor: modify the initialization of ApplicationContextAwareUtils. #1778 
  - feat: support enable/disable cloud location provider via configuration. #1799

- Discovery
  - feat: refactor Feign eager load, add LoadBalancer warm-up, and fix gateway trailing slash compatibility #1800

- RateLimit
  - feat: support overrideHost configuration for ratelimit, event reporter and stat modules #1804

### **Fixes**
  - test: add unit tests for ConfigurationModifier and fix TsfConsul report logic #1802
  - fix: prepend context-path to contract reporter API paths #1803
  - fix: split contract base-package for springdoc scan #1807

### **Contributors**

Thanks to the contributors who participated in this release!

@SkyeBeFreeman 
@shedfreewu 

### **How to upgrade**
This version is compatible version from the previous corresponding version, so just upgrade spring-cloud-tencent-dependencies version to it. If you need to change the Spring Cloud version, please refer to the documentation [Release Note](https://github.com/Tencent/spring-cloud-tencent/wiki/Spring-Cloud-Tencent-%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97) to modify other related dependent versions synchronously.

---

> **Source** [Tencent/spring-cloud-tencent](https://github.com/Tencent/spring-cloud-tencent) · `2.1.2.0-2021.0.9` · 2026-07-27 · [upstream release](https://github.com/Tencent/spring-cloud-tencent/releases/tag/2.1.2.0-2021.0.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
