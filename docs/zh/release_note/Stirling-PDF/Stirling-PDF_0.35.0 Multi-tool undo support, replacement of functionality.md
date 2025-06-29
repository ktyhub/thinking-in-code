# Stirling-PDF 0.35.0 Multi-tool undo support, replacement of functionality
### 为什么要使用Stirling-PDF

在数字化时代，PDF文件几乎无处不在，但处理这些文件却常常让人感到无奈。想象一下，你正在为一个重要的项目准备文档，却发现无法轻松编辑或注释这些PDF文件。Stirling-PDF的出现，正是为了打破这种困境。它不仅提供了强大的编辑功能，还能让用户在处理PDF时感受到前所未有的便捷与灵活。使用Stirling-PDF，您将不再被繁琐的操作所困扰，而是能够专注于创作与表达。

### Stirling-PDF是什么

Stirling-PDF是一个开源的本地PDF编辑器，旨在为用户提供简单而强大的PDF处理工具。它允许用户轻松地编辑、注释和管理PDF文件，支持多种功能，如文本编辑、图像插入和页面管理等。无论是个人用户还是团队协作，Stirling-PDF都能满足不同需求。

### 入门示例

想象一下，您是一名教师，正在为即将到来的课程准备讲义。您下载了一份PDF格式的教材，但发现需要添加一些注释和标记。使用Stirling-PDF，您可以轻松打开这份PDF，直接在上面添加文本框、插入图像，甚至修改已有的内容。通过简单的拖放操作，您可以快速调整页面顺序，确保最终的讲义完美无瑕。这样的场景不仅适用于教师，任何需要处理PDF文件的人都能从中受益。

### Stirling-PDF 0.35.0版本更新了什么

在最新的0.35.0版本中，Stirling-PDF引入了多工具的撤销（ctrl + z）和重做（ctrl + y）功能，极大地提升了用户体验。此外，OCR工具也进行了更换，虽然新工具缺少了一些旧版功能，但仍然使用Tesseract，用户无需进行配置更改。开发团队正在积极寻找更好的OCR工具，以便在未来的版本中提供更强大的功能。

### 更新日志

# 我们几天前刚刚在Product Hunt上发布了新版本！
请考虑给我们投票和关注！  
![Stirling PDF - Open source locally hosted web PDF editor | Product Hunt](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=641239&theme=light)

此次发布中，多工具现在支持撤销（ctrl + z）和重做（ctrl + y）功能，特别感谢为此做出贡献的开发者。此外，我们还更换了OCR工具。虽然新工具缺少了一些之前的功能，但仍然使用Tesseract，因此无需进行配置更改！我们正在调查更好的OCR工具以供未来使用。

## 变更内容

### Bug修复
- 修复了在归档提取过程中出现的“任意文件访问（Zip Slip）”问题。
- 修复了多工具中的分页插入功能。
- 修复了非多文件上传中的Array.from语法。

### 增强功能
- 新增多工具的撤销和重做选项。

### 小改进
- 修复了合并时输入文件覆盖的问题。

### 翻译更改
- 更新了翻译文件。

### 其他更改
- 将commons-io库从2.17.0更新至2.18.0。
- 更新了第三方许可证。

### 新贡献者
- NureddinFarzaliyev在项目中做出了首次贡献。

**完整更新日志**: [v0.34.0...v0.35.0](https://github.com/Stirling-Tools/Stirling-PDF/compare/v0.34.0...v0.35.0)

### 总结

Stirling-PDF的最新更新不仅增强了用户体验，还修复了多个关键问题，提升了软件的稳定性和功能性。新加入的撤销和重做功能为用户提供了更大的灵活性，而OCR工具的更换则为未来的改进奠定了基础。随着新贡献者的加入，Stirling-PDF的社区也在不断壮大，期待未来更多的创新与发展。