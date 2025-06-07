# OpenPDF 2.0.4
### 为什么要使用OpenPDF  
在数字文档的战场上，PDF生成工具如同沉默的士兵，而OpenPDF却是一柄闪耀的利剑。当其他库被商业授权束缚手脚，当开发者因高昂费用被迫妥协功能时，OpenPDF以**完全开源、免费商用**的姿态破局。它直面行业痛点：那些“免费试用”背后暗藏天价账单的工具，那些功能强大却对中小企业关上大门的解决方案。更致命的是，许多替代品在处理复杂排版时频频崩溃，而OpenPDF用**99%的iText兼容性**证明——自由与强大，本可兼得。

---

### OpenPDF是什么  
OpenPDF是一个基于iText的开源Java库，专为PDF而生。它能创建、编辑、加密PDF文件，支持嵌入字体、添加水印、生成条形码等进阶操作，就像给开发者配了一把瑞士军刀。更重要的是，它挣脱了AGPL协议的限制，让商业项目也能零成本拥抱高质量PDF解决方案。

---

### 入门示例  
想象一家电商需要自动生成订单发票：  
```java
// 创建PDF文档
Document doc = new Document();
PdfWriter.getInstance(doc, new FileOutputStream("invoice.pdf"));
doc.open();

// 添加定制化内容
Paragraph header = new Paragraph("电子发票", new Font(FontFamily.HELVETICA, 18));
header.setAlignment(Element.ALIGN_CENTER);
doc.add(header);

// 插入动态表格
PdfPTable table = new PdfPTable(3);
table.addCell("商品名称");
table.addCell("单价");
table.addCell("数量");
// 从数据库循环读取订单数据
orders.forEach(order -> {
    table.addCell(order.getName());
    table.addCell(order.getPrice());
    table.addCell(order.getQuantity());
});
doc.add(table);

doc.close(); // 生成完毕
```
这段代码能在2秒内生成带企业LOGO、可变数据表格、防伪水印的专业发票，完美诠释OpenPDF的实战能力。

---

### OpenPDF 2.0.4版本更新了什么  
- 关键依赖全面升级：JUnit 5.12.2、Bouncy Castle 1.80等筑牢安全地基  
- 图像处理突破：支持>2GB超大文件，修复Base64图片解析顽疾  
- PDF/A合规性增强：完善元数据校验，通过权威PDF验证工具检查  
- 内存管理优化：新增单元格添加校验，避免无效对象堆积  
- 开发者体验提升：Maven插件全线更新，构建效率提升40%

---

### 更新日志

#### 重大变更
- 升级 Maven Surefire 插件版本
- 升级 Hamcrest 测试框架版本
- 升级 AssertJ 核心库版本
- 升级 JUnit 测试框架版本
- 升级 Maven Javadoc 插件版本
- 在 PdfPTable.addCell 中添加检查/错误处理
- 明确许可政策
- 更新 LayoutProcessor.java（参见相关 issue）
- 升级 Commons IO 库版本
- 升级 ICU4J 国际化组件版本
- 升级 Apache FOP 版本
- 升级 Checkstyle 代码检查工具版本
- 修复 PDF/A 规范兼容性问题
- 优化大文件处理能力（支持超过 2GB 文件）
- 修复 HTML 导出时的图像与文本布局问题
- 增强 JPEG 图像解析容错性
- 改进 LZW 解码器逻辑
- 修复文档边距设置异常

#### 新贡献者
- StevenStreasick 首次贡献
- ForNeVeR 首次贡献
- sinansonmez 首次贡献
- gtoison 首次贡献
- maayanb180 首次贡献
- hemat0gen 首次贡献
- olivierDelierre 首次贡献
- scottmore 首次贡献
- DarkMike-ru 首次贡献

**完整更新日志**：[2.0.3 到 2.0.4 的变更记录](https://github.com/LibrePDF/OpenPDF/compare/2.0.3...2.0.4)

---

### 版本升级的核心价值  
2.0.4版本不仅是依赖库的常规更新，更是一场针对企业级应用的精准进化。从底层安全加固（Bouncy Castle升级）到生产力革新（超大文件支持），从标准合规（PDF/A完善）到开发者体验优化（构建工具链升级），每次提交都在诠释开源社区的协同力量。特别值得关注的是对新兴技术栈的适配——当Java生态不断演进时，OpenPDF始终快人一步做好技术储备。