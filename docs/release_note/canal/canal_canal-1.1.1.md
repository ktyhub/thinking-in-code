---
title: "canal canal-1.1.1"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.1"
published: "2018-10-29"
type: "release"
lang: "en"
---

# canal canal-1.1.1

## 功能新增
1. 原生支持RocketMQ消息投递 #695 【[Canal Kafka QuickStart](https://github.com/alibaba/canal/wiki/Canal-Kafka-RocketMQ-QuickStart)】
2. 原生支持hbase的数据同步 #849 [ClientAdapter](https://github.com/alibaba/canal/wiki/ClientAdapter)
3. 新增c#/go多语言客户端的支持
	* canal java客户端: https://github.com/alibaba/canal/wiki/ClientExample
	* canal c#客户端开源项目地址： https://github.com/CanalSharp/CanalSharp 
	* canal go客户端开源项目地址： https://github.com/CanalClient/canal-go
4. MQ消息投递支持按pk hash到多个分区partition(Kafka/RocketMQ均支持) #958

## 小需求&bugfix

1. 修复单核环境下的canal启动异常问题 #873
2. 修复parse并行解析模式gtid的并发问题 #881
3. java client内聚guava打包,解决和外部系统的版本冲突问题 #912
4. 升级proto2为proto3(3.6.1),支持更多的跨语言能力
5. 支持配置中数据库密码加密处理 #990
6. 并行解析下，数据库一直连不上导致OOM异常(线程数泄漏,出现暴涨) #968
7. mysql set类型8值情况解析越界bugfix [otter#617](https://github.com/alibaba/otter/issues/617)
8. 支持otter使用canal的新特性，比如rds ak/sk配置、tsdb配置
9. 修复docker部署canal-server无法使用 docker-restart命令 #1001
10. 修复mysql bit(8)类型8值情况解析越界bugfix
11. tablemeta tsdb数据增加过期清理能力 #1047

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.1` · 2018-10-29 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
