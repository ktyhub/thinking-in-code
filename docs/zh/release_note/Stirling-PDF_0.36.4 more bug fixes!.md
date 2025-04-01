# Stirling-PDF 0.36.4 more bug fixes!
### 为什么要使用Stirling-PDF

在数字化时代，PDF文件已成为信息传递的重要载体。然而，许多用户在处理PDF时常常面临各种挑战，比如合并文件、转换格式或修复错误。Stirling-PDF的出现，正是为了打破这些障碍。它不仅提供了强大的功能，还能有效解决用户在PDF处理过程中遇到的矛盾与困扰。想象一下，您在工作中需要快速合并多个PDF文件，却发现现有工具繁琐且不够灵活，Stirling-PDF的便捷性和高效性将为您带来前所未有的体验。

### Stirling-PDF是什么

Stirling-PDF是一个开源工具，旨在简化PDF文件的处理。它允许用户轻松合并、转换和编辑PDF文件，提供了友好的用户界面和强大的功能，适合开发者和普通用户使用。通过Stirling-PDF，您可以高效地管理和操作PDF文档，提升工作效率。

### 入门示例

假设您是一名项目经理，需要将多个项目报告合并成一个PDF文件以便于分享。使用Stirling-PDF，您只需将所有报告拖放到应用程序中，点击“合并”按钮，几秒钟后，您就能得到一个整洁的PDF文件。此外，您还可以将图像文件转换为PDF格式，方便地将视觉资料与文本报告结合在一起，提升报告的专业性。

### Stirling-PDF 0.36.4 more bug fixes!

在最新的0.36.4版本中，Stirling-PDF进行了多项重要的bug修复和功能增强。主要更新包括修复了PDF合并过程中的多个错误，改进了图像到PDF的转换功能，优化了拖放操作的用户界面，并移除了冗余的日志记录功能。此外，更新还提升了代码的整体稳定性和性能。

### 更新日志

更多的PDF合并错误修复和其他各种bug修复！

## 变更内容

### Bug修复
- 修复：在init.sh中重命名LANGS变量，以避免与LANGS环境变量冲突。
- 修复：修正图像到PDF合并转换类型。
- 修复：修复拖放错误并清理用户界面。

### 增强功能
- 移除直接日志记录，改为使用Lombok的@Slf4j。

### 次要增强
- 将googleJavaFormat从1.22.0升级到1.25.2。
- 通过移除draggable.js修复draggableElement为空的问题。

### 翻译更改
- 更新messages_de_DE.properties文件。

### 其他更改
- 将io.github.pixee:java-security-toolkit从1.2.0升级到1.2.1。
- 将org.springframework.security:spring-security-saml2-service-provider从6.4.1升级到6.4.2。
- 将io.micrometer:micrometer-core从1.14.1升级到1.14.2。
- 将org.springframework:spring-webmvc从6.2.0升级到6.2.1。
- 更新第三方许可证。

**完整更新日志**: [v0.36.3...v0.36.4](https://github.com/Stirling-Tools/Stirling-PDF/compare/v0.36.3...v0.36.4)

### 总结

在Stirling-PDF的最新版本中，开发团队不仅修复了多个关键bug，还对用户体验进行了优化，确保用户在处理PDF文件时更加顺畅和高效。无论是合并文件、转换格式，还是提升界面友好性，这些更新都为用户提供了更好的使用体验。