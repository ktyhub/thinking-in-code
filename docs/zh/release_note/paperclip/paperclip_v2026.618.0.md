---
title: "paperclip v2026.618.0"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.618.0"
version: "v2026.618.0"
published: "2026-06-18"
type: "minor"
lang: "zh"
---

# paperclip v2026.618.0

# 纸clip v2026.618.0

> 发布时间：2026-06-18

## 亮点

- **技能商店** - 从专用的应用程序内商店浏览、安装和管理代理技能，因此您可以为代理提供新功能，而无需手动连接文件。技能现在是一流的可安装单元，具有安装计数和公司范围的目录。 （[#7990]（https://github.com/paperclipai/paperclip/pull/7990），@cryppadotta）
- **自托管沙箱执行** - 云/沙盒代理执行成熟：自托管 Kubernetes 沙箱提供程序插件与服务器端 Kubernetes 执行集成和强化代理运行时映像以及新的 Novita 沙箱提供程序一起登陆。在您自己的基础设施或云提供商的隔离沙箱中运行代理。 ([#5790](https://github.com/paperclipai/paperclip/pull/5790)、[#7938](https://github.com/paperclipai/paperclip/pull/7938)、[#7934](https://github.com/paperclipai/paperclip/pull/7934)、@stubbi；[#7595](https://github.com/paperclipai/paperclip/pull/7595)、@Alex-yang00)
- **每公司多租户隔离** - 共享和云部署的主要安全基础：每个公司现在都有自己的 JWT 签名密钥，云租户严格限于公司范围（从不实例管理），并且插件表携带 `company_id` 外键，因此每个租户的插件数据都是隔离的。 ([#5864](https://github.com/paperclipai/paperclip/pull/5864)、[#7525](https://github.com/paperclipai/paperclip/pull/7525)、[#5865](https://github.com/paperclipai/paperclip/pull/5865)、@stubbi)
- **工作区文件查看器和工件链接** - 检查代理直接从问题生成的文件 - 内置工作区文件查看器加上工件链接意味着您可以在不离开线程的情况下打开工作产品。 （[#7681]（https://github.com/paperclipai/paperclip/pull/7681），@cryppadotta）
- **本地适配器的环境驱动网关路由** - `codex`、`pi`、`opencode` 和 `gemini` 本地适配器现在可以通过环境配置（自定义提供程序、小型/廉价模型选择、远程允许全部）通过自定义提供程序和网关进行路由 - 这是运行您自己的模型网关的关键先决条件。 ([#7919](https://github.com/paperclipai/paperclip/pull/7919)、[#7920](https://github.com/paperclipai/paperclip/pull/7920)、[#7837](https://github.com/paperclipai/paperclip/pull/7837)、[#7918](https://github.com/paperclipai/paperclip/pull/7918)、@stubbi)

## 改进

- **更勤奋的代理** - 大量的心跳、恢复和执行锁修复使您的实例更具弹性：执行锁在跨代理重新分配时释放，过时的 `executionRunId`/`checkoutRunId` 在释放、重新分配、签出和运行完成（使用后备清扫器）时被清除，孤儿执行锁在运行完成时被清除，并且过时的签出运行所有权被安全采用。 ([#5110](https://github.com/paperclipai/paperclip/pull/5110)，@vbalko-claimate；[#2482](https://github.com/paperclipai/paperclip/pull/2482)，@alcylu；[#6008](https://github.com/paperclipai/paperclip/pull/6008)，@nicorodrigues；[#4318](https://github.com/paperclipai/paperclip/pull/4318)，@AyeletMorris-ShieldFC； [#5413]（https://github.com/paperclipai/paperclip/pull/5413），@ivasuy）
- **更智能的恢复** - 搁浅问题恢复现在会跳过待处理唤醒交互的问题，并在受让人显示最近的可见进度时避免升级，因此代理不会被从他们正在积极执行的工作中拉出来。 （[#4854]（https://github.com/paperclipai/paperclip/pull/4854），@ming0627；[#5213]（https://github.com/paperclipai/paperclip/pull/5213），@sunghere）
- **例程详细信息页面** - 例程详细信息页面经过重新设计的子侧边栏布局以及后续完善，使阅读和调整重复例程变得更加容易。 （[#7848]（https://github.com/paperclipai/paperclip/pull/7848），[#7858]（https://github.com/paperclipai/paperclip/pull/7858），@cryppadotta）
- **遵循您的系统主题** - 首次访问者现在默认使用其操作系统 `prefers-color-scheme`，并且在未经身份验证的身份验证页面上有一个主题切换。 （[#5873]（https://github.com/paperclipai/paperclip/pull/5873），[#5874]（https://github.com/paperclipai/paperclip/pull/5874），@stubbi）
- **OpenTelemetry 自动检测** - 服务器支持选择加入 OpenTelemetry 自动检测，因此您可以将 Paperclip 连接到现有的可观察性堆栈中。 （[#3735]（https://github.com/paperclipai/paperclip/pull/3735），@stubbi）
- **代理感知 trust 配置** - `TRUST_PROXY` 现在接受 CIDR 列表和命名子网，使负载均衡器和反向代理后面的正确 client-IP 处理更容易配置。 （[#5872]（https://github.com/paperclipai/paperclip/pull/5872），@stubbi）
- **GPT-5.5 适用于 Codex local** - GPT-5.5 现已在 `codex_local` 适配器的型号选项中提供。 （[#5575]（https://github.com/paperclipai/paperclip/pull/5575），@Buywatermelon）
- **自动构建捆绑插件** - 捆绑插件现在在安装时自动构建，因此它们开箱即用，无需手动构建步骤。 （[#8254]（https://github.com/paperclipai/paperclip/pull/8254），@devinfoley）
- **只读代理配置，无需提升授权** - 只读代理配置和技能端点不再需要 `agents:create` 权限，因此权限较低的主体可以检查配置。 （[#3725]（https://github.com/paperclipai/paperclip/pull/3725），@stubbi）
- **自动完成批准的审核评论** - 批准的审核评论现在会自动完成，从而从审核循环中删除手动步骤。 （[#5839]（https://github.com/paperclipai/paperclip/pull/5839），@tommypoltev）
- **秘密不会出现在日志中** - HTTP 错误日志行现在会编辑密码和令牌，以便凭据不会泄漏到您的日志中。 （[#8013]（https://github.com/paperclipai/paperclip/pull/8013），@devinfoley）
- **帐户菜单反馈快捷方式** - 帐户弹出菜单中现在有一个反馈项，用于快速、上下文反馈。 （[#7854]（https://github.com/paperclipai/paperclip/pull/7854），@scotttong）
- **Hermes 自定义提供程序** - Hermes 适配器现在将自定义提供程序作为参数传递，因此您的提供程序配置受到尊重。 （[#8231]（https://github.com/paperclipai/paperclip/pull/8231），@cryppadotta）

## 修复

- **代理配置保存 toast** - 保存代理配置现在会显示成功 toast，以便您清楚地确认更改已完成。 （[#1931]（https://github.com/paperclipai/paperclip/pull/1931），@bluzername）
- **额外参数字段不再破坏逗号** - 在您键入时，额外参数字段会停止破坏逗号分隔值。 （[#2125]（https://github.com/paperclipai/paperclip/pull/2125），@tvskart）
- **桌面 shell 保持不变** - 当 `scrollIntoView` 走过正文时，桌面 shell 不再滚动窗口，并保持固定在评论提交上。 （[#8071]（https://github.com/paperclipai/paperclip/pull/8071），@devinfoley；[#8041]（https://github.com/paperclipai/paperclip/pull/8041），@dosthcpp）
- **常规变量检测** - 现在，即使下划线被降价转义，也会检测到常规变量。 （[#8056]（https://github.com/paperclipai/paperclip/pull/8056），@devinfoley）
- **铁路兼容性** - 为了实现铁路兼容性，从图像中删除了 `VOLUME` 关键字。 （[#2619]（https://github.com/paperclipai/paperclip/pull/2619），@br-creative）
- **当用户已经正确时跳过 gosu** - 当进程已经作为目标用户运行时启动会跳过 `gosu`。 （[#2908]（https://github.com/paperclipai/paperclip/pull/2908），@stubbi）
- **OpenClaw Gateway** - OpenClaw Gateway 集成现已完成且稳定。 （[#2322]（https://github.com/paperclipai/paperclip/pull/2322），@DissidentAI）
- **看门狗噪音** - 当源问题被阻止或评估板关闭时，看门狗现在会抑制重复警报。 （[#5942]（https://github.com/paperclipai/paperclip/pull/5942），@dbesar）
- **跨适配器/模型交换的会话连续性** - 心跳不再跨适配器交换或当代理的模型更改时重用过时的运行时 `sessionId`，并且在 `--resume` 之前将会话 ID 验证为 UUID。 （[#4109]（https://github.com/paperclipai/paperclip/pull/4109），@kengraversen；[#4195]（https://github.com/paperclipai/paperclip/pull/4195），@nirarazi；[#1742]（https://github.com/paperclipai/paperclip/pull/1742），@nydamon）
- **适配器会话自我修复** - 本地适配器恢复得更加优雅：`gemini_local` 将令牌溢出视为新会话信号，`claude_local` 从中毒的 `previous_message_id` 400 中恢复，并在恢复期间对 Claude“无法处理图像”400 运行自动重试。 （[#4932]（https://github.com/paperclipai/paperclip/pull/4932），@sherifkozman；[#5972]（https://github.com/paperclipai/paperclip/pull/5972），@redmutex；[#3276]（https://github.com/paperclipai/paperclip/pull/3276），@nullEFFORT）
- **Codex 本地身份验证处理** - `codex_local` 在准备时用符号链接替换陈旧的 `auth.json` 副本，省略默认模型，以便 CLI 选择每个身份验证模式，并且为 EEXIST 符号链接竞赛添加了测试覆盖范围。 （[#5240]（https://github.com/paperclipai/paperclip/pull/5240），@HKTITAN；[#7971]（https://github.com/paperclipai/paperclip/pull/7971），@devinfoley；[#5269]（https://github.com/paperclipai/paperclip/pull/5269），@abhishhekgahlot2）
- **不再有僵尸运行** - 阻止僵尸运行合并，并且启动收获在心跳计时器计时之前完成。 （[#1731]（https://github.com/paperclipai/paperclip/pull/1731），@carmandale）
- **自我评论重新打开防护** - 跳过相同运行的自我评论，并防止受让人的自我评论重新打开终端问题。 （[#4973]（https://github.com/paperclipai/paperclip/pull/4973），@roy493；[#4346]（https://github.com/paperclipai/paperclip/pull/4346），@NiViGaHo）
- **推迟新鲜会话唤醒** - 相同问题的强制新鲜会话唤醒被推迟到后续运行中，而不是中断当前运行。 ([#4080](https://github.com/paperclipai/paperclip/pull/4080), @xidui)
- **状态过滤器接受数组** - 问题列表端点现在接受数组形式的 `?status=` 过滤器，并且不再因重复键而崩溃。 （[#4890]（https://github.com/paperclipai/paperclip/pull/4890），@Lempkey）
- **董事会成员可见性操作** - 董事会成员现在可以执行代理已经拥有的空映射可见性操作。 （[#7935]（https://github.com/paperclipai/paperclip/pull/7935），@HKTITAN）
- **Cron 分钟步进器性能** - `Intl.DateTimeFormat` 现在按时区缓存在 cron 分钟步进器中，减少了每次滴答的开销。 （[#8034]（https://github.com/paperclipai/paperclip/pull/8034），@aronprins）
- **托管沙盒重复数据删除** - 部分唯一索引现在可对托管沙盒行进行重复数据删除，并且 Kubernetes 提供程序按确切名称解析沙盒 Pod；沙箱工作区按条目进行焦油化，以避免无主目标目录上的 EPERM。 （[#8247]（https://github.com/paperclipai/paperclip/pull/8247），@devinfoley；[#7982]（https://github.com/paperclipai/paperclip/pull/7982），[#7836]（https://github.com/paperclipai/paperclip/pull/7836），@stubbi）
- **孤立扫描回归** - 修复了孤立扫描空受让人过滤器回归，以便扫描器针对正确的问题。 （[#8018]（https://github.com/paperclipai/paperclip/pull/8018），@devinfoley）

## 贡献者

感谢所有为此版本做出贡献的人！

@abhishhekgahlot2、@alcylu、@Alex-yang00、@aronprins、@AyeletMorris-ShieldFC、@bluzername、@br-creative、@Buywatermelon、@carmandale、@dbezar、@DissidentAI、@dosthcpp、@HKTITAN、@ivasuy、@kengraversen、@Lempkey、@ming0627、 @nicorodrigues、@nirarazi、@nullEFFORT、@nydamon、@redmutex、@roy493、@sherifkozman、@stubbi、@sunghere、@tommypoltev、@tvskart、@vbalko-claimate、@xidui

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.618.0` · 📅 发布：2026-06-18 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.618.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
