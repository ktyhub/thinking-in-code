---
title: "seatunnel 2.3.7"
project: "seatunnel"
repo: "apache/seatunnel"
tag: "2.3.7"
published: "2024-08-19"
type: "patch"
lang: "zh"
---

# seatunnel 2.3.7

## 错误修复

### 连接器-V2

- [修补程序][MySQL-CDC] 修复 mysql binlog 读取中的 ArrayIndexOutOfBoundsException (#7381)
- [Fix][Doris] 修复 doris 主键顺序和字段顺序不一致的问题 (#7377)
- [Bugfix][Doris]修复Json序列化，空值导致数据错误的问题(#7379)
- [Hotfix][Jdbc] 修复 jdbc 编译错误 (#7359)
- [Fix][OceanBase] 删除 OceanBase 目录对 mysql 驱动程序的依赖 (#7311)
- [Fix][Tdengine] 修复连接 taos 读取数据时的 sql 异常和并发修改异常 (#6088)
- [Hotfix][Kafka] 修复 kafka 消费者日志下一次启动偏移量 (#7312)
- [修复][Doris]修复CDC场景下删除数据异常的问题。 (#7315)
- [hotfix][Hbase]修复并优化hbase源码问题(#7148)
- [修复][Iceberg] 无法为标识符“Iceberg”创建源。第7182章（7279）

### Zeta(ST-引擎)

- [Fix][Zeta] 修复任务因锁定指标失败而无法结束的问题 (#7357)
- [Hotfix][Zeta] 修复系统繁忙时任务无法停止的问题 (#7292)
- [Hotfix][Zeta] 修复系统繁忙时任务无法停止的问题 (#7280)

### 端到端

- [修复][Http] 修复 http e2e 情况 (#7356)

## 改进

### 核心

- [改进][Flink] 优化方法名称 (#7372)
- [改进][API] 在发送到下游之前检查目录表字段名称是否合法 (#7358)
- [改进][Flink] 重构 flink 代理源/接收器 (#7355)
- [改进][API] 确保 TablePath 中的表名不为空 (#7252)
- [改进][核心]改进基于插件名称的查找策略(#7278)

### 连接器-V2

- [改进][多表]添加多表接收器选项检查(#7360)
- [改进][控制台]更新ConsoleSinkFactory.java (#7350)
- [改进][Jdbc]自动建表时跳过所有索引以提高写入性能(#7288)
- [改进][Doris] 改进 doris 错误消息 (#7343)
- [改进][Jdbc] 删除 JdbcDialect 中的 MysqlType 引用 (#7333)
- [改进][Jdbc] 创建表时合并用户配置主键 (#7313)
- [改进][Jdbc]优化检查数据库和表是否存在的方式(#7261)

### 变换-V2

- [改进][DynamicCompile] 改进 DynamicCompile 转换 (#7319)
- [改进][SQL] 从输出字段中删除转义标识符 (#7297)
- [改进][DynamicCompile] 改进 DynamicCompile 转换 (#7264)

### 端到端

- [改进][改进]启用spark/flink的fakesource e2e (#7325)
- [改进][改进]启用 JdbcPostgresIdentifierIT (#7326)
- [改进][改进] 支持 paimon e2e 的窗口 (#7329)

## 特点

### 连接器-V2

- [功能][阿里云 SLS] 添加阿里云 SLS 连接器 #3733 (#7348)
- [功能][Activemq] 添加了 activemq 接收器 (#7251)

### 变换-V2

- [功能] 拆分转换并将 jar 移动到连接器目录中 (#7218)
- [功能][LLM] 添加 LLM 转换 (#7303)
- [Feature][SQL] 支持 sql 的转换为字节函数 (#7284)

## 文档

- [文档] 更改 setup.md 中已弃用的连接器名称 (#7366)
- [文档] 修复 sftp 接收器文档中的用户名参数错误 (#7334)
- [文档]修复选择oss作为检查点基础时文档配置被纠正的问题(#7332)
- [文档] 修复侧边栏中丢失的 sink-options-placeholders.md (#7310)
- [文档] 更新 Oracle-CDC.md (#7285)
- [Docs] 修复混合集群部署文档显示错误 (#7306)
- [文档] 将事件监听器文档翻译成中文 (#7274)

## 其他
- 碰撞 org.apache.activemq:activemq-client (#7323)
- [改进] 删除未使用的代码 (#7324)
- [改进] 将快照版本更新为 2.3.7 (#7305)

---

> 📦 仓库：[apache/seatunnel](https://github.com/apache/seatunnel) · 🏷️ 版本：`2.3.7` · 📅 发布：2024-08-19 · [查看英文原版 Release](https://github.com/apache/seatunnel/releases/tag/2.3.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
