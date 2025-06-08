# hutool 5.8.36
### 为什么要使用hutool

在当今快速发展的软件开发环境中，开发者面临着越来越多的挑战：如何提高开发效率、如何减少代码冗余、如何确保代码的可维护性。Hutool的出现正是为了解决这些矛盾。它不仅提供了丰富的工具类库，帮助开发者快速实现常见功能，还能有效地减少重复代码的编写，让开发者能够专注于业务逻辑的实现。使用Hutool，开发者可以在繁忙的工作中找到一丝轻松，提升开发体验。

### hutool是什么

Hutool是一个Java工具类库，旨在简化Java开发过程。它提供了丰富的工具类，涵盖了字符串处理、文件操作、网络请求、加密解密等多个方面，极大地提高了开发效率。Hutool的设计理念是“简单、实用”，让开发者能够轻松上手，快速实现功能。

### 入门示例

假设你正在开发一个需要读取和解析CSV文件的应用程序。使用Hutool，你可以轻松实现这一功能。首先，添加Hutool依赖到你的项目中，然后使用以下代码读取CSV文件：

```java
List<List<String>> data = CsvUtil.getReader().read("path/to/your/file.csv");
for (List<String> row : data) {
    System.out.println(row);
}
```

这个简单的示例展示了Hutool如何帮助开发者快速处理CSV文件，而不需要编写繁琐的解析代码。

### hutool 5.8.36版本更新了什么

Hutool 5.8.36版本带来了多项新特性和bug修复。新增了BCUtil.decodeECPrivateKey方法和HtmlUtil.cleanEmptyTag方法，优化了GlobalDbSetting的默认配置读取规则，支持鸿蒙设备的UA解析。同时，修复了ProxyUtil的空指针问题、XmlUtil的转义调用错误、FileUtil的绝对路径判断问题等多个bug，提升了库的稳定性和可靠性。

### 更新日志

# 5.8.36(2025-02-18)

### 🐣新特性
- 增加BCUtil.decodeECPrivateKey方法
- 增加HtmlUtil.cleanEmptyTag方法
- 优化GlobalDbSetting默认配置读取规则，优先读取文件而非jar中的文件
- 删除StopChar类中存在的重复字符
- 支持鸿蒙设备UA解析

### 🐞Bug修复
- 修复ProxyUtil可能的空指针问题
- 修复XmlUtil转义调用方法错误，修复XmlEscape未转义单引号问题
- 修复FileUtil.isAbsolutePath没有判断smb路径问题
- 修复AbstractFilter没有检查参数长度问题

### 总结

Hutool 5.8.36版本通过新增特性和修复bug，进一步提升了工具库的功能和稳定性，为开发者提供了更好的使用体验。