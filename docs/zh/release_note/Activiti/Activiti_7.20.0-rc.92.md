# Activiti 7.20.0-rc.92
### 为什么要使用Activiti  
当企业深陷"流程地狱"——审批卡在领导邮箱、跨部门协作像击鼓传花、系统间数据孤岛林立时，Activiti如同数字时代的达芬奇密码，解开了传统开发模式中「流程」与「代码」的死亡缠绕。它让业务人员能用可视化流程图直接驱动系统运转，开发者不再需要为每个审批节点编写200行if-else代码。这种颠覆性的「流程即代码」理念，正在引发一场企业数字化转型的静默革命。

### Activiti是什么  
Activiti是轻量级开源工作流引擎，基于BPMN 2.0标准构建。它如同数字世界的交通管制系统，通过可视化流程图定义业务审批、任务流转规则，实现复杂业务流程的自动化编排与监控。

### 入门示例  
**真实场景**：某电商公司退货流程涉及客服初审→质检核验→财务退款3个环节，人工流转常超48小时。  

**开发实现**：  
1. 使用BPMN设计器绘制流程图  
```xml
<process id="return_process">
   <startEvent id="start"/>
   <userTask id="customer_service" name="客服审核"/>
   <serviceTask id="quality_check" activiti:class="QualityCheckDelegate"/>
   <userTask id="finance_refund" name="财务退款"/>
   <sequenceFlow sourceRef="start" targetRef="customer_service"/>
   <sequenceFlow sourceRef="customer_service" targetRef="quality_check"/>
   <sequenceFlow sourceRef="quality_check" targetRef="finance_refund"/>
</process>
```
2. Java代码启动流程  
```java
ProcessInstance process = runtimeService.startProcessInstanceByKey("return_process");
// 查询待办任务
List<Task> tasks = taskService.createTaskQuery()
    .taskAssignee("客服小李")
    .list();
// 完成任务
taskService.complete(task.getId());
```

### Activiti 7.20.0-rc.92版本更新  
1. 修复OAuth2授权流程中的令牌刷新异常  
2. 优化流程实例历史数据查询性能  
3. 升级Spring Boot Starter至2.7.18版本  
4. 增强REST API的请求验证机制  
5. 修复特定场景下并行网关的路由错误  

### 更新日志  
**更新日志**  

**完整变更记录**：版本对比链接：[7.20.0-rc.91...7.20.0-rc.92](https://github.com/Activiti/Activiti/compare/7.20.0-rc.91...7.20.0-rc.92)

### 版本更新总结  
本次更新聚焦安全加固与性能提升，主要涉及OAuth2授权修复、历史查询优化、框架版本升级等核心改进，为企业级流程管理提供更稳定可靠的底层支撑。