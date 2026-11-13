---
title: "spring-cloud-alibaba 2025.1.0.0"
project: "spring-cloud-alibaba"
repo: "alibaba/spring-cloud-alibaba"
tag: "2025.1.0.0"
published: "2026-02-06"
type: "minor"
lang: "en"
---

# spring-cloud-alibaba 2025.1.0.0

# 2025.1.0.0

## New Features

* \[Core\]: Support Spring Boot 4.x and Spring Cloud 2025.1.x by @xuxiaowei-com-cn in #4068
* \[Nacos\]: Remove bootstrap config support, use `spring.config.import` instead by @yuhuangbin in #4167 and @chiangzeon in #4156
* \[Nacos\]: Mask sensitive fields in logs to avoid credential leakage by @zshs000 in #4244
* \[RocketMQ\]: RocketMQ module support Spring Boot 4.0 by @LearningGp in #4216
* \[Sentinel\]: Sentinel module support Jackson 3.x by @uuuyuqi in #4213
* \[Seata\]: Support WebFlux for Seata by @ChangJinWei in #4090


## Bugfixes

* \[Nacos\]: Fix NacosConfigDataLocationResolver registerConfigManager method by @xuxiaowei-com-cn in #4164
* \[Nacos\]: Fix the service status change of `ServiceRegistryEndpoint` by @yuhuangbin in #4219
* \[Seata\]: Workaround for Seata autoconfiguration class failure by @uuuyuqi in #4245

## Dependencies

* \[Spring Boot\]: Bump to 4.0.0 (from 3.5.0)
* \[Spring Cloud\]: Bump to 2025.1.0 (from 2025.0.0)
* \[Spring Cloud Dependencies Parent\]: Bump to 5.0.0 (from 4.3.0)
* \[Nacos\]: Update nacos-client to 3.1.1 (from 3.0.3) by @xuxiaowei-com-cn in #4193 and @yuhuangbin in #4204
* \[SchedulerX\]: Bump `schedulerx.worker` to 1.13.3 (from 1.13.1) by @yaohuitc in #4220


## Maintenance

* \[CI\]: Add actions to release GitHub package by @xuxiaowei-com-cn in #4188
* \[CI\]: Skip GitHub Package Maven for release versions by @xuxiaowei-com-cn in #4249
* \[CI\]: Fix readme and CI workflow branch name by @uuuyuqi in #4089

## Contributors


* @xuxiaowei-com-cn
* @chiangzeon
* @yuhuangbin
* @zshs000
* @ChangJinWei
* @yaohuitc
* @LearningGp
* @uuuyuqi

---

> **Source** [alibaba/spring-cloud-alibaba](https://github.com/alibaba/spring-cloud-alibaba) · `2025.1.0.0` · 2026-02-06 · [upstream release](https://github.com/alibaba/spring-cloud-alibaba/releases/tag/2025.1.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
