# graphql-java 22.3
### GraphQL-Java是什么

GraphQL-Java是一个用于在Java环境中实现GraphQL的库。它提供了一种灵活的方式来构建API，使得客户端能够精确地请求所需的数据，而不必担心过多或过少的数据传输。GraphQL-Java遵循GraphQL规范，允许开发者定义数据类型、查询和变更操作，从而实现高效的数据获取和管理。

### 为什么要使用GraphQL-Java？

使用GraphQL-Java的原因有很多。首先，它允许客户端根据需求精确请求数据，减少了不必要的数据传输。其次，GraphQL的强类型系统使得API的文档化和维护变得更加简单。此外，GraphQL-Java支持实时数据更新和订阅功能，增强了应用的互动性和实时性。最后，GraphQL-Java与Spring等流行框架的兼容性，使得它在Java生态系统中得到了广泛应用。

### GraphQL-Java 22.3版本更新了什么

在22.3版本中，GraphQL-Java进行了重要的bug修复，特别是针对`@defer`指令的实现。此次更新没有引入破坏性变化。以下是一些关键更新内容：

- 集成了`@defer`指令和DataLoader。
- 引入了可变的IncrementalExecutionResult。

### 更新日志

这是一个专注于`@defer`指令实现的bug修复版本。此次发布没有破坏性变化。

感谢社区持续报告问题和提出改进建议，这些都帮助GraphQL-Java变得更好！

#### 关键变化

- `@defer`和DataLoader集成。
- 可变的IncrementalExecutionResult。

#### 变更内容

- 将google-github-actions/auth从2.1.3升级到2.1.4。
- 由贡献者实现的可变IncrementalExecutionResult。
- 由贡献者实现的`@defer`数据加载器集成。
- 将net.bytebuddy:byte-buddy从1.14.18升级到1.15.1。
- 将google-github-actions/auth从2.1.4升级到2.1.5。
- 将net.bytebuddy:byte-buddy-agent从1.14.18升级到1.15.1。
- 将io.projectreactor:reactor-core从3.6.8升级到3.6.9。
- 将org.junit.jupiter:junit-jupiter从5.10.3升级到5.11.0。

**完整更新日志**: [v22.2...v22.3](https://github.com/graphql-java/graphql-java/compare/v22.2...v22.3)