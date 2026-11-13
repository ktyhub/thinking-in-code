---
title: "netdata v2.12.2"
description: "即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。"
---

# netdata v2.12.2

### netdata 是什么

即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。

### netdata v2.12.2 版本更新了什么

Netdata v2.12.2 是一个补丁版本，用于解决自 [v2.12.1](https://github.com/netdata/netdata/releases/tag/v2.12.1) 以来发现的问题。

此版本加强了 SNMP 陷阱接收器中的 SNMPv3 身份验证，停止警报评估以无限期地保持过时的图表处于活动状态，使云可靠地将断开连接的子项视为离线并接收每个警报转换，在代理重新连接到云时恢复预期的退避，要求功能和动态配置请求携带严格的 JSON，保持外部插件在单个格式错误的输出行后运行，在删除类似命名的对象时防止 Kubernetes 状态图及其警报消失，使远程查询返回数据在旧层之间存在差距后，从新层进行更新，并修复了静态 64 位 ARM 构建，该构建可能在 Cortex-A53 主板（例如 Raspberry Pi 3）上启动时崩溃。

## 流媒体和网络数据云

- 修复了与父级断开连接的子级可以留在 Netdata Cloud 中的竞赛。节点状态更新是在子节点标记为离线之前安排的，因此在 CPU 争用的情况下，有时永远不会发送离线状态（[#24285](https://github.com/netdata/netdata/pull/24285)、[@stelfrag](https://github.com/stelfrag)）
- 现在，家长会等待断开连接的孩子的预期重新启动时间的 125%（上限为 30 秒），然后再向 Netdata Cloud 报告其脱机情况。整数运算已将余量降低至 100%。没有记录重启时间的子进程不再安排零延迟计时器，这可能会导致较旧的 libuv 版本的 CPU 使用率较高（[#24343](https://github.com/netdata/netdata/pull/24343)、[@stelfrag](https://github.com/stelfrag)）
- 修正了警报转换在通往 Netdata Cloud 的途中丢失的问题。 MQTT 层拒绝的消息（例如在离线状态或缓冲区已满时）将被视为已送达并从队列中删除；现在已重试。警报快照还可以宣布比发送的块更多的块，并且现在是根据单个一致查询构建的，并且仅在成功重建后才发送（[#24224](https://github.com/netdata/netdata/pull/24224)、[@stelfrag](https://github.com/stelfrag)）
- 修复了与 Netdata Cloud 的重新连接退避。一旦退避达到上限，钳位会在几秒内返回，但会在几毫秒内休眠，因此断开连接的代理大约每秒重试一次，而不是等待预期的最大值（当前为 20 分钟）（[#24340](https://github.com/netdata/netdata/pull/24340)、[@stelfrag](https://github.com/stelfrag)）
- 修复了当数据包 ID 计数器回绕时云连接两次分发 MQTT 数据包 ID 1 的问题。具有相同 ID 的两条正在传输的消息丢失了确认和超时跟踪（[#24341](https://github.com/netdata/netdata/pull/24341)、[@stelfrag](https://github.com/stelfrag)）
- 修复了代理对 Netdata Cloud 的 HTTP 回复中的 `t-rx` 时间戳，该时间戳自 v2.0.0 起已发送为 0，而不是收到请求的时间（[#24252](https://github.com/netdata/netdata/pull/24252)、[@stelfrag](https://github.com/stelfrag)）

## 健康

- 修复了警报评估，使过时的图表保持活动状态。每次评估都会刷新图表的上次访问时间，因此带有警报的过时图表永远不会旧到需要清理的程度。在具有 pod 流失的 Kubernetes 节点上，`k8s.cgroup` 图表的数量以及父级上的元数据随之不断增加（[#24273](https://github.com/netdata/netdata/pull/24273)、[@stelfrag](https://github.com/stelfrag)）
- 修复了多个运行状况持久性错误：在没有 ACLK 配置的主机上的每个警报转换上都会泄漏准备好的语句，64 位事件 id 被绑定为 32 位值，并且当没有详细信息行时，下一个警报事件 id 回落到 0 而不是警报 id ([#24223](https://github.com/netdata/netdata/pull/24223)、[@stelfrag](https://github.com/stelfrag))

## 数据库
- 修复了可能停止的元数据清理过程。如果在读取之前删除其快照的第一行，并且中断的上下文清理从其队列中删除上下文，而使其其余维度保持未选中状态，则维度、图表或标签清理过程永远不会完成。现在会重试失败的图表标签存储，并且在清理期间检查 WAL 大小的频率要少得多（[#24227](https://github.com/netdata/netdata/pull/24227)、[@stelfrag](https://github.com/stelfrag)）
- 修复了释放字典时的死锁，该字典的删除回调会破坏仍包含引用项的嵌套字典。当已删除主机的图表被释放而其维度之一仍被引用时，层回填可以到达它（[#24344](https://github.com/netdata/netdata/pull/24344)、[@stelfrag](https://github.com/stelfrag)）
- `dbengine`：长度不是缓冲区大小倍数的损坏的 gorilla 压缩页面现在将被拒绝，而不是在分配结束后读取（[#24310](https://github.com/netdata/netdata/pull/24310)、[@ArjunD3456](https://github.com/ArjunD3456)）
- 修复了较高等级的已完成点在整个额外等级期间对查询不可见的问题。只有当收藏恰好落在某个层边界上时，它们才会发布，而速度慢或偏移的收藏家每次都可能会错过；逾期积分现已发布在下一个收集的样本上（[#24405](https://github.com/netdata/netdata/pull/24405)、[@ktsaou](https://github.com/ktsaou)）
- `dbengine`：一秒的间隙现在像更长的间隙一样被缓存，因此对它们的重复查询不再再次搜索日志，并且缓存的间隙不再与其后面的页面的第一个点重叠（[#24370]（https://github.com/netdata/netdata/pull/24370），[@ktsaou]（https://github.com/ktsaou））

## 查询

- 修复了 `/api/v1/context` 和 `/api/v1/contexts` 的 `dimensions=` 过滤器，该过滤器忽略名称等于其 id 的每个指标（其中大多数），因此返回所有维度、实例和上下文（[#24245](https://github.com/netdata/netdata/pull/24245)、[@stelfrag](https://github.com/stelfrag)）
- 修复了权重 API 中的 `instance@node_id` 模式（指标相关性、异常率），该模式不匹配任何内容（[#24245](https://github.com/netdata/netdata/pull/24245)、[@stelfrag](https://github.com/stelfrag)）
- 修复了将裸标签名称与 `name=value` 术语组合在一起的标签过滤器，因此保留匹配的图表，同时负 `name=value` 术语仍然优先（[#24202](https://github.com/netdata/netdata/pull/24202)、[@stelfrag](https://github.com/stelfrag)）
- 修复了 `/api/v1/info` 在没有锁的情况下读取分析字符串（构建信息、发布通道、通知方法、导出连接器）的问题，因此与分析刷新重叠的请求可以读取已释放的内存（[#24342](https://github.com/netdata/netdata/pull/24342)、[@stelfrag](https://github.com/stelfrag)）
- 修复了当旧层在计划切换到新层之前耗尽数据时，查询在其余时间范围内返回空行的问题。现在，查询继续进入较新的层，并且 SES/DES 不再将过时的值扩展到层切换失败的查询的末尾（[#24406](https://github.com/netdata/netdata/pull/24406)、[@ktsaou](https://github.com/ktsaou)）

## 函数

- 功能和动态配置请求现在仅接受严格的 JSON 请求主体 (RFC 8259)。任何其他正文（例如 YAML、表单数据或纯文本）都会被 HTTP 400 拒绝。仪表板、Netdata Cloud 和代理自己的调用者已发送 JSON。保存的非严格 JSON 的动态配置无法重新应用，并在日志中显示警告。身体被传递给插件和流子时再次检查，因此更新父母及其孩子（[#24409]（https://github.com/netdata/netdata/pull/24409），[@ktsaou]（https://github.com/ktsaou））
- `go.d.plugin`：函数请求的正文现在被视为直到其结束标记的数据。正文中看起来像插件命令的一行可以替换正在运行的函数调用，取消另一个函数调用，或阻止插件读取进一步的请求。现在，格式错误或过大的请求将被整体跳过，而不会将其主体解析为命令（[#24410](https://github.com/netdata/netdata/pull/24410)、[@ilyam8](https://github.com/ilyam8)）

## 收藏家
- 外部插件：协议错误，例如插件输出的单个损坏行，永久禁用插件，直到代理重新启动。协议错误现在遵循与错误退出相同的策略：插件在 10 × `update_every` 秒后重新启动，并且仅当它从未产生有用的输出或失败超过 10 次连续运行时才禁用（[#24051](https://github.com/netdata/netdata/pull/24051)、[@ilyam8](https://github.com/ilyam8)）
- SNMP 陷阱：当 SNMPv3 消息跳过配置为需要它的用户的身份验证或声明非 USM 安全模型时，SNMPv3 消息现在会被拒绝并计为 `usm_failures`。拒绝的消息不会被确认，并且不会注册引擎 ID（[#24188](https://github.com/netdata/netdata/pull/24188)、[@ilyam8](https://github.com/ilyam8)）
- SNMP：社区字符串和 SNMPv3 密码不再包含在写入调试日志的连接详细信息中（[#24217](https://github.com/netdata/netdata/pull/24217)、[@ilyam8](https://github.com/ilyam8)）
- 磁盘统计：修复了 `/proc/diskstats` 中丢弃和刷新字段的检测。 4.18 之前的内核有六个 `disk_ext.*` 零图表，而内核 4.18 到 5.4 的 `flushes` 尺寸卡在零。现在，每个磁盘都会检测这些字段，并且当磁盘开始报告这些字段时，会添加 `flushes` 维度（[#24243](https://github.com/netdata/netdata/pull/24243)、[@stelfrag](https://github.com/stelfrag)）
- `proc.plugin`：减少了某些 `/proc` 文件不可查找的内核开销，例如 Ubuntu 24.04 HWE (6.14)。倒带此类文件不再在每次读取时再次解析其名称，从而将 `proc.plugin` 繁忙时间减少约 9% ([#24212](https://github.com/netdata/netdata/pull/24212)、[@stelfrag](https://github.com/stelfrag))
- Kubernetes 状态：删除节点、pod、部署或 cronjob 不再删除名称以相同名称开头的活动对象的图表，例如删除 `web-1` 时的 Pod `web-10` 到 `web-19`。直到重新创建对象或重新启动代理后，这些图表才会返回，并且它们的警报（例如 `k8s_state_deployment_condition_available`）会默默停止。调度 Pod 也不再重写此类图表上的节点标签（[#24402](https://github.com/netdata/netdata/pull/24402)、[@stelfrag](https://github.com/stelfrag)）
- `log2journal`：嵌套深度超过解析器最大深度的数组的 JSON 输入现在被拒绝并出现错误，而不是超出其密钥堆栈（[#24290](https://github.com/netdata/netdata/pull/24290)、[@ArjunD3456](https://github.com/ArjunD3456)）

## 安装与打包

- 64 位 ARM 的静态构建现在支持 Cortex-A53 勘误表 835769 和 843419 的链接器解决方法，包括 Rust 插件。根据代码布局，在 Cortex-A53 板上（例如 Raspberry Pi 3 和 ODROID-C2）启动时，静态构建可能会因 `SIGILL` 而终止。 CI 现在扫描 aarch64 静态档案以查找未固定的指令序列，并且 Rust 函数与 8 个字节对齐，因此链接器的勘误存根无法将它们移回受影响的序列（[#24207](https://github.com/netdata/netdata/pull/24207)、[@stelfrag](https://github.com/stelfrag)、[#24387](https://github.com/netdata/netdata/pull/24387)、 [@vkalintiris](https://github.com/vkalintiris))
- Windows 软件包现在捆绑来自 MSYS2 自己的 `msys2-runtime` 3.6.11 软件包的 `msys-2.0.dll`，通过 URL 和校验和固定，而不是从源构建修补的 3.6.10 运行时。 3.6.11 包含针对 v2.12.1 中解决的启动崩溃的上游修复，并且源版本不再使用 MSYS2 当前的工具链进行编译（[#24390](https://github.com/netdata/netdata/pull/24390)、[@stelfrag](https://github.com/stelfrag)）
- 将供应的 IBM MQ 客户端库更新至 9.4.5.1（[#24294](https://github.com/netdata/netdata/pull/24294)、[@Ferroin](https://github.com/Ferroin)）

## 致谢<a id="v2122-acknowledgments"></a>

我们要感谢我们敬业、才华横溢的贡献者，他们组成了这个令人惊叹的社区。时间和专业知识
您的志愿服务对我们的成功至关重要。

- [@ArjunD3456](https://github.com/ArjunD3456) 用于限制 `log2journal` JSON 解析器的数组嵌套深度和
  用于拒绝 `dbengine` 中损坏的大猩猩页面。

## 支持选项<a id="v2122-support-options"></a>
随着我们的成长，我们始终致力于提供开源解决方案中最好的支持。如果您遇到此版本中所做的任何更改或 Netdata Agent 中的任何功能的问题，请随时通过以下渠道之一与我们联系：

- [Netdata Learn](https://learn.netdata.cloud)：查找用于使用 Netdata 监控系统并排除系统故障的文档、指南和参考材料。
- [GitHub 问题](https://github.com/netdata/netdata/issues)：利用 Netdata 存储库报告错误或提出新功能请求。
- [GitHub 讨论](https://github.com/netdata/netdata/discussions)：加入围绕 Netdata 开发过程的对话并成为其中的一部分。
- [社区论坛](https://community.netdata.cloud/)：访问社区论坛并为协作知识库做出贡献。
- [Discord 服务器](https://discord.gg/2eduZdSeC7)：跳入 Netdata Discord，与志同道合的系统管理员、DevOps、SRE 和其他故障排除人员一起交流。已有超过 2000 名工程师在使用它！

---

> 📦 仓库：[netdata/netdata](https://github.com/netdata/netdata) · 🏷️ 版本：`v2.12.2` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/netdata/netdata/releases/tag/v2.12.2)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
