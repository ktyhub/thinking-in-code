---
title: "claude-mem v15.10.1"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.10.1"
version: "v15.10.1"
published: "2026-11-06"
type: "patch"
lang: "zh"
---

# claude-mem v15.10.1

错误修复版本。没有新的设置，也没有重大更改。

## 可靠性

- 当数据库的 `-wal` 和 wal-index 文件丢失时，上下文读取继续工作。 （#5432 作者：@0xABCD01）
- 当 Claude 回复 429 速率限制时，排队的批次将被保留，而不是被丢弃。 （#5430 作者：@markjoin123）
- 一旦恢复尝试用完，停止会话的缓冲工作就会被丢弃，因此它不再阻塞队列。 （#5414 作者：@0xABCD01）
- 为慢速消费者排队的 SSE 帧现在受到限制。 （#5395 作者：@liuyinchu）
- 观察者响应期限有其自己的常数。 （#5406 作者：@lunetics）
- 观察者从您的 Claude 用户设置中填充缺少的代理设置。 （#5401 作者：@markjoin123）
- `/api/processing-status` 报告失速起搏器放弃的会话以及观察者上次成功存储的时间。 （#5409、#5408 作者：@xunguangzlj-cloud）
- 设置：SessionStart 切换持续存在，并且通过 `POST /api/settings` 接受零上下文计数。 （#5393 作者：@0xABCD01）

## 安全

- 所有 TeamBrain 路由均拒绝来自国外的请求。 （#5411 作者：@DeryFerd）
- Perplexity API 密钥已被编辑。 （#5407，@mertkayacs）

## 观众和我的作品

- 我的工作共享对云查看器保持开启。 （#5433 作者：@thedotmack）
- 无法解析的工作视图帧被丢弃而不是抛出。 （#5412 作者：@DeryFerd）
- 托管使用量再次达到 PostHog（在 `crypto` 上调用 `randomUUID`）。 （#5421 作者：@thedotmack）
- 观察卡上的 Windows 文件路径被缩短。 （#5419 @Plastic-time）

## 搜索和智能阅读

- 哑搜索在提示之前保留可获取的记忆。 （#5397 作者：@liuyinchu）
- 搜索可回忆补充汉字和扩展片假名字符。 （#5396 作者：@liuyinchu）
- 大纲包括 C 和 C++ 联合以及 Zig 结构、枚举、联合和不透明声明。 （#5403、#5402 作者：@L4XB）

## 安装，CLI 和平台

- 安装程序自动写入 MCP JSON 配置。 （#5413 作者：@DeryFerd）
- 代理驱动的安装被引导到用户的浏览器设置中，并且文档列出了代理必须中继的终端提示。 （#5379 作者：@thedotmack）
- Cursor：通过Cursor的`postToolUse`钩子记录读取和搜索。 （#5399 by @Lumea-art）
- `--help` 动词后显示帮助而不是运行命令。 （#5394，@Bortlesboat）
- Windows：数据目录删除命令有效，并且集成测试远离快车道。 （@Plastic-time 的#5420、#5418）

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.10.0...v15.10.1

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.10.1` · 📅 发布：2026-11-06 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.10.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
