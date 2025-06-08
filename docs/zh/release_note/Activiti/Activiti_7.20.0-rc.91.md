# Activiti 7.20.0-rc.91
# 为什么要使用Activiti  
当企业流程审批沦为Excel表格接力赛，当纸质表单在部门间流浪半月仍未签字，当新员工面对"找领导审批"的迷宫不知所措——这就是传统流程管理的真实困局。Activiti如同一位手持利剑的数字化骑士，刺破低效审批的迷雾。它不仅能将3天的报销流程压缩至3小时，更让每个审批节点变成可追踪的数据流。那些在微信群里@来@去却石沉大海的审批请求，在Activiti的世界里将获得精确的数字化坐标。选择它，不是拥抱技术，而是拒绝被低效流程绞杀的最后反抗。

# Activiti是什么  
一个用代码编织流程魔法的开源引擎。基于BPMN2.0标准，它能将企业复杂的审批流程、业务规则转化为可视化的数字蓝图。从请假申请到供应链管理，任何需要流程驱动的场景，都是它施展拳脚的舞台。

# 入门示例  
**场景**：电商订单风控流程  
```java
// 部署风控流程
ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
RepositoryService repositoryService = processEngine.getRepositoryService();
repositoryService.createDeployment()
    .addClasspathResource("order-risk-check.bpmn20.xml")
    .deploy();

// 启动流程实例
Map<String, Object> variables = new HashMap<>();
variables.put("orderAmount", 15000);
variables.put("userLevel", "VIP5");
RuntimeService runtimeService = processEngine.getRuntimeService();
ProcessInstance instance = runtimeService.startProcessInstanceByKey("riskCheck", variables);

// 风险审核任务处理
TaskService taskService = processEngine.getTaskService();
Task task = taskService.createTaskQuery()
    .processInstanceId(instance.getId())
    .singleResult();
taskService.complete(task.getId());
```
这个真实案例演示了如何用10行代码构建自动化风控流程，实现从大额订单识别到人工审核的完整链路。

# 7.20.0-rc.91版本更新  
1. 修复OAuth2授权码模式的令牌刷新缺陷  
2. 优化历史数据清理任务的执行策略  
3. 增强REST API的CSRF防护机制  
4. 改进Spring Boot Starter的自动配置逻辑  
5. 升级依赖库版本解决潜在安全漏洞  

# 更新日志
**完整更新日志**：[7.20.0-rc.90...7.20.0-rc.91](https://github.com/Activiti/Activiti/compare/7.20.0-rc.90...7.20.0-rc.91)

# 版本更新总结  
本次更新聚焦安全加固与性能优化，重点解决令牌刷新机制漏洞，提升系统防御能力，同时优化历史数据处理效率，为大规模流程部署提供更稳定的运行保障。