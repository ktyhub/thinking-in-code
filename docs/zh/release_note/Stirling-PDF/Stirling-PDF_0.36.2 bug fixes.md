# Stirling-PDF 0.36.2 bug fixes
### 为什么要使用Stirling-PDF

在当今这个信息爆炸的时代，如何高效地生成和处理PDF文件成为了许多开发者面临的挑战。Stirling-PDF正是为了解决这一矛盾而诞生的，它不仅提供了强大的功能，还能让开发者在繁忙的工作中节省时间。想象一下，您在项目中需要频繁生成报告或文档，使用传统方法可能会让您感到疲惫不堪，而Stirling-PDF的出现则为您带来了轻松与高效的解决方案。

### Stirling-PDF是什么

Stirling-PDF是一个开源项目，旨在为开发者提供一个简单而强大的工具，用于生成和处理PDF文档。它支持多种功能，包括文本、图像和表格的插入，能够满足不同场景下的需求。通过Stirling-PDF，开发者可以轻松创建高质量的PDF文件，提升工作效率。

### 入门示例

假设您是一名数据分析师，定期需要生成销售报告。使用Stirling-PDF，您可以编写一段简单的代码，将数据自动填充到预设的PDF模板中。以下是一个基本的示例：

```python
from stirling_pdf import PDF

pdf = PDF()
pdf.add_page()
pdf.set_font("Arial", size=12)
pdf.cell(200, 10, txt="销售报告", ln=True, align='C')
pdf.cell(200, 10, txt="总销售额: $10000", ln=True)
pdf.output("销售报告.pdf")
```

通过这段代码，您可以快速生成一份包含销售数据的PDF报告，省去了手动排版的麻烦。

### Stirling-PDF 0.36.2 bug fixes版本更新了什么

在Stirling-PDF 0.36.2版本中，主要进行了小幅增强和修复，包括CSRF漏洞修复和GH Action的更改。这些更新旨在提升项目的安全性和稳定性，确保开发者在使用时能够获得更好的体验。

### 更新日志

## 更新内容
### 小幅增强
- 修复了CSRF漏洞。
- 更改了GH Action设置。

**完整更新日志**: [v0.36.1...v0.36.2](https://github.com/Stirling-Tools/Stirling-PDF/compare/v0.36.1...v0.36.2)

### 总结

在Stirling-PDF 0.36.2版本中，开发团队进行了重要的安全修复和功能增强，确保了工具的可靠性和用户体验的提升。