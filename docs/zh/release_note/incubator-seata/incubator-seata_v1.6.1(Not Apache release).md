# incubator-seata v1.6.1(Not Apache release)
Seata 1.6.1 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

本版本的更新如下：

### 新功能:
- 支持 `spring-boot:3.x`（[#5115](https://github.com/seata/seata/pull/5115)）

### 修复:
- 修复了使用 Eureka 启动服务器时出现的 `ClassNotFoundException` 问题（[#5179](https://github.com/seata/seata/pull/5179)）

### 优化:
- 统一 yml 文件中配置项的格式（[#5120](https://github.com/seata/seata/pull/5120)）
- 将 `GlobalTransactionScanner` 和 `SeataAutoDataSourceProxyCreator` 的 `@Bean` 方法声明为静态方法（[#5180](https://github.com/seata/seata/pull/5180)）
- 修复 GGEditor 中的一些安全漏洞（[#5182](https://github.com/seata/seata/pull/5182)）
- 优化一些开关的默认值（[#5183](https://github.com/seata/seata/pull/5183)）

感谢以下贡献者的代码提交：
- [slievrly](https://github.com/slievrly)
- [wangliang181230](https://github.com/wangliang181230)
- [xingfudeshi](https://github.com/xingfudeshi)
- [whxxxxx](https://github.com/whxxxxx)
- [xssdpgy](https://github.com/xssdpgy)

同时，我们也感谢社区提供的宝贵问题、建议和反馈。感谢大家的支持！