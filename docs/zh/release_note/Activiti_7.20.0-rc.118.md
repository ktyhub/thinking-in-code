# Activiti 7.20.0-rc.118
# 为什么要使用Activiti  
当企业流程像老式打字机般卡顿时，数字化革命的浪潮正席卷而来。你是否经历过这样的场景：市场部提交的促销方案在8个部门间流转审批，最终错过黄金销售期；HR的新员工入职流程因纸质签字丢失而陷入混乱；财务报销单在领导邮箱里沉睡三周无人问津。这些现代企业中的"流程窒息症"，正是Activiti要斩断的戈尔迪之结——它不仅是技术工具，更是组织数字化转型的手术刀，将人肉流程升级为智能化的数字神经网络。

# Activiti是什么  
一个开源的轻量级工作流引擎，用Java编写的业务流程自动化利器。如同乐高积木般支持可视化搭建企业流程，基于BPMN 2.0标准规范，能将复杂的业务流程转化为可执行的数字蓝图。从请假审批到跨国供应链协调，皆可构建成自动化的工作流机器。

# 入门示例  
**电商订单异常处理场景**：当用户投诉商品破损时，系统自动触发三路并行的处理流——  
1. 客服团队创建补偿工单  
2. 仓储部门启动破损品回收流程  
3. 财务系统生成代金券发放任务  

```java
// 部署流程定义
RepositoryService repositoryService = processEngine.getRepositoryService();
Deployment deployment = repositoryService.createDeployment()
  .addClasspathResource("order-compensation.bpmn20.xml")
  .deploy();

// 启动流程实例
RuntimeService runtimeService = processEngine.getRuntimeService();
ProcessInstance processInstance = runtimeService
  .startProcessInstanceByKey("orderCompensationProcess");
```

每个节点自动推送企业微信通知，审批超时自动升级，全过程数据实时生成风控报告。某跨境电商上线该流程后，客诉处理时效从72小时压缩至4小时。

# Activiti 7.20.0-rc.118版本更新  
- Spring Boot依赖升级至2.7.18加固安全基座  
- 修复流程变量在并行网关中的幽灵写入问题  
- 优化历史数据清理任务的数据库死锁机制  
- 增强OpenAPI文档的OAuth2安全配置说明  
- 重构消息事件订阅模块的内存管理策略  

---

# 更新日志  
### 完整更新记录  
查看版本差异对比：[7.20.0-rc.117...7.20.0-rc.118](https://github.com/Activiti/Activiti/compare/7.20.0-rc.117...7.20.0-rc.118)

---

# 版本升级点睛  
本次更新如同给流程引擎做了一次精准的微创手术：安全基座加固消除潜在风险，并行网关的变量问题修复避免数据幽灵，历史数据清理优化让系统永葆轻盈。这些改进如同给数字化的流程高速公路安装了智能交通灯，确保业务流程更安全顺畅地飞驰。