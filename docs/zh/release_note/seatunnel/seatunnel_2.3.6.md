---
title: "seatunnel 2.3.6"
project: "seatunnel"
repo: "apache/seatunnel"
tag: "2.3.6"
published: "2024-08-02"
type: "patch"
lang: "zh"
summary: "[Fix][Flink]Hotfix flink 检查点默认值 (#7040)；[Hotfix][Core]修复没有pluginname的作业的json配置的NullPointException (#6815)；[Fix][Dist] 删除发布包中的 aws jar 依赖项 (#7257)"
---

# seatunnel 2.3.6

# 2.3.6 Release Note

## 错误修复

### 核心
- [Fix][Flink]Hotfix flink 检查点默认值 (#7040)
- [Hotfix][Core]修复没有pluginname的作业的json配置的NullPointException (#6815)
- [Fix][Dist] 删除发布包中的 aws jar 依赖项 (#7257)

### 连接器
- [修复][Connector-V2]Paimon表中主键字段转换Column对象时isNullable属性为true。第7231章（7242）
- [Fix][Connector kafka]修复 TM 节点重启后 Kafka Consumer 停止获取的问题 (#7233)
- [Fix] 修复 Hana 类型转换器小数位数为 0 转换为 int 错误 (#7167)
- [BugFix][Connector-V2][Maxcompute]修复:Maxcompute接收器无法映射字段(#7164) (#7168)
- [Fix][Connector-V2] 修复 kafka 批处理模式无法读取所有消息的问题 (#7135)
- [Fix][Connector-V2][Elasticsearch]修复 DROP_DATA 的接收器配置 (#7124)
- [修复][连接器-V2][CDC] SeaTunnelRowDebeziumDeserializationConverters NPE (#7119)
- [Hotfix][Connector-V2]修复 Flink 模式下的rabbit checkpoint异常 (#7108)
- [Fix][Connector-V2] 修复 starrocks Content-Length 标头已存在错误 (#7034)
- [Hotfix][MySQL-CDC] 修复读取 gbk varchar 中文乱码问题 (#7046)
- [Hotfix][Hive Connector]修复 Hive hdfs-site.xml 和 hive-site.xml 无法加载错误 (#7069)
- [修复] hive 加载 hive_site_path 和 hdfs_site_path 太晚 (#7017)
- [Fix] 修复 pgsql 创建表注释特殊字符串错误 (#7022)
- [修复] 修复 `plugin_config` (#7104)
- [connector-jdbc][bugfix] 修复 sqlServer 创建表注释特殊字符串错误 (#7024)
- [connector-jdbc][bugfix] 修复 oracle create table comment 特殊字符串 bug (#7012)
- [Hotfix][CDC] 修复拆分架构更改流 (#7003)
- [bugfix] 修复 mysql 创建表注释特殊字符串错误 (#6998)
- [Paimon]支持 paimon 源的投影 (#6343)
- [bugfix][connector-mongodb] 修复 mongodb 空值写入 (#6967)
- [Hotfix][Connector-V2][kafka]Kafka消费者组自动提交偏移逻辑错误修复（#6961）
- [Bug] [connector-hive] 使用 kerberos for hive 进行 Eanble 登录 (#6893)
- [Bug][Connector-Iceberg]修复使用pks创建iceberg v2表（#6895）
- [修复]更正 kudu kerberos 配置的拼写错误 (#6905)
- [Hotfix][Connector-V2]任务关闭时关闭 tableWrite (#6897)
- [修复][Connector-V2]在 Paimon DataType 和 SeaTunnel Column 转换期间丢失字段信息 (#6767)
- [Hotfix][Connector-V2] 修复 paimon 批量写入问题 (#6865)
- [Hotfix][Jdbc] 修复 oracle savemode 创建表 (#6651)
- [bugFix][Connector-V2][Doris] 支持多 FE 配置 (#6341)
- [Hotfix][Postgres-CDC/OpenGauss-CDC]修复恢复时读取数据丢失的问题 (#6785)
- [修复] 修复 HttpSource 错误 (#6824)
- [Hotfix][Jdbc/CDC] 修复 jdbc 读取中的 postgresql uuid 类型 (#6684)
- [Hotfix][Dist] 添加 oracle cdc (#6818)
- [修复]修复 Debezium conf“key_convert_schemas.enable”设置 false 导致 nullPointException (#6809)
- [Fix][MySQL]: 修复 MySqlTypeConverter 无法实例化的问题 (#6781)
- [修复][Connector-V2]删除ElasticsearchCommitInfo中一些不正确的注释和属性
- [Hotfix][Jdbc] 修复 jdbc 目录的表/查询列顺序合并 (#6771)
- [Fix][KuduCatalogFactory]: 修复 KuduCatalogFactory.optionRule() 会抛出异常 (#6787)
- [Bug 修复] Sink Doris 错误状态(#6753) (#6755)
- [Bug][改进][Connector-v2][ElasticsearchSource]修复源为空时的行为，支持SourceConfig.SOURCE字段为空。 (#6425)
- [Fix] 修复 Oracle 类型转换器处理数字类型中的负比例 (#6758)
- [HiveSink]修复资源泄漏的风险。 (#6721)
- [bigfix][S3 File]：将[S3CONF class]的[SCHEMA]属性更改为非静态以避免反序列化后重新分配(#6717)
- [Fix][Connector-v2] 修复 doris 和 starrocks 建表 sql 语句错误 (#6679)
- [修复][connector-rocketmq] 向代理提交正确的偏移量并减少 ThreadInterruptedException 日志 (#6668)
- [Fix][Connector-V2] 修复 doris TRANSFER_ENCODING 标头错误 (#7267)

### 变压器
- [Fix][Transform] 修复 sql 转换丢失源类型和选项 (#6855)

### Zeta(ST-引擎)
- [Hotfix][Zeta] 修复任务组失败日志丢失的问题 (#7241)
- [Fix][Zeta] 修复两次释放插槽资源的问题 (#7236)
- [Fix][Zeta] 修复混合部署在初始化时无法获取worker的问题 (#7235)
- [HotFix] [远程调试] 描述启用远程调试时，Seatunel Server 5801 端口无法正确侦听 (#7206)
- [Fix][RestApi] 修复 hazelcast/rest/maps/submit-job 返回错误的 jobId (#7154)
- [Hotfix][Zeta] 修复批处理任务重试后无法停止的问题 (#7083)
- [Fix][Zeta] 修复 env jar 在 zeta 上不起作用 (#7035)
- [修复]恢复 IMAP 缓存数据字段类型以兼容旧版本 (#7001)
- [修补程序][Zeta] 修复 `generate_client_protocol.sh` (#6991)
- [Hotfix][Zeta] 修复多个并行读取器上架构更改时作业崩溃的问题 (#6977)
- [Fix] 修复 Metrics 丢失数据的错误 (#6976)
- [Hotfix][Zeta] 修复事件报告器中的 okhttp 连接泄漏 (#6945)
- [修复] 修复当 JobMaster 初始化未完成时作业永远不会取消成功的问题 (#6885)
- [Hotfix][Zeta] 修复保存点执行结果 (#6850)
- [Fix][Zeta] 当 waitForJobComplete 失败时提高日志级别 (#6827)
- [Fix] 修复 MultiTableWriterRunnable 无法捕获 Throwable 错误 (#6734)
- [HotFix][zeta]：修复丢失的作业 (#6759) (#6807)
- [fix][zeta]修复无法释放资源的问题(#6763)
- [Fix][Script] 修复当 jvm_options 文件不以 `\n` 结尾时丢失 jvm 选项 (#6693)

### 端到端
- [修复][E2E] 修复类加载器编号 (#7209)
- [CI] 修复仅测试用例更改时 k8s 引擎不运行的问题 (#7122)
- [Fix] 修复 Iceberg e2e 图像标签 (#7189)
- [CI][测试] 修复 engine-k8s-it 失败 (#7101)
- [CI] Connector-kafka-e2e 、connector-rocketmq-e2e 模块重复运行 #7090 (#7091)
- [E2E][HBase]重构 hbase e2e (#6859)
- [修复] 修复 ConnectorSpecificationCheckTest 失败的问题 (#6828)
- [CI] 修复 FixSlotResourceTest testNotEnoughResource 测试错误 (#6820)

## 改进

### 核心
- [改进][核心]将 MultiTableSink 移至 Seatunnel-api 模块 (#7243)
- [改进] 凹凸 org.xerial.snappy:snappy-java (#7144)
- [改进]删除日志以保护用户隐私(#6987)
- [改进][日志]自动刷新日志配置(#6915)
- [改进] [shell] 自动设置环境 SEATUNNEL_HOME (#6924)
- [改进] 优化启动命令期间的日志显示 (#6816)

### 连接器
- [改进][Doris Connector]统一序列化方法，使用 RowToJsonConverter 和 TextSerializationSchema (#7229)
- [改进][Jdbc] 支持将 unicode 文本写入 sqlserver (#7159)
- [改进] 改进无法解析日期时间值时的错误消息 (#7181)
- [改进][Hive]发生异常时关闭资源(#7205)
- [改进][Jdbc] 删除目录表选项中的用户信息 (#7178)
- [改进][Connector-V2] 添加对 MySQL 8.4 的支持 (#7151)
- [改进][hbase]指定列写入指定列族(#5234)
- [改进] 将目录表日志更改为调试级别 (#7136)
- [改进][Connector-V2] 支持 mysql-cdc 和 mysql-jdbc 的架构演变 (#6929)
- [改进][Redis] Redis 读写器使用扫描摄像头代替按键，单模式读写器支持批量 (#7087)
- [改进][Connector-V2][MongoDB] 支持从任何数字类型转换为 double (#6997)
- [改进][[Jdbc]sink sql 支持自定义字段。(#6515) (#6525)
- [改进][Connector-V2][Iceberg] 添加 hadoop s3 目录 e2e 测试用例 (#5745)
- [改进][Connector-V2] 清理目录表中的键名 (#6942)
- [改进][文件连接器]改进 xml 读取代码并修复不能对布尔选项使用 true (#6930)
- [改进][文件] 支持将固定/时间戳写入 parquet 的 int96 (#6971)
- [改进][Paimon] 在写入之前添加对源和接收器之间的基本类型的检查。 (#6953)
- [改进][Connector-V2] 改进 paimon 源 (#6887)
- [改进] 使 ClickhouseFileSinker 支持包含物化列的表 (#6956)
- [改进][Jdbc] 引用表路径的标识符 (#6951)
- [改进][CDC]将 debezium 的版本升级为 1.9.8.Final (#6740)
- [改进][Connector-V2] 支持 paimon sink 的 hive 目录 (#6833)
- [改进][CDC]在增量阶段关闭空闲子任务组（读取器/写入器）（#6526）
- [改进][JDBC源码]修复Split无法取消的问题 (#6825)
- [改进] 在 mongo cdc 选项规则中添加带有时间戳的 start.mode 条件 (#6770)
- [改进] 改进 doris 创建表模板默认值 (#6720)
- [改进] [Clickhouse] 删除设置allow_experimental_lightweight_delete false时的检查(#6727) (#6728)
- [改进] 改进 cdc 连接器中的读取表架构 (#6702)
- [改进][mysql-cdc] 当 show create table 失败时回退到 desc 表 (#6701)
- [改进][Connector-v2] hive 连接器支持多个文件系统 (#6648)
- [改进][Hive] 更新 hive3 版本 (#6699)
- [改进][mysql-cdc]支持mysql 5.5版本(#6710)
- [改进]更新aws-java-sdk-budle版本以修复作业无法运行的bug
- [改进] 改进 doris 流加载 client 侧错误消息 (#6688)
- [改进][连接器]为目录添加一些 sqlserver IDENTITY 类型 (#6822)
- [改进][Connector-v2] 优化 jdbc-oracle 和 oracle-cdc 的计数表行数 (#7248)

### 变压器
- [改进][Transform-V2] 删除表名上的 SQL 查询验证 (#7020)

### Zeta(ST-引擎)
- [改进][Restapi] 添加 ip 和端口到监控信息 (#7203)
- [改进][Zeta] 添加对提交重复作业 ID 的检查 (#7021)
- [改进][Zeta] 在资源管理器上请求插槽时添加重试 (#7049)
- [改进][Zeta] 修复 JobMaster 重置应用程序类加载器两次 (#7063)
- [改进][引擎]支持名为submit-job的rest-api自定义作业id (#7053)
- [改进][Zeta] 作业完成/取消时清理检查点文件 (#6938)
- [改进][Zeta] 支持关闭多个接收器的空闲任务 (#6864)
- [改进][Zeta] 将 SaveMode 行为移至 master (#6843)
- [改进] 在 client 中添加自定义作业 ID arg (#6943)
- [改进][Zeta] 当作业完成时，检查点不会写入文件 (#6674)

### CI
- [改进][CI]添加 milvus 到标签 (#7186)
- [改进][CI] 添加自动标签操作 (#7174)
- [改进][E2E][Doris] 为connector-doris-e2e 添加无模式测试用例 (#7076)
- [改进]启用冰山模式更改测试（#6711）

### 其他
- [杂务] 删除无用的代码 (#7110)
- [Typo] 拼写错误保存模式执行位置的提示 (#7100)
- [杂务] 删除无用的界面 (#6746)

## 特点

### 核心
- [功能][核心] 支持在接收器选项和自动替换中使用上游表占位符 (#7131)
- [功能][核心] 添加动态自定义参数的测试用例 (#7128)
- [功能][SQL 配置] 添加 SQL 配置适配器 (#6757)
- [Feature][starter] 支持用户在 Spark/Flink 引擎上定义参数 (#6387)

### 连接器
- [功能][Connector-V2][Milvus] 支持 Milvus 源和汇 (#7158)
- [功能][连接器-V2] [Hudi]添加 hudi 接收器连接器 (#4405)
- [功能][Connector-V2] 支持 jdbc hana 目录和类型转换器 (#6950)
- [Feature][Connector-V2][Clickhouse] 将 clickhouse.config 添加到源连接器 (#7143)
- [feature][Connector-file-local] 为本地文件添加保存模式功能 (#7080)
- [feature][connector-v2-hbase-sink] 支持 Connector v2 HBase sink TTL 数据写入 (#7116)
- [功能][连接器][kafka] 支持从 kafka 读取 Maxwell 格式消息 #4415 (#4428)
- [功能][Elasticsearch] 支持多表接收器写入 #7041 (#7052)
- [功能][德鲁伊]支持德鲁伊水槽的多表(#7023)
- [功能][连接器]添加德鲁伊接收器连接器(#6346)
- [功能][Connector-V2] 添加华为云 OBS 连接器 (#4578)
- [功能][Jdbc] 支持 redshift 目录 (#6992)
- [功能][Connector-V2] 支持任何文件的传输 (#6826)
- [Feature][Kafka] 支持多表源读取 (#5992)
- [功能][S3 文件]使 S3 文件连接器支持多表写入 (#6698)
- [功能][Doris] 添加 Doris 类型转换器 (#6354)
- [功能][Jdbc] 支持 InterSystems IRIS 的 jdbc 连接器 (#6797)
- [Feature][Connector-V2] Iceberg-sink 支持将数据写入分支 (#6697)
- [功能][Connector-V2] 添加 web3j 源连接器 (#6598)
- [功能][Connector-V2]支持StarRocks Fe节点HA
- [功能] Hive Source/Sink 支持多个表 (#5929)
- [连接器]添加 hbase 源连接器 (#6348)
- [Feature][Jdbc] 支持 hive 兼容模式添加 inceptor 方言 (#7262)

### 变压器
- [功能][变换] DynamicCompile 添加变换 (#7170)
- [功能][Transform-V2 Filter] 支持在过滤器转换中排除列 (#6960)
- [功能][转换]支持sql的is_date函数(#6966)

### Zeta(ST-引擎)
- [功能][RestAPI]概述支持标签过滤器(#7173)
- [功能][Zeta] 添加 Master 和 Worker 拆分模式部署 (#6947)
- [Feature][Zeta] 添加标签到节点，用于在提交作业时过滤worker (#7045)
- [功能][RestAPI] 添加概述 api (#6883)
- [Feature][Engine] 更改用于返回作业信息的 REST-api 接口的名称 (#6813)
- [功能][CheckPoint-stroage]：添加禁用缓存配置。 (#6718)
- [Feature][Zeta]添加多表模式下表统计的metrics信息(#7212)

## 文档
- [改进][文档] 将 IMap OSS 配置 jar 添加到文档中 (#7029)
- [杂务][NOTICE] NOTICE 文件中的正确年份 (#7232)
- [文档] 更新引擎相关文档信息 (#7228)
- [文档] hdfs 文件文档正确 (#7216)
- [文档] 更新贡献和自述相关文档信息 (#7188)
- [文档] 更新转换和常见问题解答相关文档信息 (#7187)
- [文档]将 clickhousefile、phoenix、rabbitmq、starrocks sink 文档翻译成中文 (#7015)
- [文档] 更新概念相关文档信息 (#7184)
- [文档] 更新快速入门 v2 相关文档信息 (#7161)
- [文档][连接器接收器] 添加文档连接器 v2 接收器 (#7097)
- [文档] 更新rest-api 文档 (#7111)
- [Doc] 更正文档 (#7099)
- [Doc] 添加引擎启动参数说明 (#7062)
- [文档] 修复接收器 jdbc 文档 (#6459)
- [文档] 修复 HdfsFile 演示配置 (#6921)
- [文档][改进]connector-v2 clickhouse/hbase/pulsar 接收器支持中文 (#6811)
- [文档][改进] doris 接收器支持中文 (#6803)
- [文档][改进]更新 Connector-v2-release-state (#6801)
- [ci][doc] 更新节点版本 (#6796)
- [文档][改进] 支持中文接收器 (#6663)
- [Doc][Improve] 删除不必要的逗号以使句子更流畅 (#6783)
- [文档][改进] 添加对 Config-Encryption-Decryption.md 的中文支持 (#6715)
- [Doc][Improve] 介绍文档中的多行文本功能 (#6713)
- [改进][文档] 将 Postgre-CDC.md 文件中的 Postgre 修复为 PostgreSQL (#7112)
- [改进][文档]改进钉钉文档 (#7075)
- [改进][文档] 使用表情符号修复雪花 jdbc url (#7061)
- [Hotfix][DOC] 修复无效链接 (#7018)
- [Feature][doc][Connector-V2][Common] 添加通用连接器文档 (#5453)
- [文档] 修复 starrocks 文档演示配置 (#6918)
- [Hotfix][Docs] 统一 debezium 文档地址指向 debezium github 以防止死链接 (#6892)
- [修复][DOC] 修复文档提示和警告 (#6839)
- [改进][文档] 将 sql-config 文档添加到 sidebars.js (#6836)
- [改进] 更新文档中的 doris sink 模板默认值 (#6810)
- [修复][文档]修复死链接 (#6764)
- [改进][Zeta] 添加 Minio 文档作为 zeta 任务的检查点存储 (#6732)

---

> 📦 仓库：[apache/seatunnel](https://github.com/apache/seatunnel) · 🏷️ 版本：`2.3.6` · 📅 发布：2024-08-02 · [查看英文原版 Release](https://github.com/apache/seatunnel/releases/tag/2.3.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
