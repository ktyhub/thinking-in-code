# mybatis-3 mybatis-3.5.8
以下是整理后的内容，已移除`@`符号，并转换为Markdown格式：

---

### 变更列表：

- 避免在将空字符串映射到`java.lang.Character`时出现`NullPointerException`。[#2368](https://github.com/mybatis/mybatis-3/pull/2368)
- 修复初始化静态对象时的错误参数，解决与[quarkus-mybatis](https://github.com/quarkiverse/quarkus-mybatis)的兼容性问题。[#2284](https://github.com/mybatis/mybatis-3/pull/2284)
- 性能改进。[#2297](https://github.com/mybatis/mybatis-3/issues/2297) [#2335](https://github.com/mybatis/mybatis-3/pull/2335) [#2340](https://github.com/mybatis/mybatis-3/pull/2340)
- 以及许多文档更新！

请参阅 [3.5.8 版本里程碑页面](https://github.com/mybatis/mybatis-3/issues?q=is%3Aclosed+milestone%3A3.5.8) 查看完整的变更列表。自3.5.7以来，没有已知的向后不兼容的变更。