# Stirling-PDF 0.43.0 Code cleanups and general changes
### 为什么要使用Stirling-PDF

在当今数字化的时代，PDF文件的使用已经无处不在。然而，许多用户在处理PDF时面临着各种挑战：文件大小、格式兼容性、以及如何高效地提取和转换内容等。Stirling-PDF的出现，正是为了打破这些障碍。它不仅提供了强大的功能来处理PDF文件，还能在用户体验上做到极致。想象一下，你正在进行一个重要的项目，时间紧迫，而你却被繁琐的PDF操作所困扰。Stirling-PDF的高效性和灵活性，能够帮助你迅速解决问题，提升工作效率。

### Stirling-PDF是什么

Stirling-PDF是一个开源项目，旨在为用户提供强大的PDF处理工具。它支持多种功能，包括PDF的生成、转换、压缩和分析等。通过简单的配置和易于使用的接口，用户可以轻松地在不同的环境中集成和使用这些功能。无论是开发者还是普通用户，Stirling-PDF都能满足他们对PDF处理的需求。

### 入门示例

假设你是一名开发者，正在为一个在线文档管理系统构建功能。你需要将用户上传的Word文档转换为PDF格式。使用Stirling-PDF，你只需几行代码即可实现这一功能：

```java
import org.stirlingtools.pdf.PDFConverter;

public class DocumentManager {
    public void convertToPDF(String inputFilePath, String outputFilePath) {
        PDFConverter converter = new PDFConverter();
        converter.convert(inputFilePath, outputFilePath);
    }
}
```

在这个示例中，用户只需调用`convertToPDF`方法，便能轻松将Word文档转换为PDF。这种简洁的接口设计，使得开发者能够快速集成PDF处理功能，提升开发效率。

### Stirling-PDF 0.43.0版本更新了什么

在Stirling-PDF 0.43.0版本中，进行了大量的后端更改以优化单点登录（SSO）和配置。修复了在首次启动时未显示分析提示的错误，新增了图像灰度转换的压缩支持，并在settings.yml中支持动态路径配置。此外，对于本地用户界面，系统会检查8080端口是否被占用，并尝试使用8081等其他端口。语言栏的用户界面也进行了更新。

### 更新日志

- 对我们的单点登录（SSO）和配置进行了大量后端更改，如有任何问题请告知我们！
- 修复了首次启动时未显示分析提示的错误。
- 压缩功能现在支持将图像转换为灰度。
- 在settings.yml中支持unoconvert和weasyprint的动态路径。
- 对于本地用户界面用户，我们现在会检查8080端口是否被占用，并尝试使用8081等其他端口。
- 语言栏有了新的用户界面。

### 总结

在Stirling-PDF 0.43.0版本的更新中，开发团队针对用户反馈进行了多项重要改进，提升了软件的稳定性和用户体验。这些更新不仅修复了已知问题，还增加了新功能，确保用户在处理PDF文件时能够更加高效和便捷。