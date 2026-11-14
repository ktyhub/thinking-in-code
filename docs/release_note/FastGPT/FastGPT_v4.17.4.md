---
title: "FastGPT v4.17.4"
project: "FastGPT"
repo: "labring/FastGPT"
tag: "v4.17.4"
version: "v4.17.4"
published: "2026-11-05"
type: "patch"
lang: "en"
---

# FastGPT v4.17.4

## 升级指南

### 镜像更新

- 更新 fastgpt-app（FastGPT 主服务）镜像 tag: v4.17.4
- 更新 fastgpt-pro（FastGPT 商业版）镜像 tag: v4.17.4

## ⚡ 优化

1. **[列表体验]** 优化列表滚动分页监听，减少滚动过程中的组件重渲染，提升滚动流畅度。

## 🐛 修复

1. **[对话体验]** 修复免登录分享对话中的全局变量、交互表单使用模型选择器时，未携带分享鉴权信息，导致模型列表或已选模型名称加载失败的问题。
2. **[对话体验]** 修复免登录分享对话顶部变量面板按普通对话规则展示变量的问题，外部变量不再向分享用户显示。
3. **[对话体验]** 修复免登录分享对话中删除消息、重试及编辑后发送失败的问题。
4. **[列表体验]** 修复部分列表在内容缩短后无法继续滚动加载、分页失败后仍自动重复请求的问题。
5. **[账号与团队]** 修复联系方式弹窗关闭按钮因正文滚动而偏移或被裁剪的问题。
6. **[账号与团队]** 修复登录和修改成员名时，使用中文输入法按回车确认候选词会误提交表单的问题；确认候选词后再次按回车可正常提交。
7. **[Agent]** 修复部分工作流工具在编辑器中配置正常，但运行时被错误过滤、无法调用的问题。
8. **[工具调用]** 修复工具参数 JSON Schema 格式不规范导致模型请求失败的问题。


**Full Changelog**: https://github.com/labring/FastGPT/compare/v4.17.3...v4.17.4

---

> **Source** [labring/FastGPT](https://github.com/labring/FastGPT) · `v4.17.4` · 2026-11-05 · [upstream release](https://github.com/labring/FastGPT/releases/tag/v4.17.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
