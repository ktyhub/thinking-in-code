---
title: "Agent-Reach v1.4.2"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.4.2"
version: "v1.4.2"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "移除抖音、微博、微信公众号三个渠道。 原因很直接——它们已经名不副实"
---

# Agent-Reach v1.4.2

## 渠道调整

**移除抖音、微博、微信公众号三个渠道。** 原因很直接——它们已经名不副实：

- **抖音**：上游 douyin-mcp-server 已停止维护（archived），且需要手动起本地服务的 4 步配置，几乎没人能配通
- **微博**：依赖一个久未维护的个人 fork，实际已不可用
- **微信公众号**：全文阅读被反爬拦截越来越严重（#339），却还在宣传"零配置可用"

与其展示坏掉的承诺，不如诚实下架。等有可靠的上游方案时它们会回来（v1.4.0 移除 Discord/头条是同样的逻辑）。现在的口径：**13 个平台，6 个真零配置**。

## 新功能

- **`agent-reach transcribe <链接或文件>`** — Whisper 音频转写直接进 CLI（Groq 免费 key 即可，失败自动降级 OpenAI），无字幕视频的兜底方案（#277）
- **`agent-reach doctor --json`** — 机器可读的健康检查输出；文本版加了图例，看得懂 ✅/[!]/[X] 是什么意思了（#348）
- **Skill 自动触发优化** — 重写了 SKILL 描述（平台中英文别名 + 动作触发词），Agent 现在能更可靠地自动用上 Agent Reach（#324，感谢 @alfred1994）

## 修复

- **Reddit 安装命令修复** — doctor 之前教你装 PyPI 上不存在的 rdt-cli 0.4.2；现在从 GitHub 源安装（钉死 0.4.2 commit），文档同步更新（#326，感谢 @Bortlesboat，关闭 #294）
- **小宇宙转写质量** — Whisper prompt 要求输出中文标点（修复了被 bash 吞掉的引号），429 重试也带 prompt；新增可选 `--polish` 用免费 Llama 3.3 70B 润色分段（#291，感谢 @hymansun）
- **Windows 中文乱码** — 子进程和 MCP server 强制 UTF-8 环境，weibo 时代引入、对 mcporter 类渠道通用（#345，感谢 @chidaobuchidao）
- 清理无人消费的 uv.lock

## 升级方式

把这句话发给你的 Agent：

```
帮我更新 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md
```

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.4.2` · 2026-06-10 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.4.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
