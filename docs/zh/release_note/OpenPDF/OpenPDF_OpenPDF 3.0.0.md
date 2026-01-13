# OpenPDF OpenPDF 3.0.0
### 为什么要使用OpenPDF  
在数字文档的战场，开发者常陷两难：**闭源库的昂贵枷锁** vs. **开源工具的兼容性陷阱**。OpenPDF 正是破局之剑——它继承了 iText 的强悍基因，却以 LGPL 和 MPL 双许可斩断商业束缚。当你的项目需要深度定制 PDF（如动态生成合同、批量添加水印），OpenPDF 以毫秒级响应碾压传统方案。更致命的是，它支持从 HTML 一键转换专业级 PDF，连 CSS 浮动元素都能精准渲染，而竞争对手还在为排版失真焦头烂额。选择 OpenPDF，等于手握自由与性能的双核引擎。

### OpenPDF是什么  
OpenPDF 是 Java 生态中轻量高效的 PDF 处理库，由 iText 开源分支演进而来。它能动态创建、编辑 PDF 文件，支持加密、水印、表单填充等高级功能，同时提供 HTML 到 PDF 的无损转换。作为开源项目，它兼容最新 PDF 2.0 标准，是替代商业库的优选方案。

### 入门示例  
**场景**：电商平台需自动生成订单发票 PDF。  
**代码实现**：  
```java
// 创建PDF文档
Document doc = new Document();
PdfWriter.getInstance(doc, new FileOutputStream("invoice.pdf"));
doc.open();

// 添加订单数据
doc.add(new Paragraph("订单号: 20230715-001"));
Table table = new Table(3); // 3列表格
table.addCell("商品");
table.addCell("单价");
table.addCell(new Phrase("¥299.00", FontFactory.getFont(FontFactory.HELVETICA_BOLD)));
doc.add(table);

// 插入公司LOGO
Image logo = Image.getInstance("company_logo.png");
logo.scaleToFit(100, 100);
doc.add(logo);

doc.close(); // 生成PDF文件
```
此代码 20 秒内生成带表格、图片的专业发票，批量处理时结合 `HtmlToPdfBatchUtils` 可提升 10 倍吞吐量。

### OpenPDF 3.0.0版本更新  
1. **包名重构**：弃用 `com.lowagie`，全面启用 `org.openpdf` 新包路径。  
2. **PDF 2.0 支持**：默认输出 ISO 32000-2:2020 标准文件，强化色彩管理与加密。  
3. **API 重大变更**：版本参数由 `char` 改为 `String` 类型（如 `setPdfVersion("2.0")`）。  
4. **虚拟线程优化**：基于 Java 21 的 `HtmlToPdfBatchUtils` 和 `PdfBatchUtils` 提升批量处理效率。  
5. **模块精简**：移除废弃的 `openpdf-core-legacy` 模块，减小依赖体积。  

### 更新日志  
#### OpenPDF 3.0.0  
- **包名迁移**：  
  新版统一使用 **org.openpdf** 包名，彻底移除旧版 `com.lowagie` 包。用户需将代码中的导入语句更新为 `org.openpdf.*`。  

- **PDF 2.0 支持**（API 重大变更）：  
  所有版本相关方法参数从 `char` 改为 `String` 类型（详见 [PdfVersion.java](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-core/src/main/java/org/openpdf/text/pdf/interfaces/PdfVersion.java) 与 [PdfWriter.java](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-core/src/main/java/org/openpdf/text/pdf/PdfWriter.java#L154)）。  
  **默认版本变更为 PDF 2.0**（ISO 32000-2:2020 标准），该标准提供：  
  - 增强的色彩管理  
  - 优化的标签式 PDF 支持  
  - 更先进的加密选项  
  - 对 PDF 1.x 模糊规范的明确修正  
  📄 [PDF 2.0 规范详情](https://www.iso.org/standard/75839.html)  

- **批量处理工具**：  
  新增基于 Java 21 虚拟线程的：  
  - [HtmlToPdfBatchUtils](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-html/src/main/java/org/openpdf/html/HtmlToPdfBatchUtils.java)：提升 HTML 转 PDF 吞吐量  
  - [PdfBatchUtils](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-core/src/main/java/org/openpdf/text/pdf/PdfBatchUtils.java)：加速 PDF 合并/拆分/水印/加密操作  

#### 重要变更  
- 移除 `openpdf-core-legacy` 模块  
- 删除废弃的 `RtfElementInterface` 接口  
- 依赖库版本升级（如 AssertJ 和 Kotlin 工具链）  
**完整变更日志**：[2.4.0...3.0.0](https://github.com/LibrePDF/OpenPDF/compare/2.4.0...3.0.0)  

### 总结  
OpenPDF 3.0.0 以 **包名革新**、**PDF 2.0 原生支持** 和 **虚拟线程批处理工具** 为核心突破，通过 API 重构拥抱国际新标准，同时利用 Java 21 特性实现性能飞跃，为开发者提供未来兼容的高效 PDF 解决方案。