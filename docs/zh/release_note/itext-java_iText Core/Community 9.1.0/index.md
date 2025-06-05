# itext-java iText Core/Community 9.1.0
### 为什么要使用itext-java

在数字化时代，文档的处理和管理变得愈发重要。想象一下，你正在为一家大型企业设计一个自动化的文档生成系统，然而，面对复杂的PDF格式和不断变化的需求，传统的解决方案显得力不从心。此时，itext-java应运而生，它不仅能帮助你高效地创建和操作PDF文档，还能在性能和灵活性上超越其他工具。使用itext-java，你将能够轻松应对各种文档需求，从而在竞争中脱颖而出。

### itext-java是什么

itext-java是一个开源的Java库，专门用于创建和操作PDF文档。它提供了丰富的功能，包括文本、图像、表格的处理，以及数字签名和加密等安全特性。无论是生成发票、报告，还是处理复杂的文档格式，itext-java都能帮助开发者高效地完成任务。

### 入门示例

假设你是一名开发者，正在为一家在线商店构建一个自动生成订单确认邮件的系统。使用itext-java，你可以轻松创建一个PDF文档，包含客户的订单信息、商品详情和支付信息。以下是一个简单的代码示例：

```java
Document document = new Document();
PdfWriter.getInstance(document, new FileOutputStream("OrderConfirmation.pdf"));
document.open();
document.add(new Paragraph("订单确认"));
document.add(new Paragraph("客户姓名: 张三"));
document.add(new Paragraph("订单号: 123456"));
document.close();
```

通过这段代码，你可以快速生成一份包含客户信息的PDF订单确认书，提升用户体验。

### itext-java iText Core/Community 9.1.0版本更新了什么

iText Core 9.1.0版本带来了显著的性能提升，特别是在表格创建和SVG支持方面。新增了对文本剪裁路径、'marker-mid'属性和文本装饰的支持，同时改进了数字签名功能，增强了MAC完整性保护。此版本还优化了PDF/UA-2的实现，确保更好的可访问性。

### 更新日志

为了庆祝iText成立25周年和情人节，我们推出了iText Core 9.1版本。此次发布有许多值得期待的功能，包括表格创建性能的大幅提升、SVG支持的显著扩展，以及更多数字签名的增强功能。

#### 扩展的SVG支持
自引入以来，我们对内部实现进行了许多新增和增强，覆盖了不断增加的客户需求。本次发布是我们迄今为止最大的飞跃，关闭了超过40个问题。新增了对文本剪裁路径、'marker-mid'属性、文本装饰的支持，并改善了字体处理。

#### 表格性能提升
iText Core 9.1版本对表格渲染代码进行了高度优化，特别是在处理标记表格时，尤其适用于行数较多的表格。

#### 数字签名
我们持续改进iText的数字签名和验证能力，扩展了对两步签名的支持，并提供了新的代码示例，帮助开发者使用Cloud Signing Consortium (CSC) API进行签名。

#### PDF/UA-2
我们的PDF/UA-2实现得到了改善，特别是在使用Annot标签处理PDF 2.0文档的内容元素时。

### 总结

iText Core 9.1版本的更新记录展示了其在性能、功能和可访问性方面的显著进步。通过增强的SVG支持、优化的表格性能和改进的数字签名功能，itext-java继续引领PDF处理的潮流，为开发者提供了更强大的工具。