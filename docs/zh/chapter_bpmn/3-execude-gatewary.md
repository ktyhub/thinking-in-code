# BPMN2.0 网关拆分与合并原理与实践（Java版）

本章将深入探讨BPMN2.0规范中三大核心网关类型：排他网关(Exclusive Gateway)、并行网关(Parallel Gateway)和包含网关(Inclusive
Gateway)。通过原理分析+代码实现+可视化图示三重方式，完整展示网关在业务流程中的拆分与合并机制。

---

## 一、网关基础原理

### 1.1 网关作用

- ​**​拆分​**​：将单一流程路径分成多个并发路径
- ​**​合并​**​：将多个并发路径重新汇聚成单一路径
- ​**​决策​**​：根据条件选择特定执行路径

### 1.2 核心属性

```mermaid
graph TD
A[网关类型] --> B[排他网关]
A --> C[并行网关]
A --> D[包含网关]
B --> E{条件判断}
C --> F[同步执行]
D --> G{条件+同步}

二、排他网关(Exclusive Gateway)
2.1 原理说明
• 单一入口/出口
• 通过条件表达式选择唯一分支
• 实现互斥逻辑判断
2.2 Java实现
// 流程上下文对象
class ProcessContext {
    private Map<String, Object> variables; // 流程变量
    private String currentActivityId; // 当前活动节点ID
    // 省略getter/setter
}

// 排他网关核心逻辑
class ExclusiveGateway {
    // 根据条件选择下一个节点
    public String evaluate(ProcessContext context) {
        String expression = getConditionExpression(); // 获取条件表达式
        Map<String, Boolean> conditions = evaluateConditions(context, expression); 
        // 选择第一个满足条件的分支
        return conditions.entrySet().stream()
            .filter(Map.Entry::getValue)
            .map(Map.Entry::getKey)
            .findFirst()
            .orElseThrow(() -> new NoValidPathException("No valid path found"));
    }
    
    private Map<String, Boolean> evaluateConditions(ProcessContext context, String expression) {
        // 使用SpEL表达式引擎解析条件
        StandardEvaluationContext spelContext = new StandardEvaluationContext(context);
        return Arrays.stream(expression.split("\\|\\|"))
            .map(String::trim)
            .collect(Collectors.toMap(
                condition -> condition,
                cond -> (Boolean) new SpelExpressionParser().parseExpression(cond).getValue(spelContext)
            ));
    }
}

三、并行网关(Parallel Gateway)
3.1 原理说明
• 单一入口/出口
• 同时触发所有分支
• 自动同步所有分支完成
3.2 Java实现
// 并行网关核心逻辑
class ParallelGateway {
    // 分支分发逻辑
    public List<String> split(ProcessContext context) {
        String gatewayId = context.getCurrentActivityId();
        List<String> outgoingPaths = getOutgoingPaths(gatewayId);
        // 初始化并行执行上下文
        ParallelExecutionContext parallelContext = new ParallelExecutionContext();
        parallelContext.setMainProcessId(context.getProcessInstanceId());
        parallelContext.setBranches(outgoingPaths.stream()
            .map(path -> createSubProcessContext(context, path))
            .collect(Collectors.toList()));
        return outgoingPaths;
    }
    
    // 同步合并逻辑
    public void join(ProcessContext context) {
        String gatewayId = context.getCurrentActivityId();
        ParallelExecutionContext parallelContext = getParallelContext(gatewayId);
        // 等待所有分支完成
        parallelContext.waitForCompletion();
        // 合并流程变量
        mergeVariables(context, parallelContext.getSubProcesses());
        // 清理上下文
        removeParallelContext(gatewayId);
    }
}

四、包含网关(Inclusive Gateway)
4.1 原理说明
• 单一入口/出口
• 满足条件的分支都会执行
• 自动同步所有满足条件分支
4.2 Java实现
// 包含网关核心逻辑
class InclusiveGateway {
    // 条件聚合判断
    public List<String> evaluate(ProcessContext context) {
        String gatewayId = context.getCurrentActivityId();
        List<String> outgoingPaths = getOutgoingPaths(gatewayId);
        List<String> selectedPaths = new ArrayList<>();
        
        // 收集所有满足条件的分支
        for (String path : outgoingPaths) {
            if (evaluateCondition(context, path)) {
                selectedPaths.add(path);
            }
        }
        
        // 至少需要一个分支被选中
        if (selectedPaths.isEmpty()) {
            throw new NoValidPathException("No path satisfied conditions");
        }
        return selectedPaths;
    }
    
    private boolean evaluateCondition(ProcessContext context, String path) {
        // 获取该分支的条件表达式
        String condition = getConditionForPath(path);
        // 使用SPEL进行表达式求值
        EvaluationContext spelContext = new StandardEvaluationContext(context);
        return (Boolean) new SpelExpressionParser().parseExpression(condition).getValue(spelContext);
    }
}

五、网关交互示例
5.1 流程定义（Mermaid）
graph TD
    A[开始] --> B[排他网关]
    B -->|条件A=true| C[处理A]
    B -->|条件B=true| D[并行网关]
    C --> E[结束]
    D --> F[包含网关]
    D --> G[子流程1]
    F --> H[子流程2]
    F --> I[合并]
    I --> J[结束]

5.2 执行流程
1. 进入排他网关后根据条件选择分支
2. 并行网关同时触发子流程1和子流程2
3. 包含网关等待所有满足条件的分支完成
4. 最终汇入结束节点
六、核心代码结构
classDiagram
    class ProcessContext{
        +Map<String,Object> variables
        +String currentActivityId
    }
    class Gateway{
        +evaluate(context)