---
title: "Agent-Reach v1.6.1"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.6.1"
version: "v1.6.1"
published: "2026-11-01"
type: "patch"
lang: "en"
summary: "全网搜索、Reddit、小红书、B站在 1.6.0 里会出现的几种'明明能查却报错'或'显示成功但内容是空的'，这版都修好了。；电脑上别的软件占用了浏览器端口时，可以换一个端口，不用关掉那个软件。；复制登录失败时会如实告诉你，不再假装成功。；Windows 上小红书带特殊符号的链接能正常打开了。"
---

# Agent-Reach v1.6.1

中文：

- 全网搜索、Reddit、小红书、B站在 1.6.0 里会出现的几种"明明能查却报错"或"显示成功但内容是空的"，这版都修好了。
- 电脑上别的软件占用了浏览器端口时，可以换一个端口，不用关掉那个软件。
- 复制登录失败时会如实告诉你，不再假装成功。
- Windows 上小红书带特殊符号的链接能正常打开了。

English:

- Several 1.6.0 cases where web search, Reddit, Xiaohongshu or Bilibili failed although the content was reachable, or reported success with empty content, are fixed.
- When another program on your computer uses the browser port, Agent Reach can use a different one; you don't have to close that program.
- A login copy that fails now says so instead of reporting success.
- On Windows, Xiaohongshu links with special characters open correctly.

中文（技术细节）：
- 全网搜索：请求统一带上 `agent-reach/<版本号>` 标识，避免被 Exa 的防护拦截（#877）。
- Reddit：站内工具临时失败（比如返回网页而不是数据）时，自动改用公开网页搜索和阅读（#880）。
- 小红书：适配 OpenCLI 2.0 的返回格式，阅读不再"成功但内容全空"；搜索和评论没有结果时也不再返回一条空数据（#861、#895）。
- B站：扫码后如果没存下有效登录，不再显示登录成功；提示改为运行 `agent-reach login bilibili`（#866、#883）。
- 专用浏览器端口可以改：`agent-reach configure browser-port <端口>`，9222 被别的软件占用时用（#848）。
- 复制登录：浏览器后台程序没开时不再记一次"复制了 0 条"；手动 `login <渠道> --import-existing` 一条都没复制到时会明确报错（#879）。
- Windows：链接里带 `&` 的小红书笔记能正常阅读和查看评论（#860）。

English (technical):
- Web search: every request identifies itself as `agent-reach/<version>`, so Exa's Cloudflare front no longer blocks it (#877).
- Reddit: when the site tool fails transiently (for example it returns HTML instead of data), search and read fall back to the public web (#880).
- Xiaohongshu: OpenCLI 2.0 results are mapped, so read no longer succeeds with empty fields; search and comments no longer return one empty row when there are no results (#861, #895).
- Bilibili: a QR login that saved no usable credential is no longer reported as success, and the hint now says `agent-reach login bilibili` (#866, #883).
- The dedicated browser's port is configurable with `agent-reach configure browser-port <port>`, for when another tool holds 9222 (#848).
- Login reuse: no "copied 0 cookies" record when the browser bridge is down; an explicit `login <channel> --import-existing` that copies nothing now fails clearly (#879).
- Windows: Xiaohongshu note links containing `&` can be read and their comments loaded (#860).

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.6.1` · 2026-11-01 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.6.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
