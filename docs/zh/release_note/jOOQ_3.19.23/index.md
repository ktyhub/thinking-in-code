# jOOQ 3.19.23
### 为什么要使用jOOQ

你是否厌倦了在Java代码中拼接SQL字符串的噩梦？是否受够了ORM框架在复杂查询时的笨拙表现？当传统ORM将数据库表强行映射为对象时，jOOQ选择直面数据库的本质——SQL本身。它用类型安全的Java代码重构了SQL的优雅，让你在编译阶段就能捕获SQL语法错误，而非在深夜被生产环境的报警惊醒。更致命的是，当其他框架还在为分页语法兼容不同数据库头疼时，jOOQ早已用一行`.limit(10).offset(20)`统一了战场。这不是妥协，而是属于工程师的精致反叛。

---

### jOOQ是什么

jOOQ（Java Object Oriented Querying）是一个颠覆性的数据库交互工具，它将SQL语法转化为流畅的Java链式调用。不同于传统ORM对数据库的抽象，jOOQ直接基于数据库Schema生成类型安全的Java代码，允许开发者用面向对象的方式编写原生SQL，同时提供跨数据库兼容、编译期语法检查等杀手级特性。

---

### 入门示例

**场景**：电商平台用户订单统计  
假设存在`users`和`orders`表，需要查询最近7天消费超过5000元的高级会员：

```java
// 自动生成的表对象
Users u = USERS.as("u");
Orders o = ORDERS.as("o");

List<Tuple3<String, Integer, BigDecimal>> result =
dsl.select(u.USERNAME, u.LEVEL, sum(o.AMOUNT))
   .from(u)
   .join(o).on(u.ID.eq(o.USER_ID))
   .where(u.REGISTER_DATE.gt(LocalDate.now().minusDays(7)))
   .and(u.LEVEL.gt(3)))
   .groupBy(u.ID)
   .having(sum(o.AMOUNT).gt(5000))
   .fetch()
   .map(r -> tuple(r.get(u.USERNAME), r.get(u.LEVEL), r.get(sum(o.AMOUNT))));
```

这段代码在编译期就会验证字段是否存在、类型是否匹配，且生成的SQL自动适配当前数据库方言。当需要分页时，只需追加`.limit(10).offset(20)`，jOOQ会为MySQL生成`LIMIT`，为Oracle自动改写为`ROWNUM`查询。

---

### jOOQ 3.19.23版本更新了什么

- 新增命令行运行Maven插件的操作文档  
- 修复Oracle JSON类型在INSERT RETURNING时的映射异常  
- 纠正Redshift方言的物化视图创建语法  
- 解决Kotlin/Scala审计字段生成的编译错误  
- 优化MULTISET JSON对大数值的解析精度  

---

### 更新日志

# 版本3.19.23 - 2025年5月2日  
本次为3.19系列的小幅改进与问题修复版本  

**功能改进**  
- 新增从命令行运行独立Maven插件执行的文档说明  

**问题修复**  
- Oracle数据库使用INSERT RETURNING时无法映射JSON类型到DBMS_SQL.XXX_TABLE类型  
- Oracle 19c及更早版本中CREATE MATERIALIZED VIEW IF EXISTS语法模拟错误  
- Stringly类中存在Javadoc拼写错误  
- Kotlin/Scala代码生成时审计字段导致的编译错误  
- MULTISET JSON枚举数值因JSON解析器返回Double类型导致NUMERIC类型精度丢失  
- MariaDB使用UPSERT模拟UPDATE RETURNING时内联派生表导致的错误SQL生成  
- Redshift方言生成错误的CREATE MATERIALIZED VIEW语法  
- MERGE语句文档中残留H2数据库特定说明  
- Redshift新增支持GROUP BY整表引用语法  
- Redshift子查询LIMIT支持  
- InsertOnConflictDoUpdateStep::doUpdate注解错误修正  
- Meta.migrateTo()外键约束创建时机优化  
- 删除父子表时外键约束丢失问题  
- ORDER BY索引说明文档引用错误方法  
- 强制类型日志重复输出问题  
- 无OFFSET时LIMIT模拟查询优化  

---

### 版本更新总结

2025年5月发布的jOOQ 3.19.23版本主要聚焦稳定性提升，包含1项功能文档增强和16项问题修复，重点解决Oracle/Redshift方言兼容性、代码生成器精度问题及元数据迁移约束处理等关键痛点，为大规模数据操作提供更可靠的底层支持。