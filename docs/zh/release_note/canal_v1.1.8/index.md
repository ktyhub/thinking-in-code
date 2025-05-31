# canal v1.1.8
### 为什么要使用canal

在数据驱动的时代，企业面临着海量数据的挑战，如何高效地捕捉和处理这些数据成为了关键。而在这个过程中，canal的出现犹如一束光，照亮了数据同步的道路。想象一下，一个企业在进行数据库迁移时，数据的实时性和完整性至关重要。然而，传统的同步方式往往面临延迟和数据丢失的风险。canal通过高效的binlog解析技术，解决了这一矛盾，使得数据同步变得快速而可靠。它不仅提升了数据处理的效率，更为企业的决策提供了坚实的基础。

### canal是什么

canal是一个开源的分布式数据同步工具，主要用于MySQL数据库的增量数据订阅和消费。它通过解析MySQL的binlog（数据库日志），实现数据的实时同步，支持多种数据源和目标，包括但不限于MySQL、Elasticsearch、Kafka等。canal的设计旨在简化数据同步的复杂性，使开发者能够轻松实现数据的实时传输和处理。

### 入门示例

假设你是一家电商平台的开发者，负责实现订单数据的实时同步。使用canal，你可以轻松地将MySQL数据库中的订单信息实时同步到Elasticsearch，以便于进行搜索和分析。首先，你需要在canal中配置MySQL的连接信息，然后启动canal服务。接下来，canal会自动监控MySQL的binlog，并将新增的订单数据实时推送到Elasticsearch。这样，用户在搜索订单时，能够快速获取最新的信息，提升了用户体验。

### canal v1.1.8版本更新了什么

canal v1.1.8版本引入了对MySQL 8.4、MariaDB 11和Percona 8.0的支持，并新增了clickhouse的适配器。同时，深度适配了PolarDB-X的binlog解析，复用了polardbx-parse的SQL解析工具包。此外，新增了helm chart支持，方便用户部署和管理canal。最后，针对安全性进行了重要优化，提升了系统的稳定性和安全性。

### 更新日志

#### 功能新增
- 支持MySQL 8.4、MariaDB 11、Percona 8.0的版本。
- 新增clickhouse的适配器。
- 深度适配PolarDB-X集中分布式一体化版的binlog解析，复用polardbx-parse的SQL解析工具包。
- 新增helm chart支持，提供使用说明。

#### 重要优化
- canal默认admin.passwd风险说明。
- 修复spring读取远程配置文件触发的RCE漏洞。
- 支持SSL/TLS协议链接源端MySQL库。
- 支持caching_sha2_password密码策略。
- 支持rabbitmq SSL协议认证。
- 支持es8证书认证。
- 支持pulsar更多参数属性。

#### 小需求&bugfix
- 修复docker启动，避免无用的高权限。
- 兼容MariaDB GTID为空的情况。
- 优化集群模式的client的内存溢出风险。
- 修复集群模式的mq消费，避免zk出现session time out时出现多消费者。
- 修复client adapter同个instance配置多个group会共享CanalMsgConsumer，导致出现并发问题。
- 修复部分json格式解析失败问题。
- 修复TableMetaTSDB遇到的DDL关键字解析失败。

### 总结

canal v1.1.8版本在功能和安全性上进行了显著的提升，新增了对多种数据库的支持和适配器，优化了系统的稳定性，解决了多个bug，确保了数据同步的高效与安全。这些更新将为开发者提供更强大的工具，助力他们在数据处理的道路上走得更远。