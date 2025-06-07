# itext-java iText Core/Community 9.0.0
### 为什么要使用itext-java

在数字化时代，PDF文档的安全性和可操作性变得至关重要。然而，许多开发者在处理PDF时常常面临复杂的挑战：如何确保文档的安全性、如何高效地生成和修改PDF文件？itext-java的出现，正是为了解决这些矛盾。它不仅提供了强大的PDF处理能力，还能确保文档的安全性和合规性，让开发者在面对复杂的需求时游刃有余。

### itext-java是什么

itext-java是一个开源的Java库，专门用于创建和操作PDF文档。它提供了一系列功能强大的API，帮助开发者轻松生成、修改和验证PDF文件。无论是简单的文本添加，还是复杂的数字签名和加密，itext-java都能满足开发者的需求。

### 入门示例

想象一下，你是一名开发者，需要为公司生成合同文件。使用itext-java，你可以轻松创建一个PDF合同，添加公司logo、条款和条件，并在合同上添加数字签名以确保其合法性。以下是一个简单的代码示例：

```java
PdfWriter writer = new PdfWriter("contract.pdf");
PdfDocument pdf = new PdfDocument(writer);
Document document = new Document(pdf);
document.add(new Paragraph("合同条款..."));
document.close();
```

通过这段代码，你可以快速生成一个包含合同条款的PDF文件，省去了手动排版的麻烦。

### itext-java iText Core/Community 9.0.0版本更新了什么

iText Core 9.0.0版本引入了许多重要的新特性，包括对ISO/TS 320003和320004标准的支持，增强了PDF文档的安全性。此外，推出了数字签名验证模块，简化了PDF签名和验证的过程。API也进行了重大改进，使得创建和符合PDF/A及PDF/UA标准变得更加简单。最后，修复了一些bug，提升了整体性能和用户体验。

### 更新日志

对于本季度的发布，我们很高兴地宣布iText的新主要版本。iText Core 9.0引入了显著的新特性，支持新的规范，并修订了API，以满足开发者的需求。

我们增加了对ISO/TS 320003和320004标准的支持，使PDF文档更加安全。同时，推出了最终版的数字签名验证模块，以及一个新的API，方便获取页面中使用的图层，并改善了PDF/UA的签名功能。

需要注意的是，由于iText 9.0是一个主要版本，因此与iText 8不兼容。这是为了改善用户体验和减少技术负担。然而，由于iText 7和8奠定了坚实的基础，iText 9的API差异较小。iText知识库提供了详细的文档，帮助现有项目从早期版本迁移。

iText Core 9.0版本的主要新特性包括：

- 支持最新的ISO PDF文档安全标准。
- 完成的验证模块。
- 开发了获取页面中使用图层的API。

此外，API也进行了重大改进，简化了PDF/A和PDF/UA的创建和符合过程，提升了整体性能和用户体验。

### 总结

iText Core 9.0版本的更新不仅引入了新的安全标准和功能模块，还通过API的改进提升了开发者的使用体验。这些变化将帮助开发者更高效地处理PDF文档，确保其安全性和合规性。