# mybatis-plus v3.5.12
# 为什么要使用MyBatis-Plus

在Java开发的世界里，数据库操作就像一场永无止境的马拉松。当传统MyBatis让你在XML映射文件和重复CRUD代码中疲于奔命时，MyBatis-Plus犹如一柄破晓之剑——它能让你用1行代码完成过去50行的操作，用智能代码生成替代手动建表映射，用动态条件构造器实现复杂查询零SQL。当95%的基础操作被自动化，剩下的5%精力，正是你与竞争对手拉开差距的战场。

# MyBatis-Plus是什么

MyBatis-Plus是MyBatis的超能外骨骼。这个开源工具包为MyBatis注入三大核心能力：增强型CRUD操作如同智能机器人，自动分页插件像精准的瑞士钟表，而代码生成器则是你的数字孪生工程师。它不修改MyBatis底层，却能让开发效率实现量子跃迁。

# 入门示例

**电商订单查询实战**：  
假设你需要开发订单检索功能，支持多条件动态筛选。传统方式需手写XML和接口，而MyBatis-Plus只需：
```java
// 实体类注解标记
@TableName("orders")
public class Order {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String orderNo;
    private Integer status;
    private LocalDateTime createTime;
}

// Mapper接口继承魔法
public interface OrderMapper extends BaseMapper<Order> {}

// 动态条件构建
LambdaQueryWrapper<Order> wrapper = new LambdaQueryWrapper<>();
wrapper.between(Order::getCreateTime, startDate, endDate)
       .eq(Order::getStatus, 2)
       .orderByDesc(Order::getId);

List<Order> orders = orderMapper.selectList(wrapper);
```
这段代码在3秒内完成了过去需要半小时的XML配置，且自带防SQL注入护盾。

# MyBatis-Plus v3.5.12版本更新亮点

1. 修复异步批量操作首执行异常黑洞  
2. 重构SqlRunner实现动态SQL参数绑定  
3. 新增TDengine数据库WebSocket连接支持  
4. 多数据源适配器全面升级  
5. 代码生成器主键索引兼容性增强

# 更新日志

### v3.5.12 版本优化清单

- **问题修复**  
  修复批量操作异步执行首次可能出现的`NoSuchElementException`异常  
  解决默认SQL解析线程池在JVM退出时任务拒绝问题  
  修正实体类模板生成`toString`方法样式错乱  
  修复实体类模板注释与导包缺少换行缺陷  

- **性能优化**  
  重构`SqlRunner`执行逻辑（动态参数绑定取代硬编码SQL）  
  增强`SqlRunner`参数支持（Map键值/List索引/JavaBean属性）  
  改进`MybatisUtils`对自定义`SqlSessionTemplate`的提取  
  优化`MapperProxy`属性访问性能  

- **功能增强**  
  自动识别TDengine数据库WebSocket连接  
  支持`Db`工具类多数据源协同作战  
  `CompatibleSet`接口新增`getBean`与`getProxyTargetObject`方法  
  允许手动指定`CompatibleSet`实现策略  

- **代码生成进化**  
  智能处理驱动返回的索引空值问题  
  兼容以`PRIMARY_KEY_`开头的主键索引识别  
  统一各模板引擎的`toString`生成样式  
  消除Kotlin实体模板的多余导包分隔符  
  修复服务实现类模板格式不一致问题  

# 版本升级精要

本次升级是性能革命与功能进化的双重奏鸣。从根治异步批量操作的幽灵异常，到重构SQL执行引擎实现动态参数绑定；从TDengine数据库的特殊连接支持，到多数据源协同能力的突破性增强。代码生成器获得主键索引兼容性Buff，模板引擎完成全宇宙样式统一。这是MyBatis-Plus送给开发者的效率加速包，更是企业级应用的稳定性承诺。