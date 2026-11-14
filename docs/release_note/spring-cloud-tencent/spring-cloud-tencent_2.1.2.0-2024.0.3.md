---
title: "spring-cloud-tencent 2.1.2.0-2024.0.3"
project: "spring-cloud-tencent"
repo: "Tencent/spring-cloud-tencent"
tag: "2.1.2.0-2024.0.3"
published: "2026-07-27"
type: "patch"
lang: "en"
summary: "Spring Cloud Tencent: 2.1.2.0-2024.0.3 · Spring Cloud: 2024.0.3 · Spring Boot: 3.4.12 · Spring Framework: 6.2.15"
---

# spring-cloud-tencent 2.1.2.0-2024.0.3

### **Dependency Version**

- Spring Cloud Tencent: 2.1.2.0-2024.0.3
- Spring Cloud: 2024.0.3
- Spring Boot: 3.4.12
- Spring Framework: 6.2.15

### **Full Changelog**

https://github.com/Tencent/spring-cloud-tencent/compare/2.1.1.0-2024.0.3...2.1.2.0-2024.0.3

### **Features / Enhancements**

- CircuitBreaker
  - feat: support using seperated cb in wildcard-api level and add cb counters expire interval config #1809

- Config
  - feat: Add config address to report client url conversion. #1795
  - feat: Update config server IP to 127.0.0.1 and adjust tests #1796
  - feat: Support Polaris config env value and add related tests #1797

- Context
  - refactor: modify the initialization of ApplicationContextAwareUtils. #1798
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

> **Source** [Tencent/spring-cloud-tencent](https://github.com/Tencent/spring-cloud-tencent) · `2.1.2.0-2024.0.3` · 2026-07-27 · [upstream release](https://github.com/Tencent/spring-cloud-tencent/releases/tag/2.1.2.0-2024.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
