# jOOQ 3.18.30
# 为什么要使用jOOQ  
当开发者深陷在"对象关系阻抗不匹配"的泥潭中，当团队因SQL拼接漏洞频发而彻夜加班，当项目被臃肿的ORM框架拖慢性能时——jOOQ犹如一柄锋利的手术刀，精准切开了传统数据库操作的三大矛盾：类型安全与灵活性的对立、SQL原生表达与跨数据库兼容性的冲突、开发效率与运行性能的博弈。它既不像MyBatis那样放任开发者裸泳于字符串拼接的暗礁中，也不效仿Hibernate用复杂的缓存机制掩盖数据库交互的本质，而是选择在Java编译器与数据库引擎之间架起一座类型安全的双向桥梁。

# jOOQ是什么  
jOOQ是基于Java的现代数据库交互工具，通过代码生成技术将数据库表结构转化为类型安全的Java对象。它允许开发者用面向对象的方式编写SQL，同时保留原生SQL的表达力，支持从简单CRUD到复杂分析查询的全场景覆盖，兼容20余种主流数据库方言。

# 入门示例  
**场景**：电商系统需要快速实现用户订单统计功能  
```java
// 生成代码对应orders表有user_id, amount字段
Orders o = ORDERS.as("o");
Users u = USERS.as("u");

Result<Record3<String, Integer, BigDecimal>> result =
ctx.select(u.USERNAME, count(), sum(o.AMOUNT))
   .from(u)
   .join(o).on(u.ID.eq(o.USER_ID))
   .groupBy(u.USERNAME)
   .having(sum(o.AMOUNT).gt(1000))
   .fetch();

result.forEach(record -> {
    String username = record.get(u.USERNAME);
    BigDecimal total = record.get(sum(o.AMOUNT));
    System.out.println(username + "总消费:" + total.setScale(2));
});
```
这段代码在编译期就会验证表字段是否存在、类型是否匹配，且自动适配不同数据库的分组函数差异。

# jOOQ 3.18.30版本更新  
1. 新增命令行执行Maven插件的文档指引  
2. 修复Oracle的JSON类型映射问题  
3. 优化Redshift对GROUP BY整表及LIMIT子查询的支持  
4. 修正Kotlin/Scala审计列代码生成错误  
5. 改进MULTISET JSON数值解析精度问题  

# 更新日志  
### Version 3.18.30 - 2025年5月2日  
本次为3.18系列的小幅改进和错误修复版本  

**功能改进**  
- 新增从命令行运行单个Maven插件执行的文档说明  

**错误修复**  
- 修复Oracle使用INSERT RETURNING时JSON类型无法映射到DBMS_SQL.XXX_TABLE类型的问题  
- 修正Oracle 19c及更早版本中CREATE MATERIALIZED VIEW IF EXISTS的模拟实现  
- 修复Stringly类中的Javadoc拼写错误  
- 解决使用审计列时生成的Kotlin/Scala代码编译错误  
- 修复MULTISET JSON枚举将NUMERIC值转为Double导致的数值舍入问题  
- 改进无小数的大双精度值在MULTISET JSON模拟中的解析异常  
- 移除MERGE语句中H2特定的Javadoc注释  
- 增强Redshift对GROUP BY整表及LIMIT子查询的支持  
- 修正InsertOnConflictDoUpdateStep::doUpdate的错误注解  
- 优化Meta.migrateTo()外键约束的创建顺序逻辑  
- 修复使用Meta::migrateTo删除父子表时遗漏FOREIGN KEY约束的问题  
- 修正ORDER BY索引Javadoc中错误的方法引用  
- 避免代码生成器重复记录强制类型应用日志  

# 总结  
3.18.30版本聚焦于深度优化数据库方言兼容性，重点修复Oracle、Redshift等场景下的边界问题，提升代码生成器在Kotlin/Scala生态的稳定性，同时强化MULTISET JSON等高级功能的数据处理精度，体现了jOOQ持续打磨企业级特性的匠心。