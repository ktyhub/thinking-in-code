# JsonPath json-path-2.9.0
### JsonPath是什么

JsonPath是一种用于解析和查询JSON数据的表达式语言。它类似于XPath，但专门针对JSON格式的数据。通过JsonPath，开发者可以轻松地从复杂的JSON结构中提取所需的信息，而无需编写复杂的代码。

### 为什么要使用JsonPath?

使用JsonPath的原因有很多。首先，它简化了JSON数据的访问和操作，使得开发者能够快速获取所需的信息。其次，JsonPath的语法直观易懂，降低了学习成本。此外，JsonPath还支持多种操作，如过滤、排序和分组，使得处理JSON数据更加灵活和高效。

### JsonPath json-path-2.9.0版本更新了什么

在json-path-2.9.0版本中，进行了多项重要更新：

- 修复了CVE-2023-51074的漏洞。
- 更新了依赖项。
- 定义了JPMS的Automatic-Module-Name为json.path。
- 将json-smart版本从2.4.10提升至2.5.0。
- 修复了README.md中关于`$..book[?(@.price <= $['expensive'])]`的渲染错误。
- 移除了过时的Gradle约定用法。
- 检查下一个重要括号的存在性。
- 更新了版本信息。

### 更新日志

## 更新内容
- 修复了CVE-2023-51074的漏洞。
- 更新了依赖项。
- 定义了JPMS的Automatic-Module-Name为json.path。
- 将json-smart版本从2.4.10提升至2.5.0。
- 修复了README.md中关于`$..book[?(@.price <= $['expensive'])]`的渲染错误。
- 移除了过时的Gradle约定用法。
- 检查下一个重要括号的存在性。
- 更新了版本信息。

## 新贡献者
- lulunac27在#967中做出了首次贡献。
- twobiers在#985中做出了首次贡献。

**完整更新日志**: [json-path-2.8.0...json-path-2.9.0](https://github.com/json-path/JsonPath/compare/json-path-2.8.0...json-path-2.9.0)