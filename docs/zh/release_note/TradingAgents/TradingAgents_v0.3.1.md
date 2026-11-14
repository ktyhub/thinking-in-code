---
title: "TradingAgents v0.3.1"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.3.1"
version: "v0.3.1"
published: "2026-07-05"
type: "patch"
lang: "zh"
---

# TradingAgents v0.3.1

## 总结

TradingAgents v0.3.1 是 v0.3.0 之上的正确性和稳定性补丁。

## 已修复

- **Alpha Vantage 前瞻过滤器现在运行。** 基本有效负载是 JSON 字符串，因此仅听写的防护会默默地跳过过滤，并将未来日期的报告泄漏到历史运行中。 （＃1115，@zachthebird）
- **新闻分析师提示与该工具匹配。** 它在工具获取股票时宣传 `get_news(query, ...)`，因此模型产生了自由文本查询调用的幻觉。 （＃1116，@shcheuk）
- **共享辩论/风险路由器不会在运行中崩溃。** 两个路由器返回的目标比任何一个边缘映射的目标都多；现在，每条边都共享完整的路径图。 （＃1088，@Fr3ya，@sa7an7，@Sushanth012）
- **检查点简历尊重图表形状。** 线程 ID 在选定的分析师、辩论/风险深度和资产模式中折叠，因此不同选择下的简历不再延续错误的图表。 （＃1089，@bossjoker1，@Ghraven）
- **加密情绪来源解析。** StockTwits 将加密列为 `<BASE>.X`（雅虎的 `BTC-USD` 404s），Reddit 需要基本符号；社交路径现在为两者映射加密货币。 （＃1113，@suremadoreai）

## 添加

- **可配置的 LLM 重试预算。** `llm_max_retries` / `TRADINGAGENTS_LLM_MAX_RETRIES`，转发给每个提供商，因此瞬态 429 突发不会中止运行。 （＃1091，@yanggaome）
- **Bedrock API-密钥身份验证。** `AWS_BEARER_TOKEN_BEDROCK` 无需 AWS 访问密钥即可对 Amazon Bedrock 进行身份验证，并且优先于环境 `AWS_PROFILE`。 （＃1103，@praxstack）
- **最新的克劳德模型。** 添加了克劳德十四行诗 5 (`claude-sonnet-5`) 和寓言 5 (`claude-fable-5`)；努力控制现在涵盖克劳德 5 系列。

完整列表请参见 [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md)。

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.3.1` · 📅 发布：2026-07-05 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.3.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
