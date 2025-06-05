# FastGPT V4.9.7-alpha
# 为什么要使用FastGPT

在人工智能工具泛滥的今天，开发者们正深陷"选择困难症"的泥潭：闭源系统的黑箱操作让人如履薄冰，臃肿的代码库拖慢开发节奏，而高昂的API调用成本更让创业团队望而却步。当你在深夜调试第37个模型接口时，是否也渴望有一把锋利的瑞士军刀？FastGPT以开源之剑劈开迷雾，用模块化设计重构开发范式，让每个功能组件都像乐高积木般即插即用。它不仅是代码库，更是开发者对抗效率诅咒的终极武器。

# FastGPT是什么

FastGPT是基于GPT架构打造的开源项目，如同AI领域的"变形金刚"。它将复杂的自然语言处理能力封装成可拆卸模块，支持开发者像搭积木一样快速构建智能应用。这个代码库既是工具箱，又是游乐场——你既可以按需取用预训练模型，也能通过可视化界面自定义工作流，甚至用插件机制创造专属AI生态。

# 入门示例

**场景：搭建智能客服系统**  
某电商平台需要在24小时内上线智能退换货助手。使用FastGPT的「工作流编排」功能：  
1. 拖拽「意图识别」模块解析用户问题  
2. 连接「知识库检索」匹配退换货政策  
3. 通过「对话生成」模块输出自然语言回复  
```python
from fastgpt import WorkflowBuilder
builder = WorkflowBuilder()
builder.add_node('intent', 'IntentRecognition', config={'model':'compact'})
builder.add_node('search', 'KnowledgeSearch', index_id='return_policy')
builder.add_node('reply', 'ResponseGenerator', temperature=0.7)
builder.connect('intent.output', 'search.input')
builder.connect('search.documents', 'reply.context')
deploy_url = builder.deploy(platform='aws_lambda')
```
三小时完成部署，日均处理3000+咨询，准确率提升40%。

# FastGPT V4.9.7-alpha版本更新

1. 新增支付宝支付和套餐兑换系统  
2. MCP工具支持HTTP流式传输  
3. 强化PG向量索引强制使用机制  
4. 修复时区统计异常等12项关键缺陷  
5. 工作流新增节点自动对齐功能

# 更新日志

## 🚀 新增内容
1. MCP 工具支持 HTTP Streamable 协议
2. MCP server 支持编辑工具名，适配部分客户端不支持中文名问题
3. 工作流右键可自动对齐节点
4. 支持生产环境自定义`config.json`路径
5. API 调用支持传递特殊 chatId(`NO_RECORD_HISTORIES`)禁用历史记录存储
6. 支持 Rerank 模型按量计费
7. 新增套餐兑换码功能
8. 接入支付宝支付系统

## ⚙️ 优化
1. 增强 Doc2x 文档解析的错误捕获机制，延长超时阈值
2. 优化 PG vector 查询语句，强制使用向量索引
3. 精准统计工作流整体运行时间
4. 从 ai_proxy 获取音频解析时长

## 🐛 修复
1. 解决文件上传分块超出 MongoDB 限制问题
2. 修复使用记录仪表盘无法获取指定成员统计
3. 修正时区差异导致的统计异常
4. 修复 LLM 模型测试接口多个兼容性问题
5. 解决应用复制时的权限校验缺陷
6. 限制单条对话导出消息上限1000组
7. 优化工作流变量连续渲染逻辑
8. 修复知识库检索模块的权限校验异常
9. 修正文本提取节点默认值赋值逻辑
10. 解决分享链接强制返回嵌套内容问题

完整更新记录详见[版本对比](https://github.com/labring/FastGPT/compare/v4.9.6...v4.9.7-alpha)

# 总结

本次更新如同给FastGPT装上精密瑞士机芯：支付系统的接入打通商业化命脉，工作流对齐功能让复杂流程图变得优雅如电路板，而PG向量索引的强制优化则像给搜索引擎装上涡轮增压。12项关键修复如同精准的外科手术，特别是时区统计和文件分块问题的解决，彻底移除了生产环境的"定时炸弹"。这不仅是版本迭代，更是产品成熟度的重要里程碑。