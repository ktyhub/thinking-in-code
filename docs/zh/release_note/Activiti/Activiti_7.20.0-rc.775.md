# Activiti 7.20.0-rc.775
# 为什么要使用Activiti

在数字时代的漩涡中，企业常常陷入这样的矛盾：一方面追求敏捷与效率，渴望业务流程能像水流一样自由灵动；另一方面却又被僵硬的系统架构、冗长的审批链条和难以维护的代码所束缚，每一步创新都仿佛带着镣铐跳舞。你是否也曾目睹，一个简单的请假流程竟需要跨越五个系统、三次手动抄送，最终在某个遗忘的邮箱里沉寂？或是亲手编写了数百个“状态判断”后，发现业务规则一变，整个世界都要推倒重来？

这就是**Activiti**登场之时。它并非只是又一个技术框架，而是一次对“流程即代码”这种硬编码思维的彻底反抗。它让业务专家能用可视化的方式设计流程，让开发者从繁琐的状态机中解放，更让企业获得随时适应变化的超能力。选择Activiti，就是选择在秩序与灵活之间架起一座桥，让业务流程真正成为推动创新的引擎，而非绊脚石。

# Activiti是什么

Activiti是一个轻量级、开源的工作流和业务流程管理（BPM）平台。它核心是一个用Java编写的流程引擎，允许你将业务流程图（使用BPMN 2.0标准）直接部署执行。简单来说，它把“流程图”变成可以自动运转的应用程序，处理任务分配、步骤流转和决策分支，并与你的系统无缝集成。

# 入门示例

**真实场景**：公司请假审批流程。员工提交申请，若请假天数≤3天，直属经理审批后即结束；若＞3天，需经理审批后，再流转至部门总监做最终审批。

**开发示例**：
1.  **设计流程**：使用Activiti Modeler或任何支持BPMN 2.0的工具绘制流程图，包含“提交申请”、“经理审批”、“总监审批”等用户任务，以及根据“天数”判断流向的网关。
2.  **部署流程**：将BPMN文件与应用程序打包，通过Activiti API部署到引擎中。
3.  **启动与执行**：
    ```java
    // 启动一个流程实例，并设置变量‘leaveDays’
    ProcessInstance instance = runtimeService.startProcessInstanceByKey("leaveProcess", variables);
    
    // 员工提交后，系统自动为经理生成待办任务
    Task managerTask = taskService.createTaskQuery().processInstanceId(instance.getId()).singleResult();
    taskService.complete(managerTask.getId(), approvalVariables);
    
    // 引擎根据审批结果和天数变量，自动决定下一步是结束还是流转至总监。
    ```
4.  **集成**：你的前端系统只需查询当前用户的待办任务（`taskService.createTaskQuery().taskAssignee(userId).list()`）并展示，用户审批后调用`complete`接口即可。所有流程状态与路由均由Activiti引擎自动驱动。

# Activiti 7.20.0-rc.775版本更新了什么

本次更新主要围绕云原生（Activiti Cloud）组件的优化与依赖升级展开。核心变更为：将`activiti-cloud-api-dto`模块的版本统一升级至`7.20.0-rc.775`，确保了内部API数据传递对象的一致性。这是发布候选（RC）阶段的常规迭代，旨在完善组件间的协同与稳定性，为最终正式版的发布做准备。

# 更新日志

**完整更新日志**: [7.20.0-rc.774...7.20.0-rc.775](https://github.com/Activiti/Activiti/compare/7.20.0-rc.774...7.20.0-rc.775)

# 总结

此次更新是一次针对云原生组件依赖版本的协同性升级，属于发布前的精细调整，旨在提升整体一致性。