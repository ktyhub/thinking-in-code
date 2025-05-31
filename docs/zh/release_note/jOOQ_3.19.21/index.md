# jOOQ 3.19.21
# 为什么要使用jOOQ  
当开发者被困在"手写SQL地狱"与"ORM框架枷锁"的夹缝中时，jOOQ如一道惊雷劈开混沌。传统JDBC要求你像打字机般机械拼接SQL字符串，而Hibernate等ORM框架却用黑魔法将数据库抽象成谜团——你永远不知道生成的SQL会带来怎样的性能灾难。jOOQ给出了第三把钥匙：用Java代码编写类型安全的SQL，就像在IDE里与数据库直接对话。当你的团队为N+1查询问题彻夜调试时，当生产环境因SQL注入漏洞被攻破时，当业务需求迫使你在三天内支持三种数据库方言时，这才是属于工程师的终极武器。

# jOOQ是什么  
jOOQ是面向Java开发者的SQL构建工具，用代码生成技术将数据库表结构转化为类型安全的对象。它既不是笨重的全功能ORM，也不是原始的字符串拼接器，而是让你用Java语法编写SQL的精密仪器——既能享受编译时检查的严谨，又能保留原生SQL的灵活。

# 入门示例  
想象一个电商场景：查询最近7天消费超过5000元的高级会员，按注册时间排序。用jOOQ只需：
```java
// 自动生成的表对象
Members m = MEMBERS.as("m");
Orders o = ORDERS.as("o");

ctx.select(m.USERNAME, m.EMAIL, sum(o.AMOUNT))
   .from(m)
   .join(o).on(m.ID.eq(o.USER_ID))
   .where(o.CREATED_AT.gt(LocalDateTime.now().minusDays(7)))
   .groupBy(m.ID)
   .having(sum(o.AMOUNT).gt(5000))
   .orderBy(m.REGISTER_DATE.asc())
   .fetch();
```
这段代码不仅直观如SQL，更在编译时验证字段类型，自动适配不同数据库方言，甚至能通过jOOQ的智能提示发现拼写错误——这才是现代数据库交互应有的姿态。

# jOOQ 3.19.21版本更新  
- 新增MySQL/MariaDB对ALTER TABLE设置非空约束的支持  
- 完善DiagnosticsListener的文档链接  
- 修复元数据迁移时外键删除顺序问题  
- 解决Kotlin生成器在严格模式下的类型声明缺陷  
- 优化PostgreSQL JSON字段的全限定名处理  

# 更新日志
# Version 3.19.21 - 2025年3月11日  
本次为3.19系列的小幅改进与缺陷修复版本  

## 功能改进  
- 新增MySQL和MariaDB对`ALTER TABLE .. SET NOT NULL`/`DROP NOT NULL`的支持  
- 在`DiagnosticsListener`的Java文档中添加手册链接  

## 缺陷修复  
- 在"字段与值数量不匹配"错误中显示具体长度信息  
- 修复`Meta.migrateTo()`删除列前未处理外键或索引的问题  
- 解决`ArrayConverter`处理原始int数组时的类型转换异常  
- 修复使用多维数组转换器时的`ArrayStoreException`  
- 优化`DiagnosticsConnection`的事件触发机制与缓存处理  
- 修正PostgreSQL嵌套行在特定转换场景下的配置关联问题  
- 修复`Record::key`生成游离记录的问题  
- 改进Kotlin生成器对全局对象名称的类型声明  
- 解决Oracle数据库处理JSON字段时的语法异常  

# 版本总结  
3.19.21版本重点增强MySQL生态的DDL支持，完善诊断工具链，并集中修复了涉及类型转换、元数据迁移、Kotlin代码生成等领域的12个关键缺陷，显著提升了框架在复杂场景下的稳定性。