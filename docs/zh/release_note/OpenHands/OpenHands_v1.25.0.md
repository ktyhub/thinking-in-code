---
title: "OpenHands v1.25.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.25.0"
version: "v1.25.0"
published: "2026-10-06"
type: "minor"
lang: "zh"
---

# OpenHands v1.25.0

## 1.25.0 (2026-10-06)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* 壮举：通过 @errmakov 在 https://github.com/OpenHands/OpenHands/pull/17587 中概述设置子页面上的后退导航控制
* 壮举（设置）：通过 @georgeglarson 在 https://github.com/OpenHands/OpenHands/pull/16426 中批量添加提供商模型作为 LLM 配置文件
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/16147 中添加 @juanmichelini 的直接提示模型路由器设置
* feat(canvas)：通过事件id取消流媒体插槽并删除https://github.com/OpenHands/OpenHands/pull/17465中@VascoSch92的文本匹配调节器
* feat(apps)：为https://github.com/OpenHands/OpenHands/pull/17736中的@VascoSch92添加已安装Canvas应用程序的更新操作
* 壮举（设置）：在 https://github.com/OpenHands/OpenHands/pull/17723 中为每个连接批量添加 @juanmichelini 的 LLM 配置文件
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/17797 中添加 @juanmichelini 的模型路由器“在对话开始时运行”切换
* 壮举（自动化）：在云后端显示模板并通过 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/17830 中提供本机 git 集成
* feat(chat)：在https://github.com/OpenHands/OpenHands/pull/17804中@VascoSch92的聊天输入中添加可选的语音听写
* 壮举（自动化）：按 https://github.com/OpenHands/OpenHands/pull/17814 中的@henriquehirako 创建者过滤自动化仪表板
* 壮举：当 @juanmichelini 在 https://github.com/OpenHands/OpenHands/pull/17840 创建第一个路由器时，自动启用“在第一条消息上运行”
* feat(conversation)：通过 @errmakov 在 https://github.com/OpenHands/OpenHands/pull/17612 中为抽屉选项卡条提供真正的选项卡语义
* feat(canvas)：通过 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/17877 中渲染画布扩展的清单声明的 SVG 图标
* 壮举（自动化）：在 https://github.com/OpenHands/OpenHands/pull/17868 中 @hieptl 提供问题到 PR 模板之前的内置集成
* feat(agent-profiles)：从服务器目录中选择每个工具；引脚 SDK 1.53.0 由 @simonrosenberg 在 https://github.com/OpenHands/OpenHands/pull/17516
* feat(agent-profiles)：为个人资料提供自己的角色或由 @simonrosenberg 在 https://github.com/OpenHands/OpenHands/pull/17843 中提供的额外说明
* feat(files)：通过https://github.com/OpenHands/OpenHands/pull/17869中的@kr1shna-exe配置工作区文件发现
### 错误修复
* 修复（前端）：通过 https://github.com/OpenHands/OpenHands/pull/17592 中的 @FOWEPJF255 保持插件搜索在窄屏幕上可用
*修复（前端）：当 https://github.com/OpenHands/OpenHands/pull/17469 中的 @shinji00222 舍入达到下一个单位时，将紧凑令牌计数提升到下一个单位
* 修复（模型选择器）：更正 https://github.com/OpenHands/OpenHands/pull/17464 中 @Harsh23Kashyap 拼写错误的困惑提供者密钥
* 修复：通过 https://github.com/OpenHands/OpenHands/pull/17152 中的 @jabrailkhalil 从目录限定路径中检测 Docker 文件语言
* 修复（聊天）：在 https://github.com/OpenHands/OpenHands/pull/16116 中通过 @KXHXK 使长 /btw 响应可滚动
* 修复（测试）：为 LLMModel 装置提供 https://github.com/OpenHands/OpenHands/pull/17750 中 @simonrosenberg 现在需要的类型字段
* 修复：https://github.com/OpenHands/OpenHands/pull/17007 中的@neubig 使本地会话密钥远离外部可访问的侦听器
* 修复：在 https://github.com/OpenHands/OpenHands/pull/17211 中 @neubig 入职期间保留规范的 LLM 设置
* 修复（前端）：在入职时通过 @neubig 在 https://github.com/OpenHands/OpenHands/pull/17212 中开始聊天时显示进度
*修复（画布）：尊重 https://github.com/OpenHands/OpenHands/pull/17387 中 @neubig 的作用域运行时 clients 和工作区功能
* 修复：标题生成使用与 @juanmichelini 在 https://github.com/OpenHands/OpenHands/pull/16886 中运行的代理配置文件相同的 LLM
* 修复：预选路由器分类器模型，以便在 https://github.com/OpenHands/OpenHands/pull/17835 中 @juanmichelini 不存在配置文件时创建它
*修复：使用 https://github.com/OpenHands/OpenHands/pull/16976 中 @malhotra5 的同意感知网站 PostHog handoff
* 修复（子对话）：通过 https://github.com/OpenHands/OpenHands/pull/17842 中的 @lilagrc 将 Cloud 子项链接到 Agent Canvas
* 修复（自动化）：按偏移量对列表进行分页，以便在 https://github.com/OpenHands/OpenHands/pull/17839 中加载 @henriquehirako 超过 100 幅的更多作品
* 修复（路由器）：在https://github.com/OpenHands/OpenHands/pull/17860中完成Flash模板提示并通过@juanmichelini注入模型表
* 修复：后退并停止重新获取焦点突发，从而触发 https://github.com/OpenHands/OpenHands/pull/17984 中 @tofarr 的云速率限制
* 修复（websocket）：在前台重新连接，在移动后台通过 @tofarr 在 https://github.com/OpenHands/OpenHands/pull/17982 中干净地断开连接
* 修复：当 https://github.com/OpenHands/OpenHands/pull/17866 中的 @hieptl 锁定到云主机时，阻止隐藏的 Canvas 设置页面
* 修复（自动化）：隐藏 https://github.com/OpenHands/OpenHands/pull/17971 中 @qingshungLI 预设操作的代理配置文件
* 修复：通过 @simonrosenberg 在 https://github.com/OpenHands/OpenHands/pull/17279 中为指定代理配置文件提供运行时服务
* 修复（前端）：保留保存的提示后缀，以便 @Harsh23Kashyap 在 https://github.com/OpenHands/OpenHands/pull/17719 中启动内联和配置文件
* 修复（设置）：将 Agent Canvas 更新对话框保留在 https://github.com/OpenHands/OpenHands/pull/18008 中的 @enyst 的手机视口内
* 修复（代理配置文件）：使用 https://github.com/OpenHands/OpenHands/pull/18001 中的@simonrosenberg 的委托工具保存任务跟踪器（SDK#5519 的解决方法）
* 修复（a11y）：一个设置主要地标，自定义 aria-current，同步 html lang by @enyst in https://github.com/OpenHands/OpenHands/pull/18012
* 修复（设置）：在 https://github.com/OpenHands/OpenHands/pull/18020 中保留 @awss1i 为路由器模板创建“不创建配置文件”
*修复（对话）：将空批次条目视为未找到，而不是@enyst在https://github.com/OpenHands/OpenHands/pull/18009中的无效响应
* 修复（设置）：对 https://github.com/OpenHands/OpenHands/pull/18013 中 @enyst 的模型路由器列表文本使用主题对比墨水
* 修复（聊天）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/18015 中保持 Composer 溢出菜单以较窄的宽度打开
* 修复（自动化）：使删除确认成为一个模态对话框，在 https://github.com/OpenHands/OpenHands/pull/18011 中 @enyst 的 Escape 上关闭
* 修复（llm-profiles）：将自动填充的配置文件名称保留在 https://github.com/OpenHands/OpenHands/pull/18017 中 @enyst 的模型后面
* 修复（技能）：预先填写 https://github.com/OpenHands/OpenHands/pull/18016 中 @enyst 使用技能和创建自动化中的家庭作曲家
*修复（聊天）：在https://github.com/OpenHands/OpenHands/pull/18014中@enyst的“从这里分支”之后将消息文本保留在编辑器中
### 文档
* 文档（评论）：需要 @neubig 在 https://github.com/OpenHands/OpenHands/pull/17638 中提供真实的前端证据
* 文档：由 @neubig 在 https://github.com/OpenHands/OpenHands/pull/17726 中定义有效的实时审核证据
* 文档：@enyst 在 https://github.com/OpenHands/OpenHands/pull/17769 中的多个 docker 沙箱
* 文档：@nicolasdmolina 在 https://github.com/OpenHands/OpenHands/pull/16884 中的文档跨存储库版本兼容性
* 文档（codereview）：需要 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/17267 中提供深层、高风险 PR 的设计文档
* 文档：鼓励 .pr/ HTML 设计文档 + htmlpreview 链接，用于 https://github.com/OpenHands/OpenHands/pull/16316 中 @smolpaws 的重要 PR
* 文档：@neubig 在 https://github.com/OpenHands/OpenHands/pull/17990 中澄清 Canvas 分类并审查证据边界
### 维护
* 测试：@neubig 在 https://github.com/OpenHands/OpenHands/pull/17729 中完成 LLM 模型装置
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/17756 中进行 4 次更新来推动反应组
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/17755 中的 3 项更新来冲击 i18next 组
* ci(deps)：https://github.com/OpenHands/OpenHands/pull/17752 中的 @dependabot[bot] 将操作组中的操作/结帐从 4 提高到 7
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/17754 中进行 2 次更新来提升 tanstack 组
* 杂务（deps）：将顺风合并从3.6.0到顺风组中的3.7.0，由https://github.com/OpenHands/OpenHands/pull/17753中的@dependabot[bot]
* 杂务（deps-dev）：通过 https://github.com/OpenHands/OpenHands/pull/16648 中的 @dependabot[bot] 在 1 个目录的类型组中将 @types/node 从 26.1.2 碰撞到 26.2.0
* 杂务（deps）：通过https://github.com/OpenHands/OpenHands/pull/16649中的@dependabot[bot]将httpxy从0.5.3提升到0.5.5
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/16650 中将电子从 42.3.3 碰撞到 43.3.0
* 杂务（deps）：在https://github.com/OpenHands/OpenHands/pull/16465中@dependabot [bot]通过6个更新在1个目录中碰撞react-router组
* 杂务（deps）：通过 https://github.com/OpenHands/OpenHands/pull/16651 中的 @dependabot[bot] 将 posthog-js 从 1.380.0 提升到 1.415.0
* 重构：将 https://github.com/OpenHands/OpenHands/pull/17782 中的默认型号路由器重命名为 @juanmichelini 的 OpenHands Router Pro / Flash
* 杂务：从https://github.com/OpenHands/OpenHands/pull/17811中@juanmichelini的代理画布模型路由器提示中删除gpt-5.2-codex
* 重构(agent-settings): 删除https://github.com/OpenHands/OpenHands/pull/17825中@simonrosenberg无法访问的非嵌入模式
* 杂务：将 typescript client 和代理服务器通过 https://github.com/OpenHands/OpenHands/pull/17831 中的 @malhotra5 提升到 1.50.1
* 杂务：在 https://github.com/OpenHands/OpenHands/pull/17850 中使用 @hieptl 的扩展 0.26.0 和自动化 1.17.0
* 杂务（lint）：拒绝未知的 Tailwind 类，并由 @smolpaws 在 https://github.com/OpenHands/OpenHands/pull/17644 中验证主题加载
* 杂务（lint）：需要 https://github.com/OpenHands/OpenHands/pull/17916 中 @enyst 的 Canvas UI 组件上的静态类
* 杂务（deps）：通过 @enyst 在 https://github.com/OpenHands/OpenHands/pull/17987 中将 shadcn lint 升级到 0.2.0
* 杂务（deps）：删除https://github.com/OpenHands/OpenHands/pull/17989中@enyst未使用的socket.io-client
* 杂务：在 https://github.com/OpenHands/OpenHands/pull/17870 中使用 @henriquehirako 的扩展 0.27.0
* 杂务：用 https://github.com/OpenHands/OpenHands/pull/17997 中的 @enyst 替换剩余的 Node 22 运行时引脚
* 测试（目录）：通过https://github.com/OpenHands/OpenHands/pull/17855中的@kr1shna-exe删除上游数据镜像
* 琐事：在 https://github.com/OpenHands/OpenHands/pull/17998 中将自动化提升至 1.19.0，并通过 @malhotra5 将 @openhands/extensions 提升至 0.29.0
* 重构：https://github.com/OpenHands/OpenHands/pull/17614 中 @wcy12378 按行为责任分割对话面板测试

## 新贡献者
* @FOWEPJF255 在 https://github.com/OpenHands/OpenHands/pull/17592 中做出了第一个贡献
* @shinji00222 在 https://github.com/OpenHands/OpenHands/pull/17469 中做出了第一个贡献
* @jabrailkhalil 在 https://github.com/OpenHands/OpenHands/pull/17152 中做出了第一个贡献
* @henriquehirako 在 https://github.com/OpenHands/OpenHands/pull/17839 中做出了第一个贡献
* @nicolasdmolina 在 https://github.com/OpenHands/OpenHands/pull/16884 中做出了第一个贡献
* @qingshungLI 在 https://github.com/OpenHands/OpenHands/pull/17971 中做出了第一个贡献
* @kr1shna-exe 在 https://github.com/OpenHands/OpenHands/pull/17869 中做出了第一个贡献
* @wcy12378 在 https://github.com/OpenHands/OpenHands/pull/17614 中做出了第一个贡献
* @awss1i 在 https://github.com/OpenHands/OpenHands/pull/18020 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.24.0...v1.25.0

---
此 PR 是通过[请发布](https://github.com/googleapis/release-please) 生成的。请参阅[文档](https://github.com/googleapis/release-please#release-please)。
<!-- AGENT_CANVAS_DOCKER_START -->

---

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.25.0` · 📅 发布：2026-10-06 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.25.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
