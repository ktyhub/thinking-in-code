# mybatis-3 mybatis-3.5.9

### 变更列表：

- 为 `<foreach />` 添加了 `nullable` 属性。如果启用，当集合为 `null` 时会跳过迭代，而不是抛出异常。要全局启用此功能，请在配置中设置 `nullableOnForEach=true`。[#1883](https://github.com/mybatis/mybatis-3/pull/1883)

我们还将 Log4J 依赖版本更新到了 2.17.0。  
请注意，MyBatis 的 `pom.xml` 文件中 Log4J 依赖的范围是“可选的”，理解这意味着什么非常重要。

- 你可以在不使用 Log4J 的情况下使用 MyBatis。
- 将 MyBatis 添加到项目的依赖项中并不会隐式引入 Log4J。
- 更新 MyBatis 版本并不会提升项目的安全性，因为它不影响项目中的 Log4J 版本。
- 无论你使用的是哪个版本的 MyBatis，都需要单独更新 Log4J 版本。

请查看 [3.5.9 版本页面](https://github.com/mybatis/mybatis-3/issues?q=is%3Aclosed+milestone%3A3.5.9) 以获取完整的变更列表。自 3.5.8 以来，没有已知的不兼容性变更。
```