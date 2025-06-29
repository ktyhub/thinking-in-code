# struts STRUTS_7_0_0
### 为什么要使用struts

在当今快速发展的技术环境中，开发者面临着无数选择，如何在众多框架中找到最合适的工具成为了一个亟待解决的难题。Struts作为一个成熟的Java Web框架，凭借其强大的功能和灵活的架构，成为了许多开发者的首选。然而，使用Struts的决策并非没有争议。有人认为它的学习曲线陡峭，配置繁琐，甚至在某些情况下可能导致性能瓶颈。但正是这种矛盾，使得Struts在开发者社区中引发了广泛的讨论和探索。究竟Struts能否在复杂的项目中提供高效的解决方案？让我们一探究竟。

### struts是什么

Struts是一个开源的Java Web应用框架，旨在简化企业级应用程序的开发。它基于MVC（模型-视图-控制器）设计模式，提供了一种清晰的分离关注点的方法，使得开发者能够更高效地管理复杂的应用程序。Struts的核心组件包括Action类、Form Bean、Action Mapping和JSP标签库等，帮助开发者快速构建可维护和可扩展的Web应用。

### 入门示例

想象一下，你正在开发一个在线购物网站。用户需要能够浏览商品、添加到购物车并进行结账。使用Struts，你可以创建一个简单的购物车功能。首先，定义一个Action类来处理用户的请求，例如`AddToCartAction`。在这个类中，你可以获取用户选择的商品信息，并将其添加到购物车中。接着，使用JSP页面展示购物车的内容，并提供结账的选项。通过这种方式，Struts帮助你组织代码，使得每个部分的职责清晰，便于维护和扩展。

### struts STRUTS_7_0_0版本更新了什么

在STRUTS_7_0_0版本中，主要更新包括修复了ServletDispatcherResult添加的参数暴露问题，标记DWR插件为弃用，暴露最终位置作为请求属性FORWARD_SERVLET_PATH。此外，始终对主分支运行Sonar扫描，并在由Dependabot创建的PR中跳过Sonar扫描。最后，使用AND而非OR来检查Sonar的先决条件。

### 更新日志

## 更新内容
- 修复了ServletDispatcherResult添加的参数暴露问题。
- 将DWR插件标记为弃用。
- 将最终位置暴露为请求属性FORWARD_SERVLET_PATH。
- 始终对主分支运行Sonar扫描。
- 跳过由Dependabot创建的PR的Sonar扫描。
- 使用AND而非OR来检查Sonar的先决条件。

## 依赖项
- 将github/codeql-action从3.27.0升级到3.27.1。
- 将maven升级到3.9.9，wrapper升级到3.3.2。
- 将github/codeql-action从3.27.1升级到3.27.4。
- 将maven-surefire-plugin.version从3.5.1升级到3.5.2。
- 将jackson.version从2.18.0升级到2.18.2。
- 将org.apache.maven.plugins:maven-project-info-reports-plugin从3.7.0升级到3.8.0。
- 将org.apache.maven.plugins:maven-dependency-plugin从3.8.0升级到3.8.1。
- 将actions/setup-java从3升级到4。
- 将com.thoughtworks.xstream:xstream从1.4.20升级到1.4.21。
- 将log4j2.version从2.24.1升级到2.24.2。

**完整的更新日志**: [查看更新日志](https://github.com/apache/struts/compare/STRUTS_7_0_0_M10...STRUTS_7_0_0)

### 总结

在STRUTS_7_0_0版本中，开发团队进行了多项重要更新，包括修复参数暴露问题、标记弃用插件、优化Sonar扫描流程以及依赖项的升级。这些改进不仅提升了框架的稳定性和安全性，也为开发者提供了更好的使用体验。