# jOOQ 3.17.35
### 为什么要使用jOOQ

在现代软件开发中，数据库操作往往是最繁琐且容易出错的环节。开发者们在面对复杂的SQL语句时，常常感到无从下手，甚至在调试时也会陷入困境。jOOQ的出现，正是为了打破这种矛盾。它不仅提供了类型安全的SQL构建方式，还能让开发者以更直观的方式与数据库交互，减少了出错的可能性。使用jOOQ，开发者可以专注于业务逻辑，而不是被繁琐的SQL语句所困扰。

### jOOQ是什么

jOOQ（Java Object Oriented Querying）是一个用于Java的数据库访问库，它通过将SQL语句转换为类型安全的Java代码，使得开发者能够以面向对象的方式构建和执行SQL查询。jOOQ支持多种数据库，并提供了丰富的API，使得数据库操作变得更加简单和高效。

### 入门示例

想象一下，你正在开发一个在线商店应用程序，需要从数据库中查询所有可用的产品。使用jOOQ，你可以这样做：

```java
DSLContext create = DSL.using(connection, SQLDialect.MYSQL);
Result<Record> result = create.select()
                               .from("products")
                               .where(field("available").eq(true))
                               .fetch();
```

在这个示例中，jOOQ让你以一种直观的方式构建SQL查询，而不需要手动编写复杂的SQL语句。你可以轻松地获取所有可用产品的信息，极大地提高了开发效率。

### jOOQ 3.17.35版本更新了什么

jOOQ 3.17.35版本是一次小幅更新，主要包含了一些改进和错误修复。此次更新增加了与API相关的Javadoc文档，修复了在使用BLOB或CLOB字段时可能出现的错误，并改进了对SQLDialect.LONGVARCHAR等类型的支持。此外，还对RETURNING子句的Javadoc进行了改进，强调在某些方言中无法返回任何行。

### 更新日志

# 版本 3.17.35 - 2025年2月19日
这是一次3.17的补丁发布，包含了一些小的改进和错误修复。

## 特性与改进
- 增加了与引用和声明相关的更多Javadoc文档，适用于相关API，如Field::as和Table::as。

## 错误修复
- 修复了在IN和NOT IN列表谓词中使用BLOB或CLOB字段时抛出的ORA-22848错误。
- 修复了在行值比较谓词中使用BLOB或CLOB字段时抛出的ORA-22848错误。
- 改进了对SQLDialect.LONGVARCHAR等特殊字符串/二进制类型的支持。
- 改进了RETURNING子句的Javadoc和DEBUG日志消息，强调在某些方言中无法返回任何行。
- 添加了新的AbstractDelegatingResultQuery内部类型，以避免在JVM启动时生成过多的默认方法字节码。

### 总结

jOOQ 3.17.35版本通过增加文档和修复多个关键错误，进一步提升了其稳定性和可用性。这些更新不仅优化了开发者的使用体验，也为未来的开发打下了更坚实的基础。