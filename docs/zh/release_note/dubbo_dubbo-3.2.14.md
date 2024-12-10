# dubbo dubbo-3.2.14
## 变化内容

### 新特性

- 通过#14285和#14281，支持在ServiceDiscovery中禁用Curator EnsembleTracker。

### Bug修复

- 通过#14235，修复了URL中带有问号参数时，参数解析错误的问题。
- 通过#14257，修复了当dubbo.protocol.accesslog的配置为false时，禁用accesslog的问题。
- 通过#14261，修复了triple reactor调用抛出"Too many response for unary method"异常的问题。
- 通过#14247，修复了与spring boot 3一起编译uber jar失败的问题。
- 通过#14255，修复了DubboRelaxedBinding2AutoConfiguration和DubboAutoConfiguration创建过早的问题。

### 依赖升级

- 更新bytebuddy.version: 1.14.15 -> 1.14.17 #14273
- 更新com.alibaba.fastjson2:fastjson2: 2.0.49 -> 2.0.51 #14272
- 更新io.opentelemetry:opentelemetry-bom: 1.38.0 -> 1.39.0 #14304
- 更新jakarta.validation:jakarta.validation-api: 3.0.2 -> 3.1.0 #14239
- 更新net.bytebuddy:byte-buddy: 1.14.15 -> 1.14.17 #14238, #14275
- 更新netty4_version: 4.1.109.Final -> 4.1.110.Final #14241
- 更新org.apache.commons:commons-compress: 1.26.1 -> 1.26.2 #14243
- 更新opentelemetry: 1.34.1 -> 1.38.0 #14252
- 更新zipkin-reporter: 2.17.2 -> 3.4.0 #14252
- 更新spring_version: 5.3.35 -> 5.3.36 #14242
- 更新micrometer-tracing: 1.2.5 -> 1.3.0 #14284

## 贡献者

Dubbo感谢以下贡献者对此版本的贡献：aofall, caoyanan666, liaozan, songxiaosheng, wcy666103, xixingya, yuanxingke。

## 新贡献者

- yuanxingke在#14235中做出了他们的第一次贡献。

**完整的变更记录**：[dubbo-3.2.13...dubbo-3.2.14](https://github.com/apache/dubbo/compare/dubbo-3.2.13...dubbo-3.2.14)