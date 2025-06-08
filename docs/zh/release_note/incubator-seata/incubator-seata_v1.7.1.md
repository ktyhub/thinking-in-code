# incubator-seata v1.7.1
```markdown
# Seata 1.7.1 发布

Seata 是一个易于使用、高性能的开源分布式事务解决方案。

本次版本更新如下：

### 新特性

- [#5803](https://github.com/seata/seata/pull/5803) Docker 镜像支持 JVM 参数注入

### Bug 修复

- [#5749](https://github.com/seata/seata/pull/5749) 业务 SQL 中主键列名的大小写与表元数据不一致，导致回滚失败
- [#5762](https://github.com/seata/seata/pull/5762) 更改 TableMetaCache 的某些字段类型以避免整数溢出
- [#5769](https://github.com/seata/seata/pull/5769) 修复 sofa-rpc 中 setAttachment 方法的参数前缀要求不满足的问题
- [#5814](https://github.com/seata/seata/pull/5814) 修复 XA 事务启动异常和回滚失败的问题
- [#5771](https://github.com/seata/seata/pull/5771) 插入执行器关键字反转义
- [#5819](https://github.com/seata/seata/pull/5814) 修复 Oracle 列别名无法找到的问题

### 优化

- [#5804](https://github.com/seata/seata/pull/5804) 优化 Docker 默认时区
- [#5815](https://github.com/seata/seata/pull/5815) 支持 Nacos 应用名称属性
- [#5820](https://github.com/seata/seata/pull/5820) 统一日志输出目录
- [#5822](https://github.com/seata/seata/pull/5822) 升级一些已弃用的 GitHub Actions

### 安全

- [#5728](https://github.com/seata/seata/pull/5728) 修复一些依赖项的漏洞
- [#5766](https://github.com/seata/seata/pull/5766) 修复一些序列化器的漏洞

感谢这些贡献者的代码提交。如有遗漏，请报告。

- [slievrly](https://github.com/slievrly)
- [capthua](https://github.com/capthua)
- [robynron](https://github.com/robynron)
- [dmego](https://github.com/dmego)
- [xingfudeshi](https://github.com/xingfudeshi)
- [hadoop835](https://github.com/hadoop835)
- [a364176773](https://github.com/a364176773)
- [DroidEye2ONGU](https://github.com/DroidEye2ONGU)

此外，我们还收到了社区许多宝贵的问题、建议和意见。感谢大家。
```