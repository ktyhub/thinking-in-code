---
title: "netdata v2.11.1"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.11.1"
published: "2026-09-16"
type: "patch"
lang: "zh"
summary: "Netdata v2.11.1 是一个补丁版本，用于解决自 v2.11.0 以来发现的问题。"
---

# netdata v2.11.1

# Release notes

Netdata v2.11.1 是一个补丁版本，用于解决自 [v2.11.0](https://github.com/netdata/netdata/releases/tag/v2.11.0) 以来发现的问题。

这是一个比平常更大的补丁版本，重点关注查询正确性、数据库引擎稳定性、云连接稳健性、运行状况/警报效率以及关闭和进程生命周期安全性，以及许多收集器和平台修复，包括更广泛的 SQL Server 覆盖范围以及 Windows CPU 和磁盘改进。

## 查询引擎

- 当存储点跨越结果行或自动存储层边界时保留精确的 SUM 值，并保留增量求和基线，以便仅保存开放样本的存储桶不再生成空查询（[#23512](https://github.com/netdata/netdata/pull/23512)、[#23505](https://github.com/netdata/netdata/pull/23505)、[@ktsaou](https://github.com/ktsaou)）
- 保持 API 时间戳独立于每个代理的保留，因此相同的显式或相对请求跨代理返回相同的行时间戳（[#23507](https://github.com/netdata/netdata/pull/23507)、[@ktsaou](https://github.com/ktsaou)）
- 将第 0 层重置和异常证据归因于实际包含源样本的结果行，并修复了两遍分组查询中的异常率贡献者计数（[#23504](https://github.com/netdata/netdata/pull/23504)、[#23508](https://github.com/netdata/netdata/pull/23508)、[@ktsaou](https://github.com/ktsaou)）
- 将 `options=absolute` 应用于计划切换期间从传入层获取的点，因此负值不再可以不变地跨越层转换（[#23503]（https://github.com/netdata/netdata/pull/23503），[@ktsaou]（https://github.com/ktsaou））
- 修复了 JSON 包装器中的逻辑运算符，以便按预期排除未查询的维度，除非请求所有维度（[#23639](https://github.com/netdata/netdata/pull/23639)、[@stelfrag](https://github.com/stelfrag)）

## 数据库引擎

- 通过在发布页面详细信息之前获取页面缓存引用并在范围自旋锁下同步合并范围查询拆卸，修复了合并范围查询中的释放后使用和致命错误（[#23475](https://github.com/netdata/netdata/pull/23475)、[#23521](https://github.com/netdata/netdata/pull/23521)、[@stelfrag](https://github.com/stelfrag)）
- 修复了日志 v2 迁移期间双重释放过时 MRG 指标的问题，以及空的刷新批次计数器泄漏，可能导致关闭或数据文件轮换无限期等待（[#23560](https://github.com/netdata/netdata/pull/23560)、[#23699](https://github.com/netdata/netdata/pull/23699)、[@stelfrag](https://github.com/stelfrag)）
- 防止负面和基于纪元的层保留报告：格式化持续时间时不会出现 32 位截断、未知或零开始时间被视为不可用、空日志被忽略以及推断保留上限（[#23648](https://github.com/netdata/netdata/pull/23648)、[@stelfrag](https://github.com/stelfrag)）
- 接受超过一天的有效页面节奏，而不是将其视为无效并发出错误的修复遥测（[#23514](https://github.com/netdata/netdata/pull/23514)、[@ktsaou](https://github.com/ktsaou)）
- 避免了 MRG 指标查找期间 UUID 映射创建/释放搅动和分区写锁争用，并在 PGC 致命消息中包含完整缓存和页面标识，以使缓存问题可诊断（[#23538](https://github.com/netdata/netdata/pull/23538)、[#23522](https://github.com/netdata/netdata/pull/23522)、[@stelfrag](https://github.com/stelfrag)）
- 将捆绑的 SQLite 更新为 3.53.4 ([#23511](https://github.com/netdata/netdata/pull/23511)、[@stelfrag](https://github.com/stelfrag))
- 修复了 `-W createdataset` 和 dbengine 压力测试工作负载，该工作负载在 NULL 标签分配器上崩溃，用挂钟而不是请求的时间范围标记每个生成的样本，并在主机拆卸时双重释放状态（[#23758](https://github.com/netdata/netdata/pull/23758)、[@stelfrag](https://github.com/stelfrag)）

## 云连接 (ACLK)

- 为 ACLK HTTPS 请求添加了 TLS 主机名和 IP 验证，同时保留不安全模式行为（[#23463](https://github.com/netdata/netdata/pull/23463)、[@stelfrag](https://github.com/stelfrag)）
- 停止将放弃的自签名证书报告为不安全模式下的证书验证失败，因此稍后会报告 I/O 或 HTTP 错误（[#23732](https://github.com/netdata/netdata/pull/23732)、[@stelfrag](https://github.com/stelfrag)）
- 使用 I/O 进度看门狗将 HTTPS 和 MQTT clients 切换为单调、基于微秒的超时，并将预 CONNACK 轮询限制为一秒，以便安静对等方不再将关闭延迟最多 60 秒 ([#23105](https://github.com/netdata/netdata/pull/23105)、[#23733](https://github.com/netdata/netdata/pull/23733)、 [@stelfrag](https://github.com/stelfrag))
- 停止将丢失的 MQTT PUBACK 计数为成功确认，而是使用专用超时计数器来跟踪它们，该计数器现在在断开连接时保留，而无需触及释放的 client ([#23486](https://github.com/netdata/netdata/pull/23486)、[#23734](https://github.com/netdata/netdata/pull/23734)、[@stelfrag](https://github.com/stelfrag))
- 保留池响应缓冲区及其元数据以用于压缩 ACLK 响应，并修复跨越环形缓冲区边界的有效负载的 WebSocket 屏蔽（[#23485](https://github.com/netdata/netdata/pull/23485)、[@stelfrag](https://github.com/stelfrag)）

## 健康状况和警报

- 修复了附加到 `service.*_cpu_utilization` 图表并触发错误严重警报的 Windows `10min_cpu_usage` 警报（[#23559](https://github.com/netdata/netdata/pull/23559)、[@thiagoftsm](https://github.com/thiagoftsm)）
- 按主机名称索引警报，在运行状况变量解析期间替换完整主机警报扫描（[#23554](https://github.com/netdata/netdata/pull/23554)、[@stelfrag](https://github.com/stelfrag)）
- 避免在图表元数据未更改时重新初始化警报原型，因此连续的子图表重新注册不再触发重复的运行状况重新评估（[#23515](https://github.com/netdata/netdata/pull/23515)、[@stelfrag](https://github.com/stelfrag)）
- 仅在实际发送通知时构建引发警报摘要，避免每次迭代工作以及图表删除时潜在的锁定顺序死锁（[#23544](https://github.com/netdata/netdata/pull/23544)、[@stelfrag](https://github.com/stelfrag)）
- 修复了健康数据库代码中 SQL 语句准备的错误检查，并删除了两个未使用的 `health_log_detail` 索引以减少父数据库存储和 B 树维护（[#23545](https://github.com/netdata/netdata/pull/23545)、[#23722](https://github.com/netdata/netdata/pull/23722)、[@stelfrag](https://github.com/stelfrag)）

## 元数据、标签和内部结构

- 字典 API 运行时延迟字典销毁，使设置/获取/删除和遍历安全，防止关闭期间并发销毁（[#23634](https://github.com/netdata/netdata/pull/23634)、[@stelfrag](https://github.com/stelfrag)）
- 修复了当删除回调重新进入收集器并在中途释放缓存的后继者时字典垃圾收集中的释放后使用，并停止视图收集，留下主删除的项目（[#23819]（https://github.com/netdata/netdata/pull/23819），[@stelfrag]（https://github.com/stelfrag））
- 阻止过时的图表收割机释放另一个子系统仍然引用的图表，这会导致未索引的图表保持其销毁锁定，并可能导致仍在向其写入的收集器致命（[#23761](https://github.com/netdata/netdata/pull/23761)、[@stelfrag](https://github.com/stelfrag)）
- 推迟机器学习工作队列的拆卸，直到所有收集器停止之后，因此超过关闭截止日期的收集器不能再在被破坏的队列互斥体上中止（[#23757]（https://github.com/netdata/netdata/pull/23757），[@stelfrag]（https://github.com/stelfrag））
- 在生成的子进程中重置并解锁 SIGPIPE，因此管道关闭的子进程会退出而不是在 `EPIPE` 上生存（`EPIPE` 已在 macOS 上搁浅了数百个 `powermetrics` 进程），报告信号传递失败而不是默默地丢弃它，并使生成服务器回归测试具有确定性（[#23751](https://github.com/netdata/netdata/pull/23751)、[#23815](https://github.com/netdata/netdata/pull/23815)， [@stelfrag](https://github.com/stelfrag))
- 在启用页面重复数据删除之前探测 KSM 支持而不是假设它，因此不受支持的内核不再报告 KSM 错误，并将 KSM 标记限制为可以实际合并的 dbengine 页面池（[#23822](https://github.com/netdata/netdata/pull/23822)、[@stelfrag](https://github.com/stelfrag)）
- 跳过重复图表注册时清理和重新实习未更改的图表元数据，并仅在实际标签突变时增加标签版本（[#23603](https://github.com/netdata/netdata/pull/23603)、[#23513](https://github.com/netdata/netdata/pull/23513)、[@stelfrag](https://github.com/stelfrag)）
- 修复了并发配置更新期间的文本缓冲区清理问题和 dyncfg 树大小调整竞争（[#23657](https://github.com/netdata/netdata/pull/23657)、[@stelfrag](https://github.com/stelfrag)）
- 在 inicfg 数字格式中将 `sprintf()` 替换为有界 `snprintfz()`，并将动态 `/proc/net/dev` 路径格式字符串替换为文字字符串（[#23638](https://github.com/netdata/netdata/pull/23638)、[#23450](https://github.com/netdata/netdata/pull/23450)、[@stelfrag](https://github.com/stelfrag)）
- 通过在可配置的脉冲对齐间隔上运行 `mallinfo2()` 收集来减少脉冲开销，完成后对其进行标记，以便缓慢的调用无法独占占空比，并停止冗余脉冲图元数据版本颠簸（[#23579]（https://github.com/netdata/netdata/pull/23579），[#23736]（https://github.com/netdata/netdata/pull/23736），[#23650]（https://github.com/netdata/netdata/pull/23650）， [@stelfrag](https://github.com/stelfrag))
- 从脉冲子图表中删除了每个图表标签探针，改为依赖主机标签版本比较；对于有 808 个孩子的父母，探针占主脉冲线程的约 23%，并在其发出的 `netdata.*` 图表中留下间隙（[#23760](https://github.com/netdata/netdata/pull/23760)、[@stelfrag](https://github.com/stelfrag)）
- 沉默了 Coverity 发现并纠正了过时的评论和单元测试诊断，包括记录孩子断开连接时的运行状况初始化标志行为（[#23553](https://github.com/netdata/netdata/pull/23553)、[#23737](https://github.com/netdata/netdata/pull/23737)、[#23541](https://github.com/netdata/netdata/pull/23541)、[@stelfrag](https://github.com/stelfrag))

## 收藏家和出口

- 修复了当第一个计数器粘附到中断 ID 时的 `/proc/interrupts` 解析，这可能会将更改的计数器值推送到维度 ID 中并导致无界维度增长（[#23651](https://github.com/netdata/netdata/pull/23651)、[@stelfrag](https://github.com/stelfrag)）
- 将套接字收集限制为每个网络命名空间的一次经过验证的尝试，因此帮助程序失败不再触发每个套接字记录的重复收集尝试（[#23778]（https://github.com/netdata/netdata/pull/23778），[@ktsaou]（https://github.com/ktsaou））
- 停止 go.d UPS 收集器在连接错误中嵌入完整命令，该命令以明文形式记录 `PASSWORD` 凭证；仅 `USERNAME` 和 `PASSWORD` 参数被编辑，因此其他命令保持可诊断（[#23782](https://github.com/netdata/netdata/pull/23782)、[@stelfrag](https://github.com/stelfrag)）
- 饱和 SQL `COUNT` 会在 ibm.d AS/400 收集器中产生结果，然后将其范围缩小到 `int`，因此超出范围的计数不再能够包含负值并默默地更改基数限制（[#23783](https://github.com/netdata/netdata/pull/23783)、[@stelfrag](https://github.com/stelfrag)）
- 更正了 go.d SNMP 收集器中的 MikroTik 仪表转换，并从 go.d 图表引擎中删除了未对齐的原子（[#23525](https://github.com/netdata/netdata/pull/23525)、[#23540](https://github.com/netdata/netdata/pull/23540)、[@ilyam8](https://github.com/ilyam8)）
- 保留 OpenTSDB telnet 主机名和指标前缀中的有效标点符号，同时仍然替换会损坏 telnet 记录的空格、控制字符和分隔符（[#23749](https://github.com/netdata/netdata/pull/23749)、[@stelfrag](https://github.com/stelfrag)）
- 修复了指向 `charts.d.plugin.conf` 而不是实际 `charts.d.conf` 的 `charts.d.plugin` 禁用图表消息（[#23662](https://github.com/netdata/netdata/pull/23662)、[@ilyam8](https://github.com/ilyam8)）
- SQL Server：当查询存储不可用或禁用时，为 `top-queries` 添加计划缓存回退 (`sys.dm_exec_query_stats`)，并在未配置专用扩展事件会话时回退到 `error-info` 的内置 `system_health` 会话（[#23748](https://github.com/netdata/netdata/pull/23748)、[@thiagoftsm](https://github.com/thiagoftsm)）
- SQL Server：强化跨版本的函数查询，每个实例探测引擎版本和版本一次，并相应地路由服务器范围与数据库范围的查询，因此 `top-queries`、`deadlock-info` 和 `error-info` 可在 Azure SQL 数据库和托管实例以及本地 SQL Server 上工作（[#23564](https://github.com/netdata/netdata/pull/23564)、[@ilyam8](https://github.com/ilyam8)）
- SQL Server：修复了 SQL Server 2014 及更早版本上的死锁和错误信息查询，通过目录列而不是产品版本检测查询存储，并从会话目录中读取 event_file 路径而不是假设它与会话名称匹配（[#23460](https://github.com/netdata/netdata/pull/23460)、[@thiagoftsm](https://github.com/thiagoftsm)）
- SQL Server：默认从集合中排除禁用的 SQL 代理作业（设置 `collect_disabled_jobs: true` 以保留它们），并在启用的作业上设置作业警报，因此禁用作业的上次失败运行不再保留引发的警报（[#23645](https://github.com/netdata/netdata/pull/23645)、[@ilyam8](https://github.com/ilyam8)）
- Windows：从 `Processor Information` 性能对象收集 CPU 指标，通过处理器拓扑将其 `NumaNode,NumaIndex` 实例映射到逻辑 CPU，因此可以正确报告具有超过 64 个逻辑处理器的主机；当 `Processor Information` 不可用时，仍使用旧版 `Processor` 对象（[#23549](https://github.com/netdata/netdata/pull/23549)、[@thiagoftsm](https://github.com/thiagoftsm)）
- Windows：在 `[plugin:windows:PerflibStorage]` 下添加了 `exclude space metrics on paths`，以将不需要的逻辑卷（例如临时备份挂载）排除在磁盘空间集合之外，添加了卷 `serial_number` 标签，并将拼写错误的 `driver_type` 标签更正为 `drive_type`（[#23660](https://github.com/netdata/netdata/pull/23660)、[@thiagoftsm](https://github.com/thiagoftsm)）

## 安装与打包

- Windows：修复仅提供令牌时的声明，并将声明令牌和代理标记为隐藏的 MSI 属性，以便它们不再出现在详细安装程序日志中（[#23547](https://github.com/netdata/netdata/pull/23547)、[@thiagoftsm](https://github.com/thiagoftsm)；[#23735](https://github.com/netdata/netdata/pull/23735)、[@stelfrag](https://github.com/stelfrag))
- 将 eBPF 插件限制为 64 位用户空间，并从用户空间机器类型而不是内核架构解析 Go 工具链（[#23446](https://github.com/netdata/netdata/pull/23446)、[@stelfrag](https://github.com/stelfrag)）
- macOS：动态解析 IOKit API，而不是直接链接它们，恢复针对旧版 macOS SDK 的构建（[#23421](https://github.com/netdata/netdata/pull/23421)、[@stelfrag](https://github.com/stelfrag)）

## 支持选项<a id="v2111-support-options"></a>

随着我们的成长，我们始终致力于提供开源解决方案中最好的支持。如果您遇到此版本中所做的任何更改或 Netdata Agent 中的任何功能的问题，请随时通过以下渠道之一与我们联系：

- [Netdata Learn](https://learn.netdata.cloud)：查找用于使用 Netdata 监控系统并排除系统故障的文档、指南和参考材料。
- [GitHub 问题](https://github.com/netdata/netdata/issues)：利用 Netdata 存储库来报告错误或提出新的功能请求。
- [GitHub 讨论](https://github.com/netdata/netdata/discussions)：加入围绕 Netdata 开发过程的对话并成为其中的一部分。
- [社区论坛](https://community.netdata.cloud/)：访问社区论坛并为协作知识库做出贡献。
- [Discord 服务器](https://discord.gg/2eduZdSeC7)：跳入 Netdata Discord，与志同道合的系统管理员、DevOps、SRE 和其他故障排除人员一起交流。已有超过 2000 名工程师在使用它！

---

> 📦 仓库：[netdata/netdata](https://github.com/netdata/netdata) · 🏷️ 版本：`v2.11.1` · 📅 发布：2026-09-16 · [查看英文原版 Release](https://github.com/netdata/netdata/releases/tag/v2.11.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
