---
title: "shardingsphere 5.3.0"
project: "shardingsphere"
repo: "apache/shardingsphere"
tag: "5.3.0"
published: "2023-01-08"
type: "minor"
lang: "zh"
summary: "DistSQL：重构语法API，请参考用户手册"
---

# shardingsphere 5.3.0

### API 变化

1. DistSQL：重构语法API，请参考用户手册
1.Proxy：更改全局规则的配置样式，去掉感叹号
1、Proxy：允许零配置启动，无权限配置时启用默认账户root/root
1.Proxy：去掉默认的logback.xml，使用API初始化
1. JDBC：去掉Spring配置，改用Driver + YAML配置

### 增强功能

1.DistSQL：新语法REFRESH DATABASE METADATA，刷新逻辑数据库元数据
1.内核：支持DistSQL REFRESH DATABASE METADATA从治理中心加载配置并重建MetaDataContext
1.支持postgresql/openGauss设置事务隔离级别
1. 扩展：增加盘点任务进度更新频率
1.扩展：DATA_MATCH一致性检查支持断点续传
1. 扩展：支持通过DistSQL删除一致性检查作业
1. 扩展：将作业列表 DistSQL 响应中的列从 sharding_total_count 重命名为 job_item_count
1. 扩展：增量任务SQL中添加分片列，避免广播路由
1. Scaling：生成SQL时可以更新Sharding列
1. 扩展：改进列值读取器以进行 DATA_MATCH 一致性检查
1.DistSQL：加密DistSQL语法优化，支持like查询算法
1. DistSQL：注册存储单元时添加属性值检查
1.DistSQL：DROP RULE的同时去除无用的算法
1. DistSQL：EXPORT DATABASE CONFIGURATION 支持广播表
1. DistSQL：REGISTER STORAGE UNIT支持异构数据源
1. 加密：支持Encrypt LIKE功能
1、跨多个分片执行DML语句时自动启动分布式事务
1. 内核：支持client \d for PostgreSQL和openGauss
1.内核：支持列包含空值时的select group by、order by语句
1. 内核：支持解析PostgreSQL/openGauss Insert的RETURNING子句
1.内核：SQL HINT性能提升
1. 内核：then语句解析时支持mysql case
1、内核：支持数据源级异构数据库网关
1.（实验）Sharding：添加分片缓存插件
1. Proxy：支持更多PostgreSQL日期时间格式
1.代理：支持MySQL COM_RESET_CONNECTION
1. 扩展：改进 MySQLBinlogEventType.valueOf 以支持未知事件类型
1. 内核：联邦时的支持情况

### 错误修复

1. 扩展：修复删除作业时创建的屏障节点
1. Scaling：修复DATA_MATCH一致性检查中可能会忽略部分列值的问题
1. Scaling：修复一致性检查中jdbc url参数未更新的问题
1. Scaling：修复分表算法类型 INLINE 区分大小写
1. 扩展：修复MySQL上的增量任务需要mysql系统数据库权限
1. Proxy：修复无存储节点执行select SQL时的NPE
1、Proxy：支持单播场景下的DATABASE_PERMITTED权限验证
1.内核：修复显示计算节点中worker-id的错误值
1.内核：修复当可读数据源数量与Weight算法的权重配置不相等时的路由错误
1.内核：修复多组读写分割引用同一个负载均衡器名称，导致负载均衡器失败的问题
1.内核：修复无法禁用和启用计算节点的问题
1. JDBC：修复ShardingSphereDriver集群模式启动时关闭数据源的问题
1.内核：修复绑定表逻辑表名部分与实际表名一致、部分不一致时重写结果错误的问题
1.内核：修复在不配置规则的情况下使用SpringBoot时启动异常的问题
1. Encrypt：修复Encrypt值为null时空指针异常
1.内核：修复oracle解析不支持varchar2指定类型
1.内核：修复事务内串行标志判断错误
1. 内核：修复 wasNull 更改导致的游标获取错误
1.内核：修复刷新元数据时alter transaction规则错误
1. Encrypt：修复Encrypt场景下执行call procedure语句时发生的EncryptRule强制转换为TransparentRule异常
1. Encrypt：修复速记投影中ExpressionProjection导致的异常
1. Proxy：修复PostgreSQL Proxy int2负值解码不正确的问题
1.代理：PostgreSQL/openGauss支持描述插入返回子句
1. Proxy：修复 gsql 3.0 连接 Proxy 时可能卡住的问题
1. Proxy：修复Proxy后端检查SQL时丢失参数的问题
1. Proxy：启用MySQL Proxy对大数据包进行编码
1.内核：修复oracle解析注释无空格错误
1. DistSQL：修复加密表的显示创建表问题

### 重构

1.缩放：如果是SQL关键字，则生成SQL时反转表名和列名
1. 扩展：改进增量任务失败处理
1.内核：治理中心节点调整，统一驼峰为下划线

### 更改日志

1. [里程碑](https://github.com/apache/shardingsphere/milestone/22)

---

> 📦 仓库：[apache/shardingsphere](https://github.com/apache/shardingsphere) · 🏷️ 版本：`5.3.0` · 📅 发布：2023-01-08 · [查看英文原版 Release](https://github.com/apache/shardingsphere/releases/tag/5.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
