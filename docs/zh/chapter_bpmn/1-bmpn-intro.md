# BPMN 2.0 核心建模与代码实战指南

## 一、BPMN建模体系总览
业务流程模型与标注（BPMN）是OMG组织制定的跨平台业务流程建模标准，包含23种核心元素+扩展机制。其核心价值体现在三个层面：

1. ​**​可视化统一​**​：通过标准化符号实现业务人员与开发人员的无缝沟通

2. ​**​模型可执行​**​：支持直接转换为BPEL/XML等可执行格式

3. ​**​引擎生态支持​**​：Activiti/Camunda/Flowable等主流引擎原生支持

![BPMN核心元素脑图](https://via.placeholder.com/600x400?text=BPMN+Core+Elements+Mind+Map)

## 二、核心建模元素详解

### 1. 流对象（Flow Objects）
#### 1.1 开始事件（Start Event）
```mermaid
graph TD
    A[开始事件] --> B[用户任务]
    B --> C[排他网关]
    C -->|批准| D[服务任务]
    C -->|拒绝| E[结束事件]

1.2 用户任务（User Task）
// Activiti用户任务定义示例
UserTask userTask = new UserTask();
userTask.setId("userTask1");       // 设置任务唯一标识
userTask.setName("合同审批");      // 定义任务名称
userTask.setAssignee("${approver}"); // 动态分配审批人
userTask.setDueDate("${dueDate}");   // 设置任务截止时间

2. 连接对象（Connecting Objects）
2.1 顺序流（Sequence Flow）
<!-- BPMN XML片段 -->
<sequenceFlow id="flow1" 
              sourceRef="startEvent1" 
              targetRef="userTask1" 
              name="发起审批"> <!-- 可选名称属性 -->
</sequenceFlow>

2.2 消息流（Message Flow）
// Camunda消息事件处理
runtimeService.correlateMessage("orderCreated", "order123"); 
// 通过消息名称和业务键触发流程实例

3. 泳道（Swimlanes）
graph LR
    A[客户] -->|提交订单| B[订单处理]
    B --> C[仓库]
    C --> D[财务]
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px

4. 数据对象（Data Objects）
// 流程变量操作示例
// 设置流程变量（全局可见）
runtimeService.setVariable(instanceId, "orderTotal", 2500.00);
// 设置局部变量（仅当前任务可见）
taskService.setVariableLocal(taskId, "reviewComment", "需要补充资质证明");

三、执行引擎工作原理
1. 流程定义解析
// Activiti流程部署代码
Deployment deployment = repositoryService.createDeployment()
    .addClasspathResource("purchase.bpmn") // 加载BPMN资源
    .name("采购审批流程")                // 部署名称
    .category("财务流程")               // 分类标签
    .tenantId("tenant_01")              // 多租户支持
    .deploy();

2. 实例生命周期
stateDiagram-v2
    [*] --> Created: 部署完成
    Created --> Running: start()
    Running --> Suspended: suspend()
    Running --> Completed: complete()
    Suspended --> Running: activate()
    Completed --> [*]
    note right of Created: 流程实例创建状态
    note right of Suspended: 暂停状态可恢复

四、实战案例：订单审批流程
1. BPMN模型图
graph TD
    A[创建订单] --> B[财务初审]
    B --> C{金额>5000?}
    C -->|是| D[总经理审批]
    C -->|否| E[部门经理审批]
    D --> F[完成]
    E --> F
    F --> G[归档]

2. Java实现关键代码
// 1. 流程启动
ProcessInstance instance = runtimeService.startProcessInstanceByKey(
    "orderApproval",          // 流程定义Key
    "ORDER-2023-001",         // 业务主键
    Collections.singletonMap("amount", 7500.00) // 传入流程变量
);

// 2. 任务查询
Task task = taskService.createTaskQuery()
    .processInstanceId(instance.getId()) // 按实例查询
    .taskAssignee("manager_001")         // 指定办理人
    .orderByTaskCreateTime().desc()      // 按创建时间倒序
    .singleResult();

// 3. 任务办理
taskService.complete(task.getId(), 
    Collections.singletonMap("approvalResult", "approved")); 
// 传递审批结果变量

五、高级建模技巧
1. 错误处理模式
<boundaryEvent id="errorBoundary" 
               attachedToRef="serviceTask1" 
               cancelActivity="true">
    <errorEventDefinition errorRef="invalidDataError"/>
</boundaryEvent>

2. 事务补偿机制
// Camunda补偿事件示例
transactionContext.addCompensationHandler(() -> {
    compensationService.triggerCompensation(
        "createOrder",         // 补偿活动ID
        "ORDER-2023-001",      // 业务主键
        Variables.createVariables().putValue("reason", "库存不足")
    );
});

BPMN建模本质是建立业务规则的数字化表达。建议开发者掌握：
1. 使用Activiti Designer/Camunda Modeler进行可视化建模
2. 通过BPMN XML进行深度定制
3. 结合Spring Boot集成流程引擎
4. 使用监控工具（如Cockpit）进行流程分析