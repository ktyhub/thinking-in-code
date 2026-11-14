---
title: "TradingAgents v0.2.5"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.5"
version: "v0.2.5"
published: "2026-05-11"
type: "patch"
lang: "zh"
---

# TradingAgents v0.2.5

## 总结

TradingAgents v0.2.5 提供接地情绪分析、Qwen/GLM/MiniMax 双区域支持、\`TRADINGAGENTS_*\` env-var 可配置性（带 API 键自动检测）、远程 Ollama 支持、非美国股票代码的可配置 alpha 基准以及股票路径遍历修复。

## 情绪分析师

更名后的情绪分析师现在在生成报告之前读取真实的雅虎新闻、StockTwits 和 Reddit 数据，取代了之前在即时压力下捏造社交帖子的流程。新名称贯穿 CLI 下拉列表、状态面板和最终报告； \`AnalystType.SOCIAL = \"social\"\` 保留用于保存配置向后兼容。

## 提供商覆盖范围

- **MiniMax** 具有完整的 M2.x 目录（204K 上下文），以及双区域全球 (\`MINIMAX_API_KEY\`) 和中国 (\`MINIMAX_CN_API_KEY\`)。
- **双区域 Qwen 和 GLM** 每个区域具有单独的密钥（\`DASHSCOPE_*\`、\`ZHIPU_*\`），通过辅助区域提示进行选择，以便主提供商下拉列表保持干净。
- 每个提供商的 **目录刷新**：GPT-5.5 frontier、Claude Opus 4.7、Gemini 3.1 Flash-Lite GA、Grok 4.20、Qwen 3.6 系列。仅限版本化 ID；自动转移别名已移至“自定义模型 ID”选项。
- **结构化输出现在适用于 DeepSeek V4 / Reasoner 和 MiniMax M2.x** - 这些提供商拒绝 \`tool_choice\`；绑定流程现在会自动跳过它。

## 通过环境配置

\`TRADINGAGENTS_*\` 环境变量使用类型感知强制（string / int / bool）覆盖 \`DEFAULT_CONFIG\` 键 - \`llm_provider\`、深度/快速模型 ID、\`backend_url\`、\`output_language\`、辩论回合计数、检查点标志和基准代码。当选定提供程序的 API 密钥丢失时，CLI 会提示输入该密钥并将该值保留到 \`.env\`，以便运行继续而无需重新启动。

## 奥拉马

\`OLLAMA_BASE_URL\` 使远程 \`ollama-serve\` 对于 CLI 和编程用户来说都是一流的。选择 Ollama 后，CLI 会打印已解析的端点，并对常见的格式错误输入发出警告。新的“自定义模型 ID”选项允许用户选择他们通过 \`ollama pull\` 拉取的任何模型。

## 反思

Alpha 现在根据非美国股票的区域基准计算 - \`.NS\` (^NSEI)、\`.T\` (^N225)、\`.HK\` (^HSI)、\`.L\` (^FTSE)、\`.TO\` (^GSPTSE)、\`.AX\` (^AXJO)、\`.BO\` (^BSESN)，美国上市的 SPY。消除了主导非美元上市阿尔法数字的外汇漂移。 \`benchmark_ticker\` 显式设置时会覆盖后缀映射。

新闻获取参数（每个代码文章限制、宏标题限制、回顾窗口、宏搜索查询）现在通过 \`DEFAULT_CONFIG\` 公开，以进行特定于策略的调整。

## 多语言

\`output_language\` 现在传播到每个面向用户的代理 - 研究人员、风险辩论者、研究经理和交易员 - 结束了之前只有分析师和投资组合经理尊重该设置的部分本地化报告。

## 修复

- **安全性**：每个文件系统路径站点的股票路径遍历验证。
- **\`pip install .\` 安装现在在将 CLI 作为控制台脚本运行时拾取项目 \`.env\`**。
- **报告保存端到端** — 流数据块之前已从 \`complete_report.md\` 中删除。
- **股票代码提示保留交换后缀**（\`.SH\`、\`.SZ\`、\`.SS\`、\`.HK\`、\`.T\` 等）。
- **Docker 权限错误** 不再阻止首次运行写入 \`~/.tradingagents/\`。
- 当子字典发生突变时，**配置状态不再在运行之间泄漏**。
- **\`max_recur_limit\` 配置实际上适用于** 传播器。
- **Missing-API-key 错误** 命名要设置的确切环境变量。
- **更安静的启动** — 抑制了嘈杂的上游 langgraph-checkpoint 弃用警告。

请参阅 [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/v0.2.5/CHANGELOG.md) 以获取包含 PR/问题参考的完整每项列表。

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.2.5` · 📅 发布：2026-05-11 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
