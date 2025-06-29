# incubator-seata v1.8.0(Not Apache release)
Seata 1.8.0 发布

Seata 是一款易于使用、高性能的开源分布式事务解决方案。

本次更新的内容如下：

### 新特性

- 支持达梦数据库
- 支持 PolarDB-X 2.0 数据库

### 修复的Bug

- 修复：在 XA 事务失败并回滚后，TC 错误地重试回滚的问题
- 修复达梦数据库列名大小写的转义字符问题
- 修复 store redis 模式下缺少 sentinel 密码的问题
- 修复某些已废弃的配置仍显示为 "Deprecated" 的问题

### 优化

- 小范围的语法优化
- 移除无许可证的依赖
- 移除 7z 格式压缩支持
- 移除 mariadb.jdbc 依赖
- 修复 codecov 图表不显示的问题
- 优化与 Apollo 相关的一些脚本
- 标准化 codecov.yml 中的属性
- 支持 Seata 的 JMX 端口

### 安全修复

- 修复 npm 包的漏洞

### 测试相关更新

- 移除 Sofa 测试用例
- 升级 Druid 并添加 `test-druid.yml`
- 修复 Java 21 单元测试问题
- 升级 native-lib-loader 版本
- 修复 Zookeeper 单元测试失败问题
- 固定 Seata-Server 使用的 Jedis 版本

感谢社区贡献者的代码提交。如果有未记录的贡献，请反馈给我们。

此外，我们也收到了来自社区的大量宝贵问题和建议，再次感谢大家的支持。