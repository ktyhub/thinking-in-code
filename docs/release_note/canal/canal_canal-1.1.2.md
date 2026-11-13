---
title: "canal canal-1.1.2"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.2"
published: "2018-11-26"
type: "release"
lang: "en"
---

# canal canal-1.1.2

## 功能新增
1. 支持mysql8.0的binlog解析 【[BinlogChange(MySQL8)](https://github.com/alibaba/canal/wiki/BinlogChange%28MySQL8%29)】
2. canal提供内置的客户端能力【[ClientAdapter](https://github.com/alibaba/canal/wiki/ClientAdapter)】
	* 同步到HBase [wiki](https://github.com/alibaba/canal/wiki/Sync-HBase)
	* 同步到Rdb(支持mysql/pg/oracle/sqlserver) [wiki](https://github.com/alibaba/canal/wiki/Sync-RDB)
	* 同步到ES [wiki](https://github.com/alibaba/canal/wiki/Sync-ES)
	* 目前adapter为支持更多常见的目标存储，会处于快速迭代中，不同版本之间会有接口调整，请及时关注文档
3. RocketMQ消息支持直接投递至aliyun ons(RocketMQ云服务) #1169

## 功能重构
1. MQ消息发送的配置相关从mq.yml调整至canal.properties，支持了auto scan的能力，请关注最新的配置文档 [wiki](https://github.com/alibaba/canal/wiki/Canal-Kafka-RocketMQ-QuickStart)

## 小需求&bugfix

1. 修复mysql binlog文件名解析乱码问题 #1189
2. 修复修复TableMeta TSDB在每天定时snapshot因filter变化导致失败 #1168
3. 修复canal docker支持MQ模式启动失败问题 #1087
4. 修复TableMeta TSDB支持int display width不一致问题 #1100
5. 修复rocketmq&kafka 发送消息失败时回滚后继续提交的问题 #1104
6. 修复alter rename 的ddl 类型解析错误的问题 #1103
7. 修复FlatMessage 中data过滤掉了 value null的column #1120
8. 优化aliyun rds oss binlog下载的能力，支持基于位点自动回溯 #1076

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.2` · 2018-11-26 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
