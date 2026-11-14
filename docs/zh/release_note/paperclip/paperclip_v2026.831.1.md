---
title: "paperclip v2026.831.1"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.831.1"
version: "v2026.831.1"
published: "2026-09-02"
type: "patch"
lang: "zh"
---

# paperclip v2026.831.1

# 纸clip v2026.831.1

> 发布时间：2026-09-02

[2026.831.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0) 之上的一个补丁，用于修复首次运行的问题。它带有单一的有针对性的改变； 2026.831.0 中的其他所有内容均未更改。

## 修复

- **入职不再卡在组织步骤上。** 在第一个入职屏幕（“您的组织的名称是什么？”）上，clicking **继续**在服务器上创建了组织，但可能使向导停留在同一步骤上 - 因此页面似乎只是刷新，并重复 clicks 默默地创建了重复的组织。公司创建的列表刷新可以使周围的应用程序在创建请求继续运行之前采用刚刚创建的组织；向导现在认识到，同样成功的过渡并前进到第一个代理步骤，而真正切换到不同的组织仍然会停止并发出明确的消息。 ([#12667](https://github.com/paperclipai/paperclip/pull/12667))

## 升级指南

- 没有迁移，没有配置更改，没有 API 更改。升级到位。

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.831.1` · 📅 发布：2026-09-02 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.831.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
