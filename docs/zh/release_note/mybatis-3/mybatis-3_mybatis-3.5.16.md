# mybatis-3 mybatis-3.5.16
```markdown
### 安全性：
- 防止 `Invocation` 被易受攻击的应用程序使用。 [#3115](https://github.com/mybatis/mybatis-3/issues/3115)

### Bug 修复：
- 当数据库 ID 解析失败时，使用了无效的绑定语句。 [#3040](https://github.com/mybatis/mybatis-3/issues/3040)

### 增强功能：
- 现在可以编写自定义映射包装器，以自定义带有点或括号的列名映射方式。 [#13](https://github.com/mybatis/mybatis-3/issues/13) [#3062](https://github.com/mybatis/mybatis-3/issues/3062)

### 性能提升：
- 改进了与虚拟线程（由 [Loom](https://openjdk.org/projects/loom/) 引入）之间的兼容性。
- 在执行默认（即基于顺序的）构造函数自动映射时减少了内存占用。 [#3113](https://github.com/mybatis/mybatis-3/issues/3113)

### 构建：
- 在 sources.jar 中包含了阴影库（OGNL 和 Javassist）。

请查看 [3.5.16 里程碑页面](https://github.com/mybatis/mybatis-3/issues?q=is%3Aclosed+milestone%3A3.5.16) 或 [提交日志](https://github.com/mybatis/mybatis-3/compare/mybatis-3.5.15...mybatis-3.5.16) 了解完整的更改列表。
```