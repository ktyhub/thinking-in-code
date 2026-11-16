---
title: "chatbox v1.23.2"
project: "chatbox"
repo: "chatboxai/chatbox"
tag: "v1.23.2"
version: "v1.23.2"
published: "2026-09-10"
type: "patch"
lang: "zh"
---

# chatbox v1.23.2

## v1.23.2 - 2026.09.10

### 下载

- [macOS（苹果芯片）](https://download.chatboxai.app/releases/Chatbox-1.23.2-arm64.dmg)
- [macOS（英特尔）](https://download.chatboxai.app/releases/Chatbox-1.23.2.dmg)
- [Windows (x64)](https://download.chatboxai.app/releases/Chatbox-1.23.2-Setup.exe)
- [Linux (x64 DEB)](https://download.chatboxai.app/releases/Chatbox-1.23.2-amd64.deb)
- [Linux (ARM64 DEB)](https://download.chatboxai.app/releases/Chatbox-1.23.2-arm64.deb)
- [安卓](https://download.chatboxai.app/releases/chatbox-1.23.2.apk)

### 发生了什么变化

1. 为远程 MCP 服务器添加 OAuth 授权，并在服务器设置中提供连接控制和可刷新的工具列表
2.新增自定义对话压实提示和一次性指令，提高压实范围和触发精度
3.在消息统计中添加了缓存令牌使用情况，并为Claude添加了可配置的提示缓存持续时间
4.增加了对更多纯文本上传的支持，包括Typst、Patch和Diff文件
5. 为存档的聊天添加了 one-click 撤消，并改进了启动时对话加载失败时的恢复
6.修复了回复完成后有时仍处于生成状态的问题
7.改进生成的图像加载，可以选择重新加载无法显示的图像
8.增加了GPT-6及后续模型的推理工作控制，并改进了Kimi、OpenCode和模型目录兼容性
9.修复HarmonyOS上的备份导出并改进窗口焦点、小屏幕布局和翻译

### 更新说明

1.远程MCP服务支持OAuth授权，可在配置窗口连接服务、查看和刷新工具列表
2.对话压缩支持自定义提示词和临时补充要求，并优化压缩范围与触发判断
3.消息使用增加缓存命中Token展示，Claude支持设置提示词缓存时长
4.支持上传更多纯文本文件，包括Typst、Patch和Diff文件
5.归档会话后支持一键取消，改善异常会话的启动恢复体验
6.修复部分回复完成后仍显示生成中的问题
7.生成改善图片的加载体验，加载失败时可重新加载
8.支持GPT-6及后续模型的思考强度设置，改进Kimi、OpenCode和模型列表兼容性
9.修复鸿蒙备份导出问题，并优化窗口焦点、小屏显示及多语言文案

---

> 📦 仓库：[chatboxai/chatbox](https://github.com/chatboxai/chatbox) · 🏷️ 版本：`v1.23.2` · 📅 发布：2026-09-10 · [查看英文原版 Release](https://github.com/chatboxai/chatbox/releases/tag/v1.23.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
