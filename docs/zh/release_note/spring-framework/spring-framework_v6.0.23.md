# spring-framework v6.0.23

## ⭐ 新功能

- 高效处理条件HTTP请求 [#33379](https://github.com/spring-projects/spring-framework/issues/33379)

## 🐞 Bug 修复

- 修复错误的弱ETag验证 [#33376](https://github.com/spring-projects/spring-framework/issues/33376)
- `SimpleEvaluationContext` 未强制执行只读语义 [#33321](https://github.com/spring-projects/spring-framework/issues/33321)
- `ConversionService` 无法将原始数组转换为 `Object[]` [#33313](https://github.com/spring-projects/spring-framework/issues/33313)
- SpEL `Indexer` 在设置属性为索引失败时静默忽略 [#33311](https://github.com/spring-projects/spring-framework/issues/33311)
- 嵌套bean实例供应商调用未保留先前的工厂方法 [#33185](https://github.com/spring-projects/spring-framework/issues/33185)
- Mockito mock 错误地初始化为带有AspectJ切面的CGLIB代理 [#33141](https://github.com/spring-projects/spring-framework/issues/33141)
- "file:." 无法解析为 `java.nio.file.Path`（而普通的 "." 值解析为类路径根目录）[#33139](https://github.com/spring-projects/spring-framework/issues/33139)
- Trace和Span ID不再传播到RequestBodyAdvice beans [#33128](https://github.com/spring-projects/spring-framework/issues/33128)
- ConfigurationClassEnhancer在多次调用时未使用正确的ClassLoader [#33029](https://github.com/spring-projects/spring-framework/issues/33029)

## 📔 文档

- Spring Framework文档中Annotation-driven Listener Endpoints部分的拼写错误 [#33054](https://github.com/spring-projects/spring-framework/issues/33054)
- Spring Framework文档中Container Extension Points部分引用了错误的属性名称 [#33038](https://github.com/spring-projects/spring-framework/issues/33038)
- ApplicationContextEvent的javadoc中构造函数详情错误 [#33033](https://github.com/spring-projects/spring-framework/issues/33033)

## 🔨 依赖升级

- 升级到Reactor 2022.0.22 [#33324](https://github.com/spring-projects/spring-framework/issues/33324)
```