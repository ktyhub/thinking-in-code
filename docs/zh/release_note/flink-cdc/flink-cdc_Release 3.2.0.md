# flink-cdc Release 3.2.0
### 为什么要使用flink-cdc

在数据驱动的时代，企业面临着海量信息的挑战，如何实时捕捉和处理这些数据成为了关键。Flink CDC（Change Data Capture）正是为了解决这一矛盾而生。想象一下，一个电商平台在促销期间，订单数据瞬息万变，如何确保数据的实时性和准确性？Flink CDC通过高效的数据捕捉和流处理，帮助企业在瞬息万变的市场中保持竞争力。它不仅提升了数据处理的效率，更为决策提供了实时支持，让企业在数据的海洋中游刃有余。

### flink-cdc是什么

Flink CDC是Apache Flink的一个扩展，专注于实时捕捉和处理数据库中的变更数据。它通过连接不同的数据源，实时将数据变更流转到目标系统，帮助企业实现数据的实时分析和处理。Flink CDC支持多种数据库，能够高效地处理数据流，适用于各种实时数据处理场景。

### 入门示例

假设一家在线零售商希望实时监控其库存变化，以便及时调整采购策略。使用Flink CDC，开发者可以设置一个数据流，从MySQL数据库中捕捉库存表的变更。每当库存数量发生变化时，Flink CDC会自动捕捉到这一变更，并将其推送到Kafka中。接着，另一个Flink作业可以从Kafka中读取这些变更数据，实时更新库存状态并触发相应的业务逻辑。这种实时处理能力使得企业能够快速响应市场需求，提升运营效率。

### flink-cdc Release 3.2.0版本更新了什么

Flink CDC 3.2.0版本带来了多个重要更新，包括对MySQL、Doris和Kafka等多个管道连接器的增强，提升了数据捕捉的稳定性和性能。此外，新增了对MongoDB和Db2的源连接器，扩展了支持的数据库范围。该版本还修复了一些已知问题，优化了用户体验，确保了更高的可靠性和效率。

### 更新日志

# 发布公告
[发布公告链接](https://flink.apache.org/2024/09/05/apache-flink-cdc-3.2.0-release-announcement/)

# 发布说明
[发布说明链接](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315522&version=12354594)

# 下载
## Apache Flink CDC 3.2.0 tar
[下载链接](https://www.apache.org/dyn/closer.lua/flink/flink-cdc-3.2.0/flink-cdc-3.2.0-bin.tar.gz)

## 管道连接器 JAR
- MySQL管道连接器3.2.0
- Doris管道连接器3.2.0
- StarRocks管道连接器3.2.0
- Kafka管道连接器3.2.0
- Paimon管道连接器3.2.0
- Elasticsearch管道连接器3.2.0

## 源连接器 JAR
- Db2源连接器3.2.0
- MongoDB源连接器3.2.0
- MySQL源连接器3.2.0
- OceanBase源连接器3.2.0
- Oracle源连接器3.2.0
- Postgres源连接器3.2.0
- Microsoft SQL Server源连接器3.2.0
- TiDB源连接器3.2.0
- Vitess源连接器3.2.0

### 总结

Flink CDC 3.2.0版本的更新不仅增强了对多种数据库的支持，还提升了数据捕捉的稳定性和性能，为用户提供了更高效的实时数据处理能力。

### 爆款标题

- "Flink CDC 3.2.0：实时数据处理的革命性升级！"
- "全新Flink CDC 3.2.0发布，支持更多数据库，性能大幅提升！"
- "Flink CDC 3.2.0：让数据流动更顺畅的秘密武器！"
- "实时捕捉数据变更，Flink CDC 3.2.0版本重磅来袭！"
- "Flink CDC 3.2.0更新：多种连接器增强，助力企业数据决策！"