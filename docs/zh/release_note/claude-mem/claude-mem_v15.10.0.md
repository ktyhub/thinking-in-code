---
title: "claude-mem v15.10.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.10.0"
version: "v15.10.0"
published: "2026-11-05"
type: "minor"
lang: "zh"
---

# claude-mem v15.10.0

## 新消息

**入职会发现您现有的工作。** 设置现在会从您的成绩单中发现您现有的工作、规则和重点。主要按钮是“发现我的工作、规则和焦点”，“跳过此步骤”是其下方的一个较小的操作。 “共享匿名使用统计数据以帮助改善您的 Claude-mem 体验”框开始选中；取消选中它会保留，并且在您按“发现”之前不会发送任何内容。当托管设置繁忙时，claude-mem 会在上传前检查容量，记住重新启动时的冷却时间并让您完成设置。 （#5270、#5308、#5384，作者：@thedotmack）

**关闭内存捕获。** 新的 `CLAUDE_MEM_OBSERVER_ENABLED` 设置和内存捕获切换。将其设置为 `"false"` 可停止新的观察和摘要模型调用，同时保留现有的记忆、搜索和会话启动上下文。 （#5353 作者：@tarunbad）

**为每个工具选择观察者。** 新的 `CLAUDE_MEM_PROVIDER_BY_SOURCE` 设置为每个会话源选择观察者提供者，例如 Codex 上的 Codex 会话和 Claude 上的 Claude Code 会话。 （#5333 作者：@ankit4479）

**长寿的克劳德登录。** `~/.claude-mem/.env` 现在可以提供 `CLAUDE_CODE_OAUTH_TOKEN`，因此当存储的克劳德代码登录过期时，捕获不会停止。一旦凭证显示有效，会话就会暂停以进行身份​​验证恢复。 （#5372，@MeggDistribution，#5383，@xunguangzlj-cloud）

**组合模式。** 模式覆盖现在连锁，因此语言模式可以与 chill 结合，例如 `code--chill--ko`。 （#5349 作者：@BaeJinSeop）

**医生解释了丢失的观察者。** `npx claude-mem doctor` 现在报告不可用的观察者提供者和工作人员的依赖项，而不是说一切都很好。 （#5366 作者：@parveen0029）

**查看器同步和我的工作。** 查看器同步恢复现在主要：更快的有限视图、真实的同步状态、设备之间共享的“我的工作”状态以及远程更改的恢复。在云查看器上，“我的工作”链接到“帐户和账单”。 （#5410、#5416，作者：@thedotmack）

## 可靠性

- 当 10 个池已满时，工作线程等待空闲槽而不是失败，并在其他会话等待时释放空闲槽。 （#5386，@balabommablock-cpu，#5388，@0xABCD01）
- 挂起的上下文读取器请求现在超时，因此卡住的读取不再停止观察。 （#5387 作者：@markjoin123）
- 当故障类型发生变化时，故障跟踪将重新启动。 （#5380 作者：@xunguangzlj-cloud）
- Codex 出口仅根据其最近的 stderr 进行分类。 (#5310 by @2023Anita)
- 观察者不再继承父网关的模型名称，并保持您的 Claude beta 选择退出。模型拒绝被报告为模型中断。 （#5316 by @sayedrisat，#5317 by @parveen0029，#5348 by @tarunbad）
- SSE 流保持其跨块边界的帧，并且查看器忽略它无法解析的帧。 （#5367，@Afloat16，#5364，@DeryFerd）
- 有上限的错误主体读者释放他们的锁。 （#5340，@Afloat16）
- 当 SDK 未完成报告时，错误报告将回退到模板。 （#5302 作者：@liuyinchu）

## 安装和平台

- Windows：工作守护程序在没有 PowerShell 的情况下启动。 （#5351，@REI-330）
- Copilot CLI：MCP 服务器在 `~/.copilot/mcp-config.json` 中注册，Copilot CLI 从中读取它。 （#5305 作者：@tanishqbaweja）
- Windows 上的 Goose：claude-mem 已在 `%APPDATA%\Block\goose\config` 中注册。 （#5323 作者：@tanishqbaweja）
- Devin：在 Devin 压缩会话后再次注入上下文。 （#5314 作者：@patrickballard）
- Kimi：当路径包含引号时，挂钩命令保持有效的 TOML。 （#5363 作者：@DeryFerd）
- Docker：服务器和工作线程共享相同的 BullMQ 队列前缀，并且文档列出了测试的 Redis 兼容服务器。 sync-api 容器以非 root 用户身份运行。 （#5389，#5390，@murtazayusuf，#5331，@DeryFerd）
- 进程身份探测固定到 UTC。 （#5312 作者：@LuckVd）

## 导入和搜索

- 提示导入读取 `CODEX_HOME` 和 `XDG_DATA_HOME` 设置的 Codex 和 OpenCode 配置文件，包括提交的 OpenCode WAL 更新，将 OpenCode 工具输入识别为代理编写的，排除复制的 Codex fork 提示，解码 JSON 工具字符串，并在会话读取不完整时保留挂钩提示。 （#5303、#5297、#5304、#5300、#5369、#5301，作者：@rudycelekli）
- 采用在重新映射内存之前保留真实的结帐路径，并且结帐身份保留空白。 (#5296 by @rudycelekli, #5368 by @liuyinchu)
- 文件夹搜索匹配相对反斜杠路径和无扩展名文件，例如 `Makefile`。 (#5309 by @rudycelekli, #5343 by @liuyinchu)
- Chroma 的语义后备查询不再包括 `doc_type`。 （#5355 作者：@0xABCD01）
- 紧凑时间在 AM/PM 之前处理 U+202F 分离器。 （#5356 作者：@kevin9327）

## 隐私和安全

- 更多秘密在存储前经过编辑：Groq、xAI、NVIDIA NIM、Runcrate、Google OAuth (`ya29.`)、Linear、Notion、Supabase、Sentry、Databricks 和 HashiCorp Vault 令牌。 （#5298、#5342、#5345、#5352、#5373，@kevin9327；#5327，@DeryFerd）
- 带换行符的日志值被转义，因此它们无法伪造日志记录。 （#5328 作者：@DeryFerd）
- 同步：402 验证响应会删除缓存的判决，每个隔离的身份验证备忘录受到限制，并且当其身份验证判决失效时，咨询套接字将关闭。 （#5329、#5332，@DeryFerd；#5358，@REI-330）
- 批次 ID 数组、时间线深度、作业列表偏移量和空 URL 修饰符的输入范围； `/api/observations/batch` 接受数字字符串 ID。 （#5360、#5362、#5361、#5330，@DeryFerd；#5341，@Afloat16；#5336，@ryrenz）
- Hermes 通过线性扫描剥离内存标签。 （#5320，@REI-330）

## 文档

- 开发先决条件和测试说明与当前工具相匹配；自述文件列出了每种内置语言模式；简体中文和越南语自述文件已同步。 （#5324 by @POWDER-RANGER，#5334 by @BaeJinSeop，#5322 by @h6rime，#5391 by @vietmy1711）
- macOS SQLite 的测试修复。 （#5313 作者：@patrickballard）

感谢所有为此版本做出贡献的人。

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.10.0` · 📅 发布：2026-11-05 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.10.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
