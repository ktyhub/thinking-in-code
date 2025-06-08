# incubator-seata v1.7.1(Not Apache release)
```markdown
# Seata 1.7.1 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

## 更新内容如下：

### 新特性：
- [#5803](https://github.com/seata/seata/pull/5803) Docker 镜像支持 JVM 参数注入

### Bug修复：
- [#5749](https://github.com/seata/seata/pull/5749) 业务 SQL 中主键列名大小写与表元数据不一致，导致回滚失败
- [#5762](https://github.com/seata/seata/pull/5762) 修改 `TableMetaCache` 的部分字段类型，避免整数溢出
- [#5769](https://github.com/seata/seata/pull/5769) 修复 sofa-rpc 中 `setAttachment` 方法参数前缀要求的问题
- [#5814](https://github.com/seata/seata/pull/5814) 修复 XA 事务启动异常和回滚失败问题
- [#5771](https://github.com/seata/seata/pull/5771) 插入执行器关键字转义问题
- [#5819](https://github.com/seata/seata/pull/5819) 修复 Oracle 列别名无法找到的问题

### 优化：
- [#5804](https://github.com/seata/seata/pull/5804) 优化 Docker 默认时区设置
- [#5815](https://github.com/seata/seata/pull/5815) 支持 Nacos 应用名属性
- [#5820](https://github.com/seata/seata/pull/5820) 统一日志输出目录
- [#5822](https://github.com/seata/seata/pull/5822) 升级部分已弃用的 GitHub Actions

### 安全修复：
- [#5728](https://github.com/seata/seata/pull/5728) 修复部分依赖漏洞
- [#5766](https://github.com/seata/seata/pull/5766) 修复部分序列化器漏洞

我们非常感谢所有代码贡献者。也请大家报告任何未被提及的贡献。

此外，我们也收到了社区中许多有价值的问题和建议，感谢大家的支持！
```