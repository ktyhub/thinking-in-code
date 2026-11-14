---
title: "seatunnel v3.0.0"
description: "SeaTunnel是一个多模态、高性能、分布式、海量数据集成工具。"
summary: "SeaTunnel是一个多模态、高性能、分布式、海量数据集成工具。"
---

# seatunnel v3.0.0

### seatunnel 是什么

SeaTunnel是一个多模态、高性能、分布式、海量数据集成工具。

### seatunnel v3.0.0 版本更新了什么

## 3.0.0 发行说明

这是 Apache SeaTunnel 项目的一个伟大里程碑！  
3.0.0版本的发布是一次重大更新，包含927个PR、30个新连接器以及Zeta引擎、Connector-V2和CLI的重大改进，这将显着提高用户数据集成工作流程的效率。

我们的贡献者为此更新所付出的奉献和辛勤工作给我们留下了深刻的印象，我们相信这个新版本将受到社区的广泛欢迎。

## 新连接器

* 连接器-amazondocumentdb
* 连接器-天蓝色-队列-存储
* 连接器-azurecosmosdb
* 连接器-bigquery
* 连接器-沙发底座
* 连接器-deeplake
* 连接器-边缘-插座
* 连接器-facebook-广告
* 连接器-firebase
* 连接器-谷歌-广告
* 连接器-谷歌-bigtable
* 连接器-谷歌-pubsub
* 连接器-mqtt
* 连接器-nats-jetstream
* 连接器-星云图
* 连接器-python
* 连接器-销售人员
* 连接器-snmp
* 连接器-tiktok-广告
* 连接器-cdc-db2
* 连接器-cdc-vitess
* 连接器文件-bos
* 连接器文件-gcs
* 连接器-http-airtable
* 连接器-http-线性
* 连接器-http-posthog
* 连接器-http-shopify
* 连接器-http-stripe
* 连接器-http-zendesk
* 连接器-mem0

## 特点

* [功能][Connector-V2] 支持 S3 源连接试运行 ([#12242](https://github.com/apache/seatunnel/pull/12242))
* [功能][Connector-V2] 支持多表 IoTDB 源 ([#12246](https://github.com/apache/seatunnel/pull/12246))
* [功能][Connector-V2] 添加 TikTok 广告报告源 ([#12283](https://github.com/apache/seatunnel/pull/12283))
* [功能][Connector-V2] 添加 Salesforce 接收器 ([#12245](https://github.com/apache/seatunnel/pull/12245))
* [功能][Connector-V2] 添加 Facebook 广告源连接器 ([#12275](https://github.com/apache/seatunnel/pull/12275))
* [功能] [连接器-http-线性] 添加线性 HTTP 源连接器和单元测试 ([#12270](https://github.com/apache/seatunnel/pull/12270))
* [功能][连接器-V2] 添加 zendesk 接收器 ([#12253](https://github.com/apache/seatunnel/pull/12253))
* [功能][Connector-V2][MongoDB-CDC]支持时间戳停止模式([#11815](https://github.com/apache/seatunnel/pull/11815))
* [功能][Connector-V2] 将 kafka_message_value_fields 添加到 Kafka 接收器 ([#11112](https://github.com/apache/seatunnel/pull/11112))
* [功能][Transform-V2] 添加 Python 转换 ([#11390](https://github.com/apache/seatunnel/pull/11390))
* [功能][Connector-V2] 支持多表 InfluxDB 源 ([#12247](https://github.com/apache/seatunnel/pull/12247))
* [功能][Connector-V2] 支持 Kafka 源连接试运行 ([#12167](https://github.com/apache/seatunnel/pull/12167))
* [功能][Connector-V2] 添加 Google Ads 源连接器 ([#12230](https://github.com/apache/seatunnel/pull/12230))
* [功能][连接器-V2] 添加 SNMPv2c SET 接收器连接器 ([#12011](https://github.com/apache/seatunnel/pull/12011))
* [功能][CLI] 比较各个修订版中保存的基准测试结果 ([#12192](https://github.com/apache/seatunnel/pull/12192))
* [功能][Connector-V2] 支持 PostgreSQL CDC ADD COLUMN 模式演化 ([#11922](https://github.com/apache/seatunnel/pull/11922))
* [功能][Connector-V2] 添加 Google Cloud Storage 文件接收器 ([#12146](https://github.com/apache/seatunnel/pull/12146))
* [功能][Connector-V2] 添加 Amazon DocumentDB 源连接器 ([#12046](https://github.com/apache/seatunnel/pull/12046))
* [功能][Connector-Kafka] 支持 Confluence-framed Avro 负载 ([#12088](https://github.com/apache/seatunnel/pull/12088))
* [功能][Connector-V2][Shopify] 添加 Shopify 源连接器 ([#11028](https://github.com/apache/seatunnel/pull/11028))
* [功能][格式] 添加 Debezium JSON SerDe 微基准 ([#12056](https://github.com/apache/seatunnel/pull/12056))
* [功能][Zeta] 添加状态存储和恢复基准（[#12044](https://github.com/apache/seatunnel/pull/12044)）
* [功能][Connector-V2] 添加 Google Cloud Storage 文件源 ([#11967](https://github.com/apache/seatunnel/pull/11967))
* [功能][Zeta] 添加检查点完成基准 ([#12026](https://github.com/apache/seatunnel/pull/12026))
* [功能][连接器-V2][HugeGraph]使用引擎级计时器刷新([#12020](https://github.com/apache/seatunnel/pull/12020))
* [功能][连接器-V2] 添加 Deep Lake 水槽连接器 ([#11852](https://github.com/apache/seatunnel/pull/11852))
* [功能][Connector-V2] 添加 Firebase 实时数据库源连接器 ([#11637](https://github.com/apache/seatunnel/pull/11637))
* [功能][CI] 添加基准分析诊断 ([#12021](https://github.com/apache/seatunnel/pull/12021))
* [功能][Connector-V2] 添加 Azure 队列存储源 ([#12006](https://github.com/apache/seatunnel/pull/12006))
* [功能][Connector-V2][Hive] 支持 AWS Glue 数据目录元存储 ([#11895](https://github.com/apache/seatunnel/pull/11895))
* [功能][Connector-V2] 添加 Stripe PaymentIntents 源 ([#11940](https://github.com/apache/seatunnel/pull/11940))
* [功能][Connector-V2] BigQuery Sink 支持多表和 UniverseDomain ([#11649](https://github.com/apache/seatunnel/pull/11649))
* [功能][连接器-V2] 添加 Azure CosmosDB 源端连接器 ([#11167](https://github.com/apache/seatunnel/pull/11167))
* [功能] [Connector-V2] [NebulaGraph] 添加顶点接收器连接器 ([#11865](https://github.com/apache/seatunnel/pull/11865))
* [功能][Connector-V2] 添加 BosFile 源和接收器连接器 ([#11952](https://github.com/apache/seatunnel/pull/11952))
* [功能][Connector-V2] 添加 SNMP 源连接器 ([#11968](https://github.com/apache/seatunnel/pull/11968))
* [功能][连接器-V2] 添加 PostHog 源连接器 ([#11998](https://github.com/apache/seatunnel/pull/11998))
* [功能] [Connector-V2] [GooglePubSub] 添加 Google Pub/Sub 源连接器 ([#11989](https://github.com/apache/seatunnel/pull/11989))
* [功能][Zeta] 添加中间队列比较基准 ([#11986](https://github.com/apache/seatunnel/pull/11986))
* [功能][CLI] 添加 OrcaRouter AI 网关 LLM 提供商 ([#11997](https://github.com/apache/seatunnel/pull/11997))
* [功能][Zeta] 添加工作资源 REST API ([#11909](https://github.com/apache/seatunnel/pull/11909))
* [功能][Zeta] 读取和更改 v2 REST API 上的日志级别 ([#11984](https://github.com/apache/seatunnel/pull/11984))
* [功能][Connector-V2] 添加 Azure 队列存储接收器 ([#11939](https://github.com/apache/seatunnel/pull/11939))
* [功能][Zeta] 在作业详细信息上添加可选择的实时指标图表 ([#11957](https://github.com/apache/seatunnel/pull/11957))
* [Feature][CI] 引入合并队列以保持开发基线稳定 ([#11963](https://github.com/apache/seatunnel/pull/11963))
* [功能][E2E] 添加 Helm 图表部署测试 ([#11938](https://github.com/apache/seatunnel/pull/11938))
* [功能][连接器-V2] 添加 DB2 CDC 源连接器 ([#10780](https://github.com/apache/seatunnel/pull/10780))
* [功能][Zeta]添加本地样本试运行模式([#11538](https://github.com/apache/seatunnel/pull/11538))
* [功能][Connector-V2][Neo4j]支持多表源读取([#11869](https://github.com/apache/seatunnel/pull/11869))
* [功能] [Connector-V2] [GooglePubSub] 添加 Google Pub/Sub 接收器连接器 ([#11877](https://github.com/apache/seatunnel/pull/11877))
* [功能][遮阳]重构座椅通道-遮阳模块。 ([#9993](https://github.com/apache/seatunnel/pull/9993))
* [功能][Connector-V2] 添加 PythonSource 连接器 ([#11337](https://github.com/apache/seatunnel/pull/11337))
* [功能][核心]转换和接收器的错误数据绕过功能（死信队列）（[#10306](https://github.com/apache/seatunnel/pull/10306)）
* [功能][连接器-V2]添加Hudi定时器冲洗([#11747](https://github.com/apache/seatunnel/pull/11747))
* [功能][Connector-V2][CDC] 支持注释相关的架构更改事件 ([#11025](https://github.com/apache/seatunnel/pull/11025))
* [Feature][Connector-V2][Prometheus] 将 PrometheusWriter 迁移到引擎级 FlushSignal ([#11778](https://github.com/apache/seatunnel/pull/11778))
* [功能][Connector-V2] 启用 S3 和 OSS 文件源的持续发现 ([#11789](https://github.com/apache/seatunnel/pull/11789))
* [功能][Connector-V2][Oracle-CDC] 添加 SCN 特定启动 ([#11171](https://github.com/apache/seatunnel/pull/11171))
* [功能][连接器-V2] 添加 Couchbase 水槽连接器 ([#11198](https://github.com/apache/seatunnel/pull/11198))
* [功能][连接器-V2] 添加 NATS JetStream 接收器连接器 ([#11460](https://github.com/apache/seatunnel/pull/11460))
* [功能] [核心] 实现 Flink 和 Spark 的配置验证 ([#11434](https://github.com/apache/seatunnel/pull/11434))
* [功能][Zeta] STIP-32 第 1 阶段：添加长期基准框架 ([#11671](https://github.com/apache/seatunnel/pull/11671))
* [功能][Connector-V2] 添加 HugeGraph 源连接器和重构接收器并支持多映射（[#11413](https://github.com/apache/seatunnel/pull/11413)）
* [功能][API] 定义知识同步元数据字段合同 ([#10990](https://github.com/apache/seatunnel/pull/10990))
* [功能][连接器文件库] 为文件源添加可选的 PDF RAG 元数据 ([#11571](https://github.com/apache/seatunnel/pull/11571))
* [Feature][Connector-V2] MaxCompute Connector 新增tunnel_name选项 ([#10690](https://github.com/apache/seatunnel/pull/10690))
* [功能][Zeta] 支持从最新完成的检查点恢复作业 ([#11421](https://github.com/apache/seatunnel/pull/11421))
* [功能][CLI] 为 OpenAI 系列基岩模型添加基岩地幔提供程序 ([#11548](https://github.com/apache/seatunnel/pull/11548))
* [Feature][Connector-V2] 支持大盟的 JDBC Sink table_options ([#11419](https://github.com/apache/seatunnel/pull/11419))
* [功能][连接器-V2][Fluss] 支持 Fluss 源连接器 ([#11544](https://github.com/apache/seatunnel/pull/11544))
* [功能][CLI] 为 AI CLI 添加准确性基准（100 个任务、分层判定门、修复循环测量）（[#11553](https://github.com/apache/seatunnel/pull/11553)）
* [功能][Connector-V2] 添加检查点门控的 post_sync_action 和保留，以实现文件源持续发现 ([#10563](https://github.com/apache/seatunnel/pull/10563))
* [功能][连接器-V2]支持Doris水槽定时冲水([#11506](https://github.com/apache/seatunnel/pull/11506))
* [功能][Connector-V2] 添加 StarRocks 定时器刷新 ([#11518](https://github.com/apache/seatunnel/pull/11518))
* [功能][Connector-V2] 添加 MongoDB 计时器刷新 ([#11527](https://github.com/apache/seatunnel/pull/11527))
* [功能][Connector-V2][PostgreSQL-CDC] 添加提交偏移量和仅快照启动模式 ([#11380](https://github.com/apache/seatunnel/pull/11380))
* [功能][Connector-V2][Kafka] 支持在源连接器中读取 Kafka 消息头 ([#11521](https://github.com/apache/seatunnel/pull/11521))
* [功能][Transform-V2] 添加 TextChunk 转换插件 ([#11414](https://github.com/apache/seatunnel/pull/11414))
* [功能][Connector-V2] 添加 ClickHouse 计时器刷新 ([#11519](https://github.com/apache/seatunnel/pull/11519))
* [功能][Doris] 支持 VARIANT 源和接收器映射 ([#10855](https://github.com/apache/seatunnel/pull/10855))
* [功能][Connector-V2] 支持 Oracle 的 JDBC 接收器 table_options ([#11416](https://github.com/apache/seatunnel/pull/11416))
* [功能][Connector-V2][MySQL-CDC] 支持 GTID 特定启动偏移量 ([#11123](https://github.com/apache/seatunnel/pull/11123))
* [功能] [CI] 添加升级兼容性恢复工作流程 ([#11301](https://github.com/apache/seatunnel/pull/11301))
* [功能][CDC/JDBC]添加enable_concurrent_read选项以跳过对没有索引的表的拆分分析([#10837](https://github.com/apache/seatunnel/pull/10837))
* [功能][Connector-V2] 支持 S3File 的任意 S3A 凭证提供程序 ([#11436](https://github.com/apache/seatunnel/pull/11436))
* [功能][文档] 添加 Zeta 繁忙度和背压指南 ([#11507](https://github.com/apache/seatunnel/pull/11507))
* [功能][Connector-V2] 支持 Elasticsearch 接收器的定时器刷新 ([#11505](https://github.com/apache/seatunnel/pull/11505))
* [功能][Connector-V2] 支持 Paimon 接收器 SaveMode 自动创建的 table_options ([#11418](https://github.com/apache/seatunnel/pull/11418))
* [功能][Connector-V2] 支持 Kingbase 的 JDBC 接收器 table_options ([#11420](https://github.com/apache/seatunnel/pull/11420))
* [功能][文件] 添加 pdf 解析器以支持 RAG ([#10105](https://github.com/apache/seatunnel/pull/10105))
* [功能][核心]添加连接试运行验证1 ([#11186](https://github.com/apache/seatunnel/pull/11186))
* [功能][Zeta] STIP-24 第 2 阶段：引入独立 SeaTunnel Edge Agent MVP 和 dist 集成 ([#10879](https://github.com/apache/seatunnel/pull/10879))
* [功能][Connector-V2] 支持 PostgreSQL 的 JDBC 接收器 table_options ([#11417](https://github.com/apache/seatunnel/pull/11417))
* [功能][连接器-V2] STIP-23 第 2 阶段：采用 JDBC 连接器进行引擎计时器刷新 ([#10801](https://github.com/apache/seatunnel/pull/10801))
* [功能][Connector-V2][Milvus] 支持标量字段写空 ([#11216](https://github.com/apache/seatunnel/pull/11216))
* [功能][Connector-V2]将 JDBC 接收器 table_options 扩展到 TiDB 和 OceanBase MySQL ([#11388](https://github.com/apache/seatunnel/pull/11388))
* [Feature][Connector-V2] PR2：支持 StarRocks SaveMode 自动创建的 table_options ([#11242](https://github.com/apache/seatunnel/pull/11242))
* [功能][Zeta] STIP-23 第 1 阶段：添加引擎计时器刷新核心流程和 FlushSignal 处理（[#10800](https://github.com/apache/seatunnel/pull/10800)）
* [功能][Connector-V2] 支持 Pulsar 连接器的 Avro 格式 ([#11230](https://github.com/apache/seatunnel/pull/11230))
* [功能][连接器-V2][Zendesk] 添加 Zendesk 源连接器 ([#11030](https://github.com/apache/seatunnel/pull/11030))
* [功能][Connector-V2] 每个连接器 Debezium 版本管理的基础（已阶段）（[#10799](https://github.com/apache/seatunnel/pull/10799)）
* [Feature][Transform-V2] 添加多表规则匹配模式 ([#11099](https://github.com/apache/seatunnel/pull/11099))
* [功能][Jdbc] 添加 YashanDB 方言和目录支持 ([#11187](https://github.com/apache/seatunnel/pull/11187))
* [功能][文档] 开发测试套件的技能和编码指南 ([#11212](https://github.com/apache/seatunnel/pull/11212))
* [功能][Connector-V2] PR1：将接收器表选项传递到自动创建的 MySQL 目标表中 ([#11101](https://github.com/apache/seatunnel/pull/11101))
* [功能][连接器-V2] 添加 Vitess CDC 源连接器 ([#11059](https://github.com/apache/seatunnel/pull/11059))
* [功能][Connector-V2] Maxcompute 源循环拆分分配 ([#11131](https://github.com/apache/seatunnel/pull/11131))
* [功能][Zeta] 通过 StateStore 抽象解耦 Hazelcast IMap ([#10812](https://github.com/apache/seatunnel/pull/10812))
* [功能][Transform-V2] 添加 Calcite SQL 转换插件 ([#11062](https://github.com/apache/seatunnel/pull/11062))
* [功能][Connector-V2] 添加 Google Cloud Bigtable Source 和 Sink con…（[#10849](https://github.com/apache/seatunnel/pull/10849)）
* [功能][Transform-V2] 添加 Base64 SQL 函数 ([#11114](https://github.com/apache/seatunnel/pull/11114))
* [Feature][Connector-V2] 支持 Pulsar sink 多表写入 ([#10670](https://github.com/apache/seatunnel/pull/10670))
* [功能][Connector-V2][CDC] 添加架构更改事件类型的包含/排除过滤 #11044 ([#11108](https://github.com/apache/seatunnel/pull/11108))
* [功能][Connector-V2] 为文件连接器添加 recursive_file_scan 选项 ([#10505](https://github.com/apache/seatunnel/pull/10505))
* [功能][API] 添加 EXTENSION 运算符以在 ConditionOperator 中进行可插入验证（[#11048](https://github.com/apache/seatunnel/pull/11048)）
* [功能][核心]支持监控Zeta引擎任务的繁忙程度([#10572](https://github.com/apache/seatunnel/pull/10572))
* [功能][Connector-V2][MongoDB-CDC]支持最新偏移量启动模式，无需初始快照（[#11053](https://github.com/apache/seatunnel/pull/11053)）
* [功能][连接器] 添加 Salesforce 源连接器 ([#10938](https://github.com/apache/seatunnel/pull/10938))
* [功能][连接器-V2] 添加 MQTT 源连接器 ([#10935](https://github.com/apache/seatunnel/pull/10935))
* [功能][Zeta] 报告非终端作业状态 ([#10133](https://github.com/apache/seatunnel/pull/10133))
* [功能][连接器文件]为所有文件格式添加模式演化支持（ADD/DROP/RENAME/UPDATE 列）（[#10744](https://github.com/apache/seatunnel/pull/10744)）
* [Feature][Core] 支持表级故障隔离，实现多表同步([#10600](https://github.com/apache/seatunnel/pull/10600))
* [功能][连接器] 添加 BigQuery 接收器连接器 ([#10485](https://github.com/apache/seatunnel/pull/10485))
* [功能][Connector-V2] 添加对 HTTP 源连接器的二进制格式支持 ([#10956](https://github.com/apache/seatunnel/pull/10956))
* [功能][Connector-V2][SqlServer CDC] 支持 sqlserver 架构演变 ([#10890](https://github.com/apache/seatunnel/pull/10890))
* [功能] 添加污点痕迹以进行数据沿袭和性能分析 ([#10491](https://github.com/apache/seatunnel/pull/10491))
* [功能][Zeta] STIP-24 第 1 阶段：支持边缘收集器 MVP 的轻量级 EdgeSocket 入口（[#10878](https://github.com/apache/seatunnel/pull/10878)）
* [功能][Connector-v2][Postgres-CDC]允许除完整副本身份之外的副本身份（[#10334](https://github.com/apache/seatunnel/pull/10334)）
* [功能][客户端] SeaTunnel REST API 的 Python SDK 客户端 ([#10184](https://github.com/apache/seatunnel/pull/10184))
* [功能][Connector-V2][Cassandra] 通过…添加多表源支持（[#10896](https://github.com/apache/seatunnel/pull/10896)）
* [功能][Connector-V2] 为文件源添加可选的 Markdown RAG 元数据 ([#10844](https://github.com/apache/seatunnel/pull/10844))
* [功能][CDC/JDBC] 添加选项以禁用基于采样的分片 ([#10604](https://github.com/apache/seatunnel/pull/10604))
* [Feature][Connector-V2][MaxCompute]支持Schema名称和无密码认证([#10831](https://github.com/apache/seatunnel/pull/10831))
* [功能][Connector-V2][RabbitMQ] 支持 RabbitMQ 源的多表读取 ([#10425](https://github.com/apache/seatunnel/pull/10425)) ([#10557](https://github.com/apache/seatunnel/pull/10557))
* [功能][Zeta] 通过渐进验证 Layer0 实现正确的试运行模式（[#10763](https://github.com/apache/seatunnel/pull/10763)）
* [Feature][Connector-V2][Pulsar] 支持 Pulsar 源的多表读取 ([#10425](https://github.com/apache/seatunnel/pull/10425)) ([#10825](https://github.com/apache/seatunnel/pull/10825))
* [功能] 支持使用 schema 配置定义任何嵌套数组和映射类型 ([#10396](https://github.com/apache/seatunnel/pull/10396))
* [功能] [Connectors-v2] 添加 Doris 接收器重定向增强功能 ([#10715](https://github.com/apache/seatunnel/pull/10715))
* [功能][E2E]添加MySQL CDC多库多表E2E测试([#10743](https://github.com/apache/seatunnel/pull/10743))
* [功能][JDBC] 为 JDBC Sink 基于时间的刷新添加batch_interval_ms 选项（[#10609](https://github.com/apache/seatunnel/pull/10609)）
* [功能][CDC] 公开 binlog 文件/位置/行、GTID 和 SourceTimestamp … ([#10667](https://github.com/apache/seatunnel/pull/10667))
* [功能][Connector-V2] 添加对 FTP/SFTP/Local/HDFS 文件源的持续发现 ([#10473](https://github.com/apache/seatunnel/pull/10473))
* [功能] [Zeta] 为运行时连接器元数据添加 /option-rules REST API ([#10585](https://github.com/apache/seatunnel/pull/10585))
* [功能] [连接器-V2] 添加 MQTT 接收器连接器 ([#10575](https://github.com/apache/seatunnel/pull/10575))
* [功能][Zeta]添加数据源 spi ([#10586](https://github.com/apache/seatunnel/pull/10586))
* [Feature][Connector-V2]支持RocketMQ源的多表读取([#10619](https://github.com/apache/seatunnel/pull/10619))
* [功能][Connector-V2] 添加对 AmazonDynamo 的多表接收器支持... ([#10497](https://github.com/apache/seatunnel/pull/10497))
* [功能][Zeta] 实现作业的强制停止功能 ([#10075](https://github.com/apache/seatunnel/pull/10075))
* [功能][Transform-V2] FieldEncrypt 支持 AES_GCM 算法 ([#10603](https://github.com/apache/seatunnel/pull/10603))
* [功能][转换] 通过 e2e/docs 更新添加 Zeta SQL UDF 上下文和生命周期挂钩 ([#10489](https://github.com/apache/seatunnel/pull/10489))
* [功能]添加 Kingbase 目录支持 ([#10427](https://github.com/apache/seatunnel/pull/10427))
* [功能][Connector-V2] 启用 S3File 源的文件分割 ([#10450](https://github.com/apache/seatunnel/pull/10450))
* [功能][Connectors-v2] 支持 Oracle 和 SQLServer CDC 的时间戳启动模式 ([#10428](https://github.com/apache/seatunnel/pull/10428))
* [功能][连接器-V2] 添加 Airtable 源和接收器 ([#10469](https://github.com/apache/seatunnel/pull/10469))
* [功能][文档]添加 Seatunnel 工具指南 ([#10525](https://github.com/apache/seatunnel/pull/10525))
* [功能][seatunnel-api] 将 Gravitino 集成为非关系连接器的元数据服务 ([#10402](https://github.com/apache/seatunnel/pull/10402))
* [功能][Transform-V2] 添加 FieldEncrypt 转换以加密选定的字段 ([#10361](https://github.com/apache/seatunnel/pull/10361))
* [功能][Connector-V2][Kafka] 添加对 Kafka 消息头的支持 ([#10335](https://github.com/apache/seatunnel/pull/10335))
* [改进] [API] 弃用表达式，转而使用条件 ([#11882](https://github.com/apache/seatunnel/pull/11882))
* [改进][Transform-V2] 将 FilterRowKind 验证迁移到 OptionRule ([#11763](https://github.com/apache/seatunnel/pull/11763))
* [改进][Connector-V2] 添加 Google Firestore 接收器的声明性验证 ([#12278](https://github.com/apache/seatunnel/pull/12278))
* [改进][Connector-V2] 将 S3 Redshift 验证迁移到声明式 OptionRule ([#12274](https://github.com/apache/seatunnel/pull/12274))
* [改进][Connector-V2] 将 BigQuery 验证迁移到声明式 OptionRule ([#12272](https://github.com/apache/seatunnel/pull/12272))
* [改进][Connector-V2] 添加对 RabbitMQ 的 protobuf 格式支持 ([#12244](https://github.com/apache/seatunnel/pull/12244))
* [改进][Zeta] 使作业详细概述具有响应性 ([#12259](https://github.com/apache/seatunnel/pull/12259))
* [改进][CI] 稳定工作流程运行检测 ([#11594](https://github.com/apache/seatunnel/pull/11594))
* [改进][Connector-V2] 使 Couchbase 接收器就绪超时可配置 ([#12168](https://github.com/apache/seatunnel/pull/12168))
* [改进][Connector-V2][文件] 验证任何文档 Markdown 交接 ([#11813](https://github.com/apache/seatunnel/pull/11813))
* [改进][Connector-V2] 在 AzureCosmosDB 枚举器中使用 HashUtils.bucketIndex ([#12049](https://github.com/apache/seatunnel/pull/12049))
* [改进][Zeta] 日志节点标签更改为之前的值 ([#12071](https://github.com/apache/seatunnel/pull/12071))
* [改进][Connector-V2] 添加 Druid 接收器选项的声明性验证 ([#12250](https://github.com/apache/seatunnel/pull/12250))
* [改进][Connector-V2] 验证非空 Lance 接收器选项 ([#12222](https://github.com/apache/seatunnel/pull/12222))
* [改进][Connector-V2][AmazonSqs] 将 URL 和区域验证迁移到声明式 notBlank ([#12217](https://github.com/apache/seatunnel/pull/12217))
* [改进][Zeta] 减少 ProtoStuff 模式查找中的锁争用 ([#12176](https://github.com/apache/seatunnel/pull/12176))
* [改进] 允许提交者绕过合并队列 ([#12198](https://github.com/apache/seatunnel/pull/12198))
* [改进][Connector-V2] 为所需的 Slack 选项添加非空白验证 ([#12178](https://github.com/apache/seatunnel/pull/12178))
* [改进][Connector-V2] 验证 Web3j 源 URL ([#12180](https://github.com/apache/seatunnel/pull/12180))
* [改进][Connector-V2] 验证 OpenMLDB SQL ([#12181](https://github.com/apache/seatunnel/pull/12181))
* [改进][Connector-V2] 验证 Typesense 连接选项 ([#12175](https://github.com/apache/seatunnel/pull/12175))
* [改进][Connector-V2]验证钉钉所需选项([#12170](https://github.com/apache/seatunnel/pull/12170))
* [改进][Connector-V2] 验证非空 DataHub 接收器选项 ([#12174](https://github.com/apache/seatunnel/pull/12174))
* [改进][Connector-V2] 验证非空 Sentry DSN ([#12148](https://github.com/apache/seatunnel/pull/12148))
* [改进][E2E] 验证多架构 Spark 映像构建 ([#11836](https://github.com/apache/seatunnel/pull/11836))
* [改进][Zeta] 返回失败消息，而不是 REST 错误的堆栈跟踪 ([#12070](https://github.com/apache/seatunnel/pull/12070))
* [改进][Zeta] 限制上传到 REST 服务器的配置文件的大小 ([#12072](https://github.com/apache/seatunnel/pull/12072))
* [改进][核心]警告 Base64 配置阴影不会加密任何内容 ([#12073](https://github.com/apache/seatunnel/pull/12073))
* [改进][核心] 添加可重用的配置验证结果 ([#12065](https://github.com/apache/seatunnel/pull/12065))
* [改进][Connector-V2][Aerospike] 将数据格式验证迁移到 OptionRule ([#12090](https://github.com/apache/seatunnel/pull/12090))
* [改进][基准]在比较报告中暴露 JMH CV 和错误 ([#12089](https://github.com/apache/seatunnel/pull/12089))
* [改进][Connector-V2] 将 HugeGraph 接收器验证迁移到 OptionRule ([#12075](https://github.com/apache/seatunnel/pull/12075))
* [改进][Connector-V2][Neo4j] 将配置验证迁移到 OptionRule ([#12047](https://github.com/apache/seatunnel/pull/12047))
* [改进][Connector-V2] 在 ES 连接器中使用 isEmpty() 代替 size() > 0 ([#11996](https://github.com/apache/seatunnel/pull/11996))
* [改进][Connector-V2][AmazonDynamoDB] 将最大重试验证迁移到 OptionRule ([#11821](https://github.com/apache/seatunnel/pull/11821))
* [改进][E2E][DB2] 将 Db2CDCIT wget 替换为 DependencyJar ([#12041](https://github.com/apache/seatunnel/pull/12041))
* [改进][Connector-V2][Prometheus] 将批量大小验证迁移到 OptionRule ([#11738](https://github.com/apache/seatunnel/pull/11738))
* [改进][通用]添加 HashUtils.bucketIndex 用于 hash-to-bucket 路由 ([#11987](https://github.com/apache/seatunnel/pull/11987))
* [改进][Connector-V2][Pulsar] 将验证迁移到声明式 OptionRule ([#11985](https://github.com/apache/seatunnel/pull/11985))
* [改进][Connector-V2][MongoDB] 将获取大小验证迁移到声明式 OptionRule ([#11886](https://github.com/apache/seatunnel/pull/11886))
* [改进][Connector-V2][文件] 将 HDFS 和 S3 接收器验证迁移到声明式 OptionRule ([#11881](https://github.com/apache/seatunnel/pull/11881))
* [改进][Connector-V2] 将 ActiveMQ 验证迁移到 OptionRule ([#12004](https://github.com/apache/seatunnel/pull/12004))
* [改进][Zeta] 在 LogService 中用 StringBuilder 替换本地 StringBuffer ([#11992](https://github.com/apache/seatunnel/pull/11992))
* [改进][Zeta] 在作业信息 REST 中公开作业/管道重启和状态转换信号（[#11982](https://github.com/apache/seatunnel/pull/11982)）
* [改进][CI] 优化合并队列回退和文档 ([#11970](https://github.com/apache/seatunnel/pull/11970))
* [改进][Connector-V2][HBase] 将时间戳验证迁移到 OptionRule ([#11803](https://github.com/apache/seatunnel/pull/11803))
* [改进][E2E] PaimonWithS3IT 中的绑定作业执行，因此挂起的作业会快速失败 ([#11718](https://github.com/apache/seatunnel/pull/11718))
* [改进][Connector-V2][Iceberg]将配置验证迁移到声明式 OptionRule ([#11921](https://github.com/apache/seatunnel/pull/11921))
* [改进][Connector-V2] 将 Cassandra 验证迁移到声明式 OptionRule ([#11964](https://github.com/apache/seatunnel/pull/11964))
* [改进][Connector-V2][Prometheus] 刷新检查点上的缓冲记录以缩小 Spark/Flink 计时器刷新间隙 ([#11827](https://github.com/apache/seatunnel/pull/11827))
* [改进][E2E] 重新平衡连接器集成测试碎片 ([#11791](https://github.com/apache/seatunnel/pull/11791))
* [改进][Connector-V2] 将 Markdown RAG 元数据与 Knowledge Sync 对齐 ([#11740](https://github.com/apache/seatunnel/pull/11740))
* [改进][核心]改进配置日志脱敏覆盖率([#11811](https://github.com/apache/seatunnel/pull/11811))
* [改进][Connector-V2] 在 Oracle 连接器中添加对 INTERVAL 数据类型的支持 ([#11825](https://github.com/apache/seatunnel/pull/11825))
* [改进][Connector-V2] 通过 SampleRowKeys 拆分 Bigtable 源以进行并行读取 ([#11876](https://github.com/apache/seatunnel/pull/11876))
* [改进][Transform-V2] 统一重复为 BigDecimal 助手 ([#11918](https://github.com/apache/seatunnel/pull/11918))
* [改进][Connector-V2][Doris] 支持 DROP_DATA 分区清理 ([#11917](https://github.com/apache/seatunnel/pull/11917))
* [改进][CI] Harden 专用全连接器碎片防护装置 ([#11828](https://github.com/apache/seatunnel/pull/11828))
* [改进][Connector-V2] 改进 Easysearch、AmazonDynamoDB、TiDB CDC 和 Typesense 的源拆分循环分配 ([#11607](https://github.com/apache/seatunnel/pull/11607))
* [改进][Connector-V2][RabbitMQ] 将源配置验证迁移到 OptionRule ([#11795](https://github.com/apache/seatunnel/pull/11795))
* [改进][Connector-V2] 删除 Doris 连接器中冗余的命令式验证 ([#11858](https://github.com/apache/seatunnel/pull/11858))
* [改进][E2E] 使用 DependencyJar 进行 MySQL 错误测试 ([#11904](https://github.com/apache/seatunnel/pull/11904))
* [改进][E2E] 通过 Maven 解决容器依赖关系 ([#11572](https://github.com/apache/seatunnel/pull/11572))
* [改进][CI] 同步工作流程作业的构建检查 ([#11840](https://github.com/apache/seatunnel/pull/11840))
* [改进][Connector-V2] 验证 Databend JDBC URL ([#11831](https://github.com/apache/seatunnel/pull/11831))
* [改进][Connector-V2] 将 IoTDBv2 SQL 方言验证迁移到 OptionRule ([#11839](https://github.com/apache/seatunnel/pull/11839))
* [改进][Connector-V2][Iceberg] 将 OptionRule 与文档对齐并加强工厂测试 ([#11675](https://github.com/apache/seatunnel/pull/11675))
* [改进][Connector-V2] 将电子邮件验证迁移到声明式 OptionRule ([#11817](https://github.com/apache/seatunnel/pull/11817))
* [改进][CI] 重复数据删除专用全连接器分片 ([#11291](https://github.com/apache/seatunnel/pull/11291))
* [改进][E2E] 添加多架构 Spark 测试图像 ([#11664](https://github.com/apache/seatunnel/pull/11664))
* [改进][Connector-V2][文件] 每个子任务解析一次 Hadoop 配置，而不是每个输出文件解析一次 ([#11661](https://github.com/apache/seatunnel/pull/11661))
* [改进][Connector-V2][Airtable] 添加抖动到速率限制退避 ([#11654](https://github.com/apache/seatunnel/pull/11654))
* [改进][Connector-V2] Guard POI Excel 按文件大小读取 ([#11591](https://github.com/apache/seatunnel/pull/11591))
* [改进][CLI] 添加条件路由技能、PostgreSQL-CDC 先决条件和宽 DAG 接线规则 ([#11659](https://github.com/apache/seatunnel/pull/11659))
* [改进][E2E] 使用动态容器端口映射 ([#11574](https://github.com/apache/seatunnel/pull/11574))
* [改进][E2E] 隔离长时间运行的连接器测试 ([#11762](https://github.com/apache/seatunnel/pull/11762))
* [改进][CI] 并行磁盘清理以缩短 E2E 设置 ([#11528](https://github.com/apache/seatunnel/pull/11528))
* [改进][Connector-V2] 按文档 id 分割路由 Markdown 文件源 ([#10964](https://github.com/apache/seatunnel/pull/10964))
* [改进][核心]通过 HTTPS 下载连接器插件
* [改进][Connector-V2] 改进 InfluxDB IoTDB Kudu 和 TDengine 的源拆分循环分配 ([#11573](https://github.com/apache/seatunnel/pull/11573))
* [改进][CI] 分叉更改的范围后端矩阵 ([#11290](https://github.com/apache/seatunnel/pull/11290))
* [改进][Connector-V2][文件] 优化sync_mode=update 的文件发现和更新比较 ([#11312](https://github.com/apache/seatunnel/pull/11312))
* [改进][CI] 保留所需的构建，而无需在开发上严格同步（[#11540](https://github.com/apache/seatunnel/pull/11540)）
* [改进][CI] 在合并到开发之前需要进行构建检查（[#11532](https://github.com/apache/seatunnel/pull/11532)）
* [改进][Connector-V2]改进YashanDB向量类型转换([#11397](https://github.com/apache/seatunnel/pull/11397))
* [改进][Connector-V2] 强化 Google Bigtable 源端状态同步 ([#11144](https://github.com/apache/seatunnel/pull/11144))
* [改进][Connector-V2][SftpFile] 推迟二进制文件发现 ([#11377](https://github.com/apache/seatunnel/pull/11377))
* [改进][Connector-V2] 添加声明性控制台接收器延迟验证（[#11477](https://github.com/apache/seatunnel/pull/11477)）
* [改进][Connector-V2] 验证 Milvus 水槽批量大小 ([#11504](https://github.com/apache/seatunnel/pull/11504))
* [改进][Zeta] 抽象检查点 ID 计数器状态存储 ([#11229](https://github.com/apache/seatunnel/pull/11229))
* [改进][connector-elasticsearchv2]优化 Elasticsearch 源代码... ([#10446](https://github.com/apache/seatunnel/pull/10446))
* [改进][Zeta] 添加 RequestSlotOperation 可观测性指标 ([#11409](https://github.com/apache/seatunnel/pull/11409))
* [改进][Connector-V2] 将 EdgeSocket 验证迁移到声明式 OptionRule ([#11384](https://github.com/apache/seatunnel/pull/11384))
* [改进][文档]改进 Kubernetes 部署指南 ([#11375](https://github.com/apache/seatunnel/pull/11375))
* [改进][Connector-V2] 为 Bigtable 源检查添加行级简历… ([#11359](https://github.com/apache/seatunnel/pull/11359))
* [改进][Connector-V2] 将 Kafka Source 命令式验证迁移到声明式 OptionRule ([#11157](https://github.com/apache/seatunnel/pull/11157))
* [改进][Connector-V2][Socket] 将 Socket Sink 验证迁移到声明式 OptionRule ([#11214](https://github.com/apache/seatunnel/pull/11214))
* [改进][Zeta] 从 IMAP 持久性中排除运行时指标快照 ([#11244](https://github.com/apache/seatunnel/pull/11244))
* [改进][Connector-V2] 使用 AutoService 优化 Arrow Converter SPI 注册 ([#11219](https://github.com/apache/seatunnel/pull/11219))
* [改进][文档]优化http连接器源码相关文档([#11282](https://github.com/apache/seatunnel/pull/11282))
* [改进][Connector-V2] 将 Redis 验证迁移到声明式 OptionRule ([#11225](https://github.com/apache/seatunnel/pull/11225))
* [改进][文档] 弃用 JDBC 表前缀和后缀选项 ([#11176](https://github.com/apache/seatunnel/pull/11176))
* [改进][Transform-V2][嵌入]增强多模态嵌入 ([#9996](https://github.com/apache/seatunnel/pull/9996))
* [改进][Transform-V2] 将转换验证迁移到声明式 OptionRule ([#11095](https://github.com/apache/seatunnel/pull/11095))
* [改进][Connector-V2] 将 RocketMQ 源验证迁移到声明式 OptionRule ([#11158](https://github.com/apache/seatunnel/pull/11158))
* [改进][Connector-V2] 将 Elasticsearch 验证迁移到声明式 OptionRule ([#11122](https://github.com/apache/seatunnel/pull/11122))
* [改进][Connector-V2][Redis] 将 OptionRule 与文档和重复数据删除配置验证对齐 ([#11195](https://github.com/apache/seatunnel/pull/11195))
* [改进][Zeta] 添加 ReportMetricsOperation 可观察性导出 ([#11104](https://github.com/apache/seatunnel/pull/11104))
* [改进][Transform-V2] 提高嵌入模型调用可靠性 ([#10863](https://github.com/apache/seatunnel/pull/10863))
* [改进][核心]支持 CLI 中的转换和值约束选项规则 ([#11109](https://github.com/apache/seatunnel/pull/11109))
* [改进][Connector-V2] 将 jdbc 验证迁移到声明式 OptionRule ([#11106](https://github.com/apache/seatunnel/pull/11106))
* [改进][引擎]修复引擎UT片状测试([#11000](https://github.com/apache/seatunnel/pull/11000))
* [改进][connector-elasticsearch]改进了elasticsearch源枚举器分割子任务的分配算法([#10869](https://github.com/apache/seatunnel/pull/10869))
* [改进][Transform-v2] 修复transform-v2 UT 片状测试 ([#11001](https://github.com/apache/seatunnel/pull/11001))
* [改进][Zeta] 添加逻辑状态存储可观测性指标 ([#11024](https://github.com/apache/seatunnel/pull/11024))
* [改进][API] 允许独占/捆绑选项与可选值约束共存 ([#11022](https://github.com/apache/seatunnel/pull/11022))
* [改进][Connector-V2] 增强 JDBC 块分割器日志记录 ([#10950](https://github.com/apache/seatunnel/pull/10950))
* [改进][API] 为配置选项添加地图条件验证器... ([#11010](https://github.com/apache/seatunnel/pull/11010))
* [改进][Checkpoint] 为 CheckpointCoordinator 生命周期添加 Javadoc ([#10555](https://github.com/apache/seatunnel/pull/10555))
* [改进][文档] 修复 Kafka 连接器文档错误 ([#11006](https://github.com/apache/seatunnel/pull/11006))
* [改进][Connector-V2][Jdbc]支持Oracle追加值插入模式([#10996](https://github.com/apache/seatunnel/pull/10996))
* [改进][e2e] 提高redis e2e测试e2e的稳定性([#10989](https://github.com/apache/seatunnel/pull/10989))
* [改进][e2e] 提高 Kudu e2e 测试 e2e 的稳定性 ([#10971](https://github.com/apache/seatunnel/pull/10971))
* [改进][e2e] 提高 sftp e2e 测试 e2e 的稳定性 ([#10972](https://github.com/apache/seatunnel/pull/10972))
* [改进][Connector-V2] 将 kudu-client 从 1.11.1 升级到 1.15.0 ([#10974](https://github.com/apache/seatunnel/pull/10974))
* [改进][connector-elasticsearch-v2] 添加 Elasticsearch 源的切片支持和 e2e 覆盖 ([#10454](https://github.com/apache/seatunnel/pull/10454))
* [改进][e2e] 提高 Kafka e2e 测试的稳定性 ([#10946](https://github.com/apache/seatunnel/pull/10946))
* [改进][connector-starrocks] 改进了 starrocks 源枚举器分割子任务的分配算法 ([#10867](https://github.com/apache/seatunnel/pull/10867))
* [改进][CI] 添加 CI 将步骤超时更改为 20m ([#10947](https://github.com/apache/seatunnel/pull/10947))
* [改进][e2e] 稳定 jdbc e2e 断言并等待﻿ ([#10937](https://github.com/apache/seatunnel/pull/10937))
* [改进][e2e] 在引擎 e2e 测试中禁用 HTTP 服务器以修复不稳定的测试 ([#10940](https://github.com/apache/seatunnel/pull/10940))
* [改进][CI] 添加连接器 dist 注册完整性检查 ([#10895](https://github.com/apache/seatunnel/pull/10895))
* [改进][Zeta] 通过增强的日志记录改进运行状况指标检索和解析 ([#10673](https://github.com/apache/seatunnel/pull/10673))
* [改进][文档] 更新 docker-compose 集群设置以使用服务名称发现 ([#10716](https://github.com/apache/seatunnel/pull/10716))
* [改进][CI]优化更改作业引擎模块计算([#10783](https://github.com/apache/seatunnel/pull/10783))
* [改进][connector-milvus] 改进了 milvus 源枚举器拆分子任务的分配算法 ([#10868](https://github.com/apache/seatunnel/pull/10868))
* [改进] [Zeta] 添加引擎状态存储的可观测性指标 ([#10860](https://github.com/apache/seatunnel/pull/10860))
* [改进][Zeta] 重构协调器执行器创建并修复故障转移生命周期问题 ([#10865](https://github.com/apache/seatunnel/pull/10865))
* [改进][Connector-V2][JDBC]添加字符串分割策略([#10861](https://github.com/apache/seatunnel/pull/10861))
* [改进][connector-clickhouse]改进了clickhouse源枚举器分割子任务的分配算法（[#10866](https://github.com/apache/seatunnel/pull/10866)）
* [改进][文档] 添加最低部署配置并澄清 Zeta 分离集群指南中的备份计数 N 定义 ([#10854](https://github.com/apache/seatunnel/pull/10854))
* [改进][MySQL-CDC] 增强恢复过程中丢失 binlog 和 GTID 的诊断 ([#10566](https://github.com/apache/seatunnel/pull/10566))
* [改进][变换]替换变换以支持基于数组的replace_fields ([#10712](https://github.com/apache/seatunnel/pull/10712))
* [改进] 文件源重构 ([#10758](https://github.com/apache/seatunnel/pull/10758))
* [改进][Api] 将数据源 SPI 升级为元数据 SPI ([#10657](https://github.com/apache/seatunnel/pull/10657))
* [改进][Connector-v2][文件] HadoopFileSystemProxy 中文件和目录操作的错误处理 ([#10433](https://github.com/apache/seatunnel/pull/10433))
* [改进][Connector-V2][starrocks-source] 改进源在打开失败时不关闭读卡器 ([#10292](https://github.com/apache/seatunnel/pull/10292))
* [改进][seatunnel core][seatunnel-flink-start] 改进 Flink Yarn 应用程序的打包并上传 'runtime.tar.gz' 文件 ([#10419](https://github.com/apache/seatunnel/pull/10419))
* [改进][Connectors-v2] [ORC]在文件级别而不是字段级别解析配置（[#10759](https://github.com/apache/seatunnel/pull/10759)）
* [改进][Zeta] 改进引擎服务器本地 IDE 启动体验 ([#10742](https://github.com/apache/seatunnel/pull/10742))
* [改进][文档]修复 hive 文档错误 ([#10769](https://github.com/apache/seatunnel/pull/10769))
* [改进][CI] 优化更新构建状态工作流程 ([#10689](https://github.com/apache/seatunnel/pull/10689))
* [改进][文档] Iceberg 连接器添加了与 Kerberos 身份验证相关的参数文档 ([#10704](https://github.com/apache/seatunnel/pull/10704))
* [改进][Zeta] 增强通过 RESTful API 提交任务的异常日志记录 ([#10696](https://github.com/apache/seatunnel/pull/10696))
* [改进][Connector-V2] RocketMQ 源和接收器的完整 OptionRule 声明 ([#10701](https://github.com/apache/seatunnel/pull/10701))
* [改进][API] 避免依赖 getSinkTables() 中 keySet 和值之间的索引对齐 ([#10665](https://github.com/apache/seatunnel/pull/10665))
* [改进] 更新 apache SeaTunnel 协作者 ([#10656](https://github.com/apache/seatunnel/pull/10656))
* [改进][测试]修复拼写错误([#10650](https://github.com/apache/seatunnel/pull/10650))
* [改进][文档]澄清 snapshot.split.column 唯一键要求 ([#10312](https://github.com/apache/seatunnel/pull/10312))
* [改进][Connectors-v2] 使用 Factory 重构 Slack 接收器来创建实例 ([#10514](https://github.com/apache/seatunnel/pull/10514))
* [改进][Connectors-v2] 文件接收器重构 ([#10587](https://github.com/apache/seatunnel/pull/10587))
* [改进][核心]支持嵌套选项验证([#10592](https://github.com/apache/seatunnel/pull/10592))
* [Improve][Zeta] 优化 MultipleTableJobConfigParser 的构造方法 ([#10564](https://github.com/apache/seatunnel/pull/10564))
* [改进] [文档] 完善架构描述并避免文件名歧义 ([#10550](https://github.com/apache/seatunnel/pull/10550))
* [改进][Transform-V2] 为 PARSEDATETIME/TO_DATE 中的日期时间格式模式添加基于白名单的验证 ([#10360](https://github.com/apache/seatunnel/pull/10360))
* [改进][Flink]支持多重并行并从 API 中删除特定于 flink 的逻辑 ([#10107](https://github.com/apache/seatunnel/pull/10107))
* [改进][Connectors-v2] 添加对读卡器重新注册后重新发送 NoMoreSplitsEvent 信号的支持 ([#10208](https://github.com/apache/seatunnel/pull/10208))

## 文档

* [文档][Connector-V2] 改进 Jdbc LocalFile SftpFile SqlServer-CDC 和 Opengauss-CDC 连接器文档 ([#11761](https://github.com/apache/seatunnel/pull/11761))
* [文档][Connector-V2] 改进 Aerospike Feishu Mysql GraphQL 和 Prometheus 连接器文档 ([#11794](https://github.com/apache/seatunnel/pull/11794))
* [文档] 重构 Zeta 基准测试指南 ([#12213](https://github.com/apache/seatunnel/pull/12213))
* [文档] 添加性能贡献指南 ([#12214](https://github.com/apache/seatunnel/pull/12214))
* [文档][Connector-V2] 改进 InfluxDB Greenplum Mqtt 和 Aerospike 连接器文档 ([#11722](https://github.com/apache/seatunnel/pull/11722))
* [文档][Connector-V2] 改进 RabbitMQ Milvus 和电子邮件连接器文档 ([#12155](https://github.com/apache/seatunnel/pull/12155))
* [文档] 文档 S3File 凭证提供程序对容器环境的支持 ([#11871](https://github.com/apache/seatunnel/pull/11871))
* [文档][Connector-V2] 改进 Datahub Socket Web3j 和 ActiveMQ 连接器文档 ([#11788](https://github.com/apache/seatunnel/pull/11788))
* [文档][Connector-V2] 改进 IoTDB Kafka Maxcompute OceanBase 和 Oracle 连接器文档 ([#11800](https://github.com/apache/seatunnel/pull/11800))
* [文档][示例] 将批处理 MySQL 添加到 HDFS 分区 Parquet 示例 ([#11953](https://github.com/apache/seatunnel/pull/11953))
* [文档] 添加 JMH 和 Zeta 基准架构 ([#12062](https://github.com/apache/seatunnel/pull/12062))
* [文档] 添加 Zeta 运行缓慢故障排除手册 ([#11870](https://github.com/apache/seatunnel/pull/11870))
* [文档][核心] 将 Javadoc 添加到 SinkFlowLifeCycle ([#11903](https://github.com/apache/seatunnel/pull/11903))
* [文档] 将多表编写器和副本选择文档与 MultiTableSinkWriter 对齐（[#11925](https://github.com/apache/seatunnel/pull/11925)）
* [文档][Zeta] 添加运行时执行图设计 ([#11612](https://github.com/apache/seatunnel/pull/11612))
* [文档][Connector-V2] 改进 Fluss Milvus Redshift S3-Redshift 和 Vitess-CDC 连接器文档 ([#11793](https://github.com/apache/seatunnel/pull/11793))
* [文档] 修复 README 中的 ASF 行为准则链接 ([#11915](https://github.com/apache/seatunnel/pull/11915))
* [文档] 澄清 Zeta Web UI 范围 ([#11853](https://github.com/apache/seatunnel/pull/11853))
* [文档][Connector-V2] 改进 Hive Elasticsearch Mysql 和 SqlServer 连接器文档 ([#11719](https://github.com/apache/seatunnel/pull/11719))
* [文档][Connector-V2]改进 Milvus Prometheus GraphQL Feishu 和 Fluss 连接器文档 ([#11728](https://github.com/apache/seatunnel/pull/11728))
* [文档][Connector-V2] 改进 Pulsar TDengine HugeGraph AmazonSqs 和 BigQuery 连接器文档 ([#11736](https://github.com/apache/seatunnel/pull/11736))
* [文档][Connector-V2] 改进 Hbase Airtable Cassandra Databend 和 Phoenix 连接器文档 ([#11799](https://github.com/apache/seatunnel/pull/11799))
* [文档][Connector-V2] 改进 Doris IoTDBv2 Paimon SensorsData 和 StarRocks 连接器文档 ([#11796](https://github.com/apache/seatunnel/pull/11796))
* [文档][Connector-V2] 改进 Greenplum Mqtt 和 SqlServer 连接器文档 ([#11798](https://github.com/apache/seatunnel/pull/11798))
* [文档][Connector-V2] 澄清 Kafka avro 格式与 Confluence Schema 注册表 ([#11706](https://github.com/apache/seatunnel/pull/11706))
* [文档][Connector-V2] 文档 PostgreSQL/Opengauss CDC stop.mode;使 Opengauss 的启动模式与 PostgreSQL 保持一致 ([#11707](https://github.com/apache/seatunnel/pull/11707))
* [文档][Connector-V2] 改进 OssFile OssJindoFile CosFile ObsFile 和 LocalFile 连接器文档 ([#11786](https://github.com/apache/seatunnel/pull/11786))
* [文档][Connector-V2] 改进 Kafka IoTDB OceanBase Oracle 和 PostgreSQL 连接器文档 ([#11753](https://github.com/apache/seatunnel/pull/11753))
* [文档][Connector-V2] 改进 MongoDB 连接器文档 ([#11776](https://github.com/apache/seatunnel/pull/11776))
* [文档][Connector-V2] 改进 GoogleBigtable GoogleFirestore Lance Typesense 和 Assert 连接器文档 ([#11751](https://github.com/apache/seatunnel/pull/11751))
* [文档][Connector-V2] 改进 ActiveMQ Web3j Sls Socket 和 EdgeSocket 文档 ([#11575](https://github.com/apache/seatunnel/pull/11575))
* [文档][Connector-V2] 改进钉钉 Slack Sentry GoogleSheets 和 OpenMldb 连接器文档 ([#11692](https://github.com/apache/seatunnel/pull/11692))
* [文档][Connector-V2] 改进 Phoenix Enterprise-WeChat Tablestore 和 Zendesk 连接器文档 ([#11698](https://github.com/apache/seatunnel/pull/11698))
* [文档][Connector-V2] 改进 Cassandra Hbase Maxcompute Neo4j 和 Qdrant 连接器文档 ([#11711](https://github.com/apache/seatunnel/pull/11711))
* [文档][Connector-V2] 改进 DuckDB HiveJdbc Vitess-CDC Redshift 和 S3-Redshift 连接器文档 ([#11745](https://github.com/apache/seatunnel/pull/11745))
* [文档] 支持机器人不确定性分析出现的文档差距 ([#11748](https://github.com/apache/seatunnel/pull/11748))
* [文档][Connector-V2] 改进控制台 DB2 Snowflake FakeSource 和 TiDB-CDC 连接器文档 ([#11756](https://github.com/apache/seatunnel/pull/11756))
* [文档][Connector-V2] 改进 S3File HdfsFile FtpFile CosFile 和 ObsFile 连接器文档 ([#11764](https://github.com/apache/seatunnel/pull/11764))
* [文档][Connector-V2] 改进 MongoDB CDC 连接器文档 ([#11731](https://github.com/apache/seatunnel/pull/11731))
* [文档][Connector-V2] 改进 Hudi 接收器文档 ([#11701](https://github.com/apache/seatunnel/pull/11701))
* [文档] 添加 Zeta 作业提交流程图 ([#11628](https://github.com/apache/seatunnel/pull/11628))
* [文档][Connector-V2] 改进 Databend 连接器文档 ([#11687](https://github.com/apache/seatunnel/pull/11687))
* [文档][Connector-V2] 改进电子邮件接收器文档 ([#11683](https://github.com/apache/seatunnel/pull/11683))
* [文档][Connector-V2] 改进 Airtable Github Gitlab Notion 和 OneSignal 连接器文档 ([#11699](https://github.com/apache/seatunnel/pull/11699))
* [文档][Zeta] 澄清 REST API v2 仅限 Zeta 以及文档暂停/恢复/删除 ([#11680](https://github.com/apache/seatunnel/pull/11680))
* [Docs][Zeta] 添加运行时日志诊断指南 ([#11629](https://github.com/apache/seatunnel/pull/11629))
* [文档][Jdbc] 阐明 MariaDB 驱动程序配置 ([#11604](https://github.com/apache/seatunnel/pull/11604))
* [文档][Connector-V2] 改进 S3File SftpFile 和 StarRocks 文档 ([#11326](https://github.com/apache/seatunnel/pull/11326))
* 文档：添加 Windows 本地部署指南 ([#11603](https://github.com/apache/seatunnel/pull/11603))
* [文档][CLI] 将“自己运行基准测试”部分添加到 AI CLI 基准测试页面 ([#11605](https://github.com/apache/seatunnel/pull/11605))
* [Docs][Connector-V2] 完整的中文文件连接器选项 ([#11469](https://github.com/apache/seatunnel/pull/11469))
* [文档] 阐明本地部署源构建指南 ([#11596](https://github.com/apache/seatunnel/pull/11596))
* [文档] 添加第二优先级常见问题解答指南 ([#11590](https://github.com/apache/seatunnel/pull/11590))
* [文档] 澄清 Zeta REST API 和 Web UI 文档 ([#11578](https://github.com/apache/seatunnel/pull/11578))
* [文档] 添加接收器写入模式指导 ([#11589](https://github.com/apache/seatunnel/pull/11589))
* [文档] 修复 LLM 转换文档中的 OpenAI 死链接 ([#11582](https://github.com/apache/seatunnel/pull/11582))
* [文档][Zeta] 添加计时器驱动的水槽冲洗文档 ([#11566](https://github.com/apache/seatunnel/pull/11566))
* [文档][Zeta] 更新 JVM 和 Kubernetes 资源建议 ([#11552](https://github.com/apache/seatunnel/pull/11552))
* [文档][CLI] 添加 AI CLI 文档部分（概述、快速入门、设计、模型基准）([#11551](https://github.com/apache/seatunnel/pull/11551))
* [文档][Connector-V2] 修复 StarRocks CREATE TABLE 链接 ([#11520](https://github.com/apache/seatunnel/pull/11520))
* [文档] 改进 JDBC 源指南 ([#11491](https://github.com/apache/seatunnel/pull/11491))
* [文档] 将 MySQL CDC 添加到 Elasticsearch 场景配方 ([#11480](https://github.com/apache/seatunnel/pull/11480))
* [文档] 通过经过验证的快速启动改进 JDBC 接收器指南 ([#11483](https://github.com/apache/seatunnel/pull/11483))
* [文档] 将 PostgreSQL CDC 添加到 Iceberg 场景配方 ([#11482](https://github.com/apache/seatunnel/pull/11482))
* [文档] 添加 JDBC 到 JDBC 迁移配方 ([#11490](https://github.com/apache/seatunnel/pull/11490))
* [文档][Connector-V2] 改进警报和 API 连接器文档 ([#11383](https://github.com/apache/seatunnel/pull/11383))
* [文档][Connector-V2] 改进 OceanBase 连接器文档 ([#11385](https://github.com/apache/seatunnel/pull/11385))
* [文档] 将经过验证的 MySQL CDC 添加到 Kafka 配方和 E2E 覆盖范围 ([#11466](https://github.com/apache/seatunnel/pull/11466))
* [文档] 填写环境配置概述 ([#11468](https://github.com/apache/seatunnel/pull/11468))
* [文档] 添加嵌套 JSON 和矢量转换的转换配方 ([#11424](https://github.com/apache/seatunnel/pull/11424))
* [文档][Connector-V2] 阐明连接器选项要求 ([#11411](https://github.com/apache/seatunnel/pull/11411))
* [文档][Connector-V2] 改进 InfluxDB Snowflake 和 Cloudberry 文档 ([#11348](https://github.com/apache/seatunnel/pull/11348))
* [文档][Connector-V2] 澄清 Hive Metastore 同步对 Hudi 接收器的支持 ([#11400](https://github.com/apache/seatunnel/pull/11400))
* [文档][Connector-V2] 改进 Tablestore 连接器文档 ([#11379](https://github.com/apache/seatunnel/pull/11379))
* [文档] 重命名 zh 场景食谱 ([#11391](https://github.com/apache/seatunnel/pull/11391))
* [文档][Connector-V2] 改进 Notion 源文档 ([#11378](https://github.com/apache/seatunnel/pull/11378))
* [文档][Connector-V2] 改进飞书接收器文档 ([#11373](https://github.com/apache/seatunnel/pull/11373))
* [文档][Connector-V2] 改进控制台接收器文档 ([#11376](https://github.com/apache/seatunnel/pull/11376))
* [文档][Connector-V2] 改进 SqlServer CDC FtpFile 和 HdfsFile 文档 ([#11325](https://github.com/apache/seatunnel/pull/11325))
* [文档][Connector-V2] 改进 ClickHouse Redis 和 Prometheus 文档 ([#11331](https://github.com/apache/seatunnel/pull/11331))
* [文档][Connector-V2] 改进 DB2 Kingbase 和 Vertica 文档 ([#11361](https://github.com/apache/seatunnel/pull/11361))
* [文档][Connector-V2] 改进 Google Bigtable 连接器文档 ([#11371](https://github.com/apache/seatunnel/pull/11371))
* [文档][Connector-V2] 改进 Jira Klaviyo 和 Lemlist 文档 ([#11369](https://github.com/apache/seatunnel/pull/11369))
* [文档][Connector-V2] 改进 IoTDBv2 连接器文档 ([#11368](https://github.com/apache/seatunnel/pull/11368))
* [文档][Connector-V2] 改进 MySQL Oracle 和 SQL Server 文档 ([#11367](https://github.com/apache/seatunnel/pull/11367))
* [文档][Connector-V2] 改进 Hive Doris 和 Elasticsearch 文档 ([#11349](https://github.com/apache/seatunnel/pull/11349))
* [文档][Connector-V2] 改进 BigQuery Firestore 和 GraphQL 文档 ([#11350](https://github.com/apache/seatunnel/pull/11350))
* [文档][Connector-V2] 改进 RocketMQ Milvus 和 Qdrant 文档 ([#11360](https://github.com/apache/seatunnel/pull/11360))
* [文档][Connector-V2] 改进 Greenplum 连接器文档 ([#11362](https://github.com/apache/seatunnel/pull/11362))
* [文档][Connector-V2] 改进 Aerospike DynamoDB 和 SQS 文档 ([#11343](https://github.com/apache/seatunnel/pull/11343))
* [文档][Connector-V2] 改进 Neo4j Oracle CDC 和 Druid 文档 ([#11342](https://github.com/apache/seatunnel/pull/11342))
* [文档][Connector-Jdbc] 将 YashanDB 添加到 JDBC 源/接收器文档 ([#11363](https://github.com/apache/seatunnel/pull/11363))
* [文档][Connector-V2] 改进 TDengine RocketMQ 和 DataHub 文档 ([#11346](https://github.com/apache/seatunnel/pull/11346))
* [文档] 澄清 JDBC 主键占位符行为 ([#11295](https://github.com/apache/seatunnel/pull/11295))
* [文档][Connector-V2] 改进 Cassandra HBase 和 Kudu 文档 ([#11347](https://github.com/apache/seatunnel/pull/11347))
* [文档][Connector-V2] 改进 HugeGraph Qdrant 和 Milvus 文档 ([#11329](https://github.com/apache/seatunnel/pull/11329))
* [文档][Connector-V2] 改进 RabbitMQ RocketMQ 和 MQTT 文档 ([#11344](https://github.com/apache/seatunnel/pull/11344))
* [文档][Connector-V2] 改进 SensorsData Web3j 和 Easysearch 文档 ([#11334](https://github.com/apache/seatunnel/pull/11334))
* [文档][Connector-V2] 改进 Airtable Github 和 Gitlab 文档 ([#11345](https://github.com/apache/seatunnel/pull/11345))
* [文档][Connector-V2] 改进 ActiveMQ Sls 和 Typesense 文档 ([#11333](https://github.com/apache/seatunnel/pull/11333))
* [文档][Connector-V2] 改进 Maxcompute IoTDB 和 Fluss 文档 ([#11341](https://github.com/apache/seatunnel/pull/11341))
* [文档][Connector-V2] 改进 Druid GraphQL 和 Hive 文档 ([#11327](https://github.com/apache/seatunnel/pull/11327))
* [文档][Connector-V2] 改进 TDengine Lance 和 Firestore 文档 ([#11332](https://github.com/apache/seatunnel/pull/11332))
* [文档][Connector-V2] 改进 Aerospike DynamoDB 和 SQS 文档 ([#11336](https://github.com/apache/seatunnel/pull/11336))
* [文档][Connector-V2] 改进 Iceberg Kafka 和 Socket 文档 ([#11335](https://github.com/apache/seatunnel/pull/11335))
* [文档][Connector-V2] 改进 MongoDB OpenGauss 和 PostgreSQL CDC 文档 ([#11324](https://github.com/apache/seatunnel/pull/11324))
* [文档][Connector-V2] 改进 Paimon MQTT 和 Redis 文档 ([#11310](https://github.com/apache/seatunnel/pull/11310))
* [文档][Connector-V2] 改进 ActiveMQ AmazonDynamoDB 和 AmazonSqs 文档 ([#11302](https://github.com/apache/seatunnel/pull/11302))
* [文档][Connector-V2] 改进 HugeGraph Kafka 和 OssFile 文档 ([#11296](https://github.com/apache/seatunnel/pull/11296))
* [文档][Connector-V2] 改进 EdgeSocket FakeSource 和 Fluss 文档 ([#11315](https://github.com/apache/seatunnel/pull/11315))
* [文档][Connector-V2] 改进 Cassandra DataHub 和 Easysearch 文档 ([#11314](https://github.com/apache/seatunnel/pull/11314))
* [文档][Connector-V2] 改进 Qdrant Firestore 和 IoTDB 文档 ([#11313](https://github.com/apache/seatunnel/pull/11313))
* [文档] 关于 SeaTunnel 架构图的更新 ([#11311](https://github.com/apache/seatunnel/pull/11311))
* [文档][Connector-V2] 改进 MySQL Oracle 和 TiDB CDC 文档 ([#11322](https://github.com/apache/seatunnel/pull/11322))
* [文档][Connector-V2] 改进电子邮件 Prometheus 和 Pulsar 文档 ([#11321](https://github.com/apache/seatunnel/pull/11321))
* [文档][Connector-V2] 改进 CosFile LocalFile 和 ObsFile 文档 ([#11320](https://github.com/apache/seatunnel/pull/11320))
* [文档][Connector-V2] 改进 ClickHouse Databend 和 Doris 文档 ([#11318](https://github.com/apache/seatunnel/pull/11318))
* [文档][Connector-V2] 改进 Kudu RocketMQ 和 Http 文档 ([#11317](https://github.com/apache/seatunnel/pull/11317))
* [文档][Connector-V2] 改进 InfluxDB Jdbc 和 MongoDB 文档 ([#11308](https://github.com/apache/seatunnel/pull/11308))
* [文档][Connector-V2] 改进 Elasticsearch Hbase 和 Milvus 文档 ([#11319](https://github.com/apache/seatunnel/pull/11319))
* [文档][Connector-V2] 改进 Aerospike 断言和 BigQuery 文档 ([#11323](https://github.com/apache/seatunnel/pull/11323))
* [文档][Connector-V2] 改进 Aerospike BigQuery 和 Druid 文档 ([#11297](https://github.com/apache/seatunnel/pull/11297))
* [文档][Connector-V2] 改进电子邮件 Databend 和 FtpFile 文档 ([#11298](https://github.com/apache/seatunnel/pull/11298))
* [文档][Connector-V2] 改进断言 ClickHouse 和 Doris 文档 ([#11299](https://github.com/apache/seatunnel/pull/11299))
* [文档][Connector-V2] 改进 Elasticsearch HdfsFile 和 Hive 文档 ([#11300](https://github.com/apache/seatunnel/pull/11300))
* [文档][Connector-V2] 改进 GraphQL 连接器文档 ([#11265](https://github.com/apache/seatunnel/pull/11265))
* [文档][Connector-V2] 改进 Easysearch IoTDB 和 Hudi 文档 ([#11294](https://github.com/apache/seatunnel/pull/11294))
* [文档][Connector-V2] 改进 HBase Web3j 和 MaxCompute 文档 ([#11293](https://github.com/apache/seatunnel/pull/11293))
* [文档][Connector-V2] 改进 DataHub Firestore 和 TDengine 文档 ([#11292](https://github.com/apache/seatunnel/pull/11292))
* [文档][Connector-V2] 改进 Redis 接收器文档 ([#11305](https://github.com/apache/seatunnel/pull/11305))
* [文档][Connector-V2] 改进 SLS 连接器文档 ([#11288](https://github.com/apache/seatunnel/pull/11288))
* [文档][Connector-V2] 改进 Prometheus 连接器文档 ([#11287](https://github.com/apache/seatunnel/pull/11287))
* [文档][Connector-V2] 改进 Qdrant 连接器文档 ([#11285](https://github.com/apache/seatunnel/pull/11285))
* [文档][Connector-V2] 改进 Amazon DynamoDB 连接器文档 ([#11284](https://github.com/apache/seatunnel/pull/11284))
* [文档][Connector-V2] 改进 Pulsar 连接器文档 ([#11283](https://github.com/apache/seatunnel/pull/11283))
* [文档][Connector-V2] 改进 RocketMQ 连接器文档 ([#11272](https://github.com/apache/seatunnel/pull/11272))
* [文档][Connector-V2] 改进 Amazon SQS 连接器文档 ([#11270](https://github.com/apache/seatunnel/pull/11270))
* [文档][Connector-V2] 改进 InfluxDB 连接器文档 ([#11268](https://github.com/apache/seatunnel/pull/11268))
* [文档][Connector-V2] 改进 MQTT 接收器文档 ([#11267](https://github.com/apache/seatunnel/pull/11267))
* [文档][Connector-V2] 改进 Cassandra 连接器文档 ([#11266](https://github.com/apache/seatunnel/pull/11266))
* [文档][Connector-V2] 改进 ActiveMQ 接收器文档 ([#11263](https://github.com/apache/seatunnel/pull/11263))
* [文档][Connector-V2] 改进 Lance 连接器文档 ([#11262](https://github.com/apache/seatunnel/pull/11262))
* [文档][Connector-V2] 改进 Neo4j 连接器文档 ([#11261](https://github.com/apache/seatunnel/pull/11261))
* [文档][Connector-V2] 改进 Typesense 连接器文档 ([#11259](https://github.com/apache/seatunnel/pull/11259))
* [文档][Connector-V2] 改进 Milvus 连接器文档 ([#11254](https://github.com/apache/seatunnel/pull/11254))
* [文档][Connector-V2] 改进 RabbitMQ 连接器文档 ([#11246](https://github.com/apache/seatunnel/pull/11246))
* [文档][Connector-V2] 改进 Druid 连接器文档 ([#11255](https://github.com/apache/seatunnel/pull/11255))
* [文档][Connector-V2] 改进 Prometheus 连接器文档 ([#11253](https://github.com/apache/seatunnel/pull/11253))
* [文档][Connector-V2] 改进 Aerospike 水槽示例 ([#11241](https://github.com/apache/seatunnel/pull/11241))
* [文档][Connector-V2] 改进 Qdrant 连接器文档 ([#11252](https://github.com/apache/seatunnel/pull/11252))
* [文档] 改进电子邮件连接器示例 ([#11245](https://github.com/apache/seatunnel/pull/11245))
* [文档][Connector-V2] 改进 Redis 源示例 ([#11240](https://github.com/apache/seatunnel/pull/11240))
* [文档] 修复连接器文档链接 ([#11217](https://github.com/apache/seatunnel/pull/11217))
* [文档] 修复 Jira API 令牌指南链接 ([#11183](https://github.com/apache/seatunnel/pull/11183))
* [文档][Connector-V2] STIP-23 第 3 阶段：向所有接收器连接器文档添加计时器刷新功能标志 ([#10802](https://github.com/apache/seatunnel/pull/10802))
* [文档] 修复不一致的转换文档 ([#11197](https://github.com/apache/seatunnel/pull/11197))
* [文档] 改进新用户入门流程 ([#11152](https://github.com/apache/seatunnel/pull/11152))
* [Docs] 修复中文引擎架构页面渲染问题 ([#11164](https://github.com/apache/seatunnel/pull/11164))
* [文档] 添加第一份工作条目和入门食谱 ([#11058](https://github.com/apache/seatunnel/pull/11058))
* [文档] 更新 CNCF 横向许可证链接 ([#11149](https://github.com/apache/seatunnel/pull/11149))
* [文档] 修复 zh JVM 调优指南链接 ([#11135](https://github.com/apache/seatunnel/pull/11135))
* [文档] 波兰 Pulsar 接收器路由模式文档 ([#11146](https://github.com/apache/seatunnel/pull/11146))
* [文档] 修复 Pulsar 源获取拼写错误 ([#11145](https://github.com/apache/seatunnel/pull/11145))
* [文档] 修复默认引擎语法 ([#11147](https://github.com/apache/seatunnel/pull/11147))
* [文档] 修复 IMap 持久语法 ([#11148](https://github.com/apache/seatunnel/pull/11148))
* [文档] 当前文档的波兰架构概述图 ([#11124](https://github.com/apache/seatunnel/pull/11124))
* [文档] 添加 zh DynamicCompile Scala 示例 ([#11130](https://github.com/apache/seatunnel/pull/11130))
* [文档] 修复 Kafka 源示例文本 ([#11119](https://github.com/apache/seatunnel/pull/11119))
* [文档] 修复 RocketMQ 转换链接 ([#11118](https://github.com/apache/seatunnel/pull/11118))
* [文档] 修复 Typesense 接收器常见选项链接 ([#11111](https://github.com/apache/seatunnel/pull/11111))
* [文档][核心] 将 Javadoc 添加到 TaskExecutionService 内部类 ([#10691](https://github.com/apache/seatunnel/pull/10691))
* 文档：添加多表转换能力边界指南（[#10985](https://github.com/apache/seatunnel/pull/10985)）
* [文档] 澄清 REST API 默认值并添加连接器故障排除手册 ([#11035](https://github.com/apache/seatunnel/pull/11035))
* [文档]修复文档链接 ([#11033](https://github.com/apache/seatunnel/pull/11033))
* [文档] 本地化 zh 转换标题和摘要 ([#11070](https://github.com/apache/seatunnel/pull/11070))
* [文档] 修复 zeta 引擎 jar 存储拼写错误 ([#11066](https://github.com/apache/seatunnel/pull/11066))
* [文档] 修复 Http 源代码围栏 ([#11064](https://github.com/apache/seatunnel/pull/11064))
* 文档：添加将作业提交到远程 Zeta 集群 (Docker/K8s/EKS) 的指南 ([#10984](https://github.com/apache/seatunnel/pull/10984))
* [文档] 将常见问题解答部分添加到连接器页面 (EN + zh-CN) ([#10980](https://github.com/apache/seatunnel/pull/10980))
* 文档：添加 REST API 作业生命周期说明书 ([#10983](https://github.com/apache/seatunnel/pull/10983))
* 文档：添加 CDC 生产手册以实现完全同步和增量同步 (P0-2) ([#10982](https://github.com/apache/seatunnel/pull/10982))
* 文档：添加 Zeta 状态存储和恢复指南 (P0-1) ([#10981](https://github.com/apache/seatunnel/pull/10981))
* [文档] 添加连接器常见问题解答编写指南 ([#11018](https://github.com/apache/seatunnel/pull/11018))
* [文档] 修复连接器常见变更日志中的无效问题链接 ([#10936](https://github.com/apache/seatunnel/pull/10936))
* [文档][Zeta] 修复 slot-allocation-strateg 中不正确的配置键名称... ([#10892](https://github.com/apache/seatunnel/pull/10892))
* [文档] 修复贡献者指南无效链接 ([#10875](https://github.com/apache/seatunnel/pull/10875))
* [文档] 改进中文文档页面标题 ([#10796](https://github.com/apache/seatunnel/pull/10796))
* [文档] 重新组织 SeaTunnel 入门和架构文档 ([#10785](https://github.com/apache/seatunnel/pull/10785))
* [文档][API] 将 Javadoc 添加到 MultiTableSinkWriter ([#10577](https://github.com/apache/seatunnel/pull/10577))
* [Docs][Connector-V2][Jdbc] 澄清查询模式下的保存模式限制 ([#10737](https://github.com/apache/seatunnel/pull/10737))
* [文档][Zeta] 澄清 OSS 检查点存储桶 URI 格式 ([#10741](https://github.com/apache/seatunnel/pull/10741))
* [文档][核心] 将 Javadoc 添加到 SupportResourceShare 和 MultiTableResourceManager ([#10707](https://github.com/apache/seatunnel/pull/10707))
* [文档] 修复文档中的 404 个损坏的链接 ([#10728](https://github.com/apache/seatunnel/pull/10728))
* [文档][核心] 将 Javadoc 添加到 CoordinatorService 调度和 HA 流程 ([#10719](https://github.com/apache/seatunnel/pull/10719))
* [文档] 更正 zh 文档中的关键功能 ([#10713](https://github.com/apache/seatunnel/pull/10713))
* [文档] 修复 RocketMQ 连接器文档错误 ([#10683](https://github.com/apache/seatunnel/pull/10683))
* [文档][核心] 将 Javadoc 添加到 MultiTableSink ([#10639](https://github.com/apache/seatunnel/pull/10639))
* [文档] SeaTunnel Engine 快速启动的单独本地和集群指南 ([#10663](https://github.com/apache/seatunnel/pull/10663))
* [文档]：用 Seatunnelhub/openjdk:8u342 替换已弃用的 openjdk:8 ([#10644](https://github.com/apache/seatunnel/pull/10644))
* [文档][核心] 将 Javadoc 添加到 SeaTunnelTask（状态机和生命周期）（[#10559](https://github.com/apache/seatunnel/pull/10559)）
* [文档][核心] 将 Javadoc 添加到 SourceFlowLifeCycle ([#10552](https://github.com/apache/seatunnel/pull/10552))
* [文档] 从设计理念中删除未来方向部分（[#10556](https://github.com/apache/seatunnel/pull/10556)）
* [文档][架构] 添加架构文档 ([#10429](https://github.com/apache/seatunnel/pull/10429))
* [文档] 添加 LLM 贡献指南 ([#10411](https://github.com/apache/seatunnel/pull/10411))

## 错误修复

* [修复][Zeta] 清理空的检查点屏障计数器 ([#12260](https://github.com/apache/seatunnel/pull/12260))
* [修复][CI] 将 minio/minio 测试容器切换到 quay.io 镜像 ([#12287](https://github.com/apache/seatunnel/pull/12287))
* [修复][Connector-V2] 在 ClickHouse 接收器语句中保留偏移时间戳 ([#12285](https://github.com/apache/seatunnel/pull/12285))
* [修复][CI] 删除无效的构建规则集源 pin ([#12291](https://github.com/apache/seatunnel/pull/12291))
* [修复][Zeta] 通过执行上下文隔离任务清理 ([#12238](https://github.com/apache/seatunnel/pull/12238))
* [修复][CDC][Zeta] 故障转移后从检查点恢复运行时模式 ([#11503](https://github.com/apache/seatunnel/pull/11503))
* [修复][CI]使规则集绕过覆盖完整合并门（[#12289](https://github.com/apache/seatunnel/pull/12289)）
* [修复][核心]在 Flink 和 Spark 启动器中传播转换生命周期 ([#12263](https://github.com/apache/seatunnel/pull/12263))
* [修复][CDC] 重建缺失的快照完成水印并始终等待检查点 ([#12162](https://github.com/apache/seatunnel/pull/12162))
* [修复][Connector-V2] 接受主键作为快照分割列 ([#11979](https://github.com/apache/seatunnel/pull/11979))
* [修复][Connector-V2] 修复 Postgres-CDC 提交偏移量恢复在保存点之后跳过行的问题 ([#11864](https://github.com/apache/seatunnel/pull/11864))
* [修复][Connector-V2] 尊重 Oracle 快照选择覆盖 ([#11768](https://github.com/apache/seatunnel/pull/11768))
* [修复][Connector-V2][JDBC] 将 where_condition 应用于 JDBC 拆分元数据查询 ([#12160](https://github.com/apache/seatunnel/pull/12160))
* [修复][Transform-V2] 当 CAST 浮点数转换为 DECIMAL 时保留精确的二进制值 ([#11523](https://github.com/apache/seatunnel/pull/11523))
* [修复][Transform-V2] 支持小整数 MOD 除数 ([#12215](https://github.com/apache/seatunnel/pull/12215))
* [修复][Transform-V2] 使重命名转换大小写转换区域设置独立 ([#11994](https://github.com/apache/seatunnel/pull/11994))
* [Fix][API] 修复当主键哈希为 Integer.MIN_VALUE 时负队列索引 ([#11721](https://github.com/apache/seatunnel/pull/11721))
* [修复][Zeta] 添加已完成作业端点的回归测试 ([#11818](https://github.com/apache/seatunnel/pull/11818))
* [修复][Zeta] 忽略重复的架构更改检查点完成 ([#12150](https://github.com/apache/seatunnel/pull/12150))
* [修复][Connector-V2] 完成连接器分发注册 ([#12249](https://github.com/apache/seatunnel/pull/12249))
* [修复][Transform-V2] 尊重 Amazon 嵌入重试选项 ([#12193](https://github.com/apache/seatunnel/pull/12193))
* [修复][Connector-V2] 从 Aerospike 和 SLS 接收器返回目录表 ([#12234](https://github.com/apache/seatunnel/pull/12234))
* [修复][CI] 使用 SeaTunnel 公共团队进行合并队列旁路 ([#12229](https://github.com/apache/seatunnel/pull/12229))
* [修复][Zeta] 在主故障转移后重用固定插槽 ([#11458](https://github.com/apache/seatunnel/pull/11458))
* [修复][CI] 修复合并队列绕过 actor ([#12219](https://github.com/apache/seatunnel/pull/12219))
* [Fix][Connector-V2][JDBC][SapHana] 在目录转换中添加 NCHAR 类型支持 ([#12158](https://github.com/apache/seatunnel/pull/12158))
* [修复][Connector-V2][JDBC] 当近似行数不可用时使用范围回退 ([#12159](https://github.com/apache/seatunnel/pull/12159))
* [修复][Connector-V2][JDBC][DB2]在目录中读取默认值作为字符串（[#12157](https://github.com/apache/seatunnel/pull/12157)）
* [修复][Connector-V2] 对 Slack 消息使用 OAuth 令牌 ([#12171](https://github.com/apache/seatunnel/pull/12171))
* [修复][Connector-V2] 传播 JDBC XA 提交失败 ([#11569](https://github.com/apache/seatunnel/pull/11569))
* [Fix][Connector-V2] 修复跨读取边界的文件内容比较 ([#12080](https://github.com/apache/seatunnel/pull/12080))
* [修复][Zeta] 添加遥测启动死锁回归的 E2E 覆盖范围 (apache/seatunnel#10840) ([#12133](https://github.com/apache/seatunnel/pull/12133))
* [修复][Zeta] 传播中断的挂起作业插入 ([#12052](https://github.com/apache/seatunnel/pull/12052))
* [修复][Connector-V2][AmazonSqs] 使用连接器错误代码包装 JSON 解析失败 ([#12085](https://github.com/apache/seatunnel/pull/12085))
* [修复][Connector-V2] 保留 HTTP 源 JSON 正文 ([#11535](https://github.com/apache/seatunnel/pull/11535))
* [修复][Connector-V2][AmazonSqs] 支持多行 CDC 反序列化 ([#12084](https://github.com/apache/seatunnel/pull/12084))
* [修复][Zeta] 稳定 CI 测试隔离 ([#12050](https://github.com/apache/seatunnel/pull/12050))
* [修复][Connector-V2][AmazonSqs] 在反序列化失败时保留消息 ([#12038](https://github.com/apache/seatunnel/pull/12038))
* [修复][Connector-Kafka] 在提交 e2e 作业之前预热 Kafka 主题以避免主题准备就绪 ([#11835](https://github.com/apache/seatunnel/pull/11835))
* [修复][格式][Protobuf] 支持空架构注册表有效负载 ([#12039](https://github.com/apache/seatunnel/pull/12039))
* [修复][核心]不对零字节行的字节率限制器收费([#11766](https://github.com/apache/seatunnel/pull/11766))
* [Fix][Connector-V2]删除AssertSinkWriter关闭中的固定睡眠并仅断言自己的表（[#11995](https://github.com/apache/seatunnel/pull/11995)）
* [修复][格式] 在序列化期间保留 Avro 字段大小写 ([#12009](https://github.com/apache/seatunnel/pull/12009))
* [修复][Transform-V2] 使 SQL 大小写转换区域设置独立 ([#11951](https://github.com/apache/seatunnel/pull/11951))
* [修复][Transform-V2] 处理 Zeta SQL 数值函数中的 TINYINT 和 SMALLINT ([#11937](https://github.com/apache/seatunnel/pull/11937))
* [修复][Zeta] 避免协调器启动期间指标失败 ([#11991](https://github.com/apache/seatunnel/pull/11991))
* [修复][Zeta] 稳定待处理的作业调度程序回归测试 ([#12013](https://github.com/apache/seatunnel/pull/12013))
* [修复][Zeta] 修复模式优先的多表接收器指标 ([#12001](https://github.com/apache/seatunnel/pull/12001))
* [修复][Connector-V2]支持YashanDB VARCHAR2和NVARCHAR2类型转换([#11874](https://github.com/apache/seatunnel/pull/11874))
* [修复][Zeta] 使作业状态解析区域设置独立 ([#11894](https://github.com/apache/seatunnel/pull/11894))
* [修复][Zeta] 存储连接器 jar 文件时关闭 FileOutputStream ([#11993](https://github.com/apache/seatunnel/pull/11993))
* [修复][Zeta] 将节点指标与全局注册表隔离（[#11492](https://github.com/apache/seatunnel/pull/11492)）
* [修复][Zeta] 任务部署失败后释放类加载器 ([#11812](https://github.com/apache/seatunnel/pull/11812))
* [修复][Connector-V2] 保留 MongoDB CDC 快照失败原因 ([#11880](https://github.com/apache/seatunnel/pull/11880))
* [Fix][Connector-V2][InfluxDB] 修复查询返回空结果时的 NPE ([#11966](https://github.com/apache/seatunnel/pull/11966))
* [Fix][Zeta] 修复未定义的作业事件超时常量 ([#11954](https://github.com/apache/seatunnel/pull/11954))
* [修复][Connector-V2][文件] 修复 Parquet INT96 写入大写字段的问题 ([#10943](https://github.com/apache/seatunnel/pull/10943))
* [修复][E2E] 解决 CI 稳定的后续审核问题 ([#11097](https://github.com/apache/seatunnel/pull/11097))
* [修复][E2E] 稳定 Paimon 不兼容的模式测试 ([#11608](https://github.com/apache/seatunnel/pull/11608))
* [修复][Zeta] 避免故障转移后重复的挂起作业调度 ([#11653](https://github.com/apache/seatunnel/pull/11653))
* [修复][格式] 刷新混合精度的 JSON 时间戳格式化程序 ([#11264](https://github.com/apache/seatunnel/pull/11264))
* [修复][Zeta] 修复 DOING_SAVEPOINT 中保存点停止挂起的问题 ([#11489](https://github.com/apache/seatunnel/pull/11489))
* [修复][Connector-V2] 保留 SQL Server CDC 恢复偏移量 ([#11410](https://github.com/apache/seatunnel/pull/11410))
* [修复][Connector-V2] 支持 Redis 接收器中的架构演变 ([#11646](https://github.com/apache/seatunnel/pull/11646))
* [修复][CI]修复升级兼容性工作流程设置 ([#11611](https://github.com/apache/seatunnel/pull/11611))
* [修复][Connector-V2] 转发 SQL Server JDBC URL 属性 ([#11674](https://github.com/apache/seatunnel/pull/11674))
* [修复][Connector-V2] 包含 MongoDB 分片键元数据 ([#11599](https://github.com/apache/seatunnel/pull/11599))
* [修复][Connector-V2][Jdbc] 在重用之前验证缓存的连接 ([#11678](https://github.com/apache/seatunnel/pull/11678))
* [修复][Connector-V2] 修复 CDC 注释架构更改事件路由 ([#11837](https://github.com/apache/seatunnel/pull/11837))
* [修复][Connector-V2][Jdbc] 保留 MySQL 和 PostgreSQL TIME 小数精度 ([#11891](https://github.com/apache/seatunnel/pull/11891))
* [Fix][Transform-V2][DataValidator] 标准化 RANGE 规则中的数字范围以修复 ClassCastException ([#11920](https://github.com/apache/seatunnel/pull/11920))
* [修复][Connector-V2] 使 Python 源关闭测试具有确定性 ([#11906](https://github.com/apache/seatunnel/pull/11906))
* [修复][CI] 在死链接检查中忽略 docs.starrocks.io ([#11640](https://github.com/apache/seatunnel/pull/11640))
* [修复][E2E] 从 DB2 CDC PR 中拆分不相关的连接器 CI 修复 ([#10925](https://github.com/apache/seatunnel/pull/10925))
* [修复][Connector-V2] 保留 ORC 嵌套字段情况 ([#11428](https://github.com/apache/seatunnel/pull/11428))
* [修复][Transform-V2] 支持小数范围边界 ([#11855](https://github.com/apache/seatunnel/pull/11855))
* [修复][Connector-V2] 在多表接收器中共享 Elasticsearch REST 客户端 ([#11567](https://github.com/apache/seatunnel/pull/11567))
* [修复][Connector-V2] Pulsar 源中支持文本格式 ([#11792](https://github.com/apache/seatunnel/pull/11792))
* [修复][Connector-V2] 注销重置时 FTP 列表不会失败 ([#11695](https://github.com/apache/seatunnel/pull/11695))
* [修复][Connector-V2] 修复 MongoDB 读取器光标清理 ([#11887](https://github.com/apache/seatunnel/pull/11887))
* [Fix][Connector-V2] 修复 TiDB CDC 删除反序列化问题 ([#11223](https://github.com/apache/seatunnel/pull/11223))
* [修复][CI] 重试并协调 fork 构建状态 ([#11888](https://github.com/apache/seatunnel/pull/11888))
* [Fix][Transform-V2] 修复 DECIMAL 算术精度损失和除法舍入 ([#11724](https://github.com/apache/seatunnel/pull/11724))
* [修复][Connector-V2][Neo4j] 即使关闭失败，也要关闭会话和驱动程序 ([#11750](https://github.com/apache/seatunnel/pull/11750))
* [修复][Connector-V2] 接受 Milvus 接收器 JSON 字段中的任何 JSON 根 ([#11526](https://github.com/apache/seatunnel/pull/11526))
* [修复][CI] 添加fail-fast: false 到 backend.yml 矩阵作业 ([#11873](https://github.com/apache/seatunnel/pull/11873))
* [修复][Connector-V2]修复 cdc 中字段乱序的问题 ([#11826](https://github.com/apache/seatunnel/pull/11826))
* [修复][Connector-V2]滚动文件时关闭 Parquet 和 ORC 编写器 ([#11832](https://github.com/apache/seatunnel/pull/11832))
* [修复][Zeta] LogUtil.getLogPath 在 fileAppender br 中使用错误的变量… ([#11820](https://github.com/apache/seatunnel/pull/11820))
* [修复][Connector-V2] 强化针对 XXE 的 XML 文件解析 ([#11250](https://github.com/apache/seatunnel/pull/11250))
* [修复][Docker] 停止未重定位的 openGauss 驱动程序劫持 PostgreSQL 连接 ([#11522](https://github.com/apache/seatunnel/pull/11522))
* [修复][Connector-V2]每次拆分后关闭 JDBC 源读取事务 ([#11770](https://github.com/apache/seatunnel/pull/11770))
* [修复][Connector-V2] 修复 Kafka 一次接收器在检查点丢失第一条记录的问题 ([#11541](https://github.com/apache/seatunnel/pull/11541))
* [修复][Connector-CDC] 实现 MySQL CDC stop.mode = "specic" (bounded read) ([#11618](https://github.com/apache/seatunnel/pull/11618))
* [Fix][Connector-V2] 删除 ParquetWriteStrategy 中无法访问的 LocalTimestampMillisConversion
* [Fix][Transform-V2] 修复 Zeta SQL 数字函数中的静默值损坏 ([#11697](https://github.com/apache/seatunnel/pull/11697))
* [修复][Shade] 在 Seatunnel-hadoop-aws 中重新定位 Jackson 以匹配 uber jar ([#11673](https://github.com/apache/seatunnel/pull/11673))
* [修复][Connector-V2] 将小数位数设置为 Doris 1.x 接受的范围 ([#11690](https://github.com/apache/seatunnel/pull/11690))
* [修复][CLI] 在路由验证中包含转换块并无条件运行它 ([#11658](https://github.com/apache/seatunnel/pull/11658))
* [修复][Connector-V2] 将阴影 Doris thrift-service 升级到 1.0.1 ([#11703](https://github.com/apache/seatunnel/pull/11703))
* [修复][E2E] 让 Iceberg 创建目录 ([#11670](https://github.com/apache/seatunnel/pull/11670))
* [修复][CI] 在 CI 中隔离 Hazelcast 测试端口范围 ([#11630](https://github.com/apache/seatunnel/pull/11630))
* [Fix][Connector-V2][File] 关闭 AbstractReadStrategy 中的 GZ 输入流 ([#10532](https://github.com/apache/seatunnel/pull/10532))
* [修复][Connector-V2]修复fluss-connector的sink writer问题([#11116](https://github.com/apache/seatunnel/pull/11116))
* [Fix][Connector-V2][JDBC] 修复使用多个扩展属性获取 SQL Server 元数据时出现重复列错误 ([#11374](https://github.com/apache/seatunnel/pull/11374))
* [修复][Connector-V2] 修复 Paimon 流枚举器检查点竞争 ([#11392](https://github.com/apache/seatunnel/pull/11392))
* [修复][核心]从 Spark 启动器中排除 Scala 类 ([#11393](https://github.com/apache/seatunnel/pull/11393))
* [修复][Connector-V2] 阻止 TiDB CDC 前进到慢速区域 ([#11407](https://github.com/apache/seatunnel/pull/11407))
* [修复][Connector-V2]防止 Kafka 事务清理循环 ([#11588](https://github.com/apache/seatunnel/pull/11588))
* [修复][Connector-V2] 等待 Kudu 客户端关闭 ([#11585](https://github.com/apache/seatunnel/pull/11585))
* [修复][Zeta] 处理恢复期间丢失的检查点状态 ([#11565](https://github.com/apache/seatunnel/pull/11565))
* [修复][Connector-V2]正确处理 BigQuery 追加偏移冲突 ([#11561](https://github.com/apache/seatunnel/pull/11561))
* [修复][Zeta] 防止中间队列指标出现负值 ([#11498](https://github.com/apache/seatunnel/pull/11498))
* [修复][API] 在计时器刷新期间遵守多表失败策略 ([#11537](https://github.com/apache/seatunnel/pull/11537))
* [修复][Connector-V2] 使用记录的 Snake_case 键解析 ClickhouseFile node_pass ([#11525](https://github.com/apache/seatunnel/pull/11525))
* [Fix][Connector-V2] 修复 FE 重定向速度慢时 Doris 流加载 waitForContinue 超时 ([#11330](https://github.com/apache/seatunnel/pull/11330))
* [修复][Connector-V2][MySQL CDC] 使用检查点偏移进行时间戳启动恢复 ([#10987](https://github.com/apache/seatunnel/pull/10987))
* [修复][E2E] Elasticsearch]隔离 MySQL 网络别名以进行配方测试 ([#11546](https://github.com/apache/seatunnel/pull/11546))
* [修复][Zeta] 稳定不稳定的 Java 8 单元测试 ([#11542](https://github.com/apache/seatunnel/pull/11542))
* [修复][CLI] 修复基岩兼容性：温度抑制和引擎模板变量 ([#11509](https://github.com/apache/seatunnel/pull/11509))
* [修复][Zeta] 修复浮点指标为 NaN 时作业信息 REST API 失败的问题 ([#11517](https://github.com/apache/seatunnel/pull/11517))
* [修复][Zeta][E2E] 修复 CI 故障和不稳定的连接器测试 ([#11531](https://github.com/apache/seatunnel/pull/11531))
* [Fix][Zeta] 修复 IMap 文件数据比较契约 ([#11465](https://github.com/apache/seatunnel/pull/11465))
* [修复][Zeta] 在没有全图清理扫描的情况下清理失败的管道指标（[#10757](https://github.com/apache/seatunnel/pull/10757)）
* [修复][Connector-V2] 修复嵌套批处理异常的 JDBC 接收器重新连接 ([#10793](https://github.com/apache/seatunnel/pull/10793))
* [修复][Connector-V2] 关闭所有 JDBC 目录连接 ([#11133](https://github.com/apache/seatunnel/pull/11133))
* [修复][核心]修复 Spark 集群配置查找 ([#11366](https://github.com/apache/seatunnel/pull/11366))
* [修复][Zeta] 在集群启动脚本中设置 SeaTunnel 主目录 ([#10786](https://github.com/apache/seatunnel/pull/10786))
* [Fix][Connector-V2] 修复 MongoDB CDC 缺少操作类型处理 ([#11208](https://github.com/apache/seatunnel/pull/11208))
* [修复][Connector-V2] 修复 BigQuery CDC 序列号编码 ([#11488](https://github.com/apache/seatunnel/pull/11488))
* [修复][Connector-V2]防止静默 StarRocks 批量数据丢失 ([#11431](https://github.com/apache/seatunnel/pull/11431))
* [修复][Connector-V2][Zeta] 解决 Hive S3、JDBC、指标和文档 CI 故障 ([#11459](https://github.com/apache/seatunnel/pull/11459))
* [修复][E2E] 稳定不稳定的引擎测试 ([#11457](https://github.com/apache/seatunnel/pull/11457))
* [修复][E2E] 稳定片状连接器 E2E 测试 ([#11456](https://github.com/apache/seatunnel/pull/11456))
* [修复][Zeta] CleanLogOperation 在分离集群模式下接收 jobId=0 ([#10797](https://github.com/apache/seatunnel/pull/10797))
* [修复][Connector-V2][Kafka] 修复：反转 commit_on_checkpoint… ([#10320](https://github.com/apache/seatunnel/pull/10320))
* [修复][Connector-V2][Socket] 修复 SocketSourceReader.pollNext() 中套接字过早关闭的问题 ([#10529](https://github.com/apache/seatunnel/pull/10529))
* [修复][Connector-V2][JDBC] 对稀疏空行使用 Oracle 类型的空绑定 ([#10768](https://github.com/apache/seatunnel/pull/10768))
* [Fix][seatunnel-common,seatunnel-core] 修复包含逗号的普通变量解析 ([#11427](https://github.com/apache/seatunnel/pull/11427))
* [修复][Connector-V2] 排除 postgresql 连接器中删除的列 ([#11358](https://github.com/apache/seatunnel/pull/11358))
* [Fix][Connector-V2] 修复 TiDB CDC 静默行事件在解决时丢失... ([#11113](https://github.com/apache/seatunnel/pull/11113))
* [修复][Connector-V2] 在架构更改之前刷新 Doris 加载 ([#11156](https://github.com/apache/seatunnel/pull/11156))
* [修复][Zeta] 使完成的作业 API 能够容忍丢失历史数据 ([#11269](https://github.com/apache/seatunnel/pull/11269))
* [修复][Zeta] 修复 updateTaskExecutionState 中的 JobNotFoundException ([#10506](https://github.com/apache/seatunnel/pull/10506))
* [修复][核心]扩展serialVersionUID检查器覆盖范围([#11257](https://github.com/apache/seatunnel/pull/11257))
* [修复][Zeta] 忽略未知的表架构更改 ([#11328](https://github.com/apache/seatunnel/pull/11328))
* [修复][Connector-V2] 使用连接器类加载器运行 Kafka 清理 ([#11178](https://github.com/apache/seatunnel/pull/11178))
* [修复][Connector-V2] 保持套接字读取器流打开 ([#11134](https://github.com/apache/seatunnel/pull/11134))
* [修复][Transform-V2] 解析自定义 LLM 数组字符串响应 ([#11235](https://github.com/apache/seatunnel/pull/11235))
* [修复][Connector-V2] 使用连接器类加载器运行 Pulsar 清理 ([#11170](https://github.com/apache/seatunnel/pull/11170))
* [修复][Connector-V2] 支持 Kafka Avro writer schema ([#11303](https://github.com/apache/seatunnel/pull/11303))
* [修复][Connector-V2] 跳过 MongoDB CDC 心跳记录 ([#11065](https://github.com/apache/seatunnel/pull/11065))
* [修复][E2E] 在 JDBC IT 中对齐 SAP HANA 接收器架构 ([#11181](https://github.com/apache/seatunnel/pull/11181))
* [修复][API] 支持点分不透明表名 ([#11220](https://github.com/apache/seatunnel/pull/11220))
* [修复][Connector-V2] 支持 JDBC 源中的 PostgreSQL 枚举 ([#11232](https://github.com/apache/seatunnel/pull/11232))
* [修复][E2E] 修复 DM 架构更改 JDBC URL ([#11179](https://github.com/apache/seatunnel/pull/11179))
* [修复][API] 在条件验证中保留扩展异常上下文 ([#11228](https://github.com/apache/seatunnel/pull/11228))
* [修复][E2E] 等待 Postgres CDC WAL 流准备就绪 ([#11202](https://github.com/apache/seatunnel/pull/11202))
* [修复][Connector-V2] 清理过时的 SFTP 池会话 ([#11180](https://github.com/apache/seatunnel/pull/11180))
* [修复][API] 修复 validateSingleChoice 和扩展异常绕过错误聚合 ([#11121](https://github.com/apache/seatunnel/pull/11121))
* [修复][Connector-V2]避免Xugu池连接isValid检查([#11190](https://github.com/apache/seatunnel/pull/11190))
* [Fix][Connector-V2] 修复 Hudi 空结构字段转换 ([#11196](https://github.com/apache/seatunnel/pull/11196))
* [修复][CI] 使用工作流令牌进行后端网站构建 ([#11192](https://github.com/apache/seatunnel/pull/11192))
* [修复][Connector-V2] 添加 Pulsar 多表接收器副本选项 ([#11168](https://github.com/apache/seatunnel/pull/11168))
* [修复][API] 修复 CatalogFactory optionRule 验证中的向后兼容性问题 ([#11165](https://github.com/apache/seatunnel/pull/11165))
* [修复][文档] 修复连接器文档死链接 ([#11175](https://github.com/apache/seatunnel/pull/11175))
* [修复][Connector-V2] 将缺少的 MULTI_TABLE_SINK_REPLICA 选项添加到 PulsarSinkFactory ([#11160](https://github.com/apache/seatunnel/pull/11160))
* [修复][Transform-V2] 将 Scala 编译器与 Spark Scala 版本对齐 ([#11117](https://github.com/apache/seatunnel/pull/11117))
* [Fix][Connector-V2][MySQL-CDC] 修复 BinlogOffset.compare 在 GTID 集相等时忽略 restartSkipRows ([#10811](https://github.com/apache/seatunnel/pull/10811))
* [修复][Connector-V2] 支持 MongoDB CDC SRV URI ([#11129](https://github.com/apache/seatunnel/pull/11129))
* [修复][seatunnel-translation-base] 从翻译库中删除特定于连接器的测试依赖项 ([#11075](https://github.com/apache/seatunnel/pull/11075))
* [修复][API] 为 CatalogFactory 创建路径添加缺少的 OptionRule 验证 ([#11127](https://github.com/apache/seatunnel/pull/11127))
* [修复][Connector-V2]修复Paimon流源状态恢复([#11132](https://github.com/apache/seatunnel/pull/11132))
* [修复][Connector-V2] 修复 Parquet INT96 混合大小写字段匹配 ([#11067](https://github.com/apache/seatunnel/pull/11067))
* [修复][Connector-V2] 修复 Oracle CDC 模式缓存匹配 ([#11110](https://github.com/apache/seatunnel/pull/11110))
* [Fix][Connector-V2] 修复 HTTP 游标分页无进度循环 ([#11098](https://github.com/apache/seatunnel/pull/11098))
* [修复][文档]删除重复的连接器常见问题解答侧边栏条目（[#11105](https://github.com/apache/seatunnel/pull/11105)）
* [修复][E2E] 稳定多个片状测试 ([#11102](https://github.com/apache/seatunnel/pull/11102))
* [修复][Zeta]修复检查点障碍触发测试竞赛([#11071](https://github.com/apache/seatunnel/pull/11071))
* [修复][E2E] 稳定引擎故障转移测试并重新平衡连接器碎片 ([#10949](https://github.com/apache/seatunnel/pull/10949))
* [修复][Connector-V2] 支持 SFTP 密钥文件选项 ([#11078](https://github.com/apache/seatunnel/pull/11078))
* [Fix][Connector-v2][CDC] 修复 Flink1.13 上多并行下模式演化过程中检查点失败导致的作业挂起 ([#10951](https://github.com/apache/seatunnel/pull/10951))
* [修复][Connector-V2]忽略文件源读取器中的 BOM ([#11056](https://github.com/apache/seatunnel/pull/11056))
* [修复][Connector-V2] 修复 Cassandra 空时间戳转换 ([#11068](https://github.com/apache/seatunnel/pull/11068))
* [修复][Transform-V2] 避免急切的 zeta udf 打开并修复空表上下文 ([#10760](https://github.com/apache/seatunnel/pull/10760))
* [修复][文档]修复 zh 用户页面链接 ([#11063](https://github.com/apache/seatunnel/pull/11063))
* [Fix][Connector-file] 修复读取 parquet 文件时无法获取新 schema ([#10378](https://github.com/apache/seatunnel/pull/10378))
* [修复][Connector-V2] 尊重 Paimon 更改表忽略标志 ([#11009](https://github.com/apache/seatunnel/pull/11009))
* [Fix][E2E][Jdbc] 通过升级镜像和添加等待策略修复 IRIS e2e 容器启动失败问题 ([#11019](https://github.com/apache/seatunnel/pull/11019))
* [修复][Connector-V2][CDC-MySQL] 在 MyS 上尊重 int_type_narrowing 选项… ([#11004](https://github.com/apache/seatunnel/pull/11004))
* [修复][引擎]修复 StainTracePayload#append 中的 JDK 8 NoSuchMethodError ([#10994](https://github.com/apache/seatunnel/pull/10994))
* [修复][Connector-V2]修复Paimon选项规则声明([#11003](https://github.com/apache/seatunnel/pull/11003))
* [修复][Connector-V2]修复Paimon分支保存模式DDL ([#10991](https://github.com/apache/seatunnel/pull/10991))
* [修复][Connector-V2] 将 JdbcHiveIT 适配为 JdbcCatalogUtils getTables 签名 ([#10998](https://github.com/apache/seatunnel/pull/10998))
* [Fix][Connector-V2] 修复列名包含 Avro 非法字符时 parquet 读取失败的问题 ([#10960](https://github.com/apache/seatunnel/pull/10960))
* [修复][CI] 将 azure/setup-helm 固定到已批准的 SHA ([#10853](https://github.com/apache/seatunnel/pull/10853))
* [修复][Zeta] 修复不稳定的待处理作业信息测试 ([#10891](https://github.com/apache/seatunnel/pull/10891))
* [修复][SqliteDialect] 更新 upsert SQL 语法并添加单元测试... ([#10880](https://github.com/apache/seatunnel/pull/10880))
* [Fix][Connector-V2] 修复 MilvusSourceReader 查询错误处理中错误的异常引用 ([#10975](https://github.com/apache/seatunnel/pull/10975))
* [修复][Connector-V2][SqlServer CDC] 修复 SQL Server CDC DDL 历史查询 LSN 边界导致架构事件丢失 ([#10970](https://github.com/apache/seatunnel/pull/10970))
* [修复][Connector-V2] 修复 Milvus 源转换器中的 SMALLINT 开关故障 ([#10966](https://github.com/apache/seatunnel/pull/10966))
* [修复][CDC] 避免在恢复后重放已完成的快照分割 ([#10859](https://github.com/apache/seatunnel/pull/10859))
* [修复][Connector-V2]修复Paimon嵌套行写入([#10888](https://github.com/apache/seatunnel/pull/10888))
* [Fix][Connector-V2][Jdbc][Dameng] 修复当表有列注释时 Dameng 自动建表失败的问题 ([#10934](https://github.com/apache/seatunnel/pull/10934))
* [修复][Kafka] 将默认 reader_cache_queue_size 从 1024 减少到 2 以防止 OOM ([#10954](https://github.com/apache/seatunnel/pull/10954))
* [修复][Connector-V2] 修复 Paimon 连接器中的嵌套 ROW 类型转换崩溃问题 ([#10952](https://github.com/apache/seatunnel/pull/10952))
* [修复][Connector-V2][JDBC] 检测元数据中的 Hive 分区键 ([#10706](https://github.com/apache/seatunnel/pull/10706))
* [修复][E2E] 使用超时调整和 DM 等待策略修复不稳定的 jdbc-connectors-it-ddl 测试 ([#10948](https://github.com/apache/seatunnel/pull/10948))
* [修复][Transform-V2] 防止 ReplaceTransform 中的输入行突变 ([#10941](https://github.com/apache/seatunnel/pull/10941))
* [修复] [Connector-V2] 修复由 XA 事务 MDL 与 MySQL CDC 死锁导致的 Flink 模式演化挂起 ([#10648](https://github.com/apache/seatunnel/pull/10648))
* [修复][核心]修复 SeaTunnel CLI 工具调用的推理重放 ([#10902](https://github.com/apache/seatunnel/pull/10902))
* [Fix][Connector-V2] 修复 MessageContentPartitioner 静态导致跨作业分区路由干扰的问题 ([#10885](https://github.com/apache/seatunnel/pull/10885))
* [修复][Flink] 提交准备期间缓存写入器状态，以修复流模式丢失的数据。 ([#10158](https://github.com/apache/seatunnel/pull/10158))
* [修复][Connectors-v2] Connector-typesense 未导入 Seatunnel-dist ([#10894](https://github.com/apache/seatunnel/pull/10894))
* [Fix][Transform-V2][JsonPath] 修复多时的日期/时间转换错误... ([#10390](https://github.com/apache/seatunnel/pull/10390))
* [Fix][Zeta] 修复 IMap 存储 SPI 注册在阴影打包期间丢失的问题 ([#10884](https://github.com/apache/seatunnel/pull/10884))
* [修复][Connector-V2][MySQL] 在自动创建的表中保留表注释、索引、ENGINE、CHARSET 和 COLLATE ([#10738](https://github.com/apache/seatunnel/pull/10738))
* [修复][核心]修复枚举器重新注册同步问题 ([#10830](https://github.com/apache/seatunnel/pull/10830))
* [修复][Zeta] 修复日志文件 REST API 端点中的路径遍历漏洞 ([#10628](https://github.com/apache/seatunnel/pull/10628))
* [修复][Connector-OBS] 将 okio 升级到 3.6.0 以修复 NoSuchFieldError: Companion ([#10756](https://github.com/apache/seatunnel/pull/10756))
* [修复][Zeta] 稳定协调器恢复测试 ([#10877](https://github.com/apache/seatunnel/pull/10877))
* [修复][Connectors-v2] Iceberg upsert 模式需要显式主键 ([#10762](https://github.com/apache/seatunnel/pull/10762))
* [修复][Connector-V2] 修复 Elasticsearch 连接器连接池泄漏... ([#10857](https://github.com/apache/seatunnel/pull/10857))
* [修复][文档] 将缺少的身份验证选项添加到中文 Elasticsearch 接收器文档中，并删除英文文档中的重复部分 ([#10864](https://github.com/apache/seatunnel/pull/10864))
* [修复][Zeta] 节点故障后的防护状态清理竞赛 ([#10687](https://github.com/apache/seatunnel/pull/10687))
* [修复][文档]修复常见问题解答连接器列表链接 ([#10862](https://github.com/apache/seatunnel/pull/10862))
* [修复][Zeta] 在 CoordinatorService 准备就绪之前避免遥测收集器阻塞 ([#10841](https://github.com/apache/seatunnel/pull/10841))
* [修复][Connector-V2][文件] 尊重二进制接收器的自定义文件名 ([#10817](https://github.com/apache/seatunnel/pull/10817))
* [修复][Zeta] 作业在主故障转移后永久卡住，无法完成（影响 BATCH / 有界源 / 作业关闭阶段） ([#10836](https://github.com/apache/seatunnel/pull/10836))
* [修复][文档]修复 OpenAI API 密钥文档链接 ([#10848](https://github.com/apache/seatunnel/pull/10848))
* [修复][Zeta] 恢复期间重用作业信息 ([#10842](https://github.com/apache/seatunnel/pull/10842))
* [修复][Connector-V2] 在方言 upsert API 中将 uniqueKeyFields 重命名为 pkNames ([#10367](https://github.com/apache/seatunnel/pull/10367))
* [修复][API] 支持表模式配置解析中的向量索引 ([#10582](https://github.com/apache/seatunnel/pull/10582))
* [修复][Zeta] 修复 JobInfoService 中的 NPE ([#10700](https://github.com/apache/seatunnel/pull/10700))
* [修复][Connector-V2] 修复 Doris 接收器重试退避和调度程序泄漏 ([#10772](https://github.com/apache/seatunnel/pull/10772))
* [修复][Connector-V2] 清理文件接收器事务父目录 ([#10815](https://github.com/apache/seatunnel/pull/10815))
* [Fix][Connector-V2] 修复 ORC File Source 损坏 BINARY 类型数据 ([#10820](https://github.com/apache/seatunnel/pull/10820))
* [修复][Zeta] 修复日志 API 返回集群中所有节点的主端口 ([#10821](https://github.com/apache/seatunnel/pull/10821))
* [修复][核心]修复 Seatunnel.cmd 在上午 10 点之前由于 %time% 领先而崩溃的问题... ([#10822](https://github.com/apache/seatunnel/pull/10822))
* [修复][核心]修复 JsonUtils.parseObject 编码问题导致 UTF-8 pa… ([#10809](https://github.com/apache/seatunnel/pull/10809))
* [修复][CI]增加测试超时([#10794](https://github.com/apache/seatunnel/pull/10794))
* [Fix][Connector-V2][Iceberg] 修复每个检查点的 IcebergAggreatedCommitter 原子提交 ([#10714](https://github.com/apache/seatunnel/pull/10714))
* [修复][CI] 增加 all-connectors-it-5 超时 ([#10788](https://github.com/apache/seatunnel/pull/10788))
* [修复][Connector-V2][文件]修复 Excel 写入顺序问题 ([#10365](https://github.com/apache/seatunnel/pull/10365)) ([#10366](https://github.com/apache/seatunnel/pull/10366))
* [修复][Zeta]防止取消卡住和降级tmp清理失败([#10729](https://github.com/apache/seatunnel/pull/10729))
* [修复][Zeta] CheckpointCoordinator 中的 Converge notificationCompleted 故障处理 ([#10705](https://github.com/apache/seatunnel/pull/10705))
* [修复][Zeta] 防止主开关后恢复终端状态僵尸作业 ([#10692](https://github.com/apache/seatunnel/pull/10692))
* [修复][CI] 同步最近 PR 的构建状态，无论可合并状态如何 ([#10754](https://github.com/apache/seatunnel/pull/10754))
* [修复][Zeta]通过延迟初始化overviewMap来防止NPE（[#10610](https://github.com/apache/seatunnel/pull/10610)）
* [修复][E2E] 修复 `KingbaseDialectContainerTest` 中不稳定的 CI 故障 ([#10674](https://github.com/apache/seatunnel/pull/10674))
* [修复] [Zeta] CoordinatorService 初始化失败时重试 ([#10580](https://github.com/apache/seatunnel/pull/10580))
* [修复] [Connectors-v2] 修复检查点恢复时的 Kafka 源恢复偏移量 ([#10612](https://github.com/apache/seatunnel/pull/10612))
* [Fix][Doc] 修复中文 about.md 中损坏的链接 ([#10662](https://github.com/apache/seatunnel/pull/10662))
* [修复][Connector-v2][JDBC] 增强 SQL 查询中的 WHERE 条件处理 ([#10488](https://github.com/apache/seatunnel/pull/10488))
* [修复][Zeta] 触发检查点失败时使作业失败 (apache#10442) ([#10448](https://github.com/apache/seatunnel/pull/10448))
* [修复][文档] 修复 zh 连接器接收器文档中损坏的降价链接 ([#10611](https://github.com/apache/seatunnel/pull/10611))
* [修复][Connector-V2] 修复 StarRocksCatalog 中的 JDBC 语句资源泄漏 ([#10629](https://github.com/apache/seatunnel/pull/10629))
* [Fix][Zeta] 修复工作通信不稳定后管道清理失败导致的内存泄漏 ([#10418](https://github.com/apache/seatunnel/pull/10418))
* [修复][Connector-Jdbc]防止在一次写入器中出现重复的 XA XID，并在开始失败时回滚准备好的 tx ([#10459](https://github.com/apache/seatunnel/pull/10459))
* [修复][Zeta] 修复当 IMap 仍从 S3 加载时主切换后作业恢复失败的问题 ([#10562](https://github.com/apache/seatunnel/pull/10562))
* [Fix][Connect-V2][Milvus] 修复分区创建 ([#10589](https://github.com/apache/seatunnel/pull/10589))
* [修复] [E2e] 在容器清理期间忽略挂起的协调器调度程序线程（[#10594](https://github.com/apache/seatunnel/pull/10594)）
* [修复][工具]更新changelog_dir到最新的目录结构([#10598](https://github.com/apache/seatunnel/pull/10598))
* [修复][Zeta]在主故障转移恢复期间使deployTask具有幂等性([#10567](https://github.com/apache/seatunnel/pull/10567))
* [修复][Zeta] 修复 jobDAGInfo 或 … 时 REST API 作业信息响应中的 NPE ([#10599](https://github.com/apache/seatunnel/pull/10599))
* [修复] 将 Dockerfile 中的基础镜像更新为 Seatunnelhub/openjdk:8u342 ([#10500](https://github.com/apache/seatunnel/pull/10500))
* [修复][Connector-V2][Redis] 修复 RedisWriter 自定义密钥占位符 ([#10346](https://github.com/apache/seatunnel/pull/10346))
* [Fix][Shell] 修复 Seatunnel.sh 作业名称参数中包含空格的问题 ([#10576](https://github.com/apache/seatunnel/pull/10576))
* [Fix][Connector-V2] 修复以批处理模式写入 Oracle CLOB 列时出现 ORA-01461 错误 ([#10118](https://github.com/apache/seatunnel/pull/10118))
* [修复] [Zeta] 修复工作人员上的 REST 提交作业和启动保存点，并在检查点丢失时返回 400 ([#10509](https://github.com/apache/seatunnel/pull/10509))
* [修复][Connector-V2][Postgres-CDC]当 slotInfo 存在时跳过 createReplicationSlot ([#10416](https://github.com/apache/seatunnel/pull/10416))
* [修复][Zeta] 稳定单元测试和 jdbc-connectors-it-part-7 的不稳定 CI 测试 ([#10527](https://github.com/apache/seatunnel/pull/10527))
* [修复][Connector-V2][MongoDB-CDC] 修复启用 heartbeat.interval.ms 时的 NPE ([#10477](https://github.com/apache/seatunnel/pull/10477))
* [修复][E2E-MongoDB CDC]稳定并发提交测试并确保CI触发([#10474](https://github.com/apache/seatunnel/pull/10474))
* [修复][Zeta] 保留 Seatunnel.sh 中包含空格的作业名称 ([#10483](https://github.com/apache/seatunnel/pull/10483))
* [Fix][Zeta] 修复查询待处理作业信息时的 NPE ([#10456](https://github.com/apache/seatunnel/pull/10456))
* [修复][Connector-V2] 使用上传会话进行插入 ([#10222](https://github.com/apache/seatunnel/pull/10222))
* [Bug][Connector-V2][CDC] 修剪从恢复的增量拆分中删除的表 ([#11271](https://github.com/apache/seatunnel/pull/11271))
* [Bug][Zeta] 拒绝运行时日志级别端点上的未知级别 ([#11983](https://github.com/apache/seatunnel/pull/11983))
* [Bug][Transform-V2] 修复 CEIL/FLOOR/ROUND/MOD/TRUNC 悄悄损坏 BIGINT 和 DECIMAL 值 ([#11696](https://github.com/apache/seatunnel/pull/11696)) ([#11712](https://github.com/apache/seatunnel/pull/11712))
* [Bug] [Connector-V2] 支持大盟NCHAR类型([#11693](https://github.com/apache/seatunnel/pull/11693))
* [Bug][Connector-V2][Prometheus]在loadConfig中应用batch_size默认值（[#11797](https://github.com/apache/seatunnel/pull/11797)）
* [Bug] [UI] 修复当 tablePaths 与指标键不匹配时作业详细信息概览表中的 NaN 显示 ([#10965](https://github.com/apache/seatunnel/pull/10965))
* [Bug] [Postgres-CDC] 修复快照表架构查找 ([#10843](https://github.com/apache/seatunnel/pull/10843))
* [Bug] [Connector-V2] 修复 Milvus sink collection_name 目标处理 ([#10893](https://github.com/apache/seatunnel/pull/10893))
* [Bug] [Zeta] 修复负数组大小异常 ([#10827](https://github.com/apache/seatunnel/pull/10827))
* [Bug][Connect-V2][Jdbc][Sqlserver] 修复 SQLServer 类似二进制列的 JDBC 接收器 null 绑定（例如 IMAGE）（[#10626](https://github.com/apache/seatunnel/pull/10626)）

## 其他

* 壮举（连接器）：添加 Mem0 Platform V3 ADD 接收器（[#12233](https://github.com/apache/seatunnel/pull/12233)）
* 根据问题 #11007 迁移 GraphQL ([#12273](https://github.com/apache/seatunnel/pull/12273))
* 连接器沙发底座迁移（[#12076](https://github.com/apache/seatunnel/pull/12076)）
* 恢复“[Fix][Shade]在 Seatunnel-hadoop-aws 中重新定位 Jackson 以匹配 uber jar ([#11673](https://github.com/apache/seatunnel/pull/11673))”([#11851](https://github.com/apache/seatunnel/pull/11851))
* 恢复“[修复][Connector-V2]将阴影 Doris thrift-service 升级到 1.0.1”（[#11703](https://github.com/apache/seatunnel/pull/11703)）（[#11824](https://github.com/apache/seatunnel/pull/11824)）
* 修复自述文件 SeaTunnel Tools 部分中的间距 ([#11372](https://github.com/apache/seatunnel/pull/11372))
* [修复][CI]增加时间和内存管理（[#11636](https://github.com/apache/seatunnel/pull/11636)）
* 修复共享多表接收器的模式更改路由（[#11015](https://github.com/apache/seatunnel/pull/11015)）
* [SEATUNNEL-10685] 防止 timestamp_ntz 被保存为 timestamp_ltz ([#10724](https://github.com/apache/seatunnel/pull/10724))
* 在 ASF 合作者中添加 heye1005 ([#11199](https://github.com/apache/seatunnel/pull/11199))
* 添加新的协作者，因为 yzeng 已成为提交者 ([#11014](https://github.com/apache/seatunnel/pull/11014))
* [STIP-28][功能][Zeta] 增强 OptionRule 以支持超出存在检查的丰富声明性验证（[#10977](https://github.com/apache/seatunnel/pull/10977)）
* [修补程序] [文档] 添加托管 Kubernetes 部署说明 ([#10932](https://github.com/apache/seatunnel/pull/10932))
* 从 PR 10491 中拆分不相关的客户端摘要和 Pulsar E2E 后续内容 ([#10922](https://github.com/apache/seatunnel/pull/10922))
* [Build][Deps] 支持 JDK23 lombok 注解处理 ([#10887](https://github.com/apache/seatunnel/pull/10887))
* 将 .asf.yaml 中的协作者 chl-wxp 更新为 DanielLeens ([#10901](https://github.com/apache/seatunnel/pull/10901))
*修复typesense添加缺失的MULTI_TABLE_SINK_REPLICA导入以传递…（[#10898]（https://github.com/apache/seatunnel/pull/10898））
* [BugFix][connector-cdc-oracle] 修复多表 CDB+PDB 模式下不存在表或视图的问题 ([#10829](https://github.com/apache/seatunnel/pull/10829))
* [BUG][Connector-V2][MaxCompute]修复Maxcompute源拆分策略([#10845](https://github.com/apache/seatunnel/pull/10845))
* [ 改进 ][文档] 改进 Redshift 接收器连接器文档 ([#10682](https://github.com/apache/seatunnel/pull/10682))
* [Bugfix][Zeta]修复restApi获取读写速率时科学计数法的问题([#10824](https://github.com/apache/seatunnel/pull/10824))
* [功能][CLI] 添加 SeaTunnel CLI 用于自然语言配置生成 ([#10789](https://github.com/apache/seatunnel/pull/10789))
* [Connector-Redis] Redis 支持多表源功能 ([#10601](https://github.com/apache/seatunnel/pull/10601))
* [Feat][Connector-v2][JDBC][Oracle] 添加基于 Testcontainers 的单元测试 ([#10435](https://github.com/apache/seatunnel/pull/10435))
* [Bugfix][connectors-v2]修复createWriter中JdbcSink下标越界异常([#10200](https://github.com/apache/seatunnel/pull/10200))
* [修复][REST API] 不对 HOCON/SQL 格式和上传文件提交应用 ConfigShade 解密 ([#10595](https://github.com/apache/seatunnel/pull/10595))
* [改进][引擎]增强资源分配失败的日志记录和异常处理([#10304](https://github.com/apache/seatunnel/pull/10304))
* 测试/rocketmq 恢复 e2e ([#10778](https://github.com/apache/seatunnel/pull/10778))
* 禁用 ASF Dependabot 更新 PR ([#10751](https://github.com/apache/seatunnel/pull/10751))
* [修复][CI] 稳定管道清理 Hazelcast 序列化测试 ([#10745](https://github.com/apache/seatunnel/pull/10745))
* [错误修复][文档] 修复 Iceberg 文档错误 ([#10622](https://github.com/apache/seatunnel/pull/10622))
* [改进] 修复文档死链接和错误链接 ([#10439](https://github.com/apache/seatunnel/pull/10439))
* [Hotfix][CI] 增加网站构建超时时间 ([#10602](https://github.com/apache/seatunnel/pull/10602))
* [核心] 更新版本至3.0.0 ([#10510](https://github.com/apache/seatunnel/pull/10510))
* feat(helm): 添加对现有 ConfigMap 的支持 ([#10518](https://github.com/apache/seatunnel/pull/10518))
* [Hotfix][CI] 将 Qdrant 映像更新至 v1.15.0 以实现兼容性（[#10503](https://github.com/apache/seatunnel/pull/10503)）

## 重大变更/迁移说明

* [改进] [API] 弃用表达式，转而使用条件 ([#11882](https://github.com/apache/seatunnel/pull/11882))
* [改进][Transform-V2] 将 FilterRowKind 验证迁移到 OptionRule ([#11763](https://github.com/apache/seatunnel/pull/11763))
* [修复][CI] 删除无效的构建规则集源 pin ([#12291](https://github.com/apache/seatunnel/pull/12291))
* [改进][Connector-V2] 将 S3 Redshift 验证迁移到声明式 OptionRule ([#12274](https://github.com/apache/seatunnel/pull/12274))
* [改进][Connector-V2] 将 BigQuery 验证迁移到声明式 OptionRule ([#12272](https://github.com/apache/seatunnel/pull/12272))
* 根据问题 #11007 迁移 GraphQL ([#12273](https://github.com/apache/seatunnel/pull/12273))
* [改进][Connector-V2][AmazonSqs] 将 URL 和区域验证迁移到声明式 notBlank ([#12217](https://github.com/apache/seatunnel/pull/12217))
* 连接器沙发底座迁移（[#12076](https://github.com/apache/seatunnel/pull/12076)）
* [改进][Connector-V2][Aerospike] 将数据格式验证迁移到 OptionRule ([#12090](https://github.com/apache/seatunnel/pull/12090))
* [改进][Connector-V2] 将 HugeGraph 接收器验证迁移到 OptionRule ([#12075](https://github.com/apache/seatunnel/pull/12075))
* [改进][Connector-V2][Neo4j] 将配置验证迁移到 OptionRule ([#12047](https://github.com/apache/seatunnel/pull/12047))
* [改进][Connector-V2][AmazonDynamoDB] 将最大重试验证迁移到 OptionRule ([#11821](https://github.com/apache/seatunnel/pull/11821))
* [Fix][Connector-V2] 删除 AssertSinkWriter 关闭中的固定睡眠并仅断言自己的表 ([#11995](https://github.com/apache/seatunnel/pull/11995))
* [改进][Connector-V2][Prometheus] 将批量大小验证迁移到 OptionRule ([#11738](https://github.com/apache/seatunnel/pull/11738))
* [改进][Connector-V2][Pulsar] 将验证迁移到声明式 OptionRule ([#11985](https://github.com/apache/seatunnel/pull/11985))
* [改进][Connector-V2][MongoDB] 将获取大小验证迁移到声明式 OptionRule ([#11886](https://github.com/apache/seatunnel/pull/11886))
* [改进][Connector-V2][文件] 将 HDFS 和 S3 接收器验证迁移到声明式 OptionRule ([#11881](https://github.com/apache/seatunnel/pull/11881))
* [改进][Connector-V2] 将 ActiveMQ 验证迁移到 OptionRule ([#12004](https://github.com/apache/seatunnel/pull/12004))
* [改进][Connector-V2][HBase] 将时间戳验证迁移到 OptionRule ([#11803](https://github.com/apache/seatunnel/pull/11803))
* [改进][Connector-V2][Iceberg]将配置验证迁移到声明式 OptionRule ([#11921](https://github.com/apache/seatunnel/pull/11921))
* [改进][Connector-V2] 将 Cassandra 验证迁移到声明式 OptionRule ([#11964](https://github.com/apache/seatunnel/pull/11964))
* [修复][E2E] 稳定 Paimon 不兼容的模式测试 ([#11608](https://github.com/apache/seatunnel/pull/11608))
* [改进][Connector-V2][RabbitMQ] 将源配置验证迁移到 OptionRule ([#11795](https://github.com/apache/seatunnel/pull/11795))
* [改进][Connector-V2] 删除 Doris 连接器中冗余的命令式验证 ([#11858](https://github.com/apache/seatunnel/pull/11858))
* [改进][Connector-V2] 将 IoTDBv2 SQL 方言验证迁移到 OptionRule ([#11839](https://github.com/apache/seatunnel/pull/11839))
* [改进][Connector-V2] 将电子邮件验证迁移到声明式 OptionRule ([#11817](https://github.com/apache/seatunnel/pull/11817))
* [功能][Connector-V2][Prometheus] 将 PrometheusWriter 迁移到引擎级 FlushSignal ([#11778](https://github.com/apache/seatunnel/pull/11778))
* [Fix][Connector-V2] 删除 ParquetWriteStrategy 中无法访问的 LocalTimestampMillisConversion
* [文档] 添加 JDBC 到 JDBC 迁移配方 ([#11490](https://github.com/apache/seatunnel/pull/11490))
* [改进][Connector-V2] 将 EdgeSocket 验证迁移到声明式 OptionRule ([#11384](https://github.com/apache/seatunnel/pull/11384))
* [改进][Connector-V2] 将 Kafka Source 命令式验证迁移到声明式 OptionRule ([#11157](https://github.com/apache/seatunnel/pull/11157))
* [改进][Connector-V2][Socket] 将 Socket Sink 验证迁移到声明式 OptionRule ([#11214](https://github.com/apache/seatunnel/pull/11214))
* [改进][Connector-V2] 将 Redis 验证迁移到声明式 OptionRule ([#11225](https://github.com/apache/seatunnel/pull/11225))
* [改进][文档] 弃用 JDBC 表前缀和后缀选项 ([#11176](https://github.com/apache/seatunnel/pull/11176))
* [改进][Transform-V2] 将转换验证迁移到声明式 OptionRule ([#11095](https://github.com/apache/seatunnel/pull/11095))
* [改进][Connector-V2] 将 RocketMQ 源验证迁移到声明式 OptionRule ([#11158](https://github.com/apache/seatunnel/pull/11158))
* [改进][Connector-V2] 将 Elasticsearch 验证迁移到声明式 OptionRule ([#11122](https://github.com/apache/seatunnel/pull/11122))
* [修复][API] 修复 CatalogFactory optionRule 验证中的向后兼容性问题 ([#11165](https://github.com/apache/seatunnel/pull/11165))
* [修复][seatunnel-translation-base] 从翻译库中删除特定于连接器的测试依赖项 ([#11075](https://github.com/apache/seatunnel/pull/11075))
* [改进][Connector-V2] 将 jdbc 验证迁移到声明式 OptionRule ([#11106](https://github.com/apache/seatunnel/pull/11106))
* [修复][文档]删除重复的连接器常见问题解答侧边栏条目（[#11105](https://github.com/apache/seatunnel/pull/11105)）
* [修复][文档] 将缺少的身份验证选项添加到中文 Elasticsearch 接收器文档中，并删除英文文档中的重复部分 ([#10864](https://github.com/apache/seatunnel/pull/10864))
* [文档]：用 Seatunnelhub/openjdk:8u342 替换已弃用的 openjdk:8 ([#10644](https://github.com/apache/seatunnel/pull/10644))
* [文档] 从设计理念中删除未来方向部分 ([#10556](https://github.com/apache/seatunnel/pull/10556))
* [改进][Flink]支持多重并行并从 API 中删除特定于 flink 的逻辑 ([#10107](https://github.com/apache/seatunnel/pull/10107))

最后，让我们记住本次参与贡献 PR 的贡献者。他们是（排名不分先后）

* 1322630531
阿博法兹·迈达尼
* 王亚当
* aksmf1442
*阿曼·米什拉
* 安西皮
*迎角
* 阿尔皮特·塔加德
*阿尔文
*阿文德
* 阿里亚德普塔
*阿希什·库马尔
*阿斯拉贾瓦
* 鲍勃·宋
* 菩提
*克里斯79
* 克莱尔
*三叶草
* CNF96
*柯基犬-w
*宇宙尼
* 圆柱-uuu
*丹尼尔
* 丹尼尔·卡特
* 丹尼尔纳德
* 大卫·佐洛
*李东延
*金度妍
* 权道勇
* 梦想95
* dy102
* 胖子
* 粉橘符
* 飞1d
加布里埃尔·巴尔德斯
*格内希尔
* 古塔姆·阿德万特
* 孙国斌
*胡铁坊76
* 金贤庆
*我普图阿里亚萨
* ic4y
* 泡菜冰
* 郑雅各0927
*贾维斯
* 贾斯特
* 辛杰瑞
* 解规曲
*金妮III233
* 林约翰
* 玖子5
* 琼韦洛普
* 姜明冠
*卡里明吉特
* 考斯图布·阿比南德
* kk猪
* kuswardhanietidims-svg
* lce_mo
*李智
* 丽凤
* 李杰20190102
*利民
*丽子英
* 卢皮帕里安
* 小卢西奥
* 农历
* 卢小龙
* M 穆克塔南达·雷迪
*马蒙
* 马克思-卡瓦略
*梅林-S3NS
*奇迹
*米西
* 穆罕默德·塔拉勒·赛义夫
* 钱猫957
* 莫克斯
* 穆拉利
* 妙俊
* 银波
* 尼基尔·库马尔
* 纽米
*尼克松·瓦霍姆
* 海洋-zhc
* 奥姆卡尔K-7
* 熊猫
普尼特·迪克西特
* 清者果-flash
* 雷震王
* 拉胡尔·阿加瓦尔
* 拉梅什·雷迪·阿杜特拉
* 瑞奇·马希贾
* 罗汉·盖克瓦德
萨洛尼·古普塔
* 桑托什·库马尔·索马拉普
* 萨蒂扬·潘迪
* 萨菲罗斯
*塞普里·赛·克里希纳
* 经济特区
* 希夫拉吉·索兰基
* 显示
* 刘帅
* 烟雾666
* 斯里詹·辛格
* 秀贤
* 苏必丹
* 苏拉菲尔
*香港金正恩
*索恩
*特林尼安
*番茄番茄
*托玛
* 托尼·阮
* 文森佐·桑托纳斯塔索
*万95u
* 水
*小陈
*小芙
* 小思源
* 李新宇
* 雪鹏
* 胡杨波
* 永华通
* 伊伊特坎·奥兹图尔克
* 约翰内斯
*于王
* 雨格1805
*于斯文
* yzeng1618
*张东浩
*张庆松
*张伟文
* 赵勇
*张震
* zhengxiang378928908-code
*吴志良
* 知微.牛
* 知味牛
* 戴子涵
* 动物园代码
*左
* ZYZ666-RGB
* 张万义
* 曹博淳
* 盒子
* 老王
* 许晓峰
* 郑朝钦
* 陈家名
* 雷炯

安装包下载链接：[https://seatunnel.apache.org/download](https://seatunnel.apache.org/download)

---

> 📦 仓库：[apache/seatunnel](https://github.com/apache/seatunnel) · 🏷️ 版本：`v3.0.0` · 📅 发布：2026-09-29 · [查看英文原版 Release](https://github.com/apache/seatunnel/releases/tag/v3.0.0)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
