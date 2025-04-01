# gpt-researcher SimpleQA Evals and Deep Research 2.0
### 为什么要使用gpt-researcher

在信息爆炸的时代，如何高效获取和处理数据成为了一个巨大的挑战。gpt-researcher应运而生，它不仅能帮助用户快速找到所需的信息，还能通过深度学习技术提供更为精准的答案。然而，许多人在使用过程中却发现，传统的搜索引擎往往无法满足他们的需求，信息的准确性和相关性常常令人失望。gpt-researcher的出现，正是为了填补这一空白，帮助用户在浩瀚的信息海洋中找到真正有价值的内容。

### gpt-researcher是什么

gpt-researcher是一个开源项目，旨在利用先进的自然语言处理技术，帮助用户进行高效的信息检索和深度研究。它结合了GPT模型的强大能力，能够理解用户的查询意图，并提供相关的、准确的答案。通过不断的更新和社区的贡献，gpt-researcher不断提升其性能和功能，成为研究人员和开发者的得力助手。

### 入门示例

想象一下，你是一名学生，正在为即将到来的论文写作而苦恼。你需要找到关于“气候变化对生态系统影响”的最新研究资料。通过gpt-researcher，你只需输入这个主题，它会迅速为你提供相关的研究论文、数据和分析，甚至还会总结出关键观点，节省了你大量的时间和精力。开发者可以利用gpt-researcher的API，将其集成到自己的应用程序中，轻松实现智能问答功能。

### gpt-researcher SimpleQA Evals and Deep Research 2.0版本更新了什么

在最新的版本中，gpt-researcher引入了基于OpenAI的SimpleQA数据集的评估功能，测试结果显示其准确率高达93%，超越了市场上所有现有的领先项目。此外，深度研究功能经过优化，变得更快、更智能且更具成本效益，同时修复了之前的多个bug。用户可以通过更新到最新版本，亲身体验这些增强功能。

### 更新日志

又一个令人兴奋的星期，社区的贡献带来了许多改进。我们很高兴地宣布最新版本的GPT Researcher，现在支持使用OpenAI的SimpleQA数据集进行评估。我们的严格测试显示，准确率高达93%，超越了市场上所有现有的领先项目。

这一成就彰显了开源社区的卓越能力，而我们才刚刚开始！根据广泛的反馈，我们对深度研究功能进行了优化，使其更快、更智能且更具成本效益，同时修复了之前的多个bug。更新到最新版本，亲身体验这些增强功能吧！

以下是我们最新评估的结果：

**评估总结**

- 调试计数：
  - 总成功：100
  - 正确：93
  - 错误：7
  - 未尝试：1

**变化内容**

- 修复了使用深度研究时的Key Error。
- 更新requirements.txt，添加缺失的langgraph依赖。
- 修复Docker构建失败的问题，更新了DeepRsearchSkill.run()中的combined_query以处理F-Strings中的反斜杠。
- 稳定了Docker和前端升级。
- 改进了整体规划和研究性能。
- 为OpenAI提供者的create_chat_completions添加了base_url参数支持。
- 更新了llm.py。
- 修复了WebSocket超时问题。
- 添加了缺失的langgraph模块到requirements.txt。
- 进行了类型清理的重构。
- 添加了异步无驱动爬虫。
- 在资源报告提示中添加了语言要求。
- 添加了评估指标功能。
- 为SimpleQA评估框架和初步结果添加了README。
- 根据反馈整理了未完成的工作。

**新贡献者**

- 新贡献者包括namin、olipayne、luislofer89、hurxxxx和czakop，他们在各自的pull request中做出了首次贡献。

**完整更新日志**: [v3.2.2...v3.2.3](https://github.com/assafelovic/gpt-researcher/compare/v3.2.2...v3.2.3)

### 总结

此次更新不仅提升了gpt-researcher的准确性和性能，还通过社区的共同努力，修复了多个问题，增强了用户体验。新功能的引入和优化，使得gpt-researcher在信息检索和深度研究领域的应用潜力更为广泛，值得用户期待和体验。