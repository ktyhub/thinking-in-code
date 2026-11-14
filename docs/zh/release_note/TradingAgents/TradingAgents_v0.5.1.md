---
title: "TradingAgents v0.5.1"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.5.1"
version: "v0.5.1"
published: "2026-09-24"
type: "patch"
lang: "zh"
---

# TradingAgents v0.5.1

按每个模块所容纳的内容组织的包布局，按以下方式筛选社交帖子
设置密钥时 TypeSafe 的 Jev，GPT-6 Sol 和 Luna 作为默认模型，以及
修复了运行隔离、SEC EDGAR 语句和历史运行。

### 从 0.5.0 升级

一些模块已移动，旧的导入路径也消失了。更新导入如下：

- `tradingagents.dataflows.interface` 为 `tradingagents.dataflows.router`，`dataflows.symbol_utils` 为 `dataflows.symbols`。 `dataflows.utils` 消失了：`get_current_date` 在 `dataflows.date_window` 中，`safe_ticker_component` 在 `dataflows.symbols` 中。
- 供应商模块位于 `tradingagents.dataflows.vendors` 下：`yahoo`（`ohlcv`、`market`、`fundamentals`、`news`、`snapshot`，来自以前的 `stockstats_utils`、`y_finance`、`yfinance_news` 和 `market_data_validator`）、`alpha_vantage`（一个包，来自`alpha_vantage_*` 模块）和 `sec_edgar`、`fred`、`polymarket`、`reddit`、`stocktwits`。
- `tradingagents.agents.utils` 消失了：代理工具位于 `agents.tools`，`agent_utils`、`agent_states`、`rating` 和 `structured` 为 `agents.context`、`agents.state`、`agents.rating` 和 `agents.structured`。
- 决策日志为 `tradingagents.decision_log`（原为 `agents.utils.memory`），`cli.utils` 为 `cli.prompts`。
- `backtest.summarize` 采用 `run_backtest` 结果或决策日志的路径来代替 `TradingMemoryLog`。
- 删除：`SignalProcessor`（评级由 `process_signal` 解析）、`create_social_media_analyst` 别名（使用 `create_sentiment_analyst`）、未使用的 `project_dir` 配置密钥以及图形属性 `curr_state`、`ticker` 和 `log_states_dict`（它们保存先前运行的状态）。

### 添加

- **Jev 帖子筛选。** 设置 `TYPESAFE_API_KEY` 后，TypeSafe 的 Jev 会读取情绪分析师获取的每个 StockTwits 和 Reddit 帖子：与公司无关的帖子将被删除，每个来源都会打开，并按立场对其余帖子进行计数。没有钥匙，一切都不会改变。 (#1376)
- B3 股票代码 (`.SA`) 以 Ibovespa 为基准。 (#1366)

### 模型

- GPT-6 Sol 和 GPT-6 Luna 是默认的深度和快速模型，Claude Opus 5.5 取代了选择器中的 Opus 5。 Opus 5 和 GPT-5.4 Mini 仍然有效的型号 ID。

### 已修复

- 一个进程中的多个图表各自读取自己的数据供应商。 (#1369)
- SEC EDGAR 现金流量表发现，申报者的 capital 支出将其用于购买生产性资产（NVIDIA 自 2022 财年以来，亚马逊自 2016 年以来），其最近的会计期间显示为空。 (#1370)
- SEC EDGAR 年度报表仅列出财政年度。
- 在覆盖通知和工具上下文中，历史运行不再被告知今天的日期或运行后的日期。
- 基本面分析师可以调用内幕交易工具。
- 内部交易中无法访问的雅虎被报告为不可用，而不是作为没有数据的符号。
- 跨运行重复使用的图表（如在回溯测试中）不再保留每次运行的完整状态。
- 设置检查点的 CLI 运行表明它是恢复还是重新开始。
- 空白路径变量（`TRADINGAGENTS_RESULTS_DIR` 等）保留默认路径。
- StockTwits 消息以纯文本而非 HTML 转义形式到达提示。
- 测试套件独立于开发者的`.env`、时区和网络。 （＃1368，＃1372）

### 贡献者

感谢所有报告这些问题或发送修复程序的人：

[@codify88](https://github.com/codify88)、[@davidalmeida90](https://github.com/davidalmeida90)、[@duongylinh](https://github.com/duongylinh)、[@jccl2](https://github.com/jccl2)、[@yuina368](https://github.com/yuina368)。

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.5.1` · 📅 发布：2026-09-24 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.5.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
