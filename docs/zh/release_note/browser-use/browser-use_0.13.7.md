---
title: "browser-use 0.13.7"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.7"
version: "0.13.7"
published: "2026-07-27"
type: "patch"
lang: "zh"
---

# browser-use 0.13.7

发布最新版本的 CLI，其中包括错误修复和更好的浏览器管理。

## 发生了什么变化
* 修复：不要在 https://github.com/browser-use/browser-use/pull/5173 中通过 @markmcd 在 Gemini genconfig 中发送默认参数
* 修复 flash 提示中的工具名称：replace_file_str -> Replace_file by @MagMueller in https://github.com/browser-use/browser-use/pull/5272
* 修复：通过 https://github.com/browser-use/browser-use/pull/5276 中的 @laithrw 处理 _extract_start_url 中的 file:// url
*提取：停止https://github.com/browser-use/browser-use/pull/5278中@MagMueller自动继承output_model_schema到每页提取中
* 通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5274 中修复 React 控制输入（本机值设置器）上的清空
* 控制骨架屏幕“仍在加载？”关于 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5273 中的飞行中网络请求的提示
* 修复 https://github.com/browser-use/browser-use/pull/5290 中 @MagMueller 的嵌套跨域 iframe 提取过滤
* 通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5291 中保持选择器索引在 CDP 会话中唯一
* 修复（浏览器）：绑定 DOM 扇出并通过 https://github.com/browser-use/browser-use/pull/5292 中的 @MagMueller 保留可恢复状态
* 修复 https://github.com/browser-use/browser-use/pull/5296 中 @MagMueller 的紧凑型跨源支付字段提取
* @MagMueller 在 https://github.com/browser-use/browser-use/pull/5297 中浏览器状态超时后停止重用缓存的 DOM
* 通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5298 中安全地允许复选框大小的跨域控制
* 通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5299 中简化跨源 iframe 最小大小
* @MagMueller 在 https://github.com/browser-use/browser-use/pull/5300 中捕获超时后以最小状态调用模型
* 在 https://github.com/browser-use/browser-use/pull/5308 中通过@laithrw 发布带有浏览器框架 0.1.8 的 0.13.7


**完整 Changelog**：https://github.com/browser-use/browser-use/compare/0.13.6...0.13.7

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.7` · 📅 发布：2026-07-27 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
