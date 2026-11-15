---
title: "OpenHands v1.35.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.35.0"
version: "v1.35.0"
published: "2026-11-03"
type: "minor"
lang: "zh"
---

# OpenHands v1.35.0

## 1.35.0 (2026-11-03)

<!-- 使用 main .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 特点
* feat(home)：记住并清除@tofarr在https://github.com/OpenHands/OpenHands/pull/19053中选择的云存储库
* 壮举（自动化）：将 @ak684 在 https://github.com/OpenHands/OpenHands/pull/19023 中选择的 Bitbucket 数据中心存储库存储为克隆 URL
* feat(automations): 通过https://github.com/OpenHands/OpenHands/pull/19025中的@ak684列出每个事件源自己的事件类型
* 壮举：将工作区/存储库元数据保留为 https://github.com/OpenHands/OpenHands/pull/16666 中 @BSmick6 的服务器端对话标签
* feat(files)：通过 https://github.com/OpenHands/OpenHands/pull/19076 中的 @hieptl 将下载按钮添加到“文件”选项卡 (OHE-3834)
* 壮举（对话）：将侧边栏 pin/存档状态存储在 https://github.com/OpenHands/OpenHands/pull/18697 中的 @neubig 服务器端标签中
* feat(sidebar): 在https://github.com/OpenHands/OpenHands/pull/19097中通过@ak684拖动侧边栏边缘来调整其大小
* feat(sidebar): 在 https://github.com/OpenHands/OpenHands/pull/19113 中通过 @ak684 将侧边栏文本放大一号
* feat(sidebar)：在后端选择器中对组织行进行分组，并将其保留在https://github.com/OpenHands/OpenHands/pull/19102中的@ak684的侧边栏中
* feat(automations)：通过https://github.com/OpenHands/OpenHands/pull/19101中的@ak684建议匹配实例集成的模板
* feat(canvas)：https://github.com/OpenHands/OpenHands/pull/18874 中 @malhotra5 的属性本地云注册条目 (ALL-5962)
* feat(chat)：通过工具调用对钩子和推理进行分组，并通过 https://github.com/OpenHands/OpenHands/pull/19084 中的 @ak684 说出每个组做了什么
* 壮举：通过 @ak684 在 https://github.com/OpenHands/OpenHands/pull/19155 中立即打开对话并内联启动进度
* 功能：在 @ak684 在 https://github.com/OpenHands/OpenHands/pull/19130 的聊天中显示实时代理状态
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/19190 中 @ak684 在侧边栏对话行中显示启动活动
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/19194 中通过 @ak684 加载保存的历史记录而不探测不可用的运行时间
* 壮举：https://github.com/OpenHands/OpenHands/pull/19211 中 @ak684 将启动和代理活动保留在一个对话组中
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/19209 中@ak684 在启动过程中显示共享对话标题
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/19227 中 @ak684 悬停时显示紧凑的消息时间戳
* feat(automations)：在https://github.com/OpenHands/OpenHands/pull/19125中@tofarr在自动化详细信息页面上显示和编辑keep_alive
* 壮举：通过 @ak684 在 https://github.com/OpenHands/OpenHands/pull/19249 中显示清晰的会话启动和恢复详细信息
* 壮举：简化 https://github.com/OpenHands/OpenHands/pull/19250 中 @ak684 的单一工具组标题和披露
* 壮举：在 https://github.com/OpenHands/OpenHands/pull/19254 中使用 @ak684 的句子式活动摘要
* 壮举：将https://github.com/OpenHands/OpenHands/pull/19252中的@ak684阻塞的钩子折叠成活动组
* 壮举（自动化）：在 https://github.com/OpenHands/OpenHands/pull/19034 中添加 @malhotra5 的事件 webhook 源视图
* feat(mcp)：当组织 MCP 服务器打开时，通过 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/19267 中将 OHE 成员发送到“设置”>“MCP”(OHE-3869)
### 错误修复
* 修复（llm-profiles）：当https://github.com/OpenHands/OpenHands/pull/19001中的@enyst拒绝配置文件删除时，显示服务器的原因
* 修复（聊天）：当 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/19046 中未选择任何配置文件时，保持代理配置文件丸可见（OHE-3793）
*修复（侧边栏）：在https://github.com/OpenHands/OpenHands/pull/19045中通过@hieptl在对话悬停中命名启动的代理配置文件（OHE-3791）
* 修复（home）：通过 @hieptl 在 https://github.com/OpenHands/OpenHands/pull/19047 中隐藏 git 提供程序下拉菜单中的非 git 条目（OHE-3776）
*修复（自动化）：在https://github.com/OpenHands/OpenHands/pull/19029中通过@ak684描述事件触发器而不命名特定源
* 修复（应用程序）：在 https://github.com/OpenHands/OpenHands/pull/18558 中的@neubig 在浏览器选项卡标题中显示应用程序页面名称
* 修复（聊天）：区分模型切换发起者并通过 @neubig 在 https://github.com/OpenHands/OpenHands/pull/18428 中显示代理基本原理
* 修复（聊天）：保持 Home 消息挂起，直到 https://github.com/OpenHands/OpenHands/pull/19074 中的 @hieptl 可以访问其云对话（OHE-3605）
* 修复（文件）：刷新云文件列表并通过@hieptl在https://github.com/OpenHands/OpenHands/pull/19072中打开工作区之外的文件（OHE-3797）
* 修复（自动化）：https://github.com/OpenHands/OpenHands/pull/19085 中 @ak684 使用内置提供程序作为后备事件源列表
*修复（启动器）：尊重https://github.com/OpenHands/OpenHands/pull/18363中@enyst的LAN选择加入和正确的启动诊断
* 修复(git)：无论 https://github.com/OpenHands/OpenHands/pull/19087 中的 @VascoSch92 主机所说，都将 Azure DevOps 链接保留在 dev.azure.com 上
* 修复：通过 @niebloomj 在 https://github.com/OpenHands/OpenHands/pull/19095 中改进移动对话触摸目标
*修复（acp）：在https://github.com/OpenHands/OpenHands/pull/18834中由@simonrosenberg启动ACP配置文件时发送启用的目录技能
* 修复（聊天）：从 https://github.com/OpenHands/OpenHands/pull/19083 中的@ak684 的挂钩事件标题中删除表情符号前缀和 ok 徽章
* 修复（自动化）：通过 https://github.com/OpenHands/OpenHands/pull/18936 中的 @tanishqbaweja 保留模板过滤器在空结果中滚动
* 修复：在 https://github.com/OpenHands/OpenHands/pull/19042 中@juanmichelini 在主页模型选择（云+本地）后抑制在第一条消息上运行
* 修复（主页）：在 https://github.com/OpenHands/OpenHands/pull/19137 中 @ak684 阻止“正在创建对话...”toast 在快速启动时闪烁
*修复：在https://github.com/OpenHands/OpenHands/pull/19145中显示@ak684收到的回复，没有阅读速度延迟
* 修复：在 https://github.com/OpenHands/OpenHands/pull/19152 中显示 @ak684 失败的上下文压缩的一个错误 toast
* 修复：https://github.com/OpenHands/OpenHands/pull/19158 中 @ak684 将云附件上传到运行时工作区
* 修复：https://github.com/OpenHands/OpenHands/pull/19144 中 @ak684 恢复瞬时会话失败而不会出现重复错误
* 修复：通过 @ak684 在 https://github.com/OpenHands/OpenHands/pull/19159 中保持启动附件传送在导航中保持活动状态
* 修复：在 https://github.com/OpenHands/OpenHands/pull/19186 中 @ak684 发送另一条消息时恢复暂停的沙箱
*修复：稳定https://github.com/OpenHands/OpenHands/pull/19202中@ak684的对话启动布局和标题切换
* 修复（git-sync）：通过 https://github.com/OpenHands/OpenHands/pull/19078 中的 @enyst 将 Azure DevOps SSH 远程链接到其 _git 页面
*修复：https://github.com/OpenHands/OpenHands/pull/19193中@ak684保持连接恢复安静
* 修复：在 https://github.com/OpenHands/OpenHands/pull/19207 中 @ak684 在套接字回退之前重试初始云历史记录失败
* 修复：https://github.com/OpenHands/OpenHands/pull/19219中@ak684将启动连接进度保持在一个稳定的组中
*修复（对话）：在https://github.com/OpenHands/OpenHands/pull/19175中由@enyst报告一次丢失的对话
*修复：从https://github.com/OpenHands/OpenHands/pull/19220中@ak684保存的对话历史记录中恢复终端输出
* 修复：防止历史回放在 https://github.com/OpenHands/OpenHands/pull/19225 中闪烁 Thinking by @ak684
* 修复（启动器）：当 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/19230 中获取 3001 时，回退到空闲前端端口
* 修复（对话卡）：仅通过 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/19229 中使用 noopener 和 http(s) 打开 VS Code URL
*修复（自动化）：在https://github.com/OpenHands/OpenHands/pull/19239中保存@enyst的编辑时保留事件触发器的目的地
* 修复：避免在https://github.com/OpenHands/OpenHands/pull/19245中@ak684在初始聊天滚动之前加载较旧的历史记录
*修复（聊天）：通过@enyst在https://github.com/OpenHands/OpenHands/pull/19236中将代理停止控制保持在作曲家中的手机宽度
*修复（聊天）：在https://github.com/OpenHands/OpenHands/pull/19235中@enyst开始对话的选项卡中显示空状态建议
*修复（启动器）：当https://github.com/OpenHands/OpenHands/pull/19256中的@VascoSch92退出时重新启动入口和静态服务器
* 修复（自动化）：通过 https://github.com/OpenHands/OpenHands/pull/19093 中的 @MindOfqc 从“询问代理”按钮启动设置对话
### 性能
* perf：在 https://github.com/OpenHands/OpenHands/pull/19153 中通过 @ak684 打开对话时推迟非活动面板
* perf：通过@ak684在https://github.com/OpenHands/OpenHands/pull/19203中请求紧凑的云对话历史记录
* perf：在https://github.com/OpenHands/OpenHands/pull/19195中显示@ak684在运行时准备就绪之前保存的云历史记录
* perf：在https://github.com/OpenHands/OpenHands/pull/19205中通过@ak684开始在侧边栏选择上加载对话元数据
* perf：避免在https://github.com/OpenHands/OpenHands/pull/19213中由@ak684重建未更改的对话侧边栏行
* perf：在https://github.com/OpenHands/OpenHands/pull/19248中由@ak684在对话导航期间准备云历史记录和重播
### 文档
* 文档（verify-openhands）：地图维护 2026 年 10 月 27 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19002
* 文档（verify-openhands）：地图维护 2026 年 10 月 29 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19079
* 文档（verify-openhands）：2026年10月30日由@enyst在https://github.com/OpenHands/OpenHands/pull/19116进行地图维护
* 文档（verify-openhands）：描述https://github.com/OpenHands/OpenHands/pull/19123中@ak684的建议和更多模板组
* 文档（verify-openhands）：地图维护 2026 年 10 月 31 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19148
* 文档：https://github.com/OpenHands/OpenHands/pull/19189 中的 @ak684 通过其状态语义验证实时活动
* 文档（verify-openhands）：地图维护 2026 年 11 月 1 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19171
* 文档（verify-openhands）：通过@enyst在https://github.com/OpenHands/OpenHands/pull/19182中进行计数和唯一性检查
* 文档（verify-openhands）：地图维护 2026 年 11 月 2 日由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19238
* 文档（验证）：由 @malhotra5 在 https://github.com/OpenHands/OpenHands/pull/19058 中单独映射自动化事件导航
* 文档(verify-openhands): 地图维护 2026-11-03 由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19276
### 维护
* 重构（后端）：在 https://github.com/OpenHands/OpenHands/pull/18967 中由 @enyst 命名连接选择器配方
* 杂务：将 https://github.com/OpenHands/OpenHands/pull/19057 中的 @all-hands-bot 的代理服务器提升到 1.59.0
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19050 中 @all-hands-bot 合并的 PR 工件
* 重构（主页）：在 https://github.com/OpenHands/OpenHands/pull/19052 中命名工作区选择器布局配方（@enyst）
* 重构：https://github.com/OpenHands/OpenHands/pull/19107 中@enyst 命名浮动菜单层和图标笔画
* 杂务（deps）：由 @all-hands-bot 在 https://github.com/OpenHands/OpenHands/pull/19096 中每天运行 dependentabot 版本更新
* 杂务（deps）：从https://github.com/OpenHands/OpenHands/pull/19089中@VascoSch92的桌面包装中删除已弃用的布尔包
* 重构：在 https://github.com/OpenHands/OpenHands/pull/19120 中由 @enyst 命名共享菜单几何形状和标签食谱
* 重构：在 https://github.com/OpenHands/OpenHands/pull/19161 中通过 @enyst 命名共享对话框视口约束
* 杂务（lint）：拒绝 https://github.com/OpenHands/OpenHands/pull/19163 中 @enyst 的三个迁移所有者中的原始颜色
* 重构：由 @enyst 在 https://github.com/OpenHands/OpenHands/pull/19166 中命名压缩元数据字体大小
* 重构：在 https://github.com/OpenHands/OpenHands/pull/19216 中 @enyst 在对话 UI 中使用现有主题别名
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19111 中 @all-hands-bot 合并的 PR 工件
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/OpenHands/OpenHands/pull/19198 中进行 2 次更新，在 1 个目录中碰撞反应组
* ci(deps)：https://github.com/OpenHands/OpenHands/pull/19200 中 @dependabot[bot] 在 1 个目录的操作组中将 docker/login-action 从 4.6.0 提升到 4.7.0
* 杂务（deps）：在https://github.com/OpenHands/OpenHands/pull/19197中@dependabot [bot]通过4个更新在1个目录中碰撞i18next组
* 杂务（deps）：在 https://github.com/OpenHands/OpenHands/pull/18361 中通过 @dependabot[bot] 碰撞 ws 和 @types/ws
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19270 中 @all-hands-bot 合并的 PR 工件
* ci：通过 @VascoSch92 在 https://github.com/OpenHands/OpenHands/pull/19246 中添加 Windows npm-install E2E 作业
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19282 中 @all-hands-bot 合并的 PR 工件
*测试：修复@neubig在https://github.com/OpenHands/OpenHands/pull/18798中的语义反馈E2E断言
* 杂务：删除 https://github.com/OpenHands/OpenHands/pull/19286 中 @all-hands-bot 合并的 PR 工件

## 新贡献者
* @BSmick6 在 https://github.com/OpenHands/OpenHands/pull/16666 中做出了第一个贡献
* @niebloomj 在 https://github.com/OpenHands/OpenHands/pull/19095 中做出了第一个贡献
* @tanishqbaweja 在 https://github.com/OpenHands/OpenHands/pull/18936 中做出了第一个贡献
* @MindOfqc 在 https://github.com/OpenHands/OpenHands/pull/19093 中做出了第一个贡献

**完整 Changelog**：https://github.com/OpenHands/OpenHands/compare/v1.34.0...v1.35.0

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

> 📦 仓库：[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · 🏷️ 版本：`v1.35.0` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/OpenHands/OpenHands/releases/tag/v1.35.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
