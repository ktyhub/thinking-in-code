# flink-cdc Release 3.2.1
### 为什么要使用flink-cdc

在数据驱动的时代，企业面临着前所未有的挑战：如何实时获取和处理数据，以便做出快速而准确的决策。然而，传统的数据处理方式往往滞后，无法满足瞬息万变的市场需求。此时，Flink CDC（Change Data Capture）应运而生，它不仅能实时捕捉数据库中的变化，还能将这些变化无缝地流转到数据处理管道中。想象一下，您正在经营一家电商平台，订单数据、库存信息、用户行为等都在不断变化，如何确保这些数据能够及时反映在您的分析报告中？Flink CDC正是解决这一矛盾的利器，让您在竞争中立于不败之地。

### flink-cdc是什么

Flink CDC是Apache Flink的一个扩展项目，旨在实现对数据库变更数据的实时捕捉和处理。它通过连接不同的数据源，能够实时监控数据库的变化，并将这些变化以流的形式传递到下游系统。Flink CDC支持多种数据库，如MySQL、PostgreSQL、MongoDB等，极大地简化了数据流转的复杂性，使得实时数据处理变得更加高效和灵活。

### 入门示例

假设您是一家在线零售商，想要实时监控用户的购物行为，以便及时调整库存和促销策略。您可以使用Flink CDC连接到MySQL数据库，捕捉订单表的变化。当用户下单时，Flink CDC会自动捕捉到这一变化，并将订单信息实时发送到Flink流处理管道中。在Flink中，您可以编写简单的流处理逻辑，比如计算实时销售额、更新库存信息，甚至触发个性化的营销活动。通过这种方式，您不仅能提高响应速度，还能提升用户体验，最终实现业务增长。

### flink-cdc Release 3.2.1版本更新了什么

Flink CDC 3.2.1版本带来了多个重要更新，包括对多个连接器的增强和修复，提升了整体性能和稳定性。此外，该版本还增加了对新数据库的支持，扩展了功能范围。用户界面和文档也得到了改进，使得使用体验更加友好。最后，社区反馈机制得到了优化，鼓励用户积极参与项目的改进。

### 更新日志

# 发布公告
[发布公告链接](https://flink.apache.org/2024/11/27/apache-flink-cdc-3.2.1-release-announcement/)

# 发布说明
[发布说明链接](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315522&version=12355099)

# 下载
我们强烈建议所有用户升级到Flink CDC 3.2.1版本。

### Apache Flink CDC 3.2.1 tar
[Apache Flink CDC 3.2.1](https://www.apache.org/dyn/closer.lua/flink/flink-cdc-3.2.1/flink-cdc-3.2.1-bin.tar.gz) 

### 管道连接器JAR
- MySQL管道连接器3.2.1
- Doris管道连接器3.2.1
- StarRocks管道连接器3.2.1
- Kafka管道连接器3.2.1
- Paimon管道连接器3.2.1
- Elasticsearch管道连接器3.2.1

### 源连接器JAR
- Db2源连接器3.2.1
- MongoDB源连接器3.2.1
- MySQL源连接器3.2.1
- OceanBase源连接器3.2.1
- Oracle源连接器3.2.1
- Postgres源连接器3.2.1
- Microsoft SQL Server源连接器3.2.1
- TiDB源连接器3.2.1
- Vitess源连接器3.2.1

有关更多详细信息，请查看[更新的文档](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.2/)和发布说明。我们鼓励您下载该版本并通过Flink邮件列表或JIRA与社区分享您的反馈。

### 总结

Flink CDC 3.2.1版本的更新记录显示了其在性能、稳定性和用户体验方面的显著提升，增加了对新数据库的支持，并鼓励用户积极参与项目的改进。这些更新将进一步推动实时数据处理的应用，为用户提供更强大的工具来应对数据挑战。