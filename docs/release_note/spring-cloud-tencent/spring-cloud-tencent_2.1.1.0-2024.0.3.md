---
title: "spring-cloud-tencent 2.1.1.0-2024.0.3"
project: "spring-cloud-tencent"
repo: "Tencent/spring-cloud-tencent"
tag: "2.1.1.0-2024.0.3"
published: "2026-02-13"
type: "patch"
lang: "en"
summary: "Spring Cloud Tencent: 2.1.1.0-2024.0.3 · Spring Cloud: 2024.0.3 · Spring Boot: 3.4.12 · Spring Framework: 6.2.15"
---

# spring-cloud-tencent 2.1.1.0-2024.0.3

### **Dependency Version**

- Spring Cloud Tencent: 2.1.1.0-2024.0.3
- Spring Cloud: 2024.0.3
- Spring Boot: 3.4.12
- Spring Framework: 6.2.15

### **Full Changelog**

https://github.com/Tencent/spring-cloud-tencent/compare/2.1.0.3-2024.0.2...2.1.1.0-2024.0.3

### **Features / Enhancements**

- Config
  - refactor:optimize config locate. #1741

- Context
  - refactor:optimize auto configuration. #1739

- Discovery
  - feat: add new key for java agent nacos discovery. #1766

- Metadata
  - feat:support async metadata transfer. #1743
  - feat: support TagUtils, ContextToHeaderInterceptor in TSF(2024). #1754
  - refactor:optimize metadata context operation. #1773

- Plugins
  - feat: support kafka lane. #1792
  - feat: server span support preferIpv6 in tsf. #1790

- Router
  - refactor: optimize performance. #1782
  - feat: support traffic warmup lane router #1785
  - fix: fix lane router property name. #1789

### **Fixes**
  - fix:Replace with String inside @ConditionalOnClass to fix #1749. #1750
  - fix: send unit header in tsf gw. #1758
  - fix: beautify ServicesEagerLoadSmartLifecycle logging. #1774
  - fix: fix parsing ConfigurationProperties value with RefreshScope. #1780
  - fix: fix NacosDiscoveryRegistryAutoConfiguration and PolarisAuthAutoConfiguration still initiation when polaris disabled. #1783
  - fix:fix cb rule no update bug. #1786
  - fix: fix NPE when application context is null #1787

### **Dependencies**
  - feat: upgrade springdoc to 2.8.13 #1738
  - deps:upgrade to spring boot 3.4.12. #1756

### **Contributors**

Thanks to the contributors who participated in this release!

@fuyuwei01 
@SkyeBeFreeman 
@shedfreewu 
@KIRA-Zee 

### **How to upgrade**
This version is compatible version from the previous corresponding version, so just upgrade spring-cloud-tencent-dependencies version to it. If you need to change the Spring Cloud version, please refer to the documentation [Release Note](https://github.com/Tencent/spring-cloud-tencent/wiki/Spring-Cloud-Tencent-%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97) to modify other related dependent versions synchronously.

---

> **Source** [Tencent/spring-cloud-tencent](https://github.com/Tencent/spring-cloud-tencent) · `2.1.1.0-2024.0.3` · 2026-02-13 · [upstream release](https://github.com/Tencent/spring-cloud-tencent/releases/tag/2.1.1.0-2024.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
