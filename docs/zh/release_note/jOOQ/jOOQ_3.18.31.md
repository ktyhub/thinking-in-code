# jOOQ 3.18.31
### 为什么要使用jOOQ  
想象一下：你正用Java操作数据库，却深陷在"SQL字符串地狱"中——拼接语句易错、调试耗时、类型安全为零。更糟的是，ORM框架强制你妥协：要么放弃复杂查询能力，要么忍受笨重的映射配置。这就是jOOQ的破局时刻！它让你用Java流畅书写类型安全的SQL，像编译代码一样捕获SQL错误，同时保留原生SQL的全部灵活性。告别妥协，拥抱掌控——jOOQ让你在数据库操作中同时拥有"开发效率"和"执行性能"的双重王炸！

### jOOQ是什么  
jOOQ（Java Object Oriented Querying）是一个基于Java的数据库操作库。它通过自动生成Java类映射数据库表结构，让你用类型安全的API编写SQL查询。不同于传统ORM，jOOQ不隐藏SQL细节，而是将其转化为Java链式调用——既保留SQL的强大功能，又提供编译时错误检查、代码补全等现代化开发体验。支持主流数据库如MySQL、PostgreSQL，是Java开发者与数据库对话的优雅桥梁。

### 入门示例  
**场景**：电商平台需要查询用户最近3笔订单金额超过100元的记录。  
**传统JDBC痛点**：手动拼接SQL易漏写条件，字符串连接易出错。  
**jOOQ解决方案**（使用自动生成的`Tables.USER`和`Tables.ORDER`）：  
```java
// 链式API构建类型安全查询
Result<Record> result = dslContext.select()
    .from(USER)
    .join(ORDER).on(USER.ID.eq(ORDER.USER_ID))
    .where(USER.ID.eq(123)
    .and(ORDER.AMOUNT.gt(100)) // 金额>100元
    .orderBy(ORDER.CREATE_TIME.desc())
    .limit(3) // 最近3笔
    .fetch();
```
**优势**：  
- 字段名`ORDER.AMOUNT`直接代码补全，避免拼写错误  
- 条件`gt(100)`自动类型检查，防数据类型不匹配  
- 链式调用直观表达SQL逻辑，调试效率提升50%  

### jOOQ 3.18.31版本更新  
本次更新聚焦稳定性和兼容性：  
1. 新增`jOOQ-bom`模块，统一管理依赖版本，解决Maven多模块冲突  
2. 优化`Diff`工具：修复约束/索引重名处理逻辑，避免误删关键约束  
3. 增强CockroachDB 24支持，正确识别其自增序列  
4. 修复`IN`列表填充异常，规避浮点运算导致的边界问题  
5. 解决DDL语句排序缺陷，确保数据库迁移脚本可靠性  

### 更新日志  
#### Version 3.18.31 - 2025年6月11日  
本次为3.18系列的补丁版本，包含小幅改进和错误修复。  

**功能改进**  
- 新增jOOQ-bom模块  

**错误修复**  
- Diff工具无法处理约束和索引名称互换的问题  
- 修复删除主键时应优先移除NOT NULL约束的逻辑  
- 解决CockroachDB 24中自增列序列未被识别为系统序列的问题  
- 禁止Diff工具单独删除表中的单列  
- 修复因浮点舍入错误导致IN列表填充过大的罕见情况  
- 修正MULTISET内使用隐式连接路径表投影时，临时转换器接收未附加记录的问题  
- 消除TableImpl初始化中的竞态条件，避免错误日志提示重复标识  
- 阻止Diff生成依赖未创建表的CREATE VIEW语句  
- 解决解析器无法识别带引号内置函数的问题  
- 优化Diff对序列、模式、目录的DDL排序逻辑  
- 增强Meta::getDomains方法的多方言支持  
- 修复解释器仅能使用首个Settings.interpreterSearchPath的问题  
- 确保Configuration::derive和SettingsTools::clone深度克隆所有集合属性  
- 修正DSL::queries包裹DML查询时隐式连接渲染错误  
- 消除过程化代码块在DSL::queries内渲染多余分号的问题  
- 解决解析器无法处理派生表中左关联括号嵌套集合操作的问题  
- 修复解析器对非标量子查询NULL谓词的解析失败  
- 修正DDL上下文中CAST(? AS <type>)表达式的解析异常  
- 支持从Informix的SELECT语句调用包含DML的存储函数  
- 修复使用Scala-3生成枚举（或带主体的Java枚举）时的空指针异常  

### 总结  
3.18.31版本通过17项关键修复强化工具链：重点优化Diff工具的数据迁移安全性，消除CockroachDB/Informix等数据库兼容性隐患，并根治浮点运算、枚举处理等边界场景的稳定性风险。新增BOM模块则显著提升大型项目管理效率。