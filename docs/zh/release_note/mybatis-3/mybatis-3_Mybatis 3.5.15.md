# mybatis-3 Mybatis 3.5.15

## 更改

- XNode#toString() 应输出所有子节点。请参阅 [#3001](https://github.com/mybatis/mybatis-3/pull/3001) 和相关票据。
- 通过使用“set”而不是“list”来修复 `mappedColumnNames.contains` 的性能问题。请参阅 [#3023](https://github.com/mybatis/mybatis-3/pull/3023)。
- 修复与 `javassist` 相关的 osgi 问题。请参阅 [#3031](https://github.com/mybatis/mybatis-3/pull/3031)。
- 将阴影 OGNL 更新至 3.4.2 版本。请参阅 [#3035](https://github.com/mybatis/mybatis-3/pull/3035)。
- 在 SQL 类上新增生成动态 SQL 的支持方法。请参阅 [#2887](https://github.com/mybatis/mybatis-3/pull/2887)。
- 一般库更新。
- 一般文档更新。

## 构建

- 现在在 Github Actions 中展示来自 Java 11、17、21 和 22 的构建。代码目前仍兼容 Java 8。
- 更新易受攻击的 hsqldb 至 2.7.2，修复了由于较新支持导致的测试问题。注意，用户从未受到影响，但至少有一个用户的拉取请求尝试打开了，此外还有 renovate 和 dependabot 以及各种报告。
- 现在使用更多属性定义 pom 中的版本，以降低 renovate 提交拉取请求的频率。

## 网站

- 我们已迁移至 maven site 4.0.0，并使用 site xsd 2.0.0。这导致我们需要关闭网站的 PDF 文档功能。请暂时只使用我们的网站页面。
- 由于网站更改，如果有人发现任何问题，请务必报告。maven 的升级路径令人失望，我们相信已经正确设置，但会尽快修复发现的问题。对于这一情况，我们提前致歉，感谢大家在 maven 4 网站更改期间的理解和支持。
```