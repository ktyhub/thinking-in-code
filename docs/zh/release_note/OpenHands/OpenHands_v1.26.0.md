---
title: "OpenHands v1.26.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.26.0"
version: "v1.26.0"
published: "2026-10-08"
type: "minor"
lang: "zh"
---

# OpenHands v1.26.0

## 1.26.0 (2026-10-08)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(apps)：通过@neubig在https://github.com/OpenHands/OpenHands/pull/17656中添加经过身份验证的后端视图助手
*壮举（聊天）：将空响应纠正性微调渲染为@errmakov在https://github.com/OpenHands/OpenHands/pull/17864中的信息说明
* 壮举：使用控制开放手 CLI 验证开放手技能以及 @enyst 在 https://github.com/OpenHands/OpenHands/pull/17961 中的完整功能图
*壮举（verify-openhands）：每日通行证支持和CLI由@enyst在https://github.com/OpenHands/OpenHands/pull/18093中修复
* 壮举(verify-openhands)：映射 20 种以上行为，以及 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18105 中的实时食谱
* 壮举（后端）：解释一个暂停的工作空间并通过 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/17988 中提供切换
* feat(onboarding)：通过 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/17969 中显示企业后端的超级管理员设置指南
* 壮举（自动化）：https://github.com/OpenHands/OpenHands/pull/17682 中 @DevinVinson 缩小需求审查状态
* feat(onboarding)：当 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/18138 中的 Canvas 中完成后，打开下一个设置指南步骤
*壮举（verify-openhands）：缩小线束间隙，重新驱动配方，并将@enyst在https://github.com/OpenHands/OpenHands/pull/18162中重现的缺陷归档
### 错误修复
*修复（设置）：使LLM配置文件行菜单可以由https://github.com/OpenHands/OpenHands/pull/18019中的@enyst键盘操作
* 修复（对话面板）：https://github.com/OpenHands/OpenHands/pull/18021 中 @enyst 报告一次下载失败并默认选择“最近”
* 修复（mcp）：在 https://github.com/OpenHands/OpenHands/pull/18018 中通过 @enyst 解释没有 URL 提示的失败 stdio 连接测试
* 修复（设置）：在 https://github.com/OpenHands/OpenHands/pull/18030 中@enyst 的配置文件错误 toast 中显示服务器消息而不是原始 HttpError 文本
* 修复（自动化）：从https://github.com/OpenHands/OpenHands/pull/18022中的@enyst的服务器级bash事件中读取本地运行日志
* 修复（路由）：将未知 URL 渲染为 https://github.com/OpenHands/OpenHands/pull/18023 中 @enyst 的应用内未找到页面
*修复（命令菜单）：列出模型路由器和代理上下文；在 https://github.com/OpenHands/OpenHands/pull/18027 中显示 Ctrl+K 关闭 Apple by @enyst
* 修复（对话）：将标题“⋯”菜单保留在屏幕上，并在 https://github.com/OpenHands/OpenHands/pull/18028 中 @enyst 的 Escape 上将其关闭
* 修复（后端）：在 https://github.com/OpenHands/OpenHands/pull/18024 中通过@enyst 从管理后端切换时重定向详细信息页面
*修复（onboarding）：停止“未配置后端”。 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18010 中在后端存在之前进行 toast
* 修复：改进 https://github.com/OpenHands/OpenHands/pull/17911 中 @enyst 的后端设置注释对比
* 修复：保持设置和自定义可在 https://github.com/OpenHands/OpenHands/pull/17910 中的 @enyst 的平板电脑上使用
* 修复（自动化）：当 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18043 中的自动化操作失败时显示一个错误 toast
*修复（自动化）：在https://github.com/OpenHands/OpenHands/pull/18026中@enyst的选择之间保持过滤器弹出窗口打开
* 修复（插件）：在插件控件上说“插件”并让https://github.com/OpenHands/OpenHands/pull/18040中的@enyst保持繁忙的应用程序开关惰性
*修复（对话）：在https://github.com/OpenHands/OpenHands/pull/18045中@enyst以手机宽度打开代理和文件链接选项卡请求的抽屉
*修复（a11y）：在https://github.com/OpenHands/OpenHands/pull/18044中由@enyst关闭Escape上的菜单和弹出窗口并返回焦点
* 修复（home）：在 https://github.com/OpenHands/OpenHands/pull/18037 中通过 @enyst 显示手机宽度的文件夹名称和工作区空状态
*修复（聊天）：在裸露/btw上祝酒，并仅在https://github.com/OpenHands/OpenHands/pull/18036中@enyst的最新目标状态上提供恢复
*修复（a11y）：在https://github.com/OpenHands/OpenHands/pull/18033中通过@enyst命名仅图标的编辑器和差异查看器按钮
* 修复（mcp）：保留 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18034 中重复 STDIO 安装的目录标识
* 修复（设置）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18035 中正确设置、MCP 和技能页面上的 UI 副本
* 修复（文件）：在https://github.com/OpenHands/OpenHands/pull/18032中刷新并通过@enyst重新加载后显示当前文件主体
*修复（自动化）：显示https://github.com/OpenHands/OpenHands/pull/18041中@enyst存储在preset_metadata中的存储库和插件
* 修复（自动化）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18039 中隐藏 Git 同步状态卡上的存储库凭据
* 修复（hooks）：在 https://github.com/OpenHands/OpenHands/pull/18031 中的@enyst 在本地后端的“可用挂钩”对话框中列出工作区挂钩
*修复（插件，应用程序）：在https://github.com/OpenHands/OpenHands/pull/18025中由@enyst显示一次安装和更新失败的服务器原因
* 修复（错误）：在 https://github.com/OpenHands/OpenHands/pull/18051 中 @enyst 的通用错误 toast 中显示服务器消息而不是原始 HttpError 文本
*修复（a11y）：关闭https://github.com/OpenHands/OpenHands/pull/18095中@enyst Escape上的工具，状态和选项卡菜单
*修复（e2e）：让实时代理服务器E2E作业运行并由https://github.com/OpenHands/OpenHands/pull/18084中的@enyst完成
*修复：减少https://github.com/OpenHands/OpenHands/pull/18128中@malhotra5的云组织和git安装轮询
*修复（遥测）：永远不要在https://github.com/OpenHands/OpenHands/pull/18086中@enyst的“请勿跟踪”下初始化PostHog
* 修复（桌面）：通过@Grzesie2k在https://github.com/OpenHands/OpenHands/pull/17474中恢复macOS标题栏拖动区域
* 修复：https://github.com/OpenHands/OpenHands/pull/18130 中@malhotra5 的云对话组织范围界定
* 修复（home）：在 https://github.com/OpenHands/OpenHands/pull/17985 中 @errmakov 启动失败时显示一个错误 toast 并保留提示
* 修复（画布）：在 https://github.com/OpenHands/OpenHands/pull/18149 中隐藏 @neubig 不可用的云 VS Code 操作
* 修复（docker）：通过 @neubig 在 https://github.com/OpenHands/OpenHands/pull/18134 中最小化 Canvas 运行时包
* 修复：云沙箱在 https://github.com/OpenHands/OpenHands/pull/17665 中恢复 @malhotra5 的重试行为
### 文档
* 文档（verify-openhands）：通过 https://github.com/OpenHands/OpenHands/pull/18085 中的 @enyst 通过 main@ed815e141 进行地图维护
* 文档（verify-openhands）：2026年10月8日@smolpaws在https://github.com/OpenHands/OpenHands/pull/18141进行地图维护
### 维护
* 重构（画布）：删除 https://github.com/OpenHands/OpenHands/pull/17660 中 @neubig 捆绑的 VSCode 消费者假设
* 杂务（lint）：@enyst 在 https://github.com/OpenHands/OpenHands/pull/18006 中舞台原始颜色警告
*测试：每周测试扫描：删除低值测试+通过https://github.com/OpenHands/OpenHands/pull/16574中的@enyst进行简化
* 恢复：恢复 @neubig 在 https://github.com/OpenHands/OpenHands/pull/18048 中捆绑的 VS Code 消费者支持
* test(e2e)：通过 https://github.com/OpenHands/OpenHands/pull/18087 中的 @enyst 为预设自动化的 Slack 替身提供目录标识
* 测试（设置）：等待删除 toast 并在 https://github.com/OpenHands/OpenHands/pull/18079 中 @enyst 的 DeleteProfileModal 测试中关闭
* 测试（e2e）：通过https://github.com/OpenHands/OpenHands/pull/18122中的@enyst从选项卡窗格自己的菜单中打开提交
* 测试（e2e）：从 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18121 中的 BETA 配置文件启动同型号配置文件测试

## 新贡献者
* @Grzesie2k 在 https://github.com/OpenHands/OpenHands/pull/17474 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.25.0...v1.26.0

---
此 PR 是通过[请发布](https://github.com/googleapis/release-please) 生成的。请参阅[文档](https://github.com/googleapis/release-please#release-please)。
<!-- AGENT_CANVAS_DOCKER_START -->

---

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.26.0` · 📅 发布：2026-10-08 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.26.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
