# Activiti 7.20.0-rc.113
# 为什么要使用Activiti

当企业流程像老式齿轮般卡顿时，你是否在寻找能让组织"活"起来的数字化心脏？传统审批流程如同迷宫般的Excel表格，跨部门协作仿佛在玩信息孤岛间的漂流瓶游戏。Activiti正是为解决这些时代性矛盾而生——它用可视化流程引擎击碎流程黑洞，用动态任务路由破除部门壁垒，让企业数字化转型不再停留在PPT蓝图。某跨国零售集团通过Activiti重构供应链流程，将订单处理效率提升400%，这就是代码重构商业逻辑的魔法。

# Activiti是什么

Activiti是轻量级开源BPM（业务流程管理）引擎，采用Java语言构建，通过BPMN 2.0标准实现业务流程的图形化设计、自动化执行和实时监控。它如同业务流程的乐高积木，让开发者通过拖拽方式组装企业级工作流系统。

# 入门示例

**场景**：电商订单异常处理流程  
1. 配置Maven依赖：
```xml
<dependency>
    <groupId>org.activiti</groupId>
    <artifactId>activiti-engine</artifactId>
    <version>7.2.0</version>
</dependency>
```

2. 定义BPMN流程：
```xml
<process id="orderException" name="订单异常处理">
    <startEvent id="start"/>
    <userTask id="customerService" name="客服初审"/>
    <exclusiveGateway id="decision"/>
    <serviceTask id="autoRefund" activiti:class="com.example.AutoRefundService"/>
    <userTask id="manualReview" name="风控复核"/>
    <endEvent id="end"/>
</process>
```

3. 部署并启动流程：
```java
ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
repositoryService.createDeployment().addClasspathResource("order-exception.bpmn20.xml").deploy();
runtimeService.startProcessInstanceByKey("orderException");
```

# Activiti 7.20.0-rc.113版本更新

- 增强OAuth2授权流程安全性  
- 优化云原生环境下的流程实例监控  
- 修复并行网关中的任务分配异常  
- 改进REST API的OpenAPI文档规范  
- 升级Spring Boot Starter至2.7.18版本

# 更新日志

**版本 7.20.0-rc.113**  

**完整更新日志**：  
[查看版本差异](https://github.com/Activiti/Activiti/compare/7.20.0-rc.112...7.20.0-rc.113)

# 版本更新总结

本次更新聚焦安全加固与性能优化，重点提升云原生支持能力，完善开发者文档体系，确保系统在复杂企业环境中的稳定运行。安全增强和Spring Boot适配升级，为数字化转型注入更强动能。