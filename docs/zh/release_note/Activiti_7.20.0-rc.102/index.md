# Activiti 7.20.0-rc.102
# 为什么要使用Activiti  
当企业流程变成"谁先说话谁做主"的人治战场，当审批流在微信群里流浪三个月找不到归宿，当新员工对着"找人-等签-催办"的死循环崩溃大哭——你需要一场工作流管理的文艺复兴。Activiti 就是插进传统办公沼泽的那根氧气管，它将散落在邮件、聊天窗口和口头承诺中的业务流程，锻造成精密运转的数字齿轮。别再让Excel审批表在部门间踢皮球，拒绝为"领导出差无法签字"的烂梗买单，是时候用代码重构权力游戏规则了！

# Activiti是什么  
一把打开流程自动化潘多拉魔盒的密钥。这个开源工作流引擎用BPMN 2.0标准将业务流程转化为可执行的数字蓝图，让请假审批、订单处理等企业流程像乐高积木般自由拼装。当你在钉钉上点击"提交报销"时，背后很可能正游动着Activiti驱动的审批鲨鱼。

# 入门示例  
**真实场景**：某电商公司促销审核流程经常卡在法务部，导致活动上线延误。  

**开发示例**（Spring Boot集成）：  
1. 定义促销审批流程BPMN图，设置市场部提交、法务合规审查、CEO终审三个节点
```java
ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
RepositoryService repositoryService = processEngine.getRepositoryService();
repositoryService.createDeployment().addClasspathResource("promotion.bpmn20.xml").deploy();
```
2. 启动流程实例时携带促销文案参数
```java
Map<String, Object> variables = new HashMap<>();
variables.put("promotionText", "双11买一送十");
RuntimeService runtimeService = processEngine.getRuntimeService();
ProcessInstance instance = runtimeService.startProcessInstanceByKey("promotionReview", variables);
```
3. 法务部登录系统自动接收待办任务，审查时触发合规校验服务
```java
TaskService taskService = processEngine.getTaskService();
Task legalTask = taskService.createTaskQuery().processInstanceId(instance.getId()).singleResult();
taskService.complete(legalTask.getId(), Collections.singletonMap("legalApproved", true));
```
当流程卡顿时，实时监控面板会亮起预警红灯，自动发送催办邮件到法务总监邮箱。

# Activiti 7.20.0-rc.102版本更新  
1. 修复子流程中发起人参数丢失的致命缺陷  
2. H2数据库升级至2.3.2筑牢数据安全防线  
3. 邮件组件升级支持最新安全协议  
4. 流程定义搜索分页功能结束"假死"状态  
5. 十余个依赖项升级消除潜在漏洞威胁  

# 更新日志
## What's Changed

### 🐛 Bug Fixes
- [AAE-33031] 修复调用活动子流程中发起人参数未传递的问题

### ⬆️ Dependencies
- 升级 H2 数据库版本至 2.3.232
- 升级 Alfresco 构建工具至 8.18.0
- 升级 Java UUID 生成器至 5.1.0
- 升级 Commons Email 至 1.6.0
- 升级 Joda-Time 至 2.13.1
- 升级 Commons Text 至 1.13.0
- 升级 Maven 许可证插件至 2.5.0
- 升级 Maven Failsafe 插件至 3.5.2
- 升级 Maven 部署插件至 3.1.4
- 升级 Maven 清理插件至 3.4.1
- 升级 Jakarta 并发 API 至 3.1.1

### 🔨 Other Changes
- [AAE-33103] 修复流程定义搜索接口忽略分页参数的问题
- [AAE-33125] 在 CompleteTaskCmd 中新增任务ID获取方法

**完整更新日志**: [7.20.0-rc.101...7.20.0-rc.102](https://github.com/Activiti/Activiti/compare/7.20.0-rc.101...7.20.0-rc.102)

# 总结  
本次更新如同给工作流引擎做了一次精密手术：既修复了子流程参数传递和分页查询等关键功能缺陷，又为数据库连接、邮件服务等核心组件换上更强韧的"人造关节"，更通过全线依赖升级打造出更安全稳定的运行环境。这些改进让Activiti在流程自动化赛道上跑出了新的加速度。