---
title: "spring-cloud-alibaba 2023.0.1.2"
project: "spring-cloud-alibaba"
repo: "alibaba/spring-cloud-alibaba"
tag: "2023.0.1.2"
published: "2024-07-16"
type: "patch"
lang: "en"
summary: "spring.cloud.nacos.config.share-configs & spring.cloud.nacos.config.extension-configs has been depareate, using spring.config.import instead,see https://github.com/alibaba/spring-cloud-alibaba/issues/3998"
---

# spring-cloud-alibaba 2023.0.1.2

## New Features
* [Scheduling]: add distributed scheduling support `spring-cloud-starter-alibaba-schedulerx`. by @yaohuitc in https://github.com/alibaba/spring-cloud-alibaba/pull/3732

## Bugfixes
* [Nacos]: Nacos snapshot config npe by @ruansheng8 in https://github.com/alibaba/spring-cloud-alibaba/pull/3700
* [Nacos]: Fix nacos clusterName and extended properties by @chickenlj in https://github.com/alibaba/spring-cloud-alibaba/pull/3771
* [Nacos]: Separate nacos ConfigService initialization from normal properties bean. by @chickenlj in https://github.com/alibaba/spring-cloud-alibaba/pull/3784
* [Seata]: fallback Method throw exception but seata does not rollback by @xjs1919 in https://github.com/alibaba/spring-cloud-alibaba/pull/3786
* [Seata]: Optimize seata feign interceptor xid by @ruansheng8 in https://github.com/alibaba/spring-cloud-alibaba/pull/3744
* [Sentinel]: fix sentinel applicaiton not reigtry sentinel console bug by @yuluo-yx in https://github.com/alibaba/spring-cloud-alibaba/pull/3708
* [AI]: Set the api-key by means of an environment variable. by @yuluo-yx in https://github.com/alibaba/spring-cloud-alibaba/pull/3714
* [AI]: add spring config metadata by @loong024 in https://github.com/alibaba/spring-cloud-alibaba/pull/3735
* [AI]: add tongyi embedding adapt by @why-ohh in https://github.com/alibaba/spring-cloud-alibaba/pull/3740
* [AI]: fix tongyi ai embedding ci by @yuluo-yx in https://github.com/alibaba/spring-cloud-alibaba/pull/3741
* [AI]: fix llm client thread safety by @yuluo-yx in https://github.com/alibaba/spring-cloud-alibaba/pull/3731
* [AI]: Adapt TongYi LLM speech transcription by Spring AI API by @n3A87 in https://github.com/alibaba/spring-cloud-alibaba/pull/3733
* [AI]: Add TongYiChatOptions repetitionPenalty parameter build by @zhangqian9158 in https://github.com/alibaba/spring-cloud-alibaba/pull/3755
* [AI]: Add SCA ModelParams to dashscope by @zhangqian9158 in https://github.com/alibaba/spring-cloud-alibaba/pull/3789

## Dependencies
* [AI]: update dashscope version to 2.14.0 by @yuluo-yx in https://github.com/alibaba/spring-cloud-alibaba/pull/3715
* [AI]: upgrade spring ai version to 1.0.0-M1  by @zhangqian9158 in https://github.com/alibaba/spring-cloud-alibaba/pull/3772
* [Sentinel]: 2023 update sentinel by @robberphex in https://github.com/alibaba/spring-cloud-alibaba/pull/3777

## New Contributors
* @libsilverwolf made their first contribution in https://github.com/alibaba/spring-cloud-alibaba/pull/3710
* @loong024 made their first contribution in https://github.com/alibaba/spring-cloud-alibaba/pull/3735
* @n3A87 made their first contribution in https://github.com/alibaba/spring-cloud-alibaba/pull/3733
* @dongfeng3692 made their first contribution in https://github.com/alibaba/spring-cloud-alibaba/pull/3788
* @xjs1919 made their first contribution in https://github.com/alibaba/spring-cloud-alibaba/pull/3786

## Breaking Change
spring.cloud.nacos.config.share-configs & spring.cloud.nacos.config.extension-configs has been depareate, using spring.config.import instead,see https://github.com/alibaba/spring-cloud-alibaba/issues/3998

**Full Changelog**: https://github.com/alibaba/spring-cloud-alibaba/compare/2023.0.1.0...2023.0.1.2

---

> **Source** [alibaba/spring-cloud-alibaba](https://github.com/alibaba/spring-cloud-alibaba) · `2023.0.1.2` · 2024-07-16 · [upstream release](https://github.com/alibaba/spring-cloud-alibaba/releases/tag/2023.0.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
