---
title: "shardingsphere 5.5.1"
description: "通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。"
---

# shardingsphere 5.5.1

### shardingsphere 是什么

通过分布式 SQL 增强数据智能，实现跨所有数据库的分片、可扩展性和安全性。

### shardingsphere 5.5.1 版本更新了什么

### API 变更

1. 权限：将权限提供者 ALL_PERMITTED 标记为已弃用，并将在将来删除
1. DistSQL：从显示存储单元中删除可选参数usageCount
1.读写分离：将YAML的dataSources更改为dataSourceGroups

### 新功能

1.内核：添加新的doris、hive和presto sql解析器模块和数据库类型

### 增强功能

1. DistSQL：注册或更改存储单元时检查权限
1、DistSQL：创建或修改分表规则时检查重复的实际数据节点
1. DistSQL：添加对显示存储单元的支持
1. DistSQL：导入数据库配置失败则回滚
1. DistSQL：将表类型添加到显示逻辑表的结果集中
1. SQL解析器：支持无服务器ID的MySQL更改复制
1. SQL解析器：支持MySQL行和列别名与ON DUPLICATE KEY UPDATE
1. SQL Parser：支持带有mysql前缀的MySQL CALL sql
1. SQL Parser：支持MySQL创建可加载函数返回int/dec
1. SQL Parser：支持解析Mysql-8中的MySQL CREATE TABLESPACE/TABLE
1. SQL Parser：支持解析MySQL CREATE INDEX 和 ENGINE_ATTRIBUTE
1. SQL Parser：支持用@variable解析MySQL LOAD DATA
1. SQL Parser：支持解析MySQL START REPLICA语句
1. SQL Parser：支持解析MySQL json表函数
1. SQL Parser：添加MySQL列not null SQL解析
1. SQL Parser：添加MySQL字符集SQL解析
1. SQL Parser：增强mysql json功能访问语句结果
1. SQL解析器：支持PostgreSQL COLLATION和CONSTRAINT关键字
1. SQL Parser：支持PostgreSQL、openGauss函数表以及parse更新
1. SQL解析器：支持PostgreSQL和openGauss的CTE
1. SQL Parser：优化PostgreSQLDateValueParser的时区支持。
1. SQL解析器：支持PostgreSQL限制和偏移量为空
1. SQL Parser：增强Oracle更新语句作为别名解析并添加测试用例
1. SQL Parser：支持Oracle列长度单位类型SQL解析
1.元数据：收集PostgreSQL的表类型
1.内核：当sql包含dbeaver提示注释时支持sql提示提取
1.内核：在extractFromSelectStatementWithoutProjection方法中添加extract合并左选择
1.内核：添加辅助节点创建和删除数据库
1. 事务：在 JDBC 适配器中的一个事务中使用相同的事务类型
1.交易：支持切换交易类型
1. SQL Federation：支持mysql的sql federation bit_count功能
1. SQL Federation：改进mysql的atan和anan2 sql功能
1. SQL Federation：支持联邦查询mysql bin功能
1. SQL Federation：支持联合查询NOT运算符
1. Proxy：将show table的结果按顺序排列
1.Proxy：创建、删除数据库和表时触发元数据收集
1. Proxy：优化Agent与Driver配合使用时支持从多个数据源收集指标数据
1. Proxy Native：为咖啡因缓存添加更多 graalvm 可访问性元数据
1. 分片：修改分片表的所有本地索引，并添加对象唯一性级别 spi 来控制索引令牌生成器
1. 分片：分片功能新增 NullsOrderType.LOW 和 NullsOrderType.HIGH 处理 NULL order by
1. 分片：添加内联分片算法与实际数据节点匹配检查
1. 加密：为带有加密列的组合语句添加不支持的检查
1.加密：支持selectdistinct(column)加密重写和重构SubstitutableColumnNameToken构建逻辑
1. 加密：支持concat嵌套concat语句重写并具有加密功能
1. Pipeline：添加JobExecutorServiceHandler的SHAARDING_TOTAL_COUNT impl，提高CPU核数要求
1. Pipeline：支持库存转储的页面查询和数据一致性流式查询
1. Pipeline：使用不区分大小写的标识符来增强表元数据加载器
1. Pipeline：支持标准管道表元数据加载器的主键列排序

### 错误修复

1. DistSQL：修复创建逻辑数据源后加载单表错误
1. DistSQL：修复设置默认单表存储单元为随机失败的问题
1. DistSQL：修复设置默认单表存储单元为逻辑数据源失败的问题
1. DistSQL：修复导入元数据时的NPE
1. SQL Parser：支持PostgreSQL不执行任何冲突操作
1. SQL Parser：修复oracle nvl函数和间隔时间解析错误
1.元数据：注销存储单元时保留正在使用的存储节点
1.元数据：修复注册存储单元时丢失存储单元的问题
1.内核：将HintManager中的ThreadLocal替换为TransmittableThreadLocal，支持跨线程使用
1.内核：使用ConnectionPropertiesParser spi解析jdbcUrl解决oracle url解析错误
1.内核：修复postgresql系统表判断导致的列计数断言异常
1. SQL Binder：为CloseStatementContext、MoveStatementContext、FetchStatementContext添加TableAvailable接口并修复sql重写测试用例
1.事务：修复setSavepoint方法调用不清理的问题
1.事务：修复分布式事务中保存点管理器未清理的问题
1.事务：修复提交xa事务时事务上下文未清理的问题
1.事务：修复游标不被重写的问题
1. SQL Federation：修复联合查询 LocalDateTime 转换
1. SQL Federation：修复sql federation中sql包含汉字时下推sql执行错误
1. SQL Federation：修复联邦查询二进制类型数据查询
1. SQL Federation：修复单个投影列的联合查询中的空结果
1. SQL Federation：修复方解石结果类型与bigint错误导致的sql federation未知类型异常
1. Proxy：支持PostgreSQL中的二进制类型bool值
1. Proxy：支持PostgreSQL中的数组类型准备参数
1. Proxy：支持PostgreSQL中文本数组的二进制协议值
1. Proxy：修复查询information_schema.SCHEMATA时出现重复结果的问题
1. Proxy：修复查询information_schema.SCHEMATA结果不正确的问题
1. Proxy：修复执行show table status时的NPE
1. Proxy：修复show table from db时出现no database selected异常
1.Proxy：修复proxy启动失败后进程不退出的错误
1.Proxy：修复PostgreSQL场景删除数据库后持久化系统元数据未清除的错误
1.Proxy：修复查询SQL中没有数据库选择的异常
1. JDBC：解决SpringBoot 2.3之前版本“zip文件关闭”的问题。
1. JDBC：修复Driver中不包含指定逻辑数据库时的NPE。
1. Sharding：修复 Sharding 列未通过别名跟踪的问题
1. Sharding：修复配置分片规则和绑定表规则时alter view异常的问题
1. Sharding：修复需要累加逻辑
1. Sharding：修复生成的键列名大小写不敏感错误
1.加密：修复数据类型包含float时加密显示创建表错误的结果
1. 加密：修复更新非加密表和在加密表上使用子查询的问题。
1.加密：添加insert select rewrite进行加密
1. Pipeline: InventoryTaskSplitter 兼容 `BigInteger` 主键
1. Pipeline：修复创建迁移作业时默认数据源丢失的问题

---

> 📦 仓库：[apache/shardingsphere](https://github.com/apache/shardingsphere) · 🏷️ 版本：`5.5.1` · 📅 发布：2024-10-22 · [查看英文原版 Release](https://github.com/apache/shardingsphere/releases/tag/5.5.1)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
