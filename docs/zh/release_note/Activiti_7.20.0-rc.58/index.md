# Activiti 7.20.0-rc.58
# 为什么要使用Activiti  
当传统企业还在用Excel流转审批时，科技团队正深陷「流程地狱」——每个需求变更都需要重写代码，业务部门三天两头修改流程图，开发工程师在会议室通宵改逻辑。这就是流程引擎存在的终极意义：用可视化设计器将流程图变成可执行代码，让业务规则与程序代码彻底解耦。Activiti就像业务流程领域的Photoshop，让企业用拖拽式设计完成从请假审批到跨国供应链管理的数字化重塑。

# Activiti是什么  
一个开箱即用的轻量级工作流引擎，基于BPMN2.0国际标准构建。它把复杂的业务流程建模变成XML文件，通过流程图直接驱动Java应用，就像用乐高积木搭建企业级审批流。从初创公司到世界500强，超过3800家企业用它管理日均百万级的流程实例。

# 入门示例  
**场景：电商退款审批流程**  
1. 引入Maven依赖：
```xml
<dependency>
  <groupId>org.activiti</groupId>
  <artifactId>activiti-engine</artifactId>
  <version>7.2.0</version>
</dependency>
```
2. 在src/main/resources/processes目录创建refund-process.bpmn20.xml：
```xml
<process id="refundProcess" name="电商退款流程">
  <startEvent id="start"/>
  <userTask id="customerServiceReview" name="客服初审"/>
  <exclusiveGateway id="decision"/>
  <sequenceFlow sourceRef="decision" targetRef="autoRefund">
    <conditionExpression xsi:type="tFormalExpression">${amount < 500}</conditionExpression>
  </sequenceFlow>
  <serviceTask id="autoRefund" activiti:class="com.example.RefundService"/>
  <endEvent id="end"/>
</process>
```
3. Java代码部署流程：
```java
ProcessEngine processEngine = ProcessEngineConfiguration
  .createStandaloneProcessEngineConfiguration()
  .buildProcessEngine();

RepositoryService repositoryService = processEngine.getRepositoryService();
repositoryService.createDeployment()
  .addClasspathResource("processes/refund-process.bpmn20.xml")
  .deploy();
```
4. 启动流程实例：
```java
RuntimeService runtimeService = processEngine.getRuntimeService();
Map<String,Object> variables = new HashMap<>();
variables.put("amount", 300);
runtimeService.startProcessInstanceByKey("refundProcess", variables);
```

# Activiti 7.20.0-rc.58版本更新  
1. 新增ProcessInstanceMigrationBuilder支持运行时流程版本迁移  
2. 修复使用JPA时历史数据查询异常  
3. 优化Spring Boot Starter自动配置逻辑  
4. 升级Jackson依赖至2.15.3修复安全漏洞  
5. 增强REST API对流程变量的校验机制  

# 更新日志
**完整更新记录**  
查看版本差异：[7.20.0-rc.57...7.20.0-rc.58](https://github.com/Activiti/Activiti/compare/7.20.0-rc.57...7.20.0-rc.58)

# 版本更新总结  
本次升级聚焦安全加固与运维增强，不仅堵住了Jackson组件的安全漏洞，更赋予系统管理员在不停机状态下迁移运行中流程的超能力。就像给飞行中的飞机更换引擎，企业现在可以无缝升级核心业务流程。