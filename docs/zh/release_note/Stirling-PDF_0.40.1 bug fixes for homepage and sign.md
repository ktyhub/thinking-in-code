# Stirling-PDF 0.40.1 bug fixes for homepage and sign
### 为什么要使用Stirling-PDF

在数字化时代，PDF文档的使用愈发普遍，但在转换和处理过程中，许多开发者常常面临着格式不兼容、排版混乱等问题。Stirling-PDF的出现，正是为了打破这些困扰。它不仅提供了强大的PDF生成和处理功能，还能有效解决HTML到PDF转换中的各种矛盾，帮助开发者轻松实现高质量的文档输出。想象一下，您正在为一个重要的项目准备报告，却因为格式问题而苦恼不已。Stirling-PDF将为您提供一个简洁而高效的解决方案，让您专注于内容本身，而非技术细节。

### Stirling-PDF是什么

Stirling-PDF是一个开源项目，旨在简化PDF文档的生成和处理。它提供了一系列工具和功能，帮助开发者将HTML内容转换为高质量的PDF文件，支持多种自定义选项，确保输出文档的格式和样式符合用户需求。

### 入门示例

假设您是一名开发者，正在为一家在线教育平台创建课程资料。您希望将课程内容从网页格式转换为PDF，以便学生下载和打印。使用Stirling-PDF，您只需简单几行代码即可实现这一目标：

```javascript
const pdf = require('stirling-pdf');
const htmlContent = '<h1>课程标题</h1><p>课程内容...</p>';

pdf.createPDF(htmlContent, { format: 'A4' })
  .then((pdfBuffer) => {
    // 将pdfBuffer保存为文件或发送给用户
  })
  .catch((error) => {
    console.error('生成PDF时出错:', error);
  });
```

通过这个简单的示例，您可以看到Stirling-PDF如何帮助您快速而高效地生成所需的PDF文档。

### Stirling-PDF 0.40.1版本更新

在Stirling-PDF 0.40.1版本中，主要进行了主页和PDF签名功能的bug修复，提升了用户界面的稳定性。此外，新增了禁用HTML清理的选项，以便处理一些复杂的HTML文档。该版本还引入了VS Code扩展，进一步增强了开发者的使用体验。

### 更新日志

快速更新了主页和PDF签名的bug修复。  
新增选项以禁用HTML清理，适用于某些高级HTML文档的HTML到PDF转换。

#### 变更内容

**Bug修复**
- 修复了主页的用户界面问题。
- 修复了标签容器逻辑的bug。

**增强功能**
- 为开发引入了VS Code扩展。
- 新增禁用HTML清理的选项。

**其他变更**
- 添加了最新的开发者。
- 版本号更新。

### 总结

在最新的Stirling-PDF 0.40.1版本中，开发团队针对主页和PDF签名功能进行了重要的bug修复，并引入了新的功能选项，提升了用户体验。这些改进将帮助开发者更高效地处理PDF文档，进一步推动项目的顺利进行。