---
title: "Agent-Reach v1.4.2"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.4.2"
version: "v1.4.2"
published: "2026-06-10"
type: "patch"
lang: "zh"
---

# Agent-Reach v1.4.2

## 渠道调整

**删除音、微博、微信公众号三个渠道。**原因很直接——它们已经名不副实：抖

- **音**：上游douyin-mcp-server已停止维护（已存档），且需要手动启动本地服务的4步配置，几乎没人能配通
- **微博**：依赖一个久未维护的个人fork，实际已不可用
- **微信公众号**：全文阅读被反抓取拦截越来越严重（#339），却还在宣传“零配置可用”

用展示坏掉的承诺，不如诚实下架。有可靠的上游方案时它们会回来（v1.4.0 移除 Discord/头条是同样的逻辑）。现在的口径：**13 个平台，6 个真零配置**。

##新功能

- **`agent-reach transcribe <链接或文件>`** — Whisper音频转写直接进CLI（Groq免费键即可，失败自动降级OpenAI），无字幕视频的兜底方案（#277）
- **`agent-reach doctor --json`** — 机器不需要的健康检查输出；文本版添加了图例，看得懂 ✅/[!]/[X] 是什么意思了（#348）
- **技能自动触发优化** — 重写了SKILL描述（平台中英文别名+动作触发词），Agent现在可以更可靠地自动用上Agent Reach（#324，感谢@alfred1994）

## 修复

- **Reddit安装命令修复** — doctor之前教你安装PyPI上不存在的rdt-cli 0.4.2；现在从GitHub源安装（死0.4.2 commit），文档同步更新（#326，感谢@Bortlesboat，关闭#294）
- **小宇宙转写质量** — Whisper提示要求输出中文标点（修复了被bash吞掉的引号），429重试也带提示；新增任选`--polish`使用免费Llama 3.3 70B润色分段（#291，感谢@hymansun）
- **Windows中文乱码** — 子进程和MCP服务器强制UTF-8环境，微博时代引入、对mcporter类渠道通用（#345，感谢@chidaobuchidao）
- 清理无人消费的uv.lock

## 升级方式

把这句话发给你的代理人：

```
帮我更新 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md
```

---

> 📦 仓库：[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · 🏷️ 版本：`v1.4.2` · 📅 发布：2026-06-10 · [查看英文原版 Release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.4.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
