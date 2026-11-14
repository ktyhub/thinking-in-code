---
title: "shardingsphere 5.3.2"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.3.2"
published: "2023-03-30"
type: "patch"
lang: "zh"
summary: "Proxy：添加属性`system-log-level，支持DistSQL动态更改日志级别。；DistSQL：删除Hint相关的DistSQL，用户可以使用`SQL Hint`代替"
---

# shardingsphere 5.3.2

### API 变化

1. Proxy：添加属性`system-log-level`，支持DistSQL动态更改日志级别。
1. DistSQL：删除Hint相关的DistSQL，用户可以使用`SQL Hint`代替

### 新功能

1. 扩展：支持任何类型的列唯一键表

### 增强功能

1. 扩展：使用流查询进行库存转储和数据一致性检查
1. 扩展：兼容MySQL binlog解析中的`VARBINARY`列类型
1. 扩展：将`AbstractSimplePipelineJob.execute`重构为阻塞
1. 扩展：改进表记录计数计算
1. 扩展：支持迁移作业缺少代理分片规则
1. 扩展：在 MySQL 上为管道作业添加 `useServerPrepStmts=false`
1. 缩放：改进 MySQL binlog 的日期时间/时间解析
1. 扩展：为准备阶段添加全局状态
1. 扩展：在MySQL上为管道作业添加`netTimeoutForStreamingResults`
1.权限：支持指定密码认证方式
1.权限：添加openGauss协议的md5认证支持
1. Agent：为JDBC添加更多指标
1.内核：ShardingSphere驱动配置支持Apollo
1.内核：将`SKIP_ENCRYPT_REWRITE SQL` Hint调整为`SKIP_SQL_REWRITE`，以支持更多场景
1.内核：支持openGauss `EXPLAIN PERFORMANCE`
1.加密：Like支持concat功能

### 错误修复

1. 缩放：修复 PostgreSQL 增量任务的 unicode 字符和特殊字符解码
1. 缩放：修复迁移不支持 PostgreSQL json 类型
1.DistSQL：`CREATE SHARDING TABLE RULE`支持`NONE`策略
1.内核：修复数据源为空时使用系统数据库错误
1.内核：修复设置worker-id在Standalone模式下不生效的问题
1、内核：删除读写分离和数据库发现规则时清除存储节点信息
1.内核：修复单表复杂查询中Column索引越界异常问题
1. 内核：修复PostgreSQL类似小写失败的问题。
1.内核：修复前后台数据库类型不一致时内置元数据库数据采集异常的问题
1.内核：修复某些表名下路由报错的问题
1.内核：修复MySQL创建过程解析错误
1.内核：修复联合提取表名称NPE
1.内核：修复大写表约束不重写错误
1. 内核：修复PostgreSQL / openGauss SQL包含money类型解析失败的问题
1.内核：修复PostgreSQL/openGauss位置参数规则
1. 内核：修复 PostgreSQL / openGauss 无法解析带有类型转换的 const
1.内核：修复sql联合引擎执行select时汉字编码异常
1.内核：修复执行set变量语句int jdbc适配器时`IndexOutOfBoundsException`
1.内核：修复执行drop index语句时索引不存在异常
1. Proxy：正确处理MySQL Proxy二进制协议中的数字签名
1. Proxy：修复PostgreSQL Proxy无法处理bytea数据类型的问题
1. Proxy：修复 PostgreSQL Proxy 无法解析微秒时间值的问题
1.代理：修复二进制格式日期类型的PostgreSQL协议编解码器
1.代理：修复可能的CCE `PostgreSQLInt2BinaryProtocolValue`
1. 代理：修复 client 将带引号的字符集传递给 PostgreSQL/openGauss 代理时可能出现的错误

### 更改日志

1. [里程碑](https://github.com/apache/shardingsphere/milestone/24)

---

> 📦 仓库：[apache/shardingsphere](https://github.com/apache/shardingsphere) · 🏷️ 版本：`5.3.2` · 📅 发布：2023-03-30 · [查看英文原版 Release](https://github.com/apache/shardingsphere/releases/tag/5.3.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
