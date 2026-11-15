---
title: "OpenHands v1.27.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.27.0"
version: "v1.27.0"
published: "2026-10-12"
type: "minor"
lang: "zh"
---

# OpenHands v1.27.0

## 1.27.0 (2026-10-12)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(verify-openhands)：在 DeepSeek 上驱动模拟 LLM e2e 行为，并通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18191 中映射差距
* feat(verify-openhands)：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18211 中使用 `browser record` 录制浏览器的视频
* feat(acp)：通过https://github.com/OpenHands/OpenHands/pull/17758中的@Placidoe在本地后端添加OpenCode和Pi作为内置ACP代理
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/17199 中添加 @malhotra5 切换启动页面模式
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/17200 中添加 @malhotra5 的自动设置分割面板
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/17201 中添加 @malhotra5 的代理辅助自动化表单更新
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/17242 中添加 @malhotra5 的持续自动化草稿管理 UI
* 壮举：通过 @malhotra5 在 https://github.com/OpenHands/OpenHands/pull/17688 中完成自动化设置草案流程
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/18200 中@enyst 在平板电脑上添加紧凑的部分导航
* feat(verify-openhands): 在 https://github.com/OpenHands/OpenHands/pull/18292 中通过 @enyst 用 `browser key down|up|release-all` 按住按键
* feat(acp)：从代理获取 ACP 模型列表，而不是通过 @simonrosenberg 在 https://github.com/OpenHands/OpenHands/pull/18131 中对它们进行硬编码
* feat(mars)：通过 https://github.com/OpenHands/OpenHands/pull/17838 中的 @amandhaw 将 Agent Canvas 连接到 DigitalOcean Managed Agents（桌面和 Web）
### 错误修复
*修复（e2e）：在https://github.com/OpenHands/OpenHands/pull/17876中保留@kr1shna-exe的模拟验证轨迹
* 修复（hooks）：在 https://github.com/OpenHands/OpenHands/pull/18107 中的 @fengyue-xve 的可用挂钩对话框中显示提示和代理挂钩文本
*修复（a11y）：在https://github.com/OpenHands/OpenHands/pull/18174中关闭@enyst Escape上作曲家的更多输入操作菜单
* 修复（verify-openhands）：通过https://github.com/OpenHands/OpenHands/pull/18209中的@enyst将默认代理配置文件指向预设模型
* 修复（插件）：在 https://github.com/OpenHands/OpenHands/pull/18110 中通过 @fengyue-xve 将重复安装 toast 指向更新或卸载
* 修复（钩子）：使用专用钩子在 https://github.com/OpenHands/OpenHands/pull/18177 中的 @lx3133584 的可用钩子对话框中获取错误消息
* 修复：@enyst 在 https://github.com/OpenHands/OpenHands/pull/18199 中使用主题颜色进行表单验证
* 修复（后端）：在组织上打开云 Web 应用程序，由 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/18228 中返回
* 修复：使编辑后端对话框适合 https://github.com/OpenHands/OpenHands/pull/18219 中 @enyst 的小视口
*修复（入门）：从其行开始设置步骤的游览，并通过https://github.com/OpenHands/OpenHands/pull/18243中的@hieptl删除模板停止的页脚
* 修复（自动化）：将长期运行的日志对话框保留在 https://github.com/OpenHands/OpenHands/pull/18175 中的 @enyst 面板内
* 修复（mcp）：当 https://github.com/OpenHands/OpenHands/pull/18182 中的 @enyst 更改 MCP 服务器失败时，显示一个错误 toast
* 修复（docker）：当https://github.com/OpenHands/OpenHands/pull/18180中的@enyst内核没有IPv6时，将前端绑定到0.0.0.0
*修复（设置）：通过@enyst在https://github.com/OpenHands/OpenHands/pull/18256中给设置屏幕一个明确的高度
* 修复(mcp): 当 https://github.com/OpenHands/OpenHands/pull/18267 中的@smolpaws 预保存连接测试失败时显示一个 toast
* 修复(hooks): 在https://github.com/OpenHands/OpenHands/pull/18215中通过@fengyue-xve按钩子类型选择可用的钩子文本
* 修复（对话面板）：通过 @lx3133584 在 https://github.com/OpenHands/OpenHands/pull/18151 中确认模式中将 testId 传递给 BrandButton
* 修复（设置）：在 https://github.com/OpenHands/OpenHands/pull/18144 中标记 @awss1i 在 LLM 和代理配置文件编辑器中使用的名称
* 修复(a11y): 使https://github.com/OpenHands/OpenHands/pull/18112中的@fengyue-xve可以通过键盘操作代理配置文件行菜单
* 修复（自动化）：当https://github.com/OpenHands/OpenHands/pull/18111中的@fengyue-xve代理配置文件字段为空时显示默认值
* 修复（入门）：使设置导览远离其他对话框，并通过 https://github.com/OpenHands/OpenHands/pull/18261 中的 @hieptl 在图书馆启动 MCP 导览
* 修复（入门）：在内置集成选项上说“使用”，并在 https://github.com/OpenHands/OpenHands/pull/18262 中通过 @hieptl 重命名自动化步骤
* 修复：在 https://github.com/OpenHands/OpenHands/pull/17967 中 @pei711 的 Escape 模态之前关闭技能标签弹出窗口
* 修复：在 https://github.com/OpenHands/OpenHands/pull/17966 中显示@pei711 标头特定的 MCP 验证错误
* 修复（聊天）：在 https://github.com/OpenHands/OpenHands/pull/17968 中 @GoldArowana 导航之前刷新对话草稿
* 修复：在 https://github.com/OpenHands/OpenHands/pull/18127 中接受 Ctrl 来确认 macOS 上的快捷方式 @errmakov
* 修复（设置）：https://github.com/OpenHands/OpenHands/pull/16958 中 @enyst 的后端范围本地设置缓存
* 修复（遥测）：在 https://github.com/OpenHands/OpenHands/pull/16959 中重试 @enyst 的自动化同意同步
*修复（mcp）：在https://github.com/OpenHands/OpenHands/pull/18278中使用@enyst的主题感知秘密选择
*修复：解决https://github.com/OpenHands/OpenHands/pull/17995中@errmakov在事件组中拒绝和错误的操作
* 修复（i18n）：对https://github.com/OpenHands/OpenHands/pull/18308中@lx3133584未加载消息的订阅模型使用翻译密钥
### 文档
* 文档（verify-openhands）：在 https://github.com/OpenHands/OpenHands/pull/18207 中映射 @enyst 的 #18107 中的可用 Hooks 文本修复
* 文档（verify-openhands）：地图维护 2026 年 10 月 8 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18183
* 文档（verify-openhands）：地图维护 2026 年 10 月 9 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18237
* 文档（verify-openhands）：2026年10月10日由@smolpaws在https://github.com/OpenHands/OpenHands/pull/18264进行地图维护
* 文档（verify-openhands）：2026年10月11日由@smolpaws在https://github.com/OpenHands/OpenHands/pull/18281进行地图维护
* 文档（verify-openhands）：从 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18295 的 2026 年 10 月 9 日封闭扫描中恢复地图修正
* docs(verify-openhands): 通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18304 中记录特征图中的每个已知错误
### 维护
* 杂务：通过 https://github.com/OpenHands/OpenHands/pull/18253 中的 @all-hands-bot 将代理服务器提升到 1.54.0
* 杂务（lint）：在 https://github.com/OpenHands/OpenHands/pull/18194 中保护分隔线并切换 @enyst 的外观合约
* 重构（主题）：https://github.com/OpenHands/OpenHands/pull/17646 中的@smolpaws 将基色与基于文本的排版分开
* 重构（主题）：在 https://github.com/OpenHands/OpenHands/pull/18270 中使用 @enyst 的可读 MCP 反馈文本标记
* 杂务（lint）：@enyst 在 https://github.com/OpenHands/OpenHands/pull/18275 中上演内联样式警告
* 杂务（lint）：在https://github.com/OpenHands/OpenHands/pull/18274中由@enyst保护插入符号外观和状态旋转
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/17718 中 @all-hands-bot 合并的 PR 工件
* 测试（入门）：通过 @kr1shna-exe 在 https://github.com/OpenHands/OpenHands/pull/17889 中保留完整的模型配置文件
* 重构（入职）：在 https://github.com/OpenHands/OpenHands/pull/18218 中通过 @enyst 编辑活动的 LLM 配置文件而不是原始 LLM 设置
* 杂务（lint）：通过https://github.com/OpenHands/OpenHands/pull/18315中的@enyst将shadcn lint更新为0.2.1
* 杂务：通过 https://github.com/OpenHands/OpenHands/pull/18336 中的 @hieptl 将 @openhands/extensions 撞到 0.30.0

## 新贡献者
* @fengyue-xve 在 https://github.com/OpenHands/OpenHands/pull/18107 中做出了第一个贡献
* @lx3133584 在 https://github.com/OpenHands/OpenHands/pull/18177 中做出了第一个贡献
* @Placidoe 在 https://github.com/OpenHands/OpenHands/pull/17758 中做出了第一个贡献
* @pei711 在 https://github.com/OpenHands/OpenHands/pull/17967 中做出了第一个贡献
* @GoldArowana 在 https://github.com/OpenHands/OpenHands/pull/17968 中做出了第一个贡献
* @amandhaw 在 https://github.com/OpenHands/OpenHands/pull/17838 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.26.0...v1.27.0

---
此 PR 是通过[请发布](https://github.com/googleapis/release-please) 生成的。请参阅[文档](https://github.com/googleapis/release-please#release-please)。
<!-- AGENT_CANVAS_DOCKER_START -->

---

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.27.0` · 📅 发布：2026-10-12 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
