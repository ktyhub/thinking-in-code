# gson Gson 2.11.0
### Gson是什么

Gson是一个由Google开发的Java库，用于将Java对象转换为JSON格式，反之亦然。它提供了一种简单而高效的方式来处理JSON数据，支持复杂的数据结构和自定义对象的序列化与反序列化。

### 为什么要使用Gson？

使用Gson的原因包括：

- **易用性**：Gson的API设计简单，易于上手，适合快速开发。
- **性能**：Gson在处理大数据量时表现出色，能够高效地进行序列化和反序列化。
- **灵活性**：支持自定义序列化和反序列化，可以处理复杂的对象结构。
- **兼容性**：与Java的各种版本兼容，适用于Android等多种平台。

### Gson 2.11.0版本更新了什么

Gson 2.11.0版本带来了多项重要更新和改进，具体包括：

- 添加了默认的ProGuard / R8规则，简化了Android项目的配置。
- 在Android上，Gson现在要求API级别21或更高。
- 新增了`Strictness` API，允许开发者严格遵循JSON规范进行解析。
- 引入了新的`FormattingStyle`类，以便配置JSON输出中的换行。
- `TypeToken`不再默认捕获类型变量，减少了常见问题的发生。
- 增加了对匿名和局部类的序列化支持。
- 添加了对`com.google.errorprone:error_prone_annotations`的依赖。
- 许多异常消息现在引用了故障排除指南。
- 正式记录了其他JVM语言可能不完全支持的情况。
- 确保`JsonElement#toString`生成有效的JSON输出。

### 更新日志

#### 最重要的变化

- 添加了默认的ProGuard / R8规则。如果您使用ProGuard或R8（例如用于Android项目），如果您的类具有无参数构造函数并使用`@SerializedName`注解字段，您可能不再需要任何特殊的Gson配置。
- 在Android上，Gson现在要求API级别21或更高。
- 新增了`Strictness` API。Gson的某些API默认仍然宽松，但您现在可以使用新添加的方法`GsonBuilder#setStrictness`、`JsonReader#setStrictness`和`JsonWriter#setStrictness`，并使用`Strictness.STRICT`来覆盖此行为，从而严格遵循JSON规范进行解析。
- 新增了`FormattingStyle`类，以允许配置JSON输出中的换行。可以使用`GsonBuilder#setFormattingStyle`和`JsonWriter#setFormattingStyle`进行设置。
- `TypeToken`不再默认捕获类型变量。这以前是常见问题的来源。新抛出的异常引用了故障排除指南文章，详细解释了这一点并提供了更新受影响代码的建议。
- 增加了对匿名和局部类的序列化支持，使用自定义适配器。
- 添加了对`com.google.errorprone:error_prone_annotations`的依赖。您的项目可以使用Maven或Gradle依赖排除来移除Gson的传递性依赖。
- 许多异常消息现在引用了故障排除指南。反馈关于故障排除指南的意见是受欢迎的。
- 正式记录了其他JVM语言可能不完全支持的情况。
- 确保`JsonElement#toString`生成有效的JSON输出。

#### 其他变化

##### Bug修复

- 修复了大`BigInteger`值的`JsonPrimitive#equals`结果不正确的问题。
- 修复了大`BigDecimal`值的`JsonPrimitive#equals`结果不正确的问题。
- 修复了`JsonReader`在处理格式错误的Unicode转义序列时抛出`NumberFormatException`而不是`MalformedJsonException`的问题。
- 修复了`TypeToken#getParameterized`在非泛型类型上返回虚假`ParameterizedType`的问题。
- 修复了Java Record适配器在GraalVM Native Image上无法正常工作的情况。
- 修复了`JsonWriter#name`在没有当前JSON对象时未抛出异常的问题。
- 修复了`Gson#getDelegateAdapter`在`@JsonAdapter`上未正常工作的情况。
- 修复了在反序列化`BigDecimal`和`BigInteger`时未强制执行限制的问题。
- 修复了`GsonBuilder#setDateFormat`未拒绝无效日期格式的问题。
- 修复了`GsonBuilder#setDateFormat`未拒绝无效日期样式的问题。
- 修复了`GsonBuilder#setDateFormat`忽略部分默认样式的问题。
- 修复了`TypeToken#isAssignableFrom`在某些情况下抛出`AssertionError`的问题。
- 修复了日期适配器在解析后未恢复时区的问题。
- 修复了`TypeToken#equals`在某些情况下错误地返回`false`的问题。
- 修复了`pom.xml`中的不正确继承URL。

##### 性能改进

- 稍微减少了基于反射的适配器的内存使用。
- 改进了`ToNumberPolicy#LONG_OR_DOUBLE`的解析速度。

##### Gson维护

- 将许多单元测试更改为使用Truth而不是JUnit进行断言。
- 配置了Error Prone以在编译时自动检查错误。
- 简化了测试中的预期异常处理。
- 为GraalVM Native Image添加了集成测试。
- 根据Google风格指南格式化代码并配置Spotless。
- 使Maven构建可重现。
- 移除了内部`DateTypeAdapter`类以减少代码重复。
- 通过Dependabot更新了依赖项和插件。

##### GitHub仓库

- 将默认分支从`master`重命名为`main`。
- 启用了[GitHub讨论](https://github.com/google/gson/discussions)。
- 添加了GitHub拉取请求模板。
- 添加了Android API兼容性检查。

##### 其他

- 根据需要在Gson方法中添加了`@CanIgnoreReturnValue`。
- 各种文档和测试改进及拼写错误修复。