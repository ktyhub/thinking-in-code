---
title: "canal canal-1.1.3"
project: "canal"
repo: "alibaba/canal"
tag: "canal-1.1.3"
published: "2019-04-04"
type: "release"
lang: "en"
summary: "支持mysql8.0新的caching_sha2_password认证协议；支持Azure MySQL的认证协议；canal投递MQ消息 【MQ投递】；支持按表规则定义dynamic topic、partition路由的能力"
---

# canal canal-1.1.3

## 功能新增
1. 支持mysql8.0新的caching_sha2_password认证协议
2. 支持Azure MySQL的认证协议
3. canal投递MQ消息 [【MQ投递】](https://github.com/alibaba/canal/wiki/Canal-Kafka-RocketMQ-QuickStart)
	* 支持按表规则定义dynamic topic、partition路由的能力
	* 新增kafka消息投递事务
4. canal内置的客户端【[ClientAdapter](https://github.com/alibaba/canal/wiki/ClientAdapter)】
	* rds-adapter 增加mysql整个DB层面的同步配置
	* es-adapter 新增父子文档索引适配

## 小需求&bugfix

1. 解决server单核服务器无法接收数据的问题 #1605
2. 修复TableMeta TSDB支持utf8mb4 #1550
3. 修复MQ消息发送时非flatMessage模式出现数据重复 #1551
4. 修复Kafka配置为分区模式时出现数据 #1636
5. 修复fastsql的几个DDL解析问题 #1306 #1546 #1626
6. 修复rdb-adapter同步的类型转化、空指针、大小写、DDL同步等问题 #1313 #1338 #1341 #1408 #1433 
7. 修复投递MQ模式，canal server HA在切换后不生效 #1229
8. 修复es-adapter数据库主键类型错误 #1559
9. 修复charset编码不存在 #1662

---

> **Source** [alibaba/canal](https://github.com/alibaba/canal) · `canal-1.1.3` · 2019-04-04 · [upstream release](https://github.com/alibaba/canal/releases/tag/canal-1.1.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
