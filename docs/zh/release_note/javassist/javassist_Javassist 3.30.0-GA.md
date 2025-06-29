# javassist Javassist 3.30.0-GA
### javassist是什么

Javassist（Java Programming Assistant）是一个开源的Java字节码编辑库，允许开发者在运行时动态地修改Java类的结构和行为。它提供了简单的API，使得字节码操作变得更加容易，适合于需要动态生成或修改Java类的场景，如AOP（面向切面编程）、框架开发和代码生成等。

### 为什么要使用javassist?

使用Javassist的主要原因包括：

- **动态性**：可以在运行时修改类的结构，适合需要灵活性的应用场景。
- **简易性**：相较于其他字节码操作库，Javassist提供了更高层次的API，使得开发者可以更轻松地进行字节码操作。
- **性能**：Javassist在性能上表现良好，适合高性能的应用需求。
- **广泛应用**：被许多流行的框架（如Hibernate、Spring等）所使用，具有良好的社区支持和文档。

### javassist 3.30.0-GA版本更新了什么

在Javassist 3.30.0-GA版本中，进行了以下更新：

- 尝试修复了一个简单的链接错误。
- 修复了Java 21中ConstPool API在没有参数名称的MethodParameters属性时抛出NPE的问题。
- 修复了MemberResolver.lookupMethod在超类具有更精确的方法时的bug。
- 修复了非标准[new]指令替换中的问题。
- 移除了TransformNewClass中的DUP检查。
- 更新了tutorial.html中的javassist.util.HotSwapper。
- 修复了insertAuxInitializer可能导致的栈高度不一致问题。
- 进行了最小的更改，使IDEA 2023.2能够开箱即用。

### 更新日志

## 更新内容
- 尝试修复简单的链接错误。
- 修复了Java 21中ConstPool API在没有参数名称的MethodParameters属性时抛出NPE的问题。
- 修复了MemberResolver.lookupMethod在超类具有更精确的方法时的bug。
- 修复了非标准[new]指令替换中的问题。
- 移除了TransformNewClass中的DUP检查。
- 更新了tutorial.html中的javassist.util.HotSwapper。
- 修复了insertAuxInitializer可能导致的栈高度不一致问题。
- 进行了最小的更改，使IDEA 2023.2能够开箱即用。

## 新贡献者
- 一位新贡献者在修复简单链接错误中做出了首次贡献。
- 另一位新贡献者在修复非标准[new]指令替换中的问题时做出了首次贡献。
- 还有一位新贡献者在更新tutorial.html中的javassist.util.HotSwapper时做出了首次贡献。

**完整更新日志**: [rel_3_29_2_ga...rel_3_30_0_ga](https://github.com/jboss-javassist/javassist/compare/rel_3_29_2_ga...rel_3_30_0_ga)