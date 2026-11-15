---
title: "codebase-memory-mcp v0.10.8"
project: "codebase-memory-mcp"
repo: "DeusData/codebase-memory-mcp"
tag: "v0.10.8"
version: "v0.10.8"
published: "2026-08-19"
type: "patch"
lang: "zh"
---

# codebase-memory-mcp v0.10.8

#v0.10.8

> **关于 v0.10.7 的注意事项：** 此版本取代了 v0.10.7，后者已在发布管道中丢失
> 发布错误（发布在标签 `0.10.7` 而不是 `v0.10.7` 下；软件包安装程序
> 解析 v 前缀标签，释放不变性使得名称不可恢复）。新项目管理
> 和 PyPI 0.10.7 包因此被弃用/撤回 - 它们的二进制文件很好，
> 他们的下载网址不是。 v0.10.8携带相同的代码内容加上管道
> 硬化以防止复发。

社区密集的补丁发布：自 v0.10.6 以来合并了 19 个拉取请求，大部分来自
贡献者。谢谢大家！

## 图的正确性

- **Cypher 聚合不再低估** (#1196)。两种截断机制都是固定的：
  未标记的扫描在聚合运行*之前*停止在 max_rows 处收集候选者
  （＃1323，@Enferlain），并且关系扩展缓冲区被限制，因此聚合永远不会
  看到行超出了内部增长限制（#1698）。 `count()`/`collect()` 现在看到
  完整的比赛组合； `max_rows` 仅限制返回的行，如记录的那样。
- **Python 别名 from-imports 解析为真实定义** (#1371, @Joseph-MingEn)。
  `from .gate import execute as bridge_execute` 现在产生对 `execute` 的呼叫优势
  本身而不是失去调用，并且别名基类导入落在真实类上
  节点。在我们的 django 基准测试中，这恢复了 26 个 INHERITS 和 42 个 OVERRIDE 边缘，且为零
  其他地方的损失，并使 TypeScript 图字节相同。
- **跨语言后缀匹配**用于限定名称查找（#1647，@rudi193-cmd）。
- **search_graph 停止返回仅语义的幽灵** - 结果仅由
  相似性边缘不再显现，就好像它们是明确匹配的一样（#1319，@JJordan0C）。
- **列表值字段正确提取**而不是折叠到其第一个元素
  （＃1325，@Enferlain）。
- **索引响应如实报告持续覆盖**（#1326，@Enferlain）：
  不重新访问具有记录的解析间隙的文件的增量运行不再报告
  这些差距消失了——响应现在组成了其跳过/解析部分摘要
  从存储的覆盖状态，仅当读取失败时才回退到每次运行的数据。

## 窗口

- **非 ASCII 搜索内容不再降级为 `?`** (#1704)。 search_code 原始扫描
  管道 PowerShell 输出，PowerShell 5.1 在控制台 OEM 中对该管道进行编码
  代码页 — 因此西里尔文、CJK 或重音内容会变成问号，具体取决于
  服务器继承了哪个控制台。管道现在无条件固定到 UTF-8。
- **search_code 理解 UTF-8 输出路径并获得匹配的上下文列**
  （＃1253，@anfedoro）。
- **代码搜索是有界的并且可以取消** - 放弃查询不再留下一个
  孤立扫描正在运行（#1608，@ertankucukoglu）。

## 平台和工具

- **FreeBSD 支持**（#1467，@PR9000）。
- **list_projects 分页**：精简的默认响应加上偏移/限制和
  include_details 以获得完整视图（#1181，@tmonestudio）。
- **无扩展的 shebang 脚本检测其语言**（#1203，@ibaldr89）。
- **索引模式功能重建**（#1263，@astandrik）。
- **is_test 测试/目录检测** (#1308) 和 **diff-aware clang-tidy
  钩子**（#1310，均为@Yyunozor）。

## 发布管道（v0.10.7 课程，强化）
- 取消作业时释放门无法关闭：超时门无法再级联到
  一个默默跳过的测试矩阵（#1719）。
- 格式错误的版本输入在飞行前会被拒绝 - 裸露的、非 v 前缀的版本永远不会
  再次发布无法解析的标签（#1719）。

## 内部

- 测试工具使用隔离的守护进程运行时，因此套件运行无法触及帐户
  守护进程（#1695，@astandrik）； shell 入口点和 git hook 的 LF 签出合约
  （#1314 @mlandolfi90，#1699 与 @xumian520）；标准输入门回归测试不再
  依赖于注册表提供零参数工具（#1704）。

<!-- cbm-security-verification:start -->
## 安全验证

下面发布的每个二进制文件在冒烟和浸泡测试之前都由 VirusTotal 扫描，并且每个产品都链接了确切的运输字节的判决（决定性引擎：61-68）。
每个运送的二进制文件都是干净的。

|产品 |已发送二进制文件 | VirusT总判决 |
|---|---|---|
| `linux-amd64` | `cb6dc545a8cb714799461ba7d8c223dbca7d02ca46ea5a4215c1beb450fd8e09` | [清洁](https://www.virustotal.com/gui/file/cb6dc545a8cb714799461ba7d8c223dbca7d02ca46ea5a4215c1beb450fd8e09/detection) |
| `linux-arm64` | `e861b4ae831a24ab69e82bb9c4ca8c70029af55b9a074ef0ed2565a53c0de24c` | [清洁](https://www.virustotal.com/gui/file/e861b4ae831a24ab69e82bb9c4ca8c70029af55b9a074ef0ed2565a53c0de24c/detection) |
| `linux-amd64-portable` | `1175645cb30560e7e47d78611cd1bcb509478eaf6d4e51f72fe18327ee9c1351` | [清洁](https://www.virustotal.com/gui/file/1175645cb30560e7e47d78611cd1bcb509478eaf6d4e51f72fe18327ee9c1351/detection) |
| `linux-arm64-portable` | `0bf1b3cf3659f6dcdb01bb6313a93dcbcb53e2cd1a52820f024df7a0cf48f44e` | [清洁](https://www.virustotal.com/gui/file/0bf1b3cf3659f6dcdb01bb6313a93dcbcb53e2cd1a52820f024df7a0cf48f44e/detection) |
| `darwin-amd64` | `1d5b79257d91973809ee70482781db3d1a78f62fc1cd5d18a5ab0608451d16d4` | [清洁](https://www.virustotal.com/gui/file/1d5b79257d91973809ee70482781db3d1a78f62fc1cd5d18a5ab0608451d16d4/detection) |
| `darwin-arm64` | `2412e017268bef8f847f38d1b0f79f63185b38c27fe6fba637067bfc87c0eedf` | [清洁](https://www.virustotal.com/gui/file/2412e017268bef8f847f38d1b0f79f63185b38c27fe6fba637067bfc87c0eedf/detection) |
| `windows-amd64` | `b4b403b1d7c4def3785f148b93f345ce8427858f4f5489ce28580c4387a336a6` | [清洁](https://www.virustotal.com/gui/file/b4b403b1d7c4def3785f148b93f345ce8427858f4f5489ce28580c4387a336a6/detection) |
| `windows-arm64` | `67b0341ee62f07f850d3954e4f387855f90ea8c6c4b7ed41b8a62d61344373a4` | [清洁](https://www.virustotal.com/gui/file/67b0341ee62f07f850d3954e4f387855f90ea8c6c4b7ed41b8a62d61344373a4/detection) |

选择是元组本地的并且默认为剥离的。打包后再次验证所选可执行文件SHA-256；存档容器没有多余地提交给 VirusTotal。它们的哈希值在 `checksums.txt` 中仍然可用。

持久证据：[候选来源](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.8/release-candidates.tsv)、[候选 VirusT 总结果](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.8/virustotal-candidate-results.tsv)、[选择决定](https://github.com/DeusData/codebase-memory-mcp/releases/download/v0.10.8/release-selection.tsv)。
<!-- cbm-security-verification:end -->

---

> 📦 仓库：[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · 🏷️ 版本：`v0.10.8` · 📅 发布：2026-08-19 · [查看英文原版 Release](https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.8)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
