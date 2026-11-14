---
title: "browser-use 1.0.0"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.0"
version: "1.0.0"
published: "2026-11-10"
type: "major"
lang: "zh"
---

# browser-use 1.0.0

<img src="https://github.com/browser-use/browser-use/releases/download/1.0.0/browser-use-1.0-vs-0.x-bench.png" alt="浏览器使用 1.0 与 0.x：分数更高、更便宜、更快、代码减少 80%" width="100%">

## −136,866 行。 80% 的库被删除。

我们重新开始。该代理现在直接在 Chrome DevTools 协议上将 Python 写入一个持久 REPL 中。没有 DOM 序列化器，没有操作模式，中间没有任何东西。简单取胜：它现在是[最先进的网络代理](https://browser-use.com/benchmarks)。

```
  ● task
  │
  ● model writes a cell          new_tab(url); bu.click(41); js(...)
  │
  ● REPL runs it on Chrome (CDP) → output back to the model
  │
  ✓ finish(result)
```

**相同型号：最高提高 33 个点，2.7 – 便宜 5.2 倍，速度提高 2–3 倍。**

```bash
uv add 'browser-use==1.0.0'
export BROWSER_USE_API_KEY=bu_...    # cloud.browser-use.com/new-api-key
```

```python
from browser_use import Agent

print(Agent('Find the number of stars of the browser-use repo').run_sync().final_result())
```

引脚为 `==`。我们从这里快速发货。

<详情>
<summary><b>从 0.x 升级，基准测试，一切都发生了变化</b></summary>

需要 0.x 吗？ `pip install 'browser-use<1'`

### 默认情况下有什么变化

| | 0.x | 1.0 |
|---|---|---|
|型号（`llm=None`）|必填|浏览器使用网关上的`bu-fast` |
|浏览器（`Browser()`）|本地铬 |浏览器 使用云浏览器； `Browser('chromium')` 本地一台 |
|关键|每个提供商一个 |一个浏览器使用密钥（`BROWSER_USE_API_KEY` 或 `browser-use login`）|
|模式| | `bu-fast` / `bu-ultrafast` 上的 `ultrafast`（可访问性树 ID）； `mode='default'` 选择退出 |
| `run()` 限制 | `max_steps=500` | `max_steps=100`、`timeout=1700` |

您自己的模型：`ChatOpenAI`、`ChatAnthropic`、`ChatGoogle` 或任何 Pydantic AI 模型字符串 (`llm='groq:llama-3.3-70b-versatile'`)。

### 从 0.x 升级

首先阅读 [MIGRATING.md](https://github.com/browser-use/browser-use/blob/main/MIGRATING.md)。它列出了每个 0.x 选项及其 1.0 答案。

- 在任何浏览器启动或计费之前，选项 1.0 无法兑现会引发 `TypeError` 命名。没有静默的无操作。 0.x 调谐旋钮 1.0 没有用处（`use_vision=True`、`flash_mode`、`max_failures`，...）警告一次并被忽略。
- 每个删除的 0.x 导入（从 0.1 到 0.13 的所有模块路径，以及保留的模块 1.0 的每个公共名称）都会引发一个 `ImportError`，该 `ImportError` 命名替换并链接 MIGRATING.md。 `except ImportError` 后备仍然有效。
- `ActionResult(include_in_memory=...)` 警告并被忽略：每个工具结果都保留在对话中。
- 配置检查通过后，`run()` 不会引发：被拒绝的密钥或模型、无法启动的浏览器（云创建 402/5xx/超时）以及运行中的失败全部返回 `status='error'` 和 `result.error`，并且已启动的浏览器被停止。在创建任何内容之前，丢失的键仍然会出现。

### 要检查的行为变化

- `Browser()`是一款云浏览器。本地主机或私有 IP 上的任务需要 `Browser('chromium')`（一个警告是这样说的）。
- `Browser(local=True)` 现在表示 `Browser('chromium')`。你自己打开的Chrome是`Browser('chrome')`。
- `Browser('chrome')` 仅附加到其实时 `DevToolsActivePort` 位于您自己的配置文件目录中的浏览器。它不再附加到 127.0.0.1:9222 上的任何答案。
- `run(max_steps=...)` 默认为 100（原为 500）。一步就是一个模型请求。
- 当代理人没有做出裁决时，`is_successful()` 是 `None`。使用 `r.is_done() and r.success is not False` 作为 0.x 默认值。
- `errors()` 仅返回结束运行的错误。恢复的单元格错误位于 `result.messages` 中。
- `result.partial` 仅由 `checkpoint(..., partial=True)` 设置。要获得一个，请在任务中命名该标志：“在每页之后，使用 checkpoint('titles.json', Titles,partial=True) 保存标题”。
- `result.cost_usd` 涵盖模型和网络搜索费用，而不包括云浏览器或其代理。
- 运行后保留工作空间（默认：新的临时目录 `browser-use-*`）。 `workspace=` 路径按给定方式使用（设为绝对路径，符号链接未解析），因此 `result.downloads[0].relative_to(workspace)` 可以工作。
- `prohibited_domains=['example.com']` 还阻止其子域。对于任何域规则集，每个 `file:` URL 都会被阻止。 `BROWSER_USE_ALLOWED_DOMAINS` 未读取：`Browser()` 在设置时升高。
- 0.x 网关型号（`bu-2-0`、`bu-1-0`、`bu-latest`...）被拒绝。未读取 `BROWSER_USE_LLM_URL`：使用 `ChatBrowserUse(base_url=...)`。
- LangChain聊天模型提高`TypeError`。 Azure 读取 `AZURE_OPENAI_API_KEY`（不是 `AZURE_OPENAI_KEY`）并且需要 `OPENAI_API_VERSION`。
- `browser-use --mcp` 打印弃用通知并为 `--cli-mcp` 工具（`browser_exec`、`browser_screenshot`、`browser_login`）提供服务。 `browser-use init` 已被移除。
- `bu` 和 `browser` 控制台脚本消失了（它们破坏了 `uv tool install` 和其他工具）。使用 `browser-use` 或 `browseruse`。
- 附加功能 `aws`、`oci`、`video`、`examples`、`eval`、`core`、`openai-tools`、`cli-oci` 消失了（pip 警告并在没有它们的情况下安装）。 `anthropic`、`google`、`mcp`、`cli`、`all` 仍然解析； Anthropic、Google 和 MCP 是核心依赖项。

### 也是新的

- **键入的结果：** `Agent(task, output_model_schema=MyModel)` 然后 `result.structured_output`。
- **在本地和云浏览器上上传和下载**：从 `workspace=` 输入，在 `workspace/downloads` 和 `result.downloads` 中下载。代理会上传您命名的文件，并且不会创建或覆盖它。
- **秘密：** `sensitive_data=` 使用 `type_secret()` 键入，并从单元格输出、检查点、工具结果和结果中进行编辑。不是沙箱；请参阅 MIGRATING.md 中的 trust 模型。
- **域限制**（`allowed_domains`、`prohibited_domains`、`block_ip_addresses`）采用 0.x 模式，在每种浏览器模式下。
- **网络搜索** (`web_search=True`)，每次搜索都会按您的浏览器使用密钥计费并添加到 ZZPH100​​ZZ。
- **CLI 和 MCP：** `browser-use` 将 Python 通过管道传输到浏览器线束； `browser-use --cli-mcp`运行MCP服务器； `browser-use skill install` 注册坐席技能。
- **Docker：** `browseruse/browseruse:1.0.0` 和 `ghcr.io/browser-use/browser-use:1.0.0`。每个镜像构建都在 CI 中的 amd64 和 arm64 上进行了冒烟测试，也根据拉取请求进行了冒烟测试。

### 可靠性

- **流式响应。** 每个 OpenAI 响应请求（浏览器使用网关和 api.openai.com）都是流式传输的。流式轮流在 300 秒内到达第一个事件，然后在事件流动时运行，最长可达 930 秒。长 `bu-smart` 转弯不再在 300 秒结束。
- **一次瞬时重试。** HTTP 200（`server_error`、`overloaded`、`request_timeout`、`upstream_stream_failed`）内报告的失败或每次运行重试一次最终事件之前结束的流，例如 429 或 5xx。
- **压缩。** 上下文窗口上的响应请求压缩一次并再次发送。具有较小窗口（gpt-4o、128k）的模型在溢出之前会进行压缩。流式压缩项完全按照非流式响应携带的方式发回，并且 400 会在没有该项的情况下重新发送请求一次。
- **一个进程中有多个代理。** `Agent` 将软打开文件的下限提高到 `min(hard limit, 10240)`（macOS 默认为 256）。连接错误现在命名其原因，例如`ModelConnectionError: Connection error. (OSError: [Errno 24] Too many open files)`。
- **代理 gpt-6-luna.** `ChatOpenAI('gpt-6-luna', base_url=...)` 在任何主机上获取 `reasoning_effort='none'`，因此工具在代理后面工作。
- **带有工作人员的页面。** `wait_for_network_idle()` 不再等待 Web Worker 脚本和跨站点 iframe，这使其运行时间达到了 10 秒上限。
- **对话框。** 由 `beforeunload` 提示符保持的导航，或打开 JS 对话框的屏幕截图，可在几秒钟内命名对话框。
- **keep_alive.** 死掉的浏览器守护进程后的运行将在代理选项卡中继续，而不是在 `about:blank` 上。

### 基准

BU Bench v2，60 项任务 x 3 次代表，云浏览器，2026 年 11 月 9 日。

|代理|评分 [95% CI] | $/任务 | s/任务 |
|---|---|---|---|
|浏览器使用 1.0（`mode='ultrafast'`，`bu-fast` 使用的模式）| 62.5 [58.3、66.5] | 0.070 | 650 | 650
|浏览器使用 Pi (e7007f2)，同一窗口 | 56.3 [50.2、62.4] | 0.082 | 743 | 743
OpenAI 中断事件击中了这个窗口。 Pi 由于提供商错误而丢失了 180 次运行中的 18 次，1.0 丢失了 1 次（其一次重试恢复了 14 次运行中的 13 次）。因此，原始差距夸大了质量。排除提供者错误后，配对 1.0 减去 Pi：得分 +1.1 [-3.2, +5.7]（无显着差异），成本 -$0.013/任务 [-0.024, -0.004]，时间 -114 s/任务 [-202, -31]。同样的质量，更便宜，更快。

两只手臂在 api.openai.com 上运行 `gpt-6-luna`，由 `gpt-5.6-luna` (xhigh) 进行评判。浏览器使用网关上的默认 `bu-fast` 模型不是本次运行的一部分。 95% 任务集群引导间隔。

### 已知问题

- 每个依赖项都被精确固定（`==`），并且锁文件被提交。这是供应链政策：您获得的正是 CI 测试的版本。成本：需要不同版本的 `pydantic`、`pydantic-ai-slim`、`mcp`、`google-genai`、`pillow` 或其他固定包的项目无法在其旁边安装 1.0。告诉我们哪个引脚阻止了您。
- `google-genai` 保持在 3 以下：3.0.0 在 v1 上调用 Gemini API，它拒绝工具。一旦 Pydantic AI 支持，这个问题就会消失。
- 视口模拟尚不能在云浏览器上运行。将 `Browser('chromium')` 用于另一个视口。

在 https://github.com/browser-use/browser-use/issues 报告问题

**完整 changelog:** https://github.com/browser-use/browser-use/compare/0.13.14...1.0.0

</详情>

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`1.0.0` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/1.0.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
