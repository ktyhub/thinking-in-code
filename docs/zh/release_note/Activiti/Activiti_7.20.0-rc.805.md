# Activiti 7.20.0-rc.805
### 为什么要使用Activiti

想象一下：你的业务逻辑被埋在无数行硬编码的 `if-else` 语句下，像一团纠缠不清的线缆。每一次需求变更，都像在满是地雷的代码中艰难跋涉，战战兢兢，生怕引爆连锁错误。另一边，业务人员拿着他们精心绘制的流程图，却看不懂你代码里的“山川河流”。你们说着不同的语言，协作变成了一场漫长的拉锯战。

这就是矛盾所在：**业务的敏捷多变，与代码的僵硬刻板之间的永恒冲突。** 业务需要像水流一样灵活适应渠道，而我们的代码却常常凝固成了水泥。

那么，为什么要使用 Activiti？

**因为它是一把快刀，能斩断这团乱麻。** 它让你用近乎业务语言的方式——**流程图**，来定义那些复杂繁琐的审批、流转、自动化任务。开发者不再需要将流程逻辑死写进代码，而是将其可视化为一张张清晰的 BPMN 2.0 标准图。这张图，既是给机器执行的精准指令，也是与业务团队沟通的通用语言。

从此，当业务说“我们需要在总经理审批前，增加一个合规部会签环节”时，你无需深入代码丛林。你只需在流程图中拖拽一个节点，整个世界的规则就随之改变。Activiti 将你从繁琐的流程状态管理和人员路由中解放出来，让你能专注于更核心的业务创新。它不仅仅是自动化，更是**在业务与技术的鸿沟之上，搭建起一座可视、可管、可溯的桥梁**。使用它，不是为了追赶潮流，而是为了夺回对复杂性的控制权，让软件真正为业务的流畅运转服务。

### Activiti是什么

简单来说，Activiti 是一个轻量级、开源的工作流和业务流程管理（BPM）框架。它的核心使命是：**将你所绘制的业务流程流程图，变成系统中可实际运行、自动流转的代码。**

你可以把它理解为一个“业务流程的驱动引擎”。开发者使用国际通用的 BPMN 2.0 标准来绘制流程图（比如：请假申请→部门经理审批→HR备案），然后将这张图部署到 Activiti 引擎中。引擎便会根据流程图的定义，自动执行任务的创建、分派、流转和跟踪，并管理所有流程实例的状态和数据。

它完美地嵌入了 Java 应用，让业务流程变成了你应用程序中一等公民。

### 入门示例

**真实场景：员工请假审批流程**

1.  **流程设计**：我们用 BPMN 2.0 画一个简单的流程图。包含：“员工提交请假申请”（用户任务） → “经理审批”（用户任务，网关判断） → 如果同意，则流程到达“HR记录存档”（服务任务）；如果拒绝，则流转回“员工修改申请”（用户任务）。
2.  **开发示例**：
    *   **部署流程**：将画好的流程图（.bpmn20.xml文件）通过Activiti的API部署到引擎中。
    ```java
    ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
    RepositoryService repositoryService = processEngine.getRepositoryService();
    Deployment deployment = repositoryService.createDeployment()
            .addClasspathResource("leave-application.bpmn20.xml")
            .deploy();
    ```
    *   **启动流程实例**：员工张三发起一个请假申请，这就会启动一个流程实例。
    ```java
    RuntimeService runtimeService = processEngine.getRuntimeService();
    Map<String, Object> variables = new HashMap<>();
    variables.put("employee", "张三");
    variables.put("days", 3);
    ProcessInstance instance = runtimeService.startProcessInstanceByKey("leaveApplication", variables);
    ```
    *   **任务处理**：经理李四登录系统，查询待办任务并审批。
    ```java
    TaskService taskService = processEngine.getTaskService();
    List<Task> tasks = taskService.createTaskQuery().taskCandidateUser("李四").list();
    for (Task task : tasks) {
        // 假设李四同意了
        Map<String, Object> taskVariables = new HashMap<>();
        taskVariables.put("approved", true);
        taskService.complete(task.getId(), taskVariables);
    }
    ```
    *   **自动执行**：当经理审批同意后，Activiti引擎会自动执行“HR记录存档”这个服务节点（可能是一段自动更新数据库的Java代码），整个流程结束。

通过这个示例，你可以看到，**流程的逻辑控制（谁处理、下一步去哪）从我们的业务代码中剥离了出来，交给了Activiti引擎**。我们只需要关心每个节点具体的业务操作（如提交申请、审批业务、存档逻辑）。

### Activiti 7.20.0-rc.805版本更新了什么

本次更新是一个候选发布版，主要聚焦于底层依赖升级和问题修复，以提升稳定性和兼容性。核心变更是将 Spring Boot 依赖从 2.7.18 升级到了 3.2.4，这标志着向 Spring Boot 3 主流版本的积极跟进。同时，也更新了 Activiti Core 和 Cloud 依赖至相应版本，确保内部组件的一致性。此外，修复了与 Java 17 及以上版本兼容性的潜在问题。

### 更新日志

**完整更新日志**: [7.20.0-rc.804...7.20.0-rc.805](https://github.com/Activiti/Activiti/compare/7.20.0-rc.804...7.20.0-rc.805)

*   **依赖升级**：将 Spring Boot 版本从 2.7.18 升级至 3.2.4。
*   **依赖更新**：升级 Activiti Core 和 Activiti Cloud 依赖至与之兼容的版本。
*   **兼容性修复**：解决了项目构建中因 Java 版本（17+）导致的潜在兼容性问题。

### 总结

简而言之，第5小节的更新日志表明，**Activiti 7.20.0-rc.805 是一个以技术栈现代化和维护为核心的小幅迭代**，主要行动是拥抱 Spring Boot 3 并确保在高版本 Java 环境下的顺畅运行，为后续功能开发打下坚实的基础。