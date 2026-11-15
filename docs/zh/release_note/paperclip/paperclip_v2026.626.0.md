---
title: "paperclip v2026.626.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.626.0"
version: "v2026.626.0"
published: "2026-06-27"
type: "minor"
lang: "zh"
---

# paperclip v2026.626.0

# 纸clip v2026.626.0

> 发布时间：2026-06-26

此版本获得 **17 位贡献者的 122 次提交**。

## 亮点

- **Hermes，现已内置（本地和远程网关）** - Hermes 是此版本中的一流适配器。雇用在您自己的计算机上运行的 `hermes_local` 代理，或通过网关**远程**运行 Hermes 的 `hermes_gateway` 代理 - 无需手动安装插件，并且网关 URL 和 API 密钥具有安全的登录默认值。外部 Hermes 包仍然可以通过适配器管理器覆盖或隐藏内置程序。 （[#8543]（https://github.com/paperclipai/paperclip/pull/8543），@cryppadotta）
- **任务看门狗** - 一流的看门狗控制平面可让您将自动检查附加到任务，并让 Paperclip 为您监视 - 在问题线程中显示看门狗状态、结果和出色的工作，而不是让您照顾长期运行的代理。 （[#8339]（https://github.com/paperclipai/paperclip/pull/8339），@cryppadotta）
- **询问工作模式** - 问题现在可以在问答任务的“询问”工作模式下运行，因此您可以将代理指向问题并获得答案，而无需启动完整的执行工作流程。 （[#8334]（https://github.com/paperclipai/paperclip/pull/8334），@cryppadotta）
- **沙盒运行时状态，存在于您的线程中** - 临时沙盒运行时现在直接在问题线程中报告其状态，并且 Daytona 沙盒租约可在运行中重复使用 - 因此云/沙盒执行更加可见且启动速度更快。 （[#8594]（https://github.com/paperclipai/paperclip/pull/8594），[#8593]（https://github.com/paperclipai/paperclip/pull/8593），@devinfoley；[#8513]（https://github.com/paperclipai/paperclip/pull/8513），@devinfoley）
- **工作区文件下载和外部对象引用** - 从 Paperclip 中获取工作产品：直接从工作区下载代理生成的文件，并跨问题表面引用外部对象（链接、资产），以便正确的上下文随任务一起传递。 （[#8512]（https://github.com/paperclipai/paperclip/pull/8512），[#8229]（https://github.com/paperclipai/paperclip/pull/8229），@cryppadotta）

## 改进

- **更新的入门** - 入门流程已经过重新设计，较旧的经典向导已退役，同时还修复了一批 UI 样式 - 因此设置新实例更加干净，并且默认任务 UI（工作模式标签、状态颜色、团队创建副本）开箱即用是一致的。 （[#8628]（https://github.com/paperclipai/paperclip/pull/8628），@cryppadotta）
- **任务状态图标和颜色** - 任务状态现在通过全面的专用图标和颜色以及问题列表一目了然。 （[#8580]（https://github.com/paperclipai/paperclip/pull/8580），@scotttong；[#8376]（https://github.com/paperclipai/paperclip/pull/8376），@tonio-alucema）
- **例程日期变量** - 例程获得日期变量控制，因此重复例程可以对运行日期进行参数化，而无需每次手动编辑提示。 （[#8655]（https://github.com/paperclipai/paperclip/pull/8655），@cryppadotta）
- **技能类别编辑** - 您现在可以在设置中编辑技能类别，从而更轻松地组织已安装的技能目录。 （[#8615]（https://github.com/paperclipai/paperclip/pull/8615），@cryppadotta）
- **发布 Paperclip 页面和胶囊** - 捆绑的页面发布技能允许代理将静态 HTML 页面和资产文件夹发布到批准的主机，捆绑的胶囊技能提供 Paperclip 胶囊标识工具包。 （[#8664]（https://github.com/paperclipai/paperclip/pull/8664），[#8669]（https://github.com/paperclipai/paperclip/pull/8669），@cryppadotta）
- **有界工作区概述** - 工作区概述端点现在是有界的，大大减少了具有大型工作区的实例的负载和延迟。 （[#8627]（https://github.com/paperclipai/paperclip/pull/8627），@cryppadotta）
- **默认情况下简化的侧边栏** - 简化的侧边栏现在是默认布局。 （[#8496]（https://github.com/paperclipai/paperclip/pull/8496），@devinfoley）
- **排序的工作区例程** - 工作区例程现在按名称排序，因此例程列表保持可预测。 （[#8666]（https://github.com/paperclipai/paperclip/pull/8666），@cryppadotta）
- **插件安装目标** - CLI 显示插件安装目标主机并添加 `plugin target` 命令，因此您始终知道插件正在安装到哪个实例。 （[#8575]（https://github.com/paperclipai/paperclip/pull/8575），@cryppadotta）
- **更好的工作区选择器搜索** - 可重复使用的工作区选择器得到改进的搜索，可以更快地选择正确的工作区。 （[#8597]（https://github.com/paperclipai/paperclip/pull/8597），@cryppadotta）
- **实例范围的执行环境** - 执行环境现在是实例范围的，并通过对话框进行编辑，在公司环境屏幕上具有更清晰的副本和更整洁的驱动程序下拉列表。 ([#8375](https://github.com/paperclipai/paperclip/pull/8375)、[#8391](https://github.com/paperclipai/paperclip/pull/8391)、[#8400](https://github.com/paperclipai/paperclip/pull/8400)、[#8398](https://github.com/paperclipai/paperclip/pull/8398)、[#8329](https://github.com/paperclipai/paperclip/pull/8329)、@cryppadotta)
- **心跳飞行前预算上限** - 心跳现在尊重飞行前预算上限，为您提供单次唤醒可以花费的硬性上限。 （[#8347]（https://github.com/paperclipai/paperclip/pull/8347），@levineam）
- **技能突变由权限控制** - 技能创建/编辑/删除现在受到专用 `skills:create` 权限的控制，因此权限较低的主体可以浏览技能而无法更改它们。 （[#8616]（https://github.com/paperclipai/paperclip/pull/8616），@cryppadotta）
- **可观察的沙箱同步进度** - 适配器实用程序现在可以报告沙箱同步进度，因此长文件同步到沙箱中不再是黑匣子。 （[#8395]（https://github.com/paperclipai/paperclip/pull/8395），@cryppadotta）
- **Codex 本地继承主机登录** - `codex_local` 代理默认继承主机 Codex 登录并将种子管理身份验证引入隔离的家庭，因此它们无需重新身份验证即可工作。 （[#8425]（https://github.com/paperclipai/paperclip/pull/8425），[#8403]（https://github.com/paperclipai/paperclip/pull/8403），@cryppadotta）
- **Codex 本地不活动监视器** - `codex_local` 适配器现在监控输出不活动，并首选本地代理的环回运行时 API URL，从而提高了长时间本地运行的可靠性。 （[#5017]（https://github.com/paperclipai/paperclip/pull/5017），[#5102]（https://github.com/paperclipai/paperclip/pull/5102），@neerazz）
- **Claude 拒绝信号** - `claude_local` 适配器在 `stop_reason` 拒绝时发出 `errorCode` 或 `claude_refusal`，因此拒绝被作为一流结果处理。 （[#8314]（https://github.com/paperclipai/paperclip/pull/8314），@uky333）
- **Claude 4.5 模型别名** - `claude_local` 现在使用直接 4.5 模型别名。 （[#3800]（https://github.com/paperclipai/paperclip/pull/3800），@LeonSGP43）
- **claude_local 的代理 ID 标头** - `claude_local` 通过 `X-Anthropic-Agent-Id` 标头标记代理 ID。 （[#8322]（https://github.com/paperclipai/paperclip/pull/8322），@zenprocess）
- **更干净的代理配置和公司副本** - 代理配置环境选择器更干净，公司创建副本被刷新，适配器测试按钮仅进行测试（无意外保存）。 ([#8504](https://github.com/paperclipai/paperclip/pull/8504)、[#8653](https://github.com/paperclipai/paperclip/pull/8653)、[#8405](https://github.com/paperclipai/paperclip/pull/8405)、@cryppadotta)
- **廉价模型代理配置检查** - 代理配置检查现在使用廉价模型进行测试，因此验证配置不会消耗高级代币。 （[#8632]（https://github.com/paperclipai/paperclip/pull/8632），@cryppadotta）

## 修复

- **移动问题聊天** - 修复了移动设备上的问题聊天间距、提及警告间距以及小屏幕上的水平视口滚动。 ([#8493](https://github.com/paperclipai/paperclip/pull/8493)、[#8486](https://github.com/paperclipai/paperclip/pull/8486)、[#8370](https://github.com/paperclipai/paperclip/pull/8370)、@cryppadotta)
- **后退/前进滚动位置** - 主要内容区域现在恢复其在浏览器后退/前进导航上的滚动位置。 （[#8636]（https://github.com/paperclipai/paperclip/pull/8636），@devinfoley）
- **UI 细节回归** - 修复了一批问题细节和丰富对象回归，包括通用 URL 丰富对象标签。 （[#8613]（https://github.com/paperclipai/paperclip/pull/8613），[#8662]（https://github.com/paperclipai/paperclip/pull/8662），@cryppadotta）
- **秘密引用绑定同步** - 顶级秘密引用绑定现在保持同步，并且跨生命周期流程强制执行代理秘密绑定，因此重新分配或重新运行的代理始终可以看到正确的秘密。 （[#8630]（https://github.com/paperclipai/paperclip/pull/8630），[#8307]（https://github.com/paperclipai/paperclip/pull/8307），@cryppadotta）
- **沙盒恢复和发布** - 修复了沙盒恢复索引漂移、沙盒 git 发布、大型工作区上传以及从沙盒同步中排除临时 Codex 主目录。 ([#8595](https://github.com/paperclipai/paperclip/pull/8595)、[#8422](https://github.com/paperclipai/paperclip/pull/8422)、[#8581](https://github.com/paperclipai/paperclip/pull/8581)、@cryppadotta)
- **Daytona 磁盘和资源** - Daytona 沙箱默认为自动存档，因此它们保留磁盘配额，资源覆盖适用于图像支持的沙箱，并且 env 配置表单接受具有大小预设的有效内存输入。 ([#8561](https://github.com/paperclipai/paperclip/pull/8561)、[#8564](https://github.com/paperclipai/paperclip/pull/8564)、[#8389](https://github.com/paperclipai/paperclip/pull/8389)、@cryppadotta)
- **更智能的恢复** - 搁浅问题恢复将审查停放的延续转换为依赖等待，并免除例行父问题的丢失处置切换，因此代理不会被拉出合法等待的工作。 （[#8371]（https://github.com/paperclipai/paperclip/pull/8371），@cryppadotta；[#8157]（https://github.com/paperclipai/paperclip/pull/8157），@BuyWhere）
- **忽略取消的子阻止程序** - 注意力计算现在忽略取消的子阻止程序，因此取消的子任务不再使其父任务卡住。 （[#7577]（https://github.com/paperclipai/paperclip/pull/7577），@MrBlackTongue）
- **发出读取授权** - 单问题评论和问题线程列表现在强制执行读取授权，并且提及授予的已关闭问题评论尊重简历意图。 ([#8346](https://github.com/paperclipai/paperclip/pull/8346)、[#8331](https://github.com/paperclipai/paperclip/pull/8331)、[#8350](https://github.com/paperclipai/paperclip/pull/8350)、@nickyleach)
- **CEO 授权强化** - 同公司 CEO 授权针对跨公司访问进行强化。 （[#8276]（https://github.com/paperclipai/paperclip/pull/8276），@cryppadotta）
- **隔离远程 Claude 配置** - 远程 Claude 配置与本地凭据隔离，因此沙盒 Claude 运行无法获取您的主机登录信息。 （[#7676]（https://github.com/paperclipai/paperclip/pull/7676），@lennies）
- **实时事件套接字强化** - 实时事件升级套接字针对格式错误的升级进行了强化。 （[#8383]（https://github.com/paperclipai/paperclip/pull/8383），@cryppadotta）
- **双子座无头停顿** - 修复了无头双子座调用停顿。 （[#8368]（https://github.com/paperclipai/paperclip/pull/8368），@chekos）
- **光标流式文本** - `cursor` 适配器将流式助理文本合并为干净的散文块。 （[#8544]（https://github.com/paperclipai/paperclip/pull/8544），@seb-veto）
- **OpenClaw Gateway 根参数** - OpenClaw Gateway 不再转发根 Paperclip 参数。 （[#4416]（https://github.com/paperclipai/paperclip/pull/4416），@serenakeyitan）
- **代理创建和雇用 UI** - 修复了创建代理时的空白页面，并且现在在从详细信息页面批准或终止时清除收件箱雇用批准。 （[#8336]（https://github.com/paperclipai/paperclip/pull/8336），[#8340]（https://github.com/paperclipai/paperclip/pull/8340），@cryppadotta）
- **例行计划编辑器** - 例行计划编辑器已稳定，包括中断运行标签。 （[#8333]（https://github.com/paperclipai/paperclip/pull/8333），@cryppadotta）
- **通过 HTTP 复制按钮** - 当通过纯 HTTP 提供服务时，问题复制按钮再次工作。 （[#8212]（https://github.com/paperclipai/paperclip/pull/8212），@joegalbert-ai）
- **新工作树跟踪原始/主控** - 新工作树基于 `origin/master` 并刷新未启动的重用，因此执行工作区不会从过时的代码开始。 （[#8412]（https://github.com/paperclipai/paperclip/pull/8412），@cryppadotta）
- **持久代理暂停** - 代理暂停现在在执行开始时保持持久。 （[#8317]（https://github.com/paperclipai/paperclip/pull/8317），@Tattoofamily）
- **CLI 板身份验证** - CLI 在板身份验证期间处理无头浏览器打开失败而不是挂起。 （[#8328]（https://github.com/paperclipai/paperclip/pull/8328），@AayushThakur1999）
- **管道管道** - 位于引擎盖下的多级管道案例的内部基础（阶段、案例转换、漂移检测）；它还不是面向用户的表面。 （[#7903]（https://github.com/paperclipai/paperclip/pull/7903），@cryppadotta）

## 贡献者

感谢所有为此版本做出贡献的人！

@AayushThakur1999、@aronprins、@BuyWhere、@chekos、@dmndbrp-oss、@joegalbert-ai、@lennies、@LeonSGP43、@levineam、@MrBlackTongue、@neerazz、@seb-veto、@serenakeyitan、@Tattoofamily、@tonio-alucema、@uky333、@zenprocess

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.626.0` · 📅 发布：2026-06-27 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.626.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
