# retrofit 2.11.0
### Retrofit是什么？

Retrofit是一个用于Android和Java的类型安全的HTTP客户端，它简化了网络请求的过程。通过定义接口和注解，Retrofit能够将HTTP API转换为Java接口，使得开发者能够以更简洁的方式进行网络通信。它支持多种数据格式，包括JSON、XML等，并且可以与各种解析库（如Gson、Moshi等）无缝集成。

### 为什么要使用Retrofit？

使用Retrofit的原因有很多。首先，它提供了简洁的API，使得网络请求的代码更加易读和易维护。其次，Retrofit支持异步请求，能够有效提升应用的响应速度和用户体验。此外，Retrofit的类型安全特性可以在编译时捕获错误，减少运行时崩溃的风险。最后，Retrofit拥有强大的社区支持和丰富的文档，使得开发者能够快速上手并解决问题。

### Retrofit 2.11.0版本更新了什么？

在Retrofit 2.11.0版本中，主要更新包括：

- 新增了公共的`OptionalConverterFactory`，允许在其他消耗所有类型的转换器（如Moshi、Gson、Jackson等）之前安装它。
- 修复了一个问题，确保从解析方法注解失败中抛出的异常可以被多个线程/调用者观察到。之前只有第一个调用者能够看到实际的解析异常，而其他调用者则会收到一个模糊的`ClassCastException`。

### 更新日志

**新功能**

- 内置的`OptionalConverterFactory`现在是公共的，允许在其他消耗所有类型的转换器（例如Moshi、Gson、Jackson等）之前安装它。

**修复**

- 确保从解析方法注解失败中抛出的异常可以被多个线程/调用者观察到。之前只有第一个调用者能够看到实际的解析异常，而其他调用者则会收到一个模糊的`ClassCastException`。