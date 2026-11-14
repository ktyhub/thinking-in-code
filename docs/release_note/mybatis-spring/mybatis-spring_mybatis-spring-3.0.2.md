---
title: "mybatis-spring mybatis-spring-3.0.2"
project: "mybatis-spring"
repo: "mybatis/spring"
tag: "mybatis-spring-3.0.2"
published: "2023-05-19"
type: "release"
lang: "en"
summary: "Bean definition overridden when spring.aot.enabled=true in spring boot 3.0 #780 (@wylswz)"
---

# mybatis-spring mybatis-spring-3.0.2

Here is the [complete list of changes](https://github.com/mybatis/spring/milestone/23?closed=1).

## 🐛  Bug Fixes

* Bean definition overridden when `spring.aot.enabled=true` in spring boot 3.0 #780 (@wylswz)

## :zap:  Enhancements

* Support appendable method on `SqlSessionFactoryBean` #816 (@uxfix)
* Change the event type that listen to in `SqlSessionFactoryBean` to `ContextRefreshedEvent` #797 (@SkyAndCode)

## :recycle: Polishing

* Use the `TransactionSynchronization` instead of `TransactionSynchronizationAdapter` #819

## :arrow_up: Dependencies Updates

* Update dependency org.mybatis:mybatis to v3.5.13 #790  
* Update spring core to v6.0.9 #807  
* Update spring batch to v5.0.2 #822

---

> **Source** [mybatis/spring](https://github.com/mybatis/spring) · `mybatis-spring-3.0.2` · 2023-05-19 · [upstream release](https://github.com/mybatis/spring/releases/tag/mybatis-spring-3.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
