# spring-framework v6.1.11
```markdown
## ⭐ 新功能

- 确保在 SpEL 的 `ReflectionHelper` 中，`MethodHandle` 的可变参数组件类型不为 `null` [#33193](https://github.com/spring-projects/spring-framework/issues/33193)
- 在响应期间遇到 Reactor-Netty 的 `PrematureCloseException` 时，WebClient 异常信息混乱 [#33127](https://github.com/spring-projects/spring-framework/issues/33127)
- 当发现无效的 factoryBeanObjectType 属性时，在异常中包含 bean 名称 [#33117](https://github.com/spring-projects/spring-framework/issues/33117)
- 为响应式缓存切面使用错误处理器 [#33073](https://github.com/spring-projects/spring-framework/pull/33073)
- `getTypeForFactoryMethod` 应捕获 `NoClassDefFoundError` [#33075](https://github.com/spring-projects/spring-framework/issues/33075)

## 🐞 Bug 修复

- SpEL 无法调用带数组的可变参数 `MethodHandle` 函数 [#33191](https://github.com/spring-projects/spring-framework/issues/33191)
- SpEL 无法调用带零可变参数的 `MethodHandle` 函数 [#33190](https://github.com/spring-projects/spring-framework/issues/33190)
- 嵌套的 bean 实例供应者调用不保留以前的工厂方法 [#33180](https://github.com/spring-projects/spring-framework/issues/33180)
- `DefaultErrorResponseBuilder` 未实现 `headers(Consumer)` [#33156](https://github.com/spring-projects/spring-framework/pull/33156)
- 修复 Set 方法参数违规的适配问题 [#33150](https://github.com/spring-projects/spring-framework/pull/33150)
- 使用 kotlinx-serialization 时，Web 控制器调用无效主体导致 500 而不是 400 [#33138](https://github.com/spring-projects/spring-framework/issues/33138)
- "file:." 无法解析为 `java.nio.file.Path` （而普通的 "." 值解析为类路径根） [#33124](https://github.com/spring-projects/spring-framework/issues/33124)
- Mockito 模拟错误地初始化为带 AspectJ 切面的 CGLIB 代理 [#33113](https://github.com/spring-projects/spring-framework/issues/33113)
- 修复当 adaptConstraintViolations=true 时返回值验证中的 ClassCastException [#33105](https://github.com/spring-projects/spring-framework/pull/33105)
- Spring 协程 AOP 不兼容 `@Transactional` [#33095](https://github.com/spring-projects/spring-framework/issues/33095)
- ReactorClientHttpConnector 为每个请求创建新的 HttpClient [#33093](https://github.com/spring-projects/spring-framework/issues/33093)
- 请求体建议 bean 不再传播 Trace 和 Span IDs [#33091](https://github.com/spring-projects/spring-framework/issues/33091)
- 如果 bean 定义为 null，`LocalContainerEntityManagerFactoryBean` 的早期初始化失败 [#33082](https://github.com/spring-projects/spring-framework/issues/33082)
- 如果原因是 `null`，`ReactorNettyClientRequest.convertException` 应包括原始异常 [#33080](https://github.com/spring-projects/spring-framework/issues/33080)
- SpEL 错误地按逗号拆分字符串参数以调用 `Object...` 可变参数方法 [#33013](https://github.com/spring-projects/spring-framework/issues/33013)
- 如果使用字节数组，ProtobufMessageConverter 无法解析 JSON 负载 [#27408](https://github.com/spring-projects/spring-framework/issues/27408)

## 📔 文档

- 统一 URI 编码部分的措辞 [#33166](https://github.com/spring-projects/spring-framework/pull/33166)
- 记录 `ModelMap` 不是 WebFlux 中支持的参数类型 [#33107](https://github.com/spring-projects/spring-framework/issues/33107)
- Spring 框架文档中方法注入部分的示例引用了错误的 bean 名称 [#33096](https://github.com/spring-projects/spring-framework/issues/33096)
- 资源写入器不考虑 `InputStreamResource` 的子类以绕过内容长度 [#33089](https://github.com/spring-projects/spring-framework/issues/33089)
- 改进 FreeMarker 支持中有关编码的文档 [#33071](https://github.com/spring-projects/spring-framework/issues/33071)
- WebFlux 中的验证失败异常与文档不匹配 [#33061](https://github.com/spring-projects/spring-framework/issues/33061)

## 🔨 依赖升级

- 升级到 Kotlin 1.9.24 [#33177](https://github.com/spring-projects/spring-framework/issues/33177)
- 升级到 Kotlin Serialization 1.6.3 [#33175](https://github.com/spring-projects/spring-framework/issues/33175)
- 升级到 Micrometer 1.12.8 [#33168](https://github.com/spring-projects/spring-framework/issues/33168)
- 升级到 Reactor 2023.0.8 [#33169](https://github.com/spring-projects/spring-framework/issues/33169)

## ❤️ 贡献者

感谢所有参与此次发布的贡献者：
TAKETODAY、hunhee98、imvtsl、snussbaumer 和 zizare
```