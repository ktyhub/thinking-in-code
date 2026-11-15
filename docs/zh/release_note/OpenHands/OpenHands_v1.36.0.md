---
title: "OpenHands v1.36.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.36.0"
version: "v1.36.0"
published: "2026-11-05"
type: "minor"
lang: "zh"
---

# OpenHands v1.36.0

## 1.36.0 (2026-11-05)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* 壮举（自动化）：在 https://github.com/OpenHands/OpenHands/pull/19297 中打开模板，而不会出现 @ak684 缺少集成的通知
* feat(automations): 列出 https://github.com/OpenHands/OpenHands/pull/19319 中 @VascoSch92 折叠的脚本自动化文件
* 壮举（自动化）：建议默认模板并使用 @ak684 在 https://github.com/OpenHands/OpenHands/pull/19300 中用户设置的内容推广模板
* feat(automations): 通过https://github.com/OpenHands/OpenHands/pull/19335中的@ak684告诉设置助手实例的事件源
* 壮举（自动化）：通过 @ak684 在 https://github.com/OpenHands/OpenHands/pull/19344 中发送带有扩展名 0.39.0 的数据中心模板
* feat(automations)：仅将模板选择的存储库发送到https://github.com/OpenHands/OpenHands/pull/19347中@ak684克隆其提供者的服务
* 壮举（自动化）：在 https://github.com/OpenHands/OpenHands/pull/19340 中 @ak684 的模板设置中列出 Bitbucket 数据中心和 Azure DevOps 存储库
* 壮举（自动化）：在数据中心模板中使用存储库选取器，并在 https://github.com/OpenHands/OpenHands/pull/19355 中使用 @ak684 的扩展名 0.40.0
* 壮举（自动化）：将自托管的 GitHub 模板引导至 MCP 或由 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/19352 中进行令牌设置
* 壮举（设置指南）：在 https://github.com/OpenHands/OpenHands/pull/19350 中的 @hieptl 在 MCP 页面上添加一个 Connect Git 步骤和导览
* feat(automations)：在 https://github.com/OpenHands/OpenHands/pull/19033 中 @henriquehirako 在 Canvas 中将自动化作为服务帐户运行
* 壮举：通过 @DevinVinson 在 https://github.com/OpenHands/OpenHands/pull/19311 中统一自动化创建、查看和编辑工作流程
### 错误修复
* 修复（自动化）：在 https://github.com/OpenHands/OpenHands/pull/19323 中 @VascoSch92 在模板卡上显示存储库提供者的徽标
* 修复（聊天）：在 https://github.com/OpenHands/OpenHands/pull/19316 中@smolpaws 进行新连接后 ACP 回合运行时显示停止
* 修复（自动化）：在https://github.com/OpenHands/OpenHands/pull/19370中通过@ak684将设置助手保留在表单上并将草稿保存在云后端
*修复（git）：当令牌没有GitHub应用程序安装时，直接列出GitHub存储库@hieptl在https://github.com/OpenHands/OpenHands/pull/19349中安装
* 修复（对话）：当历史记录以 https://github.com/OpenHands/OpenHands/pull/19351 中的 @hieptl 的钩子事件结束时（OHE-3909），没有错误 toast
* 修复（前端）：通过 @Harsh23Kashyap 在 https://github.com/OpenHands/OpenHands/pull/17784 中列出 Windows 本地后端上的工作区文件
* 修复（入职）：不要在 https://github.com/OpenHands/OpenHands/pull/19284 中的 @simonrosenberg 为本地后端上的 ACP 选择编写代理设置
* 修复：https://github.com/OpenHands/OpenHands/pull/18070 中 @pawarsneha22 处理 Windows Planner 工作区路径
*修复（聊天）：在https://github.com/OpenHands/OpenHands/pull/19392中由@jpshackelford在一个click中打开一个思考小组的推理
### 文档
* docs(verify-openhands): 通过https://github.com/OpenHands/OpenHands/pull/19304中的@ak684从特征图中删除模板集成通知
* 文档（verify-openhands）：通过 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/19314 中映射 ACP 代理会话 (F29)
* docs(verify-openhands): 通过https://github.com/OpenHands/OpenHands/pull/19331中的@ak684描述特征图中新的模板建议顺序
* 文档（verify-openhands）：地图维护 2026 年 11 月 5 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19369
### 维护
* 杂务（deps）：通过 https://github.com/OpenHands/OpenHands/pull/19309 中的 @dependabot[bot] 将 httpxy 从 0.5.5 提升到 0.5.6
* 杂务（deps）：通过 https://github.com/OpenHands/OpenHands/pull/19308 中的 @dependabot[bot] 将 axios 从 1.18.0 提升到 1.21.0
* 杂务：在 CI、桌面捆绑包中使用 Node 24.22.1，在 https://github.com/OpenHands/OpenHands/pull/19321 中使用 @smolpaws 的 Docker
* ci(npm-publish)：https://github.com/OpenHands/OpenHands/pull/19329 中的 @VascoSch92 将发布作业超时提高到 30 分钟
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19358 中 @VascoSch92 最近 UI 更改中未使用的组件、包装器和键
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/19342 中将 zustand 从 5.0.14 提升到 5.0.16
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19324 中 @all-hands-bot 合并的 PR 工件
* 杂务（deps-dev）：通过 https://github.com/OpenHands/OpenHands/pull/17980 中的 @dependabot[bot] 将 @eslint/eslintrc 从 3.3.6 提升到 3.3.7
* 杂务（deps-dev）：在 https://github.com/OpenHands/OpenHands/pull/17978 中 @dependabot[bot] 的类型组中将 @types/node 从 26.2.0 碰撞到 26.6.3
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/17972 中进行 2 次更新来碰撞 tanstack 组
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19374 中 @neubig 合并的 PR 工件 (.pr/)
* 杂务（deps）：在https://github.com/OpenHands/OpenHands/pull/17977中通过@dependabot[bot]将摩纳哥组中的摩纳哥编辑器从0.56.0提升到0.57.0
* Chore(deps-dev)：在 https://github.com/OpenHands/OpenHands/pull/18973 中 @dependabot[bot] 通过 5 个更新将 eslint 组跨越 1 个目录
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/18974 中进行 6 次更新，使测试组跨越 1 个目录
* 杂务（deps）：在https://github.com/OpenHands/OpenHands/pull/19199中@dependabot [bot]通过5个更新在1个目录中碰撞react-router组
* 杂务（ci）：在 https://github.com/OpenHands/OpenHands/pull/19385 中 @hieptl 修复了更漂亮的 3.9.10 和 msw 3 碰撞后主程序的 lint 和事件测试
* 杂务：通过 https://github.com/OpenHands/OpenHands/pull/19388 中的 @openhands-release-bot[bot] 将代理服务器提升到 1.60.1
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19373 中 @all-hands-bot 合并的 PR 工件
* 杂务：将 @openhands/extensions 通过 @neubig 在 https://github.com/OpenHands/OpenHands/pull/19393 中撞到 0.41.0

## 新贡献者
* @pawarsneha22 在 https://github.com/OpenHands/OpenHands/pull/18070 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.35.0...v1.36.0

---
此 PR 是通过[请发布](https://github.com/googleapis/release-please) 生成的。请参阅[文档](https://github.com/googleapis/release-please#release-please)。
<!-- AGENT_CANVAS_DOCKER_START -->

<!-- macos-install-note -->
### macOS 安装说明

该应用程序尚未使用 Apple Developer ID 进行签名，因此 macOS 可能会调用
下载的版本 *“已损坏”* — 这是 Gatekeeper 隔离区，而不是坏文件。
将应用程序移动到应用程序后，清除一次标志，然后正常打开：

```sh
xattr -dr com.apple.quarantine "/Applications/OpenHands Agent Canvas.app"
```

签名+公证在 OpenHands/OpenHands#16774 中进行跟踪。

---

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.36.0` · 📅 发布：2026-11-05 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.36.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
