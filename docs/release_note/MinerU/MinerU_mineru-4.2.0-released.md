---
title: "MinerU mineru-4.2.0-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.2.0-released"
version: "mineru-4.2.0-released"
published: "2026-11-10"
type: "release"
lang: "en"
summary: "MinerU 4.2.0 重点升级 WebUI 交互与结果溯源，改善复杂 PDF、公式和表格的解析质量，并完善设备选择、模型缓存、服务管理与输入安全。以下为相对 4.1.0 的累计更新，包含 4.1.x 期间已发布的改进。"
---

# MinerU mineru-4.2.0-released

## 4.2.0

MinerU 4.2.0 重点升级 WebUI 交互与结果溯源，改善复杂 PDF、公式和表格的解析质量，并完善设备选择、模型缓存、服务管理与输入安全。以下为相对 4.1.0 的累计更新，包含 4.1.x 期间已发布的改进。

### WebUI 交互与结果溯源

- **新增原文与结果双向定位**：点击 PDF 或图片中的区域，即可定位并高亮对应的解析内容；点击结果中的段落、标题、公式或图表，也可返回原文位置。跨页合并内容支持切换来源页。
- **增强布局可视化**：合并后的段落、列表和表格可关联多个原文区域，并通过连线展示合并关系，方便检查阅读顺序、内容归属和跨页合并结果。
- **新增结果目录导航**：根据标题生成可折叠目录，支持快速跳转到对应内容。
- **重新设计上传区域**：集中呈现文件选择、拖放、粘贴、文件类型、上传进度和取消操作，让上传过程更清晰。
- **重做档位与页范围控件**：采用更紧凑的布局，优化选择与拖动体验，并展示解析服务的 CPU/GPU 运行状态。
- **加快 PDF 预览**：选择本地 PDF 后，浏览器直接预览完整文档，并行完成上传，减少预览等待和重复传输。
- **保持解析前后的预览状态**：解析完成后复用已加载的查看器，保留缩放状态，并以叠加标框展示布局结果。
- **减少重复处理**：复用已准备的输入文件、语义结果和素材，减少原文 PDF、布局 PDF 及预览文件的重复生成，加快结果预览与导出。

### PDF、公式与表格解析

- **改进行内公式识别**：Standard/Advanced 在 PDF 原生文本路径中，使用 VLM 识别表外行内公式区域；识别结果为空或无效时，保留局部公式识别模型回退。
- **保护脚注公式并改进页边区域处理**：修复脚注公式被错误改标或过滤的问题，减少公式、编号与正文之间的归属错误。
- **改进嵌套与重叠区域处理**：优化重复区域筛选与合并范围，减少重复文本和过度合并；修正图内标注的归属，并改善合并图片的阅读顺序。
- **统一布局检测行为**：恢复 ONNX 与 Torch 后端的逐类输出阈值，提高不同后端处理结果的一致性。
- **改善原生文本恢复**：完善空 ToUnicode 映射下的字符恢复，并在后置 OCR 和失败恢复后清理残留的 Unicode 私用区字符，减少缺字和乱码。
- **保留仿斜体正文**：修复整行字符经过倾斜变换时，正常正文被误判并丢失的问题。
- **修复旋转页面中的表格方向判断**：结合页面旋转信息解释原生文字方向，减少表格被错误旋转的问题。
- **保持表格内图片与公式完整**：避免表格恢复过程中将图片、公式拆散，或错误分配到多个单元格。
- **改善跨页表格输出**：保留单元格拼接处的文本边界，完善空白续接、稀疏空白行和共享跨行单元格的处理。

### 原生文档解析

- **利用 Tagged PDF 结构语义**：Flash 原生 PDF 文本解析可利用 Tagged PDF/PDF/UA 文档中的结构信息与阅读顺序；未覆盖或不可信的内容继续由几何规则处理。
- **改进段落续接**：结合缩进、句末位置等页面证据，改善大写字母开头的续接判断，以及跨页、跨栏段落合并。
- **改进原生表格恢复**：修复异常字形边界导致的行划分错误，以及部分数字表格中跨行单元格的归属问题。
- **改善字体粗细判断**：增强嵌入字体的字重解析，减少正常正文被误判为粗体的情况。
- **改善 Office 图片异常处理**：对部分超出图片处理资源限制的内容使用占位表示，避免单张图片导致整份文档解析失败。

### 设备选择、档位推荐与硬件诊断

- **统一进程内的设备选择**：模型加载、自动档位推荐和 llama.cpp 自动模式共享已确定的运行设备，减少重复探测与不同入口之间的行为差异。
- **改善多显卡识别**：通过物理 PCI 地址关联 Windows GPU 与显存信息，提高多显卡及同型号设备的匹配准确性。
- **调整自动档位推荐**：根据小模型后端实际选择的设备推荐档位。GPU 可开放全部档位；CPU 可用逻辑核数达到 4 核时开放 Basic，达到 12 核时开放 Standard。
- **完善 ONNX 独显自动选型**：Windows/Linux 自动模式增加独显总显存检查。总显存按 GiB 换算并四舍五入后达到 6 及以上，才直接选择 GPU；容量不足或无法确认时使用 CPU。
- **增加设备状态查询**：解析服务健康接口可返回已初始化的 CPU/GPU 运行状态，查询本身不触发设备选择。
- **加快硬件诊断**：并行执行隔离的运行时探测，按节输出报告；统一容量显示与设备摘要，并在 JSON 中保留完整诊断信息及候选设备的选择原因。
- **加快 CLI 帮助与版本查询**：按需加载命令入口，避免仅查看帮助或版本时初始化运行环境、读取用户配置。
- **改善运行时退出**：完善 VLM 关闭与资源释放，减少进程退出阶段的清理失败。

### Router 与 API

- **新增动态上游节点管理**：支持在运行期间查询、注册和移除远程解析节点，无需重启 Router。
- **支持节点平滑移除**：先停止向节点分配新任务，待已有任务、传输和结果引用释放后，再完成移除。
- **支持 Router 级联**：复用现有 V1 协议与结果租约，支持将下层 Router 作为上游节点接入，便于组织多层服务入口。
- **提供独立管理认证**：动态节点管理使用独立的管理凭证，与解析请求认证分离。
- **修复路径识别并统一文件名校验**：修复 CLI 相对路径和隐藏文件路径的格式识别；统一 Tasks、Router 与同步上传入口的文件名校验，拒绝路径型名称和控制字符。

### 模型下载与缓存校验

- **引入模型文件清单**：为整仓、目录和单文件资源记录预期文件及大小，在缓存复用时检查文件缺失、截断、失效链接和清单异常。
- **支持离线校验**：正常缓存可在不联网的情况下完成校验与复用，无需读取大体积权重文件计算哈希。
- **改善增量修复**：识别缺失或大小不符的文件，在重新下载时修复，并继续复用有效文件。
- **兼容旧完成标记**：旧缓存通过必要文件与分片检查后，可继续离线使用；具备网络条件时，后台核对对应版本的远端元数据并升级文件清单，不更新模型权重。

### 本机认证与输入安全

- **Doclib 增加持久化 Bearer Token 认证**：SDK 默认发现本机服务时自动读取凭证；直接调用 HTTP 接口时，需要携带有效 Token。
- **加强本机凭证保护**：按平台设置并校验 POSIX 私有权限及 macOS、Windows ACL，限制其他账户访问或替换凭证文件。
- **加强 URL 输入的 SSRF 防护**：连接前校验域名解析得到的全部地址，并固定连接已校验的公网 IP，拒绝内网、回环、链路本地、云元数据及其他特殊地址。
- **收紧 URL 输入下载行为**：采用直连方式，不跟随重定向，不使用环境中的 HTTP/HTTPS/ALL 代理设置。
- **执行文档资源限制**：当文档解压或结构展开超出预算时终止处理，覆盖 OOXML 解压、XLSX 合并区域展开等场景；通过 `resource_limit` 返回明确错误，并保留 Tasks 的逐文件失败信息。

### 升级提示

- **直接调用 Doclib HTTP 接口的客户端需要适配 Bearer Token 认证。** SDK 默认发现本机服务时自动读取凭证；显式指定服务地址或 Socket 路径时，需要同时提供 Token。
- **依赖内网 URL、重定向或环境代理下载输入文件的部署需要调整输入方式。** 内网文档可改为通过客户端上传。
- **设备配置变更需要重启相关进程后生效。** 运行设备确定后，在当前进程内保持稳定；ONNX 新增的独显显存门槛仅作用于自动模式。
- 最低依赖版本更新为 **DocVortex 0.6.21** 和 **ModelScope 1.39.1**。

---

## 4.2.0

MinerU 4.2.0 upgrades WebUI interaction and source tracing, improves parsing of complex PDFs, formulas, and tables, and strengthens device selection, model caching, service management, and input security. These are cumulative changes since 4.1.0, including improvements released in 4.1.x.

### WebUI interaction and source tracing

- **Bidirectional source navigation:** Click a region in a PDF or image to locate and highlight its parsed content, or click a parsed paragraph, heading, formula, or figure to return to its source. Content merged across pages supports switching source pages.
- **Improved layout visualization:** Merged paragraphs, lists, and tables can reference multiple source regions, with connecting lines to help inspect reading order, content ownership, and cross-page merges.
- **Result outline navigation:** A collapsible heading outline provides quick access to document sections.
- **Redesigned uploads and controls:** File selection, drag and drop, paste, file types, upload progress, and cancellation share one upload area. Compact tier and page-range controls improve selection and dragging, while showing the parsing service's CPU/GPU state.
- **Faster PDF previews and exports:** Preview local PDFs directly in the browser while uploading, preserve the mounted viewer and zoom after parsing, and overlay layout annotations. Reuse prepared inputs, semantic results, and assets to avoid repeated PDF and preview generation.

### PDF, formula, and table parsing

- **Improved inline formulas:** Standard/Advanced use VLM recognition for inline formula regions outside tables in the native PDF text path, retaining local formula recognition when the result is empty or invalid.
- **Footnote formulas and page-edge regions:** Preserve formula identity and reduce incorrect ownership between formulas, numbers, and body text.
- **Nested and overlapping regions:** Reduce duplicate text and excessive merging, correct annotations inside figures, and improve the reading order of merged images.
- **Consistent layout detection:** Restore per-class output thresholds in both ONNX and Torch.
- **Native text recovery:** Improve character recovery with empty ToUnicode maps and remove residual Unicode private-use characters after post-OCR processing and fallback restoration.
- **Sheared body text:** Preserve normal body text when every character in a line has a shear transformation.
- **Rotated tables:** Account for page rotation when interpreting native text orientation.
- **Atomic table content:** Keep images and formulas intact during table reconstruction rather than splitting them across cells.
- **Cross-page tables:** Preserve text boundaries between joined cells and improve blank continuations, sparse blank rows, and shared row spans.

### Native document parsing

- **Tagged PDF semantics:** Flash native PDF text parsing can use Tagged PDF/PDF/UA structure and reading order, with geometric rules handling uncovered or untrusted content.
- **Paragraph continuation:** Use indentation, sentence endings, and other page evidence to improve uppercase-leading continuations and paragraph merging across pages and columns.
- **Native tables:** Correct row segmentation affected by unusual glyph bounds and row-span ownership in some numeric tables.
- **Font weight:** Improve embedded-font weight interpretation to reduce normal body text incorrectly marked as bold.
- **Office images:** Use placeholders for some images exceeding processing limits so that one image does not fail the whole document.

### Device selection, tier recommendations, and diagnostics

- **Shared process device selection:** Model loading, automatic tier recommendations, and llama.cpp automatic mode reuse the selected runtime device, reducing duplicate probes and differences between entry points.
- **Multiple GPUs:** Match Windows GPU and memory information by physical PCI address.
- **Automatic tiers:** Recommend tiers from the actual small-model device. GPUs can enable all tiers; CPUs enable Basic from 4 available logical cores and Standard from 12.
- **ONNX discrete-GPU selection:** Windows/Linux automatic mode checks total dedicated memory. Direct GPU selection requires a capacity that rounds to at least 6 GiB; insufficient or unconfirmed capacity uses the CPU.
- **Runtime state:** Service health can report initialized CPU/GPU state without triggering device selection.
- **Faster diagnostics and CLI startup:** Run isolated runtime probes concurrently, stream reports by section, standardize capacity and device summaries, and retain full diagnostics and candidate reasons in JSON. Help and version commands load their entry points on demand.
- **Cleaner shutdown:** Improve VLM shutdown and resource release.

### Router and APIs

- **Dynamic upstream management:** Query, register, and remove remote parsing nodes without restarting the Router.
- **Graceful removal:** Stop assigning new work, then wait for existing tasks, transfers, and result references to finish.
- **Router cascading:** Connect a downstream Router as an upstream using the existing V1 protocol and result leases.
- **Separate administration credentials:** Authenticate dynamic node management independently from parsing requests.
- **Paths and filenames:** Correct CLI detection of relative and hidden-file paths, and consistently reject path-like filenames and control characters in Tasks, Router, and synchronous uploads.

### Model downloads and cache validation

- **File manifests:** Record expected files and sizes for repository, directory, and single-file resources; detect missing or truncated files, broken links, and invalid manifests before reuse.
- **Offline reuse and incremental repair:** Validate normal caches without network access or hashing large weights. Repair missing or incorrectly sized files while reusing valid files.
- **Legacy completion markers:** Continue offline reuse after required-file and shard checks. When online, verify remote metadata for the recorded revision and upgrade manifests without updating model weights.

### Local authentication and input security

- **Persistent Doclib bearer tokens:** SDK default local discovery reads credentials automatically; direct HTTP calls require a valid token.
- **Credential protection:** Set and verify POSIX private permissions and macOS/Windows ACLs.
- **URL SSRF protection:** Validate all resolved addresses and connect to a validated public IP, rejecting private, loopback, link-local, cloud metadata, and other special addresses.
- **Direct URL downloads:** Do not follow redirects or use HTTP/HTTPS/ALL proxy environment settings.
- **Document resource limits:** Stop decompression or structural expansion beyond configured budgets, including OOXML archives and XLSX merged ranges. Return a clear `resource_limit` error and preserve per-file Tasks failures.

### Upgrade notes

- Direct Doclib HTTP clients must provide a bearer token. Default SDK discovery reads it automatically; explicit service addresses or socket paths require an explicit token.
- Deployments using private URLs, redirects, or environment proxies for input downloads must adjust their input workflow. Upload private documents through the client.
- Restart the relevant process after changing device configuration. Runtime device selection stays stable within a process; the new ONNX memory threshold applies only to automatic mode.
- Minimum dependencies are **DocVortex 0.6.21** and **ModelScope 1.39.1**.

Upgrade / 升级：`pip install -U "mineru==4.2.0"`

Full changes: https://github.com/opendatalab/MinerU/compare/mineru-4.1.0-released...mineru-4.2.0-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.2.0-released` · 2026-11-10 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.2.0-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
