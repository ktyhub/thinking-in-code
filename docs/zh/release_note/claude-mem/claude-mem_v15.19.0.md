---
title: "claude-mem v15.19.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.19.0"
version: "v15.19.0"
published: "2026-11-16"
type: "minor"
lang: "zh"
---

# claude-mem v15.19.0

## 从我的工作中继续 Claude Code 或 Codex 对话

在“我的工作”中打开请求，然后打开“此请求来自何处”。现在，在每个 Claude Code 或 Codex 对话下都有一个消息框。输入一条消息并按“发送”，同样的对话就会轮流进行。回复就在那里显示（#6191；命令形状遵循@wiesenthal 在#6054 中的答案代码，并且提交归功于他）。

- 每个对话都会按顺序保存您从“我的工作”发送的消息及其回复。停止结束正在运行的转弯。
- 该框显示回合在哪个文件夹中运行。当记录的文件夹不再存在时（清理工作树后常见），回合将在其上方最近的现有文件夹中运行。
- “复制恢复命令”复制 `claude --resume <id>` 或 `codex resume <id>`。在 Mac 上，“在 Claude 中打开”在 Claude 桌面应用程序中打开 Claude Code 对话。
- 一次发送会启动一份无头简历（`claude --resume <id> -p --output-format json` 或 `codex exec resume <id> - --skip-git-repo-check`），其中包含您在标准输入上的消息。失败的回合将被记录为失败并且不再重试。没有任何内容会排队或保存以供重播，并且不会在启动时、计时器或重新连接时启动任何内容。
- 工作线程重新启动或关闭首先停止每个正在运行的轮次，因此重新启动的工作线程永远不会成为同一对话中的第二个写入者。没有任何东西重新发送停止的转弯。
- 一轮以您自己的默认权限模式运行，与您的终端中使用的 `claude -p --resume` 相同。在手动模式下，需要批准的工具调用将被拒绝，并且行会对它们进行计数。未传递任何权限、模型或沙箱标志。
- 新路由仅响应环回并拒绝其他来源。当本地 API 令牌模式关闭时，同一台计算机上的另一个程序可以调用它们，就像每个其他工作线程一样。在共享计算机上，打开本地 API 令牌模式。
- 每个请求都有一个更改：在加载新版本的开放请求时，抽屉会继续显示其已有的版本，而不是“正在加载请求详细信息...”。

已知限制：

- 页面中的 Codex 路径未在测试机器上端到端运行。使用真实的 CLI 在跑步者级别检查了 Codex 转弯。
- 在 Windows 上，停止可能无法到达 `.cmd` 垫片后面的 CLI，并且不提供“在 Claude 中打开”。
- 在终端中进行的对话仍然可以从“我的工作”中轮流。 Claude Code 的文档称，一个会话中的两个作者可能会丢失消息。我的工作在一次对话中阻止了两次自己的对话。
- 工作进程崩溃（不是正常重启）无法停止正在运行的轮次。它自行完成。
- CLI 留下的助手（例如缓慢退出的 MCP 服务器）将回合标记为正在运行，直到其退出或您按“停止”。

## 带上你现有的记忆

`npx claude-mem import` 直接从 Mem0 平台或超级内存获取内存，并将它们保存为您选择的项目中的可搜索观察结果。没有导出文件，也没有模型调用 (#6106)。

```bash
# MEM0_API_KEY in the environment
npx claude-mem import --from mem0 --source-account personal-mem0 --user my-user-id --project imported-memory

# SUPERMEMORY_API_KEY in the environment
npx claude-mem import --from supermemory --source-account personal-supermemory --namespace my_namespace --project imported-memory
```

- 首先启动worker (`npx claude-mem start`)。添加 `--dry-run` 来获取和检查源并打印计数，而无需编写任何内容。
- 在写入任何内容之前，都会获取并检查每个源页面。过期或被替换的 Mem0 内存以及被遗忘或较旧的 Supermemory 内存将被跳过。对于超级内存，`--documents` 导入提取的文档文本而不是内存。
- 导入的记忆被归档为克劳德代码（`claude`），因此它的记忆搜索可以找到它们。 `--platform <host>`（例如 `codex` 或 `cursor`）将它们归档在另一台主机下。每个观察都会保留源记录、ID、时间戳、元数据、帐户标签和范围。
- 再次运行相同的命令是安全的：已保存的记录将被视为现有记录。没有后台作业，也没有自动重试。
- 这是单向导入，而不是同步。对源头的编辑产生了新的观察结果。源处的删除和过期不会延续。
- 限制：默认 10,000 条记录（`--max-records` 最多 100,000 条）、100 MiB 源响应、15 秒请求截止时间（`--timeout-ms` 最多 120,000 条）以及每条记录 100,000 个字符。没有什么会被悄无声息地缩短：过大的记录或失败的请求会停止运行。
- 测试使用合成 Mem0 和超级内存响应，而不是真实帐户。

文件：https://docs.claude-mem.ai/usage/import-providers

## Codex：分叉线程获取内存

- **分叉的 Codex 线程从调用的内存开始** (#6101)。 Codex 0.165 为其实验性附加线程叉添加了 `fork` 会话启动。 claude-mem 的 SessionStart 挂钩与它不匹配，因此分叉线程在没有内存的情况下启动。挂钩现在与 `fork` 匹配。

  **Codex 用户：再次批准一个挂钩。** SessionStart 挂钩的匹配器已更改，只要挂钩的定义发生更改，Codex 就会再次请求批准。
  1. 将新匹配器放入`~/.codex/hooks.json`中。当您上次安装选择 Codex 时，`npx claude-mem update` 和自动更新会执行此操作。否则运行 `npx claude-mem install` 并选择 Codex。
  2. 打开交互式 Codex，运行 `/hooks`，并批准 claude-mem 的 SessionStart 挂钩。

  在您批准之前，Codex 会话将在不调用内存的情况下开始。捕获继续工作。在新匹配器位于 `hooks.json` 中之前，`npx claude-mem doctor` 会将 `Codex hooks` 行显示为已过时。

## 也是新的

- **服务器运行时：搜索结果表明哪个代理创建了内存**（#6100）。服务器运行时现在将代理存储在每个内存上，并填充会话中的现有内存。其 MCP 搜索和详细信息行添加 `[via <agent>]`，例如 `#8 — Auth redirect decision (myproject) [via cursor]`。没有记录特工的记忆不显示任何标签。 `/api/sessions/observations` 不再将每个 client 标记为克劳德代码。当地工作人员的观察结果还没有携带该药剂，因此没有显示标签。
- **Zed**（#6111，感谢@AdityaxDeore，关闭#5900）。 `npx claude-mem install`（或 `--ide zed`）在 Zed 的 `context_servers` 中注册 claude-mem 的 MCP 服务器，用于搜索、时间线、详细信息和显式保存。 Zed 设置文件中的注释将被保留。没有自动捕获，因为 Zed 没有钩子或转录访问权限。文件：https://docs.claude-mem.ai/zed-integration
- **Aider**（#6112，感谢@AdityaxDeore，关闭#5893）。在项目内运行 `npx claude-mem aider install`。它将 `.claude-mem/aider-memory.md` 添加到 `.aider.conf.yml` 中的 `read:` 列表，并且 `npx claude-mem aider sync` 从工作线程刷新该文件。它是每个项目的选择加入：`npx claude-mem install` 不提供它，内存文件通过 `.git/info/exclude` 保留在 git 之外，并且它拒绝在您的主文件夹中运行。没有自动捕捉。文件：https://docs.claude-mem.ai/aider-integration
- **Grok Build 在会话开始时调用内存**（#6180，感谢@krishnadobhal，关闭#5950）。 Grok Build 忽略 SessionStart 挂钩打印的内容，因此召回的注释从未到达模型。 `claude-mem grok install` 在当前文件夹中写入 `.grok/rules/claude-mem-context.md`，Grok Build 从 trusted 文件夹加载该文件夹。工作人员在每次会话摘要后刷新它，仅在您安装它的文件夹中刷新它。排除的项目会获得“排除”行而不是注释。捕获没有变化。文件：https://docs.claude-mem.ai/grok-build
- 我的作品、查看器、首次运行设置和 Observation TV 的语言选择器中的 **法语**（#6107，感谢 @QuantScorpus）。您的记忆、规则和引言将保持原样。
- **针对 OpenAI 兼容提供程序的三个新预设。** 每个预设都默认为小型快速模型，因为内存提取量很大：
  - AtmoRouter，`zai/glm-5.3-flash`（#6108，感谢@BeckleyTenriajeng）
  - TrustedRouter、`deepseek/deepseek-v4-flash`（#6174，感谢@jperla）。 `trustedrouter/auto` 仍然可以选择加入。它可以将请求路由到按前沿价格定价的模型。
  - HopBase，`deepseek-v4.1-flash`（#6181，感谢@victor-zzh）

## 修复

### 隐私和安全

- **claude-mem 数据文件夹仅限所有者**（#6091，感谢 @DeryFerd）。在 macOS 和 Linux 上，`~/.claude-mem`（数据库、设置、`.env`、挂钩线轴、备份）是使用普通 `mkdir` 创建的，因此在常见的 `022` umask 下，计算机上的其他帐户可以读取它。现在它被创建为 `0700`，现有文件夹将在下次启动时收紧，新的钩线轴条目将写入为 `0600`。
- **MCP `save_memory` 向 `CLAUDE_MEM_EXCLUDED_PROJECTS` 致敬**（#6105，感谢 @Zhong-fan，由 @Kirat0201 在 #6098 中报告；@0xABCD01 在 #6166 中发送了相同的修复程序）。排除的签出的保存通过 MCP 存储，而通过 HTTP 的相同保存被跳过。现在它被跳过，并且回复显示“未保存：此结帐被 CLAUDE_MEM_EXCLUDED_PROJECTS 排除。”而不是“保存的内存#？：无标题。”。 Cline 和 Kilo 指南现在是这么说的 (#6190)。
- **服务器运行时：MCP 连接命令拒绝不可用的主机**（#6176，感谢 @DeryFerd）。如果没有 `CLAUDE_MEM_PUBLIC_URL`，`GET /v1/connect` 和 `POST /v1/keys` 从请求的 `Host` 标头构建粘贴就绪命令，并将空格、引号或路径复制到其中。不能作为主机的值现在会获取 `400 InvalidHost`，并且不会创建任何密钥。
- **同步集线器：`FORWARD_ORIGIN` 必须使用 `https://`** （#6175，感谢 @DeryFerd）。转发代理将传入的 `Authorization` 标头复制到目标，因此普通的 `http://` 源可以在没有 TLS 的情况下发送它。 `http://` 仅允许用于环回主机。现在，不是可用 URL 的值会大声失败，而不是安静地回退到持久对象路径。

### 安装和卸载

- **卸载删除 Gemini CLI 挂钩**（#6088，感谢 @tanishqbaweja）。 `npx claude-mem uninstall` 删除了该插件，但在 `~/.gemini/settings.json` 中留下了 claude-mem 的 5 个 Gemini CLI 挂钩，因此 Gemini CLI 在每次会话开始、提示、工具调用和回合结束时都会打印失败的挂钩消息。现在卸载会删除它们并保留您自己的设置和挂钩。带有注释的 `settings.json` 保持不变，因此请手动移除这些挂钩。
- **取消 API 键提示不再将您切换到 Claude** （#6161，感谢 @bulanovk）。对于`--provider gemini`或`--provider openrouter`且没有保存密钥，取消密钥提示写`CLAUDE_MEM_PROVIDER='claude'`并进行。现在它因错误而停止并且没有任何改变。
- Codex 安装程序的旧版配置检查仅在 Windows 上扩展了领先的 `~\`，就像 claude-mem 的其余部分一样（#6093，感谢 @DeryFerd）。

### 工作人员和存储

- **在启动时遇到繁忙数据库的工作人员会重试，而不是花几分钟回答 503**（#6145，感谢 @montjeffrey，参考#3603）。替代工作人员可以在数据库启动期间点击 `SQLITE_BUSY_SNAPSHOT` 一次，不再重试，并使用“服务正在初始化”回答每个请求，直到手动重新启动（报告中大约 11 分钟）。现在，启动会在 1、2 和 4 秒后重试繁忙错误 3 次。最坏的情况（27 秒）适合钩子等待工作人员准备好的 30 秒内。其他错误仍然会立即失败。
- **关闭数据库会释放它**（#6090，感谢@DeryFerd）。缓存的准备好的语句在关闭后保持连接和数据库文件打开。在使用 `EPERM` 或 `EBUSY` 阻止恢复交换和临时文件夹清理的 Windows 上。
- **已删除会话的色度清理在工作进程退出后仍然存在**（#6163，感谢@Afloat16）。如果工作线程在排队清理运行之前退出，则已删除行的向量永远不会被删除。现在，清理工作会在开始之前进行记录。相同的更改修复了将丢失的行视为在 Bun 上恢复的检查。
- 在 Bun 上，同步启动排除表丢失的数据库会重建它，而不是保留空列表 (#6189)。
- 失败的 `/api/ready` 订阅者不再停止其他订阅者的启动进度或变成启动失败（#6127，感谢 @Afloat16）。

### 捕捉和记忆笔记

- **`CLAUDE_MEM_SKIP_BASH_PATTERNS` 适用于反重力 CLI** （#6096，感谢 @tanishqbaweja）。 agy 报告其 shell 工具为 `run_command`，模式检查未读取该工具，因此排除的命令被存储并发送给观察者。
- 包含空字符的显式注释可能会获取另一个注释的 ID，而其自己的文本未保存（#6170，感谢 @Kirat0201，关闭 #6169）。
- 其描述或 `metadata.type` 发生更改的克劳德代码内存文件将存储为新版本，而不是报告为已导入（#6186，感谢 @Kirat0201，关闭#6171）。
- 记忆笔记（感谢@Afloat16）：
  - 注释的标题来自其真实标题，而不是来自代码示例中的 `# comment` (#6156)。
  - 嵌套在注释的 `metadata:` 下的字段不再覆盖注释自己的类型或会话，并且 YAML 注释不再结束该块 (#6157)。
  - 没有值的 `memory ingest --source` 或 `--cwd` 会因使用错误而停止，而不是导入当前结帐 (#6150)。
  - 当附近的两个转弯具有相同的文本时，再次扫描成绩单不再插入导入的转弯两次 (#6149)。
  - 使用 `CLAUDE_MEM_DEDUP_ENABLED=true`，仅代码字符不同的标题（`C++` 和 `C#`、`src/config.ts` 和 `src config ts`，版本号）不再合并为一行，从而丢失了第二行 (#6120)。
  - 事实或文件存储为一个字符串的导入观察结果会在调用时再次显示（#6134）。

### 搜索和上下文（感谢@Afloat16，除非另有说明）

- 语义搜索根据保存的行而不是 Chroma 的副本检查日期窗口，因此在 SQLite 中更新但尚未在 Chroma 中更新的行会出现在右侧窗口中 (#6153)。
- 按日期排序的文件查找会跳过 Chroma，因此 Chroma 中断或缓慢嵌入不再使它们失败 (#6123)。
- 当多个文件共享时间戳时，文件上下文返回最新的观察结果 (#6118)。
- 当渲染无序完成时，上下文缓存会保留正确的失效范围，因此稍后在采用的项目中写入会刷新它（#6164）。
- 深度搜索只为其子进程提供实际剩余的时间，因此时钟步骤（例如 NTP 校正）不再导致早期空超时（#6177，感谢 @DeryFerd）。

### Codex 作为内存提供者（感谢@Afloat16）

- 8 MiB 协议限制适用于每条 JSON 行，而不是所有缓冲的内容，因此有效输出不再被拒绝 (#6119)。
- 转动过程中关闭的标准输入管道失败，转动干净，而不是 escaping 作为未处理的错误 (#6130)。
- 超时请求不再留下中止处理程序，该处理程序可能会在新的应用程序服务器上的下一轮失败（#6133）。

### 智能文件读取

- `smart_outline` 不再将声明标记在与 `[exported]` 同一行的导出旁边（#6141，感谢 @liuyinchu）。
- 现在已索引（感谢 @Afloat16）：匿名 `export default` 函数、箭头和类 (#6151)、Swift 协议方法和无主体 Scala 方法 (#6154) 以及 Java `@interface` 声明及其元素 (#6160)。
- 智能代码搜索通过一个句柄读取每个文件，并在 512 KiB 上限处停止，因此在大小检查后替换的文件无法超过限制（#6124，感谢 @Afloat16）。

### 我的工作

- **目标步骤使用运行的语言**（#6187，感谢@0xABCD01，关闭@Fly-onlyone 报告的#6185）。语言线到达了除目标之外的每一步，因此在#6185 147 英语提示中产生了西班牙语目标。没有语言设置的第一个仅目标运行仍然可以猜测。 `CLAUDE_MEM_WORK_VIEW_TEXT_LANGUAGE`设置它。
-也在我的工作中（感谢@Afloat16）：
  - Jev 答案切断中体算作中断，而不是该项目的永久故障，因此下一次刷新会再次询问（#6158）。
  - 下次“我的工作”处理会话项目时，会拾取新的 `git init`、新的嵌套存储库或删除的 `.git`，而不是仅在工作人员重新启动后拾取 (#6165)。
  - 自动清除会忽略已结束的回合或对话中的最新读取（#6152）。
  - 当包含表情符号和基本平面之外的其他字符时，所有者提示保留完整的 3,000 个字符预算 (#6162)。
  - 选择加入的 API 语料库代理匹配重音、印地语、孟加拉语和尖锐的希伯来语单词 (#6168)。
  - 当相同的响应被保存两次时，设置中的 Gemini 使用总数会保留已完成的令牌计数 (#6146)。

### 观众

- 打开查看器窗口仅将其第一个项目列表和状态发送到该窗口，而不是发送到每个打开的查看器（#6126，感谢@Afloat16）。
- Cli再次点击会话操作按钮会关闭其菜单（#6143，感谢@liuyinchu）。

### 其他

- agent-cost-report 在 Windows 上使用正斜杠写入 `CHECKSUMS.txt` （#6089，感谢 @DeryFerd）。

## 性能（感谢@Afloat16）

- 在向后阅读器 (#6116) 和实时观察器 (#6117) 中，长转录行会组装一次，而不是在每次读取过程中复制。
- OpenCode 提示历史记录一次读取一条消息 (#6121)。
- 大型工具有效负载被限制和散列，没有完整副本（#6128）。
- 时间线仅加载它们显示的行（#6129）。最近的会话使用索引摘要检查（#6132）。日期格式化程序在渲染中重用 (#6125)。
- 项目范围的召回会在第一个未采用的行处停止合并检查 (#6131)。项目目录使用集合删除重复项 (#6135)。长粘贴查询在 500 项上限时停止扫描 (#6147)。
- 智能文件读取通过索引而不是扫描查找每个符号的容器（#6122）。
- 我的工作每次调用都会索引出处记录 (#6148)、焦点请求成员身份 (#6155) 和工作状态项版本 (#6159)。

## 文档

- **Cline CLI 和 Kilo CLI 指南**，用于通过 stdio MCP 服务器保存和查找内存（#6097、#6114，感谢 @Kirat0201）。文件：https://docs.claude-mem.ai/cline 和 https://docs.claude-mem.ai/kilo
- 捆绑技能会掉落“始终”和“强制”标记（#6183，感谢@jcole666，关闭@scu-lixiao 报告的#6144）。
- CMEM Pro 端点规范定义了用于钩子摄取的 `write:memory` OAuth 范围 (#6099)。

## CI 和测试

- Windows 作业 (#6092) 和媒体运行时工作流程 (#6178) 与 CI 的其余部分一样固定 Bun 1.4.4（感谢 @DeryFerd）。
- 工作视图套件使用共享重试助手删除临时文件夹（#6094）。 Windows 通道运行两个 Python 套件，并且 Hermes 套件已修复（#6095）（感谢 @DeryFerd）。
- 测试固定 OpenCode 2.0 事件名称，因此重命名的上游事件会严重失败 (#6102)。

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.19.0` · 📅 发布：2026-11-16 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.19.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
