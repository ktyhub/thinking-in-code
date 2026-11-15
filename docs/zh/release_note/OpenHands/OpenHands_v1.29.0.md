---
title: "OpenHands v1.29.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.29.0"
version: "v1.29.0"
published: "2026-10-20"
type: "minor"
lang: "zh"
---

# OpenHands v1.29.0

## 1.29.0 (2026-10-20)

<!-- 使用 main 的 .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(backends)：在https://github.com/OpenHands/OpenHands/pull/18667中@ak684在后端选择器中显示完整的组织名称
* feat(launchers)：从https://github.com/OpenHands/OpenHands/pull/18683中@simonrosenberg的捆绑扩展包中读取公共技能
* feat(agent-profiles)：从https://github.com/OpenHands/OpenHands/pull/18686中的@simonrosenberg的服务器目录中选择每个配置文件的技能
* 壮举（代理配置文件）：通过 @simonrosenberg 在 https://github.com/OpenHands/OpenHands/pull/18679 中编辑每个配置文件的冷凝器和验证
* feat(agent-profiles)：为https://github.com/OpenHands/OpenHands/pull/18685中的@simonrosenberg的每个配置文件选择一个模型路由器
*壮举（主页）：在https://github.com/OpenHands/OpenHands/pull/18538中通过@lx3133584从主页和应用程序设置中消除推荐的自动化轨道
* feat(agent-profiles)：通过id启动`default`；配置文件拥有@simonrosenberg 在 https://github.com/OpenHands/OpenHands/pull/18720 中的设置
### 错误修复
*修复（对话）：在https://github.com/OpenHands/OpenHands/pull/18158中@henriquehirako将连接的存储库保存在云对话中
* 修复（聊天）：在 https://github.com/OpenHands/OpenHands/pull/18660 中 @enyst 的浅色主题中显示 git 芯片图标
* 修复（聊天）：https://github.com/OpenHands/OpenHands/pull/18651 中的 @VascoSch92 在 1 秒内（而不是 10 秒）内赶上模型
* 修复（入门）：跳过https://github.com/OpenHands/OpenHands/pull/18724中@hieptl锁定到云主机（OHE-3670）的画布上的首次运行模式
*修复（入门）：通过https://github.com/OpenHands/OpenHands/pull/18703中的@hieptl从其关闭按钮（OHE-3658）关闭设置指南
*修复（设置）：通过@hieptl在https://github.com/OpenHands/OpenHands/pull/18710中过滤和排序LLM提供商选择器（OHE-3653）
* 修复（自动化）：停止在 https://github.com/OpenHands/OpenHands/pull/18708 中提供代理配置文件来提示和插件@simonrosenberg 的预设
* 修复（对话）：当历史页面滞后于https://github.com/OpenHands/OpenHands/pull/18719中的@enyst运行时时，保留第一条云消息
* 修复（库）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18663 中使用 npm 库发送一个作用域样式表
*修复（启动器）：将uvx固定到Python 3.12-3.14，直到由@VascoSch92在https://github.com/OpenHands/OpenHands/pull/18731中运送3.15轮子
### 维护
* ci(docker)：通过https://github.com/OpenHands/OpenHands/pull/17544中的@Xalzeroph验证映像中的代理服务器版本
* ci(desktop-macos)：在 https://github.com/OpenHands/OpenHands/pull/18723 中的 @VascoSch92 发布的版本中显示非隔离解决方法
* 琐事：在 https://github.com/OpenHands/OpenHands/pull/18730 中通过 @VascoSch92 将 @openhands/extensions 撞到 0.32.0
* 重构（markdown）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18696 中为警报提供可读的主题角色
* 重构（主题）：对 https://github.com/OpenHands/OpenHands/pull/18694 中的@enyst 使用语义颜色表示失败的健康点
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18709 中 @all-hands-bot 合并的 PR 工件
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18736 中 @all-hands-bot 合并的 PR 工件

## 新贡献者
* @Xalzeroph 在 https://github.com/OpenHands/OpenHands/pull/17544 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.28.1...v1.29.0

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.29.0` · 📅 发布：2026-10-20 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.29.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
