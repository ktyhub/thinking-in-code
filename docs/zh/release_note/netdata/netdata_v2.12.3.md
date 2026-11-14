---
title: "netdata v2.12.3"
description: "即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。"
summary: "即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。"
---

# netdata v2.12.3

### netdata 是什么

即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。

### netdata v2.12.3 版本更新了什么

# 发行说明

Netdata v2.12.3 是一个补丁版本，用于解决自 [v2.12.2](https://github.com/netdata/netdata/releases/tag/v2.12.2) 以来发现的问题。

此版本使代理即使在流量持续流动时也能检测到失效的 Netdata Cloud 连接，修复了在子节点或插件仍在使用时删除陈旧节点时的释放后使用崩溃问题，阻止配置了 `parent using h2o` 的子节点在每个连接上崩溃，使访问列表中的否定 IP 优先于主机名匹配，拒绝 URL 中格式错误的百分比转义，限制 MCP 批处理请求，删除全局 SQLite 停顿，修复清理过时图表时的崩溃当它们仍在被读取时，防止代理在无法创建 `dbengine` 层时在启动时挂起，防止使用 `ram` 或 `alloc` 存储模式的父级在间隔后移动其子级历史记录并防止在多节点度量相关性上崩溃，让 SNMP 和其他虚拟节点在其收集器停止报告时再次离线，使 PowerStore 图表显示阵列报告的值而不是零，使 eBPF 插件忽略环境中的目录覆盖以提升的权限运行，并从代理实际加载的配置文件中重新加载主机标签。

## 流媒体和网络数据云

- 修复了云连接的 MQTT keepalive。它仅在连接空闲时进行检查，因此具有稳定入站流量的链路永远不会注意到未应答的 ping，并且可能无限期地停滞。 ping 和确认截止时间也遵循挂钟，因此时钟步骤会导致错误的 ping 超时或延迟检测，并且在没有 RTC 确认的板上，在第一次 NTP 同步之前永远不会超时。截止日期现在使用单调时钟，并且在未应答 ping 后 60 秒检测到死连接（[#24427](https://github.com/netdata/netdata/pull/24427)、[@stelfrag](https://github.com/stelfrag)）
- Netdata Cloud 代理的 HTTPS 客户端现在严格检查分块响应的块大小，并将此类响应的上限限制为 1 MiB。格式错误或非常大的块大小可能会导致代理在为其分配内存时退出（[#24483](https://github.com/netdata/netdata/pull/24483)、[@stelfrag](https://github.com/stelfrag)）
- 修复了当 `netdatacli remove-stale-node` 或孤立和临时主机清理删除仍在使用的主机时（通过子设备重新连接到该主机或通过将其选为虚拟节点的插件）时发生的释放后使用崩溃问题。现在，在删除过程中重新连接的子节点会被要求重试，并且插件选择的虚拟节点会被报告为在线并保持不变（[#24353](https://github.com/netdata/netdata/pull/24353)、[@stelfrag](https://github.com/stelfrag)）
- 删除了 `[stream] parent using h2o` 选项。 h2o Web 服务器在 v2.7.0 中被删除，并且自 v2.8.0 起，启用此选项的子级在每次尝试与其父级连接时都会崩溃。仍然设置它的 `stream.conf` 被接受并忽略该选项（[#24426]（https://github.com/netdata/netdata/pull/24426），[@stelfrag]（https://github.com/stelfrag））

## Web 服务器和 API

- 访问列表：IP 与否定条目（例如 `allow connections from = !203.0.113.7 *` 中的 `!203.0.113.7`）相匹配的客户端现在将被拒绝，而无需对照列表检查其主机名。当启用 DNS 检查时，这适用于 `netdata.conf` 中的每个访问列表，包括带有通配符的列表的默认 `heuristic` 模式（[#24404](https://github.com/netdata/netdata/pull/24404)、[@ArjunD3456](https://github.com/ArjunD3456)）
- 现在，带有格式错误的百分比转义的 URL 将被 HTTP 400 拒绝。`%` 后面必须跟有两个十六进制数字，但未进行检查，并且使用到目前为止已解码的部分来提供无法解码的 URL，因此 `/api/v1/info%zz` 被回答为 `/api/v1/info`。包含文字 `%` 且后面没有两个十六进制数字的请求（例如 `?x=100%`）现在得到 400（[#24248](https://github.com/netdata/netdata/pull/24248)、[@stelfrag](https://github.com/stelfrag)）
- MCP API 密钥和管理 API 密钥现在以恒定时间进行比较，因此响应时间不再显示猜测的密钥有多接近（[#24418](https://github.com/netdata/netdata/pull/24418)、[@ArjunD3456](https://github.com/ArjunD3456)）
- MCP：JSON-RPC 批次限制为 64 个请求和 16 MiB 响应，WebSocket 消息限制为 1 MiB，与 HTTP 请求相同。 id 不是字符串、数字或 null 的请求将被拒绝（[#24425](https://github.com/netdata/netdata/pull/24425)、[@stelfrag](https://github.com/stelfrag)）
- `X-Forwarded-For`：代理现在仅保留标头的第一个地址，并且仅当它是有效的 IPv4 或 IPv6 地址时。这是访问日志和动态配置更改的审核条目中显示的转发的客户端地址。其他值（例如 `unknown`）将被删除（[#24452](https://github.com/netdata/netdata/pull/24452)、[@ArjunD3456](https://github.com/ArjunD3456)）
- 注册表：`netdata_registry_id` 标识现在只能从 `Cookie` 标头中读取，而不是从请求中的其他任何位置（例如查询字符串）读取。这仅影响启用了注册表的代理，该注册表默认处于关闭状态（[#24494](https://github.com/netdata/netdata/pull/24494)、[@ArjunD3456](https://github.com/ArjunD3456)）
- 声明：使用错误密钥向 `/api/v2/claim` 或 `/api/v3/claim` 发出的请求不再重新生成声明质询，因此它无法中断管理员正在进行的声明。在启动时以及使用有效密钥进行声明后，仍会重新生成质询（[#24531](https://github.com/netdata/netdata/pull/24531)、[@stelfrag](https://github.com/stelfrag)）

## 数据库

- 修复了代理中的 SQLite 停顿问题。 SQLite 调用周围持有全局锁，因此一个缓慢的语句会阻塞使用 SQLite 的每个线程，而不仅仅是那些使用相同数据库连接的线程（[#24099](https://github.com/netdata/netdata/pull/24099)、[@stelfrag](https://github.com/stelfrag)）
- 代理运行时出现的元数据数据库损坏现在被标记为在第一个失败查询时恢复，而不是仅在完全关闭时或在崩溃后从不恢复。 SQLite 查询统计信息不再将后来成功的繁忙重试计为失败查询（[#24225](https://github.com/netdata/netdata/pull/24225)、[@stelfrag](https://github.com/stelfrag)）

- 使用 `ram` 或 `alloc` 存储模式的家长不再在间隔后转移孩子的流式传输和复制历史记录。每个间隙都会将所有旧值提前一个时间间隔，并将保留率夸大一个时间间隔（[#24434](https://github.com/netdata/netdata/pull/24434)、[@stelfrag](https://github.com/stelfrag)）
- `dbengine` 现在仅加载与其写入的确切名称的数据文件。诸如 `datafile-1-0000000001.ndf.bak` 之类的副本与真实文件一起第二次加载，并且杂散的 `datafile-2-*.ndf` 在启动时停止了代理。其他名称现在被报告为未知文件并被跳过（[#24436](https://github.com/netdata/netdata/pull/24436)、[@stelfrag](https://github.com/stelfrag)）
- 修复了当清理过时图表释放图表或其标签时发生的崩溃，而运行状况变量查找、Prometheus 导出、警报和上下文 API 请求或查询仍在读取图表。其中包括代理退出巨大的分配（[#24466](https://github.com/netdata/netdata/pull/24466)、[#24474](https://github.com/netdata/netdata/pull/24474)、[@stelfrag](https://github.com/stelfrag)）
- `dbengine`：当无法创建层的目录或其初始化线程无法启动时，代理不再在启动时挂起。缺少第 0 层以上的层现在会使代理与其下面的层一起运行，并且缺少第 0 层会停止启动并出现错误（[#24435](https://github.com/netdata/netdata/pull/24435)、[@stelfrag](https://github.com/stelfrag)）

## 查询

- 修复了没有 `dbengine` 层的代理（例如使用 `ram` 或 `alloc` 存储模式的父级）上的两个或多个节点上的度量相关性和其他权重查询崩溃的问题。此类代理现在一次处理一个节点（[#24433](https://github.com/netdata/netdata/pull/24433)、[@stelfrag](https://github.com/stelfrag)）
- 查询响应的 `summary.nodes[]` 部分现在包括最后一个节点的查询时间，该时间已丢失。使用`options=percentage`，维度视图的异常率不再过高。 `/api/v1/data` 的 `chart_labels` 数组现在每个维度有一个条目，而 `null` 的图表缺少标签（[#24460](https://github.com/netdata/netdata/pull/24460)、[#24474](https://github.com/netdata/netdata/pull/24474)、[@stelfrag](https://github.com/stelfrag)）

## 机器学习
- `[ml] dimension anomaly score threshold` 现在限制为 0.01 到 1.00，当配置值更改时，日志中会发出警告。接受高达 5.00 的值，但任何高于 1.00 的值都会默默地关闭异常检测，因为模型的异常分数不能超过 100。此类值现在以 1.00 运行，这是最不敏感的设置（[#24499](https://github.com/netdata/netdata/pull/24499)、[@stelfrag](https://github.com/stelfrag)）

## 收藏家

- `ebpf.plugin` 和 `ebpf-go.plugin` 已安装 setuid root。当它们以提升的权限运行时，它们现在会忽略 `NETDATA_*_DIR` 环境变量并使用它们构建时使用的插件、配置和日志目录。标准安装不受影响。 `netdata.conf` 中将这些目录指向其他地方的 `[directories]` 覆盖不再到达 eBPF 插件，该插件为每个被忽略的变量记录一行（[#24412](https://github.com/netdata/netdata/pull/24412)、[@stelfrag](https://github.com/stelfrag)）
- Redfish：现在收集作为标准端口资源公开的管理器网络端口，包括其链接状态和速度。他们被拒绝，留下永久部分的集合（[#24270](https://github.com/netdata/netdata/pull/24270)，[@ilyam8](https://github.com/ilyam8))
- PAN-OS：`panos.ipsec.tunnels` 现在对已建立的 IPsec 隧道进行计数，而不是报告已配置的隧道，并且在重新生成密钥期间具有重叠 SA 的隧道会计数一次。剩余 SA 生命周期现在报告隧道的最长有效生命周期，而不是变化值或求和值（[#24385](https://github.com/netdata/netdata/pull/24385)、[@macmandr197](https://github.com/macmandr197)）
- `go.d.plugin`：修复了当主机的元数据发生变化而其身份保持不变时，Cato Networks 等收集器因主机作用域冲突而导致收集周期失败的问题（[#24415](https://github.com/netdata/netdata/pull/24415)、[@ktsaou](https://github.com/ktsaou)）
- Cato Networks：拓扑功能现在将每个站点连接到其设备，保留每个观察到的 WAN 隧道而不是合并并行隧道，并将隧道标记为已连接、已断开或未知。站点、设备和隧道包含用于故障排除的更多详细信息，例如 HA 角色、丢失、抖动、最后一英里测量和 BGP 会话，并且当库存、指标或 BGP 数据丢失时，图表会注明。收集器现在使用 Cato SDK v1.1.0 ([#24413](https://github.com/netdata/netdata/pull/24413)、[@ktsaou](https://github.com/ktsaou)、[#24362](https://github.com/netdata/netdata/pull/24362)、[@ilyam8](https://github.com/ilyam8))
- `ebpf.plugin`：`ebpf.monitoring_pid` 中跟踪的 PID 数量不再在具有短期进程的主机上持续增长。在读取其 `/proc` 条目之前退出的进程被释放而不被减去（[#24423]（https://github.com/netdata/netdata/pull/24423），[@stelfrag]（https://github.com/stelfrag））
- `statsd.plugin`：启用 `[statsd] set charts as obsolete after`（默认关闭）后，第一次删除空闲指标时代理不再崩溃。删除也不再泄漏指标的值，并且保留合成图表使用的指标。私人图表计数不再环绕并阻止每个新的私人图表（[#24440](https://github.com/netdata/netdata/pull/24440)、[@stelfrag](https://github.com/stelfrag)）
- 虚拟节点：由收集器（例如 SNMP 设备使用的一个收集器）设置的不活动超时再次起作用。它在定义节点时被丢弃，因此虚拟节点在其收集器停止报告后永远不会离线。虚拟节点在其流式副本停止后再次被本地收集器接管，现在已恢复其运行状况检查和正常操作（[#24495](https://github.com/netdata/netdata/pull/24495)、[@ilyam8](https://github.com/ilyam8)）
- SNMP：设备未回答任何请求的轮询现在失败。仍会为设备的虚拟节点报告根据缓存元数据构建的配置文件统计信息，使其在测量停止后保持活动状态（[#24497](https://github.com/netdata/netdata/pull/24497)、[@ilyam8](https://github.com/ilyam8)）
- PowerStore：性能、以太网和容量图表现在显示阵列报告的值。收集器读取原始样本的字段名称，而它请求的五分钟和每日汇总使用不同的名称，因此这些图表显示零或丢失。 CPU 现在以百分比形式显示该时间间隔的峰值利用率，平均登录计数保留其分数（[#24448](https://github.com/netdata/netdata/pull/24448)、[@ilyam8](https://github.com/ilyam8)）
- `log2journal`：现在拒绝以反斜杠转义结尾的 JSON 行，而不是使用行尾之外的字节进行解析（[#24365](https://github.com/netdata/netdata/pull/24365)、[@ArjunD3456](https://github.com/ArjunD3456)）
- `log2journal`：不参与匹配的 PCRE2 模式或重写规则的命名组（例如可选组）不再使解析器在其缓冲区之前读取一个字节。输出不变（[#24380](https://github.com/netdata/netdata/pull/24380)、[@ArjunD3456](https://github.com/ArjunD3456)）
- `log2journal`：修复了几个 JSON 解析和输出问题。带有指数的非常长的数字可能会溢出数字缓冲区或使进程崩溃，`\u000a` 和 `\u0009` 转义会丢弃值的其余部分，未配对的代理生成无效的 UTF-8，并且无法解析的行在 JSON 和 logfmt 模式下将其字段保留到下一行。 `--inject` 现在替换从日志中读取的值，而不是附加到日志中，并且引用其自己的键的重写会读取原始值（[#24443](https://github.com/netdata/netdata/pull/24443)、[@stelfrag](https://github.com/stelfrag)）
- `go.d.plugin`：修复了作业管理器中的两个关闭竞争。关闭或重新启动失败可以等到截止日期而不是完成，并且已经接受的功能请求可能会被报告为拒绝，因为插件正在停止（[#24491](https://github.com/netdata/netdata/pull/24491)，[@ilyam8](https://github.com/ilyam8))
- `go.d.plugin` 服务发现：发现的名称和地址现在被编码为发现规则生成的作业中的数据。它们作为文本插入到 YAML 中，因此 IPv6 地址可能会导致作业无法解析，并且 `on` 之类的名称会变成布尔值。库存规则使用新的 `job` 模板帮助程序，例如 `{{ job "name" .Name "url" .Address }}`，自定义规则也可以使用该帮助程序。现有规则和保存的动态配置继续工作（[#24469](https://github.com/netdata/netdata/pull/24469)、[@ilyam8](https://github.com/ilyam8))
- `go.d.plugin`：收集器日志和错误，包括动态配置检查返回的日志和错误，不再包括收集器读取的文件中的原始内容，例如日志样本、配置行或证书。它们命名文件、行、字段和原因，因此某些消息不太详细（[#24496](https://github.com/netdata/netdata/pull/24496)、[@ilyam8](https://github.com/ilyam8)）
- `go.d.plugin` 和 `ibm.d.plugin`：收集器（包括 Prometheus 和 OpenMetrics 端点）读取的 HTTP 响应现在限制为 64 MiB（在 gzip 解压缩后测量）。较大的响应会导致收集失败，而不是无限制地增加内存。 HTTPCheck 报告诸如 `bad_content` 之类的响应；使用较小的端点进行健康检查（[#24490]（https://github.com/netdata/netdata/pull/24490），[@ilyam8]（https://github.com/ilyam8））
- SNMP 陷阱和 S3：这些收集器保存的状态文件现在可以安全地读取和写入。符号链接和特殊文件被拒绝，崩溃留下的临时文件不再阻止以后的写入（[#24462]（https://github.com/netdata/netdata/pull/24462），[@ilyam8]（https://github.com/ilyam8））
- 修复了库存警报和元数据问题：Portcheck `portcheck_connection_fails` 警报不再查找不存在的维度，Elasticsearch、OpenSearch 和 Unbound 元数据现在与它们描述的图表相匹配，Unbound 和 ethtool 模块图表的标题再次为“Module ...”而不是“CollectorV1 ...”（[#24308](https://github.com/netdata/netdata/pull/24308)、[@ilyam8](https://github.com/ilyam8)）

## 函数

- 进度功能现在将因服务器错误而失败的 API 调用显示为错误。它们的样式设置为仪表板无法识别的严重程度，并且看起来像是成功的调用（[#24185](https://github.com/netdata/netdata/pull/24185)、[@ilyam8](https://github.com/ilyam8)）

## 代理
- 现在从代理加载的配置文件中读取主机标签，包括在启动时和在 `netdatacli reload-labels` 上使用 `-c` 指定的主机标签。从该文件中删除的标签也会在重新加载时删除（[#24117](https://github.com/netdata/netdata/pull/24117)、[@stelfrag](https://github.com/stelfrag)）
- 崩溃报告现在包括在代理自己的致命错误处理之外引发的 `SIGABRT` 的堆栈跟踪（[#24094](https://github.com/netdata/netdata/pull/24094)、[@stelfrag](https://github.com/stelfrag)）
- 在没有 libbacktrace 的 macOS 和 Linux 构建上，代理崩溃时会再次保存其状态文件，因此下次启动会报告退出原因和信号（[#24345](https://github.com/netdata/netdata/pull/24345)、[@stelfrag](https://github.com/stelfrag)）
- 修复了具有存档子项的父项关闭时释放后使用的问题，当加载其上下文超过关闭等待时间时（[#24492](https://github.com/netdata/netdata/pull/24492)、[@stelfrag](https://github.com/stelfrag)）
- 修复了当多个线程同时通过同一限制器记录时，速率限制日志消息发出的频率超过其限制的问题（[#24249](https://github.com/netdata/netdata/pull/24249)、[@stelfrag](https://github.com/stelfrag)）
- 当 `[db] update every` 高于 3600 时，警告现在报告其被钳位到 (3600) 而不是 1 的值。钳位本身已经正确（[#24378](https://github.com/netdata/netdata/pull/24378)、[@stelfrag](https://github.com/stelfrag)）
- 当收集器尝试添加没有 id 的维度时，致命错误现在会这样说，而不是归咎于图表维度索引的破坏（[#24528](https://github.com/netdata/netdata/pull/24528)、[@stelfrag](https://github.com/stelfrag)）

## 安装与打包

- 安装程序和更新程序现在将curl退出状态56（某些curl版本因协议错误而返回）视为下载失败，例如退出状态22和78（[#24276]（https://github.com/netdata/netdata/pull/24276），[@Ferroin]（https://github.com/Ferroin））
- Windows 软件包现在在捆绑的 MSYS2 基础之上包含更新的 MSYS2 软件包，包括 OpenSSL 3.6.5、curl 8.23.0 和 msys2-runtime 3.6.11。每个更新都通过 URL 和校验和固定，并且捆绑的软件包数据库与发布的文件相匹配（[#24473](https://github.com/netdata/netdata/pull/24473)、[@stelfrag](https://github.com/stelfrag)）
- 当从源代码构建需要 Go 工具链但未安装任何工具链时，安装程序现在会下载 Go 1.27.3 而不是 1.27.0。 Go 1.27.0 及更高版本仍然受支持（[#24411](https://github.com/netdata/netdata/pull/24411)、[@ilyam8](https://github.com/ilyam8)）

## 致谢<a id="v2123-acknowledgments"></a>

我们要感谢我们敬业、才华横溢的贡献者，他们组成了这个令人惊叹的社区。时间和专业知识
您的志愿服务对我们的成功至关重要。

- [@ArjunD3456](https://github.com/ArjunD3456) 用于使访问列表中的否定 IP 优先于主机名匹配，用于比较 MCP
  并在恒定时间内管理 API 密钥，用于阻止 `log2journal` 读取 JSON 转义和不匹配的 PCRE2 组上的缓冲区，并用于收紧
  如何读取 `X-Forwarded-For` 标头和注册表 cookie。
- [@macmandr197](https://github.com/macmandr197) 用于更正 PAN-OS IPsec 隧道计数和重新生成密钥生命周期。

## 支持选项<a id="v2123-support-options"></a>

随着我们的成长，我们始终致力于提供开源解决方案中最好的支持。如果您遇到此版本中所做的任何更改或 Netdata Agent 中的任何功能的问题，请随时通过以下渠道之一与我们联系：

- [Netdata Learn](https://learn.netdata.cloud)：查找用于使用 Netdata 监控系统并排除系统故障的文档、指南和参考材料。
- [GitHub 问题](https://github.com/netdata/netdata/issues)：利用 Netdata 存储库报告错误或提出新功能请求。
- [GitHub 讨论](https://github.com/netdata/netdata/discussions)：加入围绕 Netdata 开发过程的对话并成为其中的一部分。
- [社区论坛](https://community.netdata.cloud/)：访问社区论坛并为协作知识库做出贡献。
- [Discord 服务器](https://discord.gg/2eduZdSeC7)：跳入 Netdata Discord，与志同道合的系统管理员、DevOps、SRE 和其他故障排除人员一起交流。已有超过 2000 名工程师在使用它！

---

> 📦 仓库：[netdata/netdata](https://github.com/netdata/netdata) · 🏷️ 版本：`v2.12.3` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/netdata/netdata/releases/tag/v2.12.3)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
