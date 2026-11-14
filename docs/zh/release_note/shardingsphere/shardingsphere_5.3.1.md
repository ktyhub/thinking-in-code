---
title: "shardingsphere 5.3.1"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.3.1"
published: "2023-01-10"
type: "patch"
lang: "zh"
summary: "1.内核：添加新的数据脱敏、动态数据脱敏功能、内置数据脱敏算法"
---

# shardingsphere 5.3.1

### 新功能

1.内核：添加新的数据脱敏、动态数据脱敏功能、内置数据脱敏算法
1. Scaling：CDC功能的基本支持
1.DistSQL：添加DistSQL相关的屏蔽规则


### 增强功能

1.内核：集群模式避免了元数据的二次刷新 
1.内核：SHOW COMPUTE NODES支持显示每个实例的版本号
1.内核：系统数据库添加簇信息表
1.内核：独立模式持久化元数据支持MySQL
1.内核：SQL HINT性能提升
1.内核：用Hint恢复路由到指定数据库
1. Encrypt：Encrypt CharDigestLikeEncryptAlgorithm 支持下划线通配符
1.内核：支持SQL联合SELECT NULLS LAST/FIRST语句
1. 内核：重构加密集成测试逻辑，添加更多测试用例
1. 内核：为 MD5MaskAlgorithm、MD5EncryptAlgorithm 添加 salt 属性
1.内核：重构ShardingConditionEngine以支持SPI配置
1. DistSQL：`CREATE ENCRYPT RULE`时支持定义列级别`QUERY_WITH_CIPHER_COLUMN`
1. DistSQL：添加`CREATE SHARDING TABLE RULE`的算法类型检查


### 错误修复

1.修复ShardingSphere连接Kubernetes时ZooKeeper集群报错的问题
1.内核：修复集群模式下使用Consul启动失败的问题
1. DB Discovery：删除发现规则时关闭心跳作业
1. 内核：修复SQL联合执行相同分片条件子查询时决策结果错误的问题
1.内核：修复PostgreSQL和openGuass方言的SQL Federation中UNION、INTERSECT、EXCEPT集合操作的优先级问题
1. 内核：修复视图包含集合运算符时创建视图索引超出范围异常
1.内核：添加XA资源超出长度检查
1.内核：修复spring require_new的事务支持
1. 加密：修复使用 PostgreSQL 和 openGauss 配置 char 类型时 AESEncryptAlgorithm 解密异常
1. 加密：修复加密子查询包含别名时简写扩展结果异常的问题
1.内核：修复列元数据的无符号标志未序列化
1.内核：修复PostgreSQL / openGauss select fetch解析问题以支持联邦执行引擎
1. Proxy：修复MySQL Proxy发生错误时数据包序列ID可能不正确的问题
1. Proxy：修复使用PostgreSQL复合类型时Proxy出现错误的问题
1. 代理：为 MySQL COM_STMT_PREPARE 设置正确的列定义标志
1. Proxy：通过Proxy查询PG元数据，结果集为空时，标签丢失

### 更改日志

1. [里程碑]( https://github.com/apache/shardingsphere/milestone/23 )

---

> 📦 仓库：[apache/shardingsphere](https://github.com/apache/shardingsphere) · 🏷️ 版本：`5.3.1` · 📅 发布：2023-01-10 · [查看英文原版 Release](https://github.com/apache/shardingsphere/releases/tag/5.3.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
