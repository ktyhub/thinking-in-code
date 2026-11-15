---
title: "OpenHands v1.34.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.34.0"
version: "v1.34.0"
published: "2026-10-27"
type: "minor"
lang: "zh"
---

# OpenHands v1.34.0

## 1.34.0 (2026-10-27)

<!-- 使用 main 的 .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(verify)：代表 DigitalOcean，因此托管代理可以通过 https://github.com/OpenHands/OpenHands/pull/18867 中的 @enyst 进行验证
* feat(canvas)：每个对话 Docker 运行时和设置 → https://github.com/OpenHands/OpenHands/pull/18436 中 @VascoSch92 的运行时页面
* 壮举（自动化）：通过 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/18767 中过滤和编辑自动化标签
* 壮举（对话）：在 https://github.com/OpenHands/OpenHands/pull/18986 中通过 @hieptl 在团队组织 (OHE-3765) 中标记共享切换“与组织用户共享”
*壮举（侧边栏）：在https://github.com/OpenHands/OpenHands/pull/18912中的@hieptl在行的沙箱（OHE-3689）中开始新对话
### 错误修复
*修复：通过env而不是https://github.com/OpenHands/OpenHands/pull/16420中@putramkti的argv将会话API密钥传递给静态服务器
* 修复（聊天）：在 https://github.com/OpenHands/OpenHands/pull/18680 中的 @analisaperlengkapan 的消息提要中保留拖动选择
* 修复（mars）：在 https://github.com/OpenHands/OpenHands/pull/18892 中隔离 @Fieldnote-Echo 的无效 OAuth 中继尝试
* 修复（自动化）：关闭设置页面的存储库菜单和 Escape 上的模型弹出窗口（@enyst in https://github.com/OpenHands/OpenHands/pull/18925）
* 修复：固定自动化 KV 秘密，以便会话密钥轮换使 https://github.com/OpenHands/OpenHands/pull/18307 中的 @enyst 可以读取 KV 数据
* 修复（自动化）：在 https://github.com/OpenHands/OpenHands/pull/18970 中关闭 Escape by @enyst 上的设置页面的事件源菜单
* 修复（自动化）：将 https://github.com/OpenHands/OpenHands/pull/18985 中的 @VascoSch92 的存储库选择器选项保留在一行上
* 修复（git）：解码百分比编码的存储库标签，保留 @OrangerXu 在 https://github.com/OpenHands/OpenHands/pull/18817 中编码一次的链接
* 修复（设置）：即使 https://github.com/OpenHands/OpenHands/pull/17521 中的@onatozmenn 标题清理失败，也会刷新配置文件列表
* 修复（自动化）：让自定义脚本自动化通过 @abhayymishraa 在 https://github.com/OpenHands/OpenHands/pull/18881 中选择他们的 LLM
* 修复（自动化）：防止列表行标签隐藏名称或在 https://github.com/OpenHands/OpenHands/pull/18998 中被 @enyst 溢出
* 修复（脚本）：避免泄漏原始 i18n 模板以进行 https://github.com/OpenHands/OpenHands/pull/18290 中 @lx3133584 的无标题 ACP 工具调用
*修复（技能）：按来源列出关键技能卡，以便https://github.com/OpenHands/OpenHands/pull/18288中的@Harsh23Kashyap保持同名条目不同
* 修复（安全）：阻止 untrusted markdown 设置 rel="opener" 或 @LeizhenZhang 在 https://github.com/OpenHands/OpenHands/pull/17156 中的任意目标
*修复（文件）：显示@hieptl在https://github.com/OpenHands/OpenHands/pull/18911中在新窗口中打开的云文件（OHE-3735）
* 修复：https://github.com/OpenHands/OpenHands/pull/17039 中 @Asthenia0412 的防护替换了套接字因连接状态变化而延迟关闭的情况 (#16842)
### 文档
* 文档（verify-openhands）：地图维护 2026 年 10 月 24 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18904
* 文档（verify-openhands）：地图维护 2026 年 10 月 25 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18929
* 文档（verify-openhands）：地图维护 2026 年 10 月 26 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18971
* 文档（verify-openhands）：通过 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/18979 中映射运行时设置页面和启动器标签
### 维护
* 重构（onboarding）：在https://github.com/OpenHands/OpenHands/pull/18856中通过@enyst在CSS中表达幻灯片偏移
* 重构（自动化）：通过 https://github.com/OpenHands/OpenHands/pull/18857 中的 @enyst 在 CSS 中表达运行栏高度
* 重构（后端）：通过https://github.com/OpenHands/OpenHands/pull/18902中的@enyst在CSS中表达测量的面板高度
* 重构（文件）：通过https://github.com/OpenHands/OpenHands/pull/18903中的@enyst在CSS中表达树调整宽度
* 重构（侧边栏）：在 https://github.com/OpenHands/OpenHands/pull/18908 中使用 @enyst 的标准折叠轨道堆叠实用程序
* 重构（对话）：通过 https://github.com/OpenHands/OpenHands/pull/18909 中的 @enyst 在 CSS 中表达概述抽屉大小
* 重构（自动化）：在 https://github.com/OpenHands/OpenHands/pull/18917 中使用@enyst 现有的语义主题别名
* 重构（下拉）：通过https://github.com/OpenHands/OpenHands/pull/18918中的@enyst编译的CSS隐藏所需的控件
* 重构（设置）：使用 https://github.com/OpenHands/OpenHands/pull/18933 中 @enyst 的现有模型配置文件主题别名
* 重构（文件）：为 Markdown 预览颜色提供 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18934 中编译的配方
* 重构（home）：使用https://github.com/OpenHands/OpenHands/pull/18946中@enyst的现有启动器主题别名
* 重构（自动化）：使用 https://github.com/OpenHands/OpenHands/pull/18947 中 @enyst 的现有详细主题别名
* 重构（扩展）：https://github.com/OpenHands/OpenHands/pull/18948 中 @enyst 命名对话框视口限制
* 重构（自动化）：在 https://github.com/OpenHands/OpenHands/pull/18950 中为 @enyst 命名设置演示菜谱
* 重构（命令菜单）：在 https://github.com/OpenHands/OpenHands/pull/18966 中命名@enyst 共享的演示菜谱
* 重构：通过 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/18978 中删除没有生产调用者的代码
* 杂务（compat）：通过https://github.com/OpenHands/OpenHands/pull/18983中的@VascoSch92将minimumAgentServer提高到1.57.0
* 琐事：将 @openhands/extensions 提升到 0.36.0，并通过 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/18993 中将自动化提升到 1.26.0
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/18876 中 @all-hands-bot 合并的 PR 工件
* 杂务：在 https://github.com/OpenHands/OpenHands/pull/18990 中通过 @DevinVinson 碰撞 shell-quote 和 DOMPurify 依赖项
* 测试（技能）：模拟https://github.com/OpenHands/OpenHands/pull/19005中@VascoSch92的同名卡测试中的技能目录
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19003 中 @all-hands-bot 合并的 PR 工件

## 新贡献者
* @putramkti 在 https://github.com/OpenHands/OpenHands/pull/16420 中做出了第一个贡献
* @OrangerXu 在 https://github.com/OpenHands/OpenHands/pull/18817 中做出了第一个贡献
* @onatozmenn 在 https://github.com/OpenHands/OpenHands/pull/17521 中做出了第一个贡献
* @Asthenia0412 在 https://github.com/OpenHands/OpenHands/pull/17039 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.33.0...v1.34.0

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.34.0` · 📅 发布：2026-10-27 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.34.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
