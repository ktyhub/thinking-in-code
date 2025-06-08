# incubator-seata v1.6.1
```markdown
# Seata 1.6.1 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

本次版本更新如下：

### 新特性：
- [#5115](https://github.com/seata/seata/pull/5115) 支持 `spring-boot:3.x`

### Bug修复：
- [#5179](https://github.com/seata/seata/pull/5179) 修复服务器使用 Eureka 启动时的 ClassNotFoundException

### 优化：
- [#5120](https://github.com/seata/seata/pull/5120) 统一 yml 文件中配置项的格式
- [#5180](https://github.com/seata/seata/pull/5180) 将 GlobalTransactionScanner 和 SeataAutoDataSourceProxyCreator 中的方法声明为静态方法
- [#5182](https://github.com/seata/seata/pull/5182) 修复 GGEditor 中的一些安全漏洞
- [#5183](https://github.com/seata/seata/pull/5183) 优化一些开关的默认值

感谢以下贡献者的代码提交。如有遗漏，请报告：
- [slievrly](https://github.com/slievrly)
- [wangliang181230](https://github.com/wangliang181230)
- [xingfudeshi](https://github.com/xingfudeshi)
- [whxxxxx](https://github.com/whxxxxx)
- [xssdpgy](https://github.com/xssdpgy)

此外，我们还收到了社区中许多宝贵的问题、建议和意见。感谢大家的支持。
```