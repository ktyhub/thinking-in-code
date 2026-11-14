---
title: "seatunnel 2.3.8"
project: "seatunnel"
repo: "apache/seatunnel"
tag: "2.3.8"
published: "2024-10-14"
type: "patch"
lang: "zh"
---

# seatunnel 2.3.8

# 2.3.8 Release Note


## 错误修复

### 核心

- [Hotfix][Core] 修复 MultiTableSink#PrepareCommit 时的并发异常 (#7686)
- [hotfix][zeta] conf 属性为空，打印日志错误修复 (#7487)
- [Fix][Seatunnel-core]修复 Windows 上执行脚本中的语法错误 (#7423)

### 连接器
- [Fix][Connecotr-V2] 修复主键中的 paimon 动态桶故事不是第一个 (#7728)
- [Fix][Connector-V2] 修复使用 jdk 11 时出现iceberg throw java: package sun.security.krb5 不存在的问题 (#7734)
- [修复][Connector-V2] 冰山水槽写入器任务关闭时释放资源 (#7729)
- [修复][Connector-V2]即使任务崩溃也释放资源（#7726）
- [修复][Connector-V2] 修复 paimon e2e 错误 (#7721)
- [Fix][Connector-V2] 修复已知目录创建和删除忽略问题 (#7700)
- [Fix][Connector-V2] 修复 Iceberg Sink 无法处理大写字段的问题 (#7660)
- [Hotfix][CDC] 修复配置 multi_table_sink_replica 时 ddl 重复执行错误 (#7634)
- [Fix][Connector-V2] 修复一些未捕获的可抛出错误 (#7657)
- [Fix][Connector-V2] 修复 jdbc 测试用例失败 (#7690)
- [修复][Connector-v2] 在表或数据库存在查询中的 JdbcCatalog 的 sql 查询中抛出异常 (#7651)
- [Fix][JDBC] 修复 starrocks jdbc 方言目录与 starrocks 连接器的冲突 (#7578)
- [bugfix] 修复 oracle 查询表长度 (#7627)
- [Hotfix] 修复 Iceberg 在 savemode 创建表时缺少列注释的问题 (#7608)
- [Hotfix][Seatunnel-common] 修复 paimon 接收器的 CommonError 消息 (#7591)
- [Hotfix][Connector-v2]修复connector-mongodb的ClassCastException (#7586)
- [Hotfix][Connector-v2] 修复使用 table_list 的 jdbc oracle 的 NullPointerException (#7544)
- [Bug][e2e][jdbc-gbase] gbase 驱动程序地址证书已过期 (#7531)
- [Hotfix][Connector-V2] 修复了十进制数据类型丢失的数据精度 (#7527)
- [Fix][Connector-V2] 修复 jdbc 查询 sql 无法获取表路径 (#7484)
- [Hotfix][Connector-V2] 修复 es 中未插入 null 的问题 (#7493)
- [修复错误] doris 自定义 sql 工作 (#7464)
- [Fix] 修复 oracle 样本数据列错误 (#7340)
- [Hotifx][Jdbc] 修复 MySQL 不支持 'ZEROFILL' 列类型 (#7407)
- [Hotfix][CDC] 修复包名拼写错误 (#7415)
- [Hotfix][Zeta] 修复 hazelcast client 应通过系统环境覆盖集群地址 (#7790)

### Zeta(ST-引擎)
- [核心][Zeta] 如果 Zeta 不是 TCP 发现，它无法找到其他成员 (#7757)
- [Fix][Zeta] 修复资源隔离在多节点上不起作用的问题 (#7471)

### 变压器
- [Bug][Transforms-V2] 修复 LLM 变换无法解析 boolean 值类型的问题 (#7620)

### CI
- [修复][CI] 修复提高 PR 时 CI 丢失文档检查的问题 (#7749)
- [Hotfix][ci] 修复 github ci 许可证头错误 (#7738)
- [修复][CI] 添加文档同步以修复 ci 错误 (#7720)
- [hotfix] 修复 FixSlotResourceTest 不稳定问题 (#7577)
- [修复][e2e]远程加载驱动程序忽略证书以避免证书地址过期(#7547)
- [Fix] 修复文档构建错误 (#7546)
- [修复][文档]修复无效链接 (#7508)
- [修复]更新 paimon.apache.org 死链接 (#7504)
- [Hotfix][Metrics] 修复零星的多指标 ci (#7468)
- [修复] 修复 Seatunnel 连接器列表 url 上的死链接 (#7453)
- [FIX][E2E]修改OceanBase测试用例为最新的imageChange镜像(#7452)


## 改进

### 核心
- [改进][Spark] 将数组类型转换为精确类型 (#7758)
- [改进][Zeta] 拆分任务组的类加载器 (#7580)
- [改进][核心]配置变量更新文档并添加测试用例 (#7709)
- [改进][Zeta] 由于服务器时间错误，为 tryTriggerPendingCheckpoint 添加日志 (#7717)
- [改进][EventService] 改进事件代码并将事件代码提取到 EventService (#7153)
- [杂务] 代码规范调整 (#7572)
- [杂务] 更新 zeta 示例 log4j2.properties (#7563)
- [改进] 更新 docker 文档和构建标签 (#7486)
- [改进][Zeta] 提交任务打印配置日志时处理用户隐私 (#7247)
- [改进][API] 添加忽略保存模式类型 (#7443)
- [改进][API] 将打开的目录移至 SaveModeHandler (#7439)
- [改进] 安装插件时跳过下载传递依赖项 (#7374)
- [改进] Flink 支持嵌入变换 (#7592)

### 连接器-V2
- [改进][Connector-v2] 删除无用代码并为 paimon sink 添加 changelog 文档 (#7748)
- [改进][Connector-V2]优化sqlserver包结构(#7715)
- [改进][Connector-V2] 优化 milvus 代码 (#7691)
- [改进][Redis]Redis 扫描命令支持版本 5、6、7 (#7666)
- [改进][Connector-V2] 支持读取存档压缩文件 (#7633)
- [改进][Jdbc] Jdbc 截断表应该检查表而不是数据库 (#7654)
- [改进] [Connector-V2] 优化 milvus-connector 配置代码 (#7658)
- [改进][Connector-V2]时间支持默认值(#7639)
- [改进][冰山]添加保存模式创建表primaryKey测试用例(#7641)
- [改进][Kafka]kafka源码重构了一些reader读取逻辑(#6408)
- [改进][Connector-V2][MongoDB] BsonInt32 将转换为 long 类型 (#7567)
- [改进][Connector-v2] 改进 paimon 接收器区分大小写的异常消息 (#7549)
- [改进][Connector-v2] 支持 jdbc mysql 8.1/8.2/8.3 (#7530)
- [改进][Connector-v2]即使在executeBatch中发生异常，也会在closeStatements中释放资源(#7533)
- [改进][Connector-V2] 删除硬代码冰山表格式版本 (#7500)
- [改进][Connector-V2] Fake 支持列配置 (#7503)
- [改进][Connector-V2] 更新矢量类型 (#7446)
- [改进] 改进一些连接器准备检查错误消息 (#7465)
- [改进] 重构 S3FileCatalog 及其工厂 (#7457)
- [改进] 添加了 OSSFileCatalog 及其工厂 (#7458)
- [改进][Connector-V2] 重用 StarRocksCatalog 中的连接 (#7342)
- [改进][Connector-V2] 删除系统表限制 (#7391)
- [改进][Connector-V2]支持电子邮件的多表接收器功能 (#7368)
- [改进] 更新拉取请求模板和 github 操作指南 (#7376)
- [改进][Connector-V2]使用后关闭所有结果集 (#7389)
- [改进] 添加 starrocks jdbc 方言 (#7294)

### 变换
- [改进][转换]改进地图字段类型的内部sql查询(#7718)
- [改进][变换] 支持 jsonpath 变换上的 errorHandleWay (#7524)
- [改进][Transform-v2] 从 FilterFieldTransform 重构 TransformRow (#7598)
- [改进][转换]添加LLM模型提供商microsoft #7778

### CI
- [改进][CI] 将 paimon 移动到单个任务中 (#7719)
- [改进][测试][Connector-V2][MongoDB] 为 BsonToRowDataConverters 添加一些测试用例 (#7579)
- [改进][测试]删除S3Utils的无用代码。 (#7515)
- [改进][E2E]更新doris镜像至正式版本#7773


## 特点
### 核心
- [Feature][Flink] 支持多表读写 (#7713)
- [Feature][Zeta][Core] 支持作业的输出日志文件 (#7712)
- [功能][REST-API] 添加线程转储休息 api (#7615)
- [Feature][rest-api] 添加是否为主节点标识符 (#7603)
- [功能][核心] shell 批量取消任务 (#7612)
- [功能] 支持配置变量替换为默认值 (#7562)
- [Feature][zeta]支持通过 prometheus 导出器协议公开监控指标 (#7564)
- [功能][Zeta] 添加其余 api 来更新节点标签 (#7542)
- [功能][Zeta] 优化llm文档&&添加DOUBAO LLM (#7584)
- [Feature][Zeta] 支持 slf4j mdc 跟踪作业 id 输出到日志中 (#7491)
- [功能][核心]添加了用于批量启动和停止的rest-api (#7522)
- [功能][核心]为所有连接器添加事件通知 (#7501)
- [功能] 添加 docker 文件 (#7346)
- [Feature][Zeta] 添加了多表的其他指标信息 (#7338)
- [Feature][Spark] 支持多表读写 (#7283)

### 连接器-V2
- [功能][Connector-V2]断言支持多表检查(#7687)
- [Feature][Connector-Paimon] 支持动态分桶，提高Paimon写入效率(#7335)
- [功能][Connector-v2] 支持 paimon 的流式读取 (#7681)
- [功能][Connector-V2] 优化 hudi 接收器 (#7662)
- [功能][Connector-V2] jdbc saphana 源表路径支持视图和同义词 (#7670)
- [Feature][Connector-V2] Ftp 文件接收器支持多表和保存模式 (#7665)
- [功能] 支持 tidb cdc 连接器源 #7199 (#7477)
- [功能][kafka] 为间隔轮询消息添加 arg poll.timeout (#7606)
- [功能][Connector-V2][Hbase] 实现 hbase 目录 (#7516)
- [功能][弹性搜索]支持多表源功能(#7502)
- [功能][CONNECTORS-V2-Paimon] Paimon Sink 支持截断表 (#7560)
- [功能][连接器-V2] 支持 Qdrant 接收器和源连接器 (#7299)
- [功能][Connector-V2] 支持 HBase 的多表接收器功能 (#7169)
- [功能][连接器-V2] 支持 typesense 连接器 (#7450)
- [功能][Rabbitmq] 允许配置队列持久性和删除策略 (#7365)
- [功能][Connector-V2] 在 jdbc 中添加 `decimal_type_narrowing` 选项 (#7461)
- [功能][connector-v2]添加 Kafka Protobuf 数据解析支持 (#7361)
- [功能][Connector-V2][Tablestore] 支持 Tablestore 的源连接器 #7448 (#7467)
- [功能][Connector-V2] 支持 opengauss-cdc (#7433)
- [Feature][Connector-V2] 支持选择 http 分页的起始页 (#7180)
- [Feature][Connector-V2][OceanBase] 支持 OceanBase 上的向量类型 (#7375)
- [功能][Connector-V2] Fake Source 支持生成矢量数据 (#7401)
- [功能][Connector-V2][Iceberg] 支持 Iceberg Kerberos (#7246)
- [Feature][Connector-V2] SqlServer 支持用户定义类型 (#7706)
- [功能][Connector-V2] sftp 文件接收器支持多表和保存模式 (#7668)

### 变换
- [功能][Transforms-V2] LLM 转换支持自定义字段名称 (#7640)
- [功能][Transforms-V2] LLM 转换支持 KimiAI (#7630)
- [Future][Transforms-V2] llm trans 支持场投影 (#7621)
- [功能][变换] 添加嵌入变换 (#7534)

## 文档 

- [文档] Spark 使用文档更新 (#7722)
- [文档] 改进 startrocks 接收器文档 (#7744)
- [文档] 添加日志记录到 sidebars.js (#7742)
- [文档] 添加流模式下 Doris Sink 的调优指南 (#7732)
- [文档] 更新动态编译文档 (#7730)
- [文档] 改进引擎部署文档以跳过部署 client (#7723)
- [文档] 添加一些连接器图标 (#7710)
- [文档] 修复了配置单元接收器文档 (#7696)
- [文档] 重构作业环境配置文档 (#7631)
- [文档] 添加 mysql-cdc 模式演变的文档 (#7626)
- [文档] 其他 api 文档。 (#7645)
- [Docs] 在 sql-config 中添加关键字的使用方法 (#7594)
- [文档] 添加 docker 集群指南 (#7532)
- [Docs] 添加作业配置文件后缀提醒 (#7625)
- [文档] 修复了遥测文档 (#7623)
- [文档] 修复文档符号转义错误 (#7611)
- [文档] 资源隔离添加更新节点标签链接 (#7607)
- [文档] 更新 PostgreSQL-CDC.md (#7601)
- [文档] 改进快速启动和从源代码构建 (#7548)
- [文档] 更新 jar 下载链接和格式侧边栏 (#7569)
- [文档]添加 kafka 文档 (#7553)
- [文档] 删除 `fs.oss.credentials.provider` 选项 (#7507)
- [文档] 更新文档结构 (#7425)
- [文档] 更新指南并添加示例 (#7388)
- [ASF] 添加新合作者 (#7399)
- [文档] 改进 startrocks 源文档 #7777

---

> 📦 仓库：[apache/seatunnel](https://github.com/apache/seatunnel) · 🏷️ 版本：`2.3.8` · 📅 发布：2024-10-14 · [查看英文原版 Release](https://github.com/apache/seatunnel/releases/tag/2.3.8)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
