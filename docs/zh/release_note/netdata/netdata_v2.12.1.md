---
title: "netdata v2.12.1"
description: "即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。"
summary: "即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。"
---

# netdata v2.12.1

### netdata 是什么

即使对于精益团队来说，也是实现人工智能驱动的全栈可观察性的最快途径。

### netdata v2.12.1 版本更新了什么

Netdata v2.12.1 是一个补丁版本，用于解决自 [v2.12.0](https://github.com/netdata/netdata/releases/tag/v2.12.0) 以来发现的问题。

此版本修复了 Windows 代理中的启动崩溃和时区检测错误，在更广泛的内核和 libbpf 版本中稳定 eBPF 收集器，减少了 Docker 收集器对 Docker 守护进程的负载，并消除了繁忙父进程上 dbengine 数据文件删除中不必要的工作。

## 窗口

- 修复了 Windows 代理在启动时因 `msys-2.0.dll` 内的访问冲突而崩溃的问题。捆绑的 MSYS2 运行时携带了上游 Cygwin 更改的不完整向后移植；软件包现在提供了一个使用缺失的上游修复程序重建的运行时，MSYS2 安装程序由标签和校验和固定，如果预期的运行时不是所提供的，则打包失败（[#24170](https://github.com/netdata/netdata/pull/24170)、[@stelfrag](https://github.com/stelfrag)）
- 修复了当 Windows 时区在 IANA 映射中不匹配时 Windows 时区检测报告垃圾或读取超过其缓冲区的问题。现在，映射由具有有界副本的属性进行解析，用户的区域优先于世界默认区域，并且在失败时保留现有时区（[#24101](https://github.com/netdata/netdata/pull/24101)、[@stelfrag](https://github.com/stelfrag)）

## eBPF 收集器

- 将 eBPF 收集器与 `ebpf-co-re` v1.7.0.3 和 `kernel-collector` v1.7.0.4 同步，重新设计磁盘和进程探针以获得更好的内核兼容性，包括没有 BTF 的主机（[#24008](https://github.com/netdata/netdata/pull/24008)、[@thiagoftsm](https://github.com/thiagoftsm)）
- 修复了 `ebpf.plugin` 在可能的 CPU 数量超过在线 CPU 数量的主机上因堆损坏而中止的问题，例如 VMware guest 虚拟机（[#24008](https://github.com/netdata/netdata/pull/24008)、[@thiagoftsm](https://github.com/thiagoftsm)）
- 修复了无法在旧版 libbpf 版本上加载 eBPF 对象或 BTF 数据时发生的崩溃（[#24008](https://github.com/netdata/netdata/pull/24008)、[@thiagoftsm](https://github.com/thiagoftsm)）
- 修复了 `ebpf.plugin` 对大多数命令行选项运行错误的操作，因此 `--unittest` 等选项现在按其所说执行（[#24008](https://github.com/netdata/netdata/pull/24008)、[@thiagoftsm](https://github.com/thiagoftsm)）

## 数据库

- 删除了对每个 dbengine 数据文件删除时运行的打开缓存的扫描，仅用于提供从发布版本编译出来的调试检查。扫描在其锁下遍历整个干净队列，这对于繁忙的父级来说可能很大（[#24162]（https://github.com/netdata/netdata/pull/24162），[@stelfrag]（https://github.com/stelfrag））

## 收藏家

- Docker：减少了收集器在 `dockerd` 和 `containerd` 中造成的 CPU 负载，这对于带有 Containerd 映像存储的 Docker Engine 29+ 非常重要。图像列表现在最多每 5 分钟刷新一次，并且模块的默认 `update_every` 从 1 秒提高到 10 秒（[#24146](https://github.com/netdata/netdata/pull/24146)、[@ilyam8](https://github.com/ilyam8)）
- Docker：修复了协商 1.51 之前的 API 的守护进程上的图像使用指标，其中每个图像都被计为活动图像，而悬空图像始终报告为 0。使用情况现在源自每个集合上的容器列表（[#24147](https://github.com/netdata/netdata/pull/24147)、[@ilyam8](https://github.com/ilyam8)）
- Redfish：配置表单现在仅显示使用它们的身份验证方法的用户名和密码（[#24106](https://github.com/netdata/netdata/pull/24106)、[@ilyam8](https://github.com/ilyam8)）
- Redfish：修复了收集器永久跳过 `@odata.id` 与从中获取资源的 URI 不同的资源的问题，例如尾随斜杠变体以及 HPE iLO 返回的重新映射的网络适配器和存储路径。受影响的作业仍处于 `partial` 状态，并发出长期 `redfish_collection_status` 警告。现在接受同源别名，其他 URI 安全检查仍然适用，拒绝报告具体原因（[#24186](https://github.com/netdata/netdata/pull/24186)、[@ilyam8](https://github.com/ilyam8)）
- Ceph：从配置表单中删除了杂散选项选择器，并阻止 Redfish TLS 设置渲染重复的选项卡条（[#24108](https://github.com/netdata/netdata/pull/24108)、[@ilyam8](https://github.com/ilyam8)）
- SMBIOS 内存：收集器现在仅在 Linux 上构建，Linux 是导出其读取的 SMBIOS 表的唯一平台。在 macOS、FreeBSD 和 Windows 上，其库存作业通常会以 `read SMBIOS entry point: ... no such file or directory` 启动和失败（[#24169](https://github.com/netdata/netdata/pull/24169)、[@ilyam8](https://github.com/ilyam8)）

## 支持选项<a id="v2121-support-options"></a>

随着我们的成长，我们始终致力于提供开源解决方案中最好的支持。如果您遇到此版本中所做的任何更改或 Netdata Agent 中的任何功能的问题，请随时通过以下渠道之一与我们联系：

- [Netdata Learn](https://learn.netdata.cloud)：查找用于使用 Netdata 监控系统并排除系统故障的文档、指南和参考材料。
- [GitHub 问题](https://github.com/netdata/netdata/issues)：利用 Netdata 存储库报告错误或提出新功能请求。
- [GitHub 讨论](https://github.com/netdata/netdata/discussions)：加入围绕 Netdata 开发过程的对话并成为其中的一部分。
- [社区论坛](https://community.netdata.cloud/)：访问社区论坛并为协作知识库做出贡献。
- [Discord 服务器](https://discord.gg/2eduZdSeC7)：跳入 Netdata Discord，与志同道合的系统管理员、DevOps、SRE 和其他故障排除人员一起交流。已有超过 2000 名工程师在使用它！

---

> 📦 仓库：[netdata/netdata](https://github.com/netdata/netdata) · 🏷️ 版本：`v2.12.1` · 📅 发布：2026-10-08 · [查看英文原版 Release](https://github.com/netdata/netdata/releases/tag/v2.12.1)

*本文由 NextStack 自动化流水线采集并翻译，内容以官方英文原文为准。*
