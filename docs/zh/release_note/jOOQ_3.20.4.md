# jOOQ 3.20.4
# 为什么要使用jOOQ  
在SQL与Java的永恒博弈中，开发者们被困在两种极端之间：要么被ORM框架的"魔法映射"绑架，忍受N+1查询的致命陷阱；要么深陷手写SQL的泥潭，在字符串拼接的地狱里与SQL注入风险共舞。jOOQ如同一把手术刀，精准切开这个死结——它用类型安全的DSL重构SQL的尊严，让数据库操作既保留原生SQL的掌控力，又获得编译时检查的盔甲。当你的Java代码与数据库 schema 实时同步时，每一次查询都像在编写一首编译器能吟诵的诗。

# jOOQ是什么  
jOOQ（Java Object Oriented Querying）是一个颠覆传统的数据库交互工具，通过代码生成将SQL转化为类型安全的Java DSL。它不像传统ORM试图隐藏SQL，而是将SQL提升为一等公民，允许开发者用Java代码构建精确、可维护的数据库查询，同时支持从MySQL到PostgreSQL等20+种数据库方言的智能适配。

# 入门示例  
**场景**：电商平台用户订单分析  
```java
// 生成jOOQ上下文
DSLContext ctx = DSL.using(connection, SQLDialect.POSTGRES);

// 动态查询：本月消费超过5000的高级用户
List<User> vipUsers = ctx.select(USER.NAME, USER.EMAIL, sum(ORDER.AMOUNT))
                        .from(USER)
                        .join(ORDER).on(USER.ID.eq(ORDER.USER_ID))
                        .where(ORDER.CREATE_DATE.gt(currentDate().minusDays(30)))
                        .groupBy(USER.ID)
                        .having(sum(ORDER.AMOUNT).gt(5000))
                        .fetchInto(User.class);

// 带事务的批量更新
ctx.transaction(configuration -> {
    DSLContext txCtx = DSL.using(configuration);
    txCtx.update(USER)
         .set(USER.LEVEL, "VIP")
         .where(USER.EMAIL.in(vipUsers.stream()
                                 .map(User::getEmail)
                                 .collect(Collectors.toList())))
         .execute();
});
```
这段代码展现了jOOQ两大杀器：流畅的链式调用构建复杂查询，以及声明式事务管理。通过代码生成器创建的`USER`/`ORDER`表对象，每个字段都成为编译器可验证的类型符号。

# jOOQ 3.20.4版本更新了什么  
- 新增Redshift对DECODE函数的原生支持  
- 修复Oracle物化视图创建语句的兼容性问题  
- 优化MariaDB的UPDATE RETURNING语句生成逻辑  
- 解决Kotlin/Scala代码生成中的审计列编译错误  
- 修正Redshift的LIMIT子查询支持与GROUP BY语法  

# 更新日志  

### Version 3.20.4 - 2025年5月2日  
本次更新包含功能改进和错误修复  

**功能改进**  
- 新增命令行执行特定Maven插件的文档指引  
- 为Redshift数据库添加原生DECODE函数支持  

**错误修复**  
- 修复Oracle JSON类型在INSERT RETURNING场景的类型映射问题  
- 修正Oracle 19c及更早版本中物化视图创建语句的模拟逻辑  
- 解决Keys类生成时主键与唯一键冲突导致的编译错误  
- 修复Kotlin/Scala审计列代码生成异常  
- 优化Redshift的CREATE MATERIALIZED VIEW语法生成  
- 改进MariaDB的UPDATE RETURNING模拟语句生成  
- 修正MULTISET JSON解析中数值精度丢失问题  
- 调整Meta.migrateTo外键约束的创建顺序逻辑  
- 修复LIMIT子句模拟策略中的比较运算符选择  

# 总结  
3.20.4版本聚焦于深度打磨：既增强了Redshift等数据库的特异性支持，又系统性修复了跨Oracle/MariaDB的关键场景缺陷。从代码生成器到查询模拟器，每个修正都在强化jOOQ的核心承诺——让类型安全的SQL操作在不同数据库间始终如一地精准落地。