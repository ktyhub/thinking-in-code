# flink-cdc Release 3.3.0
### 为什么要使用flink-cdc

在数据驱动的时代，企业面临着一个巨大的矛盾：如何在瞬息万变的环境中保持数据的实时性与一致性。传统的数据处理方式往往无法满足快速变化的需求，导致数据滞后、决策失误，甚至影响业务的生存。而Flink CDC（Change Data Capture）正是为了解决这一问题而生。它能够实时捕捉数据变化，将数据流与批处理无缝结合，帮助企业在竞争中立于不败之地。使用Flink CDC，企业不仅能提高数据处理效率，还能在数据流转中保持高一致性，真正实现数据驱动的决策。

### flink-cdc是什么

Flink CDC是Apache Flink的一个扩展项目，旨在提供高效的实时数据捕获和流处理能力。它允许用户从多种数据源（如数据库）中捕获变化的数据，并将其实时流式传输到目标系统。通过Flink CDC，用户可以轻松构建实时数据管道，实现数据的实时分析和处理。

### 入门示例

想象一下，一个在线电商平台需要实时更新库存信息。当用户下单时，库存数据需要立即更新，以避免超卖的情况。使用Flink CDC，开发者可以设置一个数据流，从MySQL数据库中捕获库存表的变化。当库存数量发生变化时，Flink CDC会自动捕捉到这一变化，并将更新后的数据实时推送到Kafka消息队列中，随后再由下游的服务进行处理。这种方式不仅提高了数据处理的实时性，还确保了数据的一致性和准确性。

### flink-cdc Release 3.3.0版本更新了什么

Flink CDC 3.3.0版本带来了多个重要更新，包括对多个数据源的支持增强、性能优化以及Bug修复。此外，新增了对Db2、MongoDB等源连接器的支持，提升了用户的灵活性和可用性。该版本还改进了文档，使用户更容易上手和使用。最后，Flink CDC 3.3.0鼓励用户进行升级，以享受最新的功能和改进。

### 更新日志

# 发布公告
[发布公告链接](https://flink.apache.org/2025/01/21/apache-flink-cdc-3.3.0-release-announcement/)

# 发布说明
[发布说明链接](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315522&version=12354855)

# 下载
我们强烈建议所有用户升级到Flink CDC 3.3.0。

### Apache Flink CDC 3.3.0 tar
[Apache Flink CDC 3.3.0](https://www.apache.org/dyn/closer.lua/flink/flink-cdc-3.3.0/flink-cdc-3.3.0-bin.tar.gz)（asc, sha512）

[Apache Flink CDC 3.3.0 源代码发布](https://www.apache.org/dyn/closer.lua/flink/flink-cdc-3.3.0/flink-cdc-3.3.0-src.tgz)（asc, sha512）

### 管道连接器JAR
- MySQL管道连接器3.3.0
- Doris管道连接器3.3.0
- StarRocks管道连接器3.3.0
- Kafka管道连接器3.3.0
- Paimon管道连接器3.3.0
- Elasticsearch管道连接器3.3.0
- OceanBase管道连接器3.3.0
- MaxCompute管道连接器3.3.0

### 源连接器JAR
- Db2源连接器3.3.0
- MongoDB源连接器3.3.0
- MySQL源连接器3.3.0
- OceanBase源连接器3.3.0
- Oracle源连接器3.3.0
- Postgres源连接器3.3.0
- Microsoft SQL Server源连接器3.3.0
- TiDB源连接器3.3.0
- Vitess源连接器3.3.0

有关更多详细信息，请查看[更新的文档](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.3/)和发布说明。我们鼓励您下载该版本，并通过Flink邮件列表或JIRA与社区分享您的反馈。

### 总结

Flink CDC 3.3.0版本的更新记录显示了其在数据源支持、性能优化和用户体验方面的显著提升。通过引入新的连接器和改进文档，Flink CDC为用户提供了更强大的实时数据处理能力，鼓励用户尽快升级以享受最新的功能和改进。