# Activiti 7.20.0-rc.793
### 为什么要使用Activiti

你是否曾在深夜，因为一个看似简单的“审批流程”改动，而不得不推翻重写数百行代码？你的业务团队是否总是抱怨，为什么一个微小的流程调整，却需要数周的开发和等待？

这就是传统开发中最大的矛盾：**业务变化的速度，永远快于代码修改的速度**。业务是流动的、善变的，它需要像水一样灵活；而我们的代码，却常常像水泥一样，一旦固化，改动起来便尘烟四起。

Activiti，正是为了解决这一核心矛盾而生。它不是在教你写更多的代码，而是在教你如何**“绘制”业务**。使用Activiti，意味着你将业务流程从错综复杂的`if-else`丛林和状态机迷宫中解放出来，将其变成一张可视化的流程图。当市场要求流程从“三级审批”改为“两级并行审批”时，你不再需要打开IDE、提交工单、等待发布。业务人员可以理解，开发者只需轻点鼠标，调整那条连接线。

选择Activiti，就是选择拥抱变化。它让你从“流程的编码者”转变为“业务的设计师”，将创造力从重复的代码劳作中释放，去解决真正具有挑战性的问题。这就是为什么，在追求敏捷的时代，明智的团队会选择用一个引擎来承载变化的核心。

### Activiti是什么

Activiti 是一个轻量级、开源的工作流和业务流程管理（BPM）引擎。它的核心使命是**将现实世界的业务流程（如请假、报销、订单处理）转化为可执行、可监控的软件流程**。

你可以把它想象成一个高精度的“业务乐高”引擎。开发者使用标准的 BPMN 2.0 图表（一种像流程图的可视化语言）来设计和定义流程。然后，Activiti 引擎会负责驱动这个流程模型运行，自动推动任务从一个人流转到另一个人，或从一个系统跳转到另一个系统，并精确记录每一步的轨迹。

简而言之，Activiti 在**业务需求**和**软件实现**之间，搭建了一座标准化、自动化的桥梁。

### 入门示例

**真实场景：员工请假审批流程**

让我们设想一个经典场景：员工提交请假申请，若天数≤3天，直属经理审批后即结束；若>3天，需经理审批后，再交由人力资源部备案。

**开发示例：**

1.  **建模（用图说话）**：
    使用 Activiti 提供的建模工具（如在线Modeler或Eclipse插件），你只需拖拽几个图形：一个“开始事件”、一个“用户任务”（填写申请）、一个“排他网关”（判断天数）、两个“用户任务”（经理审批和HR备案），以及“结束事件”。用连线将它们按逻辑连接起来。这张图就是你的业务蓝图，也是最终可执行的代码。

2.  **部署（注入生命）**：
    将绘制好的BPMN 2.0 XML文件（即流程图）打包，通过几行Java代码部署到Activiti引擎中。
    ```java
    ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
    RepositoryService repositoryService = processEngine.getRepositoryService();
    Deployment deployment = repositoryService.createDeployment()
            .addClasspathResource("leave-application.bpmn20.xml")
            .deploy();
    ```

3.  **运行（启动流程）**：
    当员工“张三”发起请假时，启动一个流程实例。
    ```java
    RuntimeService runtimeService = processEngine.getRuntimeService();
    Map<String, Object> variables = new HashMap<>();
    variables.put("employee", "张三");
    variables.put("days", 5); // 请假5天
    ProcessInstance instance = runtimeService.startProcessInstanceByKey("leaveProcess", variables);
    ```

4.  **驱动（任务流转）**：
    引擎会根据流程图自动推进。当前，任务到达“经理审批”环节。经理李四查询自己的任务列表并完成审批。
    ```java
    TaskService taskService = processEngine.getTaskService();
    List<Task> tasks = taskService.createTaskQuery().taskAssignee("李四").list();
    taskService.complete(task.getId());
    ```
    由于天数>3，引擎自动将流程推送到下一个“HR备案”任务，由HR王五处理。整个过程的状态、变量和路径全部由引擎自动管理。

通过这个示例，你会发现，复杂的业务逻辑被直观的图形取代，状态流转的繁琐代码消失无踪，你只需关心核心的业务数据和用户任务。

### Activiti 7.20.0-rc.793版本更新了什么

根据官方发布日志，此版本主要包含了一系列问题修复和依赖项升级，旨在提升稳定性和兼容性。更新重点包括：新增了流程实例变量变更时触发事件监听器的机制，优化了多项运行时和处理器的配置，并修复了之前版本中存在的若干问题。同时，它对内部依赖库进行了版本对齐和升级。

### 更新日志

**完整更新日志**：[7.20.0-rc.792...7.20.0-rc.793](https://github.com/Activiti/Activiti/compare/7.20.0-rc.792...7.20.0-rc.793)

### 总结概括

此次更新是一个以修复和优化为主的版本，侧重于增强引擎的事件监听能力、改善配置项并解决已知问题，同时维护了依赖组件的健康度。