# selenium Selenium 4.23.0
### Selenium是什么

Selenium是一个开源的自动化测试工具，主要用于Web应用程序的测试。它支持多种浏览器和操作系统，能够模拟用户在浏览器中的操作，如点击、输入文本、导航等。Selenium的灵活性和强大功能使其成为开发者和测试人员的热门选择。

### 为什么要使用Selenium？

使用Selenium的原因有很多。首先，它支持多种编程语言，包括Java、Python、C#等，使得开发者可以使用自己熟悉的语言进行测试。其次，Selenium能够与多种浏览器兼容，确保测试在不同环境下的一致性。此外，Selenium的社区活跃，提供了丰富的文档和支持，帮助用户解决问题并提高测试效率。

### Selenium 4.23.0版本更新了什么

在Selenium 4.23.0版本中，进行了多项重要更新和改进，包括：

- **构建准备**：为Selenium 4.23.0的发布做准备。
- **高层次日志API**：为Java添加了高层次的日志API。
- **会话请求超时**：在RemoteNewSessionQueue中将session-request-timeout设置为客户端的readTimeout。
- **UTF-8编码一致性**：对Java代码进行了UTF-8编码的一致性和代码增强。
- **自定义持续时间**：为Actions构造函数添加了自定义持续时间。
- **错误回溯**：在Ruby中添加了错误的回溯位置和原因。
- **Android特定参数合并**：在Chrome选项中合并Android特定参数。
- **WebSocket客户端更新**：在Python中将websocket-client v.1.8.0添加到setup.py。

### 更新日志

## 详细组件变更日志

**Java** | **Python** | **DotNet** | **Ruby** | **JavaScript** | **IEDriver**

## 更新内容

- [构建] 准备发布Selenium 4.23.0
- [bidi][java] 添加高层次日志API
- [grid] 在RemoteNewSessionQueue中将session-request-timeout设置为客户端的readTimeout
- [java] 一致的UTF-8编码和代码增强
- [java] Actions构造函数的自定义持续时间
- [rb] 添加错误的回溯位置和原因
- [java] 合并Chrome选项中的Android特定参数
- [py] 修复RelativeBy#near以接受两个参数
- [bidi][js] 添加高层次脚本固定API
- [bidi][js] 添加DOM变更处理程序
- [py] 从sdist中移除预编译的二进制文件
- [bidi] 添加源类型到日志条目
- [rb] 更新selenium管理器类型
- [dotnet] 返回WebDriver中的受保护同步Execute方法
- [bidi][js] 添加方法以在脚本模块中添加/移除处理程序
- [py] 禁用Firefox配置文件中的严格时间戳

以上是Selenium 4.23.0版本的一些关键更新，旨在提升用户体验和功能性。