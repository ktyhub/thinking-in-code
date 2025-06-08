# DataX datax_v202309
### DataX是什么

DataX是阿里巴巴开源的一款数据同步工具，旨在帮助用户高效地在不同的数据源之间进行数据传输。它支持多种数据源，包括关系型数据库、NoSQL数据库、文件系统等，能够实现数据的批量导入和导出。DataX的设计理念是简化数据迁移过程，使得数据工程师和开发者能够更专注于数据的分析和应用，而不是繁琐的数据传输工作。

### 为什么要使用DataX?

使用DataX的理由有很多。首先，它支持多种数据源和目标，极大地提高了数据迁移的灵活性。其次，DataX具有高性能和高可靠性，能够处理大规模的数据传输任务。此外，DataX的配置简单，易于上手，适合各种技术水平的用户。最后，作为一个开源项目，DataX拥有活跃的社区支持，用户可以获得及时的更新和技术支持。

### DataX v202309版本更新了什么

在最新的DataX v202309版本中，进行了多项重要更新和修复，具体包括：

- 支持Phoenix同步数据时添加where条件
- 增加华为GuassDB读写插件
- 修复ClickReader插件运行时的错误，解决“Can't find bundle for base name”问题
- 增加DataX调试模块
- 修复ORC空文件报错问题
- 优化obwriter性能
- txtfilewriter增加导出为insert语句的功能支持
- HdfsReader/HdfsWriter支持parquet读写能力

### 更新日志

- 支持Phoenix同步数据添加where条件
- 支持华为GuassDB读写插件
- 修复ClickReader插件运行报错问题
- 增加DataX调试模块
- 修复ORC空文件报错问题
- 优化obwriter性能
- txtfilewriter增加导出为insert语句功能支持
- HdfsReader/HdfsWriter支持parquet读写能力