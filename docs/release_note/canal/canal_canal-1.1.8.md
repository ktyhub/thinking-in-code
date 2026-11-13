---
title: "canal canal-1.1.8"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.8"
published: "2025-01-16"
type: "release"
lang: "en"
---

# canal canal-1.1.8

# 功能新增
* 适配MySQL 8.4、Mariadb 11、Percona 8.0、PolarDB-X 2.0的版本 #4940 #5231 #5012
* 新增clickhouse的adapter #4957
* 深度适配PolarDB-X集中分布式一体化版的binlog解析，复用polardbx-parse的SQL解析工具包 #5097
* 新增helm chart支持，[使用说明](https://github.com/alibaba/canal/blob/master/charts/README.md)

# 重要优化
* canal默认admin.passwd风险说明 #4941
* spring读取远程配置文件触发RCE漏洞 #5154
* 支持SSL/TLS协议链接源端MySQL库 #5147
* 支持caching_sha2_password密码策略 #5301
* 支持rabbitmq SSL协议认证 #4965 
* 支持es8证书认证 #5106
* 支持pulsar更多参数属性 #5191

# 小需求&bugfix
* 修复docker启动，避免无用的高权限 #5337
* 兼容MariaDB GTID 为空的情况 #5352
* 优化集群模式的client的内存溢出风险 #5290
* 修复集群模式的mq消费，避免zk出现session time out时出现多消费者 #5270
* 修复client adapter同个instance配置多个group会共享CanalMsgConsumer，导致出现并发问题 #5175
* 修复spring读取远程配置文件触发RCE漏洞 #5154
* 修复部分json格式解析失败问题 #5130 #5018
* 修复TableMetaTSDB遇到的DDL关键字解析失败 #4899

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.8` · 2025-01-16 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
