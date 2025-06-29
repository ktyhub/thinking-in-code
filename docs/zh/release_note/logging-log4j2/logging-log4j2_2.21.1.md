# logging-log4j2 2.21.1
```markdown
这个补丁版本仅包含修复一个阻止 `log4j-jcl` 连接到 `commons-logging` 的错误。

Log4j 2.21.1 API 以及其他工件保持与之前版本的二进制兼容性。

Apache Log4j 2.21.1 需要 Java 8 运行。构建需要 JDK 11 并生成可重现的二进制文件。

有关 Apache Log4j 2 的完整信息，包括如何提交错误报告、补丁、获取支持或改进建议，请参见 [Apache Log4j 2 网站](http://logging.apache.org/log4j/2.x/)。

### 修复

- 修复了 Apache Commons Logging (JCL) 桥接：`log4j-jcl`。 [#1865](https://github.com/apache/logging-log4j2/issues/1865)
```