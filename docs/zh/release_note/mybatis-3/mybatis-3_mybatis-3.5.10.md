# mybatis-3 mybatis-3.5.10
以下是翻译及梳理后的内容，已移除@符号和贡献者信息，并转为Markdown语法：

### Bug 修复：

- 在调用 OGNL 表达式中的方法时，出现了意外的非法反射访问警告（或在 Java 16+ 中出现 `InaccessibleObjectException`）。[详情查看 #2392](https://github.com/mybatis/mybatis-3/issues/2392)
- 在自动映射 Records (JEP-359) 时抛出了 `IllegalAccessException` 异常。[详情查看 #2195](https://github.com/mybatis/mybatis-3/issues/2195)
- 当 `PooledConnection#getConnection()` 被中断时，未设置 'interrupted' 状态。[详情查看 #2503](https://github.com/mybatis/mybatis-3/pull/2503)

### 增强功能：

- 新增了一个选项 `argNameBasedConstructorAutoMapping`。如果启用，构造函数参数名称将用于在自动映射时查找列。[详情查看 #2192](https://github.com/mybatis/mybatis-3/issues/2192)
- 为 `JdbcTransactionFactory` 新增了一个属性 `skipSetAutoCommitOnClose`。跳过调用 `setAutoCommit()` 可以在某些驱动程序上提高性能。[详情查看 #2426](https://github.com/mybatis/mybatis-3/issues/2426)
- `<constructor />` 中的 `<idArg />` 现在可以列在 `<arg />` 之后。[详情查看 #2541](https://github.com/mybatis/mybatis-3/issues/2541)

自 3.5.9 以来没有已知的不兼容更改。

请参阅 [3.5.10 里程碑页面](https://github.com/mybatis/mybatis-3/issues?q=is%3Aclosed+milestone%3A3.5.10) 了解完整的更改列表。