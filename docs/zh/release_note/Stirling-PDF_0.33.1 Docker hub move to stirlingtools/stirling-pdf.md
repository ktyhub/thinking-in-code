# Stirling-PDF 0.33.1 Docker hub move to stirlingtools/stirling-pdf
### 为什么要使用Stirling-PDF

在这个信息爆炸的时代，如何高效地生成和处理PDF文档成为了许多开发者面临的挑战。Stirling-PDF的出现，正是为了打破这一困境。它不仅提供了强大的功能，还能让开发者在处理PDF时避免繁琐的步骤。然而，许多开发者在选择工具时常常陷入选择的矛盾：是选择功能强大但复杂的工具，还是选择简单易用但功能有限的工具？Stirling-PDF恰好填补了这一空白，成为了一个既强大又易于上手的解决方案。

### Stirling-PDF是什么

Stirling-PDF是一个开源的PDF生成和处理工具，旨在帮助开发者快速创建和操作PDF文档。它提供了丰富的功能，包括文本、图像和表格的处理，支持多种格式的输入和输出，极大地简化了PDF文档的生成过程。

### 入门示例

想象一下，你正在开发一个在线报告生成器，用户可以上传数据并生成PDF格式的报告。使用Stirling-PDF，你可以轻松地将用户上传的CSV文件转换为美观的PDF文档。只需几行代码，你就可以将数据渲染为表格，并添加图表和图像，使报告更加生动。这样，用户不仅能获得所需的信息，还能享受到良好的视觉体验。

### Stirling-PDF 0.33.1 Docker hub move to stirlingtools/stirling-pdf

在最新的版本更新中，Stirling-PDF将Docker镜像从`frooodle/s-pdf`迁移到了`stirlingtools/stirling-pdf`，并统一了GitHub上的命名。未来将同时在两个平台发布，以便用户有足够的时间进行迁移。请务必切换到新的Docker镜像`stirlingtools/stirling-pdf`。

### 更新日志

我们将Docker镜像从`frooodle/s-pdf`迁移到`stirlingtools/stirling-pdf`，并在GitHub上进行了相同的命名更改，使用完整的stirling-pdf名称而不是简写。未来我们将同时在两个地方发布，以便用户有时间进行迁移，最终将切换到新的Docker镜像`stirlingtools/stirling-pdf`。

#### 变更内容

**错误修复**
- 修复了“添加图像”功能导致图像随机更改的错误。
- 修复了将canvas PDF转换为CSV的功能。

**完整更新日志**：可查看[此处](https://github.com/Stirling-Tools/Stirling-PDF/compare/v0.33.0...v0.33.1)。

### 总结

在最新的更新中，Stirling-PDF进行了重要的命名迁移，并修复了一些关键的错误，确保用户在使用过程中获得更流畅的体验。通过这些改进，Stirling-PDF不仅提升了功能的稳定性，也为用户提供了更便捷的使用方式。