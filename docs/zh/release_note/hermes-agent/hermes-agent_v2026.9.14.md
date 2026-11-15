---
title: "hermes-agent v2026.9.14"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v2026.9.14"
version: "v2026.9.14"
published: "2026-09-14"
type: "patch"
lang: "zh"
---

# hermes-agent v2026.9.14

# 爱马仕特工v0.21.3 (v2026.9.14)

**发布日期：** 2026 年 9 月 14 日

> 补丁发布。该标签将自 v0.21.2 以来合并的约 338 个 PR 汇总为下游消费者的稳定标记版本（Docker 图像、Hermes Cloud、托管部署）。它的存在是为了让下面的远程网关登录修复能够到达云代理，云代理会自动更新到最新的版本标签。

## 此补丁为远程桌面/云用户提供了什么

- **远程仪表板会话不再在刷新突发时过期**（#110061，修复#55712；抢救#71548 @Doud-FR，#55717 @liuhao1024）。网关上的两个刷新路径（cookie 门和桌面的本机承载路由）现在合并携带相同旋转刷新令牌的并发请求，因此桌面唤醒突发无法再将已旋转的令牌重播到门户的重用检测中并撤销整个会话。刷新也会在事件循环之外运行，因此速度较慢的身份提供程序不再冻结 `/api/status`。与门户端 NousResearch/hermes-portal#1209 配对（滑动 30 天闲置范围，5 分钟轮换令牌宽限期）。

## 还请求此标签

- **长期进程停止泄漏重复的 state.db writer 句柄**（#110934，修复 #100896 #103339；salvage #107974 @kshitijk4poor，映射 @Rroven）：网关、仪表板/桌面后端、ACP 和 CLI 读取器附加只读和进程内写入器共享注册表句柄，因此 `N live SessionDB handles` 前体停止在健康的拓扑上触发。

## 关于此版本

在提交 `9b419a2d3c2657c192008e732149d61170b32c01` 时测量，自 v0.21.2 以来的窗口包含 **1,036 个非合并提交**，跨越 **2,642 个更改文件** (+131,690 / −37,096) 和 **338 个合并 PR**。

同样在窗口中，故意未记录在此处：服务器→client JSON-RPC 请求和 Pydantic 线合约注册表，其中包含为 TUI/Desktop 网关生成的 TS/OpenRPC（#110521、#110522）；每个模型选择器、作曲家药丸和桌面中的每个辅助控件的推理工作选择； OpenRouter OAuth PKCE登录； HEIF/HEIC/AVIF图像解码； Honcho 对等模型设置返工； MCP OAuth 刷新与其发行者绑定的令牌；桌面中每日 MCP 重新验证轻推； FAL 目录中的 Wan 3.0、Kling 3.0 / Kling Image v3、MiniMax H3 Max Turbo、Gemini Omni Flash 1.1 和 Meta Muse； Slack 粘贴表和代理会话 API；多路复用配置文件隔离和网关活跃度修复；以及跨虚拟机文件系统上的 state.db WAL 拒绝。

**此窗口的完整策划的 release note 与 v0.22.0 一起发布**，它将记录从 v0.21.0 开始的所有内容 - 亮点、功能区域和完整的贡献者积分。该窗口中的任何内容都不会被跳过。

## 更新中

- `hermes update`（git 安装），或重新运行安装程序一行。
- Docker / Hermes Cloud：从此标签（`nousresearch/hermes-agent:v2026.9.14`）构建图像。

**全changelog：** https://github.com/NousResearch/hermes-agent/compare/v2026.9.11...v2026.9.14

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v2026.9.14` · 📅 发布：2026-09-14 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.14)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
