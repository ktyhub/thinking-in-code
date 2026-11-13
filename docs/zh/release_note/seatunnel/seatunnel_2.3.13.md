---
title: "seatunnel 2.3.13"
description: "SeaTunnel是一个多模态、高性能、分布式、海量数据集成工具。"
---

# seatunnel 2.3.13

### seatunnel 是什么

SeaTunnel是一个多模态、高性能、分布式、海量数据集成工具。

### seatunnel 2.3.13 版本更新了什么

# 2.3.13 发行说明

This is a great milestone for Apache SeaTunnel project! 
2.3.13 版本的发布及其众多新功能和修复将显着提高用户数据集成工作流程的效率。 

我们的贡献者为此更新所付出的奉献和辛勤工作给我们留下了深刻的印象，我们相信这个新版本将受到社区的广泛欢迎。

## 特点

- [Feature][Core][Checkpoint] Add checkpoint api (#10065)
- [功能][Zeta] 支持检查点的最小暂停配置 (#9804)
- [功能][Flink] 添加 Flink 版本 1.20.1 支持 (#9576)
- [Feature][Flink] 支持 Flink 引擎上的 CDC 源模式演化 (#9867)
- [Feature][Connector-V2][HdfsFile] Support true large-file split for parallel read (#10332)
- [Feature][connector-file-local] Localfile 支持 csv、text 和 json 大文件的拆分和并行读取 (#10142)
- [功能][connectors-v2/connector-file] 支持逻辑 Parquet 分割 (#10239)
- [功能][Connector-V2] 支持 Apache HugeGraph 的接收器连接器 (#10002)
- [Feature][connector-jdbc] 支持 DuckDB 的源和接收器 (#10285)
- [Feature][Connector-V2] Support write data into lance dataset (#9894)
- [功能][Connector-V2] 支持 AWS DSQL #9726 (#9739) 的接收器连接器
- [功能][Connector-V2] 支持 FtpFile/SftpFile/LocalFile 源的sync_mode=更新（二进制）(#10437)
- [Feature][Connector-V2][Elasticsearch] Add Runtime Fields support (Elasticsearch 7.11+) (#10201)
- [功能][Connector-v2]解决 CSV Reader 中第一列为空的问题 (#10383)
- [Feature][Connector-v2][Kafka] 在 Protobuf 反序列化中添加对 Schema Registry 线格式的支持 (#10183)
- [功能] [Connector-V2][HBase] 支持在 HBaseSource 中使用最小/最大时间戳进行时间范围扫描 (#10318)
- [功能][冰山] 支持 schema.partition_keys 和 ${partition_keys} 占位符 (#10389)
- [Feature][Connector-V2] Support hdfs file multi table source read (#9816)
- [Feature][Transform-V2] Support multimodal embeddings (#9673)
- [功能][Transform-V2] 支持 RegexExtract 转换 (#9829)
- [Feature][Connector-V2] Support `` for the SQL To Paimon converter (#10206)
- [功能][Kafka 源]将 Kafka 记录时间戳注入为 EventTime 元数据 (#9994)
- [Feature][Connector-V2] Postgresql  support read TIMESTAMP_TZ (#10048)
- [功能][Connector-V2] 支持 HDFS ViewFs 架构 (#10117)
- [功能][核心]添加 REST API 用于查看待处理队列详细信息 (#10078)
- [功能][Connector-V2] Hive 接收器支持 SchemaSaveMode 和 DataSaveMode (#9743)
- [Feature][Connector-V2] 支持 paimon 表读取的动态选项 (#9981)
- [Feature][Connector-V2][Milvus] Sink writer flush by interval (#9961)
- [Feature][Core] Add PendingJobs info in the response of GetOverviewOperation (#9902)
- [Feature][Connector-V2] Support row range boundaries for HBaseSource (#9983)
- [Feature][Hive] Kerberos renew for >24h Hive and HDFS writes (#9989)
- [Feature][Connector-redis] fix redis cluster bug and add cluster e2e (#9869)
- [Feature][Format] 改进 maxwell_json,canal_json,debezium_json 格式支持合并 update_before 和 update_after (#9805)
- [功能][文件] 添加 markdown 解析器文档 (#9834)
- [功能][文件] 添加 Markdown 解析器以支持 RAG #9714 (#9760)
- [功能][Connectors-v2] 清理 paimon 接收器的临时文件 (#9819)
- [功能][连接器-V2] 支持 databend 接收器连接器的 CDC 模式 (#9661)
- [Feature][Engine]Metalake support for data source information storage and management (#9688)
- [功能][Connector-V2] [IoTDB] 添加源和接收器连接器以支持 IoTDB 2.X (#9872)
- [Feature][Connector-File-Hadoop] Support sync_mode=update for HdfsFile source (binary) (#10268)
- [功能][Connector-V2][Hive] 支持多个 Hive 元存储 URI 以进行自动故障转移 (#10253)
- [功能][核心][指标] 添加接收器提交指标并计算作业指标摘要中的提交率 (#10233)
- [功能][connector-hive] 支持源的正则表达式和整个数据库 table_name (#10250)
- [功能][connector-kudu] 支持源的正则表达式和整个数据库 table_name (#10180)
- [功能][Connector-V2] Mongodb Sink 支持多表 (#9958)
- [功能][Connector-V2] MongodbSink 支持 SaveMode (#9883)
- [功能][核心] 支持在 Zeta 中定义任何嵌套数组和映射类型 (#9881)
- [改进][Zeta] 通过分区支持改进作业指标处理 (#9833)
- [改进][Connector-Clickhouse]通过使用最后一批行排序值方法而不是限制偏移量来改进ck批量并行读取。 (#9801)
- [改进][Connectors-v2] 添加对读者重新注册后重新发送 NoMoreSplitsEvent 信号的支持 (#10208)
- [改进][核心][指标]通过更新的测试重构和增强多个接收器的作业指标处理（#10273）
- [改进][Zeta]引擎服务器和seantunnel-ui支持远程分页查询(#9951)
- [改进][通用]改进 SinkFlowTestUtils 检查点逻辑 (#10071)
- [改进][seatunnel-api] 统一非关系型数据源多表模式 schema 配置参数 (#10370)
- [改进] cdc 相关选项 (#10372)
- [改进][E2E] 改进 redis e2e 的删除功能 (#10018)
- [改进][核心][指标]优化Sink写入数据统计(#10100)
- [改进][Connector-V2][微信]将 StringBuffer 优化为 StringBuilder 以获得更好的性能 (#10127)
- [改进][Fink] NO_CDC 源支持检查点 (#10094)
- [改进][Connector-v2][MySQL]优化分片计算策略(#9975)
- [改进] 支持 JSON 多级嵌套解析 (#10000)
- [改进][e2e] 更改 Docker 映像以使用 Seatunnelhub 存储库 (#10072)
- [改进][Connector-V2][HBase] 支持可配置的范围扫描边界包含策略 (#10011)
- [改进][E2E] 将 jdk docker 镜像更新到 Seatunnelhub (#10036)
- [改进][seatunnel-connectors-v2][connector-mongodb] 改进 MongodbWriter 关闭 (#10051)
- [改进][Connector-v2][MySQL-CDC]模式演化优化等待时间 (#10040)
- [改进][E2E] 改进删除哈希的 Redis 测试 (#9946)
- [改进][连接器]将Kafka客户端版本从3.2.0升级到3.4.0 (#9941)
- [改进][CI] 优化 CI (#9900)
- [改进][核心][入门]支持转换配置的加密和解密(#9932)
- [改进][CI] 将 kafka-connector-it 的超时从 120 分钟增加到 140 分钟 (#9893)
- [改进][Connector-V2] MongodbSinkFactory 实现 TableSinkFactory (#9879)
- [改进]更新快照版本至2.3.13 (#9858)
- [改进][Connector-V2][Hive] 重复数据删除 Hive 选项定义 (#10251)
- [改进][Connector-V2][Elasticsearch] 通过资源清理增强 Scroll API 处理 (#10124)
- [改进][Connector-v2][Hive] 为 Hive JDBC 连接添加套接字和连接超时选项 (#10254)
- [改进][核心]自动创建GC日志目录以避免启动失败(#10255)
- [改进][e2e] 增加 DatabendCDCSinkIT 的超时以减少测试不稳定 (#10269)
- [改进][Connector-V2][Jdbc] 增加架构更改 IT 的超时以修复不稳定的测试 (#10258)
- [改进][connector-elasticsearch] 优化 Elasticsearch Sink 向量参数和文档 (#10260)
- [改进][Zeta] 删除未使用的字段 (#10261)
- [改进] substring 和 substr 函数支持 Date,LocalDate,L… (#9969)
- [改进][seatunnel-api] 优化元数据湖相关代码 (#10347)
- [改进][Connector-V2][HBase] 支持接收器中的 DATE/TIME/TIMESTAMP/DECIMAL 并修复 DECIMAL 反序列化 (#10291)
- [改进][seatunnel-connectors-v2][connector-jdbc] 删除 JdbcSinkFactory 中一些过时的代码 (#10026)
- [改进][CI] 将 kudu 连接器超时增加到 60 分钟 (#10240)
- [改进][连接器]用正确的日志记录替换 printStackTrace (#10176)
- [改进][Connecotr-v2][Databend]优化CI判断逻辑(#10130)
- [改进][Zeta] 按状态过滤任务和管道 (#9926)


## 文档

- [功能][文件] 添加 markdown 解析器文档 (#9834)
- [改进][文档]添加S3兼容存储IMAP配置示例。关闭#10308 (#10342)
- [Improve][doc]优化文档中schema参数的引入(#10385)
- [改进][文档] 移动 duckdb 文档 (#10382)
- [Improve][Docs] 补充 SeaTunnel 连接器的中文文档 (#10109)
- [改进][文档] 为版本升级添加不兼容的更改文档 (#10068)
- [改进][文档][seatunnel-engine] 将命名空间添加到插件配置 (#10271)
- [改进][文档][连接器文件] HdfsFile/LocalFile 的文档保存模式选项 (#10283)
- [改进][文档]为 MySQL Sink 连接器添加多个表同步示例 (#10241)
- [改进][文档]更新 table_path 示例以保证清晰度和一致性 (#10202)
- [改进][文档] 修复单词拼写错误 (#10170)
- [文档] SQL UDF 文档硬编码 2.3.2 依赖项导致运行时不匹配… (#10445)
- [Doc] 修正了 Readme.md 的一些问题 (#10424)
- [文档] 调整概念下的文件结构 (#10420)
- [文档] 更新 README.md
- [Doc] 修复 READE.md 中的 Deepwiki 显示 (#10438)
- [Doc] [MongoDB] 使用更清晰的示例更新角色和用户创建的 CDC 文档 (#10423)
- [文档] 将 EN 架构文档与 Zeta 实现保持一致
- [Doc] 纠正 Readme.md 的一些问题
- [文档] 调整 Seatunnel 文档结构 (#10395)
- [Doc] Seatunnel 文档结构调整 (#10351)
- [文档] 在网站上引入 SeaTunnel MCP 和 x2SeaTunnel 文档 (#10108)
- [文档][transforms-v2] 改进肉类数据和 rowkind 文档 (#10010)
- [Doc][Transform-v2][Embedding] 修复变换嵌入选项名称 (embedding_model_provider -> model_provider) (#9925)
- [文档]修复 Elasticsearch 源文档（选项表、拼写错误）(#10259)
- [杂务] 修复拼写错误 Coolumn ---> 栏 (#9830)
- [Doc][Connector-V2][S3File] 修复连接器 s3file 选项名称 (access_secret -> Secret_key) (#9892)
- [文档] 优化 Seatunnel 文档结构 (#10262)
- [Doc][connector-hbase] 添加 Kerberos 配置说明/示例并修复 h


## 错误修复


- [Fix][Connector-V2] 修复当 tableNamePattern 被视为 LIKE 时错误的列发现 (#10422)
- [Fix][Connectors-v2] 修复代理恢复后事务取消失败的问题 (#10013)
- [Fix][connector-cdc] 修复由于 splitId 为空而完成快照分割时的 NPE (#10404)
- [Fix][Transform-V2] 修复多表 SQL 转换 (#10263)
- [Fix][Connector-V2][SelectDBCloud] 修复引擎接收器操作中的 NotSerializedException (#10412)
- [修复][Connector-v2][MongoDB]使用Cache进行多任务提交的问题(#10116)
- [Fix][Zeta] 修复取消待处理作业时的内存泄漏 (#10315)
- [Fix][Zeta] 修复多 Sink 场景中的写入计数显示问题 (#10376)
- [修复][Connector-V2] 修复配置 heartbeat.action.query 时的 NPE (#10278)
- [修复][文档]修复 schema-feature.md 文档错误 (#10413)
- [Fix][connector-hbase] 修复 HBase 源的命名空间处理 (#10295)
- [Fix][Connector-v2][SQLServer] 处理 SQL 查询中带有特殊字符的数据库名称并添加相关测试 (#10327)
- [修复][Connector-Jdbc] 将 Redshift JDBC 驱动程序从 2.1.0.9 升级到 2.1.0.30 以修复 OOM 问题 (#10393)
- [修复][connector-fake] 不再发出信号以避免 FakeSourceReader 等待拆分在恢复后挂起 (#10275)
- [Fix][Connector-V2] 修复分区列选择逻辑 (#10319)
- [修复][Connector-V2][Databend] 确保 CDC 在提交者关闭时最终合并 (#10349)
- [Fix][Transform-V2][DataValidator] 修复 tableId 具有 db/schema 前缀时的 ROUTE_TO_TABLE 路由 (#10368)
- [Fix][connector-jdbc] 修复 CatalogUtils getCatalogTable(Connection, String, ...) 丢失仅查询源的主键 (#10093)
- [Fix][Connector-v2][Doris]数组类型数据解析失败(#10095)
- [修复][Connector-v2][MongoDB-CDC]启动多个任务连接不同 MongoDB 服务时，仅第一个生效 (#10064)
- [修复][Connector-V2] 忽略 JDBC 语句关闭时的 JdbcConnectorException (#9942)
- [Fix][doc] 在 SqlServer-CDC 文档中添加缺少的右大括号 (#10073)
- [Fix][Connector-V2][Clickhouse] 在 ClickhouseSourceFactory 中添加主键支持 (#10067)
- [修复][seatunnel-spark-starter] 修复 Spark 在 fo 中提交任务时的问题... (#10033)
- [Fix][Connector-V2][Http]修复 HttpSink.java 中 HTTP 参数的设置 (#10053)
- [Fix][Connector-v2][Clickhouse] 使用实际表模式而不是 DESC 结果来创建 PhysicalColumn (#10019)
- [修复][Connector-v2][Clickhouse] 支持clickhouse日志引擎 (#10035)
- [Fix][Transform] 使用 TRIM(Expression) 修复 SQL Transform 中的 ClassCastException (#10031)
- [修复] 日志 http 基本问题#9755 (#9968)
- [Fix][Connector-v2][Clickhouse]修复filter_query在SQL批量读取策略中不起作用的问题(#10009)
- [Fix][e2e] 修复不稳定的 Redis 测试 (#10024)
- [Fix][Connecotr][Hive] HiveJdbcConnectionProvider 中的正确密码参数分配 (#10025)
- [修复][核心]更新 JDK docker 镜像版本 (#10023)
- [Fix][Config] 修复字段名称冲突导致的类型转换错误 (#9960)
- [修复][Zeta] 处理空日志文件名响应 (#9977)
- [修复][CI] 将 MySQL Docker 镜像版本更新至 8.0.43 (#9903)
- [Fix][Spark] 通过对目录表进行排序来确保与顺序无关的模式合并 (#9911)
- [Fix][CI] 修复代码风格错误 (#9919)
- [修复][核心]为 apache commons lang3 添加阴影模块 (#9895)
- [Fix][Connector-V2] 解决特殊excel的读取问题(#9882)
- [Fix][Zeta]修复pendingJobMasterMap资源泄漏(#9749)
- [修复][UI] 优化细节和完成作业组件 (#9888)
- [Fix][Connector-V2] 修复 db2 表小写错误 (#9568)
- [修复][UI]优化UI包(#9884)
- [Fix][Doc] 修复 file_filter_modified_start 和 file_filter_modified_end 格式 (#9880)
- [Fix][connector-hive] 修复file_name_expression在Hive接收器中不生效的问题。 (#9823)
- [Fix][doc] 根据官方文档修复 ./mvnw 安装错误 (#9853)
- [修复][引擎服务器]清理 BaseServletTest 单元案例日志目录 (#9795)
- [Fix][Zeta] 修复 JobStateEventTest 以使用 accessCounter 断言的等待条件 (#9842)
- [修复][Zeta] 修复 isPhysicalDAGInfo 中的拼写错误 (#9840)
- [修复][Flink]删除重复代码 (#9839)
- [Fix][Connector-xugu] 修复 xugu 连接器中的几个错误 (#9820)
- [修复][Zeta] 修复 Seatunnel.sh - j 命令不起作用 (#9832)
- [Fix][Zeta] 在 BaseService 中处理 null startTimestamp 以修复不稳定的 MysqlCDCWithBinlogDeleteIT 测试 (#9815)
- [修复][Connectors-v2] 修复连接器-http 的 UT (#9821)
- [Fix][Connector-V2][ClickHouse] 修复 ClickhouseCatalogUtil 中的 ThreadLocal 内存泄漏 (#10264)
- [Fix][Connector-V2][Hbase] 修复空表上的 ERROR_WHEN_DATA_EXISTS NPE (#10336)
- [修复][Connector-V2] 将 jsch 从 0.1.55 提升到 0.2.20 以修复缓冲区问题 (#10298)
- [修复][Connector-V2][GraphQL] 澄清订阅模式和纯 JSON 响应 (#10303)
- [Fix][Connector-V2][Hbase] 修复 HBase 接收器二进制 rowkey 处理 (#10300)
- [Fix][HiveSink] 为流提交实现覆盖语义，以防止多次删除目标目录 (#10279)
- [Fix][Connector-V2][Hbase] 修复源阅读器仅扫描第一个分割 (#10287)
- [Fix][Connecotr][MongoDB] 修复 mongodb maxtime 命名 (#10267)
- [Fix][Connector-V2][Postgres-CDC] 修复 PostgreSQL GEOMETRY 使用 JDBC 接收器的处理 (#10186)
- [Fix][Zeta] 修复 SinkAggreatedCommitterTask 中的内存泄漏 (#10189)
- [Fix][Connector-V2][SqlServer-CDC] 修复最早的startup.mode偏移和对齐测试(#10207)
- [修复][E2E] 限制 Flink 重启尝试以避免无限重试掩盖真实错误 (#10152)
- [Fix][Transform-V2] 修复日期时间/数字/字符串函数边缘情况并更新测试 (#10168)
- [Fix][Connector-Kudu] 修复 Kudu STRING 中的 Doris 自动表被创建为 CHAR(16) (#10175)
- [修复][Connector-V2][Clickhouse] 处理列注释中的特殊字符 (#10128)
- [Fix][Connector-V2][HBase] 确保在 tableExists 方法中使用完全限定的表名称并添加单元测试 (#10126)
- [Fix][Connector-V2][Clickhouse] 修复 ClickHouse 目录可为空的列类型并添加测试 (#10119)
- [Fix][Connector-V2] 修复 'file_filterpattern' 无法过滤目录 (#10049)
- [修复][错误修复]Doris Sink 在事务已提交/可见时不应抛出异常 (#10079)
- [修复][修复][e2e] 修复 Databend e2e (#9985)
- [修复][E2E] 修复 DruidIT ConditionTimeout (#9979)
- [Fix][Connector-V2][Doris] 修复 DECIMAL scale=0 转换以避免意外的 MAX_SCALE (#9947)
- [Fix][Connector-V2] 修复 ftp 复杂路径读取问题 (#9781)
- [Fix][Connector-V2][Hive] 修复 Hive 表/分区目录为空时初始化失败的问题 (#10331)
- [Fix][connector-jdbc] 修复合并具有大列长度的表模式时的整数溢出 (#10387)
- [Fix][Connector-V2][File] 修复读取空目录时的 IndexOutOfBoundsException (#10373)
- [Fix][Connector-V2][Email] 修复空值上的 NPE，添加可配置的附件名称和分隔符 (#10112)
- [修复][seatunnel-connectors-v2][connector-elasticsearch] ElasticsearchSink 遇到写入错误并且任务不退出 (#10038)
- [修复][seatunnel-e2e] 增加超时 (#10066)
- [修复][CI] 修复 TestSQLIT (#10087)
- [修复][e2e] 修复 MongoDB CI 失败 (#9997)
- [修复] [connector-jdbc-e2e-part-7] 容器删除期间冲突导致 CI 失败 (#9922)
- [Fix][CI] 修复 mysql 镜像未找到错误 (#9921)

最后，让我们记住本次参与贡献 PR 的贡献者。他们是（排名不分先后）
- 王亚当
- 阿兹卡班守望者.Gf
——博·舒斯特
- 云456
- 三叶草露
- 柯基犬-w
- 宇宙镍
- 青蒂
——大卫·佐洛
- 点五星
- dy102
- dyp12
- 郭果
- 贾维斯
- 贾斯特
- 杰里米
- JeremyXin
——贾凡
- 李俊熙
- 克鲁托伊莱什
- 老王
- 莱昂·尤亚
——李东旭
- 李杰20190102
- 利民
- 林嘉文布伦达
——刘从基
- 卢皮帕里安
- mengxpgogogo-eng
- 米西
- 巧克力黑
- 史华丰
- 寂静之地
- 周沉
- 赵史蒂文
- 万明石
- wtybxqm
- 小陈
- yzeng1618
- 詹7236
——张东浩
- zhuxt2015
- zy

安装包下载链接：https://seatunnel.apache.org/download

---

> 📦 仓库：[apache/seatunnel](https://github.com/apache/seatunnel) · 🏷️ 版本：`2.3.13` · 📅 发布：2026-03-14 · [查看英文原版 Release](https://github.com/apache/seatunnel/releases/tag/2.3.13)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
