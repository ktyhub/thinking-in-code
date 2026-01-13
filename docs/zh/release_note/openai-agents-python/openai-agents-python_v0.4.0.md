# openai-agents-python v0.4.0
## 为什么每个开发者都在悄悄使用openai-agents-python？

深夜，代码在屏幕上闪烁。你刚结束第17次调试，那个本该智能对话的AI代理却像失忆的老人，反复询问相同的问题。团队群里的消息不断弹出："客户投诉响应迟钝""竞争对手的AI已经能处理复杂工单了"。你揉了揉发胀的太阳穴，意识到传统开发方式正在吞噬你的生命。

就在这时，你发现了openai-agents-python——它不是又一个普通的SDK，而是通往智能代理新世界的钥匙。矛盾在于：我们生活在AI爆炸的时代，却仍用石器时代的方式构建应用。太多开发者被困在重复造轮子的循环中，而真正的创新者早已搭上这班快车。

这个库背后藏着更深刻的真相：要么拥抱变革，用专业工具构建未来；要么被时代抛弃，在无尽的bug修复中消耗才华。选择权，此刻就在你手中。

## openai-agents-python是什么

简单来说，openai-agents-python是OpenAI官方推出的Python软件开发工具包，专门用于构建和运行智能代理。它将复杂的AI交互封装成简洁的API，让你能用几行代码就创建出理解上下文、使用工具、持续学习的智能体。

想象一下，你不再需要从头设计对话流程、处理状态管理或集成各种工具——这个库已经为你准备好了所有积木。无论是客服机器人、个人助理还是企业级自动化系统，它都提供了标准化的构建方式。

## 入门示例

让我们走进一个真实场景：你正在为电商平台开发智能客服代理。

传统方式可能需要数周：设计NLU引擎、配置对话树、集成支付API... 但现在，用openai-agents-python，一切变得优雅简单。

**开发示例**：构建退货处理代理

```python
from openai.agents import Agent
import asyncio

# 创建代理实例
agent = Agent(
    model="gpt-4",
    instructions="你是一个专业的电商客服，负责处理退货申请。请友好、专业地收集必要信息。"
)

# 定义工具函数 - 查询订单状态
def lookup_order(order_id: str) -> dict:
    """根据订单ID查询订单详情"""
    # 这里集成你的订单系统API
    return {"status": "已发货", "product": "无线耳机", "price": 599}

# 定义工具函数 - 提交退货申请
def submit_return_request(order_id: str, reason: str) -> bool:
    """提交退货申请到后端系统"""
    print(f"为订单{order_id}提交退货申请，原因：{reason}")
    return True

# 注册工具
agent.tools = [lookup_order, submit_return_request]

# 运行代理
async def main():
    response = await agent.run("顾客说想退回刚买的无线耳机")
    print(response)

# 启动对话
asyncio.run(main())
```

这个代理现在能够：
- 理解顾客的退货意图
- 自动调用订单查询工具获取订单详情
- 引导顾客提供必要信息
- 最终提交规范的退货申请

原本需要数天开发的功能，现在几小时就能上线。更重要的是，它能处理你未曾预料到的对话路径，真正理解用户需求。

## openai-agents-python v0.4.0版本更新了什么

本次更新标志着重要的技术转折。主要变化包括：不再支持OpenAI v1.x版本，必须使用v2.x系列。修复了多轮对话处理机制，确保只发送新内容项。增强了流式响应的事件顺序一致性。新增了对非OpenAI模型的兼容支持。改进了工具上下文和会话管理功能。

## 更新日志

### 关键变化

在此版本中，不再支持 openai 包的 v1.x 版本。请使用 openai v2.x 与此 SDK 配合使用。

### 更新内容

- 修复：在代码中将 input_file 的文件名设为可选，以支持非 OpenAI 模型
- 功能：在 MCPServerStreamableHttp 初始化选项中添加 httpx_client_factory
- 修复：修复多轮对话中对 conversation_id 和 previous_response_id 的处理：仅发送新项目
- 更新所有翻译文档页面
- 文档：改进工具文档中的格式一致性
- 文档：为扩展功能 EncryptedSession 添加文档
- 更新所有翻译文档页面
- 修复：修正 ReasoningItem 和 RawResponsesStreamEvent 事件的流式顺序
- 修复：调整实时切换导入
- 将 openai 从 1.x 迁移到 2.2.0
- 修复：当防护栏触发时回滚会话更改
- 文档：为文档添加中文翻译
- 文档：为高级工具元数据添加 ToolContext 部分
- 修复：在 OpenAIConversationsSession.get_items() 中排除未设置的字段
- 更新所有翻译文档页面
- 功能：公开 MCP 消息处理器配置
- 修复：处理 litellm 模型中 `_remove_not_given()` 的 omit 类型
- 修复：在严格模式中将 oneOf 转换为 anyOf 以提高 OpenAI 兼容性
- 修复本地 Shell 工具：将工具输出返回给 LLM
- 函数支持图像和文件输出类型
- 更新所有翻译文档页面
- 为流式运行添加优雅取消模式
- 记录 `AdvancedSQLiteSession` 并重构会话文档
- 更新所有翻译文档页面
- 修复实时示例应用的稳定性问题
- 修复：修复 SQLAlchemySession 可能返回无效顺序项目的错误
- 修复：openai_chatcompletions.Converter.extract_all_content 不支持 input_audio 类型项目的问题
- 发布 v0.4.0

### 完整更新日志

v0.3.3...v0.4.0

## 总结

这次更新展现了openai-agents-python生态的快速进化：从基础功能完善到开发者体验优化，从核心稳定性提升到国际化支持。每一个修复和改进都在诉说同一个故事——这是个正在成熟的平台，它认真对待每个开发者的需求，致力于让AI代理开发变得简单而强大。